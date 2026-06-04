const fs = require('fs');
const path = require('path');

const PROXY_URL = 'http://localhost:4000/api/gemini';

// Helper to wait
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function callGemini(prompt) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const response = await fetch(PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gemini-2.5-flash',
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.1,
            response_mime_type: 'application/json'
          }
        })
      });
      
      if (response.ok) {
        const resData = await response.json();
        if (resData.candidates && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
          let text = resData.candidates[0].content.parts[0].text.trim();
          // Clean up potential markdown wrappers
          if (text.startsWith('```json')) text = text.substring(7);
          if (text.startsWith('```')) text = text.substring(3);
          if (text.endsWith('```')) text = text.substring(0, text.length - 3);
          return JSON.parse(text.trim());
        }
      } else {
        console.error(`Gemini API returned status ${response.status}. Retrying...`);
        const text = await response.text();
        console.error(text);
      }
    } catch (e) {
      console.error(`Attempt ${attempt} failed:`, e);
    }
    await delay(5000);
  }
  return null;
}

async function main() {
  const structurePath = path.join(__dirname, 'subjects_structure.json');
  if (!fs.existsSync(structurePath)) {
    console.error("subjects_structure.json not found! Run list_subjects.js first.");
    return;
  }
  
  const structure = JSON.parse(fs.readFileSync(structurePath, 'utf8'));
  const syllabusData = {};
  
  for (const [subjectId, subject] of Object.entries(structure)) {
    console.log(`Processing subject: ${subject.title} (${subjectId})...`);
    
    const prompt = `You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT).
We are compiling a detailed database of the official UPSC CDS, NDA, and AFCAT syllabuses.
For the subject "${subject.title}", here are the chapters and topics:
${JSON.stringify(subject.chapters, null, 2)}

Provide a JSON object mapping each topic ID to its official UPSC CDS/NDA/AFCAT detailed syllabus guidelines.
For each topic, provide a highly detailed description of:
1. The exact sub-topics, mathematical derivations, laws, and principles required.
2. The standard of the topic (e.g. Class 10th level, Class 12th level, or Graduation level).
3. The specific exam where it is asked (e.g. NDA, CDS, AFCAT, or all).
4. Key concepts and terms that are frequently tested.

Your response must be a single JSON object where the keys are the topic IDs (e.g. "trig-identities", "quadratic-eq", etc.) and the values are detailed strings containing the comprehensive syllabus details. Do not output anything other than the JSON object.`;

    const result = await callGemini(prompt);
    if (result) {
      console.log(`Successfully compiled syllabus details for ${subjectId}`);
      Object.assign(syllabusData, result);
    } else {
      console.error(`Failed to compile syllabus details for ${subjectId}`);
    }
    
    // Add baseline delay between subject queries
    await delay(3000);
  }
  
  // Save as JSON
  fs.writeFileSync('syllabus_data.json', JSON.stringify(syllabusData, null, 2));
  console.log("Saved syllabus_data.json");
  
  // Save as JS file
  const jsContent = `// Official UPSC CDS/NDA/AFCAT Detailed Syllabus Context Map
window.OFFICIAL_SYLLABUS_DATA = ${JSON.stringify(syllabusData, null, 2)};
`;
  fs.writeFileSync('syllabus_data.js', jsContent);
  console.log("Saved syllabus_data.js");
}

main();
