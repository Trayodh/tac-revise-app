# Compound Interest: High-Yield Topic Module

## Page 1: Core Concepts & Foundational Formulas

### Introduction to Compound Interest (CI)
Compound interest is the interest calculated on the initial principal and also on the accumulated interest from previous periods. It's often described as "interest on interest," leading to faster growth of an investment or debt compared to simple interest.

### Key Terminology
*   **Principal (P):** The initial sum of money borrowed or invested.
*   **Rate of Interest (R):** The percentage at which the interest is charged or earned per period (usually per annum, i.e., yearly).
*   **Time (n or t):** The duration for which the money is borrowed or invested.
*   **Amount (A):** The total sum at the end of the time period, including both the principal and the compound interest.
*   **Compound Interest (CI):** The difference between the Amount (A) and the Principal (P).

### Fundamental Compound Interest Formula (Compounded Annually)
The most basic formula for calculating the Amount (A) when interest is compounded annually is:

$$A = P \left(1 + \frac{R}{100}\right)^n$$

Where:
*   `A` = Amount
*   `P` = Principal
*   `R` = Annual Rate of Interest (in %)
*   `n` = Time period (in years)

Once the Amount (A) is calculated, the Compound Interest (CI) is found by:

$$CI = A - P$$

---

### Structural Mind-Map: Compound Interest Scenarios

```
Compound Interest (CI)
├── Basic Formula: A = P(1 + R/100)^n
│   └── CI = A - P
│
├── Compounding Frequency Variations:
│   ├── Semi-Annually (Half-Yearly):
│   │   ├── Rate (R_new) = R/2
│   │   └── Time (n_new) = 2n
│   │   └── Formula: A = P(1 + R/(2*100))^(2n)
│   │
│   ├── Quarterly:
│   │   ├── Rate (R_new) = R/4
│   │   └── Time (n_new) = 4n
│   │   └── Formula: A = P(1 + R/(4*100))^(4n)
│   │
│   └── (Implicit: Monthly):
│       ├── Rate (R_new) = R/12
│       └── Time (n_new) = 12n
│       └── Formula: A = P(1 + R/(12*100))^(12n)
│
├── Special Cases for Time & Rate:
│   ├── Fractional Time (t a/b years, compounded annually):
│   │   └── Formula: A = P(1 + R/100)^t * (1 + (a/b * R)/100)
│   │
│   └── Different Rates for Different Years (R1, R2, R3 for n1, n2, n3 years):
│       └── Formula: A = P(1 + R1/100)^n1 * (1 + R2/100)^n2 * (1 + R3/100)^n3
│
├── Difference between CI & SI:
│   ├── For 2 Years: D = PR^2 / (100^2)
│   └── For 3 Years: D = PR^2(300 + R) / (100^3)
│
├── Depreciation:
│   ├── Value after n years = P * (1 - R/100)^n
│   └── Value n years ago = P / (1 - R/100)^n
│
└── Instalments:
    └── Present Value (P) = x/(1+R/100) + x/(1+R/100)^2 + ... + x/(1+R/100)^n
        (where x = value of each instalment)
```

---

## Page 2: Core Context - Detailed Rules & Examples

### Rule 1: Compound Interest Compounded Semi-Annually (Half-Yearly)
When interest is compounded semi-annually (every 6 months):
*   The annual rate (R) is halved: `R_new = R/2`
*   The time period (n) is doubled: `n_new = 2n`
*   **Amount (A):** $$A = P \left(1 + \frac{R}{2 \times 100}\right)^{2n}$$
*   **Compound Interest (CI):** `CI = A - P`

