const { execSync } = require('child_process');
const fs = require('fs');

const LOG_PREFIX = '[MASTER AI PIPELINE]';

function runStep(name, command) {
    console.log(`\n${LOG_PREFIX} === PHASE: ${name} ===`);
    console.log(`${LOG_PREFIX} Executing: ${command}`);
    try {
        execSync(command, { stdio: 'inherit', cwd: __dirname });
        console.log(`${LOG_PREFIX} ✅ Phase completed successfully.\n`);
    } catch (error) {
        console.error(`\n${LOG_PREFIX} ❌ CRITICAL ERROR IN PHASE: ${name}`);
        console.error(`${LOG_PREFIX} Command failed: ${command}`);
        console.error(`${LOG_PREFIX} Pipeline aborted.\n`);
        process.exit(1);
    }
}

console.log(`${LOG_PREFIX} Initiating Full Database Transformation Pipeline...\n`);

// Phase 1: Core Engine Refactoring
runStep('Core Text Refactoring (Fun Facts, Versus Tables, Mnemonics)', 'node refactor_notes_exam_focus.js');

// Phase 2: Subject-Specific UI Injections
runStep('Inject History Terminology Tooltips', 'node inject_history_tooltips.js');
runStep('Inject Geography Map Modals', 'node inject_geography_maps.js');
runStep('Inject Economics Flowcharts', 'node inject_economics_flowcharts.js');
runStep('Link Static Content in Current Affairs', 'node link_current_affairs.js');

// Phase 3: Content Expansion Engine
runStep('Expand Military Aptitude (Chiefs, Branches, Agencies)', 'node expand_military_aptitude.js');

// Phase 4: Final Compilation
runStep('Compile Final Database', 'node compile_final_database.js');

console.log(`\n${LOG_PREFIX} 🚀 TRANSFORMATION COMPLETED SUCCESSFULLY.`);
console.log(`${LOG_PREFIX} The notes_data_exam_focused.js database is ready for production.\n`);
