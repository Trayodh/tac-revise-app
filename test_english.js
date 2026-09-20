require('dotenv').config();
const key = process.env.GEMINI_API_KEY;
const topicTitle = "Modifiers: Misplaced & Dangling";
const chapterTitle = "Spotting Errors";
const subjectTitle = "English (NDA/CDS)";
const prompt = `You are Dronacharya, the legendary military guru and Academic Intelligence Engine of an AI-powered NDA, CDS, AFCAT, CAPF, and UPSC Examination Preparation Platform.
  Your task is to provide an EXHAUSTIVE, deep-dive, UPSC-level explanation of the topic "${topicTitle}" from the chapter "${chapterTitle}" in ${subjectTitle}. 
  IMPORTANT: Your entire explanation MUST be exclusively in English. Do not write in Hindi or any other language.
  
  Detailed Notes must not be short summaries. Ensure the output is comprehensive (minimum 1000 words, target 1500-2500 words) so a beginner can understand but an advanced aspirant finds it exam-ready. You MUST include diagrams, pictures, and high-yield concepts!
  
  MANDATORY INTRODUCTORY STRUCTURE:
  You must start your entire response with this exact HTML structure, filling in the dynamic parts:
  <h1 style="color: var(--primary); text-align: center; margin-bottom: 16px;">The ${topicTitle}: [Create a grand, poetic subtitle relevant to the topic] (NDA/CDS/UPSC)</h1>
  <p style="font-style: italic; text-align: center; margin-bottom: 32px; color: var(--text-secondary);">
  "Salutations, my dear aspirants! I am Dronacharya, your Academic Intelligence Engine. Today, we embark on a profound journey into [Topic Focus]. [Add 2-3 sentences of inspiring, military-themed context about why mastering this is essential for an officer]."
  </p>
  
  MANDATORY SECTION STRUCTURE: Organize the rest of the output strictly into these 21 numbered sections:
  1. INTRODUCTION: What it is, why it exists, basic principles, and exam relevance overview.`;

fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + key, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ model: 'gemini-3-flash-preview', contents: [{ parts: [{ text: prompt }] }] })
}).then(r => r.json()).then(res => console.log(JSON.stringify(res, null, 2))).catch(console.error);
