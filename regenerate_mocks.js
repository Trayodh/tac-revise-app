/**
 * regenerate_mocks.js
 * 
 * Identifies and regenerates all broken mock test papers in data.js using Gemini API.
 * Issues addressed:
 *   1. Question duplication (papers with only 15-30 unique Qs repeated to fill 100-120 slots)
 *   2. Math contamination in GS/GK papers
 *   3. Questions too straightforward (should be UPSC-analytical)
 * 
 * Usage: node regenerate_mocks.js [--dry-run] [--paper <paper-id>]
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('ERROR: GEMINI_API_KEY not found in .env');
  process.exit(1);
}

const DATA_JS_PATH = path.join(__dirname, 'data.js');
const BROKEN_THRESHOLD = 0.80; // Papers with < 80% unique questions are "broken"
const BATCH_DELAY_MS = 12000;  // 12s delay between API batches to avoid rate limiting
const PAPER_DELAY_MS = 15000;  // 15s delay between papers
const MAX_RETRIES = 3;         // Retry count for rate-limited requests
const MODEL = 'gemini-2.5-flash';

// ========================
// SUBJECT-SPECIFIC BLUEPRINTS (based on actual UPSC exam research)
// ========================

const BLUEPRINTS = {
  // NDA Mathematics: 120 Qs, 300 marks, 2.5 hrs. Covers Algebra through Calculus.
  'nda-math': {
    totalQs: 120,
    topics: [
      { name: 'Algebra (Sets, Relations, Functions, Complex Numbers, Quadratic Equations, Sequences & Series, Binomial Theorem, Permutations & Combinations)', qs: 30 },
      { name: 'Calculus (Limits, Continuity, Differentiation, Application of Derivatives, Integration, Definite Integrals, Differential Equations)', qs: 25 },
      { name: 'Trigonometry (Identities, Equations, Inverse Trigonometric Functions, Heights & Distances)', qs: 18 },
      { name: 'Matrices & Determinants (Types, Operations, Properties, Rank, System of Linear Equations)', qs: 12 },
      { name: 'Analytical Geometry (Straight Lines, Circles, Conic Sections, 3D Geometry, Direction Cosines)', qs: 15 },
      { name: 'Vector Algebra (Addition, Scalar & Cross Product, Applications)', qs: 8 },
      { name: 'Statistics & Probability (Mean, Median, Mode, Variance, Standard Deviation, Bayes Theorem, Probability Distributions)', qs: 12 }
    ],
    correctMarks: 2.5,
    incorrectMarks: -0.83,
    duration: 150,
    instructions: `You are generating an NDA Mathematics mock paper. The NDA Math paper is at 12th standard (CBSE Class 11-12) level.
Questions should test application of formulas and theorems, not just direct substitution.
Include at least 20% questions that require multi-step reasoning.
Mix difficulty: 30% Easy (direct formula application), 50% Medium (2-step problems), 20% Hard (multi-concept or tricky).
Use the exact UPSC NDA MCQ pattern: 4 options (A/B/C/D), one correct answer.
Each question MUST have a detailed explanation (2-3 sentences) showing the solution method.`
  },

  // CDS Mathematics: 100 Qs, 100 marks, 2 hrs. Simpler than NDA - no calculus, no matrices.
  'cds-math': {
    totalQs: 100,
    topics: [
      { name: 'Number System & HCF/LCM (Divisibility, Remainders, Prime Factorization)', qs: 10 },
      { name: 'Algebra (Polynomials, Linear Equations, Quadratic Equations, Inequalities, Progressions)', qs: 18 },
      { name: 'Arithmetic (Percentage, Profit & Loss, Simple & Compound Interest, Ratio & Proportion, Time & Work, Time & Distance, Averages, Mixtures)', qs: 22 },
      { name: 'Geometry (Triangles, Circles, Quadrilaterals, Polygons, Coordinate Geometry)', qs: 18 },
      { name: 'Mensuration (Area, Volume, Surface Area of 2D and 3D figures)', qs: 12 },
      { name: 'Trigonometry (Ratios, Identities, Heights & Distances — NO inverse trig, NO calculus)', qs: 10 },
      { name: 'Statistics & Probability (Mean, Median, Mode, Basic Probability, Data Interpretation)', qs: 10 }
    ],
    correctMarks: 1,
    incorrectMarks: -0.33,
    duration: 120,
    instructions: `You are generating a CDS Mathematics mock paper. CDS Math is at the Matriculation (10th–12th) level.
CRITICAL: CDS Math does NOT include Calculus, Matrices, Determinants, or Complex Numbers.
Questions should be conceptual and analytical, not just formula plugging.
Include word problems that require setting up equations.
Mix difficulty: 30% Easy, 50% Medium, 20% Hard.`
  },

  // NDA English: 50 Qs as part of GAT Paper-II
  'nda-english': {
    totalQs: 50,
    topics: [
      { name: 'Reading Comprehension (1 passage of 400-500 words, 5 questions based on inference, vocabulary in context, main idea, tone)', qs: 5 },
      { name: 'Spotting Errors / Error Detection (Grammar errors in sentences divided into parts)', qs: 8 },
      { name: 'Sentence Improvement / Correction (Replace underlined part with better alternative)', qs: 6 },
      { name: 'Synonyms and Antonyms (Choose the word most similar/opposite in meaning)', qs: 8 },
      { name: 'Idioms and Phrases (Meaning of given idiom/phrase)', qs: 4 },
      { name: 'One Word Substitution (Single word for a given description)', qs: 4 },
      { name: 'Fill in the Blanks / Cloze Test (Vocabulary and grammar in context)', qs: 5 },
      { name: 'Sentence Ordering / Rearrangement (Arrange jumbled sentences into a coherent paragraph)', qs: 4 },
      { name: 'Active-Passive Voice and Direct-Indirect Speech', qs: 3 },
      { name: 'Tenses, Subject-Verb Agreement, Parts of Speech', qs: 3 }
    ],
    correctMarks: 0.83,
    incorrectMarks: -0.27,
    duration: 50,
    instructions: `You are generating an NDA English mock paper. The English section tests grammar, vocabulary, and comprehension at the Higher Secondary (12th) level.
Reading comprehension passages should be 400-500 words each on diverse topics (science, history, philosophy, current events).
Questions should NOT be trivially obvious — distractors should be plausible.
For synonym/antonym questions, use words that a 12th-class student would encounter, not everyday words.
For error detection, include subtle errors (subject-verb agreement, tense consistency, preposition usage).`
  },

  // CDS English: 120 Qs, 100 marks, 2 hrs
  'cds-english': {
    totalQs: 120,
    topics: [
      { name: 'Reading Comprehension (3 passages, 5-7 questions each — inference, vocabulary, tone, main idea)', qs: 20 },
      { name: 'Spotting Errors (Identify grammatical errors in sentence parts)', qs: 20 },
      { name: 'Sentence Improvement (Replace underlined portion)', qs: 15 },
      { name: 'Synonyms (Choose the most similar word)', qs: 12 },
      { name: 'Antonyms (Choose the most opposite word)', qs: 10 },
      { name: 'Idioms and Phrases (Meaning of given expression)', qs: 10 },
      { name: 'One Word Substitution', qs: 8 },
      { name: 'Fill in the Blanks (Vocabulary and preposition usage)', qs: 10 },
      { name: 'Ordering of Sentences / Para Jumbles', qs: 8 },
      { name: 'Cloze Test (Passage with blanks to fill)', qs: 7 }
    ],
    correctMarks: 0.83,
    incorrectMarks: -0.27,
    duration: 120,
    instructions: `You are generating a CDS English mock paper. CDS English tests vocabulary, grammar, and comprehension at a graduate level — it's slightly harder than NDA English.
Comprehension passages should cover topics like defence, governance, science, and abstract philosophy.
Vocabulary questions should test nuanced understanding — include words like 'perfunctory', 'stolid', 'truculent', 'sanguine'.`
  },

  // NDA General Studies (part of GAT Paper-II): 120 Qs — NO MATHEMATICS
  'nda-gs': {
    totalQs: 120,
    topics: [
      { name: 'Indian History (Ancient: Indus Valley, Vedic Age, Mauryas, Guptas; Medieval: Delhi Sultanate, Mughals, Bhakti-Sufi; Modern: British Rule, Freedom Movement, Governor-Generals, Constitutional Development)', qs: 20 },
      { name: 'Indian Polity & Governance (Constitution, Fundamental Rights, DPSP, Parliament, President, Judiciary, Amendments, Constitutional Bodies, Panchayati Raj)', qs: 14 },
      { name: 'Geography (Physical: Universe, Atmosphere, Geomorphology; Indian: Rivers, Mountains, National Parks, Agriculture, Transport; World: Continents, Straits, Deserts)', qs: 16 },
      { name: 'Physics (Mechanics, Optics, Sound, Heat, Electricity & Magnetism, Nuclear Physics, Units & Measurements)', qs: 14 },
      { name: 'Chemistry (Acids-Bases-Salts, Metals & Non-Metals, Carbon Compounds, Chemical Reactions, Everyday Chemistry, Environmental Chemistry)', qs: 10 },
      { name: 'Biology (Cell Biology, Human Systems, Diseases & Immunity, Plant & Animal Kingdom, Ecology, Genetics basics)', qs: 12 },
      { name: 'Economics (Basic Concepts, Monetary Policy, Fiscal Policy, Five Year Plans, Indian Economy, Trade & BoP)', qs: 8 },
      { name: 'Environment & Ecology (Biodiversity, Conservation, Treaties, Protected Areas, Pollution, Climate Change)', qs: 8 },
      { name: 'Defence & Military (Bilateral Exercises, Missiles & Weapons, Commands, Rank Equivalence, Defence Organizations)', qs: 8 },
      { name: 'Current Affairs & General Knowledge (Awards, Appointments, Sports, Science & Technology, International Events)', qs: 10 }
    ],
    correctMarks: 0.83,
    incorrectMarks: -0.27,
    duration: 120,
    instructions: `You are generating an NDA General Studies mock paper. This is for the GAT (General Ability Test) Paper-II.
CRITICAL RULE: This paper MUST NOT contain ANY pure Mathematics questions. No trigonometry, calculus, matrices, quadratic equations, polynomials, or algebra. 
Physics and Chemistry questions involving numbers are fine (e.g., "The SI unit of force is?" or "What is the pH of a neutral solution?"), but NO abstract mathematical problem-solving.
Questions should follow the UPSC pattern:
- Use multi-statement questions ("Consider the following statements: 1... 2... 3... Which is/are correct?")
- Include assertion-reason questions
- Test application and analysis, not just factual recall
- Use map-based questions for Geography
- Include at least 5 defence/military specific questions
At least 40% of questions should be analytical/application-based, not simple one-liner recall.`
  },

  // CDS General Knowledge: 120 Qs, 100 marks — NO MATHEMATICS
  'cds-gk': {
    totalQs: 120,
    topics: [
      { name: 'Current Affairs (National & International events, Government Schemes, Defence News, Summits, Awards)', qs: 22 },
      { name: 'History (Ancient, Medieval, Modern India — focus on Freedom Struggle, Governor-Generals, Socio-Religious Reforms, World Wars, International Institutions)', qs: 20 },
      { name: 'Geography (Indian & World Geography — Rivers, Mountains, National Parks, Climate, Agriculture, Industries, Straits, Capitals)', qs: 16 },
      { name: 'Indian Polity (Constitution, Fundamental Rights, DPSP, Parliament, Judiciary, Election, Constitutional Bodies, Amendments)', qs: 16 },
      { name: 'Economics (Indian Economy, Banking, Fiscal & Monetary Policy, Five Year Plans, Government Schemes, International Trade)', qs: 14 },
      { name: 'Physics (Laws of Motion, Optics, Sound, Heat, Electricity, Nuclear Physics, Units)', qs: 10 },
      { name: 'Chemistry (Chemical Reactions, Acids-Bases, Metals, Organic Chemistry basics, Everyday Chemistry)', qs: 8 },
      { name: 'Biology (Human Body Systems, Diseases, Nutrition, Ecology, Cell Biology, Genetics)', qs: 8 },
      { name: 'Defence Knowledge (Military Exercises, Weapons, Commands, Organizations)', qs: 6 }
    ],
    correctMarks: 0.83,
    incorrectMarks: -0.27,
    duration: 120,
    instructions: `You are generating a CDS General Knowledge mock paper.
CRITICAL RULE: This paper MUST NOT contain ANY pure Mathematics questions. No trigonometry, calculus, matrices, quadratic equations, polynomials, or algebra.
Science questions should be factual/conceptual (not computational).
CDS GK tests at a GRADUATE level — questions should be deeper and more analytical than NDA.
Use UPSC-style multi-statement questions frequently.
Include "Match the following" and "Correct chronological order" question types.`
  },

  // AFCAT Combined: 100 Qs, 300 marks — English (30), GK (25), Numerical (20), Reasoning (25)
  'afcat-combined': {
    totalQs: 100,
    topics: [
      { name: 'General Awareness (History, Geography, Polity, Current Affairs, Defence, Science, Art & Culture, Sports)', qs: 25 },
      { name: 'English (Comprehension, Error Detection, Sentence Completion, Synonyms, Antonyms, Idioms, Cloze Test)', qs: 30 },
      { name: 'Numerical Ability (Percentage, Profit & Loss, Ratio & Proportion, Time & Work, Time & Distance, Averages, Simple & Compound Interest, Number System — MATRICULATION LEVEL ONLY)', qs: 20 },
      { name: 'Reasoning & Military Aptitude (Verbal Reasoning: Analogies, Series, Coding-Decoding, Blood Relations, Syllogisms; Non-Verbal: Figure Completion, Pattern Recognition, Mirror/Water Images, Cube & Dice)', qs: 25 }
    ],
    correctMarks: 3,
    incorrectMarks: -1,
    duration: 120,
    instructions: `You are generating an AFCAT Combined mock paper. AFCAT tests at the graduate level for General Awareness and English, but only at the Matriculation (10th standard) level for Numerical Ability.
CRITICAL: Numerical Ability questions should be simple arithmetic — Percentage, Profit/Loss, Time/Work, Averages. NO calculus, NO trigonometry (beyond basic ratios), NO matrices, NO complex numbers.
Reasoning questions should include both verbal (coding-decoding, analogies, series) and non-verbal (figure patterns, spatial reasoning) types.
General Awareness must include at least 3 defence/IAF-specific questions.
English questions should test practical grammar and vocabulary.`
  }
};

// Map exam IDs to blueprint keys
function getBlueprintKey(exam) {
  const id = exam.id.toLowerCase();
  const subject = exam.subject.toLowerCase();
  
  if (id.includes('afcat')) return 'afcat-combined';
  
  const examType = id.includes('nda') ? 'nda' : 'cds';
  
  if (subject.includes('math')) return `${examType}-math`;
  if (subject.includes('english')) return `${examType}-english`;
  // GS, GK, General Studies, General Knowledge, General Ability Test, General Test
  return `${examType}-gs`; // Map all GS variants to gs blueprint (which has NO MATH)
}

// ========================
// LOAD AND PARSE data.js
// ========================

function loadExamsDatabase() {
  const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
  const startMarker = 'const CBT_EXAMS_DATABASE = [';
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) throw new Error('CBT_EXAMS_DATABASE not found in data.js');
  
  const cbtSection = content.substring(startIdx);
  const modifiedSection = cbtSection.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
  
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(modifiedSection, sandbox);
  
  return { db: sandbox.CBT_EXAMS_DATABASE, startIdx, fullContent: content };
}

// ========================
// IDENTIFY BROKEN PAPERS
// ========================

function identifyBrokenPapers(db) {
  const broken = [];
  db.forEach((exam, idx) => {
    const uniqueQs = new Set(exam.questions.map(q => q.question)).size;
    const ratio = uniqueQs / exam.questions.length;
    if (ratio < BROKEN_THRESHOLD) {
      broken.push({ exam, idx, uniqueQs, totalQs: exam.questions.length, ratio });
    }
  });
  return broken;
}

// ========================
// GENERATE QUESTIONS VIA GEMINI API
// ========================

async function generateQuestionsForPaper(exam, blueprint, batchNum, totalBatches) {
  const qsPerBatch = Math.ceil(blueprint.totalQs / totalBatches);
  const startQ = batchNum * qsPerBatch + 1;
  const endQ = Math.min((batchNum + 1) * qsPerBatch, blueprint.totalQs);
  const batchSize = endQ - startQ + 1;
  
  // Calculate topic distribution for this batch
  const topicsForBatch = [];
  let remaining = batchSize;
  blueprint.topics.forEach(topic => {
    const topicQsInBatch = Math.round((topic.qs / blueprint.totalQs) * batchSize);
    const actual = Math.min(topicQsInBatch, remaining);
    if (actual > 0) {
      topicsForBatch.push({ name: topic.name, qs: actual });
      remaining -= actual;
    }
  });
  // Distribute any remainder
  if (remaining > 0 && topicsForBatch.length > 0) {
    topicsForBatch[0].qs += remaining;
  }

  const topicDistribution = topicsForBatch.map(t => `- ${t.name}: ${t.qs} questions`).join('\n');

  const prompt = `${blueprint.instructions}

EXAM: ${exam.exam} — ${exam.subject}
PAPER: ${exam.title} (Batch ${batchNum + 1}/${totalBatches})

Generate exactly ${batchSize} unique, high-quality MCQ questions (questions ${startQ} to ${endQ}).

TOPIC DISTRIBUTION FOR THIS BATCH:
${topicDistribution}

QUESTION QUALITY REQUIREMENTS:
1. Each question must be UNIQUE — no two questions should test the same fact or concept in the same way.
2. Follow UPSC question DNA: analytical, multi-step, elimination-based. NOT simple factual recall.
3. For GK/GS papers, use multi-statement format frequently ("Consider the following statements: 1... 2... Which are correct?")
4. Distractors must be PLAUSIBLE — not obviously wrong.
5. Explanations must be DETAILED (2-3 sentences minimum), showing WHY the correct answer is right AND why key distractors are wrong.

OUTPUT FORMAT: Return ONLY a valid JSON array of question objects. No markdown fences, no commentary.
Each question object must have exactly these fields:
{
  "question": "The question text",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct": 0,  // 0-indexed (0=A, 1=B, 2=C, 3=D)
  "explanation": "Detailed explanation..."
}

IMPORTANT: 
- Return ONLY the JSON array. No markdown formatting. No \`\`\`json blocks.
- Ensure all strings are properly escaped for JSON.
- Do NOT use any emojis.
- The "correct" field must be a number 0-3.`;

  const models = [MODEL, 'gemini-2.0-flash'];
  
  for (let retry = 0; retry < MAX_RETRIES; retry++) {
    for (const model of models) {
      try {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.85,
              maxOutputTokens: 65536,
              response_mime_type: 'application/json'
            }
          })
        });
        
        if (!response.ok) {
          const status = response.status;
          const errText = await response.text();
          console.warn(`  [WARN] Model ${model} returned ${status}: ${errText.substring(0, 150)}`);
          
          // On rate limit or server overload, wait and retry
          if (status === 429 || status === 503) {
            const backoffMs = Math.min(15000 * Math.pow(2, retry), 90000); // 15s, 30s, 60s
            console.log(`  [BACKOFF] Rate limited. Waiting ${backoffMs / 1000}s before retry ${retry + 1}/${MAX_RETRIES}...`);
            await delay(backoffMs);
            break; // break inner model loop to retry with fresh model list
          }
          continue; // try next model
        }
        
        const data = await response.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const cleaned = rawText.replace(/^```json\s*/g, '').replace(/\s*```$/g, '').trim();
        
        let questions;
        try {
          questions = JSON.parse(cleaned);
        } catch (parseErr) {
          // Try to fix common JSON issues
          const fixedText = cleaned
            .replace(/,\s*]/g, ']')
            .replace(/,\s*}/g, '}')
            .replace(/\n/g, '\\n');
          try {
            questions = JSON.parse(fixedText);
          } catch (e2) {
            console.warn(`  [WARN] JSON parse failed for model ${model}, batch ${batchNum + 1}`);
            continue;
          }
        }
        
        if (!Array.isArray(questions)) {
          console.warn(`  [WARN] Model ${model} did not return an array, got: ${typeof questions}`);
          continue;
        }
        
        // Validate question structure
        const validQuestions = questions.filter(q => 
          q.question && 
          Array.isArray(q.options) && 
          q.options.length === 4 && 
          typeof q.correct === 'number' && 
          q.correct >= 0 && 
          q.correct <= 3 &&
          q.explanation
        );
        
        console.log(`  [OK] Model ${model} returned ${validQuestions.length}/${batchSize} valid Qs for batch ${batchNum + 1}`);
        return validQuestions;
        
      } catch (err) {
        console.warn(`  [ERR] Model ${model} failed: ${err.message}`);
      }
    }
  }
  
  console.warn(`  [EXHAUSTED] All retries exhausted for batch ${batchNum + 1}`);
  return [];
}

async function regeneratePaper(exam, existingQuestionsAcrossPapers) {
  const bpKey = getBlueprintKey(exam);
  const blueprint = BLUEPRINTS[bpKey];
  if (!blueprint) {
    console.warn(`  [SKIP] No blueprint found for key "${bpKey}" (exam: ${exam.id})`);
    return null;
  }
  
  console.log(`\n[REGENERATING] ${exam.id} | ${exam.subject} | Target: ${blueprint.totalQs} Qs | Blueprint: ${bpKey}`);
  
  // Split into batches of ~40 questions each (Gemini handles this size well)
  const BATCH_SIZE = 40;
  const totalBatches = Math.ceil(blueprint.totalQs / BATCH_SIZE);
  
  let allQuestions = [];
  
  for (let batch = 0; batch < totalBatches; batch++) {
    console.log(`  Generating batch ${batch + 1}/${totalBatches}...`);
    
    const batchQs = await generateQuestionsForPaper(exam, blueprint, batch, totalBatches);
    allQuestions = allQuestions.concat(batchQs);
    
    if (batch < totalBatches - 1) {
      await delay(BATCH_DELAY_MS);
    }
  }
  
  // Deduplicate within this paper
  const seen = new Set();
  const deduped = [];
  for (const q of allQuestions) {
    const key = q.question.trim().toLowerCase().substring(0, 80);
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(q);
    }
  }
  
  // Cross-paper deduplication
  const finalQs = [];
  for (const q of deduped) {
    const crossKey = q.question.trim().toLowerCase().substring(0, 80);
    if (!existingQuestionsAcrossPapers.has(crossKey)) {
      existingQuestionsAcrossPapers.add(crossKey);
      finalQs.push(q);
    }
  }
  
  console.log(`  [RESULT] Generated: ${allQuestions.length} | After dedup: ${deduped.length} | After cross-paper: ${finalQs.length} | Target: ${blueprint.totalQs}`);
  
  // If we're short, trim target to what we have (still much better than 15 unique!)
  const targetCount = Math.min(finalQs.length, blueprint.totalQs);
  
  return {
    questions: finalQs.slice(0, targetCount),
    questionsCount: targetCount,
    duration: blueprint.duration,
    rules: {
      correctMarks: blueprint.correctMarks,
      incorrectMarks: blueprint.incorrectMarks,
      examType: exam.exam
    }
  };
}

// ========================
// WRITE BACK TO data.js
// ========================

function writeBackToDataJs(fullContent, startIdx, updatedDb) {
  const beforeCbt = fullContent.substring(0, startIdx);
  const serialized = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(updatedDb, null, 2) + ';\n';
  const newContent = beforeCbt + serialized;
  
  // Backup original
  const backupPath = DATA_JS_PATH + '.pre_regen_backup';
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(DATA_JS_PATH, backupPath);
    console.log(`\n[BACKUP] Original data.js backed up to data.js.pre_regen_backup`);
  }
  
  fs.writeFileSync(DATA_JS_PATH, newContent, 'utf8');
  console.log(`[SAVED] Updated data.js (${(newContent.length / 1024 / 1024).toFixed(2)} MB)`);
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ========================
// MAIN
// ========================

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const singlePaper = args.includes('--paper') ? args[args.indexOf('--paper') + 1] : null;
  
  console.log('=== MOCK TEST REGENERATION ENGINE ===');
  console.log(`Mode: ${dryRun ? 'DRY RUN' : 'LIVE'}`);
  if (singlePaper) console.log(`Target: Single paper — ${singlePaper}`);
  
  // Load database
  const { db, startIdx, fullContent } = loadExamsDatabase();
  console.log(`Loaded ${db.length} exam papers from data.js`);
  
  // Identify broken papers
  const broken = identifyBrokenPapers(db);
  console.log(`\nFound ${broken.length} broken papers (< ${BROKEN_THRESHOLD * 100}% unique questions):`);
  broken.forEach(b => {
    console.log(`  ${b.exam.id}: ${b.uniqueQs}/${b.totalQs} unique (${(b.ratio * 100).toFixed(0)}%)`);
  });
  
  if (dryRun) {
    console.log('\n[DRY RUN] Exiting without making changes.');
    return;
  }
  
  // Build cross-paper dedup set from GOOD papers
  const crossPaperSet = new Set();
  db.forEach(exam => {
    const uniqueQs = new Set(exam.questions.map(q => q.question)).size;
    const ratio = uniqueQs / exam.questions.length;
    if (ratio >= BROKEN_THRESHOLD) {
      // This is a good paper — add its questions to the cross-paper set
      exam.questions.forEach(q => {
        crossPaperSet.add(q.question.trim().toLowerCase().substring(0, 80));
      });
    }
  });
  console.log(`\nCross-paper dedup set initialized with ${crossPaperSet.size} questions from good papers.`);
  
  // Filter broken papers
  let papersToRegenerate = broken;
  if (singlePaper) {
    papersToRegenerate = broken.filter(b => b.exam.id === singlePaper);
    if (papersToRegenerate.length === 0) {
      console.error(`Paper ${singlePaper} not found or not broken.`);
      process.exit(1);
    }
  }
  
  // Regenerate each broken paper
  let successCount = 0;
  let failCount = 0;
  
  for (let i = 0; i < papersToRegenerate.length; i++) {
    const { exam, idx } = papersToRegenerate[i];
    
    console.log(`\n--- Paper ${i + 1}/${papersToRegenerate.length} ---`);
    
    const result = await regeneratePaper(exam, crossPaperSet);
    
    if (result && result.questions.length >= 20) {
      // Update the database entry
      db[idx].questions = result.questions;
      db[idx].questionsCount = result.questionsCount;
      db[idx].duration = result.duration;
      db[idx].rules = result.rules;
      successCount++;
      
      // Save incrementally every 5 papers
      if (successCount % 5 === 0) {
        writeBackToDataJs(fullContent, startIdx, db);
        console.log(`[CHECKPOINT] Saved after ${successCount} papers.`);
      }
    } else {
      console.warn(`  [FAILED] Could not generate sufficient questions for ${exam.id}`);
      failCount++;
    }
    
    // Rate limiting between papers
    if (i < papersToRegenerate.length - 1) {
      console.log(`  Waiting ${PAPER_DELAY_MS / 1000}s before next paper...`);
      await delay(PAPER_DELAY_MS);
    }
  }
  
  // Final save
  if (successCount > 0) {
    writeBackToDataJs(fullContent, startIdx, db);
  }
  
  console.log(`\n=== REGENERATION COMPLETE ===`);
  console.log(`Success: ${successCount} | Failed: ${failCount} | Total: ${papersToRegenerate.length}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
