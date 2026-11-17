require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY   = process.env.GEMINI_API_KEY;
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
const GROQ_API_KEY     = process.env.GROQ_API_KEY;

let NOTES_DATABASE;
try {
  NOTES_DATABASE = require('./data.js').NOTES_DATABASE;
} catch (e) {
  console.error('FATAL: Could not load data.js:', e.message);
  process.exit(1);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function cleanOutput(text) {
  if (!text) return '';
  text = text.trim();
  if (text.startsWith('```html')) text = text.slice(7);
  else if (text.startsWith('```')) text = text.slice(3);
  if (text.endsWith('```')) text = text.slice(0, -3);
  return text.trim();
}

// Diagrams per subject type — determines what kind of diagram to make
const DIAGRAM_HINTS = {
  mathematics:        'flowchart/concept-map showing formulas, relationships, and step-by-step problem-solving flow',
  polity:             'hierarchical org-chart showing constitutional bodies, powers, Articles, and relationships',
  history:            'timeline diagram showing chronological events, rulers, periods, and key developments',
  geography:          'concept map showing geographical features, distributions, connections, and spatial relationships',
  economics:          'flowchart showing economic flows, cause-effect chains, policy mechanisms, and data',
  physics:            'labeled diagram showing physical concepts, laws, units, and experimental setups',
  chemistry:          'structural/reaction diagram showing chemical bonds, reactions, elements, and properties',
  biology:            'labeled biological diagram showing anatomy, processes, cycles, and classification',
  'military-aptitude':'structured diagram showing hierarchy, matrix-type reasoning patterns, or command structures',
  english:            'concept map showing grammar rules, examples, exceptions, and usage patterns',
  'current-affairs':  'infographic-style diagram showing events, dates, organizations, and interconnections',
  environment:        'ecosystem/food-web diagram showing relationships, laws, species, and environmental cycles'
};

const SYSTEM_PROMPT = `You are an expert educational diagram designer for Indian Defence Examinations (NDA, CDS, AFCAT).

Your job is to create VISUALLY RICH, EXAM-FOCUSED diagrams embedded as styled HTML.

RULES:
1. Output ONLY valid HTML — no markdown, no explanations, just the HTML block.
2. Use ONLY inline CSS (no external stylesheets, no class references to external CSS).
3. Create genuinely informative, data-rich diagrams — not empty wireframes.
4. Use the dark theme palette: background #0f1117, accent #4ade80 (green), secondary #60a5fa (blue), warning #f59e0b (amber), text #e2e8f0, border rgba(255,255,255,0.12).
5. Include actual exam-relevant content in the diagram — real names, real numbers, real facts.
6. Make it VISUALLY BEAUTIFUL — use gradients, colored boxes, connecting lines/arrows (using CSS borders or SVG).
7. Wrap everything in a single outer <div> with style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;"
8. Diagram types to use based on topic:
   - HIERARCHY: nested divs with connecting lines, org-chart style
   - TIMELINE: horizontal or vertical progression with dates/events
   - FLOWCHART: boxes + arrows showing process/logic flow  
   - COMPARISON TABLE: styled <table> with colored headers
   - CONCEPT MAP: central node + radiating branches
   - LABELED DIAGRAM: SVG-based with text labels
   - CYCLE: circular arrangement showing cyclical processes
9. Minimum diagram size: width 100%, height auto (enough to show all content).
10. Include a title bar at the top with the chapter/topic name.`;

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
            generationConfig: { temperature: 0.6, maxOutputTokens: 8192 }
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
        const res = await fetch('https://api.cerebras.ai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${CEREBRAS_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'gpt-oss-120b',
            messages: [{ role: 'system', content: SYSTEM_PROMPT }, { role: 'user', content: userPrompt }],
            max_tokens: 8192, temperature: 0.6
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
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'system', content: SYSTEM_PROMPT }, { role: 'user', content: userPrompt }],
            max_tokens: 8192, temperature: 0.6
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
    const p = available[i];
    try {
      process.stdout.write(`  → ${p.name}... `);
      const text = await p.call();
      console.log(`✓`);
      return cleanOutput(text);
    } catch (err) {
      const is429 = err.status === 429 || String(err.message).includes('429');
      console.log(`✗ [${is429 ? '429' : err.message.slice(0, 50)}]`);
      if (!is429 && i < available.length - 1) continue;
      if (is429 && i < available.length - 1) continue;
      if (retryDepth < 5) {
        const waitMs = 20000 + retryDepth * 15000;
        console.log(`  ⏳ All rate-limited. Waiting ${waitMs / 1000}s...`);
        await sleep(waitMs);
        return generateWithFallback(userPrompt, retryDepth + 1);
      }
    }
  }
  return null;
}

