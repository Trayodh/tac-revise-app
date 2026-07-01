const fs = require('fs');

const bankPath = 'question_banks/cds_pyq_bank.json';
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

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

function isPQRSJumble(q) {
    if (!q.options || q.options.length !== 4) return false;
    const isP = (o) => { 
        const x = o.trim().toUpperCase().replace(/[^PQRS]/g, ''); 
        return x.length >= 4 && x.includes('P') && x.includes('Q') && x.includes('R') && x.includes('S'); 
    };
    return q.options.filter(o => isP(o)).length >= 2;
}

function isBadGSQuestion(q) {
    if (!q || !q.question || !q.options || q.options.length !== 4) return true;
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    for (const pat of ENGLISH_PATTERNS) { if (txt.includes(pat)) return true; }
    for (const pat of MMLU_PATTERNS) { if (txt.includes(pat)) return true; }
    if (isPQRSJumble(q)) return true;
    return false;
}

if (bank.gs) {
    const originalLength = bank.gs.length;
    bank.gs = bank.gs.filter(q => !isBadGSQuestion(q));
    const newLength = bank.gs.length;
    console.log(`Cleaned CDS PYQ Bank GS: removed ${originalLength - newLength} bad English/MMLU/Context questions.`);
    fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2));
}
