const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

const pyqDir = path.join(__dirname, 'PYQ Papers');
const targetPapers = fs.readdirSync(pyqDir).filter(f => f.endsWith('.pdf'));

async function extractTextFromPdf(pdfPath) {
    console.log(`Extracting text from ${pdfPath}...`);
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return data.text;
}

async function analyzePaperText(text, paperName) {
    console.log(`Analyzing ${paperName}...`);
    const prompt = `
You are an expert tutor for the CDS (Combined Defence Services) exam.
I am providing you with the text of a recent CDS General Studies (GS) question paper (${paperName}).

Please analyze this paper and output a JSON object containing:
1. "overall_difficulty": A string describing the overall difficulty (e.g., "Moderate to Tough") and a short explanation.
2. "topic_analysis": An object where keys are broad subjects (e.g., "polity", "geography", "history", "science", "current_affairs", "economics") and values are objects containing:
   - "difficulty": Difficulty of questions in this topic.
   - "high_yield_areas": An array of specific sub-topics that were heavily tested (e.g., ["Panchayati Raj", "Ocean Currents"]).
   - "trend_shift": Any noticeable shift compared to standard expectations (e.g., "More statement-based questions").

Respond ONLY with valid JSON. Do not include markdown blocks like \`\`\`json.
Text of the paper:
${text.substring(0, 150000)} // Limiting to ~150k chars for safety, though Gemini handles more.
    `;

    try {
        const result = await model.generateContent(prompt);
        let textResult = result.response.text();
        textResult = textResult.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(textResult);
    } catch (error) {
        console.error(`Failed to analyze ${paperName}:`, error);
        return null;
    }
}

async function main() {
    const finalReport = {};

    for (const paper of targetPapers) {
        const fullPath = path.join(pyqDir, paper);
        if (fs.existsSync(fullPath)) {
            const text = await extractTextFromPdf(fullPath);
            const analysis = await analyzePaperText(text, paper);
            if (analysis) {
                finalReport[paper] = analysis;
            }
            console.log("Waiting 30 seconds to avoid rate limits...");
            await new Promise(resolve => setTimeout(resolve, 30000));
        } else {
            console.warn(`Paper not found: ${fullPath}`);
        }
    }

    const reportPath = path.join(__dirname, 'exam_focus_analysis.json');
    fs.writeFileSync(reportPath, JSON.stringify(finalReport, null, 2), 'utf-8');
    console.log(`\nAnalysis complete! Report saved to ${reportPath}`);
}

main();
