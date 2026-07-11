**Disclaimer:** The provided "PRIMARY TEXTBOOK CONTEXT" and "EXTERNAL NOTES CONTEXT" were found to be entirely irrelevant to the topic "HCF and LCM of Numbers," containing English grammar and comprehension exercises instead. Therefore, this module has been generated from a comprehensive internal knowledge base on HCF and LCM, adhering to the requested structure and high-yield format for NDA, CDS, and AFCAT exams, despite the unrelated input text.

---

# HCF and LCM of Numbers: High-Yield Topic Module

## Pages 1-2: Core Context - Foundational Concepts & Methods

### 1. Introduction to HCF and LCM

**HCF (Highest Common Factor)** and **LCM (Least Common Multiple)** are fundamental concepts in number theory, crucial for solving various quantitative aptitude problems in competitive exams.

*   **Factors:** A factor of a number is an integer that divides the number without leaving a remainder. (e.g., Factors of 12 are 1, 2, 3, 4, 6, 12).
*   **Multiples:** A multiple of a number is the product of that number and any integer. (e.g., Multiples of 4 are 4, 8, 12, 16, ...).

### 2. HCF (Highest Common Factor) / GCD (Greatest Common Divisor)

The HCF (or GCD) of two or more numbers is the largest number that divides each of the given numbers exactly without leaving any remainder.

#### Structural Mind-Map: HCF Methods

```
HCF Calculation
├── Prime Factorization Method
│   └── Find prime factors of each number
│   └── Identify common prime factors
│   └── Multiply common factors (lowest power)
└── Division Method (Long Division)
    └── Divide larger number by smaller
    └── Take remainder as new divisor, previous divisor as new dividend
    └── Repeat until remainder is 0
    └── Last divisor is HCF
```

#### Foundational Conceptual Notes: HCF Methods

**A. Prime Factorization Method:**
1.  Express each number as a product of its prime factors.
2.  Identify all common prime factors.
3.  For each common prime factor, take the lowest power that appears in the factorizations.
4.  Multiply these lowest powers of common prime factors to get the HCF.

**Example:** Find the HCF of 12, 18, and 30.
*   $12 = 2^2 \times 3^1$
*   $18 = 2^1 \times 3^2$
*   $30 = 2^1 \times 3^1 \times 5^1$
Common prime factors are 2 and 3.
Lowest power of 2 is $2^1$.
Lowest power of 3 is $3^1$.
HCF = $2^1 \times 3^1 = 2 \times 3 = 6$.

**B. Division Method (Long Division Method):**
This method is particularly useful for finding the HCF of two numbers, especially larger ones.
1.  Divide the larger number by the smaller number.
2.  Take the remainder as the new divisor and the previous divisor as the new dividend.
3.  Repeat the process until the remainder becomes zero.
4.  The last divisor is the HCF.
To find the HCF of three or more numbers, first find the HCF of any two numbers, then find the HCF of the result and the third number, and so on.

**Example:** Find the HCF of 198 and 360.
1.  $360 \div 198 = 1$ (remainder 162)
2.  $198 \div 162 = 1$ (remainder 36)
3.  $162 \div 36 = 4$ (remainder 18)
4.  $36 \div 18 = 2$ (remainder 0)
The last divisor is 18. So, HCF(198, 360) = 18.

### 3. LCM (Least Common Multiple)

The LCM of two or more numbers is the smallest non-zero number that is a multiple of each of the given numbers.

#### Structural Mind-Map: LCM Methods

```
LCM Calculation
├── Prime Factorization Method
│   └── Find prime factors of each number
│   └── Identify all prime factors (common & uncommon)
│   └── Multiply highest powers of all factors
└── Common Division Method
    └── Arrange numbers in a row
    └── Divide by smallest prime factor that divides at least one number
    └── Bring down numbers not divisible
    └── Repeat until no two numbers have a common prime factor
    └── Multiply all divisors and remaining numbers
```

#### Foundational Conceptual Notes: LCM Methods

**A. Prime Factorization Method:**
1.  Express each number as a product of its prime factors.
2.  Identify all prime factors (common and uncommon) that appear in the factorizations.
3.  For each prime factor, take the highest power that appears in the factorizations.
4.  Multiply these highest powers of all prime factors to get the LCM.

