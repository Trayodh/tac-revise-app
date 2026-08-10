import os

os.makedirs("evolved_notes/english", exist_ok=True)

notes_data = {
    "parts-of-speech.md": """# Parts of Speech & Usage Rules

---

## **1. Nouns & Pronouns**

### **Nouns**
*   **Uncountable Nouns (Always Singular):** Scenery, poetry, furniture, advice, information, hair, luggage, work, mischief, bread, machinery, alphabet. (e.g., *Incorrect:* I have many informations. *Correct:* I have a lot of information).
*   **Plural in form but Singular in meaning:** News, Mathematics, Physics, Politics, Innings.
*   **Singular in form but Plural in meaning:** Cattle, cavalry, infantry, poultry, peasantry, children, police.

### **Pronouns**
*   **Relative Pronouns (Who vs. Whom):**
    *   *Who:* Used for the **subject** (the person doing the action). Replace with 'He/She' to test.
    *   *Whom:* Used for the **object** (the person receiving the action). Replace with 'Him/Her' to test.
*   **Reflexive Pronouns:** Certain verbs must be followed by a reflexive pronoun (myself, himself) if there is no object. e.g., *enjoy, avail, apply, acquit, absent*.
    *   *Incorrect:* He availed of the opportunity.
    *   *Correct:* He availed **himself** of the opportunity.

---

## **2. Adjectives & Adverbs**

### **Adjectives**
*   **Order of Adjectives:** OSASCOMP (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose).
*   **Comparisons:** Do not use double comparatives or double superlatives.
    *   *Incorrect:* He is more taller than his brother.
    *   *Correct:* He is taller than his brother.
*   **Unique Adjectives:** Some adjectives cannot have a comparative/superlative degree because their meaning is absolute (e.g., *unique, perfect, complete, round, empty, dead*).

### **Adverbs**
*   **Placement of 'Enough':** 'Enough' comes **after** the adjective/adverb it modifies, but **before** a noun.
    *   *Correct:* He is smart **enough**. (Adjective + Enough)
    *   *Correct:* I have **enough** money. (Enough + Noun)
*   **Hard vs Hardly:** 'Hard' means with great effort (He works hard). 'Hardly' means scarcely or almost not at all (He hardly works).

---

## **3. Prepositions & Conjunctions**

*   **Since vs For:** 'Since' is used for a point of time (Since Monday, Since 1999). 'For' is used for a period of time (For 2 hours, For a decade).
*   **Between vs Among:** 'Between' is for two people/things. 'Among' is for more than two.
*   **Correlative Conjunction Pairs (Must always go together):**
    *   Either ... Or
    *   Neither ... Nor
    *   Not only ... But also
    *   Although/Though ... Yet (or comma)
    *   Hardly/Scarcely ... When (NOT than)
    *   No sooner ... Than (NOT when)
""",
    "tenses-complete.md": """# Tenses & Consistency

---

## **1. The Three Time Frames**

### **Present Tense**
*   **Simple Present ($V_1$):** Used for universal truths, habitual actions, and scheduled future events. (e.g., The sun rises in the east).
*   **Present Continuous ($is/am/are + V_{1+ing}$):** Action happening right now.
    *   *Warning:* **Stative verbs** (verbs of perception, emotion, or possession) are NOT used in the continuous form (e.g., love, hate, know, understand, belong, contain).
    *   *Incorrect:* I am knowing him. *Correct:* I know him.
*   **Present Perfect ($has/have + V_3$):** Action completed in the past but connected to the present. Keywords: *just, yet, already, recently*.
*   **Present Perfect Continuous ($has/have + been + V_{1+ing}$):** Action started in the past and is still continuing. Must use *since* or *for*.

### **Past Tense**
*   **Simple Past ($V_2$):** Action completed in the past. Keywords: *yesterday, ago, last year, in 1990*.
*   **Past Perfect ($had + V_3$):** When two actions happen in the past, the **first action** is in Past Perfect, and the **second action** is in Simple Past.
    *   *Example:* The train **had left** (1st action) before I **reached** the station (2nd action).

---

## **2. Conditionals (Highly Tested)**

Conditionals describe the result of a certain condition.

| Conditional Type | Usage | Structure | Example |
| :--- | :--- | :--- | :--- |
| **Zero** | Universal facts | If + Simple Present, Simple Present | If you heat ice, it melts. |
| **Type 1** | Real/Possible future | If + Simple Present, **will + $V_1$** | If he studies, he **will pass**. |
| **Type 2** | Unreal present/future | If + Simple Past ($V_2$), **would + $V_1$** | If I **had** a million dollars, I **would buy** a yacht. (Also: If I **were** a bird, I would fly). |
| **Type 3** | Unreal past (Regrets) | If + Past Perfect ($had+V_3$), **would have + $V_3$** | If he **had studied**, he **would have passed**. |

> [!WARNING]
> **EXAM TRAP:** Do not use 'will' or 'would' in the 'If' clause.
> *Incorrect:* If you will study, you will pass.
> *Correct:* If you study, you will pass.
""",
    "subject-verb-agreement.md": """# Subject-Verb Agreement

---

## **Golden Rules of S-V Agreement**

The fundamental rule is that a singular subject takes a singular verb, and a plural subject takes a plural verb. However, UPSC exams test the tricky exceptions.

### **1. Conjunction Traps**
*   **"And":** When two subjects are joined by 'and', they take a plural verb. (e.g., Ram and Shyam **are** coming).
    *   *Exception:* If they refer to the same idea/person, use a singular verb. (e.g., Bread and butter **is** my favorite breakfast).
*   **"As well as", "Along with", "Besides", "In addition to":** The verb agrees with the **FIRST** subject.
    *   *Example:* The captain, along with his players, **is** going to the match. (Verb 'is' agrees with 'captain', not 'players').
*   **"Either...or", "Neither...nor", "Not only...but also":** The verb agrees with the **NEAREST** subject (usually the second one).
    *   *Example:* Neither the students nor the teacher **is** present. (Verb 'is' agrees with 'teacher').

### **2. Indefinite Pronouns**
*   **Always Singular (Takes Singular Verb):** Each, every, everyone, everybody, nobody, none, someone, anybody, either, neither.
    *   *Example:* Each of the boys **has** (not have) a pen.
    *   *Example:* Neither of the two answers **is** correct.
*   **"Many a":** "Many a" is always followed by a singular noun and a singular verb.
    *   *Example:* Many a man **has** tried and failed.

### **3. Collective Nouns and Quantifiers**
*   **Collective Nouns (Jury, Committee, Team):**
    *   Take a **singular verb** when they act as a single unit. (The jury **has** given its verdict).
    *   Take a **plural verb** when there is division among members. (The jury **are** divided in their opinions).
*   **A number of vs The number of:**
    *   "A number of" = Plural Verb. (*A number of students **are** absent*).
    *   "The number of" = Singular Verb. (*The number of absent students **is** ten*).
""",
    "sentence-structure.md": """# Sentence Structure & Parallelism

---

## **1. Clauses and Phrases**

*   **Phrase:** A group of words without a subject-verb component (e.g., *in the morning*, *on the table*).
*   **Clause:** A group of words that contains a subject and a verb.
    *   *Independent Clause:* Can stand alone as a complete sentence (e.g., *I like coffee*).
    *   *Dependent (Subordinate) Clause:* Cannot stand alone; begins with a subordinating conjunction (e.g., *because it is hot*).

---

## **2. Types of Sentences**

1.  **Simple Sentence:** One independent clause.
    *   *The dog barked loudly.*
2.  **Compound Sentence:** Two or more independent clauses joined by a coordinating conjunction (FANBOYS: For, And, Nor, But, Or, Yet, So) or a semicolon.
    *   *The dog barked, **and** the cat ran away.*
3.  **Complex Sentence:** One independent clause and at least one dependent clause.
    *   ***Because the dog barked**, the cat ran away.*

---

## **3. Parallel Structure (Parallelism)**

Parallelism means using the same pattern of words to show that two or more ideas have the same level of importance. This is a very common error tested in CDS/NDA.

### **Rule of Parallelism**
Elements in a list or coordinated by conjunctions must be in the same grammatical form (e.g., all gerunds, all infinitives, all nouns).

*   **Faulty Parallelism:** Mary likes hik**ing**, swimm**ing**, and **to ride** a bicycle. (Mix of gerunds and infinitive).
*   **Correct Parallelism:** Mary likes hik**ing**, swimm**ing**, and rid**ing** a bicycle.

### **Correlative Conjunctions and Parallelism**
When using pairs like *Not only...But also*, the grammatical structure immediately following each part must match.
*   *Faulty:* He is not only famous in **India** but also in **abroad**. (Noun vs Prepositional phrase).
*   *Correct:* He is famous not only **in India** but also **in abroad**.
""",
    "voice-conversion.md": """# Active & Passive Voice

---

## **Voice Conversion Rules**

The voice of a verb describes the relationship between the action (or state) that the verb expresses and the participants identified by its arguments (subject, object).

*   **Active Voice:** The subject performs the action. (Subject + Verb + Object).
    *   *Example:* The hunter (S) killed (V) the lion (O).
*   **Passive Voice:** The subject receives the action. (Object + Helping Verb + $V_3$ + by + Subject).
    *   *Example:* The lion (O) was killed (HV + $V_3$) by the hunter (S).

### **1. Tense Changes in Passive Voice**

The core rule is to use the appropriate form of the verb "to be" + Past Participle ($V_3$).

| Tense (Active) | Passive Voice Rule | Example |
| :--- | :--- | :--- |
| **Simple Present** ($V_1$) | is/am/are + $V_3$ | A letter **is written**. |
| **Present Continuous** (is $V_{ing}$) | is/am/are + **being** + $V_3$ | A letter is **being written**. |
| **Present Perfect** (has $V_3$) | has/have + **been** + $V_3$ | A letter has **been written**. |
| **Simple Past** ($V_2$) | was/were + $V_3$ | A letter **was written**. |
| **Past Continuous** (was $V_{ing}$) | was/were + **being** + $V_3$ | A letter was **being written**. |
| **Past Perfect** (had $V_3$) | had + **been** + $V_3$ | A letter had **been written**. |
| **Modals** (can/will $V_1$) | modal + **be** + $V_3$ | A letter will **be written**. |

*Note: Future Continuous and Perfect Continuous tenses generally do not have passive forms.*

### **2. Special Cases (Highly Tested)**

*   **Imperative Sentences (Orders/Requests):** Use "Let + Object + be + $V_3$".
    *   *Active:* Open the door.
    *   *Passive:* Let the door be opened.
*   **Questions with 'Who':** "Who" changes to "By whom".
    *   *Active:* Who wrote this book?
    *   *Passive:* By whom was this book written?
""",
    "narration-speech.md": """# Direct & Indirect Speech (Narration)

---

## **Narration Rules**

When converting Direct Speech (exact words in quotes) to Indirect Speech (reported words), four major changes occur:

### **1. Change in Reporting Verb**
*   *Assertive:* said $\\rightarrow$ said; said to $\\rightarrow$ told.
*   *Interrogative:* said to $\\rightarrow$ asked, inquired.
*   *Imperative:* said to $\\rightarrow$ ordered, requested, advised.

### **2. Change in Tense (If reporting verb is in the Past tense)**
If the reporting verb ("He said") is in the past, the tense inside the quotes shifts one step back into the past.
*   Simple Present $\\rightarrow$ Simple Past
*   Present Continuous $\\rightarrow$ Past Continuous
*   Present Perfect $\\rightarrow$ Past Perfect
*   Simple Past $\\rightarrow$ Past Perfect
*   Past Continuous $\\rightarrow$ Past Perfect Continuous
*   Will/Can/May $\\rightarrow$ Would/Could/Might

*Exception:* If the quote is a universal truth or habitual fact, the tense does NOT change. (e.g., He said, "The earth is round" $\\rightarrow$ He said that the earth is round).

### **3. Change in Pronouns (SON Rule)**
*   **S**ubject: First person (I, We) changes according to the Subject of the reporting verb.
*   **O**bject: Second person (You) changes according to the Object of the reporting verb.
*   **N**o Change: Third person (He, She, It, They) remains unchanged.

### **4. Change in Proximity Words**
Words expressing nearness in time or place change to words expressing distance.
*   This $\\rightarrow$ That
*   These $\\rightarrow$ Those
*   Here $\\rightarrow$ There
*   Now $\\rightarrow$ Then
*   Today $\\rightarrow$ That day
*   Tomorrow $\\rightarrow$ The next day
*   Yesterday $\\rightarrow$ The previous day (or the day before)
*   Ago $\\rightarrow$ Before

### **Special Case: Interrogative Sentences**
*   Remove the question mark. The sentence becomes assertive (Subject comes before Verb).
*   If the question starts with a helping verb (Is, Do, Can), use **"if" or "whether"** as the connector.
*   If the question starts with a Wh-word (What, Why, Where), use the **same Wh-word** as the connector (Do NOT use "that").
""",
    "modifiers.md": """# Modifiers: Misplaced & Dangling

---

## **1. Modifiers Basics**

A modifier is a word, phrase, or clause that describes or limits another word or concept. For a sentence to be clear, the modifier must be placed **as close as possible** to the word it is modifying.

### **2. Misplaced Modifiers**
A misplaced modifier is placed too far from the word it describes, making the sentence confusing or unintentionally funny.

*   **Example 1:** 
    *   *Misplaced:* She served sandwiches to the children **on paper plates**. (Implies the children were sitting on paper plates).
    *   *Correct:* She served sandwiches **on paper plates** to the children.
*   **Limiters (Only, Almost, Nearly):** These must go directly in front of the word they modify.
    *   *Incorrect:* He **only** ate the pizza. (He did nothing else but eat).
    *   *Correct:* He ate **only** the pizza. (He ate nothing else).

### **3. Dangling Modifiers**
A dangling modifier occurs when the subject being modified is missing from the sentence. The modifier "dangles" because it attaches itself to the wrong noun (usually the subject of the main clause).

*   **Example 1:**
    *   *Dangling:* **Walking down the street**, the trees looked beautiful. (This implies the trees were walking down the street).
    *   *Correction 1 (Change the main subject):* Walking down the street, **I** thought the trees looked beautiful.
    *   *Correction 2 (Expand the modifier into a clause):* **While I was walking** down the street, the trees looked beautiful.
*   **Example 2:**
    *   *Dangling:* **Having finished the assignment**, the TV was turned on. (The TV didn't finish the assignment).
    *   *Correct:* Having finished the assignment, **John** turned on the TV.
""",
    "punctuation-basics.md": """# Punctuation Basics

---

## **1. The Comma ( , )**

*   **Lists:** Use to separate three or more items.
*   **Introductory Elements:** Use a comma after an introductory phrase or clause. (e.g., *In the beginning, there was nothing.*)
*   **Coordinating Conjunctions (FANBOYS):** Use a comma before a conjunction that joins two independent clauses. (e.g., *I wanted to go, but it rained.*)
*   **Non-Restrictive Clauses:** Use commas to set off non-essential information (extra information).
    *   *Example:* John, **who is my brother**, is coming over.

## **2. The Semicolon ( ; )**

*   **Joining Independent Clauses:** Use a semicolon to join two closely related independent clauses when a coordinating conjunction (like 'and') is NOT used.
    *   *Example:* Call me tomorrow; I will give you my answer then.
*   **Super Commas:** Use semicolons to separate items in a complex list where the items themselves contain commas.
    *   *Example:* I have lived in Paris, France; London, England; and Rome, Italy.

## **3. The Colon ( : )**

*   **Lists and Explanations:** Use a colon to introduce a list, a quote, or an explanation, but ONLY after a complete independent clause.
    *   *Correct:* You need three things: flour, sugar, and milk.
    *   *Incorrect:* The three things you need are: flour, sugar, and milk. (The part before the colon is not a complete sentence).

## **4. The Apostrophe ( ' )**

*   **Possession:**
    *   Singular nouns: Add 's (The boy's dog).
    *   Plural nouns ending in -s: Add only the apostrophe (The boys' dog).
    *   Plural nouns NOT ending in -s: Add 's (The children's toys).
*   **Contractions:** Indicates missing letters. (e.g., do not $\\rightarrow$ don't, it is $\\rightarrow$ it's).
    *   *Exam Trap:* **It's** = It is / It has. **Its** = Possessive pronoun (The dog wagged its tail).
""",
    "transformation-sentences.md": """# Transformation of Sentences

---

## **1. Clause Transformation**

Transforming sentences involves changing the grammatical structure without changing the meaning.

*   **Simple to Compound:** Use coordinating conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So).
    *   *Simple:* Seeing the tiger, he ran away.
    *   *Compound:* He saw the tiger **and** he ran away.
*   **Simple to Complex:** Expand a phrase into a dependent clause using subordinating conjunctions (because, although, if, when, who, which).
    *   *Simple:* In spite of his wealth, he is unhappy.
    *   *Complex:* **Although** he is wealthy, he is unhappy.

---

## **2. Transformation of Degrees of Comparison**

Adjectives have three degrees: Positive (tall), Comparative (taller), Superlative (tallest).

*   **Superlative to Comparative & Positive:**
    *   *Superlative:* Iron is the most useful metal.
    *   *Comparative:* Iron is more useful than **any other** metal.
    *   *Positive:* **No other** metal is as useful as iron.
*   **When dealing with "One of the...":**
    *   *Superlative:* Ashoka was one of the greatest kings.
    *   *Comparative:* Ashoka was greater than **most other** kings.
    *   *Positive:* **Very few** kings were as great as Ashoka.

---

## **3. Removal of 'Too'**

When a sentence has the structure "too + adjective + to + verb", it can be transformed using "so...that".

*   *Original:* He is **too weak to walk**.
*   *Transformation:* He is **so weak that** he cannot walk.
    *   *Rule:* Change 'too' to 'so'. Change 'to walk' into a clause starting with 'that', adding a pronoun and 'cannot/could not'.
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/english", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("English notes part 1 generated.")
