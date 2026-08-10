const fs = require('fs');
const code = fs.readFileSync('current_affairs_db.js', 'utf8');
const match = code.match(/"([A-Za-z]+ 2026)":/g);
console.log(match);
