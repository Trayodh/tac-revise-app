const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Wiping Old Mocks ===");
  
  const dataContent = fs.readFileSync('data.js', 'utf8');
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dataContent + ';\nwindow.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;', sandbox);
  let CBT_EXAMS_DATABASE = sandbox.window.CBT_EXAMS_DATABASE;

  const originalLength = CBT_EXAMS_DATABASE.length;
  
  // Keep only exams where the id ends in '-1' or the title specifically contains 'Mock Test 1'
  // Or the original 'Mock Test' from earlier phases. 
  // Let's filter out anything that has Mock 2, Mock 3, etc.
  CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE.filter(exam => {
     // Original IDs are usually: nda-math-mock-1, cds-gs-mock-1, etc.
     if (exam.id && exam.id.endsWith('-1')) return true;
     if (exam.title && exam.title.includes('Mock 1')) return true;
     if (exam.title && exam.title.includes('Mock Test 1')) return true;
     
     // Special case for NDA GAT which might not have "mock" in the id
     if (exam.id === 'nda-gat-mock-1') return true;
     
     // All other mocks are deleted
     return false;
  });

  const removed = originalLength - CBT_EXAMS_DATABASE.length;
  
  const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
  const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
  fs.writeFileSync('data.js', newContent);
  console.log(`Removed ${removed} generated mocks from data.js. Retained ${CBT_EXAMS_DATABASE.length} original mocks.`);
  
  // Wipe cache
  if (fs.existsSync('scratch/generated_questions.json')) {
      fs.writeFileSync('scratch/generated_questions.json', JSON.stringify({}));
      console.log("Wiped scratch/generated_questions.json");
  }
}

main();
