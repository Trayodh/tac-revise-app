const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const vm = require('vm');
const context = {};
vm.createContext(context);
vm.runInContext(s, context);

const exams = context.CBT_EXAMS_DATABASE;

// Track globally across ALL exams — a question should never repeat anywhere
const seen = new Set();
let totalRemoved = 0;
const summary = [];

for (const exam of exams) {
  const before = exam.questions.length;
  exam.questions = exam.questions.filter(q => {
    const key = q.question.substring(0, 100).trim();
    if (seen.has(key)) {
      return false; // duplicate, remove
    }
    seen.add(key);
    return true; // unique, keep
  });
  const removed = before - exam.questions.length;
  totalRemoved += removed;
  summary.push(`${exam.id}: ${before} → ${exam.questions.length} (removed ${removed})`);
}

console.log(`Total duplicates removed: ${totalRemoved}\n`);
for (const line of summary) {
  console.log(line);
}

// Rebuild data.js
let original = fs.readFileSync('data.js', 'utf8');

const startMarker = 'const CBT_EXAMS_DATABASE =';
const startIdx = original.indexOf(startMarker);

let depth = 0;
let endIdx = -1;
let inString = false;
let escapeNext = false;

for (let i = startIdx + startMarker.length; i < original.length; i++) {
  const ch = original[i];
  if (escapeNext) { escapeNext = false; continue; }
  if (ch === '\\' && inString) { escapeNext = true; continue; }
  if (ch === '"') { inString = !inString; continue; }
  if (inString) continue;
  if (ch === '[') depth++;
  if (ch === ']') {
    depth--;
    if (depth === 0) {
      let j = i + 1;
      while (j < original.length && (original[j] === ' ' || original[j] === '\r' || original[j] === '\n')) j++;
      if (original[j] === ';') j++;
      endIdx = j;
      break;
    }
  }
}

const before = original.substring(0, startIdx);
const after = original.substring(endIdx);
const newDbContent = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(exams, null, 2) + ';';
fs.writeFileSync('data.js', before + newDbContent + after, 'utf8');

console.log('\n✅ data.js updated successfully');
