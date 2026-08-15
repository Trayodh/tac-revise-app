# MASTER NOTE: PHYSICAL QUANTITIES AND UNITS
**Target Exams:** NDA, CDS, AFCAT  
**Subject:** Physics (General Science)  
**Focus:** Fundamental Measurement, Dimensional Analysis, and Error Theory

### 1. INTRODUCTION
In the realm of physics, we cannot describe the universe using vague terms like "hot," "fast," or "heavy." To achieve scientific precision—especially in defense applications like missile trajectory or aircraft navigation—we require **Physical Quantities**.

A **Physical Quantity** is any property of a material or system that can be quantified by measurement. It is the bridge between a physical phenomenon and a mathematical expression. For a measurement to be globally valid, it must consist of two parts: a **Numerical Value** and a **Unit** (e.g., $10\text{ meters}$). Without the unit, the number is meaningless; without the number, the unit has no scale.

### 2. FUNDAMENTAL CONCEPTS
To understand measurement, we must distinguish between the nature of the quantity and the scale used to measure it.

*   **The Concept of a Unit:** A unit is a standardized benchmark. It is an arbitrarily chosen magnitude of a quantity that is accepted globally to ensure that a "meter" in India is the same as a "meter" in the USA.
*   **The Need for Standardization:** In high-precision environments (e.g., **DRDO** or **ISRO**), standardization prevents catastrophic engineering failures. If two different teams use different definitions of a "pound," a joint-venture aircraft could fail structurally.
*   **The Measurement Process:** Measurement is essentially the process of comparing an unknown quantity with a known standard unit.

### 3. CORE KNOWLEDGE

#### A. Classification of Physical Quantities
Physical quantities are divided based on their dependency and their mathematical nature.

**1. Based on Dependency:**
*   **Fundamental Quantities:** These are independent quantities that do not depend on any other physical quantity for their definition. (Example: Mass, Length, Time).
*   **Derived Quantities:** These are formulated by combining fundamental quantities. (Example: Speed = Length $\div$ Time).

**2. Based on Directional Properties:**
*   **Scalar Quantities:** Quantities described by **magnitude** (size) only.
    *   *Examples:* Mass, Temperature, Energy, Distance, Time, Pressure.
*   **Vector Quantities:** Quantities described by both **magnitude and direction**.
    *   *Examples:* Displacement, Velocity, Acceleration, Force, Momentum.

#### B. Systems of Units
Historically, three main systems have dominated:
1.  **CGS System:** Centimetre, Gram, Second (Used in specific laboratory settings).
2.  **FPS System:** Foot, Pound, Second (British Imperial system; still seen in some aviation contexts).
3.  **SI System (International System of Units):** The modern global standard. It is a coherent system based on seven base units.

### 4. DETAILED EXPLANATION

#### The SI Base Units (The Seven Pillars)
Every single physical quantity in the universe can be derived from these seven:

| Base Quantity | SI Unit | Symbol | Definition Basis |
| :--- | :--- | :--- | :--- |
| **Length** | Metre | $\text{m}$ | Distance light travels in vacuum in $1/299,792,458\text{ s}$. |
| **Mass** | Kilogram | $\text{kg}$ | Defined via the Planck constant ($h$). |
| **Time** | Second | $\text{s}$ | Based on the caesium-133 atom vibration. |
| **Electric Current** | Ampere | $\text{A}$ | Based on the elementary charge of an electron. |
| **Temperature** | Kelvin | $\text{K}$ | Based on the Boltzmann constant. |
| **Amount of Substance**| Mole | $\text{mol}$ | Exactly $6.022 \times 10^{23}$ elementary entities. |
| **Luminous Intensity** | Candela | $\text{cd}$ | Based on monochromatic radiation frequency. |

#### Dimensional Analysis
**Dimensions** are the fundamental nature of a quantity, regardless of the unit. We represent them using square brackets: $[M]$ for Mass, $[L]$ for Length, and $[T]$ for Time.

