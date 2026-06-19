const { execSync } = require('child_process');
const fs = require('fs');

const EXAM_TARGETS = [
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-math-mock-${i + 2}`, count: 100 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-math-mock-${i + 2}`, count: 100 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-english-mock-${i + 2}`, count: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `nda-gs-mock-${i + 2}`, count: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-english-mock-${i + 2}`, count: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `cds-gs-mock-${i + 2}`, count: 120 })),
  ...Array.from({ length: 9 }, (_, i) => ({ id: `afcat-combined-mock-${i + 4}`, count: 100 })),
  ...Array.from({ length: 5 }, (_, i) => ({ id: `nda-gat-coaching-mock-${i + 2}`, count: 120 })),
  ...Array.from({ length: 5 }, (_, i) => ({ id: `cds-gk-coaching-mock-${i + 2}`, count: 120 }))
];

const CACHE_FILE = 'scratch/generated_questions.json';

async function main() {
  console.log("=== REMAKE ALL MOCKS RUNNER STARTED ===");
  
  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  }

  // Load the current database to verify what is actually merged in data.js
  const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
  const m = new module.constructor();
  try {
    m._compile(code, 'data.js');
  } catch (e) {
    console.error("Failed to compile data.js:", e.message);
    process.exit(1);
  }
  const CBT_EXAMS_DATABASE = m.exports.CBT_EXAMS_DATABASE;

  for (const target of EXAM_TARGETS) {
    // Check if it is already present in database with the required count and is unique
    const dbExam = CBT_EXAMS_DATABASE.find(e => e.id === target.id);
    const inCacheCount = (cache[target.id] || []).length;
    
    // Check if the exam questions in the DB are actually unique (not a duplicate copy of mock 1/2)
    let isUniqueInDb = false;
    if (dbExam && dbExam.questions.length === target.count) {
      // If we have it in the cache and the cache count is correct, we consider it completed
      if (inCacheCount === target.count) {
        isUniqueInDb = true;
      }
    }

    if (isUniqueInDb) {
      console.log(`[Skipping] ${target.id} is already completed.`);
      continue;
    }

    console.log(`\n==============================================`);
    console.log(`[Starting] Remaking ${target.id} (${target.count} questions)`);
    console.log(`==============================================`);
    
    try {
      execSync(`node scratch/remake_single_mock.js ${target.id}`, { stdio: 'inherit' });
      console.log(`[Completed] Successfully remade ${target.id}`);
    } catch (err) {
      console.error(`[Error] Failed to remake ${target.id}:`, err.message);
      // Wait 10s before proceeding/retrying
      await new Promise(r => setTimeout(r, 10000));
    }
    
    // Brief cooling delay between different exams to stay friendly to API limits
    await new Promise(r => setTimeout(r, 5000));
  }
  
  console.log("\n=== ALL MOCKS COMPLETED ===");
}

main();
