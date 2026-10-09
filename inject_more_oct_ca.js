const fs = require('fs');

const moreOctData = [
  {
    "id": "oct-2026-012",
    "topic": "International Summits",
    "text": "The BRICS Summit 2026 was hosted in Kazan, Russia, focusing on multipolarity, financial alternative systems, and the inclusion of newly admitted member states in the bloc's security framework.",
    "details": {
      "winner": "BRICS Nations",
      "award": "BRICS Summit 2026",
      "nationality": "Multinational",
      "summary": "18th BRICS Summit hosted by Russia in Kazan."
    },
    "mcq": {
      "question": "The BRICS Summit 2026 was hosted in which city?",
      "options": ["Pretoria, South Africa", "Kazan, Russia", "Beijing, China", "Brasília, Brazil"],
      "correct": 1,
      "explanation": "Russia held the BRICS Summit 2026 in the city of Kazan."
    },
    "upscHighlights": ["BRICS Summit", "Kazan, Russia", "Multipolarity & Economic integration"],
    "strategicImportance": "Significant for shifting global economic balance and strengthening non-Western institutional frameworks."
  },
  {
    "id": "oct-2026-013",
    "topic": "Defence Acquisitions",
    "text": "The Defence Acquisition Council (DAC) approved the procurement of 31 MQ-9B SeaGuardian high-altitude long-endurance (HALE) armed drones from the United States to boost ISR capabilities.",
    "details": {
      "winner": "Indian Armed Forces",
      "award": "MQ-9B Drones Approval",
      "nationality": "India & USA",
      "summary": "DAC clears acquisition of 31 armed drones from the US."
    },
    "mcq": {
      "question": "India's Defence Acquisition Council recently approved the procurement of 31 MQ-9B SeaGuardian drones from which country?",
      "options": ["Israel", "France", "United States", "Russia"],
      "correct": 2,
      "explanation": "The MQ-9B SeaGuardian drones are procured from the USA."
    },
    "upscHighlights": ["MQ-9B SeaGuardian", "HALE Drones", "India-US Defence Trade"],
    "strategicImportance": "Enhances Intelligence, Surveillance, and Reconnaissance (ISR) along the LAC and the Indian Ocean."
  },
  {
    "id": "oct-2026-014",
    "topic": "International Relations",
    "text": "India participated in the SCO (Shanghai Cooperation Organisation) Council of Heads of Government meeting held in Islamabad in October 2026, represented by the External Affairs Minister.",
    "details": {
      "winner": "SCO",
      "award": "SCO CHG Meeting",
      "nationality": "Multinational",
      "summary": "India's EAM attended the SCO meeting in Islamabad."
    },
    "mcq": {
      "question": "Where was the Shanghai Cooperation Organisation (SCO) Council of Heads of Government meeting held in October 2026?",
      "options": ["Tashkent", "Astana", "Islamabad", "New Delhi"],
      "correct": 2,
      "explanation": "The meeting was hosted in Islamabad, Pakistan."
    },
    "upscHighlights": ["SCO CHG Meeting", "Islamabad, Pakistan", "Regional Security"],
    "strategicImportance": "Highlights India's commitment to Eurasian security architectures despite bilateral tensions."
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
        
        moreOctData.forEach(item => {
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
        
        moreOctData.forEach(item => {
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
