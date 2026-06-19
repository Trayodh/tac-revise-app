const fs = require('fs');
const vm = require('vm');
const content = fs.readFileSync('data.js', 'utf8');

// We need to extract just the CBT_EXAMS_DATABASE portion
// The data.js file has let NOTES_DATABASE, let CURRENT_AFFAIRS_DB, const CBT_EXAMS_DATABASE
// Let's find from "const CBT_EXAMS_DATABASE" to the end of file
const startIdx = content.indexOf('const CBT_EXAMS_DATABASE = [');
const cbtSection = content.substring(startIdx);

// Execute in a sandbox
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(cbtSection, sandbox);

const db = sandbox.CBT_EXAMS_DATABASE;
console.log('Total exams:', db.length);
console.log('\n--- EXAM SUMMARY ---');
db.forEach(e => {
  const uniqueQs = new Set(e.questions.map(q => q.question)).size;
  const dupeCount = e.questions.length - uniqueQs;
  console.log(`${e.id} | Subject: ${e.subject} | Total Qs: ${e.questions.length} | Unique: ${uniqueQs} | Duplicates: ${dupeCount}`);
});

// Check GS papers for math contamination
console.log('\n--- GS/Aptitude PAPERS (Math Contamination Check) ---');
const gsPapers = db.filter(e => {
  const sub = e.subject.toLowerCase();
  return !sub.includes('math') && !sub.includes('english');
});
gsPapers.forEach(e => {
  const mathKeywords = ['sin⁻¹', 'cos⁻¹', 'tan⁻¹', '∫', 'integral', 'derivative', 'matrix', 'determinant', 'differential equation', 'dy/dx', 'lim(x', 'polynomial', 'quadratic', 'differentiat', 'cot 15', 'sec x', 'vector', 'projection of vector'];
  const mathQs = e.questions.filter(q => {
    const ql = q.question.toLowerCase();
    return mathKeywords.some(k => ql.includes(k.toLowerCase()));
  });
  console.log(`\n${e.id}: ${mathQs.length} math-type Qs out of ${e.questions.length}`);
  if (mathQs.length > 0) {
    mathQs.slice(0, 5).forEach(q => console.log('  MATH Q:', q.question.substring(0, 120)));
  }
});
