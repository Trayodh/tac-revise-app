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

STRICT RULES:
1. Preserve ALL existing entries from <EXISTING_DATABASE>. DO NOT DELETE OR OVERWRITE THEM unless there is a critical factual correction. Keep them in chronological order.
2. Identify new, HIGH-EXAM-VALUE news from <NEW_RAW_FEEDS>. Prioritise: Defence, Military Exercises, Indian Navy Port Calls, DRDO, ISRO, Armed Forces, IR, Economy, Schemes. Exclude low-value/routine news.
3. For any NEW event, generate a new JSON object adhering EXACTLY to this strictly defined schema:
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
   - "potentialQuestions": Object containing 3 arrays: "shortAnswers", "interviewQuestions", "ssbDiscussionTopics".
   - "mcqs": Array of exactly 3 to 5 Exam-Oriented MCQ objects. Each MCQ object must have:
      - "question": string
      - "options": array of 4 strings
      - "correct": integer 0-3 (index of correct option)
      - "explanation": string
4. Combine the existing entries and the newly generated entries into a single JSON array.
5. Sort the final array chronologically with the most recent event FIRST (e.g., July 19th before July 1st).
6. Return ONLY the raw JSON array. Do not wrap in \`\`\`json.`;

  const prompt = `
<EXISTING_DATABASE>
${JSON.stringify(existingEntries, null, 2)}
</EXISTING_DATABASE>

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

    const updatedArray = JSON.parse(outputText);
    
    if (Array.isArray(updatedArray) && updatedArray.length >= existingEntries.length) {
      console.log(`Successfully merged. New count: ${updatedArray.length} (was ${existingEntries.length}).`);
      
      db[currentMonth] = updatedArray;
      
      const newFileContent = "window.CURRENT_AFFAIRS_DB = " + JSON.stringify(db, null, 2) + ";\n";
      fs.writeFileSync(dbPath, newFileContent, 'utf8');
      console.log("Database updated successfully.");
    } else {
      console.error("Gemini returned invalid array or fewer items than before. Aborting to protect data.");
    }
  } catch (err) {
    console.error("Error processing with Gemini:", err);
  }
}

run();
