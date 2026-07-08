/**
 * extract_mcqs_to_armoury.js
 * 
 * For each generated chapter HTML file:
 * 1. Extracts the chapter content
 * 2. Uses Gemini to generate 50 structured MCQs in proper JSON format
 * 3. Appends them to CBT_EXAMS_DATABASE in data.js as a new mock test entry
 * 
 * Resume-safe: skips chapters already present in data.js
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) { console.error("Missing GEMINI_API_KEY"); process.exit(1); }

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// All chapter sources (GS + extra subjects)
const ALL_CHAPTERS = [
  // === GENERAL SCIENCE — Biology ===
  { id: 'gs-cell-biology', title: 'Cell Biology', subject: 'General Science', exam: 'NDA', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'cell-biology.html' },
  { id: 'gs-human-nutrition', title: 'Human Nutrition', subject: 'General Science', exam: 'CDS', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'human-nutrition.html' },
  { id: 'gs-digestive-system', title: 'Human Digestive System', subject: 'General Science', exam: 'NDA', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'human-digestive-system.html' },
  { id: 'gs-circulatory-system', title: 'Human Circulatory System', subject: 'General Science', exam: 'NDA', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'human-circulatory-system.html' },
  { id: 'gs-respiratory-system', title: 'Human Respiratory System', subject: 'General Science', exam: 'AFCAT', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'human-respiratory-system.html' },
  { id: 'gs-nervous-system', title: 'Human Nervous System', subject: 'General Science', exam: 'NDA', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'human-nervous-system.html' },
  { id: 'gs-endocrine-system', title: 'Human Endocrine System', subject: 'General Science', exam: 'CDS', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'human-endocrine-system.html' },
  { id: 'gs-excretory-system', title: 'Human Excretory System', subject: 'General Science', exam: 'NDA', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'human-excretory-system.html' },
  { id: 'gs-musculoskeletal', title: 'Skeletal & Muscular System', subject: 'General Science', exam: 'CDS', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'human-musculoskeletal.html' },
  { id: 'gs-reproduction-heredity', title: 'Reproduction & Heredity', subject: 'General Science', exam: 'NDA', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'reproduction-heredity.html' },
  { id: 'gs-diseases-immunity', title: 'Diseases, Immunity & Vaccines', subject: 'General Science', exam: 'CDS', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'diseases-immunity.html' },
  { id: 'gs-plant-kingdom', title: 'Plant Kingdom', subject: 'General Science', exam: 'NDA', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'plant-kingdom.html' },
  { id: 'gs-animal-kingdom', title: 'Animal Kingdom', subject: 'General Science', exam: 'NDA', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'animal-kingdom.html' },
  { id: 'gs-ecology-environment', title: 'Ecology & Environment', subject: 'General Science', exam: 'CDS', topic: 'Biology', dir: 'ssbcrack_gs_notes', file: 'ecology-environment.html' },
  // === GENERAL SCIENCE — Physics ===
  { id: 'gs-units-measurement', title: 'Units, Dimensions & Measurement', subject: 'General Science', exam: 'AFCAT', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'units-measurement.html' },
  { id: 'gs-laws-of-motion', title: 'Laws of Motion', subject: 'General Science', exam: 'NDA', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'laws-of-motion.html' },
  { id: 'gs-work-energy-power', title: 'Work, Energy & Power', subject: 'General Science', exam: 'CDS', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'work-energy-power.html' },
  { id: 'gs-gravitation', title: 'Gravitation', subject: 'General Science', exam: 'NDA', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'gravitation.html' },
  { id: 'gs-heat-thermodynamics', title: 'Heat & Thermodynamics', subject: 'General Science', exam: 'CDS', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'heat-thermodynamics.html' },
  { id: 'gs-waves-sound', title: 'Waves & Sound', subject: 'General Science', exam: 'AFCAT', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'waves-sound.html' },
  { id: 'gs-light-optics', title: 'Light & Optics', subject: 'General Science', exam: 'NDA', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'light-optics.html' },
  { id: 'gs-electricity-magnetism', title: 'Electricity & Magnetism', subject: 'General Science', exam: 'CDS', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'electricity-magnetism.html' },
  { id: 'gs-modern-physics', title: 'Modern Physics & Nuclear Science', subject: 'General Science', exam: 'NDA', topic: 'Physics', dir: 'ssbcrack_gs_notes', file: 'modern-physics.html' },
  // === GENERAL SCIENCE — Chemistry ===
  { id: 'gs-matter-states', title: 'States of Matter & Gas Laws', subject: 'General Science', exam: 'NDA', topic: 'Chemistry', dir: 'ssbcrack_gs_notes', file: 'matter-states.html' },
  { id: 'gs-atomic-structure-periodic', title: 'Atomic Structure & Periodic Table', subject: 'General Science', exam: 'CDS', topic: 'Chemistry', dir: 'ssbcrack_gs_notes', file: 'atomic-structure-periodic.html' },
  { id: 'gs-chemical-bonding', title: 'Chemical Bonding', subject: 'General Science', exam: 'NDA', topic: 'Chemistry', dir: 'ssbcrack_gs_notes', file: 'chemical-bonding.html' },
  { id: 'gs-chemical-reactions', title: 'Chemical Reactions', subject: 'General Science', exam: 'CDS', topic: 'Chemistry', dir: 'ssbcrack_gs_notes', file: 'chemical-reactions.html' },
  { id: 'gs-acids-bases-salts', title: 'Acids, Bases & Salts', subject: 'General Science', exam: 'NDA', topic: 'Chemistry', dir: 'ssbcrack_gs_notes', file: 'acids-bases-salts.html' },
  { id: 'gs-metals-nonmetals', title: 'Metals & Non-Metals', subject: 'General Science', exam: 'CDS', topic: 'Chemistry', dir: 'ssbcrack_gs_notes', file: 'metals-nonmetals.html' },
  { id: 'gs-carbon-organic', title: 'Carbon & Organic Chemistry', subject: 'General Science', exam: 'NDA', topic: 'Chemistry', dir: 'ssbcrack_gs_notes', file: 'carbon-organic.html' },
  { id: 'gs-everyday-chemistry', title: 'Everyday Chemistry', subject: 'General Science', exam: 'AFCAT', topic: 'Chemistry', dir: 'ssbcrack_gs_notes', file: 'everyday-chemistry.html' },
  // === HISTORY ===
  { id: 'hist-indus-valley', title: 'Indus Valley Civilisation', subject: 'History', exam: 'CDS', topic: 'Ancient History', dir: 'extra_subjects_notes', file: 'hist-indus-valley.html' },
  { id: 'hist-vedic-age', title: 'Vedic Age', subject: 'History', exam: 'CDS', topic: 'Ancient History', dir: 'extra_subjects_notes', file: 'hist-vedic-age.html' },
  { id: 'hist-buddhism-jainism', title: 'Buddhism & Jainism', subject: 'History', exam: 'CDS', topic: 'Ancient History', dir: 'extra_subjects_notes', file: 'hist-buddhism-jainism.html' },
  { id: 'hist-mauryan-empire', title: 'Mauryan Empire', subject: 'History', exam: 'CDS', topic: 'Ancient History', dir: 'extra_subjects_notes', file: 'hist-mauryan-empire.html' },
  { id: 'hist-gupta-age', title: 'Gupta Age', subject: 'History', exam: 'CDS', topic: 'Ancient History', dir: 'extra_subjects_notes', file: 'hist-gupta-age.html' },
  { id: 'hist-delhi-sultanate', title: 'Delhi Sultanate', subject: 'History', exam: 'CDS', topic: 'Medieval History', dir: 'extra_subjects_notes', file: 'hist-delhi-sultanate.html' },
  { id: 'hist-mughal-empire', title: 'Mughal Empire', subject: 'History', exam: 'CDS', topic: 'Medieval History', dir: 'extra_subjects_notes', file: 'hist-mughal-empire.html' },
  { id: 'hist-maratha-empire', title: 'Maratha Empire', subject: 'History', exam: 'CDS', topic: 'Medieval History', dir: 'extra_subjects_notes', file: 'hist-maratha-empire.html' },
  { id: 'hist-british-conquest', title: 'British Conquest of India', subject: 'History', exam: 'CDS', topic: 'Modern History', dir: 'extra_subjects_notes', file: 'hist-british-conquest.html' },
  { id: 'hist-1857-revolt', title: '1857 Revolt', subject: 'History', exam: 'CDS', topic: 'Modern History', dir: 'extra_subjects_notes', file: 'hist-1857-revolt.html' },
  { id: 'hist-freedom-struggle', title: 'Indian Freedom Struggle', subject: 'History', exam: 'CDS', topic: 'Modern History', dir: 'extra_subjects_notes', file: 'hist-freedom-struggle.html' },
  { id: 'hist-independence', title: 'Independence & Partition', subject: 'History', exam: 'CDS', topic: 'Modern History', dir: 'extra_subjects_notes', file: 'hist-independence.html' },
  // === GEOGRAPHY ===
  { id: 'geo-physical-features', title: 'Physical Features of India', subject: 'Geography', exam: 'CDS', topic: 'Indian Geography', dir: 'extra_subjects_notes', file: 'geo-physical-features.html' },
  { id: 'geo-rivers-lakes', title: 'Rivers, Lakes & Water Bodies', subject: 'Geography', exam: 'NDA', topic: 'Indian Geography', dir: 'extra_subjects_notes', file: 'geo-rivers-lakes.html' },
  { id: 'geo-climate-seasons', title: 'Climate & Seasons of India', subject: 'Geography', exam: 'CDS', topic: 'Indian Geography', dir: 'extra_subjects_notes', file: 'geo-climate-seasons.html' },
  { id: 'geo-soils-agriculture', title: 'Soils & Agriculture', subject: 'Geography', exam: 'CDS', topic: 'Indian Geography', dir: 'extra_subjects_notes', file: 'geo-soils-agriculture.html' },
  { id: 'geo-forests-wildlife', title: 'Forests, Wildlife & National Parks', subject: 'Geography', exam: 'NDA', topic: 'Indian Geography', dir: 'extra_subjects_notes', file: 'geo-forests-wildlife.html' },
  { id: 'geo-minerals-industries', title: 'Minerals, Energy & Industries', subject: 'Geography', exam: 'CDS', topic: 'Indian Geography', dir: 'extra_subjects_notes', file: 'geo-minerals-industries.html' },
  { id: 'geo-transport-trade', title: 'Transport, Trade & Neighbours', subject: 'Geography', exam: 'AFCAT', topic: 'Indian Geography', dir: 'extra_subjects_notes', file: 'geo-transport-trade.html' },
  { id: 'geo-world-physical', title: 'World Physical Geography', subject: 'Geography', exam: 'NDA', topic: 'World Geography', dir: 'extra_subjects_notes', file: 'geo-world-physical.html' },
  { id: 'geo-world-climate', title: 'World Climate Zones & Biomes', subject: 'Geography', exam: 'CDS', topic: 'World Geography', dir: 'extra_subjects_notes', file: 'geo-world-climate.html' },
  // === POLITY ===
  { id: 'pol-constitution-making', title: 'Making of Indian Constitution', subject: 'Polity', exam: 'CDS', topic: 'Constitution', dir: 'extra_subjects_notes', file: 'pol-constitution-making.html' },
  { id: 'pol-fundamental-rights', title: 'Fundamental Rights', subject: 'Polity', exam: 'CDS', topic: 'Rights & Duties', dir: 'extra_subjects_notes', file: 'pol-fundamental-rights.html' },
  { id: 'pol-dpsp-duties', title: 'DPSPs & Fundamental Duties', subject: 'Polity', exam: 'CDS', topic: 'Rights & Duties', dir: 'extra_subjects_notes', file: 'pol-dpsp-duties.html' },
  { id: 'pol-parliament', title: 'Parliament of India', subject: 'Polity', exam: 'CDS', topic: 'Governance', dir: 'extra_subjects_notes', file: 'pol-parliament.html' },
  { id: 'pol-president-pm', title: 'President, VP & Prime Minister', subject: 'Polity', exam: 'CDS', topic: 'Governance', dir: 'extra_subjects_notes', file: 'pol-president-pm.html' },
  { id: 'pol-judiciary', title: 'Supreme Court & Judicial Review', subject: 'Polity', exam: 'CDS', topic: 'Judiciary', dir: 'extra_subjects_notes', file: 'pol-judiciary.html' },
  { id: 'pol-federalism', title: 'Federalism & Emergency Provisions', subject: 'Polity', exam: 'CDS', topic: 'Governance', dir: 'extra_subjects_notes', file: 'pol-federalism.html' },
  { id: 'pol-elections-evm', title: 'Elections & Political Parties', subject: 'Polity', exam: 'CDS', topic: 'Elections', dir: 'extra_subjects_notes', file: 'pol-elections-evm.html' },
  // === ECONOMICS ===
  { id: 'eco-gdp-national-income', title: 'GDP & National Income', subject: 'Economics', exam: 'CDS', topic: 'Indian Economy', dir: 'extra_subjects_notes', file: 'eco-gdp-national-income.html' },
  { id: 'eco-banking-rbi', title: 'Banking System & RBI', subject: 'Economics', exam: 'CDS', topic: 'Banking', dir: 'extra_subjects_notes', file: 'eco-banking-rbi.html' },
  { id: 'eco-budget-fiscal', title: 'Union Budget & Fiscal Policy', subject: 'Economics', exam: 'CDS', topic: 'Indian Economy', dir: 'extra_subjects_notes', file: 'eco-budget-fiscal.html' },
  { id: 'eco-trade-forex', title: 'International Trade & Forex', subject: 'Economics', exam: 'CDS', topic: 'Trade', dir: 'extra_subjects_notes', file: 'eco-trade-forex.html' },
  { id: 'eco-govt-schemes', title: 'Government Schemes & Policies', subject: 'Economics', exam: 'CDS', topic: 'Indian Economy', dir: 'extra_subjects_notes', file: 'eco-govt-schemes.html' },
];

async function generateMCQs(chapter, htmlContent) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  // Strip HTML tags for cleaner content extraction
  const plainText = htmlContent
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .substring(0, 8000)
    .trim();

  const prompt = `You are generating MCQs for the Indian Defence Exam Question Armoury.

Based on the following study notes about "${chapter.title}" (${chapter.subject}), generate EXACTLY 50 high-quality MCQs suitable for ${chapter.exam}/CDS/NDA/AFCAT.

NOTES CONTENT:
${plainText}

OUTPUT RULES — CRITICAL:
1. Return ONLY a valid JSON array. No markdown, no explanation, no preamble.
2. The array must contain EXACTLY 50 objects.
3. Each object must have this exact structure:
{
  "question": "Full question text here",
  "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
  "correct": 0,
  "explanation": "Clear 1-2 sentence explanation of why the correct answer is right and why common wrong answers are wrong.",
  "difficulty": "easy",
  "topicId": "${chapter.id}"
}
4. "correct" is 0-indexed (0=A, 1=B, 2=C, 3=D)
5. "difficulty" must be one of: "easy", "medium", "hard"
6. Mix: 20 easy + 20 medium + 10 hard
7. Questions must be factual, precise, and exam-standard
8. Cover diverse sub-topics from the chapter
9. No repeated questions
10. Start your response with [ and end with ]`;

  let retries = 4;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 8192, temperature: 0.5 }
        })
      });

      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          console.log(`  Rate limited! Waiting 35s...`);
          await sleep(35000);
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }

      let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      // Strip any markdown fences
      text = text.replace(/^```json\n?/i, '').replace(/^```\n?/, '').replace(/\n?```$/, '').trim();
      
      // Parse JSON
      const questions = JSON.parse(text);
      if (!Array.isArray(questions) || questions.length < 10) {
        throw new Error(`Got ${questions.length} questions, expected 50`);
      }
      return questions;
    } catch (err) {
      console.error(`  Error: ${err.message.substring(0, 100)}`);
      await sleep(5000);
      retries--;
    }
  }
  return null;
}

function buildMockTestEntry(chapter, questions) {
  const examMarks = {
    'NDA': { correct: 4, incorrect: -1.33, examType: 'NDA' },
    'CDS': { correct: 1, incorrect: -0.33, examType: 'CDS' },
    'AFCAT': { correct: 3, incorrect: -1, examType: 'AFCAT' },
  };
  const marks = examMarks[chapter.exam] || examMarks['CDS'];

  return {
    id: `mock-${chapter.id}`,
    exam: chapter.exam,
    subject: chapter.subject,
    title: `${chapter.title} — Practice Test`,
    topic: chapter.topic || chapter.subject,
    duration: 35,
    questionsCount: questions.length,
    rules: {
      correctMarks: marks.correct,
      incorrectMarks: marks.incorrect,
      examType: marks.examType
    },
    questions: questions.map(q => ({
      question: q.question || '',
      options: q.options || ['', '', '', ''],
      correct: typeof q.correct === 'number' ? q.correct : 0,
      explanation: q.explanation || '',
      difficulty: q.difficulty || 'medium',
      topicId: chapter.id
    }))
  };
}

async function run() {
  const DATA_FILE = 'data.js';
  let dataContent = fs.readFileSync(DATA_FILE, 'utf8');
  
  // Find the end of CBT_EXAMS_DATABASE (last "];")
  const closingPattern = /\];\s*$/;
  
  console.log(`\n🎯 MCQ Armoury Injector — ${ALL_CHAPTERS.length} chapters\n`);

  let totalAdded = 0;

  for (let i = 0; i < ALL_CHAPTERS.length; i++) {
    const chapter = ALL_CHAPTERS[i];
    const htmlFile = path.join(__dirname, chapter.dir, chapter.file);

    // Resume: skip if mock test already exists in data.js
    if (dataContent.includes(`"mock-${chapter.id}"`)) {
      console.log(`[${i+1}/${ALL_CHAPTERS.length}] ✅ SKIP (already in armoury): ${chapter.title}`);
      continue;
    }

    // Skip if HTML source doesn't exist yet (still being generated)
    if (!fs.existsSync(htmlFile)) {
      console.log(`[${i+1}/${ALL_CHAPTERS.length}] ⏭️  SOURCE MISSING (not generated yet): ${chapter.file}`);
      continue;
    }

    console.log(`[${i+1}/${ALL_CHAPTERS.length}] ⏳ Generating MCQs: ${chapter.title} (${chapter.subject})...`);

    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    const questions = await generateMCQs(chapter, htmlContent);

    if (!questions) {
      console.log(`[${i+1}/${ALL_CHAPTERS.length}] ❌ FAILED: ${chapter.title}`);
      continue;
    }

    const mockEntry = buildMockTestEntry(chapter, questions);
    const entryJson = JSON.stringify(mockEntry, null, 2);

    // Inject before the closing "];" of CBT_EXAMS_DATABASE
    // Read fresh each time to avoid stale state
    dataContent = fs.readFileSync(DATA_FILE, 'utf8');
    
    // Find last "];" and insert before it
    const lastBracket = dataContent.lastIndexOf('];');
    if (lastBracket === -1) {
      console.error('Could not find ]]; in data.js!');
      continue;
    }

    const before = dataContent.substring(0, lastBracket);
    const after = dataContent.substring(lastBracket);
    
    // Check if there's already a last entry (add comma after it)
    const newContent = before + `,\n  ${entryJson}\n` + after;
    fs.writeFileSync(DATA_FILE, newContent, 'utf8');
    dataContent = newContent; // update in-memory copy

    totalAdded++;
    const qCount = questions.length;
    console.log(`[${i+1}/${ALL_CHAPTERS.length}] ✅ ADDED: ${chapter.title} — ${qCount} MCQs to Armoury`);

    await sleep(2500);
  }

  console.log(`\n🎉 DONE! Added ${totalAdded} mock tests to Question Armoury`);
  console.log(`📦 data.js is now ${Math.round(fs.statSync(DATA_FILE).size / (1024*1024), 1)}MB`);
}

run();
