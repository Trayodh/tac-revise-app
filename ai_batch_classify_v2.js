require('dotenv').config();
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const DATA_JS_PATH = path.join(__dirname, 'data.js');
const PROGRESS_FILE = path.join(__dirname, 'scratch', 'classification_state_v2.json');
const OUTPUT_JSON_FILE = path.join(__dirname, 'scratch', 'classified_questions.json');
const OUTPUT_CSV_FILE = path.join(__dirname, 'scratch', 'classified_questions.csv');

const BATCH_SIZE = 30; // Kept at 30 to avoid going over JSON limits
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
    console.error("GEMINI_API_KEY is not set in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const MASTER_PROMPT = `You are an expert defence exam question classification system. Your task is to 
classify questions from defence and government exams into a structured 
taxonomy by chapter, topic, and subject.

CRITICAL INSTRUCTIONS:

1. IGNORE THESE QUESTIONS:
   - Any question that says "Based on the passage above..."
   - Any question that says "Refer to the diagram/figure..."
   - Any question that says "Look at the chart/graph..."
   - Any question that references an image/table/diagram NOT in the question text
   - Any comprehension questions without the full passage included
   - Mark these as "SKIP_REASON: paragraph_dependent" or "SKIP_REASON: image_dependent"

2. CLASSIFY STANDALONE QUESTIONS ONLY:
   - Questions that can be answered without external content
   - Questions with complete information in the text
   - Formula-based questions (Trigonometry, Algebra, etc.)
   - Vocabulary/Grammar questions
   - Factual questions (History, Geography, Science)
   - Reasoning questions (Logical, Spatial)

3. FOR EACH QUESTION, EXTRACT:
   {
     "question_id": "Q001",
     "question_text": "[First 100 characters of question]",
     "exam": "NDA | CDS | AFCAT | CAPF-AC | UPSC-CSE",
     "paper": "Mathematics | GAT | General Studies | English",
     "section": "Part A | Part B | Section 1 | etc.",
     "subject": "[Primary subject]",
     "chapter": "[Specific chapter/topic]",
     "topic": "[Sub-topic within chapter]",
     "subtopic": "[Even more specific]",
     "skip": true/false,
     "skip_reason": "paragraph_dependent | image_dependent | null",
     "difficulty": "Easy | Medium | Hard | Unknown",
     "question_type": "MCQ | Numerical | Short Answer | Essay",
     "keywords": ["keyword1", "keyword2", "keyword3"]
   }

4. EXAM-SPECIFIC CLASSIFICATION RULES:

   === NDA EXAM ===
   
   Paper 1: MATHEMATICS (120 Questions)
   ├─ Chapter 1: Sets, Relations, Functions
   ├─ Chapter 2: Complex Numbers and Quadratic Equations
   ├─ Chapter 3: Sequences and Series
   ├─ Chapter 4: Trigonometric Functions
   ├─ Chapter 5: Inverse Trigonometric Functions
   ├─ Chapter 6: Limit, Continuity, Differentiability
   ├─ Chapter 7: Differential Calculus (Maxima-Minima)
   ├─ Chapter 8: Integral Calculus
   ├─ Chapter 9: Differential Equations
   ├─ Chapter 10: Two Dimensional Geometry
   ├─ Chapter 11: Three Dimensional Geometry
   ├─ Chapter 12: Vectors
   ├─ Chapter 13: Statistics and Probability
   └─ Chapter 14: Matrices and Determinants

   Paper 2: GENERAL APTITUDE TEST (GAT) - 120 Questions
   ├─ PART A: Verbal Ability (60 Questions)
   │  ├─ Vocabulary (Synonyms, Antonyms)
   │  ├─ Grammar (Tenses, Articles, Prepositions, Subject-Verb Agreement)
   │  ├─ Sentence Completion
   │  ├─ Fill in the Blanks
   │  ├─ Error Detection
   │  ├─ Word Formation
   │  └─ Spellings
   │
   └─ PART B: Reasoning & Logical Thinking (60 Questions)
      ├─ Logical Reasoning (Syllogism, Analogy, Classification)
      ├─ Verbal Reasoning (Statement-Assumption, Inference)
      ├─ Data Interpretation (Tables, Graphs, Charts)
      ├─ Non-Verbal Reasoning (Series, Patterns, Spatial)
      ├─ Quantitative Aptitude (Basic Maths for Reasoning)
      └─ Decision Making

   === CDS EXAM ===

   Paper 1: ENGLISH (100 Questions)
   ├─ Grammar
   │  ├─ Tenses (Present, Past, Future)
   │  ├─ Articles & Determiners
   │  ├─ Prepositions
   │  ├─ Subject-Verb Agreement
   │  └─ Modals & Auxiliaries
   ├─ Vocabulary
   │  ├─ Synonyms
   │  ├─ Antonyms
   │  ├─ One Word Substitution
   │  └─ Idioms & Phrases
   ├─ Sentence Improvement
   ├─ Error Detection
   ├─ Spelling
   ├─ Fill in the Blanks
   ├─ Ordering of Sentences
   └─ Reading Comprehension (SKIP if full passage not included)

   Paper 2: GENERAL STUDIES (100 Questions)
   ├─ History (20-25 Questions)
   │  ├─ Ancient India (Maurya, Gupta, Chola)
   │  ├─ Medieval India (Delhi Sultanate, Mughal Empire)
   │  ├─ Modern India (British Period, Independence Movement)
   │  ├─ Indian Constitution & Republic
   │  └─ Independence Era (Partition, Nation Building)
   │
   ├─ Geography (20-25 Questions)
   │  ├─ Physical Geography (Landforms, Climate, Rainfall)
   │  ├─ Indian Geography (States, Boundaries, Capitals)
   │  ├─ World Geography (Continents, Oceans, Countries)
   │  ├─ Map Reading & Location
   │  └─ Resources & Industry
   │
   ├─ Science (20-25 Questions)
   │  ├─ Physics (Motion, Force, Energy, Waves, Light)
   │  ├─ Chemistry (Matter, Atoms, Reactions, Periodic Table)
   │  ├─ Biology (Life Processes, Ecology, Evolution)
   │  └─ General Science (Space, Universe)
   │
   ├─ Polity (15-20 Questions)
   │  ├─ Constitution of India
   │  ├─ Fundamental Rights & Duties
   │  ├─ Parliament & Legislative Process
   │  ├─ Executive (President, PM, Council of Ministers)
   │  └─ Judiciary
   │
   ├─ Economics (10-15 Questions)
   │  ├─ Basic Economic Concepts
   │  ├─ National Income & Growth
   │  ├─ Inflation & Deflation
   │  ├─ Banking System
   │  └─ Trade & Commerce
   │
   └─ Current Affairs (10-15 Questions)
      ├─ Recent Events
      ├─ Policies & Schemes
      └─ Awards & Recognitions

   Paper 3: MATHEMATICS (100 Questions)
   ├─ Arithmetic (Percentage, Profit-Loss, Time-Work)
   ├─ Algebra (Equations, Inequalities, Sequences)
   ├─ Geometry (Triangles, Circles, Polygons)
   ├─ Trigonometry (Ratios, Identities, Heights-Distances)
   ├─ Statistics (Mean, Median, Mode, Probability)
   └─ Mensuration (Area, Volume, Surface Area)

   === AFCAT EXAM ===

   Paper: AFCAT (64 Questions total, 50 min)
   ├─ English (24 Questions)
   │  ├─ Synonyms
   │  ├─ Antonyms
   │  ├─ One Word Substitution
   │  ├─ Sentence Completion
   │  ├─ Idioms & Phrases
   │  ├─ Spellings
   │  ├─ Grammar (Simple)
   │  └─ Comprehension (SKIP if full passage not included)
   │
   ├─ Reasoning (20 Questions)
   │  ├─ Verbal Reasoning (Analogy, Classification, Syllogism)
   │  ├─ Non-Verbal Reasoning (Spatial, Patterns, Series)
   │  ├─ Logical Reasoning
   │  └─ Decision Making
   │
   └─ Quantitative Aptitude (20 Questions)
      ├─ Arithmetic (Percentage, Profit-Loss, Averages)
      ├─ Algebra (Simple Equations)
      ├─ Number System
      ├─ Time & Work
      └─ Simple Geometry

   === CAPF AC EXAM (NEW) ===

   Paper 1: GENERAL STUDIES (150 Questions)
   ├─ History (25-30%)
   ├─ Geography (20-25%)
   ├─ General Science (15-20%)
   ├─ Polity (15-20%)
   ├─ Economics (10-15%)
   └─ Current Affairs (5-10%)

   Paper 2: REASONING & PROBLEM SOLVING (150 Questions)
   ├─ Logical Reasoning
   ├─ Spatial Reasoning
   ├─ Data Interpretation
   ├─ Problem Solving
   └─ Decision Making

   === UPSC CSE (NEW) ===

   Preliminary: GENERAL STUDIES (100 Questions, 2 hours)
   ├─ Indian Heritage, Culture, History (15-20%)
   ├─ World Geography & Geopolitics (10-15%)
   ├─ Indian Geography & Ecology (10-15%)
   ├─ Indian Polity & Governance (15-20%)
   ├─ Indian Economy (10-15%)
   ├─ Science & Technology (10-15%)
   ├─ Current Affairs (10-15%)
   └─ General Knowledge (5-10%)

5. DIFFICULTY LEVEL DETECTION:
   - Easy: Basic facts, simple formulas, vocabulary (definition-based)
   - Medium: Application of concepts, multi-step reasoning
   - Hard: Analysis, synthesis, multiple concepts combined
   - If uncertain, mark as "Unknown"

6. QUESTION TYPE CLASSIFICATION:
   - MCQ: Multiple choice (A, B, C, D options)
   - Numerical: Answer is a number (no options)
   - Short Answer: Brief written response needed
   - Essay: Long written response needed
   - True/False: Binary choice
   - Fill in the Blank: Complete the sentence

7. OUTPUT FORMAT (JSON):
   You must respond with a JSON array containing the classification objects corresponding to the input questions.
   Do not output any markdown code blocks wrapping the JSON, JUST the raw JSON array.
   [
     {
       "classification": {
         "question_id": "UNIQUE_ID",
         "exam": "NDA | CDS | AFCAT | CAPF-AC | UPSC-CSE",
         "paper": "Mathematics | English | General Studies | GAT | etc.",
         "subject": "Algebra | History | Vocabulary | etc.",
         "chapter": "Chapter name",
         "topic": "Specific topic within chapter",
         "subtopic": "More specific breakdown if applicable",
         "skip_reason": null,
         "difficulty": "Easy | Medium | Hard | Unknown",
         "question_type": "MCQ | Numerical | Short Answer | etc.",
         "classification_confidence": "High | Medium | Low"
       },
       "metadata": {
         "question_text_preview": "[First 100 chars]",
         "keywords": ["key1", "key2", "key3"],
         "requires_external_content": false,
         "suitable_for_mock_test": true
       }
     }
   ]

8. CLASSIFICATION CONFIDENCE:
   - High: Clear subject/chapter, no ambiguity
   - Medium: Likely classification, some uncertainty
   - Low: Multiple possible classifications, needs manual review

9. SPECIAL HANDLING:
   a) Multi-subject Questions (connects 2+ subjects): Classify by PRIMARY subject
   b) Ambiguous Questions: If unsure between two chapters, choose the more specific one
   c) Outdated Questions: Mark with "outdated": true if about superseded policies/events
   d) Repeated/Duplicate Questions: If you find the same question twice, mark with "likely_duplicate": true

