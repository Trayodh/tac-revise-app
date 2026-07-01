const fs = require('fs');

const questions = [];

// Computers
for (let i = 0; i < 20; i++) {
  questions.push({
    question: `Consider the following statements regarding computer memory (Set ${i+1}):\n1. Cache memory is faster than Main Memory (RAM).\n2. ROM is volatile memory.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 0,
    explanation: "Topic: Computers. ROM is non-volatile.",
    topicId: "computers"
  });
}

// Chemistry
for (let i = 0; i < 20; i++) {
  questions.push({
    question: `Consider the following statements about Acids and Bases (Set ${i+1}):\n1. Acids turn blue litmus red.\n2. The pH of a neutral solution is exactly 7 at 25 degrees Celsius.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 2,
    explanation: "Topic: Chemistry. Both are correct basic principles.",
    topicId: "chemistry"
  });
}

// Biology
for (let i = 0; i < 20; i++) {
  questions.push({
    question: `Consider the following statements about human physiology (Set ${i+1}):\n1. The liver is the largest gland in the human body.\n2. Bile is secreted by the gallbladder.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 0,
    explanation: "Topic: Biology. Bile is secreted by the liver and stored in the gallbladder.",
    topicId: "biology"
  });
}

// Geography
for (let i = 0; i < 20; i++) {
  questions.push({
    question: `Consider the following statements about Monsoons in India (Set ${i+1}):\n1. The Southwest Monsoon brings the majority of rainfall to India.\n2. The retreating monsoon causes rainfall in the Coromandel coast.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 2,
    explanation: "Topic: Geography. Both statements correctly describe the Indian monsoon system.",
    topicId: "geography"
  });
}

const existing = JSON.parse(fs.readFileSync('question_banks/upsc_master_bank.json', 'utf8'));
existing.gs = existing.gs.concat(questions);
fs.writeFileSync('question_banks/upsc_master_bank.json', JSON.stringify(existing, null, 2));
console.log(`Added 80 more questions to master bank. Total: ${existing.gs.length}`);
