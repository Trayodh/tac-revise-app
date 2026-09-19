require('dotenv').config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

async function testSearchGrounding() {
  const currentModel = 'gemini-3-flash-preview';
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${GEMINI_API_KEY}`;
  const requestPayload = { 
    contents: [{ parts: [{ text: "What are the 3 most recent defence current affairs updates for India in 2026? Provide precise details about signings, military exercises, or acquisitions." }] }],
    tools: [
      {
        googleSearch: {}
      }
    ],
    generationConfig: {
      temperature: 0.1
    }
  };

  try {
    console.log("Sending request to:", targetUrl);
    const apiResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestPayload)
    });

    console.log("Status:", apiResponse.status);
    const data = await apiResponse.json();
    if (!apiResponse.ok) {
      console.log("Error response:", JSON.stringify(data));
      return;
    }

    if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts[0]) {
      console.log("AI Response:\n", data.candidates[0].content.parts[0].text);
      if (data.candidates[0].groundingMetadata) {
        console.log("\nGrounding Metadata found!");
        console.log("Search entry point:", JSON.stringify(data.candidates[0].groundingMetadata.webSearchQueries));
      } else {
        console.log("\nNo Grounding Metadata found.");
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

testSearchGrounding();
