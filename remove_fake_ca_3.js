const fs = require('fs');
const content = fs.readFileSync('current_affairs_db.js', 'utf8');

const jsonStr = content.replace('window.CURRENT_AFFAIRS_DB = ', '').trim();
const cleanJson = jsonStr.endsWith(';') ? jsonStr.slice(0, -1) : jsonStr;

let db;
try {
  db = JSON.parse(cleanJson);
} catch (e) {
  console.error("Failed to parse", e);
  process.exit(1);
}

if (db['July 2026']) {
  const origLength = db['July 2026'].length;
  // Let's filter out all the hallucinated items found in July 2026
  // - BrahMos-II trials completed
  // - RBI repo rate meeting
  // - India trade surplus
  // - National Plastic Waste Management Act
  
  const fakeIds = [
    'brahmos-ii-trials-completed-2026',
    'rbi-repo-rate-july-2026',
    'india-trade-surplus-june-2026',
    'plastic-waste-management-act-2026'
  ];
  
  db['July 2026'] = db['July 2026'].filter(item => !fakeIds.includes(item.id));
  console.log(`July 2026: reduced from ${origLength} to ${db['July 2026'].length}`);
}

const newContent = `window.CURRENT_AFFAIRS_DB = ${JSON.stringify(db, null, 2)};\n`;
fs.writeFileSync('current_affairs_db.js', newContent, 'utf8');
console.log("Done removing remaining fake July 2026 items");
