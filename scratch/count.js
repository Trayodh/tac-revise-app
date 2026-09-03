const fs = require('fs');
let src = fs.readFileSync('notes_data_exam_focused.js', 'utf8');
// Fix the const issue by creating a function sandbox
const getDb = new Function(`
  ${src.replace(/const NOTES_DATABASE/g, 'var NOTES_DATABASE').replace(/let CURRENT_AFFAIRS_DB/g, 'var CURRENT_AFFAIRS_DB')}
  return NOTES_DATABASE;
`);
try {
  const NOTES_DATABASE = getDb();
  let count = 0;
  for (let s in NOTES_DATABASE) {
    if (NOTES_DATABASE[s].chapters) {
      count += NOTES_DATABASE[s].chapters.length;
    }
  }
  console.log('Total chapters:', count);
} catch (e) {
  console.log('Error parsing:', e.message);
}
