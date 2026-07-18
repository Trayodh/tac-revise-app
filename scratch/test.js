const reqBody = {
  model: 'gemini-2.5-flash',
  contents: [{ parts: [{ text: 'You are Dronacharya. Provide a comprehensive explanation for: "Algebra" at level "L3". The surrounding text is "basic algebra". Return strictly the raw JSON without code block wrappers.' }] }],
  generationConfig: { response_mime_type: 'application/json', temperature: 0.1 }
};
fetch('http://localhost:4000/api/gemini', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(reqBody)
}).then(res => res.text()).then(console.log).catch(console.error);
