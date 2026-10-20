/**
 * render.test.js
 * Pre-flight deployment check for Render deployment.
 * Validates data integrity, server configuration, and database health.
 */

const fs = require('fs');
const path = require('path');

console.log('[RENDER TEST] Starting pre-flight verification...');

// 1. Verify JSON databases
const jsonFiles = ['notes_database.json', 'question_database.json', 'pipeline_state.json'];
for (const f of jsonFiles) {
  const p = path.join(__dirname, '..', f);
  if (!fs.existsSync(p)) {
    console.error(`[RENDER TEST] ❌ Missing database file: ${f}`);
    process.exit(1);
  }
  try {
    const raw = fs.readFileSync(p, 'utf8');
    JSON.parse(raw);
    console.log(`[RENDER TEST] ✅ Valid JSON: ${f}`);
  } catch (err) {
    console.error(`[RENDER TEST] ❌ Invalid JSON in ${f}:`, err.message);
    process.exit(1);
  }
}

// 2. Verify Question Validation
const { runValidation } = require('../validate_questions');
const validation = runValidation();
if (!validation.success) {
  console.error('[RENDER TEST] ❌ Question validation failed!');
  process.exit(1);
}
console.log('[RENDER TEST] ✅ Question database validation passed');

// 3. Verify Server module can be required
try {
  const requestHandler = require('../server');
  if (typeof requestHandler !== 'function') {
    throw new Error('requestHandler is not exported properly');
  }
  console.log('[RENDER TEST] ✅ server.js request handler loaded successfully');
} catch (err) {
  console.error('[RENDER TEST] ❌ Error loading server.js:', err.message);
  process.exit(1);
}

console.log('[RENDER TEST] 🎉 ALL PRE-FLIGHT CHECKS PASSED. Ready for Render deploy!');
process.exit(0);
