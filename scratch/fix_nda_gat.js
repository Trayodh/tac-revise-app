const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Standardizing NDA English to GAT in data.js ===");
  
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
    if (exam.exam === 'NDA' && exam.subject === 'English') {
      exam.subject = 'General Ability Test';
      
      // We also update the title so it looks uniform inside the folder
      if (exam.title.includes('English')) {
        exam.title = exam.title.replace('English', 'GAT (English Section)');
      }
      
      updatedCount++;
      console.log(`Standardized ${exam.id} to General Ability Test`);
    }
  });

  if (updatedCount > 0) {
    const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
    const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', newContent);
    console.log(`\nSUCCESS: Standardized ${updatedCount} NDA English exams to GAT in data.js!`);
  } else {
    console.log("No NDA 'English' exams found to standardize.");
  }
}

main();
