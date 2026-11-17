const fs = require('fs');
let content = fs.readFileSync('data.js', 'utf8');
content = content.replace('"subject": "GAT"', '"subject": "General Ability Test (GAT)"');
fs.writeFileSync('data.js', content);
console.log("Replaced!");
