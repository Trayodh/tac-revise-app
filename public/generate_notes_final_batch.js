const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = __dirname;
const envPath = path.join(ROOT, '.env');

// Load env
let OPENROUTER_API_KEY = '';
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const match = envContent.match(/OPENROUTER_API_KEY=(.+)/);
  if (match) OPENROUTER_API_KEY = match[1].trim();
}

if (!OPENROUTER_API_KEY) {
  console.error("No OPENROUTER_API_KEY found in .env");
  process.exit(1);
}

// Load data
const syllabusRaw = fs.readFileSync(path.join(ROOT, 'syllabus_data.js'), 'utf-8');
let syllabusTopics = {};
const keyValRegex = /^\s*"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/gm;
let m;
while ((m = keyValRegex.exec(syllabusRaw)) !== null) {
  syllabusTopics[m[1]] = m[2].replace(/\\"/g, '"');
}

const pyqRaw = fs.readFileSync(path.join(ROOT, 'pyq_trends.js'), 'utf-8');
let pyqTopics = {};
const pyqKV = /^\s*"([^"]+)":\s*"((?:[^"\\]|\\.)*)"/gm;
let pm;
while ((pm = pyqKV.exec(pyqRaw)) !== null) {
  pyqTopics[pm[1]] = pm[2].replace(/\\"/g, '"');
}

const remainingTopics = JSON.parse(fs.readFileSync('remaining_topics.json', 'utf8'));

async function callOpenRouter(prompt) {
  const data = JSON.stringify({
    model: "openrouter/free",
    messages: [
      { role: "system", content: "You are an expert tutor for Indian Defence Exams (NDA, CDS, AFCAT). Your goal is to generate high-quality, exam-focused study notes in HTML format. Follow the requested structure strictly." },
      { role: "user", content: prompt }
    ],
    temperature: 0.2
  });

  let retries = 3;
  while (retries > 0) {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 120000);
      
      const res = await fetch(`https://openrouter.ai/api/v1/chat/completions`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': 'https://defenceexams.local',
          'X-Title': 'DefenceExams'
        },
        body: data,
        signal: controller.signal
      });
      clearTimeout(id);
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} body: ${await res.text()}`);
      }
      
      const json = await res.json();
      if (json.choices && json.choices.length > 0) {
        let text = json.choices[0].message.content;
        text = text.replace(/^```html\n?/m, '').replace(/^```\n?/m, '').replace(/```$/m, '');
        return text;
      } else {
        throw new Error("No choices in response: " + JSON.stringify(json));
      }
    } catch (e) {
      console.error(`Fetch error (${retries} retries left):`, e.message);
      retries--;
      if (retries === 0) throw e;
      await new Promise(r => setTimeout(r, 8000));
    }
  }
}

async function generateNote(topicId) {
  const syllabusDesc = syllabusTopics[topicId] || "No syllabus data";
  const pyqTrend = pyqTopics[topicId] || "No PYQ data";
  
  const prompt = `Generate highly detailed, comprehensive study notes for the defence exam topic: "${topicId}".

Context from Official Syllabus:
${syllabusDesc}

Context from Previous Year Question (PYQ) Trends:
${pyqTrend}

Target Audience: Aspirants for NDA, CDS, and AFCAT exams.

Formatting Requirements:
1. Output ONLY raw HTML suitable to be injected directly into a webpage. Do not include \`\`\`html tags or markdown blocks.
2. Use <h1> for the main topic title, followed by an <hr />.
3. Use <h2> for major sections and <h3> for sub-sections.
4. Use <ul> and <li> for lists, <p> for paragraphs, and <strong> for emphasis.
5. 📊 YOU MUST INCLUDE TABLES! Use standard HTML <table>, <tr>, <th>, and <td> tags to organize data, comparisons, chronologies, formulas, or key properties. Make sure tables have basic inline styles or assume a clean CSS framework (e.g., <table style="width:100%; border-collapse: collapse; margin-bottom: 1rem;">).
6. Create special callout boxes using standard HTML (e.g., <div style="background-color:#ffeeba; padding:10px; border-left:4px solid #ffc107; margin:10px 0;">) for:
   - "💡 High-Yield Fact": Key facts frequently asked in exams.
   - "⚠️ Trap Alert": Common pitfalls or confusing points that UPSC uses to trick students.
   - "🎯 PYQ Insight": Direct reference to how this was asked based on the PYQ trends provided.
   - "🧠 Mnemonic": Memory aids to help remember complex lists.
7. The notes must be EXTREMELY comprehensive and detailed. Aim for an in-depth textbook-level explanation (at least 1500 words equivalent).
8. Do not include full HTML document wrappers (<html>, <head>, <body>). Just the content elements.

Start directly with the <h1> tag.`;

  console.log(`Generating note for: ${topicId}...`);
  try {
    const htmlContent = await callOpenRouter(prompt);
    return htmlContent;
  } catch (e) {
    console.error(`Error generating ${topicId}:`, e);
    return null;
  }
}

async function run() {
  const outputFile = path.join(ROOT, 'notes_generated_final_upgrade.js');
  
  if (!fs.existsSync(outputFile)) {
    fs.writeFileSync(outputFile, 'window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n', 'utf-8');
  }

  for (const topicId of remainingTopics) {
    console.log(`Processing ${topicId}...`);
    const existingContent = fs.readFileSync(outputFile, 'utf-8');
    if (existingContent.includes(`EXPANDED_NOTES_DATA["${topicId}"]`)) {
      console.log(`Topic ${topicId} already exists in output file. Skipping.`);
      continue;
    }

    const htmlContent = await generateNote(topicId);
    
    if (htmlContent) {
      const escapedHtml = htmlContent.replace(/`/g, '\\`');
      const jsEntry = `window.EXPANDED_NOTES_DATA["${topicId}"] = String.raw\`\n${escapedHtml}\n\`;\n\n`;
      fs.appendFileSync(outputFile, jsEntry, 'utf-8');
      console.log(`✅ Successfully saved ${topicId}`);
    } else {
      console.log(`❌ Failed to generate ${topicId}`);
    }
    
    await new Promise(r => setTimeout(r, 8500));
  }
  
  console.log("Final upgrade batch processing complete.");
}

run();