**Example:** Find the LCM of 12, 18, and 30.
*   $12 = 2^2 \times 3^1$
*   $18 = 2^1 \times 3^2$
*   $30 = 2^1 \times 3^1 \times 5^1$
All prime factors are 2, 3, and 5.
Highest power of 2 is $2^2$.
Highest power of 3 is $3^2$.
Highest power of 5 is $5^1$.
LCM = $2^2 \times 3^2 \times 5^1 = 4 \times 9 \times 5 = 180$.

**B. Common Division Method:**
1.  Write the given numbers in a row.
2.  Divide them by the smallest prime number that divides at least one of the numbers exactly.
3.  Write the quotients and the undivided numbers in the row below.
4.  Repeat the process until no two numbers in the last row have a common prime factor.
5.  The product of all divisors and the numbers in the last row is the LCM.

**Example:** Find the LCM of 12, 18, and 30.
```
2 | 12, 18, 30
3 |  6,  9, 15
  |  2,  3,  5
```
LCM = $2 \times 3 \times 2 \times 3 \times 5 = 180$.

### 4. Relationship between HCF and LCM

#### For Two Numbers:
For any two positive integers 'a' and 'b', the product of the numbers is equal to the product of their HCF and LCM.
**Formula:** $a \times b = \text{HCF}(a, b) \times \text{LCM}(a, b)$

**Example:** Numbers are 12 and 18.
HCF(12, 18) = 6
LCM(12, 18) = 36
Product of numbers = $12 \times 18 = 216$
Product of HCF and LCM = $6 \times 36 = 216$
Thus, $12 \times 18 = \text{HCF}(12, 18) \times \text{LCM}(12, 18)$ is verified.

#### For Fractions:
*   **HCF of Fractions:** $\text{HCF}(\text{fractions}) = \frac{\text{HCF of Numerators}}{\text{LCM of Denominators}}$
*   **LCM of Fractions:** $\text{LCM}(\text{fractions}) = \frac{\text{LCM of Numerators}}{\text{HCF of Denominators}}$

**Example:** Find the HCF and LCM of $\frac{2}{3}, \frac{4}{9}, \frac{6}{21}$.
Numerators: 2, 4, 6. Denominators: 3, 9, 21.

*   **HCF of Numerators (2, 4, 6):**
    $2 = 2^1$
    $4 = 2^2$
    $6 = 2^1 \times 3^1$
    HCF(2, 4, 6) = $2^1 = 2$.

*   **LCM of Denominators (3, 9, 21):**
    $3 = 3^1$
    $9 = 3^2$
    $21 = 3^1 \times 7^1$
    LCM(3, 9, 21) = $3^2 \times 7^1 = 9 \times 7 = 63$.

    **HCF of fractions** = $\frac{\text{HCF}(2, 4, 6)}{\text{LCM}(3, 9, 21)} = \frac{2}{63}$.

*   **LCM of Numerators (2, 4, 6):**
    LCM(2, 4, 6) = $2^2 \times 3^1 = 12$.

*   **HCF of Denominators (3, 9, 21):**
    HCF(3, 9, 21) = $3^1 = 3$.

    **LCM of fractions** = $\frac{\text{LCM}(2, 4, 6)}{\text{HCF}(3, 9, 21)} = \frac{12}{3} = 4$.

---

## Pages 3-4: AI Contextual Enrichment - Deep-Dives & Exam Strategies

### 5. Properties of HCF and LCM

*   **HCF is a factor of LCM:** For any two numbers, their HCF will always divide their LCM exactly.
*   **HCF of co-prime numbers is 1:** Co-prime numbers (or relatively prime numbers) are numbers that have no common factor other than 1. E.g., HCF(7, 11) = 1.
*   **LCM of co-prime numbers is their product:** E.g., LCM(7, 11) = $7 \times 11 = 77$.
*   **HCF is always less than or equal to the smallest number.**
*   **LCM is always greater than or equal to the largest number.**
*   **If a number 'x' is a factor of 'y', then HCF(x, y) = x and LCM(x, y) = y.** E.g., HCF(6, 12) = 6, LCM(6, 12) = 12.

### 6. Applications of HCF and LCM (Word Problems)

Understanding when to use HCF and when to use LCM is key to solving word problems.

#### A. HCF Applications (Finding the "Greatest" or "Maximum")
Look for keywords like "greatest number," "largest number," "maximum capacity," "number of groups," "divides exactly," "equal distribution."

