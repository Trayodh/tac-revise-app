const fs = require('fs');

const septData = [
  {
    "id": "sept-2026-001",
    "topic": "National Affairs",
    "text": "The **Make in India** initiative celebrated its 12th Anniversary on September 25, 2026, marking significant growth in electronics, automobiles, and defence manufacturing sectors.",
    "details": {
      "winner": "Government of India",
      "award": "12th Anniversary of Make in India",
      "nationality": "India",
      "summary": "Make in India initiative completes 12 years since its launch on Sept 25, 2014 by DPIIT."
    },
    "mcq": {
      "question": "Which Ministry's department (DPIIT) is the nodal agency for the 'Make in India' initiative that celebrated its 12th anniversary in Sept 2026?",
      "options": ["Ministry of Finance", "Ministry of Commerce & Industry", "Ministry of Defence", "Ministry of Home Affairs"],
      "correct": 1,
      "explanation": "DPIIT falls under the Ministry of Commerce & Industry."
    },
    "upscHighlights": ["Launched Sept 25, 2014", "Nodal Agency: DPIIT", "Focus on manufacturing"],
    "strategicImportance": "Crucial scheme for reducing import dependence."
  },
  {
    "id": "sept-2026-002",
    "topic": "Defence Procurements",
    "text": "The Ministry of Defence (MoD) signed a ₹810.79 crore contract with **Bharat Dynamics Limited (BDL)** for the procurement of 160 **Satellite Smart Anti-Airfield Weapons (SAT-SAAW)** for the Indian Air Force.",
    "details": {
      "winner": "Bharat Dynamics Limited (BDL)",
      "award": "SAT-SAAW Contract",
      "nationality": "India",
      "summary": "MoD procures 160 SAT-SAAW from BDL to enhance IAF capabilities against enemy airfields."
    },
    "mcq": {
      "question": "Which aerospace company was awarded the ₹810.79 crore contract by the MoD in September 2026 to supply SAT-SAAW?",
      "options": ["HAL", "BEL", "BDL", "DRDO"],
      "correct": 2,
      "explanation": "The MoD signed the contract with BDL for 160 Satellite Smart Anti-Airfield Weapons."
    },
    "upscHighlights": ["SAT-SAAW are precision-guided glide bombs", "Neutralize enemy airfields from stand-off ranges", "Contract with BDL"],
    "strategicImportance": "Boosts IAF's precision strike capabilities without crossing borders."
  },
  {
    "id": "sept-2026-003",
    "topic": "Military Exercises",
    "text": "The 22nd edition of the India-US joint military exercise **Yudh Abhyas 2026** commenced at the Mahajan Field Firing Range, Rajasthan, featuring a successful demonstration of indigenously assembled **SkyStriker** loitering munitions.",
    "details": {
      "winner": "India & USA",
      "award": "Exercise Yudh Abhyas 2026",
      "nationality": "India & USA",
      "summary": "Annual India-US bilateral army exercise held in Rajasthan."
    },
    "mcq": {
      "question": "The bilateral military exercise 'Yudh Abhyas 2026' was conducted between India and which country?",
      "options": ["UK", "France", "USA", "Japan"],
      "correct": 2,
      "explanation": "The 22nd edition of Yudh Abhyas was held between India and the USA at the Mahajan Field Firing Range."
    },
    "upscHighlights": ["22nd Edition", "India & USA", "Location: Mahajan Field Firing Range, Rajasthan"],
    "strategicImportance": "Enhances interoperability and counter-terrorism tactical skills."
  },
  {
    "id": "sept-2026-004",
    "topic": "Military Exercises",
    "text": "The Indian Air Force hosted **Tarang Shakti 2026**, a massive multinational combat air exercise in Jodhpur, Rajasthan, with participation from around 40 nations.",
    "details": {
      "winner": "Indian Air Force (IAF)",
      "award": "Exercise Tarang Shakti 2026",
      "nationality": "Multinational",
      "summary": "IAF hosted the largest multilateral air exercise in Jodhpur to showcase indigenous defence capabilities."
    },
    "mcq": {
      "question": "The multinational combat air exercise 'Tarang Shakti 2026' was hosted at which location in India?",
      "options": ["Kalaikunda", "Jodhpur", "Gwalior", "Hindon"],
      "correct": 1,
      "explanation": "Tarang Shakti 2026 was conducted by the IAF in Jodhpur, Rajasthan."
    },
    "upscHighlights": ["Multilateral Air Exercise", "Hosted by IAF", "Location: Jodhpur, Rajasthan"],
    "strategicImportance": "Demonstrates India's diplomatic reach and indigenous platforms like LCA Tejas."
  },
  {
    "id": "sept-2026-005",
    "topic": "Space Missions",
    "text": "ISRO successfully launched the **EOS-05** Earth Observation Satellite on September 3, 2026, using the **GSLV Mark II** rocket. It is India's first imaging satellite positioned in a geosynchronous orbit.",
    "details": {
      "winner": "ISRO",
      "award": "Launch of EOS-05",
      "nationality": "India",
      "summary": "ISRO launched its first geosynchronous imaging satellite, EOS-05, via GSLV Mk II."
    },
    "mcq": {
      "question": "ISRO launched the EOS-05 satellite in Sept 2026. What launch vehicle was used?",
      "options": ["PSLV-C56", "GSLV Mark II", "LVM3", "SSLV-D3"],
      "correct": 1,
      "explanation": "EOS-05 was launched using the GSLV Mark II."
    },
    "upscHighlights": ["EOS-05", "GSLV Mark II", "Geosynchronous orbit imaging"],
    "strategicImportance": "Enhances real-time imaging and disaster management capabilities."
  },
  {
    "id": "sept-2026-006",
    "topic": "Military Exercises",
    "text": "Annual bilateral naval exercise **SLINEX-26** between India and Sri Lanka commenced in September 2026, aimed at enhancing interoperability in the Indian Ocean Region.",
    "details": {
      "winner": "India & Sri Lanka",
      "award": "SLINEX-26",
      "nationality": "India & Sri Lanka",
      "summary": "Bilateral naval exercise between India and Sri Lanka to secure the IOR."
    },
    "mcq": {
      "question": "SLINEX-26 is a bilateral naval exercise between India and which country?",
      "options": ["Singapore", "Sri Lanka", "Seychelles", "Saudi Arabia"],
      "correct": 1,
      "explanation": "SLINEX stands for Sri Lanka India Naval Exercise."
    },
    "upscHighlights": ["Naval Exercise", "India & Sri Lanka", "Indian Ocean Region focus"],
    "strategicImportance": "Ensures maritime security in the strategic Indian Ocean Region."
  },
  {
    "id": "sept-2026-007",
    "topic": "Space Collaborations",
    "text": "The **TRISHNA** (Thermal infraRed Imaging Satellite for High-resolution Natural resource Assessment) mission is progressing as a joint Earth observation project between ISRO (India) and CNES (France).",
    "details": {
      "winner": "ISRO & CNES",
      "award": "TRISHNA Mission progress",
      "nationality": "India & France",
      "summary": "Indo-French thermal imaging satellite project."
    },
    "mcq": {
      "question": "The TRISHNA mission is a joint Earth observation satellite project between ISRO and the space agency of which country?",
      "options": ["Russia (Roscosmos)", "Japan (JAXA)", "USA (NASA)", "France (CNES)"],
      "correct": 3,
      "explanation": "TRISHNA is jointly developed with France's CNES."
    },
    "upscHighlights": ["Indo-French Mission", "Thermal Infrared Imaging", "Climate monitoring"],
    "strategicImportance": "Key for climate change and water resource management."
  },
  {
    "id": "sept-2026-008",
    "topic": "Economy & Reports",
    "text": "The **OECD** (Organisation for Economic Co-operation and Development) raised India's GDP growth forecast to **7.1%** for the fiscal year 2026-27.",
    "details": {
      "winner": "India's Economy",
      "award": "7.1% Growth Forecast",
      "nationality": "OECD",
      "summary": "OECD upgrades India's FY27 growth to 7.1%."
    },
    "mcq": {
      "question": "Which international organisation raised India's GDP growth forecast for FY 2026-27 to 7.1% in September 2026?",
      "options": ["IMF", "World Bank", "OECD", "ADB"],
      "correct": 2,
      "explanation": "The OECD raised India's forecast to 7.1%."
    },
    "upscHighlights": ["7.1% GDP growth forecast", "FY 2026-27", "By OECD"],
    "strategicImportance": "Indicates resilience of the Indian economy amidst global headwinds."
  },
  {
    "id": "sept-2026-009",
    "topic": "Sports",
    "text": "At the 20th Asian Games 2026 held in **Aichi-Nagoya, Japan**, the Indian Men's and Women's **Kabaddi** teams both secured Gold medals.",
    "details": {
      "winner": "Indian Kabaddi Teams",
      "award": "Gold Medals at Asian Games 2026",
      "nationality": "India",
      "summary": "India dominates Kabaddi at the Aichi-Nagoya Asian Games."
    },
    "mcq": {
      "question": "The 20th Asian Games in 2026, where Indian Kabaddi teams won Gold, were hosted in which city?",
      "options": ["Hangzhou", "Aichi-Nagoya", "Doha", "Jakarta"],
      "correct": 1,
      "explanation": "The 2026 Asian Games were hosted in Aichi-Nagoya, Japan."
    },
    "upscHighlights": ["Asian Games 2026", "Aichi-Nagoya, Japan", "Kabaddi Gold (Men & Women)"],
    "strategicImportance": "Boosts India's soft power and sporting profile globally."
  },
  {
    "id": "sept-2026-010",
    "topic": "Defence Tech",
    "text": "DRDO signed its first high-value deep-tech project under the Technology Development Fund (TDF) with **Zero mK India Pvt Ltd** to indigenously develop a **20 mK Dilution Refrigerator**, crucial for quantum computing.",
    "details": {
      "winner": "Zero mK India Pvt Ltd",
      "award": "TDF contract for 20 mK Dilution Refrigerator",
      "nationality": "India",
      "summary": "DRDO funds indigenous quantum computing hardware development."
    },
    "mcq": {
      "question": "DRDO partnered with Zero mK India to develop a '20 mK Dilution Refrigerator'. This technology is essential for which field?",
      "options": ["Nuclear Submarines", "Quantum Computing", "Hypersonic Missiles", "Satellite Imaging"],
      "correct": 1,
      "explanation": "A Dilution Refrigerator is a critical component for maintaining the ultra-low temperatures needed for quantum computing."
    },
    "upscHighlights": ["DRDO TDF Scheme", "Quantum Computing", "Indigenous Dilution Refrigerator"],
    "strategicImportance": "Crucial step toward achieving self-reliance in cutting-edge quantum technologies."
  }
];

