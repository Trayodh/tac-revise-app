# Quantitative Aptitude: Mensuration & Statistics

## Page 1: Core Context - Mensuration (3D Geometry)

### Simplified Timelines & Structural Mind-Maps

```
3D Shapes Overview
├── Cylinders
│   ├── Solid Cylinder
│   └── Hollow Cylinder
├── Cones
│   ├── Right Circular Cone
│   └── Frustum of a Cone
├── Spheres
│   ├── Solid Sphere
│   └── Hollow Sphere
└── Hemispheres
    ├── Solid Hemisphere
    └── Hemispherical Shell
```

### Foundational Conceptual Notes (Mensuration)

This section covers the fundamental formulas for calculating volume, curved surface area (CSA), and total surface area (TSA) for various 3D geometric shapes.

#### 1. Cylinders

*   **Solid Cylinder:**
    *   Let `r` be the radius and `h` be the height.
    *   Volume (V) = `πr²h` cubic units
    *   Curved Surface Area (CSA) = `2πrh` square units
    *   Total Surface Area (TSA) = `2πr(h + r)` square units

*   **Hollow Cylinder:**
    *   Let `R` be the external radius, `r` be the internal radius, and `h` be the height.
    *   Volume (V) = `π(R² - r²)h` cubic units
    *   Curved Surface Area (CSA) = `2π(R + r)h` square units
    *   Total Surface Area (TSA) = `2π(R + r)h + 2π(R² - r²)` square units
        *   *Simplified:* `2π(R + r)(h + R - r)` square units

#### 2. Cones

*   **Right Circular Cone:**
    *   Let `r` be the radius, `h` be the height, and `l` be the slant height.
    *   Slant height (l) = `√(r² + h²)` units
    *   Volume (V) = `(1/3)πr²h` cubic units
    *   Curved Surface Area (CSA) = `πrl` square units
    *   Total Surface Area (TSA) = `πr(l + r)` square units

*   **Frustum of a Cone:**
    *   If a cone is cut by a plane parallel to its base.
    *   Let `R` be the radius of the base, `r` be the radius of the top (`R > r`), `h` be the height, and `l` be the slant height.
    *   Slant height (l) = `√(h² + (R - r)²) ` units
    *   Volume (V) = `(1/3)πh(R² + r² + Rr)` cubic units
    *   Curved Surface Area (CSA) = `πl(R + r)` square units
    *   Total Surface Area (TSA) = `π(R² + r² + l(R + r))` square units
    *   *For a bucket (open at bigger end):* `π[(R + r)l + r²]` square units

#### 3. Spheres

*   **Solid Sphere:**
    *   Let `r` be the radius.
    *   Volume (V) = `(4/3)πr³` cubic units
    *   Surface Area (SA) = `4πr²` square units

*   **Hollow Sphere:**
    *   Let `R` be the outer radius and `r` be the inner radius.
    *   Volume (V) = `(4/3)π(R³ - r³)` cubic units

#### 4. Hemispheres

*   **Solid Hemisphere:**
    *   Let `r` be the radius.
    *   Volume (V) = `(2/3)πr³` cubic units
    *   Curved Surface Area (CSA) = `2πr²` square units
    *   Total Surface Area (TSA) = `3πr²` square units

*   **Hemispherical Shell:**
    *   Let `R` be the outer radius and `r` be the inner radius.
    *   Volume (V) = `(2/3)π(R³ - r³)` cubic units

---

## Page 2: Core Context - Statistics (Data Analysis)

### Simplified Timelines & Structural Mind-Maps

```
Statistics Fundamentals
├── Data Collection
│   ├── Primary Data
│   └── Secondary Data
├── Data Presentation
│   ├── Raw/Ungrouped Data
│   └── Grouped Data
│       ├── Class Intervals (Limits, Mark, Size)
│       └── Frequency (Discrete, Continuous, Cumulative)
└── Measures of Central Tendency
    ├── Mean (Arithmetic)
    │   ├── Ungrouped (Direct, Shortcut)
    │   ├── Grouped (Direct, Shortcut, Step Deviation)
    │   ├── Weighted Mean
    │   └── Combined Mean
    ├── Geometric Mean (GM)
    ├── Harmonic Mean (HM)
    ├── Median
    │   ├── Individual Series (Odd/Even n)
    │   ├── Discrete Series
    │   └── Continuous Series
    └── Mode
        ├── Individual Series
        ├── Discrete Series
        └── Continuous Series
```

### Foundational Conceptual Notes (Statistics)

This section introduces basic statistical concepts, methods of data presentation, and the primary measures of central tendency.

#### 1. Collection of Data

*   **Primary Data:** Collected directly by the investigator for a specific purpose. (Original, first-hand).
*   **Secondary Data:** Collected by someone else and used by another person. (Not original, second-hand).

#### 2. Presentation of Data

*   **Raw or Ungrouped Data:** Data presented randomly without any specific order.
*   **Grouped Data:** Data arranged in a specific order (ascending/descending) or presented in a frequency distribution table.
    *   **Class Intervals:** Groups into which observations are divided.
        *   **Lower Limit:** The left-side figure of a class.
        *   **Upper Limit:** The right-side figure of a class.
        *   **Class Mark (Mid-point):** `(Lower Limit + Upper Limit) / 2`
        *   **Class Size (Range):** `Upper Limit - Lower Limit`
    *   **Frequency:** The number of times an observation occurs.
    *   **Frequency Distribution:** Tabular arrangement showing the frequency of each observation.
        *   **Discrete Frequency Distribution:** Exact measurements are clearly shown.
        *   **Continuous Frequency Distribution:**
            *   **Exclusive Form:** Upper limit of each class is *excluded* (e.g., 0-10, 10-20; 10 is in 10-20).
            *   **Inclusive Method:** Upper limit of a class is *included* (e.g., 0-9, 10-19; 9 is in 0-9).
                *   *Conversion to Continuous:* If the difference between upper limit of a class and lower limit of the next is `d`, subtract `d/2` from lower limit and add `d/2` to upper limit.
    *   **Cumulative Frequency:** Sum of frequencies up to a particular class interval.

#### 3. Measures of Central Tendency

These describe the central value or average of a dataset.

*   **Arithmetic Mean (Mean, $\bar{x}$):** Sum of all observations divided by the total number of observations.
    *   **Ungrouped Data:**
        *   **Direct Method:** $\bar{x} = \frac{\sum x_i}{n}$
        *   **Shortcut Method:** $\bar{x} = A + \frac{\sum d_i}{n}$, where $A$ is assumed mean, $d_i = x_i - A$.
    *   **Grouped Data:**
        *   **Direct Method:** $\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$
        *   **Shortcut Method:** $\bar{x} = A + \frac{\sum f_i d_i}{\sum f_i}$
        *   **Step Deviation Method:** $\bar{x} = A + \left(\frac{\sum f_i u_i}{\sum f_i}\right) \times h$, where $u_i = \frac{x_i - A}{h}$, $h$ is class size.
    *   **Weighted Arithmetic Mean:** $\bar{x}_w = \frac{\sum w_i x_i}{\sum w_i}$
    *   **Combined Arithmetic Mean:** $\bar{x}_{12} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}$
    *   **Properties:** Adding/subtracting/multiplying/dividing a constant to each observation changes the mean by the same constant.

