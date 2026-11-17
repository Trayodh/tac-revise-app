require('dotenv').config();
const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function processGATPDF(pdfPath, mockIndex) {
  console.log(`Processing ${pdfPath} ...`);
  
  let uploadResult;
  let retries = 3;
  while (retries > 0) {
    try {
      console.log(`Uploading file via File API... (Retries left: ${retries})`);
      uploadResult = await ai.files.upload({ file: pdfPath, mimeType: 'application/pdf' });
      console.log("Upload complete: ", uploadResult.name);
      break;
    } catch (err) {
      console.error("Failed to upload file:", err.message);
      retries--;
      if (retries === 0) return [];
      console.log("Retrying in 5 seconds...");
      await new Promise(r => setTimeout(r, 5000));
    }
  }

  console.log("Waiting 10 seconds for file processing...");
  await new Promise(r => setTimeout(r, 10000));

  const prompt = `
You are an expert UPSC NDA exam content creator.
I have provided an official scanned NDA General Ability Test (GAT) Question Paper as a PDF.
Your task is to carefully read the text to extract all multiple-choice questions.
There are typically 150 questions in an NDA GAT paper (Q1 to Q50 are English, Q51 to Q150 are General Knowledge). Try to extract as many as you can read clearly (minimum 30 if possible).

For the English questions, set the topicId to "english".
For the General Knowledge questions, set the topicId to "general_knowledge".
Output MUST be EXACTLY a raw JSON array of objects. Do NOT use markdown backticks like \`\`\`json. Ensure strict JSON formatting.
Structure each object exactly like this:
{
  "id": "nda-gat-mock-${mockIndex}-Q#",
  "question": "Full question text.",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 0,
  "explanation": "Brief factual explanation of the correct answer.",
  "topicId": "english or general_knowledge"
}
Output ONLY raw JSON array.
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
              { text: prompt }
            ]
          }
        ],
        generationConfig: { temperature: 0.1 }
      })
    });
    
    const data = await res.json();
    if (!data.candidates) {
      console.error("Error from Gemini:", JSON.stringify(data, null, 2));
      return [];
    }
    let text = data.candidates[0].content.parts[0].text;
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(text);
  } catch (err) {
    console.error("Error processing PDF:", err);
    return [];
  }
}

async function main() {
  const mockData = {};
  for (let i = 1; i <= 3; i++) {
    const pdfPath = `scratch/pdf_downloads/nda_gat_mock_${i}.pdf`;
    if (!fs.existsSync(pdfPath)) {
      console.log(`Missing ${pdfPath}, skipping...`);
      continue;
    }
    const questions = await processGATPDF(pdfPath, i);
    console.log(`Extracted ${questions.length} questions for Mock ${i}`);
    
    if (questions.length > 0) {
      questions.forEach((q, idx) => {
        q.id = `nda-gat-mock-${i}-Q${idx+1}`;
      });
      mockData[`NDA_GAT_MOCK_${i}`] = questions;
    }
  }

  if (Object.keys(mockData).length > 0) {
    console.log("Injecting into data.js...");
    let dataStr = fs.readFileSync('data.js', 'utf8');
    const start = dataStr.indexOf('const CBT_EXAMS_DATABASE');
    let injection = "\n";
    for (let key in mockData) {
      injection += `var ${key} = ${JSON.stringify(mockData[key], null, 2)};\n`;
    }
    const newDataStr = dataStr.substring(0, start) + injection + '\n' + dataStr.substring(start);
    fs.writeFileSync('data.js', newDataStr);
    
    console.log("Successfully extracted and injected!");
  } else {
    console.log("No data extracted.");
  }
}

main();
