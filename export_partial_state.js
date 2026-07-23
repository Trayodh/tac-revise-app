const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_JS_PATH = path.join(__dirname, 'data.js');
const PROGRESS_FILE = path.join(__dirname, 'scratch', 'classification_state_v2.json');

const EXPORT_DIR = path.join(__dirname, 'data_exports');
if (!fs.existsSync(EXPORT_DIR)) {
    fs.mkdirSync(EXPORT_DIR);
}

const OUTPUT_JSON_FILE = path.join(EXPORT_DIR, 'classified_questions.json');
const OUTPUT_CSV_FILE = path.join(EXPORT_DIR, 'classified_questions.csv');

function loadDB() {
    const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
    const executableContent = content.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
    const sandbox = { window: {} };
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(executableContent, sandbox);
    return sandbox.CBT_EXAMS_DATABASE;
}

function escapeCsv(field) {
    if (field === null || field === undefined) return '';
    const str = String(field);
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
}

console.log("Loading database...");
const db = loadDB();

const allQuestions = [];
db.forEach((exam, eIdx) => {
    let defaultYear = exam.title.match(/\b(19\d{2}|20\d{2})\b/);
    defaultYear = defaultYear ? defaultYear[1] : "";
    let examTag = (exam.exam || "").toUpperCase();
    
    exam.questions.forEach((q, idx) => {
        if (!q.question || q.question.trim() === '') return;
        allQuestions.push({
            original_id: `Q_${eIdx}_${idx}`,
            question: q.question,
            options: q.options || [],
            exams: examTag ? [examTag] : [],
            years: defaultYear ? [defaultYear] : [],
            original_obj: q
        });
    });
});

let state = {};
if (fs.existsSync(PROGRESS_FILE)) {
    state = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
} else {
    console.log("No progress file found.");
    process.exit(1);
}

const finalJSON = {
    summary: {
        total_questions_processed: allQuestions.length,
        questions_classified: Object.keys(state).length,
    },
    classified_questions: []
};

let csvData = "question_id,question_text,exam,paper,subject,chapter,topic,subtopic,difficulty,question_type,skip,skip_reason\n";

allQuestions.forEach(q => {
    const s = state[q.original_id];
    if (s && s.classification) {
        const cls = s.classification;
        finalJSON.classified_questions.push({
            ...q.original_obj,
            ai_classification: s
        });
        
        const qtextPreview = (s.metadata && s.metadata.question_text_preview) ? s.metadata.question_text_preview : q.question.substring(0, 100);
        
        csvData += [
            cls.question_id,
            qtextPreview,
            cls.exam,
            cls.paper,
            cls.subject,
            cls.chapter,
            cls.topic,
            cls.subtopic,
            cls.difficulty,
            cls.question_type,
            cls.skip_reason ? "TRUE" : "FALSE",
            cls.skip_reason || ""
        ].map(escapeCsv).join(',') + "\n";
    }
});

fs.writeFileSync(OUTPUT_JSON_FILE, JSON.stringify(finalJSON, null, 2));
fs.writeFileSync(OUTPUT_CSV_FILE, csvData);

console.log(`Generated outputs for ${Object.keys(state).length} questions.`);