**Example 2 (Illustrative):**
P = ` 24000, R = 10% p.a., n = 1.5 yr. Compounded semi-annually.
R_new = 10/2 = 5% half-yearly
n_new = 1.5 * 2 = 3 half-years
A = 24000 * (1 + 5/100)^3 = 24000 * (21/20)^3 = ` 27783
CI = 27783 - 24000 = ` 3783

### Rule 3: Compound Interest Compounded Quarterly
When interest is compounded quarterly (every 3 months):
*   The annual rate (R) is divided by 4: `R_new = R/4`
*   The time period (n) is multiplied by 4: `n_new = 4n`
*   **Amount (A):** $$A = P \left(1 + \frac{R}{4 \times 100}\right)^{4n}$$
*   **Compound Interest (CI):** `CI = A - P`

**Example 3 (Illustrative):**
P = ` 100000, R = 4% p.a., n = 9 months = 0.75 yr. Compounded quarterly.
R_new = 4/4 = 1% quarterly
n_new = 0.75 * 4 = 3 quarters
A = 100000 * (1 + 1/100)^3 = 100000 * (101/100)^3 = ` 103030.10
CI = 103030.10 - 100000 = ` 3030.10

### Rule 4: Compound Interest Annually with Fractional Time
When interest is compounded annually, but the time is given in a fraction (e.g., `t a/b` years):
*   **Amount (A):** $$A = P \left(1 + \frac{R}{100}\right)^t \times \left(1 + \frac{(a/b)R}{100}\right)$$

**Example 4 (Illustrative):**
P = ` 5000, R = 10% p.a., n = 2 yr 6 months (2 1/2 yr). Compounded annually.
t = 2, a/b = 1/2
A = 5000 * (1 + 10/100)^2 * (1 + (1/2 * 10)/100)
A = 5000 * (11/10)^2 * (1 + 5/100) = 5000 * (11/10)^2 * (105/100) = ` 6352.50
CI = 6352.50 - 5000 = ` 1352.50

### Rule 5: Compound Interest with Different Rates for Different Years
If the rate of interest changes for different years (e.g., R1 for n1 years, R2 for n2 years, etc.):
*   **Amount (A):** $$A = P \left(1 + \frac{R_1}{100}\right)^{n_1} \times \left(1 + \frac{R_2}{100}\right)^{n_2} \times \left(1 + \frac{R_3}{100}\right)^{n_3} \times \dots$$

**Example 5 (Illustrative):**
P = ` 5000, R1 = 10% for 2 yr, R2 = 15% for next 2 yr. Total 4 yr.
A = 5000 * (1 + 10/100)^2 * (1 + 15/100)^2
A = 5000 * (11/10)^2 * (115/100)^2 = 5000 * (11/10)^2 * (23/20)^2 = ` 8001.125
CI = 8001.125 - 5000 = ` 3001.125 ≈ ` 3001

---

## Page 3: AI Contextual Enrichment - Advanced Concepts & Formulas

### Rule 6: Difference Between Simple Interest (SI) and Compound Interest (CI)
The difference (D) between compound interest and simple interest on a principal (P) at a rate (R%) per annum is a common calculation.

*   **For 2 Years:**
    $$D = \frac{PR^2}{(100)^2}$$
    This formula highlights that the difference arises from the interest earned on the first year's simple interest during the second year.

*   **For 3 Years:**
    $$D = \frac{PR^2(300 + R)}{(100)^3}$$
    This formula accounts for the interest on interest over three periods, making it more complex.

**Example 6 (Illustrative):**
Difference (D) = ` 90, R = 12% p.a., for 2 yr. Find P.
Using the 2-year formula:
90 = P * (12)^2 / (100)^2
90 = P * 144 / 10000
P = (90 * 10000) / 144 = ` 6250

### Rule 7: Calculating Rate and Principal from Consecutive Amounts
If a certain sum at compound interest becomes `A1` in `n` years and `A2` in `(n+1)` years (i.e., in consecutive years):

*   **Rate of Compound Interest (R):**
    $$R = \frac{(A_2 - A_1)}{A_1} \times 100\%$$
    This formula works because the difference `(A2 - A1)` represents the interest earned in the `(n+1)`th year, which is calculated on the amount `A1` from the end of the `n`th year.

*   **Principal (P):**
    Once `R` is found, the principal `P` can be calculated using the standard compound interest formula:
    $$P = \frac{A_1}{\left(1 + \frac{R}{100}\right)^n}$$
    (Note: The textbook's `Sum = A1^2 / A2` formula for this rule is generally incorrect for arbitrary 'n' and should be avoided. The method above is universally applicable.)

**Example 7 (Illustrative):**
Amount A1 = ` 9680 in 2 yr, Amount A2 = ` 10648 in 3 yr.
Rate = ((10648 - 9680) / 9680) * 100% = (968 / 9680) * 100% = 10%
Principal P = 9680 / (1 + 10/100)^2 = 9680 / (1.1)^2 = 9680 / 1.21 = ` 8000

