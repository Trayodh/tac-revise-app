require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('Missing GEMINI_API_KEY in .env');
  process.exit(1);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

const MODEL = 'gemini-3.7-flash';

async function callGemini(systemPrompt, userPrompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: userPrompt }] }],
          generationConfig: { temperature: 0.3, maxOutputTokens: 8192 },
          systemInstruction: { parts: [{ text: systemPrompt }] }
        })
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429 || data.error?.message?.includes('demand')) {
          console.log(`  Rate limited / Demand spike — waiting 30s...`);
          await sleep(30000);
          retries--;
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      text = text.replace(/^```html?\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
      return text;
    } catch (e) {
      console.error(`  API error: ${e.message.substring(0, 120)}`);
      await sleep(10000);
      retries--;
    }
  }
  return null;
}

const SYSTEM_PROMPT = `You are an expert military tutor for India's NDA and CDS exams.
Your task is to take the provided topic notes (HTML format) and ENRICH them with quality upgrades. DO NOT summarize or remove any existing content! 

You must augment the content by adding the following 3 elements wherever appropriate:

1. Mnemonics / Memory Hacks
Find any lists (e.g. dynasties, causes, layers, formulas) and insert a mnemonic block to help students remember it.
Format:
<div class="memory-hack-box" style="background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; padding: 12px; margin: 20px 0; border-radius: 4px;">
  <p style="margin: 0; font-size: 1.1em; color: #eab308;"><strong>🧠 Memory Hack!</strong></p>
  <p style="margin: 5px 0 0 0;">[Mnemonic acronym/sentence and explanation]</p>
</div>

2. Comparison Tables
If the topic inherently compares two or more things (e.g. Fundamental Rights vs DPSP, Plant vs Animal Cell, AC vs DC), generate a styled HTML <table> comparing them if one does not exist. Use inline styles: <table style="width:100%; border-collapse: collapse; margin: 15px 0;"> with <th> and <td> having borders.

3. PYQ Year-Tagged Examples
Find 2-3 specific, highly-tested facts in the notes and append a PYQ tag next to them. 
Format: <span class="pyq-tag" style="background: rgba(239, 68, 68, 0.2); color: #ef4444; font-size: 0.75rem; padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: 600;">Asked in NDA 2023</span>

Return the FULL, original HTML content, but with these 3 elements intelligently injected into the appropriate sections. Do not use markdown backticks in your response.`;

function buildPrompt(topicTitle, subjectTitle, content) {
  return `Subject: ${subjectTitle}
Topic: ${topicTitle}

Original Content (HTML):
${content}

Please return the enriched HTML.`;
}

async function main() {
  const dataJs = fs.readFileSync('notes_data_exam_focused.js', 'utf8');
  let dbMatch = dataJs.match(/const\s+NOTES_DATABASE\s*=\s*(\{[\s\S]*?\});\s*$/m);
  if (!dbMatch) dbMatch = dataJs.match(/let\s+NOTES_DATABASE\s*=\s*(\{[\s\S]*?\});/m);
  if (!dbMatch) {
    console.error("Could not find NOTES_DATABASE");
    process.exit(1);
  }

  let db;
  try {
    db = eval('(' + dbMatch[1] + ')');
  } catch (e) {
    console.error("Error parsing NOTES_DATABASE", e);
    process.exit(1);
  }

  const subjects = Object.keys(db);
  console.log(`=== Content Enrichment Pass (Quality Upgrade) ===`);

  for (const sub of subjects) {
    const subjectData = db[sub];
    console.log(`\n── ${subjectData.title} ──`);
    
    // For storing enriched data
    const outFileName = `notes_extra_${sub}.js`;
    let existingExpanded = {};
    if (fs.existsSync(outFileName)) {
      const existingContent = fs.readFileSync(outFileName, 'utf8');
      const parts = existingContent.split(/window\.EXPANDED_NOTES_DATA\['(.*?)'\]\s*=\s*`/);
      for (let i = 1; i < parts.length; i += 2) {
        let key = parts[i];
        let val = parts[i+1].substring(0, parts[i+1].lastIndexOf('`;'));
        existingExpanded[key] = val;
      }
    }

    let modified = false;

    for (const chapter of subjectData.chapters) {
      for (const topic of chapter.topics) {
        // If it's already enriched and saved, skip
        if (existingExpanded[topic.id] && existingExpanded[topic.id].includes('memory-hack-box')) {
          console.log(`   [SKIP]  ${topic.title} — already enriched`);
          continue;
        }

        // We only enrich notes that are already rich (> 5000 chars)
        let baseContent = existingExpanded[topic.id] || topic.notes;
        
        // If it's a stub or short, skip it (this targets the rich content)
        if (!baseContent || baseContent.length < 5000) {
          console.log(`   [SKIP]  ${topic.title} — too short (${baseContent ? baseContent.length : 0} chars)`);
          continue;
        }

        console.log(`   [GEN]   ${topic.title} (${baseContent.length} chars)`);
        const prompt = buildPrompt(topic.title, subjectData.title, baseContent);
        
        const enriched = await callGemini(SYSTEM_PROMPT, prompt);

        if (!enriched || enriched.length < 1000) {
          console.error(`   [FAIL]  ${topic.title}`);
          continue;
        }

        existingExpanded[topic.id] = enriched;
        modified = true;

        // Long wait to respect free tier and avoid demand spikes
        await sleep(15000);
      }
    }

    if (modified) {
      let jsContent = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`;
      for (const [key, val] of Object.entries(existingExpanded)) {
        jsContent += `window.EXPANDED_NOTES_DATA['${key}'] = \`${val}\`;\n\n`;
      }
      fs.writeFileSync(outFileName, jsContent);
      console.log(`   -> Saved ${outFileName}`);
    }
  }
}

main();
