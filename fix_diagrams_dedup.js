/**
 * fix_diagrams_dedup.js
 *
 * Eliminates all repeated & mismatched diagrams across:
 * 1. diagram_mappings.js (and public/diagram_mappings.js)
 * 2. ai_generated_notes.js inline EMBEDDED_VISUAL_DIAGRAMS
 *
 * Rules:
 * - Deduplicates by normalized diagram stem per chapter AND removes format duplicates (.svg/.png/.jpg of same chart).
 * - If a diagram is embedded inline inside <!-- EMBEDDED_VISUAL_DIAGRAMS -->, excludes its duplicate from DIAGRAM_MAPPINGS for that chapter.
 * - Keeps all original high-confidence (confidence_score === 1 or 0.98) mappings intact, and strictly filters/caps newly added mappings to max 6 distinct diagrams per chapter.
 * - Re-routes Geography/Environment diagrams cleanly so no single chapter gets flooded (fixes the 77-diagram flood on world-geography-straits-deserts).
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dmSb = { window: {} };
vm.createContext(dmSb);
vm.runInContext(fs.readFileSync('diagram_mappings.js', 'utf8'), dmSb);
const rawDm = dmSb.window.DIAGRAM_MAPPINGS || [];

const sylSb = { window: {} };
vm.createContext(sylSb);
vm.runInContext(fs.readFileSync('syllabus_data.js', 'utf8'), sylSb);
const syl = sylSb.window.OFFICIAL_SYLLABUS_DATA;

const aiSb = { window: {} };
vm.createContext(aiSb);
vm.runInContext(fs.readFileSync('ai_generated_notes.js', 'utf8'), aiSb);
const notes = aiSb.window.AI_GENERATED_NOTES;

// Track inline SVG titles already embedded in each chapter
const inlineTitlesByCh = {};
for (const ch of notes) {
  const titles = new Set();
  const matches = (ch.notes || '').matchAll(/📌\s*([^<]+)<\/div>/g);
  for (const m of matches) {
    titles.add(m[1].trim().toLowerCase().replace(/[^a-z0-9]/g, ''));
  }
  inlineTitlesByCh[ch.id] = titles;
}

// Build strict keyword index for all 302 chapters (excluding overly broad world-geography-straits-deserts bias)
const chMeta = {};
const STOP = new Set(['the','and','for','with','from','that','this','into','over','under','between','across','about','sub','topics','subtopics','standard','exams','class','concepts','topic','level','key','nda','cds','afcat','capf','all','upsc','defence','exam','master','guide','system','systems','india','indian','major']);
function tok(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(/\s+/).filter(w => w.length > 2 && !STOP.has(w));
}
for (const ch of notes) {
  chMeta[ch.id] = {
    subject: ch.subject,
    idWords: new Set(tok(ch.id.replace(/-/g, ' '))),
    titleWords: new Set(tok(ch.title)),
    descWords: new Set(tok(syl[ch.id] || ''))
  };
}

function normStem(item) {
  // Strip common prefixes/extensions/case so "foo_bar.png", "Foo_Bar.svg", "subject_chapter_foo_bar.png" collapse cleanly
  let base = path.basename(item.image_path || item.diagram_id || '', path.extname(item.image_path || item.diagram_id || ''));
  return base.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function normReason(item) {
  return (item.reasoning || '').toLowerCase()
    .replace(/\s*\([^)]*\)\s*/g, '')
    .replace(/reference visual diagram/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function scoreMatch(chId, item) {
  const info = chMeta[chId];
  if (!info) return -999;
  const pathSubj = (item.image_path || '').split('/')[2] || (item.image_path || '').split('/')[1] || '';
  const pathSubjLower = pathSubj.toLowerCase();
  let score = 0;
  if (pathSubjLower && info.subject) {
    if (pathSubjLower.includes(info.subject) || info.subject.includes(pathSubjLower)) score += 10;
    else if (pathSubjLower === 'economy' && info.subject === 'economics') score += 10;
    else score -= 12;
  }
  const text = [item.diagram_id, item.reasoning, ...(item.matched_indicators || []), item.image_path].join(' ');
  const words = tok(text);
  for (const w of words) {
    if (info.idWords.has(w)) score += 7;
    else if (info.titleWords.has(w)) score += 6;
    else if (info.descWords.has(w)) score += 2;
  }
  return score;
}

// Re-route and deduplicate
const perChapterSeenStems = {};
const perChapterItems = {};
let skippedInlineDup = 0;
let skippedFormatDup = 0;
let reroutedCount = 0;

// Sort so original curated mappings (confidence_score >= 0.95) and PNGs from assets/diagrams come first
const sortedDm = [...rawDm].sort((a, b) => {
  const ca = a.confidence_score || 0;
  const cb = b.confidence_score || 0;
  if (cb !== ca) return cb - ca;
  const aIsAsset = (a.image_path || '').startsWith('assets/diagrams/') ? 1 : 0;
  const bIsAsset = (b.image_path || '').startsWith('assets/diagrams/') ? 1 : 0;
  if (bIsAsset !== aIsAsset) return bIsAsset - aIsAsset;
  const aIsSvg = (a.image_path || '').endsWith('.svg') ? 1 : 0;
  const bIsSvg = (b.image_path || '').endsWith('.svg') ? 1 : 0;
  return bIsSvg - aIsSvg;
});

for (const item of sortedDm) {
  if (!item.image_path || !fs.existsSync(item.image_path)) continue;

  let chId = item.mapped_chapter_id;
  const isOriginal = (item.confidence_score || 0) >= 0.95;

  // For newly added items, check if another chapter fits significantly better (fixes 77-diagram flood & misroutes)
  if (!isOriginal) {
    let bestId = chId;
    let bestScore = scoreMatch(chId, item);
    for (const candidateId of Object.keys(chMeta)) {
      const s = scoreMatch(candidateId, item);
      if (s > bestScore + 2) {
        bestScore = s;
        bestId = candidateId;
      }
    }
    if (bestScore < 10) continue; // Drop weak/low-relevance auto-mappings
    if (bestId !== chId) {
      chId = bestId;
      reroutedCount++;
    }
  }

  if (!perChapterSeenStems[chId]) {
    perChapterSeenStems[chId] = new Set();
    perChapterItems[chId] = [];
  }

  const stem = normStem(item);
  const reasonNorm = normReason(item);
  const inlineSet = inlineTitlesByCh[chId] || new Set();

  // Check if already embedded inline inside AI_GENERATED_NOTES
  if (inlineSet.has(stem) || (reasonNorm && inlineSet.has(reasonNorm))) {
    skippedInlineDup++;
    continue;
  }

  // Check if exact stem or suffix/prefix duplicate already exists in this chapter
  let isDup = false;
  for (const prev of perChapterSeenStems[chId]) {
    if (prev === stem || (stem.length >= 10 && prev.endsWith(stem)) || (prev.length >= 10 && stem.endsWith(prev))) {
      isDup = true;
      break;
    }
  }
  if (isDup || (reasonNorm && perChapterSeenStems[chId].has('R:' + reasonNorm))) {
    skippedFormatDup++;
    continue;
  }

  // Cap non-original auto-mapped diagrams at max 6 total per chapter
  if (!isOriginal && perChapterItems[chId].length >= 6) {
    continue;
  }

  perChapterSeenStems[chId].add(stem);
  if (reasonNorm) perChapterSeenStems[chId].add('R:' + reasonNorm);
  perChapterItems[chId].push({ ...item, mapped_chapter_id: chId });
}

const cleanedDm = Object.values(perChapterItems).flat();
const outDm = `window.DIAGRAM_MAPPINGS = ${JSON.stringify(cleanedDm, null, 2)};\n`;
fs.writeFileSync('diagram_mappings.js', outDm, 'utf8');
fs.writeFileSync('public/diagram_mappings.js', outDm, 'utf8');

const maxPerCh = Math.max(...Object.values(perChapterItems).map(arr => arr.length));
const topCh = Object.entries(perChapterItems).sort((a, b) => b[1].length - a[1].length).slice(0, 8).map(([k, v]) => `${k}:${v.length}`);
console.log(`✅ Diagram Deduplication Complete!`);
console.log(`   Before: ${rawDm.length} -> After: ${cleanedDm.length}`);
console.log(`   Removed inline-SVG duplicates: ${skippedInlineDup}`);
console.log(`   Removed format/stem duplicates: ${skippedFormatDup}`);
console.log(`   Re-routed to better chapters: ${reroutedCount}`);
console.log(`   Max diagrams on any chapter: ${maxPerCh} (${topCh.join(', ')})`);
