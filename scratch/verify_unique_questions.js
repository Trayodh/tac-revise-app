const fs = require('fs');

function verifyUniqueQuestions() {
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

  let totalQuestions = 0;
  const globalSeen = new Set();
  let duplicateCount = 0;
  let invalidSchemaCount = 0;

  CBT_EXAMS_DATABASE.forEach(exam => {
    exam.questions.forEach((q, idx) => {
      totalQuestions++;
      // Check Schema
      if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3 || !q.explanation) {
        console.error(`Invalid question schema in ${exam.title} at index ${idx}:`, JSON.stringify(q));
        invalidSchemaCount++;
      }

      // Check Duplicates
      const qText = q.question.trim().toLowerCase();
      if (globalSeen.has(qText)) {
        duplicateCount++;
      }
      globalSeen.add(qText);
    });
  });

  console.log(`\n=== Verification Results ===`);
  console.log(`Total questions checked: ${totalQuestions}`);
  console.log(`Unique questions: ${globalSeen.size}`);
  console.log(`Duplicate question count: ${duplicateCount}`);
  console.log(`Invalid schema questions: ${invalidSchemaCount}`);

  // Count unique questions in NDA Mathematics Mock 2-5 to confirm they are generated
  const ndaMathMocks = CBT_EXAMS_DATABASE.filter(e => e.id.startsWith('nda-math-mock-'));
  console.log(`\n=== NDA Math Mocks Status ===`);
  ndaMathMocks.forEach(e => {
    const uniqueInMock = new Set(e.questions.map(q => q.question.trim().toLowerCase())).size;
    console.log(`  - ${e.title}: ${e.questions.length} questions (${uniqueInMock} unique in this mock)`);
  });

  if (duplicateCount < 8000) {
    console.log(`\nDuplicate rate is down to: ${((duplicateCount / totalQuestions) * 100).toFixed(2)}%`);
  }

  if (invalidSchemaCount === 0) {
    console.log("\nSUCCESS: All question schemas match the template perfectly!");
  } else {
    console.log("\nWARNING: Invalid schemas found. Please review the database.");
  }
}

verifyUniqueQuestions();
