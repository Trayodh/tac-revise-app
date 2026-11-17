const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');
const script = content.replace(/const NOTES_DATABASE/g, 'var NOTES_DATABASE');
eval(script);

let errorFound = false;
for (const subjectId in NOTES_DATABASE) {
  const subject = NOTES_DATABASE[subjectId];
  if (!subject.chapters) {
    console.log(`Subject ${subjectId} has no chapters array.`);
    errorFound = true;
    continue;
  }
  subject.chapters.forEach((chapter, index) => {
    if (!chapter.topics) {
      console.log(`Subject ${subjectId}, Chapter ${index} (${chapter.title || chapter.id}) has no topics array.`);
      errorFound = true;
    } else {
      chapter.topics.forEach((topic, tIndex) => {
        if (topic.title === undefined) {
          console.log(`Subject ${subjectId}, Chapter ${index}, Topic ${tIndex} (${topic.id}) has no title.`);
          errorFound = true;
        }
      });
    }
  });
}

if (!errorFound) {
  console.log('No missing chapters, topics or titles found!');
}
