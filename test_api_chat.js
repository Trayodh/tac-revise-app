async function test() {
  const prompt = `You are Dronacharya, the legendary expert tutor for Indian Defence Examinations.
Provide a comprehensive context-aware explanation for: "Durand Cup" at explanation level: "L3".
The surrounding context text where this term was clicked is: "Football: Durand Cup (Asia's oldest tournament". Correctly disambiguate the term if it has multiple meanings (e.g. "cell" in biology vs military vs technology).

Generate your response as a valid JSON object matching this schema exactly:
{
  "quickDefinition": "<One clear sentence definition>",
  "detailedExplanation": "<Detailed breakdown of the concept based on the level. Provide rich diagrams or structural points.>",
  "whyItMatters": "<Practical and national/military significance of this concept>",
  "examRelevance": {
    "NDA": "High/Medium/Low",
    "CDS": "High/Medium/Low",
    "AFCAT": "High/Medium/Low",
    "UPSC": "High/Medium/Low",
    "analysis": "<Specific analysis of topics tested in exams for this concept>"
  },
  "pyqs": [
    {
      "exam": "<Exam name e.g., CDS II 2024>",
      "question": "<UPSC/Defence PYQ or premium simulated high-yield question>",
      "options": ["<Option A>", "<Option B>", "<Option C>", "<Option D>"],
      "correctIndex": 0,
      "explanation": "<Explanation of why the option is correct>"
    }
  ],
  "realWorldApplications": ["<Real-world application 1>", "<Real-world application 2>"],
  "memoryTricks": ["<Mnemonic, shortcut or memory trick to remember key facts>"],
  "commonMistakes": ["<Common mistake or conceptual gap related to this topic>"],
  "visualExplanation": "<Structured ASCII, SVG, or Mermaid diagram representing the concept structure. ALWAYS use mermaid code blocks for complex hierarchies, processes, or visual representations. Use newline \\n characters.>",
  "practiceQuestions": [
    {
      "question": "<Interactive practice question>",
      "options": ["<Option A>", "<Option B>", "<Option C>", "<Option D>"],
      "correctIndex": 1,
      "explanation": "<Detailed feedback explanation>"
    }
  ],
  "flashcards": [
    {
      "front": "<Recall card front>",
      "back": "<Recall card back>"
    }
  ],
  "relations": {
    "parent": ["<Parent Concept 1>", "<Parent Concept 2>"],
    "child": ["<Subtopic 1>", "<Subtopic 2>"],
    "sibling": ["<Related Sibling Concept 1>", "<Sibling 2>"],
    "confused": ["<Frequently Confused Concept>"],
    "opposite": ["<Contrasting or Opposite Concept>"]
  }
}
Keep language strictly formal, highly authoritative, and emoji-free. Return strictly the raw JSON without code block wrappers.`;

  const payload = {
    targetAI: 'gemini',
    model: 'gemini-3.1-pro',
    messages: [{ role: 'user', content: prompt }],
    isJsonRequired: true,
    temperature: 0.1
  };
  
  const http = require('http');
  const req = http.request('http://localhost:4000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, res => {
    let body = '';
    res.on('data', c => body += c);
    res.on('end', () => console.log('Status:', res.statusCode, 'Body length:', body.length));
  });
  req.write(JSON.stringify(payload));
  req.end();
}
test();
