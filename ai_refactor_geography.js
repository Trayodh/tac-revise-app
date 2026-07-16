require('dotenv').config();
const fs = require('fs');

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;

if (!CEREBRAS_API_KEY) {
  console.error("Missing CEREBRAS_API_KEY in .env");
  process.exit(1);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateWithCerebras(promptText) {
  const url = `https://api.cerebras.ai/v1/chat/completions`;
  
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CEREBRAS_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-oss-120b",
          messages: [{ role: "user", content: promptText }],
          response_format: { type: "json_object" },
          temperature: 0.1
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          console.log(`Rate limited! Retrying in 5s...`);
          await sleep(5000);
          retries--;
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      
      return data.choices[0].message.content || "";
    } catch (err) {
      console.error(`Fetch error:`, err.message);
      await sleep(5000);
      retries--;
    }
  }
  throw new Error("Failed to generate content after retries.");
}

function parseJsonSafely(str) {
  try {
    return JSON.parse(str);
  } catch(e) {
    const cleaned = str.replace(/^```json/mi, '').replace(/```$/mi, '').trim();
    return JSON.parse(cleaned);
  }
}

async function runBatch() {
  global.window = {};
  
  const geographyFiles = ['notes_extra_geography.js', 'notes_extra_physical_geography.js'];
  let allExtractedMCQs = [];
  
  for (const geographyFilePath of geographyFiles) {
    let geographyFileContent = fs.readFileSync(geographyFilePath, 'utf8');
    let allMatches = [...geographyFileContent.matchAll(/(?:window\.)?EXPANDED_NOTES_DATA\["([^"]+)"\]\s*=\s*`([\s\S]*?)`;/g)];
    
    const notesData = {};
    allMatches.forEach(match => { notesData[match[1]] = match[2]; });

    const keys = Object.keys(notesData);
    console.log(`Found ${keys.length} chapters to process in ${geographyFilePath}.`);
    
    let newFileOutput = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`;
    
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let htmlContent = notesData[key];
      console.log(`Processing [${i+1}/${keys.length}]: ${key} from ${geographyFilePath}`);
    
      if (false) {
         console.log(` -> Skipping ${key} (already enhanced)`);
         newFileOutput += `EXPANDED_NOTES_DATA["${key}"] = \`\n${htmlContent}\n\`;\n\n`;
         continue;
      }

      const prompt = `
You are an expert Geography educator for UPSC and Defence exams.
I have a chapter of geography notes in HTML format.

Your task is twofold:
1. REWRITE and ENHANCE the notes to make them highly detailed, structured, high-yield, and perfectly formatted using standard HTML tags (<h2>, <h3>, <ul>, <table>, <p>, <strong>, etc.). Do not include markdown code block syntax around the enhanced_html.
2. IMPORTANT MAP INTEGRATION: The user wants highly detailed, visual geographical maps integrated into the notes. You MUST add dynamic map images using the pollinations.ai free API. 
Whenever discussing a region, physical feature, climate zone, or geographical concept, insert an image tag like this:
<img src="https://image.pollinations.ai/prompt/Highly%20detailed%20geographical%20map%20of%20[YOUR_SUBJECT_HERE]%20high%20resolution%20atlas%20style?width=1024&height=768&nologo=true" alt="Map of [YOUR_SUBJECT]" style="width:100%; border-radius: 8px; margin: 15px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
Replace [YOUR_SUBJECT_HERE] with the specific topic (e.g. Himalayas, Indian Rivers, Monsoon winds, Soil types of India). ADD AT LEAST 2 MAPS PER CHAPTER.
3. EXTRACT all existing Multiple Choice Questions (MCQs) from the provided notes. If there are none, return an empty array. 
The enhanced notes MUST NOT CONTAIN any MCQs. Strip out all MCQs, Practice Questions, "QUESTIONS FROM CDS EXAM", etc., entirely from the text.

Output STRICTLY in the following JSON schema:
{
  "enhanced_html": "The rewritten HTML notes as a single string",
  "extracted_mcqs": [
    {
      "question": "The question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "The correct option exactly as it appears in the options array",
      "explanation": "A short explanation for why it is correct"
    }
  ]
}

Here are the notes:
\`\`\`html
${htmlContent}
\`\`\`
    `;

    try {
      const responseText = await generateWithCerebras(prompt);
      const parsed = parseJsonSafely(responseText);
      
      let enhancedHtml = parsed.enhanced_html || htmlContent;
      const mcqs = parsed.extracted_mcqs || [];
      
      console.log(` -> Enhanced. Extracted ${mcqs.length} MCQs.`);
      
      mcqs.forEach(m => m.topic = key);
      allExtractedMCQs.push(...mcqs);
      
      newFileOutput += `EXPANDED_NOTES_DATA["${key}"] = \`\n${enhancedHtml}\n\`;\n\n`;
    } catch(e) {
      console.error(`Failed to process ${key}: ${e.message}`);
      newFileOutput += `EXPANDED_NOTES_DATA["${key}"] = \`\n${htmlContent}\n\`;\n\n`;
    }
    
    // Slight sleep
    await sleep(500);
  }
    
    fs.writeFileSync(geographyFilePath, newFileOutput);
    console.log(`Successfully updated ${geographyFilePath}`);
  } // end of geographyFiles loop
  
  fs.writeFileSync('extracted_geography_mcqs.json', JSON.stringify(allExtractedMCQs, null, 2));
  console.log(`Saved ${allExtractedMCQs.length} total extracted MCQs to extracted_geography_mcqs.json`);
}

runBatch();
