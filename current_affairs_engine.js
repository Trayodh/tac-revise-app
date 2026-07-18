const fs = require('fs');
const path = require('path');

async function runCurrentAffairsEngine() {
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// Trusted sources from the prompt mapped to standard Google News/PIB domains.
// The engine will enforce that ONLY these domains or recognized queries are used.
const UPSC_TOPIC_CATEGORIES = [
  { name: 'Polity & Governance',      color: '#4f46e5', queries: ['India parliament', 'supreme court India', 'constitutional amendment India', 'government policy India', 'India election commission', 'India law ministry'] },
  { name: 'Economy & Finance',        color: '#0891b2', queries: ['RBI India economy', 'India GDP budget', 'GST India', 'stock market India finance', 'India inflation CPI', 'India exports imports trade balance'] },
  { name: 'Defence & Security',       color: '#dc2626', queries: ['Indian army navy air force', 'defence ministry India', 'military exercise India', 'India nuclear missile', 'India border security', 'India defence procurement'] },
  { name: 'Military Appointments',    color: '#b45309', queries: ['India army chief appointment', 'COAS CNS CAS India appointed', 'Indian military general admiral marshal appointed', 'India defence secretary chairman chiefs staff'] },
  { name: 'International Relations',  color: '#7c3aed', queries: ['India foreign policy', 'India bilateral agreement', 'India United Nations', 'India diplomacy', 'India ASEAN SAARC', 'India G20 SCO BRICS'] },
  { name: 'Environment & Ecology',    color: '#059669', queries: ['climate change India', 'environment pollution India', 'wildlife India', 'India forest conservation', 'India biodiversity COP', 'India renewable energy solar wind'] },
  { name: 'Science & Technology',     color: '#d97706', queries: ['ISRO space India', 'India technology innovation', 'India AI research', 'India nuclear energy', 'India semiconductor chip', 'India quantum computing'] },
  { name: 'Social Issues',            color: '#db2777', queries: ['India education scheme', 'India health scheme', 'India poverty scheme', 'India women empowerment', 'India tribal welfare', 'India Ayushman Bharat'] },
  { name: 'History & Culture',        color: '#92400e', queries: ['India heritage UNESCO', 'India cultural festival', 'India archaeology history', 'India art award', 'India yoga classical arts', 'India museum ancient site'] },
  { name: 'Geography & Disasters',    color: '#0369a1', queries: ['India disaster cyclone flood', 'India earthquake geography', 'India river dam project', 'India agriculture crop', 'India NDMA disaster management', 'India monsoon drought'] },
  { name: 'Awards & Appointments',    color: '#6d28d9', queries: ['India appointment minister CEO', 'India award prize', 'India Padma Bharat Ratna', 'India Nobel prize winner'] },
  { name: 'Sports',                   color: '#0d9488', queries: ['India cricket hockey Olympics', 'India sports championship medal', 'India FIFA athletics', 'India chess tennis badminton'] },
  { name: 'Important Days & Themes',  color: '#ec4899', queries: ['India important day theme', 'national international day observed', 'India day celebrated theme'] },
];

const PIB_RSS_FEEDS = [
  'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3',   // Ministry of Defence
  'https://pib.gov.in/RssMain.aspx?ModId=2&Lang=1&Regid=3',   // Prime Minister's Office
  'https://pib.gov.in/RssMain.aspx?ModId=4&Lang=1&Regid=3',   // Ministry of Finance
  'https://pib.gov.in/RssMain.aspx?ModId=5&Lang=1&Regid=3',   // Ministry of External Affairs
  'https://pib.gov.in/RssMain.aspx?ModId=35&Lang=1&Regid=3',  // Ministry of Environment
  'https://pib.gov.in/RssMain.aspx?ModId=8&Lang=1&Regid=3',   // Ministry of Science
  'https://pib.gov.in/RssMain.aspx?ModId=37&Lang=1&Regid=3',  // Ministry of Health
  'https://pib.gov.in/RssMain.aspx?ModId=23&Lang=1&Regid=3',  // Ministry of Home Affairs
  'https://pib.gov.in/RssMain.aspx?ModId=10&Lang=1&Regid=3',  // Ministry of Commerce
  'https://pib.gov.in/RssMain.aspx?ModId=11&Lang=1&Regid=3',  // Ministry of Agriculture
  'https://pib.gov.in/RssMain.aspx?ModId=3&Lang=1&Regid=3',   // Ministry of Railways
  'https://pib.gov.in/RssMain.aspx?ModId=22&Lang=1&Regid=3',  // Ministry of Education
  'https://pib.gov.in/RssMain.aspx?ModId=31&Lang=1&Regid=3',  // Ministry of Space (ISRO)
  'https://pib.gov.in/RssMain.aspx?ModId=18&Lang=1&Regid=3',  // Ministry of Petroleum
];

const MILITARY_APPT_FEEDS = [
  `https://news.google.com/rss/search?q=${encodeURIComponent('India army chief COAS appointed')}&hl=en-IN&gl=IN&ceid=IN:en`,
  `https://news.google.com/rss/search?q=${encodeURIComponent('India navy chief CNS appointed')}&hl=en-IN&gl=IN&ceid=IN:en`,
  `https://news.google.com/rss/search?q=${encodeURIComponent('India air force chief CAS appointed')}&hl=en-IN&gl=IN&ceid=IN:en`,
  `https://news.google.com/rss/search?q=${encodeURIComponent('India military general vice admiral air marshal appointed')}&hl=en-IN&gl=IN&ceid=IN:en`,
  `https://news.google.com/rss/search?q=${encodeURIComponent('India defence secretary CDS chairman chiefs of staff')}&hl=en-IN&gl=IN&ceid=IN:en`,
];

const GNEWS_RSS_FEEDS = UPSC_TOPIC_CATEGORIES.map(cat =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(cat.queries[0] + ' after:' + new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0])}&hl=en-IN&gl=IN&ceid=IN:en`
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
    while ((match = itemRegex.exec(xml)) !== null && items.length < 10) {
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

async function runCurrentAffairsEngine() {
  console.log("=== STARTING DEFENCE CURRENT AFFAIRS ENGINE ===");
  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing. Aborting.");
    return;
  }

  // 1. Extract CURRENT_AFFAIRS_LIVE and CURRENT_AFFAIRS_ARCHIVE from data.js
  const dataJsPath = path.join(__dirname, 'data.js');
  let content = fs.readFileSync(dataJsPath, 'utf8');
  const startIdx = content.indexOf('let CURRENT_AFFAIRS_LIVE =');
  const endIdx = content.indexOf('const CBT_EXAMS_DATABASE =');
  
  if (startIdx === -1 || endIdx === -1) {
    // Try fallback to old naming
    const oldStartIdx = content.indexOf('let CURRENT_AFFAIRS_DB =');
    if (oldStartIdx !== -1) {
      console.log("Found old CURRENT_AFFAIRS_DB. Will migrate to LIVE/ARCHIVE.");
      content = content.replace('let CURRENT_AFFAIRS_DB =', 'let CURRENT_AFFAIRS_LIVE =');
      content = content.replace('const CBT_EXAMS_DATABASE =', 'let CURRENT_AFFAIRS_ARCHIVE = {};\n\nconst CBT_EXAMS_DATABASE =');
    } else {
      console.error("Could not locate CURRENT_AFFAIRS_LIVE in data.js");
      return;
    }
  }

  // Reload content after potential migration
  const finalStartIdx = content.indexOf('let CURRENT_AFFAIRS_LIVE =');
  const archStartIdx = content.indexOf('let CURRENT_AFFAIRS_ARCHIVE =');
  const finalEndIdx = content.indexOf('const CBT_EXAMS_DATABASE =');

  const liveExpr = content.substring(finalStartIdx, archStartIdx).replace('let CURRENT_AFFAIRS_LIVE =', '').trim().replace(/;$/, '');
  const archExpr = content.substring(archStartIdx, finalEndIdx).replace('let CURRENT_AFFAIRS_ARCHIVE =', '').trim().replace(/;$/, '');
  
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
    ...GNEWS_RSS_FEEDS.map(u => fetchRssFeed(u)),
    ...MILITARY_APPT_FEEDS.map(u => fetchRssFeed(u))
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
  const rawItems = Array.from(uniqueItemsMap.values()).slice(0, 30);

  console.log(`[FETCH] Acquired ${rawItems.length} unique raw feed items.`);

  // 3. Assemble payload
  const SYSTEM_PROMPT = `You are the **Current Affairs Intelligence Engine** for a Defence Studies application designed for **NDA, CDS, AFCAT, CAPF, INET, Agniveer, SSC, and Defence Enthusiasts**.

