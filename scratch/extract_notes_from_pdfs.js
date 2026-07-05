const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');
const { GoogleGenAI } = require('@google/genai');

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

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// --- SUPABASE CONFIG ---
const SUPABASE_URL = "https://usjzsdvsasjtsyzrvivx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanpzZHZzYXNqdHN5enJ2aXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNTUxMzksImV4cCI6MjA5NDgzMTEzOX0.8wLng1SDAhFPGvk5PQRu8XCqEWClpNPqHgEGpAx1vjk";

// --- SUBJECT TO PDF MAPPING ---
const PDF_MAPPING = {
  biology: 'Biology class notes_compressed.pdf',
  chemistry: 'Chemistry class Notes_compressed.pdf',
  physics: 'Physics class notes pdf_compressed.pdf',
  geography: 'Physical Geography class notes_compressed.pdf', // Or Indian
  history: 'Ancient history capsule_compressed.pdf',
  mathematics: 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf',
  english: 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf',
  polity: 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf',
  economics: 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf',
  'military-aptitude': 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf',
  'current-affairs': 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf',
  environment: 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf',
};

// Map to cache uploaded file URIs
const uploadedFilesCache = {};

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

const { NOTES_DATABASE } = sandbox.window;

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

// --- GEMINI PDF UPLOAD & REQUEST ---
async function uploadAndGetFileUri(pdfName) {
  if (uploadedFilesCache[pdfName]) {
    return uploadedFilesCache[pdfName];
  }

  const pdfPath = path.join(__dirname, '../', pdfName);
  if (!fs.existsSync(pdfPath)) {
    throw new Error(`PDF file not found: ${pdfPath}`);
  }

  console.log(`Uploading ${pdfName} to Gemini... (This may take a while for large PDFs)`);
  const uploadResult = await ai.files.upload({ file: pdfPath, mimeType: 'application/pdf' });
  
  console.log(`Waiting 20s for processing on Gemini servers...`);
  await new Promise(r => setTimeout(r, 20000));
  
  const fileData = { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType };
  uploadedFilesCache[pdfName] = fileData;
  return fileData;
}

async function extractNotesWithRetry(fileData, promptText) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`Asking Gemini to generate notes (Attempt ${attempt})...`);
      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
              {
                  role: 'user',
                  parts: [
                      { fileData: fileData },
                      { text: promptText }
                  ]
              }
          ],
          config: { temperature: 0.1 } // Low temperature for factual extraction
      });
      return response.text;
    } catch(err) {
      if (err.status === 429 || err.message.includes('429')) {
        console.warn(`Gemini Rate Limit (429). Retrying in 60s...`);
        await new Promise(r => setTimeout(r, 60000));
      } else {
        throw err;
      }
    }
  }
  throw new Error("Failed to extract notes after 3 attempts.");
}

// --- MAIN RUNNER ---
async function run() {
  // Test mode flag
  const isTestMode = true; 
  let testTopicId = 'cell-structure'; // We will test biology first
  
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

  console.log(`Total topics in syllabus: ${allTopics.length}`);

  for (let i = 0; i < allTopics.length; i++) {
    const { subjectId, subject, chapter, topic } = allTopics[i];
    
    if (isTestMode && topic.id !== testTopicId) continue;
    
    if (!isTestMode && existingDetailed.includes(topic.id)) {
      console.log(`[${i+1}/${allTopics.length}] Skipping ${topic.title} (already generated)`);
      continue;
    }

    console.log(`[${i+1}/${allTopics.length}] Deep-diving into: ${topic.title} (${subject.title})...`);
    
    const targetPdf = PDF_MAPPING[subjectId];
    if (!targetPdf) {
      console.warn(`  -> No PDF mapped for subject: ${subjectId}. Skipping.`);
      continue;
    }

    try {
      const fileData = await uploadAndGetFileUri(targetPdf);

      const prompt = `You are a master Academic AI for Defence Exams (NDA, CDS, AFCAT).
Your task is to EXTRACT AND STRUCTURE deep-dive notes for the topic "${topic.title}" (from the chapter "${chapter.title}") using ONLY the provided reference PDF book. Do not hallucinate outside the provided text.

REQUIREMENTS:
1. Thorough Extraction: Deep dive into the provided PDF and extract all relevant facts, theories, definitions, and exceptions regarding "${topic.title}". The output should be comprehensive (minimum 1000 words).
2. Required Diagrams: You MUST include at least one detailed Mermaid.js diagram (flowchart, mindmap, or structure tree) to visually explain a complex mechanism or classification in this topic.
3. Formatting: Output strictly as valid HTML formatting that can be injected into the UI (e.g., using <h3>, <p>, <ul>, <li>, <strong>, <em>, <br>). For Mermaid diagrams, use <pre class="mermaid">diagram_code</pre>.
4. Structure: Organize the notes logically (e.g., Introduction, Core Mechanisms, Key Classifications, Important Exceptions, and Exam Summary).

Do not invent anything. If the PDF does not contain enough information on "${topic.title}", just extract what is available and state: "Note: The reference material provided limited information on this topic."

Now, extract the detailed notes and generate the required Mermaid diagrams for: ${topic.title}`;

      const generatedText = await extractNotesWithRetry(fileData, prompt);
      
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
      console.log(`  -> Successfully saved deep-dive notes with diagrams for ${topic.title} to Supabase.`);
      
      if (isTestMode) {
        fs.writeFileSync(path.join(__dirname, 'test_output_notes.md'), generatedText);
        console.log("Test mode complete. Output saved to test_output_notes.md");
        break;
      }
      
      // Rate limiting for Gemini API
      await new Promise(r => setTimeout(r, 10000));
    } catch (err) {
      console.error(`  -> ERROR processing ${topic.title}:`, err.message);
      await new Promise(r => setTimeout(r, 15000));
    }
  }

  console.log("Finished deep-dive generation.");
}

run();
