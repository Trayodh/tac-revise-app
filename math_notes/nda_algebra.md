# NDA Algebra – Comprehensive Exam‑Ready Notes

---
## 1. Foundations
### 1.1 Sets & Operations
- **Definition**: A set is a collection of distinct objects.
- **Notation**: \(\{a,b,c\}\), \(\in\), \(\notin\).
- **Operations**:
  - Union \(A\cup B\)
  - Intersection \(A\cap B\)
  - Difference \(A\setminus B\)
  - Complement \(A'\)
- **Venn Diagrams** – visual aid for inclusion‑exclusion problems.

### 1.2 Number Systems
| System | Symbol | Typical Use |
|--------|--------|-------------|
| Natural (\(\mathbb{N}\)) | 0,1,2,… | Counting |
| Whole (\(\mathbb{W}\)) | 0,1,2,… | Indexing |
| Integers (\(\mathbb{Z}\)) | …,-2,-1,0,1,2,… | Algebraic manipulations |
| Rational (\(\mathbb{Q}\)) | \(\frac{p}{q}\) | Fractions |
| Real (\(\mathbb{R}\)) | Decimal expansions | Geometry, calculus |
| Complex (\(\mathbb{C}\)) | \(a+bi\) | Advanced problems (rare in NDA) |

---
## 2. Algebraic Expressions & Identities
### 2.1 Standard Forms
- **Linear**: \(ax + b\)
- **Quadratic**: \(ax^2 + bx + c\)
- **Cubic**: \(ax^3 + bx^2 + cx + d\)

### 2.2 Key Identities (Memorised via “Magic Square”)
| Identity | Formula |
|----------|---------|
| Square of a sum | \((a+b)^2 = a^2 + 2ab + b^2\) |
| Square of a difference | \((a-b)^2 = a^2 - 2ab + b^2\) |
| Sum‑of‑cubes | \(a^3 + b^3 = (a+b)(a^2 - ab + b^2)\) |
| Difference‑of‑cubes | \(a^3 - b^3 = (a-b)(a^2 + ab + b^2)\) |
| Product of sums | \((a+b)(c+d) = ac + ad + bc + bd\) |

---
## 3. Linear Equations & Systems
### 3.1 Single Variable
- **Standard form**: \(ax + b = 0\) → \(x = -\frac{b}{a}\)
- **Shortcut for \(ax = b\)**: Direct division.

### 3.2 Pair of Linear Equations (2 × 2)
- **Method 1 – Substitution** (fast when one variable already isolated).
- **Method 2 – Elimination** (add/subtract equations to cancel a variable).
- **Method 3 – Determinant (Cramer's Rule)** – useful for MCQs with small integers.

### 3.3 Quick‑Check for Consistency
| Condition | Result |
|-----------|--------|
| \(\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}\) | No solution (parallel lines) |
| \(\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}\) | Infinite solutions (same line) |
| Otherwise | Unique solution |

---
## 4. Quadratic Equations
### 4.1 Standard Quadratic Form
\[ ax^2 + bx + c = 0 \]
- **Discriminant** \(D = b^2 - 4ac\)
  - \(D>0\) → two real roots
  - \(D=0\) → equal real roots
  - \(D<0\) → complex roots (rare in NDA)

### 4.2 Solving Techniques
| Technique | When to Use |
|-----------|------------|
| Factorisation | Small integer coefficients, easy factors |
| Completing the square | When \(a=1\) and coefficients are tidy |
| Quadratic formula | General case (memorise \(x = \frac{-b \pm \sqrt{D}}{2a}\)) |
| Vieta’s relations | Quick sum/product checks for MCQs |

### 4.3 Speed Hack – “Half‑Coefficient” Method
For \(ax^2 + bx + c = 0\) with \(a=1\):
1. Compute \(h = \frac{b}{2}\).
2. Write \((x + h)^2 = h^2 - c\).
3. Take square root → \(x = -h \pm \sqrt{h^2 - c}\).

---
## 5. Arithmetic Progression (AP) & Geometric Progression (GP)
### 5.1 AP Basics
- **n‑th term**: \(a_n = a + (n-1)d\)
- **Sum of n terms**: \(S_n = \frac{n}{2}[2a + (n-1)d]\) or \(S_n = \frac{n}{2}(a_1 + a_n)\)
- **Common difference**: \(d = a_2 - a_1\)

