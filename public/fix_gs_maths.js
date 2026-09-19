const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

// Get all GS questions from the bank that we can use as replacements
let replacementPool = [];
if (bank.gs) {
    replacementPool = bank.gs.filter(q => {
        // Exclude obvious math from replacements just in case
        const txt = (q.question + " " + q.options.join(" ")).toLowerCase();
        return !txt.includes('per annum') && !txt.includes('compounded') && 
               !txt.includes('polygon') && !txt.includes('triangle abc');
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

const mathKeywords = [
    'invested at', 'per annum', 'compounded', 'triangle abc', 'cm2', 'polygon',
    'probability of', 'dice is thrown', 'two circles', 'radius r', 'equilateral triangle',
    'polynomial', 'quadratic', 'integer', 'value of x', 'sin theta', 'cos theta', 'tan theta',
    'logarithm', 'binomial', 'matrices', 'determinant', 'vector', 'calculus', 'integration',
    'derivative', 'limit x', 'mean value theorem', 'standard deviation', 'variance',
    'compound interest', 'simple interest', 'profit percent', 'loss percent',
    'train leaves', 'speed of boat', 'downstream', 'upstream', 'work done by'
];

function isMathQuestion(q) {
    if (!q || !q.question) return false;
    const txt = q.question.toLowerCase();
    
    // Some GS questions have integers, so we check for very strong math patterns
    if (q.topicId && q.topicId.toLowerCase().includes('math')) return true;
    
    for (const kw of mathKeywords) {
        if (txt.includes(kw)) return true;
    }
    
    // Check for math notation
    if (txt.match(/x\s*=\s*\d/)) return true;
    if (txt.match(/[xyz]\s*\+\s*[xyz]/)) return true;
    if (txt.match(/cos\s*x/)) return true;
    
    return false;
}

db.forEach(exam => {
    // Only check GS exams (GAT, CDS GK, AFCAT Combined)
    if (exam.title.includes('Math') || exam.title.includes('English') || exam.subject === 'Mathematics' || exam.subject === 'English') {
        return; // skip math exams
    }
    
    for (let i = 0; i < exam.questions.length; i++) {
        if (isMathQuestion(exam.questions[i])) {
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
console.log(`Successfully replaced ${replacedCount} accidental math questions in GS papers!`);
