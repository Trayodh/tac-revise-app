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
  db['July 2026'] = db['July 2026'].filter(item => item.id !== 'exercise-indus-eagle-2026');
  console.log(`July 2026: reduced from ${origLength} to ${db['July 2026'].length}`);
}

const newContent = `window.CURRENT_AFFAIRS_DB = ${JSON.stringify(db, null, 2)};\n`;
fs.writeFileSync('current_affairs_db.js', newContent, 'utf8');
console.log("Done removing fake Indus Eagle exercise");
