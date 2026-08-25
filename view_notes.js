const fs = require('fs');
const data = fs.readFileSync('ai_generated_notes.js', 'utf8');
const lines = data.split('\n');
let insideNotes = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"Classification of Plants and Animals"')) {
        console.log("Found at line", i);
        // print next 20 lines
        for(let j=0; j<20; j++) {
            console.log(lines[i+j]);
        }
        break;
    }
}
