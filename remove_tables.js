const fs = require('fs');
let c = fs.readFileSync('notes_data_exam_focused.js', 'utf8');
let idx = c.indexOf('"id": "science-comparisons"');
if (idx !== -1) {
    let startIdx = c.lastIndexOf('{', idx);
    let braceCount = 0;
    let endIdx = -1;
    for (let i = startIdx; i < c.length; i++) {
        if (c[i] === '{') braceCount++;
        else if (c[i] === '}') {
            braceCount--;
            if (braceCount === 0) {
                endIdx = i;
                break;
            }
        }
    }
    let before = c.substring(0, startIdx);
    let after = c.substring(endIdx + 1);
    
    if (before.trim().endsWith(',')) {
        before = before.substring(0, before.lastIndexOf(','));
    } else if (after.trim().startsWith(',')) {
        after = after.substring(after.indexOf(',') + 1);
    }
    
    fs.writeFileSync('notes_data_exam_focused.js', before + after);
    console.log('Removed science-comparisons');
} else {
    console.log('science-comparisons not found');
}
