const fs = require('fs');

const content = fs.readFileSync('app.js', 'utf8');

// We just want to find where CBT_EXAMS_DATABASE starts and maybe extract some info
const match = content.match(/const CBT_EXAMS_DATABASE = \[([\s\S]*?)\];\s*function initMockExams\(\)/);

if (match) {
  console.log("Found CBT_EXAMS_DATABASE.");
  // Count 'title:' occurrences in the array
  const titles = match[1].match(/title:\s*"(.*?)"/g);
  console.log("Exams found:");
  if (titles) {
    titles.forEach(t => console.log(" - " + t));
  }
} else {
  console.log("Could not parse CBT_EXAMS_DATABASE");
}
