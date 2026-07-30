// generate_json_diagrams.js
const fs = require('fs');

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
const MODEL = 'llama3.3-70b';
const BATCH_DELAY_MS = 3000;
const OUTPUT_FILE = 'notes_diagrams_data.js';

// Load existing notes
let notesDataTxt = fs.readFileSync('notes_data.js', 'utf8');
notesDataTxt = notesDataTxt
  .replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =')
  .replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');
eval(notesDataTxt);
const db = global.NOTES_DATABASE;

global.window = global;
global.TOPIC_DIAGRAMS = {};
if (fs.existsSync(OUTPUT_FILE)) {
  let existingSvgTxt = fs.readFileSync(OUTPUT_FILE, 'utf8');
  eval(existingSvgTxt);
}

function buildPrompt(topicTitle, subject) {
  return `You are an expert educational designer mapping out visual diagrams for students.
Create a structured JSON diagram for the ${subject} topic: "${topicTitle}".
Choose ONE diagram type that best fits this topic:
1. "timeline" - For chronological events (like history)
2. "process" - For step-by-step processes or cycles (like biology/geography phenomena)
3. "mindmap" - For interconnected concepts or classifications
4. "comparison" - For comparing two or more entities

RETURN ONLY RAW VALID JSON WITHOUT MARKDOWN.

SCHEMA:
{
  "type": "timeline|process|mindmap|comparison",
  "title": "Diagram Title",
  "items": [
    {
      "label": "Short Title/Year",
      "content": "A detailed 1-2 sentence explanation of this node.",
      "color": "Optional hex color like #e11d48 for emphasis"
    }
  ]
}

Important Rules:
- Do not wrap in \`\`\`json. Return only the curly braces.
- Include 4-8 rich items.
- Ensure all text is properly escaped.`;
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
      temperature: 0.1,
      response_format: { type: "json_object" }
    })
  });

  const data = await response.json();
  if (data.error) {
    if (data.error.message && data.error.message.toLowerCase().includes('rate limit')) {
      return { rateLimited: true, error: data.error.message };
    }
    throw new Error(`API Error: ${JSON.stringify(data.error)}`);
  }

  let content = data.choices[0].message.content.trim();
  if (content.startsWith('\`\`\`')) {
    content = content.replace(/^\`\`\`(?:json)?\n?/i, '').replace(/\`\`\`$/i, '').trim();
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
        process.stdout.write(`    ⏳ Rate limited. Waiting ${waitTime/1000}s...\n`);
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

function saveJSON() {
  const content = `// Auto-generated diagram JSON data\nwindow.TOPIC_DIAGRAMS = ${JSON.stringify(global.TOPIC_DIAGRAMS, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_FILE, content, 'utf8');
}

async function processTopics(topics, subject) {
  for (let i = 0; i < topics.length; i++) {
    const t = topics[i];
    console.log(`[${i+1}/${topics.length}] Processing: ${t.title || t.name} (${t.id})`);
    
    if (global.TOPIC_DIAGRAMS[t.id]) {
      console.log('  ✓ Already generated, skipping');
      continue;
    }

    const prompt = buildPrompt(t.title || t.name, subject);
    const jsonStr = await callCerebrasWithRetry(prompt);
    
    if (jsonStr) {
      try {
        const parsed = JSON.parse(jsonStr);
        global.TOPIC_DIAGRAMS[t.id] = parsed;
        saveJSON();
        console.log('  ✓ Done');
      } catch (e) {
        console.log('  ❌ Failed to parse JSON');
        console.log('Returned:', jsonStr.substring(0, 100));
      }
    } else {
      console.log('  ❌ Failed to generate');
    }
    
    await sleep(BATCH_DELAY_MS);
  }
}

(async () => {
  if (!CEREBRAS_API_KEY) {
    console.error('ERROR: Set CEREBRAS_API_KEY environment variable');
    process.exit(1);
  }
  
  const subjects = ['history', 'geography', 'polity', 'physics', 'chemistry', 'biology', 'mathematics'];
  
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
  
  console.log('\n🎉 All done!');
})();
