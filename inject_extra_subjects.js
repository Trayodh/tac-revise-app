/**
 * inject_extra_subjects.js
 * Reads all generated extra_subjects_notes HTML files and appends them
 * to notes_extra_gs_ssbcrack.js so the app can load them.
 * Also adds History/Geography/Polity/Economics subjects to NOTES_DATABASE in data.js
 */
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'extra_subjects_notes');
const NOTES_JS_FILE = path.join(__dirname, 'notes_extra_gs_ssbcrack.js');
const DATA_FILE = path.join(__dirname, 'data.js');
const PLACEHOLDER = 'Detailed notes expanded in EXPANDED_NOTES_DATA';

// All extra subject chapters with their metadata
const CHAPTERS = [
  // History
  { id: 'hist-indus-valley', file: 'hist-indus-valley.html', subject: 'Indian History', chapter: 'Ancient India' },
  { id: 'hist-vedic-age', file: 'hist-vedic-age.html', subject: 'Indian History', chapter: 'Ancient India' },
  { id: 'hist-buddhism-jainism', file: 'hist-buddhism-jainism.html', subject: 'Indian History', chapter: 'Ancient India' },
  { id: 'hist-mauryan-empire', file: 'hist-mauryan-empire.html', subject: 'Indian History', chapter: 'Ancient India' },
  { id: 'hist-gupta-age', file: 'hist-gupta-age.html', subject: 'Indian History', chapter: 'Ancient India' },
  { id: 'hist-delhi-sultanate', file: 'hist-delhi-sultanate.html', subject: 'Indian History', chapter: 'Medieval India' },
  { id: 'hist-mughal-empire', file: 'hist-mughal-empire.html', subject: 'Indian History', chapter: 'Medieval India' },
  { id: 'hist-maratha-empire', file: 'hist-maratha-empire.html', subject: 'Indian History', chapter: 'Medieval India' },
  { id: 'hist-british-conquest', file: 'hist-british-conquest.html', subject: 'Indian History', chapter: 'Modern India' },
  { id: 'hist-1857-revolt', file: 'hist-1857-revolt.html', subject: 'Indian History', chapter: 'Modern India' },
  { id: 'hist-freedom-struggle', file: 'hist-freedom-struggle.html', subject: 'Indian History', chapter: 'Modern India' },
  { id: 'hist-independence', file: 'hist-independence.html', subject: 'Indian History', chapter: 'Modern India' },
  // Geography
  { id: 'geo-physical-features', file: 'geo-physical-features.html', subject: 'Indian Geography', chapter: 'Indian Geography' },
  { id: 'geo-rivers-lakes', file: 'geo-rivers-lakes.html', subject: 'Indian Geography', chapter: 'Indian Geography' },
  { id: 'geo-climate-seasons', file: 'geo-climate-seasons.html', subject: 'Indian Geography', chapter: 'Indian Geography' },
  { id: 'geo-soils-agriculture', file: 'geo-soils-agriculture.html', subject: 'Indian Geography', chapter: 'Indian Geography' },
  { id: 'geo-forests-wildlife', file: 'geo-forests-wildlife.html', subject: 'Indian Geography', chapter: 'Indian Geography' },
  { id: 'geo-minerals-industries', file: 'geo-minerals-industries.html', subject: 'Indian Geography', chapter: 'Indian Geography' },
  { id: 'geo-transport-trade', file: 'geo-transport-trade.html', subject: 'Indian Geography', chapter: 'World Geography' },
  { id: 'geo-world-physical', file: 'geo-world-physical.html', subject: 'Indian Geography', chapter: 'World Geography' },
  { id: 'geo-world-climate', file: 'geo-world-climate.html', subject: 'Indian Geography', chapter: 'World Geography' },
  // Polity
  { id: 'pol-constitution-making', file: 'pol-constitution-making.html', subject: 'Indian Polity', chapter: 'Constitution' },
  { id: 'pol-fundamental-rights', file: 'pol-fundamental-rights.html', subject: 'Indian Polity', chapter: 'Rights & Duties' },
  { id: 'pol-dpsp-duties', file: 'pol-dpsp-duties.html', subject: 'Indian Polity', chapter: 'Rights & Duties' },
  { id: 'pol-parliament', file: 'pol-parliament.html', subject: 'Indian Polity', chapter: 'Governance' },
  { id: 'pol-president-pm', file: 'pol-president-pm.html', subject: 'Indian Polity', chapter: 'Governance' },
  { id: 'pol-judiciary', file: 'pol-judiciary.html', subject: 'Indian Polity', chapter: 'Judiciary' },
  { id: 'pol-federalism', file: 'pol-federalism.html', subject: 'Indian Polity', chapter: 'Governance' },
  { id: 'pol-elections-evm', file: 'pol-elections-evm.html', subject: 'Indian Polity', chapter: 'Elections' },
  // Economics
  { id: 'eco-gdp-national-income', file: 'eco-gdp-national-income.html', subject: 'Economics', chapter: 'Indian Economy' },
  { id: 'eco-banking-rbi', file: 'eco-banking-rbi.html', subject: 'Economics', chapter: 'Banking' },
  { id: 'eco-budget-fiscal', file: 'eco-budget-fiscal.html', subject: 'Economics', chapter: 'Indian Economy' },
  { id: 'eco-trade-forex', file: 'eco-trade-forex.html', subject: 'Economics', chapter: 'Trade' },
  { id: 'eco-govt-schemes', file: 'eco-govt-schemes.html', subject: 'Economics', chapter: 'Indian Economy' },
];

