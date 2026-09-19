const fs = require('fs');
const vm = require('vm');

const REQUIRED_COUNTS = {
  'nda-math': 120,
  'nda-gat': 150,
  'cds-math': 100,
  'cds-english': 120,
  'cds-gk': 120,
  'afcat': 100
};

// 1. Load data
let code = fs.readFileSync('data.js', 'utf8');

code = code.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');
code = code.replace(/const QUESTION_BANK_DATABASE/g, 'var QUESTION_BANK_DATABASE');
code = code.replace(/const NOTES_DATABASE/g, 'var NOTES_DATABASE');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

let exams = sandbox.CBT_EXAMS_DATABASE;

function shuffleArray(array) {
  let newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

// 2. Pad tests that are still short
exams.forEach(exam => {
  let examType = '';
  if (exam.id.startsWith('nda-math')) examType = 'nda-math';
  else if (exam.id.startsWith('nda-gat')) examType = 'nda-gat';
  else if (exam.id.startsWith('cds-math')) examType = 'cds-math';
  else if (exam.id.startsWith('cds-english')) examType = 'cds-english';
  else if (exam.id.startsWith('cds-gk')) examType = 'cds-gk';
  else if (exam.id.startsWith('afcat')) examType = 'afcat';
  
  let req = REQUIRED_COUNTS[examType] || 100;
  let currentLen = exam.questions.length;
  
  if (currentLen < req) {
    let needed = req - currentLen;
    // Collect all questions from other exams of the SAME type
    let pool = [];
    exams.forEach(otherExam => {
      if (otherExam.id.startsWith(examType) && otherExam.id !== exam.id) {
        pool = pool.concat(otherExam.questions);
      }
    });
    
    // Shuffle the pool to get random questions
    pool = shuffleArray(pool);
    
    // Add needed questions, making sure we try not to add exact duplicates if possible, 
    // but if needed, we just add them to reach the count.
    let added = 0;
    for (let i = 0; i < pool.length && added < needed; i++) {
      // Basic check to avoid immediate duplicate text
      let exists = exam.questions.some(q => q.question === pool[i].question);
      if (!exists) {
        exam.questions.push(pool[i]);
        added++;
      }
    }
    
    // If still needed (pool exhausted of unique), just add any
    if (added < needed) {
      for (let i = 0; i < pool.length && added < needed; i++) {
        exam.questions.push(pool[i]);
        added++;
      }
    }
    
    console.log(`Padded ${exam.id}: added ${added} from other tests. New len: ${exam.questions.length}/${req}`);
  }
});

let original = fs.readFileSync('data.js', 'utf8');
let before = original.substring(0, original.indexOf('const CBT_EXAMS_DATABASE'));
let after = original.substring(original.indexOf('const NOTES_DATABASE'));

const newDbStr = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(exams, null, 2) + ';\n\n';
const newQBankStr = 'const QUESTION_BANK_DATABASE = ' + JSON.stringify(sandbox.QUESTION_BANK_DATABASE, null, 2) + ';\n\n';

fs.writeFileSync('data.js', before + newDbStr + newQBankStr + after, 'utf8');
console.log("Done padding.");
