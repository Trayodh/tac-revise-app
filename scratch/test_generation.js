require('dotenv').config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function testGeneration() {
  const prompt = `Generate 40 unique, high-quality multiple-choice questions for UPSC NDA Mathematics based on actual previous year papers (PYQs) from 2018-2025.
Format the output strictly as a JSON array of objects. Do not include markdown code block formatting (no \`\`\`json). Just the raw JSON array.
Each object must have exactly these keys:
- "question": string
- "options": array of 4 strings
- "correct": number (index of correct option 0-3)
- "explanation": string (step-by-step mathematical explanation)

The questions must cover various topics like Trigonometry, Complex Numbers, Matrices, and Calculus. Ensure the difficulty matches the actual NDA exam. Make sure all questions are unique.`;

  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${GEMINI_API_KEY}`;
  
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  console.log("Waiting 20 seconds to clear rate limits...");
  await new Promise(r => setTimeout(r, 20000));

  console.log("Sending request to Gemini...");
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
