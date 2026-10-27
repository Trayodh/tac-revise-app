const { NOTES_DATABASE } = require('./notes_data.js');

const shortOrMissing = [];

for (const [subKey, sub] of Object.entries(NOTES_DATABASE)) {
    for (const ch of sub.chapters || []) {
        const t = (ch.topics || [])[0];
        const len = (t && t.notes) ? t.notes.trim().length : 0;
        if (len < 200) {
            shortOrMissing.push({
                subject: subKey,
                id: ch.id,
                title: ch.title,
                len: len
            });
        }
    }
}

console.log(`Chapters with <200 chars in notes_data.js: ${shortOrMissing.length}`);
shortOrMissing.forEach(c => console.log(`  [${c.subject}] ${c.title} (${c.id}): ${c.len} chars`));
