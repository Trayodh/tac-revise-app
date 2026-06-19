const fs = require('fs');

function findDuplicates() {
  const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
  const m = new module.constructor();
  
  try {
    m._compile(code, 'data.js');
  } catch (e) {
    console.error("Failed to compile data.js:", e.message);
    process.exit(1);
  }

  const CBT_EXAMS_DATABASE = m.exports.CBT_EXAMS_DATABASE;
  console.log(`Loaded ${CBT_EXAMS_DATABASE.length} exams.`);

  CBT_EXAMS_DATABASE.forEach(exam => {
    const seen = new Set();
    let selfDup = 0;
    exam.questions.forEach(q => {
      const qText = q.question.trim().toLowerCase();
      if (seen.has(qText)) {
        selfDup++;
      }
      seen.add(qText);
    });
    if (selfDup > 0) {
      console.log(`Exam ${exam.title} (${exam.id}) has ${selfDup} self-duplicate questions!`);
    }
  });

  // Compare mocks in same category
  const groups = {};
  CBT_EXAMS_DATABASE.forEach(exam => {
    const key = `${exam.exam}-${exam.subject}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(exam);
  });

  for (const [key, exams] of Object.entries(groups)) {
    console.log(`\nGroup: ${key}`);
    for (let i = 0; i < exams.length; i++) {
      for (let j = i + 1; j < exams.length; j++) {
        let common = 0;
        const setA = new Set(exams[i].questions.map(q => q.question.trim().toLowerCase()));
        exams[j].questions.forEach(q => {
          if (setA.has(q.question.trim().toLowerCase())) {
            common++;
          }
        });
        if (common > 0) {
          console.log(`  - ${exams[i].title} & ${exams[j].title}: ${common} identical questions in common out of ${exams[j].questions.length}`);
        }
      }
    }
  }
}

findDuplicates();
