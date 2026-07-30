// generate_rich_history_geo.js
// Generates rich HTML notes for History and Geography topics using the Cerebras API
// Uses existing Markdown content as source material, transforms to revision-card format
const fs = require('fs');
const https = require('https');

// ─── Config ───────────────────────────────────────────────────────────────────
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
const MODEL = 'gemma-4-31b';
const BATCH_DELAY_MS = 4000;
const OUTPUT_FILE_PHYSICS = 'notes_extra_physics_rich.js';
const OUTPUT_FILE_CHEMISTRY = 'notes_extra_chemistry_rich.js';
const OUTPUT_FILE_BIOLOGY = 'notes_extra_biology_rich.js';

// ─── Load existing notes ───────────────────────────────────────────────────────
let notesDataTxt = fs.readFileSync('notes_data.js', 'utf8');
notesDataTxt = notesDataTxt
  .replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =')
  .replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');
eval(notesDataTxt);
const db = global.NOTES_DATABASE;

// Load notes_extra_history.js markdown content
global.window = global;
global.EXPANDED_NOTES_DATA = {};
let histExtraTxt = fs.readFileSync('notes_extra_history.js', 'utf8');
eval(histExtraTxt);
const HISTORY_EXPANDED = { ...global.EXPANDED_NOTES_DATA };

// ─── HTML Template Builder ───────────────────────────────────────────────────
const TEMPLATE = (title, explanation, tableRows, mnemonics, highYieldFacts) => `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    ${title}
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <section>
    <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
    ${explanation}
  </section>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Key Term / Event</th>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Details / Date</th>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Exam Significance</th>
    </tr>
    ${tableRows}
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics &amp; Memory Aids</h4>
  <ul style="margin-left:20px;">
    ${mnemonics}
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Facts</h4>
  <ul style="margin-left:20px;">
    ${highYieldFacts}
  </ul>
</div>`;

// ─── Cerebras API helper (with retry) ───────────────────────────────────────
function callCerebrasOnce(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: 'You are an expert educator creating study notes for Indian defence exam students (NDA/CDS/AFCAT). Always respond with raw JSON only — no markdown, no code fences.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.3,
      max_completion_tokens: 4096,
      response_format: { type: 'json_object' }
    });
    const options = {
      hostname: 'api.cerebras.ai',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CEREBRAS_API_KEY}`
      }
    };
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error || parsed.type === 'too_many_requests_error') {
            reject(new Error('RATE_LIMIT: ' + (parsed.message || parsed.error?.message || 'rate limited')));
            return;
          }
          if (parsed.message && parsed.code) {
            // Cerebras error format: {message, type, code}
            reject(new Error('RATE_LIMIT: ' + parsed.message));
            return;
          }
          const text = parsed.choices?.[0]?.message?.content || '';
          const finishReason = parsed.choices?.[0]?.finish_reason || '';
          if (!text) { reject(new Error('RATE_LIMIT: Empty content. ' + data.substring(0, 150))); return; }
          resolve({ text, truncated: finishReason === 'length' });
        } catch (e) { reject(new Error('Parse error: ' + e.message + ' | Raw: ' + data.substring(0, 200))); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function callCerebras(prompt, retries = 4) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await callCerebrasOnce(prompt);
    } catch (e) {
      const isRateLimit = e.message.startsWith('RATE_LIMIT');
      if (isRateLimit && attempt < retries - 1) {
        const wait = (attempt + 1) * 5000; // 5s, 10s, 15s, 20s
        console.log(`    ⏳ Rate limited. Waiting ${wait/1000}s before retry ${attempt + 2}/${retries}...`);
        await new Promise(r => setTimeout(r, wait));
      } else {
        throw e;
      }
    }
  }
}

// ─── Prompt builder ───────────────────────────────────────────────────────────
function buildPrompt(topicTitle, subject) {
  return `You are writing study flashcard content for Indian defence exams (NDA/CDS/AFCAT).

Topic: "${topicTitle}" (${subject})

Return ONLY raw JSON with exactly these 4 keys (no markdown, no code fences):
{"explanation":"<p>Paragraph 1: In-depth overview and context (approx 100 words). Bold key terms. Use [[Term]] for important people/places/events.</p><p>Paragraph 2: Key developments, battles, or mechanisms (approx 100 words).</p><p>Paragraph 3: Significance and impact (approx 80 words).</p>","tableRows":"<tr><td style='border:1px solid var(--border);padding:8px;'>KEY TERM</td><td style='border:1px solid var(--border);padding:8px;'>DETAIL</td><td style='border:1px solid var(--border);padding:8px;'>EXAM TIP</td></tr>","mnemonics":"<li><strong>NAME</strong>: memory trick.</li>","highYieldFacts":"<li><span style='color:var(--warning)'>1</span>. fact here.</li>"}

