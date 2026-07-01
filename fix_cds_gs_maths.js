/**
 * fix_cds_gs_maths.js
 * 
 * Detects and removes any Mathematics questions that have crept into
 * CDS General Knowledge papers, replacing them with clean GS-only questions.
 * 
 * Maths detection covers:
 *   - Geometry / Mensuration (sphere, cube, cone, cylinder, area, volume, radius, diameter)
 *   - Algebra (polynomial, quadratic, equation, value of x)
 *   - Arithmetic (LCM, HCF, percentage, profit, loss, ratio, proportion)
 *   - Trigonometry (sin, cos, tan, angle, triangle)
 *   - Statistics (mean, median, mode, variance, standard deviation)
 *   - Options that are purely numeric or contain π / √
 */

const fs = require('fs');

// --- Load DB ------------------------------------------------------------------
const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');
const db    = m.exports.CBT_EXAMS_DATABASE;
const notes = m.exports.NOTES_DATABASE;

// --- Maths detection patterns -------------------------------------------------
const MATHS_TEXT_PATTERNS = [
    // Geometry / Mensuration
    'sphere', 'cube', 'cuboid', 'cone', 'cylinder', 'prism', 'pyramid',
    'surface area', 'total surface area', 'curved surface area',
    'volume of', 'radius of', 'diameter of', 'circumference',
    'perimeter of', 'area of the', 'area of a',
    'right-angled triangle', 'isosceles triangle', 'equilateral triangle',
    'rhombus', 'parallelogram', 'trapezium', 'hexagon', 'polygon',
    // Algebra / Numbers
    'value of x', 'value of n', 'find the value',
    'lcm of', 'hcf of', 'lcm and hcf',
    'polynomial', 'quadratic', 'arithmetic progression', 'geometric progression',
    'a.p.', 'g.p.', 'sum of the series',
    // Arithmetic
    'profit and loss', 'loss percent', 'profit percent',
    'simple interest', 'compound interest',
    'speed of the train', 'time and work', 'time and distance',
    'ratio of their', 'ratio is', 'proportion',
    // Trigonometry
    'sin θ', 'cos θ', 'tan θ', 'sin(', 'cos(', 'tan(',
    'sinθ', 'cosθ', 'tanθ',
    'angle of elevation', 'angle of depression',
    // Statistics
    'mean of', 'median of', 'mode of', 'standard deviation',
    'variance of', 'arithmetic mean',
];

function hasMathsOptions(q) {
    if (!q.options || q.options.length !== 4) return false;
    // If majority of options are numbers, ratios, or contain π / √ — it's maths
    let mathOptCount = 0;
    for (const opt of q.options) {
        const o = opt.trim();
        // Pure number or simple ratio like "6 : π", "5:π", "1:1"
        if (/^[\d\s\.:π√±\-\/]+$/.test(o)) mathOptCount++;
        if (o.includes('π') || o.includes('√')) mathOptCount++;
    }
    return mathOptCount >= 2;
}

function isMathsQuestion(q) {
    if (!q || !q.question) return false;

    // Explicit topicId
    if (q.topicId === 'maths') return true;

    const txt = (q.question + ' ' + (q.options || []).join(' ')).toLowerCase();

    for (const pat of MATHS_TEXT_PATTERNS) {
        if (txt.includes(pat)) return true;
    }

    if (hasMathsOptions(q)) return true;

    return false;
}

// --- Build clean GS replacement pool -----------------------------------------
const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

function isCleanGS(q) {
    if (!q || !q.question || !q.options || q.options.length !== 4) return false;
    if (isMathsQuestion(q)) return false;
    // Also reject English question types
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    if (txt.includes('no improvement') || txt.includes('no error') ||
        txt.includes('synonym of') || txt.includes('antonym of') ||
        txt.includes('closest in meaning') || txt.includes('s1 :') ||
        txt.includes('s1:') || txt.includes('fill in the blank') ||
        txt.includes('proper sequence should be')) return false;
    // Reject PQRS jumbles
    const isPQRS = (o) => { const x=o.trim().toUpperCase().replace(/[^PQRS]/g,''); return x.length===4&&x.includes('P')&&x.includes('Q')&&x.includes('R')&&x.includes('S'); };
    if (q.options.filter(o => isPQRS(o)).length >= 2) return false;
    return true;
}

const gsPool = (bank.gs || []).filter(isCleanGS);
let poolIdx = 0;
function getReplacement() {
    const q = gsPool[poolIdx % gsPool.length];
    poolIdx++;
    return q;
}

// --- Process CDS GS only ------------------------------------------------------
let totalReplaced = 0;

db.forEach(exam => {
    if (exam.exam !== 'CDS' || exam.subject !== 'General Knowledge') return;
    if (!exam.questions) return;

    for (let i = 0; i < exam.questions.length; i++) {
        if (isMathsQuestion(exam.questions[i])) {
            const preview = (exam.questions[i].question || '').substring(0, 70);
            console.log(`[REMOVED MATHS] ${exam.title} Q${i+1}: "${preview}..."`);
            exam.questions[i] = getReplacement();
            totalReplaced++;
        }
    }
});

// --- Write back ---------------------------------------------------------------
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
console.log('');
console.log('Done! Replaced ' + totalReplaced + ' Maths questions found in CDS GS papers.');
