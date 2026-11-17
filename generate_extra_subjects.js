require('dotenv').config();
const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) { console.error("Missing GEMINI_API_KEY"); process.exit(1); }

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const CHAPTERS = [
  { id: 'hist-indus-valley', title: 'Indus Valley Civilisation — Harappa, Mohenjo-Daro & Key Features', subject: 'History' },
  { id: 'hist-vedic-age', title: 'Vedic Age — Rigvedic to Later Vedic, Society & Literature', subject: 'History' },
  { id: 'hist-buddhism-jainism', title: 'Buddhism & Jainism — Founders, Teachings & Impact', subject: 'History' },
  { id: 'hist-mauryan-empire', title: 'Mauryan Empire — Chandragupta, Ashoka & Administration', subject: 'History' },
  { id: 'hist-gupta-age', title: 'Gupta Age — Golden Age, Art, Science & Culture', subject: 'History' },
  { id: 'hist-delhi-sultanate', title: 'Delhi Sultanate — Dynasties, Administration & Culture', subject: 'History' },
  { id: 'hist-mughal-empire', title: 'Mughal Empire — Akbar to Aurangzeb, Administration & Culture', subject: 'History' },
  { id: 'hist-maratha-empire', title: 'Maratha Empire — Shivaji, Peshwas & Military System', subject: 'History' },
  { id: 'hist-british-conquest', title: 'British Conquest of India — Battles, Treaties & Policies', subject: 'History' },
  { id: 'hist-1857-revolt', title: '1857 Revolt — Causes, Events, Leaders & Significance', subject: 'History' },
  { id: 'hist-freedom-struggle', title: 'Indian Freedom Struggle — Gandhi, INC & Major Movements', subject: 'History' },
  { id: 'hist-independence', title: 'Independence & Partition — 1947, Integration & Constitution', subject: 'History' },
  { id: 'geo-physical-features', title: 'Physical Features of India — Himalayas, Peninsular Plateau & Coastal Plains', subject: 'Geography' },
  { id: 'geo-rivers-lakes', title: 'Rivers, Lakes & Water Bodies of India', subject: 'Geography' },
  { id: 'geo-climate-seasons', title: 'Climate & Seasons of India — Monsoon & Rainfall Patterns', subject: 'Geography' },
  { id: 'geo-soils-agriculture', title: 'Soils of India & Agriculture — Crops, Irrigation & Green Revolution', subject: 'Geography' },
  { id: 'geo-forests-wildlife', title: 'Forests, Wildlife & National Parks of India', subject: 'Geography' },
  { id: 'geo-minerals-industries', title: 'Minerals, Energy Resources & Industries of India', subject: 'Geography' },
  { id: 'geo-transport-trade', title: 'Transport, Trade & India Neighbours', subject: 'Geography' },
  { id: 'geo-world-physical', title: 'World Physical Geography — Continents, Oceans & Landforms', subject: 'Geography' },
  { id: 'geo-world-climate', title: 'World Climate Zones & Biomes', subject: 'Geography' },
  { id: 'pol-constitution-making', title: 'Making of Indian Constitution — Constituent Assembly & Sources', subject: 'Polity' },
  { id: 'pol-fundamental-rights', title: 'Fundamental Rights — Articles 12-35 & Landmark Cases', subject: 'Polity' },
  { id: 'pol-dpsp-duties', title: 'DPSPs & Fundamental Duties — Directive Principles', subject: 'Polity' },
  { id: 'pol-parliament', title: 'Parliament — Lok Sabha, Rajya Sabha & Legislative Process', subject: 'Polity' },
  { id: 'pol-president-pm', title: 'President, Vice-President & Prime Minister — Powers & Functions', subject: 'Polity' },
  { id: 'pol-judiciary', title: 'Supreme Court, High Courts & Judicial Review', subject: 'Polity' },
  { id: 'pol-federalism', title: 'Centre-State Relations, Emergency Provisions & Federalism', subject: 'Polity' },
  { id: 'pol-elections-evm', title: 'Election Commission, Electoral Process & Political Parties', subject: 'Polity' },
  { id: 'eco-gdp-national-income', title: 'GDP, National Income & Economic Indicators', subject: 'Economics' },
  { id: 'eco-banking-rbi', title: 'Banking System, RBI & Monetary Policy', subject: 'Economics' },
  { id: 'eco-budget-fiscal', title: 'Union Budget, Fiscal Policy & Taxation', subject: 'Economics' },
  { id: 'eco-trade-forex', title: 'International Trade, Foreign Exchange & Balance of Payments', subject: 'Economics' },
  { id: 'eco-govt-schemes', title: 'Major Government Schemes & Economic Policies 2020-2025', subject: 'Economics' },
];