### Rule 8: Depreciation
Depreciation refers to the decrease in the value of an asset over time due to wear and tear, obsolescence, etc. It follows a compound interest-like pattern but with a negative rate.

*   **Value of Article After `n` Years:**
    $$Value_{after} = P \left(1 - \frac{R}{100}\right)^n$$
    Where `P` is the present value and `R` is the annual rate of depreciation.

*   **Value of Article `n` Years Ago (Original Value):**
    $$Value_{ago} = \frac{P}{\left(1 - \frac{R}{100}\right)^n}$$
    Where `P` is the present value.

**Example 8 (Illustrative - Carbon-14 decay):**
A substance reduces to 50% in 5568 yr. Find age (n) when it's 12.5% of original.
Let original be 100.
50 = 100 * (1 - R/100)^5568 => 0.5 = (1 - R/100)^5568
12.5 = 100 * (1 - R/100)^n => 0.125 = (1 - R/100)^n
Since 0.125 = (0.5)^3, we have (0.5)^3 = ((1 - R/100)^5568)^3 = (1 - R/100)^(3 * 5568)
Comparing with 0.125 = (1 - R/100)^n, we get n = 3 * 5568 = 16704 yr.

---

## Page 4: AI Contextual Enrichment - Instalments & Important Results

### Instalments
When a loan taken on compound interest is repaid in equal annual instalments, the principal amount borrowed (P) is the sum of the present values of each instalment.

*   **Principal (P) for `n` equal annual instalments of `x` each:**
    $$P = \frac{x}{\left(1 + \frac{R}{100}\right)^1} + \frac{x}{\left(1 + \frac{R}{100}\right)^2} + \dots + \frac{x}{\left(1 + \frac{R}{100}\right)^n}$$
    This is a geometric series where each term represents the present value of a future instalment.

**Example 9 (Illustrative):**
R = 15% p.a., Annual instalment (x) = ` 486680, n = 3 yr. Find P.
P = 486680 / (1 + 15/100)^1 + 486680 / (1 + 15/100)^2 + 486680 / (1 + 15/100)^3
P = 486680 * [ (20/23) + (20/23)^2 + (20/23)^3 ]
P = 486680 * [ (20/23) + (400/529) + (8000/12167) ]
P = 486680 * [ (20*529 + 400*23 + 8000) / 12167 ]
P = 486680 * [ (10580 + 9200 + 8000) / 12167 ]
P = 486680 * (27780 / 12167) ≈ ` 1111200

### Some Important Results & Shortcuts
1.  **SI and CI for the First Year:** Simple interest and compound interest are always equal for the first year period on the same principal and at the same rate. This is because interest is not compounded until after the first period.
2.  **Rate from Consecutive Amounts:** If A and B are the amounts of a certain sum for two consecutive years (e.g., A after year 'k' and B after year 'k+1'), then the simple interest for 1 year (or the interest earned in that specific year) is `B - A`. The rate can then be found as `((B-A)/A) * 100%`.
3.  **Doubling/Tripling Time (Geometric Progression):** If a certain sum at compound interest becomes `x` times itself in `n1` years and `y` times itself in `n2` years, then the relationship holds:
    $$(x)^{1/n_1} = (y)^{1/n_2}$$
    A common application is: If a sum doubles in `n` years, it will become `2^k` times in `k * n` years.
    *   Example: Doubles in 5 years.
        *   4 times (2^2) in 2 * 5 = 10 years.
        *   8 times (2^3) in 3 * 5 = 15 years.
        *   16 times (2^4) in 4 * 5 = 20 years.

