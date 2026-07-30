require('dotenv').config({ path: '../.env' });
const fs = require('fs');
const path = require('path');
const { extractTextFromPDF, cleanAndChunkText } = require('./pdf_extractor');
const { findDiagramOpportunities, generateMermaid, generateSVGCode, generateImagePrompt } = require('./llm_orchestrator');
const { compileMermaid } = require('./mermaid_compiler');
const { initStorage, getProgress, updateProgress, isDuplicate, saveDiagramMetadata, OUTPUT_DIR } = require('./storage_manager');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function downloadImage(prompt, savePath) {
    try {
        const encoded = encodeURIComponent(prompt);
        const url = `https://image.pollinations.ai/prompt/${encoded}?width=1024&height=768&nologo=true&seed=${Math.floor(Math.random()*10000)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Unexpected response ${res.statusText}`);
        
        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(savePath, buffer);
        return true;
    } catch (err) {
        console.error('[Image Fetcher] Error downloading image:', err);
        return false;
    }
}

async function processPdf(pdfPath, progressData) {
    const text = await extractTextFromPDF(pdfPath);
    if (!text) return;

    const chunks = cleanAndChunkText(text);
    console.log(`[Pipeline] Split PDF into ${chunks.length} chunks.`);

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const opportunities = await findDiagramOpportunities(chunk);
        
        if (!opportunities || opportunities.length === 0) {
            console.log(`[Pipeline] Chunk ${i + 1}/${chunks.length}: No visual concepts found.`);
            await sleep(4000); 
            continue;
        }

        console.log(`[Pipeline] Chunk ${i + 1}/${chunks.length}: Found ${opportunities.length} visual opportunities!`);

        for (const opp of opportunities) {
            await sleep(2000); 

            if (isDuplicate(opp.title, opp.subject, progressData)) {
                console.log(`[Pipeline] Skipping duplicate: ${opp.title}`);
                progressData.duplicatesSkipped++;
                updateProgress(progressData);
                continue;
            }

            const safeSubject = (opp.subject || 'Unknown').replace(/[^a-z0-9]/gi, '_');
            const safeChapter = (opp.chapter || 'Unknown').replace(/[^a-z0-9]/gi, '_');
            const safeTopic = (opp.title || opp.topic || 'Diagram').replace(/[^a-z0-9]/gi, '_');

            const targetDir = path.join(OUTPUT_DIR, safeSubject, safeChapter);
            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

            const baseFilePath = path.join(targetDir, safeTopic);
            let success = false;
            let outputFiles = {};
            let metaData = null;

            console.log(`[Pipeline] Engine selected: ${opp.rendering_engine} for ${safeTopic}`);

            if (opp.rendering_engine === 'Mermaid' || !opp.rendering_engine) {
                const mmdPath = `${baseFilePath}.mmd`;
                const svgPath = `${baseFilePath}.svg`;
                const pngPath = `${baseFilePath}.png`;

                let mmdCodeData = await generateMermaid(opp);
                if (mmdCodeData && mmdCodeData.mermaid) {
                    fs.writeFileSync(mmdPath, mmdCodeData.mermaid, 'utf8');
                    metaData = mmdCodeData;

                    let attempts = 0;
                    while (attempts < 3 && !success) {
                        attempts++;
                        const compileResult = await compileMermaid(mmdPath, svgPath, pngPath);
                        if (compileResult.success) {
                            success = true;
                            outputFiles = { mmdPath, svgPath, pngPath };
                        } else {
                            console.log(`[Pipeline] Syntax error on attempt ${attempts}. Auto-healing...`);
                            progressData.retried++;
                            updateProgress(progressData);
                            
                            mmdCodeData = await generateMermaid(opp, compileResult.error);
                            if (mmdCodeData && mmdCodeData.mermaid) {
                                fs.writeFileSync(mmdPath, mmdCodeData.mermaid, 'utf8');
                                metaData = mmdCodeData;
                            }
                        }
                    }
                }
            } else if (opp.rendering_engine === 'SVG') {
                const svgPath = `${baseFilePath}.svg`;
                const svgData = await generateSVGCode(opp);
                if (svgData && svgData.svg) {
                    fs.writeFileSync(svgPath, svgData.svg, 'utf8');
                    success = true;
                    outputFiles = { svgPath };
                    metaData = svgData;
                }
            } else if (opp.rendering_engine === 'AI_Image') {
                const imgPath = `${baseFilePath}.jpg`;
                const imgData = await generateImagePrompt(opp);
                if (imgData && imgData.prompt) {
                    success = await downloadImage(imgData.prompt, imgPath);
                    if (success) {
                        outputFiles = { pngPath: imgPath }; // Treat jpg as png for metadata
                        metaData = imgData;
                    }
                }
            }

            if (success) {
                console.log(`[Pipeline] ✅ Successfully generated via ${opp.rendering_engine}: ${safeTopic}`);
                saveDiagramMetadata(opp, metaData, outputFiles.mmdPath, outputFiles.svgPath, outputFiles.pngPath, progressData);
            } else {
                console.log(`[Pipeline] ❌ Failed to generate: ${safeTopic}`);
                progressData.failed++;
                updateProgress(progressData);
            }
        }
        
        console.log(`[Pipeline] Finished processing chunk ${i + 1}. Resting...`);
        await sleep(5000); 
    }
}

async function run() {
    console.log("Starting Multi-Engine Diagram Pipeline...");
    initStorage();
    let progressData = getProgress();

    const pdfsDir = path.join(__dirname, '../www');
    const files = fs.readdirSync(pdfsDir).filter(f => f.endsWith('.pdf'));
    
    if (files.length === 0) {
        console.log("No PDFs found in www/ directory.");
        return;
    }

    console.log(`Found ${files.length} PDFs. Processing...`);
    
    // Testing on the first one first
    await processPdf(path.join(pdfsDir, files[0]), progressData);
    
    console.log("Pipeline Finished!");
}

run();
