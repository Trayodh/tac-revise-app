const fs = require('fs');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const path = require('path');
require('dotenv').config();

let key = process.env.GEMINI_API_KEY;
if (!key) {
  const serverJs = fs.readFileSync('server.js', 'utf8');
  const match = serverJs.match(/process\.env\.GEMINI_API_KEY\s*\|\|\s*['"]([^'"]+)['"]/);
  if (match) key = match[1];
}

async function run() {
  const genAI = new GoogleGenerativeAI(key);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' });
  
  for (let i = 1; i <= 7; i++) {
    const file = path.join('temp_images_clean', 'geo_' + i + '.png');
    if (!fs.existsSync(file)) continue;
    
    const imagePart = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(file)).toString('base64'),
        mimeType: 'image/png'
      },
    };
    
    try {
      const result = await model.generateContent([
        'What geography concept is depicted in this image? Just give a very short 1 sentence description like "Structure of atmosphere" or "Ocean Currents".',
        imagePart,
      ]);
      console.log('geo_' + i + '.png : ' + result.response.text().trim());
    } catch(e) {
      console.error('Error on geo_' + i + ':', e.message);
    }
  }
}
run();
