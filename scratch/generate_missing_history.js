/**
 * Step 2: Generate expanded notes for the 4 missing history topics
 * Uses Gemini Flash via the same pattern as generate_all_notes.js
 * Appends to notes_extra_history.js
 */
require('dotenv').config();
const fs = require('fs');
const { execSync } = require('child_process');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) { console.error('Missing GEMINI_API_KEY'); process.exit(1); }

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function callGemini(prompt) {
  const model = 'gemini-3.7-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.6, maxOutputTokens: 8192 },
          systemInstruction: { parts: [{ text: `You are a world-class Indian Defence exam tutor (NDA/CDS/AFCAT). Generate detailed, exam-focused study notes in raw HTML only. No markdown. No DOCTYPE. No <html>/<head>/<body> tags. Start directly with a <div> and end with </div>.` }] }
        })
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) { await sleep(25000); retries--; continue; }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      text = text.replace(/^```html?\s*/i, '').replace(/```\s*$/i, '').trim();
      return text;
    } catch (e) {
      console.error(`  Error: ${e.message}. Retrying...`);
      await sleep(10000);
      retries--;
    }
  }
  return null;
}

// Topics to generate — skip history-pyq-trends-topic (it's a data viz, not content)
const MISSING = [
  {
    topicId: 'magadha-expansion',
    topicTitle: 'Magadha Expansion',
    chapterTitle: 'Magadha Expansion',
    pdfPages: null // will fall back to chunk
  },
  {
    topicId: 'ancient-indian-culture',
    topicTitle: 'Ancient Indian Culture',
    chapterTitle: 'Ancient Indian Culture',
    pdfPages: null
  },
  {
    topicId: 'british-expansion',
    topicTitle: 'British Expansion in India',
    chapterTitle: 'British Expansion',
    pdfPages: null
  }
];

const OUTPUT_FILE = 'notes_extra_history.js';

