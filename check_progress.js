require('dotenv').config();
const fs = require('fs');
const d = require('./data.js');
const subs = Object.keys(d.NOTES_DATABASE);
subs.forEach(s => {
  const f = 'notes_extra_' + s + '.js';
  let done = 0;
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/EXPANDED_NOTES_DATA\["[^"]+"\]/g);
    done = matches ? matches.length : 0;
  }
  const total = d.NOTES_DATABASE[s].chapters.reduce((a, c) => a + c.topics.length, 0);
  const status = done === total ? '✅ DONE' : `⏳ ${done}/${total}`;
  console.log(`${s.padEnd(20)} ${status}`);
});
