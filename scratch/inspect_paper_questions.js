const fs = require('fs');
const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');
const exams = m.exports.CBT_EXAMS_DATABASE;

const paper = exams.find(e => e.id === 'cds-english-v2-1');
console.log('Q47:', JSON.stringify(paper.questions[46], null, 2));
console.log('Q72:', JSON.stringify(paper.questions[71], null, 2));
