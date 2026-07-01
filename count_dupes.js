const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const vm = require('vm');
const context = {};
vm.createContext(context);
vm.runInContext(s, context);

const exams = context.CBT_EXAMS_DATABASE;

// Check all exam types for duplicates
const examGroups = {
  'CDS GK': exams.filter(e => e.id.startsWith('cds-gk')),
  'CDS English': exams.filter(e => e.id.startsWith('cds-english')),
  'CDS Math': exams.filter(e => e.id.startsWith('cds-math')),
  'NDA GAT': exams.filter(e => e.id.startsWith('nda-gat')),
  'AFCAT': exams.filter(e => e.id.startsWith('afcat')),
};

for (const [groupName, groupExams] of Object.entries(examGroups)) {
  const seen = new Map();
  let dupes = 0;
  const dupesByExam = {};

  for (const exam of groupExams) {
    dupesByExam[exam.id] = 0;
    for (let i = 0; i < exam.questions.length; i++) {
      const key = exam.questions[i].question.substring(0, 100).trim();
      if (seen.has(key)) {
        dupes++;
        dupesByExam[exam.id]++;
      } else {
        seen.set(key, exam.id);
      }
    }
  }

  console.log(`\n=== ${groupName} ===`);
  console.log(`Total duplicates: ${dupes}`);
  for (const exam of groupExams) {
    console.log(`  ${exam.id}: ${exam.questions.length} questions, ${dupesByExam[exam.id]} duplicates`);
  }
}
