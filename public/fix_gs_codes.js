const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

// Get all GS questions from the bank that we can use as replacements
let replacementPool = [];
if (bank.gs) {
    replacementPool = bank.gs.filter(q => {
        const txt = (q.question + " " + q.options.join(" ")).toLowerCase();
        return !txt.includes('codes a b c d') && !txt.includes('a b c d a b c d');
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

function isBadQuestion(q) {
    if (!q || !q.question) return false;
    const txt = q.question.toLowerCase();
    
    if (txt.includes('codes a b c d')) return true;
    if (txt.includes('a b c d a b c d')) return true;
    
    return false;
}

db.forEach(exam => {
    for (let i = 0; i < exam.questions.length; i++) {
        if (isBadQuestion(exam.questions[i])) {
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
console.log(`Successfully replaced ${replacedCount} corrupted Match-the-following questions!`);
