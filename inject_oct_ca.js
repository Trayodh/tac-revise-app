const fs = require('fs');

const octData = [
  {
    "id": "oct-2026-001",
    "topic": "International Relations & Defence",
    "text": "Admiral Paparo, Commander of the US Indo-Pacific Command, visited India in October 2026 to enhance bilateral defence cooperation and operational interoperability.",
    "details": {
      "winner": "India & USA",
      "award": "High-level Defence Visit",
      "nationality": "USA",
      "summary": "Admiral Paparo visited India to strengthen strategic ties and maritime security in the Indo-Pacific."
    },
    "mcq": {
      "question": "Who visited India in October 2026 representing the US Indo-Pacific Command to enhance defence interoperability?",
      "options": ["General Lloyd Austin", "Admiral Paparo", "Admiral John Aquilino", "General Mark Milley"],
      "correct": 1,
      "explanation": "Admiral Paparo is the Commander of the US Indo-Pacific Command and visited India in October 2026."
    },
    "upscHighlights": ["US Indo-Pacific Command (INDOPACOM)", "Focus on maritime interoperability", "Strategic partnership"],
    "strategicImportance": "Crucial for regional security dynamics and fostering a free and open Indo-Pacific."
  },
  {
    "id": "oct-2026-002",
    "topic": "International Relations",
    "text": "The Polish Prime Minister visited India in October 2026 to elevate bilateral relations, focusing strongly on defence procurement, joint ventures, and technology transfer.",
    "details": {
      "winner": "India & Poland",
      "award": "Bilateral Strategic Partnership",
      "nationality": "Poland",
      "summary": "Polish PM visited India to explore new avenues for defence joint ventures and strategic cooperation."
    },
    "mcq": {
      "question": "The Prime Minister of which European nation visited India in October 2026 to elevate bilateral relations and focus on defence joint ventures?",
      "options": ["France", "Germany", "Poland", "Italy"],
      "correct": 2,
      "explanation": "The Polish PM visited India focusing on defence cooperation and tech transfer."
    },
    "upscHighlights": ["India-Poland relations", "Defence procurement diversification", "Central European outreach"],
    "strategicImportance": "Underscores India's expanding diplomatic outreach beyond traditional partners and diversifying its defence sourcing."
  },
  {
    "id": "oct-2026-003",
    "topic": "Military Exercises",
    "text": "The multinational maritime exercise **MALABAR 2026** was conducted in October, featuring navies from India, the USA, Japan, and Australia, focusing on advanced anti-submarine warfare.",
    "details": {
      "winner": "QUAD Nations",
      "award": "Exercise Malabar 2026",
      "nationality": "Multinational",
      "summary": "Annual QUAD naval exercise held in October 2026."
    },
    "mcq": {
      "question": "Which of the following nations is NOT a regular participant in the multilateral naval exercise MALABAR?",
      "options": ["India", "Japan", "South Korea", "Australia"],
      "correct": 2,
      "explanation": "MALABAR involves the QUAD nations: India, USA, Japan, and Australia."
    },
    "upscHighlights": ["QUAD navies", "Advanced Anti-Submarine Warfare (ASW)", "Interoperability"],
    "strategicImportance": "Projects a united front by QUAD nations to ensure a free, open, and inclusive Indo-Pacific region."
  },
  {
    "id": "oct-2026-004",
    "topic": "Defence Tech & DRDO",
    "text": "DRDO successfully test-fired a new variant of the **Pralay** tactical ballistic missile in October 2026, demonstrating enhanced accuracy and range.",
    "details": {
      "winner": "DRDO",
      "award": "Successful Missile Test",
      "nationality": "India",
      "summary": "DRDO tested the Pralay quasi-ballistic surface-to-surface missile."
    },
    "mcq": {
      "question": "What type of missile is 'Pralay', which was successfully tested by DRDO in October 2026?",
      "options": ["Air-to-Air Missile", "Surface-to-Air Missile", "Tactical Surface-to-Surface Missile", "Anti-Tank Guided Missile"],
      "correct": 2,
      "explanation": "Pralay is a tactical, surface-to-surface, quasi-ballistic missile."
    },
    "upscHighlights": ["Tactical Surface-to-Surface Missile", "Quasi-ballistic trajectory", "Developed by DRDO"],
    "strategicImportance": "Significantly bolsters India's rocket force and tactical strike capabilities along the borders."
  },
  {
    "id": "oct-2026-005",
    "topic": "Space Missions",
    "text": "ISRO marked a major milestone in the **Gaganyaan** program in October 2026 by completing the crucial uncrewed orbital test flight (G1).",
    "details": {
      "winner": "ISRO",
      "award": "Gaganyaan G1 Test Flight",
      "nationality": "India",
      "summary": "ISRO successfully completed the first uncrewed orbital test flight for the Gaganyaan mission."
    },
    "mcq": {
      "question": "In October 2026, ISRO completed the G1 uncrewed orbital test flight for which flagship space mission?",
      "options": ["Chandrayaan-4", "Mangalyaan-2", "Gaganyaan", "Shukrayaan-1"],
      "correct": 2,
      "explanation": "The G1 flight is a critical precursor to the crewed Gaganyaan mission."
    },
    "upscHighlights": ["Gaganyaan Mission", "Uncrewed Test Flight (G1)", "Human Spaceflight Programme"],
    "strategicImportance": "Paves the way for India to become the fourth nation to launch human spaceflight independently."
  },
  {
    "id": "oct-2026-006",
    "topic": "Air Force Modernisation",
    "text": "The Indian Air Force officially inducted the first squadron of upgraded **Tejas Mk1A** fighter jets in October 2026, significantly boosting its combat fleet.",
    "details": {
      "winner": "Indian Air Force",
      "award": "Induction of Tejas Mk1A",
      "nationality": "India",
      "summary": "IAF inducted upgraded indigenous LCA Tejas Mk1A."
    },
    "mcq": {
      "question": "Which upgraded indigenous fighter aircraft was formally inducted into a new squadron by the IAF in October 2026?",
      "options": ["Sukhoi Su-30MKI", "LCA Tejas Mk1A", "AMCA", "Mirage 2000"],
      "correct": 1,
      "explanation": "The IAF inducted the upgraded LCA Tejas Mk1A to strengthen its fighter squadrons."
    },
    "upscHighlights": ["LCA Tejas Mk1A", "AESA Radar & BVR capabilities", "Manufactured by HAL"],
    "strategicImportance": "Crucial step in replacing aging MiG-21 fleets and advancing the 'Make in India' defence initiative."
  },
  {
    "id": "oct-2026-007",
    "topic": "Internal Security",
    "text": "The Ministry of Home Affairs inaugurated the advanced **National Cyber Security Operations Centre** in New Delhi in October 2026 to counter rising sophisticated state-sponsored cyber threats.",
    "details": {
      "winner": "Ministry of Home Affairs",
      "award": "Cyber Security Infra",
      "nationality": "India",
      "summary": "New central cyber operations centre launched to protect critical infrastructure."
    },
    "mcq": {
      "question": "Which ministry is primarily responsible for the National Cyber Security Operations Centre inaugurated in October 2026?",
      "options": ["Ministry of Defence", "Ministry of Home Affairs", "Ministry of Electronics and IT (MeitY)", "Ministry of Science and Technology"],
      "correct": 1,
      "explanation": "The Ministry of Home Affairs is responsible for internal security, including this new cyber centre."
    },
    "upscHighlights": ["Critical Information Infrastructure protection", "Counter-state sponsored cyber attacks", "NCIIPC coordination"],
    "strategicImportance": "Enhances national resilience against cyber warfare and protects critical civilian and defence networks."
  },
  {
    "id": "oct-2026-008",
    "topic": "Economy",
    "text": "In October 2026, the RBI's Monetary Policy Committee maintained the repo rate, citing the need to balance robust economic growth against volatile global energy prices.",
    "details": {
      "winner": "RBI",
      "award": "Monetary Policy Review",
      "nationality": "India",
      "summary": "RBI maintained status quo on the repo rate amidst global energy volatility."
    },
    "mcq": {
      "question": "The Monetary Policy Committee (MPC) of the RBI determines the policy repo rate. How many members are in the MPC?",
      "options": ["4", "5", "6", "7"],
      "correct": 2,
      "explanation": "The MPC has 6 members: 3 from the RBI and 3 external members appointed by the Government."
    },
    "upscHighlights": ["Monetary Policy Committee", "Repo Rate status quo", "Inflation targeting mechanism"],
    "strategicImportance": "Ensures macroeconomic stability which is foundational for sustained defence spending and national security."
  },
  {
    "id": "oct-2026-009",
    "topic": "Environment & Ecology",
    "text": "India added two new high-altitude wetlands in Ladakh to the list of **Ramsar Sites** in October 2026, emphasizing the conservation of fragile Himalayan ecosystems.",
    "details": {
      "winner": "Ministry of Environment",
      "award": "New Ramsar Sites in Ladakh",
      "nationality": "India",
      "summary": "Two new wetlands in Ladakh recognised as wetlands of international importance."
    },
    "mcq": {
      "question": "The Ramsar Convention, under which wetlands of international importance are recognised, was signed in which country?",
      "options": ["Switzerland", "Iran", "France", "Canada"],
      "correct": 1,
      "explanation": "The convention was signed in 1971 in the Iranian city of Ramsar."
    },
    "upscHighlights": ["Ramsar Convention 1971", "High-altitude wetlands", "Ladakh ecosystem"],
    "strategicImportance": "Demonstrates India's commitment to international environmental treaties and border region ecology conservation."
  },
  {
    "id": "oct-2026-010",
    "topic": "Naval Operations",
    "text": "The Indian Navy commissioned **INS Vagir**, the fifth Kalvari-class submarine, highlighting its growing underwater combat capabilities.",
    "details": {
      "winner": "Indian Navy",
      "award": "Commissioning of INS Vagir",
      "nationality": "India",
      "summary": "Fifth Scorpene-class submarine inducted into the Indian Navy."
    },
    "mcq": {
      "question": "INS Vagir, commissioned into the Indian Navy, belongs to which class of submarines?",
      "options": ["Arihant-class", "Shishumar-class", "Kalvari-class (Scorpene)", "Sindhughosh-class"],
      "correct": 2,
      "explanation": "INS Vagir is the fifth of the six Kalvari-class (Scorpene) submarines built under Project 75."
    },
    "upscHighlights": ["Project 75", "Kalvari-class / Scorpene-class", "Built by Mazagon Dock Shipbuilders Limited (MDL)"],
    "strategicImportance": "Critical for sea denial operations and protecting India's vast maritime interests in the Indian Ocean."
  }
];

