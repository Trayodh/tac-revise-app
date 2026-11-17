const fs = require('fs');
const vm = require('vm');

let code = fs.readFileSync('notes_data.js', 'utf8');
const start = code.indexOf('const NOTES_DATABASE = {');
let dbCode = 'const NOTES_DATABASE = ' + code.slice(start + 'const NOTES_DATABASE = '.length);
const dbSandbox = { window: {} };
vm.createContext(dbSandbox);
vm.runInContext(dbCode, dbSandbox);
let notesDb = dbSandbox.NOTES_DATABASE;

let c1 = 0, c2 = 0;
for (const subjectId in notesDb) {
  const chapters = notesDb[subjectId].chapters || [];
  for (const chapter of chapters) {
    const topics = chapter.topics || [];
    for (const topic of topics) {
      if (topic.notes && topic.notes.includes('<div class="revision-card"')) {
        c1++;
      } else {
        c2++;
      }
    }
  }
}
console.log('Has revision-card:', c1);
console.log('Does NOT have revision-card:', c2);
