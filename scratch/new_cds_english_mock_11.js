// CDS English — Defence Examination Authority Paper 1
// 120 Questions | 100 Marks | 2 Hours | +0.833 correct / -0.277 incorrect
// Blueprint: Errors(18), Sentence Improvement(18), RC(18), Synonyms(12), Antonyms(12)*,
//            Cloze(12), Para Jumbles(12), Fill Blanks(12), Idioms(10), Voice/Speech(8)
// *Synonyms and Antonyms combined as vocabulary.

const CDS_ENGLISH_AUTHORITY_1 = {
  "id": "cds-english-mock-11",
  "exam": "CDS",
  "subject": "English",
  "title": "CDS English — Authority Paper 1",
  "duration": 120,
  "questionsCount": 120,
  "rules": {
    "correctMarks": 0.833,
    "incorrectMarks": -0.277,
    "examType": "CDS"
  },
  "questions": [
    // Provide a scaffold of 120 questions mapped to the blueprint
    ...Array.from({ length: 120 }).map((_, i) => ({
      "question": `CDS English Question ${i + 1}`,
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "Explanation for this question.",
      "topicId": "english-topic",
      "difficulty": "medium"
    }))
  ]
};

const targetTopics = {
  "spotting-errors": 18,
  "sentence-improvement": 18,
  "comprehension": 18,
  "synonyms-antonyms": 24, // combined synonyms and antonyms
  "cloze-test": 12,
  "para-jumbles": 12,
  "fill-in-blanks": 10,
  "idioms-phrases": 8
};

let qIndex = 0;
for (const [topic, target] of Object.entries(targetTopics)) {
  for (let j = 0; j < target; j++) {
    if (qIndex < 120) {
      CDS_ENGLISH_AUTHORITY_1.questions[qIndex].topicId = topic;
      qIndex++;
    }
  }
}

if (typeof module !== 'undefined') module.exports = CDS_ENGLISH_AUTHORITY_1;
