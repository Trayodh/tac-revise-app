require('dotenv').config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function testGeneration() {
  const prompt = `Generate 50 unique, high-quality multiple-choice questions for UPSC NDA Mathematics based on actual previous year papers (PYQs) from 2018-2025.
Format the output strictly as a JSON array of objects. Do not include markdown code block formatting (no \`\`\`json). Just the raw JSON array.
Each object must have exactly these keys:
- "question": string
- "options": array of 4 strings
- "correct": number (index of correct option 0-3)
- "explanation": string (step-by-step mathematical explanation)

Ensure all questions are unique, professional, and match the official UPSC syllabus.`;

  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${GEMINI_API_KEY}`;
  
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  console.log("Sending request to Gemini (gemini-3.1-flash-lite)...");
  const start = Date.now();
  try {
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    console.log("Response status:", res.status);
    const text = await res.text();
    const duration = (Date.now() - start) / 1000;
    console.log(`Request took ${duration}s.`);
    
    if (res.ok) {
      const parsed = JSON.parse(text);
      const candidates = parsed.candidates || [];
      if (candidates.length > 0 && candidates[0].content && candidates[0].content.parts.length > 0) {
        const jsonText = candidates[0].content.parts[0].text;
        const questions = JSON.parse(jsonText);
        console.log(`Successfully generated ${questions.length} questions.`);
        console.log("First question:", JSON.stringify(questions[0], null, 2));
      } else {
        console.log("No candidates/content returned.");
      }
    } else {
      console.error("Error response:", text);
    }
  } catch (e) {
    console.error("Error during fetch:", e);
  }
}

testGeneration();
