// AFCAT Combined — Defence Examination Authority Paper 1
// 100 Questions | 300 Marks | 2 Hours | +3 correct / -1 incorrect
// Blueprint: English(30), General Awareness(25), Reasoning(25), Numerical Ability(20)

const AFCAT_COMBINED_AUTHORITY_1 = {
  "id": "afcat-combined-mock-13",
  "exam": "AFCAT",
  "subject": "Combined",
  "title": "AFCAT Combined — Authority Paper 1",
  "duration": 120,
  "questionsCount": 100,
  "rules": {
    "correctMarks": 3,
    "incorrectMarks": -1,
    "examType": "AFCAT"
  },
  "questions": [
    // Scaffold 100 questions
    ...Array.from({ length: 100 }).map((_, i) => ({
      "question": `AFCAT Question ${i + 1}`,
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "Detailed explanation.",
      "topicId": "afcat-topic",
      "difficulty": "medium"
    }))
  ]
};

const targetTopics = {
  "english": 30,
  "general-awareness": 25,
  "reasoning": 25,
  "numerical-ability": 20
};

let qIndex = 0;
for (const [topic, target] of Object.entries(targetTopics)) {
  for (let j = 0; j < target; j++) {
    if (qIndex < 100) {
      AFCAT_COMBINED_AUTHORITY_1.questions[qIndex].topicId = topic;
      qIndex++;
    }
  }
}

if (typeof module !== 'undefined') module.exports = AFCAT_COMBINED_AUTHORITY_1;
