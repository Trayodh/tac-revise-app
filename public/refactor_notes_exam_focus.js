const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

// 1. Load the analysis data
const analysisFile = path.join(__dirname, 'exam_focus_analysis.json');
const analysisData = JSON.parse(fs.readFileSync(analysisFile, 'utf8'));

// Consolidate by subject
const trendsBySubject = {};
for (const paperName in analysisData) {
    const paper = analysisData[paperName];
    const topics = paper.topic_analysis;
    for (const subject in topics) {
        if (!trendsBySubject[subject]) {
            trendsBySubject[subject] = {
                high_yield_areas: new Set(),
                trend_shifts: []
            };
        }
        topics[subject].high_yield_areas.forEach(area => trendsBySubject[subject].high_yield_areas.add(area));
        trendsBySubject[subject].trend_shifts.push(topics[subject].trend_shift);
    }
}
const consolidatedTrends = {};
for (const subject in trendsBySubject) {
    consolidatedTrends[subject] = {
        high_yield_areas: Array.from(trendsBySubject[subject].high_yield_areas).join(', '),
        trend_shift: trendsBySubject[subject].trend_shifts.join(' | ')
    };
}

// 2. Load the notes database
console.log("Loading notes_data_upgraded.js...");
let content = fs.readFileSync('notes_data_upgraded.js', 'utf-8');
let tempContent = content + '\nmodule.exports = { CURRENT_AFFAIRS_DB, NOTES_DATABASE };\n';
fs.writeFileSync('temp_notes.js', tempContent);

const { CURRENT_AFFAIRS_DB, NOTES_DATABASE } = require('./temp_notes.js');

// 3. Collect all topics
const allTopics = [];
for (const subject in NOTES_DATABASE) {
    const chapters = NOTES_DATABASE[subject].chapters;
    for (let c = 0; c < chapters.length; c++) {
        // Skip the previously injected exam-focus chapter if it exists
        if (chapters[c].id === "exam-focus-2026") continue;
        
        const topics = chapters[c].topics;
        for (let t = 0; t < topics.length; t++) {
            if (topics[t].notes && topics[t].notes.trim().length > 0) {
                allTopics.push({
                    subject,
                    chapterIndex: c,
                    topicIndex: t,
                    topicRef: topics[t]
                });
            }
        }
    }
}
console.log(`Found ${allTopics.length} topics to refactor.`);

// 4. Refactor Function
async function refactorTopic(item) {
    const { subject, topicRef } = item;
    const trendData = consolidatedTrends[subject] || { high_yield_areas: "None identified", trend_shift: "Standard pattern" };
    
const comparativeTopicsPath = path.join(__dirname, '..', 'brain', '6e4c259b-cd1d-4b91-ad25-bea102899c0e', 'comparative_topics_list.md');
    let comparativeListContext = "";
    if (fs.existsSync(comparativeTopicsPath)) {
        comparativeListContext = "\\nHere is a list of high-yield comparative topics that should always be structured as tabular comparisons:\\n" + fs.readFileSync(comparativeTopicsPath, 'utf8') + "\\n";
    }

    const prompt = `
You are an expert curriculum designer for the CDS and NDA exams.
I am providing you with the HTML notes for a specific topic: "${topicRef.title}" in the subject: "${subject}".

Here is the 2024-2026 PYQ trend analysis for this subject:
- High Yield Areas: ${trendData.high_yield_areas}
- Trend Shifts: ${trendData.trend_shift}
${comparativeListContext}
Your task is to REWRITE the provided HTML notes to explicitly emphasize *what* and *how* the exam asks questions about this topic, keeping the 2024-2026 papers in extreme focus.

Rules for rewriting:
1. Preserve all existing factual knowledge and basic HTML structures (headings, lists, bold text).
2. Instead of putting alerts at the end, break up extensive reading by injecting "Fun Fact time!" style boxes IN BETWEEN the notes. Use this format: <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"><strong>💡 Fun Fact time!</strong><br>[Insert an interesting bite-sized fact or real-world application of the concept that directly ties into how UPSC asked it in 2024-2026]</div>
3. Reframe sentences throughout the notes to be analytical and engaging, keeping the 2024-2026 trend shifts in extreme focus.
4. If the topic involves concepts mentioned in the comparative topics list, or any concepts that are highly comparable, automatically structure those specific concepts into clear, scannable "Versus" or "Difference Between" HTML tables to instantly clarify distinctions for the student. Use standard HTML <table>, <tr>, <th>, and <td> tags with inline CSS for styling.
5. Identify dry lists, complex sequences, or rote memorization items (e.g., Schedules, River Tributaries, Atmosphere layers). For these items, automatically inject a memory hack box containing a memorable mnemonic, acronym, or trick. Use this format: <div class="memory-hack-box"><strong>💡 Memory Hack!</strong><br>[Insert your mnemonic/acronym and a brief explanation of how to use it]</div>
6. Do NOT output any markdown wrappers (like \`\`\`html). Output purely the refactored HTML string.

Original Notes HTML:
${topicRef.notes}
    `;

    try {
        const result = await model.generateContent(prompt);
        let rewrittenHtml = result.response.text();
        rewrittenHtml = rewrittenHtml.replace(/```html/g, '').replace(/```/g, '').trim();
        topicRef.notes = rewrittenHtml;
        console.log(`[SUCCESS] Refactored: ${subject} -> ${topicRef.title}`);
    } catch (error) {
        console.error(`[ERROR] Failed to refactor ${topicRef.title}:`, error);
    }
}

// 5. Run sequentially with delay
async function runSequential(items) {
    for (let i = 0; i < items.length; i++) {
        console.log(`Processing topic ${i + 1} of ${items.length}...`);
        await refactorTopic(items[i]);
        await new Promise(r => setTimeout(r, 4000));
    }
}

async function main() {
    await runSequential(allTopics);
    
    console.log("Saving refactored notes to notes_data_exam_focused.js...");
    // Serialize object to JS format
    const newContent = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(CURRENT_AFFAIRS_DB, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(NOTES_DATABASE, null, 2)};\n`;
    
    fs.writeFileSync('notes_data_exam_focused.js', newContent, 'utf-8');
    
    // Clean up
    fs.unlinkSync('temp_notes.js');
    
    console.log("Updating index.html to use the new file...");
    let indexHtml = fs.readFileSync('index.html', 'utf-8');
    indexHtml = indexHtml.replace('<script src="notes_data_upgraded.js?v=1786539912129"></script>', '<script src="notes_data_exam_focused.js?v=1786539912129"></script>');
    fs.writeFileSync('index.html', indexHtml, 'utf-8');
    
    console.log("Refactoring complete!");
}

main();
