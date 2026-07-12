# Time and Work: High-Yield Topic Module

## Page 1: Core Concepts & Foundational Rules (Primary Textbook)

### Introduction to Time and Work
Time and Work problems involve calculating the time taken by individuals or groups to complete a certain amount of work, or determining the amount of work done in a given time. The fundamental principle is that **work rate is inversely proportional to time taken**.

**Key Idea:** If a person completes a work in 'N' days, their one day's work is 1/N.

### Core Rules & Formulas

#### Rule 1: Combined Work (Two Individuals)
*   **Concept:** If two individuals, say A and B, work together, their combined one day's work is the sum of their individual one day's work.
*   **Formula (Implicit from Example 1):**
    *   A's 1 day work = 1/x
    *   B's 1 day work = 1/y
    *   (A + B)'s 1 day work = (1/x) + (1/y)

#### Rule 2: Time Taken by Two Individuals Together
*   **Concept:** If A takes 'x' days and B takes 'y' days to complete a work, then working together, they will complete the work in (x * y) / (x + y) days.
*   **Formula:** `Time_together = (x * y) / (x + y)`
*   **Example 1 Application:** Raj (20 days), Rohan (12 days).
    *   Time = (20 * 12) / (20 + 12) = 240 / 32 = 15/2 = 7.5 days.

#### Rule 3: One Individual's Time When Combined Time is Known
*   **Concept:** If A and B together take 'x' days, and A alone takes 'y' days, then B alone will take (x * y) / (y - x) days.
*   **Formula:** `Time_B_alone = (x * y) / (y - x)`
*   **Example 2 Application:** A+B (12 days), A (18 days).
    *   Time_B_alone = (12 * 18) / (18 - 12) = 216 / 6 = 36 days.

#### Rule 4: Combined Time for Three Individuals (Paired Work)
*   **Concept:** If (A+B) take 'x' days, (B+C) take 'y' days, and (A+C) take 'z' days, then A, B, and C working together will take (2 * x * y * z) / (x*y + y*z + z*x) days.
*   **Formula:** `Time_A+B+C = (2xyz) / (xy + yz + zx)`
*   **Example 3 Application:** A+B (3 days), B+C (9 days), A+C (12 days).
    *   Time = (2 * 3 * 9 * 12) / (3*9 + 9*12 + 3*12) = 648 / (27 + 108 + 36) = 648 / 171 = 3 15/19 days.

#### Rule 5: M-D-T-W-R Formula (Man-Days-Time-Work-Rate)
*   **Concept:** This rule relates the number of workers (M), days (D), hours per day (T), amount of work (W), and wages (R) for two different scenarios, assuming constant individual efficiency.
*   **Formula:** `(M1 * D1 * T1) / (W1 * R1) = (M2 * D2 * T2) / (W2 * R2)`
    *   *Note:* If some parameters are constant or not given, they can be omitted (e.g., if T1=T2, or if R1=R2, or if W1=W2).
*   **Example 4 Application:** 15 men (M1) complete 1 work (W1) in 16 days (D1). 24 men (M2) complete 1 work (W2) in D2 days.
    *   (15 * 16) / 1 = (24 * D2) / 1
    *   D2 = (15 * 16) / 24 = 240 / 24 = 10 days.

## Page 2: Core Concepts & Foundational Rules (Primary Textbook Continued)

#### Rule 6: Men OR Women vs. Men AND Women
*   **Concept:** If 'm' men OR 'n' women can do a work in 'a' days, then 'x' men AND 'y' women can do the same work in `1 / [(x/m*a) + (y/n*a)]` days.
*   **Formula:** `Days = 1 / [ (x/m) * (1/a) + (y/n) * (1/a) ]` or simplified `a / [ (x/m) + (y/n) ]`
*   **Example 5 Application:** 3 men (m) OR 4 women (n) in 43 days (a). 7 men (x) AND 5 women (y).
    *   Days = 43 / [(7/3) + (5/4)] = 43 / [(28+15)/12] = 43 / (43/12) = 12 days.

#### Rule 7: Efficiency-Based Problems
*   **Concept:** If A can do a work in 'x' days and B is 'y%' faster than A, then B will complete the work in `x * [100 / (100 + y)]` days.
*   **Formula:** `Time_B = x * [100 / (100 + y)]`
*   **Example 6 Application:** X (16 days), Y is 60% faster than X.
    *   Time_Y = 16 * [100 / (100 + 60)] = 16 * (100 / 160) = 1600 / 160 = 10 days.

#### Rule 8: Wages Distribution
*   **Concept:** Wages are directly proportional to the work done. If A, B, C work together and receive 'k' as total wages, their shares are proportional to their individual one day's work (or total work done if different).
*   **Formulas (for A, B, C taking x, y, z days respectively):**
    *   Share of A = `[ (1/x) / ((1/x) + (1/y) + (1/z)) ] * k` which simplifies to `[yz / (xy + yz + zx)] * k`
    *   Share of B = `[ (1/y) / ((1/x) + (1/y) + (1/z)) ] * k` which simplifies to `[xz / (xy + yz + zx)] * k`
    *   Share of C = `[ (1/z) / ((1/x) + (1/y) + (1/z)) ] * k` which simplifies to `[xy / (xy + yz + zx)] * k`
*   **Note (Two individuals A, B taking x, y days):**
    *   Share of A = `[y / (x + y)] * k`
    *   Share of B = `[x / (x + y)] * k`
*   **Example 7 Application:** X (2 days), Y (3 days), Z (4 days), total `3900. Find Y's share.
    *   Y's share = `[xz / (xy + yz + zx)] * k` = `[ (2*4) / (2*3 + 3*4 + 4*2) ] * 3900`
    *   = `[8 / (6 + 12 + 8)] * 3900` = `(8/26) * 3900` = `1200.

### Other Important Formulas

1.  **A leaves 't' days before completion:** If A (x days) and B (y days) work together, but A leaves 't' days before completion, total time = `[y * (x + t)] / (x + y)` days.
    *   **Example 8 Application:** Akshu (10 days), Harshal (12 days). Akshu leaves 2 days before.
        *   Time = `[12 * (10 + 2)] / (10 + 12)` = `(12 * 12) / 22` = `144 / 22` = `72 / 11` = `6 6/11` days.
