const fs = require('fs');

const dbText = fs.readFileSync('current_affairs_db.js', 'utf8');
const newData = fs.readFileSync('legacy_ca_april_sept_2026.json', 'utf8');

// newData is a valid JSON object string.
// We strip the opening `{` and closing `}` and whitespace.
const innerJson = newData.trim().slice(1, -1).trim();

// find the last '}' in dbText
const lastBracketIndex = dbText.lastIndexOf('}');

if (lastBracketIndex !== -1) {
  const newDbText = dbText.substring(0, lastBracketIndex) + ',\n' + innerJson + '\n' + dbText.substring(lastBracketIndex);
  fs.writeFileSync('current_affairs_db.js', newDbText, 'utf8');
  console.log('Safely injected new months into current_affairs_db.js without modifying other contents.');
} else {
  console.log('Failed to find closing bracket in current_affairs_db.js');
}
