const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const UPSC_TOPIC_CATEGORIES = [
  { name: 'Polity & Governance',      queries: ['India parliament', 'supreme court India', 'government policy India'] },
  { name: 'Economy & Finance',        queries: ['RBI India economy', 'India GDP', 'GST India'] },
  { name: 'Defence & Security',       queries: ['Indian army navy air force', 'defence ministry India', 'military exercise India', 'DRDO', 'missile test India'] },
  { name: 'Military Appointments',    queries: ['India army chief appointment', 'India military general admiral appointed'] },
  { name: 'International Relations',  queries: ['India foreign policy', 'India bilateral agreement', 'India United Nations'] },
  { name: 'Environment & Ecology',    queries: ['climate change India', 'environment pollution India'] },
  { name: 'Science & Technology',     queries: ['ISRO space India', 'India technology innovation'] },
  { name: 'Social Issues',            queries: ['India education scheme', 'India health scheme'] },
  { name: 'Awards & Appointments',    queries: ['India appointment minister CEO', 'India award prize'] },
  { name: 'Sports',                   queries: ['India cricket hockey Olympics', 'India sports championship medal'] },
];

const RSS_FEEDS = [
  'https://pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3',   // MoD
  'https://pib.gov.in/RssMain.aspx?ModId=2&Lang=1&Regid=3',   // PMO
  'https://pib.gov.in/RssMain.aspx?ModId=31&Lang=1&Regid=3',  // ISRO
  'https://pib.gov.in/RssMain.aspx?ModId=5&Lang=1&Regid=3',   // MEA
  ...UPSC_TOPIC_CATEGORIES.map(cat =>
    `https://news.google.com/rss/search?q=${encodeURIComponent(cat.queries[0] + ' after:' + new Date(Date.now() - 86400000 * 20).toISOString().split('T')[0])}&hl=en-IN&gl=IN&ceid=IN:en`
  )
];

async function fetchRssFeed(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null && items.length < 8) {
      const c = match[1];
      const titleM = c.match(/<title>([\s\S]*?)<\/title>/);
      const descM = c.match(/<description>([\s\S]*?)<\/description>/);
      const dateM = c.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      
      let title = titleM ? titleM[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,'').trim() : '';
      let desc = descM ? descM[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]*>/g,'').substring(0,300).trim() : '';
      let pubDate = dateM ? dateM[1].trim() : '';
      
      if (title && title.length > 10) items.push({ title, description: desc, pubDate });
    }
    return items;
  } catch(e) { return []; }
}

