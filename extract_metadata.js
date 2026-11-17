const fs = require('fs');
const vm = require('vm');
const path = require('path');

// Load existing EXPANDED_NOTES_DATA keys to know if they exist
const sandbox = vm.createContext({
  window: { EXPANDED_NOTES_DATA: {} },
  console
});
sandbox.window.window = sandbox.window;

const noteFiles = fs.readdirSync(__dirname).filter(f => f.startsWith('notes_extra') && f.endsWith('.js'));
for (const f of noteFiles) {
  try {
    vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox);
  } catch (e) {}
}
const EXPANDED = sandbox.window.EXPANDED_NOTES_DATA || {};

// Load data.js
const appSrc = fs.readFileSync('data.js', 'utf8');
const dbStart = appSrc.indexOf('const NOTES_DATABASE = {');
let depth = 0, i = dbStart + 'const NOTES_DATABASE = '.length;
let dbEnd = -1;
for (; i < appSrc.length; i++) {
  if (appSrc[i] === '{') depth++;
  else if (appSrc[i] === '}') {
    depth--;
    if (depth === 0) { dbEnd = i + 1; break; }
  }
}
const dbCode = 'const NOTES_DATABASE = ' + appSrc.slice(dbStart + 'const NOTES_DATABASE = '.length, dbEnd) + ';';
const dbSandbox = vm.createContext({});
vm.runInContext(dbCode, dbSandbox);
const NOTES_DATABASE = vm.runInContext('NOTES_DATABASE', dbSandbox);

const topics = [];
for (const [subjectId, subject] of Object.entries(NOTES_DATABASE)) {
  for (const chapter of (subject.chapters || [])) {
    for (const topic of (chapter.topics || [])) {
      if (!topic.title) continue;
      
      const hasExpanded = !!EXPANDED[topic.id];
      let currentNotes = EXPANDED[topic.id] || '';
      if (!currentNotes && topic.notes && !topic.notes.trim().startsWith('Detailed notes')) {
        currentNotes = topic.notes;
      }
      
      topics.push({
        id: topic.id,
        title: topic.title,
        subject: subject.title,
        subjectId,
        chapter: chapter.title,
        chapterId: chapter.id,
        formulas: topic.formulas || '',
        notes: currentNotes,
        hasExpanded,
        // Determine which notes_extra file it should go into or is currently in
        originalFile: noteFiles.find(f => {
          const src = fs.readFileSync(f, 'utf8');
          return src.includes(`EXPANDED_NOTES_DATA["${topic.id}"]`) || src.includes(`EXPANDED_NOTES_DATA['${topic.id}']`);
        }) || null
      });
    }
  }
}
fs.writeFileSync('all_topics_meta.json', JSON.stringify(topics, null, 2));
console.log(`Extracted ${topics.length} topics to all_topics_meta.json`);
