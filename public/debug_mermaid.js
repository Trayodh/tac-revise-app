const fs = require('fs');
const content = fs.readFileSync('ai_generated_notes.js', 'utf8');

function extractBlocks(marker) {
    let idx = content.indexOf(marker);
    while (idx !== -1) {
        let end = content.indexOf('```', idx + 50);
        if (end !== -1) end += 3;
        console.log('--- BLOCK at ' + idx + ' ---');
        console.log(content.substring(idx, end));
        idx = content.indexOf(marker, idx + 1);
    }
}

extractBlocks('Mitosis vs Meiosis');
extractBlocks('DNA Structure');
