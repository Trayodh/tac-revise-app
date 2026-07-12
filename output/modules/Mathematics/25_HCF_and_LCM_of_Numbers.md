# HCF and LCM of Numbers: High-Yield Topic Module

## Page 1: Core Concepts & Foundational Methods (Primary Textbook Context)

### 1. Least Common Multiple (LCM)

**Definition:** The Least Common Multiple (LCM) of two or more numbers is the smallest positive integer that is a multiple of all the given numbers.

**Methods to Find LCM:**

#### A. Prime Factorization Method
1.  Express each given number as a product of its prime factors.
2.  For each prime factor, take the highest power that appears in any of the factorizations.
3.  Multiply these highest powers together to get the LCM.

**Example 1: LCM of 30, 250, 490**
*   30 = 2 × 3 × 5
*   250 = 2 × 5³
*   490 = 2 × 5 × 7²
*   **LCM** = 2¹ × 3¹ × 5³ × 7² = 2 × 3 × 125 × 49 = **36750**

#### B. Division Method
1.  Write the given numbers in a row.
2.  Divide them by a common prime divisor. Write the quotients below the numbers.
3.  If a number is not divisible, write it as such in the next row.
4.  Continue dividing the quotients until all numbers become 1.
5.  Multiply all the divisors to get the LCM.

**Visual Descriptor (Division Method Flow):**
```
Start with numbers: N1, N2, N3...
  ↓
Find smallest prime 'P' that divides at least two numbers.
  ↓
Divide N1/P, N2/P, N3/P... (if not divisible, carry down)
  ↓
Repeat until all numbers in the row become 1.
  ↓
LCM = Product of all prime divisors used.
```

**Example 2: LCM of 120, 144, 160, 180**
```
2 | 120, 144, 160, 180
2 |  60,  72,  80,  90
2 |  30,  36,  40,  45
3 |  15,  18,  20,  45
3 |   5,   6,  20,  15
5 |   5,   2,  20,   5
2 |   1,   2,   4,   1
  |   1,   1,   2,   1
  |   1,   1,   1,   1
```
*   **LCM** = 2 × 2 × 2 × 3 × 3 × 5 × 2 × 2 = 2⁵ × 3² × 5¹ = 32 × 9 × 5 = **1440**

### 2. Highest Common Factor (HCF)

**Definition:** The Highest Common Factor (HCF) of two or more numbers is the largest number that divides all the given numbers exactly. It is also known as the Greatest Common Divisor (GCD).
**Key Property:** HCF is always a factor of LCM.

**Methods to Find HCF:**

#### A. Prime Factorization Method
1.  Express each given number as a product of its prime factors.
2.  For each common prime factor, take the least power that appears in any of the factorizations.
3.  Multiply these least powers together to get the HCF.

**Example 5: HCF of 65, 75, 105**
*   65 = 5 × 13
*   75 = 3 × 5²
*   105 = 3 × 5 × 7
*   **HCF** = 5¹ = **5** (Common prime factor is 5, least power is 1)

#### B. Division Method
For two numbers:
1.  Divide the larger number by the smaller number.
2.  Take the remainder as the new divisor and the previous divisor as the new dividend.
3.  Repeat this process until the remainder is zero.
4.  The last divisor is the HCF.

For three or more numbers:
1.  Find the HCF of any two numbers.
2.  Then, find the HCF of the result from step 1 and the third number.
3.  Continue this process for all numbers.

**Visual Descriptor (Division Method for HCF Flow):**
```
Start with two numbers: Large, Small
  ↓
Divide Large by Small -> Remainder R1
  ↓
If R1 = 0, HCF = Small
  ↓
If R1 ≠ 0, New Large = Small, New Small = R1
  ↓
Repeat until Remainder is 0.
  ↓
HCF = Last Divisor
```

**Example 6: HCF of 204, 1190, 1445**
1.  **HCF of 1190 and 1445:**
    ```
    1190 ) 1445 ( 1
           1190
           ----
            255 ) 1190 ( 4
                  1020
                  ----
                   170 ) 255 ( 1
                         170
                         ----
                          85 ) 170 ( 2
                               170
                               ----
                                 0
    ```
    HCF (1190, 1445) = 85

2.  **HCF of 85 and 204:**
    ```
    85 ) 204 ( 2
         170
         ----
          34 ) 85 ( 2
               68
               ----
                17 ) 34 ( 2
                     34
                     ----
                       0
    ```
    HCF (85, 204) = 17
*   Hence, HCF (204, 1190, 1445) = **17**

## Page 2: Important Points & Special Cases (Primary Textbook Context)

### 3. Important Points related to LCM

1.  **Least number leaving specific remainders:**
    The least number which when divided by x, y, and z leaving remainders a, b, and c respectively, is given by `[LCM of (x, y, z) - p]`, where `p = (x - a) = (y - b) = (z - c)`.
    **Example 3:** Find the least number which when divided by 42, 72, and 84 leaves remainders 25, 55, and 67 respectively.
    *   Differences: (42 - 25) = 17, (72 - 55) = 17, (84 - 67) = 17. So, `p = 17`.
    *   LCM (42, 72, 84) = 504
    *   Required number = 504 - 17 = **487**

2.  **Least number leaving the same remainder:**
    The least number which when divided by x, y, and z leaving the same remainder R in each case is given by `[LCM of (x, y, z) + R]`.

3.  **Combined Remainder and Divisibility Condition:**
    **Example 4:** Find the least number which when divided by 5, 6, 7, and 8 leaves a remainder 3 but when divided by 9, leaves no remainder.
    *   LCM (5, 6, 7, 8) = 840.
    *   Number is of the form `840k + 3`.
    *   We need `(840k + 3)` to be divisible by 9.
    *   For k=1: 840(1) + 3 = 843 (8+4+3=15, not div by 9)
    *   For k=2: 840(2) + 3 = 1680 + 3 = 1683 (1+6+8+3=18, divisible by 9)
    *   Required number = **1683**

### 4. Important Points related to HCF

1.  **HCF of pairwise coprime numbers:**
    For integers x, y, and z, if HCF(x, y) = 1 and HCF(x, z) = 1, then HCF(x, y, z) is always 1. (This implies x is coprime to both y and z).

2.  **Greatest number leaving specific remainders:**
    The greatest number that will divide x, y, and z leaving remainders a, b, and c respectively, is given by `HCF of [(x - a), (y - b), (z - c)]`.
    **Example 7:** Find the greatest number which will divide 400, 435, and 541 leaving 9, 10, and 14 as remainders respectively.
    *   Numbers to find HCF of: (400 - 9), (435 - 10), (541 - 14)
    *   = HCF of (391, 425, 527) = **17**

3.  **Greatest number leaving the same remainder:**
    The greatest number that will divide x, y, and z leaving the same remainder in each case is given by `HCF of [|x - y|, |y - z|, |z - x|]`.

