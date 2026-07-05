const fs = require('fs');
const https = require('https');
const vm = require('vm');
const path = require('path');

// --- LOAD ENVIRONMENT VARIABLES ---
const envPath = path.join(__dirname, '../.env');
let GEMINI_API_KEY = '';
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  const match = envFile.match(/GEMINI_API_KEY=(.*)/);
  if (match) GEMINI_API_KEY = match[1].trim();
}

if (!GEMINI_API_KEY) {
  console.error("No GEMINI_API_KEY found in .env");
  process.exit(1);
}

// --- SUPABASE CONFIG ---
const SUPABASE_URL = "https://usjzsdvsasjtsyzrvivx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanpzZHZzYXNqdHN5enJ2aXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNTUxMzksImV4cCI6MjA5NDgzMTEzOX0.8wLng1SDAhFPGvk5PQRu8XCqEWClpNPqHgEGpAx1vjk";

// --- LOAD DATA ---
console.log("Loading local database files into VM sandbox...");
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);

function loadJS(filePath) {
  const content = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
  vm.runInContext(content, sandbox);
}

let dataJsContent = fs.readFileSync(path.join(__dirname, '../data.js'), 'utf8');
dataJsContent += '\n; window.CURRENT_AFFAIRS_DB = CURRENT_AFFAIRS_DB; window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE; window.NOTES_DATABASE = NOTES_DATABASE;\n';
vm.runInContext(dataJsContent, sandbox);
loadJS('../syllabus_data.js');
// loadJS('../pyq_trends_data.js'); // Not created yet

const { NOTES_DATABASE } = sandbox.window;
const OFFICIAL_SYLLABUS_DATA = sandbox.window.OFFICIAL_SYLLABUS_DATA || {};
const PYQ_TRENDS_DATA = sandbox.window.PYQ_TRENDS_DATA || {};

