const fs = require('fs');
const path = require('path');
const https = require('https');
const vm = require('vm');

global.DOMMatrix = class DOMMatrix {
  constructor() {
    this.a = 1; this.b = 0; this.c = 0; this.d = 1; this.e = 0; this.f = 0;
  }
};
const pdfParse = require('pdf-parse');

// --- LOAD ENVIRONMENT VARIABLES ---
const envPath = path.join(__dirname, '../.env');
let envFile = '';
if (fs.existsSync(envPath)) envFile = fs.readFileSync(envPath, 'utf8');

function getEnv(key) {
  const match = envFile.match(new RegExp(`${key}=(.*)`));
  return match ? match[1].trim() : '';
}

const GEMINI_API_KEY = getEnv('GEMINI_API_KEY');
const GROQ_API_KEY = getEnv('GROQ_API_KEY');
const CEREBRAS_API_KEY = getEnv('CEREBRAS_API_KEY');

if (!GEMINI_API_KEY || !GROQ_API_KEY || !CEREBRAS_API_KEY) {
  console.warn("Warning: Not all API keys are set. Script will use available ones.");
}

// --- EXTRACT SYLLABUS FROM DATA.JS ---
console.log("Loading official syllabus from data.js...");
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);

const dataJsContent = fs.readFileSync(path.join(__dirname, '../data.js'), 'utf8');
vm.runInContext(dataJsContent + '\n; window.NOTES_DATABASE = NOTES_DATABASE;\n', sandbox);

const NOTES_DATABASE = sandbox.window.NOTES_DATABASE || {};
let formattedSyllabus = "";
for (const subjectId in NOTES_DATABASE) {
  const subject = NOTES_DATABASE[subjectId];
  formattedSyllabus += `\nSubject: ${subject.title}\n`;
  subject.chapters.forEach(chapter => {
    formattedSyllabus += `  Chapter: ${chapter.title}\n`;
    chapter.topics.forEach(topic => {
      formattedSyllabus += `    Topic: ${topic.title}\n`;
    });
  });
}

// --- PROMPT DEFINITION ---
const BASE_PROMPT = `You are an expert examination analyst, curriculum specialist, psychometrician, and defence examination paper analyst.

Your task is to accurately extract every question from the uploaded examination paper and classify each question according to the official syllabus provided.

Your primary objectives are accuracy, consistency, and structured output.
Never guess. Never hallucinate. Never invent questions or options.
If any information is uncertain, explicitly state it.

----------------------------------------------------
INPUTS
----------------------------------------------------
1. Previous Year Question Paper Chunk: (Provided below)
2. Official Examination Syllabus:
${formattedSyllabus}

----------------------------------------------------
TASKS
----------------------------------------------------
STEP 1: Read the entire examination paper chunk.
Understand its layout before extracting anything. Identify Question numbers, Options, etc.

STEP 2: Extract every question individually.
For each question extract: Question Number, Question Text, Options, Correct Answer (if available), Marks, Negative Marks.

STEP 3: Classify every question.
Classify using ONLY the supplied syllabus.
Never invent chapters or subjects. If confidence is below 90%, Return "Unknown".

STEP 4: Difficulty Analysis
Classify difficulty as: Easy, Moderate, Hard, Very Hard.

STEP 5: Question Type
Choose ONE: Direct Fact, Statement Based, Assertion Reason, Match Following, Chronology, Map Based, Case Based, Paragraph Based, Numerical, Logical Reasoning, Current Affairs, Conceptual, Application Based, Analytical.

STEP 6: Bloom's Taxonomy
Choose ONE: Remember, Understand, Apply, Analyse, Evaluate, Create.

STEP 7: Knowledge Source
Identify where the answer comes from: NCERT, Current Affairs, Static GK, History, Geography, Polity, Economy, Science, Environment, Defence, Mixed.

STEP 8: Topic Frequency
Estimate: High Frequency, Medium Frequency, Low Frequency.

STEP 9: Keywords
Generate 5–15 important keywords.

STEP 10: Concept Tags
Generate relevant tags.

STEP 11: Question Intent
Identify what the examiner is testing (Historical Fact, Conceptual Understanding, Comparison, Application, Interpretation, Calculation, Reasoning).

STEP 12: Distractor Analysis
For each incorrect option identify (Historical confusion, Numerical trap, Conceptual misunderstanding, Close factual similarity, Random distractor).

STEP 13: Confidence Score
Provide confidence from 0–100 for every classification.

STEP 14: Validation
Before returning the result verify: Every question extracted, No duplicated questions, Options correctly assigned, Subjects valid, Chapters exist in syllabus, Topics exist in syllabus, JSON valid.

----------------------------------------------------
OUTPUT FORMAT
Return ONLY valid JSON.
Schema:
{
  "exam": "Automatically infer from text",
  "questions": [
    {
      "question_number": 1,
      "question": "",
      "options": { "A": "", "B": "", "C": "", "D": "" },
      "correct_answer": "",
      "subject": "",
      "chapter": "",
      "topic": "",
      "subtopic": "",
      "difficulty": "",
      "question_type": "",
      "blooms_taxonomy": "",
      "knowledge_source": "",
      "frequency": "",
      "keywords": [],
      "concept_tags": [],
      "examiner_intent": "",
      "distractor_analysis": { "A": "", "B": "", "C": "", "D": "" },
      "confidence": 98
    }
  ]
}

RULES:
Never create chapters not present in the syllabus. Return ONLY JSON. Do not use markdown blocks (\`\`\`).`;

// --- AI PROVIDER HELPERS ---

