const fs = require('fs');

const src = fs.readFileSync('current_affairs_db.js', 'utf8');
const dbMatch = src.match(/window\.CURRENT_AFFAIRS_DB\s*=\s*([\s\S]+);\s*$/);
if (!dbMatch) {
  console.log("Could not find db in current_affairs_db.js");
  process.exit(1);
}

const fn = new Function(`return ${dbMatch[1]}`);
const db = fn();

if (!db['July 2026']) {
  db['July 2026'] = [];
}

const customItems = [
  {
    "id": "jul-27-kargil-vijay-diwas",
    "topic": "National Commemoration",
    "text": "On July 26, 2026, India celebrated the **27th Anniversary of Kargil Vijay Diwas**, honoring the bravery and sacrifice of the Indian Armed Forces during the 1999 Kargil War.",
    "details": {
      "winner": "Indian Armed Forces",
      "award": "Kargil Vijay Diwas",
      "nationality": "India",
      "summary": "Commemorates India's victory over Pakistan in the 1999 Kargil conflict."
    },
    "mcq": {
      "question": "Which anniversary of the Kargil Vijay Diwas was celebrated by India in July 2026?",
      "options": ["A) 25th", "B) 26th", "C) 27th", "D) 28th"],
      "answer": "C",
      "explanation": "In 2026, India observed the 27th Anniversary of the Kargil Vijay Diwas (1999 - 2026)."
    }
  },
  {
    "id": "jul-27-rudram-2-missile",
    "topic": "Defence Technology",
    "text": "On July 27, 2026, the DRDO successfully flight-tested the **Rudram-2**, an indigenous Next-Generation Anti-Radiation Missile (NGARM), from an Su-30MKI fighter jet.",
    "details": {
      "winner": "DRDO",
      "award": "Rudram-2 Missile Test",
      "nationality": "India",
      "summary": "Enhances the Indian Air Force's Suppression of Enemy Air Defences (SEAD) capability."
    },
    "mcq": {
      "question": "The DRDO recently tested Rudram-2 in July 2026. What type of missile is it?",
      "options": ["A) Anti-Tank Guided Missile (ATGM)", "B) Anti-Radiation Missile", "C) Submarine-Launched Ballistic Missile", "D) Air-to-Air Missile"],
      "answer": "B",
      "explanation": "Rudram-2 is an indigenous Next-Generation Anti-Radiation Missile developed by the DRDO."
    }
  }
];

// Avoid duplicates
const existingIds = new Set(db['July 2026'].map(item => item.id));
let added = 0;
for (const item of customItems) {
  if (!existingIds.has(item.id)) {
    db['July 2026'].unshift(item); // add at the beginning
    added++;
  }
}

const output = `window.CURRENT_AFFAIRS_DB = ${JSON.stringify(db, null, 2)};\n`;
fs.writeFileSync('current_affairs_db.js', output);
console.log(`Added ${added} new items for July 27.`);