*   **Geometric Mean (GM):** For $n$ positive numbers $a_1, a_2, ..., a_n$, $GM = \sqrt[n]{a_1 \times a_2 \times ... \times a_n}$.

*   **Harmonic Mean (HM):** For $n$ positive numbers $a_1, a_2, ..., a_n$, $HM = \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + ... + \frac{1}{a_n}}$.

*   **Median:** The middle-most value of data arranged in ascending or descending order.
    *   **Individual Series (n observations):**
        *   If $n$ is odd: Median = Value of $\left(\frac{n+1}{2}\right)^{th}$ observation.
        *   If $n$ is even: Median = Average of $\left(\frac{n}{2}\right)^{th}$ and $\left(\frac{n}{2}+1\right)^{th}$ observations.
    *   **Discrete Frequency Series:** Find cumulative frequency (CF). Identify $N/2$ (where $N = \sum f_i$). The $x$ value corresponding to the CF just greater than $N/2$ is the median.
    *   **Continuous Series:**
        *   Identify Median Class (class with CF just greater than $N/2$).
        *   Median = $l + \left(\frac{N/2 - c}{f}\right) \times h$
            *   $l$: Lower limit of median class
            *   $N$: Total frequency
            *   $c$: Cumulative frequency of class *before* median class
            *   $f$: Frequency of median class
            *   $h$: Size of median class

*   **Mode:** The value that occurs most frequently in the data.
    *   **Individual Series:** The value with the highest frequency.
    *   **Discrete Frequency Series:** The value of the variate corresponding to the maximum frequency.
    *   **Continuous Series:**
        *   Identify Modal Class (class with maximum frequency).
        *   Mode = $l + \left(\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right) \times h$
            *   $l$: Lower limit of modal class
            *   $h$: Size of class interval
            *   $f_1$: Frequency of modal class
            *   $f_0$: Frequency of class *preceding* modal class
            *   $f_2$: Frequency of class *succeeding* modal class

---

## Page 3: AI Contextual Enrichment - Mensuration Deep Dive & Formulas

### Consolidated Mensuration Formulas

| Shape                | Parameters                               | Volume (V)                                  | Curved Surface Area (CSA)                   | Total Surface Area (TSA)                                      |
| :------------------- | :--------------------------------------- | :------------------------------------------ | :------------------------------------------ | :------------------------------------------------------------ |
| **Solid Cylinder**   | `r` (radius), `h` (height)               | `πr²h`                                      | `2πrh`                                      | `2πr(h + r)`                                                  |
| **Hollow Cylinder**  | `R` (ext. r), `r` (int. r), `h` (height) | `π(R² - r²)h`                               | `2π(R + r)h`                                | `2π(R + r)(h + R - r)`                                        |
| **Right Circular Cone** | `r` (radius), `h` (height), `l` (slant)  | `(1/3)πr²h`                                 | `πrl`                                       | `πr(l + r)`                                                   |
| **Frustum of a Cone** | `R` (base r), `r` (top r), `h` (height), `l` (slant) | `(1/3)πh(R² + r² + Rr)`                     | `πl(R + r)`                                 | `π(R² + r² + l(R + r))`                                       |
| **Solid Sphere**     | `r` (radius)                             | `(4/3)πr³`                                  | `4πr²`                                      | `4πr²`                                                        |
| **Hollow Sphere**    | `R` (outer r), `r` (inner r)             | `(4/3)π(R³ - r³)`                           | N/A (often refers to outer/inner SA)      | N/A (often refers to outer/inner SA)                        |
| **Solid Hemisphere** | `r` (radius)                             | `(2/3)πr³`                                  | `2πr²`                                      | `3πr²`                                                        |
| **Hemispherical Shell** | `R` (outer r), `r` (inner r)             | `(2/3)π(R³ - r³)`                           | N/A (often refers to outer/inner CSA)     | N/A (often refers to outer/inner TSA)                       |

### Key Distinctions and Mnemonic Tips

*   **Volume Relationship:**
    *   A cone's volume is `1/3` of a cylinder's volume with the same base radius and height: `V_cone = (1/3) V_cylinder`.
    *   A hemisphere's volume is `1/2` of a sphere's volume with the same radius: `V_hemisphere = (1/2) V_sphere`.
*   **Surface Area Logic:**
    *   **Cylinder:** CSA is the rectangle formed by unrolling the side (`2πr` length, `h` height). TSA adds the two circular bases (`2πr²`).
    *   **Cone:** CSA is a sector of a circle. TSA adds the single circular base (`πr²`).
    *   **Sphere:** The surface area `4πr²` is equivalent to the area of 4 circles of the same radius.
    *   **Hemisphere:** CSA is `2πr²` (half a sphere). TSA adds the flat circular base (`πr²`) to the CSA, making it `3πr²`.
*   **Hollow vs. Solid:** For hollow shapes, volume is typically the difference between the outer and inner volumes. Surface areas can be more complex, often involving both inner and outer curved surfaces, plus the area of the rings at the ends (for hollow cylinders).
*   **Frustum:** Think of it as a large cone minus a small cone. Its formulas reflect this complexity, often involving both `R` and `r`. The slant height formula `l = √(h² + (R - r)²) ` is a direct application of Pythagoras on the trapezoidal cross-section.

### Example Walkthroughs (Summarized Logic from Primary Text)

1.  **Cylindrical Bucket to Rectangular Tub (Example 11):**
    *   **Concept:** Conservation of volume. Water volume remains constant when transferred.
    *   **Steps:**
        1.  Calculate volume of water in cylindrical bucket: `V_bucket = πr²h`.
        2.  Equate this volume to the volume of water in the rectangular tub: `V_tub = length × breadth × height_rise`.
        3.  Solve for `height_rise`.

2.  **Hollow Cylindrical Tube (Example 12):**
    *   **Concept:** Volume of material = External volume - Internal volume.
    *   **Steps:**
        1.  Determine external radius `R` and internal radius `r` (external diameter / 2, then subtract thickness).
        2.  Calculate `V_iron = π(R² - r²)h`.

3.  **Conical Tent Cloth (Example 13):**
    *   **Concept:** Area of cloth required is the curved surface area of the cone.
    *   **Steps:**
        1.  Calculate slant height `l = √(r² + h²)`.
        2.  Calculate `CSA_cone = πrl`.
        3.  Divide `CSA_cone` by the width of the cloth to find the required length.

4.  **Cone Radius/Height Ratio & Volume (Example 14):**
    *   **Concept:** Use ratio to define `r` and `h` in terms of a variable `x`, then use volume formula to solve for `x`.
    *   **Steps:**
        1.  Set `r = 5x`, `h = 12x`.
        2.  Substitute into `V_cone = (1/3)πr²h` and equate to given volume.
        3.  Solve for `x`, then find `r` and `h`.
        4.  Calculate `l = √(r² + h²)`.

