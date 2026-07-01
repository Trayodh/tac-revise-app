const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Removing NDA standalone English Mocks ===");
  
  // 1. Remove from data.js
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

  const initialLength = CBT_EXAMS_DATABASE.length;
  // Keep only exams that are NOT nda-english mocks
  CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE.filter(exam => !exam.id.startsWith('nda-english-mock-'));
  
  const removedCount = initialLength - CBT_EXAMS_DATABASE.length;

  if (removedCount > 0) {
    const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
    const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', newContent);
    console.log(`Successfully removed ${removedCount} NDA English mocks from data.js!`);
  } else {
    console.log("No NDA English mocks found in data.js to remove.");
  }

  // 2. Remove from generated cache
  const cachePath = 'scratch/generated_questions.json';
  if (fs.existsSync(cachePath)) {
    let cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    let cacheRemovedCount = 0;
    for (const key of Object.keys(cache)) {
      if (key.startsWith('nda-english-mock-')) {
        delete cache[key];
        cacheRemovedCount++;
      }
    }
    if (cacheRemovedCount > 0) {
      fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
      console.log(`Successfully removed ${cacheRemovedCount} NDA English mocks from cache!`);
    }
  }
}

main();
