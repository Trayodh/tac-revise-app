require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const CHUNKS_DIR = 'pdf_chunks';
// Flash has 15 RPM. So delay can be just 4 seconds to be safe.
const DELAY_MS = 5000; 

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function extractFromChunkWithRetry(filePath, subject, chunkName, retries = 10) {
    const prompt = `You are an expert UPSC CDS exam content creator.
I have provided a 2-page chunk of an official scanned CDS Question Paper.
Your task is to use your vision capabilities to read the text in this image/PDF and extract all complete multiple-choice questions.

Output MUST be a raw JSON array of objects with this exact structure:
[
  {
    "question": "The full question text.",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "correct": 0, // index of correct option (0-3). Guess based on your knowledge if unknown.
    "explanation": "Detailed explanation of why this option is correct.",
    "topicId": "${subject === 'gs' ? 'general_knowledge' : 'english'}"
  }
]
Output ONLY raw JSON. Do not use markdown backticks.
Do not extract incomplete questions that are cut off at the page boundaries.`;

    for (let attempt = 1; attempt <= retries; attempt++) {
        console.log(`\nUploading ${chunkName} (Attempt ${attempt}/${retries})...`);
        let uploadResult;
        try {
            uploadResult = await ai.files.upload({
                file: filePath,
                mimeType: 'application/pdf',
            });
            await delay(5000); 

            console.log(`Sending to Gemini Flash...`);
            const response = await ai.models.generateContent({
                model: "gemini-3.5-flash",
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
            });

            let rawText = response.text;
            if (rawText.startsWith('```json')) {
                rawText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');
            } else if (rawText.startsWith('```')) {
                rawText = rawText.replace(/^```\n/, '').replace(/\n```$/, '');
            }

            try {
                const parsed = JSON.parse(rawText);
                console.log(`Success: Extracted ${parsed.length} questions from ${chunkName}`);
                return parsed;
            } catch (e) {
                console.error(`JSON Parse Error on ${chunkName}: ${e.message}`);
                // If it's a parsing error, it might be hallucinating, try again
                if (attempt === retries) return [];
            }
        } catch (err) {
            console.error(`API Error on ${chunkName}:`, err.message);
            if (err.message.includes('429')) {
                console.log(`Rate limited! Waiting 65 seconds before retry...`);
                await delay(65000);
            } else if (err.message.includes('503')) {
                console.log(`Server Overloaded (503). Waiting 10 seconds before retry...`);
                await delay(10000);
            } else {
                await delay(5000);
            }
            if (attempt === retries) return [];
        }
    }
    return [];
}

async function main() {
    let allQuestions = { gs: [], english: [] };

    if (fs.existsSync('question_banks/cds_pyq_bank.json')) {
        try {
            allQuestions = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));
            if (!allQuestions.gs) allQuestions.gs = [];
            if (!allQuestions.english) allQuestions.english = [];
        } catch(e) {}
    }

    let files = fs.readdirSync(CHUNKS_DIR).filter(f => f.endsWith('.pdf'));
    console.log(`Found ${files.length} chunks to process. Using Gemini 2.5 Flash for speed.`);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const filePath = path.join(CHUNKS_DIR, file);
        const subject = file.startsWith('gs_') ? 'gs' : 'english';

        const parsedQs = await extractFromChunkWithRetry(filePath, subject, file);
        if (parsedQs && parsedQs.length > 0) {
            allQuestions[subject].push(...parsedQs);
            
            if (!fs.existsSync('question_banks')) fs.mkdirSync('question_banks');
            fs.writeFileSync('question_banks/cds_pyq_bank.json', JSON.stringify(allQuestions, null, 2), 'utf8');
        }

        // Only delete the chunk if we didn't hard-fail (meaning we either got questions or definitively found none)
        // Actually, let's just leave the chunks alone for now so we don't accidentally lose them on bugs!
        // fs.unlinkSync(filePath);

        if (i < files.length - 1) {
            await delay(DELAY_MS);
        }
    }

    console.log(`\nAll done! Total GS: ${allQuestions.gs.length}, Total English: ${allQuestions.english.length}`);
}

main();
