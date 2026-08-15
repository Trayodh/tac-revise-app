const fs = require('fs');

let code = fs.readFileSync('notes_data_upgraded.js', 'utf8');
code += '\n\nmodule.exports = { NOTES_DATABASE };\n';

fs.writeFileSync('scratch/notes_data_temp.js', code);

const { NOTES_DATABASE } = require('./notes_data_temp.js');

const db = NOTES_DATABASE;

if (!db) {
    console.error("Could not find NOTES_DATABASE");
    process.exit(1);
}

const chaptersIndex = {};

for (const [subjectKey, subjectData] of Object.entries(db)) {
    if (subjectData && subjectData.chapters) {
        chaptersIndex[subjectKey] = [];
        subjectData.chapters.forEach(chapter => {
            const topics = chapter.topics ? chapter.topics.map(t => typeof t === 'string' ? t : t.title).join(", ") : "";
            chaptersIndex[subjectKey].push({
                id: chapter.id,
                title: chapter.title,
                key_topics: topics.substring(0, 200)
            });
        });
    }
}

fs.writeFileSync('scratch/chapters_index.json', JSON.stringify(chaptersIndex, null, 2));
console.log("Extracted Chapters Index to scratch/chapters_index.json");
