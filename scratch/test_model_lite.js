require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;

async function checkModel() {
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: "Hello" }] }]
  };
  try {
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const txt = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Response: ${txt}`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
}

checkModel();
