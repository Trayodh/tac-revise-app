require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const pdfParse = require('pdf-parse');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const pdfFiles = [
  { path: 'PYQ Papers/CDS-20252-GS-paper_14-Sept.-2025.pdf', subject: 'gs' },
  { path: 'PYQ Papers/CDS-1-GS-Question-Paper-12-April-2026-exam-1.pdf', subject: 'gs' },
  { path: 'PYQ Papers/CDS-2-2025-English-question-paper_14.09.2025.pdf', subject: 'english' },
  { path: 'PYQ Papers/CDS-1-English-Question-Paper-12-April-2026-exam-1.pdf', subject: 'english' },
];

const CHUNK_SIZE = 15000; // ~4000 tokens
const DELAY_MS = 35000; // 35 seconds to bypass 2 RPM free tier limit

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function extractQuestionsFromTextChunk(textChunk, subject, chunkIndex, totalChunks) {
    const prompt = `You are an expert UPSC CDS exam content creator.
I have provided a chunk of raw text extracted from an official CDS Question Paper PDF.
Your task is to extract all the multiple-choice questions from this text chunk.

Output MUST be a raw JSON array of objects with this exact structure:
[
  {
    "question": "The full question text.",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "correct": 0, // index of correct option (0-3). If you don't know it, guess based on knowledge.
    "explanation": "Detailed explanation of why this option is correct.",
    "topicId": "${subject === 'gs' ? 'general_knowledge' : 'english'}"
  }
]
Output ONLY raw JSON. Do not use markdown backticks, do not include any text before or after the JSON.
Do not extract incomplete questions. If a question is cut off at the end of the text, ignore it.`;

    console.log(`Sending chunk ${chunkIndex}/${totalChunks} to Gemini... (length: ${textChunk.length} chars)`);
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: [
                {
                    role: 'user',
                    parts: [
                        { text: prompt },
                        { text: textChunk }
                    ]
                }
            ],
            config: { temperature: 0.1 }
        });

        let rawText = response.text;
        if (rawText.startsWith('```json')) {
            rawText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');
        } else if (rawText.startsWith('```')) {
            rawText = rawText.replace(/^```\n/, '').replace(/\n```$/, '');
        }

        try {
            const parsed = JSON.parse(rawText);
            console.log(`Success: Extracted ${parsed.length} questions from chunk ${chunkIndex}.`);
            return parsed;
        } catch (e) {
            console.error(`JSON Parse Error on chunk ${chunkIndex}: ${e.message}`);
            return [];
        }
    } catch (err) {
        console.error(`API Error on chunk ${chunkIndex}:`, err.message);
        return [];
    }
}

async function main() {
    let allQuestions = { gs: [], english: [] };

    // Load existing bank if available so we don't lose data on crash
    if (fs.existsSync('question_banks/cds_pyq_bank.json')) {
        try {
            allQuestions = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));
            if (!allQuestions.gs) allQuestions.gs = [];
            if (!allQuestions.english) allQuestions.english = [];
        } catch(e) {}
    }

    for (let fileObj of pdfFiles) {
        if (!fs.existsSync(fileObj.path)) {
            console.log(`Skipping missing file: ${fileObj.path}`);
            continue;
        }

        console.log(`\n--- Reading ${fileObj.path} ---`);
        const dataBuffer = fs.readFileSync(fileObj.path);
        let pdfText = "";
        try {
            const parser = new pdfParse.PDFParse({ data: new Uint8Array(dataBuffer) });
            await parser.load();
            const pdfRes = await parser.getText();
            pdfText = pdfRes.text;
        } catch (e) {
            console.error(`Failed to parse PDF locally: ${e.message}`);
            continue;
        }

        console.log(`Local parsing complete. Total text length: ${pdfText.length} characters.`);
        
        // Chunk the text
        const chunks = [];
        for (let i = 0; i < pdfText.length; i += CHUNK_SIZE) {
            // Try to break at a newline instead of cutting mid-word if possible
            let end = Math.min(i + CHUNK_SIZE, pdfText.length);
            // We just do naive chunking for now, model usually handles overlap
            chunks.push(pdfText.substring(i, end));
        }

        console.log(`Split into ${chunks.length} chunks. Processing will take ~${(chunks.length * DELAY_MS / 1000 / 60).toFixed(1)} minutes.`);

        for (let j = 0; j < chunks.length; j++) {
            const parsedQs = await extractQuestionsFromTextChunk(chunks[j], fileObj.subject, j + 1, chunks.length);
            allQuestions[fileObj.subject].push(...parsedQs);
            
            // Save state incrementally
            if (!fs.existsSync('question_banks')) fs.mkdirSync('question_banks');
            fs.writeFileSync('question_banks/cds_pyq_bank.json', JSON.stringify(allQuestions, null, 2), 'utf8');

            if (j < chunks.length - 1) {
                console.log(`Waiting ${DELAY_MS/1000} seconds to bypass rate limits...`);
                await delay(DELAY_MS);
            }
        }
    }

    console.log(`\nExtraction completely finished! Total GS: ${allQuestions.gs.length}, Total English: ${allQuestions.english.length}`);
}

main();
