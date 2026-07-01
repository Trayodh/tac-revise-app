require('dotenv').config();
const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function analyzeGAT(pdfPath) {
  console.log(`Analyzing ${pdfPath} ...`);
  
  let uploadResult;
  try {
    uploadResult = await ai.files.upload({ file: pdfPath, mimeType: 'application/pdf' });
    console.log("Upload complete: ", uploadResult.name);
  } catch (err) {
    console.error("Failed to upload file:", err);
    return;
  }

  console.log("Waiting 10 seconds for file processing...");
  await new Promise(r => setTimeout(r, 10000));

  const prompt = `
You are an expert on the UPSC NDA (National Defence Academy) Examination.
I have uploaded an official NDA General Ability Test (GAT) PDF.
Your task is to analyze this specific paper and provide a detailed breakdown of the Syllabus, Question Patterns, and Weightage (number of questions per subject).

Specifically, identify:
1. Total number of questions.
2. The exact subjects tested (e.g., English Grammar, Physics, Chemistry, Biology, History, Geography, Current Affairs).
3. The approximate number of questions dedicated to each of those subjects in this paper.
4. Any recurring patterns (e.g., "English questions are always Q1-Q50").

Output your findings as a clean Markdown report.
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
      return;
    }
    const report = data.candidates[0].content.parts[0].text;
    fs.writeFileSync('gat_analysis.md', report);
    console.log("Analysis saved to gat_analysis.md");
  } catch (err) {
    console.error("Error processing PDF:", err);
  }
}

analyzeGAT('scratch/pdf_downloads/gat_syllabus/QP-GAT-NDANA-EXAM-II-2021-161121.pdf');
