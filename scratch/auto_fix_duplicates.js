const fs = require('fs');
const { execSync } = require('child_process');

const CACHE_FILE = 'scratch/generated_questions.json';

async function main() {
  console.log("=== AUTO FIX DUPLICATES STARTED ===");

  // 1. Load cache
  let cache = {};
  if (fs.existsSync(CACHE_FILE)) {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  }

  // 2. Load CBT_EXAMS_DATABASE from data.js
  const dataContent = fs.readFileSync('data.js', 'utf8');
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found!");
    process.exit(1);
  }

  let firstBracket = dataContent.indexOf('[', dbStart);
  let arrayEndIndex = dataContent.lastIndexOf(']');
  
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

  // 3. Apply cached questions to database
  let updateCount = 0;
  CBT_EXAMS_DATABASE.forEach(exam => {
    if (cache[exam.id] && cache[exam.id].length > 0) {
      const cachedQuestions = cache[exam.id];
      // Check if current questions in DB are different from cache or if we just want to force update
      // Let's force update if the cache has correct length
      if (exam.questions.length !== cachedQuestions.length || exam.questions[0].question !== cachedQuestions[0].question) {
        console.log(`[Updating from Cache] ${exam.id} (${cachedQuestions.length} questions)`);
        exam.questions = cachedQuestions;
        exam.questionsCount = cachedQuestions.length;
        updateCount++;
      }
    }
  });

  if (updateCount > 0) {
    const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
    const newContent = dataContent.substring(0, firstBracket) + updatedCbtExamsStr + dataContent.substring(arrayEndIndex + 1);
    fs.writeFileSync('data.js', newContent);
    console.log(`Successfully updated ${updateCount} exams from cache in data.js`);
  } else {
    console.log("No exams needed updating from cache.");
  }

  // 4. Find remaining duplicates or incomplete mocks and generate them
  // Let's check which exams are identical to another exam
  const ids = CBT_EXAMS_DATABASE.map(e => e.id);
  const duplicates = [];
  
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const m1 = CBT_EXAMS_DATABASE[i];
      const m2 = CBT_EXAMS_DATABASE[j];
      if (m1.questions.length > 0 && m2.questions.length > 0 && m1.questions[0].question === m2.questions[0].question) {
        // We found a duplicate. Let's mark the second one to be remade
        if (!duplicates.includes(m2.id)) {
          duplicates.push(m2.id);
        }
      }
    }
  }

  console.log(`Found ${duplicates.length} duplicate exams that need remaking:`, duplicates);

  for (const dupId of duplicates) {
    console.log(`\n==============================================`);
    console.log(`[Remaking Duplicate] ${dupId}`);
    console.log(`==============================================`);
    
    // Clear the cache for this duplicate since it is bad/duplicate
    if (cache[dupId]) {
      delete cache[dupId];
      fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2));
    }

    try {
      execSync(`node scratch/remake_single_mock.js ${dupId}`, { stdio: 'inherit' });
      console.log(`[Completed] Successfully remade duplicate: ${dupId}`);
    } catch (err) {
      console.error(`[Error] Failed to remake duplicate ${dupId}:`, err.message);
    }
    
    // Cool down delay
    await new Promise(r => setTimeout(r, 6000));
  }

  console.log("=== AUTO FIX DUPLICATES COMPLETED ===");
}

main();