### 5.2 GP Basics
- **n‑th term**: \(a_n = a \cdot r^{n-1}\)
- **Sum of n terms** (r ≠ 1): \(S_n = a\frac{1-r^n}{1-r}\)
- **Common ratio**: \(r = \frac{a_2}{a_1}\)

### 5.3 Quick Tricks
- **AP to GP conversion** – rarely needed, but remember \(r = 1 + \frac{d}{a}\) for small d.
- **Sum of infinite GP** (|r|<1): \(S_\infty = \frac{a}{1-r}\)

---
## 6. Ratio & Proportion
- **Direct proportion**: \(x \propto y \Rightarrow x = ky\).
- **Inverse proportion**: \(x \propto \frac{1}{y} \Rightarrow xy = k\).
- **Compound ratio**: Multiply individual ratios.
- **Alligation** (mixture problems) – use ‘Alligation alternate’ for quick weighted average.

---
## 7. Simple & Compound Interest
### 7.1 Simple Interest (SI)
\[ SI = \frac{P \times R \times T}{100} \]
- **Total amount**: \(A = P + SI\)

### 7.2 Compound Interest (CI)
\[ A = P \left(1 + \frac{R}{100}\right)^T \]
- **CI alone**: \(CI = A - P\)
- **Shortcut for quarterly/half‑yearly** – adjust \(R\) and \(T\) accordingly.

### 7.3 Quick Approximation
For small rates, \(CI \approx SI + \frac{SI\times (T-1)}{2}\) – handy for 2‑digit mental calculations.

---
## 8. Percentages & Profit‑Loss
- **Percentage increase/decrease**: \( \%\Delta = \frac{\text{new - old}}{\text{old}} \times 100 \).
- **Profit% on Cost**: \( \frac{Profit}{Cost}\times100 \).
- **Profit% on Selling Price**: \( \frac{Profit}{SP}\times100 \).
- **Discount**: \( SP = MRP \times (1 - \frac{d}{100}) \).
- **Quick trick**: 5% = half of 10%; 2.5% = half of 5%; use these for mental work.

---
## 9. Data Interpretation (Tables, Bar Graphs, Pie Charts)
- **Mean**: \(\bar{x}=\frac{\sum f_i x_i}{\sum f_i}\)
- **Median**: Locate middle cumulative frequency.
- **Mode**: Highest frequency class.
- **Weighted Mean**: \(\bar{x}=\frac{\sum w_i x_i}{\sum w_i}\).
- **Percentage change**: \(\frac{\text{new} - \text{old}}{\text{old}}\times100\).
- **Speed‑Distance‑Time**: \(S = \frac{D}{T}, D = S\times T, T = \frac{D}{S}\).

---
## 10. Previous Year Questions (PYQs) – Pattern Insight
| Year | Question Type | Key Trick |
|------|--------------|----------|
| 2023 | AP sum of first 20 terms with hidden \(d\) | Use \(S_n = \frac{n}{2}(a_1 + a_n)\) after finding \(a_n\) via \(a_n = a_1 + (n-1)d\) |
| 2022 | Quadratic with large coefficients | Divide whole equation by GCD to reduce numbers before applying formula |
| 2021 | Ratio‑mixture with 3 components | Apply Alligation alternate; convert to common denominator quickly |
| 2020 | Compound interest over 3 years, quarterly | Convert annual rate to quarterly, use \((1+R/400)^{12}\) approximation |
| 2019 | Profit‑loss with discount & extra cost | Combine discount & extra cost into net effective cost before profit calc |
| 2018 | Data interpretation – total sales over 5 years | Compute yearly average first, then multiply – avoids large addition |

> **Memory Aid**: For each PYQ type, remember the “3‑step mantra” – *Simplify → Identify Core Formula → Apply Shortcut*.

---
## 11. Quick Revision Checklist (for 5‑minute flash)
- ✅ Set of formulas for AP, GP, SI, CI, Quadratic.
- ✅ Common identities (square, cube, product).
- ✅ Discriminant sign rule.
- ✅ Alligation shortcut.
- ✅ %‑change mental percentages (5%, 2.5%, 1%).
- ✅ Data‑interpretation key steps.
- ✅ Recent PYQ trick column.

---
## 12. References & Further Reading
- **NCERT Class‑10 Maths** – Chapter “Algebra” (for concept clarity).
- **M. S. Kahlon’s “Quantitative Aptitude for NDA”** – solved PYQs.
- **Arihant’s “Fast Track to NDA”** – speed‑method chapter.

*End of NDA Algebra notes.*
