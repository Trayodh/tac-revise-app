const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Enforcing Exact Marking Scheme in data.js ===");
  
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
    let newRules = null;
    
    if (exam.exam === "NDA") {
      if (exam.subject === "Mathematics") {
        newRules = { correctMarks: 2.5, incorrectMarks: -0.83 };
      } else if (exam.subject === "General Ability Test") {
        newRules = { correctMarks: 4.0, incorrectMarks: -1.33 };
      }
    } else if (exam.exam === "CDS") {
      if (exam.subject === "Mathematics") {
        newRules = { correctMarks: 1.0, incorrectMarks: -0.33 };
      } else if (exam.subject === "English" || exam.subject === "General Knowledge") {
        newRules = { correctMarks: 0.83, incorrectMarks: -0.27 };
      } else {
        // Fallback for any other CDS like "General Studies" just in case
        newRules = { correctMarks: 0.83, incorrectMarks: -0.27 };
      }
    } else if (exam.exam === "AFCAT") {
      newRules = { correctMarks: 3.0, incorrectMarks: -1.0 };
    }
    
    if (newRules) {
      if (!exam.rules || 
          exam.rules.correctMarks !== newRules.correctMarks || 
          exam.rules.incorrectMarks !== newRules.incorrectMarks) {
        exam.rules = newRules;
        updatedCount++;
      }
    }
  });

  if (updatedCount > 0) {
    const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
    const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', newContent);
    console.log(`\nSUCCESS: Enforced exact marking scheme for ${updatedCount} exams in data.js!`);
  } else {
    console.log("All exams already have the exact marking scheme.");
  }
}

main();