10. QUALITY CHECKS:
   - Is the exam valid? (NDA | CDS | AFCAT | CAPF-AC | UPSC-CSE)
   - Is the paper valid for this exam?
   - Is the subject valid for this paper?
   - Is the chapter valid for this subject?
   - Does the topic fall within this chapter?
   - Is skip_reason null for classified questions?
   - Is difficulty level filled?
`;

function loadDB() {
    const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
    const executableContent = content.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
    const sandbox = { window: {} };
    sandbox.window = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(executableContent, sandbox);
    return sandbox.CBT_EXAMS_DATABASE;
}

function escapeCsv(field) {
    if (field === null || field === undefined) return '';
    const str = String(field);
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
}

async function processBatch(questions) {
    const promptQuestions = JSON.stringify(questions.map(q => ({
        id: q.original_id,
        text: q.question,
        options: q.options,
        source: q.exams.join(', ') + ' ' + q.years.join(', ')
    })), null, 2);

    const fullPrompt = `${MASTER_PROMPT}\n\nHere is your batch of questions to classify:\n${promptQuestions}`;

    let retries = 10;
    while (retries > 0) {
        try {
            const result = await model.generateContent(fullPrompt);
            const responseText = result.response.text();
            
            // Clean markdown json tags if AI sends them despite instructions
            let cleanText = responseText.trim();
            if (cleanText.startsWith('```json')) cleanText = cleanText.substring(7);
            if (cleanText.startsWith('```')) cleanText = cleanText.substring(3);
            if (cleanText.endsWith('```')) cleanText = cleanText.slice(0, -3);
            cleanText = cleanText.trim();

            const parsed = JSON.parse(cleanText);
            return parsed;
        } catch (e) {
            console.error("Gemini call failed:", e.message);
            retries--;
            console.log(`Rate limited or error. Waiting 65 seconds before retry... (${retries} retries left)`);
            await new Promise(r => setTimeout(r, 65000)); // wait 65s for strict RPM limits
        }
    }
    return null;
}

