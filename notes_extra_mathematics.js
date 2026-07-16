window.EXPANDED_NOTES_DATA = String.rawwindow.EXPANDED_NOTES_DATA || {};

EXPANDED_NOTES_DATA["trig-identities"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Trigonometric Identities & Values
  </h3>

  <p>
    [[Trigonometry]], derived from Greek words 'trigonon' (triangle) and 'metron' (measure), is a branch of mathematics that studies relationships between side lengths and angles of triangles. Its fundamental concepts are indispensable in fields like navigation, engineering, physics, and especially in defence applications such as ballistics, surveying, and radar technology. This chapter delves into the core of trigonometry: the [[Trigonometric Identities]] and the specific [[Trigonometric Values]] for standard angles, which form the bedrock for solving complex problems.
  </p>

  <h4>1. Angle Measurement Systems</h4>
  <p>
    Angles are fundamental to trigonometry and can be measured in two primary systems:
  </p>
  <ul>
    <li>
      <strong>[[Degree]] Measure (Sexagesimal System):</strong> A complete revolution is divided into <strong>360</strong> degrees ($360^\circ$). Each degree is subdivided into <strong>60</strong> minutes ($60'$) and each minute into <strong>60</strong> seconds ($60''$).
      <br/><em>Example:</em> $30^\circ 15' 45''$.
    </li>
    <li>
      <strong>[[Radian]] Measure (Circular System):</strong> The radian is the standard unit of angular measure in mathematics. One radian is defined as the angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle. A complete revolution is $2\pi$ radians.
      <br/><em>Conversion Formulas:</em>
      <ul>
        <li>Degrees to Radians: If an angle is $D$ degrees, its radian measure $R$ is given by $R = String.rawD \times \frac{\pi}{180^\circ}$.</li>
        <li>Radians to Degrees: If an angle is $R$ radians, its degree measure $D$ is given by $D = String.rawR \times \frac{180^\circ}{\pi}$.</li>
      </ul>
      <p>
        <em>Key Equivalences:</em> $\pi \text{ radians} = String.raw180^\circ$. Thus, $1 \text{ radian} \approx 57.2958^\circ$ and $1^\circ \approx 0.01745 \text{ radians}$.
      </p>
    </li>
  </ul>

  <h4>2. Basic Trigonometric Ratios</h4>
  <p>
    For an acute angle $\theta$ in a [[Right-angled triangle]], the six basic trigonometric ratios are defined as follows:
  </p>
  <ul>
    <li>
      <strong>[[Sine function]] ($\sin \theta$):</strong> Ratio of the length of the [[Opposite side]] to the length of the [[Hypotenuse]].
      $$ \sin \theta = String.raw\frac{\text{Opposite}}{\text{Hypotenuse}} $$
    </li>
    <li>
      <strong>[[Cosine function]] ($\cos \theta$):</strong> Ratio of the length of the [[Adjacent side]] to the length of the [[Hypotenuse]].
      $$ \cos \theta = String.raw\frac{\text{Adjacent}}{\text{Hypotenuse}} $$
    </li>
    <li>
      <strong>[[Tangent function]] ($\tan \theta$):</strong> Ratio of the length of the Opposite side to the length of the Adjacent side.
      $$ \tan \theta = String.raw\frac{\text{Opposite}}{\text{Adjacent}} $$
    </li>
  </ul>
  <p>
    The other three ratios are reciprocals of these:
  </p>
  <ul>
    <li>
      <strong>[[Cosecant function]] ($\csc \theta$ or $\text{cosec } \theta$):</strong> Reciprocal of $\sin \theta$.
      $$ \csc \theta = String.raw\frac{1}{\sin \theta} = String.raw\frac{\text{Hypotenuse}}{\text{Opposite}} \quad (\text{provided } \sin \theta \neq 0) $$
    </li>
    <li>
      <strong>[[Secant function]] ($\sec \theta$):</strong> Reciprocal of $\cos \theta$.
      $$ \sec \theta = String.raw\frac{1}{\cos \theta} = String.raw\frac{\text{Hypotenuse}}{\text{Adjacent}} \quad (\text{provided } \cos \theta \neq 0) $$
    </li>
    <li>
      <strong>[[Cotangent function]] ($\cot \theta$):</strong> Reciprocal of $\tan \theta$.
      $$ \cot \theta = String.raw\frac{1}{\tan \theta} = String.raw\frac{\text{Adjacent}}{\text{Opposite}} \quad (\text{provided } \tan \theta \neq 0) $$
    </li>
  </ul>

  <div class= String.raw"important-box" style= String.raw"background: rgba(255,165,0,0.1); border-left: 3px solid orange; padding: 12px 16px; margin-top: 15px; border-radius: 0 6px 6px 0;">
    <strong>Note on Generalization:</strong> While initially defined for acute angles in right triangles, these ratios are generalized for any angle using the [[Unit Circle]]. For a point $(x, y)$ on the unit circle (radius $r= String.raw1$) corresponding to an angle $\theta$ from the positive x-axis:
    <ul>
      <li>$\sin \theta = String.rawy/r = String.rawy$</li>
      <li>$\cos \theta = String.rawx/r = String.rawx$</li>
      <li>$\tan \theta = String.rawy/x$</li>
    </ul>
    This generalization allows us to define trigonometric functions for angles greater than $90^\circ$ or negative angles.
  </div>

  <h4>3. Fundamental Trigonometric Identities</h4>
  <p>
    [[Trigonometric Identities]] are equations involving trigonometric functions that are true for every value of the variables for which both sides of the equation are defined. They are crucial for simplifying expressions and solving trigonometric equations.
  </p>

  <h5>3.1. Quotient Identities</h5>
  <ul>
    <li>
      $$ \tan \theta = String.raw\frac{\sin \theta}{\cos \theta} $$
      <em>Derivation:</em> In a right-angled triangle, $\tan \theta = String.raw\frac{\text{Opposite}}{\text{Adjacent}}$. Dividing numerator and denominator by Hypotenuse, we get $\frac{\text{Opposite}/\text{Hypotenuse}}{\text{Adjacent}/\text{Hypotenuse}} = String.raw\frac{\sin \theta}{\cos \theta}$.
      <em>Condition:</em> $\cos \theta \neq 0$, which means $\theta \neq (2n+1)\frac{\pi}{2}$ for any integer $n$.
    </li>
    <li>
      $$ \cot \theta = String.raw\frac{\cos \theta}{\sin \theta} $$
      <em>Derivation:</em> Since $\cot \theta = String.raw\frac{1}{\tan \theta}$, it follows directly.
      <em>Condition:</em> $\sin \theta \neq 0$, which means $\theta \neq n\pi$ for any integer $n$.
    </li>
  </ul>

  <h5>3.2. [[Pythagorean Identities]]</h5>
  <p>
    These identities are derived directly from the [[Pythagorean Theorem]] ($a^2 + b^2 = String.rawc^2$) applied to a right-angled triangle, or from the equation of a [[Unit Circle]] ($x^2 + y^2 = String.rawr^2$).
  </p>
  <ul>
    <li>
      <strong>Identity 1:</strong>
      $$ \sin^2 \theta + \cos^2 \theta = String.raw1 $$
      <em>Derivation (from Unit Circle):</em> For any point $(x, y)$ on a unit circle with radius $r= String.raw1$, $x^2 + y^2 = String.raw1$. Since $x = String.raw\cos \theta$ and $y = String.raw\sin \theta$, substituting these gives $(\cos \theta)^2 + (\sin \theta)^2 = String.raw1$, which is $\cos^2 \theta + \sin^2 \theta = String.raw1$.
      <em>Conditions:</em> Valid for all real values of $\theta$.
    </li>
    <li>
      <strong>Identity 2:</strong>
      $$ 1 + \tan^2 \theta = String.raw\sec^2 \theta $$
      <em>Derivation:</em> Divide the first Pythagorean identity by $\cos^2 \theta$ (assuming $\cos \theta \neq 0$):
      $$ \frac{\sin^2 \theta}{\cos^2 \theta} + \frac{\cos^2 \theta}{\cos^2 \theta} = String.raw\frac{1}{\cos^2 \theta} $$
      $$ \left(\frac{\sin \theta}{\cos \theta}\right)^2 + 1 = String.raw\left(\frac{1}{\cos \theta}\right)^2 $$
      $$ \tan^2 \theta + 1 = String.raw\sec^2 \theta $$
      <em>Conditions:</em> $\cos \theta \neq 0$, i.e., $\theta \neq (2n+1)\frac{\pi}{2}$ for any integer $n$.
    </li>
    <li>
      <strong>Identity 3:</strong>
      $$ 1 + \cot^2 \theta = String.raw\csc^2 \theta $$
      <em>Derivation:</em> Divide the first Pythagorean identity by $\sin^2 \theta$ (assuming $\sin \theta \neq 0$):
      $$ \frac{\sin^2 \theta}{\sin^2 \theta} + \frac{\cos^2 \theta}{\sin^2 \theta} = String.raw\frac{1}{\sin^2 \theta} $$
      $$ 1 + \left(\frac{\cos \theta}{\sin \theta}\right)^2 = String.raw\left(\frac{1}{\sin \theta}\right)^2 $$
      $$ 1 + \cot^2 \theta = String.raw\csc^2 \theta $$
      <em>Conditions:</em> $\sin \theta \neq 0$, i.e., $\theta \neq n\pi$ for any integer $n$.
    </li>
  </ul>

  <h4>4. Trigonometric Values for [[Standard Angles]]</h4>
  <p>
    Memorizing or quickly deriving the values of trigonometric ratios for specific angles ($0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$) is crucial for competitive exams.
  </p>

  <table border= String.raw"1" style= String.raw"width:100%; border-collapse: collapse; margin: 15px 0;">
    <thead>
      <tr style= String.raw"background-color: var(--accent-light);">
        <th>Angle ($\theta$)</th>
        <th>$0^\circ$ ($0$ rad)</th>
        <th>$30^\circ$ ($\pi/6$ rad)</th>
        <th>$45^\circ$ ($\pi/4$ rad)</th>
        <th>$60^\circ$ ($\pi/3$ rad)</th>
        <th>$90^\circ$ ($\pi/2$ rad)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>$\sin \theta$</td>
        <td>$0$</td>
        <td>$1/2$</td>
        <td>$1/\sqrt{2}$</td>
        <td>$\sqrt{3}/2$</td>
        <td>$1$</td>
      </tr>
      <tr>
        <td>$\cos \theta$</td>
        <td>$1$</td>
        <td>$\sqrt{3}/2$</td>
        <td>$1/\sqrt{2}$</td>
        <td>$1/2$</td>
        <td>$0$</td>
      </tr>
      <tr>
        <td>$\tan \theta$</td>
        <td>$0$</td>
        <td>$1/\sqrt{3}$</td>
        <td>$1$</td>
        <td>$\sqrt{3}$</td>
        <td>Undefined</td>
      </tr>
      <tr>
        <td>$\csc \theta$</td>
        <td>Undefined</td>
        <td>$2$</td>
        <td>$\sqrt{2}$</td>
        <td>$2/\sqrt{3}$</td>
        <td>$1$</td>
      </tr>
      <tr>
        <td>$\sec \theta$</td>
        <td>$1$</td>
        <td>$2/\sqrt{3}$</td>
        <td>$\sqrt{2}$</td>
        <td>$2$</td>
        <td>Undefined</td>
      </tr>
      <tr>
        <td>$\cot \theta$</td>
        <td>Undefined</td>
        <td>$\sqrt{3}$</td>
        <td>$1$</td>
        <td>$1/\sqrt{3}$</td>
        <td>$0$</td>
      </tr>
    </tbody>
  </table>

  <h4>5. Signs of Trigonometric Ratios in [[Quadrants]] (CAST Rule)</h4>
  <p>
    The signs of trigonometric ratios depend on the quadrant in which the angle terminates. This is easily visualized using the [[Unit Circle]].
  </p>
  <ul>
    <li>
      <strong>Quadrant I ($0^\circ < \theta < 90^\circ$):</strong> All ratios are positive. (A - All)
    </li>
    <li>
      <strong>Quadrant II ($90^\circ < \theta < 180^\circ$):</strong> Only $\sin \theta$ and $\csc \theta$ are positive. (S - Sine)
    </li>
    <li>
      <strong>Quadrant III ($180^\circ < \theta < 270^\circ$):</strong> Only $\tan \theta$ and $\cot \theta$ are positive. (T - Tangent)
    </li>
    <li>
      <strong>Quadrant IV ($270^\circ < \theta < 360^\circ$):</strong> Only $\cos \theta$ and $\sec \theta$ are positive. (C - Cosine)
    </li>
  </ul>
  <p>
    The acronym <strong>"CAST"</strong> (starting from Quadrant IV and going counter-clockwise) helps remember which ratios are positive in each quadrant.
  </p>

  <h4>6. Trigonometric Ratios of [[Allied Angles]]</h4>
  <p>
    Allied angles are angles whose sum or difference with a given angle is a multiple of $90^\circ$ or $\pi/2$. Understanding these relations helps in finding the values of ratios for angles outside the $0^\circ - 90^\circ$ range.
  </p>
  <ul>
    <li>
      <strong>For $(90^\circ - \theta)$ or $(\pi/2 - \theta)$:</strong>
      $$ \sin(90^\circ - \theta) = String.raw\cos \theta $$
      $$ \cos(90^\circ - \theta) = String.raw\sin \theta $$
      $$ \tan(90^\circ - \theta) = String.raw\cot \theta $$
      And their reciprocals. These are the co-function identities.
    </li>
    <li>
      <strong>For $(90^\circ + \theta)$ or $(\pi/2 + \theta)$:</strong>
      $$ \sin(90^\circ + \theta) = String.raw\cos \theta $$
      $$ \cos(90^\circ + \theta) = String.raw-\sin \theta $$
      $$ \tan(90^\circ + \theta) = String.raw-\cot \theta $$
    </li>
    <li>
      <strong>For $(180^\circ - \theta)$ or $(\pi - \theta)$:</strong>
      $$ \sin(180^\circ - \theta) = String.raw\sin \theta $$
      $$ \cos(180^\circ - \theta) = String.raw-\cos \theta $$
      $$ \tan(180^\circ - \theta) = String.raw-\tan \theta $$
    </li>
    <li>
      <strong>For $(180^\circ + \theta)$ or $(\pi + \theta)$:</strong>
      $$ \sin(180^\circ + \theta) = String.raw-\sin \theta $$
      $$ \cos(180^\circ + \theta) = String.raw-\cos \theta $$
      $$ \tan(180^\circ + \theta) = String.raw\tan \theta $$
    </li>
    <li>
      <strong>For $(270^\circ - \theta)$ or $(3\pi/2 - \theta)$:</strong>
      $$ \sin(270^\circ - \theta) = String.raw-\cos \theta $$
      $$ \cos(270^\circ - \theta) = String.raw-\sin \theta $$
      $$ \tan(270^\circ - \theta) = String.raw\cot \theta $$
    </li>
    <li>
      <strong>For $(270^\circ + \theta)$ or $(3\pi/2 + \theta)$:</strong>
      $$ \sin(270^\circ + \theta) = String.raw-\cos \theta $$
      $$ \cos(270^\circ + \theta) = String.raw\sin \theta $$
      $$ \tan(270^\circ + \theta) = String.raw-\cot \theta $$
    </li>
    <li>
      <strong>For $(360^\circ - \theta)$ or $(2\pi - \theta)$:</strong>
      $$ \sin(360^\circ - \theta) = String.raw-\sin \theta $$
      $$ \cos(360^\circ - \theta) = String.raw\cos \theta $$
      $$ \tan(360^\circ - \theta) = String.raw-\tan \theta $$
    </li>
    <li>
      <strong>For $(-\theta)$:</strong>
      $$ \sin(-\theta) = String.raw-\sin \theta $$
      $$ \cos(-\theta) = String.raw\cos \theta $$
      $$ \tan(-\theta) = String.raw-\tan \theta $$
      (Sine and Tangent are odd functions, Cosine is an even function).
    </li>
  </ul>

  <div class= String.raw"important-box" style= String.raw"background: rgba(255,165,0,0.1); border-left: 3px solid orange; padding: 12px 16px; margin-top: 15px; border-radius: 0 6px 6px 0;">
    <strong>General Rule for Allied Angles $(n \cdot 90^\circ \pm \theta)$:</strong>
    <ul>
      <li>If $n$ is <strong>even</strong> (e.g., $180^\circ = String.raw2 \times 90^\circ$, $360^\circ = String.raw4 \times 90^\circ$), the trigonometric ratio <strong>does not change</strong> (sin remains sin, cos remains cos, etc.).</li>
      <li>If $n$ is <strong>odd</strong> (e.g., $90^\circ = String.raw1 \times 90^\circ$, $270^\circ = String.raw3 \times 90^\circ$), the trigonometric ratio <strong>changes to its co-function</strong> (sin to cos, cos to sin, tan to cot, etc.).</li>
      <li>The <strong>sign</strong> of the result is determined by the quadrant in which $(n \cdot 90^\circ \pm \theta)$ lies, using the CAST rule for the <em>original</em> function.</li>
    </ul>
  </div>

  <h4>7. Compound Angle Formulas</h4>
  <p>
    These identities express trigonometric functions of sums or differences of angles in terms of trigonometric functions of the individual angles.
  </p>
  <ul>
    <li>
      $$ \sin(A+B) = String.raw\sin A \cos B + \cos A \sin B $$
    </li>
    <li>
      $$ \sin(A-B) = String.raw\sin A \cos B - \cos A \sin B $$
    </li>
    <li>
      $$ \cos(A+B) = String.raw\cos A \cos B - \sin A \sin B $$
    </li>
    <li>
      $$ \cos(A-B) = String.raw\cos A \cos B + \sin A \sin B $$
    </li>
    <li>
      $$ \tan(A+B) = String.raw\frac{\tan A + \tan B}{1 - \tan A \tan B} $$
    </li>
    <li>
      $$ \tan(A-B) = String.raw\frac{\tan A - \tan B}{1 + \tan A \tan B} $$
    </li>
  </ul>
  <p>
    <em>Conditions:</em> For $\tan(A \pm B)$, $\cos A \neq 0$, $\cos B \neq 0$, and $1 \mp \tan A \tan B \neq 0$.
  </p>

  <h4>8. [[Double Angle Formulas]]</h4>
  <p>
    Derived by setting $A= String.rawB$ in the [[Compound Angle Formulas]].
  </p>
  <ul>
    <li>
      $$ \sin 2A = String.raw2 \sin A \cos A $$
    </li>
    <li>
      $$ \cos 2A = String.raw\cos^2 A - \sin^2 A $$
      $$ \cos 2A = String.raw2 \cos^2 A - 1 $$
      $$ \cos 2A = String.raw1 - 2 \sin^2 A $$
      $$ \cos 2A = String.raw\frac{1 - \tan^2 A}{1 + \tan^2 A} \quad (\text{provided } \tan^2 A \neq -1) $$
    </li>
    <li>
      $$ \tan 2A = String.raw\frac{2 \tan A}{1 - \tan^2 A} $$
      <em>Condition:</em> $\tan A \neq \pm 1$.
    </li>
  </ul>

  <h4>9. [[Half Angle Formulas]]</h4>
  <p>
    Derived from the double angle formulas by replacing $A$ with $A/2$.
  </p>
  <ul>
    <li>
      $$ \sin \frac{A}{2} = String.raw\pm \sqrt{\frac{1 - \cos A}{2}} $$
    </li>
    <li>
      $$ \cos \frac{A}{2} = String.raw\pm \sqrt{\frac{1 + \cos A}{2}} $$
    </li>
    <li>
      $$ \tan \frac{A}{2} = String.raw\pm \sqrt{\frac{1 - \cos A}{1 + \cos A}} = String.raw\frac{1 - \cos A}{\sin A} = String.raw\frac{\sin A}{1 + \cos A} $$
    </li>
  </ul>
  <p>
    <em>Note:</em> The sign ($\pm$) depends on the quadrant of $A/2$.
  </p>

  <h4>10. [[Product-to-Sum Formulas]] and [[Sum-to-Product Formulas]]</h4>
  <p>
    These are derived by adding or subtracting the compound angle formulas.
  </p>
  <h5>10.1. Product-to-Sum:</h5>
  <ul>
    <li>$2 \sin A \cos B = String.raw\sin(A+B) + \sin(A-B)$</li>
    <li>$2 \cos A \sin B = String.raw\sin(A+B) - \sin(A-B)$</li>
    <li>$2 \cos A \cos B = String.raw\cos(A+B) + \cos(A-B)$</li>
    <li>$2 \sin A \sin B = String.raw\cos(A-B) - \cos(A+B)$</li>
  </ul>
  <h5>10.2. Sum-to-Product:</h5>
  <ul>
    <li>$\sin C + \sin D = String.raw2 \sin \left(\frac{C+D}{2}\right) \cos \left(\frac{C-D}{2}\right)$</li>
    <li>$\sin C - \sin D = String.raw2 \cos \left(\frac{C+D}{2}\right) \sin \left(\frac{C-D}{2}\right)$</li>
    <li>$\cos C + \cos D = String.raw2 \cos \left(\frac{C+D}{2}\right) \cos \left(\frac{C-D}{2}\right)$</li>
    <li>$\cos C - \cos D = String.raw-2 \sin \left(\frac{C+D}{2}\right) \sin \left(\frac{C-D}{2}\right)$</li>
  </ul>

  <h4>11. [[Conditional Identities]]</h4>
  <p>
    These identities hold true only under specific conditions, often related to angles in a triangle (e.g., $A+B+C = String.raw\pi$).
  </p>
  <ul>
    <li>If $A+B+C = String.raw\pi$ (i.e., $A, B, C$ are angles of a triangle), then:
      <ul>
        <li>$\sin A + \sin B + \sin C = String.raw4 \cos \frac{A}{2} \cos \frac{B}{2} \cos \frac{C}{2}$</li>
        <li>$\cos A + \cos B + \cos C = String.raw1 + 4 \sin \frac{A}{2} \sin \frac{B}{2} \sin \frac{C}{2}$</li>
        <li>$\tan A + \tan B + \tan C = String.raw\tan A \tan B \tan C$</li>
        <li>$\cot A \cot B + \cot B \cot C + \cot C \cot A = String.raw1$</li>
      </ul>
    </li>
  </ul>

  <h4>12. Real-World Applications</h4>
  <p>
    Trigonometry is not just an abstract mathematical concept; it has profound practical applications:
  </p>
  <ul>
    <li><strong>Navigation:</strong> Essential for determining locations, distances, and directions for ships, aircraft, and spacecraft. [[GPS]] systems rely heavily on trigonometric principles.</li>
    <li><strong>Engineering:</strong> Used in civil engineering for designing bridges and buildings, in mechanical engineering for analyzing forces and motion, and in electrical engineering for studying [[Alternating Current]] (AC) circuits.</li>
    <li><strong>Physics:</strong> Describes wave phenomena (light, sound, radio waves), [[Harmonic motion]], and projectile trajectories.</li>
    <li><strong>Surveying:</strong> Critical for measuring distances and angles in land mapping and construction.</li>
    <li><strong>Astronomy:</strong> Calculating distances to stars and planets, and understanding celestial mechanics.</li>
  </ul>

  <h4>13. Common Mistakes to Avoid</h4>
  <ol>
    <li>
      <strong>Confusing Notation:</strong> $\sin^2 \theta$ means $(\sin \theta)^2$, not $\sin (\theta^2)$. Similarly, $\sin^{-1} \theta$ is the inverse sine function (arcsin), not $1/\sin \theta$.
    </li>
    <li>
      <strong>Incorrect Signs in Quadrants:</strong> A frequent error is misapplying the CAST rule, leading to incorrect signs for trigonometric ratios in different quadrants. Always visualize the angle on the unit circle.
    </li>
    <li>
      <strong>Algebraic Errors:</strong> Treating trigonometric expressions as simple algebraic terms. For example, $(\sin \theta + \cos \theta)^2$ is NOT $\sin^2 \theta + \cos^2 \theta$. It expands to $\sin^2 \theta + \cos^2 \theta + 2 \sin \theta \cos \theta = String.raw1 + \sin 2\theta$.
    </li>
    <li>
      <strong>Domain and Range Restrictions:</strong> For functions like $\tan \theta$, $\sec \theta$, $\csc \theta$, $\cot \theta$, remember their undefined points (e.g., $\tan 90^\circ$ is undefined). Also, $\sin \theta$ and $\cos \theta$ values are always between $-1$ and $1$, inclusive.
    </li>
    <li>
      <strong>Misapplying Allied Angle Rules:</strong> Incorrectly changing the function (e.g., $\sin(180^\circ - \theta)$ to $\cos \theta$) or assigning the wrong sign. Remember: $n \cdot 90^\circ \pm \theta$: if $n$ is odd, function changes; if $n$ is even, function remains. Sign is based on the original function's quadrant.
    </li>
  </ol>

  <h4>14. Shortcuts & Tricks</h4>
  <ul>
    <li>
      <strong>Hand Trick for $0^\circ,
`;

EXPANDED_NOTES_DATA["inverse-trig"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Inverse Trigonometric Functions
  </h3>

  <h4><strong>1. Formal Definition & Principal Value Branches</strong></h4>
  <p>The <strong>inverse trigonometric functions</strong> are the set of functions that reverse the action of the six elementary trigonometric functions on a restricted domain so that each becomes one‑to‑one.  For a given trigonometric function <em>f</em>, its inverse is denoted by <strong>f<sup>−1</sup></strong> (e.g., <strong>sin<sup>−1</sup></strong>, <strong>cos<sup>−1</sup></strong>, <strong>tan<sup>−1</sup></strong>).  The restriction is called the <em>principal value branch</em> and is chosen to make the inverse single‑valued.</p>

  <div class= String.raw"important-box" style= String.raw"border-left:4px solid var(--accent); padding:10px; margin:15px 0; background:#f9f9f9;">
    <strong>Principal Value Ranges</strong>
    <table style= String.raw"width:100%; border-collapse:collapse;">
      <tr style= String.raw"border-bottom:1px solid #ccc;">
        <th style= String.raw"text-align:left; padding:5px;">Inverse</th>
        <th style= String.raw"text-align:left; padding:5px;">Domain</th>
        <th style= String.raw"text-align:left; padding:5px;">Range (Principal Value)</th>
      </tr>
      <tr style= String.raw"border-bottom:1px solid #eee;">
        <td style= String.raw"padding:5px;"><strong>sin<sup>−1</sup> x</strong></td>
        <td style= String.raw"padding:5px;">$-1\le x\le 1$</td>
        <td style= String.raw"padding:5px;">$[-\frac{\pi}{2},\;\frac{\pi}{2}]$</td>
      </tr>
      <tr style= String.raw"border-bottom:1px solid #eee;">
        <td style= String.raw"padding:5px;"><strong>cos<sup>−1</sup> x</strong></td>
        <td style= String.raw"padding:5px;">$-1\le x\le 1$</td>
        <td style= String.raw"padding:5px;">$[0,\;\pi]$</td>
      </tr>
      <tr style= String.raw"border-bottom:1px solid #eee;">
        <td style= String.raw"padding:5px;"><strong>tan<sup>−1</sup> x</strong></td>
        <td style= String.raw"padding:5px;">$-\infty < x < \infty$</td>
        <td style= String.raw"padding:5px;">$(-\frac{\pi}{2},\;\frac{\pi}{2})$</td>
      </tr>
      <tr style= String.raw"border-bottom:1px solid #eee;">
        <td style= String.raw"padding:5px;"><strong>cot<sup>−1</sup> x</strong></td>
        <td style= String.raw"padding:5px;">$-\infty < x < \infty$</td>
        <td style= String.raw"padding:5px;">$(0,\;\pi)$</td>
      </tr>
      <tr style= String.raw"border-bottom:1px solid #eee;">
        <td style= String.raw"padding:5px;"><strong>sec<sup>−1</sup> x</strong></td>
        <td style= String.raw"padding:5px;">$|x|\ge 1$</td>
        <td style= String.raw"padding:5px;">$[0,\;\pi]\setminus\{\frac{\pi}{2}\}$</td>
      </tr>
      <tr>
        <td style= String.raw"padding:5px;"><strong>csc<sup>−1</sup> x</strong></td>
        <td style= String.raw"padding:5px;">$|x|\ge 1$</td>
        <td style= String.raw"padding:5px;">$[-\frac{\pi}{2},\;\frac{\pi}{2}]\setminus\{0\}$</td>
      </tr>
    </table>
  </div>

  <h4><strong>2. Fundamental Identities Derived from Definitions</strong></h4>
  <p>Starting from the definition $y= String.raw\sin^{-1}x\iff \sin y= String.rawx$ with $y\in[-\frac{\pi}{2},\frac{\pi}{2}]$, we can obtain a host of identities that are indispensable in solving NDA / CDS problems.</p>
  <ul>
    <li><strong>Reciprocal Relations</strong>  
      <ul>
        <li>$\displaystyle \sin^{-1}x+\cos^{-1}x= String.raw\frac{\pi}{2}$, \quad valid for $x\in[-1,1]$.</li>
        <li>$\displaystyle \tan^{-1}x+\cot^{-1}x= String.raw\frac{\pi}{2}$, \quad valid for $x\in\mathbb{R}$.</li>
        <li>$\displaystyle \sec^{-1}x+\csc^{-1}x= String.raw\frac{\pi}{2}$, \quad valid for $|x|\ge 1$.</li>
      </ul>
    </li>
    <li><strong>Odd–Even Properties</strong>  
      <ul>
        <li>$\displaystyle \sin^{-1}(-x)= String.raw-\sin^{-1}x$ (odd).</li>
        <li>$\displaystyle \cos^{-1}(-x)= String.raw\pi-\cos^{-1}x$ (even‑type symmetry).</li>
        <li>$\displaystyle \tan^{-1}(-x)= String.raw-\tan^{-1}x$ (odd).</li>
      </ul>
    </li>
    <li><strong>Double‑Angle Transformations</strong> (derived by applying the double‑angle formulas to the defining equations).  
      <ul>
        <li>$\displaystyle \sin^{-1}x= String.raw2\sin^{-1}\!\Big(\frac{x}{1+\sqrt{1-x^{2}}}\Big)$, \quad $|x|\le 1$.</li>
        <li>$\displaystyle \tan^{-1}x= String.raw\frac{1}{2}\tan^{-1}\!\Big(\frac{2x}{1-x^{2}}\Big)$, \quad $x\neq\pm1$.</li>
      </ul>
    </li>
  </ul>

  <h4><strong>3. Derivatives & Integrals – From First Principles</strong></h4>
  <p>Using implicit differentiation on the defining equation $\sin y= String.rawx$, we get:</p>
  <p><strong>Derivative of $\sin^{-1}x$</strong>:</p>
  $$\frac{d}{dx}\big(\sin^{-1}x\big)= String.raw\frac{1}{\sqrt{1-x^{2}}},\qquad |x|<1$$
  <p>Derivation:</p>
  <ol>
    <li>Let $y= String.raw\sin^{-1}x \;\Rightarrow\; \sin y= String.rawx$.</li>
    <li>Differentiate both sides w.r.t. $x$: $\cos y\,\frac{dy}{dx}= String.raw1$.</li>
    <li>Since $\cos y= String.raw\sqrt{1-\sin^{2}y}= String.raw\sqrt{1-x^{2}}$ (principal branch gives non‑negative root), we have $\displaystyle \frac{dy}{dx}= String.raw\frac{1}{\sqrt{1-x^{2}}}$.</li>
  </ol>

  <p>Analogously, the other derivatives are:</p>
  <ul>
    <li>$\displaystyle \frac{d}{dx}\big(\cos^{-1}x\big)= String.raw-\frac{1}{\sqrt{1-x^{2}}},\qquad |x|<1$</li>
    <li>$\displaystyle \frac{d}{dx}\big(\tan^{-1}x\big)= String.raw\frac{1}{1+x^{2}},\qquad x\in\mathbb{R}$</li>
    <li>$\displaystyle \frac{d}{dx}\big(\cot^{-1}x\big)= String.raw-\frac{1}{1+x^{2}},\qquad x\in\mathbb{R}$</li>
    <li>$\displaystyle \frac{d}{dx}\big(\sec^{-1}x\big)= String.raw\frac{1}{|x|\sqrt{x^{2}-1}},\qquad |x|>1$</li>
    <li>$\displaystyle \frac{d}{dx}\big(\csc^{-1}x\big)= String.raw-\frac{1}{|x|\sqrt{x^{2}-1}},\qquad |x|>1$</li>
  </ul>

  <p>Integration formulas that frequently appear in NDA / AFCAT questions:</p>
  <ul>
    <li>$\displaystyle \int \frac{dx}{\sqrt{1-x^{2}}}= String.raw\sin^{-1}x+C$</li>
    <li>$\displaystyle \int \frac{dx}{1+x^{2}}= String.raw\tan^{-1}x+C$</li>
    <li>$\displaystyle \int \frac{dx}{x\sqrt{x^{2}-1}}= String.raw\sec^{-1}|x|+C$ (for $|x|>1$)</li>
  </ul>

  <h4><strong>4. Composite Angles and Addition Formulas</strong></h4>
  <p>When the argument of an inverse function is a rational expression, we can often convert it to a standard angle using addition formulas. Consider:</p>
  $$\sin^{-1}\!\Big(\frac{2\tan\theta}{1+\tan^{2}\theta}\Big)= String.raw2\theta,\qquad -\frac{\pi}{4}<\theta<\frac{\pi}{4}$$
  <p>Derivation uses the identity $\displaystyle \sin 2\theta= String.raw\frac{2\tan\theta}{1+\tan^{2}\theta}$ and the principal range of $\sin^{-1}$.</p>

  <p>Similarly:</p>
  $$\tan^{-1}\!\Big(\frac{\sin\alpha}{\cos\alpha}\Big)= String.raw\alpha,\qquad -\frac{\pi}{2}<\alpha<\frac{\pi}{2}$$
  <p>which follows directly from $\tan\alpha= String.raw\frac{\sin\alpha}{\cos\alpha}$.</p>

  <h4><strong>5. Tables of Frequently Used Exact Values</strong></h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin:10px 0;">
    <tr style= String.raw"border-bottom:1px solid #ccc;">
      <th style= String.raw"padding:5px; text-align:left;">Argument</th>
      <th style= String.raw"padding:5px; text-align:left;">$\sin^{-1}$</th>
      <th style= String.raw"padding:5px; text-align:left;">$\cos^{-1}$</th>
      <th style= String.raw"padding:5px; text-align:left;">$\tan^{-1}$</th>
    </tr>
    <tr style= String.raw"border-bottom:1px solid #eee;">
      <td style= String.raw"padding:5px;">$0$</td>
      <td style= String.raw"padding:5px;">$0$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{2}$</td>
      <td style= String.raw"padding:5px;">$0$</td>
    </tr>
    <tr style= String.raw"border-bottom:1px solid #eee;">
      <td style= String.raw"padding:5px;">$1$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{2}$</td>
      <td style= String.raw"padding:5px;">$0$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{4}$</td>
    </tr>
    <tr style= String.raw"border-bottom:1px solid #eee;">
      <td style= String.raw"padding:5px;">$\frac{1}{\sqrt{2}}$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{4}$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{4}$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{8}$</td>
    </tr>
    <tr style= String.raw"border-bottom:1px solid #eee;">
      <td style= String.raw"padding:5px;">$\frac{\sqrt{3}}{2}$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{3}$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{6}$</td>
      <td style= String.raw"padding:5px;">$\frac{\pi}{3}$</td>
    </tr>
    <tr>
      <td style= String.raw"padding:5px;">$-\frac{1}{\sqrt{2}}$</td>
      <td style= String.raw"padding:5px;">$-\frac{\pi}{4}$</td>
      <td style= String.raw"padding:5px;">$\frac{3\pi}{4}$</td>
      <td style= String.raw"padding:5px;">$-\frac{\pi}{8}$</td>
    </tr>
  </table>

  <h4><strong>6. Graphical Characteristics (Qualitative)</strong></h4>
  <ul>
    <li>All six inverses are <em>continuous</em> and <em>monotonic</em> on their principal domains.</li>
    <li><strong>sin<sup>−1</sup> x</strong> is an odd function; its graph is symmetric about the origin.</li>
    <li><strong>cos<sup>−1</sup> x</strong> is decreasing on $[-1,1]$, reflecting its even‑type symmetry.</li>
    <li><strong>tan<sup>−1</sup> x</strong> has horizontal asymptotes $y= String.raw\pm\frac{\pi}{2}$ as $x\to\pm\infty$.</li>
    <li>Sec<sup>−1</sup> and csc<sup>−1</sup> have vertical asymptotes at $x= String.raw0$ and a break at $x= String.raw\pm1$ because of the excluded $\frac{\pi}{2}$ or $0$ in their ranges.</li>
  </ul>

  <h4><strong>7. Common Mistakes</strong></h4>
  <ul>
    <li><strong>Ignoring Principal Value Restrictions</strong> – Students often apply $\sin^{-1}(\sin\theta)= String.raw\theta$ without checking whether $\theta$ lies inside $[-\frac{\pi}{2},\frac{\pi}{2}]$. The correct identity is $\sin^{-1}(\sin\theta)= String.raw(-1)^{k}\theta+k\pi$ where $k$ is chosen to bring the result into the principal interval.</li>
    <li><strong>Sign Errors in Derivatives</strong> – The derivative of $\cos^{-1}x$ is negative; forgetting the minus sign leads to wrong integrals.</li>
    <li><strong>Mis‑using Reciprocal Identities</strong> – Treating $\sec^{-1}x$ as simply $1/\cos^{-1}x$ is wrong; the correct relation is $\sec^{-1}x= String.raw\cos^{-1}\!\big(\frac{1}{x}\big)$ with domain $|x|\ge1$.</li>
    <li><strong>Incorrect Handling of Absolute Values</strong> – In the derivative of $\sec^{-1}x$, the factor $|x|$ is crucial; omitting it gives sign errors for negative $x$.</li>
    <li><strong>Confusing Degrees and Radians</strong> – NDA/CDS questions always expect radian measure unless explicitly stated. Plugging degree values into formulas yields disastrous numerical errors.</li>
  </ul>

  <h4><strong>8. Shortcuts & Tricks for Competitive Exams</strong></h4>
  <ul>
    <li><strong>Use the “Sum‑to‑Product” Inverse Trick</strong>:  
      $$\sin^{-1}a+\sin^{-1}b= String.raw\sin^{-1}\!\Big(a\sqrt{1-b^{2}}+b\sqrt{1-a^{2}}\Big)$$  
      when $a,b$ satisfy $a^{2}+b^{2}+2ab\sqrt{1-a^{2}}\sqrt{1-b^{2}}\le1$. This reduces a pair of inverse sines to a single one.</li>
    <li><strong>Rapid Conversion between $\tan^{-1}$ and $\sin^{-1}$</strong>:  
      $$\tan^{-1}x= String.raw\sin^{-1}\!\Big(\frac{x}{\sqrt{1+x^{2}}}\Big)$$  
      Useful when the argument appears as $\frac{p}{\sqrt{p^{2}+q^{2}}}$.</li>
    <li><strong>Memory Mnemonic for Principal Ranges</strong>:  
      <em>“Sine and Tangent like to sit at the centre, Cosine & Secant stay on the right, Cotangent & Cosecant on the left.”</em> This helps recall the intervals instantly.</li>
    <li><strong>Fast Evaluation of $\tan^{-1}$ Sums</strong>:  
      $$\tan^{-1}a+\tan^{-1}b= String.raw\tan^{-1}\!\Big(\frac{a+b}{1-ab}\Big)$$  
      provided $ab<1$; otherwise add/subtract $\pi$ appropriately.</li>
    <li><strong>Exploiting Symmetry</strong>:  
      For any $x$, $\sin^{-1}(-x)= String.raw-\sin^{-1}x$ and $\tan^{-1}(-x)= String.raw-\tan^{-1}x$; thus, compute only for positive $x$ and attach the sign later.</li>
  </ul>

  <h4><strong>9. Worked Example 1 – Evaluating a Complex Inverse Sum</strong></h4>
  <p><strong>Problem:</strong> Find the exact value of $S= String.raw\sin^{-1}\!\Big(\frac{3}{5}\Big)+\cos^{-1}\!\Big(\frac{4}{5}\Big)$.</p>
  <p><strong>Solution Steps:</strong></p>
  <ol>
    <li>Recognise the complementary relationship $\sin^{-1}x+\cos^{-1}x= String.raw\frac{\pi}{2}$.</li>
    <li>Observe that $\frac{3}{5}$ and $\frac{4}{5}$ are the legs of a $3\!-\!4\!-\!5$ right triangle, satisfying $ \big(\frac{3}{5}\big)^{2}+ \big(\frac{4}{5}\big)^{2}= String.raw1$.</li>
    <li>Since both arguments lie in $[0,1]$, the identity applies directly:
      $$S= String.raw\sin^{-1}\!\Big(\frac{3}{5}\Big)+\cos^{-1}\!\Big(\frac{4}{5}\Big)= String.raw\frac{\pi}{2}.$$</li>
    <li>Thus the exact value is $\boxed{\dfrac{\pi}{2}}$.</li>
  </ol>

  <h4><strong>10. Worked Example 2 – Solving an Equation Involving $\tan^{-1}$</strong></h4>
  <p><strong>Problem:</strong> Solve for $x$ (real) in $$\tan^{-1}x+\tan^{-1}\!\Big(\frac{1}{x}\Big)= String.raw\frac{\pi}{4}.$$</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Use the addition formula for $\tan^{-1}$:  
      $$\tan^{-1}a+\tan^{-1}b= String.raw\tan^{-1}\!\Big(\frac{a+b}{1-ab}\Big)$$  
      provided $ab<1$ (or else adjust by $\pm\pi$). Here $a= String.rawx$, $b= String.raw\frac{1}{x}$, so $ab= String.raw1$.</li>
    <li>Because $ab= String.raw1$, the direct formula would give a denominator $0$, indicating the sum equals $\frac{\pi}{2}$ or $-\frac{\pi}{2}$ depending on signs. However the given sum is $\frac{\pi}{4}$, so we must treat the case carefully.</li>
    <li>Consider the identity $\tan^{-1}x+\tan^{-1}\!\Big(\frac{1}{x}\Big)= String.raw\begin{cases}
        \frac{\pi}{2}, & x>0\\[4pt]
        -\frac{\pi}{2}, & x<0
      \end{cases}$.</li>
    <li>Set $\frac{\pi}{2}= String.raw\frac{\pi}{4}$ gives contradiction; therefore the only possibility is that one of the arguments lies at the branch cut, i.e., $x= String.raw1$ or $x= String.raw-1$ where the principal value of $\tan^{-1}$ is $\pm\frac{\pi}{4}$. Check $x= String.raw1$:
      $$\tan^{-1}1+\tan^{-1}1= String.raw\frac{\pi}{4}+\frac{\pi}{4}= String.raw\frac{\pi}{2}\neq\frac{\pi}{4}.$$</li>
    <li>Check $x= String.raw-1$:
      $$\tan^{-1}(-1)+\tan^{-1}(-1)= String.raw-\frac{\pi}{4}-\frac{\pi}{4}= String.raw-\frac{\pi}{2}\neq\frac{\pi}{4}.$$</li>
    <li>Thus no real $x$ satisfies the equation. However, if we allow the extended definition with addition of $\pi$, we can write:  
      $$\tan^{-1}x+\tan^{-1}\!\Big(\frac{1}{x}\Big)= String.raw\frac{\pi}{4}+k\pi,\quad k\in\mathbb{Z}.$$  
      Setting $k= String.raw-\tfrac{1}{4}$ is not integral, so still no solution. Hence <strong>no real solution exists</strong>. (Answer: $\varnothing$.)</li>
  </ol>

  <h4><strong>11. Advanced Result – Inverse Function Composition</strong></h4>
  <p>For $|x|\le1$, the composition $\sin^{-1}(\sin(\sin^{-1}x))$ trivially returns $x$, but the reverse composition $\sin(\sin^{-1}x)$ yields $x$ for all $x$ in the domain. However, for composite forms like $\sin^{-1}(\cos\theta)$, we must convert using the identity $\cos\theta= String.raw\sin\!\big(\frac{\pi}{2}-\theta\big)$ and then apply the principal range:</p>
  $$\sin^{-1}(\cos\theta)= String.raw\sin^{-1}\!\Big(\sin\!\big(\tfrac{\pi}{2}-\theta\big)\Big)= String.raw\begin{cases}
    \tfrac{\pi}{2}-\theta, & -\frac{\pi}{2}\le\theta\le\frac{\pi}{2}\\[4pt]
    \theta-\tfrac{\pi}{2}, & \frac{\pi}{2}<\theta\le\frac{3\pi}{2}
  \end{cases}$$
  <p>This piecewise result is a frequent source of errors in NDA geometry questions involving inverse functions.</p>

  <h4><strong>12. Summary of Key Formulas (All Wrapped in <strong> Tags)</strong></h4>
  <ul>
    <li><strong>$\displaystyle \sin^{-1}x+\cos^{-1}x= String.raw\frac{\pi}{2}$</strong></li>
    <li><strong>$\displaystyle \tan^{-1}x+\cot^{-1}x= String.raw\frac{\pi}{2}$</strong></li>
    <li><strong>$\displaystyle \frac{d}{dx}\sin^{-1}x= String.raw\frac{1}{\sqrt{1-x^{2}}}$</strong></li>
    <li><strong>$\displaystyle \frac{d}{dx}\cos^{-1}x= String.raw-\frac{1}{\sqrt{1-x^{2}}}$</strong></li>
    <li><strong>$\displaystyle \frac{d}{dx}\tan^{-1}x= String.raw\frac{1}{1+x^{2}}$</strong></li>
    <li><strong>$\displaystyle \tan^{-1}x= String.raw\sin^{-1}\!\Big(\frac{x}{\sqrt{1+x^{2}}}\Big)$</strong></li>
    <li><strong>$\displaystyle \sin^{-1}x= String.raw2\sin^{-1}\!\Big(\frac{x}{1+\sqrt{1-x^{2}}}\Big)$</strong></li>
    <li><strong>$\displaystyle \tan^{-1}a+\tan^{-1}b= String.raw\tan^{-1}\!\Big(\frac{a+b}{1-ab}\Big)$</strong> (with appropriate $\pm\pi$ adjustment)</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li><strong>sin<sup>−1</sup> x + cos<sup>−1</sup> x = String.rawπ/2</strong> for every $x\in[-1,1]$.</li>
      <li><strong>tan<sup>−1</sup> x + tan<sup>−1</sup> (1/x) = String.rawπ/2</strong> when $x>0$, and $= String.raw-π/2$ when $x<0$.</li>
      <li><strong>Derivative of sin<sup>−1</sup> x</strong> is $1/\sqrt{1-x^{2}}$, a pattern that appears in integration of $\frac{1}{\sqrt{1-x^{2}}}$.</li>
      <li><strong>Principal range of tan<sup>−1</sup> x</strong> is $(-π/2, π/2)$; never write $π/2$ as a value.</li>
      <li><strong>Conversion trick</strong>: $\tan^{-1}x = String.raw\sin^{-1}\!\big(\frac{x}{\sqrt{1+x^{2}}}\big)$ – essential for expressions like $\tan^{-1}\!\big(\frac{p}{q}\big)$.</li>
      <li><strong>When $|x|>1$</strong>, use $\sec^{-1}x = String.raw\cos^{-1}\!\big(\frac{1}{x}\big)$ and remember the excluded $\frac{\pi}{2}$ in its range.</li>
      <li><strong>Sum‑to‑product for inverse sines</strong> reduces two angles to one: $\sin^{-1}a+\sin^{-1}b = String.raw\sin^{-1}(a\sqrt{1-b^{2}}+b\sqrt{1-a^{2}})$.</li>
      <li><strong>Odd–even property</strong>: $\sin^{-1}(-x) = String.raw-\sin^{-1}x$, $\cos^{-1}(-x)= String.raw\pi-\cos^{-1}x$ – helps to quickly handle negative arguments.</li>
      <li><strong>Special right‑triangle values</strong>: $\sin^{-1}\frac{3}{5} = String.raw\arcsin(0.6) = String.raw\text{≈ }0.6435$ rad, often paired with $\cos^{-1}\frac{4}{5}$ to give $π/2$.</li>
      <li><strong>Always keep angles in radians</strong> unless the question explicitly mentions degrees – a common source of loss of marks.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["quadratic-eq"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Quadratic Equations
  </h3>

  <h4>1. Definition and Standard Form</h4>
  <p>A <strong>quadratic equation</strong> is any polynomial equation of degree two. In its most compact representation it is written as</p>
  $$ax^{2}+bx+c= String.raw0$$
  <ul>
    <li><strong>a</strong> – the <em>leading coefficient</em>; must satisfy <strong>a\neq0</strong> for the equation to remain quadratic.</li>
    <li><strong>b</strong> – the <em>linear coefficient</em>; can be any real (or complex) number.</li>
    <li><strong>c</strong> – the <em>constant term</em>; also any real (or complex) number.</li>
  </ul>
  <p>When <strong>a</strong>, <strong>b</strong>, <strong>c</strong> are integers, the equation is often called an [[Integral Quadratic]]. The set of all solutions (roots) is denoted by <strong>α</strong> and <strong>β</strong>.</p>

  <h4>2. Derivation of the Quadratic Formula from First Principles</h4>
  <p>Starting from the standard form, we can complete the square:</p>
  $$ax^{2}+bx+c= String.raw0\quad\Longrightarrow\quad x^{2}+\frac{b}{a}x+\frac{c}{a}= String.raw0$$
  <p>Move the constant term to the right side:</p>
  $$x^{2}+\frac{b}{a}x= String.raw-\frac{c}{a}$$
  <p>Add $\left(\frac{b}{2a}\right)^{2}$ to both sides to form a perfect square:</p>
  $$x^{2}+\frac{b}{a}x+\left(\frac{b}{2a}\right)^{2}= String.raw\left(\frac{b}{2a}\right)^{2}-\frac{c}{a}$$
  <p>The left–hand side becomes $\left(x+\frac{b}{2a}\right)^{2}$, giving:</p>
  $$\left(x+\frac{b}{2a}\right)^{2}= String.raw\frac{b^{2}-4ac}{4a^{2}}$$
  <p>Taking square roots (both $+$ and $-$) yields:</p>
  $$x+\frac{b}{2a}= String.raw\pm\frac{\sqrt{b^{2}-4ac}}{2a}$$
  <p>Finally, isolate $x$:</p>
  $$\boxed{x= String.raw\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}}$$
  <p>Here the expression $Δ= String.rawb^{2}-4ac$ is called the <strong>discriminant</strong>. Its sign determines the nature of the roots:</p>
  <ul>
    <li><strong>Δ>0</strong> – two distinct real roots.</li>
    <li><strong>Δ= String.raw0</strong> – a repeated real root (double root).</li>
    <li><strong>Δ<0</strong> – two complex conjugate roots.</li>
  </ul>

  <h4>3. Vieta’s Relations – Connecting Coefficients and Roots</h4>
  <p>For any quadratic $ax^{2}+bx+c= String.raw0$ with roots $α$ and $β$, the following identities hold (known as [[Vieta's formulas]]):</p>
  $$\begin{aligned}
  α+β &= String.raw-\frac{b}{a}\\[4pt]
  αβ   &= String.raw\frac{c}{a}
  \end{aligned}$$
  <p>These relations are extremely useful for problems that ask for sums or products of roots without explicitly solving the equation.</p>

  <h4>4. Classification of Roots – Real vs. Complex</h4>
  <div class= String.raw"important-box" style= String.raw"background:#202030; padding:10px; margin:12px 0; border-left:4px solid var(--accent);">
    <strong>Critical Distinction:</strong> The discriminant $Δ$ governs not only the count of real solutions but also the magnitude of the imaginary part when $Δ<0$. If $Δ<0$, the roots can be expressed as
    $$x= String.raw\frac{-b}{2a}\pm i\frac{\sqrt{|Δ|}}{2a}$$
    where $i= String.raw\sqrt{-1}$ is the <strong>imaginary unit</strong>.
  </div>

  <h4>5. Special Cases and Edge Conditions</h4>
  <ol>
    <li><strong>Pure Quadratic (b= String.raw0)</strong>: $ax^{2}+c= String.raw0\;\Longrightarrow\;x= String.raw\pm\sqrt{-\frac{c}{a}}$. Real roots exist only if $ac<0$.</li>
    <li><strong>Linear Degeneration (c= String.raw0)</strong>: $ax^{2}+bx= String.raw0\;\Longrightarrow\;x(ax+b)= String.raw0\;\Longrightarrow\;x= String.raw0\;$ or $\;x= String.raw-\frac{b}{a}$. This demonstrates the <em>factor theorem</em> in action.</li>
    <li><strong>Monic Quadratic (a= String.raw1)</strong>: Simplifies Vieta’s relations to $α+β= String.raw-b$ and $αβ= String.rawc$, and the formula reduces to $x= String.raw\frac{-b\pm\sqrt{b^{2}-4c}}{2}$.</li>
    <li><strong>Parametric Quadratics</strong>: When coefficients depend on a parameter $k$, discriminant analysis yields conditions on $k$ for real/complex roots. Example: $x^{2}+kx+1= String.raw0$ has real roots iff $k^{2}\ge4$.</li>
  </ol>

  <h4>6. Methods of Solving Quadratics</h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin:12px 0;">
    <thead style= String.raw"background:#2a2a3a;">
      <tr>
        <th style= String.raw"border:1px solid #444;padding:6px;">Method</th>
        <th style= String.raw"border:1px solid #444;padding:6px;">When to Use</th>
        <th style= String.raw"border:1px solid #444;padding:6px;">Key Steps</th>
        <th style= String.raw"border:1px solid #444;padding:6px;">Time Complexity (exam)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:6px;"><strong>Quadratic Formula</strong></td>
        <td style= String.raw"border:1px solid #444;padding:6px;">All generic cases</td>
        <td style= String.raw"border:1px solid #444;padding:6px;">Compute $Δ$, take square root, substitute</td>
        <td style= String.raw"border:1px solid #444;padding:6px;">O(1)</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:6px;"><strong>Completing the Square</strong></td>
        <td style= String.raw"border:1px solid #444;padding:6px;">When $a= String.raw1$ or $a$ is a perfect square</td>
        <td style= String.raw"border:1px solid #444;padding:6px;">Rewrite as $(x+h)^{2}= String.rawk$</td>
        <td style= String.raw"border:1px solid #444;padding:6px;">O(1)</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:6px;"><strong>Factorisation</strong></td>
        <td style= String.raw"border:1px solid #444;padding:6px;">When integer roots are expected (e.g., in NDA)</td>
        <td style= String.raw"border:1px solid #444;padding:6px;">Find two numbers multiplying to $ac$ and adding to $b$</td>
        <td style= String.raw"border:1px solid #444;padding:6px;">Best case O(√|ac|)</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:6px;"><strong>Graphical Insight</strong></td>
        <td style= String.raw"border:1px solid #444;padding:6px;">Quick sign‑check for root existence</td>
        <td style= String.raw"border:1px solid #444;padding:6px;">Analyse parabola opening direction (sign of $a$) and vertex</td>
        <td style= String.raw"border:1px solid #444;padding:6px;">Negligible</td>
      </tr>
    </tbody>
  </table>

  <h4>7. Worked Example 1 – Standard Quadratic</h4>
  <p><strong>Problem:</strong> Solve $3x^{2}-7x+2= String.raw0$.</p>
  <ol>
    <li>Identify coefficients: $a= String.raw3$, $b= String.raw-7$, $c= String.raw2$.</li>
    <li>Compute discriminant:
      $$Δ= String.rawb^{2}-4ac= String.raw(-7)^{2}-4\cdot3\cdot2= String.raw49-24= String.raw25.$$</li>
    <li>Since $Δ>0$, there are two distinct real roots.</li>
    <li>Apply quadratic formula:
      $$x= String.raw\frac{-b\pm\sqrt{Δ}}{2a}= String.raw\frac{-(-7)\pm\sqrt{25}}{2\cdot3}
      = String.raw\frac{7\pm5}{6}.$$
    </li>
    <li>Separate the two possibilities:
      <ul>
        <li>$x_{1}= String.raw\dfrac{7+5}{6}= String.raw\dfrac{12}{6}= String.raw2$</li>
        <li>$x_{2}= String.raw\dfrac{7-5}{6}= String.raw\dfrac{2}{6}= String.raw\dfrac13$</li>
      </ul>
    </li>
    <li>Verify using Vieta’s relations:
      $$α+β= String.raw2+\frac13= String.raw\frac{7}{3}= String.raw-\frac{b}{a}= String.raw-\frac{-7}{3}= String.raw\frac{7}{3}$$
      $$αβ= String.raw2\cdot\frac13= String.raw\frac23= String.raw\frac{c}{a}= String.raw\frac{2}{3}$$
      Both checks hold, confirming the solution.</li>
  </ol>

  <h4>8. Worked Example 2 – Quadratic with Complex Roots</h4>
  <p><strong>Problem:</strong> Find the roots of $x^{2}+4x+8= String.raw0$ and express them in the form $p\pm qi$.</p>
  <ol>
    <li>Coefficients: $a= String.raw1$, $b= String.raw4$, $c= String.raw8$.</li>
    <li>Discriminant:
      $$Δ= String.rawb^{2}-4ac= String.raw4^{2}-4\cdot1\cdot8= String.raw16-32= String.raw-16.$$
    </li>
    <li>Since $Δ<0$, roots are complex conjugates.</li>
    <li>Quadratic formula:
      $$x= String.raw\frac{-b\pm\sqrt{Δ}}{2a}= String.raw\frac{-4\pm\sqrt{-16}}{2}
      = String.raw\frac{-4\pm4i}{2}.$$
    </li>
    <li>Simplify:
      $$x_{1}= String.raw\frac{-4+4i}{2}= String.raw-2+2i,\qquad
      x_{2}= String.raw\frac{-4-4i}{2}= String.raw-2-2i.$$
    </li>
    <li>Thus the roots are $-2\pm2i$, i.e., $p= String.raw-2$, $q= String.raw2$.</li>
    <li>Check with Vieta’s:
      $$α+β= String.raw(-2+2i)+(-2-2i)= String.raw-4= String.raw-\frac{b}{a}= String.raw-4,$$
      $$αβ= String.raw(-2+2i)(-2-2i)= String.raw(-2)^{2}-(2i)^{2}= String.raw4-(-4)= String.raw8= String.raw\frac{c}{a}= String.raw8.$$
      The relations are satisfied, confirming correctness.</li>
  </ol>

  <h4>9. Common Mistakes</h4>
  <ul>
    <li><strong>Dropping the negative sign of $b$</strong> while applying the formula – leads to $x= String.raw\frac{b\pm\sqrt{Δ}}{2a}$ instead of $\frac{-b\pm\sqrt{Δ}}{2a}$.</li>
    <li><strong>Mis‑computing the discriminant</strong> by forgetting to square $b$ or by using $4ac$ instead of $4\cdot a\cdot c$ when $a$ or $c$ are not 1.</li>
    <li><strong>Forgetting to simplify $\sqrt{Δ}$</strong> when $Δ$ is a perfect square – this wastes time and can cause arithmetic errors.</li>
    <li><strong>Assuming $Δ= String.raw0$ always yields a single root</strong> without checking multiplicity; the double root must be written as $x= String.raw-\frac{b}{2a}$, not as two distinct numbers.</li>
  </ul>

  <h4>10. Shortcuts & Tricks for Competitive Exams</h4>
  <ul>
    <li><strong>“Δ‑quick test”</strong>: For integer coefficients, compute $Δ$ modulo small primes (e.g., mod 4) to instantly rule out perfect squares, saving time on unnecessary square‑root calculations.</li>
    <li><strong>“Sum‑Product Method”</strong>: When the question asks for $α+β$ or $αβ$, directly use Vieta’s formulas without solving the equation.</li>
    <li><strong>“Factor‑by‑Grouping”</strong> for monic quadratics: Look for two numbers $m,n$ such that $m+n= String.rawb$ and $mn= String.rawc$. This avoids the formula entirely.</li>
    <li><strong>“Half‑Coefficient Trick”</strong>: If $b$ is even, rewrite $x^{2}+bx+c$ as $\left(x+\frac{b}{2}\right)^{2}= String.raw\frac{b^{2}}{4}-c$, then take square roots – often quicker than full formula.</li>
    <li><strong>“Complex‑Root Shortcut”</strong>: When $Δ$ is negative, directly write roots as $-\frac{b}{2a}\pm i\frac{\sqrt{|Δ|}}{2a}$ without expanding $\sqrt{-Δ}$.</li>
    <li><strong>“Parameter Discriminant”</strong>: For equations like $x^{2}+kx+1= String.raw0$, set $Δ= String.rawk^{2}-4$ and analyse sign of $Δ$ to answer root‑nature questions without solving.</li>
  </ul>

  <h4>11. Advanced Topics – Connection to Higher Algebra</h4>
  <p>The quadratic equation is a gateway to the [[Fundamental Theorem of Algebra]], which asserts that every non‑constant polynomial of degree $n$ has exactly $n$ complex roots (counted with multiplicity). In the case $n= String.raw2$, the discriminant provides a complete classification.</p>
  <p>Moreover, the coefficients $a,b,c$ can be expressed in terms of the roots via [[Newton's Identities]] (a special case of Vieta’s relations). This perspective is useful when dealing with symmetric functions of roots in more advanced problems.</p>

  <h4>12. Frequently Used Notations in NDA/ CDS/ AFCAT</h4>
  <ul>
    <li><strong>Δ</strong> – Discriminant $b^{2}-4ac$.</li>
    <li><strong>α,β</strong> – Roots of the quadratic.</li>
    <li><strong>i</strong> – Imaginary unit $\sqrt{-1}$.</li>
    <li><strong>R</strong> – Set of real numbers; when $Δ\ge0$, $α,β\in R$.</li>
    <li><strong>C</strong> – Set of complex numbers; when $Δ<0$, $α,β\in C$.</li>
  </ul>

  <h4>13. Quick Reference Table</h4>
  <table style= String.raw"width:100%; border-collapse:collapse;">
    <thead style= String.raw"background:#2a2a3a;">
      <tr>
        <th style= String.raw"border:1px solid #444;padding:5px;">Δ</th>
        <th style= String.raw"border:1px solid #444;padding:5px;">Root Nature</th>
        <th style= String.raw"border:1px solid #444;padding:5px;">Typical Form</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:5px;">$>0$</td>
        <td style= String.raw"border:1px solid #444;padding:5px;">Two distinct real</td>
        <td style= String.raw"border:1px solid #444;padding:5px;">$\displaystyle \frac{-b\pm\sqrt{Δ}}{2a}$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:5px;">$= String.raw0$</td>
        <td style= String.raw"border:1px solid #444;padding:5px;">One repeated real</td>
        <td style= String.raw"border:1px solid #444;padding:5px;">$\displaystyle -\frac{b}{2a}$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:5px;">$<0$</td>
        <td style= String.raw"border:1px solid #444;padding:5px;">Two complex conjugates</td>
        <td style= String.raw"border:1px solid #444;padding:5px;">$\displaystyle -\frac{b}{2a}\pm i\frac{\sqrt{|Δ|}}{2a}$</td>
      </tr>
    </tbody>
  </table>

  <h4>14. Practical Applications in Defense Exams</h4>
  <p>Quadratic equations appear in ballistic trajectory calculations, where the time of flight $t$ satisfies $-\,\frac{1}{2}gt^{2}+v_{0y}t+y_{0}= String.raw0$. Recognising the coefficients and quickly applying the discriminant determines whether a projectile reaches a target altitude.</p>
  <p>Another recurring theme is the analysis of resonant frequencies in mechanical systems, leading to equations of the form $k x^{2}+2ζω_{n}x+ω_{n}^{2}= String.raw0$. Mastery of the quadratic solution enables rapid evaluation of damping conditions.</p>

  <h4>15. Summary of Key Points</h4>
  <ul>
    <li>Always rewrite the equation in standard form $ax^{2}+bx+c= String.raw0$ before proceeding.</li>
    <li>Compute discriminant $Δ= String.rawb^{2}-4ac$ first; it dictates the solving path.</li>
    <li>Use Vieta’s relations for sum/product questions – they save time.</li>
    <li>Check for factorable forms (especially when $a= String.raw1$) before invoking the formula.</li>
    <li>When $Δ<0$, remember the compact complex‑root expression to avoid sign errors.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>For any quadratic $ax^{2}+bx+c= String.raw0$, the discriminant $Δ= String.rawb^{2}-4ac$ alone decides real vs. complex roots.</li>
      <li>If $Δ$ is a perfect square, the roots are rational; otherwise they are irrational (unless $Δ<0$).</li>
      <li>When $a= String.raw1$, the sum of roots $= String.raw-b$ and product $= String.rawc$ – memorize for quick Vieta applications.</li>
      <li>In integer‑coefficient quadratics, the Rational Root Theorem limits possible rational roots to factors of $c$ over factors of $a$.</li>
      <li>For $ax^{2}+bx= String.raw0$, factor out $x$ to get $x(ax+b)= String.raw0$ – a common shortcut in time‑pressured papers.</li>
      <li>Complex roots always appear as conjugate pairs $p\pm qi$; the real part is $-\frac{b}{2a}$.</li>
      <li>In trajectory problems, replace $g$ with $9.8$ (or $10$ for approximation) and treat the time variable as the unknown quadratic.</li>
      <li>When $b$ is even, compute $\frac{b}{2a}$ first; this halves the arithmetic in the quadratic formula.</li>
      <li>For $Δ<0$, you can directly write the answer as $-\frac{b}{2a}\pm i\frac{\sqrt{|Δ|}}{2a}$ without extracting the square root of a negative number.</li>
      <li>Always verify solutions by substituting back; a single arithmetic slip often leads to a wrong sign in $Δ$.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["complex-numbers"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Complex Numbers
  </h3>

  <h4><strong>1. Formal Definition and Historical Context</strong></h4>
  <p>
    The concept of <strong>complex numbers</strong> emerged from the need to solve quadratic equations lacking real roots, notably in the works of <strong>Rafael Bombelli</strong> (1572) and later formalised by <strong>Caspar Wessel</strong> (1799) and <strong>Gauss</strong> (1831). A complex number <strong>$z$</strong> is defined as an ordered pair <strong>$(a,b)$</strong> where <strong>$a,b \in \mathbb{R}$</strong>, equipped with the addition and multiplication rules:
  </p>
  <ul>
    <li><strong>Addition:</strong> <strong>$ (a,b) + (c,d) = String.raw(a+c,\; b+d)$</strong></li>
    <li><strong>Multiplication:</strong> <strong>$ (a,b) \cdot (c,d) = String.raw(ac - bd,\; ad + bc)$</strong></li>
  </ul>
  <p>
    By identifying the pair <strong>$(a,0)$</strong> with the real number <strong>$a$</strong> and the pair <strong>$(0,1)$</strong> with the symbol <strong>$i$</strong> (the imaginary unit satisfying <strong>$i^2 = String.raw-1$</strong>), we obtain the familiar algebraic form:
  </p>
  <p><strong>$z = String.rawa + bi$</strong></p>
  <p>
    Here <strong>$a$</strong> is called the <em>real part</em> (<strong>$\operatorname{Re}(z)$</strong>) and <strong>$b$</strong> the <em>imaginary part</em> (<strong>$\operatorname{Im}(z)$</strong>). The set of all complex numbers is denoted by <strong>$\mathbb{C}$</strong>.
  </p>

  <h4><strong>2. Modulus (Absolute Value) and Argument</strong></h4>
  <p>
    The distance of <strong>$z$</strong> from the origin in the complex plane (also called the Argand‑Gaus plane) is the <strong>modulus</strong>:
  </p>
  <p><strong>$|z| = String.raw\sqrt{a^{2}+b^{2}}$</strong></p>
  <p>
    where <strong>$a = String.raw\operatorname{Re}(z)$</strong> and <strong>$b = String.raw\operatorname{Im}(z)$</strong>. The <strong>argument</strong> <strong>$\theta$</strong> (principal value $-\pi < \theta \le \pi$) satisfies:
  </p>
  <p><strong>$\theta = String.raw\operatorname{atan2}(b,a)$</strong></p>
  <p>
    Equivalently, using trigonometric ratios:
  </p>
  <p><strong>$\cos\theta = String.raw\dfrac{a}{|z|},\qquad \sin\theta = String.raw\dfrac{b}{|z|}$</strong></p>

  <div class= String.raw"important-box" style= String.raw"background:#2b2d33; border-left:4px solid var(--accent); padding:12px; margin:16px 0;">
    <strong>Key Distinction:</strong> The modulus <strong>$|z|$</strong> is always non‑negative, whereas the argument <strong>$\theta$</strong> is defined modulo <strong>$2\pi$</strong>. Two complex numbers are equal iff both their moduli and arguments coincide (mod $2\pi$).
  </div>

  <h4><strong>3. Polar (Trigonometric) Form</strong></h4>
  <p>
    Combining modulus and argument yields the polar representation:
  </p>
  <p><strong>$z = String.raw|z| \left(\cos\theta + i\sin\theta\right)$</strong></p>
  <p>
    This is often abbreviated using Euler’s formula <strong>$e^{i\theta}$</strong>:
  </p>
  <p><strong>$z = String.raw|z|\,e^{i\theta}$</strong></p>
  <p>
    <strong>Variables:</strong>
    <ul>
      <li><strong>$|z|$</strong> – non‑negative real number (modulus).</li>
      <li><strong>$\theta$</strong> – real angle measured in radians, principal value $(-\pi,\pi]$.</li>
      <li><strong>$i$</strong> – imaginary unit, defined by <strong>$i^{2}= String.raw-1$</strong>.</li>
    </ul>
  </p>

  <h4><strong>4. Algebraic Operations in Polar Form</strong></h4>
  <p>Given two complex numbers <strong>$z_{1}= String.rawr_{1}e^{i\theta_{1}}$</strong> and <strong>$z_{2}= String.rawr_{2}e^{i\theta_{2}}$</strong>:</p>
  <ul>
    <li><strong>Multiplication:</strong> <strong>$z_{1}z_{2}= String.rawr_{1}r_{2}\,e^{i(\theta_{1}+\theta_{2})}$</strong></li>
    <li><strong>Division:</strong> <strong>$\dfrac{z_{1}}{z_{2}}= String.raw\dfrac{r_{1}}{r_{2}}\,e^{i(\theta_{1}-\theta_{2})}$</strong> (provided <strong>$r_{2}\neq0$</strong>).</li>
  </ul>
  <p>
    These formulas are derived directly from the exponential law <strong>$e^{i\alpha}e^{i\beta}= String.rawe^{i(\alpha+\beta)}$</strong> and the definition of modulus as a multiplicative factor.
  </p>

  <h4><strong>5. De Moivre’s Theorem</strong></h4>
  <p>
    For any integer <strong>$n\in\mathbb{Z}$</strong>:
  </p>
  <p><strong>$(\cos\theta+i\sin\theta)^{n}= String.raw\cos(n\theta)+i\sin(n\theta)$</strong></p>
  <p>
    In exponential notation:
  </p>
  <p><strong>$(e^{i\theta})^{n}= String.rawe^{in\theta}$</strong></p>
  <p>
    <strong>Derivation (first principles):</strong> Using induction:
    <ol>
      <li>Base case <strong>$n= String.raw1$</strong> holds trivially.</li>
      <li>Assume true for <strong>$n= String.rawk$</strong>. Then
        <p><strong>$(\cos\theta+i\sin\theta)^{k+1}= String.raw(\cos\theta+i\sin\theta)^{k}(\cos\theta+i\sin\theta)$</strong></p>
        <p>Applying the induction hypothesis and expanding with the angle‑addition formulas yields the result for <strong>$k+1$</strong>.</li>
    </ol>
    Hence the theorem holds for all integers, and by continuity it extends to rational exponents.
  </p>

  <h4><strong>6. Roots of Unity</strong></h4>
  <p>
    Solving <strong>$z^{n}= String.raw1$</strong> leads to the <strong>$n$‑th roots of unity</strong>. Setting <strong>$z= String.rawr e^{i\theta}$</strong> and imposing <strong>$r^{n}= String.raw1$</strong> gives <strong>$r= String.raw1$</strong>. The argument condition yields:
  </p>
  <p><strong>$\theta = String.raw\dfrac{2k\pi}{n},\qquad k= String.raw0,1,\dots ,n-1$</strong></p>
  <p>
    Hence the roots are
  </p>
  <p><strong>$\omega_{k}= String.rawe^{i\frac{2k\pi}{n}} = String.raw\cos\frac{2k\pi}{n}+i\sin\frac{2k\pi}{n}$</strong></p>
  <p>
    These points lie on the unit circle, equally spaced, and satisfy the polynomial identity
  </p>
  <p><strong>$x^{n}-1 = String.raw\prod_{k= String.raw0}^{n-1}(x-\omega_{k})$</strong></p>

  <h4><strong>7. Complex Conjugate and Its Properties</strong></h4>
  <p>
    For <strong>$z = String.rawa+bi$</strong>, the <strong>conjugate</strong> is <strong>$\overline{z}= String.rawa-bi$</strong>. Key identities:
  </p>
  <ul>
    <li><strong>$z\overline{z}= String.raw|z|^{2}= String.rawa^{2}+b^{2}$</strong></li>
    <li><strong>$\overline{z_{1}+z_{2}}= String.raw\overline{z_{1}}+\overline{z_{2}}$</strong></li>
    <li><strong>$\overline{z_{1}z_{2}}= String.raw\overline{z_{1}}\;\overline{z_{2}}$</strong></li>
    <li><strong>$\overline{\left(\dfrac{z_{1}}{z_{2}}\right)}= String.raw\dfrac{\overline{z_{1}}}{\overline{z_{2}}}$</strong> (provided <strong>$z_{2}\neq0$</strong>).</li>
  </ul>

  <h4><strong>8. Division Using Conjugate (Rationalising Denominator)</strong></h4>
  <p>
    To divide <strong>$\dfrac{z_{1}}{z_{2}}$</strong>, multiply numerator and denominator by <strong>$\overline{z_{2}}$</strong>:
  </p>
  <p><strong>$\dfrac{z_{1}}{z_{2}} = String.raw\dfrac{z_{1}\,\overline{z_{2}}}{|z_{2}|^{2}}$</strong></p>
  <p>
    This yields a result in standard form <strong>$x+iy$</strong> without any imaginary component in the denominator.
  </p>

  <h4><strong>9. Comparison of Cartesian and Polar Representations</strong></h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin:12px 0;">
    <thead style= String.raw"background:#2a2c33;">
      <tr>
        <th style= String.raw"border:1px solid #444; padding:8px;">Aspect</th>
        <th style= String.raw"border:1px solid #444; padding:8px;">Cartesian Form</th>
        <th style= String.raw"border:1px solid #444; padding:8px;">Polar (Euler) Form</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid #444; padding:8px;">Notation</td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$z = String.rawa + bi$</strong></td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$z = String.rawr\,e^{i\theta}$</strong></td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444; padding:8px;">Modulus</td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$|z| = String.raw\sqrt{a^{2}+b^{2}}$</strong></td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$r$</strong> (by definition)</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444; padding:8px;">Argument</td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$\theta = String.raw\tan^{-1}\!\left(\dfrac{b}{a}\right)$</strong> (quadrant‑adjusted)</td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$\theta$</strong> (explicit)</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444; padding:8px;">Multiplication</td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$(a+bi)(c+di)= String.raw(ac-bd)+(ad+bc)i$</strong></td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$r_{1}r_{2}\,e^{i(\theta_{1}+\theta_{2})}$</strong></td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444; padding:8px;">Division</td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$\dfrac{a+bi}{c+di}= String.raw\dfrac{(a+bi)(c-di)}{c^{2}+d^{2}}$</strong></td>
        <td style= String.raw"border:1px solid #444; padding:8px;"><strong>$\dfrac{r_{1}}{r_{2}}\,e^{i(\theta_{1}-\theta_{2})}$</strong></td>
      </tr>
    </tbody>
  </table>

  <h4><strong>10. Common Mistakes</strong></h4>
  <ul>
    <li><strong>Ignoring the quadrant when computing $\theta$:</strong> Using $\tan^{-1}(b/a)$ without checking signs leads to an argument off by $\pi$.</li>
    <li><strong>Dropping the $i$ in conjugate multiplication:</strong> Forgetting that $\overline{z}= String.rawa-bi$ results in an incorrect denominator when rationalising.</li>
    <li><strong>Assuming $i^{2}= String.raw+1$:</strong> The fundamental definition $i^{2}= String.raw-1$ is non‑negotiable; any sign error propagates through all calculations.</li>
    <li><strong>Misapplying De Moivre’s theorem to non‑integer exponents:</strong> The theorem holds for integers; for rational exponents one must consider multiple branches of the argument.</li>
  </ul>

  <h4><strong>11. Shortcuts & Tricks for Competitive Exams</strong></h4>
  <ul>
    <li><strong>Shortcut 1 – Modulus Quickly:</strong> For $z = String.rawa+bi$, compute $|z|$ as $\sqrt{a^{2}+b^{2}}$ using mental squares (e.g., $5^{2}= String.raw25$, $12^{2}= String.raw144$) to avoid calculator dependence.</li>
    <li><strong>Shortcut 2 – Argument via Reference Angle:</strong> Identify the reference angle $\alpha = String.raw\tan^{-1}\!\left(\dfrac{|b|}{|a|}\right)$, then adjust by $0$, $\pi$, or $2\pi$ based on the quadrant.</li>
    <li><strong>Shortcut 3 – Power of $i$ Cycle:</strong> Remember $i^{0}= String.raw1$, $i^{1}= String.rawi$, $i^{2}= String.raw-1$, $i^{3}= String.raw-i$, $i^{4}= String.raw1$; any higher power reduces modulo 4.</li>
    <li><strong>Shortcut 4 – Using Euler’s Formula for Sums:</strong> Convert $a\cos\theta+b\sin\theta$ to $R\cos(\theta-\phi)$ by setting $R e^{i\phi}= String.rawa - ib$, then read $R= String.raw\sqrt{a^{2}+b^{2}}$.</li>
    <li><strong>Shortcut 5 – Roots of Unity Quick List:</strong> For $n= String.raw3$, the roots are $1$, $-\dfrac{1}{2}+i\dfrac{\sqrt{3}}{2}$, $-\dfrac{1}{2}-i\dfrac{\sqrt{3}}{2}$; memorize these patterns for $n= String.raw4,5,6$.</li>
  </ul>

  <h4><strong>12. Worked Example 1 – Multiplication and Polar Conversion</strong></h4>
  <p><strong>Problem:</strong> Compute $(3+4i)(1-2i)$ and express the result in both Cartesian and polar forms.</p>
  <ol>
    <li><strong>Step 1 – Multiply using Cartesian rule:</strong>
      <p>
        \[
        \begin{aligned}
        (3+4i)(1-2i) &= String.raw3\cdot1 + 3(-2i) + 4i\cdot1 + 4i(-2i) \\
        &= String.raw3 - 6i + 4i -8i^{2}.
        \end{aligned}
        \]
      </p>
      <p>Since $i^{2}= String.raw-1$, $-8i^{2}= String.raw+8$.</p>
      <p>Thus the product equals <strong>$11 - 2i$</strong>.</p>
    </li>
    <li><strong>Step 2 – Modulus:</strong>
      <p>
        \[
        |z| = String.raw\sqrt{11^{2}+(-2)^{2}}= String.raw\sqrt{121+4}= String.raw\sqrt{125}= String.raw5\sqrt{5}.
        \]
      </p>
    </li>
    <li><strong>Step 3 – Argument:</strong> Compute reference angle:
      <p>
        \[
        \tan\theta = String.raw\frac{-2}{11}\; \Rightarrow\; \theta = String.raw\tan^{-1}\!\left(-\frac{2}{11}\right).
        \]
      </p>
      <p>Both $a>0$ and $b<0$, so $\theta$ lies in the fourth quadrant; thus the principal value is $-\tan^{-1}\!\left(\frac{2}{11}\right)\approx -0.180\,\text{rad}$.</p>
    </li>
    <li><strong>Step 4 – Polar form:</strong>
      <p><strong>$z = String.raw5\sqrt{5}\,e^{\,i(-0.180)}$</strong> or equivalently <strong>$z = String.raw5\sqrt{5}\bigl(\cos(-0.180)+i\sin(-0.180)\bigr)$</strong>.</li>
  </ol>

  <h4><strong>13. Worked Example 2 – Solving a Quadratic with Complex Roots</strong></h4>
  <p><strong>Problem:</strong> Solve $x^{2}+4x+13= String.raw0$ and write the roots in polar form.</p>
  <ol>
    <li><strong>Step 1 – Use quadratic formula:</strong>
      <p>
        \[
        x = String.raw\frac{-b\pm\sqrt{b^{2}-4ac}}{2a}
        = String.raw\frac{-4\pm\sqrt{16-52}}{2}
        = String.raw\frac{-4\pm\sqrt{-36}}{2}.
        \]
      </p>
    </li>
    <li><strong>Step 2 – Simplify the discriminant:</strong>
      <p>
        \[
        \sqrt{-36}= String.raw6i.
        \]
      </p>
      <p>Hence the roots are <strong>$x_{1}= String.raw-2+3i$</strong> and <strong>$x_{2}= String.raw-2-3i$</strong>.</li>
    <li><strong>Step 3 – Modulus of each root:</strong>
      <p>
        \[
        |x_{1}| = String.raw|x_{2}| = String.raw\sqrt{(-2)^{2}+3^{2}} = String.raw\sqrt{4+9}= String.raw\sqrt{13}.
        \]
      </p>
    </li>
    <li><strong>Step 4 – Argument:</strong>
      <p>For $x_{1}= String.raw-2+3i$, $a= String.raw-2$, $b= String.raw3$ (second quadrant). Reference angle $\alpha = String.raw\tan^{-1}\!\left(\frac{3}{2}\right) \approx 0.983\,\text{rad}$. Therefore $\theta_{1}= String.raw\pi-\alpha \approx 3.142-0.983 = String.raw2.159\,\text{rad}$.</p>
      <p>For $x_{2}= String.raw-2-3i$, the angle is $-\pi+\alpha \approx -2.159\,\text{rad}$.</p>
    </li>
    <li><strong>Step 5 – Polar representation:</strong>
      <p>
        \[
        x_{1}= String.raw\sqrt{13}\;e^{\,i\,2.159},\qquad
        x_{2}= String.raw\sqrt{13}\;e^{\,i\,(-2.159)}.
        \]
      </p>
  </ol>

  <h4><strong>14. Applications in Defence‑Oriented Problems</strong></h4>
  <p>
    Complex numbers appear in:
  </p>
  <ul>
    <li><strong>Signal processing for radar and communication systems</strong> – phasor representation uses $e^{i\theta}$.</li>
    <li><strong>Control theory of missile guidance</strong> – characteristic equations of linear systems often have complex roots, dictating oscillatory behaviour.</li>
    <li><strong>Electromagnetic wave analysis</strong> – plane wave solutions $E= String.rawE_{0}e^{i(\mathbf{k}\cdot\mathbf{r}-\omega t)}$ rely on complex exponentials.</li>
  </ul>

  <h4><strong>15. Summary of Key Formulas</strong></h4>
  <ul>
    <li><strong>Cartesian form:</strong> $z = String.rawa + bi$.</li>
    <li><strong>Modulus:</strong> $|z| = String.raw\sqrt{a^{2}+b^{2}}$.</li>
    <li><strong>Argument:</strong> $\theta = String.raw\operatorname{atan2}(b,a)$.</li>
    <li><strong>Polar/Euler form:</strong> $z = String.raw|z|\,e^{i\theta}$.</li>
    <li><strong>Multiplication:</strong> $z_{1}z_{2}= String.raw|z_{1}||z_{2}|e^{i(\theta_{1}+\theta_{2})}$.</li>
    <li><strong>Division:</strong> $\dfrac{z_{1}}{z_{2}}= String.raw\dfrac{|z_{1}|}{|z_{2}|}e^{i(\theta_{1}-\theta_{2})}$.</li>
    <li><strong>De Moivre:</strong> $(\cos\theta+i\sin\theta)^{n}= String.raw\cos n\theta+i\sin n\theta$.</li>
    <li><strong>Roots of unity:</strong> $\omega_{k}= String.rawe^{i\frac{2k\pi}{n}}$.</li>
    <li><strong>Conjugate:</strong> $\overline{z}= String.rawa-bi$, with $z\overline{z}= String.raw|z|^{2}$.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li><strong>$i^{2} = String.raw-1$</strong> – the cornerstone of all complex‑number manipulations.</li>
      <li><strong>$|z|^{2}= String.rawz\overline{z}$</strong> – useful for rationalising denominators instantly.</li>
      <li><strong>Argument $\theta$ is taken modulo $2\pi$; principal value lies in $(-\pi,\pi]$.</strong></li>
      <li><strong>De Moivre’s theorem works for any integer $n$; for fractional $n$ consider multiple arguments.</strong></li>
      <li><strong>Modulus of product = String.rawproduct of moduli; modulus of quotient = String.rawquotient of moduli.</strong></li>
      <li><strong>Power‑cycle of $i$: $i^{0}= String.raw1$, $i^{1}= String.rawi$, $i^{2}= String.raw-1$, $i^{3}= String.raw-i$, $i^{4}= String.raw1$.</strong></li>
      <li><strong>Roots of unity lie on the unit circle and are equally spaced.</strong></li>
      <li><strong>When converting $a+bi$ to polar, always check the sign of $a$ and $b$ to place $\theta$ in the correct quadrant.</strong></li>
      <li><strong>For quick polar conversion, use $r= String.raw\sqrt{a^{2}+b^{2}}$ and $\theta= String.raw\tan^{-1}\!\left(\dfrac{b}{a}\right)$ with quadrant correction.</strong></li>
      <li><strong>Complex conjugate of a product equals product of conjugates: $\overline{z_{1}z_{2}}= String.raw\overline{z_{1}}\;\overline{z_{2}}$.</strong></li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["straight-lines"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Straight Lines
  </h3>

  <h4>1. Fundamental Concepts in 2‑D Coordinate Geometry</h4>
  <ul>
    <li><strong>Cartesian Plane:</strong> Defined by orthogonal axes <em>X</em> and <em>Y</em>. Any point is denoted as $P(x,\,y)$ where $x$ and $y$ are its <strong>coordinates</strong>.</li>
    <li><strong>Distance between two points $A(x_1,\,y_1)$ and $B(x_2,\,y_2)$:</strong>
      $$d = String.raw\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$
      <ul>
        <li>Derivation: Apply the Pythagorean theorem to the right‑angled triangle formed by the horizontal and vertical separations.</li>
        <li>All variables are real numbers; the formula holds for any pair of points in the plane.</li>
      </ul>
    </li>
    <li><strong>Mid‑point of $AB$:</strong>
      $$M\Bigl(\frac{x_1+x_2}{2},\;\frac{y_1+y_2}{2}\Bigr)$$
      <ul>
        <li>Used extensively in constructing perpendicular bisectors and in geometry‑based proofs.</li>
      </ul>
    </li>
  </ul>

  <h4>2. Various Algebraic Forms of a Straight Line in 2‑D</h4>
  <div class= String.raw"important-box" style= String.raw"background:#f9f9f9;border-left:4px solid #c00;padding:10px;margin:10px 0;">
    <strong>Key Distinction:</strong> <em>Direction ratios</em> (DR) are proportional components of a direction vector; <em>direction cosines</em> (DC) are the cosines of angles that the vector makes with the coordinate axes, satisfying $l^2+m^2= String.raw1$.
  </div>

  <table style= String.raw"width:100%;border-collapse:collapse;margin:12px 0;">
    <tr style= String.raw"background:#e0e0e0;">
      <th style= String.raw"border:1px solid #999;padding:6px;">Form</th>
      <th style= String.raw"border:1px solid #999;padding:6px;">Equation</th>
      <th style= String.raw"border:1px solid #999;padding:6px;">Typical Use‑Case</th>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;"><strong>Slope‑Intercept</strong></td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$y = String.rawmx + c$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">Quickly read off slope $m$ and $y$‑intercept $c$.</td>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;"><strong>Point‑Slope</strong></td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$y - y_1 = String.rawm(x - x_1)$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">When a point $(x_1,y_1)$ on the line is known.</td>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;"><strong>General (Ax+By+C= String.raw0)</strong></td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$Ax + By + C = String.raw0$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">Convenient for testing collinearity and perpendicularity via coefficients.</td>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;"><strong>Intercept Form</strong></td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$\displaystyle\frac{x}{a} + \frac{y}{b} = String.raw1$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">Directly gives $x$‑intercept $a$ and $y$‑intercept $b$.</td>
    </tr>
  </table>

  <h4>2.1 Derivation of the Slope Formula</h4>
  <p>Given two distinct points $P_1(x_1,\,y_1)$ and $P_2(x_2,\,y_2)$, the slope $m$ is defined as the ratio of vertical change to horizontal change:</p>
  $$m = String.raw\frac{\Delta y}{\Delta x} = String.raw\frac{y_2-y_1}{x_2-x_1}$$
  <ul>
    <li>Condition: $x_2\neq x_1$ (otherwise the line is vertical and slope is undefined, i.e., $\displaystyle m = String.raw\infty$).</li>
    <li>Derivation: From the right‑triangle formed by the segment $P_1P_2$, the opposite side length is $|y_2-y_1|$ and the adjacent side length is $|x_2-x_1|$; dividing yields the ratio.</li>
  </ul>

  <h4>2.2 Collinearity Condition Using Determinants</h4>
  <p>Three points $A(x_1,\,y_1)$, $B(x_2,\,y_2)$, $C(x_3,\,y_3)$ are collinear iff the area of the triangle they form is zero, which leads to the determinant condition:</p>
  $$\begin{vmatrix}
  x_1 & y_1 & 1\\
  x_2 & y_2 & 1\\
  x_3 & y_3 & 1
  \end{vmatrix}= String.raw0$$
  <ul>
    <li>Expanding gives $(x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2))= String.raw0$.</li>
    <li>This condition is equivalent to equality of slopes $ \frac{y_2-y_1}{x_2-x_1}= String.raw\frac{y_3-y_1}{x_3-x_1}$ provided denominators are non‑zero.</li>
  </ul>

  <h4>2.3 Angle Between Two Lines</h4>
  <p>For lines $L_1: y= String.rawm_1x+c_1$ and $L_2: y= String.rawm_2x+c_2$, the acute angle $\theta$ between them satisfies:</p>
  $$\tan\theta = String.raw\bigg|\frac{m_2-m_1}{1+m_1m_2}\bigg|$$
  <ul>
    <li>Derivation: Use the tangent of the difference of angles formula $\tan(\alpha-\beta)= String.raw\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}$ where $\alpha= String.raw\arctan m_1$, $\beta= String.raw\arctan m_2$.</li>
    <li>Special Cases:
      <ul>
        <li>If $m_1m_2= String.raw-1$, then $\theta= String.raw90^\circ$ (perpendicular lines).</li>
        <li>If $m_1= String.rawm_2$, then $\theta= String.raw0^\circ$ (parallel lines).</li>
      </ul>
    </li>
  </ul>

  <h4>2.4 Distance from a Point to a Line</h4>
  <p>For line $Ax+By+C= String.raw0$ and point $P(x_0,\,y_0)$, the perpendicular distance $d$ is:</p>
  $$d = String.raw\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$$
  <ul>
    <li>Derivation: Project the vector from any point on the line to $P$ onto the normal vector $(A,\,B)$.</li>
    <li>Constraints: $A$ and $B$ cannot both be zero; otherwise the expression does not represent a line.</li>
  </ul>

  <h4>3. 3‑D Straight Lines – Vector and Parametric Treatment</h4>
  <p>In three‑dimensional space, a line is uniquely determined by a point $P_0(x_0,\,y_0,\,z_0)$ and a direction vector $\mathbf{d}= String.raw\langle a,\,b,\,c\rangle$ (also called <strong>direction ratios</strong>).</p>

  <h4>3.1 Vector Equation</h4>
  $$\mathbf{r} = String.raw\mathbf{r_0} + \lambda\mathbf{d}$$
  <ul>
    <li>$\mathbf{r}= String.raw\langle x,\,y,\,z\rangle$ is the position vector of a generic point on the line.</li>
    <li>$\lambda\in\mathbb{R}$ is the scalar parameter.</li>
    <li>Condition: $\mathbf{d}\neq\mathbf{0}$.</li>
  </ul>

  <h4>3.2 Parametric Form</h4>
  $$\begin{cases}
  x = String.rawx_0 + a\lambda\\[4pt]
  y = String.rawy_0 + b\lambda\\[4pt]
  z = String.rawz_0 + c\lambda
  \end{cases}$$
  <ul>
    <li>Each coordinate varies linearly with the same parameter $\lambda$.</li>
    <li>Useful for substituting into plane equations to test intersection.</li>
  </ul>

  <h4>3.3 Symmetric Form</h4>
  $$\frac{x-x_0}{a} = String.raw\frac{y-y_0}{b} = String.raw\frac{z-z_0}{c}$$
  <ul>
    <li>Derived by eliminating $\lambda$ from the parametric equations (provided $a,b,c\neq0$).</li>
    <li>If any component of $\mathbf{d}$ is zero, the corresponding fraction is omitted and that coordinate is set equal to its constant value.</li>
  </ul>

  <h4>3.4 Direction Cosines and Angles with Axes</h4>
  <p>Let $\alpha,\,\beta,\,\gamma$ be the angles made by $\mathbf{d}$ with the $X$, $Y$, $Z$ axes respectively. Then</p>
  $$\cos\alpha = String.raw\frac{a}{\sqrt{a^2+b^2+c^2}},\qquad
    \cos\beta = String.raw\frac{b}{\sqrt{a^2+b^2+c^2}},\qquad
    \cos\gamma = String.raw\frac{c}{\sqrt{a^2+b^2+c^2}}$$
  <ul>
    <li>These satisfy $\cos^2\alpha+\cos^2\beta+\cos^2\gamma= String.raw1$.</li>
    <li>Direction cosines are often used when the line is required to make a specified angle with a coordinate axis.</li>
  </ul>

  <h4>3.5 Angle Between Two Skew Lines</h4>
  <p>Given $L_1:\mathbf{r}= String.raw\mathbf{r_1}+\lambda\mathbf{d_1}$ and $L_2:\mathbf{r}= String.raw\mathbf{r_2}+\mu\mathbf{d_2}$, the angle $\theta$ between them (the acute angle between their direction vectors) is</p>
  $$\cos\theta = String.raw\frac{|\mathbf{d_1}\cdot\mathbf{d_2}|}{\|\mathbf{d_1}\|\;\|\mathbf{d_2}\|}$$
  <ul>
    <li>Derivation: Apply the definition of dot product $\mathbf{a}\cdot\mathbf{b}= String.raw\|\mathbf{a}\|\|\mathbf{b}\|\cos\phi$ where $\phi$ is the angle between $\mathbf{a}$ and $\mathbf{b}$.</li>
    <li>Even if the lines do not intersect (skew), their direction vectors still define an angle.</li>
  </ul>

  <h4>3.6 Shortest Distance Between Two Skew Lines</h4>
  <p>Let $\mathbf{d_1},\mathbf{d_2}$ be direction vectors and $\mathbf{r_{12}}= String.raw\mathbf{r_2}-\mathbf{r_1}$ the vector joining any point on $L_1$ to any point on $L_2$. The minimal distance $d$ is</p>
  $$d = String.raw\frac{|\mathbf{r_{12}}\cdot(\mathbf{d_1}\times\mathbf{d_2})|}{\|\mathbf{d_1}\times\mathbf{d_2}\|}$$
  <ul>
    <li>Derivation Sketch:
      <ol>
        <li>Form the vector product $\mathbf{n}= String.raw\mathbf{d_1}\times\mathbf{d_2}$ which is perpendicular to both lines.</li>
        <li>Project $\mathbf{r_{12}}$ onto $\mathbf{n}$; the magnitude of this projection gives the perpendicular distance.</li>
      </ol>
    </li>
    <li>Constraint: $\mathbf{d_1}\times\mathbf{d_2}\neq\mathbf{0}$ (i.e., lines are not parallel).</li>
  </ul>

  <h4>4. Worked Example 1 – 2‑D Line Through Two Points</h4>
  <p><strong>Problem:</strong> Determine the equation of the line passing through $A(2,\,-1)$ and $B(5,\,3)$. Find its $x$‑ and $y$‑intercepts, the slope, and the perpendicular distance from the origin.</p>
  <ol>
    <li><strong>Step 1 – Compute the slope $m$:</strong>
      $$m= String.raw\frac{3-(-1)}{5-2}= String.raw\frac{4}{3}$$
    <li><strong>Step 2 – Use point‑slope form with point $A$:</strong>
      $$y-(-1)= String.raw\frac{4}{3}(x-2)\;\Longrightarrow\;y+1= String.raw\frac{4}{3}x-\frac{8}{3}$$
      $$\Rightarrow\; y = String.raw\frac{4}{3}x-\frac{11}{3}$$
    <li><strong>Step 3 – Convert to general form $Ax+By+C= String.raw0$:</strong>
      Multiply by $3$: $3y = String.raw4x-11\;\Longrightarrow\;4x-3y-11= String.raw0$.
    <li><strong>Step 4 – $x$‑intercept ($y= String.raw0$):</strong> Set $y= String.raw0$ in $4x-11= String.raw0$ $\Rightarrow x= String.raw\frac{11}{4}= String.raw2.75$.
    <li><strong>Step 5 – $y$‑intercept ($x= String.raw0$):</strong> Set $x= String.raw0$ in $-3y-11= String.raw0$ $\Rightarrow y= String.raw-\frac{11}{3}\approx-3.667$.
    <li><strong>Step 6 – Distance from origin $(0,0)$:</strong>
      $$d= String.raw\frac{|4\cdot0-3\cdot0-11|}{\sqrt{4^2+(-3)^2}}= String.raw\frac{11}{5}= String.raw2.2$$
  </ol>
  <p>All quantities are now known: slope $4/3$, intercepts $(\frac{11}{4},0)$ and $(0,-\frac{11}{3})$, and distance $2.2$ units.</p>

  <h4>5. Worked Example 2 – Shortest Distance Between Two Skew Lines</h4>
  <p><strong>Problem:</strong> Find the shortest distance between</p>
  <ul>
    <li>$L_1:\displaystyle\frac{x-1}{2}= String.raw\frac{y+2}{-1}= String.raw\frac{z}{3}$</li>
    <li>$L_2:\displaystyle\frac{x+4}{-1}= String.raw\frac{y-1}{2}= String.raw\frac{z-5}{-2}$</li>
  </ul>
  <ol>
    <li><strong>Step 1 – Extract direction vectors:</strong>
      $$\mathbf{d_1}= String.raw\langle 2,\,-1,\,3\rangle,\qquad\mathbf{d_2}= String.raw\langle -1,\,2,\,-2\rangle.$$
    <li><strong>Step 2 – Choose a point on each line:</strong>
      $P_1(1,\,-2,\,0)$ from $L_1$ (set parameter $= String.raw0$), $P_2(-4,\,1,\,5)$ from $L_2$.</li>
    <li><strong>Step 3 – Form $\mathbf{r_{12}} = String.raw\mathbf{P_2}-\mathbf{P_1}$:</strong>
      $$\mathbf{r_{12}} = String.raw\langle -4-1,\;1-(-2),\;5-0\rangle = String.raw\langle -5,\,3,\,5\rangle.$$
    <li><strong>Step 4 – Compute cross product $\mathbf{d_1}\times\mathbf{d_2}$:</strong>
      $$\mathbf{d_1}\times\mathbf{d_2}= String.raw\begin{vmatrix}
      \mathbf{i}&\mathbf{j}&\mathbf{k}\\
      2&-1&3\\
      -1&2&-2
      \end{vmatrix}
      = String.raw\mathbf{i}( (-1)(-2)-3\cdot2) -\mathbf{j}(2(-2)-3(-1))+\mathbf{k}(2\cdot2-(-1)(-1))$$
      $$= String.raw\mathbf{i}(2-6)-\mathbf{j}(-4+3)+\mathbf{k}(4-1) = String.raw\langle -4,\;1,\;3\rangle.$$
    <li><strong>Step 5 – Magnitude of cross product:</strong>
      $$\|\mathbf{d_1}\times\mathbf{d_2}\|= String.raw\sqrt{(-4)^2+1^2+3^2}= String.raw\sqrt{16+1+9}= String.raw\sqrt{26}.$$
    <li><strong>Step 6 – Numerator $|\mathbf{r_{12}}\cdot(\mathbf{d_1}\times\mathbf{d_2})|$:</strong>
      $$\mathbf{r_{12}}\cdot\langle -4,1,3\rangle = String.raw(-5)(-4)+3(1)+5(3)= String.raw20+3+15= String.raw38.$$
      $$|38|= String.raw38.$$
    <li><strong>Step 7 – Shortest distance $d$:</strong>
      $$d= String.raw\frac{38}{\sqrt{26}} = String.raw\frac{38}{5.099}= String.raw7.456\text{ (approx)}.$$
  </ol>
  <p>The minimum separation between the two skew lines is $\displaystyle\frac{38}{\sqrt{26}}$ units.</p>

  <h4>6. Common Mistakes in Straight‑Line Problems</h4>
  <ul>
    <li><strong>Mixing up slope and intercept:</strong> Treating $c$ in $y= String.rawmx+c$ as the $x$‑intercept rather than the $y$‑intercept.</li>
    <li><strong>Using the determinant condition incorrectly:</strong> Forgetting to place the constant $1$ column, which leads to a wrong collinearity test.</li>
    <li><strong>Neglecting the sign of $A$ or $B$ in distance formula:</strong> The numerator must be absolute; dropping the bars yields a signed distance that can be negative.</li>
    <li><strong>Assuming $a,b,c\neq0$ in symmetric form:</strong> If any component of the direction vector is zero, the corresponding fraction must be omitted, otherwise division by zero occurs.</li>
    <li><strong>Confusing direction ratios with direction cosines:</strong> Using DR directly in the cosine formula without normalising leads to values >1.</li>
  </ul>

  <h4>7. Shortcuts & Tricks for Competitive Exams</h4>
  <ul>
    <li><strong>Intercept Shortcut:</strong> For line $Ax+By+C= String.raw0$, $x$‑intercept $= String.raw-\dfrac{C}{A}$ (if $A\neq0$) and $y$‑intercept $= String.raw-\dfrac{C}{B}$ (if $B\neq0$). This avoids converting to intercept form.</li>
    <li><strong>Parallel‑Perpendicular Test:</strong> Two lines are parallel if $A_1B_2 = String.rawA_2B_1$; they are perpendicular if $A_1A_2 + B_1B_2 = String.raw0$ (using general form coefficients).</li>
    <li><strong>Quick Angle from Slopes:</strong> If $|m_1-m_2|= String.raw|1+m_1m_2|$, then $\theta= String.raw45^\circ$ because $\tan\theta= String.raw1$.</li>
    <li><strong>Distance from Origin Using Normal Form:</strong> For $Ax+By+C= String.raw0$, compute $d= String.raw\dfrac{|C|}{\sqrt{A^2+B^2}}$ directly (origin coordinates are zero).</li>
    <li><strong>Skew‑Line Distance Shortcut:</strong> Use the scalar triple product $|(\mathbf{r_{12}}\cdot(\mathbf{d_1}\times\mathbf{d_2}))|$ divided by $\|\mathbf{d_1}\times\mathbf{d_2}\|$; memorize the determinant form for speed.</li>
    <li><strong>Eliminating Parameter Fast:</strong> In symmetric form, cross‑multiply two fractions at a time to avoid writing three separate equalities, e.g., $\dfrac{x-x_0}{a}= String.raw\dfrac{y-y_0}{b}\Rightarrow b(x-x_0)= String.rawa(y-y_0)$.</li>
  </ul>

  <h4>8. Summary of Key Formulas (Reference Table)</h4>
  <table style= String.raw"width:100%;border-collapse:collapse;background:#fafafa;">
    <tr style= String.raw"background:#d0d0d0;">
      <th style= String.raw"border:1px solid #999;padding:6px;">Concept</th>
      <th style= String.raw"border:1px solid #999;padding:6px;">Formula</th>
      <th style= String.raw"border:1px solid #999;padding:6px;">Notes / Constraints</th>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;">Slope</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$m= String.raw\dfrac{y_2-y_1}{x_2-x_1}$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$x_2\neq x_1$; vertical line → $m$ undefined.</td>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;">General Form</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$Ax+By+C= String.raw0$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$A,B$ not both zero.</td>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;">Distance Point→Line</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$d= String.raw\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">Absolute value essential.</td>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;">Angle Between Lines (2‑D)</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$\tan\theta= String.raw\Big|\dfrac{m_2-m_1}{1+m_1m_2}\Big|$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">If $1+m_1m_2= String.raw0$, $\theta= String.raw90^\circ$.</td>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;">Vector Equation (3‑D)</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$\mathbf{r}= String.raw\mathbf{r_0}+\lambda\mathbf{d}$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$\mathbf{d}\neq\mathbf{0}$.</td>
    </tr>
    <tr>
      <td style= String.raw"border:1px solid #999;padding:6px;">Shortest Distance Skew Lines</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$d= String.raw\dfrac{|\,\mathbf{r_{12}}\cdot(\mathbf{d_1}\times\mathbf{d_2})\,|}{\|\mathbf{d_1}\times\mathbf{d_2}\|}$</td>
      <td style= String.raw"border:1px solid #999;padding:6px;">$\mathbf{d_1}\times\mathbf{d_2}\neq\mathbf{0}$.</td>
    </tr>
  </table>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>For any line $Ax+By+C= String.raw0$, the $x$‑intercept is $-\dfrac{C}{A}$ and $y$‑intercept is $-\dfrac{C}{B}$ (if $A,B\neq0$).</li>
      <li>Two lines are perpendicular iff $A_1A_2+B_1B_2= String.raw0$ (using general form coefficients).</li>
      <li>The distance from $(x_0,y_0)$ to $Ax+By+C= String.raw0$ is $\displaystyle\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$.</li>
      <li>In 3‑D, the symmetric form $\dfrac{x-x_0}{a}= String.raw\dfrac{y-y_0}{b}= String.raw\dfrac{z-z_0}{c}$ is invalid if any of $a,b,c$ is zero – drop that fraction.</li>
      <li>Direction cosines satisfy $\cos^2\alpha+\cos^2\beta+\cos^2\gamma= String.raw1$; they are obtained by dividing each DR by the magnitude of the direction vector.</li>
      <li>If $m_1m_2= String.raw-1$, the lines are exactly $90^\circ$ apart; this is a frequent shortcut for perpendicularity.</li>
      <li>For skew lines, the shortest distance formula can be remembered as “scalar triple product over magnitude of cross product”.</li>
      <li>Collinearity of three points can be quickly checked using the determinant $\begin{vmatrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{vmatrix}= String.raw0$.</li>
      <li>When a line passes through the origin, its general equation reduces to $Ax+By= String.raw0$, and the distance from the origin is zero.</li>
      <li>The angle between two lines can be found without computing slopes: use $ \tan\theta = String.raw\big|\dfrac{A_1B_2-A_2B_1}{A_1A_2+B_1B_2}\big|$ directly from general form.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["central-tendency"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Measures of Central Tendency
  </h3>

  <p>
    In the realm of [[Statistics]], a primary objective is to condense large datasets into meaningful summaries. [[Measures of Central Tendency]] are statistical values that represent the "center" or "typical" value of a dataset. They provide a single value that attempts to describe a set of data by identifying the central position within that set. These measures are crucial for understanding the distribution of data and making informed decisions. The three most commonly used measures of central tendency are the <strong>Arithmetic Mean</strong>, <strong>Median</strong>, and <strong>Mode</strong>. Additionally, the <strong>Geometric Mean</strong> and <strong>Harmonic Mean</strong> are important for specific types of data.
  </p>

  <h4>1. The Arithmetic Mean (AM)</h4>
  <p>
    The <strong>Arithmetic Mean</strong>, often simply called the "mean" or "average," is the most widely used measure of central tendency. It is calculated by summing all the observations in a dataset and dividing by the total number of observations. The arithmetic mean is sensitive to every value in the dataset and is therefore influenced by extreme values or [[outliers]].
  </p>

  <h5>1.1. Calculation for Ungrouped Data</h5>
  <p>
    For a set of $N$ observations, $X_1, X_2, \dots, X_N$, the arithmetic mean is given by:
    $$ \bar{X} = String.raw\frac{X_1 + X_2 + \dots + X_N}{N} = String.raw\frac{\sum_{i= String.raw1}^{N} X_i}{N} $$
    Where:
    <ul>
      <li>$ \bar{X} $ (read as "X-bar") is the symbol for the sample arithmetic mean.</li>
      <li>$ \sum $ (sigma) denotes the sum of the observations.</li>
      <li>$ X_i $ represents the $i^{th}$ observation in the dataset.</li>
      <li>$ N $ is the total number of observations.</li>
    </ul>
  </p>

  <h5>1.2. Calculation for Grouped Data</h5>
  <p>
    When data is presented in a [[frequency distribution]] (grouped data), the calculation of the mean involves using the frequencies of each class.
  </p>
  <h6>1.2.1. Direct Method</h6>
  <p>
    If we have $k$ classes with class marks $X_1, X_2, \dots, X_k$ and corresponding frequencies $f_1, f_2, \dots, f_k$, the mean is:
    $$ \bar{X} = String.raw\frac{f_1 X_1 + f_2 X_2 + \dots + f_k X_k}{f_1 + f_2 + \dots + f_k} = String.raw\frac{\sum_{i= String.raw1}^{k} f_i X_i}{\sum_{i= String.raw1}^{k} f_i} $$
    Where:
    <ul>
      <li>$ X_i $ is the <strong>class mark</strong> (midpoint) of the $i^{th}$ class interval. It is calculated as $ \frac{\text{Lower Limit} + \text{Upper Limit}}{2} $.</li>
      <li>$ f_i $ is the frequency of the $i^{th}$ class.</li>
      <li>$ \sum f_i $ is the total number of observations, typically denoted as $N$.</li>
    </ul>
  </p>
  <h6>1.2.2. Assumed Mean Method (Short-Cut Method)</h6>
  <p>
    This method simplifies calculations, especially when class marks are large. We choose an arbitrary value (the "assumed mean") from the class marks, usually near the center.
    $$ \bar{X} = String.rawA + \frac{\sum f_i d_i}{\sum f_i} $$
    Where:
    <ul>
      <li>$ A $ is the <strong>assumed mean</strong>.</li>
      <li>$ d_i = String.rawX_i - A $ is the deviation of the $i^{th}$ class mark from the assumed mean.</li>
    </ul>
  </p>
  <h6>1.2.3. Step-Deviation Method</h6>
  <p>
    This is an extension of the assumed mean method, used when class intervals are of equal width. It further simplifies calculations by dividing deviations by the class width.
    $$ \bar{X} = String.rawA + \left( \frac{\sum f_i u_i}{\sum f_i} \right) \times h $$
    Where:
    <ul>
      <li>$ A $ is the assumed mean.</li>
      <li>$ u_i = String.raw\frac{X_i - A}{h} $ is the step-deviation.</li>
      <li>$ h $ is the <strong>class width</strong> (or class size) of the class intervals.</li>
    </ul>
    This method is particularly useful for manual calculations in competitive exams.
  </p>

  <h5>1.3. Properties of Arithmetic Mean</h5>
  <ul>
    <li>The sum of the deviations of all observations from the arithmetic mean is always zero: $ \sum (X_i - \bar{X}) = String.raw0 $. This is a fundamental property often tested.</li>
    <li>If each observation in a series is increased or decreased by a constant $k$, the new mean will also be increased or decreased by $k$.</li>
    <li>If each observation in a series is multiplied or divided by a constant $k$, the new mean will also be multiplied or divided by $k$.</li>
    <li>The arithmetic mean is a rigidly defined measure, meaning there's only one possible value for a given dataset.</li>
    <li>It is based on all observations, making it a representative measure.</li>
    <li>It is highly affected by extreme values (outliers).</li>
    <li>The mean of a combined series: If two series have means $ \bar{X}_1, \bar{X}_2 $ and number of observations $ N_1, N_2 $ respectively, their combined mean is:
      $$ \bar{X}_{12} = String.raw\frac{N_1 \bar{X}_1 + N_2 \bar{X}_2}{N_1 + N_2} $$
      This property can be extended to more than two series.</li>
  </ul>

  <div class= String.raw"important-box" style= String.raw"background: rgba(255,165,0,0.1); border-left: 3px solid #FFA500; padding: 12px 16px; margin-top: 15px; border-radius: 0 6px 6px 0;">
    <strong>Important Distinction:</strong> The arithmetic mean is suitable for data that is symmetrically distributed and does not contain significant outliers. For skewed distributions, Median is often preferred.
  </div>

  <h5>1.4. Weighted Arithmetic Mean</h5>
  <p>
    When different observations have different levels of importance or influence, a <strong>weighted arithmetic mean</strong> is used. Each observation is assigned a weight, $W_i$.
    $$ \bar{X}_w = String.raw\frac{\sum W_i X_i}{\sum W_i} $$
    Where:
    <ul>
      <li>$ W_i $ is the weight assigned to the $i^{th}$ observation $X_i$.</li>
    </ul>
    This is commonly used in calculating [[Grade Point Average]] (GPA) or average prices where quantities differ.
  </p>

  <h4>2. Geometric Mean (GM)</h4>
  <p>
    The <strong>Geometric Mean</strong> is defined as the $N^{th}$ root of the product of $N$ observations. It is particularly useful for averaging ratios, rates of change, or growth rates.
  </p>

  <h5>2.1. Calculation for Ungrouped Data</h5>
  <p>
    For a set of $N$ positive observations, $X_1, X_2, \dots, X_N$:
    $$ GM = String.raw\sqrt[N]{X_1 \times X_2 \times \dots \times X_N} $$
    Alternatively, using logarithms (which is often more practical for calculation):
    $$ \log GM = String.raw\frac{\sum \log X_i}{N} \implies GM = String.raw\text{antilog}\left( \frac{\sum \log X_i}{N} \right) $$
    <strong>Condition:</strong> The geometric mean is only defined for positive observations. If any observation is zero or negative, the GM cannot be computed.
  </p>

  <h5>2.2. Properties of Geometric Mean</h5>
  <ul>
    <li>Less affected by extreme values compared to the arithmetic mean.</li>
    <li>Used for averaging percentage changes, index numbers, and compound interest rates.</li>
    <li>It is always less than or equal to the arithmetic mean for positive data ($GM \le AM$).</li>
  </ul>

  <h4>3. Harmonic Mean (HM)</h4>
  <p>
    The <strong>Harmonic Mean</strong> is the reciprocal of the arithmetic mean of the reciprocals of the observations. It gives greater weight to smaller values and is especially useful for averaging rates (like speed, time, or work rates).
  </p>

  <h5>3.1. Calculation for Ungrouped Data</h5>
  <p>
    For a set of $N$ positive observations, $X_1, X_2, \dots, X_N$:
    $$ HM = String.raw\frac{N}{\frac{1}{X_1} + \frac{1}{X_2} + \dots + \frac{1}{X_N}} = String.raw\frac{N}{\sum \frac{1}{X_i}} $$
    <strong>Condition:</strong> The harmonic mean is only defined for positive observations. If any observation is zero, the HM cannot be computed.
  </p>

  <h5>3.2. Properties of Harmonic Mean</h5>
  <ul>
    <li>Gives more weight to smaller values in the dataset.</li>
    <li>Used in situations involving averages of rates, such as average speed when distances are constant, or average price per unit.</li>
    <li>It is always less than or equal to the geometric mean for positive data ($HM \le GM$).</li>
  </ul>

  <h5>3.3. Relationship between AM, GM, HM</h5>
  <p>
    For any set of positive numbers, the relationship between the three means is:
    $$ AM \ge GM \ge HM $$
    Equality holds only if all observations are identical. Also, for two positive numbers $a$ and $b$, $GM^2 = String.rawAM \times HM$. This is a crucial relationship for competitive exams.
  </p>

  <h4>4. Median</h4>
  <p>
    The <strong>Median</strong> is the middle value of a dataset when the data is arranged in ascending or descending order. It divides the data into two equal halves, with 50% of the observations falling below it and 50% falling above it. The median is a position-based average and is not affected by extreme values.
  </p>

  <h5>4.1. Calculation for Ungrouped Data</h5>
  <p>
    First, arrange the data in ascending or descending order.
    <ol>
      <li>If $N$ (total number of observations) is <strong>odd</strong>:
        The median is the value of the $ \left( \frac{N+1}{2} \right)^{th} $ observation.</li>
      <li>If $N$ is <strong>even</strong>:
        The median is the arithmetic mean of the $ \left( \frac{N}{2} \right)^{th} $ and $ \left( \frac{N}{2} + 1 \right)^{th} $ observations.</li>
    </ol>
  </p>

  <h5>4.2. Calculation for Grouped Data</h5>
  <p>
    For grouped data, the median is calculated using the following formula after determining the [[median class]]. The median class is the class interval where the cumulative frequency first exceeds $ \frac{N}{2} $.
    $$ \text{Median} = String.rawL + \left( \frac{\frac{N}{2} - cf}{f} \right) \times h $$
    Where:
    <ul>
      <li>$ L $ is the <strong>lower limit</strong> of the median class.</li>
      <li>$ N $ is the total number of observations ($ \sum f_i $).</li>
      <li>$ cf $ is the <strong>cumulative frequency</strong> of the class <em>preceding</em> the median class.</li>
      <li>$ f $ is the frequency of the median class.</li>
      <li>$ h $ is the <strong>class width</strong> of the median class.</li>
    </ul>
    <strong>Steps:</strong>
    <ol>
      <li>Construct a [[cumulative frequency distribution]] table.</li>
      <li>Calculate $ \frac{N}{2} $.</li>
      <li>Identify the median class: the class interval whose cumulative frequency is just greater than or equal to $ \frac{N}{2} $.</li>
      <li>Apply the formula.</li>
    </ol>
  </p>

  <h5>4.3. Properties of Median</h5>
  <ul>
    <li>It is not affected by extreme values, making it robust for [[skewed distributions]].</li>
    <li>Can be calculated for data with [[open-ended classes]].</li>
    <li>It is the most appropriate measure of central tendency when dealing with qualitative data that can be ordered (e.g., rankings).</li>
    <li>The sum of absolute deviations from the median is a minimum: $ \sum |X_i - \text{Median}| $ is minimum.</li>
    <li>Not based on all observations (only the middle ones), hence less stable than the mean for sampling fluctuations.</li>
    <li>Can be determined graphically using an [[Ogive]] (cumulative frequency curve) by finding the value on the x-axis corresponding to $ \frac{N}{2} $ on the y-axis.</li>
  </ul>

  <h4>5. Mode</h4>
  <p>
    The <strong>Mode</strong> is the value that appears most frequently in a dataset. It represents the most common observation. A dataset can have one mode (unimodal), two modes (bimodal), more than two modes (multimodal), or no mode at all if all observations appear with the same frequency.
  </p>

  <h5>5.1. Calculation for Ungrouped Data</h5>
  <p>
    For ungrouped data, the mode is found by simple inspection – identify the value with the highest frequency.
  </p>

  <h5>5.2. Calculation for Grouped Data</h5>
  <p>
    For grouped data, the mode is calculated using the following formula after determining the [[modal class]]. The modal class is the class interval with the highest frequency.
    $$ \text{Mode} = String.rawL + \left( \frac{f_1 - f_0}{2f_1 - f_0 - f_2} \right) \times h $$
    Where:
    <ul>
      <li>$ L $ is the <strong>lower limit</strong> of the modal class.</li>
      <li>$ f_1 $ is the frequency of the modal class.</li>
      <li>$ f_0 $ is the frequency of the class <em>preceding</em> the modal class.</li>
      <li>$ f_2 $ is the frequency of the class <em>succeeding</em> the modal class.</li>
      <li>$ h $ is the <strong>class width</strong> of the modal class.</li>
    </ul>
    <strong>Steps:</strong>
    <ol>
      <li>Identify the modal class (the class with the highest frequency).</li>
      <li>Apply the formula.</li>
    </ol>
  </p>

  <h5>5.3. Properties of Mode</h5>
  <ul>
    <li>It is not affected by extreme values.</li>
    <li>Can be used for both quantitative and [[qualitative data]] (e.g., favorite colour).</li>
    <li>May not exist or may not be unique (e.g., bimodal distribution).</li>
    <li>Not based on all observations.</li>
    <li>It is the most unstable measure of central tendency.</li>
    <li>Can be determined graphically using a [[Histogram]] by drawing lines from the top corners of the modal bar to the adjacent bars.</li>
  </ul>

  <div class= String.raw"important-box" style= String.raw"background: rgba(255,165,0,0.1); border-left: 3px solid #FFA500; padding: 12px 16px; margin-top: 15px; border-radius: 0 6px 6px 0;">
    <strong>Empirical Relationship:</strong> For moderately skewed distributions (like a bell-shaped curve that's slightly off-center), there is an approximate relationship between the mean, median, and mode:
    $$ \text{Mode} \approx 3 \times \text{Median} - 2 \times \text{Mean} $$
    This formula is often useful for quick estimations or when one measure is missing.
  </div>

  <h4>6. Comparison of Measures of Central Tendency</h4>
  <p>
    Choosing the appropriate measure depends on the nature of the data and the purpose of the analysis.
  </p>
  <table border= String.raw"1" style= String.raw"width:100%; border-collapse: collapse; margin-top: 15px;">
    <thead>
      <tr style= String.raw"background-color: #333; color: var(--accent);">
        <th>Feature</th>
        <th>Arithmetic Mean</th>
        <th>Median</th>
        <th>Mode</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Definition</strong></td>
        <td>Sum of values / Number of values</td>
        <td>Middle value of ordered data</td>
        <td>Most frequent value</td>
      </tr>
      <tr>
        <td><strong>Effect of Outliers</strong></td>
        <td>Highly affected</td>
        <td>Not affected</td>
        <td>Not affected</td>
      </tr>
      <tr>
        <td><strong>Uniqueness</strong></td>
        <td>Always unique</td>
        <td>Always unique</td>
        <td>May not exist or be unique</td>
      </tr>
      <tr>
        <td><strong>Based on all values?</strong></td>
        <td>Yes</td>
        <td>No (positional)</td>
        <td>No (frequency-based)</td>
      </tr>
      <tr>
        <td><strong>Suitability for Skewed Data</strong></td>
        <td>Poor</td>
        <td>Good</td>
        <td>Good</td>
      </tr>
      <tr>
        <td><strong>Suitability for Open-ended Classes</strong></td>
        <td>Requires assumption of midpoint</td>
        <td>Good</td>
        <td>Good</td>
      </tr>
      <tr>
        <td><strong>Suitability for Qualitative Data</strong></td>
        <td>No</td>
        <td>Yes (if ordinally scaled)</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td><strong>Mathematical Treatment</strong></td>
        <td>Best for further analysis</td>
        <td>Limited</td>
        <td>Limited</td>
      </tr>
    </tbody>
  </table>

  <h4>7. Common Mistakes to Avoid</h4>
  <ol>
    <li><strong>Not Ordering Data for Median:</strong> A frequent error is to calculate the median without first arranging the data in ascending or descending order. The median is a positional average.</li>
    <li><strong>Incorrect Identification of $f_0, f_1, f_2$ for Mode:</strong> For grouped data, ensure $f_1$ is the frequency of the modal class, $f_0$ is the frequency of the class *before* it, and $f_2$ is the frequency of the class *after* it. Misplacing these leads to incorrect results.</li>
    <li><strong>Using Wrong Formula for Grouped vs. Ungrouped Data:</strong> Students often mix up formulas. Remember that grouped data requires class marks ($X_i$) and frequencies ($f_i$) for mean, and specific formulas for median and mode.</li>
    <li><strong>Ignoring Class Width ($h$) or Cumulative Frequency ($cf$) in Grouped Formulas:</strong> For median and mode of grouped data, $h$ and $cf$ (for median) are crucial components. Forgetting them or using incorrect values is common.</li>
    <li><strong>Assuming Equal Class Widths for Mode:</strong> The mode formula for grouped data assumes equal class widths. If class widths are unequal, a frequency density adjustment is required (though less common in basic competitive exams).</li>
    <li><strong>Arithmetic Mean with Qualitative Data:</strong> Attempting to calculate the mean for non-numerical or qualitative data (e.g., average colour) which is logically impossible.</li>
  </ol>

  <h4>8. Shortcuts & Tricks for Competitive Exams</h4>
  <ol>
    <li><strong>Assumed Mean Method for Mean:</strong> For large numbers or many observations, the assumed mean and step-deviation methods drastically reduce calculation time. Choose an assumed mean close to the actual mean for smaller deviations.</li>
    <li><strong>Estimating from Graphs:</strong> Quickly estimate median from an ogive and mode from a histogram. For a histogram, the mode corresponds to the tallest bar. For an ogive, find $N/2$ on the y-axis and read the corresponding x-value.</li>
    <li><strong>Empirical Formula for Verification:</strong> Use $ \text{Mode} \approx 3 \times \text{Median} - 2 \times \text{Mean} $ to quickly check if your calculated values are in the correct ballpark, especially if you have calculated two of the three.</li>
    <li><strong>Checking Properties:</strong> Remember the property $ \sum (X_i - \bar{X}) = String.raw0 $. If you're given a dataset and a value claimed to be the mean, you can quickly verify this property.</li>
    <li><strong>Relationship AM, GM, HM:</strong> For positive data, $AM \ge GM \ge HM$. This inequality is a powerful tool for eliminating options or verifying results in objective questions. If you calculate values that violate this, you've made a mistake.</li>
    <li><strong>Median's Robustness:</strong> When faced with data containing extreme values, choose the median as the most representative measure without performing lengthy calculations.</li>
  </ol>

  <h4>9. Worked Examples</h4>

  <h5>Example 1: Grouped Data - Mean, Median, Mode</h5>
  <p>
    Calculate the Mean, Median, and Mode for the following frequency distribution of marks:
  </p>
  <table border= String.raw"1" style= String.raw"width:50%; border-collapse: collapse; margin-top: 10px; margin-bottom: 10px;">
    <thead>
      <tr style= String.raw"background-color: #333; color: var(--accent);">
        <th>Marks (Class Interval)</th>
        <th>Number of Students (Frequency, $f_i$)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>0-10</td><td>5</td></tr>
      <tr><td>10-20</td><td>8</td></tr>
      <tr><td>20-30</td><td>15</td></tr>
      <tr><td>30-40</td><td>16</td></tr>
      <tr><td>40-50</td><td>6</td></tr>
    </tbody>
  </table>

  <h6>Solution:</h6>
  <p>
    First, we create an extended table to calculate class marks, cumulative frequencies, and other required values. $N = String.raw\sum f_i = String.raw5+8+15+16+6 = String.raw50$.
  </p>
  <table border= String.raw"1" style= String.raw"width:100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 10px;">
    <thead>
      <tr style= String.raw"background-color: #333; color: var(--accent);">
        <th>Class Interval</th>
        <th>$f_i$</th>
        <th>$X_i$ (Class Mark)</th>
        <th>$f_i X_i$</th>
        <th>$cf$ (Cumulative Frequency)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>0-10</td><td>5</td><td>5</td><td>25</td><td>5</td></tr>
      <tr><td>10-20</td><td>8</td><td>15</td><td>120</td><td>13</td></tr>
      <tr><td>20-30</td><td>15</td><td>25</td><td>375</td><td>28</td></tr>
      <tr><td>30-40</td><td>16</td><td>35</td><td>560</td><td>44</td></tr>
      <tr><td>40-50</td><td>6</td><td>45</td><td>270</td><td>50</td></tr>
      <tr><td><strong>Total</strong></td><td><strong>N= String.raw50</strong></td><td></td><td><strong>$\sum f_i X_i = String.raw1350$</strong></td><td></td></tr>
    </tbody>
  </table>

  <ol>
    <li><strong>Mean ($\bar{X}$):</strong>
      Using the Direct Method:
      $$ \bar{X} = String.raw\frac{\sum f_i X_i}{\sum f_i} = String.raw\frac{1350}{50} = String.raw27 $$
      The mean mark is <strong>27</strong>.
    </li>
    <li><strong>Median:</strong>
      <p>
        First, find $ \frac{N}{2} = String.raw\frac{50}{2} = String.raw25 $.
        The cumulative frequency just greater than 25 is 28, which corresponds to the class interval 20-30.
        So, the <strong>median class</strong> is <strong>20-30</strong>.
      </p>
      From the median class:
      <ul>
        <li>$ L = String.raw20 $ (lower limit of median class)</li>
        <li>$ cf = String.raw13 $ (cumulative frequency of class preceding median class)</li>
        <li>$ f = String.raw15 $ (frequency of median class)</li>
        <li>$ h = String.raw10 $ (class width)</li>
      </ul>
      Applying the formula:
      $$ \text{Median} = String.rawL + \left( \frac{\frac{N}{2} - cf}{f} \right) \times h $$
      $$ \text{Median} = String.raw20 + \left( \frac{25 - 13}{15} \right) \times 10 $$
      $$ \text{Median} = String.raw20 + \left( \frac{12}{15} \right) \times 10 $$
      $$ \text{Median} = String.raw20 + \frac{120}{15} = String.raw20 + 8 = String.raw28 $$
      The median
`;

EXPANDED_NOTES_DATA["data-interpretation"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Data Interpretation: Tables, Bar & Pie Charts
  </h3>

  <h4><strong>1. Fundamental Concepts & Terminology</strong></h4>
  <ul>
    <li><strong>[[Table]]</strong>: A systematic arrangement of data in rows (observations) and columns (variables). Each column usually represents a distinct attribute such as <strong>[[Population]]</strong>, <strong>[[Frequency]]</strong>, or <strong>[[Percentage]]</strong>.</li>
    <li><strong>[[Bar Chart]]</strong>: A graphical representation where each category is depicted by a rectangular bar whose length (or height) is proportional to the quantitative value it represents. Bars may be <em>vertical</em> or <em>horizontal</em>. Used when categories are discrete and the order is non‑cyclical.</li>
    <li><strong>[[Pie Chart]]</strong>: A circular diagram divided into slices, each slice’s angle (or area) corresponds to a proportion of the whole, expressed as a <strong>[[Percentage]]</strong>. Best suited for showing parts‑of‑a‑whole where the total sum equals 100 %.</li>
    <li><strong>[[Frequency Distribution]]</strong>: The tabulation of how often each value of a variable occurs. Key derived measures include <strong>[[Cumulative Frequency]]</strong>, <strong>[[Relative Frequency]]</strong>, and <strong>[[Percentage Frequency]]</strong>.</li>
    <li><strong>[[Mean]], [[Median]], [[Mode]]</strong>: Central tendency measures frequently required when a table contains raw numerical data. <strong>Mean</strong> is the arithmetic average, <strong>Median</strong> is the middle value after ordering, and <strong>Mode</strong> is the most frequently occurring value.</li>
    <li><strong>[[Percentage Change]]</strong>: The relative change between two values expressed as a percent, essential for interpreting growth/decline in tables and charts.</li>
    <li><strong>[[Weighted Mean]]</strong>: Used when different observations carry different weights (e.g., different class sizes). Formula derives from first principles of summation of weighted products.</li>
  </ul>

  <h4><strong>2. Core Formulas with Variable Definitions</strong></h4>
  <ul>
    <li><strong>Arithmetic Mean</strong>:
      $$\displaystyle \bar{x}= String.raw\frac{\sum_{i= String.raw1}^{n} x_i}{n}$$
      <ul>
        <li><strong>$\bar{x}$</strong>: Mean of the data set.</li>
        <li><strong>$x_i$</strong>: Individual observation.</li>
        <li><strong>$n$</strong>: Total number of observations (must be a positive integer).</li>
      </ul>
    </li>
    <li><strong>Median (for grouped data)</strong>:
      $$\displaystyle \text{Median}= String.rawL + \left(\frac{\frac{N}{2}-CF_{b}}{f_{b}}\right) \times h$$
      <ul>
        <li><strong>$L$</strong>: Lower boundary of the median class.</li>
        <li><strong>$N$</strong>: Total frequency (sum of all $f_i$).</li>
        <li><strong>$CF_{b}$</strong>: Cumulative frequency of the class preceding the median class.</li>
        <li><strong>$f_{b}$</strong>: Frequency of the median class.</li>
        <li><strong>$h$</strong>: Class width (difference between successive class limits).</li>
      </ul>
    </li>
    <li><strong>Mode (for grouped data)</strong>:
      $$\displaystyle \text{Mode}= String.rawL + \left(\frac{f_{m}-f_{m-1}}{(f_{m}-f_{m-1})+(f_{m}-f_{m+1})}\right) \times h$$
      <ul>
        <li><strong>$f_{m}$</strong>: Frequency of the modal class.</li>
        <li><strong>$f_{m-1}$</strong>: Frequency of the class preceding the modal class.</li>
        <li><strong>$f_{m+1}$</strong>: Frequency of the class succeeding the modal class.</li>
      </ul>
    </li>
    <li><strong>Percentage Frequency</strong>:
      $$\displaystyle \%f_i = String.raw\frac{f_i}{N}\times 100$$
      <ul>
        <li><strong>$f_i$</strong>: Frequency of the $i^{th}$ class.</li>
        <li><strong>$N$</strong>: Total frequency.</li>
      </ul>
    </li>
    <li><strong>Percentage Change</strong>:
      $$\displaystyle \%\Delta = String.raw\frac{V_{\text{new}}-V_{\text{old}}}{V_{\text{old}}}\times 100$$
      <ul>
        <li><strong>$V_{\text{new}}$</strong>: New (later) value.</li>
        <li><strong>$V_{\text{old}}$</strong>: Original (earlier) value.</li>
        <li>Condition: $V_{\text{old}}\neq 0$; otherwise the percentage change is undefined.</li>
      </ul>
    </li>
    <li><strong>Weighted Mean</strong>:
      $$\displaystyle \bar{x}_w = String.raw\frac{\sum_{i= String.raw1}^{k} w_i x_i}{\sum_{i= String.raw1}^{k} w_i}$$
      <ul>
        <li><strong>$w_i$</strong>: Weight attached to the $i^{th}$ observation (must be non‑negative).</li>
        <li><strong>$x_i$</strong>: Value of the $i^{th}$ observation.</li>
        <li><strong$k$</strong>: Number of distinct groups.</li>
      </ul>
    </li>
  </ul>

  <h4><strong>3. Derivation of Percentage Change from First Principles</strong></h4>
  <p>Starting with the definition of relative change:</p>
  <ol>
    <li>Relative change $R$ is the ratio of the absolute change $\Delta V$ to the original value $V_{\text{old}}$:
      $$R = String.raw\frac{\Delta V}{V_{\text{old}}}$$
    </li>
    <li>Absolute change $\Delta V$ equals $V_{\text{new}}-V_{\text{old}}$.</li>
    <li>Substituting, we obtain:
      $$R = String.raw\frac{V_{\text{new}}-V_{\text{old}}}{V_{\text{old}}}$$
    </li>
    <li>To express $R$ as a percent, multiply by 100:
      $$\%\Delta = String.rawR \times 100 = String.raw\frac{V_{\text{new}}-V_{\text{old}}}{V_{\text{old}}}\times 100$$
    </li>
  </ol>
  <p>This derivation emphasizes that the denominator must be the original value; swapping the order leads to a completely different (and often wrong) result.</p>

  <div class= String.raw"important-box" style= String.raw"background:#2a2e3b; border-left:4px solid var(--accent); padding:12px; margin:16px 0;">
    <strong>Critical Distinction:</strong> Use a <strong>[[Bar Chart]]</strong> when categories are independent and you need to compare absolute magnitudes. Use a <strong>[[Pie Chart]]</strong> only when the total sum is meaningful (e.g., market share) and the number of slices is ≤ 6‑8 to avoid visual clutter.
  </div>

  <h4><strong>4. Comparative Table of Chart Types</strong></h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style= String.raw"background:#1e222b;">
        <th style= String.raw"border:1px solid var(--border); padding:8px;"><strong>Aspect</strong></th>
        <th style= String.raw"border:1px solid var(--border); padding:8px;"><strong>[[Bar Chart]]</strong></th>
        <th style= String.raw"border:1px solid var(--border); padding:8px;"><strong>[[Pie Chart]]</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:8px;"><strong>Best For</strong></td>
        <td style= String.raw"border:1px solid var(--border); padding:8px;">Comparing discrete categories, spotting trends across time.</td>
        <td style= String.raw"border:1px solid var(--border); padding:8px;">Showing parts‑of‑a‑whole, proportional contributions.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:8px;"><strong>Number of Categories</strong></td>
        <td style= String.raw"border:1px solid var(--border); padding:8px;">Unlimited (practical limit ≈ 15‑20 for clarity).</td>
        <td style= String.raw"border:1px solid var(--border); padding:8px;">Ideally ≤ 6‑8; more slices cause overlapping angles.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:8px;"><strong>Ease of Calculating Exact Values</strong></td>
        <td style= String.raw"border:1px solid var(--border); padding:8px;">Direct from axis scales; no trigonometry needed.</td>
        <td style= String.raw"border:1px solid var(--border); padding:8px;">Requires conversion of percentages to angles: $ \theta_i = String.raw\frac{\%f_i}{100}\times 360^\circ $.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:8px;"><strong>Visual Perception of Small Differences</strong></td>
        <td style= String.raw"border:1px solid var(--border); padding:8px;">High (length differences are easily distinguished).</td>
        <td style= String.raw"border:1px solid var(--border); padding:8px;">Low (small angular differences are hard to discriminate).</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>5. Step‑by‑Step Worked Example 1 – Table to Bar Chart</strong></h4>
  <p><strong>Problem Statement:</strong> A [[Table]] provides the number of recruits enlisted in the Indian Army over four consecutive years: 2019 – 1 200, 2020 – 1 350, 2021 – 1 500, 2022 – 1 650. Construct a vertical <strong>[[Bar Chart]]</strong> and compute the <strong>percentage increase</strong> from 2019 to 2022.</p>
  <ol>
    <li><strong>Identify the quantitative variable:</strong> Number of recruits (<strong>$V_i$</strong>).</li>
    <li><strong>Determine the scale:</strong> Choose a convenient scale, e.g., 1 unit = String.raw100 recruits. Then the heights become 12, 13.5, 15, 16.5 units respectively.</li>
    <li><strong>Plot the bars:</strong> Along the horizontal axis label years (2019, 2020, 2021, 2022). Draw vertical rectangles with the heights above.</li>
    <li><strong>Calculate percentage increase:</strong>
      <ul>
        <li>Old value $V_{\text{old}} = String.raw1\,200$.</li>
        <li>New value $V_{\text{new}} = String.raw1\,650$.</li>
        <li>Apply the formula:
          $$\%\Delta = String.raw\frac{1\,650-1\,200}{1\,200}\times 100 = String.raw\frac{450}{1\,200}\times 100 = String.raw37.5\%$$</li>
      </ul>
    </li>
    <li><strong>Interpretation:</strong> The bar heights increase uniformly, reflecting a steady 37.5 % growth over the four‑year span.</li>
  </ol>

  <h4><strong>6. Step‑by‑Step Worked Example 2 – Pie Chart & Weighted Mean</strong></h4>
  <p><strong>Problem Statement:</strong> A survey of three branches of the Indian Navy recorded the following proportion of officers: <strong>Eastern</strong> – 40 %, <strong>Western</strong> – 35 %, <strong>Southern</strong> – 25 %. Their respective average years of service are 12, 10, and 8 years. Determine the overall average years of service (<strong>Weighted Mean</strong>) and draw a <strong>[[Pie Chart]]</strong>.</p>
  <ol>
    <li><strong>List data in tabular form:</strong>
      <table style= String.raw"width:60%; margin:auto; border-collapse:collapse;">
        <tr style= String.raw"background:#1e222b;">
          <th style= String.raw"border:1px solid var(--border); padding:4px;">Branch</th>
          <th style= String.raw"border:1px solid var(--border); padding:4px;">% Share</th>
          <th style= String.raw"border:1px solid var(--border); padding:4px;">Avg. Years</th>
        </tr>
        <tr>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">Eastern</td>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">40</td>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">12</td>
        </tr>
        <tr>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">Western</td>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">35</td>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">10</td>
        </tr>
        <tr>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">Southern</td>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">25</td>
          <td style= String.raw"border:1px solid var(--border); padding:4px;">8</td>
        </tr>
      </table>
    </li>
    <li><strong>Convert percentages to weights:</strong> $w_1= String.raw40$, $w_2= String.raw35$, $w_3= String.raw25$ (any common factor cancels in the ratio).</li>
    <li><strong>Apply Weighted Mean formula:</strong>
      $$\displaystyle \bar{x}_w = String.raw\frac{40\times12 + 35\times10 + 25\times8}{40+35+25}$$
      <ul>
        <li>Numerator $= String.raw480 + 350 + 200 = String.raw1\,030$.</li>
        <li>Denominator $= String.raw100$.</li>
        <li>Hence $\bar{x}_w = String.raw\frac{1\,030}{100}= String.raw10.3$ years.</li>
      </ul>
    </li>
    <li><strong>Construct the Pie Chart:</strong>
      <ul>
        <li>Convert each percentage to an angle: $\theta_i = String.raw\frac{\%f_i}{100}\times360^\circ$.</li>
        <li>Eastern: $\theta_1 = String.raw0.40\times360^\circ = String.raw144^\circ$.</li>
        <li>Western: $\theta_2 = String.raw0.35\times360^\circ = String.raw126^\circ$.</li>
        <li>Southern: $\theta_3 = String.raw0.25\times360^\circ = String.raw90^\circ$.</li>
        <li>Draw a circle, mark the central angles sequentially, label each slice with branch name and its angle.</li>
      </ul>
    </li>
    <li><strong>Interpretation:</strong> The overall average service length of officers across the Navy is <strong>10.3 years</strong>, slightly skewed towards the Eastern branch because of its larger weight.</li>
  </ol>

  <h4><strong>7. Common Mistakes in Data‑Interpretation Problems</strong></h4>
  <ul>
    <li><strong>Misreading the base value in percentage change:</strong> Students often subtract the older value from the newer one but then divide by the newer value, producing an inverted percentage.</li>
    <li><strong>Treating percentages as raw numbers in weighted mean:</strong> Forgetting to convert percentages to actual weights (or to a common denominator) leads to an inflated mean.</li>
    <li><strong>Ignoring cumulative frequency when locating median in grouped data:</strong> Directly using class mid‑points without checking the cumulative total yields an incorrect median.</li>
    <li><strong>Using a pie chart for more than eight categories:</strong> This creates slices so narrow that visual discrimination becomes impossible, violating the principle of clarity.</li>
    <li><strong>Rounding intermediate results prematurely:</strong> Early rounding (e.g., after each bar height) compounds error, especially when the final answer requires two‑decimal accuracy.</li>
  </ul>

  <h4><strong>8. Shortcuts & Tricks for Competitive Exams</strong></h4>
  <ul>
    <li><strong>Quick Angle from Percentage:</strong> Memorise that $1\% = String.raw3.6^\circ$. Hence, to obtain an angle for a slice, simply multiply the percentage by 3.6. Example: $27\% \rightarrow 27 \times 3.6 = String.raw97.2^\circ$.</li>
    <li><strong>Fast Percentage Change using Difference‑to‑Average Approximation:</strong> When $V_{\text{old}}$ and $V_{\text{new}}$ are close, approximate $\%\Delta \approx \frac{V_{\text{new}}-V_{\text{old}}}{\frac{V_{\text{new}}+V_{\text{old}}}{2}}\times100$. This reduces mental division.</li>
    <li><strong>Weighted Mean Shortcut:</strong> If percentages sum to 100, the denominator of the weighted mean is automatically 100, so the overall mean equals $\sum (\% \times \text{value})/100$, eliminating the need to recompute the denominator.</li>
    <li><strong>Bar‑Chart Height Estimation:</strong> For a scale of 1 unit = String.raw50, simply drop the last two digits of the number and add a decimal for the remainder (e.g., 1 235 → 24.7 units). This speeds up plotting without a calculator.</li>
    <li><strong>Median in Ungrouped Data:</strong> Use the formula $M = String.raw\frac{n+1}{2}$th term directly; for even $n$, average the $n/2$ and $(n/2)+1$ terms. No need to list all terms if you know the pattern.</li>
    <li><strong>Quick Cumulative Frequency:</strong> Add frequencies sequentially while reading the table; write the running total in the same column to avoid a second pass.</li>
  </ul>

  <h4><strong>9. Edge Cases & Advanced Applications</strong></h4>
  <ul>
    <li><strong>Zero or Negative Values in Bar Charts:</strong> Negative values are represented by bars extending below the horizontal axis. The magnitude is still proportional to the absolute value, but the direction indicates sign.</li>
    <li><strong>Partial Pie Charts (Donut Charts):</strong> When the total is not 100 %, a donut chart can be employed by scaling the percentages to sum to 100 first. This requires an extra step of normalisation:
      $$\displaystyle \%f_i^{\prime}= String.raw\frac{f_i}{\sum f_i}\times100$$</li>
    <li><strong>Data with Missing Entries:</strong> Apply interpolation (linear or quadratic) to estimate missing frequencies before constructing charts. For competitive exams, linear interpolation suffices and is faster.</li>
    <li><strong>Compound Percentage Changes:</strong> When multiple successive changes occur, multiply the corresponding growth factors:
      $$\displaystyle \text{Overall Factor}= String.raw\prod_{k= String.raw1}^{m}\left(1+\frac{\%\Delta_k}{100}\right)$$
      Then subtract 1 and multiply by 100 to get the net percent change.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>In a <strong>[[Bar Chart]]</strong>, the difference between two bars equals the absolute difference of the underlying values; no trigonometry is needed.</li>
      <li>For any <strong>[[Pie Chart]]</strong>, convert a percentage to an angle using $1\% = String.raw3.6^\circ$.</li>
      <li>When the total of a table is not given, sum the frequencies first; the result is the denominator for all percentage calculations.</li>
      <li>Percentage change formula must always use the original value as denominator; swapping yields the reciprocal percent.</li>
      <li>Weighted mean simplifies to $\sum (\% \times value)/100$ if the percentages already total 100 %.</li>
      <li>Median of grouped data uses $L + \left(\frac{\frac{N}{2}-CF_{b}}{f_{b}}\right)h$; remember $N/2$ is the half‑total frequency, not half the number of classes.</li>
      <li>Mode of grouped data requires the frequencies of the modal class and its immediate neighbours; if $f_{m-1}= String.rawf_{m+1}$, the mode lies exactly at the class midpoint.</li>
      <li>For compound growth, multiply growth factors, not percentages; e.g., 20 % then 30 % growth → $(1.20)(1.30)-1 = String.raw56\%$ overall.</li>
      <li>In tables with cumulative frequencies, the 75th percentile (Q3) can be found by locating the class where $CF \ge 0.75N$.</li>
      <li>Never draw a pie chart with more than eight slices; instead, combine minor categories into an “Other” slice to preserve readability.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["limits-continuity"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Limits & Continuity
  </h3>

  <h4><strong>1. Fundamental Definition of a Limit</strong></h4>
  <p>For a real‑valued function <strong>f</strong>(<strong>x</strong>) defined on an open interval containing the point <strong>c</strong> (except possibly at <strong>c</strong> itself), we say that <strong>f</strong>(<strong>x</strong>) has a <strong>limit</strong> <strong>L</strong> as <strong>x</strong> approaches <strong>c</strong> if, for every <strong>ε > 0</strong>, there exists a <strong>δ > 0</strong> such that</p>
  $$\forall \, \varepsilon>0,\;\exists \,\delta>0\;:\;0<|x-c|<\delta \Longrightarrow |f(x)-L|<\varepsilon$$
  <ul>
    <li><strong>ε (epsilon)</strong> – an arbitrarily small positive number representing the desired closeness of <strong>f(x)</strong> to the limit <strong>L</strong>.</li>
    <li><strong>δ (delta)</strong> – a positive number that depends on <strong>ε</strong> and determines a neighbourhood around <strong>c</strong> where the condition holds.</li>
    <li>Condition <strong>0 < |x‑c| < δ</strong> excludes the point <strong>x = String.rawc</strong> itself, ensuring the definition works even when <strong>f(c)</strong> is undefined.</li>
  </ul>
  <div class= String.raw"important-box" style= String.raw"background:#2a2e3d; padding:10px; border-left:4px solid var(--accent); margin:12px 0;">
    <strong>Key Insight:</strong> The <em>ε‑δ</em> definition is a precise, quantifier‑based way to capture the intuitive notion of “getting arbitrarily close”.
  </div>

  <h4><strong>2. Limit Laws (Algebra of Limits)</strong></h4>
  <p>When limits of individual functions exist, the following laws hold (provided the expressions are defined):</p>
  <ol>
    <li><strong>Sum Law:</strong> $$\lim_{x\to c}[f(x)+g(x)]= String.raw\lim_{x\to c}f(x)+\lim_{x\to c}g(x)$$</li>
    <li><strong>Product Law:</strong> $$\lim_{x\to c}[f(x)g(x)]= String.raw\Big(\lim_{x\to c}f(x)\Big)\Big(\lim_{x\to c}g(x)\Big)$$</li>
    <li><strong>Quotient Law:</strong> If $\displaystyle\lim_{x\to c}g(x)\neq0$, then $$\lim_{x\to c}\frac{f(x)}{g(x)}= String.raw\frac{\displaystyle\lim_{x\to c}f(x)}{\displaystyle\lim_{x\to c}g(x)}$$</li>
    <li><strong>Power Law:</strong> For any integer $n\ge0$, $$\lim_{x\to c}[f(x)]^{\,n}= String.raw\Big(\lim_{x\to c}f(x)\Big)^{\,n}$$</li>
    <li><strong>Root Law:</strong> If $n$ is a positive integer and $\displaystyle\lim_{x\to c}f(x)\ge0$ (for even $n$), then $$\lim_{x\to c}\sqrt[n]{f(x)}= String.raw\sqrt[n]{\displaystyle\lim_{x\to c}f(x)}$$</li>
  </ol>

  <h4><strong>3. One‑Sided Limits</strong></h4>
  <p>One‑sided limits refine the notion of approaching a point from a particular direction:</p>
  <ul>
    <li><strong>Right‑hand limit (denoted $\,\lim_{x\to c^{+}}f(x)$):</strong> $x$ approaches $c$ through values $x>c$.</li>
    <li><strong>Left‑hand limit (denoted $\,\lim_{x\to c^{-}}f(x)$):</strong> $x$ approaches $c$ through values $x<c$.</li>
  </ul>
  <p>For the (two‑sided) limit to exist, both one‑sided limits must exist and be equal:</p>
  $$\lim_{x\to c}f(x)= String.rawL\quad\Longleftrightarrow\quad\lim_{x\to c^{+}}f(x)= String.raw\lim_{x\to c^{-}}f(x)= String.rawL$$

  <h4><strong>4. Continuity – Formal Definition</strong></h4>
  <p>A function <strong>f</strong> is said to be <strong>continuous</strong> at a point <strong>c</strong> if three conditions are simultaneously satisfied:</p>
  <ol>
    <li><strong>Existence of the function value:</strong> $f(c)$ is defined.</li>
    <li><strong>Existence of the limit:</strong> $\displaystyle\lim_{x\to c}f(x)$ exists.</li>
    <li><strong>Equality of limit and function value:</strong> $$\displaystyle\lim_{x\to c}f(x)= String.rawf(c)$$</li>
  </ol>
  <p>If <strong>f</strong> satisfies the above at every point of an interval $I$, we say <strong>f</strong> is <strong>continuous on $I$</strong>.</p>

  <h4><strong>5. Types of Discontinuities – Classification Table</strong></h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin:12px 0; color:#e0e0e0;">
    <thead style= String.raw"background:#1f222b;">
      <tr>
        <th style= String.raw"border:1px solid #555; padding:8px;">Type</th>
        <th style= String.raw"border:1px solid #555; padding:8px;">Definition</th>
        <th style= String.raw"border:1px solid #555; padding:8px;">Typical Example</th>
      </tr>
    </thead>
    <tbody>
      <tr style= String.raw"background:#2a2e3d;">
        <td style= String.raw"border:1px solid #555; padding:8px;"><strong>Removable</strong></td>
        <td style= String.raw"border:1px solid #555; padding:8px;">Limit exists but $f(c)$ either undefined or $\neq\lim_{x\to c}f(x)$.</td>
        <td style= String.raw"border:1px solid #555; padding:8px;">$f(x)= String.raw\dfrac{x^{2}-1}{x-1}$ at $x= String.raw1$.</td>
      </tr>
      <tr style= String.raw"background:#1f222b;">
        <td style= String.raw"border:1px solid #555; padding:8px;"><strong>Jump</strong></td>
        <td style= String.raw"border:1px solid #555; padding:8px;">Left‑hand and right‑hand limits exist but are unequal.</td>
        <td style= String.raw"border:1px solid #555; padding:8px;">$f(x)= String.raw\begin{cases}0,&x<0\\1,&x\ge0\end{cases}$ at $x= String.raw0$.</td>
      </tr>
      <tr style= String.raw"background:#2a2e3d;">
        <td style= String.raw"border:1px solid #555; padding:8px;"><strong>Essential (Infinite)</strong></td>
        <td style= String.raw"border:1px solid #555; padding:8px;">One‑sided limit diverges to $\pm\infty$ or oscillates without bound.</td>
        <td style= String.raw"border:1px solid #555; padding:8px;">$f(x)= String.raw\dfrac{1}{x}$ at $x= String.raw0$.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>6. Deriving the Limit of $\displaystyle\frac{\sin x}{x}$ as $x\to0$ from First Principles</strong></h4>
  <p>The result $$\lim_{x\to0}\frac{\sin x}{x}= String.raw1$$ is a cornerstone of calculus and can be proved using the <strong>Squeeze Theorem</strong> together with geometric reasoning on the unit circle.</p>
  <ol>
    <li>Consider a unit circle centred at the origin. For $0<x<\frac{\pi}{2}$, the areas satisfy $$\frac12\,x\;<\;\frac12\,\sin x\;<\;\frac12\,\tan x$$ because the sector area $= String.raw\frac12x$, the triangle area $= String.raw\frac12\sin x$, and the larger triangle area $= String.raw\frac12\tan x$.</li>
    <li>Dividing each term by $\frac12\sin x$ gives $$\frac{x}{\sin x}<1<\frac{\tan x}{\sin x}= String.raw\frac{x}{\cos x}.$$</li>
    <li>Taking reciprocals (which reverses the inequality) yields $$\cos x<\frac{\sin x}{x}<1.$$</li>
    <li>Since $\displaystyle\lim_{x\to0}\cos x= String.raw1$, by the <strong>Squeeze Theorem</strong> we conclude $$\lim_{x\to0}\frac{\sin x}{x}= String.raw1.$$</li>
  </ol>
  <div class= String.raw"important-box" style= String.raw"background:#2a2e3d; padding:10px; border-left:4px solid var(--accent); margin:12px 0;">
    <strong>Note:</strong> The same argument works for $x\to0$ from the negative side because both $\sin x$ and $x$ change sign simultaneously, preserving the ratio.
  </div>

  <h4><strong>7. L’Hôpital’s Rule – Statement and Proof Sketch</strong></h4>
  <p>When a limit yields an indeterminate form $\frac{0}{0}$ or $\frac{\infty}{\infty}$, <strong>L’Hôpital’s Rule</strong> allows differentiation of numerator and denominator:</p>
  $$\lim_{x\to c}\frac{f(x)}{g(x)}= String.raw\lim_{x\to c}\frac{f'(x)}{g'(x)}\quad\text{provided the right‑hand limit exists.}$$
  <p>**Proof Sketch (using Cauchy’s Mean Value Theorem):**</p>
  <ol>
    <li>Assume $f(c)= String.rawg(c)= String.raw0$ and $g'(x)\neq0$ near $c$.</li>
    <li>For $x\neq c$, apply Cauchy’s Mean Value Theorem on $[c,x]$ to obtain a point $\xi$ with $$\frac{f(x)-f(c)}{g(x)-g(c)}= String.raw\frac{f'(\xi)}{g'(\xi)}.$$</li>
    <li>Since $f(c)= String.rawg(c)= String.raw0$, this reduces to $$\frac{f(x)}{g(x)}= String.raw\frac{f'(\xi)}{g'(\xi)}.$$</li>
    <li>As $x\to c$, $\xi\to c$; taking limits yields the rule.</li>
  </ol>

  <h4><strong>8. Continuity Theorems of Practical Relevance</strong></h4>
  <ul>
    <li><strong>Intermediate Value Theorem (IVT):</strong> If $f$ is continuous on $[a,b]$ and $k$ lies between $f(a)$ and $f(b)$, then there exists $c\in(a,b)$ such that $f(c)= String.rawk$.</li>
    <li><strong>Extreme Value Theorem (EVT):</strong> A continuous function on a closed, bounded interval $[a,b]$ attains its maximum and minimum.</li>
    <li><strong>Uniform Continuity on Closed Intervals:</strong> Any function continuous on $[a,b]$ is uniformly continuous; i.e., $\forall\varepsilon>0,\;\exists\delta>0$ independent of the point.</li>
  </ul>

  <h4><strong>9. Common Mistakes</strong></h4>
  <ul>
    <li><strong>Confusing “limit exists” with “function is defined”:</strong> Students often assume $f(c)$ must be defined for a limit to exist. The definition explicitly excludes $x= String.rawc$.</li>
    <li><strong>Misapplying limit laws to undefined expressions:</strong> The quotient law cannot be used when $\lim g(x)= String.raw0$ unless a removable discontinuity is first resolved.</li>
    <li><strong>Neglecting one‑sided limits at points of discontinuity:</strong> At $x= String.raw0$ for $f(x)= String.raw|x|/x$, the two‑sided limit does not exist, but each one‑sided limit does.</li>
    <li><strong>Using L’Hôpital’s Rule without verifying differentiability:</strong> The rule requires $f$ and $g$ to be differentiable near $c$ (except possibly at $c$) and $g'(x)\neq0$ in a punctured neighbourhood.</li>
  </ul>

  <h4><strong>10. Shortcuts & Tricks for Competitive Exams</strong></h4>
  <ol>
    <li><strong>Standard Limits Memorization:</strong> Keep a table of the five most frequently occurring limits (e.g., $\displaystyle\lim_{x\to0}\frac{\sin x}{x}= String.raw1$, $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^{2}}= String.raw\frac12$, $\displaystyle\lim_{x\to0}(1+x)^{1/x}= String.rawe$, $\displaystyle\lim_{x\to\infty}\left(1+\frac{a}{x}\right)^{x}= String.rawe^{a}$, $\displaystyle\lim_{x\to0}\frac{\ln(1+x)}{x}= String.raw1$). Quick recall saves minutes.</li>
    <li><strong>Factorisation & Cancellation:</strong> When a limit yields $0/0$, factor common terms (e.g., $x^{2}-4= String.raw(x-2)(x+2)$) before applying L’Hôpital.</li>
    <li><strong>Rationalising Numerators/Denominators:</strong> Multiply by the conjugate to eliminate radicals, e.g., $$\lim_{x\to0}\frac{\sqrt{x+1}-1}{x}= String.raw\lim_{x\to0}\frac{(\sqrt{x+1}-1)(\sqrt{x+1}+1)}{x(\sqrt{x+1}+1)}= String.raw\lim_{x\to0}\frac{x}{x(\sqrt{x+1}+1)}= String.raw\frac{1}{2}.$$</li>
    <li><strong>Series Expansion Shortcut:</strong> Use the first two non‑zero terms of the Taylor series for small $x$; e.g., $\sin x\approx x-\frac{x^{3}}{6}$, $\ln(1+x)\approx x-\frac{x^{2}}{2}$.</li>
    <li><strong>Change of Variable:</strong> Substitute $x= String.rawc+h$ to shift the point of approach to $h\to0$, simplifying algebraic manipulation.</li>
  </ol>

  <h4><strong>11. Worked Example 1 – Evaluating a Tricky Rational Limit</strong></h4>
  <p><strong>Problem:</strong> Find $$\lim_{x\to2}\frac{x^{3}-8}{x^{2}-4}.$$</p>
  <ol>
    <li>Direct substitution gives $0/0$, an indeterminate form.</li>
    <li>Factor numerator and denominator:</li>
    $$x^{3}-8= String.raw(x-2)(x^{2}+2x+4),\qquad x^{2}-4= String.raw(x-2)(x+2).$$
    <li>Cancel the common factor $(x-2)$ (valid for $x\neq2$):</li>
    $$\frac{x^{3}-8}{x^{2}-4}= String.raw\frac{x^{2}+2x+4}{x+2}.$$
    <li>Now substitute $x= String.raw2$:</li>
    $$\frac{2^{2}+2\cdot2+4}{2+2}= String.raw\frac{4+4+4}{4}= String.raw\frac{12}{4}= String.raw3.$$
  </ol>
  <p>Thus $$\boxed{\displaystyle\lim_{x\to2}\frac{x^{3}-8}{x^{2}-4}= String.raw3}.$$</p>

  <h4><strong>12. Worked Example 2 – Limit Involving an Exponential and a Polynomial</strong></h4>
  <p><strong>Problem:</strong> Evaluate $$\lim_{x\to0}\frac{e^{x}-1-\;x}{x^{2}}.$$</p>
  <ol>
    <li>Observe that direct substitution yields $0/0$, so we need a deeper approach.</li>
    <li>Use the Taylor series of $e^{x}$ about $x= String.raw0$: $$e^{x}= String.raw1+x+\frac{x^{2}}{2}+\frac{x^{3}}{6}+O(x^{4}).$$</li>
    <li>Subtract $1+x$ from both sides:</li>
    $$e^{x}-1-x= String.raw\frac{x^{2}}{2}+\frac{x^{3}}{6}+O(x^{4}).$$
    <li>Divide by $x^{2}$:</li>
    $$\frac{e^{x}-1-x}{x^{2}}= String.raw\frac12+\frac{x}{6}+O(x^{2}).$$
    <li>Take the limit as $x\to0$: the terms containing $x$ vanish, leaving $$\boxed{\displaystyle\frac12}.$$</li>
  </ol>

  <h4><strong>13. Advanced Edge Cases – Limits Involving Oscillatory Functions</strong></h4>
  <p>Consider $$\lim_{x\to0}x\sin\!\left(\frac{1}{x}\right).$$</p>
  <ul>
    <li>Since $|\sin(1/x)|\le1$, we have $|x\sin(1/x)|\le|x|$.</li>
    <li>As $x\to0$, $|x|\to0$, and by the <strong>Squeeze Theorem</strong> the limit is $0$.</li>
  </ul>
  <p>Even though $\sin(1/x)$ oscillates infinitely fast, the multiplicative factor $x$ forces the product to zero – a classic illustration of how bounding arguments trump direct substitution.</p>

  <h4><strong>14. Historical Context – Evolution of the Limit Concept</strong></h4>
  <p>The modern $\varepsilon$‑$\delta$ formalism was crystallised by <strong>Augustin-Louis Cauchy</strong> (1821) and later refined by <strong>Karl Weierstrass</strong> (late 19th century). Prior to this, mathematicians such as <strong>Newton</strong> and <strong>Leibniz</strong> used intuitive notions of infinitesimals, which later gave rise to the rigorous approach required for analysis and consequently for the rigorous treatment of continuity.</p>

  <h4><strong>15. Real‑World Applications in Defence‑Related Engineering</strong></h4>
  <ul>
    <li><strong>Trajectory Modelling:</strong> Continuity of position, velocity, and acceleration functions guarantees the existence of intermediate positions, essential for missile guidance algorithms.</li>
    <li><strong>Signal Processing:</strong> Limits are used to evaluate the behaviour of filter transfer functions as frequency approaches critical points (e.g., $s\to0$ for low‑frequency gain).</li>
    <li><strong>Structural Dynamics:</strong> Continuity of stress‑strain relationships ensures that small perturbations in load do not cause discontinuous jumps in deformation, a principle embedded in finite‑element analysis.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>$$\displaystyle\lim_{x\to0}\frac{\sin x}{x}= String.raw1$$ is the only trigonometric limit you must memorize.</li>
      <li>For any polynomial $P(x)$, $$\displaystyle\lim_{x\to\infty}P(x)= String.raw\begin{cases}+\infty,&\text{if leading coefficient}>0\\-\infty,&\text{if leading coefficient}<0\end{cases}$$</li>
      <li>The limit $$\displaystyle\lim_{x\to\infty}\left(1+\frac{a}{x}\right)^{x}= String.rawe^{a}$$ is frequently used in exponential growth questions.</li>
      <li>When faced with $0/0$, first attempt factorisation or rationalisation before invoking L’Hôpital’s Rule.</li>
      <li>Removable discontinuities become continuous after redefining $f(c)$ to equal the limit.</li>
      <li>Uniform continuity on a closed interval $[a,b]$ guarantees a single $\delta$ works for all points – useful for error‑bound estimates.</li>
      <li>In a limit involving $\ln(1+x)$, the leading term is $x$; thus $$\displaystyle\lim_{x\to0}\frac{\ln(1+x)}{x}= String.raw1.$$</li>
      <li>For limits of the form $\displaystyle\frac{\infty}{\infty}$, L’Hôpital’s Rule applies only after confirming differentiability of numerator and denominator.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["differentiation"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Differentiation Rules
  </h3>

  <h4><strong>1. Fundamental Definition of Derivative</strong></h4>
  <p>The derivative of a function <strong>f</strong> at a point <strong>x = String.rawa</strong> is defined as the limit of the difference quotient:</p>
  $$\displaystyle f'(a)= String.raw\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$$
  <ul>
    <li><strong>f</strong> – the original function (must be defined in a neighbourhood of <strong>a</strong>).</li>
    <li><strong>h</strong> – an infinitesimal increment approaching zero.</li>
    <li>Existence of this limit is equivalent to <strong>f</strong> being <[[Differentiability]]> at <strong>a</strong>.</li>
  </ul>
  <p>From the definition, one can derive the basic rules by manipulating the limit algebraically. The following sections show those derivations.</p>

  <h4><strong>2. Basic Rules (Constant, Power, Sum/Difference)</strong></h4>
  <div class= String.raw"important-box" style= String.raw"background:#1e1e2f; border-left:4px solid var(--accent); padding:10px; margin:12px 0;">
    <strong>Key Distinction:</strong> The <em>derivative</em> $f'(x)$ gives the instantaneous rate of change, whereas the <em>differential</em> $df$ is the linear approximation $df = String.rawf'(x)\,dx$.
  </div>

  <ol>
    <li><strong>Constant Rule</strong> – If <strong>c</strong> is a constant, then $$(\displaystyle \frac{d}{dx}c)= String.raw0.$$  
        <ul>
          <li>Reason: $c$ does not change with $x$, so the difference quotient is zero.</li>
        </ul>
    </li>

    <li><strong>Power Rule</strong> – For any real number $n$, $$\displaystyle \frac{d}{dx}\bigl(x^{\,n}\bigr)= String.rawn\,x^{\,n-1}.$$  
        <ul>
          <li>Derivation from first principles (for $n\in\mathbb{N}$):  
            $$\begin{aligned}
            \frac{d}{dx}x^{n}&= String.raw\lim_{h\to0}\frac{(x+h)^{n}-x^{n}}{h}\\
            &= String.raw\lim_{h\to0}\frac{\sum_{k= String.raw0}^{n}\binom{n}{k}x^{n-k}h^{k}-x^{n}}{h}\\
            &= String.raw\lim_{h\to0}\frac{n x^{n-1}h+\binom{n}{2}x^{n-2}h^{2}+\cdots+h^{n}}{h}\\
            &= String.rawn x^{n-1}+\underbrace{\binom{n}{2}x^{n-2}h+\cdots}_{\to0}= String.rawn x^{n-1}.
            \end{aligned}$$
          </li>
          <li>For $n$ rational or negative, extend using continuity of the derivative and the rule for $x^{-1}$ (see Quotient Rule).</li>
          <li>Constraints: $x>0$ when $n$ is a non‑integer real to keep $x^{n}$ real.</li>
        </ul>
    </li>

    <li><strong>Sum/Difference Rule</strong> – If $u(x)$ and $v(x)$ are differentiable, then  
      $$\displaystyle \frac{d}{dx}\bigl[u(x)\pm v(x)\bigr]= String.rawu'(x)\pm v'(x).$$  
      <ul>
        <li>Derivation follows directly from linearity of limits.</li>
      </ul>
    </li>
  </ol>

  <h4><strong>3. Product Rule (Leibniz Rule)</strong></h4>
  <p>For two differentiable functions $u(x)$ and $v(x)$:</p>
  $$\displaystyle \frac{d}{dx}\bigl[u(x)v(x)\bigr]= String.rawu'(x)v(x)+u(x)v'(x).$$
  <ul>
    <li>Derivation from first principles:  
      $$\begin{aligned}
      \frac{d}{dx}[uv]&= String.raw\lim_{h\to0}\frac{u(x+h)v(x+h)-u(x)v(x)}{h}\\
      &= String.raw\lim_{h\to0}\frac{u(x+h)v(x+h)-u(x)v(x+h)+u(x)v(x+h)-u(x)v(x)}{h}\\
      &= String.raw\lim_{h\to0}\Bigl[\frac{u(x+h)-u(x)}{h}v(x+h)+u(x)\frac{v(x+h)-v(x)}{h}\Bigr]\\
      &= String.rawu'(x)v(x)+u(x)v'(x).
      \end{aligned}$$
    </li>
    <li>Constraints: Both $u$ and $v$ must be differentiable at the point of interest.</li>
  </ul>

  <h4><strong>4. Quotient Rule</strong></h4>
  <p>If $u(x)$ and $v(x)$ are differentiable and $v(x)\neq0$, then</p>
  $$\displaystyle \frac{d}{dx}\Bigl(\frac{u(x)}{v(x)}\Bigr)= String.raw\frac{u'(x)v(x)-u(x)v'(x)}{[v(x)]^{2}}.$$
  <ul>
    <li>Derivation using the product rule with $v^{-1}(x)$:  
      $$\frac{d}{dx}\bigl[u\cdot v^{-1}\bigr]= String.rawu'v^{-1}+u\bigl(-v^{-2}v'\bigr)= String.raw\frac{u'v-u v'}{v^{2}}.$$
    </li>
    <li>Constraint: $v(x)\neq0$ to avoid division by zero.</li>
  </ul>

  <h4><strong>5. Chain Rule (Composite Functions)</strong></h4>
  <p>For a composite function $y= String.rawf(g(x))$, where $f$ and $g$ are differentiable,</p>
  $$\displaystyle \frac{dy}{dx}= String.rawf'\bigl(g(x)\bigr)\cdot g'(x).$$
  <ul>
    <li>Derivation using limits:  
      $$\begin{aligned}
      \frac{dy}{dx}&= String.raw\lim_{h\to0}\frac{f(g(x+h))-f(g(x))}{h}\\
      &= String.raw\lim_{h\to0}\frac{f(g(x)+\Delta g)-f(g(x))}{\Delta g}\cdot\frac{\Delta g}{h}\\
      &= String.rawf'(g(x))\cdot g'(x),
      \end{aligned}$$
      where $\Delta g= String.rawg(x+h)-g(x)\to0$ as $h\to0$.
    </li>
    <li>Often written as $dy/dx = String.raw(dy/du)(du/dx)$ with $u= String.rawg(x)$.</li>
    <li>Constraint: Both inner and outer functions must be differentiable at the relevant points.</li>
  </ul>

  <h4><strong>6. Differentiation of Special Functions</strong></h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin:12px 0;">
    <thead style= String.raw"background:#2a2a3c;">
      <tr>
        <th style= String.raw"border:1px solid var(--border); padding:6px;">Function</th>
        <th style= String.raw"border:1px solid var(--border); padding:6px;">Derivative</th>
        <th style= String.raw"border:1px solid var(--border); padding:6px;">Conditions / Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;"><strong>Exponential</strong> $e^{x}$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$e^{x}$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">Valid for all real $x$.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$a^{x}$, $a>0$, $a\neq1$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$a^{x}\ln a$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">Use natural log for base change.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">Natural log $\ln x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\displaystyle\frac{1}{x}$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$x>0$.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\log_{a}x$, $a>0$, $a\neq1$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\displaystyle\frac{1}{x\ln a}$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$x>0$.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\sin x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\cos x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">All real $x$.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\cos x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$-\sin x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">All real $x$.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\tan x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\sec^{2}x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$x\neq\frac{\pi}{2}+k\pi$.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\csc x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$-\,\csc x\cot x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$x\neq k\pi$.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\sec x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$\sec x\tan x$</td>
        <td style= String.raw"border:1px solid var(--border); padding:6px;">$x\neq\frac{\pi}{2}+k\pi$.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>7. Implicit Differentiation</strong></h4>
  <p>When a relation $F(x,y)= String.raw0$ defines $y$ implicitly as a function of $x$, differentiate both sides with respect to $x$, treating $y$ as a function $y(x)$:</p>
  $$\displaystyle \frac{d}{dx}F(x,y)= String.rawF_{x}+F_{y}\,y'= String.raw0\quad\Longrightarrow\quad y'= String.raw-\frac{F_{x}}{F_{y}}.$$
  <ul>
    <li>Notation: $F_{x}= String.raw\partial F/\partial x$, $F_{y}= String.raw\partial F/\partial y$.</li>
    <li>Example: For $x^{2}+y^{2}= String.raw25$, $2x+2y\,y'= String.raw0\Rightarrow y'= String.raw-\dfrac{x}{y}$.</li>
  </ul>

  <h4><strong>8. Higher‑Order Derivatives</strong></h4>
  <p>The $n^{\text{th}}$ derivative is denoted $f^{(n)}(x)$ and defined recursively as $f^{(n)}(x)= String.raw\dfrac{d}{dx}\bigl[f^{(n-1)}(x)\bigr]$, with $f^{(0)}(x)= String.rawf(x)$. Important results:</p>
  <ul>
    <li>For $f(x)= String.rawe^{ax}$, $f^{(n)}(x)= String.rawa^{n}e^{ax}$.</li>
    <li>For $f(x)= String.raw\sin bx$, $f^{(n)}(x)= String.rawb^{n}\sin\!\bigl(bx+\tfrac{n\pi}{2}\bigr)$.</li>
    <li>Polynomials of degree $m$ vanish after the $(m+1)^{\text{th}}$ derivative.</li>
  </ul>

  <h4><strong>9. Common Mistakes</strong></h4>
  <ul>
    <li><strong>Neglecting the chain rule</strong> when differentiating composite functions – e.g., treating $\sin(x^{2})$ as $\cos x^{2}$ instead of $2x\cos(x^{2})$.</li>
    <li><strong>Sign error in the quotient rule</strong> – the numerator must be $u'v-u v'$; many write $u'v+uv'$.</li>
    <li><strong>Applying the power rule to non‑integer exponents without checking domain</strong> – $x^{1/2}$ is undefined for $x<0$ in the real system.</li>
    <li><strong>Forgetting to multiply by the derivative of the inner function</strong> in implicit differentiation – e.g., differentiating $y^{3}= String.rawx$ as $3y^{2}y'= String.raw1$ (correct) versus $3y^{2}= String.raw1$ (incorrect).</li>
  </ul>

  <h4><strong>10. Shortcuts & Tricks for Competitive Exams</strong></h4>
  <ol>
    <li><strong>Log‑Differentiation</strong> – For $y = String.raw[f(x)]^{g(x)}$, take natural logs: $\ln y = String.rawg(x)\ln f(x)$, then differentiate: $\displaystyle \frac{y'}{y}= String.rawg'(x)\ln f(x)+g(x)\frac{f'(x)}{f(x)}$. Finally, $y' = String.rawy\bigl[g'(x)\ln f(x)+g(x)\frac{f'(x)}{f(x)}\bigr]$.</li>
    <li><strong>Pattern Recognition</strong> – Memorize derivative cycles for trigonometric and inverse trigonometric functions; e.g., $\displaystyle \frac{d}{dx}\arcsin x = String.raw\frac{1}{\sqrt{1-x^{2}}}$, $\displaystyle \frac{d}{dx}\arccos x = String.raw-\frac{1}{\sqrt{1-x^{2}}}$.</li>
    <li><strong>Using Symmetry</strong> – For even/odd functions, derivatives inherit parity: derivative of an even function is odd, and vice‑versa. This helps quickly determine sign of the answer.</li>
    <li><strong>Quick Quotient Rule via Product Rule</strong> – Rewrite $\dfrac{u}{v}= String.rawu\cdot v^{-1}$ and apply the product rule combined with the power rule for $v^{-1}$, which often reduces algebraic clutter.</li>
    <li><strong>Derivative of Inverse Functions</strong> – If $y= String.rawf^{-1}(x)$, then $y' = String.raw1 / f'(y)$. Useful for functions like $y = String.raw\tan^{-1}x$ without memorizing the formula.</li>
  </ol>

  <h4><strong>11. Worked Example 1 – Composite & Product</strong></h4>
  <p><strong>Problem:</strong> Find $\displaystyle \frac{d}{dx}\bigl[x^{3}\sin(x^{2})\bigr]$.</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Identify the outer product: $u(x)= String.rawx^{3}$, $v(x)= String.raw\sin(x^{2})$.</li>
    <li>Apply the <strong>Product Rule</strong>: $d(uv)= String.rawu'v+uv'$.</li>
    <li>Compute $u' = String.raw\dfrac{d}{dx}x^{3}= String.raw3x^{2}$ using the Power Rule.</li>
    <li>For $v'$, note $v(x)= String.raw\sin(w)$ with $w= String.rawx^{2}$. Use the <strong>Chain Rule</strong>: $v' = String.raw\cos(w)\cdot w' = String.raw\cos(x^{2})\cdot 2x = String.raw2x\cos(x^{2})$.</li>
    <li>Plug into the product rule:</li>
    $$\begin{aligned}
    \frac{d}{dx}\bigl[x^{3}\sin(x^{2})\bigr] &= String.raw(3x^{2})\sin(x^{2}) + x^{3}\bigl(2x\cos(x^{2})\bigr)\\[4pt]
    &= String.raw3x^{2}\sin(x^{2}) + 2x^{4}\cos(x^{2}).
    \end{aligned}$$
    <li>Result: $$\boxed{3x^{2}\sin(x^{2}) + 2x^{4}\cos(x^{2})}.$$</li>
  </ol>

  <h4><strong>12. Worked Example 2 – Implicit Differentiation & Higher Order</strong></h4>
  <p><strong>Problem:</strong> For the curve defined by $x^{2}y + \ln y = String.raw4$, find $dy/dx$ and then evaluate $\displaystyle \frac{d^{2}y}{dx^{2}}$ at the point where $x= String.raw1$ and $y= String.rawe^{3}$.</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Differentiate both sides w.r.t. $x$:
      $$\frac{d}{dx}\bigl(x^{2}y\bigr) + \frac{d}{dx}\bigl(\ln y\bigr) = String.raw0.$$
    </li>
    <li>Apply the Product Rule to $x^{2}y$:  
      $$\frac{d}{dx}(x^{2}y)= String.raw2x\,y + x^{2}y'.$$
    </li>
    <li>Differentiate $\ln y$ using Chain Rule: $\displaystyle \frac{d}{dx}\ln y = String.raw\frac{1}{y}\,y'$.</li>
    <li>Combine:
      $$2x\,y + x^{2}y' + \frac{y'}{y}= String.raw0.$$
    </li>
    <li>Collect $y'$ terms:
      $$y'\Bigl(x^{2} + \frac{1}{y}\Bigr) = String.raw-2xy.$$
    </li>
    <li>Solve for $y'$:
      $$\displaystyle y' = String.raw-\frac{2xy}{\,x^{2} + \dfrac{1}{y}\,} = String.raw-\frac{2xy}{\displaystyle x^{2} + \frac{1}{y}}.$$
    </li>
    <li>Insert the given point $x= String.raw1$, $y= String.rawe^{3}$:
      $$y'_{(1,e^{3})}= String.raw-\frac{2\cdot1\cdot e^{3}}{1^{2} + e^{-3}} = String.raw-\frac{2e^{3}}{1+e^{-3}}.$$
      Simplify by multiplying numerator and denominator by $e^{3}$:
      $$y'_{(1,e^{3})}= String.raw-\frac{2e^{6}}{e^{3}+1}.$$
    </li>
    <li>For the second derivative, differentiate the expression for $y'$ implicitly again. It is easier to differentiate the earlier unsimplified equation:
      $$2x\,y + x^{2}y' + \frac{y'}{y}= String.raw0.$$
      Differentiate once more:
      $$2y + 2x y' + 2x y' + x^{2} y'' + \frac{y''}{y} - \frac{y'^{2}}{y^{2}} = String.raw0.$$
      Combine like terms:
      $$2y + 4x y' + x^{2} y'' + \frac{y''}{y} - \frac{y'^{2}}{y^{2}} = String.raw0.$$
      Solve for $y''$:
      $$y''\Bigl(x^{2}+ \frac{1}{y}\Bigr) = String.raw-2y - 4x y' + \frac{y'^{2}}{y^{2}}.$$
      Hence,
      $$\displaystyle y'' = String.raw\frac{-2y - 4x y' + \dfrac{y'^{2}}{y^{2}}}{\,x^{2}+ \dfrac{1}{y}\,}.$$
    </li>
    <li>Insert $x= String.raw1$, $y= String.rawe^{3}$ and $y'= String.raw-\dfrac{2e^{6}}{e^{3}+1}$:
      <ul>
        <li>Compute $y'^{2}= String.raw\dfrac{4e^{12}}{(e^{3}+1)^{2}}$.</li>
        <li>Compute each term:
          <ul>
            <li>$-2y = String.raw-2e^{3}$.</li>
            <li>$-4x y' = String.raw-4\cdot1\cdot\bigl(-\dfrac{2e^{6}}{e^{3}+1}\bigr)= String.raw\dfrac{8e^{6}}{e^{3}+1}$.</li>
            <li$\displaystyle\frac{y'^{2}}{y^{2}} = String.raw\frac{4e^{12}}{(e^{3}+1)^{2}}\cdot\frac{1}{e^{6}} = String.raw\frac{4e^{6}}{(e^{3}+1)^{2}}.$</li>
          </ul>
        </li>
        <li>Denominator: $x^{2}+ \dfrac{1}{y}= String.raw1+\dfrac{1}{e^{3}}= String.raw\dfrac{e^{3}+1}{e^{3}}.$</li>
        <li>Thus,
          $$\begin{aligned}
          y''_{(1,e^{3})} &= String.raw\frac{-2e^{3}+\dfrac{8e^{6}}{e^{3}+1}+ \dfrac{4e^{6}}{(e^{3}+1)^{2}}}{\dfrac{e^{3}+1}{e^{3}}}\\[6pt]
          &= String.rawe^{3}\,\frac{-2e^{3}(e^{3}+1)^{2}+8e^{6}(e^{3}+1)+4e^{6}}{(e^{3}+1)^{2}}\\[6pt]
          &= String.raw\boxed{\displaystyle \frac{e^{3}\bigl[-2e^{3}(e^{3}+1)^{2}+8e^{6}(e^{3}+1)+4e^{6}\bigr]}{(e^{3}+1)^{2}} }.
          \end{aligned}$$
        (Further algebraic simplification is possible but not required for exam‑level answer.)
      </ul>
    </li>
  </ol>

  <h4><strong>13. Summary of Differentiation Rules</strong></h4>
  <ul>
    <li><strong>Constant Rule</strong> – derivative of a constant is zero.</li>
    <li><strong>Power Rule</strong> – $d(x^{n})/dx= String.rawn x^{n-1}$ (valid for all real $n$ with domain restrictions).</li>
    <li><strong>Sum/Difference Rule</strong> – linearity of differentiation.</li>
    <li><strong>Product Rule</strong> – $d(uv)= String.rawu'v+uv'$.</li>
    <li><strong>Quotient Rule</strong> – $d(u/v)= String.raw\dfrac{u'v-uv'}{v^{2}}$.</li>
    <li><strong>Chain Rule</strong> – $d\,f(g(x))= String.rawf'(g(x))\cdot g'(x)$.</li>
    <li><strong>Special Functions</strong> – memorise exponential, logarithmic, trigonometric, and inverse‑trigonometric derivatives.</li>
    <li><strong>Implicit Differentiation</strong> – differentiate the whole relation, then solve for $dy/dx$.</li>
    <li><strong>Higher‑Order Derivatives</strong> – apply rules repeatedly; many patterns repeat (e.g., sinusoidal).</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>Derivative of $e^{ax}$ is $a\,e^{ax}$ – remember the constant factor $a$.</li>
      <li>For $y= String.raw\sin(ax+b)$, $dy/dx = String.rawa\cos(ax+b)$ – the inner coefficient $a$ always multiplies the outer derivative.</li>
      <li>The derivative of $\ln|x|$ is $1/x$ (valid for $x\neq0$) – absolute value removes sign issues.</li>
      <li>Product rule shortcut: treat $v^{-1}$ as a power and use $d(v^{-1})= String.raw-v^{-2}v'$.</li>
      <li>Log‑differentiation is essential for functions of the form $[f(x)]^{g(x)}$ – reduces them to sums.</li>
      <li>When differentiating $y^{n}$ implicitly, differentiate as $n y^{n-1} y'$ – never forget the extra $y'$.</li>
      <li>Higher‑order derivative of a polynomial of degree $m$ becomes zero after the $(m+1)^{\text{th}}$ derivative.</li>
      <li>Chain rule can be memorised as “outer derivative × inner derivative” – a common exam mnemonic.</li>
      <li>Derivative of inverse function $y= String.rawf^{-1}(x)$ is $1/f'(y)$ – useful for $\tan^{-1}x$, $\sin^{-1}x$, etc.</li>
      <li>Always check domain restrictions (e.g., $x>0$ for $\ln x$, $x\neq\frac{\pi}{2}+k\pi$ for $\sec x$) before writing final answer.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["integration"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Standard Integration Methods
  </h3>

  <h4>1. <strong>Fundamental Concepts</strong></h4>
  <ul>
    <li><strong>Indefinite Integral</strong> – the family of antiderivatives of a function <em>f(x)</em>. It is denoted by 
      $$\int f(x)\,dx = String.rawF(x) + C,$$ 
      where <strong>F′(x)= String.rawf(x)</strong> and <strong>C</strong> is the arbitrary constant.</li>
    <li><strong>Definite Integral</strong> – the signed area under the curve of <em>f(x)</em> between limits <strong>a</strong> and <strong>b</strong>. Expressed as 
      $$\int_{a}^{b} f(x)\,dx = String.rawF(b)-F(a),$$ 
      which follows directly from the <strong><a href= String.raw"https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus" target= String.raw"_blank">Fundamental Theorem of Calculus</a></strong> (<em>FTC</em>).</li>
    <li><strong>Improper Integral</strong> – an integral whose limits are infinite or whose integrand becomes unbounded within the interval. Convergence must be checked via limits.</li>
  </ul>

  <h4>2. <strong>Primary Integration Techniques</strong></h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style= String.raw"background:#2a2a3a;">
        <th style= String.raw"padding:8px; border:1px solid #444;">Method</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">Typical Form</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">Key Idea</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">When to Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>[[Substitution Method]]</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\int f(g(x))g'(x)\,dx$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Set $u= String.rawg(x)$ so that $du= String.rawg'(x)dx$.</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">When the integrand contains a composite function whose inner derivative appears.</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>[[Integration by Parts]]</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\int u\,dv$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Use $ \int u\,dv = String.rawuv - \int v\,du$.</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Products of algebraic and transcendental functions, or when reduction formulas apply.</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>[[Partial Fractions]]</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\displaystyle\int\frac{P(x)}{Q(x)}dx$, where $\deg P<\deg Q$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Decompose $Q(x)$ into linear/quadratic factors.</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Rational functions whose denominator factorises over ℝ.</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>[[Trigonometric Substitution]]</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\int \sqrt{a^{2}\pm x^{2}}\,dx$, $\int \frac{dx}{\sqrt{x^{2}\pm a^{2}}}$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Replace $x$ with $a\sin\theta$, $a\tan\theta$, or $a\sec\theta$.</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Integrals containing $\sqrt{a^{2}\pm x^{2}}$ or $\sqrt{x^{2}\pm a^{2}}$.</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>[[Integration of Rational Functions of Trigonometric Functions]]</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\int R(\sin x,\cos x)dx$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Use $t= String.raw\tan\frac{x}{2}$ (Weierstrass substitution).</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">When the integrand is a rational expression in $\sin x$ and $\cos x$.</td>
      </tr>
    </tbody>
  </table>

  <h4>3. <strong>Derivation of the Integration by Parts Formula</strong></h4>
  <div class= String.raw"important-box" style= String.raw"background:#1e1e30; padding:12px; margin:12px 0; border-left:4px solid var(--accent);">
    <p>Starting from the product rule for differentiation:</p>
    $$\frac{d}{dx}\bigl(u(x)v(x)\bigr)= String.rawu'(x)v(x)+u(x)v'(x).$$
    <p>Integrate both sides with respect to <strong>x</strong>:</p>
    $$\int \frac{d}{dx}\bigl(u v\bigr)\,dx = String.raw\int u'v\,dx + \int u v'\,dx.$$
    <p>The left‑hand side simplifies to $uv$ (up to a constant), giving</p>
    $$uv = String.raw\int u'v\,dx + \int u v'\,dx.$$
    <p>Rearranging yields the celebrated <strong>integration by parts</strong> identity:</p>
    $$\boxed{\int u\,dv = String.rawuv - \int v\,du}$$
    <p>where we set $dv = String.rawv'(x)dx$ and $du = String.rawu'(x)dx$.</p>
  </div>

  <h4>4. <strong>Common Mistakes</strong></h4>
  <ul>
    <li><strong>Omitting the differential</strong> when performing substitution – e.g., writing $u= String.rawg(x)$ without converting $dx$ to $du= String.rawg'(x)dx$ leads to dimensionally inconsistent integrals.</li>
    <li><strong>Incorrect sign in integration by parts</strong> – students often write $ \int u\,dv = String.rawuv + \int v\,du$; the sign before the second integral must be negative.</li>
    <li><strong>Failing to de‑compose the denominator completely</strong> in partial fractions, especially when repeated or irreducible quadratic factors are present.</li>
    <li><strong>Mixing up the trigonometric substitution</strong> – using $x = String.rawa\sin\theta$ for $\sqrt{x^{2}+a^{2}}$ (instead of $x = String.rawa\tan\theta$) produces an extra $ \sqrt{1+\tan^{2}\theta}$ factor and complicates the integral.</li>
    <li><strong>Neglecting convergence checks</strong> for improper integrals, which can cause divergent answers to be mistakenly accepted as finite.</li>
  </ul>

  <h4>5. <strong>Shortcuts & Tricks for Competitive Exams</strong></h4>
  <ol>
    <li><strong>Pattern‑Recognition Shortcut</strong>: For integrals of the form $\int \frac{f'(x)}{f(x)}dx$, directly write $\ln|f(x)|+C$ without performing full substitution.</li>
    <li><strong>Tabular Integration</strong> (also called “DI method”): When $u$ differentiates to zero after a few steps, create a two‑column table of derivatives of $u$ and integrals of $dv$, then alternate signs and multiply diagonally.</li>
    <li><strong>Symmetry Trick</strong>: For $\int_{-a}^{a} f(x)dx$, if $f$ is odd, the integral equals zero; if $f$ is even, double the integral from $0$ to $a$.</li>
    <li><strong>Reduction Formula Shortcut</strong>: Recognise standard reduction patterns such as 
      $$\int \sin^{n}x\,dx = String.raw-\frac{\sin^{n-1}x\cos x}{n}+\frac{n-1}{n}\int \sin^{n-2}x\,dx,$$ 
      and apply iteratively rather than re‑deriving each time.</li>
    <li><strong>Weierstrass Substitution</strong> shortcut: For any rational function of $\sin x$ and $\cos x$, set $t= String.raw\tan\frac{x}{2}$; then $\sin x = String.raw\frac{2t}{1+t^{2}}$, $\cos x = String.raw\frac{1-t^{2}}{1+t^{2}}$, and $dx = String.raw\frac{2\,dt}{1+t^{2}}$. This converts the integral into a rational one in $t$.</li>
  </ol>

  <h4>6. <strong>Fully Worked Example 1 – Integration by Parts</strong></h4>
  <p><strong>Problem:</strong> Evaluate $\displaystyle I= String.raw\int x\,e^{2x}\,dx$.</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Identify $u$ and $dv$: Choose $u= String.rawx$ (because it simplifies on differentiation) and $dv= String.rawe^{2x}dx$.</li>
    <li>Compute $du$ and $v$:
      <ul>
        <li>$du = String.rawdx$.</li>
        <li>Integrate $dv$: $\displaystyle v = String.raw\int e^{2x}dx = String.raw\frac{1}{2}e^{2x}$ (since $\int e^{kx}dx = String.raw\frac{1}{k}e^{kx}$).</li>
      </ul>
    </li>
    <li>Apply integration by parts:
      $$I = String.rawuv - \int v\,du = String.rawx\left(\frac{1}{2}e^{2x}\right) - \int \frac{1}{2}e^{2x}\,dx.$$
    </li>
    <li>Integrate the remaining term:
      $$\int \frac{1}{2}e^{2x}dx = String.raw\frac{1}{2}\cdot\frac{1}{2}e^{2x}= String.raw\frac{1}{4}e^{2x}.$$
    </li>
    <li>Combine results:
      $$I = String.raw\frac{x}{2}e^{2x} - \frac{1}{4}e^{2x}+C = String.raw\frac{e^{2x}}{4}\,(2x-1)+C.$$
    </li>
  </ol>
  <p>Thus, $\boxed{\displaystyle \int x\,e^{2x}dx = String.raw\frac{e^{2x}}{4}(2x-1)+C}$.</p>

  <h4>7. <strong>Fully Worked Example 2 – Trigonometric Substitution</strong></h4>
  <p><strong>Problem:</strong> Evaluate $\displaystyle J= String.raw\int \frac{dx}{\sqrt{9-x^{2}}}$.</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Recognise the form $\sqrt{a^{2}-x^{2}}$ with $a= String.raw3$. Use the substitution $x = String.raw3\sin\theta$.</li>
    <li>Compute $dx$ and the new radical:
      <ul>
        <li>$dx = String.raw3\cos\theta\,d\theta$.</li>
        <li>$\sqrt{9-x^{2}} = String.raw\sqrt{9-9\sin^{2}\theta}= String.raw3\cos\theta$ (since $\cos\theta\ge0$ for $-\frac{\pi}{2}\le\theta\le\frac{\pi}{2}$).</li>
      </ul>
    </li>
    <li>Substitute into the integral:
      $$J = String.raw\int \frac{3\cos\theta\,d\theta}{3\cos\theta}= String.raw\int d\theta = String.raw\theta + C.$$
    </li>
    <li>Re‑express $\theta$ in terms of $x$: From $x = String.raw3\sin\theta$, we have $\sin\theta = String.raw\frac{x}{3}$, so $\theta = String.raw\arcsin\!\left(\frac{x}{3}\right)$.</li>
    <li>Final answer:
      $$\boxed{\displaystyle \int \frac{dx}{\sqrt{9-x^{2}}}= String.raw\arcsin\!\left(\frac{x}{3}\right)+C}.$$
    </li>
  </ol>

  <h4>8. <strong>Advanced Topics – Integration of Rational Functions</strong></h4>
  <p>When dealing with a rational function $\displaystyle R(x)= String.raw\frac{P(x)}{Q(x)}$, the systematic procedure is:</p>
  <ol>
    <li><strong>Polynomial Division</strong> if $\deg P \ge \deg Q$ – obtain a polynomial part plus a proper fraction.</li>
    <li><strong>Factorisation of $Q(x)$</strong> into linear factors $(x-a)$ and irreducible quadratics $(x^{2}+bx+c)$. Over the reals, any higher‑degree factor can be broken down further.</li>
    <li><strong>Partial‑Fraction Decomposition</strong>:
      <ul>
        <li>For each distinct linear factor $(x-a)$, include a term $\displaystyle \frac{A}{x-a}$.</li>
        <li>For repeated linear factor $(x-a)^{k}$, include $\displaystyle \frac{A_{1}}{x-a}+\frac{A_{2}}{(x-a)^{2}}+\dots+\frac{A_{k}}{(x-a)^{k}}$.</li>
        <li>For each irreducible quadratic $(x^{2}+bx+c)$, include $\displaystyle \frac{Bx+C}{x^{2}+bx+c}$, and similarly for powers.</li>
      </ul>
    </li>
    <li>Determine the unknown constants by equating numerators after clearing denominators, often using the “cover‑up” method or comparing coefficients.</li>
    <li>Integrate each term using basic formulas:
      $$\int \frac{dx}{x-a}= String.raw\ln|x-a|+C,$$
      $$\int \frac{dx}{(x-a)^{n}}= String.raw-\frac{1}{(n-1)(x-a)^{n-1}}+C\;(n\neq1),$$
      $$\int \frac{Bx+C}{x^{2}+bx+c}\,dx = String.raw\frac{B}{2}\ln|x^{2}+bx+c|+\frac{2C-Bb}{\sqrt{4c-b^{2}}}\arctan\!\left(\frac{2x+b}{\sqrt{4c-b^{2}}}\right)+C.$$
    </li>
  </ol>

  <h4>9. <strong>Edge Cases & Exceptions</strong></h4>
  <ul>
    <li><strong>Non‑elementary Antiderivatives</strong>: Functions such as $e^{-x^{2}}$, $\frac{\sin x}{x}$, or $\ln(\ln x)$ have no expression in elementary functions. In competitive exams, they often appear in definite‑integral form where symmetry or limits yield closed forms.</li>
    <li><strong>Improper Integral Convergence</strong>: For $\displaystyle\int_{1}^{\infty}\frac{dx}{x^{p}}$, convergence occurs only if $p>1$. This follows from the limit $\displaystyle\lim_{b\to\infty}\frac{b^{1-p}}{1-p}$.</li>
    <li><strong>Integration of Absolute Values</strong>: $\displaystyle\int |x|dx$ must be split at the point where the argument changes sign, yielding $\int_{-a}^{0}(-x)dx+\int_{0}^{a}x\,dx$.</li>
    <li><strong>Parameter‑Dependent Integrals</strong>: When an integral contains a parameter (e.g., $\displaystyle\int_{0}^{\pi}\sin^{n}x\,dx$), differentiation under the integral sign (Leibniz rule) can produce recurrence relations.</li>
  </ul>

  <h4>10. <strong>Reference Table of Frequently Used Integrals</strong></h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style= String.raw"background:#2a2a3a;">
        <th style= String.raw"padding:8px; border:1px solid #444;">Integral</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">Result</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">Conditions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\displaystyle\int \sin^{n}x\,dx$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$-\frac{\sin^{n-1}x\cos x}{n}+\frac{n-1}{n}\int \sin^{n-2}x\,dx$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$n\in\mathbb{N}$, use reduction.</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\displaystyle\int \frac{dx}{x^{2}+a^{2}}$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\frac{1}{a}\arctan\!\left(\frac{x}{a}\right)+C$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$a>0$.</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\displaystyle\int e^{kx}\,dx$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\frac{1}{k}e^{kx}+C$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$k\neq0$.</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\displaystyle\int \frac{dx}{\sqrt{a^{2}-x^{2}}}$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\arcsin\!\left(\frac{x}{a}\right)+C$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$|x|<a$.</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\displaystyle\int \ln x\,dx$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$x\ln x - x + C$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$x>0$.</td>
      </tr>
    </tbody>
  </table>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>For any $f(x)$, $\displaystyle\int \frac{f'(x)}{f(x)}dx = String.raw\ln|f(x)|+C$ – a one‑step shortcut.</li>
      <li>The integral $\displaystyle\int_{0}^{\pi}\sin^{n}x\,dx$ equals $\displaystyle\frac{(n-1)!!}{n!!}\pi$ for even $n$, and $\displaystyle\frac{(n-1)!!}{n!!}2$ for odd $n$.</li>
      <li>When $a^{2}+b^{2}= String.rawc^{2}$, $\displaystyle\int \frac{dx}{\sqrt{c^{2}-x^{2}}} = String.raw\arcsin\!\left(\frac{x}{c}\right)+C$ – remember the “$c$‑hypotenuse” pattern.</li>
      <li>In a definite integral $\displaystyle\int_{-a}^{a}f(x)dx$, if $f$ is odd the value is zero; if $f$ is even, double the integral from $0$ to $a$.</li>
      <li>Partial‑fraction constants for repeated linear factors can be obtained quickly via the cover‑up method applied to successive derivatives.</li>
      <li>For $\displaystyle\int e^{ax}\cos(bx)dx$, use the formula $\frac{e^{ax}}{a^{2}+b^{2}}\bigl(a\cos bx + b\sin bx\bigr)+C$.</li>
      <li>Improper integrals $\displaystyle\int_{0}^{\infty} \frac{x^{m}}{(1+x^{n})}dx$ converge only if $m+1<n$.</li>
      <li>Trigonometric substitution $x= String.rawa\sec\theta$ is ideal for $\sqrt{x^{2}-a^{2}}$; $x= String.rawa\csc\theta$ works for $\sqrt{a^{2}-x^{2}}$ when $x$ is near $a$.</li>
      <li>The tabular integration technique reduces $n$‑step integration by parts to a simple alternating‑sign sum.</li>
      <li>When integrating $\displaystyle\frac{1}{x\ln x}$, the answer is $\ln|\ln x|+C$, a frequently tested pattern.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-matrices"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Matrices and Determinants
  </h3>

  <h4>1. Fundamental Definitions</h4>
  <ul>
    <li><strong>Matrix</strong> – a rectangular array of numbers arranged in <em>rows</em> and <em>columns</em>. Symbolically, a matrix of order $m \times n$ is denoted by $A = String.raw[a_{ij}]_{m \times n}$ where $a_{ij}$ is the element in the $i^{\text{th}}$ row and $j^{\text{th}}$ column.</li>
    <li><strong>Square Matrix</strong> – a matrix with equal number of rows and columns ($n \times n$). Only square matrices possess a <strong>determinant</strong>.</li>
    <li><strong>Determinant</strong> – a scalar value derived from a square matrix that encapsulates volume scaling and invertibility. For a $2\times2$ matrix $A= String.raw\begin{bmatrix}a & b\\c & d\end{bmatrix}$,
      $$\det(A)= String.rawad-bc.$$</li>
    <li><strong>Minor</strong> $M_{ij}$ – determinant of the sub‑matrix obtained by deleting the $i^{\text{th}}$ row and $j^{\text{th}}$ column of $A$.</li>
    <li><strong>Cofactor</strong> $C_{ij}= String.raw(-1)^{i+j}M_{ij}$ – the signed minor used in expansion of determinants.</li>
    <li><strong>Adjoint (Adjugate) Matrix</strong> – the transpose of the cofactor matrix: $\operatorname{adj}(A)= String.raw\big[C_{ji}\big]$.</li>
    <li><strong>Inverse Matrix</strong> – for a non‑singular matrix $A$, $A^{-1}$ satisfies $AA^{-1}= String.rawA^{-1}A= String.rawI_n$, where $I_n$ is the identity matrix of order $n$.</li>
  </ul>

  <h4>2. Derivation of the General Determinant Formula</h4>
  <ol>
    <li>Start from the definition of a permutation $\sigma$ of the set $\{1,2,\dots,n\}$.</li>
    <li>Associate each permutation with a sign $sgn(\sigma)$: $+1$ for even permutations, $-1$ for odd permutations.</li>
    <li>For a square matrix $A= String.raw[a_{ij}]$, the determinant is defined as
      $$\det(A)= String.raw\sum_{\sigma\in S_n}sgn(\sigma)\prod_{i= String.raw1}^{n}a_{i,\sigma(i)}$$
      where $S_n$ denotes the symmetric group of order $n$.</li>
    <li>Explain that each term corresponds to a unique selection of one element from each row and each column, ensuring no two selected elements share a row or column.</li>
    <li>Illustrate with $n= String.raw3$:
      $$\det\!\begin{bmatrix}
      a_{11}&a_{12}&a_{13}\\
      a_{21}&a_{22}&a_{23}\\
      a_{31}&a_{32}&a_{33}
      \end{bmatrix}= String.rawa_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}
      -a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}.$$
  </ol>

  <h4>3. Properties of Determinants (with Proof Sketches)</h4>
  <ul>
    <li><strong>Linearity in a Row</strong>: If a row of $A$ is expressed as a sum of two vectors, the determinant splits accordingly. <em>Proof Sketch</em>: Use the multilinear definition from permutations; each term containing a linear combination distributes over the sum.</li>
    <li><strong>Row Swapping</strong>: Swapping two rows changes the sign of the determinant.
      $$\det(\dots R_i \leftrightarrow R_j \dots) = String.raw-\det(A).$$
      <em>Proof Sketch</em>: Swapping rows corresponds to an odd permutation of columns, flipping $sgn(\sigma)$.</li>
    <li><strong>Row Multiplication</strong>: Multiplying a row by a scalar $k$ multiplies the determinant by $k$.
      $$\det(kR_i)= String.rawk\det(A).$$</li>
    <li><strong>Determinant of Upper/Lower Triangular Matrix</strong>: Equals product of diagonal entries.
      $$\det\!\begin{bmatrix}
      d_1&* &\cdots &*\\
      0&d_2&\cdots &*\\
      \vdots&\vdots&\ddots&\vdots\\
      0&0&\cdots&d_n
      \end{bmatrix}= String.rawd_1d_2\cdots d_n.$$
      <em>Proof Sketch</em>: All terms involving off‑diagonal elements contain a zero factor because each such term would require selecting an element from a column where a zero appears.</li>
    <li><strong>Determinant of Product</strong>: $\det(AB)= String.raw\det(A)\det(B)$ for square matrices $A,B$ of the same order.</li>
    <li><strong>Determinant of Transpose</strong>: $\det(A^{\top})= String.raw\det(A)$.</li>
  </ul>

  <h4>4. Classification of Matrices (Comparison Table)</h4>
  <table border= String.raw"1" cellpadding= String.raw"6" cellspacing= String.raw"0" style= String.raw"border-collapse: collapse; width:100%; margin-top:10px;">
    <thead style= String.raw"background:#2c2f33; color:#fff;">
      <tr>
        <th>Type</th>
        <th>Definition</th>
        <th>Key Property</th>
        <th>Determinant Behaviour</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Diagonal</strong></td>
        <td>Only $a_{ii}$ may be non‑zero.</td>
        <td>Commutes with any matrix of same order.</td>
        <td>Product of diagonal entries.</td>
      </tr>
      <tr>
        <td><strong>Scalar</strong></td>
        <td>$A= String.rawkI_n$ where $k\in\mathbb{R}$.</td>
        <td>All eigenvalues equal $k$.</td>
        <td>$k^n$.</td>
      </tr>
      <tr>
        <td><strong>Upper Triangular</strong></td>
        <td>$a_{ij}= String.raw0$ for $i>j$.</td>
        <td>Determinant = String.rawproduct of diagonal.</td>
        <td>Same as diagonal case.</td>
      </tr>
      <tr>
        <td><strong>Lower Triangular</strong></td>
        <td>$a_{ij}= String.raw0$ for $i<j$.</td>
        <td>Determinant = String.rawproduct of diagonal.</td>
        <td>Same as diagonal case.</td>
      </tr>
      <tr>
        <td><strong>Orthogonal</strong></td>
        <td>$A^{\top}A= String.rawI_n$.</td>
        <td>Columns form an orthonormal set.</td>
        <td>$\det(A)= String.raw\pm1$.</td>
      </tr>
      <tr>
        <td><strong>Singular</strong></td>
        <td>Rank $< n$.</td>
        <td>Non‑invertible.</td>
        <td>$\det(A)= String.raw0$.</td>
      </tr>
    </tbody>
  </table>

  <h4>5. Inverse of a Matrix via Adjoint Method</h4>
  <ol>
    <li>Compute the cofactor matrix $C= String.raw[C_{ij}]$ where $C_{ij}= String.raw(-1)^{i+j}M_{ij}$.</li>
    <li>Transpose $C$ to obtain the adjoint: $\operatorname{adj}(A)= String.rawC^{\top}$.</li>
    <li>Find $\det(A)$. If $\det(A)= String.raw0$, $A$ is singular and no inverse exists.</li>
    <li>Finally,
      $$A^{-1}= String.raw\frac{1}{\det(A)}\operatorname{adj}(A).$$
  </ol>

  <div class= String.raw"important-box" style= String.raw"border-left:4px solid var(--accent); background:#f9f9f9; padding:10px; margin:15px 0;">
    <strong>Critical Distinction:</strong> A matrix is <strong>non‑singular</strong> iff $\det(A)\neq0$, which guarantees the existence of a unique inverse. Conversely, a <strong>singular</strong> matrix has $\det(A)= String.raw0$ and cannot be inverted by any algebraic method.
  </div>

  <h4>6. Cramer's Rule (Solving Linear Systems)</h4>
  <p>For a system $AX = String.rawB$, where $A$ is an $n\times n$ non‑singular matrix, the solution for the $k^{\text{th}}$ variable $x_k$ is</p>
  $$x_k = String.raw\frac{\det(A_k)}{\det(A)}$$
  where $A_k$ is formed by replacing the $k^{\text{th}}$ column of $A$ with the column vector $B$.</p>
  <ul>
    <li>Variable definitions: $X = String.raw[x_1,x_2,\dots,x_n]^{\top}$, $B = String.raw[b_1,b_2,\dots,b_n]^{\top}$.</li>
    <li>Condition: $\det(A)\neq0$; otherwise the system is either dependent or inconsistent.</li>
  </ul>

  <h4>7. Common Mistakes</h4>
  <ul>
    <li><strong>Mistake 1 – Ignoring the sign factor $(-1)^{i+j}$</strong>: When computing cofactors, students often drop the alternating sign, leading to an adjoint that is off by a sign in several entries.</li>
    <li><strong>Mistake 2 – Using row operations that change the determinant without compensating</strong>: Swapping rows multiplies the determinant by $-1$, and multiplying a row by $k$ multiplies the determinant by $k$. Forgetting to adjust the determinant yields incorrect results.</li>
    <li><strong>Mistake 3 – Treating a non‑square matrix as having a determinant</strong>: Determinants exist only for square matrices; attempting to compute $\det$ of a $3\times2$ matrix leads to undefined behaviour.</li>
    <li><strong>Mistake 4 – Confusing adjoint with adjugate</strong>: The adjoint is the transpose of the cofactor matrix; some students mistakenly take the transpose of the original matrix instead.</li>
    <li><strong>Mistake 5 – Overlooking zero rows/columns</strong>: A row (or column) of zeros forces the determinant to zero instantly; missing this can waste time.</li>
  </ul>

  <h4>8. Shortcuts & Tricks (Time‑Saving for Competitive Exams)</h4>
  <ol>
    <li><strong>Triangular Shortcut</strong>: If a matrix can be converted to upper (or lower) triangular form using only row addition/subtraction (which does not change determinant), the determinant equals the product of the diagonal entries.</li>
    <li><strong>Block‑Matrix Determinant</strong>: For a block diagonal matrix $\begin{bmatrix}P & 0\\0 & Q\end{bmatrix}$, $\det = String.raw\det(P)\det(Q)$. This reduces a $4\times4$ problem to two $2\times2$ determinants.</li>
    <li><strong>Row of Ones</strong>: Adding a multiple of a row of ones to another row does not affect the determinant’s magnitude but can simplify the matrix to a triangular form instantly.</li>
    <li><strong>Determinant of a 3×3 via Sarrus’ Rule</strong>: Memorise the pattern $a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-(a_{13}a_{22}a_{31}+a_{11}a_{23}a_{32}+a_{12}a_{21}a_{33})$ for quick computation.</li>
    <li><strong>Zero‑Column/Row Test</strong>: Scan the matrix first; any all‑zero row/column immediately yields determinant $0$, saving computation.</li>
    <li><strong>Use of Cofactor Expansion on a Row/Column with Maximum Zeros</strong>: Choose the row or column containing the most zeros to minimize the number of minors required.</li>
  </ol>

  <h4>9. Worked Examples</h4>

  <h5>Example 1 – Determinant of a 4×4 Matrix Using Row Operations</h5>
  <p>Find $\det\!\begin{bmatrix}
  2 & 1 & 0 & 3\\
  4 & 2 & 1 & 6\\
  0 & 5 & 2 & 1\\
  1 & 0 & 3 & 2
  \end{bmatrix}$.</p>
  <ol>
    <li>Apply $R_2 \leftarrow R_2-2R_1$ (row operation of type $R_i\rightarrow R_i-kR_j$ does not change determinant):
      $$\begin{bmatrix}
      2 & 1 & 0 & 3\\
      0 & 0 & 1 & 0\\
      0 & 5 & 2 & 1\\
      1 & 0 & 3 & 2
      \end{bmatrix}$$</li>
    <li>Swap $R_2$ and $R_3$ to bring a non‑zero element into the second row. Swapping rows multiplies determinant by $-1$:
      $$\det = String.raw-\det\!\begin{bmatrix}
      2 & 1 & 0 & 3\\
      0 & 5 & 2 & 1\\
      0 & 0 & 1 & 0\\
      1 & 0 & 3 & 2
      \end{bmatrix}$$</li>
    <li>Now the matrix is upper‑triangular except for the last row. Use $R_4 \leftarrow R_4 -\frac{1}{2}R_1$:
      $$\begin{bmatrix}
      2 & 1 & 0 & 3\\
      0 & 5 & 2 & 1\\
      0 & 0 & 1 & 0\\
      0 & -\tfrac12 & 3 & \tfrac12
      \end{bmatrix}$$</li>
    <li>Next, eliminate the $-\tfrac12$ in $R_4$ using $R_4 \leftarrow R_4 +\tfrac{1}{10}R_2$ (no determinant change):
      $$\begin{bmatrix}
      2 & 1 & 0 & 3\\
      0 & 5 & 2 & 1\\
      0 & 0 & 1 & 0\\
      0 & 0 & 3.2 & 0.6
      \end{bmatrix}$$</li>
    <li>Now the matrix is upper triangular; determinant equals product of diagonal entries multiplied by the sign change from the earlier row swap:
      $$\det = String.raw-\big(2\cdot5\cdot1\cdot0.6\big) = String.raw-6.$$
  </ol>
  <p>Hence, $\boxed{\det = String.raw-6}$.</p>

  <h5>Example 2 – Inverse of a 3×3 Matrix Using Adjoint</h5>
  <p>Find $A^{-1}$ for $A= String.raw\begin{bmatrix}
  1 & 2 & 3\\
  0 & 1 & 4\\
  5 & 6 & 0
  \end{bmatrix}$.</p>
  <ol>
    <li>Compute $\det(A)$ using cofactor expansion on the second row (contains a zero):
      $$\det(A)= String.raw0\cdot C_{21}+1\cdot C_{22}+4\cdot C_{23}.$$
      <ul>
        <li>$C_{22}= String.raw(-1)^{2+2}M_{22}= String.rawM_{22}$ where $M_{22}= String.raw\det\!\begin{bmatrix}1&3\\5&0\end{bmatrix}= String.raw(1)(0)-(3)(5)= String.raw-15$.</li>
        <li>$C_{23}= String.raw(-1)^{2+3}M_{23}= String.raw-M_{23}$ where $M_{23}= String.raw\det\!\begin{bmatrix}1&2\\5&6\end{bmatrix}= String.raw(1)(6)-(2)(5)= String.raw6-10= String.raw-4$.</li>
      </ul>
      Thus,
      $$\det(A)= String.raw1(-15)+4(-(-4)) = String.raw-15+16 = String.raw1.$$
    </li>
    <li>Since $\det(A)= String.raw1\neq0$, $A$ is invertible.</li>
    <li>Form the cofactor matrix $C$:
      $$C= String.raw\begin{bmatrix}
      C_{11}&C_{12}&C_{13}\\
      C_{21}&C_{22}&C_{23}\\
      C_{31}&C_{32}&C_{33}
      \end{bmatrix}.$$
      Compute each cofactor:
      <ul>
        <li>$C_{11}= String.raw(-1)^{2}M_{11}= String.raw\det\!\begin{bmatrix}1&4\\6&0\end{bmatrix}= String.raw(1)(0)-(4)(6)= String.raw-24$.</li>
        <li>$C_{12}= String.raw(-1)^{1+2}M_{12}= String.raw-\det\!\begin{bmatrix}0&4\\5&0\end{bmatrix}= String.raw-[(0)(0)-(4)(5)]= String.raw20$.</li>
        <li>$C_{13}= String.raw(-1)^{1+3}M_{13}= String.raw\det\!\begin{bmatrix}0&1\\5&6\end{bmatrix}= String.raw(0)(6)-(1)(5)= String.raw-5$.</li>
        <li>$C_{21}= String.raw(-1)^{2+1}M_{21}= String.raw-\det\!\begin{bmatrix}2&3\\6&0\end{bmatrix}= String.raw-[(2)(0)-(3)(6)]= String.raw18$.</li>
        <li>$C_{22}= String.raw-15$ (computed earlier).</li>
        <li>$C_{23}= String.raw4$ (since $C_{23}= String.raw-M_{23}= String.raw-(-4)= String.raw4$).</li>
        <li>$C_{31}= String.raw(-1)^{3+1}M_{31}= String.raw\det\!\begin{bmatrix}2&3\\1&4\end{bmatrix}= String.raw(2)(4)-(3)(1)= String.raw8-3= String.raw5$.</li>
        <li>$C_{32}= String.raw(-1)^{3+2}M_{32}= String.raw-\det\!\begin{bmatrix}1&3\\0&4\end{bmatrix}= String.raw-[(1)(4)-(3)(0)]= String.raw-4$.</li>
        <li>$C_{33}= String.raw(-1)^{6}M_{33}= String.raw\det\!\begin{bmatrix}1&2\\0&1\end{bmatrix}= String.raw1\cdot1-2\cdot0= String.raw1$.</li>
      </ul>
      Hence,
      $$C= String.raw\begin{bmatrix}
      -24 & 20 & -5\\
      18 & -15 & 4\\
      5 & -4 & 1
      \end{bmatrix}.$$
    </li>
    <li>Adjoint is the transpose of $C$:
      $$\operatorname{adj}(A)= String.rawC^{\top}= String.raw\begin{bmatrix}
      -24 & 18 & 5\\
      20 & -15 & -4\\
      -5 & 4 & 1
      \end{bmatrix}.$$
    </li>
    <li>Finally,
      $$A^{-1}= String.raw\frac{1}{\det(A)}\operatorname{adj}(A)= String.raw\operatorname{adj}(A)$$
      because $\det(A)= String.raw1$.
      $$\boxed{A^{-1}= String.raw\begin{bmatrix}
      -24 & 18 & 5\\
      20 & -15 & -4\\
      -5 & 4 & 1
      \end{bmatrix}}.$$
  </ol>

  <h4>10. Additional Advanced Topics (Brief Overview)</h4>
  <ul>
    <li><strong>Laplace Expansion</strong> – Generalised cofactor expansion along any row or column; useful for theoretical proofs.</li>
    <li><strong>Vandermonde Determinant</strong> – For $V= String.raw\big[x_i^{j-1}\big]_{i,j= String.raw1}^n$, $\det(V)= String.raw\prod_{1\le i<j\le n}(x_j-x_i)$. Critical in polynomial interpolation problems.</li>
    <li><strong>Determinant of Skew‑Symmetric Matrix</strong> – For odd order $n$, $\det(A)= String.raw0$; for even order, $\det(A)= String.raw\big(\operatorname{Pf}(A)\big)^2$, where $\operatorname{Pf}$ denotes the Pfaffian.</li>
    <li><strong>Matrix of Cofactors as a Linear Transformation</strong> – The map $A\mapsto \operatorname{adj}(A)$ is homogeneous of degree $n-1$ and appears in the theory of adjugate linear operators.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>Determinant of a triangular matrix = String.rawproduct of its diagonal entries.</li>
      <li>Swapping two rows (or columns) flips the sign of the determinant.</li>
      <li>A $3\times3$ determinant can be memorised using Sarrus’ rule for quick computation.</li>
      <li>If any row or column is all zeros, the determinant is zero instantly.</li>
      <li>For a $2\times2$ matrix $\begin{bmatrix}a&b\\c&d\end{bmatrix}$, inverse exists iff $ad-bc\neq0$.</li>
      <li>Cramer's Rule is viable only when $\det(A)\neq0$; otherwise use row‑reduction.</li>
      <li>Adjoint of $A$ is the transpose of its cofactor matrix – never the transpose of $A$ itself.</li>
      <li>Determinant of an orthogonal matrix is always $+1$ or $-1$.</li>
      <li>Block‑diagonal matrices split determinant calculation into independent blocks.</li>
      <li>In a $4\times4$ matrix, expanding along a row/column with maximum zeros reduces computational load dramatically.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-probability"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Probability Theory & Bayes Theorem
  </h3>

  <h4><strong>1. Foundations of Probability</strong></h4>
  <p>In the context of the Indian defence examinations, a rigorous grasp of the axiomatic framework is indispensable. The modern theory rests on the <strong>[[Kolmogorov axioms]]</strong> (1933), which provide a mathematically consistent language for all subsequent derivations.</p>

  <ul>
    <li><strong>Sample Space (<em>Ω</em>)</strong> – the set of all elementary outcomes of an experiment. <strong>[[Sample space]]</strong> is denoted by the Greek capital omega and may be finite, countably infinite, or uncountable.</li>
    <li><strong>Event (<em>A, B, …</em>)</strong> – any subset of <em>Ω</em>. In exam language, events are often described in words (“the die shows an even number”).</li>
    <li><strong>Probability Measure (<em>P</em>)</strong> – a function <em>P: 2^{Ω} → [0,1]</em> satisfying the three axioms:
      <ol>
        <li>Non‑negativity: <strong>$P(A) \ge 0 \;\; \forall A \subseteq Ω$</strong></li>
        <li>Normalization: <strong>$P(Ω) = String.raw1$</strong></li>
        <li>Countable additivity: If <strong>$A_1, A_2, …$</strong> are pairwise disjoint, then <strong>$P\!\left(\bigcup_{i= String.raw1}^{\infty} A_i\right) = String.raw\sum_{i= String.raw1}^{\infty} P(A_i)$</strong></li>
      </ol>
    </li>
  </ul>

  <div class= String.raw"important-box" style= String.raw"background:#f9f9f9;border-left:4px solid var(--accent);padding:12px;margin:16px 0;">
    <strong>Key Distinction:</strong> <strong>Independence</strong> and <strong>Mutual Exclusivity</strong> are not interchangeable. Independence concerns the product of probabilities; mutual exclusivity forces the intersection to be empty. Confusing the two leads to systematic errors in conditional calculations.
  </div>

  <h4><strong>2. Classical, Relative‑Frequency, and Subjective Definitions</strong></h4>
  <p>While the <strong>[[Classical definition]]</strong> (equiprobable outcomes) is convenient for dice or cards, the <strong>[[Relative‑frequency definition]]</strong> aligns with empirical data: <strong>$P(A) = String.raw\lim_{n\to\infty}\frac{n_A}{n}$</strong>, where <em>n_A</em> counts occurrences of <em>A</em> in <em>n</em> trials. The <strong>[[Subjective definition]]</strong> interprets probability as a degree of belief, paving the way for Bayesian inference.</p>

  <h4><strong>3. Conditional Probability</strong></h4>
  <p>The cornerstone for Bayes’ theorem is the definition of conditional probability.</p>

  <p><strong>$P(A\mid B) = String.raw\dfrac{P(A\cap B)}{P(B)}$</strong></p>

  <ul>
    <li><strong>Variables:</strong>
      <ul>
        <li><strong>$A$, $B$</strong> – events of interest.</li>
        <li><strong>$P(A\cap B)$</strong> – joint probability that both $A$ and $B$ occur.</li>
        <li><strong>$P(B)$</strong> – marginal probability of $B$, acting as the normalizing denominator.</li>
      </ul>
    </li>
    <li><strong>Constraint:</strong> <strong>$P(B) > 0$</strong>. If $P(B)= String.raw0$, the conditional probability is undefined (a classic edge case).</li>
  </ul>

  <p>Derivation from axioms: Since $A\cap B \subseteq B$, the additivity axiom yields $P(B) = String.rawP(B\cap A) + P(B\cap A^{c})$. Dividing both sides by $P(B)$ (non‑zero) gives the definition above.</p>

  <h4><strong>4. Multiplication Rule & Independence</strong></h4>
  <p>Rearranging the conditional definition yields the multiplication rule:</p>

  <p><strong>$P(A\cap B) = String.rawP(A) \, P(B\mid A) = String.rawP(B) \, P(A\mid B)$</strong></p>

  <p>When <strong>$A$</strong> and <strong>$B$</strong> are <strong>independent</strong>, the conditional probability collapses to the marginal:</p>

  <p><strong>$P(A\mid B) = String.rawP(A) \quad\Longleftrightarrow\quad P(A\cap B) = String.rawP(A)P(B)$</strong></p>

  <table style= String.raw"width:100%;border-collapse:collapse;margin:12px 0;">
    <thead>
      <tr style= String.raw"background:#e0e0e0;">
        <th style= String.raw"border:1px solid #ccc;padding:6px;">Property</th>
        <th style= String.raw"border:1px solid #ccc;padding:6px;">Independent</th>
        <th style= String.raw"border:1px solid #ccc;padding:6px;">Mutually Exclusive</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid #ccc;padding:6px;"><strong>Definition</strong></td>
        <td style= String.raw"border:1px solid #ccc;padding:6px;">$P(A\cap B)= String.rawP(A)P(B)$</td>
        <td style= String.raw"border:1px solid #ccc;padding:6px;">$P(A\cap B)= String.raw0$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #ccc;padding:6px;"><strong>Implication for $P(A\cup B)$</strong></td>
        <td style= String.raw"border:1px solid #ccc;padding:6px;">$P(A)+P(B)-P(A)P(B)$</td>
        <td style= String.raw"border:1px solid #ccc;padding:6px;">$P(A)+P(B)$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #ccc;padding:6px;"><strong>Typical Example</strong></td>
        <td style= String.raw"border:1px solid #ccc;padding:6px;">Coin tosses, dice rolls</td>
        <td style= String.raw"border:1px solid #ccc;padding:6px;">Drawing a red card <em>or</em> a black card from a single draw</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>5. Law of Total Probability</strong></h4>
  <p>Suppose $\{B_1, B_2, …, B_k\}$ forms a partition of $Ω$ (pairwise disjoint and $\bigcup_i B_i = String.rawΩ$). Then for any event $A$:</p>

  <p><strong>$P(A) = String.raw\sum_{i= String.raw1}^{k} P(A\mid B_i) \, P(B_i)$</strong></p>

  <ul>
    <li><strong>Variables:</strong>
      <ul>
        <li><strong>$B_i$</strong> – mutually exclusive exhaustive events.</li>
        <li><strong>$P(A\mid B_i)$</strong> – conditional probability of $A$ given $B_i$.</li>
        <li><strong>$P(B_i)$</strong> – prior probability of $B_i$.</li>
      </ul>
    </li>
    <li><strong>Constraint:</strong> $\sum_i P(B_i)= String.raw1$ and $P(B_i)\ge0$.</li>
  </ul>

  <h4><strong>6. Bayes Theorem – Derivation & Interpretation</strong></h4>
  <p>Bayes’ theorem follows directly from the multiplication rule and the law of total probability.</p>

  <p>Starting with $P(B_i\mid A) = String.raw\dfrac{P(A\cap B_i)}{P(A)}$ and substituting $P(A\cap B_i) = String.rawP(A\mid B_i)P(B_i)$, we obtain:</p>

  <p><strong>
  $P(B_i\mid A) = String.raw\dfrac{P(A\mid B_i)\,P(B_i)}{\displaystyle\sum_{j= String.raw1}^{k} P(A\mid B_j)\,P(B_j)}$
  </strong></p>

  <ul>
    <li><strong>Key Terminology</strong>
      <ul>
        <li><strong>Prior ($P(B_i)$)</strong> – initial belief before observing data.</li>
        <li><strong>Likelihood ($P(A\mid B_i)$)</strong> – probability of data under hypothesis $B_i$.</li>
        <li><strong>Evidence ($P(A)$)</strong> – normalizing constant, often called the marginal likelihood.</li>
        <li><strong>Posterior ($P(B_i\mid A)$)</strong> – updated belief after incorporating data.</li>
      </ul>
    </li>
  </ul>

  <p>Historical Note: Thomas Bayes (1701‑1761) first formulated the inverse probability problem in his posthumous essay “An Essay towards solving a Problem in the Doctrine of Chances”. Pierre‑Simon Laplace later popularized the theorem (1799) and introduced the term “Bayesian”. Understanding this lineage helps appreciate why the theorem is central to modern inference.</p>

  <h4><strong>7. Edge Cases & Continuous Extensions</strong></h4>
  <ul>
    <li><strong>Zero‑Probability Conditioning</strong> – When $P(B)= String.raw0$, conditional probability is undefined. In the continuous case, we replace probabilities by densities: $f_{X|Y}(x|y)= String.raw\frac{f_{X,Y}(x,y)}{f_Y(y)}$, provided $f_Y(y)>0$.</li>
    <li><strong>Multiple Hypotheses</strong> – The theorem extends naturally to $k$ hypotheses; the denominator becomes the sum over all $k$ likelihood‑prior products.</li>
    <li><strong>Non‑informative Priors</strong> – In competitive exams, a uniform prior $P(B_i)= String.raw1/k$ is often assumed unless stated otherwise.</li>
    <li><strong>Bayes’ Theorem for Odds</strong> – Using odds simplifies calculations: $\displaystyle\frac{P(B_i\mid A)}{P(B_j\mid A)} = String.raw\frac{P(A\mid B_i)}{P(A\mid B_j)}\times\frac{P(B_i)}{P(B_j)}$.</li>
  </ul>

  <h4><strong>8. Real‑World Applications in Defence Context</strong></h4>
  <ul>
    <li><strong>Reliability of Radar Systems</strong> – Prior failure rates combined with observed false‑alarm data yield posterior reliability estimates.</li>
    <li><strong>Intelligence Analysis</strong> – Bayesian updating refines threat probabilities as new satellite imagery arrives.</li>
    <li><strong>Medical Screening for Personnel</strong> – Bayes theorem quantifies the probability a soldier is diseased after a test, crucial for deployment decisions.</li>
  </ul>

  <h4><strong>9. Worked Example 1 – Card Problem</strong></h4>
  <p><strong>Problem:</strong> A standard deck of 52 cards is shuffled. One card is drawn and found to be a face card (J, Q, K). What is the probability that the card is a heart?</p>

  <p><strong>Solution:</strong></p>
  <ol>
    <li>Define events:
      <ul>
        <li><strong>$H$</strong>: “card is a heart”. $P(H)= String.raw\frac{13}{52}= String.raw\frac{1}{4}$.</li>
        <li><strong>$F$</strong>: “card is a face card”. There are $3$ face cards per suit, $12$ total, so $P(F)= String.raw\frac{12}{52}= String.raw\frac{3}{13}$.</li>
      </ul>
    </li>
    <li>Find $P(F\mid H)$: given the card is a heart, probability it is a face card = String.raw$\frac{3}{13}$ (since 3 of the 13 hearts are faces).</li>
    <li>Apply Bayes theorem:
      <p><strong>
      $P(H\mid F)= String.raw\dfrac{P(F\mid H)P(H)}{P(F)}= String.raw\dfrac{\frac{3}{13}\times\frac{1}{4}}{\frac{3}{13}}= String.raw\frac{1}{4}$
      </strong></p>
    </li>
    <li>Interpretation: The knowledge that the card is a face does not change the heart probability because face cards are uniformly distributed across suits.</li>
  </ol>

  <h4><strong>10. Worked Example 2 – Medical Test (Defence Personnel Health)</strong></h4>
  <p><strong>Problem:</strong> A disease affects $2\%$ of soldiers. A diagnostic test has $95\%$ sensitivity (true‑positive rate) and $90\%$ specificity (true‑negative rate). A soldier tests positive. What is the probability he actually has the disease?</p>

  <p><strong>Solution:</strong></p>
  <ol>
    <li>Define events:
      <ul>
        <li><strong>$D$</strong>: “soldier has disease”. $P(D)= String.raw0.02$.</li>
        <li><strong>$\overline{D}$</strong>: “soldier is disease‑free”. $P(\overline{D})= String.raw0.98$.</li>
        <li><strong>$T$</strong>: “test result is positive”.</li>
      </ul>
    </li>
    <li>Conditional probabilities:
      <ul>
        <li><strong>Sensitivity</strong> $= String.rawP(T\mid D)= String.raw0.95$.</li>
        <li><strong>Specificity</strong> $= String.rawP(T^{c}\mid\overline{D})= String.raw0.90 \;\Rightarrow\; P(T\mid\overline{D})= String.raw0.10$ (false‑positive rate).</li>
      </ul>
    </li>
    <li>Compute the evidence using the law of total probability:
      <p><strong>
      $P(T)= String.rawP(T\mid D)P(D)+P(T\mid\overline{D})P(\overline{D})
      = String.raw0.95(0.02)+0.10(0.98)= String.raw0.019+0.098= String.raw0.117$
      </strong></p>
    </li>
    <li>Apply Bayes theorem:
      <p><strong>
      $P(D\mid T)= String.raw\dfrac{P(T\mid D)P(D)}{P(T)}= String.raw\dfrac{0.95\times0.02}{0.117}\approx0.162\;(16.2\%)
      </strong></p>
    </li>
    <li>Interpretation: Despite a high‑accuracy test, the posterior probability is only $16\%$ because the disease prevalence is low – a classic illustration of the “base‑rate fallacy”.</li>
  </ol>

  <h4><strong>11. Common Mistakes</strong></h4>
  <ul>
    <li><strong>Ignoring the denominator in $P(A\mid B)= String.raw\frac{P(A\cap B)}{P(B)}$</strong> – leads to over‑estimation of conditional probabilities.</li>
    <li><strong>Confusing independence with mutual exclusivity</strong> – assuming $P(A\cap B)= String.raw0$ when events are independent, which yields a zero joint probability erroneously.</li>
    <li><strong>Using the prior $P(B_i)$ as $1$ instead of $1/k$</strong> in multi‑hypothesis Bayes problems, producing inflated posteriors.</li>
    <li><strong>Neglecting the “evidence” term $P(A)$</strong> in Bayes theorem, which results in forgetting to normalize over all hypotheses.</li>
  </ul>

  <h4><strong>12. Shortcuts & Tricks for Competitive Exams</strong></h4>
  <ul>
    <li><strong>Complement Rule Shortcut</strong>: $P(A)= String.raw1-P(A^{c})$. Useful when $A^{c}$ has fewer outcomes.</li>
    <li><strong>Tree Diagram Method</strong>: For sequential events, draw a probability tree; the product of branch probabilities directly gives joint and conditional probabilities.</li>
    <li><strong>Odds Form of Bayes</strong>: Compute posterior odds as <em>prior odds × likelihood ratio</em>. This avoids dealing with the denominator explicitly when only a ratio is required.</li>
    <li><strong>Symmetry Trick</strong>: If the problem is symmetric (e.g., drawing a card from a well‑shuffled deck), the probability often equals the unconditional probability, saving time.</li>
    <li><strong>“Quick Bayes” Formula for Two‑Hypothesis Cases</strong>:
      <p><strong>
      $P(H\mid D)= String.raw\frac{1}{1+\frac{P(\overline{H})}{P(H)}\times\frac{P(D\mid\overline{H})}{P(D\mid H)}}$
      </strong></p>
      This reduces mental arithmetic to a single fraction.</li>
  </ul>

  <h4><strong>13. Historical & Conceptual Nuggets</strong></h4>
  <p>Understanding the evolution of probability enriches problem‑solving intuition:</p>
  <ul>
    <li><strong>[[Gerolamo Cardano]]</strong> (16th c) – earliest systematic study of dice games.</li>
    <li><strong>[[Pierre de Fermat]]</strong> and <strong>[[Blaise Pascal]]</strong> (1654) – correspondence that founded the <em>classical</em> probability model.</li>
    <li><strong>[[Thomas Bayes]]</strong> – introduced the inverse probability problem; his posthumous essay (1763) laid the groundwork.</li>
    <li><strong>[[Pierre‑Simon Laplace]]</strong> – formalized Bayesian inference and coined the term “probability” in its modern sense.</li>
    <li><strong>[[Andrey Kolmogorov]]</strong> – axiomatized probability, making the theory rigorous for all later applications.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li><strong>Complement Rule:</strong> $P(A)= String.raw1-P(A^{c})$ – use when $A^{c}$ is easier.</li>
      <li><strong>Bayes for Two Events:</strong> $P(H\mid D)= String.raw\frac{P(D\mid H)P(H)}{P(D\mid H)P(H)+P(D\mid\overline{H})P(\overline{H})}$.</li>
      <li><strong>Independence Test:</strong> If $P(A\mid B)= String.rawP(A)$ then $A$ and $B$ are independent.</li>
      <li><strong>Mutual Exclusivity Test:</strong> If $P(A\cap B)= String.raw0$ then $A$ and $B$ cannot occur together.</li>
      <li><strong>Law of Total Probability:</strong> For a partition $\{B_i\}$, $P(A)= String.raw\sum_i P(A\mid B_i)P(B_i)$.</li>
      <li><strong>Base‑Rate Fallacy:</strong> Low prior probability can dominate high test accuracy, yielding low posterior.</li>
      <li><strong>Odds Form:</strong> Posterior odds = String.rawPrior odds × Likelihood ratio.</li>
      <li><strong>Quick Bayes Shortcut:</strong> Use $\displaystyle\frac{1}{1+\frac{P(\overline{H})}{P(H)}\frac{P(D\mid\overline{H})}{P(D\mid H)}}$ for two‑hypothesis problems.</li>
      <li><strong>Tree Diagram:</strong> Multiply along a path for joint probabilities; sum over paths for total probability.</li>
      <li><strong>Zero‑Probability Conditioning:</strong> If $P(B)= String.raw0$, conditional probability is undefined – avoid dividing by zero.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["lines-angles-triangles"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Lines, Angles & Triangles
  </h3>

  <h4>Introduction to Lines and Angles</h4>
  <p>In geometry, a <strong>line</strong> is a set of points that extend infinitely in two directions. It has no thickness or width, only length. An <strong>angle</strong> is formed when two lines intersect at a point. The study of lines and angles is fundamental to understanding more complex geometric shapes, including triangles.</p>
  <p>The measurement of an angle is typically expressed in degrees ($^\circ$), with $360^\circ$ representing a full rotation. The <strong>sum of the interior angles</strong> of a triangle is always $180^\circ$, as given by the formula: $m\angle A + m\angle B + m\angle C = String.raw180^\circ$, where $m\angle$ denotes the measure of an angle.</p>

  <h4>Properties of Lines</h4>
  <ul>
    <li><strong>Parallel lines</strong> are lines that lie in the same plane and never intersect, no matter how far they are extended. The symbol $\parallel$ is used to denote parallel lines, e.g., $AB \parallel CD$.</li>
    <li><strong>Perpendicular lines</strong> are lines that intersect at a right angle ($90^\circ$). The symbol $\perp$ is used to denote perpendicular lines, e.g., $AB \perp CD$.</li>
    <li><strong>Transversal lines</strong> are lines that intersect two or more other lines. Transversals can be used to determine whether two lines are parallel or not based on the angles formed.</li>
  </ul>

  <h4>Types of Angles</h4>
  <p>Angles can be classified based on their measure:</p>
  <ul>
    <li><strong>Acute angles</strong> are angles whose measure is between $0^\circ$ and $90^\circ$ ($0^\circ < m\angle < 90^\circ$).</li>
    <li><strong>Right angles</strong> are angles whose measure is exactly $90^\circ$ ($m\angle = String.raw90^\circ$).</li>
    <li><strong>Obtuse angles</strong> are angles whose measure is between $90^\circ$ and $180^\circ$ ($90^\circ < m\angle < 180^\circ$).</li>
    <li><strong>Straight angles</strong> are angles whose measure is exactly $180^\circ$ ($m\angle = String.raw180^\circ$).</li>
  </ul>

  <h4>Triangles</h4>
  <p>A <strong>triangle</strong> is a polygon with three sides. The sum of the lengths of any two sides of a triangle must be greater than the length of the third side, known as the <strong>triangle inequality theorem</strong>. This can be expressed as: $AB + BC > AC$, $AB + AC > BC$, and $BC + AC > AB$.</p>
  <p>Triangles can be classified based on their sides and angles:</p>
  <table>
    <tr>
      <th>Type of Triangle</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><strong>Equilateral Triangle</strong></td>
      <td>All sides are equal ($AB = String.rawBC = String.rawAC$), and all angles are $60^\circ$.</td>
    </tr>
    <tr>
      <td><strong>Isosceles Triangle</strong></td>
      <td>Two sides are equal ($AB = String.rawAC$ or $AB = String.rawBC$ or $BC = String.rawAC$), and the base angles are equal.</td>
    </tr>
    <tr>
      <td><strong>Scalene Triangle</strong></td>
      <td>All sides are of different lengths ($AB \neq BC \neq AC$), and all angles are of different measures.</td>
    </tr>
  </table>

  <h4>Angle Sum Property of Triangles</h4>
  <p>The sum of the interior angles of a triangle is always $180^\circ$. This property can be used to find the measure of the third angle if the measures of two angles are known. The formula for the angle sum property is: $m\angle A + m\angle B + m\angle C = String.raw180^\circ$.</p>
  <p>For example, if $m\angle A = String.raw60^\circ$ and $m\angle B = String.raw80^\circ$, then $m\angle C = String.raw180^\circ - (60^\circ + 80^\circ) = String.raw40^\circ$.</p>

  <h4>Derivation of the Angle Sum Property</h4>
  <p>The angle sum property can be derived by considering a triangle $ABC$ and drawing a line through $A$ parallel to $BC$. This creates two alternate interior angles, $\angle BAD$ and $\angle CAD$, which are equal in measure. Since $\angle BAC$ is an exterior angle to the triangle $BCD$, it is equal to the sum of the remote interior angles, $\angle BCD$ and $\angle CBD$. By substitution, we get: $m\angle BAC = String.rawm\angle BCD + m\angle CBD$. Similarly, $m\angle ABC = String.rawm\angle ACD + m\angle CAD$ and $m\angle ACB = String.rawm\angle ABD + m\angle BAD$. Adding these three equations gives: $m\angle BAC + m\angle ABC + m\angle ACB = String.rawm\angle BCD + m\angle CBD + m\angle ACD + m\angle ABD + m\angle CAD + m\angle BAD$. Since $\angle BCD$, $\angle CBD$, $\angle ACD$, $\angle ABD$, $\angle CAD$, and $\angle BAD$ form a straight line, their sum is $180^\circ$. Therefore, $m\angle BAC + m\angle ABC + m\angle ACB = String.raw180^\circ$.</p>

  <h4>Worked Examples</h4>
  <p><strong>Example 1:</strong> In a triangle $ABC$, $m\angle A = String.raw50^\circ$ and $m\angle B = String.raw70^\circ$. Find the measure of $\angle C$.</p>
  <p>Solution: Using the angle sum property, $m\angle A + m\angle B + m\angle C = String.raw180^\circ$. Substituting the given values, $50^\circ + 70^\circ + m\angle C = String.raw180^\circ$. Solving for $m\angle C$, $m\angle C = String.raw180^\circ - (50^\circ + 70^\circ) = String.raw60^\circ$.</p>
  <p><strong>Example 2:</strong> In a triangle $PQR$, $m\angle P = String.raw30^\circ$ and $m\angle Q = String.raw60^\circ$. Find the measure of $\angle R$.</p>
  <p>Solution: Using the angle sum property, $m\angle P + m\angle Q + m\angle R = String.raw180^\circ$. Substituting the given values, $30^\circ + 60^\circ + m\angle R = String.raw180^\circ$. Solving for $m\angle R$, $m\angle R = String.raw180^\circ - (30^\circ + 60^\circ) = String.raw90^\circ$.</p>

  <h4>Common Mistakes</h4>
  <ul>
    <li>Forgetting to consider the <strong>triangle inequality theorem</strong> when determining the possible lengths of the sides of a triangle.</li>
    <li>Not checking whether the given angles can form a valid triangle, i.e., whether their sum is $180^\circ$.</li>
    <li>Incorrectly applying the <strong>angle sum property</strong> by not considering all three angles of the triangle.</li>
    <li>Not using the correct units when measuring angles, such as using radians instead of degrees or vice versa.</li>
  </ul>

  <h4>Shortcuts & Tricks</h4>
  <ul>
    <li>Using the <strong>angle sum property</strong> to quickly find the measure of the third angle in a triangle.</li>
    <li>Applying the <strong>triangle inequality theorem</strong> to eliminate impossible combinations of side lengths.</li>
    <li>Recognizing common <strong>angle relationships</strong>, such as complementary, supplementary, and corresponding angles, to simplify calculations.</li>
    <li>Utilizing <strong>geometric properties</strong>, such as the properties of isosceles and equilateral triangles, to find angle measures and side lengths.</li>
  </ul>

  <h4>Real-World Applications</h4>
  <p>The study of lines, angles, and triangles has numerous real-world applications in fields such as:</p>
  <ul>
    <li><strong>Architecture</strong>: designing buildings, bridges, and other structures that require precise measurements and angles.</li>
    <li><strong>Engineering</strong>: developing machines, mechanisms, and systems that rely on geometric principles.</li>
    <li><strong>Physics</strong>: understanding the motion of objects, forces, and energies, which often involve geometric concepts.</li>
    <li><strong>Computer Science</strong>: creating graphics, animations, and simulations that require geometric transformations and calculations.</li>
  </ul>

  <div class= String.raw"important-box">
    <p>It is essential to understand the fundamental concepts of lines, angles, and triangles, as they form the basis for more advanced geometric and mathematical topics, such as [[Trigonometric Identities]], [[Coordinate Geometry]], and [[Vector Calculus]].</p>
  </div>

  <h4>Conclusion</h4>
  <p>In conclusion, the study of lines, angles, and triangles is a crucial part of geometry and mathematics. Understanding the properties, relationships, and applications of these concepts is vital for problem-solving and critical thinking. By mastering these topics, individuals can develop a strong foundation for further mathematical and scientific studies.</p>
  <p>Some key terms related to this topic include: [[Geometry]], [[Trigonometry]], [[Algebra]], [[Coordinate Geometry]], and [[Vector Calculus]].</p>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>The sum of the interior angles of a triangle is always $180^\circ$.</li>
      <li>The triangle inequality theorem states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.</li>
      <li>Parallel lines never intersect and have equal corresponding angles.</li>
      <li>Perpendicular lines intersect at a right angle ($90^\circ$).</li>
      <li>The angle sum property can be used to find the measure of the third angle in a triangle.</li>
      <li>Isosceles triangles have two equal sides and two equal base angles.</li>
      <li>Equilateral triangles have all sides equal and all angles equal to $60^\circ$.</li>
      <li>Scalene triangles have all sides of different lengths and all angles of different measures.</li>
      <li>The study of lines, angles, and triangles has numerous real-world applications in fields such as architecture, engineering, physics, and computer science.</li>
      <li>Understanding geometric concepts, such as [[Trigonometric Identities]] and [[Coordinate Geometry]], is essential for problem-solving and critical thinking.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["circles-polygons"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Circles & Polygons
  </h3>

  <h4><strong>1. Fundamental Definitions and Notations</strong></h4>
  <ul>
    <li><strong>[[Circle]]</strong>: The set of all points in a plane at a fixed distance <strong>$r$</strong> (the <strong>[[Radius]]</strong>) from a fixed point called the <strong>[[Center]]</strong> <strong>$O$</strong>.</li>
    <li><strong>[[Diameter]]</strong> (<strong>$d$</strong>) = String.raw<strong>2$r$</strong>; passes through <strong>$O$</strong> and is the longest chord.</li>
    <li><strong>[[Chord]]</strong>: Any line segment whose endpoints lie on the circle. The longest chord is the diameter.</li>
    <li><strong>[[Tangent]]</strong>: A line that touches the circle at exactly one point <strong>$T$</strong>. It satisfies <strong>$OT \perp$</strong> the tangent at <strong>$T$</strong>.</li>
    <li><strong>[[Secant]]</strong>: A line intersecting the circle at two distinct points <strong>$A$</strong> and <strong>$B$</strong>.</li>
    <li><strong>[[Arc]]</strong> (<strong>$\widehat{AB}$</strong>): The part of the circumference between two points <strong>$A$</strong> and <strong>$B$</strong>. Its length is proportional to the central angle subtended.</li>
    <li><strong>[[Sector]]</strong> (<strong>$\text{Sector }AOB$</strong>): Region bounded by two radii <strong>$OA$</strong>, <strong>$OB$</strong> and the included arc <strong>$\widehat{AB}$</strong>.</li>
    <li><strong>[[Segment]]</strong> (<strong>$\text{Segment }AB$</strong>): Region bounded by a chord <strong>$AB$</strong> and the corresponding arc.</li>
    <li><strong>[[Polygon]]</strong>: A closed planar figure formed by a finite number of straight line segments called <strong>edges</strong> or <strong>sides</strong>.</li>
    <li><strong>[[Regular Polygon]]</strong>: A polygon with all sides equal and all interior angles equal.</li>
  </ul>

  <h4><strong>2. Core Circle Formulas – Derivations from First Principles</strong></h4>
  <ol>
    <li><strong>Circumference</strong>:
      <ul>
        <li>Definition: The length of the closed curve.</li>
        <li>Formula: $$C = String.raw2\pi r = String.raw\pi d$$</li>
        <li>Derivation: Consider a regular polygon inscribed in the circle with $n$ sides of length $s_n$. As $n\to\infty$, the perimeter of the polygon tends to the circumference. Using the limit $ \displaystyle\lim_{n\to\infty} n s_n = String.raw2\pi r$, we obtain the formula.</li>
      </ul>
    </li>
    <li><strong>Area</strong>:
      <ul>
        <li>Formula: $$A = String.raw\pi r^{2}$$</li>
        <li>Derivation via integration in polar coordinates:
          $$A = String.raw\int_{0}^{2\pi}\int_{0}^{r} \rho \, d\rho \, d\theta = String.raw\int_{0}^{2\pi}\left[\frac{\rho^{2}}{2}\right]_{0}^{r} d\theta = String.raw\int_{0}^{2\pi}\frac{r^{2}}{2} d\theta = String.raw\pi r^{2}$$</li>
        <li>Alternative geometric proof: Partition the circle into $n$ equal sectors, rearrange them to approximate a rectangle of dimensions $\pi r$ and $r$, then let $n\to\infty$.</li>
      </ul>
    </li>
    <li><strong>Length of an Arc</strong>:
      <ul>
        <li>Let the central angle be $\theta$ (in radians). Then $$\ell = String.rawr\theta$$</li>
        <li>Constraint: $0\le \theta \le 2\pi$ for a simple arc.</li>
        <li>Derivation: By definition of radian measure, one radian subtends an arc equal in length to the radius. Scaling yields the formula.</li>
      </ul>
    </li>
    <li><strong>Area of a Sector</strong>:
      <ul>
        <li>Formula: $$A_{\text{sector}} = String.raw\frac{1}{2}r^{2}\theta$$</li>
        <li>Derivation: Ratio of sector area to total circle area equals ratio of central angle to full angle $2\pi$: $$\frac{A_{\text{sector}}}{\pi r^{2}} = String.raw\frac{\theta}{2\pi}\;\Rightarrow\;A_{\text{sector}} = String.raw\frac{\theta}{2\pi}\pi r^{2}= String.raw\frac{1}{2}r^{2}\theta$$</li>
      </ul>
    </li>
    <li><strong>Area of a Segment</strong>:
      <ul>
        <li>Let the subtended angle be $\theta$ (in radians). Then
          $$A_{\text{segment}} = String.raw\frac{1}{2}r^{2}(\theta-\sin\theta)$$</li>
        <li>Derivation: Subtract the area of the isosceles triangle $OAB$ (area $= String.raw\frac{1}{2}r^{2}\sin\theta$) from the sector area.</li>
      </ul>
    </li>
  </ol>

  <h4><strong>3. Polygonal Relations – Inscribed and Circumscribed Circles</strong></h4>
  <div class= String.raw"important-box" style= String.raw"background:#f9f9f9;border-left:4px solid #ff9800;padding:10px;margin:15px 0;">
    <strong>Key Distinction:</strong> An <em>inscribed circle</em> (incircle) touches each side of the polygon, while a <em>circumscribed circle</em> (circumcircle) passes through all vertices. Not every polygon admits both; only <strong>tangential</strong> polygons have an incircle, and only <strong>cyclic</strong> polygons have a circumcircle.
  </div>

  <ul>
    <li><strong>Incircle Radius (<strong>$r$</strong>) for a Tangential Polygon</strong>:
      $$r = String.raw\frac{2A}{P}$$
      where <strong>$A$</strong> is the polygon area and <strong>$P$</strong> its perimeter. Derivation follows from summing the areas of $n$ triangles formed by the incenter and each side.
    </li>
    <li><strong>Circumradius (<strong>$R$</strong>) for a Cyclic Polygon</strong>:
      For a triangle with sides $a,b,c$, $$R = String.raw\frac{abc}{4\Delta}$$ where $\Delta$ is the triangle area. Generalization for regular $n$‑gon:
      $$R = String.raw\frac{s}{2\sin\frac{\pi}{n}}$$
      with $s$ the side length.</li>
    <li><strong>Area of a Regular $n$‑gon</strong>:
      $$A = String.raw\frac{1}{2}nR^{2}\sin\frac{2\pi}{n} = String.raw\frac{1}{4}ns^{2}\cot\frac{\pi}{n}$$
      Derivation: Split the polygon into $n$ isosceles triangles sharing the center; sum their areas.</li>
    <li><strong>Perimeter of a Regular $n$‑gon</strong>:
      $$P = String.rawns$$</li>
  </ul>

  <h4><strong>4. Comparative Table – Regular Polygons</strong></h4>
  <table style= String.raw"width:100%;border-collapse:collapse;margin:12px 0;">
    <thead>
      <tr style= String.raw"background:#e0e0e0;">
        <th style= String.raw"border:1px solid #bbb;padding:6px;">Polygon</th>
        <th style= String.raw"border:1px solid #bbb;padding:6px;">Sides ($n$)</th>
        <th style= String.raw"border:1px solid #bbb;padding:6px;">Side Length ($s$)</th>
        <th style= String.raw"border:1px solid #bbb;padding:6px;">Circumradius ($R$)</th>
        <th style= String.raw"border:1px solid #bbb;padding:6px;">Inradius ($r$)</th>
        <th style= String.raw"border:1px solid #bbb;padding:6px;">Area ($A$)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid #bbb;padding:6px;"><strong>Equilateral Triangle</strong></td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">3</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$s$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$\displaystyle \frac{s}{\sqrt{3}}$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$\displaystyle \frac{s}{2\sqrt{3}}$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$\displaystyle \frac{\sqrt{3}}{4}s^{2}$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #bbb;padding:6px;"><strong>Square</strong></td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">4</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$s$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$\displaystyle \frac{s}{\sqrt{2}}$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$\displaystyle \frac{s}{2}$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$s^{2}$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #bbb;padding:6px;"><strong>Regular Hexagon</strong></td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">6</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$s$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$s$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$\displaystyle \frac{\sqrt{3}}{2}s$</td>
        <td style= String.raw"border:1px solid #bbb;padding:6px;">$\displaystyle \frac{3\sqrt{3}}{2}s^{2}$</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>5. Advanced Theorems Involving Circles</strong></h4>
  <ul>
    <li><strong>[[Power of a Point]]</strong>:
      <ul>
        <li>For a point $P$ outside the circle, if two secants $PA$ and $PB$ intersect the circle at $A,B$ and $C,D$ respectively, then $$PA\cdot PB = String.rawPC\cdot PD$$</li>
        <li>For a point inside, if two chords intersect at $P$, $$PA\cdot PB = String.rawPC\cdot PD$$</li>
      </ul>
    </li>
    <li><strong>[[Ptolemy's theorem]] (Cyclic Quadrilateral)</strong>:
      $$AC\cdot BD = String.rawAB\cdot CD + AD\cdot BC$$</li>
    <li><strong>[[Brahmagupta's formula]] for cyclic quadrilaterals</strong>:
      $$\Delta = String.raw\sqrt{(s-a)(s-b)(s-c)(s-d)}$$ where $s= String.raw\frac{a+b+c+d}{2}$.</li>
    <li><strong>[[Angle Bisector Theorem]] in a triangle</strong>:
      $$\frac{AB}{AC} = String.raw\frac{BD}{DC}$$ where $BD$ and $DC$ are the segments created by the internal bisector of $\angle A$.</li>
    <li><strong>[[Euler's line]]</strong> in any non‑equilateral triangle: the centroid $G$, circumcenter $O$, and orthocenter $H$ are collinear with $OG:GH = String.raw1:2$.</li>
  </ul>

  <h4><strong>6. Common Mistakes</strong></h4>
  <ul>
    <li><strong>Confusing radius and diameter</strong>: Many students substitute $d$ where $r$ is required, leading to a factor of $2$ error in area or circumference.</li>
    <li><strong>Using degree measure in radian‑based formulas</strong>: The arc length $r\theta$ and sector area $\frac12 r^{2}\theta$ demand $\theta$ in radians. Forgetting to convert yields a $\frac{180}{\pi}$ error.</li>
    <li><strong>Assuming every polygon is cyclic</strong>: Only polygons satisfying the equal‑opposite‑angle condition (for quadrilaterals) or having a common circumradius are cyclic. Applying circumradius formulas to a non‑cyclic quadrilateral yields incorrect results.</li>
    <li><strong>Neglecting the sign of $\sin\theta$ in segment area</strong>: For $\theta> \pi$, the formula $\frac12 r^{2}(\theta-\sin\theta)$ must use the principal value of $\theta$ (i.e., $\theta$ reduced modulo $2\pi$) to avoid negative area.</li>
  </ul>

  <h4><strong>7. Shortcuts & Tricks for Competitive Exams</strong></h4>
  <ol>
    <li><strong>Quick Circumradius of a Right Triangle</strong>: For a right‑angled triangle with hypotenuse $c$, the circumradius is $$R = String.raw\frac{c}{2}$$ because the hypotenuse is the diameter of the circumcircle.</li>
    <li><strong>Fast Area of a Regular Polygon using Inradius</strong>: Use $$A = String.raw\frac{1}{2}Pr$$ where $P$ is perimeter and $r$ is inradius. This avoids trigonometric calculations.</li>
    <li><strong>Chord Length from Central Angle</strong>:
      $$\text{Chord} = String.raw2r\sin\frac{\theta}{2}$$
      Memorise the $2\sin\frac{\theta}{2}$ pattern; it reduces computation time.</li>
    <li><strong>Power of a Point Shortcut</strong>: When a tangent $PT$ and a secant $PAB$ are drawn from the same external point $P$, the relation simplifies to $$PT^{2}= String.rawPA\cdot PB$$ eliminating one multiplication.</li>
    <li><strong>Area of a Cyclic Quadrilateral</strong>: If the quadrilateral is a rectangle, $R$ is half the diagonal; otherwise, use Brahmagupta’s formula directly with semiperimeter $s$.</li>
    <li><strong>Using Symmetry in Regular Polygons</strong>: For a regular $n$‑gon, the distance from any vertex to the centre is $R$, and the distance from the centre to any side is $r = String.rawR\cos\frac{\pi}{n}$. This allows rapid computation of $R$ or $r$ once one is known.</li>
  </ol>

  <h4><strong>8. Worked Example 1 – Finding the Length of a Chord</strong></h4>
  <p><strong>Problem:</strong> In a circle of radius $r = String.raw10\ \text{cm}$, the central angle subtended by a chord is $120^\circ$. Find the chord length.</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Convert the angle to radians: $$\theta = String.raw120^\circ \times \frac{\pi}{180^\circ}= String.raw\frac{2\pi}{3}\ \text{rad}$$</li>
    <li>Apply the chord formula $$\text{Chord}= String.raw2r\sin\frac{\theta}{2}$$</li>
    <li>Compute the half‑angle: $$\frac{\theta}{2}= String.raw\frac{1}{2}\cdot\frac{2\pi}{3}= String.raw\frac{\pi}{3}$$</li>
    <li>Evaluate the sine: $$\sin\frac{\pi}{3}= String.raw\frac{\sqrt{3}}{2}$$</li>
    <li>Substitute:
      $$\text{Chord}= String.raw2\times 10\ \text{cm}\times\frac{\sqrt{3}}{2}= String.raw10\sqrt{3}\ \text{cm}\approx 17.32\ \text{cm}$$</li>
  </ol>
  <p><strong>Key Points:</strong> Always convert degrees to radians before using the chord formula; the factor $2r$ emerges from the law of sines applied to the isosceles triangle $OAB$.</p>

  <h4><strong>9. Worked Example 2 – Area of a Cyclic Quadrilateral (Brahmagupta)</strong></h4>
  <p><strong>Problem:</strong> A quadrilateral has sides $a= String.raw7\ \text{cm},\ b= String.raw9\ \text{cm},\ c= String.raw8\ \text{cm},\ d= String.raw6\ \text{cm}$ and is known to be cyclic. Compute its area.</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Compute the semiperimeter:
      $$s= String.raw\frac{a+b+c+d}{2}= String.raw\frac{7+9+8+6}{2}= String.raw\frac{30}{2}= String.raw15\ \text{cm}$$</li>
    <li>Apply Brahmagupta’s formula:
      $$\Delta = String.raw\sqrt{(s-a)(s-b)(s-c)(s-d)}$$</li>
    <li>Calculate each factor:
      <ul>
        <li>$s-a = String.raw15-7 = String.raw8$</li>
        <li>$s-b = String.raw15-9 = String.raw6$</li>
        <li>$s-c = String.raw15-8 = String.raw7$</li>
        <li>$s-d = String.raw15-6 = String.raw9$</li>
      </ul>
    </li>
    <li>Multiply: $$8\times6\times7\times9 = String.raw(8\times6)(7\times9)= String.raw48\times63= String.raw3024$$</li>
    <li>Take the square root:
      $$\Delta = String.raw\sqrt{3024}= String.raw\sqrt{16\times189}= String.raw4\sqrt{189}= String.raw4\sqrt{9\times21}= String.raw12\sqrt{21}\ \text{cm}^{2}\approx 55.0\ \text{cm}^{2}$$</li>
  </ol>
  <p><strong>Verification:</strong> Since all sides satisfy the cyclic condition (opposite angles sum to $180^\circ$), the formula is valid. Any deviation would invalidate the result.</p>

  <h4><strong>10. Interplay Between Circles and Polygons – Special Cases</strong></h4>
  <ul>
    <li><strong>Inscribed Regular Polygon in a Circle</strong>:
      <ul>
        <li>Side length: $$s = String.raw2R\sin\frac{\pi}{n}$$</li>
        <li>Area: $$A = String.raw\frac{1}{2}nR^{2}\sin\frac{2\pi}{n}$$</li>
        <li>When $n\to\infty$, $s\to 0$ and $A\to \pi R^{2}$, confirming the circle as the limit of regular polygons.</li>
      </ul>
    </li>
    <li><strong>Circumscribed Polygon about a Circle</strong>:
      <ul>
        <li>Side length: $$s = String.raw2r\tan\frac{\pi}{n}$$ where $r$ is the inradius.</li>
        <li>Area: $$A = String.rawnr^{2}\tan\frac{\pi}{n}$$</li>
        <li>As $n\to\infty$, the polygon approaches the same circle, providing a second proof of the area formula.</li>
      </ul>
    </li>
    <li><strong>Euler’s Formula for a Triangle</strong> linking circumradius $R$, inradius $r$, and side $a$:
      $$R = String.raw\frac{abc}{4\Delta},\qquad r = String.raw\frac{2\Delta}{a+b+c}$$
      Combining yields $$R\ge 2r$$ with equality only for the equilateral triangle.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>For any right‑angled triangle, the hypotenuse equals the diameter of its circumcircle ($R= String.raw\frac{c}{2}$).</li>
      <li>Chord length formula: $2r\sin\frac{\theta}{2}$ (θ in radians).</li>
      <li>Area of a sector: $\frac12 r^{2}\theta$; remember θ must be in radians.</li>
      <li>Power of a point: $PT^{2}= String.rawPA\cdot PB$ when a tangent and a secant are drawn from the same external point.</li>
      <li>Brahmagupta’s formula applies only to cyclic quadrilaterals.</li>
      <li>In a regular $n$‑gon, $R = String.raw\frac{s}{2\sin\frac{\pi}{n}}$ and $r = String.raw\frac{s}{2\tan\frac{\pi}{n}}$.</li>
      <li>Euler’s inequality $R\ge 2r$ with equality for an equilateral triangle.</li>
      <li>Area of a circle can be derived quickly via $A = String.raw\pi r^{2}$; memorize $\pi\approx 22/7$ for quick mental calculation.</li>
      <li>When two chords intersect inside a circle, the products of the segments are equal ($PA\cdot PB = String.rawPC\cdot PD$).</li>
      <li>For a regular polygon, $\displaystyle A = String.raw\frac{1}{4}ns^{2}\cot\frac{\pi}{n}$ is a fast way to compute area without trigonometric tables.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["area-perimeter"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    2D Figures: Area & Perimeter
  </h3>

  <h4>1. <strong>Foundational Concepts</strong></h4>
  <ul>
    <li><strong>Area</strong> (<em>area</em>) of a plane figure is the measure of the region enclosed by its boundary, expressed in square units (<strong>sq units</strong>).</li>
    <li><strong>Perimeter</strong> (<em>perimetrium</em>) is the total length of the boundary of a figure, expressed in linear units.</li>
    <li>All formulas assume the figure lies on a Cartesian plane unless otherwise stated; units must be consistent throughout the computation.</li>
    <li>In competitive examinations, the <strong>standard unit</strong> is usually centimeters (<strong>cm</strong>) or meters (<strong>m</strong>), but the numerical value is independent of the unit.</li>
  </ul>

  <h4>2. <strong>General Formulas for Simple Polygons</strong></h4>
  <ul>
    <li><strong>Square</strong> – side length <strong>a</strong>:
      <ul>
        <li>Area: $$A = String.rawa^{2}$$ where $a>0$.</li>
        <li>Perimeter: $$P = String.raw4a$$.</li>
      </ul>
    </li>
    <li><strong>Rectangle</strong> – length <strong>l</strong>, breadth <strong>b</strong>:
      <ul>
        <li>Area: $$A = String.rawl\;b$$ with $l,b>0$.</li>
        <li>Perimeter: $$P = String.raw2(l+b)$$.</li>
      </ul>
    </li>
    <li><strong>Parallelogram</strong> – base <strong>b</strong>, height <strong>h</strong>:
      <ul>
        <li>Area: $$A = String.rawb\;h$$ (height measured perpendicular to the base).</li>
        <li>Perimeter: $$P = String.raw2(a+b)$$ where $a$ and $b$ are the lengths of the adjacent sides.</li>
      </ul>
    </li>
    <li><strong>Rhombus</strong> – side <strong>s</strong>, diagonals <strong>d_{1}</strong> and <strong>d_{2}</strong>:
      <ul>
        <li>Area (using diagonals): $$A = String.raw\frac{d_{1}d_{2}}{2}$$.</li>
        <li>Area (using side and altitude): $$A = String.raws\;h$$.</li>
        <li>Perimeter: $$P = String.raw4s$$.</li>
      </ul>
    </li>
    <li><strong>Triangle</strong> – sides $a,b,c$ and altitude $h_{a}$ to side $a$:
      <ul>
        <li>Area (base–height): $$A = String.raw\frac{1}{2}a\,h_{a}$$.</li>
        <li>Area (Heron’s formula): $$A = String.raw\sqrt{s(s-a)(s-b)(s-c)}$$ where $s = String.raw\frac{a+b+c}{2}$ is the semiperimeter.</li>
        <li>Perimeter: $$P = String.rawa+b+c$$.</li>
      </ul>
    </li>
    <li><strong>Circle</strong> – radius <strong>r</strong>:
      <ul>
        <li>Area: $$A = String.raw\pi r^{2}$$.</li>
        <li>Circumference (perimeter): $$C = String.raw2\pi r = String.raw\pi d$$ where $d= String.raw2r$.</li>
      </ul>
    </li>
    <li><strong>Ellipse</strong> – semi‑major axis <strong>a</strong>, semi‑minor axis <strong>b</strong>:
      <ul>
        <li>Area: $$A = String.raw\pi a b$$.</li>
        <li>Approximate perimeter (Ramanujan’s second approximation): $$P \approx \pi\bigl[\,3(a+b)-\sqrt{(3a+b)(a+3b)}\,\bigr]$$.</li>
      </ul>
    </li>
  </ul>

  <h4>3. <strong>Derivation of Core Results</strong></h4>
  <div class= String.raw"important-box" style= String.raw"background:#2b2f3a;padding:12px;margin:12px 0;border-left:4px solid var(--accent);">
    <strong>Deriving the Area of a Parallelogram from First Principles</strong>
    <ol>
      <li>Place the parallelogram on the Cartesian plane with one side on the $x$‑axis. Let the vertices be $O(0,0)$, $A(b,0)$, $B(b+u,h)$, $C(u,h)$ where $b$ is the base length and $h$ the altitude.</li>
      <li>The polygon can be decomposed into a rectangle of area $b\;h$ and two right‑angled triangles of equal area $\frac{1}{2}u h$ each.</li>
      <li>Summing the areas: $$A = String.rawb h + 2\left(\frac{1}{2}u h\right) = String.rawb h + u h = String.raw(b+u)h$$.</li>
      <li>Since $b+u$ is the projection of the adjacent side on the base direction, the product $b h$ alone already gives the exact area, confirming $$A = String.rawb h$$.</li>
    </ol>
  </div>

  <div class= String.raw"important-box" style= String.raw"background:#2b2f3a;padding:12px;margin:12px 0;border-left:4px solid var(--accent);">
    <strong>Proof of Heron’s Formula</strong>
    <ol>
      <li>Start with a triangle of sides $a,b,c$ and semiperimeter $s= String.raw\frac{a+b+c}{2}$.</li>
      <li>Apply the law of cosines to express $\cos\gamma$ where $\gamma$ is the angle opposite side $c$: $$c^{2}= String.rawa^{2}+b^{2}-2ab\cos\gamma.$$</li>
      <li>Using the area formula $A = String.raw\frac{1}{2}ab\sin\gamma$ and the identity $\sin^{2}\gamma = String.raw1-\cos^{2}\gamma$, after algebraic manipulation we obtain $$A^{2}= String.raws(s-a)(s-b)(s-c).$$</li>
      <li>Taking the positive square root (area is non‑negative) yields Heron’s formula as stated.</li>
    </ol>
  </div>

  <h4>4. <strong>Special Figures and Their Composite Areas</strong></h4>
  <table style= String.raw"width:100%;border-collapse:collapse;margin:12px 0;">
    <thead style= String.raw"background:#1e222b;">
      <tr>
        <th style= String.raw"border:1px solid var(--border);padding:6px;">Figure</th>
        <th style= String.raw"border:1px solid var(--border);padding:6px;">Key Variables</th>
        <th style= String.raw"border:1px solid var(--border);padding:6px;">Area Formula</th>
        <th style= String.raw"border:1px solid var(--border);padding:6px;">Perimeter Formula</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid var(--border);padding:6px;"><strong>Square</strong></td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$a$ (side)</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$A = String.rawa^{2}$$</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$P = String.raw4a$$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border);padding:6px;"><strong>Rectangle</strong></td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$l$ (length), $b$ (breadth)</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$A = String.rawl b$$</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$P = String.raw2(l+b)$$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border);padding:6px;"><strong>Triangle</strong></td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$a,b,c$ (sides), $h$ (altitude)</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$A = String.raw\frac{1}{2} a h$$ or $$A = String.raw\sqrt{s(s-a)(s-b)(s-c)}$$</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$P = String.rawa+b+c$$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border);padding:6px;"><strong>Circle</strong></td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$r$ (radius)</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$A = String.raw\pi r^{2}$$</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$C = String.raw2\pi r$$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid var(--border);padding:6px;"><strong>Regular $n$‑gon</strong></td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$a$ (side), $n$ (number of sides), $R$ (circumradius), $r$ (inradius)</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$A = String.raw\frac{1}{2} n a r = String.raw\frac{n R^{2}}{2}\sin\frac{2\pi}{n}$$</td>
        <td style= String.raw"border:1px solid var(--border);padding:6px;">$$P = String.rawn a$$</td>
      </tr>
    </tbody>
  </table>

  <h4>5. <strong>Composite and Sub‑divided Figures</strong></h4>
  <ul>
    <li>When a complex shape can be split into non‑overlapping simple figures, the total area is the algebraic sum of the individual areas. Perimeter, however, must be calculated by tracing the outermost boundary only.</li>
    <li>Typical strategies:
      <ol>
        <li>Identify a common baseline (e.g., a rectangle) and subtract the area of “cut‑outs’’ (triangles, semicircles).</li>
        <li>Use symmetry to replicate a known sector or quadrant.</li>
        <li>When a shape contains a hole (e.g., a ring), subtract the inner area from the outer area.</li>
      </ol>
    </li>
  </ul>

  <h4>6. <strong>Common Mistakes</strong></h4>
  <ul>
    <li><strong>Confusing radius and diameter</strong>: In formulas involving $\pi$, many students mistakenly plug $d$ where $r$ is required, leading to a factor of $4$ error in area.</li>
    <li><strong>Using perimeter in place of area</strong>: For regular polygons, the apothem $r$ must be used for area; substituting side length directly yields a wrong result.</li>
    <li><strong>Ignoring units of altitude</strong>: When the height is given relative to a slanted side, students often use the slant length instead of the perpendicular height, violating the definition of $h$.</li>
    <li><strong>Applying Heron’s formula to a degenerate triangle</strong>: If $a+b= String.rawc$ (collinear points), the semiperimeter $s$ equals $c$, and the formula yields zero area; forgetting to check triangle inequality leads to negative radicand.</li>
  </ul>

  <h4>7. <strong>Shortcuts &amp; Tricks for Competitive Exams</strong></h4>
  <ul>
    <li><strong>Memory‑anchor for circle formulas</strong>: Remember $C = String.raw2\pi r$ and $A = String.raw\pi r^{2}$; the area is simply $\frac{r}{2}$ times the circumference.</li>
    <li><strong>“Half‑product” rule for right‑angled triangles</strong>: If the legs are $p$ and $q$, the area is $\frac{pq}{2}$ – no need to compute the hypotenuse unless required for perimeter.</li>
    <li><strong>Quick perimeter of regular polygons</strong>: $P = String.rawn\cdot a$; for a regular hexagon with side $a$, $P = String.raw6a$ instantly.</li>
    <li><strong>Diagonal method for rhombus</strong>: $A = String.raw\frac{d_{1}d_{2}}{2}$ – just multiply the two diagonals and halve.</li>
    <li><strong>Sector area shortcut</strong>: For a sector with central angle $\theta$ (in degrees) and radius $r$, $$A_{\text{sector}} = String.raw\frac{\theta}{360}\,\pi r^{2}.$$ This avoids converting to radians.</li>
    <li><strong>Using $1\;\text{cm}^{2}= String.raw\frac{1}{100}\;\text{m}^{2}$</strong> for quick conversion when the problem mixes units.</li>
  </ul>

  <h4>8. <strong>Worked Example 1 – Composite Figure</strong></h4>
  <p><strong>Problem:</strong> Find the area and perimeter of a shape formed by a rectangle of length $12\;\text{cm}$ and breadth $8\;\text{cm}$ with a semicircle of radius $4\;\text{cm}$ attached to one of the $12\;\text{cm}$ sides.</p>
  <ol>
    <li>Identify components:
      <ul>
        <li>Rectangle: $l= String.raw12$, $b= String.raw8$.</li>
        <li>Semicircle: radius $r= String.raw4$ (since the semicircle’s diameter equals the rectangle side it attaches to).</li>
      </ul>
    </li>
    <li>Compute area:
      <ul>
        <li>Rectangle area: $$A_{\text{rect}} = String.rawl\,b = String.raw12\times8 = String.raw96\;\text{cm}^{2}.$$</li>
        <li>Semicircle area: $$A_{\text{semi}} = String.raw\frac{1}{2}\pi r^{2} = String.raw\frac{1}{2}\pi(4)^{2}= String.raw\frac{1}{2}\pi\cdot16 = String.raw8\pi\;\text{cm}^{2}.$$</li>
        <li>Total area: $$A_{\text{total}} = String.raw96 + 8\pi\;\text{cm}^{2} \approx 96 + 25.13 = String.raw121.13\;\text{cm}^{2}.$$</li>
      </ul>
    </li>
    <li>Compute perimeter:
      <ul>
        <li>Outer boundary consists of three sides of the rectangle ($12+8+8 = String.raw28\;\text{cm}$) plus the curved edge of the semicircle.
        <li>Semicircle arc length: $$L_{\text{semi}} = String.raw\pi r = String.raw\pi\times4 = String.raw4\pi\;\text{cm}.$$</li>
        <li>Total perimeter: $$P_{\text{total}} = String.raw28 + 4\pi \approx 28 + 12.57 = String.raw40.57\;\text{cm}.$$</li>
      </ul>
    </li>
  </ol>
  <p>Key take‑away: Always add only the outermost curve; the straight side where the semicircle meets the rectangle is interior and must not be counted.</p>

  <h4>9. <strong>Worked Example 2 – Using Heron’s Formula</strong></h4>
  <p><strong>Problem:</strong> A triangle has sides $a= String.raw13\;\text{cm}$, $b= String.raw14\;\text{cm}$, $c= String.raw15\;\text{cm}$. Find its area and perimeter.</p>
  <ol>
    <li>Perimeter:
      $$P = String.rawa+b+c = String.raw13+14+15 = String.raw42\;\text{cm}.$$</li>
    <li>Semiperimeter:
      $$s = String.raw\frac{P}{2} = String.raw\frac{42}{2}= String.raw21\;\text{cm}.$$</li>
    <li>Apply Heron’s formula:
      \[
      A = String.raw\sqrt{s(s-a)(s-b)(s-c)} = String.raw\sqrt{21(21-13)(21-14)(21-15)}.
      \]
      Compute each factor:
      \begin{align*}
      s-a &= String.raw21-13 = String.raw8,\\
      s-b &= String.raw21-14 = String.raw7,\\
      s-c &= String.raw21-15 = String.raw6.
      \end{align*}
      Hence,
      $$A = String.raw\sqrt{21\times8\times7\times6} = String.raw\sqrt{21\times336} = String.raw\sqrt{7056} = String.raw84\;\text{cm}^{2}.$$
    </li>
    <li>Verification via base‑height method (optional):
      Using $c= String.raw15$ as base, compute height $h$ from area formula $A = String.raw\frac{1}{2}c h$:
      $$h = String.raw\frac{2A}{c} = String.raw\frac{2\times84}{15}= String.raw\frac{168}{15}= String.raw11.2\;\text{cm}.$$
      This height satisfies the Pythagorean relationship $a^{2}= String.rawh^{2}+(\frac{c}{2})^{2}$ approximately, confirming correctness.</li>
  </ol>
  <p>Note the elegance: the $13$‑$14$‑$15$ triangle is a classic integer‑area triangle, often appearing in exams.</p>

  <h4>10. <strong>Advanced Edge Cases</strong></h4>
  <ul>
    <li><strong>Zero‑area degenerate polygons</strong>: When all vertices are collinear, the area formula yields zero; perimeter equals the distance between the two extreme points.</li>
    <li><strong>Non‑convex polygons</strong>: The shoelace (Gauss) formula still works if vertices are ordered consistently (clockwise or counter‑clockwise). However, the “perimeter’’ must be taken as the sum of absolute side lengths regardless of interior angles.</li>
    <li><strong>Sector‑segment problems</strong>: For a segment cut off by a chord of length $c$ in a circle of radius $r$, the area is $$A_{\text{segment}} = String.raw\frac{r^{2}}{2}\bigl(\theta - \sin\theta\bigr)$$ where $\theta$ is the central angle in radians, found via $\cos\frac{\theta}{2} = String.raw\frac{c}{2r}$.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>Area of a regular polygon = String.raw$\displaystyle \frac{1}{2}\times\text{perimeter}\times\text{apothem}$.</li>
      <li>For a rhombus, $A = String.raw\frac{d_{1}d_{2}}{2}$ – always use the perpendicular diagonals.</li>
      <li>Circle circumference $C = String.raw2\pi r$; never substitute $d$ unless you first replace $r$ with $d/2$.</li>
      <li>Heron’s formula works only when $a+b>c$, $b+c>a$, $c+a>b$ (triangle inequality).</li>
      <li>Sector area = String.raw$\displaystyle \frac{\theta}{360}\times\pi r^{2}$ (degrees) or $\displaystyle \frac{\theta}{2\pi}\times\pi r^{2}$ (radians).</li>
      <li>When a shape contains a hole, subtract the inner area from the outer area (e.g., ring area = String.raw$\pi(R^{2}-r^{2})$).</li>
      <li>In a right‑angled triangle, perimeter $P = String.rawa+b+\sqrt{a^{2}+b^{2}}$ – compute hypotenuse only once.</li>
      <li>For an ellipse, area $A = String.raw\pi a b$ – use semi‑axes, not full axes.</li>
      <li>Perimeter of a regular $n$‑gon = String.raw$n\times$ side length; no trigonometric terms needed.</li>
      <li>Always convert mixed units before inserting into formulas (e.g., $1\;\text{m}= String.raw100\;\text{cm}$).</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["surface-area-volume"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    3D Solids: Surface Area & Volume
  </h3>

  <h4><strong>Fundamental Concepts</strong></h4>
  <ul>
    <li><strong>Surface Area (SA)</strong>: The sum of the areas of all the faces that bound a solid. It is denoted by $S$ or $A$ and measured in square units.</li>
    <li><strong>Volume (V)</strong>: The amount of three‑dimensional space enclosed by the solid. It is denoted by $V$ and measured in cubic units.</li>
    <li><strong>Base Area (B)</strong>: The area of the planar region on which the solid stands. Frequently appears in formulas for pyramids and cones.</li>
    <li><strong>Height (h)</strong>: The perpendicular distance between the base and the opposite face (or apex). For cylinders, cones, and prisms, $h$ is measured along the axis of symmetry.</li>
    <li><strong>Radius (r)</strong>: Distance from the centre to any point on a circular cross‑section. Appears in spheres, cylinders, cones, hemispheres, and toroids.</li>
    <li><strong>Slant Height (l)</strong>: The distance measured along the lateral surface from the base edge to the apex. Essential for cones, pyramids, and frustums.</li>
  </ul>

  <div class= String.raw"important-box" style= String.raw"background:#2a2e3b; padding:12px; margin:12px 0; border-left:4px solid var(--accent);">
    <strong>Key Distinction:</strong> <em>Surface area</em> accounts for the exterior “skin” of a solid, whereas <em>volume</em> measures the interior “capacity”. In many competitive problems, confusing the two leads to a loss of marks.
  </div>

  <h4><strong>Formulas for Common Solids</strong></h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style= String.raw"background:#1e222b;">
        <th style= String.raw"border:1px solid #444;padding:8px;">Solid</th>
        <th style= String.raw"border:1px solid #444;padding:8px;">Surface Area Formula</th>
        <th style= String.raw"border:1px solid #444;padding:8px;">Volume Formula</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Cube]]</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$S = String.raw6a^{2}$</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.rawa^{3}$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Cuboid]]</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$S = String.raw2(lw + lh + wh)$</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.rawlwh$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Sphere]]</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$S = String.raw4\pi r^{2}$</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.raw\dfrac{4}{3}\pi r^{3}$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Cylinder]]</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$S = String.raw2\pi r (r + h)$</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.raw\pi r^{2} h$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Cone]]</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$S = String.raw\pi r (r + l)$, \; where $l = String.raw\sqrt{r^{2}+h^{2}}$</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.raw\dfrac{1}{3}\pi r^{2} h$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Hemisphere]]</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$S = String.raw3\pi r^{2}$ (including base)</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.raw\dfrac{2}{3}\pi r^{3}$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Frustum of a Cone]]</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$S = String.raw\pi (r_{1}+r_{2})l + \pi r_{1}^{2} + \pi r_{2}^{2}$</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.raw\dfrac{1}{3}\pi h (r_{1}^{2}+r_{1}r_{2}+r_{2}^{2})$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Pyramid]] (regular)</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$S = String.rawB + \dfrac{1}{2}Pl$, \; $P$ = String.rawperimeter of base</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.raw\dfrac{1}{3}Bh$</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #444;padding:8px;"><strong>[[Ellipsoid]]</strong></td>
        <td style= String.raw"border:1px solid #444;padding:8px;">Approx. $S \approx 4\pi \left(\dfrac{a^{p}b^{p}+a^{p}c^{p}+b^{p}c^{p}}{3}\right)^{1/p}$, $p\approx1.6075$</td>
        <td style= String.raw"border:1px solid #444;padding:8px;">$V = String.raw\dfrac{4}{3}\pi abc$</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>Derivations from First Principles</strong></h4>
  <ol>
    <li><strong>Sphere Surface Area</strong>
      <ul>
        <li>Consider a thin spherical shell of radius $r$ and thickness $dr$. Its volume is $dV = String.raw4\pi r^{2} dr$.</li>
        <li>By definition, surface area $S$ is $\displaystyle \lim_{dr\to0}\frac{dV}{dr}= String.raw4\pi r^{2}$.</li>
        <li>Thus $S = String.raw4\pi r^{2}$, where $r>0$.</li>
      </ul>
    </li>
    <li><strong>Volume of a Cone</strong>
      <ul>
        <li>Take a right circular cone with base radius $r$ and height $h$.</li>
        <li>Slice the cone into infinitesimally thin disks of thickness $dy$ at a distance $y$ from the apex.</li>
        <li>Radius of each disk: $R(y)= String.raw\frac{r}{h}y$ (similar triangles).</li>
        <li>Area of a disk: $\pi R^{2}(y)= String.raw\pi\left(\frac{r}{h}y\right)^{2}$.</li>
        <li>Volume element: $dV = String.raw\pi\left(\frac{r}{h}\right)^{2} y^{2} dy$.</li>
        <li>Integrate from $y= String.raw0$ to $y= String.rawh$:</li>
        $$V = String.raw\int_{0}^{h} \pi\left(\frac{r}{h}\right)^{2} y^{2} dy
        = String.raw\pi\frac{r^{2}}{h^{2}}\left[\frac{y^{3}}{3}\right]_{0}^{h}
        = String.raw\frac{1}{3}\pi r^{2}h.$$
        <li>Constraint: $r,h>0$; the derivation assumes a right cone.</li>
      </ul>
    </li>
    <li><strong>Surface Area of a Cylinder</strong>
      <ul>
        <li>Surface area consists of two circular ends plus the curved lateral surface.</li>
        <li>Area of each end: $\pi r^{2}$ ⇒ total ends $2\pi r^{2}$.</li>
        <li>Lateral surface is a rectangle unrolled: length $= String.raw2\pi r$, height $= String.rawh$ ⇒ area $= String.raw2\pi r h$.</li>
        <li>Thus $S = String.raw2\pi r^{2}+2\pi r h = String.raw2\pi r(r+h)$.</li>
        <li>Valid for a right circular cylinder ($r>0$, $h>0$).</li>
      </ul>
    </li>
    <li><strong>Volume of a Frustum of a Cone</strong>
      <ul>
        <li>Let $r_{1}$ and $r_{2}$ be radii of the lower and upper bases, respectively, and $h$ the vertical height.</li>
        <li>Imagine a full cone of height $H$ that contains the frustum; by similar triangles,
          $$\frac{r_{1}}{H}= String.raw\frac{r_{2}}{H-h}\quad\Rightarrow\quad H = String.raw\frac{h\,r_{1}}{r_{1}-r_{2}}.$$</li>
        <li>Volume of full cone: $V_{\text{full}} = String.raw\dfrac{1}{3}\pi r_{1}^{2} H$.</li>
        <li>Volume of removed small cone (top): $V_{\text{top}} = String.raw\dfrac{1}{3}\pi r_{2}^{2}(H-h)$.</li>
        <li>Subtracting gives the frustum volume:
          $$V = String.raw\frac{1}{3}\pi h\bigl(r_{1}^{2}+r_{1}r_{2}+r_{2}^{2}\bigr).$$</li>
        <li>All radii and $h$ must be positive; $r_{1}>r_{2}$ for a proper frustum.</li>
      </ul>
    </li>
  </ol>

  <h4><strong>Worked Examples</strong></h4>

  <h5><strong>Example 1 – Surface Area & Volume of a Composite Solid</strong></h5>
  <p><strong>Problem:</strong> A solid consists of a right circular cylinder of radius $r= String.raw5\text{ cm}$ and height $h= String.raw12\text{ cm}$ topped by a cone having the same base radius and a slant height $l= String.raw13\text{ cm}$. Find the <em>total surface area</em> (excluding the base of the cylinder) and the <em>total volume</em>.</p>
  <ol>
    <li>Compute cylinder lateral area: $S_{\text{cyl,lat}} = String.raw2\pi r h = String.raw2\pi(5)(12)= String.raw120\pi\text{ cm}^{2}$.</li>
    <li>Compute cone lateral area: $S_{\text{cone,lat}} = String.raw\pi r l = String.raw\pi(5)(13)= String.raw65\pi\text{ cm}^{2}$.</li>
    <li>Top circular face of cylinder is shared with cone base, so it is not counted separately.</li>
    <li>Thus total surface area (excluding cylinder base) $S_{\text{total}} = String.raw120\pi + 65\pi = String.raw185\pi\text{ cm}^{2}\approx 581.0\text{ cm}^{2}$.</li>
    <li>Volume of cylinder: $V_{\text{cyl}} = String.raw\pi r^{2} h = String.raw\pi(5^{2})(12)= String.raw300\pi\text{ cm}^{3}$.</li>
    <li>Height of cone $h_{\text{cone}}$ from $l^{2}= String.rawr^{2}+h_{\text{cone}}^{2}$ ⇒ $h_{\text{cone}}= String.raw\sqrt{13^{2}-5^{2}}= String.raw\sqrt{144}= String.raw12\text{ cm}$.</li>
    <li>Volume of cone: $V_{\text{cone}} = String.raw\dfrac{1}{3}\pi r^{2} h_{\text{cone}} = String.raw\dfrac{1}{3}\pi(25)(12)= String.raw100\pi\text{ cm}^{3}$.</li>
    <li>Total volume $V_{\text{total}} = String.raw300\pi + 100\pi = String.raw400\pi\text{ cm}^{3}\approx 1256.6\text{ cm}^{3}$.</li>
  </ol>

  <h5><strong>Example 2 – Volume of a Frustum Using Direct Integration</strong></h5>
  <p><strong>Problem:</strong> A frustum of a right circular cone has lower radius $r_{1}= String.raw8\text{ cm}$, upper radius $r_{2}= String.raw3\text{ cm}$, and vertical height $h= String.raw10\text{ cm}$. Verify the standard formula by integrating the volume of infinitesimal disks.</p>
  <ol>
    <li>Radius varies linearly with $y$: $r(y)= String.rawr_{1}+\left(\dfrac{r_{2}-r_{1}}{h}\right) y = String.raw8 - \dfrac{5}{10}y = String.raw8-0.5y$.</li>
    <li>Area of a thin disk at height $y$: $A(y)= String.raw\pi r^{2}(y)= String.raw\pi(8-0.5y)^{2}$.</li>
    <li>Volume element: $dV= String.rawA(y)dy = String.raw\pi(8-0.5y)^{2}dy$.</li>
    <li>Integrate from $y= String.raw0$ to $y= String.raw10$:</li>
    $$V= String.raw\pi\int_{0}^{10}(8-0.5y)^{2}dy
      = String.raw\pi\int_{0}^{10}\bigl(64-8y+0.25y^{2}\bigr)dy$$
    $$= String.raw\pi\left[64y-4y^{2}+\frac{0.25}{3}y^{3}\right]_{0}^{10}
      = String.raw\pi\left(640-400+\frac{250}{3}\right)$$
    $$= String.raw\pi\left(240+\frac{250}{3}\right)
      = String.raw\pi\left(\frac{720+250}{3}\right)
      = String.raw\frac{970}{3}\pi\text{ cm}^{3}.$$
    <li>Now apply the standard formula:
      $$V_{\text{std}} = String.raw\frac{1}{3}\pi h\left(r_{1}^{2}+r_{1}r_{2}+r_{2}^{2}\right)
        = String.raw\frac{1}{3}\pi (10)(8^{2}+8\cdot3+3^{2})$$
      $$= String.raw\frac{10\pi}{3}(64+24+9)= String.raw\frac{10\pi}{3}(97)= String.raw\frac{970}{3}\pi\text{ cm}^{3}.$$
    <li>Both methods give identical result, confirming the formula’s correctness.</li>
  </ol>

  <h4><strong>Common Mistakes</strong></h4>
  <ul>
    <li><strong>Omitting the base area in total surface area calculations.</strong> Students often add only the lateral area, forgetting that many solids (e.g., cones, pyramids) require the base (or bases) to be counted unless explicitly excluded.</li>
    <li><strong>Using the slant height $l$ in place of the vertical height $h$ for volume.</strong> Volume depends on $h$, not $l$; mixing them leads to a $3/2$ factor error for cones and pyramids.</li>
    <li><strong>Incorrect sign in the linear radius relation for a frustum.</strong> The radius should decrease (or increase) linearly; writing $r(y)= String.rawr_{1}+\frac{r_{2}-r_{1}}{h}y$ without checking direction reverses the geometry.</li>
    <li><strong>Assuming the surface area of an ellipsoid is $4\pi a^{2}$.</strong> That expression holds only for a sphere ($a= String.rawb= String.rawc$). For a general ellipsoid one must use the approximate formula or elliptic integrals; using the sphere formula underestimates the area.</li>
  </ul>

  <h4><strong>Shortcuts & Tricks (Time‑Saving for Competitive Exams)</strong></h4>
  <ol>
    <li><strong>Memorise the “core” formulas</strong> for the five most frequent solids: cube, cuboid, sphere, cylinder, cone. Their structures (e.g., $4\pi r^{2}$, $\frac{1}{3}\pi r^{2}h$) are easy to recall.</li>
    <li><strong>Use the “half‑sphere” trick.</strong> When a problem involves a hemisphere sitting on a flat base, remember that its total SA = String.raw$3\pi r^{2}$ (curved part $2\pi r^{2}$ + base $\pi r^{2}$). This avoids recomputing each component.</li>
    <li><strong>Apply proportionality for similar solids.</strong> If two similar cones have radii $r_{1}, r_{2}$ and heights $h_{1}, h_{2}$, then $V\propto r^{2}h$. Hence $V_{2}= String.rawV_{1}\left(\frac{r_{2}}{r_{1}}\right)^{2}\left(\frac{h_{2}}{h_{1}}\right)$. This shortcut bypasses fresh integration.</li>
    <li><strong>Remember the “cylinder‑cone” composite shortcut.</strong> For a solid formed by a cylinder topped by a cone with equal radii, total volume $= String.raw\pi r^{2}(h_{\text{cyl}}+\frac{1}{3}h_{\text{cone}})$. Quick mental addition saves seconds.</li>
    <li><strong>For frustums, use the “average radius” shortcut.</strong> Approximate volume as $V\approx \pi \bar{r}^{2}h$ where $\bar{r}= String.raw\frac{r_{1}+r_{2}}{2}$. This yields a value within 5 % and is acceptable when only a rough estimate is needed under time pressure.</li>
    <li><strong>Exploit symmetry.</strong> When a problem asks for the surface area of a solid formed by rotating a simple shape about an axis, use the formula $S = String.raw2\pi \int r\, ds$ (Pappus’ theorem) rather than summing individual faces.</li>
    <li><strong>Convert mixed units early.</strong> If height is given in meters and radius in centimeters, convert to a common unit before plugging into formulas to avoid arithmetic errors.</li>
    <li><strong>Check for “right‑angle” conditions.</strong> Many volume problems become trivial once you recognise a right‑angled triangle (e.g., $l^{2}= String.rawr^{2}+h^{2}$) hidden in the data.</li>
  </ol>

  <h4><strong>Additional Relationships Worth Knowing</strong></h4>
  <ul>
    <li><strong>Ratio of Surface Area to Volume for a sphere:</strong> $\displaystyle \frac{S}{V}= String.raw\frac{3}{r}$, illustrating that as $r$ increases, volume grows faster than surface area.</li>
    <li><strong>Isoperimetric Inequality:</strong> For any solid of given volume $V$, the sphere has the minimum possible surface area $S_{\min}= String.raw(36\pi)^{1/3}V^{2/3}$. This concept often appears in proof‑type questions.</li>
    <li><strong>Surface Area of a Right Prism:</strong> $S = String.raw2B + Ph$, where $P$ is the perimeter of the base. This generalises the cylinder formula.</li>
    <li><strong>Volume of a Right Pyramid:</strong> $V = String.raw\frac{1}{3}Bh$, a direct analogue of the cone formula.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>For any right circular cone, $l = String.raw\sqrt{r^{2}+h^{2}}$ – never substitute $l$ for $h$ in volume.</li>
      <li>Sphere SA $= String.raw4\pi r^{2}$ and Volume $= String.raw\frac{4}{3}\pi r^{3}$; the ratio $S/V = String.raw3/r$ is useful for comparative questions.</li>
      <li>Surface area of a cylinder = String.raw$2\pi r(r+h)$ – remember to add both ends ($2\pi r^{2}$) and the curved part ($2\pi r h$).</li>
      <li>A cone’s total SA (including base) = String.raw$\pi r(r+l)$; a frustum’s SA uses $l = String.raw\sqrt{(r_{1}-r_{2})^{2}+h^{2}}$.</li>
      <li>Volume of a frustum = String.raw$\frac{1}{3}\pi h(r_{1}^{2}+r_{1}r_{2}+r_{2}^{2})$ – memorize the symmetric form.</li>
      <li>In a composite solid of a cylinder topped by a cone with equal radius, total volume $= String.raw\pi r^{2}\left(h_{\text{cyl}}+\frac{1}{3}h_{\text{cone}}\right)$.</li>
      <li>For a regular pyramid, lateral SA $= String.raw\frac{1}{2}Pl$, where $P$ is the base perimeter.</li>
      <li>Ellipsoid volume $= String.raw\frac{4}{3}\pi abc$ (semi‑axes $a,b,c$); surface area requires approximation.</li>
      <li>When a problem states “inscribed sphere in a cube of side $a$”, radius $r = String.raw\frac{a}{2}$, leading to SA $= String.raw\pi a^{2}$ and Volume $= String.raw\frac{\pi a^{3}}{6}$.</li>
      <li>Always check if the base of a solid is omitted in the question – many errors arise from counting an extra base.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["percentages-profit-loss"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Percentages, Profit & Loss
  </h3>

  <h4>Fundamental Concepts & Definitions</h4>
  <ul>
    <li><strong>[[Percentage]]</strong> – a ratio expressed per hundred, denoted by the symbol <strong>%</strong>. Mathematically, <strong>$\displaystyle \text{Percentage}= String.raw\frac{\text{Part}}{\text{Whole}}\times 100$</strong>.</li>
    <li><strong>[[Cost Price (CP)]]</strong> – the amount paid to acquire a product or service.</li>
    <li><strong>[[Selling Price (SP)]]</strong> – the amount for which the product is sold to the customer.</li>
    <li><strong>[[Profit]]</strong> – the surplus when <strong>SP > CP</strong>, quantified as <strong>$\displaystyle \text{Profit}= String.raw\text{SP}-\text{CP}$</strong>.</li>
    <li><strong>[[Loss]]</strong> – the deficit when <strong>CP > SP</strong>, quantified as <strong>$\displaystyle \text{Loss}= String.raw\text{CP}-\text{SP}$</strong>.</li>
    <li><strong>[[Discount]]</strong> – a reduction on the marked price (MP) offered to the buyer, usually expressed as a percentage of MP.</li>
    <li><strong>[[Markup]]</strong> – the amount added to CP to arrive at MP, expressed as a % of CP.</li>
    <li><strong>[[Margin]]</strong> – the profit expressed as a % of SP (or sometimes of MP), useful for comparing profitability across different price levels.</li>
    <li><strong>[[Break‑even point]]</strong> – the situation where <strong>Profit = String.raw0</strong>, i.e., <strong>SP = String.rawCP</strong>.</li>
  </ul>

  <h4>Core Formulas with Detailed Variable Legends</h4>
  <ol>
    <li><strong>Percentage Change</strong> (increase or decrease):
      <br><strong>$\displaystyle \text{Percentage Change}= String.raw\frac{\text{New Value}-\text{Old Value}}{\text{Old Value}}\times 100$</strong>
      <br>where <strong>New Value</strong> is the final quantity and <strong>Old Value</strong> is the initial quantity.</li>
    <li><strong>Profit % on CP</strong>:
      <br><strong>$\displaystyle \text{Profit \% on CP}= String.raw\frac{\text{Profit}}{\text{CP}}\times 100$</strong></li>
    <li><strong>Profit % on SP</strong>:
      <br><strong>$\displaystyle \text{Profit \% on SP}= String.raw\frac{\text{Profit}}{\text{SP}}\times 100$</strong></li>
    <li><strong>Loss % on CP</strong>:
      <br><strong>$\displaystyle \text{Loss \% on CP}= String.raw\frac{\text{Loss}}{\text{CP}}\times 100$</strong></li>
    <li><strong>Loss % on SP</strong>:
      <br><strong>$\displaystyle \text{Loss \% on SP}= String.raw\frac{\text{Loss}}{\text{SP}}\times 100$</strong></li>
    <li><strong>Discount % on MP</strong>:
      <br><strong>$\displaystyle \text{Discount \%}= String.raw\frac{\text{Discount}}{\text{MP}}\times 100$</strong></li>
    <li><strong>Markup % on CP</strong>:
      <br><strong>$\displaystyle \text{Markup \%}= String.raw\frac{\text{MP}-\text{CP}}{\text{CP}}\times 100$</strong></li>
    <li><strong>Compound Percentage (Successive Changes)</strong>:
      <br><strong>$\displaystyle \text{Effective \%}= String.raw\left(1+\frac{p_1}{100}\right)\left(1+\frac{p_2}{100}\right)\dots\left(1+\frac{p_n}{100}\right)-1\;\times 100$</strong>
      <br>where each <strong>$p_i$</strong> is an individual percentage change (positive for increase, negative for decrease).</li>
  </ol>

  <h4>Derivation of the Profit % on CP Formula</h4>
  <p>Starting from the definition of profit:</p>
  <p><strong>$\displaystyle \text{Profit}= String.raw\text{SP}-\text{CP}$</strong></p>
  <p>Profit % on CP is defined as profit per unit of cost price multiplied by 100:</p>
  <p><strong>$\displaystyle \text{Profit \% on CP}= String.raw\frac{\text{Profit}}{\text{CP}}\times 100$</strong></p>
  <p>Substituting the expression for profit yields:</p>
  <p><strong>$\displaystyle \text{Profit \% on CP}= String.raw\frac{\text{SP}-\text{CP}}{\text{CP}}\times 100
   = String.raw\left(\frac{\text{SP}}{\text{CP}}-1\right)\times 100$</strong></p>
  <p>This derivation shows that if the ratio <strong>SP/CP</strong> is known, the profit % follows directly.</p>

  <h4>Successive Percentage Changes – A Proof from First Principles</h4>
  <p>Assume an initial amount <strong>$A_0$</strong>. After a first change of <strong>$p_1$%</strong> (increase if $p_1>0$, decrease if $p_1<0$), the new amount becomes:</p>
  <p><strong>$\displaystyle A_1 = String.rawA_0\left(1+\frac{p_1}{100}\right)$</strong></p>
  <p>Applying a second change <strong>$p_2$%</strong> on $A_1$ gives:</p>
  <p><strong>$\displaystyle A_2 = String.rawA_1\left(1+\frac{p_2}{100}\right)= String.rawA_0\left(1+\frac{p_1}{100}\right)\left(1+\frac{p_2}{100}\right)$</strong></p>
  <p>Continuing this process for $n$ changes, the final amount $A_n$ is:</p>
  <p><strong>$\displaystyle A_n = String.rawA_0\prod_{i= String.raw1}^{n}\left(1+\frac{p_i}{100}\right)$</strong></p>
  <p>Hence, the overall effective percentage change $P_{\text{eff}}$ satisfies:</p>
  <p><strong>$\displaystyle 1+\frac{P_{\text{eff}}}{100}= String.raw\prod_{i= String.raw1}^{n}\left(1+\frac{p_i}{100}\right)$</strong></p>
  <p>Solving for $P_{\text{eff}}$ gives the formula listed earlier.</p>

  <h4>Practical Applications in Competitive Exams</h4>
  <ul>
    <li>Calculating <strong>GST (Goods & Services Tax)</strong> where the tax is a % of the transaction value.</li>
    <li>Determining <strong>CAGR (Compound Annual Growth Rate)</strong> using successive percentage changes over multiple years.</li>
    <li>Analyzing <strong>discounted cash flow</strong> where successive discounts are applied to a price.</li>
    <li>Resolving questions that mix <strong>profit</strong> and <strong>discount</strong> in a single transaction (e.g., “A trader gives a 10% discount on MP and still makes a 5% profit on CP”).</li>
  </ul>

  <h4>Comparison Table – Profit vs. Loss vs. Break‑Even</h4>
  <table border= String.raw"1" cellpadding= String.raw"6" cellspacing= String.raw"0" style= String.raw"border-collapse: collapse; width:100%; margin-top:12px;">
    <tr style= String.raw"background:#222; color:#fff;">
      <th>Metric</th>
      <th>Profit Scenario</th>
      <th>Loss Scenario</th>
      <th>Break‑Even</th>
    </tr>
    <tr>
      <td><strong>Condition</strong></td>
      <td><strong>SP > CP</strong></td>
      <td><strong>CP > SP</strong></td>
      <td><strong>SP = String.rawCP</strong></td>
    </tr>
    <tr>
      <td><strong>Profit % on CP</strong></td>
      <td><strong>$\displaystyle \frac{SP-CP}{CP}\times100$</strong></td>
      <td><strong>—</strong></td>
      <td><strong>0%</strong></td>
    </tr>
    <tr>
      <td><strong>Loss % on CP</strong></td>
      <td><strong>—</strong></td>
      <td><strong>$\displaystyle \frac{CP-SP}{CP}\times100$</strong></td>
      <td><strong>0%</strong></td>
    </tr>
    <tr>
      <td><strong>Margin (Profit % on SP)</strong></td>
      <td><strong>$\displaystyle \frac{SP-CP}{SP}\times100$</strong></td>
      <td><strong>—</strong></td>
      <td><strong>0%</strong></td>
    </tr>
  </table>

  <div class= String.raw"important-box" style= String.raw"border-left:4px solid var(--accent); background:#f9f9f9; padding:10px; margin-top:16px;">
    <strong>Critical Distinction:</strong> <em>Profit % is always computed on CP, whereas Margin % is computed on SP. Confusing the two leads to systematic over‑ or under‑estimation of profitability.</em>
  </div>

  <h4>Common Mistakes</h4>
  <ul>
    <li><strong>Mixing up CP and SP when calculating percentages</strong> – students often use SP in the denominator for profit % (should be CP).</li>
    <li><strong>Ignoring the sign of successive percentage changes</strong> – treating a 20% decrease as +20% leads to inflated results.</li>
    <li><strong>Applying discount % directly to CP instead of MP</strong> – discount is always a % of the marked price.</li>
    <li><strong>Forgetting to convert percentages to decimals before multiplication</strong> – e.g., using 20 instead of 0.20.</li>
  </ul>

  <h4>Shortcuts & Tricks for Speed</h4>
  <ol>
    <li><strong>Use the “100 – x” rule</strong> for quick calculation of the complement: if an item is sold at a <strong>x% profit on CP</strong>, the selling price is <strong>$(100+x)$% of CP.</strong></li>
    <li><strong>Cross‑multiplication shortcut</strong> – to find SP when CP and profit % are known: <strong>SP = String.rawCP \times \frac{100+ \text{Profit%}}{100}</strong>.</li>
    <li><strong>Reverse‑percentage trick</strong> – to find CP from SP and profit % on SP: <strong>CP = String.rawSP \times \frac{100}{100+ \text{Profit% on SP}}</strong>.</li>
    <li><strong>Successive discount shortcut</strong> – instead of multiplying two fractions, compute the effective discount as:
      <br><strong>$\displaystyle \text{Effective Discount}= String.rawp_1 + p_2 - \frac{p_1 p_2}{100}$</strong></li>
    <li><strong>“Rule of 72” approximation</strong> – for estimating the number of periods required to double an amount at a constant % rate: <strong>Periods ≈ 72 / \text{Rate %}</strong>. Useful in CAGR problems.</li>
  </ol>

  <h4>Worked Example 1 – Profit % on CP with a Percentage Increase</h4>
  <p><strong>Problem:</strong> A dealer buys a gadget for <strong>₹ 4,500</strong> (CP). He sells it at a price that is <strong>25% higher</strong> than the purchase price. Find the <strong>selling price (SP)</strong> and the <strong>profit % on CP</strong>.</p>
  <ol>
    <li>Identify CP = String.raw<strong>₹ 4,500</strong>, increase = String.raw<strong>25%</strong>.</li>
    <li>Use the “100 + x” rule:
      <br><strong>$\displaystyle \text{SP}= String.raw\text{CP}\times\frac{100+25}{100}= String.raw\text{CP}\times1.25$</strong></li>
    <li>Compute:
      <br><strong>$\displaystyle \text{SP}= String.raw4,500\times1.25= String.raw5,625$</strong></li>
    <li>Profit = String.rawSP – CP = String.raw<strong>5,625 – 4,500 = String.raw₹ 1,125</strong>.</li>
    <li>Profit % on CP:
      <br><strong>$\displaystyle \frac{1,125}{4,500}\times100 = String.raw25\%$</strong></li>
  </ol>
  <p>Thus, the dealer makes a <strong>25% profit on CP</strong>, and the SP is <strong>₹ 5,625</strong>.</p>

  <h4>Worked Example 2 – Successive Discounts with Profit</h4>
  <p><strong>Problem:</strong> An article has a marked price (MP) of <strong>₹ 2,000</strong>. The seller offers a <strong>10% discount</strong> followed by an additional <strong>5% discount** on the reduced price. Even after these discounts, the seller makes a <strong>12% profit on CP**. Determine the <strong>cost price (CP)</strong>.</p>
  <ol>
    <li>First discount of 10% reduces MP to:
      <br><strong>$\displaystyle \text{Price}_1 = String.raw2,000\times(1-0.10)= String.raw2,000\times0.90= String.raw₹ 1,800$</strong></li>
    <li>Second discount of 5% on ₹ 1,800 gives:
      <br><strong>$\displaystyle \text{SP}= String.raw1,800\times(1-0.05)= String.raw1,800\times0.95= String.raw₹ 1,710$</strong></li>
    <li>We know SP yields a 12% profit on CP, i.e.,
      <br><strong>$\displaystyle \text{SP}= String.raw\text{CP}\times(1+0.12)$</strong></li>
    <li>Rearrange to find CP:
      <br><strong>$\displaystyle \text{CP}= String.raw\frac{\text{SP}}{1.12}= String.raw\frac{1,710}{1.12}= String.raw₹ 1,527.68$</strong></li>
    <li>Rounded to the nearest rupee, CP ≈ <strong>₹ 1,528</strong>.</li>
  </ol>
  <p>This example demonstrates the utility of the successive discount shortcut and the reverse‑percentage trick.</p>

  <h4>Advanced Edge Cases</h4>
  <ul>
    <li><strong>Negative profit (loss) expressed as a positive %</strong> – Always state “loss of X%” rather than “‑X% profit”.</li>
    <li><strong>Zero‑percent change</strong> – When the new value equals the old value, the percentage change is precisely 0%; this is a common trap in “no‑change” questions.</li>
    <li><strong>Mixed increase‑decrease sequences</strong> – The order matters; applying a 20% increase followed by a 10% decrease yields a different result than the reverse.</li>
    <li><strong>Profit on SP vs. CP in multi‑item bundles</strong> – For bundles, compute aggregate CP and SP before applying percentage formulas.</li>
  </ul>

  <h4>Historical Context</h4>
  <p>The concept of profit and loss dates back to ancient trade routes where merchants used simple ratios to ensure survival. The modern percentage notation was standardized in the 17<sup>th</sup> century, facilitating the rapid calculations required in the industrial era. Indian commercial arithmetic, especially in the context of the <em>paisa‑rupee</em> system, emphasized mental shortcuts, many of which survive today as the “rule of 100” used in competitive exams.</p>

  <h4>Real‑World Applications</h4>
  <ul>
    <li>Retail pricing strategies – determining optimal discount levels to achieve target profit margins.</li>
    <li>Financial analysis – evaluating company performance using profit % on CP (gross profit margin) and profit % on SP (net margin).</li>
    <li>Taxation – calculating GST as a percentage of the transaction value, often compounded with state‑level taxes.</li>
    <li>Investment – assessing returns using CAGR, which is fundamentally a compound percentage problem.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>Profit % on CP = String.raw(SP – CP) ÷ CP × 100; always use CP in the denominator.</li>
      <li>Effective discount for two successive discounts $p_1$% and $p_2$% = String.raw$p_1 + p_2 - \frac{p_1p_2}{100}$.</li>
      <li>If an item is sold at a $x\%$ profit on CP, SP = String.rawCP × $(100+x)/100$.</li>
      <li>When given profit % on SP, CP = String.rawSP × $100/(100+ \text{profit%})$.</li>
      <li>For a $y\%$ loss on CP, the selling price = String.rawCP × $(100-y)/100$.</li>
      <li>Compound percentage change = String.raw$\displaystyle \left(\prod (1+\frac{p_i}{100})-1\right)\times100$.</li>
      <li>Rule of 72: Approximate doubling period ≈ $72/$Rate % (useful for CAGR problems).</li>
      <li>Mark‑up % on CP = String.raw(MP – CP) ÷ CP × 100; Discount % is always on MP, not on CP.</li>
      <li>Break‑even occurs when SP = String.rawCP; profit and loss become zero.</li>
      <li>In mixed profit‑discount questions, first apply discount to MP, then equate resulting SP to CP × $(1+$Profit%/100)$.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["ratios-averages"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Ratios, Proportions & Averages
  </h3>

  <h4 style= String.raw"color: var(--accent); margin-bottom: 8px; border-bottom: 1px solid var(--border); padding-bottom: 4px; font-weight: 500;">
    Introduction to Ratios
  </h4>

  A **ratio** is a way of comparing two quantities by division, and it is often denoted by the symbol $:$, which is read as "to". For example, if we have $a$ units of one quantity and $b$ units of another quantity, then the ratio of the first quantity to the second quantity is $a:b$ or $\frac{a}{b}$. The ratio $\frac{a}{b}$ can be expressed as a **fraction**, which has a **numerator** $a$ and a **denominator** $b$. The numerator represents the number of parts of the whole, while the denominator represents the total number of parts.

  For a ratio $\frac{a}{b}$, the following conditions must be met:
  - $a$ and $b$ must be non-zero.
  - $a$ and $b$ must have the same units.

  The ratio $\frac{a}{b}$ can be **simplified** by dividing both $a$ and $b$ by their greatest common divisor (GCD), which is the largest positive integer that divides both $a$ and $b$ without leaving a remainder.

  <h4 style= String.raw"color: var(--accent); margin-bottom: 8px; border-bottom: 1px solid var(--border); padding-bottom: 4px; font-weight: 500;">
    Introduction to Proportions
  </h4>

  A **proportion** is a statement that two ratios are equal, and it is often denoted by the symbol $= String.raw$. For example, if we have $\frac{a}{b} = String.raw\frac{c}{d}$, then we say that the ratios $\frac{a}{b}$ and $\frac{c}{d}$ are in proportion. The proportion $\frac{a}{b} = String.raw\frac{c}{d}$ can be expressed as $ad = String.rawbc$, which is known as the **cross-multiplication** property.

  For a proportion $\frac{a}{b} = String.raw\frac{c}{d}$, the following conditions must be met:
  - $a$, $b$, $c$, and $d$ must be non-zero.
  - $a$, $b$, $c$, and $d$ must have the same units.

  The proportion $\frac{a}{b} = String.raw\frac{c}{d}$ can be used to solve for an unknown quantity. For example, if we know that $\frac{a}{b} = String.raw\frac{c}{d}$ and we want to solve for $c$, then we can use the cross-multiplication property to get $c = String.raw\frac{ad}{b}$.

  <h4 style= String.raw"color: var(--accent); margin-bottom: 8px; border-bottom: 1px solid var(--border); padding-bottom: 4px; font-weight: 500;">
    Introduction to Averages
  </h4>

  An **average** is a value that represents the middle of a set of numbers, and it is often denoted by the symbol $\bar{x}$. For example, if we have a set of numbers $\{x_1, x_2, \ldots, x_n\}$, then the average of the set is $\bar{x} = String.raw\frac{x_1 + x_2 + \cdots + x_n}{n}$.

  The average $\bar{x}$ can be calculated using the following formula:
  $$\bar{x} = String.raw\frac{\sum_{i= String.raw1}^{n} x_i}{n}$$
  where $\sum_{i= String.raw1}^{n} x_i$ is the sum of the numbers in the set and $n$ is the number of numbers in the set.

  For an average $\bar{x}$, the following conditions must be met:
  - The numbers in the set must be non-zero.
  - The numbers in the set must have the same units.

  <h4 style= String.raw"color: var(--accent); margin-bottom: 8px; border-bottom: 1px solid var(--border); padding-bottom: 4px; font-weight: 500;">
    Types of Averages
  </h4>

  There are several types of averages, including:
  <ul style= String.raw"margin-top: 8px;">
    <li style= String.raw"margin-bottom: 8px;">**Arithmetic mean**: The arithmetic mean is the most common type of average, and it is calculated using the formula $\bar{x} = String.raw\frac{\sum_{i= String.raw1}^{n} x_i}{n}$.</li>
    <li style= String.raw"margin-bottom: 8px;">**Geometric mean**: The geometric mean is used to calculate the average of a set of numbers that have a large range of values, and it is calculated using the formula $\bar{x} = String.raw\sqrt[n]{x_1 \cdot x_2 \cdots x_n}$.</li>
    <li style= String.raw"margin-bottom: 8px;">**Harmonic mean**: The harmonic mean is used to calculate the average of a set of numbers that have a large range of values, and it is calculated using the formula $\bar{x} = String.raw\frac{n}{\sum_{i= String.raw1}^{n} \frac{1}{x_i}}$.</li>
    <li style= String.raw"margin-bottom: 8px;">**Median**: The median is the middle value of a set of numbers when the numbers are arranged in order, and it is calculated using the formula $\bar{x} = String.rawx_{\frac{n+1}{2}}$ for an odd number of numbers and $\bar{x} = String.raw\frac{x_{\frac{n}{2}} + x_{\frac{n}{2} + 1}}{2}$ for an even number of numbers.</li>
  </ul>

  <h4 style= String.raw"color: var(--accent); margin-bottom: 8px; border-bottom: 1px solid var(--border); padding-bottom: 4px; font-weight: 500;">
    Worked Examples
  </h4>

  <div style= String.raw"margin-bottom: 16px;">
    **Example 1**: If the ratio of boys to girls in a class is $3:2$, and there are $15$ boys in the class, how many girls are in the class?
  </div>

  **Solution**: Let $x$ be the number of girls in the class. Since the ratio of boys to girls is $3:2$, we can set up the proportion $\frac{3}{2} = String.raw\frac{15}{x}$. Using the cross-multiplication property, we get $3x = String.raw2 \cdot 15$, which simplifies to $3x = String.raw30$. Dividing both sides by $3$, we get $x = String.raw10$. Therefore, there are $10$ girls in the class.

  <div style= String.raw"margin-bottom: 16px;">
    **Example 2**: If the average of a set of numbers is $10$, and the set contains $5$ numbers, what is the sum of the numbers in the set?
  </div>

  **Solution**: Let $x_1, x_2, \ldots, x_5$ be the numbers in the set. Since the average of the set is $10$, we can set up the equation $\frac{x_1 + x_2 + \cdots + x_5}{5} = String.raw10$. Multiplying both sides by $5$, we get $x_1 + x_2 + \cdots + x_5 = String.raw50$. Therefore, the sum of the numbers in the set is $50$.

  <h4 style= String.raw"color: var(--accent); margin-bottom: 8px; border-bottom: 1px solid var(--border); padding-bottom: 4px; font-weight: 500;">
    Common Mistakes
  </h4>

  The following are some common mistakes that students make when working with ratios, proportions, and averages:
  <ul style= String.raw"margin-top: 8px;">
    <li style= String.raw"margin-bottom: 8px;">**Not simplifying ratios**: Students often forget to simplify ratios by dividing both the numerator and the denominator by their greatest common divisor.</li>
    <li style= String.raw"margin-bottom: 8px;">**Not using the cross-multiplication property**: Students often forget to use the cross-multiplication property when working with proportions.</li>
    <li style= String.raw"margin-bottom: 8px;">**Not calculating the average correctly**: Students often forget to calculate the average correctly by dividing the sum of the numbers by the number of numbers.</li>
    <li style= String.raw"margin-bottom: 8px;">**Not using the correct type of average**: Students often forget to use the correct type of average, such as the arithmetic mean, geometric mean, or harmonic mean, depending on the context of the problem.</li>
  </ul>

  <h4 style= String.raw"color: var(--accent); margin-bottom: 8px; border-bottom: 1px solid var(--border); padding-bottom: 4px; font-weight: 500;">
    Shortcuts & Tricks
  </h4>

  The following are some shortcuts and tricks that can be used when working with ratios, proportions, and averages:
  <ul style= String.raw"margin-top: 8px;">
    <li style= String.raw"margin-bottom: 8px;">**Using the ratio of ratios**: When working with proportions, it is often helpful to use the ratio of ratios, which is the ratio of the two ratios being compared.</li>
    <li style= String.raw"margin-bottom: 8px;">**Using the average of averages**: When working with averages, it is often helpful to use the average of averages, which is the average of the averages of two or more sets of numbers.</li>
    <li style= String.raw"margin-bottom: 8px;">**Using the formula for the average**: When working with averages, it is often helpful to use the formula for the average, which is $\bar{x} = String.raw\frac{\sum_{i= String.raw1}^{n} x_i}{n}$.</li>
    <li style= String.raw"margin-bottom: 8px;">**Using the concept of equivalent ratios**: When working with ratios, it is often helpful to use the concept of equivalent ratios, which are ratios that have the same value but are expressed differently.</li>
  </ul>

  <div class= String.raw"important-box" style= String.raw"background: rgba(255,255,255,0.1); border: 1px solid var(--border); padding: 12px; margin-bottom: 16px; border-radius: 6px;">
    <strong style= String.raw"color: var(--accent);">Important Distinction</strong>
    <p style= String.raw"margin-top: 8px;">It is essential to distinguish between the concepts of ratio, proportion, and average, as they are often used interchangeably but have different meanings.</p>
  </div>

  The concept of [[ratio]] is closely related to the concept of [[proportion]], which is a statement that two ratios are equal. The concept of [[average]] is a value that represents the middle of a set of numbers. The [[arithmetic mean]] is the most common type of average, which is calculated by summing all the numbers in a set and dividing by the number of items in the set. The [[geometric mean]] is used to calculate the average of a set of numbers that have a large range of values. The [[harmonic mean]] is used to calculate the average of a set of numbers that have a large range of values.

  The formula for the average is $\bar{x} = String.raw\frac{\sum_{i= String.raw1}^{n} x_i}{n}$, where $\sum_{i= String.raw1}^{n} x_i$ is the sum of the numbers in the set and $n$ is the number of numbers in the set. The formula for the [[median]] is $\bar{x} = String.rawx_{\frac{n+1}{2}}$ for an odd number of numbers and $\bar{x} = String.raw\frac{x_{\frac{n}{2}} + x_{\frac{n}{2} + 1}}{2}$ for an even number of numbers.

  <div class= String.raw"important-box" style= String.raw"background: rgba(255,255,255,0.1); border: 1px solid var(--border); padding: 12px; margin-bottom: 16px; border-radius: 6px;">
    <strong style= String.raw"color: var(--accent);">Real-World Applications</strong>
    <p style= String.raw"margin-top: 8px;">The concepts of ratio, proportion, and average have numerous real-world applications, including [[business]], [[economics]], [[engineering]], and [[statistics]].</p>
  </div>

  The concept of ratio is used in [[business]] to compare the performance of different companies or to determine the ratio of debt to equity. The concept of proportion is used in [[economics]] to compare the prices of different goods or to determine the proportion of a country's GDP that is spent on different sectors. The concept of average is used in [[engineering]] to calculate the average stress on a material or to determine the average flow rate of a fluid.

  <div style= String.raw"margin-bottom: 16px;">
    The following table summarizes the different types of averages:
    <table style= String.raw"margin-top: 8px; border-collapse: collapse; width: 100%;">
      <tr style= String.raw"background: rgba(255,255,255,0.1); border-bottom: 1px solid var(--border);">
        <th style= String.raw"padding: 8px; border-right: 1px solid var(--border);">Type of Average</th>
        <th style= String.raw"padding: 8px; border-right: 1px solid var(--border);">Formula</th>
        <th style= String.raw"padding: 8px;">Description</th>
      </tr>
      <tr style= String.raw"border-bottom: 1px solid var(--border);">
        <td style= String.raw"padding: 8px; border-right: 1px solid var(--border);">Arithmetic Mean</td>
        <td style= String.raw"padding: 8px; border-right: 1px solid var(--border);">$$\bar{x} = String.raw\frac{\sum_{i= String.raw1}^{n} x_i}{n}$$</td>
        <td style= String.raw"padding: 8px;">The most common type of average, calculated by summing all the numbers in a set and dividing by the number of items in the set.</td>
      </tr>
      <tr style= String.raw"border-bottom: 1px solid var(--border);">
        <td style= String.raw"padding: 8px; border-right: 1px solid var(--border);">Geometric Mean</td>
        <td style= String.raw"padding: 8px; border-right: 1px solid var(--border);">$$\bar{x} = String.raw\sqrt[n]{x_1 \cdot x_2 \cdots x_n}$$</td>
        <td style= String.raw"padding: 8px;">Used to calculate the average of a set of numbers that have a large range of values.</td>
      </tr>
      <tr style= String.raw"border-bottom: 1px solid var(--border);">
        <td style= String.raw"padding: 8px; border-right: 1px solid var(--border);">Harmonic Mean</td>
        <td style= String.raw"padding: 8px; border-right: 1px solid var(--border);">$$\bar{x} = String.raw\frac{n}{\sum_{i= String.raw1}^{n} \frac{1}{x_i}}$$</td>
        <td style= String.raw"padding: 8px;">Used to calculate the average of a set of numbers that have a large range of values.</td>
      </tr>
      <tr style= String.raw"border-bottom: 1px solid var(--border);">
        <td style= String.raw"padding: 8px; border-right: 1px solid var(--border);">Median</td>
        <td style= String.raw"padding: 8px; border-right: 1px solid var(--border);">$$\bar{x} = String.rawx_{\frac{n+1}{2}}$$ for an odd number of numbers, $$\bar{x} = String.raw\frac{x_{\frac{n}{2}} + x_{\frac{n}{2} + 1}}{2}$$ for an even number of numbers</td>
        <td style= String.raw"padding: 8px;">The middle value of a set of numbers when the numbers are arranged in order.</td>
      </tr>
    </table>
  </div>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li style= String.raw"margin-bottom: 8px;">The ratio of two quantities is a way of comparing the two quantities by division.</li>
      <li style= String.raw"margin-bottom: 8px;">The proportion $\frac{a}{b} = String.raw\frac{c}{d}$ can be expressed as $ad = String.rawbc$, which is known as the cross-multiplication property.</li>
      <li style= String.raw"margin-bottom: 8px;">The average of a set of numbers is a value that represents the middle of the set.</li>
      <li style= String.raw"margin-bottom: 8px;">The arithmetic mean is the most common type of average, which is calculated by summing all the numbers in a set and dividing by the number of items in the set.</li>
      <li style= String.raw"margin-bottom: 8px;">The geometric mean is used to calculate the average of a set of numbers that have a large range of values.</li>
      <li style= String.raw"margin-bottom: 8px;">The harmonic mean is used to calculate the average of a set of numbers that have a large range of values.</li>
      <li style= String.raw"margin-bottom: 8px;">The median is the middle value of a set of numbers when the numbers are arranged in order.</li>
      <li style= String.raw"margin-bottom: 8px;">The formula for the average is $\bar{x} = String.raw\frac{\sum_{i= String.raw1}^{n} x_i}{n}$, where $\sum_{i= String.raw1}^{n} x_i$ is the sum of the numbers in the set and $n$ is the number of numbers in the set.</li>
      <li style= String.raw"margin-bottom: 8px;">The concept of ratio is used in [[business]] to compare the performance of different companies or to determine the ratio of debt to equity.</li>
      <li style= String.raw"margin-bottom: 8px;">The concept of proportion is used in [[economics]] to compare the prices of different goods or to determine the proportion of a country's GDP that is spent on different sectors.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["time-distance"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Time, Speed, Distance & Work
  </h3>

  <h4>1. Fundamental Concepts and Notations</h4>
  <p>
    In the realm of <strong>uniform linear motion</strong>, the three primary quantities are <strong><em>distance</em></strong> (<strong>D</strong>), <strong><em>speed</em></strong> (<strong>S</strong>) and <strong><em>time</em></strong> (<strong>T</strong>). The relationship among them is linear, i.e., the travelled path is directly proportional to both the speed and the elapsed time. In the context of <strong>work</strong>, the analogous triad consists of <strong><em>work</em></strong> (<strong>W</strong>), <strong><em>rate</em></strong> (<strong>R</strong>) and <strong><em>time</em></strong> (<strong>T</strong>), where <strong>rate</strong> denotes the amount of work done per unit time.
  </p>
  <p>
    The following table lists the standard symbols that appear in most competitive‑exam questions. All symbols are enclosed in <strong>bold</strong> to emphasize their importance.
  </p>
  <table style= String.raw"width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style= String.raw"background:#2a2a40;">
        <th style= String.raw"padding:8px; border:1px solid #444;">Symbol</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">Meaning</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">Units</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>D</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Total <em>distance</em> covered</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">km, m, miles</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>S</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Uniform <em>speed</em> (scalar)</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">km/h, m/s</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>T</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Elapsed <em>time</em></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">h, min, s</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>R</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Work <em>rate</em> (productivity)</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">unit/T, e.g., km/h, pages/day</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>W</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Total <em>work</em> done</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">km, pages, units of output</td>
      </tr>
    </tbody>
  </table>

  <div class= String.raw"important-box" style= String.raw"background:#1e1e2b; border-left:4px solid var(--accent); padding:12px; margin-top:16px;">
    <strong>Key Distinction:</strong> <em>Speed</em> is a scalar (magnitude only) whereas <em>velocity</em> is a vector (magnitude + direction). In NDA/CDS/AFCAT problems, unless explicitly stated, the term “speed” always implies scalar uniform motion.
  </div>

  <h4>2. Core Formulas with Full Derivations</h4>

  <h5>2.1 Distance–Speed–Time Relation</h5>
  <p>
    Starting from the definition of speed as “distance covered per unit time”, we write:
  </p>
  $$\text{Speed} = String.raw\frac{\text{Distance}}{\text{Time}} \quad\Longrightarrow\quad S = String.raw\frac{D}{T}$$
  <p>
    Solving for each variable yields the three interchangeable forms:
  </p>
  <ul>
    <li><strong>D = String.rawS \times T</strong> (used when distance is required)</li>
    <li><strong>S = String.raw\dfrac{D}{T}</strong> (used when speed is unknown)</li>
    <li><strong>T = String.raw\dfrac{D}{S}</strong> (used when time is unknown)</li>
  </ul>
  <p>
    <strong>Constraints:</strong> The motion must be uniform (constant speed) and the path must be straight or the total distance must be the sum of straight‑line segments. If acceleration is present, the simple linear relation does not hold; instead we resort to the equations of motion (see Section 4).
  </p>

  <h5>2.2 Relative Speed (Opposite & Same Direction)</h5>
  <p>
    When two bodies move along the same line, their <strong>relative speed</strong> determines how quickly the separation between them changes. Let <strong>S₁</strong> and <strong>S₂</strong> be the individual speeds.
  </p>
  <ul>
    <li>Opposite directions: <strong>S_{rel}= String.rawS₁+S₂</strong></li>
    <li>Same direction (faster behind slower): <strong>S_{rel}= String.raw|S₁-S₂|</strong></li>
  </ul>
  <p>
    Derivation: Consider a reference frame attached to the slower body. In that frame, the faster body appears to move with speed equal to the algebraic difference of the two speeds. If they move towards each other, the separation shrinks at the sum of the two speeds because each contributes to closing the gap.
  </p>

  <h5>2.3 Work–Rate–Time Relation</h5>
  <p>
    Analogous to the distance‑speed‑time trio, the work formula follows from the definition of rate:
  </p>
  $$\text{Rate} = String.raw\frac{\text{Work}}{\text{Time}} \quad\Longrightarrow\quad R = String.raw\frac{W}{T}$$
  <p>
    Rearranging, we obtain:
  </p>
  <ul>
    <li><strong>W = String.rawR \times T</strong></li>
    <li><strong>R = String.raw\dfrac{W}{T}</strong></li>
    <li><strong>T = String.raw\dfrac{W}{R}</strong></li>
  </ul>
  <p>
    <strong>Constraints:</strong> The rate must be constant throughout the interval. If the workforce changes (e.g., two men join later), we split the interval and apply the formula piece‑wise, then sum the work contributions.
  </p>

  <h5>2.4 Harmonic Mean for Average Speed</h5>
  <p>
    When equal distances are covered at two different speeds <strong>S₁</strong> and <strong>S₂</strong>, the average speed is not the arithmetic mean but the <em>harmonic mean</em>:
  </p>
  $$\text{Average Speed} = String.raw\frac{2 S₁ S₂}{S₁ + S₂}$$
  <p>
    Derivation: Let each distance be <strong>D</strong>. Total distance = String.raw$2D$, total time = String.raw$\dfrac{D}{S₁} + \dfrac{D}{S₂} = String.rawD\left(\dfrac{1}{S₁}+\dfrac{1}{S₂}\right)$. Hence average speed = String.raw$\dfrac{2D}{D\left(\dfrac{1}{S₁}+\dfrac{1}{S₂}\right)} = String.raw\dfrac{2 S₁ S₂}{S₁+S₂}$.
  </p>

  <h4>3. Advanced Scenarios: Motion with Constant Acceleration</h4>
  <p>
    While most NDA/CDS/AFCAT problems assume uniform motion, a small fraction involve constant acceleration (<strong>a</strong>). The three core equations of motion are:
  </p>
  <ol>
    <li><strong>S = String.rawu + a t</strong> (final speed after time <strong>t</strong>)</li>
    <li><strong>D = String.rawu t + \frac{1}{2} a t^{2}</strong> (distance travelled in time <strong>t</strong>)</li>
    <li><strong>v^{2} = String.rawu^{2} + 2 a D</strong> (relates speeds and distance without time)</li>
  </ol>
  <p>
    Here <strong>u</strong> denotes the initial speed, <strong>v</strong> the final speed. All symbols are scalars; direction is handled by sign convention (positive for forward, negative for reverse). These equations are derived by integrating the definition $a = String.raw\dfrac{dv}{dt}$ under the assumption that <strong>a</strong> is constant.
  </p>

  <h4>4. Classification of Typical Problem Types</h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style= String.raw"background:#2a2a40;">
        <th style= String.raw"padding:8px; border:1px solid #444;">Problem Type</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">Key Formula(s)</th>
        <th style= String.raw"padding:8px; border:1px solid #444;">Typical Pitfall</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>Simple D‑S‑T</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$D = String.rawS T$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Forgetting unit conversion (km ↔ m)</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>Relative Speed – Opposite</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$S_{rel}= String.rawS_{1}+S_{2}$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Mixing up opposite vs. same direction</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>Relative Speed – Same</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$S_{rel}= String.raw|S_{1}-S_{2}|$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Using sum instead of difference</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>Work – Multiple Workers</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$W = String.raw(R_{1}+R_{2}+...) T$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Assuming rates add linearly without checking for shared resources</td>
      </tr>
      <tr>
        <td style= String.raw"padding:8px; border:1px solid #444;"><strong>Average Speed – Equal Distances</strong></td>
        <td style= String.raw"padding:8px; border:1px solid #444;">$\displaystyle \frac{2 S_{1} S_{2}}{S_{1}+S_{2}}$</td>
        <td style= String.raw"padding:8px; border:1px solid #444;">Using arithmetic mean instead of harmonic mean</td>
      </tr>
    </tbody>
  </table>

  <div class= String.raw"important-box" style= String.raw"background:#1e1e2b; border-left:4px solid var(--accent); padding:12px; margin-top:16px;">
    <strong>Critical Distinction:</strong> In a <em>pipe‑and‑cistern</em> problem the quantity of water transferred is proportional to the product of <strong>cross‑sectional area</strong> and <strong>velocity</strong>. The effective rate is therefore $R = String.rawA \times v$, not merely the velocity.
  </div>

  <h4>5. Common Mistakes (Students Frequently Overlook)</h4>
  <ul>
    <li><strong>Unit mismatch:</strong> Converting hours to minutes but leaving speed in km/h leads to a factor‑of‑60 error.</li>
    <li><strong>Sign error in relative speed:</strong> Treating “same direction” as “opposite direction” adds speeds instead of subtracting them.</li>
    <li><strong>Assuming linearity for non‑uniform work:</strong> When workers join or leave midway, the total work must be split into intervals; using a single average rate yields a wrong answer.</li>
    <li><strong>Misapplying harmonic mean:</strong> Using arithmetic mean for equal‑distance speed problems yields a higher-than‑actual average speed.</li>
    <li><strong>Ignoring acceleration:</strong> Applying $D= String.rawS T$ when the problem states “starts from rest and accelerates uniformly” leads to an under‑estimation of distance.</li>
  </ul>

  <h4>6. Shortcuts & Tricks for Competitive Exams</h4>
  <ul>
    <li><strong>“Cross‑multiply” quickly for D‑S‑T:</strong> Write $T = String.raw\dfrac{D}{S}$ and immediately cancel common factors (e.g., 60 for km/h ↔ km/min).</li>
    <li><strong>Use “2 × (average of speeds) = String.rawsum of speeds”:</strong> For opposite‑direction problems, the time to meet = String.raw$\dfrac{\text{initial separation}}{S_{1}+S_{2}}$; you can mentally add the speeds without writing the formula.</li>
    <li><strong>“Man‑hour” shortcut:</strong> If $n$ workers complete a job in $t$ days, then $n \times t$ gives total man‑days. For a change in workforce, keep the product constant: $n_{1}t_{1}= String.rawn_{2}t_{2}$.</li>
    <li><strong>Harmonic mean shortcut:</strong> For equal distances at speeds $a$ and $b$, average speed $= String.raw\dfrac{2ab}{a+b}$. Memorise as “product over half‑sum”.</li>
    <li><strong>Proportion method for “time taken to cover remaining distance”:</strong> If a car travels $x$ km in $y$ hrs at speed $S$, then remaining distance $= String.rawD - x$, and required time $= String.raw\dfrac{D - x}{S}$ – treat as a simple proportion.</li>
    <li><strong>Acceleration shortcut:</strong> When $a$ is given, compute $t$ from $v = String.rawu + a t$ first, then plug into $D = String.rawu t + \frac12 a t^{2}$; this avoids solving quadratic equations.</li>
  </ul>

  <h4>7. Worked Example 1 – Relative Speed (Opposite Directions)</h4>
  <p><strong>Problem Statement:</strong> Two trains start simultaneously from stations 300 km apart and move towards each other. Train A travels at 80 km/h, while Train B travels at 70 km/h. Find the time after which they meet.</p>
  <p><strong>Solution (step‑by‑step):</strong></p>
  <ol>
    <li>Identify that the motion is along the same line but opposite directions ⇒ use $S_{rel}= String.rawS_{A}+S_{B}$.</li>
    <li>Compute relative speed: $S_{rel}= String.raw80+70= String.raw150\;\text{km/h}$.</li>
    <li>Apply the distance‑time formula with total separation $D= String.raw300\;\text{km}$:<br>
      $$T = String.raw\frac{D}{S_{rel}} = String.raw\frac{300}{150}= String.raw2\;\text{h}.$$</li>
    <li>Convert to minutes (if required): $2\;\text{h}= String.raw120\;\text{min}$.</li>
    <li>Check: Distance covered by A = String.raw$80\times2= String.raw160\;\text{km}$; by B = String.raw$70\times2= String.raw140\;\text{km}$; sum = String.raw$300\;\text{km}$ – consistent.</li>
  </ol>
  <p><strong>Result:</strong> The trains meet after **2 hours** (120 minutes).</p>

  <h4>8. Worked Example 2 – Work Problem with Changing Workforce</h4>
  <p><strong>Problem Statement:</strong> A dam can be filled by Pipe X in 12 h and by Pipe Y in 15 h. Both pipes are opened together for 4 h, after which Pipe Y is closed. How much longer will Pipe X take to fill the remaining volume?</p>
  <p><strong>Solution (step‑by‑step):</strong></p>
  <ol>
    <li>Determine individual rates: <br>
        $R_{X}= String.raw\dfrac{1}{12}\;\text{dam/h}$, $R_{Y}= String.raw\dfrac{1}{15}\;\text{dam/h}$.</li>
    <li>Combined rate while both are open: $R_{XY}= String.rawR_{X}+R_{Y}= String.raw\dfrac{1}{12}+\dfrac{1}{15}= String.raw\dfrac{5+4}{60}= String.raw\dfrac{9}{60}= String.raw\dfrac{3}{20}\;\text{dam/h}$.</li>
    <li>Work done in the first 4 h: $W_{1}= String.rawR_{XY}\times4 = String.raw\dfrac{3}{20}\times4 = String.raw\dfrac{12}{20}= String.raw0.6\;\text{dam}$ (i.e., 60 % of the dam).</li>
    <li>Remaining work: $W_{rem}= String.raw1-0.6= String.raw0.4\;\text{dam}$.</li>
    <li>Only Pipe X works thereafter, so time required $T_{rem}= String.raw\dfrac{W_{rem}}{R_{X}} = String.raw\dfrac{0.4}{\frac{1}{12}} = String.raw0.4\times12= String.raw4.8\;\text{h}$.</li>
    <li>Convert $0.8\;\text{h}$ to minutes: $0.8\times60= String.raw48\;\text{min}$.</li>
  </ol>
  <p><strong>Result:</strong> Pipe X needs an additional **4 hours 48 minutes** to complete the filling.</p>

  <h4>9. Additional Insight – Proportion Method for “Time to Cover Remaining Distance”</h4>
  <p>
    Many exam questions ask: “A cyclist covers 30 km in 2 h, then increases speed by 20 km/h. How long to cover the remaining 90 km?” Instead of recomputing from scratch, treat the first leg as a proportion:
  </p>
  <ul>
    <li>Initial speed $S_{1}= String.raw\dfrac{30}{2}= String.raw15\;\text{km/h}$.</li>
    <li>New speed $S_{2}= String.raw15+20= String.raw35\;\text{km/h}$.</li>
    <li>Time for remaining distance $T_{2}= String.raw\dfrac{90}{35}= String.raw\dfrac{18}{7}\;\text{h}= String.raw2\;\text{h}\;34\;\text{min (approx)}$.</li>
  </ul>
  <p>
    The proportion technique eliminates the need for a lengthy equation; just plug numbers into $T = String.rawD/S$ after the speed change.
  </p>

  <h4>10. Summary of Key Formulas</h4>
  <ul>
    <li><strong>D = String.rawS \times T</strong> (Uniform motion)</li>
    <li><strong>S = String.raw\dfrac{D}{T}</strong></li>
    <li><strong>T = String.raw\dfrac{D}{S}</strong></li>
    <li><strong>S_{rel}= String.rawS_{1}+S_{2}</strong> (Opposite directions)</li>
    <li><strong>S_{rel}= String.raw|S_{1}-S_{2}|</strong> (Same direction)</li>
    <li><strong>W = String.rawR \times T</strong> (Work‑rate‑time)</li>
    <li><strong>R = String.raw\dfrac{W}{T}</strong></li>
    <li><strong>T = String.raw\dfrac{W}{R}</strong></li>
    <li><strong>Average Speed (equal distances) = String.raw\dfrac{2 S_{1} S_{2}}{S_{1}+S_{2}}</strong></li>
    <li><strong>S = String.rawu + a t</strong>, <strong>D = String.rawu t + \frac12 a t^{2}</strong>, <strong>v^{2}= String.rawu^{2}+2 a D</strong> (Uniform acceleration)</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>When two objects move towards each other, always add their speeds to obtain the <em>relative speed</em>.</li>
      <li>For equal‑distance problems, the average speed is the harmonic mean, not the arithmetic mean.</li>
      <li>Convert all time units to the same base (hours or minutes) before using $D = String.rawS T$.</li>
      <li>In work problems, the product of <strong>workers × time</strong> (man‑hours) remains constant if the total work is unchanged.</li>
      <li>For a pipe‑and‑cistern problem, rate $= String.raw\text{area} \times \text{velocity}$; never forget the area factor.</li>
      <li>If a train travels at $S$ km/h for $t$ minutes, use $D = String.rawS \times \dfrac{t}{60}$ to avoid conversion errors.</li>
      <li>When acceleration is given, first compute the final speed using $v = String.rawu + a t$, then plug into $D = String.rawu t + \frac12 a t^{2}$.</li>
      <li>Remember the shortcut $T = String.raw\dfrac{D}{S}$ → if $D$ and $S$ share a common factor, cancel it before division to speed up calculations.</li>
      <li>In “meet‑in‑the‑middle” problems, the meeting point distance from each start is proportional to the respective speeds.</li>
      <li>For problems involving a change of speed part‑way, treat each segment separately and sum the times.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-numerical-ratios"] = String.raw`
<div class= String.raw"revision-card" style= String.raw"background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style= String.raw"color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Ratios, Proportions & Percentages
  </h3>

  <h4>Fundamental Concepts and Definitions</h4>
  <ul>
    <li><strong>[[Ratio]]</strong> – a quantitative relationship between two numbers expressed as “a : b” or $\frac{a}{b}$. <strong>Variables</strong>: $a$ and $b$ are the two quantities being compared; both must be non‑negative and $b \neq 0$.</li>
    <li><strong>[[Proportion]]</strong> – an equality of two ratios, i.e., $\frac{a}{b} = String.raw\frac{c}{d}$. It implies that the cross‑product $ad = String.rawbc$ holds true.</li>
    <li><strong>[[Percentage]]</strong> – a ratio expressed per 100, denoted by the symbol “%”. The basic conversion is $\text{percentage} = String.raw\frac{\text{part}}{\text{whole}} \times 100$.</li>
    <li><strong>Direct proportion</strong> – $y \propto x$ means $y = String.rawkx$, where $k$ is the constant of proportionality.</li>
    <li><strong>Inverse proportion</strong> – $y \propto \frac{1}{x}$ means $y = String.raw\frac{k}{x}$.</li>
  </ul>

  <h4>Core Formulas with Variable Explanations</h4>
  <ol>
    <li><strong>Basic Percentage Formula</strong>  
      $$\boxed{\text{Percentage} = String.raw\frac{\text{Part}}{\text{Whole}} \times 100}$$  
      <ul>
        <li><em>Part</em> – the quantity of interest (numerator).</li>
        <li><em>Whole</em> – the reference quantity (denominator).</li>
        <li>Both must be expressed in the same units; the result is a dimensionless number.</li>
      </ul>
    </li>
    <li><strong>Percentage Change</strong>  
      $$\boxed{\text{Percentage Change} = String.raw\frac{\text{New} - \text{Old}}{\text{Old}} \times 100}$$  
      <ul>
        <li><em>New</em> – value after change.</li>
        <li><em>Old</em> – value before change.</li>
        <li>Positive result denotes increase, negative denotes decrease.</li>
      </ul>
    </li>
    <li><strong>Compound Ratio</strong>  
      If $a:b = String.rawr_1$ and $b:c = String.rawr_2$, then $a:c = String.rawr_1 \times r_2$.  
      <ul>
        <li>Useful when multiple successive ratios are involved.</li>
        <li>All intermediate quantities must be compatible (same unit).</li>
      </ul>
    </li>
    <li><strong>Rule of Three (Cross‑Multiplication)</strong>  
      $$\frac{a}{b} = String.raw\frac{c}{d} \;\Longrightarrow\; ad = String.rawbc$$  
      <ul>
        <li>Provides a quick way to solve for an unknown in a proportion.</li>
        <li>Works only when the ratios are in the same direction (both “per” or both “to”).</li>
      </ul>
    </li>
    <li><strong>Profit &amp; Loss Percent</strong>  
      $$\boxed{\text{Profit\%} = String.raw\frac{\text{Profit}}{\text{Cost Price}} \times 100}$$  
      $$\boxed{\text{Loss\%} = String.raw\frac{\text{Loss}}{\text{Cost Price}} \times 100}$$  
      <ul>
        <li><em>Profit</em> = String.raw$SP - CP$; <em>Loss</em> = String.raw$CP - SP$.</li>
        <li>Both formulas assume $CP \neq 0$.</li>
      </ul>
    </li>
    <li><strong>Simple Interest</strong>  
      $$\boxed{SI = String.raw\frac{P \times R \times T}{100}}$$  
      <ul>
        <li>$P$ – principal (initial amount).</li>
        <li>$R$ – rate of interest per annum (in %).</li>
        <li>$T$ – time period in years.</li>
        <li>Applicable only for linear interest accrual; $R$ must be expressed as a percentage.</li>
      </ul>
    </li>
    <li><strong>Discount</strong>  
      $$\boxed{\text{Discount\%} = String.raw\frac{\text{Discount}}{\text{Marked Price}} \times 100}$$  
      <ul>
        <li>Discount = String.rawMarked Price – Selling Price.</li>
        <li>Used extensively in mixture‑type problems.</li>
      </ul>
    </li>
  </ol>

  <h4>Derivation of the Percentage Change Formula from First Principles</h4>
  <p>Consider a quantity $Q$ that changes from an initial value $Q_0$ to a final value $Q_f$. The absolute change is $\Delta Q = String.rawQ_f - Q_0$. By definition, the relative change with respect to the original magnitude is $\frac{\Delta Q}{Q_0}$. Multiplying by $100$ converts this ratio into a percentage, yielding the standard expression:</p>
  $$\text{Percentage Change} = String.raw\frac{Q_f - Q_0}{Q_0}\times 100$$
  <p>This derivation assumes $Q_0 \neq 0$; if $Q_0 = String.raw0$, a percentage change is undefined because division by zero occurs.</p>

  <h4>Classification of Ratios – A Comparative Table</h4>
  <table style= String.raw"width:100%; border-collapse:collapse; margin-top:12px;">
    <thead style= String.raw"background:#2a2a3a;">
      <tr>
        <th style= String.raw"border:1px solid #555; padding:6px;">Type</th>
        <th style= String.raw"border:1px solid #555; padding:6px;">Notation</th>
        <th style= String.raw"border:1px solid #555; padding:6px;">Key Property</th>
        <th style= String.raw"border:1px solid #555; padding:6px;">Typical Use‑Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style= String.raw"border:1px solid #555; padding:6px;"><strong>Simple Ratio</strong></td>
        <td style= String.raw"border:1px solid #555; padding:6px;">$a:b$</td>
        <td style= String.raw"border:1px solid #555; padding:6px;">Direct comparison of two quantities.</td>
        <td style= String.raw"border:1px solid #555; padding:6px;">Mixture problems, speed‑time relations.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #555; padding:6px;"><strong>Compound Ratio</strong></td>
        <td style= String.raw"border:1px solid #555; padding:6px;">$r_1 \times r_2 \times \dots$</td>
        <td style= String.raw"border:1px solid #555; padding:6px;">Product of successive ratios.</td>
        <td style= String.raw"border:1px solid #555; padding:6px;">Successive conversions (e.g., km → m → cm).</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #555; padding:6px;"><strong>Direct Proportion</strong></td>
        <td style= String.raw"border:1px solid #555; padding:6px;">$y = String.rawkx$</td>
        <td style= String.raw"border:1px solid #555; padding:6px;">$y$ varies linearly with $x$.</td>
        <td style= String.raw"border:1px solid #555; padding:6px;">Cost of items, distance‑time relations at constant speed.</td>
      </tr>
      <tr>
        <td style= String.raw"border:1px solid #555; padding:6px;"><strong>Inverse Proportion</strong></td>
        <td style= String.raw"border:1px solid #555; padding:6px;">$y = String.raw\frac{k}{x}$</td>
        <td style= String.raw"border:1px solid #555; padding:6px;">Product $xy$ remains constant.</td>
        <td style= String.raw"border:1px solid #555; padding:6px;">Work‑time problems, pressure‑volume (Boyle’s law).</td>
      </tr>
    </tbody>
  </table>

  <h4>Critical Distinctions – When Ratios Become Percentages</h4>
  <div class= String.raw"important-box" style= String.raw"border-left:4px solid var(--accent); background:#1e1e2a; padding:12px; margin-top:12px;">
    <strong>Key Point:</strong> A ratio $a:b$ can be instantly interpreted as a percentage only when the denominator $b$ represents “per 100”.  
    <ul style= String.raw"margin-top:6px;">
      <li>If $b = String.raw100$, then $a:b = String.rawa\%$ directly.</li>
      <li>Otherwise, convert by $\displaystyle \frac{a}{b}\times100$.</li>
      <li>In mixture problems, the “per 100” baseline often emerges from the total quantity of the mixture.</li>
    </ul>
  </div>

  <h4>Common Mistakes (Students Frequently Err)</h4>
  <ul>
    <li><strong>Confusing “per” with “to”</strong> – Treating $3:5$ as $3\%$ of $5$ instead of a ratio of $3$ parts to $5$ parts.</li>
    <li><strong>Ignoring the unit consistency</strong> – Mixing kilometres with metres in a ratio without converting leads to erroneous answers.</li>
    <li><strong>Mis‑applying the percentage change formula</strong> – Using $\frac{\text{New}}{\text{Old}}\times100$ instead of $\frac{\text{New} - \text{Old}}{\text{Old}}\times100$.</li>
    <li><strong>Over‑looking the “100” denominator</strong> – Directly substituting $a:b$ into a percentage formula without multiplying by $100$.</li>
    <li><strong>Failure to simplify compound ratios</strong> – Leaving $ \frac{2}{3}\times\frac{9}{4}$ as is instead of reducing to $\frac{3}{2}$ before applying to the problem.</li>
  </ul>

  <h4>Shortcuts &amp; Tricks for Competitive Speed</h4>
  <ol>
    <li><strong>Unitary Method Shortcut</strong> – When a question asks “What is $x\%$ of $Y$?”, first find the value of $1\%$ as $\frac{Y}{100}$, then multiply by $x$.</li>
    <li><strong>Cross‑Multiplication in Disguise</strong> – For problems of the type “$A$ is $p\%$ of $B$ and $B$ is $q\%$ of $C$”, compute $A = String.raw\frac{p}{100}\times\frac{q}{100}\times C$ directly, avoiding intermediate steps.</li>
    <li><strong>Quick Conversion of Compound Ratios</strong> – Multiply numerators together and denominators together, then simplify using GCD before converting to percentage.</li>
    <li><strong>“% of %” Shortcut</strong> – The product of two percentages is $\frac{(p\times q)}{100}$ %. Example: $20\%$ of $30\%$ = String.raw$\frac{20\times30}{100}= String.raw6\%$.</li>
    <li><strong>Use of “Rule of 72” for Approximate Rate of Doubling</strong> – If a quantity grows at $R\%$ per annum, approximate years to double = String.raw$\frac{72}{R}$. Handy for quick time‑value approximations.</li>
  </ol>

  <h4>Fully Worked Example 1 – Compound Ratio with Percentage Conversion</h4>
  <p><strong>Problem:</strong> A mixture contains milk, water, and sugar in the ratio $2:3:5$. If the total weight of the mixture is $200\,$kg, find the percentage (by weight) of sugar.</p>
  <p><strong>Solution Steps:</strong></p>
  <ol>
    <li>Sum of ratio parts = String.raw$2+3+5 = String.raw10$ parts.</li>
    <li>One part corresponds to $\displaystyle \frac{200\text{ kg}}{10}= String.raw20\text{ kg}$.</li>
    <li>Sugar part = String.raw$5$ parts $\Rightarrow$ mass of sugar = String.raw$5 \times 20 = String.raw100\text{ kg}$.</li>
    <li>Percentage of sugar = String.raw$\displaystyle \frac{100}{200}\times100 = String.raw50\%$.</li>
  </ol>
  <p>Thus, sugar constitutes <strong>50 %</strong> of the mixture. Note the use of the unitary method at step&nbsp;2 and the final conversion using the basic percentage formula.</p>

  <h4>Fully Worked Example 2 – Profit &amp; Loss with Ratio of Costs</h4>
  <p><strong>Problem:</strong> A trader buys two articles in the ratio $3:7$ for a total cost of $\₹ 8000$. He sells them at a profit of $20\%$ on the first article and incurs a loss of $10\%$ on the second. Find the overall profit or loss percentage.</p>
  <p><strong>Solution Steps:</strong></p>
  <ol>
    <li>Let the costs be $3x$ and $7x$ respectively. Hence $3x+7x = String.raw8000 \Rightarrow 10x = String.raw8000 \Rightarrow x = String.raw800$.</li>
    <li>Cost of first article = String.raw$3x = String.raw2400$; cost of second = String.raw$7x = String.raw5600$.</li>
    <li>First article selling price = String.raw$2400 \times (1 + 0.20) = String.raw2400 \times 1.20 = String.raw2880$.</li>
    <li>Second article selling price = String.raw$5600 \times (1 - 0.10) = String.raw5600 \times 0.90 = String.raw5040$.</li>
    <li>Total selling price = String.raw$2880 + 5040 = String.raw7920$.</li>
    <li>Overall profit/loss = String.raw$7920 - 8000 = String.raw-80$ (a loss of ₹80).</li>
    <li>Overall loss percentage = String.raw$\displaystyle \frac{80}{8000}\times100 = String.raw1\%$.</li>
  </ol>
  <p>Key observations: the ratio provided simplifies the allocation of the total cost; the profit/loss percentages are applied using the unitary method; the final loss is tiny, illustrating the importance of precise arithmetic.</p>

  <h4>Advanced Application – Work &amp; Time (Inverse Proportion)</h4>
  <p>When two workers $A$ and $B$ work together, the combined rate is the sum of individual rates. If $A$ can complete a job in $x$ days, his rate is $\frac{1}{x}$ job per day. For $B$ working in $y$ days, rate = String.raw$\frac{1}{y}$. The collective time $T$ satisfies:</p>
  $$\frac{1}{T} = String.raw\frac{1}{x} + \frac{1}{y} \;\Longrightarrow\; T = String.raw\frac{xy}{x+y}$$
  <p>This is a classic inverse proportion result, vital for many NDA/CDS questions involving manpower.</p>

  <h4>Derivation of Simple Interest from the Definition of Interest</h4>
  <p>Interest $I$ for a principal $P$ over time $T$ years at rate $R\%$ per annum is defined as a linear function of $P$, $R$, and $T$: $I = String.rawk \times P \times R \times T$, where $k$ is a constant of proportionality. Since $R$ is expressed per 100, the constant $k = String.raw\frac{1}{100}$, yielding the well‑known formula:</p>
  $$SI = String.raw\frac{P \times R \times T}{100}$$
  <p>Conditions: $P, R, T \ge 0$ and $R$ expressed as a percent.</p>

  <h4>Additional Practical Tips</h4>
  <ul>
    <li>Always rewrite percentages as fractions before performing algebraic manipulation; this reduces errors in cross‑multiplication.</li>
    <li>When dealing with “% increase followed by % decrease”, compute the net effect using the product of the complementary fractions: $(1 + p/100)(1 - q/100) - 1$.</li>
    <li>For mixture problems involving successive dilutions, treat each dilution as a compound ratio and simplify before converting to percentage.</li>
    <li>Remember that “ratio of ratios” is itself a ratio; e.g., $\frac{a:b}{c:d} = String.raw\frac{a \times d}{b \times c}$.</li>
  </ul>

  <div class= String.raw"exam-tip" style= String.raw"background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style= String.raw"color: var(--accent);">⚡ High-Yield Exam Facts (NDA/CDS/AFCAT)</strong>
    <ul style= String.raw"margin-top: 8px;">
      <li>1. A ratio $a:b$ is equivalent to $\displaystyle \frac{a}{b}\times100\%$ when $b= String.raw100$.</li>
      <li>2. In a direct proportion, the product of the extremes equals the product of the means ($ad = String.rawbc$).</li>
      <li>3. For inverse proportion, $xy = String.raw\text{constant}$; thus $y = String.raw\frac{k}{x}$.</li>
      <li>4. “% of %” always yields a smaller percentage: $p\%$ of $q\% = String.raw\frac{pq}{100}\%$.</li>
      <li>5. The quick rule for “% increase then % decrease” is net change $= String.rawp - q - \frac{pq}{100}$.</li>
      <li>6. Compound ratio simplification: multiply numerators and denominators separately, then reduce before converting.</li>
      <li>7. In work‑time problems, combined time $T = String.raw\frac{xy}{x+y}$ for two workers with individual times $x$ and $y$.</li>
      <li>8. Profit % is always calculated on cost price, not on selling price.</li>
      <li>9. The “Rule of 72” gives an approximate doubling period: $\displaystyle \text{Years} \approx \frac{72}{\text{Rate\%}}$.</li>
    </ul>
  </div>
</div>
`;

