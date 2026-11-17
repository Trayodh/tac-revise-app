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
  } catch (e) {
    console.log(`Note: could not load ${filename}: ${e.message}`);
  }
};

loadScript('data.js');
loadScript('syllabus_data.js');
loadScript('pyq_trends.js');

const NOTES_DATABASE = window.NOTES_DATABASE;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateWithGemini(promptText) {
  const model = 'gemini-2.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  
  let retries = 3;
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
          console.log(`Rate limited! Retrying in 10s...`);
          await sleep(10000);
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
      await sleep(5000);
      retries--;
    }
  }
  return null;
}

async function run() {
  const subject = NOTES_DATABASE['english'];
  const tasks = [];
  
  for (const chapter of subject.chapters) {
    for (const topic of chapter.topics) {
      tasks.push({ chapter, topic });
    }
  }
  
  let finalFileContent = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n`;
  
  for (let i = 0; i < tasks.length; i++) {
    const { chapter, topic } = tasks[i];
    console.log(`Processing [${i+1}/${tasks.length}] ${topic.title}...`);
    
    let prompt = `You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT).
Your goal is to generate extremely detailed study notes that teach the English Grammar/Vocab topic "${topic.title}" (under the chapter "${chapter.title}").

The notes must be in raw HTML format, starting with:
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    ${topic.title}
  </h3>

And then include:
1. A detailed, step-by-step explanation of the rules, grammar structures, or vocabulary tricks. Provide multiple examples.
2. Highlight important rules using <span style="color: var(--warning);">important text</span> or <span style="color: var(--success);">success text</span>.
3. Interactive Wiki Linking: You MUST wrap at least 15 important terms or grammatical concepts in double square brackets, e.g. [[Verb Agreement]], [[Subject]], [[Noun]], so they become clickable wiki links in our app.
4. "High-Yield Formulas & Facts" under a styled h4 header:
   <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
   Include a list of key rules or facts heavily tested in NDA/CDS/AFCAT.

Make sure the output is:
- Extremely thorough and detailed (at least 5-6 paragraphs/sections of content).
- Beautifully structured with proper CSS/HTML tags.
- Do NOT use any emojis.
- Valid HTML with all tags closed properly.
- NO markdown code block wrappers (do NOT output \`\`\`html at the start).
`;

    const result = await generateWithGemini(prompt);
    if (result) {
      // Escape backticks
      const escapedHTML = result.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\\$/g, '\\$');
      finalFileContent += `\nEXPANDED_NOTES_DATA["${topic.id}"] = \`\n${escapedHTML}\n\`;\n`;
    }
    
    await sleep(2000); // Prevent rate limits
  }
  
  fs.writeFileSync('notes_extra_english.js', finalFileContent, 'utf8');
  console.log("notes_extra_english.js completely overwritten with AI content!");
}

run();
