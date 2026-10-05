const fs = require('fs');
async function test() {
  const promptStr = `You are a Graphic Designer and Military Educator. The user wants a 'Cheat Sheet' for the topic: 'All IAF Helicopters'. Generate a standalone HTML output that represents a highly visual, printable 'Graphic Cheat Sheet'. STRICT RULES: 1. ONLY return raw HTML. Do not wrap it in markdown code blocks. 2. The entire cheat sheet should be wrapped in a <div class='printable-cheat-sheet' style='max-width: 100%; overflow-wrap: break-word;'>. 3. CRITICAL: Define all CSS classes in a <style> block at the top instead of repeating inline styles on every element. This saves tokens. Ensure it is mobile-responsive by using flex-wrap where necessary. 4. The theme MUST be Dark Mode (light text on dark backgrounds) matching a sleek, modern cyber/military aesthetic. 5. Use CSS Grid or Flexbox to organize the data into distinct, colorful 'boxes' or 'cards'. 6. BE EXHAUSTIVE AND COMPREHENSIVE. Do NOT omit any important formulas, dates, or facts. Provide a complete reference. You MUST ALWAYS list EVERY SINGLE item in the requested category. NEVER summarize or sample just a few (like 3 or 6). CRITICAL: NEVER use placeholders like '<!-- list continues -->' or '...'. You must output the actual complete HTML code and data for ALL items. 7. NEVER use HTML character entities for mathematical formatting. Always use actual LaTeX math syntax. 8. CRITICAL FACTUAL ACCURACY: You are a military educator. Do not invent dates or armaments. Use 100% accurate, standard known facts. If you do not know a specific detail, omit the field rather than hallucinating. 9. Make the typography clear, legible, and structured for A4 paper. Include a large Title at the top.`;
  
  const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + (process.env.GROQ_API_KEY || 'YOUR_API_KEY') },
      body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          max_tokens: 8000,
          messages: [{ role: 'user', content: promptStr }]
      })
  });
  const data = await groqRes.json();
  fs.writeFileSync('output5.html', data.choices[0].message.content);
  console.log('Done. output5.html created');
}
test();
