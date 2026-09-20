/**
 * purge_gk_bucket.js
 * 
 * Scans the general_knowledge bucket in structured_bank.json,
 * removes actual maths questions, moves cloze/fill-in-blank questions
 * to the English bucket, then rebuilds structured_bank.json.
 * Finally re-runs generate_all_papers.js.
 */

const fs   = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));
const gk   = bank.cds.gs.general_knowledge;

const MATHS_PATTERNS = [
    'surface area','volume of','radius of','perimeter of','area of the','area of a',
    'lcm of','hcf of','polynomial','quadratic',
    'arithmetic progression','geometric progression',
    'simple interest','compound interest',
    'sin θ','cos θ','tan θ','sin(','cos(','tan(','sinθ','cosθ','tanθ',
    'angle of elevation','angles of elevation','angle of depression','angles of depression',
    'standard deviation','variance of',
    'probability that','permutation','combination',
    'value of x','value of n',
    'roots of the equation','the equation x',
    'logarithm',
    'right-angled triangle','isosceles triangle','equilateral triangle',
    'rhombus','parallelogram','trapezium',
];

const CLOZE_PATTERNS = [
    '........', '………', '______', '……',
];

function isPQRS(o) {
    const x = o.trim().toUpperCase().replace(/[^PQRS]/g, '');
    return x.length === 4 && x.includes('P') && x.includes('Q') && x.includes('R') && x.includes('S');
}

function hasMathsOptions(q) {
    const numericOpts = (q.options||[]).filter(o => /^[\d\s\.:π√±\-\/]+$/.test(o.trim()) || o.includes('π') || o.includes('√'));
    const varOpts     = (q.options||[]).filter(o => /^[√]?[a-z]{1,3}[\d²³]?[a-z]?[\d²³]?$/.test(o.replace(/\s/g,'')));
    return numericOpts.length >= 3 || varOpts.length >= 3;
}

function isActualMaths(q) {
    if (!q || !q.question) return false;
    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
    // Must NOT be a cloze question (those have blanks — English)
    if (CLOZE_PATTERNS.some(p => txt.includes(p))) return false;
    if (MATHS_PATTERNS.some(p => txt.includes(p))) return true;
    if (hasMathsOptions(q)) return true;
    return false;
}

function isClozeOrFillBlank(q) {
    if (!q || !q.question) return false;
    const txt = q.question.toLowerCase();
    return CLOZE_PATTERNS.some(p => txt.includes(p));
}

function isPQRSJumble(q) {
    return (q.options||[]).filter(o => isPQRS(o)).length >= 2;
}

let removedMaths = 0, movedEnglish = 0;
const clean = [];

gk.forEach(q => {
    if (isActualMaths(q)) {
        // Drop it — it belongs in maths pool which already has plenty
        removedMaths++;
        console.log('[REMOVED MATHS] ' + q.question.substring(0, 70));
    } else if (isClozeOrFillBlank(q) || isPQRSJumble(q)) {
        // Move to English sentence_structure in all three exams
        bank.cds.english.sentence_structure.push(q);
        bank.nda.gat.english.sentence_structure.push(q);
        bank.afcat.english.sentence_structure.push(q);
        movedEnglish++;
        console.log('[MOVED TO ENG] ' + q.question.substring(0, 70));
    } else {
        clean.push(q);
    }
});

bank.cds.gs.general_knowledge = clean;

// Save updated structured bank
fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));

console.log('\n=== PURGE COMPLETE ===');
console.log('Removed maths: ' + removedMaths);
console.log('Moved to English: ' + movedEnglish);
console.log('Clean GK remaining: ' + clean.length);
console.log('\nNow regenerating all papers...');

// Trigger paper generation
require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
