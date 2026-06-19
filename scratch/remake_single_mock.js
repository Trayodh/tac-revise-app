require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CACHE_FILE = 'scratch/generated_questions.json';

// Topic focuses mapping based on mock index to ensure diversity and comprehensive syllabus coverage
const TOPIC_FOCUS = {
  'NDA_Mathematics': 'Full comprehensive NDA Mathematics syllabus. Replicate actual UPSC topic weightages: Algebra & Quadratic Equations/Complex Numbers (25%), Matrices & Determinants (10%), Trigonometry (15%), Coordinate Geometry 2D & 3D (15%), Differential & Integral Calculus (20%), Vector Algebra & 3D Geometry (10%), and Probability & Statistics (5%).',
  'CDS_Mathematics': 'Full comprehensive CDS Elementary Mathematics syllabus. Replicate actual UPSC topic weightages: Number System (20%), Arithmetic (Time/Work, Time/Distance, Profit/Loss, SI/CI, Percentages, Ratio, Partnership) (20%), Mensuration (2D & 3D Areas & Volumes) (15%), Geometry (Triangles, Circles, Theorems) (15%), Trigonometry (10%), Algebra (Basic operations, equations) (15%), and Statistics (Histograms, Mean/Median/Mode) (5%).',
  'English': 'Full comprehensive English syllabus for NDA/CDS. Replicate actual UPSC topic weightages: Spotting Errors (20%), Sentence Improvement (15%), Reading Comprehension (15%), Synonyms & Antonyms (20%), Fill in the Blanks & Cloze Test (15%), Ordering of Words/Sentences (Para Jumbles) (15%).',
  'General Studies': 'Full comprehensive General Knowledge / GK / GAT syllabus. Replicate actual UPSC topic weightages: General Science (Physics [25%], Chemistry [15%], Biology/General Science [10%]) (50% overall), History & Indian Freedom Struggle (15%), Geography (Physical, Indian, World) (15%), Indian Polity & Constitution (10%), Indian Economy & Schemes (5%), and Current Affairs & Military GK (National/International news, Defence exercises, space missions, commands, awards) (5%).',
  'General Ability Test': 'Full comprehensive General Knowledge / GK / GAT syllabus. Replicate actual UPSC topic weightages: General Science (Physics [25%], Chemistry [15%], Biology/General Science [10%]) (50% overall), History & Indian Freedom Struggle (15%), Geography (Physical, Indian, World) (15%), Indian Polity & Constitution (10%), Indian Economy & Schemes (5%), and Current Affairs & Military GK (National/International news, Defence exercises, space missions, commands, awards) (5%).',
  'General Knowledge': 'Full comprehensive General Knowledge / GK / GAT syllabus. Replicate actual UPSC topic weightages: General Science (Physics [25%], Chemistry [15%], Biology/General Science [10%]) (50% overall), History & Indian Freedom Struggle (15%), Geography (Physical, Indian, World) (15%), Indian Polity & Constitution (10%), Indian Economy & Schemes (5%), and Current Affairs & Military GK (National/International news, Defence exercises, space missions, commands, awards) (5%).',
  'Combined': 'Full comprehensive AFCAT Combined syllabus. Replicate actual AFCAT topic weightages: Verbal Ability in English (25%), General Awareness (History, Geography, Polity, Science, Military GK, Current Affairs) (25%), Numerical Ability (Arithmetic, Percentages, SI/CI, Profit/Loss) (25%), and Reasoning & Military Aptitude Test (Analogies, Series, Venn diagrams, non-verbal reasoning) (25%).'
};

