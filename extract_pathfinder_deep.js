require('dotenv').config();
const fs = require('fs');

// ─── API Keys ──────────────────────────────────────────────────────────────
const GEMINI_API_KEY   = process.env.GEMINI_API_KEY;
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
const GROQ_API_KEY     = process.env.GROQ_API_KEY;

// ─── Load NOTES_DATABASE ───────────────────────────────────────────────────
let NOTES_DATABASE;
try {
  NOTES_DATABASE = require('./data.js').NOTES_DATABASE;
} catch (e) {
  console.error('FATAL: Could not load data.js:', e.message);
  process.exit(1);
}

// ─── Helpers ───────────────────────────────────────────────────────────────
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function cleanOutput(text) {
  if (!text) return '';
  text = text.trim();
  if (text.startsWith('```html')) text = text.slice(7);
  else if (text.startsWith('```')) text = text.slice(3);
  if (text.endsWith('```')) text = text.slice(0, -3);
  return text.trim();
}

// ─── QUALITY-LOCKED SYSTEM PROMPT ─────────────────────────────────────────
// This system message is passed to ALL providers to guarantee consistent output
const SYSTEM_PROMPT = `You are a world-class curriculum author and subject-matter expert for Indian Defence Examinations (NDA, CDS, AFCAT).
Your task is to produce PREMIUM, EXAM-FOCUSED revision notes that are IDENTICAL IN QUALITY regardless of the AI system being used.

ABSOLUTE QUALITY STANDARDS — NON-NEGOTIABLE:
1. DEPTH: Every response MUST contain a minimum of 900 words of substantive academic content. Do NOT give short summaries.
2. STRUCTURE: Use layered headings (<h4>), bullet lists (<ul><li>), numbered sequences, and comparison tables (<table>) where appropriate.
3. FACTS: Include specific dates, names, statistics, acts, treaties, constitutional articles, scientific formulae, or geographical data relevant to the topic.
4. NO MCQs: Do NOT include any Multiple Choice Questions, quizzes, practice questions, or answer keys. Notes only.
5. HTML FORMAT: Output MUST be raw HTML starting with the provided wrapper div. Use <strong> for all keywords/terms. Use <em> for Latin/foreign terms.
6. WIKI LINKS: Wrap at least 15 key proper nouns (people, places, treaties, acts, events, concepts) in [[double brackets]], e.g. [[Battle of Plassey]], [[Article 370]], [[Photosynthesis]].
7. EXAM FOCUS: After the main notes, include a <div class="exam-tip"> section with 5–8 high-yield one-liner facts that are frequently asked in NDA/CDS/AFCAT.
8. COMPLETENESS: Do not cut the response short. Cover ALL significant sub-topics under the given chapter heading.`;

// ─── Provider Chain ────────────────────────────────────────────────────────
async function generateWithFallback(userPrompt, retryDepth = 0) {
  const providers = [
    {
      name: 'Gemini',
      available: !!GEMINI_API_KEY,
      call: async () => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: [{ parts: [{ text: userPrompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 8192 }
          })
        });
        const data = await res.json();
        if (!res.ok) throw Object.assign(new Error(data.error?.message || res.status), { status: res.status });
        return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      }
    },
    {
      name: 'Cerebras',
      available: !!CEREBRAS_API_KEY,
      call: async () => {
        const url = `https://api.cerebras.ai/v1/chat/completions`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${CEREBRAS_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'gpt-oss-120b',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              { role: 'user', content: userPrompt }
            ],
            max_tokens: 8192,
            temperature: 0.7
          })
        });
        const data = await res.json();
        if (!res.ok) throw Object.assign(new Error(data.error?.message || res.status), { status: res.status });
        return data.choices[0].message.content || '';
      }
    },
    {
      name: 'Groq',
      available: !!GROQ_API_KEY,
      call: async () => {
        const url = `https://api.groq.com/openai/v1/chat/completions`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              { role: 'user', content: userPrompt }
            ],
            max_tokens: 8192,
            temperature: 0.7
          })
        });
        const data = await res.json();
        if (!res.ok) throw Object.assign(new Error(data.error?.message || res.status), { status: res.status });
        return data.choices[0].message.content || '';
      }
    }
  ];

  const available = providers.filter(p => p.available);

  for (let i = 0; i < available.length; i++) {
    const provider = available[i];
    try {
      process.stdout.write(`  → Trying ${provider.name}... `);
      const text = await provider.call();
      console.log(`✓ (${provider.name})`);
      return cleanOutput(text);
    } catch (err) {
      const is429 = err.status === 429 || String(err.message).includes('429');
      console.log(`✗ [${provider.name} ${is429 ? 'rate-limited' : 'failed'}: ${err.message.slice(0,80)}]`);
      if (is429 && i < available.length - 1) {
        // Try next provider immediately on rate limit
        continue;
      } else if (is429 && i === available.length - 1) {
        // All providers rate limited — wait then retry entire chain
        if (retryDepth < 3) {
          const waitMs = 20000 + retryDepth * 15000;
          console.log(`  All providers rate-limited. Waiting ${waitMs/1000}s then retrying chain...`);
          await sleep(waitMs);
          return generateWithFallback(userPrompt, retryDepth + 1);
        }
      }
    }
  }

  console.error('  ✗✗ All providers exhausted. Skipping topic.');
  return null;
}

