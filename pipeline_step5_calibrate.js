const fs = require('fs');
const { AIRouter, TASK_TYPES } = require('./ai_router');

/**
 * Step 5: Exam Calibration
 * Uses verified NDA/CDS/AFCAT PYQs to test if the Master Notes contain 
 * sufficient knowledge to answer actual examination questions.
 */
async function calibrateAgainstExams(draftNoteFile, pyqFile) {
    console.log(`[STEP 5] Starting PYQ/Exam Calibration`);
    
    let draftNotes, pyqs;
    try {
        draftNotes = JSON.parse(fs.readFileSync(draftNoteFile, 'utf8'));
        // Simulated verified PYQs file
        try {
            pyqs = JSON.parse(fs.readFileSync(pyqFile, 'utf8'));
        } catch(e) {
            console.log("No PYQ file provided, using simulated PYQs.");
            pyqs = { "Indian Monsoon": ["What is the primary cause of the Indian Monsoon?", "Explain the role of the Tibetan Plateau."] };
        }
    } catch (e) {
        console.error("Draft note file not found. Ensure Step 4 is complete.");
        return;
    }
    
    const calibrationReport = {};

    for (const subject of Object.keys(draftNotes)) {
        calibrationReport[subject] = {};
        for (const chapter of Object.keys(draftNotes[subject])) {
            calibrationReport[subject][chapter] = {};
            for (const topic of Object.keys(draftNotes[subject][chapter])) {
                
                console.log(`[STEP 5] Calibrating Topic: ${topic}`);
                
                const masterNote = draftNotes[subject][chapter][topic];
                const topicPyqs = pyqs[topic] || ["Simulated difficult PYQ for " + topic];

                // Use Gemini for the complex calibration process
                const calibrationPrompt = `
                You are a senior UPSC exam auditor calibrating Master Notes against actual Previous Year Questions (PYQs).
                
                Master Note (Truncated): ${JSON.stringify(masterNote.content).substring(0, 5000)}
                Associated PYQs: ${JSON.stringify(topicPyqs)}
                
                For each PYQ, ask: "Can the Master Notes provide enough knowledge to answer this?"
                Classify as: COVERED, INSUFFICIENT_DEPTH, or MISSING_KNOWLEDGE.
                
                IMPORTANT: Do not suggest deleting knowledge just because it hasn't appeared in a PYQ. Use PYQs as a calibration signal. Do not add enormous amounts of specialist material merely because one obscure question appeared.
                
                Additionally, identify the following trends across the PYQs:
                - recurring concepts
                - recurring facts
                - common traps
                - recent increases in depth
                - unusually detailed questions
                - emerging topics
                - topics becoming more conceptual / factual
                
                Output ONLY a JSON object with this exact schema:
                {
                  "pyq_coverage_percentage": 0-100,
                  "missing_knowledge": ["..."],
                  "insufficient_depth_areas": ["..."],
                  "recent_trend_changes": ["..."],
                  "recommended_additions": ["..."],
                  "requires_re_research": true/false
                }
                If requires_re_research is true, these gaps will be sent back to Step 2/3/4 for correction.
                `;
                
                try {
                    const rawReport = await AIRouter.route(TASK_TYPES.COMPLEX, calibrationPrompt);
                    const cleanJson = rawReport.replace(/```json/g, '').replace(/```/g, '').trim();
                    const parsedReport = JSON.parse(cleanJson);
                    
                    draftNotes[subject][chapter][topic].calibration = parsedReport;
                    draftNotes[subject][chapter][topic].requires_re_research = parsedReport.requires_re_research;
                    
                    if (parsedReport.requires_re_research) {
                        console.log(`[!] WARNING: Topic ${topic} failed calibration. Generating fallback flag for Steps 2/3/4 re-run.`);
                    }
                } catch (e) {
                    console.error(`[STEP 5] Failed to parse calibration for ${topic}: ${e.message}`);
                }
            }
        }
    }
    
    fs.writeFileSync('calibration_report_phase5.json', JSON.stringify(calibrationReport, null, 2));
    fs.writeFileSync('calibrated_note_phase5.json', JSON.stringify(draftNotes, null, 2));
    console.log(`[STEP 5] Calibration complete. Saved to calibration_report_phase5.json and calibrated_note_phase5.json`);
}

module.exports = { calibrateAgainstExams };
