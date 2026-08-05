require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// The new Gen AI SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const DIRECTIVE = `MASTER KNOWLEDGE EVOLUTION DIRECTIVE

## PRIMARY OBJECTIVE
The application already contains a comprehensive knowledge base primarily derived from Pathfinder and additional structured study material supplied to the system.
Treat the existing notes and the uploaded reference PDFs as the initial foundation of the knowledge base.
Do NOT simply preserve this foundation.
Your mission is to evolve it into a significantly more comprehensive, better organized, better connected, more visual, more accurate and more exam-oriented educational resource through original research and synthesis.
The uploaded study material is reference material for identifying topics, gaps, organization, and educational coverage. It is not to be copied or reproduced.

# KNOWLEDGE EVOLUTION PHILOSOPHY
Never assume that the existing notes are complete.
Every chapter should continuously evolve through:
• Research • Verification • Gap Analysis • Knowledge Expansion • Educational Improvement • Visual Enhancement • Revision Optimization • Examination Analysis
Every update must improve the knowledge base. Never reduce quality. Never shorten useful explanations. Never remove valuable information unless factually incorrect or obsolete.

# BASELINE ANALYSIS
For every chapter: Analyse the existing notes. Analyse the supplied reference material. Identify every concept already covered. Identify every concept partially covered. Identify every missing concept. Identify missing diagrams/maps/timelines/comparisons/examples/PYQ connections/current affairs/revision aids/memory techniques.
Only after identifying the gaps should content generation begin.

# GLOBAL RESEARCH
Conduct exhaustive research using reliable publicly available information. Cross-verify important facts using multiple reliable sources. Research until no meaningful exam-relevant information remains missing.

# ORIGINAL CONTENT GENERATION
Understand every concept. Compare multiple reliable sources. Resolve inconsistencies. Organize information logically. Produce completely original educational content.

# CHAPTER COMPLETENESS
Every chapter should include, wherever applicable:
Learning Objectives, Background, Historical Context, Core Concepts, Detailed Explanation, Advanced Concepts, Scientific Principles, Legal Framework, Administrative Structure, Constitutional Provisions, Economic Importance, Environmental Importance, Military Relevance, International Relevance, Current Affairs Integration, Examples, Case Studies, Government Schemes, Committees, Reports, Organisations, Important Personalities, Important Dates, Statistics, Frequently Confused Facts, Common Misconceptions, Exam Traps, Memory Tricks, Mnemonics, Comparison Tables, Classification Charts, Flowcharts, Mind Maps, Concept Maps, Timelines, Maps, Annotated Diagrams, Infographics, Quick Facts, One Page Revision, Flashcards, Active Recall Questions, MCQs, Assertion-Reason Questions, Statement-Based Questions, Image-Based Questions, Map-Based Questions, Expected Future Questions, PYQ Linkages, Cross-Subject Connections.

# KNOWLEDGE GRAPH
Every topic must automatically connect with related concepts. No chapter should remain isolated.

# CURRENT AFFAIRS
Every current affair should become a complete learning module.

# ENVIRONMENT
Treat Environment as a high-priority subject. Expand every topic with Distribution, Maps, Protected Areas, Species, Scientific Names, IUCN Status, Conservation Projects, Climate, Vegetation, Ecological Importance, Environmental Laws, International Conventions.

# EXAM INTELLIGENCE
Analyse previous NDA, CDS, AFCAT and CAPF examinations. Identify Repeated Topics, Emerging Trends, Frequently Tested Concepts.

# EDUCATIONAL DESIGN
Optimize every chapter for Understanding, Retention, Revision Speed, Exam Readiness.