**The Principle of Dimensional Homogeneity:**
An equation is physically correct only if the dimensions on the Left Hand Side (LHS) equal the dimensions on the Right Hand Side (RHS).
*   *Example:* $\text{Force} = \text{Mass} \times \text{Acceleration}$
*   $\text{LHS (Force)} = [MLT^{-2}]$
*   $\text{RHS} = [M] \times [LT^{-2}] = [MLT^{-2}]$
*   Since $\text{LHS} = \text{RHS}$, the equation is dimensionally consistent.

### 5. IMPORTANT FACTS
*   **Dimensionless Quantities:** Some quantities have no units or dimensions (e.g., Refractive Index, Relative Density, Strain, Angle/Radians).
*   **Light Year:** Not a unit of time, but a unit of **distance** (distance light travels in one year).
*   **Parsec:** The largest unit of distance used in astronomy.
*   **Angstrom ($\text{\AA}$):** Used for atomic distances ($1 \text{\AA} = 10^{-10}\text{ m}$).
*   **Universal Constant:** The speed of light ($c$) is an absolute constant used to define the metre.

### 6. CLASSIFICATIONS

**Summary Table: Scalar vs. Vector**

| Feature | Scalar | Vector |
| :--- | :--- | :--- |
| **Requirement** | Magnitude + Unit | Magnitude + Unit + Direction |
| **Change** | Changes if magnitude changes | Changes if magnitude OR direction changes |
| **Addition** | Simple Arithmetic ($2\text{kg} + 3\text{kg} = 5\text{kg}$) | Vector Algebra (Triangle/Parallelogram Law) |
| **Example** | Speed ($60\text{ km/h}$) | Velocity ($60\text{ km/h}$ North) |

### 7. CAUSE $\rightarrow$ MECHANISM $\rightarrow$ EFFECT (Measurement Errors)

**Scenario: Measuring the length of a metal rod with a faulty ruler.**

*   **CAUSE (Systematic Error):** The ruler is worn out at the end (Zero Error), or the temperature causes the ruler to expand.
    *   $\rightarrow$ **MECHANISM:** Every single measurement is shifted by a constant offset (e.g., always $+2\text{mm}$ too long).
    *   $\rightarrow$ **EFFECT:** **Accuracy is reduced.** The measured value is far from the true value, even if the measurements are consistent.

*   **CAUSE (Random Error):** The observer views the ruler from slightly different angles each time (Parallax Error).
    *   $\rightarrow$ **MECHANISM:** Measurements fluctuate unpredictably (one is $+1\text{mm}$, next is $-1\text{mm}$).
    *   $\rightarrow$ **EFFECT:** **Precision is reduced.** The results are scattered and inconsistent.

### 8. COMPARISONS

| Accuracy | Precision |
| :--- | :--- |
| How close a measurement is to the **True Value**. | How close repeated measurements are to **Each Other**. |
| Focused on "Correctness." | Focused on "Repeatability/Consistency." |
| Affected by **Systematic Errors**. | Affected by **Random Errors**. |
| Goal: To eliminate bias. | Goal: To eliminate noise/variation. |

### 9. EXCEPTIONS & NUANCES
*   **The Case of Angle:** The radian is a unit, but it is **dimensionless** because it is a ratio of length (arc) to length (radius). $[L]/[L] = [M^0L^0T^0]$.
*   **The Case of Pressure:** Pressure is a scalar quantity, even though it results from a force (vector) acting on an area. This is because pressure acts equally in all directions at a point in a fluid.

### 10. EXAMPLES (Defence Application)
1.  **Ballistics:** When calculating the path of a shell, the **velocity** (Vector) is critical. If you only know the speed (Scalar), you cannot predict where the shell will land.
2.  **Radar Systems:** Radar measures the **time** (Fundamental) for a signal to return. Using the constant speed of light, it derives the **distance** (Derived) to the target.
3.  **Aviation:** Altimeters measure air **pressure** (Derived) to determine altitude.

### 11. MAPS / DIAGRAMS / FLOWCHARTS (Descriptions)

