require('dotenv').config();
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const NOTES_JS_PATH = path.join(__dirname, '..', 'notes_data.js');
const EXTRA_BANK_PATH = path.join(__dirname, '..', 'extra_bank_data.js');
const PROGRESS_FILE = path.join(__dirname, 'extra_classification_state.json');
const OUTPUT_FILE = path.join(__dirname, '..', 'extra_bank_data.js');

const BATCH_SIZE = 50; 
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("GEMINI_API_KEY is not set in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Load Taxonomy
let dataContent = fs.readFileSync(NOTES_JS_PATH, 'utf8');
const dataJsonStrMatch = dataContent.match(/const NOTES_DATABASE\s*=\s*(\{[\s\S]*?\n\});/);
const NOTES_DATABASE = eval('(' + dataJsonStrMatch[1] + ')');

let taxonomyMap = {};
let taxonomyString = "";
for (let key in NOTES_DATABASE) {
    taxonomyMap[key] = NOTES_DATABASE[key].chapters.map(c => c.title);
    taxonomyString += `\nSubject: ${key}\nChapters:\n` + taxonomyMap[key].map(c => ` - ${c}`).join('\n') + '\n';
}

const MASTER_PROMPT = `You are an expert defence exam question classification system. Your task is to 
classify questions into the EXTREMELY STRICT taxonomy provided below.

AVAILABLE TAXONOMY:
${taxonomyString}

CRITICAL RULES:
1. For each question, output EXACTLY one Subject and EXACTLY one Chapter.
2. The Subject and Chapter MUST exactly match one of the options listed in the taxonomy above. DO NOT invent your own.
3. Output format must be raw JSON array of objects. NO markdown formatting.
4. Each object must look exactly like this:
[
  {
    "id": "Q_123",
    "subject": "mathematics",
    "chapter": "Algebra & Complex Numbers"
  }
]
`;

function loadExtraBank() {
    let content = fs.readFileSync(EXTRA_BANK_PATH, 'utf8');
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    vm.runInContext(content, sandbox);
    return sandbox.window.EXTRA_QUESTION_BANK;
}

async function processBatch(questions) {
    const promptQuestions = JSON.stringify(questions.map(q => ({
        id: q.original_id,
        text: q.question,
        options: q.options || [],
        explanation: q.explanation || ""
    })), null, 2);

    const fullPrompt = `${MASTER_PROMPT}\n\nQuestions to classify:\n${promptQuestions}`;

    let retries = 5;
    while (retries > 0) {
        try {
            const result = await model.generateContent(fullPrompt);
            let text = result.response.text().trim();
            if (text.startsWith('```json')) text = text.substring(7);
            if (text.startsWith('```')) text = text.substring(3);
            if (text.endsWith('```')) text = text.slice(0, -3);
            return JSON.parse(text.trim());
        } catch (e) {
            console.error("Gemini call failed:", e.message);
            retries--;
            await new Promise(r => setTimeout(r, 10000));
        }
    }
    return null;
}

async function run() {
    console.log("Loading EXTRA_QUESTION_BANK...");
    const extraBank = loadExtraBank();
    
    // Flatten
    const allQuestions = [];
    let qId = 0;
    for (let sub in extraBank) {
        for (let chap in extraBank[sub]) {
            extraBank[sub][chap].forEach(q => {
                q.original_id = 'EQ_' + (qId++);
                q.old_subject = sub;
                q.old_chapter = chap;
                allQuestions.push(q);
            });
        }
    }
    console.log(`Flattened ${allQuestions.length} questions.`);

    let state = {};
    if (fs.existsSync(PROGRESS_FILE)) {
        state = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
        console.log(`Loaded ${Object.keys(state).length} previously processed questions.`);
    }

    const remainingQuestions = allQuestions.filter(q => !state[q.original_id]);
    console.log(`Remaining to process: ${remainingQuestions.length}`);

    for (let i = 0; i < remainingQuestions.length; i += BATCH_SIZE) {
        const batch = remainingQuestions.slice(i, i + BATCH_SIZE);
        console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1} of ${Math.ceil(remainingQuestions.length / BATCH_SIZE)}...`);
        
        const results = await processBatch(batch);
        
        if (results && Array.isArray(results)) {
            results.forEach(res => {
                if (res.id && res.subject && res.chapter) {
                    state[res.id] = { subject: res.subject, chapter: res.chapter };
                }
            });
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(state, null, 2));
            console.log(`✅ Batch saved.`);
        } else {
            console.log(`❌ Batch failed.`);
        }
        
        await new Promise(r => setTimeout(r, 4000)); // Rate limit padding (15 RPM -> 4s per request)
    }

    console.log("\nRebuilding EXTRA_QUESTION_BANK...");
    
    // Rebuild proper structure based on taxonomy map keys (dispNames for UI)
    const subjectDisplayNames = {
        "mathematics": "Mathematics",
        "english": "English",
        "polity": "Indian Polity",
        "history": "History",
        "geography": "Geography",
        "economics": "Economics",
        "physics": "Physics",
        "chemistry": "Chemistry",
        "biology": "Biology",
        "military-aptitude": "Military Aptitude",
        "current-affairs": "Current Affairs",
        "environment": "Environment"
    };

    const newBank = {};
    for (let rawSub in subjectDisplayNames) {
        const dName = subjectDisplayNames[rawSub];
        newBank[dName] = {};
        if (taxonomyMap[rawSub]) {
            taxonomyMap[rawSub].forEach(ch => {
                newBank[dName][ch] = [];
            });
        }
    }

    let unclassified = 0;
    allQuestions.forEach(q => {
        const cls = state[q.original_id];
        let targetSub = q.old_subject;
        let targetChap = q.old_chapter;

        if (cls && cls.subject && cls.chapter) {
            const rawSub = cls.subject.toLowerCase();
            const dName = subjectDisplayNames[rawSub];
            if (dName && newBank[dName] && newBank[dName][cls.chapter]) {
                targetSub = dName;
                targetChap = cls.chapter;
            }
        }

        if (newBank[targetSub] && newBank[targetSub][targetChap]) {
            newBank[targetSub][targetChap].push({
                question: q.question,
                options: q.options,
                correct: q.correct,
                explanation: q.explanation,
                exam: q.exam
            });
        } else {
            unclassified++;
            // Fallback just in case
            const fallbackSub = Object.keys(newBank)[0];
            const fallbackChap = Object.keys(newBank[fallbackSub])[0];
            newBank[fallbackSub][fallbackChap].push({
                question: q.question,
                options: q.options,
                correct: q.correct,
                explanation: q.explanation,
                exam: q.exam
            });
        }
    });

    console.log(`Rebuilt successfully. Fallbacks/Unclassified: ${unclassified}`);

    // Clean up empty chapters
    for (let sub in newBank) {
        for (let chap in newBank[sub]) {
            if (newBank[sub][chap].length === 0) {
                // keep it for UI structure
            }
        }
    }

    fs.writeFileSync(OUTPUT_FILE, 'window.EXTRA_QUESTION_BANK = ' + JSON.stringify(newBank, null, 2) + ';\n', 'utf8');
    console.log(`Done! Updated ${OUTPUT_FILE}`);
}

run();