*   **Finding the greatest number that divides given numbers leaving specific remainders:**
    If the greatest number that divides $N_1, N_2, N_3, ...$ leaving remainders $R_1, R_2, R_3, ...$ respectively is required, then the number is HCF of $(N_1-R_1), (N_2-R_2), (N_3-R_3), ...$.
    *   **Visual Diagram Descriptor:** Imagine containers of different sizes. You want to find the largest measuring cup that can exactly fill each container *after* removing any leftover (remainder).
    *   **Example:** Find the greatest number that divides 130, 305, and 245 leaving remainders 6, 9, and 17 respectively.
        Numbers to find HCF of: $(130-6)$, $(305-9)$, $(245-17)$
        = 124, 296, 228.
        HCF(124, 296, 228) = 4. (You can verify this using prime factorization or division method).

*   **Tiling Problems:** Finding the largest size of square tiles to cover a rectangular floor/area without cutting.
    *   **Example:** A room is 15m 17cm long and 9m 2cm wide. Find the least number of square tiles required to pave the floor.
        Convert to cm: Length = 1517 cm, Width = 902 cm.
        The side of the largest square tile will be HCF(1517, 902).
        Using division method:
        $1517 \div 902 = 1$ (R 615)
        $902 \div 615 = 1$ (R 287)
        $615 \div 287 = 2$ (R 41)
        $287 \div 41 = 7$ (R 0)
        HCF = 41. So, side of square tile = 41 cm.
        Area of room = $1517 \times 902$ sq cm.
        Area of one tile = $41 \times 41$ sq cm.
        Number of tiles = $\frac{1517 \times 902}{41 \times 41} = 37 \times 22 = 814$.

#### B. LCM Applications (Finding the "Least" or "Minimum")
Look for keywords like "least number," "minimum number," "smallest number," "first time together," "ring together," "meet again."

*   **Finding the least number that is divisible by given numbers leaving specific remainders:**
    If the least number that is divisible by $N_1, N_2, N_3, ...$ leaving the same remainder 'R' in each case is required, then the number is LCM$(N_1, N_2, N_3, ...) + R$.
    *   **Visual Diagram Descriptor:** Imagine multiple cycles starting at different times. You want to find the earliest point in time when all cycles align or repeat together.
    *   **Example:** Find the least number which when divided by 12, 15, 20, and 54 leaves a remainder of 8 in each case.
        First, find LCM(12, 15, 20, 54).
        ```
        2 | 12, 15, 20, 54
        3 |  6, 15, 10, 27
        2 |  2,  5, 10,  9
        5 |  1,  5,  5,  9
          |  1,  1,  1,  9
        ```
        LCM = $2 \times 3 \times 2 \times 5 \times 9 = 540$.
        The required number = LCM + Remainder = $540 + 8 = 548$.

*   **Bell/Traffic Light Problems:** When will bells ring together again, or traffic lights change simultaneously again? This is an LCM problem.
    *   **Example:** Three bells ring at intervals of 10, 15, and 20 minutes respectively. If they all ring together at 10:00 AM, when will they next ring together?
        Find LCM(10, 15, 20).
        $10 = 2 \times 5$
        $15 = 3 \times 5$
        $20 = 2^2 \times 5$
        LCM = $2^2 \times 3 \times 5 = 4 \times 3 \times 5 = 60$.
        They will ring together after 60 minutes, which is 1 hour.
        So, they will next ring together at 11:00 AM.

### 7. Tips and Tricks for Competitive Exams

*   **Quick HCF/LCM for small numbers:** Practice mental calculations for numbers up to 30-50.
*   **Using Options in MCQs:** For many word problems, especially those involving remainders, you can test the given options.
    *   For HCF problems: Check if the option divides the numbers (or modified numbers for remainders).
    *   For LCM problems: Check if the option is divisible by the given numbers (or modified numbers for remainders).
*   **Prime Factorization is versatile:** While division methods are faster for specific cases, prime factorization is robust and works for both HCF and LCM, and for any number of integers. It's also essential for understanding the underlying concepts.
*   **Euclidean Algorithm for HCF:** For very large numbers, the division method (Euclidean Algorithm) is much faster than prime factorization.
    *   **Algorithm:** HCF(a, b) = HCF(b, a mod b) until a mod b = 0. The HCF is then b.
    *   **Example:** HCF(360, 198)
        HCF(360, 198) = HCF(198, 360 mod 198) = HCF(198, 162)
        HCF(198, 162) = HCF(162, 198 mod 162) = HCF(162, 36)
        HCF(162, 36) = HCF(36, 162 mod 36) = HCF(36, 18)
        HCF(36, 18) = HCF(18, 36 mod 18) = HCF(18, 0)
        So, HCF is 18.

### 8. Mnemonics & Visual Aids

