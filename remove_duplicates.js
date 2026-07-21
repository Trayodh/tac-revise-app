const fs = require('fs');
const filename = 'current_affairs_db.js';

const content = fs.readFileSync(filename, 'utf8');
const jsonStr = content.replace('window.CURRENT_AFFAIRS_DB = ', '').trim().replace(/;$/, '');

try {
  const db = JSON.parse(jsonStr);
  const july = db['July 2026'];
  
  if (!july) {
    console.log("No July 2026 array");
    process.exit(1);
  }

  const idsToRemove = [
    // Duplicates (retained the more detailed versions)
    'jul-26-1',
    'jul-26-2',
    'jul-26-4',
    'jul-26-5',
    'jul-26-6',
    'jul-26-9',
    'jul-26-10',
    'jul-26-11',
    'jul-26-12',
    'jul-26-13',
    'jul-26-14',
    
    // Speculations / Unconfirmed proposals
    'jul-26-isro-resignations', // "Reports indicate ISRO is making it harder..."
    'ca_live_2026_07_17_1',      // "A new bill proposing jail terms..."
    'jul-26-8',                  // "Ministry of Home Affairs proposes..."
    'jul-26-mha-i4c-rules'       // "The Ministry of Home Affairs (MHA) proposed..."
  ];

  const originalLength = july.length;
  db['July 2026'] = july.filter(item => !idsToRemove.includes(item.id));
  const newLength = db['July 2026'].length;

  console.log(`Filtered July 2026 items from ${originalLength} to ${newLength}`);

  const outputStr = `window.CURRENT_AFFAIRS_DB = ${JSON.stringify(db, null, 2)};\n`;
  fs.writeFileSync(filename, outputStr);
  console.log("Successfully updated current_affairs_db.js");

} catch (e) {
  console.log("Error parsing or writing JSON:", e.message);
}
