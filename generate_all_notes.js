require('dotenv').config();
const fs = require('fs');
const { GoogleGenAI } = require('@google/genai');
const metadata = require('./Pathfinder_Elite/metadata.json');
const { execSync } = require('child_process');
const stringSimilarity = require('string-similarity');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

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

async function generateWithGemini(promptText) {
  const model = 'gemini-flash-latest';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: {
            temperature: 0.65,
          },
          systemInstruction: {
            parts: [{ text: `You are a world-class expert tutor and author of Indian Defence Exam preparation books (NDA, CDS, AFCAT). Your notes are famous for being:
1. DEEPLY DETAILED - Every concept explained from first principles with multiple real examples.
2. EXAM-FOCUSED - You always cite which exact paper, year, and section a concept has appeared in.
3. RICHLY STRUCTURED - You use h4 headers, colored spans, styled HTML tables, and bullet lists to maximise readability.
4. TEXTBOOK ACCURATE - CRITICAL RULE: Use the EXACT lines and explanations from the provided Pathfinder text whenever possible. Only use your AI capabilities to improve the formatting, structure the notes beautifully, or add clarity. DO NOT hallucinate external facts if they contradict the source.
5. PURE HTML - You output raw HTML only. Never use markdown. Never wrap in code blocks. Always close all HTML tags properly.` }]
          }
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          console.log(`Rate limited! Retrying in 20s...`);
          await sleep(20000);
          retries--;
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      
      let text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      if (text.startsWith("```html")) text = text.substring(7);
      if (text.startsWith("```")) text = text.substring(3);
      if (text.endsWith("```")) text = text.substring(0, text.length - 3);
      return text.trim();
    } catch (e) {
      console.log(`Error generating: ${e.message}. Retrying...`);
      await sleep(10000); // 10 seconds between retries to avoid rate limits
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

    // Fuzzy match chapter to metadata
    let metaMatch = null;
    let bestMatch = { rating: 0 };
    if (metadata.length > 0) {
      const topicNames = metadata.map(m => m.topic_name.toLowerCase().replace(' core and mcqs', ''));
      const matches = stringSimilarity.findBestMatch(chapter.title.toLowerCase(), topicNames);
      bestMatch = matches.bestMatch;
      if (bestMatch.rating > 0.4) {
         metaMatch = metadata[matches.bestMatchIndex];
      }
    }

    if (metaMatch) {
      console.log(`  Mapped to PDF Pages: ${metaMatch.start_page} - ${metaMatch.end_page}`);
      try {
        source1Text = execSync(`python extract_chapter.py ${metaMatch.start_page} ${metaMatch.end_page}`).toString('utf8');
      } catch(e) {
        console.error("  Error extracting pages:", e.message);
      }
    } else {
      console.log(`  No exact page mapping found for "${chapter.title}", falling back to chunks.`);
      try { source1Text = fs.readFileSync(`pdf_chunks/${mappedSubject}_pathfinder.txt`, 'utf8').substring(0, 30000); } catch(e){}
    }

    try { source2Text = fs.readFileSync(`pdf_chunks/${mappedSubject}_insight_ssb.txt`, 'utf8'); } catch(e){}
    try { source3Text = fs.readFileSync(`pdf_chunks/general_science_ssbcrack.txt`, 'utf8'); } catch(e){}

    let prompt = `Generate highly focused, premium study notes in raw HTML for the topic: "${topic.title}"
Chapter: "${chapter.title}" | Subject: ${subject.title} | Exam: NDA / CDS / AFCAT

[SOURCE 1: PATHFINDER]
${source1Text}

[SOURCE 2: INSIGHT SSB]
${source2Text.substring(0, 5000)}

[SOURCE 3: SSBCRACK]
${source3Text.substring(0, 5000)}

Based on the 3 sources above, start your output DIRECTLY with this opening tag (no preamble, no markdown):
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    ${topic.title}
  </h3>

CRITICAL RULE: The source text extracted from the PDF is messy. It contains theory, practice exercises, "PREVIOUS YEARS QUESTIONS", and "ANSWERS". 
YOUR DIRECTIVE: You must completely IGNORE the "PREVIOUS YEARS QUESTIONS", "ANSWERS", and "HINTS AND SOLUTIONS" sections. They are garbage for this purpose. 
ONLY extract the core theory to form the Notes, and extract actual practice/solved examples to form the MCQs.

Then generate exactly 2 mandatory sections IN ORDER. Do not skip any section:

--- SECTION 1: CORE NOTES ---
Write 4-5 concise paragraphs explaining this topic from first principles. Keep it highly focused.
- Historical origin and context if applicable
- Core definitions, formulas, and rules
- Wrap at least 20 important terms in [[double square brackets]] to create wiki links
- Highlight key terms using: <span style="color: var(--warning);">important</span> and <span style="color: var(--success);">key facts</span>
`;
    if (isMath) {
        prompt += `
--- SECTION 2: PRACTICE PROBLEMS (MCQs) ---
<h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mathematics Practice</h4>
Extract exactly 3 practice problems from the text (do NOT take from Previous Years Questions). 
For each:
- State the problem clearly
- Show the step-by-step solution
`;
    } else {
        prompt += `
--- SECTION 2: PRACTICE MCQs ---
<h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
Extract exactly 3 multiple-choice questions from the text (do NOT take from Previous Years Questions).
For each:
- Write the question stem
- List options (A), (B), (C), (D)
- State the correct answer with a 2-3 sentence explanation
`;
    }

    prompt += `
Ensure the total length is strictly around 2 to 3 pages (approx. 800-1000 words).
Close with </div> as the very last line.

FINAL QUALITY RULES:
- Do NOT use any emojis
- Do NOT use markdown (no **, no #, no *)
- All HTML tags must be properly closed
- No content should be generic or repeated across sections
- Do NOT include any preamble or postamble — start with the <div> and end with </div>
`;

    const result = await generateWithGemini(prompt);
    if (result) {
      // Escape backticks
      const escapedHTML = result.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\\$/g, '\\$');
      const appendCode = `\nwindow.EXPANDED_NOTES_DATA["${topic.id}"] = \`\n${escapedHTML}\n\`;\n`;
      fs.appendFileSync(targetFile, appendCode, 'utf8');
      console.log(`  Saved to ${targetFile}`);
    } else {
      console.log(`  Failed to generate for ${topic.id}`);
    }
    
    await sleep(2500); // 2.0 Flash handles 1500 RPD and 15 RPM. 2.5s is safe
  }
  
  console.log("ALL TOPICS GENERATED AND INJECTED!");
}

run();
