const fs = require('fs');

const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');
const CBT_EXAMS_DATABASE = m.exports.CBT_EXAMS_DATABASE;

CBT_EXAMS_DATABASE.forEach(exam => {
  exam.questions.forEach((q, idx) => {
    if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3 || !q.explanation) {
      console.log(`Exam: ${exam.title} (${exam.id}) Index: ${idx}`);
      console.log(`Question: ${q.question}`);
      console.log(`Options (${q.options.length}):`, q.options);
      console.log(`Correct: ${q.correct}`);
    }
  });
});