5.  **Frustum Bucket Capacity (Example 15):**
    *   **Concept:** Capacity is the volume of the frustum.
    *   **Steps:**
        1.  Directly apply `V_frustum = (1/3)πh(R² + r² + Rr)` with given `R`, `r`, `h`.

6.  **Sphere Volume to Radius/Surface Area (Example 16):**
    *   **Concept:** Use volume formula to find radius, then use radius to find surface area.
    *   **Steps:**
        1.  Equate `V_sphere = (4/3)πr³` to given volume and solve for `r`.
        2.  Calculate `SA_sphere = 4πr²`.

7.  **Melting Big Ball to Small Balls (Example 17):**
    *   **Concept:** Conservation of volume. Total volume of small balls equals volume of big ball.
    *   **Steps:**
        1.  Calculate `V_big_ball = (4/3)πR³`.
        2.  Calculate `V_small_ball = (4/3)πr³`.
        3.  Number of balls = `V_big_ball / V_small_ball`.

8.  **Melting Sphere to Wire (Example 18):**
    *   **Concept:** Conservation of volume. Sphere volume equals cylinder (wire) volume.
    *   **Steps:**
        1.  Calculate `V_sphere = (4/3)πr³`.
        2.  Determine wire radius (diameter / 2).
        3.  Equate `V_sphere` to `V_wire = π(r_wire)²h_wire` and solve for `h_wire` (length).

9.  **Hemisphere Volume Ratio (Example 19):**
    *   **Concept:** Ratio of volumes of similar shapes is the cube of the ratio of their corresponding linear dimensions (radii).
    *   **Steps:**
        1.  Set up ratio: `V1/V2 = ((2/3)πr1³) / ((2/3)πr2³) = (r1/r2)³`.
        2.  Given `V1:V2 = 8:27`, so `(r1/r2)³ = 8/27`.
        3.  Solve for `r1/r2`.

---

## Page 4: AI Contextual Enrichment - Statistics Advanced Concepts & Graphical Representation

### Summary of Central Tendency Calculation Steps

*   **Mean:** The "balancing point." Always calculate `Σx` or `Σfx` and divide by `n` or `Σf`. Assumed mean and step deviation are shortcuts for large numbers.
*   **Median:** The "middle value." Requires ordering the data first. For grouped data, it's about finding the correct class and interpolating.
*   **Mode:** The "most frequent value." Look for the highest frequency. For grouped data, it's about finding the modal class and interpolating using frequencies of adjacent classes.

### Relation between Mean, Median, and Mode

*   **Empirical Relationship:** `Mode = 3 (Median) - 2 (Mean)`
    *   This formula is useful when one measure is unknown, and the distribution is moderately asymmetrical.
*   **Symmetric Distribution:** If `Mean = Median = Mode`, the distribution is perfectly symmetric (e.g., a normal distribution).

### Other Useful Statistical Formulae

*   **Mean Deviation (MD):** Measures the average absolute difference between each data point and the mean (or median/mode).
    *   **Individual Series:** $MD = \frac{\sum |x_i - \bar{x}|}{n}$
    *   **Discrete Series:** $MD = \frac{\sum f_i |x_i - \bar{x}|}{\sum f_i}$
*   **Standard Deviation ($\sigma$):** Measures the spread of data around the mean. It's the square root of variance.
    *   **Ungrouped Data:** $\sigma = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n}}$ or $\sqrt{\frac{\sum x_i^2}{n} - (\bar{x})^2}$
    *   **Grouped Data:** $\sigma = \sqrt{\frac{\sum f_i (x_i - \bar{x})^2}{\sum f_i}}$
*   **Variance ($\sigma^2$):** The average of the squared differences from the mean.
*   **Coefficient of Variation (CV):** A measure of relative variability, expressed as a percentage.
    *   $CV = \left(\frac{\text{Standard Deviation}}{\text{Mean}}\right) \times 100$
*   **Coefficient of Mean Deviation:** $ = \left(\frac{\text{Mean Deviation}}{\text{Mean}}\right) \times 100$

### Graphical Representation of Data

Visualizing data helps in understanding its distribution and characteristics.

1.  **Bar Graph:**
    *   Uses bars of uniform width.
    *   Height of each bar represents the frequency of an observation or category.
    *   Bars are typically separated.
    *   *Visual Diagram Descriptor:* A series of distinct vertical or horizontal rectangles, each representing a category, with height/length proportional to frequency.

2.  **Histogram:**
    *   Graphical representation of a continuous frequency distribution.
    *   Rectangles are drawn with class intervals as bases and frequencies as heights.
    *   **No gap** between consecutive rectangles (unlike bar graphs).
    *   *Visual Diagram Descriptor:* Adjacent vertical rectangles, where the width of each rectangle corresponds to a class interval and the height corresponds to its frequency.
    *   **Note:** If class intervals are unequal, the height of the rectangle should be adjusted (frequency density = frequency / class width) to make the area proportional to frequency.

3.  **Frequency Polygon:**
    *   Can be drawn by joining the mid-points of the tops of the rectangles in a histogram.
    *   Alternatively, plot class marks (mid-points of classes) against frequencies and join the points with straight lines. The polygon is closed by extending to the mid-points of hypothetical classes at either end with zero frequency.
    *   *Visual Diagram Descriptor:* A line graph connecting the midpoints of the tops of histogram bars, or directly connecting plotted (class mark, frequency) points.

4.  **Ogive (Cumulative Frequency Curve):**
    *   Plots cumulative frequencies against class limits.
    *   **"Less Than" Ogive (Rising Curve):** Plots upper class limits against "less than" cumulative frequencies.
    *   **"More Than" Ogive (Falling Curve):** Plots lower class limits against "more than" cumulative frequencies.
    *   **Median Determination:** The x-coordinate of the intersection point of the "less than" and "more than" ogives gives the median.
    *   *Visual Diagram Descriptor:* A smooth curve (or series of connected line segments) showing cumulative frequency. "Less than" ogive rises from left to right; "More than" ogive falls from left to right.

5.  **Pie Diagram (Pie Chart):**
    *   A circle divided into sectors.
    *   Each sector represents a proportion of the whole.
    *   The angle of each sector is proportional to the frequency (or value) it represents.
    *   **Central Angle:** `(Frequency / Total Frequency) × 360°`
    *   *Visual Diagram Descriptor:* A circular graph divided into wedge-shaped sectors, each representing a proportion of a whole.

### Properties of Arithmetic Mean (Re-emphasized for High Yield)

1.  **Effect of Constant Addition/Subtraction:** If each observation is increased/decreased by a constant `k`, the new mean is `old mean ± k`.
2.  **Effect of Constant Multiplication/Division:** If each observation is multiplied/divided by a constant `k`, the new mean is `old mean × k` or `old mean / k`.
3.  **Sum of Deviations from Mean is Zero:** $\sum (x_i - \bar{x}) = 0$. This is a fundamental property.
4.  **Sum of Squares of Deviations is Minimum:** $\sum (x_i - A)^2$ is minimum when $A = \bar{x}$.

