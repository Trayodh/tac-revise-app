const fs = require('fs');
const path = require('path');

const PROXY_URL = 'http://localhost:4000/api/gemini';
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
          if (text.startsWith('```json')) text = text.substring(7);
          if (text.startsWith('```')) text = text.substring(3);
          if (text.endsWith('```')) text = text.substring(0, text.length - 3);
          return JSON.parse(text.trim());
        }
      } else {
        console.error(`Gemini API returned status ${response.status}. Retrying...`);
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
    console.error("subjects_structure.json not found!");
    return;
  }
  
  const structure = JSON.parse(fs.readFileSync(structurePath, 'utf8'));
  const pyqData = {};
  
  for (const [subjectId, subject] of Object.entries(structure)) {
    console.log(`Processing PYQ trends for subject: ${subject.title} (${subjectId})...`);
    
    const prompt = `You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT).
We are compiling a detailed database of actual exam questions and testing trends from the last 7 years (2020 to 2026), including the latest exams held in April 2026 (NDA I 2026, CDS I 2026, and AFCAT I 2026).
For the subject "${subject.title}", here are the chapters and topics:
${JSON.stringify(subject.chapters, null, 2)}

Provide a JSON object mapping each topic ID to its actual exam questions, question types, numerical patterns, and conceptual depth from the last 7 years (2020-2026) of UPSC CDS, NDA, and AFCAT, including the 2026 exam cycle.
Specifically incorporate the latest 2026 paper trends:
- If the subject is Polity, highlight questions on the Supreme Court (Article 124), Panchayati Raj (Article 243), the National Commission for Backward Classes (NCBC) (Article 338B), Governor powers, and Amendment procedures (Article 368).
- If the subject is Mathematics, highlight advanced geometry, trigonometry, matrices & determinants (with 8-9 questions tested in 2026), quadratic equations (5-6 questions), and 3D geometry (4-5 questions).
- If the subject is English, highlight specific tested idioms like "Nuts and Bolts", "Hat in Hand", "Straight from the horse's mouth", and advanced synonym/antonym patterns.
- If the subject is GK/Science, highlight optics (ray diagrams, mirrors/lenses), heat (thermodynamics and expansion), mechanics, atomic structure, and biology cell/tissue structures.

Be specific—mention actual formulas, articles, historical events, chemical properties, and exceptions tested.
The trends description must explicitly refer to the years 2020-2026 (e.g. "Trends (2020-2026)").
Your response must be a single JSON object where the keys are the topic IDs (e.g. "trig-identities", "quadratic-eq", etc.) and the values are detailed strings containing the comprehensive exam questions and trends. Do not output anything other than the JSON object.`;

    const result = await callGemini(prompt);
    if (result) {
      console.log(`Successfully compiled PYQ details for ${subjectId}`);
      Object.assign(pyqData, result);
    } else {
      console.error(`Failed to compile PYQ details for ${subjectId}`);
    }
    
    await delay(3000);
  }
  
  // Save as JSON
  fs.writeFileSync('pyq_trends.json', JSON.stringify(pyqData, null, 2));
  console.log("Saved pyq_trends.json");
  
  // Save as JS file
  const jsContent = `// Last 6 Years UPSC CDS/NDA/AFCAT Actual Exam Questions & Trends Database
window.PYQ_TRENDS_DATA = ${JSON.stringify(pyqData, null, 2)};
`;
  fs.writeFileSync('pyq_trends.js', jsContent);
  console.log("Saved pyq_trends.js");
}

main();