async function run() {
  // Load pathfinder history chunk for context
  let pathfinderContext = '';
  try { pathfinderContext = fs.readFileSync('pdf_chunks/history_pathfinder.txt', 'utf8').substring(0, 25000); } catch(e) {}
  if (!pathfinderContext) {
    try { pathfinderContext = fs.readFileSync('pdf_chunks/history_insight_ssb.txt', 'utf8').substring(0, 25000); } catch(e) {}
  }
  if (!pathfinderContext) {
    // Try any available chunk
    const chunks = fs.readdirSync('pdf_chunks').filter(f => f.toLowerCase().includes('history'));
    if (chunks.length > 0) {
      try { pathfinderContext = fs.readFileSync(`pdf_chunks/${chunks[0]}`, 'utf8').substring(0, 25000); } catch(e) {}
      console.log(`Using fallback chunk: ${chunks.length > 0 ? chunks[0] : 'none'}`);
    }
  }

  for (const task of MISSING) {
    // Check if already generated
    const existing = fs.readFileSync(OUTPUT_FILE, 'utf8');
    if (existing.includes(`EXPANDED_NOTES_DATA["${task.topicId}"]`)) {
      console.log(`Skipping ${task.topicId} — already exists`);
      continue;
    }

    console.log(`\nGenerating: ${task.topicTitle}...`);

    const prompt = `Generate comprehensive, exam-focused study notes for the Indian Defence Exams (NDA/CDS/AFCAT) on the topic: "${task.topicTitle}" (Chapter: ${task.chapterTitle}).

${pathfinderContext ? `[REFERENCE SOURCE]\n${pathfinderContext.substring(0, 15000)}\n\n` : ''}

Start your output DIRECTLY with this opening div (no preamble, no DOCTYPE, no html/body tags):
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">
    ${task.topicTitle}
  </h3>

GENERATE THESE SECTIONS IN ORDER:

SECTION 1 — CORE NOTES (600-800 words):
- Historical background and significance for NDA/CDS context
- Key rulers, events, dates, causes, effects
- Comparison tables where relevant (use <table> with proper styling)
- Wrap 15-20 key terms in [[double square brackets]] for wiki links
- Use <span style="color: #fbbf24;">important terms</span> for key facts
- Use <span style="color: #4ade80;">exam-critical points</span> for high-yield facts
- Add a Memory Hack box: <div style="background: rgba(46,204,113,0.1); border-left: 4px solid #2ecc71; padding: 12px; margin: 16px 0; border-radius: 4px;"><strong>Memory Hack:</strong> ...</div>

SECTION 2 — PRACTICE MCQs:
<h4 style="border-left: 3px solid #4ade80; padding-left: 8px; margin-top: 24px; color: #e2e8f0; font-weight: 600;">Practice MCQs</h4>
Generate exactly 3 MCQs relevant to this topic. For each:
- State the question stem
- List options (A), (B), (C), (D)
- Show correct answer: <strong style="color: #4ade80;">Answer: (X)</strong>
- 2-sentence explanation of why the answer is correct

Close with </div> as the very last line.

RULES: Raw HTML only. No markdown. No DOCTYPE. No emojis. All tags must be properly closed.`;

    const html = await callGemini(prompt);
    if (!html) {
      console.error(`  FAILED to generate ${task.topicId}`);
      continue;
    }

    const escaped = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    const code = `\nwindow.EXPANDED_NOTES_DATA["${task.topicId}"] = \`\n${escaped}\n\`;\n`;
    fs.appendFileSync(OUTPUT_FILE, code, 'utf8');
    console.log(`  Saved ${task.topicId} (${html.length} chars)`);
    await sleep(3000);
  }

  // Handle history-pyq-trends-topic — generate a structured PYQ analysis page
  const existing = fs.readFileSync(OUTPUT_FILE, 'utf8');
  if (!existing.includes('EXPANDED_NOTES_DATA["history-pyq-trends-topic"]')) {
    console.log('\nGenerating: History PYQ Trends summary...');
    const pyqHtml = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">History PYQ Trends — NDA &amp; CDS</h3>
  <p style="color: #94a3b8; margin-bottom: 16px;">This section summarises the most frequently asked History topics across NDA and CDS papers. Use this as a triage guide to prioritise your revision.</p>
  <table style="width:100%; border-collapse: collapse; font-size: 0.9rem; margin-bottom: 20px;">
    <thead>
      <tr style="background: rgba(74,222,128,0.1);">
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1); text-align: left;">Topic</th>
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">NDA (approx. Qs)</th>
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">CDS (approx. Qs)</th>
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.1);">Priority</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08);">Mughal Empire</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">3–4</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">4–6</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;"><span style="color:#4ade80; font-weight:700;">HIGH</span></td></tr>
      <tr style="background:rgba(255,255,255,0.02);"><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08);">Ancient India (Maurya, Gupta)</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">4–5</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">3–5</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;"><span style="color:#4ade80; font-weight:700;">HIGH</span></td></tr>
      <tr><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08);">Freedom Movement (1857–1947)</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">3–5</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">5–7</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;"><span style="color:#4ade80; font-weight:700;">HIGH</span></td></tr>
      <tr style="background:rgba(255,255,255,0.02);"><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08);">Delhi Sultanate</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">2–3</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">3–4</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;"><span style="color:#fbbf24; font-weight:700;">MEDIUM</span></td></tr>
      <tr><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08);">Indus Valley Civilisation</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">2–3</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">2–3</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;"><span style="color:#fbbf24; font-weight:700;">MEDIUM</span></td></tr>
      <tr style="background:rgba(255,255,255,0.02);"><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08);">World Wars / Cold War</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">1–2</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;">2–3</td><td style="padding:8px; border: 1px solid rgba(255,255,255,0.08); text-align:center;"><span style="color:#f87171;">LOW</span></td></tr>
    </tbody>
  </table>
  <div style="background: rgba(74,222,128,0.08); border-left: 3px solid #4ade80; padding: 12px; border-radius: 4px;">
    <strong style="color: #4ade80;">Exam Strategy:</strong> Focus 60% of your history revision time on Ancient India (Maurya to Gupta) and the Freedom Movement — these two alone account for 8–12 questions per paper. The Mughal period is tested more on culture and administration than on battle dates.
  </div>
</div>`;
    const escaped = pyqHtml.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    fs.appendFileSync(OUTPUT_FILE, `\nwindow.EXPANDED_NOTES_DATA["history-pyq-trends-topic"] = \`\n${escaped}\n\`;\n`, 'utf8');
    console.log('  Saved history-pyq-trends-topic (static)');
  }

  console.log('\n=== Step 2 Complete ===');
}

run().catch(console.error);
