const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_PREFIX = '[PIPELINE]';

function runStep(name, command) {
    console.log(`\n${LOG_PREFIX} === STEP: ${name} ===`);
    console.log(`${LOG_PREFIX} Running: ${command}`);
    try {
        execSync(command, { stdio: 'inherit', cwd: __dirname });
        console.log(`${LOG_PREFIX} ✅ Step completed successfully.\n`);
    } catch (error) {
        console.error(`\n${LOG_PREFIX} ❌ CRITICAL ERROR IN STEP: ${name}`);
        console.error(`${LOG_PREFIX} Command failed: ${command}`);
        console.error(`${LOG_PREFIX} Pipeline aborted.\n`);
        process.exit(1);
    }
}

console.log(`${LOG_PREFIX} Starting Database Generation Pipeline...\n`);

// STEP 1: Consolidate all raw json banks into the master structured_bank.json
runStep('Build Master Structured Bank', 'node build_master_bank.js');

// STEP 2: Use structured_bank.json to generate random mock exams and write data.js
runStep('Generate All Papers', 'node generate_all_papers.js');

// STEP 3: Clean merged options/explanations and refill short tests with missing questions
runStep('Fix Options and Formats', 'node fix_data.js');

// STEP 4: Remove remaining \u0013 control characters from data.js
runStep('Clean Control Characters', 'node -e "const fs=require(\'fs\');let c=fs.readFileSync(\'data.js\', \'utf8\').replace(/\\\\u0013/g, \'\').replace(/\\\\x13/g, \'\');fs.writeFileSync(\'data.js\', c);"');

// STEP 5: Pad exams to required limits
runStep('Pad Missing Test Questions', 'node pad_data.js');

// STEP 5.5: Audit and Rectify Mock Papers
runStep('Audit Questions', 'node deep_audit.js');
runStep('Auto-Rectify Mock Papers', 'node scratch/auto_rectify_papers.js');
runStep('Post-Rectification Clean Options', 'node fix_data.js');

// STEP 6: Validate output integrity before startup
runStep('Validate Data Integrity', 'node validate_questions.js');

// STEP 7: Sync the generated database to the Supabase Cloud
runStep('Sync Database to Supabase', 'node scratch/seed_supabase.js');

console.log(`\n${LOG_PREFIX} 🚀 PIPELINE COMPLETED SUCCESSFULLY.`);
console.log(`${LOG_PREFIX} You can now start the server with: npm start\n`);

