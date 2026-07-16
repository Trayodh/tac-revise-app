const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
require('dotenv').config();

async function testImagen() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  try {
    const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: 'A highly detailed geographical map of the Himalayan mountain range high resolution atlas style',
        config: {
            numberOfImages: 1,
            outputMimeType: 'image/jpeg',
            aspectRatio: '16:9'
        }
    });
    
    for (let i = 0; i < response.generatedImages.length; i++) {
        const image = response.generatedImages[i];
        fs.writeFileSync(`test_imagen_${i}.jpg`, Buffer.from(image.image.imageBytes, 'base64'));
        console.log(`Saved test_imagen_${i}.jpg`);
    }
  } catch(e) {
    console.error("Imagen error:", e);
  }
}

testImagen();
