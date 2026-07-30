require('dotenv').config();
const fs = require('fs');

const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;

if (!CEREBRAS_API_KEY) {
  console.error("Missing CEREBRAS_API_KEY in .env");
  process.exit(1);
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateWithCerebras(promptText) {
  const url = `https://api.cerebras.ai/v1/chat/completions`;
  
  let retries = 5;
  while (retries > 0) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CEREBRAS_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-oss-120b",
          messages: [{ role: "user", content: promptText }],
          temperature: 0.2
        })
      });
      
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 429) {
          console.log(`Rate limited! Retrying in 5s...`);
          await sleep(5000);
          retries--;
          continue;
        }
        throw new Error(data.error?.message || JSON.stringify(data));
      }
      
      return data.choices[0].message.content || "";
    } catch (err) {
      console.error(`Fetch error:`, err.message);
      await sleep(5000);
      retries--;
    }
  }
  throw new Error("Failed to generate content after retries.");
}

async function runBatch() {
  global.window = {};
  
  // Use the backup file which is pristine and clean (96KB)
  const historyFilePath = 'notes_extra_history.js.bak';
  if (!fs.existsSync(historyFilePath)) {
      console.error("Backup file not found!");
      return;
  }
  let historyFileContent = fs.readFileSync(historyFilePath, 'utf8');
  
  let allMatches = [...historyFileContent.matchAll(/(?:window\.)?EXPANDED_NOTES_DATA\["([^"]+)"\]\s*=\s*`([\s\S]*?)`;/g)];
  
  const notesData = {};
  allMatches.forEach(match => {
    notesData[match[1]] = match[2];
  });

  const keys = Object.keys(notesData);
  console.log(`Found ${keys.length} chapters to process in History.`);
  
  let newFileOutput = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let htmlContent = notesData[key];
    console.log(`Processing [${i+1}/${keys.length}]: ${key}`);
    
    // Skip already well-done ones from the previous successful manual run
    if (key === "mahajanapadas" || key === "buddhism-jainism" || key === "mauryan-period" || key === "post-mauryan-india" || key === "chalcolithic-age") {
       console.log(` -> Skipping ${key} (already enhanced)`);
       // Note: we should read their content from the current `www/notes_extra_history.js` if they were updated there, 
       // but wait, the .bak might not have the updated versions of those 5.
       // Let's fetch those 5 from the bloated www/notes_extra_history.js instead!
       try {
           const bloatedContent = fs.readFileSync('www/notes_extra_history.js', 'utf8');
           const match = bloatedContent.match(new RegExp(`EXPANDED_NOTES_DATA\\["${key}"\\]\\s*=\\s*\`([\\s\\S]*?)\`;`));
           if (match) {
               htmlContent = match[1];
           }
       } catch (e) {
           console.log('Failed to read bloated file for fallback');
       }
       newFileOutput += `EXPANDED_NOTES_DATA["${key}"] = \`\n${htmlContent}\n\`;\n\n`;
       continue;
    }

    const prompt = `
You are an expert History educator for UPSC and Defence exams.
I have a chapter of history notes in HTML format.

Your ONLY task is to REWRITE and ENHANCE the notes to make them highly detailed, structured, high-yield, and perfectly formatted using standard HTML tags (<h2>, <h3>, <ul>, <table>, <p>, <strong>, etc.). 

CRITICAL INSTRUCTIONS:
1. DO NOT include ANY Multiple Choice Questions, practice questions, quizzes, or Q&A sections.
2. DO NOT output JSON. DO NOT wrap the output in a JSON object.
3. OUTPUT ONLY pure HTML code. 
4. DO NOT use markdown code blocks like \`\`\`html. Just output the raw HTML.
5. Do not use the word "String.raw" anywhere in your output.
6. Make sure the HTML is complete, well-formed, and properly closed.

Here are the notes to enhance:
${htmlContent}
    `;

    try {
      const responseText = await generateWithCerebras(prompt);
      let enhancedHtml = responseText.replace(/^```html/mi, '').replace(/^```/mi, '').replace(/```$/mi, '').trim();
      
      // Basic validation: ensure it's not a JSON string and it's somewhat valid HTML length
      if (enhancedHtml.startsWith('{') || enhancedHtml.length < 50) {
          throw new Error("Invalid output format (looks like JSON or too short).");
      }
      
      // Sanitize backticks to prevent breaking the JS string literal
      enhancedHtml = enhancedHtml.replace(/`/g, '\\`');
      
      console.log(` -> Enhanced successfully.`);
      newFileOutput += `EXPANDED_NOTES_DATA["${key}"] = \`\n${enhancedHtml}\n\`;\n\n`;
    } catch(e) {
      console.error(`Failed to process ${key}: ${e.message}`);
      // Fallback to original
      let safeHtml = htmlContent.replace(/`/g, '\\`');
      newFileOutput += `EXPANDED_NOTES_DATA["${key}"] = \`\n${safeHtml}\n\`;\n\n`;
    }
    
    // Slight sleep to avoid rate limits
    await sleep(1000);
  }

  // Save directly to the www folder
  fs.writeFileSync('www/notes_extra_history.js', newFileOutput);
  console.log("Successfully completely rewritten all History notes and saved to www/notes_extra_history.js");
}

runBatch();
