import os

os.makedirs("evolved_notes/military-aptitude", exist_ok=True)

notes_data = {
    "afcat-r-directions.md": """# Direction Sense Test

---

## **Direction Sense Strategies**

These questions test your ability to track movement on a 2D plane. 

### **1. Core Concepts**
*   **Cardinal Directions:** North (Top), South (Bottom), East (Right), West (Left).
*   **Sub-Directions:** North-East (NE), North-West (NW), South-East (SE), South-West (SW).
*   Always start by drawing a small compass on your rough sheet. Assume you are facing North unless stated otherwise.
*   **Left/Right Turns:**
    *   Facing North: Left is West, Right is East.
    *   Facing South: Left is East, Right is West. (Reverse of North).

### **2. Calculating Distance (Displacement)**
*   Questions usually ask for "how far from the starting point" (shortest distance/displacement), NOT total distance travelled.
*   **Use Pythagoras Theorem:** $Hypotenuse^2 = Base^2 + Perpendicular^2$. ($H = \\sqrt{B^2 + P^2}$).
*   Cancel out opposite movements: If a person walks 10km East, then 4km West, net movement is 6km East.

### **3. Shadow Rules**
*   **Sunrise (Morning):** Sun is in the East. **Shadows fall to the West.**
    *   If you face North in the morning, your shadow falls to your Left.
*   **Sunset (Evening):** Sun is in the West. **Shadows fall to the East.**
    *   If you face North in the evening, your shadow falls to your Right.
*   **12:00 Noon:** The sun is directly overhead. **No shadow is formed.**
""",
    "afcat-r-clock-calendar.md": """# Clock and Calendar

---

## **1. Clock Basics**

A clock face is a circle of $360^\\circ$ divided into 60 minute spaces or 12 hour spaces.
*   **Speeds of the Hands:**
    *   Minute hand travels $360^\\circ$ in 60 minutes. Speed = **$6^\\circ \\text{ per minute}$**.
    *   Hour hand travels $360^\\circ$ in 12 hours (720 min). Speed = **$0.5^\\circ \\text{ per minute}$**.
    *   *Relative Speed:* The minute hand gains $5.5^\\circ$ ($6 - 0.5$) over the hour hand every minute.

### **Important Formula: Angle between Hands**
To find the angle $\\theta$ between the hour ($h$) and minute ($m$) hands:
**$\\theta = |30h - \\frac{11}{2}m|$**

### **Standard Frequencies (in 12 Hours)**
*   Hands Coincide ($0^\\circ$): **11 times** (They do not coincide between 11 and 1).
*   Hands are Opposite ($180^\\circ$): **11 times**.
*   Hands are at Right Angles ($90^\\circ$): **22 times**.

---

## **2. Calendar Basics (Odd Days)**

The concept of "Odd Days" (days remaining after grouping into complete weeks of 7 days) is key to solving calendar problems.

*   **Ordinary Year:** 365 days = 52 weeks + **1 Odd Day**.
*   **Leap Year:** 366 days = 52 weeks + **2 Odd Days**. (Divisible by 4, but century years must be divisible by 400).

### **Odd Days in Centuries:**
*   100 years: **5 odd days**.
*   200 years: **3 odd days**.
*   300 years: **1 odd day**.
*   400 years: **0 odd days**. (And any multiple of 400 years has 0 odd days: 800, 1200, 1600, 2000).

### **Finding the Day of the Week**
Total odd days from 1 AD to the given date:
*   $0$ = Sunday, $1$ = Monday, $2$ = Tuesday, $3$ = Wednesday, $4$ = Thursday, $5$ = Friday, $6$ = Saturday.
""",
    "afcat-r-venn.md": """# Logical Venn Diagrams

---

## **Venn Diagram Strategies**

Venn diagrams represent relationships between different classes or groups using geometric shapes (usually circles). You must choose the diagram that best illustrates the relationship among three given words.

### **The Three Primary Relationships**
1.  **"All" (Subset):** One class is completely contained within another. Represented by concentric circles.
    *   *Example:* Seconds, Minutes, Hours. (All seconds are in minutes, all minutes in hours).
2.  **"No" (Disjoint):** Classes have nothing in common. Represented by separate circles.
    *   *Example:* Doctors, Lawyers, Engineers. (Professions are distinct).
3.  **"Some" (Partial Overlap):** Classes share some common members, but not all. Represented by intersecting circles.
    *   *Example:* Men, Doctors. (Some men are doctors, some doctors are men).

### **Solving Strategy**
*   Do NOT try to visualize all three together immediately.
*   **Step 1:** Pick any two words and determine their relationship (All, Some, or No).
*   **Step 2:** Pick another pair and do the same.
*   **Step 3:** Combine them.
    *   *Example:* Women, Mothers, Doctors.
        *   Mothers & Women: ALL mothers are women (Mothers circle inside Women circle).
        *   Mothers & Doctors: SOME mothers are doctors (Intersecting).
        *   Women & Doctors: SOME women are doctors (Intersecting).
        *   *Result:* A circle (Mothers) inside a larger circle (Women), with a third circle (Doctors) intersecting both.
""",
    "afcat-r-syllogism.md": """# Syllogism

---

## **Syllogism Strategies**

Syllogism involves drawing logical conclusions from two or more given statements (premises) regardless of whether they make real-world sense. (e.g., "All cats are dogs").

### **1. Standard Statements & Venn Diagrams**

| Statement Type | Meaning | Venn Diagram Visualization |
| :--- | :--- | :--- |
| **Universal Affirmative (A)** | "All A are B" | Circle A entirely inside Circle B. |
| **Universal Negative (E)** | "No A is B" | Circle A and Circle B are completely separate. |
| **Particular Affirmative (I)** | "Some A are B" | Circle A and Circle B overlap partially. |
| **Particular Negative (O)** | "Some A are not B" | A part of Circle A is explicitly kept outside Circle B. |

### **2. Golden Rules for Solving**
1.  **Draw all possible diagrams:** A conclusion is only valid if it is true in **EVERY SINGLE POSSIBLE** Venn diagram that can be drawn from the statements. If a conclusion is false in even one diagram, it is invalid.
2.  **Affirmative Premises:** If all statements are positive ("All" or "Some"), a negative conclusion ("No" or "Some not") is NEVER valid.
3.  **"Some" is weak:** The statement "Some A are B" does NOT necessarily imply "Some A are not B". It just means at least one A is B.
4.  **Either/Or Case:** Occurs when two conclusions form a complementary pair (e.g., "Some A are B" and "No A is B") AND both are individually invalid. One of them MUST be true.
""",
    "afcat-r-conclusions.md": """# Statements and Conclusions

---

## **Statements & Conclusions Strategies**

You are given a statement followed by conclusions. You must decide which conclusion logically follows *strictly* from the information given in the statement.

### **Golden Rules**
1.  **Stick to the Premise:** The conclusion must be a direct logical deduction from the statement. Do NOT use outside general knowledge unless it is a universally accepted basic fact required to understand the sentence.
2.  **Beware of Absolutes:** Conclusions containing extreme or absolute words like **"All", "Every", "Always", "Never", "None", "Only", "Exactly"** are almost always **INVALID** unless the original statement itself uses such absolute terms.
    *   *Statement:* Many smokers suffer from cancer.
    *   *Conclusion 1:* All smokers will get cancer. (Invalid - "All" is too extreme).
    *   *Conclusion 2:* Smoking is a cause of cancer. (Valid).
3.  **Moderate Language:** Conclusions using words like "Some", "Most", "May", "Might", "Can be" are more likely to be valid.
4.  **No Advice/Courses of Action:** A conclusion is a deduction of fact. If a conclusion suggests what *should* be done (e.g., "The government should ban X"), it is a Course of Action, not a logical conclusion.
""",
    "afcat-r-assumptions.md": """# Statements and Assumptions

---

## **Statements & Assumptions Strategies**

An assumption is something that is supposed or taken for granted. In these questions, the statement is made by an author who *assumes* certain things to be true before making the statement. You must identify which assumption is **implicit** (hidden/built-in) in the statement.

### **Golden Rules**
1.  **The "Why" Test:** Ask yourself, "Why would the author make this statement?" The implicit assumption is the foundation of the author's logic.
2.  **The Negation Test (Crucial):** If you negate (make opposite) the assumption, does the original statement become meaningless or illogical?
    *   *If Yes $\\rightarrow$ The assumption is IMPLICIT.*
    *   *If No $\\rightarrow$ The assumption is NOT implicit.*
3.  **Assumptions are usually positive:** If the statement is an advertisement, appeal, or notice, the implicit assumption is usually that people will read it, respond positively to it, and that it will have the desired effect.
    *   *Statement:* "Donate blood to save lives."
    *   *Assumption 1:* Some people will donate blood. (Implicit).
    *   *Assumption 2:* Blood cannot be manufactured artificially. (Implicit, otherwise why ask for donations).
4.  **Red Flags:** Like conclusions, assumptions containing absolute words (All, Only, Never) are generally NOT implicit.
""",
    "afcat-r-fig-analogy.md": """# Figure Analogy (Non-Verbal)

---

## **Figure Analogy Strategies**

Similar to verbal analogy, you must find the rule governing the change from Figure A to Figure B, and apply that exact same rule to Figure C to find Figure D.

### **Common Transformation Types**
1.  **Rotation:** The entire figure or parts of it rotate. Check the angle:
    *   $45^\\circ, 90^\\circ, 135^\\circ, 180^\\circ$.
    *   Direction: Clockwise (CW) or Anti-Clockwise (ACW).
2.  **Reflection / Inversion:**
    *   *Horizontal Flip (Mirror Image):* Left becomes right.
    *   *Vertical Flip (Water Image):* Top becomes bottom.
3.  **Element Operations:**
    *   *Addition/Deletion:* Lines or shapes are added or removed.
    *   *Substitution:* One shape is replaced by a completely new shape.
    *   *Size Change:* Inner shape becomes outer, outer becomes inner.
4.  **Shading:** A shaded region becomes unshaded, or vice-versa.

### **The "Isolation" Strategy**
*   Complex figures have multiple elements changing simultaneously.
*   Do NOT try to process the whole image at once.
*   **Isolate ONE component** (e.g., just the arrow, or just the shading). Find its rule and apply it to the options. This usually eliminates 2 or 3 wrong options immediately.
""",
    "afcat-r-fig-class-series.md": """# Figure Classification & Series (Non-Verbal)

---

## **1. Figure Classification (Odd One Out)**

You are given 4 or 5 figures. All except one share a common characteristic. Find the odd one out.

*   **Key Checks:**
    1.  **Number of Sides/Lines:** (e.g., Triangle, Square, Pentagon, but one is a Circle).
    2.  **Symmetry:** Is the figure symmetrical along an axis?
    3.  **Rotation vs. Reflection:** If you rotate all the shapes, do they look identical? Often, one shape is a *mirror image* of the others and cannot be obtained by rotation alone. (This is a very common AFCAT trick).
    4.  **Ratio/Position of Elements:** Are the dots always inside? Is the shaded region always half the total area?

---

## **2. Figure Series**

A sequence of figures changes according to a specific rule. You must predict the next figure.

*   **Key Checks:**
    1.  **Step-by-Step Rotation:** Does the main element rotate by $45^\\circ$, then $90^\\circ$, then $135^\\circ$?
    2.  **Movement of Elements:** In a grid (e.g., 3x3), track how a specific symbol moves (e.g., moves one space clockwise in each frame).
    3.  **Addition/Subtraction:** The number of lines/leaves/dots increases or decreases (e.g., 1 line, then 2, then 3).
    4.  **Alternating Series:** Frame 1 relates to Frame 3, Frame 2 relates to Frame 4.
*   **Strategy:** Again, use the **Isolation Strategy**. Pick the most prominent changing element, track its path, and eliminate options.
""",
    "afcat-r-fig-completion.md": """# Figure/Pattern Completion (Non-Verbal)

---

## **Pattern Completion Strategies**

You are given a complex geometric pattern with one section (usually the bottom-right quadrant) missing. You must select the option that perfectly completes the design.

### **1. Identify the Type of Symmetry**
Before looking at the options, analyze the 3 completed quadrants to determine the overall symmetry of the design:
*   **Axial (Mirror) Symmetry:** The left half is a mirror image of the right half, OR the top half is a mirror image of the bottom half.
    *   *Solution:* Find the mirror image of the adjacent quadrant.
*   **Central (Rotational) Symmetry:** The pattern looks the same when rotated by $90^\\circ$ or $180^\\circ$.
    *   *Solution:* The missing quadrant will be exactly the same as (or a rotated version of) the diagonally opposite quadrant.
*   **Translational (Tile) Symmetry:** The exact same pattern simply repeats in every quadrant without rotation or reflection.

### **2. Elimination Strategy**
*   Look at the borders where the missing piece touches the existing pattern.
*   If a line in the existing pattern approaches the missing box, it must continue seamlessly into the missing piece.
*   Eliminate options that have lines going in the wrong direction, missing crucial intersecting points, or having extra unwanted shapes.
""",
    "afcat-r-embedded.md": """# Embedded Figures (Non-Verbal)

---

## **Embedded Figures Strategies**

You are given a simple target figure ($X$) and four complex pattern options. You must find the option in which the target figure is perfectly hidden/embedded.

### **Golden Rules for Embedded Figures**

1.  **Orientation matters (Usually):** In defense exams, the embedded figure is almost always hidden in its **original orientation**. Do not rotate the target figure in your mind unless no options match the original orientation.
2.  **Proportions matter:** The relative lengths of lines and the angles must match exactly. A square cannot be embedded in a rectangle.
3.  **Find the "Anchor":** Look for a unique feature in the target figure—a sharp acute angle, a 'T' junction, a curve meeting a straight line, or a specific zig-zag. Scan the complex figures specifically for that unique feature.
4.  **Trace it out:** Once you think you've found it, mentally trace every single line of the target figure onto the complex design to ensure no part is missing.
5.  **Elimination:** Reject options that lack a specific necessary angle or curve present in the target.
""",
    "afcat-r-dot.md": """# Dot Situation (Non-Verbal)

---

## **Dot Situation Strategies (Highly Tested in AFCAT)**

You are given a problem figure consisting of overlapping geometric shapes (Circle, Square, Triangle, Rectangle) with one or more dots placed in specific intersecting regions. You must find the option where the exact same intersecting regions exist.

### **The Logical Breakdown Method**

1.  **Define the Condition for each Dot:**
    Do not just look at the image; write down the logical condition for each dot.
    *   *Example 1:* Dot 1 is INSIDE the Circle and Triangle, but OUTSIDE the Square.
    *   *Example 2:* Dot 2 is INSIDE the Square only (Outside everything else).
    *   *Example 3:* Dot 3 is in the intersection of ALL THREE shapes.
2.  **Test the Options Systematically:**
    *   Take the hardest condition first (e.g., intersection of all three). Check if that region exists in Option A. If not, eliminate A immediately.
    *   Take the next condition. If a dot needs to be in Circle and Triangle but NOT the Square, check if the Circle and Triangle overlap *without* the Square cutting through that entire overlap. If the Square covers their entire intersection, the condition is impossible. Eliminate.
3.  **Never assume proportions:** The shapes in the options might be resized or rotated compared to the question figure. Focus purely on the **logical intersections**, not the visual similarity.
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/military-aptitude", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Military notes part 2 generated.")
