/**
 * Notes Content Quality Auditor
 * Reads notes_data_exam_focused.js and outputs per-subject quality breakdown
 */
const fs = require('fs');

// Load the file — it has NOTES_DATABASE starting at line 3707
// We need to eval all of it to pick up the const
const src = fs.readFileSync('notes_data_exam_focused.js', 'utf8');
// Wrap with global assignment
const wrapped = src.replace('const NOTES_DATABASE', 'global.NOTES_DATABASE');
eval(wrapped);

const db = global.NOTES_DATABASE;
if (!db) { console.error('NOTES_DATABASE not found'); process.exit(1); }

const results = [];
const weakTopics = []; // topics with < 500 chars

for (const subId in db) {
  const sub = db[subId];
  let total=0, empty=0, stub=0, medium=0, rich=0, totalChars=0;
  sub.chapters.forEach(ch => {
    ch.topics.forEach(t => {
      total++;
      const len = (t.notes || '').replace(/<[^>]+>/g,'').length; // strip HTML
      totalChars += len;
      if (len === 0) { empty++; weakTopics.push({sub: sub.title, ch: ch.title, topic: t.title, len}); }
      else if (len < 300) { stub++; weakTopics.push({sub: sub.title, ch: ch.title, topic: t.title, len}); }
      else if (len < 2000) medium++;
      else rich++;
    });
  });
  const avgLen = total > 0 ? Math.round(totalChars / total) : 0;
  results.push({ subject: sub.title, total, empty, stub, medium, rich, avgLen });
}

console.log('\n=== NOTES CONTENT QUALITY REPORT ===\n');
console.log('Subject'.padEnd(35), 'Topics', 'Empty', 'Stub(<300)', 'Medium', 'Rich(>2k)', 'Avg Chars');
console.log('-'.repeat(100));
results.forEach(r => {
  const line = [
    r.subject.padEnd(35),
    String(r.total).padStart(6),
    String(r.empty).padStart(6),
    String(r.stub).padStart(10),
    String(r.medium).padStart(7),
    String(r.rich).padStart(9),
    String(r.avgLen).padStart(10),
  ].join(' ');
  console.log(line);
});

const grand = results.reduce((a,b) => ({
  total: a.total+b.total, empty: a.empty+b.empty, stub: a.stub+b.stub,
  medium: a.medium+b.medium, rich: a.rich+b.rich, avgLen: 0
}), {total:0,empty:0,stub:0,medium:0,rich:0,avgLen:0});
console.log('-'.repeat(100));
console.log(`TOTAL: ${grand.total} topics | ${grand.empty} empty | ${grand.stub} stubs | ${grand.medium} medium | ${grand.rich} rich`);
console.log(`\nTopics needing expansion (${weakTopics.length} total, showing first 30):`);
weakTopics.slice(0,30).forEach(t => {
  console.log(`  [${t.len === 0 ? 'EMPTY' : 'STUB '}] ${t.sub} > ${t.ch} > ${t.topic} (${t.len} chars)`);
});
