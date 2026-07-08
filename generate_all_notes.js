require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
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

async function generateWithGemini(promptText) {
  const model = 'gemini-2.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }]
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          console.log(`Rate limited! Retrying in 12s...`);
          await sleep(12000);
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
    } catch (err) {
      console.error(`Fetch error:`, err.message);
      await sleep(10000);
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
  'environment': 'notes_extra_general_studies.js'
};

async function run() {
  const tasks = [];
  
  for (const subjectId in NOTES_DATABASE) {
    if (subjectId === 'english') continue; // Already done
    
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
    
    // Check if it already exists in the file (in case of resume)
    let fileContent = "";
    if (fs.existsSync(targetFile)) {
      fileContent = fs.readFileSync(targetFile, 'utf8');
      if (fileContent.includes(`EXPANDED_NOTES_DATA["${topic.id}"]`)) {
        console.log(`  Skipping ${topic.id} (already generated)`);
        continue;
      }
    } else {
      fileContent = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n`;
      fs.writeFileSync(targetFile, fileContent, 'utf8');
    }

    let isMath = subjectId === 'mathematics';
    
    let prompt = `You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT).
Your goal is to generate extremely detailed study notes that teach the topic "${topic.title}" (under the chapter "${chapter.title}" in ${subject.title}).

The notes must be in raw HTML format, starting with:
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    ${topic.title}
  </h3>

And then include:
1. A detailed, step-by-step explanation of the core concepts, historical background, or theoretical foundations. Provide multiple examples.
2. Highlight important facts, names, or dates using <span style="color: var(--warning);">important text</span> or <span style="color: var(--success);">success text</span>.
3. Interactive Wiki Linking: You MUST wrap at least 15 important terms, formulas, treaties, or concepts in double square brackets, e.g. [[Fundamental Rights]], [[Mughal Empire]], [[Newton's Laws]], so they become clickable wiki links in our app.
4. "High-Yield Facts" under a styled h4 header:
   <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
   Include a list of key rules, formulas, or facts heavily tested in NDA/CDS/AFCAT.
`;
    if (isMath) {
        prompt += `\n5. MATHEMATICS SPECIFICATION: Since this is a Mathematics topic, you MUST add a dedicated section at the very end titled "22. MATHEMATICS PRACTICE". Provide exactly 3 fully solved examples (sums) related to this topic. Ensure the difficulty matches the standard of the NDA/CDS Pathfinder textbook.\n`;
    }

    prompt += `
Make sure the output is:
- Extremely thorough and detailed (at least 6-8 paragraphs/sections of content, minimum 800 words).
- Beautifully structured with proper CSS/HTML tags, tables, and lists.
- Do NOT use any emojis.
- Valid HTML with all tags closed properly.
- NO markdown code block wrappers (do NOT output \`\`\`html at the start).
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
    
    await sleep(4000); // Prevent rate limits (15 RPM -> 4s between requests)
  }
  
  console.log("ALL TOPICS GENERATED AND INJECTED!");
}

run();
