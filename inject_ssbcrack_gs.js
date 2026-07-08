/**
 * inject_ssbcrack_gs.js
 * Reads all generated ssbcrack_gs_notes HTML files and injects them
 * into a new notes_extra_gs_ssbcrack.js file for the app to load.
 */
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'ssbcrack_gs_notes');
const OUTPUT_FILE = path.join(__dirname, 'notes_extra_gs_ssbcrack.js');

const chapters = [
  // Biology
  { id: 'gs-cell-biology', file: 'cell-biology.html' },
  { id: 'gs-human-nutrition', file: 'human-nutrition.html' },
  { id: 'gs-digestive-system', file: 'human-digestive-system.html' },
  { id: 'gs-circulatory-system', file: 'human-circulatory-system.html' },
  { id: 'gs-respiratory-system', file: 'human-respiratory-system.html' },
  { id: 'gs-nervous-system', file: 'human-nervous-system.html' },
  { id: 'gs-endocrine-system', file: 'human-endocrine-system.html' },
  { id: 'gs-excretory-system', file: 'human-excretory-system.html' },
  { id: 'gs-musculoskeletal', file: 'human-musculoskeletal.html' },
  { id: 'gs-reproduction-heredity', file: 'reproduction-heredity.html' },
  { id: 'gs-diseases-immunity', file: 'diseases-immunity.html' },
  { id: 'gs-plant-kingdom', file: 'plant-kingdom.html' },
  { id: 'gs-animal-kingdom', file: 'animal-kingdom.html' },
  { id: 'gs-ecology-environment', file: 'ecology-environment.html' },
  // Physics
  { id: 'gs-units-measurement', file: 'units-measurement.html' },
  { id: 'gs-laws-of-motion', file: 'laws-of-motion.html' },
  { id: 'gs-work-energy-power', file: 'work-energy-power.html' },
  { id: 'gs-gravitation', file: 'gravitation.html' },
  { id: 'gs-heat-thermodynamics', file: 'heat-thermodynamics.html' },
  { id: 'gs-waves-sound', file: 'waves-sound.html' },
  { id: 'gs-light-optics', file: 'light-optics.html' },
  { id: 'gs-electricity-magnetism', file: 'electricity-magnetism.html' },
  { id: 'gs-modern-physics', file: 'modern-physics.html' },
  // Chemistry
  { id: 'gs-matter-states', file: 'matter-states.html' },
  { id: 'gs-atomic-structure-periodic', file: 'atomic-structure-periodic.html' },
  { id: 'gs-chemical-bonding', file: 'chemical-bonding.html' },
  { id: 'gs-chemical-reactions', file: 'chemical-reactions.html' },
  { id: 'gs-acids-bases-salts', file: 'acids-bases-salts.html' },
  { id: 'gs-metals-nonmetals', file: 'metals-nonmetals.html' },
  { id: 'gs-carbon-organic', file: 'carbon-organic.html' },
  { id: 'gs-everyday-chemistry', file: 'everyday-chemistry.html' },
];

// Initialize the output file
fs.writeFileSync(OUTPUT_FILE, `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`, 'utf8');

let successCount = 0;
for (const ch of chapters) {
  const filePath = path.join(INPUT_DIR, ch.file);
  if (!fs.existsSync(filePath)) {
    console.log(`MISSING: ${ch.file}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Extract just the content div (between <div class="content"> and the closing </div>)
  // to avoid injecting the full HTML boilerplate (head/body etc.)
  const contentMatch = html.match(/<div class="content">([\s\S]*?)<\/div>\s*<\/div>\s*<button/);
  let content = contentMatch ? contentMatch[1].trim() : html;

  // If extraction failed, strip HTML head/body wrappers manually
  if (!contentMatch) {
    content = html
      .replace(/<!DOCTYPE[^>]*>/gi, '')
      .replace(/<html[^>]*>/gi, '').replace(/<\/html>/gi, '')
      .replace(/<head[\s\S]*?<\/head>/gi, '')
      .replace(/<body[^>]*>/gi, '').replace(/<\/body>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<button[^>]*>[\s\S]*?<\/button>/gi, '')
      .trim();
  }

  // Escape for JS template literal
  const escaped = content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');

  const entry = `window.EXPANDED_NOTES_DATA["${ch.id}"] = \`\n${escaped}\n\`;\n\n`;
  fs.appendFileSync(OUTPUT_FILE, entry, 'utf8');
  
  const sizeKB = Math.round(Buffer.byteLength(escaped, 'utf8') / 1024);
  console.log(`✅ Injected ${ch.id} (${sizeKB}KB)`);
  successCount++;
}

const totalKB = Math.round(fs.statSync(OUTPUT_FILE).size / 1024);
console.log(`\n🎉 Done! ${successCount}/${chapters.length} chapters injected`);
console.log(`📁 Output: ${OUTPUT_FILE} (${totalKB}KB total)`);
