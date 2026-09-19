const fs = require('fs');

let notesDataTxt = fs.readFileSync('notes_data.js', 'utf8');
notesDataTxt = notesDataTxt
  .replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =')
  .replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');
eval(notesDataTxt);

const db = global.NOTES_DATABASE;
let mapping = [];

const subjects = ['geography', 'biology', 'physics', 'chemistry', 'polity', 'history', 'mathematics'];

for (const subject of subjects) {
  if (db[subject] && db[subject].chapters) {
    db[subject].chapters.forEach(c => {
      let chapterName = c.name || c.title;
      if (c.topics) {
        c.topics.forEach(t => {
          if (!t.id.includes('pyq-trends')) {
            mapping.push({
              subject: subject,
              chapter: chapterName,
              id: t.id,
              title: t.title || t.name
            });
          }
        });
      }
    });
  }
}

fs.writeFileSync('all_topics_mapping.json', JSON.stringify(mapping, null, 2));
console.log("Topics saved to all_topics_mapping.json. Count:", mapping.length);