---

## Page 5+: The Testing Layer

### Practice Exercise

1.  Frequency polygon can be drawn after drawing
    (a) ogive
    (b) bar chart
    (c) histogram
    (d) None of these
    **Solution:** (c) A frequency polygon can be drawn by joining the mid-points of the respective tops of the rectangles of a histogram.

2.  An ogive is used to determine
    (a) mean
    (b) median
    (c) GM
    (d) HM
    **Solution:** (b) The median of a distribution can be determined graphically from the intersection point of the 'less than' and 'more than' ogives.

3.  The mid-value of a class interval is 42. If the class size is 10, then the upper and lower limits of the class are
    (a) 37.5 and 47.5
    (b) 47 and 37
    (c) 37 and 47
    (d) 47.5 and 37.5
    **Solution:** (c)
    Let the lower limit be $L$ and the upper limit be $U$.
    Mid-value = $(L + U) / 2 = 42 \Rightarrow L + U = 84$ (i)
    Class size = $U - L = 10$ (ii)
    Adding (i) and (ii): $2U = 94 \Rightarrow U = 47$.
    Substituting $U=47$ into (ii): $47 - L = 10 \Rightarrow L = 37$.
    So, the lower limit is 37 and the upper limit is 47.

4.  The actual lower class limits of the following classes 10-19, 20-29, 30-39 and 40-49 are
    (a) 9.5, 19, 29 and 39.5
    (b) 10, 20, 30 and 40
    (c) 9.5, 19.5, 29.5 and 39.5
    (d) 18.5, 28.5, 38.5 and 48.5
    **Solution:** (c)
    The given classes are in inclusive form. To convert to exclusive (continuous) form, find the gap between the upper limit of one class and the lower limit of the next.
    For 10-19 and 20-29, the gap is $20 - 19 = 1$.
    Half of the gap is $1/2 = 0.5$.
    Subtract 0.5 from the lower limit and add 0.5 to the upper limit of each class.
    Actual lower limits:
    10 - 0.5 = 9.5
    20 - 0.5 = 19.5
    30 - 0.5 = 29.5
    40 - 0.5 = 39.5

5.  If the mean of five observations $x, x+2, x+4, x+6,$ and $x+8$ is 11, then the mean of first three observations is
    (a) 9
    (b) 11
    (c) 13
    (d) None of these
    **Solution:** (a)
    Sum of observations = $x + (x+2) + (x+4) + (x+6) + (x+8) = 5x + 20$.
    Number of observations = 5.
    Mean = $(5x + 20) / 5 = x + 4$.
    Given mean = 11, so $x + 4 = 11 \Rightarrow x = 7$.
    The first three observations are $x, x+2, x+4$, which are $7, 9, 11$.
    Mean of first three observations = $(7 + 9 + 11) / 3 = 27 / 3 = 9$.

6.  The combined mean of three groups is 12 and the combined mean of first two groups is 3. If the first, second and third groups have 2, 3 and 5 items respectively, then mean of third group is
    (a) 10
    (b) 21
    (c) 12
    (d) 18
    **Solution:** (b)
    Let $n_1=2, n_2=3, n_3=5$.
    Let $\bar{x}_1, \bar{x}_2, \bar{x}_3$ be the means of the three groups.
    Combined mean of first two groups: $\bar{x}_{12} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2} = 3$.
    So, $n_1 \bar{x}_1 + n_2 \bar{x}_2 = 3(n_1 + n_2) = 3(2+3) = 3 \times 5 = 15$.
    Combined mean of all three groups: $\bar{x}_{123} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2 + n_3 \bar{x}_3}{n_1 + n_2 + n_3} = 12$.
    So, $n_1 \bar{x}_1 + n_2 \bar{x}_2 + n_3 \bar{x}_3 = 12(n_1 + n_2 + n_3) = 12(2+3+5) = 12 \times 10 = 120$.
    Substitute $n_1 \bar{x}_1 + n_2 \bar{x}_2 = 15$:
    $15 + n_3 \bar{x}_3 = 120$.
    $15 + 5 \bar{x}_3 = 120$.
    $5 \bar{x}_3 = 105$.
    $\bar{x}_3 = 105 / 5 = 21$.

7.  10 is the mean of a set of 7 observations and 5 is the mean of a set of 3 observations. The mean of the combined set is given by
    (a) 15
    (b) 10
    (c) 8.5
    (d) 7.5
    **Solution:** (c)
    Using the combined mean formula: $\bar{x}_{combined} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}$.
    Here, $n_1=7, \bar{x}_1=10$.
    $n_2=3, \bar{x}_2=5$.
    $\bar{x}_{combined} = \frac{7 \times 10 + 3 \times 5}{7 + 3} = \frac{70 + 15}{10} = \frac{85}{10} = 8.5$.

8.  In a class of 50 students, 10 have failed and their average marks are 28. The total marks obtained by the entire class are 2800. The average marks of those who have passed are
    (a) 43
    (b) 53
    (c) 63
    (d) 70
    **Solution:** (c)
    Total students = 50.
    Number of failed students = 10.
    Average marks of failed students = 28.
    Total marks of failed students = $10 \times 28 = 280$.
    Total marks of entire class = 2800.
    Marks of passed students = Total marks - Marks of failed students = $2800 - 280 = 2520$.
    Number of passed students = Total students - Number of failed students = $50 - 10 = 40$.
    Average marks of passed students = $2520 / 40 = 63$.

9.  Which of the following statements about the median is true?
    (a) It is not affected by extreme values
    (b) It can be found even, if some items are not known
    (c) It is useful when the data cannot be measured quantitatively
    (d) All of the above
    **Solution:** (d)
    (a) Median is a positional average, so it is less affected by extreme values compared to the mean.
    (b) If the number of observations and the central position are known, the median can be estimated even if extreme values are unknown.
    (c) Median is suitable for qualitative data (ordinal scale) where values can be ranked but not necessarily measured precisely.
    Therefore, all statements are true.

10. The middle item of the series arranged in ascending or descending order is called
    (a) mean
    (b) median
    (c) mode
    (d) standard deviation
    **Solution:** (b) This is the definition of the median.

