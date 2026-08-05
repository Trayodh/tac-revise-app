require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

// The new Gen AI SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const DIRECTIVE = fs.readFileSync(path.join(__dirname, 'directive.txt'), 'utf8');

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
        
        let state = fileInfo.state;
        while (state === 'PROCESSING') {
            await sleep(5000);
            const getResult = await ai.files.get({ name: fileInfo.name });
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

    const baseDir = path.join(__dirname, '..');
    const filesInDir = fs.readdirSync(baseDir);

    // 1. BASE PDFS
    // We strictly use the focused Pathfinder sub-sections to avoid exceeding the 1 Million Token Per Minute limit and 1,048,576 Token Context Window on the free tier.
    let selectedPdfNames = [];
    
    // Select the appropriate focused Pathfinder section
    if (['geography', 'history', 'polity'].includes(targetSubject)) {
        selectedPdfNames.push('pathfinder_studies.pdf');
    } else if (['biology', 'physics', 'chemistry'].includes(targetSubject)) {
        selectedPdfNames.push('pathfinder_science.pdf');
    } else if (targetSubject === 'mathematics') {
        selectedPdfNames.push('pathfinder_mathematics.pdf');
    }
    
    // Add doc1 to doc7
    selectedPdfNames.push(...filesInDir.filter(f => f.startsWith('doc') && f.endsWith('.pdf')));

    // 2. SUBJECT-SPECIFIC PDFS
    if (targetSubject === 'geography') {
        selectedPdfNames.push('Indian Geography class notes_compressed.pdf', 'Physical Geography class notes_compressed.pdf');
    } else if (targetSubject === 'biology') {
        selectedPdfNames.push('general_science_ssbcrack.pdf', 'Biology class notes_compressed.pdf');
    } else if (targetSubject === 'physics') {
        selectedPdfNames.push('general_science_ssbcrack.pdf', 'Physics class notes pdf_compressed.pdf');
    } else if (targetSubject === 'chemistry') {
        selectedPdfNames.push('general_science_ssbcrack.pdf', 'Chemistry class Notes_compressed.pdf');
    } else if (targetSubject === 'history') {
        selectedPdfNames.push('Ancient history capsule_compressed.pdf');
    }

    // Filter to only include PDFs that actually exist, and handle split parts automatically
    const pdfFiles = [];
    for (const name of selectedPdfNames) {
        const baseName = name.replace('.pdf', '');
        const part1 = `${baseName}_part1.pdf`;
        const part2 = `${baseName}_part2.pdf`;
        if (fs.existsSync(path.join(baseDir, part1))) {
            pdfFiles.push(path.join(baseDir, part1));
            if (fs.existsSync(path.join(baseDir, part2))) {
                pdfFiles.push(path.join(baseDir, part2));
            }
        } else if (fs.existsSync(path.join(baseDir, name))) {
            pdfFiles.push(path.join(baseDir, name));
        }
    }

    console.log(`Loading the following PDF contexts for ${targetSubject}:\n`, pdfFiles.map(f => path.basename(f)).join('\n'));

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
    const mappingPath = path.join(baseDir, 'all_topics_mapping.json');
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

    const outDir = path.join(baseDir, 'evolved_notes', targetSubject);
    fs.mkdirSync(outDir, { recursive: true });

    for (const topic of topicsList) {
        const topicId = topic.id;
        const topicTitle = topic.title;
        if (targetTopic && topicId !== targetTopic) continue;

        console.log(`\n=============================================`);
        console.log(`Evolving Topic: ${topicTitle} (${topicId})`);
        console.log(`=============================================`);
        
        const outFilePath = path.join(outDir, `${topicId}.md`);
        // If file exists, we normally skip. To force regeneration we can pass --topic or just let it skip.
        // Wait, the user wants us to use the new logic, so let's allow it to overwrite if we want, or we can manually delete the existing notes.
        // I will just leave the skipping logic and delete the existing files via command line.
        if (fs.existsSync(outFilePath) && !targetTopic) {
            console.log(`Skipping ${topicId}, already exists.`);
            continue;
        }

        const promptText = `Please apply the MASTER KNOWLEDGE EVOLUTION DIRECTIVE to the topic: "${topicTitle}".
Use the uploaded PDFs as your knowledge base.
Perform a massive gap analysis. What concepts are crucial for Indian Defence Exams (NDA/CDS) regarding this topic?
Cross-reference the provided Pathfinder and class notes with the Live Internet to ensure all data is up-to-date, verify facts, and pull in the latest developments. Combine all sources.
Generate the final, evolved Markdown study module. Ensure extreme detail and comprehensiveness. Include Mermaid diagrams and all required sections.`;

        const contents = [];
        for (const file of uploadedFiles) {
             contents.push({
                 fileData: { fileUri: file.uri, mimeType: file.mimeType }
             });
        }
        contents.push({ text: promptText });

        const modelsToTry = [
            'gemini-2.5-flash',
            'gemini-flash-lite-latest',
            'gemini-2.0-flash-lite',
            'gemini-2.0-flash',
            'gemini-flash-latest'
        ];

        let success = false;
        let modelIndex = 0;
        let retryCount = 0;

        while (!success) {
            let currentModel = modelsToTry[modelIndex % modelsToTry.length];
            try {
                console.log(`Generating evolved content with ${currentModel}...`);
                const response = await ai.models.generateContent({
                    model: currentModel,
                    contents: contents,
                    config: {
                        systemInstruction: DIRECTIVE,
                        temperature: 0.2,
                        tools: [{ googleSearch: {} }]
                    }
                });

                const markdown = response.text || (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts[0].text);
                
                if (markdown) {
                    fs.writeFileSync(outFilePath, markdown, 'utf8');
                    console.log(`Successfully evolved and saved: ${outFilePath}`);
                    console.log(`Sleeping 15 seconds to respect TPM limits...`);
                    await sleep(15000);
                    success = true;
                } else {
                    console.error(`Error: No text returned for ${topicId}. Switching model and retrying...`);
                    modelIndex++; 
                    await sleep(5000);
                }
            } catch (e) {
                console.error(`Error evolving topic ${topicId} with ${currentModel}:`, e.message || e);
                modelIndex++; 
                if (e.message && (e.message.includes('429') || e.message.includes('503'))) {
                    const jitter = Math.floor(Math.random() * 5000);
                    const waitTime = 10000 + jitter;
                    console.log(`Rate limited/Unavailable. Switched model to ${modelsToTry[modelIndex % modelsToTry.length]}. Waiting ${Math.round(waitTime/1000)} seconds...`);
                    await sleep(waitTime);
                } else if (e.message && e.message.includes('googleSearch')) {
                    console.log(`Model ${currentModel} doesn't support Google Search. Skipping...`);
                } else {
                    await sleep(10000);
                }
                
                retryCount++;
                if (retryCount > 15) {
                    console.log(`All models exhausted repeatedly. Forcing 2-minute sleep...`);
                    await sleep(120000);
                    retryCount = 0;
                }
            }
        }
    }
    
    console.log(`\nKnowledge Evolution Complete for Subject: ${targetSubject}`);
}

run().catch(console.error);