### Mnemonics & Quick Tips
*   **Compounding Frequency:**
    *   **Half-yearly:** "Halve the Rate, Double the Time!" (R/2, 2n)
    *   **Quarterly:** "Quarter the Rate, Quadruple the Time!" (R/4, 4n)
*   **Depreciation vs. Growth:** Think of depreciation as "negative compound interest." The formula is almost identical, just `(1 - R/100)` instead of `(1 + R/100)`.
*   **CI vs. SI Difference:** Remember the `PR^2` term for 2 years. For 3 years, it's `PR^2(300+R)`. The `(300+R)` term is key for the third year's additional interest on interest.

---

## Page 5: The Testing Layer - Practice Exercises & PYQs

### Practice Exercise

1.  Kiran purchased a scooter for ` 24000. The value of scooter is depreciating at the rate of 5% per annum. Then, its value after 3 yr is
    (a) ` 20577
    (b) ` 20977
    (c) ` 20677
    (d) ` 20877

    **Solution 1:**
    Given, P = ` 24000, R = 5% (depreciation), n = 3 yr.
    Value after n yr = P * (1 - R/100)^n
    Value = 24000 * (1 - 5/100)^3
    = 24000 * (95/100)^3
    = 24000 * (19/20)^3
    = 24000 * (19 * 19 * 19) / (20 * 20 * 20)
    = 24000 * 6859 / 8000
    = 3 * 6859 = ` 20577
    **Answer: (a)**

2.  If P be the principal amount and the rate of interest be r% per annum and the compound interest is calculated k times in a year, then what is the amount at the end of n yr?
    (a) P (1 + r/(k*100))^(nk)
    (b) P (1 + kr/100)^(nk)
    (c) P (1 + kr/100)^(n/k)
    (d) P (1 + kr/k)^(n/k)

    **Solution 2:**
    When interest is compounded k times a year:
    New Rate (R_new) = R/k
    New Time (n_new) = n*k
    So, A = P (1 + (R/k)/100)^(n*k) = P (1 + R/(k*100))^(nk)
    **Answer: (a)**

3.  The amount of a certain sum at compound interest for 2 yr at 5% is ` 4410. The sum is
    (a) ` 4000
    (b) ` 4200
    (c) ` 3900
    (d) ` 3800

    **Solution 3:**
    Given, A = ` 4410, n = 2 yr, R = 5%.
    A = P (1 + R/100)^n
    4410 = P (1 + 5/100)^2
    4410 = P (105/100)^2
    4410 = P (21/20)^2
    4410 = P * 441/400
    P = (4410 * 400) / 441
    P = 10 * 400 = ` 4000
    **Answer: (a)**

