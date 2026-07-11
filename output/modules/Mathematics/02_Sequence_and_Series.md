# Sequence and Series: High-Yield Topic Module

## Pages 1-2: Core Context - Foundational Numerical Concepts & Data Analysis

This section extracts foundational concepts related to numerical patterns and data analysis, which are integral to understanding sequences and series, directly from the provided textbook context. While the terms "sequence" and "series" are not explicitly defined, the problems presented utilize their underlying principles, particularly concerning arithmetic progressions and various means.

### 1. Arithmetic Progression (AP) - Implicit Understanding

An arithmetic progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. This constant difference is called the common difference.

**Concept from Textbook (Q80):**
The problem involving "consecutive even integers" for the sides of a right-angled triangle implicitly uses the concept of an arithmetic progression. If the sides are `x-2, x, x+2`, the common difference is `2`.

*   **Example (Q80):** Sides of a right-angled triangle are consecutive even integers.
    *   Let the sides be `(x-2), x, (x+2)`.
    *   Using Pythagoras theorem: `(x-2)^2 + x^2 = (x+2)^2`
    *   Solving this yields `x = 8`.
    *   Therefore, the sides are `6, 8, 10`.
    *   This forms an AP with a common difference of 2.

### 2. Measures of Central Tendency

Measures of central tendency are single values that attempt to describe a set of data by identifying the central position within that set of data. The textbook focuses on Arithmetic Mean, Median, and Mode.

#### 2.1 Arithmetic Mean (AM)

The arithmetic mean is the sum of all values in a dataset divided by the number of values. It is the most common type of average.

*   **Formula (Inferred from Q95, Q96, Q98):**
    For a set of `n` observations `x1, x2, ..., xn`, the Arithmetic Mean (AM) is:
    `AM = (x1 + x2 + ... + xn) / n = Σxi / n`

*   **Key Properties (Inferred from Q97):**
    *   The algebraic sum of the deviations from the mean of any data set is always zero.
        `Σ(xi - AM) = 0`

*   **Example (Q95):** Mean age of 7 family members:
    `Mean = (2+5+12+18+38+40+60) / 7 = 175 / 7 = 25` years.

*   **Example (Q98):** Mean of `x, x+2, x+4, x+6, x+8` is `m`.
    `m = (x + (x+2) + (x+4) + (x+6) + (x+8)) / 5 = (5x + 20) / 5 = x + 4`
    So, `x = m - 4`.
    Mean of first three observations (`x, x+2, x+4`) = `(x + x+2 + x+4) / 3 = (3x + 6) / 3 = x + 2`.
    Substituting `x = m - 4`, the mean is `(m - 4) + 2 = m - 2`.

#### 2.2 Median

The median is the middle value in a dataset when the values are arranged in ascending or descending order. It divides the data into two equal halves.

*   **Calculation Method (Inferred from Q91, Q92, Q99):**
    1.  Arrange the data in ascending (or descending) order.
    2.  **If `n` (number of observations) is odd:** Median = `((n+1)/2)`th observation.
    3.  **If `n` (number of observations) is even:** Median = `(n/2)`th observation + `(n/2 + 1)`th observation / 2.

