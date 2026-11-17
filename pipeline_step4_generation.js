const fs = require('fs');
const { AIRouter, TASK_TYPES } = require('./ai_router');

/**
 * Step 4: Comprehensive Master Notes Generation
 * Uses the entire enriched knowledge base to generate massive, detailed Master Notes
 * without artificial word limits.
 */
async function generateMasterNotes(consolidatedFile, researchedFactsFile) {
    console.log(`[STEP 4] Starting Comprehensive Master Notes Generation`);
    
    let consolidated, researched;
    try {
        consolidated = JSON.parse(fs.readFileSync(consolidatedFile, 'utf8'));
        // researched might not exist if no gaps were critical, handle gracefully
        try {
            researched = JSON.parse(fs.readFileSync(researchedFactsFile, 'utf8'));
        } catch(e) {
            researched = {};
        }
    } catch (e) {
        console.error("Required files not found. Ensure Step 1 is complete.");
        return;
    }
    
    let masterNotesDB = {};
    if (fs.existsSync('master_note_draft_phase4.json')) {
        try {
            masterNotesDB = JSON.parse(fs.readFileSync('master_note_draft_phase4.json', 'utf8'));
            console.log("Resuming from existing master_note_draft_phase4.json...");
        } catch(e) {}
    }

    for (const subject of Object.keys(consolidated)) {
        if (!masterNotesDB[subject]) masterNotesDB[subject] = {};
        for (const chapter of Object.keys(consolidated[subject])) {
            if (!masterNotesDB[subject][chapter]) masterNotesDB[subject][chapter] = {};
            for (const topic of Object.keys(consolidated[subject][chapter])) {
                if (masterNotesDB[subject][chapter][topic] && masterNotesDB[subject][chapter][topic].content) {
                    console.log(`[STEP 4] Skipping already generated topic: ${topic}`);
                    continue;
                }
                
                console.log(`[STEP 4] Generating Master Note for: ${subject} -> ${chapter} -> ${topic}`);
                
                const baseContent = consolidated[subject][chapter][topic].consolidated_content;
                const researchData = (researched[subject] && researched[subject][chapter] && researched[subject][chapter][topic]) 
                                        ? researched[subject][chapter][topic] 
                                        : "No additional research required.";
                try {
                    // 1. Cerebras: Structure and format based on taxonomy
                    const cerebrasPrompt = `
                    You are generating a Master Educational Note for the topic "${topic}".
                    Integrate the Base Knowledge with the New Internet Research into a cohesive, highly structured Markdown document.
                    Follow the STRICT EDUCATIONAL TAXONOMY headers:
                    1. FUNDAMENTAL CONCEPTS
                    2. CORE KNOWLEDGE
                    3. DEFINITIONS
                    4. FACTS
                    5. MNEMONICS / TRICKS
                    6. EXCEPTIONS
                    7. CHRONOLOGY
                    8. COMPARISONS (use Markdown tables)
                    9. APPLICATIONS
                    10. EXAMPLES
                    11. MAPS / DIAGRAMS / FLOWCHARTS (describe what should be shown)
                    12. ADVANCED KNOWLEDGE
                    13. DEEP-DIVE KNOWLEDGE (where justified)
                    14. CURRENT / DYNAMIC INFORMATION
                    
                    Consolidated Base Knowledge: ${baseContent}
                    New Internet Research: ${JSON.stringify(researchData)}
                    `;
                    
                    const draftContent = await AIRouter.route(TASK_TYPES.CONTENT, cerebrasPrompt);

                    // 2. Gemini: Review complex sections, resolve difficult material, detect missing knowledge
                    const geminiReviewPrompt = `
                    Review the following Draft Master Note for "${topic}".
                    1. Improve explanations for complex sections.
                    2. Resolve any difficult or ambiguous material.
                    3. Detect if any crucial Defence Exam knowledge is still missing and inject it.
                    4. Add two specific sections: "15. EXAM TRAPS" and "16. PYQ-RELEVANT INSIGHTS".
                    
                    Output the full, improved Markdown note.
                    
                    Draft Note:
                    ${draftContent}
                    `;
                    
                    const reviewedContent = await AIRouter.route(TASK_TYPES.COMPLEX, geminiReviewPrompt);

                    // 3. Groq: Generate metadata, tables, tags, and revision elements
                    const groqMetadataPrompt = `
                    Analyze the following Master Note for "${topic}".
                    Generate the following structured components in JSON format:
                    {
                      "metadata_tags": ["tag1", "tag2"],
                      "suggested_tables": ["Description of a comparative table that would be useful"],
                      "17_QUICK_REVISION": "A bulleted high-volume rapid revision summary of the entire note"
                    }
                    
                    Master Note:
                    ${reviewedContent.substring(0, 4000)} // Truncated to fit context window if needed
                    `;
                    
                    const rawMetadata = await AIRouter.route(TASK_TYPES.ROUTINE, groqMetadataPrompt);
                    let metadata = {};
                    try {
                        let cleanJson = rawMetadata.replace(/```json/g, '').replace(/```/g, '').trim();
                        metadata = JSON.parse(cleanJson);
                    } catch (e) {
                        console.error(`Failed to parse metadata for ${topic}`);
                        metadata = { error: "Failed to parse metadata" };
                    }

                    // Assemble the final draft
                    masterNotesDB[subject][chapter][topic] = {
                        content: reviewedContent,
                        metadata: metadata,
                        generated_at: new Date().toISOString()
                    };
                } catch (err) {
                    console.error(`[STEP 4] Failed to generate note for ${topic}:`, err.message);
                    masterNotesDB[subject][chapter][topic] = {
                        content: "Failed to generate due to API errors.",
                        metadata: { error: err.message },
                        generated_at: new Date().toISOString()
                    };
                }
                
                // Incrementally save
                fs.writeFileSync('master_note_draft_phase4.json', JSON.stringify(masterNotesDB, null, 2));
            }
        }
    }
    
    fs.writeFileSync('master_note_draft_phase4.json', JSON.stringify(masterNotesDB, null, 2));
    console.log(`[STEP 4] Master notes generation complete. Saved to master_note_draft_phase4.json`);
}

module.exports = { generateMasterNotes };