4.  **HCF of (a+b, a-b):**
    **Example 8:** For any integers 'a' and 'b' with HCF(a, b) = 1, what is HCF(a+b, a-b) equal to?
    *   If a=9, b=8 (HCF(9,8)=1): HCF(9+8, 9-8) = HCF(17, 1) = 1
    *   If a=23, b=17 (HCF(23,17)=1): HCF(23+17, 23-17) = HCF(40, 6) = 2
    *   Hence, HCF(a+b, a-b) can be **either 1 or 2**.

### 5. HCF and LCM of Fractions

*   **HCF of fractions** = `HCF of Numerators / LCM of Denominators`
*   **LCM of fractions** = `LCM of Numerators / HCF of Denominators`

**Example 9: HCF of 14/3, 21/9, 7/15**
*   HCF of numerators (14, 21, 7) = 7
*   LCM of denominators (3, 9, 15) = 45
*   HCF of fractions = **7/45**

### 6. Relation between LCM and HCF of Two Numbers

*   **Product of two numbers = (Their HCF) × (Their LCM)**

**Example 10:** The LCM of two numbers is 90 times their HCF. The sum of LCM and HCF is 1456. If one number is 160, find the other.
*   Let HCF = x. Then LCM = 90x.
*   LCM + HCF = 1456 => 90x + x = 1456 => 91x = 1456 => x = 16.
*   So, HCF = 16, LCM = 90 × 16 = 1440.
*   Product of two numbers = HCF × LCM
*   160 × (Other number) = 16 × 1440
*   Other number = (16 × 1440) / 160 = 1440 / 10 = **144**

## Page 3: AI Contextual Enrichment & Strategic Insights

*(Note: As no specific external notes were provided, this section draws upon general mathematical principles, common exam strategies, and conceptual depth relevant to NDA, CDS, and AFCAT exams.)*

### 1. Deeper Understanding of HCF and LCM

*   **HCF as a "Building Block":** HCF represents the largest common "chunk" or "divisor" that can be extracted from all numbers. Think of it as finding the largest possible square tile to cover a rectangular floor without cutting.
*   **LCM as a "Meeting Point":** LCM represents the earliest point where multiples of all numbers coincide. Imagine multiple gears rotating; the LCM is when they all return to their starting relative positions. Or, bells ringing at different intervals; the LCM is when they all toll together again.

**Visual Descriptor (Prime Factorization for HCF/LCM):**
Imagine Venn Diagrams for prime factors.
*   **HCF:** The intersection of all prime factor sets (common factors with lowest powers).
*   **LCM:** The union of all prime factor sets (all factors with highest powers).

Example: A=2²×3×5, B=2×3²×7
*   Common factors: 2, 3
*   HCF: 2¹×3¹ = 6 (Intersection)
*   All factors: 2, 3, 5, 7
*   LCM: 2²×3²×5¹×7¹ = 4×9×5×7 = 1260 (Union)

### 2. Common Pitfalls and How to Avoid Them

*   **Confusing HCF and LCM:** A common mistake is using the "highest power" for HCF or "lowest power" for LCM. Remember:
    *   **HCF**: **H**ighest **C**ommon **F**actor -> **L**east powers of **C**ommon factors.
    *   **LCM**: **L**east **C**ommon **M**ultiple -> **H**ighest powers of **A**ll factors.
*   **Remainder Problems:**
    *   **"Leaves remainders a, b, c..." (HCF type):** Subtract remainders *first*, then find HCF of the differences. `HCF(x-a, y-b, z-c)`.
    *   **"Leaves remainders a, b, c... (but common difference p)" (LCM type):** Find LCM, then subtract the common difference `p`. `LCM(x,y,z) - p`.
    *   **"Leaves same remainder R" (LCM type):** Find LCM, then add R. `LCM(x,y,z) + R`.
    *   **"Leaves no remainder" (HCF type):** This means the number is a factor, so directly find HCF.
*   **Fractions:** Always remember the "flip" in the formula: HCF of fractions uses HCF of numerators and LCM of denominators, while LCM of fractions uses LCM of numerators and HCF of denominators.

### 3. Mnemonics and Formulas at a Glance

*   **Fractions Mnemonic:**
    *   To find **HCF** of fractions, put **HCF** on **Top** (Numerator).
    *   To find **LCM** of fractions, put **LCM** on **Top** (Numerator).
    *   The denominator always gets the *other* operation.
        *   HCF(Num)/LCM(Den)
        *   LCM(Num)/HCF(Den)

*   **Product Relation:** `N1 × N2 = HCF(N1, N2) × LCM(N1, N2)`
    *   This is crucial for problems involving two numbers where HCF, LCM, and one number are given.
    *   **Important:** This relation *only* holds for two numbers, not for three or more.

### 4. Practical Applications & Problem Types (Exam Focus)

*   **Tiling/Cutting Problems (HCF):** When you need to cut something into the largest possible equal pieces, or tile a floor with the largest possible square tiles, you're looking for HCF.
    *   *Example 19:* Largest square slab to pave a room. This is HCF of length and breadth.
*   **Bells/Lights/Circular Track Problems (LCM):** When events repeat at different intervals and you need to find when they will occur together again, you're looking for LCM.
    *   *Example 13:* Runners on a circular track.
    *   *Example 18:* Raj, Rachit, Asha running.
    *   *Example 20:* Bells tolling together.
*   **Distribution Problems (HCF):** Distributing items into the maximum number of equal groups.
    *   *Example 21:* Planting trees in rows of one variety.
*   **Finding a Number based on Remainders (HCF/LCM):** As covered in "Important Points," these are standard exam questions.
*   **Ratio Problems with HCF/LCM:** If numbers are in ratio `a:b`, they can be represented as `ax` and `bx`, where `x` is their HCF.
    *   `LCM = x * a * b`
    *   `Product = (ax) * (bx) = x²ab`
    *   `Product = HCF * LCM => x²ab = x * (xab)` (This confirms the relation).

### 5. Advanced Concepts/Properties (for higher-level questions)

*   **HCF(a, b) = HCF(a, b-a) = HCF(a, b+a)** (Euclidean Algorithm principle, useful for simplifying HCF calculations, as seen in PYQ 24).
    *   HCF(a, b) = HCF(a, b mod a)
*   **HCF(a, b, c) = HCF(HCF(a, b), c)** (Associative property, used in Division Method for 3+ numbers).
*   **If HCF(a, b) = 1, then HCF(a+b, a-b) is 1 or 2.** (As shown in Example 8). This is because `HCF(a+b, a-b)` must divide `(a+b) + (a-b) = 2a` and `(a+b) - (a-b) = 2b`. Since HCF(a,b)=1, the common factor can only be 1 or 2.

## Page 4: AI Contextual Enrichment (Continued)

### 6. Strategy for Solving Word Problems

