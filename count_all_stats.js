const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));
let qCount = 0;
console.log('--- Questions in Bank ---');
Object.keys(bank).forEach(k => {
    console.log(`${k}: ${bank[k].length} questions`);
    qCount += bank[k].length;
});
console.log(`Total Questions: ${qCount}\n`);

const dataJs = fs.readFileSync('data.js', 'utf8');
const start = dataJs.indexOf('const CBT_EXAMS_DATABASE = ');
// find the end of the declaration, up to "const CURRENT_AFFAIRS_DB" or so
const end = dataJs.indexOf('const CURRENT_AFFAIRS_DB');
let code = dataJs.substring(start, end);
// clean up trailing things if needed
const sandbox = {};
require('vm').createContext(sandbox);
require('vm').runInContext(code.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE'), sandbox);

const db = sandbox.CBT_EXAMS_DATABASE;
let totalPapers = 0;
console.log('--- Mock Papers ---');
Object.keys(db).forEach(k => {
    console.log(`${db[k].title}: ${db[k].mocks.length} papers`);
    totalPapers += db[k].mocks.length;
});
console.log(`Total Question Papers: ${totalPapers}`);
