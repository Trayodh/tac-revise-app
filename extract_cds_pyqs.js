require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const pdfFiles = [
  { path: 'PYQ Papers/CDS-1-English-Question-Paper-12-April-2026-exam-1.pdf', subject: 'english' },
  { path: 'PYQ Papers/CDS-1-GS-Question-Paper-12-April-2026-exam-1.pdf', subject: 'gs' },
  { path: 'PYQ Papers/CDS-2-2025-English-question-paper_14.09.2025.pdf', subject: 'english' },
  { path: 'PYQ Papers/CDS-20252-GS-paper_14-Sept.-2025.pdf', subject: 'gs' },
  { path: 'AFCAT Papers/AFCAT Solved Paper-II 2025.pdf', subject: 'afcat' },
  { path: 'AFCAT Papers/AFCAT Solved Paper-II 2023.pdf', subject: 'afcat' },
  { path: 'AFCAT Papers/AFCAT Solved Paper-II 2022.pdf', subject: 'afcat' },
];

async function main() {
  let allQuestions = { gs: [], english: [], maths: [], afcat: [] };
  if (fs.existsSync('question_banks/cds_pyq_bank.json')) {
      const existing = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));
      allQuestions.gs = existing.gs || [];
      allQuestions.english = existing.english || [];
      allQuestions.maths = existing.maths || [];
      allQuestions.afcat = existing.afcat || [];
  }

  for (let fileObj of pdfFiles) {
    if (!fs.existsSync(fileObj.path)) {
      console.log(`Skipping missing file: ${fileObj.path}`);
      continue;
    }
    
    console.log(`\nUploading ${fileObj.path} to Gemini...`);
    try {
      const uploadResult = await ai.files.upload({
          file: fileObj.path,
          mimeType: 'application/pdf',
      });
      
      console.log(`File uploaded successfully. URI: ${uploadResult.uri}`);
      console.log("Waiting 15 seconds for the file to be processed by Google...");
      await new Promise(resolve => setTimeout(resolve, 15000)); // wait for processing
    
      console.log(`Extracting high-quality PYQs for ${fileObj.subject}...`);
      
      const prompt = `You are an expert UPSC CDS exam content creator.
I have provided an official CDS Question Paper PDF. Your task is to extract ALL 120 questions from this paper.
Do not skip any questions.

Output MUST be a raw JSON array of objects with this exact structure:
[
  {
    "question": "The full question text.",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "correct": 0, // index of correct option (0-3). If you don't know it, guess based on knowledge.
    "explanation": "Detailed explanation of why this option is correct.",
    "topicId": "${fileObj.subject === 'gs' ? 'general_knowledge' : (fileObj.subject === 'english' ? 'english' : (fileObj.subject === 'maths' ? 'maths' : 'afcat'))}"
  }
]
Output ONLY raw JSON. Do not use markdown backticks, do not include any text before or after the JSON.
Ensure you extract as many questions as possible, aiming for all 120. If it's too long, output as many as you can before hitting output limits, but DO NOT TRUNCATE JSON mid-object. End cleanly.`;
    
      let response;
      const requestPayload = {
          contents: [
              {
                  role: 'user',
                  parts: [
                      { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
                      { text: prompt }
                  ]
              }
          ],
          config: { temperature: 0.1 }
      };

      try {
          console.log("Using primary model: gemini-flash-lite-latest...");
          response = await ai.models.generateContent({
              model: 'gemini-flash-lite-latest',
              ...requestPayload
          });
      } catch (err) {
          if (err.status === 429) {
              console.log("gemini-flash-lite-latest quota exhausted (429).");
              throw err;
          } else {
              throw err;
          }
      }
    
      let rawText = response.text;
      if (rawText.startsWith('```json')) {
        rawText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');
      } else if (rawText.startsWith('```')) {
        rawText = rawText.replace(/^```\n/, '').replace(/\n```$/, '');
      }
      
      try {
          const parsed = JSON.parse(rawText);
          console.log(`Successfully extracted ${parsed.length} questions from ${fileObj.path}`);
          allQuestions[fileObj.subject].push(...parsed);
      } catch (e) {
          console.error(`Failed to parse JSON for ${fileObj.path}: ${e.message}`);
          console.log("Saving raw output to debug.txt");
          fs.writeFileSync('debug.txt', rawText, 'utf8');
      }
    } catch (err) {
      console.error(`Failed to process ${fileObj.path}:`, err);
    }
  }

  console.log(`\nExtraction complete. Total GS: ${allQuestions.gs.length}, Total English: ${allQuestions.english.length}, Total Maths: ${allQuestions.maths.length}, Total AFCAT: ${allQuestions.afcat.length}`);
  if (!fs.existsSync('question_banks')) fs.mkdirSync('question_banks');
  fs.writeFileSync('question_banks/cds_pyq_bank.json', JSON.stringify(allQuestions, null, 2), 'utf8');
  console.log("Saved all extracted questions to question_banks/cds_pyq_bank.json");
}

main();