2.  **B leaves after 't' days:** If A (x days) and B (y days) start together, but B leaves after 't' days, total time = `x * (y - t) / y` days. (This formula seems to be for A completing the remaining work alone, not the total time. Let's re-evaluate the example. The example calculates `10 * (15-2)/15 = 10 * 13 / 15 = 130/15 = 26/3 = 8 2/3` days. This is the total time if A completes the remaining work. The formula `x * (y-t)/y` seems to be incorrect or misapplied for the given example. Let's re-derive for clarity in enrichment. The example's solution `10 * (15-2)/15` is actually `x * (y - t) / y`. This calculates the total work done by A if A works for `x` days, and B works for `t` days and then leaves. This is not the standard formula for total time when B leaves after t days. The standard approach is to calculate work done by A+B in t days, then remaining work, then time for A alone. The provided formula `x * (y-t)/y` is unusual. I will address this in the enrichment section.)
    *   **Example 9 Application (as per textbook formula):** A (10 days), B (15 days). B leaves after 2 days.
        *   Time = `10 * (15 - 2) / 15` = `10 * 13 / 15` = `130 / 15` = `26 / 3` = `8 2/3` days.

### Pipes and Cisterns
This topic is an application of Time and Work.
*   **Inlet Pipe:** Fills the tank (positive work).
*   **Outlet/Waste Pipe:** Empties the tank (negative work).

#### Rule 9: Two Inlet Pipes
*   **Concept:** If pipe A fills in 'a' hours and pipe B fills in 'b' hours, together they fill `(1/a + 1/b)` part in 1 hour. Total time = `(a * b) / (a + b)` hours.
*   **Formula:** `Time_together = (a * b) / (a + b)`
*   **Example 10 Application:** Pipe A (45h), Pipe B (36h).
    *   Time = (45 * 36) / (45 + 36) = 1620 / 81 = 20 hours.

#### Rule 10: Multiple Pipes (Inlet & Outlet)
*   **Concept (i):** A fills in 'a' h, B fills in 'b' h, C empties in 'c' h. Together, 1 hour work = `(1/a + 1/b - 1/c)`. Total time = `(a * b * c) / (bc + ac - ab)` hours.
*   **Formula (i):** `Time_A+B-C = (abc) / (bc + ac - ab)`
*   **Example 11 Application:** A (36 min), B (45 min), C (empties in 30 min).
    *   Time = (36 * 45 * 30) / (45*30 + 36*30 - 36*45) = 48600 / (1350 + 1080 - 1620) = 48600 / 810 = 60 min.
*   **Concept (ii):** A fills in 'a1' h, B empties in 'a2' h. Together, 1 hour work = `(1/a1 - 1/a2)`. Total time = `(a1 * a2) / (a2 - a1)` hours (assuming a2 > a1 for tank to fill).
*   **Formula (ii):** `Time_A-B = (a1 * a2) / (a2 - a1)`

---

## Page 3: AI Contextual Enrichment & Deep Dives

**Note:** No specific external notes were provided for this topic. The following enrichment is based on common alternative methods, deeper conceptual understanding, and practical tips frequently used in competitive exam preparation for Time and Work problems.

### Alternative Method: LCM (Least Common Multiple) Method for Work Problems

While the fractional method (1/x work per day) is fundamental, the LCM method often simplifies calculations, especially when dealing with multiple workers or varying work schedules.

**How it works:**
1.  **Assume Total Work:** Find the LCM of the individual times taken by each person/pipe. This LCM represents the 'total units of work' to be done.
2.  **Calculate Efficiency (Units per Day/Hour):** Divide the total work (LCM) by each person's individual time to find their 'efficiency' or 'work rate' in units per day/hour.
3.  **Solve:** Use these efficiency units to calculate combined work, remaining work, or time taken.

**Example (Revisiting Example 1: Raj & Rohan)**
*   Raj: 20 days, Rohan: 12 days.
*   **Step 1 (Total Work):** LCM(20, 12) = 60 units.
*   **Step 2 (Efficiency):**
    *   Raj's efficiency = 60 units / 20 days = 3 units/day.
    *   Rohan's efficiency = 60 units / 12 days = 5 units/day.
*   **Step 3 (Combined Time):**
    *   Combined efficiency = 3 + 5 = 8 units/day.
    *   Time together = Total Work / Combined Efficiency = 60 units / 8 units/day = 7.5 days.

**Benefits of LCM Method:**
*   Avoids fractions, making arithmetic simpler.
*   More intuitive for complex scenarios like partial work, alternating work, or pipes and cisterns.

### Deep Dive: M-D-T-W-R Formula (Rule 5)

The formula `(M1 * D1 * T1) / (W1 * R1) = (M2 * D2 * T2) / (W2 * R2)` is a powerful tool.
*   **Mnemonic:** Think of "MDH Masala" (a popular Indian spice brand) for the numerator (M, D, H for hours/time T). The denominator is Work (W) and Rate/Wages (R). So, `MDH / WR`.
*   **Conceptual Understanding:**
    *   **Direct Proportionality:** More men, more days, more hours, more work, more wages.
    *   **Inverse Proportionality:** More men, fewer days (for same work).
    *   **Key Insight:** The product of (Men * Days * Time) is directly proportional to (Work * Wages). The ratio `(MDT)/(WR)` remains constant if individual efficiency is constant.
*   **Common Pitfalls:**
    *   Forgetting to include '1' for work if not explicitly given (assuming one complete work).
    *   Confusing 'work' with 'wages'.
    *   Not converting units (e.g., if time is given in hours for one case and days for another, convert to a common unit).

### Deep Dive: Men OR Women vs. Men AND Women (Rule 6)

This rule hinges on establishing an equivalence between the work rates of men and women (or any two groups).
*   **Core Idea:** If 'm' men can do a work in 'a' days, and 'n' women can do the *same* work in 'a' days, then 'm' men are equivalent to 'n' women in terms of work capacity.
    *   So, `m Men = n Women`.
    *   This means `1 Man = (n/m) Women` or `1 Woman = (m/n) Men`.
*   **Application:** Convert all workers into a single type (e.g., all men or all women) and then apply the basic Time and Work principles or the M-D-T-W-R formula.

**Example (Revisiting Example 5):**
*   3 men OR 4 women in 43 days.
*   This implies: 3 Men = 4 Women.
*   Therefore, 1 Man = 4/3 Women.
*   We need to find time for 7 men and 5 women. Convert 7 men to women: `7 Men = 7 * (4/3) Women = 28/3 Women`.
*   Total women equivalent = `(28/3) Women + 5 Women = (28 + 15)/3 Women = 43/3 Women`.
*   Now, we know 4 women do the work in 43 days.
*   Using M1D1 = M2D2 (where M is equivalent women):
    *   `4 Women * 43 Days = (43/3) Women * D2 Days`
    *   `D2 = (4 * 43) / (43/3) = 4 * 3 = 12 days`.
This alternative approach using equivalence often feels more intuitive.

---

## Page 4: AI Contextual Enrichment & Deep Dives (Continued)

### Deep Dive: Efficiency and Time (Rule 7)

*   **Fundamental Relationship:** Efficiency is inversely proportional to the time taken to complete a fixed amount of work.
    *   If A is twice as efficient as B, A takes half the time B takes.
    *   If Efficiency_B = (100 + y)% of Efficiency_A, then Time_B = 100 / (100 + y) * Time_A.
*   **Example:** If A takes 10 days, and B is 50% more efficient than A.
    *   Efficiency_B = 150% of Efficiency_A.
    *   Time_B = (100/150) * Time_A = (2/3) * 10 days = 20/3 = 6 2/3 days.
    *   This matches Rule 7: `10 * [100 / (100 + 50)] = 10 * (100/150) = 10 * (2/3) = 20/3`.

### Deep Dive: Wages Distribution (Rule 8)

*   **Core Principle:** Wages are always distributed in proportion to the *work done* by each individual, not necessarily the time they spent, unless they all worked for the same duration.
*   **If they work for the same duration (as in Example 7):** The work done is inversely proportional to the time they *would take alone*. So, the ratio of wages is `(1/x) : (1/y) : (1/z)`.
    *   To simplify this ratio, find the LCM of x, y, z and multiply each fraction by it.
    *   Example 7: X (2 days), Y (3 days), Z (4 days).
        *   Ratio of work done (per day) = 1/2 : 1/3 : 1/4.
        *   LCM(2, 3, 4) = 12.
        *   Ratio = (12/2) : (12/3) : (12/4) = 6 : 4 : 3.
        *   Total ratio parts = 6 + 4 + 3 = 13.
        *   Y's share = (4/13) * 3900 = `1200. (Matches textbook solution, but this method is more intuitive).

### Clarification on "Some Other Formulas"

Let's re-examine the formulas for when a worker leaves.

1.  **A leaves 't' days before completion (Example 8):**
    *   Textbook formula: `[y * (x + t)] / (x + y)`
    *   **Conceptual Approach (LCM Method):**
        *   Akshu (A): 10 days, Harshal (H): 12 days. LCM(10, 12) = 60 units (Total Work).
        *   A's efficiency = 6 units/day. H's efficiency = 5 units/day.
        *   A leaves 2 days before completion. This means Harshal worked alone for the last 2 days.
        *   Work done by Harshal in last 2 days = 2 days * 5 units/day = 10 units.
        *   Remaining work = 60 - 10 = 50 units.
        *   This remaining work was done by A and H together.
        *   Combined efficiency = 6 + 5 = 11 units/day.
        *   Time A and H worked together = 50 units / 11 units/day = 50/11 days.
        *   Total time = (Time A+H together) + (Time H alone) = 50/11 + 2 = (50 + 22)/11 = 72/11 = `6 6/11` days.
    *   **Conclusion:** The textbook formula `[y * (x + t)] / (x + y)` is correct and yields the same result. The conceptual method confirms its validity.

2.  **B leaves after 't' days (Example 9):**
    *   Textbook formula: `x * (y - t) / y`
    *   **Conceptual Approach (LCM Method):**
        *   A: 10 days, B: 15 days. LCM(10, 15) = 30 units (Total Work).
        *   A's efficiency = 3 units/day. B's efficiency = 2 units/day.
        *   They work together for 2 days (t=2).
        *   Combined efficiency = 3 + 2 = 5 units/day.
        *   Work done in 2 days = 2 days * 5 units/day = 10 units.
        *   Remaining work = 30 - 10 = 20 units.
        *   B leaves, so A completes the remaining work alone.
        *   Time for A to complete remaining work = 20 units / 3 units/day = 20/3 days.
        *   Total time = (Time A+B together) + (Time A alone) = 2 days + 20/3 days = (6 + 20)/3 = 26/3 = `8 2/3` days.
    *   **Conclusion:** The textbook formula `x * (y - t) / y` correctly calculates the *total time* for the work to be finished under these conditions. It's a compact way to express the conceptual steps.

### Pipes and Cisterns Analogy

*   **Inlet Pipes = Positive Work:** They add to the tank's contents. Their work rate is positive.
*   **Outlet Pipes = Negative Work:** They remove from the tank's contents. Their work rate is negative.
*   The LCM method is exceptionally useful here for calculating net filling/emptying rates.

**Example (Revisiting Example 11):**
*   Pipe A: Fills in 36 min (efficiency = 1/36).
*   Pipe B: Fills in 45 min (efficiency = 1/45).
*   Pipe C: Empties in 30 min (efficiency = -1/30).
*   LCM(36, 45, 30) = 180 units (Total Capacity).
*   A's rate = 180/36 = +5 units/min.
*   B's rate = 180/45 = +4 units/min.
*   C's rate = 180/30 = -6 units/min.
*   Net rate (A+B+C) = 5 + 4 - 6 = 3 units/min.
*   Time to fill = Total Capacity / Net Rate = 180 units / 3 units/min = 60 min.

This confirms the textbook's formula and provides a robust alternative for problem-solving.

---

## Page 5: The Testing Layer - Practice Exercises & PYQs

### Practice Exercise

1.  **X can do 3/4 of a work in 12 days. In how many days X can finish the 1/2 work?**
    (a) 8 days
    (b) 16 days
    (c) 12 days
    (d) 24 days

    **Solution Matrix:**
    *   **Step 1: Find time for full work.** If X does 3/4 work in 12 days, then X does 1/4 work in 12/3 = 4 days. So, X completes full work (4/4) in 4 * 4 = 16 days.
    *   **Step 2: Find time for half work.** To finish 1/2 work, X will take (1/2) * 16 days = 8 days.
    *   **Answer:** (a) 8 days

2.  **A can do a piece of work in 10 days and B can do the same work in 12 days. How long will they take to finish the work, if both work together?**
    (a) 5 5/11 days
    (b) 6 5/11 days
    (c) 5 1/5 days
    (d) None of these

    **Solution Matrix:**
    *   **Method 1 (Rule 2):** Time = (x * y) / (x + y) = (10 * 12) / (10 + 12) = 120 / 22 = 60 / 11 = 5 5/11 days.
    *   **Method 2 (LCM):** LCM(10, 12) = 60 units. A's efficiency = 60/10 = 6 units/day. B's efficiency = 60/12 = 5 units/day. Combined efficiency = 6 + 5 = 11 units/day. Time = 60/11 = 5 5/11 days.
    *   **Answer:** (a) 5 5/11 days

3.  **A, B and C working together take 30 min to address a pile of envelopes. A and B together would take 40 min, A and C together would take 45 min. How long would each take working alone?**
    (a) A : 72 min, B : 90 min, C : 120 min
    (b) A : 42 min, B : 90 min, C : 120 min
    (c) A : 72 min, B : 90 min, C : 100 min
    (d) A : 72 min, B : 80 min, C : 120 min

    **Solution Matrix:**
    *   **Step 1: Calculate combined rates.**
        *   (A+B+C)'s 1 min work = 1/30
        *   (A+B)'s 1 min work = 1/40
        *   (A+C)'s 1 min work = 1/45
    *   **Step 2: Find individual rates.**
        *   C's 1 min work = (A+B+C)'s work - (A+B)'s work = 1/30 - 1/40 = (4-3)/120 = 1/120. So, C takes 120 min.
        *   B's 1 min work = (A+B+C)'s work - (A+C)'s work = 1/30 - 1/45 = (3-2)/90 = 1/90. So, B takes 90 min.
        *   A's 1 min work = (A+B)'s work - B's work = 1/40 - 1/90 = (9-4)/360 = 5/360 = 1/72. So, A takes 72 min.
    *   **Answer:** (a) A : 72 min, B : 90 min, C : 120 min

4.  **A and B together can do a piece of work in 12 days and A alone can do it in 36 days. In how many days can B alone do it?**
    (a) 18 days
    (b) 12 days
    (c) 15 days
    (d) 20 days

    **Solution Matrix:**
    *   **Method 1 (Rule 3):** Time_B_alone = (x * y) / (y - x) = (12 * 36) / (36 - 12) = (12 * 36) / 24 = 36 / 2 = 18 days.
    *   **Method 2 (LCM):** LCM(12, 36) = 36 units. (A+B)'s efficiency = 36/12 = 3 units/day. A's efficiency = 36/36 = 1 unit/day. B's efficiency = (A+B)'s efficiency - A's efficiency = 3 - 1 = 2 units/day. Time_B_alone = 36 units / 2 units/day = 18 days.
    *   **Answer:** (a) 18 days

5.  **Ram can do a piece of work in 6 days and Shyam can finish the same work in 12 days. How much work will be finished, if both work together for 2 days?**
    (a) One-fourth of the work
    (b) One-third of the work
    (c) Half of the work
    (d) Whole of the work

    **Solution Matrix:**
    *   **Step 1: Calculate individual one day's work.** Ram's 1 day work = 1/6. Shyam's 1 day work = 1/12.
    *   **Step 2: Calculate combined one day's work.** (Ram + Shyam)'s 1 day work = 1/6 + 1/12 = (2+1)/12 = 3/12 = 1/4.
    *   **Step 3: Calculate work done in 2 days.** Work done in 2 days = 2 * (1/4) = 1/2.
    *   **Answer:** (c) Half of the work

6.  **A and B can do given work in 8 days; B and C can do the same work in 12 days and A, B, C complete it in 6 days. In how many days can A and C finish it?**
    (a) 12
    (b) 8
    (c) 14
    (d) 16

    **Solution Matrix:**
    *   **Step 1: Calculate individual rates from combined rates.**
        *   (A+B+C)'s 1 day work = 1/6
        *   (A+B)'s 1 day work = 1/8
        *   (B+C)'s 1 day work = 1/12
    *   **Step 2: Find A's and C's individual rates.**
        *   C's 1 day work = (A+B+C)'s work - (A+B)'s work = 1/6 - 1/8 = (4-3)/24 = 1/24.
        *   A's 1 day work = (A+B+C)'s work - (B+C)'s work = 1/6 - 1/12 = (2-1)/12 = 1/12.
    *   **Step 3: Calculate (A+C)'s combined rate.**
        *   (A+C)'s 1 day work = 1/24 + 1/12 = (1+2)/24 = 3/24 = 1/8.
    *   **Step 4: Find time for (A+C) together.** If (A+C) do 1/8 work in 1 day, they take 8 days to finish the work.
    *   **Answer:** (b) 8

7.  **A can finish a work in 8 days and B can do it in 12 days. After A had worked for 3 days, B also joins A to finish the remaining work. In how many days will the remaining work be finished?**
    (a) 2 days
    (b) 3 days
    (c) 4 days
    (d) 5 days

    **Solution Matrix:**
    *   **Method 1 (Fractions):**
        *   A's 1 day work = 1/8. B's 1 day work = 1/12.
        *   Work done by A in 3 days = 3 * (1/8) = 3/8.
        *   Remaining work = 1 - 3/8 = 5/8.
        *   (A+B)'s 1 day work = 1/8 + 1/12 = (3+2)/24 = 5/24.
        *   Time to finish remaining work = (Remaining Work) / (A+B)'s 1 day work = (5/8) / (5/24) = (5/8) * (24/5) = 3 days.
    *   **Method 2 (LCM):**
        *   LCM(8, 12) = 24 units (Total Work).
        *   A's efficiency = 24/8 = 3 units/day. B's efficiency = 24/12 = 2 units/day.
        *   Work done by A in 3 days = 3 days * 3 units/day = 9 units.
        *   Remaining work = 24 - 9 = 15 units.
        *   Combined efficiency (A+B) = 3 + 2 = 5 units/day.
        *   Time to finish remaining work = 15 units / 5 units/day = 3 days.
    *   **Answer:** (b) 3 days

8.  **Two taps can fill a tub in 5 min and 7 min, respectively. A pipe can empty it in 3 min. If all the three are kept open simultaneously, when will the tub be full?**
    (a) 60 min
    (b) 85 min
    (c) 90 min
    (d) 105 min

    **Solution Matrix:**
    *   **Step 1: Assign rates.** Tap 1 (fills): +1/5 per min. Tap 2 (fills): +1/7 per min. Pipe (empties): -1/3 per min.
    *   **Step 2: Calculate combined rate.** Combined rate = 1/5 + 1/7 - 1/3.
        *   LCM(5, 7, 3) = 105.
        *   Combined rate = (21 + 15 - 35) / 105 = (36 - 35) / 105 = 1/105 per min.
    *   **Step 3: Calculate time to fill.** Time = 1 / (Combined rate) = 1 / (1/105) = 105 min.
    *   **Answer:** (d) 105 min

9.  **A and B can do a piece of work in 40 days and 50 days, respectively. Both begin together but after a certain time, A leaves off. In this case B finishes the remaining work in 20 days. After how many days did A leave?**
    (a) 14 days
    (b) 13 1/3 days
    (c) 13 days
    (d) 15 days

    **Solution Matrix:**
    *   **Step 1: Calculate individual rates.** A's 1 day work = 1/40. B's 1 day work = 1/50.
    *   **Step 2: Calculate work done by B alone.** B finishes remaining work in 20 days. Work done by B in 20 days = 20 * (1/50) = 2/5.
    *   **Step 3: Calculate remaining work (done by A+B).** Work done by (A+B) = 1 - 2/5 = 3/5.
    *   **Step 4: Calculate (A+B)'s combined rate.** (A+B)'s 1 day work = 1/40 + 1/50 = (5+4)/200 = 9/200.
    *   **Step 5: Calculate time (A+B) worked together.** Time = (Work done by A+B) / (A+B)'s 1 day work = (3/5) / (9/200) = (3/5) * (200/9) = (1/1) * (40/3) = 40/3 = 13 1/3 days.
    *   **Answer:** (b) 13 1/3 days

10. **P and Q can do a job in 2 days, Q and R can do it in 4 days and P and R in 12/5 days. What is the number of days required for P alone to do the job?**
    (a) 5/2
    (b) 3
    (c) 14/5
    (d) 6

    **Solution Matrix:**
    *   **Step 1: Write down 1 day's work for pairs.**
        *   (P+Q)'s 1 day work = 1/2
        *   (Q+R)'s 1 day work = 1/4
        *   (P+R)'s 1 day work = 5/12
    *   **Step 2: Sum the combined rates.**
        *   2 * (P+Q+R)'s 1 day work = 1/2 + 1/4 + 5/12 = (6+3+5)/12 = 14/12 = 7/6.
        *   (P+Q+R)'s 1 day work = (7/6) / 2 = 7/12.
    *   **Step 3: Find P's 1 day work.**
        *   P's 1 day work = (P+Q+R)'s work - (Q+R)'s work = 7/12 - 1/4 = (7-3)/12 = 4/12 = 1/3.
    *   **Step 4: Find time for P alone.** P takes 3 days to do the job.
    *   **Answer:** (b) 3

11. **1/48 of a work is completed in half a day by 5 persons. Then, 1/40 of the work can be completed by 6 persons in how many days?**
    (a) 1
    (b) 2
    (c) 3
    (d) 1/2

    **Solution Matrix:**
    *   **Step 1: Apply Rule 5 (M-D-T-W).** Here, T is not given, so assume constant or 1.
        *   M1 = 5 persons, D1 = 0.5 days (half a day), W1 = 1/48.
        *   M2 = 6 persons, D2 = ?, W2 = 1/40.
    *   **Step 2: Set up the equation.** `(M1 * D1) / W1 = (M2 * D2) / W2`
        *   `(5 * 0.5) / (1/48) = (6 * D2) / (1/40)`
        *   `2.5 * 48 = 6 * D2 * 40`
        *   `120 = 240 * D2`
        *   `D2 = 120 / 240 = 1/2 days`.
    *   **Answer:** (d) 1/2

12. **A garrison of ‘n’ men had enough food to last for 30 days. After 10 days, 50 more men joined them. If the food now lasted for 16 days, what is the value of n?**
    (a) 200
    (b) 240
    (c) 280
    (d) 320

    **Solution Matrix:**
    *   **Step 1: Calculate remaining food.** After 10 days, the food for 'n' men would have lasted for (30 - 10) = 20 more days.
    *   **Step 2: Apply M1D1 = M2D2.**
        *   Initial scenario (remaining food): M1 = n men, D1 = 20 days.
        *   New scenario: M2 = (n + 50) men, D2 = 16 days.
    *   **Step 3: Set up the equation.** `n * 20 = (n + 50) * 16`
        *   `20n = 16n + 800`
        *   `4n = 800`
        *   `n = 200`.
    *   **Answer:** (a) 200

13. **Two pipes A and B can fill a tank in 12 and 16 min, respectively. If both the pipes are opened simultaneously, after how much time should B be closed so that the tank is full in 9 min?**
    (a) 3 min
    (b) 5 min
    (c) 4 min
    (d) 2 min

    **Solution Matrix:**
    *   **Step 1: Calculate individual rates.** A's 1 min work = 1/12. B's 1 min work = 1/16.
    *   **Step 2: Determine which pipe works for full duration.** Pipe A works for the entire 9 minutes.
    *   **Step 3: Calculate work done by A in 9 min.** Work done by A = 9 * (1/12) = 3/4.
    *   **Step 4: Calculate remaining work.** Remaining work = 1 - 3/4 = 1/4.
    *   **Step 5: Calculate time B worked.** This remaining work (1/4) was done by pipe B. Time B worked = (Remaining Work) / (B's 1 min work) = (1/4) / (1/16) = (1/4) * 16 = 4 min.
    *   **Answer:** (c) 4 min

14. **2 men undertake to do a job for ` 1400. One can do it alone in 7 days and the other in 8 days. With the assistance of a boy they finish the work in 3 days. How should the money be divided?**
    (a) ` 600, ` 525, ` 275
    (b) ` 550, ` 500, ` 350
    (c) ` 650, ` 470, ` 280
    (d) None of these

    **Solution Matrix:**
    *   **Step 1: Calculate individual work rates.**
        *   Man 1 (M1): 1/7 work/day.
        *   Man 2 (M2): 1/8 work/day.
        *   (M1+M2+Boy)'s 1 day work = 1/3.
    *   **Step 2: Calculate Boy's work rate.**
        *   Boy's 1 day work = (M1+M2+Boy)'s work - (M1's work + M2's work)
        *   = 1/3 - (1/7 + 1/8) = 1/3 - (8+7)/56 = 1/3 - 15/56.
        *   LCM(3, 56) = 168.
        *   Boy's 1 day work = (56 - 45)/168 = 11/168.
    *   **Step 3: Determine ratio of work done (since they all worked for 3 days).**
        *   M1's work in 3 days = 3 * (1/7) = 3/7.
        *   M2's work in 3 days = 3 * (1/8) = 3/8.
        *   Boy's work in 3 days = 3 * (11/168) = 11/56.
        *   Ratio of work done = 3/7 : 3/8 : 11/56.
        *   Multiply by LCM(7, 8, 56) = 56 to clear fractions:
        *   (3/7)*56 : (3/8)*56 : (11/56)*56 = 24 : 21 : 11.
        *   Total ratio parts = 24 + 21 + 11 = 56.
    *   **Step 4: Distribute wages (`1400).**
        *   M1's share = (24/56) * 1400 = 24 * 25 = ` 600.
        *   M2's share = (21/56) * 1400 = 21 * 25 = ` 525.
        *   Boy's share = (11/56) * 1400 = 11 * 25 = ` 275.
    *   **Answer:** (a) ` 600, ` 525, ` 275

15. **A, B and C can do a piece of work individually in 8, 10 and 15 days, respectively. A and B start working but A quits after working for 2 days. After this, C joins B till the completion of work. In how many days will the work be completed?**
    (a) 53/9 days
    (b) 34/7 days
    (c) 85/13 days
    (d) 53/10 days

    **Solution Matrix:**
    *   **Step 1: Calculate individual efficiencies (LCM method).**
        *   LCM(8, 10, 15) = 120 units (Total Work).
        *   A's efficiency = 120/8 = 15 units/day.
        *   B's efficiency = 120/10 = 12 units/day.
        *   C's efficiency = 120/15 = 8 units/day.
    *   **Step 2: Work done by A and B together for 2 days.**
        *   (A+B)'s combined efficiency = 15 + 12 = 27 units/day.
        *   Work done in 2 days = 2 * 27 = 54 units.
    *   **Step 3: Remaining work.**
        *   Remaining work = 120 - 54 = 66 units.
    *   **Step 4: Work done by B and C together.**
        *   (B+C)'s combined efficiency = 12 + 8 = 20 units/day.
        *   Time taken by B and C to complete remaining work = 66 units / 20 units/day = 33/10 days.
    *   **Step 5: Total time.**
        *   Total time = (Time A+B worked) + (Time B+C worked) = 2 days + 33/10 days = (20 + 33)/10 = 53/10 days.
    *   **Answer:** (d) 53/10 days

16. **A can do a piece of work in ‘x’ days and B can do the same work 3x days. To finish the work together they take 12 days. What is the value of ‘x’?**
    (a) 8
    (b) 10
    (c) 12
    (d) 16

    **Solution Matrix:**
    *   **Step 1: Apply Rule 2 for combined work.**
        *   Time together = (Time_A * Time_B) / (Time_A + Time_B)
        *   12 = (x * 3x) / (x + 3x)
    *   **Step 2: Solve the equation.**
        *   12 = (3x^2) / (4x)
        *   12 = 3x / 4
        *   48 = 3x
        *   x = 48 / 3 = 16.
    *   **Answer:** (d) 16

17. **If 6 men and 8 boys can do a piece of work in 10 days while 26 men and 48 boys can do the same in 2 days, what is the time taken by 15 men and 20 boys in doing the same type of work?**
    (a) 4 days
    (b) 5 days
    (c) 6 days
    (d) 7 days

    **Solution Matrix:**
    *   **Step 1: Formulate equations based on M1D1 = M2D2 (total work is constant).**
        *   (6 Men + 8 Boys) * 10 = Total Work (Eq 1)
        *   (26 Men + 48 Boys) * 2 = Total Work (Eq 2)
    *   **Step 2: Equate and find relationship between Men and Boys.**
        *   (6M + 8B) * 10 = (26M + 48B) * 2
        *   60M + 80B = 52M + 96B
        *   8M = 16B
        *   1 Man = 2 Boys (M = 2B)
    *   **Step 3: Convert all workers to a single unit (e.g., Boys).**
        *   From Eq 1: (6*(2B) + 8B) * 10 = (12B + 8B) * 10 = 20B * 10 = 200 Boys. So, Total Work = 200 Boy-days.
        *   Target group: 15 Men + 20 Boys = 15*(2B) + 20B = 30B + 20B = 50 Boys.
    *   **Step 4: Calculate time for the target group.**
        *   Time = Total Work / (Efficiency of target group) = 200 Boy-days / 50 Boys = 4 days.
    *   **Answer:** (a) 4 days

18. **Four taps can individually fill a cistern of water in 1h, 2h, 3h and 6h, respectively. If all the four taps are opened simultaneously, the cistern can be filled in how many minutes?**
    (a) 20
    (b) 30
    (c) 35
    (d) 40

    **Solution Matrix:**
    *   **Step 1: Calculate individual rates (per hour).**
        *   Tap 1: 1/1 per hour.
        *   Tap 2: 1/2 per hour.
        *   Tap 3: 1/3 per hour.
        *   Tap 4: 1/6 per hour.
    *   **Step 2: Calculate combined rate (per hour).**
        *   Combined rate = 1/1 + 1/2 + 1/3 + 1/6.
        *   LCM(1, 2, 3, 6) = 6.
        *   Combined rate = (6 + 3 + 2 + 1) / 6 = 12/6 = 2 per hour.
    *   **Step 3: Calculate time to fill (in hours).**
        *   Time = 1 / (Combined rate) = 1 / 2 = 0.5 hours.
    *   **Step 4: Convert to minutes.**
        *   0.5 hours * 60 min/hour = 30 minutes.
    *   **Answer:** (b) 30

19. **76 ladies complete a job in 33 days. Due to some reason some ladies did not join the work and therefore, it was completed in 44 days. The number of ladies who did not report for the work is**
    (a) 17
    (b) 18
    (c) 19
    (d) 20

    **Solution Matrix:**
    *   **Step 1: Apply M1D1 = M2D2.**
        *   M1 = 76 ladies, D1 = 33 days.
        *   Let M2 be the number of ladies who actually worked, D2 = 44 days.
    *   **Step 2: Set up the equation.**
        *   76 * 33 = M2 * 44
    *   **Step 3: Solve for M2.**
        *   M2 = (76 * 33) / 44 = (76 * 3) / 4 = 19 * 3 = 57 ladies.
    *   **Step 4: Calculate ladies who did not report.**
        *   Ladies who did not report = Initial ladies - Actual ladies = 76 - 57 = 19 ladies.
    *   **Answer:** (c) 19

20. **9 men finish one-third work in 10 days. The number of additional men required for finishing the remaining work in 2 more days will be**
    (a) 78
    (b) 81
    (c) 55
    (d) 30

    **Solution Matrix:**
    *   **Step 1: Identify parameters for M-D-W formula.**
        *   Scenario 1: M1 = 9 men, D1 = 10 days, W1 = 1/3 work.
        *   Scenario 2: Remaining work W2 = 1 - 1/3 = 2/3 work. Remaining days D2 = 2 days. Let M2 be the total men required.
    *   **Step 2: Apply (M1*D1)/W1 = (M2*D2)/W2.**
        *   (9 * 10) / (1/3) = (M2 * 2) / (2/3)
        *   90 * 3 = M2 * 2 * (3/2)
        *   270 = M2 * 3
        *   M2 = 270 / 3 = 90 men.
    *   **Step 3: Calculate additional men.**
        *   Additional men = Total men required - Initial men = 90 - 9 = 81 men.
    *   **Answer:** (b) 81

21. **Ravi and Sneha working separately can finish a job in 8 and 12 h, respectively. If they work for an hour alternately, Ravi beginning at 9:00 am. When will the job be finished?**
    (a) 7 : 30 pm (b) 7 : 00 pm (c) 6 : 30 pm (d) 6 : 00 pm

    **Solution Matrix:**
    *   **Step 1: Calculate individual efficiencies (LCM method).**
        *   LCM(8, 12) = 24 units (Total Work).
        *   Ravi's efficiency = 24/8 = 3 units/hour.
        *   Sneha's efficiency = 24/12 = 2 units/hour.
    *   **Step 2: Calculate work done in one cycle (2 hours).**
        *   Hour 1 (Ravi): 3 units.
        *   Hour 2 (Sneha): 2 units.
        *   Work in 2 hours = 3 + 2 = 5 units.
    *   **Step 3: Find full cycles.**
        *   We need 24 units. 5 units per 2 hours.
        *   Number of full cycles = 24 / 5 = 4 with a remainder of 4 units.
        *   Work done in 4 cycles (8 hours) = 4 * 5 = 20 units.
        *   Time taken = 4 cycles * 2 hours/cycle = 8 hours.
    *   **Step 4: Remaining work and final hours.**
        *   Remaining work = 24 - 20 = 4 units.
        *   The 9th hour (starting at 9:00 am + 8 hours = 5:00 pm) is Ravi's turn. Ravi does 3 units.
        *   Remaining work = 4 - 3 = 1 unit.
        *   Time taken so far = 8 hours + 1 hour = 9 hours (up to 6:00 pm).
        *   The 10th hour (starting at 6:00 pm) is Sneha's turn. Sneha does 2 units/hour.
        *   Time for 1 unit = 1 unit / 2 units/hour = 0.5 hours = 30 minutes.
    *   **Step 5: Total time and completion time.**
        *   Total time = 9 hours + 30 minutes = 9 hours 30 minutes.
        *   Starting at 9:00 am, 9 hours 30 minutes later is 6:30 pm.
    *   **Answer:** (c) 6 : 30 pm

22. **Consider the following statements:**
    **I. If 18 men can earn ` 1440 in 5 days, then 10 men can earn ` 1280 in 6 days.**
    **II. If 16 men can earn ` 1120 in 7 days, then 21 men can earn ` 800 in 4 days.**
    **Which of the statement(s) given above is/are correct?**
    (a) Only I
    (b) Only II
    (c) Both I and II

    **Solution Matrix:**
    *   **Apply M-D-R formula (Rule 5, where W is not given, assuming constant work rate per person).**
        *   `(M1 * D1) / R1 = (M2 * D2) / R2` (This is derived from M D T / W R, assuming T and W are constant per person, or work is proportional to wages).
        *   Alternatively, calculate earnings per man-day: `R / (M * D)`. This should be constant.

    *   **Statement I:**
        *   Scenario 1: `1440 / (18 * 5) = 1440 / 90 = 16`. (Earnings per man-day)
        *   Scenario 2: `1280 / (10 * 6) = 1280 / 60 = 128 / 6 = 64 / 3 = 21.33`.
        *   Since 16 != 21.33, Statement I is INCORRECT.

    *   **Statement II:**
        *   Scenario 1: `1120 / (16 * 7) = 1120 / 112 = 10`. (Earnings per man-day)
        *   Scenario 2: `800 / (21 * 4) = 800 / 84 = 200 / 21 = 9.52`.
        *   Since 10 != 9.52, Statement II is INCORRECT.

    *   **Re-checking the problem statement and rule 5:** Rule 5 states `(M1 D1 T1) / (W1 R1) = (M2 D2 T2) / (W2 R2)`. If work (W) is assumed to be proportional to wages (R), then `(M1 D1 T1) / R1 = (M2 D2 T2) / R2` is the correct form. If T is constant, then `(M1 D1) / R1 = (M2 D2) / R2`.

    *   **Let's re-evaluate Statement I using `(M1 D1) / R1 = (M2 D2) / R2`:**
        *   (18 * 5) / 1440 = (10 * 6) / 1280
        *   90 / 1440 = 60 / 1280
        *   1 / 16 = 6 / 128 = 3 / 64
        *   1/16 != 3/64. So, Statement I is still INCORRECT.

    *   **Let's re-evaluate Statement II using `(M1 D1) / R1 = (M2 D2) / R2`:**
        *   (16 * 7) / 1120 = (21 * 4) / 800
        *   112 / 1120 = 84 / 800
        *   1 / 10 = 21 / 200
        *   1/10 = 20/200. 20/200 != 21/200. So, Statement II is still INCORRECT.

    *   **Conclusion:** Both statements appear incorrect based on the standard interpretation of the M-D-R rule. There might be an error in the question or the expected answer if it implies one is correct. However, following the rule strictly, neither holds true. If this is a PYQ, there might be a subtle interpretation or a typo. Assuming the question expects a correct statement, and given the options, let's re-check calculations very carefully.

    *   **Re-check I:**
        *   `18 * 5 / 1440 = 90 / 1440 = 1/16`
        *   `10 * 6 / 1280 = 60 / 1280 = 6 / 128 = 3 / 64`
        *   `1/16 = 4/64`. `4/64 != 3/64`. So I is FALSE.

    *   **Re-check II:**
        *   `16 * 7 / 1120 = 112 / 1120 = 1/10`
        *   `21 * 4 / 800 = 84 / 800 = 21 / 200`
        *   `1/10 = 20/200`. `20/200 != 21/200`. So II is FALSE.

    *   **Final Conclusion:** Based on strict application of Rule 5, both statements are incorrect. This implies either the question has an error, or the provided options are flawed, or there's a different rule being applied. However, for the purpose of this exercise, we must state the derived conclusion. If forced to choose, and assuming a single correct answer, there's an issue. Let's assume there might be a rounding or approximation in the original source, or a slight miscalculation. Given the context of competitive exams, sometimes one statement is "more correct" or a calculation error is intended to be caught. But mathematically, both are false. If this were a real exam, I'd flag it. For now, I will state "Neither I nor II is correct" if that were an option, but since it's not, I'll indicate both are false.
    *   **Let's assume the question expects the earnings per man-day to be equal.**
        *   Statement I: `1440 / (18*5) = 16`. `1280 / (10*6) = 21.33`. Not equal.
        *   Statement II: `1120 / (16*7) = 10`. `800 / (21*4) = 9.52`. Not equal.
    *   **Therefore, neither statement is correct.** The options provided (a) Only I, (b) Only II, (c) Both I and II, (d) Neither I nor II (implied by lack of other options) suggest there should be at least one correct. This is a discrepancy. I will proceed with the strict mathematical evaluation.
    *   **Answer:** (Neither I nor II is correct based on calculation, but since that's not an option, there's an issue with the question or options provided.)

**(Self-correction for Q22):** In competitive exams, if such a situation arises, one typically re-checks calculations. If still no match, it's often a flawed question. However, if forced to choose from given options, one might look for the closest match or a common mistake. But as an AI, I must stick to the precise calculation. Let's assume the question is valid and I might have missed something. The problem is about earning. So the rate of earning per man-day should be constant.
For I: `1440 / (18 * 5) = 16`. `1280 / (10 * 6) = 128/6 = 64/3 = 21.33`. Not equal.
For II: `1120 / (16 * 7) = 10`. `800 / (21 * 4) = 800/84 = 200/21 = 9.52`. Not equal.

Given the options, and the typical nature of these questions, there is almost certainly a correct answer intended. Let me re-read Rule 5. `M D T / W R`. If W and R are proportional, then `M D T / R` is constant. If T is constant, `M D / R` is constant.
So, `(M1 * D1) / R1 = (M2 * D2) / R2`.
Statement I: `(18 * 5) / 1440 = 90 / 1440 = 1/16`. `(10 * 6) / 1280 = 60 / 1280 = 6/128 = 3/64`. `1/16 = 4/64`. So `4/64 != 3/64`. Statement I is FALSE.
Statement II: `(16 * 7) / 1120 = 112 / 1120 = 1/10`. `(21 * 4) / 800 = 84 / 800 = 21/200`. `1/10 = 20/200`. So `20/200 != 21/200`. Statement II is FALSE.

It's highly probable there's an error in the question or options. Since I cannot generate an "error in question" answer, and I must provide a solution, I will state that based on strict calculation, neither is correct. However, if this were a real test, I'd have to choose. Without external context or clarification, I cannot definitively pick one if both are mathematically false. I will explicitly state my finding.

**Revised Answer for Q22:**
*   **Step 1: Understand the principle.** The amount earned is proportional to the work done, which is proportional to (Men * Days * Hours). Assuming hours are constant, earnings are proportional to (Men * Days). So, the ratio (Men * Days) / Earnings should be constant.
*   **Step 2: Evaluate Statement I.**
    *   Scenario 1: (18 men * 5 days) / `1440 = 90 / 1440 = 1/16`.
    *   Scenario 2: (10 men * 6 days) / `1280 = 60 / 1280 = 3/64`.
    *   Since 1/16 (which is 4/64) is not equal to 3/64, Statement I is **Incorrect**.
*   **Step 3: Evaluate Statement II.**
    *   Scenario 1: (16 men * 7 days) / `1120 = 112 / 1120 = 1/10`.
    *   Scenario 2: (21 men * 4 days) / `800 = 84 / 800 = 21/200`.
    *   Since 1/10 (which is 20/200) is not equal to 21/200, Statement II is **Incorrect**.
*   **Conclusion:** Based on the calculations, both statements I and II are incorrect. Given the options, there might be an error in the question or the provided options. If a choice *must* be made and assuming a single correct answer is implied, this question is flawed. However, adhering strictly to the provided data and rules, neither is correct.
*   **Answer:** (Neither I nor II is correct based on calculation.) (If forced to choose from (a), (b), (c), this question is problematic.)