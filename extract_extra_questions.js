const fs = require('fs');

function normalize(text) {
    if (!text) return "";
    return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function loadJSONSafe(path) {
    try {
        if (fs.existsSync(path)) return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch(e) {}
    return null;
}

// 1. Get Used Questions Safely via Regex
const dataContent = fs.readFileSync('data.js', 'utf8');
const usedQuestionsSet = new Set();

const questionRegex = /"question":\s*"(.*?)"/g;
let match;
while ((match = questionRegex.exec(dataContent)) !== null) {
    usedQuestionsSet.add(normalize(match[1]));
}

console.log(`Found ${usedQuestionsSet.size} unique questions USED in mock exams.`);

// Smart Heuristic Classifier (from generate_cds_pyq_mocks.js)
function classifyQuestion(q, hint) {
    if (hint === 'english') return 'english';
    if (hint === 'maths') return 'maths';
    if (hint === 'gs') return 'gs';
    const text = (q.question + " " + (q.options ? q.options.join(" ") : "")).toLowerCase();
    const mathKeywords = ['sin ', 'cos ', 'tan ', 'triangle', 'radius', 'polygon', 'polynomial', 'value of x', 'algebra', 'cm', 'integer', 'lcm ', 'hcf '];
    let mathScore = mathKeywords.filter(k => text.includes(k)).length;
    let numOpts = q.options ? q.options.filter(o => /^[0-9\.\-\+]+$/.test(o.trim())).length : 0;
    if (numOpts >= 3) mathScore += 2;
    if (mathScore >= 2) return 'maths';
    const engKeywords = ['synonym', 'antonym', 'idiom', 'phrase', 'verb', 'adjective', 'sentence', 'passage', 'comprehension'];
    if (engKeywords.some(k => text.includes(k))) return 'english';
    return 'gs';
}

const extraBank = {
    gs: [],
    english: [],
    maths: []
};

const seenExtraSet = new Set(); // To deduplicate the extra bank itself

function isBadQuestion(q) {
    if (!q || !q.question) return true;
    const txt = q.question.toLowerCase();
    if (txt.includes('codes a b c d') || txt.includes('a b c d a b c d')) return true;
    if (txt.includes('s1:') || txt.includes('s6:') || txt.includes('directions:')) return true;
    if (txt.includes('proper sequence should be')) return true;
    
    // Check for P Q R S jumbled words options
    const isPermutation = (opt) => {
        const o = opt.trim().toUpperCase();
        if (o.length !== 4) return false;
        return o.includes('P') && o.includes('Q') && o.includes('R') && o.includes('S');
    };
    
    if (q.options && q.options.length === 4) {
        if (isPermutation(q.options[0]) && isPermutation(q.options[1])) {
            return true;
        }
    }
    return false;
}

function processPool(qs, defaultHint) {
    if (!qs) return;
    for (let q of qs) {
        if (!q || !q.question || !q.options || q.options.length !== 4) continue;
        if (isBadQuestion(q)) continue;
        const norm = normalize(q.question);
        if (!usedQuestionsSet.has(norm) && !seenExtraSet.has(norm)) {
            seenExtraSet.add(norm);
            const type = classifyQuestion(q, defaultHint);
            
            // Generate an explanation if missing (as required for UI display)
            if (!q.explanation || q.explanation.trim() === '') {
                q.explanation = "Official Answer: Option " + String.fromCharCode(65 + (q.correct || 0)) + ". Please refer to the official PYQ answer key for detailed steps.";
            }

            if (type === 'english') extraBank.english.push(q);
            else if (type === 'maths') extraBank.maths.push(q);
            else extraBank.gs.push(q);
        }
    }
}

console.log("Scanning raw question banks for unused questions...");

// CDS PYQs
const pyqBank = loadJSONSafe('question_banks/cds_pyq_bank.json');
if (pyqBank) {
    processPool(pyqBank.gs, 'gs');
    processPool(pyqBank.english, 'english');
    processPool(pyqBank.maths, 'maths');
    processPool(pyqBank.afcat, 'gs');
}

// Pathfinder
const pathfinder = loadJSONSafe('question_banks/pathfinder_bank.json');
if (pathfinder) {
    processPool(pathfinder.gs, 'gs');
    processPool(pathfinder.english, 'english');
    processPool(pathfinder.maths, 'maths');
}

// History, Polity, English, Trending
const banksToLoad = [
    { file: 'history_bank.json', hint: 'gs' },
    { file: 'polity_bank.json', hint: 'gs' },
    { file: 'english_bank.json', hint: 'english' },
    { file: 'trending_bank.json', hint: 'gs' }
];

for (let b of banksToLoad) {
    const d = loadJSONSafe('question_banks/' + b.file);
    if (d) {
        let qs = Array.isArray(d) ? d : (d.questions || d.gs || []);
        processPool(qs, b.hint);
    }
}

console.log(`Extraction Complete!`);
console.log(`Extra GS: ${extraBank.gs.length}`);
console.log(`Extra Maths: ${extraBank.maths.length}`);
console.log(`Extra English: ${extraBank.english.length}`);

// Write to extra_bank_data.js
const fileContent = `const EXTRA_QUESTION_BANK = ${JSON.stringify(extraBank)};\n`;
fs.writeFileSync('extra_bank_data.js', fileContent, 'utf8');
console.log("Successfully generated extra_bank_data.js for frontend consumption!");
