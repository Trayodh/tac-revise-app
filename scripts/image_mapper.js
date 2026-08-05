require('dotenv').config();
const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const assetsBase = path.join(__dirname, '../assets/geography');
const notesBase = path.join(__dirname, '../evolved_notes/geography');

async function main() {
  if (!GEMINI_API_KEY) {
    console.error("Please set GEMINI_API_KEY environment variable.");
    process.exit(1);
  }

  // 1. Load Visuals DB
  const dbContent = fs.readFileSync(path.join(assetsBase, 'visuals_db.js'), 'utf-8');
  let jsonStr = dbContent.replace(/^[\s\S]*?window\.GEOGRAPHY_VISUALS_DB\s*=\s*/, '').trim();
  if (jsonStr.endsWith(';')) jsonStr = jsonStr.slice(0, -1);
  
  let visuals;
  try {
    visuals = JSON.parse(jsonStr);
  } catch (e) {
    console.error("Failed to parse visuals_db.js as JSON", e);
    process.exit(1);
  }

  // Pre-resolve actual file extensions for all visuals
  const resolvedVisuals = visuals.map(v => {
    let ext = '.png';
    const baseName = v.relPath.replace('.json', '');
    const possibleExts = ['.png', '.svg', '.jpg', '.jpeg', '.pdf'];
    for (const e of possibleExts) {
      if (fs.existsSync(path.join(assetsBase, baseName + e))) {
        ext = e;
        break;
      }
    }
    return {
      title: v.title,
      description: v.description,
      format: v.format,
      mermaidCode: v.mermaidCode,
      chapter: v.chapter,
      topic: v.topic,
      resolvedPath: `../../assets/geography${baseName}${ext}`
    };
  });

  // 2. Iterate over Markdown files
  const mdFiles = fs.readdirSync(notesBase).filter(f => f.endsWith('.md'));

  for (const file of mdFiles) {
    console.log(`\n===========================================`);
    console.log(`Processing mapping for: ${file}`);
    
    const mdPath = path.join(notesBase, file);
    let mdContent = fs.readFileSync(mdPath, 'utf-8');
    
    // Extract outline (Headings)
    const headingsMatch = mdContent.match(/^#{1,6}\s+.+$/gm);
    if (!headingsMatch) {
      console.log(`No headings found in ${file}, skipping.`);
      continue;
    }
    const outline = headingsMatch.join('\n');

    const result = await getMappingFromGemini(file, outline, resolvedVisuals);
    if (result && Array.isArray(result) && result.length > 0) {
      console.log(`Received ${result.length} mappings from AI. Injecting...`);
      
      let modified = false;
      for (const placement of result) {
        const targetHeading = placement.targetHeading;
        if (mdContent.includes(targetHeading)) {
          console.log(` -> Injecting '${placement.title}' after '${targetHeading}'`);
          let syntax = ``;
          if (placement.mermaidCode && placement.format === 'Mermaid') {
            syntax = `\n\n\`\`\`mermaid\n${placement.mermaidCode}\n\`\`\`\n*${placement.title}*\n`;
          } else {
            syntax = `\n\n![${placement.title}](${placement.path})\n*${placement.title}*\n`;
          }
          
          // Replace first occurrence of the heading
          mdContent = mdContent.replace(targetHeading, targetHeading + syntax);
          modified = true;
        } else {
          console.warn(` [!] Heading not found in doc: '${targetHeading}'`);
        }
      }

      if (modified) {
        fs.writeFileSync(mdPath, mdContent, 'utf-8');
        console.log(`Successfully updated ${file}`);
      }
    } else {
      console.log(`No suitable visuals found for ${file}.`);
    }
  }
}

async function getMappingFromGemini(filename, outline, allVisuals) {
  const prompt = `You are an expert AI educational mapper.
Your task is to select the most relevant visuals for a specific document and map them to the exact headings where they belong.

DOCUMENT: ${filename}

DOCUMENT OUTLINE (Available Headings):
${outline}

AVAILABLE VISUAL ASSETS (Full Database):
${JSON.stringify(allVisuals, null, 2)}

INSTRUCTIONS:
1. Review the DOCUMENT OUTLINE to understand the topics covered in this specific markdown file.
2. Select between 1 and 6 visual assets from the AVAILABLE VISUAL ASSETS that perfectly match the topics covered in the outline.
3. For each selected visual, choose the most pedagogically appropriate heading from the DOCUMENT OUTLINE where the visual should be inserted.
4. The \`targetHeading\` MUST EXACTLY match one of the lines provided in the DOCUMENT OUTLINE. Do not modify the heading string in any way.
5. You MUST return ONLY a raw JSON array of objects. Do not wrap in markdown fences.

Schema of the JSON objects to return:
{
  "title": "<title of the visual>",
  "path": "<resolvedPath from the visual asset>",
  "format": "<format from the visual asset>",
  "mermaidCode": "<mermaidCode from the visual asset, ONLY if format is Mermaid>",
  "targetHeading": "<Exact heading string from the outline, e.g., '### 1. The Solar System'>"
}

Return an empty array [] if no visuals are relevant for this document.
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: "You are a JSON-only API that outputs mapping data." }] },
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Gemini API HTTP Error:", err);
      return null;
    }

    const data = await res.json();
    let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    text = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    return JSON.parse(text);
  } catch (err) {
    console.error("Error communicating with Gemini or parsing JSON:", err);
    return null;
  }
}

main();
