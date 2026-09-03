const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const months = ["April 2026", "May 2026", "June 2026", "July 2026", "August 2026", "September 2026"];

const systemPrompt = `You are an expert UPSC CDS, NDA, and AFCAT examiner and defence analyst.
Your task is to generate highly accurate, exam-oriented Current Affairs notes for the requested month.
You must output a strictly valid JSON array of objects.
Do NOT hallucinate. Present verified facts. Prioritize military/strategic relevance (Defence, National Affairs, Economy, Science, Environment).
Limit your output to EXACTLY 5 of the absolute most critical high-yield events for the requested month.

JSON Schema per object:
{
  "id": "unique-id-month-year",
  "topic": "Priority Emoji + Priority Level | Category | Event Name", // e.g. "🔴 MUST KNOW | Defence | Exercise Cyclone"
  "text": "One-line rapid revision summary of the event.", // Keep it to one line!
  "details": {
    "summary": "Full markdown string containing the detailed analysis."
  },
  "mcq": null
}

For the \`details.summary\` field, you MUST format the string EXACTLY like this using Markdown (use \\n for newlines within the string):
### 📌 What Happened
[Explanation]

### 🎯 Why It Matters
[Relevance for India/CDS]

### 🧠 Key Facts
- [Fact 1]
- [Fact 2]

### 🔗 Static GK Connection
[Static GK context]

### ⚠️ Exam Trap
[Commonly confused fact]

### 🎯 Possible Question Angle
[How UPSC will frame this]
`;

async function generate() {
    let allCA = {};
    for (const month of months) {
        console.log(`Generating intelligence for ${month}...`);
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [
                    { role: 'user', parts: [{ text: systemPrompt + `\n\nGenerate 5 highly critical CDS/NDA exam-oriented Current Affairs for ${month} in the exact JSON format requested.` }] }
                ],
                config: {
                    temperature: 0.2,
                    responseMimeType: "application/json",
                }
            });
            let content = response.text;
            let data = JSON.parse(content);
            allCA[month] = data;
            console.log(`  [OK] Success! Generated ${data.length} entries for ${month}`);
        } catch (e) {
            console.log(`  [FAIL] Failed for ${month}: ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 1000));
    }
    
    fs.writeFileSync('legacy_ca_april_sept_2026.json', JSON.stringify(allCA, null, 2), 'utf-8');
    console.log('Saved to legacy_ca_april_sept_2026.json');
}

generate();
