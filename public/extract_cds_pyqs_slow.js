require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const pdfFiles = [
  { path: 'PYQ Papers/CDS-20252-GS-paper_14-Sept.-2025.pdf', subject: 'gs' },
  { path: 'PYQ Papers/CDS-1-GS-Question-Paper-12-April-2026-exam-1.pdf', subject: 'gs' },
  { path: 'PYQ Papers/CDS-2-2025-English-question-paper_14.09.2025.pdf', subject: 'english' },
  { path: 'PYQ Papers/CDS-1-English-Question-Paper-12-April-2026-exam-1.pdf', subject: 'english' },
];

const PAGES_PER_CHUNK = 2; // 2 pages per chunk is extremely safe for token limits
const DELAY_MS = 35000; // 35 seconds to bypass 2 RPM

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function extractQuestionsFromPdfChunk(pdfPath, subject, chunkIndex, totalChunks) {
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

    console.log(`Uploading chunk ${chunkIndex}/${totalChunks}...`);
    let uploadResult;
    try {
        uploadResult = await ai.files.upload({
            file: pdfPath,
            mimeType: 'application/pdf',
        });
        console.log(`Waiting 15s for Google to process the file...`);
        await delay(15000); // give Gemini time to process the uploaded file

        console.log(`Sending to Gemini API...`);
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
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

async function processPdf(fileObj, allQuestions) {
    if (!fs.existsSync(fileObj.path)) {
        console.log(`Skipping missing file: ${fileObj.path}`);
        return;
    }

    console.log(`\n--- Loading ${fileObj.path} ---`);
    const pdfBytes = fs.readFileSync(fileObj.path);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const totalPages = pdfDoc.getPageCount();
    
    // We can skip the first page if it's just instructions, but let's just process all
    const totalChunks = Math.ceil(totalPages / PAGES_PER_CHUNK);
    console.log(`PDF has ${totalPages} pages. Splitting into ${totalChunks} chunks.`);
    console.log(`Estimated time for this file: ${(totalChunks * (DELAY_MS + 15000) / 1000 / 60).toFixed(1)} minutes.`);

    for (let i = 0; i < totalPages; i += PAGES_PER_CHUNK) {
        const chunkDoc = await PDFDocument.create();
        const endPage = Math.min(i + PAGES_PER_CHUNK, totalPages);
        
        const copiedPages = await chunkDoc.copyPages(pdfDoc, Array.from({length: endPage - i}, (_, k) => i + k));
        copiedPages.forEach(page => chunkDoc.addPage(page));
        
        const chunkBytes = await chunkDoc.save();
        const tempPath = `temp_chunk_${i}.pdf`;
        fs.writeFileSync(tempPath, chunkBytes);

        const chunkIndex = Math.floor(i / PAGES_PER_CHUNK) + 1;
        const parsedQs = await extractQuestionsFromPdfChunk(tempPath, fileObj.subject, chunkIndex, totalChunks);
        allQuestions[fileObj.subject].push(...parsedQs);
        
        // Save incrementally
        if (!fs.existsSync('question_banks')) fs.mkdirSync('question_banks');
        fs.writeFileSync('question_banks/cds_pyq_bank.json', JSON.stringify(allQuestions, null, 2), 'utf8');

        // Clean up temp file
        fs.unlinkSync(tempPath);

        if (chunkIndex < totalChunks) {
            console.log(`Waiting ${DELAY_MS/1000} seconds to bypass 2 RPM limit...`);
            await delay(DELAY_MS);
        }
    }
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

    for (let fileObj of pdfFiles) {
        await processPdf(fileObj, allQuestions);
    }

    console.log(`\nExtraction completely finished! Total GS: ${allQuestions.gs.length}, Total English: ${allQuestions.english.length}`);
}

main();
