const { execSync } = require('child_process');

const subjects = [
  'geography',
  'polity',
  'economics',
  'physics',
  'chemistry',
  'biology'
];

console.log("Starting batch extraction for remaining subjects...");

for (const subject of subjects) {
  console.log(`\n\n======================================`);
  console.log(`Starting extraction for ${subject.toUpperCase()}...`);
  console.log(`======================================\n`);
  
  try {
    execSync(`node extract_pathfinder_deep.js ${subject}`, { stdio: 'inherit' });
    console.log(`✅ Completed extraction for ${subject}`);
  } catch (err) {
    console.error(`❌ Failed extraction for ${subject}:`, err.message);
  }
}

console.log("\n\nAll extractions completed successfully!");
