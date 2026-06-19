const fs = require('fs');
const path = require('path');

const papers = [
  require('./new_nda_math_mock_11.js'),
  require('./new_nda_english_mock_11.js'),
  require('./new_nda_gs_mock_11.js'),
  require('./new_cds_math_mock_11.js'),
  require('./new_cds_english_mock_11.js'),
  require('./new_cds_gs_mock_11.js'),
  require('./new_afcat_combined_mock_13.js')
];

console.log(`Loaded ${papers.length} authority papers to inject.`);

const dataFilePath = path.join(__dirname, '../data.js');
let dataContent = fs.readFileSync(dataFilePath, 'utf8');

const dbStartToken = "const CBT_EXAMS_DATABASE = [";
const startIdx = dataContent.indexOf(dbStartToken);

if (startIdx === -1) {
  console.error("Could not find CBT_EXAMS_DATABASE in data.js");
  process.exit(1);
}

let arrayStart = dataContent.indexOf("[", startIdx);
let bracketCount = 1;
let idx = arrayStart + 1;

while (bracketCount > 0 && idx < dataContent.length) {
  if (dataContent[idx] === '[') bracketCount++;
  else if (dataContent[idx] === ']') bracketCount--;
  idx++;
}

// Ensure we have found the end of the array.
// We will insert right before the closing bracket of CBT_EXAMS_DATABASE.
// The array usually ends with `]`
const insertionPoint = idx - 1;

const injectionString = ",\n" + papers.map(p => JSON.stringify(p, null, 2)).join(",\n");

const newDataContent = dataContent.slice(0, insertionPoint) + injectionString + "\n" + dataContent.slice(insertionPoint);

fs.writeFileSync(dataFilePath, newDataContent, 'utf8');

console.log("Successfully injected all Authority Papers into CBT_EXAMS_DATABASE in data.js.");
