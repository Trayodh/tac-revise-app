const fs = require('fs');
const vm = require('vm');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const ctx = {};
vm.createContext(ctx);
vm.runInContext(s, ctx);
const exams = ctx.CBT_EXAMS_DATABASE;

let totalGarbled = 0;
let totalDupes = 0;
let totalJunk = 0;

// 1. Remove ALL garbled match-the-following across entire database
for (const exam of exams) {
  const before = exam.questions.length;
  exam.questions = exam.questions.filter(q => {
    if (/Codes\s+A\s+B\s+C\s+D\s+A\s+B\s+C\s+D/.test(q.question) && q.question.length < 80) {
      return false;
    }
    return true;
  });
  const removed = before - exam.questions.length;
  if (removed > 0) {
    totalGarbled += removed;
    console.log(`[GARBLED] ${exam.id}: removed ${removed} garbled questions`);
  }
}

// 2. Remove ALL cross-paper duplicates (globally this time)
const seen = new Set();
for (const exam of exams) {
  const before = exam.questions.length;
  exam.questions = exam.questions.filter(q => {
    const key = q.question.substring(0, 100).trim();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const removed = before - exam.questions.length;
  if (removed > 0) {
    totalDupes += removed;
    console.log(`[DEDUP] ${exam.id}: removed ${removed} duplicates`);
  }
}

// 3. Clean remaining junk text in options
for (const exam of exams) {
  for (const q of exam.questions) {
    for (let i = 0; i < q.options.length; i++) {
      const match = q.options[i].match(/^(.+?)\s+\d{3,4}\s+GENERAL\s+(SCIENCE|STUDIES|ENGLISH|KNOWLEDGE)/);
      if (match) {
        totalJunk++;
        q.options[i] = match[1];
      }
    }
  }
}

console.log(`\nTotal garbled removed: ${totalGarbled}`);
console.log(`Total duplicates removed: ${totalDupes}`);
console.log(`Total junk text cleaned: ${totalJunk}`);

// Save
let original = fs.readFileSync('data.js', 'utf8');
const startMarker = 'const CBT_EXAMS_DATABASE =';
const startIdx = original.indexOf(startMarker);
let depth = 0, endIdx = -1, inString = false, escapeNext = false;
for (let i = startIdx + startMarker.length; i < original.length; i++) {
  const ch = original[i];
  if (escapeNext) { escapeNext = false; continue; }
  if (ch === '\\' && inString) { escapeNext = true; continue; }
  if (ch === '"') { inString = !inString; continue; }
  if (inString) continue;
  if (ch === '[') depth++;
  if (ch === ']') { depth--; if (depth === 0) { let j = i + 1; while (j < original.length && ' \r\n'.includes(original[j])) j++; if (original[j] === ';') j++; endIdx = j; break; } }
}
const before = original.substring(0, startIdx);
const after = original.substring(endIdx);
fs.writeFileSync('data.js', before + 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(exams, null, 2) + ';' + after, 'utf8');
console.log('✅ data.js updated');
