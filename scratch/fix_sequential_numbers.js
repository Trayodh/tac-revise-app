const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Strict Sequential Renumbering in data.js ===");
  
  const dataContent = fs.readFileSync('data.js', 'utf8');
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found in data.js");
    return;
  }
  
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dataContent + ';\nwindow.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;', sandbox);
  let CBT_EXAMS_DATABASE = sandbox.window.CBT_EXAMS_DATABASE;

  // Group by folder (exam + subject)
  const folders = {};
  CBT_EXAMS_DATABASE.forEach(exam => {
    const key = `${exam.exam}-${exam.subject}`;
    if (!folders[key]) folders[key] = [];
    folders[key].push(exam);
  });

  let updatedCount = 0;

  for (const key of Object.keys(folders)) {
    const group = folders[key];
    
    // Attempt to parse out existing numbers to sort them logically first
    // so we don't scramble the order completely.
    group.sort((a, b) => {
      const getNum = (str) => {
        const match = str.match(/(?:Mock|Test)\s*(\d+)/i) || str.match(/-(\d+)$/);
        return match ? parseInt(match[1]) : 999; // push unknown to end
      };
      return getNum(a.title || a.id) - getNum(b.title || b.id);
    });

    // Now re-assign titles strictly 1, 2, 3...
    group.forEach((exam, index) => {
      const properNumber = index + 1;
      
      // Keep "Mock Test 1" if it's the original one, else use "(Mock X)"
      let newTitle;
      if (exam.title.toLowerCase().includes('mock test')) {
          newTitle = exam.title.replace(/Mock Test \d+/i, `Mock Test ${properNumber}`);
      } else if (exam.title.toLowerCase().includes('(mock')) {
          newTitle = exam.title.replace(/\(Mock \d+\)/i, `(Mock ${properNumber})`);
      } else {
          // If no number exists, append it
          newTitle = `${exam.title} (Mock ${properNumber})`;
      }

      if (exam.title !== newTitle) {
          console.log(`Renamed: ${exam.title} -> ${newTitle}`);
          exam.title = newTitle;
          updatedCount++;
      }
    });
  }

  // Re-flatten array in this nicely sorted order
  const flattenedDb = [];
  for (const key of Object.keys(folders)) {
      flattenedDb.push(...folders[key]);
  }

  if (updatedCount > 0 || true) { // Always save to apply the new strict sort
    const updatedCbtExamsStr = JSON.stringify(flattenedDb, null, 2);
    const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', newContent);
    console.log(`\nSUCCESS: Renumbered ${updatedCount} exams and strictly sorted data.js!`);
  }
}

main();
