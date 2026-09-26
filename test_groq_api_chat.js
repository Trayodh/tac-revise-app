const fetch = require('node-fetch'); // we can just use native fetch if node > 18
async function test() {
  require('dotenv').config();
  const GEMINI_KEY = process.env.GEMINI_API_KEY || 'dummy'; // Force failure on Gemini?
  
  // Actually let's just test Groq directly exactly like /api/chat does
  const messages = [{ role: 'user', content: 'You are Dronacharya. Output {"test": "data"}' }];
  
  const groqBody = {
      model: 'openai/gpt-oss-120b',
      messages: messages,
      temperature: 0.1,
      max_tokens: 1500
  };
  groqBody.response_format = { type: 'json_object' };
  
  try {
      console.log("Testing Groq...");
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.GROQ_API_KEY || ''}` },
          body: JSON.stringify(groqBody)
      });
      if (res.ok) {
          console.log("Success:", await res.json());
      } else {
          console.error("Groq Error:", res.status, await res.text());
      }
  } catch (e) {
      console.error(e);
  }
}
test();
