const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Fixing Missing Subjects in data.js ===");
  
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
    if (!exam.subject) {
      // Extract subject from ID (e.g. nda-math-mock-2)
      const parts = exam.id.split('-');
      const subjectStr = parts[1];
      
      if (subjectStr === 'math') exam.subject = 'Mathematics';
      else if (subjectStr === 'english') exam.subject = 'English';
      else if (subjectStr === 'gs') exam.subject = 'General Studies';
      else if (subjectStr === 'gk') exam.subject = 'General Knowledge';
      else if (subjectStr === 'gat') exam.subject = 'General Ability Test';
      else if (subjectStr === 'combined') exam.subject = 'Combined';
      else exam.subject = subjectStr.charAt(0).toUpperCase() + subjectStr.slice(1);
      
      updatedCount++;
      console.log(`Fixed subject for ${exam.id} -> ${exam.subject}`);
    }
  });

  if (updatedCount > 0) {
    const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
    const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', newContent);
    console.log(`\nSUCCESS: Fixed subjects for ${updatedCount} exams in data.js!`);
  } else {
    console.log("No missing subjects found.");
  }
}

main();
