const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');
const match = content.match(/const NOTES_DATABASE = (\{[\s\S]*?\});\s*$/m) || content.match(/const NOTES_DATABASE = (\{[\s\S]*?\});/m);

if (!match) {
  console.log("Could not find NOTES_DATABASE in data.js");
  process.exit(1);
}

const db = JSON.parse(match[1]);
let totalTopics = 0;
let totalListItems = 0;
let shortListItems = 0;

for (const [subjId, subjData] of Object.entries(db)) {
  if (subjData.chapters) {
    for (const chapter of subjData.chapters) {
      if (chapter.topics) {
        for (const topic of chapter.topics) {
          if (topic.notes) {
            totalTopics++;
            const regex = /<li>(?:<strong>|\*\*)(.*?)(?:<\/strong>|\*\*)(.*?)<\/li>/g;
            let m;
            while ((m = regex.exec(topic.notes)) !== null) {
              totalListItems++;
              if (m[2].length < 300) {
                shortListItems++;
              }
            }
          }
        }
      }
    }
  }
}

console.log(`Total Topics with notes: ${totalTopics}`);
console.log(`Total List Items: ${totalListItems}`);
console.log(`Short List Items (<300 chars): ${shortListItems}`);
