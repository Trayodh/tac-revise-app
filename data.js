const NOTES_DATABASE = {
  "mathematics": {
    "title": "Mathematics (NDA/CDS)",
    "chapters": [
      {
        "id": "trigonometry",
        "title": "Trigonometry",
        "topics": [
          {
            "id": "trig-identities",
            "title": "Trigonometric Identities & Values",
            "notes": "\n              <h3>1. Core Trigonometric Identities</h3>\n              <p>Pythagorean identities form the bedrock of trigonometric simplification:</p>\n              <ul>\n                <li>**sin²θ + cos²θ = 1** ⇒ sin²θ = 1 - cos²θ ; cos²θ = 1 - sin²θ</li>\n                <li>**sec²θ - tan²θ = 1** (θ ≠ (2n+1)π/2) ⇒ sec²θ = 1 + tan²θ ; tan²θ = sec²θ - 1</li>\n                <li>**cosec²θ - cot²θ = 1** (θ ≠ nπ) ⇒ cosec²θ = 1 + cot²θ ; cot²θ = cosec²θ - 1</li>\n              </ul>\n              \n              <h3>2. Sum & Difference Formulas</h3>\n              <p>Used to find values of angles like 15°, 75°, 105°, etc.:</p>\n              <ul>\n                <li>sin(A ± B) = sin A cos B ± cos A sin B</li>\n                <li>cos(A ± B) = cos A cos B ∓ sin A sin B</li>\n                <li>tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)</li>\n                <li>cot(A ± B) = (cot A cot B ∓ 1) / (cot B ± cot A)</li>\n              </ul>\n              \n              <h3>3. Multiple Angle Identities</h3>\n              <p>Essential for reducing powers in calculus integrations:</p>\n              <ul>\n                <li>sin 2A = 2 sin A cos A = 2tan A / (1 + tan² A)</li>\n                <li>cos 2A = cos² A - sin² A = 2cos² A - 1 = 1 - 2sin² A = (1 - tan² A)/(1 + tan² A)</li>\n                <li>tan 2A = 2tan A / (1 - tan² A)</li>\n                <li>sin 3A = 3sin A - 4sin³ A</li>\n                <li>cos 3A = 4cos³ A - 3cos A</li>\n                <li>tan 3A = (3tan A - tan³ A) / (1 - 3tan² A)</li>\n              </ul>\n              \n              <h3>4. Product-to-Sum & Sum-to-Product</h3>\n              <p>Key transformations for calculus and equations:</p>\n              <ul>\n                <li>2 sin A cos B = sin(A + B) + sin(A - B)</li>\n                <li>2 cos A sin B = sin(A + B) - sin(A - B)</li>\n                <li>2 cos A cos B = cos(A + B) + cos(A - B)</li>\n                <li>2 sin A sin B = cos(A - B) - cos(A + B)</li>\n                <li>sin C + sin D = 2 sin((C+D)/2) cos((C-D)/2)</li>\n                <li>sin C - sin D = 2 cos((C+D)/2) sin((C-D)/2)</li>\n                <li>cos C + cos D = 2 cos((C+D)/2) cos((C-D)/2)</li>\n                <li>cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2)</li>\n              </ul>\n            ",
            "formulas": "sin(A+B) = sinA·cosB + cosA·sinB\ncos(2A) = 2cos²A - 1 = 1 - 2sin²A\ntan(2A) = 2tanA / (1 - tan²A)\nsin(3A) = 3sinA - 4sin³A\ncos(3A) = 4cos³A - 3cosA\n2sinA·cosB = sin(A+B) + sin(A-B)\nsinC + sinD = 2sin((C+D)/2)cos((C-D)/2)",
            "mindmap": {
              "root": "Trig Identities",
              "branches": [
                {
                  "title": "Pythagorean",
                  "subnodes": [
                    "sin²θ + cos²θ = 1",
                    "sec²θ - tan²θ = 1",
                    "cosec²θ - cot²θ = 1"
                  ]
                },
                {
                  "title": "Compounded",
                  "subnodes": [
                    "sin(A±B) expansion",
                    "cos(A±B) signs flip",
                    "tan(A±B) fractions"
                  ]
                },
                {
                  "title": "Multiples",
                  "subnodes": [
                    "sin 2A / cos 2A",
                    "3A cubic identities",
                    "Tan 2A and 3A forms"
                  ]
                },
                {
                  "title": "Transformations",
                  "subnodes": [
                    "2 sin A cos B product",
                    "sin C + sin D sum rules",
                    "cos C - cos D negative factor"
                  ]
                }
              ]
            }
          },
          {
            "id": "inverse-trig",
            "title": "Inverse Trigonometric Functions",
            "notes": "\n              <h3>1. Principal Value Branches (PVB)</h3>\n              <p>The domain and range must be strictly memorized to solve standard NDA/CDS equations:</p>\n              <ul>\n                <li>**sin⁻¹ x** : Domain = [-1, 1] , Range (PVB) = [-π/2, π/2]</li>\n                <li>**cos⁻¹ x** : Domain = [-1, 1] , Range (PVB) = [0, π]</li>\n                <li>**tan⁻¹ x** : Domain = ℝ , Range (PVB) = (-π/2, π/2)</li>\n                <li>**cosec⁻¹ x** : Domain = ℝ - (-1, 1) , Range (PVB) = [-π/2, π/2] - {0}</li>\n                <li>**sec⁻¹ x** : Domain = ℝ - (-1, 1) , Range (PVB) = [0, π] - {π/2}</li>\n                <li>**cot⁻¹ x** : Domain = ℝ , Range (PVB) = (0, π)</li>\n              </ul>\n              \n              <h3>2. Fundamental Properties</h3>\n              <ul>\n                <li>sin⁻¹(-x) = -sin⁻¹ x , cosec⁻¹(-x) = -cosec⁻¹ x , tan⁻¹(-x) = -tan⁻¹ x</li>\n                <li>cos⁻¹(-x) = π - cos⁻¹ x , sec⁻¹(-x) = π - sec⁻¹ x , cot⁻¹(-x) = π - cot⁻¹ x</li>\n                <li>sin⁻¹(1/x) = cosec⁻¹ x (for |x| ≥ 1)</li>\n                <li>cos⁻¹(1/x) = sec⁻¹ x (for |x| ≥ 1)</li>\n                <li>tan⁻¹(1/x) = cot⁻¹ x (for x > 0)</li>\n              </ul>\n              \n              <h3>3. Identities & Sums</h3>\n              <ul>\n                <li>sin⁻¹ x + cos⁻¹ x = π/2 (for x ∈ [-1, 1])</li>\n                <li>tan⁻¹ x + cot⁻¹ x = π/2 (for x ∈ ℝ)</li>\n                <li>cosec⁻¹ x + sec⁻¹ x = π/2 (for |x| ≥ 1)</li>\n                <li>tan⁻¹ x + tan⁻¹ y = tan⁻¹((x + y)/(1 - xy)) [if xy < 1]</li>\n                <li>tan⁻¹ x - tan⁻¹ y = tan⁻¹((x - y)/(1 + xy)) [if xy > -1]</li>\n                <li>2tan⁻¹ x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²)) = tan⁻¹(2x/(1-x²))</li>\n              </ul>\n            ",
            "formulas": "sin⁻¹x + cos⁻¹x = π/2\ntan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1-xy)) [xy < 1]\n2tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²))",
            "mindmap": {
              "root": "Inverse Trig",
              "branches": [
                {
                  "title": "Domains & Ranges",
                  "subnodes": [
                    "sin⁻¹: [-1,1] to [-π/2, π/2]",
                    "cos⁻¹: [-1,1] to [0, π]",
                    "tan⁻¹: ℝ to (-π/2, π/2)"
                  ]
                },
                {
                  "title": "Negative Angles",
                  "subnodes": [
                    "sin⁻¹(-x) = -sin⁻¹x",
                    "cos⁻¹(-x) = π - cos⁻¹x",
                    "tan⁻¹(-x) = -tan⁻¹x"
                  ]
                },
                {
                  "title": "Sum Identities",
                  "subnodes": [
                    "sin⁻¹x + cos⁻¹x = π/2",
                    "tan⁻¹x + tan⁻¹y formula",
                    "Complementary pairs"
                  ]
                },
                {
                  "title": "Double Angles",
                  "subnodes": [
                    "2tan⁻¹x conversions",
                    "sin⁻¹(2x/(1+x²))",
                    "cos⁻¹((1-x²)/(1+x²))"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "algebra-complex",
        "title": "Algebra & Complex Numbers",
        "topics": [
          {
            "id": "quadratic-eq",
            "title": "Quadratic Equations",
            "notes": "\n              <h3>1. Nature of Roots</h3>\n              <p>For ax2 + bx + c = 0, the discriminant D = b2 - 4ac decides the roots:</p>\n              <ul>\n                <li>D > 0: Real and distinct roots.</li>\n                <li>D = 0: Real and equal roots.</li>\n                <li>D < 0: Complex conjugate roots.</li>\n              </ul>\n            ",
            "formulas": "# Standard Form\nax^2 + bx + c = 0 where a ≠ 0\n# Roots (Sridharacharya Formula)\nx = [-b ± √(b² - 4ac)] / 2a\n# Discriminant D = b² - 4ac\nD > 0 : Two real, distinct roots\nD = 0 : Two real, equal (repeated) roots\nD < 0 : Two complex conjugate roots\n# Sum & Product of Roots (α, β)\nSum α + β = -b/a\nProduct αβ = c/a\nEquation from roots: x² - (α+β)x + αβ = 0\n# Vertex of Parabola\nx-coordinate of vertex = -b / 2a\nMin value (a > 0) = c - b²/4a = -D/4a"
          },
          {
            "id": "complex-numbers",
            "title": "Complex Numbers",
            "notes": "\n              <h3>1. Polar Form and Modulus</h3>\n              <p>A complex number z = x + iy has a modulus |z| = sqrtx2 + y2.</p>\n              <ul>\n                <li>**Argument:** \theta = \tan-1(y/x)</li>\n                <li>**De Moivre's Theorem:** (cos \theta + isin \theta)n = cos n\theta + isin n\theta</li>\n              </ul>\n            ",
            "formulas": "# Algebraic Form\nz = a + ib, where i² = -1, i³ = -i, i⁴ = 1\n# Modulus & Argument\n|z| = √(a² + b²)\narg(z) = θ = tan⁻¹(b/a)\n# Polar & Euler Form\nz = r(cosθ + i sinθ)  [Polar]\nz = r·e^(iθ)  [Euler]\n# Conjugate\nConjugate of z = a+ib is z̄ = a - ib\nz · z̄ = |z|²\n# De Moivre Theorem\n(cosθ + i sinθ)^n = cos(nθ) + i sin(nθ)\n# Cube Roots of Unity\n1, ω, ω²  where ω = (-1+i√3)/2\n1 + ω + ω² = 0   |   ω³ = 1"
          }
        ]
      },
      {
        "id": "2d-geometry",
        "title": "Coordinate Geometry (2D & 3D)",
        "topics": [
          {
            "id": "straight-lines",
            "title": "Straight Lines",
            "notes": "\n              <h3>1. Equations of a Line</h3>\n              <ul>\n                <li>**Slope-Intercept:** y = mx + c</li>\n                <li>**Point-Slope:** y - y1 = m(x - x1)</li>\n                <li>**Normal Form:** xcosalpha + ysinalpha = p</li>\n              </ul>\n            ",
            "formulas": "# Forms of Equation of Line\nSlope-Intercept: y = mx + c\nPoint-Slope: y - y1 = m(x - x1)\nTwo-Point: (y-y1)/(y2-y1) = (x-x1)/(x2-x1)\nIntercept Form: x/a + y/b = 1\n# Slope\nm = (y2 - y1)/(x2 - x1) = tan θ\n# Angle Between Two Lines\ntan θ = |m1 - m2| / |1 + m1·m2|\nParallel: m1 = m2\nPerpendicular: m1 · m2 = -1\n# Distance Formulas\nDistance from point (x1,y1) to line ax+by+c=0:\nd = |ax1 + by1 + c| / √(a² + b²)\nDistance between parallel lines ax+by+c1=0 and ax+by+c2=0:\nd = |c1 - c2| / √(a² + b²)"
          }
        ]
      },
      {
        "id": "statistics-prob",
        "title": "Statistics & Probability",
        "topics": [
          {
            "id": "central-tendency",
            "title": "Measures of Central Tendency",
            "notes": "\n              <h3>1. Mean, Median, Mode</h3>\n              <ul>\n                <li>**Mean:** Sum of observations / Number of observations.</li>\n                <li>**Median:** Middle value when sorted.</li>\n                <li>**Empirical Relation:** Mode = 3*Median - 2*Mean</li>\n              </ul>\n            ",
            "formulas": "# Mean (Arithmetic Mean)\nAM = Sum of observations / n\nFor grouped data: AM = Σ(f·x) / Σf\nCombined Mean = (n1·x̄1 + n2·x̄2) / (n1 + n2)\n# Median\nMiddle value after sorting.\nFor grouped: Median = L + [(N/2 - CF)/f] × h\n# Mode\nMost frequently occurring value.\nFor grouped: Mode = L + [(f1 - f0)/(2f1 - f0 - f2)] × h\n# Empirical Relation\nMode = 3 × Median - 2 × Mean\n# Other Means\nGM = (x1 × x2 × ... × xn)^(1/n)\nHM = n / (1/x1 + 1/x2 + ... + 1/xn)\nInequality: AM ≥ GM ≥ HM\n# Dispersion\nRange = Max - Min\nVariance = Σ(x - x̄)² / n\nStandard Deviation SD = √Variance"
          },
          {
            "id": "data-interpretation",
            "title": "Data Interpretation: Tables, Bar & Pie Charts",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Bar Charts & Histograms\nUsed to compare discrete quantities or continuous ranges.\n# Pie Charts\nTotal Angle = 360° | 1% = 3.6°\nValue = (Central Angle / 360°) × Total Value\n# Line Graphs\nUsed to track changes over periods of time.\nSlope indicates rate of change.\n# Tables & Missing Data\nFocus on row/column totals. \nUse given percentages/ratios to fill in blanks.\n# Core Calculations\nPercentage Increase = (Final - Initial) / Initial × 100\nAverage = Sum / Total Count\nRatio A:B = A/B",
            "mindmap": {
              "root": "Data Interpretation",
              "branches": [
                {
                  "title": "Chart Types",
                  "subnodes": [
                    "Bar Chart",
                    "Pie Chart (1%=3.6°)",
                    "Line Graph",
                    "Mixed DI"
                  ]
                },
                {
                  "title": "Calculations",
                  "subnodes": [
                    "Averages",
                    "Percentage Change",
                    "Ratio & Proportions"
                  ]
                },
                {
                  "title": "Tables",
                  "subnodes": [
                    "Row/Column totals",
                    "Missing data",
                    "Two-way tables"
                  ]
                },
                {
                  "title": "Speed Tricks",
                  "subnodes": [
                    "Approximate",
                    "Check options first",
                    "Skip slow steps"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "calculus",
        "title": "Calculus",
        "topics": [
          {
            "id": "limits-continuity",
            "title": "Limits & Continuity",
            "notes": "\n              <h3>1. Standard Limits</h3>\n              <p>These limits resolve common indeterminate forms instantly:</p>\n              <ul>\n                <li>**lim (x→0) sin(x)/x = 1**</li>\n                <li>**lim (x→0) tan(x)/x = 1**</li>\n                <li>**lim (x→0) (e^x - 1)/x = 1**</li>\n                <li>**lim (x→0) ln(1 + x)/x = 1**</li>\n                <li>**lim (x→a) (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹**</li>\n                <li>**lim (x→0) (1 + x)^(1/x) = e**</li>\n                <li>**lim (x→∞) (1 + 1/x)ˣ = e**</li>\n              </ul>\n              \n              <h3>2. L'Hopital's Rule</h3>\n              <p>For limits resulting in indeterminate forms like **0/0** or **∞/∞**:</p>\n              <ul>\n                <li>Differentiate numerator and denominator separately: **lim f(x)/g(x) = lim f'(x)/g'(x)**.</li>\n                <li>Repeat if the result is still indeterminate and functions remain differentiable.</li>\n              </ul>\n              \n              <h3>3. Continuity & Differentiability</h3>\n              <ul>\n                <li>f(x) is continuous at x = c if: **lim (x→c⁻) f(x) = lim (x→c⁺) f(x) = f(c)** (LHL = RHL = Value).</li>\n                <li>f(x) is differentiable at x = c if: Left Hand Derivative (LHD) = Right Hand Derivative (RHD).</li>\n                <li>**Important Property**: Differentiability ⇒ Continuity. However, Continuity does NOT imply Differentiability (e.g., f(x) = |x| is continuous at x = 0, but not differentiable because of a sharp corner).</li>\n              </ul>\n            ",
            "formulas": "lim(x→0) sinx/x = 1\nlim(x→a) (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹\nL'Hopital: lim f(x)/g(x) = lim f'(x)/g'(x)\nLHL = RHL = f(c) for Continuity",
            "mindmap": {
              "root": "Limits & Continuity",
              "branches": [
                {
                  "title": "Std Limits",
                  "subnodes": [
                    "sin x/x = 1 (x→0)",
                    "e^x-1/x = 1 (x→0)",
                    "(1+1/x)^x = e (x→∞)"
                  ]
                },
                {
                  "title": "L'Hopital",
                  "subnodes": [
                    "For 0/0 and ∞/∞",
                    "Diff numerator separately",
                    "Diff denominator separately"
                  ]
                },
                {
                  "title": "Continuity",
                  "subnodes": [
                    "LHL = RHL = f(c)",
                    "No breaks in curve",
                    "Necessary for derivatives"
                  ]
                },
                {
                  "title": "Derivatives",
                  "subnodes": [
                    "LHD = RHD",
                    "Smooth curves only",
                    "Sharp turns not diff"
                  ]
                }
              ]
            }
          },
          {
            "id": "differentiation",
            "title": "Differentiation Rules",
            "notes": "\n              <h3>1. General Differentiation Rules</h3>\n              <ul>\n                <li>**Product Rule**: d/dx(u·v) = u'v + uv'</li>\n                <li>**Quotient Rule**: d/dx(u/v) = (u'v - uv') / v²</li>\n                <li>**Chain Rule**: d/dx(f(g(x))) = f'(g(x)) · g'(x)</li>\n              </ul>\n              \n              <h3>2. Derivatives of Algebraic & Exponential Functions</h3>\n              <ul>\n                <li>d/dx(xⁿ) = n·xⁿ⁻¹</li>\n                <li>d/dx(eˣ) = eˣ</li>\n                <li>d/dx(aˣ) = aˣ ln a (a > 0)</li>\n                <li>d/dx(ln x) = 1/x</li>\n                <li>d/dx(logₐ x) = 1 / (x ln a)</li>\n              </ul>\n              \n              <h3>3. Trigonometric Derivatives</h3>\n              <ul>\n                <li>d/dx(sin x) = cos x</li>\n                <li>d/dx(cos x) = -sin x</li>\n                <li>d/dx(tan x) = sec² x</li>\n                <li>d/dx(sec x) = sec x tan x</li>\n                <li>d/dx(cosec x) = -cosec x cot x</li>\n                <li>d/dx(cot x) = -cosec² x</li>\n              </ul>\n              \n              <h3>4. Inverse Trigonometric Derivatives</h3>\n              <ul>\n                <li>d/dx(sin⁻¹ x) = 1 / √(1 - x²)</li>\n                <li>d/dx(cos⁻¹ x) = -1 / √(1 - x²)</li>\n                <li>d/dx(tan⁻¹ x) = 1 / (1 + x²)</li>\n                <li>d/dx(cot⁻¹ x) = -1 / (1 + x²)</li>\n                <li>d/dx(sec⁻¹ x) = 1 / (|x|√(x² - 1))</li>\n                <li>d/dx(cosec⁻¹ x) = -1 / (|x|√(x² - 1))</li>\n              </ul>\n            ",
            "formulas": "# Basic Differentiation Rules\nd/dx(c) = 0 | d/dx(xⁿ) = nxⁿ⁻¹ (Power Rule)\nd/dx(eˣ) = eˣ | d/dx(aˣ) = aˣ·ln a\nd/dx(ln x) = 1/x | d/dx(log_a x) = 1/(x·ln a)\n# Product & Quotient Rules\nProduct: d/dx(uv) = u'v + uv'\nQuotient: d/dx(u/v) = (u'v - uv') / v²\nChain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x)\n# Trig Derivatives\nd/dx(sin x) = cos x | d/dx(cos x) = -sin x\nd/dx(tan x) = sec²x | d/dx(cot x) = -cosec²x\nd/dx(sec x) = sec x·tan x | d/dx(cosec x) = -cosec x·cot x\n# Inverse Trig Derivatives\nd/dx(sin⁻¹x) = 1/√(1-x²) | d/dx(cos⁻¹x) = -1/√(1-x²)\nd/dx(tan⁻¹x) = 1/(1+x²) | d/dx(cot⁻¹x) = -1/(1+x²)\n# Applications\nMaxima: f'(x)=0, f''(x)<0 | Minima: f'(x)=0, f''(x)>0\n            Increasing: f'(x)>0 | Decreasing: f'(x)<0",
            "mindmap": {
              "root": "Differentiation",
              "branches": [
                {
                  "title": "Basic Rules",
                  "subnodes": [
                    "Power: nx^(n-1)",
                    "d(e^x)/dx = e^x",
                    "d(ln x)/dx = 1/x",
                    "Constant = 0"
                  ]
                },
                {
                  "title": "Trig Derivatives",
                  "subnodes": [
                    "d(sinx)=cosx",
                    "d(cosx)=-sinx",
                    "d(tanx)=sec²x",
                    "d(secx)=secx·tanx"
                  ]
                },
                {
                  "title": "Rules",
                  "subnodes": [
                    "Product Rule: u'v+uv'",
                    "Quotient Rule: (u'v-uv')/v²",
                    "Chain Rule: f'(g)·g'"
                  ]
                },
                {
                  "title": "Applications",
                  "subnodes": [
                    "Maxima: f'=0, f''<0",
                    "Minima: f'=0, f''>0",
                    "Increasing: f'>0"
                  ]
                },
                {
                  "title": "Trigonometric",
                  "subnodes": [
                    "sin x → cos x",
                    "cos x → -sin x",
                    "tan x → sec² x"
                  ]
                },
                {
                  "title": "Inverse Trig",
                  "subnodes": [
                    "sin⁻¹x → 1/√(1-x²)",
                    "cos⁻¹x → -1/√(1-x²)",
                    "tan⁻¹x → 1/(1+x²)"
                  ]
                },
                {
                  "title": "Exponential",
                  "subnodes": [
                    "e^x → e^x",
                    "a^x → a^x ln a",
                    "ln x → 1/x"
                  ]
                }
              ]
            }
          },
          {
            "id": "integration",
            "title": "Standard Integration Methods",
            "notes": "\n              <h3>1. Fundamental Indefinite Integrals</h3>\n              <ul>\n                <li>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)</li>\n                <li>∫ 1/x dx = ln|x| + C</li>\n                <li>∫ eˣ dx = eˣ + C</li>\n                <li>∫ aˣ dx = aˣ/ln a + C</li>\n                <li>∫ sin x dx = -cos x + C</li>\n                <li>∫ cos x dx = sin x + C</li>\n                <li>∫ sec² x dx = tan x + C</li>\n                <li>∫ cosec² x dx = -cot x + C</li>\n                <li>∫ sec x tan x dx = sec x + C</li>\n                <li>∫ cosec x cot x dx = -cosec x + C</li>\n              </ul>\n              \n              <h3>2. Logarithmic Trigonometric Integrals</h3>\n              <ul>\n                <li>∫ tan x dx = ln|sec x| + C = -ln|cos x| + C</li>\n                <li>∫ cot x dx = ln|sin x| + C</li>\n                <li>∫ sec x dx = ln|sec x + tan x| + C</li>\n                <li>∫ cosec x dx = ln|cosec x - cot x| + C = ln|tan(x/2)| + C</li>\n              </ul>\n              \n              <h3>3. Special Integrals (Substitution helper)</h3>\n              <ul>\n                <li>∫ 1/(x² + a²) dx = (1/a) tan⁻¹(x/a) + C</li>\n                <li>∫ 1/√(a² - x²) dx = sin⁻¹(x/a) + C</li>\n                <li>∫ 1/√(x² ± a²) dx = ln|x + √(x² ± a²)| + C</li>\n              </ul>\n              \n              <h3>4. Integration by Parts & Definite Properties</h3>\n              <ul>\n                <li>**∫ u·v dx = u ∫ v dx - ∫ [ u' ∫ v dx ] dx** (Choose u based on **ILATE** priority).</li>\n                <li>**King's Property**: ∫[0 to a] f(x) dx = ∫[0 to a] f(a-x) dx</li>\n                <li>∫[a to b] f(x) dx = ∫[a to b] f(a+b-x) dx</li>\n                <li>∫[-a to a] f(x) dx = 2∫[0 to a] f(x) dx (if f(x) is even); = 0 (if f(x) is odd).</li>\n              </ul>\n            ",
            "formulas": "# Standard Integrals\n∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1) | ∫(1/x) dx = ln|x| + C\n∫eˣ dx = eˣ + C | ∫aˣ dx = aˣ/ln a + C\n∫sin x dx = -cos x + C | ∫cos x dx = sin x + C\n∫tan x dx = -ln|cos x| + C | ∫sec²x dx = tan x + C\n∫1/√(a²-x²) dx = sin⁻¹(x/a) + C\n∫1/(a²+x²) dx = (1/a)tan⁻¹(x/a) + C\n# Integration Techniques\nSubstitution: u = g(x), du = g'(x)dx\nBy Parts: ∫u dv = uv - ∫v du [ILATE: Inverse, Log, Algebra, Trig, Exp]\nPartial Fractions: For rational functions N(x)/D(x)\n# Definite Integral Properties\n∫ₐᵇ f(x)dx = ∫ₐᵇ f(a+b-x)dx\n∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx\n∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx [if f(x) is even] or 0 [if f(x) is odd]\n# Applications\n            Area under curve = |∫ₐᵇ f(x) dx|",
            "mindmap": {
              "root": "Integration",
              "branches": [
                {
                  "title": "Standard Forms",
                  "subnodes": [
                    "∫x^n = x^(n+1)/(n+1)",
                    "∫e^x = e^x+C",
                    "∫sinx = -cosx+C",
                    "∫1/x = ln|x|+C"
                  ]
                },
                {
                  "title": "Techniques",
                  "subnodes": [
                    "Substitution (u-sub)",
                    "By Parts (ILATE)",
                    "Partial Fractions"
                  ]
                },
                {
                  "title": "Definite Integral",
                  "subnodes": [
                    "∫ₐᵇ f(a+b-x) property",
                    "Even: 2×half, Odd: 0",
                    "Area = |∫f(x)dx|"
                  ]
                },
                {
                  "title": "Inverse Trig",
                  "subnodes": [
                    "∫1/√(a²-x²) → sin⁻¹",
                    "∫1/(a²+x²) → tan⁻¹"
                  ]
                },
                {
                  "title": "Substitution",
                  "subnodes": [
                    "Trig substitutions",
                    "Algebraic factors",
                    "f'(x)/f(x) → ln|f(x)|"
                  ]
                },
                {
                  "title": "By Parts",
                  "subnodes": [
                    "ILATE hierarchy",
                    "∫ u v dx formula",
                    "Repeated integrals"
                  ]
                },
                {
                  "title": "Definite",
                  "subnodes": [
                    "Limits evaluations",
                    "King's property",
                    "Even/Odd cancellations"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "algebra-matrices",
        "title": "Algebra & Matrices",
        "topics": [
          {
            "id": "syl-matrices",
            "title": "Matrices and Determinants",
            "notes": "\n              <h3>1. Matrix Classifications</h3>\n              <ul>\n                <li>**Symmetric Matrix**: Aᵀ = A. Diagonal elements can be anything.</li>\n                <li>**Skew-Symmetric Matrix**: Aᵀ = -A. Diagonal elements must be **zero**. (aᵢᵢ = -aᵢᵢ ⇒ 2aᵢᵢ = 0 ⇒ aᵢᵢ = 0).</li>\n                <li>**Orthogonal Matrix**: A · Aᵀ = I. Also, det(A) = ±1.</li>\n                <li>**Idempotent Matrix**: A² = A.</li>\n                <li>**Involutory Matrix**: A² = I.</li>\n                <li>**Nilpotent Matrix**: Aᵏ = O (where k is the index of nilpotency).</li>\n              </ul>\n              \n              <h3>2. Determinant Laws</h3>\n              <ul>\n                <li>det(Aᵀ) = det(A)</li>\n                <li>det(AB) = det(A) · det(B)</li>\n                <li>det(kA) = kⁿ det(A) (for a matrix of order n × n).</li>\n                <li>det(A⁻¹) = 1 / det(A)</li>\n                <li>If any two rows/columns are interchanged, the sign of the determinant changes.</li>\n                <li>If all elements of a row/column are zero, the determinant is **zero**.</li>\n              </ul>\n              \n              <h3>3. Adjoint & Inverse Relations</h3>\n              <ul>\n                <li>A · adj(A) = adj(A) · A = |A| · I</li>\n                <li>**|adj A| = |A|ⁿ⁻¹** (order n)</li>\n                <li>**|adj(adj A)| = |A|^( (n-1)² )**</li>\n                <li>adj(AB) = adj(B) · adj(A) (Reversal law)</li>\n                <li>A⁻¹ = adj(A) / |A| (only if |A| ≠ 0; non-singular matrix).</li>\n                <li>(Aᵀ)⁻¹ = (A⁻¹)ᵀ</li>\n              </ul>\n            ",
            "formulas": "|kA| = kⁿ|A|\n|adj A| = |A|ⁿ⁻¹\n|adj(adj A)| = |A|^((n-1)²)\nA⁻¹ = adj(A)/|A|\n(AB)ᵀ = BᵀAᵀ\n(AB)⁻¹ = B⁻¹A⁻¹",
            "mindmap": {
              "root": "Matrices & Det",
              "branches": [
                {
                  "title": "Matrix Types",
                  "subnodes": [
                    "Symmetric: Aᵀ = A",
                    "Skew-Symm: Aᵀ = -A",
                    "Orthogonal: A·Aᵀ = I"
                  ]
                },
                {
                  "title": "Determinants",
                  "subnodes": [
                    "|kA| = kⁿ|A| rule",
                    "|AB| = |A||B|",
                    "Zero determinant conditions"
                  ]
                },
                {
                  "title": "Adjoints",
                  "subnodes": [
                    "|adj A| = |A|ⁿ⁻¹",
                    "|adj(adj A)| = |A|^((n-1)²)",
                    "Reversal: adj(AB)=adj(B)adj(A)"
                  ]
                },
                {
                  "title": "Inverses",
                  "subnodes": [
                    "A⁻¹ = adj(A)/|A|",
                    "|A| ≠ 0 condition",
                    "(AB)⁻¹ = B⁻¹A⁻¹"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "probability-stats",
        "title": "Probability & Statistics",
        "topics": [
          {
            "id": "syl-probability",
            "title": "Probability Theory & Bayes Theorem",
            "notes": "\n              <h3>1. Basic Laws of Probability</h3>\n              <ul>\n                <li>Addition Rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</li>\n                <li>If events are mutually exclusive: P(A ∩ B) = 0 ⇒ P(A ∪ B) = P(A) + P(B)</li>\n                <li>Conditional Probability: P(A|B) = P(A ∩ B) / P(B) (where P(B) > 0)</li>\n                <li>Independent Events: P(A ∩ B) = P(A) · P(B) ⇒ P(A|B) = P(A)</li>\n              </ul>\n              \n              <h3>2. Bayes' Theorem</h3>\n              <p>Used to calculate posterior probability when partition events E₁, E₂...Eₙ are given:</p>\n              <ul>\n                <li>**P(Eᵢ|A) = [ P(Eᵢ) · P(A|Eᵢ) ] / [ Σ[j=1 to n] P(Eⱼ) · P(A|Eⱼ) ]**</li>\n              </ul>\n              \n              <h3>3. Statistics & Measures of Central Tendency</h3>\n              <ul>\n                <li>**Mean (x̄)**: Average value. x̄ = (Σ xᵢ)/n.</li>\n                <li>**Median**: Middle value. If n is odd: ((n+1)/2)th term. If n is even: Mean of (n/2)th and (n/2 + 1)th terms.</li>\n                <li>**Mode**: Element with highest frequency.</li>\n                <li>**Empirical Relation**: **Mode = 3 Median - 2 Mean**</li>\n              </ul>\n              \n              <h3>4. Measures of Dispersion</h3>\n              <ul>\n                <li>**Variance (σ²)**: σ² = Σ(xᵢ - x̄)² / n = (Σ xᵢ² / n) - (x̄)²</li>\n                <li>**Standard Deviation (σ)**: σ = √Variance</li>\n                <li>**Coefficient of Variation (CV)**: CV = (σ / x̄) * 100 (measures relative consistency).</li>\n              </ul>\n            ",
            "formulas": "P(A|B) = P(A ∩ B) / P(B)\nMode = 3Median - 2Mean\nVariance(σ²) = (Σx²/n) - (x̄)²\nSD(σ) = √Variance\nCV = (σ/x̄)·100",
            "mindmap": {
              "root": "Probability & Stats",
              "branches": [
                {
                  "title": "Basic Prob",
                  "subnodes": [
                    "P(A∪B) addition rule",
                    "Conditional P(A|B)",
                    "Independent events rule"
                  ]
                },
                {
                  "title": "Bayes Theorem",
                  "subnodes": [
                    "Posterior probability",
                    "Partition events Eᵢ",
                    "P(Eᵢ|A) division form"
                  ]
                },
                {
                  "title": "Central Tendency",
                  "subnodes": [
                    "Arithmetic Mean",
                    "Median odd/even cases",
                    "Mode = 3Med - 2Mean"
                  ]
                },
                {
                  "title": "Dispersion",
                  "subnodes": [
                    "Variance (σ²)",
                    "Standard Deviation (σ)",
                    "Coeff of Variation (CV)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "geometry",
        "title": "Geometry",
        "topics": [
          {
            "id": "lines-angles-triangles",
            "title": "Lines, Angles & Triangles",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Triangle Properties\nAngle sum = 180° | Exterior angle = sum of remote interior angles\nPythagoras: a² + b² = c² (right triangle)\nArea = ½ × base × height = √[s(s-a)(s-b)(s-c)] [Heron's]\nSine Rule: a/sinA = b/sinB = c/sinC = 2R\nCosine Rule: a² = b² + c² - 2bc·cosA\n# Congruence (CPCT)\nSSS, SAS, ASA, AAS, RHS\n# Similarity\nAA, SAS, SSS similarity → ratio of areas = (ratio of sides)²\n# Parallel Lines\nAlternate angles equal | Co-interior angles supplementary\nBasic Proportionality (Thales): DE∥BC → AD/DB = AE/EC",
            "mindmap": {
              "root": "Lines, Angles & Triangles",
              "branches": [
                {
                  "title": "Angles",
                  "subnodes": [
                    "Supplementary = 180°",
                    "Complementary = 90°",
                    "Vertically opposite = equal"
                  ]
                },
                {
                  "title": "Parallel Lines",
                  "subnodes": [
                    "Alternate angles equal",
                    "Co-interior = 180°",
                    "Corresponding equal"
                  ]
                },
                {
                  "title": "Triangles",
                  "subnodes": [
                    "Angle sum = 180°",
                    "Pythagoras: a²+b²=c²",
                    "Exterior angle theorem"
                  ]
                },
                {
                  "title": "Congruence",
                  "subnodes": [
                    "SSS, SAS, ASA, AAS",
                    "RHS for right triangles",
                    "CPCT after congruence"
                  ]
                },
                {
                  "title": "Triangles",
                  "subnodes": [
                    "Congruency",
                    "Similarity",
                    "Centres"
                  ]
                }
              ]
            }
          },
          {
            "id": "circles-polygons",
            "title": "Circles & Polygons",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Circle Theorems\nAngle at centre = 2 × angle at circumference (same arc)\nAngles in same segment are equal\nAngle in semicircle = 90° (Thales)\nOpposite angles of cyclic quadrilateral = 180°\nTangent ⊥ radius at point of contact\nTwo tangents from external point are equal in length\n# Arc & Sector\nArc length = (θ/360) × 2πr\nSector area = (θ/360) × πr²\n# Polygons\nSum of interior angles of n-gon = (n-2) × 180°\nEach interior angle (regular) = (n-2)×180°/n\nEach exterior angle (regular) = 360°/n\nSum of exterior angles = always 360°",
            "mindmap": {
              "root": "Circles & Polygons",
              "branches": [
                {
                  "title": "Circle Theorems",
                  "subnodes": [
                    "Angle at centre = 2× circumference",
                    "Same segment angles equal",
                    "Semicircle = 90°"
                  ]
                },
                {
                  "title": "Tangent Properties",
                  "subnodes": [
                    "Tangent ⊥ radius",
                    "Equal tangents from ext. point",
                    "Alternate segment theorem"
                  ]
                },
                {
                  "title": "Arc & Sector",
                  "subnodes": [
                    "Arc = θ/360 × 2πr",
                    "Sector area = θ/360 × πr²",
                    "Segment = Sector - Triangle"
                  ]
                },
                {
                  "title": "Polygons",
                  "subnodes": [
                    "Int. angle sum = (n-2)×180°",
                    "Ext. angle sum = 360°",
                    "Regular polygon formulae"
                  ]
                },
                {
                  "title": "Polygons",
                  "subnodes": [
                    "Interior angles",
                    "Diagonals"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "mensuration",
        "title": "Mensuration",
        "topics": [
          {
            "id": "area-perimeter",
            "title": "2D Figures: Area & Perimeter",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# 2D Shapes: Area\nTriangle = ½bh | Equilateral = (√3/4)a²\nRectangle = l×b | Square = a²\nCircle = πr² | Semicircle = πr²/2\nTrapezoid = ½(a+b)h | Parallelogram = base × height\nRhombus = ½d₁d₂\n# 2D Shapes: Perimeter\nCircle (circumference) = 2πr\nRectangle = 2(l+b) | Square = 4a\n# 3D Shapes: Volume\nCube = a³ | Cuboid = l×b×h\nSphere = 4/3·πr³ | Hemisphere = 2/3·πr³\nCylinder = πr²h | Cone = 1/3·πr²h\n# 3D Shapes: Surface Area (Total)\nCube = 6a² | Cuboid = 2(lb+bh+hl)\nSphere = 4πr² | Cylinder = 2πr(r+h)\nCone = πr(r+l) where l = slant height = √(r²+h²)",
            "mindmap": {
              "root": "Area & Perimeter",
              "branches": [
                {
                  "title": "Quadrilaterals",
                  "subnodes": [
                    "Rectangle: A=l×b, P=2(l+b)",
                    "Square: A=a², P=4a",
                    "Parallelogram: A=b×h",
                    "Rhombus: A=½d₁d₂"
                  ]
                },
                {
                  "title": "Triangles",
                  "subnodes": [
                    "A=½×b×h",
                    "Equilateral: A=√3/4×a²",
                    "Heron: A=√[s(s-a)(s-b)(s-c)]"
                  ]
                },
                {
                  "title": "Circles",
                  "subnodes": [
                    "Area = πr²",
                    "Circumference = 2πr",
                    "Semicircle area = πr²/2",
                    "Sector area = θ/360×πr²"
                  ]
                },
                {
                  "title": "Trapezoid",
                  "subnodes": [
                    "Area = ½(a+b)×h",
                    "Midsegment = ½(sum of parallel sides)"
                  ]
                },
                {
                  "title": "Quadrilaterals",
                  "subnodes": [
                    "Rhombus",
                    "Trapezium",
                    "Parallelogram"
                  ]
                },
                {
                  "title": "Circles",
                  "subnodes": [
                    "Area",
                    "Perimeter",
                    "Sector"
                  ]
                }
              ]
            }
          },
          {
            "id": "surface-area-volume",
            "title": "3D Solids: Surface Area & Volume",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Volume Formulas\nCube = a³ | Cuboid = l × b × h\nSphere = 4/3 × π × r³ | Hemisphere = 2/3 × π × r³\nRight Circular Cylinder = π × r² × h\nRight Circular Cone = 1/3 × π × r² × h\nFrustum of Cone = 1/3 × π × h × (R² + Rr + r²)\n# Total Surface Area\nCube = 6a² | Cuboid = 2(lb + bh + hl)\nSphere = 4πr² | Hemisphere (total) = 3πr²\nCylinder = 2πr(r + h) | Cone = πr(r + l) [l = slant = √(r²+h²)]\nFrustum = π[R² + r² + l(R+r)] where l = √[h²+(R-r)²]\n# Lateral/Curved Surface Area\nCylinder = 2πrh | Cone = πrl\nSphere (hemisphere, curved) = 2πr²",
            "mindmap": {
              "root": "Surface Area & Volume",
              "branches": [
                {
                  "title": "Cube & Cuboid",
                  "subnodes": [
                    "Cube V=a³, TSA=6a²",
                    "Cuboid V=lbh, TSA=2(lb+bh+hl)",
                    "Lateral SA = Perimeter×h"
                  ]
                },
                {
                  "title": "Sphere & Hemisphere",
                  "subnodes": [
                    "Sphere V=4/3πr³, SA=4πr²",
                    "Hemisphere V=2/3πr³, TSA=3πr²"
                  ]
                },
                {
                  "title": "Cylinder & Cone",
                  "subnodes": [
                    "Cylinder V=πr²h, TSA=2πr(r+h)",
                    "Cone V=⅓πr²h, TSA=πr(r+l)",
                    "l=slant=√(r²+h²)"
                  ]
                },
                {
                  "title": "Frustum",
                  "subnodes": [
                    "V=⅓πh(R²+Rr+r²)",
                    "l=√[h²+(R-r)²]",
                    "TSA=π[R²+r²+l(R+r)]"
                  ]
                },
                {
                  "title": "Spherical",
                  "subnodes": [
                    "Sphere",
                    "Hemisphere"
                  ]
                },
                {
                  "title": "Advanced",
                  "subnodes": [
                    "Prism",
                    "Pyramid"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "arithmetic",
        "title": "Arithmetic",
        "topics": [
          {
            "id": "percentages-profit-loss",
            "title": "Percentages, Profit & Loss",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Percentages\nx% of y = xy/100\n% increase = (Increase/Original) × 100\n% decrease = (Decrease/Original) × 100\n# Profit & Loss\nProfit = SP - CP | Loss = CP - SP\nProfit% = (Profit/CP) × 100 | Loss% = (Loss/CP) × 100\nSP = CP × (100+P%)/100 | CP = SP × 100/(100+P%)\nDiscount = MP - SP | Discount% = (Discount/MP) × 100\n# Simple & Compound Interest\nSI = PRT/100 | A = P + SI\nCI: A = P(1 + R/100)ⁿ | CI = A - P\nEffective rate for half-yearly: R/2, n×2\n# Ratio & Proportion\na:b = c:d → ad = bc (cross-multiply)\nFourth proportional: a:b = c:x → x = bc/a\nMean proportional of a and b = √(ab)",
            "mindmap": {
              "root": "Percentages & Profit/Loss",
              "branches": [
                {
                  "title": "Percentages",
                  "subnodes": [
                    "x% of y = xy/100",
                    "% increase = Increase/Original×100",
                    "Successive %: A then B = A+B+AB/100"
                  ]
                },
                {
                  "title": "Profit & Loss",
                  "subnodes": [
                    "P% = Profit/CP×100",
                    "SP = CP×(100+P%)/100",
                    "Discount = MP - SP"
                  ]
                },
                {
                  "title": "Interest",
                  "subnodes": [
                    "SI = PRT/100",
                    "CI = P(1+R/100)^n - P",
                    "Half-yearly: R/2, double n"
                  ]
                },
                {
                  "title": "Shortcuts",
                  "subnodes": [
                    "False weight trick",
                    "Dishonest dealer",
                    "2 items at same SP"
                  ]
                },
                {
                  "title": "Profit & Loss",
                  "subnodes": [
                    "Cost Price",
                    "Selling Price",
                    "Discount"
                  ]
                }
              ]
            }
          },
          {
            "id": "ratios-averages",
            "title": "Ratios, Proportions & Averages",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Ratios & Proportions\nIf a:b = c:d → ad = bc\nFourth proportional: a:b = c:x → x = bc/a\nMean proportional: a:x = x:b → x = √(ab)\nCompound ratio: (a:b) × (c:d) = ac:bd\n# Averages\nAverage = Sum of observations / Number of observations\nIf average of n numbers = A, and one number x is added: new avg = (nA + x)/(n+1)\nWeighted average = Σ(wᵢxᵢ) / Σwᵢ\n# Mixture & Alligation\nAlligation rule: cheaper:dearer = (dearer price - mean) : (mean - cheaper price)\n# Averages Shortcut\nIf avg of first n natural numbers = (n+1)/2\nSum of first n natural numbers = n(n+1)/2\nSum of squares = n(n+1)(2n+1)/6\nSum of cubes = [n(n+1)/2]²",
            "mindmap": {
              "root": "Ratios & Averages",
              "branches": [
                {
                  "title": "Ratios",
                  "subnodes": [
                    "a:b::c:d → ad=bc",
                    "Fourth proportional",
                    "Compound ratio: ac:bd",
                    "Duplicate ratio = a²:b²"
                  ]
                },
                {
                  "title": "Averages",
                  "subnodes": [
                    "Sum/Count",
                    "Combined avg formula",
                    "Effect of adding value",
                    "Weighted average"
                  ]
                },
                {
                  "title": "Alligation",
                  "subnodes": [
                    "Cheaper:Dearer ratio",
                    "Rule: (dearer-mean):(mean-cheaper)",
                    "Mix milk/water type"
                  ]
                },
                {
                  "title": "Sequences",
                  "subnodes": [
                    "Sum 1..n = n(n+1)/2",
                    "Sum squares: n(n+1)(2n+1)/6",
                    "Sum cubes: [n(n+1)/2]²"
                  ]
                },
                {
                  "title": "Averages",
                  "subnodes": [
                    "Weighted average",
                    "AP Averages"
                  ]
                }
              ]
            }
          },
          {
            "id": "time-distance",
            "title": "Time, Speed, Distance & Work",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Speed, Time & Distance\nSpeed = Distance / Time | Distance = Speed × Time | Time = Distance / Speed\nAverage Speed = Total Distance / Total Time (NOT average of speeds)\nIf two equal distances at s₁ and s₂: Average Speed = 2s₁s₂/(s₁+s₂)\nConversion: km/hr to m/s → multiply by 5/18 | m/s to km/hr → multiply by 18/5\n# Relative Speed\nSame direction: Relative speed = |s₁ - s₂|\nOpposite direction: Relative speed = s₁ + s₂\n# Train Problems\nTime to cross a pole/person = Length of train / Speed of train\nTime to cross a platform = (Length of train + Length of platform) / Speed\n# Boats & Streams\nDownstream speed = Boat speed + Stream speed\nUpstream speed = Boat speed - Stream speed\nSpeed of Boat in still water = ½(Downstream + Upstream)\n# Work\nWork = Rate × Time | Combined rate = 1/t₁ + 1/t₂\nIf A takes 'a' days and B takes 'b' days: Together = ab/(a+b) days",
            "mindmap": {
              "root": "Time, Speed & Distance",
              "branches": [
                {
                  "title": "Basic",
                  "subnodes": [
                    "S = D/T",
                    "km/hr × 5/18 = m/s",
                    "Avg speed = 2s₁s₂/(s₁+s₂)"
                  ]
                },
                {
                  "title": "Relative Speed",
                  "subnodes": [
                    "Same dir: |s₁-s₂|",
                    "Opp dir: s₁+s₂",
                    "Train problems"
                  ]
                },
                {
                  "title": "Boats & Streams",
                  "subnodes": [
                    "Downstream = B+S",
                    "Upstream = B-S",
                    "Still water = ½(D+U)"
                  ]
                },
                {
                  "title": "Work & Time",
                  "subnodes": [
                    "Together = ab/(a+b)",
                    "Efficiency ∝ 1/time",
                    "Pipes and cisterns"
                  ]
                },
                {
                  "title": "Time & Work",
                  "subnodes": [
                    "Efficiency",
                    "Pipes & Cisterns"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "quantitative-aptitude",
        "title": "Numerical Aptitude",
        "topics": [
          {
            "id": "syl-numerical-speed",
            "title": "Time, Speed & Distance Formulas",
            "notes": "\n              <h3>1. General Speed, Time, and Distance Relationship</h3>\n              <ul>\n                <li>**Speed = Distance / Time** ⇒ Time = Distance / Speed ; Distance = Speed × Time</li>\n                <li>Unit Conversions:\n                  <ul>\n                    <li>To convert from km/h to m/s: multiply by **5/18**. (e.g., 90 km/h = 90 × 5/18 = 25 m/s).</li>\n                    <li>To convert from m/s to km/h: multiply by **18/5**.</li>\n                  </ul>\n                </li>\n                <li>**Average Speed**:\n                  <ul>\n                    <li>Case A: A body covers two equal distances at speeds x km/h and y km/h. Average Speed = **2xy / (x + y)**.</li>\n                    <li>Case B: A body covers three equal distances at speeds x, y, and z km/h. Average Speed = **3xyz / (xy + yz + zx)**.</li>\n                    <li>General Case: **Total Distance Covered / Total Time Taken**.</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>2. Relative Speed</h3>\n              <p>Speed of one body with respect to another moving body:</p>\n              <ul>\n                <li>If two bodies move in the **same direction** with speeds u and v (where u > v), Relative Speed = **u - v**.</li>\n                <li>If two bodies move in **opposite directions**, Relative Speed = **u + v**.</li>\n              </ul>\n              \n              <h3>3. Trains and Platforms Problems</h3>\n              <ul>\n                <li>**Train crossing a pole/man**: The distance covered is equal to the length of the train itself. Time = Length of Train / Speed.</li>\n                <li>**Train crossing a bridge/platform/tunnel**: The distance covered is equal to the sum of lengths of train and platform. Time = (Length of Train + Length of Platform) / Speed.</li>\n                <li>**Two trains crossing each other**: The distance covered is always the sum of both lengths (L₁ + L₂). The speed used is the relative speed.</li>\n              </ul>\n            ",
            "formulas": "Speed = D/T\n1 km/h = 5/18 m/s\nAverage Speed = 2xy/(x+y)\nSame direction: Speed₁ - Speed₂\nOpposite direction: Speed₁ + Speed₂",
            "mindmap": {
              "root": "Speed & Distance",
              "branches": [
                {
                  "title": "Conversions",
                  "subnodes": [
                    "Speed = Distance / Time",
                    "km/h to m/s (× 5/18)",
                    "m/s to km/h (× 18/5)"
                  ]
                },
                {
                  "title": "Averages",
                  "subnodes": [
                    "Equal dist: 2xy/(x+y)",
                    "General: Total Dist/Total Time"
                  ]
                },
                {
                  "title": "Relative Speed",
                  "subnodes": [
                    "Same dir: u - v",
                    "Opposite dir: u + v"
                  ]
                },
                {
                  "title": "Train Problems",
                  "subnodes": [
                    "Crossing pole: L_train",
                    "Crossing bridge: L_train + L_platform"
                  ]
                }
              ]
            }
          },
          {
            "id": "syl-numerical-ratios",
            "title": "Ratios, Proportions & Percentages",
            "notes": "\n              <h3>1. Ratios and Proportions</h3>\n              <ul>\n                <li>Ratio: A comparison of two quantities: a/b or a : b.</li>\n                <li>Proportion: Equality of two ratios: a : b :: c : d ⇒ **a / b = c / d**.\n                  <ul>\n                    <li>Product of extremes = Product of means (ad = bc).</li>\n                  </ul>\n                </li>\n                <li>**Mean Proportional**: Between a and b is **x = √(ab)**.</li>\n                <li>**Third Proportional**: To a and b is **x = b² / a**.</li>\n                <li>**Fourth Proportional**: To a, b, c is **x = bc / a**.</li>\n              </ul>\n              \n              <h3>2. Percentages</h3>\n              <ul>\n                <li>Percentage to Fraction: Divide by 100 (e.g., 20% = 20/100 = 1/5).</li>\n                <li>Fraction to Percentage: Multiply by 100 (e.g., 3/4 = 3/4 × 100 = 75%).</li>\n                <li>Percentage Increase/Decrease = [ (New Value - Original) / Original ] × 100</li>\n              </ul>\n              \n              <h3>3. Profit, Loss, and Discount</h3>\n              <ul>\n                <li>Gain = Selling Price (SP) - Cost Price (CP) (if SP > CP)</li>\n                <li>Loss = Cost Price (CP) - Selling Price (SP) (if CP > SP)</li>\n                <li>**Gain % = (Gain / CP) × 100** (Profit and Loss are always calculated on CP unless stated otherwise).</li>\n                <li>**Loss % = (Loss / CP) × 100**</li>\n                <li>Assent Formulas:\n                  <ul>\n                    <li>SP = CP × (100 + Gain%) / 100</li>\n                    <li>SP = CP × (100 - Loss%) / 100</li>\n                  </ul>\n                </li>\n                <li>**Discount**: Calculated on Marked Price (MP). SP = MP - Discount.</li>\n                <li>Discount % = (Discount / MP) × 100</li>\n              </ul>\n            ",
            "formulas": "Gain% = (Gain/CP) * 100\nLoss% = (Loss/CP) * 100\nDiscount% = (Discount/MP) * 100\nMean Proportional = √(ab)\nThird Proportional = b²/a",
            "mindmap": {
              "root": "Ratios & Percent",
              "branches": [
                {
                  "title": "Proportions",
                  "subnodes": [
                    "Extremes = Means product",
                    "Mean: x = √(ab)",
                    "Third: x = b²/a"
                  ]
                },
                {
                  "title": "Percentages",
                  "subnodes": [
                    "Fraction to % (x100)",
                    "Change % = delta/original"
                  ]
                },
                {
                  "title": "Profit & Loss",
                  "subnodes": [
                    "Gain = SP - CP",
                    "Loss = CP - SP",
                    "Percentage based on CP"
                  ]
                },
                {
                  "title": "Discounts",
                  "subnodes": [
                    "Discount = MP - SP",
                    "Discount % based on MP"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "english": {
    "title": "English (NDA/CDS/AFCAT)",
    "chapters": [
      {
        "id": "grammar-rules",
        "title": "Grammar & Usage",
        "topics": [
          {
            "id": "parts-of-speech",
            "title": "Parts of Speech",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Nouns, Pronouns, Verbs, Adverbs, Adjectives, Prepositions, Conjunctions, Interjections",
            "mindmap": {
              "root": "Parts of Speech",
              "branches": [
                {
                  "title": "Nouns & Pronouns",
                  "subnodes": [
                    "Countable vs Uncountable",
                    "Relative Pronouns",
                    "Reflexive Pronouns"
                  ]
                },
                {
                  "title": "Verbs & Adverbs",
                  "subnodes": [
                    "Transitive/Intransitive",
                    "Modal Verbs",
                    "Adverb Position/Enough"
                  ]
                },
                {
                  "title": "Modifiers & Connectors",
                  "subnodes": [
                    "Adjective Order (OSASCOMP)",
                    "Preposition errors",
                    "Coordinating/Correlative Conjunctions"
                  ]
                }
              ]
            }
          },
          {
            "id": "tenses-complete",
            "title": "Tenses & Consistency",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "# Tense Structure Reference\nSimple Present: Subject + V₁(+s/es) | Negative: do/does not + V₁\nPresent Continuous: am/is/are + V₁+ing\nPresent Perfect: has/have + V₃ (past participle)\nPresent Perfect Continuous: has/have + been + V₁+ing + since/for\nSimple Past: Subject + V₂ | Negative: did not + V₁\nPast Continuous: was/were + V₁+ing\nPast Perfect: had + V₃ (before another past action)\nPast Perfect Continuous: had + been + V₁+ing\nSimple Future: will/shall + V₁\nFuture Continuous: will/shall + be + V₁+ing\nFuture Perfect: will + have + V₃\nFuture Perfect Continuous: will + have + been + V₁+ing\n# Key Signal Words\nPresent: always, often, usually, every day\nPast: yesterday, ago, last year, in 2020\nPerfect: already, just, yet, ever, never, since, for\nFuture: tomorrow, next week, soon, by 2025",
            "mindmap": {
              "root": "Tenses",
              "branches": [
                {
                  "title": "Present Tenses",
                  "subnodes": [
                    "Simple: V1+s/es",
                    "Continuous: is/am/are+V1+ing",
                    "Perfect: has/have+V3",
                    "Perf. Continuous: have+been+ing"
                  ]
                },
                {
                  "title": "Past Tenses",
                  "subnodes": [
                    "Simple: V2",
                    "Continuous: was/were+ing",
                    "Perfect: had+V3",
                    "Perf. Continuous: had+been+ing"
                  ]
                },
                {
                  "title": "Future Tenses",
                  "subnodes": [
                    "Simple: will+V1",
                    "Continuous: will+be+ing",
                    "Perfect: will+have+V3",
                    "Going to (planned)"
                  ]
                },
                {
                  "title": "Signal Words",
                  "subnodes": [
                    "Since/For → Perfect",
                    "Yesterday/Ago → Past",
                    "Tomorrow/Next → Future",
                    "Always/Often → Present"
                  ]
                },
                {
                  "title": "Conditionals",
                  "subnodes": [
                    "Type 1: If + V1, will + V1",
                    "Type 2: If + V2, would + V1",
                    "Type 3: If + had + V3, would have + V3"
                  ]
                },
                {
                  "title": "State Verbs",
                  "subnodes": [
                    "Stative verbs (know, love) cannot be continuous"
                  ]
                }
              ]
            }
          },
          {
            "id": "subject-verb-agreement",
            "title": "Subject-Verb Agreement",
            "notes": "Detailed notes expanded in app.js / notes_extra_english.js",
            "formulas": "Singular/plural agreement, Collective nouns, Indefinite pronouns, Either/neither, neither-nor",
            "mindmap": {
              "root": "S-V Agreement",
              "branches": [
                {
                  "title": "Conjunctions",
                  "subnodes": [
                    "and -> plural",
                    "either/or, neither/nor -> agrees with nearest",
                    "along with, as well as -> agrees with first"
                  ]
                },
                {
                  "title": "Indefinite Pronouns",
                  "subnodes": [
                    "each, everyone, body -> singular",
                    "both, many, few -> plural",
                    "some, all, most -> depends on noun"
                  ]
                },
                {
                  "title": "Special Cases",
                  "subnodes": [
                    "Collective nouns (jury, class)",
                    "Plural in form (news, physics -> singular)",
                    "Many a + singular noun"
                  ]
                }
              ]
            }
          },
          {
            "id": "sentence-structure",
            "title": "Sentence Structure & Parallelism",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Clauses, Phrases, Types of sentences, Parallelism",
            "mindmap": {
              "root": "Sentence Struct",
              "branches": [
                {
                  "title": "Clauses & Phrases",
                  "subnodes": [
                    "Independent vs Dependent",
                    "Noun/Adjective/Adverb Clauses",
                    "Participial & Gerund Phrases"
                  ]
                },
                {
                  "title": "Types",
                  "subnodes": [
                    "Simple (1 ind. clause)",
                    "Compound (2 ind. clauses joined by coordinator)",
                    "Complex (1 ind. + 1 dep. clause)"
                  ]
                },
                {
                  "title": "Parallelism",
                  "subnodes": [
                    "Same grammatical form in lists",
                    "Consistency in coordinate structures"
                  ]
                }
              ]
            }
          },
          {
            "id": "voice-conversion",
            "title": "Active & Passive Voice",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Active (S + V + O) ↔ Passive (O + helping verb + V3 + by S)",
            "mindmap": {
              "root": "Active & Passive",
              "branches": [
                {
                  "title": "Tense Changes",
                  "subnodes": [
                    "Simple -> be + V3",
                    "Continuous -> being + V3",
                    "Perfect -> been + V3"
                  ]
                },
                {
                  "title": "Special Cases",
                  "subnodes": [
                    "Imperatives (Let + object + be + V3)",
                    "Questions (Who -> By whom)",
                    "Modal verbs (+ be + V3)"
                  ]
                }
              ]
            }
          },
          {
            "id": "narration-speech",
            "title": "Direct & Indirect Speech",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Direct ↔ Indirect (Reporting verb, pronoun, tense, proximity words shifts)",
            "mindmap": {
              "root": "Narration",
              "branches": [
                {
                  "title": "Tense Shift",
                  "subnodes": [
                    "V1 -> V2",
                    "V2 -> had + V3",
                    "will/can -> would/could"
                  ]
                },
                {
                  "title": "Proximity Shifts",
                  "subnodes": [
                    "this/here/now -> that/there/then",
                    "today/tomorrow -> that day/next day",
                    "yesterday/ago -> previous day/before"
                  ]
                },
                {
                  "title": "Sentence Types",
                  "subnodes": [
                    "Interrogative (if/whether/wh-word)",
                    "Imperatives (to + V1)",
                    "Exclamatory (exclaimed with joy/sorrow)"
                  ]
                }
              ]
            }
          },
          {
            "id": "modifiers",
            "title": "Modifiers: Misplaced & Dangling",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Modifiers must be placed adjacent to the words they modify; dangling modifiers lack logical subjects",
            "mindmap": {
              "root": "Modifiers",
              "branches": [
                {
                  "title": "Misplaced",
                  "subnodes": [
                    "Too far from target word",
                    "Limits (only, almost, nearly) placement"
                  ]
                },
                {
                  "title": "Dangling",
                  "subnodes": [
                    "Implied subject does not match main subject",
                    "Requires adding clear subject"
                  ]
                }
              ]
            }
          },
          {
            "id": "punctuation-basics",
            "title": "Punctuation Basics",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Comma, Apostrophe, Colon, Semicolon usage and rules",
            "mindmap": {
              "root": "Punctuation",
              "branches": [
                {
                  "title": "Comma & Semicolon",
                  "subnodes": [
                    "Comma: list separator, introductory phrases",
                    "Semicolon: joins independent clauses"
                  ]
                },
                {
                  "title": "Apostrophe",
                  "subnodes": [
                    "Possession (boy's vs boys')",
                    "Contractions (it's vs its)"
                  ]
                },
                {
                  "title": "Colon",
                  "subnodes": [
                    "Introduces lists, explanations, or quotes"
                  ]
                }
              ]
            }
          },
          {
            "id": "transformation-sentences",
            "title": "Transformation of Sentences",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Simple ↔ Compound ↔ Complex, Assertive ↔ Interrogative ↔ Exclamatory, Degree changes",
            "mindmap": {
              "root": "Transformation",
              "branches": [
                {
                  "title": "Clause Types",
                  "subnodes": [
                    "Simple to Compound (FANBOYS)",
                    "Simple to Complex (Subordinators)",
                    "Compound to Complex"
                  ]
                },
                {
                  "title": "Mood & Style",
                  "subnodes": [
                    "Assertive to Interrogative",
                    "Assertive to Exclamatory"
                  ]
                },
                {
                  "title": "Degrees",
                  "subnodes": [
                    "Positive: as...as",
                    "Comparative: -er than",
                    "Superlative: the -est"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "vocabulary",
        "title": "Vocabulary & Comprehension",
        "topics": [
          {
            "id": "synonyms-antonyms-detailed",
            "title": "High-Frequency Synonyms/Antonyms",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Root word suffixes/prefixes (mal, bene, mis, anti, omni, phil, -cide, -phobia)",
            "mindmap": {
              "root": "Synonyms & Antonyms",
              "branches": [
                {
                  "title": "Root Words",
                  "subnodes": [
                    "Bene (good) vs Mal (bad)",
                    "Mis/Miso (hate) vs Phil (love)",
                    "-cide (killing) & -phobia (fear)"
                  ]
                },
                {
                  "title": "High-Yield Words",
                  "subnodes": [
                    "Audacious (bold)",
                    "Clandestine (secret)",
                    "Ephemeral (short-lived)",
                    "Mitigate (lessen)"
                  ]
                }
              ]
            }
          },
          {
            "id": "one-word-substitution",
            "title": "One Word Substitutions",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "Root words & Categories (-cracy, -archy, -cide, -phobia, -phile, personalities)",
            "mindmap": {
              "root": "One Word",
              "branches": [
                {
                  "title": "Governments",
                  "subnodes": [
                    "Anarchy",
                    "Oligarchy",
                    "Democracy",
                    "Monarchy"
                  ]
                },
                {
                  "title": "Personalities",
                  "subnodes": [
                    "Altruist",
                    "Egotist",
                    "Ascetic",
                    "Incorrigible",
                    "Optimist"
                  ]
                }
              ]
            }
          },
          {
            "id": "idioms-phrases",
            "title": "Idioms & Phrases",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "Theme-based idioms (animal, color, action-related)",
            "mindmap": {
              "root": "Idioms",
              "branches": [
                {
                  "title": "Theme-based",
                  "subnodes": [
                    "Animal-related (Dark horse, bull in china shop)",
                    "Color-related (Red tape, blue blood)",
                    "Action-related (Bite the bullet, spill the beans)"
                  ]
                },
                {
                  "title": "Historical Origins",
                  "subnodes": [
                    "Achilles' heel (weak point)",
                    "Baker's dozen (thirteen)"
                  ]
                }
              ]
            }
          },
          {
            "id": "phrasal-verbs",
            "title": "Phrasal Verbs",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "High-frequency phrasal verbs (Break down/out, call off, carry out, come across, look into, put off)",
            "mindmap": {
              "root": "Phrasal Verbs",
              "branches": [
                {
                  "title": "Break & Call",
                  "subnodes": [
                    "Break down (collapse)",
                    "Break out (start war)",
                    "Call off (cancel)"
                  ]
                },
                {
                  "title": "Look & Put",
                  "subnodes": [
                    "Look into (investigate)",
                    "Put off (postpone)",
                    "Put up with (tolerate)"
                  ]
                },
                {
                  "title": "Others",
                  "subnodes": [
                    "Come across (find by chance)",
                    "Turn down (reject)",
                    "Run out of (exhaust)"
                  ]
                }
              ]
            }
          },
          {
            "id": "reading-comprehension",
            "title": "Reading Comprehension",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Main idea, detail, inference, tone, title finding strategies",
            "mindmap": {
              "root": "Reading Comp",
              "branches": [
                {
                  "title": "Question Types",
                  "subnodes": [
                    "Main idea/theme",
                    "Detail/Factual",
                    "Inference",
                    "Author's tone/attitude"
                  ]
                },
                {
                  "title": "Tone Categories",
                  "subnodes": [
                    "Positive: Appreciative, Laudatory",
                    "Negative: Critical, Sarcastic",
                    "Neutral: Objective, Analytical"
                  ]
                },
                {
                  "title": "Reading Hacks",
                  "subnodes": [
                    "Skim first (gist)",
                    "Read questions first",
                    "Eliminate extreme options"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "exam-patterns",
        "title": "UPSC Exam Practice Patterns",
        "topics": [
          {
            "id": "error-detection",
            "title": "Spotting Errors",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Error areas: Tense, article, preposition, subject-verb, pronoun, modifiers, conjunction, redundancy, parallelism",
            "mindmap": {
              "root": "Spotting Errors",
              "branches": [
                {
                  "title": "Grammar Core",
                  "subnodes": [
                    "Subject-Verb agreement (number)",
                    "Tense consistency",
                    "Article sounds"
                  ]
                },
                {
                  "title": "Connectors & Modifiers",
                  "subnodes": [
                    "Conjunction pairs",
                    "Preposition errors",
                    "Modifier misplacement"
                  ]
                },
                {
                  "title": "Stylistic Errors",
                  "subnodes": [
                    "Redundancy (return back)",
                    "Parallelism (matching verbs)"
                  ]
                }
              ]
            }
          },
          {
            "id": "sentence-improvement",
            "title": "Sentence Improvement",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Improvement areas: Grammar, word choice, clarity, parallel structure, idiomatic usage, syntax correction",
            "mindmap": {
              "root": "Sentence Improvement",
              "branches": [
                {
                  "title": "Grammar & Tense",
                  "subnodes": [
                    "Wrong tense (yesterday with has V3)",
                    "Wrong verb forms (subjunctive suggestions)"
                  ]
                },
                {
                  "title": "Clarity & Idiom",
                  "subnodes": [
                    "Word choice (economic vs economical)",
                    "Reflexive idioms (avail oneself of)"
                  ]
                },
                {
                  "title": "Syntax & Structure",
                  "subnodes": [
                    "Parallel structure in lists",
                    "Inversion after negative starters"
                  ]
                }
              ]
            }
          },
          {
            "id": "ordering-rearrangement",
            "title": "Ordering of Words & Sentences",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Strategies for jumbled words (S-V-O) and jumbled sentences (opening sentence, mandatory pairs, closing sentence, transitions)",
            "mindmap": {
              "root": "Ordering",
              "branches": [
                {
                  "title": "Ordering Words",
                  "subnodes": [
                    "Identify Subject-Verb-Object",
                    "Look for capital letters & full stops",
                    "Prepositional & relative phrases"
                  ]
                },
                {
                  "title": "Ordering Sentences",
                  "subnodes": [
                    "Find opening sentence (introduces topic)",
                    "Mandatory pairs (pronoun reference, article order)",
                    "Transitions (However, Therefore)"
                  ]
                }
              ]
            }
          },
          {
            "id": "fill-blanks-cloze",
            "title": "Fill in the Blanks & Cloze Test",
            "notes": "Detailed notes expanded in notes_extra_english.js",
            "formulas": "Asked from: Articles, prepositions, verb forms, tenses, vocabulary, idiomatic usage, contextual logic",
            "mindmap": {
              "root": "Cloze & Blanks",
              "branches": [
                {
                  "title": "Cloze Strategy",
                  "subnodes": [
                    "Read entire passage first (tone)",
                    "Identify part of speech needed",
                    "Check grammatical agreement"
                  ]
                },
                {
                  "title": "Collocations",
                  "subnodes": [
                    "Make a decision / do homework",
                    "Take action / pay attention",
                    "Heavy rain / strong wind"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "polity": {
    "title": "Indian Polity (CDS/NDA)",
    "chapters": [
      {
        "id": "constitution-basics",
        "title": "Constitutional Framework",
        "topics": [
          {
            "id": "preamble",
            "title": "Preamble & Sources",
            "notes": "\n              <h3>1. The Preamble Keywords</h3>\n              <p>The Preamble represents the summary or essence of the Constitution. Crucial aspects:</p>\n              <ul>\n                <li>**Keywords Order**: Sovereign, Socialist, Secular, Democratic, Republic.</li>\n                <li>**Amendment**: Amended only once by the **42nd Amendment Act (1976)**, which added three new words: **Socialist, Secular, and Integrity**.</li>\n                <li>**Justiciability**: It is non-justiciable (its provisions cannot be enforced in a court of law).</li>\n                <li>**Kesavananda Bharati Case (1973)**: Supreme Court declared that the Preamble is a part of the Constitution and can be amended under Article 368, but its 'basic structure' cannot be destroyed.</li>\n              </ul>\n              \n              <h3>2. Borrowed Sources of the Constitution</h3>\n              <ul>\n                <li>**Govt of India Act 1935**: Federal structure, Office of Governor, Public Service Commissions, administrative details.</li>\n                <li>**United Kingdom**: Parliamentary system, Rule of Law, Legislative procedure, Single Citizenship, Cabinet system, Prerogative Writs, Bicameralism.</li>\n                <li>**United States**: Fundamental Rights, Independence of Judiciary, Judicial Review, Impeachment of President, removal of Supreme Court & High Court judges, post of Vice-President.</li>\n                <li>**Ireland**: Directive Principles of State Policy (DPSP), nomination of members to Rajya Sabha, method of election of President.</li>\n                <li>**Canada**: Federation with a strong Centre, vesting of residuary powers in the Centre, appointment of state governors by Centre, advisory jurisdiction of Supreme Court.</li>\n                <li>**Australia**: Concurrent List, freedom of trade and commerce, joint sitting of the two Houses of Parliament.</li>\n                <li>**Weimar Republic (Germany)**: Suspension of Fundamental Rights during Emergency.</li>\n                <li>**USSR**: Fundamental Duties (Article 51A), ideals of justice (social, economic, political) in the Preamble.</li>\n              </ul>\n            ",
            "formulas": "42nd Amendment (1976) -> Added: Socialist, Secular, Integrity.\nPreamble justiciable? No (Kesavananda Bharati Case 1973).",
            "mindmap": {
              "root": "Preamble & Sources",
              "branches": [
                {
                  "title": "Preamble Order",
                  "subnodes": [
                    "Sovereign",
                    "Socialist",
                    "Secular",
                    "Democratic & Republic"
                  ]
                },
                {
                  "title": "Amendments",
                  "subnodes": [
                    "42nd Amendment (1976)",
                    "Added: Socialist",
                    "Added: Secular & Integrity"
                  ]
                },
                {
                  "title": "UK / US Borrowings",
                  "subnodes": [
                    "UK: Parl Govt, Writs, 1-Citizenship",
                    "US: Fundamental Rights",
                    "US: Judicial Review, Impeachment"
                  ]
                },
                {
                  "title": "Other Borrowings",
                  "subnodes": [
                    "Ireland: DPSP",
                    "Canada: Strong Centre",
                    "Australia: Concurrent List"
                  ]
                }
              ]
            }
          },
          {
            "id": "schedules",
            "title": "Schedules of the Constitution",
            "notes": "\n              <h3>Schedules Overview</h3>\n              <p>Originally, the Constitution had 8 schedules. Currently, there are **12 schedules**.</p>\n              <p>Mnemonic to memorize: **TEARS OF OLD PM**</p>\n              <ol>\n                <li>**T - Territories**: Names of States and Union Territories and their territorial extent.</li>\n                <li>**E - Emoluments**: Provisions relating to the salaries, allowances, and privileges of President, Governors, Speaker, Judges, Comptroller and Auditor-General (CAG).</li>\n                <li>**A - Affirmations & Oaths**: Forms of Oaths or Affirmations for Union Ministers, MPs, Judges, CAG.</li>\n                <li>**R - Rajya Sabha**: Allocation of seats in the Rajya Sabha to the States and Union Territories.</li>\n                <li>**S - Scheduled Areas**: Provisions relating to the administration and control of scheduled areas and scheduled tribes.</li>\n                <li>**O - Other Tribes**: Administration of tribal areas in the states of **Assam, Meghalaya, Tripura, and Mizoram** (Mnemonic: ATM-M).</li>\n                <li>**F - Federal Lists**: Division of powers between the Union and the States (Union List, State List, Concurrent List).</li>\n                <li>**O - Official Languages**: 22 languages recognized by the Constitution. (Sindhi added by 21st, Konkani/Manipuri/Nepali by 71st, Bodo/Dogri/Maithili/Santhali by 92nd).</li>\n                <li>**L - Land Reforms**: Acts and regulations dealing with land reforms and abolition of the Zamindari system. (Added by **1st Amendment Act, 1951** to bypass judicial review).</li>\n                <li>**D - Defection**: Anti-defection provisions for members of Parliament and State Legislatures. (Added by **52nd Amendment Act, 1985**).</li>\n                <li>**P - Panchayats**: Powers, authority, and responsibilities of Panchayats. Contains 29 matters. (Added by **73rd Amendment Act, 1992**).</li>\n                <li>**M - Municipalities**: Powers, authority, and responsibilities of Municipalities. Contains 18 matters. (Added by **74th Amendment Act, 1992**).</li>\n              </ol>\n            ",
            "formulas": "TEARS OF OLD PM:\n1-Territories, 2-Emoluments, 3-Affirmations, 4-RajyaSabha, 5-Scheduled, 6-OtherScheduled, 7-FederalLists, 8-Languages, 9-LandReforms, 10-Defection, 11-Panchayats, 12-Municipalities",
            "mindmap": {
              "root": "12 Schedules",
              "branches": [
                {
                  "title": "1st - 4th",
                  "subnodes": [
                    "1: Territories & limits",
                    "2: Emoluments & Salaries",
                    "3: Oaths & Affirmations",
                    "4: RS Seat Allocations"
                  ]
                },
                {
                  "title": "5th - 8th",
                  "subnodes": [
                    "5: Scheduled Areas",
                    "6: Assam, Meg, Tri, Miz",
                    "7: Federal Lists (3 Lists)",
                    "8: 22 Languages"
                  ]
                },
                {
                  "title": "9th - 10th",
                  "subnodes": [
                    "9: Land Reforms (1st Amend)",
                    "10: Anti-Defection (52nd Amend)"
                  ]
                },
                {
                  "title": "11th - 12th",
                  "subnodes": [
                    "11: Panchayats (73rd Amend)",
                    "12: Municipalities (74th Amend)"
                  ]
                }
              ]
            }
          },
          {
            "id": "fundamental-rights",
            "title": "Fundamental Rights (Art 12-35)",
            "notes": "\n              <h3>1. Classification of Fundamental Rights</h3>\n              <p>Part III of the Constitution is called the **Magna Carta of India**.</p>\n              <ul>\n                <li>**Right to Equality (Articles 14-18)**:\n                  <ul>\n                    <li>Art 14: Equality before law & Equal protection of laws.</li>\n                    <li>Art 15: Prohibition of discrimination.</li>\n                    <li>Art 16: Equality of opportunity in public employment.</li>\n                    <li>Art 17: Abolition of Untouchability.</li>\n                    <li>Art 18: Abolition of Titles.</li>\n                  </ul>\n                </li>\n                <li>**Right to Freedom (Articles 19-22)**:\n                  <ul>\n                    <li>Art 19: Guarantees 6 democratic freedoms (speech, assembly, association, movement, residence, profession).</li>\n                    <li>Art 20: Protection in respect of conviction for offences (no ex-post facto law, no double jeopardy, no self-incrimination).</li>\n                    <li>Art 21: Protection of Life and Personal Liberty.</li>\n                    <li>Art 21A: Right to Education (added by 86th Amendment, 2002).</li>\n                    <li>Art 22: Protection against arrest and detention.</li>\n                  </ul>\n                </li>\n                <li>**Right against Exploitation (Articles 23-24)**:\n                  <ul>\n                    <li>Art 23: Prohibition of human trafficking and forced labour (begar).</li>\n                    <li>Art 24: Prohibition of employment of children (below 14 years) in factories/mines.</li>\n                  </ul>\n                </li>\n                <li>**Right to Freedom of Religion (Articles 25-28)**:\n                  <ul>\n                    <li>Art 25: Freedom of conscience, profession, practice, and propagation.</li>\n                    <li>Art 26: Manage religious affairs.</li>\n                  </ul>\n                </li>\n                <li>**Cultural and Educational Rights (Articles 29-30)**:\n                  <ul>\n                    <li>Art 29: Protection of language, script, and culture of minorities.</li>\n                    <li>Art 30: Right of minorities to establish and administer educational institutions.</li>\n                  </ul>\n                </li>\n                <li>**Right to Constitutional Remedies (Article 32)**:\n                  <ul>\n                    <li>Empowers the Supreme Court to issue writs to enforce Fundamental Rights. Dr. B.R. Ambedkar called Article 32 the 'Heart and Soul of the Constitution'.</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>2. The Five Prerogative Writs</h3>\n              <ul>\n                <li>**Habeas Corpus** ('To have the body of'): Issued to release a person unlawfully detained. Can be issued against both public and private entities.</li>\n                <li>**Mandamus** ('We command'): Issued to direct a public authority to perform a duty they have failed or refused to do. Cannot be issued against the President, Governors, or private individuals.</li>\n                <li>**Prohibition** ('To forbid'): Issued by a higher court to a lower court or quasi-judicial body to prevent it from exceeding its jurisdiction. (Preventive only).</li>\n                <li>**Certiorari** ('To be certified'): Issued to quash the order of a lower court or transfer case to itself. (Preventive and Curative).</li>\n                <li>**Quo Warranto** ('By what authority'): Issued to inquire into the legality of the claim of a person to a public office, preventing illegal usurpation.</li>\n              </ul>\n            ",
            "formulas": "Art 19 -> 6 democratic freedoms.\nArt 21 -> Protection of Life and Liberty.\nArt 32 -> Supreme Court Writs.\nArt 226 -> High Court Writs.",
            "mindmap": {
              "root": "Fundamental Rights",
              "branches": [
                {
                  "title": "Equality (14-18)",
                  "subnodes": [
                    "14: Equal Laws",
                    "15: No Discrimination",
                    "17: Untouchability Abolished"
                  ]
                },
                {
                  "title": "Freedom (19-22)",
                  "subnodes": [
                    "19: 6 Freedoms",
                    "21: Life & Liberty",
                    "21A: Education (86th Amend)"
                  ]
                },
                {
                  "title": "Exploit & Religion",
                  "subnodes": [
                    "23: Traffic & Begar",
                    "24: Child Labour",
                    "25: Conscience & Religion"
                  ]
                },
                {
                  "title": "Remedies (32)",
                  "subnodes": [
                    "Habeas Corpus (Detention)",
                    "Mandamus (Command Duty)",
                    "Certiorari (Quash Order)"
                  ]
                }
              ]
            }
          },
          {
            "id": "dpsp",
            "title": "DPSP & Fundamental Duties (Art 36-51A)",
            "notes": "\n              <h3>1. Directive Principles of State Policy (Part IV)</h3>\n              <p>Borrowed from Ireland. Non-justiciable but fundamental in governance. Classified into three types:</p>\n              <ul>\n                <li>**Socialistic Principles**: Article 38 (promote welfare, minimize inequalities), Article 39 (equal pay for equal work, distribute material resources), Article 39A (free legal aid).</li>\n                <li>**Gandhian Principles**: Article 40 (organize village panchayats), Article 43 (promote cottage industries), Article 46 (promote educational/economic interests of SCs, STs), Article 47 (prohibit intoxicating drinks/drugs).</li>\n                <li>**Liberal-Intellectual Principles**: Article 44 (Uniform Civil Code), Article 45 (early childhood care/education), Article 48 (organize agriculture/animal husbandry, prohibit slaughter), Article 50 (separate judiciary from executive), Article 51 (promote international peace).</li>\n              </ul>\n              \n              <h3>2. Fundamental Duties (Part IV-A)</h3>\n              <ul>\n                <li>Added by the **42nd Amendment Act (1976)** on the recommendation of the **Swaran Singh Committee** during Emergency.</li>\n                <li>Originally 10 duties, the **11th duty** was added by the **86th Amendment Act (2002)** (duty of parent/guardian to provide education to child aged 6-14).</li>\n                <li>Borrowed from USSR. Non-justiciable. Article 51A contains all 11 duties.</li>\n              </ul>\n            ",
            "formulas": "DPSP: Part IV (Art 36-51) | Borrowed from Ireland\nFundamental Duties: Part IV-A (Art 51A) | Swaran Singh Committee\n11th Duty: 86th Amendment (2002) for education 6-14 years.",
            "mindmap": {
              "root": "DPSP & Duties",
              "branches": [
                {
                  "title": "DPSP (Part IV)",
                  "subnodes": [
                    "Socialistic: Equal pay",
                    "Gandhian: Panchayats (40)",
                    "Liberal: UCC (44), Peace (51)"
                  ]
                },
                {
                  "title": "Duties (Part IV-A)",
                  "subnodes": [
                    "Swaran Singh Comm",
                    "42nd Amend (10 duties)",
                    "86th Amend (11th duty)"
                  ]
                }
              ]
            }
          },
          {
            "id": "citizenship",
            "title": "Citizenship (Art 5-11)",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Part II, Articles 5-11\nSingle Citizenship: Borrowed from UK\nAcquisition: Birth, Descent, Registration, Naturalization, Territory Incorporation\nLoss: Renunciation, Termination, Deprivation",
            "mindmap": {
              "root": "Citizenship",
              "branches": [
                {
                  "title": "Constitutional",
                  "subnodes": [
                    "Part II",
                    "Articles 5-11",
                    "Parliament authority (Art 11)"
                  ]
                },
                {
                  "title": "Acquisition (5)",
                  "subnodes": [
                    "Birth",
                    "Descent",
                    "Registration",
                    "Naturalization",
                    "Incorporation"
                  ]
                },
                {
                  "title": "Loss (3)",
                  "subnodes": [
                    "Renunciation",
                    "Termination",
                    "Deprivation"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "union-executive",
        "title": "Union Government",
        "topics": [
          {
            "id": "president",
            "title": "The President of India (Art 52-62)",
            "notes": "\n              <h3>1. Election of the President (Article 54)</h3>\n              <p>The President is elected not directly by the people, but by members of an **Electoral College** consisting of:</p>\n              <ol>\n                <li>Elected members of both Houses of Parliament (Lok Sabha & Rajya Sabha).</li>\n                <li>Elected members of the Legislative Assemblies of the States (MLAs).</li>\n                <li>Elected members of the Legislative Assemblies of the Union Territories of Delhi and Puducherry (and Jammu & Kashmir).</li>\n              </ol>\n              <p>**Note**: Nominated members of Parliament and State Assemblies **do not** participate in the presidential election.</p>\n              \n              <h3>2. Impeachment of the President (Article 61)</h3>\n              <ul>\n                <li>The President can be removed from office for **'violation of the Constitution'**.</li>\n                <li>The impeachment charges can be initiated in **either House of Parliament**.</li>\n                <li>The charges must be signed by **one-fourth of the members** of the initiating House and a **14-day notice** must be given to the President.</li>\n                <li>To pass, the resolution must be approved by a majority of **not less than two-thirds of the total membership** of the House.</li>\n                <li>It is then investigated by the other House, and if passed there by a **2/3rd majority of the total membership**, the President stands removed.</li>\n              </ul>\n              \n              <h3>3. Veto Powers (Article 111)</h3>\n              <ul>\n                <li>**Absolute Veto**: Withholding assent to the Bill (the Bill ends and does not become law).</li>\n                <li>**Suspensive Veto**: Returning the Bill to Parliament for reconsideration. If Parliament passes the Bill again with or without amendments by a **simple majority**, the President **must** give assent. (Cannot be used for Money Bills).</li>\n                <li>**Pocket Veto**: Keeping the Bill pending on his desk indefinitely (taking no action). The Indian President has a larger pocket veto than the US President because the US President must return the bill within 10 days, while the Indian Constitution specifies no time limit.</li>\n              </ul>\n              \n              <h3>4. Pardon Powers (Article 72)</h3>\n              <p>The President has the power to grant pardons, reprieves, respites, or remissions of punishment, or to suspend, remit, or commute sentences in all cases involving Court Martial, offences against Union laws, and death sentences.</p>\n            ",
            "formulas": "Electoral College = Elected MPs + Elected MLAs.\nImpeachment = Art 61 (2/3 of Total Membership required).\nPardon Powers = Art 72.",
            "mindmap": {
              "root": "The President",
              "branches": [
                {
                  "title": "Electoral College",
                  "subnodes": [
                    "Elected MPs (LS & RS)",
                    "Elected MLAs (States)",
                    "Delhi/Puducherry MLAs"
                  ]
                },
                {
                  "title": "Impeachment (61)",
                  "subnodes": [
                    "Violation of Constitution",
                    "Initiated in either House",
                    "2/3 of Total Membership"
                  ]
                },
                {
                  "title": "Vetoes (111)",
                  "subnodes": [
                    "Absolute Veto (Ends bill)",
                    "Suspensive Veto (Return)",
                    "Pocket Veto (No action)"
                  ]
                },
                {
                  "title": "Pardons (72)",
                  "subnodes": [
                    "Pardon (Complete free)",
                    "Commutation (Lighten type)",
                    "Remission (Reduce time)"
                  ]
                }
              ]
            }
          },
          {
            "id": "parliament",
            "title": "Parliament of India (Art 79-122)",
            "notes": "\n              <h3>1. Composition of Parliament</h3>\n              <p>Parliament consists of the **President**, the **Council of States (Rajya Sabha)**, and the **House of the People (Lok Sabha)**.</p>\n              <ul>\n                <li>**Rajya Sabha (Upper House)**:\n                  <ul>\n                    <li>Max strength: 250 (238 elected from States/UTs, 12 nominated by President from Art, Literature, Science, Social Service).</li>\n                    <li>It is a **permanent body** and not subject to dissolution.</li>\n                    <li>Members have a **6-year term**, with **one-third** retiring every second year.</li>\n                  </ul>\n                </li>\n                <li>**Lok Sabha (Lower House)**:\n                  <ul>\n                    <li>Max strength: 550 (530 representing States, 20 representing Union Territories). (Anglo-Indian reserved seats abolished by 104th Amendment).</li>\n                    <li>Normal term: **5 years**, can be dissolved earlier by the President.</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>2. Key Parliamentary Terms</h3>\n              <ul>\n                <li>**Quorum (Article 100)**: Minimum number of members required to be present to conduct a meeting. It is **one-tenth** of the total number of members in each House (i.e., 55 in Lok Sabha, 25 in Rajya Sabha), including the presiding officer.</li>\n                <li>**Joint Sitting (Article 108)**: Called by the President to resolve deadlocks between LS and RS on **Ordinary Bills** or **Financial Bills**.\n                  <ul>\n                    <li>Presided over by the **Speaker of the Lok Sabha**. (If Speaker is absent, the Deputy Speaker; if absent, the Deputy Chairman of Rajya Sabha).</li>\n                    <li>**Note**: Joint sittings **cannot** be called for Money Bills or Constitutional Amendment Bills.</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>3. Types of Bills & money Bills (Article 110)</h3>\n              <ul>\n                <li>**Money Bill**: Deals with taxation, borrowing, consolidated fund, etc.\n                  <ul>\n                    <li>Can only be introduced in the **Lok Sabha** on the recommendation of the President.</li>\n                    <li>The **Speaker's decision** on whether a bill is a money bill is final.</li>\n                    <li>Rajya Sabha has restricted powers; it can only delay the bill for **14 days** and cannot reject or amend it.</li>\n                  </ul>\n                </li>\n              </ul>\n            ",
            "formulas": "Quorum = 1/10th of membership.\nJoint Sitting = Art 108 (Presided by LS Speaker).\nMoney Bill = Art 110 (Certified by LS Speaker).",
            "mindmap": {
              "root": "Parliament",
              "branches": [
                {
                  "title": "Rajya Sabha",
                  "subnodes": [
                    "Max 250 (12 Nominated)",
                    "Permanent body",
                    "1/3 retire every 2 years"
                  ]
                },
                {
                  "title": "Lok Sabha",
                  "subnodes": [
                    "Max 550",
                    "Normal term 5 years",
                    "Directly elected by people"
                  ]
                },
                {
                  "title": "Joint Sitting (108)",
                  "subnodes": [
                    "Summoned by President",
                    "Presided by LS Speaker",
                    "Not for Money/CA Bills"
                  ]
                },
                {
                  "title": "Money Bills (110)",
                  "subnodes": [
                    "Lok Sabha only",
                    "Certified by Speaker",
                    "RS has max 14 days"
                  ]
                }
              ]
            }
          },
          {
            "id": "goverment-executives",
            "title": "Executives: PM, CM & Governor",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Real: PM (Union), CM (State)\nNominal: President (Union), Governor (State)\nPardons: President (Art 72 - court martial & death sentence), Governor (Art 161 - no court martial/death sentence pardon)",
            "mindmap": {
              "root": "Executives",
              "branches": [
                {
                  "title": "Union Executive",
                  "subnodes": [
                    "President (Nominal)",
                    "Prime Minister (Real)",
                    "Cabinet collective responsibility"
                  ]
                },
                {
                  "title": "State Executive",
                  "subnodes": [
                    "Governor (Nominal)",
                    "Chief Minister (Real)",
                    "Appointment by President"
                  ]
                },
                {
                  "title": "Pardoning Power",
                  "subnodes": [
                    "Article 72 (President)",
                    "Article 161 (Governor)"
                  ]
                }
              ]
            }
          },
          {
            "id": "judiciary",
            "title": "Integrated Judiciary: SC & HC",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Supreme Court: Art 124 (Original 131, Appellate 132-136, Writ 32, Advisory 143)\nHigh Courts: Art 214 (Writ 226)\nWrits: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto",
            "mindmap": {
              "root": "Judiciary",
              "branches": [
                {
                  "title": "Supreme Court",
                  "subnodes": [
                    "Article 124",
                    "Original (Art 131)",
                    "Advisory (Art 143)",
                    "Writ (Art 32)"
                  ]
                },
                {
                  "title": "High Courts",
                  "subnodes": [
                    "Article 214",
                    "Writ (Art 226) - broader than SC"
                  ]
                },
                {
                  "title": "Writs",
                  "subnodes": [
                    "Habeas Corpus",
                    "Mandamus",
                    "Prohibition",
                    "Certiorari",
                    "Quo Warranto"
                  ]
                }
              ]
            }
          },
          {
            "id": "panchayati-raj",
            "title": "Local Self-Govt & Panchayati Raj",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "73rd Amendment: Part IX, Sch 11 (29 subjects) - Rural Panchayats\n74th Amendment: Part IXA, Sch 12 (18 subjects) - Urban Municipalities\nBalwant Rai Mehta: 3-tier system\nContest Age: 21 years\nReservation: 33% (1/3rd) for women",
            "mindmap": {
              "root": "Panchayati Raj",
              "branches": [
                {
                  "title": "73rd Amendment (Rural)",
                  "subnodes": [
                    "3-tier: Gram/Block/District",
                    "5-year term",
                    "11th Schedule (29 subjects)",
                    "State Finance Commission"
                  ]
                },
                {
                  "title": "74th Amendment (Urban)",
                  "subnodes": [
                    "Municipal Corporation/Council",
                    "12th Schedule (18 subjects)",
                    "Ward Committees",
                    "Mayor as head"
                  ]
                },
                {
                  "title": "Key Bodies",
                  "subnodes": [
                    "State Election Commission",
                    "State Finance Commission",
                    "District Planning Committee"
                  ]
                },
                {
                  "title": "Reservations",
                  "subnodes": [
                    "1/3 seats for women",
                    "SC/ST proportional",
                    "50% in some states"
                  ]
                },
                {
                  "title": "Urban (74th)",
                  "subnodes": [
                    "Part IXA",
                    "Schedule 12 (18 items)",
                    "Municipalities"
                  ]
                },
                {
                  "title": "Key Rules",
                  "subnodes": [
                    "3-tier structure",
                    "21 years minimum age",
                    "33% women reservation"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "polity-advanced",
        "title": "Advanced Polity Structures & Bodies",
        "topics": [
          {
            "id": "amendments-parts",
            "title": "Constitutional Amendments, Parts & Schedules",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# 73rd Constitutional Amendment (1992) - Panchayati Raj\nSchedules: 11th Schedule - 29 subjects for Panchayats\nDuration of PR body: 5 years | Must be reconstituted within 6 months if dissolved early\nState Finance Commission: Formed every 5 years to review finances\nState Election Commission: Conducts PR elections (independent)\n# Three-Tier Structure\nGram Panchayat: Village level | Panchayat Samiti: Block level | Zila Parishad: District level\n# 74th Amendment - Urban Local Bodies\nSchedules: 12th Schedule - 18 subjects\nMunicipal Corporation (city) | Municipal Council (town) | Nagar Panchayat (transitional)\nMayor: Head of Municipal Corporation | Ward Committees (>3 lakh pop)\n# Reservation\n1/3 seats reserved for women (some states 50%)\nReservation for SC/ST proportional to population\n# Mnemonic: TEARS of OLD PM (11th Schedule Subjects)\nTransport, Education, Animal husbandry, Roads, Sanitation, Old people, Land, Development, Poverty, Markets",
            "mindmap": {
              "root": "Amendments & Parts",
              "branches": [
                {
                  "title": "Schedules",
                  "subnodes": [
                    "12 Schedules",
                    "Mnemonic"
                  ]
                },
                {
                  "title": "Parts",
                  "subnodes": [
                    "Part I to XXII"
                  ]
                },
                {
                  "title": "Amendments",
                  "subnodes": [
                    "42nd, 44th, 86th, 101st"
                  ]
                }
              ]
            }
          },
          {
            "id": "important-articles",
            "title": "High-Yield Special Articles Cheat Sheet",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Emergency Provisions\nArt 352: National Emergency (Armed rebellion/external aggression) - 2/3 Parliament majority\nArt 356: President's Rule in State (failure of constitutional machinery)\nArt 360: Financial Emergency (financial stability threatened)\n# President\nArt 52-62: Office and election | Art 72: Pardoning Powers\nArt 123: Ordinance making power (when Parliament not in session)\n# Parliament\nArt 79-122: Parliament provisions | Art 108: Joint Sitting\nArt 110: Money Bill definition (Lok Sabha only)\nArt 111: President's assent/return of bill\n# Judiciary\nArt 124-147: Supreme Court | Art 214-231: High Courts\nArt 32: Right to Constitutional Remedies (Ambedkar: Heart & Soul of Constitution)\nArt 226: High Court writs | Art 136: SLP - Special Leave Petition\n# Fundamental Rights\nArt 12-35: Fundamental Rights | Art 14: Equality before law\nArt 19: 6 Freedoms | Art 21: Right to Life & Personal Liberty\nArt 22: Protection against arrest | Art 25-28: Religious freedom\n# DPSP\nArt 36-51: Directive Principles | Art 44: Uniform Civil Code\nArt 45: Early childhood care & education | Art 51A: Fundamental Duties (10+1)",
            "mindmap": {
              "root": "Important Articles",
              "branches": [
                {
                  "title": "Emergency (352/356/360)",
                  "subnodes": [
                    "352: National Emergency",
                    "356: Presidents Rule",
                    "360: Financial Emergency",
                    "352 needs 2/3 majority"
                  ]
                },
                {
                  "title": "Fundamental Rights",
                  "subnodes": [
                    "Art 14: Equality",
                    "Art 19: 6 Freedoms",
                    "Art 21: Right to Life",
                    "Art 32: Constitutional Remedies"
                  ]
                },
                {
                  "title": "Parliament & President",
                  "subnodes": [
                    "Art 108: Joint Sitting",
                    "Art 110: Money Bill",
                    "Art 123: Ordinance Power",
                    "Art 72: Pardoning Power"
                  ]
                },
                {
                  "title": "DPSP & Duties",
                  "subnodes": [
                    "Art 44: Uniform Civil Code",
                    "Art 45: Child Education",
                    "Art 51A: 11 Duties",
                    "Art 21A: Right to Education"
                  ]
                },
                {
                  "title": "Emergency",
                  "subnodes": [
                    "National, President's, Financial"
                  ]
                },
                {
                  "title": "Rajya Sabha",
                  "subnodes": [
                    "Art 249, Art 312"
                  ]
                }
              ]
            }
          },
          {
            "id": "positions-tenures",
            "title": "Elections, Appointments & Terms of Office",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Minimum Age Requirements\nPresident: 35 years | Vice President: 35 years\nGovernor: 35 years | Lok Sabha member: 25 years\nRajya Sabha member: 30 years | Supreme Court judge: No minimum age\n# Tenure & Terms\nPresident: 5 years (eligible for re-election)\nVice President: 5 years | Governor: 5 years (pleasure of President)\nCJI/SC Judges: Till age 65 | HC Judges: Till age 62\nCAG: 6 years or till 65 (whichever earlier)\nCEC: 6 years or till 65 | Attorney General: Pleasure of President\n# Removal Process\nPresident: Impeachment by Parliament (2/3 majority + present & voting)\nSC/HC Judge: Address by both Houses (special majority) + President\nCEC: Same as SC judge (protected)\nGovernor: Pleasure of President (no formal removal process needed)\n# Key Ages Mnemonic\nPres/VP/Gov = 35 | LS = 25 | RS = 30 | SC/HC No min age\nSC retire 65 | HC retire 62 | PM/CM: No age limit",
            "mindmap": {
              "root": "Positions & Tenures",
              "branches": [
                {
                  "title": "Minimum Age",
                  "subnodes": [
                    "President/VP/Governor: 35",
                    "Lok Sabha MP: 25",
                    "Rajya Sabha: 30",
                    "Judges: No minimum"
                  ]
                },
                {
                  "title": "Terms of Office",
                  "subnodes": [
                    "President/VP: 5 years",
                    "SC Judge: till 65",
                    "HC Judge: till 62",
                    "CAG: 6 yrs or 65"
                  ]
                },
                {
                  "title": "Removal Processes",
                  "subnodes": [
                    "President: Impeachment",
                    "CJI: Parliamentary address",
                    "CEC: Like SC judge",
                    "Governor: Pleasure of Pres"
                  ]
                },
                {
                  "title": "Key Numbers",
                  "subnodes": [
                    "Pres/VP/Gov = 35",
                    "LS=25, RS=30",
                    "SC retire 65, HC retire 62"
                  ]
                },
                {
                  "title": "Terms",
                  "subnodes": [
                    "CAG 6/65, CEC 6/65"
                  ]
                },
                {
                  "title": "Oath/Resign",
                  "subnodes": [
                    "Who administers / receives"
                  ]
                }
              ]
            }
          },
          {
            "id": "constitutional-bodies",
            "title": "Constitutional & Non-Constitutional Bodies",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "Constitutional: Art 324 (EC), Art 280 (FC), Art 148 (CAG)",
            "mindmap": {
              "root": "Bodies",
              "branches": [
                {
                  "title": "Constitutional",
                  "subnodes": [
                    "EC, FC, CAG, UPSC, AG"
                  ]
                },
                {
                  "title": "Non-Constitutional",
                  "subnodes": [
                    "NITI Aayog, NHRC, CVC, Lokpal"
                  ]
                }
              ]
            }
          },
          {
            "id": "governance-emergency",
            "title": "Emergency Provisions",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Part XVIII, Articles 352-360\nNational: Art 352 (approved 1 month, special majority)\nState (President's Rule): Art 356 & 365 (approved 2 months)\nFinancial: Art 360 (approved 2 months, never declared)\nFR Impact: Art 20 & 21 never suspended (Art 359)",
            "mindmap": {
              "root": "Emergencies",
              "branches": [
                {
                  "title": "National (352)",
                  "subnodes": [
                    "War / External / Armed rebellion",
                    "1 month approval",
                    "Art 20/21 exception"
                  ]
                },
                {
                  "title": "State (356)",
                  "subnodes": [
                    "Failure of State Constitution",
                    "2 months approval",
                    "Max 3 years"
                  ]
                },
                {
                  "title": "Financial (360)",
                  "subnodes": [
                    "Financial threat",
                    "Never declared in India"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "federal-rpa",
        "title": "Federal Structure & Election Law",
        "topics": [
          {
            "id": "polity-federal-structure",
            "title": "Federal Structure & Centre-State Relations",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "7th Schedule: Union (97), State (66), Concurrent (47)\nArt 263: Inter-State Council\nArt 280: Finance Commission",
            "mindmap": {
              "root": "Federal Structure",
              "branches": [
                {
                  "title": "Legislative",
                  "subnodes": [
                    "Union List",
                    "State List",
                    "Concurrent List"
                  ]
                },
                {
                  "title": "Administrative",
                  "subnodes": [
                    "Governor",
                    "Inter-State Council"
                  ]
                },
                {
                  "title": "Financial",
                  "subnodes": [
                    "Finance Commission",
                    "GST Council"
                  ]
                },
                {
                  "title": "Commissions",
                  "subnodes": [
                    "Sarkaria",
                    "Punchhi",
                    "Rajamannar"
                  ]
                }
              ]
            }
          },
          {
            "id": "polity-rpa",
            "title": "Representation of People Act & Election Commission",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "RPA 1950: Electoral rolls\nRPA 1951: Conduct of elections\n10th Schedule: Anti-Defection\nArt 324: Election Commission",
            "mindmap": {
              "root": "RPA & Elections",
              "branches": [
                {
                  "title": "RPA 1950",
                  "subnodes": [
                    "Electoral rolls",
                    "Delimitation"
                  ]
                },
                {
                  "title": "RPA 1951",
                  "subnodes": [
                    "Corrupt practices",
                    "Disqualification"
                  ]
                },
                {
                  "title": "Anti-Defection",
                  "subnodes": [
                    "52nd Amendment",
                    "10th Schedule"
                  ]
                },
                {
                  "title": "ECI",
                  "subnodes": [
                    "Art 324",
                    "MCC",
                    "NOTA",
                    "VVPAT"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "history": {
    "title": "History (CDS/NDA)",
    "chapters": [
      {
        "id": "historiography",
        "title": "1. Historiography & Historical Foundations",
        "topics": [
          {
            "id": "what-is-history",
            "title": "What is History?",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Primary Sources: contemporary | Secondary Sources: later analysis",
            "mindmap": {
              "root": "What is History?",
              "branches": [
                {
                  "title": "Core Foundations",
                  "subnodes": [
                    "Definition",
                    "Importance of Chronology",
                    "Cause and Effect"
                  ]
                }
              ]
            }
          },
          {
            "id": "sources-indian-history",
            "title": "Sources of Indian History",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Epigraphy: Inscriptions | Numismatics: Coins | Rajatarangini: Kalhana (Kashmir history)",
            "mindmap": {
              "root": "Sources of Indian History",
              "branches": [
                {
                  "title": "Archaeological Sources (High-Yield)",
                  "subnodes": [
                    "Inscriptions (Epigraphy)",
                    "Allahabad Pillar Inscription (Prasasti)",
                    "Aihole Inscription"
                  ]
                },
                {
                  "title": "Literary Sources",
                  "subnodes": [
                    "Religious Texts",
                    "Secular Literature",
                    "Panini's Ashtadhyayi (earliest Sanskrit grammar)"
                  ]
                }
              ]
            }
          },
          {
            "id": "dating-systems",
            "title": "Dating Systems",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Vikrama Era: 57 BCE | Saka Era: 78 CE (National Calendar) | Gupta Era: 319 CE",
            "mindmap": {
              "root": "Dating Systems",
              "branches": [
                {
                  "title": "General Terminology",
                  "subnodes": [
                    "BC (Before Christ) / BCE (Before Common Era)",
                    "AD (Anno Domini) / CE (Common Era)"
                  ]
                },
                {
                  "title": "Key Historical Eras of India",
                  "subnodes": [
                    "Vikrama Era",
                    "Saka Era",
                    "Gupta Era"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "prehistoric-india",
        "title": "2. Prehistoric India",
        "topics": [
          {
            "id": "stone-age",
            "title": "Stone Age",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Paleolithic: Quartzite, Bhimbetka | Mesolithic: Microliths, Bagor | Neolithic: Farming, Burzahom",
            "mindmap": {
              "root": "Stone Age",
              "branches": [
                {
                  "title": "Paleolithic (Old Stone Age): Up to 10,000 BCE",
                  "subnodes": [
                    "Lifestyle",
                    "Tools",
                    "Phases"
                  ]
                },
                {
                  "title": "Mesolithic (Middle Stone Age): 10,000 BCE - 6,000 BCE",
                  "subnodes": [
                    "Climatic Shift",
                    "Tools",
                    "Lifestyle"
                  ]
                },
                {
                  "title": "Neolithic (New Stone Age): 6,000 BCE - 1,000 BCE",
                  "subnodes": [
                    "The Neolithic Revolution",
                    "Lifestyle",
                    "Key Sites"
                  ]
                }
              ]
            }
          },
          {
            "id": "chalcolithic-age",
            "title": "Chalcolithic Age",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Chalcolithic: Copper + Stone | Jorwe Culture: Inamgaon | Banas Culture: Ahar",
            "mindmap": {
              "root": "Chalcolithic Age",
              "branches": [
                {
                  "title": "Key Characteristics",
                  "subnodes": [
                    "Technology",
                    "Economy",
                    "Pottery"
                  ]
                },
                {
                  "title": "Major Chalcolithic Cultures",
                  "subnodes": [
                    "Ahar-Banas Culture (Rajasthan)",
                    "Kayatha & Malwa Cultures (MP)",
                    "Jorwe Culture (Maharashtra)"
                  ]
                }
              ]
            }
          },
          {
            "id": "rock-art",
            "title": "Rock Art",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Bhimbetka discoverer: V.S. Wakankar (1957) | Colors: Green (dance), Red (hunt)",
            "mindmap": {
              "root": "Rock Art",
              "branches": [
                {
                  "title": "Bhimbetka Caves (Madhya Pradesh)",
                  "subnodes": [
                    "Discovery",
                    "UNESCO Status",
                    "Artistic Styles"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "ancient-india-tree",
        "title": "3. Ancient India",
        "topics": [
          {
            "id": "indus-valley-civilization",
            "title": "Indus Valley Civilization",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Lothal: Dockyard | Kalibangan: Ploughed fields | Dholavira: Reservoirs | Harappa: Ravi",
            "mindmap": {
              "root": "Indus Valley Civilization",
              "branches": [
                {
                  "title": "Discovery & Chronology",
                  "subnodes": [
                    "First discovered in 1921 at Harappa by Daya Ram Sahni und...",
                    "Mohenjo-daro discovered in 1922 by R",
                    "Dated via Carbon-14"
                  ]
                },
                {
                  "title": "Town Planning & Drainage",
                  "subnodes": [
                    "Grid System",
                    "Citadel & Lower Town",
                    "Drainage System"
                  ]
                },
                {
                  "title": "Site-Wise High-Yield Facts",
                  "subnodes": [
                    "Harappa",
                    "Mohenjo-daro",
                    "Lothal"
                  ]
                },
                {
                  "title": "Economy, Script & Decline",
                  "subnodes": [
                    "Economy",
                    "Script & Seals",
                    "Decline Theories"
                  ]
                }
              ]
            }
          },
          {
            "id": "vedic-age",
            "title": "Vedic Age",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Rigveda oldest | Mundaka Upanishad: Satyameva Jayate | Early Vedic: pastoral | Later Vedic: iron farming",
            "mindmap": {
              "root": "Vedic Age",
              "branches": [
                {
                  "title": "Early Vedic Period (1500 - 1000 BCE)",
                  "subnodes": [
                    "Geography",
                    "Polity",
                    "Society & Economy"
                  ]
                },
                {
                  "title": "Later Vedic Period (1000 - 600 BCE)",
                  "subnodes": [
                    "Geography",
                    "Polity",
                    "Society & Economy"
                  ]
                },
                {
                  "title": "Vedic Literature",
                  "subnodes": [
                    "Four Vedas",
                    "Brahmanas",
                    "Aranyakas"
                  ]
                }
              ]
            }
          },
          {
            "id": "mahajanapadas",
            "title": "Mahajanapadas",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "16 States | Vajji: Republic (Vaishali capital) | Magadha: Strongest (Rajgir/Pataliputra)",
            "mindmap": {
              "root": "Mahajanapadas",
              "branches": [
                {
                  "title": "The 16 Mahajanapadas",
                  "subnodes": [
                    "Mentioned in Buddhist text Anguttara Nikaya and Jain text...",
                    "Monarchies",
                    "Republics (Ganasanghas)"
                  ]
                },
                {
                  "title": "Rise of Magadha",
                  "subnodes": [
                    "Haryanka Dynasty",
                    "Ajatashatru (492-460 BCE)",
                    "Udayin"
                  ]
                }
              ]
            }
          },
          {
            "id": "magadha-expansion",
            "title": "Magadha Expansion",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Haryanka: Bimbisara | Nanda: Mahapadma Nanda | Hydaspes: 326 BCE (Alexander vs Porus)",
            "mindmap": {
              "root": "Magadha Expansion",
              "branches": [
                {
                  "title": "Dynasties",
                  "subnodes": [
                    "Haryanka Dynasty",
                    "Shishunaga Dynasty",
                    "Nanda Dynasty"
                  ]
                }
              ]
            }
          },
          {
            "id": "buddhism-jainism",
            "title": "Buddhism & Jainism",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "1st Buddhist Council: Rajgriha (Ajatashatru) | 3rd: Pataliputra (Ashoka) | 4th: Kashmir (Kanishka)",
            "mindmap": {
              "root": "Buddhism & Jainism",
              "branches": [
                {
                  "title": "Buddhism (Gautama Buddha: 563 - 483 BCE)",
                  "subnodes": [
                    "Born as Siddhartha in Lumbini (Nepal) to Shakya Chief Shu...",
                    "Core Teachings",
                    "Buddhist Councils"
                  ]
                },
                {
                  "title": "Jainism (Vardhamana Mahavira: 599 - 527 BCE)",
                  "subnodes": [
                    "24th Tirthankara (1st",
                    "Core Teachings",
                    "Sects"
                  ]
                }
              ]
            }
          },
          {
            "id": "mauryan-period",
            "title": "Mauryan Period",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Kalinga War: 261 BCE | Chanakya: Arthashastra | Megasthenes: Indica",
            "mindmap": {
              "root": "Mauryan Period",
              "branches": [
                {
                  "title": "Rulers & Triumphs",
                  "subnodes": [
                    "Chandragupta Maurya (322 - 298 BCE)",
                    "Bindusara (298 - 273 BCE)",
                    "Ashoka (273 - 232 BCE)"
                  ]
                },
                {
                  "title": "Ashokan Edicts & Dhamma",
                  "subnodes": [
                    "Edicts are classified into Major Rock Edicts (14), Minor ...",
                    "Major Rock Edict XIII",
                    "Rummindei Pillar Inscription"
                  ]
                },
                {
                  "title": "Administration & Economy",
                  "subnodes": [
                    "Highly centralized bureaucracy",
                    "Spy network of *Gudhapurushas* (Sanstha - stationary, San...",
                    "Tax"
                  ]
                }
              ]
            }
          },
          {
            "id": "post-mauryan-india",
            "title": "Post-Mauryan India",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Sunga founder: Pushyamitra | Saka Era: 78 CE (Kanishka) | Satavahana: Lead coins",
            "mindmap": {
              "root": "Post-Mauryan India",
              "branches": [
                {
                  "title": "Indigenous Dynasties",
                  "subnodes": [
                    "Sunga Dynasty (185 - 73 BCE)",
                    "Kanva Dynasty",
                    "Satavahanas (Andhras)"
                  ]
                },
                {
                  "title": "Foreign Invasions",
                  "subnodes": [
                    "Indo-Greeks",
                    "Sakas (Scythians)",
                    "Kushanas"
                  ]
                }
              ]
            }
          },
          {
            "id": "gupta-period",
            "title": "Gupta Period",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Napoleon of India: Samudragupta | Allahabad Prasasti: Harishena | Fa-Hien: Chandragupta II",
            "mindmap": {
              "root": "Gupta Period",
              "branches": [
                {
                  "title": "Key Rulers & Expansion",
                  "subnodes": [
                    "Chandragupta I (319 - 335 CE)",
                    "Samudragupta (335 - 380 CE)",
                    "Chandragupta II (Vikramaditya"
                  ]
                },
                {
                  "title": "Science, Literature & Golden Age Debate",
                  "subnodes": [
                    "Literature",
                    "Science & Math",
                    "The \"Golden Age\" Debate"
                  ]
                }
              ]
            }
          },
          {
            "id": "south-indian-kingdoms",
            "title": "South Indian Kingdoms",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Cholas: Brihadeshwara Temple (Tanjore) | Village administration: Uttaramerur inscription",
            "mindmap": {
              "root": "South Indian Kingdoms",
              "branches": [
                {
                  "title": "The Sangam Age (3rd BCE - 3rd CE)",
                  "subnodes": [
                    "Assemblies (Sangams) of Tamil poets held under Pandyan pa...",
                    "Three kingdoms"
                  ]
                },
                {
                  "title": "Pallavas & Chalukyas (6th - 8th CE)",
                  "subnodes": [
                    "Pallavas of Kanchi",
                    "Chalukyas of Vatapi"
                  ]
                },
                {
                  "title": "Imperial Cholas (9th - 12th CE)",
                  "subnodes": [
                    "Founded by Vijayalaya",
                    "Rajaraja Chola I (985 - 1014 CE)",
                    "Rajendra Chola I (1014 - 1044 CE)"
                  ]
                }
              ]
            }
          },
          {
            "id": "ancient-indian-culture",
            "title": "Ancient Indian Culture",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Mrichchakatikam: Shudraka | Mudrarakshasa: Vishakhadatta | Yoga: Patanjali | Vaisheshika: Kanada",
            "mindmap": {
              "root": "Ancient Indian Culture",
              "branches": [
                {
                  "title": "Literature & Philosophy",
                  "subnodes": [
                    "Sanskrit Drama",
                    "6 Orthodox Schools (Shad-Darshana)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "medieval-india-tree",
        "title": "4. Medieval India",
        "topics": [
          {
            "id": "early-medieval-india",
            "title": "Early Medieval India",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Vikramashila Univ: Dharmapala | Ellora Kailash Temple: Krishna I (Rashtrakuta)",
            "mindmap": {
              "root": "Early Medieval India",
              "branches": [
                {
                  "title": "Tripartite Struggle (8th - 10th CE)",
                  "subnodes": [
                    "The Palas of Bengal",
                    "The Gurjara-Pratiharas",
                    "The Rashtrakutas"
                  ]
                }
              ]
            }
          },
          {
            "id": "delhi-sultanate",
            "title": "Delhi Sultanate",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Chahalgani: Iltutmish | Market Reforms: Alauddin Khilji | Capital shift: Muhammad bin Tughlaq",
            "mindmap": {
              "root": "Delhi Sultanate",
              "branches": [
                {
                  "title": "The Dynasties",
                  "subnodes": [
                    "Firoz Shah Tughlaq (1351-1388)",
                    "Sayyid Dynasty (1414-1451)",
                    "Lodi Dynasty (1451-1526)"
                  ]
                }
              ]
            }
          },
          {
            "id": "vijayanagara-empire",
            "title": "Vijayanagara Empire",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Founded: 1336 (Harihara & Bukka) | Peak: Krishnadevaraya | Capital ruins: Hampi | Talikota: 1565",
            "mindmap": {
              "root": "Vijayanagara Empire",
              "branches": [
                {
                  "title": "History & Dynasties",
                  "subnodes": [
                    "Founded in 1336 by brothers Harihara I & Bukka I (Sangama...",
                    "Four dynasties",
                    "Battle of Talikota (1565)"
                  ]
                }
              ]
            }
          },
          {
            "id": "bahmani-deccan-sultanates",
            "title": "Bahmani Kingdom & Deccan Sultanates",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Bahmani: Hasan Gangu (1347) | Gol Gumbaz: Bijapur (Adil Shah) | Charminar: Golconda",
            "mindmap": {
              "root": "Bahmani Kingdom & Deccan Sultanates",
              "branches": [
                {
                  "title": "Bahmani Kingdom (1347 - 1527)",
                  "subnodes": [
                    "Founded in 1347 by Ala-ud-Din Bahman Shah (also known as ...",
                    "Capital was initially Gulbarga, later shifted to Bidar"
                  ]
                },
                {
                  "title": "Split into Deccan Sultanates",
                  "subnodes": [
                    "Adil Shahis of Bijapur",
                    "Nizam Shahis of Ahmadnagar",
                    "Qutb Shahis of Golconda"
                  ]
                }
              ]
            }
          },
          {
            "id": "mughal-empire",
            "title": "Mughal Empire",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "1st Panipat: 1526 | Mansabdari & Dahsala: Akbar | Jizya re-imposed: Aurangzeb (1679)",
            "mindmap": {
              "root": "Mughal Empire",
              "branches": [
                {
                  "title": "Rulers & Triumphs",
                  "subnodes": [
                    "Babur (1526-1530)",
                    "Humayun (1530-1556)",
                    "Akbar (1556-1605)"
                  ]
                }
              ]
            }
          },
          {
            "id": "marathas",
            "title": "Marathas",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Shivaji Coronation: 1674 | Ashtapradhan: Shivaji council | Chauth: 25% tax | 3rd Panipat: 1761",
            "mindmap": {
              "root": "Marathas",
              "branches": [
                {
                  "title": "Chhatrapati Shivaji Maharaj (1627 - 1680)",
                  "subnodes": [
                    "Born at Shivneri Fort",
                    "Administration",
                    "Revenue System"
                  ]
                },
                {
                  "title": "Peshwa Era (1713 - 1818)",
                  "subnodes": [
                    "Peshwas became the de-facto rulers of the empire, shiftin...",
                    "Baji Rao I (1720-1740)",
                    "Balaji Baji Rao (Nana Saheb"
                  ]
                }
              ]
            }
          },
          {
            "id": "bhakti-movement",
            "title": "Bhakti Movement",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Alvars: Vishnu | Nayanars: Shiva | Ramcharitmanas: Tulsidas | Kirtans: Chaitanya",
            "mindmap": {
              "root": "Bhakti Movement",
              "branches": [
                {
                  "title": "Origins & Schools",
                  "subnodes": [
                    "Originated in South India (7th-9th century) led by Alvars...",
                    "Spread to North India in the 14th century by Ramananda",
                    "Saguna School (Worshipped God with Form)"
                  ]
                }
              ]
            }
          },
          {
            "id": "sufi-movement",
            "title": "Sufi Movement",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Chishti: Moinuddin (Ajmer Dargah) | Sama: Sufi music | Naqshbandi: Orthodox (Aurangzeb support)",
            "mindmap": {
              "root": "Sufi Movement",
              "branches": [
                {
                  "title": "Key Orders (Silsilas) in India",
                  "subnodes": [
                    "Suhrawardi Order",
                    "Naqshbandi Order"
                  ]
                }
              ]
            }
          },
          {
            "id": "sikh-history",
            "title": "Sikh History",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Khalsa: 1699 (Gobind Singh) | Treaty of Amritsar: 1809 | Annexation of Punjab: 1849",
            "mindmap": {
              "root": "Sikh History",
              "branches": [
                {
                  "title": "The Ten Gurus",
                  "subnodes": [
                    "Guru Nanak Dev (1st)",
                    "Guru Angad (2nd)",
                    "Guru Ram Das (4th)"
                  ]
                },
                {
                  "title": "Maharaja Ranjit Singh & British Wars",
                  "subnodes": [
                    "Consolidated Punjab into a powerful empire",
                    "Anglo-Sikh Wars",
                    "2nd War (1848-49)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "modern-india-tree",
        "title": "5. Modern India (Highest Priority)",
        "topics": [
          {
            "id": "european-arrival",
            "title": "European Arrival",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Arrival: Portuguese (1498) -> Dutch (1602) -> English -> French (1664)\nGoa Captured: 1510 (Albuquerque)",
            "mindmap": {
              "root": "European Arrival",
              "branches": [
                {
                  "title": "Arrival Sequence (PEDDF)",
                  "subnodes": [
                    "Portuguese (1498)",
                    "Dutch (1602)",
                    "English (1600)"
                  ]
                },
                {
                  "title": "Foundation of British Rule",
                  "subnodes": [
                    "Battle of Plassey (23 June 1757)",
                    "Battle of Buxar (22 Oct 1764)"
                  ]
                }
              ]
            }
          },
          {
            "id": "british-expansion",
            "title": "British Expansion",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Plassey: 1757 | Buxar: 1764 | Allahabad Treaty: 1765 (Diwani rights) | Subsidiary: Wellesley | Lapse: Dalhousie",
            "mindmap": {
              "root": "British Expansion",
              "branches": [
                {
                  "title": "Battles & Alliances",
                  "subnodes": [
                    "Battle of Plassey (1757)",
                    "Battle of Buxar (1764)",
                    "Subsidiary Alliance"
                  ]
                }
              ]
            }
          },
          {
            "id": "economic-impact-british",
            "title": "Economic Impact of British Rule",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Permanent Settlement: Cornwallis (Bengal) | Ryotwari: Munro (Madras) | Mahalwari: Mackenzie (North) | Drain Theory: Naoroji",
            "mindmap": {
              "root": "Economic Impact of British Rule",
              "branches": [
                {
                  "title": "Three Land Revenue Systems",
                  "subnodes": [
                    "Permanent Settlement (Zamindari System)",
                    "Ryotwari System",
                    "Mahalwari System"
                  ]
                },
                {
                  "title": "High-Yield Economic Phenomena",
                  "subnodes": [
                    "De-industrialization",
                    "Drain of Wealth Theory",
                    "Commercialisation of Agriculture"
                  ]
                }
              ]
            }
          },
          {
            "id": "socio-religious-reform",
            "title": "Socio-Religious Reform Movements",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Brahmo: Ram Mohan Roy | Arya: Dayanand Saraswati | Satyashodhak: Jyotirao Phule (Gulamgiri) | Aligarh: Syed Ahmed",
            "mindmap": {
              "root": "Socio-Religious Reform Movements",
              "branches": [
                {
                  "title": "Reform Organizations",
                  "subnodes": [
                    "Brahmo Samaj (1828)",
                    "Arya Samaj (1875)",
                    "Satyashodhak Samaj (1873)"
                  ]
                }
              ]
            }
          },
          {
            "id": "revolt-1857",
            "title": "Revolt of 1857",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Barrackpore: Mangal Pandey | Meerut start: May 10, 1857 | Jhansi opponent: Hugh Rose | Result: GoI Act 1858",
            "mindmap": {
              "root": "Revolt of 1857",
              "branches": [
                {
                  "title": "Causes of the Revolt",
                  "subnodes": [
                    "Political",
                    "Economic",
                    "Social/Religious"
                  ]
                },
                {
                  "title": "Major Centers & Leaders",
                  "subnodes": [
                    "Delhi",
                    "Kanpur",
                    "Lucknow"
                  ]
                },
                {
                  "title": "Outcomes",
                  "subnodes": [
                    "Passed the Government of India Act 1858, which transferre...",
                    "Governor-General's title changed to Viceroy (Canning was ...",
                    "Abolished the Doctrine of Lapse"
                  ]
                }
              ]
            }
          },
          {
            "id": "governor-generals-viceroys",
            "title": "Governor-Generals & Viceroys",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Sati Abolished: 1829 (Bentinck) | Railways: 1853 (Dalhousie) | Local Self-Gov: Ripon | Bengal Partition: 1905 (Curzon)",
            "mindmap": {
              "root": "Governor-Generals & Viceroys",
              "branches": [
                {
                  "title": "Governor-Generals of Bengal (1773 - 1833)",
                  "subnodes": [
                    "Warren Hastings (1773-1785)",
                    "Lord Cornwallis (1786-1793)",
                    "Lord Wellesley (1798-1805)"
                  ]
                },
                {
                  "title": "Governor-Generals of India (1833 - 1858)",
                  "subnodes": [
                    "Lord William Bentinck (1828-1835)"
                  ]
                },
                {
                  "title": "Viceroys of India (1858 - 1947)",
                  "subnodes": [
                    "Lord Canning (1856-1862)",
                    "Lord Lytton (1876-1880)",
                    "Lord Ripon (1880-1884)"
                  ]
                }
              ]
            }
          },
          {
            "id": "constitutional-development",
            "title": "Constitutional Development",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "1773: Supreme Court | 1833: GG of India | 1909: Separate Electorate | 1919: Provincial Dyarchy | 1935: Provincial Autonomy",
            "mindmap": {
              "root": "Constitutional Development",
              "branches": [
                {
                  "title": "Company Regulation Acts",
                  "subnodes": [
                    "Regulating Act of 1773",
                    "Pitts India Act of 1784",
                    "Charter Act of 1813"
                  ]
                },
                {
                  "title": "Crown Administration Acts",
                  "subnodes": [
                    "Government of India Act 1858",
                    "Indian Councils Act 1909 (Morley-Minto Reforms)",
                    "Government of India Act 1919 (Montagu-Chelmsford Reforms)"
                  ]
                }
              ]
            }
          },
          {
            "id": "freedom-movement",
            "title": "Freedom Movement",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "INC Founded: 1885 | Dandi March: March 12-April 6, 1930 | Quit India: Aug 8, 1942 | Chauri Chaura: Feb 1922",
            "mindmap": {
              "root": "Freedom Movement",
              "branches": [
                {
                  "title": "Early Phases",
                  "subnodes": [
                    "Indian National Congress (INC) Founded (1885)",
                    "Moderate Phase (1885-1905)",
                    "Extremist Phase (1905-1919)"
                  ]
                },
                {
                  "title": "Gandhian Era (1919 - 1947)",
                  "subnodes": [
                    "Gandhi returned from South Africa on 9 January 1915 (cele...",
                    "Early Satyagrahas",
                    "Rowlatt Act & Jallianwala Bagh (1919)"
                  ]
                }
              ]
            }
          },
          {
            "id": "post-independence-consolidation",
            "title": "Post-Independence Consolidation",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Operation Polo: Hyderabad (1948) | 1st Linguistic State: Andhra (1953) | SRC 1956: Fazl Ali Commission",
            "mindmap": {
              "root": "Post-Independence Consolidation",
              "branches": [
                {
                  "title": "Integration of Princely States",
                  "subnodes": [
                    "Junagadh",
                    "Hyderabad",
                    "Jammu & Kashmir"
                  ]
                },
                {
                  "title": "States Reorganization",
                  "subnodes": [
                    "Andhra Pradesh became the first linguistic state in 1953 ...",
                    "Dhar Commission (1948) and JVP Committee (1948 - Jawaharl...",
                    "Following Sriramulu's death, the government appointed the..."
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "world-history-tree",
        "title": "6. World History",
        "topics": [
          {
            "id": "revolutions",
            "title": "Revolutions",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "French: 1789 (Liberty, Equality, Fraternity) | American: 1776 (July 4) | Russian: 1917 (Lenin/Bolsheviks)",
            "mindmap": {
              "root": "Revolutions",
              "branches": [
                {
                  "title": "American Revolution (1775 - 1783)",
                  "subnodes": [
                    "Causes",
                    "Boston Tea Party (1773)",
                    "Declaration of Independence"
                  ]
                },
                {
                  "title": "French Revolution (1789)",
                  "subnodes": [
                    "Causes",
                    "Storming of the Bastille (14 July 1789)",
                    "Motto"
                  ]
                },
                {
                  "title": "Russian Revolution (1917)",
                  "subnodes": [
                    "Overthrew the Tsarist autocracy",
                    "February Revolution",
                    "October (Bolshevik) Revolution"
                  ]
                },
                {
                  "title": "Industrial Revolution",
                  "subnodes": [
                    "Began in Britain in the mid-18th century",
                    "Key inventions",
                    "Impact"
                  ]
                }
              ]
            }
          },
          {
            "id": "world-war-i",
            "title": "World War I",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "WWI: 1914-1918 | Trigger: Sarajevo Assassination | End: Treaty of Versailles (1919)",
            "mindmap": {
              "root": "World War I",
              "branches": [
                {
                  "title": "Causes and Blocs",
                  "subnodes": [
                    "Causes",
                    "Immediate Cause",
                    "Alliances"
                  ]
                },
                {
                  "title": "Outcomes",
                  "subnodes": [
                    "Ended with Germany's surrender on 11 Nov 1918",
                    "Collpase of major empires",
                    "Created the League of Nations (1920) to prevent future wa..."
                  ]
                }
              ]
            }
          },
          {
            "id": "interwar-period",
            "title": "Interwar Period",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "League of Nations: 1920 | Great Depression: 1929 | Hitler Chancellor: 1933",
            "mindmap": {
              "root": "Interwar Period",
              "branches": [
                {
                  "title": "Major Developments",
                  "subnodes": [
                    "League of Nations",
                    "Great Depression (1929)",
                    "Rise of Dictators"
                  ]
                }
              ]
            }
          },
          {
            "id": "world-war-ii",
            "title": "World War II",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "WWII: 1939-1945 | Trigger: Poland Invasion | Atomic Bombs: Hiroshima (Aug 6), Nagasaki (Aug 9, 1945)",
            "mindmap": {
              "root": "World War II",
              "branches": [
                {
                  "title": "Causes and Outbreak",
                  "subnodes": [
                    "Causes",
                    "Immediate Cause",
                    "Alliances"
                  ]
                },
                {
                  "title": "Decisive Events & End",
                  "subnodes": [
                    "Pearl Harbor (7 Dec 1941)",
                    "Battle of Stalingrad (1942-43)",
                    "D-Day (6 June 1944)"
                  ]
                }
              ]
            }
          },
          {
            "id": "cold-war",
            "title": "Cold War",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "NATO: 1949 | Warsaw Pact: 1955 | Cuban Missile Crisis: 1962 | Collapse of USSR: 1991",
            "mindmap": {
              "root": "Cold War",
              "branches": [
                {
                  "title": "Ideological Rivalry",
                  "subnodes": [
                    "USA (Western Bloc)",
                    "USSR (Eastern Bloc)",
                    "Military Blocs"
                  ]
                },
                {
                  "title": "Decolonisation",
                  "subnodes": [
                    "The decline of European economic power post-WWII led to i...",
                    "Non-Aligned Movement (NAM)"
                  ]
                }
              ]
            }
          },
          {
            "id": "international-institutions",
            "title": "International Institutions",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "UN Founded: Oct 24, 1945 | Bretton Woods (1944): IMF & World Bank | WTO: Jan 1, 1995 (replaced GATT)",
            "mindmap": {
              "root": "International Institutions",
              "branches": [
                {
                  "title": "The United Nations (UN)",
                  "subnodes": [
                    "Established on 24 October 1945 (UN Day) to replace the Le...",
                    "Six Principal Organs",
                    "Security Council"
                  ]
                },
                {
                  "title": "Financial & Trade Bodies",
                  "subnodes": [
                    "Bretton Woods Twins (1944)",
                    "World Trade Organization (WTO)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "art-culture-heritage",
        "title": "7. Art, Culture & Heritage",
        "topics": [
          {
            "id": "architecture",
            "title": "Architecture",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Nagara: Shikhara | Dravida: Vimana & Gopurams | Vesara: Star-shaped/hybrid | Indo-Islamic: Arch & Dome",
            "mindmap": {
              "root": "Architecture",
              "branches": [
                {
                  "title": "Temple Architecture Styles",
                  "subnodes": [
                    "Nagara Style (North India)",
                    "Dravida Style (South India)",
                    "Vesara Style (Deccan)"
                  ]
                },
                {
                  "title": "Indo-Islamic & Mughal Architecture",
                  "subnodes": [
                    "Introduced the arch, dome, minaret, mortar, and geometric...",
                    "Delhi Sultanate",
                    "Mughal Architecture"
                  ]
                },
                {
                  "title": "Stupas, Caves & Monuments",
                  "subnodes": [
                    "Sanchi Stupa (MP)",
                    "Ajanta Caves",
                    "Ellora Caves"
                  ]
                }
              ]
            }
          },
          {
            "id": "paintings",
            "title": "Paintings",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Ajanta: Buddhist murals | Miniatures peak: Jahangir | Madhubani: Bihar | Warli: Maharashtra",
            "mindmap": {
              "root": "Paintings",
              "branches": [
                {
                  "title": "Murals & Miniatures",
                  "subnodes": [
                    "Mural Paintings",
                    "Miniature Paintings"
                  ]
                },
                {
                  "title": "Folk Paintings",
                  "subnodes": [
                    "Madhubani Paintings (Bihar)",
                    "Warli Paintings (Maharashtra)",
                    "Pattachitra (Odisha)"
                  ]
                }
              ]
            }
          },
          {
            "id": "dance-music",
            "title": "Dance & Music",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "8 Classical Dances: Bharatnatyam (TN), Kathak (UP), Kathakali/Mohiniyattam (KL), Kuchipudi (AP), Odissi (OR), Manipuri (MN), Sattriya (AS)",
            "mindmap": {
              "root": "Dance & Music",
              "branches": [
                {
                  "title": "Eight Classical Dances",
                  "subnodes": [
                    "Bharatnatyam",
                    "Kathak",
                    "Kathakali"
                  ]
                },
                {
                  "title": "Classical Music Systems",
                  "subnodes": [
                    "Hindustani Music (North India)",
                    "Carnatic Music (South India)"
                  ]
                }
              ]
            }
          },
          {
            "id": "literature",
            "title": "Literature",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Tripitakas: Pali (Buddhism) | Angas: Prakrit (Jainism) | Ashtadhyayi: Panini | Silappatikaram: Ilango Adigal",
            "mindmap": {
              "root": "Literature",
              "branches": [
                {
                  "title": "Ancient Scripts & Texts",
                  "subnodes": [
                    "The Vedas",
                    "Epics",
                    "Buddhist Canons (Tripitakas - in Pali)"
                  ]
                }
              ]
            }
          },
          {
            "id": "religion-festivals",
            "title": "Religion & Festivals",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "National Calendar: Saka Era (78 CE) | Onam: Kerala | Pongal: TN | Hornbill: Nagaland",
            "mindmap": {
              "root": "Religion & Festivals",
              "branches": [
                {
                  "title": "Six Orthodox Schools (Shad-Darshanas)",
                  "subnodes": [
                    "Samkhya (Sage Kapila)",
                    "Yoga (Sage Patanjali)",
                    "Nyaya (Sage Gautama)"
                  ]
                },
                {
                  "title": "Regional Festivals",
                  "subnodes": [
                    "Onam (Kerala)",
                    "Pongal (Tamil Nadu)",
                    "Bihu (Assam)"
                  ]
                }
              ]
            }
          },
          {
            "id": "heritage-sites",
            "title": "Heritage Sites",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "UNESCO count: 42 | Mixed: Khangchendzonga | Recent: Santiniketan, Hoysala temples",
            "mindmap": {
              "root": "Heritage Sites",
              "branches": [
                {
                  "title": "Classification",
                  "subnodes": [
                    "Cultural Sites (34)",
                    "Natural Sites (7)",
                    "Mixed Site (1)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "history-pyq-trends",
        "title": "PYQ Trend Analysis",
        "topics": [
          {
            "id": "history-pyq-trends-topic",
            "title": "History PYQ Trends (NDA/CDS)",
            "notes": "Detailed notes expanded in notes_extra_history.js",
            "formulas": "Acts: 1909 (Separate Electorates) | 1919 (Dyarchy) | 1935 (Provincial Autonomy)\nRevolt 1857: Bihar - Kunwar Singh | Kanpur - Nana Saheb | Jhansi - Laxmibai",
            "mindmap": {
              "root": "History PYQs",
              "branches": [
                {
                  "title": "Ancient",
                  "subnodes": [
                    "IVC Site Findings",
                    "4 Buddhist Councils",
                    "Ashokan Edicts"
                  ]
                },
                {
                  "title": "Medieval",
                  "subnodes": [
                    "Sultanate Adm terms",
                    "Mughal Land Revenue",
                    "Maratha Ashtapradhan"
                  ]
                },
                {
                  "title": "Modern",
                  "subnodes": [
                    "Acts (1909, 1919, 1935)",
                    "1857 Leaders & Centers",
                    "Tribal/Peasant Revolts"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "ancient_history",
        "title": "Ancient History",
        "topics": [
          {
            "id": "indus-valley-civilization",
            "title": "Indus Valley Civilization"
          },
          {
            "id": "vedic-age",
            "title": "Vedic Age"
          },
          {
            "id": "mahajanapadas",
            "title": "Mahajanapadas"
          },
          {
            "id": "buddhism-and-jainism",
            "title": "Buddhism and Jainism"
          },
          {
            "id": "mauryan-empire",
            "title": "Mauryan Empire"
          },
          {
            "id": "post-mauryan-period",
            "title": "Post-Mauryan Period"
          },
          {
            "id": "gupta-empire",
            "title": "Gupta Empire"
          },
          {
            "id": "harshavardhana-era",
            "title": "Harshavardhana Era"
          },
          {
            "id": "sangam-age--new-topic-",
            "title": "Sangam Age (New Topic)"
          }
        ]
      },
      {
        "id": "medieval_history",
        "title": "Medieval History",
        "topics": [
          {
            "id": "early-medieval-period",
            "title": "Early Medieval Period"
          },
          {
            "id": "delhi-sultanate",
            "title": "Delhi Sultanate"
          },
          {
            "id": "vijayanagara-and-bahmani-kingdoms",
            "title": "Vijayanagara and Bahmani Kingdoms"
          },
          {
            "id": "mughal-empire",
            "title": "Mughal Empire"
          },
          {
            "id": "maratha-empire-expanded",
            "title": "Maratha Empire (Expanded)"
          },
          {
            "id": "bhakti-and-sufi-movements",
            "title": "Bhakti and Sufi Movements"
          }
        ]
      },
      {
        "id": "modern_history",
        "title": "Modern History",
        "topics": [
          {
            "id": "advent-of-europeans",
            "title": "Advent of Europeans"
          },
          {
            "id": "british-expansion-in-india",
            "title": "British Expansion in India"
          },
          {
            "id": "revolt-of-1857",
            "title": "Revolt of 1857"
          },
          {
            "id": "socio-religious-reform-movements",
            "title": "Socio-Religious Reform Movements"
          },
          {
            "id": "indian-national-congress--pre-gandhian-",
            "title": "Indian National Congress (Pre-Gandhian)"
          },
          {
            "id": "gandhian-era",
            "title": "Gandhian Era"
          },
          {
            "id": "partition-and-independence",
            "title": "Partition and Independence"
          },
          {
            "id": "post-independence-consolidation-expanded",
            "title": "Post-Independence Consolidation (Expanded)"
          }
        ]
      }
    ]
  },
  "geography": {
    "title": "Geography (CDS/NDA)",
    "chapters": [
      {
        "id": "physical-geography",
        "title": "Physical & World Geography",
        "topics": [
          {
            "id": "universe-solar-system",
            "title": "The Universe & Solar System",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Universe & Solar System\nAge of Universe: ~13.8 billion years | Age of Earth: ~4.6 billion years\nLight Year: Distance light travels in 1 year = 9.46 × 10¹² km\nNearest star: Proxima Centauri (4.24 light-years from Sun)\n# Solar System Order\nPlanets (Mercury to Neptune): My Very Educated Mother Just Served Us Nachos\nDwarf Planets: Pluto, Eris, Ceres, Makemake, Haumea\nLargest planet: Jupiter | Smallest: Mercury\nHottest: Venus (greenhouse effect, ~465°C) | Coldest: Neptune\nFastest orbit: Mercury (88 days) | Slowest: Neptune (165 years)\n# Earth's Motions\nRotation: ~24 hours (causes day/night) | Revolution: ~365.25 days\nAxial tilt: 23.5° (causes seasons) | Perihelion (Jan): closest to Sun\nAphelion (July): farthest from Sun\n# Moon\nDistance from Earth: ~384,400 km | Revolution: ~27.3 days (Sidereal)\nLunar month (synodic): ~29.5 days | Same face always visible (synchronous rotation)",
            "mindmap": {
              "root": "Universe & Solar System",
              "branches": [
                {
                  "title": "Solar System Order",
                  "subnodes": [
                    "My Very Educated Mother Just Served Us Nachos",
                    "Largest: Jupiter",
                    "Smallest: Mercury",
                    "Hottest: Venus"
                  ]
                },
                {
                  "title": "Earth Basics",
                  "subnodes": [
                    "Rotation: 24 hrs (day/night)",
                    "Revolution: 365.25 days",
                    "Axial tilt: 23.5°",
                    "Perihelion: Jan, Aphelion: Jul"
                  ]
                },
                {
                  "title": "Moon",
                  "subnodes": [
                    "Distance: 384400 km",
                    "Synodic month: 29.5 days",
                    "Spring tide: New/Full moon",
                    "Neap tide: Quarter moon"
                  ]
                },
                {
                  "title": "Space Agencies",
                  "subnodes": [
                    "ISRO: India (Bengaluru)",
                    "NASA: USA",
                    "ESA: Europe",
                    "Roscosmos: Russia"
                  ]
                },
                {
                  "title": "Solar System",
                  "subnodes": [
                    "Inner planets",
                    "Outer planets",
                    "Asteroid belt"
                  ]
                }
              ]
            }
          },
          {
            "id": "earth-atmosphere",
            "title": "Earth Structure & Atmosphere",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Earths Structure\nRadius: ~6371 km | Circumference: ~40075 km\nLayers: Crust > Mantle > Outer Core > Inner Core\nCrust: Oceanic (5-10 km) | Continental (30-70 km)\n# Atmosphere Layers\nTroposphere: 0-12 km (weather, lapse rate 6.5°C per km)\nStratosphere: 12-50 km (ozone layer at 20-35 km)\nMesosphere: 50-80 km (meteors burn here)\nThermosphere: 80-700 km (Aurora Borealis, ISS)\nExosphere: 700 km+ (fades into space)\n# Composition of Atmosphere\nNitrogen: 78% | Oxygen: 21% | Argon: 0.9% | CO2: 0.04%\n# Key Numbers\nStandard Lapse Rate = 6.5°C per 1000 m\nOzone Layer: 20-35 km (Stratosphere)\nEquator: 0° | Tropics: 23.5°N/S | Arctic Circle: 66.5°N",
            "mindmap": {
              "root": "Earth & Atmosphere",
              "branches": [
                {
                  "title": "Earth Layers",
                  "subnodes": [
                    "Crust (5-70 km)",
                    "Mantle (silicate)",
                    "Outer Core (liquid Fe)",
                    "Inner Core (solid Fe)"
                  ]
                },
                {
                  "title": "Atmosphere",
                  "subnodes": [
                    "Troposphere (0-12 km)",
                    "Stratosphere (12-50 km)",
                    "Mesosphere (50-80 km)",
                    "Thermosphere (80-700 km)"
                  ]
                },
                {
                  "title": "Composition",
                  "subnodes": [
                    "N2: 78%",
                    "O2: 21%",
                    "Ar: 0.9%",
                    "CO2: 0.04%"
                  ]
                },
                {
                  "title": "Key Facts",
                  "subnodes": [
                    "Lapse rate 6.5°C/km",
                    "Ozone at 20-35 km",
                    "Equator 0°, Tropics 23.5°"
                  ]
                },
                {
                  "title": "Atmosphere Layers",
                  "subnodes": [
                    "Troposphere (0-12km)",
                    "Stratosphere (12-50km)",
                    "Mesosphere (50-80km)",
                    "Thermosphere (80-700km)"
                  ]
                },
                {
                  "title": "Key Numbers",
                  "subnodes": [
                    "Lapse rate 6.5°C/km",
                    "Ozone at 20-35km",
                    "Equator 0°, Tropics ±23.5°"
                  ]
                },
                {
                  "title": "Composition",
                  "subnodes": [
                    "N₂ 78%, O₂ 21%",
                    "Ar 0.9%, CO₂ 0.04%",
                    "Variable: H₂O vapor"
                  ]
                },
                {
                  "title": "Atmosphere",
                  "subnodes": [
                    "Troposphere",
                    "Stratosphere",
                    "Mesosphere",
                    "Ionosphere"
                  ]
                }
              ]
            }
          },
          {
            "id": "climatology-clouds",
            "title": "Climatology: Climatic Zones & Clouds",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Cloud Classification (Height)\nHigh clouds (>6000m): Cirrus (wispy), Cirrostratus, Cirrocumulus\nMiddle clouds (2000-6000m): Altocumulus, Altostratus\nLow clouds (<2000m): Stratus, Stratocumulus, Nimbostratus\nConvective (all heights): Cumulus (fair weather), Cumulonimbus (thunderstorm/anvil)\n# Rainfall Types\nConventional: Heated air rises → thunder, lightning (equatorial)\nOrographic: Moist air forced over mountains (Windward: heavy, Leeward: rain shadow)\nCyclonic/Frontal: Cold & warm air masses meet (temperate)\n# Climate Classification (Köppen Basics)\nA (Tropical): Hot, wet year-round (equatorial rainforests)\nB (Arid/Semi-arid): Low rainfall, high evaporation (deserts)\nC (Temperate): Mild winters (Mediterranean, subtropical)\nD (Continental): Cold winters, warm summers (boreal/taiga)\nE (Polar): Extremely cold, tundra and ice caps\n# India Seasons\nSW Monsoon: June-September | NE Monsoon: Oct-Dec (Tamil Nadu)\nRetreating Monsoon: Oct-Nov | Western Disturbances: Dec-Feb (NW India)",
            "mindmap": {
              "root": "Climatology & Clouds",
              "branches": [
                {
                  "title": "Cloud Types",
                  "subnodes": [
                    "High: Cirrus, Cirrostratus",
                    "Middle: Alto-cumulus/stratus",
                    "Low: Stratus, Nimbostratus",
                    "Vertical: Cumulonimbus"
                  ]
                },
                {
                  "title": "Rainfall Types",
                  "subnodes": [
                    "Conventional (Equatorial)",
                    "Orographic (Mountain)",
                    "Cyclonic/Frontal (Temperate)"
                  ]
                },
                {
                  "title": "Koppen Zones",
                  "subnodes": [
                    "A: Tropical",
                    "B: Arid (Desert)",
                    "C: Temperate",
                    "D: Continental, E: Polar"
                  ]
                },
                {
                  "title": "India Seasons",
                  "subnodes": [
                    "SW Monsoon: Jun-Sep",
                    "NE Monsoon: Oct-Dec",
                    "Western Disturbances: Dec-Feb"
                  ]
                },
                {
                  "title": "Clouds",
                  "subnodes": [
                    "Cirrus",
                    "Altocumulus",
                    "Stratus",
                    "Cumulonimbus"
                  ]
                }
              ]
            }
          },
          {
            "id": "geomorphology-rocks",
            "title": "Geomorphology: Rocks, Plate Tectonics & Volcanism",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Seismic Waves\nP-waves (Primary): Travel through solid+liquid, fastest, compressional\nS-waves (Secondary): Travel through solid only, transverse\nL-waves (Surface): Slowest, cause maximum damage\nShadow Zone: P-wave: 103°-143° | S-wave: >103° (liquid core)\n# Rock Classification\nIgneous: Formed by cooling of magma (Granite=intrusive, Basalt=extrusive)\nSedimentary: Formed by deposition (Sandstone, Limestone, Coal)\nMetamorphic: Transformed by heat/pressure (Marble from Limestone, Quartzite from Sandstone)\n# Plate Boundaries\nConvergent: Plates collide → mountains/trenches (Himalayas, Mariana)\nDivergent: Plates separate → mid-ocean ridges (Mid-Atlantic)\nTransform: Plates slide past → earthquakes (San Andreas)\n# Landforms\nFluvial: V-shaped valley, ox-bow lake, delta, flood plain\nGlacial: U-shaped valley, fjord, moraine, cirque\nKarst: Caves, stalagmites, stalactites (limestone dissolution)\nAeolian: Dunes, yardang (wind erosion in deserts)",
            "mindmap": {
              "root": "Geomorphology & Rocks",
              "branches": [
                {
                  "title": "Seismic Waves",
                  "subnodes": [
                    "P-waves (fastest, all media)",
                    "S-waves (solid only)",
                    "L-waves (surface, most damage)",
                    "Shadow zones"
                  ]
                },
                {
                  "title": "Rock Types",
                  "subnodes": [
                    "Igneous: Granite, Basalt",
                    "Sedimentary: Sandstone, Coal",
                    "Metamorphic: Marble, Quartzite"
                  ]
                },
                {
                  "title": "Plate Tectonics",
                  "subnodes": [
                    "Convergent: mountains",
                    "Divergent: ridges",
                    "Transform: earthquakes"
                  ]
                },
                {
                  "title": "Landforms",
                  "subnodes": [
                    "Fluvial: V-valley, delta",
                    "Glacial: U-valley, fjord",
                    "Karst: caves, stalagmites",
                    "Aeolian: dunes"
                  ]
                },
                {
                  "title": "Tectonic Plates",
                  "subnodes": [
                    "Major plates",
                    "Minor plates",
                    "Boundaries"
                  ]
                },
                {
                  "title": "Activity",
                  "subnodes": [
                    "Volcanism",
                    "Earthquakes (Shadow zones)"
                  ]
                }
              ]
            }
          },
          {
            "id": "world-geography-mountains",
            "title": "World Geography: Mountains, Forests & Rivers",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Highest Peaks\nEverest (Himalayas): 8,849m (Highest in Asia/World)\nAconcagua (Andes): 6,961m (Highest in S. America)\nDenali (Alaska): 6,190m (Highest in N. America)\nKilimanjaro: 5,895m (Highest in Africa)\nMont Blanc: 4,808m (Highest in Alps)\n# Major Ranges\nAndes (longest continental)\nHimalayas (highest)\nRockies (N. America)\nAlps (Europe)\n# Indian Peaks\nK2 (Karakoram): 8,611m\nKangchenjunga: 8,586m\nAnamudi: 2,695m (Highest in Peninsular India)",
            "mindmap": {
              "root": "World Mountains",
              "branches": [
                {
                  "title": "Major Ranges",
                  "subnodes": [
                    "Himalayas (Asia)",
                    "Andes (S. America)",
                    "Rockies (N. America)",
                    "Alps (Europe)"
                  ]
                },
                {
                  "title": "Highest Peaks",
                  "subnodes": [
                    "Everest (8849m)",
                    "Aconcagua (6961m)",
                    "Kilimanjaro (5895m)",
                    "Denali (6190m)"
                  ]
                },
                {
                  "title": "India - Himalayas",
                  "subnodes": [
                    "Himadri (Great)",
                    "Himachal (Middle)",
                    "Shiwalik (Outer)",
                    "Karakoram & Ladakh"
                  ]
                },
                {
                  "title": "Peninsular India",
                  "subnodes": [
                    "Aravalli (Oldest)",
                    "Western Ghats",
                    "Eastern Ghats",
                    "Vindhya & Satpura"
                  ]
                },
                {
                  "title": "Major Ranges",
                  "subnodes": [
                    "Himalayas (Asia)",
                    "Andes (South America)",
                    "Alps (Europe)",
                    "Rockies (North America)"
                  ]
                },
                {
                  "title": "India - Himalayas",
                  "subnodes": [
                    "Himadri (Great Himalayas)",
                    "Himachal (Middle)",
                    "Shiwalik (Outer)",
                    "Karakoram & Ladakh"
                  ]
                },
                {
                  "title": "India - Peninsular",
                  "subnodes": [
                    "Aravalli (oldest)",
                    "Vindhya & Satpura",
                    "Western Ghats (Sahyadri)",
                    "Eastern Ghats (discontinuous)"
                  ]
                },
                {
                  "title": "Forests",
                  "subnodes": [
                    "Evergreen",
                    "Deciduous",
                    "Coniferous"
                  ]
                },
                {
                  "title": "Rivers",
                  "subnodes": [
                    "Nile",
                    "Amazon",
                    "Yangtze",
                    "Mississippi"
                  ]
                }
              ]
            }
          },
          {
            "id": "world-geography-straits-deserts",
            "title": "Straits, Canals, Deserts & Seas",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "# Important Straits (Separates → Connects)\nStrait of Gibraltar: Europe/Africa → Atlantic/Mediterranean\nPalk Strait: India/Sri Lanka | Hormuz: Iran/Oman → Persian Gulf/Arabian Sea\nMalacca: Malaysia/Indonesia → Pacific/Indian Ocean\nBering Strait: Russia/Alaska → Arctic/Pacific\nSuez Canal: Red Sea ↔ Mediterranean (NOT a strait)\n# Important Deserts\nHot Deserts: Sahara (largest, Africa), Arabian, Thar (India), Atacama (driest)\nCold Deserts: Gobi (Mongolia/China), Ladakh (India), Antarctic (largest desert overall)\n# Key Facts\nThar Desert: Rajasthan, India | Sambhar Lake (saltwater) within Thar\nCold Desert in India: Ladakh, Spiti (Himachal Pradesh)\n# Passes (India)\nKarakoram Pass: J&K (highest motorable) | Zoji La: J&K (NH-1)\nRohtang Pass: Himachal | Shipki La: India-China (HP)\nNathu La: Sikkim-China | Bom Di La: Arunachal-China\nLipulekh: Uttarakhand | Diphu: Arunachal",
            "mindmap": {
              "root": "Straits & Deserts",
              "branches": [
                {
                  "title": "Important Straits",
                  "subnodes": [
                    "Gibraltar: Europe-Africa",
                    "Palk Strait: India-Lanka",
                    "Hormuz: Gulf entry",
                    "Malacca: SE Asia trade"
                  ]
                },
                {
                  "title": "Hot Deserts",
                  "subnodes": [
                    "Sahara (Africa, largest)",
                    "Arabian (W. Asia)",
                    "Thar (India, Rajasthan)",
                    "Atacama (driest)"
                  ]
                },
                {
                  "title": "Cold Deserts",
                  "subnodes": [
                    "Gobi (Mongolia/China)",
                    "Ladakh (India)",
                    "Antarctic (overall largest)"
                  ]
                },
                {
                  "title": "Mountain Passes (India)",
                  "subnodes": [
                    "Karakoram (J&K)",
                    "Rohtang (Himachal)",
                    "Nathu La (Sikkim)",
                    "Bom Di La (Arunachal)"
                  ]
                },
                {
                  "title": "Deserts",
                  "subnodes": [
                    "Sahara (Africa)",
                    "Atacama (driest)",
                    "Gobi (cold)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "geography-details",
        "title": "Indian Geography",
        "topics": [
          {
            "id": "syl-geog",
            "title": "Indian Geography (Rivers, Passes & Soils)",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "Dakshin Ganga: Godavari",
            "mindmap": {
              "root": "Indian Geography",
              "branches": [
                {
                  "title": "Himalayan Rivers",
                  "subnodes": [
                    "Ganga",
                    "Indus",
                    "Brahmaputra"
                  ]
                },
                {
                  "title": "Peninsular Rivers",
                  "subnodes": [
                    "Godavari",
                    "Krishna",
                    "Narmada"
                  ]
                },
                {
                  "title": "Soils",
                  "subnodes": [
                    "Alluvial",
                    "Black (Regur)",
                    "Laterite"
                  ]
                }
              ]
            }
          },
          {
            "id": "india-forests-wetlands",
            "title": "Forests, Trees & Wetlands of India",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Forest Types in India\nTropical Evergreen: Annual rainfall >200cm, Western Ghats, NE India (Rosewood, Ebony)\nTropical Deciduous (Monsoon): 100-200cm rainfall, most common (Teak, Sal, Sandalwood)\nThorn & Scrub: <75cm rainfall, Rajasthan, Gujarat (Babool, Khair)\nMontane: Himalayan foothills (Oak, Rhododendron, Deodar)\nMangrove: Coastal/deltaic (Sundarbans - largest mangrove; Sundari tree gives name)\n# Important Ramsar Wetlands (India)\nChilika Lake (Odisha) - 1st Ramsar site in India\nKeoladeo Ghana (Rajasthan) - Bharatpur Bird Sanctuary\nLoktak Lake (Manipur) - Floating Islands (Phumdis)\nWular Lake (J&K) - Largest freshwater lake in India\nSambhar Lake (Rajasthan) - Largest saltwater lake in India\nKolleru Lake (Andhra Pradesh)\n# Key Protected Areas\nProject Tiger (1973): 54 reserves | Project Elephant: 32 reserves\n# Forest Cover (approx)\nIndia: ~21.7% of geographical area is forest cover",
            "mindmap": {
              "root": "Forests & Wetlands",
              "branches": [
                {
                  "title": "Forest Types",
                  "subnodes": [
                    "Evergreen: >200cm rain",
                    "Deciduous: Teak, Sal",
                    "Thorn/Scrub: <75cm",
                    "Mangrove: coastal/delta"
                  ]
                },
                {
                  "title": "Ramsar Sites",
                  "subnodes": [
                    "Chilika (Odisha, 1st)",
                    "Keoladeo (Rajasthan)",
                    "Loktak (Manipur)",
                    "Wular (J&K)"
                  ]
                },
                {
                  "title": "Mangroves",
                  "subnodes": [
                    "Sundarbans (largest)",
                    "Sundari tree namesake",
                    "Bengal/Andaman/Gujarat"
                  ]
                },
                {
                  "title": "Wildlife Projects",
                  "subnodes": [
                    "Project Tiger (1973)",
                    "54 Tiger Reserves",
                    "Project Elephant",
                    "Crocodile Project"
                  ]
                },
                {
                  "title": "Wetlands",
                  "subnodes": [
                    "Ramsar Convention",
                    "Chilika",
                    "Keoladeo"
                  ]
                }
              ]
            }
          },
          {
            "id": "india-resources-farming",
            "title": "Mineral Resources & Types of Farming",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Mineral Distribution\nIron Ore: Jharkhand, Odisha (Singhbhum), Chhattisgarh (Bailadila)\nCoal: Jharkhand (Jharia - largest), West Bengal (Raniganj), MP, Odisha\nPetroleum: Assam (oldest), Mumbai High (largest offshore), Rajasthan\nMica: Jharkhand (leading), Rajasthan, Andhra Pradesh\nCopper: Jharkhand (Singhbhum), Rajasthan (Khetri)\nBauxite: Odisha, Jharkhand, MP, Gujarat\n# Agriculture - Key Crops\nKharif (June-Nov): Rice, Maize, Cotton, Jute, Bajra, Jowar, Groundnut\nRabi (Nov-April): Wheat, Barley, Mustard, Peas, Gram\nZaid (Summer): Cucumber, Watermelon\n# Agricultural Revolutions\nGreen (Wheat): 1960s, Punjab/Haryana | Blue (Fish): Inland fish\nWhite (Milk): Operation Flood, Amul | Yellow (Oilseeds)\nPink (Shrimp/Meat) | Golden (Fruits/Honey) | Silver (Eggs)\n# Leading States\nRice: WB, UP, Andhra | Wheat: UP, Punjab, Haryana\nCotton: Gujarat, Maharashtra | Jute: WB (90%+)",
            "mindmap": {
              "root": "Resources & Farming",
              "branches": [
                {
                  "title": "Minerals",
                  "subnodes": [
                    "Iron: Jharkhand/Odisha",
                    "Coal: Jharia (largest)",
                    "Petroleum: Mumbai High",
                    "Mica: Jharkhand"
                  ]
                },
                {
                  "title": "Crops",
                  "subnodes": [
                    "Kharif: Rice, Cotton (Jun-Nov)",
                    "Rabi: Wheat, Mustard (Nov-Apr)",
                    "Zaid: Summer crops"
                  ]
                },
                {
                  "title": "Revolutions",
                  "subnodes": [
                    "Green: Wheat",
                    "White: Milk (Amul)",
                    "Blue: Fish",
                    "Yellow: Oilseeds"
                  ]
                },
                {
                  "title": "Leading States",
                  "subnodes": [
                    "Rice: WB, UP",
                    "Wheat: UP, Punjab",
                    "Cotton: Gujarat",
                    "Jute: West Bengal"
                  ]
                },
                {
                  "title": "Farming",
                  "subnodes": [
                    "Shifting",
                    "Intensive",
                    "Subsistence",
                    "Jhuming"
                  ]
                }
              ]
            }
          },
          {
            "id": "india-transport-routes",
            "title": "Transport Routes: Highways & Waterways",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# National Highways\nLongest: NH-44 (Srinagar to Kanyakumari, ~4000km, formerly NH-7)\nNH-1: Delhi to Amritsar (renamed NH-44 in new system)\nGolden Quadrilateral: Delhi-Mumbai-Chennai-Kolkata (5846 km)\n# Waterways\nNW-1: Ganga (Allahabad to Haldia) - longest\nNW-2: Brahmaputra (Dhubri to Sadiya)\nNW-3: West Coast Canal (Kerala)\n# Ports\nMajor Ports (12): Mumbai (largest), JNPT (busiest container), Chennai, Kolkata\nEnnore (Kamarajar), Kandla (largest by cargo volume), Vishakhapatnam (deepest)\n# Railways\nLargest employer in India | ~67,000+ route km\nGauge: Broad (1676mm) standard in India\n# Airways\nIATA codes: DEL (Delhi), BOM (Mumbai), MAA (Chennai), BLR (Bengaluru)\nBusiest: Indira Gandhi International (Delhi)",
            "mindmap": {
              "root": "Transport Routes",
              "branches": [
                {
                  "title": "Highways",
                  "subnodes": [
                    "NH-44: Srinagar-Kanyakumari (longest)",
                    "Golden Quadrilateral (5846km)",
                    "N-S, E-W Corridor",
                    "Bharatmala Project"
                  ]
                },
                {
                  "title": "Waterways",
                  "subnodes": [
                    "NW-1: Ganga (longest)",
                    "NW-2: Brahmaputra",
                    "NW-3: West Coast Canal",
                    "Sagarmala Project"
                  ]
                },
                {
                  "title": "Ports",
                  "subnodes": [
                    "Mumbai (largest)",
                    "JNPT (busiest containers)",
                    "Kandla (largest by cargo)",
                    "Vizag (deepest)"
                  ]
                },
                {
                  "title": "Railways",
                  "subnodes": [
                    "~67000 route km",
                    "Broad gauge standard",
                    "Dedicated Freight Corridors",
                    "Bullet train planned"
                  ]
                },
                {
                  "title": "Waterways",
                  "subnodes": [
                    "NW1 (Ganga)",
                    "NW2 (Brahmaputra)"
                  ]
                }
              ]
            }
          },
          {
            "id": "india-national-parks",
            "title": "National Parks of India (Map Guide)",
            "notes": "Detailed notes expanded in notes_extra_4.js",
            "formulas": "# Famous National Parks & Wildlife Sanctuaries\nJim Corbett (Uttarakhand): 1st NP in India (1936), Tigers, Elephants\nKaziranga (Assam): 70%+ world's one-horned rhino, UNESCO\nSundarbans (WB/Bangladesh): Largest mangrove, Royal Bengal Tiger, UNESCO\nGir (Gujarat): Only Asiatic Lions in wild\nRanthambore (Rajasthan): Tiger reserve, historic fort\nSariska (Rajasthan): Tiger reserve\nBandipur (Karnataka): Tigers, Elephants, WHS\nPeriyar (Kerala): Elephants, in Cardamom Hills\nKeoladeo/Bharatpur (Rajasthan): Bird sanctuary, UNESCO, Siberian Cranes\nValley of Flowers (Uttarakhand): UNESCO, alpine flowers\nManas (Assam): UNESCO, Project Tiger & Elephant\nNamdapha (Arunachal): Largest NP in Northeast\n# Project Tiger\nLaunched: 1973 | Sites: 54 | High density: Madhya Pradesh\n# Conservation Status (IUCN)\nEX (Extinct) > EW > CR (Critically Endangered) > EN > VU > NT > LC",
            "mindmap": {
              "root": "National Parks",
              "branches": [
                {
                  "title": "UNESCO World Heritage",
                  "subnodes": [
                    "Kaziranga (Rhino)",
                    "Sundarbans (Tiger)",
                    "Keoladeo (Birds)",
                    "Valley of Flowers",
                    "Manas (Assam)"
                  ]
                },
                {
                  "title": "Big Cats",
                  "subnodes": [
                    "Jim Corbett (1st NP)",
                    "Ranthambore (Tigers)",
                    "Gir (Asiatic Lions)",
                    "Sariska (Tigers)"
                  ]
                },
                {
                  "title": "Unique Wildlife",
                  "subnodes": [
                    "Kaziranga: Rhinos",
                    "Periyar: Elephants",
                    "Namdapha: Snow Leopard"
                  ]
                },
                {
                  "title": "Projects",
                  "subnodes": [
                    "Project Tiger (1973)",
                    "Project Elephant (1992)",
                    "54 Tiger Reserves"
                  ]
                },
                {
                  "title": "East/Northeast",
                  "subnodes": [
                    "Kaziranga",
                    "Sundarbans"
                  ]
                },
                {
                  "title": "West/Central",
                  "subnodes": [
                    "Gir",
                    "Kanha",
                    "Ranthambore"
                  ]
                },
                {
                  "title": "South",
                  "subnodes": [
                    "Bandipur",
                    "Silent Valley"
                  ]
                }
              ]
            }
          },
          {
            "id": "mapping-borders-capitals",
            "title": "Borders, Capitals & Mapping",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Borders: Bangladesh (longest), Afghanistan (shortest)\nLines: Radcliffe (PK/BD), MacMahon (CN), Durand (AF)\nStrategic: Malacca, Hormuz, Hambantota",
            "mindmap": {
              "root": "Mapping & Borders",
              "branches": [
                {
                  "title": "Borders",
                  "subnodes": [
                    "Radcliffe (Pak/BD)",
                    "MacMahon (China)",
                    "Durand (Afghan)"
                  ]
                },
                {
                  "title": "Capitals",
                  "subnodes": [
                    "Dhaka (Taka)",
                    "Kabul (Afghani)",
                    "Colombo (Rupee)"
                  ]
                },
                {
                  "title": "Strategic",
                  "subnodes": [
                    "Diego Garcia",
                    "Chabahar Port",
                    "Hambantota"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "industrics-geopolitics",
        "title": "Industries & Geopolitics",
        "topics": [
          {
            "id": "geog-industries",
            "title": "Major Industries & Industrial Corridors of India",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "TISCO 1907: First Steel Plant\nDMIC: Delhi-Mumbai Industrial Corridor\nChennai = Detroit of India\nBengaluru = Silicon Valley of India",
            "mindmap": {
              "root": "Industries",
              "branches": [
                {
                  "title": "Iron & Steel",
                  "subnodes": [
                    "Jamshedpur",
                    "Bhilai",
                    "Rourkela"
                  ]
                },
                {
                  "title": "Textiles",
                  "subnodes": [
                    "Mumbai",
                    "Ahmedabad",
                    "Coimbatore"
                  ]
                },
                {
                  "title": "Corridors",
                  "subnodes": [
                    "DMIC",
                    "CBIC",
                    "AKIC"
                  ]
                },
                {
                  "title": "SEZs",
                  "subnodes": [
                    "Kandla (first)",
                    "SEEPZ",
                    "Noida"
                  ]
                }
              ]
            }
          },
          {
            "id": "geog-geopolitics",
            "title": "Geopolitical Flashpoints & Indo-Pacific",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "LAC: ~3488 km (3 sectors)\nMcMahon Line: 1914\nSAGAR: Security And Growth for All in the Region\nSiliguri Corridor: 22 km",
            "mindmap": {
              "root": "Geopolitics",
              "branches": [
                {
                  "title": "India-China LAC",
                  "subnodes": [
                    "Western (Aksai Chin)",
                    "Eastern (McMahon)",
                    "Galwan 2020"
                  ]
                },
                {
                  "title": "Indo-Pacific",
                  "subnodes": [
                    "Quad",
                    "AUKUS",
                    "SAGAR",
                    "Malacca Dilemma"
                  ]
                },
                {
                  "title": "Flashpoints",
                  "subnodes": [
                    "Siliguri Corridor",
                    "LoC",
                    "BRI/CPEC",
                    "String of Pearls"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "geography-pyq-trends",
        "title": "PYQ Trend Analysis",
        "topics": [
          {
            "id": "geography-pyq-trends-topic",
            "title": "Geography PYQ Trends (NDA/CDS)",
            "notes": "\n              <h3> Geography PYQ Analysis & Recurring Themes</h3>\n              <p>Analysis of UPSC GAT Geography section indicates these recurring high-yield themes:</p>\n              \n              <h3>1. Physical Geography & Climatology</h3>\n              <ul>\n                <li>**Atmospheric Layers:** Repeatedly tested (e.g., *Troposphere* has all weather phenomena, *Stratosphere* has ozone layer and is ideal for flying aircraft, *Ionosphere* reflects radio waves).</li>\n                <li>**Winds:** Match-the-following questions on local winds (e.g., *Chinook* in USA, *Fohn* in Alps, *Harmattan* in West Africa, *Sirocco* in Sahara).</li>\n                <li>**Ocean Currents:** Distinguishing between warm and cold currents (e.g., *Gulf Stream* and *Kuroshio* are warm; *Labrador*, *Canary*, and *Benguela* are cold). Cold current locations are highly tested.</li>\n              </ul>\n              \n              <h3>2. Indian Geography (Highest Questions)</h3>\n              <ul>\n                <li>**River Systems:** East-flowing (Godavari, Krishna, Cauvery) vs. West-flowing (Narmada, Tapi, Mahi, Sabarmati) rivers. Tributaries are a favorite UPSC topic (e.g., *Chambal*, *Betwa*, *Sone* as tributaries of Yamuna/Ganga).</li>\n                <li>**Mountain Passes:** Location of Himalayan passes (e.g., *Zoji La* in Ladakh, *Shipki La* in Himachal, *Nathu La* in Sikkim, *Lipulekh* in Uttarakhand).</li>\n                <li>**Soils of India:** Black Soil (also called *Regur* soil, excellent for cotton, self-ploughing property) and Laterite Soil (formed by leaching, rich in iron oxides, found in Western Ghats and Northeast).</li>\n                <li>**Latitudes and Longitudes:** States through which the *Tropic of Cancer* passes (8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram) and the *Indian Standard Meridian* (82°30' E, passing through 5 states: UP, MP, Chhattisgarh, Odisha, Andhra Pradesh).</li>\n              </ul>\n            ",
            "formulas": "Tropic of Cancer: 8 States (Guj, Raj, MP, Cg, Jh, WB, TR, MZ)\\nStandard Meridian: 5 States (UP, MP, Cg, OD, AP)\\nRegur: Black Soil | Laterite: Leached Iron-rich",
            "mindmap": {
              "root": "Geography PYQs",
              "branches": [
                {
                  "title": "Physical & World",
                  "subnodes": [
                    "Atmosphere Layers",
                    "Local Winds (Chinook, etc.)",
                    "Warm/Cold Ocean Currents"
                  ]
                },
                {
                  "title": "Indian River Systems",
                  "subnodes": [
                    "East vs West flowing",
                    "Major Tributaries (Chambal, etc.)",
                    "Dams & Rivers"
                  ]
                },
                {
                  "title": "Physiography & Soils",
                  "subnodes": [
                    "Himalayan Passes",
                    "Tropic of Cancer states",
                    "Black vs Laterite Soil"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "economics": {
    "title": "Economics (CDS/NDA)",
    "chapters": [
      {
        "id": "economics-basics",
        "title": "Introduction to Economics",
        "topics": [
          {
            "id": "econ-concepts",
            "title": "Core Economic Concepts & Sectors",
            "notes": "\n              <h3>1. Sectors of the Economy</h3>\n              <ul>\n                <li>**Primary Sector**: Direct extraction of natural resources. Examples: Agriculture, forestry, mining, fishing.</li>\n                <li>**Secondary Sector**: Manufacturing and processing. Examples: Factories, construction, car assembly.</li>\n                <li>**Tertiary Sector**: Service sector. Examples: Banking, IT, education, tourism, military.</li>\n                <li>**Quaternary Sector**: Knowledge and research. Examples: R&D, information management.</li>\n              </ul>\n              \n              <h3>2. National Income Metrics</h3>\n              <ul>\n                <li>**GDP (Gross Domestic Product)**: Total monetary value of all finished goods and services produced within a country's borders in a specific time period.</li>\n                <li>**GNP (Gross National Product)**: GDP + Net Factor Income from Abroad (NFIA). Measures output of citizens globally.</li>\n                <li>**Real vs Nominal GDP**: Nominal is calculated at current market prices, whereas Real is adjusted for inflation (constant base year prices).</li>\n              </ul>\n            ",
            "formulas": "GNP = GDP + NFIA\nPrimary = Agriculture | Secondary = Industry | Tertiary = Services\nReal GDP = Nominal GDP / GDP Deflator",
            "mindmap": {
              "root": "Intro Econ",
              "branches": [
                {
                  "title": "Sectors",
                  "subnodes": [
                    "Primary: Raw Material",
                    "Secondary: Factories",
                    "Tertiary: Services"
                  ]
                },
                {
                  "title": "National Income",
                  "subnodes": [
                    "GDP: Inside borders",
                    "GNP: Citizens only",
                    "Real GDP: Inflation adjusted"
                  ]
                }
              ]
            }
          },
          {
            "id": "econ-poverty-employment",
            "title": "Poverty, Employment & Agriculture",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Poverty lines: Tendulkar (2009), Rangarajan (2014)\nUnemployment: Disguised (zero marginal productivity - agriculture), Seasonal, Structural\nCrops: Kharif (monsoon), Rabi (winter), Zaid (summer)\nGreen Rev: 1966-67, M.S. Swaminathan",
            "mindmap": {
              "root": "Poverty & Jobs",
              "branches": [
                {
                  "title": "Poverty Lines",
                  "subnodes": [
                    "Tendulkar (MPCE)",
                    "Rangarajan",
                    "Calorie standard (Alagh)"
                  ]
                },
                {
                  "title": "Unemployment",
                  "subnodes": [
                    "Disguised (farming)",
                    "Structural (skills gap)",
                    "Frictional (transition)"
                  ]
                },
                {
                  "title": "Agriculture",
                  "subnodes": [
                    "Kharif: rice, cotton",
                    "Rabi: wheat, mustard",
                    "Green Revolution"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "monetary-fiscal",
        "title": "Monetary & Fiscal System",
        "topics": [
          {
            "id": "rbi-monetary-policy",
            "title": "RBI & Monetary Policy Tools",
            "notes": "\n              <h3>1. Reserve Bank of India (RBI)</h3>\n              <p>Established on April 1, 1935 under the RBI Act (nationalized in 1949). Acts as the banker's bank and issues currency.</p>\n              \n              <h3>2. Monetary Policy Committee (MPC) tools</h3>\n              <ul>\n                <li>**Quantitative Tools** (Control money volume):\n                  <ul>\n                    <li>**Repo Rate**: The interest rate at which RBI lends money to commercial banks for short terms. Lowering Repo rate increases inflation.</li>\n                    <li>**Reverse Repo Rate**: The rate at which banks park surplus funds with RBI.</li>\n                    <li>**Cash Reserve Ratio (CRR)**: Percentage of deposits banks must keep as cash with RBI. No interest earned on this.</li>\n                    <li>**Statutory Liquidity Ratio (SLR)**: Percentage of deposits banks must keep in liquid assets (Gold, Govt Securities) with themselves.</li>\n                  </ul>\n                </li>\n                <li>**Qualitative Tools**: Marginal requirements, moral suasion, credit rationing.</li>\n              </ul>\n            ",
            "formulas": "Repo Rate = Lending to Banks\nCRR = Cash with RBI\nSLR = Liquid assets with Bank\nReverse Repo < Repo Rate always",
            "mindmap": {
              "root": "Monetary Tools",
              "branches": [
                {
                  "title": "RBI Role",
                  "subnodes": [
                    "Est: April 1, 1935",
                    "Nationalized: 1949",
                    "Issuer of currency"
                  ]
                },
                {
                  "title": "MPC Rates",
                  "subnodes": [
                    "Repo: Short term loans",
                    "Reverse Repo: parking funds",
                    "CRR/SLR: Reserve ratios"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "budget-trade-reforms",
        "title": "Budgets, Trade & Economic Reforms",
        "topics": [
          {
            "id": "econ-budget-fiscal",
            "title": "Government Budget, GST & Fiscal Policy",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "FD = Total Exp - Total Revenue (excl borrowings)\nGST: 101st Amendment (Jul 2017)\n4 slabs: 5%, 12%, 18%, 28%\nFRBM Act 2003",
            "mindmap": {
              "root": "Budget & Fiscal",
              "branches": [
                {
                  "title": "Revenue Budget",
                  "subnodes": [
                    "Tax Revenue",
                    "Non-Tax Revenue",
                    "Revenue Expenditure"
                  ]
                },
                {
                  "title": "Capital Budget",
                  "subnodes": [
                    "Borrowings",
                    "Capital Expenditure"
                  ]
                },
                {
                  "title": "GST",
                  "subnodes": [
                    "CGST+SGST",
                    "IGST",
                    "Council (Art 279A)"
                  ]
                },
                {
                  "title": "Deficits",
                  "subnodes": [
                    "Fiscal",
                    "Revenue",
                    "Primary"
                  ]
                }
              ]
            }
          },
          {
            "id": "econ-trade-bop",
            "title": "Trade Policy & Balance of Payments",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "BoP = Current A/C + Capital A/C\nCAD: India typically deficit (oil imports)\nFDI: Long-term, FPI: Short-term\nWTO: Founded 1995",
            "mindmap": {
              "root": "Trade & BoP",
              "branches": [
                {
                  "title": "Current Account",
                  "subnodes": [
                    "Trade Balance",
                    "Services",
                    "Remittances"
                  ]
                },
                {
                  "title": "Capital Account",
                  "subnodes": [
                    "FDI",
                    "FPI",
                    "ECB",
                    "NRI Deposits"
                  ]
                },
                {
                  "title": "Trade Policy",
                  "subnodes": [
                    "FTP 2023",
                    "SEZs",
                    "WTO"
                  ]
                }
              ]
            }
          },
          {
            "id": "econ-reforms",
            "title": "LPG Reforms, NITI Aayog & Financial Institutions",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "1991 LPG: Liberalization, Privatization, Globalization\nNITI Aayog: Replaced Planning Commission (2015)\nIBC 2016: 330-day resolution\nSEBI 1992",
            "mindmap": {
              "root": "Economic Reforms",
              "branches": [
                {
                  "title": "1991 Reforms",
                  "subnodes": [
                    "Liberalization",
                    "Privatization",
                    "Globalization"
                  ]
                },
                {
                  "title": "NITI Aayog",
                  "subnodes": [
                    "AIM",
                    "SDG Index",
                    "Aspirational Districts"
                  ]
                },
                {
                  "title": "Regulators",
                  "subnodes": [
                    "SEBI",
                    "IRDA",
                    "PFRDA",
                    "IBC"
                  ]
                }
              ]
            }
          },
          {
            "id": "five-year-plans",
            "title": "Economic Planning & Five-Year Plans",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "1st Plan (1951-56): Harrod-Domar (agriculture)\n2nd Plan (1956-61): Mahalanobis (heavy industry)\n3rd Plan (1961-66): Gadgil (wars)\n5th Plan (1974-78): Garibi Hatao\n12th Plan (2012-17): last plan\nNITI Aayog: 1 Jan 2015",
            "mindmap": {
              "root": "Planning & FYPs",
              "branches": [
                {
                  "title": "Early Plans",
                  "subnodes": [
                    "1st: Harrod-Domar",
                    "2nd: Mahalanobis",
                    "3rd: Gadgil"
                  ]
                },
                {
                  "title": "Later Plans",
                  "subnodes": [
                    "4th: Bank nationalization",
                    "5th: Garibi Hatao",
                    "12th: Final plan"
                  ]
                },
                {
                  "title": "NITI Aayog",
                  "subnodes": [
                    "Cooperative Federalism",
                    "Bottom-up approach"
                  ]
                }
              ]
            }
          },
          {
            "id": "external-sector-institutions",
            "title": "IMF, WTO & Balance of Payments",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "IMF: BoP crisis support\nWTO: Replaced GATT (1995)\nBoP: Current Account (deficit in India) + Capital Account\nForex: FCA + Gold + SDR (Paper Gold) + RTP",
            "mindmap": {
              "root": "External Sector",
              "branches": [
                {
                  "title": "Institutions",
                  "subnodes": [
                    "IMF: BoP support",
                    "World Bank: Development",
                    "WTO: Trade rules"
                  ]
                },
                {
                  "title": "BoP",
                  "subnodes": [
                    "Current: goods, services, remittances",
                    "Capital: FDI, FPI, borrowings"
                  ]
                },
                {
                  "title": "Forex Reserves",
                  "subnodes": [
                    "FCA",
                    "Gold",
                    "SDR (Paper Gold)",
                    "RTP"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "govt-schemes",
        "title": "Government Schemes & Welfare Programs",
        "topics": [
          {
            "id": "econ-govt-schemes",
            "title": "Key Welfare Schemes & Financial Inclusion",
            "notes": "Detailed notes expanded in notes_extra_economics.js",
            "formulas": "PMJDY (2014) - Financial Inclusion\nPM MUDRA Yojana - Micro loans\nAPY (2015) - Pension for unorganized sector\nPM-KISAN - Direct income support\nMGNREGA (2006) - Guaranteed wage employment\nPMUY (2016) - Free LPG connections",
            "mindmap": {
              "root": "Govt Schemes",
              "branches": [
                {
                  "title": "Financial Inclusion",
                  "subnodes": [
                    "PM Jan Dhan Yojana (PMJDY)",
                    "PM MUDRA Yojana",
                    "Atal Pension Yojana (APY)"
                  ]
                },
                {
                  "title": "Social Security",
                  "subnodes": [
                    "PM Jeevan Jyoti Bima (PMJJBY)",
                    "PM Suraksha Bima (PMSBY)",
                    "MGNREGA (100 days job)"
                  ]
                },
                {
                  "title": "Agriculture & Rural",
                  "subnodes": [
                    "PM-KISAN (6000/yr)",
                    "PM Fasal Bima (PMFBY)",
                    "PMAY (Housing)"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "physics": {
    "title": "Physics (NDA/CDS)",
    "chapters": [
      {
        "id": "physics-optics",
        "title": "Optics & Light",
        "topics": [
          {
            "id": "reflection-refraction",
            "title": "Reflection, Refraction & Lenses",
            "notes": "\n              <h3>1. Laws of Reflection & Mirror Formulas</h3>\n              <ul>\n                <li>First Law: The incident ray, the reflected ray, and the normal at the point of incidence all lie in the same plane.</li>\n                <li>Second Law: The angle of incidence is equal to the angle of reflection (i = r).</li>\n                <li>**Mirror Formula**: **1/f = 1/v + 1/u**\n                  <ul>\n                    <li>u = object distance (always negative).</li>\n                    <li>v = image distance (positive for virtual, negative for real).</li>\n                    <li>f = focal length (negative for concave, positive for convex).</li>\n                  </ul>\n                </li>\n                <li>Linear Magnification: **m = -v/u = hᵢ/hₒ** (m is negative for real and inverted, positive for virtual and erect).</li>\n              </ul>\n              \n              <h3>2. Refraction & Lens Formulas</h3>\n              <ul>\n                <li>**Snell's Law**: The ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant: **sin i / sin r = constant = ₁μ₂ = μ₂/μ₁**.</li>\n                <li>Absolute Refractive Index: **μ = c / v** (where c is speed of light in vacuum, v is speed in medium).</li>\n                <li>**Lens Formula**: **1/f = 1/v - 1/u**</li>\n                <li>Linear Magnification (Lens): **m = v/u = hᵢ/hₒ**</li>\n                <li>**Power of a Lens (P)**: Reciprocal of focal length in meters. **P = 1 / f(in m)**. Unit: **Dioptre (D)**.\n                  <ul>\n                    <li>Convex lens: f is positive ⇒ P is positive.</li>\n                    <li>Concave lens: f is negative ⇒ P is negative.</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>3. Key Optical Phenomena</h3>\n              <ul>\n                <li>**Total Internal Reflection (TIR)**: Occurs when light travels from denser to rarer medium and the angle of incidence is greater than the critical angle (θ_c).\n                  <ul>\n                    <li>Formula: **sin θ_c = 1/μ**</li>\n                    <li>Applications: Optical fibers, sparkling of diamonds, mirages in deserts, endoscopes.</li>\n                  </ul>\n                </li>\n                <li>**Dispersion**: Splitting of white light into constituent colors (VIBGYOR) when passing through a prism due to different speeds of different wavelengths in glass. Red deviates least, violet deviates most.</li>\n                <li>**Scattering of Light**: Scattering intensity is inversely proportional to the fourth power of wavelength (Rayleigh Scattering: **I ∝ 1/λ⁴**). Explains why sky is blue (blue has short wavelength, scatters more) and sun appears red at sunrise/sunset.</li>\n              </ul>\n            ",
            "formulas": "Mirror Formula: 1/f = 1/v + 1/u\nLens Formula: 1/f = 1/v - 1/u\nLens Power: P = 1/f (dioptres)\nRefractive Index: n = c/v",
            "mindmap": {
              "root": "Optics & Light",
              "branches": [
                {
                  "title": "Reflection",
                  "subnodes": [
                    "Law: i = r",
                    "Mirror: 1/f = 1/v + 1/u",
                    "Concave f(-) / Convex f(+)"
                  ]
                },
                {
                  "title": "Refraction",
                  "subnodes": [
                    "Snell: sin i / sin r = μ",
                    "Lens: 1/f = 1/v - 1/u",
                    "Power P = 1/f (Dioptres)"
                  ]
                },
                {
                  "title": "TIR",
                  "subnodes": [
                    "Denser to rarer travel",
                    "Incidence > Critical angle",
                    "Fibers & Diamonds"
                  ]
                },
                {
                  "title": "Wave Phenomena",
                  "subnodes": [
                    "Dispersion: Prism VIBGYOR",
                    "Scattering: Rayleigh 1/λ⁴",
                    "Blue sky & Red sunset"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "physics-mechanics",
        "title": "Mechanics & Motion",
        "topics": [
          {
            "id": "newtons-laws",
            "title": "Newton's Laws of Motion",
            "notes": "\n              <h3>1. Newton's First Law (Law of Inertia)</h3>\n              <ul>\n                <li>A body continues in its state of rest or uniform motion in a straight line unless compelled by an external unbalanced force.</li>\n                <li>Inertia is the inherent property of a body to resist change. Measured by **mass** (greater mass = greater inertia).</li>\n                <li>Types: Inertia of Rest (passengers fall backward when bus starts), Inertia of Motion (passengers fall forward when brakes applied), Inertia of Direction (umbrella protects from rain).</li>\n              </ul>\n              \n              <h3>2. Newton's Second Law (Law of Force)</h3>\n              <ul>\n                <li>The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force.</li>\n                <li>Momentum: **p = mv** (vector quantity, unit: kg m/s).</li>\n                <li>Mathematical derivation: F = dp/dt = d(mv)/dt = m(dv/dt) = **ma** (Force = mass × acceleration).</li>\n                <li>Unit of Force: Newton (N). 1 N = 1 kg m/s² = 10⁵ Dynes.</li>\n              </ul>\n              \n              <h3>3. Newton's Third Law (Law of Action-Reaction)</h3>\n              <ul>\n                <li>To every action, there is always an equal and opposite reaction. Action and reaction act on **two different bodies**.</li>\n                <li>Examples: Recoil of a gun (backward force on shoulder), swimming (pushing water backward), flight of rockets (exhaust gases push downward, rocket moves up).</li>\n              </ul>\n              \n              <h3>4. Friction and Momentum Conservation</h3>\n              <ul>\n                <li>**Law of Conservation of Linear Momentum**: If no external force acts on a system, the total linear momentum remains constant. (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).</li>\n                <li>**Friction**: The opposing force that comes into play when a body moves or tries to move over another surface.\n                  <ul>\n                    <li>Formula: **f = μN** (where μ is coefficient of friction, N is normal reaction).</li>\n                    <li>Order of friction: **Static Friction > Limiting Friction > Kinetic Friction > Rolling Friction**. Rolling friction is the smallest.</li>\n                  </ul>\n                </li>\n              </ul>\n            ",
            "formulas": "F = ma\nMomentum: p = mv\nFriction: f = μN\nEquations of Motion: v = u + at, s = ut + 0.5at², v² - u² = 2as",
            "mindmap": {
              "root": "Laws of Motion",
              "branches": [
                {
                  "title": "1st Law (Inertia)",
                  "subnodes": [
                    "Resists state change",
                    "Inertia of rest/motion",
                    "Inertia proportional to mass"
                  ]
                },
                {
                  "title": "2nd Law (Force)",
                  "subnodes": [
                    "F = dp/dt rate",
                    "F = ma derivative",
                    "1 Newton = 10⁵ Dyne"
                  ]
                },
                {
                  "title": "3rd Law (Action)",
                  "subnodes": [
                    "Equal & opposite force",
                    "Acts on different bodies",
                    "Guns recoil & Rockets"
                  ]
                },
                {
                  "title": "Friction & Momentum",
                  "subnodes": [
                    "f = μN equation",
                    "Static > Kinetic > Rolling",
                    "Conservation m₁u₁=m₁v₁"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "energy-power-mechanics",
        "title": "Energy & Gravitation",
        "topics": [
          {
            "id": "syl-exercises",
            "title": "Work, Power, Energy & Gravitation",
            "notes": "\n              <h3>1. Work, Energy and Power</h3>\n              <ul>\n                <li>**Work (W)**: W = F · s · cos θ. (Scalar quantity, unit: Joule).\n                  <ul>\n                    <li>Work is zero if force and displacement are perpendicular (θ = 90°), e.g., circular planetary orbits, porter holding luggage.</li>\n                  </ul>\n                </li>\n                <li>**Kinetic Energy (KE)**: Energy due to motion. **KE = ½ m v² = p² / 2m** (where p is momentum).\n                  <ul>\n                    <li>If momentum is doubled, KE becomes four times.</li>\n                  </ul>\n                </li>\n                <li>**Potential Energy (PE)**: Energy due to position. **PE = mgh**.</li>\n                <li>**Power (P)**: Rate of doing work. **P = W / t = F · v**. Unit: Watt. **1 Horsepower (HP) = 746 Watts**.</li>\n              </ul>\n              \n              <h3>2. Gravitation & Acceleration due to gravity (g)</h3>\n              <ul>\n                <li>Newton's Law: **F = G M m / r²** (where G = 6.67 × 10⁻¹¹ N m²/kg²; Universal Gravitational Constant).</li>\n                <li>Acceleration due to gravity: **g = G M / R²** (on Earth's surface, g ≈ 9.8 m/s²).\n                  <ul>\n                    <li>g is independent of mass of the falling body.</li>\n                  </ul>\n                </li>\n                <li>**Variations in 'g'**:\n                  <ul>\n                    <li>With Altitude (h): Decreases: **g' = g(1 - 2h/R)**.</li>\n                    <li>With Depth (d): Decreases: **g' = g(1 - d/R)**. (At the centre of Earth, d = R ⇒ g = 0).</li>\n                    <li>Due to shape of Earth: Earth is an oblate spheroid. R_equator > R_pole. Since g ∝ 1/R², **g is minimum at Equator, maximum at Poles**.</li>\n                    <li>Due to rotation: g decreases as rotation speed increases. (At equator g' = g - ω²R). If rotation stops, g at equator increases, while g at poles remains unchanged.</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>3. Kepler's Laws & Escape Velocity</h3>\n              <ul>\n                <li>**Kepler's 3rd Law (Law of Periods)**: The square of time period of a planet is proportional to the cube of semi-major axis of its orbit: **T² ∝ r³**.</li>\n                <li>**Escape Velocity (vₑ)**: Minimum velocity required to escape gravitational pull.\n                  <ul>\n                    <li>Formula: **vₑ = √(2gR) = √(2GM/R)**.</li>\n                    <li>For Earth, escape velocity is **11.2 km/s**. For Moon, it is **2.38 km/s** (low gravity, hence no atmosphere on Moon).</li>\n                  </ul>\n                </li>\n              </ul>\n            ",
            "formulas": "Work: W = F·s·cosθ\nKE = 0.5mv² = p²/2m\nPower: P = W/t = F·v\n1 HP = 746 Watts\ng = GM/R²\nEscape Velocity: vₑ = √(2gR) ≈ 11.2 km/s",
            "mindmap": {
              "root": "Energy & Gravity",
              "branches": [
                {
                  "title": "Work & Energy",
                  "subnodes": [
                    "W = F·s·cosθ",
                    "KE = ½mv² = p²/2m",
                    "PE = mgh potential"
                  ]
                },
                {
                  "title": "Power",
                  "subnodes": [
                    "P = W/t = F·v",
                    "Unit: Watt",
                    "1 HP = 746 Watts"
                  ]
                },
                {
                  "title": "Gravity (g)",
                  "subnodes": [
                    "g = GM/R²",
                    "Max at Poles, Min at Equator",
                    "Zero at Earth's centre"
                  ]
                },
                {
                  "title": "Orbits & Escape",
                  "subnodes": [
                    "Kepler: T² ∝ r³",
                    "vₑ = √(2gR)",
                    "Earth vₑ = 11.2 km/s"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "physics-waves",
        "title": "Waves & Acoustics",
        "topics": [
          {
            "id": "physics-sound",
            "title": "Sound Waves & Acoustics",
            "notes": "Detailed notes expanded in notes_extra_7.js",
            "formulas": "v = sqrt(E/ρ)\nSpeed: Solid > Liquid > Gas\nDecibel: Loudness unit\nEcho distance: 17.2m\nDoppler Effect",
            "mindmap": {
              "root": "Sound Waves",
              "branches": [
                {
                  "title": "Wave Type",
                  "subnodes": [
                    "Mechanical",
                    "Longitudinal",
                    "Needs Medium"
                  ]
                },
                {
                  "title": "Speed Factors",
                  "subnodes": [
                    "Temp: v increases",
                    "Humidity: v increases",
                    "Pressure: No effect"
                  ]
                },
                {
                  "title": "Acoustics",
                  "subnodes": [
                    "Echo: 17.2m min",
                    "Reverberation",
                    "SONAR: ultrasound"
                  ]
                },
                {
                  "title": "Doppler",
                  "subnodes": [
                    "Apparent frequency change",
                    "Approaching: Shrill",
                    "Receding: Grave"
                  ]
                }
              ]
            }
          },
          {
            "id": "physics-em-waves",
            "title": "Electromagnetic Waves & Spectrum",
            "notes": "Detailed notes expanded in notes_extra_7.js",
            "formulas": "c = f * λ = 3 x 10^8 m/s\nSpectrum order: Gamma > X-Ray > UV > Visible > IR > Micro > Radio",
            "mindmap": {
              "root": "EM Waves",
              "branches": [
                {
                  "title": "Characteristics",
                  "subnodes": [
                    "Transverse",
                    "No medium needed",
                    "Oscillating charges"
                  ]
                },
                {
                  "title": "Bands",
                  "subnodes": [
                    "Gamma: Highest E",
                    "X-Ray: bone scans",
                    "UV: water steril",
                    "Visible: VIBGYOR",
                    "IR: heat remote",
                    "Micro: radar GPS",
                    "Radio: FM/AM cell"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "physics-thermodynamics",
        "title": "Heat & Thermodynamics",
        "topics": [
          {
            "id": "physics-heat",
            "title": "Thermodynamics & Heat Transfer",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "# Laws of Thermodynamics\nZeroth Law: If A=B and B=C thermally → A=C (defines temperature)\nFirst Law (Energy Conservation): Q = ΔU + W | Heat in = Internal energy + Work done\nSecond Law (Entropy): Heat flows spontaneously from hot to cold; entropy always increases\nThird Law: Entropy → 0 as Temperature → 0 K (absolute zero)\n# Heat Transfer\nConduction: Q/t = kA(T₁-T₂)/d [Fourier's Law]\nConvection: Heat carried by fluid flow\nRadiation: Q = σAεT⁴ [Stefan-Boltzmann] (no medium needed)\n# Ohm's Law & Electricity\nV = IR | P = VI = I²R = V²/R\nSeries: Rₜ = R₁+R₂+... | Parallel: 1/Rₜ = 1/R₁+1/R₂+...\n# Temperature Scales\n°C = (°F - 32) × 5/9 | °F = °C × 9/5 + 32\nK = °C + 273.15 | Absolute zero = -273.15°C = 0 K\n# Specific Heat\nWater: 4200 J/kg·K | Ice: 2100 J/kg·K | Steel: ~500 J/kg·K\nQ = mcΔT | Latent Heat: Q = mL (no temperature change)",
            "mindmap": {
              "root": "Thermodynamics & Heat",
              "branches": [
                {
                  "title": "Laws of Thermo",
                  "subnodes": [
                    "Zeroth: Thermal equilibrium",
                    "First: Q = ΔU + W",
                    "Second: Entropy increases",
                    "Third: S to 0 at T=0"
                  ]
                },
                {
                  "title": "Heat Transfer",
                  "subnodes": [
                    "Conduction (solid)",
                    "Convection (fluid)",
                    "Radiation (no medium)",
                    "Stefan-Boltzmann: σAεT⁴"
                  ]
                },
                {
                  "title": "Temperature Scales",
                  "subnodes": [
                    "K = °C + 273",
                    "°F = °C×9/5 + 32",
                    "Absolute zero: 0 K = -273.15°C"
                  ]
                },
                {
                  "title": "Specific Heat",
                  "subnodes": [
                    "Q = mcΔT",
                    "Latent heat Q = mL",
                    "Water: 4200 J/kg·K"
                  ]
                },
                {
                  "title": "Heat Transfer",
                  "subnodes": [
                    "Conduction (molecular contact)",
                    "Convection (fluid currents)",
                    "Radiation (EM waves)"
                  ]
                },
                {
                  "title": "Laws",
                  "subnodes": [
                    "Zeroth: Equilibrium",
                    "1st: dQ = dU + dW",
                    "2nd: Entropy direction"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "physics-electromagnetism",
        "title": "Electricity & Magnetism",
        "topics": [
          {
            "id": "physics-electricity-magnetism",
            "title": "Electricity, Circuits & Magnetism",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "# Electricity\nCoulomb's Law: F = k|q₁q₂|/r²\nElectric Field: E = F/q\nPotential Difference: V = W/q\nOhm's Law: V = IR\nResistance: R = ρL/A\nResistors in Series: R_eq = R₁ + R₂ + ...\nResistors in Parallel: 1/R_eq = 1/R₁ + 1/R₂ + ...\nPower: P = VI = I²R = V²/R\n# Magnetism\nMagnetic field of straight wire: B = (μ₀I)/(2πr)\nLorentz Force: F = q(E + v×B)\nForce on current-carrying wire: F = ILB sinθ\nFaraday's Law of Induction: ε = -N(ΔΦ/Δt)\nLenz's Law: Induced current opposes change in flux.",
            "mindmap": {
              "root": "Electricity & Magnetism",
              "branches": [
                {
                  "title": "Electrostatics",
                  "subnodes": [
                    "Coulomb's Law",
                    "Electric Field (E=F/q)",
                    "Electric Potential (V=W/q)"
                  ]
                },
                {
                  "title": "Current Electricity",
                  "subnodes": [
                    "Ohm's Law (V=IR)",
                    "Series/Parallel Resistors",
                    "Electric Power (P=VI)"
                  ]
                },
                {
                  "title": "Magnetism",
                  "subnodes": [
                    "Magnetic field (B)",
                    "Lorentz Force",
                    "Force on current wire"
                  ]
                },
                {
                  "title": "Electromagnetism",
                  "subnodes": [
                    "Faraday's Law of Induction",
                    "Lenz's Law",
                    "AC Generators/Transformers"
                  ]
                },
                {
                  "title": "Current & Circuits",
                  "subnodes": [
                    "Ohm's Law (V=IR)",
                    "Series / Parallel",
                    "Joule's Heating"
                  ]
                },
                {
                  "title": "Magnetism",
                  "subnodes": [
                    "Lorentz Force",
                    "Electromagnetic Induction",
                    "Transformers"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "physics-modern",
        "title": "Modern Physics & Units",
        "topics": [
          {
            "id": "physics-nuclear-basics",
            "title": "Nuclear Physics & Radioactivity",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Fission: heavy nucleus splits (U-235)\nFusion: light nuclei combine (H-isotopes in Sun)\nRadioactivity: Alpha (He-nuclei), Beta (electrons), Gamma (photons)\nHalf-life: T_1/2 = 0.693 / λ",
            "mindmap": {
              "root": "Modern Physics",
              "branches": [
                {
                  "title": "Radioactivity",
                  "subnodes": [
                    "Alpha decay (+2e)",
                    "Beta decay (-e)",
                    "Gamma decay (neutral)"
                  ]
                },
                {
                  "title": "Nuclear Energy",
                  "subnodes": [
                    "Fission (Nuclear reactors)",
                    "Fusion (Sun & stars)",
                    "Einstein: E=mc²"
                  ]
                }
              ]
            }
          },
          {
            "id": "physics-units-everyday",
            "title": "SI Units & Everyday Physics",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Base Units: m, kg, s, A, K, mol, cd\nDerived: Newton (Force), Joule (Energy), Watt (Power), Pascal (Pressure)\nEveryday: Raindrops (surface tension), Mirages (TIR), Sky blue (Rayleigh scattering)",
            "mindmap": {
              "root": "Units & Everyday",
              "branches": [
                {
                  "title": "SI Units",
                  "subnodes": [
                    "7 Base units",
                    "Derived units",
                    "Dimension analysis"
                  ]
                },
                {
                  "title": "Everyday Physics",
                  "subnodes": [
                    "Total Internal Reflection (TIR)",
                    "Surface Tension",
                    "Rayleigh Scattering"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "physics-pyq-trends",
        "title": "PYQ Trend Analysis",
        "topics": [
          {
            "id": "physics-pyq-trends-topic",
            "title": "Physics PYQ Trends (NDA/CDS)",
            "notes": "\n              <h3> Physics PYQ Analysis & Recurring Themes</h3>\n              <p>Analysis of UPSC NDA & CDS question papers from the past 5-10 years shows highly consistent patterns in physics. Focus on these high-yield themes to maximize scores:</p>\n              \n              <h3>1. Optics & Light (Highest Questions)</h3>\n              <ul>\n                <li>**Total Internal Reflection (TIR):** Highly repeated questions on applications of TIR (e.g., *optical fibers*, *mirage in deserts*, *sparkling of diamonds*). Conditions for TIR (light must travel from denser to rarer medium, and angle of incidence must exceed critical angle) are frequently asked.</li>\n                <li>**Refractive Index & Speed of Light:** Numerical and conceptual questions on refractive index (n = c/v). Knowing that speed of light is highest in vacuum and decreases in denser media (e.g., speed of light in water vs glass).</li>\n                <li>**Mirrors & Lenses:** Convex mirrors used as rear-view mirrors (wide field of view, erect, virtual, diminished image) is a standard UPSC question. Human eye defects (Myopia: corrected by *concave* lens; Hypermetropia: corrected by *convex* lens) are tested in almost every exam.</li>\n                <li>**Scattering of Light:** Rayleigh scattering (scattering intensity is inversely proportional to the fourth power of wavelength) explaining the *blue color of the sky* and *reddish appearance of the Sun at sunrise/sunset*.</li>\n              </ul>\n              \n              <h3>2. Mechanics & Motion</h3>\n              <ul>\n                <li>**Newton's Laws & Inertia:** Practical examples of inertia of rest, inertia of motion, and inertia of direction (e.g., passenger falling forward when a bus stops suddenly, dusting a carpet by beating it).</li>\n                <li>**Work, Power, and Energy:** Work done is zero when displacement is perpendicular to the force (e.g., a coolie carrying load on his head walking horizontally). Kinetic Energy (K = p²/2m where p is momentum) and conservation of mechanical energy (potential energy + kinetic energy = constant).</li>\n                <li>**Gravitation:** Value of acceleration due to gravity (g): maximum at poles, minimum at equator, zero at the center of the Earth, and decreases both as we go above the surface (altitude) or below the surface (depth).</li>\n              </ul>\n\n              <h3>3. Electricity & Magnetism</h3>\n              <ul>\n                <li>**Ohm's Law & Resistance:** Factors affecting electrical resistance of a conductor (R = rho * L / A). Resistance is directly proportional to length and inversely proportional to area of cross-section. Numerical problems on series and parallel combinations.</li>\n                <li>**Joule's Heating & Safety Fuse:** Commercial unit of electrical energy (1 kWh = 3.6 x 10^6 Joules). Safety fuse wire has **low melting point** and **high resistance**.</li>\n                <li>**Earth's Magnetism:** Value of magnetic dip at the magnetic equator (0°) and at the magnetic poles (90°).</li>\n              </ul>\n            ",
            "formulas": "n = c / v\\nRayleigh Scattering: I ∝ 1 / λ⁴\\nResistance: R = ρ·L / A\\n1 kWh = 3.6 × 10⁶ J\\nDip Angle: 0° (Equator) | 90° (Poles)",
            "mindmap": {
              "root": "Physics PYQs",
              "branches": [
                {
                  "title": "Optics & Light",
                  "subnodes": [
                    "TIR applications",
                    "Mirrors & Lenses (Eye defects)",
                    "Rayleigh Scattering"
                  ]
                },
                {
                  "title": "Mechanics & Motion",
                  "subnodes": [
                    "Inertia examples",
                    "Work = F·d·cosθ",
                    "g value variation"
                  ]
                },
                {
                  "title": "Electricity & Magnetism",
                  "subnodes": [
                    "Resistance R = ρ·L/A",
                    "Fuse: Low MP, High R",
                    "Earth Dip Equator/Poles"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "chemistry": {
    "title": "Chemistry (NDA/CDS)",
    "chapters": [
      {
        "id": "chemistry-substances",
        "title": "Acids, Bases & Salts",
        "topics": [
          {
            "id": "acids-bases",
            "title": "Acids, Bases & pH Indicators",
            "notes": "\n              <h3>1. Theories of Acids and Bases</h3>\n              <ul>\n                <li>**Arrhenius Theory**:\n                  <ul>\n                    <li>Acid: Releases hydrogen ions (H⁺) or hydronium ions (H₃O⁺) in aqueous solution (e.g., HCl, HNO₃).</li>\n                    <li>Base: Releases hydroxyl ions (OH⁻) in aqueous solution (e.g., NaOH, KOH).</li>\n                  </ul>\n                </li>\n                <li>**Bronsted-Lowry Theory**:\n                  <ul>\n                    <li>Acid: Proton (H⁺) donor.</li>\n                    <li>Base: Proton (H⁺) acceptor.</li>\n                  </ul>\n                </li>\n                <li>**Lewis Theory**:\n                  <ul>\n                    <li>Acid: Electron-pair acceptor (electron deficient, e.g., BF₃, AlCl₃, H⁺).</li>\n                    <li>Base: Electron-pair donor (has lone pair, e.g., NH₃, H₂O, F⁻).</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>2. pH Scale & Indicators</h3>\n              <ul>\n                <li>pH represents potential of Hydrogen. Formula: **pH = -log[H⁺]** or **pH = -log[H₃O⁺]**.</li>\n                <li>At 298 K: pH < 7 is acidic; pH = 7 is neutral; pH > 7 is basic/alkaline.</li>\n                <li>Indicators Table:\n                  <table style=\"width:100%; border-collapse:collapse; margin-top:8px; font-size:0.85rem;\">\n                    <tr style=\"background-color:var(--bg-tertiary);\">\n                      <th style=\"padding:6px; border:1px solid var(--border);\">Indicator</th>\n                      <th style=\"padding:6px; border:1px solid var(--border);\">Acidic Color</th>\n                      <th style=\"padding:6px; border:1px solid var(--border);\">Basic Color</th>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Litmus</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color:var(--danger)\">Red</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color: var(--accent)\">Blue</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Phenolphthalein</td>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Colorless</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color:var(--danger)\">Deep Pink</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Methyl Orange</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color:var(--danger)\">Red/Orange</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color:var(--warning)\">Yellow</td>\n                    </tr>\n                  </table>\n                </li>\n              </ul>\n              \n              <h3>3. Key Chemical Salts and Formulas</h3>\n              <ul>\n                <li>**Baking Soda (Sodium Hydrogen Carbonate - NaHCO₃)**: Prepared by Solvay process. Releases CO₂ on heating. Used in baking and soda-acid fire extinguishers.</li>\n                <li>**Washing Soda (Sodium Carbonate Decahydrate - Na₂CO₃ · 10H₂O)**: Used in glass, soap paper industries, and for removing permanent hardness of water.</li>\n                <li>**Plaster of Paris (Calcium Sulphate Hemihydrate - CaSO₄ · ½H₂O)**: Obtained by heating Gypsum (CaSO₄ · 2H₂O) at 373 K. Used for plastering fractured bones and making toys.</li>\n                <li>**Bleaching Powder (Calcium Oxychloride - CaOCl₂)**: Formed by action of chlorine on dry slaked lime [Ca(OH)₂]. Used as disinfectant for water and bleaching agent in textile industry.</li>\n              </ul>\n            ",
            "formulas": "pH = -log[H⁺]\nBaking Soda: NaHCO₃\nWashing Soda: Na₂CO₃·10H₂O\nPOP: CaSO₄·0.5H₂O\nGypsum: CaSO₄·2H₂O\nBleaching Powder: CaOCl₂",
            "mindmap": {
              "root": "Acids & Bases",
              "branches": [
                {
                  "title": "Theories",
                  "subnodes": [
                    "Arrhenius: H⁺/OH⁻",
                    "Bronsted: Proton donor/acc",
                    "Lewis: Electron pair acc/donor"
                  ]
                },
                {
                  "title": "pH Scale",
                  "subnodes": [
                    "pH = -log[H⁺]",
                    "Acidic < 7 / Basic > 7",
                    "Neutral = 7 (water)"
                  ]
                },
                {
                  "title": "Indicators",
                  "subnodes": [
                    "Litmus: Blue to Red (Acid)",
                    "Phenolphthalein: Pink (Base)",
                    "Methyl Orange: Red (Acid)"
                  ]
                },
                {
                  "title": "Salts",
                  "subnodes": [
                    "Baking Soda: NaHCO₃",
                    "Washing Soda: Na₂CO₃·10H₂O",
                    "POP: CaSO₄·0.5H₂O"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "chemistry-bonding",
        "title": "Chemical Bonding",
        "topics": [
          {
            "id": "syl-numerical",
            "title": "Chemical Bonding & Periodic Table",
            "notes": "\n              <h3>1. Types of Chemical Bonds</h3>\n              <ul>\n                <li>**Electrovalent/Ionic Bond**: Formed by complete transfer of electrons from electropositive metal to electronegative non-metal (e.g., NaCl, CaCl₂).\n                  <ul>\n                    <li>Properties: High melting/boiling points, soluble in water, conduct electricity in molten/solution state.</li>\n                  </ul>\n                </li>\n                <li>**Covalent Bond**: Formed by equal sharing of electrons between non-metals (e.g., H₂, O₂, H₂O).\n                  <ul>\n                    <li>Properties: Low melting/boiling points, insoluble in water (soluble in organic solvents), poor conductors.</li>\n                  </ul>\n                </li>\n                <li>**Coordinate/Dative Bond**: Special covalent bond where shared pair is donated by one atom (donor) and accepted by another (acceptor) (e.g., NH₄⁺, H₃O⁺).</li>\n                <li>**Hydrogen Bond**: Electrostatic force of attraction between hydrogen atom bonded to a highly electronegative atom (F, O, N) and another electronegative atom.\n                  <ul>\n                    <li>Intermolecular H-bonding: Between different molecules (e.g., H₂O, HF). Explains why H₂O is liquid while H₂S is gas.</li>\n                    <li>Intramolecular H-bonding: Within the same molecule (e.g., o-nitrophenol).</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>2. Modern Periodic Table & Periodic Trends</h3>\n              <p>Developed by Henry Moseley, based on **Atomic Number**. Has 18 groups and 7 periods.</p>\n              <ul>\n                <li>**Atomic Radius**:\n                  <ul>\n                    <li>Across Period (Left to Right): **Decreases** due to increase in effective nuclear charge (pulls electrons closer).</li>\n                    <li>Down Group (Top to Bottom): **Increases** due to addition of new electron shells.</li>\n                  </ul>\n                </li>\n                <li>**Ionization Energy (IE)**: Energy required to remove the outermost electron.\n                  <ul>\n                    <li>Across Period: **Increases** (atomic size decreases, nuclear pull increases).</li>\n                    <li>Down Group: **Decreases** (atomic size increases, easier to remove outer electron).</li>\n                  </ul>\n                </li>\n                <li>**Electronegativity**: Tendency of an atom to attract shared electron pair.\n                  <ul>\n                    <li>Across Period: **Increases** (Fluorine is most electronegative).</li>\n                    <li>Down Group: **Decreases**.</li>\n                  </ul>\n                </li>\n                <li>**Metallic Character (Electropositivity)**:\n                  <ul>\n                    <li>Across Period: **Decreases**.</li>\n                    <li>Down Group: **Increases** (Francium/Cesium are highly metallic).</li>\n                  </ul>\n                </li>\n              </ul>\n            ",
            "formulas": "Ionic Bond: Electron transfer\nCovalent Bond: Electron sharing\nH-Bonding: Strongest intermolecular attraction\nElectronegativity: F > O > N > Cl",
            "mindmap": {
              "root": "Bonding & Periodic",
              "branches": [
                {
                  "title": "Ionic Bonds",
                  "subnodes": [
                    "Complete electron transfer",
                    "High melting points",
                    "Conduct in molten form"
                  ]
                },
                {
                  "title": "Covalent & H-Bond",
                  "subnodes": [
                    "Shared electron pair",
                    "H-Bond: F, O, N only",
                    "Water high BP reason"
                  ]
                },
                {
                  "title": "Period Trends (L-R)",
                  "subnodes": [
                    "Atomic radius decreases",
                    "Ionization Energy increases",
                    "Electronegativity increases"
                  ]
                },
                {
                  "title": "Group Trends (T-B)",
                  "subnodes": [
                    "Atomic radius increases",
                    "Ionization Energy decreases",
                    "Metallic character increases"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "chemistry-metallurgy",
        "title": "Metals & Metallurgy",
        "topics": [
          {
            "id": "metals-alloys",
            "title": "Metals, Ores, Alloys & Metallurgy",
            "notes": "Detailed notes expanded in notes_extra_7.js",
            "formulas": "Al: Bauxite, Cryolite\nFe: Hematite, Magnetite\nAlloys: Brass (Cu+Zn), Bronze (Cu+Sn), Solder (Pb+Sn)\nFlotation: Sulphides\nRoasting (air) vs Calcination (no air)",
            "mindmap": {
              "root": "Metals & Alloys",
              "branches": [
                {
                  "title": "Ores",
                  "subnodes": [
                    "Bauxite: Al",
                    "Hematite: Fe",
                    "Cinnabar: Hg",
                    "Galena: Pb"
                  ]
                },
                {
                  "title": "Alloys",
                  "subnodes": [
                    "Brass: Cu+Zn",
                    "Bronze: Cu+Sn",
                    "Solder: Pb+Sn",
                    "Duralumin: Al+Cu+Mn+Mg"
                  ]
                },
                {
                  "title": "Metallurgy",
                  "subnodes": [
                    "Froth flotation",
                    "Calcination (no air)",
                    "Roasting (air)",
                    "Electrolysis: highly reactive"
                  ]
                }
              ]
            }
          },
          {
            "id": "reactivity-series",
            "title": "Reactivity Series & Displacement",
            "notes": "Detailed notes expanded in notes_extra_7.js",
            "formulas": "Order: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au\nMnemonic: Please Stop Calling Me A Careless Zebra...\nDisplacement: More reactive replaces less reactive",
            "mindmap": {
              "root": "Reactivity Series",
              "branches": [
                {
                  "title": "Order",
                  "subnodes": [
                    "K, Na: Highly reactive",
                    "Au, Pt: Noble/Least reactive"
                  ]
                },
                {
                  "title": "Water Reactions",
                  "subnodes": [
                    "Cold: K, Na, Ca",
                    "Hot: Mg",
                    "Steam: Al, Fe, Zn",
                    "None: Cu, Ag, Au"
                  ]
                },
                {
                  "title": "Displacement",
                  "subnodes": [
                    "Thermite: Fe2O3+Al",
                    "Iron + CuSO4 -> FeSO4+Cu"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "chemistry-carbon-numericals",
        "title": "Carbon Compounds & Numericals",
        "topics": [
          {
            "id": "carbon-compounds",
            "title": "Carbon & its Compounds",
            "notes": "Detailed notes expanded in notes_extra_7.js",
            "formulas": "Alkanes: CnH2n+2\nAlkenes: CnH2n\nAlkynes: CnH2n-2\nDiamond: sp3, Graphite: sp2, Fullerene: C-60\nEsterification: Acid+Alcohol -> Ester",
            "mindmap": {
              "root": "Carbon Compounds",
              "branches": [
                {
                  "title": "Allotropes",
                  "subnodes": [
                    "Diamond: Hardest",
                    "Graphite: Conductor",
                    "Fullerene: C-60",
                    "Graphene: 2D"
                  ]
                },
                {
                  "title": "Hydrocarbons",
                  "subnodes": [
                    "Alkanes: saturated",
                    "Alkenes/Alkynes: unsaturated"
                  ]
                },
                {
                  "title": "Reactions",
                  "subnodes": [
                    "Combustion",
                    "Esterification",
                    "Saponification"
                  ]
                }
              ]
            }
          },
          {
            "id": "chemistry-numericals",
            "title": "Mole Concept & Concentration Terms",
            "notes": "Detailed notes expanded in notes_extra_7.js",
            "formulas": "Mole = mass/molar mass\nAvogadro: 6.022 x 10^23\nMolarity (M) = moles/vol(L) [Temp dependent]\nMolality (m) = moles/mass_solvent(kg) [Temp independent]\nNormality (N) = Molarity * n-factor",
            "mindmap": {
              "root": "Chemistry Numericals",
              "branches": [
                {
                  "title": "Mole Concept",
                  "subnodes": [
                    "n = given/molar mass",
                    "STP volume: 22.4 L",
                    "Avogadro's constant"
                  ]
                },
                {
                  "title": "Concentration",
                  "subnodes": [
                    "Molarity: mol/L",
                    "Molality: mol/kg",
                    "Normality: eq/L",
                    "Mole Fraction"
                  ]
                },
                {
                  "title": "Equivalent Mass",
                  "subnodes": [
                    "Molar mass / n-factor",
                    "Acids: basicity",
                    "Bases: acidity"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "chemistry-everyday-env",
        "title": "Everyday & Environmental Chemistry",
        "topics": [
          {
            "id": "chemistry-everyday-fertilisers",
            "title": "Everyday Chemistry, Fertilisers & Fuels",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Saponification: fat + NaOH -> soap + glycerol\nNPK: Nitrogen, Phosphorus, Potassium\nGlass: supercooled liquid (silicates)\nCement: gypsum (delays setting time), silicates & aluminates\nPetroleum: LPG (butane + propane), CNG (methane)",
            "mindmap": {
              "root": "Everyday Chem",
              "branches": [
                {
                  "title": "Cleansing Agents",
                  "subnodes": [
                    "Soaps (sodium salts)",
                    "Detergents (sulfonates)"
                  ]
                },
                {
                  "title": "Industrial",
                  "subnodes": [
                    "Glass: supercooled liquid",
                    "Cement: gypsum (CaSO4.2H2O)",
                    "Fertilisers (NPK)"
                  ]
                },
                {
                  "title": "Fuels",
                  "subnodes": [
                    "LPG: butane, propane",
                    "CNG: methane (CH4)"
                  ]
                }
              ]
            }
          },
          {
            "id": "environmental-chemistry",
            "title": "Environmental Chemistry & Pollution",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Acid rain: pH < 5.6 (SO2 + NO2 -> H2SO4 + HNO3)\nSmog: Classical (cool/humid) vs Photochemical (warm/sunny, PAN & Ozone)\nGreenhouse: CO2, CH4, N2O, water vapor\nBOD: Biochemical Oxygen Demand (higher BOD = more polluted water)",
            "mindmap": {
              "root": "Env Chemistry",
              "branches": [
                {
                  "title": "Air Pollution",
                  "subnodes": [
                    "Acid Rain (SO2, NO2)",
                    "Photochemical Smog (Ozone, PAN)",
                    "Greenhouse Gases"
                  ]
                },
                {
                  "title": "Water Pollution",
                  "subnodes": [
                    "Eutrophication",
                    "BOD (Oxygen Demand)"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "biology": {
    "title": "Biology (NDA/CDS)",
    "chapters": [
      {
        "id": "biology-cell",
        "title": "Cell Biology & Genetics",
        "topics": [
          {
            "id": "cell-structure",
            "title": "Cell Structure & Cell Division",
            "notes": "\n              <h3>1. Cell Theory & Classification</h3>\n              <ul>\n                <li>Cell is the structural and functional unit of life, first discovered by **Robert Hooke** in 1665 (dead cork cell) and **Leeuwenhoek** in 1674 (living cell).</li>\n                <li>**Cell Theory**: Proposed by Schleiden and Schwann (1838-1839). Rudolf Virchow added: \"Omnis cellula-e-cellula\" (all cells arise from pre-existing cells).</li>\n                <li>**Prokaryotic Cells**: Lack a nuclear membrane and membrane-bound organelles (e.g., Bacteria, Blue-green algae). Possess 70S ribosomes.</li>\n                <li>**Eukaryotic Cells**: Have a well-defined nuclear envelope and organelles (e.g., Plants, Animals, Fungi). Possess 80S ribosomes.</li>\n              </ul>\n              \n              <h3>2. Vital Cell Organelles</h3>\n              <ul>\n                <li>**Mitochondria**: Double-membraned powerhouse of the cell. Site of aerobic cellular respiration and ATP generation. Contains its own DNA and 70S ribosomes.</li>\n                <li>**Plastids (Chloroplasts)**: Found only in plant cells. Kitchen of the cell, contains chlorophyll to perform photosynthesis. Possesses own circular DNA.</li>\n                <li>**Ribosomes**: Non-membrane bound protein factories. Found free in cytoplasm or attached to Rough Endoplasmic Reticulum (RER).</li>\n                <li>**Lysosomes**: Formed by Golgi apparatus. Known as **Suicide Bags** because they contain hydrolytic digestive enzymes that destroy worn-out organelles or the cell itself under stress.</li>\n                <li>**Endoplasmic Reticulum (ER)**: RER has ribosomes and synthesizes proteins; Smooth ER (SER) synthesizes lipids and detoxifies poisons/drugs.</li>\n                <li>**Golgi Apparatus**: Performs packaging, modification, and dispatching of materials.</li>\n              </ul>\n              \n              <h3>3. Cell Division (Mitosis vs Meiosis)</h3>\n              <ul>\n                <li>**Mitosis (Equational Division)**: Occurs in somatic cells for growth and repair. One diploid cell (2n) divides to produce **two identical diploid (2n) daughter cells**.</li>\n                <li>**Meiosis (Reductional Division)**: Occurs in germ cells to form gametes. One diploid cell (2n) divides to produce **four non-identical haploid (n) daughter cells**. Features crossing over in Prophase I (Pachytene stage) which induces variation.</li>\n              </ul>\n            ",
            "formulas": "Powerhouse: Mitochondria (ATP)\nSuicide Bags: Lysosomes (hydrolytic enzymes)\nProtein Factory: Ribosomes\nMitosis: Growth & Repair (2n -> 2n)\nMeiosis: Gamete formation & Crossing Over (2n -> 4 cells of n)",
            "mindmap": {
              "root": "Cell Biology",
              "branches": [
                {
                  "title": "Cell Types",
                  "subnodes": [
                    "Prokaryotes: 70S, no envelope",
                    "Eukaryotes: 80S, true nucleus"
                  ]
                },
                {
                  "title": "Organelles",
                  "subnodes": [
                    "Mitochondria: ATP, own DNA",
                    "Chloroplasts: Photosynthesis",
                    "Lysosomes: Hydrolytic enzymes"
                  ]
                },
                {
                  "title": "Cell Division",
                  "subnodes": [
                    "Mitosis: Somatic (2n -> 2n)",
                    "Meiosis: Gametes (2n -> 4x n)",
                    "Crossing Over: Prophase I variation"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "biology-physiology",
        "title": "Human Physiology",
        "topics": [
          {
            "id": "human-systems",
            "title": "Vital Human Systems & Organs",
            "notes": "\n              <h3>1. Circulatory System & Blood Components</h3>\n              <ul>\n                <li>**Human Heart**: 4-chambered (two auricles, two ventricles) showing double circulation. Normal pace maker is the **Sino-Atrial (SA) Node**.</li>\n                <li>**Blood Composition**: Plasma (55%) and Formed elements (45%):\n                  <ul>\n                    <li>**RBCs (Erythrocytes)**: Lifespan ~120 days. Lack nucleus at maturity. Contain iron-rich hemoglobin to transport oxygen. Destroyed in the spleen (graveyard of RBCs).</li>\n                    <li>**WBCs (Leukocytes)**: Part of immune system. Granulocytes (Neutrophils, Basophils, Eosinophils) and Agranulocytes (Lymphocytes, Monocytes).</li>\n                    <li>**Platelets (Thrombocytes)**: Responsible for blood clotting (aided by Vitamin K and Calcium ions).</li>\n                  </ul>\n                </li>\n                <li>**Blood Groups (ABO System)**:\n                  <ul>\n                    <li>Group O-negative: **Universal Donor** (lacks antigens).</li>\n                    <li>Group AB-positive: **Universal Recipient** (lacks antibodies).</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>2. Endocrine Glands & Gaseous / Digestive Systems</h3>\n              <ul>\n                <li>**Endocrine Glands (Ductless Glands)**: Secretions are called hormones.\n                  <ul>\n                    <li>**Pituitary Gland**: Master gland, controls growth and other glands.</li>\n                    <li>**Thyroid Gland**: Secretes thyroxine (needs Iodine; deficiency leads to Goitre).</li>\n                    <li>**Pancreas (Mixed Gland)**: Islets of Langerhans secrete **Insulin** (Beta cells, lowers blood glucose) and **Glucagon** (Alpha cells, raises glucose). Deficiency of insulin causes Diabetes Mellitus.</li>\n                    <li>**Adrenal Gland**: Secretes Adrenaline (fight-or-flight hormone, raises heart rate).</li>\n                  </ul>\n                </li>\n                <li>**Digestive Enzymes**:\n                  <ul>\n                    <li>Saliva: Salivary Amylase (digests starch).</li>\n                    <li>Stomach: Pepsin (digests proteins in acidic medium - HCl).</li>\n                    <li>Pancreas: Trypsin (proteins), Lipase (fats), Amylase (carbohydrates).</li>\n                  </ul>\n                </li>\n              </ul>\n            ",
            "formulas": "Blood pH: 7.4 (Slightly alkaline)\nRBC lifespan: 120 days\nUniversal Donor: O- | Recipient: AB+\nMaster Gland: Pituitary\nInsulin: Beta-cells (lowers sugar)\nAdrenaline: Emergency hormone",
            "mindmap": {
              "root": "Human Physiology",
              "branches": [
                {
                  "title": "Circulatory",
                  "subnodes": [
                    "Heart: 4 chambers, SA Node",
                    "RBC (120d, no nucleus)",
                    "AB+ Recipient, O- Donor"
                  ]
                },
                {
                  "title": "Endocrine",
                  "subnodes": [
                    "Pancreas: Insulin (Beta cells)",
                    "Thyroid: Thyroxine (Goitre)",
                    "Adrenal: Adrenaline emergency"
                  ]
                },
                {
                  "title": "Digestive",
                  "subnodes": [
                    "Salivary Amylase: Starch",
                    "Pepsin (Stomach): Proteins",
                    "Lipase: Fat emulsification"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "biology-diseases",
        "title": "Health, Diseases & Nutrition",
        "topics": [
          {
            "id": "diseases",
            "title": "Human Diseases & Pathogens",
            "notes": "\n              <h3>1. Infectious Diseases Classification</h3>\n              <ul>\n                <li>**Bacterial Diseases**:\n                  <ul>\n                    <li>Tuberculosis (TB): Caused by <em>Mycobacterium tuberculosis</em>. Prevented by BCG vaccine.</li>\n                    <li>Typhoid: Caused by <em>Salmonella typhi</em>. Diagnosed by **Widal Test**.</li>\n                    <li>Cholera: Caused by <em>Vibrio cholerae</em> (water-borne).</li>\n                  </ul>\n                </li>\n                <li>**Viral Diseases**:\n                  <ul>\n                    <li>Dengue: Caused by Flavivirus. Spread by **Aedes aegypti** mosquito. Characterized by severe drop in platelet count.</li>\n                    <li>Polio: Caused by Poliovirus. Vaccine developed by Jonas Salk (injected) and Albert Sabin (oral).</li>\n                    <li>AIDS: Caused by HIV (Retrovirus). Diagnosed by **ELISA Test**.</li>\n                  </ul>\n                </li>\n                <li>**Protozoan Diseases**:\n                  <ul>\n                    <li>Malaria: Caused by <em>Plasmodium</em>. Spread by female **Anopheles** mosquito vector. Quinine (from Cinchona bark) is used as treatment.</li>\n                    <li>Kala-azar (Leishmaniasis): Spread by **Sandfly** vector.</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>2. Nutritional Deficiency Diseases</h3>\n              <ul>\n                <li>**Vitamins & Minerals Deficiency Chart**:\n                  <table style=\"width:100%; border-collapse:collapse; margin-top:8px; font-size:0.85rem;\">\n                    <tr style=\"background-color:var(--bg-tertiary);\">\n                      <th style=\"padding:6px; border:1px solid var(--border);\">Vitamin / Chemical</th>\n                      <th style=\"padding:6px; border:1px solid var(--border);\">Common Name</th>\n                      <th style=\"padding:6px; border:1px solid var(--border);\">Deficiency Disease</th>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Vitamin A</td>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Retinol</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color:var(--warning)\">Night Blindness / Xerophthalmia</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Vitamin B1</td>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Thiamine</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color:var(--warning)\">Beriberi</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Vitamin C</td>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Ascorbic Acid</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color:var(--warning)\">Scurvy (Bleeding gums)</td>\n                    </tr>\n                    <tr>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Vitamin D</td>\n                      <td style=\"padding:6px; border:1px solid var(--border);\">Calciferol</td>\n                      <td style=\"padding:6px; border:1px solid var(--border); color:var(--warning)\">Rickets (bow legs in kids)</td>\n                    </tr>\n                  </table>\n                </li>\n              </ul>\n            ",
            "formulas": "Typhoid: Widal Test\nMalaria: Female Anopheles vector\nDengue: Aedes vector\nVit A (Retinol) -> Night Blindness\nVit B1 (Thiamine) -> Beriberi\nVit C (Ascorbic Acid) -> Scurvy\nVit D (Calciferol) -> Rickets",
            "mindmap": {
              "root": "Diseases & Health",
              "branches": [
                {
                  "title": "Bacterial",
                  "subnodes": [
                    "TB: Mycobacterium, BCG",
                    "Typhoid: Salmonella, Widal",
                    "Cholera: Vibrio, water-borne"
                  ]
                },
                {
                  "title": "Viral & Protozoan",
                  "subnodes": [
                    "Dengue: Aedes mosquito",
                    "AIDS: HIV, ELISA test",
                    "Malaria: Plasmodium, Anopheles"
                  ]
                },
                {
                  "title": "Deficiency",
                  "subnodes": [
                    "Vit A: Night Blindness",
                    "Vit B1: Beriberi thiamine",
                    "Vit C: Scurvy gums",
                    "Vit D: Rickets bone"
                  ]
                }
              ]
            }
          },
          {
            "id": "immunity-vaccines",
            "title": "Immunity & Vaccines",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Innate: non-specific (skin, tears)\nAcquired: specific (B-cells, T-cells)\nActive: body makes antibodies (infection, vaccine)\nPassive: ready-made antibodies (colostrum, anti-venom)\nVaccines: Live-attenuated (OPV, BCG), Inactivated (Covaxin, Salk), mRNA (Pfizer)",
            "mindmap": {
              "root": "Immunity",
              "branches": [
                {
                  "title": "Innate (Natural)",
                  "subnodes": [
                    "Physical: Skin, mucous",
                    "Physiological: Acid, saliva",
                    "Cellular: WBCs, macrophages"
                  ]
                },
                {
                  "title": "Acquired (Adaptive)",
                  "subnodes": [
                    "B-cells: Humoral (antibodies)",
                    "T-cells: Cell-mediated (helper/killer)"
                  ]
                },
                {
                  "title": "Vaccines",
                  "subnodes": [
                    "Live-attenuated (BCG, OPV)",
                    "Killed/Inactivated (Salk, Rabies)",
                    "Toxoids (Tetanus)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "biology-kingdoms",
        "title": "Plant & Animal Kingdoms",
        "topics": [
          {
            "id": "plant-kingdom",
            "title": "Plant Kingdom Classification",
            "notes": "Detailed notes expanded in notes_extra_8.js",
            "formulas": "Thallophyta: Algae (no roots/stems/leaves)\nBryophyta: Amphibians of plant kingdom (Funaria/Moss)\nPteridophyta: First vascular plants (Ferns/Marsilea)\nGymnosperms: Naked seeds (Pinus/Cycas)\nAngiosperms: Enclosed seeds, flowers, Monocots & Dicots",
            "mindmap": {
              "root": "Plant Kingdom",
              "branches": [
                {
                  "title": "Cryptogams",
                  "subnodes": [
                    "Thallophyta: Simple, algae",
                    "Bryophyta: Amphibians, mosses",
                    "Pteridophyta: Vascular, ferns"
                  ]
                },
                {
                  "title": "Phanerogams",
                  "subnodes": [
                    "Gymnosperms: Naked seeds",
                    "Angiosperms: Flowering, enclosed"
                  ]
                },
                {
                  "title": "Angiosperms",
                  "subnodes": [
                    "Monocots: 1 cotyledon, parallel venation",
                    "Dicots: 2 cotyledons, reticulate venation"
                  ]
                }
              ]
            }
          },
          {
            "id": "animal-kingdom",
            "title": "Animal Kingdom Classification",
            "notes": "Detailed notes expanded in notes_extra_8.js",
            "formulas": "Porifera: Cellular, sponges\nCoelenterata: Cnidoblasts, Polyp/Medusa\nPlatyhelminthes: Flatworms\nAschelminthes: Roundworms\nAnnelida: Segmented\nArthropoda: Jointed, largest\nMollusca: Soft, shell\nEchinodermata: Water vascular\nChordata: Notochord, vertebrates",
            "mindmap": {
              "root": "Animal Kingdom",
              "branches": [
                {
                  "title": "Invertebrates I",
                  "subnodes": [
                    "Porifera: Sponges",
                    "Coelenterata: Cnidoblasts",
                    "Platyhelminthes: Flatworms",
                    "Aschelminthes: Roundworms"
                  ]
                },
                {
                  "title": "Invertebrates II",
                  "subnodes": [
                    "Annelida: Segmented",
                    "Arthropoda: Jointed, largest",
                    "Mollusca: Soft",
                    "Echinodermata: Spiny, water-vascular"
                  ]
                },
                {
                  "title": "Vertebrates (Chordata)",
                  "subnodes": [
                    "Pisces: 2-chambered, gills",
                    "Amphibia: 3-chambered",
                    "Reptilia: 3-chambered (Crocodile 4)",
                    "Aves: 4-chambered, warm",
                    "Mammalia: Milk glands"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "biology-botany",
        "title": "Plant Physiology & Reproduction",
        "topics": [
          {
            "id": "plant-reproduction",
            "title": "Plant Reproduction & Hormones",
            "notes": "Detailed notes expanded in notes_extra_8.js",
            "formulas": "Vegetative: Potato (stem), Bryophyllum (leaf)\nDouble Fertilization: Syngamy (2n Zygote) + Triple Fusion (3n Endosperm)\nAuxin: Apical dominance, phototropism\nGibberellins: Stem growth, breaks seed dormancy\nCytokinin: Cell division, delays aging\nABA: Stress hormone, closes stomata\nEthylene: Gaseous hormone, fruit ripening",
            "mindmap": {
              "root": "Plant Reproduction",
              "branches": [
                {
                  "title": "Asexual Methods",
                  "subnodes": [
                    "Vegetative propagation",
                    "Budding, Fragmentation",
                    "Spore formation",
                    "Apomixis"
                  ]
                },
                {
                  "title": "Sexual Reproduction",
                  "subnodes": [
                    "Pollination: Self vs Cross",
                    "Wind, Water, Insect pollination",
                    "Fertilisation in flowers"
                  ]
                },
                {
                  "title": "Flower Parts",
                  "subnodes": [
                    "Stamen (anther+filament)",
                    "Pistil (stigma+style+ovary)",
                    "Sepals & Petals"
                  ]
                },
                {
                  "title": "Seed & Fruit",
                  "subnodes": [
                    "Ovule → Seed",
                    "Ovary → Fruit",
                    "Dispersal: Wind, Water, Animal"
                  ]
                },
                {
                  "title": "Double Fertilization",
                  "subnodes": [
                    "Syngamy: Male gamete + Egg -> Zygote (2n)",
                    "Triple Fusion: Male gamete + 2 Polar nuclei -> Endosperm (3n)"
                  ]
                },
                {
                  "title": "Phytohormones",
                  "subnodes": [
                    "Auxin: Apical dominance",
                    "Gibberellin: Germination",
                    "Cytokinin: Cell division",
                    "ABA: Stress, close stomata",
                    "Ethylene: Ripening (gaseous)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "biology-ecology",
        "title": "Ecology & Ecosystems",
        "topics": [
          {
            "id": "biology-ecology-basics",
            "title": "Ecology Basics & Pyramids",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "# Photosynthesis\nLight Reaction (Thylakoids): Water splits → O₂ released, ATP + NADPH produced\nDark Reaction/Calvin Cycle (Stroma): CO₂ fixed using ATP+NADPH → Glucose\nOverall: 6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂\nC3 plants: 1st product 3-PGA (wheat, rice, oats, most plants)\nC4 plants: 1st product OAA, adapted to hot/dry (maize, sugarcane)\nCAM plants: Night CO₂ uptake (cactus, pineapple)\n# Transpiration\nLoss of water vapour through stomata (leaf pores)\nGuard cells control stomatal opening/closing\n# Plant Hormones (Phytohormones)\nAuxin: Cell elongation, apical dominance, fruit development\nGibberellin: Stem elongation, seed germination, bolting\nCytokinin: Cell division, delays senescence, lateral bud growth\nAbscisic Acid (ABA): Stress hormone, stomatal closure, dormancy\nEthylene: Fruit ripening, leaf abscission (gaseous hormone)\n# Lindeman's Law (Ecology)\n10% Energy Transfer Rule: Only 10% of energy passes from one trophic level to next (Lindeman's 10% Law)\nPyramids: Numbers (inverted in tree), Biomass (inverted in marine), Energy (ALWAYS upright)\nEcotone: transition zone between two ecosystems (e.g., Mangrove)",
            "mindmap": {
              "root": "Ecology",
              "branches": [
                {
                  "title": "Ecosystem Components",
                  "subnodes": [
                    "Biotic: Producers, Consumers",
                    "Abiotic: Temp, soil, water"
                  ]
                },
                {
                  "title": "Energy Flow",
                  "subnodes": [
                    "10% Law (Lindeman)",
                    "Food chains & webs",
                    "ALWAYS upright energy pyramid"
                  ]
                },
                {
                  "title": "Concepts",
                  "subnodes": [
                    "Ecotone (edge effect)",
                    "Ecological Niche",
                    "Biomagnification"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "military-aptitude": {
    "title": "Military GK & Aptitude",
    "chapters": [
      {
        "id": "defence-structures",
        "title": "Command Structures & Ranks",
        "topics": [
          {
            "id": "rank-equivalence",
            "title": "Equivalent Officer Ranks (Tri-Services)",
            "notes": "\n              <h3>1. Commissioned Officers Rank Structure</h3>\n              <p>Equivalent ranks in the three services are highly tested in CDS and AFCAT. Commissioned ranks from junior to senior levels:</p>\n              \n              <table style=\"width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;\">\n                <tr style=\"background-color:var(--bg-tertiary);\">\n                  <th style=\"padding:8px; border:1px solid var(--border);\">Army</th>\n                  <th style=\"padding:8px; border:1px solid var(--border);\">Navy</th>\n                  <th style=\"padding:8px; border:1px solid var(--border);\">Air Force</th>\n                  <th style=\"padding:8px; border:1px solid var(--border);\">Insignia Star Rating</th>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Lieutenant</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Sub-Lieutenant</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Flying Officer</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Entry Rank</td>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Captain</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Lieutenant</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Flight Lieutenant</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Junior Officer</td>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Major</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Lieutenant Commander</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Squadron Leader</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Mid-Level Officer</td>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Lieutenant Colonel</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Commander</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Wing Commander</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Selection Grade</td>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Colonel</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Captain</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Group Captain</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Senior Level</td>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Brigadier</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Commodore</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Air Commodore</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">1 Star</td>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Major General</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Rear Admiral</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Air Vice Marshal</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">2 Star</td>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Lieutenant General</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Vice Admiral</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Air Marshal</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">3 Star</td>\n                </tr>\n                <tr>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">General</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Admiral</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">Air Chief Marshal</td>\n                  <td style=\"padding:8px; border:1px solid var(--border);\">4 Star (Chief of Staff)</td>\n                </tr>\n              </table>\n              \n              <h3>2. Honorary / Highest Ranks (5-Star Ranks)</h3>\n              <ul>\n                <li>**Field Marshal (Army)**: Ranks held by Sam Manekshaw and K.M. Cariappa.</li>\n                <li>**Marshal of the Indian Air Force (IAF)**: Rank held by Arjan Singh.</li>\n                <li>**Admiral of the Fleet (Navy)**: Peacetime equivalent five-star rank (no naval officer has received this yet).</li>\n              </ul>\n            ",
            "formulas": "Lieutenant = Sub-Lieutenant = Flying Officer\nColonel = Captain = Group Captain\nGeneral = Admiral = Air Chief Marshal",
            "mindmap": {
              "root": "Ranks Equivalence",
              "branches": [
                {
                  "title": "Junior Officers",
                  "subnodes": [
                    "Lieutenant (Army)",
                    "Sub-Lieutenant (Navy)",
                    "Flying Officer (IAF)"
                  ]
                },
                {
                  "title": "Mid-Level",
                  "subnodes": [
                    "Major = Lt Commander = Sqn Leader",
                    "Lt Colonel = Commander = Wing Cdr"
                  ]
                },
                {
                  "title": "Senior Level",
                  "subnodes": [
                    "Colonel = Captain = Group Captain",
                    "Brigadier = Commodore = Air Comm"
                  ]
                },
                {
                  "title": "Command Star Ranks",
                  "subnodes": [
                    "Maj Gen (2 Star)",
                    "Lt Gen (3 Star)",
                    "General / Chief (4 Star)"
                  ]
                }
              ]
            }
          },
          {
            "id": "commands",
            "title": "Operational Commands of Services",
            "notes": "\n              <h3>1. Indian Army Commands (7)</h3>\n              <ul>\n                <li>Northern Command: **Udhampur** (J&K)</li>\n                <li>Western Command: **Chandimandir** (Haryana)</li>\n                <li>Eastern Command: **Kolkata** (West Bengal)</li>\n                <li>Southern Command: **Pune** (Maharashtra)</li>\n                <li>Central Command: **Lucknow** (Uttar Pradesh)</li>\n                <li>South Western Command: **Jaipur** (Rajasthan)</li>\n                <li>Army Training Command (ARTRAC): **Shimla** (Himachal Pradesh)</li>\n              </ul>\n              \n              <h3>2. Indian Air Force Commands (7)</h3>\n              <ul>\n                <li>Western Air Command: **New Delhi**</li>\n                <li>Eastern Air Command: **Shillong** (Meghalaya)</li>\n                <li>Central Air Command: **Prayagraj** (Uttar Pradesh)</li>\n                <li>Southern Air Command: **Thiruvananthapuram** (Kerala)</li>\n                <li>South Western Air Command: **Gandhinagar** (Gujarat)</li>\n                <li>Training Command: **Bengaluru** (Karnataka)</li>\n                <li>Maintenance Command: **Nagpur** (Maharashtra)</li>\n              </ul>\n              \n              <h3>3. Indian Navy Commands (3)</h3>\n              <ul>\n                <li>Western Naval Command: **Mumbai** (Maharashtra)</li>\n                <li>Eastern Naval Command: **Visakhapatnam** (Andhra Pradesh)</li>\n                <li>Southern Naval Command (Training Command): **Kochi** (Kerala)</li>\n              </ul>\n              \n              <h3>4. Tri-Services Unified Command</h3>\n              <ul>\n                <li>Andaman and Nicobar Command: **Port Blair** (Joint Command of Army, Navy, Air Force).</li>\n                <li>Strategic Forces Command (SFC): Handles India's tactical nuclear weapons stockpile.</li>\n              </ul>\n            ",
            "formulas": "Army Commands: 7 (Training at Shimla)\nAir Force Commands: 7 (Maintenance at Nagpur)\nNavy Commands: 3",
            "mindmap": {
              "root": "Service Commands",
              "branches": [
                {
                  "title": "Army (7)",
                  "subnodes": [
                    "Northern: Udhampur",
                    "Eastern: Kolkata",
                    "Training: Shimla"
                  ]
                },
                {
                  "title": "Air Force (7)",
                  "subnodes": [
                    "Central: Prayagraj",
                    "SW: Gandhinagar",
                    "Maintenance: Nagpur"
                  ]
                },
                {
                  "title": "Navy (3)",
                  "subnodes": [
                    "Western: Mumbai",
                    "Eastern: Vizag",
                    "Southern: Kochi"
                  ]
                },
                {
                  "title": "Joint Commands",
                  "subnodes": [
                    "Andaman: Port Blair",
                    "Strategic Forces Command"
                  ]
                }
              ]
            }
          },
          {
            "id": "defence-organisations-weapons",
            "title": "Defence Organisations, Weapons & Agreements",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "Organisations: DRDO (1958), HAL (1940), Border Roads (BRO - 1960)\nWeapons: INS Vikrant (IAC-1), Tejas (LCA), Arjun (MBT)\nAgreements: LEMOA (logistics), COMCASA (secure comms), BECA (geospatial), GSOMIA",
            "mindmap": {
              "root": "Defence GK",
              "branches": [
                {
                  "title": "Organisations",
                  "subnodes": [
                    "DRDO (1958)",
                    "HAL (Aviation)",
                    "BRO (Strategic borders)"
                  ]
                },
                {
                  "title": "Platforms",
                  "subnodes": [
                    "INS Vikrant (Carrier)",
                    "Tejas LCA (HAL)",
                    "Arjun MBT"
                  ]
                },
                {
                  "title": "Agreements",
                  "subnodes": [
                    "LEMOA (US logistics)",
                    "COMCASA (US secure)",
                    "BECA (US geospatial)"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "tactical-defence-gk",
        "title": "Exercises & Missile Systems",
        "topics": [
          {
            "id": "bilateral-exercises",
            "title": "Joint Military Exercises of India",
            "notes": "\n              <h3>Bilateral Exercises List (High-Yield)</h3>\n              <p>Armed forces carry out exercises to practice tactical joint operations. Memorize the major ones:</p>\n              <ul>\n                <li>**United States**:\n                  <ul>\n                    <li>Yudh Abhyas (Army)</li>\n                    <li>Vajra Prahar (Special Forces)</li>\n                    <li>Cope India (Air Force)</li>\n                    <li>Tarkash (Counter-terrorism joint drills)</li>\n                  </ul>\n                </li>\n                <li>**France**:\n                  <ul>\n                    <li>Shakti (Army)</li>\n                    <li>Varuna (Navy)</li>\n                    <li>Garuda (Air Force)</li>\n                  </ul>\n                </li>\n                <li>**Russia**:\n                  <ul>\n                    <li>Indra (Tri-services joint exercise)</li>\n                  </ul>\n                </li>\n                <li>**United Kingdom**:\n                  <ul>\n                    <li>Ajeya Warrior (Army)</li>\n                    <li>Konkan (Navy)</li>\n                    <li>Indradhanush (Air Force)</li>\n                  </ul>\n                </li>\n                <li>**Neighbours**:\n                  <ul>\n                    <li>Surya Kiran (Nepal Army)</li>\n                    <li>Sampriti (Bangladesh Army)</li>\n                    <li>Mitra Shakti (Sri Lanka Army)</li>\n                    <li>SLINEX (Sri Lanka Navy)</li>\n                    <li>Hand-in-Hand (China Army)</li>\n                  </ul>\n                </li>\n                <li>**Others**:\n                  <ul>\n                    <li>Nomadic Elephant (Mongolia Army)</li>\n                    <li>Garuda Shakti (Indonesia Army)</li>\n                    <li>Simbex (Singapore Navy)</li>\n                    <li>Dharma Guardian (Japan Army)</li>\n                  </ul>\n                </li>\n              </ul>\n            ",
            "formulas": "US: Yudh Abhyas, Vajra Prahar\nNepal: Surya Kiran\nFrance: Garuda(Air), Varuna(Navy), Shakti(Army)\nRussia: Indra",
            "mindmap": {
              "root": "Bilateral Drills",
              "branches": [
                {
                  "title": "US & UK",
                  "subnodes": [
                    "US: Yudh Abhyas, Vajra",
                    "UK: Ajeya Warrior, Konkan"
                  ]
                },
                {
                  "title": "France & Russia",
                  "subnodes": [
                    "FR: Shakti (Army)",
                    "FR: Varuna (Navy), Garuda (Air)",
                    "RU: Indra Tri-services"
                  ]
                },
                {
                  "title": "Subcontinent",
                  "subnodes": [
                    "Nepal: Surya Kiran",
                    "Bangladesh: Sampriti",
                    "Sri Lanka: Mitra Shakti"
                  ]
                },
                {
                  "title": "East Asia",
                  "subnodes": [
                    "Japan: Dharma Guardian",
                    "Mongolia: Nomadic Elephant",
                    "Singapore: Simbex"
                  ]
                }
              ]
            }
          },
          {
            "id": "missiles-systems",
            "title": "Integrated Guided Missile Program (IGMDP)",
            "notes": "\n              <h3>1. The IGMDP Program</h3>\n              <p>Conceived by **Dr. A.P.J. Abdul Kalam** in 1983 to make India self-sufficient in missile technology. Formally completed in 2008.</p>\n              <p>Mnemonic for the 5 core missiles: **PATNA**</p>\n              <ul>\n                <li>**P - Prithvi**: Short-range surface-to-surface ballistic missile. First missile under IGMDP.</li>\n                <li>**A - Agni**: Medium to intercontinental range surface-to-surface ballistic missile. (Agni 1 to 5). Agni-5 is an ICBM with a range of 5000+ km.</li>\n                <li>**T - Trishul**: Short-range low-altitude surface-to-air missile. (Development closed, technology acts as feed).</li>\n                <li>**N - Nag**: Third-generation fire-and-forget anti-tank guided missile (ATGM). Has land and heliborne versions.</li>\n                <li>**A - Akash**: Medium-range surface-to-air missile with multi-target engagement capability. Guided by Rajendra radar.</li>\n              </ul>\n              \n              <h3>2. Crucial Cruise & Air Defence Missiles</h3>\n              <ul>\n                <li>**BrahMos**: Supersonic cruise missile jointly developed with Russia.\n                  <ul>\n                    <li>Speed: **Mach 2.8 to 3.0** (World's fastest operational cruise missile).</li>\n                    <li>Can be launched from submarine, ships, aircraft, or land.</li>\n                  </ul>\n                </li>\n                <li>**Astra**: Beyond Visual Range (BVR) air-to-air missile integrated onto Sukhoi Su-30MKI and Tejas.</li>\n                <li>**K-Missile Series (K-15 Sagarika, K-4)**: Submarine-launched ballistic missiles (SLBMs) designed for Arihant nuclear submarine class.</li>\n                <li>**Helina (Dhruvastra)**: Helicopter-launched version of the Nag anti-tank missile.</li>\n              </ul>\n            ",
            "formulas": "PATNA: Prithvi, Agni, Trishul, Nag, Akash\nBrahMos Speed: Mach 2.8 - 3.0\nAstra: Air-to-Air (BVR)\nHelina: Helicopter ATGM",
            "mindmap": {
              "root": "Missile Systems",
              "branches": [
                {
                  "title": "IGMDP Ballistic",
                  "subnodes": [
                    "Prithvi: Surf-to-Surf",
                    "Agni: Medium/ICBM (5000km)",
                    "PATNA mnemonic"
                  ]
                },
                {
                  "title": "IGMDP Air Def",
                  "subnodes": [
                    "Trishul: Short range SAM",
                    "Akash: Med range, Rajendra radar"
                  ]
                },
                {
                  "title": "IGMDP Anti-Tank",
                  "subnodes": [
                    "Nag: Fire-and-Forget",
                    "Helina: Helicopter launch"
                  ]
                },
                {
                  "title": "Supersonic Cruise",
                  "subnodes": [
                    "BrahMos: India-Russia",
                    "Mach 2.8 - 3.0 speed",
                    "Sub/Ship/Air/Land launch"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "reasoning-oir",
        "title": "Reasoning & OIR (SSB)",
        "topics": [
          {
            "id": "syl-verbal-reasoning",
            "title": "Verbal Reasoning & OIR",
            "notes": "\n              <h3>1. Core Verbal Reasoning Topics</h3>\n              <p>Verbal reasoning tests the ability to analyze and solve problems containing written/verbal content. Key concepts include:</p>\n              <ul>\n                <li>**Analogy:** Finding relationships between pairs of words, letters, or numbers (e.g., Doctor : Hospital :: Teacher : School).</li>\n                <li>**Classification (Odd One Out):** Identifying the term that does not belong to the group (e.g., Apple, Banana, Potato, Orange -> Potato is a vegetable, others are fruits).</li>\n                <li>**Coding-Decoding:** Decrypting rules applied to letters or words. Look for alphabet position values (A=1, Z=26) and reverse positions (A-Z, B-Y, etc., sum = 27).</li>\n                <li>**Blood Relations:** Drawing family trees with symbols (+ for male, - for female, = for couples, vertical lines for generations) to solve relationship puzzles.</li>\n                <li>**Direction Sense:** Always draw the cardinal directions (North, South, East, West) and solve using the Pythagoras theorem for shortest distance.</li>\n                <li>**Syllogism:** Solving logical statements using Venn diagrams to check validity of conclusions.</li>\n              </ul>\n              \n              <h3>2. Officer Intelligence Rating (OIR) Verbal Tests</h3>\n              <p>OIR is the first test of SSB Stage 1. Common Verbal OIR patterns:</p>\n              <ul>\n                <li>**Word Association & Jumbled Words:** Unscrambling letters to form meaningful words and finding their category.</li>\n                <li>**Sentence Sequencing:** Arranging words or sentences in logical or alphabetical order.</li>\n                <li>**Dictionary Order:** Arranging words as they appear in a standard dictionary.</li>\n                <li>**Number/Letter Series:** Identifying patterns of arithmetic progression, prime numbers, squares, or alternating sequences.</li>\n              </ul>\n            ",
            "formulas": "A=1, B=2, ..., Z=26\nReverse pair: Sum of positions = 27\nOdd One Out rules\nPythagoras: H² = B² + P²\nFamily tree symbols",
            "mindmap": {
              "root": "Verbal Reasoning",
              "branches": [
                {
                  "title": "Logic & Relations",
                  "subnodes": [
                    "Blood Relations (Family Tree)",
                    "Syllogisms (Venn)",
                    "Direction Sense"
                  ]
                },
                {
                  "title": "Coding & Series",
                  "subnodes": [
                    "Coding-Decoding (A=1, Z=26)",
                    "Letter/Number series",
                    "Analogy relationships"
                  ]
                },
                {
                  "title": "OIR Verbal",
                  "subnodes": [
                    "Jumbled words",
                    "Dictionary order",
                    "Sentence completion"
                  ]
                }
              ]
            }
          },
          {
            "id": "syl-nonverbal-reasoning",
            "title": "Non-Verbal Reasoning & OIR",
            "notes": "\n              <h3>1. Core Non-Verbal Reasoning Topics</h3>\n              <p>Non-verbal reasoning tests the ability to analyze visual information and solve problems based on patterns, figures, and spatial relationships.</p>\n              <ul>\n                <li>**Pattern Completion:** Identifying the missing section of a larger geometric design or pattern.</li>\n                <li>**Figure Series & Analogy:** Understanding how a shape changes (rotation, addition/deletion of elements, inversion) and predicting the next figure.</li>\n                <li>**Embedded Figures:** Finding a small target shape hidden inside a more complex drawing.</li>\n                <li>**Paper Folding & Cutting:** Visualizing how paper looks when folded and punched with holes, then unfolded (uses vertical/horizontal symmetry lines).</li>\n                <li>**Mirror and Water Images:**\n                  <ul>\n                    <li>Mirror Image: Left-Right inversion (sides swap, top/bottom remain same).</li>\n                    <li>Water Image: Top-Bottom inversion (top/bottom swap, left/right remain same).</li>\n                  </ul>\n                </li>\n              </ul>\n              \n              <h3>2. SSB OIR Non-Verbal Intelligence Tests</h3>\n              <p>Crucial for securing high OIR ratings (OIR-1 or OIR-2). Key patterns:</p>\n              <ul>\n                <li>**Cube and Dice Tests:** Identifying opposite faces of a folded dice, or predicting standard vs. non-standard dice properties.\n                  <ul>\n                    <li>If two positions of a dice have one common number, rotate clockwise to find opposite pairs.</li>\n                  </ul>\n                </li>\n                <li>**Block/Cube Counting:** Counting the total number of blocks in a 3D stack (including hidden blocks supporting the upper layers).</li>\n                <li>**Figure Matrix:** Solving a 3x3 grid of shapes by identifying horizontal and vertical rule transitions.</li>\n                <li>**Dot Situation:** Finding the region in options that satisfies the exact same overlapping conditions of dots placed in the question figure.</li>\n              </ul>\n            ",
            "formulas": "Mirror: Left-Right flip\nWater: Top-Bottom flip\nDice rotation rules\nBlock counting: rows x columns x height\nSymmetry lines",
            "mindmap": {
              "root": "Non-Verbal",
              "branches": [
                {
                  "title": "Visual Patterns",
                  "subnodes": [
                    "Pattern completion",
                    "Figure series & rotation",
                    "Figure matrices"
                  ]
                },
                {
                  "title": "Spatial Tests",
                  "subnodes": [
                    "Paper folding/cutting",
                    "Embedded figures",
                    "Dot situations"
                  ]
                },
                {
                  "title": "OIR Non-Verbal",
                  "subnodes": [
                    "Dice opposite faces",
                    "Cube counting (hidden blocks)",
                    "Mirror & Water images"
                  ]
                }
              ]
            }
          },
          {
            "id": "syl-afcat-spatial",
            "title": "Spatial & Non-Verbal Reasoning (AFCAT)",
            "notes": "Detailed notes expanded in notes_extra_afcat.js",
            "formulas": "Key Types: Dot Situation, Venn Diagrams, Embedded Figures, Pattern Completion.",
            "mindmap": {
              "root": "Non-Verbal Reasoning",
              "branches": [
                {
                  "title": "Visual Puzzles",
                  "subnodes": [
                    "Dot Situation",
                    "Embedded Figures",
                    "Paper Folding"
                  ]
                },
                {
                  "title": "Logic",
                  "subnodes": [
                    "Venn Diagrams",
                    "Syllogisms"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "afcat-verbal-reasoning",
        "title": "Verbal Reasoning (AFCAT)",
        "topics": [
          {
            "id": "afcat-r-analogy",
            "title": "Ch.1 — Analogy (Verbal Reasoning)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Opposite letter: 27 - position\nA-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N\nNumber Analogy: identify rule (x2, squares, cubes) before checking options",
            "mindmap": {
              "root": "Analogy",
              "branches": [
                {
                  "title": "Word Analogy",
                  "subnodes": [
                    "Synonym/Antonym pairs",
                    "Category:member",
                    "Tool:worker",
                    "Country:capital"
                  ]
                },
                {
                  "title": "Letter Analogy",
                  "subnodes": [
                    "Positional shift (+n/-n)",
                    "Opposite pairs (sum=27)"
                  ]
                },
                {
                  "title": "Number Analogy",
                  "subnodes": [
                    "Squares/Cubes rule",
                    "Arithmetic ops",
                    "Mixed analogy"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-classification",
            "title": "Ch.2 — Classification / Odd One Out (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Check: primes, squares, cubes, divisibility\nLetter series: verify spacing gap is consistent\nWord: identify category membership carefully",
            "mindmap": {
              "root": "Classification",
              "branches": [
                {
                  "title": "Word",
                  "subnodes": [
                    "Category membership",
                    "Usage/function type"
                  ]
                },
                {
                  "title": "Letter",
                  "subnodes": [
                    "Spacing pattern",
                    "Positional gap"
                  ]
                },
                {
                  "title": "Number",
                  "subnodes": [
                    "Prime check",
                    "Square/Cube check",
                    "Divisibility"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-series",
            "title": "Ch.3 — Series Completion (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Number series: check +n, xn, squares, cubes, alternating ops\nAlphabet: track letter+number components separately\nContinuous pattern: write full repeat before filling blanks",
            "mindmap": {
              "root": "Series",
              "branches": [
                {
                  "title": "Number Series",
                  "subnodes": [
                    "Arithmetic (+n)",
                    "Geometric (xn)",
                    "Squares/Cubes",
                    "Alternating ops"
                  ]
                },
                {
                  "title": "Letter Series",
                  "subnodes": [
                    "Positional shift",
                    "Skip pattern",
                    "Alpha-numeric"
                  ]
                },
                {
                  "title": "Continuous Pattern",
                  "subnodes": [
                    "Write full repetition first",
                    "Fill blanks after"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-coding",
            "title": "Ch.4 — Coding and Decoding (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Letter shift: +n or -n positions\nMessage coding: find common word across two coded sentences\nSubstitution: trace the chain step by step",
            "mindmap": {
              "root": "Coding-Decoding",
              "branches": [
                {
                  "title": "Letter Coding",
                  "subnodes": [
                    "Shift +n/-n positions",
                    "Reverse alphabet"
                  ]
                },
                {
                  "title": "Number Coding",
                  "subnodes": [
                    "Letter position sum",
                    "Product coding"
                  ]
                },
                {
                  "title": "Message Coding",
                  "subnodes": [
                    "Intersection of common words",
                    "Elimination method"
                  ]
                },
                {
                  "title": "Substitution",
                  "subnodes": [
                    "Chain tracing",
                    "Verify with multiple examples"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-directions",
            "title": "Ch.5 — Direction Sense Test (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Displacement = sqrt(H^2 + V^2)\nShadow at sunrise: falls West\nShadow at sunset: falls East\nAlways draw diagram; mark N top, S bottom, E right, W left",
            "mindmap": {
              "root": "Directions",
              "branches": [
                {
                  "title": "Displacement",
                  "subnodes": [
                    "Pythagoras: sqrt(H^2+V^2)",
                    "Net horizontal + vertical"
                  ]
                },
                {
                  "title": "Shadow Rules",
                  "subnodes": [
                    "Sunrise: shadow falls West",
                    "Sunset: shadow falls East",
                    "Noon: shadow falls North"
                  ]
                },
                {
                  "title": "Method",
                  "subnodes": [
                    "Always draw diagram",
                    "Mark all 4 cardinal directions"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-clock-calendar",
            "title": "Ch.6 — Clock and Calendar (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Angle between hands: |30h - (11/2)m|\nHour speed: 0.5 deg/min | Minute: 6 deg/min\nCoincidings: 11 times in 12 hrs\nOdd days: Ord.yr=1, Leap=2, 100yr=5, 400yr=0",
            "mindmap": {
              "root": "Clock & Calendar",
              "branches": [
                {
                  "title": "Clock Angles",
                  "subnodes": [
                    "|30h - 5.5m| formula",
                    "Coincide: 11 times/12 hr",
                    "Right angle: 22 times/12 hr"
                  ]
                },
                {
                  "title": "Calendar Odd Days",
                  "subnodes": [
                    "Ordinary year: 1",
                    "Leap year: 2",
                    "100 years: 5",
                    "400 years: 0"
                  ]
                },
                {
                  "title": "Day Codes",
                  "subnodes": [
                    "0=Sunday, 1=Monday ... 6=Saturday"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-venn",
            "title": "Ch.7 — Logical Venn Diagrams (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "10 Standard Cases: Nested, Disjoint, Partially overlapping\nCase VIII: Seconds < Minutes < Hours (concentric)\nCase VII: Doctors, Lawyers, Engineers (all disjoint)",
            "mindmap": {
              "root": "Venn Diagrams",
              "branches": [
                {
                  "title": "Relationship Types",
                  "subnodes": [
                    "Subset (concentric)",
                    "Disjoint (separate)",
                    "Partial overlap (intersecting)"
                  ]
                },
                {
                  "title": "3-Set Cases",
                  "subnodes": [
                    "All subsets of each other",
                    "All disjoint",
                    "Two overlap, one separate",
                    "All overlap in centre"
                  ]
                },
                {
                  "title": "Strategy",
                  "subnodes": [
                    "Identify pairwise relationship first",
                    "Then combine into final diagram"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-syllogism",
            "title": "Ch.8 — Syllogism (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "A: All S are P | E: No S is P\nI: Some S are P | O: Some S are not P\nDraw minimum-possibility Venn; test conclusions against all valid diagrams",
            "mindmap": {
              "root": "Syllogism",
              "branches": [
                {
                  "title": "Proposition Types",
                  "subnodes": [
                    "A: Universal Affirmative",
                    "E: Universal Negative",
                    "I: Particular Affirmative",
                    "O: Particular Negative"
                  ]
                },
                {
                  "title": "Method",
                  "subnodes": [
                    "Draw all valid Venn diagrams",
                    "Test conclusion in each",
                    "Must hold in ALL diagrams"
                  ]
                },
                {
                  "title": "Special Rules",
                  "subnodes": [
                    "Either/Or: complementary pair",
                    "'Some' is weakest claim",
                    "Need 2 universals for 'All' conclusion"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-conclusions",
            "title": "Ch.9 — Statements and Conclusions (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Valid if: follows necessarily from statement alone\nInvalid if: uses absolute words (all/always/never) not in statement\nDo not bring external knowledge into reasoning",
            "mindmap": {
              "root": "Statements & Conclusions",
              "branches": [
                {
                  "title": "Valid Conclusion Rules",
                  "subnodes": [
                    "Directly follows from statement",
                    "No external knowledge",
                    "Moderate language (some/may)"
                  ]
                },
                {
                  "title": "Invalid Conclusion Rules",
                  "subnodes": [
                    "Absolute words not in statement",
                    "Contradicts given statement",
                    "External assumption needed"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-assumptions",
            "title": "Ch.10 — Statements and Assumptions (Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Implicit if: necessary unstated premise for statement to be actionable\nTest: if assumption is false, does statement become illogical?\nAll/every/each/only in assumption = usually NOT implicit",
            "mindmap": {
              "root": "Statements & Assumptions",
              "branches": [
                {
                  "title": "Implicit Assumption Test",
                  "subnodes": [
                    "Negate assumption",
                    "If statement fails: IMPLICIT",
                    "If statement stands: NOT implicit"
                  ]
                },
                {
                  "title": "Red Flags (NOT implicit)",
                  "subnodes": [
                    "'All' / 'Every' / 'Each' / 'Only'",
                    "Already stated in premise",
                    "Common knowledge only"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "afcat-nonverbal-reasoning",
        "title": "Non-Verbal Reasoning (AFCAT)",
        "topics": [
          {
            "id": "afcat-r-fig-analogy",
            "title": "Ch.11 — Figure Analogy (Non-Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Track: Rotation (45/90/135/180 CW or ACW)\nReflection: H-flip or V-flip\nElement Add/Remove/Shift/Replace/Shading\nComponent Tracking: isolate one element at a time",
            "mindmap": {
              "root": "Figure Analogy",
              "branches": [
                {
                  "title": "Transformation Types",
                  "subnodes": [
                    "Rotation: 45/90/135/180",
                    "Reflection: H-flip / V-flip",
                    "Shading change",
                    "Element add/remove"
                  ]
                },
                {
                  "title": "Component Tracking",
                  "subnodes": [
                    "Isolate 1 element",
                    "Identify its transformation",
                    "Apply to question figure"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-fig-class-series",
            "title": "Ch.12&13 — Figure Classification & Series (Non-Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Classification: check sides, symmetry, rotation vs mirror, shading ratio\nSeries: rotation pattern, element movement, addition/subtraction, alternating\nAlways track ONE component across all frames",
            "mindmap": {
              "root": "Fig Classification & Series",
              "branches": [
                {
                  "title": "Classification Keys",
                  "subnodes": [
                    "Number of sides",
                    "Symmetry axis count",
                    "Rotation vs Mirror",
                    "Shading ratio"
                  ]
                },
                {
                  "title": "Series Keys",
                  "subnodes": [
                    "Rotation per step",
                    "Element added/removed",
                    "Movement direction",
                    "Alternating pattern"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-fig-completion",
            "title": "Ch.14 — Figure/Pattern Completion (Non-Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Identify symmetry type: Axial, Rotational (90 deg), Central (180 deg), Tile\nUse elimination: isolate one element in adjacent quadrant\nOpposite quadrants = 180 deg rotations of each other",
            "mindmap": {
              "root": "Pattern Completion",
              "branches": [
                {
                  "title": "Symmetry Types",
                  "subnodes": [
                    "Axial: mirror along axis",
                    "Rotational: 90 deg",
                    "Central: 180 deg opposite quadrants",
                    "Tile repetition"
                  ]
                },
                {
                  "title": "Method",
                  "subnodes": [
                    "Identify symmetry type first",
                    "Use elimination",
                    "Check one element in adjacent quadrant"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-embedded",
            "title": "Ch.15 — Embedded Figures (Non-Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Study unique corner/angle/junction of target figure\nTarget must appear in original orientation (no rotation)\nTrace exact outline in complex figure to confirm",
            "mindmap": {
              "root": "Embedded Figures",
              "branches": [
                {
                  "title": "Strategy",
                  "subnodes": [
                    "Study unique junction/corner",
                    "Target in original orientation",
                    "Trace exact outline"
                  ]
                },
                {
                  "title": "Elimination",
                  "subnodes": [
                    "Reject options missing a key angle",
                    "Reject if extra lines break shape"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-dot",
            "title": "Ch.16 — Dot Situation (Non-Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Define dot condition: In(A) AND In(B) AND Out(C)\nFind option where same region exists\nEliminate if required shapes do not overlap in option",
            "mindmap": {
              "root": "Dot Situation",
              "branches": [
                {
                  "title": "Method",
                  "subnodes": [
                    "Write condition: In(A) AND In(B) AND Out(C)",
                    "Find matching region in each option"
                  ]
                },
                {
                  "title": "Elimination",
                  "subnodes": [
                    "Region doesn't exist in option",
                    "Required overlap absent"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-cube-dice",
            "title": "Ch.17 — Cube and Dice (Non-Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "3-face painted (corners): 8 always\n2-face (edges): 12(n-2)\n1-face (faces): 6(n-2)^2\n0-face (inner): (n-2)^3\nStandard dice: opposite faces sum to 7 (1-6, 2-5, 3-4)",
            "mindmap": {
              "root": "Cube & Dice",
              "branches": [
                {
                  "title": "Painted Cube Formulas",
                  "subnodes": [
                    "3-face: 8 always",
                    "2-face: 12(n-2)",
                    "1-face: 6(n-2)^2",
                    "0-face: (n-2)^3"
                  ]
                },
                {
                  "title": "Standard Dice",
                  "subnodes": [
                    "Opposite faces sum = 7",
                    "1-6, 2-5, 3-4 pairs",
                    "Common face method for unknowns"
                  ]
                }
              ]
            }
          },
          {
            "id": "afcat-r-fig-coding",
            "title": "Ch.18 — Figure Coding (Non-Verbal)",
            "notes": "Detailed notes expanded in notes_extra_afcat_reasoning.js",
            "formulas": "Each code letter = one visual property (shape, shading, size, orientation)\nGroup figures by shared first-letter code to decode that property\nGroup by shared second-letter to decode second property\nBuild decoding table before applying to unknown figure",
            "mindmap": {
              "root": "Figure Coding",
              "branches": [
                {
                  "title": "Decoding Method",
                  "subnodes": [
                    "Group by first code letter",
                    "Identify shared visual property",
                    "Group by second letter",
                    "Build decoding table"
                  ]
                },
                {
                  "title": "Visual Properties",
                  "subnodes": [
                    "Shape type",
                    "Shading (filled/empty)",
                    "Size (large/small)",
                    "Orientation"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "current-affairs": {
    "title": "Current Affairs & GK",
    "chapters": [
      {
        "id": "schemes-policies",
        "title": "Schemes, Policies & Summits",
        "topics": [
          {
            "id": "ca-schemes",
            "title": "Major Government Schemes",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "PM-KISAN: ₹6000/yr\nPM-JAY: ₹5L health cover\nJan Dhan: Zero balance a/c\nMGNREGA: 100 days wage",
            "mindmap": {
              "root": "Govt Schemes",
              "branches": [
                {
                  "title": "Flagship",
                  "subnodes": [
                    "PM-KISAN",
                    "PM-JAY",
                    "Swachh Bharat",
                    "PMAY"
                  ]
                },
                {
                  "title": "Financial Inclusion",
                  "subnodes": [
                    "Jan Dhan",
                    "MUDRA",
                    "Atal Pension"
                  ]
                },
                {
                  "title": "Rural",
                  "subnodes": [
                    "MGNREGA",
                    "Jal Jeevan",
                    "Ujjwala"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-relations",
            "title": "India's International Relations & Forums",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "Quad: IN, US, JP, AU\nBRICS+: 2024 expansion\nG20 India: Sep 2023\nISA: India + France",
            "mindmap": {
              "root": "International Relations",
              "branches": [
                {
                  "title": "Groupings",
                  "subnodes": [
                    "Quad",
                    "BRICS",
                    "G20",
                    "SCO",
                    "NAM"
                  ]
                },
                {
                  "title": "Key Relations",
                  "subnodes": [
                    "India-US",
                    "India-Japan",
                    "India-France",
                    "India-China"
                  ]
                },
                {
                  "title": "UN",
                  "subnodes": [
                    "UNSC reform",
                    "G4",
                    "Peacekeeping"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-policies",
            "title": "National Policies & Missions",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "NEP 2020: 5+3+3+4 structure\nDigital India: UPI 10B+ txns/mo\nMake in India: 25 sectors\nStart-Up India: 100+ unicorns",
            "mindmap": {
              "root": "National Policies",
              "branches": [
                {
                  "title": "NEP 2020",
                  "subnodes": [
                    "5+3+3+4",
                    "Mother tongue",
                    "ABC"
                  ]
                },
                {
                  "title": "Digital India",
                  "subnodes": [
                    "Aadhaar",
                    "UPI",
                    "BharatNet"
                  ]
                },
                {
                  "title": "Industrial",
                  "subnodes": [
                    "Make in India",
                    "Start-Up India",
                    "Atmanirbhar"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-summits",
            "title": "Major International Summits",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "COP21: Paris Agreement (2015)\nG20: 85% of world GDP\nG7: 7 advanced economies\nWEF: Davos, Switzerland",
            "mindmap": {
              "root": "Summits",
              "branches": [
                {
                  "title": "Climate",
                  "subnodes": [
                    "COP21 Paris",
                    "COP26 Glasgow",
                    "COP28 Dubai"
                  ]
                },
                {
                  "title": "Economic",
                  "subnodes": [
                    "G20",
                    "G7",
                    "WEF Davos"
                  ]
                },
                {
                  "title": "India-hosted",
                  "subnodes": [
                    "G20 New Delhi 2023",
                    "ISA Assembly",
                    "Voice of Global South"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "reports-awards-judgments",
        "title": "Reports, Awards & Judgments",
        "topics": [
          {
            "id": "ca-reports",
            "title": "Important Reports & Indices",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "HDI: UNDP\nGHI: Concern Worldwide\nEoDB: World Bank (discontinued)\nGender Gap: WEF\nCPI: Transparency Intl",
            "mindmap": {
              "root": "Reports & Indices",
              "branches": [
                {
                  "title": "Global",
                  "subnodes": [
                    "HDI",
                    "GHI",
                    "Gender Gap",
                    "CPI"
                  ]
                },
                {
                  "title": "India",
                  "subnodes": [
                    "Economic Survey",
                    "NITI Reports",
                    "RBI Annual"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-judgments",
            "title": "Landmark SC & HC Judgments",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "Kesavananda (1973): Basic Structure\nManeka Gandhi (1978): Art 21 expanded\nPuttaswamy (2017): Right to Privacy\nBommai (1994): Art 356 judicial review",
            "mindmap": {
              "root": "Judgments",
              "branches": [
                {
                  "title": "Constitutional",
                  "subnodes": [
                    "Kesavananda",
                    "SR Bommai",
                    "EWS Reservation"
                  ]
                },
                {
                  "title": "Rights",
                  "subnodes": [
                    "Maneka Gandhi",
                    "Puttaswamy",
                    "Navtej Johar"
                  ]
                },
                {
                  "title": "Social",
                  "subnodes": [
                    "Vishaka",
                    "Shah Bano",
                    "Sabarimala"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-awards",
            "title": "National Awards & Honours",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "Bharat Ratna > Padma Vibhushan > Padma Bhushan > Padma Shri\nPVC > MVC > VC (wartime)\nAshoka Chakra > KC > SC (peacetime)",
            "mindmap": {
              "root": "Awards",
              "branches": [
                {
                  "title": "Civilian",
                  "subnodes": [
                    "Bharat Ratna",
                    "Padma Awards"
                  ]
                },
                {
                  "title": "Gallantry",
                  "subnodes": [
                    "PVC",
                    "Ashoka Chakra"
                  ]
                },
                {
                  "title": "Other",
                  "subnodes": [
                    "Khel Ratna",
                    "Dronacharya",
                    "Phalke"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-economic-measures",
            "title": "Economic Measures & Policy Packages",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "Atmanirbhar: ₹20L Cr (10% of GDP)\nPLI: 14 sectors\nNIP: ₹111L Cr infra\nGati Shakti: 16 ministries\nONORC: Aadhaar-linked PDS",
            "mindmap": {
              "root": "Economic Measures",
              "branches": [
                {
                  "title": "Budget",
                  "subnodes": [
                    "Fiscal Deficit",
                    "CapEx push",
                    "Feb 1 presentation"
                  ]
                },
                {
                  "title": "Atmanirbhar",
                  "subnodes": [
                    "5 Pillars",
                    "₹20L Cr stimulus"
                  ]
                },
                {
                  "title": "Initiatives",
                  "subnodes": [
                    "PLI Scheme",
                    "NIP",
                    "Gati Shakti",
                    "ONORC"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-science-tech-space",
            "title": "Science, Tech & Space Missions",
            "notes": "Detailed notes expanded in notes_extra_9.js",
            "formulas": "ISRO: Shukrayaan-1 (Venus), Gaganyaan (Manned), Chandrayaan-4\nDefence: INS Mahendragiri (stealth frigate), Agni-5 MIRV\nAI: BharatGPT, Krutrim AI",
            "mindmap": {
              "root": "Science & Space",
              "branches": [
                {
                  "title": "Space Missions",
                  "subnodes": [
                    "Gaganyaan (manned)",
                    "Shukrayaan-1 (Venus)",
                    "Chandrayaan-4 (sample)"
                  ]
                },
                {
                  "title": "Defence Tech",
                  "subnodes": [
                    "INS Mahendragiri",
                    "Agni-5 MIRV",
                    "Prithvi-II induction"
                  ]
                },
                {
                  "title": "AI & Cyber",
                  "subnodes": [
                    "BharatGPT",
                    "Krutrim AI",
                    "Sanchar Saathi portal"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-upsc-master-framework",
            "title": "UPSC Core Current Affairs Syllabus Map",
            "notes": "Detailed notes expanded in notes_extra_general_studies.js",
            "formulas": "Polity: Art 1-395\nEconomy: Repo, CPI, WPI\nEnvironment: COP, Ramsar\nSecurity: Cyber, Maritime",
            "mindmap": {
              "root": "UPSC CA Syllabus",
              "branches": [
                {
                  "title": "Polity & Economy",
                  "subnodes": [
                    "Constitutional Amendments",
                    "Landmark SC Judgments",
                    "Inflation & Repo Rate",
                    "CBDC & UPI"
                  ]
                },
                {
                  "title": "Environment & IR",
                  "subnodes": [
                    "COP Agreements",
                    "Ramsar Sites",
                    "Bilateral Pacts",
                    "BRICS/SCO/Quad"
                  ]
                },
                {
                  "title": "Security & Agri",
                  "subnodes": [
                    "Border Management",
                    "Cyber Warfare",
                    "MSP & Crop Insurance",
                    "Agri-Tech & Soil"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "global-events-defence",
        "title": "Global Events & Strategic Updates",
        "topics": [
          {
            "id": "ca-geopolitical-flashpoints",
            "title": "Global Geopolitical Flashpoints",
            "notes": "Detailed notes expanded in notes_extra_10.js",
            "formulas": "Red Sea Crisis: Bab-el-Mandeb Strait\nUkraine-Russia: Black Sea/Crimea\nSouth China Sea: Nine-Dash Line\nTaiwan Strait: First Island Chain",
            "mindmap": {
              "root": "Geopolitical Flashpoints",
              "branches": [
                {
                  "title": "Middle East & Red Sea",
                  "subnodes": [
                    "Bab-el-Mandeb Chokepoint",
                    "Operation Prosperity Guardian",
                    "India's Operation Sankalp"
                  ]
                },
                {
                  "title": "Eastern Europe",
                  "subnodes": [
                    "Black Sea blockade",
                    "Crimea and Sea of Azov",
                    "Strategic Suwalki Gap"
                  ]
                },
                {
                  "title": "East & South China Seas",
                  "subnodes": [
                    "Taiwan Strait transit",
                    "Nine-Dash Line claims",
                    "First Island Chain defence"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-defence-cooperation",
            "title": "Bilateral Defence Cooperation & Deals",
            "notes": "Detailed notes expanded in notes_extra_10.js",
            "formulas": "India-US: GE F414 Engine & MQ-9B UAVs\nIndia-France: Rafale-M & Scorpene (Project-75I)\nIndia-Russia: RELOS & S-400\nIndo-Pacific: Malabar & Milan Exercises",
            "mindmap": {
              "root": "Defence Partnerships",
              "branches": [
                {
                  "title": "India-US Partnerships",
                  "subnodes": [
                    "GE F414 co-production",
                    "MQ-9B Predator procurement",
                    "iCET dialogue"
                  ]
                },
                {
                  "title": "India-France Deals",
                  "subnodes": [
                    "Rafale-M for INS Vikrant",
                    "3 additional Scorpene submarines",
                    "Shakti engine co-development"
                  ]
                },
                {
                  "title": "Multilateral Exercises",
                  "subnodes": [
                    "Exercise Malabar (Quad)",
                    "Exercise Milan (Multilateral)",
                    "Pitch Black (Australia)"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-red-sea-crisis",
            "title": "Red Sea Crisis & Maritime Security Ops",
            "notes": "Detailed notes expanded in notes_extra_10.js",
            "formulas": "Chokepoint: Bab-el-Mandeb Strait\nThreat: Houthi drone & missile attacks\nOperation Sankalp: India's escort & patrol\nOperation Prosperity Guardian: US-led coalition",
            "mindmap": {
              "root": "Red Sea Crisis",
              "branches": [
                {
                  "title": "Strategic Impact",
                  "subnodes": [
                    "Suez Canal traffic drop",
                    "Route diversion via Cape of Good Hope",
                    "Increased freight rates"
                  ]
                },
                {
                  "title": "India's Response",
                  "subnodes": [
                    "Operation Sankalp",
                    "INS Kolkata & INS Kochi deployments",
                    "Anti-piracy patrols"
                  ]
                },
                {
                  "title": "Key Chokepoints",
                  "subnodes": [
                    "Bab-el-Mandeb Strait",
                    "Gulf of Aden",
                    "Strait of Hormuz"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-quad-indopacific",
            "title": "Indo-Pacific Security & Quad Dynamics",
            "notes": "Detailed notes expanded in notes_extra_10.js",
            "formulas": "Quad: India, USA, Japan, Australia\nFirst Island Chain: Kuril Islands to Borneo\nSouth China Sea: Nine-Dash Line disputes\nExercises: Malabar, Milan 2026",
            "mindmap": {
              "root": "Indo-Pacific & Quad",
              "branches": [
                {
                  "title": "Quad Security",
                  "subnodes": [
                    "Free and Open Indo-Pacific",
                    "Maritime Domain Awareness",
                    "Quad Summit 2026"
                  ]
                },
                {
                  "title": "Conflict Zones",
                  "subnodes": [
                    "South China Sea",
                    "Taiwan Strait",
                    "Senkaku Islands"
                  ]
                },
                {
                  "title": "Exercises",
                  "subnodes": [
                    "Exercise Malabar",
                    "Exercise Milan",
                    "Exercise Pitch Black"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-icet-drones",
            "title": "India-US Tech Cooperation & MQ-9B Drones",
            "notes": "Detailed notes expanded in notes_extra_10.js",
            "formulas": "iCET: Initiative on Critical and Emerging Technology\nGE F414: Jet engine co-production in India\nMQ-9B: 31 Predator drones (15 SeaGuardian, 16 SkyGuardian)",
            "mindmap": {
              "root": "India-US Tech",
              "branches": [
                {
                  "title": "MQ-9B Predator",
                  "subnodes": [
                    "31 units total",
                    "15 SeaGuardian for Navy",
                    "16 SkyGuardian for Army & Air Force"
                  ]
                },
                {
                  "title": "Engine Deal",
                  "subnodes": [
                    "GE F414 co-production",
                    "HAL partnership",
                    "80 percent tech transfer"
                  ]
                },
                {
                  "title": "iCET Domains",
                  "subnodes": [
                    "Space collaboration",
                    "Semiconductors",
                    "Artificial Intelligence & Quantum"
                  ]
                }
              ]
            }
          },
          {
            "id": "ca-spain-c295",
            "title": "India-Spain Aerospace Cooperation & C-295 Project"
          },
          {
            "id": "ca-space-nuclear",
            "title": "Strategic Space & Missile Advancements",
            "notes": "Detailed notes expanded in notes_extra_10.js",
            "formulas": "Mission Divyastra: Agni-V with MIRV technology\nGaganyaan: First human spaceflight (3 crew, 3 days)\nSpace Defense: Defense Space Agency (DSA) & Mission Shakti (ASAT)",
            "mindmap": {
              "root": "Space & Missiles",
              "branches": [
                {
                  "title": "Missile Tech",
                  "subnodes": [
                    "Agni-V MIRV",
                    "Mission Divyastra",
                    "Intercontinental range"
                  ]
                },
                {
                  "title": "Space Programs",
                  "subnodes": [
                    "Gaganyaan crewed flight",
                    "Vyommitra humanoid",
                    "Chandrayaan-4 sample return"
                  ]
                },
                {
                  "title": "Defense Space",
                  "subnodes": [
                    "DSA coordination",
                    "Mission Shakti ASAT",
                    "Military satellite systems"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "environment": {
    "title": "Environment & Ecology",
    "chapters": [
      {
        "id": "biodiversity-conservation",
        "title": "Biodiversity & Wildlife Conservation",
        "topics": [
          {
            "id": "env-hotspots",
            "title": "Biodiversity Hotspots & Biosphere Reserves",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "36 global hotspots, 4 in India\nHotspot criteria: 1500 endemic plants + 70% habitat lost\n18 Biosphere Reserves in India",
            "mindmap": {
              "root": "Biodiversity",
              "branches": [
                {
                  "title": "India's 4 Hotspots",
                  "subnodes": [
                    "Western Ghats",
                    "Eastern Himalayas",
                    "Indo-Burma",
                    "Sundaland"
                  ]
                },
                {
                  "title": "Biosphere Reserves",
                  "subnodes": [
                    "Nilgiri (first)",
                    "Sundarbans",
                    "Nanda Devi"
                  ]
                }
              ]
            }
          },
          {
            "id": "env-conservation",
            "title": "Wildlife Protection & Conservation Projects",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "Project Tiger: 1973, 53 reserves, ~3000+ tigers\nProject Elephant: 1992, 32 reserves\nProject Cheetah: 2022, Kuno NP\n106 National Parks\n85+ Ramsar Sites",
            "mindmap": {
              "root": "Conservation",
              "branches": [
                {
                  "title": "Projects",
                  "subnodes": [
                    "Project Tiger",
                    "Project Elephant",
                    "Project Cheetah"
                  ]
                },
                {
                  "title": "Protected Areas",
                  "subnodes": [
                    "106 National Parks",
                    "567 Sanctuaries",
                    "53 Tiger Reserves"
                  ]
                },
                {
                  "title": "Legislation",
                  "subnodes": [
                    "Wildlife Protection Act 1972",
                    "6 Schedules"
                  ]
                }
              ]
            }
          },
          {
            "id": "env-species",
            "title": "Species in News & IUCN Red List",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "IUCN: EX>EW>CR>EN>VU>NT>LC\nGIB: Critically Endangered (~150)\nAsiatic Lion: Gir only (~674)\nGangetic Dolphin: National Aquatic Animal",
            "mindmap": {
              "root": "Species",
              "branches": [
                {
                  "title": "Critically Endangered",
                  "subnodes": [
                    "Great Indian Bustard"
                  ]
                },
                {
                  "title": "Endangered",
                  "subnodes": [
                    "Asiatic Lion",
                    "Red Panda",
                    "Gangetic Dolphin"
                  ]
                },
                {
                  "title": "Vulnerable",
                  "subnodes": [
                    "Snow Leopard",
                    "Indian Rhino",
                    "African Cheetah"
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "id": "climate-laws-energy",
        "title": "Climate, Laws & Renewable Energy",
        "topics": [
          {
            "id": "env-treaties",
            "title": "Climate Change Treaties & India's NDCs",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "Paris Agreement (COP21, 2015): Limit to 1.5-2°C\nKyoto Protocol 1997: Binding for Annex I\nMontreal Protocol 1987: Ozone\nIndia Net Zero: 2070\nPanchamrit: 500 GW RE by 2030",
            "mindmap": {
              "root": "Climate Treaties",
              "branches": [
                {
                  "title": "Key Agreements",
                  "subnodes": [
                    "UNFCCC",
                    "Kyoto",
                    "Paris",
                    "Montreal",
                    "Kigali"
                  ]
                },
                {
                  "title": "India's NDC",
                  "subnodes": [
                    "Panchamrit Goals",
                    "Net Zero 2070",
                    "500 GW RE"
                  ]
                },
                {
                  "title": "Other Conventions",
                  "subnodes": [
                    "Ramsar",
                    "CBD",
                    "CITES"
                  ]
                }
              ]
            }
          },
          {
            "id": "env-laws",
            "title": "Environmental Legislation & EIA",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "EPA 1986: Post-Bhopal umbrella law\nForest Conservation Act 1980\nNGT Act 2010\nEIA: Screening→Scoping→Public Consultation→Appraisal",
            "mindmap": {
              "root": "Env Laws",
              "branches": [
                {
                  "title": "Key Acts",
                  "subnodes": [
                    "WPA 1972",
                    "Water Act 1974",
                    "EPA 1986",
                    "FCA 1980"
                  ]
                },
                {
                  "title": "Modern",
                  "subnodes": [
                    "Biodiversity Act 2002",
                    "Forest Rights 2006",
                    "NGT 2010"
                  ]
                },
                {
                  "title": "EIA",
                  "subnodes": [
                    "4 stages",
                    "EAC",
                    "EIA 2020 Draft controversy"
                  ]
                }
              ]
            }
          },
          {
            "id": "env-renewable",
            "title": "Renewable Energy & Green Initiatives",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "Target: 500 GW non-fossil by 2030\nISA: India + France (Gurugram HQ)\nGreen Hydrogen: 5 MMT by 2030\nE20: 20% ethanol blending\nFAME-II: EV subsidies",
            "mindmap": {
              "root": "Renewable Energy",
              "branches": [
                {
                  "title": "Solar",
                  "subnodes": [
                    "NSM",
                    "PM-KUSUM",
                    "ISA",
                    "OSOWOG"
                  ]
                },
                {
                  "title": "Green Hydrogen",
                  "subnodes": [
                    "National Mission 2023",
                    "5 MMT target"
                  ]
                },
                {
                  "title": "Transport",
                  "subnodes": [
                    "FAME-II (EVs)",
                    "Ethanol Blending"
                  ]
                }
              ]
            }
          },
          {
            "id": "env-pollution",
            "title": "Pollution Control & Clean India Missions",
            "notes": "Detailed notes expanded in notes_extra_5.js",
            "formulas": "Namami Gange: ₹20,000 Cr\nNCAP: 40% PM reduction by 2025-26\nBS-VI: 2020 (leapfrogged BS-V)\nSUP Ban: 2022",
            "mindmap": {
              "root": "Pollution Control",
              "branches": [
                {
                  "title": "Water",
                  "subnodes": [
                    "Namami Gange",
                    "NMCG",
                    "STPs"
                  ]
                },
                {
                  "title": "Air",
                  "subnodes": [
                    "NCAP",
                    "BS-VI",
                    "SAFAR"
                  ]
                },
                {
                  "title": "Waste",
                  "subnodes": [
                    "SUP Ban",
                    "EPR",
                    "Swachh Bharat Phase 2"
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NOTES_DATABASE: typeof NOTES_DATABASE !== 'undefined' ? NOTES_DATABASE : window.NOTES_DATABASE };
}
