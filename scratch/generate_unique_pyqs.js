require('dotenv').config();
const fs = require('fs');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CACHE_FILE = 'scratch/generated_questions.json';

// Target list of exams to regenerate (mocks that are currently duplicates)
const EXAMS_TO_REGENERATE = [
  // NDA Mathematics: keep mock-1, regenerate 2-10
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-math-mock-${i + 2}`, exam: 'NDA', subject: 'Mathematics', mockNum: i + 2, count: 100 })),
  // CDS Mathematics: keep mock-1, regenerate 2-10
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-math-mock-${i + 2}`, exam: 'CDS', subject: 'Mathematics', mockNum: i + 2, count: 100 })),
  // NDA English: keep mock-1, regenerate 2-10
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-english-mock-${i + 2}`, exam: 'NDA', subject: 'English', mockNum: i + 2, count: 120 })),
  // NDA General Studies: keep mock-1, regenerate 2-10
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-gs-mock-${i + 2}`, exam: 'NDA', subject: 'General Studies', mockNum: i + 2, count: 120 })),
  // CDS English: keep mock-1, regenerate 2-10
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-english-mock-${i + 2}`, exam: 'CDS', subject: 'English', mockNum: i + 2, count: 120 })),
  // CDS General Studies: keep mock-1, regenerate 2-10
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-gs-mock-${i + 2}`, exam: 'CDS', subject: 'General Studies', mockNum: i + 2, count: 120 })),
  // AFCAT Combined: keep mock-1, 2, 3, regenerate 4-12
  ...Array.from({ length: 9 }, (_, i) => ({ id: `afcat-combined-mock-${i + 4}`, exam: 'AFCAT', subject: 'Combined', mockNum: i + 4, count: 100 })),
  // NDA GAT: keep mock-1, regenerate 2-6
  ...Array.from({ length: 5 }, (_, i) => ({ id: `nda-gat-coaching-mock-${i + 2}`, exam: 'NDA', subject: 'General Ability Test', mockNum: i + 2, count: 120 })),
  // CDS GK: keep mock-1, regenerate 2-6
  ...Array.from({ length: 5 }, (_, i) => ({ id: `cds-gk-coaching-mock-${i + 2}`, exam: 'CDS', subject: 'General Knowledge', mockNum: i + 2, count: 120 }))
];

