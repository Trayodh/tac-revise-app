const fs = require('fs');

const caDbPath = './ca_db_extracted.json';
const caDb = JSON.parse(fs.readFileSync(caDbPath, 'utf8'));

// Load data.js
const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE, CURRENT_AFFAIRS_DB };';
const m = new module.constructor();
m._compile(code, 'data.js');
const db    = m.exports.CBT_EXAMS_DATABASE;
const notes = m.exports.NOTES_DATABASE;
const currentAffairs = m.exports.CURRENT_AFFAIRS_DB || {};

let injected = 0;

['April 2026', 'May 2026'].forEach(month => {
    if (caDb[month]) {
        if (!currentAffairs[month]) currentAffairs[month] = [];
        
        caDb[month].forEach(item => {
            // Need to map to the format expected by the UI.
            // The UI expects: { date, summary, details, type, tags }
            // Let's see what exists in `caDb`.
            // caDb has `topic`, `text`, `details`, `mcq`.
            // We'll format it like the other ones in data.js.
            const existing = currentAffairs[month].find(i => i.summary === item.text);
            if (!existing) {
                currentAffairs[month].push({
                    date: month,
                    summary: item.text,
                    details: item.mcq ? item.mcq.explanation : item.text,
                    type: item.topic,
                    tags: ['Defence', 'Current Affairs']
                });
                injected++;
            }
        });
    }
});

const outString = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(currentAffairs, null, 2)};
  
const CBT_EXAMS_DATABASE = ${JSON.stringify(db, null, 2)};
  
const NOTES_DATABASE = ${JSON.stringify(notes, null, 2)};
  
if (typeof window !== 'undefined') {
    window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;
    window.NOTES_DATABASE = NOTES_DATABASE;
    window.CURRENT_AFFAIRS_DB = CURRENT_AFFAIRS_DB;
}
  
if (typeof module !== 'undefined') {
    module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE, CURRENT_AFFAIRS_DB };
}`;

fs.writeFileSync('data.js', outString, 'utf8');
console.log(`Successfully injected ${injected} into data.js CURRENT_AFFAIRS_DB`);
