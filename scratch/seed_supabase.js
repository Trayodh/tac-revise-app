const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');

const SUPABASE_URL = "https://usjzsdvsasjtsyzrvivx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzanpzZHZzYXNqdHN5enJ2aXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNTUxMzksImV4cCI6MjA5NDgzMTEzOX0.8wLng1SDAhFPGvk5PQRu8XCqEWClpNPqHgEGpAx1vjk";

// Load data.js and all notes_extra files in a sandbox
console.log("Loading local database files into VM sandbox...");
const sandbox = {
  window: {},
  global: {},
  console: console,
  fetch: () => new Promise((resolve) => resolve({ text: () => Promise.resolve('') })),
  EXPANDED_NOTES_DATA: {},
  EXPERT_REVISION_DATA: {},
  CBT_EXAMS_DATABASE: [],
  CURRENT_AFFAIRS_DB: {},
  NOTES_DATABASE: {}
};
vm.createContext(sandbox);

// 1. Load data.js in the sandbox
let dataJsContent = fs.readFileSync('data.js', 'utf8');
dataJsContent += '\n; window.CURRENT_AFFAIRS_DB = CURRENT_AFFAIRS_DB; window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE; window.NOTES_DATABASE = NOTES_DATABASE;\n';
vm.runInContext(dataJsContent, sandbox);
const { CURRENT_AFFAIRS_DB, CBT_EXAMS_DATABASE, NOTES_DATABASE } = sandbox.window;


// 2. Load all notes_extra files in a sandbox to populate EXPANDED_NOTES_DATA
const notesFiles = fs.readdirSync('.')
  .filter(f => f.startsWith('notes_extra') && f.endsWith('.js'));

console.log(`Loading ${notesFiles.length} notes_extra files...`);
notesFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  vm.runInContext(content, sandbox);
});

const EXPANDED_NOTES_DATA = sandbox.EXPANDED_NOTES_DATA || {};

console.log(`Loaded:
- Current Affairs Months: ${Object.keys(CURRENT_AFFAIRS_DB).length}
- CBT Mock Exams: ${CBT_EXAMS_DATABASE.length}
- Notes Subjects: ${Object.keys(NOTES_DATABASE).length}
- Expanded Notes Topics: ${Object.keys(EXPANDED_NOTES_DATA).length}`);

// HTTPS Request Helper
function makeRequest(method, endpoint, data) {
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
          resolve(body);
        } else {
          reject(new Error(`Status ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', e => reject(e));
    if (payload) req.write(payload);
    req.end();
  });
}

// Batch processing helper
async function processBatch(endpoint, items, batchSize = 100) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    console.log(`  Uploading batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(items.length / batchSize)} to ${endpoint}...`);
    await makeRequest('POST', endpoint, batch);
  }
}

async function seed() {
  try {
    // === 1. SEED CURRENT AFFAIRS ===
    console.log("\n--- Seeding Current Affairs ---");
    const caRecords = [];
    Object.keys(CURRENT_AFFAIRS_DB).forEach(month => {
      CURRENT_AFFAIRS_DB[month].forEach((item, idx) => {
        caRecords.push({
          id: item.id || `raw-${month.split(' ')[0].slice(0,3).toLowerCase()}-${idx}`,
          month: month,
          topic: item.topic || item.type || 'General',
          text: item.text || item.summary || '',
          details: typeof item.details === 'object' ? item.details : (item.details ? { summary: item.details } : null),
          mcq: item.mcq || null
        });
      });
    });
    
    console.log(`Deleting existing current affairs...`);
    await makeRequest('DELETE', 'current_affairs?id=not.is.null');
    console.log(`Inserting ${caRecords.length} current affairs records...`);
    await processBatch('current_affairs', caRecords, 100);

    // === 2. SEED EXAMS & QUESTIONS ===
    console.log("\n--- Seeding Exams & Questions ---");
    const examRecords = [];
    const questionRecords = [];
    
    CBT_EXAMS_DATABASE.forEach(exam => {
      examRecords.push({
        id: exam.id || null,
        title: exam.title || null,
        subject: exam.subject || null,
        exam: exam.exam || null,
        duration: exam.duration || 0,
        total_questions: exam.questions ? exam.questions.length : 0
      });
      
      exam.questions.forEach((q, idx) => {
        questionRecords.push({
          id: q.id ? `${exam.id}-${q.id}` : `${exam.id}-q-${idx}`,
          exam_id: exam.id || null,
          question_text: q.question || null,
          options: q.options || null,
          correct_option: (q.correct === null || q.correct === undefined || isNaN(q.correct)) ? 0 : q.correct,
          explanation: q.explanation || null
        });
      });
    });

    console.log(`Deleting existing questions...`);
    await makeRequest('DELETE', 'cbt_questions?id=not.is.null');
    console.log(`Deleting existing exams...`);
    await makeRequest('DELETE', 'cbt_exams?id=not.is.null');

    console.log(`Inserting ${examRecords.length} exams...`);
    await processBatch('cbt_exams', examRecords, 50);
    
    console.log(`Inserting ${questionRecords.length} questions...`);
    await processBatch('cbt_questions', questionRecords, 100);

    // === 3. SEED REVISION NOTES ===
    console.log("\n--- Seeding Notes ---");
    const noteRecords = [];
    Object.keys(NOTES_DATABASE).forEach(subjectId => {
      const subject = NOTES_DATABASE[subjectId];
      subject.chapters.forEach(chapter => {
        chapter.topics.forEach(topic => {
          // Merge dynamic notes content if available in EXPANDED_NOTES_DATA
          const fullNotes = EXPANDED_NOTES_DATA[topic.id] || topic.notes || '';
          noteRecords.push({
            id: topic.id || null,
            subject_id: subjectId || null,
            subject_title: subject.title || null,
            chapter_id: chapter.id || null,
            chapter_title: chapter.title || null,
            topic_title: topic.title || null,
            notes_content: fullNotes || null,
            formulas: topic.formulas || null,
            mindmap: topic.mindmap || null
          });
        });
      });
    });

    console.log(`Deleting existing notes...`);
    await makeRequest('DELETE', 'notes?id=not.is.null');
    
    console.log(`Inserting ${noteRecords.length} notes...`);
    await processBatch('notes', noteRecords, 50);

    console.log("\n🎉 Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
  }
}

seed();