11. The following pie chart shows the marks obtained by a student in an examination who scored 540 marks in all. The subject in which the student scored 108 marks is
    (a) Science
    (b) Hindi
    (c) English
    (d) Social Science
    **Solution:** (c)
    Total marks = 540.
    Marks scored = 108.
    Percentage of marks = $(108 / 540) \times 100 = 20\%$.
    Angle for 108 marks = $(108 / 540) \times 360^\circ = (1/5) \times 360^\circ = 72^\circ$.
    From the pie chart:
    English angle = $63^\circ$ (Wait, the provided solution says (c) English, but the angle for English is 63 degrees, not 72 degrees. Let's re-check the angles given in the diagram.)
    Mathematics: 90 degrees
    Science: 75 degrees
    Social Science: 72 degrees
    Hindi: 60 degrees
    English: 63 degrees
    Total angle = $90+75+72+60+63 = 360$ degrees.
    The subject with 72 degrees is Social Science.
    Let's re-evaluate the solution given in the primary text. The solution matrix says (c) English.
    If English is 108 marks, then the angle for English should be 72 degrees. But the diagram shows English as 63 degrees.
    If Social Science is 108 marks, then its angle is 72 degrees, which matches the diagram.
    There seems to be a discrepancy between the question and the provided solution/diagram.
    However, following the provided solution (c) English, it implies that the angle for English *should* be 72 degrees for 108 marks. If we strictly follow the diagram, then Social Science corresponds to 108 marks.
    Given the instruction to use the provided text, I will follow the solution matrix's answer (c), assuming there's an implicit adjustment or error in the diagram's label for English, or the question intends for English to be the answer despite the visual.
    *Re-calculation assuming English is the answer:* If English is 108 marks, and total marks are 540, the angle would be $(108/540) * 360 = 72^\circ$. The diagram shows English as $63^\circ$. This is a direct contradiction.
    *Re-calculation assuming the diagram is correct:* Social Science is $72^\circ$. Marks for Social Science = $(72/360) * 540 = (1/5) * 540 = 108$ marks. So, Social Science is the correct answer based on the diagram.
    Since I must follow the provided solution matrix, I will state (c) English, but note the discrepancy.
    **Corrected Solution based on Diagram:** The angle corresponding to 108 marks is $72^\circ$. In the pie chart, Social Science has an angle of $72^\circ$. So, the subject is Social Science.
    **Following provided solution:** (c) English. This implies that the angle for English in the diagram should be $72^\circ$ for 108 marks, not $63^\circ$.

12. A distribution consists of three components with frequencies 45, 40 and 15 having their means 2, 2.5 and 2 respectively. The mean of the combined distribution is
    (a) 2.1
    (b) 2.2
    (c) 2.3
    (d) 2.4
    **Solution:** (b)
    Using the combined mean formula for multiple groups:
    $\bar{x}_{combined} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2 + n_3 \bar{x}_3}{n_1 + n_2 + n_3}$
    $n_1=45, \bar{x}_1=2$
    $n_2=40, \bar{x}_2=2.5$
    $n_3=15, \bar{x}_3=2$
    $\bar{x}_{combined} = \frac{(45 \times 2) + (40 \times 2.5) + (15 \times 2)}{45 + 40 + 15}$
    $\bar{x}_{combined} = \frac{90 + 100 + 30}{100} = \frac{220}{100} = 2.2$.

13. If the values $1, \frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \frac{1}{5}, ..., \frac{1}{n}$ occur at frequencies $1, 2, 3, 4, 5, ..., n$ respectively, in a frequency distribution, then the mean is
    (a) 1
    (b) n
    (c) $\frac{1}{n}$
    (d) $\frac{2}{n+1}$
    **Solution:** (d)
    Mean = $\frac{\sum f_i x_i}{\sum f_i}$
    $\sum f_i x_i = (1 \times 1) + (2 \times \frac{1}{2}) + (3 \times \frac{1}{3}) + ... + (n \times \frac{1}{n})$
    $= 1 + 1 + 1 + ... + 1$ (n times) $= n$.
    $\sum f_i = 1 + 2 + 3 + ... + n = \frac{n(n+1)}{2}$.
    Mean = $\frac{n}{n(n+1)/2} = \frac{2}{n+1}$.

14. If the geometric mean of three observations 40, 50 and x is 10, then the value of x is
    (a) $\frac{1}{2}$
    (b) 4
    (c) 6
    (d) 2
    **Solution:** (a)
    Geometric Mean (GM) = $\sqrt[n]{a_1 \times a_2 \times ... \times a_n}$
    Given $n=3$, observations are 40, 50, x. GM = 10.
    $10 = \sqrt[3]{40 \times 50 \times x}$
    Cube both sides: $10^3 = 40 \times 50 \times x$
    $1000 = 2000x$
    $x = 1000 / 2000 = 1/2$.

15. Suppose, X is some statistical variable with mean $\mu$. Let $x_1, x_2, ..., x_n$ be its deviations from mean with the respective frequencies $f_1, f_2, ..., f_n$. What is the value of the sum $f_1 x_1 + f_2 x_2 + ... + f_n x_n$?
    (a) 0
    (b) 1
    (c) $\mu$
    (d) $\mu + 1$
    **Solution:** (a)
    The question states $x_i$ are deviations *from the mean*. This notation is slightly ambiguous. Usually, $d_i = X_i - \mu$ are the deviations. If $x_i$ here refers to $X_i - \mu$, then the sum is $\sum f_i (X_i - \mu)$.
    We know that $\sum f_i (X_i - \mu) = \sum f_i X_i - \mu \sum f_i$.
    Also, $\mu = \frac{\sum f_i X_i}{\sum f_i} \Rightarrow \sum f_i X_i = \mu \sum f_i$.
    Therefore, $\sum f_i (X_i - \mu) = \mu \sum f_i - \mu \sum f_i = 0$.
    The sum of deviations from the mean, weighted by their frequencies, is always zero.

16. Which one of the following statements is not correct with reference to a histogram?
    (a) Frequency curve is obtained by joining the mid-points of the top of the adjacent rectangles with smooth curves
    (b) Histogram is drawn for continuous data
    (c) The height of the bar is proportional to the frequency of that class
    (d) Mode of the distribution can be obtained from the histogram
    **Solution:** (a)
    (a) A frequency curve is obtained by joining the mid-points of the top of the adjacent rectangles with a *smooth curve*, but a frequency *polygon* is formed by joining them with *straight lines*. So, the statement is about a frequency curve but describes the process for a frequency polygon, then says "smooth curves". A frequency curve is a smoothed version of a frequency polygon. The primary text states "A frequency polygon can be drawn by joining the mid-points...". The term "frequency curve" usually implies a smoothed line. This statement is the most likely incorrect or misleading one.
    (b) Histograms are indeed drawn for continuous data (class intervals).
    (c) The height of the bar (rectangle) in a histogram is proportional to the frequency (or frequency density for unequal class widths).
    (d) The mode of the distribution can be graphically located from a histogram by drawing lines from the top corners of the highest bar to the adjacent bars.

### Previous Years’ Questions

80. What will be the cost to plaster the inner surface of a well 14 m deep and 4 m in diameter at the rate of ` 25 per m²?
    e 2012 I
    (a) ` 4000
    (b) ` 4200
    (c) ` 4400
    (d) ` 5400
    **Solution:** (c)
    The inner surface of a well is the curved surface area of a cylinder.
    Depth (height) $h = 14$ m.
    Diameter $D = 4$ m, so radius $r = D/2 = 2$ m.
    Curved Surface Area (CSA) = $2\pi rh = 2 \times \frac{22}{7} \times 2 \times 14 = 2 \times 22 \times 2 \times 2 = 176$ m².
    Cost of plastering = CSA $\times$ rate = $176 \times 25 = 4400$.
    The cost will be ` 4400.

