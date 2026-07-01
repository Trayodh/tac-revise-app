const fs = require('fs');
const https = require('https');

require('dotenv').config();
// Securely loaded via environment context
const API_KEY = process.env.GEMINI_API_KEY; 

const CACHE_FILE = 'scratch/generated_questions.json';

const QUOTAS = {
  "NDA-Mathematics": [
    { topic: "Algebra & Vector Algebra", q: 38 },
    { topic: "Calculus", q: 23 },
    { topic: "Trigonometry", q: 20 },
    { topic: "Analytical Geometry (2D & 3D)", q: 20 },
    { topic: "Matrices & Determinants", q: 10 },
    { topic: "Statistics & Probability", q: 9 }
  ],
  "NDA-GAT": [
    { topic: "English Grammar & Usage", q: 18 },
    { topic: "English Vocabulary", q: 13 },
    { topic: "English Reading Comprehension", q: 10 },
    { topic: "English Sentence Improvement & Rearrangement", q: 9 },
    { topic: "Physics", q: 24 },
    { topic: "Chemistry", q: 15 },
    { topic: "General Science (Biology)", q: 10 },
    { topic: "History, Freedom Movement & Polity", q: 20 },
    { topic: "Geography", q: 20 },
    { topic: "Current Affairs", q: 11 }
  ],
  "CDS-Mathematics": [
    { topic: "Arithmetic", q: 38 },
    { topic: "Algebra", q: 17 },
    { topic: "Geometry", q: 17 },
    { topic: "Trigonometry", q: 10 },
    { topic: "Mensuration", q: 10 },
    { topic: "Statistics", q: 8 }
  ],
  "CDS-English": [
    { topic: "Vocabulary (Synonyms/Antonyms)", q: 22 },
    { topic: "Grammar & Error Spotting", q: 28 },
    { topic: "Sentence Improvement", q: 13 },
    { topic: "Reading Comprehension", q: 18 },
    { topic: "Ordering of Sentences/Words", q: 13 },
    { topic: "Cloze Test & Fill in the Blanks", q: 26 }
  ],
  "CDS-General Knowledge": [
    { topic: "Current Affairs & Static GK", q: 27 },
    { topic: "Geography", q: 23 },
    { topic: "History", q: 20 },
    { topic: "Polity", q: 15 },
    { topic: "Biology", q: 10 },
    { topic: "Chemistry", q: 8 },
    { topic: "Economics", q: 8 },
    { topic: "Physics", q: 9 }
  ],
  "AFCAT-Combined": [
    { topic: "English Reading Comprehension", q: 6 },
    { topic: "English Vocabulary", q: 4 },
    { topic: "English Error Detection", q: 3 },
    { topic: "English Cloze Test", q: 3 },
    { topic: "English Para Jumbles", q: 3 },
    { topic: "English Fill in the Blanks", q: 6 },
    { topic: "General Awareness (Current Affairs)", q: 5 },
    { topic: "General Awareness (Defence)", q: 3 },
    { topic: "General Awareness (Science)", q: 3 },
    { topic: "General Awareness (History)", q: 3 },
    { topic: "General Awareness (Geography)", q: 2 },
    { topic: "General Awareness (Polity)", q: 2 },
    { topic: "General Awareness (Sports/Misc)", q: 7 },
    { topic: "AFCAT Numerical Ability (Simplification)", q: 3 },
    { topic: "AFCAT Numerical Ability (Percentage)", q: 2 },
    { topic: "AFCAT Numerical Ability (Profit & Loss)", q: 2 },
    { topic: "AFCAT Numerical Ability (Ratio & Proportion)", q: 2 },
    { topic: "AFCAT Numerical Ability (Time & Work)", q: 2 },
    { topic: "AFCAT Numerical Ability (Time, Speed & Distance)", q: 2 },
    { topic: "AFCAT Numerical Ability (Average, SI-CI, Mixture)", q: 7 },
    { topic: "AFCAT Reasoning (Verbal Reasoning)", q: 10 },
    { topic: "AFCAT Reasoning (Non-Verbal Reasoning)", q: 8 },
    { topic: "AFCAT Reasoning (Spatial Ability)", q: 5 },
    { topic: "AFCAT Reasoning (Pattern Recognition)", q: 4 },
    { topic: "AFCAT Reasoning (Military Aptitude)", q: 3 }
  ]
};

