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

let count = 0;
for (const s in notesDb) {
  for (const c of notesDb[s].chapters || []) {
    count += (c.topics || []).length;
  }
}
console.log('Total topics in notes_data.js:', count);
