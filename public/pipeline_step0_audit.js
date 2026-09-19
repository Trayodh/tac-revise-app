const fs = require('fs');
const { AIRouter, TASK_TYPES } = require('./ai_router');

async function auditDocuments(directory) {
    console.log(`[STEP 0] Starting Document Audit for directory: ${directory}`);
    
    // Simulate finding documents
    const documents = [
        "pathfinder_science.pdf",
        "pathfinder_studies.pdf",
        "pathfinder_mathematics.pdf"
    ];
    
    console.log(`[STEP 0] Found ${documents.length} documents.`);
    const auditReport = [];
    
    for (const doc of documents) {
        console.log(`[STEP 0] Auditing ${doc}...`);
        
        // We use Groq for routine processing like quick classification of a document title
        const classificationPrompt = `Classify this document based on its title: ${doc}. Return only a JSON object with 'subject' and 'relevance' (High, Medium, Low).`;
        
        try {
            const aiResult = await AIRouter.route(TASK_TYPES.ROUTINE, classificationPrompt);
            auditReport.push({ document: doc, classification: aiResult });
        } catch (e) {
            console.error(`Error classifying ${doc}: ${e.message}`);
        }
    }
    
    fs.writeFileSync('audit_report_phase0.json', JSON.stringify(auditReport, null, 2));
    console.log(`[STEP 0] Audit complete. Report saved to audit_report_phase0.json`);
}

module.exports = { auditDocuments };

// if (require.main === module) { auditDocuments('./'); }
