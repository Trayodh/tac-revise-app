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

  // 1. Read existing DB
  const dbPath = path.join(__dirname, '..', 'current_affairs_db.js');
  let content = fs.readFileSync(dbPath, 'utf8');
  
  // Safely extract the DB object
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

  // 2. Fetch new raw items
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
  
  // Shuffle and take top 40 items to avoid overwhelming Gemini
  const rawItems = Array.from(uniqueItemsMap.values())
    .sort(() => 0.5 - Math.random())
    .slice(0, 40);

  console.log(`Acquired ${rawItems.length} unique raw feed items.`);

  // 3. Assemble payload and call Gemini
  const SYSTEM_PROMPT = `You are a Defence Current Affairs expert. 
Your task is to merge the provided <EXISTING_DATABASE> with the <NEW_RAW_FEEDS>.

STRICT RULES:
1. Preserve all existing entries from <EXISTING_DATABASE>. DO NOT DELETE OR OVERWRITE THEM unless there is a critical factual correction.
2. Identify any new, highly relevant defence, national, or international news from <NEW_RAW_FEEDS> (e.g. military appointments, exercises, ISRO missions, major national events) that are missing from the existing database.
3. For any NEW event, generate a new JSON object adhering exactly to the schema of the existing objects (id, topic, text, details object with summary/winner/etc., and an mcq object).
4. Combine the existing entries and the newly generated entries into a single JSON array.
5. Sort the final array chronologically with the most recent event FIRST (e.g., July 19th before July 1st).
6. Never fabricate news. Only use events from <NEW_RAW_FEEDS> or widely known recent facts up to July 2026.
7. Return ONLY the raw JSON array. Do not wrap in \`\`\`json.`;

  const prompt = `
<EXISTING_DATABASE>
${JSON.stringify(existingEntries, null, 2)}
</EXISTING_DATABASE>

<NEW_RAW_FEEDS>
${JSON.stringify(rawItems, null, 2)}
</NEW_RAW_FEEDS>
`;

  console.log("Calling Gemini 1.5 Pro to process and merge data...");
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.1,
      }
    });

    let outputText = response.text.trim();
    if (outputText.startsWith('```json')) outputText = outputText.substring(7);
    if (outputText.endsWith('```')) outputText = outputText.substring(0, outputText.length - 3);

    const updatedArray = JSON.parse(outputText);
    
    if (Array.isArray(updatedArray) && updatedArray.length >= existingEntries.length) {
      console.log(`Successfully merged. New count: ${updatedArray.length} (was ${existingEntries.length}).`);
      
      // Update DB
      db[currentMonth] = updatedArray;
      
      // Write back to file
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
