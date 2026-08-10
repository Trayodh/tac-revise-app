const fs = require('fs');
let txt = fs.readFileSync('index.html', 'utf8');

// The corrupted characters in the file are double-UTF8 encoded or read as latin1 and written as utf8.
// We can find all text nodes and decode them, but we only want to decode the corrupted emojis.
// Let's find all occurrences of these specific corrupted patterns.
// Wait, a more robust way is to just replace all `Buffer.from(match, 'utf8').toString('latin1')` for the specific strings.
// But wait, the emojis were broken twice?
// Let's just find the exact corrupted strings and replace them manually. It's safer.

const replacements = {
  'â‰¡Æ’Ã´Ã‰': '🧮', // Ballistics & Applied Mathematics
  'â‰¡Æ’Ã´Ãœ': '🗣️', // Officer Communication
  'â‰¡Æ’Ã…Â¢âˆ©â••Ã…': '⚖️', // Constitution & National Security
  'â‰¡Æ’Ã´Â£': '📜', // Military History
  'â‰¡Æ’Ã®Ã¬': '🌍', // Strategic Geography
  'â‰¡Æ’Ã´Ãª': '📈', // Defence Economics
  'Î“ÃœÂ¢âˆ©â••Ã…': '⚛️', // Defence Physics
  'â‰¡Æ’ÂºÂ¬': '🧪', // Military Chemistry
  'â‰¡Æ’ÂºÂ¼': '🧬', // Battlefield Science
  
  'â‰¡Æ’Ã±Ã»': '🤖', // Tactical AI Chat
  'â‰¡Æ’Ã„Â¼': '📽️', // AI Lectures
  
  'Î“Ã‡Ã³Î“Ã‡Ã³Î“Ã‡Ã³Î“Ã‡Ã³Î“Ã‡Ã³Î“Ã‡Ã³Î“Ã‡Ã³Î“Ã‡Ã³': '••••••••', // Password dots
  'Î“Ã©â•£ 99 / Forever': '₹ 99 / Forever', // Rupee symbol
  'Î“Â£Â¿ Tell Me More': '🔍 Tell Me More',
  
  // Try to use a regex for any other corrupted emojis? 
  // It's safer to just let the script do a generic double-decode on text inside HTML tags if possible.
};

let modified = txt;
for (const [bad, good] of Object.entries(replacements)) {
  modified = modified.split(bad).join(good);
}

// Write a test to see if we missed any `â‰¡Æ’` or `Î“` which are common prefixes for corrupted utf8 in windows-1252.
const missed = modified.match(/[â‰¡Æ’Î“Ã]/g);
if (missed) {
  console.log('Potentially missed corrupted characters. Check index.html manually.');
}

fs.writeFileSync('index.html', modified, 'utf8');
console.log('Fixed index.html emojis successfully.');
