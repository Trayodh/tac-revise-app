const fs = require('fs');
const path = require('path');

async function runMilitaryExercisesEngine() {
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const PIB_RSS_FEEDS = [
  'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3',   // Ministry of Defence
  'https://pib.gov.in/RssMain.aspx?ModId=2&Lang=1&Regid=3',   // Prime Minister's Office
  'https://pib.gov.in/RssMain.aspx?ModId=5&Lang=1&Regid=3',   // Ministry of External Affairs
];

const GNEWS_QUERIES = [
  'India military exercise',
  'India joint military exercise',
  'India bilateral naval exercise',
  'India bilateral air exercise',
  'Indian Navy port call',
  'Indian Navy goodwill visit',
  'NATO military exercise',
  'RIMPAC exercise',
  'ASEAN military exercise',
  'AUKUS military exercise'
];

const GNEWS_RSS_FEEDS = GNEWS_QUERIES.map(q =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(q + ' after:' + new Date(Date.now() - 86400000 * 7).toISOString().split('T')[0])}&hl=en-IN&gl=IN&ceid=IN:en`
);

async function fetchRssFeed(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      },
      signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null && items.length < 15) {
      const c = match[1];
      const titleM  = c.match(/<title>([\s\S]*?)<\/title>/);
      const descM   = c.match(/<description>([\s\S]*?)<\/description>/) || c.match(/<summary>([\s\S]*?)<\/summary>/);
      const dateM   = c.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const linkM   = c.match(/<link>([\s\S]*?)<\/link>/) || c.match(/<link\s[^>]*href="([^"]+)"/) ;
      let title = titleM ? titleM[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,'').trim() : '';
      let desc  = descM  ? descM[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,'').substring(0,500).trim() : '';
      let pubDate = dateM ? dateM[1].trim() : '';
      let link  = linkM ? (linkM[2]||linkM[1]).trim() : '';
      if (title && title.length > 10) items.push({ title, description: desc, pubDate, link });
    }
    return items;
  } catch(_) { return []; }
}

  console.log("=== STARTING MILITARY EXERCISES & PORT CALLS ENGINE ===");
  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing. Aborting.");
    return;
  }

  // 1. Extract MILITARY_EXERCISES_LIVE and MILITARY_EXERCISES_ARCHIVE from data.js
  const dataJsPath = path.join(__dirname, 'data.js');
  let content = fs.readFileSync(dataJsPath, 'utf8');
  
  const finalStartIdx = content.indexOf('let MILITARY_EXERCISES_LIVE =');
  const archStartIdx = content.indexOf('let MILITARY_EXERCISES_ARCHIVE =');
  const finalEndIdx = content.indexOf('let CURRENT_AFFAIRS_DB =');

  if (finalStartIdx === -1 || archStartIdx === -1 || finalEndIdx === -1) {
    console.error("Could not locate MILITARY_EXERCISES_LIVE or MILITARY_EXERCISES_ARCHIVE in data.js");
    return;
  }

  const liveExpr = content.substring(finalStartIdx, archStartIdx).replace('let MILITARY_EXERCISES_LIVE =', '').trim().replace(/;$/, '');
  const archExpr = content.substring(archStartIdx, finalEndIdx).replace('let MILITARY_EXERCISES_ARCHIVE =', '').trim().replace(/;$/, '');
  
  let dbLive = eval('(' + liveExpr + ')');
  let dbArch = eval('(' + archExpr + ')');
  
  const monthStr = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
  if (!dbLive[monthStr]) dbLive[monthStr] = [];
  if (!dbArch[monthStr]) dbArch[monthStr] = [];

  // Pass existing data
  const currentMonthData = dbLive[monthStr];
  console.log(`[DB] Extracted ${currentMonthData.length} existing live entries for ${monthStr}.`);

  // 2. Fetch new raw items from trusted sources
  console.log("[FETCH] Harvesting intelligence from trusted feeds...");
  const results = await Promise.allSettled([
    ...PIB_RSS_FEEDS.map(u => fetchRssFeed(u)),
    ...GNEWS_RSS_FEEDS.map(u => fetchRssFeed(u))
  ]);

  const allItems = [];
  results.forEach(r => {
    if (r.status === 'fulfilled') {
      r.value.forEach(item => allItems.push(item));
    }
  });

  const uniqueItemsMap = new Map();
  allItems.forEach(i => {
    const key = i.title.toLowerCase().substring(0, 50);
    if (!uniqueItemsMap.has(key)) uniqueItemsMap.set(key, i);
  });
  const rawItems = Array.from(uniqueItemsMap.values()).slice(0, 40);

  console.log(`[FETCH] Acquired ${rawItems.length} unique raw feed items.`);

  // 3. Assemble payload
  const SYSTEM_PROMPT = `You are the **Military Exercises & Port Calls Intelligence Engine** for a Defence Studies application designed for **NDA, CDS, AFCAT, CAPF, INET, Agniveer, SSB, UPSC Defence aspirants, and Defence Enthusiasts.**

The goal is to maintain a **Global Military Exercises Database**, but strictly prioritize Indian Armed Forces activities. 

---

# TIER SYSTEM & COVERAGE

Evaluate every exercise and assign a tier and relevance level:

**Tier 1 (High Relevance):**
* Any exercise involving the Indian Army, Indian Navy, Indian Air Force, Indian Coast Guard, Tri-Service Commands, or Indian Special Forces.
* All port calls involving Indian military ships, submarines, and aircraft.

**Tier 2 (Medium Relevance):**
* Major multinational exercises relevant to India's strategic environment (e.g., NATO, QUAD, AUKUS, ASEAN, SCO, BRICS, RIMPAC, BALTOPS, Red Flag, Cobra Gold, Talisman Sabre, Keen Sword, Vostok, Zapad, etc.), even if India is not participating.

**Tier 3 (Low Relevance):**
* Significant regional military exercises affecting South Asia, the Indo-Pacific, the Indian Ocean Region, or India's security interests.

Do NOT include minor internal exercises of foreign nations unless they represent a major strategic shift.

---

# INCLUDE

Capture all:
* Bilateral Exercises
* Multilateral Exercises
* Naval Exercises
* Air Exercises
* Army Exercises
* Amphibious Exercises
* Special Forces Exercises
* Cyber Warfare Exercises
* Space Security Exercises
* Anti-Submarine Warfare Exercises
* Maritime Security Exercises
* Missile Defence Exercises
* Logistics Exercises
* Joint Command Exercises
* HADR Exercises
* Port Calls
* Fleet Reviews
* Goodwill Visits
* Carrier Strike Group Visits
* Squadron Visits
* Submarine Visits
* Warship Visits
* Naval Diplomacy Missions

---

# TRUSTED SOURCES ONLY

Only use information verified from:
* Ministry of Defence (India)
* PIB
* Indian Army
* Indian Navy
* Indian Air Force
* Indian Coast Guard
* DRDO
* Ministry of External Affairs
* Official Armed Forces websites of partner nations
* NATO (where applicable)
* ASEAN
* QUAD
* UN
* Reuters
* AP
* AFP
* Jane's Defence
* IISS
* SIPRI
* Naval News
* Defence News
* FlightGlobal
* Aviation Week

Never use rumours, social media posts, blogs, or unverified sources.

---

# OUTPUT FORMAT

For every exercise or port call generate the following JSON object. Return ONLY a strict JSON Array of objects matching this schema:

{
  "id": "me_<date>_<unique_id>",
  "title": "",
  "type": "",
  "exercise_name": "",
  "edition": "",
  "status": "",
  "start_date": "",
  "end_date": "",
  "duration": "",
  "year": "",
  "tier": 1,
  "relevance": "High",
  "participant_nations": [],
  "indian_service": [],
  "foreign_services": [],
  "location": {
    "city": "",
    "state": "",
    "country": "",
    "region": "",
    "coordinates": ""
  },
  "exercise_domain": [],
  "equipment_used": {
    "india": [],
    "foreign": []
  },
  "key_platforms": [],
  "ships": [],
  "submarines": [],
  "aircraft": [],
  "helicopters": [],
  "uavs": [],
  "armoured_vehicles": [],
  "artillery": [],
  "missiles": [],
  "special_forces": [],
  "objectives": [],
  "activities": [],
  "strategic_significance": "",
  "takeaways": [],
  "exam_importance": "",
  "related_static_topics": [],
  "keywords": [],
  "confidence_score": "",
  "last_verified": ""
}

---

# FOR PORT CALLS INCLUDE

Additionally capture (in appropriate existing fields or activities/takeaways if specific field missing):
* Visiting Ship Name
* Ship Class
* Hull Number
* Fleet
* Home Port
* Commanding Officer (if officially released)
* Host Nation
* Host Port
* Arrival Date
* Departure Date
* Purpose of Visit
* Bilateral Engagements
* Professional Exchanges
* Harbour Phase Activities
* Sea Phase Activities
* Joint Drills Conducted
* Community Outreach
* Diplomatic Significance

---

# EQUIPMENT

Always identify all major equipment used.
Examples include:
Ships, Submarines, Aircraft, Helicopters, UAVs, Missiles, Tanks, IFVs, Artillery, Air Defence Systems, Radars, Support Ships, Landing Craft, Marine Commandos, Special Forces, Logistics Vehicles
If officially disclosed.

---

# STRATEGIC ANALYSIS

Generate a concise analysis covering:
* Why the exercise was conducted
* Indo-Pacific significance
* Regional security implications
* Maritime security relevance
* Counter-terrorism relevance
* Defence diplomacy impact
* Interoperability gains
* Technology showcased
* New capabilities demonstrated

---

# EXAM MODE

Generate likely NDA/CDS/AFCAT questions in the "exam_importance" string such as:
* Participating countries
* Host nation
* Exercise location
* Type of exercise
* Frequency
* Military branch
* Equipment used
* Strategic objectives
* Recent changes from previous editions

---

# DATABASE RULES

If an exercise already exists:
* Update instead of creating duplicates.
* Preserve its ID.
* Add new participating nations if expanded.
* Update equipment list.
* Update duration if revised.
* Update location if changed.
* Mark completed exercises as "Completed."
* Archive only when appropriate.

---

# QUALITY CONTROL

Reject entries if:
* Exercise name is incorrect.
* Dates cannot be verified.
* Participating nations are uncertain.
* Equipment is speculative.
* Information comes from unofficial sources.
* Confidence score is below 95%.

Mark such entries as:
"status": "Pending Verification"

Do not publish them until verified. Return ONLY the raw JSON array. Do not wrap it in markdown fences.`;

  const USER_PROMPT = `
Here is the current state of the Military Exercises database for this month:
<EXISTING_DB>
${JSON.stringify(currentMonthData)}
</EXISTING_DB>

Here are the new raw feed items intercepted today:
<NEW_RAW_FEEDS>
${JSON.stringify(rawItems.map(i => ({ title: i.title, desc: i.description, date: i.pubDate })))}
</NEW_RAW_FEEDS>

Follow all system instructions. Extract items related to Indian Military Exercises, Port Calls, or major Global Joint Training (NATO, RIMPAC, etc.). Output the completely updated, merged, and verified JSON array.
`;

  console.log("[GEMINI] Connecting to Gemini 2.5 Flash Intelligence Engine for Military Exercises...");
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ parts: [{ text: USER_PROMPT }] }],
        generationConfig: {
          temperature: 0.1,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) {
      console.error("[GEMINI] Error:", await res.text());
      return;
    }

    const data = await res.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    // Clean and Parse
    const cleaned = rawText.replace(/^\s*```json\s*/,'').replace(/\s*```\s*$/,'').trim();
    const newDbArray = JSON.parse(cleaned);

    if (!Array.isArray(newDbArray)) {
      console.error("[ENGINE] Gemini did not return an array.");
      return;
    }

    // Filter out anything that was accidentally marked as pending_verification but still returned
    const filteredDbArray = newDbArray.filter(item => item.status !== "Pending Verification" && !item.status?.toLowerCase().includes("pending"));

    console.log(`[ENGINE] Gemini returned ${filteredDbArray.length} fully verified entries (omitted pending items).`);

    // 4. Overwrite data.js with the new array
    dbLive[monthStr] = filteredDbArray;
    
    const formattedDbLive = "let MILITARY_EXERCISES_LIVE = " + JSON.stringify(dbLive, null, 2) + ";\n\n";
    const formattedDbArch = "let MILITARY_EXERCISES_ARCHIVE = " + JSON.stringify(dbArch, null, 2) + ";\n\n";
    
    // We already extracted everything between finalStartIdx and finalEndIdx
    const newContent = content.substring(0, finalStartIdx) + formattedDbLive + formattedDbArch + content.substring(finalEndIdx);
    fs.writeFileSync(dataJsPath, newContent, 'utf8');
    console.log(`[ENGINE] SUCCESS: data.js updated with MILITARY_EXERCISES_LIVE and MILITARY_EXERCISES_ARCHIVE databases.`);

    return filteredDbArray;
  } catch(e) {
    console.error("[ENGINE] Exception during generation:", e);
    throw e;
  }
}

module.exports = runMilitaryExercisesEngine;
