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
          console.log(`Rate limited! Waiting 60s...`);
          await sleep(60000);
          continue; // Don't decrement retries on rate limit
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
  'environment': 'notes_extra_general_studies.js',
  'english': 'notes_extra_english.js'
};

async function run() {
  const tasks = [];
  
  // Clear all target files to ensure fresh high-quality generation
  const uniqueFiles = [...new Set(Object.values(fileMap))];
  for (const file of uniqueFiles) {
    const fileContent = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n`;
    fs.writeFileSync(file, fileContent, 'utf8');
    console.log(`Cleared and initialized ${file}`);
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
    
    let prompt = `You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT).
Your goal is to generate extremely detailed, high-quality study notes that teach the topic "${topic.title}" (under the chapter "${chapter.title}" in ${subject.title}).

The notes must be in raw HTML format, starting with:
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    ${topic.title}
  </h3>

And then strictly follow this structure:

1. **Deep Conceptual Breakdown**: Minimum 800 words explaining the core concepts, historical background, or theoretical foundations in extreme detail. Provide multiple examples.
2. **Interactive Wiki Linking**: You MUST wrap at least 15 important terms, formulas, treaties, or concepts in double square brackets, e.g. [[Fundamental Rights]], [[Mughal Empire]], [[Newton's Laws]], so they become clickable wiki links in our app.
3. **Quick Revision Table**: 
   <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision</h4>
   Provide a beautifully formatted HTML table summarizing the most important data points, dates, formulas, or facts. Use inline CSS to make the table look premium with borders and padding.
4. **Mnemonics & Memory Aids**: Provide clever tricks, acronyms, or mnemonics to help remember complex information in this topic.
5. **High-Yield Rules & Facts**: 
   <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
   Include a list of AT LEAST 10 key rules, formulas, or facts heavily tested in NDA/CDS/AFCAT exams. Highlight important facts, names, or dates using <span style="color: var(--warning);">important text</span> or <span style="color: var(--success);">success text</span>.
6. **PYQ Analysis & Trends**: Explain how this topic is typically tested in exams. What are the favorite areas of the examiners?
7. **Common Pitfalls**: A list of frequent mistakes students make on this topic and how to avoid them.
`;
    if (isMath) {
        prompt += `\n8. MATHEMATICS PRACTICE: Since this is a Mathematics topic, you MUST add a dedicated section at the very end titled "MATHEMATICS PRACTICE". Provide exactly 5 fully solved examples (sums) related to this topic. Ensure the difficulty matches the standard of the NDA/CDS exams.\n`;
    } else {
        prompt += `\n8. PRACTICE MCQs: Provide exactly 3 multiple choice questions at the end with their correct answers and explanations.\n`;
    }

    prompt += `
Make sure the output is:
- Extremely thorough and detailed (minimum 1200 words).
- Beautifully structured with proper CSS/HTML tags, tables, and lists.
- Do NOT use any emojis.
- Valid HTML with all tags closed properly.
- NO markdown code block wrappers (do NOT output \`\`\`html at the start).
</div>
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
    
    await sleep(8000); // ~7.5 RPM - safely under 10 RPM limit
  }
  
  console.log("ALL TOPICS GENERATED AND INJECTED!");
}

run();
