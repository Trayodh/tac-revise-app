require('dotenv').config();
const fs = require('fs');
const path = require('path');


const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function queryGemini(prompt, retries = 5) {
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseMimeType: "application/json" }
  };

  for (let i = 0; i < retries; i++) {
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      const parsed = await res.json();
      let jsonText = parsed.candidates[0].content.parts[0].text;
      const startArr = jsonText.indexOf('[');
      const endArr = jsonText.lastIndexOf(']');
      if (startArr !== -1 && endArr !== -1) jsonText = jsonText.substring(startArr, endArr + 1);
      return JSON.parse(jsonText);
    }

    if (res.status === 429) {
      console.log(`[Rate Limit] Attempt ${i + 1}/${retries} failed. Retrying in 10s...`);
      await new Promise(r => setTimeout(r, 10000));
      continue;
    }

    const errText = await res.text();
    throw new Error(`API Error ${res.status}: ${errText}`);
  }
  throw new Error("Failed after maximum retries.");
}

async function main() {
  console.log("=== TAC-Revise Auto-Intel Updater ===");
  
  if (!GEMINI_API_KEY) {
    console.error("Missing GEMINI_API_KEY in environment!");
    process.exit(1);
  }

  try {
    console.log("1. Fetching live intel from Google News RSS...");
    // Target Defence, DRDO, ISRO, Indian Navy/Army news from the last 2 days
    const feedUrl = 'https://news.google.com/rss/search?q=Indian+Defence+OR+Indian+Army+OR+DRDO+OR+ISRO+when:2d&hl=en-IN&gl=IN&ceid=IN:en';
    
    const rssRes = await fetch(feedUrl);
    const rssText = await rssRes.text();
    
    // Extract titles using a simple regex since jsdom failed
    const itemRegex = /<item>[\s\S]*?<title><!\[CDATA\[(.*?)\]\]><\/title>[\s\S]*?<\/item>/g;
    let match;
    const titles = [];
    while ((match = itemRegex.exec(rssText)) !== null) {
      titles.push(match[1]);
    }
    
    // Fallback if no CDATA is used
    if (titles.length === 0) {
      const fallbackRegex = /<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<\/item>/g;
      while ((match = fallbackRegex.exec(rssText)) !== null) {
        titles.push(match[1]);
      }
    }
    
    if (titles.length === 0) {
      console.log("No new intel found.");
      return;
    }
    
    // Grab top 10 headlines to give Gemini good context
    const topNews = titles.slice(0, 10).map(t => `- ${t}`).join('\n');
    console.log("Found raw headlines:\n" + topNews);

    console.log("\n2. Processing through Gemini API...");
    const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
    
    const prompt = `Extract the most strategically important news from the following headlines and format exactly 3 highly relevant "Daily Intel Briefing" JSON objects for a Defence Exams Current Affairs app. Focus strictly on military acquisitions, bilateral exercises, DRDO tests, ISRO launches, or strategic geopolitical visits. Ignore generic political news.
    
Headlines:
${topNews}

Format as a raw JSON array of objects with these keys exactly:
- "visit": string (Short, punchy title of the event/test/deal)
- "period": string (Must be exactly "${currentDate}")
- "purpose": string (1 clear sentence summarizing what happened)
- "deals": string (2 sentences explaining the strategic significance for India's defence or space capabilities)

Output ONLY the raw JSON array.`;

    const newItems = await queryGemini(prompt);
    
    if (!Array.isArray(newItems) || newItems.length === 0) {
      console.log("Gemini returned invalid or empty array.");
      return;
    }

    console.log("3. Injecting into ca_data.js database...");
    const dataPath = path.join(__dirname, '..', 'ca_data.js');
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    
    const dbStart = dataContent.indexOf('window.CA_VISITS_DATA = [');
    if (dbStart === -1) throw new Error("Could not find window.CA_VISITS_DATA array in ca_data.js");
    
    const firstBracket = dataContent.indexOf('[', dbStart);
    let bracketCount = 0;
    let arrayEndIndex = -1;
    
    for (let j = firstBracket; j < dataContent.length; j++) {
      if (dataContent[j] === '[') bracketCount++;
      else if (dataContent[j] === ']') {
        bracketCount--;
        if (bracketCount === 0) { arrayEndIndex = j; break; }
      }
    }
    
    const arrayStr = dataContent.substring(firstBracket, arrayEndIndex + 1);
    const existingArray = eval('(' + arrayStr + ')');
    
    // Filter duplicates (using exact title match or very similar title)
    const filteredNew = newItems.filter(newItem => 
      !existingArray.some(oldItem => oldItem.visit.toLowerCase() === newItem.visit.toLowerCase())
    );
    
    if (filteredNew.length === 0) {
      console.log("Intel is already up to date. No new unique items to inject.");
      return;
    }
    
    existingArray.unshift(...filteredNew);
    
    // Safely write back maintaining the exact format
    const updatedArrayStr = JSON.stringify(existingArray, null, 2);
    const newContent = dataContent.substring(0, firstBracket) + updatedArrayStr + dataContent.substring(arrayEndIndex + 1);
    
    fs.writeFileSync(dataPath, newContent);
    console.log(`\nSUCCESS: Injected ${filteredNew.length} new Tactical Briefings into the Command Centre!`);
    
  } catch (error) {
    console.error("Updater failed:", error.message);
  }
}

main();
