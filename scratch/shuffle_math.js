const fs = require('fs');

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function main() {
  console.log("=== Math Syllabus Shuffler ===");
  const cachePath = 'scratch/generated_questions.json';
  if (!fs.existsSync(cachePath)) {
    console.error("Cache file not found!");
    return;
  }

  const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

  // 1. Process NDA Mathematics
  let allNdaMath = [];
  const ndaKeys = [];
  for (let i = 2; i <= 10; i++) {
    const key = `nda-math-mock-${i}`;
    if (cache[key] && cache[key].length > 0) {
      allNdaMath = allNdaMath.concat(cache[key]);
      ndaKeys.push(key);
    }
  }

  if (allNdaMath.length > 0) {
    console.log(`Found ${allNdaMath.length} NDA Math questions across ${ndaKeys.length} mocks. Shuffling...`);
    const shuffledNda = shuffleArray(allNdaMath);
    
    let currentIndex = 0;
    for (const key of ndaKeys) {
      const originalLength = cache[key].length;
      cache[key] = shuffledNda.slice(currentIndex, currentIndex + originalLength);
      currentIndex += originalLength;
    }
  }

  // 2. Process CDS Mathematics
  let allCdsMath = [];
  const cdsKeys = [];
  for (let i = 2; i <= 10; i++) {
    const key = `cds-math-mock-${i}`;
    if (cache[key] && cache[key].length > 0) {
      allCdsMath = allCdsMath.concat(cache[key]);
      cdsKeys.push(key);
    }
  }

  if (allCdsMath.length > 0) {
    console.log(`Found ${allCdsMath.length} CDS Math questions across ${cdsKeys.length} mocks. Shuffling...`);
    const shuffledCds = shuffleArray(allCdsMath);
    
    let currentIndex = 0;
    for (const key of cdsKeys) {
      const originalLength = cache[key].length;
      cache[key] = shuffledCds.slice(currentIndex, currentIndex + originalLength);
      currentIndex += originalLength;
    }
  }

  // Save back to cache
  fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
  console.log("Shuffling complete! Cache updated.");
}

main();
