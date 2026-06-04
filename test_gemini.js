const fs = require('fs');

async function testGemini(modelName) {
  const apiKey = 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: "Hello" }] }]
    })
  });
  
  if (!response.ok) {
    const txt = await response.text();
    console.log(`Model ${modelName} failed with ${response.status}: ${txt}`);
  } else {
    console.log(`Model ${modelName} succeeded!`);
  }
}

async function main() {
  await testGemini("gemini-2.5-flash");
  await testGemini("gemini-flash-latest");
  await testGemini("gemini-pro-latest");
  await testGemini("gemini-3.5-flash");
  await testGemini("gemma-4-31b-it");
}

main();
