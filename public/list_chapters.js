const d = require('./data.js');
const subjects = Object.keys(d.NOTES_DATABASE);
let totalTopics = 0, totalChapters = 0;
subjects.forEach(s => {
  const sub = d.NOTES_DATABASE[s];
  const chapters = sub.chapters;
  totalChapters += chapters.length;
  chapters.forEach(c => {
    totalTopics += c.topics.length;
    console.log(`  [${s}] ${c.title} (${c.topics.length} topics)`);
  });
});
console.log(`\nTotal: ${subjects.length} subjects, ${totalChapters} chapters, ${totalTopics} topics`);
