const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function getHtmlFromAI(prompt) {
    console.log("Generating content...");
    const result = await model.generateContent(prompt);
    let text = result.response.text();
    text = text.replace(/```html/g, '').replace(/```/g, '').trim();
    return text;
}

function injectBeforeClosingQuote(content, id, htmlToInject) {
    const idIndex = content.indexOf(`"id": "${id}"`);
    if (idIndex === -1) {
        console.log("Could not find ID", id);
        return content;
    }

    const notesIndex = content.indexOf('"notes": "', idIndex);
    if (notesIndex === -1) return content;

    let i = notesIndex + '"notes": "'.length;
    let isEscaped = false;
    while (i < content.length) {
        if (content[i] === '\\') {
            isEscaped = !isEscaped;
        } else {
            if (content[i] === '"' && !isEscaped) {
                break; 
            }
            isEscaped = false;
        }
        i++;
    }

    const closingQuoteIndex = i;
    // We must escape quotes for JSON string
    const newHtml = "<br><br><h2>Important Tabular Comparisons</h2>" + htmlToInject.replace(/"/g, '\\"').replace(/\n/g, '');
    
    return content.substring(0, closingQuoteIndex) + newHtml + content.substring(closingQuoteIndex);
}

async function distributeComparisons() {
    try {
        const biologyPrompt = `
Generate an HTML string containing tables comparing key Biology concepts:
Plant vs Animal Cells; Prokaryotic vs Eukaryotic Cells; DNA vs RNA; RBC vs WBC vs Platelets.
Use inline CSS for tables (border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;").
Include a <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" about one of these biology concepts.
Only return the HTML, no markdown code block formatting.
`;
        const biologyHtml = await getHtmlFromAI(biologyPrompt);

        const chemistryPrompt = `
Generate an HTML string containing tables comparing key Chemistry concepts:
Metals vs Non-Metals; Isotopes vs Isobars vs Isotones; Acids vs Bases.
Use inline CSS for tables (border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;").
Include a <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" about one of these chemistry concepts.
Only return the HTML, no markdown code block formatting.
`;
        const chemistryHtml = await getHtmlFromAI(chemistryPrompt);

        const physicsPrompt = `
Generate an HTML string containing tables comparing key Physics concepts:
Concave vs Convex mirrors; Scalar vs Vector quantities.
Use inline CSS for tables (border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;").
Include a <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" about one of these physics concepts.
Only return the HTML, no markdown code block formatting.
`;
        const physicsHtml = await getHtmlFromAI(physicsPrompt);

        const geographyPrompt = `
Generate an HTML string containing tables comparing key Geography concepts:
Cyclones vs Anti-cyclones; El Nino vs La Nina.
Use inline CSS for tables (border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;").
Include a <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" about one of these geography concepts.
Only return the HTML, no markdown code block formatting.
`;
        const geographyHtml = await getHtmlFromAI(geographyPrompt);

        let content = fs.readFileSync('notes_data_exam_focused.js', 'utf8');

        content = injectBeforeClosingQuote(content, "biology-cell", biologyHtml);
        content = injectBeforeClosingQuote(content, "chemistry-substances", chemistryHtml);
        content = injectBeforeClosingQuote(content, "physics-optics", physicsHtml);
        content = injectBeforeClosingQuote(content, "physical-geography", geographyHtml);
        
        fs.writeFileSync('notes_data_exam_focused.js', content, 'utf8');
        console.log("Successfully distributed comparisons!");
    } catch (e) {
        console.error("Error:", e);
    }
}

distributeComparisons();
