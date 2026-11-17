/**
 * boost_inject_and_bust.js
 *
 * 1. Injects boost_cache.json (<!-- CORE_BOOST_EXPANSION -->) cleanly into the
 *    core textbook section of each boosted chapter (before Track 5 / Extracted Library).
 * 2. Syncs ai_generated_notes.js -> public/ai_generated_notes.js
 * 3. Bumps ?v= cache-buster in index.html & public/index.html + CACHE_NAME in sw.js & public/sw.js
 */
const fs = require('fs');
const vm = require('vm');

const aiSb = { window: {} };
vm.createContext(aiSb);
vm.runInContext(fs.readFileSync('ai_generated_notes.js', 'utf8'), aiSb);
const notes = aiSb.window.AI_GENERATED_NOTES;

const boostCache = fs.existsSync('boost_cache.json')
  ? JSON.parse(fs.readFileSync('boost_cache.json', 'utf8'))
  : {};

let injected = 0;
for (const ch of notes) {
  let html = ch.notes || '';
  if (!boostCache[ch.id] || html.includes('<!-- CORE_BOOST_EXPANSION -->')) continue;

  const boostHtml = boostCache[ch.id].html;
  const cuts = [
    html.indexOf('<!-- TRACK5_EXAM_EDGE_MATRIX -->'),
    html.indexOf('<!-- EXTRACTED CONCEPT LIBRARY'),
    html.indexOf('<!-- RECOVERED_NOTES_DB -->'),
    html.indexOf('<div class="extracted-topic-module"')
  ].filter(i => i !== -1);

  if (cuts.length > 0) {
    const pos = Math.min(...cuts);
    html = html.slice(0, pos) + '\n' + boostHtml + '\n' + html.slice(pos);
  } else {
    html = html + '\n' + boostHtml;
  }
  ch.notes = html;
  injected++;
}

function safeWrite(filepath, text, chunkSize = 2 * 1024 * 1024) {
  const fd = fs.openSync(filepath, 'w');
  for (let i = 0; i < text.length; i += chunkSize) {
    fs.writeSync(fd, text.slice(i, i + chunkSize), null, 'utf8');
  }
  fs.closeSync(fd);
}

const outAi = `// AI_GENERATED_NOTES — Master Synthesized Compendium for Jayastra\n// Canonical Knowledge Base for Defence Examinations Revision (302 Granular Chapters)\n\nconst AI_GENERATED_NOTES = ${JSON.stringify(notes, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.AI_GENERATED_NOTES = AI_GENERATED_NOTES;\n}\nif (typeof module !== 'undefined') {\n  module.exports = { AI_GENERATED_NOTES };\n}\n`;
safeWrite('ai_generated_notes.js', outAi);
safeWrite('public/ai_generated_notes.js', outAi);

// Bump cache-busters in index.html & sw.js
const newVer = String(Date.now());
for (const p of ['index.html', 'public/index.html']) {
  if (fs.existsSync(p)) {
    let idx = fs.readFileSync(p, 'utf8');
    idx = idx.replace(/\?v=\d+/g, `?v=${newVer}`);
    fs.writeFileSync(p, idx, 'utf8');
  }
}
for (const p of ['sw.js', 'public/sw.js']) {
  if (fs.existsSync(p)) {
    let sw = fs.readFileSync(p, 'utf8');
    sw = sw.replace(/tac-revise-cache-v\d+/g, `tac-revise-cache-v${newVer}`);
    fs.writeFileSync(p, sw, 'utf8');
  }
}

const wordCounts = notes.map(c => {
  const plain = (c.notes || '').replace(/<svg[\s\S]*?<\/svg>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return plain ? plain.split(' ').length : 0;
});
const totalChars = notes.reduce((a, b) => a + (b.notes || '').length, 0);
const totalWords = wordCounts.reduce((a, b) => a + b, 0);
console.log(`✅ Injected Core Boost into ${injected} chapters. Cache version bumped to v=${newVer}`);
console.log(`📊 Total Chapters: ${notes.length} | Total Chars: ${totalChars.toLocaleString()} | Total Visible Words: ${totalWords.toLocaleString()}`);
console.log(`📉 Chapters < 4,000 visible words: ${wordCounts.filter(w => w < 4000).length}`);
console.log(`📉 Chapters < 5,000 visible words: ${wordCounts.filter(w => w < 5000).length}`);
