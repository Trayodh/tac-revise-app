/**
 * enhance_notes.js — AI Enhancement for ALL notes across ALL subjects
 * 
 * For each topic in NOTES_DATABASE:
 *   1. Read its existing notes content (from notes_data_exam_focused.js)
 *   2. If an EXPANDED_NOTES_DATA entry exists, use that as the base instead
 *   3. Send to Gemini 3.7 Flash with an enhancement prompt
 *   4. Save the enriched HTML to the subject's notes_extra_<subject>.js file
 * 
 * Enhancement adds:
 *   - Better structure (h3/h4 headings, clear sections)
 *   - Memory hacks / mnemonics for lists and sequences
 *   - Comparison tables where relevant
 *   - Exam-tip callout boxes (high-yield facts, UPSC traps)
 *   - Wiki-link [[brackets]] around 15-20 key terms
 *   - Deeper explanations of core concepts
 *   - Real-world / defence context examples
 * 
 * Usage:
 *   node scratch/enhance_notes.js                    — all subjects
 *   node scratch/enhance_notes.js history            — single subject
 *   node scratch/enhance_notes.js polity geography   — multiple subjects
 */
require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) { console.error('Missing GEMINI_API_KEY in .env'); process.exit(1); }

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Model ─────────────────────────────────────────────────────────────────────
const MODEL = 'gemini-2.5-flash';

