const fs = require('fs');

const html = fs.readFileSync('extracted_clean_history_notes.html', 'utf8');
const js = fs.readFileSync('notes_extra_history.js', 'utf8');

const mapping = {
  'Indus Valley Civilisation': 'indus-valley-civilization',
  'The Vedic Age': 'vedic-age',
  'Teachings of Buddha': 'buddhism-jainism',
  'Division of Buddhism': 'buddhism-jainism',
  'Buddhist Texts': 'buddhism-jainism',
  'Buddhist Councils': 'buddhism-jainism',
  'Buddhist Architecture': 'buddhism-jainism',
  'Shams-ud-din Iltutmish (c. 1211-1236 AD)': 'delhi-sultanate',
  'Razia Sultan (c. 1236-1240 AD)': 'delhi-sultanate',
  'Successors of Razia Sultan': 'delhi-sultanate',
  'Ghiyas-ud-din Balban (c. 1266-1287 AD)': 'delhi-sultanate',
  'The Khiljis (c. 1290-1320 AD)': 'delhi-sultanate',
  'Jalal-ud-din Firoz Khilji (c. 1290-1296 AD)': 'delhi-sultanate',
  'Ala-ud-din Khilji (c. 1296-1316 AD)': 'delhi-sultanate',
  'Important Events (1922-1925)': 'freedom-movement',
  'Lord Irwin (AD 1926-1931)': 'governor-generals-viceroys',
  'Lord Willingdon (AD 1931-1936)': 'governor-generals-viceroys',
  'Lord Linlithgow (AD 1936-1944)': 'governor-generals-viceroys',
  'Lord Wavell (AD 1944-1947)': 'governor-generals-viceroys',
  'Lord Mountbatten (AD March 1947-August 1947)': 'governor-generals-viceroys',
  'C. Rajagopalachari (AD 1948-1950)': 'governor-generals-viceroys',
  'Land Revenue Systems': 'economic-impact-british'
};

const sections = html.split('<h2>');
const updates = {};

for (let i = 1; i < sections.length; i++) {
  const section = sections[i];
  const endIdx = section.indexOf('</h2>');
  const title = section.substring(0, endIdx).trim();
  const content = section.substring(endIdx + 5).trim();
  
  if (mapping[title]) {
    const key = mapping[title];
    if (!updates[key]) updates[key] = [];
    updates[key].push(`<h3>${title}</h3>\n${content}`);
  }
}

let newJs = js;
for (const [key, snippets] of Object.entries(updates)) {
  const combined = snippets.join('\n<hr>\n');
  const keyMatch = `EXPANDED_NOTES_DATA["${key}"] = \``;
  const idx = newJs.indexOf(keyMatch);
  if (idx !== -1) {
    const endTick = newJs.indexOf('`', idx + keyMatch.length);
    const existingContent = newJs.substring(idx + keyMatch.length, endTick);
    // inject at the end of the existing content
    const updatedContent = existingContent + `\n<hr style="margin: 20px 0; border-color: #ddd;">\n<h2>Detailed Expansion (Pathfinder Extracted)</h2>\n` + combined;
    newJs = newJs.substring(0, idx + keyMatch.length) + updatedContent + newJs.substring(endTick);
  } else {
    console.warn('Key not found in notes_extra_history.js:', key);
  }
}

fs.writeFileSync('notes_extra_history.js', newJs, 'utf8');
console.log('Notes distributed successfully.');
