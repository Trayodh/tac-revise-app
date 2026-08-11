const fs = require('fs');
const { AIRouter, TASK_TYPES } = require('./ai_router');

/**
 * Step 2: Intelligent Knowledge Gap Analysis
 * Compares consolidated knowledge against potential examiner expectations
 * and uncovers missing micro-topics and concepts.
 */
async function detectKnowledgeGaps(consolidatedFile, syllabusFile) {
    console.log(`[STEP 2] Starting Intelligent Knowledge Gap Analysis`);
    
    let consolidated;
    let syllabus;
    try {
        consolidated = JSON.parse(fs.readFileSync(consolidatedFile, 'utf8'));
        // In a real run, this would be a detailed syllabus JSON.
        syllabus = JSON.parse(fs.readFileSync(syllabusFile, 'utf8'));
    } catch (e) {
        console.error("Required files not found. Using simulated syllabus.");
        syllabus = { "Geography": { "Climatology": ["Indian Monsoon", "Cyclones"] } };
    }
    
    const gapAnalysisReport = {};

    for (const subject of Object.keys(consolidated)) {
        gapAnalysisReport[subject] = {};
        for (const chapter of Object.keys(consolidated[subject])) {
            gapAnalysisReport[subject][chapter] = {};
            for (const topic of Object.keys(consolidated[subject][chapter])) {
                
                console.log(`Analyzing gaps for: ${subject} -> ${chapter} -> ${topic}`);
                const topicContent = consolidated[subject][chapter][topic].consolidated_content;

                // We use Gemini for deep reasoning and gap analysis, prompting it to "Think like an examiner"
                const gapAnalysisPrompt = `
                You are a senior examiner for UPSC NDA/CDS and AFCAT exams.
                Review the following consolidated notes for the topic "${topic}" under "${subject} -> ${chapter}".
                Do not merely check if the heading exists. Determine if the notes contain SUFFICIENT depth.
                
                For example, if the topic is "Indian Monsoon" and the notes say "It is caused by differential heating", that is NOT sufficient. You must identify missing micro-topics like ITCZ, seasonal migration, jet streams, El Nino/ENSO, IOD, etc.
                
                For every micro-topic related to "${topic}", determine its status:
                1. ADEQUATELY COVERED
                2. PARTIALLY COVERED
                3. MISSING
                4. OUTDATED
                5. NEEDS VERIFICATION
                6. NEEDS DEEPER EXPLANATION
                
                Respond ONLY with a JSON array of objects representing the gaps, with this exact schema:
                [
                  {
                    "micro_topic": "string",
                    "current_coverage": "status from list above",
                    "required_expansion": "Detailed description of what is missing",
                    "target_depth": "CORE | STANDARD | ADVANCED | DEEP DIVE",
                    "research_required": true/false,
                    "priority": "CRITICAL | HIGH | MEDIUM | LOW"
                  }
                ]
                
                Consolidated Notes:
                ${topicContent}
                `;
                
                try {
                    const rawGaps = await AIRouter.route(TASK_TYPES.COMPLEX, gapAnalysisPrompt);
                    // Attempt to parse JSON from Gemini's response (stripping markdown if necessary)
                    let cleanJson = rawGaps.replace(/```json/g, '').replace(/```/g, '').trim();
                    const parsedGaps = JSON.parse(cleanJson);
                    
                    gapAnalysisReport[subject][chapter][topic] = parsedGaps;
                } catch (e) {
                    console.error(`Error analyzing gaps for ${topic}:`, e.message);
                    gapAnalysisReport[subject][chapter][topic] = [{
                        micro_topic: "Error analyzing gaps",
                        current_coverage: "MISSING",
                        required_expansion: "Pipeline failed to analyze gaps for this topic.",
                        target_depth: "STANDARD",
                        research_required: true,
                        priority: "HIGH"
                    }];
                }
            }
        }
    }
    
    fs.writeFileSync('knowledge_gaps_phase2.json', JSON.stringify(gapAnalysisReport, null, 2));
    console.log(`[STEP 2] Gap detection complete. Saved to knowledge_gaps_phase2.json`);
}

module.exports = { detectKnowledgeGaps };
