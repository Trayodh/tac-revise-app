const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const vm = require('vm');
const context = {};
vm.createContext(context);
vm.runInContext(s, context);

const exams = context.CBT_EXAMS_DATABASE;

// Define the questions to remove by exam ID and unique question text snippets
const removals = {
  'cds-gk-v2-1': [
    'An amount is invested in a bank at compound rate of interest',
  ],
  'cds-gk-v2-2': [
    'A man who recently died left a sum of',
    'By selling an article for ` 110, a man loss',
    'A conical cap has the base diameter 24 cm',
    'A sum compounded annually becomes 25 16 times',
  ],
  'cds-gk-v2-4': [
    'A person A sells a table costing',
    'A man who recently died left a sum of',
    'If an article is sold at a gain of 6% instead of a loss of 6%',
    'A sum compounded annually becomes 25 16 times',
  ],
  'cds-gk-v2-7': [
    'A person A sells a table costing',
    'A man who recently died left a sum of',
    'By selling an article for ` 247.50, Sonu get',
  ],
  'cds-gk-v2-8': [
    'A man who recently died left a sum of',
  ],
  'cds-gk-v2-9': [
    'A person bought two articles X and Y from a departmental store',
  ],
};

let totalRemoved = 0;
const removalLog = [];

for (const exam of exams) {
  if (!removals[exam.id]) continue;

  const snippets = removals[exam.id];
  const originalCount = exam.questions.length;

  exam.questions = exam.questions.filter(q => {
    for (const snippet of snippets) {
      if (q.question.includes(snippet)) {
        removalLog.push(`  ✓ Removed from ${exam.id}: "${q.question.substring(0, 80)}..."`);
        totalRemoved++;
        return false; // remove
      }
    }
    return true; // keep
  });

  const removed = originalCount - exam.questions.length;
  removalLog.push(`  ${exam.id}: ${originalCount} → ${exam.questions.length} (removed ${removed})`);
}

console.log(`Total questions to remove: ${totalRemoved}`);
console.log(removalLog.join('\n'));

// Now rebuild the data.js file
// Read the original file to preserve any other variables
let original = fs.readFileSync('data.js', 'utf8');

// Find the start and end of CBT_EXAMS_DATABASE
const startMarker = 'const CBT_EXAMS_DATABASE =';
const startIdx = original.indexOf(startMarker);
if (startIdx === -1) {
  console.error('Could not find CBT_EXAMS_DATABASE in data.js');
  process.exit(1);
}

// Find the matching closing bracket and semicolon
// We need to find the end of the array
let depth = 0;
let endIdx = -1;
let inString = false;
let escapeNext = false;

for (let i = startIdx + startMarker.length; i < original.length; i++) {
  const ch = original[i];
  
  if (escapeNext) {
    escapeNext = false;
    continue;
  }
  
  if (ch === '\\') {
    if (inString) escapeNext = true;
    continue;
  }
  
  if (ch === '"' && !escapeNext) {
    inString = !inString;
    continue;
  }
  
  if (inString) continue;
  
  if (ch === '[') depth++;
  if (ch === ']') {
    depth--;
    if (depth === 0) {
      // Find the semicolon after the closing bracket
      let j = i + 1;
      while (j < original.length && (original[j] === ' ' || original[j] === '\r' || original[j] === '\n')) j++;
      if (original[j] === ';') j++;
      endIdx = j;
      break;
    }
  }
}

if (endIdx === -1) {
  console.error('Could not find end of CBT_EXAMS_DATABASE');
  process.exit(1);
}

// Build the new content
const before = original.substring(0, startIdx);
const after = original.substring(endIdx);

const newDbContent = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(exams, null, 2) + ';';

const newFile = before + newDbContent + after;

fs.writeFileSync('data.js', newFile, 'utf8');
console.log('\n✅ Successfully updated data.js');
console.log(`Total questions removed: ${totalRemoved}`);
