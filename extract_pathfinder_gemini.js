require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  console.log("Uploading Pathfinder PDF to Gemini...");
  const uploadResult = await ai.files.upload({
      file: 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf',
      mimeType: 'application/pdf',
  });
  
  console.log("File uploaded successfully. URI:", uploadResult.uri);
  console.log("Waiting 30 seconds for the file to be processed by Google...");
  await new Promise(resolve => setTimeout(resolve, 30000)); // wait for processing

  console.log("Extracting high-quality PYQs...");
  
  const prompt = `You are an expert UPSC defence exams (NDA/CDS) content creator. 
I have provided the Arihant Pathfinder for CDS. Your task is to extract exactly 40 high-quality, actual Previous Year Questions (PYQs) or practice questions from the History and Geography sections of this book.

Please extract questions that are rigorous and statement-based (e.g., "Consider the following statements..."). Do not extract simple one-liners.

Output MUST be a raw JSON array of objects with this exact structure:
[
  {
    "question": "The question text, including the statements.",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 0, // index of correct option (0-3)
    "explanation": "Topic: History / Geography",
    "topicId": "history" // or 'geography'
  }
]
Output ONLY raw JSON. No markdown backticks, no explanations.`;

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
            temperature: 0.2
        }
    });

    let rawText = response.text;
    if (rawText.startsWith('```json')) {
      rawText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');
    }
    
    fs.writeFileSync('extracted_pyqs.json', rawText, 'utf8');
    console.log("Successfully extracted and saved questions to extracted_pyqs.json");
    
  } catch (err) {
    console.error("Failed to generate content:", err);
  }
}

main();
