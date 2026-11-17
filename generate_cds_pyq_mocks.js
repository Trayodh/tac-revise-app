const fs = require('fs');

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function normalize(t) { return t ? t.toLowerCase().replace(/[^a-z0-9]/g, '') : ""; }

function deduplicate(pool) {
    const seen = new Set();
    const clean = [];
    for(let q of pool) {
        if(!q || !q.question || !q.options || q.options.length !== 4) continue;
        const norm = normalize(q.question);
        if(!seen.has(norm)) {
            seen.add(norm);
            clean.push(q);
        }
    }
    return clean;
}

function loadJSONSafe(path) {
    try {
        if (fs.existsSync(path)) return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch(e) {}
    return null;
}

// Smart Heuristic Classifier
function classifyQuestion(q, hint) {
    if (hint === 'english') return 'english';
    if (hint === 'maths') return 'maths';
    if (hint === 'gs') return 'gs';

    const text = (q.question + " " + q.options.join(" ")).toLowerCase();
    
    // Math keywords
    const mathKeywords = ['sin ', 'cos ', 'tan ', 'triangle', 'radius', 'polygon', 'polynomial', 'value of x', 'algebra', 'cm', 'integer', 'lcm ', 'hcf '];
    let mathScore = mathKeywords.filter(k => text.includes(k)).length;
    
    // Check if options are mostly purely numbers
    let numOpts = q.options.filter(o => /^[0-9\.\-\+]+$/.test(o.trim())).length;
    if (numOpts >= 3) mathScore += 2;
    
    if (mathScore >= 2) return 'maths';
    
    // English keywords
    const engKeywords = ['synonym', 'antonym', 'idiom', 'phrase', 'verb', 'adjective', 'sentence', 'passage', 'comprehension'];
    if (engKeywords.some(k => text.includes(k))) return 'english';

    return 'gs';
}

let allGs = [];
let allEng = [];
let allMath = [];

// Helper to push into buckets
function pushCategorized(arr, defaultHint) {
    for (let q of arr) {
        const type = classifyQuestion(q, defaultHint);
        if (type === 'english') allEng.push(q);
        else if (type === 'maths') allMath.push(q);
        else allGs.push(q);
    }
}

// 1. Load official CDS extracted so far
const pyqBank = loadJSONSafe('question_banks/cds_pyq_bank.json');
if (pyqBank) {
    if (pyqBank.gs) pushCategorized(pyqBank.gs, 'gs');
    if (pyqBank.english) pushCategorized(pyqBank.english, 'english');
}

// 2. Load the newly classified Pathfinder Bank safely
const pathfinder = loadJSONSafe('question_banks/pathfinder_bank.json');
if (pathfinder) {
    if (pathfinder.gs) pushCategorized(pathfinder.gs, 'gs');
    if (pathfinder.english) pushCategorized(pathfinder.english, 'english');
    if (pathfinder.maths) pushCategorized(pathfinder.maths, 'maths');
}
// 3. Load History, Polity, English banks (Excluding MMLU to prevent US-centric contamination)
const banksToLoad = [
    { file: 'history_bank.json', hint: 'gs' },
    { file: 'polity_bank.json', hint: 'gs' },
    { file: 'english_bank.json', hint: 'english' },
    { file: 'trending_bank.json', hint: 'gs' },
];

for (let b of banksToLoad) {
    const d = loadJSONSafe('question_banks/' + b.file);
    if (d) {
        let qs = Array.isArray(d) ? d : (d.questions || d.gs || []);
        pushCategorized(qs, b.hint);
    }
}

// Strictly Deduplicate BEFORE chunking
allGs = deduplicate(allGs);
allMath = deduplicate(allMath);
allEng = deduplicate(allEng);

console.log(`Unique Cleaned: GS=${allGs.length}, Maths=${allMath.length}, Eng=${allEng.length}`);

// Chunk Shuffling for English (preserve RC blocks)
// CDS English sections are strictly groups of 10. We chunk into 10s, shuffle chunks, then flatten.
function chunkShuffle(arr, chunkSize) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    chunks = shuffle(chunks);
    return chunks.flat();
}

allGs = shuffle(allGs);
allMath = shuffle(allMath);
allEng = chunkShuffle(allEng, 10); // Group into tens so passages stick together

const newExams = [];
const MAX_PAPERS = 8;

