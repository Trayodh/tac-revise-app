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

async function augmentNotes() {
    try {
        const chiefsPrompt = `
Generate an HTML string (just the inner HTML, no <html> or <body> tags) that contains:
<h2>Commanders-in-Chief & Chiefs of Staff</h2>
<p>The timeline of all military chiefs from 1947 to 2024.</p>
<div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;">
<strong>💡 Fun Fact time!</strong><br>
The first Indian Commander-in-Chief of the Indian Army was Field Marshal K. M. Cariappa, who took over from Sir Francis Roy Bucher on 15 January 1949. This day is celebrated as Army Day!
</div>
Then, create 3 detailed HTML tables:
1. All Chiefs of Army Staff of India from 1947 to present (including Gen Upendra Dwivedi). Table columns: S.No, Name, Tenure.
2. All Chiefs of Naval Staff of India from 1947 to present (including Adm Dinesh K Tripathi). Table columns: S.No, Name, Tenure.
3. All Chiefs of Air Staff of India from 1947 to present (including ACM Amar Preet Singh). Table columns: S.No, Name, Tenure.
Format tables elegantly with inline styles (border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;").
Ensure you list EVERY SINGLE chief, do not skip or summarize.
`;
        const chiefsHtml = await getHtmlFromAI(chiefsPrompt);
        console.log("Generated Chiefs HTML");

        const branchesPrompt = `
Generate an HTML string containing dedicated sections for the Indian Army, Indian Navy, Indian Air Force, and Indian Coast Guard.
For each, include:
- Brief History & Motto
- Commands (with headquarters locations)
- Combat Arms / Branches
- Key Equipment (Aircraft, Tanks, Ships, Submarines)
Include at least two <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" about equipment or history.
`;
        const branchesHtml = await getHtmlFromAI(branchesPrompt);
        console.log("Generated Branches HTML");

        const agenciesPrompt = `
Generate an HTML string covering Allied Defence & Intelligence Agencies and Paramilitary/CAPF:
- Intelligence Agencies: RAW, IB, NTRO, DIA.
- Specialized Organizations: BRO (Border Roads Organisation), ISRO (Defence applications).
- CAPF (Central Armed Police Forces): CRPF, BSF, ITBP, CISF, SSB, Assam Rifles, NSG.
Describe their mandate, who they report to (e.g. CAPF to MHA, not MoD), and brief history.
Include a <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" about one of these agencies.
`;
        const agenciesHtml = await getHtmlFromAI(agenciesPrompt);
        console.log("Generated Agencies HTML");

        const sciencePrompt = `
Generate an HTML string containing tables comparing key science and geography concepts for exams:
<h2>Important Tabular Comparisons</h2>
<p>Many topics are easily explained by comparison.</p>
Include tables for:
- Biology: Plant vs Animal Cells; Prokaryotic vs Eukaryotic Cells; DNA vs RNA; RBC vs WBC vs Platelets.
- Chemistry: Metals vs Non-Metals; Isotopes vs Isobars vs Isotones; Acids vs Bases.
- Physics: Concave vs Convex mirrors; Scalar vs Vector quantities.
- Geography: Cyclones vs Anti-cyclones; El Nino vs La Nina.
Use inline CSS for tables (border="1" style="width:100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;").
Include a <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px;"> with "💡 Fun Fact time!" somewhere.
`;
        const scienceHtml = await getHtmlFromAI(sciencePrompt);
        console.log("Generated Science HTML");

        let content = fs.readFileSync('notes_data_exam_focused.js', 'utf8');

        const newMilitary = `  "military_aptitude": {
    "title": "Military Aptitude",
    "icon": "fas fa-fighter-jet",
    "chapters": [
      {
        "chapterTitle": "Military Knowledge",
        "topics": [
          {
            "id": "military_chiefs_timeline",
            "title": "Chiefs Timeline (Army, Navy, Air Force)",
            "notes": ${JSON.stringify(chiefsHtml)}
          },
          {
            "id": "military_dedicated_branches",
            "title": "Dedicated Branches (Army, Navy, IAF, ICG)",
            "notes": ${JSON.stringify(branchesHtml)}
          },
          {
            "id": "military_allied_agencies",
            "title": "Allied Agencies (Intelligence, BRO, ISRO, CAPF)",
            "notes": ${JSON.stringify(agenciesHtml)}
          }
        ]
      }
    ]
  },`;

        // Replace old military_aptitude
        const patternMilitary = /  "military_aptitude":\s*\{[\s\S]*?(?=\n  "[a-zA-Z_0-9]+":\s*\{|\n\};\s*$)/;
        content = content.replace(patternMilitary, newMilitary);

        const newScienceTopic = `          },
          {
            "id": "science_tabular_comparisons",
            "title": "Important Tabular Comparisons",
            "notes": ${JSON.stringify(scienceHtml)}
          }`;
        
        // Append science comparisons
        content = content.replace(
            /"title": "Scientific Discoveries & Instruments",\n\s*"notes": "<p>Loading\.\.\.<\/p>"\n\s*}/, 
            `"title": "Scientific Discoveries & Instruments",\n            "notes": "<p>Loading...</p>"\n          }` + newScienceTopic
        );

        fs.writeFileSync('notes_data_exam_focused.js', content, 'utf8');
        console.log("Successfully augmented notes data!");
    } catch (e) {
        console.error("Error:", e);
    }
}

augmentNotes();
