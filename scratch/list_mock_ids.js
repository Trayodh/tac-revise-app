const fs = require('fs');
const c = fs.readFileSync('data.js','utf8');
const cbtStart = c.indexOf('CBT_EXAMS_DATABASE');
const matches = [...c.matchAll(/"id":\s*"([^"]+)"/g)];
const ids = matches
  .filter(m => m.index > cbtStart)
  .map(m => m[1])
  .filter(id => id.includes('mock') || id.includes('nda') || id.includes('cds') || id.includes('afcat'));
console.log('Total exam entries in CBT_EXAMS_DATABASE:', ids.length);
console.log(JSON.stringify(ids, null, 2));
