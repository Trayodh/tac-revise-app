/**
 * Phase 1 v2: Refined Deep Gap Analysis
 * Accurately measures content depth per topic by scanning EXPANDED_NOTES_DATA entries
 * and the main data structures for actual word counts.
 */

const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

console.log('\n═══════════════════════════════════════════════════════════');
console.log('  PHASE 1 v2: REFINED GAP ANALYSIS');
console.log('═══════════════════════════════════════════════════════════\n');

// ─── 1. Load Syllabus Topics ─────────────────────────────────────────────────
const syllabusRaw = fs.readFileSync(path.join(ROOT, 'syllabus_data.js'), 'utf-8');
const syllabusTopics = {};
const keyValRegex = /^\s*"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/gm;
let m;
while ((m = keyValRegex.exec(syllabusRaw)) !== null) {
  syllabusTopics[m[1]] = m[2].replace(/\\"/g, '"');
}

function extractExams(text) {
  const e = [];
  if (/NDA/i.test(text)) e.push('NDA');
  if (/CDS/i.test(text)) e.push('CDS');
  if (/AFCAT/i.test(text)) e.push('AFCAT');
  return e.length ? e : ['ALL'];
}

function categorize(id) {
  id = id.toLowerCase();
  if (/trig|quadratic|complex|straight|central-tendency|data-interp|limits|differentiation|integration|matrices|syl-matrices|syl-probability|lines-angles|circles-polygon|area-perim|surface-area|percent|ratios-averages|time-dist|syl-numerical-speed|syl-numerical-ratios/.test(id)) return 'Mathematics';
  if (/parts-of-speech|tenses|subject-verb|sentence-structure|voice|narration|modifier|punctuation|transform|synonym|antonym|one-word|idiom|phrasal|reading-comp|error|fill-blank|cloze|ordering/.test(id)) return 'English';
  if (/what-is-history|sources-indian|dating|stone-age|chalcolithic|rock-art|indus|vedic|mahajanapada|magadha|buddhism|jainism|mauryan|post-mauryan|gupta|south-indian|ancient-indian|early-medieval|delhi-sultan|vijayanagara|bahmani|mughal|maratha|bhakti|sufi|sikh|european-arrival|british-expansion|economic-impact|socio-religious|revolt|governor|constitutional-dev|freedom|post-independence|revolution|world-war|interwar|cold-war|international-inst|architecture|painting|dance|literature|religion|heritage|history-pyq/.test(id)) return 'History & Culture';
  if (/universe|earth-atmo|climatol|geomorphol|world-geog|syl-geog|india-forest|india-resource|india-transport|india-national-park|mapping|geog-ind|geog-geo|geography-pyq/.test(id)) return 'Geography';
  if (/preamble|schedule|fundamental|dpsp|citizenship|president|parliament|goverment|judiciary|panchayat|amendment|important-article|position|constitutional-bod|governance|polity|rpa/.test(id)) return 'Polity';
  if (/econ|rbi|five-year|external-sector/.test(id)) return 'Economics';
  if (/reflection|refraction|newton|syl-exercise|physics|sound|em-wave|heat|electricity|magnetism|nuclear|units-everyday/.test(id)) return 'Physics';
  if (/acids|bases|metals-alloy|reactivity|carbon-compound|chemistry|syl-numerical$/.test(id)) return 'Chemistry';
  if (/cell-structure|human-system|disease|immunity|vaccine|plant-kingdom|animal-kingdom|plant-repro|biology/.test(id)) return 'Biology';
  if (/rank|command|defence-org|bilateral|missile/.test(id)) return 'Defence & Military';
  if (/^env-/.test(id)) return 'Environment & Ecology';
  if (/afcat-r|syl-verbal|syl-nonverbal|syl-afcat/.test(id)) return 'Reasoning & Aptitude';
  if (/^ca-/.test(id)) return 'Current Affairs';
  return 'General Knowledge';
}

const topicIds = Object.keys(syllabusTopics);
console.log(`📋 Syllabus topics: ${topicIds.length}\n`);

// ─── 2. Measure EXPANDED_NOTES_DATA word counts ─────────────────────────────
// These are the actual detailed notes stored per topic
const expandedFiles = [
  'notes_generated.js', 'notes_extra_history.js', 'notes_generated_1000w.js',
  'notes_extra_history_1000w.js', 'notes_extra_history_upgraded.js',
  'notes_generated_upgraded.js', 'notes_extra.js', 'notes_extra_upgraded.js',
  'notes_generated_polity.js', 'notes_generated_geography.js', 'notes_generated_economics.js',
  'notes_generated_science.js', 'notes_generated_defence_env.js', 'notes_generated_batch6.js',
  'notes_generated_final_patch.js'
];

// Map: topicId -> { wordCount, hasExpanded, expandedKeys }
const topicMetrics = {};

for (const topicId of topicIds) {
  topicMetrics[topicId] = { wordCount: 0, hasExpanded: false, expandedKeys: [], foundIn: [] };
}

// Scan expanded notes files for exact topic key matches
for (const file of expandedFiles) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract all EXPANDED_NOTES_DATA blocks
  const blockRegex = /EXPANDED_NOTES_DATA\["([^"]+)"\]\s*=\s*(?:String\.raw)?[`"]([\s\S]*?)(?:[`"]\s*;)/g;
  let block;
  while ((block = blockRegex.exec(content)) !== null) {
    const key = block[1];
    const html = block[2];
    const plainText = html.replace(/<[^>]+>/g, ' ').replace(/\\n/g, ' ').replace(/&[a-z]+;/g, ' ');
    const words = plainText.split(/\s+/).filter(w => w.length > 1).length;
    
    // Match this expanded key to a syllabus topic
    for (const topicId of topicIds) {
      // Exact match
      if (key === topicId || key.toLowerCase() === topicId.toLowerCase()) {
        topicMetrics[topicId].wordCount += words;
        topicMetrics[topicId].hasExpanded = true;
        topicMetrics[topicId].expandedKeys.push(`${key} (${file})`);
        if (!topicMetrics[topicId].foundIn.includes(file))
          topicMetrics[topicId].foundIn.push(file);
      }
    }
  }
}

// ─── 3. Scan the main data files for topic references and content ────────────
const mainFiles = ['notes_data.js', 'data.js', 'notes_data_exam_focused.js', 'notes_data_upgraded.js'];

for (const file of mainFiles) {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) continue;
  
  const content = fs.readFileSync(filePath, 'utf-8');
  
  for (const topicId of topicIds) {
    const escaped = topicId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Check for the topic ID as a key/reference
    if (new RegExp(`["']${escaped}["']`, 'i').test(content)) {
      if (!topicMetrics[topicId].foundIn.includes(file))
        topicMetrics[topicId].foundIn.push(file);
    }
  }
}