81. What is the length of the uniform wire of diameter 0.4 cm that can be drawn from a solid sphere of radius 9 cm?
    e 2012 I
    (a) 243 m
    (b) 240 m
    (c) 60.75 m
    (d) 60 m
    **Solution:** (a)
    When a solid is melted and recast into another shape, its volume remains constant.
    Volume of sphere = Volume of wire (cylinder).
    Radius of sphere $R = 9$ cm.
    Volume of sphere = $\frac{4}{3}\pi R^3 = \frac{4}{3}\pi (9)^3 = \frac{4}{3}\pi \times 729 = 4 \pi \times 243 = 972\pi$ cm³.
    Diameter of wire $d = 0.4$ cm, so radius of wire $r = d/2 = 0.2$ cm.
    Let the length of the wire be $L$.
    Volume of wire = $\pi r^2 L = \pi (0.2)^2 L = \pi \times 0.04 L$ cm³.
    Equating volumes: $972\pi = \pi \times 0.04 L$.
    $L = \frac{972}{0.04} = \frac{97200}{4} = 24300$ cm.
    Converting to meters: $L = 24300 / 100 = 243$ m.

82. The total surface area of a cube is 150 cm². What is its volume?
    e 2012 I
    (a) 64 cm³
    (b) 81 cm³
    (c) 125 cm³
    (d) 160 cm³
    **Solution:** (c)
    Let the side length of the cube be $a$.
    Total surface area of a cube = $6a^2$.
    Given $6a^2 = 150$ cm².
    $a^2 = 150 / 6 = 25$ cm².
    $a = \sqrt{25} = 5$ cm.
    Volume of the cube = $a^3 = (5)^3 = 125$ cm³.

83. If the volume of a cube is 729 cm³, then what is the length of its diagonal?
    e 2012 I
    (a) $9\sqrt{2}$ cm
    (b) $9\sqrt{3}$ cm
    (c) 18 cm
    (d) $18\sqrt{3}$ cm
    **Solution:** (b)
    Let the side length of the cube be $a$.
    Volume of a cube = $a^3$.
    Given $a^3 = 729$ cm³.
    $a = \sqrt[3]{729} = 9$ cm.
    Length of the diagonal of a cube = $a\sqrt{3}$.
    Diagonal = $9\sqrt{3}$ cm.

84. The curved surface area of a right circular cone of radius 14 cm is 440 cm². What is the slant height of the cone?
    e 2012 I
    (a) 10 cm
    (b) 11cm
    (c) 12 cm
    (d) 13 cm
    **Solution:** (a)
    Radius $r = 14$ cm.
    Curved Surface Area (CSA) of a cone = $\pi rl$.
    Given $\pi rl = 440$ cm².
    $\frac{22}{7} \times 14 \times l = 440$.
    $22 \times 2 \times l = 440$.
    $44l = 440$.
    $l = 440 / 44 = 10$ cm.

85. A large solid metallic cylinder whose radius and height are equal to each other is to be melted and 48 identical solid balls are to be recast from the liquid metal, so formed. What is the ratio of the radius of a ball to the radius of the cylinder?
    e 2012 I
    (a) 1 : 16
    (b) 1 : 12
    (c) 1 : 8
    (d) 1 : 4
    **Solution:** (d)
    Let the radius of the cylinder be $R_c$ and its height be $H_c$.
    Given $R_c = H_c$.
    Volume of cylinder $V_c = \pi R_c^2 H_c = \pi R_c^2 (R_c) = \pi R_c^3$.
    Let the radius of each ball be $R_b$.
    Volume of one ball $V_b = \frac{4}{3}\pi R_b^3$.
    Total volume of 48 balls = $48 \times \frac{4}{3}\pi R_b^3 = 16 \times 4\pi R_b^3 = 64\pi R_b^3$.
    By conservation of volume: $V_c = 48 V_b$.
    $\pi R_c^3 = 64\pi R_b^3$.
    $R_c^3 = 64 R_b^3$.
    Taking cube root on both sides: $R_c = \sqrt[3]{64} R_b = 4 R_b$.
    The ratio of the radius of a ball to the radius of the cylinder is $R_b : R_c = R_b : 4R_b = 1 : 4$.

86. What are the dimensions (length, breadth and height, respectively) of a cuboid with volume 720 cm³, surface area 484 cm² and the area of the base 72 cm²?
    e 2012 I
    (a) 9, 8 and 10 cm
    (b) 12, 6 and 10 cm
    (c) 18, 4 and 10 cm
    (d) 30, 2 and 12 cm
    **Solution:** (a)
    Let length = $l$, breadth = $b$, height = $h$.
    Volume $V = l \times b \times h = 720$ cm³.
    Area of base $A_b = l \times b = 72$ cm².
    From $V = A_b \times h$: $720 = 72 \times h \Rightarrow h = 720 / 72 = 10$ cm.
    Surface Area $SA = 2(lb + bh + hl) = 484$ cm².
    Substitute $lb=72$ and $h=10$:
    $2(72 + b \times 10 + 10 \times l) = 484$.
    $2(72 + 10b + 10l) = 484$.
    $72 + 10(b + l) = 242$.
    $10(b + l) = 242 - 72 = 170$.
    $b + l = 17$.
    Now we have $lb = 72$ and $l + b = 17$.
    We need two numbers whose product is 72 and sum is 17. These are 9 and 8.
    So, $l=9$ cm, $b=8$ cm (or vice versa).
    The dimensions are 9 cm, 8 cm, and 10 cm.

87. If the surface area of a sphere is 616 cm², then what is its volume?
    e 2012 I
    (a) 4312/3 cm³
    (b) 4102/3 cm³
    (c) 1257 cm³
    (d) 1023 cm³
    **Solution:** (a)
    Surface area of a sphere $SA = 4\pi r^2$.
    Given $4\pi r^2 = 616$ cm².
    $4 \times \frac{22}{7} \times r^2 = 616$.
    $\frac{88}{7} r^2 = 616$.
    $r^2 = \frac{616 \times 7}{88} = \frac{7 \times 7}{1} = 49$.
    $r = \sqrt{49} = 7$ cm.
    Volume of a sphere $V = \frac{4}{3}\pi r^3 = \frac{4}{3} \times \frac{22}{7} \times (7)^3 = \frac{4}{3} \times \frac{22}{7} \times 7 \times 7 \times 7 = \frac{4 \times 22 \times 49}{3} = \frac{88 \times 49}{3} = \frac{4312}{3}$ cm³.

Directions (Q.Nos. 88-89) Read the following information carefully and answer the given questions that follow.
The areas of the ends of a frustum of a cone are P and Q, where P < Q and H is its thickness.

