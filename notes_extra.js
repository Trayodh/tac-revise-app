window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};
EXPANDED_NOTES_DATA["trig-identities"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Trigonometric Identities & Values
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Trigonometry is the backbone of the Mathematics paper in NDA and CDS examinations. At its core, it is the study of the relationship between the sides and angles of triangles. For competitive exams, we move beyond basic right-angled triangles into the realm of the Unit Circle, where angles can extend beyond 90 degrees. Understanding the "CAST" rule (Quadrant system) is essential: in the first quadrant, all ratios are positive; in the second, only Sine is positive; in the third, Tangent; and in the fourth, Cosine.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The fundamental identities, such as sin²θ + cos²θ = 1, are not just formulas to memorize but tools to simplify complex expressions. In NDA/CDS, examiners often present questions where you must substitute these identities to reduce a long expression into a single numerical value. Always look for opportunities to convert everything into Sine and Cosine if you are stuck, as this is the "universal language" of trigonometry.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    When dealing with trigonometric values, memorization of the standard angles (0°, 30°, 45°, 60°, 90°) is mandatory. However, the exam often tests values like 15°, 75°, or 18°/36°. Mastering the compound angle formulas allows you to derive these values quickly. Remember, the goal is speed and accuracy; if you can visualize the graph of the function, you can often determine the range and domain without complex calculation.
  </p>

  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
    <li style="margin-bottom: 8px;"><strong>Quadrant Logic:</strong> Remember "All Silver Tea Cups" (ASTC) to identify the sign of ratios in different quadrants.</li>
    <li style="margin-bottom: 8px;"><strong>Complementary Angles:</strong> sin(90-θ) = cosθ, tan(90-θ) = cotθ, sec(90-θ) = cosecθ.</li>
    <li style="margin-bottom: 8px;"><strong>The "1" Trick:</strong> Many PYQ problems involve expressions that simplify to 1 or 0. If you see a long expression, look for terms that cancel out or sum to 90°.</li>
    <li style="margin-bottom: 8px;"><strong>Range Constraints:</strong> Always remember that -1 ≤ sinθ ≤ 1 and -1 ≤ cosθ ≤ 1. If an equation gives sinθ = 1.2, it is mathematically impossible.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tr style="background: rgba(255,255,255,0.05);">
      <th style="padding: 10px; border: 1px solid var(--border); text-align: left;">Category</th>
      <th style="padding: 10px; border: 1px solid var(--border); text-align: left;">Formula</th>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid var(--border);">Compound Angles</td>
      <td style="padding: 10px; border: 1px solid var(--border);">sin(A+B) = sinA·cosB + cosA·sinB</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid var(--border);">Double Angles</td>
      <td style="padding: 10px; border: 1px solid var(--border);">cos(2A) = 2cos²A - 1 = 1 - 2sin²A</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid var(--border);">Double Angles</td>
      <td style="padding: 10px; border: 1px solid var(--border);">tan(2A) = 2tanA / (1 - tan²A)</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid var(--border);">Triple Angles</td>
      <td style="padding: 10px; border: 1px solid var(--border);">sin(3A) = 3sinA - 4sin³A; cos(3A) = 4cos³A - 3cosA</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid var(--border);">Product to Sum</td>
      <td style="padding: 10px; border: 1px solid var(--border);">2sinA·cosB = sin(A+B) + sin(A-B)</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid var(--border);">Sum to Product</td>
      <td style="padding: 10px; border: 1px solid var(--border);">sinC + sinD = 2sin((C+D)/2)cos((C-D)/2)</td>
    </tr>
  </table>

  <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 5px; border-left: 4px solid #FFD700;">
    <strong>Strategic Tip:</strong> For NDA exams, if you encounter a question with variables (A, B, C), try substituting specific values (e.g., A=30°, B=60°) to check the options. This "Value Substitution" method is a lifesaver when time is running out!
  </div>
</div>`;

EXPANDED_NOTES_DATA["inverse-trig"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Inverse Trigonometric Functions
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Inverse Trigonometric Functions (ITF) are essentially the "reverse" operation of standard trigonometric functions. If a function like <em>y = sin(x)</em> tells us the ratio (y) for a given angle (x), the inverse function <em>x = sin⁻¹(y)</em> asks: "What angle (x) produces this specific ratio (y)?" In the context of NDA and CDS exams, it is crucial to understand that trigonometric functions are periodic (they repeat values), which makes them "many-to-one." To define an inverse, we must restrict the domain of the original function to make it "one-to-one," resulting in what we call the <strong>Principal Value Branch</strong>.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The most common trap for students is ignoring the domain and range. For instance, while <em>sin⁻¹(x)</em> is defined for <em>x ∈ [-1, 1]</em>, its output (the angle) is strictly restricted to <em>[-π/2, π/2]</em>. If you are asked to find the value of an expression, always ensure your final answer falls within these predefined principal intervals. In competitive exams, questions often involve composite functions like <em>sin(cos⁻¹x)</em>; the best approach here is to draw a right-angled triangle, assign sides based on the ratio, and convert the inverse function into the required trigonometric form.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Strategic mastery of ITF requires memorizing the conversion identities. Many NDA questions can be solved in seconds by substituting <em>x = tan θ</em>. For example, expressions involving <em>√(1-x²)</em> or <em>√(1+x²)</em> are clear indicators that a trigonometric substitution will simplify the expression into a standard identity. Always look for the "xy < 1" or "xy > 1" conditions in addition formulas, as these determine whether you need to add or subtract <em>π</em> from your result.
  </p>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Key Concepts & Properties</h4>
  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 15px;">
    <li style="margin-bottom: 8px;"><strong>Principal Values:</strong> sin⁻¹, tan⁻¹, and cosec⁻¹ have ranges in the 1st and 4th quadrants [-π/2, π/2]. cos⁻¹, cot⁻¹, and sec⁻¹ have ranges in the 1st and 2nd quadrants [0, π].</li>
    <li style="margin-bottom: 8px;"><strong>Negative Angles:</strong> sin⁻¹(-x) = -sin⁻¹(x), but cos⁻¹(-x) = π - cos⁻¹(x). This is a frequent source of negative marking in exams.</li>
    <li style="margin-bottom: 8px;"><strong>Triangle Method:</strong> Always convert inverse functions to a common ratio (usually tan) using a right-angled triangle when dealing with mixed functions like <em>sin(tan⁻¹x)</em>.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="background: rgba(255,255,255,0.05); padding: 8px; margin-bottom: 5px; border-radius: 4px;">sin⁻¹x + cos⁻¹x = π/2</li>
    <li style="background: rgba(255,255,255,0.05); padding: 8px; margin-bottom: 5px; border-radius: 4px;">tan⁻¹x + tan⁻¹y = tan⁻¹((x+y)/(1-xy)) [where xy < 1]</li>
    <li style="background: rgba(255,255,255,0.05); padding: 8px; margin-bottom: 5px; border-radius: 4px;">2tan⁻¹x = sin⁻¹(2x/(1+x²)) = cos⁻¹((1-x²)/(1+x²))</li>
    <li style="background: rgba(255,255,255,0.05); padding: 8px; margin-bottom: 5px; border-radius: 4px;">tan⁻¹x - tan⁻¹y = tan⁻¹((x-y)/(1+xy)) [where xy > -1]</li>
    <li style="background: rgba(255,255,255,0.05); padding: 8px; margin-bottom: 5px; border-radius: 4px;">sin⁻¹x = cosec⁻¹(1/x) and cos⁻¹x = sec⁻¹(1/x)</li>
  </ul>

  <div style="margin-top: 20px; padding: 15px; background: rgba(255, 215, 0, 0.1); border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 6px;">
    <strong style="color: #ffd700;">Exam Tip:</strong> In the NDA exam, if you encounter a complex inverse trigonometric equation, try plugging in simple values like <em>x = 0</em> or <em>x = 1</em> to eliminate options. This "Option Elimination" technique is often faster than solving the full algebraic derivation.
  </div>
</div>`;

EXPANDED_NOTES_DATA["quadratic-eq"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Quadratic Equations
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    A quadratic equation is a polynomial equation of the second degree, generally represented in the form <strong>ax² + bx + c = 0</strong>, where <em>a, b,</em> and <em>c</em> are real numbers and <em>a ≠ 0</em>. In the context of NDA and CDS examinations, this topic is a cornerstone of Algebra. Understanding the behavior of these equations is not just about solving for 'x', but about analyzing the nature of roots, their relationship with coefficients, and their graphical representation as parabolas.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The "soul" of a quadratic equation lies in its <strong>Discriminant (D = b² - 4ac)</strong>. The discriminant acts as a diagnostic tool that tells us the nature of the roots without actually solving the equation. If D > 0, the roots are real and distinct; if D = 0, the roots are real and equal; and if D < 0, the roots are complex conjugates. Mastering this concept is vital, as UPSC frequently tests the conditions under which roots become imaginary or rational.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    When dealing with roots (let's call them α and β), we use Vieta’s formulas to bridge the gap between the roots and the coefficients. These relationships allow us to construct equations from given roots or find the value of complex expressions involving roots without calculating the roots individually. This is a time-saving technique essential for the high-pressure environment of the NDA/CDS math paper.
  </p>

  <div style="margin-top: 20px;">
    <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Key Concepts & Properties</h4>
    <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
      <li><strong>Nature of Roots:</strong>
        <ul style="list-style-type: circle; padding-left: 20px;">
          <li>If D > 0 and a perfect square: Roots are rational and distinct.</li>
          <li>If D > 0 and not a perfect square: Roots are irrational (occur in conjugate pairs like p + √q and p - √q).</li>
          <li>If D < 0: Roots are complex conjugates (a + ib and a - ib).</li>
        </ul>
      </li>
      <li><strong>Formation of Equation:</strong> If roots α and β are known, the equation is: <strong>x² - (sum of roots)x + (product of roots) = 0</strong>.</li>
      <li><strong>Common Roots:</strong> For two equations a₁x² + b₁x + c₁ = 0 and a₂x² + b₂x + c₂ = 0 to have a common root, the condition is (a₁c₂ - a₂c₁)² = (a₁b₂ - a₂b₁)(b₁c₂ - b₂c₁).</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="margin-bottom: 8px;"><strong>Quadratic Formula:</strong> x = [-b ± √(b² - 4ac)] / 2a</li>
    <li style="margin-bottom: 8px;"><strong>Sum of roots:</strong> α + β = -b/a</li>
    <li style="margin-bottom: 8px;"><strong>Product of roots:</strong> αβ = c/a</li>
    <li style="margin-bottom: 8px;"><strong>Difference of roots:</strong> |α - β| = √D / |a|</li>
    <li style="margin-bottom: 8px;"><strong>Symmetric Expressions:</strong> α² + β² = (α + β)² - 2αβ</li>
  </ul>

  <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 5px; border-left: 4px solid #FFD700; margin-top: 20px;">
    <strong style="color: #FFD700;">Strategic Exam Tip:</strong> Always check if the coefficients are rational before concluding that irrational roots occur in conjugate pairs. If the coefficients are irrational, this rule does not apply! Also, for questions asking for the "range" of a parameter, always check the boundary conditions where the leading coefficient 'a' might become zero (turning the quadratic into a linear equation).
  </div>
</div>`;

EXPANDED_NOTES_DATA["complex-numbers"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Complex Numbers
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    In the realm of Defence Mathematics, Complex Numbers are not just an extension of real numbers; they are the backbone of rotational geometry and vector analysis. A complex number is defined as <strong>z = a + ib</strong>, where 'a' is the real part and 'b' is the imaginary part. The fundamental unit is <em>i</em> (iota), defined as √-1. Think of the real number line as a 1D path; by introducing 'i', we expand our universe into a 2D plane known as the <strong>Argand Plane</strong> (or Complex Plane), where the x-axis represents real values and the y-axis represents imaginary values.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Understanding the <strong>Modulus</strong> and <strong>Argument</strong> is critical for NDA/CDS exams. The modulus |z| = √(a² + b²) represents the distance of the point from the origin, while the argument θ = tan⁻¹(b/a) represents the angle made with the positive real axis. Mastery of these allows you to convert complex numbers into <strong>Polar Form</strong> (r(cosθ + i sinθ)) and <strong>Euler’s Form</strong> (re<sup>iθ</sup>), which are frequently tested in simplification problems.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The most common trap in exams involves the powers of <em>i</em> and the properties of the cube roots of unity. Remember that <em>i</em> follows a cyclic pattern of 4: <em>i</em>, -1, -<em>i</em>, 1. When dealing with complex equations, always look for symmetry. If you see a term like (1+ω+ω²), immediately substitute 0. These shortcuts are designed to save you precious seconds during the exam.
  </p>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Key Properties & Concepts</h4>
  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 15px;">
    <li style="margin-bottom: 8px;"><strong>Conjugate:</strong> If z = a + ib, then conjugate z̄ = a - ib. Note that z + z̄ = 2Re(z) and z - z̄ = 2iIm(z).</li>
    <li style="margin-bottom: 8px;"><strong>Modulus Properties:</strong> |z₁z₂| = |z₁||z₂| and |zⁿ| = |z|ⁿ. These are essential for solving complex magnitude questions quickly.</li>
    <li style="margin-bottom: 8px;"><strong>Triangle Inequality:</strong> |z₁ + z₂| ≤ |z₁| + |z₂|. This is a favorite for theoretical questions in CDS.</li>
    <li style="margin-bottom: 8px;"><strong>Rotation:</strong> Multiplying by <em>i</em> rotates a complex number by 90° counter-clockwise in the Argand plane.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 8px;"><strong>Cube roots of unity:</strong> 1, ω, ω² where 1 + ω + ω² = 0 and ω³ = 1.</li>
    <li style="margin-bottom: 8px;"><strong>Powers of i:</strong> i⁴ⁿ = 1, i⁴ⁿ⁺¹ = i, i⁴ⁿ⁺² = -1, i⁴ⁿ⁺³ = -i.</li>
    <li style="margin-bottom: 8px;"><strong>De Moivre’s Theorem:</strong> (cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ).</li>
    <li style="margin-bottom: 8px;"><strong>Square root of a complex number:</strong> √a+ib = ±[√((|z|+a)/2) + i√((|z|-a)/2)] (for b>0).</li>
    <li style="margin-bottom: 8px;"><strong>Argument of product:</strong> arg(z₁z₂) = arg(z₁) + arg(z₂).</li>
  </ul>

  <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid #ffd700; padding: 15px; border-radius: 5px; margin-top: 20px;">
    <strong style="color: #ffd700;">Note: Exam Strategy Tip:</strong> When you encounter a complex expression with high powers, don't expand it. Convert it to Polar or Euler form first. Most NDA questions are designed to simplify beautifully once converted to r(cosθ + i sinθ).
  </div>
</div>`;

EXPANDED_NOTES_DATA["straight-lines"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Straight Lines
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    In the context of NDA and CDS mathematics, the study of Straight Lines is the bedrock of Coordinate Geometry. A straight line is essentially the locus of a point that moves such that its direction remains constant. In a 2D Cartesian plane, this direction is defined by the <strong>slope (gradient)</strong>, denoted by 'm'. Understanding the relationship between the slope, the intercepts, and the general equation of a line is crucial for solving geometry problems efficiently.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Think of a line as a path defined by two constraints: its orientation (slope) and its position (a fixed point it passes through). When we talk about the "General Equation" <em>Ax + By + C = 0</em>, we are looking at a universal representation where any point (x, y) satisfying this equation lies on the line. The slope of this line is simply <em>-A/B</em>. Mastering the conversion between different forms—Slope-Intercept, Point-Slope, and Intercept form—is a high-frequency skill tested in almost every Defence exam paper.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Beyond basic equations, the exam focuses heavily on the interaction between two lines. Whether they are parallel (slopes are equal), perpendicular (product of slopes is -1), or intersecting at a specific angle, these properties allow you to solve complex problems involving triangles, medians, and altitudes without drawing a single graph. Always remember: the angle between two lines with slopes m1 and m2 is given by <em>tan θ = |(m1 - m2) / (1 + m1m2)|</em>.
  </p>

  <div style="margin-top: 20px;">
    <h4 style="color: var(--text-primary); font-weight: 600; margin-bottom: 10px;">Core Concepts Breakdown</h4>
    <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
      <li><strong>Slope (m):</strong> tan θ, where θ is the angle the line makes with the positive x-axis. For two points (x1, y1) and (x2, y2), m = (y2 - y1) / (x2 - x1).</li>
      <li><strong>Parallel Lines:</strong> Two lines are parallel if their slopes are equal (m1 = m2).</li>
      <li><strong>Perpendicular Lines:</strong> Two lines are perpendicular if the product of their slopes is -1 (m1 * m2 = -1).</li>
      <li><strong>Concurrency:</strong> Three lines are concurrent if they pass through a single common point. The determinant of their coefficients must be zero.</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0; line-height: 2;">
    <li><strong>Distance from point (x1, y1) to line Ax + By + C = 0:</strong> d = |Ax1 + By1 + C| / √(A² + B²)</li>
    <li><strong>Distance between two parallel lines Ax + By + C1 = 0 and Ax + By + C2 = 0:</strong> d = |C1 - C2| / √(A² + B²)</li>
    <li><strong>Slope-Intercept Form:</strong> y = mx + c (where c is the y-intercept)</li>
    <li><strong>Intercept Form:</strong> x/a + y/b = 1 (where a and b are x and y intercepts)</li>
    <li><strong>Normal Form:</strong> x cos α + y sin α = p (where p is the perpendicular distance from origin)</li>
    <li><strong>Angle between two lines:</strong> tan θ = |(m1 - m2) / (1 + m1m2)|</li>
  </ul>

  <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid rgba(255, 215, 0, 0.3);">
    <strong style="color: #ffd700;">Note: Exam Strategy Tip:</strong> 
    When dealing with "Family of Lines" (L1 + λL2 = 0), don't waste time finding the intersection point unless absolutely necessary. Often, the question asks for a line passing through the intersection of two given lines; simply substitute the point or use the λ-method to save precious seconds. Always check if the lines are vertical (undefined slope) before applying the m1m2 = -1 rule!
  </div>
</div>`;

EXPANDED_NOTES_DATA["central-tendency"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Measures of Central Tendency
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    In the context of NDA and CDS Mathematics, "Measures of Central Tendency" refers to the statistical methods used to identify the "center" or "typical value" of a dataset. Think of it as finding the representative value that summarizes an entire distribution. Whether you are analyzing artillery range data or troop movement speeds, these measures allow you to condense complex raw data into a single, meaningful figure.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The three primary pillars are the <strong>Mean</strong> (the arithmetic average), the <strong>Median</strong> (the middle-most value), and the <strong>Mode</strong> (the most frequent value). Understanding these is not just about calculation; it is about knowing which measure is robust against outliers. For instance, the Mean is highly sensitive to extreme values, whereas the Median remains stable, making it a better choice for skewed distributions like income or reaction times.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    For competitive exams, you must master the relationship between these three. In a perfectly symmetrical distribution, Mean = Median = Mode. However, in moderately skewed distributions, we use the empirical relationship: <strong>Mode = 3(Median) - 2(Mean)</strong>. This formula is a frequent target for UPSC examiners to test your conceptual depth without requiring lengthy calculations.
  </p>

  <div style="margin: 20px 0;">
    <h4 style="color: var(--text-primary); font-weight: 600; margin-bottom: 10px;">Key Characteristics & Comparison</h4>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr style="background: rgba(255,255,255,0.05);">
        <th style="padding: 10px; border: 1px solid var(--border);">Measure</th>
        <th style="padding: 10px; border: 1px solid var(--border);">Best Used When</th>
        <th style="padding: 10px; border: 1px solid var(--border);">Sensitivity</th>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid var(--border);">Mean</td>
        <td style="padding: 10px; border: 1px solid var(--border);">Data is symmetrical, no outliers.</td>
        <td style="padding: 10px; border: 1px solid var(--border);">High (Affected by outliers)</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid var(--border);">Median</td>
        <td style="padding: 10px; border: 1px solid var(--border);">Data is skewed or has outliers.</td>
        <td style="padding: 10px; border: 1px solid var(--border);">Low (Robust)</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid var(--border);">Mode</td>
        <td style="padding: 10px; border: 1px solid var(--border);">Categorical data or most frequent.</td>
        <td style="padding: 10px; border: 1px solid var(--border);">N/A</td>
      </tr>
    </table>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
    <li><strong>Arithmetic Mean (x̄):</strong> Σ(fx) / Σf (for grouped data).</li>
    <li><strong>Empirical Relationship:</strong> Mode = 3(Median) - 2(Mean).</li>
    <li><strong>Combined Mean:</strong> If two groups have means x̄₁ and x̄₂ with sizes n₁ and n₂, the combined mean is (n₁x̄₁ + n₂x̄₂) / (n₁ + n₂).</li>
    <li><strong>Property of Mean:</strong> The sum of deviations of observations from their mean is always zero: Σ(xᵢ - x̄) = 0.</li>
    <li><strong>Variance:</strong> σ² = Σ(xᵢ - μ)² / N</li>
    <li><strong>Standard Deviation:</strong> σ = √Variance</li>
    <li><strong>Exam Trap:</strong> Remember that Mean, Median, and Mode are affected by change of origin and scale. If each observation is multiplied by 'k', the new mean is k times the old mean.</li>
  </ul>

  <div style="margin-top: 20px; padding: 15px; background: rgba(0, 123, 255, 0.1); border-radius: 5px;">
    <strong style="color: var(--info);">Strategic Tip:</strong> In NDA/CDS exams, if you see a question asking for the "Mean of the first n natural numbers," use the shortcut <strong>(n+1)/2</strong>. For the "Mean of the first n odd numbers," the answer is simply <strong>n</strong>. These shortcuts save precious seconds during the paper.
  </div>
</div>`;

EXPANDED_NOTES_DATA["limits-continuity"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Limits & Continuity
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Concept of Limits:</strong> Imagine you are walking towards a destination, but you never actually reach it. You get infinitely close—so close that the difference is negligible. In mathematics, a limit describes the behavior of a function as the input approaches a specific value, rather than what happens exactly at that value. If a function <em>f(x)</em> approaches a value <em>L</em> as <em>x</em> approaches <em>c</em> from both the left (LHL) and the right (RHL), we say the limit exists.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Continuity:</strong> A function is "continuous" at a point if you can draw its graph through that point without lifting your pen. Mathematically, this requires three conditions: the limit must exist (LHL = RHL), the function must be defined at that point (f(c) exists), and the limit must equal the function value (LHL = RHL = f(c)). If any of these fail, the function has a "discontinuity" (a hole, a jump, or an asymptote).
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Strategic Approach for NDA/CDS:</strong> Most exam questions involve indeterminate forms like 0/0 or ∞/∞. Instead of complex algebraic manipulation, always look for L'Hopital's Rule first. If you see trigonometric functions, remember the standard limits to save time. For continuity questions, always check the "boundary points" where the function definition changes (e.g., piecewise functions).
  </p>

  <div style="margin: 20px 0; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 6px;">
    <h4 style="margin-top: 0;">Key Analytical Steps:</h4>
    <ul style="padding-left: 20px; line-height: 1.8;">
      <li><strong>LHL (Left Hand Limit):</strong> lim<sub>x→c⁻</sub> f(x) = lim<sub>h→0</sub> f(c-h)</li>
      <li><strong>RHL (Right Hand Limit):</strong> lim<sub>x→c⁺</sub> f(x) = lim<sub>h→0</sub> f(c+h)</li>
      <li><strong>Indeterminate Forms:</strong> 0/0, ∞/∞, 0×∞, ∞-∞, 1<sup>∞</sup>, 0<sup>0</sup>, ∞<sup>0</sup>.</li>
      <li><strong>Continuity Check:</strong> If LHL ≠ RHL, the limit does not exist, and the function is automatically discontinuous.</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="margin-bottom: 8px;">• <strong>Standard Limit:</strong> lim<sub>x→0</sub> (sin x / x) = 1</li>
    <li style="margin-bottom: 8px;">• <strong>Algebraic Limit:</strong> lim<sub>x→a</sub> (xⁿ - aⁿ) / (x - a) = n·aⁿ⁻¹</li>
    <li style="margin-bottom: 8px;">• <strong>L'Hopital's Rule:</strong> lim<sub>x→c</sub> f(x)/g(x) = lim<sub>x→c</sub> f'(x)/g'(x) (Apply until the form is no longer 0/0 or ∞/∞)</li>
    <li style="margin-bottom: 8px;">• <strong>Continuity Condition:</strong> LHL = RHL = f(c)</li>
    <li style="margin-bottom: 8px;">• <strong>Exponential Limit:</strong> lim<sub>x→0</sub> (eˣ - 1) / x = 1</li>
    <li style="margin-bottom: 8px;">• <strong>Logarithmic Limit:</strong> lim<sub>x→0</sub> ln(1+x) / x = 1</li>
    <li style="margin-bottom: 8px;">• <strong>1<sup>∞</sup> Form Trick:</strong> lim<sub>x→a</sub> [f(x)]<sup>g(x)</sup> = e<sup>lim<sub>x→a</sub> (f(x)-1)·g(x)</sup></li>
  </ul>

  <div style="margin-top: 20px; padding: 10px; border: 1px dashed var(--accent); border-radius: 4px; font-size: 0.9em;">
    <strong>Exam Trap:</strong> Do not apply L'Hopital's Rule if the limit is not in an indeterminate form. Always check the denominator first! Also, remember that polynomials are continuous everywhere, but rational functions are discontinuous where the denominator is zero.
  </div>
</div>`;

EXPANDED_NOTES_DATA["differentiation"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Differentiation Rules
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Differentiation is the mathematical process of finding the "rate of change." In the context of NDA and CDS examinations, think of differentiation as measuring how sensitive a function is to small changes in its input. If you are driving a vehicle, your position changes with time; the rate at which your position changes is your velocity. Mathematically, this is the derivative of the position function with respect to time.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    To master this for the exam, you must move beyond rote memorization. Understand that differentiation is a linear operator. This means the derivative of a sum is the sum of the derivatives, and constants can be pulled out of the differentiation process. Whether you are dealing with algebraic, trigonometric, or exponential functions, the fundamental goal is to break down complex expressions into simpler, standard forms using the rules provided below.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The most critical aspect for Defence exams is the <strong>Chain Rule</strong>. Often, UPSC frames questions where a function is nested within another (e.g., sin(log(x))). The Chain Rule allows you to differentiate the "outer" function while keeping the "inner" function intact, then multiplying by the derivative of the "inner" function. Always work from the outside in to avoid errors.
  </p>

  <div style="margin: 20px 0;">
    <h4 style="color: var(--text-primary); font-weight: 600; margin-bottom: 10px;">Core Operational Rules</h4>
    <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
      <li><strong>Sum/Difference Rule:</strong> d/dx [f(x) ± g(x)] = f'(x) ± g'(x)</li>
      <li><strong>Product Rule:</strong> Used when two functions are multiplied. (uv)' = u'v + uv'</li>
      <li><strong>Quotient Rule:</strong> Used for fractions. (u/v)' = (u'v - uv')/v² (Remember: "Low d-High minus High d-Low, over the square of what's below").</li>
      <li><strong>Chain Rule:</strong> d/dx [f(g(x))] = f'(g(x)) · g'(x)</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0; line-height: 2;">
    <li><strong>Product Rule:</strong> (uv)' = u'v + uv'</li>
    <li><strong>Quotient Rule:</strong> (u/v)' = (u'v - uv')/v²</li>
    <li><strong>Exponential Rule:</strong> d/dx(aˣ) = aˣ·ln(a)</li>
    <li><strong>Inverse Sine:</strong> d/dx(sin⁻¹x) = 1/√(1-x²)</li>
    <li><strong>Inverse Tangent:</strong> d/dx(tan⁻¹x) = 1/(1+x²)</li>
    <li><strong>Logarithmic Rule:</strong> d/dx(ln x) = 1/x</li>
    <li><strong>Trigonometric Fact:</strong> d/dx(sec x) = sec x tan x</li>
  </ul>

  <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 6px; margin-top: 20px;">
    <h4 style="color: var(--accent); margin-top: 0;">Strategic Exam Tips</h4>
    <ul style="padding-left: 20px;">
      <li><strong>The "Constant" Trap:</strong> Always check if a term is a variable or a constant. d/dx(π²) is 0, not 2π. UPSC loves to hide constants in complex-looking expressions.</li>
      <li><strong>Logarithmic Differentiation:</strong> If you see a function raised to the power of another function (e.g., xˣ), always take the natural log (ln) on both sides before differentiating.</li>
      <li><strong>Implicit Differentiation:</strong> When you see equations like x² + y² = a², differentiate both sides with respect to x, treating y as a function of x (i.e., include dy/dx whenever you differentiate a y-term).</li>
    </ul>
  </div>
</div>`;

EXPANDED_NOTES_DATA["integration"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Standard Integration Methods
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Integration is the reverse process of differentiation, often referred to as finding the "primitive" or "antiderivative." In the context of NDA and CDS examinations, integration is not just about memorizing formulas; it is about recognizing patterns. Think of integration as the process of accumulating infinitesimal parts to find a whole—whether it is the area under a curve or the total displacement from velocity.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    To master this topic, you must first understand the <strong>Method of Substitution</strong>. This is your primary tool when you see a function and its derivative sitting side-by-side in the integrand. By substituting <em>u = g(x)</em>, you simplify complex expressions into standard forms. If substitution fails, we look toward <strong>Integration by Parts</strong>, which is essentially the product rule of differentiation in reverse. It is best used when the integrand is a product of two functions from different families (e.g., Algebraic and Trigonometric).
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Finally, we utilize <strong>Partial Fractions</strong> for rational functions where the denominator can be factored. The strategy here is to decompose a complex fraction into simpler, integrable components. Always remember that in definite integration, the limits of integration define the boundaries of the area, and properties like the King's Property are designed to save you minutes of calculation time by transforming difficult integrals into simpler, symmetric ones.
  </p>

  <div style="margin-top: 20px;">
    <h4 style="color: var(--text-primary); font-weight: 600; margin-bottom: 10px;">Core Methodologies</h4>
    <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
      <li><strong>Substitution Method:</strong> Look for a function whose derivative is also present. If <em>f'(x)</em> is present, substitute <em>f(x) = t</em>.</li>
      <li><strong>Integration by Parts (LIATE Rule):</strong> Use the order <strong>L</strong>ogarithmic, <strong>I</strong>nverse Trig, <strong>A</strong>lgebraic, <strong>T</strong>rigonometric, <strong>E</strong>xponential to choose your 'u'.</li>
      <li><strong>Partial Fractions:</strong> If the degree of the numerator is greater than or equal to the denominator, perform long division first.</li>
      <li><strong>Standard Forms:</strong> Memorize the integrals of <em>1/(x²+a²)</em>, <em>1/√(a²-x²)</em>, and <em>1/(x²-a²)</em> as these appear frequently in PYQs.</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="padding: 8px; border-bottom: 1px solid var(--border);"><strong>Integration by Parts:</strong> ∫ u·v dx = u∫v dx - ∫(u'·∫v dx) dx</li>
    <li style="padding: 8px; border-bottom: 1px solid var(--border);"><strong>King's Property:</strong> ∫[0 to a] f(x) dx = ∫[0 to a] f(a-x) dx</li>
    <li style="padding: 8px; border-bottom: 1px solid var(--border);"><strong>Even/Odd Property:</strong> ∫[-a to a] f(x)dx = 0 if f(-x)=-f(x)</li>
    <li style="padding: 8px; border-bottom: 1px solid var(--border);"><strong>Even Function Property:</strong> ∫[-a to a] f(x)dx = 2∫[0 to a] f(x)dx if f(-x)=f(x)</li>
    <li style="padding: 8px; border-bottom: 1px solid var(--border);"><strong>Standard Integral:</strong> ∫ 1/(x²+a²) dx = (1/a) tan⁻¹(x/a) + C</li>
  </ul>

  <div style="margin-top: 20px; padding: 15px; background: rgba(255, 215, 0, 0.1); border-radius: 6px;">
    <strong style="color: #ffd700;">Note: Exam Strategy Tip:</strong> In NDA exams, many questions can be solved by <strong>differentiation of the options</strong>. If you are stuck on a complex integral, differentiate the given choices; the one that yields the integrand is your correct answer. This is a massive time-saver for "Find the integral of..." type questions.
  </div>
</div>`;

EXPANDED_NOTES_DATA["syl-matrices"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Matrices and Determinants
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Matrices are essentially rectangular arrays of numbers arranged in rows and columns, acting as the "data structures" of linear algebra. In the context of NDA and CDS examinations, think of a matrix as a container for a system of linear equations. If a matrix is a container, the <strong>Determinant</strong> is a unique scalar value associated with a square matrix that tells us about the "scaling factor" of the transformation and whether the system of equations has a unique solution.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    To master this topic, you must distinguish between matrix operations (addition, multiplication) and determinant properties. A common trap for students is confusing matrix multiplication (which is not commutative, i.e., AB ≠ BA) with scalar multiplication. Always remember: a matrix is an object, while a determinant is a value. You can only calculate the determinant of a <strong>square matrix</strong> (n x n).
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    When solving for inverse matrices or adjoints, focus on the relationship between the matrix and its cofactor matrix. The adjoint is simply the transpose of the cofactor matrix. In exam scenarios, rather than calculating the full inverse for large matrices, look for properties of the determinant to eliminate options quickly.
  </p>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Core Concepts & Properties</h4>
  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px; line-height: 1.8;">
    <li><strong>Singular Matrix:</strong> A matrix is singular if its determinant is zero (|A| = 0). Such matrices do not have an inverse.</li>
    <li><strong>Involutory Matrix:</strong> A matrix A is involutory if A² = I.</li>
    <li><strong>Idempotent Matrix:</strong> A matrix A is idempotent if A² = A.</li>
    <li><strong>Orthogonal Matrix:</strong> A matrix A is orthogonal if AAᵀ = I (or Aᵀ = A⁻¹).</li>
    <li><strong>Symmetric vs Skew-Symmetric:</strong> A is symmetric if Aᵀ = A; A is skew-symmetric if Aᵀ = -A. Note: The determinant of a skew-symmetric matrix of odd order is always 0.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding-left: 0; line-height: 2;">
    <li style="background: rgba(255,255,255,0.05); padding: 5px 10px; margin-bottom: 5px; border-radius: 4px;">|kA| = kⁿ|A| (where n is the order of the matrix)</li>
    <li style="background: rgba(255,255,255,0.05); padding: 5px 10px; margin-bottom: 5px; border-radius: 4px;">|adj A| = |A|ⁿ⁻¹</li>
    <li style="background: rgba(255,255,255,0.05); padding: 5px 10px; margin-bottom: 5px; border-radius: 4px;">|adj(adj A)| = |A|⁽ⁿ⁻¹⁾²</li>
    <li style="background: rgba(255,255,255,0.05); padding: 5px 10px; margin-bottom: 5px; border-radius: 4px;">A⁻¹ = adj(A) / |A|</li>
    <li style="background: rgba(255,255,255,0.05); padding: 5px 10px; margin-bottom: 5px; border-radius: 4px;">(AB)ᵀ = BᵀAᵀ</li>
    <li style="background: rgba(255,255,255,0.05); padding: 5px 10px; margin-bottom: 5px; border-radius: 4px;">(AB)⁻¹ = B⁻¹A⁻¹</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Strategic Exam Tips</h4>
  <ul style="list-style-type: square; padding-left: 20px;">
    <li><strong>The "Trace" Trick:</strong> The trace of a matrix (sum of diagonal elements) is equal to the sum of its eigenvalues. This is a frequent shortcut in NDA questions.</li>
    <li><strong>Determinant Properties:</strong> If any two rows or columns are identical or proportional, the determinant is 0. Always check for this before expanding a 3x3 determinant.</li>
    <li><strong>Time Management:</strong> If a question asks for the inverse of a 3x3 matrix, check the options first. Multiply the matrix by the options to see which one yields the Identity matrix (I) rather than calculating the adjoint manually.</li>
  </ul>
</div>`;

EXPANDED_NOTES_DATA["syl-probability"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Probability Theory & Bayes Theorem
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Probability is the mathematical language of uncertainty. In the context of NDA and CDS examinations, it is not just about calculating "chances," but about understanding the structure of sample spaces and the logical dependence between events. At its core, probability is the ratio of favorable outcomes to the total number of equally likely outcomes in a sample space (S).
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    When we deal with multiple events, we move into Conditional Probability. Think of this as "updating" your knowledge: if we know event B has already occurred, how does that change the likelihood of event A? This is the foundation of Bayes' Theorem. Bayes' Theorem is essentially an "inverse probability" tool—it allows us to calculate the probability of a cause given an observed effect. For instance, if a test result is positive (effect), what is the probability that the person actually has the disease (cause)?
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    To master this for Defence exams, you must distinguish between <strong>Independent Events</strong> (where the occurrence of one does not affect the other, e.g., tossing a coin twice) and <strong>Mutually Exclusive Events</strong> (where both cannot happen simultaneously, e.g., getting a Head and a Tail on a single toss). Always visualize these using Venn Diagrams to avoid errors in union and intersection calculations.
  </p>

  <div style="margin: 20px 0; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 6px;">
    <h4 style="margin-top: 0;">Key Concepts Breakdown:</h4>
    <ul style="list-style-type: square; padding-left: 20px; line-height: 1.8;">
      <li><strong>Sample Space (S):</strong> The set of all possible outcomes.</li>
      <li><strong>Addition Theorem:</strong> P(A ∪ B) = P(A) + P(B) - P(A ∩ B). If mutually exclusive, P(A ∩ B) = 0.</li>
      <li><strong>Multiplication Theorem:</strong> P(A ∩ B) = P(A) · P(B|A). If independent, P(A ∩ B) = P(A) · P(B).</li>
      <li><strong>Bayes' Theorem:</strong> Used for "Reverse Probability." It partitions the sample space into exhaustive and mutually exclusive events (H₁, H₂, ... Hₙ).</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="margin-bottom: 8px;"><strong>Conditional Probability:</strong> P(A|B) = P(A ∩ B) / P(B)</li>
    <li style="margin-bottom: 8px;"><strong>Bayes' Theorem:</strong> P(Hᵢ|E) = [P(E|Hᵢ)P(Hᵢ)] / [Σ P(E|Hⱼ)P(Hⱼ)]</li>
    <li style="margin-bottom: 8px;"><strong>Mode-Mean-Median Relation:</strong> Mode = 3Median - 2Mean</li>
    <li style="margin-bottom: 8px;"><strong>Variance (σ²):</strong> (Σx²/n) - (x̄)²</li>
    <li style="margin-bottom: 8px;"><strong>Standard Deviation (σ):</strong> √Variance</li>
    <li style="margin-bottom: 8px;"><strong>Coefficient of Variation (CV):</strong> (σ/x̄)·100</li>
  </ul>

  <div style="margin-top: 20px; padding: 15px; border: 1px dashed var(--accent); border-radius: 6px;">
    <strong style="color: var(--accent);">Strategic Exam Tips:</strong>
    <p style="margin: 5px 0 0 0; font-size: 0.95em;">
      1. <strong>The "At Least One" Trick:</strong> Whenever you see "at least one," calculate 1 - P(None). It saves 80% of the time.<br>
      2. <strong>Bayes Trap:</strong> Always ensure your hypotheses (H₁, H₂, etc.) are exhaustive (sum of probabilities = 1).<br>
      3. <strong>Independence Check:</strong> If P(A ∩ B) = P(A)·P(B), the events are independent. If not, they are dependent.
    </p>
  </div>
</div>
<!-- Visuals and High Yield appended -->
<div class="mermaid">
flowchart TD
    S[Sample Space (S)] --> A[Event A]
    S --> B[Event B]
    A -->|P(A)| PA[Probability P(A)]
    B -->|P(B)| PB[Probability P(B)]
    A & B -->|P(A∩B)| PAB[Joint Probability]
    subgraph Conditional
        direction LR
        PB -->|Given B| PA_given_B[Conditional P(A|B)]
        PA -->|Given A| PB_given_A[Conditional P(B|A)]
    end
    PA_given_B -->|Bayes' Theorem| PB_given_A
    style S fill:#f9f9f9,stroke:#333,stroke-width:1px
    style A fill:#e0f7fa,stroke:#006064,stroke-width:1px
    style B fill:#ffe0b2,stroke:#e65100,stroke-width:1px
    style Conditional fill:#fff3e0,stroke:#ff6f00,stroke-width:1px
</div>
`;

EXPANDED_NOTES_DATA["syl-numerical-speed"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Time, Speed & Distance Formulas
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Time, Speed, and Distance (TSD) is the backbone of the Numerical Aptitude section in NDA and CDS examinations. At its core, the relationship is governed by the fundamental equation: <strong>Distance = Speed × Time</strong>. Think of this as a balance: if you want to cover a fixed distance in less time, your speed must increase proportionally. Understanding this inverse relationship is the key to solving complex problems involving trains, boats, and races.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    In competitive exams like CDS, questions often test your ability to handle unit conversions and relative motion. A common trap is mixing units (e.g., km/h with seconds). Always ensure your units are consistent before performing calculations. For instance, if a train's speed is in km/h and the time taken is in seconds, you must convert the speed to m/s by multiplying by 5/18.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Relative speed is a critical concept for NDA aspirants. When two objects move in the same direction, their effective speed is the difference between their individual speeds (S1 - S2). When they move in opposite directions (like two trains crossing each other), their speeds are additive (S1 + S2). Visualizing the scenario as a "closing speed" helps in solving problems involving overtaking or head-on collisions.
  </p>

  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
    <li style="margin-bottom: 8px;"><strong>Proportionality:</strong> If Distance is constant, Speed is inversely proportional to Time (S ∝ 1/T).</li>
    <li style="margin-bottom: 8px;"><strong>Average Speed:</strong> This is not the arithmetic mean of speeds. It is the Total Distance divided by the Total Time.</li>
    <li style="margin-bottom: 8px;"><strong>Train Problems:</strong> When a train crosses a pole, the distance covered is the length of the train. When it crosses a platform, the distance is (Length of Train + Length of Platform).</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="margin-bottom: 8px;"><strong>Basic Formula:</strong> Speed = Distance / Time</li>
    <li style="margin-bottom: 8px;"><strong>Unit Conversion:</strong> 1 km/h = 5/18 m/s | 1 m/s = 18/5 km/h</li>
    <li style="margin-bottom: 8px;"><strong>Average Speed (for equal distances):</strong> 2xy / (x + y), where x and y are the two speeds.</li>
    <li style="margin-bottom: 8px;"><strong>Relative Speed (Same Direction):</strong> Speed₁ - Speed₂</li>
    <li style="margin-bottom: 8px;"><strong>Relative Speed (Opposite Direction):</strong> Speed₁ + Speed₂</li>
    <li style="margin-bottom: 8px;"><strong>Time taken to cross a stationary object:</strong> (Length of Train) / Speed of Train</li>
    <li style="margin-bottom: 8px;"><strong>Time taken to cross a moving object:</strong> (Sum of lengths) / Relative Speed</li>
  </ul>

  <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 5px; margin-top: 20px;">
    <strong style="color: var(--accent);">Strategic Tip:</strong> For CDS/NDA, always look for the "Constant" variable in the question. If the distance is constant, use the ratio method (T1/T2 = S2/S1) to save time instead of calculating absolute values.
  </div>
</div>
<!-- Visuals and High Yield appended -->
<div class="mermaid">
flowchart TD
    D[Distance] -->|Formula| S[Speed]
    D -->|Formula| T[Time]
    S -->|Convert km/h → m/s| C[× 5/18]
    T -->|Convert sec → hr| CT[÷ 3600]
    subgraph Rel[Relative Motion]
        RS[Relative Speed] -->|Same direction| SR[Speed₁ − Speed₂]
        RS -->|Opposite direction| SO[Speed₁ + Speed₂]
    end
    RS -->|Applied in trains/boats| Q[Problem Solving]
</div>
`;

EXPANDED_NOTES_DATA["syl-numerical-ratios"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Ratios, Proportions & Percentages
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    In the context of NDA and CDS examinations, Ratios, Proportions, and Percentages form the "arithmetic backbone." These topics are not just standalone questions; they are the tools required to solve Profit & Loss, Time & Work, Mixture & Alligation, and Simple/Compound Interest. A ratio is essentially a comparison of two quantities of the same kind by division, expressed as <em>a:b</em>. When two ratios are equal, we call it a proportion (<em>a:b :: c:d</em>), implying that the product of extremes equals the product of means (<em>ad = bc</em>).
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Percentages are a way of expressing a fraction with a denominator of 100. The core philosophy for defence exams is to master the <strong>Fraction-to-Percentage conversion</strong>. For instance, knowing that 1/8 = 12.5% saves precious seconds during the exam. When dealing with percentage changes, always remember that a percentage increase or decrease is always calculated on the <em>original value</em> unless specified otherwise.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    A common trap in UPSC-conducted exams is the "Successive Percentage Change." If a value changes by <em>x%</em> and then by <em>y%</em>, the net change is not simply <em>x+y</em>. You must use the formula: <strong>Net Change = x + y + (xy/100)</strong>. Always keep a sharp eye on the units; if the question asks for a ratio of speed but gives distances in km and time in minutes, convert them to a uniform unit before calculating.
  </p>

  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
    <li style="margin-bottom: 8px;"><strong>Compounded Ratio:</strong> For ratios a:b, c:d, and e:f, the compounded ratio is (ace : bdf).</li>
    <li style="margin-bottom: 8px;"><strong>Direct vs Inverse Proportion:</strong> If <em>x</em> increases as <em>y</em> increases, they are directly proportional (x/y = k). If <em>x</em> increases as <em>y</em> decreases, they are inversely proportional (xy = k).</li>
    <li style="margin-bottom: 8px;"><strong>Percentage Base:</strong> "A is what percent of B?" means (A/B) * 100. "A is what percent more than B?" means [(A-B)/B] * 100.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="margin-bottom: 6px;">• <strong>Gain%</strong> = (Gain / CP) * 100</li>
    <li style="margin-bottom: 6px;">• <strong>Loss%</strong> = (Loss / CP) * 100</li>
    <li style="margin-bottom: 6px;">• <strong>Discount%</strong> = (Discount / MP) * 100</li>
    <li style="margin-bottom: 6px;">• <strong>Mean Proportional of a and b</strong> = √(ab)</li>
    <li style="margin-bottom: 6px;">• <strong>Third Proportional of a and b</strong> = b² / a</li>
    <li style="margin-bottom: 6px;">• <strong>Fourth Proportional of a, b, and c</strong> = (b * c) / a</li>
    <li style="margin-bottom: 6px;">• <strong>Successive Change</strong> = ±x ± y ± (xy/100)</li>
  </ul>

  <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 6px; margin-top: 20px;">
    <strong style="color: var(--accent);">Strategic Tip:</strong> For NDA/CDS, avoid long algebraic equations. Use the <strong>"100 Assumption Method"</strong>. Assume the initial value is 100, apply the percentage changes step-by-step, and find the final value. This is significantly faster and less prone to calculation errors than using fractions.
  </div>
</div>
<!-- Visuals and High Yield appended -->
<div class="mermaid">
mindmap
  root((Ratios, Proportions & Percentages))
    Ratio
      definition((a : b))
    Proportion
      definition((a : b :: c : d))
      property((ad = bc))
    Percentage
      definition((fraction / 100))
      conversion((Fraction ↔ %))
    Applications
      PL((Profit & Loss))
      TW((Time & Work))
      MA((Mixture & Alligation))
      SI((Simple/Compound Interest))
</div>
`;

