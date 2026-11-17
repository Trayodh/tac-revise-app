const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

// Get all GS questions from the bank that we can use as replacements
let replacementPool = [];
if (bank.gs) {
    replacementPool = bank.gs.filter(q => {
        const txt = (q.question + " " + q.options.join(" ")).toLowerCase();
        return !txt.includes('codes a b c d') && 
               !txt.includes('a b c d a b c d') &&
               !txt.includes('s1:') && !txt.includes('s6:') && !txt.includes('s1 :') &&
               !txt.includes('synonym') && !txt.includes('antonym') && !txt.includes('closest in meaning') &&
               !txt.includes('directions:') && !txt.includes('no improvement') &&
               !txt.includes('proper sequence should be') &&
               !txt.includes('spqr');
    });
}

function getRandomReplacement() {
    return replacementPool[Math.floor(Math.random() * replacementPool.length)];
}

const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');

const db = m.exports.CBT_EXAMS_DATABASE;
const notes = m.exports.NOTES_DATABASE;

let replacedCount = 0;

const englishPatterns = [
    's1:', 's6:', 's1 :', 's6 :', 's1-', 's6-',
    'directions:', 'directions :',
    'closest in meaning', 'opposite in meaning', 'spot the error',
    'synonym', 'antonym', 'idiom', 'phrase', 'sentence rearrangement',
    'fill in the blank', 'choose the word', 'grammatically correct',
    'which part of the sentence', 'no error', 'no improvement',
    'choose the appropriate', 'choose the correct alternative',
    'active voice', 'passive voice', 'reported speech', 'direct speech',
    'proper sequence should be'
];

function isEnglishQuestion(q) {
    if (!q || !q.question) return false;
    const txt = q.question.toLowerCase();
    const opts = q.options.join(' ').toLowerCase();
    
    // Explicit topics
    if (q.topicId && q.topicId.toLowerCase().includes('english')) return true;
    
    for (const pat of englishPatterns) {
        if (txt.includes(pat) || opts.includes(pat)) return true;
    }
    
    // Check for P Q R S jumbled words options
    // If all options are made of permutations of P,Q,R,S
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

db.forEach(exam => {
    // Only check CDS General Knowledge!
    if (exam.exam !== 'CDS' || exam.subject !== 'General Knowledge') {
        return; 
    }
    
    for (let i = 0; i < exam.questions.length; i++) {
        if (isEnglishQuestion(exam.questions[i])) {
            console.log(`[Replaced] ${exam.title} -> ${exam.questions[i].question.substring(0, 50)}...`);
            exam.questions[i] = getRandomReplacement();
            replacedCount++;
        }
    }
});

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
console.log(`Successfully replaced ${replacedCount} accidental English questions in CDS GS!`);