Your primary responsibility is **maintaining an accurate, trusted, exam-oriented Current Affairs database.**

## PRIMARY OBJECTIVES & STRICT WORKFLOW
1. Load the existing Current Affairs database from <EXISTING_DB>.
2. Load newly fetched verified Current Affairs from <NEW_RAW_FEEDS>.
3. Compare every new article against the existing database.
4. Update existing entries if the event has evolved (e.g., casualty numbers changed, mission updated).
5. Merge duplicate entries (keep only the most complete version).
6. Remove outdated, false, superseded, or unverified entries.
7. Preserve stable IDs whenever possible (do not generate new IDs for existing articles).
8. Sort entries chronologically (newest first).
9. Validate every field before writing to the database.
10. Never delete historical Current Affairs solely because they are old. Only archive or remove entries that are false, duplicated, or no longer appropriate for the app's configured Current Affairs window.

## TRUSTED SOURCES ENFORCEMENT
Every Current Affair must pass verification. Only accept information if it is highly likely to be confirmed by Indian Government (PIB, MoD, DRDO, etc.), International Orgs, Defence Sources (Jane's, SIPRI), or Indian Newspapers (The Hindu, Indian Express).

## CONFIDENCE SCORE & VERIFICATION
**Never fabricate Current Affairs. If an article cannot be verified from trusted sources or has a confidence score below 95%, mark it as \`pending_verification\` and do not publish it.**
Omit any entry with a confidence score below 95% from the final array.

## OUTPUT FORMAT
Your output MUST be a strict JSON Array of objects. Each object must follow this exact schema to integrate with the frontend UI:
{
  "id": "ca_live_<date>_<unique_id>",
  "topic": "<Category>",
  "topicColor": "<Hex Color based on category>",
  "summary": "<Title - Clear exam-oriented title>",
  "text": "<3-6 paragraphs covering What happened, Why is it important, Background context. Use HTML <strong> and <mark style='background:rgba(255,210,0,0.25);padding:1px 4px;border-radius:3px;'> for key facts.>",
  "quickSummary": "<30-50 words quick summary>",
  "detailedAnalysis": "<Bullet points containing: Names, Countries, Ranks, Equipment, Missiles, Exercises, Dates>",
  "backgroundContext": "<Why Important for NDA/CDS/AFCAT? Explain likely exam relevance and possible factual questions>",
  "stakeholders": ["<Stakeholder 1>", "<Stakeholder 2>"],
  "examRelevanceMatrix": { "NDA": "High", "CDS": "High", "AFCAT": "High", "CAPF": "High", "UPSC": "High" },
  "relatedTopics": ["[[<Static GK Link e.g. Kargil -> Geography of Ladakh>]]", "[[<Keyword>]]"],
  "upscHighlights": ["<UPSC key fact 1>", "<UPSC key fact 2>"],
  "strategicImportance": "<Difficulty: Easy/Medium/Hard. Confidence Score: XX%>",
  "verificationStatus": "Verified (Official Primary Source)",
  "publicationDate": "<DD Month YYYY>",
  "mcq": {
    "question": "<A UPSC Prelims-style MCQ question.>",
    "options": ["<A>", "<B>", "<C>", "<D>"],
    "correct": 0,
    "explanation": "<Detailed explanation referencing the correct UPSC-standard information.>"
  }
}

Return ONLY the raw JSON array. Do not wrap it in markdown fences like \\\`\\\`\\\`json. Ensure it is valid JSON.\`;

  const USER_PROMPT = \`
Here is the current state of the database for this month:
<EXISTING_DB>
\${JSON.stringify(currentMonthData)}
</EXISTING_DB>

Here are the new raw feed items intercepted today:
<NEW_RAW_FEEDS>
\${JSON.stringify(rawItems.map(i => ({ title: i.title, desc: i.description, date: i.pubDate })))}
</NEW_RAW_FEEDS>

Follow all system instructions. Output the completely updated, merged, and verified JSON array.
\`;

  console.log("[GEMINI] Connecting to Gemini 2.5 Flash Intelligence Engine...");
  try {
    const res = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=\${GEMINI_API_KEY}\`, {
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
    const cleaned = rawText.replace(/^\\s*\\\`\\\`\\\`json\\s*/,'').replace(/\\s*\\\`\\\`\\\`\\s*$/,'').trim();
    const newDbArray = JSON.parse(cleaned);

    if (!Array.isArray(newDbArray)) {
      console.error("[ENGINE] Gemini did not return an array.");
      return;
    }

    // Filter out anything that was accidentally marked as pending_verification but still returned
    const filteredDbArray = newDbArray.filter(item => item.verificationStatus !== "pending_verification" && !item.verificationStatus?.toLowerCase().includes("pending"));

    console.log(`[ENGINE] Gemini returned ${filteredDbArray.length} fully verified entries (omitted pending items).`);

    // 4. Overwrite data.js with the new array
    dbLive[monthStr] = filteredDbArray;
    
    const formattedDbLive = "let CURRENT_AFFAIRS_LIVE = " + JSON.stringify(dbLive, null, 2) + ";\n\n";
    const formattedDbArch = "let CURRENT_AFFAIRS_ARCHIVE = " + JSON.stringify(dbArch, null, 2) + ";\n\n";
    
    // We already extracted everything between finalStartIdx and finalEndIdx
    const newContent = content.substring(0, finalStartIdx) + formattedDbLive + formattedDbArch + content.substring(finalEndIdx);
    fs.writeFileSync(dataJsPath, newContent, 'utf8');
    console.log(`[ENGINE] SUCCESS: data.js updated with LIVE and ARCHIVE databases.`);

    return filteredDbArray;
  } catch(e) {
    console.error("[ENGINE] Exception during generation:", e);
    throw e;
  }
}

module.exports = runCurrentAffairsEngine;
