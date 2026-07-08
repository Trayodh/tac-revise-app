require('dotenv').config();
const fs = require('fs');
const path = require('path');

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
if (!CEREBRAS_API_KEY) { console.error("Missing CEREBRAS_API_KEY"); process.exit(1); }

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// SSBCrack General Science Book — Highest-yield chapters for CDS/NDA/AFCAT
// Ordered by exam frequency (most important first)
const CHAPTERS = [
  // ============ BIOLOGY (highest yield in NDA/CDS) ============
  { id: 'cell-biology', title: 'Cell Biology — Structure, Organelles & Division', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'human-nutrition', title: 'Human Nutrition — Vitamins, Minerals, Deficiencies & Balanced Diet', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'human-digestive-system', title: 'Human Digestive System — Organs, Enzymes & Absorption', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'human-circulatory-system', title: 'Human Circulatory System — Heart, Blood & Blood Groups', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'human-respiratory-system', title: 'Human Respiratory System — Lungs, Gas Exchange & High-Altitude Physiology', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'human-nervous-system', title: 'Human Nervous System — Brain, Spinal Cord & Reflex Action', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'human-endocrine-system', title: 'Human Endocrine System — Glands, Hormones & Disorders', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'human-excretory-system', title: 'Human Excretory System — Kidneys, Nephron & Dialysis', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'human-musculoskeletal', title: 'Human Skeletal & Muscular System — Bones, Joints & Muscles', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'reproduction-heredity', title: 'Reproduction & Heredity — DNA, Genetics & Mendel Laws', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'diseases-immunity', title: 'Human Diseases, Immunity & Vaccines', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'plant-kingdom', title: 'Plant Kingdom — Classification, Photosynthesis & Plant Hormones', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'animal-kingdom', title: 'Animal Kingdom — Classification & Characteristics', subject: 'Biology', file: 'notes_extra_biology.js' },
  { id: 'ecology-environment', title: 'Ecology & Environment — Food Chains, Biodiversity & Pollution', subject: 'Biology', file: 'notes_extra_biology.js' },

  // ============ PHYSICS (high yield in CDS/AFCAT) ============
  { id: 'units-measurement', title: 'Units, Dimensions & Measurement', subject: 'Physics', file: 'notes_extra_physics.js' },
  { id: 'laws-of-motion', title: 'Laws of Motion — Newtons Laws, Friction & Applications', subject: 'Physics', file: 'notes_extra_physics.js' },
  { id: 'work-energy-power', title: 'Work, Energy & Power — Conservation Laws & Collisions', subject: 'Physics', file: 'notes_extra_physics.js' },
  { id: 'gravitation', title: 'Gravitation — Keplers Laws, Satellites & Escape Velocity', subject: 'Physics', file: 'notes_extra_physics.js' },
  { id: 'heat-thermodynamics', title: 'Heat & Thermodynamics — Laws, Heat Transfer & Applications', subject: 'Physics', file: 'notes_extra_physics.js' },
  { id: 'waves-sound', title: 'Waves & Sound — Properties, Doppler Effect & Applications', subject: 'Physics', file: 'notes_extra_physics.js' },
  { id: 'light-optics', title: 'Light & Optics — Reflection, Refraction, Lenses & Optical Instruments', subject: 'Physics', file: 'notes_extra_physics.js' },
  { id: 'electricity-magnetism', title: 'Electricity & Magnetism — Ohms Law, Circuits & Electromagnetic Induction', subject: 'Physics', file: 'notes_extra_physics.js' },
  { id: 'modern-physics', title: 'Modern Physics — Atomic Structure, Radioactivity & Nuclear Physics', subject: 'Physics', file: 'notes_extra_physics.js' },

  // ============ CHEMISTRY (moderate yield in NDA/CDS) ============
  { id: 'matter-states', title: 'States of Matter & Gas Laws', subject: 'Chemistry', file: 'notes_extra_chemistry.js' },
  { id: 'atomic-structure-periodic', title: 'Atomic Structure & Periodic Table', subject: 'Chemistry', file: 'notes_extra_chemistry.js' },
  { id: 'chemical-bonding', title: 'Chemical Bonding — Ionic, Covalent & Metallic Bonds', subject: 'Chemistry', file: 'notes_extra_chemistry.js' },
  { id: 'chemical-reactions', title: 'Chemical Reactions — Types, Rates & Equilibrium', subject: 'Chemistry', file: 'notes_extra_chemistry.js' },
  { id: 'acids-bases-salts', title: 'Acids, Bases & Salts — pH, Indicators & Neutralization', subject: 'Chemistry', file: 'notes_extra_chemistry.js' },
  { id: 'metals-nonmetals', title: 'Metals & Non-Metals — Properties, Reactivity & Uses', subject: 'Chemistry', file: 'notes_extra_chemistry.js' },
  { id: 'carbon-organic', title: 'Carbon & Organic Chemistry — Hydrocarbons & Polymers', subject: 'Chemistry', file: 'notes_extra_chemistry.js' },
  { id: 'everyday-chemistry', title: 'Everyday Chemistry — Food, Medicines, Fuels & Materials', subject: 'Chemistry', file: 'notes_extra_chemistry.js' },
];