const EXAM_TARGETS = [
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-math-mock-${i + 2}`, exam: 'NDA', subject: 'Mathematics', mockNum: i + 2, count: 100 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-math-mock-${i + 2}`, exam: 'CDS', subject: 'Mathematics', mockNum: i + 2, count: 100 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-english-mock-${i + 2}`, exam: 'NDA', subject: 'English', mockNum: i + 2, count: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-gs-mock-${i + 2}`, exam: 'NDA', subject: 'General Studies', mockNum: i + 2, count: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-english-mock-${i + 2}`, exam: 'CDS', subject: 'English', mockNum: i + 2, count: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-gs-mock-${i + 2}`, exam: 'CDS', subject: 'General Studies', mockNum: i + 2, count: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `afcat-combined-mock-${i + 4}`, exam: 'AFCAT', subject: 'Combined', mockNum: i + 4, count: 100 })),
  ...Array.from({ length: 5 }, (_, i) => ({ id: `nda-gat-coaching-mock-${i + 2}`, exam: 'NDA', subject: 'General Ability Test', mockNum: i + 2, count: 120 })),
  ...Array.from({ length: 5 }, (_, i) => ({ id: `cds-gk-coaching-mock-${i + 2}`, exam: 'CDS', subject: 'General Knowledge', mockNum: i + 2, count: 120 }))
];

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
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(60000)
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
  const targetId = process.argv[2];
  if (!targetId) {
    console.error("Please provide an exam ID as an argument. Example: node scratch/remake_single_mock.js nda-math-mock-6");
    process.exit(1);
  }

  const target = EXAM_TARGETS.find(t => t.id === targetId);
  if (!target) {
    console.error(`Unknown exam ID: ${targetId}`);
    process.exit(1);
  }

  console.log(`=== Remaking Exam: ${target.id} (${target.exam} - ${target.subject}) ===`);
  
  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  }

  let questions = cache[target.id] || [];
  console.log(`Current questions in cache: ${questions.length}/${target.count}`);

  const subjectKey = `${target.exam}_${target.subject}`;
  const focus = TOPIC_FOCUS[subjectKey] || TOPIC_FOCUS[target.subject] || 'Full Mixed Syllabus';
  console.log(`Focus Area: ${focus}`);

  while (questions.length < target.count) {
    const currentBatchCount = Math.min(10, target.count - questions.length);
    console.log(`Generating batch of ${currentBatchCount} questions...`);

    const prompt = `You are the complete AI Examination Authority (moderated by UPSC NDA/CDS paper setters). Generate exactly ${currentBatchCount} unique, high-quality multiple-choice questions for the UPSC ${target.exam} ${target.subject} exam, Mock Test #${target.mockNum}.

Target focus area: ${focus}.
Target Candidate: Serious Aspirant & Top 10% Merit Candidate.
Difficulty Distribution: 20% Easy (solve <45s), 50% Moderate (solve <2m), 30% Difficult (solve 2-4m).
Composition: 70% Historical Pattern, 20% Emerging Trends, 10% Future Prediction.

Blueprint & DNA Requirements:
1. Replicate actual UPSC question DNA: prefer statement-based (e.g. 1 and 2 only), Assertion-Reason, Match the Following, and multi-statement elimination.
2. Interdisciplinary Knowledge: at least 20% of questions must combine multiple topics (e.g., Algebra + Geometry, Trigonometry + Coordinate geometry).
3. Stress Simulation: include difficult-looking easy questions, time traps, and concept traps.
4. Advanced Distractors: options must arise from common calculation errors, partial knowledge, or conceptual misconceptions. No joke options.
5. Anti-AI Detection: use natural, human-like, non-formulaic wording, varied sentence structures, and unpredictable option placement.

Format the output strictly as a JSON array of objects. Do not include markdown code block formatting (no \`\`\`json). Just the raw JSON array.
Each object must have exactly these keys:
- "question": string (concise, professional, clear. If math, use standard notation like ^, sqrt, etc.)
- "options": array of exactly 4 strings
- "correct": number (index of correct option 0-3)
- "explanation": string (step-by-step detailed mathematical/conceptual derivation and solution)

All questions must be unique.`;

    try {
      const batchQuestions = await queryGemini(prompt);
      if (Array.isArray(batchQuestions) && batchQuestions.length > 0) {
        questions.push(...batchQuestions);
        cache[target.id] = questions;
        fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
        console.log(`Added ${batchQuestions.length} questions. Total: ${questions.length}/${target.count}`);
      } else {
        console.log("Error: Invalid response array. Retrying...");
      }
    } catch (e) {
      console.log(`Fatal error during batch generation: ${e.message}. Retrying in 10s...`);
      await sleep(10000);
    }
    await sleep(4000);
  }

  console.log("Mock exam fully generated! Merging into data.js...");
  const dataContent = fs.readFileSync('data.js', 'utf8');
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found!");
    process.exit(1);
  }

  let firstBracket = dataContent.indexOf('[', dbStart);
  let arrayEndIndex = dataContent.lastIndexOf(']');
  if (firstBracket === -1 || arrayEndIndex === -1 || arrayEndIndex <= firstBracket) {
    console.error("Failed to find bounds of CBT_EXAMS_DATABASE array!");
    process.exit(1);
  }

  const code = dataContent + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
  const m = new module.constructor();
  let CBT_EXAMS_DATABASE;
  try {
    m._compile(code, 'data.js');
    CBT_EXAMS_DATABASE = m.exports.CBT_EXAMS_DATABASE;
  } catch (e) {
    console.error("Failed to parse CBT_EXAMS_DATABASE:", e.message);
    process.exit(1);
  }

  // Update only the targeted exam
  CBT_EXAMS_DATABASE.forEach(exam => {
    if (exam.id === target.id) {
      exam.questions = questions;
      exam.questionsCount = questions.length;
    }
  });

  const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
  const newContent = dataContent.substring(0, firstBracket) + updatedCbtExamsStr + dataContent.substring(arrayEndIndex + 1);
  fs.writeFileSync('data.js', newContent);

  console.log(`Successfully merged ${target.id} into data.js!`);
}

main();
