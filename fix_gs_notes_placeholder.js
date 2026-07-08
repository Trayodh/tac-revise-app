/**
 * fix_gs_notes_placeholder.js
 * Adds the required "notes" placeholder field to all GS and extra subject 
 * topics in data.js so the app correctly loads from EXPANDED_NOTES_DATA
 */
const fs = require('fs');

const PLACEHOLDER = 'Detailed notes expanded in EXPANDED_NOTES_DATA';

// All topic IDs that need the placeholder
const TOPIC_IDS = [
  // GS Biology
  'gs-cell-biology', 'gs-human-nutrition', 'gs-digestive-system',
  'gs-circulatory-system', 'gs-respiratory-system', 'gs-nervous-system',
  'gs-endocrine-system', 'gs-excretory-system', 'gs-musculoskeletal',
  'gs-reproduction-heredity', 'gs-diseases-immunity', 'gs-plant-kingdom',
  'gs-animal-kingdom', 'gs-ecology-environment',
  // GS Physics
  'gs-units-measurement', 'gs-laws-of-motion', 'gs-work-energy-power',
  'gs-gravitation', 'gs-heat-thermodynamics', 'gs-waves-sound',
  'gs-light-optics', 'gs-electricity-magnetism', 'gs-modern-physics',
  // GS Chemistry
  'gs-matter-states', 'gs-atomic-structure-periodic', 'gs-chemical-bonding',
  'gs-chemical-reactions', 'gs-acids-bases-salts', 'gs-metals-nonmetals',
  'gs-carbon-organic', 'gs-everyday-chemistry',
  // History
  'hist-indus-valley', 'hist-vedic-age', 'hist-buddhism-jainism',
  'hist-mauryan-empire', 'hist-gupta-age', 'hist-delhi-sultanate',
  'hist-mughal-empire', 'hist-maratha-empire', 'hist-british-conquest',
  'hist-1857-revolt', 'hist-freedom-struggle', 'hist-independence',
  // Geography
  'geo-physical-features', 'geo-rivers-lakes', 'geo-climate-seasons',
  'geo-soils-agriculture', 'geo-forests-wildlife', 'geo-minerals-industries',
  'geo-transport-trade', 'geo-world-physical', 'geo-world-climate',
  // Polity
  'pol-constitution-making', 'pol-fundamental-rights', 'pol-dpsp-duties',
  'pol-parliament', 'pol-president-pm', 'pol-judiciary',
  'pol-federalism', 'pol-elections-evm',
  // Economics
  'eco-gdp-national-income', 'eco-banking-rbi', 'eco-budget-fiscal',
  'eco-trade-forex', 'eco-govt-schemes',
];

let data = fs.readFileSync('data.js', 'utf8');
let fixedCount = 0;

for (const id of TOPIC_IDS) {
  // Match:  { "id": "gs-cell-biology", "title": "..." }
  // Replace with: { "id": "gs-cell-biology", "title": "...", "notes": "Detailed notes..." }
  const pattern = new RegExp(
    `(\\{\\s*"id"\\s*:\\s*"${id}"\\s*,\\s*"title"\\s*:\\s*"[^"]*")(\\s*\\})`,
    'g'
  );
  
  if (pattern.test(data)) {
    // Already has notes? Skip
    const checkPattern = new RegExp(`"id"\\s*:\\s*"${id}"[\\s\\S]{0,200}"notes"`);
    if (checkPattern.test(data)) {
      console.log(`  SKIP (already has notes): ${id}`);
      continue;
    }
    
    // Reset lastIndex after test()
    pattern.lastIndex = 0;
    const newData = data.replace(pattern, `$1, "notes": "${PLACEHOLDER}"$2`);
    if (newData !== data) {
      data = newData;
      fixedCount++;
      console.log(`✅ Fixed: ${id}`);
    } else {
      console.log(`⚠️  No match for: ${id}`);
    }
  } else {
    console.log(`⚠️  ID not found in data.js: ${id}`);
  }
}

fs.writeFileSync('data.js', data, 'utf8');
console.log(`\n✅ Done! Fixed ${fixedCount} topics. data.js = ${Math.round(fs.statSync('data.js').size/1024)}KB`);
