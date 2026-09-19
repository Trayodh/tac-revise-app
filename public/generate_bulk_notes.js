require('dotenv').config();
const fs = require('fs');
const vm = require('vm');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in .env");
  process.exit(1);
}

// 1. Load NOTES_DATABASE
let code = fs.readFileSync('notes_data.js', 'utf8');
const start = code.indexOf('const NOTES_DATABASE = {');
let dbCode = 'const NOTES_DATABASE = ' + code.slice(start + 'const NOTES_DATABASE = '.length);
dbCode += '\nwindow.NOTES_DATABASE = NOTES_DATABASE;';
const dbSandbox = { window: {} };
vm.createContext(dbSandbox);
vm.runInContext(dbCode, dbSandbox);
let notesDb = dbSandbox.window.NOTES_DATABASE;

// 2. Setup Gemini request function
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
async function generateDetailedNotes(subjectId, chapterTitle, topicTitle, existingNotes) {
  const model = 'gemini-flash-latest';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
  
  const promptText = `You are Dronacharya, the legendary military guru and Academic Intelligence Engine of an AI-powered NDA, CDS, AFCAT, CAPF, and UPSC Examination Preparation Platform.
Your task is to provide an EXHAUSTIVE, deep-dive explanation of the topic "${topicTitle}" from the chapter "${chapterTitle}" in ${subjectId}.

IMPORTANT RULES:
1. STRICT FORMATTING: Use HTML. Wrap the entire response in a <div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
2. Use <h4> for sub-headings with this exact style: <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">
3. NO FLOWCHARTS OR DIAGRAMS. DO NOT use mermaid js. DO NOT output ASCII art or SVGs. Focus on highly detailed text explanations, tables, and bulleted lists.
4. ABSOLUTELY NO MCQs, QUIZZES, OR PRACTICE QUESTIONS. The output MUST be 100% study material and exhaustive notes. Do not waste tokens on questions.
5. Ensure the content is exhaustive and completely covers the topic for UPSC level.

Existing Short Notes:
${existingNotes}

Provide ONLY the HTML output. Do not wrap in markdown code blocks.`;

  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: { temperature: 0.65 }
        })
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error.message || 'API Error');
      }
      if (data.candidates && data.candidates.length > 0) {
        let text = data.candidates[0].content.parts[0].text;
        text = text.replace(/^```(html)?|```$/gm, '').trim();
        return text;
      }
      throw new Error('No candidates returned (Safety filter?)');
    } catch (e) {
      console.error(`Error generating notes for ${topicTitle}:`, e.message);
      retries--;
      await sleep(65000); // Wait 65s for quota reset
    }
  }
  return null;
}

// 3. Process Topics
async function run() {
  const BATCH_SIZE = 1;
  let tasks = [];
  let updatedCount = 0;

  for (const subjectId in notesDb) {
    const chapters = notesDb[subjectId].chapters || [];
    for (const chapter of chapters) {
      const topics = chapter.topics || [];
      for (const topic of topics) {
        // Skip if already processed or if notes are extremely long (already AI generated)
        if (topic.notes && topic.notes.includes('<!-- AI_BULK_NOTES -->')) continue;
        if (topic.notes && topic.notes.includes('<div class="revision-card"')) continue; // Handled by older script

        tasks.push(async () => {
          console.log(`Generating detailed notes for: ${topic.title} (${subjectId})...`);
          const aiHtml = await generateDetailedNotes(subjectId, chapter.title, topic.title, topic.notes || '');
          if (aiHtml) {
            topic.notes = (topic.notes || '') + '\n\n<!-- AI_BULK_NOTES -->\n' + aiHtml;
            updatedCount++;
            console.log(`[SUCCESS] ${topic.title}`);
          } else {
            console.log(`[FAILED] ${topic.title}`);
          }
        });
      }
    }
  }

  console.log(`Total topics to process: ${tasks.length}`);
  
  // Process in batches
  for (let i = 0; i < tasks.length; i += BATCH_SIZE) {
    const batch = tasks.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(t => t()));
    console.log(`Processed ${Math.min(i + BATCH_SIZE, tasks.length)} / ${tasks.length}`);
    await sleep(4500); // Prevent exceeding 15 RPM (4.5s delay = ~13 RPM)
    
    // Save periodically
    const preDbCode = code.slice(0, start);
    const newDbString = JSON.stringify(notesDb, null, 2);
    fs.writeFileSync('notes_data.js', preDbCode + 'const NOTES_DATABASE = ' + newDbString + ';\n');
  }

  console.log(`Finished! Updated ${updatedCount} topics.`);
}

run();
