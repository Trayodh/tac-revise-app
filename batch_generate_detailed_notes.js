require('dotenv').config();
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://usjzsdvsasjtsyzrvivx.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanpzZHZzYXNqdHN5enJ2aXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNTUxMzksImV4cCI6MjA5NDgzMTEzOX0.8wLng1SDAhFPGvk5PQRu8XCqEWClpNPqHgEGpAx1vjk';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
  process.exit(1);
}

// Mock browser global scope for data scripts
global.window = {};

// Load data files
const loadScript = (filename) => {
  try {
    if (fs.existsSync(filename)) {
      const code = fs.readFileSync(filename, 'utf8');
      // For data.js, it might define `const NOTES_DATABASE`. We evaluate it in global scope.
      eval(code.replace(/(const|let|var)\s+(NOTES_DATABASE|OFFICIAL_SYLLABUS_DATA|PYQ_TRENDS_DATA|EXPANDED_NOTES_DATA)/g, 'window.$2'));
    }
  } catch (e) {
    console.log(`Note: could not load ${filename}: ${e.message}`);
  }
};

loadScript('data.js');
loadScript('syllabus_data.js');
loadScript('pyq_trends.js');
for (let i = 1; i <= 6; i++) {
  loadScript(`notes_extra_${i}.js`);
}

const NOTES_DATABASE = window.NOTES_DATABASE;
if (!NOTES_DATABASE) {
  console.error("NOTES_DATABASE not loaded correctly.");
  process.exit(1);
}

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
      
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    } catch (err) {
      console.error(`Fetch error:`, err.message);
      await sleep(5000);
      retries--;
    }
  }
  throw new Error("Failed to generate content after retries.");
}