1.  **Identify the Goal:** Are you looking for the "largest," "greatest," "maximum" (HCF) or "least," "smallest," "minimum," "first time together" (LCM)? This is the most critical first step.
2.  **Extract Numbers:** List all relevant numbers from the problem statement.
3.  **Handle Remainders (if any):**
    *   If "greatest number that divides X, Y, Z leaving remainders A, B, C": Calculate (X-A), (Y-B), (Z-C) and find their HCF.
    *   If "least number that divides X, Y, Z leaving remainders A, B, C (with common difference P)": Calculate LCM(X,Y,Z) - P.
    *   If "least number that divides X, Y, Z leaving same remainder R": Calculate LCM(X,Y,Z) + R.
    *   If "least number that divides X, Y, Z leaving remainder R, AND is divisible by D": Calculate LCM(X,Y,Z) * k + R, then test values of k until it's divisible by D.
4.  **Apply Method:** Use prime factorization or division method as appropriate.
5.  **Check Units/Context:** Ensure your answer makes sense in the context of the problem (e.g., seconds vs. minutes, meters vs. centimeters).

### 7. Understanding "Co-prime" or "Relatively Prime" Numbers

*   Two numbers are co-prime (or relatively prime) if their HCF is 1.
*   Example: HCF(8, 15) = 1. (8 = 2³, 15 = 3×5. No common prime factors).
*   **Property:** If two numbers are co-prime, their LCM is simply their product.
    *   LCM(8, 15) = 8 × 15 = 120. (Since HCF=1, Product = HCF × LCM => 8×15 = 1 × LCM).
*   This concept is important for problems like Example 8 (HCF(a,b)=1) and problems involving ratios where the common factor is implicitly 1.

### 8. The Concept of "Minimum Number of Rows" vs. "Maximum Number of Trees per Row"

*   **Example 21 (Planting Trees):** "21 mango trees, 42 apple trees and 56 orange trees have to be planted in rows such that each row contains the same number of trees of one variety only. What is the minimum number of rows...?"
    *   To get the *minimum* number of rows, you need to plant the *maximum* number of trees in each row.
    *   The maximum number of trees per row must be a common divisor of 21, 42, and 56. This means finding the **HCF**.
    *   HCF(21, 42, 56) = HCF(3×7, 2×3×7, 2³×7) = 7.
    *   So, 7 trees per row.
    *   Number of mango rows = 21/7 = 3
    *   Number of apple rows = 42/7 = 6
    *   Number of orange rows = 56/7 = 8
    *   Total (minimum) rows = 3 + 6 + 8 = **17**.
    *   This demonstrates how an HCF calculation can lead to an "LCM-like" result (minimum rows) by maximizing the common divisor.

### 9. Working with Algebraic Expressions (PYQ 13)

*   When finding HCF/LCM of algebraic expressions, treat the variables like prime factors.
*   **HCF:** Take common variables with their *lowest* powers.
*   **LCM:** Take all variables (common and uncommon) with their *highest* powers.

**Example: HCF of a²b⁴ and a⁷b²**
*   Common variables: a, b
*   Lowest power of a: a²
*   Lowest power of b: b²
*   HCF = a²b²

**Example: LCM of a²b⁴ and a⁷b²**
*   All variables: a, b
*   Highest power of a: a⁷
*   Highest power of b: b⁴
*   LCM = a⁷b⁴

This section aims to provide a robust conceptual framework and practical strategies, bridging the gap from basic definitions to exam-level problem-solving, even in the absence of specific external notes.

## Page 5: The Testing Layer (Practice & Previous Year Questions)

### Practice Exercise

1.  If `x = 2³ × 3² × 5⁴` and `y = 2² × 3 × 5² × 7`, then HCF of x and y is
    (a) 180
    (b) 360
    (c) 540
    (d) 35
    **Solution Matrix:**
    *   **Concept:** HCF by Prime Factorization (least powers of common factors).
    *   **Step 1:** Identify common prime factors: 2, 3, 5.
    *   **Step 2:** Take the least power for each: 2² (from y), 3¹ (from y), 5² (from y).
    *   **Step 3:** Multiply them: 2² × 3¹ × 5² = 4 × 3 × 25 = 12 × 25 = 300.
    *   **Correction:** The options provided do not match 300. Let's re-check the question's options and my calculation.
        *   x = 2³ × 3² × 5⁴
        *   y = 2² × 3¹ × 5² × 7¹
        *   HCF = 2^(min(3,2)) × 3^(min(2,1)) × 5^(min(4,2)) = 2² × 3¹ × 5² = 4 × 3 × 25 = 300.
        *   There might be a typo in the provided options or the question itself. Assuming the calculation is correct, none of the options (a) 180, (b) 360, (c) 540, (d) 35 are correct.
        *   However, if we assume the question intended to ask for LCM or had different powers, let's stick to the HCF definition.
        *   Let's check if any option is a factor of both x and y.
            *   180 = 2² × 3² × 5. Is a factor of x (2³ × 3² × 5⁴) but not y (2² × 3 × 5² × 7) because of 3².
            *   360 = 2³ × 3² × 5. Not a factor of y.
            *   540 = 2² × 3³ × 5. Not a factor of y.
            *   35 = 5 × 7. Not a factor of x (no 7).
        *   This confirms that 300 is the correct HCF based on the given expressions. Since 300 is not an option, there's an issue with the question or options. For the purpose of this exercise, I will state the calculated HCF.
        *   **Calculated HCF = 300.** (No matching option)

2.  LCM of `2³ × 5³` and `2⁴ × 5 × 7²` is
    (a) `2¹² × 5² × 7²`
    (b) `2⁹ × 5⁴ × 7`
    (c) `2⁴ × 3 × 5³ × 7²` (Note: '3' is not in the original numbers, likely typo in option)
    (d) `2³ × 5³ × 7`
    **Solution Matrix:**
    *   **Concept:** LCM by Prime Factorization (highest powers of all factors).
    *   **Step 1:** List all unique prime factors: 2, 5, 7.
    *   **Step 2:** Take the highest power for each:
        *   For 2: max(3, 4) = 4 => 2⁴
        *   For 5: max(3, 1) = 3 => 5³
        *   For 7: max(0, 2) = 2 => 7²
    *   **Step 3:** Multiply them: `2⁴ × 5³ × 7²`.
    *   **Answer:** (c) is the closest, assuming the '3' is a typo and it should be `2⁴ × 5³ × 7²`. Let's assume the question meant `2⁴ × 5³ × 7²`.
    *   **Corrected Answer based on calculation:** `2⁴ × 5³ × 7²`

3.  LCM of `4/5, 3/10, 7/15` is
    (a) `8 2/3`
    (b) `8/15`
    (c) `20`
    (d) `16 4/5`
    **Solution Matrix:**
    *   **Concept:** LCM of fractions = LCM of Numerators / HCF of Denominators.
    *   **Step 1:** Numerators: 4, 3, 7. All are prime or powers of primes.
        *   LCM (4, 3, 7) = 4 × 3 × 7 = 84.
    *   **Step 2:** Denominators: 5, 10, 15.
        *   HCF (5, 10, 15) = 5.
    *   **Step 3:** LCM of fractions = 84/5.
    *   **Step 4:** Convert to mixed fraction: 84/5 = 16 4/5.
    *   **Answer:** (d)

