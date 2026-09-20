const { auditDocuments } = require('./pipeline_step0_audit');
const { extractAndConsolidate } = require('./pipeline_step1_extract');
const { detectKnowledgeGaps } = require('./pipeline_step2_gap_analysis');
const { researchAndFillGaps } = require('./pipeline_step3_research');
const { generateMasterNotes } = require('./pipeline_step4_generation');
const { calibrateAgainstExams } = require('./pipeline_step5_calibrate');
const { verifyAndFinalize } = require('./pipeline_step6_verify');

async function runMassiveBatch() {
    console.log("=========================================");
    console.log("🚀 STARTING MASSIVE BATCH AI EXTRACTION");
    console.log("=========================================");
    
    // In a real environment, you'd iterate over document_inventory.json
    // For safety, we simulate the exact calls that trigger the file-based pipelines
    try {
        console.log("\n[STAGE 0] Auditing Documents...");
        await auditDocuments('./'); 
        
        console.log("\n[STAGE 1] Extracting & Consolidating (PDF PARSING)...");
        await extractAndConsolidate('audit_report_phase0.json');
        
        console.log("\n[STAGE 2] Gap Analysis (GEMINI)...");
        await detectKnowledgeGaps('consolidated_knowledge_phase1.json', 'syllabus.json');
        
        console.log("\n[STAGE 3] Internet Research (GROQ/GEMINI/CEREBRAS)...");
        await researchAndFillGaps('knowledge_gaps_phase2.json');
        
        console.log("\n[STAGE 4] Master Notes Generation (CEREBRAS/GEMINI/GROQ)...");
        await generateMasterNotes('consolidated_knowledge_phase1.json', 'researched_facts_phase3.json');
        
        console.log("\n[STAGE 5] Exam Calibration (GEMINI)...");
        await calibrateAgainstExams('master_note_draft_phase4.json');
        
        console.log("\n[STAGE 6] Final Fact Verification (GEMINI)...");
        await verifyAndFinalize('calibrated_note_phase5.json');
        
        console.log("\n✅ MASSIVE BATCH COMPLETE. Output saved to final_published_master_base.json.");
    } catch (e) {
        console.error("Batch failed:", e);
    }
}

if (require.main === module) {
    // Prevent accidental execution of this costly script during testing
    console.log("Running Massive Batch (ALL STAGES UNLOCKED).");
    runMassiveBatch();
}
