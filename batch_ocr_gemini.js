require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const CHUNKS_DIR = path.join(__dirname, 'pathfinder_chunks');
const OUTPUT_DIR = path.join(__dirname, 'pathfinder_ocr_results');

async function processChunk(subject, chunkFile) {
  const inputPath = path.join(CHUNKS_DIR, subject, chunkFile);
  const outPath = path.join(OUTPUT_DIR, subject, chunkFile.replace('.pdf', '.txt'));

  if (fs.existsSync(outPath)) {
    console.log(`  [SKIP] ${chunkFile} already processed.`);
    return true;
  }

  console.log(`  [OCR Gemini] Processing ${chunkFile}...`);
  try {
    const uploadResult = await ai.files.upload({
        file: inputPath,
        mimeType: 'application/pdf',
    });
    
    // Wait for processing
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    const prompt = `Extract all the text from this PDF exactly as it appears. Preserve the formatting as much as possible. Do not include any conversational filler, markdown formatting, or comments. Output ONLY the raw extracted text.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
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
            temperature: 0.1
        }
    });

    let rawText = response.text || '';
    if (rawText.startsWith('```')) {
      rawText = rawText.replace(/^```[a-z]*\n/, '').replace(/\n```$/, '');
    }
    
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, rawText.trim());
    console.log(`    -> Saved ${chunkFile.replace('.pdf', '.txt')}`);
    
    // Optional cleanup of uploaded file
    try {
      await ai.files.delete({ name: uploadResult.name });
    } catch(e) {}
    
    return true;
  } catch (err) {
    console.error(`    -> Error processing ${chunkFile}:`, err.message);
    return false;
  }
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const subjects = fs.readdirSync(CHUNKS_DIR).filter(d => fs.statSync(path.join(CHUNKS_DIR, d)).isDirectory());
  
  for (const subject of subjects) {
    console.log(`\n=== Processing Subject: ${subject} ===`);
    const chunks = fs.readdirSync(path.join(CHUNKS_DIR, subject)).filter(f => f.endsWith('.pdf')).sort();
    
    for (const chunk of chunks) {
      const success = await processChunk(subject, chunk);
      if (!success) {
        console.log(`Stopping batch for ${subject} due to error.`);
        // Sleep and retry once before aborting
        await new Promise(r => setTimeout(r, 10000));
        const retry = await processChunk(subject, chunk);
        if (!retry) break; 
      }
      // Slight delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  console.log("\nAll chunks processed via Gemini!");
}

main();
