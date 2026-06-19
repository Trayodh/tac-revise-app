const fs = require('fs');

function fixInvalid() {
  console.log("Loading data.js...");
  const dataContent = fs.readFileSync('data.js', 'utf8');
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found!");
    process.exit(1);
  }

  let firstBracket = dataContent.indexOf('[', dbStart);
  let arrayEndIndex = dataContent.lastIndexOf(']');
  if (firstBracket === -1 || arrayEndIndex === -1 || arrayEndIndex <= firstBracket) {
    console.error("Failed to find bounds of CBT_EXAMS_DATABASE array!");
    process.exit(1);
  }

  const code = dataContent + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
  const m = new module.constructor();
  let CBT_EXAMS_DATABASE;
  try {
    m._compile(code, 'data.js');
    CBT_EXAMS_DATABASE = m.exports.CBT_EXAMS_DATABASE;
  } catch (e) {
    console.error("Failed to parse CBT_EXAMS_DATABASE:", e.message);
    process.exit(1);
  }

  // 1. Fix nda-english-mock-5 index 43
  const mock5 = CBT_EXAMS_DATABASE.find(e => e.id === 'nda-english-mock-5');
  if (mock5 && mock5.questions[43]) {
    const q = mock5.questions[43];
    console.log("Fixing mock5 Q43:", q.question);
    q.options = [
      "Ephemeral : Transient",
      "Gregarious : Unsociable",
      "Prudent : Rash",
      "Both Gregarious : Unsociable and Prudent : Rash are correct"
    ];
    q.correct = 3;
  }

  // 2. Fix nda-english-mock-7 index 50
  const mock7 = CBT_EXAMS_DATABASE.find(e => e.id === 'nda-english-mock-7');
  if (mock7 && mock7.questions[50]) {
    const q = mock7.questions[50];
    console.log("Fixing mock7 Q50:", q.question);
    q.options = [
      "Segment (A)",
      "Segment (B)",
      "Segment (C) or (D)",
      "No error"
    ];
    q.correct = 3;
  }

  console.log("Merging changes back to data.js...");
  const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
  const newContent = dataContent.substring(0, firstBracket) + updatedCbtExamsStr + dataContent.substring(arrayEndIndex + 1);
  fs.writeFileSync('data.js', newContent);
  console.log("Successfully fixed invalid question schemas in data.js!");
}

fixInvalid();
