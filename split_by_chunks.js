const fs = require('fs');
const path = require('path');

const CHAPTERS_BY_CHUNK = {
  "General_English": [
    { name: "Spotting the Errors", startChunk: 0 },
    { name: "Vocabulary", startChunk: 10 },
    { name: "Synonyms", startChunk: 13 },
    { name: "Antonyms", startChunk: 15 },
    { name: "Idioms and Phrases", startChunk: 18 },
    { name: "Sentence Completion", startChunk: 19 },
    { name: "Sentence Improvement", startChunk: 23 },
    { name: "Ordering of Words and Sentences", startChunk: 26 },
    { name: "Comprehension", startChunk: 31 }
  ],
  "General_Science": [
    { name: "Physics", startChunk: 0 },
    { name: "Chemistry", startChunk: 11 },
    { name: "Biology", startChunk: 25 }
  ],
  "General_Studies": [
    { name: "History", startChunk: 0 },
    { name: "Geography", startChunk: 14 },
    { name: "Indian Polity", startChunk: 29 },
    { name: "Indian Economy", startChunk: 41 },
    { name: "General Knowledge", startChunk: 50 }
  ]
};

const INPUT_DIR = 'pathfinder_ocr_results';
const OUTPUT_DIR = 'pathfinder_chapters_clean';

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const subject of Object.keys(CHAPTERS_BY_CHUNK)) {
  const subjectDir = path.join(INPUT_DIR, subject);
  if (!fs.existsSync(subjectDir)) {
    console.log(`Skipping ${subject}, no extracted text found.`);
    continue;
  }

  const allChunks = fs.readdirSync(subjectDir).filter(f => f.endsWith('.txt')).sort();
  if (allChunks.length === 0) continue;

  console.log(`\nProcessing ${subject}...`);
  const subjectOutDir = path.join(OUTPUT_DIR, subject);
  if (!fs.existsSync(subjectOutDir)) fs.mkdirSync(subjectOutDir, { recursive: true });

  const chapters = CHAPTERS_BY_CHUNK[subject];

  for (let i = 0; i < chapters.length; i++) {
    const chap = chapters[i];
    const startIdx = chap.startChunk;
    let endIdx = allChunks.length;
    
    if (i < chapters.length - 1) {
      endIdx = chapters[i+1].startChunk;
    }

    // Edge case if startIdx > available chunks (e.g. if OCR was interrupted)
    if (startIdx >= allChunks.length) {
       console.log(`  [SKIP] ${chap.name} (OCR chunks not available)`);
       continue;
    }

    // We slice from startIdx to endIdx (exclusive)
    const chapterChunks = allChunks.slice(startIdx, Math.min(endIdx, allChunks.length));
    
    const chapterText = chapterChunks.map(c => {
      const fileStr = fs.readFileSync(path.join(subjectDir, c), 'utf8');
      return `--- Start of ${c} ---\n${fileStr}\n`;
    }).join('\n');

    const fileName = `${String(i+1).padStart(2, '0')}_${chap.name.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    const filePath = path.join(subjectOutDir, fileName);
    
    fs.writeFileSync(filePath, chapterText);
    console.log(`  -> Saved ${fileName} (Chunks ${startIdx} to ${endIdx-1}, ${chapterText.length} chars)`);
  }
}

console.log("\nChapter extraction by chunks complete!");
