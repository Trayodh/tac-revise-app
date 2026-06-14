const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'all_topics_meta.json');
if (fs.existsSync(filePath)) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  console.log("Total topics:", data.length);
  const subjects = {};
  data.forEach(item => {
    if (!subjects[item.subjectId]) {
      subjects[item.subjectId] = [];
    }
    subjects[item.subjectId].push({ id: item.id, title: item.title, chapter: item.chapter });
  });
  for (const sub in subjects) {
    console.log(`Subject: ${sub} (${subjects[sub].length} topics)`);
    subjects[sub].forEach((t, i) => {
      console.log(`  ${i + 1}. ${t.id} - ${t.title} [${t.chapter}]`);
    });
  }
} else {
  console.log("File not found at", filePath);
}
