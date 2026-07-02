// fetch is built in
require('dotenv').config();

async function testApi() {
  console.log("Testing API endpoint...");
  const token = process.env.GEMINI_API_KEY;
  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${token}`;
    
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        contents: [{ parts: [{ text: "Hello" }] }]
      })
    });
    console.log("Status:", res.status);
    const data = await res.text();
    console.log("Response:", data.substring(0, 500));
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
testApi();
