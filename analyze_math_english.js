const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

const pyqDir = path.join(__dirname, 'PYQ Papers');
const targetPapers = fs.readdirSync(pyqDir).filter(f => f.includes('English') || f.includes('MATHS') || f.includes('Maths'));

async function extractTextFromPdf(pdfPath) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return data.text;
}

async function analyzeSubject(text, paperName, subjectName) {
    const prompt = `
You are an expert tutor for the CDS exam.
I am providing you with the text of a recent CDS ${subjectName} question paper (${paperName}).

Please analyze this paper and provide a summary of the trends in markdown format. 
Cover:
- Overall Difficulty
- High Yield Areas (Topics that are asked frequently)
- Trend Shifts (How questions are changing in recent years, e.g., harder reading comprehension, more geometry, etc.)

Text of the paper:
${text.substring(0, 150000)}
    `;
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error(`Failed to analyze ${paperName}:`, error);
        return null;
    }
}

async function main() {
    let report = "# Maths & English Trends (2024-2026)\n\n";
    for (const paper of targetPapers) {
        console.log(`Analyzing ${paper}...`);
        const fullPath = path.join(pyqDir, paper);
        const text = await extractTextFromPdf(fullPath);
        
        let subjectName = paper.toLowerCase().includes('english') ? 'English' : 'Mathematics';
        const analysis = await analyzeSubject(text, paper, subjectName);
        if (analysis) {
            report += `## Analysis of ${paper} (${subjectName})\n\n`;
            report += analysis + "\n\n---\n\n";
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
    
    // Save to brain dir as an artifact
    const artifactPath = path.join('C:', 'Users', 'Trayodh Khandalkar', '.gemini', 'antigravity-ide', 'brain', '6e4c259b-cd1d-4b91-ad25-bea102899c0e', 'maths_english_trends.md');
    fs.writeFileSync(artifactPath, report, 'utf-8');
    console.log("Analysis saved to maths_english_trends.md");
}

main();
