const { NOTES_DATABASE } = require('./notes_data.js');

const subjects = Object.keys(NOTES_DATABASE);
console.log('Total subjects:', subjects.length);

const syllabus = {};
let totalChapters = 0;
let totalTopics = 0;

for (const subKey of subjects) {
    const sub = NOTES_DATABASE[subKey];
    syllabus[subKey] = {
        title: sub.title || subKey,
        chapters: []
    };
    for (const ch of sub.chapters || []) {
        totalChapters++;
        const topicsList = (ch.topics || []).map(t => ({
            id: t.id,
            title: t.title,
            notesLength: (t.notes || '').length
        }));
        totalTopics += topicsList.length;
        syllabus[subKey].chapters.push({
            id: ch.id,
            title: ch.title,
            topics: topicsList
        });
    }
}

console.log(`Total Chapters: ${totalChapters}, Total Topics: ${totalTopics}`);

const fs = require('fs');
fs.writeFileSync('canonical_syllabus.json', JSON.stringify(syllabus, null, 2));
console.log('Saved canonical_syllabus.json successfully.');
