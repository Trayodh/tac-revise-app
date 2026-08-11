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
    
    const masterNotesDB = {};

    for (const subject of Object.keys(consolidated)) {
        masterNotesDB[subject] = {};
        for (const chapter of Object.keys(consolidated[subject])) {
            masterNotesDB[subject][chapter] = {};
            for (const topic of Object.keys(consolidated[subject][chapter])) {
                
                console.log(`[STEP 4] Generating Master Note for: ${subject} -> ${chapter} -> ${topic}`);
                
                const baseContent = consolidated[subject][chapter][topic].consolidated_content;
                const researchData = (researched[subject] && researched[subject][chapter] && researched[subject][chapter][topic]) 
                                        ? researched[subject][chapter][topic] 
                                        : "No additional research required.";

                // 1. Cerebras: Generate and structure the bulk of the content
                const cerebrasPrompt = `
                You are a master educator for Defence Exams (NDA/CDS/AFCAT).
                Generate a Comprehensive Master Note for the topic "${topic}".
                
                WRITING PRINCIPLE:
                Do not stop at superficial definitions. Explain WHAT, WHY, HOW, WHEN, WHERE, EFFECT, EXAMPLES, and RELATED PHENOMENA where relevant.
                NO ARTIFICIAL WORD LIMIT. If it requires 5000 words, write 5000 words. Content determines length. It must feel like "One comprehensive source I can trust".
                
                STRUCTURE - You MUST output exactly these sections using Markdown headers:
                1. INTRODUCTION
                2. FUNDAMENTAL CONCEPTS
                3. CORE KNOWLEDGE
                4. DETAILED EXPLANATION
                5. IMPORTANT FACTS
                6. CLASSIFICATIONS
                7. CAUSE -> MECHANISM -> EFFECT (where applicable)
                8. COMPARISONS
                9. EXCEPTIONS
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
                
                const structuredExtrasRaw = await AIRouter.route(TASK_TYPES.ROUTINE, groqMetadataPrompt);
                let structuredExtras = { "17_QUICK_REVISION": "", metadata_tags: [] };
                try {
                     const jsonMatch4 = structuredExtrasRaw.match(/```json\n([\s\S]*?)\n```/);
                     const jsonStr4 = jsonMatch4 ? jsonMatch4[1] : structuredExtrasRaw.replace(/```/g, '');
                     structuredExtras = JSON.parse(jsonStr4.trim());
                } catch(e) {
                     console.log("Failed to parse Groq metadata JSON, using raw text. Error:", e.message);
                     structuredExtras["17_QUICK_REVISION"] = structuredExtrasRaw;
                }

                // Compile Final JSON 
                masterNotesDB[subject][chapter][topic] = {
                    metadata: {
                        tags: structuredExtras.metadata_tags || [],
                        last_updated: new Date().toISOString()
                    },
                    content: reviewedContent + "\n\n# 17. QUICK REVISION\n" + (structuredExtras["17_QUICK_REVISION"] || "")
                };
            }
        }
    }
    
    fs.writeFileSync('master_note_draft_phase4.json', JSON.stringify(masterNotesDB, null, 2));
    console.log(`[STEP 4] Master notes generation complete. Saved to master_note_draft_phase4.json`);
}

module.exports = { generateMasterNotes };
