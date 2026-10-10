const fs = require('fs');

const latestOctData = [
  {
    "id": "oct-2026-015",
    "topic": "Naval Operations",
    "text": "The Indian Navy is set to commission INS Mangrol, the third Anti-Submarine Warfare Shallow Water Craft (ASW-SWC), built by Cochin Shipyard Limited, enhancing coastal surveillance and anti-submarine operations.",
    "details": {
      "winner": "Indian Navy",
      "award": "Commissioning of INS Mangrol",
      "nationality": "India",
      "summary": "INS Mangrol, an ASW-SWC with over 80% indigenous content, strengthens underwater surveillance."
    },
    "mcq": {
      "question": "Which Anti-Submarine Warfare Shallow Water Craft (ASW-SWC) was recently scheduled for commissioning by the Indian Navy in October 2026?",
      "options": ["INS Vagir", "INS Mangrol", "INS Vikrant", "INS Mormugao"],
      "correct": 1,
      "explanation": "INS Mangrol is the third ASW-SWC built by Cochin Shipyard Limited."
    },
    "upscHighlights": ["INS Mangrol", "ASW-SWC", "Built by Cochin Shipyard Limited"],
    "strategicImportance": "Crucial for coastal defence and detecting adversarial submarines in shallow waters."
  },
  {
    "id": "oct-2026-016",
    "topic": "Defence Economics",
    "text": "India's defence exports reached a record ₹38,424 crore in the 2025-26 financial year, marking a massive 60% increase over the previous year, driven strongly by both public and private sector contributions.",
    "details": {
      "winner": "Indian Defence Industry",
      "award": "Record Defence Exports",
      "nationality": "India",
      "summary": "Defence exports hit an all-time high of ₹38,424 crore in FY26."
    },
    "mcq": {
      "question": "In the financial year 2025-26, India's defence exports reached a record high of approximately:",
      "options": ["₹16,000 crore", "₹25,000 crore", "₹38,400 crore", "₹50,000 crore"],
      "correct": 2,
      "explanation": "Defence exports reached a record ₹38,424 crore in FY 2025-26."
    },
    "upscHighlights": ["Record Exports: ₹38,424 Cr", "60% YoY increase", "Atmanirbhar Bharat success"],
    "strategicImportance": "Demonstrates India's transition from a major defence importer to a significant global arms exporter."
  },
  {
    "id": "oct-2026-017",
    "topic": "International Relations & Defence",
    "text": "A delegation from the Japanese Ground Self-Defense Force (JGSDF) visited India to engage with the Indian Army and DRDO, seeking to strengthen military ties and explore joint emerging defence technologies.",
    "details": {
      "winner": "India & Japan",
      "award": "JGSDF Visit to India",
      "nationality": "Japan",
      "summary": "Japanese military delegation explores deep tech collaboration with Indian defence establishments."
    },
    "mcq": {
      "question": "A military delegation from which country visited India in October 2026 to engage with the Indian Army and DRDO on emerging defence technologies?",
      "options": ["United States", "France", "Japan", "South Korea"],
      "correct": 2,
      "explanation": "A delegation from the Japanese Ground Self-Defense Force (JGSDF) visited India for tech collaboration."
    },
    "upscHighlights": ["India-Japan Defence Ties", "JGSDF Visit", "Emerging Tech Collaboration"],
    "strategicImportance": "Key step in solidifying the 'Special Strategic and Global Partnership' between India and Japan."
  }
];

function updateFile(filename) {
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');
    
    const pattern = /("October 2026":\s*\[)([\s\S]*?)(\]\s*\};?\s*$)/;
    if (pattern.test(content)) {
        console.log("Found existing October 2026 array at the end of " + filename);
        const match = content.match(pattern);
        let existingInner = match[2].trim();
        
        let newInner = existingInner;
        if (newInner.length > 0 && newInner.endsWith(',')) {
            newInner = newInner.slice(0, -1);
        }
        
        latestOctData.forEach(item => {
            newInner += ",\n" + JSON.stringify(item, null, 2);
        });
        
        content = content.replace(pattern, `$1\n${newInner}\n$3`);
        fs.writeFileSync(filename, content, 'utf8');
        console.log("Updated " + filename);
        return;
    }
    
    const pattern2 = /("October 2026":\s*\[)([\s\S]*?)(\],\s*"[A-Za-z]+ \d{4}":)/;
    if (pattern2.test(content)) {
        console.log("Found existing October 2026 array (with months after) in " + filename);
        const match = content.match(pattern2);
        let existingInner = match[2].trim();
        
        let newInner = existingInner;
        if (newInner.length > 0 && newInner.endsWith(',')) {
            newInner = newInner.slice(0, -1);
        }
        
        latestOctData.forEach(item => {
            newInner += ",\n" + JSON.stringify(item, null, 2);
        });
        
        content = content.replace(pattern2, `$1\n${newInner}\n$3`);
        fs.writeFileSync(filename, content, 'utf8');
        console.log("Updated " + filename);
        return;
    }
    console.log("Could not find October 2026 in " + filename);
}

['current_affairs_db.js', 'notes_data_exam_focused.js'].forEach(updateFile);