function groqRequest(promptText, chunkText) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: promptText },
        { role: "user", content: "Extract and analyze the following question paper chunk:\n\n" + chunkText }
      ],
      temperature: 0.1,
      response_format: { type: "json_object" }
    });

    const options = {
      hostname: 'api.groq.com',
      path: '/openai/v1/chat/completions',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const data = JSON.parse(body);
            resolve(data.choices[0].message.content);
          } catch(e) { reject(e); }
        } else {
          reject(new Error(`Groq Status ${res.statusCode}: ${body}`));
        }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

function cerebrasRequest(promptText, chunkText) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: "llama3.1-70b",
      messages: [
        { role: "system", content: promptText },
        { role: "user", content: "Extract and analyze the following question paper chunk:\n\n" + chunkText }
      ],
      temperature: 0.1,
      response_format: { type: "json_object" }
    });

    const options = {
      hostname: 'api.cerebras.ai',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CEREBRAS_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const data = JSON.parse(body);
            resolve(data.choices[0].message.content);
          } catch(e) { reject(e); }
        } else {
          reject(new Error(`Cerebras Status ${res.statusCode}: ${body}`));
        }
      });
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

function geminiRequest(promptText, chunkText) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: promptText + "\n\nExtract from this chunk:\n" + chunkText }] }
        ],
        config: { temperature: 0.1, responseMimeType: 'application/json' }
      });
      resolve(response.text);
    } catch(err) {
      reject(err);
    }
  });
}

// --- GEMINI TRANSCRIPTION HELPER ---
const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function transcribePdf(pdfPath) {
  console.log(`Uploading ${pdfPath} to Gemini for transcription...`);
  const uploadResult = await ai.files.upload({ file: pdfPath, mimeType: 'application/pdf' });
  
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`Waiting 10s for file processing (Attempt ${attempt})...`);
      await new Promise(r => setTimeout(r, 10000));
      
      console.log(`Asking Gemini to extract raw text...`);
      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
              {
                  role: 'user',
                  parts: [
                      { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
                      { text: "Extract ALL text from this question paper exactly as written. Preserve all question numbers, options, and text. Do not add any conversational filler. Just output the raw text of the paper." }
                  ]
              }
          ],
          config: { temperature: 0.1 }
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
  throw new Error("Failed to transcribe after 3 attempts.");
}

// --- ROUND ROBIN DISPATCHER ---
// Since we have text, we can use Groq and Cerebras, which are Llama 3 70B models, extremely smart.
// We will also use Gemini via REST as part of the pool.
const providers = [
  { name: 'Gemini', fn: geminiRequest, key: GEMINI_API_KEY },
  { name: 'Groq', fn: groqRequest, key: GROQ_API_KEY },
  { name: 'Cerebras', fn: cerebrasRequest, key: CEREBRAS_API_KEY }
].filter(p => p.key);

let providerIndex = 1; // Start with Groq
async function dispatchChunk(chunkText) {
  if (providers.length === 0) throw new Error("No API keys found.");
  
  const provider = providers[providerIndex];
  providerIndex = (providerIndex + 1) % providers.length;
  
  console.log(`  -> Sending chunk to ${provider.name}...`);
  
  // Retry logic
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      let response = await provider.fn(BASE_PROMPT, chunkText);
      response = response.trim();
      if (response.startsWith('\`\`\`json')) {
        response = response.replace(/^\`\`\`json/, '').replace(/\`\`\`$/, '').trim();
      }
      return JSON.parse(response);
    } catch(err) {
      console.warn(`  [Attempt ${attempt}] ${provider.name} failed: ${err.message}`);
      if (attempt === 3) throw err;
      await new Promise(r => setTimeout(r, 10000));
    }
  }
}

// --- CHUNKER ---
function splitTextIntoChunks(text, maxWords = 3000) {
  const words = text.split(/\s+/);
  const chunks = [];
  for (let i = 0; i < words.length; i += maxWords) {
    chunks.push(words.slice(i, i + maxWords).join(" "));
  }
  return chunks;
}

// --- MAIN SCRIPT ---
async function main() {
  const targetDir = path.join(__dirname, '../PYQ Papers');
  if (!fs.existsSync(targetDir)) {
    console.error("Directory not found:", targetDir);
    return;
  }

  const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.pdf'));
  console.log(`Found ${files.length} PDFs to process.`);

  const outputBank = { questions: [] };

  // For test, use a known PDF
  const testFile = files.find(f => f.includes('CDS-1-GS-Question-Paper'));
  if (!testFile) return;

  console.log(`\n=========================================`);
  console.log(`Processing ${testFile}...`);
  
  try {
    const rawText = await transcribePdf(path.join(targetDir, testFile));
    console.log(`Transcribed ${rawText.length} characters.`);
    
    // Process all chunks
    const chunks = splitTextIntoChunks(rawText, 1000); 
    console.log(`Generated ${chunks.length} chunks. Processing all...`);
    
    for (let i = 0; i < chunks.length; i++) {
      console.log(`Processing Chunk ${i+1}/${chunks.length}...`);
      const result = await dispatchChunk(chunks[i]);
      if (result && result.questions) {
        console.log(`  -> Extracted ${result.questions.length} questions.`);
        outputBank.questions.push(...result.questions);
      }
    }
    
  } catch (err) {
    console.error(`Failed to process ${testFile}: `, err);
  }
  
  fs.writeFileSync(path.join(__dirname, '../question_banks/extracted_v2_test.json'), JSON.stringify(outputBank, null, 2));
  console.log(`Saved test extraction to extracted_v2_test.json. Total extracted: ${outputBank.questions.length}`);
}

if (require.main === module) {
  main();
}
