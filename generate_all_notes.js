require('dotenv').config();
const fs = require('fs');

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;

if (!CEREBRAS_API_KEY) {
  console.error("Missing CEREBRAS_API_KEY in .env");
  process.exit(1);
}

global.window = {};
const loadScript = (filename) => {
  try {
    if (fs.existsSync(filename)) {
      const code = fs.readFileSync(filename, 'utf8');
      eval(code.replace(/(const|let|var)\s+(NOTES_DATABASE|OFFICIAL_SYLLABUS_DATA|PYQ_TRENDS_DATA|EXPANDED_NOTES_DATA)/g, 'window.$2'));
    }
  } catch (e) {}
};

loadScript('data.js');
const NOTES_DATABASE = window.NOTES_DATABASE;
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateWithGroq(promptText) {
  const url = 'https://api.cerebras.ai/v1/chat/completions';
  
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
            { role: 'system', content: `You are a world-class expert tutor and author of Indian Defence Exam preparation books (NDA, CDS, AFCAT). Your notes are famous for being:
1. DEEPLY DETAILED - Every concept explained from first principles with multiple real examples.
2. EXAM-FOCUSED - You always cite which exact paper, year, and section a concept has appeared in.
3. RICHLY STRUCTURED - You use h4 headers, colored spans, styled HTML tables, and bullet lists to maximise readability.
4. UNIQUE - Every section is fresh and specific to the topic. You NEVER pad with generic text or repeat formulas in different sections.
5. PURE HTML - You output raw HTML only. Never use markdown. Never wrap in code blocks. Always close all HTML tags properly.` },
            { role: 'user', content: promptText }
          ],
          max_tokens: 5500,
          temperature: 0.65
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          const retryAfter = parseInt(res.headers?.get?.('retry-after') || '20');
          console.log(`Rate limited! Waiting ${retryAfter}s...`);
          await sleep(retryAfter * 1000);
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      
      // Cerebras reasoning models return content in message.content or message.reasoning
      const msg = data.choices?.[0]?.message;
      let text = msg?.content || msg?.reasoning || '';
      if (text.startsWith("```html")) text = text.substring(7);
      if (text.startsWith("```")) text = text.substring(3);
      if (text.endsWith("```")) text = text.substring(0, text.length - 3);
      return text.trim();
    } catch (err) {
      console.error(`Fetch error:`, err.message);
      await sleep(5000);
      retries--;
    }
  }
  return null;
}

const fileMap = {
  'mathematics': 'notes_extra.js',
  'polity': 'notes_extra_polity.js',
  'history': 'notes_extra_history.js',
  'geography': 'notes_extra_geography.js',
  'economics': 'notes_extra_economics.js',
  'physics': 'notes_extra_physics.js',
  'chemistry': 'notes_extra_chemistry.js',
  'biology': 'notes_extra_biology.js',
  'military-aptitude': 'notes_extra_afcat.js',
  'current-affairs': 'notes_extra_10.js',
  'environment': 'notes_extra_general_studies.js',
  'english': 'notes_extra_english.js'
};

