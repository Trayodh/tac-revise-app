require('dotenv').config();
const fs = require('fs');

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
if (!CEREBRAS_API_KEY) { console.error("Missing CEREBRAS_API_KEY"); process.exit(1); }

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateWithCerebras(promptText) {
  const url = `https://api.cerebras.ai/v1/chat/completions`;
  let retries = 20;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CEREBRAS_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-oss-120b",
          messages: [{ role: "user", content: promptText }],
          response_format: { type: "json_object" },
          temperature: 0.1
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          console.log(`Rate limited! Retrying in 15s...`);
          await sleep(15000);
          retries--;
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      
      return data.choices[0].message.content || "";
    } catch (err) {
      console.log(`Error: ${err.message}. Retrying in 15s...`);
      await sleep(15000);
      retries--;
    }
  }
  throw new Error("Failed after multiple retries");
}

async function generateMCQs(key, htmlContent) {
  // strip some HTML tags to save tokens
  const plainText = htmlContent.replace(/<[^>]+>/g, ' ').substring(0, 15000);

  const prompt = `You are generating MCQs for the Indian Defence Exam Question Armoury.

Based on the following extracted textbook notes about ${global.subject} chapter "${key}", generate EXACTLY 20 high-quality MCQs suitable for NDA/CDS exams.

NOTES CONTENT:
${plainText}

CRITICAL RULES:
1. ONLY return a JSON object with a "questions" array.
2. The questions MUST be derived from the text provided above.
3. Each object must have this EXACT structure:
{
  "id": "${key}_001",
  "subject": "${global.subject}",
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

  const responseText = await generateWithCerebras(prompt);
  try {
    const parsed = JSON.parse(responseText);
    if (parsed.questions && Array.isArray(parsed.questions)) {
      return parsed.questions;
    }
  } catch (err) {
    console.error(`Parsing error for ${key}:`, err.message);
  }
  return null;
}

function buildMockTestEntry(key, questions) {
  return {
    id: `mock-${key}`,
    title: `${global.subject}: ${key} Practice Test`,
    description: `MCQs for ${key}`,
    tags: [global.subject, 'NDA', 'CDS'],
    timeLimit: questions.length * 1,
    questionsCount: questions.length,
    rules: { correctMarks: 4, incorrectMarks: 1, examType: "NDA" },
    questions: questions.map(q => ({
      id: q.id,
      stem: q.question_stem,
      options: [
        { id: 'a', text: q.options.a },
        { id: 'b', text: q.options.b },
        { id: 'c', text: q.options.c },
        { id: 'd', text: q.options.d }
      ],
      correctOptionId: q.correct_answer,
      explanation: q.solution_rationale,
      topic: key
    }))
  };
}

async function run() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error("Usage: node generate_mcqs_from_js.js <subject> <filename>");
    process.exit(1);
  }
  
  global.subject = args[0];
  const notesFile = args[1];

  const DATA_FILE = 'data.js';
  let dataContent = fs.readFileSync(DATA_FILE, 'utf8');
  
  const notesFileContent = fs.readFileSync(notesFile, 'utf8');
  let allMatches = [...notesFileContent.matchAll(/(?:window\.)?EXPANDED_NOTES_DATA\(["[^"]+)"\]\s*=\s*`([\s\S]*?)`;/g)];
  
  const notesData = {};
  allMatches.forEach(match => { notesData[match[1]] = match[2]; });

  const keys = Object.keys(notesData);
  console.log(`Found ${keys.length} chapters in ${notesFile}.`);
  
  let matchDataMockTests = dataContent.match(/window\.MOCK_TESTS\s*=\s*(\[[\s\S]*?\]);/);
  let mockTests = matchDataMockTests ? JSON.parse(matchDataMockTests[1]) : [];

  let matchDataQuestionBank = dataContent.match(/window\.QUESTION_BANK\s*=\s*(\[[\s\S]*?\]);/);
  let questionBank = matchDataQuestionBank ? JSON.parse(matchDataQuestionBank[1]) : [];

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    
    if (mockTests.some(m => m.id === `mock-${key}`)) {
      console.log(`[${i+1}/${keys.length}] Skipping ${key} - mock test already exists.`);
      continue;
    }

    console.log(`[${i+1}/${keys.length}] Generating MCQs: ${key}...`);
    const questions = await generateMCQs(key, notesData[key]);
    
    if (questions && questions.length > 0) {
      questions.forEach((q, idx) => {
        q.id = `${key}_${String(idx+1).padStart(3, '0')}`;
        questionBank.push(q);
      });
      const mockTest = buildMockTestEntry(key, questions);
      mockTests.push(mockTest);
      console.log(` -> Success! Added ${questions.length} questions.`);
    } else {
      console.log(` -> FAILED: ${key}`);
    }
  }

  const updatedMockStr = JSON.stringify(mockTests, null, 2);
  const updatedBankStr = JSON.stringify(questionBank, null, 2);

  dataContent = dataContent.replace(/window\.MOCK_TESTS\s*=\s*\[[\s\S]*?\];/, `window.MOCK_TESTS = ${updatedMockStr};`);
  dataContent = dataContent.replace(/window\.QUESTION_BANK\s*=\s*\[[\s\S]*?\];/, `window.QUESTION_BANK = ${updatedBankStr};`);

  fs.writeFileSync(DATA_FILE, dataContent);
  console.log(`Updated ${DATA_FILE} successfully!`);
}

run();
