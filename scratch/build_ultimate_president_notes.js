const fs = require('fs');
const PROXY_URL = 'http://localhost:4000/api/gemini';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  console.log("Generating ultimate notes for President of India using gemini-2.5-flash...");
  
  const prompt = `You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT).
Generate the ultimate, most exhaustive, and detailed study notes on "The President of India" under the chapter "Union Government" in "Indian Polity".
This note must be incredibly thorough and comprehensive so that ALL details relating to the post are visible on the page, with NO omissions whatsoever.

The notes must be formatted in clean, raw HTML starting with:
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 25px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> The President of India (Art 52-62, 72, 123, 143)
  </h3>

And then must include:
1. Executive Nature: Head of State, First Citizen, De Jure executive vs De Facto PM, Article 52.
2. Election of the President (Articles 54 & 55): Detailed Electoral College (who participates, who is excluded - nominated members, legislative council members). Manner of election: Proportional Representation by means of Single Transferable Vote, Secret Ballot. Formula for value of vote of an MLA and MP.
3. Qualifications & Conditions of Office (Articles 58 & 59): Citizenship, minimum age of 35, Lok Sabha eligibility, no office of profit. Oath administered by CJI (Article 60).
4. Impeachment Procedure (Article 61): Step-by-step process. Charge initiation in either house, 14-day notice, signed by 1/4th of that house, passed by 2/3rd of the TOTAL membership of the house. Investigation by other house, passed by 2/3rd of the TOTAL membership of the other house. Note who participates (nominated members DO participate, state MLAs DO NOT participate).
5. Comprehensive Powers of the President:
   - Executive Powers: Appointments (PM, Ministers, Governors, AG, CAG, ECs, UPSC), administration of UTs.
   - Legislative Powers: Summoning/proroguing, dissolving Lok Sabha, joint sitting (Art 108), nominations (12 to RS), assent to bills, Ordinance-promulgation power (Art 123 - maximum duration 6 months & 6 weeks, conditions).
   - Financial Powers: Money bills recommendation, Annual Financial Statement (Art 112), Contingency Fund control, Finance Commission appointment.
   - Judicial Powers: Appoints CJI and SC/HC Judges, pardoning power (Art 72), seeks advice from SC (Art 143).
   - Diplomatic Powers: International treaties, represents India in international forums.
   - Military Powers: Supreme Commander of Armed Forces, appoints chiefs of Army, Navy, Air Force.
   - Emergency Powers: National Emergency (Art 352), President's Rule (Art 356/365), Financial Emergency (Art 360).
6. Detailed Veto Powers: Absolute Veto, Suspensive Veto (not applicable to Money Bills), Pocket Veto (e.g., Zail Singh and Indian Post Office Bill). Comparison with State Amendment Bills.
7. Detailed Pardoning Powers (Article 72): Explain all 5 terms: Pardon, Commutation, Remission, Respite, Reprieve. Contrast with Governor's pardoning powers under Article 161 (Governor cannot pardon death sentences, Governor cannot pardon court-martial sentences).
8. Actual CDS/NDA PYQ Trends (2020-2025): List actual questions and specific areas tested in the last 6 years (e.g. nominated members in impeachment, comparison of pardon powers with Governor, 14-day notice requirement, ordinance duration, etc.).
9. High-Yield Facts & Memory Mnemonics.

Use styled lists, comparison tables, and highlight warnings (using CSS styled divs) to make it visually premium and highly readable. Ensure no markdown formatting surrounds the output (no \`\`\`html or similar).`;

  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const response = await fetch(PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gemini-2.5-flash',
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      
      if (response.ok) {
        const resData = await response.json();
        if (resData.candidates && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
          let notesText = resData.candidates[0].content.parts[0].text.trim();
          if (notesText.startsWith('```html')) notesText = notesText.substring(7);
          if (notesText.startsWith('```')) notesText = notesText.substring(3);
          if (notesText.endsWith('```')) notesText = notesText.substring(0, notesText.length - 3);
          notesText = notesText.trim();
          
          const escapedHtml = notesText.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
          let fileContent = fs.readFileSync('notes_extra_polity.js', 'utf8');
          
          const pattern = /EXPANDED_NOTES_DATA\[["']president["']\]\s*=\s*`[\s\S]*?`\s*;/;
          const replacement = `EXPANDED_NOTES_DATA["president"] = \`\n${escapedHtml}\n\`;`;
          
          if (pattern.test(fileContent)) {
            fileContent = fileContent.replace(pattern, replacement);
            fs.writeFileSync('notes_extra_polity.js', fileContent);
            console.log("Successfully replaced President of India notes in notes_extra_polity.js!");
          } else {
            fileContent += `\n${replacement}\n`;
            fs.writeFileSync('notes_extra_polity.js', fileContent);
            console.log("Appended President of India notes to notes_extra_polity.js!");
          }
          return;
        }
      } else {
        console.error(`Attempt ${attempt} returned status ${response.status}. Retrying...`);
      }
    } catch (e) {
      console.error(`Attempt ${attempt} failed:`, e);
    }
    await delay(5000);
  }
}

main();
