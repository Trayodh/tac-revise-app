const fs = require('fs');
const path = require('path');
require('dotenv').config();

const API_KEY = process.env.GROQ_API_KEY;
if (!API_KEY) {
    console.error("No API key found in .env (GROQ_API_KEY).");
    process.exit(1);
}

const INPUT_BANK = path.join(__dirname, 'question_banks', 'structured_bank.json');
const STATE_FILE = path.join(__dirname, 'armoury_build_state.json');
const OUTPUT_FILE = path.join(__dirname, 'rebuilt_armoury.json');
const REPORT_FILE = path.join(__dirname, 'armoury_build_report.txt');

const BATCH_SIZE = 25; // Number of questions per LLM call
const DELAY_MS = 2000; // Delay between calls

function extractAllQuestions(obj, results = []) {
    if (Array.isArray(obj)) {
        for (const item of obj) {
            extractAllQuestions(item, results);
        }
    } else if (typeof obj === 'object' && obj !== null) {
        if (obj.question && obj.options && obj.options.length > 0) {
            results.push(obj);
        } else {
            for (const key of Object.keys(obj)) {
                extractAllQuestions(obj[key], results);
            }
        }
    }
    return results;
}

function normalizeString(str) {
    if (!str) return "";
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isParagraphBased(qText) {
    const lower = qText.toLowerCase();
    const paragraphIndicators = [
        "read the following passage",
        "read the passage",
        "directions: read",
        "in the given passage",
        "according to the passage",
        "based on the passage",
        "comprehension:"
    ];
    for (const ind of paragraphIndicators) {
        if (lower.includes(ind)) return true;
    }
    const wordCount = qText.split(/\s+/).length;
    if (wordCount > 80 && !lower.includes("statement") && !lower.includes("assertion") && !lower.includes("matrix") && !lower.includes("=")) {
        return true;
    }
    return false;
}

async function processBatch(batch, startIndex) {
    const prompt = `
You are an expert military exam classifier for NDA, CDS, and AFCAT.
Reclassify the following list of questions into a strict taxonomy.
For each question, return a JSON object with EXACTLY these fields:
- Exam (string or array of strings: "NDA", "CDS", "AFCAT")
- Year (string, e.g., "2023", or null if unknown)
- Paper (string, e.g., "I" or "II", or null)
- Subject (string, MUST be one of: Mathematics, Physics, Chemistry, Biology, English, History, Geography, Indian Polity, Economics, Current Affairs, Defence & Military, General Science, Computer Awareness, Environment & Ecology, Space & Astronomy, International Relations, Miscellaneous)
- Chapter (string, appropriate syllabus chapter)
- Topic (string)
- Sub-topic (string)
- Difficulty (string: "Easy", "Moderate", "Difficult")
- Question Type (string: "Conceptual", "Numerical", "Factual", "Statement Based", "Assertion-Reason", "Match the Following", "Chronology", "Map Based", "Diagram Based", "Image Based", "Fill in the Blank", "Vocabulary", "Grammar", "One-liner", "Multi-step", "Calculation Based", "Data Interpretation")
- Question (string, fix any obvious OCR errors like weird symbols, replace missing words in fill-in-the-blanks with "___", ensure proper math notation)
- Options (array of strings, fix obvious OCR errors)
- Correct Answer (string, the actual option text or index)
- Explanation (string or null)
- Previous Year Frequency (number, default to 1)
- Tags (array of strings)

Respond with a JSON object containing a SINGLE key "questions" mapping to a JSON Array of the processed questions in the exact same order they were provided.
Do NOT include any markdown, just valid JSON.
`;
    
    const messages = [
        { role: "system", content: prompt },
        { role: "user", content: JSON.stringify(batch.map(q => ({
            q: q.question, 
            opts: q.options, 
            c: q.correct, 
            exp: q.explanation || q.solution || null,
            exam: q.exam || q.category || q.tags
        }))) }
    ];

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: messages,
                response_format: { type: "json_object" },
                temperature: 0.1
            })
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error.message);
        }
        
        const text = data.choices[0].message.content;
        const jsonResp = JSON.parse(text);
        return jsonResp.questions || jsonResp;
    } catch (e) {
        console.error(`[Batch ${startIndex}] Error during LLM call:`, e.message);
        return null;
    }
}

async function main() {
    const isSample = process.argv.includes('--sample');
    const limit = isSample ? 50 : Infinity;

    console.log("Loading structured bank...");
    const rawData = JSON.parse(fs.readFileSync(INPUT_BANK, 'utf-8'));
    const allQs = extractAllQuestions(rawData);
    console.log(`Found ${allQs.length} total questions.`);

    const uniqueMap = new Map();
    let paragraphCount = 0;
    
    for (const q of allQs) {
        if (!q.question) continue;
        if (isParagraphBased(q.question)) {
            paragraphCount++;
            continue;
        }
        
        const norm = normalizeString(q.question);
        if (norm.length < 5) continue;
        
        if (!uniqueMap.has(norm)) {
            uniqueMap.set(norm, q);
        } else {
            const existing = uniqueMap.get(norm);
            if (q.exam && existing.exam && q.exam !== existing.exam) {
                existing.exam = Array.isArray(existing.exam) ? existing.exam : [existing.exam];
                if (!existing.exam.includes(q.exam)) existing.exam.push(q.exam);
            }
        }
    }

    const filteredQs = Array.from(uniqueMap.values()).slice(0, limit);
    console.log(`After deduplication and removing ${paragraphCount} paragraph questions, ${filteredQs.length} questions remain to be classified.`);

    let state = { processed: [], currentIndex: 0 };
    if (!isSample && fs.existsSync(STATE_FILE)) {
        try {
            state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
            console.log(`Resuming from index ${state.currentIndex}...`);
        } catch(e) {}
    }

    for (let i = state.currentIndex; i < filteredQs.length; i += BATCH_SIZE) {
        const batch = filteredQs.slice(i, i + BATCH_SIZE);
        console.log(`Processing batch ${i} to ${i + batch.length}...`);
        
        const result = await processBatch(batch, i);
        if (result && Array.isArray(result)) {
            state.processed.push(...result);
            state.currentIndex = i + BATCH_SIZE;
            if (!isSample) {
                fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
            }
        } else {
            console.log("Batch failed. Retrying after longer delay...");
            await new Promise(r => setTimeout(r, 10000));
            i -= BATCH_SIZE;
            continue;
        }

        if (i + BATCH_SIZE < filteredQs.length) {
            await new Promise(r => setTimeout(r, DELAY_MS));
        }
    }

    const outPath = isSample ? 'sample_' + path.basename(OUTPUT_FILE) : OUTPUT_FILE;
    fs.writeFileSync(outPath, JSON.stringify(state.processed, null, 2));
    console.log(`Saved ${state.processed.length} rebuilt questions to ${outPath}`);

    const report = `Question Armoury Rebuild Report
-------------------------------
Initial Total Questions: ${allQs.length}
Removed as Paragraphs: ${paragraphCount}
Removed as Duplicates: ${allQs.length - paragraphCount - uniqueMap.size}
Total Processed: ${state.processed.length}
Output File: ${outPath}
`;
    fs.writeFileSync(REPORT_FILE, report);
    console.log("Report saved.");
}

main().catch(console.error);