4.  What is the HCF of `3/2, 9/7, and 15/14`?
    (a) `3/7`
    (b) `3/14`
    (c) `3/2`
    (d) `3/5`
    **Solution Matrix:**
    *   **Concept:** HCF of fractions = HCF of Numerators / LCM of Denominators.
    *   **Step 1:** Numerators: 3, 9, 15.
        *   HCF (3, 9, 15) = 3.
    *   **Step 2:** Denominators: 2, 7, 14.
        *   LCM (2, 7, 14) = 14 (since 14 is a multiple of 2 and 7).
    *   **Step 3:** HCF of fractions = 3/14.
    *   **Answer:** (b)

5.  The least number divisible by 12, 15, 20 and is a perfect square is
    (a) 900
    (b) 400
    (c) 36
    (d) 256
    **Solution Matrix:**
    *   **Concept:** Find LCM, then make it a perfect square.
    *   **Step 1:** Find LCM (12, 15, 20).
        *   12 = 2² × 3
        *   15 = 3 × 5
        *   20 = 2² × 5
        *   LCM = 2² × 3¹ × 5¹ = 4 × 3 × 5 = 60.
    *   **Step 2:** To make 60 a perfect square, all prime factors in its factorization must have even powers.
        *   60 = 2² × 3¹ × 5¹
        *   To make powers even, we need to multiply by 3¹ and 5¹.
        *   Required number = 60 × 3 × 5 = 60 × 15 = 900.
    *   **Answer:** (a)

6.  The least number which when divided by 5, 6, 7 and 8 leaves a remainder 3 is
    (a) 423
    (b) 843
    (c) 1683
    (d) 2523
    **Solution Matrix:**
    *   **Concept:** Least number leaving same remainder R = LCM(divisors) + R.
    *   **Step 1:** Find LCM (5, 6, 7, 8).
        *   5 = 5
        *   6 = 2 × 3
        *   7 = 7
        *   8 = 2³
        *   LCM = 2³ × 3 × 5 × 7 = 8 × 3 × 5 × 7 = 24 × 35 = 840.
    *   **Step 2:** Add the remainder (R=3).
        *   Required number = 840 + 3 = 843.
    *   **Answer:** (b)

7.  The HCF of two numbers is 1/5th of their LCM. If the product of the two numbers is 720, then the HCF of the numbers is
    (a) 13
    (b) 12
    (c) 14
    (d) 18
    **Solution Matrix:**
    *   **Concept:** Product of two numbers = HCF × LCM.
    *   **Step 1:** Let HCF = x. Then LCM = 5x (since HCF = 1/5 LCM).
    *   **Step 2:** Product = 720.
    *   **Step 3:** Substitute into the formula: 720 = x × (5x)
        *   720 = 5x²
        *   x² = 720 / 5 = 144
        *   x = √144 = 12.
    *   **Answer:** (b)

8.  The LCM of two numbers is 39780 and their ratio is 13 : 15. Then, the numbers are
    (a) 273, 315
    (b) 2652, 3060
    (c) 516, 685
    (d) None of these
    **Solution Matrix:**
    *   **Concept:** If numbers are in ratio a:b, they are `ax` and `bx` where x is their HCF. LCM = `x * a * b`.
    *   **Step 1:** Let the numbers be 13x and 15x.
    *   **Step 2:** LCM = x × 13 × 15 = 195x.
    *   **Step 3:** Given LCM = 39780.
        *   195x = 39780
        *   x = 39780 / 195 = 204. (This is the HCF).
    *   **Step 4:** Find the numbers:
        *   First number = 13x = 13 × 204 = 2652.
        *   Second number = 15x = 15 × 204 = 3060.
    *   **Answer:** (b)

9.  If the highest common factor of two positive integers is 24, then their least common multiple cannot be
    (a) 72
    (b) 216
    (c) 372
    (d) 600
    **Solution Matrix:**
    *   **Concept:** HCF must always be a factor of LCM.
    *   **Step 1:** Check which option is not divisible by 24.
    *   (a) 72 / 24 = 3 (Divisible)
    *   (b) 216 / 24 = 9 (Divisible)
    *   (c) 372 / 24 = 15.5 (Not divisible)
    *   (d) 600 / 24 = 25 (Divisible)
    *   **Answer:** (c)

10. If the HCF of three numbers 144, x and 192 is 12, then the number x cannot be
    (a) 180
    (b) 84
    (c) 60
    (d) 48
    **Solution Matrix:**
    *   **Concept:** If HCF of a set of numbers is H, then H must divide each number in the set.
    *   **Step 1:** HCF (144, x, 192) = 12. This means 12 must divide 144, x, and 192.
    *   **Step 2:** Check if 12 divides 144 (144/12 = 12, yes) and 192 (192/12 = 16, yes).
    *   **Step 3:** Check which option for x is *not* divisible by 12.
    *   (a) 180 / 12 = 15 (Divisible)
    *   (b) 84 / 12 = 7 (Divisible)
    *   (c) 60 / 12 = 5 (Divisible)
    *   (d) 48 / 12 = 4 (Divisible)
    *   **Re-evaluation:** The question asks what x *cannot* be. All options are divisible by 12. This implies there's another condition.
        *   HCF(144, x, 192) = 12.
        *   144 = 12 × 12 = 12 × 2² × 3
        *   192 = 12 × 16 = 12 × 2⁴
        *   For HCF to be 12, x must be of the form 12k, where k is coprime to some factors of 12 and 16.
        *   Let's check the HCF of (144, x, 192) for each x:
            *   (a) x=180 = 12 × 15. HCF(12×12, 12×15, 12×16) = 12 × HCF(12, 15, 16) = 12 × HCF(2²×3, 3×5, 2⁴) = 12 × 1 = 12. (Possible)
            *   (b) x=84 = 12 × 7. HCF(12×12, 12×7, 12×16) = 12 × HCF(12, 7, 16) = 12 × 1 = 12. (Possible)
            *   (c) x=60 = 12 × 5. HCF(12×12, 12×5, 12×16) = 12 × HCF(12, 5, 16) = 12 × 1 = 12. (Possible)
            *   (d) x=48 = 12 × 4. HCF(12×12, 12×4, 12×16) = 12 × HCF(12, 4, 16) = 12 × HCF(2²×3, 2², 2⁴) = 12 × 2² = 12 × 4 = 48. (This is not 12).
    *   **Answer:** (d)