function buildDiagramPrompt(subjectKey, chapterTitle, topicList) {
  const hint = DIAGRAM_HINTS[subjectKey] || 'concept map showing key ideas and relationships';
  const topicSummary = topicList.map(t => `• ${t}`).join('\n');

  return `Create a ${hint} for this chapter from Indian Defence Exam preparation:

SUBJECT: ${subjectKey.replace(/-/g, ' ').toUpperCase()}
CHAPTER: ${chapterTitle}
TOPICS COVERED IN THIS CHAPTER:
${topicSummary}

Requirements:
1. The diagram must visually represent the ENTIRE chapter's structure and key content.
2. Include REAL DATA: actual formulas / Article numbers / dates / names / values relevant to this chapter.
3. Style with dark theme: background #0f1117, accents in green (#4ade80) and blue (#60a5fa).
4. Use appropriate diagram type: ${hint}
5. Make it LARGE and DETAILED — this is the main visual reference for the entire chapter.
6. Include a styled title bar showing "${chapterTitle}" at the top.

Output only the HTML — no markdown fences, no explanation.`;
}

async function generateAllDiagrams() {
  const outputFile = 'diagrams_db.js';
  const alreadyDone = new Set();
  
  // Resume support
  if (fs.existsSync(outputFile)) {
    const content = fs.readFileSync(outputFile, 'utf8');
    const matches = content.match(/DIAGRAMS_DB\["[^"]+"\]/g) || [];
    matches.forEach(m => {
      const id = m.match(/DIAGRAMS_DB\(["[^"]+)"\]/)?.[1];
      if (id) alreadyDone.add(id);
    });
    console.log(`↺ Resuming: ${alreadyDone.size} diagrams already done.`);
  } else {
    fs.writeFileSync(outputFile, `window.DIAGRAMS_DB = window.DIAGRAMS_DB || {};\n\n`);
  }

  let totalDone = alreadyDone.size, totalFailed = 0;

  for (const [subjectKey, subject] of Object.entries(NOTES_DATABASE)) {
    console.log(`\n📚 Subject: ${subjectKey.toUpperCase()}\n${'─'.repeat(50)}`);

    for (const chapter of subject.chapters) {
      const chapterId = `${subjectKey}__${chapter.id || chapter.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`;
      
      if (alreadyDone.has(chapterId)) {
        console.log(`  ↺ [SKIP] ${chapter.title}`);
        continue;
      }

      const topicList = chapter.topics.map(t => t.title);
      console.log(`\n  📊 ${chapter.title} (${topicList.length} topics)`);
      
      const prompt = buildDiagramPrompt(subjectKey, chapter.title, topicList);
      const html = await generateWithFallback(prompt);

      if (html && html.length > 200) {
        const safeHtml = html.replace(/`/g, '\\`').replace(/\${/g, '\\${');
        fs.appendFileSync(outputFile, `DIAGRAMS_DB["${chapterId}"] = \`\n${safeHtml}\n\`;\n\n`);
        totalDone++;
        alreadyDone.add(chapterId);
      } else {
        console.log(`  ⚠ Empty response — skipping.`);
        totalFailed++;
      }
      await sleep(1500);
    }
  }

  console.log(`\n🎉 DONE! ${totalDone} diagrams generated, ${totalFailed} failed.`);
}

generateAllDiagrams().catch(console.error);