// Topic focuses mapping based on mock index to ensure diversity and comprehensive syllabus coverage
const TOPIC_FOCUS = {
  'Mathematics': {
    2: 'Algebra: Sets, Relations, Functions, Logarithms, Progressions (AP/GP), Permutations & Combinations, Binomial Theorem',
    3: 'Complex Numbers, Quadratic Equations, and Nature of Roots',
    4: 'Matrices, Determinants, System of Linear Equations (Cramer\'s Rule), Adjoint and Inverse',
    5: 'Trigonometry: Ratios, Identities, Properties of Triangles, Heights & Distances, and Inverse Trigonometric Functions',
    6: 'Coordinate Geometry: Straight Lines, Circles, Parabola, Ellipse, Hyperbola (2D & 3D coordinate geometry)',
    7: 'Differential Calculus: Limits, Continuity, Differentiability, Derivatives, Tangents/Normals, and Maxima/Minima',
    8: 'Integral Calculus: Indefinite and Definite Integrals, Area under curves, and Ordinary Differential Equations',
    9: 'Vector Algebra and Three-Dimensional Geometry',
    10: 'Probability & Statistics: Measures of Central Tendency, Dispersion, Coefficient of Variation, Bayes\' Theorem, Binomial Distribution'
  },
  'English': {
    2: 'Spotting Errors & Sentence Improvement focusing on Subject-Verb Agreement, Tenses, Pronouns, and Prepositions',
    3: 'Synonyms & Antonyms from high-yield academic, defense, and news editorial vocabulary',
    4: 'Idioms & Phrases, Phrasal Verbs, and Word Substitution',
    5: 'Ordering of Words in a Sentence & Ordering of Sentences in a Paragraph (S1-S6 para-jumbles)',
    6: 'Cloze Test & Fill in the Blanks focusing on Prepositions, Conjunctions, and Determiners',
    7: 'Reading Comprehension with short and long passages, focusing on theme, tone, and inference-based questions',
    8: 'Parts of Speech identification (Gerunds, Participles, Adverbs) and Sentence Transformation',
    9: 'Active-Passive Voice conversion and Direct-Indirect Speech narration rules',
    10: 'Mixed Full English Syllabus Mock containing all standard UPSC NDA/CDS formats'
  },
  'General Studies': {
    2: 'Physics: Optics (mirrors, lenses, TIR), Mechanics (Newton\'s laws, work-energy), Electricity & Magnetism, Wave/Sound, Heat & Thermodynamics',
    3: 'Chemistry: Acids & Bases, pH scale, Periodic Table trends, Chemical Bonding, Metals & Alloys, Carbon compounds, Everyday chemistry',
    4: 'Biology: Cell Biology, Human Physiology Systems (Endocrine, Circulatory, Excretory), Plant & Animal Kingdoms, Diseases & Immunity, Ecology',
    5: 'History: Ancient Indian History (Indus Valley, Vedic Age, Buddhism/Jainism, Mauryas, Guptas) and Art, Architecture & Culture',
    6: 'History: Medieval India (Delhi Sultanate, Mughals, Vijayanagara) and Modern India (Revolt of 1857, British policies, Freedom struggle)',
    7: 'Geography: Physical Geography (Universe, Earth structure, Atmosphere, Climatology, Geomorphology, Plate tectonics)',
    8: 'Geography: Indian Geography (Rivers, Forests, Soils, National Parks) and World Geography strategic mappings (Straits, Deserts)',
    9: 'Indian Polity: Constitutional Framework, Preamble, Fundamental Rights, Parliament, Judiciary, Local Governments, Emergency provisions',
    10: 'Economics (RBI Monetary Policy, Budget, Sectors) & Current Affairs (Govt schemes, Space missions, Defence updates, International Summits)'
  },
  'General Ability Test': {
    2: 'Physics (Optics & Mechanics) and Chemistry (Everyday chemistry, acids/bases)',
    3: 'Biology (Cell, diseases) and History (Ancient/Medieval India)',
    4: 'History (Modern India, World History) and Geography (Physical Geography)',
    5: 'Geography (Indian/World Mapping) and Indian Polity (Rights, Parliament)',
    6: 'Economics (Budget, RBI) and Current Affairs (Defence tech, space, summits)'
  },
  'General Knowledge': {
    2: 'History (Ancient & Medieval India) and Art & Culture',
    3: 'History (Modern Indian Freedom Struggle, British land revenue, Constitutional development)',
    4: 'Geography (Physical, Indian, and World Geography mapping & resources)',
    5: 'Polity (Fundamental Rights, Parliament, Judiciary, Local bodies, Amendments)',
    6: 'Economics (National Income, RBI, Trade, Budget) and Current Affairs (Schemes, Bilateral exercises, Space)'
  },
  'Combined': {
    4: 'Numerical Ability: Arithmetic, Percentages, Profit & Loss, Ratios, Partnerships, Averages',
    5: 'Numerical Ability: Time & Work, Time & Distance, Speed, Relative Speed (Trains, Boats & Streams)',
    6: 'Verbal Reasoning: Coding-Decoding, Blood Relations, Direction Sense, Syllogisms, Statement-Assumption',
    7: 'Non-Verbal Reasoning: Series, Analogy, Classification, Pattern completion, Paper cutting/folding, Spatial ability',
    8: 'English Verbal Ability: Error detection, Sentence improvement, Synonyms/Antonyms, Idioms & Phrases',
    9: 'General Awareness: Indian History (Ancient to Modern) and Geography (Indian & World)',
    10: 'General Awareness: Indian Polity, Basic Science (Physics, Chemistry, Biology), and Defence Organizations/Commands',
    11: 'General Awareness: Current Affairs (Govt schemes, awards, space, exercises) and Military GK',
    12: 'AFCAT Full-Length Mixed Syllabus Mock Test with balanced question distribution'
  }
};

// Sleep helper
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// Helper to query Gemini with retries
async function queryGemini(prompt, retries = 8, delayMs = 10000) {
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json"
    }
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
          
          // Robust JSON array extraction
          const startArr = jsonText.indexOf('[');
          const endArr = jsonText.lastIndexOf(']');
          if (startArr !== -1 && endArr !== -1 && endArr > startArr) {
            jsonText = jsonText.substring(startArr, endArr + 1);
          }
          
          // Remove potential comments
          jsonText = jsonText.replace(/\/\/.*?\n/g, '\n').replace(/\/\*[\s\S]*?\*\//g, '');
          
          return JSON.parse(jsonText);
        } else {
          throw new Error("Empty response content from Gemini.");
        }
      } else if (res.status === 429 || res.status === 503 || res.status === 500) {
        console.log(`[Rate Limit/Load] Attempt ${attempt}/${retries} failed with status ${res.status}. Waiting ${delayMs / 1000}s...`);
        await sleep(delayMs);
        delayMs *= 2; // Exponential backoff
      } else {
        const text = await res.text();
        throw new Error(`HTTP Error ${res.status}: ${text}`);
      }
    } catch (e) {
      console.log(`[Error] Attempt ${attempt}/${retries} threw: ${e.message}`);
      if (attempt === retries) throw e;
      await sleep(delayMs);
      delayMs *= 2; // Also apply exponential backoff on exceptions
    }
  }
}

