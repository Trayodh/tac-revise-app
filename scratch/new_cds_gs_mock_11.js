// CDS General Studies — Defence Examination Authority Paper 1
// 120 Questions | 100 Marks | 2 Hours | +0.833 correct / -0.277 incorrect
// Blueprint: History(24), Geography(18), Polity(18), Economics(12), Physics(12), 
//            Chemistry(6), Biology(6), Current Affairs(14), Defence(6), General Science(4)

const CDS_GS_AUTHORITY_1 = {
  "id": "cds-gs-mock-11",
  "exam": "CDS",
  "subject": "General Studies",
  "title": "CDS General Studies — Authority Paper 1",
  "duration": 120,
  "questionsCount": 120,
  "rules": {
    "correctMarks": 0.833,
    "incorrectMarks": -0.277,
    "examType": "CDS"
  },
  "questions": [
    // Scaffold 120 questions
    ...Array.from({ length: 120 }).map((_, i) => ({
      "question": `CDS GS Question ${i + 1}`,
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "Detailed explanation.",
      "topicId": "gs-topic",
      "difficulty": "medium"
    }))
  ]
};

const targetTopics = {
  "history": 24,
  "geography": 18,
  "polity": 18,
  "economics": 12,
  "physics": 12,
  "chemistry": 6,
  "biology": 6,
  "current-affairs": 14,
  "military": 6,
  "science-environment": 4
};

let qIndex = 0;
for (const [topic, target] of Object.entries(targetTopics)) {
  for (let j = 0; j < target; j++) {
    if (qIndex < 120) {
      CDS_GS_AUTHORITY_1.questions[qIndex].topicId = topic;
      qIndex++;
    }
  }
}

if (typeof module !== 'undefined') module.exports = CDS_GS_AUTHORITY_1;
