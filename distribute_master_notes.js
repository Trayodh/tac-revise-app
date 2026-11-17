const fs = require('fs');
const path = require('path');

async function distributeNotes() {
    console.log("Distributing Master Notes to Frontend (evolved_notes/)...");
    
    let masterDB;
    try {
        masterDB = JSON.parse(fs.readFileSync('calibrated_note_phase5.json', 'utf8'));
    } catch(e) {
        console.error("No calibrated_note_phase5.json found. You must run run_massive_batch.js first.");
        return;
    }
    
    const outputDir = path.join(__dirname, 'evolved_notes');
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
    
    let written = 0;
    
    for (const subject of Object.keys(masterDB)) {
        for (const chapter of Object.keys(masterDB[subject])) {
        
        // Ensure chapter dir exists
        const safeChapterId = chapter.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const chapDir = path.join(outputDir, safeChapterId);
        if (!fs.existsSync(chapDir)) fs.mkdirSync(chapDir);
        
        const topics = masterDB[subject][chapter];
        for (const topic of Object.keys(topics)) {
            const safeTopicId = topic.toLowerCase().replace(/[^a-z0-9]/g, '_');
            const markdownContent = topics[topic].content;
            if (markdownContent && !markdownContent.includes('Failed to generate')) {
                fs.writeFileSync(path.join(chapDir, `${safeTopicId}.md`), markdownContent);
                written++;
            }
        }
    }
    }
    
    console.log(`Successfully distributed ${written} topics as Markdown for Vercel serving.`);
}

distributeNotes();