const OUTPUT_DIR = path.join(__dirname, 'ssbcrack_gs_notes');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

async function generateChapterNotes(chapter) {
  const url = 'https://api.cerebras.ai/v1/chat/completions';
  
  const systemPrompt = `You are a world-class expert Defence Examination Content Creator with 20 years of experience in coaching CDS, AFCAT, NDA, and CAPF aspirants. You have authored best-selling books on General Science for defence examinations. Your notes are famous for being precise, memorable, and exam-focused. You always write in clear, simple English that a 17-year-old can understand, yet with the depth that top scorers need.

CRITICAL RULES:
1. Write ENTIRELY in raw HTML. Never use markdown. Never wrap in code blocks.
2. You are NOT summarizing any PDF. You are creating original premium notes from your expert knowledge.
3. Use inline CSS throughout for beautiful formatting.
4. Every section must be genuinely useful — no padding, no filler.
5. Keep all HTML tags properly opened and closed.`;

  const userPrompt = `Create a COMPLETE, PREMIUM chapter on:

CHAPTER: "${chapter.title}"
SUBJECT: ${chapter.subject}
EXAM TARGETS: CDS, AFCAT, NDA, CAPF

Follow this EXACT structure using raw HTML with inline CSS. Start directly with the first h1 tag. Do not add any wrapper div.

<h1 style="color:#60a5fa;border-bottom:2px solid #60a5fa;padding-bottom:10px;font-size:1.8em;">${chapter.title}</h1>

Then generate ALL of the following sections in order:

SECTION 1: CHAPTER IMPORTANCE
<h2 style="color:#34d399;margin-top:30px;">📊 Chapter Importance</h2>
Show CDS ★★★★★, AFCAT ★★★★★, NDA ★★★★★ ratings. Mention Frequently/Occasionally/Rarely Asked.

SECTION 2: LEARNING OBJECTIVES
<h2>🎯 Learning Objectives</h2>
5-7 clear bullet points.

SECTION 3: QUICK REVISION (30 Seconds)
<h2>⚡ Quick Revision</h2>
10-15 rapid-fire bullets covering the entire chapter's essence.

SECTION 4: COMPLETE THEORY
<h2>📖 Complete Theory</h2>
Minimum 800 words of detailed explanation in simple English. Use sub-headings (h3), examples, analogies. Build from basic to advanced. Use <strong> for key terms. Include a styled comparison table where applicable.

SECTION 5: IMPORTANT DEFINITIONS
<h2>📚 Important Definitions</h2>
HTML table with Term | Definition columns for all key terms (minimum 10 definitions).

SECTION 6: CONCEPT FLOW
<h2>🔄 Concept Flow</h2>
ASCII-style flowchart using HTML pre tags or structured divs showing how concepts connect.

SECTION 7: COMPARISON TABLES
<h2>📊 Comparison Tables</h2>
2-3 key comparison tables (e.g., Plant vs Animal Cell, Arteries vs Veins). Use styled HTML tables.

SECTION 8: MEMORY TRICKS
<h2>🧠 Memory Tricks & Mnemonics</h2>
4-6 original, creative mnemonics SPECIFIC to this chapter. Explain each one. Use funny/military themes.

SECTION 9: IMPORTANT FACTS
<h2>⭐ Important Facts (Defence Exam Favourites)</h2>
20 one-line facts that frequently appear in CDS/NDA/AFCAT. Number them.

SECTION 10: FORMULA BOX (if applicable)
<h2>🔢 Formula / Key Data Box</h2>
Styled box with all important formulas, values, and constants for this chapter.

SECTION 11: PYQ ANALYSIS
<h2>📝 PYQ Pattern Analysis</h2>
3-4 paragraphs on: frequency, favourite sub-topics, typical question style, recent trends, common traps.

SECTION 12: EXAM PERSPECTIVE
<h2>🎓 Examination Perspective</h2>
What CDS usually asks... What AFCAT asks... What NDA focuses on...

SECTION 13: COMMON MISTAKES
<h2>⚠️ Common Mistakes</h2>
6-8 specific mistakes with explanation and correction.

SECTION 14: MILITARY CONNECTION
<h2>🪖 Military Connection</h2>
5-7 direct links between this chapter's concepts and real military technology/physiology/equipment.

SECTION 15: CURRENT AFFAIRS INTEGRATION
<h2>🌐 Current Affairs Integration</h2>
4-5 recent developments (DRDO, ISRO, HAL, or relevant news) connected to this chapter.

SECTION 16: REVISION NOTES (40 Bullets)
<h2>📋 Revision Notes (1-Page)</h2>
Exactly 40 numbered bullets covering the most important facts for last-minute revision.

SECTION 17: FLASHCARDS (Minimum 30)
<h2>🃏 Flashcards</h2>
Minimum 30 Q&A flashcards in a styled 2-column table (Question | Answer).

SECTION 18: MCQs (100 Questions)
<h2>❓ MCQs — 100 Questions</h2>
Generate:
- 30 Easy questions
- 30 Moderate questions  
- 20 Difficult questions
- 20 Defence Exam Level questions

For EACH question: numbered question, 4 options (A/B/C/D), bold the correct answer, 2-line explanation. Use a styled table or structured HTML.

SECTION 19: ASSERTION-REASON (20 Questions)
<h2>🔍 Assertion-Reason Questions (20)</h2>
Standard Assertion-Reason format with explanations.

SECTION 20: FILL IN THE BLANKS (20)
<h2>✏️ Fill in the Blanks</h2>
20 blanks with answers.

SECTION 21: TRUE OR FALSE (20)
<h2>✅ True or False</h2>
20 statements with T/F answers and brief explanations.

SECTION 22: EXPECTED QUESTIONS
<h2>🔮 Expected Questions (Prediction)</h2>
10 CDS + 10 AFCAT + 10 NDA predicted questions based on trends.

SECTION 23: CHAPTER SUMMARY & MIND MAP
<h2>🗺️ Chapter Summary & Mind Map</h2>
One-page summary + ASCII mind map + exam tips + top 10 most important facts.

END the output with </div> is NOT needed. Just end naturally after the last section.`;

  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CEREBRAS_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-oss-120b',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          max_tokens: 8000,
          temperature: 0.65
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          const retryAfter = parseInt(res.headers?.get?.('retry-after') || '60');
          console.log(`  Rate limited! Waiting ${retryAfter}s...`);
          await sleep(retryAfter * 1000);
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      
      const msg = data.choices?.[0]?.message;
      let text = msg?.content || msg?.reasoning || '';
      // Strip any markdown code fences
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
  console.log(`\n🚀 SSBCrack General Science — Premium Notes Generator`);
  console.log(`📚 Generating ${CHAPTERS.length} chapters...\n`);

  for (let i = 0; i < CHAPTERS.length; i++) {
    const chapter = CHAPTERS[i];
    const outputFile = path.join(OUTPUT_DIR, `${chapter.id}.html`);
    
    // Resume support: skip if already generated
    if (fs.existsSync(outputFile)) {
      const existing = fs.readFileSync(outputFile, 'utf8');
      if (existing.length > 5000) {
        console.log(`[${i+1}/${CHAPTERS.length}] ✅ SKIP (already done): ${chapter.title}`);
        continue;
      }
    }

    console.log(`[${i+1}/${CHAPTERS.length}] ⏳ Generating: ${chapter.title}...`);
    
    const content = await generateChapterNotes(chapter);
    
    if (content && content.length > 1000) {
      // Wrap in a beautiful HTML page
      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${chapter.title} — Defence Exam Notes</title>
<style>
  :root {
    --bg: #0f172a;
    --surface: #1e293b;
    --border: #334155;
    --text: #e2e8f0;
    --text-muted: #94a3b8;
    --accent: #60a5fa;
    --success: #34d399;
    --warning: #fbbf24;
    --error: #ef4444;
    --info: #818cf8;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.7;
    padding: 40px 20px;
  }
  .container { max-width: 900px; margin: 0 auto; }
  .header {
    background: linear-gradient(135deg, #1e3a5f, #0f2027);
    border: 1px solid #1e40af;
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 40px;
    text-align: center;
  }
  .subject-tag {
    display: inline-block;
    background: #1e3a5f;
    color: var(--accent);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8em;
    margin-bottom: 10px;
    border: 1px solid var(--accent);
  }
  .content { padding: 10px 0; }
  h1 { color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 12px; margin: 30px 0 20px; font-size: 1.8em; }
  h2 { color: var(--success); margin: 40px 0 16px; font-size: 1.3em; border-left: 4px solid var(--success); padding-left: 12px; }
  h3 { color: var(--warning); margin: 24px 0 12px; font-size: 1.1em; }
  h4 { color: var(--info); margin: 16px 0 8px; }
  p { margin-bottom: 14px; color: var(--text); }
  ul, ol { padding-left: 24px; margin-bottom: 14px; }
  li { margin-bottom: 6px; }
  strong { color: var(--warning); }
  table { width: 100%; border-collapse: collapse; margin: 16px 0; }
  th { background: #1e3a5f; color: var(--accent); padding: 10px 12px; text-align: left; border: 1px solid var(--border); }
  td { padding: 9px 12px; border: 1px solid var(--border); vertical-align: top; }
  tr:nth-child(even) { background: rgba(30,58,95,0.2); }
  pre { background: #1e293b; border: 1px solid var(--border); border-radius: 8px; padding: 16px; overflow-x: auto; font-family: monospace; font-size: 0.9em; white-space: pre-wrap; }
  .mcq { background: #1e293b; border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin: 12px 0; }
  .mcq-q { color: var(--text); font-weight: 600; margin-bottom: 8px; }
  .correct { color: var(--success); font-weight: 600; }
  .explanation { color: var(--text-muted); font-size: 0.9em; margin-top: 8px; border-top: 1px solid var(--border); padding-top: 8px; }
  .fact-box { background: rgba(96,165,250,0.1); border: 1px solid var(--accent); border-radius: 8px; padding: 16px; margin: 16px 0; }
  .warning-box { background: rgba(251,191,36,0.1); border: 1px solid var(--warning); border-radius: 8px; padding: 16px; margin: 16px 0; }
  .success-box { background: rgba(52,211,153,0.1); border: 1px solid var(--success); border-radius: 8px; padding: 16px; margin: 16px 0; }
  .stars { color: var(--warning); font-size: 1.2em; }
  .print-btn { position: fixed; bottom: 30px; right: 30px; background: var(--accent); color: #000; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1em; box-shadow: 0 4px 12px rgba(96,165,250,0.4); }
  @media print { body { background: white; color: black; } .print-btn { display: none; } }
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <span class="subject-tag">${chapter.subject}</span>
    <h1 style="border:none;color:#60a5fa;font-size:1.6em;margin-top:8px;">${chapter.title}</h1>
    <p style="color:#94a3b8;margin-top:8px;">Premium Notes for CDS • AFCAT • NDA • CAPF</p>
  </div>
  <div class="content">
${content}
  </div>
</div>
<button class="print-btn" onclick="window.print()">🖨️ Print / Save PDF</button>
</body>
</html>`;
      
      fs.writeFileSync(outputFile, fullHtml, 'utf8');
      const sizeKB = Math.round(fs.statSync(outputFile).size / 1024);
      console.log(`[${i+1}/${CHAPTERS.length}] ✅ DONE: ${chapter.title} (${sizeKB}KB)`);
    } else {
      console.log(`[${i+1}/${CHAPTERS.length}] ❌ FAILED: ${chapter.title}`);
    }
    
    await sleep(2000);
  }

  // Generate index page
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SSBCrack General Science — Premium Notes</title>
<style>
  body { font-family: 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; padding: 40px 20px; }
  .container { max-width: 900px; margin: 0 auto; }
  h1 { color: #60a5fa; text-align: center; margin-bottom: 8px; }
  .subtitle { text-align: center; color: #94a3b8; margin-bottom: 40px; }
  .subject-group { margin-bottom: 30px; }
  .subject-title { color: #34d399; font-size: 1.2em; font-weight: 600; border-left: 4px solid #34d399; padding-left: 12px; margin-bottom: 16px; }
  .chapter-card { background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 16px 20px; margin: 8px 0; display: flex; justify-content: space-between; align-items: center; text-decoration: none; color: #e2e8f0; transition: all 0.2s; }
  .chapter-card:hover { border-color: #60a5fa; background: #1e3a5f; }
  .chapter-card span { color: #94a3b8; font-size: 0.85em; }
  .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 0.75em; font-weight: 600; }
  .bio { background: rgba(52,211,153,0.2); color: #34d399; }
  .phys { background: rgba(96,165,250,0.2); color: #60a5fa; }
  .chem { background: rgba(251,191,36,0.2); color: #fbbf24; }
</style>
</head>
<body>
<div class="container">
  <h1>📚 General Science — Premium Notes</h1>
  <p class="subtitle">For CDS • AFCAT • NDA • CAPF | Based on SSBCrack General Science Book</p>
  
  <div class="subject-group">
    <div class="subject-title">🧬 Biology</div>
    ${CHAPTERS.filter(c => c.subject === 'Biology').map(c =>
      `<a class="chapter-card" href="${c.id}.html"><div>${c.title} <span class="badge bio">Biology</span></div><span>📖 Open Notes →</span></a>`
    ).join('\n    ')}
  </div>
  
  <div class="subject-group">
    <div class="subject-title">⚡ Physics</div>
    ${CHAPTERS.filter(c => c.subject === 'Physics').map(c =>
      `<a class="chapter-card" href="${c.id}.html"><div>${c.title} <span class="badge phys">Physics</span></div><span>📖 Open Notes →</span></a>`
    ).join('\n    ')}
  </div>
  
  <div class="subject-group">
    <div class="subject-title">⚗️ Chemistry</div>
    ${CHAPTERS.filter(c => c.subject === 'Chemistry').map(c =>
      `<a class="chapter-card" href="${c.id}.html"><div>${c.title} <span class="badge chem">Chemistry</span></div><span>📖 Open Notes →</span></a>`
    ).join('\n    ')}
  </div>
</div>
</body>
</html>`;
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml, 'utf8');
  
  console.log(`\n🎉 ALL CHAPTERS GENERATED!`);
  console.log(`📁 Output folder: ${OUTPUT_DIR}`);
  console.log(`🏠 Index page: ${path.join(OUTPUT_DIR, 'index.html')}`);
}

run();