// --- SUPABASE REQUEST HELPER ---
function supabaseRequest(method, endpoint, data) {
  return new Promise((resolve, reject) => {
    const url = `${SUPABASE_URL}/rest/v1/${endpoint}`;
    const payload = data ? JSON.stringify(data) : '';
    
    const options = {
      method: method,
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      }
    };
    
    if (method === 'POST') {
      options.headers['Prefer'] = 'resolution=merge-duplicates';
    }

    if (payload) {
      options.headers['Content-Length'] = Buffer.byteLength(payload);
    }

    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(body ? JSON.parse(body) : null);
        } else {
          reject(new Error(`Supabase Status ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', e => reject(e));
    if (payload) req.write(payload);
    req.end();
  });
}

// --- GEMINI REQUEST HELPER ---
function generateNotesFromGemini(promptText) {
  return new Promise((resolve, reject) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const payload = JSON.stringify({
      contents: [{ parts: [{ text: promptText }] }]
    });

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(url, options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const data = JSON.parse(body);
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
            resolve(text);
          } catch (e) {
            reject(e);
          }
        } else {
          reject(new Error(`Gemini Status ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', e => reject(e));
    req.write(payload);
    req.end();
  });
}

// --- MAIN RUNNER ---
async function run() {
  console.log("Checking existing detailed notes in Supabase...");
  let existingDetailed = [];
  try {
    const res = await supabaseRequest('GET', 'notes?select=id&id=like.detailed-*');
    existingDetailed = res.map(r => r.id.replace('detailed-', ''));
    console.log(`Found ${existingDetailed.length} previously generated detailed notes.`);
  } catch(e) {
    console.error("Could not fetch existing notes:", e.message);
  }

  const allTopics = [];
  for (const subjectId in NOTES_DATABASE) {
    const subject = NOTES_DATABASE[subjectId];
    subject.chapters.forEach(chapter => {
      chapter.topics.forEach(topic => {
        allTopics.push({ subjectId, subject, chapter, topic });
      });
    });
  }

  console.log(`Total topics to process: ${allTopics.length}`);

  for (let i = 0; i < allTopics.length; i++) {
    const { subjectId, subject, chapter, topic } = allTopics[i];
    
    if (existingDetailed.includes(topic.id)) {
      console.log(`[${i+1}/${allTopics.length}] Skipping ${topic.title} (already generated)`);
      continue;
    }

    console.log(`[${i+1}/${allTopics.length}] Generating notes for: ${topic.title}...`);
    
    let syllabusText = "";
    if (OFFICIAL_SYLLABUS_DATA[topic.id]) {
      syllabusText = `\n\nEnsure you exhaustively cover the following official UPSC/AFCAT syllabus requirements: ${OFFICIAL_SYLLABUS_DATA[topic.id]}`;
    }

    let pyqText = "";
    if (PYQ_TRENDS_DATA[topic.id]) {
      pyqText = `\n\nActual Questions, numerical patterns, and conceptual trends from the last 7 years (2020-2026) of UPSC CDS, NDA, and AFCAT exams for this topic: ${PYQ_TRENDS_DATA[topic.id]}`;
    }

    const prompt = `You are Dronacharya, the legendary military guru and Academic Intelligence Engine of an AI-powered NDA, CDS, AFCAT, CAPF, and UPSC Examination Preparation Platform.
Your task is to provide an EXHAUSTIVE, deep-dive, UPSC-level explanation of the topic "${topic.title}" from the chapter "${chapter.title}" in ${subject.title}. 

Detailed Notes must not be short summaries. Ensure the output is comprehensive (minimum 1000 words, target 1500-2500 words) so a beginner can understand but an advanced aspirant finds it exam-ready. You MUST include diagrams, pictures, and high-yield concepts!

MANDATORY STRUCTURE: Organize the output strictly into these 21 numbered sections:
1. INTRODUCTION: What it is, why it exists, basic principles, and exam relevance overview.
2. HISTORICAL BACKGROUND: Complete historical context, origins, evolution, and major milestones.
3. CORE CONCEPTS: Breakdown of the topic into individual core concepts with clear definitions, examples, and significance.
4. DETAILED MECHANISMS: How it works step-by-step, underlying processes, algorithms, or physical/chemical reactions.
5. MATHEMATICAL FORMULAS & DERIVATIONS: Every relevant formula, variable definition, SI units, and step-by-step mathematical proofs/derivations if applicable.
6. TYPES & CLASSIFICATIONS: Exhaustive list of sub-types, variants, or categories with distinctive properties.
7. CRITICAL APPLICATIONS: Where and how it is applied in real-world scenarios, technology, or nature.
8. ADVANTAGES & DISADVANTAGES: Pros, cons, limitations, and boundaries of the concept.
9. EXCEPTIONS & ANOMALIES: Edge cases, contradictions, standard deviations, and phenomena that break the general rule.
10. COMPARISON WITH SIMILAR CONCEPTS: A detailed comparative analysis (A vs. B) to remove conceptual confusion.
11. VISUALIZATION & DIAGRAMS (Text/Mermaid): Describe visual representations or generate Mermaid.js code blocks for flowcharts, graphs, or structures. Use actual image URLs in standard markdown format (e.g. ![diagram description](https://via.placeholder.com/600x400.png?text=Concept+Diagram)) if possible.
12. MNEMONICS & MEMORY TRICKS: Specific memory aids, acronyms, and shortcuts for faster recall during exams.
13. COMMON PITFALLS & MISTAKES: Errors students usually make and how to avoid them in exams.
14. RECENT DEVELOPMENTS (Current Affairs): Any modern updates, discoveries, policies, or current affairs related to the topic.
15. PYQ ANALYSIS (Last 10 Years): How UPSC has tested this in the past, trend analysis, and frequency of specific question types.
16. EXAM STRATEGY & APPROACH: Best way to tackle questions on this topic, time-management tips, and elimination techniques.
17. INTERDISCIPLINARY LINKS: How this topic connects with other subjects (e.g., Geography linking with Economy, Math linking with Physics).
18. CASE STUDIES / REAL-WORLD EXAMPLES: At least 3 detailed case studies or historical examples illustrating the concept.
19. GLOSSARY OF TERMS: A mini-dictionary of all technical jargon and keywords used in the topic.
20. ADVANCED / HIGH-LEVEL CONCEPTS: For candidates aiming for top ranks. Complex nuances beyond the basic syllabus.
21. SUMMARY / QUICK RECAP: A final bulleted recap of the absolute most important points for last-minute revision.

FORMATTING REQUIREMENTS:
- Use clear headings (##) and subheadings (###).
- Use bold text for key terms and formulas.
- Use bullet points and numbered lists extensively.
- Ensure the tone is authoritative, academic, and highly structured (like a top-tier textbook).
- Output must be valid HTML formatting that can be injected into the UI (e.g., using <h3>, <p>, <ul>, <li>, <strong>, <em>, <br>).

${syllabusText}
${pyqText}
`;

    try {
      const generatedText = await generateNotesFromGemini(prompt);
      
      // Save to Supabase
      const record = [{
        id: 'detailed-' + topic.id,
        subject_id: subjectId,
        subject_title: subject.title,
        chapter_id: chapter.id,
        chapter_title: chapter.title,
        topic_title: topic.title,
        notes_content: generatedText,
        formulas: topic.formulas || null,
        mindmap: topic.mindmap || null
      }];

      await supabaseRequest('POST', 'notes', record);
      console.log(`  -> Successfully saved ${topic.title} to Supabase.`);
      
      // Rate limiting for Gemini API (15 RPM = 4 seconds per request, using 10s to be safe)
      await new Promise(r => setTimeout(r, 10000));
    } catch (err) {
      console.error(`  -> ERROR generating ${topic.title}:`, err.message);
      // Wait a bit longer on error
      await new Promise(r => setTimeout(r, 15000));
    }
  }

  console.log("Finished generating detailed notes.");
}

run();
