const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const { AIRouter, TASK_TYPES } = require('./ai_router');

// Real internet search mechanism using Axios and Cheerio (fallback scraper)
async function performInternetSearch(query) {
    console.log(`[Internet] Searching authoritative sources for: ${query}`);
    try {
        const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
        const response = await axios.get(url, {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
        });
        const $ = cheerio.load(response.data);
        let resultsText = "";
        $('.result__snippet').each((i, el) => {
            if (i < 5) resultsText += $(el).text() + "\n\n";
        });
        if (!resultsText) return "[Internet] No relevant authoritative snippets found.";
        return `[WEB SCRAPE DATA for "${query}"]\n\n${resultsText}`;
    } catch(e) {
        return `[Internet Search Failed: ${e.message}]`;
    }
}

/**
 * Step 3: Targeted Internet Knowledge Expansion
 * Uses the Knowledge Gap Map to research CRITICAL and HIGH priority gaps.
 */
async function researchAndFillGaps(gapFile) {
    console.log(`[STEP 3] Starting Targeted Internet Knowledge Expansion`);
    
    let gapsReport;
    try {
        gapsReport = JSON.parse(fs.readFileSync(gapFile, 'utf8'));
    } catch (e) {
        console.error("Gap file not found.");
        return;
    }
    
    const researchedKnowledge = {};

    for (const subject of Object.keys(gapsReport)) {
        researchedKnowledge[subject] = {};
        for (const chapter of Object.keys(gapsReport[subject])) {
            researchedKnowledge[subject][chapter] = {};
            for (const topic of Object.keys(gapsReport[subject][chapter])) {
                researchedKnowledge[subject][chapter][topic] = {};
                
                const microTopics = gapsReport[subject][chapter][topic];
                
                for (const gap of microTopics) {
                    // Only target CRITICAL and HIGH priority gaps
                    if (gap.priority !== "CRITICAL" && gap.priority !== "HIGH") {
                        continue;
                    }
                    
                    console.log(`[STEP 3] Researching Gap: ${gap.micro_topic} (Priority: ${gap.priority})`);
                    
                    // 1. Formulate research query (Gemini)
                    const queryPrompt = `
                    Generate a highly targeted Google Search query to research the following missing knowledge gap for defence exams (NDA/CDS). 
                    Prefer Government (gov.in, drdo.gov.in, etc.), Defence, Scientific, or University domains.
                    Topic: ${topic}
                    Gap: ${gap.micro_topic}
                    Required Expansion: ${gap.required_expansion}
                    
                    Return ONLY the literal search query string.
                    `;
                    let query = await AIRouter.route(TASK_TYPES.COMPLEX, queryPrompt);
                    query = query.trim().replace(/['"]/g, '');
                    
                    // 2. Retrieve authoritative sources
                    const rawWebData = await performInternetSearch(query);
                    
                    // 3 & 4. Process chunks and extract relevant information (Groq)
                    const extractionPrompt = `
                    Extract the highly relevant, factual information from the following web data regarding "${gap.micro_topic}".
                    Ignore trivia. Focus on syllabus relevance, factual importance, or current affairs.
                    Web Data: ${rawWebData}
                    `;
                    const extractedInfo = await AIRouter.route(TASK_TYPES.ROUTINE, extractionPrompt);
                    
                    // 5 & 6. Verify claims and determine static/dynamic status (Gemini)
                    const verificationPrompt = `
                    Act as a deep researcher. Verify the claims in the following extracted information.
                    Resolve any contradictions using logic and established historical/scientific consensus.
                    Determine if this information is static (unchanging, e.g., History) or dynamic (e.g., Current Affairs, recent tests).
                    If dynamic, append the current date to the facts.
                    
                    Extracted Info: ${extractedInfo}
                    `;
                    const verifiedFacts = await AIRouter.route(TASK_TYPES.COMPLEX, verificationPrompt);
                    
                    // 7. Convert validated research into structured educational content (Cerebras)
                    const restructuringPrompt = `
                    Convert the following verified facts into structured educational content suitable for a master note on ${topic} -> ${gap.micro_topic}.
                    Format it clearly, highlighting core facts, comparisons, or relationships.
                    
                    Verified Facts: ${verifiedFacts}
                    `;
                    const structuredContent = await AIRouter.route(TASK_TYPES.CONTENT, restructuringPrompt);
                    
                    researchedKnowledge[subject][chapter][topic][gap.micro_topic] = {
                        priority: gap.priority,
                        target_depth: gap.target_depth,
                        structured_content: structuredContent,
                        date_researched: new Date().toISOString()
                    };
                }
            }
        }
    }
    
    fs.writeFileSync('researched_facts_phase3.json', JSON.stringify(researchedKnowledge, null, 2));
    console.log(`[STEP 3] Internet Research complete. Saved to researched_facts_phase3.json`);
}

module.exports = { researchAndFillGaps };
