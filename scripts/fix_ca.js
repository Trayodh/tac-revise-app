const fs = require('fs');
let text = fs.readFileSync('inject_ai_notes.js', 'utf8');
text = text.replace("'Current_Affairs': 'current_affairs'", "'Current_Affairs': 'current-affairs'");
fs.writeFileSync('inject_ai_notes.js', text, 'utf8');
console.log('Fixed current-affairs mapping');
