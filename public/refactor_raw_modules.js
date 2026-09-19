require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
  process.exit(1);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateWithGemini(promptText) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: { responseMimeType: "application/json" }
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          console.log(`Rate limited! Retrying in 15s...`);
          await sleep(15000);
          retries--;
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
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

async function runRefactor() {
  const filesToProcess = [
    "Pathfinder_Elite/modules/Current_Affairs/General_Knowledge_Static_Review.md",
    "Pathfinder_Elite/modules/History/Ancient_India_Core_and_MCQs.md",
    "Pathfinder_Elite/modules/Physics/Measurement_Motion_Work_Energy_and_Power.md"
  ];
  
  let allExtractedMCQs = [];

  for (let i = 0; i < filesToProcess.length; i++) {
    const filePath = filesToProcess[i];
    console.log(`Processing [${i+1}/${filesToProcess.length}]: ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
        console.log(` -> File not found, skipping.`);
        continue;
    }

    let fileContent = fs.readFileSync(filePath, 'utf8');
    let formattedMarkdown = "";
    const chunkSize = 25000;
    
    for (let c = 0; c < fileContent.length; c += chunkSize) {
      let chunk = fileContent.substring(c, c + chunkSize);
      console.log(`   -> Processing chunk ${c/chunkSize + 1} of ${Math.ceil(fileContent.length/chunkSize)}...`);

      const prompt = `
You are an expert educator and markdown formatter. 
I have a chunk of a chapter of notes that was copy-pasted and contains raw unformatted text, broken Mermaid diagrams, and Multiple Choice Questions (MCQs) appended at the end or embedded within.

Your task is twofold:
1. REWRITE and ENHANCE the chunk to make it highly detailed, structured, and beautifully formatted using standard Markdown/HTML tags (<h2>, <h3>, <ul>, <table>, <p>, <strong>, etc.). Fix any Mermaid diagram syntax errors (especially unquoted characters like parentheses in node names) and retain the "## Visual Summary & Diagrams" section if present. Do not add introductory or concluding conversational text.
CRITICAL RULE: DO NOT include ANY Multiple Choice Questions, practice questions, or quizzes in the output notes markdown.
2. EXTRACT all existing Multiple Choice Questions (MCQs) from the provided text. If there are none, return an empty array.

Output STRICTLY in the following JSON schema:
{
  "formatted_markdown": "The rewritten chunk as a single markdown string without MCQs and with fixed Mermaid diagrams",
  "extracted_mcqs": [
    {
      "question": "The question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": "The correct option exactly as it appears in the options array (infer it if not explicitly stated, or mark 'N/A' if unknown)",
      "explanation": "A short explanation for why it is correct"
    }
  ]
}

Here is the raw content chunk:
\`\`\`markdown
${chunk}
\`\`\`
      `;

      try {
        const responseText = await generateWithGemini(prompt);
        const parsed = parseJsonSafely(responseText);
        
        if (parsed.formatted_markdown) {
          formattedMarkdown += parsed.formatted_markdown + "\\n\\n";
        }

        const mcqs = parsed.extracted_mcqs || [];
        console.log(`     -> Extracted ${mcqs.length} MCQs from chunk.`);
        
        let topic = filePath.split('/').pop().replace('.md', '');
        mcqs.forEach(m => m.topic = topic);
        allExtractedMCQs.push(...mcqs);
        
      } catch(e) {
        console.error(`Failed to process chunk in ${filePath}: ${e.message}`);
      }
      
      await sleep(5000);
    }
    
    if (formattedMarkdown.trim().length > 0) {
      fs.writeFileSync(filePath, formattedMarkdown);
      console.log(` -> Overwrote ${filePath} with formatted markdown.`);
    }
  }

  fs.writeFileSync('Pathfinder_Elite/extracted_raw_mcqs.json', JSON.stringify(allExtractedMCQs, null, 2));
  console.log(`Saved ${allExtractedMCQs.length} total extracted MCQs to Pathfinder_Elite/extracted_raw_mcqs.json`);
}

runRefactor();
