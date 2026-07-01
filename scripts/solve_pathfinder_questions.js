const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const DATA_JS_PATH = path.join(__dirname, '..', 'data.js');
const CHECKPOINT_PATH = path.join(__dirname, '..', 'scratch', 'temp_solutions.json');
const PDF_PATH = path.join(__dirname, '..', 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf');
const BATCH_SIZE = 10; // Keeping batch size small to avoid overwhelming context limits

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Ensures we parse data.js cleanly
function loadDatabase() {
    console.log('Loading database from data.js...');
    let dataContent = fs.readFileSync(DATA_JS_PATH, 'utf8');
    
    const match = dataContent.match(/const CBT_EXAMS_DATABASE = (\[[\s\S]*?\]);\n/);
    if (!match) {
        throw new Error('Could not find CBT_EXAMS_DATABASE array in data.js');
    }
    
    // Evaluate in a safe way to get the object
    const db = eval(match[1]);
    return { db, prefix: dataContent.substring(0, match.index), matchStr: match[0], content: dataContent };
}

async function solveBatch(batchQuestions) {
    const prompt = `You are an expert mathematical solver and data extractor.
I will provide you with a JSON array of ${batchQuestions.length} mathematical multiple-choice questions from the Pathfinder textbook.

For EACH question, you should find the step-by-step solution. You are heavily encouraged to use the Google Search tool to find the exact official solution to the question on the internet (e.g., from Doubtnut, Toppr, Brainly, etc.). If you cannot find the solution online, you must solve it yourself step-by-step.

Format your output STRICTLY as a JSON array of strings. Each string must be the markdown-formatted step-by-step solution for the corresponding question in the input array.
Do NOT output anything other than the JSON array. The length of your output array must perfectly match the length of the input array.

Input Questions:
${JSON.stringify(batchQuestions, null, 2)}`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: [prompt],
            config: {
                tools: [{ googleSearch: {} }],
                responseMimeType: "application/json",
                temperature: 0.1
            }
        });

        const solutions = JSON.parse(response.text());
        if (!Array.isArray(solutions) || solutions.length !== batchQuestions.length) {
            throw new Error(`Invalid response format or length mismatch. Expected ${batchQuestions.length}, got ${solutions?.length}`);
        }
        return solutions;
    } catch (e) {
        console.error('API Error during batch solve:', e.message);
        return null;
    }
}

async function main() {
    // 1. (PDF Upload Removed - Now strictly using Google Search Grounding)

    // 2. Load the DB
    const { db, prefix, matchStr, content } = loadDatabase();
    
    // 2. Identify target questions
    let targets = [];
    for (let i = 0; i < db.length; i++) {
        for (let j = 0; j < db[i].questions.length; j++) {
            const q = db[i].questions[j];
            if (q.explanation && q.explanation.includes('Extracted from Pathfinder')) {
                targets.push({ examIndex: i, questionIndex: j, data: q });
            }
        }
    }
    
    console.log(`Found ${targets.length} questions from Pathfinder requiring solutions.`);
    if (targets.length === 0) return;

    // 3. Load Checkpoint
    let solvedData = {};
    if (fs.existsSync(CHECKPOINT_PATH)) {
        solvedData = JSON.parse(fs.readFileSync(CHECKPOINT_PATH, 'utf8'));
        console.log(`Loaded ${Object.keys(solvedData).length} previously solved questions from checkpoint.`);
    }

    // Filter out already solved targets
    targets = targets.filter(t => !solvedData[`${t.examIndex}_${t.questionIndex}`]);
    console.log(`${targets.length} questions remaining to be solved.`);

    // 4. Process in batches
    for (let i = 0; i < targets.length; i += BATCH_SIZE) {
        const batch = targets.slice(i, i + BATCH_SIZE);
        console.log(`\nProcessing batch ${Math.floor(i / BATCH_SIZE) + 1} of ${Math.ceil(targets.length / BATCH_SIZE)}...`);
        
        // Strip down the object to save tokens
        const cleanBatch = batch.map(t => ({
            question: t.data.question,
            options: t.data.options,
            correct: t.data.correct
        }));

        const solutions = await solveBatch(cleanBatch);
        
        if (!solutions) {
            console.log('Batch failed. Pausing script to avoid rapid looping on quota limits...');
            console.log('You can restart the script later and it will resume from the checkpoint.');
            break;
        }

        // Apply solutions
        for (let k = 0; k < batch.length; k++) {
            const t = batch[k];
            solvedData[`${t.examIndex}_${t.questionIndex}`] = solutions[k];
            db[t.examIndex].questions[t.questionIndex].explanation = solutions[k];
        }

        // Save Checkpoint
        if (!fs.existsSync(path.dirname(CHECKPOINT_PATH))) fs.mkdirSync(path.dirname(CHECKPOINT_PATH), { recursive: true });
        fs.writeFileSync(CHECKPOINT_PATH, JSON.stringify(solvedData, null, 2));
        console.log(`Saved checkpoint. Total solved: ${Object.keys(solvedData).length}`);

        // Update data.js every 5 batches (100 questions) to ensure we don't lose data
        if ((Math.floor(i / BATCH_SIZE) + 1) % 5 === 0) {
            console.log('Saving intermediate progress to data.js...');
            const replacementString = `const CBT_EXAMS_DATABASE = [\n  ${db.map(e => JSON.stringify(e, null, 4)).join(',\n  ')}\n];\n`;
            const newDataContent = content.replace(matchStr, replacementString);
            fs.writeFileSync(DATA_JS_PATH, newDataContent, 'utf8');
        }
        
        // Small delay to respect rate limits
        await new Promise(r => setTimeout(r, 2000));
    }

    // 5. Final Save to data.js
    console.log('\nFinalizing and saving to data.js...');
    const replacementString = `const CBT_EXAMS_DATABASE = [\n  ${db.map(e => JSON.stringify(e, null, 4)).join(',\n  ')}\n];\n`;
    const finalDataContent = content.replace(matchStr, replacementString);
    fs.writeFileSync(DATA_JS_PATH, finalDataContent, 'utf8');
    
    console.log('✅ Update complete! Run `node build_www.js` to deploy.');
}

main().catch(console.error);