function updateFile(filename) {
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');
    
    // Find where the JSON starts
    // In notes_data_exam_focused.js, it's typically:
    // let CURRENT_AFFAIRS_DB = { ... }
    
    // Attempt 1: regex to find "September 2026": [ ... ]
    const pattern1 = /"September 2026":\s*\[\s*\]/;
    if (pattern1.test(content)) {
        console.log("Found empty September 2026 array in " + filename);
        
        // Let's inject items
        const jsonStr = JSON.stringify(septData, null, 2);
        // Remove the outer brackets of the array for appending
        const innerJson = jsonStr.substring(jsonStr.indexOf('[') + 1, jsonStr.lastIndexOf(']')).trim();
        
        content = content.replace(pattern1, '"September 2026": [\n' + innerJson + '\n  ]');
        fs.writeFileSync(filename, content, 'utf8');
        console.log("Updated " + filename);
        return;
    }
    
    // Attempt 2: If "September 2026" is not empty but exists
    const pattern2 = /("September 2026":\s*\[)([\s\S]*?)(\],?\s*"October 2026")/;
    if (pattern2.test(content)) {
        console.log("Found existing September 2026 array in " + filename);
        const match = content.match(pattern2);
        const existingInner = match[2].trim();
        
        const jsonStr = JSON.stringify(septData, null, 2);
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

    console.log("Could not find September 2026 in " + filename);
}

['notes_data_exam_focused.js', 'current_affairs_db.js', 'ca_data.js'].forEach(updateFile);
