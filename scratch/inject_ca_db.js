const fs = require('fs');

const dbText = fs.readFileSync('current_affairs_db.js', 'utf8');
const prefix = 'window.CURRENT_AFFAIRS_DB = ';
const jsonStr = dbText.substring(dbText.indexOf(prefix) + prefix.length).trim().replace(/;$/, '');

let db;
try {
  db = JSON.parse(jsonStr);
} catch (e) {
  // If parsing fails due to non-strict JSON, we evaluate it safely.
  db = eval('(' + jsonStr + ')');
}

const newData = JSON.parse(fs.readFileSync('legacy_ca_april_sept_2026.json', 'utf8'));

for (const key in newData) {
  db[key] = newData[key];
}

const out = 'window.CURRENT_AFFAIRS_DB = ' + JSON.stringify(db, null, 2) + ';';
fs.writeFileSync('current_affairs_db.js', out, 'utf8');

console.log('Successfully injected new months into current_affairs_db.js');
