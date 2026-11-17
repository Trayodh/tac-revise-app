require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchTaxonomy(subject) {
  const prompt = `You are a curriculum mapping expert. Provide the complete Table of Contents for the subject "${subject}" from the standard "Pathfinder NDA/CDS" textbook by Arihant.
Return ONLY a structured JSON array of chapters. Each chapter should have 'id' (snake_case), 'title', and an array of 'topics' (strings).

Example JSON structure:
[
  {
    "id": "ancient_history",
    "title": "Ancient History",
    "topics": ["Indus Valley Civilization", "Vedic Age"]
  }
]

DO NOT wrap in Markdown backticks (\`\`\`json). Return exactly the raw JSON string.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  let retries = 3;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Failed");
      
      let text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      if (text.startsWith("```json")) text = text.substring(7);
      if (text.startsWith("```")) text = text.substring(3);
      if (text.endsWith("```")) text = text.substring(0, text.length - 3);
      return JSON.parse(text.trim());
    } catch (e) {
      console.error(e.message);
      await sleep(2000);
      retries--;
    }
  }
  return null;
}

async function run() {
  const subjects = ['history', 'geography', 'polity', 'economics', 'physics', 'chemistry', 'biology', 'environment'];
  const fullTaxonomy = [];
  
  for (const sub of subjects) {
    console.log("Fetching taxonomy for", sub);
    const chapters = await fetchTaxonomy(sub);
    if (chapters) {
      fullTaxonomy.push({
        id: sub,
        title: sub.charAt(0).toUpperCase() + sub.slice(1),
        chapters: chapters
      });
    }
    await sleep(2000);
  }
  
  fs.writeFileSync('pathfinder_taxonomy.json', JSON.stringify(fullTaxonomy, null, 2));
  console.log("Taxonomy generated!");
}

run();
