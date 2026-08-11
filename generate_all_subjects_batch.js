const fs = require('fs');
const { researchAndFillGaps } = require('./pipeline_step3_research');
const { generateMasterNotes } = require('./pipeline_step4_generation');
const { calibrateAgainstExams } = require('./pipeline_step5_calibrate');
const { verifyAndFinalize } = require('./pipeline_step6_verify');
const { execSync } = require('child_process');

async function runMassiveBatch() {
    console.log("=========================================");
    console.log("🚀 STARTING MASSIVE BATCH AI EXTRACTION (ALL SUBJECTS)");
    console.log("=========================================");
    
    try {
        console.log("\n[STAGE 0] Bootstrapping Syllabus Data...");
        
        // Read all topics mapping
        const allTopics = JSON.parse(fs.readFileSync('all_topics_mapping.json', 'utf8'));
        
        // Build a mock consolidated_knowledge_phase1.json (empty content)
        const consolidated = {};
        const gaps = {};
        
        let totalTopics = 0;

        for (const item of allTopics) {
            const subject = item.subject;
            const chapter = item.chapter;
            const topic = item.title;
            
            if (!consolidated[subject]) consolidated[subject] = {};
            if (!consolidated[subject][chapter]) consolidated[subject][chapter] = {};
            consolidated[subject][chapter][topic] = {
                sources: ["Syllabus Bootstrap"],
                consolidated_content: "Concept to be researched from scratch."
            };
            
            if (!gaps[subject]) gaps[subject] = {};
            if (!gaps[subject][chapter]) gaps[subject][chapter] = {};
            gaps[subject][chapter][topic] = [
                {
                    micro_topic: "Complete Topic Overview",
                    current_coverage: "MISSING",
                    required_expansion: `Generate a comprehensive master note for the topic '${topic}' covering fundamental concepts, core knowledge, comparisons, applications, and PYQ-relevant insights.`,
                    target_depth: "DEEP DIVE",
                    research_required: true,
                    priority: "CRITICAL"
                }
            ];
            
            totalTopics++;
        }
        
        fs.writeFileSync('consolidated_knowledge_phase1.json', JSON.stringify(consolidated, null, 2));
        fs.writeFileSync('knowledge_gaps_phase2.json', JSON.stringify(gaps, null, 2));
        
        console.log(`Bootstrapped ${totalTopics} topics from the syllabus into the pipeline.`);
        
        console.log("\n[STAGE 3] Internet Research (GROQ/GEMINI/CEREBRAS)...");
        await researchAndFillGaps('knowledge_gaps_phase2.json');
        
        console.log("\n[STAGE 4] Master Notes Generation (CEREBRAS/GEMINI/GROQ)...");
        await generateMasterNotes('consolidated_knowledge_phase1.json', 'researched_facts_phase3.json');
        
        console.log("\n[STAGE 5] Exam Calibration (GEMINI)...");
        await calibrateAgainstExams('master_note_draft_phase4.json');
        
        console.log("\n[STAGE 6] Final Fact Verification (GEMINI)...");
        await verifyAndFinalize('calibrated_note_phase5.json');
        
        console.log("\n✅ MASSIVE BATCH COMPLETE. Notes saved to calibrated_note_phase5.json and final_published_master_base.json.");
        
        console.log("\n[STAGE 7] Distributing Notes to UI...");
        execSync('node distribute_master_notes.js', { stdio: 'inherit', cwd: __dirname });
        console.log("\n✅ NOTES DISTRIBUTED SUCCESSFULLY.");
        
    } catch (e) {
        console.error("Batch failed:", e);
    }
}

if (require.main === module) {
    runMassiveBatch();
}
