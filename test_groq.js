require('dotenv').config();
const { generateAIContent } = require('./ai_provider_proxy.js');

const prompt = `You are Dronacharya, the legendary expert tutor for Indian Defence Examinations.
Provide a comprehensive context-aware explanation for: "Durand Cup" at explanation level: "L3".
The surrounding context text where this term was clicked is: "Football: Durand Cup (Asia's oldest tournament". Correctly disambiguate the term if it has multiple meanings (e.g. "cell" in biology vs military vs technology).

Generate your response as a valid JSON object matching this schema exactly:
{
  "quickDefinition": "<One clear sentence definition>"
}
Keep language strictly formal, highly authoritative, and emoji-free. Return strictly the raw JSON without code block wrappers.`;

(async () => {
  try {
    const res = await generateAIContent('', prompt, ['groq']);
    console.log('Success:', res);
  } catch (e) {
    console.error('Failure:', e);
  }
})();
