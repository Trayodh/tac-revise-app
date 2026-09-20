const fs = require('fs');
const vm = require('vm');

console.log("Loading data.js...");
let dataJs = fs.readFileSync('data.js', 'utf8');

const dbEnd = dataJs.indexOf('const CURRENT_AFFAIRS_DB');
const beforeDB = dataJs.substring(0, dbEnd);
const afterDB = dataJs.substring(dbEnd);

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(beforeDB.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE'), sandbox);

let cbtDb = sandbox.CBT_EXAMS_DATABASE;

// Remove ALL existing AFCAT mocks
const originalLength = cbtDb.length;
cbtDb = cbtDb.filter(m => m.exam !== 'AFCAT');
console.log(`Removed ${originalLength - cbtDb.length} existing AFCAT mocks.`);

// Load the question bank
console.log("Loading cds_pyq_bank.json...");
const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

let afcatQuestions = bank.afcat || [];
console.log(`Found ${afcatQuestions.length} AFCAT questions in bank.`);

// Ensure each question has an id and topicId
afcatQuestions.forEach((q, i) => {
    if (!q.id) q.id = 'afcat-q-' + i;
    if (!q.topicId) q.topicId = 'mixed';
});

// An actual AFCAT paper has 100 questions.
const PAPER_SIZE = 100;
let paperCount = Math.floor(afcatQuestions.length / PAPER_SIZE);

if (paperCount === 0 && afcatQuestions.length > 0) {
    paperCount = 1;
}

for (let i = 0; i < paperCount; i++) {
    let start = i * PAPER_SIZE;
    let end = start + PAPER_SIZE;
    let slice = afcatQuestions.slice(start, end);
    
    // In case the last paper doesn't have 100 but we want to make it anyway
    if (slice.length === 0) break;

    cbtDb.push({
        id: `afcat-combined-mock-${i + 1}`,
        exam: "AFCAT",
        subject: "Combined",
        title: `AFCAT Full Mock Test ${i + 1}`,
        duration: 120,
        questionsCount: slice.length,
        rules: {
            correctMarks: 3,
            incorrectMarks: -1,
            examType: "AFCAT"
        },
        questions: slice
    });
}

console.log(`Created ${paperCount} new Full Combined AFCAT mocks.`);

// Reconstruct data.js
const prefixStr = dataJs.substring(0, dataJs.indexOf('const CBT_EXAMS_DATABASE = '));
const newDbStr = "const CBT_EXAMS_DATABASE = " + JSON.stringify(cbtDb, null, 2) + ";\n\n";

fs.writeFileSync('data.js', prefixStr + newDbStr + afterDB, 'utf8');
console.log("data.js successfully updated!");
