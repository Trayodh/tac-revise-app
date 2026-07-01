require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function generateMoreCA(monthName) {
  const prompt = `
Generate 10 highly relevant, realistic Current Affairs items for the month of ${monthName} for UPSC Defence Aspirants (NDA, CDS, AFCAT).
Ensure you cover a wide variety of topics such as Polity, Economics, Science & Technology, Environment, International Relations, Defense Acquisitions, and Space.
Do NOT output markdown \`\`\`json. Return EXACTLY a JSON array of objects.
Each object MUST have:
{
  "id": "${monthName.substring(0,3).toLowerCase()}-ext-INDEX",
  "topic": "The broad topic category (e.g. Science & Technology, Polity, Environment, Defence)",
  "text": "A comprehensive 2-sentence summary of the news.",
  "upscHighlights": ["Key fact 1", "Key fact 2"],
  "institutionalContext": "The background or associated organization.",
  "strategicImportance": "Why this is important for India's strategic or domestic interests.",
  "mcq": {
    "question": "A multiple choice question based on this.",
    "options": ["Opt A", "Opt B", "Opt C", "Opt D"],
    "correct": 0,
    "explanation": "Why the answer is correct."
  }
}
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7 }
      })
    });
    
    const data = await res.json();
    if (!data.candidates) {
      console.error("Gemini Error:", data);
      return [];
    }
    let text = data.candidates[0].content.parts[0].text;
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(text);
  } catch (err) {
    console.error("Error for", monthName, err);
    return [];
  }
}

async function main() {
  console.log("Reading data.js...");
  let data = fs.readFileSync('data.js', 'utf8');
  const start = data.indexOf('let CURRENT_AFFAIRS_DB =');
  const end = data.indexOf('const CBT_EXAMS_DATABASE');
  let dbStr = data.substring(start, end).replace('let CURRENT_AFFAIRS_DB =', '').trim().replace(/;+$/, '');
  const db = eval('(' + dbStr + ')');
  
  const futureMonths = ['July 2026', 'August 2026', 'September 2026', 'October 2026', 'November 2026', 'December 2026'];
  
  for (let m of futureMonths) {
    if (db[m]) {
      console.log("Removing future month:", m);
      delete db[m];
    }
  }

  const validMonths = Object.keys(db);
  for (let month of validMonths) {
    console.log("Generating more CA for", month, "...");
    const newItems = await generateMoreCA(month);
    
    // Fix IDs
    newItems.forEach((item, idx) => {
       item.id = `${month.substring(0,3).toLowerCase()}-ext-${idx+1}`;
    });
    
    db[month] = [...db[month], ...newItems];
    console.log(`Added ${newItems.length} items to ${month}. Total now: ${db[month].length}`);
  }

  console.log("Writing back to data.js...");
  const newDataStr = data.substring(0, start) + 'let CURRENT_AFFAIRS_DB = ' + JSON.stringify(db, null, 2) + ';\n\n' + data.substring(end);
  fs.writeFileSync('data.js', newDataStr);
  console.log("Done!");
}

main();
