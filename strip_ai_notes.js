const fs = require('fs');
const vm = require('vm');

let code = fs.readFileSync('notes_data.js', 'utf8');
const start = code.indexOf('const NOTES_DATABASE = {');
let dbCode = 'const NOTES_DATABASE = ' + code.slice(start + 'const NOTES_DATABASE = '.length);
dbCode += '\nwindow.NOTES_DATABASE = NOTES_DATABASE;';
const dbSandbox = { window: {} };
vm.createContext(dbSandbox);
vm.runInContext(dbCode, dbSandbox);
let notesDb = dbSandbox.window.NOTES_DATABASE;

let strippedCount = 0;
for (const s in notesDb) {
  for (const c of notesDb[s].chapters || []) {
    for (const t of c.topics || []) {
      if (t.notes && t.notes.includes('<!-- AI_BULK_NOTES -->')) {
        t.notes = t.notes.substring(0, t.notes.indexOf('<!-- AI_BULK_NOTES -->')).trim();
        strippedCount++;
      }
    }
  }
}

const preDbCode = code.slice(0, start);
const newDbString = JSON.stringify(notesDb, null, 2);
fs.writeFileSync('notes_data.js', preDbCode + 'const NOTES_DATABASE = ' + newDbString + ';\n');

console.log(`Stripped AI_BULK_NOTES from ${strippedCount} topics!`);
