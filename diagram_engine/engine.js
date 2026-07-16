require('dotenv').config();
const fs = require('fs').promises;
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { compileMermaid } = require('./mermaid_compiler');
const prompts = require('./llm_prompts');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

const DIAGRAMS_DIR = path.join(__dirname, '..', 'diagrams');
const PROGRESS_FILE = path.join(__dirname, 'diagram_progress.json');
const BATCH_SIZE = 5; // Pages per chunk

async function loadProgress() {
  try {
    const data = await fs.readFile(PROGRESS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return { processedPages: [], generatedDiagrams: [] };
  }
}

async function saveProgress(progress) {
  await fs.writeFile(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

function sanitizeDirName(name) {
  return name.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
}

async function callLLM(prompt, systemInstruction = '', expectJson = false) {
  try {
    const fullPrompt = systemInstruction ? `${systemInstruction}\\n\\n${prompt}` : prompt;
    const result = await model.generateContent(fullPrompt);
    let text = result.response.text();
    
    if (expectJson) {
      text = text.replace(/^\\s*```json/, '').replace(/```\\s*$/, '').trim();
      return JSON.parse(text);
    }
    return text.trim();
  } catch (error) {
    console.error("LLM Error:", error.message);
    return null;
  }
}

async function processPdf(pdfPath) {
  console.log(`Loading Document: ${pdfPath}`);
  
  let allText = '';
  
  if (pdfPath.toLowerCase().endsWith('.txt')) {
    allText = await fs.readFile(pdfPath, 'utf8');
  } else {
    const pdfParse = require('pdf-parse');
    const dataBuffer = await fs.readFile(pdfPath);
    const pdfData = await pdfParse(dataBuffer);
    allText = pdfData.text;
  }
  
  const chunks = [];
  const chunkSize = 15000; 
  for (let i = 0; i < allText.length; i += chunkSize) {
    chunks.push(allText.slice(i, i + chunkSize));
  }

  console.log(`Total chunks to process: ${chunks.length}`);
  const progress = await loadProgress();

  for (let i = 0; i < chunks.length; i++) {
    const chunkId = `${path.basename(pdfPath)}_chunk_${i}`;
    if (progress.processedPages.includes(chunkId)) {
      console.log(`Skipping chunk ${i} (already processed)`);
      continue;
    }

    console.log(`\\n--- Processing Chunk ${i} ---`);
    const chunkText = chunks[i];

    // 1. Identify Diagram Opportunities
    const idResult = await callLLM(chunkText, prompts.IDENTIFY_PROMPT, true);
    
    if (!idResult || !idResult.has_diagram || !idResult.diagrams) {
      console.log("No diagram opportunities found in this chunk.");
    } else {
      for (const diag of idResult.diagrams) {
        console.log(`Opportunity Found: ${diag.title} (${diag.subject} > ${diag.chapter})`);
        
        const dupKey = sanitizeDirName(diag.title);
        if (progress.generatedDiagrams.includes(dupKey)) {
          console.log(`Duplicate skipped: ${dupKey}`);
          continue;
        }

        // 2. Generate Mermaid Code
        let mmdCode = await callLLM(
          `Title: ${diag.title}\\nConcept: ${diag.concept}\\nContent snippet: ${chunkText.slice(0, 1000)}...`, 
          prompts.MERMAID_GEN_PROMPT
        );

        if (!mmdCode) continue;

        // 3. Compile with retry loop
        let compiled = false;
        let attempt = 0;
        const maxAttempts = 3;
        const baseDir = path.join(DIAGRAMS_DIR, sanitizeDirName(diag.subject), sanitizeDirName(diag.chapter));
        const baseFilename = sanitizeDirName(diag.topic);

        while (!compiled && attempt < maxAttempts) {
          attempt++;
          console.log(`Compiling Mermaid (Attempt ${attempt})...`);
          
          const result = await compileMermaid(mmdCode, baseDir, baseFilename);
          if (result.success) {
            console.log("✅ Compilation successful!");
            compiled = true;
            
            // 4. Generate & Save Metadata
            const metaResult = await callLLM(
              `Title: ${diag.title}\\nConcept: ${diag.concept}\\nSubject: ${diag.subject}\\nChapter: ${diag.chapter}`,
              prompts.METADATA_GEN_PROMPT,
              true
            );

            if (metaResult) {
              await fs.writeFile(
                path.join(baseDir, `${baseFilename}.json`), 
                JSON.stringify(metaResult, null, 2)
              );
            }
            
            progress.generatedDiagrams.push(dupKey);
          } else {
            console.log(`❌ Compilation failed: ${result.error}`);
            if (attempt < maxAttempts) {
              console.log("Asking LLM to fix the syntax error...");
              mmdCode = await callLLM(
                `The following Mermaid code has a syntax error:\\n\\n${mmdCode}\\n\\nError:\\n${result.error}\\n\\nPlease provide ONLY the corrected Mermaid code. Fix any HTML entities or strict Mermaid v10 issues.`,
                prompts.MERMAID_GEN_PROMPT
              );
            }
          }
        }
      }
    }

    progress.processedPages.push(chunkId);
    await saveProgress(progress);
    console.log(`Chunk ${i} completed and progress saved.`);
  }
}

// Simple CLI entry
const targetPdf = process.argv[2];
if (!targetPdf) {
  console.log("Usage: node engine.js <path_to_pdf>");
  process.exit(1);
}

processPdf(targetPdf).catch(console.error);
