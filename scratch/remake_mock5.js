require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CACHE_FILE = 'scratch/generated_questions.json';
const EXAM_ID = 'nda-math-mock-5';
const TARGET_COUNT = 100;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function queryGemini(prompt, retries = 8, delayMs = 10000) {
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseMimeType: "application/json" }
  };

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(targetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const parsed = await res.json();
        if (parsed.candidates && parsed.candidates.length > 0 && parsed.candidates[0].content && parsed.candidates[0].content.parts.length > 0) {
          let jsonText = parsed.candidates[0].content.parts[0].text;
          const startArr = jsonText.indexOf('[');
          const endArr = jsonText.lastIndexOf(']');
          if (startArr !== -1 && endArr !== -1 && endArr > startArr) {
            jsonText = jsonText.substring(startArr, endArr + 1);
          }
          jsonText = jsonText.replace(/\/\/.*?\n/g, '\n').replace(/\/\*[\s\S]*?\*\//g, '');
          return JSON.parse(jsonText);
        } else {
          throw new Error("Empty response content.");
        }
      } else if (res.status === 429 || res.status === 503) {
        console.log(`[Rate Limit/Load] Attempt ${attempt} failed with ${res.status}. Waiting ${delayMs/1000}s...`);
        await sleep(delayMs);
        delayMs *= 2;
      } else {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
    } catch (e) {
      console.log(`[Error] Attempt ${attempt} threw: ${e.message}`);
      if (attempt === retries) throw e;
      await sleep(delayMs);
      delayMs *= 2;
    }
  }
}

async function main() {
  console.log("=== Remaking NDA Mathematics Mock 5 ===");
  
  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  }

  let questions = cache[EXAM_ID] || [];
  console.log(`Current questions in cache for ${EXAM_ID}: ${questions.length}/${TARGET_COUNT}`);

  while (questions.length < TARGET_COUNT) {
    const currentBatchCount = Math.min(20, TARGET_COUNT - questions.length);
    console.log(`Generating batch of ${currentBatchCount} questions...`);

    const prompt = `Generate exactly ${currentBatchCount} unique, high-quality multiple-choice questions for the UPSC NDA Mathematics exam, Mock Test #5.
Topic Focus: Trigonometry: Ratios, Identities, Properties of Triangles, Heights & Distances, and Inverse Trigonometric Functions.
The questions must cover:
- 25% Direct Application
- 35% Multi-Step Problems
- 20% Conceptual Reasoning
- 10% Elimination-Based
- 10% Advanced Analytical Problems
All questions must mirror actual UPSC NDA past year papers (2021-Latest) in style, tone, distractors, and difficulty.

Format the output strictly as a JSON array of objects. Do not include markdown code block formatting (no \`\`\`json). Just the raw JSON array.
Each object must have exactly these keys:
- "question": string (Professional, clear, no emoji. If math, use standard notation like ^, sqrt, etc.)
- "options": array of exactly 4 strings
- "correct": number (index of correct option 0-3)
- "explanation": string (Step-by-step mathematical explanation explaining why the correct option is right and others are wrong)

All questions must be unique.`;

    try {
      const batchQuestions = await queryGemini(prompt);
      if (Array.isArray(batchQuestions) && batchQuestions.length > 0) {
        questions.push(...batchQuestions);
        cache[EXAM_ID] = questions;
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
        console.log(`Added ${batchQuestions.length} questions. Total: ${questions.length}/${TARGET_COUNT}`);
      } else {
        console.log("Error: Invalid response array. Retrying...");
      }
    } catch (e) {
      console.log(`Fatal error during batch generation: ${e.message}. Retrying in 10s...`);
      await sleep(10000);
    }
    await sleep(4000);
  }

  console.log("NDA Mathematics Mock 5 fully generated! Merging into data.js...");
  const dataContent = fs.readFileSync('data.js', 'utf8');
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found!");
    process.exit(1);
  }

  let firstBracket = dataContent.indexOf('[', dbStart);
  let bracketCount = 0;
  let arrayEndIndex = -1;
  for (let j = firstBracket; j < dataContent.length; j++) {
    if (dataContent[j] === '[') {
      bracketCount++;
    } else if (dataContent[j] === ']') {
      bracketCount--;
      if (bracketCount === 0) {
        arrayEndIndex = j;
        break;
      }
    }
  }

  const cbtExamsStr = dataContent.substring(firstBracket, arrayEndIndex + 1);
  const CBT_EXAMS_DATABASE = eval('(' + cbtExamsStr + ')');

  // Update only Mock 2, 3, 4, 5
  let updated = 0;
  CBT_EXAMS_DATABASE.forEach(exam => {
    if (cache[exam.id]) {
      exam.questions = cache[exam.id];
      exam.questionsCount = cache[exam.id].length;
      updated++;
    }
  });

  const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
  const newContent = dataContent.substring(0, firstBracket) + updatedCbtExamsStr + dataContent.substring(arrayEndIndex + 1);
  fs.writeFileSync('data.js', newContent);

  console.log(`Successfully merged ${updated} mock exams (including Mock 5) into data.js!`);
}

main();
