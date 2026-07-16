const fs = require('fs');
let content = fs.readFileSync('notes_extra_history.js', 'utf8');

let allMatches = [...content.matchAll(/EXPANDED_NOTES_DATA\["([^"]+)"\]\s*=\s*`([\s\S]*?)`;/g)];
console.log(`Found ${allMatches.length} chapters via regex.`);
