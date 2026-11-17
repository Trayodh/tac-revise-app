require('dotenv').config();
const fs = require('fs');

const GROQ_API_KEY = process.env.GROQ_API_KEY;
if (!GROQ_API_KEY) { console.error("Missing GROQ_API_KEY"); process.exit(1); }

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateMCQs(key, htmlContent) {
  const url = `https://api.groq.com/openai/v1/chat/completions`;

  const plainText = htmlContent
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .substring(0, 7000)
    .trim();

  const prompt = `You are generating MCQs for the Indian Defence Exam Question Armoury.

Based on the following extracted textbook notes about History chapter "${key}", generate EXACTLY 20 high-quality MCQs suitable for NDA/CDS exams.

NOTES CONTENT:
${plainText}

OUTPUT RULES — CRITICAL:
1. Return ONLY a valid JSON object with a single key "questions" containing an array of 20 objects. No markdown, no explanation, no preamble.
2. The "questions" array must contain EXACTLY 20 objects.
3. Each object must have this EXACT structure:
{
  "id": "${key}_001",
  "subject": "History",
  "chapter": "${key}",
  "exam_tags": ["NDA", "CDS"],
  "question_stem": "Full question text here",
  "options": {
    "a": "Option A text",
    "b": "Option B text",
    "c": "Option C text",
    "d": "Option D text"
  },
  "correct_answer": "a/b/c/d",
  "solution_rationale": "Clear step-by-step explanation extracted directly from the text."
}
4. The root structure must be: { "questions": [ ... ] }`;

  let retries = 3;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.5,
          response_format: { type: "json_object" }
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

      const text = data.choices?.[0]?.message?.content || "{}";
      const parsed = JSON.parse(text);
      if (parsed.questions && Array.isArray(parsed.questions)) {
        return parsed.questions;
      } else {
        throw new Error("Invalid JSON structure returned.");
      }
    } catch (err) {
      console.error(`Fetch error for ${key}:`, err.message);
      await sleep(10000);
      retries--;
    }
  }
  return null;
}

function buildMockTestEntry(key, questions) {
  return {
    id: `mock-${key}`,
    title: `History: ${key} Practice Test`,
    description: `MCQs for ${key}`,
    tags: ['History', 'NDA', 'CDS'],
    timeLimit: questions.length * 1,
    questionsCount: questions.length,
    rules: { correctMarks: 4, incorrectMarks: 1, examType: "NDA" },
    questions: questions.map(q => ({
      question: q.question_stem || '',
      options: [q.options?.a || '', q.options?.b || '', q.options?.c || '', q.options?.d || ''],
      correct: q.correct_answer === 'a' ? 0 : q.correct_answer === 'b' ? 1 : q.correct_answer === 'c' ? 2 : 3,
      explanation: q.solution_rationale || '',
      difficulty: 'medium',
      topicId: key
    }))
  };
}

async function run() {
  const DATA_FILE = 'data.js';
  let dataContent = fs.readFileSync(DATA_FILE, 'utf8');
  
  const historyFileContent = fs.readFileSync('notes_extra_history.js', 'utf8');
  let allMatches = [...historyFileContent.matchAll(/(?:window\.)?EXPANDED_NOTES_DATA\(["[^"]+)"\]\s*=\s*`([\s\S]*?)`;/g)];
  
  const notesData = {};
  allMatches.forEach(match => { notesData[match[1]] = match[2]; });
  const keys = Object.keys(notesData);

  let totalAdded = 0;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    
    if (dataContent.includes(`"mock-${key}"`)) {
      console.log(`[${i+1}/${keys.length}] ✅ SKIP (already in armoury): ${key}`);
      continue;
    }

    console.log(`[${i+1}/${keys.length}] ⏳ Generating MCQs: ${key}...`);

    const htmlContent = notesData[key];
    const questions = await generateMCQs(key, htmlContent);

    if (!questions) {
      console.log(`[${i+1}/${keys.length}] ❌ FAILED: ${key}`);
      continue;
    }

    const mockEntry = buildMockTestEntry(key, questions);
    const entryJson = JSON.stringify(mockEntry, null, 2);

    dataContent = fs.readFileSync(DATA_FILE, 'utf8');
    const lastBracket = dataContent.lastIndexOf('];');
    if (lastBracket === -1) {
      console.error('Could not find ]]; in data.js!');
      continue;
    }

    const before = dataContent.substring(0, lastBracket);
    const after = dataContent.substring(lastBracket);
    const newContent = before + `,\n  ${entryJson}\n` + after;
    
    fs.writeFileSync(DATA_FILE, newContent, 'utf8');
    dataContent = newContent;

    totalAdded++;
    console.log(`[${i+1}/${keys.length}] ✅ ADDED: ${key} — ${questions.length} MCQs`);
    await sleep(2500);
  }

  console.log(`\n🎉 DONE! Added ${totalAdded} mock tests to Question Armoury`);
}

run();
