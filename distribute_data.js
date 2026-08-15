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

        // Append to biology-cell
        content = content.replace(
            /("id":\s*"biology-cell",\s*"title":\s*"(?:[^"]+)",\s*"notes":\s*")([^"]+)("\s*})/g,
            (match, p1, p2, p3) => p1 + p2 + "<br><h2>Important Comparisons</h2>" + biologyHtml.replace(/"/g, '\\"') + p3
        );

        // Append to chemistry-substances
        content = content.replace(
            /("id":\s*"chemistry-substances",\s*"title":\s*"(?:[^"]+)",\s*"notes":\s*")([^"]+)("\s*})/g,
            (match, p1, p2, p3) => p1 + p2 + "<br><h2>Important Comparisons</h2>" + chemistryHtml.replace(/"/g, '\\"') + p3
        );

        // Append to physics-optics (since mirrors are there)
        content = content.replace(
            /("id":\s*"physics-optics",\s*"title":\s*"(?:[^"]+)",\s*"notes":\s*")([^"]+)("\s*})/g,
            (match, p1, p2, p3) => p1 + p2 + "<br><h2>Important Comparisons</h2>" + physicsHtml.replace(/"/g, '\\"') + p3
        );

        // Append to physical-geography
        content = content.replace(
            /("id":\s*"physical-geography",\s*"title":\s*"(?:[^"]+)",\s*"notes":\s*")([^"]+)("\s*})/g,
            (match, p1, p2, p3) => p1 + p2 + "<br><h2>Important Comparisons</h2>" + geographyHtml.replace(/"/g, '\\"') + p3
        );
        
        // Remove science_tabular_comparisons if it accidentally got injected before
        const removeRegex = /,\s*\{\s*"id":\s*"science_tabular_comparisons"[\s\S]*?\}/g;
        content = content.replace(removeRegex, '');

        fs.writeFileSync('notes_data_exam_focused.js', content, 'utf8');
        console.log("Successfully distributed comparisons!");
    } catch (e) {
        console.error("Error:", e);
    }
}

distributeComparisons();
