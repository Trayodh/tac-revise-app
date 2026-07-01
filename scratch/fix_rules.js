const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Patching Missing Rules in data.js ===");
  
  const dataContent = fs.readFileSync('data.js', 'utf8');
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found in data.js");
    return;
  }
  
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dataContent + ';\nwindow.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;', sandbox);
  const CBT_EXAMS_DATABASE = sandbox.window.CBT_EXAMS_DATABASE;

  let updatedCount = 0;
  
  CBT_EXAMS_DATABASE.forEach(exam => {
    if (!exam.rules) {
      if (exam.exam === "NDA" && exam.subject === "Mathematics") {
        exam.rules = { correctMarks: 2.5, incorrectMarks: -0.83 };
      } else if (exam.exam === "NDA" && exam.subject === "General Ability Test") {
        exam.rules = { correctMarks: 4.0, incorrectMarks: -1.33 };
      } else if (exam.exam === "AFCAT") {
        exam.rules = { correctMarks: 3.0, incorrectMarks: -1.0 };
      } else {
        // CDS and everything else
        exam.rules = { correctMarks: 1.0, incorrectMarks: -0.33 };
      }
      
      updatedCount++;
      console.log(`Patched rules for ${exam.id}`);
    }
  });

  if (updatedCount > 0) {
    const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
    const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', newContent);
    console.log(`\nSUCCESS: Patched missing rules for ${updatedCount} exams in data.js!`);
  } else {
    console.log("No missing rules found.");
  }
}

main();
