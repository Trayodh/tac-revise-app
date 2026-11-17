const { calibrateAgainstExams } = require('./pipeline_step5_calibrate');
const { verifyAndFinalize } = require('./pipeline_step6_verify');

async function runRemaining() {
    console.log("\n[STAGE 5] Exam Calibration (GEMINI)...");
    await calibrateAgainstExams('master_note_draft_phase4.json', 'pyqs.json');
    
    console.log("\n[STAGE 6] Final Fact Verification (GEMINI)...");
    await verifyAndFinalize('calibrated_note_phase5.json');
}

runRemaining();
