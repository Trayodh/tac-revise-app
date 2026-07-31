const fs = require('fs');
const path = require('path');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const artifactsDir = 'C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\brain\\40775e62-ac16-44ca-b442-e860045b5422';

const images = fs.readdirSync(artifactsDir).filter(f => f.startsWith('media__') && f.endsWith('.png')).map(f => path.join(artifactsDir, f));

async function describeImage(filePath) {
  const base64Image = fs.readFileSync(filePath).toString('base64');
  
  const prompt = `Describe the content of this educational diagram or note. What subject and specific topic does it cover? Give a 2 sentence summary.`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: prompt },
          { inlineData: { mimeType: 'image/png', data: base64Image } }
        ]
      }],
      generationConfig: { temperature: 0.1 }
    })
  });

  const data = await response.json();
  if (data.error) {
    if (data.error.message.includes('Quota exceeded')) {
      console.log('Rate limit hit. Waiting 20 seconds...');
      await new Promise(r => setTimeout(r, 20000));
      return describeImage(filePath); // retry
    }
    throw new Error(data.error.message);
  }
  return data.candidates[0].content.parts[0].text.trim();
}

async function run() {
  for (let img of images) {
    try {
      const desc = await describeImage(img);
      console.log(`\n--- ${path.basename(img)} ---`);
      console.log(desc);
      await new Promise(r => setTimeout(r, 5000)); // 5 second delay
    } catch (e) {
      console.log(`Error on ${img}:`, e.message);
    }
  }
}
run();