async function run() {
  const tasks = [];
  
  // Initialize files only if they don't exist yet (preserves resume state)
  const uniqueFiles = [...new Set(Object.values(fileMap))];
  for (const file of uniqueFiles) {
    if (!fs.existsSync(file)) {
      const fileContent = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n`;
      fs.writeFileSync(file, fileContent, 'utf8');
      console.log(`Initialized ${file}`);
    }
  }
  
  for (const subjectId in NOTES_DATABASE) {
    const subject = NOTES_DATABASE[subjectId];
    for (const chapter of subject.chapters) {
      for (const topic of chapter.topics) {
        tasks.push({ subjectId, subject, chapter, topic });
      }
    }
  }
  
  console.log(`Starting massive AI generation for ${tasks.length} topics...`);
  
  for (let i = 0; i < tasks.length; i++) {
    const { subjectId, subject, chapter, topic } = tasks[i];
    console.log(`Processing [${i+1}/${tasks.length}] ${subject.title} -> ${topic.title}...`);
    
    const targetFile = fileMap[subjectId] || 'notes_extra.js';
    let isMath = subjectId === 'mathematics';
    
    // Resume support: skip if already generated
    if (fs.existsSync(targetFile)) {
      const existing = fs.readFileSync(targetFile, 'utf8');
      if (existing.includes(`EXPANDED_NOTES_DATA["${topic.id}"]`)) {
        console.log(`  Skipping ${topic.id} (already generated)`);
        continue;
      }
    }
    
    let source1Text = '';
    let source2Text = '';
    let source3Text = '';

    // Map subjectId to file names
    let mappedSubject = subjectId;
    if (subjectId === 'polity') mappedSubject = 'indian_polity';
    if (subjectId === 'economics') mappedSubject = 'indian_economy';
    if (subjectId === 'english') mappedSubject = 'general_english';

    try { source1Text = fs.readFileSync(`pdf_chunks/${mappedSubject}_pathfinder.txt`, 'utf8'); } catch(e){}
    try { source2Text = fs.readFileSync(`pdf_chunks/${mappedSubject}_insight_ssb.txt`, 'utf8'); } catch(e){}
    try { source3Text = fs.readFileSync(`pdf_chunks/general_science_ssbcrack.txt`, 'utf8'); } catch(e){}

    let prompt = `Generate extremely detailed, premium study notes in raw HTML for the topic: "${topic.title}"
Chapter: "${chapter.title}" | Subject: ${subject.title} | Exam: NDA / CDS / AFCAT

[SOURCE 1: PATHFINDER]
${source1Text.substring(0, 15000)}

[SOURCE 2: INSIGHT SSB]
${source2Text.substring(0, 5000)}

[SOURCE 3: SSBCRACK]
${source3Text.substring(0, 5000)}

Based on the 3 sources above, start your output DIRECTLY with this opening tag (no preamble, no markdown):
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    ${topic.title}
  </h3>

Then generate ALL of the following 8 mandatory sections IN ORDER. Do not skip any section:

--- SECTION 1: DEEP CONCEPTUAL EXPLANATION ---
Write 6-8 substantial paragraphs (minimum 600 words total) explaining this topic from first principles. Cover:
- Historical origin and context if applicable
- Core definitions and axioms with precise language
- How each concept builds on the previous
- 3-5 worked examples integrated into the explanation
- Real-world applications in defence, science, or Indian context
- Wrap at least 20 important terms, names, laws, or concepts in [[double square brackets]] to create wiki links
- Highlight key terms using: <span style="color: var(--warning);">important</span> and <span style="color: var(--success);">key facts</span>

--- SECTION 2: QUICK REVISION TABLE ---
<h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
Create a premium HTML table (min 8 rows) with borders and padding using inline CSS: style="border-collapse:collapse;width:100%;" for the table and style="border:1px solid var(--border);padding:10px;" for each td/th. Summarize the most important facts, dates, formulas, or comparisons specific to this topic.

--- SECTION 3: MNEMONICS & MEMORY AIDS ---
<h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
Provide 3-5 genuinely useful, creative mnemonics, acronyms, or memory tricks SPECIFIC to this topic. Explain each one clearly.

--- SECTION 4: HIGH-YIELD RULES & FACTS ---
<h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
Write EXACTLY 12 bullet points, each a distinct, exam-tested fact or formula. Each bullet must be DIFFERENT from the others — no repetition. Use <span style="color:var(--warning);"> for numbers/dates and <span style="color:var(--success);"> for key terms.

--- SECTION 5: PYQ ANALYSIS & EXAM TRENDS ---
<h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
Write 3-4 paragraphs explaining:
- How frequently this topic appears in NDA/CDS/AFCAT papers
- Which specific sub-topics examiners love to test
- The typical difficulty and style of questions (direct formula, application, or conceptual)
- Any recent trend shifts in the last 5 years

--- SECTION 6: COMMON PITFALLS ---
<h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
List 5-7 specific mistakes students make on this exact topic. For each, explain WHY students make it and HOW to avoid it.
`;
    if (isMath) {
        prompt += `
--- SECTION 7: PRACTICE PROBLEMS ---
<h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mathematics Practice</h4>
Provide EXACTLY 5 fully solved problems graded from easy to hard (NDA/CDS standard). For each:
- State the problem clearly
- Show every step of the solution
- Add a short insight about why this type appears in exams
`;
    } else {
        prompt += `
--- SECTION 7: PRACTICE MCQs ---
<h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
Provide EXACTLY 5 multiple-choice questions (NDA/CDS/AFCAT level). For each:
- Write the question stem
- List options (A), (B), (C), (D)
- State the correct answer
- Give a 2-3 sentence explanation of why it's correct and why others are wrong
`;
    }

    prompt += `
Close with </div> as the very last line.

FINAL QUALITY RULES:
- Do NOT use any emojis
- Do NOT use markdown (no **, no #, no *)
- All HTML tags must be properly closed
- No content should be generic or repeated across sections
- Do NOT include any preamble or postamble — start with the <div> and end with </div>
`;

    const result = await generateWithGroq(prompt);
    if (result) {
      // Escape backticks
      const escapedHTML = result.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\\$/g, '\\$');
      const appendCode = `\nwindow.EXPANDED_NOTES_DATA["${topic.id}"] = \`\n${escapedHTML}\n\`;\n`;
      fs.appendFileSync(targetFile, appendCode, 'utf8');
      console.log(`  Saved to ${targetFile}`);
    } else {
      console.log(`  Failed to generate for ${topic.id}`);
    }
    
    await sleep(1500); // Groq handles ~30+ RPM, 1.5s gap is plenty
  }
  
  console.log("ALL TOPICS GENERATED AND INJECTED!");
}

run();
