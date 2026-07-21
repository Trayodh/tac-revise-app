const fs = require('fs');
const content = fs.readFileSync('www/notes_extra_history.js', 'utf8');
const regex = /EXPANDED_NOTES_DATA\["([^"]+)"\]/g;
let match;
while ((match = regex.exec(content)) !== null) {
    console.log(match[1]);
}
