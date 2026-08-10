import os

os.makedirs("evolved_notes/english", exist_ok=True)

notes_data = {
    "synonyms-antonyms-detailed.md": """# High-Frequency Synonyms & Antonyms

---

## **Vocabulary Strategy: Root Words**

The best way to build vocabulary for UPSC exams is through etymology (Root words).

### **Important Roots**
*   **Bene / Bon (Good):** 
    *   *Benefactor* (one who gives money/help)
    *   *Benevolent* (kind)
    *   *Bona fide* (genuine)
*   **Mal (Bad/Evil):** 
    *   *Malevolent* (wishing evil)
    *   *Malign* (speak badly of)
    *   *Malady* (disease)
*   **Mis / Miso (Hate):**
    *   *Misanthrope* (hater of mankind)
    *   *Misogynist* (hater of women)
*   **Phil (Love):**
    *   *Philanthropist* (lover of mankind, gives to charity)
    *   *Bibliophile* (lover of books)
*   **Chron (Time):**
    *   *Chronological* (in order of time)
    *   *Anachronism* (something out of its proper time)

---

## **High-Yield NDA/CDS Words**

| Word | Meaning (Synonyms) | Antonyms |
| :--- | :--- | :--- |
| **Audacious** | Bold, daring, fearless | Timid, cowardly |
| **Clandestine** | Secret, covert, stealthy | Open, overt, public |
| **Ephemeral** | Short-lived, transient, fleeting | Permanent, eternal |
| **Mitigate** | Lessen, alleviate, ease | Aggravate, intensify |
| **Obdurate** | Stubborn, obstinate, inflexible | Yielding, compliant |
| **Paucity** | Scarcity, shortage, lack | Abundance, plethora |
| **Sycophant** | Flatterer, bootlicker, toady | Critic, independent |
| **Cacophony** | Harsh sound, dissonance | Harmony, melody |
""",
    "one-word-substitution.md": """# One Word Substitutions

---

## **Common Categories**

### **1. Types of Government / Rule (-archy, -cracy)**
*   **Anarchy:** Absence of government or control.
*   **Autocracy:** Government by one person with absolute power.
*   **Democracy:** Government by the people.
*   **Oligarchy:** Government by a small group of powerful people.
*   **Plutocracy:** Government by the wealthy.
*   **Theocracy:** Government by religious leaders.

### **2. Killings / Murders (-cide)**
*   **Infanticide:** Killing of an infant.
*   **Fratricide:** Killing of one's brother.
*   **Sororicide:** Killing of one's sister.
*   **Uxoricide:** Killing of one's wife.
*   **Regicide:** Killing of a king.
*   **Genocide:** Systematic killing of a racial or cultural group.

### **3. Personality Traits**
*   **Altruist:** One who acts selflessly for others.
*   **Ascetic:** One who leads a life of strict self-discipline (like a monk).
*   **Egoist:** One who is self-centered and thinks only of himself.
*   **Fastidious:** One who is very hard to please (very particular about details).
*   **Incorrigible:** One who cannot be corrected or reformed.
*   **Gullible:** Easily deceived or tricked.
*   **Hypocrite:** One who pretends to have virtues they don't actually possess.

### **4. Science and Studies (-ology)**
*   **Anthropology:** Study of human origin and culture.
*   **Ornithology:** Study of birds.
*   **Philology:** Study of languages.
""",
    "idioms-phrases.md": """# Idioms & Phrases

---

## **Theme-Based Idioms**

Idioms are phrases where the meaning cannot be deduced from the literal definition of the words.

### **1. Animal Idioms**
*   **A dark horse:** An unexpected winner or unknown competitor who succeeds.
*   **Let the cat out of the bag:** To accidentally reveal a secret.
*   **A bull in a china shop:** A very clumsy person in a delicate situation.
*   **Crocodile tears:** Fake tears or false sorrow.
*   **To flog a dead horse:** To waste effort on something that is already decided or over.

### **2. Color Idioms**
*   **Caught red-handed:** Caught in the act of committing a crime.
*   **Out of the blue:** Something happening entirely unexpectedly.
*   **Red tape:** Excessive bureaucracy or official rules that hinder progress.
*   **Blue blood:** Aristocratic or noble descent.

### **3. Action / Situation Idioms**
*   **Bite the bullet:** To endure a painful or difficult situation bravely.
*   **Spill the beans:** To reveal secret information.
*   **Beat around the bush:** To avoid talking about the main topic.
*   **Burn the midnight oil:** To work or study late into the night.
*   **Through thick and thin:** Under all conditions, no matter how challenging.
*   **To turn a deaf ear:** To ignore what someone is saying.

> [!TIP]
> **Exam Strategy:** If an idiom option provides the *literal* meaning of the words in the phrase, it is almost certainly the wrong answer.
""",
    "phrasal-verbs.md": """# Phrasal Verbs

---

## **High-Frequency Phrasal Verbs**

A phrasal verb is a combination of a Verb + Preposition/Adverb that creates an entirely new meaning. (e.g., Look + after = Take care of).

### **1. 'Break'**
*   **Break down:** To stop functioning (machinery), or to lose control of emotions. (The car *broke down*; she *broke down* in tears).
*   **Break out:** To start suddenly (war, disease, fire).
*   **Break into:** To enter by force (The thief *broke into* the house).
*   **Break up:** To end a relationship or disperse (The meeting *broke up*).

### **2. 'Call'**
*   **Call off:** To cancel an event or agreement. (The match was *called off* due to rain).
*   **Call on:** To visit someone for a short time.
*   **Call for:** To demand or require. (This situation *calls for* immediate action).

### **3. 'Look'**
*   **Look after:** To take care of.
*   **Look into:** To investigate. (The police are *looking into* the matter).
*   **Look down upon:** To consider someone inferior; to despise.
*   **Look forward to:** To anticipate with pleasure. (Note: Always followed by a noun or gerund: I look forward to *meeting* you).

### **4. 'Put'**
*   **Put off:** To postpone. (Never *put off* until tomorrow what you can do today).
*   **Put up with:** To tolerate or endure patiently. (I cannot *put up with* this noise).
*   **Put out:** To extinguish (a fire).

### **5. Miscellaneous**
*   **Carry out:** To execute or complete a task/order.
*   **Come across:** To find or meet by chance.
*   **Give up:** To surrender or stop doing something.
*   **Turn down:** To reject an offer or request.
""",
    "reading-comprehension.md": """# Reading Comprehension

---

## **Reading Comprehension Strategies**

The RC section tests your ability to read, understand, analyze, and infer information from a passage under time pressure.

### **1. Types of Questions**
1.  **Main Idea / Central Theme:** Asks for the primary purpose of the passage. The answer must encompass the entire passage, not just one paragraph.
2.  **Factual / Detail-Oriented:** Directly verifiable from the text. Look for keywords in the question and scan the passage.
3.  **Inference:** The answer is NOT explicitly stated in the text. You must deduce it based on clues provided by the author.
4.  **Vocabulary in Context:** Asks for the synonym/antonym of a word *as it is used in the passage*. Do not just pick the standard dictionary definition if the context implies a secondary meaning.
5.  **Author's Tone:** Asks for the author's attitude towards the subject.

### **2. Identifying the Tone**
*   **Positive Tones:** Laudatory (praising), Optimistic, Appreciative, Respectful.
*   **Negative Tones:** Critical (finding faults), Cynical (distrustful of human motives), Sarcastic, Pessimistic, Derogatory.
*   **Neutral Tones:** Objective (just giving facts without opinion), Analytical, Descriptive.

### **3. Execution Strategy (The "Skim & Scan" Method)**
1.  **Read the Questions First (Briefly):** Glance at the questions (not the options) to know what to look for. If a question asks about a specific year or name, keep an eye out for it.
2.  **Skim the Passage:** Read the first and last paragraph carefully (they usually contain the main idea). Read the first sentence of the middle paragraphs.
3.  **Eliminate Extreme Options:** In inference and main idea questions, eliminate options that use extreme words (always, never, only, all) unless the passage explicitly supports them.
""",
    "error-detection.md": """# Spotting Errors

---

## **Spotting Errors Strategy**

This section tests your comprehensive grammar knowledge. A sentence is divided into 3 or 4 parts (A, B, C). You must identify which part contains a grammatical error. If there is no error, select (D) No Error.

### **Mental Checklist for Spotting Errors**
When you read a sentence, mentally run through this checklist in order:

1.  **Subject-Verb Agreement (The most common error):**
    *   Find the main subject. Find the main verb. Do they match in number (singular/plural)?
    *   *Check for traps:* Collective nouns, "Along with", "Neither/Nor".
2.  **Tense Consistency:**
    *   Did the sentence start in the past tense and suddenly shift to the present without a logical reason?
    *   *Check for time markers:* 'Yesterday' requires $V_2$, 'Since' requires Perfect tense.
3.  **Nouns and Articles (a, an, the):**
    *   Is an uncountable noun (like 'furniture', 'information') made plural with an 's'? (Error).
    *   Is 'a/an' used before a vowel/consonant *sound* correctly? (e.g., an honest man, a university).
4.  **Prepositions:**
    *   Are fixed prepositions used correctly? (e.g., prefer *to*, superior *to*, congratulate *on*, fond *of*).
5.  **Pronouns:**
    *   Does the pronoun match its antecedent? (e.g., *Each* of the boys must bring *his* book, not *their* book).
6.  **Redundancy / Superfluous Errors:**
    *   Using two words that mean the same thing together.
    *   *Examples to watch out for:* Return back, repeat again, final conclusion, exact same, past history, ATM machine.
""",
    "sentence-improvement.md": """# Sentence Improvement

---

## **Sentence Improvement Strategy**

A part of a sentence is underlined or bolded. You must choose the best alternative from the options to improve the sentence grammatically or stylistically. If the sentence is already correct, choose "No Improvement".

### **Key Areas of Improvement**

1.  **Grammar & Tense:**
    *   Look for subtle tense errors.
    *   *Original:* I **have seen** him yesterday.
    *   *Improvement:* I **saw** him yesterday. (Because 'yesterday' demands Simple Past).
2.  **Word Choice & Diction:**
    *   Sometimes the grammar is fine, but the word is used incorrectly.
    *   *Confusing pairs:* Economic (related to economy) vs. Economical (saving money/frugal). Historic (important in history) vs. Historical (relating to history).
    *   *Original:* This car is very **economic**. $\\rightarrow$ *Improvement:* **economical**.
3.  **Idiomatic Usage:**
    *   Ensure idioms and fixed prepositional phrases are exactly correct.
    *   *Original:* He is addicted **with** smoking. $\\rightarrow$ *Improvement:* addicted **to**.
4.  **Parallel Structure:**
    *   Ensure lists and comparisons use the same grammatical form.
    *   *Original:* She prefers to read than **writing**. $\\rightarrow$ *Improvement:* She prefers **reading** to **writing**. (Or: She prefers to read rather than to write).
5.  **Subjunctive Mood:**
    *   Verbs expressing commands, suggestions, or necessity (suggest, demand, insist, recommend) take the base form of the verb ($V_1$ without 's') for all subjects.
    *   *Original:* I suggest that he **goes** to the doctor. $\\rightarrow$ *Improvement:* I suggest that he **go** to the doctor.
""",
    "ordering-rearrangement.md": """# Ordering of Words & Sentences

---

## **1. Ordering of Words (Jumbled Sentence)**

You are given fragments of a single sentence (labeled P, Q, R, S). You must arrange them to form a coherent, grammatically correct sentence.

### **Strategy:**
*   **Find the Subject and Verb (S-V-O format):** The basic English structure is Subject + Verb + Object. Find the fragment containing the main subject, then find the fragment with the verb that describes its action.
*   **Look for Connectors:** Conjunctions (and, but, because) and relative pronouns (who, which, that) usually connect a subordinate clause to the main clause.
*   **Prepositional Phrases:** Phrases starting with 'in', 'on', 'at' usually go at the end of the sentence to indicate time or place, unless they are used as an introductory phrase.
*   **Use Options:** If you are sure Q must follow P (a mandatory pair "PQ"), look at the options and eliminate any that don't contain PQ together.

---

## **2. Ordering of Sentences (Jumbled Paragraph)**

You are given 4 to 6 sentences. You must arrange them to form a logical paragraph. (Sometimes $S_1$ and $S_6$ are fixed, and you arrange P, Q, R, S in between).

### **Strategy:**
*   **Find the Opening Sentence:** The opening sentence introduces the main topic, character, or setting. It usually contains independent nouns, NOT pronouns (he, she, it, they) or transition words (however, therefore).
*   **Establish Mandatory Pairs:**
    *   *Noun-Pronoun Link:* If sentence P introduces "Mr. Sharma", and sentence R starts with "He", then P must come before R.
    *   *Acronym Link:* Full name (World Health Organization) comes before the acronym (WHO).
    *   *Article Link:* Indefinite article (a/an) introduces a subject for the first time. Definite article (the) refers to it subsequently. (e.g., "A boy walked in" comes before "The boy sat down").
*   **Look for Transitions:** Words like *However, On the other hand, But* indicate a contrast to the previous sentence. Words like *Therefore, Thus, Hence* usually indicate a concluding sentence.
""",
    "fill-blanks-cloze.md": """# Fill in the Blanks & Cloze Test

---

## **1. Fill in the Blanks**

This tests your vocabulary, grammar, and understanding of context within a single sentence.

*   **Grammar Logic:** Determine what part of speech is missing. If the blank is after an adjective, you need a noun. If it's after a modal verb (can, will), you need a base verb ($V_1$).
*   **Tone of the Sentence:** If the sentence has a positive tone, the missing word is likely positive. Look for transition words (but, although) that signal a shift in tone.
    *   *Example:* Although he is wealthy, he is very ________ (need a negative word here, e.g., miserly).
*   **Fixed Prepositions:** Many blanks simply test if you know which preposition follows a specific verb or adjective (e.g., refer *to*, abstain *from*, cope *with*).

---

## **2. Cloze Test**

A Cloze test is a paragraph with multiple blanks. It tests reading comprehension combined with grammar and vocabulary.

### **Cloze Strategy**
1.  **Read the Entire Passage First:** DO NOT attempt to fill the first blank immediately. Read the whole paragraph quickly, ignoring the blanks, to understand the central theme and tone (past or present tense? positive or negative?).
2.  **Context is King:** The clue for blank #1 might be hidden in the sentence containing blank #3.
3.  **Look for Collocations:** Collocations are words that naturally go together.
    *   *Make* a decision (not *do* a decision).
    *   *Take* action.
    *   *Heavy* rain (not *strong* rain).
4.  **Elimination:** Often, two options will be grammatically correct, but only one fits the specific context of the paragraph. Eliminate options that don't match the established tense or tone.
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/english", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("English notes part 2 generated.")
