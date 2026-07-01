const fs = require('fs');
const vm = require('vm');

const dataContent = fs.readFileSync('data.js', 'utf8');
const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataContent + ';\nwindow.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;', sandbox);
const CBT_EXAMS_DATABASE = sandbox.window.CBT_EXAMS_DATABASE;

const gatExams = CBT_EXAMS_DATABASE.filter(e => e.exam === 'NDA' && (e.subject === 'GAT' || e.subject === 'General Ability Test' || e.subject === 'General Ability Test (GAT)'));
gatExams.forEach(e => {
    console.log(`${e.id} -> ${e.subject}`);
});