async function run() {
    console.log("Loading database...");
    const db = loadDB();
    
    // Flatten all questions
    const allQuestions = [];
    db.forEach((exam, eIdx) => {
        let defaultYear = exam.title.match(/\b(19\d{2}|20\d{2})\b/);
        defaultYear = defaultYear ? defaultYear[1] : "";
        let examTag = (exam.exam || "").toUpperCase();
        
        exam.questions.forEach((q, idx) => {
            if (!q.question || q.question.trim() === '') return;
            allQuestions.push({
                original_id: `Q_${eIdx}_${idx}`,
                question: q.question,
                options: q.options || [],
                exams: examTag ? [examTag] : [],
                years: defaultYear ? [defaultYear] : [],
                original_obj: q
            });
        });
    });
    
    console.log(`Found ${allQuestions.length} valid questions to process.`);
    
    let state = {};
    if (fs.existsSync(PROGRESS_FILE)) {
        state = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
        console.log(`Loaded ${Object.keys(state).length} previously processed questions.`);
    }

    const remainingQuestions = allQuestions.filter(q => !state[q.original_id]);
    console.log(`Remaining to process: ${remainingQuestions.length}`);

    for (let i = 0; i < remainingQuestions.length; i += BATCH_SIZE) {
        const batch = remainingQuestions.slice(i, i + BATCH_SIZE);
        console.log(`Processing batch ${i / BATCH_SIZE + 1} of ${Math.ceil(remainingQuestions.length / BATCH_SIZE)}...`);
        
        const results = await processBatch(batch);
        
        if (results && Array.isArray(results)) {
            // Save to state
            results.forEach(res => {
                if (res.classification && res.classification.question_id) {
                    state[res.classification.question_id] = res;
                }
            });
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(state, null, 2));
            console.log(`✅ Batch ${i / BATCH_SIZE + 1} saved.`);
        } else {
            console.log(`❌ Batch ${i / BATCH_SIZE + 1} failed. Skipping for now...`);
        }
        
        // Rate limit padding
        await new Promise(r => setTimeout(r, 4000));
    }
    
    console.log("\n\nGenerating Final Outputs...");
    
    // Generate JSON
    const finalJSON = {
        summary: {
            total_questions_processed: allQuestions.length,
            questions_classified: Object.keys(state).length,
        },
        classified_questions: []
    };
    
    // Generate CSV
    let csvData = "question_id,question_text,exam,paper,subject,chapter,topic,subtopic,difficulty,question_type,skip,skip_reason\n";

    allQuestions.forEach(q => {
        const s = state[q.original_id];
        if (s && s.classification) {
            const cls = s.classification;
            // JSON
            finalJSON.classified_questions.push({
                ...q.original_obj,
                ai_classification: s
            });
            
            // CSV
            const qtextPreview = (s.metadata && s.metadata.question_text_preview) ? s.metadata.question_text_preview : q.question.substring(0, 100);
            
            csvData += [
                cls.question_id,
                qtextPreview,
                cls.exam,
                cls.paper,
                cls.subject,
                cls.chapter,
                cls.topic,
                cls.subtopic,
                cls.difficulty,
                cls.question_type,
                cls.skip_reason ? "TRUE" : "FALSE",
                cls.skip_reason || ""
            ].map(escapeCsv).join(',') + "\n";
        }
    });

    fs.writeFileSync(OUTPUT_JSON_FILE, JSON.stringify(finalJSON, null, 2));
    fs.writeFileSync(OUTPUT_CSV_FILE, csvData);
    
    console.log(`Done! Created ${OUTPUT_JSON_FILE} and ${OUTPUT_CSV_FILE}`);
}

run();
