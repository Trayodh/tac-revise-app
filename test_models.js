require('dotenv').config();

async function listModels() {
  console.log("Cerebras models:");
  const cRes = await fetch('https://api.cerebras.ai/v1/models', {
    headers: { 'Authorization': `Bearer ${process.env.CEREBRAS_API_KEY}` }
  });
  console.log(await cRes.text());

  console.log("Groq models:");
  const gRes = await fetch('https://api.groq.com/openai/v1/models', {
    headers: { 'Authorization': `Bearer ${process.env.GROQ_API_KEY}` }
  });
  console.log(await gRes.text());
}

listModels();
