import os

os.makedirs("evolved_notes/military-aptitude", exist_ok=True)

notes_data = {
    "rank-equivalence.md": """# Equivalent Officer Ranks (Tri-Services)

---

## **1. Commissioned Officers Rank Structure**

Equivalent ranks in the Army, Navy, and Air Force are highly tested in CDS and AFCAT. You must know these by heart from junior to senior levels.

| Army | Navy | Air Force | Insignia / Level |
| :--- | :--- | :--- | :--- |
| **Lieutenant** | **Sub-Lieutenant** | **Flying Officer** | Entry Rank (2 Stars on shoulder) |
| **Captain** | **Lieutenant** | **Flight Lieutenant** | Junior Officer (3 Stars) |
| **Major** | **Lieutenant Commander** | **Squadron Leader** | Mid-Level (Ashoka Emblem) |
| **Lieutenant Colonel** | **Commander** | **Wing Commander** | Ashoka Emblem + 1 Star |
| **Colonel** | **Captain** | **Group Captain** | Ashoka Emblem + 2 Stars |
| **Brigadier** | **Commodore** | **Air Commodore** | **1 Star Rank** (Ashoka Emblem + 3 Stars) |
| **Major General** | **Rear Admiral** | **Air Vice Marshal** | **2 Star Rank** (Crossed sword/baton + 1 Star) |
| **Lieutenant General**| **Vice Admiral** | **Air Marshal** | **3 Star Rank** (Crossed sword/baton + Ashoka) |
| **General** | **Admiral** | **Air Chief Marshal** | **4 Star Rank (Chief of Staff)** |

---

## **2. Honorary / 5-Star Ranks**

These are the highest possible ranks, awarded rarely for exceptional wartime service.

*   **Field Marshal (Army):** 5-Star Rank. Held only by two officers in Indian history:
    1.  **Sam Manekshaw** (Hero of the 1971 Indo-Pak war)
    2.  **K. M. Cariappa** (First Indian Commander-in-Chief)
*   **Marshal of the Indian Air Force (IAF):** 5-Star Rank. Held by **Arjan Singh**.
*   **Admiral of the Fleet (Navy):** 5-Star Rank. (No Indian naval officer has been conferred this rank yet).

> [!IMPORTANT]
> **EXAM TRAP:** Do not confuse the Naval 'Captain' with the Army 'Captain'. A Naval Captain is equivalent to an Army **Colonel** (a much higher rank).
""",
    "commands.md": """# Operational Commands of the Armed Forces

---

## **1. Indian Army Commands (7)**

| Command | Headquarters |
| :--- | :--- |
| Northern Command | **Udhampur** (J&K) |
| Western Command | **Chandimandir** (Haryana) |
| Eastern Command | **Kolkata** (West Bengal) |
| Southern Command | **Pune** (Maharashtra) |
| Central Command | **Lucknow** (Uttar Pradesh) |
| South Western Command | **Jaipur** (Rajasthan) |
| Army Training Command (ARTRAC) | **Shimla** (Himachal Pradesh) |

---

## **2. Indian Air Force Commands (7)**

| Command | Headquarters |
| :--- | :--- |
| Western Air Command | **New Delhi** |
| Eastern Air Command | **Shillong** (Meghalaya) |
| Central Air Command | **Prayagraj** (Uttar Pradesh) |
| Southern Air Command | **Thiruvananthapuram** (Kerala) |
| South Western Air Command | **Gandhinagar** (Gujarat) |
| Training Command | **Bengaluru** (Karnataka) |
| Maintenance Command | **Nagpur** (Maharashtra) |

---

## **3. Indian Navy Commands (3)**

| Command | Headquarters |
| :--- | :--- |
| Western Naval Command | **Mumbai** (Maharashtra) |
| Eastern Naval Command | **Visakhapatnam** (Andhra Pradesh) |
| Southern Naval Command (Training) | **Kochi** (Kerala) |

---

## **4. Tri-Services / Joint Commands**

*   **Andaman and Nicobar Command (ANC):** Headquarters at **Port Blair**. It is the first and only tri-service theater command of the Indian Armed Forces, combining Army, Navy, Air Force, and Coast Guard.
*   **Strategic Forces Command (SFC):** Responsible for the management and administration of the country's tactical and strategic nuclear weapons stockpile.
""",
    "defence-organisations-weapons.md": """# Defence Organisations, Weapons & Agreements

---

## **1. Key Defence Organizations**

*   **DRDO (Defence Research and Development Organisation):** Founded in 1958. Headquarters: New Delhi. Motto: "Balasya Mulam Vigyanam" (Strength's Origin is in Science). Responsible for military R&D (missiles, radars, tanks).
*   **HAL (Hindustan Aeronautics Limited):** Founded in 1940. Headquarters: Bengaluru. Manufactures fighter jets (Tejas), helicopters (Dhruv, Prachand).
*   **BRO (Border Roads Organisation):** Formed in 1960. Develops and maintains road networks in India's border areas and friendly neighboring countries.

---

## **2. Major Indigenous Weapon Platforms**

*   **INS Vikrant (IAC-1):** India's first indigenously built aircraft carrier. Constructed by Cochin Shipyard Limited (CSL).
*   **LCA Tejas:** Light Combat Aircraft. Single-engine, delta wing, multirole fighter developed by ADA and HAL.
*   **Arjun MBT:** Third-generation Main Battle Tank developed by DRDO.
*   **LCH Prachand:** Light Combat Helicopter developed by HAL for high-altitude warfare (specifically for Siachen/Kargil-like terrains).

---

## **3. Foundational Defense Agreements (India-US)**

India and the USA have signed four foundational military agreements to deepen defense ties:
1.  **GSOMIA (2002):** General Security of Military Information Agreement (sharing of military intelligence).
2.  **LEMOA (2016):** Logistics Exchange Memorandum of Agreement (accessing each other's military facilities for refueling and replenishment).
3.  **COMCASA (2018):** Communications Compatibility and Security Agreement (allows India to procure specialized secure communication equipment from the US).
4.  **BECA (2020):** Basic Exchange and Cooperation Agreement (sharing of high-end geospatial and satellite data/maps for pinpoint accuracy of missiles/drones).
""",
    "bilateral-exercises.md": """# Joint Military Exercises of India

---

## **Bilateral Exercises List (High-Yield)**

Armed forces carry out exercises to practice tactical joint operations, interoperability, and counter-terrorism drills. Memorize the major ones tested in exams:

### **1. United States of America**
*   **Yudh Abhyas:** Army
*   **Vajra Prahar:** Special Forces
*   **Cope India:** Air Force
*   **Tarkash:** Counter-terrorism drill (NSG & US Special Forces)

### **2. France**
*   **Shakti:** Army
*   **Varuna:** Navy
*   **Garuda:** Air Force

### **3. United Kingdom**
*   **Ajeya Warrior:** Army
*   **Konkan:** Navy
*   **Indradhanush:** Air Force

### **4. Immediate Neighbours**
*   **Nepal:** Surya Kiran (Army)
*   **Bangladesh:** Sampriti (Army), Bongosagar (Navy)
*   **Sri Lanka:** Mitra Shakti (Army), SLINEX (Navy)
*   **China:** Hand-in-Hand (Army - currently suspended but historically relevant)

### **5. Russia**
*   **Indra:** Tri-Services Joint Exercise (Army, Navy, Air Force)

### **6. Other Important Nations**
*   **Japan:** Dharma Guardian (Army), JIMEX (Navy), Shinyuu Maitri (Air Force)
*   **Australia:** AUSTRA HIND (Army), AUSINDEX (Navy)
*   **Oman:** Al Najah (Army), Naseem Al Bahr (Navy), Eastern Bridge (Air Force)
*   **Singapore:** SIMBEX (Navy), Bold Kurukshetra (Army)
*   **Indonesia:** Garuda Shakti (Army), Samudra Shakti (Navy)
*   **Mongolia:** Nomadic Elephant (Army)

> [!TIP]
> **EXAM TRAP:** Do not confuse **Garuda** (France, Air Force) with **Garuda Shakti** (Indonesia, Army).
""",
    "missiles-systems.md": """# Integrated Guided Missile Development Program (IGMDP)

---

## **1. The IGMDP Program**

*   Conceived by **Dr. A.P.J. Abdul Kalam** in 1983 to make India self-sufficient in missile technology. Formally completed in 2008.
*   **Mnemonic for the 5 core missiles: PATNA**

| Missile | Description |
| :--- | :--- |
| **Prithvi** | Short-range surface-to-surface ballistic missile. First missile under IGMDP. |
| **Agni** | Medium to intercontinental range surface-to-surface ballistic missile. **Agni-V is an ICBM** with a range of 5000+ km. |
| **Trishul** | Short-range low-altitude surface-to-air missile. (Development closed, technology acts as feed). |
| **Nag** | Third-generation **fire-and-forget** anti-tank guided missile (ATGM). |
| **Akash** | Medium-range surface-to-air missile with multi-target engagement capability. Guided by the **Rajendra** radar. |

---

## **2. Crucial Cruise & Air Defence Missiles**

*   **BrahMos:** Supersonic cruise missile jointly developed by India (DRDO) and Russia (NPO Mashinostroyeniya).
    *   Name derived from Brahmaputra and Moskva rivers.
    *   Speed: **Mach 2.8 to 3.0** (World's fastest operational cruise missile).
    *   Can be launched from submarines, ships, aircraft (Sukhoi-30MKI), or land.
    *   Unlike ballistic missiles that travel in an arc outside the atmosphere, cruise missiles travel low to the ground to evade radar.
*   **Astra:** Beyond Visual Range (BVR) **air-to-air** missile.
*   **K-Missile Series (K-15 Sagarika, K-4):** Submarine-launched ballistic missiles (SLBMs) designed for the *Arihant* class of nuclear submarines to complete India's nuclear triad.
*   **Helina / Dhruvastra:** Helicopter-launched versions of the Nag anti-tank missile.
*   **S-400 Triumf:** Advanced surface-to-air missile defense system procured from **Russia**.
""",
    "syl-verbal-reasoning.md": """# Verbal Reasoning & OIR (SSB)

---

## **1. Core Verbal Reasoning Topics**

Verbal reasoning tests the ability to analyze and solve problems containing written/verbal content.

*   **Analogy:** Finding relationships between pairs of words, letters, or numbers (e.g., Doctor : Hospital :: Teacher : School).
*   **Classification (Odd One Out):** Identifying the term that does not belong to the group (e.g., Apple, Banana, Potato, Orange $\\rightarrow$ Potato is a vegetable, others are fruits).
*   **Coding-Decoding:** Decrypting rules applied to letters or words.
    *   Look for alphabet position values (A=1, Z=26).
    *   Look for reverse positions (A-Z, B-Y, etc., where the sum of positions = 27).
*   **Blood Relations:** Drawing family trees.
    *   Use symbols: + for male, - for female, = for couples, vertical lines for generations.
*   **Direction Sense:** Always draw the cardinal directions (N, S, E, W) and solve using the Pythagoras theorem ($H^2 = B^2 + P^2$) for the shortest distance.
*   **Syllogism:** Solving logical statements using Venn diagrams to check the validity of conclusions.

---

## **2. Officer Intelligence Rating (OIR) Verbal Tests**

OIR is the first test of SSB Stage 1 (Screening). You must score OIR-1 or OIR-2 to secure your chances of being screened in.

Common Verbal OIR patterns:
1.  **Word Association & Jumbled Words:** Unscrambling letters to form meaningful words and finding their category (e.g., PPAEL $\\rightarrow$ APPLE $\\rightarrow$ Fruit).
2.  **Dictionary Order:** Arranging words strictly alphabetically as they appear in a standard dictionary.
3.  **Number/Letter Series:** Identifying patterns of arithmetic progression (+3, -2), prime numbers, squares, cubes, or alternating sequences.
4.  **Sentence Sequencing:** Arranging words to form a meaningful sentence.
""",
    "syl-nonverbal-reasoning.md": """# Non-Verbal Reasoning & OIR (SSB)

---

## **1. Core Non-Verbal Reasoning Topics**

Non-verbal reasoning tests the ability to analyze visual information and solve problems based on patterns, figures, and spatial relationships. Heavily tested in AFCAT and SSB OIR.

*   **Pattern Completion:** Identifying the missing section of a larger geometric design (usually the 4th quadrant).
*   **Figure Series & Analogy:** Understanding how a shape changes across frames (rotation, addition/deletion of elements, shading, inversion) and predicting the next figure.
*   **Embedded Figures:** Finding a small target shape hidden inside a complex drawing.
*   **Paper Folding & Cutting:** Visualizing how paper looks when folded, punched with holes, and then unfolded. Uses vertical/horizontal symmetry lines.
*   **Mirror and Water Images:**
    *   **Mirror Image:** Left-Right inversion (sides swap, top/bottom remain the same).
    *   **Water Image:** Top-Bottom inversion (top/bottom swap, left/right remain the same).

---

## **2. SSB OIR Non-Verbal Intelligence Tests**

Key patterns to practice for OIR tests:

*   **Cube and Dice Tests:** Identifying opposite faces of a folded dice, or predicting standard vs. non-standard dice properties.
    *   *Rule:* If two positions of a dice have exactly one common number, write the numbers in clockwise rotation starting from the common number to find the opposite pairs.
*   **Block/Cube Counting:** Counting the total number of blocks in a 3D stack. You MUST count the hidden blocks supporting the upper layers. (Length $\\times$ Width $\\times$ Height for solid stacks).
*   **Figure Matrix:** Solving a 3x3 grid of shapes by identifying horizontal and vertical rule transitions (e.g., Row 1 + Row 2 = Row 3).
*   **Dot Situation:** Finding the region in the options that satisfies the exact same overlapping conditions of dots placed in the question figure (e.g., a dot located inside a circle and triangle, but outside the square).
""",
    "syl-afcat-spatial.md": """# Spatial & Non-Verbal Reasoning (AFCAT)

---

## **AFCAT Spatial Reasoning Profile**

The Air Force Common Admission Test (AFCAT) places an extremely high weightage on Non-Verbal (Spatial) Reasoning. This section tests your raw cognitive processing speed and visual-spatial intelligence, which are crucial skills for military aviators.

### **High-Yield AFCAT Topics:**

1.  **Dot Situation (Crucial for AFCAT):**
    *   You are given a complex figure with overlapping shapes (circle, square, triangle) and one or more dots placed in specific intersections.
    *   *Task:* Find the option where the exact same intersection condition exists.
    *   *Strategy:* Define the condition logically. (e.g., "Dot 1 is inside Circle and Triangle only. Dot 2 is inside Square only"). Eliminate options where this overlap is physically impossible.
2.  **Venn Diagrams:**
    *   Relating three given words (e.g., Doctors, Men, Musicians) via overlapping circles.
    *   *Strategy:* Always ask "Are ALL X also Y?", "Are SOME X also Y?", or "Are NO X also Y?"
3.  **Embedded Figures:**
    *   Finding a simple shape hidden in a complex web of lines.
    *   *Strategy:* Look for unique angles (like a sharp acute angle or a T-junction). The embedded figure is almost never rotated in AFCAT exams.
4.  **Pattern Completion:**
    *   Filling in the 4th quadrant of a symmetrical design.
    *   *Strategy:* Identify the type of symmetry (Axial/Mirror or Rotational). Look at the quadrant diagonally opposite to the missing one; if the pattern has central symmetry, the answer is a $180^\\circ$ rotated version of it.
""",
    "afcat-r-analogy.md": """# Verbal Analogy (AFCAT)

---

## **Analogy Basics**

Analogy means "correspondence" or "similarity". You must identify the relationship between a given pair of words/letters/numbers and apply the exact same relationship to find the missing term.

### **1. Word Analogy**
*   **Types of Relationships:**
    *   Synonyms / Antonyms (e.g., Huge : Gigantic :: Tiny : Small)
    *   Worker & Tool (e.g., Blacksmith : Anvil :: Surgeon : Scalpel)
    *   Product & Raw Material (e.g., Paper : Pulp :: Fabric : Yarn)
    *   Country & Capital / Currency (e.g., Japan : Yen :: UK : Pound)
    *   Animal & Young One / Sound (e.g., Dog : Puppy :: Horse : Foal)

### **2. Letter Analogy**
*   **Positional Shift:** Letters shift forward or backward by a constant number (e.g., A : C (+2) :: D : F (+2)).
*   **Opposite Pairs:** Letters are replaced by their reverse alphabetical counterpart.
    *   *Memorize Pairs:* A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N.
    *   *Rule:* The sum of the positional values of opposite letters is always **27** (e.g., G is 7, T is 20. $7+20 = 27$).

### **3. Number Analogy**
*   Identify the mathematical rule applied to the first pair.
*   *Order of Preference for Rules (if multiple apply):*
    1.  Prime Numbers
    2.  Cubes / Squares
    3.  Multiplication / Division
    4.  Addition / Subtraction
*   *Example:* 4 : 64 :: 5 : ? (Rule is $x^3$. Answer: 125).
""",
    "afcat-r-classification.md": """# Classification / Odd One Out

---

## **Classification Basics**

In classification, you are given a group of items (words, letters, or numbers). All items except one share a common property or follow a specific rule. You must identify the "Odd One Out".

### **1. Word Classification**
*   Identify the category that most words belong to. The one that doesn't fit the category is the answer.
*   *Example:* (A) Copper (B) Iron (C) Brass (D) Zinc.
    *   *Logic:* Copper, Iron, and Zinc are elements/metals. **Brass** is an alloy.

### **2. Letter Classification**
*   Check the positional gaps (spacing) between the letters in each group.
*   *Example:* (A) CEG (B) IKM (C) OQS (D) VXZ
    *   *Logic:* C(+2)E(+2)G; I(+2)K(+2)M; O(+2)Q(+2)S. But V(+2)X(+2)Z. Wait, V(22), X(24), Z(26). Let's try another: (A) BDF (B) HJL (C) NPR (D) TUX.
    *   *Answer:* TUX. The others follow a +2, +2 pattern. T(20), U(21), X(24) does not.

### **3. Number Classification**
*   Apply the same hierarchy of logic as in Number Analogy:
    1.  **Prime vs Composite** (e.g., 7, 11, 13, 15 -> 15 is composite).
    2.  **Squares/Cubes** (e.g., 16, 25, 36, 42 -> 42 is not a perfect square).
    3.  **Divisibility** (e.g., all numbers are divisible by 3 except one).
    4.  **Sum of Digits** (e.g., 123 (sum 6), 231 (sum 6), 312 (sum 6), 412 (sum 7)).
""",
    "afcat-r-series.md": """# Series Completion

---

## **Series Completion Basics**

You must identify the pattern in a sequence of numbers, letters, or figures and determine the next term or find the missing term.

### **1. Number Series**
*   **Arithmetic Series:** Constant difference (+ or -).
*   **Geometric Series:** Constant ratio ($\times$ or $\\div$).
*   **Squares/Cubes Series:** e.g., 1, 4, 9, 16, ? (25). Sometimes offset like $n^2 + 1$ or $n^3 - n$.
*   **Double/Alternating Series:** Two different series mixed together. If the series goes up and down (e.g., 10, 5, 12, 6, 14, 7), look at alternate terms (10, 12, 14 and 5, 6, 7).
*   **Fibonacci/Addition of previous terms:** e.g., 1, 1, 2, 3, 5, 8, ? (13).

### **2. Letter Series**
*   Write down the positional values (A=1 ... Z=26) and treat it like a number series.
*   *Example:* A, C, F, J, O, ?
    *   *Logic:* +2, +3, +4, +5, +6. O(15) + 6 = 21 (U).

### **3. Continuous Pattern Series**
*   A sequence of small letters with blanks. e.g., `a_b_c_a_bc_b_c`
*   *Strategy:*
    1.  Count total spaces (including blanks). Say it's 12.
    2.  Divide into equal groups (usually 3 or 4 letters per group). e.g., 12 = $4 \\times 3$ or $3 \\times 4$.
    3.  Look for a repeating block (e.g., `abc abc abc`).
    4.  Fill in the blanks to complete the cyclic pattern.
""",
    "afcat-r-coding.md": """# Coding and Decoding

---

## **Coding-Decoding Strategies**

A code is a system of signals/rules. You must deduce the rule from the given example and apply it to a new word.

### **1. Letter Coding (Positional Shift)**
*   Letters shift by a fixed number.
*   *Example:* If CAT is coded as ECV, how is DOG coded?
    *   *Logic:* C(+2) = E, A(+2) = C, T(+2) = V.
    *   *Apply:* D(+2) = F, O(+2) = Q, G(+2) = I. Answer: FQI.
*   *Variations:* The shift can be increasing (+1, +2, +3), alternating (+1, -1, +1), or reversed (first letter of word becomes last letter of code).

### **2. Number Coding**
*   Words are assigned numerical values based on the position of letters.
*   *Example:* If BAT = 23, CAT = 24, then DOG = ?
    *   *Logic:* B(2) + A(1) + T(20) = 23.
    *   *Apply:* D(4) + O(15) + G(7) = 26.
*   *Variations:* Sum of positions, Product of positions, or Sum of *reverse* positions.

### **3. Message (Fictitious Language) Coding**
*   Given coded sentences, find the code for specific words.
*   *Example:* "tee see pee" means "drink fruit juice"; "see kee lee" means "juice is sweet".
    *   *Strategy:* Find the common word in both sentences ("juice"). Find the common code word ("see"). Therefore, "juice" = "see".

### **4. Substitution Coding**
*   *Example:* If 'white' is called 'blue', 'blue' is called 'red', 'red' is called 'yellow'. What is the color of human blood?
    *   *Strategy:* Don't trace the whole chain. Blood is 'red'. According to the rule, 'red' is called **'yellow'**. Stop there.
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/military-aptitude", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Military notes part 1 generated.")
