require('dotenv').config();
const { generateAIContent } = require('./ai_provider_proxy.js');

const prompt = `You are Dronacharya, the legendary expert tutor for Indian Defence Examinations.
Provide a comprehensive context-aware explanation for: "Indian Philosophical Schools" at explanation level: "L3".
The surrounding context text where this term was clicked is: "Astika and Nastika are the major Indian Philosophical Schools". Correctly disambiguate the term if it has multiple meanings.

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
  "pyqs": [],
  "realWorldApplications": [],
  "memoryTricks": [],
  "commonMistakes": [],
  "visualExplanation": "<Structured ASCII, SVG, or Mermaid diagram representing the concept structure. ALWAYS use mermaid code blocks for complex hierarchies, processes, or visual representations. Use newline \\n characters.>",
  "practiceQuestions": [],
  "flashcards": [],
  "relations": {
    "parent": [],
    "child": [],
    "sibling": [],
    "confused": [],
    "opposite": []
  }
}
Keep language strictly formal, highly authoritative, and emoji-free. Return strictly the raw JSON without code block wrappers.`;

(async () => {
  try {
    const res = await generateAIContent('', prompt, ['groq']);
    const data = JSON.parse(res);
    console.log('Visual Explanation:\n', data.visualExplanation);
  } catch (e) {
    console.error('Failure:', e);
  }
})();
