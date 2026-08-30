const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
const match = content.match(/const NOTES_DATABASE = (\{[\s\S]*?\});\s*$/m) || content.match(/const NOTES_DATABASE = (\{[\s\S]*?\});/m);

const db = JSON.parse(match[1]);
let c = 0;
for (const [subjId, subjData] of Object.entries(db)) {
  if (subjData.chapters) {
    for (const chapter of subjData.chapters) {
      if (chapter.topics) {
        for (const topic of chapter.topics) {
          if (topic.notes && c < 5) {
            console.log(topic.notes.substring(0, 300));
            console.log("----");
            c++;
          }
        }
      }
    }
  }
}
