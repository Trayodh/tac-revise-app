require('dotenv').config();
const fs = require('fs');
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;

async function testCerebras() {
  const url = `https://api.cerebras.ai/v1/chat/completions`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CEREBRAS_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-oss-120b",
      messages: [{ role: "user", content: "Say hello!" }],
    })
  });
  
  const data = await res.json();
  console.log(data);
}

testCerebras();
