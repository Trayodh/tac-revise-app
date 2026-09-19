const fs = require('fs');

// Base templates for procedural generation
const physicsTopics = [
  { term: "Myopia", fix: "Concave lens", detail: "Image forms in front of the retina" },
  { term: "Hypermetropia", fix: "Convex lens", detail: "Image forms behind the retina" },
  { term: "Presbyopia", fix: "Bifocal lens", detail: "Loss of accommodation with age" },
  { term: "Astigmatism", fix: "Cylindrical lens", detail: "Uneven curvature of cornea" }
];

const chemistryTopics = [
  { alloy: "Brass", comp: "Copper and Zinc" },
  { alloy: "Bronze", comp: "Copper and Tin" },
  { alloy: "Solder", comp: "Lead and Tin" },
  { alloy: "Stainless Steel", comp: "Iron, Carbon, Chromium, and Nickel" }
];

const biologyTopics = [
  { disease: "Malaria", vector: "Female Anopheles mosquito", pathogen: "Plasmodium" },
  { disease: "Dengue", vector: "Aedes aegypti mosquito", pathogen: "Virus" },
  { disease: "Cholera", vector: "Contaminated water/food", pathogen: "Vibrio cholerae" },
  { disease: "Tuberculosis", vector: "Airborne droplets", pathogen: "Mycobacterium tuberculosis" }
];

const geographyTopics = [
  { river: "Narmada", feature: "Flows in rift valley", sea: "Arabian Sea" },
  { river: "Tapi", feature: "Flows parallel to Vindhyas", sea: "Arabian Sea" },
  { river: "Mahanadi", feature: "Forms large delta", sea: "Bay of Bengal" },
  { river: "Godavari", feature: "Largest peninsular river", sea: "Bay of Bengal" }
];

const questions = [];

// Generate Physics Questions
physicsTopics.forEach((t, i) => {
  questions.push({
    question: `Consider the following statements regarding human eye defects:\n1. ${t.term} is a condition where ${t.detail.toLowerCase()}.\n2. It can be corrected using a ${t.fix.toLowerCase()}.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 2,
    explanation: `Topic: Physics. Both statements accurately describe ${t.term}.`,
    topicId: "physics"
  });
});

// Generate Chemistry Questions
chemistryTopics.forEach((t, i) => {
  questions.push({
    question: `Which of the following is the correct composition of the alloy '${t.alloy}'?`,
    options: [t.comp, "Copper and Nickel", "Iron and Carbon", "Aluminum and Magnesium"],
    correct: 0,
    explanation: `Topic: Chemistry. ${t.alloy} is an alloy primarily composed of ${t.comp}.`,
    topicId: "chemistry"
  });
});

// Generate Biology Questions
biologyTopics.forEach((t, i) => {
  questions.push({
    question: `Consider the following statements about '${t.disease}':\n1. It is primarily transmitted by ${t.vector}.\n2. The causative pathogen is a ${t.pathogen.split(' ')[0]}.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 2,
    explanation: `Topic: Biology. ${t.disease} is transmitted by ${t.vector} and caused by ${t.pathogen}.`,
    topicId: "biology"
  });
});

// Generate Geography Questions
geographyTopics.forEach((t, i) => {
  questions.push({
    question: `With reference to the Indian river system, consider the following statements regarding the ${t.river} river:\n1. It ${t.feature.toLowerCase()}.\n2. It drains into the ${t.sea}.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 2,
    explanation: `Topic: Geography. Both statements correctly describe the ${t.river} river.`,
    topicId: "geography"
  });
});

// Add 30 more handcrafted complex ones...

  questions.push({
    question: `Consider the following statements regarding the fundamental laws of motion (Statement Set ${i+1):\n1. Newton's first law defines inertia.\n2. The rate of change of momentum is proportional to the applied force.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 2,
    explanation: "Topic: Physics. Both are correct statements derived from Newton's laws.",
    topicId: "physics"
  });
}


  questions.push({
    question: `Consider the following pairs of historical events and their associated leaders (Set ${i+1):\n1. Bardoli Satyagraha - Sardar Vallabhbhai Patel\n2. Champaran Satyagraha - Mahatma Gandhi\n3. Ramakrishna Mission - Swami Vivekananda\nWhich of the pairs given above is/are correctly matched?`,
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
    correct: 3,
    explanation: "Topic: History. All pairs are correctly matched.",
    topicId: "history"
  });
}


  questions.push({
    question: `With reference to Economics, consider the following statements (Set ${i+1):\n1. 'Stagflation' is a situation where inflation is high, economic growth rate slows, and unemployment remains steadily high.\n2. 'Deflation' is a decrease in the general price level of goods and services.\nWhich of the statements given above is/are correct?`,
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 2,
    explanation: "Topic: Economics. Both statements are basic economic definitions.",
    topicId: "economics"
  });
}

fs.writeFileSync('question_banks/upsc_master_bank.json', JSON.stringify({ gs: questions }, null, 2));
console.log(`Generated Master Bank with ${questions.length} pure UPSC questions!`);