// --- STEP 1: Inject HTML content into notes_extra_gs_ssbcrack.js ---
console.log('\n📝 Step 1: Injecting chapter HTML into notes JS file...');
let injected = 0;
let notesContent = fs.readFileSync(NOTES_JS_FILE, 'utf8');

for (const ch of CHAPTERS) {
  // Skip if already injected
  if (notesContent.includes(`window.EXPANDED_NOTES_DATA["${ch.id}"]`)) {
    console.log(`  SKIP (already injected): ${ch.id}`);
    continue;
  }

  const filePath = path.join(INPUT_DIR, ch.file);
  if (!fs.existsSync(filePath)) {
    console.log(`  MISSING (not generated yet): ${ch.file}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');
  // Extract body content only
  const bodyMatch = html.match(/<div class="content">([\s\S]*?)<\/div>\s*<\/div>\s*<button/);
  let content = bodyMatch ? bodyMatch[1].trim() : html
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<button[\s\S]*?<\/button>/gi, '')
    .replace(/<\/?html[^>]*>/gi, '')
    .replace(/<\/?body[^>]*>/gi, '')
    .trim();

  const escaped = content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  const entry = `\nwindow.EXPANDED_NOTES_DATA["${ch.id}"] = \`\n${escaped}\n\`;\n`;
  fs.appendFileSync(NOTES_JS_FILE, entry, 'utf8');
  injected++;
  console.log(`  ✅ Injected: ${ch.id}`);
}
console.log(`  → ${injected} chapters injected into notes JS\n`);

// --- STEP 2: Add subjects to NOTES_DATABASE in data.js ---
console.log('📊 Step 2: Adding subjects to data.js NOTES_DATABASE...');

// Build the subjects block with topics (only those that exist as HTML)
const topicsAvailable = CHAPTERS.filter(ch => fs.existsSync(path.join(INPUT_DIR, ch.file)));

// Group by subject
const subjectMap = {};
for (const ch of topicsAvailable) {
  if (!subjectMap[ch.subject]) subjectMap[ch.subject] = {};
  if (!subjectMap[ch.subject][ch.chapter]) subjectMap[ch.subject][ch.chapter] = [];
  subjectMap[ch.subject][ch.chapter].push(ch);
}

let dataContent = fs.readFileSync(DATA_FILE, 'utf8');
let subjectsAdded = 0;

// Subject key mapping
const subjectKeys = {
  'Indian History': 'premium-history',
  'Indian Geography': 'premium-geography',
  'Indian Polity': 'premium-polity',
  'Economics': 'premium-economics'
};

const subjectTitles = {
  'Indian History': 'Indian History (CDS/NDA/AFCAT)',
  'Indian Geography': 'Indian Geography (CDS/NDA/AFCAT)',
  'Indian Polity': 'Indian Polity & Governance (CDS)',
  'Economics': 'Indian Economy & Economics (CDS)'
};

for (const [subjectName, chapters] of Object.entries(subjectMap)) {
  const key = subjectKeys[subjectName];
  if (!key) continue;

  // Skip if already in data.js
  if (dataContent.includes(`"${key}"`)) {
    console.log(`  SKIP (already in data.js): ${key}`);
    continue;
  }

  const chaptersArray = Object.entries(chapters).map(([chapterName, topics]) => {
    const topicsArr = topics.map(t => {
      const title = t.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        .replace('Hist ', '').replace('Geo ', '').replace('Pol ', '').replace('Eco ', '');
      return `{ "id": "${t.id}", "title": "${t.id.split('-').slice(1).join(' ').replace(/\b\w/g, l => l.toUpperCase())}", "notes": "${PLACEHOLDER}" }`;
    }).join(',\n          ');
    return `{
        "id": "${key}-${chapterName.toLowerCase().replace(/\s+/g, '-')}",
        "title": "${chapterName}",
        "topics": [
          ${topicsArr}
        ]
      }`;
  }).join(',\n      ');

  const subjectBlock = `,\n  "${key}": {\n    "title": "${subjectTitles[subjectName]}",\n    "chapters": [\n      ${chaptersArray}\n    ]\n  }`;

  // Insert before closing }; of NOTES_DATABASE (line ~9005)
  const notesDbEnd = dataContent.indexOf('\n};\n\nconst CBT_EXAMS_DATABASE');
  if (notesDbEnd === -1) {
    console.error('Could not find NOTES_DATABASE closing!');
    continue;
  }
  dataContent = dataContent.slice(0, notesDbEnd) + subjectBlock + dataContent.slice(notesDbEnd);
  subjectsAdded++;
  console.log(`  ✅ Added subject: ${key}`);
}

fs.writeFileSync(DATA_FILE, dataContent, 'utf8');
console.log(`  → ${subjectsAdded} subjects added to data.js\n`);

console.log(`🎉 All done! data.js = ${Math.round(fs.statSync(DATA_FILE).size/1024)}KB`);