*   **Example (Q91 - Odd `n`):** Marks of 15 candidates (after sorting and including 5 failures as blanks):
    `_, _, _, _, _, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9` (Assuming 5 failed candidates had marks less than 4 or were not counted in the sorted list, but the problem implies 15 candidates in total, and the sorted list shows 10 marks. The solution implies 5 missing values at the start, making it 15 total. Let's assume the 10 given marks are the *only* marks to consider for median of passed candidates, or the _ represent the 5 lowest marks which are unknown but still part of the 15 candidates, and the median is based on the 15 positions.)
    If `n = 15` (odd), Median = `(15+1)/2 = 8`th observation.
    Sorted list (as per solution): `_, _, _, _, _, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9`
    The 8th observation is `6`.

*   **Example (Q92 - Odd `n`):** Yield from 7 plots: `180, 191, 175, 111, 154, 141, 176`
    Sorted: `111, 141, 154, 175, 176, 180, 191`
    `n = 7` (odd), Median = `(7+1)/2 = 4`th observation.
    The 4th observation is `175`.

*   **Example (Q99 - Even `n`):** Sequence `2, 4, 6, ..., 100`
    This is an arithmetic progression. Number of terms `n = (100-2)/2 + 1 = 98/2 + 1 = 49 + 1 = 50`.
    `n = 50` (even).
    Median = `(25th observation + 26th observation) / 2`
    25th observation = `2 * 25 = 50`
    26th observation = `2 * 26 = 52`
    Median = `(50 + 52) / 2 = 102 / 2 = 51`.

#### 2.3 Mode

The mode is the value that appears most frequently in a data set.

*   **Application (Inferred from Q93):**
    The mode is used to determine the average size of a shoe sold in a shop because it represents the most common or most preferred size. While the solution incorrectly states Arithmetic Mean, the *context* of "average size of shoe sold" strongly points to Mode as the appropriate measure for such categorical data or frequency-based decisions. (Self-correction: The textbook answer says (a) Arithmetic Mean. This is a common point of confusion. For *average size* in terms of numerical value, AM is used. For *most frequent size* (e.g., to stock inventory), Mode is used. Given the context of "average size of the shoe sold", it could be interpreted as the typical numerical size, for which AM is a general average. However, for practical inventory management, mode is more relevant. I will stick to the textbook's answer for core context, but note this in enrichment).

### 3. Other Means: Harmonic Mean (HM) and Geometric Mean (GM)

These are specialized types of averages used in specific contexts.

*   **Harmonic Mean (HM) (Inferred from Q100):**
    For two numbers `a` and `b`, `HM = 2ab / (a+b)`.
    For `n` numbers `x1, x2, ..., xn`, `HM = n / (1/x1 + 1/x2 + ... + 1/xn)`.

*   **Geometric Mean (GM) (Inferred from Q100):**
    For two numbers `a` and `b`, `GM = sqrt(ab)`.
    For `n` numbers `x1, x2, ..., xn`, `GM = (x1 * x2 * ... * xn)^(1/n)`.

*   **Relationship between AM, GM, HM (Q100):**
    For any set of positive numbers, the following relationship holds:
    `AM ≥ GM ≥ HM`
    And for two positive numbers `a` and `b`:
    `AM * HM = (GM)^2`

*   **Example (Q100):** Given HM = 10, GM = 12. Find AM.
    `AM * HM = (GM)^2`
    `AM * 10 = (12)^2`
    `AM * 10 = 144`
    `AM = 144 / 10 = 14.4`

---

## Pages 3-4: AI Contextual Enrichment - Deeper Dive & Exam Strategies

*(Note: As no external notes were provided, this section is generated based on common knowledge relevant to NDA/CDS/AFCAT exams and expands upon the concepts implicitly present in the primary textbook context.)*

### 1. Introduction to Sequences and Series

A **sequence** is an ordered list of numbers (or other elements). The numbers in a sequence are called terms.
Examples: `2, 4, 6, 8, ...` (Arithmetic Sequence); `3, 9, 27, 81, ...` (Geometric Sequence).

A **series** is the sum of the terms of a sequence.
Examples: `2 + 4 + 6 + 8 + ...`; `3 + 9 + 27 + 81 + ...`.

The textbook problems, particularly Q80 (consecutive even integers) and Q99 (2, 4, 6, ..., 100), deal with arithmetic sequences.

#### 1.1 Types of Sequences (Brief Overview)

*   **Arithmetic Progression (AP):** Each term after the first is obtained by adding a fixed number (common difference, `d`) to the preceding term.
    *   General form: `a, a+d, a+2d, ...`
    *   `n`th term: `an = a + (n-1)d`
    *   Sum of `n` terms: `Sn = n/2 * [2a + (n-1)d]` or `Sn = n/2 * (a + an)`
    *   *Relevance:* Q80 (consecutive even integers implies `d=2`), Q99 (sequence `2, 4, ..., 100` is an AP with `a=2, d=2`).

*   **Geometric Progression (GP):** Each term after the first is obtained by multiplying the preceding term by a fixed non-zero number (common ratio, `r`).
    *   General form: `a, ar, ar^2, ...`
    *   `n`th term: `an = a * r^(n-1)`
    *   Sum of `n` terms: `Sn = a(r^n - 1) / (r - 1)` (if `r ≠ 1`)

*   **Harmonic Progression (HP):** A sequence is said to be in HP if the reciprocals of its terms are in AP.
    *   Example: `1/a, 1/(a+d), 1/(a+2d), ...`
    *   *Relevance:* Directly linked to Harmonic Mean (Q100).

### 2. Deeper Dive into Measures of Central Tendency

#### 2.1 Arithmetic Mean (AM) - Further Insights

*   **Weighted Mean:** If observations have different weights (e.g., marks in different subjects with varying credits), a weighted mean is used.
    `Weighted AM = Σ(wi * xi) / Σwi`
    *   *Relevance:* Q96 (mean weight of boys and girls combined) is an application of weighted mean where the number of boys/girls acts as weights.
        `Total Weight = (Mean_boys * Num_boys) + (Mean_girls * Num_girls)`
        `Overall Mean = Total Weight / (Num_boys + Num_girls)`

*   **Properties:**
    *   Sensitive to extreme values (outliers).
    *   Used for interval and ratio data.
    *   The sum of deviations from the mean is zero (as seen in Q97).

#### 2.2 Median - Further Insights

*   **Robustness:** Less affected by extreme values than the mean, making it a more robust measure for skewed data.
*   **Visual Representation (Conceptual Diagram):**
    Imagine a sorted line of data points. The median is the exact center point.
    `[Smallest Value] --- Data Points --- [Median] --- Data Points --- [Largest Value]`
    If `n` is odd, the median is a specific data point.
    If `n` is even, the median is the midpoint between the two central data points.

#### 2.3 Mode - Further Insights

*   **Best for Categorical Data:** Ideal for data where you want to find the most popular or frequent category (e.g., shoe sizes, favorite colors).
*   **Can be Multiple:** A dataset can have one mode (unimodal), two modes (bimodal), or more (multimodal). If all values appear with the same frequency, there is no mode.
*   *Correction/Clarification for Q93:* While the textbook answer for Q93 is Arithmetic Mean, for "average size of shoe sold" in a practical sense (e.g., for inventory), the **Mode** is typically the most useful measure as it tells you the most frequently purchased size. Arithmetic mean might give a non-existent shoe size (e.g., 8.3).

### 3. Relationship between AM, GM, HM (Averages)

For any set of positive real numbers:
`AM ≥ GM ≥ HM`

*   **Equality holds only when all numbers in the set are identical.**
*   **For two positive numbers `a` and `b`:**
    *   `AM = (a+b)/2`
    *   `GM = √(ab)`
    *   `HM = 2ab / (a+b)`
    *   The relationship `AM * HM = (GM)^2` is a crucial formula (as used in Q100).

*   **Mnemonic:** "A Great Hero" (AM ≥ GM ≥ HM) helps remember the order of these means.

*   **Conceptual Diagram:**
    Imagine a number line. For two positive numbers `a` and `b`:
    `a --- HM --- GM --- AM --- b` (assuming `a < b`)
    The AM is always furthest from the smaller number and closest to the larger number, while HM is closer to the smaller number. GM lies between them.

### 4. Importance in Competitive Exams (NDA, CDS, AFCAT)

*   **Quantitative Aptitude:** Sequence and Series, along with statistics (mean, median, mode), are fundamental topics. Questions test direct formula application, problem-solving skills, and logical reasoning.
*   **Data Interpretation:** Understanding these measures is crucial for interpreting charts, graphs, and statistical data often presented in DI sections.
*   **Problem Types:**
    *   Finding `n`th term or sum of `n` terms of AP/GP.
    *   Inserting means (AM, GM, HM) between two numbers.
    *   Solving word problems involving these concepts (like Q80, Q95, Q96).
    *   Calculating mean, median, mode for given data sets.
    *   Understanding the properties and relationships between different means.

**Revision Tip:** Practice identifying the type of sequence/series, correctly applying the formulas, and understanding the context for choosing the appropriate measure of central tendency. Pay attention to "consecutive integers" as a hint for AP.

---

## Page 5+: The Testing Layer - Practice Exercises & PYQs

This section contains practice questions directly from the provided textbook context, along with their step-by-step solutions. These questions cover concepts related to arithmetic progressions (implicitly), mean, median, and the relationship between different types of means.

### Practice Exercises (PYQs from CDS 2020 (II))

**Q80. The lengths of the sides of a right-angled triangle are consecutive even integers (in cm). What is the product of these integers?**
(a) 60
(b) 120
(c) 360
(d) 480

**Solution Matrix:**
_ (d) Let the sides of a right angle triangle be `x − 2, x, x + 2`.
∴ `(x − 2)^2 + x^2 = (x + 2)^2`
`x^2 − 4x + 4 + x^2 = x^2 + 4x + 4`
`x^2 − 8x = 0`
`x(x − 8) = 0`
Since `x` cannot be 0 (side length), `x = 8`.
∴ Sides of triangle are `8 − 2 = 6`, `8`, `8 + 2 = 10`.
Product of sides of triangle = `6 × 8 × 10 = 480`.

---

**Q91. Fifteen candidates appeared in an examination. The marks of the candidates who passed in the examination are 9, 6, 7, 8, 8, 9, 6, 5, 4 and 7. What is the median of marks of all the fifteen candidates?**
(a) 6
(b) 6.5
(c) 7
(d) 7.5

**Solution Matrix:**
_ (a) The marks of the candidates who passed in examination are `9, 6, 7, 8, 8, 9, 6, 5, 4, 7`.
Rearranging marks in ascending order of all the fifteen candidates (assuming the 5 missing marks are lower than 4, or represented by blanks as in the original solution's implication of 15 positions):
`−, −, −, −, −, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9`
Median of marks of all the fifteen candidates = `(15 + 1)/2`th observation
= `8`th observation
= `6`.

---

**Q92. If the yield (in gm) of barley from 7 plots of size one square yard each, were found to be 180, 191, 175, 111, 154, 141 and 176, then what is the median of yield?**
(a) 111 gm
(b) 154 gm
(c) 175 gm
(d) 176 gm

**Solution Matrix:**
_ (c) Given data: `180, 191, 175, 111, 154, 141, 176`
Rearranging in ascending order: `111, 141, 154, 175, 176, 180, 191`
Median = `(7 + 1)/2`th observation
= `4`th observation
= `175`.

---

**Q93. Which one of the following measures of central tendency will be used to determine the average size of the shoe sold in the shop?**
(a) Arithmetic mean
(b) Geometric mean
(c) Median
(d) Mode

**Solution Matrix:**
_ (a) Average size of the shoe sold in shop by Arithmetic mean.
*(Self-correction note: While the textbook states Arithmetic Mean, for practical inventory purposes related to "most sold size," Mode is often more appropriate. However, adhering to the provided solution for this section.)*

---

**Q95. The ages of 7 family members are 2, 5, 12, 18, 38, 40 and 60 yr respectively. After 5 yr a new member aged x year is added. If the mean age of the family now goes up by 1.5 yr, then what is the value of x?**
(a) 1
(b) 2
(c) 3
(d) 4

**Solution Matrix:**
_ (b) We have,
Ages of 7 family members are `2, 5, 12, 18, 38, 40, 60`.
Mean = `(2 + 5 + 12 + 18 + 38 + 40 + 60) / 7 = 175 / 7 = 25`.
Ages of 7 family members after 5 yr: `7, 10, 17, 23, 43, 45, 65`.
After 5 yr new member aged `x` years is added.
∴ Mean = `(7 + 10 + 17 + 23 + 43 + 45 + 65 + x) / 8 = (210 + x) / 8`.
New mean = `25 + 1.5 = 26.5`.
∴ `26.5 = (210 + x) / 8`
`26.5 × 8 = 210 + x`
`212 = 210 + x`
`x = 2`.

---

**Q96. The mean weight of 100 students in a class is 46 kg. The mean weight of boys is 50 kg and that of girls is 40 kg. The number of boys exceeds the number of girls by**
(a) 10
(b) 15
(c) 20
(d) 25

**Solution Matrix:**
_ (c) We have, 100 students in a class.
Let number of boys = `x`
and number of girls = `y`
∴ `x + y = 100` ...(i)
Mean of weight of boys = 50 kg
∴ Total weight of boys = `50x` kg
Mean of weight of girls = 40 kg
∴ Total weight of girls = `40y` kg
Mean of weight of 100 students = 46 kg
∴ Total weight of 100 students = `46 × 100 = 4600` kg
∴ `50x + 40y = 4600` ...(ii)
From Eqs. (i) and (ii):
Multiply (i) by 40: `40x + 40y = 4000`
Subtract this from (ii): `(50x + 40y) - (40x + 40y) = 4600 - 4000`
`10x = 600`
`x = 60`
Substitute `x=60` into (i): `60 + y = 100` => `y = 40`.
∴ `x - y = 60 - 40 = 20`.

---

**Q97. What is the algebraic sum of the deviations from the mean of a set of values 25, 65, 73, 75, 83, 76, 17, 15, 7, 14?**
(a) −1
(b) 0
(c) 1
(d) 2

**Solution Matrix:**
_ (b) We know that, algebraic sum of the deviation from the mean of any data is zero.

---

**Q98. The mean of five observations x, x + 2, x + 4, x + 6, x + 8 is m. What is the mean of the first three observations?**
(a) m
(b) m − 1
(c) m − 2
(d) m − 3

**Solution Matrix:**
_ (c) Given data `x, x + 2, x + 4, x + 6, x + 8`
Mean = `m`
∴ `m = (x + (x+2) + (x+4) + (x+6) + (x+8)) / 5`
`m = (5x + 20) / 5`
`m = x + 4`
`x = m − 4`
∴ Mean of `x, x + 2, x + 4`
= `(x + x+2 + x+4) / 3`
= `(3x + 6) / 3`
= `x + 2`
Substitute `x = m − 4`:
= `(m − 4) + 2`
= `m − 2`.

---

**Q99. What is the median of 2, 4, 6, … , 100?**
(a) 48
(b) 49
(c) 50
(d) 51

**Solution Matrix:**
_ (d) Given data: `2, 4, 6, … , 100`
Here, `n = 50` (Number of terms in this arithmetic progression: `an = a + (n-1)d` => `100 = 2 + (n-1)2` => `98 = (n-1)2` => `49 = n-1` => `n = 50`).
∴ Median = `(25th Observation + 26th Observation) / 2`
∴ 25th observation = `2 × 25 = 50`
26th observation = `2 × 26 = 52`
∴ Median = `(50 + 52) / 2 = 102 / 2 = 51`.

---

**Q100. The harmonic mean and the geometric mean of two numbers are 10 and 12 respectively. What is their arithmetic mean?**
(a) 25/3
(b) 120
(c) 11
(d) 14.4

**Solution Matrix:**
_ (d) Given, HM = 10, GM = 12.
We know that, `AM . HM = (GM)^2`
⇒ `AM (10) = (12)^2`
⇒ `AM = 144 / 10`
⇒ `AM = 14.4`.