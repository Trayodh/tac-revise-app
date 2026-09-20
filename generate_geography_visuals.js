require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) { console.error("Missing GEMINI_API_KEY"); process.exit(1); }

const OUT_DIR_BASE = path.join(__dirname, 'www', 'assets', 'geography');

const promptTemplate = `
You are an expert Geography educator building a Visual Learning Engine for NDA/CDS/AFCAT exams.
Read the following chunk of text from a Geography textbook/notes. 
Identify ALL concepts that should be visualized (diagrams, flowcharts, timelines, maps, etc.).

For each visual, decide the BEST format to generate it:
1. "Mermaid" - For flowcharts, classification trees, process diagrams (e.g. Rock cycle, Earth structure). Provide the complete, valid Mermaid code block. Use standard flowchart TD or LR, mindmap, or block. Do not use experimental syntax. Do not wrap in markdown code blocks.
2. "RealMap" - For factual geographic maps (e.g., "India Mountains", "World Ocean Currents"). We will fetch this from a real map database. Provide a concise search query (e.g., "India physical map SVG", "Koppen climate classification map").

Output EXACTLY in this JSON structure (NO MARKDOWN WRAPPING):
{
  "visuals": [
    {
      "title": "Short Descriptive Title",
      "subject": "Geography",
      "category": "Physical" | "Indian" | "World" | "Environment" | "Defence" | "Climate" | "Resources" | "Agriculture" | "Oceanography" | "Hydrology",
      "chapter": "Chapter Name (infer from text)",
      "topic": "Topic Name",
      "format": "Mermaid" | "RealMap",
      "mermaidCode": "graph TD\\nA-->B", 
      "mapQuery": "search query",
      "description": "Detailed caption/description of the visual",
      "keywords": ["key1", "key2"]
    }
  ]
}

Text Chunk:
`;

function extractTextFromJS(jsPath) {
    const jsContent = fs.readFileSync(jsPath, 'utf-8');
    let textContent = "";
    
    // Quick regex to extract strings assigned to EXPANDED_NOTES_DATA
    const regex = /EXPANDED_NOTES_DATA\[.*?\]\s*=\s*`([\s\S]*?)`;/g;
    let match;
    while ((match = regex.exec(jsContent)) !== null) {
        // Remove HTML tags
        let cleanText = match[1].replace(/<[^>]+>/g, ' ');
        textContent += cleanText + "\n\n";
    }
    return textContent;
}

function chunkText(text, chunkSize = 15000) {
    const chunks = [];
    let current = 0;
    while (current < text.length) {
        let end = current + chunkSize;
        if (end < text.length) {
            const nextNewline = text.indexOf('\n', end);
            if (nextNewline !== -1 && nextNewline - end < 1000) end = nextNewline;
        }
        chunks.push(text.slice(current, end));
        current = end;
    }
    return chunks;
}

async function searchWikimedia(query) {
    try {
        const fetch = (await import('node-fetch')).default;
        const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=File:${encodeURIComponent(query)}&srnamespace=6&format=json`;
        const res = await fetch(searchUrl);
        const data = await res.json();
        
        if (data.query.search.length > 0) {
            const title = data.query.search[0].title;
            const imgInfoUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`;
            const imgRes = await fetch(imgInfoUrl);
            const imgData = await imgRes.json();
            const pages = imgData.query.pages;
            const pageId = Object.keys(pages)[0];
            if (pages[pageId].imageinfo) {
               return pages[pageId].imageinfo[0].url;
            }
        }
    } catch(e) {
        console.error("Error searching wikimedia:", e.message);
    }
    return null;
}

async function downloadImage(url, destPath) {
    try {
        const fetch = (await import('node-fetch')).default;
        const res = await fetch(url);
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(destPath, Buffer.from(buffer));
        return true;
    } catch(e) {
        console.error("Error downloading image:", e.message);
        return false;
    }
}

async function processChunk(chunk) {
    console.log("Analyzing text chunk for visuals via Gemini...");
    try {
        const fetch = (await import('node-fetch')).default;
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              contents: [{ parts: [{ text: promptTemplate + chunk }] }],
              generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                  type: "OBJECT",
                  properties: {
                    visuals: {
                      type: "ARRAY",
                      items: {
                        type: "OBJECT",
                        properties: {
                          title: { type: "STRING" },
                          subject: { type: "STRING" },
                          category: { type: "STRING" },
                          chapter: { type: "STRING" },
                          topic: { type: "STRING" },
                          format: { type: "STRING", enum: ["Mermaid", "RealMap"] },
                          mermaidCode: { type: "STRING" },
                          mapQuery: { type: "STRING" },
                          description: { type: "STRING" },
                          keywords: { type: "ARRAY", items: { type: "STRING" } }
                        },
                        required: ["title", "subject", "category", "chapter", "topic", "format", "description", "keywords"]
                      }
                    }
                  },
                  required: ["visuals"]
                },
                temperature: 0.1
              }
            })
        });
        
        const jsonResponse = await res.json();
        if (jsonResponse.error) {
            console.error("Gemini Response Error:", JSON.stringify(jsonResponse.error, null, 2));
            return;
        }

        const rawText = jsonResponse.candidates[0].content.parts[0].text;
        let results = JSON.parse(rawText).visuals;
        
        if (!results || !Array.isArray(results)) {
            console.log("No visuals array found in response.");
            return;
        }
        
        for (const item of results) {
            const outDir = path.join(OUT_DIR_BASE, item.category || 'General');
            if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, {recursive: true}); }

            const safeTitle = item.title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
            const baseFilename = path.join(outDir, safeTitle);
            
            // Save Metadata
            fs.writeFileSync(`${baseFilename}.json`, JSON.stringify(item, null, 2));

            if (item.format === 'Mermaid' && item.mermaidCode) {
                console.log(`Generating Mermaid for: ${item.title}`);
                const mmdPath = `${baseFilename}.mmd`;
                fs.writeFileSync(mmdPath, item.mermaidCode.trim());
                console.log(` -> Success! Saved Mermaid code for ${item.title}`);
            } else if (item.format === 'RealMap' && item.mapQuery) {
                console.log(`Fetching Real Map for: ${item.title} (Query: ${item.mapQuery})`);
                const url = await searchWikimedia(item.mapQuery);
                if (url) {
                    const ext = url.split('.').pop().toLowerCase();
                    const destPath = `${baseFilename}.${ext}`;
                    const downloaded = await downloadImage(url, destPath);
                    if (downloaded) console.log(` -> Success! Downloaded map: ${url}`);
                } else {
                    console.log(` -> Could not find suitable map on Wikimedia for query.`);
                }
            }
        }
    } catch(e) {
        console.error("Error processing chunk:", e.message);
    }
}

async function run(jsPath) {
    console.log(`Reading ${jsPath}...`);
    const text = extractTextFromJS(jsPath);
    console.log(`Extracted ${text.length} characters.`);
    const chunks = chunkText(text, 15000);
    console.log(`Split into ${chunks.length} chunks.`);
    
    // Process ALL chunks
    for (let i = 0; i < chunks.length; i++) {
        console.log(`\n--- Processing Chunk ${i+1}/${chunks.length} ---`);
        await processChunk(chunks[i]);
        await new Promise(r => setTimeout(r, 2000)); // sleep
    }
    console.log("Visual Generation Pipeline complete.");
}

const targetJs = process.argv[2];
if (targetJs) {
    run(targetJs);
} else {
    console.log("Usage: node generate_geography_visuals.js <path_to_js_notes>");
}
