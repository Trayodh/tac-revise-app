const fs = require('fs');
fs.appendFileSync('data.js', '\nif (typeof module !== "undefined") { module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE }; }\n');
console.log('Appended module.exports.');