// ─── Per-topic prompt builder ──────────────────────────────────────────────
function buildPrompt(subjectKey, chapterTitle, topicTitle) {
  const subjectLabel = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1).replace(/-/g, ' ');
  return `Generate EXHAUSTIVE revision notes for the following:

SUBJECT: ${subjectLabel} (NDA / CDS / AFCAT)
CHAPTER: ${chapterTitle}
TOPIC: ${topicTitle}

Use the exact HTML wrapper below and fill it with deeply structured, UPSC-level content meeting ALL system instructions:

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    ${topicTitle}
  </h3>

  [INSERT your minimum 900-word structured HTML notes here using <h4>, <ul>, <li>, <p>, <strong>, <table> as needed]

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      [5–8 one-liner exam facts frequently asked in NDA/CDS/AFCAT]
    </ul>
  </div>
</div>`;
}

// ─── Process one subject ───────────────────────────────────────────────────
async function processSubject(subjectKey) {
  const subject = NOTES_DATABASE[subjectKey];
  if (!subject) {
    console.log(`⚠ Subject "${subjectKey}" not found in data.js — skipping.`);
    return;
  }

  const outputFile = `notes_extra_${subjectKey}.js`;
  const tasks = [];
  for (const chapter of subject.chapters) {
    for (const topic of chapter.topics) {
      tasks.push({ chapter, topic });
    }
  }

  // Load existing output to allow resumption
  const existingIds = new Set();
  if (fs.existsSync(outputFile)) {
    const existing = fs.readFileSync(outputFile, 'utf8');
    const matches = [...existing.matchAll(/EXPANDED_NOTES_DATA\["([^"]+)"\]/g)];
    matches.forEach(m => existingIds.add(m[1]));
    console.log(`  ↺ Resuming ${subjectKey}: ${existingIds.size} topics already done.`);
  } else {
    fs.writeFileSync(outputFile, `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`);
  }

  let done = 0, skipped = 0, failed = 0;

  for (let i = 0; i < tasks.length; i++) {
    const { chapter, topic } = tasks[i];

    if (existingIds.has(topic.id)) {
      process.stdout.write(`  [${i+1}/${tasks.length}] ${topic.title} — already done, skipping.\n`);
      done++;
      continue;
    }

    console.log(`\n  [${i+1}/${tasks.length}] ${topic.title} (${chapter.title})`);
    const prompt = buildPrompt(subjectKey, chapter.title, topic.title);
    const html = await generateWithFallback(prompt);

    if (html && html.length > 200) {
      // Escape backticks inside the HTML so it doesn't break the JS template literal
      const safeHtml = html.replace(/`/g, '\\`').replace(/\${/g, '\\${');
      fs.appendFileSync(outputFile, `EXPANDED_NOTES_DATA["${topic.id}"] = \`\n${safeHtml}\n\`;\n\n`);
      done++;
    } else {
      console.log(`  ⚠ Empty/short response — skipping topic.`);
      failed++;
    }

    await sleep(1500); // Gentle pacing between requests
  }

  console.log(`\n✅ ${subjectKey}: ${done} done, ${failed} failed out of ${tasks.length} topics.\n${'─'.repeat(60)}`);
}

// ─── Main queue runner ─────────────────────────────────────────────────────
async function runQueue() {
  // All subjects except history (already running separately)
  const allSubjects = Object.keys(NOTES_DATABASE);
  const requestedSubjects = process.argv.slice(2);

  const queue = requestedSubjects.length > 0 ? requestedSubjects : allSubjects;

  console.log(`\n🚀 Starting extraction queue: [${queue.join(', ')}]\n${'═'.repeat(60)}`);

  for (const subjectKey of queue) {
    console.log(`\n📚 Subject: ${subjectKey.toUpperCase()}\n${'─'.repeat(60)}`);
    await processSubject(subjectKey);
  }

  console.log('\n🎉 All subjects complete!');
}

runQueue().catch(console.error);
