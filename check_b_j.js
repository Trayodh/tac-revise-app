const fs = require('fs');
const c = fs.readFileSync('www/notes_extra_history.js', 'utf8');
const s = c.indexOf('EXPANDED_NOTES_DATA["buddhism-jainism"]');
const e = c.indexOf(';', s + 100);
console.log(c.slice(s, e + 1));