async function main() {
  console.log("=== CBT Unique Question Generator Starting ===");
  if (!GEMINI_API_KEY) {
    console.error("Error: GEMINI_API_KEY is not defined in the environment.");
    process.exit(1);
  }

  // Load progress cache
  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    try {
      cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      console.log(`Loaded cache with ${Object.keys(cache).length} exams.`);
    } catch (e) {
      console.log("Error reading cache file, starting fresh:", e.message);
    }
  }

  // Loop through exams to generate questions
  for (const target of EXAMS_TO_REGENERATE) {
    const examKey = target.id;
    if (cache[examKey] && cache[examKey].length === target.count) {
      console.log(`Exam ${target.exam} ${target.subject} Mock ${target.mockNum} already complete in cache. Skipping.`);
      continue;
    }

    console.log(`\nGenerating for: ${target.exam} - ${target.subject} (Mock ${target.mockNum}) - Need ${target.count} questions...`);
    const focus = (TOPIC_FOCUS[target.subject] && TOPIC_FOCUS[target.subject][target.mockNum]) || 'Mixed Syllabus';
    console.log(`Focus Area: ${focus}`);

    let questionsList = cache[examKey] || [];
    const batchSize = 20;

    while (questionsList.length < target.count) {
      const currentBatchCount = Math.min(batchSize, target.count - questionsList.length);
      console.log(`Generating batch of ${currentBatchCount} questions (current: ${questionsList.length}/${target.count})...`);

      const prompt = `Generate exactly ${currentBatchCount} unique, high-quality multiple-choice questions for the UPSC ${target.exam} ${target.subject} exam, Mock Test #${target.mockNum}.
Target focus area: ${focus}.
Make sure the questions match actual previous year papers (PYQs) from 2018-2025 in terms of style, language, parameters, and difficulty. DO NOT repeat any questions.

Format the output strictly as a JSON array of objects. Do not include markdown code block formatting (no \`\`\`json). Just the raw JSON array.
Each object must have exactly these keys:
- "question": string (Professional, clear, no emoji. If math, use standard notation like ^, sqrt, etc.)
- "options": array of exactly 4 strings
- "correct": number (index of correct option 0-3)
- "explanation": string (Step-by-step mathematical or conceptual explanation explaining why the correct option is right and others are wrong)

All questions must be unique.`;

      try {
        const batchQuestions = await queryGemini(prompt);
        if (Array.isArray(batchQuestions) && batchQuestions.length > 0) {
          questionsList.push(...batchQuestions);
          // Update cache
          cache[examKey] = questionsList;
          fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
          console.log(`Successfully added ${batchQuestions.length} questions to cache.`);
        } else {
          console.log("Error: Batch questions was not a valid array, retrying batch...");
        }
      } catch (err) {
        console.error(`Failed to generate batch due to persistent errors: ${err.message}. Waiting 60 seconds before full retry of this batch...`);
        await sleep(60000);
        continue; // Retry without exiting
      }

      // 4 seconds delay to avoid RPM limits
      await sleep(4000);
    }
  }

  console.log("\nAll questions generated in cache! Merging into data.js...");
  const dataContent = fs.readFileSync('data.js', 'utf8');
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found in data.js!");
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

  // Update CBT_EXAMS_DATABASE with cached questions
  let updatedCount = 0;
  CBT_EXAMS_DATABASE.forEach(exam => {
    if (cache[exam.id]) {
      exam.questions = cache[exam.id];
      exam.questionsCount = cache[exam.id].length;
      updatedCount++;
    }
  });

  const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
  const newContent = dataContent.substring(0, firstBracket) + updatedCbtExamsStr + dataContent.substring(arrayEndIndex + 1);
  fs.writeFileSync('data.js', newContent);

  console.log(`Successfully merged ${updatedCount} exams into data.js!`);
  console.log("Generation complete!");
}

main();
