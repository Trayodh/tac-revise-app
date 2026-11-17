const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');
const script = content.replace(/const NOTES_DATABASE/g, 'var NOTES_DATABASE');
eval(script);

let errorFound = false;
for (const subjectId in NOTES_DATABASE) {
  const subject = NOTES_DATABASE[subjectId];
  if (!subject.chapters) continue;
  subject.chapters.forEach((chapter, index) => {
    if (!chapter.topics) return;
    chapter.topics.forEach((topic, tIndex) => {
      if (typeof topic.title !== 'string') {
        console.log(`Topic ${topic.id} title is not a string:`, typeof topic.title);
        errorFound = true;
      }
      if (topic.notes && typeof topic.notes !== 'string') {
        console.log(`Topic ${topic.id} notes is not a string:`, typeof topic.notes);
        errorFound = true;
      }
      if (topic.formulas && typeof topic.formulas !== 'string') {
        console.log(`Topic ${topic.id} formulas is not a string:`, typeof topic.formulas);
        errorFound = true;
      }
    });
  });
}

if (!errorFound) console.log('All fields are strings.');
