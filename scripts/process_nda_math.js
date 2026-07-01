const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
require('dotenv').config();

const PDF_DIR = path.join(__dirname, '..', 'pdf_uploads', 'nda_math');
const DATA_JS_PATH = path.join(__dirname, '..', 'data.js');

const ai = new GoogleGenAI();

const JSON_SCHEMA = {
  type: "array",
  description: "A list of mathematical multiple choice questions extracted from the exam paper.",
  items: {
    type: "object",
    properties: {
      question: {
        type: "string",
        description: "The main question text, including all mathematical formatting and equations (use unicode or clear text representation)."
      },
      options: {
        type: "array",
        description: "Exactly 4 options for the question.",
        items: { type: "string" }
      },
      correct: {
        type: "integer",
        description: "Index of the correct option (0-3). If unknown, default to 0."
      },
      explanation: {
        type: "string",
        description: "Brief explanation or 'Extracted from NDA Paper'."
      },
      topicId: {
        type: "string",
        description: "The topic of this math question (e.g., 'algebra', 'calculus', 'trigonometry', 'statistics')."
      },
      contextBlock: {
        type: "string",
        description: "If this question belongs to a 'paragraph question' (e.g., 'Consider the following for the next 3 items: ...'), put the entire shared context paragraph here. If it is a standalone question, leave this empty."
      },
      requiresContext: {
        type: "boolean",
        description: "Set to true if this question explicitly requires the contextBlock to be solved. Set to false if it is a standalone question."
      }
    },
    required: ["question", "options", "correct", "explanation", "topicId", "contextBlock", "requiresContext"]
  }
};

async function processPdf(filePath, fileName) {
    console.log(`Uploading ${fileName} to Gemini...`);
    const uploadResult = await ai.files.upload({
        file: filePath,
        mimeType: 'application/pdf',
        displayName: fileName
    });
    console.log(`Uploaded! File URI: ${uploadResult.uri}. Extracting questions...`);

    const prompt = `You are a mathematical question extractor for UPSC NDA exams.
Analyze the uploaded PDF of an NDA Mathematics question paper.
Extract EVERY single multiple choice question into the provided JSON array format.

CRITICAL INSTRUCTIONS FOR PARAGRAPH QUESTIONS:
Some questions in UPSC exams are grouped under a shared context (e.g., "Consider the following for the next 3 items"). 
For these questions, you MUST:
1. Extract the shared context and place it in the 'contextBlock' field for EVERY question that relies on it.
2. Set 'requiresContext' to true for these questions.
3. For standalone questions, leave 'contextBlock' empty and set 'requiresContext' to false.

Ensure mathematical symbols (integrals, matrices, limits, trigonometry) are formatted cleanly so they can be read as text or simple markdown. Extract exactly 4 options.`;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: [uploadResult, prompt],
        config: {
            responseMimeType: "application/json",
            responseSchema: JSON_SCHEMA,
            temperature: 0.2
        }
    });

    const rawJson = response.text();
    let questions = JSON.parse(rawJson);

    console.log(`Extracted ${questions.length} raw questions from ${fileName}.`);
    
    // FILTERING LOGIC: Delete paragraph questions if context is missing
    const initialCount = questions.length;
    questions = questions.filter(q => {
        if (q.requiresContext && (!q.contextBlock || q.contextBlock.trim() === '')) {
            console.log(`⚠️ Dropping question due to missing context: "${q.question.substring(0, 50)}..."`);
            return false;
        }
        // If it has context, prepend the context to the question text so it displays correctly
        if (q.requiresContext && q.contextBlock && q.contextBlock.trim() !== '') {
             q.question = `**Context:** ${q.contextBlock}\n\n**Question:** ${q.question}`;
        }
        // Cleanup internal fields
        delete q.contextBlock;
        delete q.requiresContext;
        return true;
    });

    console.log(`Retained ${questions.length} valid questions (Filtered out ${initialCount - questions.length}).`);
    return questions;
}

async function main() {
    if (!fs.existsSync(PDF_DIR)) {
        console.error(`Directory not found: ${PDF_DIR}. Please run download_nda_papers.js first.`);
        return;
    }

    const files = fs.readdirSync(PDF_DIR).filter(f => f.endsWith('.pdf'));
    if (files.length === 0) {
        console.log('No PDFs found in the directory.');
        return;
    }

    let allExtractedQuestions = [];

    for (const file of files) {
        try {
            console.log(`\n--- Processing ${file} ---`);
            const filePath = path.join(PDF_DIR, file);
            const questions = await processPdf(filePath, file);
            allExtractedQuestions.push(...questions);
        } catch (e) {
            console.error(`Error processing ${file}:`, e);
        }
    }

    if (allExtractedQuestions.length > 0) {
        console.log(`\nTotal questions extracted: ${allExtractedQuestions.length}. Injecting into data.js...`);
        
        let dataJsContent = fs.readFileSync(DATA_JS_PATH, 'utf8');
        
        // Find where CBT_EXAMS_DATABASE is defined
        const mockTestId = `nda-math-new-${Date.now()}`;
        const newMockTest = {
            id: mockTestId,
            exam: "NDA",
            subject: "Mathematics",
            title: "NDA Mathematics AI Extracted Papers",
            duration: 150,
            rules: {
                correctMarks: 2.5,
                incorrectMarks: -0.83
            },
            questions: allExtractedQuestions
        };

        const replacementString = `const CBT_EXAMS_DATABASE = [\n  ${JSON.stringify(newMockTest, null, 4)},\n`;
        dataJsContent = dataJsContent.replace('const CBT_EXAMS_DATABASE = [', replacementString);
        
        fs.writeFileSync(DATA_JS_PATH, dataJsContent, 'utf8');
        console.log('✅ Successfully injected new AI-extracted mock test into data.js!');
        
        // --- NEW: EXPORT TO EXCEL ---
        try {
            const xlsx = require('xlsx');
            let excelRows = allExtractedQuestions.map(q => ({
                'Exam': 'NDA',
                'Mock Test Title': 'NDA Mathematics AI Extracted Papers',
                'Topic': q.topicId || '',
                'Question': q.question,
                'Option A': q.options[0],
                'Option B': q.options[1],
                'Option C': q.options[2],
                'Option D': q.options[3],
                'Correct Option (0-3)': q.correct,
                'Explanation': q.explanation || ''
            }));
            const worksheet = xlsx.utils.json_to_sheet(excelRows);
            const workbook = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(workbook, worksheet, "NDA Math Extract");
            const excelPath = path.join(__dirname, '..', 'pdf_uploads', 'nda_math_extracted.xlsx');
            xlsx.writeFile(workbook, excelPath);
            console.log(`✅ Also exported the questions to Excel at: ${excelPath}`);
        } catch (e) {
            console.error('Failed to export to Excel (is xlsx installed?):', e.message);
        }

        console.log('Run `node build_www.js` to deploy the changes to the app.');
    }
}

main().catch(console.error);
