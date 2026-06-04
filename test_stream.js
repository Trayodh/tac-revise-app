const GEMINI_API_KEY = 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';

async function testStream() {
  const currentModel = 'gemini-3-flash-preview';
  const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:streamGenerateContent?alt=sse&key=${GEMINI_API_KEY}`;
  const requestPayload = { 
    contents: [{ parts: [{ text: "Write a short poem about coding." }] }],
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
    if (!apiResponse.ok) {
      const txt = await apiResponse.text();
      console.log("Error response:", txt);
      return;
    }

    console.log("Piping response body...");
    for await (const chunk of apiResponse.body) {
      console.log("Chunk received:", chunk.toString());
    }
    console.log("Stream ended.");
  } catch (err) {
    console.error("Stream error:", err);
  }
}

testStream();
