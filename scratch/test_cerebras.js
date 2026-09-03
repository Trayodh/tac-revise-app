require('dotenv').config();
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;

async function test(modelName) {
  const res = await fetch(`https://api.cerebras.ai/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${CEREBRAS_API_KEY}` },
    body: JSON.stringify({ model: modelName, messages: [{ role: "user", content: "Hi" }] })
  });
  const data = await res.json();
  console.log(`Model: ${modelName} -> ${res.status}`, data);
}

test("llama3.1-70b");
test("llama3.1-8b");
test("llama3-70b-8192");
test("llama-3.1-70b");
test("llama-3.1-8b");