Rules: tableRows=6-8 rows, mnemonics=3-5 items, highYieldFacts=8-12 items. Make the content highly detailed and comprehensive for advanced exam preparation.`;
}

// ─── Main process ─────────────────────────────────────────────────────────────
async function processTopics(topics, subject, outputFile) {
  let output = `// ${outputFile} - Auto-generated rich HTML notes for ${subject}\nwindow.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`;
  
  for (let i = 0; i < topics.length; i++) {
    const t = topics[i];
    console.log(`[${i+1}/${topics.length}] Processing: ${t.title} (${t.id})`);
    
    // Get existing content - first from HISTORY_EXPANDED, then from topic.notes
    const existingContent = (subject === 'history' ? HISTORY_EXPANDED[t.id] : null) || t.notes || t.title;
    
    try {
      const { text, truncated } = await callCerebras(buildPrompt(t.title, subject));
      if (truncated) console.log(`  ⚠ Response truncated for ${t.id}`);
      
      // Robust JSON extraction
      let jsonStr = text.trim();
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim();
      const braceStart = jsonStr.indexOf('{');
      const braceEnd = jsonStr.lastIndexOf('}');
      if (braceStart !== -1 && braceEnd > braceStart) {
        jsonStr = jsonStr.substring(braceStart, braceEnd + 1);
      }
      
      const parsed = JSON.parse(jsonStr);
      const html = TEMPLATE(t.title, parsed.explanation, parsed.tableRows, parsed.mnemonics, parsed.highYieldFacts);
      
      output += `window.EXPANDED_NOTES_DATA["${t.id}"] = \`\n${html.replace(/`/g, '\\`')}\n\`;\n\n`;
      console.log(`  ✓ Done`);
    } catch (e) {
      console.error(`  ✗ Error for ${t.id}:`, e.message);
      if (e.message.startsWith('Parse error')) {
        console.error(`    Raw response snippet: ${e.message.substring(0, 300)}`);
      }
      const fallback = existingContent || t.title;
      const fallbackHtml = `\n<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px;">\n  <h3 style="color: var(--accent); margin-bottom: 16px; font-weight: 600;">${t.title}</h3>\n  ${fallback}\n</div>`;
      output += `window.EXPANDED_NOTES_DATA["${t.id}"] = \`\n${fallbackHtml.replace(/`/g, '\\`')}\n\`;\n\n`;
    }
    
    if (i < topics.length - 1) {
      await new Promise(r => setTimeout(r, BATCH_DELAY_MS));
    }
  }
  
  fs.writeFileSync(outputFile, output, 'utf8');
  console.log(`\n✅ Written ${outputFile}`);
}

// ─── Run ──────────────────────────────────────────────────────────────────────
(async () => {
  if (!CEREBRAS_API_KEY) {
    console.error('ERROR: Set CEREBRAS_API_KEY environment variable');
    process.exit(1);
  }
  
  // Get all topics (excluding PYQ trend topics)
  const historyTopics = [];
  db.history.chapters.forEach(c => c.topics.forEach(t => {
    if (!t.id.includes('pyq-trends')) historyTopics.push(t);
  }));
  
  const geoTopics = [];
  db.geography.chapters.forEach(c => c.topics.forEach(t => {
    if (!t.id.includes('pyq-trends')) geoTopics.push(t);
  }));
  
  console.log(`Processing ${historyTopics.length} History + ${geoTopics.length} Geography topics...`);
  
  // await processTopics(historyTopics, 'history', OUTPUT_FILE_HISTORY);
  
  /*
  console.log(`Processing Geography...`);
  await processTopics(geoTopics, 'geography', OUTPUT_FILE_GEOGRAPHY);

  const polityTopics = [];
  db.polity.chapters.forEach(c => c.topics.forEach(t => {
    if (!t.id.includes('pyq-trends')) polityTopics.push(t);
  }));
  console.log(`Processing Polity... (${polityTopics.length} topics)`);
  await processTopics(polityTopics, 'polity', OUTPUT_FILE_POLITY);
  */

  const physicsTopics = [];
  db.physics.chapters.forEach(c => c.topics.forEach(t => {
    if (!t.id.includes('pyq-trends')) physicsTopics.push(t);
  }));
  console.log(`Processing Physics... (${physicsTopics.length} topics)`);
  await processTopics(physicsTopics, 'physics', OUTPUT_FILE_PHYSICS);

  const chemistryTopics = [];
  db.chemistry.chapters.forEach(c => c.topics.forEach(t => {
    if (!t.id.includes('pyq-trends')) chemistryTopics.push(t);
  }));
  console.log(`Processing Chemistry... (${chemistryTopics.length} topics)`);
  await processTopics(chemistryTopics, 'chemistry', OUTPUT_FILE_CHEMISTRY);

  const biologyTopics = [];
  db.biology.chapters.forEach(c => c.topics.forEach(t => {
    if (!t.id.includes('pyq-trends')) biologyTopics.push(t);
  }));
  console.log(`Processing Biology... (${biologyTopics.length} topics)`);
  await processTopics(biologyTopics, 'biology', OUTPUT_FILE_BIOLOGY);
  
  console.log('\n🎉 All done! Now run: node scripts/consolidate_notes.js');
})();
