const fs = require('fs');
const path = require('path');

const PROGRESS_FILE = path.join(__dirname, 'progress.json');
const OUTPUT_DIR = path.join(__dirname, '../diagrams');

function initStorage() {
    if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    if (!fs.existsSync(PROGRESS_FILE)) {
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify({
            completed: 0,
            failed: 0,
            duplicatesSkipped: 0,
            retried: 0,
            generated: []
        }, null, 2));
    }
}

function getProgress() {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
}

function updateProgress(progressData) {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progressData, null, 2));
}

function isDuplicate(title, subject, progressData) {
    const key = `${subject}_${title}`.toLowerCase().replace(/ /g, '_');
    return progressData.generated.includes(key);
}

function saveDiagramMetadata(opportunity, metaData, mmdPath, svgPath, pngPath, progressData) {
    const key = `${opportunity.subject}_${opportunity.title}`.toLowerCase().replace(/ /g, '_');
    
    // Save metadata JSON
    const metadata = {
        title: opportunity.title,
        subject: opportunity.subject,
        chapter: opportunity.chapter,
        topic: opportunity.topic,
        difficulty: opportunity.difficulty,
        rendering_engine: opportunity.rendering_engine || 'Mermaid',
        exams: ["NDA", "CDS", "AFCAT"],
        keywords: opportunity.keywords,
        caption: metaData ? metaData.caption : '',
        altText: metaData ? metaData.altText : '',
        source: "Automated Pipeline"
    };

    const validPath = mmdPath || svgPath || pngPath;
    if (validPath) {
        const dir = path.dirname(validPath);
        const basename = path.basename(validPath).split('.')[0];
        const jsonPath = path.join(dir, `${basename}.json`);
        
        fs.writeFileSync(jsonPath, JSON.stringify(metadata, null, 2));
    }

    progressData.generated.push(key);
    progressData.completed++;
    updateProgress(progressData);
}

module.exports = { initStorage, getProgress, updateProgress, isDuplicate, saveDiagramMetadata, OUTPUT_DIR };