async function run() {
  console.log("=== STARTING CURRENT AFFAIRS UPDATER ===");
  if (!GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing. Aborting.");
    return;
  }

  const dbPath = path.join(__dirname, '..', 'current_affairs_db.js');
  let content = fs.readFileSync(dbPath, 'utf8');
  
  const match = content.match(/window\.CURRENT_AFFAIRS_DB\s*=\s*(\{[\s\S]+\});?/);
  if (!match) {
    console.error("Failed to parse current_affairs_db.js");
    return;
  }
  
  let db;
  try {
    db = eval('(' + match[1] + ')');
  } catch(e) {
    console.error("Failed to eval DB object:", e);
    return;
  }

  const currentMonth = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
  if (!db[currentMonth]) {
    db[currentMonth] = [];
  }

  const existingEntries = db[currentMonth];
  console.log(`Found ${existingEntries.length} existing entries for ${currentMonth}.`);

  console.log("Fetching RSS feeds...");
  const results = await Promise.allSettled(RSS_FEEDS.map(u => fetchRssFeed(u)));
  
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
  
  // Shuffle and take top 100 items to avoid overwhelming Gemini but ensure comprehensive backfill
  const rawItems = Array.from(uniqueItemsMap.values())
    .sort(() => 0.5 - Math.random())
    .slice(0, 100);

  console.log(`Acquired ${rawItems.length} unique raw feed items.`);

  const SYSTEM_PROMPT = `You are an elite Military Intelligence and Defence Exams (UPSC NDA, CDS, AFCAT, CAPF) Current Affairs expert. 
Your task is to merge the provided <EXISTING_DATABASE> with the <NEW_RAW_FEEDS>.

====================================================
GLOBAL INTELLIGENCE COLLECTION SYSTEM
====================================================
Current Affairs must never rely only on mainstream news.
Continuously monitor and research publicly available information from a broad range of authoritative and specialized sources.
The objective is to discover exam-relevant developments even if they receive little or no coverage in mainstream media.

Research should include, whenever applicable:
• Government of India Ministries, PIB, Gazette Notifications, Parliament Questions
• Defence entities: DRDO, ISRO, Indian Army, Navy, Air Force, Coast Guard, DGCA, HAL, BEL, BDL
• Global entities: UNESCO, WHO, UN, IMF, World Bank, WTO, IAEA, FATF, INTERPOL, IUCN, IPCC
• International scientific journals, peer-reviewed research, public policy papers
• Military procurement notices, defence exhibitions, international summits

====================================================
DISCOVERY MODE
====================================================
Do not wait for a topic to trend. Actively search for exam-relevant developments.
Whenever a reliable source publishes an exam-relevant update:
Determine its syllabus relevance and assess its probability of appearing in NDA, CDS, AFCAT or CAPF.
If relevant, automatically create a complete Current Affairs module and connect it with related static topics.

====================================================
IMPORTANCE SCORING
====================================================
Assign every current affair an Exam Importance Score based on:
• Official significance, National security, Defence relevance, International relevance
• Frequency of similar PYQs, Constitutional, Scientific, Environmental, Economic importance
• Probability of examination

====================================================
NO ARTIFICIAL EXCLUSIVITY
====================================================
Never claim information is "exclusive" merely because it is uncommon.
Only include information that can be supported by reliable, publicly available sources.
Do not invent, speculate, or rely on rumors, leaks, or unverified social media posts.

STRICT RULES:
1. Generate JSON ONLY for the HIGH-EXAM-VALUE news from <NEW_RAW_FEEDS>. Ignore low-value/routine news.
2. For each selected new event, generate a new JSON object adhering EXACTLY to this strictly defined schema:
   - "id": A unique ID (e.g., "jul-26-1")
   - "topic": Category badge string (e.g., "Defence & Security")
   - "text": Executive Summary / Headline string.
   - "publicationDate": The date of the event (YYYY-MM-DD).
   - "originalSource": The official source (e.g., "PIB", "MoD").
   - "relatedOfficialDocuments": Any related document name, or empty string.
   - "upscHighlights": Array of 3-6 concise bullet point strings.
   - "quickSummary": A 50-100 word summary string.
   - "detailedAnalysis": A deep dive analysis string.
   - "backgroundContext": Background context string.
   - "strategicImportance": Strategic importance string.
   - "staticGkConnection": Static GK relation string.
   - "stakeholders": Array of string stakeholder names.
   - "relatedTopics": Array of string related keywords/places.
   - "examRelevanceMatrix": Object mapping {"NDA": "High", "CDS": "High", "AFCAT": "Medium"} etc.
   - "examImportanceScore": Integer from 1 to 100 based on the IMPORTANCE SCORING logic.
   - "potentialQuestions": Object containing 3 arrays: "shortAnswers", "interviewQuestions", "ssbDiscussionTopics".
   - "mcqs": Array of exactly 3 to 5 Exam-Oriented MCQ objects. Each MCQ object must have:
      - "question": string
      - "options": array of 4 strings
      - "correct": integer 0-3 (index of correct option)
      - "explanation": string
3. Return ONLY a JSON array containing these NEW objects. Do not wrap in \`\`\`json.`;

  const prompt = `
<NEW_RAW_FEEDS>
${JSON.stringify(rawItems, null, 2)}
</NEW_RAW_FEEDS>
`;

  console.log("Calling Gemini to process and merge data with the new advanced schema...");
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2,
      }
    });

    let outputText = response.text.trim();
    if (outputText.startsWith('```json')) outputText = outputText.substring(7);
    if (outputText.endsWith('```')) outputText = outputText.substring(0, outputText.length - 3);

    const newEntries = JSON.parse(outputText);
    
    if (Array.isArray(newEntries)) {
      console.log(`Successfully extracted ${newEntries.length} new items.`);
      
      // Merge locally instead of relying on Gemini to rewrite existing ones
      db[currentMonth] = [...newEntries, ...existingEntries];
      
      // Extract header to preserve comments
      let header = "";
      const lines = content.split('\n');
      for (const line of lines) {
          if (line.trim().startsWith('window.')) break;
          header += line + '\n';
      }

      const newFileContent = header + "window.CURRENT_AFFAIRS_DB = " + JSON.stringify(db, null, 2) + ";\n";
      fs.writeFileSync(dbPath, newFileContent, 'utf8');
      console.log("Database updated successfully.");
    } else {
      console.error("Gemini returned invalid array. Aborting.");
    }
  } catch (err) {
    console.error("Error processing with Gemini:", err);
  }
}

run();