4.  A person borrowed ` 7500 at 16% compound interest. How much does he have to pay at the end of 2 yr to clear the loan?
    (a) ` 9900
    (b) ` 10092
    (c) ` 11000
    (d) ` 11052

    **Solution 4:**
    Given, P = ` 7500, R = 16%, n = 2 yr.
    Amount A = P (1 + R/100)^n
    A = 7500 (1 + 16/100)^2
    A = 7500 (116/100)^2
    A = 7500 (29/25)^2
    A = 7500 * (29 * 29) / (25 * 25)
    A = 7500 * 841 / 625
    A = (7500 / 625) * 841
    A = 12 * 841 = ` 10092
    **Answer: (b)**

5.  If the rate of interest is 10% per annum and is compounded half-yearly, then the principal of ` 400 in 3/2 yr will amount to
    (a) ` 463.00
    (b) ` 463.05
    (c) ` 463.15
    (d) ` 463.20

    **Solution 5:**
    Given, P = ` 400, R = 10% p.a., n = 3/2 yr. Compounded half-yearly.
    New Rate (R_new) = 10/2 = 5% half-yearly
    New Time (n_new) = (3/2) * 2 = 3 half-years
    A = P (1 + R_new/100)^n_new
    A = 400 (1 + 5/100)^3
    A = 400 (105/100)^3
    A = 400 (21/20)^3
    A = 400 * (21 * 21 * 21) / (20 * 20 * 20)
    A = 400 * 9261 / 8000
    A = (400 / 8000) * 9261
    A = (1/20) * 9261 = 463.05
    **Answer: (b)**

6.  At compound interest, if a certain sum of money doubles in n yr, then the amount will be four fold in
    (a) 2^2 n yr
    (b) n^2 yr
    (c) 2n yr
    (d) 4n yr

    **Solution 6:**
    If a sum doubles (becomes 2 times) in n years, then to become four-fold (4 times), it needs to be (2^2) times.
    Using the rule: if it becomes x times in n1 years and y times in n2 years, then x^(1/n1) = y^(1/n2).
    Here, x = 2, n1 = n. We want y = 4, find n2.
    2^(1/n) = 4^(1/n2)
    2^(1/n) = (2^2)^(1/n2)
    2^(1/n) = 2^(2/n2)
    Comparing exponents: 1/n = 2/n2 => n2 = 2n
    **Answer: (c)**

7.  The simple interest on a certain sum of money for 3 yr at 8% per annum is half the compound interest on ` 4000 for 2 yr at 10% per annum. What is the sum placed on simple interest?
    (a) ` 1550
    (b) ` 1650
    (c) ` 1750
    (d) ` 2000

    **Solution 7:**
    First, calculate CI on ` 4000 for 2 yr at 10% p.a.
    P_CI = ` 4000, R_CI = 10%, n_CI = 2 yr.
    A_CI = 4000 (1 + 10/100)^2 = 4000 (11/10)^2 = 4000 * 121/100 = 40 * 121 = ` 4840
    CI = A_CI - P_CI = 4840 - 4000 = ` 840

    Now, SI is half of CI:
    SI = 840 / 2 = ` 420

    For SI: SI = ` 420, T = 3 yr, R = 8%. Find P_SI.
    SI = (P * R * T) / 100
    420 = (P_SI * 8 * 3) / 100
    420 = (P_SI * 24) / 100
    P_SI = (420 * 100) / 24
    P_SI = (42000) / 24 = ` 1750
    **Answer: (c)**

8.  What is the least number of complete years in which a sum of money at 20% compound interest will be more than doubled?
    (a) 7
    (b) 6
    (c) 5
    (d) 4

    **Solution 8:**
    We need A > 2P.
    A = P (1 + R/100)^n
    P (1 + 20/100)^n > 2P
    (1.2)^n > 2
    Let's test values of n:
    n=1: 1.2^1 = 1.2 (not > 2)
    n=2: 1.2^2 = 1.44 (not > 2)
    n=3: 1.2^3 = 1.728 (not > 2)
    n=4: 1.2^4 = 2.0736 ( > 2)
    So, the least number of complete years is 4.
    **Answer: (d)**

9.  The difference between the simple interest and the compound interest (compounded annually) on ` 1250 for 2 yr at 8% per annum will be
    (a) ` 18
    (b) ` 2
    (c) ` 8
    (d) ` 4

    **Solution 9:**
    Given, P = ` 1250, n = 2 yr, R = 8%.
    Difference (D) for 2 years = PR^2 / (100)^2
    D = 1250 * (8)^2 / (100)^2
    D = 1250 * 64 / 10000
    D = 1250 * 64 / (1250 * 8)
    D = 64 / 8 = ` 8
    **Answer: (c)**

