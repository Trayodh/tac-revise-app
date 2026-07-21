const fs = require('fs');
const content = fs.readFileSync('current_affairs_db.js', 'utf8');
const jsonStr = content.replace('window.CURRENT_AFFAIRS_DB = ', '').trim().replace(/;$/, '');
try {
  const db = JSON.parse(jsonStr);
  const july = db['July 2026'];
  if (!july) {
    console.log("No July 2026 array");
  } else {
    const out = july.map((item, index) => `[Item ${index}] ID: ${item.id}\nText: ${item.text}\n`).join('\n');
    fs.writeFileSync('july_out.txt', out);
    console.log("Written to july_out.txt");
  }
} catch (e) {
  console.log("Error parsing JSON:", e.message);
}
