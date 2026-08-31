const fs = require('fs');
const oldFiles = ['notes_generated.js', 'notes_generated_upgraded.js', 'notes_extra.js', 'notes_extra_history.js', 'notes_extra_upgraded.js', 'notes_extra_history_1000w.js', 'notes_generated_1000w.js', 'notes_extra_history_upgraded.js'];
let oldKeys = new Set();
oldFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const d = fs.readFileSync(f, 'utf8');
    [...d.matchAll(/EXPANDED_NOTES_DATA\["(.*?)"\]/g)].forEach(m => oldKeys.add(m[1]));
  }
});
const newFiles = ['notes_generated_science.js', 'notes_generated_polity.js', 'notes_generated_geography.js', 'notes_generated_economics.js', 'notes_generated_defence_env.js', 'notes_generated_batch6.js', 'notes_generated_final_patch.js'];
let newKeys = new Set();
newFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const d = fs.readFileSync(f, 'utf8');
    [...d.matchAll(/EXPANDED_NOTES_DATA\["(.*?)"\]/g)].forEach(m => newKeys.add(m[1]));
  }
});
const remaining = [...oldKeys].filter(k => !newKeys.has(k));
fs.writeFileSync('remaining_topics.json', JSON.stringify(remaining));
console.log('Found', remaining.length, 'topics to upgrade.');
