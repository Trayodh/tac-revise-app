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

// ─── ULTRA-DETAILED SYSTEM PROMPT ─────────────────────────────────────────
const SYSTEM_PROMPT = `You are a world-class academic author and subject-matter expert writing ULTRA-DETAILED revision notes for Indian Defence Examinations (NDA, CDS, AFCAT).

ABSOLUTE REQUIREMENTS — EVERY RESPONSE MUST MEET THESE:

1. WORD COUNT: Minimum 1200 words of dense, substantive academic content. No padding, every word must add value.
2. DEPTH: Do NOT give a surface-level overview. Go DEEP — cover theory, derivations/proofs where applicable, exceptions, edge cases, historical context, and real-world applications.
3. STRUCTURE: Use rich layered HTML:
   - Multiple <h4> sub-section headers
   - <ul>/<ol> with detailed <li> items (not one-liners)
   - <table> for comparisons, classifications, or data
   - <div class="important-box"> for critical distinctions
   - <strong> for ALL keywords, terms, names, numbers, formulas
   - <em> for Latin/foreign terms, technical jargon
4. FOR MATHEMATICS: Include every formula with LaTeX notation (wrap in $...$), step-by-step derivations, worked examples with full working shown, special cases, common mistakes to avoid, and tricks/shortcuts.
5. FOR POLITY/LAW: Include every relevant Article number, constitutional provision, landmark Supreme Court case, Amendment number, committee/commission names, and comparison tables between different constitutional bodies.
6. NO MCQs: Absolutely NO multiple choice questions, quizzes, or answer options in the notes section.
7. WIKI LINKS: Wrap minimum 20 key terms in [[double brackets]], e.g. [[Article 356]], [[Trigonometric Identities]], [[Directive Principles]].
8. EXAM-TIP SECTION: End with a styled <div class="exam-tip"> containing 8-10 high-yield one-liner facts that are most frequently asked in NDA/CDS/AFCAT.
9. SOURCE: Use your own expert knowledge. Do NOT reference any textbook by name in the content.`;

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
            generationConfig: { temperature: 0.65, maxOutputTokens: 8192 }
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
            max_tokens: 8192, temperature: 0.65
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
            max_tokens: 8192, temperature: 0.65
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
      process.stdout.write(`  → ${provider.name}... `);
      const text = await provider.call();
      console.log(`✓`);
      return cleanOutput(text);
    } catch (err) {
      const is429 = err.status === 429 || String(err.message).includes('429');
      console.log(`✗ [${is429 ? 'rate-limited' : err.message.slice(0, 60)}]`);
      if (!is429) continue; // Non-rate-limit error: try next provider
      if (i < available.length - 1) continue; // Rate limited but more providers: try next
      // All rate limited
      if (retryDepth < 4) {
        const waitMs = 25000 + retryDepth * 20000;
        console.log(`  ⏳ All rate-limited. Waiting ${waitMs/1000}s...`);
        await sleep(waitMs);
        return generateWithFallback(userPrompt, retryDepth + 1);
      }
    }
  }
  console.error('  ✗✗ All providers exhausted.');
  return null;
}

// Subject-specific prompt builder
function buildPrompt(subjectKey, chapterTitle, topicTitle) {
  const subjectLabel = subjectKey.charAt(0).toUpperCase() + subjectKey.slice(1).replace(/-/g, ' ');

  let subjectSpecific = '';
  if (subjectKey === 'mathematics') {
    subjectSpecific = `
MATHEMATICS-SPECIFIC REQUIREMENTS:
- Write out ALL formulas using LaTeX notation wrapped in $...$ for inline or $$...$$ for block.
- For every formula: explain what each variable means, state any conditions/constraints.
- Derive key results from first principles where possible.
- Include a "Common Mistakes" sub-section listing at least 4 frequent errors students make.
- Include a "Shortcuts & Tricks" sub-section with time-saving methods for competitive exams.
- Provide at least 2 fully worked examples showing every calculation step.`;
  } else if (subjectKey === 'polity') {
    subjectSpecific = `
POLITY-SPECIFIC REQUIREMENTS:
- Cite EVERY relevant Article number (e.g., [[Article 14]], [[Article 356]]).
- Include all relevant Constitutional Amendments with their year and effect.
- Name landmark Supreme Court cases with their year and significance.
- Include comparison tables for similar bodies/provisions (e.g., Lok Sabha vs Rajya Sabha).
- Cover historical context: why was this provision included, what debates happened in the Constituent Assembly.
- Include the names of important Committees/Commissions relevant to the topic.`;
  }

  return `Write ULTRA-DETAILED revision notes for:

SUBJECT: ${subjectLabel} (NDA / CDS / AFCAT)
CHAPTER: ${chapterTitle}
TOPIC: ${topicTitle}
${subjectSpecific}

Use this exact HTML wrapper and fill it with your comprehensive 1200+ word content:

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    ${topicTitle}
  </h3>

  [INSERT 1200+ words of deeply structured HTML content here]

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style="margin-top: 8px;">
      [8-10 one-liner facts most frequently tested]
    </ul>
  </div>
</div>`;
}

async function regenerateSubject(subjectKey) {
  const subject = NOTES_DATABASE[subjectKey];
  if (!subject) { console.error(`Subject "${subjectKey}" not found`); return; }

  const outputFile = `notes_extra_${subjectKey}.js`;
  // Start fresh — overwrite old file
  fs.writeFileSync(outputFile, `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`);

  const tasks = [];
  for (const chapter of subject.chapters)
    for (const topic of chapter.topics)
      tasks.push({ chapter, topic });

  let done = 0, failed = 0;
  console.log(`\n📚 Regenerating ${subjectKey.toUpperCase()} — ${tasks.length} topics (ultra-detailed mode)\n${'─'.repeat(60)}`);

  for (let i = 0; i < tasks.length; i++) {
    const { chapter, topic } = tasks[i];
    console.log(`\n  [${i+1}/${tasks.length}] ${topic.title}`);
    const prompt = buildPrompt(subjectKey, chapter.title, topic.title);
    const html = await generateWithFallback(prompt);

    if (html && html.length > 300) {
      const safeHtml = html.replace(/`/g, '\\`').replace(/\${/g, '\\${');
      fs.appendFileSync(outputFile, `EXPANDED_NOTES_DATA["${topic.id}"] = \`\n${safeHtml}\n\`;\n\n`);
      done++;
    } else {
      console.log(`  ⚠ Empty/short response — skipping.`);
      failed++;
    }
    await sleep(1200);
  }

  console.log(`\n✅ ${subjectKey}: ${done} done, ${failed} failed.\n${'═'.repeat(60)}`);
}

async function main() {
  const subjects = process.argv.slice(2);
  if (!subjects.length) { console.error('Usage: node regenerate_detailed.js mathematics polity'); process.exit(1); }
  for (const s of subjects) await regenerateSubject(s);
  console.log('\n🎉 Regeneration complete!');
}

main().catch(console.error);
