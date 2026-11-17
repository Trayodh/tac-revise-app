/**
 * track2_ingest_local_sources.js
 *
 * Track 2 Master Local Ingestion Engine:
 * 1. Syncs & maps ALL 293 assets/diagrams/ + diagrams/ (.svg, .jpg, .png) into diagram_mappings.js & embeds SVGs inline
 * 2. Recovers ~3,386 skipped modules from notes_database.json across all 302 chapters
 * 3. Ingests ssbcrack_gs_notes/ (31 files) & extra_subjects_notes/ (14 files)
 * 4. Ingests Pathfinder_Elite/modules/ (83 modules, including Mermaid mindmaps)
 * 5. Ingests pathfinder_chapters_clean/ (17 textbook files)
 *
 * Idempotent & deduplicated. Writes ai_generated_notes.js, diagram_mappings.js, and syncs public/.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { marked } = require('marked');

// Configure marked for mermaid blocks
marked.use({
  renderer: {
    code(token) {
      const text = typeof token === 'object' ? token.text : token;
      const lang = typeof token === 'object' ? token.lang : arguments[1];
      if (lang === 'mermaid') {
        return `<div class="mermaid" style="background: rgba(0,0,0,0.3); padding: 14px; border-radius: 8px; margin: 12px 0;">${text}</div>\n`;
      }
      return `<pre><code>${text}</code></pre>\n`;
    }
  }
});

function walkDir(dir) {
  let out = [];
  if (!fs.existsSync(dir)) return out;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) out.push(...walkDir(p));
    else out.push(p.split(path.sep).join('/'));
  }
  return out;
}

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return 0;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  let copied = 0;
  for (const entry of fs.readdirSync(src)) {
    const s = path.join(src, entry);
    const d = path.join(dest, entry);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) {
      copied += copyDirSync(s, d);
    } else {
      if (!fs.existsSync(d) || fs.statSync(d).size !== stat.size) {
        fs.copyFileSync(s, d);
        copied++;
      }
    }
  }
  return copied;
}

console.log('=== TRACK 2: LOCAL GOLDMINE INGESTION & DIAGRAM MAPPING ===');

// 0. Sync diagram directories to public/
const c1 = copyDirSync('assets/diagrams', 'public/assets/diagrams');
const c2 = copyDirSync('diagrams', 'public/diagrams');
console.log(`[0] Synced diagrams to public/: ${c1} in public/assets/diagrams, ${c2} in public/diagrams`);

// 1. Load syllabus, notes_data, ai_generated_notes
const sylSb = { window: {} };
vm.createContext(sylSb);
vm.runInContext(fs.readFileSync('syllabus_data.js', 'utf8'), sylSb);
const OFFICIAL_SYLLABUS = sylSb.window.OFFICIAL_SYLLABUS_DATA;

const aiSb = { window: {} };
vm.createContext(aiSb);
vm.runInContext(fs.readFileSync('ai_generated_notes.js', 'utf8'), aiSb);
const AI_GENERATED_NOTES = aiSb.window.AI_GENERATED_NOTES;

const chById = {};
const chKeywords = {};
const STOP_WORDS = new Set([
  'the', 'and', 'for', 'with', 'from', 'that', 'this', 'into', 'over', 'under',
  'between', 'across', 'about', 'sub', 'topics', 'subtopics', 'standard', 'exams',
  'class', 'concepts', 'topic', 'level', 'key', 'nda', 'cds', 'afcat', 'capf',
  'all', 'upsc', 'defence', 'exam', 'master', 'guide', 'system', 'systems', 'india', 'indian'
]);

function tokenize(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

AI_GENERATED_NOTES.forEach(ch => {
  chById[ch.id] = ch;
  const desc = OFFICIAL_SYLLABUS[ch.id] || '';
  const idWords = tokenize(ch.id.replace(/-/g, ' '));
  const titleWords = tokenize(ch.title);
  const descWords = tokenize(desc);
  chKeywords[ch.id] = {
    subject: ch.subject,
    title: ch.title.toLowerCase(),
    idWords: new Set(idWords),
    titleWords: new Set(titleWords),
    allWords: new Set([...idWords, ...titleWords, ...descWords])
  };
});

function bestChapterMatch(subjectHint, textHint, minScore = 6) {
  const words = tokenize(textHint);
  const textLower = (textHint || '').toLowerCase();
  let bestId = null;
  let bestScore = 0;

  for (const [chId, info] of Object.entries(chKeywords)) {
    let score = 0;
    if (subjectHint) {
      if (subjectHint === info.subject) score += 8;
      else if (subjectHint === 'science' && ['physics', 'chemistry', 'biology'].includes(info.subject)) score += 4;
      else if (subjectHint === 'gs' && ['history', 'geography', 'polity', 'economics', 'environment', 'current-affairs'].includes(info.subject)) score += 3;
      else score -= 25;
    }

    const cleanId = chId.replace(/-/g, ' ');
    if (textLower.includes(cleanId)) score += 25;

    for (const w of words) {
      if (info.idWords.has(w)) score += 6;
      else if (info.titleWords.has(w)) score += 5;
      else if (info.allWords.has(w)) score += 2.5;
    }

    // Prefer newly added granular chapters slightly when tie-breaking on deep subtopic keywords
    if (score > bestScore && score >= minScore) {
      bestScore = score;
      bestId = chId;
    }
  }
  return bestId;
}

const SUBJ_ALIASES = {
  'mathematics': 'mathematics', 'math': 'mathematics', 'arithmetic': 'mathematics',
  'algebra': 'mathematics', 'geometry': 'mathematics', 'trigonometry': 'mathematics',
  'calculus': 'mathematics', 'statistics': 'mathematics', 'quantitative aptitude': 'mathematics',
  'english': 'english', 'english grammar': 'english', 'vocabulary': 'english', 'general english': 'english',
  'polity': 'polity', 'indian polity': 'polity', 'constitution': 'polity', 'indian constitution': 'polity',
  'constitutional law': 'polity', 'political science': 'polity', 'judiciary': 'polity', 'governance': 'polity',
  'history': 'history', 'indian history': 'history', 'ancient history': 'history', 'modern history': 'history',
  'modern indian history': 'history', 'medieval history': 'history', 'world history': 'history',
  'art and culture': 'history', 'art & culture': 'history',
  'geography': 'geography', 'indian geography': 'geography', 'physical geography': 'geography',
  'climatology': 'geography', 'oceanography': 'geography',
  'economics': 'economics', 'economy': 'economics', 'indian economy': 'economics',
  'banking': 'economics', 'public finance': 'economics', 'agriculture': 'economics',
  'physics': 'physics', 'optics': 'physics', 'mechanics': 'physics', 'thermodynamics': 'physics',
  'chemistry': 'chemistry', 'organic chemistry': 'chemistry', 'inorganic chemistry': 'chemistry',
  'biology': 'biology', 'human anatomy': 'biology', 'human physiology': 'biology', 'botany': 'biology', 'zoology': 'biology',
  'general science': 'science', 'science & technology': 'science',
  'military-aptitude': 'military-aptitude', 'defence': 'military-aptitude', 'defence studies': 'military-aptitude',
  'reasoning': 'military-aptitude', 'logical reasoning': 'military-aptitude', 'verbal reasoning': 'military-aptitude',
  'current-affairs': 'current-affairs', 'current affairs': 'current-affairs',
  'international relations': 'current-affairs', 'awards and honors': 'current-affairs',
  'sports': 'current-affairs', 'general awareness': 'current-affairs',
  'general knowledge': 'gs', 'general studies': 'gs', 'miscellaneous': 'gs',
  'environment': 'environment', 'environmental science': 'environment', 'ecology': 'environment',
  'environmental studies': 'environment'
};

function normSubject(raw) {
  if (!raw) return null;
  const s = raw.toLowerCase().trim();
  if (SUBJ_ALIASES[s]) return SUBJ_ALIASES[s];
  for (const [k, v] of Object.entries(SUBJ_ALIASES)) {
    if (s.includes(k)) return v;
  }
  return null;
}

// =========================================================================
// PART 1: UPGRADE DIAGRAM_MAPPINGS + EMBED INLINE SVG/IMG VISUALS
// =========================================================================
console.log('\n[1] Mapping all unmapped assets/diagrams/ & diagrams/ ...');
const dmSb = { window: {} };
vm.createContext(dmSb);
vm.runInContext(fs.readFileSync('diagram_mappings.js', 'utf8'), dmSb);
const diagramMappings = dmSb.window.DIAGRAM_MAPPINGS || [];
const existingMappedPaths = new Set(diagramMappings.map(d => d.image_path));

let addedDiagrams = 0;

// 1A. Map unmapped assets/diagrams/*
const assetDiagFiles = walkDir('assets/diagrams').filter(p => /\.(png|jpg|jpeg|svg|webp)$/i.test(p));
for (const imgPath of assetDiagFiles) {
  if (existingMappedPaths.has(imgPath)) continue;
  const parts = imgPath.split('/');
  const folderSubj = normSubject(parts[2] || '');
  const baseName = path.basename(imgPath, path.extname(imgPath));

  // Exact ID match if filename == chapter id
  let mappedChId = chById[baseName] ? baseName : null;
  if (!mappedChId) {
    mappedChId = bestChapterMatch(folderSubj, parts.slice(2).join(' '), 5);
  }
  if (mappedChId) {
    const niceName = baseName.replace(/[_-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    diagramMappings.push({
      diagram_id: path.basename(imgPath),
      mapped_chapter_id: mappedChId,
      confidence_score: 0.92,
      matched_indicators: tokenize(parts.slice(2).join(' ')).slice(0, 6),
      reasoning: `${niceName} — Reference Visual Diagram`,
      image_path: imgPath
    });
    existingMappedPaths.add(imgPath);
    addedDiagrams++;
  }
}

// 1B. Map diagrams/* (.svg, .jpg, .png) using companion .json metadata
const diagFiles = walkDir('diagrams').filter(p => /\.(svg|jpg|jpeg|png)$/i.test(p));
const svgByChapter = {}; // chId -> [{ title, svgContent }]
for (const imgPath of diagFiles) {
  const ext = path.extname(imgPath);
  const jsonPath = imgPath.slice(0, -ext.length) + '.json';
  let meta = {};
  if (fs.existsSync(jsonPath)) {
    try { meta = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); } catch {}
  }
  const parts = imgPath.split('/');
  const subjHint = normSubject(meta.subject || parts[1] || '');
  const hintStr = [meta.title, meta.chapter, meta.topic, ...(meta.keywords || []), parts.slice(1).join(' ')].filter(Boolean).join(' ');
  const mappedChId = bestChapterMatch(subjHint, hintStr, 5);
  if (!mappedChId) continue;

  if (!existingMappedPaths.has(imgPath)) {
    const title = meta.title || path.basename(imgPath, ext).replace(/[_-]+/g, ' ');
    diagramMappings.push({
      diagram_id: path.basename(imgPath),
      mapped_chapter_id: mappedChId,
      confidence_score: 0.9,
      matched_indicators: (meta.keywords || tokenize(hintStr)).slice(0, 6),
      reasoning: `${title} (${meta.chapter || subjHint || 'Reference Diagram'})`,
      image_path: imgPath
    });
    existingMappedPaths.add(imgPath);
    addedDiagrams++;
  }

  if (ext.toLowerCase() === '.svg') {
    if (!svgByChapter[mappedChId]) svgByChapter[mappedChId] = [];
    if (svgByChapter[mappedChId].length < 3) {
      let svgRaw = fs.readFileSync(imgPath, 'utf8').trim();
      // Ensure unique SVG IDs don't clash if multiple SVGs are embedded on a page
      const uniq = `svg_${mappedChId.replace(/[^a-z0-9]/gi, '_')}_${svgByChapter[mappedChId].length}`;
      svgRaw = svgRaw.replace(/id="my-svg"/g, `id="${uniq}"`).replace(/#my-svg/g, `#${uniq}`);
      svgByChapter[mappedChId].push({
        title: meta.title || path.basename(imgPath, '.svg').replace(/[_-]+/g, ' '),
        svg: svgRaw
      });
    }
  }
}

const outDm = `window.DIAGRAM_MAPPINGS = ${JSON.stringify(diagramMappings, null, 2)};\n`;
fs.writeFileSync('diagram_mappings.js', outDm, 'utf8');
fs.writeFileSync('public/diagram_mappings.js', outDm, 'utf8');
console.log(`✅ diagram_mappings.js updated: +${addedDiagrams} newly mapped diagrams (total: ${diagramMappings.length}).`);

// Embed inline SVGs into matching chapters (idempotent)
let embeddedSvgChapters = 0;
for (const [chId, svgs] of Object.entries(svgByChapter)) {
  const ch = chById[chId];
  if (!ch || ch.notes.includes('<!-- EMBEDDED_VISUAL_DIAGRAMS -->')) continue;
  let svgBlock = `\n\n<!-- EMBEDDED_VISUAL_DIAGRAMS -->\n<div class="embedded-diagrams-section" style="margin-top: 28px; padding: 18px 20px; background: rgba(15, 23, 42, 0.55); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 10px;">\n`;
  svgBlock += `  <h4 style="color: var(--accent); margin: 0 0 14px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-diagram-project"></i> Interactive Vector Concept Schematics</h4>\n`;
  for (const item of svgs) {
    svgBlock += `  <div style="margin-bottom: 18px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 8px; padding: 14px; overflow-x: auto;">\n`;
    svgBlock += `    <div style="font-size: 0.88rem; font-weight: 600; color: var(--text-primary); margin-bottom: 10px;">📌 ${item.title}</div>\n`;
    svgBlock += `    <div style="background: rgba(248, 250, 252, 0.94); padding: 12px; border-radius: 6px; overflow-x: auto;">${item.svg}</div>\n`;
    svgBlock += `  </div>\n`;
  }
  svgBlock += `</div>\n`;
  ch.notes += svgBlock;
  embeddedSvgChapters++;
}
console.log(`✅ Embedded inline SVG concept schematics into ${embeddedSvgChapters} chapters.`);

// Helper to append a clean module into a chapter's notes
function appendModuleToChapter(chId, moduleTitle, badgeLabel, bodyHtml, tagMarker) {
  const ch = chById[chId];
  if (!ch) return false;
  if (tagMarker && ch.notes.includes(tagMarker)) return false;

  const cleanCard = `\n\n${tagMarker ? `<!-- ${tagMarker} -->\n` : ''}<div class="extracted-topic-module" style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 10px; padding: 22px 26px; margin-top: 24px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">\n` +
    `  <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">\n` +
    `    <h4 style="margin: 0; color: var(--text-primary); font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">\n` +
    `      <i class="fa-solid fa-book-open" style="color: var(--accent);"></i> ${moduleTitle}\n` +
    `    </h4>\n` +
    `    <span style="font-size: 0.78rem; color: var(--accent); background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 3px 10px; border-radius: 12px; font-weight: 600;">${badgeLabel}</span>\n` +
    `  </div>\n` +
    `  <div class="extracted-topic-body" style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">\n${bodyHtml}\n  </div>\n` +
    `</div>\n`;

  ch.notes += cleanCard;
  return true;
}

// =========================================================================
// PART 2: RECOVER UNMAPPED ITEMS FROM notes_database.json
// =========================================================================
console.log('\n[2] Recovering unmapped modules from notes_database.json ...');
const rawNotes = JSON.parse(fs.readFileSync('notes_database.json', 'utf8'));

// Index existing module titles per chapter to avoid duplicates
const existingTitlesByCh = {};
for (const ch of AI_GENERATED_NOTES) {
  const titles = new Set();
  const re = /<h4[^>]*>[\s\S]*?<span[^>]*>\d+<\/span>\s*([\s\S]*?)<\/h4>/gi;
  let m;
  while ((m = re.exec(ch.notes)) !== null) {
    titles.add(m[1].replace(/<[^>]+>/g, '').trim().toLowerCase());
  }
  existingTitlesByCh[ch.id] = titles;
}

let recoveredNdb = 0;
const recoveredByCh = {};

for (const item of rawNotes) {
  const txt = (item.text || item.content || '').trim();
  if (txt.length < 90) continue;
  if (txt.includes('Pages ') && txt.length < 200 && !txt.includes('<table') && !txt.includes('###')) continue;

  const subjHint = normSubject(item.subject || '');
  const hintStr = `${item.subject || ''} ${item.chapter || ''} ${item.topic || ''} ${txt.slice(0, 120)}`;
  const bestCh = bestChapterMatch(subjHint, hintStr, 7);
  if (!bestCh) continue;

  const topicTitle = (item.topic || item.title || item.chapter || 'Concept Module').trim();
  const tKey = topicTitle.toLowerCase();
  if (existingTitlesByCh[bestCh].has(tKey)) continue;

  existingTitlesByCh[bestCh].add(tKey);
  if (!recoveredByCh[bestCh]) recoveredByCh[bestCh] = [];
  recoveredByCh[bestCh].push(item);
  recoveredNdb++;
}

for (const [chId, items] of Object.entries(recoveredByCh)) {
  const ch = chById[chId];
  if (!ch || ch.notes.includes('<!-- RECOVERED_NOTES_DB -->')) continue;
  let block = `\n\n<!-- RECOVERED_NOTES_DB -->\n`;
  items.forEach((it, idx) => {
    const topicTitle = (it.topic || it.title || `Recovered Module ${idx + 1}`).trim();
    let bodyText = (it.text || it.content || '').trim();
    if (!bodyText.startsWith('<') && !/<(p|div|table|h[1-6]|ul|ol)/i.test(bodyText)) {
      bodyText = marked.parse(bodyText);
    }
    let mcqHtml = '';
    if (it.mcq) {
      const q = it.mcq.question || it.mcq.q || '';
      const opts = it.mcq.options || it.mcq.choices || [];
      const ans = it.mcq.answer || it.mcq.ans || it.mcq.correct || '';
      const exp = it.mcq.explanation || it.mcq.sol || '';
      if (q) {
        mcqHtml += `<div class="msc-checkpoint" style="margin-top: 16px; background: rgba(34, 197, 94, 0.05); border: 1px solid rgba(34, 197, 94, 0.2); border-left: 4px solid var(--success); padding: 14px 18px; border-radius: 8px;">`;
        mcqHtml += `<div style="font-weight: 600; color: var(--text-primary); margin-bottom: 8px;">Practice Question</div>`;
        mcqHtml += `<div style="color: var(--text-secondary); margin-bottom: 8px;">${q}</div>`;
        if (Array.isArray(opts) && opts.length) {
          mcqHtml += `<ul style="list-style:none;padding-left:0;margin-bottom:8px;">` + opts.map((o, oi) => `<li style="margin-bottom:4px;padding:4px 8px;border-radius:4px;background:var(--bg-tertiary);font-size:0.9rem;"><strong>(${String.fromCharCode(65 + oi)})</strong> ${o}</li>`).join('') + `</ul>`;
        }
        if (ans) mcqHtml += `<div style="font-size:0.88rem;color:var(--success);font-weight:bold;">✓ Correct Answer: ${ans}</div>`;
        if (exp) mcqHtml += `<div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;"><strong>Explanation:</strong> ${exp}</div>`;
        mcqHtml += `</div>`;
      }
    }
    block += `<div class="extracted-topic-module" style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 10px; padding: 20px 24px; margin: 18px 0;">\n` +
      `  <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);padding-bottom:10px;margin-bottom:14px;">\n` +
      `    <h4 style="margin:0;color:var(--text-primary);font-size:1.1rem;">${topicTitle}</h4>\n` +
      `    <span style="font-size:0.76rem;color:var(--text-muted);background:var(--bg-tertiary);padding:3px 10px;border-radius:12px;">${it.chapter || it.subject || 'Syllabus Archive'}</span>\n` +
      `  </div>\n` +
      `  <div style="color:var(--text-secondary);line-height:1.7;font-size:0.95rem;">${bodyText}${mcqHtml}</div>\n` +
      `</div>\n`;
  });
  ch.notes += block;
}
console.log(`✅ Recovered & injected ${recoveredNdb} additional modules from notes_database.json across ${Object.keys(recoveredByCh).length} chapters.`);

// =========================================================================
// PART 3: INGEST ssbcrack_gs_notes/*.html & extra_subjects_notes/*.html
// =========================================================================
console.log('\n[3] Ingesting ssbcrack_gs_notes/ & extra_subjects_notes/ ...');
const EXPLICIT_HTML_MAP = {
  // ssbcrack_gs_notes
  'acids-bases-salts.html': 'acids-bases',
  'atomic-structure-periodic.html': 'chem-atomic-quantum',
  'carbon-organic.html': 'chem-hydrocarbons-functional',
  'chemical-bonding.html': 'syl-numerical',
  'chemical-reactions.html': 'chem-equilibrium-kinetics',
  'everyday-chemistry.html': 'chemistry-everyday-fertilisers',
  'matter-states.html': 'chem-matter-separation',
  'metals-nonmetals.html': 'metals-alloys',
  'animal-kingdom.html': 'animal-kingdom',
  'cell-biology.html': 'cell-structure',
  'diseases-immunity.html': 'diseases',
  'ecology-environment.html': 'env-ecology-ecosystems',
  'human-circulatory-system.html': 'bio-respiratory-circulatory',
  'human-digestive-system.html': 'bio-digestive-nutrition',
  'human-endocrine-system.html': 'bio-endocrine-hormones',
  'human-excretory-system.html': 'bio-excretory-locomotion',
  'human-musculoskeletal.html': 'bio-excretory-locomotion',
  'human-nervous-system.html': 'bio-nervous-sensory',
  'human-nutrition.html': 'bio-digestive-nutrition',
  'human-respiratory-system.html': 'bio-respiratory-circulatory',
  'plant-kingdom.html': 'plant-kingdom',
  'reproduction-heredity.html': 'bio-genetics-biotech-evolution',
  'electricity-magnetism.html': 'physics-electricity-magnetism',
  'gravitation.html': 'physics-gravitation-satellites',
  'heat-thermodynamics.html': 'physics-thermodynamics-ktg',
  'laws-of-motion.html': 'newtons-laws',
  'light-optics.html': 'reflection-refraction',
  'modern-physics.html': 'physics-modern-photoelectric',
  'units-measurement.html': 'physics-units-everyday',
  'waves-sound.html': 'physics-sound',
  'work-energy-power.html': 'syl-exercises',
  // extra_subjects_notes
  'geo-physical-features.html': 'geo-india-physiography-himalayas',
  'geo-rivers-lakes.html': 'geo-india-drainage-himalayan',
  'hist-1857-revolt.html': 'revolt-1857',
  'hist-british-conquest.html': 'british-expansion',
  'hist-buddhism-jainism.html': 'buddhism-jainism',
  'hist-delhi-sultanate.html': 'delhi-sultanate',
  'hist-freedom-struggle.html': 'freedom-movement',
  'hist-gupta-age.html': 'gupta-period',
  'hist-independence.html': 'post-independence-consolidation',
  'hist-indus-valley.html': 'indus-valley-civilization',
  'hist-maratha-empire.html': 'marathas',
  'hist-mauryan-empire.html': 'mauryan-period',
  'hist-mughal-empire.html': 'mughal-empire',
  'hist-vedic-age.html': 'vedic-age'
};

function sanitizeExtractedHtml(html) {
  let body = html;
  const contentIdx = body.indexOf('<div class="content">');
  if (contentIdx !== -1) {
    body = body.slice(contentIdx + '<div class="content">'.length);
    const endMarker = body.lastIndexOf('<button class="print-btn"');
    if (endMarker !== -1) body = body.slice(0, endMarker);
    body = body.replace(/<\/div>\s*<\/div>\s*<\/body>[\s\S]*$/i, '').replace(/<\/div>\s*$/i, '');
  }
  // Remove leading h1 and boilerplate CHAPTER IMPORTANCE block
  body = body.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/i, '');
  body = body.replace(/<!--\s*1\.\s*CHAPTER IMPORTANCE\s*-->[\s\S]*?<\/table>/i, '');
  // Normalize light-mode inline styles to dark-theme safe colors
  body = body
    .replace(/background:\s*#f0f8ff;?/gi, 'background: rgba(56, 189, 248, 0.12);')
    .replace(/background:\s*#fff[a-f0-9]*;?/gi, 'background: rgba(255, 255, 255, 0.04);')
    .replace(/color:\s*#000000;?/gi, 'color: var(--text-primary);')
    .replace(/color:\s*#000;?/gi, 'color: var(--text-primary);')
    .replace(/color:\s*#333[333]*;?/gi, 'color: var(--text-secondary);');
  return body.trim();
}

let htmlIngested = 0;
for (const dir of ['ssbcrack_gs_notes', 'extra_subjects_notes']) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.html') || file === 'index.html') continue;
    const chId = EXPLICIT_HTML_MAP[file];
    if (!chId || !chById[chId]) continue;
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    const titleMatch = raw.match(/<title>(.*?)<\/title>/i);
    const niceTitle = (titleMatch ? titleMatch[1].replace(/\s*[—-]\s*Defence Exam Notes/i, '') : file.replace('.html', '')).trim();
    const cleaned = sanitizeExtractedHtml(raw);
    if (cleaned.length < 200) continue;
    if (appendModuleToChapter(chId, niceTitle, `${dir === 'ssbcrack_gs_notes' ? 'SSBCrack GS Compendium' : 'Curated Subject Reference'}`, cleaned, `INGEST_${dir}_${file}`)) {
      htmlIngested++;
    }
  }
}
console.log(`✅ Ingested ${htmlIngested} rich HTML reference files from ssbcrack_gs_notes/ & extra_subjects_notes/.`);

// =========================================================================
// PART 4: INGEST Pathfinder_Elite/modules/ (83 modules)
// =========================================================================
console.log('\n[4] Ingesting Pathfinder_Elite/modules/ ...');
const eliteMeta = JSON.parse(fs.readFileSync('Pathfinder_Elite/metadata.json', 'utf8'));
const ELITE_OVERRIDE_MAP = {
  'number-system': 'syl-numerical-ratios',
  'sequence-and-series': 'quadratic-eq',
  'hcf-and-lcm-of-numbers': 'syl-numerical-ratios',
  'decimal-fractions': 'syl-numerical-ratios',
  'square-roots-and-cube-roots': 'syl-numerical-ratios',
  'time-and-distance': 'time-distance',
  'time-and-work': 'time-distance',
  'percentage': 'percentages-profit-loss',
  'simple-interest': 'percentages-profit-loss',
  'compound-interest': 'percentages-profit-loss',
  'profit-and-loss': 'percentages-profit-loss',
  'ratio-and-proportion': 'ratios-averages',
  'logarithm': 'quadratic-eq',
  'algebraic-operations': 'quadratic-eq',
  'hcf-and-lcm-of-polynomials': 'quadratic-eq',
  'rational-expressions': 'quadratic-eq',
  'linear-equations': 'quadratic-eq',
  'quadratic-equations-and-inequalities': 'quadratic-eq',
  'set-theory': 'syl-probability',
  'measurements-of-angles-and-trigonometric-ratios': 'trig-identities',
  'height-and-distance': 'trig-identities',
  'lines-and-angles': 'lines-angles-triangles',
  'triangles': 'lines-angles-triangles',
  'quadrilateral-and-polygon': 'circles-polygons',
  'circle': 'circles-polygons',
  'area-and-perimeter-of-plane-figures': 'area-perimeter',
  'surface-area-and-volume-of-solids': 'surface-area-volume',
  'statistics': 'central-tendency',
  'spotting-the-errors': 'error-detection',
  'vocabulary': 'synonyms-antonyms-detailed',
  'synonyms': 'synonyms-antonyms-detailed',
  'antonyms': 'synonyms-antonyms-detailed',
  'idioms-and-phrases': 'idioms-phrases',
  'sentence-completion': 'fill-blanks-cloze',
  'sentence-improvement': 'sentence-improvement',
  'ordering-of-words-and-sentences': 'ordering-rearrangement',
  'comprehension': 'reading-comprehension',
  'measurement-motion-work-energy-and-power': 'physics-kinematics-projectiles',
  'rotational-motion-and-gravitation': 'physics-rotational-motion',
  'properties-of-matter': 'physics-properties-matter',
  'heat-and-thermodynamics': 'physics-thermodynamics-ktg',
  'oscillations-and-waves': 'physics-shm-waves',
  'optics': 'physics-optical-instruments',
  'electric-current': 'physics-current-circuits',
  'modern-physics': 'physics-modern-photoelectric',
  'master-question-core': null,
  'matter': 'chem-matter-separation',
  'atomic-structure': 'chem-atomic-quantum',
  'radioactivity': 'physics-nuclear-basics',
  'chemical-bonding-and-redox-reactions': 'chem-redox-electrochemistry',
  'gas-laws-and-solutions': 'chem-gas-laws-states',
  'acids-bases-and-salts': 'acids-bases',
  'chemical-thermodynamics-and-surface-chemistry': 'chem-thermodynamics-energetics',
  'electrochemistry': 'chem-redox-electrochemistry',
  'inorganic-chemistry': 'chem-p-d-block-coordination',
  'organic-chemistry': 'chem-hydrocarbons-functional',
  'man-made-materials': 'chem-biomolecules-polymers',
  'environment-and-its-pollution': 'environmental-chemistry',
  'cell-the-unit-of-life': 'cell-structure',
  'classification-of-plants-and-animals': 'bio-biological-classification',
  'genetics-and-molecular-biology-and-evolution-of-life': 'bio-genetics-biotech-evolution',
  'plant-morphology-and-physiology': 'bio-plant-morphology-anatomy',
  'animal-physiology': 'bio-respiratory-circulatory',
  'human-health-and-diseases': 'diseases',
  'applied-biology': 'bio-genetics-biotech-evolution',
  'ancient-india-core-and-mcqs': 'indus-valley-civilization',
  'medieval-india-sultanate-and-mcqs': 'delhi-sultanate',
  'modern-india-national-movement-and-mcqs': 'freedom-movement',
  'world-history-and-revision-mcqs': 'revolutions',
  'world-geography-cosmology': 'universe-solar-system',
  'indian-geography-resources': 'geo-india-minerals-energy-resources',
  'environmental-geography': 'env-ecology-ecosystems',
  'constitutional-framework-rights-and-mcqs': 'fundamental-rights',
  'union-executive-judiciary-and-mcqs': 'judiciary',
  'state-local-governance-and-master-mcqs': 'panchayati-raj',
  'macroeconomics-five-year-plans-and-mcqs': 'five-year-plans',
  'banking-inflation-public-finance-and-mcqs': 'econ-inflation-cycles',
  'economic-sectors-and-master-revision-mcqs': 'econ-concepts',
  'general-knowledge-static-review': 'ca-upsc-master-framework'
};

let eliteIngested = 0;
for (const mod of eliteMeta) {
  const fPath = path.join('Pathfinder_Elite', 'modules', mod.subject, mod.filename);
  if (!fs.existsSync(fPath)) continue;
  let targetChId = ELITE_OVERRIDE_MAP[mod.target_id];
  if (targetChId === undefined) {
    const subjHint = normSubject(mod.subject === 'Economy' ? 'economics' : (mod.subject === 'Current_Affairs' ? 'current-affairs' : mod.subject));
    targetChId = bestChapterMatch(subjHint, `${mod.topic_name} ${mod.target_id}`, 4);
  }
  if (!targetChId || !chById[targetChId]) continue;

  let mdText = fs.readFileSync(fPath, 'utf8');
  const practiceIdx = mdText.search(/\n\s*PRACTICE EXERCISE/i);
  if (practiceIdx !== -1) {
    mdText = mdText.slice(0, practiceIdx) + '\n</div>\n';
  }
  const htmlBody = marked.parse(mdText);
  const niceTitle = mod.topic_name.replace(/and MCQs|Revision MCQs|Core/gi, '').trim() + ' (Pathfinder Elite)';
  if (appendModuleToChapter(targetChId, niceTitle, 'Pathfinder Elite + Mermaid', htmlBody, `INGEST_ELITE_${mod.subject}_${mod.filename}`)) {
    eliteIngested++;
  }
}
console.log(`✅ Ingested ${eliteIngested} Pathfinder Elite modules.`);

// =========================================================================
// PART 5: INGEST pathfinder_chapters_clean/ (17 textbook files)
// =========================================================================
console.log('\n[5] Ingesting pathfinder_chapters_clean/ ...');
const CLEAN_TXT_MAP = {
  '01_Spotting_the_Errors.txt': { subj: 'english', defaultCh: 'error-detection' },
  '02_Vocabulary.txt': { subj: 'english', defaultCh: 'synonyms-antonyms-detailed' },
  '03_Synonyms.txt': { subj: 'english', defaultCh: 'synonyms-antonyms-detailed' },
  '04_Antonyms.txt': { subj: 'english', defaultCh: 'synonyms-antonyms-detailed' },
  '05_Idioms_and_Phrases.txt': { subj: 'english', defaultCh: 'idioms-phrases' },
  '06_Sentence_Completion.txt': { subj: 'english', defaultCh: 'fill-blanks-cloze' },
  '07_Sentence_Improvement.txt': { subj: 'english', defaultCh: 'sentence-improvement' },
  '08_Ordering_of_Words_and_Sentences.txt': { subj: 'english', defaultCh: 'ordering-rearrangement' },
  '09_Comprehension.txt': { subj: 'english', defaultCh: 'reading-comprehension' },
  '01_Physics.txt': { subj: 'physics', defaultCh: 'physics-units-everyday' },
  '02_Chemistry.txt': { subj: 'chemistry', defaultCh: 'chem-matter-separation' },
  '03_Biology.txt': { subj: 'biology', defaultCh: 'cell-structure' },
  '01_History.txt': { subj: 'history', defaultCh: 'sources-indian-history' },
  '02_Geography.txt': { subj: 'geography', defaultCh: 'universe-solar-system' },
  '03_Indian_Polity.txt': { subj: 'polity', defaultCh: 'polity-historical-making' },
  '04_Indian_Economy.txt': { subj: 'economics', defaultCh: 'econ-concepts' },
  '05_General_Knowledge.txt': { subj: 'current-affairs', defaultCh: 'ca-upsc-master-framework' }
};

let cleanTxtChunks = 0;
const cleanFiles = walkDir('pathfinder_chapters_clean').filter(p => p.endsWith('.txt'));
for (const fp of cleanFiles) {
  const base = path.basename(fp);
  const cfg = CLEAN_TXT_MAP[base];
  if (!cfg) continue;
  let raw = fs.readFileSync(fp, 'utf8');
  // Strip chunk markers and page headers
  raw = raw
    .replace(/--- Start of chunk_\d+\.txt ---/g, '\n')
    .replace(/CDS Pathfinder\s*\n\d+/g, '')
    .replace(/\r\n/g, '\n');

  // Group into ~3500 char blocks on paragraph boundaries
  const paras = raw.split(/\n{2,}/).map(p => p.trim()).filter(p => p.length > 40);
  let chunks = [];
  let buf = '';
  for (const p of paras) {
    if ((buf + '\n\n' + p).length > 3500 && buf.length > 1000) {
      chunks.push(buf);
      buf = p;
    } else {
      buf = buf ? buf + '\n\n' + p : p;
    }
  }
  if (buf.length > 300) chunks.push(buf);

  // Route each chunk to best matching chapter within that subject
  chunks.forEach((chunk, idx) => {
    const chId = bestChapterMatch(cfg.subj, chunk.slice(0, 600), 6) || cfg.defaultCh;
    if (!chById[chId]) return;
    const htmlChunk = chunk
      .split(/\n{2,}/)
      .map(p => `<p style="margin-bottom: 10px;">${p.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>')}</p>`)
      .join('\n');
    const firstLine = chunk.split('\n')[0].slice(0, 60).replace(/</g, '&lt;');
    if (appendModuleToChapter(chId, `CDS Pathfinder Extract: ${firstLine}`, 'Pathfinder Textbook', htmlChunk, `INGEST_CLEAN_${base}_${idx}`)) {
      cleanTxtChunks++;
    }
  });
}
console.log(`✅ Ingested ${cleanTxtChunks} textbook extract modules from pathfinder_chapters_clean/.`);

// Write final updated ai_generated_notes.js & public/ai_generated_notes.js
const outAi = `// AI_GENERATED_NOTES — Master Synthesized Compendium for Jayastra\n// Canonical Knowledge Base for Defence Examinations Revision (302 Granular Chapters)\n\nconst AI_GENERATED_NOTES = ${JSON.stringify(AI_GENERATED_NOTES, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.AI_GENERATED_NOTES = AI_GENERATED_NOTES;\n}\nif (typeof module !== 'undefined') {\n  module.exports = { AI_GENERATED_NOTES };\n}\n`;

function safeWrite(filepath, text, chunkSize = 2 * 1024 * 1024) {
  const fd = fs.openSync(filepath, 'w');
  for (let i = 0; i < text.length; i += chunkSize) {
    fs.writeSync(fd, text.slice(i, i + chunkSize), null, 'utf8');
  }
  fs.closeSync(fd);
}

safeWrite('ai_generated_notes.js', outAi);
safeWrite('public/ai_generated_notes.js', outAi);

const totalChars = AI_GENERATED_NOTES.reduce((acc, c) => acc + (c.notes || '').length, 0);
const stillUnder50k = AI_GENERATED_NOTES.filter(c => (c.notes || '').length < 50000);
console.log(`\n=== TRACK 2 COMPLETE ===`);
console.log(`Total Chapters: ${AI_GENERATED_NOTES.length}`);
console.log(`Total Compendium Volume: ${totalChars.toLocaleString()} chars (~${Math.round(totalChars / 6).toLocaleString()} words)`);
console.log(`Chapters currently under 50k chars (ready for Track 1+4 AI Masterclass generation): ${stillUnder50k.length}`);