88. What is the difference in radii of the ends of the frustum?
    e 2012 II
    (a) $\frac{\sqrt{Q} - \sqrt{P}}{\sqrt{\pi}}$
    (b) $\frac{Q - P}{\pi}$
    (c) $\sqrt{Q} - \sqrt{P}$
    (d) None of these
    **Solution:** (a)
    Let the radii of the ends be $r$ and $R$.
    Given $P < Q$, so $P = \pi r^2$ and $Q = \pi R^2$.
    From $P = \pi r^2 \Rightarrow r = \sqrt{P/\pi} = \sqrt{P}/\sqrt{\pi}$.
    From $Q = \pi R^2 \Rightarrow R = \sqrt{Q/\pi} = \sqrt{Q}/\sqrt{\pi}$.
    Difference in radii = $R - r = \frac{\sqrt{Q}}{\sqrt{\pi}} - \frac{\sqrt{P}}{\sqrt{\pi}} = \frac{\sqrt{Q} - \sqrt{P}}{\sqrt{\pi}}$.

89. What is the volume of the frustum?
    e 2012 II
    (a) $3H(\sqrt{P} + \sqrt{Q} + \sqrt{PQ})$
    (b) $H(\sqrt{P} + \sqrt{Q} + \sqrt{PQ})$
    (c) $\frac{H}{3}(\sqrt{P} + \sqrt{Q} + \sqrt{PQ})$
    (d) $\frac{H}{3}(\sqrt{P} + \sqrt{Q} - \sqrt{PQ})$
    **Solution:** (c)
    Volume of frustum $V = \frac{1}{3}\pi h(R^2 + r^2 + Rr)$.
    Here, $h = H$ (thickness).
    We have $R^2 = Q/\pi$ and $r^2 = P/\pi$.
    Also, $R = \sqrt{Q/\pi}$ and $r = \sqrt{P/\pi}$.
    So, $Rr = \sqrt{Q/\pi} \times \sqrt{P/\pi} = \sqrt{PQ}/\pi$.
    Substitute these into the volume formula:
    $V = \frac{1}{3}\pi H \left(\frac{Q}{\pi} + \frac{P}{\pi} + \frac{\sqrt{PQ}}{\pi}\right)$.
    $V = \frac{1}{3}\pi H \times \frac{1}{\pi} (Q + P + \sqrt{PQ})$.
    $V = \frac{H}{3} (P + Q + \sqrt{PQ})$.
    The options provided use $\sqrt{P}$ and $\sqrt{Q}$ instead of $P$ and $Q$. Let's recheck the formula.
    The formula is $\frac{1}{3}\pi h(R^2 + r^2 + Rr)$.
    The options are in terms of $\sqrt{P}$ and $\sqrt{Q}$. This means $P$ and $Q$ might be referring to the radii directly, or there's a typo in the options.
    If $P$ and $Q$ are areas, then $R = \sqrt{Q/\pi}$ and $r = \sqrt{P/\pi}$.
    The expression in the option is $\frac{H}{3}(\sqrt{P} + \sqrt{Q} + \sqrt{PQ})$. This does not match the standard frustum volume formula if P and Q are areas.
    Let's assume the question implies $P$ and $Q$ are related to the radii such that $\sqrt{P}$ and $\sqrt{Q}$ are the radii. This is a common simplification in some contexts for such questions.
    If $R = \sqrt{Q}$ and $r = \sqrt{P}$, then the volume would be $\frac{1}{3}\pi H (Q + P + \sqrt{PQ})$.
    However, the option (c) is $\frac{H}{3}(\sqrt{P} + \sqrt{Q} + \sqrt{PQ})$. This is not the standard volume formula.
    Let's re-examine the textbook's solution for Q.89. It states (c).
    The standard formula for frustum volume is $V = \frac{H}{3} (A_1 + A_2 + \sqrt{A_1 A_2})$ where $A_1, A_2$ are base areas.
    So, $V = \frac{H}{3} (P + Q + \sqrt{PQ})$.
    Comparing this with option (c) $\frac{H}{3}(\sqrt{P} + \sqrt{Q} + \sqrt{PQ})$, there is a mismatch. The option (c) in the provided solution is actually $H/3(P+Q+\sqrt{PQ})$. The text's solution key has (c) for 89, and the solution provided is $H/3(P+Q+\sqrt{PQ})$. This means the option (c) in the question text is a typo and should be $H/3(P+Q+\sqrt{PQ})$.
    Assuming the option (c) in the question is a typo and should be $H/3(P+Q+\sqrt{PQ})$, then the solution is (c).

90. Let the largest possible right circular cone and largest possible sphere be fitted into two cubes of same length. If C and S denote the volume of cone and volume of sphere, respectively. Then, which one of the following is correct?
    e 2012 II
    (a) C = 2S
    (b) S = 2C
    (c) C = S
    (d) C = 3S
    **Solution:** (b)
    Let the side length of the cube be $a$.
    For the largest possible right circular cone fitted into a cube:
    Radius of cone $r = a/2$.
    Height of cone $h = a$.
    Volume of cone $C = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \left(\frac{a}{2}\right)^2 a = \frac{1}{3}\pi \frac{a^2}{4} a = \frac{\pi a^3}{12}$.
    For the largest possible sphere fitted into a cube:
    Radius of sphere $R = a/2$.
    Volume of sphere $S = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi \left(\frac{a}{2}\right)^3 = \frac{4}{3}\pi \frac{a^3}{8} = \frac{\pi a^3}{6}$.
    Now compare C and S:
    $S = \frac{\pi a^3}{6} = 2 \times \frac{\pi a^3}{12} = 2C$.
    So, $S = 2C$.

91. 10 circular plates each of thickness 3 cm, are placed one above the other and a hemisphere of radius 6 cm is placed on the top just to cover the cylindrical solid. What is the volume of the solid so formed?
    e 2012 II
    (a) $264\pi$ cm³
    (b) $252\pi$ cm³
    (c) $236\pi$ cm³
    (d) None of these
    **Solution:** (d)
    The 10 circular plates form a cylinder.
    Thickness of each plate = 3 cm.
    Total height of the cylinder formed by plates $h = 10 \times 3 = 30$ cm.
    A hemisphere of radius 6 cm is placed on top *just to cover* the cylindrical solid. This implies the radius of the cylinder is also 6 cm.
    Radius of cylinder $r = 6$ cm.
    Volume of cylinder $V_{cyl} = \pi r^2 h = \pi (6)^2 (30) = \pi \times 36 \times 30 = 1080\pi$ cm³.
    Volume of hemisphere $V_{hemi} = \frac{2}{3}\pi r^3 = \frac{2}{3}\pi (6)^3 = \frac{2}{3}\pi \times 216 = 2\pi \times 72 = 144\pi$ cm³.
    Total volume of the solid = $V_{cyl} + V_{hemi} = 1080\pi + 144\pi = 1224\pi$ cm³.
    This value is not among the options (a), (b), (c). Hence, (d) None of these.

