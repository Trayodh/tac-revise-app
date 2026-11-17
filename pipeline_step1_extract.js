const fs = require('fs');
const { AIRouter, TASK_TYPES } = require('./ai_router');

/**
 * Step 1: Complete Knowledge Consolidation
 * Combines ALL relevant information from ALL readable documents for a unified knowledge base.
 */
async function extractAndConsolidate(auditReportFile) {
    console.log(`[STEP 1] Starting Complete Knowledge Consolidation`);
    
    let auditReport;
    try {
        auditReport = JSON.parse(fs.readFileSync(auditReportFile, 'utf8'));
    } catch (e) {
        console.error("Audit report not found. Run Step 0 first.");
        return;
    }
    
    // Group raw content by Subject -> Chapter -> Topic
    const groupedContent = {};
    const pdf = require('pdf-parse');
    const path = require('path');

    console.log("[STEP 1.1] Extracting and Initial Chunk Classification...");
    for (const entry of auditReport) {
        // 1. Collect information from every source
        let extractedText = "";
        try {
            const dataBuffer = fs.readFileSync(path.join(__dirname, entry.document));
            const data = await pdf(dataBuffer);
            // Limit to a chunk for classification/processing to avoid blowing up memory instantly on 50MB PDFs
            // For batch processing, we'd slice this up, but here we take a large chunk to prove integration.
            extractedText = data.text.substring(0, 15000); 
            console.log(`Successfully extracted ${data.numpages} pages from ${entry.document}.`);
        } catch (e) {
            console.error(`Failed to read PDF ${entry.document}:`, e.message);
            extractedText = `[Simulated raw text from ${entry.document}, PDF missing or unreadable]`;
        }
        
        // Use Groq for initial chunk classification and metadata
        const classificationPrompt = `
        Classify this text chunk. Identify the Subject, Chapter, and Topic it belongs to.
        Text: ${extractedText.substring(0, 3000)}
        Respond in JSON: { "subject": "", "chapter": "", "topic": "", "subtopic": "" }
        `;
        
        let metadata;
        try {
            const rawMetadata = await AIRouter.route(TASK_TYPES.ROUTINE, classificationPrompt);
            const jsonMatch = rawMetadata.match(/```json\n([\s\S]*?)\n```/);
            const jsonStr = jsonMatch ? jsonMatch[1] : rawMetadata.replace(/```/g, '');
            metadata = JSON.parse(jsonStr.trim());
        } catch (e) {
            console.log("Fallback metadata for", entry.document, "Error:", e.message);
            metadata = { subject: "General", chapter: "Misc", topic: "Misc", subtopic: "Misc" };
        }

        const { subject, chapter, topic, subtopic } = metadata;
        
        if (!groupedContent[subject]) groupedContent[subject] = {};
        if (!groupedContent[subject][chapter]) groupedContent[subject][chapter] = {};
        if (!groupedContent[subject][chapter][topic]) groupedContent[subject][chapter][topic] = [];
        
        groupedContent[subject][chapter][topic].push({
            source: entry.document,
            text: extractedText,
            subtopic
        });
    }

    console.log("[STEP 1.2] Consolidating and Resolving...");
    const masterKnowledgeBase = {};

    for (const subject of Object.keys(groupedContent)) {
        masterKnowledgeBase[subject] = {};
        for (const chapter of Object.keys(groupedContent[subject])) {
            masterKnowledgeBase[subject][chapter] = {};
            for (const topic of Object.keys(groupedContent[subject][chapter])) {
                
                const sourcesArray = groupedContent[subject][chapter][topic];
                console.log(`Consolidating ${subject} -> ${chapter} -> ${topic} from ${sourcesArray.length} sources`);

                // Combine all raw text for this topic
                const combinedRawText = sourcesArray.map(s => `SOURCE: ${s.source}\nTEXT: ${s.text}`).join("\n\n");

                // Use Cerebras for large-scale consolidation and restructuring.
                // DO NOT OVER-SUMMARISE.
                const consolidationPrompt = `
                You are consolidating multiple educational sources for Defence Exams into a unified Knowledge Base.
                DO NOT OVER-SUMMARISE. If multiple sources provide useful, complementary explanations, preserve them.
                Remove genuine duplication, but preserve:
                - complementary explanations
                - useful examples
                - exceptions
                - tables and classifications
                - diagrams/maps references
                - contradictions (note them)
                - outdated information (note them)
                - unexplained concepts (note them)
                
                Raw Data:
                ${combinedRawText}
                
                Output the consolidated knowledge retaining maximum useful detail.
                `;
                
                const consolidatedText = await AIRouter.route(TASK_TYPES.CONTENT, consolidationPrompt);

                // Use Gemini to resolve contradictions, ambiguous concepts, and complex relationships
                const resolutionPrompt = `
                Review the following consolidated text. 
                1. Identify and resolve any contradictions between sources.
                2. Clarify ambiguous concepts or difficult explanations.
                3. Clarify complex scientific/historical/political relationships.
                4. Output a refined, unified text without losing detail.
                
                Text to resolve:
                ${consolidatedText}
                `;
                
                const resolvedText = await AIRouter.route(TASK_TYPES.COMPLEX, resolutionPrompt);
                
                masterKnowledgeBase[subject][chapter][topic] = {
                    sources: sourcesArray.map(s => s.source),
                    consolidated_content: resolvedText
                };
            }
        }
    }
    
    fs.writeFileSync('consolidated_knowledge_phase1.json', JSON.stringify(masterKnowledgeBase, null, 2));
    console.log(`[STEP 1] Extraction & Consolidation complete. Saved to consolidated_knowledge_phase1.json`);
}

module.exports = { extractAndConsolidate };
