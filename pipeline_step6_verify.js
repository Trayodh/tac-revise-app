const fs = require('fs');
const { AIRouter, TASK_TYPES } = require('./ai_router');

/**
 * Step 6: Final Master Note Validation
 * Performs a rigorous 15-point audit on the Master Notes before final publication.
 * Uses Gemini for high-risk interrogation.
 */
async function verifyAndFinalize(calibratedFile) {
    console.log(`[STEP 6] Starting Final Master Note Validation`);
    
    let calibratedData;
    try {
        calibratedData = JSON.parse(fs.readFileSync(calibratedFile, 'utf8'));
    } catch (e) {
        console.error("Calibrated note file not found. Ensure Step 5 is complete.");
        return;
    }
    
    const finalPublishedBase = {};

    for (const subject of Object.keys(calibratedData)) {
        finalPublishedBase[subject] = {};
        for (const chapter of Object.keys(calibratedData[subject])) {
            
            console.log(`[STEP 6] Performing Final Audit on: ${subject} -> ${chapter}`);
            
            // Collect all topics under this chapter for a holistic chapter review
            const chapterTopics = calibratedData[subject][chapter];
            let chapterHasCriticalGaps = false;
            const chapterAuditReport = {};
            
            for (const topic of Object.keys(chapterTopics)) {
                const topicData = chapterTopics[topic];
                
                // If Step 5 flagged a re-run, we carry that forward
                if (topicData.requires_re_research) {
                    chapterHasCriticalGaps = true;
                }

                // Gemini Final Review Interrogation
                const validationPrompt = `
                Perform a brutal 15-point Final Audit on the following Defence Exam Master Note chapter.
                
                Check for:
                1. Complete syllabus coverage
                2. Conceptual correctness
                3. Factual correctness
                4. Internal consistency
                5. Currentness
                6. Depth
                7. Exam relevance
                8. Missing micro-topics
                9. Duplicate information
                10. Contradictory information
                11. Quality of explanations
                12. Quality of tables
                13. Quality of diagrams/maps
                14. PYQ coverage
                15. Revision usefulness
                
                Ask and answer these specific questions:
                - What important knowledge is still missing?
                - What statements may be inaccurate?
                - What topics are deceptively shallow?
                - What sections contain unnecessary trivia?
                - What would a very difficult but fair AFCAT/CDS/NDA question expose as a weakness?
                
                If ANY CRITICAL gaps remain, you CANNOT mark this as COMPLETE.
                
                Output a JSON response:
                {
                  "audit_answers": {
                     "missing_knowledge": "...",
                     "inaccurate_statements": "...",
                     "deceptively_shallow_topics": "...",
                     "unnecessary_trivia": "...",
                     "weakness_exposed_by_hard_pyq": "..."
                  },
                  "final_status": "COMPLETE | NEEDS EXPANSION | NEEDS VERIFICATION | NEEDS UPDATE",
                  "critical_gaps_remaining": true/false
                }
                
                Master Note Data:
                ${JSON.stringify(topicData).substring(0, 5000)} // Truncated to fit if necessary
                `;
                
                try {
                    const rawValidation = await AIRouter.route(TASK_TYPES.COMPLEX, validationPrompt);
                    const jsonMatch = rawValidation.match(/```json\n([\s\S]*?)\n```/);
                    let cleanJson = rawValidation;
                    if (jsonMatch && jsonMatch[1]) {
                        cleanJson = jsonMatch[1].trim();
                    } else {
                        // Fallback in case there are no backticks but text around it
                        const firstBrace = rawValidation.indexOf('{');
                        const lastBrace = rawValidation.lastIndexOf('}');
                        if (firstBrace !== -1 && lastBrace !== -1) {
                            cleanJson = rawValidation.substring(firstBrace, lastBrace + 1);
                        }
                    }
                    const parsedValidation = JSON.parse(cleanJson);
                    
                    chapterAuditReport[topic] = parsedValidation;
                    if (parsedValidation.critical_gaps_remaining || parsedValidation.final_status !== "COMPLETE") {
                        chapterHasCriticalGaps = true;
                    }
                } catch (e) {
                    console.error(`[STEP 6] Failed to validate ${topic}: ${e.message}`);
                    chapterHasCriticalGaps = true;
                }
            }
            
            // Assign Final Status to the Chapter
            const chapterStatus = chapterHasCriticalGaps ? "NEEDS UPDATE" : "COMPLETE";
            
            if (chapterStatus === "COMPLETE") {
                console.log(`[STEP 6] SUCCESS: ${chapter} is verified and ready for publication.`);
                finalPublishedBase[chapter] = {
                    status: "PUBLISHED",
                    topics: chapterTopics
                };
            } else {
                console.log(`[STEP 6] WARNING: ${chapter} failed validation. Status: NEEDS UPDATE/EXPANSION/VERIFICATION.`);
                finalPublishedBase[chapter] = {
                    status: "FAILED_VALIDATION",
                    audit_reports: chapterAuditReport
                };
            }
        }
    }
    
    fs.writeFileSync('final_published_master_base.json', JSON.stringify(finalPublishedBase, null, 2));
    console.log(`[STEP 6] Fact Verification and Validation complete. Saved to final_published_master_base.json`);
}

module.exports = { verifyAndFinalize };