const examsToGenerate = [
  ...Array.from({ length: 9 }, (_, i) => ({ exam: 'NDA', subject: 'Mathematics', id: `nda-math-mock-${i + 2}`, target: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ exam: 'NDA', subject: 'GAT', id: `nda-gat-mock-${i + 2}`, target: 150 })),
  ...Array.from({ length: 9 }, (_, i) => ({ exam: 'CDS', subject: 'Mathematics', id: `cds-math-mock-${i + 2}`, target: 100 })),
  ...Array.from({ length: 9 }, (_, i) => ({ exam: 'CDS', subject: 'English', id: `cds-english-mock-${i + 2}`, target: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ exam: 'CDS', subject: 'General Knowledge', id: `cds-gk-mock-${i + 2}`, target: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ exam: 'AFCAT', subject: 'Combined', id: `afcat-combined-mock-${i + 2}`, target: 100 }))
];

function loadCache() {
  if (fs.existsSync(CACHE_FILE)) {
    return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  }
  return {};
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
}

async function callGemini(prompt) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { response_mime_type: "application/json" }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const parsed = JSON.parse(responseBody);
            let text = parsed.candidates[0].content.parts[0].text;
            // Clean up common MathJax unescaped backslashes
            // If the model writes rac instead of \frac inside a JSON string, JSON.parse crashes.
            // We'll try to parse directly first, if it fails, we'll try a regex cleanup.
            try {
              resolve(JSON.parse(text));
            } catch (e1) {
              try {
                // Regex to escape unescaped backslashes
                let cleanedText = text.replace(/\\([^"\\/bfnrt])/g, '\\\\$1');
                resolve(JSON.parse(cleanedText));
              } catch (e2) {
                reject(new Error("Failed to parse Gemini response: " + e1.message + " | " + e2.message));
              }
            }
          } catch (e) {
            reject(new Error("Failed to parse Gemini response: " + e.message));
          }
        } else {
          reject(new Error(`API Error ${res.statusCode}: ${responseBody}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function main() {
  console.log("=== STRICT WEIGHTAGE AI PYQ GENERATOR ENGINE ===");
  let cache = loadCache();
  
  for (const examData of examsToGenerate) {
    if (!cache[examData.id]) {
      cache[examData.id] = [];
    }
    
    const quotaKey = `${examData.exam}-${examData.subject}`;
    const quotas = QUOTAS[quotaKey];
    if (!quotas) {
      console.error(`Missing quotas for ${quotaKey}`);
      continue;
    }
    
    let generatedSoFar = cache[examData.id].length;
    if (generatedSoFar >= examData.target) {
      console.log(`Skipping ${examData.id} (Already fully generated)`);
      continue;
    }

    console.log(`\n>>> Generating ${examData.id} (${generatedSoFar}/${examData.target} questions)`);
    
    // We figure out which topic we should generate next based on what's already generated.
    // The easiest way is to re-evaluate the counts for each topic based on the currently generated array.
    // But since the AI might output slightly vague topic names, we'll just track index loops strictly.
    
    // We'll wipe the cache for this specific exam if it doesn't match the new quota system exactly
    // to be perfectly safe, or we can just linearly append. Since we just wiped EVERYTHING in a previous step,
    // the array is completely empty anyway.
    
    let currentExamQuestions = cache[examData.id];
    let topicIndex = 0;
    let questionsGeneratedForCurrentTopic = 0;

    // Fast-forward topic index if we resumed
    for (let i = 0; i < currentExamQuestions.length; i++) {
        questionsGeneratedForCurrentTopic++;
        if (questionsGeneratedForCurrentTopic >= quotas[topicIndex].q) {
            topicIndex++;
            questionsGeneratedForCurrentTopic = 0;
        }
    }

    while (topicIndex < quotas.length && currentExamQuestions.length < examData.target) {
        const topicObj = quotas[topicIndex];
        const remainingForTopic = topicObj.q - questionsGeneratedForCurrentTopic;
        
        if (remainingForTopic <= 0) {
            topicIndex++;
            questionsGeneratedForCurrentTopic = 0;
            continue;
        }
        
        const batchSize = Math.min(5, remainingForTopic);
        
        console.log(`[${examData.id}] Generating ${batchSize} questions for topic: ${topicObj.topic}...`);
        
        const prompt = `You are a strict examiner for the UPSC and Indian Air Force (NDA, CDS, AFCAT).
Generate exactly 5 extreme-difficulty, high-yield multiple-choice questions for the topic "${topicObj.topic}" to severely test the candidate's conceptual depth.

HARDCORE DIFFICULTY CONSTRAINTS:
1. Multi-Concept Synthesis: If this is Math/Physics, at least 2 questions must combine multiple chapters (e.g., Integration + Trigonometry, or Matrices + Probability).
2. Dense Multi-Statement Logic: If this is GAT/GK/English, at least 2 questions MUST use the 3-statement format (e.g., "Consider the following statements... Which is/are correct?").
3. Negative Traps: At least 1 question must use constraints like "INCORRECT", "NOT", or "EXCEPT" capitalized.
4. Distractor Engineering: The wrong options (distractors) MUST represent the exact answers a student would get if they made the most common calculation error or forgot an exception.
5. NO direct, simple factual recall questions. Force the user to think critically.
6. Absolutely NO EMOJIS anywhere.

For each of the 5 questions, provide:
1. The question text.
2. 4 distinct options (a, b, c, d).
3. The index of the correct option (0 for A, 1 for B, 2 for C, 3 for D).
4. A highly detailed, step-by-step educational explanation that teaches the core concept and proves why the distractors are wrong.

Your response must be a single JSON object in the following format:
{
  "questions": [
    {
      "q": "question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "detailed explanation"
    },
    ... (exactly 5 questions)
  ]
}
Output purely the JSON, with no markdown wrappers or other text.`;

        let success = false;
        let retries = 20;
        let retryDelay = 15000;

        while (!success && retries > 0) {
          try {
            let batchData = await callGemini(prompt);
            
            // Handle if the AI wrapped it in an object
            let parsedBatch = batchData.questions || batchData;
            
            if (!Array.isArray(parsedBatch)) throw new Error("Not an array");
            
            // Limit to exact batch size requested so we don't overflow the quota
            const validBatch = parsedBatch.slice(0, batchSize);
            
            const mappedBatch = validBatch.map((item, idx) => ({
              id: examData.id + "-" + Date.now() + "-" + idx,
              question: item.q || item.question,
              options: item.options,
              correct: item.correct,
              explanation: item.explanation,
              subject: examData.subject,
              topic: topicObj.topic,
              difficulty: "Hardcore"
            }));
            
            currentExamQuestions.push(...mappedBatch);
            questionsGeneratedForCurrentTopic += mappedBatch.length;
            
            saveCache(cache);
            success = true;
            await delay(5000); // Standard API pacing
          } catch (e) {
            if (e.message.includes('429') || e.message.includes('503')) {
              console.log(`[API Limit/Unavailable] ${e.message} - Retrying in ${retryDelay/1000}s...`);
              await delay(retryDelay);
              retryDelay = Math.min(retryDelay * 1.5, 120000); // Max wait 2 minutes
            } else {
              console.log(`Error: ${e.message}, retrying in 10s...`);
              await delay(10000); // Prevent infinite instant loops on unexpected errors
            }
            retries--;
          }
        }
        
        if (!success) {
            console.error("Failed to generate batch after 20 retries. Halting to prevent infinite loops.");
            process.exit(1);
        }
    }
    
    console.log(`+++ Completed ${examData.id} +++`);
  }
  
  console.log("=== ALL EXAMS STRICTLY GENERATED ===");
}

main();