const OUTPUT_DIR = path.join(__dirname, 'extra_subjects_notes');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

async function generateChapterNotes(chapter) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  const prompt = `Create a COMPLETE, PREMIUM study chapter on:

CHAPTER: "${chapter.title}"
SUBJECT: ${chapter.subject} | EXAM: CDS, AFCAT, NDA, CAPF

Write ONLY raw HTML with inline CSS. Start directly with the h1 tag — no preamble, no markdown.

<h1 style="color:#60a5fa;border-bottom:2px solid #60a5fa;padding-bottom:10px;">${chapter.title}</h1>

Include ALL 20 sections in order:
1. CHAPTER IMPORTANCE — Star ratings (CDS ★★★★☆ etc), Frequently/Occasionally/Rarely Asked
2. LEARNING OBJECTIVES — 5-7 bullets
3. QUICK REVISION — 12 rapid-fire bullets covering the whole chapter
4. COMPLETE THEORY — 800+ words, h3 sub-headings, examples, analogies, 1 styled comparison table
5. IMPORTANT DEFINITIONS — HTML table (Term | Definition), min 10 rows
6. CONCEPT FLOW — ASCII diagram in a pre tag
7. MEMORY TRICKS — 4-5 original creative mnemonics specific to this topic
8. IMPORTANT FACTS — 20 numbered one-line exam facts
9. PYQ ANALYSIS — 3 paragraphs: how often, what style, recent trends
10. EXAM PERSPECTIVE — Separate para each: what CDS asks / AFCAT asks / NDA asks
11. COMMON MISTAKES — 6 mistakes with why-wrong + correction
12. MILITARY CONNECTION — 5 direct links to defence/military technology or history
13. REVISION NOTES — Exactly 40 numbered bullets
14. FLASHCARDS — 25 Q&A rows in a 2-column styled HTML table (Question | Answer)
15. MCQs — 20 Easy + 20 Moderate + 10 Difficult = 50 total. Each: question text, options A/B/C/D, bold the correct option, 1-line explanation
16. FILL IN THE BLANKS — 15 blanks with answers below
17. TRUE OR FALSE — 15 statements, answer (True/False) + 1-line reason
18. EXPECTED QUESTIONS — 5 CDS + 5 AFCAT + 5 NDA likely questions
19. CHAPTER SUMMARY — 1 paragraph summary + top 10 facts + exam tips
20. MIND MAP — ASCII mind map in a pre tag

Formatting rules:
- Use inline CSS throughout (dark theme: background #1e293b, color #e2e8f0)
- Use #60a5fa for h2 headings, #34d399 for key success facts, #fbbf24 for important terms
- Tables must use border-collapse:collapse with proper padding
- No markdown. No code fences. All HTML tags properly closed.`;

  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 8192, temperature: 0.65 }
        })
      });

      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          console.log(`  Rate limited! Waiting 30s...`);
          await sleep(30000);
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }

      let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      text = text.replace(/^```html\n?/i, '').replace(/^```\n?/, '').replace(/\n?```$/, '').trim();
      return text;
    } catch (err) {
      console.error(`  Fetch error: ${err.message}`);
      await sleep(5000);
      retries--;
    }
  }
  return null;
}

async function run() {
  console.log(`\n🚀 Extra Subjects Generator (Gemini Flash) — ${CHAPTERS.length} chapters\n`);

  for (let i = 0; i < CHAPTERS.length; i++) {
    const chapter = CHAPTERS[i];
    const outputFile = path.join(OUTPUT_DIR, `${chapter.id}.html`);

    if (fs.existsSync(outputFile) && fs.statSync(outputFile).size > 5000) {
      console.log(`[${i+1}/${CHAPTERS.length}] ✅ SKIP: ${chapter.title}`);
      continue;
    }

    console.log(`[${i+1}/${CHAPTERS.length}] ⏳ [${chapter.subject}] ${chapter.title}...`);
    const content = await generateChapterNotes(chapter);

    if (content && content.length > 500) {
      const fullHtml = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${chapter.title} — Defence Exam Notes</title>
<style>
:root{--bg:#0f172a;--border:#334155;--text:#e2e8f0;--accent:#60a5fa;--success:#34d399;--warning:#fbbf24}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',sans-serif;background:var(--bg);color:var(--text);line-height:1.7;padding:40px 20px}
.container{max-width:900px;margin:0 auto}
.header{background:linear-gradient(135deg,#1e3a5f,#0f2027);border:1px solid #1e40af;border-radius:12px;padding:30px;margin-bottom:40px;text-align:center}
.tag{display:inline-block;background:#1e3a5f;color:var(--accent);padding:4px 12px;border-radius:20px;font-size:.8em;border:1px solid var(--accent)}
h1{color:var(--accent);border-bottom:2px solid var(--accent);padding-bottom:12px;margin:30px 0 20px;font-size:1.8em}
h2{color:var(--success);margin:40px 0 16px;font-size:1.3em;border-left:4px solid var(--success);padding-left:12px}
h3{color:var(--warning);margin:24px 0 12px}
p{margin-bottom:14px}ul,ol{padding-left:24px;margin-bottom:14px}li{margin-bottom:6px}
strong{color:var(--warning)}
table{width:100%;border-collapse:collapse;margin:16px 0}
th{background:#1e3a5f;color:var(--accent);padding:10px 12px;text-align:left;border:1px solid var(--border)}
td{padding:9px 12px;border:1px solid var(--border);vertical-align:top}
tr:nth-child(even){background:rgba(30,58,95,.2)}
pre{background:#1e293b;border:1px solid var(--border);border-radius:8px;padding:16px;white-space:pre-wrap;font-size:.9em}
.btn{position:fixed;bottom:30px;right:30px;background:var(--accent);color:#000;border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-weight:600}
@media print{.btn{display:none}body{background:#fff;color:#000}}
</style></head>
<body><div class="container">
<div class="header"><span class="tag">${chapter.subject}</span>
<h1 style="border:none;color:#60a5fa;font-size:1.6em;margin-top:8px;">${chapter.title}</h1>
<p style="color:#94a3b8;margin-top:8px;">Premium Notes for CDS • AFCAT • NDA • CAPF</p></div>
<div class="content">${content}</div></div>
<button class="btn" onclick="window.print()">🖨️ Print</button>
</body></html>`;
      fs.writeFileSync(outputFile, fullHtml, 'utf8');
      const sizeKB = Math.round(fs.statSync(outputFile).size / 1024);
      console.log(`[${i+1}/${CHAPTERS.length}] ✅ DONE: ${chapter.title} (${sizeKB}KB)`);
    } else {
      console.log(`[${i+1}/${CHAPTERS.length}] ❌ FAILED: ${chapter.title}`);
    }

    await sleep(2000);
  }

  console.log(`\n🎉 ALL EXTRA SUBJECTS DONE!\n📁 ${OUTPUT_DIR}`);
}

run();
