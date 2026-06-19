const fs = require('fs');
const cacheFile = 'scratch/generated_questions.json';

if (fs.existsSync(cacheFile)) {
  const cache = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  console.log(`Cache has ${Object.keys(cache).length} exams:`);
  for (const [key, qList] of Object.entries(cache)) {
    console.log(`  - ${key}: ${qList.length} questions`);
  }
} else {
  console.log("Cache file does not exist yet.");
}
