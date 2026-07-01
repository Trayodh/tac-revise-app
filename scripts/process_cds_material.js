require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const PDF_FILE = 'cds_material.pdf';
const STATE_FILE = 'scratch/cds_extraction_state.json';
const DATA_JS_PATH = 'data.js';

const MATH_TOPICS = [
  'algebra', 'trigonometry', 'calculus', 'geometry', 'statistics', 'arithmetic', 'matrices',
  'maths', 'coordinate_geometry', 'probability', 'functions', 'matrices_determinants', 
  'complex_numbers', 'vectors', 'binomial_theorem', 'circles', '3d_geometry', 'limits', 
  'differential_equations'
];

async function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function main() {
    console.log("Loading extraction state...");
    let state = { currentChunk: 1, totalChunks: 35, extractedQuestions: [] }; // ~35 chunks for a large book
    if (fs.existsSync(STATE_FILE)) {
        state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
        console.log(`Resuming from chunk ${state.currentChunk}. Previously extracted: ${state.extractedQuestions.length} questions.`);
    }

    if (state.currentChunk > state.totalChunks) {
        console.log("Extraction already fully completed. Injecting to DB...");
        injectIntoDataJs(state.extractedQuestions);
        return;
    }

    console.log(`Uploading ${PDF_FILE} to Gemini...`);
    let uploadResult;
    try {
        uploadResult = await ai.files.upload({ file: PDF_FILE, mimeType: 'application/pdf' });
        console.log(`File uploaded successfully. URI: ${uploadResult.uri}`);
        await sleep(10000);
    } catch (err) {
        console.error("Failed to upload PDF:", err.message);
        return;
    }

    for (let i = state.currentChunk; i <= state.totalChunks; i++) {
        console.log(`\n--- Processing Chunk ${i} of ${state.totalChunks} ---`);
        
        const prompt = `You are an expert CDS exam content creator.
I have attached a massive CDS preparation textbook. 
Your task is to extract exactly 20 high-quality, unique multiple-choice questions from random chapters across this textbook. 
To ensure variety, focus on extracting questions from Section/Chunk ${i} of ${state.totalChunks} (divide the book into ${state.totalChunks} equal parts mentally and look at that section).

RULES:
1. Extract a mix of Mathematics, English, and General Knowledge (Physics, Chemistry, History, Geography, etc.).
2. You MUST include detailed step-by-step explanations for each question in the "explanation" field.
3. Classify the topic accurately.

Output MUST be a raw JSON array of objects with this exact structure:
[
  {
    "question": "The question text.",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 0, // index 0-3
    "explanation": "Detailed step-by-step solution.",
    "topicId": "algebra" // Use accurate topics like algebra, geometry, physics, history, english, geography, etc.
  }
]
Output ONLY raw JSON. No markdown formatting.`;

        let success = false;
        let attempts = 0;
        
        while (!success && attempts < 3) {
            try {
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-pro',
                    contents: [
                        { role: 'user', parts: [{ fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } }, { text: prompt }] }
                    ],
                    config: { temperature: 0.7, responseMimeType: "application/json" }
                });

                let questions = JSON.parse(response.text());
                if (Array.isArray(questions) && questions.length > 0) {
                    state.extractedQuestions.push(...questions);
                    state.currentChunk = i + 1;
                    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
                    console.log(`Extracted ${questions.length} questions. Total: ${state.extractedQuestions.length}. Saved state.`);
                    success = true;
                }
            } catch (err) {
                console.error(`Attempt ${attempts + 1} failed:`, err.message);
                if (err.message.includes('429')) {
                    console.log("Quota exceeded. Pausing script. Run again tomorrow.");
                    return; // Exit script, state is saved
                }
                attempts++;
                await sleep(5000);
            }
        }
        
        if (!success) {
            console.log(`Failed to process chunk ${i} after 3 attempts. Continuing to next...`);
            state.currentChunk = i + 1;
            fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
        }
        
        await sleep(5000); // Wait between chunks to avoid rate limiting
    }

    console.log("\n--- Extraction Complete ---");
    console.log("Injecting questions into data.js...");
    injectIntoDataJs(state.extractedQuestions);
}

function injectIntoDataJs(questions) {
    if (questions.length === 0) {
        console.log("No questions to inject.");
        return;
    }

    let dataContent = fs.readFileSync(DATA_JS_PATH, 'utf8');
    const match = dataContent.match(/const CBT_EXAMS_DATABASE = (\[[\s\S]*?\]);\n/);
    const db = eval(match[1]);

    let mathExams = db.filter(e => e.title.startsWith('CDS Mathematics'));
    let nonMathExams = db.filter(e => !e.title.includes('Mathematics'));

    let mathCount = 0;
    let nonMathCount = 0;

    questions.forEach((q, idx) => {
        let isMath = MATH_TOPICS.includes(q.topicId.toLowerCase());
        q.explanation = q.explanation + "\n\n(Extracted from new CDS Material)";

        if (isMath) {
            mathExams[mathCount % mathExams.length].questions.push(q);
            mathCount++;
        } else {
            nonMathExams[nonMathCount % nonMathExams.length].questions.push(q);
            nonMathCount++;
        }
    });

    const replacementString = 'const CBT_EXAMS_DATABASE = [\n  ' + db.map(e => JSON.stringify(e, null, 4)).join(',\n  ') + '\n];\n';
    const newDataContent = dataContent.replace(match[0], replacementString);
    fs.writeFileSync(DATA_JS_PATH, newDataContent, 'utf8');

    // Mark as completely injected so it doesn't double-inject if run again
    fs.writeFileSync(STATE_FILE, JSON.stringify({ currentChunk: 999, totalChunks: 35, extractedQuestions: [] }));

    console.log(`Successfully injected ${mathCount} Maths (to CDS) and ${nonMathCount} Non-Maths (to All others).`);
}

main();
