const fs = require('fs');
let db = fs.readFileSync('current_affairs_db.js', 'utf8');
let aug = fs.readFileSync('temp_august_ca.json', 'utf16le');
db = db.replace(/\n};\s*$/, ',\n  "August 2026": ' + aug + '\n};');
fs.writeFileSync('current_affairs_db.js', db);
console.log('August injected');
