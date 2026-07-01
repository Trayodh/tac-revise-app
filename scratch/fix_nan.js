const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Fixing NaN Mocks numbering ===");
  
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
  
  // Also keep track of numbers to assign sequentially if they are duplicate
  let mockNumberCounter = 2; // Start from 2 since Mock 1 usually exists

  CBT_EXAMS_DATABASE.forEach(exam => {
    if (exam.title.includes('NaN')) {
      // Extract number from id, e.g. cds-gk-coaching-mock-3 -> 3
      const parts = exam.id.split('-');
      const lastPart = parts[parts.length - 1];
      let num = parseInt(lastPart);
      
      if (isNaN(num)) {
         num = mockNumberCounter++;
      }
      
      // Update title
      exam.title = exam.title.replace('NaN', num.toString());
      
      // Also check if id has any issues
      updatedCount++;
      console.log(`Fixed title for ${exam.id} -> ${exam.title}`);
    }
  });

  // Sort exams by title number so Mock 1, 2, 3 appear in order
  CBT_EXAMS_DATABASE.sort((a, b) => {
      if (a.subject !== b.subject) return 0;
      if (a.exam !== b.exam) return 0;
      
      const getNum = (title) => {
          const match = title.match(/Mock.*?(\d+)/i);
          return match ? parseInt(match[1]) : 0;
      };
      return getNum(a.title) - getNum(b.title);
  });

  if (updatedCount > 0) {
    const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
    const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', newContent);
    console.log(`\nSUCCESS: Fixed numbering for ${updatedCount} exams in data.js!`);
  } else {
    console.log("No NaN exams found.");
  }
}

main();
