const fs = require('fs');

const mcqFile = 'august_2026_mcqs_generated.json';
const targetFile = 'questions_data.js';

let mcqs = JSON.parse(fs.readFileSync(mcqFile, 'utf8'));

let cdsQs = [];
let ndaQs = [];
let afcatQs = [];

// Split into the 3 categories
for (let i = 0; i < mcqs.length; i++) {
  if (i % 3 === 0) cdsQs.push(mcqs[i]);
  else if (i % 3 === 1) ndaQs.push(mcqs[i]);
  else afcatQs.push(mcqs[i]);
}

const cdsExam = {
  id: "cds-ca-aug2026",
  exam: "CDS",
  subject: "Current Affairs",
  title: "CDS High-Yield Current Affairs (Aug 2026)",
  duration: 60,
  rules: { correctMarks: 0.83, incorrectMarks: -0.27 },
  questions: cdsQs
};

const ndaExam = {
  id: "nda-ca-aug2026",
  exam: "NDA",
  subject: "Current Affairs",
  title: "NDA High-Yield Current Affairs (Aug 2026)",
  duration: 60,
  rules: { correctMarks: 4, incorrectMarks: -1.33 },
  questions: ndaQs
};

const afcatExam = {
  id: "afcat-ca-aug2026",
  exam: "AFCAT",
  subject: "Current Affairs",
  title: "AFCAT High-Yield Current Affairs (Aug 2026)",
  duration: 60,
  rules: { correctMarks: 3, incorrectMarks: -1 },
  questions: afcatQs
};

let dbContent = fs.readFileSync(targetFile, 'utf8');

// Find the end of CBT_EXAMS_DATABASE
const marker = "];";
const insertPos = dbContent.lastIndexOf(marker);

if (insertPos !== -1) {
  const newExams = `,\n  ${JSON.stringify(cdsExam, null, 2)},\n  ${JSON.stringify(ndaExam, null, 2)},\n  ${JSON.stringify(afcatExam, null, 2)}\n];`;
  const updatedContent = dbContent.slice(0, insertPos) + newExams + dbContent.slice(insertPos + marker.length);
  fs.writeFileSync(targetFile, updatedContent);
  console.log('Successfully injected 3 new CA Mock Tests into questions_data.js');
} else {
  console.log('Error: Could not find ]; in questions_data.js');
}
