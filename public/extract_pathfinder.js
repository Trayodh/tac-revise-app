const fs = require('fs');
const pdfParse = require('pdf-parse');

const pdfPath = 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf';
const outputPath = 'pathfinder_extracted.txt';

async function extractText() {
  console.log("Reading PDF...");
  const dataBuffer = fs.readFileSync(pdfPath);
  
  console.log("Parsing PDF...");
  try {
    const data = await pdfParse(dataBuffer);
    const extractedText = data.text;
    console.log(`Parsed PDF. Pages: ${data.numpages}`);
    console.log(`Extracted text length: ${extractedText.length} characters.`);
    fs.writeFileSync(outputPath, extractedText);
    console.log("Text successfully saved to", outputPath);
  } catch (err) {
    console.error("Error parsing PDF:", err);
  }
}

extractText();
