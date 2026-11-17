const fs = require('fs');

// Read data.js and strip out "const " or "let " from declarations so we can evaluate it and get the variables
let content = fs.readFileSync('data.js', 'utf8');
content = content.replace(/const NOTES_DATABASE =/g, 'var NOTES_DATABASE =');
content = content.replace(/const CBT_EXAMS_DATABASE =/g, 'var CBT_EXAMS_DATABASE =');

var NOTES_DATABASE, CBT_EXAMS_DATABASE;
eval(content);

const mock11 = CBT_EXAMS_DATABASE.find(e => e.id === 'nda-math-mock-11');
const mock10 = CBT_EXAMS_DATABASE.find(e => e.id === 'nda-math-mock-10');

if (mock11 && mock10) {
  console.log('Mock 11 title:', mock11.title);
  console.log('Mock 10 title:', mock10.title);
  console.log('Mock 11 questions count:', mock11.questions.length);
  console.log('Mock 10 questions count:', mock10.questions.length);
  console.log('Mock 11 Q1:', mock11.questions[0].question);
  console.log('Mock 10 Q1:', mock10.questions[0].question);
} else {
  console.log('Mock 11 found:', !!mock11, 'Mock 10 found:', !!mock10);
}
