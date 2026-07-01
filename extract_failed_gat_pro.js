require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const FAILED_FILES = [
  "QP-NDA-NA-I-26-GENERAL-ABILITY-TEST-130426.pdf",
  "QP-NDA-NA-II-24-GENERAL-ABILITY-TEST-020924.pdf",
  "QP-NDANA-II-25-GENERAL-ABILITY-TEST-150925.pdf",
  "QP_NDANAI2024_GENERAL-ABILITY-TEST_22042024.pdf"
];

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
There are typically 150 questions in an NDA GAT paper (Q1 to Q50 are English, Q51 to Q150 are General Knowledge). Try to extract as many as you can read clearly.

For the English questions, set the topicId to "english".
For the General Knowledge questions, set the topicId to "general_knowledge".
Output MUST be EXACTLY a raw JSON array of objects. Do NOT use markdown backticks like \`\`\`json. Ensure strict JSON formatting.
Ensure you properly escape all quotes in strings, especially in complex passages.
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
    // USING GEMINI-2.5-PRO FOR HIGHER REASONING/COMPLEX PARSING
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${GEMINI_API_KEY}`, {
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
  const syllabusDir = 'scratch/pdf_downloads/gat_syllabus';
  const mockData = {};
  
  let mockIndex = 9; // Since 1-8 are already injected
  
  for (const file of FAILED_FILES) {
    const pdfPath = path.join(syllabusDir, file);
    if (!fs.existsSync(pdfPath)) {
        console.log(`Skipping missing file: ${file}`);
        continue;
    }
    const questions = await processGATPDF(pdfPath, mockIndex);
    console.log(`Extracted ${questions.length} questions for Mock ${mockIndex}`);
    
    if (questions.length > 0) {
      questions.forEach((q, idx) => {
        q.id = `nda-gat-mock-${mockIndex}-Q${idx+1}`;
      });
      mockData[`NDA_GAT_MOCK_${mockIndex}`] = questions;
      mockIndex++;
    }
  }

  if (Object.keys(mockData).length > 0) {
    console.log("Saving failed papers as vars to data.js...");
    let dataStr = fs.readFileSync('data.js', 'utf8');
    const start = dataStr.indexOf('const CBT_EXAMS_DATABASE');
    let injection = "\n";
    for (let key in mockData) {
      injection += `var ${key} = ${JSON.stringify(mockData[key], null, 2)};\n`;
    }
    const newDataStr = dataStr.substring(0, start) + injection + '\n' + dataStr.substring(start);
    fs.writeFileSync('data.js', newDataStr);
    console.log("Wrote raw variables to data.js! You will need to run the restore script to link them to CBT_EXAMS_DATABASE.");
  } else {
    console.log("No data extracted.");
  }
}

main();