// ─── 4. PYQ Priority ────────────────────────────────────────────────────────
const pyqRaw = fs.readFileSync(path.join(ROOT, 'pyq_trends.js'), 'utf-8');
const pyqTopics = {};
const pyqKV = /^\s*"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/gm;
let pm;
while ((pm = pyqKV.exec(pyqRaw)) !== null) {
  pyqTopics[pm[1]] = pm[2];
}

function pyqPriority(topicId) {
  const t = (pyqTopics[topicId] || '').toLowerCase();
  if (!t) return { label: '❓ No PYQ Data', score: 0 };
  if (/high frequency|high weightage|critical|consistently|staple|heavy emphasis|most critical|perennial|dominate|core pillar|high-frequency/.test(t)) return { label: '🔥 HIGH', score: 3 };
  if (/moderate|medium|consistent|recurring|shift toward|increased/.test(t)) return { label: '⚡ MEDIUM', score: 2 };
  return { label: '📝 LOW', score: 1 };
}

// ─── 5. Classify ─────────────────────────────────────────────────────────────
const missing = [];
const thin = [];
const moderate = [];
const adequate = [];

for (const topicId of topicIds) {
  const m = topicMetrics[topicId];
  const wc = m.wordCount;
  const exams = extractExams(syllabusTopics[topicId]);
  const cat = categorize(topicId);
  const pyq = pyqPriority(topicId);
  const hasPyq = !!pyqTopics[topicId];
  
  const entry = {
    topicId, category: cat, exams: exams.join('/'), 
    wordCount: wc, hasExpanded: m.hasExpanded,
    filesFound: m.foundIn.length, fileList: m.foundIn.join(', '),
    pyq: pyq.label, pyqScore: pyq.score, hasPyqTrend: hasPyq,
  };
  
  if (!m.hasExpanded && wc === 0) {
    missing.push(entry);
  } else if (wc < 500) {
    thin.push(entry);
  } else if (wc < 1500) {
    moderate.push(entry);
  } else {
    adequate.push(entry);
  }
}

// Sort by PYQ priority (highest first)
const sortFn = (a, b) => b.pyqScore - a.pyqScore || a.category.localeCompare(b.category);
missing.sort(sortFn);
thin.sort(sortFn);

// ─── 6. Category Summary ────────────────────────────────────────────────────
const catSum = {};
for (const topicId of topicIds) {
  const cat = categorize(topicId);
  if (!catSum[cat]) catSum[cat] = { total: 0, missing: 0, thin: 0, moderate: 0, adequate: 0 };
  catSum[cat].total++;
  const m = topicMetrics[topicId];
  if (!m.hasExpanded && m.wordCount === 0) catSum[cat].missing++;
  else if (m.wordCount < 500) catSum[cat].thin++;
  else if (m.wordCount < 1500) catSum[cat].moderate++;
  else catSum[cat].adequate++;
}

