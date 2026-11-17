const fs = require('fs');
const pdfParse = require('pdf-parse');

const pdfPath = 'gdrive_downloaded_file';
const outputPath = 'gdrive_extracted_text.txt';

async function extractText() {
  console.log("Reading PDF...");
  const dataBuffer = fs.readFileSync(pdfPath);
  
  console.log("Parsing PDF...");
  try {
    const parser = new pdfParse.PDFParse({ data: new Uint8Array(dataBuffer) });
    await parser.load();
    const pdfRes = await parser.getText();
    const extractedText = pdfRes.text;
    console.log(`Parsed PDF.`);
    console.log(`Extracted text length: ${extractedText.length} characters.`);
    fs.writeFileSync(outputPath, extractedText);
    console.log("Text successfully saved to", outputPath);
  } catch (err) {
    console.error("Error parsing PDF:", err);
  }
}

extractText();
