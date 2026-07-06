require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const dataJsPath = path.join(__dirname, '../data.js');
let dataContent = fs.readFileSync(dataJsPath, 'utf8');

let NOTES_DATABASE = {};
let window = {};
try {
    eval(dataContent);
} catch (e) {
    console.error("Error evaluating data.js:", e);
}

const dir = path.join(__dirname, '..');
const files = fs.readdirSync(dir).filter(f => f.startsWith('notes_extra') && f.endsWith('.js'));

const CORRUPT_PATTERN = "The primary cloud model is currently undergoing high rate limits";

async function generateNote(subject, chapter, topic) {
    const prompt = `Your task is to provide an EXHAUSTIVE, deep-dive, UPSC-level explanation of the topic "${topic.title}" from the chapter "${chapter.title}" in ${subject.title}. 
IMPORTANT: Your entire explanation MUST be exclusively in English. Do not write in Hindi or any other language.

Detailed Notes must not be short summaries. Ensure the output is comprehensive (minimum 1000 words, target 1500-2500 words) so a beginner can understand but an advanced aspirant finds it exam-ready. You MUST include diagrams, pictures, and high-yield concepts!

MANDATORY INTRODUCTORY STRUCTURE:
You must start your entire response with this exact HTML structure, filling in the dynamic parts:
<h3 style="color: var(--accent); margin-bottom: 20px;">Detailed AI Explanation</h3>
<div style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;">`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            temperature: 0.3
        }
    });

    let text = response.text;
    
    if (text.includes("Detailed AI Explanation")) {
        text = text + "\n</div>";
    }
    
    let formattedText = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\`([^\`]+)\`/g, '<code style="background-color:rgba(255,255,255,0.05); padding:2px 4px; border-radius:4px;">$1</code>')
      .replace(/^#{1,3} (.+)$/gm, '<h4 style="color: var(--accent); margin:16px 0 8px;">$1</h4>')
      .replace(/\n/g, '<br/>');

    return formattedText;
}

async function main() {
    let totalCorrupted = 0;
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        const regex = /EXPANDED_NOTES_DATA\["([^"]+)"\]\s*=\s*`([\s\S]*?)`;\s*(?=EXPANDED_NOTES_DATA|$)/g;
        let match;
        const topicsToFix = [];
        
        while ((match = regex.exec(content)) !== null) {
            if (match[2].includes(CORRUPT_PATTERN)) {
                topicsToFix.push({
                    key: match[1],
                    fullMatch: match[0],
                    originalContent: match[2]
                });
            }
        }
        
        if (topicsToFix.length > 0) {
            console.log(`[FILE] Found ${topicsToFix.length} corrupted topics in ${file}`);
            totalCorrupted += topicsToFix.length;
            
            for (const t of topicsToFix) {
                console.log(`-> Regenerating topic: ${t.key}`);
                
                let subjectTitle = "General Knowledge";
                let chapterTitle = "Topic";
                let topicTitle = t.key;
                
                for (const subKey in NOTES_DATABASE) {
                    const sub = NOTES_DATABASE[subKey];
                    if (!sub.chapters) continue;
                    for (const chap of sub.chapters) {
                        if (!chap.topics) continue;
                        const top = chap.topics.find(x => x.id === t.key);
                        if (top) {
                            subjectTitle = sub.title;
                            chapterTitle = chap.title;
                            topicTitle = top.title;
                            break;
                        }
                    }
                }
                
                try {
                    const newHtml = await generateNote({title: subjectTitle}, {title: chapterTitle}, {title: topicTitle});
                    const newBlock = 'EXPANDED_NOTES_DATA["' + t.key + '"] = `\n' + newHtml.replace(/`/g, '\\`') + '\n`;\n';
                    
                    content = fs.readFileSync(filePath, 'utf8'); // Re-read to ensure fresh content
                    content = content.replace(t.fullMatch, newBlock);
                    fs.writeFileSync(filePath, content, 'utf8');
                    
                    console.log(`   ✅ Saved ${t.key}`);
                    await new Promise(r => setTimeout(r, 4500)); // Sleep ~4.5s
                } catch (e) {
                    console.error(`   ❌ Failed on ${t.key}:`, e.message);
                    await new Promise(r => setTimeout(r, 10000));
                }
            }
        }
    }
    console.log(`\n🎉 Done! Regenerated ${totalCorrupted} topics.`);
}

main();
