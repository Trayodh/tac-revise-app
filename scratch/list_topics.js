const fs = require('fs');
const files = ['data.js','notes_extra.js','notes_extra_2.js','notes_extra_history.js','notes_extra_geography.js','notes_extra_physics.js','notes_extra_chemistry.js','notes_extra_biology.js','notes_extra_economics.js','notes_extra_polity.js','notes_extra_english.js','notes_extra_afcat.js','notes_extra_afcat_reasoning.js','notes_extra_physical_geography.js'];
let allTopics = [];
for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const idRx = /\bid:\s*['"]([^'"]+)['"]/g;
    const titleRx = /\btitle:\s*['"]([^'"]+)['"]/g;
    const ids = [];
    const titles = [];
    let m;
    while ((m = idRx.exec(content)) !== null) ids.push(m[1]);
    while ((m = titleRx.exec(content)) !== null) titles.push(m[1]);
    for (let i = 0; i < ids.length; i++) {
      allTopics.push({ id: ids[i], title: (titles[i] || '?'), file });
    }
  } catch(e) { console.error('Error reading', file, e.message); }
}
const seen = new Set();
const unique = allTopics.filter(t => { if (seen.has(t.id)) return false; seen.add(t.id); return true; });
console.log('Total unique topic IDs:', unique.length);
unique.forEach(t => console.log(t.id, '|', t.title));
