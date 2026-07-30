const fs = require('fs');
let c = fs.readFileSync('notes_generated.js', 'utf8');
c = c.replace(/window\.EXPANDED_NOTES_DATA\<[(.*?)\]: \`/g, 'window.EXPANDED_NOTES_DATA[$1] = String.raw\`');
fs.writeFileSync('notes_generated.js', c);