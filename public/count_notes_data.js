
const fs = require('fs');

let content = fs.readFileSync('notes_data_upgraded.js', 'utf8');

// evaluate the file to get NOTES_DATABASE
eval(content);

let total = 0;
let short = 0;

for (let subjectKey in NOTES_DATABASE) {
    let subject = NOTES_DATABASE[subjectKey];
    for (let chapter of subject.chapters) {
        if (!chapter.topics) continue;
        for (let topic of chapter.topics) {
            total++;
            let notes = topic.notes || '';
            let textOnly = notes.replace(/<[^>]+>/g, ' ');
            let words = textOnly.trim().split(/\s+/).length;
            if (words < 800) {
                short++;
                if (short < 5) console.log('Short:', topic.id, '(', words, 'words )');
            }
        }
    }
}
console.log('Total topics in NOTES_DATABASE:', total);
console.log('Short topics (<800 words):', short);

