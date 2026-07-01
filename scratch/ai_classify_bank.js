const fs = require('fs');

const API_KEY = process.env.GEMINI_API_KEY || 'AQ.Ab8RN6Jyxy7SmFQtPGj5p45Ut9lrTOhT8D7xK2yamdIq2XM7mQ';
const MODEL = 'gemini-2.5-flash';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

const BANK_PATH = 'question_banks/cds_pyq_bank.json';
const CLEAN_BANK_PATH = 'question_banks/cds_pyq_bank_clean.json';
const STATE_PATH = './ai_classification_state.json';

const BATCH_SIZE = 50;
const DELAY_MS = 2000;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function classifyBatch(questionsBatch) {
    const promptText = `You are an expert exam classifier for the CDS (Combined Defence Services) exam. 
I am providing a list of ${questionsBatch.length} questions. For each question, determine its subject.
If it is a General Studies / History / Geography / Polity / Science question, classify it as "GS".
If it tests English grammar, vocabulary, reading comprehension, passages, or jumbled sentences, classify it as "ENGLISH".
If it tests Mathematics, Geometry, Arithmetic, or Trigonometry, classify it as "MATHS".

Return ONLY a valid JSON array of strings matching the exact order of the questions. 
The strings must be exactly "GS", "ENGLISH", or "MATHS". Do not return markdown blocks or any other text.

Questions:\n` + questionsBatch.map((q, i) => `[Question ${i}]: ${q.question}\nOptions: ${(q.options||[]).join(' | ')}\n`).join('\n');

    for (let attempts = 0; attempts < 3; attempts++) {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ role: "user", parts: [{ text: promptText }] }]
                })
            });

            if (!response.ok) {
                const txt = await response.text();
                console.error(`API Error ${response.status}: ${txt}`);
                if (response.status === 429) {
                    console.log("Rate limited. Waiting 65 seconds...");
                    await sleep(65000);
                    continue;
                }
                throw new Error(`API failed: ${response.status}`);
            }

            const data = await response.json();
            const textResponse = data.candidates[0].content.parts[0].text.trim();
            // Remove markdown code blocks if present
            const cleanJson = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();
            const classifications = JSON.parse(cleanJson);
            
            if (classifications.length !== questionsBatch.length) {
                 console.log(`Warning: Mismatch in lengths. Expected ${questionsBatch.length}, got ${classifications.length}. Retrying...`);
                 continue;
            }
            return classifications;
        } catch (e) {
            console.error(`Attempt ${attempts + 1} failed: ${e.message}`);
            await sleep(3000);
        }
    }
    throw new Error("Failed to classify batch after 3 attempts.");
}

async function main() {
    console.log("Loading bank...");
    const bank = JSON.parse(fs.readFileSync(BANK_PATH, 'utf8'));
    const gsQuestions = bank.gs || [];
    console.log(`Found ${gsQuestions.length} GS questions.`);

    let state = {};
    if (fs.existsSync(STATE_PATH)) {
        state = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
        console.log(`Loaded state with ${Object.keys(state).length} already classified questions.`);
    }

    for (let i = 0; i < gsQuestions.length; i += BATCH_SIZE) {
        const batch = gsQuestions.slice(i, i + BATCH_SIZE);
        
        // Check if batch is entirely cached
        let allCached = true;
        for (let j = 0; j < batch.length; j++) {
            if (!state[i + j]) {
                allCached = false;
                break;
            }
        }

        if (allCached) {
            console.log(`Skipping batch ${i} to ${i + batch.length - 1} (Already cached)`);
            continue;
        }

        console.log(`Classifying batch ${i} to ${i + batch.length - 1}...`);
        try {
            const results = await classifyBatch(batch);
            
            for (let j = 0; j < results.length; j++) {
                state[i + j] = results[j];
            }
            fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
            console.log(`Saved progress. Waiting ${DELAY_MS}ms...`);
            await sleep(DELAY_MS);
        } catch (e) {
            console.error(`Fatal error on batch ${i}: ${e.message}`);
            break;
        }
    }

    // Now filter
    let removedCount = 0;
    const cleanGS = [];
    for (let i = 0; i < gsQuestions.length; i++) {
        const classification = state[i] || "UNKNOWN";
        if (classification === "ENGLISH" || classification === "MATHS") {
            removedCount++;
            console.log(`Removed [${classification}]: ${gsQuestions[i].question.substring(0, 60)}...`);
        } else {
            cleanGS.push(gsQuestions[i]);
        }
    }

    console.log(`\nClassification complete! Removed ${removedCount} bad questions.`);
    bank.gs = cleanGS;
    fs.writeFileSync(CLEAN_BANK_PATH, JSON.stringify(bank, null, 2));
    console.log(`Saved clean bank to ${CLEAN_BANK_PATH}`);
}

main();