function buildMocks(pool, subjectName, idPrefix, titlePrefix, numQuestions = 120, correctMarks = 0.83, incorrectMarks = -0.27, examType = "CDS", duration = 120) {
    const numPapers = Math.min(Math.floor(pool.length / numQuestions), MAX_PAPERS);
    let paperIndex = 1;
    for (let i = 0; i < numPapers; i++) {
        const questions = pool.splice(0, numQuestions).map((q, idx) => ({ ...q, id: `${idPrefix}-${paperIndex}-${idx+1}`}));
        newExams.push({
            id: `${idPrefix}-mock-${paperIndex}`,
            exam: examType,
            subject: subjectName,
            title: `${examType} Mixed Mega-Mock Test ${paperIndex} (${titlePrefix})`,
            duration: duration,
            questionsCount: numQuestions,
            rules: { correctMarks: correctMarks, incorrectMarks: incorrectMarks, examType: examType },
            questions: questions
        });
        paperIndex++;
    }
}

let ndaGs = [...allGs];
let ndaEng = [...allEng];
let ndaMath = [...allMath];
let afcatGs = [...allGs];
let afcatEng = [...allEng];

// CDS Mocks (120 Qs, 0.83 / -0.27)
buildMocks(allGs, "General Knowledge", "cds-mega-gs", "GS", 120, 0.83, -0.27, "CDS", 120);
buildMocks(allMath, "Elementary Mathematics", "cds-mega-math", "Maths", 100, 1.0, -0.33, "CDS", 120);
buildMocks(allEng, "English", "cds-mega-eng", "English", 120, 0.83, -0.27, "CDS", 120);

function buildCombinedNdaGat(poolEng, poolGs, idPrefix, titlePrefix, correctMarks = 4.0, incorrectMarks = -1.33) {
    const numPapers = Math.min(Math.floor(poolEng.length / 50), Math.floor(poolGs.length / 100), MAX_PAPERS);
    let paperIndex = 1;
    for (let i = 0; i < numPapers; i++) {
        const engQs = poolEng.splice(0, 50).map(q => ({...q, subject: "English"}));
        const gsQs = poolGs.splice(0, 100).map(q => ({...q, subject: "General Knowledge"}));
        
        const questions = [...engQs, ...gsQs].map((q, idx) => ({ ...q, id: `${idPrefix}-${paperIndex}-${idx+1}`}));
        newExams.push({
            id: `${idPrefix}-mock-${paperIndex}`,
            exam: "NDA",
            subject: "General Ability Test (GAT)",
            title: `NDA GAT Mega-Mock Test ${paperIndex} (${titlePrefix})`,
            duration: 150,
            questionsCount: 150,
            rules: { correctMarks: correctMarks, incorrectMarks: incorrectMarks, examType: "NDA" },
            questions: questions
        });
        paperIndex++;
    }
}

// NDA Mocks (Combined GAT: 50 English + 100 GS: +4.0 / -1.33)
buildCombinedNdaGat(ndaEng, ndaGs, "nda-mega-gat", "GAT", 4.0, -1.33);
buildMocks(ndaMath, "Mathematics", "nda-mega-math", "Maths", 120, 2.5, -0.83, "NDA", 150);

// AFCAT Mocks (25 Qs sections: +3.0 / -1.0)
buildMocks(afcatGs, "General Awareness", "afcat-mega-gs", "GS", 25, 3.0, -1.0, "AFCAT", 30);
buildMocks(afcatEng, "Verbal Ability in English", "afcat-mega-eng", "English", 25, 3.0, -1.0, "AFCAT", 30);

if (newExams.length === 0) {
    console.log("No unique questions available to build a full 120-question mock.");
    process.exit(0);
}

// Inject into data.js
let originalData = fs.readFileSync('data.js', 'utf8');
const startIdx = originalData.indexOf('const CBT_EXAMS_DATABASE = [');
if (startIdx !== -1) {
    const preText = originalData.substring(0, startIdx);
    
    let dbPart = originalData.substring(startIdx + 'const CBT_EXAMS_DATABASE = '.length);
    let endIdx = dbPart.lastIndexOf(';');
    if (endIdx !== -1) dbPart = dbPart.substring(0, endIdx);
    
    let currentDb = [];
    try { currentDb = eval(dbPart); } catch(e) {}

    // Remove previous Mega-Mocks to replace them with categorized ones
    currentDb = currentDb.filter(exam => !exam.id.includes('mega-') && !exam.id.includes('cds-mixed-'));
    
    const finalDb = [...newExams, ...currentDb];
    const newDbString = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(finalDb, null, 2) + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', preText + newDbString, 'utf8');
    console.log(`Successfully injected ${newExams.length} fully categorized Mega-Mocks into data.js!`);
}
