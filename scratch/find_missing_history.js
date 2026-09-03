/**
 * Step 1: Find history topic IDs in NOTES_DATABASE that have NO entry in EXPANDED_NOTES_DATA
 */
const fs = require('fs');

// Load NOTES_DATABASE
const notesDataSrc = fs.readFileSync('notes_data_exam_focused.js', 'utf8');
eval(notesDataSrc.replace('const NOTES_DATABASE', 'global.NOTES_DATABASE'));
const db = global.NOTES_DATABASE;

// Load EXPANDED_NOTES_DATA (from notes_extra_history.js)
global.EXPANDED_NOTES_DATA = {};
const extraSrc = fs.readFileSync('notes_extra_history.js', 'utf8');
// The file uses bare EXPANDED_NOTES_DATA and also window.EXPANDED_NOTES_DATA
eval(extraSrc.replace(/window\.EXPANDED_NOTES_DATA\s*=/g, 'global.EXPANDED_NOTES_DATA =').replace(/window\.EXPANDED_NOTES_DATA/g, 'global.EXPANDED_NOTES_DATA'));
const expanded = global.EXPANDED_NOTES_DATA;

const historySubject = db['history'];
if (!historySubject) { console.error('No history subject found'); process.exit(1); }

const expandedKeys = Object.keys(expanded);
console.log(`\nHistory topics in NOTES_DATABASE: ${historySubject.chapters.reduce((s,c)=>s+c.topics.length,0)}`);
console.log(`Expanded entries in notes_extra_history.js: ${expandedKeys.length}`);
console.log(`\n=== MISSING TOPICS (no EXPANDED_NOTES_DATA entry) ===`);

const missing = [];
historySubject.chapters.forEach(ch => {
  ch.topics.forEach(t => {
    if (!expanded[t.id]) {
      missing.push({ chapterTitle: ch.title, chapterId: ch.id, topicId: t.id, topicTitle: t.title });
      console.log(`  MISSING: [${t.id}] "${t.title}" (Chapter: ${ch.title})`);
    }
  });
});

console.log(`\nTotal missing: ${missing.length}`);

// Also check quality of existing entries
console.log('\n=== EXISTING ENTRY SIZES ===');
Object.entries(expanded).forEach(([id, html]) => {
  const stripped = html.replace(/<[^>]+>/g, '').trim();
  const hasDoctype = html.includes('<!DOCTYPE');
  const hasMCQ = html.toLowerCase().includes('practice mcq') || html.toLowerCase().includes('multiple choice');
  console.log(`  [${id}] ${stripped.length} chars | doctype:${hasDoctype} | hasMCQ:${hasMCQ}`);
});

// Write missing list for use by next scripts
fs.writeFileSync('scratch/missing_history_topics.json', JSON.stringify(missing, null, 2));
console.log('\nSaved missing list to scratch/missing_history_topics.json');
