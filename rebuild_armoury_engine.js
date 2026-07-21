require('dotenv').config();
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const DATA_JS_PATH = path.join(__dirname, 'data.js');
const PROGRESS_FILE = path.join(__dirname, 'scratch', 'rebuild_state.json');
const OUTPUT_FILE = path.join(__dirname, 'scratch', 'rebuilt_armoury_final.json');

// Configuration
const BATCH_TEST_LIMIT = parseInt(process.env.TEST_LIMIT) || 20; // Set TEST_LIMIT in env to override

const SYSTEM_PROMPT = `
# Ultimate AI Prompt – Defence Exam Question Armoury Reclassification Engine (NDA/CDS/AFCAT)

## ROLE
You are the Chief Academic Classification Engine for a Defence Examination platform containing thousands of NDA, CDS and AFCAT previous year questions.
Your responsibility is to rebuild the entire Question Armoury from scratch, ensuring that every question is placed under the correct Subject -> Chapter -> Topic -> Subtopic hierarchy.
You are not a keyword matcher. You must think exactly like a panel of experienced UPSC, NDA, CDS and AFCAT paper setters.
Accuracy is more important than speed.

## PRIMARY OBJECTIVE
For every question:
1. Read the entire question.
2. Understand what knowledge is actually being tested.
3. Ignore misleading words.
4. Identify the primary concept.
5. Classify into correct Subject, Chapter, Topic, Subtopic.

## ABSOLUTE RULE
Never classify based on words. Always classify based on the concept being tested.
If two experts would classify differently, think again. Choose the subject that requires the deepest understanding to answer correctly.

## PARAGRAPH / IMAGE QUESTIONS
- Ignore reading comprehension, long passages, or statement followed by multiple linked questions. (Return "SKIP")
- If an image, graph, table, diagram is missing, return "IMAGE REQUIRED".

## ALLOWED SUBJECTS (ONLY THESE)
Mathematics, English, Physics, Chemistry, Biology, History, Geography, Indian Polity, Economics, Current Affairs, Defence Studies, Computer Science, Environment & Ecology, General Science, Space Science, International Relations, Intelligence & Security, Miscellaneous.

## CHAPTER CLASSIFICATION
Every question must belong to a chapter based on the provided list in the system prompt. (Do not leave empty).

## TOPICS & SUBTOPICS
Provide a topic, and a subtopic going one level deeper whenever possible.

## QUESTION TYPE
Choose exactly one: Conceptual, Numerical, Formula Based, Statement Based, Assertion Reason, Match the Following, Chronology, Map Based, Diagram Based, Vocabulary, Grammar, Fill in the Blank, One Word Substitution, Synonym, Antonym.

## DIFFICULTY
Easy, Medium, Hard.

## CURRENT AFFAIRS RULE
If the answer changes with time -> Current Affairs.
If permanent -> Static Subject.

## CONFIDENCE & REVIEW
Confidence score: 100%, 98%, 95% etc.
If confidence < 90%, mark needs_manual_review = true.

## OUTPUT FORMAT
You MUST output a valid JSON object EXACTLY like this:
{
  "subject": "",
  "chapter": "",
  "topic": "",
  "subtopic": "",
  "difficulty": "",
  "question_type": "",
  "exam": [],
  "year": "",
  "confidence": 100,
  "needs_manual_review": false,
  "reason": "Brief explanation of why this classification is correct."
}
If skipping, output: {"skip_reason": "PARAGRAPH"} or {"skip_reason": "IMAGE REQUIRED"}
`;

function loadDB() {
    const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
    const executableContent = content.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
    const sandbox = { window: {} };
    sandbox.window = sandbox; // Handle window references
    vm.createContext(sandbox);
    vm.runInContext(executableContent, sandbox);
    return sandbox.CBT_EXAMS_DATABASE;
}

function normalizeText(text) {
    if (!text) return "";
    return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function extractYear(text) {
    const match = text.match(/\b(19\d{2}|20\d{2})\b/);
    return match ? match[1] : "";
}

function looksLikeParagraphOrMissingImage(q) {
    const text = (q.question || "").toLowerCase();
    if (text.includes("read the following passage") || text.includes("directions: ")) return "PARAGRAPH";
    if ((text.includes("figure") || text.includes("diagram") || text.includes("graph") || text.includes("map given")) && !text.includes("![")) {
        return "IMAGE REQUIRED";
    }
    return null;
}

async function classifyWithAI(qText, examMeta) {
    const fullPrompt = SYSTEM_PROMPT + "\n\nQUESTION TO ANALYZE:\n" + qText + "\nEXAM HINT: " + examMeta.join(', ');
    
    let retries = 3;
    while (retries > 0) {
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: fullPrompt }] }],
                    generationConfig: {
                        temperature: 0.1,
                        response_mime_type: "application/json"
                    }
                })
            });
            
            if (res.status === 429) {
                console.log("Rate limited! Waiting 30s...");
                await new Promise(r => setTimeout(r, 30000));
                retries--;
                continue;
            }
            
            const data = await res.json();
            if (!data.candidates || !data.candidates[0].content) {
                throw new Error("Invalid response: " + JSON.stringify(data));
            }
            
            const text = data.candidates[0].content.parts[0].text;
            return JSON.parse(text);
        } catch(e) {
            console.error("Gemini call failed:", e.message);
            retries--;
            await new Promise(r => setTimeout(r, 5000));
        }
    }
    return null;
}

