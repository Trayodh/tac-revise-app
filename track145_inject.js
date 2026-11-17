/**
 * track145_inject.js
 *
 * Injects generated Track 1+4 masterclasses (track14_cache.json) and
 * Track 5 UPSC Statement-Trap & NCERT Blue-Box matrices (track5_cache.json)
 * into ai_generated_notes.js and syncs public/ai_generated_notes.js.
 */

const fs = require('fs');
const vm = require('vm');

console.log('=== TRACK 1+4+5 INJECTION & VERIFICATION ===');

const aiSb = { window: {} };
vm.createContext(aiSb);
vm.runInContext(fs.readFileSync('ai_generated_notes.js', 'utf8'), aiSb);
const notes = aiSb.window.AI_GENERATED_NOTES;

const t14Cache = fs.existsSync('track14_cache.json')
  ? JSON.parse(fs.readFileSync('track14_cache.json', 'utf8'))
  : {};
const t5Cache = fs.existsSync('track5_cache.json')
  ? JSON.parse(fs.readFileSync('track5_cache.json', 'utf8'))
  : {};

let injectedT14 = 0;
let injectedT5 = 0;

for (const ch of notes) {
  let html = ch.notes || '';

  // 1. Inject Track 1+4 Masterclass at top (right after chapter title h3 inside .revision-card)
  if (t14Cache[ch.id] && !html.includes('<!-- TRACK14_MASTERCLASS -->')) {
    const t14Html = t14Cache[ch.id].html;
    const h3Match = html.match(/<div class="revision-card"[^>]*>\s*<h3[^>]*>[\s\S]*?<\/h3>/i);
    if (h3Match) {
      const insertPos = h3Match.index + h3Match[0].length;
      html = html.slice(0, insertPos) + '\n\n' + t14Html + '\n\n' + html.slice(insertPos);
    } else {
      html = `<div class="revision-card">\n  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent); margin-right: 8px;"></i> ${ch.title.toUpperCase()} — MASTER REVISION &amp; EXAM GUIDE</h3>\n\n${t14Html}\n\n${html}\n</div>`;
    }
    injectedT14++;
  }

  // 2. Inject Track 5 Exam-Edge Matrix before extracted-concept-library (if present) or at end of revision-card
  if (t5Cache[ch.id] && !html.includes('<!-- TRACK5_EXAM_EDGE_MATRIX -->')) {
    const t5Html = t5Cache[ch.id].html;
    const libIdx = html.indexOf('<!-- EXTRACTED CONCEPT LIBRARY:');
    const recIdx = html.indexOf('<!-- RECOVERED_NOTES_DB -->');
    const modIdx = html.indexOf('<div class="extracted-topic-module"');
    const candidates = [libIdx, recIdx, modIdx].filter(i => i !== -1);
    if (candidates.length > 0) {
      const insertAt = Math.min(...candidates);
      html = html.slice(0, insertAt) + '\n' + t5Html + '\n' + html.slice(insertAt);
    } else {
      html = html + '\n' + t5Html;
    }
    injectedT5++;
  }

  ch.notes = html;
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

// Verify stats
const bySubj = {};
let totalChars = 0;
let under50k = 0;
let imbalancedTables = 0;
for (const ch of notes) {
  const s = ch.subject;
  const len = (ch.notes || '').length;
  totalChars += len;
  if (len < 50000) under50k++;
  if (!bySubj[s]) bySubj[s] = { chapters: 0, chars: 0, t5: 0, t14: 0 };
  bySubj[s].chapters++;
  bySubj[s].chars += len;
  if (ch.notes.includes('<!-- TRACK5_EXAM_EDGE_MATRIX -->')) bySubj[s].t5++;
  if (ch.notes.includes('<!-- TRACK14_MASTERCLASS -->')) bySubj[s].t14++;

  const ot = (ch.notes.match(/<table\b/gi) || []).length;
  const ct = (ch.notes.match(/<\/table>/gi) || []).length;
  if (ot !== ct) imbalancedTables++;
}

console.log(`✅ Injected Track 1+4 into ${injectedT14} chapters, Track 5 into ${injectedT5} chapters.`);
console.log(`📊 Total Chapters: ${notes.length} | Total Volume: ${totalChars.toLocaleString()} chars (~${Math.round(totalChars / 6).toLocaleString()} words)`);
console.log(`📉 Chapters still < 50k chars: ${under50k} | Imbalanced <table> chapters: ${imbalancedTables}`);
console.table(Object.entries(bySubj).map(([k, v]) => ({
  Subject: k,
  Chapters: v.chapters,
  Volume: (v.chars / 1e6).toFixed(2) + 'M',
  AvgChars: Math.round(v.chars / v.chapters).toLocaleString(),
  Track14: v.t14,
  Track5: v.t5
})));
