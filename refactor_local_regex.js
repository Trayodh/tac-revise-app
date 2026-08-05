const fs = require('fs');
const path = require('path');

const filesToProcess = [
  "Pathfinder_Elite/modules/Current_Affairs/General_Knowledge_Static_Review.md",
  "Pathfinder_Elite/modules/History/Ancient_India_Core_and_MCQs.md",
  "Pathfinder_Elite/modules/Physics/Measurement_Motion_Work_Energy_and_Power.md",
  "Pathfinder_Elite/modules/Biology/Cell_The_Unit_of_Life.md",
  "Pathfinder_Elite/modules/Chemistry/Matter.md"
];

let allMCQs = [];

// Clean option text
function cleanText(text) {
  return text.trim().replace(/^[\n\r]+|[\n\r]+$/g, '').trim();
}

filesToProcess.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let text = fs.readFileSync(filePath, 'utf8');
  let topic = path.basename(filePath, '.md');
  
  // 1. Extract MCQs
  const mcqRegex = /(\d+)\.\s+(.*?)\s*\(\s*a\s*\)\s*(.*?)\s*\(\s*b\s*\)\s*(.*?)\s*\(\s*c\s*\)\s*(.*?)\s*\(\s*d\s*\)\s*(.*?)(?=\d+\.\s+|$)/gs;
  const matches = [...text.matchAll(mcqRegex)];
  
  matches.forEach(match => {
    let question = cleanText(match[2]);
    let optA = cleanText(match[3]);
    let optB = cleanText(match[4]);
    let optC = cleanText(match[5]);
    let optD = cleanText(match[6]);
    
    // Attempt to extract the correct answer if it's placed at the end of option D
    let answer = "N/A";
    let explanation = "";
    
    // Sometime the correct option letter is at the very end of optD (e.g. "... Prayaga A.")
    const ansMatch = optD.match(/\s+([A-D])\s*\.?$/);
    if (ansMatch) {
        let letter = ansMatch[1].toLowerCase();
        if (letter === 'a') answer = optA;
        if (letter === 'b') answer = optB;
        if (letter === 'c') answer = optC;
        if (letter === 'd') answer = optD.replace(/\s+([A-D])\s*\.?$/, '').trim();
        optD = optD.replace(/\s+([A-D])\s*\.?$/, '').trim();
    }
    
    allMCQs.push({
      topic,
      question,
      options: [optA, optB, optC, optD],
      answer,
      explanation
    });
  });
  
  // Remove MCQs from text
  text = text.replace(mcqRegex, '');
  
  // 2. Fix Mermaid Diagrams
  // Look for mermaid blocks and replace `Node(Text)` with `Node["Text"]`
  text = text.replace(//g, (match, inner) => {
    // Replace parentheses in nodes with square brackets and quotes
    let fixedInner = inner.replace(/\b([A-Za-z0-9_]+)\(([^)]+)\)/g, '$1["$2"]');
    return '';
  });
  
  fs.writeFileSync(filePath, text);
  console.log(`Processed ${topic} -> Extracted ${matches.length} MCQs.`);
});

const mcqFilePath = 'Pathfinder_Elite/extracted_raw_mcqs.json';
if (fs.existsSync(mcqFilePath)) {
    let existing = JSON.parse(fs.readFileSync(mcqFilePath, 'utf8'));
    allMCQs = existing.concat(allMCQs);
}
fs.writeFileSync(mcqFilePath, JSON.stringify(allMCQs, null, 2));
console.log(`Total MCQs saved: ${allMCQs.length}`);
