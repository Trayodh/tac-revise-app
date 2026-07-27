const fs = require('fs');
const path = require('path');

const TOC = {
  "General_English": [
    { name: "Spotting the Errors", page: "387" },
    { name: "Vocabulary", page: "435" },
    { name: "Synonyms", page: "452" },
    { name: "Antonyms", page: "463" },
    { name: "Idioms and Phrases", page: "475" },
    { name: "Sentence Completion", page: "483" },
    { name: "Sentence Improvement", page: "500" },
    { name: "Ordering of Words and Sentences", page: "515" },
    { name: "Comprehension", page: "544" }
  ],
  "General_Science": [
    { name: "Physics", page: "579" },
    { name: "Chemistry", page: "632" },
    { name: "Biology", page: "704" }
  ],
  "General_Studies": [
    { name: "History", page: "783" },
    { name: "Geography", page: "857" },
    { name: "Indian Polity", page: "931" },
    { name: "Indian Economy", page: "991" },
    { name: "General Knowledge", page: "1036" }
  ]
};

const INPUT_DIR = 'pathfinder_ocr_results';
const OUTPUT_DIR = 'pathfinder_chapters';

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function normalize(text) {
  let norm = "";
  let mapping = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      norm += char;
      mapping.push(i);
    }
  }
  return { norm, mapping };
}

for (const subject of Object.keys(TOC)) {
  const subjectDir = path.join(INPUT_DIR, subject);
  if (!fs.existsSync(subjectDir)) {
    console.log(`Skipping ${subject}, no extracted text found.`);
    continue;
  }

  const chunks = fs.readdirSync(subjectDir).filter(f => f.endsWith('.txt')).sort();
  if (chunks.length === 0) continue;

  console.log(`\nProcessing ${subject}...`);
  const rawText = chunks.map(c => fs.readFileSync(path.join(subjectDir, c), 'utf8')).join('\n\n');
  const { norm, mapping } = normalize(rawText);

  const subjectOutDir = path.join(OUTPUT_DIR, subject);
  if (!fs.existsSync(subjectOutDir)) fs.mkdirSync(subjectOutDir, { recursive: true });

  const chapters = TOC[subject];
  const foundChapters = [];

  for (let i = 0; i < chapters.length; i++) {
    const chap = chapters[i];
    const normChap = chap.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // First, try to find the page number to anchor the search
    let searchStartIdx = 0;
    const pageIdx = rawText.indexOf(chap.page);
    
    if (pageIdx !== -1) {
       // Convert raw index of page to normalized index
       // We can just estimate or find the exact mapped index
       const normPageIdx = norm.indexOf(chap.page);
       if (normPageIdx !== -1) {
         searchStartIdx = Math.max(0, normPageIdx - 500); // look around the page number
       }
    }

    let foundIdx = norm.indexOf(normChap, searchStartIdx);
    
    if (foundIdx !== -1) {
      foundChapters.push({
        name: chap.name,
        rawIndex: mapping[foundIdx],
        normIndex: foundIdx
      });
    } else {
      console.log(`  [WARNING] Could not find chapter: ${chap.name}`);
    }
  }

  foundChapters.sort((a, b) => a.rawIndex - b.rawIndex);

  for (let i = 0; i < foundChapters.length; i++) {
    const chap = foundChapters[i];
    const startIndex = chap.rawIndex;
    let endIndex = rawText.length;
    
    if (i < foundChapters.length - 1) {
      endIndex = foundChapters[i+1].rawIndex;
    }
    
    const chapterText = rawText.substring(startIndex, endIndex).trim();
    const fileName = `${String(i+1).padStart(2, '0')}_${chap.name.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    const filePath = path.join(subjectOutDir, fileName);
    
    fs.writeFileSync(filePath, chapterText);
    console.log(`  -> Saved ${fileName} (${chapterText.length} chars)`);
  }
}

console.log("\nChapter extraction complete!");
