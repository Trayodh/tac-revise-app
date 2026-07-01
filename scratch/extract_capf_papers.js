require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const CAPF_DIR = 'CAPF_CSE_Papers';

async function main() {
  if (!fs.existsSync(CAPF_DIR)) {
    console.error(`Directory ${CAPF_DIR} not found.`);
    return;
  }

  const files = fs.readdirSync(CAPF_DIR).filter(f => f.endsWith('.pdf'));
  if (files.length === 0) {
    console.log("No PDFs found to process.");
    return;
  }

  let allInsightsHtml = '';

  for (const file of files) {
    const fullPath = path.join(CAPF_DIR, file);
    console.log(`\nProcessing ${file}...`);
    
    try {
      const uploadResult = await ai.files.upload({
          file: fullPath,
          mimeType: 'application/pdf',
      });
      
      console.log(`File uploaded successfully. URI: ${uploadResult.uri}`);
      console.log("Waiting 15 seconds for Google processing...");
      await new Promise(resolve => setTimeout(resolve, 15000));
    
      const prompt = `You are an expert UPSC CAPF & CSE educator. 
I have uploaded an official past exam paper. 
Extract the top 5 most critical, high-yield General Studies topics from this paper that are absolutely essential for a defence aspirant.
For each topic, provide a brief, rich summary of what they need to know.

Output MUST be a raw JSON array of objects with exactly this structure:
[
  {
    "topicName": "Topic Title",
    "details": "Detailed, highly factual summary to study.",
    "relevance": "Very High"
  }
]
Output ONLY raw JSON. Do not include markdown code block backticks (like \`\`\`json) or any introductory text.`;
    
      console.log("Requesting insights from Gemini (using gemini-2.5-flash)...");
      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
              {
                  role: 'user',
                  parts: [
                      { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
                      { text: prompt }
                  ]
              }
          ],
          config: {
              temperature: 0.1
          }
      });
    
      let rawText = response.text.trim();
      if (rawText.startsWith('```json')) {
        rawText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');
      } else if (rawText.startsWith('```')) {
        rawText = rawText.replace(/^```\n/, '').replace(/\n```$/, '');
      }
      
      const parsed = JSON.parse(rawText);
      console.log(`Extracted ${parsed.length} topics.`);
      
      allInsightsHtml += `\n<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from ${file.replace('.pdf', '')}
  </h3>\n`;

      parsed.forEach(topic => {
        allInsightsHtml += `
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    ${topic.topicName} <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: ${topic.relevance}</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    ${topic.details}
  </p>`;
      });
      
      allInsightsHtml += `\n</div>\n`;
      
    } catch (err) {
      console.error(`Failed to process ${file}:`, err);
    }
  }

  // Inject into notes_extra_general_studies.js
  const notesPath = 'notes_extra_general_studies.js';
  let notesContent = fs.readFileSync(notesPath, 'utf8');
  
  if (allInsightsHtml) {
    const injection = `\n\nEXPANDED_NOTES_DATA["capf-cse-master-insights"] = \`${allInsightsHtml}\`;\n`;
    fs.appendFileSync(notesPath, injection);
    console.log(`Successfully injected new insights into ${notesPath}`);
  } else {
    console.log("No insights extracted.");
  }
}

main();
