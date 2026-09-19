const fs = require('fs');
let content = fs.readFileSync('ai_generated_notes.js', 'utf8');
const match = content.match(/const AI_GENERATED_NOTES = (\[[\s\S]*\]);/);
if (match) {
    let arr = eval(match[1]);
    arr = arr.filter(n => n.subject !== 'History');
    const newContent = content.substring(0, match.index) + 'const AI_GENERATED_NOTES = ' + JSON.stringify(arr, null, 2) + ';' + content.substring(match.index + match[0].length);
    fs.writeFileSync('ai_generated_notes.js', newContent);
    console.log('Successfully cleaned ai_generated_notes.js');
} else {
    console.log('Failed to parse ai_generated_notes.js');
}