async function callGemini(systemPrompt, userPrompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          system_instruction: { parts: { text: systemPrompt } },
          contents: [{ parts: [{ text: userPrompt }] }],
          generationConfig: {
            temperature: 0.55
          }
        })
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429 || res.status === 503) {
          console.log(`  Rate limited / Demand spike (${res.status}) — waiting 15s...`);
          await sleep(15000);
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

// ── File map: subjectId → output file ─────────────────────────────────────────
const FILE_MAP = {
  mathematics:          'notes_extra.js',
  english:              'notes_extra_english.js',
  polity:               'notes_extra_polity.js',
  history:              'notes_extra_history.js',
  geography:            'notes_extra_geography.js',
  economics:            'notes_extra_economics.js',
  physics:              'notes_extra_physics.js',
  chemistry:            'notes_extra_chemistry.js',
  biology:              'notes_extra_biology.js',
  'military-aptitude':  'notes_extra_military-aptitude.js',
  'current-affairs':    'notes_extra_current-affairs.js',
  environment:          'notes_extra_environment.js',
  'military_aptitude':  'notes_extra_military_aptitude.js',
};

// ── Load NOTES_DATABASE ────────────────────────────────────────────────────────
function loadNotesDatabase() {
  const src = fs.readFileSync('notes_data_exam_focused.js', 'utf8');
  eval(src.replace('const NOTES_DATABASE', 'global.NOTES_DATABASE'));
  return global.NOTES_DATABASE;
}

// ── Load existing EXPANDED_NOTES_DATA from a file ─────────────────────────────
function loadExpanded(file) {
  if (!fs.existsSync(file)) return {};
  global.EXPANDED_NOTES_DATA = {};
  const src = fs.readFileSync(file, 'utf8');
  try {
    eval(src
      .replace(/window\.EXPANDED_NOTES_DATA\s*=\s*window\.EXPANDED_NOTES_DATA\s*\|\|\s*\{\}/g, '')
      .replace(/window\.EXPANDED_NOTES_DATA/g, 'global.EXPANDED_NOTES_DATA')
    );
  } catch(e) { /* partial load ok */ }
  return global.EXPANDED_NOTES_DATA;
}

// ── System prompt ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are a world-class Indian Defence Exam tutor (NDA/CDS/AFCAT) who writes the best study notes in India. Your notes are renowned for being:
1. DEEPLY DETAILED — every concept is explained clearly with real examples relevant to defence aspirants
2. EXAM-FOCUSED — you always call out which exam (NDA/CDS/AFCAT) and approximately which year a fact is commonly tested
3. STRUCTURED — you use h3/h4 headings, coloured callout boxes, styled tables, and bullet lists
4. MNEMONIC-RICH — you include memory hacks, acronyms, and tricks to memorise sequences, lists, and formulas
5. PURE HTML — output raw HTML only. Never use markdown. Never wrap in code blocks. Close all tags. No DOCTYPE, no <html>/<head>/<body> tags.`;

// ── Enhancement prompt builder ─────────────────────────────────────────────────
function buildEnhancePrompt(topic, chapter, subject, existingContent) {
  const isMath = subject.toLowerCase().includes('math');
  const strippedLen = existingContent.replace(/<[^>]+>/g, '').length;

  return `You are enhancing existing study notes for: "${topic.title}"
Chapter: "${chapter.title}" | Subject: "${subject}" | Exam: NDA / CDS / AFCAT

EXISTING NOTES (base content to enhance — do NOT delete any information, only ADD and RESTRUCTURE):
${existingContent.substring(0, 12000)}

ENHANCEMENT INSTRUCTIONS:
Start your output DIRECTLY with this opening div (no preamble):
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">${topic.title}</h3>

MANDATORY ENHANCEMENTS TO ADD (do all of these):

1. STRUCTURE: Organise content under clear <h4> subheadings. Remove any remnant light-theme CSS (white backgrounds, dark text colors like #333/#444/black). Use dark-mode colors: text #e2e8f0, headings #4ade80, accent #fbbf24.

2. EXAM CALLOUT BOX — add at least one:
<div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
  <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> [specific high-yield fact or common trap question in this topic]
</div>

3. MEMORY HACK — add at least one mnemonic or trick for any list, sequence, or set of facts:
<div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
  <strong style="color: #fbbf24;">💡 Memory Hack:</strong> [clever acronym, rhyme, visual trick, or comparison]
</div>

4. COMPARISON TABLE — if this topic involves comparing things (rulers, eras, systems, elements, forces, etc.), add a styled <table>:
<table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:0.9rem;">
  <thead><tr style="background:rgba(74,222,128,0.1);">
    <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Column A</th>
    <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Column B</th>
  </tr></thead>
  <tbody>...</tbody>
</table>

5. WIKI LINKS — wrap 15-25 key terms, names, places, concepts, or formulas in [[double brackets]] for interactive lookup. Example: [[Ashoka]], [[Doctrine of Lapse]], [[Bhakti Movement]]

6. DEPTH — add 2-3 paragraphs of additional explanation not present in the original. Include:
${isMath ? '   - Additional worked example or formula derivation showing exam-style application' : '   - Historical/geographical/scientific significance for defence context'}
   - Any important sub-concepts or exceptions that aspirants commonly miss
   - Specific years, names, or numbers that are exam-critical

End with </div> as the very last line.

CRITICAL RULES:
- Do NOT add MCQ sections
- Do NOT use markdown syntax (no **, no #, no *)
- All HTML tags must be properly closed  
- Minimum output: 1500 words of content
- Raw HTML only — start with <div and end with </div>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function run() {
  const db = loadNotesDatabase();
  if (!db) { console.error('Failed to load NOTES_DATABASE'); process.exit(1); }

  // Determine which subjects to process from CLI args
  const args = process.argv.slice(2);
  const targetSubjects = args.length > 0 ? args : Object.keys(db);

  console.log(`\n=== Notes Enhancement Engine (model: ${MODEL}) ===`);
  console.log(`Subjects to process: ${targetSubjects.join(', ')}\n`);

  let totalGenerated = 0, totalSkipped = 0, totalFailed = 0;

  for (const subjectId of targetSubjects) {
    if (!db[subjectId]) {
      console.warn(`WARNING: Subject "${subjectId}" not found in NOTES_DATABASE — skipping`);
      continue;
    }

    const subject = db[subjectId];
    const outputFile = FILE_MAP[subjectId] || `notes_extra_${subjectId}.js`;

    // Initialise output file if missing
    if (!fs.existsSync(outputFile)) {
      fs.writeFileSync(outputFile, `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n`, 'utf8');
      console.log(`Created ${outputFile}`);
    }

    // Load existing expanded notes for this subject (resume support)
    const existingExpanded = loadExpanded(outputFile);

    console.log(`\n── ${subject.title} ──`);
    console.log(`   Output: ${outputFile}`);
    console.log(`   Topics: ${subject.chapters.reduce((s,c) => s+c.topics.length, 0)}`);

    for (const chapter of subject.chapters) {
      for (const topic of chapter.topics) {

        // Skip if already enhanced
        if (existingExpanded[topic.id] && existingExpanded[topic.id].length > 2000) {
          console.log(`   [SKIP]  ${topic.title} — already enhanced (${existingExpanded[topic.id].replace(/<[^>]+>/g,'').length} chars)`);
          totalSkipped++;
          continue;
        }

        // Determine base content to enhance
        let baseContent = topic.notes || '';

        // If an existing expanded entry exists (e.g. history raw HTML), use it as base
        if (existingExpanded[topic.id] && existingExpanded[topic.id].length > 500) {
          baseContent = existingExpanded[topic.id];
        }

        // Strip DOCTYPE wrappers from base content (for history topics)
        if (baseContent.includes('<!DOCTYPE') || baseContent.includes('<html')) {
          const bodyMatch = baseContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
          if (bodyMatch) baseContent = bodyMatch[1].trim();
          baseContent = baseContent
            .replace(/<!DOCTYPE[^>]*>/gi, '')
            .replace(/<html[^>]*>/gi, '').replace(/<\/html>/gi, '')
            .replace(/<head>[\s\S]*?<\/head>/gi, '')
            .replace(/<body[^>]*>/gi, '').replace(/<\/body>/gi, '')
            .replace(/<style[\s\S]*?<\/style>/gi, '')
            .trim();
        }

        const baseLen = baseContent.replace(/<[^>]+>/g,'').length;
        console.log(`\n   [GEN]   ${topic.title} (base: ${baseLen} chars)`);

        const prompt = buildEnhancePrompt(topic, chapter, subject.title, baseContent);
        const enhanced = await callGemini(SYSTEM_PROMPT, prompt);

        if (!enhanced || enhanced.length < 500) {
          console.error(`   [FAIL]  ${topic.title}`);
          totalFailed++;
          await sleep(5000);
          continue;
        }

        // Escape for template literal
        const escaped = enhanced.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
        const code = `\nwindow.EXPANDED_NOTES_DATA["${topic.id}"] = \`\n${escaped}\n\`;\n`;
        fs.appendFileSync(outputFile, code, 'utf8');

        const outLen = enhanced.replace(/<[^>]+>/g,'').length;
        console.log(`   [OK]    Saved → ${outputFile} (+${enhanced.length} chars)`);
        totalGenerated++;
        await sleep(5000);
        existingExpanded[topic.id] = enhanced;

        // Polite pause
        await sleep(1000);
      }
    }
  }

  console.log(`\n=== Enhancement Complete ===`);
  console.log(`Generated: ${totalGenerated} | Skipped: ${totalSkipped} | Failed: ${totalFailed}`);
}

run().catch(e => { console.error('Fatal error:', e); process.exit(1); });