10. The compound interest on a sum for 2 yr is ` 832 and the simple interest on the same sum at the same rate for the same period is ` 800. What is the rate of interest?
    (a) 6%
    (b) 8%
    (c) 10%
    (d) 12%

    **Solution 10:**
    SI for 2 years = ` 800
    SI for 1 year = 800 / 2 = ` 400
    CI for 2 years = ` 832
    Difference (D) = CI - SI = 832 - 800 = ` 32
    The difference in CI and SI for 2 years is the interest on the first year's simple interest.
    So, ` 32 is the interest on ` 400 for 1 year.
    Rate (R) = (Interest / Principal) * 100
    R = (32 / 400) * 100 = 8%
    **Answer: (b)**

11. A saving bank gives interest which compounds annually. Raju deposited ` 100 and received ` 121 at the end of second year. Rate of compound interest per annum is
    (a) 10%
    (b) 15%
    (c) 11.5%
    (d) 20.5%

    **Solution 11:**
    Given, P = ` 100, A = ` 121, n = 2 yr.
    A = P (1 + R/100)^n
    121 = 100 (1 + R/100)^2
    121/100 = (1 + R/100)^2
    (11/10)^2 = (1 + R/100)^2
    11/10 = 1 + R/100
    1.1 = 1 + R/100
    0.1 = R/100
    R = 0.1 * 100 = 10%
    **Answer: (a)**

12. The amount of a certain sum at compound interest for 4 yr at 10% in ` 4410. The sum is
    (a) 3012.08
    (b) 3015
    (c) 3020.16
    (d) 3016.9

    **Solution 12:**
    This question seems to have a typo or missing information. An amount of ` 4410 for 4 years at 10% is typically the principal, not the amount. If ` 4410 is the amount, then the principal would be smaller. Let's assume ` 4410 is the amount after 4 years.
    A = ` 4410, n = 4 yr, R = 10%. Find P.
    A = P (1 + R/100)^n
    4410 = P (1 + 10/100)^4
    4410 = P (1.1)^4
    4410 = P * 1.4641
    P = 4410 / 1.4641 = ` 3012.08 (approx)
    If the question meant "The sum is ` 4410. The amount at compound interest for 4 yr at 10% is...", then the answer would be different. Given the options, it's likely asking for P.
    **Answer: (a)**

13. The compound interest on ` 5000 for 3 yr at 8% for first year, 10% for second year and 12% for third year will be
    (a) ` 1560.40
    (b) ` 1500
    (c) ` 1565.60
    (d) ` 1652.80

    **Solution 13:**
    Given, P = ` 5000, R1 = 8%, R2 = 10%, R3 = 12%.
    A = P (1 + R1/100) (1 + R2/100) (1 + R3/100)
    A = 5000 * (1 + 8/100) * (1 + 10/100) * (1 + 12/100)
    A = 5000 * (108/100) * (110/100) * (112/100)
    A = 5000 * (1.08) * (1.10) * (1.12)
    A = 5000 * 1.33056 = ` 6652.80
    CI = A - P = 6652.80 - 5000 = ` 1652.80
    **Answer: (d)**

