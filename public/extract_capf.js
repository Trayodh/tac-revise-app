require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const directories = ['CAPF_CSE_Papers'];
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

let allQuestions = { gs: [], english: [], maths: [], afcat: [] };

let state = { processedFiles: [] };
if (fs.existsSync('extraction_state_capf.json')) {
    state = JSON.parse(fs.readFileSync('extraction_state_capf.json', 'utf8'));
}

async function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function main() {
    let pdfFiles = [];
    for (const dir of directories) {
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir);
        for (const f of files) {
            if (f.toLowerCase().endsWith('.pdf') && !UUID_REGEX.test(f) && !f.includes("part")) {
                let subject = 'gs';
                let filepath = path.join(dir, f).replace(/\\/g, '/');
                let maxQ = 120;
                
                if (filepath.toLowerCase().includes('math')) { subject = 'maths'; maxQ = 120; }
                else if (filepath.toLowerCase().includes('afcat')) { subject = 'afcat'; maxQ = 100; }
                else if (filepath.toLowerCase().includes('english')) { subject = 'english'; maxQ = 120; }
                else if (filepath.toLowerCase().includes('gat') || filepath.toLowerCase().includes('general-ability') || filepath.toLowerCase().includes('csp') || filepath.toLowerCase().includes('general studies') || filepath.toLowerCase().includes('general_studies') || filepath.toLowerCase().includes('gai') || filepath.toLowerCase().includes('general')) { subject = 'gs'; maxQ = 125; }
                
                pdfFiles.push({ path: filepath, subject, maxQ });
            }
        }
    }

    console.log(`Found ${pdfFiles.length} valid PDF papers to process.`);

    for (let fileObj of pdfFiles) {
        if (state.processedFiles.includes(fileObj.path)) {
            console.log(`Skipping already processed file: ${fileObj.path}`);
            continue;
        }

        console.log(`\n====================================`);
        console.log(`Uploading ${fileObj.path} to Gemini...`);
        let uploadResult;
        try {
            uploadResult = await ai.files.upload({
                file: fileObj.path,
                mimeType: 'application/pdf',
            });
            console.log(`File uploaded successfully. URI: ${uploadResult.uri}`);
            console.log("Waiting 15 seconds for processing by Google...");
            await sleep(15000);
        } catch (err) {
            console.error(`Failed to upload ${fileObj.path}:`, err.message);
            continue;
        }

        const chunks = [];
        for (let i = 1; i <= fileObj.maxQ; i += 40) {
            let end = Math.min(i + 39, fileObj.maxQ);
            chunks.push(`Extract questions ${i} to ${end}.`);
        }

        let fileExtractedQuestions = [];

        for (let chunkPrompt of chunks) {
            console.log(`\nExtracting chunk: [${chunkPrompt}] from ${fileObj.path}`);
            
            const prompt = `You are an expert UPSC/Defence exam content creator.
I have provided an official Question Paper PDF. Your task is to extract a specific chunk of questions.
TASK: ${chunkPrompt}

CRITICAL RULES:
1. SKIP CURRENT AFFAIRS: If a question is about Current Affairs (e.g., asking about recent events, military exercises, or news from the year the paper was written), you MUST SKIP IT entirely. Do not include it in the output array.
2. EXAM MAPPING: You must identify the exam and subject for this paper and include it in every question object.

Output MUST be a raw JSON array of objects with this exact structure:
[
  {
    "question": "The full question text.",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "correct": 0, // index of correct option (0-3). Guess based on factual knowledge if answer key is not present.
    "explanation": "Detailed explanation of why this option is correct.",
    "topicId": "${fileObj.subject === 'gs' ? "general_knowledge" : (fileObj.subject === 'english' ? 'english' : (fileObj.subject === 'maths' ? 'maths' : 'afcat'))}",
    "exam": "The designated exam (e.g., CAPF, NDA, CDS, AFCAT)",
    "subject": "The specific subject (e.g., General Ability and Intelligence, Mathematics, General Knowledge)"
  }
]
Output ONLY raw JSON. Do not use markdown backticks, do not include any text before or after the JSON.
Do NOT truncate the JSON. If the PDF doesn't have the questions requested, just output an empty array [].`;

            let success = false;
            let waitMinutes = 2; // start with 2 minutes on 429
            while (!success) {
                try {
                    let response = await ai.models.generateContent({
                        model: 'gemini-flash-lite-latest',
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

                    let rawText = response.text || "[]";
                    if (rawText.startsWith('```json')) rawText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');
                    else if (rawText.startsWith('```')) rawText = rawText.replace(/^```\n/, '').replace(/\n```$/, '');
                    
                    const parsed = JSON.parse(rawText);
                    console.log(`Extracted ${parsed.length} questions in this chunk.`);
                    fileExtractedQuestions.push(...parsed);
                    success = true;
                    waitMinutes = 2; // reset
                } catch (err) {
                    if (err.status === 429 || err.status === 503 || err.status === 500) {
                        console.log(`API Limit or High Demand (${err.status}). Waiting ${waitMinutes} minutes before retrying this chunk...`);
                        await sleep(waitMinutes * 60000);
                        waitMinutes = Math.min(waitMinutes * 2, 15); // cap at 15 minutes
                    } else if (err.message && err.message.includes("JSON")) {
                        console.error(`JSON Parse Error: ${err.message}. Retrying chunk in 30 seconds...`);
                        await sleep(30000);
                    } else {
                        console.error(`Fatal error during generation: ${err.message}`);
                        console.log(`Saving state so far and exiting script completely to avoid skipping questions.`);
                        process.exit(1);
                    }
                }
            }
            
            // Minor sleep between chunks to avoid spamming the API
            await sleep(5000);
        }

        if (fileExtractedQuestions.length > 0) {
            allQuestions[fileObj.subject].push(...fileExtractedQuestions);
            state.processedFiles.push(fileObj.path);
            
            
            // Read existing capf bank if exists, append, then save
            let bank = { gs: [], english: [], maths: [], afcat: [] };
            if (fs.existsSync('question_banks/capf_pyq_bank.json')) {
                bank = JSON.parse(fs.readFileSync('question_banks/capf_pyq_bank.json', 'utf8'));
            }
            bank[fileObj.subject].push(...fileExtractedQuestions);
            
            fs.writeFileSync('question_banks/capf_pyq_bank.json', JSON.stringify(bank, null, 2), 'utf8');
            fs.writeFileSync('extraction_state_capf.json', JSON.stringify(state, null, 2), 'utf8');
            console.log(`\nSuccessfully saved state. Total accumulated: GS=${bank.gs.length}`);
        } else {
            console.log(`Warning: 0 questions extracted for ${fileObj.path}`);
        }
        
        console.log("Sleeping 20 seconds before next file to respect API limits...");
        await sleep(20000);
    }
    
    console.log("All extraction jobs completed.");
}

main();