function updateFile(filename) {
    if (!fs.existsSync(filename)) {
        console.log("File not found: " + filename);
        return;
    }
    let content = fs.readFileSync(filename, 'utf8');
    
    // Pattern to find "October 2026": [ ]
    const pattern1 = /"October 2026":\s*\[\s*\]/;
    if (pattern1.test(content)) {
        console.log("Found empty October 2026 array in " + filename);
        
        const jsonStr = JSON.stringify(octData, null, 2);
        const innerJson = jsonStr.substring(jsonStr.indexOf('[') + 1, jsonStr.lastIndexOf(']')).trim();
        
        content = content.replace(pattern1, '"October 2026": [\n' + innerJson + '\n  ]');
        fs.writeFileSync(filename, content, 'utf8');
        console.log("Updated " + filename);
        return;
    }
    
    // Pattern to find "October 2026": [ ... ] (last item in current_affairs_db.js)
    const pattern2 = /("October 2026":\s*\[)([\s\S]*?)(\]\s*\};?\s*$)/;
    if (pattern2.test(content)) {
        console.log("Found existing October 2026 array at end of " + filename);
        const match = content.match(pattern2);
        const existingInner = match[2].trim();
        
        const jsonStr = JSON.stringify(octData, null, 2);
        const innerJson = jsonStr.substring(jsonStr.indexOf('[') + 1, jsonStr.lastIndexOf(']')).trim();
        
        let newInner = existingInner;
        if (newInner.length > 0) {
            newInner += ",\n" + innerJson;
        } else {
            newInner = innerJson;
        }
        
        content = content.replace(pattern2, `$1\n${newInner}\n$3`);
        fs.writeFileSync(filename, content, 'utf8');
        console.log("Updated " + filename);
        return;
    }

    // Pattern 3 to find "October 2026" in notes_data_exam_focused (which has "November 2026" after it)
    const pattern3 = /("October 2026":\s*\[)([\s\S]*?)(\],?\s*"November 2026")/;
    if (pattern3.test(content)) {
        console.log("Found existing October 2026 array (with Nov 2026 after) in " + filename);
        const match = content.match(pattern3);
        const existingInner = match[2].trim();
        
        const jsonStr = JSON.stringify(octData, null, 2);
        const innerJson = jsonStr.substring(jsonStr.indexOf('[') + 1, jsonStr.lastIndexOf(']')).trim();
        
        // Let's assume we want to replace or we can just skip if it was already injected. Let's skip if existingInner already has 'oct-2026-001'
        if (existingInner.includes('oct-2026-001')) {
            console.log("October 2026 data already injected in " + filename);
            return;
        }

        let newInner = existingInner;
        if (newInner.length > 0) {
            newInner += ",\n" + innerJson;
        } else {
            newInner = innerJson;
        }
        
        content = content.replace(pattern3, `$1\n${newInner}\n$3`);
        fs.writeFileSync(filename, content, 'utf8');
        console.log("Updated " + filename);
        return;
    }

    console.log("Could not find October 2026 structure to replace in " + filename);
}

['notes_data_exam_focused.js', 'current_affairs_db.js', 'ca_data.js'].forEach(updateFile);
