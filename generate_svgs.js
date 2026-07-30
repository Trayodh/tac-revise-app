// generate_svgs.js
// Generates SVG diagrams for all topics using Cerebras API
const fs = require('fs');

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
const MODEL = 'gpt-oss-120b';
const BATCH_DELAY_MS = 6000; // API limits
const OUTPUT_FILE = 'notes_svgs_generated.js';

// Load existing notes
let notesDataTxt = fs.readFileSync('notes_data.js', 'utf8');
notesDataTxt = notesDataTxt
  .replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =')
  .replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');
eval(notesDataTxt);
const db = global.NOTES_DATABASE;

// Load existing SVGs if any
global.window = global;
global.TOPIC_SVGS = {};
if (fs.existsSync(OUTPUT_FILE)) {
  let existingSvgTxt = fs.readFileSync(OUTPUT_FILE, 'utf8');
  eval(existingSvgTxt);
}

function buildPrompt(topicTitle, subject) {
  return `You are an expert scientific illustrator and educator. 
Create a clean, accurate, and visually appealing SVG diagram for the ${subject} topic: "${topicTitle}".
Use standard SVG elements (rect, circle, path, text, etc.). 
Keep the design modern, use solid flat colors, and ensure the diagram effectively visualizes the core concept.
Include clear text labels pointing to key parts of the diagram. Make sure text does not overlap with shapes.
Make the viewBox="0 0 600 400" so it has a standard aspect ratio.
Return ONLY the raw <svg>...</svg> code, without any markdown formatting or explanation. Ensure it's a valid SVG string.`;
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function callCerebrasOnce(prompt) {
  const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CEREBRAS_API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2
    })
  });

  const data = await response.json();
  if (data.error) {
    if (data.error.message && data.error.message.includes('Rate limit')) {
      return { rateLimited: true, error: data.error.message };
    }
    throw new Error(`API Error: ${JSON.stringify(data.error)}`);
  }

  let content = data.choices[0].message.content.trim();
  // Strip markdown codeblocks
  if (content.startsWith('```')) {
    content = content.replace(/^```(?:svg|xml)?\n?/i, '').replace(/```$/i, '').trim();
  }
  return { success: true, content };
}

async function callCerebrasWithRetry(prompt) {
  let attempts = 0;
  const maxAttempts = 4;
  const backoffs = [5000, 10000, 15000, 20000];

  while (attempts < maxAttempts) {
    attempts++;
    try {
      const result = await callCerebrasOnce(prompt);
      if (result.rateLimited) {
        if (attempts >= maxAttempts) {
          console.error(`    ❌ Max retries reached for rate limiting.`);
          return null;
        }
        const waitTime = backoffs[attempts - 1];
        process.stdout.write(`    ⏳ Rate limited. Waiting ${waitTime/1000}s before retry ${attempts+1}/${maxAttempts}...\n`);
        await sleep(waitTime);
        continue;
      }
      return result.content;
    } catch (err) {
      console.error(`    ❌ Error on attempt ${attempts}:`, err.message);
      if (attempts >= maxAttempts) return null;
      await sleep(backoffs[attempts - 1]);
    }
  }
  return null;
}

function saveSVGs() {
  const content = `// Auto-generated SVG diagrams\nwindow.TOPIC_SVGS = ${JSON.stringify(global.TOPIC_SVGS, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_FILE, content, 'utf8');
}

async function processTopics(topics, subject) {
  for (let i = 0; i < topics.length; i++) {
    const t = topics[i];
    console.log(`[${i+1}/${topics.length}] Processing: ${t.title || t.name} (${t.id})`);
    
    if (global.TOPIC_SVGS[t.id]) {
      console.log('  ✓ Already generated, skipping');
      continue;
    }

    const prompt = buildPrompt(t.title || t.name, subject);
    const svgCode = await callCerebrasWithRetry(prompt);
    
    if (svgCode && svgCode.startsWith('<svg')) {
      global.TOPIC_SVGS[t.id] = svgCode;
      saveSVGs();
      console.log('  ✓ Done');
    } else {
      console.log('  ❌ Failed to generate valid SVG');
      if (svgCode) console.log('Returned:', svgCode.substring(0, 100));
    }
    
    await sleep(BATCH_DELAY_MS);
  }
}

(async () => {
  if (!CEREBRAS_API_KEY) {
    console.error('ERROR: Set CEREBRAS_API_KEY environment variable');
    process.exit(1);
  }
  
  const subjects = ['geography', 'biology', 'physics', 'chemistry', 'polity', 'history', 'mathematics'];
  
  for (const subject of subjects) {
    const topics = [];
    if (db[subject] && db[subject].chapters) {
      db[subject].chapters.forEach(c => c.topics.forEach(t => {
        if (!t.id.includes('pyq-trends')) topics.push(t);
      }));
      console.log(`\nProcessing ${subject.toUpperCase()}... (${topics.length} topics)`);
      await processTopics(topics, subject);
    }
  }
  
  console.log('\\n🎉 All done! SVGs written to notes_svgs_generated.js');
})();
