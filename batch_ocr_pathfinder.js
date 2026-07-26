const fs = require('fs');
const path = require('path');
const { performOCR, extractTextFromResponse } = require('./ocr_api4ai');

const CHUNKS_DIR = path.join(__dirname, 'pathfinder_chunks');
const OUTPUT_DIR = path.join(__dirname, 'pathfinder_ocr_results');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processChunks() {
    if (!fs.existsSync(CHUNKS_DIR)) {
        console.error(`Chunks directory not found: ${CHUNKS_DIR}`);
        return;
    }

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const subjects = fs.readdirSync(CHUNKS_DIR).filter(f => fs.statSync(path.join(CHUNKS_DIR, f)).isDirectory());
    
    for (const subject of subjects) {
        console.log(`\n=== Processing Subject: ${subject} ===`);
        const subjectChunkDir = path.join(CHUNKS_DIR, subject);
        const subjectOutputDir = path.join(OUTPUT_DIR, subject);
        
        if (!fs.existsSync(subjectOutputDir)) {
            fs.mkdirSync(subjectOutputDir, { recursive: true });
        }

        const chunks = fs.readdirSync(subjectChunkDir)
            .filter(f => f.endsWith('.pdf'))
            .sort();

        for (const chunk of chunks) {
            const chunkPath = path.join(subjectChunkDir, chunk);
            const outputTextPath = path.join(subjectOutputDir, chunk.replace('.pdf', '.txt'));

            if (fs.existsSync(outputTextPath)) {
                console.log(`  [SKIP] ${chunk} already processed.`);
                continue;
            }

            console.log(`  [OCR] Processing ${chunk}...`);
            try {
                const responseData = await performOCR(chunkPath);
                const text = extractTextFromResponse(responseData);
                
                if (text && text.trim().length > 0) {
                    fs.writeFileSync(outputTextPath, text);
                    console.log(`    -> Saved to ${outputTextPath} (${text.length} chars)`);
                } else {
                    console.warn(`    -> Warning: No text extracted from ${chunk}`);
                }
                
                // Sleep for 3 seconds to avoid rate limiting
                await sleep(3000);
            } catch (err) {
                console.error(`    -> Error processing ${chunk}:`, err.message);
                // Pause longer on error
                await sleep(10000);
            }
        }
    }
    console.log('\n=== All Processing Complete ===');
}

if (require.main === module) {
    processChunks();
}