*   **HCF = "Highest Common Factor"**: Think "Smallest result from common factors." (It's the largest number that *divides* them, so the result is smaller than or equal to the numbers).
*   **LCM = "Least Common Multiple"**: Think "Largest result from all factors." (It's the smallest number that *is divisible by* them, so the result is larger than or equal to the numbers).
*   **Venn Diagram for Prime Factors (Conceptual):**
    *   Draw two overlapping circles for two numbers.
    *   Put common prime factors in the overlap.
    *   Put unique prime factors in the non-overlapping parts.
    *   **HCF:** Product of factors in the overlap.
    *   **LCM:** Product of *all* factors in both circles (union).
    *   **Example (12 & 18):**
        12: {2, 2, 3}
        18: {2, 3, 3}
        Overlap: {2, 3} -> HCF = $2 \times 3 = 6$
        Union: {2, 2, 3, 3} -> LCM = $2 \times 2 \times 3 \times 3 = 36$
        (Note: For prime factors, we use the highest power for LCM and lowest for HCF, which is consistent with this visual).

---

## Page 5+: The Testing Layer - Practice Exercises & PYQs

### Practice Exercises (MCQs)

1.  What is the HCF of 108, 288, and 360?
    (a) 18
    (b) 36
    (c) 54
    (d) 72

2.  The LCM of two numbers is 1820 and their HCF is 26. If one number is 130, what is the other number?
    (a) 70
    (b) 1690
    (c) 364
    (d) 1260

3.  Find the least number which when divided by 20, 25, 35, and 40 leaves a remainder of 14, 19, 29, and 34 respectively.
    (a) 1394
    (b) 1400
    (c) 1397
    (d) 1406

4.  The HCF and LCM of two numbers are 13 and 455 respectively. If one of the numbers lies between 75 and 125, then that number is:
    (a) 78
    (b) 91
    (c) 104
    (d) 117

5.  Three different containers contain 403 liters, 434 liters, and 465 liters of mixtures of milk and water respectively. What is the maximum capacity of a container that can measure the mixture of all the three containers an exact number of times?
    (a) 1 liter
    (b) 31 liters
    (c) 41 liters
    (d) 7 liters

6.  Find the LCM of $\frac{1}{3}, \frac{5}{6}, \frac{2}{9}, \frac{4}{27}$.
    (a) $\frac{1}{54}$
    (b) $\frac{10}{27}$
    (c) $\frac{20}{3}$
    (d) $\frac{20}{27}$

7.  Six bells commence tolling together and toll at intervals of 2, 4, 6, 8, 10, and 12 seconds respectively. In 30 minutes, how many times do they toll together?
    (a) 15
    (b) 16
    (c) 17
    (d) 18

### Solution Matrix

**1. What is the HCF of 108, 288, and 360?**
*   **Step 1: Prime Factorization.**
    *   $108 = 2^2 \times 3^3$
    *   $288 = 2^5 \times 3^2$
    *   $360 = 2^3 \times 3^2 \times 5^1$
*   **Step 2: Identify common prime factors and their lowest powers.**
    *   Common prime factors are 2 and 3.
    *   Lowest power of 2 is $2^2$.
    *   Lowest power of 3 is $3^2$.
*   **Step 3: Multiply them.**
    *   HCF = $2^2 \times 3^2 = 4 \times 9 = 36$.
*   **Answer:** (b) 36

**2. The LCM of two numbers is 1820 and their HCF is 26. If one number is 130, what is the other number?**
*   **Step 1: Use the relationship formula.**
    *   Product of two numbers = HCF $\times$ LCM
    *   Let the two numbers be 'a' and 'b'. Given a = 130.
    *   $130 \times b = 26 \times 1820$
*   **Step 2: Solve for 'b'.**
    *   $b = \frac{26 \times 1820}{130}$
    *   $b = \frac{26 \times 182}{13} = 2 \times 182 = 364$.
*   **Answer:** (c) 364

**3. Find the least number which when divided by 20, 25, 35, and 40 leaves a remainder of 14, 19, 29, and 34 respectively.**
*   **Step 1: Find the difference between the divisor and the remainder.**
    *   $20 - 14 = 6$
    *   $25 - 19 = 6$
    *   $35 - 29 = 6$
    *   $40 - 34 = 6$
    *   The common difference is 6.
*   **Step 2: Find the LCM of the divisors (20, 25, 35, 40).**
    ```
    2 | 20, 25, 35, 40
    2 | 10, 25, 35, 20
    5 |  5, 25, 35, 10
      |  1,  5,  7,  2
    ```
    *   LCM = $2 \times 2 \times 5 \times 1 \times 5 \times 7 \times 2 = 1400$.
*   **Step 3: The required number is LCM - common difference.**
    *   Required number = $1400 - 6 = 1394$.
*   **Answer:** (a) 1394

**4. The HCF and LCM of two numbers are 13 and 455 respectively. If one of the numbers lies between 75 and 125, then that number is:**
*   **Step 1: Let the numbers be $13x$ and $13y$, where x and y are co-prime.**
    *   LCM = $13xy = 455$
    *   $xy = \frac{455}{13} = 35$
*   **Step 2: Find pairs of co-prime factors of 35.**
    *   (1, 35) and (5, 7).
*   **Step 3: Find the possible pairs of numbers.**
    *   If $(x, y) = (1, 35)$, numbers are $(13 \times 1, 13 \times 35) = (13, 455)$.
    *   If $(x, y) = (5, 7)$, numbers are $(13 \times 5, 13 \times 7) = (65, 91)$.
*   **Step 4: Check which number lies between 75 and 125.**
    *   From (13, 455), neither is in range.
    *   From (65, 91), 91 lies between 75 and 125.
*   **Answer:** (b) 91

**5. Three different containers contain 403 liters, 434 liters, and 465 liters of mixtures of milk and water respectively. What is the maximum capacity of a container that can measure the mixture of all the three containers an exact number of times?**
*   **Step 1: This is an HCF problem (maximum capacity that divides exactly).**
    *   Find HCF(403, 434, 465).
*   **Step 2: Use the division method for HCF of two numbers first.**
    *   HCF(403, 434):
        $434 \div 403 = 1$ (R 31)
        $403 \div 31 = 13$ (R 0)
        HCF(403, 434) = 31.
*   **Step 3: Find HCF of the result (31) and the third number (465).**
    *   HCF(31, 465):
        $465 \div 31 = 15$ (R 0)
        HCF(31, 465) = 31.
*   **Answer:** (b) 31 liters

**6. Find the LCM of $\frac{1}{3}, \frac{5}{6}, \frac{2}{9}, \frac{4}{27}$.**
*   **Step 1: Use the formula for LCM of fractions.**
    *   LCM(fractions) = $\frac{\text{LCM of Numerators}}{\text{HCF of Denominators}}$
*   **Step 2: Find LCM of Numerators (1, 5, 2, 4).**
    *   $1 = 1$
    *   $5 = 5^1$
    *   $2 = 2^1$
    *   $4 = 2^2$
    *   LCM(1, 5, 2, 4) = $2^2 \times 5^1 = 4 \times 5 = 20$.
*   **Step 3: Find HCF of Denominators (3, 6, 9, 27).**
    *   $3 = 3^1$
    *   $6 = 2^1 \times 3^1$
    *   $9 = 3^2$
    *   $27 = 3^3$
    *   Common prime factor is 3. Lowest power is $3^1$.
    *   HCF(3, 6, 9, 27) = 3.
*   **Step 4: Calculate the LCM of fractions.**
    *   LCM = $\frac{20}{3}$.
*   **Answer:** (c) $\frac{20}{3}$

**7. Six bells commence tolling together and toll at intervals of 2, 4, 6, 8, 10, and 12 seconds respectively. In 30 minutes, how many times do they toll together?**
*   **Step 1: Find the LCM of the intervals (2, 4, 6, 8, 10, 12).**
    ```
    2 | 2, 4, 6, 8, 10, 12
    2 | 1, 2, 3, 4,  5,  6
    3 | 1, 1, 3, 2,  5,  3
      | 1, 1, 1, 2,  5,  1
    ```
    *   LCM = $2 \times 2 \times 3 \times 2 \times 5 = 120$ seconds.
*   **Step 2: Convert 30 minutes to seconds.**
    *   30 minutes = $30 \times 60 = 1800$ seconds.
*   **Step 3: Calculate how many times they toll together in 1800 seconds.**
    *   Number of times = $\frac{\text{Total time}}{\text{LCM interval}} = \frac{1800}{120} = 15$.
*   **Step 4: Add 1 for the initial tolling.**
    *   Since they commence tolling *together* at the start (time 0), this counts as one instance. The calculation above gives the number of *intervals* within 30 minutes. So, if they toll at 0, 120, 240, ..., 1800 seconds, there are 15 intervals, meaning 16 tolls.
*   **Answer:** (b) 16