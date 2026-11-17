/**
 * full_cds_gs_cleanup.js
 * 
 * One-shot comprehensive cleanup of ALL CDS General Knowledge papers:
 * 1. Remove any Maths questions
 * 2. Remove any English questions  
 * 3. Remove all duplicates (including "(Variant X)" variants)
 * 4. Refill with clean GS questions from the bank to maintain 120 questions
 */

const fs = require('fs');

const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');
const db    = m.exports.CBT_EXAMS_DATABASE;
const notes = m.exports.NOTES_DATABASE;

const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

// ─── Detection patterns ───────────────────────────────────────────────────────

const MATHS_PATTERNS = [
    'sphere', 'cube', 'cuboid', 'cone', 'cylinder', 'prism', 'pyramid',
    'surface area', 'total surface area', 'curved surface area',
    'volume of', 'radius of', 'diameter of', 'circumference',
    'perimeter of', 'area of the', 'area of a',
    'right-angled triangle', 'isosceles triangle', 'equilateral triangle',
    'rhombus', 'parallelogram', 'trapezium', 'hexagon',
    'value of x', 'value of n', 'find the value',
    'lcm of', 'hcf of', 'lcm and hcf',
    'polynomial', 'quadratic', 'arithmetic progression', 'geometric progression',
    'simple interest', 'compound interest',
    'sin θ', 'cos θ', 'tan θ', 'sin(', 'cos(', 'tan(',
    'sinθ', 'cosθ', 'tanθ',
    'angle of elevation', 'angle of depression',
    'mean of', 'median of', 'mode of', 'standard deviation', 'variance of',
];

const ENGLISH_PATTERNS = [
    'no improvement', 'no error', 'spot the error', 'find the error',
    'sentence improvement', 'active voice', 'passive voice',
    'direct speech', 'indirect speech', 'reported speech',
    'synonym of', 'antonym of', 'synonyms of', 'antonyms of',
    'closest in meaning', 'opposite in meaning',
    'one word substitution', 'one-word substitution', 'phrasal verb',
    'meaning of the idiom', 'the idiom', 'commonly confused',
    'according to the passage', 'according to the author',
    'the author suggests', 'the tone of the passage',
    'proper sequence should be', 's1 :', 's1:', 's6 :', 's6:',
    'fill in the blank', 'fill in the blanks', 'cloze test',
    'choose the correct word to fill', 'choose the appropriate word to fill',
    'directions :', 'in the passage', 'from the passage', 'following passage', 
    'read the passage', 'what does the passage',
    'jumbled parts', 'rearrange the following'
];

const MMLU_PATTERNS = [
    'whether we admit it to ourselves', 
    'the american cotton textile industry moved', 
    'which source is cited by the author',
    'conclusion of the author in the passage',
    'in the passage, the word'
];

function hasMathsOptions(q) {
    if (!q.options || q.options.length !== 4) return false;
    let mathOptCount = 0;
    for (const opt of q.options) {
        const o = opt.trim();
        if (/^[\d\s\.:π√±\-\/]+$/.test(o)) mathOptCount++;
        if (o.includes('π') || o.includes('√')) mathOptCount++;
    }
    return mathOptCount >= 2;
}

function isPQRSJumble(q) {
    if (!q.options || q.options.length !== 4) return false;
    const isP = (o) => { 
        const x = o.trim().toUpperCase().replace(/[^PQRS]/g, ''); 
        return x.length >= 4 && x.includes('P') && x.includes('Q') && x.includes('R') && x.includes('S'); 
    };
    return q.options.filter(o => isP(o)).length >= 2;
}

function isBadQuestion(q) {
    if (!q || !q.question || !q.options || q.options.length !== 4) return true;
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    if (q.topicId === 'maths' || q.topicId === 'english') return true;
    for (const pat of MATHS_PATTERNS) { if (txt.includes(pat)) return true; }
    for (const pat of ENGLISH_PATTERNS) { if (txt.includes(pat)) return true; }
    for (const pat of MMLU_PATTERNS) { if (txt.includes(pat)) return true; }
    if (hasMathsOptions(q)) return true;
    if (isPQRSJumble(q)) return true;
    return false;
}

// ─── Build clean pool ─────────────────────────────────────────────────────────

const usedNorms = new Set();
function norm(q) {
    return q.question.replace(/\(variant \d+\)/gi, '').replace(/[^a-z0-9]/gi, '').toLowerCase().substring(0, 40);
}

// First, collect all questions currently in non-GS papers so we don't double-use them
db.forEach(exam => {
    if (exam.exam !== 'CDS' || exam.subject !== 'General Knowledge') {
        (exam.questions || []).forEach(q => { if (q && q.question) usedNorms.add(norm(q)); });
    }
});

const cleanPool = (bank.gs || []).filter(q => {
    if (isBadQuestion(q)) return false;
    if (usedNorms.has(norm(q))) return false;
    return true;
});

// Shuffle pool
for (let i = cleanPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cleanPool[i], cleanPool[j]] = [cleanPool[j], cleanPool[i]];
}

let poolIdx = 0;
function getNext() {
    const q = cleanPool[poolIdx % cleanPool.length];
    poolIdx++;
    return q;
}

// ─── Process each CDS GS paper ───────────────────────────────────────────────

db.forEach(exam => {
    if (exam.exam !== 'CDS' || exam.subject !== 'General Knowledge') return;
    if (!exam.questions) return;

    const target = exam.questions.length; // keep same length (120)
    const seen = new Set();
    const goodQuestions = [];
    let removedCount = 0;

    for (const q of exam.questions) {
        const n = q ? norm(q) : '';
        if (!q || isBadQuestion(q) || seen.has(n)) {
            removedCount++;
            continue;
        }
        seen.add(n);
        goodQuestions.push(q);
    }

    // Refill to target
    while (goodQuestions.length < target) {
        const filler = getNext();
        const fn = norm(filler);
        if (!seen.has(fn)) {
            seen.add(fn);
            goodQuestions.push(filler);
        }
    }

    exam.questions = goodQuestions.slice(0, target);
    console.log(`${exam.title}: removed ${removedCount}, refilled to ${exam.questions.length}`);
});

// ─── Write back ───────────────────────────────────────────────────────────────

const outString = `const CBT_EXAMS_DATABASE = ${JSON.stringify(db, null, 2)};

const NOTES_DATABASE = ${JSON.stringify(notes, null, 2)};

if (typeof window !== 'undefined') {
    window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;
    window.NOTES_DATABASE = NOTES_DATABASE;
}

if (typeof module !== 'undefined') {
    module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };
}
`;

fs.writeFileSync('data.js', outString);
console.log('\nDone! All CDS GS papers are now clean — no Maths, no English, no duplicates.');
