require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function extractTaxonomy() {
  const pdfPath = path.join(__dirname, 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf');
  if (!fs.existsSync(pdfPath)) {
    console.error("PDF not found at:", pdfPath);
    process.exit(1);
  }

  console.log("Uploading Pathfinder PDF to Gemini File API...");
  // Use the files API to upload the PDF
  const uploadResponse = await ai.files.upload({
    file: pdfPath,
    mimeType: 'application/pdf',
  });
  
  console.log(`Uploaded file: ${uploadResponse.name}`);
  
  console.log("Waiting for file to be processed...");
  let fileInfo = await ai.files.get({name: uploadResponse.name});
  while (fileInfo.state === 'PROCESSING') {
    process.stdout.write('.');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    fileInfo = await ai.files.get({name: uploadResponse.name});
  }
  console.log(`\nFile is ready! State: ${fileInfo.state}`);
  
  console.log("Extracting Table of Contents / Taxonomy...");
  const prompt = `You are a curriculum mapping expert. Extract the complete Table of Contents from this Pathfinder textbook.
Return ONLY a structured JSON array of subjects. Each subject should have 'id' (snake_case), 'title', and an array of 'chapters'. Each chapter should have 'id', 'title', and an array of 'topics' (strings).

Example JSON structure:
[
  {
    "id": "history",
    "title": "History",
    "chapters": [
      {
        "id": "ancient_history",
        "title": "Ancient History",
        "topics": ["Indus Valley Civilization", "Vedic Age"]
      }
    ]
  }
]

DO NOT wrap in Markdown backticks (\`\`\`json). Return exactly the raw JSON string.`;

  const response = await ai.models.generateContent({
    model: 'gemini-1.5-flash',
    contents: [
      {
        role: 'user',
        parts: [
          { fileData: { fileUri: uploadResponse.uri, mimeType: uploadResponse.mimeType } },
          { text: prompt }
        ]
      }
    ]
  });
  
  let jsonText = response.text;
  if (jsonText.startsWith("```json")) jsonText = jsonText.substring(7);
  if (jsonText.startsWith("```")) jsonText = jsonText.substring(3);
  if (jsonText.endsWith("```")) jsonText = jsonText.substring(0, jsonText.length - 3);
  
  fs.writeFileSync('pathfinder_taxonomy.json', jsonText.trim());
  console.log("Extracted taxonomy saved to pathfinder_taxonomy.json");
  
  console.log("Cleaning up uploaded file...");
  await ai.files.delete({name: uploadResponse.name});
  console.log("File deleted from Gemini.");
}

extractTaxonomy().catch(console.error);
