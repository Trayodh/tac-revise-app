require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function loadDiagramIndex() {
  const code = fs.readFileSync(path.join(__dirname, '../diagram_index_data.js'), 'utf8');
  const vm = require('vm');
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.window.DIAGRAM_INDEX;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateModule(topic, diagramSubset) {
  // Only pass diagrams that belong to this topic to save tokens
  const relevantDiagrams = {};
  for (const [key, val] of Object.entries(diagramSubset)) {
    if (val.topic_id === topic.id || key.toLowerCase().includes(topic.title.toLowerCase())) {
      relevantDiagrams[key] = val;
    }
  }

  const prompt = `You are an expert academic curriculum writer for high-stakes defence exams (NDA/CDS).
We need to upgrade the following study notes into a "Mega-Dense Academic Module". 
The output MUST BE highly encyclopedic, extremely detailed, and use a textbook-style paragraph-based structure interspersed with detailed Markdown tables (if applicable).
Expand all one-liners into thorough, comprehensive paragraphs. Include historical/scientific/geographical trivia where relevant to make the notes exhaustive.

Here is the base content to expand:
Topic Title: ${topic.title}
Formulas/Quick Facts: ${topic.formulas || 'None'}
Base Notes: ${topic.notes || 'No base notes provided.'}

Also, you have access to the following local diagrams. 
If any diagram is highly relevant to this topic, you MUST inject it exactly where it belongs in the text using Markdown image syntax:
![title](/assets/diagrams/FILE_NAME)
DO NOT invent or use external images. ONLY use the files provided below (if relevant).

Available Diagrams (JSON):
${JSON.stringify(relevantDiagrams, null, 2)}

Output the fully expanded "Mega-Dense Academic Module" in GitHub-flavored Markdown. Do not include any conversational filler.`;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error(`Error generating content for ${topic.title}:`, err.message);
    throw err;
  }
}

async function processSubject(subjectId) {
  console.log(`Starting processing for subject: ${subjectId}`);
  
  const metaPath = path.join(__dirname, '../all_topics_meta.json');
  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  
  const topics = meta.filter(t => t.subjectId === subjectId);
  console.log(`Found ${topics.length} topics for ${subjectId}`);
  
  let diagramIndex = {};
  try {
      diagramIndex = await loadDiagramIndex();
  } catch(e) {
      console.warn("Could not parse diagram index, continuing without it.");
  }
  
  // Try to find a matching category in diagram index
  let diagramSubset = {};
  if (diagramIndex[subjectId]) {
      diagramSubset = diagramIndex[subjectId];
  } else if (diagramIndex[subjectId.toLowerCase()]) {
      diagramSubset = diagramIndex[subjectId.toLowerCase()];
  }

  const outDir = path.join(__dirname, '../evolved_notes', subjectId);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Proper concurrency queue
  const concurrency = 1;
  let activePromises = [];
  
  // By default run all if --full is passed, otherwise run 5 for testing
  const limit = process.argv.includes('--full') ? topics.length : topics.length; // Wait, let's just run all now.
  const targetTopics = topics;
  
  for (let i = 0; i < targetTopics.length; i++) {
    const topic = targetTopics[i];
    const outFile = path.join(outDir, `${topic.id}.md`);
    if (fs.existsSync(outFile)) {
      console.log(`Skipping ${topic.title} - already exists`);
      continue;
    }

    const p = (async () => {
      let retries = 3;
      while (retries > 0) {
        try {
          console.log(`Generating: ${topic.title}`);
          const markdown = await generateModule(topic, diagramSubset);
          fs.writeFileSync(outFile, markdown, 'utf8');
          console.log(`Saved: ${topic.title}`);
          break;
        } catch (e) {
          retries--;
          console.log(`Failed ${topic.title}. Retries left: ${retries}`);
          // If it's a rate limit (429), the API requires waiting a minute
          if (e.message && e.message.includes('429')) {
             console.log(`Rate limit hit. Waiting 60 seconds before retry...`);
             await sleep(60000);
          } else {
             await sleep(10000); // 10s backoff for other errors
          }
        }
      }
    })();
    
    activePromises.push(p);
    
    if (activePromises.length >= concurrency) {
      await Promise.all(activePromises);
      activePromises = [];
      await sleep(5000); // Wait 5 seconds between topics to respect 15 RPM limits
    }
  }
  
  if (activePromises.length > 0) {
    await Promise.all(activePromises);
  }
  
  console.log(`Finished processing ${subjectId}. Saved to evolved_notes/${subjectId}/`);
}

const subjectArg = process.argv[2];
if (!subjectArg) {
  console.error("Please provide a subjectId (e.g., node script.js history)");
  process.exit(1);
}

processSubject(subjectArg).catch(console.error);
