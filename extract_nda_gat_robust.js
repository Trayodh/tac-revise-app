require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

global.DOMMatrix = class DOMMatrix {};
global.ImageData = class ImageData {};
global.Path2D = class Path2D {};

const pdfParse = require('pdf-parse');
const path = require('path');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const CHUNK_SIZE = 12000; 
const DELAY_MS = 25000; 

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function extractQuestionsFromTextChunk(textChunk, chunkIndex, totalChunks, fileName) {
    const prompt = `You are an expert UPSC NDA exam content creator.
I have provided a chunk of raw text extracted from an official NDA General Ability Test (GAT) Question Paper PDF.
Your task is to extract all the multiple-choice questions from this text chunk.
NDA GAT consists of English (Questions 1-50) and General Knowledge (Questions 51-150).

Output MUST be a raw JSON array of objects with this exact structure:
[
  {
    "question": "The full question text.",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "correct": 0, // index of correct option (0-3). If you don't know it, guess based on knowledge.
    "explanation": "Detailed factual explanation of why this option is correct.",
    "subject": "english | physics | chemistry | biology | history | geography | polity | current_affairs"
  }
]

CRITICAL RULES:
1. You MUST properly classify the "subject" of each question. For questions 1-50 (or grammar/vocab), use "english". For GK, choose the most appropriate specific subject from: physics, chemistry, biology, history, geography, polity, current_affairs. Do NOT just use "general_knowledge".
2. Output ONLY raw JSON array. Do not use markdown backticks, do not include any text before or after the JSON.
3. Do not extract incomplete questions. If a question is cut off at the end of the text, ignore it.`;

    console.log(`Sending chunk ${chunkIndex}/${totalChunks} of ${fileName} to Gemini... (length: ${textChunk.length} chars)`);
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
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
            // Sometimes it wraps it incorrectly or leaves trailing commas
            return [];
        }
    } catch (err) {
        console.error(`API Error on chunk ${chunkIndex}:`, err.message);
        return [];
    }
}

async function main() {
    const paperDir = 'NDA Papers';
    if (!fs.existsSync(paperDir)) {
        console.log(`Directory ${paperDir} not found.`);
        return;
    }

    const files = fs.readdirSync(paperDir).filter(f => f.endsWith('.pdf') && (f.includes('GENERAL-ABILITY') || f.includes('GAT') || f.includes('GENERAL_ABILITY')));
    console.log(`Found ${files.length} NDA GAT PDFs to process.`);

    let extractedData = [];
    const outputFilePath = 'question_banks/nda_gat_extracted_temp.json';

    // Load existing extracted data to resume
    if (fs.existsSync(outputFilePath)) {
        try {
            extractedData = JSON.parse(fs.readFileSync(outputFilePath, 'utf8'));
            console.log(`Loaded ${extractedData.length} previously extracted questions.`);
        } catch(e) {
            console.log("Could not parse existing temp file, starting fresh.");
        }
    }

    for (const file of files) {
        const filePath = path.join(paperDir, file);
        console.log(`\n--- Reading ${filePath} ---`);
        
        let pdfText = "";
        try {
            const dataBuffer = fs.readFileSync(filePath);
            const parser = new pdfParse.PDFParse({ data: new Uint8Array(dataBuffer) });
            await parser.load();
            const pdfRes = await parser.getText();
            pdfText = pdfRes.text;
        } catch (e) {
            console.error(`Failed to parse PDF locally: ${e.message}`);
            continue;
        }

        console.log(`Local parsing complete. Total text length: ${pdfText.length} characters.`);
        
        // Chunk the text safely around newlines
        const chunks = [];
        let currentIndex = 0;
        while (currentIndex < pdfText.length) {
            let endIndex = currentIndex + CHUNK_SIZE;
            if (endIndex < pdfText.length) {
                // Try to find a double newline or at least a single newline to break
                let breakIndex = pdfText.lastIndexOf('\n\n', endIndex);
                if (breakIndex <= currentIndex) {
                    breakIndex = pdfText.lastIndexOf('\n', endIndex);
                }
                if (breakIndex > currentIndex) {
                    endIndex = breakIndex;
                }
            }
            chunks.push(pdfText.substring(currentIndex, endIndex));
            currentIndex = endIndex;
        }

        console.log(`Split into ${chunks.length} chunks. Processing will take ~${(chunks.length * DELAY_MS / 1000 / 60).toFixed(1)} minutes.`);

        for (let j = 0; j < chunks.length; j++) {
            const parsedQs = await extractQuestionsFromTextChunk(chunks[j], j + 1, chunks.length, file);
            
            // Add a source tag for debugging
            parsedQs.forEach(q => q.source = file);
            
            extractedData.push(...parsedQs);
            
            if (!fs.existsSync('question_banks')) fs.mkdirSync('question_banks');
            fs.writeFileSync(outputFilePath, JSON.stringify(extractedData, null, 2), 'utf8');

            if (j < chunks.length - 1) {
                console.log(`Waiting ${DELAY_MS/1000} seconds to bypass rate limits...`);
                await delay(DELAY_MS);
            }
        }
        
        console.log(`Finished processing ${file}`);
        // Delay between files
        await delay(DELAY_MS);
    }

    console.log(`\nExtraction completely finished! Total questions extracted so far: ${extractedData.length}`);
}

main();

