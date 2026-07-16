const fs = require('fs');
const src = fs.readFileSync('current_affairs_db.js', 'utf8');
const match = src.match(/window\.CURRENT_AFFAIRS_DB\s*=\s*([\s\S]+);?\s*$/);
if (!match) { console.log('Could not parse'); process.exit(1); }
const db = JSON.parse(match[1].replace(/;$/, '').trim());
const keys = Object.keys(db);
console.log('Total keys:', keys.length);
keys.forEach(k => {
  console.log(`  "${k}": ${Array.isArray(db[k]) ? db[k].length : typeof db[k]} items`);
});
