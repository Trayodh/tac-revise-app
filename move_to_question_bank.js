const fs = require('fs');
const vm = require('vm');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const ctx = {};
vm.createContext(ctx);
vm.runInContext(s, ctx);
const exams = ctx.CBT_EXAMS_DATABASE;

const examsToKeep = [];
const questionBank = {};

for (const exam of exams) {
  const match = exam.id.match(/^(.+?)-v\d+-(\d+)$/);
  if (match) {
    const prefix = match[1];
    const num = parseInt(match[2], 10);
    
    if (num <= 5) {
      examsToKeep.push(exam);
    } else {
      if (!questionBank[prefix]) questionBank[prefix] = [];
      questionBank[prefix].push(...exam.questions);
    }
  } else {
    // If it doesn't match the numbered pattern, keep it
    examsToKeep.push(exam);
  }
}

console.log(`Keeping ${examsToKeep.length} exams.`);
const qBankStats = [];
let totalBankQuestions = 0;
for (const key in questionBank) {
  qBankStats.push(`${key}: ${questionBank[key].length} questions`);
  totalBankQuestions += questionBank[key].length;
}
console.log(`Moved ${totalBankQuestions} questions to the Question Bank.`);
console.log(qBankStats.join('\n'));

// Extract and replace CBT_EXAMS_DATABASE text
let original = fs.readFileSync('data.js', 'utf8');
const startMarker = 'const CBT_EXAMS_DATABASE =';
const startIdx = original.indexOf(startMarker);

let depth = 0, endIdx = -1, inString = false, escapeNext = false;
for (let i = startIdx + startMarker.length; i < original.length; i++) {
  const ch = original[i];
  if (escapeNext) { escapeNext = false; continue; }
  if (ch === '\\' && inString) { escapeNext = true; continue; }
  if (ch === '"') { inString = !inString; continue; }
  if (inString) continue;
  if (ch === '[') depth++;
  if (ch === ']') { 
    depth--; 
    if (depth === 0) { 
      let j = i + 1; 
      while (j < original.length && ' \r\n'.includes(original[j])) j++; 
      if (original[j] === ';') j++; 
      endIdx = j; 
      break; 
    } 
  }
}

const before = original.substring(0, startIdx);
let after = original.substring(endIdx);

// Append QUESTION_BANK_DATABASE exports
if (!after.includes('window.QUESTION_BANK_DATABASE')) {
  after = after.replace('window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;', 'window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;\n    window.QUESTION_BANK_DATABASE = QUESTION_BANK_DATABASE;');
}
if (!after.includes('QUESTION_BANK_DATABASE,')) {
  after = after.replace('module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };', 'module.exports = { CBT_EXAMS_DATABASE, QUESTION_BANK_DATABASE, NOTES_DATABASE };');
}

const newDbStr = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(examsToKeep, null, 2) + ';\n\n';
const newQBankStr = 'const QUESTION_BANK_DATABASE = ' + JSON.stringify(questionBank, null, 2) + ';\n\n';

fs.writeFileSync('data.js', before + newDbStr + newQBankStr + after, 'utf8');
console.log('✅ data.js successfully updated with QUESTION_BANK_DATABASE');