# OUTPUT FORMAT INSTRUCTION
You MUST format your output as a standalone, beautifully structured Markdown file. 
Use rich markdown features:
- Use Mermaid.js (\`\`\`mermaid) for flowcharts, mindmaps, and concept maps.
- Use Blockquotes (> **Exam Trap:** ...) for traps, memory tricks, and PYQs.
- Use Tables for comparisons.
- Do NOT output HTML. Output valid Markdown only.
- Ensure the markdown is exhaustive, highly detailed, and acts as the ULTIMATE study guide for the given topic.`;

// Sleep helper
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function uploadPdf(filePath) {
    console.log(`Uploading ${filePath}...`);
    try {
        const uploadResult = await ai.files.upload({
            file: filePath,
            mimeType: 'application/pdf',
        });
        
        let fileInfo = uploadResult.name ? uploadResult : uploadResult.file;
        
        console.log(`Uploaded ${filePath} as ${fileInfo.name}. Waiting for processing...`);
        
        // Wait until ACTIVE
        let state = fileInfo.state;
        while (state === 'PROCESSING') {
            await sleep(5000);
            const getResult = await ai.files.get({ name: fileInfo.name });
            // Handle different shapes of response from the SDK
            fileInfo = getResult.name ? getResult : getResult.file;
            state = fileInfo.state;
            process.stdout.write('.');
        }
        console.log(`\nFile ${fileInfo.name} is ready.`);
        return fileInfo;
    } catch (e) {
        console.error(`Error uploading ${filePath}:`, e.message || e);
        throw e;
    }
}

async function run() {
    const args = process.argv.slice(2);
    let targetSubject = null;
    let targetTopic = null;

    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--subject' && args[i + 1]) targetSubject = args[i + 1];
        if (args[i] === '--topic' && args[i + 1]) targetTopic = args[i + 1];
    }

    if (!targetSubject) {
        console.error("Usage: node evolution_engine.js --subject <subject_id> [--topic <topic_id>]");
        process.exit(1);
    }

    console.log(`Starting Knowledge Evolution Engine for Subject: ${targetSubject}`);

    // Find all PDFs in the current directory
    const filesInDir = fs.readdirSync(__dirname + '/..');
    const pdfFiles = filesInDir.filter(f => f.startsWith('doc') && f.endsWith('.pdf')).map(f => path.join(__dirname, '..', f));

    if (pdfFiles.length === 0) {
        console.warn("No doc*.pdf files found in the root directory. Proceeding without PDF context.");
    }

    const uploadedFiles = [];
    for (const pdf of pdfFiles) {
        try {
            const uploaded = await uploadPdf(pdf);
            uploadedFiles.push(uploaded);
        } catch (e) {
            console.error(`Failed to process ${pdf}`);
        }
    }

    // Load topics mapping
    const mappingPath = path.join(__dirname, '..', 'all_topics_mapping.json');
    if (!fs.existsSync(mappingPath)) {
        console.error("all_topics_mapping.json not found!");
        process.exit(1);
    }
    const mappings = JSON.parse(fs.readFileSync(mappingPath, 'utf8'));

    const topicsList = mappings.filter(t => t.subject === targetSubject);
    if (topicsList.length === 0) {
        console.error(`Subject ${targetSubject} not found in mapping or has no topics!`);
        process.exit(1);
    }

    // Ensure output directory exists
    const outDir = path.join(__dirname, '..', 'evolved_notes', targetSubject);
    fs.mkdirSync(outDir, { recursive: true });

    // Iterate through topics
    for (const topic of topicsList) {
        const topicId = topic.id;
        const topicTitle = topic.title;
        if (targetTopic && topicId !== targetTopic) continue;

        console.log(`\n=============================================`);
        console.log(`Evolving Topic: ${topicTitle} (${topicId})`);
        console.log(`=============================================`);
        
        const outFilePath = path.join(outDir, `${topicId}.md`);
        if (fs.existsSync(outFilePath) && !targetTopic) {
            console.log(`Skipping ${topicId}, already exists.`);
            continue;
        }

        const promptText = `Please apply the MASTER KNOWLEDGE EVOLUTION DIRECTIVE to the topic: "${topicTitle}".
Use the uploaded PDFs as your knowledge base.
Perform a massive gap analysis. What concepts are crucial for Indian Defence Exams (NDA/CDS) regarding this topic?
Generate the final, evolved Markdown study module. Ensure extreme detail and comprehensiveness. Include Mermaid diagrams and all required sections.`;

        const contents = [];
        
        // Add PDF files to contents
        for (const file of uploadedFiles) {
             contents.push({
                 fileData: {
                     fileUri: file.uri,
                     mimeType: file.mimeType
                 }
             });
        }
        
        // Add text prompt
        contents.push({ text: promptText });

        try {
            console.log(`Generating evolved content... this may take 30-60 seconds...`);
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-pro',
                contents: contents,
                config: {
                    systemInstruction: DIRECTIVE,
                    temperature: 0.2, // Low temp for factual accuracy
                }
            });

            const markdown = response.text || (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts[0].text);
            
            if (markdown) {
                fs.writeFileSync(outFilePath, markdown, 'utf8');
                console.log(`Successfully evolved and saved: ${outFilePath}`);
            } else {
                console.error(`Error: No text returned for ${topicId}`);
            }
        } catch (e) {
            console.error(`Error evolving topic ${topicId}:`, e.message || e);
            if (e.message && e.message.includes('429')) {
                console.log("Rate limited. Waiting 60 seconds...");
                await sleep(60000);
            }
        }
    }
    
    console.log(`\nKnowledge Evolution Complete for Subject: ${targetSubject}`);
}

run().catch(console.error);
