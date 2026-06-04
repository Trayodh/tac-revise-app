/**
 * generate_topic_jsons.js
 * Uses a lightweight approach:
 *   1. Loads notes_extra files via vm sandbox (mock window)
 *   2. Parses NOTES_DATABASE directly from app.js using regex/ast walking
 *      by loading only the const NOTES_DATABASE = { ... } block
 *   3. Writes one JSON file per topic under manim_lectures/topics/
 */

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const BASE = __dirname;
const OUT  = path.join(BASE, 'manim_lectures', 'topics');
fs.mkdirSync(OUT, { recursive: true });

// ─── 1. Load notes_extra files into sandbox ────────────────────────────────
const sandbox = vm.createContext({
  window: { EXPANDED_NOTES_DATA: {}, EXPERT_REVISION_DATA: {} },
  console,
  setTimeout: () => {},
});
sandbox.window.window = sandbox.window;

const noteFiles = [
  'notes_extra.js','notes_extra_2.js','notes_extra_3.js','notes_extra_4.js',
  'notes_extra_5.js','notes_extra_6.js','notes_extra_7.js','notes_extra_8.js',
  'notes_extra_9.js','notes_extra_english.js','notes_extra_history.js',
];

for (const f of noteFiles) {
  const fp = path.join(BASE, f);
  if (!fs.existsSync(fp)) continue;
  try {
    vm.runInContext(fs.readFileSync(fp, 'utf8'), sandbox, { timeout: 15000 });
    console.log(` ${f}`);
  } catch(e) { console.warn(`Important: ${f}: ${e.message.slice(0,80)}`); }
}

const EXPANDED = sandbox.window.EXPANDED_NOTES_DATA || {};

// ─── 2. Extract NOTES_DATABASE block from app.js ───────────────────────────
const appSrc = fs.readFileSync(path.join(BASE, 'app.js'), 'utf8');

// Find the block: "const NOTES_DATABASE = {" ... up to matching closing brace
const dbStart = appSrc.indexOf('const NOTES_DATABASE = {');
if (dbStart === -1) { console.error('NOTES_DATABASE not found in app.js'); process.exit(1); }

// Walk braces to find matching end
let depth = 0, i = dbStart + 'const NOTES_DATABASE = '.length;
let dbEnd = -1;
for (; i < appSrc.length; i++) {
  if (appSrc[i] === '{') depth++;
  else if (appSrc[i] === '}') {
    depth--;
    if (depth === 0) { dbEnd = i + 1; break; }
  }
}

if (dbEnd === -1) { console.error('Could not find end of NOTES_DATABASE'); process.exit(1); }
const dbCode = 'const NOTES_DATABASE = ' + appSrc.slice(dbStart + 'const NOTES_DATABASE = '.length, dbEnd) + ';';

// Evaluate just the database definition (no DOM needed)
const dbSandbox = vm.createContext({});
let NOTES_DATABASE;
try {
  vm.runInContext(dbCode, dbSandbox, { timeout: 20000 });
  NOTES_DATABASE = vm.runInContext('NOTES_DATABASE', dbSandbox);
  console.log(`\n NOTES_DATABASE loaded`);
} catch(e) {
  console.error('Failed to eval NOTES_DATABASE:', e.message.slice(0,200));
  process.exit(1);
}

// ─── 3. Helpers ────────────────────────────────────────────────────────────
function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ')
    .replace(/\s{2,}/g, ' ').replace(/\n\s+/g,'\n').trim();
}

function extractBlocks(html) {
  if (!html) return [];
  const blocks = [];
  const sectionRe = /<h[2-4][^>]*>(.*?)<\/h[2-4]>([\s\S]*?)(?=<h[2-4]|$)/gi;
  let m;
  while ((m = sectionRe.exec(html)) !== null) {
    const heading = stripHtml(m[1]).trim();
    const body    = m[2];

    const bullets = [];
    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let li;
    while ((li = liRe.exec(body)) !== null) {
      const t = stripHtml(li[1]).trim();
      if (t.length > 3 && t.length < 350) bullets.push(t);
    }

    const tableRows = [];
    const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let tr;
    while ((tr = trRe.exec(body)) !== null) {
      const cells = [];
      const tdRe = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
      let td;
      while ((td = tdRe.exec(tr[1])) !== null) {
        const t = stripHtml(td[1]).trim();
        if (t) cells.push(t.slice(0, 65));
      }
      if (cells.length) tableRows.push(cells);
    }

    const pM = body.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const intro = pM ? stripHtml(pM[1]).trim() : '';

    blocks.push({ heading, intro: intro.slice(0,220), bullets: bullets.slice(0,8), tableRows: tableRows.slice(0,9) });
  }

  // Fallback: flat bullet list
  if (!blocks.length) {
    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let li; const bullets = [];
    while ((li = liRe.exec(html)) !== null) {
      const t = stripHtml(li[1]).trim();
      if (t.length > 3 && t.length < 350) bullets.push(t);
    }
    if (bullets.length) blocks.push({ heading:'', intro:'', bullets: bullets.slice(0,10), tableRows:[] });
  }
  return blocks;
}

// ─── 4. Walk NOTES_DATABASE and emit topic JSONs ───────────────────────────
let totalTopics = 0;

for (const [subjectId, subject] of Object.entries(NOTES_DATABASE)) {
  for (const chapter of (subject.chapters || [])) {
    for (const topic of (chapter.topics || [])) {
      // Skip chapter-level entries (they have topics property but no notes)
      if (!topic.title) continue;

      let rawHtml = '';
      if (EXPANDED[topic.id]) {
        rawHtml = EXPANDED[topic.id];
      } else if (topic.notes && !String(topic.notes).trim().startsWith('Detailed notes')) {
        rawHtml = topic.notes;
      }

      const formulas = topic.formulas
        ? String(topic.formulas).split('\n').map(f=>f.trim()).filter(f=>f.length>2).slice(0,8)
        : [];

      const payload = {
        id:        topic.id,
        title:     topic.title,
        subject:   subject.title,
        subjectId,
        chapter:   chapter.title,
        chapterId: chapter.id,
        blocks:    extractBlocks(rawHtml).slice(0,5),
        formulas,
        hasNotes:  rawHtml.length > 50,
      };

      const outFile = path.join(OUT, `${topic.id}.json`);
      fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
      totalTopics++;
    }
  }
}

console.log(`\n• Generated ${totalTopics} topic JSON files → manim_lectures/topics/`);

// Summary
const bySubject = {};
for (const [sid, sub] of Object.entries(NOTES_DATABASE)) {
  let count = 0;
  for (const ch of (sub.chapters||[])) count += (ch.topics||[]).filter(t=>t.title).length;
  bySubject[sub.title] = count;
}
console.log('\nTopics per subject:');
for (const [s,n] of Object.entries(bySubject)) console.log(`  ${s}: ${n}`);
