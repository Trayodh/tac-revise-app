const fs = require('fs');
const https = require('https');
require('dotenv').config();

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const filename = 'current_affairs_db.js';

const prompt_template = `You are a subject matter expert for Indian Defence Exams (NDA, CDS, AFCAT).
I am providing you with a brief Current Affairs item.
Your task is to generate the rich metadata fields for it (UPSC Highlights, detailed analysis, etc.) so it can be displayed in a deep-dive UI.

ORIGINAL TOPIC: {topic}
ORIGINAL TEXT: {text}
ORIGINAL DETAILS: {details}

Output strictly as a JSON object (no markdown, no backticks, no comments).
Include ONLY the following keys in your JSON object (do not include id, topic, text, details, mcq):
{
  "upscHighlights": ["Highlight 1 (5-10 words)", "Highlight 2", "Highlight 3"],
  "institutionalContext": "Brief context about the institution involved.",
  "strategicImportance": "Why this matters for UPSC / Defence.",
  "quickSummary": "A slightly longer paragraph summarizing the event.",
  "detailedAnalysis": "Detailed background and analysis paragraph.",
  "backgroundContext": "Historical or contextual background.",
  "stakeholders": ["Entity A", "Entity B"],
  "relatedTopics": ["Topic 1", "Topic 2"],
  "examRelevanceMatrix": {
    "NDA": "High/Medium/Low",
    "CDS": "High/Medium/Low",
    "AFCAT": "High/Medium/Low"
  },
  "potentialQuestions": {
    "shortAnswers": ["Question 1?", "Question 2?"],
    "interviewQuestions": ["Interview Q 1?", "Interview Q 2?"],
    "ssbDiscussionTopics": ["SSB topic 1", "SSB topic 2"]
  }
}`;

async function generateRichFields(item) {
  const prompt = prompt_template
    .replace('{topic}', item.topic || '')
    .replace('{text}', item.text || '')
    .replace('{details}', JSON.stringify(item.details || {}));

  const payload = JSON.stringify({
    model: 'llama-3.1-8b-instant',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2,
    response_format: { type: 'json_object' }
  });

  const maxRetries = 3;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await new Promise((resolve, reject) => {
        const req = https.request({
          hostname: 'api.groq.com',
          path: '/openai/v1/chat/completions',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${GROQ_API_KEY}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload)
          }
        }, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => {
            if (res.statusCode !== 200) {
              reject(new Error(`API Error: ${res.statusCode} ${data}`));
            } else {
              resolve(JSON.parse(data));
            }
          });
        });
        req.on('error', reject);
        req.write(payload);
        req.end();
      });
      
      const content = result.choices[0].message.content.trim();
      return JSON.parse(content);
    } catch (e) {
      console.log(`Error calling API for ${item.id} (Attempt ${attempt}): ${e.message}`);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  return null;
}

async function upgradeDb() {
  console.log("Reading file...");
  let content = fs.readFileSync(filename, 'utf-8');
  content = content.replace('window.CURRENT_AFFAIRS_DB', 'global.CURRENT_AFFAIRS_DB');
  eval(content);

  const ca_db = global.CURRENT_AFFAIRS_DB;
  const targetMonths = ['April 2026', 'May 2026', 'June 2026', 'July 2026', 'August 2026'];

  let totalUpgraded = 0;
  let itemsToProcess = [];

  for (const month of targetMonths) {
    if (ca_db[month]) {
      for (const item of ca_db[month]) {
        if (!item.upscHighlights || item.upscHighlights.length === 0) {
          itemsToProcess.push({ month, item });
        }
      }
    }
  }

  console.log(`Found ${itemsToProcess.length} items to process.`);

  // Process in batches of 5 to avoid strict rate limits
  const concurrency = 5;
  for (let i = 0; i < itemsToProcess.length; i += concurrency) {
    const batch = itemsToProcess.slice(i, i + concurrency);
    console.log(`Processing batch ${Math.floor(i / concurrency) + 1} of ${Math.ceil(itemsToProcess.length / concurrency)}...`);
    
    await Promise.all(batch.map(async ({ month, item }) => {
      const richFields = await generateRichFields(item);
      if (richFields) {
        Object.assign(item, richFields);
        totalUpgraded++;
      }
    }));
    
    // Save progress
    const newContent = 'window.CURRENT_AFFAIRS_DB = ' + JSON.stringify(ca_db, null, 2) + ';\n';
    fs.writeFileSync(filename, newContent, 'utf-8');
    await new Promise(r => setTimeout(r, 1000)); // Sleep between batches
  }

  console.log(`Done! Upgraded ${totalUpgraded} items.`);
}

upgradeDb().catch(console.error);
