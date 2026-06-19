require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;

async function listModels() {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
  
  if (!response.ok) {
    const txt = await response.text();
    console.log(`listModels failed with ${response.status}: ${txt}`);
  } else {
    const data = await response.json();
    console.log("Available models:");
    data.models.forEach(m => console.log(m.name));
  }
}

listModels();
