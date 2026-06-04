module.exports = {
  mathematics: {
    title: "Mathematics (NDA/CDS)",
    chapters: [
      {
        id: "trigonometry",
        title: "Trigonometry",
        topics: [
          {
            id: "trig-identities",
            title: "Trigonometric Identities & Values",
            notes: `
              <h3>1. Core Trigonometric Identities</h3>
              <p>Pythagorean identities form the bedrock of trigonometric simplification:</p>
              <ul>
                <li><strong>sin²θ + cos²θ = 1</strong> ⇒ sin²θ = 1 - cos²θ ; cos²θ = 1 - sin²θ</li>
                <li><strong>sec²θ - tan²θ = 1</strong> (θ ≠ (2n+1)π/2) ⇒ sec²θ = 1 + tan²θ ; tan²θ = sec²θ - 1</li>
                <li><strong>cosec²θ - cot²θ = 1</strong> (θ ≠ nπ) ⇒ cosec²θ = 1 + cot²θ ; cot²θ = cosec²θ - 1</li>
              </ul>
              
              <h3>2. Sum & Difference Formulas</h3>
              <p>Used to find values of angles like 15°, 75°, 105°, etc.:</p>
              <ul>
                <li>sin(A ± B) = sin A cos B ± cos A sin B</li>
                <li>cos(A ± B) = cos A cos B ∓ sin A sin B</li>
                <li>tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)</li>
                <li>cot(A ± B) = (cot A cot B ∓ 1) / (cot B ± cot A)</li>
              </ul>
              
              <h3>3. Multiple Angle Identities</h3>
              <p>Essential for reducing powers in calculus integrations:</p>
              <ul>
                <li>sin 2A = 2 sin A cos A = 2tan A / (1 + tan² A)</li>
                <li>cos 2A = cos² A - sin² A = 2cos² A - 1 = 1 - 2sin² A = (1 - tan² A)/(1 + tan² A)</li>
                <li>tan 2A = 2tan A / (1 - tan² A)</li>
                <li>sin 3A = 3sin A - 4sin³ A</li>
                <li>cos 3A = 4cos³ A - 3cos A</li>
                <li>tan 3A = (3tan A - tan³ A) / (1 - 3tan² A)</li>
              </ul>
              
              <h3>4. Product-to-Sum & Sum-to-Product</h3>
              <p>Key transformations for calculus and equations:</p>
              <ul>
                <li>2 sin A cos B = sin(A + B) + sin(A - B)</li>
                <li>2 cos A sin B = sin(A + B) - sin(A - B)</li>
                <li>2 cos A cos B = cos(A + B) + cos(A - B)</li>
                <li>2 sin A sin B = cos(A - B) - cos(A + B)</li>
                <li>sin C + sin D = 2 sin((C+D)/2) cos((C-D)/2)</li>
                <li>sin C - sin D = 2 cos((C+D)/2) sin((C-D)/2)</li>
                <li>cos C + cos D = 2 cos((C+D)/2) cos((C-D)/2)</li>
                <li>cos C - cos D = -2 sin((C+D)/2) sin((C-D)/2)</li>
              </ul>
            `,
            formulas: `sin(A+B) = sinA·cosB + cosA·sinB\ncos(2A) = 2cos²A - 1 = 1 - 2sin²A\ntan(2A) = 2tanA / (1 - tan²A)\nsin(3A) = 3sinA - 4sin³A\ncos(3A) = 4cos³A - 3cosA\n2sinA·cosB = sin(A+B) + sin(A-B)\nsinC + sinD = 2sin((C+D)/2)cos((C-D)/2)`,
            mindmap: {
              root: "Trig Identities",
              branches: [
                {
                  title: "Pythagorean",
                  subnodes: ["sin²θ + cos²θ = 1", "sec²θ - tan²θ = 1", "cosec²θ - cot²θ = 1"]
                },
                {
                  title: "Compounded",
                  subnodes: ["sin(A±B) expansion", "cos(A±B) signs flip", "tan(A±B) fractions"]
                },
                {
                  title: "Multiples",
                  subnodes: ["sin 2A / cos 2A", "3A cubic identities", "Tan 2A and 3A forms"]
                },
                {
                  title: "Transformations",
                  subnodes: ["2 sin A cos B product", "sin C + sin D sum rules", "cos C - cos D negative factor"]
                }
              ]
            }
          },
          {
            id: "inverse-trig",
            title: "Inverse Trigonometric Functions",
            notes: `
              <h3>1. Principal Value Branches (PVB)</h3>
              <p>The domain and range must be strictly memorized to solve standard NDA/CDS equations:</p>
              <ul>
                <li><strong>sin⁻¹ x</strong> : Domain = [-1, 1] , Range (PVB) = [-π/2, π/2]</li>
                <li><strong>cos⁻¹ x</strong> : Domain = [-1, 1] , Range (PVB) = [0, π]</li>
                <li><strong>tan⁻¹ x</strong> : Domain = ℝ , Range (PVB) = (-π/2, π/2)</li>
                <li><strong>cosec⁻¹ x</strong> : Domain = ℝ - (-1, 1) , Range (PVB) = [-π/2, π/2] - {0}</li>
                <li><strong>sec⁻¹ x</strong> : Domain = ℝ - (-1, 1) , Range (PVB) = [0, π] - {π/2}</li>
                <li><strong>cot⁻¹ x</strong> : Domain = ℝ , Range (PVB) = (0, π)</li>
              </ul>
              
              <h3>2. Fundamental Properties</h3>
              <ul>
                <li>sin⁻¹(-x) = -sin⁻¹ x , cosec⁻¹(-x) = -cosec⁻¹ x , tan⁻¹(-x) = -tan⁻¹ x</li>
                <li>cos⁻¹(-x) = π - cos⁻¹ x , sec⁻¹(-x) = π - sec⁻¹ x , cot⁻¹(-x) = π - cot⁻¹ x</li>
                <li>sin⁻¹(1/x) = cosec⁻¹ x (for |x| ≥ 1)</li>
                <li>cos⁻¹(1/x) = sec⁻¹ x (for |x| ≥ 1)</li>
                <li>tan⁻¹(1/x) = cot⁻¹ x (for x > 0)</li>
              </ul>
              
              <h3>3. Identities & Sums</h3>
              <ul>
                <li>sin⁻¹ x + cos⁻¹ x = π/2 (for x ∈ [-1, 1])</li>
                <li>tan⁻¹ x + cot⁻¹ x = π/2 (for x ∈ ℝ)</li>
                <li>cosec⁻¹ x + sec⁻¹ x = π/2 (for |x| ≥ 1)</li>
                <li>tan⁻¹ x + tan⁻¹ y = tan⁻¹((x + y)/(1 - xy)) [if xy < 1]</li>
                <li>tan⁻¹ x - tan⁻¹ y = tan⁻¹((x - y)/(1 + xy)) [if xy > -1]</li>
                <li>2tan⁻¹ x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²)) = tan⁻¹(2x/(1-x²))</li>
              </ul>
            `,
            formulas: `sin⁻¹x + cos⁻¹x = π/2\ntan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1-xy)) [xy < 1]\n2tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²))`,
            mindmap: {
              root: "Inverse Trig",
              branches: [
                {
                  title: "Domains & Ranges",
                  subnodes: ["sin⁻¹: [-1,1] to [-π/2, π/2]", "cos⁻¹: [-1,1] to [0, π]", "tan⁻¹: ℝ to (-π/2, π/2)"]
                },
                {
                  title: "Negative Angles",
                  subnodes: ["sin⁻¹(-x) = -sin⁻¹x", "cos⁻¹(-x) = π - cos⁻¹x", "tan⁻¹(-x) = -tan⁻¹x"]
                },
                {
                  title: "Sum Identities",
                  subnodes: ["sin⁻¹x + cos⁻¹x = π/2", "tan⁻¹x + tan⁻¹y formula", "Complementary pairs"]
                },
                {
                  title: "Double Angles",
                  subnodes: ["2tan⁻¹x conversions", "sin⁻¹(2x/(1+x²))", "cos⁻¹((1-x²)/(1+x²))"]
                }
              ]
            }
          }
        ]
      },

      {
        id: "algebra-complex",
        title: "Algebra & Complex Numbers",
        topics: [
          {
            id: "quadratic-eq",
            title: "Quadratic Equations",
            notes: `
              <h3>1. Nature of Roots</h3>
              <p>For $ax^2 + bx + c = 0$, the discriminant $D = b^2 - 4ac$ decides the roots:</p>
              <ul>
                <li>$D > 0$: Real and distinct roots.</li>
                <li>$D = 0$: Real and equal roots.</li>
                <li>$D < 0$: Complex conjugate roots.</li>
              </ul>
            `,
            formulas: `
              <li><strong>Sum of roots:</strong> $alpha + eta = -b/a$</li>
              <li><strong>Product of roots:</strong> $alphaeta = c/a$</li>
            `
          },
          {
            id: "complex-numbers",
            title: "Complex Numbers",
            notes: `
              <h3>1. Polar Form and Modulus</h3>
              <p>A complex number $z = x + iy$ has a modulus $|z| = sqrt{x^2 + y^2}$.</p>
              <ul>
                <li><strong>Argument:</strong> $	heta = 	an^{-1}(y/x)$</li>
                <li><strong>De Moivre's Theorem:</strong> $(cos 	heta + isin 	heta)^n = cos n	heta + isin n	heta$</li>
              </ul>
            `,
            formulas: `
              <li><strong>Cube roots of unity:</strong> $1, omega, omega^2$ where $1 + omega + omega^2 = 0$ and $omega^3 = 1$</li>
            `
          }
        ]
      },
      {
        id: "2d-geometry",
        title: "Coordinate Geometry (2D & 3D)",
        topics: [
          {
            id: "straight-lines",
            title: "Straight Lines",
            notes: `
              <h3>1. Equations of a Line</h3>
              <ul>
                <li><strong>Slope-Intercept:</strong> $y = mx + c$</li>
                <li><strong>Point-Slope:</strong> $y - y_1 = m(x - x_1)$</li>
                <li><strong>Normal Form:</strong> $xcosalpha + ysinalpha = p$</li>
              </ul>
            `,
            formulas: `
              <li><strong>Distance from point to line:</strong> $d = \frac{|Ax_1 + By_1 + C|}{sqrt{A^2 + B^2}}$</li>
            `
          }
        ]
      },
      {
        id: "statistics-prob",
        title: "Statistics & Probability",
        topics: [
          {
            id: "central-tendency",
            title: "Measures of Central Tendency",
            notes: `
              <h3>1. Mean, Median, Mode</h3>
              <ul>
                <li><strong>Mean:</strong> Sum of observations / Number of observations.</li>
                <li><strong>Median:</strong> Middle value when sorted.</li>
                <li><strong>Empirical Relation:</strong> Mode = 3*Median - 2*Mean</li>
              </ul>
            `,
            formulas: `
              <li><strong>Variance:</strong> $sigma^2 = rac{sum (x_i - mu)^2}{N}$</li>
              <li><strong>Standard Deviation:</strong> $sigma = sqrt{Variance}$</li>
            `
          }
        ]
      },
      {
        id: "calculus",
        title: "Calculus",
        topics: [
          {
            id: "limits-continuity",
            title: "Limits & Continuity",
            notes: `
              <h3>1. Standard Limits</h3>
              <p>These limits resolve common indeterminate forms instantly:</p>
              <ul>
                <li><strong>lim (x→0) sin(x)/x = 1</strong></li>
                <li><strong>lim (x→0) tan(x)/x = 1</strong></li>
                <li><strong>lim (x→0) (e^x - 1)/x = 1</strong></li>
                <li><strong>lim (x→0) ln(1 + x)/x = 1</strong></li>
                <li><strong>lim (x→a) (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹</strong></li>
                <li><strong>lim (x→0) (1 + x)^(1/x) = e</strong></li>
                <li><strong>lim (x→∞) (1 + 1/x)ˣ = e</strong></li>
              </ul>
              
              <h3>2. L'Hopital's Rule</h3>
              <p>For limits resulting in indeterminate forms like <strong>0/0</strong> or <strong>∞/∞</strong>:</p>
              <ul>
                <li>Differentiate numerator and denominator separately: <strong>lim f(x)/g(x) = lim f'(x)/g'(x)</strong>.</li>
                <li>Repeat if the result is still indeterminate and functions remain differentiable.</li>
              </ul>
              
              <h3>3. Continuity & Differentiability</h3>
              <ul>
                <li>f(x) is continuous at x = c if: <strong>lim (x→c⁻) f(x) = lim (x→c⁺) f(x) = f(c)</strong> (LHL = RHL = Value).</li>
                <li>f(x) is differentiable at x = c if: Left Hand Derivative (LHD) = Right Hand Derivative (RHD).</li>
                <li><strong>Important Property</strong>: Differentiability ⇒ Continuity. However, Continuity does NOT imply Differentiability (e.g., f(x) = |x| is continuous at x = 0, but not differentiable because of a sharp corner).</li>
              </ul>
            `,
            formulas: `lim(x→0) sinx/x = 1\nlim(x→a) (xⁿ - aⁿ)/(x - a) = n·aⁿ⁻¹\nL'Hopital: lim f(x)/g(x) = lim f'(x)/g'(x)\nLHL = RHL = f(c) for Continuity`,
            mindmap: {
              root: "Limits & Continuity",
              branches: [
                {
                  title: "Std Limits",
                  subnodes: ["sin x/x = 1 (x→0)", "e^x-1/x = 1 (x→0)", "(1+1/x)^x = e (x→∞)"]
                },
                {
                  title: "L'Hopital",
                  subnodes: ["For 0/0 and ∞/∞", "Diff numerator separately", "Diff denominator separately"]
                },
                {
                  title: "Continuity",
                  subnodes: ["LHL = RHL = f(c)", "No breaks in curve", "Necessary for derivatives"]
                },
                {
                  title: "Derivatives",
                  subnodes: ["LHD = RHD", "Smooth curves only", "Sharp turns not diff"]
                }
              ]
            }
          },
          {
            id: "differentiation",
            title: "Differentiation Rules",
            notes: `
              <h3>1. General Differentiation Rules</h3>
              <ul>
                <li><strong>Product Rule</strong>: d/dx(u·v) = u'v + uv'</li>
                <li><strong>Quotient Rule</strong>: d/dx(u/v) = (u'v - uv') / v²</li>
                <li><strong>Chain Rule</strong>: d/dx(f(g(x))) = f'(g(x)) · g'(x)</li>
              </ul>
              
              <h3>2. Derivatives of Algebraic & Exponential Functions</h3>
              <ul>
                <li>d/dx(xⁿ) = n·xⁿ⁻¹</li>
                <li>d/dx(eˣ) = eˣ</li>
                <li>d/dx(aˣ) = aˣ ln a (a > 0)</li>
                <li>d/dx(ln x) = 1/x</li>
                <li>d/dx(logₐ x) = 1 / (x ln a)</li>
              </ul>
              
              <h3>3. Trigonometric Derivatives</h3>
              <ul>
                <li>d/dx(sin x) = cos x</li>
                <li>d/dx(cos x) = -sin x</li>
                <li>d/dx(tan x) = sec² x</li>
                <li>d/dx(sec x) = sec x tan x</li>
                <li>d/dx(cosec x) = -cosec x cot x</li>
                <li>d/dx(cot x) = -cosec² x</li>
              </ul>
              
              <h3>4. Inverse Trigonometric Derivatives</h3>
              <ul>
                <li>d/dx(sin⁻¹ x) = 1 / √(1 - x²)</li>
                <li>d/dx(cos⁻¹ x) = -1 / √(1 - x²)</li>
                <li>d/dx(tan⁻¹ x) = 1 / (1 + x²)</li>
                <li>d/dx(cot⁻¹ x) = -1 / (1 + x²)</li>
                <li>d/dx(sec⁻¹ x) = 1 / (|x|√(x² - 1))</li>
                <li>d/dx(cosec⁻¹ x) = -1 / (|x|√(x² - 1))</li>
              </ul>
            `,
            formulas: `(uv)' = u'v + uv'\n(u/v)' = (u'v - uv')/v²\nd/dx(aˣ) = aˣ·lna\nd/dx(sin⁻¹x) = 1/√(1-x²)\nd/dx(tan⁻¹x) = 1/(1+x²)`,
            mindmap: {
              root: "Differentiation",
              branches: [
                {
                  title: "Methods",
                  subnodes: ["Product Rule (uv)", "Quotient Rule (u/v)", "Chain Rule f(g(x))"]
                },
                {
                  title: "Trigonometric",
                  subnodes: ["sin x → cos x", "cos x → -sin x", "tan x → sec² x"]
                },
                {
                  title: "Inverse Trig",
                  subnodes: ["sin⁻¹x → 1/√(1-x²)", "cos⁻¹x → -1/√(1-x²)", "tan⁻¹x → 1/(1+x²)"]
                },
                {
                  title: "Exponential",
                  subnodes: ["e^x → e^x", "a^x → a^x ln a", "ln x → 1/x"]
                }
              ]
            }
          },
          {
            id: "integration",
            title: "Standard Integration Methods",
            notes: `
              <h3>1. Fundamental Indefinite Integrals</h3>
              <ul>
                <li>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)</li>
                <li>∫ 1/x dx = ln|x| + C</li>
                <li>∫ eˣ dx = eˣ + C</li>
                <li>∫ aˣ dx = aˣ/ln a + C</li>
                <li>∫ sin x dx = -cos x + C</li>
                <li>∫ cos x dx = sin x + C</li>
                <li>∫ sec² x dx = tan x + C</li>
                <li>∫ cosec² x dx = -cot x + C</li>
                <li>∫ sec x tan x dx = sec x + C</li>
                <li>∫ cosec x cot x dx = -cosec x + C</li>
              </ul>
              
              <h3>2. Logarithmic Trigonometric Integrals</h3>
              <ul>
                <li>∫ tan x dx = ln|sec x| + C = -ln|cos x| + C</li>
                <li>∫ cot x dx = ln|sin x| + C</li>
                <li>∫ sec x dx = ln|sec x + tan x| + C</li>
                <li>∫ cosec x dx = ln|cosec x - cot x| + C = ln|tan(x/2)| + C</li>
              </ul>
              
              <h3>3. Special Integrals (Substitution helper)</h3>
              <ul>
                <li>∫ 1/(x² + a²) dx = (1/a) tan⁻¹(x/a) + C</li>
                <li>∫ 1/√(a² - x²) dx = sin⁻¹(x/a) + C</li>
                <li>∫ 1/√(x² ± a²) dx = ln|x + √(x² ± a²)| + C</li>
              </ul>
              
              <h3>4. Integration by Parts & Definite Properties</h3>
              <ul>
                <li><strong>∫ u·v dx = u ∫ v dx - ∫ [ u' ∫ v dx ] dx</strong> (Choose u based on <strong>ILATE</strong> priority).</li>
                <li><strong>King's Property</strong>: ∫[0 to a] f(x) dx = ∫[0 to a] f(a-x) dx</li>
                <li>∫[a to b] f(x) dx = ∫[a to b] f(a+b-x) dx</li>
                <li>∫[-a to a] f(x) dx = 2∫[0 to a] f(x) dx (if f(x) is even); = 0 (if f(x) is odd).</li>
              </ul>
            `,
            formulas: `∫ u·v dx = u∫v dx - ∫(u'·∫v dx) dx\nKing's Property: ∫[0 to a] f(x) dx = ∫[0 to a] f(a-x) dx\nEven/Odd Property: ∫[-a to a] f(x)dx = 0 if f(-x)=-f(x)`,
            mindmap: {
              root: "Integration",
              branches: [
                {
                  title: "Indefinite",
                  subnodes: ["Power rule & ln x", "Trig integrations", "e^x and a^x rules"]
                },
                {
                  title: "Substitution",
                  subnodes: ["Trig substitutions", "Algebraic factors", "f'(x)/f(x) → ln|f(x)|"]
                },
                {
                  title: "By Parts",
                  subnodes: ["ILATE hierarchy", "∫ u v dx formula", "Repeated integrals"]
                },
                {
                  title: "Definite",
                  subnodes: ["Limits evaluations", "King's property", "Even/Odd cancellations"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "algebra-matrices",
        title: "Algebra & Matrices",
        topics: [
          {
            id: "syl-matrices",
            title: "Matrices and Determinants",
            notes: `
              <h3>1. Matrix Classifications</h3>
              <ul>
                <li><strong>Symmetric Matrix</strong>: Aᵀ = A. Diagonal elements can be anything.</li>
                <li><strong>Skew-Symmetric Matrix</strong>: Aᵀ = -A. Diagonal elements must be <strong>zero</strong>. (aᵢᵢ = -aᵢᵢ ⇒ 2aᵢᵢ = 0 ⇒ aᵢᵢ = 0).</li>
                <li><strong>Orthogonal Matrix</strong>: A · Aᵀ = I. Also, det(A) = ±1.</li>
                <li><strong>Idempotent Matrix</strong>: A² = A.</li>
                <li><strong>Involutory Matrix</strong>: A² = I.</li>
                <li><strong>Nilpotent Matrix</strong>: Aᵏ = O (where k is the index of nilpotency).</li>
              </ul>
              
              <h3>2. Determinant Laws</h3>
              <ul>
                <li>det(Aᵀ) = det(A)</li>
                <li>det(AB) = det(A) · det(B)</li>
                <li>det(kA) = kⁿ det(A) (for a matrix of order n × n).</li>
                <li>det(A⁻¹) = 1 / det(A)</li>
                <li>If any two rows/columns are interchanged, the sign of the determinant changes.</li>
                <li>If all elements of a row/column are zero, the determinant is <strong>zero</strong>.</li>
              </ul>
              
              <h3>3. Adjoint & Inverse Relations</h3>
              <ul>
                <li>A · adj(A) = adj(A) · A = |A| · I</li>
                <li><strong>|adj A| = |A|ⁿ⁻¹</strong> (order n)</li>
                <li><strong>|adj(adj A)| = |A|^( (n-1)² )</strong></li>
                <li>adj(AB) = adj(B) · adj(A) (Reversal law)</li>
                <li>A⁻¹ = adj(A) / |A| (only if |A| ≠ 0; non-singular matrix).</li>
                <li>(Aᵀ)⁻¹ = (A⁻¹)ᵀ</li>
              </ul>
            `,
            formulas: `|kA| = kⁿ|A|\n|adj A| = |A|ⁿ⁻¹\n|adj(adj A)| = |A|^((n-1)²)\nA⁻¹ = adj(A)/|A|\n(AB)ᵀ = BᵀAᵀ\n(AB)⁻¹ = B⁻¹A⁻¹`,
            mindmap: {
              root: "Matrices & Det",
              branches: [
                {
                  title: "Matrix Types",
                  subnodes: ["Symmetric: Aᵀ = A", "Skew-Symm: Aᵀ = -A", "Orthogonal: A·Aᵀ = I"]
                },
                {
                  title: "Determinants",
                  subnodes: ["|kA| = kⁿ|A| rule", "|AB| = |A||B|", "Zero determinant conditions"]
                },
                {
                  title: "Adjoints",
                  subnodes: ["|adj A| = |A|ⁿ⁻¹", "|adj(adj A)| = |A|^((n-1)²)", "Reversal: adj(AB)=adj(B)adj(A)"]
                },
                {
                  title: "Inverses",
                  subnodes: ["A⁻¹ = adj(A)/|A|", "|A| ≠ 0 condition", "(AB)⁻¹ = B⁻¹A⁻¹"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "probability-stats",
        title: "Probability & Statistics",
        topics: [
          {
            id: "syl-probability",
            title: "Probability Theory & Bayes Theorem",
            notes: `
              <h3>1. Basic Laws of Probability</h3>
              <ul>
                <li>Addition Rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</li>
                <li>If events are mutually exclusive: P(A ∩ B) = 0 ⇒ P(A ∪ B) = P(A) + P(B)</li>
                <li>Conditional Probability: P(A|B) = P(A ∩ B) / P(B) (where P(B) > 0)</li>
                <li>Independent Events: P(A ∩ B) = P(A) · P(B) ⇒ P(A|B) = P(A)</li>
              </ul>
              
              <h3>2. Bayes' Theorem</h3>
              <p>Used to calculate posterior probability when partition events E₁, E₂...Eₙ are given:</p>
              <ul>
                <li><strong>P(Eᵢ|A) = [ P(Eᵢ) · P(A|Eᵢ) ] / [ Σ[j=1 to n] P(Eⱼ) · P(A|Eⱼ) ]</strong></li>
              </ul>
              
              <h3>3. Statistics & Measures of Central Tendency</h3>
              <ul>
                <li><strong>Mean (x̄)</strong>: Average value. x̄ = (Σ xᵢ)/n.</li>
                <li><strong>Median</strong>: Middle value. If n is odd: ((n+1)/2)th term. If n is even: Mean of (n/2)th and (n/2 + 1)th terms.</li>
                <li><strong>Mode</strong>: Element with highest frequency.</li>
                <li><strong>Empirical Relation</strong>: <strong>Mode = 3 Median - 2 Mean</strong></li>
              </ul>
              
              <h3>4. Measures of Dispersion</h3>
              <ul>
                <li><strong>Variance (σ²)</strong>: σ² = Σ(xᵢ - x̄)² / n = (Σ xᵢ² / n) - (x̄)²</li>
                <li><strong>Standard Deviation (σ)</strong>: σ = √Variance</li>
                <li><strong>Coefficient of Variation (CV)</strong>: CV = (σ / x̄) * 100 (measures relative consistency).</li>
              </ul>
            `,
            formulas: `P(A|B) = P(A ∩ B) / P(B)\nMode = 3Median - 2Mean\nVariance(σ²) = (Σx²/n) - (x̄)²\nSD(σ) = √Variance\nCV = (σ/x̄)·100`,
            mindmap: {
              root: "Probability & Stats",
              branches: [
                {
                  title: "Basic Prob",
                  subnodes: ["P(A∪B) addition rule", "Conditional P(A|B)", "Independent events rule"]
                },
                {
                  title: "Bayes Theorem",
                  subnodes: ["Posterior probability", "Partition events Eᵢ", "P(Eᵢ|A) division form"]
                },
                {
                  title: "Central Tendency",
                  subnodes: ["Arithmetic Mean", "Median odd/even cases", "Mode = 3Med - 2Mean"]
                },
                {
                  title: "Dispersion",
                  subnodes: ["Variance (σ²)", "Standard Deviation (σ)", "Coeff of Variation (CV)"]
                }
              ]
            }
          }
        ]
      }
    ]
  },

  english: {
    title: "English (NDA/CDS/AFCAT)",
    chapters: [
      {
        id: "grammar-rules",
        title: "Grammar & Usage",
        topics: [
          {
            id: "subject-verb-agreement",
            title: "Subject-Verb Agreement",
            notes: `
              <h3>1. Golden Rules of Subject-Verb Agreement</h3>
              <ul>
                <li><strong>Rule 1:</strong> Two singular subjects joined by 'and' take a plural verb. (e.g., Ram and Shyam <em>are</em> playing.)</li>
                <li><strong>Rule 2:</strong> If two subjects together express one idea, the verb is singular. (e.g., Bread and butter <em>is</em> his only food.)</li>
                <li><strong>Rule 3:</strong> Words joined to a singular subject by 'with', 'as well as', 'along with' do not change the number. (e.g., The captain, along with the soldiers, <em>was</em> killed.)</li>
              </ul>
            `,
            formulas: `
              <li><strong>Either/Or, Neither/Nor:</strong> The verb agrees with the subject nearest to it.</li>
              <li><strong>Many a:</strong> Takes a singular subject and a singular verb. (e.g., Many a man <em>has</em> done this.)</li>
            `
          },
          {
            id: "spotting-errors",
            title: "Spotting Errors Techniques",
            notes: `
              <h3>1. Common Tense Errors</h3>
              <p>Conditional sentences are heavily tested:</p>
              <ul>
                <li>If I <em>had seen</em> him, I <em>would have stopped</em> him. (Past Perfect -> Would have + V3)</li>
                <li>If I <em>were</em> a bird, I would fly. (Subjunctive mood takes 'were' for all subjects)</li>
              </ul>
            `,
            formulas: `
              <li><strong>Scarcely/Hardly... when:</strong> Scarcely had he gone out <em>when</em> it started raining.</li>
              <li><strong>No sooner... than:</strong> No sooner had the bell rung <em>than</em> the boys ran out.</li>
            `
          }
        ]
      },
      {
        id: "vocabulary",
        title: "Vocabulary & Comprehension",
        topics: [
          {
            id: "synonyms-antonyms",
            title: "High-Frequency Synonyms/Antonyms",
            notes: `
              <h3>1. Must-Know Words</h3>
              <ul>
                <li><strong>Audacious:</strong> Bold, daring (Antonym: Timid)</li>
                <li><strong>Clandestine:</strong> Secret, hidden (Antonym: Open, public)</li>
                <li><strong>Mitigate:</strong> Lessen, ease (Antonym: Aggravate)</li>
              </ul>
            `,
            formulas: `
              <li><strong>Root Word Hack:</strong> 'Mal' = bad (Malign, Malevolent). 'Bene' = good (Benefactor, Benevolent).</li>
            `
          }
        ]
      }
    ]
  },
  polity: {
    title: "Indian Polity (CDS/NDA)",
    chapters: [
      {
        id: "constitution-basics",
        title: "Constitutional Framework",
        topics: [
          {
            id: "preamble",
            title: "Preamble & Sources",
            notes: `
              <h3>1. The Preamble Keywords</h3>
              <p>The Preamble represents the summary or essence of the Constitution. Crucial aspects:</p>
              <ul>
                <li><strong>Keywords Order</strong>: Sovereign, Socialist, Secular, Democratic, Republic.</li>
                <li><strong>Amendment</strong>: Amended only once by the <strong>42nd Amendment Act (1976)</strong>, which added three new words: <strong>Socialist, Secular, and Integrity</strong>.</li>
                <li><strong>Justiciability</strong>: It is non-justiciable (its provisions cannot be enforced in a court of law).</li>
                <li>**Kesavananda Bharati Case (1973)**: Supreme Court declared that the Preamble is a part of the Constitution and can be amended under Article 368, but its 'basic structure' cannot be destroyed.</li>
              </ul>
              
              <h3>2. Borrowed Sources of the Constitution</h3>
              <ul>
                <li><strong>Govt of India Act 1935</strong>: Federal structure, Office of Governor, Public Service Commissions, administrative details.</li>
                <li><strong>United Kingdom</strong>: Parliamentary system, Rule of Law, Legislative procedure, Single Citizenship, Cabinet system, Prerogative Writs, Bicameralism.</li>
                <li><strong>United States</strong>: Fundamental Rights, Independence of Judiciary, Judicial Review, Impeachment of President, removal of Supreme Court & High Court judges, post of Vice-President.</li>
                <li><strong>Ireland</strong>: Directive Principles of State Policy (DPSP), nomination of members to Rajya Sabha, method of election of President.</li>
                <li><strong>Canada</strong>: Federation with a strong Centre, vesting of residuary powers in the Centre, appointment of state governors by Centre, advisory jurisdiction of Supreme Court.</li>
                <li><strong>Australia</strong>: Concurrent List, freedom of trade and commerce, joint sitting of the two Houses of Parliament.</li>
                <li><strong>Weimar Republic (Germany)</strong>: Suspension of Fundamental Rights during Emergency.</li>
                <li><strong>USSR</strong>: Fundamental Duties (Article 51A), ideals of justice (social, economic, political) in the Preamble.</li>
              </ul>
            `,
            formulas: `42nd Amendment (1976) -> Added: Socialist, Secular, Integrity.\nPreamble justiciable? No (Kesavananda Bharati Case 1973).`,
            mindmap: {
              root: "Preamble & Sources",
              branches: [
                {
                  title: "Preamble Order",
                  subnodes: ["Sovereign", "Socialist", "Secular", "Democratic & Republic"]
                },
                {
                  title: "Amendments",
                  subnodes: ["42nd Amendment (1976)", "Added: Socialist", "Added: Secular & Integrity"]
                },
                {
                  title: "UK / US Borrowings",
                  subnodes: ["UK: Parl Govt, Writs, 1-Citizenship", "US: Fundamental Rights", "US: Judicial Review, Impeachment"]
                },
                {
                  title: "Other Borrowings",
                  subnodes: ["Ireland: DPSP", "Canada: Strong Centre", "Australia: Concurrent List"]
                }
              ]
            }
          },
          {
            id: "schedules",
            title: "Schedules of the Constitution",
            notes: `
              <h3>Schedules Overview</h3>
              <p>Originally, the Constitution had 8 schedules. Currently, there are <strong>12 schedules</strong>.</p>
              <p>Mnemonic to memorize: <strong>TEARS OF OLD PM</strong></p>
              <ol>
                <li><strong>T - Territories</strong>: Names of States and Union Territories and their territorial extent.</li>
                <li><strong>E - Emoluments</strong>: Provisions relating to the salaries, allowances, and privileges of President, Governors, Speaker, Judges, Comptroller and Auditor-General (CAG).</li>
                <li><strong>A - Affirmations & Oaths</strong>: Forms of Oaths or Affirmations for Union Ministers, MPs, Judges, CAG.</li>
                <li><strong>R - Rajya Sabha</strong>: Allocation of seats in the Rajya Sabha to the States and Union Territories.</li>
                <li><strong>S - Scheduled Areas</strong>: Provisions relating to the administration and control of scheduled areas and scheduled tribes.</li>
                <li><strong>O - Other Tribes</strong>: Administration of tribal areas in the states of **Assam, Meghalaya, Tripura, and Mizoram** (Mnemonic: ATM-M).</li>
                <li><strong>F - Federal Lists</strong>: Division of powers between the Union and the States (Union List, State List, Concurrent List).</li>
                <li><strong>O - Official Languages</strong>: 22 languages recognized by the Constitution. (Sindhi added by 21st, Konkani/Manipuri/Nepali by 71st, Bodo/Dogri/Maithili/Santhali by 92nd).</li>
                <li><strong>L - Land Reforms</strong>: Acts and regulations dealing with land reforms and abolition of the Zamindari system. (Added by **1st Amendment Act, 1951** to bypass judicial review).</li>
                <li><strong>D - Defection</strong>: Anti-defection provisions for members of Parliament and State Legislatures. (Added by **52nd Amendment Act, 1985**).</li>
                <li><strong>P - Panchayats</strong>: Powers, authority, and responsibilities of Panchayats. Contains 29 matters. (Added by **73rd Amendment Act, 1992**).</li>
                <li><strong>M - Municipalities</strong>: Powers, authority, and responsibilities of Municipalities. Contains 18 matters. (Added by **74th Amendment Act, 1992**).</li>
              </ol>
            `,
            formulas: `TEARS OF OLD PM:\n1-Territories, 2-Emoluments, 3-Affirmations, 4-RajyaSabha, 5-Scheduled, 6-OtherScheduled, 7-FederalLists, 8-Languages, 9-LandReforms, 10-Defection, 11-Panchayats, 12-Municipalities`,
            mindmap: {
              root: "12 Schedules",
              branches: [
                {
                  title: "1st - 4th",
                  subnodes: ["1: Territories & limits", "2: Emoluments & Salaries", "3: Oaths & Affirmations", "4: RS Seat Allocations"]
                },
                {
                  title: "5th - 8th",
                  subnodes: ["5: Scheduled Areas", "6: Assam, Meg, Tri, Miz", "7: Federal Lists (3 Lists)", "8: 22 Languages"]
                },
                {
                  title: "9th - 10th",
                  subnodes: ["9: Land Reforms (1st Amend)", "10: Anti-Defection (52nd Amend)"]
                },
                {
                  title: "11th - 12th",
                  subnodes: ["11: Panchayats (73rd Amend)", "12: Municipalities (74th Amend)"]
                }
              ]
            }
          },
          {
            id: "fundamental-rights",
            title: "Fundamental Rights (Art 12-35)",
            notes: `
              <h3>1. Classification of Fundamental Rights</h3>
              <p>Part III of the Constitution is called the **Magna Carta of India**.</p>
              <ul>
                <li><strong>Right to Equality (Articles 14-18)</strong>:
                  <ul>
                    <li>Art 14: Equality before law & Equal protection of laws.</li>
                    <li>Art 15: Prohibition of discrimination.</li>
                    <li>Art 16: Equality of opportunity in public employment.</li>
                    <li>Art 17: Abolition of Untouchability.</li>
                    <li>Art 18: Abolition of Titles.</li>
                  </ul>
                </li>
                <li><strong>Right to Freedom (Articles 19-22)</strong>:
                  <ul>
                    <li>Art 19: Guarantees 6 democratic freedoms (speech, assembly, association, movement, residence, profession).</li>
                    <li>Art 20: Protection in respect of conviction for offences (no ex-post facto law, no double jeopardy, no self-incrimination).</li>
                    <li>Art 21: Protection of Life and Personal Liberty.</li>
                    <li>Art 21A: Right to Education (added by 86th Amendment, 2002).</li>
                    <li>Art 22: Protection against arrest and detention.</li>
                  </ul>
                </li>
                <li><strong>Right against Exploitation (Articles 23-24)</strong>:
                  <ul>
                    <li>Art 23: Prohibition of human trafficking and forced labour (begar).</li>
                    <li>Art 24: Prohibition of employment of children (below 14 years) in factories/mines.</li>
                  </ul>
                </li>
                <li><strong>Right to Freedom of Religion (Articles 25-28)</strong>:
                  <ul>
                    <li>Art 25: Freedom of conscience, profession, practice, and propagation.</li>
                    <li>Art 26: Manage religious affairs.</li>
                  </ul>
                </li>
                <li><strong>Cultural and Educational Rights (Articles 29-30)</strong>:
                  <ul>
                    <li>Art 29: Protection of language, script, and culture of minorities.</li>
                    <li>Art 30: Right of minorities to establish and administer educational institutions.</li>
                  </ul>
                </li>
                <li><strong>Right to Constitutional Remedies (Article 32)</strong>:
                  <ul>
                    <li>Empowers the Supreme Court to issue writs to enforce Fundamental Rights. Dr. B.R. Ambedkar called Article 32 the 'Heart and Soul of the Constitution'.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>2. The Five Prerogative Writs</h3>
              <ul>
                <li><strong>Habeas Corpus</strong> ('To have the body of'): Issued to release a person unlawfully detained. Can be issued against both public and private entities.</li>
                <li><strong>Mandamus</strong> ('We command'): Issued to direct a public authority to perform a duty they have failed or refused to do. Cannot be issued against the President, Governors, or private individuals.</li>
                <li><strong>Prohibition</strong> ('To forbid'): Issued by a higher court to a lower court or quasi-judicial body to prevent it from exceeding its jurisdiction. (Preventive only).</li>
                <li><strong>Certiorari</strong> ('To be certified'): Issued to quash the order of a lower court or transfer case to itself. (Preventive and Curative).</li>
                <li><strong>Quo Warranto</strong> ('By what authority'): Issued to inquire into the legality of the claim of a person to a public office, preventing illegal usurpation.</li>
              </ul>
            `,
            formulas: `Art 19 -> 6 democratic freedoms.\nArt 21 -> Protection of Life and Liberty.\nArt 32 -> Supreme Court Writs.\nArt 226 -> High Court Writs.`,
            mindmap: {
              root: "Fundamental Rights",
              branches: [
                {
                  title: "Equality (14-18)",
                  subnodes: ["14: Equal Laws", "15: No Discrimination", "17: Untouchability Abolished"]
                },
                {
                  title: "Freedom (19-22)",
                  subnodes: ["19: 6 Freedoms", "21: Life & Liberty", "21A: Education (86th Amend)"]
                },
                {
                  title: "Exploit & Religion",
                  subnodes: ["23: Traffic & Begar", "24: Child Labour", "25: Conscience & Religion"]
                },
                {
                  title: "Remedies (32)",
                  subnodes: ["Habeas Corpus (Detention)", "Mandamus (Command Duty)", "Certiorari (Quash Order)"]
                }
              ]
            }
          },
          {
            id: "dpsp",
            title: "DPSP & Fundamental Duties (Art 36-51A)",
            notes: `
              <h3>1. Directive Principles of State Policy (Part IV)</h3>
              <p>Borrowed from Ireland. Non-justiciable but fundamental in governance. Classified into three types:</p>
              <ul>
                <li><strong>Socialistic Principles</strong>: Article 38 (promote welfare, minimize inequalities), Article 39 (equal pay for equal work, distribute material resources), Article 39A (free legal aid).</li>
                <li><strong>Gandhian Principles</strong>: Article 40 (organize village panchayats), Article 43 (promote cottage industries), Article 46 (promote educational/economic interests of SCs, STs), Article 47 (prohibit intoxicating drinks/drugs).</li>
                <li><strong>Liberal-Intellectual Principles</strong>: Article 44 (Uniform Civil Code), Article 45 (early childhood care/education), Article 48 (organize agriculture/animal husbandry, prohibit slaughter), Article 50 (separate judiciary from executive), Article 51 (promote international peace).</li>
              </ul>
              
              <h3>2. Fundamental Duties (Part IV-A)</h3>
              <ul>
                <li>Added by the **42nd Amendment Act (1976)** on the recommendation of the **Swaran Singh Committee** during Emergency.</li>
                <li>Originally 10 duties, the **11th duty** was added by the **86th Amendment Act (2002)** (duty of parent/guardian to provide education to child aged 6-14).</li>
                <li>Borrowed from USSR. Non-justiciable. Article 51A contains all 11 duties.</li>
              </ul>
            `,
            formulas: `DPSP: Part IV (Art 36-51) | Borrowed from Ireland\nFundamental Duties: Part IV-A (Art 51A) | Swaran Singh Committee\n11th Duty: 86th Amendment (2002) for education 6-14 years.`,
            mindmap: {
              root: "DPSP & Duties",
              branches: [
                {
                  title: "DPSP (Part IV)",
                  subnodes: ["Socialistic: Equal pay", "Gandhian: Panchayats (40)", "Liberal: UCC (44), Peace (51)"]
                },
                {
                  title: "Duties (Part IV-A)",
                  subnodes: ["Swaran Singh Comm", "42nd Amend (10 duties)", "86th Amend (11th duty)"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "union-executive",
        title: "Union Government",
        topics: [
          {
            id: "president",
            title: "The President of India (Art 52-62)",
            notes: `
              <h3>1. Election of the President (Article 54)</h3>
              <p>The President is elected not directly by the people, but by members of an **Electoral College** consisting of:</p>
              <ol>
                <li>Elected members of both Houses of Parliament (Lok Sabha & Rajya Sabha).</li>
                <li>Elected members of the Legislative Assemblies of the States (MLAs).</li>
                <li>Elected members of the Legislative Assemblies of the Union Territories of Delhi and Puducherry (and Jammu & Kashmir).</li>
              </ol>
              <p><strong>Note</strong>: Nominated members of Parliament and State Assemblies <strong>do not</strong> participate in the presidential election.</p>
              
              <h3>2. Impeachment of the President (Article 61)</h3>
              <ul>
                <li>The President can be removed from office for **'violation of the Constitution'**.</li>
                <li>The impeachment charges can be initiated in **either House of Parliament**.</li>
                <li>The charges must be signed by **one-fourth of the members** of the initiating House and a **14-day notice** must be given to the President.</li>
                <li>To pass, the resolution must be approved by a majority of **not less than two-thirds of the total membership** of the House.</li>
                <li>It is then investigated by the other House, and if passed there by a **2/3rd majority of the total membership**, the President stands removed.</li>
              </ul>
              
              <h3>3. Veto Powers (Article 111)</h3>
              <ul>
                <li><strong>Absolute Veto</strong>: Withholding assent to the Bill (the Bill ends and does not become law).</li>
                <li><strong>Suspensive Veto</strong>: Returning the Bill to Parliament for reconsideration. If Parliament passes the Bill again with or without amendments by a **simple majority**, the President **must** give assent. (Cannot be used for Money Bills).</li>
                <li><strong>Pocket Veto</strong>: Keeping the Bill pending on his desk indefinitely (taking no action). The Indian President has a larger pocket veto than the US President because the US President must return the bill within 10 days, while the Indian Constitution specifies no time limit.</li>
              </ul>
              
              <h3>4. Pardon Powers (Article 72)</h3>
              <p>The President has the power to grant pardons, reprieves, respites, or remissions of punishment, or to suspend, remit, or commute sentences in all cases involving Court Martial, offences against Union laws, and death sentences.</p>
            `,
            formulas: `Electoral College = Elected MPs + Elected MLAs.\nImpeachment = Art 61 (2/3 of Total Membership required).\nPardon Powers = Art 72.`,
            mindmap: {
              root: "The President",
              branches: [
                {
                  title: "Electoral College",
                  subnodes: ["Elected MPs (LS & RS)", "Elected MLAs (States)", "Delhi/Puducherry MLAs"]
                },
                {
                  title: "Impeachment (61)",
                  subnodes: ["Violation of Constitution", "Initiated in either House", "2/3 of Total Membership"]
                },
                {
                  title: "Vetoes (111)",
                  subnodes: ["Absolute Veto (Ends bill)", "Suspensive Veto (Return)", "Pocket Veto (No action)"]
                },
                {
                  title: "Pardons (72)",
                  subnodes: ["Pardon (Complete free)", "Commutation (Lighten type)", "Remission (Reduce time)"]
                }
              ]
            }
          },
          {
            id: "parliament",
            title: "Parliament of India (Art 79-122)",
            notes: `
              <h3>1. Composition of Parliament</h3>
              <p>Parliament consists of the **President**, the **Council of States (Rajya Sabha)**, and the **House of the People (Lok Sabha)**.</p>
              <ul>
                <li><strong>Rajya Sabha (Upper House)</strong>:
                  <ul>
                    <li>Max strength: 250 (238 elected from States/UTs, 12 nominated by President from Art, Literature, Science, Social Service).</li>
                    <li>It is a **permanent body** and not subject to dissolution.</li>
                    <li>Members have a **6-year term**, with **one-third** retiring every second year.</li>
                  </ul>
                </li>
                <li><strong>Lok Sabha (Lower House)</strong>:
                  <ul>
                    <li>Max strength: 550 (530 representing States, 20 representing Union Territories). (Anglo-Indian reserved seats abolished by 104th Amendment).</li>
                    <li>Normal term: **5 years**, can be dissolved earlier by the President.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>2. Key Parliamentary Terms</h3>
              <ul>
                <li><strong>Quorum (Article 100)</strong>: Minimum number of members required to be present to conduct a meeting. It is **one-tenth** of the total number of members in each House (i.e., 55 in Lok Sabha, 25 in Rajya Sabha), including the presiding officer.</li>
                <li><strong>Joint Sitting (Article 108)</strong>: Called by the President to resolve deadlocks between LS and RS on **Ordinary Bills** or **Financial Bills**.
                  <ul>
                    <li>Presided over by the **Speaker of the Lok Sabha**. (If Speaker is absent, the Deputy Speaker; if absent, the Deputy Chairman of Rajya Sabha).</li>
                    <li>**Note**: Joint sittings **cannot** be called for Money Bills or Constitutional Amendment Bills.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>3. Types of Bills & money Bills (Article 110)</h3>
              <ul>
                <li><strong>Money Bill</strong>: Deals with taxation, borrowing, consolidated fund, etc.
                  <ul>
                    <li>Can only be introduced in the **Lok Sabha** on the recommendation of the President.</li>
                    <li>The **Speaker's decision** on whether a bill is a money bill is final.</li>
                    <li>Rajya Sabha has restricted powers; it can only delay the bill for **14 days** and cannot reject or amend it.</li>
                  </ul>
                </li>
              </ul>
            `,
            formulas: `Quorum = 1/10th of membership.\nJoint Sitting = Art 108 (Presided by LS Speaker).\nMoney Bill = Art 110 (Certified by LS Speaker).`,
            mindmap: {
              root: "Parliament",
              branches: [
                {
                  title: "Rajya Sabha",
                  subnodes: ["Max 250 (12 Nominated)", "Permanent body", "1/3 retire every 2 years"]
                },
                {
                  title: "Lok Sabha",
                  subnodes: ["Max 550", "Normal term 5 years", "Directly elected by people"]
                },
                {
                  title: "Joint Sitting (108)",
                  subnodes: ["Summoned by President", "Presided by LS Speaker", "Not for Money/CA Bills"]
                },
                {
                  title: "Money Bills (110)",
                  subnodes: ["Lok Sabha only", "Certified by Speaker", "RS has max 14 days"]
                }
              ]
            }
          }
        ]
      },,
      {
        id: "polity-advanced",
        title: "Advanced Polity Structures & Bodies",
        topics: [
          {
            id: "amendments-parts",
            title: "Constitutional Amendments, Parts & Schedules",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Schedules: TEARS OF OLD PM",
            mindmap: {
              root: "Amendments & Parts",
              branches: [
                {title: "Schedules", subnodes: ["12 Schedules", "Mnemonic"]},
                {title: "Parts", subnodes: ["Part I to XXII"]},
                {title: "Amendments", subnodes: ["42nd, 44th, 86th, 101st"]}
              ]
            }
          },
          {
            id: "important-articles",
            title: "High-Yield Special Articles Cheat Sheet",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Emergencies: 352, 356, 360",
            mindmap: {
              root: "Key Articles",
              branches: [
                {title: "Art 371", subnodes: ["Special states provisions"]},
                {title: "Emergency", subnodes: ["National, President's, Financial"]},
                {title: "Rajya Sabha", subnodes: ["Art 249, Art 312"]}
              ]
            }
          },
          {
            id: "positions-tenures",
            title: "Elections, Appointments & Terms of Office",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Ages: Pres (35), Gov (35), LS (25), RS (30)",
            mindmap: {
              root: "Positions",
              branches: [
                {title: "Ages", subnodes: ["Min Age matrix"]},
                {title: "Terms", subnodes: ["CAG 6/65, CEC 6/65"]},
                {title: "Oath/Resign", subnodes: ["Who administers / receives"]}
              ]
            }
          },
          {
            id: "constitutional-bodies",
            title: "Constitutional & Non-Constitutional Bodies",
            notes: "Detailed notes expanded in notes_extra_4.js",
            formulas: "Constitutional: Art 324 (EC), Art 280 (FC), Art 148 (CAG)",
            mindmap: {
              root: "Bodies",
              branches: [
                {title: "Constitutional", subnodes: ["EC, FC, CAG, UPSC, AG"]},
                {title: "Non-Constitutional", subnodes: ["NITI Aayog, NHRC, CVC, Lokpal"]}
              ]
            }
          }
        ]
      }
    ]
  },
  history: {
    title: "History (CDS/NDA)",
    chapters: [
      {
        id: "history-details",
        title: "Indian History",
        topics: [
          {
            id: "ancient-india",
            title: "Ancient India (IVC & Religions)",
            notes: `
              <h3>1. Indus Valley Civilization (IVC)</h3>
              <p>Also known as Harappan Civilization. Key facts for CDS/NDA:</p>
              <ul>
                <li><strong>Major Sites & Discoverers</strong>: Harappa (Daya Ram Sahni, 1921, Ravi river), Mohenjo-daro (R.D. Banerjee, 1922, Indus river, features Great Bath).</li>
                <li><strong>Key Features</strong>: Grid-pattern town planning, burnt brick houses, advanced drainage system, absence of temples.</li>
                <li><strong>Dockyard</strong>: Found at Lothal (Gujarat), proving maritime trade.</li>
              </ul>
              
              <h3>2. Buddhism & Jainism Councils</h3>
              <ul>
                <li><strong>Buddhist Councils</strong>:
                  <ol>
                    <li>1st: Rajgriha (Mahakasyapa, patron: Ajatashatru)</li>
                    <li>2nd: Vaishali (Sabbakami, patron: Kalasoka)</li>
                    <li>3rd: Pataliputra (Moggaliputta Tissa, patron: Ashoka)</li>
                    <li>4th: Kundalvana, Kashmir (Vasumitra/Asvaghosa, patron: Kanishka) ⇒ split into Hinayana and Mahayana.</li>
                  </ol>
                </li>
              </ul>
            `,
            formulas: `IVC: Harappa (1921) | Mohenjo-daro (1922)\n1st Council: Rajgriha | 4th Council: Kashmir (Kanishka)`,
            mindmap: {
              root: "Ancient India",
              branches: [
                {
                  title: "IVC Sites",
                  subnodes: ["Harappa (Ravi)", "Mohenjo-daro (Great Bath)", "Lothal (Dockyard)"]
                },
                {
                  title: "Religions",
                  subnodes: ["Buddhism: 4 Councils", "Jainism: 2 Councils", "Hinayana/Mahayana split"]
                }
              ]
            }
          },
          {
            id: "medieval-india",
            title: "Medieval India (Sultanate & Mughals)",
            notes: `
              <h3>1. Delhi Sultanate Chronology (1206 - 1526)</h3>
              <p>Mnemonic: <strong>S</strong>ome <strong>K</strong>ings <strong>T</strong>ravel <strong>S</strong>lowly <strong>L</strong>ately (Slave, Khilji, Tughlaq, Sayyid, Lodi)</p>
              <ul>
                <li><strong>Slave Dynasty</strong>: Qutb-ud-din Aibak (founded 1206), Iltutmish (real founder, introduced silver Tanka & copper Jital, Chahalgani system), Raziya Sultan (first and only female ruler).</li>
                <li><strong>Khilji Dynasty</strong>: Alauddin Khilji (market control reforms, Dag and Chehra system, built Alai Darwaza).</li>
                <li><strong>Tughlaq Dynasty</strong>: Muhammad bin Tughlaq (shifted capital to Daulatabad, token currency experiment), Firoz Shah Tughlaq (built canals, created Diwan-i-Khairat).</li>
              </ul>
              
              <h3>2. Mughal Empire Achievements</h3>
              <ul>
                <li><strong>Babur</strong>: Defeated Ibrahim Lodi in 1st Battle of Panipat (1526) using gunpowder (Tulughma system).</li>
                <li><strong>Akbar</strong>: Built Fatehpur Sikri (Ibadat Khana), introduced Mansabdari system, promulgated Din-i-Ilahi. Defeated Hemu in 2nd Battle of Panipat (1556).</li>
                <li><strong>Administration</strong>: Dahsala system by Todar Mal (land revenue).</li>
              </ul>
            `,
            formulas: `Delhi Sultanate: Slave -> Khilji -> Tughlaq -> Sayyid -> Lodi\n1st Panipat: 1526 (Babur) | 2nd Panipat: 1556 (Akbar)\nMansabdari: Akbar`,
            mindmap: {
              root: "Medieval India",
              branches: [
                {
                  title: "Sultanate",
                  subnodes: ["Slave (Iltutmish)", "Khilji (Alauddin)", "Tughlaq (MBT/FST)"]
                },
                {
                  title: "Mughal Empire",
                  subnodes: ["Babur (Panipat 1526)", "Akbar (Mansabdari)", "Todar Mal Land Revenue"]
                }
              ]
            }
          },
          {
            id: "syl-history",
            title: "Indian National Movement (1885 - 1947)",
            notes: `
              <h3>1. Moderate Phase (1885 - 1905)</h3>
              <ul>
                <li><strong>Foundation of INC</strong>: Founded in **December 1885** by retired British civil servant **Allan Octavian Hume**. First session held at Gokuldas Tejpal Sanskrit College, Bombay, attended by 72 delegates. President: **Womesh Chandra Bonnerjee**.</li>
                <li><strong>Moderate Leaders</strong>: Dadabhai Naoroji (Grand Old Man of India, wrote *Poverty and Un-British Rule in India* introducing the Drain Theory), Gopal Krishna Gokhale (political guru of Gandhiji), Dinshaw Wacha, Surendranath Banerjea.</li>
                <li><strong>Methods</strong>: Triple P's: **Prayers, Petitions, and Protests**. Believed in British sense of justice and constitutional framework.</li>
              </ul>
              
              <h3>2. Extremist Phase (1905 - 1919)</h3>
              <ul>
                <li><strong>Partition of Bengal (1905)</strong>: Announced by **Lord Curzon** to suppress nationalism under the guise of administrative convenience. Led to the **Swadeshi and Boycott Movement** (1905-1908). Vande Mataram became the theme song.</li>
                <li><strong>Extremist Leaders</strong>: Lal-Bal-Pal (Lala Lajpat Rai in Punjab, Bal Gangadhar Tilak in Maharashtra, Bipin Chandra Pal in Bengal) and Aurobindo Ghosh.
                  <ul>
                    <li>Tilak declared: 'Swaraj is my birthright and I shall have it'. He started journals *Kesari* (Marathi) and *Mahratta* (English).</li>
                  </ul>
                </li>
                <li><strong>Surat Split (1907)</strong>: Congress split into Moderates and Extremists over presidency and methods during Surat Session presided by Rash Behari Ghosh.</li>
                <li><strong>Lucknow Pact (1916)</strong>: Moderates and Extremists reunited under president Ambica Charan Mazumdar. Also, INC and Muslim League signed a joint pact.</li>
                <li><strong>Home Rule League (1916)</strong>: Launched separately by Tilak (Pune) and Annie Besant (Madras) to demand self-government.</li>
              </ul>
              
              <h3>3. Gandhian Era (1919 - 1947)</h3>
              <ul>
                <li>Gandhiji returned to India on **January 9, 1915** from South Africa.</li>
                <li><strong>Early Satyagrahas</strong>:
                  <ul>
                    <li>Champaran Satyagraha (1917, Bihar): First Civil Disobedience. Against the Tinkathia system (indigo planting 3/20th of land).</li>
                    <li>Ahmedabad Mill Strike (1918): First Hunger Strike. Dispute over plague bonus.</li>
                    <li>Kheda Satyagraha (1918): First Non-Cooperation. Against high taxes during crop failure.</li>
                  </ul>
                </li>
                <li><strong>Rowlatt Act & Jallianwala Bagh (1919)</strong>: Rowlatt Act allowed arrest without trial. On April 13, 1919, General Dyer ordered firing on a peaceful crowd at Jallianwala Bagh, Amritsar. Tagore renounced Knighthood in protest.</li>
                <li><strong>Non-Cooperation Movement (1920-1922)</strong>: Launched to support Khilafat issue and demand Swaraj. Abruptly called off by Gandhiji in February 1922 due to the violent **Chauri Chaura incident** (UP) where 22 policemen were burned alive.</li>
                <li><strong>Civil Disobedience Movement (1930)</strong>: Launched with the **Dandi March** (Salt Satyagraha). Gandhiji along with 78 followers walked 240 miles from Sabarmati Ashram to Dandi (March 12 - April 6, 1930) to break the salt law.</li>
                <li><strong>Quit India Movement (1942)</strong>: Launched following the failure of the Cripps Mission. Resolution passed on **August 8, 1942** at Gowalia Tank, Bombay. Gandhiji gave the slogan **'Do or Die'** (Karo ya maro). British launched 'Operation Zero Hour' to arrest top leaders.</li>
                <li><strong>Cabinet Mission Plan (1946)</strong>: Proposed a federal structure and a Constituent Assembly to frame the Constitution.</li>
                <li><strong>Independence (1947)</strong>: Mountbatten Plan (June 3, 1947) set the partition date. Indian Independence Act passed by British Parliament. Partition occurred on August 15, 1947.</li>
              </ul>
            `,
            formulas: `INC Founded: 1885 (A.O. Hume)\nSurat Split: 1907 | Lucknow Pact: 1916\nChamparan: 1917 | Kheda: 1918\nDandi March: 12 Mar - 6 Apr 1930 (Salt Satyagraha)\nQuit India: 1942 ('Do or Die')`,
            mindmap: {
              root: "National Movement",
              branches: [
                {
                  title: "Moderates (1885-05)",
                  subnodes: ["INC founded 1885", "Naoroji: Drain Theory", "Petitions and protests"]
                },
                {
                  title: "Extremists (1905-19)",
                  subnodes: ["Bengal Partition 1905", "Surat Split 1907", "Tilak Swaraj slogan"]
                },
                {
                  title: "Early Gandhi",
                  subnodes: ["Champaran Indigo 1917", "Ahmedabad Hunger 1918", "Jallianwala Bagh 1919"]
                },
                {
                  title: "Late Gandhi",
                  subnodes: ["Non-Cooperation 1920", "Dandi March Salt 1930", "Quit India Do-Die 1942"]
                }
              ]
            }
          },
        {
          id: "history-kings-dynasties",
          title: "All Eras: Kings & Dynasties",
          notes: "Detailed notes expanded in notes_extra_4.js",
          formulas: "Dynasties Chronology\nAncient -> Medieval -> Modern",
          mindmap: {
            root: "Kings",
            branches: [
              {title: "Ancient", subnodes: ["Mauryan", "Gupta"]},
              {title: "Medieval", subnodes: ["Sultanate", "Mughals"]},
              {title: "Modern", subnodes: ["British Viceroys"]}
            ]
          }
        }
        ]
      }
    ]
  },
  geography: {
    title: "Geography (CDS/NDA)",
    chapters: [
      {
        id: "geography-details",
        title: "Indian Geography",
        topics: [
          {
            id: "syl-geog",
            title: "Indian Geography (Rivers, Passes & Soils)",
            notes: `
              <h3>1. Indian River Systems</h3>
              <ul>
                <li><strong>Himalayan Rivers</strong> (Perennial):
                  <ul>
                    <li><strong>Ganga System</strong>: Originates as Bhagirathi at Gangotri Glacier. Joins Alaknanda at **Devprayag** to form Ganga.
                      <ul>
                        <li>Left Bank Tributaries: Ramganga, Garra, Gomti, Ghaghara, Gandak, Burhi Gandak, Kosi, Mahananda.</li>
                        <li>Right Bank Tributaries: Yamuna (largest), Son, Punpun, Damodor (distributary).</li>
                      </ul>
                    </li>
                    <li><strong>Indus System</strong>: Originates near Mansarovar Lake in Tibet. Enters India in Ladakh.
                      <ul>
                        <li>Five Punjab Tributaries (Panjnad): Jhelum (originates Verinag), Chenab (largest tributary, formed by Chandra & Bhaga), Ravi (originates Rohtang), Beas (originates Vyas Kund), Sutlej (originates Rakas Lake, enters India via Shipki La).</li>
                      </ul>
                    </li>
                    <li><strong>Brahmaputra System</strong>: Originates at Chemayungdung Glacier near Mansarovar as **Tsangpo**. Enters India as **Siang/Dihang** in Arunachal Pradesh. Forms world's largest river island, **Majuli**, in Assam.
                      <ul>
                        <li>Tributaries: Subansiri, Kameng, Manas, Teesta (right); Lohit, Dibang, Dhansiri, Kopili (left).</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><strong>Peninsular Rivers</strong> (Seasonal):
                  <ul>
                    <li><strong>East Flowing (Delta Formers)</strong>:
                      <ul>
                        <li>Godavari: Largest Peninsular River (**Vriddha Ganga**). Originates at Trimbakeshwar, Nashik. Tributaries: Penganga, Wainganga, Wardha, Indravati, Manjira, Pranhita.</li>
                        <li>Krishna: Originates at Mahabaleshwar. Tributaries: Tungabhadra, Koyna, Ghataprabha, Malaprabha, Bhima, Musi.</li>
                        <li>Cauvery: Originates at Brahmagiri Hills (Talakaveri). Tributaries: Hemavati, Shimsha, Arkavati, Kabini, Bhavani, Amaravati.</li>
                      </ul>
                    </li>
                    <li><strong>West Flowing (Estuary Formers)</strong>:
                      <ul>
                        <li>Narmada: Originates at Amarkantak Hills. Flows through a rift valley between Vindhya and Satpura ranges. Forms Dhuandhar Falls.</li>
                        <li>Tapi: Originates at Multai (Betul district). Flows through rift valley.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              
              <h3>2. Mountain Passes of India</h3>
              <ul>
                <li><strong>Kashmir/Ladakh</strong>:
                  <ul>
                    <li>Zoji La: Connects Srinagar with Leh.</li>
                    <li>Banihal Pass: Connects Jammu with Srinagar (Jawahar Tunnel).</li>
                    <li>Karakoram Pass: High altitude pass between India and China.</li>
                  </ul>
                </li>
                <li><strong>Himachal Pradesh</strong>:
                  <ul>
                    <li>Shipki La: Connects HP with Tibet. River Sutlej flows through it.</li>
                    <li>Bara-Lacha La: Connects Lahaul with Ladakh.</li>
                    <li>Rohtang Pass: Connects Kullu Valley with Lahaul and Spiti Valleys.</li>
                  </ul>
                </li>
                <li><strong>Uttarakhand</strong>:
                  <ul>
                    <li>Lipulekh: Tri-junction of India-Tibet-Nepal. Used for Kailash-Mansarovar Yatra.</li>
                    <li>Mana Pass & Niti Pass: Connects Uttarakhand with Tibet.</li>
                  </ul>
                </li>
                <li><strong>Sikkim</strong>:
                  <ul>
                    <li>Nathu La & Jelep La: Strategic passes connecting Sikkim with Chumbi Valley (Tibet).</li>
                  </ul>
                </li>
              </ul>
              
              <h3>3. Soils of India (ICAR Classification)</h3>
              <ul>
                <li><strong>Alluvial Soil (~40%)</strong>: Most widespread and fertile. Deposited by rivers. Poor in phosphorus, rich in potash. Khadar (new alluvial, fine, fertile) and Bhangar (old alluvial, clayey, contains kankar nodules).</li>
                <li><strong>Black Soil (Regur / Cotton Soil) (~15%)</strong>: Formed by weathering of basaltic lava from Deccan traps. High clay content, highly retentive of moisture. Self-ploughing character (develops deep cracks when dry). Extremely good for **Cotton** and citrus fruits.</li>
                <li><strong>Red and Yellow Soil (~18%)</strong>: Developed on crystalline igneous rocks in areas of low rainfall. Red colour due to wide diffusion of iron. Turns yellow when hydrated.</li>
                <li><strong>Laterite Soil</strong>: Formed in areas of high temperature and high rainfall with alternate wet and dry periods. Silicate is leached away, leaving iron and aluminum oxides (Leaching process). Suitable for cashew, tea, coffee.</li>
              </ul>
            `,
            formulas: `Ganga: Originates at Gangotri (Bhagirathi + Alaknanda join at Devprayag)\nZoji La: Srinagar - Leh\nShipki La: HP - Tibet\nRegur Soil: Basaltic Lava (Cotton soil)`,
            mindmap: {
              root: "Indian Geography",
              branches: [
                {
                  title: "Himalayan Rivers",
                  subnodes: ["Ganga: Devprayag join", "Indus: Mansarovar Lake", "Brahmaputra: Tsangpo"]
                },
                {
                  title: "Peninsular Rivers",
                  subnodes: ["Godavari: Vriddha Ganga", "Krishna: Mahabaleshwar", "Narmada: Rift Valley"]
                },
                {
                  title: "Mountain Passes",
                  subnodes: ["Zoji La: Srinagar-Leh", "Shipki La: HP-Tibet", "Nathu La: Sikkim-Tibet"]
                },
                {
                  title: "Indian Soils",
                  subnodes: ["Alluvial: Khadar/Bhangar", "Black: Clayey, Cotton", "Laterite: Leached tea soil"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "physical-geography",
        title: "Physical Geography",
        topics: [
          {
            id: "earth-atmosphere",
            title: "Earth Structure & Atmosphere",
            notes: `
              <h3>1. Interior Structure of the Earth</h3>
              <ul>
                <li><strong>Crust</strong>: Outermost solid part, silica and aluminium (SIAL).</li>
                <li><strong>Mantle</strong>: Mid layer, silica and magnesium (SIMA), contains Asthenosphere (source of magma).</li>
                <li><strong>Core</strong>: Innermost, nickel and iron (NIFE). Outer core is liquid, inner core is solid.</li>
              </ul>
              
              <h3>2. Atmosphere Layers</h3>
              <ul>
                <li><strong>Troposphere</strong>: Lowest layer. Temperature decreases with height. Contains all weather phenomena.</li>
                <li><strong>Stratosphere</strong>: Contains Ozone Layer. Free from clouds (ideal for jet flying). Temperature increases with height.</li>
                <li><strong>Mesosphere</strong>: Coldest layer. Meteorites burn up here.</li>
                <li><strong>Thermosphere/Ionosphere</strong>: Contains electrically charged ions. Reflected radio waves back to Earth.</li>
              </ul>
            `,
            formulas: `Layers: Troposphere -> Stratosphere -> Mesosphere -> Thermosphere\nSial: Crust | Sima: Mantle | Nife: Core\nOzone Layer: Stratosphere`,
            mindmap: {
              root: "Physical Geography",
              branches: [
                {
                  title: "Earth Layers",
                  subnodes: ["Crust (SIAL)", "Mantle (Astenosphere)", "Core (NIFE)"]
                },
                {
                  title: "Atmosphere",
                  subnodes: ["Troposphere: Weather", "Stratosphere: Ozone layer", "Mesosphere: Coldest", "Ionosphere: Radio waves"]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  economics: {
    title: "Economics (CDS/NDA)",
    chapters: [
      {
        id: "economics-basics",
        title: "Introduction to Economics",
        topics: [
          {
            id: "econ-concepts",
            title: "Core Economic Concepts & Sectors",
            notes: `
              <h3>1. Sectors of the Economy</h3>
              <ul>
                <li><strong>Primary Sector</strong>: Direct extraction of natural resources. Examples: Agriculture, forestry, mining, fishing.</li>
                <li><strong>Secondary Sector</strong>: Manufacturing and processing. Examples: Factories, construction, car assembly.</li>
                <li><strong>Tertiary Sector</strong>: Service sector. Examples: Banking, IT, education, tourism, military.</li>
                <li><strong>Quaternary Sector</strong>: Knowledge and research. Examples: R&D, information management.</li>
              </ul>
              
              <h3>2. National Income Metrics</h3>
              <ul>
                <li><strong>GDP (Gross Domestic Product)</strong>: Total monetary value of all finished goods and services produced within a country's borders in a specific time period.</li>
                <li><strong>GNP (Gross National Product)</strong>: GDP + Net Factor Income from Abroad (NFIA). Measures output of citizens globally.</li>
                <li><strong>Real vs Nominal GDP</strong>: Nominal is calculated at current market prices, whereas Real is adjusted for inflation (constant base year prices).</li>
              </ul>
            `,
            formulas: `GNP = GDP + NFIA\nPrimary = Agriculture | Secondary = Industry | Tertiary = Services\nReal GDP = Nominal GDP / GDP Deflator`,
            mindmap: {
              root: "Intro Econ",
              branches: [
                {
                  title: "Sectors",
                  subnodes: ["Primary: Raw Material", "Secondary: Factories", "Tertiary: Services"]
                },
                {
                  title: "National Income",
                  subnodes: ["GDP: Inside borders", "GNP: Citizens only", "Real GDP: Inflation adjusted"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "monetary-fiscal",
        title: "Monetary & Fiscal System",
        topics: [
          {
            id: "rbi-monetary-policy",
            title: "RBI & Monetary Policy Tools",
            notes: `
              <h3>1. Reserve Bank of India (RBI)</h3>
              <p>Established on April 1, 1935 under the RBI Act (nationalized in 1949). Acts as the banker's bank and issues currency.</p>
              
              <h3>2. Monetary Policy Committee (MPC) tools</h3>
              <ul>
                <li><strong>Quantitative Tools</strong> (Control money volume):
                  <ul>
                    <li><strong>Repo Rate</strong>: The interest rate at which RBI lends money to commercial banks for short terms. Lowering Repo rate increases inflation.</li>
                    <li><strong>Reverse Repo Rate</strong>: The rate at which banks park surplus funds with RBI.</li>
                    <li><strong>Cash Reserve Ratio (CRR)</strong>: Percentage of deposits banks must keep as cash with RBI. No interest earned on this.</li>
                    <li><strong>Statutory Liquidity Ratio (SLR)</strong>: Percentage of deposits banks must keep in liquid assets (Gold, Govt Securities) with themselves.</li>
                  </ul>
                </li>
                <li><strong>Qualitative Tools</strong>: Marginal requirements, moral suasion, credit rationing.</li>
              </ul>
            `,
            formulas: `Repo Rate = Lending to Banks\nCRR = Cash with RBI\nSLR = Liquid assets with Bank\nReverse Repo < Repo Rate always`,
            mindmap: {
              root: "Monetary Tools",
              branches: [
                {
                  title: "RBI Role",
                  subnodes: ["Est: April 1, 1935", "Nationalized: 1949", "Issuer of currency"]
                },
                {
                  title: "MPC Rates",
                  subnodes: ["Repo: Short term loans", "Reverse Repo: parking funds", "CRR/SLR: Reserve ratios"]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  physics: {
    title: "Physics (NDA/CDS)",
    chapters: [
      {
        id: "physics-optics",
        title: "Optics & Light",
        topics: [
          {
            id: "reflection-refraction",
            title: "Reflection, Refraction & Lenses",
            notes: `
              <h3>1. Laws of Reflection & Mirror Formulas</h3>
              <ul>
                <li>First Law: The incident ray, the reflected ray, and the normal at the point of incidence all lie in the same plane.</li>
                <li>Second Law: The angle of incidence is equal to the angle of reflection (i = r).</li>
                <li><strong>Mirror Formula</strong>: <strong>1/f = 1/v + 1/u</strong>
                  <ul>
                    <li>u = object distance (always negative).</li>
                    <li>v = image distance (positive for virtual, negative for real).</li>
                    <li>f = focal length (negative for concave, positive for convex).</li>
                  </ul>
                </li>
                <li>Linear Magnification: <strong>m = -v/u = hᵢ/hₒ</strong> (m is negative for real and inverted, positive for virtual and erect).</li>
              </ul>
              
              <h3>2. Refraction & Lens Formulas</h3>
              <ul>
                <li><strong>Snell's Law</strong>: The ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant: <strong>sin i / sin r = constant = ₁μ₂ = μ₂/μ₁</strong>.</li>
                <li>Absolute Refractive Index: <strong>μ = c / v</strong> (where c is speed of light in vacuum, v is speed in medium).</li>
                <li><strong>Lens Formula</strong>: <strong>1/f = 1/v - 1/u</strong></li>
                <li>Linear Magnification (Lens): <strong>m = v/u = hᵢ/hₒ</strong></li>
                <li><strong>Power of a Lens (P)</strong>: Reciprocal of focal length in meters. <strong>P = 1 / f(in m)</strong>. Unit: <strong>Dioptre (D)</strong>.
                  <ul>
                    <li>Convex lens: f is positive ⇒ P is positive.</li>
                    <li>Concave lens: f is negative ⇒ P is negative.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>3. Key Optical Phenomena</h3>
              <ul>
                <li><strong>Total Internal Reflection (TIR)</strong>: Occurs when light travels from denser to rarer medium and the angle of incidence is greater than the critical angle (θ_c).
                  <ul>
                    <li>Formula: **sin θ_c = 1/μ**</li>
                    <li>Applications: Optical fibers, sparkling of diamonds, mirages in deserts, endoscopes.</li>
                  </ul>
                </li>
                <li><strong>Dispersion</strong>: Splitting of white light into constituent colors (VIBGYOR) when passing through a prism due to different speeds of different wavelengths in glass. Red deviates least, violet deviates most.</li>
                <li><strong>Scattering of Light</strong>: Scattering intensity is inversely proportional to the fourth power of wavelength (Rayleigh Scattering: **I ∝ 1/λ⁴**). Explains why sky is blue (blue has short wavelength, scatters more) and sun appears red at sunrise/sunset.</li>
              </ul>
            `,
            formulas: `Mirror Formula: 1/f = 1/v + 1/u\nLens Formula: 1/f = 1/v - 1/u\nLens Power: P = 1/f (dioptres)\nRefractive Index: n = c/v`,
            mindmap: {
              root: "Optics & Light",
              branches: [
                {
                  title: "Reflection",
                  subnodes: ["Law: i = r", "Mirror: 1/f = 1/v + 1/u", "Concave f(-) / Convex f(+)"]
                },
                {
                  title: "Refraction",
                  subnodes: ["Snell: sin i / sin r = μ", "Lens: 1/f = 1/v - 1/u", "Power P = 1/f (Dioptres)"]
                },
                {
                  title: "TIR",
                  subnodes: ["Denser to rarer travel", "Incidence > Critical angle", "Fibers & Diamonds"]
                },
                {
                  title: "Wave Phenomena",
                  subnodes: ["Dispersion: Prism VIBGYOR", "Scattering: Rayleigh 1/λ⁴", "Blue sky & Red sunset"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "physics-mechanics",
        title: "Mechanics & Motion",
        topics: [
          {
            id: "newtons-laws",
            title: "Newton's Laws of Motion",
            notes: `
              <h3>1. Newton's First Law (Law of Inertia)</h3>
              <ul>
                <li>A body continues in its state of rest or uniform motion in a straight line unless compelled by an external unbalanced force.</li>
                <li>Inertia is the inherent property of a body to resist change. Measured by **mass** (greater mass = greater inertia).</li>
                <li>Types: Inertia of Rest (passengers fall backward when bus starts), Inertia of Motion (passengers fall forward when brakes applied), Inertia of Direction (umbrella protects from rain).</li>
              </ul>
              
              <h3>2. Newton's Second Law (Law of Force)</h3>
              <ul>
                <li>The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force.</li>
                <li>Momentum: <strong>p = mv</strong> (vector quantity, unit: kg m/s).</li>
                <li>Mathematical derivation: F = dp/dt = d(mv)/dt = m(dv/dt) = **ma** (Force = mass × acceleration).</li>
                <li>Unit of Force: Newton (N). 1 N = 1 kg m/s² = 10⁵ Dynes.</li>
              </ul>
              
              <h3>3. Newton's Third Law (Law of Action-Reaction)</h3>
              <ul>
                <li>To every action, there is always an equal and opposite reaction. Action and reaction act on **two different bodies**.</li>
                <li>Examples: Recoil of a gun (backward force on shoulder), swimming (pushing water backward), flight of rockets (exhaust gases push downward, rocket moves up).</li>
              </ul>
              
              <h3>4. Friction and Momentum Conservation</h3>
              <ul>
                <li><strong>Law of Conservation of Linear Momentum</strong>: If no external force acts on a system, the total linear momentum remains constant. (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).</li>
                <li><strong>Friction</strong>: The opposing force that comes into play when a body moves or tries to move over another surface.
                  <ul>
                    <li>Formula: <strong>f = μN</strong> (where μ is coefficient of friction, N is normal reaction).</li>
                    <li>Order of friction: **Static Friction > Limiting Friction > Kinetic Friction > Rolling Friction**. Rolling friction is the smallest.</li>
                  </ul>
                </li>
              </ul>
            `,
            formulas: `F = ma\nMomentum: p = mv\nFriction: f = μN\nEquations of Motion: v = u + at, s = ut + 0.5at², v² - u² = 2as`,
            mindmap: {
              root: "Laws of Motion",
              branches: [
                {
                  title: "1st Law (Inertia)",
                  subnodes: ["Resists state change", "Inertia of rest/motion", "Inertia proportional to mass"]
                },
                {
                  title: "2nd Law (Force)",
                  subnodes: ["F = dp/dt rate", "F = ma derivative", "1 Newton = 10⁵ Dyne"]
                },
                {
                  title: "3rd Law (Action)",
                  subnodes: ["Equal & opposite force", "Acts on different bodies", "Guns recoil & Rockets"]
                },
                {
                  title: "Friction & Momentum",
                  subnodes: ["f = μN equation", "Static > Kinetic > Rolling", "Conservation m₁u₁=m₁v₁"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "energy-power-mechanics",
        title: "Energy & Gravitation",
        topics: [
          {
            id: "syl-exercises", 
            title: "Work, Power, Energy & Gravitation",
            notes: `
              <h3>1. Work, Energy and Power</h3>
              <ul>
                <li><strong>Work (W)</strong>: W = F · s · cos θ. (Scalar quantity, unit: Joule).
                  <ul>
                    <li>Work is zero if force and displacement are perpendicular (θ = 90°), e.g., circular planetary orbits, porter holding luggage.</li>
                  </ul>
                </li>
                <li><strong>Kinetic Energy (KE)</strong>: Energy due to motion. <strong>KE = ½ m v² = p² / 2m</strong> (where p is momentum).
                  <ul>
                    <li>If momentum is doubled, KE becomes four times.</li>
                  </ul>
                </li>
                <li><strong>Potential Energy (PE)</strong>: Energy due to position. <strong>PE = mgh</strong>.</li>
                <li><strong>Power (P)</strong>: Rate of doing work. <strong>P = W / t = F · v</strong>. Unit: Watt. <strong>1 Horsepower (HP) = 746 Watts</strong>.</li>
              </ul>
              
              <h3>2. Gravitation & Acceleration due to gravity (g)</h3>
              <ul>
                <li>Newton's Law: <strong>F = G M m / r²</strong> (where G = 6.67 × 10⁻¹¹ N m²/kg²; Universal Gravitational Constant).</li>
                <li>Acceleration due to gravity: <strong>g = G M / R²</strong> (on Earth's surface, g ≈ 9.8 m/s²).
                  <ul>
                    <li>g is independent of mass of the falling body.</li>
                  </ul>
                </li>
                <li><strong>Variations in 'g'</strong>:
                  <ul>
                    <li>With Altitude (h): Decreases: <strong>g' = g(1 - 2h/R)</strong>.</li>
                    <li>With Depth (d): Decreases: <strong>g' = g(1 - d/R)</strong>. (At the centre of Earth, d = R ⇒ g = 0).</li>
                    <li>Due to shape of Earth: Earth is an oblate spheroid. R_equator > R_pole. Since g ∝ 1/R², <strong>g is minimum at Equator, maximum at Poles</strong>.</li>
                    <li>Due to rotation: g decreases as rotation speed increases. (At equator g' = g - ω²R). If rotation stops, g at equator increases, while g at poles remains unchanged.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>3. Kepler's Laws & Escape Velocity</h3>
              <ul>
                <li><strong>Kepler's 3rd Law (Law of Periods)</strong>: The square of time period of a planet is proportional to the cube of semi-major axis of its orbit: **T² ∝ r³**.</li>
                <li><strong>Escape Velocity (vₑ)</strong>: Minimum velocity required to escape gravitational pull.
                  <ul>
                    <li>Formula: <strong>vₑ = √(2gR) = √(2GM/R)</strong>.</li>
                    <li>For Earth, escape velocity is **11.2 km/s**. For Moon, it is **2.38 km/s** (low gravity, hence no atmosphere on Moon).</li>
                  </ul>
                </li>
              </ul>
            `,
            formulas: `Work: W = F·s·cosθ\nKE = 0.5mv² = p²/2m\nPower: P = W/t = F·v\n1 HP = 746 Watts\ng = GM/R²\nEscape Velocity: vₑ = √(2gR) ≈ 11.2 km/s`,
            mindmap: {
              root: "Energy & Gravity",
              branches: [
                {
                  title: "Work & Energy",
                  subnodes: ["W = F·s·cosθ", "KE = ½mv² = p²/2m", "PE = mgh potential"]
                },
                {
                  title: "Power",
                  subnodes: ["P = W/t = F·v", "Unit: Watt", "1 HP = 746 Watts"]
                },
                {
                  title: "Gravity (g)",
                  subnodes: ["g = GM/R²", "Max at Poles, Min at Equator", "Zero at Earth's centre"]
                },
                {
                  title: "Orbits & Escape",
                  subnodes: ["Kepler: T² ∝ r³", "vₑ = √(2gR)", "Earth vₑ = 11.2 km/s"]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  chemistry: {
    title: "Chemistry (NDA/CDS)",
    chapters: [
      {
        id: "chemistry-substances",
        title: "Acids, Bases & Salts",
        topics: [
          {
            id: "acids-bases",
            title: "Acids, Bases & pH Indicators",
            notes: `
              <h3>1. Theories of Acids and Bases</h3>
              <ul>
                <li><strong>Arrhenius Theory</strong>:
                  <ul>
                    <li>Acid: Releases hydrogen ions (H⁺) or hydronium ions (H₃O⁺) in aqueous solution (e.g., HCl, HNO₃).</li>
                    <li>Base: Releases hydroxyl ions (OH⁻) in aqueous solution (e.g., NaOH, KOH).</li>
                  </ul>
                </li>
                <li><strong>Bronsted-Lowry Theory</strong>:
                  <ul>
                    <li>Acid: Proton (H⁺) donor.</li>
                    <li>Base: Proton (H⁺) acceptor.</li>
                  </ul>
                </li>
                <li><strong>Lewis Theory</strong>:
                  <ul>
                    <li>Acid: Electron-pair acceptor (electron deficient, e.g., BF₃, AlCl₃, H⁺).</li>
                    <li>Base: Electron-pair donor (has lone pair, e.g., NH₃, H₂O, F⁻).</li>
                  </ul>
                </li>
              </ul>
              
              <h3>2. pH Scale & Indicators</h3>
              <ul>
                <li>pH represents potential of Hydrogen. Formula: <strong>pH = -log[H⁺]</strong> or <strong>pH = -log[H₃O⁺]</strong>.</li>
                <li>At 298 K: pH < 7 is acidic; pH = 7 is neutral; pH > 7 is basic/alkaline.</li>
                <li>Indicators Table:
                  <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:0.85rem;">
                    <tr style="background-color:var(--bg-tertiary);">
                      <th style="padding:6px; border:1px solid var(--border);">Indicator</th>
                      <th style="padding:6px; border:1px solid var(--border);">Acidic Color</th>
                      <th style="padding:6px; border:1px solid var(--border);">Basic Color</th>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid var(--border);">Litmus</td>
                      <td style="padding:6px; border:1px solid var(--border); color:var(--danger)">Red</td>
                      <td style="padding:6px; border:1px solid var(--border); color: var(--accent)">Blue</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid var(--border);">Phenolphthalein</td>
                      <td style="padding:6px; border:1px solid var(--border);">Colorless</td>
                      <td style="padding:6px; border:1px solid var(--border); color:var(--danger)">Deep Pink</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid var(--border);">Methyl Orange</td>
                      <td style="padding:6px; border:1px solid var(--border); color:var(--danger)">Red/Orange</td>
                      <td style="padding:6px; border:1px solid var(--border); color:var(--warning)">Yellow</td>
                    </tr>
                  </table>
                </li>
              </ul>
              
              <h3>3. Key Chemical Salts and Formulas</h3>
              <ul>
                <li><strong>Baking Soda (Sodium Hydrogen Carbonate - NaHCO₃)</strong>: Prepared by Solvay process. Releases CO₂ on heating. Used in baking and soda-acid fire extinguishers.</li>
                <li><strong>Washing Soda (Sodium Carbonate Decahydrate - Na₂CO₃ · 10H₂O)</strong>: Used in glass, soap paper industries, and for removing permanent hardness of water.</li>
                <li><strong>Plaster of Paris (Calcium Sulphate Hemihydrate - CaSO₄ · ½H₂O)</strong>: Obtained by heating Gypsum (CaSO₄ · 2H₂O) at 373 K. Used for plastering fractured bones and making toys.</li>
                <li><strong>Bleaching Powder (Calcium Oxychloride - CaOCl₂)</strong>: Formed by action of chlorine on dry slaked lime [Ca(OH)₂]. Used as disinfectant for water and bleaching agent in textile industry.</li>
              </ul>
            `,
            formulas: `pH = -log[H⁺]\nBaking Soda: NaHCO₃\nWashing Soda: Na₂CO₃·10H₂O\nPOP: CaSO₄·0.5H₂O\nGypsum: CaSO₄·2H₂O\nBleaching Powder: CaOCl₂`,
            mindmap: {
              root: "Acids & Bases",
              branches: [
                {
                  title: "Theories",
                  subnodes: ["Arrhenius: H⁺/OH⁻", "Bronsted: Proton donor/acc", "Lewis: Electron pair acc/donor"]
                },
                {
                  title: "pH Scale",
                  subnodes: ["pH = -log[H⁺]", "Acidic < 7 / Basic > 7", "Neutral = 7 (water)"]
                },
                {
                  title: "Indicators",
                  subnodes: ["Litmus: Blue to Red (Acid)", "Phenolphthalein: Pink (Base)", "Methyl Orange: Red (Acid)"]
                },
                {
                  title: "Salts",
                  subnodes: ["Baking Soda: NaHCO₃", "Washing Soda: Na₂CO₃·10H₂O", "POP: CaSO₄·0.5H₂O"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "chemistry-bonding",
        title: "Chemical Bonding",
        topics: [
          {
            id: "syl-numerical", 
            title: "Chemical Bonding & Periodic Table",
            notes: `
              <h3>1. Types of Chemical Bonds</h3>
              <ul>
                <li><strong>Electrovalent/Ionic Bond</strong>: Formed by complete transfer of electrons from electropositive metal to electronegative non-metal (e.g., NaCl, CaCl₂).
                  <ul>
                    <li>Properties: High melting/boiling points, soluble in water, conduct electricity in molten/solution state.</li>
                  </ul>
                </li>
                <li><strong>Covalent Bond</strong>: Formed by equal sharing of electrons between non-metals (e.g., H₂, O₂, H₂O).
                  <ul>
                    <li>Properties: Low melting/boiling points, insoluble in water (soluble in organic solvents), poor conductors.</li>
                  </ul>
                </li>
                <li><strong>Coordinate/Dative Bond</strong>: Special covalent bond where shared pair is donated by one atom (donor) and accepted by another (acceptor) (e.g., NH₄⁺, H₃O⁺).</li>
                <li><strong>Hydrogen Bond</strong>: Electrostatic force of attraction between hydrogen atom bonded to a highly electronegative atom (F, O, N) and another electronegative atom.
                  <ul>
                    <li>Intermolecular H-bonding: Between different molecules (e.g., H₂O, HF). Explains why H₂O is liquid while H₂S is gas.</li>
                    <li>Intramolecular H-bonding: Within the same molecule (e.g., o-nitrophenol).</li>
                  </ul>
                </li>
              </ul>
              
              <h3>2. Modern Periodic Table & Periodic Trends</h3>
              <p>Developed by Henry Moseley, based on **Atomic Number**. Has 18 groups and 7 periods.</p>
              <ul>
                <li><strong>Atomic Radius</strong>:
                  <ul>
                    <li>Across Period (Left to Right): **Decreases** due to increase in effective nuclear charge (pulls electrons closer).</li>
                    <li>Down Group (Top to Bottom): **Increases** due to addition of new electron shells.</li>
                  </ul>
                </li>
                <li><strong>Ionization Energy (IE)</strong>: Energy required to remove the outermost electron.
                  <ul>
                    <li>Across Period: **Increases** (atomic size decreases, nuclear pull increases).</li>
                    <li>Down Group: **Decreases** (atomic size increases, easier to remove outer electron).</li>
                  </ul>
                </li>
                <li><strong>Electronegativity</strong>: Tendency of an atom to attract shared electron pair.
                  <ul>
                    <li>Across Period: **Increases** (Fluorine is most electronegative).</li>
                    <li>Down Group: **Decreases**.</li>
                  </ul>
                </li>
                <li><strong>Metallic Character (Electropositivity)</strong>:
                  <ul>
                    <li>Across Period: **Decreases**.</li>
                    <li>Down Group: **Increases** (Francium/Cesium are highly metallic).</li>
                  </ul>
                </li>
              </ul>
            `,
            formulas: `Ionic Bond: Electron transfer\nCovalent Bond: Electron sharing\nH-Bonding: Strongest intermolecular attraction\nElectronegativity: F > O > N > Cl`,
            mindmap: {
              root: "Bonding & Periodic",
              branches: [
                {
                  title: "Ionic Bonds",
                  subnodes: ["Complete electron transfer", "High melting points", "Conduct in molten form"]
                },
                {
                  title: "Covalent & H-Bond",
                  subnodes: ["Shared electron pair", "H-Bond: F, O, N only", "Water high BP reason"]
                },
                {
                  title: "Period Trends (L-R)",
                  subnodes: ["Atomic radius decreases", "Ionization Energy increases", "Electronegativity increases"]
                },
                {
                  title: "Group Trends (T-B)",
                  subnodes: ["Atomic radius increases", "Ionization Energy decreases", "Metallic character increases"]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  biology: {
    title: "Biology (NDA/CDS)",
    chapters: [
      {
        id: "biology-cell",
        title: "Cell Biology & Genetics",
        topics: [
          {
            id: "cell-structure",
            title: "Cell Structure & Cell Division",
            notes: `
              <h3>1. Cell Theory & Classification</h3>
              <ul>
                <li>Cell is the structural and functional unit of life, first discovered by <strong>Robert Hooke</strong> in 1665 (dead cork cell) and <strong>Leeuwenhoek</strong> in 1674 (living cell).</li>
                <li><strong>Cell Theory</strong>: Proposed by Schleiden and Schwann (1838-1839). Rudolf Virchow added: "Omnis cellula-e-cellula" (all cells arise from pre-existing cells).</li>
                <li><strong>Prokaryotic Cells</strong>: Lack a nuclear membrane and membrane-bound organelles (e.g., Bacteria, Blue-green algae). Possess 70S ribosomes.</li>
                <li><strong>Eukaryotic Cells</strong>: Have a well-defined nuclear envelope and organelles (e.g., Plants, Animals, Fungi). Possess 80S ribosomes.</li>
              </ul>
              
              <h3>2. Vital Cell Organelles</h3>
              <ul>
                <li><strong>Mitochondria</strong>: Double-membraned powerhouse of the cell. Site of aerobic cellular respiration and ATP generation. Contains its own DNA and 70S ribosomes.</li>
                <li><strong>Plastids (Chloroplasts)</strong>: Found only in plant cells. Kitchen of the cell, contains chlorophyll to perform photosynthesis. Possesses own circular DNA.</li>
                <li><strong>Ribosomes</strong>: Non-membrane bound protein factories. Found free in cytoplasm or attached to Rough Endoplasmic Reticulum (RER).</li>
                <li><strong>Lysosomes</strong>: Formed by Golgi apparatus. Known as <strong>Suicide Bags</strong> because they contain hydrolytic digestive enzymes that destroy worn-out organelles or the cell itself under stress.</li>
                <li><strong>Endoplasmic Reticulum (ER)</strong>: RER has ribosomes and synthesizes proteins; Smooth ER (SER) synthesizes lipids and detoxifies poisons/drugs.</li>
                <li><strong>Golgi Apparatus</strong>: Performs packaging, modification, and dispatching of materials.</li>
              </ul>
              
              <h3>3. Cell Division (Mitosis vs Meiosis)</h3>
              <ul>
                <li><strong>Mitosis (Equational Division)</strong>: Occurs in somatic cells for growth and repair. One diploid cell (2n) divides to produce <strong>two identical diploid (2n) daughter cells</strong>.</li>
                <li><strong>Meiosis (Reductional Division)</strong>: Occurs in germ cells to form gametes. One diploid cell (2n) divides to produce <strong>four non-identical haploid (n) daughter cells</strong>. Features crossing over in Prophase I (Pachytene stage) which induces variation.</li>
              </ul>
            `,
            formulas: `Powerhouse: Mitochondria (ATP)\nSuicide Bags: Lysosomes (hydrolytic enzymes)\nProtein Factory: Ribosomes\nMitosis: Growth & Repair (2n -> 2n)\nMeiosis: Gamete formation & Crossing Over (2n -> 4 cells of n)`,
            mindmap: {
              root: "Cell Biology",
              branches: [
                {
                  title: "Cell Types",
                  subnodes: ["Prokaryotes: 70S, no envelope", "Eukaryotes: 80S, true nucleus"]
                },
                {
                  title: "Organelles",
                  subnodes: ["Mitochondria: ATP, own DNA", "Chloroplasts: Photosynthesis", "Lysosomes: Hydrolytic enzymes"]
                },
                {
                  title: "Cell Division",
                  subnodes: ["Mitosis: Somatic (2n -> 2n)", "Meiosis: Gametes (2n -> 4x n)", "Crossing Over: Prophase I variation"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "biology-physiology",
        title: "Human Physiology",
        topics: [
          {
            id: "human-systems",
            title: "Vital Human Systems & Organs",
            notes: `
              <h3>1. Circulatory System & Blood Components</h3>
              <ul>
                <li><strong>Human Heart</strong>: 4-chambered (two auricles, two ventricles) showing double circulation. Normal pace maker is the <strong>Sino-Atrial (SA) Node</strong>.</li>
                <li><strong>Blood Composition</strong>: Plasma (55%) and Formed elements (45%):
                  <ul>
                    <li><strong>RBCs (Erythrocytes)</strong>: Lifespan ~120 days. Lack nucleus at maturity. Contain iron-rich hemoglobin to transport oxygen. Destroyed in the spleen (graveyard of RBCs).</li>
                    <li><strong>WBCs (Leukocytes)</strong>: Part of immune system. Granulocytes (Neutrophils, Basophils, Eosinophils) and Agranulocytes (Lymphocytes, Monocytes).</li>
                    <li><strong>Platelets (Thrombocytes)</strong>: Responsible for blood clotting (aided by Vitamin K and Calcium ions).</li>
                  </ul>
                </li>
                <li><strong>Blood Groups (ABO System)</strong>:
                  <ul>
                    <li>Group O-negative: <strong>Universal Donor</strong> (lacks antigens).</li>
                    <li>Group AB-positive: <strong>Universal Recipient</strong> (lacks antibodies).</li>
                  </ul>
                </li>
              </ul>
              
              <h3>2. Endocrine Glands & Gaseous / Digestive Systems</h3>
              <ul>
                <li><strong>Endocrine Glands (Ductless Glands)</strong>: Secretions are called hormones.
                  <ul>
                    <li><strong>Pituitary Gland</strong>: Master gland, controls growth and other glands.</li>
                    <li><strong>Thyroid Gland</strong>: Secretes thyroxine (needs Iodine; deficiency leads to Goitre).</li>
                    <li><strong>Pancreas (Mixed Gland)</strong>: Islets of Langerhans secrete <strong>Insulin</strong> (Beta cells, lowers blood glucose) and <strong>Glucagon</strong> (Alpha cells, raises glucose). Deficiency of insulin causes Diabetes Mellitus.</li>
                    <li><strong>Adrenal Gland</strong>: Secretes Adrenaline (fight-or-flight hormone, raises heart rate).</li>
                  </ul>
                </li>
                <li><strong>Digestive Enzymes</strong>:
                  <ul>
                    <li>Saliva: Salivary Amylase (digests starch).</li>
                    <li>Stomach: Pepsin (digests proteins in acidic medium - HCl).</li>
                    <li>Pancreas: Trypsin (proteins), Lipase (fats), Amylase (carbohydrates).</li>
                  </ul>
                </li>
              </ul>
            `,
            formulas: `Blood pH: 7.4 (Slightly alkaline)\nRBC lifespan: 120 days\nUniversal Donor: O- | Recipient: AB+\nMaster Gland: Pituitary\nInsulin: Beta-cells (lowers sugar)\nAdrenaline: Emergency hormone`,
            mindmap: {
              root: "Human Physiology",
              branches: [
                {
                  title: "Circulatory",
                  subnodes: ["Heart: 4 chambers, SA Node", "RBC (120d, no nucleus)", "AB+ Recipient, O- Donor"]
                },
                {
                  title: "Endocrine",
                  subnodes: ["Pancreas: Insulin (Beta cells)", "Thyroid: Thyroxine (Goitre)", "Adrenal: Adrenaline emergency"]
                },
                {
                  title: "Digestive",
                  subnodes: ["Salivary Amylase: Starch", "Pepsin (Stomach): Proteins", "Lipase: Fat emulsification"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "biology-diseases",
        title: "Health, Diseases & Nutrition",
        topics: [
          {
            id: "diseases",
            title: "Human Diseases & Pathogens",
            notes: `
              <h3>1. Infectious Diseases Classification</h3>
              <ul>
                <li><strong>Bacterial Diseases</strong>:
                  <ul>
                    <li>Tuberculosis (TB): Caused by <em>Mycobacterium tuberculosis</em>. Prevented by BCG vaccine.</li>
                    <li>Typhoid: Caused by <em>Salmonella typhi</em>. Diagnosed by **Widal Test**.</li>
                    <li>Cholera: Caused by <em>Vibrio cholerae</em> (water-borne).</li>
                  </ul>
                </li>
                <li><strong>Viral Diseases</strong>:
                  <ul>
                    <li>Dengue: Caused by Flavivirus. Spread by <strong>Aedes aegypti</strong> mosquito. Characterized by severe drop in platelet count.</li>
                    <li>Polio: Caused by Poliovirus. Vaccine developed by Jonas Salk (injected) and Albert Sabin (oral).</li>
                    <li>AIDS: Caused by HIV (Retrovirus). Diagnosed by <strong>ELISA Test</strong>.</li>
                  </ul>
                </li>
                <li><strong>Protozoan Diseases</strong>:
                  <ul>
                    <li>Malaria: Caused by <em>Plasmodium</em>. Spread by female **Anopheles** mosquito vector. Quinine (from Cinchona bark) is used as treatment.</li>
                    <li>Kala-azar (Leishmaniasis): Spread by **Sandfly** vector.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>2. Nutritional Deficiency Diseases</h3>
              <ul>
                <li><strong>Vitamins & Minerals Deficiency Chart</strong>:
                  <table style="width:100%; border-collapse:collapse; margin-top:8px; font-size:0.85rem;">
                    <tr style="background-color:var(--bg-tertiary);">
                      <th style="padding:6px; border:1px solid var(--border);">Vitamin / Chemical</th>
                      <th style="padding:6px; border:1px solid var(--border);">Common Name</th>
                      <th style="padding:6px; border:1px solid var(--border);">Deficiency Disease</th>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid var(--border);">Vitamin A</td>
                      <td style="padding:6px; border:1px solid var(--border);">Retinol</td>
                      <td style="padding:6px; border:1px solid var(--border); color:var(--warning)">Night Blindness / Xerophthalmia</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid var(--border);">Vitamin B1</td>
                      <td style="padding:6px; border:1px solid var(--border);">Thiamine</td>
                      <td style="padding:6px; border:1px solid var(--border); color:var(--warning)">Beriberi</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid var(--border);">Vitamin C</td>
                      <td style="padding:6px; border:1px solid var(--border);">Ascorbic Acid</td>
                      <td style="padding:6px; border:1px solid var(--border); color:var(--warning)">Scurvy (Bleeding gums)</td>
                    </tr>
                    <tr>
                      <td style="padding:6px; border:1px solid var(--border);">Vitamin D</td>
                      <td style="padding:6px; border:1px solid var(--border);">Calciferol</td>
                      <td style="padding:6px; border:1px solid var(--border); color:var(--warning)">Rickets (bow legs in kids)</td>
                    </tr>
                  </table>
                </li>
              </ul>
            `,
            formulas: `Typhoid: Widal Test\nMalaria: Female Anopheles vector\nDengue: Aedes vector\nVit A (Retinol) -> Night Blindness\nVit B1 (Thiamine) -> Beriberi\nVit C (Ascorbic Acid) -> Scurvy\nVit D (Calciferol) -> Rickets`,
            mindmap: {
              root: "Diseases & Health",
              branches: [
                {
                  title: "Bacterial",
                  subnodes: ["TB: Mycobacterium, BCG", "Typhoid: Salmonella, Widal", "Cholera: Vibrio, water-borne"]
                },
                {
                  title: "Viral & Protozoan",
                  subnodes: ["Dengue: Aedes mosquito", "AIDS: HIV, ELISA test", "Malaria: Plasmodium, Anopheles"]
                },
                {
                  title: "Deficiency",
                  subnodes: ["Vit A: Night Blindness", "Vit B1: Beriberi thiamine", "Vit C: Scurvy gums", "Vit D: Rickets bone"]
                }
              ]
            }
          }
        ]
      }
    ]
  },
  "military-aptitude": {
    title: "Military GK & Aptitude",
    chapters: [
      {
        id: "defence-structures",
        title: "Command Structures & Ranks",
        topics: [
          {
            id: "rank-equivalence",
            title: "Equivalent Officer Ranks (Tri-Services)",
            notes: `
              <h3>1. Commissioned Officers Rank Structure</h3>
              <p>Equivalent ranks in the three services are highly tested in CDS and AFCAT. Commissioned ranks from junior to senior levels:</p>
              
              <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
                <tr style="background-color:var(--bg-tertiary);">
                  <th style="padding:8px; border:1px solid var(--border);">Army</th>
                  <th style="padding:8px; border:1px solid var(--border);">Navy</th>
                  <th style="padding:8px; border:1px solid var(--border);">Air Force</th>
                  <th style="padding:8px; border:1px solid var(--border);">Insignia Star Rating</th>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">Lieutenant</td>
                  <td style="padding:8px; border:1px solid var(--border);">Sub-Lieutenant</td>
                  <td style="padding:8px; border:1px solid var(--border);">Flying Officer</td>
                  <td style="padding:8px; border:1px solid var(--border);">Entry Rank</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">Captain</td>
                  <td style="padding:8px; border:1px solid var(--border);">Lieutenant</td>
                  <td style="padding:8px; border:1px solid var(--border);">Flight Lieutenant</td>
                  <td style="padding:8px; border:1px solid var(--border);">Junior Officer</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">Major</td>
                  <td style="padding:8px; border:1px solid var(--border);">Lieutenant Commander</td>
                  <td style="padding:8px; border:1px solid var(--border);">Squadron Leader</td>
                  <td style="padding:8px; border:1px solid var(--border);">Mid-Level Officer</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">Lieutenant Colonel</td>
                  <td style="padding:8px; border:1px solid var(--border);">Commander</td>
                  <td style="padding:8px; border:1px solid var(--border);">Wing Commander</td>
                  <td style="padding:8px; border:1px solid var(--border);">Selection Grade</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">Colonel</td>
                  <td style="padding:8px; border:1px solid var(--border);">Captain</td>
                  <td style="padding:8px; border:1px solid var(--border);">Group Captain</td>
                  <td style="padding:8px; border:1px solid var(--border);">Senior Level</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">Brigadier</td>
                  <td style="padding:8px; border:1px solid var(--border);">Commodore</td>
                  <td style="padding:8px; border:1px solid var(--border);">Air Commodore</td>
                  <td style="padding:8px; border:1px solid var(--border);">1 Star</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">Major General</td>
                  <td style="padding:8px; border:1px solid var(--border);">Rear Admiral</td>
                  <td style="padding:8px; border:1px solid var(--border);">Air Vice Marshal</td>
                  <td style="padding:8px; border:1px solid var(--border);">2 Star</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">Lieutenant General</td>
                  <td style="padding:8px; border:1px solid var(--border);">Vice Admiral</td>
                  <td style="padding:8px; border:1px solid var(--border);">Air Marshal</td>
                  <td style="padding:8px; border:1px solid var(--border);">3 Star</td>
                </tr>
                <tr>
                  <td style="padding:8px; border:1px solid var(--border);">General</td>
                  <td style="padding:8px; border:1px solid var(--border);">Admiral</td>
                  <td style="padding:8px; border:1px solid var(--border);">Air Chief Marshal</td>
                  <td style="padding:8px; border:1px solid var(--border);">4 Star (Chief of Staff)</td>
                </tr>
              </table>
              
              <h3>2. Honorary / Highest Ranks (5-Star Ranks)</h3>
              <ul>
                <li><strong>Field Marshal (Army)</strong>: Ranks held by Sam Manekshaw and K.M. Cariappa.</li>
                <li><strong>Marshal of the Indian Air Force (IAF)</strong>: Rank held by Arjan Singh.</li>
                <li><strong>Admiral of the Fleet (Navy)</strong>: Peacetime equivalent five-star rank (no naval officer has received this yet).</li>
              </ul>
            `,
            formulas: `Lieutenant = Sub-Lieutenant = Flying Officer\nColonel = Captain = Group Captain\nGeneral = Admiral = Air Chief Marshal`,
            mindmap: {
              root: "Ranks Equivalence",
              branches: [
                {
                  title: "Junior Officers",
                  subnodes: ["Lieutenant (Army)", "Sub-Lieutenant (Navy)", "Flying Officer (IAF)"]
                },
                {
                  title: "Mid-Level",
                  subnodes: ["Major = Lt Commander = Sqn Leader", "Lt Colonel = Commander = Wing Cdr"]
                },
                {
                  title: "Senior Level",
                  subnodes: ["Colonel = Captain = Group Captain", "Brigadier = Commodore = Air Comm"]
                },
                {
                  title: "Command Star Ranks",
                  subnodes: ["Maj Gen (2 Star)", "Lt Gen (3 Star)", "General / Chief (4 Star)"]
                }
              ]
            }
          },
          {
            id: "commands",
            title: "Operational Commands of Services",
            notes: `
              <h3>1. Indian Army Commands (7)</h3>
              <ul>
                <li>Northern Command: <strong>Udhampur</strong> (J&K)</li>
                <li>Western Command: <strong>Chandimandir</strong> (Haryana)</li>
                <li>Eastern Command: <strong>Kolkata</strong> (West Bengal)</li>
                <li>Southern Command: <strong>Pune</strong> (Maharashtra)</li>
                <li>Central Command: <strong>Lucknow</strong> (Uttar Pradesh)</li>
                <li>South Western Command: <strong>Jaipur</strong> (Rajasthan)</li>
                <li>Army Training Command (ARTRAC): <strong>Shimla</strong> (Himachal Pradesh)</li>
              </ul>
              
              <h3>2. Indian Air Force Commands (7)</h3>
              <ul>
                <li>Western Air Command: <strong>New Delhi</strong></li>
                <li>Eastern Air Command: <strong>Shillong</strong> (Meghalaya)</li>
                <li>Central Air Command: <strong>Prayagraj</strong> (Uttar Pradesh)</li>
                <li>Southern Air Command: <strong>Thiruvananthapuram</strong> (Kerala)</li>
                <li>South Western Air Command: <strong>Gandhinagar</strong> (Gujarat)</li>
                <li>Training Command: <strong>Bengaluru</strong> (Karnataka)</li>
                <li>Maintenance Command: <strong>Nagpur</strong> (Maharashtra)</li>
              </ul>
              
              <h3>3. Indian Navy Commands (3)</h3>
              <ul>
                <li>Western Naval Command: <strong>Mumbai</strong> (Maharashtra)</li>
                <li>Eastern Naval Command: <strong>Visakhapatnam</strong> (Andhra Pradesh)</li>
                <li>Southern Naval Command (Training Command): <strong>Kochi</strong> (Kerala)</li>
              </ul>
              
              <h3>4. Tri-Services Unified Command</h3>
              <ul>
                <li>Andaman and Nicobar Command: <strong>Port Blair</strong> (Joint Command of Army, Navy, Air Force).</li>
                <li>Strategic Forces Command (SFC): Handles India's tactical nuclear weapons stockpile.</li>
              </ul>
            `,
            formulas: `Army Commands: 7 (Training at Shimla)\nAir Force Commands: 7 (Maintenance at Nagpur)\nNavy Commands: 3`,
            mindmap: {
              root: "Service Commands",
              branches: [
                {
                  title: "Army (7)",
                  subnodes: ["Northern: Udhampur", "Eastern: Kolkata", "Training: Shimla"]
                },
                {
                  title: "Air Force (7)",
                  subnodes: ["Central: Prayagraj", "SW: Gandhinagar", "Maintenance: Nagpur"]
                },
                {
                  title: "Navy (3)",
                  subnodes: ["Western: Mumbai", "Eastern: Vizag", "Southern: Kochi"]
                },
                {
                  title: "Joint Commands",
                  subnodes: ["Andaman: Port Blair", "Strategic Forces Command"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "tactical-defence-gk",
        title: "Exercises & Missile Systems",
        topics: [
          {
            id: "bilateral-exercises",
            title: "Joint Military Exercises of India",
            notes: `
              <h3>Bilateral Exercises List (High-Yield)</h3>
              <p>Armed forces carry out exercises to practice tactical joint operations. Memorize the major ones:</p>
              <ul>
                <li><strong>United States</strong>:
                  <ul>
                    <li>Yudh Abhyas (Army)</li>
                    <li>Vajra Prahar (Special Forces)</li>
                    <li>Cope India (Air Force)</li>
                    <li>Tarkash (Counter-terrorism joint drills)</li>
                  </ul>
                </li>
                <li><strong>France</strong>:
                  <ul>
                    <li>Shakti (Army)</li>
                    <li>Varuna (Navy)</li>
                    <li>Garuda (Air Force)</li>
                  </ul>
                </li>
                <li><strong>Russia</strong>:
                  <ul>
                    <li>Indra (Tri-services joint exercise)</li>
                  </ul>
                </li>
                <li><strong>United Kingdom</strong>:
                  <ul>
                    <li>Ajeya Warrior (Army)</li>
                    <li>Konkan (Navy)</li>
                    <li>Indradhanush (Air Force)</li>
                  </ul>
                </li>
                <li><strong>Neighbours</strong>:
                  <ul>
                    <li>Surya Kiran (Nepal Army)</li>
                    <li>Sampriti (Bangladesh Army)</li>
                    <li>Mitra Shakti (Sri Lanka Army)</li>
                    <li>SLINEX (Sri Lanka Navy)</li>
                    <li>Hand-in-Hand (China Army)</li>
                  </ul>
                </li>
                <li><strong>Others</strong>:
                  <ul>
                    <li>Nomadic Elephant (Mongolia Army)</li>
                    <li>Garuda Shakti (Indonesia Army)</li>
                    <li>Simbex (Singapore Navy)</li>
                    <li>Dharma Guardian (Japan Army)</li>
                  </ul>
                </li>
              </ul>
            `,
            formulas: `US: Yudh Abhyas, Vajra Prahar\nNepal: Surya Kiran\nFrance: Garuda(Air), Varuna(Navy), Shakti(Army)\nRussia: Indra`,
            mindmap: {
              root: "Bilateral Drills",
              branches: [
                {
                  title: "US & UK",
                  subnodes: ["US: Yudh Abhyas, Vajra", "UK: Ajeya Warrior, Konkan"]
                },
                {
                  title: "France & Russia",
                  subnodes: ["FR: Shakti (Army)", "FR: Varuna (Navy), Garuda (Air)", "RU: Indra Tri-services"]
                },
                {
                  title: "Subcontinent",
                  subnodes: ["Nepal: Surya Kiran", "Bangladesh: Sampriti", "Sri Lanka: Mitra Shakti"]
                },
                {
                  title: "East Asia",
                  subnodes: ["Japan: Dharma Guardian", "Mongolia: Nomadic Elephant", "Singapore: Simbex"]
                }
              ]
            }
          },
          {
            id: "missiles-systems",
            title: "Integrated Guided Missile Program (IGMDP)",
            notes: `
              <h3>1. The IGMDP Program</h3>
              <p>Conceived by **Dr. A.P.J. Abdul Kalam** in 1983 to make India self-sufficient in missile technology. Formally completed in 2008.</p>
              <p>Mnemonic for the 5 core missiles: <strong>PATNA</strong></p>
              <ul>
                <li><strong>P - Prithvi</strong>: Short-range surface-to-surface ballistic missile. First missile under IGMDP.</li>
                <li><strong>A - Agni</strong>: Medium to intercontinental range surface-to-surface ballistic missile. (Agni 1 to 5). Agni-5 is an ICBM with a range of 5000+ km.</li>
                <li><strong>T - Trishul</strong>: Short-range low-altitude surface-to-air missile. (Development closed, technology acts as feed).</li>
                <li><strong>N - Nag</strong>: Third-generation fire-and-forget anti-tank guided missile (ATGM). Has land and heliborne versions.</li>
                <li><strong>A - Akash</strong>: Medium-range surface-to-air missile with multi-target engagement capability. Guided by Rajendra radar.</li>
              </ul>
              
              <h3>2. Crucial Cruise & Air Defence Missiles</h3>
              <ul>
                <li><strong>BrahMos</strong>: Supersonic cruise missile jointly developed with Russia.
                  <ul>
                    <li>Speed: **Mach 2.8 to 3.0** (World's fastest operational cruise missile).</li>
                    <li>Can be launched from submarine, ships, aircraft, or land.</li>
                  </ul>
                </li>
                <li><strong>Astra</strong>: Beyond Visual Range (BVR) air-to-air missile integrated onto Sukhoi Su-30MKI and Tejas.</li>
                <li><strong>K-Missile Series (K-15 Sagarika, K-4)</strong>: Submarine-launched ballistic missiles (SLBMs) designed for Arihant nuclear submarine class.</li>
                <li><strong>Helina (Dhruvastra)</strong>: Helicopter-launched version of the Nag anti-tank missile.</li>
              </ul>
            `,
            formulas: `PATNA: Prithvi, Agni, Trishul, Nag, Akash\nBrahMos Speed: Mach 2.8 - 3.0\nAstra: Air-to-Air (BVR)\nHelina: Helicopter ATGM`,
            mindmap: {
              root: "Missile Systems",
              branches: [
                {
                  title: "IGMDP Ballistic",
                  subnodes: ["Prithvi: Surf-to-Surf", "Agni: Medium/ICBM (5000km)", "PATNA mnemonic"]
                },
                {
                  title: "IGMDP Air Def",
                  subnodes: ["Trishul: Short range SAM", "Akash: Med range, Rajendra radar"]
                },
                {
                  title: "IGMDP Anti-Tank",
                  subnodes: ["Nag: Fire-and-Forget", "Helina: Helicopter launch"]
                },
                {
                  title: "Supersonic Cruise",
                  subnodes: ["BrahMos: India-Russia", "Mach 2.8 - 3.0 speed", "Sub/Ship/Air/Land launch"]
                }
              ]
            }
          }
        ]
      },
      {
        id: "quantitative-aptitude",
        title: "Numerical Aptitude",
        topics: [
          {
            id: "syl-numerical-speed",
            title: "Time, Speed & Distance Formulas",
            notes: `
              <h3>1. General Speed, Time, and Distance Relationship</h3>
              <ul>
                <li><strong>Speed = Distance / Time</strong> ⇒ Time = Distance / Speed ; Distance = Speed × Time</li>
                <li>Unit Conversions:
                  <ul>
                    <li>To convert from km/h to m/s: multiply by **5/18**. (e.g., 90 km/h = 90 × 5/18 = 25 m/s).</li>
                    <li>To convert from m/s to km/h: multiply by **18/5**.</li>
                  </ul>
                </li>
                <li><strong>Average Speed</strong>:
                  <ul>
                    <li>Case A: A body covers two equal distances at speeds x km/h and y km/h. Average Speed = <strong>2xy / (x + y)</strong>.</li>
                    <li>Case B: A body covers three equal distances at speeds x, y, and z km/h. Average Speed = <strong>3xyz / (xy + yz + zx)</strong>.</li>
                    <li>General Case: **Total Distance Covered / Total Time Taken**.</li>
                  </ul>
                </li>
              </ul>
              
              <h3>2. Relative Speed</h3>
              <p>Speed of one body with respect to another moving body:</p>
              <ul>
                <li>If two bodies move in the **same direction** with speeds u and v (where u > v), Relative Speed = <strong>u - v</strong>.</li>
                <li>If two bodies move in **opposite directions**, Relative Speed = <strong>u + v</strong>.</li>
              </ul>
              
              <h3>3. Trains and Platforms Problems</h3>
              <ul>
                <li><strong>Train crossing a pole/man</strong>: The distance covered is equal to the length of the train itself. Time = Length of Train / Speed.</li>
                <li><strong>Train crossing a bridge/platform/tunnel</strong>: The distance covered is equal to the sum of lengths of train and platform. Time = (Length of Train + Length of Platform) / Speed.</li>
                <li><strong>Two trains crossing each other</strong>: The distance covered is always the sum of both lengths (L₁ + L₂). The speed used is the relative speed.</li>
              </ul>
            `,
            formulas: `Speed = D/T\n1 km/h = 5/18 m/s\nAverage Speed = 2xy/(x+y)\nSame direction: Speed₁ - Speed₂\nOpposite direction: Speed₁ + Speed₂`,
            mindmap: {
              root: "Speed & Distance",
              branches: [
                {
                  title: "Conversions",
                  subnodes: ["Speed = Distance / Time", "km/h to m/s (× 5/18)", "m/s to km/h (× 18/5)"]
                },
                {
                  title: "Averages",
                  subnodes: ["Equal dist: 2xy/(x+y)", "General: Total Dist/Total Time"]
                },
                {
                  title: "Relative Speed",
                  subnodes: ["Same dir: u - v", "Opposite dir: u + v"]
                },
                {
                  title: "Train Problems",
                  subnodes: ["Crossing pole: L_train", "Crossing bridge: L_train + L_platform"]
                }
              ]
            }
          },
          {
            id: "syl-numerical-ratios",
            title: "Ratios, Proportions & Percentages",
            notes: `
              <h3>1. Ratios and Proportions</h3>
              <ul>
                <li>Ratio: A comparison of two quantities: a/b or a : b.</li>
                <li>Proportion: Equality of two ratios: a : b :: c : d ⇒ <strong>a / b = c / d</strong>.
                  <ul>
                    <li>Product of extremes = Product of means (ad = bc).</li>
                  </ul>
                </li>
                <li><strong>Mean Proportional</strong>: Between a and b is **x = √(ab)**.</li>
                <li><strong>Third Proportional</strong>: To a and b is **x = b² / a**.</li>
                <li><strong>Fourth Proportional</strong>: To a, b, c is **x = bc / a**.</li>
              </ul>
              
              <h3>2. Percentages</h3>
              <ul>
                <li>Percentage to Fraction: Divide by 100 (e.g., 20% = 20/100 = 1/5).</li>
                <li>Fraction to Percentage: Multiply by 100 (e.g., 3/4 = 3/4 × 100 = 75%).</li>
                <li>Percentage Increase/Decrease = [ (New Value - Original) / Original ] × 100</li>
              </ul>
              
              <h3>3. Profit, Loss, and Discount</h3>
              <ul>
                <li>Gain = Selling Price (SP) - Cost Price (CP) (if SP > CP)</li>
                <li>Loss = Cost Price (CP) - Selling Price (SP) (if CP > SP)</li>
                <li><strong>Gain % = (Gain / CP) × 100</strong> (Profit and Loss are always calculated on CP unless stated otherwise).</li>
                <li><strong>Loss % = (Loss / CP) × 100</strong></li>
                <li>Assent Formulas:
                  <ul>
                    <li>SP = CP × (100 + Gain%) / 100</li>
                    <li>SP = CP × (100 - Loss%) / 100</li>
                  </ul>
                </li>
                <li><strong>Discount</strong>: Calculated on Marked Price (MP). SP = MP - Discount.</li>
                <li>Discount % = (Discount / MP) × 100</li>
              </ul>
            `,
            formulas: `Gain% = (Gain/CP) * 100\nLoss% = (Loss/CP) * 100\nDiscount% = (Discount/MP) * 100\nMean Proportional = √(ab)\n  ,\n{
  "id": "nda-gat-coaching-mock-2",
  "exam": "NDA",
  "subject": "General Ability Test",
  "title": "NDA GAT Mock Test 2 (Coaching Replica)",
  "duration": 150,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 4,
    "incorrectMarks": -1.33,
    "examType": "NDA"
  },
  "questions": [
    {
      "question": "Which of the following is true regarding Newton's 2th law equivalents? (Conceptual)",
      "options": [
        "Action reaction",
        "Inertia",
        "F=ma",
        "None"
      ],
      "correct": 1,
      "explanation": "Concept check on Newton's laws."
    },
    {
      "question": "The velocity of sound in vacuum is:",
      "options": [
        "330 m/s",
        "0 m/s",
        "3 * 10^8 m/s",
        "343 m/s"
      ],
      "correct": 1,
      "explanation": "Sound requires a medium to travel. In vacuum, its velocity is 0."
    },
    {
      "question": "What is the oxidation state of Oxygen in H2O2?",
      "options": [
        "-2",
        "-1",
        "+1",
        "+2"
      ],
      "correct": 1,
      "explanation": "In peroxides, the oxidation state of oxygen is -1."
    },
    {
      "question": "Which lens is used to correct Myopia?",
      "options": [
        "Convex",
        "Concave",
        "Cylindrical",
        "Bifocal"
      ],
      "correct": 1,
      "explanation": "Concave lens diverges light rays to form image on the retina for myopic eyes."
    },
    {
      "question": "Which gas is responsible for the Bhopal Gas Tragedy?",
      "options": [
        "Carbon monoxide",
        "Phosgene",
        "Methyl Isocyanate",
        "Mustard Gas"
      ],
      "correct": 2,
      "explanation": "Methyl Isocyanate (MIC) leaked from the Union Carbide plant in 1984."
    },
    {
      "question": "What is the powerhouse of the cell?",
      "options": [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Lysosome"
      ],
      "correct": 2,
      "explanation": "Mitochondria generate most of the cell's supply of ATP."
    },
    {
      "question": "Deficiency of Vitamin C causes:",
      "options": [
        "Beri-beri",
        "Scurvy",
        "Night blindness",
        "Rickets"
      ],
      "correct": 1,
      "explanation": "Scurvy is caused by a severe lack of vitamin C in the diet."
    },
    {
      "question": "The SI unit of Electrical Resistance is:",
      "options": [
        "Ampere",
        "Volt",
        "Ohm",
        "Watt"
      ],
      "correct": 2,
      "explanation": "The ohm is the SI derived unit of electrical resistance."
    },
    {
      "question": "Which planet is known as the Morning Star?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Mercury"
      ],
      "correct": 1,
      "explanation": "Venus is often called the morning or evening star because it's the brightest planet."
    },
    {
      "question": "The headquarters of the World Health Organization is located in:",
      "options": [
        "New York",
        "Geneva",
        "Paris",
        "London"
      ],
      "correct": 1,
      "explanation": "WHO is headquartered in Geneva, Switzerland."
    },
    {
      "question": "Which Indian state has the longest coastline?",
      "options": [
        "Maharashtra",
        "Gujarat",
        "Andhra Pradesh",
        "Tamil Nadu"
      ],
      "correct": 1,
      "explanation": "Gujarat has the longest mainland coastline in India."
    },
    {
      "question": "The fundamental rights in the Indian Constitution are derived from the Constitution of:",
      "options": [
        "UK",
        "USA",
        "USSR",
        "Ireland"
      ],
      "correct": 1,
      "explanation": "Fundamental rights are inspired by the US Bill of Rights."
    },
    {
      "question": "Who was the first Governor-General of independent India?",
      "options": [
        "C. Rajagopalachari",
        "Lord Mountbatten",
        "Rajendra Prasad",
        "Jawaharlal Nehru"
      ],
      "correct": 1,
      "explanation": "Lord Mountbatten served as the first Governor-General of independent India."
    },
    {
      "question": "Which latitude passes through the middle of India?",
      "options": [
        "Equator",
        "Tropic of Capricorn",
        "Tropic of Cancer",
        "Arctic Circle"
      ],
      "correct": 2,
      "explanation": "The Tropic of Cancer (23.5° N) passes almost halfway through India."
    },
    {
      "question": "The highest peace time gallantry award in India is:",
      "options": [
        "Param Vir Chakra",
        "Maha Vir Chakra",
        "Ashoka Chakra",
        "Kirti Chakra"
      ],
      "correct": 2,
      "explanation": "Ashoka Chakra is the highest peacetime military decoration."
    }
  ]
},\n{
  "id": "cds-gk-coaching-mock-2",
  "exam": "CDS",
  "subject": "General Knowledge",
  "title": "CDS GK Mock Test 2 (Coaching Replica)",
  "duration": 120,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 0.83,
    "incorrectMarks": -0.27,
    "examType": "CDS"
  },
  "questions": [
    {
      "question": "Who introduced the Permanent Settlement in Bengal?",
      "options": [
        "Lord Cornwallis",
        "Lord Wellesley",
        "Lord Hastings",
        "Lord Dalhousie"
      ],
      "correct": 0,
      "explanation": "The Permanent Settlement was introduced by Lord Cornwallis in 1793."
    },
    {
      "question": "Article 32 of the Indian Constitution deals with:",
      "options": [
        "Right to Equality",
        "Right to Freedom of Religion",
        "Right to Constitutional Remedies",
        "Right against Exploitation"
      ],
      "correct": 2,
      "explanation": "Article 32 provides the right to Constitutional remedies (issuing writs)."
    },
    {
      "question": "The Phillips Curve shows the relationship between:",
      "options": [
        "Inflation and Unemployment",
        "Tax rate and Tax revenue",
        "Economic growth and Inequality",
        "Money supply and Interest rate"
      ],
      "correct": 0,
      "explanation": "The Phillips curve illustrates an inverse relationship between inflation and unemployment."
    },
    {
      "question": "The headquarter of UNESCO is at:",
      "options": [
        "Rome",
        "Geneva",
        "New York",
        "Paris"
      ],
      "correct": 3,
      "explanation": "UNESCO is headquartered in Paris, France."
    },
    {
      "question": "Which of the following is not a greenhouse gas?",
      "options": [
        "Carbon Dioxide",
        "Methane",
        "Nitrous Oxide",
        "Nitrogen"
      ],
      "correct": 3,
      "explanation": "Nitrogen constitutes 78% of the atmosphere but is not a greenhouse gas."
    },
    {
      "question": "The Brahmo Samaj was founded by:",
      "options": [
        "Swami Vivekananda",
        "Raja Ram Mohan Roy",
        "Dayanand Saraswati",
        "Annie Besant"
      ],
      "correct": 1,
      "explanation": "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828."
    },
    {
      "question": "Which schedule of the Indian Constitution contains the division of powers between Union and States?",
      "options": [
        "5th",
        "6th",
        "7th",
        "8th"
      ],
      "correct": 2,
      "explanation": "The 7th Schedule contains the Union List, State List, and Concurrent List."
    },
    {
      "question": "A closed economy is an economy in which:",
      "options": [
        "Only export takes place",
        "Money supply is fully controlled",
        "Deficit financing takes place",
        "Neither export nor import takes place"
      ],
      "correct": 3,
      "explanation": "A closed economy is self-sufficient, meaning no imports are brought in and no exports are sent out."
    },
    {
      "question": "Which is the largest desert in the world?",
      "options": [
        "Sahara",
        "Arabian",
        "Gobi",
        "Antarctic Desert"
      ],
      "correct": 3,
      "explanation": "The Antarctic Desert is the largest cold desert in the world."
    },
    {
      "question": "Which river is known as the 'Sorrow of Bihar'?",
      "options": [
        "Ganga",
        "Kosi",
        "Son",
        "Gandak"
      ],
      "correct": 1,
      "explanation": "The Kosi River is known as the Sorrow of Bihar due to its frequent flooding."
    },
    {
      "question": "The Battle of Buxar was fought in:",
      "options": [
        "1757",
        "1764",
        "1761",
        "1773"
      ],
      "correct": 1,
      "explanation": "The Battle of Buxar was fought in 1764, establishing British control over Bengal."
    },
    {
      "question": "Panchayati Raj was first introduced in which state?",
      "options": [
        "Andhra Pradesh",
        "Rajasthan",
        "Bihar",
        "Gujarat"
      ],
      "correct": 1,
      "explanation": "Rajasthan was the first state to implement Panchayati Raj in Nagaur district (1959)."
    },
    {
      "question": "Repo rate is the rate at which:",
      "options": [
        "RBI lends to commercial banks",
        "Banks lend to RBI",
        "RBI lends to public",
        "Banks lend to public"
      ],
      "correct": 0,
      "explanation": "Repo rate is the rate at which the central bank (RBI) lends short-term money to commercial banks."
    },
    {
      "question": "Which article abolishes Untouchability?",
      "options": [
        "Article 14",
        "Article 15",
        "Article 16",
        "Article 17"
      ],
      "correct": 3,
      "explanation": "Article 17 of the Indian Constitution abolishes untouchability."
    },
    {
      "question": "Which planet has the maximum number of moons?",
      "options": [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
      ],
      "correct": 1,
      "explanation": "Saturn recently surpassed Jupiter as the planet with the most recognized moons."
    }
  ]
},\n{
  "id": "nda-gat-coaching-mock-3",
  "exam": "NDA",
  "subject": "General Ability Test",
  "title": "NDA GAT Mock Test 3 (Coaching Replica)",
  "duration": 150,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 4,
    "incorrectMarks": -1.33,
    "examType": "NDA"
  },
  "questions": [
    {
      "question": "Which of the following is true regarding Newton's 3th law equivalents? (Conceptual)",
      "options": [
        "Action reaction",
        "Inertia",
        "F=ma",
        "None"
      ],
      "correct": 1,
      "explanation": "Concept check on Newton's laws."
    },
    {
      "question": "The velocity of sound in vacuum is:",
      "options": [
        "330 m/s",
        "0 m/s",
        "3 * 10^8 m/s",
        "343 m/s"
      ],
      "correct": 1,
      "explanation": "Sound requires a medium to travel. In vacuum, its velocity is 0."
    },
    {
      "question": "What is the oxidation state of Oxygen in H2O2?",
      "options": [
        "-2",
        "-1",
        "+1",
        "+2"
      ],
      "correct": 1,
      "explanation": "In peroxides, the oxidation state of oxygen is -1."
    },
    {
      "question": "Which lens is used to correct Myopia?",
      "options": [
        "Convex",
        "Concave",
        "Cylindrical",
        "Bifocal"
      ],
      "correct": 1,
      "explanation": "Concave lens diverges light rays to form image on the retina for myopic eyes."
    },
    {
      "question": "Which gas is responsible for the Bhopal Gas Tragedy?",
      "options": [
        "Carbon monoxide",
        "Phosgene",
        "Methyl Isocyanate",
        "Mustard Gas"
      ],
      "correct": 2,
      "explanation": "Methyl Isocyanate (MIC) leaked from the Union Carbide plant in 1984."
    },
    {
      "question": "What is the powerhouse of the cell?",
      "options": [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Lysosome"
      ],
      "correct": 2,
      "explanation": "Mitochondria generate most of the cell's supply of ATP."
    },
    {
      "question": "Deficiency of Vitamin C causes:",
      "options": [
        "Beri-beri",
        "Scurvy",
        "Night blindness",
        "Rickets"
      ],
      "correct": 1,
      "explanation": "Scurvy is caused by a severe lack of vitamin C in the diet."
    },
    {
      "question": "The SI unit of Electrical Resistance is:",
      "options": [
        "Ampere",
        "Volt",
        "Ohm",
        "Watt"
      ],
      "correct": 2,
      "explanation": "The ohm is the SI derived unit of electrical resistance."
    },
    {
      "question": "Which planet is known as the Morning Star?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Mercury"
      ],
      "correct": 1,
      "explanation": "Venus is often called the morning or evening star because it's the brightest planet."
    },
    {
      "question": "The headquarters of the World Health Organization is located in:",
      "options": [
        "New York",
        "Geneva",
        "Paris",
        "London"
      ],
      "correct": 1,
      "explanation": "WHO is headquartered in Geneva, Switzerland."
    },
    {
      "question": "Which Indian state has the longest coastline?",
      "options": [
        "Maharashtra",
        "Gujarat",
        "Andhra Pradesh",
        "Tamil Nadu"
      ],
      "correct": 1,
      "explanation": "Gujarat has the longest mainland coastline in India."
    },
    {
      "question": "The fundamental rights in the Indian Constitution are derived from the Constitution of:",
      "options": [
        "UK",
        "USA",
        "USSR",
        "Ireland"
      ],
      "correct": 1,
      "explanation": "Fundamental rights are inspired by the US Bill of Rights."
    },
    {
      "question": "Who was the first Governor-General of independent India?",
      "options": [
        "C. Rajagopalachari",
        "Lord Mountbatten",
        "Rajendra Prasad",
        "Jawaharlal Nehru"
      ],
      "correct": 1,
      "explanation": "Lord Mountbatten served as the first Governor-General of independent India."
    },
    {
      "question": "Which latitude passes through the middle of India?",
      "options": [
        "Equator",
        "Tropic of Capricorn",
        "Tropic of Cancer",
        "Arctic Circle"
      ],
      "correct": 2,
      "explanation": "The Tropic of Cancer (23.5° N) passes almost halfway through India."
    },
    {
      "question": "The highest peace time gallantry award in India is:",
      "options": [
        "Param Vir Chakra",
        "Maha Vir Chakra",
        "Ashoka Chakra",
        "Kirti Chakra"
      ],
      "correct": 2,
      "explanation": "Ashoka Chakra is the highest peacetime military decoration."
    }
  ]
},\n{
  "id": "cds-gk-coaching-mock-3",
  "exam": "CDS",
  "subject": "General Knowledge",
  "title": "CDS GK Mock Test 3 (Coaching Replica)",
  "duration": 120,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 0.83,
    "incorrectMarks": -0.27,
    "examType": "CDS"
  },
  "questions": [
    {
      "question": "Who introduced the Permanent Settlement in Bengal?",
      "options": [
        "Lord Cornwallis",
        "Lord Wellesley",
        "Lord Hastings",
        "Lord Dalhousie"
      ],
      "correct": 0,
      "explanation": "The Permanent Settlement was introduced by Lord Cornwallis in 1793."
    },
    {
      "question": "Article 32 of the Indian Constitution deals with:",
      "options": [
        "Right to Equality",
        "Right to Freedom of Religion",
        "Right to Constitutional Remedies",
        "Right against Exploitation"
      ],
      "correct": 2,
      "explanation": "Article 32 provides the right to Constitutional remedies (issuing writs)."
    },
    {
      "question": "The Phillips Curve shows the relationship between:",
      "options": [
        "Inflation and Unemployment",
        "Tax rate and Tax revenue",
        "Economic growth and Inequality",
        "Money supply and Interest rate"
      ],
      "correct": 0,
      "explanation": "The Phillips curve illustrates an inverse relationship between inflation and unemployment."
    },
    {
      "question": "The headquarter of UNESCO is at:",
      "options": [
        "Rome",
        "Geneva",
        "New York",
        "Paris"
      ],
      "correct": 3,
      "explanation": "UNESCO is headquartered in Paris, France."
    },
    {
      "question": "Which of the following is not a greenhouse gas?",
      "options": [
        "Carbon Dioxide",
        "Methane",
        "Nitrous Oxide",
        "Nitrogen"
      ],
      "correct": 3,
      "explanation": "Nitrogen constitutes 78% of the atmosphere but is not a greenhouse gas."
    },
    {
      "question": "The Brahmo Samaj was founded by:",
      "options": [
        "Swami Vivekananda",
        "Raja Ram Mohan Roy",
        "Dayanand Saraswati",
        "Annie Besant"
      ],
      "correct": 1,
      "explanation": "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828."
    },
    {
      "question": "Which schedule of the Indian Constitution contains the division of powers between Union and States?",
      "options": [
        "5th",
        "6th",
        "7th",
        "8th"
      ],
      "correct": 2,
      "explanation": "The 7th Schedule contains the Union List, State List, and Concurrent List."
    },
    {
      "question": "A closed economy is an economy in which:",
      "options": [
        "Only export takes place",
        "Money supply is fully controlled",
        "Deficit financing takes place",
        "Neither export nor import takes place"
      ],
      "correct": 3,
      "explanation": "A closed economy is self-sufficient, meaning no imports are brought in and no exports are sent out."
    },
    {
      "question": "Which is the largest desert in the world?",
      "options": [
        "Sahara",
        "Arabian",
        "Gobi",
        "Antarctic Desert"
      ],
      "correct": 3,
      "explanation": "The Antarctic Desert is the largest cold desert in the world."
    },
    {
      "question": "Which river is known as the 'Sorrow of Bihar'?",
      "options": [
        "Ganga",
        "Kosi",
        "Son",
        "Gandak"
      ],
      "correct": 1,
      "explanation": "The Kosi River is known as the Sorrow of Bihar due to its frequent flooding."
    },
    {
      "question": "The Battle of Buxar was fought in:",
      "options": [
        "1757",
        "1764",
        "1761",
        "1773"
      ],
      "correct": 1,
      "explanation": "The Battle of Buxar was fought in 1764, establishing British control over Bengal."
    },
    {
      "question": "Panchayati Raj was first introduced in which state?",
      "options": [
        "Andhra Pradesh",
        "Rajasthan",
        "Bihar",
        "Gujarat"
      ],
      "correct": 1,
      "explanation": "Rajasthan was the first state to implement Panchayati Raj in Nagaur district (1959)."
    },
    {
      "question": "Repo rate is the rate at which:",
      "options": [
        "RBI lends to commercial banks",
        "Banks lend to RBI",
        "RBI lends to public",
        "Banks lend to public"
      ],
      "correct": 0,
      "explanation": "Repo rate is the rate at which the central bank (RBI) lends short-term money to commercial banks."
    },
    {
      "question": "Which article abolishes Untouchability?",
      "options": [
        "Article 14",
        "Article 15",
        "Article 16",
        "Article 17"
      ],
      "correct": 3,
      "explanation": "Article 17 of the Indian Constitution abolishes untouchability."
    },
    {
      "question": "Which planet has the maximum number of moons?",
      "options": [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
      ],
      "correct": 1,
      "explanation": "Saturn recently surpassed Jupiter as the planet with the most recognized moons."
    }
  ]
},\n{
  "id": "nda-gat-coaching-mock-4",
  "exam": "NDA",
  "subject": "General Ability Test",
  "title": "NDA GAT Mock Test 4 (Coaching Replica)",
  "duration": 150,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 4,
    "incorrectMarks": -1.33,
    "examType": "NDA"
  },
  "questions": [
    {
      "question": "Which of the following is true regarding Newton's 4th law equivalents? (Conceptual)",
      "options": [
        "Action reaction",
        "Inertia",
        "F=ma",
        "None"
      ],
      "correct": 1,
      "explanation": "Concept check on Newton's laws."
    },
    {
      "question": "The velocity of sound in vacuum is:",
      "options": [
        "330 m/s",
        "0 m/s",
        "3 * 10^8 m/s",
        "343 m/s"
      ],
      "correct": 1,
      "explanation": "Sound requires a medium to travel. In vacuum, its velocity is 0."
    },
    {
      "question": "What is the oxidation state of Oxygen in H2O2?",
      "options": [
        "-2",
        "-1",
        "+1",
        "+2"
      ],
      "correct": 1,
      "explanation": "In peroxides, the oxidation state of oxygen is -1."
    },
    {
      "question": "Which lens is used to correct Myopia?",
      "options": [
        "Convex",
        "Concave",
        "Cylindrical",
        "Bifocal"
      ],
      "correct": 1,
      "explanation": "Concave lens diverges light rays to form image on the retina for myopic eyes."
    },
    {
      "question": "Which gas is responsible for the Bhopal Gas Tragedy?",
      "options": [
        "Carbon monoxide",
        "Phosgene",
        "Methyl Isocyanate",
        "Mustard Gas"
      ],
      "correct": 2,
      "explanation": "Methyl Isocyanate (MIC) leaked from the Union Carbide plant in 1984."
    },
    {
      "question": "What is the powerhouse of the cell?",
      "options": [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Lysosome"
      ],
      "correct": 2,
      "explanation": "Mitochondria generate most of the cell's supply of ATP."
    },
    {
      "question": "Deficiency of Vitamin C causes:",
      "options": [
        "Beri-beri",
        "Scurvy",
        "Night blindness",
        "Rickets"
      ],
      "correct": 1,
      "explanation": "Scurvy is caused by a severe lack of vitamin C in the diet."
    },
    {
      "question": "The SI unit of Electrical Resistance is:",
      "options": [
        "Ampere",
        "Volt",
        "Ohm",
        "Watt"
      ],
      "correct": 2,
      "explanation": "The ohm is the SI derived unit of electrical resistance."
    },
    {
      "question": "Which planet is known as the Morning Star?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Mercury"
      ],
      "correct": 1,
      "explanation": "Venus is often called the morning or evening star because it's the brightest planet."
    },
    {
      "question": "The headquarters of the World Health Organization is located in:",
      "options": [
        "New York",
        "Geneva",
        "Paris",
        "London"
      ],
      "correct": 1,
      "explanation": "WHO is headquartered in Geneva, Switzerland."
    },
    {
      "question": "Which Indian state has the longest coastline?",
      "options": [
        "Maharashtra",
        "Gujarat",
        "Andhra Pradesh",
        "Tamil Nadu"
      ],
      "correct": 1,
      "explanation": "Gujarat has the longest mainland coastline in India."
    },
    {
      "question": "The fundamental rights in the Indian Constitution are derived from the Constitution of:",
      "options": [
        "UK",
        "USA",
        "USSR",
        "Ireland"
      ],
      "correct": 1,
      "explanation": "Fundamental rights are inspired by the US Bill of Rights."
    },
    {
      "question": "Who was the first Governor-General of independent India?",
      "options": [
        "C. Rajagopalachari",
        "Lord Mountbatten",
        "Rajendra Prasad",
        "Jawaharlal Nehru"
      ],
      "correct": 1,
      "explanation": "Lord Mountbatten served as the first Governor-General of independent India."
    },
    {
      "question": "Which latitude passes through the middle of India?",
      "options": [
        "Equator",
        "Tropic of Capricorn",
        "Tropic of Cancer",
        "Arctic Circle"
      ],
      "correct": 2,
      "explanation": "The Tropic of Cancer (23.5° N) passes almost halfway through India."
    },
    {
      "question": "The highest peace time gallantry award in India is:",
      "options": [
        "Param Vir Chakra",
        "Maha Vir Chakra",
        "Ashoka Chakra",
        "Kirti Chakra"
      ],
      "correct": 2,
      "explanation": "Ashoka Chakra is the highest peacetime military decoration."
    }
  ]
},\n{
  "id": "cds-gk-coaching-mock-4",
  "exam": "CDS",
  "subject": "General Knowledge",
  "title": "CDS GK Mock Test 4 (Coaching Replica)",
  "duration": 120,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 0.83,
    "incorrectMarks": -0.27,
    "examType": "CDS"
  },
  "questions": [
    {
      "question": "Who introduced the Permanent Settlement in Bengal?",
      "options": [
        "Lord Cornwallis",
        "Lord Wellesley",
        "Lord Hastings",
        "Lord Dalhousie"
      ],
      "correct": 0,
      "explanation": "The Permanent Settlement was introduced by Lord Cornwallis in 1793."
    },
    {
      "question": "Article 32 of the Indian Constitution deals with:",
      "options": [
        "Right to Equality",
        "Right to Freedom of Religion",
        "Right to Constitutional Remedies",
        "Right against Exploitation"
      ],
      "correct": 2,
      "explanation": "Article 32 provides the right to Constitutional remedies (issuing writs)."
    },
    {
      "question": "The Phillips Curve shows the relationship between:",
      "options": [
        "Inflation and Unemployment",
        "Tax rate and Tax revenue",
        "Economic growth and Inequality",
        "Money supply and Interest rate"
      ],
      "correct": 0,
      "explanation": "The Phillips curve illustrates an inverse relationship between inflation and unemployment."
    },
    {
      "question": "The headquarter of UNESCO is at:",
      "options": [
        "Rome",
        "Geneva",
        "New York",
        "Paris"
      ],
      "correct": 3,
      "explanation": "UNESCO is headquartered in Paris, France."
    },
    {
      "question": "Which of the following is not a greenhouse gas?",
      "options": [
        "Carbon Dioxide",
        "Methane",
        "Nitrous Oxide",
        "Nitrogen"
      ],
      "correct": 3,
      "explanation": "Nitrogen constitutes 78% of the atmosphere but is not a greenhouse gas."
    },
    {
      "question": "The Brahmo Samaj was founded by:",
      "options": [
        "Swami Vivekananda",
        "Raja Ram Mohan Roy",
        "Dayanand Saraswati",
        "Annie Besant"
      ],
      "correct": 1,
      "explanation": "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828."
    },
    {
      "question": "Which schedule of the Indian Constitution contains the division of powers between Union and States?",
      "options": [
        "5th",
        "6th",
        "7th",
        "8th"
      ],
      "correct": 2,
      "explanation": "The 7th Schedule contains the Union List, State List, and Concurrent List."
    },
    {
      "question": "A closed economy is an economy in which:",
      "options": [
        "Only export takes place",
        "Money supply is fully controlled",
        "Deficit financing takes place",
        "Neither export nor import takes place"
      ],
      "correct": 3,
      "explanation": "A closed economy is self-sufficient, meaning no imports are brought in and no exports are sent out."
    },
    {
      "question": "Which is the largest desert in the world?",
      "options": [
        "Sahara",
        "Arabian",
        "Gobi",
        "Antarctic Desert"
      ],
      "correct": 3,
      "explanation": "The Antarctic Desert is the largest cold desert in the world."
    },
    {
      "question": "Which river is known as the 'Sorrow of Bihar'?",
      "options": [
        "Ganga",
        "Kosi",
        "Son",
        "Gandak"
      ],
      "correct": 1,
      "explanation": "The Kosi River is known as the Sorrow of Bihar due to its frequent flooding."
    },
    {
      "question": "The Battle of Buxar was fought in:",
      "options": [
        "1757",
        "1764",
        "1761",
        "1773"
      ],
      "correct": 1,
      "explanation": "The Battle of Buxar was fought in 1764, establishing British control over Bengal."
    },
    {
      "question": "Panchayati Raj was first introduced in which state?",
      "options": [
        "Andhra Pradesh",
        "Rajasthan",
        "Bihar",
        "Gujarat"
      ],
      "correct": 1,
      "explanation": "Rajasthan was the first state to implement Panchayati Raj in Nagaur district (1959)."
    },
    {
      "question": "Repo rate is the rate at which:",
      "options": [
        "RBI lends to commercial banks",
        "Banks lend to RBI",
        "RBI lends to public",
        "Banks lend to public"
      ],
      "correct": 0,
      "explanation": "Repo rate is the rate at which the central bank (RBI) lends short-term money to commercial banks."
    },
    {
      "question": "Which article abolishes Untouchability?",
      "options": [
        "Article 14",
        "Article 15",
        "Article 16",
        "Article 17"
      ],
      "correct": 3,
      "explanation": "Article 17 of the Indian Constitution abolishes untouchability."
    },
    {
      "question": "Which planet has the maximum number of moons?",
      "options": [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
      ],
      "correct": 1,
      "explanation": "Saturn recently surpassed Jupiter as the planet with the most recognized moons."
    }
  ]
},\n{
  "id": "nda-gat-coaching-mock-5",
  "exam": "NDA",
  "subject": "General Ability Test",
  "title": "NDA GAT Mock Test 5 (Coaching Replica)",
  "duration": 150,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 4,
    "incorrectMarks": -1.33,
    "examType": "NDA"
  },
  "questions": [
    {
      "question": "Which of the following is true regarding Newton's 5th law equivalents? (Conceptual)",
      "options": [
        "Action reaction",
        "Inertia",
        "F=ma",
        "None"
      ],
      "correct": 1,
      "explanation": "Concept check on Newton's laws."
    },
    {
      "question": "The velocity of sound in vacuum is:",
      "options": [
        "330 m/s",
        "0 m/s",
        "3 * 10^8 m/s",
        "343 m/s"
      ],
      "correct": 1,
      "explanation": "Sound requires a medium to travel. In vacuum, its velocity is 0."
    },
    {
      "question": "What is the oxidation state of Oxygen in H2O2?",
      "options": [
        "-2",
        "-1",
        "+1",
        "+2"
      ],
      "correct": 1,
      "explanation": "In peroxides, the oxidation state of oxygen is -1."
    },
    {
      "question": "Which lens is used to correct Myopia?",
      "options": [
        "Convex",
        "Concave",
        "Cylindrical",
        "Bifocal"
      ],
      "correct": 1,
      "explanation": "Concave lens diverges light rays to form image on the retina for myopic eyes."
    },
    {
      "question": "Which gas is responsible for the Bhopal Gas Tragedy?",
      "options": [
        "Carbon monoxide",
        "Phosgene",
        "Methyl Isocyanate",
        "Mustard Gas"
      ],
      "correct": 2,
      "explanation": "Methyl Isocyanate (MIC) leaked from the Union Carbide plant in 1984."
    },
    {
      "question": "What is the powerhouse of the cell?",
      "options": [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Lysosome"
      ],
      "correct": 2,
      "explanation": "Mitochondria generate most of the cell's supply of ATP."
    },
    {
      "question": "Deficiency of Vitamin C causes:",
      "options": [
        "Beri-beri",
        "Scurvy",
        "Night blindness",
        "Rickets"
      ],
      "correct": 1,
      "explanation": "Scurvy is caused by a severe lack of vitamin C in the diet."
    },
    {
      "question": "The SI unit of Electrical Resistance is:",
      "options": [
        "Ampere",
        "Volt",
        "Ohm",
        "Watt"
      ],
      "correct": 2,
      "explanation": "The ohm is the SI derived unit of electrical resistance."
    },
    {
      "question": "Which planet is known as the Morning Star?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Mercury"
      ],
      "correct": 1,
      "explanation": "Venus is often called the morning or evening star because it's the brightest planet."
    },
    {
      "question": "The headquarters of the World Health Organization is located in:",
      "options": [
        "New York",
        "Geneva",
        "Paris",
        "London"
      ],
      "correct": 1,
      "explanation": "WHO is headquartered in Geneva, Switzerland."
    },
    {
      "question": "Which Indian state has the longest coastline?",
      "options": [
        "Maharashtra",
        "Gujarat",
        "Andhra Pradesh",
        "Tamil Nadu"
      ],
      "correct": 1,
      "explanation": "Gujarat has the longest mainland coastline in India."
    },
    {
      "question": "The fundamental rights in the Indian Constitution are derived from the Constitution of:",
      "options": [
        "UK",
        "USA",
        "USSR",
        "Ireland"
      ],
      "correct": 1,
      "explanation": "Fundamental rights are inspired by the US Bill of Rights."
    },
    {
      "question": "Who was the first Governor-General of independent India?",
      "options": [
        "C. Rajagopalachari",
        "Lord Mountbatten",
        "Rajendra Prasad",
        "Jawaharlal Nehru"
      ],
      "correct": 1,
      "explanation": "Lord Mountbatten served as the first Governor-General of independent India."
    },
    {
      "question": "Which latitude passes through the middle of India?",
      "options": [
        "Equator",
        "Tropic of Capricorn",
        "Tropic of Cancer",
        "Arctic Circle"
      ],
      "correct": 2,
      "explanation": "The Tropic of Cancer (23.5° N) passes almost halfway through India."
    },
    {
      "question": "The highest peace time gallantry award in India is:",
      "options": [
        "Param Vir Chakra",
        "Maha Vir Chakra",
        "Ashoka Chakra",
        "Kirti Chakra"
      ],
      "correct": 2,
      "explanation": "Ashoka Chakra is the highest peacetime military decoration."
    }
  ]
},\n{
  "id": "cds-gk-coaching-mock-5",
  "exam": "CDS",
  "subject": "General Knowledge",
  "title": "CDS GK Mock Test 5 (Coaching Replica)",
  "duration": 120,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 0.83,
    "incorrectMarks": -0.27,
    "examType": "CDS"
  },
  "questions": [
    {
      "question": "Who introduced the Permanent Settlement in Bengal?",
      "options": [
        "Lord Cornwallis",
        "Lord Wellesley",
        "Lord Hastings",
        "Lord Dalhousie"
      ],
      "correct": 0,
      "explanation": "The Permanent Settlement was introduced by Lord Cornwallis in 1793."
    },
    {
      "question": "Article 32 of the Indian Constitution deals with:",
      "options": [
        "Right to Equality",
        "Right to Freedom of Religion",
        "Right to Constitutional Remedies",
        "Right against Exploitation"
      ],
      "correct": 2,
      "explanation": "Article 32 provides the right to Constitutional remedies (issuing writs)."
    },
    {
      "question": "The Phillips Curve shows the relationship between:",
      "options": [
        "Inflation and Unemployment",
        "Tax rate and Tax revenue",
        "Economic growth and Inequality",
        "Money supply and Interest rate"
      ],
      "correct": 0,
      "explanation": "The Phillips curve illustrates an inverse relationship between inflation and unemployment."
    },
    {
      "question": "The headquarter of UNESCO is at:",
      "options": [
        "Rome",
        "Geneva",
        "New York",
        "Paris"
      ],
      "correct": 3,
      "explanation": "UNESCO is headquartered in Paris, France."
    },
    {
      "question": "Which of the following is not a greenhouse gas?",
      "options": [
        "Carbon Dioxide",
        "Methane",
        "Nitrous Oxide",
        "Nitrogen"
      ],
      "correct": 3,
      "explanation": "Nitrogen constitutes 78% of the atmosphere but is not a greenhouse gas."
    },
    {
      "question": "The Brahmo Samaj was founded by:",
      "options": [
        "Swami Vivekananda",
        "Raja Ram Mohan Roy",
        "Dayanand Saraswati",
        "Annie Besant"
      ],
      "correct": 1,
      "explanation": "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828."
    },
    {
      "question": "Which schedule of the Indian Constitution contains the division of powers between Union and States?",
      "options": [
        "5th",
        "6th",
        "7th",
        "8th"
      ],
      "correct": 2,
      "explanation": "The 7th Schedule contains the Union List, State List, and Concurrent List."
    },
    {
      "question": "A closed economy is an economy in which:",
      "options": [
        "Only export takes place",
        "Money supply is fully controlled",
        "Deficit financing takes place",
        "Neither export nor import takes place"
      ],
      "correct": 3,
      "explanation": "A closed economy is self-sufficient, meaning no imports are brought in and no exports are sent out."
    },
    {
      "question": "Which is the largest desert in the world?",
      "options": [
        "Sahara",
        "Arabian",
        "Gobi",
        "Antarctic Desert"
      ],
      "correct": 3,
      "explanation": "The Antarctic Desert is the largest cold desert in the world."
    },
    {
      "question": "Which river is known as the 'Sorrow of Bihar'?",
      "options": [
        "Ganga",
        "Kosi",
        "Son",
        "Gandak"
      ],
      "correct": 1,
      "explanation": "The Kosi River is known as the Sorrow of Bihar due to its frequent flooding."
    },
    {
      "question": "The Battle of Buxar was fought in:",
      "options": [
        "1757",
        "1764",
        "1761",
        "1773"
      ],
      "correct": 1,
      "explanation": "The Battle of Buxar was fought in 1764, establishing British control over Bengal."
    },
    {
      "question": "Panchayati Raj was first introduced in which state?",
      "options": [
        "Andhra Pradesh",
        "Rajasthan",
        "Bihar",
        "Gujarat"
      ],
      "correct": 1,
      "explanation": "Rajasthan was the first state to implement Panchayati Raj in Nagaur district (1959)."
    },
    {
      "question": "Repo rate is the rate at which:",
      "options": [
        "RBI lends to commercial banks",
        "Banks lend to RBI",
        "RBI lends to public",
        "Banks lend to public"
      ],
      "correct": 0,
      "explanation": "Repo rate is the rate at which the central bank (RBI) lends short-term money to commercial banks."
    },
    {
      "question": "Which article abolishes Untouchability?",
      "options": [
        "Article 14",
        "Article 15",
        "Article 16",
        "Article 17"
      ],
      "correct": 3,
      "explanation": "Article 17 of the Indian Constitution abolishes untouchability."
    },
    {
      "question": "Which planet has the maximum number of moons?",
      "options": [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
      ],
      "correct": 1,
      "explanation": "Saturn recently surpassed Jupiter as the planet with the most recognized moons."
    }
  ]
},\n{
  "id": "nda-gat-coaching-mock-6",
  "exam": "NDA",
  "subject": "General Ability Test",
  "title": "NDA GAT Mock Test 6 (Coaching Replica)",
  "duration": 150,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 4,
    "incorrectMarks": -1.33,
    "examType": "NDA"
  },
  "questions": [
    {
      "question": "Which of the following is true regarding Newton's 6th law equivalents? (Conceptual)",
      "options": [
        "Action reaction",
        "Inertia",
        "F=ma",
        "None"
      ],
      "correct": 1,
      "explanation": "Concept check on Newton's laws."
    },
    {
      "question": "The velocity of sound in vacuum is:",
      "options": [
        "330 m/s",
        "0 m/s",
        "3 * 10^8 m/s",
        "343 m/s"
      ],
      "correct": 1,
      "explanation": "Sound requires a medium to travel. In vacuum, its velocity is 0."
    },
    {
      "question": "What is the oxidation state of Oxygen in H2O2?",
      "options": [
        "-2",
        "-1",
        "+1",
        "+2"
      ],
      "correct": 1,
      "explanation": "In peroxides, the oxidation state of oxygen is -1."
    },
    {
      "question": "Which lens is used to correct Myopia?",
      "options": [
        "Convex",
        "Concave",
        "Cylindrical",
        "Bifocal"
      ],
      "correct": 1,
      "explanation": "Concave lens diverges light rays to form image on the retina for myopic eyes."
    },
    {
      "question": "Which gas is responsible for the Bhopal Gas Tragedy?",
      "options": [
        "Carbon monoxide",
        "Phosgene",
        "Methyl Isocyanate",
        "Mustard Gas"
      ],
      "correct": 2,
      "explanation": "Methyl Isocyanate (MIC) leaked from the Union Carbide plant in 1984."
    },
    {
      "question": "What is the powerhouse of the cell?",
      "options": [
        "Nucleus",
        "Ribosome",
        "Mitochondria",
        "Lysosome"
      ],
      "correct": 2,
      "explanation": "Mitochondria generate most of the cell's supply of ATP."
    },
    {
      "question": "Deficiency of Vitamin C causes:",
      "options": [
        "Beri-beri",
        "Scurvy",
        "Night blindness",
        "Rickets"
      ],
      "correct": 1,
      "explanation": "Scurvy is caused by a severe lack of vitamin C in the diet."
    },
    {
      "question": "The SI unit of Electrical Resistance is:",
      "options": [
        "Ampere",
        "Volt",
        "Ohm",
        "Watt"
      ],
      "correct": 2,
      "explanation": "The ohm is the SI derived unit of electrical resistance."
    },
    {
      "question": "Which planet is known as the Morning Star?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Mercury"
      ],
      "correct": 1,
      "explanation": "Venus is often called the morning or evening star because it's the brightest planet."
    },
    {
      "question": "The headquarters of the World Health Organization is located in:",
      "options": [
        "New York",
        "Geneva",
        "Paris",
        "London"
      ],
      "correct": 1,
      "explanation": "WHO is headquartered in Geneva, Switzerland."
    },
    {
      "question": "Which Indian state has the longest coastline?",
      "options": [
        "Maharashtra",
        "Gujarat",
        "Andhra Pradesh",
        "Tamil Nadu"
      ],
      "correct": 1,
      "explanation": "Gujarat has the longest mainland coastline in India."
    },
    {
      "question": "The fundamental rights in the Indian Constitution are derived from the Constitution of:",
      "options": [
        "UK",
        "USA",
        "USSR",
        "Ireland"
      ],
      "correct": 1,
      "explanation": "Fundamental rights are inspired by the US Bill of Rights."
    },
    {
      "question": "Who was the first Governor-General of independent India?",
      "options": [
        "C. Rajagopalachari",
        "Lord Mountbatten",
        "Rajendra Prasad",
        "Jawaharlal Nehru"
      ],
      "correct": 1,
      "explanation": "Lord Mountbatten served as the first Governor-General of independent India."
    },
    {
      "question": "Which latitude passes through the middle of India?",
      "options": [
        "Equator",
        "Tropic of Capricorn",
        "Tropic of Cancer",
        "Arctic Circle"
      ],
      "correct": 2,
      "explanation": "The Tropic of Cancer (23.5° N) passes almost halfway through India."
    },
    {
      "question": "The highest peace time gallantry award in India is:",
      "options": [
        "Param Vir Chakra",
        "Maha Vir Chakra",
        "Ashoka Chakra",
        "Kirti Chakra"
      ],
      "correct": 2,
      "explanation": "Ashoka Chakra is the highest peacetime military decoration."
    }
  ]
},\n{
  "id": "cds-gk-coaching-mock-6",
  "exam": "CDS",
  "subject": "General Knowledge",
  "title": "CDS GK Mock Test 6 (Coaching Replica)",
  "duration": 120,
  "questionsCount": 15,
  "rules": {
    "correctMarks": 0.83,
    "incorrectMarks": -0.27,
    "examType": "CDS"
  },
  "questions": [
    {
      "question": "Who introduced the Permanent Settlement in Bengal?",
      "options": [
        "Lord Cornwallis",
        "Lord Wellesley",
        "Lord Hastings",
        "Lord Dalhousie"
      ],
      "correct": 0,
      "explanation": "The Permanent Settlement was introduced by Lord Cornwallis in 1793."
    },
    {
      "question": "Article 32 of the Indian Constitution deals with:",
      "options": [
        "Right to Equality",
        "Right to Freedom of Religion",
        "Right to Constitutional Remedies",
        "Right against Exploitation"
      ],
      "correct": 2,
      "explanation": "Article 32 provides the right to Constitutional remedies (issuing writs)."
    },
    {
      "question": "The Phillips Curve shows the relationship between:",
      "options": [
        "Inflation and Unemployment",
        "Tax rate and Tax revenue",
        "Economic growth and Inequality",
        "Money supply and Interest rate"
      ],
      "correct": 0,
      "explanation": "The Phillips curve illustrates an inverse relationship between inflation and unemployment."
    },
    {
      "question": "The headquarter of UNESCO is at:",
      "options": [
        "Rome",
        "Geneva",
        "New York",
        "Paris"
      ],
      "correct": 3,
      "explanation": "UNESCO is headquartered in Paris, France."
    },
    {
      "question": "Which of the following is not a greenhouse gas?",
      "options": [
        "Carbon Dioxide",
        "Methane",
        "Nitrous Oxide",
        "Nitrogen"
      ],
      "correct": 3,
      "explanation": "Nitrogen constitutes 78% of the atmosphere but is not a greenhouse gas."
    },
    {
      "question": "The Brahmo Samaj was founded by:",
      "options": [
        "Swami Vivekananda",
        "Raja Ram Mohan Roy",
        "Dayanand Saraswati",
        "Annie Besant"
      ],
      "correct": 1,
      "explanation": "Raja Ram Mohan Roy founded the Brahmo Samaj in 1828."
    },
    {
      "question": "Which schedule of the Indian Constitution contains the division of powers between Union and States?",
      "options": [
        "5th",
        "6th",
        "7th",
        "8th"
      ],
      "correct": 2,
      "explanation": "The 7th Schedule contains the Union List, State List, and Concurrent List."
    },
    {
      "question": "A closed economy is an economy in which:",
      "options": [
        "Only export takes place",
        "Money supply is fully controlled",
        "Deficit financing takes place",
        "Neither export nor import takes place"
      ],
      "correct": 3,
      "explanation": "A closed economy is self-sufficient, meaning no imports are brought in and no exports are sent out."
    },
    {
      "question": "Which is the largest desert in the world?",
      "options": [
        "Sahara",
        "Arabian",
        "Gobi",
        "Antarctic Desert"
      ],
      "correct": 3,
      "explanation": "The Antarctic Desert is the largest cold desert in the world."
    },
    {
      "question": "Which river is known as the 'Sorrow of Bihar'?",
      "options": [
        "Ganga",
        "Kosi",
        "Son",
        "Gandak"
      ],
      "correct": 1,
      "explanation": "The Kosi River is known as the Sorrow of Bihar due to its frequent flooding."
    },
    {
      "question": "The Battle of Buxar was fought in:",
      "options": [
        "1757",
        "1764",
        "1761",
        "1773"
      ],
      "correct": 1,
      "explanation": "The Battle of Buxar was fought in 1764, establishing British control over Bengal."
    },
    {
      "question": "Panchayati Raj was first introduced in which state?",
      "options": [
        "Andhra Pradesh",
        "Rajasthan",
        "Bihar",
        "Gujarat"
      ],
      "correct": 1,
      "explanation": "Rajasthan was the first state to implement Panchayati Raj in Nagaur district (1959)."
    },
    {
      "question": "Repo rate is the rate at which:",
      "options": [
        "RBI lends to commercial banks",
        "Banks lend to RBI",
        "RBI lends to public",
        "Banks lend to public"
      ],
      "correct": 0,
      "explanation": "Repo rate is the rate at which the central bank (RBI) lends short-term money to commercial banks."
    },
    {
      "question": "Which article abolishes Untouchability?",
      "options": [
        "Article 14",
        "Article 15",
        "Article 16",
        "Article 17"
      ],
      "correct": 3,
      "explanation": "Article 17 of the Indian Constitution abolishes untouchability."
    },
    {
      "question": "Which planet has the maximum number of moons?",
      "options": [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
      ],
      "correct": 1,
      "explanation": "Saturn recently surpassed Jupiter as the planet with the most recognized moons."
    }
  ]
}\nThird Proportional = b²/a`,
            mindmap: {
              root: "Ratios & Percent",
              branches: [
                {
                  title: "Proportions",
                  subnodes: ["Extremes = Means product", "Mean: x = √(ab)", "Third: x = b²/a"]
                },
                {
                  title: "Percentages",
                  subnodes: ["Fraction to % (x100)", "Change % = delta/original"]
                },
                {
                  title: "Profit & Loss",
                  subnodes: ["Gain = SP - CP", "Loss = CP - SP", "Percentage based on CP"]
                },
                {
                  title: "Discounts",
                  subnodes: ["Discount = MP - SP", "Discount % based on MP"]
                }
              ]
            }
          }
        ]
      }
    ]
  }
};

// ==========================================
// 2. CURRENT AFFAIRS (CA) DATABASE
// ==========================================
let CURRENT_AFFAIRS_DB = {
  "January 2026": [
    {
      id: "jan-1",
      topic: "Joint Exercises",
      text: "The joint military exercise <strong>'Desert Cyclone 2026'</strong> between the <strong>Indian Army</strong> and the <strong>UAE Land Forces</strong> was conducted in Rajasthan. The exercise focused on enhancing interoperability in sub-conventional operations under UN mandate.",
      details: {
        winner: "Indian Army & UAE Land Forces",
        award: "Exercise Desert Cyclone 2026",
        nationality: "India & UAE (Held in Rajasthan)",
        summary: "A 14-day joint exercise to share best practices in urban warfare, desert operations, and counter-insurgency tactics under a UN mandate."
      },
      mcq: {
        question: "Joint Military Exercise 'Desert Cyclone' is conducted between India and which other country?",
        options: ["Oman", "Saudi Arabia", "UAE", "Egypt"],
        correct: 2,
        explanation: "Desert Cyclone is an annual joint military exercise between India and the United Arab Emirates (UAE). The 2026 iteration was held in the deserts of Rajasthan."
      }
    },
    {
      id: "jan-2",
      topic: "Naval Inductions",
      text: "Indian Navy inducted its first indigenous medium-altitude long-endurance (MALE) drone, the <strong>Drishti 10 Starliner</strong> UAV, manufactured by Adani Defence and Aerospace, designed to bolster maritime surveillance capabilities.",
      details: {
        winner: "Indian Navy & Adani Defence",
        award: "Drishti 10 Starliner MALE UAV",
        nationality: "Indian (Indigenously Manufactured)",
        summary: "First indigenous Medium Altitude Long Endurance drone with 36 hours endurance and 450 kg payload capacity, designed for intelligence and reconnaissance."
      },
      mcq: {
        question: "Which Indian aerospace/defence firm manufactured the Drishti 10 Starliner UAV inducted by the Navy?",
        options: ["TATA Advanced Systems", "HAL", "DRDO", "Adani Defence"],
        correct: 3,
        explanation: "Drishti 10 Starliner is an indigenous MALE drone manufactured by Adani Defence & Aerospace in collaboration with technical partners to enhance intelligence, surveillance, and reconnaissance."
      }
    },
    {
      id: "jan-3",
      topic: "National Security",
      text: "Government appointed a new Vice Chief of the Army Staff, restructuring crucial tactical divisions at the Integrated Defence Staff (IDS) to meet hybrid warfare challenges.",
      details: {
        winner: "Lieutenant General Upendra Dwivedi",
        award: "Appointment as Vice Chief of Army Staff",
        nationality: "Indian",
        summary: "Restructuring of tactical commands to address modern cyber warfare, artificial intelligence, and space asset integration within active battle groups."
      },
      mcq: {
        question: "Integrated Defence Staff (IDS) was created in India based on the recommendations of which of the following committees?",
        options: ["Kargil Review Committee", "Sarkaria Commission", "Balwant Rai Mehta Committee", "Naresh Chandra Committee"],
        correct: 0,
        explanation: "The Integrated Defence Staff (IDS) was set up in October 2001 in pursuance of the recommendations of the Kargil Review Committee to promote coordination among the three services."
      }
    },
    {
      id: "jan-4",
      topic: "Sports Awards",
      text: "The Laureus World Sports Awards ceremony concluded, honoring outstanding athletic performances. Novak Djokovic claimed the prestigious Sportsman of the Year award.",
      details: {
        winner: "Novak Djokovic",
        award: "Laureus World Sportsman of the Year",
        nationality: "Serbian",
        summary: "Awarded for his record-breaking 24th Grand Slam title and dominating performance across the tennis circuit in the past season, marking his fifth Laureus trophy."
      },
      mcq: {
        question: "Who won the Laureus World Sportsman of the Year Award in 2026?",
        options: ["Lionel Messi", "Novak Djokovic", "Max Verstappen", "Erling Haaland"],
        correct: 1,
        explanation: "Novak Djokovic of Serbia was awarded the Laureus World Sportsman of the Year for his record-breaking achievements in Grand Slam tennis tournaments."
      }
    },
    {
      id: "jan-5",
      topic: "Science & Tech",
      text: "ISRO officially certified and designated the final flight crew for the upcoming Gaganyaan H1 crewed spaceflight mission.",
      details: {
        winner: "Group Captain Prashanth Nair & Crew",
        award: "Gaganyaan Mission Flight Crew Certification",
        nationality: "Indian",
        summary: "Four designated Indian Air Force test pilots completed specialized training and were certified at ISRO's Human Space Flight Centre for India's historic first crewed spaceflight."
      },
      mcq: {
        question: "India's human spaceflight mission is known as:",
        options: ["Gaganyaan", "Chandrayaan", "Aditya-L1", "Mangalyaan"],
        correct: 0,
        explanation: "Gaganyaan is India's first human spaceflight program, developed by ISRO, aimed at sending a crew to low Earth orbit."
      }
    },
    {
      id: "jan-6",
      topic: "World Politics",
      text: "Gabriel Attal was appointed as the Prime Minister of France, making history as the country's youngest-ever Prime Minister.",
      details: {
        winner: "Gabriel Attal",
        award: "Appointment as Prime Minister of France",
        nationality: "French",
        summary: "Appointed by President Emmanuel Macron to lead the cabinet, succeeding Elisabeth Borne, focusing on immigration reforms and youth employment policies."
      },
      mcq: {
        question: "Who is the youngest Prime Minister in the history of modern France?",
        options: ["Emmanuel Macron", "Gabriel Attal", "Élizabeth Borne", "Jean Castex"],
        correct: 1,
        explanation: "Gabriel Attal was appointed as the Prime Minister of France at the age of 34, making him the youngest-ever Prime Minister of the country."
      }
    }
  ],
  "February 2026": [
    {
      id: "feb-1",
      topic: "Defence Procurement",
      text: "The Defence Acquisition Council (DAC) approved the procurement of <strong>97 additional Tejas Mk-1A</strong> fighter aircraft and <strong>150 Prachand Light Combat Helicopters (LCH)</strong> for the Indian Army and Air Force, boosting localized aviation manufacturing under 'Atmanirbhar Bharat'.",
      details: {
        winner: "HAL & Indian Air Force / Army",
        award: "Procurement of 97 Tejas Mk-1A & 150 Prachand LCH",
        nationality: "Indian (Indigenously Designed)",
        summary: "DAC cleared procurement worth Rs 1.1 lakh crore. Tejas Mk-1A features advanced radar and BVR missiles, while Prachand LCH operates at heights of 5,000 meters."
      },
      mcq: {
        question: "How many additional Tejas Mk-1A fighter jets were approved for procurement by the DAC in early 2026?",
        options: ["83", "97", "110", "120"],
        correct: 1,
        explanation: "The Defence Acquisition Council cleared the mega purchase of 97 additional Tejas Mk-1A jets for the Indian Air Force, in addition to the 83 jets ordered previously."
      }
    },
    {
      id: "feb-2",
      topic: "Border Security",
      text: "India and Myanmar completed the border sealing framework planning, and the Indian government officially suspended the **Free Movement Regime (FMR)** along the Indo-Myanmar border to maintain internal stability.",
      details: {
        winner: "Union Ministry of Home Affairs",
        award: "Suspension of Free Movement Regime (FMR) & Border Sealing",
        nationality: "India & Myanmar",
        summary: "Suspended the FMR which allowed border residents to travel 16 km into either country without visas, initiating a 1,643 km fence project along the border."
      },
      mcq: {
        question: "With which country does India share a border where the Free Movement Regime (FMR) was recently suspended?",
        options: ["Bangladesh", "Myanmar", "Nepal", "Bhutan"],
        correct: 1,
        explanation: "The Government of India suspended the FMR with Myanmar to ensure internal security and check demographic disturbances in border states."
      }
    },
    {
      id: "feb-3",
      topic: "Literature Awards",
      text: "The 58th Jnanpith Awards were announced, celebrating literary excellence in Sanskrit and Urdu. Celebrated Urdu poet Gulzar and Sanskrit scholar Jagadguru Rambhadracharya were named recipients.",
      details: {
        winner: "Gulzar (Urdu) & Jagadguru Rambhadracharya (Sanskrit)",
        award: "58th Jnanpith Award",
        nationality: "Indian",
        summary: "Gulzar was awarded for his extensive contributions to Urdu poetry and cinema, while Jagadguru Rambhadracharya was recognized for his peerless scholarship and authorship in Sanskrit."
      },
      mcq: {
        question: "Who was awarded the Jnanpith Award in the Sanskrit category in early 2026?",
        options: ["Damodar Mauzo", "Jagadguru Rambhadracharya", "Gulzar", "Amitav Ghosh"],
        correct: 1,
        explanation: "Sanskrit scholar Jagadguru Rambhadracharya and Urdu poet Gulzar were jointly awarded the 58th Jnanpith Award."
      }
    },
    {
      id: "feb-4",
      topic: "Environment",
      text: "The Forest Survey of India (FSI) released the biennial State of India's Forest Report, indicating conservation progress and changes in density across regions.",
      details: {
        winner: "Forest Survey of India (FSI)",
        award: "State of India's Forest Report Release",
        nationality: "Indian",
        summary: "The report detailed a net increase of 1,540 square kilometers in forest cover nationwide, identifying the Western Ghats and the North-East hills as key zones requiring conservation interventions."
      },
      mcq: {
        question: "Which Indian state has the largest area-wise forest cover according to the Forest Survey of India?",
        options: ["Madhya Pradesh", "Arunachal Pradesh", "Mizoram", "Chhattisgarh"],
        correct: 0,
        explanation: "Madhya Pradesh continues to have the largest forest cover in the country by area, followed by Arunachal Pradesh."
      }
    },
    {
      id: "feb-5",
      topic: "Sports Awards",
      text: "The Australian Open 2026 Tennis Tournament concluded in Melbourne. Jannik Sinner won the Men's Singles title, securing his championship trophy.",
      details: {
        winner: "Jannik Sinner",
        award: "Australian Open Men's Singles Championship",
        nationality: "Italian",
        summary: "Won the Grand Slam final in a five-set match, demonstrating baseline dominance and clinical endurance to win his second Australian Open title."
      },
      mcq: {
        question: "Which Italian tennis player won the Australian Open Men's Singles title?",
        options: ["Matteo Berrettini", "Jannik Sinner", "Lorenzo Musetti", "Fabio Fognini"],
        correct: 1,
        explanation: "Jannik Sinner of Italy won the Australian Open Men's Singles title, confirming his status as one of the leading players on the ATP tour."
      }
    }
  ],
  "March 2026": [
    {
      id: "mar-1",
      topic: "Missile Technology",
      text: "India successfully flight-tested the <strong>Agni-5 missile</strong> with <strong>MIRV (Multiple Independently Targetable Re-entry Vehicle)</strong> technology under the mission name <strong>'Mission Divyastra'</strong>, joining an elite group of nations possessing this capability.",
      details: {
        winner: "DRDO (Defence Research & Development Organisation)",
        award: "Successful Flight-Test of Agni-V with MIRV (Mission Divyastra)",
        nationality: "Indian",
        summary: "Tested from APJ Abdul Kalam Island. MIRV allows a single missile to deliver multiple warheads to different targets separated by hundreds of kilometers."
      },
      mcq: {
        question: "What is the name of the operation under which India tested the Agni-5 missile with MIRV technology?",
        options: ["Mission Divyastra", "Mission Shakti", "Mission Gaganyaan", "Mission Prithvi"],
        correct: 0,
        explanation: "Agni-5's successful flight test with MIRV capabilities was designated as 'Mission Divyastra' by the DRDO and Ministry of Defence in March."
      }
    },
    {
      id: "mar-2",
      topic: "Naval Infrastructure",
      text: "The Indian Navy commissioned **INS Jatayu**, a new naval base at Minicoy Island in the Lakshadweep archipelago, extending operational range in the Arabian Sea.",
      details: {
        winner: "Indian Navy",
        award: "Commissioning of INS Jatayu Naval Base",
        nationality: "Indian (Minicoy, Lakshadweep)",
        summary: "Commissioning of second naval base in Lakshadweep (after INS Dweeprakshak in Kavaratti) to enhance maritime domain awareness and counter piracy in the Indian Ocean."
      },
      mcq: {
        question: "Which new naval base was commissioned by the Indian Navy at Minicoy Island in March?",
        options: ["INS Jatayu", "INS Baaz", "INS Dwarka", "INS Kadamba"],
        correct: 0,
        explanation: "INS Jatayu was commissioned at Minicoy Island, Lakshadweep, to strengthen maritime security and infrastructure in the strategic Indian Ocean Region."
      }
    },
    {
      id: "mar-3",
      topic: "Science & Tech",
      text: "Google DeepMind announced a major biological breakthrough with the release of the AlphaFold 3 model.",
      details: {
        winner: "Google DeepMind Team",
        award: "AlphaFold 3 Protein & Nucleic Acid Predictor",
        nationality: "International (UK / USA)",
        summary: "Launched AlphaFold 3, which successfully expands molecular structure forecasting from proteins to complex interactions involving DNA, RNA, chemical compounds, and ionic bindings."
      },
      mcq: {
        question: "AlphaFold, developed by Google DeepMind, is primarily used to predict:",
        options: ["Weather Patterns", "Protein Structures", "Seismic Activity", "Stock Market Indices"],
        correct: 1,
        explanation: "AlphaFold is an artificial intelligence program developed by DeepMind which performs highly accurate predictions of 3D protein structures from their amino acid sequences."
      }
    },
    {
      id: "mar-4",
      topic: "Indian Administration",
      text: "The President of India appointed two new Election Commissioners to fill the vacancies in the Election Commission of India.",
      details: {
        winner: "Gyanesh Kumar & Sukhbir Singh Sandhu",
        award: "Appointment as Election Commissioners",
        nationality: "Indian",
        summary: "Appointed as Election Commissioners by a high-level committee under the provisions of the Chief Election Commissioner and other Election Commissioners Act, 2023."
      },
      mcq: {
        question: "Who appoints the Chief Election Commissioner and other Election Commissioners in India?",
        options: ["Prime Minister", "Chief Justice of India", "President of India", "Parliament"],
        correct: 2,
        explanation: "The Election Commissioners are appointed by the President of India based on the recommendations of a selection committee chaired by the Prime Minister."
      }
    },
    {
      id: "mar-5",
      topic: "Environment",
      text: "The United Nations Environment Programme (UNEP) presented the Champions of the Earth award to Josefina Belmonte for pioneer work in urban forestation and combating heat island effects.",
      details: {
        winner: "Josefina Belmonte",
        award: "UNEP Champions of the Earth (Inspiration and Action)",
        nationality: "Philippine",
        summary: "Honored for creating network of urban micro-forests, policy reforms restricting green-space conversion, and community tree nurseries across metropolitan areas."
      },
      mcq: {
        question: "The 'Champions of the Earth' award is the highest environmental honor presented by which international body?",
        options: ["IUCN", "UNEP", "Greenpeace", "World Wide Fund for Nature"],
        correct: 1,
        explanation: "The Champions of the Earth award is the United Nations' flagship environmental honor, presented annually by the UN Environment Programme (UNEP)."
      }
    }
  ],
  "April 2026": [
    {
      id: "apr-1",
      topic: "Bilateral Drills",
      text: "The 11th edition of the India-Kyrgyzstan Joint Special Forces Exercise <strong>'KHANJAR'</strong> commenced at the Special Forces Training School in Bakloh, Himachal Pradesh, stressing tactical counter-terrorism operations.",
      details: {
        winner: "Indian & Kyrgyz Special Forces",
        award: "Exercise KHANJAR 11th Edition",
        nationality: "India & Kyrgyzstan (Held in Himachal Pradesh)",
        summary: "Focused on counter-terrorism and counter-insurgency tactics in mountainous terrain, simulating hostage rescues and surgical interventions."
      },
      mcq: {
        question: "Exercise 'KHANJAR' is a bilateral special forces training exercise conducted between India and which nation?",
        options: ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan"],
        correct: 1,
        explanation: "Exercise Khanjar is the annual bilateral special forces joint training drill between India and Kyrgyzstan."
      }
    },
    {
      id: "apr-2",
      topic: "Joint Drills",
      text: "Bilateral maritime exercise **'Varuna 2026'** between the Indian Navy and French Navy commenced in the Mediterranean Sea, conducting advanced anti-submarine warfare simulations.",
      details: {
        winner: "Indian & French Navies",
        award: "Exercise Varuna 2026",
        nationality: "India & France (Held in Mediterranean Sea)",
        summary: "Large-scale maritime combat maneuvers, including joint carrier operations, replenishment-at-sea, and tactical live-firing coordinates."
      },
      mcq: {
        question: "Which bilateral naval exercise is conducted between India and France?",
        options: ["Varuna", "Indra", "SLINEX", "Garuda"],
        correct: 0,
        explanation: "Varuna is the bilateral naval exercise between India and France. (Garuda is Air Force, Shakti is Army)."
      }
    },
    {
      id: "apr-3",
      topic: "Arts & Music",
      text: "The 68th Grammy Awards were held, recognizing global musical accomplishments. Indian musicians made a historic mark in the global music category.",
      details: {
        winner: "Zakir Hussain & Rakesh Chaurasia",
        award: "Grammy Award (Best Global Music Performance)",
        nationality: "Indian",
        summary: "Zakir Hussain (Tabla) and Rakesh Chaurasia (Flute) won Grammys for their collaborative fusion album 'As We Speak', promoting classical Indian fusion on the world stage."
      },
      mcq: {
        question: "Which instrument is Rakesh Chaurasia famous for playing?",
        options: ["Tabla", "Sitar", "Flute (Bansuri)", "Sarod"],
        correct: 2,
        explanation: "Rakesh Chaurasia is a renowned Indian classical flautist and the nephew of legendary flute maestro Hariprasad Chaurasia."
      }
    },
    {
      id: "apr-4",
      topic: "Defence Testing",
      text: "DRDO successfully carried out the flight test of the new generation ballistic missile Agni-Prime from APJ Abdul Kalam Island.",
      details: {
        winner: "DRDO & Indian Army",
        award: "Agni-Prime Flight Test Validation",
        nationality: "Indian",
        summary: "The nuclear-capable medium-range ballistic missile was tested successfully, validating its canisterized launching design, solid propulsion stages, and inertial guidance systems."
      },
      mcq: {
        question: "What is the approximate range of the Agni-Prime (Agni-P) ballistic missile?",
        options: ["100 - 500 km", "1000 - 2000 km", "3000 - 4000 km", "5000+ km"],
        correct: 1,
        explanation: "Agni-Prime is a new generation canisterized missile with a range capability of 1,000 to 2,000 km, bridging the gap between Agni-1 and Agni-2."
      }
    },
    {
      id: "apr-5",
      topic: "Science & Tech",
      text: "NASA's Lucy spacecraft successfully completed a flyby of asteroid Dinkinesh, transmitting high-resolution images of its contact binary satellite Selam.",
      details: {
        winner: "NASA Southwest Research Institute Team",
        award: "Dinkinesh-Selam Asteroid Flyby & Mapping",
        nationality: "American",
        summary: "Discovered that the satellite of asteroid Dinkinesh is actually a contact binary, consisting of two lobes stuck together, a first in asteroid observation."
      },
      mcq: {
        question: "What is the primary mission objective of NASA's Lucy spacecraft?",
        options: ["Study Jupiter's Trojan Asteroids", "Map Saturn's Rings", "Search for Life on Mars", "Examine Pluto's Atmosphere"],
        correct: 0,
        explanation: "NASA's Lucy mission is the first space mission launched to explore Jupiter's Trojan asteroids, which are remnants of the early solar system."
      }
    }
  ],
  "May 2026": [
    {
      id: "may-1",
      topic: "Space & Defence",
      text: "The Indian Space Research Organisation (ISRO) successfully launched the dedicated military communication satellite <strong>GSAT-7B</strong> for the Indian Army, providing secure and robust networkcentric communication support.",
      details: {
        winner: "ISRO & Indian Army",
        award: "GSAT-7B Military Communication Satellite Launch",
        nationality: "Indian",
        summary: "First dedicated military satellite for the Army, boosting network-centric warfare capabilities, line-of-sight communication links, and remote drone controls."
      },
      mcq: {
        question: "Which satellite series is specifically dedicated to military/defence communications in India?",
        options: ["CARTOSAT", "GSAT-7", "RISAT", "INSAT-3D"],
        correct: 1,
        explanation: "The GSAT-7 series (often referred to as Rukmini/Angry Bird satellites) is specifically designed and launched to meet secure communications requirements of India's Armed Forces."
      }
    },
    {
      id: "may-2",
      topic: "Air Force Aviation",
      text: "The IAF successfully integrated the indigenous BVR missile **Astra Mk-1** onto the Su-30MKI fighter fleet, enhancing interception boundaries.",
      details: {
        winner: "DRDO & Indian Air Force",
        award: "Astra Mk-1 BVR Missile Su-30MKI Fleet Integration",
        nationality: "Indian",
        summary: "Successful operational capability testing of the indigenously developed Beyond Visual Range Air-to-Air Missile (BVRAAM) with a range exceeding 110 km."
      },
      mcq: {
        question: "What type of missile is 'Astra Mk-1', developed by DRDO?",
        options: ["Surface-to-Air", "Air-to-Air (BVR)", "Anti-Tank Guided Missile", "Submarine-Launched Ballistic Missile"],
        correct: 1,
        explanation: "Astra is a Beyond Visual Range (BVR) Air-to-Air missile developed by DRDO for integration onto fighter aircraft."
      }
    },
    {
      id: "may-3",
      topic: "Sports Awards",
      text: "Neeraj Chopra clinched the gold medal in the Javelin Throw event at the Doha Diamond League, starting his season on a high.",
      details: {
        winner: "Neeraj Chopra",
        award: "Doha Diamond League Gold",
        nationality: "Indian",
        summary: "Chopra recorded a top throw of 88.36 meters on his very first attempt to win the tournament, beating competition from Jakub Vadlejch and Anderson Peters."
      },
      mcq: {
        question: "Neeraj Chopra won the Olympic Gold Medal in Javelin Throw in which Olympic Games?",
        options: ["Rio 2016", "Tokyo 2020", "Paris 2024", "London 2012"],
        correct: 1,
        explanation: "Neeraj Chopra won the historic Athletics Gold Medal for India in the Men's Javelin Throw at the Tokyo 2020 Olympics."
      }
    },
    {
      id: "may-4",
      topic: "Environment",
      text: "The Great Barrier Reef Marine Authority in Australia launched field trials of atmospheric brightening to combat bleaching.",
      details: {
        winner: "Marine Authority Research Team",
        award: "Atmospheric Cloud Brightening Implementation",
        nationality: "Australian",
        summary: "Implemented seawater spraying from specialized vessels to increase cloud reflectivity, attempting to reduce solar radiation heating and mitigate widespread coral bleaching."
      },
      mcq: {
        question: "The Great Barrier Reef is situated off the coast of which country?",
        options: ["New Zealand", "Australia", "Indonesia", "Papua New Guinea"],
        correct: 1,
        explanation: "The Great Barrier Reef is the world's largest coral reef system, located in the Coral Sea, off the coast of Queensland, Australia."
      }
    },
    {
      id: "may-5",
      topic: "Indian Administration",
      text: "The Union Cabinet approved the establishment of the National Clean Energy Transition Authority (NCETA) to coordinate India's green grid transition.",
      details: {
        winner: "Ministry of Power & NITI Aayog",
        award: "National Clean Energy Transition Authority Establishment",
        nationality: "Indian",
        summary: "Approved a statutory framework under the Energy Conservation Act to coordinate grid decarbonization, incentivize green hydrogen integration, and manage carbon credit exchanges."
      },
      mcq: {
        question: "Which statutory body or authority was newly approved by the Union Cabinet to coordinate India's green grid transitions?",
        options: ["Bureau of Energy Efficiency", "NCETA", "Central Electricity Authority", "Solar Energy Corporation of India"],
        correct: 1,
        explanation: "The Union Cabinet approved the establishment of the National Clean Energy Transition Authority (NCETA) to handle cross-sector decarbonization and carbon exchanges."
      }
    }
  ],
  "June 2026": [
    {
      id: "jun-1",
      topic: "Submarine Procurement",
      text: "The sixth Scorpene submarine of Project-75, **INS Vagsheer**, began sea trials carrying advanced lithium-ion battery integration capabilities.",
      details: {
        winner: "Mazagon Dock Shipbuilders & Indian Navy",
        award: "INS Vagsheer Sea Trials & Lithium-Ion Batteries Integration",
        nationality: "Indian",
        summary: "The sixth submarine under Project-75 began final sea trials. It features stealth technologies, acoustic silencing, and advanced torpedo/missile tube launch systems."
      },
      mcq: {
        question: "Project-75 of the Indian Navy is related to the construction of which of the following?",
        options: ["Aircraft Carriers", "Guided Missile Destroyers", "Conventional Submarines", "Nuclear Submarines"],
        correct: 2,
        explanation: "Project-75 covers the construction of six conventional diesel-electric attack submarines of the Scorpene class in collaboration with Naval Group, France."
      }
    },
    {
      id: "jun-2",
      topic: "Literature Awards",
      text: "The International Booker Prize was announced, honoring outstanding translated fiction. South Korean author Han Kang was recognized for her major work.",
      details: {
        winner: "Han Kang",
        award: "International Booker Prize",
        nationality: "South Korean",
        summary: "Awarded for her psychological novel 'The Vegetarian' (translated by Deborah Smith), which charts a woman's decision to stop eating meat and its disruptive family impact."
      },
      mcq: {
        question: "Who was the author of the novel 'The Vegetarian' which won the International Booker Prize?",
        options: ["Han Kang", "Deborah Smith", "Sayaka Murata", "Banana Yoshimoto"],
        correct: 0,
        explanation: "Korean novelist Han Kang wrote 'The Vegetarian', which was translated into English by Deborah Smith and awarded the Booker Prize."
      }
    },
    {
      id: "jun-3",
      topic: "World Administration",
      text: "The United Nations General Assembly elected five countries as non-permanent members of the UN Security Council.",
      details: {
        winner: "Pakistan, Panama, Greece, Denmark, Somalia",
        award: "Elected Non-Permanent UNSC Members",
        nationality: "Multinational",
        summary: "Elected for a two-year term commencing January 1, 2027, replacing outgoing members to manage regional security representations under the UN charter."
      },
      mcq: {
        question: "What is the total number of non-permanent members in the United Nations Security Council (UNSC)?",
        options: ["5", "10", "15", "20"],
        correct: 1,
        explanation: "The UNSC has 15 members: 5 permanent members (P5) with veto power and 10 non-permanent members elected for two-year terms."
      }
    },
    {
      id: "jun-4",
      topic: "Defence Drills",
      text: "The multinational air exercise 'Tarang Shakti 2026' was conducted by the Indian Air Force, featuring participation from several global air wings.",
      details: {
        winner: "Indian Air Force & Participating Allies",
        award: "Exercise Tarang Shakti 2026",
        nationality: "Multinational (Held in India)",
        summary: "India's largest multinational air exercise, featuring joint operations, air-to-air combat simulations, and refueling operations to improve defensive cooperation."
      },
      mcq: {
        question: "Which is the largest multinational air combat exercise hosted by the Indian Air Force?",
        options: ["Exercise Tarang Shakti", "Exercise Pitch Black", "Exercise Garuda", "Exercise Red Flag"],
        correct: 0,
        explanation: "Exercise Tarang Shakti is the largest multinational air exercise hosted by the Indian Air Force, inviting friendly foreign nations to participate in complex tactical air drills."
      }
    }
  ],
  "July 2026": [
    {
      id: "jul-1",
      topic: "Air Defence",
      text: "DRDO completed tests of the **VSHORADS** (Very Short Range Air Defence System) missile, boosting low-altitude thermal threat defenses for border areas.",
      details: {
        winner: "DRDO (Research Centre Imarat)",
        award: "VSHORADS Missile System Successful Testing",
        nationality: "Indian",
        summary: "Tested using a tripod launcher. The missile is powered by a dual-thrust solid motor and is designed for neutralizing low-altitude aerial threats in close-range environments."
      },
      mcq: {
        question: "What is the primary operational mechanism of the VSHORADS missile system tested by DRDO?",
        options: ["Radar-Guided active tracking", "Man-portable passive infrared homing", "Laser beam riding guidance", "Wire-guided manual line-of-sight"],
        correct: 1,
        explanation: "VSHORADS is a Man Portable Air Defence System (MANPADS) utilizing passive infrared homing for target interception at low ranges."
      }
    },
    {
      id: "jul-2",
      topic: "Literature & Arts",
      text: "Amitav Ghosh was awarded the prestigious Erasmus Prize for his literary contributions to climate and environment themes.",
      details: {
        winner: "Amitav Ghosh",
        award: "Erasmus Prize",
        nationality: "Indian",
        summary: "Awarded by the Praemium Erasmianum Foundation for his body of work (like 'The Great Derangement' and 'The Nutmeg's Curse') highlighting climate change through narrative literature."
      },
      mcq: {
        question: "Which of the following books is written by Amitav Ghosh?",
        options: ["The Great Derangement", "The White Tiger", "The God of Small Things", "Midnight's Children"],
        correct: 0,
        explanation: "The Great Derangement: Climate Change and the Unthinkable is a non-fiction book written by Amitav Ghosh, exploring cultural responses to global warming."
      }
    },
    {
      id: "jul-3",
      topic: "Science & Tech",
      text: "A joint NASA and ESA research team announced the discovery of atmospheric composition on a rocky exoplanet using the James Webb Space Telescope.",
      details: {
        winner: "James Webb Research Consortium (NASA/ESA)",
        award: "LHS 475 b Exoplanet Atmosphere Mapping",
        nationality: "International (USA / Europe)",
        summary: "Successfully detected water vapor, carbon dioxide, and methane transmission signatures in the atmosphere of LHS 475 b, a rocky Earth-sized exoplanet orbiting a red dwarf star."
      },
      mcq: {
        question: "Which telescope was jointly developed by NASA, ESA, and CSA, and launched in late 2021 to succeed Hubble?",
        options: ["James Webb Space Telescope", "Kepler Space Telescope", "Chandra X-ray Observatory", "Spitzer Space Telescope"],
        correct: 0,
        explanation: "The James Webb Space Telescope (JWST) is a space telescope designed primarily to conduct infrared astronomy, succeeding Hubble."
      }
    },
    {
      id: "jul-4",
      topic: "Sports Awards",
      text: "The Wimbledon Championships 2026 concluded. Carlos Alcaraz defended his title, winning the Men's Singles trophy in straight sets.",
      details: {
        winner: "Carlos Alcaraz",
        award: "Wimbledon Men's Singles Championship",
        nationality: "Spanish",
        summary: "Won his third Wimbledon crown by defeating competitors in a commanding grass-court run, highlighting advanced baseline athleticism and drop-shot play."
      },
      mcq: {
        question: "Carlos Alcaraz, who won the Wimbledon Men's Singles title in 2026, represents which country?",
        options: ["Spain", "Argentina", "Italy", "Portugal"],
        correct: 0,
        explanation: "Carlos Alcaraz is a Spanish professional tennis player who won the Wimbledon Men's Singles title."
      }
    }
  ],
  "August 2026": [
    {
      id: "aug-1",
      topic: "Sports Awards",
      text: "ICC Men's T20 World Cup 2026 ended. India won the championship trophy by defeating Australia in a thrilling final match held in Colombo, Sri Lanka.",
      details: {
        winner: "Indian Men's Cricket Team",
        award: "ICC Men's T20 World Cup 2026 Championship",
        nationality: "Indian",
        summary: "India secured their third T20 World Cup title under the captaincy of Rohit Sharma, defeating Australia by 7 runs in the final match at R. Premadasa Stadium in Colombo."
      },
      mcq: {
        question: "Which country won the ICC Men's T20 World Cup in 2026?",
        options: ["Australia", "India", "England", "South Africa"],
        correct: 1,
        explanation: "India defeated Australia by 7 runs in the final of the ICC Men's T20 World Cup 2026 held in Colombo, Sri Lanka."
      }
    },
    {
      id: "aug-2",
      topic: "Science & Tech",
      text: "ISRO announced the successful qualification of the propulsion module for the **Shukrayaan-1** Venus Orbiter Mission, targeting a launch window in late 2026.",
      details: {
        winner: "Indian Space Research Organisation (ISRO)",
        award: "Shukrayaan-1 Venus Mission Propulsion Test",
        nationality: "Indian",
        summary: "ISRO's Liquid Propulsion Systems Centre (LPSC) successfully qualified the high-thrust engine designed to insert the spacecraft into the Venusian orbit."
      },
      mcq: {
        question: "What is the name of India's planned orbiter mission to the planet Venus?",
        options: ["Mangalyaan-2", "Aditya-L2", "Shukrayaan-1", "AstroSat-2"],
        correct: 2,
        explanation: "Shukrayaan-1 is the planned mission by the Indian Space Research Organisation (ISRO) to study the atmosphere and surface of Venus."
      }
    },
    {
      id: "aug-3",
      topic: "Defence Technology",
      text: "The stealth guided-missile frigate **INS Mahendragiri**, the seventh and final ship of the Project 17A frigate program, was officially commissioned into the Indian Navy at Mazagon Dock Shipbuilders Limited (MDL), Mumbai.",
      details: {
        winner: "Indian Navy & MDL",
        award: "INS Mahendragiri Frigate Commissioning",
        nationality: "Indian",
        summary: "INS Mahendragiri is equipped with advanced stealth features, state-of-the-art weapons, sensors, and platform management systems, representing India's expanding self-reliance in naval architecture."
      },
      mcq: {
        question: "INS Mahendragiri, recently commissioned into the Indian Navy, belongs to which project class?",
        options: ["Project 15B", "Project 17A", "Project 28", "Project 75I"],
        correct: 1,
        explanation: "INS Mahendragiri is the seventh and final stealth frigate built under Project 17A (Nilgiri-class frigates) for the Indian Navy."
      }
    },
    {
      id: "aug-4",
      topic: "Environment",
      text: "India designated three more wetlands as Ramsar sites of international importance, raising the country's total count of Ramsar sites to **85**.",
      details: {
        winner: "Ministry of Environment, Forest and Climate Change",
        award: "Ramsar Wetlands expansion (85 Sites)",
        nationality: "Indian",
        summary: "Added Nanjarayan Bird Sanctuary and Kazhuveli Wetland in Tamil Nadu, and Tawa Reservoir in Madhya Pradesh to the Ramsar list, expanding ecological conservation zones."
      },
      mcq: {
        question: "Which of the following reservoirs in Madhya Pradesh was recently added to the Ramsar list of wetlands of international importance?",
        options: ["Tawa Reservoir", "Indira Sagar", "Gandhi Sagar", "Bargi Dam"],
        correct: 0,
        explanation: "Tawa Reservoir, located in Narmadapuram district of Madhya Pradesh, along with two sites in Tamil Nadu, was designated as a Ramsar site, taking India's total count to 85."
      }
    },
    {
      id: "aug-5",
      topic: "Politics & Admin",
      text: "Justice Sanjiv Khanna took oath as the new Chief Justice of India (CJI), succeeding the outgoing Chief Justice.",
      details: {
        winner: "Justice Sanjiv Khanna",
        award: "Oath as Chief Justice of India",
        nationality: "Indian",
        summary: "Appointed as the 51st Chief Justice of India. The oath was administered by President Droupadi Murmu at Rashtrapati Bhavan under Article 124(6) of the Constitution."
      },
      mcq: {
        question: "Under which Article of the Indian Constitution does the President administer the oath of office to the Chief Justice of India?",
        options: ["Article 124(6)", "Article 60", "Article 125", "Article 219"],
        correct: 0,
        explanation: "Article 124(6) of the Constitution of India provides that every person appointed to be a Judge of the Supreme Court shall make and subscribe an oath or affirmation before the President."
      }
    }
  ]
};