14. An amount of ` x at compound interest at 20% per annum for 3 yr becomes y. What is y : x?
    (a) 3 : 1
    (b) 36 : 25
    (c) 216 : 125
    (d) 125 : 216

    **Solution 14:**
    Given, P = x, R = 20%, n = 3 yr, A = y.
    A = P (1 + R/100)^n
    y = x (1 + 20/100)^3
    y = x (120/100)^3
    y = x (6/5)^3
    y = x * (216/125)
    y/x = 216/125
    So, y : x = 216 : 125
    **Answer: (c)**

15. The compound interest on ` 2000 for 1 yr at the rate of 8% per annum, when the interest is compounded semi-annually
    (a) ` 163.20
    (b) ` 2163.20
    (c) ` 3153.20
    (d) ` 1163

    **Solution 15:**
    Given, P = ` 2000, R = 8% p.a., n = 1 yr. Compounded semi-annually.
    New Rate (R_new) = 8/2 = 4% half-yearly
    New Time (n_new) = 1 * 2 = 2 half-years
    A = P (1 + R_new/100)^n_new
    A = 2000 (1 + 4/100)^2
    A = 2000 (104/100)^2
    A = 2000 (26/25)^2
    A = 2000 * (26 * 26) / (25 * 25)
    A = 2000 * 676 / 625
    A = (2000 / 625) * 676 = 3.2 * 676 = ` 2163.20
    CI = A - P = 2163.20 - 2000 = ` 163.20
    **Answer: (a)**

16. ` 16000 invested at 10% per annum compounded semi-annually amounts to ` 18522. Then, the period of investment is
    (a) 1 1/2 yr
    (b) 3 yr
    (c) 2 yr
    (d) 5/2 yr

    **Solution 16:**
    Given, P = ` 16000, A = ` 18522, R = 10% p.a. Compounded semi-annually.
    New Rate (R_new) = 10/2 = 5% half-yearly
    Let the number of half-years be 'k'.
    A = P (1 + R_new/100)^k
    18522 = 16000 (1 + 5/100)^k
    18522 / 16000 = (105/100)^k
    9261 / 8000 = (21/20)^k
    We know that 9261 = 21^3 and 8000 = 20^3.
    So, (21/20)^3 = (21/20)^k
    Therefore, k = 3 half-years.
    Since k is in half-years, the actual time in years = k / 2 = 3 / 2 = 1.5 yr.
    **Answer: (a)**

17. A sum compounded annually becomes 25/16 times of itself in 2 yr. Then, the rate of interest per annum is
    (a) 25%
    (b) 20%
    (c) 15%
    (d) 7 1/2 %

    **Solution 17:**
    Given, A = (25/16)P, n = 2 yr.
    A = P (1 + R/100)^n
    (25/16)P = P (1 + R/100)^2
    25/16 = (1 + R/100)^2
    Taking square root on both sides:
    sqrt(25/16) = 1 + R/100
    5/4 = 1 + R/100
    1.25 = 1 + R/100
    0.25 = R/100
    R = 0.25 * 100 = 25%
    **Answer: (a)**

18. A sum of ` 3200 invested at 10% per annum compounded quarterly amounts to ` 3362, then the time period is
    (a) 1 1/2 yr
    (b) 1/2 yr
    (c) 2 yr
    (d) 1 yr

    **Solution 18:**
    Given, P = ` 3200, A = ` 3362, R = 10% p.a. Compounded quarterly.
    New Rate (R_new) = 10/4 = 2.5% quarterly
    Let the number of quarters be 'k'.
    A = P (1 + R_new/100)^k
    3362 = 3200 (1 + 2.5/100)^k
    3362 / 3200 = (1 + 1/40)^k
    1681 / 1600 = (41/40)^k
    We know that 1681 = 41^2 and 1600 = 40^2.
    So, (41/40)^2 = (41/40)^k
    Therefore, k = 2 quarters.
    Since k is in quarters, the actual time in years = k / 4 = 2 / 4 = 1/2 yr.
    **Answer: (b)**

19. A sum amount to ` 9680 in 2 yr and to ` 10648 in 3 yr compounded annually. Then, the sum and rate of interest, respectively are
    (a) ` 8000, 10%
    (b) ` 8500, 10%
    (c) ` 8500, 9%
    (d) ` 8000, 9%

    **Solution 19:**
    Let A1 = ` 9680 (Amount after 2 years)
    Let A2 = ` 10648 (Amount after 3 years)
    Since these are consecutive years, the interest for the 3rd year is A2 - A1.
    Interest for 3rd year = 10648 - 9680 = ` 968
    This interest is calculated on A1 (` 9680).
    Rate (R) = (Interest / Principal) * 100 = (968 / 9680) * 100 = 10%

    Now, find the Principal (P) using A1:
    A1 = P (1 + R/100)^n
    9680 = P (1 + 10/100)^2
    9680 = P (11/10)^2
    9680 = P * 121/100
    P = (9680 * 100) / 121
    P = 80 * 100 = ` 8000
    **Answer: (a)**

20. If the value of a machine depreciates by 10% of its value at the beginning of the year and its present value is estimated as ` 10935, then what was its value three years back?
    (a) ` 15000
    (b) ` 7000
    (c) ` 8050
    (d) None of these

    **Solution 20:**
    Given, Present Value (P_current) = ` 10935, R = 10% (depreciation), n = 3 yr.
    We need to find the value 3 years ago (P_original).
    P_current = P_original * (1 - R/100)^n
    10935 = P_original * (1 - 10/100)^3
    10935 = P_original * (90/100)^3
    10935 = P_original * (9/10)^3
    10935 = P_original * (729/1000)
    P_original = (10935 * 1000) / 729
    10935 / 729 = 15
    P_original = 15 * 1000 = ` 15000
    **Answer: (a)**

21. A sum of money doubles itself at compound interest in 15 yr. It will becomes 8 times in
    (a) 30 yr
    (b) 40 yr
    (c) 60 yr
    (d) 45 yr

    **Solution 21:**
    If a sum doubles (becomes 2 times) in 15 years.
    We want it to become 8 times.
    8 = 2^3
    Using the rule: if it becomes 2 times in n years, it becomes 2^k times in k*n years.
    Here, k = 3, n = 15.
    Time = 3 * 15 = 45 years.
    **Answer: (d)**

22. A man borrows ` 4000 at 8% per annum on compound interest. At the end of every year he pays ` 1500 as part payment of loan and interest. How much does he still owe to the bank after three such annual payments?
    (a) ` 1799
    (b) ` 2000
    (c) ` 169.25
    (d) None of these

    **Solution 22:**
    P = ` 4000, R = 8%. Annual payment = ` 1500.

    **End of 1st Year:**
    Amount = 4000 * (1 + 8/100) = 4000 * 1.08 = ` 4320
    Payment = ` 1500
    Outstanding = 4320 - 1500 = ` 2820

    **End of 2nd Year:**
    Amount = 2820 * (1 + 8/100) = 2820 * 1.08 = ` 3045.60
    Payment = ` 1500
    Outstanding = 3045.60 - 1500 = ` 1545.60

    **End of 3rd Year:**
    Amount = 1545.60 * (1 + 8/100) = 1545.60 * 1.08 = ` 1669.248
    Payment = ` 1500
    Outstanding = 1669.248 - 1500 = ` 169.248 ≈ ` 169.25
    **Answer: (c)**

23. A sum of ` 10000 deposited at compound interest becomes double after 5 yr. After 20 yr, the amount will be
    (a) ` 160000
    (b) ` 40000
    (c) ` 50000
    (d) ` 60000

    **Solution 23:**
    P = ` 10000.
    Doubles (2 times) in 5 years.
    We need to find the amount after 20 years.
    20 years is 4 times the doubling period (20 / 5 = 4).
    So, the amount will become 2^4 times the principal.
    Amount = P * 2^4 = 10000 * 16 = ` 160000
    **Answer: (a)**

24. Vinod and Karan each invested ` 15000 for 3 yr at the same rate of interest but Vinod's investment is compounded annually while Karan’s investment is charged on simple interest.
    I. Vinod receive more interest than Karan.
    II. Data is insufficient to calculate the interest.
    Which one is correct?
    (a) Only I
    (b) Only II
    (c) Neither I nor II
    (d) Both I and II

    **Solution 24:**
    For the first year, CI = SI.
    For subsequent years, CI is always greater than SI (because interest is earned on previous interest).
    Since the investment is for 3 years, and CI is compounded annually, Vinod will earn interest on interest from the second year onwards. Therefore, Vinod will receive more interest than Karan. The exact rate of interest is not needed to determine this qualitative comparison.
    **Answer: (a)**

25. An amount is invested in a... (Question incomplete in provided text)
    **Solution 25:**
    (Question incomplete, cannot provide solution)