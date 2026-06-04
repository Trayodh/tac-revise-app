const fs = require('fs');

async function testApi(modelName) {
  const apiKey = 'sk_v3bby5fy_DhmPey79kHxLFgrdxBWA0eZ5';
  const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-subscription-key": apiKey
    },
    body: JSON.stringify({
      model: modelName,
      messages: [{ role: "user", content: "Hello" }],
      temperature: 0.3,
      top_p: 0.9,
      max_tokens: 10
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
  await testApi("sarvam-2b");
  await testApi("sarvam-m");
  await testApi("sarvam-30b");
  await testApi("sarvam-105b");
}

main();
