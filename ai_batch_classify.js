require('dotenv').config();
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const xlsx = require('xlsx');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const DATA_JS_PATH = path.join(__dirname, 'data.js');
const PROGRESS_FILE = path.join(__dirname, 'scratch', 'ai_classification_state.json');

const PROMPT_TEMPLATE = `
You are an expert examiner for the National Defence Academy (NDA) General Ability Test (GAT).

Your first task is NOT to answer the question. Instead, determine which subject the question belongs to.

## Step 1: Identify the Subject
Choose exactly ONE subject from the following list:
* English
* Physics
* Chemistry
* Mathematics
* Biology
* History
* Geography
* Indian Polity
* Economics
* Current Affairs

## Step 2: Give Confidence
State your confidence level:
* Very High
* High
* Moderate
* Low

## Step 3: Explain Why
Briefly explain what keywords, concepts, or reasoning made you classify it into that subject.

## Step 4: Mention Similar Subjects (if applicable)
If the question overlaps multiple subjects, mention the secondary subject(s), but still choose only one primary subject. (If none, leave empty).

## Step 5: Only After Classification
Proceed to solve the question with a complete explanation.

## Important Classification Rules
* Questions about rivers, mountains, climate, soils, industries, agriculture, monsoons, minerals, maps, population, or natural resources → Geography.
* Questions about the Constitution, President, Parliament, Supreme Court, Fundamental Rights, elections, governance, Panchayati Raj, or constitutional bodies → Indian Polity.
* Questions about freedom fighters, wars, dynasties, empires, historical events, dates, or civilizations → History.
* Questions involving GDP, inflation, RBI, taxation, money, banking, fiscal policy, unemployment, or budgets → Economics.
* Questions involving living organisms, plants, animals, the human body, diseases, genetics, or ecology → Biology.
* Questions involving motion, force, electricity, energy, light, sound, magnets, atoms, or nuclear physics → Physics.
* Questions involving elements, compounds, reactions, acids, bases, salts, organic molecules, or the periodic table → Chemistry.
* Questions involving grammar, vocabulary, sentence correction, comprehension, or idioms → English.
* Questions about recent events, awards, defence exercises, new government schemes, international organizations, sports events, or space missions → Current Affairs.
When uncertain, classify using the PRIMARY concept being tested rather than isolated keywords.

OUTPUT INSTRUCTIONS:
You MUST output ONLY a valid JSON object matching exactly this schema, and nothing else. No markdown backticks.
{
  "subject": "String (One of the 10 subjects listed above)",
  "confidence": "String (Very High, High, Moderate, Low)",
  "reasoning": "String (Explanation for classification)",
  "secondarySubject": "String (Secondary subject or empty string)",
  "solution": "String (Complete step-by-step solution to the question)"
}

QUESTION TO ANALYZE:
`;

async function callGemini(qText) {
    const fullPrompt = PROMPT_TEMPLATE + "\n" + qText;
    
    let retries = 3;
    while (retries > 0) {
        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: fullPrompt }] }],
                    generationConfig: {
                        temperature: 0.1,
                        response_mime_type: "application/json"
                    }
                })
            });
            
            if (res.status === 429) {
                console.log("Rate limited! Waiting 60s...");
                await new Promise(r => setTimeout(r, 60000));
                retries--;
                continue;
            }
            
            const data = await res.json();
            if (!data.candidates || !data.candidates[0].content) {
                throw new Error("Invalid response format: " + JSON.stringify(data));
            }
            
            const text = data.candidates[0].content.parts[0].text;
            return JSON.parse(text);
        } catch(e) {
            console.error("Gemini call failed:", e.message);
            retries--;
            await new Promise(r => setTimeout(r, 10000));
        }
    }
    return null;
}

function loadDB() {
    const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
    const executableContent = content.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(executableContent, sandbox);
    return sandbox.CBT_EXAMS_DATABASE;
}

async function runBatch() {
    const db = loadDB();
    
    let state = {};
    if (fs.existsSync(PROGRESS_FILE)) {
        state = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    }

    let allQuestions = [];
    db.forEach(exam => {
        if (exam.id.startsWith('nda-gat-new-')) {
            exam.questions.forEach(q => allQuestions.push({ q, examId: exam.id }));
        }
    });
    
    console.log(`Total questions to process: ${allQuestions.length}`);
    
    let processed = 0;
    
    for (let i = 0; i < allQuestions.length; i++) {
        const { q } = allQuestions[i];
        
        if (state[q.id]) {
            const s = state[q.id];
            q.topicId = s.subject || q.topicId;
            q.confidence = s.confidence;
            q.reasoning = s.reasoning;
            q.secondarySubject = s.secondarySubject;
            q.explanation = s.solution || q.explanation;
            processed++;
            continue;
        }
        
        console.log(`Processing ${i+1}/${allQuestions.length}: ${q.id}...`);
        
        const qText = `Question: ${q.question}\nOptions:\n` + (q.options || []).map((o, idx) => `${String.fromCharCode(65+idx)}. ${o}`).join('\n');
        
        const result = await callGemini(qText);
        
        if (result) {
            state[q.id] = result;
            
            q.topicId = result.subject || q.topicId;
            q.confidence = result.confidence;
            q.reasoning = result.reasoning;
            q.secondarySubject = result.secondarySubject;
            q.explanation = result.solution || q.explanation;
            
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(state, null, 2));
            processed++;
        } else {
            console.log(`Failed to process ${q.id}, stopping batch to save progress.`);
            break;
        }
        
        await new Promise(r => setTimeout(r, 5500));
    }
    
    console.log(`Finished processing. Total processed/restored: ${processed}`);
    
    console.log("Saving back to data.js...");
    const jsonStr = JSON.stringify(db, null, 2);
    const newContent = `const CBT_EXAMS_DATABASE = ${jsonStr};\n`;
    fs.writeFileSync(DATA_JS_PATH, newContent, 'utf8');
    
    console.log("Exporting to Excel...");
    const wb = xlsx.utils.book_new();
    const exportData = [];

    db.forEach(exam => {
        exam.questions.forEach((q, idx) => {
            let optionsStr = q.options ? q.options.map((o, i) => `${String.fromCharCode(65+i)}. ${o}`).join('   |   ') : '';
            
            exportData.push({
                Exam_ID: exam.id,
                Question_Num: idx + 1,
                Subject: q.topicId,
                Confidence: q.confidence || '',
                Secondary_Subject: q.secondarySubject || '',
                Reasoning: q.reasoning || '',
                Question: q.question,
                Options: optionsStr,
                Correct: q.correct,
                AI_Solution: q.explanation || ''
            });
        });
    });

    const ws = xlsx.utils.json_to_sheet(exportData);
    const colWidths = [
        { wch: 15 }, { wch: 10 }, { wch: 15 }, { wch: 12 }, { wch: 18 }, { wch: 40 },
        { wch: 60 }, { wch: 50 }, { wch: 8 }, { wch: 80 }
    ];
    ws['!cols'] = colWidths;
    
    xlsx.utils.book_append_sheet(wb, ws, "AI_Classified");
    const excelPath = path.join(__dirname, 'scratch', 'NDA_GAT_Papers_AI_Classified.xlsx');
    xlsx.writeFile(wb, excelPath);
    console.log(`Successfully generated ${excelPath}`);
}

runBatch();