// ─── 7. Print Report ────────────────────────────────────────────────────────
console.log('╔═══════════════════════════════════════════════════════════════════════╗');
console.log('║                  CATEGORY-WISE COVERAGE DASHBOARD                    ║');
console.log('╠══════════════════════════╦═══════╦════════╦════════╦════════╦════════╣');
console.log('║  Category                ║ Total ║ 🔴Miss ║ 🟡Thin ║ 🟠Mod  ║ 🟢Full ║');
console.log('╠══════════════════════════╬═══════╬════════╬════════╬════════╬════════╣');
for (const [cat, s] of Object.entries(catSum).sort((a,b) => (b[1].missing + b[1].thin) - (a[1].missing + a[1].thin))) {
  const pct = ((s.adequate / s.total) * 100).toFixed(0);
  console.log(`║  ${cat.padEnd(24)} ║ ${String(s.total).padStart(5)} ║ ${String(s.missing).padStart(6)} ║ ${String(s.thin).padStart(6)} ║ ${String(s.moderate).padStart(6)} ║ ${String(s.adequate).padStart(6)} ║`);
}
console.log('╚══════════════════════════╩═══════╩════════╩════════╩════════╩════════╝\n');

console.log(`\n🔴 MISSING TOPICS — No Expanded Notes (${missing.length} topics)\n${'─'.repeat(60)}`);
for (const t of missing) {
  console.log(`  ${t.pyq.padEnd(12)} [${t.category}]  ${t.topicId}`);
  console.log(`              Exams: ${t.exams} | Referenced in: ${t.filesFound} files`);
}

console.log(`\n\n🟡 THIN TOPICS — Under 500 words (${thin.length} topics)\n${'─'.repeat(60)}`);
for (const t of thin) {
  console.log(`  ${t.pyq.padEnd(12)} [${t.category}]  ${t.topicId}  (~${t.wordCount}w)`);
}

console.log(`\n\n🟠 MODERATE — 500-1500 words (${moderate.length} topics)\n${'─'.repeat(60)}`);
for (const t of moderate) {
  console.log(`  ${t.pyq.padEnd(12)} [${t.category}]  ${t.topicId}  (~${t.wordCount}w)`);
}

console.log(`\n\n🟢 ADEQUATE — 1500+ words (${adequate.length} topics)\n${'─'.repeat(60)}`);
for (const t of adequate) {
  console.log(`  ${t.pyq.padEnd(12)} [${t.category}]  ${t.topicId}  (~${t.wordCount}w)`);
}

// ─── 8. Save JSON + Summary ─────────────────────────────────────────────────
const report = {
  generatedAt: new Date().toISOString(),
  executive: {
    totalTopics: topicIds.length,
    missing: missing.length,
    thin: thin.length,
    moderate: moderate.length,
    adequate: adequate.length,
    overallCoverage: (((moderate.length + adequate.length) / topicIds.length) * 100).toFixed(1) + '%',
    deepCoverage: ((adequate.length / topicIds.length) * 100).toFixed(1) + '%',
  },
  categorySummary: catSum,
  actionPlan: {
    priority1_highPyq_missing: missing.filter(t => t.pyqScore >= 2).map(t => t.topicId),
    priority2_highPyq_thin: thin.filter(t => t.pyqScore >= 2).map(t => t.topicId),
    priority3_remaining_missing: missing.filter(t => t.pyqScore < 2).map(t => t.topicId),
    priority4_remaining_thin: thin.filter(t => t.pyqScore < 2).map(t => t.topicId),
  },
  missingTopics: missing,
  thinTopics: thin,
  moderateTopics: moderate,
  adequateTopics: adequate,
};

fs.writeFileSync(path.join(ROOT, 'gap_analysis_report.json'), JSON.stringify(report, null, 2));

console.log(`\n\n${'═'.repeat(60)}`);
console.log(`  📊 EXECUTIVE SUMMARY`);
console.log(`${'═'.repeat(60)}`);
console.log(`  Total Syllabus Topics:     ${report.executive.totalTopics}`);
console.log(`  🔴 Missing (no notes):     ${report.executive.missing}`);
console.log(`  🟡 Thin (< 500 words):     ${report.executive.thin}`);
console.log(`  🟠 Moderate (500-1500w):   ${report.executive.moderate}`);
console.log(`  🟢 Adequate (1500+ words): ${report.executive.adequate}`);
console.log(`  📈 Overall Coverage:       ${report.executive.overallCoverage}`);
console.log(`  🎯 Deep Coverage:          ${report.executive.deepCoverage}`);
console.log(`${'═'.repeat(60)}`);
console.log(`\n  🚨 ACTION PRIORITIES:`);
console.log(`  P1 (High PYQ + Missing):  ${report.actionPlan.priority1_highPyq_missing.length} topics`);
console.log(`  P2 (High PYQ + Thin):     ${report.actionPlan.priority2_highPyq_thin.length} topics`);
console.log(`  P3 (Other Missing):       ${report.actionPlan.priority3_remaining_missing.length} topics`);
console.log(`  P4 (Other Thin):          ${report.actionPlan.priority4_remaining_thin.length} topics`);
console.log(`\n✅ Full report: gap_analysis_report.json\n`);
