const { NOTES_DATABASE } = require('./notes_data.js');

let totalCh = 0;
let hasNotes = 0;
let totalLength = 0;

for (const [subKey, sub] of Object.entries(NOTES_DATABASE)) {
    for (const ch of sub.chapters || []) {
        totalCh++;
        const t = (ch.topics || [])[0];
        if (t && t.notes && t.notes.trim().length > 50) {
            hasNotes++;
            totalLength += t.notes.length;
        }
    }
}

console.log(`Total chapters: ${totalCh}, with existing notes: ${hasNotes}, average length: ${(totalLength/hasNotes).toFixed(0)} chars`);