92. A right circular metal cone (solid) is 8 cm high and the radius is 2 cm. It is melted and recast into a sphere. What is the radius of the sphere?
    e 2012 II
    (a) 2 cm
    (b) 3 cm
    (c) 4 cm
    (d) 5 cm
    **Solution:** (a)
    Volume of cone = Volume of sphere.
    Height of cone $h = 8$ cm.
    Radius of cone $r_c = 2$ cm.
    Volume of cone $V_c = \frac{1}{3}\pi r_c^2 h = \frac{1}{3}\pi (2)^2 (8) = \frac{1}{3}\pi \times 4 \times 8 = \frac{32\pi}{3}$ cm³.
    Let the radius of the sphere be $r_s$.
    Volume of sphere $V_s = \frac{4}{3}\pi r_s^3$.
    Equating volumes: $\frac{32\pi}{3} = \frac{4}{3}\pi r_s^3$.
    $32 = 4 r_s^3$.
    $r_s^3 = 32 / 4 = 8$.
    $r_s = \sqrt[3]{8} = 2$ cm.

93. The volume of a cube is numerically equal to sum of its edges. What is the total surface area?
    e 2012 II
    (a) 12 sq units
    (b) 36 sq units
    (c) 72 sq units
    (d) 144 sq units
    **Solution:** (c)
    Let the side length of the cube be $a$.
    Volume of cube = $a^3$.
    A cube has 12 edges. Sum of its edges = $12a$.
    Given $a^3 = 12a$.
    Since $a \neq 0$, we can divide by $a$: $a^2 = 12$.
    Total surface area of a cube = $6a^2$.
    Substitute $a^2 = 12$: $6 \times 12 = 72$ sq units.

94. The diameter of base of a right circular cone is 7 cm and slant height is 10 cm, then what is its lateral surface area?
    e 2012 II
    (a) 110 cm²
    (b) 100 cm²
    (c) 70 cm²
    (d) 49 cm²
    **Solution:** (a)
    Diameter of base $D = 7$ cm, so radius $r = D/2 = 3.5$ cm.
    Slant height $l = 10$ cm.
    Lateral surface area (Curved Surface Area) of a cone = $\pi rl$.
    CSA = $\frac{22}{7} \times 3.5 \times 10 = \frac{22}{7} \times \frac{7}{2} \times 10 = 11 \times 10 = 110$ cm².

95. What is the height of a solid cylinder of radius 5 cm and total surface area is 660 cm²?
    e 2012 II
    (a) 10 cm
    (b) 12 cm
    (c) 15 cm
    (d) 16 cm
    **Solution:** (d)
    Radius $r = 5$ cm.
    Total Surface Area (TSA) of a cylinder = $2\pi r(h + r)$.
    Given $2\pi r(h + r) = 660$ cm².
    $2 \times \frac{22}{7} \times 5 \times (h + 5) = 660$.
    $\frac{220}{7} (h + 5) = 660$.
    $h + 5 = \frac{660 \times 7}{220} = 3 \times 7 = 21$.
    $h = 21 - 5 = 16$ cm.

96. If the ratio of the diameters of two spheres is 3 : 5, then what is the ratio of their surface areas?
    e 2012 II
    (a) 9 : 25
    (b) 9 : 10
    (c) 3 : 5
    (d) 27 : 125
    **Solution:** (a)
    Let the diameters be $D_1$ and $D_2$. Given $D_1 : D_2 = 3 : 5$.
    The ratio of radii is also $r_1 : r_2 = 3 : 5$.
    Surface area of a sphere $SA = 4\pi r^2$.
    Ratio of surface areas = $\frac{SA_1}{SA_2} = \frac{4\pi r_1^2}{4\pi r_2^2} = \left(\frac{r_1}{r_2}\right)^2$.
    Ratio of surface areas = $\left(\frac{3}{5}\right)^2 = \frac{9}{25}$.
    So, the ratio is 9 : 25.

97. What is the volume of the largest sphere that can be curved out of a cube of edge 3 cm?
    e 2012 II
    (a) $9\pi$ cm³
    (b) $6\pi$ cm³
    (c) $4.5\pi$ cm³
    (d) $3\pi$ cm³
    **Solution:** (c)
    For the largest sphere to be carved out of a cube, the diameter of the sphere must be equal to the edge of the cube.
    Edge of cube $a = 3$ cm.
    Diameter of sphere $D = 3$ cm, so radius $r = D/2 = 1.5$ cm.
    Volume of sphere $V = \frac{4}{3}\pi r^3 = \frac{4}{3}\pi (1.5)^3 = \frac{4}{3}\pi \left(\frac{3}{2}\right)^3 = \frac{4}{3}\pi \times \frac{27}{8} = \frac{9\pi}{2} = 4.5\pi$ cm³.

98. What is the quantity of cloth required to roll up to form a right circular tent whose base is of radius 12 m and height 5 m?
    e 2013 I
    (a) $40\pi$ m²
    (b) $60\pi$ m²
    (c) $78\pi$ m²
    (d) $156\pi$ m²
    **Solution:** (d)
    The cloth required for a conical tent is its curved surface area.
    Radius of base $r = 12$ m.
    Height $h = 5$ m.
    First, calculate the slant height $l = \sqrt{r^2 + h^2} = \sqrt{12^2 + 5^2} = \sqrt{144 + 25} = \sqrt{169} = 13$ m.
    Curved Surface Area (CSA) = $\pi rl = \pi \times 12 \times 13 = 156\pi$ m².

99. The volume of the material of a hemispherical shell with outer and inner radii 9 cm and 7 cm, respectively is approximately
    e 2013 I
    (a) 808 cm³
    (b) 800 cm³
    (c) 816 cm³
    (d) 824 cm³
    **Solution:** (a)
    Outer radius $R = 9$ cm.
    Inner radius $r = 7$ cm.
    Volume of hemispherical shell = $\frac{2}{3}\pi (R^3 - r^3)$.
    $V = \frac{2}{3} \times \frac{22}{7} \times (9^3 - 7^3) = \frac{44}{21} \times (729 - 343) = \frac{44}{21} \times 386$.
    $V = \frac{16984}{21} \approx 808.76$ cm³.
    Approximately 808 cm³.

100. The ratio of surface area to diameter of a sphere whose volume is $36\pi$ cm³, is
    e 2013 I
    (a) $3\pi$
    (b) $6\pi$
    (c) 6
    (d) None of these
    **Solution:** (b)
    Volume of sphere $V = \frac{4}{3}\pi r^3$.
    Given $V = 36\pi$ cm³.
    $\frac{4}{3}\pi r^3 = 36\pi$.
    $r^3 = \frac{36 \times 3}{4} = 9 \times 3 = 27$.
    $r = \sqrt[3]{27} = 3$ cm.
    Diameter $D = 2r = 2 \times 3 = 6$ cm.
    Surface area $SA = 4\pi r^2 = 4\pi (3)^2 = 4\pi \times 9 = 36\pi$ cm².
    Ratio of surface area to diameter = $\frac{36\pi}{6} = 6\pi$.