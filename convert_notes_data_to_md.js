const fs = require('fs');
const TurndownService = require('turndown');

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});
turndownService.keep(['table']);

let txt = fs.readFileSync('notes_data.js', 'utf8');
txt = txt.replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =').replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');
eval(txt);

const db = global.NOTES_DATABASE;

for (const subjectId in db) {
    if (subjectId === 'history') continue; // History is handled via notes_extra_history.js and consolidate_notes.js
    
    const subject = db[subjectId];
    if (subject.chapters) {
        subject.chapters.forEach(ch => {
            if (ch.topics) {
                ch.topics.forEach(t => {
                    if (t.notes && t.notes.includes('<h2') || (t.notes && t.notes.includes('<div class="revision-card"'))) {
                        let md = turndownService.turndown(t.notes);
                        t.notes = md;
                    }
                });
            }
        });
    }
}

let outText = '';
if (typeof global.CURRENT_AFFAIRS_DB !== 'undefined') outText += 'let CURRENT_AFFAIRS_DB = ' + JSON.stringify(global.CURRENT_AFFAIRS_DB, null, 2) + ';\n\n';
if (typeof global.NOTES_DATABASE !== 'undefined') outText += 'const NOTES_DATABASE = ' + JSON.stringify(global.NOTES_DATABASE, null, 2) + ';\n';
fs.writeFileSync('notes_data.js', outText, 'utf8');
console.log('Converted other subjects in notes_data.js to Markdown!');