async function runBatch() {
  const tasks = [];
  
  for (const subjectId in NOTES_DATABASE) {
    if (subjectId === 'english') continue;
    
    const subject = NOTES_DATABASE[subjectId];
    for (const chapter of subject.chapters) {
      for (const topic of chapter.topics) {
        tasks.push({ subjectId, subject, chapter, topic });
      }
    }
  }
  
  console.log(`Starting batch generation for ${tasks.length} topics...`);
  
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < tasks.length; i++) {
    const { subjectId, subject, chapter, topic } = tasks[i];
    const topicId = topic.id;
    console.log(`\n[${i+1}/${tasks.length}] Processing: ${subject.title} -> ${chapter.title} -> ${topic.title} (${topicId})`);
    
    let syllabusText = "";
    if (window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[topicId]) {
      syllabusText = `\n\nEnsure you exhaustively cover the following official UPSC/AFCAT syllabus requirements: ${window.OFFICIAL_SYLLABUS_DATA[topicId]}`;
    }

    let pyqText = "";
    if (window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[topicId]) {
      pyqText = `\n\nActual Questions, numerical patterns, and conceptual trends from the last 7 years (2020-2026) of UPSC CDS, NDA, and AFCAT exams for this topic: ${window.PYQ_TRENDS_DATA[topicId]}`;
    }

    let topicNotesStr = topic.notes || 'No short notes provided, please generate from scratch.';
    if (typeof topicNotesStr === 'string' && topicNotesStr.trim().startsWith('Detailed notes expanded in')) {
      if (typeof window.EXPANDED_NOTES_DATA !== 'undefined' && window.EXPANDED_NOTES_DATA[topicId]) {
        topicNotesStr = window.EXPANDED_NOTES_DATA[topicId];
      }
    }
    if (typeof topicNotesStr === 'string') {
      topicNotesStr = topicNotesStr.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 3000);
    }

    let prompt = `You are Dronacharya, the legendary military guru and Academic Intelligence Engine of an AI-powered NDA, CDS, AFCAT, CAPF, and UPSC Examination Preparation Platform.
Your task is to provide an EXHAUSTIVE, deep-dive, UPSC-level explanation of the topic "${topic.title}" from the chapter "${chapter.title}" in ${subject.title}. 
IMPORTANT: Your entire explanation MUST be exclusively in English. Do not write in Hindi or any other language.

Detailed Notes must not be short summaries. Ensure proper extraction from the provided notes, syllabus, and PYQs to add actual actionable data. Extract all specific factual data, formulas, dates, numerical values, and exceptions. Provide highly actionable study material packed with tables of important facts rather than just narrative text. (minimum 1000 words, target 1500-2500 words). You MUST include diagrams, pictures, and high-yield concepts!

Here are the existing short notes for this topic:
${topicNotesStr}
${syllabusText}
${pyqText}

MANDATORY INTRODUCTORY STRUCTURE:
You must start your entire response with this exact HTML structure, filling in the dynamic parts:
<h1 style="color: var(--primary); text-align: center; margin-bottom: 16px;">The ${topic.title}: [Create a grand, poetic subtitle relevant to the topic] (NDA/CDS/UPSC)</h1>
<p style="font-style: italic; text-align: center; margin-bottom: 32px; color: var(--text-secondary);">
"Salutations, my dear aspirants! I am Dronacharya, your Academic Intelligence Engine. Today, we embark on a profound journey into [Topic Focus]. [Add 2-3 sentences of inspiring, military-themed context about why mastering this is essential for an officer]."
</p>

MANDATORY SECTION STRUCTURE: Organize the rest of the output strictly into these 21 numbered sections:
1. INTRODUCTION: What it is, why it exists, basic principles, and exam relevance overview.
2. HISTORICAL BACKGROUND: Complete historical context, origins, evolution, and major milestones.
3. CORE CONCEPTS: Breakdown of the topic into individual core concepts with clear definitions, examples, and significance.
4. TECHNICAL EXPLANATION: Detailed mechanisms, equations, scientific or structural parameters, and technical descriptions.
5. IMPORTANT FACTS: Summary of key facts, comparative tables, data, and statistics.
6. EXAM PERSPECTIVE: Focus areas for NDA/CDS/AFCAT/CAPF/UPSC, potential question patterns, high-yield areas.
7. MILITARY RELEVANCE: Strategic, operational, and tactical relevance to the Indian Armed Forces (weapons, combat record, operators, comparisons, if applicable).
8. CURRENT AFFAIRS RELEVANCE: Recent developments, news occurrences, policy decisions, or modern debates.
9. ADVANTAGES: Detailed benefits, strengths, or pros of the concept/system.
10. CHALLENGES: Weaknesses, issues, obstacles, criticisms, or constraints.
11. FUTURE DEVELOPMENTS: Emerging trends, next-generation upgrades, future outlook.
12. IMPORTANT PERSONALITIES: Names of key figures, scientists, military commanders, leaders, or philosophers associated with this topic.
13. IMPORTANT ORGANISATIONS: Key agencies, ministries, research bodies, or international organizations.
14. PREVIOUS YEAR QUESTION REFERENCES: Actual or representative question references from past NDA/CDS/AFCAT/UPSC papers.
15. KEY TAKEAWAYS: Structured list of the 20 most critical facts and summary points.
16. HIGH-YIELD CONCEPTS: The most heavily tested, repeatedly asked, "must-know" concepts for scoring high.
17. AI GENERATED REVISION NOTES: 1-Page revision sheet, 5-minute revision version, and last-minute exam notes.
18. FLASHCARDS: At least 5 high-yield question-answer pairs for self-testing.
19. MEMORY TRICKS: Mnemonic devices, memory aids, and common exam traps to avoid.
20. FREQUENTLY ASKED QUESTIONS: At least 5 detailed Q&As addressing common student doubts.
21. DIAGRAMS & VISUALS: Provide a visual description or Mermaid diagram (wrapped in \`\`\`mermaid blocks) to visually explain the concept. Also include an AI image visualization by adding an HTML image tag: <img src="https://image.pollinations.ai/prompt/Highly%20detailed%20infographic%20diagram%20about%20[topic_name]%20for%20Indian%20Defence%20Exams?width=800&height=400&nologo=true" style="width:100%; border-radius: 8px; margin: 16px 0;"> (Replace [topic_name] with URL-encoded topic).

MANDATORY KNOWLEDGE EXPANSION LAYER:
At the very beginning or end of your note, include these structured sections:
- CONCEPT TREE:
  * Prerequisites: [List of 2-3 basic concepts needed beforehand, formatted as links like [[Concept Name]]].
  * Advanced Topics: [List of 2-3 next-level concepts to study next, formatted as links like [[Concept Name]]].
- EXAM MAPPING:
  * NDA: [Very High / High / Medium / Low]
  * CDS: [Very High / High / Medium / Low]
  * AFCAT: [Very High / High / Medium / Low]
  * UPSC: [Very High / High / Medium / Low]

SOURCE INTEGRITY: Prioritize authentic, official, primary information (PIB, Ministry of Defence, Supreme Court, Gazette of India, RBI, NITI Aayog, DRDO, ISRO, United Nations, World Bank, etc.) over secondary coaching summaries.

MILITARY & DEFENCE SPECIFICATION:
If this is a defence or military-related topic (e.g. Rafale, Agni, Submarines), you MUST detail:
- Technical specs, historical combat record, weaknesses, global operators, and comparative systems.
- Automatically link critical related subnodes in double square brackets, e.g. [[Meteor Missile]], [[MICA]], [[AESA Radar]], [[Indian Air Force]], [[Dassault Aviation]], [[BVR Combat]].

INTERACTIVE WIKI LINKING:
Throughout the entire response, wrap any important terms, sub-topics, historical dates, organizations, treaties, laws, equations, or doctrines in double square brackets, e.g. [[Constituent Assembly]] or [[Article 19]], so they function as recursive clickable knowledge graph nodes. Generate at least 15-20 such inline links.

Formatting Guidelines for maximum visual appeal:
- Wrap memory aids or mnemonics in: <div class="mnemonic-box"><strong>Mnemonic:</strong> description</div>
- Wrap common errors or traps in: <div class="trap-box"><strong>Common Exam Trap:</strong> explanation of the trap</div>
- Wrap high-level tips in: <div class="strategist-tip"><strong>Strategist Tip:</strong> tip text</div>
- Wrap formulas, equations, variables, or article numbers in <code> tags.
- Use tables (<table>, <tr>, <th>, <td>) to compare concepts or summarize facts.
- Use lists (<ul>, <li>) for multiple points.`;

    if (subject.title && (subject.title.toLowerCase().includes("math") || subject.title.toLowerCase().includes("quant"))) {
      prompt += `\n\nMATHEMATICS SPECIFICATION:\nSince this is a Mathematics topic, you MUST add a dedicated section at the very end titled "22. MATHEMATICS PRACTICE (PATHFINDER LEVEL)". In this section, provide exactly 3 fully solved examples (sums) and exactly 2 unsolved practice sums related to this topic. Ensure the difficulty matches the standard of the NDA/CDS Pathfinder textbook with solved papers.`;
    }

    try {
      console.log(`   -> Generating content with Gemini...`);
      const generatedText = await generateWithGemini(prompt);
      
      console.log(`   -> Saving to Supabase as detailed-${topicId}...`);
      const supabaseRes = await fetch(`${SUPABASE_URL}/rest/v1/notes?id=eq.detailed-${topicId}`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          id: 'detailed-' + topicId,
          subject_id: subjectId,
          notes_content: generatedText
        })
      });

      if (!supabaseRes.ok) {
        throw new Error(`Supabase Upsert Error: ${await supabaseRes.text()}`);
      }
      
      console.log(`   [SUCCESS] Topic completed.`);
      successCount++;
    } catch (err) {
      console.error(`   [ERROR] Failed to process topic ${topicId}: ${err.message}`);
      failCount++;
    }

    if (i < tasks.length - 1) {
      await sleep(4000);
    }
  }

  console.log(`\n========================================`);
  console.log(`Batch Generation Complete!`);
  console.log(`Total Processed: ${tasks.length}`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`========================================`);
}

runBatch();
