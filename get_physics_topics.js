const fs = require('fs');

global.window = {};
const content = fs.readFileSync('notes_extra_physics_rich.js', 'utf8');
eval(content);

const topics = global.window.NOTES_EXTRA_PHYSICS;
let mapping = [];

topics.forEach(chapter => {
    if (chapter.visual_topics) {
        chapter.visual_topics.forEach(vt => {
            mapping.push({
                id: vt.id,
                title: vt.title || vt.name,
                chapter: chapter.title
            });
        });
    }
});

console.log(JSON.stringify(mapping, null, 2));
