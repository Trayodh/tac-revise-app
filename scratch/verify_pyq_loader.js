const fs = require('fs');

try {
  // 1. Mock window and global objects for browser compatibility
  global.window = {};
  global.EXPANDED_NOTES_DATA = {};
  global.window.EXPANDED_NOTES_DATA = global.EXPANDED_NOTES_DATA;
  
  // 2. Load pyq_trends.js
  require('../pyq_trends.js');
  const pyqData = global.window.PYQ_TRENDS_DATA;
  if (!pyqData) {
    throw new Error("PYQ_TRENDS_DATA not defined on window");
  }
  console.log(`[PASS] Loaded pyq_trends.js. Total topics: ${Object.keys(pyqData).length}`);
  
  // 3. Load syllabus_data.js
  require('../syllabus_data.js');
  const syllabusData = global.window.OFFICIAL_SYLLABUS_DATA;
  if (!syllabusData) {
    throw new Error("OFFICIAL_SYLLABUS_DATA not defined on window");
  }
  console.log(`[PASS] Loaded syllabus_data.js. Total topics: ${Object.keys(syllabusData).length}`);
  
  // 4. Load notes_extra_polity.js
  require('../notes_extra_polity.js');
  const presidentNotes = global.window.EXPANDED_NOTES_DATA['president'];
  if (!presidentNotes) {
    throw new Error("EXPANDED_NOTES_DATA['president'] not defined");
  }
  if (presidentNotes.includes('Election of the President') && presidentNotes.includes('Procedure for Impeachment')) {
    console.log("[PASS] President notes updated successfully and contains ultimate details!");
  } else {
    throw new Error("President notes do not contain updated details!");
  }
  
  // 5. Verify JSON exists and matches
  const jsonContent = JSON.parse(fs.readFileSync('pyq_trends.json', 'utf8'));
  if (Object.keys(jsonContent).length === Object.keys(pyqData).length) {
    console.log("[PASS] pyq_trends.json matches pyq_trends.js");
  } else {
    throw new Error("Key count mismatch between pyq_trends.json and pyq_trends.js");
  }
  
  console.log("[ALL PASS] Verification succeeded!");
} catch (e) {
  console.error("[FAIL] Verification failed:", e);
  process.exit(1);
}
