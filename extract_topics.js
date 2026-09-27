require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    console.log("Uploading file...");
    const uploadResult = await ai.files.upload({
        file: 'July_CA_Class.pdf',
        mimeType: 'application/pdf',
    });
    
    console.log("File uploaded. Waiting for processing...");
    await new Promise(resolve => setTimeout(resolve, 8000));
    
    console.log("Generating topics...");
    const prompt = `Extract and list all the major Current Affairs topics covered in these slides. Just list the main topics in bullet points. Do not include minor details.`;
    
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

    console.log("\n--- TOPICS ---");
    console.log(response.text);
    
    // Optional cleanup
    try {
        await ai.files.delete({ name: uploadResult.name });
    } catch(e) {}
    
  } catch (err) {
    console.error(`Error:`, err.message);
  }
}

main();
