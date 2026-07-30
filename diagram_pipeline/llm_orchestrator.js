const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetry(prompt, config, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: config.temperature || 0.1
                    }
                })
            });
            
            if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
            const data = await res.json();
            return data.candidates[0].content.parts[0].text.trim();
        } catch (e) {
            console.error(`[LLM] Attempt ${attempt} failed: ${e.message}`);
            if (attempt === maxRetries) throw e;
            const delay = attempt * 5000;
            console.log(`[LLM] Sleeping for ${delay/1000}s before retrying...`);
            await sleep(delay);
        }
    }
}

const PROMPT_EXTRACT = `You are the Visual Generation Engine for an AI-powered Defence Examination platform.
Extract EVERY concept from the provided text that requires a visual.
For EVERY extracted concept, classify it into exactly one visual representation engine.
Use the following rules:
- Mermaid: Only for processes, workflows, algorithms, org charts, decision trees, timelines, mind maps, simple relationships.
- SVG: For geometry, math, circuits, scientific apparatus, simple physics models.
- AI_Image: For maps, human anatomy, biological structures (cells, organs), vehicles (aircraft, tanks, ships), complex realistic illustrations, landscapes, history formations.

NEVER replace maps, anatomy, scientific apparatus, or complex structures with a Mermaid flowchart.
Output a JSON array in this EXACT format:
[
  {
    "title": "Short title",
    "subject": "Mathematics|Physics|Chemistry|Biology|History|Geography|Polity|Economics|Environment",
    "chapter": "Chapter name",
    "topic": "Topic name",
    "concept": "A brief description of what the visual should show",
    "difficulty": "Easy|Medium|Hard",
    "keywords": ["key1", "key2"],
    "rendering_engine": "Mermaid|SVG|AI_Image"
  }
]
If no diagrams can be made, return []. Do NOT wrap in markdown blocks, just raw JSON.`;

const PROMPT_MERMAID = `
You are a master Mermaid diagram architect.
Given the concept below, generate the BEST possible Mermaid.js diagram code.
Choose the best type (e.g. flowchart, mindmap, timeline, classDiagram, pie, stateDiagram-v2).
Use clean, minimal styling (classDef). NO emojis. Strictly educational. Diagram must be informative with at least 8 nodes.
Return ONLY a JSON object exactly like this (no markdown blocks):
{
  "mermaid": "graph TD\\n A-->B;",
  "caption": "Short caption for the diagram",
  "altText": "Detailed description for screen readers"
}
`;

const PROMPT_SVG = `
You are a master SVG graphics developer.
Given the concept below, write raw, highly precise SVG XML code for this geometric/scientific diagram.
The SVG must use a white background, have clear stroke lines, and include text labels (<text> tags) for all elements. Do not include external image links. Ensure it scales well (viewBox).
Return ONLY a JSON object exactly like this (no markdown blocks):
{
  "svg": "<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 400 400\\">...</svg>",
  "caption": "Short caption for the diagram",
  "altText": "Detailed description for screen readers"
}
`;

const PROMPT_IMAGE = `
You are a master textbook illustration director.
Given the concept below, write a highly descriptive text-to-image prompt to generate a photorealistic or textbook-quality labelled illustration.
The prompt MUST include phrases like "educational textbook illustration", "white background", "clearly labelled", "high resolution", "accurate".
Return ONLY a JSON object exactly like this (no markdown blocks):
{
  "prompt": "A highly detailed educational textbook illustration of...",
  "caption": "Short caption for the diagram",
  "altText": "Detailed description for screen readers"
}
`;

function cleanJSON(raw) {
    if (raw.startsWith('```json')) raw = raw.replace(/```json/g, '');
    if (raw.startsWith('```')) raw = raw.replace(/```/g, '');
    if (raw.endsWith('```')) raw = raw.substring(0, raw.length - 3);
    return raw.trim();
}

async function findDiagramOpportunities(textChunk) {
    console.log(`[LLM] Analyzing text chunk for diagram opportunities...`);
    try {
        const rawText = await fetchWithRetry(PROMPT_EXTRACT + "\n\nTEXT:\n" + textChunk, { temperature: 0.2 });
        return JSON.parse(cleanJSON(rawText));
    } catch (e) {
        console.error(`[LLM] Extractor ultimately failed:`, e.message);
        return [];
    }
}

async function generateMermaid(opportunity, errorTrace = null) {
    console.log(`[LLM] Generating Mermaid for: ${opportunity.title}`);
    try {
        let prompt = PROMPT_MERMAID + "\n\nCONCEPT:\n" + JSON.stringify(opportunity, null, 2);
        if (errorTrace) {
            prompt += `\n\nTHE PREVIOUS MERMAID CODE FAILED WITH THIS SYNTAX ERROR. FIX IT:\n${errorTrace}`;
        }
        const rawText = await fetchWithRetry(prompt, { temperature: 0.1 });
        return JSON.parse(cleanJSON(rawText));
    } catch (e) {
        console.error(`[LLM] Mermaid generator failed:`, e.message);
        return null;
    }
}

async function generateSVGCode(opportunity) {
    console.log(`[LLM] Generating SVG code for: ${opportunity.title}`);
    try {
        let prompt = PROMPT_SVG + "\n\nCONCEPT:\n" + JSON.stringify(opportunity, null, 2);
        const rawText = await fetchWithRetry(prompt, { temperature: 0.1 });
        return JSON.parse(cleanJSON(rawText));
    } catch (e) {
        console.error(`[LLM] SVG generator failed:`, e.message);
        return null;
    }
}

async function generateImagePrompt(opportunity) {
    console.log(`[LLM] Generating AI Image prompt for: ${opportunity.title}`);
    try {
        let prompt = PROMPT_IMAGE + "\n\nCONCEPT:\n" + JSON.stringify(opportunity, null, 2);
        const rawText = await fetchWithRetry(prompt, { temperature: 0.2 });
        return JSON.parse(cleanJSON(rawText));
    } catch (e) {
        console.error(`[LLM] Image Prompt generator failed:`, e.message);
        return null;
    }
}

module.exports = { findDiagramOpportunities, generateMermaid, generateSVGCode, generateImagePrompt };
