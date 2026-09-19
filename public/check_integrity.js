const fs = require('fs');
const subjects = ['history','polity','geography','economics','physics','chemistry','biology','mathematics','english','military-aptitude','current-affairs','environment'];

subjects.forEach(s => {
  const f = 'notes_extra_' + s + '.js';
  if (!fs.existsSync(f)) { console.log(s + ': FILE MISSING'); return; }
  const c = fs.readFileSync(f, 'utf8');
  const entries = (c.match(/EXPANDED_NOTES_DATA\["[^"]+"\]/g) || []).length;
  const sizeKB = Math.round(c.length / 1024);
  // Check for empty entries (backtick immediately closed)
  const empty = (c.match(/EXPANDED_NOTES_DATA\["[^"]+"\] = `\s*`;/g) || []).length;
  console.log(s + ': ' + entries + ' topics, ' + sizeKB + 'KB, ' + empty + ' empty');
});
