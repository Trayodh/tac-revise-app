const fs = require('fs');
const content = fs.readFileSync('current_affairs_db.js', 'utf8');

// The file looks like: window.CURRENT_AFFAIRS_DB = { ... }
const jsonStr = content.replace('window.CURRENT_AFFAIRS_DB = ', '').trim();
// removing trailing semicolon if present
const cleanJson = jsonStr.endsWith(';') ? jsonStr.slice(0, -1) : jsonStr;

let db;
try {
  db = JSON.parse(cleanJson);
} catch (e) {
  console.error("Failed to parse", e);
  process.exit(1);
}

if (db['July 2026']) {
  // Let's filter out events that mention a date > 15 July 2026 in their text or options.
  // We can just explicitly filter the ones we know about. 
  const origLength = db['July 2026'].length;
  
  db['July 2026'] = db['July 2026'].filter(item => {
    // If it mentions "26 July", "16 July", "17 July", "18 July", "19 July", "20 July", "21 July", "22 July", "23 July", "24 July", "25 July", "27 July", "28 July", "29 July", "30 July", "31 July"
    const textStr = JSON.stringify(item);
    const regex = /(1[6-9]\sJuly|2[0-9]\sJuly|3[01]\sJuly|1[6-9]th\sJuly|2[0-9]th\sJuly|3[01]st\sJuly)/i;
    if (regex.test(textStr)) {
      console.log("Removing future item:", item.topic, item.text.substring(0, 50));
      return false;
    }
    return true;
  });
  
  console.log(`July 2026: reduced from ${origLength} to ${db['July 2026'].length}`);
}

const newContent = `window.CURRENT_AFFAIRS_DB = ${JSON.stringify(db, null, 2)};\n`;
fs.writeFileSync('current_affairs_db.js', newContent, 'utf8');
console.log("Done updating current_affairs_db.js");
