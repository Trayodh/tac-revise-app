const fs = require('fs');

console.log('Reading data.js...');
let text = fs.readFileSync('data.js', 'utf8');
text = text.replace(/const /g, 'var ').replace(/let /g, 'var ');
console.log('Evaluating data.js...');
eval(text);

console.log('Writing notes_data.js...');
let notesDataJs = '';
if (typeof CURRENT_AFFAIRS_DB !== 'undefined') notesDataJs += 'let CURRENT_AFFAIRS_DB = ' + JSON.stringify(CURRENT_AFFAIRS_DB, null, 2) + ';\n\n';
if (typeof NOTES_DATABASE !== 'undefined') notesDataJs += 'const NOTES_DATABASE = ' + JSON.stringify(NOTES_DATABASE, null, 2) + ';\n';
fs.writeFileSync('notes_data.js', notesDataJs, 'utf8');

console.log('Writing questions_data.js...');
let questionsDataJs = '';
if (typeof CBT_EXAMS_DATABASE !== 'undefined') questionsDataJs += 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(CBT_EXAMS_DATABASE, null, 2) + ';\n\n';
if (typeof QUESTION_BANK_DATABASE !== 'undefined') questionsDataJs += 'const QUESTION_BANK_DATABASE = ' + JSON.stringify(QUESTION_BANK_DATABASE, null, 2) + ';\n\n';
fs.writeFileSync('questions_data.js', questionsDataJs, 'utf8');

console.log('Done separating notes and questions.');