**A. The Hierarchy Flowchart:**
*   **Top Node:** Physical Quantities.
*   **Branch 1:** Fundamental $\rightarrow$ (Length, Mass, Time, etc.).
*   **Branch 2:** Derived $\rightarrow$ (Velocity, Force, Pressure, etc.).
*   **Sub-Branch from all:** Split into $\rightarrow$ Scalar (Magnitude only) vs. Vector (Magnitude + Direction).

**B. The "Target" Diagram (Accuracy vs. Precision):**
*   **Image 1:** Dots scattered far from the bullseye $\rightarrow$ Low Accuracy, Low Precision.
*   **Image 2:** Dots clustered tightly but far from the bullseye $\rightarrow$ High Precision, Low Accuracy.
*   **Image 3:** Dots clustered tightly around the bullseye $\rightarrow$ High Accuracy, High Precision.

### 12. ADVANCED KNOWLEDGE
**Dimensional Analysis as a Tool for Formula Derivation:**
If we know that the Time Period ($T$) of a pendulum depends on the Mass of the bob ($m$), Length of the string ($l$), and acceleration due to gravity ($g$), we can write:
$T \propto m^a l^b g^c$
By equating dimensions on both sides:
$[T] = [M]^a [L]^b [LT^{-2}]^c$
Solving for $a, b, c$ reveals that $a=0$ (mass doesn't matter), $b=1/2$, and $c=-1/2$.
**Result:** $T = k \sqrt{l/g}$. This allows scientists to find the form of a law before they even perform the experiment.

### 13. DEEP-DIVE: THE EVOLUTION OF THE KILOGRAM
Until 2019, the kilogram was defined by a physical cylinder of platinum-iridium kept in a vault in France (the IPK). However, physical objects can change mass over time (due to contamination or wear).
**The Shift:** To ensure absolute stability, the KG is now defined using the **Planck Constant ($h$)**, a fundamental constant of nature, via a device called a **Kibble Balance**. This ensures that the unit of mass is the same everywhere in the universe, not just in a vault in France.

### 14. CURRENT / DYNAMIC INFORMATION
*   **Quantum Metrology:** The current trend in physics is moving all SI units toward "Quantum Standards." Instead of relying on physical artifacts, units are now defined by counting atoms or measuring frequency of light.
*   **Defence Integration:** Modern "Smart Weapons" use integrated sensors that perform real-time unit conversion between GPS coordinates (angular/degree) and Cartesian coordinates (meters) to ensure precision strikes.

### 15. EXAM TRAPS
When solving problems related to physical quantities and units, be cautious of the following common pitfalls:
*   **Unit Conversion Errors:** Ensure that all quantities are in the same unit system before performing calculations.
*   **Dimensional Analysis Mistakes:** Double-check that the dimensions on both sides of an equation are equal to ensure dimensional homogeneity.
*   **Scalar vs. Vector Confusion:** Clearly distinguish between scalar quantities (magnitude only) and vector quantities (magnitude and direction).

### 16. PYQ-RELEVANT INSIGHTS
Previous years' questions (PYQs) often test the understanding of fundamental concepts and their applications. Some key insights relevant to physical quantities and units include:
*   **Understanding the difference between speed and velocity:** Speed is a scalar quantity, while velocity is a vector quantity.
*   **Recognizing the importance of dimensional analysis:** It helps in deriving formulas and checking the correctness of equations.
*   **Applying knowledge of units and conversions:** Familiarity with different unit systems (SI, CGS, FPS) and conversion factors is crucial for solving problems accurately.

# 17. QUICK REVISION
* Physical quantities are properties of materials or systems that can be quantified by measurement,* A physical quantity consists of a numerical value and a unit,* Standardization of units is crucial in high-precision environments,* Physical quantities can be classified based on dependency (fundamental and derived) and directional properties (scalar and vector),* The SI system is the modern global standard with seven base units: length, mass, time, electric current, temperature, amount of substance, and luminous intensity,* Dimensional analysis is a method of analyzing physical quantities based on their fundamental nature (dimensions) regardless of the unit,* The principle of dimensional homogeneity states that only quantities with the same dimensions can be added or subtracted