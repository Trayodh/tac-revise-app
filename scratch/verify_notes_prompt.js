const fs = require('fs');

try {
  // Mock window for syllabus_data.js
  global.window = {};
  require('../syllabus_data.js');
  
  const syllabusData = global.window.OFFICIAL_SYLLABUS_DATA;
  if (!syllabusData) {
    throw new Error("OFFICIAL_SYLLABUS_DATA not defined on window");
  }
  
  const totalKeys = Object.keys(syllabusData).length;
  console.log(`[PASS] Loaded syllabus_data.js successfully. Total topics mapped: ${totalKeys}`);
  
  // Verify a few topics
  const testTopics = ['trig-identities', 'reflection-refraction', 'indus-valley-civilization'];
  for (const topic of testTopics) {
    if (syllabusData[topic]) {
      console.log(`[PASS] Topic "${topic}" has syllabus context: "${syllabusData[topic].substring(0, 100)}..."`);
    } else {
      console.error(`[FAIL] Topic "${topic}" is missing syllabus context!`);
    }
  }
  
  // Verify json file exists and is equivalent
  const jsonContent = JSON.parse(fs.readFileSync('syllabus_data.json', 'utf8'));
  const jsonKeys = Object.keys(jsonContent).length;
  if (jsonKeys === totalKeys) {
    console.log(`[PASS] syllabus_data.json matches syllabus_data.js in key count (${jsonKeys}).`);
  } else {
    console.error(`[FAIL] Mismatch: JSON keys count is ${jsonKeys}, JS keys count is ${totalKeys}`);
  }
} catch (e) {
  console.error("[FAIL] Verification failed:", e);
}
