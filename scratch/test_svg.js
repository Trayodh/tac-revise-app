const fs = require('fs');
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;

async function testSVG() {
  const prompt = `You are an expert scientific illustrator. Create a simple, clean, accurate SVG diagram for the biology topic: "Cell Structure (Animal Cell)". 
  Use standard SVG elements (rect, circle, path, text, etc.). 
  Keep the design modern, use solid flat colors.
  Include clear text labels pointing to organelles (nucleus, mitochondria, cell membrane, cytoplasm).
  Return ONLY the raw <svg>...</svg> code, without any markdown formatting or explanation. Ensure it's a valid SVG string.`;

  console.log('Fetching...');
  const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${CEREBRAS_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-oss-120b',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.1
    })
  });

  const data = await response.json();
  if (data.choices && data.choices[0]) {
    let svg = data.choices[0].message.content.trim();
    if (svg.startsWith('```')) {
      svg = svg.replace(/```(svg|xml)?\n?/i, '').replace(/```$/i, '').trim();
    }
    fs.writeFileSync('test_cell.svg', svg);
    console.log('Saved test_cell.svg');
  } else {
    console.log(data);
  }
}

testSVG();
