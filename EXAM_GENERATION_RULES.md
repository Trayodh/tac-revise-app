# Defence Exams Question Generation Rules

**CRITICAL INSTRUCTION FOR AI AGENTS**: You MUST read and adhere to these rules before extracting questions from Previous Year Papers (PYQs) or generating new questions/mock papers for any Defence Exam (NDA, CDS, AFCAT).

## 1. The Current Affairs Rule (Dynamic Updating)

* **Skip PYQ Current Affairs:** When parsing and extracting questions from historical past papers (PYQs), you MUST SKIP any out-of-date Current Affairs questions. Old news is irrelevant for future aspirants.
* **Generate Current News:** To replace the skipped questions, you must generate fresh Current Affairs questions based strictly on recent, high-impact news relevant to defence exams (e.g., recent military exercises, defence acquisitions, DRDO/ISRO tests, national/international appointments, major summits, and sports).

## 2. The Weightage Rule (Cognitive Distribution)

When generating *new* questions for mock tests, you must strictly distribute the questions across different cognitive levels to exactly mirror the complexity of actual UPSC/AFCAT papers:

* **25% Direct Application:** Straightforward questions testing formulas, historical dates, or direct facts.
* **35% Multi-Step Problems:** Questions requiring the application of multiple concepts or formulas to arrive at the answer.
* **20% Conceptual Reasoning:** Questions testing deep understanding of the underlying theory (e.g., statement-based questions).
* **10% Elimination-Based:** Questions designed specifically where the smartest path to the answer is logically eliminating incorrect distractors rather than calculating directly.
* **10% Advanced Analytical Problems:** High-difficulty questions requiring significant critical thinking and advanced problem-solving, matching the hardest 10% of real UPSC papers.

*Note: All generated questions must mirror actual past year papers (2021-Latest) in style, tone, and specific distractors.*

## 3. Marking Scheme & Penalties

The exact positive and negative marking must be attached to the question/exam metadata depending on the specific exam and subject:

### NDA (National Defence Academy)

* **Mathematics:** Correct Answer: **+2.5 marks** | Incorrect Answer: **-0.83 marks**
* **General Ability Test (GAT):** Correct Answer: **+4.0 marks** | Incorrect Answer: **-1.33 marks**

### CDS (Combined Defence Services)

* **Mathematics:** Correct Answer: **+1.0 mark** | Incorrect Answer: **-0.33 marks**
* **English & General Knowledge:** Correct Answer: **+0.83 marks** | Incorrect Answer: **-0.27 marks** *(Due to 120 questions for 100 marks)*

### AFCAT (Air Force Common Admission Test)

* **All Subjects:** Correct Answer: **+3.0 marks** | Incorrect Answer: **-1.0 mark**

## 4. Structural Rules

* **Official Lengths:** Generated mock papers must exactly match the official total question counts (e.g., exactly 120 questions for CDS English/GS, 120 for NDA Math).
* **Subject Siloing:** Questions must be strictly tagged by subject (e.g., `maths`, `english`, `general_knowledge`, `afcat`). Never mix subjects inappropriately within a single section unless the official exam pattern dictates it.

## 5. Subject & Exam Mapping Rule

The AI must strictly identify and tag every question with both the correct **Subject** and its designated **Exam Paper**.

* **Contextual Awareness:** The AI must know exactly which exam (NDA, CDS, AFCAT) and which specific paper/subject (Mathematics, GAT, English, General Studies) a question belongs to.
* **Strict Routing:** A question extracted or generated for NDA Mathematics MUST NOT be placed into a CDS Mathematics paper, as the syllabus, depth, and difficulty levels differ significantly. Questions must be locked to their designated `exam` and `subject` metadata fields and routed to the correct test bank accordingly.