async function run() {
    console.log("Loading database...");
    const db = loadDB();
    
    console.log("Extracting and deduplicating questions...");
    const uniqueQuestions = new Map();
    
    db.forEach(exam => {
        let defaultYear = extractYear(exam.title || "");
        let examTag = (exam.exam || "").toUpperCase();
        
        exam.questions.forEach((q, idx) => {
            const norm = normalizeText(q.question);
            if (!norm) return;
            
            const qYear = extractYear(q.question) || defaultYear;
            
            if (uniqueQuestions.has(norm)) {
                const existing = uniqueQuestions.get(norm);
                if (examTag && !existing.exams.includes(examTag)) existing.exams.push(examTag);
                if (qYear && !existing.years.includes(qYear)) existing.years.push(qYear);
            } else {
                uniqueQuestions.set(norm, {
                    original_id: q.id || `gen_${idx}_${Date.now()}`,
                    question: q.question,
                    options: q.options || [],
                    correct: q.correct,
                    explanation: q.explanation || "",
                    exams: examTag ? [examTag] : [],
                    years: qYear ? [qYear] : []
                });
            }
        });
    });
    
    const allQuestions = Array.from(uniqueQuestions.values());
    console.log(`Found ${allQuestions.length} unique questions out of total.`);
    
    let state = {};
    if (fs.existsSync(PROGRESS_FILE)) {
        state = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
        console.log(`Loaded ${Object.keys(state).length} previously processed questions.`);
    }

    const finalArmoury = {
        metadata: {
            version: "2.0",
            last_updated: new Date().toISOString(),
            total_questions: 0
        },
        questions: []
    };
    
    let processedThisRun = 0;
    
    for (let i = 0; i < allQuestions.length; i++) {
        if (processedThisRun >= BATCH_TEST_LIMIT) {
            console.log(`Reached batch limit of ${BATCH_TEST_LIMIT}.`);
            break;
        }

        const q = allQuestions[i];
        
        if (state[q.original_id]) {
            // Already processed
            const s = state[q.original_id];
            if (!s.skip_reason) {
                finalArmoury.questions.push({ ...q, classification: s });
            }
            continue;
        }
        
        console.log(`Processing ${i+1}/${allQuestions.length}: ${q.original_id}...`);
        
        // Pre-flight checks
        const heuristicSkip = looksLikeParagraphOrMissingImage(q);
        if (heuristicSkip) {
            console.log(`Skipped due to heuristic: ${heuristicSkip}`);
            state[q.original_id] = { skip_reason: heuristicSkip };
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(state, null, 2));
            continue;
        }
        
        const optionsText = q.options.map((o, idx) => `${String.fromCharCode(65+idx)}. ${o}`).join('\n');
        const qText = `${q.question}\nOptions:\n${optionsText}`;
        
        const result = await classifyWithAI(qText, [...q.exams, ...q.years]);
        
        if (result) {
            state[q.original_id] = result;
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(state, null, 2));
            
            if (!result.skip_reason) {
                finalArmoury.questions.push({ ...q, classification: result });
            }
            processedThisRun++;
        } else {
            console.log(`Failed to process ${q.original_id}, stopping batch.`);
            break;
        }
        
        // Rate limiting buffer
        await new Promise(r => setTimeout(r, 2000));
    }
    
    // For the ones already in state but not covered in this limited loop:
    finalArmoury.questions = [];
    allQuestions.forEach(q => {
        if (state[q.original_id]) {
            if (!state[q.original_id].skip_reason) {
                // merge exams and year logic since AI might have provided one or we fallback
                const cls = state[q.original_id];
                cls.exam = cls.exam && cls.exam.length ? cls.exam : q.exams;
                cls.year = cls.year || (q.years.length ? q.years[0] : "");
                
                finalArmoury.questions.push({ ...q, classification: cls });
            }
        }
    });
    
    finalArmoury.metadata.total_questions = finalArmoury.questions.length;
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalArmoury, null, 2));
    console.log(`Done. Final armoury updated with ${finalArmoury.metadata.total_questions} valid classified questions.`);
}

run();
