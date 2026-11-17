const fs = require('fs');

async function fillThemes() {
  let content = fs.readFileSync('ca_data.js', 'utf8');
  
  // Extract all dates that have theme: null
  const regex = /\{ date: "(.*?)",\s*name: "(.*?)",\s*theme: null/g;
  let match;
  const missingThemes = [];
  while ((match = regex.exec(content)) !== null) {
    missingThemes.push(`${match[1]} - ${match[2]}`);
  }
  
  console.log(`Found ${missingThemes.length} dates missing themes.`);
  
  const prompt = `You are a UPSC and Defence Exams Current Affairs expert. 
I have a list of important days and dates. For each of them, provide the officially declared theme for the year 2026 (or the most recently announced theme for 2025/2024 if 2026 is not yet available).

List of dates:
${missingThemes.join('\n')}

Respond ONLY with a valid JSON object where the keys are the exact date strings (e.g., "Jan 9") and the values are the theme strings. Do not include markdown formatting or \`\`\`json blocks.`;

  try {
    const res = await fetch('http://localhost:4000/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gemini-2.5-flash',
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.1 }
      })
    });
    
    const data = await res.json();
    let text = data.candidates[0].content.parts[0].text;
    text = text.replace(/^```json\s*/, '').replace(/\s*```$/, '').trim();
    
    const themes = JSON.parse(text);
    console.log("Received themes:", themes);
    
    // Replace in file
    let updatedContent = content;
    for (const [date, theme] of Object.entries(themes)) {
      if (theme && theme !== "null" && theme !== "None" && theme !== "") {
        const replaceRegex = new RegExp(`(\\{ date: "${date}",\\s*name: "[^"]+",\\s*theme: )null`);
        updatedContent = updatedContent.replace(replaceRegex, `$1"\\"${theme}\\""`);
      }
    }
    
    fs.writeFileSync('ca_data.js', updatedContent);
    console.log("ca_data.js updated successfully.");
    
  } catch (err) {
    console.error("Error:", err);
  }
}

fillThemes();
