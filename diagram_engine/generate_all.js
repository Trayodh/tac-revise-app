const fs = require('fs');
const path = require('path');
const { compileMermaid } = require('./mermaid_compiler');

// Load data.js
const dataJsPath = path.join(__dirname, '..', 'data.js');
let dataContent = fs.readFileSync(dataJsPath, 'utf8');
dataContent = dataContent.replace(/const NOTES_DATABASE/g, 'global.NOTES_DATABASE');
eval(dataContent);

const DIAGRAMS_DIR = path.join(__dirname, '..', 'diagrams');

function sanitizeName(name) {
  return name.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
}

function escapeMermaid(text) {
  if (!text) return '';
  return text.replace(/[\(\)\[\]\{\}\"\n]/g, ' ').trim();
}

async function generateAll() {
  const db = global.NOTES_DATABASE;
  let successCount = 0;
  let failCount = 0;
  
  for (const subjectId in db) {
    const subject = db[subjectId];
    
    for (const chapter of subject.chapters) {
      for (const topic of chapter.topics) {
        if (!topic.mindmap) continue;
        
        const subjDir = sanitizeName(subjectId);
        const chapDir = sanitizeName(chapter.id);
        const topDir = sanitizeName(topic.id);
        
        const outDir = path.join(DIAGRAMS_DIR, subjDir, chapDir);
        
        // Ensure outDir exists
        fs.mkdirSync(outDir, { recursive: true });
        
        // Skip if already generated
        if (fs.existsSync(path.join(outDir, `${topDir}.svg`))) {
          console.log(`Skipping (already exists): ${topDir}`);
          successCount++;
          continue;
        }

        let mmdCode = `mindmap\n  root((${escapeMermaid(topic.mindmap.root || topic.title)}))\n`;
        
        topic.mindmap.branches.forEach(branch => {
          mmdCode += `    ${escapeMermaid(branch.title)}\n`;
          if (branch.subnodes) {
            branch.subnodes.forEach(sub => {
              mmdCode += `      ::icon(fas fa-check)\n`;
              mmdCode += `      ${escapeMermaid(sub)}\n`;
            });
          }
        });
        
        console.log(`Processing: ${subjectId} -> ${chapter.id} -> ${topic.id}`);
        try {
          const result = await compileMermaid(mmdCode, outDir, topDir);
          if (result.success) {
            console.log(`✅ Success: ${topDir}`);
            successCount++;
          } else {
            console.error(`❌ Failed: ${topDir} - ${result.error}`);
            failCount++;
          }
        } catch(e) {
          console.error(`❌ Failed Exception: ${topDir} - ${e.message}`);
          failCount++;
        }
      }
    }
  }
  
  console.log(`\n🎉 DIAGRAM GENERATION COMPLETE!`);
  console.log(`Generated: ${successCount}`);
  console.log(`Failed: ${failCount}`);
}

generateAll().catch(console.error);
