require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const MAPPINGS = [
    { file: 'notes_extra_history.js', pdf: 'Ancient history capsule_compressed.pdf' },
    { file: 'notes_extra_biology.js', pdf: 'Biology class notes_compressed.pdf' },
    { file: 'notes_extra_chemistry.js', pdf: 'Chemistry class Notes_compressed.pdf' },
    { file: 'notes_extra_physics.js', pdf: 'Physics class notes pdf_compressed.pdf' },
    { file: 'notes_extra_geography.js', pdf: 'Indian Geography class notes_compressed.pdf' },
    { file: 'notes_extra_physical_geography.js', pdf: 'Physical Geography class notes_compressed.pdf' },
    { file: 'notes_extra_polity.js', pdf: 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf' }
];

const PROMPT_TEMPLATE = `You are an expert UPSC defence exams (NDA/CDS) faculty member.
I am providing you with a study material PDF and an existing short note on the topic "{TOPIC_NAME}".
Your task is to significantly enrich this note by ensuring proper extraction from the PDF. The PDF is your primary source of truth.

Requirements:
1. Output ONLY a valid HTML snippet representing the enriched note. Do not use markdown code block backticks (like \`\`\`html) around your entire output.
2. The outer container must be: <div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
3. Include an <h3> title matching the topic.
4. Add highly detailed paragraphs extracting all relevant facts, dates, concepts, and nuances from the PDF regarding this topic. Do not just summarize. You must pull actual actionable data, specific numerical values, formulas, and deep-dive technical insights directly from the PDF.
5. You MUST include at least one <div class="mermaid">...</div> block with a Mermaid.js diagram (e.g., flowchart, mindmap, timeline) that visually explains the concept or maps out the relationships. Ensure the Mermaid syntax is valid and unescaped.
6. Include at least two Markdown/HTML tables for comparative facts, structured data, or a "High-Yield Facts to Memorize" list.
7. Add a "Strategic Exam Tip" box using this structure: <div style="margin-top: 20px; padding: 15px; background: rgba(255, 215, 0, 0.1); border-left: 4px solid #FFD700; border-radius: 4px;"><strong style="color: #FFD700;">Strategic Exam Tip:</strong> [Your tip here]</div>

Here is the existing short note to guide you on what the topic is about:
{EXISTING_NOTE}

Output the enriched HTML snippet now:`;

async function uploadPdfIfNeeded(pdfPath) {
    if (!fs.existsSync(pdfPath)) {
        console.warn(`[WARN] PDF not found: ${pdfPath}`);
        return null;
    }
    console.log(`Uploading ${pdfPath}...`);
    const uploadResult = await ai.files.upload({
        file: pdfPath,
        mimeType: 'application/pdf',
    });
    console.log(`Waiting 30 seconds for processing ${pdfPath}...`);
    await new Promise(resolve => setTimeout(resolve, 30000));
    return uploadResult;
}

async function processFile(mapping) {
    console.log(`\n--- Processing ${mapping.file} ---`);
    if (!fs.existsSync(mapping.file)) {
        console.log(`File not found: ${mapping.file}`);
        return;
    }

    let fileContent = fs.readFileSync(mapping.file, 'utf8');
    const regex = /EXPANDED_NOTES_DATA\(["[^"]+)"\]\s*=\s*`([\s\S]*?)`;\s*(?=EXPANDED_NOTES_DATA|$)/g;
    
    let match;
    const topics = [];
    while ((match = regex.exec(fileContent)) !== null) {
        topics.push({
            key: match[1],
            content: match[2],
            fullMatch: match[0]
        });
    }

    console.log(`Found ${topics.length} topics in ${mapping.file}`);
    if (topics.length === 0) return;

    // To test, we only process max 2 topics per file when DRY_RUN is true
    const DRY_RUN = process.argv.includes('--dry-run');
    const topicsToProcess = DRY_RUN ? topics.slice(0, 2) : topics;

    const uploadResult = await uploadPdfIfNeeded(mapping.pdf);
    if (!uploadResult) {
        console.log(`Skipping ${mapping.file} due to missing PDF.`);
        return;
    }

    for (const topic of topicsToProcess) {
        console.log(`Enriching topic: ${topic.key}...`);
        try {
            const prompt = PROMPT_TEMPLATE
                .replace('{TOPIC_NAME}', topic.key)
                .replace('{EXISTING_NOTE}', topic.content);

            const response = await ai.models.generateContent({
                model: 'gemini-1.5-flash',
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
                            { text: prompt }
                        ]
                    }
                ],
                config: {
                    temperature: 0.3
                }
            });

            let newHtml = response.text;
            if (newHtml.startsWith('```html')) {
                newHtml = newHtml.replace(/^```html\n/, '').replace(/\n```$/, '');
            } else if (newHtml.startsWith('```')) {
                newHtml = newHtml.replace(/^```\n/, '').replace(/\n```$/, '');
            }

            const newBlock = 'EXPANDED_NOTES_DATA["' + topic.key + '"] = `\n' + newHtml + '\n`;\n';
            fileContent = fileContent.replace(topic.fullMatch, newBlock);
            console.log(`Successfully enriched ${topic.key}`);
            
            // Avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (err) {
            console.error(`Failed to enrich ${topic.key}:`, err.message);
        }
    }

    fs.writeFileSync(mapping.file, fileContent, 'utf8');
    console.log(`Saved enriched content back to ${mapping.file}`);
}

async function main() {
    for (const mapping of MAPPINGS) {
        await processFile(mapping);
    }
    console.log("All done!");
}

main();
