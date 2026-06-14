const fs = require('fs');
const path = require('path');

// Read syllabus_data.js
const syllabusFile = path.join(process.cwd(), 'syllabus_data.js');
const content = fs.readFileSync(syllabusFile, 'utf8');

// A simple regex match to find the syllabus data object
const matches = content.match(/window\.OFFICIAL_SYLLABUS_DATA\s*=\s*({[\s\S]*?});/);
if (matches) {
  try {
    // Make it parseable JSON
    let jsonStr = matches[1].replace(/(\r\n|\n|\r)/gm, "");
    // Just evaluate it in VM or use simple regexes on each line
    const lines = matches[1].split('\n');
    lines.forEach(line => {
      const parts = line.match(/"([^"]+)"\s*:\s*"([^"]+)"/);
      if (parts) {
        const id = parts[1];
        const desc = parts[2];
        const examMatch = desc.match(/Exams:\s*([^.]+)/i);
        if (examMatch) {
          console.log(`${id}: ${examMatch[1].trim()}`);
        } else {
          console.log(`${id}: No exam match`);
        }
      }
    });
  } catch (e) {
    console.error(e);
  }
} else {
  console.log("No match found for OFFICIAL_SYLLABUS_DATA");
}
