const fs = require('fs');
const lines = fs.readFileSync('app.js', 'utf8').split('\n');

let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('// --- Geography Map Modal Interaction ---')) {
        if (startIndex === -1) {
            startIndex = i;
        } else if (endIndex === -1) {
            endIndex = i;
            break;
        }
    }
}

if (startIndex !== -1 && endIndex !== -1) {
    console.log(`Found bad block from line ${startIndex + 1} to ${endIndex}`);
    // Check if the bad block contains the corrupted array
    let hasCorruption = false;
    for (let i = startIndex; i < endIndex; i++) {
        if (lines[i].includes('"images/arithmetic_percentages.png"')) {
            hasCorruption = true;
            break;
        }
    }
    
    if (hasCorruption) {
        lines.splice(startIndex, endIndex - startIndex);
        fs.writeFileSync('app.js', lines.join('\n'), 'utf8');
        console.log('Fixed app.js successfully!');
    } else {
        console.log('Corruption not found in the block, aborting.');
    }
} else {
    console.log('Could not find both markers.');
}
