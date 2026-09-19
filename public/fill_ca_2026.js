require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY   = process.env.GEMINI_API_KEY;
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
const GROQ_API_KEY     = process.env.GROQ_API_KEY;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function callAI(prompt) {
  const providers = [
    {
      name: 'Gemini',
      call: async () => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        const res = await fetch(url, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.7, maxOutputTokens: 8192 } })
        });
        const d = await res.json();
        if (!res.ok) throw Object.assign(new Error(d.error?.message), { status: res.status });
        return d.candidates?.[0]?.content?.parts?.[0]?.text;
      }
    },
    {
      name: 'Cerebras',
      call: async () => {
        const res = await fetch('https://api.cerebras.ai/v1/chat/completions', {
          method: 'POST', headers: { 'Authorization': `Bearer ${CEREBRAS_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: 'gpt-oss-120b', messages: [{ role: 'user', content: prompt }], max_tokens: 8192, temperature: 0.7 })
        });
        const d = await res.json();
        if (!res.ok) throw Object.assign(new Error(d.error?.message), { status: res.status });
        return d.choices[0].message.content;
      }
    },
    {
      name: 'Groq',
      call: async () => {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST', headers: { 'Authorization': `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages: [{ role: 'user', content: prompt }], max_tokens: 8192, temperature: 0.7 })
        });
        const d = await res.json();
        if (!res.ok) throw Object.assign(new Error(d.error?.message), { status: res.status });
        return d.choices[0].message.content;
      }
    }
  ];

  for (let attempt = 0; attempt < 4; attempt++) {
    for (const p of providers) {
      try {
        process.stdout.write(`  → ${p.name}... `);
        const text = await p.call();
        console.log('✓');
        return text;
      } catch(e) {
        const is429 = e.status === 429 || String(e.message).includes('429');
        console.log(`✗ [${is429 ? '429' : e.message?.slice(0,40)}]`);
      }
    }
    const wait = 20000 + attempt * 15000;
    console.log(`  ⏳ All rate-limited. Waiting ${wait/1000}s...`);
    await sleep(wait);
  }
  return null;
}

const MONTHS_TO_GENERATE = [
  'April 2026', 'May 2026', 'June 2026', 'July 2026'
];

// Real events per month for NDA/CDS/AFCAT relevance
const MONTH_CONTEXT = {
  'April 2026': `Key events in April 2026 for NDA/CDS/AFCAT: India's defence exercises (TROPEX, Shakti), bilateral summits, space missions (ISRO), new weapons inducted, Supreme Court judgments, economic data (RBI policy, GDP), sports championships, environmental summits, India-Pakistan border tensions context, new government schemes announced in Q1 FY2026-27.`,
  'May 2026': `Key events in May 2026 for NDA/CDS/AFCAT: India's military exercises, DRDO milestones, new defence acquisitions, diplomatic visits, IPL season ending, budget session conclusions, monsoon forecast, ISRO upcoming missions, India-China LAC updates, new missile tests, important SC verdicts, India's trade data.`,
  'June 2026': `Key events in June 2026 for NDA/CDS/AFCAT: NDA/CDS written exam season, monsoon arrival, G7/G20 related meetings, India's defence corridor progress, Agnipath scheme updates, military exercises with US/Russia/France, new National Education Policy developments, RBI credit policy, Yoga Day (21 June), India's energy transition goals.`,
  'July 2026': `Key events in July 2026 for NDA/CDS/AFCAT: Kargil Vijay Diwas (26 July), India's budget implementation updates, SSB interviews round, new ISRO satellite launch, India-US defence tech deals, India's trade surplus data, new environmental laws, India's digital payment milestones, monsoon session of Parliament, important bilateral agreements.`
};

async function generateMonthData(month) {
  const context = MONTH_CONTEXT[month];
  const prompt = `You are a Current Affairs expert for Indian Defence Examinations (NDA, CDS, AFCAT).

Generate a JSON array of EXACTLY 15 current affairs items for "${month}" that are highly relevant for NDA/CDS/AFCAT aspirants.

Context for this month: ${context}

STRICT JSON FORMAT — output ONLY valid JSON array, no markdown, no explanation:
[
  {
    "id": "unique-id-kebab-case",
    "topic": "Short Topic Label (e.g., Defence Exercise, Space Mission, Economic Policy)",
    "text": "Full 2-3 sentence description with **bold** for key facts, names, numbers. Include specific names, dates, locations.",
    "details": {
      "winner": "Name or N/A",
      "award": "Name of exercise/mission/scheme/award or N/A", 
      "nationality": "Countries/Organizations involved",
      "summary": "One concise sentence: what happened, why it matters for defence exams."
    },
    "mcq": {
      "question": "A factual MCQ question about this item",
      "options": ["A) correct option", "B) wrong option", "C) wrong option", "D) wrong option"],
      "answer": "A",
      "explanation": "Why A is correct, with key fact."
    }
  }
]

Generate exactly 15 diverse items covering: Defence Exercises, Weapons/Missiles, Space/ISRO, Diplomacy/Summits, Economy/RBI, Awards/Honours, Science/Tech, Environment, Sports (if significant), Important Schemes.`;

  const raw = await callAI(prompt);
  if (!raw) return null;

  // Extract JSON array
  const jsonMatch = raw.match(/\[[\s\S]+\]/);
  if (!jsonMatch) { console.log('  ⚠ No JSON array found in response'); return null; }
  
  try {
    const items = JSON.parse(jsonMatch[0]);
    console.log(`  ✅ Parsed ${items.length} items for ${month}`);
    return items;
  } catch(e) {
    console.log(`  ⚠ JSON parse error: ${e.message}`);
    return null;
  }
}

async function main() {
  // Load existing DB
  const src = fs.readFileSync('current_affairs_db.js', 'utf8');
  const dbMatch = src.match(/window\.CURRENT_AFFAIRS_DB\s*=\s*([\s\S]+);\s*$/);
  let db = {};
  if (dbMatch) {
    try {
      // Use a safer eval approach
      const fn = new Function(`return ${dbMatch[1]}`);
      db = fn();
      console.log('Loaded existing DB. Keys:', Object.keys(db).join(', '));
    } catch(e) {
      console.log('Could not parse existing DB, starting fresh:', e.message.slice(0,60));
    }
  }

  for (const month of MONTHS_TO_GENERATE) {
    if (db[month] && db[month].length >= 13) {
      console.log(`\n✅ ${month}: already has ${db[month].length} items — skipping`);
      continue;
    }
    console.log(`\n📰 Generating ${month}...`);
    const items = await generateMonthData(month);
    if (items && items.length > 0) {
      db[month] = items;
      console.log(`  💾 Saved ${items.length} items`);
    }
    await sleep(2000);
  }

  // Ensure January 2026 data remains
  const output = `window.CURRENT_AFFAIRS_DB = ${JSON.stringify(db, null, 2)};\n`;
  fs.writeFileSync('current_affairs_db.js', output);
  console.log('\n🎉 current_affairs_db.js updated! Months:', Object.keys(db).join(', '));
  console.log('File size:', Math.round(output.length / 1024), 'KB');
}

main().catch(console.error);
