const fs = require('fs');
let content = fs.readFileSync('data.js', 'utf8');
content = content.replace('module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE, CURRENT_AFFAIRS_DB };', "if (typeof module !== 'undefined') module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE, CURRENT_AFFAIRS_DB };");
fs.writeFileSync('data.js', content, 'utf8');
console.log('Fixed data.js exports');
