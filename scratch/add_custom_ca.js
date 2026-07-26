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
    "id": "jul-26-project-kusha",
    "topic": "Defence Technology",
    "text": "The Defence Research and Development Organisation (DRDO) successfully conducted a crucial test of **Project Kusha**, India's indigenous Long-Range Surface-to-Air Missile (LR-SAM) system, enhancing the nation's air defence shield.",
    "details": {
      "winner": "DRDO",
      "award": "Project Kusha Test",
      "nationality": "India",
      "summary": "Project Kusha aims to provide an 'Iron Dome'-like air defence shield for India."
    },
    "mcq": {
      "question": "Project Kusha, recently tested by the DRDO, is related to the development of which type of defence system?",
      "options": ["A) Intercontinental Ballistic Missile", "B) Long-Range Surface-to-Air Missile (LR-SAM)", "C) Nuclear-powered Submarine", "D) 5th Generation Fighter Aircraft"],
      "answer": "B",
      "explanation": "Project Kusha is India's ambitious indigenous LR-SAM system designed to intercept stealth fighters, drones, and cruise missiles."
    }
  },
  {
    "id": "jul-26-new-edu-minister",
    "topic": "Appointments",
    "text": "Following a cabinet reshuffle in July 2026, the Government of India appointed the **new Union Minister of Education**, tasked with overseeing the continued implementation of the National Education Policy (NEP).",
    "details": {
      "winner": "Union Cabinet",
      "award": "New Education Minister",
      "nationality": "India",
      "summary": "New appointment in the Ministry of Education following a cabinet reshuffle."
    },
    "mcq": {
      "question": "A new Union Minister of Education was appointed in July 2026 to oversee the implementation of which major policy?",
      "options": ["A) National Health Policy", "B) National Education Policy (NEP)", "C) Skill India Mission", "D) Digital India Initiative"],
      "answer": "B",
      "explanation": "The new Education Minister's primary focus remains the effective implementation of the National Education Policy (NEP) across all states."
    }
  }
];

// Avoid duplicates based on id
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
console.log(`Added ${added} custom items to July 2026.`);
