require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  const filePath = 'pathfinder_chunks/General_Studies/chunk_055.pdf';
  console.log(`Uploading ${filePath} to Gemini...`);
  
  const uploadResult = await ai.files.upload({
      file: filePath,
      mimeType: 'application/pdf',
  });
  
  console.log("File uploaded successfully. URI:", uploadResult.uri);
  console.log("Waiting 10 seconds for the file to be processed by Google...");
  await new Promise(resolve => setTimeout(resolve, 10000));
  
  console.log("Extracting text...");
  const prompt = `Extract all the text from this PDF exactly as it appears. Preserve the formatting as much as possible. Do not include any conversational filler, markdown formatting (like \`\`\`text), or comments. Output ONLY the raw extracted text.`;
  
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            {
                role: 'user',
                parts: [
                    { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
                    { text: prompt }
                ]
            }
        ],
        config: {
            temperature: 0.1
        }
    });

    console.log("--- Extracted Text ---");
    console.log(response.text.substring(0, 500) + '...');
    
  } catch (err) {
    console.error("Failed to generate content:", err);
  }
}

main();