11. Consider those numbers between 300 and 400 such that when each number is divided by 6, 9 and 12, it leaves 4 as remainder in each case. What is the sum of the numbers?
    (a) 692
    (b) 764
    (c) 1080
    (d) 1092
    **Solution Matrix:**
    *   **Concept:** Numbers of the form LCM(divisors) * k + R.
    *   **Step 1:** Find LCM (6, 9, 12).
        *   6 = 2 × 3
        *   9 = 3²
        *   12 = 2² × 3
        *   LCM = 2² × 3² = 4 × 9 = 36.
    *   **Step 2:** Numbers are of the form 36k + 4.
    *   **Step 3:** Find numbers between 300 and 400.
        *   For k=8: 36 × 8 + 4 = 288 + 4 = 292 (Too small)
        *   For k=9: 36 × 9 + 4 = 324 + 4 = 328 (Between 300 and 400)
        *   For k=10: 36 × 10 + 4 = 360 + 4 = 364 (Between 300 and 400)
        *   For k=11: 36 × 11 + 4 = 396 + 4 = 400 (Not strictly *between* 300 and 400, usually "between" means exclusive of endpoints. If inclusive, 400 would be included. Let's assume exclusive for now).
    *   **Step 4:** The numbers are 328 and 364.
    *   **Step 5:** Sum = 328 + 364 = 692.
    *   **Answer:** (a)

12. What is the smallest positive integer which when divided by 4, 5, 8 and 9 leaves remainder 3, 4, 7 and 8, respectively?
    (a) 119
    (b) 319
    (c) 359
    (d) 719
    **Solution Matrix:**
    *   **Concept:** Number = LCM(divisors) - common difference.
    *   **Step 1:** Find the differences:
        *   4 - 3 = 1
        *   5 - 4 = 1
        *   8 - 7 = 1
        *   9 - 8 = 1
        *   Common difference `p = 1`.
    *   **Step 2:** Find LCM (4, 5, 8, 9).
        *   4 = 2²
        *   5 = 5
        *   8 = 2³
        *   9 = 3²
        *   LCM = 2³ × 3² × 5 = 8 × 9 × 5 = 72 × 5 = 360.
    *   **Step 3:** Required number = LCM - p = 360 - 1 = 359.
    *   **Answer:** (c)

13. What is the HCF of `a²b⁴ + a²b²` and `ab⁷ - ab⁹`?
    (a) ab
    (b) a²b²
    (c) a²b³
    (d) a³b²
    **Solution Matrix:**
    *   **Concept:** HCF of algebraic expressions (factor out common terms with lowest powers).
    *   **Step 1:** Factorize the first expression: `a²b⁴ + a²b² = a²b²(b² + 1)`.
    *   **Step 2:** Factorize the second expression: `ab⁷ - ab⁹ = ab⁷(1 - b²)`.
    *   **Step 3:** Identify common factors from the factored terms:
        *   Common 'a' term: `a²` from first, `a¹` from second. Lowest power is `a¹`.
        *   Common 'b' term: `b²` from first, `b⁷` from second. Lowest power is `b²`.
        *   The terms `(b²+1)` and `(1-b²)` are generally not common factors unless b takes specific values.
    *   **Step 4:** HCF = `a¹b² = ab²`.
    *   **Correction:** The options given are (a) ab, (b) a²b², (c) a²b³, (d) a³b². My calculation `ab²` is not directly listed. Let's re-check the question's options and my calculation.
        *   `a²b⁴ + a²b² = a²b²(b² + 1)`
        *   `ab⁷ - ab⁹ = ab⁷(1 - b²) = ab⁷(1-b)(1+b)`
        *   Common factors: `a` (lowest power is 1), `b` (lowest power is 2).
        *   So, HCF is `ab²`.
        *   If the question was `a²b⁴` and `ab⁷`, HCF would be `ab⁴`.
        *   If the question was `a²b⁴` and `a²b²`, HCF would be `a²b²`.
        *   Given the options, and assuming a typo in the question or options, the closest common factor is `ab`. If the question meant `HCF(a²b⁴, ab⁷)` then it would be `ab⁴`.
        *   Let's assume the question meant `HCF(a²b², ab⁷)`. Then HCF is `ab²`.
        *   If the question was `HCF(a²b⁴, ab⁷)` and `HCF(a²b², ab⁹)` then it would be `ab²`.
        *   Let's re-examine the original text for similar examples. None.
        *   The HCF of `a²b²(b² + 1)` and `ab⁷(1 - b²)` is `ab²` (assuming `b² + 1` and `1 - b²` have no common factors other than 1).
        *   Given the options, and the fact that `ab` is a common factor, but `ab²` is a *higher* common factor, `ab` is a possible answer if `ab²` is not an option. However, `ab²` is the highest common factor.
        *   Let's check the options again. (a) ab, (b) a²b², (c) a²b³, (d) a³b². None of these is `ab²`.
        *   There seems to be a discrepancy. If we were forced to choose the "highest" available common factor from the options, `ab` is the only one that is definitely a factor of `ab²`.
        *   Let's assume the question intended to be simpler and the HCF is `ab`. This would mean the lowest powers were `a¹` and `b¹`. But `b²` is common.
        *   Let's re-read the question carefully: `HCF of a²b⁴ + a²b²` and `ab⁷ - ab⁹`.
        *   `a²b²(b²+1)` and `ab⁷(1-b²)`.
        *   Common factors: `a` (lowest power is 1), `b` (lowest power is 2).
        *   So, HCF is `ab²`.
        *   Since `ab²` is not an option, there's a problem. Let's pick the largest common factor from the options that *is* a factor of `ab²`. That would be `ab`.
        *   However, if `a²b²` were the HCF, then `a²` would have to be common. It's not.
        *   Let's assume the question meant `HCF(a²b⁴, ab⁷)` which would be `ab⁴`.
        *   Let's assume the question meant `HCF(a²b², ab⁹)` which would be `ab²`.
        *   Given the options, and the fact that `ab` is a factor of `ab²`, but `ab²` is the true HCF. If there's no `ab²` option, there's a flaw.
        *   Let's assume the original text's solution for this question would pick `ab` if `ab²` wasn't an option, as it's the highest common factor among the given choices that is *definitely* a factor of the actual HCF.
        *   **Calculated HCF = ab². No matching option.** (This indicates a potential error in the provided question/options.)

14. If a number is exactly divisible by 11 and 13, which of the following types the number must be?
    (a) Divisible by (11+13)
    (b) Divisible by (13−11)
    (c) Divisible by (11×13)
    (d) Divisible by (13÷11)
    **Solution Matrix:**
    *   **Concept:** If a number is divisible by two co-prime numbers, it is divisible by their product.
    *   **Step 1:** 11 and 13 are prime numbers, hence they are co-prime (HCF(11, 13) = 1).
    *   **Step 2:** If a number is divisible by 11 and 13, it must be a multiple of their LCM.
    *   **Step 3:** Since they are co-prime, LCM(11, 13) = 11 × 13.
    *   **Answer:** (c)

15. What is the sum of the digits of the least number which when divided by 52, leaves 33 as remainder, when divided by 78 leaves 59 and when divided by 117, leaves 98 as remainder?
    (a) 17
    (b) 18
    (c) 19
    (d) 21
    **Solution Matrix:**
    *   **Concept:** Number = LCM(divisors) - common difference.
    *   **Step 1:** Find the differences:
        *   52 - 33 = 19
        *   78 - 59 = 19
        *   117 - 98 = 19
        *   Common difference `p = 19`.
    *   **Step 2:** Find LCM (52, 78, 117).
        *   52 = 2² × 13
        *   78 = 2 × 3 × 13
        *   117 = 3² × 13
        *   LCM = 2² × 3² × 13 = 4 × 9 × 13 = 36 × 13 = 468.
    *   **Step 3:** Required number = LCM - p = 468 - 19 = 449.
    *   **Step 4:** Sum of digits of 449 = 4 + 4 + 9 = 17.
    *   **Answer:** (a)

16. For any integer n, what is the HCF of integers `m = 2n + 1` and `k = 9n + 4`?
    (a) 3
    (b) 1
    (c) 2
    (d) 4
    **Solution Matrix:**
    *   **Concept:** Euclidean algorithm property: HCF(a, b) = HCF(a, b - qa).
    *   **Step 1:** We need HCF(2n+1, 9n+4).
    *   **Step 2:** Multiply `(2n+1)` by a factor to get close to `9n+4`. Multiply by 4: `4(2n+1) = 8n+4`.
    *   **Step 3:** HCF(2n+1, 9n+4) = HCF(2n+1, (9n+4) - 4(2n+1))
        *   = HCF(2n+1, 9n+4 - 8n - 4)
        *   = HCF(2n+1, n).
    *   **Step 4:** Now use HCF(a, b) = HCF(a - qb, b).
        *   HCF(2n+1, n) = HCF((2n+1) - 2(n), n)
        *   = HCF(2n+1 - 2n, n)
        *   = HCF(1, n).
    *   **Step 5:** HCF(1, n) is always 1 for any integer n.
    *   **Answer:** (b)

17. For any three natural numbers a, b and c, if HCF (a, b) = c, then HCF (a/c, b/c) is
    (a) a/c
    (b) b/c
    (c) c
    (d) Always 1
    **Solution Matrix:**
    *   **Concept:** Property of HCF. If HCF(a, b) = c, then a = cx and b = cy, where x and y are co-prime (HCF(x, y) = 1).
    *   **Step 1:** Given HCF(a, b) = c.
    *   **Step 2:** This means `a = c * x` and `b = c * y`, where HCF(x, y) = 1.
    *   **Step 3:** We need to find HCF(a/c, b/c).
    *   **Step 4:** Substitute `a/c = (cx)/c = x` and `b/c = (cy)/c = y`.
    *   **Step 5:** So, we need to find HCF(x, y).
    *   **Step 6:** Since x and y are co-prime, HCF(x, y) = 1.
    *   **Answer:** (d)

18. Raj, Rachit and Asha begin to tag around a circular stadium. They complete their revolutions in 42 s, 56 s and 63 s, respectively. After how many seconds will they be together at the starting point?
    (a) 366
    (b) 252
    (c) 504
    (d) 605
    **Solution Matrix:**
    *   **Concept:** "Meet again at starting point" implies finding LCM.
    *   **Step 1:** Find LCM (42, 56, 63).
        *   42 = 2 × 3 × 7
        *   56 = 2³ × 7
        *   63 = 3² × 7
    *   **Step 2:** LCM = 2³ × 3² × 7 = 8 × 9 × 7 = 72 × 7 = 504.
    *   **Answer:** (c)

19. Find the side of the largest possible square slabs which can be paved on the floor of a room 2m 50cm long and 1m 50cm broad. Also, find the number of such slabs to pave the floor.
    (a) 25,20
    (b) 30,15
    (c) 50,15
    (d) 55,10
    **Solution Matrix:**
    *   **Concept:** "Largest possible square slabs" implies finding HCF.
    *   **Step 1:** Convert dimensions to same unit (cm).
        *   Length = 2m 50cm = 250 cm.
        *   Breadth = 1m 50cm = 150 cm.
    *   **Step 2:** Find HCF (250, 150).
        *   250 = 25 × 10 = 5² × 2 × 5 = 2 × 5³
        *   150 = 15 × 10 = 3 × 5 × 2 × 5 = 2 × 3 × 5²
        *   HCF = 2¹ × 5² = 2 × 25 = 50 cm. (Side of the largest slab).
    *   **Step 3:** Find the number of slabs.
        *   Number of slabs along length = 250 cm / 50 cm = 5.
        *   Number of slabs along breadth = 150 cm / 50 cm = 3.
        *   Total number of slabs = 5 × 3 = 15.
    *   **Answer:** (c) (50 cm, 15 slabs)

20. Four bells begin to toll together and toll, respectively at intervals of 5, 6, 8 and 12 s. How many times will they toll together in an hour excluding the one at the start?
    (a) 10
    (b) 19
    (c) 13
    (d) 9
    **Solution Matrix:**
    *   **Concept:** "Toll together" implies finding LCM.
    *   **Step 1:** Find LCM (5, 6, 8, 12).
        *   5 = 5
        *   6 = 2 × 3
        *   8 = 2³
        *   12 = 2² × 3
        *   LCM = 2³ × 3 × 5 = 8 × 3 × 5 = 120 seconds.
    *   **Step 2:** Convert 1 hour to seconds: 1 hour = 60 minutes = 60 × 60 = 3600 seconds.
    *   **Step 3:** Number of times they toll together in 3600 seconds = 3600 / 120 = 30 times.
    *   **Step 4:** "Excluding the one at the start" means subtract 1 from the total count.
        *   30 - 1 = 29 times.
    *   **Re-evaluation:** The options are small. Let's recheck the LCM calculation.
        *   5
        *   6 = 2*3
        *   8 = 2*2*2
        *   12 = 2*2*3
        *   LCM = 2³ * 3 * 5 = 8 * 3 * 5 = 120. This is correct.
        *   Number of times = 3600 / 120 = 30.
        *   Excluding start = 29.
        *   None of the options match 29. This suggests a potential error in the question or options provided in the textbook.
        *   Let's consider if "in an hour" means *within* the hour, so the last toll at 3600s is included.
        *   If the question meant "how many *intervals* of 120s are there in 3600s", it's 30. If it meant "how many times *after* the start", it's 29.
        *   Given the options, let's assume there's a different interpretation or a typo. If the question was for a shorter duration, or if one of the numbers was different.
        *   Let's check the options.
        *   If the answer was 10, then 10 * 120 = 1200 seconds.
        *   If the answer was 19, then 19 * 120 = 2280 seconds.
        *   If the answer was 13, then 13 * 120 = 1560 seconds.
        *   If the answer was 9, then 9 * 120 = 1080 seconds.
        *   None of these are 3600.
        *   There is a high probability of error in the question's options. Based on the calculation, the answer is 29.

21. 21 mango trees, 42 apple trees and 56 orange trees have to be planted in rows such that each row contains the same number of trees of one variety only. What is the minimum number of rows in which the above trees may be planted?
    (a) 3
    (b) 15
    (c) 17
    (d) 20
    **Solution Matrix:**
    *   **Concept:** To minimize rows, maximize trees per row. This means finding HCF.
    *   **Step 1:** Find HCF (21, 42, 56).
        *   21 = 3 × 7
        *   42 = 2 × 3 × 7
        *   56 = 2³ × 7
        *   HCF = 7. (This is the maximum number of trees per row).
    *   **Step 2:** Calculate number of rows for each variety:
        *   Mango rows = 21 / 7 = 3.
        *   Apple rows = 42 / 7 = 6.
        *   Orange rows = 56 / 7 = 8.
    *   **Step 3:** Total minimum rows = 3 + 6 + 8 = 17.
    *   **Answer:** (c)

22. A person has four iron bars whose lengths are 24 m, 36 m, 48 m and 72 m, respectively. This person wants to cut pieces of same length from each of four bars. What is the least number of total pieces, if he is to cut without any wastage?
    (a) 10
    (b) 15
    (c) 20
    (d) 25
    **Solution Matrix:**
    *   **Concept:** "Pieces of same length" and "without wastage" implies finding a common divisor. To get the "least number of total pieces", the length of each piece must be *maximum*. This means finding HCF.
    *   **Step 1:** Find HCF (24, 36, 48, 72).
        *   24 = 2³ × 3
        *   36 = 2² × 3²
        *   48 = 2⁴ × 3
        *   72 = 2³ × 3²
        *   HCF = 2² × 3 = 4 × 3 = 12 m. (This is the length of each piece).
    *   **Step 2:** Calculate number of pieces from each bar:
        *   Bar 1: 24 m / 12 m = 2 pieces.
        *   Bar 2: 36 m / 12 m = 3 pieces.
        *   Bar 3: 48 m / 12 m = 4 pieces.
        *   Bar 4: 72 m / 12 m = 6 pieces.
    *   **Step 3:** Total least number of pieces = 2 + 3 + 4 + 6 = 15.
    *   **Answer:** (b)

23. For two natural numbers m and n, let g(m,n) denote the greatest common factor of m and n. Consider the following in respect of three natural numbers k, m and n.
    I. g(m, nk) = g(mn, k)
    II. g(mn, nk, mk) = g(mn, nk)
    Which of the above statement(s) is/are correct?
    (a) Only I
    (b) Only II
    (c) Both I and II
    (d) Neither I nor II
    **Solution Matrix:**
    *   **Concept:** Properties of HCF (GCD).
    *   **Statement I: g(m, nk) = g(mn, k)**
        *   Let m=2, n=3, k=5.
        *   LHS: g(2, 3*5) = g(2, 15) = 1.
        *   RHS: g(2*3, 5) = g(6, 5) = 1. (Matches)
        *   Let m=6, n=2, k=3.
        *   LHS: g(6, 2*3) = g(6, 6) = 6.
        *   RHS: g(6*2, 3) = g(12, 3) = 3. (Does not match)
        *   So, Statement I is incorrect.
    *   **Statement II: g(mn, nk, mk) = g(mn, nk)**
        *   This statement claims that the HCF of three products is equal to the HCF of two of those products. This is generally false.
        *   Let m=2, n=3, k=5.
        *   LHS: g(2*3, 3*5, 2*5) = g(6, 15, 10) = 1.
        *   RHS: g(2*3, 3*5) = g(6, 15) = 3. (Does not match)
        *   So, Statement II is incorrect.
    *   **Answer:** (d)

24. Consider the following in respect of integers a and b
    I. HCF (a, b) = HCF (a + b, b)
    II. HCF (a, b) = HCF (a, b - a) for b > a
    Which of the above statement(s) is/are correct?
    (a) Only I
    (b) Only II
    (c) Both I and II
    (d) None of these
    **Solution Matrix:**
    *   **Concept:** Euclidean algorithm properties. HCF(x, y) = HCF(x, y-x) and HCF(x, y) = HCF(x, y+x).
    *   **Statement I: HCF (a, b) = HCF (a + b, b)**
        *   Let d = HCF(a, b). Then d divides a and d divides b. So d divides (a+b). Thus d divides HCF(a+b, b).
        *   Let d' = HCF(a+b, b). Then d' divides (a+b) and d' divides b. So d' divides (a+b - b) = a. Thus d' divides HCF(a, b).
        *   Since d divides d' and d' divides d, then d = d'.
        *   So, Statement I is correct.
    *   **Statement II: HCF (a, b) = HCF (a, b - a) for b > a**
        *   This is a direct application of the Euclidean algorithm.
        *   Let d = HCF(a, b). Then d divides a and d divides b. So d divides (b-a). Thus d divides HCF(a, b-a).
        *   Let d' = HCF(a, b-a). Then d' divides a and d' divides (b-a). So d' divides (a + (b-a)) = b. Thus d' divides HCF(a, b).
        *   Since d divides d' and d' divides d, then d = d'.
        *   So, Statement II is correct.
    *   **Answer:** (c)

### Previous Years’ Questions (PYQs)

25. The HCF and LCM of two natural numbers are 12 and 72, respectively. What is the difference between the two numbers, if one of the numbers is 24? (e 2012 I)
    (a) 12
    (b) 18
    (c) 21
    (d) 24
    **Solution Matrix:**
    *   **Concept:** Product of two numbers = HCF × LCM.
    *   **Step 1:** Let the two numbers be N1 and N2.
        *   N1 = 24.
        *   HCF = 12, LCM = 72.
    *   **Step 2:** N1 × N2 = HCF × LCM
        *   24 × N2 = 12 × 72
        *   N2 = (12 × 72) / 24 = 72 / 2 = 36.
    *   **Step 3:** Difference between the two numbers = |N2 - N1| = |36 - 24| = 12.
    *   **Answer:** (a)

26. The sum of two numbers is 232 and their HCF is 29. What is the number of such pairs of numbers satisfying the above condition? (e 2012 I)
    (a) One
    (b) Two
    (c) Four
    (d) None of these
    **Solution Matrix:**
    *   **Concept:** If HCF(N1, N2) = H, then N1 = Hx and N2 = Hy, where HCF(x, y) = 1.
    *   **Step 1:** Let the two numbers be 29x and 29y, where HCF(x, y) = 1.
    *   **Step 2:** Sum of numbers = 29x + 29y = 232.
        *   29(x + y) = 232
        *   x + y = 232 / 29 = 8.
    *   **Step 3:** Find pairs (x, y) such that x + y = 8 and HCF(x, y) = 1.
        *   Possible pairs for (x, y) that sum to 8:
            *   (1, 7): HCF(1, 7) = 1. (Valid pair)
            *   (2, 6): HCF(2, 6) = 2. (Invalid)
            *   (3, 5): HCF(3, 5) = 1. (Valid pair)
            *   (4, 4): HCF(4, 4) = 4. (Invalid)
            *   (5, 3): Same as (3, 5).
            *   (6, 2): Same as (2, 6).
            *   (7, 1): Same as (1, 7).
    *   **Step 4:** There are 2 such distinct pairs: (1, 7) and (3, 5).
    *   **Answer:** (b)

27. The product of HCF and LCM of 18 and 15 is (e 2012 II)
    (a) 120
    (b) 150
    (c) 175
    (d) 270
    **Solution Matrix:**
    *   **Concept:** Product of two numbers = HCF × LCM.
    *   **Step 1:** The two numbers are 18 and 15.
    *   **Step 2:** Product of HCF and LCM = Product of the numbers.
        *   18 × 15 = 270.
    *   **Answer:** (d)

28. Three planets revolve round the Sun once in 200, 250 and 300 days, respectively in their own orbits. When do they all come relatively to the same position at a certain point of time in their orbits? (e 2012 II)
    (a) After 3000 days
    (b) After 2000 days
    (c) After 1500 days
    (d) After 1200 days
    **Solution Matrix:**
    *   **Concept:** "Come to the same position" implies finding LCM.
    *   **Step 1:** Find LCM (200, 250, 300).
        *   200 = 2³ × 5²
        *   250 = 2 × 5³
        *   300 = 2² × 3 × 5²
    *   **Step 2:** LCM = 2³ × 3¹ × 5³ = 8 × 3 × 125 = 24 × 125 = 3000.
    *   **Answer:** (a)

29. The LCM of two numbers is 2376 while their HCF is 33. If one of the numbers is 297, then the other number is (e 2013 I)
    (a) 216
    (b) 264
    (c) 642
    (d) 792
    **Solution Matrix:**
    *   **Concept:** Product of two numbers = HCF × LCM.
    *   **Step 1:** Let the numbers be N1 and N2.
        *   N1 = 297.
        *   HCF = 33, LCM = 2376.
    *   **Step 2:** N1 × N2 = HCF × LCM
        *   297 × N2 = 33 × 2376
        *   N2 = (33 × 2376) / 297
    *   **Step 3:** Simplify the expression:
        *   N2 = (33 / 297) × 2376
        *   297 = 9 × 33. So, 33/297 = 1/9.
        *   N2 = (1/9) × 2376 = 2376 / 9 = 264.
    *   **Answer:** (b)

30. The HCF of two numbers is 98 and their LCM is 2352. The sum of the numbers may be (e 2013 II)
    (a) 1372
    (b) 1398
    (c) 1426
    (d) 1484
    **Solution Matrix:**
    *   **Concept:** N1 = Hx, N2 = Hy, where HCF(x, y) = 1. LCM = Hxy.
    *   **Step 1:** H = 98, LCM = 2352.
    *   **Step 2:** LCM = Hxy => 2352 = 98 × x × y
        *   xy = 2352 / 98 = 24.
    *   **Step 3:** Find co-prime pairs (x, y) whose product is 24:
        *   (1, 24): HCF(1, 24) = 1. (Valid)
        *   (3, 8): HCF(3, 8) = 1. (Valid)
        *   (2, 12): HCF(2, 12) = 2. (Invalid)
        *   (4, 6): HCF(4, 6) = 2. (Invalid)
    *   **Step 4:** Calculate the numbers and their sum for valid pairs:
        *   **Pair 1 (x=1, y=24):**
            *   N1 = 98 × 1 = 98
            *   N2 = 98 × 24 = 2352
            *   Sum = 98 + 2352 = 2450. (Not in options)
        *   **Pair 2 (x=3, y=8):**
            *   N1 = 98 × 3 = 294
            *   N2 = 98 × 8 = 784
            *   Sum = 294 + 784 = 1078. (Not in options)
    *   **Re-evaluation:** There might be an error in the question or options, or I missed a pair.
        *   What if the question implies that the sum *could be* one of these, meaning we need to check if any of these sums is possible.
        *   Let the sum be S. S = H(x+y).
        *   For (1, 24), x+y = 25. S = 98 * 25 = 2450.
        *   For (3, 8), x+y = 11. S = 98 * 11 = 1078.
        *   None of the options (1372, 1398, 1426, 1484) match these sums.
        *   Let's double check the division: 2352 / 98 = 24. Correct.
        *   Co-prime factors of 24: (1, 24), (3, 8). Correct.
        *   Calculations of sums: Correct.
        *   This indicates a strong likelihood of an error in the provided question's options.

31. If for integers a, b and c, HCF (a, b) = 1 and HCF (a, c) = 1, then which one of the following is correct? (e 2013 II)
    (a) HCF (a, bc) = 1
    (b) HCF (a, bc) = a
    (c) HCF (a, bc) = b
    (d) None of these
    **Solution Matrix:**
    *   **Concept:** Properties of HCF and co-prime numbers.
    *   **Step 1:** HCF(a, b) = 1 means 'a' and 'b' are co-prime.
    *   **Step 2:** HCF(a, c) = 1 means 'a' and 'c' are co-prime.
    *   **Step 3:** If a number 'a' is co-prime to 'b' and also co-prime to 'c', then 'a' must be co-prime to their product 'bc'.
    *   **Example:** Let a=2, b=3, c=5.
        *   HCF(2, 3) = 1.
        *   HCF(2, 5) = 1.
        *   Then HCF(2, 3*5) = HCF(2, 15) = 1.
    *   **Answer:** (a)

32. What is the number of integral solutions of the equations HCF (a, b) = 5 and a + b = 65? (e 2014 I)
    (a) Less than 65
    (b) Infinitely
    **Solution Matrix:**
    *   **Concept:** If HCF(a, b) = H, then a = Hx and b = Hy, where HCF(x, y) = 1.
    *   **Step 1:** Let a = 5x and b = 5y, where HCF(x, y) = 1.
    *   **Step 2:** a + b = 65 => 5x + 5y = 65
        *   5(x + y) = 65
        *   x + y = 13.
    *   **Step 3:** Find pairs (x, y) such that x + y = 13 and HCF(x, y) = 1.
        *   Since a and b are integers, x and y must also be integers. Assuming positive integers (natural numbers) as is typical for HCF problems unless specified.
        *   (1, 12): HCF(1, 12) = 1. (Valid)
        *   (2, 11): HCF(2, 11) = 1. (Valid)
        *   (3, 10): HCF(3, 10) = 1. (Valid)
        *   (4, 9): HCF(4, 9) = 1. (Valid)
        *   (5, 8): HCF(5, 8) = 1. (Valid)
        *   (6, 7): HCF(6, 7) = 1. (Valid)
        *   (7, 6): Same as (6, 7).
        *   ...and so on, up to (12, 1).
    *   **Step 4:** The distinct pairs (x, y) are (1,12), (2,11), (3,10), (4,9), (5,8), (6,7). There are 6 such pairs.
    *   **Step 5:** Each pair (x, y) corresponds to a unique pair (a, b). So there are 6 integral solutions.
    *   **Step 6:** The options are "Less than 65" and "Infinitely". 6 is less than 65.
    *   **Answer:** (a)