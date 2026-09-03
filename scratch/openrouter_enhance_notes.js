require('dotenv').config();
const fs = require('fs');

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
if (!OPENROUTER_API_KEY) { console.error('Missing OPENROUTER_API_KEY'); process.exit(1); }

const sleep = ms => new Promise(r => setTimeout(r, ms));

const SYSTEM_PROMPT = `You are a world-class Indian Defence Exam tutor (NDA/CDS/AFCAT) who writes the best study notes in India. Your notes are renowned for being:
1. DEEPLY DETAILED — every concept is explained clearly with real examples relevant to defence aspirants
2. EXAM-FOCUSED — you always call out which exam (NDA/CDS/AFCAT) and approximately which year a fact is commonly tested
3. STRUCTURED — you use h3/h4 headings, coloured callout boxes, styled tables, and bullet lists
4. MNEMONIC-RICH — you include memory hacks, acronyms, and tricks to memorise sequences, lists, and formulas
5. PURE HTML — output raw HTML only. Never use markdown. Never wrap in code blocks. Close all tags. No DOCTYPE, no <html>/<head>/<body> tags.`;

async function callOpenRouter(systemPrompt, userPrompt) {
  const url = `https://openrouter.ai/api/v1/chat/completions`;
  
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'http://localhost:3000'
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
          temperature: 0.4
        })
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          await sleep(5000);
          continue;
        }
        throw new Error(JSON.stringify(data));
      }
      let text = data.choices?.[0]?.message?.content || '';
      return text.replace(/^```html?\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
    } catch (e) {
      console.error(`Attempt ${attempt+1} failed:`, e.message);
      await sleep(5000);
    }
  }
  return null;
}

function loadNotesDatabase() {
  const src = fs.readFileSync('notes_data_exam_focused.js', 'utf8');
  eval(src.replace('const NOTES_DATABASE', 'global.NOTES_DATABASE'));
  return global.NOTES_DATABASE;
}

async function run() {
  const db = loadNotesDatabase();
  const FILE_MAP = {
    'polity': 'notes_extra_polity.js',
    'history': 'notes_extra_history.js',
    'geography': 'notes_extra_geography.js',
    'economics': 'notes_extra_economics.js',
    'english': 'notes_extra_english.js',
  };

  for (const [subjectId, outputFile] of Object.entries(FILE_MAP)) {
    if (!db[subjectId]) continue;
    
    if (!fs.existsSync(outputFile)) {
      fs.writeFileSync(outputFile, `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`, 'utf8');
    }
    
    const existing = fs.readFileSync(outputFile, 'utf8');
    console.log(`\n=== Processing ${subjectId} ===`);
    
    const subject = db[subjectId];
    for (const chapter of subject.chapters) {
      for (const topic of chapter.topics) {
        if (existing.includes(`EXPANDED_NOTES_DATA["${topic.id}"]`) || existing.includes(`EXPANDED_NOTES_DATA['${topic.id}']`)) {
          console.log(` [SKIP] ${topic.title}`);
          continue;
        }
        
        console.log(` [GEN]  ${topic.title}...`);
        
        const prompt = `You are enhancing existing study notes for: "${topic.title}"
Subject: "${subject.title}" | Exam: NDA / CDS / AFCAT

EXISTING NOTES (base content to enhance — do NOT delete any information, only ADD and RESTRUCTURE):
${(topic.notes || '').substring(0, 8000)}

ENHANCEMENT INSTRUCTIONS:
Start your output DIRECTLY with this opening div (no preamble):
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">${topic.title}</h3>

MANDATORY ENHANCEMENTS TO ADD (do all of these):
1. STRUCTURE: Organise content under clear <h4> subheadings. Remove any remnant light-theme CSS. Use dark-mode colors: text #e2e8f0, headings #4ade80, accent #fbbf24.
2. EXAM CALLOUT BOX — add at least one:
<div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
  <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> [specific high-yield fact]
</div>
3. MEMORY HACK — add at least one mnemonic or trick:
<div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
  <strong style="color: #fbbf24;">💡 Memory Hack:</strong> [clever acronym or trick]
</div>
4. COMPARISON TABLE — if applicable, add a styled table.
5. WIKI LINKS — wrap 5-10 key terms in [[double brackets]].

CRITICAL RULES:
- Minimum output: 1500 words of content
- Raw HTML only — start with <div and end with </div>`;

        const enhanced = await callOpenRouter(SYSTEM_PROMPT, prompt);
        if (enhanced && enhanced.length > 500) {
          const escaped = enhanced.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\$/g, '\\$');
          const jsCode = `\nwindow.EXPANDED_NOTES_DATA["${topic.id}"] = \`\n${escaped}\n\`;\n`;
          fs.appendFileSync(outputFile, jsCode, 'utf8');
          console.log(`        -> Success (+${enhanced.length} chars)`);
          await sleep(500); 
        } else {
          console.log(`        -> FAILED`);
        }
      }
    }
  }
  console.log("All done!");
}

run().catch(console.error);
