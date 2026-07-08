const fs = require('fs');

const CEREBRAS_API_KEY = "csk-jvvdedp46d2w4c86rc42mh2r3v9584mdyxd6w6tj6me4hkfx"; // from .env

// Load the old data
const rawData = fs.readFileSync('extra_bank_data.js', 'utf8');
const jsonStr = rawData.replace('const EXTRA_QUESTION_BANK = ', '').replace(/;\s*$/, '');
const oldBank = JSON.parse(jsonStr);

async function upArmour(q) {
  const prompt = `You are an expert UPSC/NDA/CDS exam setter. I have a simple multiple choice question. Your task is to "Up-Armour" this question, meaning make it significantly more difficult, analytical, and conceptual (e.g., using Statement I and Statement II, or multi-statement format common in UPSC exams).
      
  CRUCIAL RULE: You MUST keep the EXACT SAME options, meaning the correct answer must still be Option ${String.fromCharCode(65 + q.correct)}. 
  
  Original Question: ${q.question}
  Options:
  A. ${q.options[0]}
  B. ${q.options[1]}
  C. ${q.options[2]}
  D. ${q.options[3]}
  
  Return the response in this exact format:
  [NEW_QUESTION]
  (Write the new, harder question text here)
  [NEW_EXPLANATION]
  (Write a detailed, advanced explanation justifying the answer here)`;

  try {
    const res = await fetch('https://api.cerebras.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CEREBRAS_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama3.1-8b',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7
      })
    });
    
    if (!res.ok) throw new Error("API error: " + await res.text());
    
    const data = await res.json();
    const content = data.choices[0].message.content;
    
    const qMatch = content.match(/\[NEW_QUESTION\]([\s\S]*?)\[NEW_EXPLANATION\]/);
    const eMatch = content.match(/\[NEW_EXPLANATION\]([\s\S]*)/);
    
    if (qMatch && eMatch) {
      return {
        ...q,
        question: "[UP-ARMOURED] " + qMatch[1].trim().replace(/\n/g, '<br>'),
        explanation: eMatch[1].trim().replace(/\n/g, '<br>'),
        isUpArmoured: true
      };
    } else {
      console.log("Failed to parse response:", content);
      return q;
    }
  } catch(err) {
    console.log("Error up-armouring:", err.message);
    return q;
  }
}

async function run() {
  const newBank = { gs: [], english: [], maths: [] };
  
  for (const subject of ['gs', 'english', 'maths']) {
    console.log(`Processing ${subject}...`);
    // Take 15 questions from each subject
    const questions = oldBank[subject].slice(0, 15);
    
    for (let i = 0; i < questions.length; i++) {
      console.log(`  Up-armouring ${subject} Q${i+1}/${questions.length}`);
      const newQ = await upArmour(questions[i]);
      newBank[subject].push(newQ);
      // slight delay
      await new Promise(r => setTimeout(r, 500));
    }
  }
  
  const outCode = `const EXTRA_QUESTION_BANK = ${JSON.stringify(newBank, null, 2)};`;
  fs.writeFileSync('extra_bank_data.js', outCode);
  console.log("Done! Wrote 45 up-armoured questions to extra_bank_data.js");
}

run();
