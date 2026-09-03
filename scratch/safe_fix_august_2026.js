const fs = require('fs');

const august2026News = [
    {
      "id": "ca-august-2026-001",
      "topic": "🔴 MUST KNOW | Defence & Security | Defence Production Milestone",
      "text": "India's domestic defence production reached a record **₹1.78 lakh crore** in the 2025–26 fiscal year, marking a nearly four-fold increase since 2014.",
      "details": {
        "summary": "### 📌 What Happened\nDefence Minister Rajnath Singh announced that India's domestic defence production reached a historic high, with exports also hitting an all-time record of ₹38,424 crore.\n\n### 🎯 Why It Matters\nThis highlights India's massive transition from a defence importer to a global exporter and self-reliant manufacturer under 'Aatmanirbhar Bharat'.\n\n### 🧠 Key Facts\n- Production value: ₹1.78 lakh crore.\n- Export value: ₹38,424 crore.\n- Transfer of technology for missile systems approved for private sector.\n\n### 🔗 Static GK Connection\nThe Defence Research and Development Organisation (DRDO) and Department of Defence Production (DDP) are key pillars in this achievement.\n\n### ⚠️ Exam Trap\nUPSC often tests exact figures or percentage growths. Remember the 'nearly four-fold increase' compared to 2014.\n\n### 🎯 Possible Question Angle\n'Which of the following statements is correct regarding India's defence exports in 2025-26?'"
      },
      "mcq": null
    },
    {
      "id": "ca-august-2026-002",
      "topic": "🟠 IMPORTANT | International Relations | GCAP Fighter Jet Programme",
      "text": "India officially joined the **Global Combat Air Programme (GCAP)**—a collaborative sixth-generation fighter jet project—as a 'Dialogue Partner'.",
      "details": {
        "summary": "### 📌 What Happened\nIn late August 2026, India became a 'Dialogue Partner' in the GCAP, a sixth-generation stealth fighter jet development program.\n\n### 🎯 Why It Matters\nAccess to sixth-generation stealth technologies, advanced sensors, and AI integration will drastically upgrade the IAF's future combat edge.\n\n### 🧠 Key Facts\n- **GCAP Original Partners:** UK, Italy, and Japan.\n- **India's Status:** Dialogue Partner.\n\n### 🔗 Static GK Connection\nIndia is also developing its own 5.5 generation fighter, the Advanced Medium Combat Aircraft (AMCA).\n\n### ⚠️ Exam Trap\nIndia is a 'Dialogue Partner', NOT a full founding member. The founding members are UK, Italy, and Japan.\n\n### 🎯 Possible Question Angle\n'Which three nations are the founding members of the Global Combat Air Programme (GCAP)?'"
      },
      "mcq": null
    },
    {
      "id": "ca-august-2026-003",
      "topic": "🟢 GOOD TO KNOW | Defence & Security | Indigenous Naval Assets Induction",
      "text": "The Indian Navy inducted the second indigenous Diving Support Vessel, **INS Nipun**, and launched the fifth Diving Support Craft (DSC A24) in Kolkata.",
      "details": {
        "summary": "### 📌 What Happened\nMultiple indigenous naval vessels were added to the fleet, including INS Nipun (Diving Support Vessel), DSC A24, and the multi-purpose vessel Samarthak.\n\n### 🎯 Why It Matters\nEnhances the Navy's submarine rescue capabilities, deep-sea diving operations, and coastal patrolling.\n\n### 🧠 Key Facts\n- **INS Nipun:** Diving Support Vessel.\n- **DSC A24:** Launched in Kolkata.\n- **ICGS Ajit:** Fast Patrol Vessel delivered to Coast Guard.\n\n### 🔗 Static GK Connection\nProject 75 and Project 75I deal with submarine building, which require extensive diving support infrastructure.\n\n### ⚠️ Exam Trap\nDo not confuse INS Nipun (Diving Support) with INS Nighat or INS Nishank (Missile Corvettes).\n\n### 🎯 Possible Question Angle\nMatch the following ships with their respective classes or primary roles."
      },
      "mcq": null
    },
    {
      "id": "ca-august-2026-004",
      "topic": "🔴 MUST KNOW | Science & Technology | Xtreme Weather Grade (XWG) Diesel",
      "text": "The Chief of Army Staff launched the indigenously developed **Xtreme Weather Grade (XWG) Diesel**, capable of remaining effective at **-42°C**.",
      "details": {
        "summary": "### 📌 What Happened\nA new specialised diesel fuel was introduced to ensure smooth operation of military vehicles and equipment in extreme high-altitude regions like Siachen and Eastern Ladakh.\n\n### 🎯 Why It Matters\nStandard diesel freezes at sub-zero temperatures. XWG prevents fuel freezing, solving a major logistical nightmare during winter deployments.\n\n### 🧠 Key Facts\n- Operational limit: **-42°C**.\n- Crucial for high-altitude sectors (LAC/LoC).\n\n### 🔗 Static GK Connection\nOperation Meghdoot (1984) secured the Siachen Glacier, the world's highest battlefield, where such extreme weather logistics are necessary.\n\n### ⚠️ Exam Trap\nRemember the exact temperature limit (-42°C), as UPSC might provide options like -30°C or -50°C.\n\n### 🎯 Possible Question Angle\n'What is the freezing point threshold of the newly introduced XWG Diesel for the Indian Army?'"
      },
      "mcq": null
    },
    {
      "id": "ca-august-2026-005",
      "topic": "🟠 IMPORTANT | Defence & Security | Javelin Missile MoU & SAFHAL Engines",
      "text": "Tata Advanced Systems Limited (TASL) signed an MoU to explore co-production of **Javelin Anti-Tank Guided Missiles**, while HAL partnered with Safran for IMRH engines.",
      "details": {
        "summary": "### 📌 What Happened\nIndia strengthened international defence manufacturing ties. TASL will explore producing US Javelin missiles, and SAFHAL (HAL + Safran) will develop engines for the Indian Multi-Role Helicopter (IMRH).\n\n### 🎯 Why It Matters\nBoosts indigenous manufacturing capabilities through crucial technology transfers from the US (Javelin) and France (Safran).\n\n### 🧠 Key Facts\n- **Javelin:** Anti-Tank Guided Missile (US).\n- **SAFHAL:** Joint Venture between HAL and Safran (France).\n- **IMRH:** Indian Multi-Role Helicopter.\n\n### 🔗 Static GK Connection\nIndia's indigenous ATGM is the 'Nag' missile, developed by DRDO under the IGMDP.\n\n### ⚠️ Exam Trap\nThe Javelin is an American weapon, not Israeli (Spike) or Russian (Kornet).\n\n### 🎯 Possible Question Angle\n'With which country's aerospace firm has HAL partnered under the SAFHAL joint venture?'"
      },
      "mcq": null
    }
];

let dbText = fs.readFileSync('current_affairs_db.js', 'utf8');

// Strip out `window.CURRENT_AFFAIRS_DB = ` and the trailing `;`
const prefix = 'window.CURRENT_AFFAIRS_DB = ';
if (!dbText.startsWith(prefix)) {
    console.error('Unexpected file format');
    process.exit(1);
}

// Extract just the JSON part
let jsonString = dbText.substring(prefix.length).trim();
if (jsonString.endsWith(';')) {
    jsonString = jsonString.slice(0, -1);
}

try {
    const dbObj = JSON.parse(jsonString);
    if (dbObj['August 2026']) {
        dbObj['August 2026'] = august2026News;
        
        // Write it back exactly as it was
        const newDbText = prefix + JSON.stringify(dbObj, null, 2) + ';\n';
        fs.writeFileSync('current_affairs_db.js', newDbText, 'utf8');
        console.log("Successfully parsed and updated August 2026 data safely.");
    } else {
        console.log("August 2026 key not found in the DB.");
    }
} catch(e) {
    console.error("Failed to parse DB JSON: ", e.message);
}
