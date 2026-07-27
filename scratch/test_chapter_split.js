const fs = require('fs');
const path = require('path');

const d = 'pathfinder_ocr_results/General_English';
const chunks = fs.readdirSync(d).sort();
const rawText = chunks.map(c => fs.readFileSync(path.join(d,c), 'utf8')).join('\n');

const normalize = (t) => t.toLowerCase().replace(/[^a-z0-9]/g, '');
const normalizedText = normalize(rawText);

const chapters = [
  "Spotting the Errors",
  "Vocabulary",
  "Synonyms",
  "Antonyms",
  "Idioms and Phrases",
  "Sentence Completion",
  "Sentence Improvement",
  "Ordering of Words and Sentences",
  "Comprehension"
];

let currentIndex = 0;
for (const chap of chapters) {
  const normChap = normalize(chap);
  const foundIdx = normalizedText.indexOf(normChap, currentIndex);
  if (foundIdx !== -1) {
    console.log(`Found ${chap} at index ${foundIdx}`);
    currentIndex = foundIdx + normChap.length;
  } else {
    console.log(`MISSING ${chap}`);
  }
}
