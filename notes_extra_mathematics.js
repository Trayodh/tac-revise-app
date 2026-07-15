window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};

EXPANDED_NOTES_DATA["trig-identities"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Trigonometric Identities & Values
  </h3>

  <h4><strong>1. Fundamental Definitions</strong></h4>
  <p>In a right‑angled triangle, the primary <strong>trigonometric functions</strong> are defined as ratios of sides:</p>
  <ul>
    <li><strong>Sine (sin θ)</strong> = opposite / hypotenuse</li>
    <li><strong>Cosine (cos θ)</strong> = adjacent / hypotenuse</li>
    <li><strong>Tangent (tan θ)</strong> = opposite / adjacent = sin θ / cos θ</li>
    <li><strong>Cotangent (cot θ)</strong> = adjacent / opposite = cos θ / sin θ</li>
    <li><strong>Secant (sec θ)</strong> = hypotenuse / adjacent = 1 / cos θ</li>
    <li><strong>Cosecant (csc θ)</strong> = hypotenuse / opposite = 1 / sin θ</li>
  </ul>
  <p>These definitions extend to the unit circle where the point <em>(cos θ, sin θ)</em> lies on a circle of radius 1 centred at the origin.</p>

  <h4><strong>2. Even‑Odd and Periodicity Properties</strong></h4>
  <ul>
    <li><strong>Even‑odd</strong>: <strong>cos θ</strong> is an <em>even</em> function → cos(–θ) = cos θ; <strong>sin θ</strong>, <strong>tan θ</strong>, <strong>csc θ</strong> are <em>odd</em> → sin(–θ) = –sin θ, tan(–θ) = –tan θ.</li>
    <li><strong>Periodicity</strong>: 
      <ul>
        <li>sin θ and cos θ have period 2π.</li>
        <li>tan θ and cot θ have period π.</li>
      </ul>
    </li>
  </ul>

  <h4><strong>3. Pythagorean Identities</strong></h4>
  <p>Derived from the unit‑circle equation <strong>sin²θ + cos²θ = 1</strong> (first proved by [[Pythagoras' theorem]]). By dividing through by sin²θ or cos²θ we obtain:</p>
  <ul>
    <li>1 + tan²θ = sec²θ</li>
    <li>1 + cot²θ = csc²θ</li>
  </ul>

  <h4><strong>4. Co‑function Identities</strong></h4>
  <p>These relate a function at an angle to its complement (90° = π/2 rad):</p>
  <ul>
    <li>sin θ = cos(π/2 – θ)</li>
    <li>cos θ = sin(π/2 – θ)</li>
    <li>tan θ = cot(π/2 – θ)</li>
    <li>sec θ = csc(π/2 – θ)</li>
  </ul>

  <h4><strong>5. Sum and Difference Formulas</strong></h4>
  <p>Essential for evaluating expressions where the angle is a sum or difference of known angles.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:8px;">
    <thead>
      <tr style="background:#222; color:#fff;">
        <th style="padding:6px;">Identity</th><th style="padding:6px;">Expression</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>sin(A ± B)</strong></td>
        <td style="padding:6px;">sin A cos B ± cos A sin B</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>cos(A ± B)</strong></td>
        <td style="padding:6px;">cos A cos B ∓ sin A sin B</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>tan(A ± B)</strong></td>
        <td style="padding:6px;">(tan A ± tan B) / (1 ∓ tan A tan B)</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>6. Double‑Angle Identities</strong></h4>
  <p>Obtained by setting B = A in the sum formulas.</p>
  <ul>
    <li><strong>sin 2θ</strong> = 2 sin θ cos θ</li>
    <li><strong>cos 2θ</strong> = cos²θ – sin²θ = 2 cos²θ – 1 = 1 – 2 sin²θ</li>
    <li><strong>tan 2θ</strong> = (2 tan θ) / (1 – tan²θ)</li>
  </ul>

  <h4><strong>7. Half‑Angle Identities</strong></h4>
  <p>Derived from the double‑angle formulas, useful for evaluating trigonometric values at 22.5°, 15°, etc.</p>
  <ul>
    <li><strong>sin²(θ/2)</strong> = (1 – cos θ)/2</li>
    <li><strong>cos²(θ/2)</strong> = (1 + cos θ)/2</li>
    <li><strong>tan(θ/2)</strong> = (1 – cos θ)/sin θ = sin θ/(1 + cos θ)</li>
  </ul>

  <h4><strong>8. Product‑to‑Sum and Sum‑to‑Product</strong></h4>
  <p>These transformations simplify products of sines and cosines.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:8px;">
    <thead>
      <tr style="background:#222; color:#fff;">
        <th style="padding:6px;">Form</th><th style="padding:6px;">Identity</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>sin A sin B</strong></td>
        <td style="padding:6px;">½[cos(A – B) – cos(A + B)]</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>cos A cos B</strong></td>
        <td style="padding:6px;">½[cos(A – B) + cos(A + B)]</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>sin A cos B</strong></td>
        <td style="padding:6px;">½[sin(A + B) + sin(A – B)]</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>9. Triple‑Angle and Multiple‑Angle Formulas</strong></h4>
  <p>Beyond the standard double‑angle, the following are frequently required:</p>
  <ul>
    <li><strong>sin 3θ</strong> = 3 sin θ – 4 sin³θ</li>
    <li><strong>cos 3θ</strong> = 4 cos³θ – 3 cos θ</li>
    <li><strong>tan 3θ</strong> = (3 tan θ – tan³θ) / (1 – 3 tan²θ)</li>
  </ul>

  <h4><strong>10. Exact Values of Trigonometric Functions</strong></h4>
  <p>Values at the principal angles (0°, 30°, 45°, 60°, 90°) and their radian equivalents are memorised for rapid calculation.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:8px;">
    <thead>
      <tr style="background:#222; color:#fff;">
        <th style="padding:6px;">Angle</th>
        <th style="padding:6px;">Radians</th>
        <th style="padding:6px;">sin</th>
        <th style="padding:6px;">cos</th>
        <th style="padding:6px;">tan</th>
        <th style="padding:6px;">sec</th>
        <th style="padding:6px;">csc</th>
        <th style="padding:6px;">cot</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>0°</strong></td>
        <td style="padding:6px;">0</td>
        <td style="padding:6px;">0</td>
        <td style="padding:6px;">1</td>
        <td style="padding:6px;">0</td>
        <td style="padding:6px;">1</td>
        <td style="padding:6px;">∞</td>
        <td style="padding:6px;">∞</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>30°</strong></td>
        <td style="padding:6px;">π/6</td>
        <td style="padding:6px;">½</td>
        <td style="padding:6px;">√3⁄2</td>
        <td style="padding:6px;">1⁄√3 = √3⁄3</td>
        <td style="padding:6px;">2⁄√3 = 2√3⁄3</td>
        <td style="padding:6px;">2</td>
        <td style="padding:6px;">√3</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>45°</strong></td>
        <td style="padding:6px;">π/4</td>
        <td style="padding:6px;">√2⁄2</td>
        <td style="padding:6px;">√2⁄2</td>
        <td style="padding:6px;">1</td>
        <td style="padding:6px;">√2</td>
        <td style="padding:6px;">√2</td>
        <td style="padding:6px;">1</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>60°</strong></td>
        <td style="padding:6px;">π/3</td>
        <td style="padding:6px;">√3⁄2</td>
        <td style="padding:6px;">½</td>
        <td style="padding:6px;">√3</td>
        <td style="padding:6px;">2</td>
        <td style="padding:6px;">2⁄√3 = 2√3⁄3</td>
        <td style="padding:6px;">1⁄√3 = √3⁄3</td>
      </tr>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;"><strong>90°</strong></td>
        <td style="padding:6px;">π/2</td>
        <td style="padding:6px;">1</td>
        <td style="padding:6px;">0</td>
        <td style="padding:6px;">∞</td>
        <td style="padding:6px;">∞</td>
        <td style="padding:6px;">1</td>
        <td style="padding:6px;">0</td>
      </tr>
    </tbody>
  </table>
  <p>Note: Values for angles beyond 90° are obtained using the periodicity and symmetry rules (e.g., sin(π + θ) = –sin θ).</p>

  <h4><strong>11. Relationship with Complex Exponential – Euler’s Formula</strong></h4>
  <p>[[Leonhard Euler]] established the elegant connection:</p>
  <p><strong>e^{iθ} = cos θ + i sin θ</strong></p>
  <p>From this, the following identities are immediate:</p>
  <ul>
    <li>cos θ = (e^{iθ} + e^{-iθ}) / 2</li>
    <li>sin θ = (e^{iθ} – e^{-iθ}) / (2i)</li>
  </ul>
  <p>Euler’s formula is instrumental in deriving higher‑order identities, especially for Fourier analysis and signal processing, topics that occasionally appear in the <strong>General Knowledge</strong> section of the NDA exam when asked about the history of mathematics.</p>

  <h4><strong>12. Historical Development of Trigonometry</strong></h4>
  <p>Understanding the lineage of concepts can often aid memory:</p>
  <ul>
    <li>[[Hipparchus]] (c. 190 BC) – First known trigonometric table (chord function).</li>
    <li>[[Aryabhata]] (476 CE) – Introduced sine (jya) in Indian astronomy; his work <em>Āryabhaṭīya</em> contains a table of half‑chords.</li>
    <li>[[Brahmagupta]] (628 CE) – Extended sine tables and related them to cosine.</li>
    <li>[[Madhava of Sangamagrama]] (c. 14th century) – Developed infinite series for sin θ and cos θ, pre‑figuring the modern Taylor series.</li>
    <li>[[John Napier]] (1614) – Invented logarithms, which later facilitated trigonometric calculations.</li>
    <li>[[Isaac Newton]] (1665) – Applied trigonometric series to solve problems in celestial mechanics.</li>
    <li>[[Gottfried Wilhelm Leibniz]] – Co‑inventor of calculus, which formalised the differentiation of trig functions.</li>
  </ul>

  <h4><strong>13. Common Pitfalls & Quick‑Check Techniques</strong></h4>
  <ul>
    <li>Never mix up the signs in the sum‑difference formulas; a mnemonic “<strong>SOH‑CAH‑TOA</strong>” works only for basic ratios, not for sum formulas.</li>
    <li>When converting between degrees and radians, remember <strong>π rad = 180°</strong>. Hence 1° = π/180 rad.</li>
    <li>Always verify domain restrictions: tan θ and sec θ are undefined where cos θ = 0 (i.e., θ = π/2 + kπ).</li>
    <li>For half‑angle values, decide the sign based on the quadrant of θ/2.</li>
  </ul>

  <h4><strong>14. Application in NDA / CDS / AFCAT Problems</strong></h4>
  <p>Typical questions involve:</p>
  <ul>
    <li>Finding the exact value of an expression such as <strong>sin 15°</strong> using half‑angle identities.</li>
    <li>Solving equations like <strong>tan θ = √3</strong> within a specified interval.</li>
    <li>Evaluating determinants containing trigonometric functions where the use of co‑function identities simplifies the matrix.</li>
    <li>Proving identities (e.g., <strong>sin θ + cos θ = √2 sin(θ + π/4)</strong>) which are standard in the syllabus.</li>
  </ul>

  <h4><strong>15. Reference Tables for Quick Recall</strong></h4>
  <p>Below are two compact tables that aid rapid recall during the exam.</p>
  <table style="width:48%; float:left; border-collapse:collapse; margin-right:4%; margin-top:8px;">
    <thead>
      <tr style="background:#222; color:#fff;">
        <th colspan="2" style="padding:6px;"><strong>Quarter‑Circle Values</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;">θ (°)</td><td style="padding:6px;">sin θ</td>
      </tr>
      <tr><td style="padding:6px;">0</td><td style="padding:6px;">0</td></tr>
      <tr><td style="padding:6px;">30</td><td style="padding:6px;">½</td></tr>
      <tr><td style="padding:6px;">45</td><td style="padding:6px;">√2⁄2</td></tr>
      <tr><td style="padding:6px;">60</td><td style="padding:6px;">√3⁄2</td></tr>
      <tr><td style="padding:6px;">90</td><td style="padding:6px;">1</td></tr>
    </tbody>
  </table>

  <table style="width:48%; float:left; border-collapse:collapse; margin-top:8px;">
    <thead>
      <tr style="background:#222; color:#fff;">
        <th colspan="2" style="padding:6px;"><strong>Key Identities Summary</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #444;">
        <td style="padding:6px;">Pythagorean</td><td style="padding:6px;">sin²θ + cos²θ = 1</td>
      </tr>
      <tr><td style="padding:6px;">Double‑Angle</td><td style="padding:6px;">sin 2θ = 2sinθcosθ</td></tr>
      <tr><td style="padding:6px;">Half‑Angle</td><td style="padding:6px;">cos²(θ/2) = (1+cosθ)/2</td></tr>
      <tr><td style="padding:6px;">Sum‑to‑Product</td><td style="padding:6px;">sinA sinB = ½[cos(A‑B) – cos(A+B)]</td></tr>
      <tr><td style="padding:6px;">Co‑function</td><td style="padding:6px;">cosθ = sin(π/2‑θ)</td></tr>
    </tbody>
  </table>
  <div style="clear:both;"></div>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>sin 30° = ½, cos 30° = √3⁄2, tan 30° = √3⁄3.</li>
      <li>sin 45° = cos 45° = √2⁄2; tan 45° = 1.</li>
      <li>sin 60° = √3⁄2, cos 60° = ½, tan 60° = √3.</li>
      <li>Double‑angle: sin 2θ = 2sinθcosθ; cos 2θ = 1 – 2sin²θ.</li>
      <li>Half‑angle: sin²(θ/2) = (1 – cosθ)/2, cos²(θ/2) = (1 + cosθ)/2.</li>
      <li>Euler’s formula: e^{iθ} = cosθ + i sinθ.</li>
      <li>Pythagorean identity: 1 + tan²θ = sec²θ.</li>
      <li>Co‑function: sinθ = cos(π/2 – θ); tanθ = cot(π/2 – θ).</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["inverse-trig"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Inverse Trigonometric Functions
  </h3>

  <h4><strong>1. Definition & Historical Context</strong></h4>
  <p>The <strong>inverse trigonometric functions</strong> (also called arc‑functions) are the set of functions that return the angle whose trigonometric value is given. They are denoted as <strong>arcsin</strong>, <strong>arccos</strong>, <strong>arctan</strong>, <strong>arccot</strong>, <strong>arcsec</strong>, and <strong>arccsc</strong>. The need for these functions emerged from solving triangles in ancient geometry, a problem discussed in [[Euclid's Elements]] (c. 300 BCE) and later formalised by [[Pythagoras]] and his school. Modern notation was introduced in the 18th century, with contributions from [[Leonhard Euler]] and [[Isaac Newton]].</p>

  <h4><strong>2. Principal Value Branches</strong></h4>
  <p>Because the trigonometric functions are periodic, each inverse function is multi‑valued. For calculus and engineering applications, a single‑valued “principal branch” is chosen. The table below summarises the conventional principal value intervals, expressed in both <strong>radians</strong> and <strong>degrees</strong>:</p>

  <table style="width:100%; border-collapse:collapse; margin-top:8px;">
    <thead>
      <tr style="background:#333;color:#fff;">
        <th style="padding:6px; border:1px solid #555;">Function</th>
        <th style="padding:6px; border:1px solid #555;">Domain (Input)</th>
        <th style="padding:6px; border:1px solid #555;">Principal Range (Output)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:6px; border:1px solid #555;"><strong>arcsin x</strong></td>
        <td style="padding:6px; border:1px solid #555;">-1 ≤ x ≤ 1</td>
        <td style="padding:6px; border:1px solid #555;">[-π/2, π/2] = [-90°, 90°]</td>
      </tr>
      <tr>
        <td style="padding:6px; border:1px solid #555;"><strong>arccos x</strong></td>
        <td style="padding:6px; border:1px solid #555;">-1 ≤ x ≤ 1</td>
        <td style="padding:6px; border:1px solid #555;">[0, π] = [0°, 180°]</td>
      </tr>
      <tr>
        <td style="padding:6px; border:1px solid #555;"><strong>arctan x</strong></td>
        <td style="padding:6px; border:1px solid #555;">x ∈ ℝ</td>
        <td style="padding:6px; border:1px solid #555;">(-π/2, π/2) = (-90°, 90°)</td>
      </tr>
      <tr>
        <td style="padding:6px; border:1px solid #555;"><strong>arccot x</strong></td>
        <td style="padding:6px; border:1px solid #555;">x ∈ ℝ</td>
        <td style="padding:6px; border:1px solid #555;">(0, π) = (0°, 180°)</td>
      </tr>
      <tr>
        <td style="padding:6px; border:1px solid #555;"><strong>arcsec x</strong></td>
        <td style="padding:6px; border:1px solid #555;">|x| ≥ 1</td>
        <td style="padding:6px; border:1px solid #555;">[0, π] \{π/2}</td>
      </tr>
      <tr>
        <td style="padding:6px; border:1px solid #555;"><strong>arccsc x</strong></td>
        <td style="padding:6px; border:1px solid #555;">|x| ≥ 1</td>
        <td style="padding:6px; border:1px solid #555;">[-π/2, π/2] \{0}</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>3. Fundamental Identities Involving Inverses</strong></h4>
  <ul>
    <li><strong>Reciprocal Relationships</strong>:
      <ul>
        <li>arcsin x + arccos x = π/2</li>
        <li>arctan x + arccot x = π/2</li>
        <li>arcsec x + arccsc x = π/2</li>
      </ul>
    </li>
    <li><strong>Complementary Angle Identities</strong> (derived from the above):
      <ul>
        <li>arcsin x = π/2 − arccos x</li>
        <li>arctan x = π/2 − arccot x</li>
      </ul>
    </li>
    <li><strong>Even‑Odd Symmetry</strong>:
      <ul>
        <li>arcsin(−x) = −arcsin x</li>
        <li>arccos(−x) = π − arccos x</li>
        <li>arctan(−x) = −arctan x</li>
      </ul>
    </li>
    <li><strong>Double‑Angle Transformations</strong> (useful for solving equations):
      <ul>
        <li>arcsin (2x√(1−x²)) = 2 arcsin x for |x| ≤ 1/√2</li>
        <li>arccos (2x² − 1) = 2 arccos x for |x| ≥ 0</li>
      </ul>
    </li>
  </ul>

  <h4><strong>4. Differentiation & Integration</strong></h4>
  <p>Derivatives of the principal branches are indispensable in NDA/CDS calculus sections. Using implicit differentiation or the chain rule, we obtain:</p>
  <ul>
    <li><strong>d/dx (arcsin x)</strong> = 1 / √(1 − x²)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <li><strong>d/dx (arccos x)</strong> = −1 / √(1 − x²)</li>
      <li><strong>d/dx (arctan x)</strong> = 1 / (1 + x²)</li>
      <li><strong>d/dx (arccot x)</strong> = −1 / (1 + x²)</li>
      <li><strong>d/dx (arcsec x)</strong> = 1 / (|x|√(x² − 1))</li>
      <li><strong>d/dx (arccsc x)</strong> = −1 / (|x|√(x² − 1))</li>
    </ul>

  <p>Integrals involving inverse functions are frequently asked in the “Integration by Parts” and “Trigonometric Substitution” sections. Key results include:</p>
  <ul>
    <li><strong>∫ arcsin x dx</strong> = x arcsin x + √(1 − x²) + C</li>
    <li><strong>∫ arccos x dx</strong> = x arccos x − √(1 − x²) + C</li>
    <li><strong>∫ arctan x dx</strong> = x arctan x − ½ ln(1 + x²) + C</li>
    <li><strong>∫ arccot x dx</strong> = x arccot x + ½ ln(1 + x²) + C</li>
  </ul>

  <h4><strong>5. Series Expansions (Maclaurin & Taylor)</strong></h4>
  <p>Power‑series representations are vital for approximation problems and for evaluating limits. Using the <strong>Maclaurin series</strong> (a special case of the <strong>Taylor series</strong> centred at 0), we obtain:</p>
  <ul>
    <li><strong>arcsin x</strong> = ∑_{n=0}^{∞} \frac{(2n)!}{4^{n}(n!)^{2}(2n+1)} x^{2n+1}
      <br>Converges for |x| ≤ 1.</li>
    <li><strong>arctan x</strong> = ∑_{n=0}^{∞} (−1)^{n}\frac{x^{2n+1}}{2n+1}
      <br>Converges for |x| ≤ 1 (conditionally at x = ±1).</li>
    <li><strong>arccos x</strong> = π/2 − arcsin x = π/2 − ∑_{n=0}^{∞} \frac{(2n)!}{4^{n}(n!)^{2}(2n+1)} x^{2n+1}</li>
  </ul>

  <p>These expansions are directly linked to [[Leonhard Euler]]'s work on infinite series and are often utilised in the “Series & Sequences” portion of the exam.</p>

  <h4><strong>6. Relationship with Complex Numbers & Euler’s Formula</strong></h4>
  <p>Through [[Euler's formula]] e^{iθ}=cos θ + i sin θ, the inverse functions can be expressed using complex logarithms:</p>
  <ul>
    <li><strong>arcsin z</strong> = −i ln\Big( i z + √{1 − z²}\Big)</li>
    <li><strong>arccos z</strong> = −i ln\Big( z + i √{1 − z²}\Big)</li>
    <li><strong>arctan z</strong> = \frac{i}{2}\,ln\Big(\frac{1 − i z}{1 + i z}\Big)</li>
  </ul>
  <p>These forms are indispensable when handling integration of rational functions involving quadratic irreducible factors, a topic that appears regularly in NDA/CSIR‑JRF type problems.</p>

  <h4><strong>7. Solving Trigonometric Equations Using Inverses</strong></h4>
  <p>A systematic approach for solving equations such as <em>sin θ = k</em> or <em>tan θ = k</em> involves:</p>
  <ol>
    <li>Finding the principal value θ₀ = arcsin k (or arctan k).</li>
    <li>Exploiting periodicity: 
      <ul>
        <li>For sine: θ = θ₀ + 2πn or θ = π − θ₀ + 2πn.</li>
        <li>For cosine: θ = θ₀ + 2πn or θ = −θ₀ + 2πn.</li>
        <li>For tangent: θ = θ₀ + πn.</li>
      </ul>
    </li>
    <li>Ensuring the solution lies within the required interval (often 0°–360° or 0–2π).</li>
  </ol>

  <h4><strong>8. Graphical Characteristics</strong></h4>
  <p>The graphs of the six inverse functions are reflections of their direct counterparts about the line y = x. Key features include:</p>
  <ul>
    <li><strong>Domain and Range</strong> are interchanged compared to sin, cos, tan, etc.</li>
    <li>All are monotonic within the principal branch, guaranteeing the existence of inverses.</li>
    <li>Vertical asymptotes occur for arcsec, arccsc, and arccot at points where the original function has zeros (e.g., x = 0 for arccsc).</li>
    <li>Discontinuities are removed by the principal value choice; for instance, arcsin x is continuous on [−1, 1].</li>
  </ul>

  <h4><strong>9. Applications in Defence & Ballistic Trajectories</strong></h4>
  <p>Inverse trigonometric functions are employed in the computation of launch angles for artillery shells and missile trajectories. Using the <strong>range equation</strong>:</p>
  <p><strong>R = (v₀² / g) sin 2θ</strong></p>
  <p>the required elevation angle θ for a desired range R is obtained as:</p>
  <p><strong>θ = ½ arcsin ( gR / v₀² )</strong></p>
  <p>where <strong>v₀</strong> is the muzzle velocity and <strong>g</strong> is the acceleration due to gravity (≈ 9.80665 m s⁻²). The same principle appears in navigation problems, where the bearing is calculated via <strong>arctan (Δy/Δx)</strong>.</p>

  <h4><strong>10. Common Pitfalls & Tricks for the Examination</strong></h4>
  <ul>
    <li><strong>Sign Errors</strong>: Remember that arccos (−x) = π − arccos x, not −arccos x.</li>
    <li><strong>Domain Restrictions</strong>: Never substitute a value outside the defined domain; the result is undefined and leads to loss of marks.</li>
    <li><strong>Principal Value vs. General Solution</strong>: In multiple‑choice or integer‑type questions, the required answer may be the principal value unless otherwise specified.</li>
    <li><strong>Using Symmetry</strong>: For equations like sin θ = sin α, the solution set can be written compactly as θ = α + 2πn or θ = π − α + 2πn.</li>
    <li><strong>Series Approximation</strong>: For small angles (|θ| < 0.1 rad), arcsin θ ≈ θ and arctan θ ≈ θ, which simplifies many projectile‑motion calculations.</li>
  </ul>

  <h4><strong>11. Inter‑relationships with Other Mathematical Topics</strong></h4>
  <p>Inverse trigonometric functions intersect with:</p>
  <ul>
    <li><strong>Logarithmic Differentiation</strong>: Differentiating a composite function like y = arcsin (e^{x}) requires chain rule and the derivative of arcsin.</li>
    <li><strong>Complex Integration</strong>: Contour integrals involving sqrt(1 − z²) often reduce to inverse trigonometric forms via the identities in section 6.</li>
    <li><strong>Number Theory</strong>: The angles appearing in the construction of regular polygons (e.g., constructibility of a 17‑gon) involve arccos (½) and related values, a topic explored by [[Gauss]] (though not directly part of NDA, it enriches conceptual depth).</li>
    <li><strong>Geometry</strong>: The <strong>Sine Rule</strong> and <strong>Cosine Rule</strong> can be inverted to find unknown angles using arcsin and arccos, a technique often tested in the “Geometry” section of the exam.</li>
    <li><strong>Historical Algorithms</strong>: The ancient Indian mathematician [[Aryabhata]] (c. 476 CE) used trigonometric tables that effectively employed inverse functions to solve astronomical problems.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>arcsin x + arccos x = π/2 (holds for every x in [−1, 1])</li>
      <li>Derivative of arctan x is 1 / (1 + x²); this is a frequent integration‑by‑parts starter.</li>
      <li>Series for arctan x: x − x³/3 + x⁵/5 + … Useful for evaluating π via the Leibniz formula.</li>
      <li>For projectile range R, required elevation θ = ½ arcsin (gR / v₀²). Remember the factor ½.</li>
      <li>Principal value of arccos x lies in [0, π]; never answer with a negative angle for arccos.</li>
      <li>arcsin (2x√(1−x²)) = 2 arcsin x (valid when |x| ≤ 1/√2); handy for double‑angle problems.</li>
      <li>Integral ∫arcsin x dx = x arcsin x + √(1−x²) + C; memorize this form for quick integration.</li>
      <li>Complex form: arctan z = (i/2) ln((1−iz)/(1+iz)). Appears in advanced integration questions.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["quadratic-eq"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Quadratic Equations
  </h3>

  <h4><strong>Definition & Standard Form</strong></h4>
  <p>A <strong>quadratic equation</strong> is any polynomial equation of degree two and can be written in the canonical <strong>standard form</strong>:</p>
  <p><strong>ax² + bx + c = 0</strong>, where <strong>a, b, c ∈ ℝ</strong> (or ℂ) and <strong>a ≠ 0</strong>.</p>
  <ul>
    <li>The coefficient <strong>a</strong> is called the <strong>leading coefficient</strong>.</li>
    <li>The term <strong>bx</strong> is the <strong>linear term</strong>.</li>
    <li>The constant term is <strong>c</strong>.</li>
  </ul>

  <h4><strong>Historical Milestones</strong></h4>
  <p>The systematic study of quadratic equations began with the Persian mathematician [[Al-Khwarizmi]] (c. 780 – 850 CE) in his treatise *Kitab al‑Jabr wa‑l‑Muqabala*. Later, the Indian scholar [[Brahmagupta]] (598–668 CE) gave rules for solving equations of the form <strong>ax² = c</strong>. In the 12th century, [[Bhaskara II]] (1114–1185) derived the general solution using completing the square, a method that later appeared in the works of [[Leonhard Euler]] (1707–1783) and [[Carl Friedrich Gauss]] (1777–1855).</p>

  <h4><strong>Fundamental Concepts</strong></h4>

  <h5>1. <strong>Discriminant (Δ)</strong></h5>
  <p>The discriminant is defined as <strong>Δ = b² – 4ac</strong>. Its sign determines the nature of the roots:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <tr style="background:#f0f0f0;">
      <th style="border:1px solid #ccc; padding:6px;">Δ</th>
      <th style="border:1px solid #ccc; padding:6px;">Nature of Roots</th>
      <th style="border:1px solid #ccc; padding:6px;">Root Form</th>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:6px;">Δ &gt; 0</td>
      <td style="border:1px solid #ccc; padding:6px;">Two distinct real roots</td>
      <td style="border:1px solid #ccc; padding:6px;"><strong>x₁ = \frac{-b + \sqrt{Δ}}{2a},\; x₂ = \frac{-b - \sqrt{Δ}}{2a}</strong></td>
    </tr>
    <tr style="background:#f9f9f9;">
      <td style="border:1px solid #ccc; padding:6px;">Δ = 0</td>
      <td style="border:1px solid #ccc; padding:6px;">Real and equal (repeated) root</td>
      <td style="border:1px solid #ccc; padding:6px;"><strong>x₁ = x₂ = -\frac{b}{2a}</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:6px;">Δ &lt; 0</td>
      <td style="border:1px solid #ccc; padding:6px;">Two distinct complex conjugate roots</td>
      <td style="border:1px solid #ccc; padding:6px;"><strong>x₁ = \frac{-b}{2a} + i\frac{\sqrt{-Δ}}{2a},\; x₂ = \frac{-b}{2a} - i\frac{\sqrt{-Δ}}{2a}</strong></td>
    </tr>
  </table>

  <h5>2. <strong>Sum and Product of Roots (Vieta’s Relations)</strong></h5>
  <p>For roots <strong>α</strong> and <strong>β</strong> of <strong>ax² + bx + c = 0</strong>:</p>
  <ul>
    <li><strong>α + β = -\frac{b}{a}</strong> (sum of roots)</li>
    <li><strong>αβ = \frac{c}{a}</strong> (product of roots)</li>
  </ul>
  <p>These relations, often called <strong>Vieta’s formulas</strong>, are indispensable for problems that ask for expressions involving roots without explicitly solving the equation.</p>

  <h4><strong>Solution Techniques</strong></h4>

  <h5>1. <strong>Factorisation</strong></h5>
  <p>When the quadratic can be expressed as <strong>(px + q)(rx + s) = 0</strong>, the roots are obtained directly as <strong>-q/p</strong> and <strong>-s/r</strong>. This method works best when the coefficients are integers and the discriminant is a perfect square.</p>

  <h5>2. <strong>Completing the Square</strong></h5>
  <p>The procedure rewrites <strong>ax² + bx + c</strong> into a perfect square plus a constant:</p>
  <ol>
    <li>Divide the entire equation by <strong>a</strong> (if <strong>a ≠ 1</strong>).</li>
    <li>Move the constant term to the right‑hand side.</li>
    <li>Add <strong>(b/2a)²</strong> to both sides to obtain <strong>(x + b/2a)² = (b² – 4ac)/4a²</strong>.</li>
    <li>Take square roots and solve for <strong>x</strong>.</li>
  </ol>
  <p>This technique underlies the derivation of the <strong>quadratic formula</strong> and is also useful in geometric contexts (e.g., finding the vertex of a parabola).</p>

  <h5>3. <strong>Quadratic Formula</strong></h5>
  <p>Derived from completing the square, the formula provides a universal solution:</p>
  <p><strong>x = \frac{-b \pm \sqrt{b^{2} - 4ac}}{2a}</strong></p>
  <p>It remains the most reliable method for competitive exams because it works for any real or complex coefficients.</p>

  <h5>4. <strong>Graphical Interpretation</strong></h5>
  <p>The graph of <strong>y = ax² + bx + c</strong> is a parabola. The discriminant indicates the intersection with the <strong>x‑axis</strong>:</p>
  <ul>
    <li>Δ &gt; 0 → two distinct intersection points.</li>
    <li>Δ = 0 → tangent (single point of contact).</li>
    <li>Δ &lt; 0 → no real intersection (parabola lies entirely above or below the axis).</li>
  </ul>
  <p>The vertex coordinates are <strong>(-b/2a,\, c - b²/4a)</strong>. Knowledge of the vertex is valuable for optimisation questions.</p>

  <h4><strong>Special Cases & Transformations</strong></h4>

  <ul>
    <li><strong>Missing Linear Term (b = 0)</strong>: Equation reduces to <strong>ax² + c = 0</strong>. Roots are <strong>±\sqrt{-c/a}</strong> (real if <strong>ac &lt; 0</strong>, otherwise imaginary).</li>
    <li><strong>Missing Constant Term (c = 0)</strong>: Equation factorises as <strong>x(ax + b) = 0</strong>, yielding roots <strong>0</strong> and <strong>-b/a</strong>.</li>
    <li><strong>Pure Quadratic (a = 1, b = 0)</strong>: Simplifies to <strong>x² = -c</strong>, directly giving <strong>x = ±i\sqrt{c}</strong> for positive <strong>c</strong>.</li>
    <li><strong>Reciprocal Quadratic</strong>: If the equation is symmetric in <strong>x</strong> and <strong>1/x</strong>, substitution <strong>y = x + 1/x</strong> can reduce it to a linear equation in <strong>y</strong>.</li>
  </ul>

  <h4><strong>Quadratic Equations in the Complex Plane</strong></h4>
  <p>When Δ < 0, the roots are complex conjugates. Represent them as <strong>α = p + iq</strong> and <strong>β = p - iq</strong>, where:</p>
  <ul>
    <li><strong>p = -\frac{b}{2a}</strong> (real part)</li>
    <li><strong>q = \frac{\sqrt{-Δ}}{2a}</strong> (imaginary part)</li>
  </ul>
  <p>These points can be visualised on the <strong>Argand diagram</strong>. The modulus of each root is <strong>\sqrt{p^{2} + q^{2}} = \sqrt{\frac{c}{a}}</strong>, linking back to Vieta’s product relation.</p>

  <h4><strong>Parametric Quadratics & Applications</strong></h4>
  <p>Many competitive‑exam problems introduce a parameter <strong>k</strong> into the coefficients, e.g., <strong>ax² + (k-3)x + (2k+5) = 0</strong>. Typical tasks:</p>
  <ul>
    <li>Find the range of <strong>k</strong> for which the equation has real roots (<strong>Δ ≥ 0</strong>).</li>
    <li>Determine <strong>k</strong> such that the sum or product of roots satisfies a given condition.</li>
    <li>Identify values of <strong>k</strong> that make the roots rational, integral, or equal.</li>
  </ul>
  <p>Solving these requires algebraic manipulation of the discriminant and Vieta’s formulas, often leading to quadratic inequalities in <strong>k</strong>.</p>

  <h4><strong>Advanced Topics Relevant to Defence Exams</strong></h4>

  <h5>1. <strong>Quadratic Residues Modulo p</strong></h5>
  <p>For a prime <strong>p</strong>, an integer <strong>a</strong> is a quadratic residue if the congruence <strong>x² ≡ a (mod p)</strong> has a solution. The Legendre symbol <strong>(a/p)</strong> equals <strong>1</strong> for residues, <strong>-1</strong> for non‑residues, and <strong>0</strong> if <strong>p | a</strong>. This concept appears in cryptographic questions (e.g., RSA).</p>

  <h5>2. <strong>Newton’s Method for Approximating Roots</strong></h5>
  <p>Given an initial guess <strong>x₀</strong>, the iteration <strong>x_{n+1} = x_n - \frac{ax_n² + bx_n + c}{2ax_n + b}</strong> converges quadratically to a real root, provided the derivative does not vanish. Knowledge of convergence criteria can earn extra marks in analytical problems.</p>

  <h5>3. <strong>Resultant and Elimination</strong></h5>
  <p>The resultant of two quadratics <strong>f(x)</strong> and <strong>g(x)</strong> eliminates the variable, yielding a condition for common roots. For <strong>f(x) = a₁x² + b₁x + c₁</strong> and <strong>g(x) = a₂x² + b₂x + c₂</strong>, the resultant is the determinant of the Sylvester matrix. A zero resultant indicates a shared root, a concept useful in system‑of‑equations problems.</p>

  <h5>4. <strong>Complex Conjugate Root Theorem</strong></h5>
  <p>For polynomials with real coefficients, non‑real roots occur in conjugate pairs. Hence, if <strong>α = p + iq</strong> is a root, <strong>α̅ = p - iq</strong> must also be a root. This theorem justifies the symmetric form of complex roots in the discriminant table above.</p>

  <h5>5. <strong>Transformation to Depressed Quadratic</strong></h5>
  <p>Setting <strong>x = y - \frac{b}{2a}</strong> eliminates the linear term, converting <strong>ax² + bx + c = 0</strong> into the “depressed” form <strong>y² + py + q = 0</strong>, where <strong>p = \frac{4ac - b²}{4a²}</strong> and <strong>q = \frac{b³ - 4abc}{8a³}</strong>. This is the starting point for Cardano’s method for cubic equations, showing the relevance of quadratics beyond their immediate scope.</p>

  <h4><strong>Common Pitfalls & Quick Checks</strong></h4>
  <ul>
    <li>Never forget to verify that <strong>a ≠ 0</strong>; otherwise the equation is linear.</li>
    <li>When Δ is a perfect square, the roots are rational; otherwise they may be irrational or complex.</li>
    <li>Always reduce fractions after applying the quadratic formula to avoid arithmetic errors.</li>
    <li>For parametric problems, treat the discriminant as a quadratic in the parameter and apply the appropriate inequality sign.</li>
    <li>Remember that the product of the roots being negative implies opposite signs, a useful shortcut for sign‑analysis questions.</li>
  </ul>

  <h4><strong>Key Formula Summary</strong></h4>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <tr style="background:#e0e0e0;">
      <th style="border:1px solid #bbb; padding:6px;">Concept</th>
      <th style="border:1px solid #bbb; padding:6px;">Expression</th>
    </tr>
    <tr>
      <td style="border:1px solid #bbb; padding:6px;"><strong>Discriminant</strong></td>
      <td style="border:1px solid #bbb; padding:6px;"><strong>Δ = b² – 4ac</strong></td>
    </tr>
    <tr style="background:#f5f5f5;">
      <td style="border:1px solid #bbb; padding:6px;"><strong>Roots (General)</strong></td>
      <td style="border:1px solid #bbb; padding:6px;"><strong>x = \frac{-b \pm \sqrt{Δ}}{2a}</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #bbb; padding:6px;"><strong>Sum of Roots</strong></td>
      <td style="border:1px solid #bbb; padding:6px;"><strong>α + β = -\frac{b}{a}</strong></td>
    </tr>
    <tr style="background:#f5f5f5;">
      <td style="border:1px solid #bbb; padding:6px;"><strong>Product of Roots</strong></td>
      <td style="border:1px solid #bbb; padding:6px;"><strong>αβ = \frac{c}{a}</strong></td>
    </tr>
    <tr>
      <td style="border:1px solid #bbb; padding:6px;"><strong>Vertex (h, k)</strong></td>
      <td style="border:1px solid #bbb; padding:6px;"><strong>h = -\frac{b}{2a},\; k = c - \frac{b²}{4a}</strong></td>
    </tr>
    <tr style="background:#f5f5f5;">
      <td style="border:1px solid #bbb; padding:6px;"><strong>Depressed Quadratic</strong></td>
      <td style="border:1px solid #bbb; padding:6px;"><strong>y² + py + q = 0,\; x = y - \frac{b}{2a}</strong></td>
    </tr>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Δ = b² – 4ac decides the nature of roots: >0 → two real, =0 → equal, <0 → complex conjugates.</li>
      <li>For <strong>ax² + bx + c = 0</strong>, sum of roots = –b/a and product = c/a (Vieta’s formulas).</li>
      <li>If the constant term <strong>c = 0</strong>, one root is always <strong>0</strong> and the other is –b/a.</li>
      <li>When Δ is a perfect square, the roots are rational (useful for quick checks).</li>
      <li>Quadratic with missing linear term (<strong>b = 0</strong>) gives roots ±√(–c/a).</li>
      <li>In parametric quadratics, set Δ ≥ 0 and solve the resulting inequality in the parameter.</li>
      <li>Complex roots appear as conjugate pairs; their modulus squared equals c/a.</li>
      <li>Vertex of the parabola y = ax² + bx + c is (–b/2a, c – b²/4a); this point gives the minimum/maximum value.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["complex-numbers"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Complex Numbers
  </h3>

  <h4>1. Historical Evolution</h4>
  <p><strong>Gerolamo Cardano</strong> (1501‑1576) first encountered square roots of negative numbers while solving cubic equations, but he regarded them as “impossible”. The systematic treatment began with <strong>Rafael Bombelli</strong> (1526‑1572) in his 1572 work *Algebra*, where he introduced the notation <em>i</em> for √‑1 and gave rules for addition and multiplication. Later, <strong>Leonhard Euler</strong> (1707‑1783) connected complex numbers with trigonometry through <strong>Euler’s Formula</strong> (e<sup>iθ</sup> = cos θ + i sin θ) in 1748. <strong>Carl Friedrich Gauss</strong> (1777‑1855) formalised the geometric interpretation (Argand‑Gauss plane) and proved the <[[Fundamental Theorem of Algebra]]> in 1799, establishing that every non‑constant polynomial has at least one complex root.</p>

  <h4>2. Definition & Standard (Algebraic) Form</h4>
  <p>A <strong>complex number</strong> is an ordered pair (a, b) with real components a, b ∈ ℝ, denoted as <strong>a + i b</strong>. Here <em>i</em> satisfies <strong>i² = –1</strong>. The quantity a is called the <strong>real part</strong> (<strong>Re z</strong>), and b is the <strong>imaginary part</strong> (<strong>Im z</strong>).</p>

  <h4>3. Modulus (Absolute Value) and Argument</h4>
  <ul>
    <li><strong>Modulus (|z|)</strong>:   |z| = √(a² + b²). Geometrically, it is the distance of the point (a, b) from the origin in the Argand plane.</li>
    <li><strong>Argument (arg z)</strong>:   The angle θ measured from the positive real axis to the line joining the origin to (a, b). Principal value is taken in (–π, π].</li>
    <li>Relation:   a = |z| cos θ, b = |z| sin θ.</li>
  </ul>

  <h4>4. Polar (Trigonometric) Form</h4>
  <p>Using modulus r = |z| and argument θ, a complex number can be written as:</p>
  <p><strong>z = r (cos θ + i sin θ)</strong></p>
  <p>Euler’s compact notation yields:</p>
  <p><strong>z = r e^{iθ}</strong></p>

  <h4>5. Conversion Between Algebraic and Polar Forms</h4>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width:100%; margin-top:10px;">
    <tr style="background:#2a2a3a;">
      <th style="color:#fff;">From</th>
      <th style="color:#fff;">To</th>
      <th style="color:#fff;">Formula</th>
    </tr>
    <tr>
      <td><strong>a + i b</strong></td>
      <td>Polar</td>
      <td><strong>r = √(a²+b²), θ = atan2(b,a)</strong></td>
    </tr>
    <tr>
      <td>Polar (<strong>r e^{iθ}</strong>)</td>
      <td>Algebraic</td>
      <td><strong>a = r cos θ, b = r sin θ</strong></td>
    </tr>
  </table>

  <h4>6. Fundamental Algebraic Operations</h4>
  <ul>
    <li><strong>Addition</strong>: (a + i b) + (c + i d) = (a + c) + i(b + d).</li>
    <li><strong>Subtraction</strong>: (a + i b) – (c + i d) = (a – c) + i(b – d).</li>
    <li><strong>Multiplication</strong>: (a + i b)(c + i d) = (ac – bd) + i(ad + bc).</li>
    <li><strong>Division</strong>: (a + i b)/(c + i d) = [(ac + bd) + i(bc – ad)] / (c² + d²).</li>
    <li><strong>Conjugation</strong>: The conjugate of z = a + i b is \(\overline{z}=a‑i b\). Properties: z·\(\overline{z}\)=|z|², \(\overline{z_1+z_2}=\overline{z_1}+\overline{z_2}\), \(\overline{z_1z_2}=\overline{z_1}\,\overline{z_2}\).</li>
  </ul>

  <h4>7. Powers and Roots – De Moivre’s Theorem</h4>
  <p><strong>De Moivre’s Theorem</strong> (1666) states that for any integer n:</p>
  <p><strong>(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ</strong></p>
  <p>In exponential form:</p>
  <p><strong>(r e^{iθ})ⁿ = rⁿ e^{i nθ}</strong></p>
  <p>This theorem is the cornerstone for computing <strong>n<sup>th</sup> roots of a complex number</strong>. The n distinct roots of z = r e^{iθ} are:</p>
  <p><strong>z_k = r^{1/n} e^{i(θ+2πk)/n}, k = 0,1,…,n‑1</strong></p>
  <p>These roots lie on a circle of radius r^{1/n} and are equally spaced (forming a regular n‑gon) – a fact useful in geometry and signal processing.</p>

  <h4>8. Roots of Unity</h4>
  <p>The solutions of xⁿ = 1 are the <strong>n<sup>th</sup> roots of unity</strong>. They are given by:</p>
  <p><strong>ω_k = e^{2π i k / n}, k = 0,1,…,n‑1</strong></p>
  <ul>
    <li>All roots lie on the unit circle (|ω_k| = 1).</li>
    <li>Sum of all n‑th roots of unity = 0.</li>
    <li>Important in discrete Fourier transform (DFT) and cyclic group theory.</li>
  </ul>

  <h4>9. Polynomial Factorisation Using Complex Numbers</h4>
  <p>Because of the <[[Fundamental Theorem of Algebra]]>, any polynomial P(x) of degree n can be expressed as:</p>
  <p><strong>P(x) = a_n (x‑z₁)(x‑z₂)…(x‑z_n)</strong></p>
  <p>where each z_i is a (possibly repeated) complex root. Real coefficients guarantee that non‑real roots occur in conjugate pairs.</p>

  <h4>10. Important Identities and Theorems</h4>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width:100%; margin-top:10px;">
    <tr style="background:#2a2a3a;">
      <th style="color:#fff;">Identity / Theorem</th>
      <th style="color:#fff;">Statement</th>
    </tr>
    <tr>
      <td><strong>Euler’s Formula (1748)</strong></td>
      <td>e^{iθ}=cos θ + i sin θ</td>
    </tr>
    <tr>
      <td><strong>De Moivre’s Theorem (1666)</strong></td>
      <td>(cos θ + i sin θ)ⁿ = cos nθ + i sin nθ</td>
    </tr>
    <tr>
      <td><strong>Conjugate Multiplication</strong></td>
      <td>z·\(\overline{z}\) = a² + b² = |z|²</td>
    </tr>
    <tr>
      <td><strong>Modulus Multiplication</strong></td>
      <td>|z₁z₂| = |z₁|·|z₂|</td>
    </tr>
    <tr>
      <td><strong>Argument Addition</strong></td>
      <td>arg(z₁z₂) = arg(z₁) + arg(z₂) (mod 2π)</td>
    </tr>
    <tr>
      <td><strong>Gauss’s Lemma (1832)</strong></td>
      <td>If a polynomial with integer coefficients is reducible over ℚ, then it is reducible over ℤ.</td>
    </tr>
  </table>

  <h4>11. Applications in Defence‑Oriented Problems</h4>
  <ul>
    <li><strong>Signal Processing</strong>: Complex exponentials model sinusoidal waveforms; roots of unity underpin the <[[Discrete Fourier Transform]]> used in radar and communication.</li>
    <li><strong>Control Systems</strong>: Characteristic equations of linear time‑invariant (LTI) systems often yield complex poles; stability criteria (e.g., Routh‑Hurwitz) require knowledge of real and imaginary parts.</li>
    <li><strong>Navigation & Ballistics</strong>: Complex numbers simplify rotation of vectors in two‑dimensional plane, useful for trajectory corrections.</li>
    <li><strong>Quantum Mechanics</strong>: State vectors are complex; understanding of modulus and phase is essential for probability amplitudes.</li>
  </ul>

  <h4>12. Common Pitfalls & Tips for Quick Computation</h4>
  <ul>
    <li>Always rationalise denominators by multiplying numerator and denominator by the conjugate of the denominator.</li>
    <li>When finding powers, convert to polar form first; exponentiation becomes a simple multiplication of arguments.</li>
    <li>Remember the principal value of argument lies in (–π, π]; for exam questions, adjust using 2πk if required.</li>
    <li>For quadratic equations with negative discriminant, write roots directly as <strong>–b/2a ± i√(|Δ|)/2a</strong>.</li>
  </ul>

  <h4>13. Summary of Notations</h4>
  <ul>
    <li><strong>z</strong> – generic complex number.</li>
    <li><strong>i</strong> – imaginary unit, i² = –1.</li>
    <li><strong>Re z, Im z</strong> – real and imaginary parts.</li>
    <li><strong>|z|</strong> – modulus (absolute value).</li>
    <li><strong>arg z</strong> – principal argument.</li>
    <li><strong>\(\overline{z}\)</strong> – complex conjugate.</li>
    <li><strong>e^{iθ}</strong> – Euler’s exponential form.</li>
    <li><strong>ω_k</strong> – n‑th root of unity.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Modulus of a complex number <strong>a + i b</strong> is √(a² + b²); its square equals the product with its conjugate.</li>
      <li>Euler’s formula <strong>e^{iθ}=cos θ+i sin θ</strong> converts between exponential and trigonometric forms instantly.</li>
      <li>For any integer n, <strong>(cos θ+i sin θ)ⁿ = cos nθ + i sin nθ</strong> (De Moivre’s theorem).</li>
      <li>The n distinct <strong>n‑th roots of unity</strong> are <strong>e^{2π i k/n}</strong>, k=0…n‑1, and sum to zero.</li>
      <li>Quadratic equations with negative discriminant give complex roots: <strong>–b/2a ± i√(|Δ|)/2a</strong>.</li>
      <li>Complex conjugate multiplication yields a real number: <strong>z·\(\overline{z}\)=|z|²</strong>.</li>
      <li>When dividing, always multiply numerator and denominator by the conjugate of the denominator to rationalise.</li>
      <li>Non‑real roots of a polynomial with real coefficients always appear in conjugate pairs.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["straight-lines"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Straight Lines
  </h3>

  <h4><strong>Fundamental Concepts in the [[Cartesian coordinate system]]</strong></h4>
  <p>The study of straight lines in coordinate geometry begins with the representation of a point as an ordered pair <strong>(x, y)</strong> in two dimensions or as a triple <strong>(x, y, z)</strong> in three dimensions. The basic quantities that govern line theory are:</p>
  <ul>
    <li><strong>Slope (m)</strong> – defined in 2‑D as <strong>m = (y_2 - y_1)/(x_2 - x_1)</strong> provided <strong>x_2 ≠ x_1</strong>. In 3‑D, the concept of a single slope is replaced by a set of direction ratios.</li>
    <li><strong>Direction Ratios (a, b, c)</strong> – any non‑zero triple proportional to the direction cosines of a line in 3‑D.</li>
    <li><strong>Direction Cosines (l, m, n)</strong> – satisfy <strong>l² + m² + n² = 1</strong> and are the cosines of the angles made by the line with the positive axes.</li>
    <li><strong>Intercepts</strong> – where a line cuts the coordinate axes; the x‑intercept is <strong>a</strong> when <strong>y = 0</strong>, the y‑intercept is <strong>b</strong> when <strong>x = 0</strong>, and analogously for the z‑intercept in 3‑D.</li>
  </ul>

  <h4><strong>Equations of a Straight Line in 2‑D</strong></h4>
  <p>There are four principal forms, each useful for specific types of problems.</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <tr style="background:#2a2a3a;">
      <th style="padding:8px; border:1px solid #444;">Form</th>
      <th style="padding:8px; border:1px solid #444;">Expression</th>
      <th style="padding:8px; border:1px solid #444;">Typical Use</th>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;"><strong>Slope‑Intercept Form</strong></td>
      <td style="padding:8px; border:1px solid #444;"><strong>y = mx + c</strong></td>
      <td style="padding:8px; border:1px solid #444;">When the slope <strong>m</strong> and y‑intercept <strong>c</strong> are known.</td>
    </tr>
    <tr style="background:#1e1e2b;">
      <td style="padding:8px; border:1px solid #444;"><strong>Point‑Slope Form</strong></td>
      <td style="padding:8px; border:1px solid #444;"><strong>y - y₁ = m(x - x₁)</strong></td>
      <td style="padding:8px; border:1px solid #444;">When a point <strong>(x₁, y₁)</strong> and slope <strong>m</strong> are given.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;"><strong>Two‑Point Form</strong></td>
      <td style="padding:8px; border:1px solid #444;"><strong>(y - y₁)/(x - x₁) = (y₂ - y₁)/(x₂ - x₁)</strong></td>
      <td style="padding:8px; border:1px solid #444;">When two distinct points <strong>(x₁, y₁)</strong> and <strong>(x₂, y₂)</strong> are known.</td>
    </tr>
    <tr style="background:#1e1e2b;">
      <td style="padding:8px; border:1px solid #444;"><strong>General (Normal) Form</strong></td>
      <td style="padding:8px; border:1px solid #444;"><strong>Ax + By + C = 0</strong></td>
      <td style="padding:8px; border:1px solid #444;">Useful for distance calculations and for expressing perpendicularity conditions.</td>
    </tr>
  </table>

  <h4><strong>Key Properties in 2‑D</strong></h4>
  <ul>
    <li><strong>Parallelism</strong>: Two lines <strong>Ax + By + C = 0</strong> and <strong>A'x + B'y + C' = 0</strong> are parallel iff <strong>A/B = A'/B'</strong> (provided neither denominator is zero) or equivalently <strong>AB' - A'B = 0</strong>.</li>
    <li><strong>Perpendicularity</strong>: Lines are perpendicular iff <strong>AA' + BB' = 0</strong>. In slope form, this reduces to <strong>m₁·m₂ = -1</strong> (excluding vertical/horizontal cases).</li>
    <li><strong>Angle Between Two Lines</strong>: Given slopes <strong>m₁, m₂</strong>, the acute angle <strong>θ</strong> satisfies <strong>tan θ = |(m₂ - m₁)/(1 + m₁m₂)|</strong>. For general forms, <strong>tan θ = |(A₁B₂ - A₂B₁)/(A₁A₂ + B₁B₂)|</strong>.</li>
    <li><strong>Distance from a Point to a Line</strong>: For point <strong>(x₀, y₀)</strong> and line <strong>Ax + By + C = 0</strong>, distance <strong>d = |Ax₀ + By₀ + C| / √(A² + B²)</strong>.</li>
    <li><strong>Foot of Perpendicular</strong>: Coordinates of the perpendicular dropped from <strong>(x₀, y₀)</strong> onto <strong>Ax + By + C = 0</strong> are 
      <br><strong>(x', y') = (x₀ - A·d·(A/√(A²+B²)), y₀ - B·d·(B/√(A²+B²)))</strong> where <strong>d</strong> is as above, or directly using the formula 
      <br><strong(x' = (B(Bx₀ - Ay₀) - AC) / (A² + B²), y' = (A(Ay₀ - Bx₀) - BC) / (A² + B²)</strong>.</li>
  </ul>

  <h4><strong>Collinearity and Section Formulae (2‑D)</strong></h4>
  <p>Three points <strong>(x₁, y₁)</strong>, <strong>(x₂, y₂)</strong>, <strong>(x₃, y₃)</strong> are collinear iff the area of the triangle they form is zero, i.e., <strong>(x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)) = 0</strong>. This can also be expressed as the ratio of slopes being equal.</p>
  <ul>
    <li><strong>Internal Division</strong> – The point dividing the segment joining <strong>P₁(x₁, y₁)</strong> and <strong>P₂(x₂, y₂)</strong> in the ratio <strong>m:n</strong> (internally) has coordinates 
      <br><strong>((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n))</strong>.</li>
    <li><strong>External Division</strong> – For external division in the same ratio, the coordinates become 
      <br><strong>((mx₂ - nx₁)/(m - n), (my₂ - ny₁)/(m - n))</strong>, provided <strong>m ≠ n</strong>.</li>
  </ul>

  <h4><strong>Equations of a Straight Line in 3‑D</strong></h4>
  <p>In three dimensions, a line cannot be represented by a single linear equation; instead, we use a pair of linear equations or vector‑parametric forms.</p>

  <h5><strong>Vector (Parametric) Form</strong></h5>
  <p>Given a point <strong>A(x₁, y₁, z₁)</strong> and direction ratios <strong>(a, b, c)</strong>, the line <strong>ℓ</strong> is expressed as:</p>
  <ul>
    <li><strong>r = a₀ + λ·d</strong> where <strong>r = (x, y, z)</strong>, <strong>a₀ = (x₁, y₁, z₁)</strong>, and <strong>d = (a, b, c)</strong> is the direction vector.</li>
    <li>Component‑wise: <strong>x = x₁ + λa, y = y₁ + λb, z = z₁ + λc</strong>.</li>
  </ul>

  <h5><strong>Symmetric Form</strong></h5>
  <p>Eliminating the parameter <strong>λ</strong> yields the symmetric equations:</p>
  <p><strong>(x - x₁)/a = (y - y₁)/b = (z - z₁)/c</strong>, provided none of <strong>a, b, c</strong> are zero. If a component is zero, the corresponding coordinate remains constant (e.g., <strong>x = x₁</strong> when <strong>a = 0</strong>).</p>

  <h5><strong>Pair of Linear Equations</strong></h5>
  <p>Alternatively, a line can be defined as the intersection of two planes:</p>
  <ul>
    <li><strong>A₁x + B₁y + C₁z + D₁ = 0</strong></li>
    <li><strong>A₂x + B₂y + C₂z + D₂ = 0</strong></li>
  </ul>
  <p>The normals of these planes are not parallel; their cross product gives the direction vector of the line.</p>

  <h4><strong>Fundamental Relations in 3‑D</strong></h4>
  <ul>
    <li><strong>Angle Between Two Lines</strong>: If direction ratios of the lines are <strong>(a₁, b₁, c₁)</strong> and <strong>(a₂, b₂, c₂)</strong>, the acute angle <strong>θ</strong> satisfies 
      <br><strong>cos θ = |a₁a₂ + b₁b₂ + c₁c₂| / (√(a₁² + b₁² + c₁²)·√(a₂² + b₂² + c₂²))</strong>, i.e., the absolute value of the dot product divided by the product of magnitudes.</li>
    <li><strong>Parallelism</strong>: Two lines are parallel iff their direction ratios are proportional, i.e., <strong>a₁:b₁:c₁ = a₂:b₂:c₂</strong>.</li>
    <li><strong>Perpendicularity</strong>: Two lines are perpendicular iff the dot product of their direction vectors is zero: <strong>a₁a₂ + b₁b₂ + c₁c₂ = 0</strong>.</li>
    <li><strong>Skew Lines</strong>: Lines that are neither intersecting nor parallel. The shortest distance <strong>d</strong> between skew lines ℓ₁ and ℓ₂ can be found using the scalar triple product:
      <br><strong>d = |(a₁, b₁, c₁)·((a₂, b₂, c₂) × (P₂ - P₁))| / |(a₁, b₁, c₁) × (a₂, b₂, c₂)|</strong>,
      where <strong>P₁, P₂</strong> are points on ℓ₁ and ℓ₂ respectively.</li>
    <li><strong>Distance from a Point to a Line (3‑D)</strong>: For point <strong>P₀(x₀, y₀, z₀)</strong> and line with point <strong>A(x₁, y₁, z₁)</strong> and direction vector <strong>d = (a, b, c)</strong>,
      <br><strong>d = |(AP₀ × d)| / |d|</strong>, where <strong>AP₀ = (x₀ - x₁, y₀ - y₁, z₀ - z₁)</strong>.</li>
  </ul>

  <h4><strong>Special Cases and Useful Transformations</strong></h4>
  <ul>
    <li><strong>Vertical and Horizontal Lines (2‑D)</strong>: A vertical line has an undefined slope and is expressed as <strong>x = k</strong>. A horizontal line has slope zero and takes the form <strong>y = k</strong>.</li>
    <li><strong>Conversion Between Forms</strong>:
      <ul>
        <li>From <strong>y = mx + c</strong> to <strong>Ax + By + C = 0</strong>: set <strong>A = -m, B = 1, C = -c</strong>.</li>
        <li>From two‑point form to general form: cross‑multiply and rearrange to obtain <strong>Ax + By + C = 0</strong>.</li>
      </ul>
    </li>
    <li><strong>Collinearity Test Using Determinants</strong>: For points <strong>P₁, P₂, P₃</strong>, the determinant 
      <br><strong>⎡x₁ y₁ 1⎤
          ⎢x₂ y₂ 1⎥ = 0
          ⎣x₃ y₃ 1⎦</strong>
      must vanish.</li>
    <li><strong>Projection of a Vector onto a Line</strong>: Given a vector <strong>v</strong> and line direction vector <strong>d</strong>,
      <br><strong>projₗ(v) = (v·d / d·d)·d</strong>.</li>
  </ul>

  <h4><strong>Representative Problems and Their Solution Strategies</strong></h4>
  <p>While the notes avoid explicit MCQs, understanding the standard problem‑solving patterns is essential for the NDA, CDS, and AFCAT examinations.</p>
  <ul>
    <li><strong>Finding the Equation of a Line Passing Through Two Given Points</strong>: Use the two‑point form or compute the slope first, then adopt the point‑slope form.</li>
    <li><strong>Determining Whether Two Lines are Perpendicular</strong>: Compute slopes (if not vertical/horizontal) and verify <strong>m₁·m₂ = -1</strong>, or use the dot‑product condition in 3‑D.</li>
    <li><strong>Distance Between Two Parallel Lines</strong>: For lines <strong>Ax + By + C₁ = 0</strong> and <strong>Ax + By + C₂ = 0</strong>, distance is 
      <br><strong>|C₂ - C₁| / √(A² + B²)</strong>.</li>
    <li><strong>Shortest Distance Between Skew Lines</strong>: Apply the scalar triple product formula shown earlier; ensure the direction vectors are not parallel.</li>
    <li><strong>Foot of Perpendicular from a Point to a Given Line</strong>: Use the distance formula to find <strong>d</strong>, then substitute back into the parametric equation to locate the foot.</li>
  </ul>

  <h4><strong>Key Theorems and Proof Sketches</strong></h4>
  <ul>
    <li><strong>Perpendicular Distance Formula (2‑D)</strong> – Derived by dropping a perpendicular from the point to the line and employing similar triangles or the area of a triangle formula <strong>½·base·height = |Ax₀ + By₀ + C|/2</strong>.</li>
    <li><strong>Scalar Triple Product for Skew Lines</strong> – The magnitude of the scalar triple product gives the volume of the parallelepiped formed by the two direction vectors and the vector connecting any point on one line to any point on the other; dividing by the area of the base (the magnitude of the cross product) yields the height, which is the shortest distance.</li>
    <li><strong>Direction Cosines Relation</strong> – Since direction cosines are the cosines of the angles with the axes, the sum of their squares equals one, a direct consequence of the unit vector definition.</li>
  </ul>

  <h4><strong>Common Pitfalls and How to Avoid Them</strong></h4>
  <ul>
    <li>Confusing the normal form <strong>Ax + By + C = 0</strong> with the slope‑intercept form; always verify by rearranging before applying formulas.</li>
    <li>Neglecting the case of vertical lines when using the slope formula; remember to switch to the form <strong>x = k</strong>.</li>
    <li>In 3‑D, forgetting that a single linear equation cannot represent a line; always pair it with another independent plane equation.</li>
    <li>When computing the angle between lines, ensure you use the absolute value in the cosine expression to obtain the acute angle required for most exam questions.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Distance from point <strong>(x₀, y₀)</strong> to line <strong>Ax + By + C = 0</strong> = <strong>|Ax₀ + By₀ + C| / √(A² + B²)</strong>.</li>
      <li>Two lines <strong>Ax + By + C = 0</strong> and <strong>A'x + B'y + C' = 0</strong> are parallel iff <strong>AB' - A'B = 0</strong>.</li>
      <li>Perpendicularity condition in 2‑D: <strong>AA' + BB' = 0</strong> (or <strong>m₁·m₂ = -1</strong>).</li>
      <li>In 3‑D, shortest distance between skew lines = <strong>|(a₁, b₁, c₁)·((a₂, b₂, c₂) × (P₂ - P₁))| / |(a₁, b₁, c₁) × (a₂, b₂, c₂)|</strong>.</li>
      <li>Direction cosines satisfy <strong>l² + m² + n² = 1</strong>; useful for converting between ratios and angles.</li>
      <li>Equation of a line through points <strong>(x₁, y₁)</strong> and <strong>(x₂, y₂)</strong> in symmetric form: <strong>(x - x₁)/(x₂ - x₁) = (y - y₁)/(y₂ - y₁)</strong>.</li>
      <li>For a line in 3‑D, symmetric form <strong>(x - x₁)/a = (y - y₁)/b = (z - z₁)/c</strong> is invalid if any denominator is zero; use the constant coordinate method instead.</li>
      <li>Collinearity test using determinant: <strong>⎡x₁ y₁ 1⎤
          ⎢x₂ y₂ 1⎥ = 0
          ⎣x₃ y₃ 1⎦</strong>.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["central-tendency"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Measures of Central Tendency
  </h3>

  <h4 style="color: var(--accent); margin-top: 20px;">1. Introduction – Why Central Tendency Matters for Defence Exams</h4>
  <p>In the context of the Indian Defence entrance examinations (<strong>NDA</strong>, <strong>CDS</strong>, <strong>AFCAT</strong>), the ability to quickly summarise a data set with a single representative value is decisive. Central tendency measures condense large volumes of quantitative information – such as scores of pilot aptitude tests, weapon‑system reliability data, or demographic statistics of recruitment pools – into a compact figure that can be compared across years, units, or operational theatres. Historically, the discipline of statistics was formalised in the early 19th century when [[Carl Friedrich Gauss]] introduced the method of least squares (1805) and [[Adolphe Quetelet]] coined the term “average man” (1835). Understanding the evolution of these concepts helps anchor the formulas in real‑world context, a strategy often rewarded in essay‑type questions of the defence services.</p>

  <h4 style="color: var(--accent); margin-top: 20px;">2. Classification of Central Tendency Measures</h4>
  <p>Broadly, central tendency is divided into three canonical descriptors:</p>
  <ul style="margin-left: 20px;">
    <li><strong>Mean</strong> – the arithmetic, geometric, or harmonic average of the observations.</li>
    <li><strong>Median</strong> – the middle value when the data are ordered.</li>
    <li><strong>Mode</strong> – the most frequently occurring observation.</li>
  </ul>
  <p>Each of these measures captures a different aspect of the distribution and possesses distinct robustness properties against outliers – a key consideration when analysing battlefield casualty figures or equipment failure rates.</p>

  <h4 style="color: var(--accent); margin-top: 20px;">3. Mean – The Arithmetic, Geometric & Harmonic Averages</h4>
  <p>The <strong>arithmetic mean</strong> (commonly called the “average”) is defined for a set of <em>n</em> observations <strong>x₁, x₂, …, xₙ</strong> as:</p>
  <p style="font-family: monospace; margin-left: 20px;"><strong>\(\displaystyle \bar{x}= \frac{1}{n}\sum_{i=1}^{n}x_i\)</strong></p>
  <p>Key historical notes:</p>
  <ul style="margin-left: 20px;">
    <li>First systematic use by [[Simon Stevin]] in 1586 for the “rule of averages”.</li>
    <li>Formal statistical theory refined by [[Karl Pearson]] in 1896, introducing the concept of “moments”.</li>
  </ul>

  <p>The <strong>geometric mean</strong> is appropriate for multiplicative processes, such as growth rates of aircraft engine thrust or compound interest on military pensions. It is expressed as:</p>
  <p style="font-family: monospace; margin-left: 20px;"><strong>\(\displaystyle G = \left(\prod_{i=1}^{n}x_i\right)^{1/n}\)</strong></p>

  <p>The <strong>harmonic mean</strong> is useful when dealing with rates (e.g., speed, fuel consumption) and is given by:</p>
  <p style="font-family: monospace; margin-left: 20px;"><strong>\(\displaystyle H = \frac{n}{\sum_{i=1}^{n}\frac{1}{x_i}}\)</strong></p>

  <h4 style="color: var(--accent); margin-top: 20px;">4. Median – Position‑Based Central Value</h4>
  <p>The <strong>median</strong> divides the ordered data set into two halves of equal size. For an odd <em>n</em>, the median is the \((n+1)/2\)‑th term; for an even <em>n</em>, it is the average of the \(n/2\)‑th and \((n/2)+1\)‑th terms. Formally:</p>
  <ul style="margin-left: 20px;">
    <li>If <em>n</em> is odd: <strong>Median = \(x_{(n+1)/2}\)</strong></li>
    <li>If <em>n</em> is even: <strong>Median = \(\frac{x_{n/2}+x_{(n/2)+1}}{2}\)</strong></li>
  </ul>
  <p>Median is immune to extreme outliers – a property exploited when summarising casualty figures that may contain a few anomalously high values due to a single major engagement.</p>

  <h4 style="color: var(--accent); margin-top: 20px;">5. Mode – Frequency‑Based Central Value</h4>
  <p>The <strong>mode</strong> is the observation with the highest frequency. Datasets may be:</p>
  <ul style="margin-left: 20px;">
    <li><strong>Unimodal</strong> – a single peak.</li>
    <li><strong>Bimodal</strong> – two distinct peaks, often indicating two underlying sub‑populations (e.g., two distinct fitness levels among cadet applicants).</li>
    <li><strong>Multimodal</strong> – more than two peaks, signalling heterogeneous data.</li>
  </ul>
  <p>In discrete data, the mode can be identified by constructing a frequency table; for continuous data, a histogram or kernel density estimate is employed.</p>

  <h4 style="color: var(--accent); margin-top: 20px;">6. Comparison Table – When to Use Which Measure</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#2a2a3a; color:#fff;">
        <th style="border:1px solid #444; padding:8px;">Measure</th>
        <th style="border:1px solid #444; padding:8px;">Formula</th>
        <th style="border:1px solid #444; padding:8px;">Robustness to Outliers</th>
        <th style="border:1px solid #444; padding:8px;">Typical Use‑Case in Defence Exams</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ccc; padding:8px;"><strong>Arithmetic Mean</strong></td>
        <td style="border:1px solid #ccc; padding:8px;"><strong>\(\displaystyle \bar{x}= \frac{1}{n}\sum x_i\)</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">Low – heavily affected by extreme values</td>
        <td style="border:1px solid #ccc; padding:8px;">Average score of aptitude tests, fuel consumption per sortie</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>Geometric Mean</strong></td>
        <td style="border:1px solid #ccc; padding:8px;"><strong>\(\displaystyle G = \left(\prod x_i\right)^{1/n}\)</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">Medium – less sensitive than arithmetic mean</td>
        <td style="border:1px solid #ccc; padding:8px;">Growth rates of aircraft fleet, compounded logistic scores</td>
      </tr>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ccc; padding:8px;"><strong>Median</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">Positional (see definition)</td>
        <td style="border:1px solid #ccc; padding:8px;">High – resistant to outliers</td>
        <td style="border:1px solid #ccc; padding:8px;">Median age of recruits, median casualty count per operation</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>Mode</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">Most frequent value</td>
        <td style="border:1px solid #ccc; padding:8px;">Variable – depends on data distribution</td>
        <td style="border:1px solid #ccc; padding:8px;">Most common rank, most frequent weapon type in inventory</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: var(--accent); margin-top: 20px;">7. Mathematical Properties & Theoretical Foundations</h4>
  <p>Understanding the underlying theorems helps answer proof‑type questions that frequently appear in the <strong>CDS</strong> written test.</p>
  <ul style="margin-left: 20px;">
    <li><strong>Linearity of Expectation</strong> – The mean of a sum equals the sum of the means, irrespective of independence. Formally, <strong>\(E[X+Y]=E[X]+E[Y]\)</strong>. First proved by [[Jacob Bernoulli]] in 1713 (Law of Large Numbers).</li>
    <li><strong>Chebyshev’s Inequality</strong> (1867) – Provides a bound on the probability that a random variable deviates from its mean: <strong>\(P(|X-\mu|\ge k\sigma)\le\frac{1}{k^{2}}\)</strong>. Useful when the distribution is unknown.</li>
    <li><strong>Central Limit Theorem (CLT)</strong> – Established by [[Pierre‑Simon Laplace]] (1810) and rigorously proved by [[Lévy]] (1908). States that the sampling distribution of the mean tends toward a <strong>Normal distribution</strong> as <em>n</em> → ∞, regardless of the original distribution.</li>
    <li><strong>Law of Large Numbers (LLN)</strong> – Formalised by [[Jacob Bernoulli]] (1713) and refined by [[Émile Borel]] (1909). Guarantees convergence of the sample mean to the population mean with increasing sample size.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 20px;">8. Computation Techniques – Quick Mental Tricks for the Exam Hall</h4>
  <p>Time efficiency is critical. The following shortcuts are widely taught in coaching centres for NDA/CDS/AFCAT:</p>
  <ol style="margin-left: 20px;">
    <li><strong>Grouping Method</strong> – When numbers are in arithmetic progression, pair the first and last, second and second‑last, etc., to compute the sum quickly. Example: Sum of 12 terms from 5 to 56 (common difference 5) → \(12 \times \frac{5+56}{2}=12 \times 30.5=366\).</li>
    <li><strong>Weighted Mean Shortcut</strong> – For data grouped in classes, use <strong>\(\bar{x}= \frac{\sum f_i c_i}{\sum f_i}\)</strong> where \(c_i\) is class midpoint. This eliminates the need for full expansion.</li>
    <li><strong>Median without Sorting</strong> – For an even‑sized data set, the median can be found by locating the \(\frac{n}{2}\)‑th and \(\frac{n}{2}+1\)‑th positions directly if the data are already in a frequency table.</li>
    <li><strong>Mode via Frequency Polygon</strong> – In a grouped data, approximate the mode using <strong>\(L + \frac{(f_m - f_{m-1})}{(2f_m - f_{m-1} - f_{m+1})} \times h\)</strong>, where \(L\) is the lower class boundary, \(h\) the class width, and \(f_m\) the modal frequency.</li>
  </ol>

  <h4 style="color: var(--accent); margin-top: 20px;">9. Applications in Defence‑Related Problems</h4>
  <p>Below are typical problem scenarios where central tendency plays a decisive role:</p>
  <ul style="margin-left: 20px;">
    <li><strong>Weapon Reliability</strong> – Engineers compute the mean time between failures (MTBF) using the arithmetic mean of observed failure intervals.</li>
    <li><strong>Personnel Fitness Scores</strong> – The median score is reported to avoid distortion caused by a few extremely low or high performers.</li>
    <li><strong>Logistics Planning</strong> – Mode of daily fuel consumption helps in stock‑piling decisions for forward operating bases.</li>
    <li><strong>Strategic Survey</strong> – The geometric mean of enemy force strength estimates from multiple intelligence sources yields a balanced central estimate.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 20px;">10. Common Pitfalls & How to Avoid Them</h4>
  <p>Examiners love to test conceptual clarity. The most frequent mistakes include:</p>
  <ul style="margin-left: 20px;">
    <li>Confusing <strong>mean</strong> with <strong>median</strong> in skewed distributions – always examine the shape of the data (right‑skewed ⇒ mean > median).</li>
    <li>Applying the <strong>mode</strong> to continuous data without appropriate class intervals – remember that a true mode exists only for discrete or grouped data.</li>
    <li>Neglecting the effect of outliers on the arithmetic mean – a single extreme value can shift the mean dramatically; use median or trimmed mean in such cases.</li>
    <li>Incorrectly using the geometric mean for data containing negative or zero values – the geometric mean is undefined for non‑positive numbers.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 20px;">11. Historical Milestones in Central Tendency Development</h4>
  <p>Chronological highlights that are occasionally asked as “fill‑in‑the‑blank” style questions:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#2a2a3a; color:#fff;">
        <th style="border:1px solid #444; padding:6px;">Year</th>
        <th style="border:1px solid #444; padding:6px;">Contribution</th>
        <th style="border:1px solid #444; padding:6px;">Scientist</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ccc; padding:6px;">1586</td>
        <td style="border:1px solid #ccc; padding:6px;">First systematic use of arithmetic mean</td>
        <td style="border:1px solid #ccc; padding:6px;">[[Simon Stevin]]</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">1805</td>
        <td style="border:1px solid #ccc; padding:6px;">Method of Least Squares (foundation for mean estimation)</td>
        <td style="border:1px solid #ccc; padding:6px;">[[Carl Friedrich Gauss]]</td>
      </tr>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ccc; padding:6px;">1835</td>
        <td style="border:1px solid #ccc; padding:6px;">Concept of “average man” (normal distribution)</td>
        <td style="border:1px solid #ccc; padding:6px;">[[Adolphe Quetelet]]</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">1896</td>
        <td style="border:1px solid #ccc; padding:6px;">Introduction of moments and Pearson’s coefficient of skewness</td>
        <td style="border:1px solid #ccc; padding:6px;">[[Karl Pearson]]</td>
      </tr>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ccc; padding:6px;">1900</td>
        <td style="border:1px solid #ccc; padding:6px;">Formalisation of the chi‑square test (central tendency assessment)</td>
        <td style="border:1px solid #ccc; padding:6px;">[[Ronald Fisher]]</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: var(--accent); margin-top: 20px;">12. Summary – Quick Recap for the Exam Day</h4>
  <p>To master measures of central tendency for NDA/CDS/AFCAT, internalise the following hierarchy:</p>
  <ul style="margin-left: 20px;">
    <li><strong>Mean</strong> – Use for symmetric, outlier‑free data; compute quickly via grouping.</li>
    <li><strong>Median</strong> – Preferred for skewed or ordinal data; robust to extremes.</li>
    <li><strong>Mode</strong> – Best for categorical or discrete data; reveals most common category.</li>
  </ul>
  <p>Remember the pivotal theorems (<strong>LLN</strong>, <strong>CLT</strong>, <strong>Chebyshev</strong>) as they often underpin “why” questions. A solid grasp of the historical timeline reinforces the conceptual narrative expected in essay‑type sections.</p>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Arithmetic mean of a data set = total sum ÷ number of observations (always denote as \(\bar{x}\)).</li>
      <li>For a symmetric distribution, <strong>mean = median = mode</strong>.</li>
      <li>Median is the 50<sup>th</sup> percentile; it is unaffected by any single extreme value.</li>
      <li>Geometric mean is appropriate only for positive numbers; it equals the nth root of the product of observations.</li>
      <li>Chebyshev’s inequality guarantees that at least 75 % of data lie within 2 standard deviations of the mean, irrespective of distribution shape.</li>
      <li>In a grouped frequency table, the modal class is the class with the highest frequency; use the formula \(L + \frac{(f_m - f_{m-1})}{(2f_m - f_{m-1} - f_{m+1})} \times h\) for precise mode.</li>
      <li>Central Limit Theorem: For large <em>n</em> (≥30 is a common rule‑of‑thumb), the sampling distribution of the mean approximates a normal distribution.</li>
      <li>Law of Large Numbers: As sample size increases, the sample mean converges to the population mean – essential for reliability analysis of weapons systems.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["data-interpretation"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Data Interpretation: Tables, Bar & Pie Charts
  </h3>

  <h4><strong>1. Conceptual Foundations</strong></h4>
  <p>Data interpretation in the context of <strong>Statistics &amp; Probability</strong> for NDA, CDS, and AFCAT exams primarily tests the candidate’s ability to extract, analyse, and present quantitative information quickly and accurately. The three most common visual representations are:</p>
  <ul>
    <li><strong>Tables</strong> – systematic arrangement of numerical data in rows and columns.</li>
    <li><strong>Bar Charts</strong> – rectangular bars whose lengths are proportional to the values they represent.</li>
    <li><strong>Pie Charts</strong> – circular diagrams divided into sectors representing parts of a whole.</li>
  </ul>
  <p>These tools are indispensable for interpreting data from sources such as the [[World Bank]], [[UNESCO]], [[National Sample Survey Office (NSSO)]], and the [[Census of India 2011]]. Mastery of the underlying mathematics—percentages, ratios, and basic algebra—allows candidates to convert raw figures into meaningful insights under time pressure.</p>

  <h4><strong>2. Tables – Types and Reading Strategies</strong></h4>
  <p>Tables can be broadly classified into:</p>
  <ol>
    <li><strong>Simple Frequency Tables</strong> – show the count of occurrences for each category.</li>
    <li><strong>Cumulative Frequency Tables</strong> – each entry adds the previous frequencies, useful for determining medians and quartiles.</li>
    <li><strong>Cross‑Tabulation (Contingency) Tables</strong> – present the relationship between two categorical variables.</li>
    <li><strong>Multi‑Year Comparative Tables</strong> – display data across several time periods, often used in economic or demographic contexts.</li>
  </ol>
  <p>Key reading techniques:</p>
  <ul>
    <li>Identify the <strong>row headings</strong> (variables) and <strong>column headings</strong> (categories).</li>
    <li>Check for <strong>totals</strong> and <strong>sub‑totals</strong> to verify internal consistency.</li>
    <li>Calculate <strong>percentage change</strong> using the formula <strong>((New – Old)/Old) × 100</strong>.</li>
    <li>When totals are missing, use the <strong>sum of rows/columns</strong> technique to reconstruct them.</li>
  </ul>

  <h4><strong>3. Bar Charts – Construction, Types, and Computation</strong></h4>
  <p>Bar charts are preferred when comparing discrete categories. Two main orientations exist:</p>
  <ul>
    <li><strong>Vertical Bar Chart</strong> – categories on the x‑axis, values on the y‑axis.</li>
    <li><strong>Horizontal Bar Chart</strong> – categories on the y‑axis, values on the x‑axis.</li>
  </ul>
  <p>Additional variants include:</p>
  <ul>
    <li><strong>Grouped (Clustered) Bar Chart</strong> – multiple bars per category to compare sub‑groups (e.g., male vs. female).</li>
    <li><strong>Stacked Bar Chart</strong> – bars divided into segments that sum to a total, revealing composition.</li>
  </ul>
  <p>Essential calculations:</p>
  <ul>
    <li>Determine the <strong>scale factor</strong> (value per unit length) using <strong>Scale = (Max Value – Min Value) / (Length of axis)</strong>.</li>
    <li>Convert a given bar length to the actual value: <strong>Value = Length × Scale + Min Value</strong>.</li>
    <li>For grouped charts, compute the <strong>difference between adjacent bars</strong> to find the comparative increase or decrease.</li>
  </ul>

  <h4><strong>4. Pie Charts – Angle, Percentage, and Sector Analysis</strong></h4>
  <p>Pie charts depict how a whole is partitioned into parts. The fundamental relationship is:</p>
  <p><strong>Sector Angle (°) = (Part ÷ Whole) × 360°</strong></p>
  <p>Key steps for rapid solving:</p>
  <ol>
    <li>Identify the <strong>total (usually 100 % or 360°)</strong>.</li>
    <li>Convert any given percentage to an angle using <strong>Angle = (Percentage ÷ 100) × 360°</strong>.</li>
    <li>If an angle is provided, retrieve the percentage: <strong>Percentage = (Angle ÷ 360) × 100</strong>.</li>
    <li>When a sector is missing, subtract the sum of known angles/percentages from the total.</li>
  </ol>
  <p>Commonly examined scenarios involve:</p>
  <ul>
    <li>Comparing two sectors (e.g., “Sector A is 1.5 times Sector B”).</li>
    <li>Finding the <strong>least/most dominant sector</strong> after a sequence of additions or subtractions.</li>
    <li>Interpreting <strong>compound percentages</strong> across successive years (e.g., growth of a market share).</li>
  </ul>

  <h4><strong>5. Integrated Example – From Table to Bar & Pie</strong></h4>
  <p>Consider the following simplified data extracted from the [[International Monetary Fund (IMF)]] report on 2022‑2023 fiscal performance of three Indian states:</p>

  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-top: 12px;">
    <thead>
      <tr style="background:#f2f2f2;">
        <th><strong>State</strong></th>
        <th><strong>GDP (₹ billion)</strong></th>
        <th><strong>Population (million)</strong></th>
        <th><strong>Per‑Capita Income (₹ thousand)</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[[Maharashtra]]</td>
        <td>3400</td>
        <td>124</td>
        <td>27419</td>
      </tr>
      <tr>
        <td>[[Karnataka]]</td>
        <td>2100</td>
        <td>68</td>
        <td>30882</td>
      </tr>
      <tr>
        <td>[[Tamil Nadu]]</td>
        <td>2500</td>
        <td>80</td>
        <td>31250</td>
      </tr>
    </tbody>
  </table>

  <p>From this table, a vertical bar chart can be plotted for <strong>GDP</strong>. Using a chart height of 12 cm and a scale of 300 ₹ billion per cm, the bar heights are:</p>
  <ul>
    <li>Maharashtra: <strong>3400 ÷ 300 ≈ 11.33 cm</strong></li>
    <li>Karnataka: <strong>2100 ÷ 300 ≈ 7.00 cm</strong></li>
    <li>Tamil Nadu: <strong>2500 ÷ 300 ≈ 8.33 cm</strong></li>
  </ul>
  <p>For a pie chart representing the share of total GDP, first compute the aggregate: 3400 + 2100 + 2500 = 8000 ₹ billion. Then sector angles are:</p>
  <ul>
    <li>Maharashtra: <strong>(3400 ÷ 8000) × 360 ≈ 153°</strong></li>
    <li>Karnataka: <strong>(2100 ÷ 8000) × 360 ≈ 94.5°</strong></li>
    <li>Tamil Nadu: <strong>(2500 ÷ 8000) × 360 ≈ 112.5°</strong></li>
  </ul>
  <p>Such integrated practice reinforces the transformation of tabular data into visual formats, a skill frequently tested in the <strong>Data Interpretation</strong> segment of the defence entrance examinations.</p>

  <h4><strong>6. Time‑Saving Tricks for the Examination Hall</strong></h4>
  <ul>
    <li><strong>Rule of 5‑10‑15</strong>: For pie‑chart angles, approximate 10 % ≈ 36°, 5 % ≈ 18°, and 15 % ≈ 54° to speed up calculations.</li>
    <li><strong>Shortcut Scale</strong>: When the axis length is a multiple of 5 or 10, divide the maximum value by the same factor to obtain the per‑unit scale instantly.</li>
    <li><strong>Cross‑Check Using Totals</strong>: After solving a table, always verify that row‑wise and column‑wise sums match the given totals; this catches transcription errors.</li>
    <li><strong>Visual Estimation</strong>: For bar charts, compare bar lengths visually before converting to numbers; often the answer can be deduced by relative magnitude alone.</li>
    <li><strong>Elimination Method</strong>: In multiple‑choice settings (though not required here), discard options that violate basic constraints such as total = 100 % or angle > 360°.</li>
  </ul>

  <h4><strong>7. Common Pitfalls and How to Avoid Them</strong></h4>
  <ul>
    <li><strong>Mixing Units</strong>: Ensure all figures are in the same unit (e.g., convert ₹ crore to ₹ billion) before calculations.</li>
    <li><strong>Ignoring Zero‑Based Indexing</strong>: When a table starts with a “0” row or column, remember that percentages are calculated on the total, not on the first non‑zero entry.</li>
    <li><strong>Rounding Errors</strong>: Retain at least two decimal places during intermediate steps; round off only in the final answer to avoid cumulative error.</li>
    <li><strong>Misreading “Less Than” vs. “Greater Than”</strong>: Pay attention to phrasing such as “the population of State A is *less* than that of State B by 12 %”.</li>
    <li><strong>Over‑Complicating Simple Percentages</strong>: Use the direct proportion method rather than setting up elaborate equations for straightforward 20 % or 50 % problems.</li>
  </ul>

  <h4><strong>8. Formulae Cheat‑Sheet (Quick Reference)</strong></h4>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-top: 12px;">
    <thead>
      <tr style="background:#e8f5e9;">
        <th><strong>Concept</strong></th>
        <th><strong>Formula</strong></th>
        <th><strong>Applicable To</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Percentage Change</td>
        <td><strong>((New – Old)/Old) × 100</strong></td>
        <td>Tables, Bar Chart comparisons</td>
      </tr>
      <tr>
        <td>Sector Angle</td>
        <td><strong>(Part ÷ Whole) × 360°</strong></td>
        <td>Pie Charts</td>
      </tr>
      <tr>
        <td>Percentage from Angle</td>
        <td><strong>(Angle ÷ 360) × 100</strong></td>
        <td>Pie Charts</td>
      </tr>
      <tr>
        <td>Scale Factor (Bar Chart)</td>
        <td><strong>(Max Value – Min Value) ÷ Axis Length</strong></td>
        <td>Bar Charts</td>
      </tr>
      <tr>
        <td>Value from Bar Length</td>
        <td><strong>Length × Scale + Min Value</strong></td>
        <td>Bar Charts</td>
      </tr>
      <tr>
        <td>Weighted Average</td>
        <td><strong>(Σ wi xi) ÷ Σ wi</strong></td>
        <td>Composite tables, multi‑year data</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>9. Real‑World Contextual Applications</strong></h4>
  <p>Data interpretation is not merely a classroom exercise; it mirrors the analytical demands of defence services where officers must evaluate operational statistics, resource allocations, and strategic trends. Examples include:</p>
  <ul>
    <li>Analyzing the [[World Health Organization (WHO)]] reports on disease incidence across different zones to allocate medical kits.</li>
    <li>Studying the [[United Nations (UN)]] peacekeeping troop contributions via bar charts to assess logistical support.</li>
    <li>Interpreting the [[Statistical Institute of India]]’s agricultural yield tables to plan supply‑chain logistics for forward bases.</li>
    <li>Evaluating the percentage growth in defence‑related patents filed in [[India]] over the last decade, often presented as a pie chart.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>In a pie chart, a 25 % sector always subtends an angle of <strong>90°</strong>.</li>
      <li>For a bar chart with axis length 8 cm representing a range of 0‑400, the scale factor is <strong>50 units/cm</strong>.</li>
      <li>When two sectors satisfy “Sector A is 1.2 times Sector B”, the angle of A equals <strong>1.2 × Angle B</strong>.</li>
      <li>In a cumulative frequency table, the median lies in the class where the cumulative frequency first exceeds <strong>(N + 1)/2</strong>.</li>
      <li>A grouped bar chart comparing three years can be solved by subtracting the bar height of the earlier year from the later year to find the absolute increase.</li>
      <li>In any table, if the sum of row totals does not equal the sum of column totals, the data set is inconsistent – a red flag for exam‑time verification.</li>
      <li>For a table showing percentages that sum to 100 %, the corresponding angle in a pie chart is obtained by multiplying each percentage by <strong>3.6</strong>.</li>
      <li>When a bar chart’s axis starts at a non‑zero baseline (e.g., 200), always add the baseline value after converting bar length to the actual figure.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["limits-continuity"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Limits & Continuity
  </h3>

  <h4>1. Fundamental Concepts of Limits</h4>
  <p>In the context of the Indian defence examinations, the notion of a <strong>limit</strong> is the cornerstone of differential calculus. Formally, for a function <em>f(x)</em> defined on a domain <strong>D</strong> ⊂ ℝ, we say that the limit of <em>f(x)</em> as <em>x</em> approaches <strong>c</strong> is <strong>L</strong> (written as <code>limₓ→c f(x)=L</code>) if for every ε > 0 there exists a δ > 0 such that 0 < |x‑c| < δ ⇒ |f(x)‑L| < ε. This ε‑δ definition was rigorously formalised by [[Augustin-Louis Cauchy]] (1821‑1892) and later refined by [[Karl Weierstrass]] (1815‑1897).</p>

  <ul>
    <li><strong>One‑sided limits</strong>: <code>limₓ→c⁺ f(x)</code> (right‑hand) and <code>limₓ→c⁻ f(x)</code> (left‑hand). Both must coincide for a two‑sided limit to exist.</li>
    <li><strong>Infinite limits</strong>: When |f(x)| grows without bound as x→c, we denote <code>limₓ→c f(x)=±∞</code>.</li>
    <li><strong>Limits at infinity</strong>: Studying the behaviour of f(x) as x→±∞ gives insights into horizontal asymptotes and growth rates.</li>
  </ul>

  <h4>2. Key Limit Laws (Algebra of Limits)</h4>
  <p>These laws enable quick manipulation of limits without reverting to the ε‑δ definition each time. They are universally valid for functions whose limits exist.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#2a2a3c;">
        <th style="padding:8px; border:1px solid #444; color:#fff;">Operation</th>
        <th style="padding:8px; border:1px solid #444; color:#fff;">Law</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Sum</strong></td>
        <td style="padding:8px; border:1px solid #444;"><code>limₓ→c [f(x)+g(x)] = limₓ→c f(x) + limₓ→c g(x)</code></td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Product</strong></td>
        <td style="padding:8px; border:1px solid #444;"><code>limₓ→c [f(x)·g(x)] = (limₓ→c f(x))·(limₓ→c g(x))</code></td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Quotient</strong></td>
        <td style="padding:8px; border:1px solid #444;">If <code>limₓ→c g(x) ≠ 0</code>, then <code>limₓ→c f(x)/g(x) = (limₓ→c f(x))/(limₓ→c g(x))</code></td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Power</strong></td>
        <td style="padding:8px; border:1px solid #444;"><code>limₓ→c [f(x)]ⁿ = (limₓ→c f(x))ⁿ</code> for any integer n ≥ 0.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Root</strong></td>
        <td style="padding:8px; border:1px solid #444;">If n is even, require <code>limₓ→c f(x) ≥ 0</code>. Then <code>limₓ→c √[n]{f(x)} = √[n]{limₓ→c f(x)}</code>.</td>
      </tr>
    </tbody>
  </table>

  <h4>3. Special Limits Frequently Tested</h4>
  <p>These limits appear verbatim in NDA, CDS, and AFCAT past papers. Memorising them saves valuable time.</p>
  <ul>
    <li><strong>Trigonometric fundamental limit</strong>: <code>limₓ→0 (sin x)/x = 1</code>. Proven using the <em>geometric squeeze</em> (or <strong>Squeeze Theorem</strong>) and the unit circle.</li>
    <li><strong>Exponential limit</strong>: <code>limₓ→0 (1+ax)^{1/x} = e^{a}</code>, where <em>a</em> is a constant.</li>
    <li><strong>Logarithmic limit</strong>: <code>limₓ→0 (ln(1+ax))/x = a</code>.</li>
    <li><strong>Indeterminate forms</strong>: <code>0/0</code> and <code>∞/∞</code> are resolved via [[L'Hôpital's Rule]] (named after Guillaume de l'Hôpital, 1661‑1704).</li>
    <li><strong>Power‑indeterminate forms</strong>: <code>0⁰, 1^∞, ∞⁰</code> are tackled by taking natural logs and converting to the standard <code>0/0</code> or <code>∞/∞</code> forms.</li>
  </ul>

  <h4>4. L'Hôpital's Rule – Statement & Application</h4>
  <p>Let f and g be differentiable on an open interval I containing c (except possibly at c). If <code>limₓ→c f(x) = limₓ→c g(x) = 0</code> or both limits are ±∞, and g′(x) ≠ 0 near c, then:</p>
  <p><code>limₓ→c f(x)/g(x) = limₓ→c f′(x)/g′(x)</code>, provided the right‑hand limit exists (finite or infinite).</p>
  <ul>
    <li>Repeated application is allowed until a determinate form emerges.</li>
    <li>Typical pitfalls: forgetting to verify the differentiability condition or applying the rule to non‑indeterminate expressions.</li>
  </ul>

  <h4>5. Continuity – Definitions and Types</h4>
  <p>For a function <em>f</em> defined on a set D, <strong>continuity at a point c∈D</strong> means:</p>
  <ul>
    <li>c belongs to the domain of f.</li>
    <li><code>limₓ→c f(x) exists.</code></li>
    <li><code>limₓ→c f(x) = f(c)</code>.</li>
  </ul>
  <p>These three conditions are often remembered as the “<strong>three‑point test</strong>”.</p>

  <h4>5.1. Types of Continuity</h4>
  <ul>
    <li><strong>Pointwise continuity</strong>: Holds at a single point c.</li>
    <li><strong>Uniform continuity</strong>: For every ε > 0 there exists a δ > 0 (independent of the point) such that |x‑y| < δ ⇒ |f(x)‑f(y)| < ε for all x, y in the domain. The Heine–Cantor theorem guarantees that any continuous function on a closed, bounded interval [a,b] (a compact set) is uniformly continuous.</li>
    <li><strong>Continuity on intervals</strong>: A function is continuous on an interval I if it is continuous at every point of I.</li>
    <li><strong>Discontinuities</strong>:
      <ul>
        <li><strong>Removable</strong> – limit exists but f(c) is either undefined or differs from the limit.</li>
        <li><strong>Jump (or step)</strong> – left‑hand and right‑hand limits exist but are unequal.</li>
        <li><strong>Essential (or infinite)</strong> – at least one of the one‑sided limits diverges to ±∞.</li>
      </ul>
    </li>
  </ul>

  <h4>5.2. Important Theorems Involving Continuity</h4>
  <ul>
    <li><strong>Intermediate Value Theorem (IVT)</strong> (Bolzano, 1817): If f is continuous on [a,b] and k lies between f(a) and f(b), then there exists at least one c∈(a,b) such that f(c)=k.</li>
    <li><strong>Extreme Value Theorem (EVT)</strong> (Weierstrass, 1885): A continuous function on a closed interval attains its maximum and minimum.</li>
    <li><strong>Mean Value Theorem (MVT)</strong> (Cauchy, 1823): If f is continuous on [a,b] and differentiable on (a,b), ∃c∈(a,b) such that f′(c)= (f(b)‑f(a))/(b‑a).</li>
    <li><strong>Fundamental Theorem of Calculus (FTC)</strong> (Newton & Leibniz, 1666‑1676): Links differentiation and integration; the first part guarantees the existence of an antiderivative for continuous functions, while the second part evaluates definite integrals via antiderivatives.</li>
  </ul>

  <h4>6. Continuity of Elementary Functions</h4>
  <p>All elementary functions encountered in NDA/ CDS/ AFCAT are continuous on their natural domains:</p>
  <ul>
    <li><strong>Polynomials</strong> – continuous everywhere on ℝ.</li>
    <li><strong>Rational functions</strong> – continuous on ℝ except where denominator = 0.</li>
    <li><strong>Exponential & logarithmic functions</strong> – e<sup>x</sup> continuous ∀x; ln x continuous for x > 0.</li>
    <li><strong>Trigonometric functions</strong> – sin x, cos x continuous ∀x; tan x continuous where cos x ≠ 0 (i.e., x ≠ (2k+1)π/2).</li>
    <li><strong>Root functions</strong> – √x continuous for x ≥ 0; √[n]{x} continuous for x ≥ 0 when n even, and for all x when n odd.</li>
  </ul>

  <h4>7. Practical Techniques for Evaluating Limits</h4>
  <p>Exam‑oriented strategies help to avoid algebraic pitfalls:</p>
  <ol>
    <li><strong>Direct Substitution</strong>: If f is continuous at c, substitute directly.</li>
    <li><strong>Factorisation</strong>: Cancel common factors causing 0/0.</li>
    <li><strong>Rationalising</strong>: Multiply numerator and denominator by the conjugate for radicals.</li>
    <li><strong>Series Expansion</strong>: Use the first two terms of the Taylor/Maclaurin series for sin x, cos x, e<sup>x</sup>, ln(1+x) around 0 to simplify indeterminate forms.</li>
    <li><strong>Change of Variable</strong>: Set t = x‑c to centre the limit at 0.</li>
    <li><strong>Bounding (Squeeze) Method</strong>: Identify two simpler functions that trap the target function.</li>
    <li><strong>Logarithmic Transformation</strong>: For power‑type indeterminate forms, take natural logs and revert after solving.</li>
  </ol>

  <h4>8. Common Pitfalls & How to Avoid Them</h4>
  <ul>
    <li>Assuming continuity without checking the domain – e.g., treating 1/ (x‑2) as continuous at x=2 leads to a false limit.</li>
    <li>Misapplying L'Hôpital's Rule to limits that are already determinate (e.g., limit of a constant).</li>
    <li>Neglecting one‑sided limits when the function is defined only on one side of c (e.g., √x at x=0).</li>
    <li>Overlooking the requirement that the derivative of the denominator must not be zero in the neighbourhood of the point of interest.</li>
    <li>Confusing “uniform continuity” with “continuity”. Uniform continuity is a stronger condition and is not guaranteed on open intervals.</li>
  </ul>

  <h4>9. Historical Milestones in the Development of Limits</h4>
  <p>A concise timeline aids memory for interview‑type questions:</p>
  <ul>
    <li>1687 – Isaac [[Newton]] publishes the *Principia*, introducing infinitesimal methods.</li>
    <li>1675 – Gottfried Wilhelm [[Leibniz]] independently develops differential calculus, coining the notation <em>dx</em> and <em>dy</em>.</li>
    <li>1821 – [[Cauchy]] formalises the ε‑δ definition in his “Cours d'Analyse”.</li>
    <li>1861 – [[Karl Weierstrass]] provides the modern rigorous foundation, emphasizing uniform convergence.</li>
    <li>1910 – Henri [[Lebesgue]] extends the notion of integration, influencing modern limit theory.</li>
  </ul>

  <h4>10. Sample Worked Example (Illustrative)</h4>
  <p><strong>Problem:</strong> Evaluate <code>limₓ→0 (1‑cos x)/x²</code>.</p>
  <p><strong>Solution:</strong></p>
  <ol>
    <li>Recognise the indeterminate form 0/0.</li>
    <li>Apply the trigonometric identity <code>1‑cos x = 2 sin²(x/2)</code>.</li>
    <li>Rewrite the limit: <code>limₓ→0 2 sin²(x/2) / x² = 2·[limₓ→0 (sin(x/2)/(x/2))]²·( (x/2)² / x² )</code>.</li>
    <li>Since <code>limₓ→0 sin u / u = 1</code>, the first factor tends to 1.</li>
    <li>Compute the remaining algebra: <code>( (x/2)² / x² ) = (1/4)</code>.</li>
    <li>Therefore, limit = 2·1²·(1/4) = ½.</li>
  </ol>
  <p>Result: <code>limₓ→0 (1‑cos x)/x² = ½</code>. This classic limit often appears in velocity‑acceleration problems in defence physics.</p>

  <h4>11. Continuity in Piecewise Functions – A Checklist</h4>
  <p>When dealing with piecewise definitions, verify continuity at each junction point:</p>
  <ul>
    <li>Compute the left‑hand limit <code>limₓ→c⁻ f(x)</code>.</li>
    <li>Compute the right‑hand limit <code>limₓ→c⁺ f(x)</code>.</li>
    <li>Ensure the function value f(c) exists and equals the common limit.</li>
  </ul>
  <p>Failure in any step indicates a discontinuity, which may be a source of “trick” questions.</p>

  <h4>12. Advanced Topics (Optional for Higher Scoring)</h4>
  <ul>
    <li><strong>Continuity of Inverse Functions</strong>: If f is continuous and strictly monotonic on an interval, its inverse f⁻¹ is also continuous on the image interval.</li>
    <li><strong>Limits involving sequences</strong>: The limit of a function as x→c can be examined through sequences {xₙ} converging to c (Heine’s definition). This viewpoint is useful for proving discontinuities.</li>
    <li><strong>Topological Perspective</strong>: In metric spaces, continuity is equivalent to the pre‑image of every open set being open. While not directly examined, this concept underpins many proofs.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Limit of <code>(sin x)/x</code> as x→0 equals <strong>1</strong> – a must‑remember Squeeze Theorem result.</li>
      <li>For any polynomial P(x), <code>limₓ→c P(x) = P(c)</code> because polynomials are continuous everywhere.</li>
      <li>L'Hôpital's Rule can be applied repeatedly; each application must still satisfy the 0/0 or ∞/∞ condition.</li>
      <li>Uniform continuity on a closed interval [a,b] is guaranteed for every continuous function (Heine–Cantor theorem).</li>
      <li>Intermediate Value Theorem ensures that a continuous function on [a,b] takes every value between f(a) and f(b).</li>
      <li>A removable discontinuity can be “fixed” by redefining f(c) to equal the limit value.</li>
      <li>When evaluating limits at infinity, compare the highest‑degree terms of numerator and denominator.</li>
      <li>For piecewise functions, continuity at the junction point requires matching left‑hand limit, right‑hand limit, and the defined value.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["differentiation"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Differentiation Rules
  </h3>

  <h4>1. Historical Foundations</h4>
  <p>The birth of differential calculus is credited to the parallel discoveries of <strong><a href="https://en.wikipedia.org/wiki/Isaac_Newton">[[Isaac Newton]]</a></strong> (1666) and <strong><a href="https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz">[[Gottfried Wilhelm Leibniz]]</a></strong> (1675). Their notation diverged—Newton’s “fluxions” (denoted by a dot) versus Leibniz’s <em>dx/dy</em>—but the underlying concept of an instantaneous rate of change remained identical.</p>

  <h4>2. Core Definition of Derivative</h4>
  <p>The <strong>derivative</strong> of a function <strong>f(x)</strong> at a point <strong>x = a</strong> is defined as the limit</p>
  <p style="text-align:center;"><strong>f'(a) = \displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}</strong></p>
  <p>When this limit exists, the function is said to be <strong>differentiable</strong> at <strong>a</strong>. The derivative function <strong>f'(x)</strong> captures the slope of the tangent to the curve <strong>y = f(x)</strong> at any point where it exists.</p>

  <h4>3. Basic Differentiation Rules</h4>
  <ul>
    <li><strong>Constant Rule</strong>: <strong>\frac{d}{dx}[c] = 0</strong> for any constant <strong>c</strong>.</li>
    <li><strong>Power Rule</strong>: <strong>\frac{d}{dx}[x^n] = n x^{n-1}</strong>, valid for any real <strong>n</strong>. Originated from Newton’s binomial expansion.</li>
    <li><strong>Constant Multiple Rule</strong>: <strong>\frac{d}{dx}[k·f(x)] = k·f'(x)</strong>, where <strong>k</strong> is a constant.</li>
  </ul>

  <h4>4. Product, Quotient, and Chain Rules</h4>
  <p>These three rules constitute the backbone of differentiation in exam problems.</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#222;color:#fff;">
        <th style="border:1px solid #555;padding:6px;">Rule</th>
        <th style="border:1px solid #555;padding:6px;">Formula</th>
        <th style="border:1px solid #555;padding:6px;">Typical Use‑Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>Product Rule</strong> (<a href="https://en.wikipedia.org/wiki/Chain_rule">[[Chain rule]]</a> variant)</td>
        <td style="border:1px solid #555;padding:6px;"><strong>\frac{d}{dx}[u·v] = u'·v + u·v'</strong></td>
        <td style="border:1px solid #555;padding:6px;">Differentiating <strong>u(x)v(x)</strong> where both factors depend on <strong>x</strong>.</td>
      </tr>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>Quotient Rule</strong></td>
        <td style="border:1px solid #555;padding:6px;"><strong>\frac{d}{dx}\!\left[\frac{u}{v}\right] = \frac{u'v - uv'}{v^{2}}</strong></td>
        <td style="border:1px solid #555;padding:6px;">When a function appears as a ratio of two differentiable functions.</td>
      </tr>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>Chain Rule</strong></td>
        <td style="border:1px solid #555;padding:6px;"><strong>\frac{d}{dx}[f(g(x))] = f'(g(x))·g'(x)</strong></td>
        <td style="border:1px solid #555;padding:6px;">Composite functions such as <strong>sin(x^2)</strong> or <strong>e^{\ln x}</strong>.</td>
      </tr>
    </tbody>
  </table>

  <h4>5. Differentiation of Elementary Functions</h4>
  <p>Mastering the derivatives of standard functions is essential for speed.</p>
  <ul>
    <li><strong>Exponential Functions</strong>: <strong>\frac{d}{dx}[e^{x}] = e^{x}</strong>. For a general base <strong>a>0</strong>, <strong>\frac{d}{dx}[a^{x}] = a^{x}\ln a</strong>. <strong>[[Euler's number]]</strong> <strong>e ≈ 2.71828</strong> is the unique base whose derivative equals itself.</li>
    <li><strong>Logarithmic Functions</strong>: <strong>\frac{d}{dx}[\ln x] = \frac{1}{x}</strong> for <strong>x>0</strong>. For any base <strong>a</strong>, <strong>\frac{d}{dx}[\log_{a}x] = \frac{1}{x\ln a}</strong>.</li>
    <li><strong>Trigonometric Functions</strong> (in radian measure):
      <ul>
        <li><strong>\frac{d}{dx}[\sin x] = \cos x</strong></li>
        <li><strong>\frac{d}{dx}[\cos x] = -\sin x</strong></li>
        <li><strong>\frac{d}{dx}[\tan x] = \sec^{2}x</strong></li>
        <li><strong>\frac{d}{dx}[\cot x] = -\csc^{2}x</strong></li>
        <li><strong>\frac{d}{dx}[\sec x] = \sec x\tan x</strong></li>
        <li><strong>\frac{d}{dx}[\csc x] = -\csc x\cot x</strong></li>
      </ul>
    </li>
    <li><strong>Inverse Trigonometric Functions</strong>:
      <ul>
        <li><strong>\frac{d}{dx}[\sin^{-1}x] = \frac{1}{\sqrt{1-x^{2}}}</strong> (|x|<1)</li>
        <li><strong>\frac{d}{dx}[\cos^{-1}x] = -\frac{1}{\sqrt{1-x^{2}}}</strong></li>
        <li><strong>\frac{d}{dx}[\tan^{-1}x] = \frac{1}{1+x^{2}}</strong></li>
      </ul>
    </li>
    <li><strong>Hyperbolic Functions</strong> (useful in physics questions):
      <ul>
        <li><strong>\frac{d}{dx}[\sinh x] = \cosh x</strong></li>
        <li><strong>\frac{d}{dx}[\cosh x] = \sinh x</strong></li>
        <li><strong>\frac{d}{dx}[\tanh x] = \sech^{2}x</strong></li>
      </ul>
    </li>
  </ul>

  <h4>6. Higher‑Order Derivatives</h4>
  <p>When a problem asks for the <strong>second derivative</strong> (<strong>f''(x)</strong>) or higher, apply the differentiation rules repeatedly.</p>
  <p>Typical patterns:</p>
  <ul>
    <li><strong>Polynomial of degree n</strong>: <strong>f^{(k)}(x) = 0</strong> for <strong>k>n</strong>.</li>
    <li><strong>Exponential</strong>: All orders remain the same, e.g., <strong>\frac{d^{k}}{dx^{k}}[e^{ax}] = a^{k}e^{ax}</strong>.</li>
    <li><strong>Trigonometric</strong>: Derivatives cycle every 4 steps (<strong>\sin → \cos → -\sin → -\cos → \sin</strong>).</li>
  </ul>

  <h4>7. Implicit Differentiation</h4>
  <p>When a function is defined implicitly, such as <strong>F(x,y)=0</strong>, differentiate both sides with respect to <strong>x</strong> treating <strong>y</strong> as a function of <strong>x</strong> (<strong>y = y(x)</strong>), then solve for <strong>dy/dx</strong>.</p>
  <p>Example (circle of radius <strong>r</strong>):</p>
  <p style="text-align:center;"><strong>x^{2}+y^{2}=r^{2}\;\;\Rightarrow\;\;2x+2y\frac{dy}{dx}=0\;\;\Rightarrow\;\;\frac{dy}{dx}= -\frac{x}{y}</strong></p>

  <h4>8. Logarithmic Differentiation</h4>
  <p>Useful for functions where the variable appears both as base and exponent, e.g., <strong>y = x^{x}</strong>. Take natural logs:</p>
  <p style="text-align:center;"><strong>\ln y = x\ln x\;\;\Rightarrow\;\;\frac{1}{y}\frac{dy}{dx}= \ln x + 1\;\;\Rightarrow\;\; \frac{dy}{dx}= y(\ln x +1)=x^{x}(\ln x+1)</strong></p>

  <h4>9. Differentiation of Parametric and Polar Forms</h4>
  <ul>
    <li><strong>Parametric Curves</strong>: If <strong>x = f(t)</strong>, <strong>y = g(t)</strong>, then <strong>\frac{dy}{dx}= \frac{dy/dt}{dx/dt}= \frac{g'(t)}{f'(t)}</strong>.</li>
    <li><strong>Polar Coordinates</strong>: For <strong>r = r(θ)</strong>, the slope is <strong>\frac{dy}{dx}= \frac{r'\sinθ + r\cosθ}{r'\cosθ - r\sinθ}</strong>, where prime denotes derivative w.r.t. <strong>θ</strong>.</li>
  </ul>

  <h4>10. Applications in Defence‑Related Problems</h4>
  <p>Many NDA/CDS/AFCAT problems involve motion, projectile trajectory, and optimisation. The following concepts recur:</p>
  <ul>
    <li><strong>Maximum Range</strong> of a projectile: Differentiate the range formula <strong>R = \frac{v^{2}}{g}\sin2θ</strong> with respect to <strong>θ</strong> to obtain <strong>θ = 45°</strong>.</li>
    <li><strong>Maximum Height</strong>: Differentiate <strong>h(t) = v_{0}t - \frac{1}{2}gt^{2}</strong> to find the time of ascent <strong>t = v_{0}/g</strong> and substitute back.</li>
    <li><strong>Fuel Consumption</strong>: If fuel flow <strong>F(t) = k·t^{2}</strong>, the total fuel used up to time <strong>T</strong> is the integral of <strong>F(t)</strong>, but the instantaneous rate is given directly by the derivative.</li>
  </ul>

  <h4>11. Connection with Fundamental Theorems</h4>
  <p>The <strong>Fundamental Theorem of Calculus</strong> (proved by <strong>[[Newton]]</strong> and <strong>[[Leibniz]]</strong>) links differentiation and integration:</p>
  <ul>
    <li>Part I: If <strong>F(x)=\int_{a}^{x}f(t)dt</strong>, then <strong>F'(x)=f(x)</strong>.</li>
    <li>Part II: <strong>\int_{a}^{b}f(x)dx = F(b)-F(a)</strong> where <strong>F'(x)=f(x)</strong>.</li>
  </ul>

  <h4>12. Common Pitfalls & Quick‑Check Strategies</h4>
  <ul>
    <li>Always verify the function is in <em>radian</em> mode before applying trig derivatives; degree mode introduces a factor of <strong>π/180</strong>.</li>
    <li>When using the product or quotient rule, write the derivative of each factor clearly before substituting values.</li>
    <li>For composite functions, isolate the inner function <strong>g(x)</strong> and outer function <strong>f(u)</strong>, then apply the chain rule.</li>
    <li>Check for simplifications such as factoring common terms after differentiation; many exam questions become trivial after a simple factorisation.</li>
  </ul>

  <h4>13. Summary Table of Differentiation Rules</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#333;color:#fff;">
        <th style="border:1px solid #666;padding:6px;">Rule</th>
        <th style="border:1px solid #666;padding:6px;">Formula</th>
        <th style="border:1px solid #666;padding:6px;">Key Insight</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #666;padding:6px;"><strong>Constant</strong></td>
        <td style="border:1px solid #666;padding:6px;"><strong>0</strong></td>
        <td style="border:1px solid #666;padding:6px;">No variable, slope zero.</td>
      </tr>
      <tr>
        <td style="border:1px solid #666;padding:6px;"><strong>Power</strong></td>
        <td style="border:1px solid #666;padding:6px;"><strong>n·x^{n-1}</strong></td>
        <td style="border:1px solid #666;padding:6px;">Exponent comes down, reduce exponent by 1.</td>
      </tr>
      <tr>
        <td style="border:1px solid #666;padding:6px;"><strong>Product</strong></td>
        <td style="border:1px solid #666;padding:6px;"><strong>u'v + uv'</strong></td>
        <td style="border:1px solid #666;padding:6px;">Differentiate each factor once.</td>
      </tr>
      <tr>
        <td style="border:1px solid #666;padding:6px;"><strong>Quotient</strong></td>
        <td style="border:1px solid #666;padding:6px;"><strong>(u'v - uv')/v^{2}</strong></td>
        <td style="border:1px solid #666;padding:6px;">Numerator is cross‑difference, denominator squared.</td>
      </tr>
      <tr>
        <td style="border:1px solid #666;padding:6px;"><strong>Chain</strong></td>
        <td style="border:1px solid #666;padding:6px;"><strong>f'(g(x))·g'(x)</strong></td>
        <td style="border:1px solid #666;padding:6px;">Differentiate outer, multiply by derivative of inner.</td>
      </tr>
      <tr>
        <td style="border:1px solid #666;padding:6px;"><strong>Logarithmic</strong></td>
        <td style="border:1px solid #666;padding:6px;"><strong>\frac{1}{x} for \ln x</strong></td>
        <td style="border:1px solid #666;padding:6px;">Useful for powers with variable exponents.</td>
      </tr>
    </tbody>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Derivative of <strong>e^{ax}</strong> is <strong>a·e^{ax}</strong> – remember the constant multiplier.</li>
      <li>The derivative of <strong>\sin^{-1}x</strong> is <strong>\frac{1}{\sqrt{1-x^{2}}}</strong>, a frequent trigonometric inverse question.</li>
      <li>For a polynomial <strong>f(x)=ax^{n}</strong>, the <strong>k^{th}</strong> derivative is <strong>a·n·(n-1)…(n-k+1)·x^{n-k}</strong>.</li>
      <li>Maximum range of a projectile occurs at <strong>θ = 45°</strong> because <strong>\frac{d}{dθ}[\sin2θ]=0</strong> → <strong>2cos2θ=0</strong>.</li>
      <li>Implicit differentiation of a circle <strong>x^{2}+y^{2}=r^{2}</strong> yields slope <strong>-x/y</strong> – handy for geometry problems.</li>
      <li>Logarithmic differentiation simplifies <strong>y = x^{x}</strong> to <strong>y' = x^{x}(\ln x +1)</strong>.</li>
      <li>Chain rule for nested functions: <strong>\frac{d}{dx}[\sqrt{1+e^{x}}] = \frac{e^{x}}{2\sqrt{1+e^{x}}}</strong>.</li>
      <li>Derivative of <strong>\tan^{-1}x</strong> is <strong>\frac{1}{1+x^{2}}</strong>, often used in integration reversal.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["integration"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Standard Integration Methods
  </h3>

  <h4><strong>1. Foundations of Integration</strong></h4>
  <p>The process of finding an <strong>antiderivative</strong> (or <em>integranda</em>) is governed by the <strong><a href="https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus">Fundamental Theorem of Calculus</a></strong> (often called the <strong>Newton‑Leibniz theorem</strong> [[Newton-Leibniz theorem]]). For a continuous function <em>f(x)</em> on <em>[a,b]</em>:</p>
  <ul>
    <li><strong>First Part:</strong> <em>F(x)=\int_{a}^{x}f(t)\,dt</em> satisfies <em>F'(x)=f(x)</em>.</li>
    <li><strong>Second Part:</strong> <em>\int_{a}^{b}f(x)\,dx = F(b)-F(a)</em>, where <em>F</em> is any antiderivative of <em>f</em>.</li>
  </ul>

  <h4><strong>2. Basic Integration Formulas</strong></h4>
  <p>Memorising the elementary families accelerates problem solving. The table below summarises the most frequently used formulas.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead style="background:#2a2a3a;">
      <tr>
        <th style="border:1px solid #555;padding:6px;">Function</th>
        <th style="border:1px solid #555;padding:6px;">Integral</th>
        <th style="border:1px solid #555;padding:6px;">Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>1</strong></td>
        <td style="border:1px solid #555;padding:6px;">\(\int x^{n}\,dx = \frac{x^{n+1}}{n+1}+C\) ( <em>n ≠ -1</em> )</td>
        <td style="border:1px solid #555;padding:6px;">\(n\in\mathbb{R}\)</td>
      </tr>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>e^{ax}</strong></td>
        <td style="border:1px solid #555;padding:6px;">\(\int e^{ax}\,dx = \frac{1}{a}e^{ax}+C\)</td>
        <td style="border:1px solid #555;padding:6px;">\(a\neq0\)</td>
      </tr>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>\sin(ax)</strong></td>
        <td style="border:1px solid #555;padding:6px;">\(\int \sin(ax)\,dx = -\frac{1}{a}\cos(ax)+C\)</td>
        <td style="border:1px solid #555;padding:6px;">\(a\neq0\)</td>
      </tr>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>\cos(ax)</strong></td>
        <td style="border:1px solid #555;padding:6px;">\(\int \cos(ax)\,dx = \frac{1}{a}\sin(ax)+C\)</td>
        <td style="border:1px solid #555;padding:6px;">\(a\neq0\)</td>
      </tr>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>\frac{1}{x}</strong></td>
        <td style="border:1px solid #555;padding:6px;">\(\int \frac{1}{x}\,dx = \ln|x|+C\)</td>
        <td style="border:1px solid #555;padding:6px;">\(x\neq0\)</td>
      </tr>
      <tr>
        <td style="border:1px solid #555;padding:6px;"><strong>\frac{1}{x^{2}+a^{2}}</strong></td>
        <td style="border:1px solid #555;padding:6px;">\(\int \frac{1}{x^{2}+a^{2}}dx = \frac{1}{a}\tan^{-1}\!\frac{x}{a}+C\)</td>
        <td style="border:1px solid #555;padding:6px;">\(a>0\)</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>3. Integration by Substitution (Change of Variable)</strong></h4>
  <p>The <strong>Substitution Method</strong> [[Substitution Method]] mirrors the chain rule for differentiation. If <em>u = g(x)</em> is differentiable and <em>g'(x)</em> appears in the integrand, replace the whole expression by <em>u</em>:</p>
  <ul>
    <li>Set <em>u = g(x)</em> ⇒ <em>du = g'(x)dx</em>.</li>
    <li>Rewrite the integral as \(\int f(g(x))g'(x)dx = \int f(u)du\).</li>
    <li>Integrate with respect to <em>u</em> and back‑substitute.</li>
  </ul>
  <p>Typical patterns include:</p>
  <ul>
    <li>Integrals of the form \(\int f(ax+b)dx\) – use <em>u = ax+b</em>.</li>
    <li>Integrals containing \(\sqrt{a^{2}-x^{2}}\) – use <em>u = x/a</em> or trigonometric substitution (see §5).</li>
  </ul>

  <h4><strong>4. Integration by Parts</strong></h4>
  <p>The formula stems from the product rule and is indispensable for products of algebraic and transcendental functions.</p>
  <p><strong>Formula:</strong> \(\displaystyle \int u\,dv = uv - \int v\,du\) [[Integration by Parts]]</p>
  <ul>
    <li>Choose <em>u</em> as the function that simplifies upon differentiation (LIATE rule – <strong>L</strong>ogarithmic, <strong>I</strong>nverse trig, <strong>A</strong>lgebraic, <strong>T</strong>rig, <strong>E</strong>xponential).</li>
    <li>Set <em>dv</em> as the remaining part; integrate to obtain <em>v</em>.</li>
    <li>Repeat if the resulting integral still requires integration by parts.</li>
  </ul>
  <p>Important special cases:</p>
  <ul>
    <li><strong>Reduction Formulae</strong> – generate recursive relations, e.g., \(\int \sin^{n}x\,dx\) and \(\int \cos^{n}x\,dx\).</li>
    <li>Integration of products like <em>x e^{ax}</em>, <em>x\sin bx</em>, or <em>\ln x</em>.</li>
  </ul>

  <h4><strong>5. Trigonometric Substitution</strong></h4>
  <p>Whenever the integrand contains \(\sqrt{a^{2}\pm x^{2}}\) or \(\sqrt{x^{2}\pm a^{2}}\), a substitution using a trigonometric identity reduces the radical to a simple algebraic form.</p>
  <ul>
    <li><strong>Case 1:</strong> \(\sqrt{a^{2}-x^{2}}\) ⇒ set <em>x = a\sin\theta</em> (or <em>x = a\cos\theta</em>).</li>
    <li><strong>Case 2:</strong> \(\sqrt{a^{2}+x^{2}}\) ⇒ set <em>x = a\tan\theta</em>.</li>
    <li><strong>Case 3:</strong> \(\sqrt{x^{2}-a^{2}}\) ⇒ set <em>x = a\sec\theta</em>.</li>
  </ul>
  <p>After substitution, use the identities \(\sin^{2}\theta+\cos^{2}\theta=1\), \(\tan^{2}\theta+1=\sec^{2}\theta\) to simplify.</p>
  <p>Example: \(\displaystyle \int \frac{dx}{\sqrt{a^{2}-x^{2}}} = \sin^{-1}\!\frac{x}{a}+C\).</p>

  <h4><strong>6. Partial Fractions</strong></h4>
  <p>Rational functions \(\frac{P(x)}{Q(x)}\) where \(\deg P < \deg Q\) can be decomposed into a sum of simpler fractions, each integrable by elementary formulas.</p>
  <ul>
    <li><strong>Distinct Linear Factors:</strong> \(\displaystyle \frac{P(x)}{(x-a_{1})(x-a_{2})\dots} = \sum_{k}\frac{A_{k}}{x-a_{k}}\).</li>
    <li><strong>Repeated Linear Factors:</strong> \(\displaystyle \frac{P(x)}{(x-a)^{m}} = \sum_{k=1}^{m}\frac{A_{k}}{(x-a)^{k}}\).</li>
    <li><strong>Irreducible Quadratics:</strong> \(\displaystyle \frac{P(x)}{(x^{2}+bx+c)} = \frac{Bx+C}{x^{2}+bx+c}\) and integrate using \(\ln\) or \(\tan^{-1}\) forms.</li>
  </ul>
  <p>Procedure:</p>
  <ol>
    <li>Factorise the denominator completely over the reals.</li>
    <li>Write the general partial‑fraction ansatz.</li>
    <li>Clear denominators and equate coefficients of like powers of <em>x</em> to solve for unknown constants.</li>
    <li>Integrate each term separately.</li>
  </ol>

  <h4><strong>7. Integration of Trigonometric Powers</strong></h4>
  <p>Two principal strategies exist:</p>
  <ul>
    <li><strong>Power‑Reduction Identities</strong> – e.g., \(\sin^{2}x = \frac{1-\cos2x}{2}\).</li>
    <li><strong>Using Substitution</strong> – for odd powers, separate one sine or cosine and use \(u = \cos x\) or \(u = \sin x\).</li>
  </ul>
  <p>Typical results:</p>
  <ul>
    <li>\(\displaystyle \int \sin^{m}x\cos^{n}x\,dx\) – if one exponent is odd, factor out the odd power and substitute.</li>
    <li>When both exponents are even, apply double‑angle formulas repeatedly.</li>
  </ul>

  <h4><strong>8. Improper Integrals and Convergence Tests</strong></h4>
  <p>Improper integrals arise when limits are infinite or the integrand has vertical asymptotes.</p>
  <ul>
    <li>Define \(\displaystyle \int_{a}^{\infty} f(x)dx = \lim_{b\to\infty}\int_{a}^{b}f(x)dx\).</li>
    <li>Define \(\displaystyle \int_{-\infty}^{\infty} f(x)dx = \lim_{A\to-\infty,\,B\to\infty}\int_{A}^{B}f(x)dx\).</li>
    <li>For singularities at \(c\) inside \([a,b]\), split the integral and take limits: \(\int_{a}^{b}f(x)dx = \lim_{\epsilon\to0^{+}}\big(\int_{a}^{c-\epsilon}f(x)dx + \int_{c+\epsilon}^{b}f(x)dx\big).\)</li>
  </ul>
  <p>Key convergence criteria used in defence‑level problems:</p>
  <ul>
    <li><strong>p‑Test:</strong> \(\int_{1}^{\infty}\frac{dx}{x^{p}}\) converges iff \(p>1\).</li>
    <li><strong>Comparison Test:</strong> Compare with a known convergent/divergent integral.</li>
    <li><strong>Cauchy Principal Value</strong> ([[Cauchy Principal Value]]) – useful for symmetric singularities, e.g., \(\displaystyle \text{PV}\int_{-a}^{a}\frac{dx}{x}=0\).</li>
  </ul>

  <h4><strong>9. Special Functions: Gamma and Beta Integrals</strong></h4>
  <p>The <strong>Gamma Function</strong> \(\Gamma(z)=\int_{0}^{\infty}t^{z-1}e^{-t}dt\) ([[Gamma Function]]) extends factorials: \(\Gamma(n)= (n-1)!\) for integer \(n\ge1\).</p>
  <p>The <strong>Beta Function</strong> \(B(p,q)=\int_{0}^{1}t^{p-1}(1-t)^{q-1}dt\) relates to Gamma via \(B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}\) ([[Beta Function]]).</p>
  <ul>
    <li>Common integral: \(\displaystyle \int_{0}^{\pi/2}\sin^{m}x\cos^{n}x\,dx = \frac{1}{2}B\!\Big(\frac{m+1}{2},\frac{n+1}{2}\Big).\)</li>
    <li>Gaussian Integral: \(\displaystyle \int_{-\infty}^{\infty}e^{-x^{2}}dx = \sqrt{\pi}\) – derived using polar coordinates ([[Gaussian Integral]]).</li>
  </ul>

  <h4><strong>10. Numerical Integration (Quadrature)</strong></h4>
  <p>When an antiderivative is unavailable, approximation techniques become essential, especially for trajectory calculations in defence simulations.</p>
  <ul>
    <li><strong>Trapezoidal Rule</strong> – approximates area under a curve by trapezia.<br>
        \(\displaystyle \int_{a}^{b}f(x)dx \approx \frac{h}{2}\Big[f(a)+2\sum_{k=1}^{n-1}f(a+kh)+f(b)\Big]\) where \(h=\frac{b-a}{n}\). [[Trapezoidal Rule]]</li>
    <li><strong>Simpson’s 1/3 Rule</strong> – uses parabolic arcs for higher accuracy.<br>
        \(\displaystyle \int_{a}^{b}f(x)dx \approx \frac{h}{3}\Big[f(a)+4\sum_{\text{odd}}f(a+kh)+2\sum_{\text{even}}f(a+kh)+f(b)\Big]\) with \(h=\frac{b-a}{2n}\). [[Simpson's Rule]]</li>
    <li><strong>Gaussian Quadrature</strong> – selects optimal nodes and weights; yields exact results for polynomials up to degree \(2n-1\).</li>
  </ul>

  <h4><strong>11. Applications in Defence‑Related Physics</strong></h4>
  <p>Integration underpins several calculations in the Indian armed forces:</p>
  <ul>
    <li><strong>Projectile Motion</strong> – determining range \(R = \int_{0}^{t_f}v_{x}\,dt\) and apex height.</li>
    <li><strong>Ballistic Drag</strong> – solving \(\displaystyle m\frac{dv}{dt}= -kv^{2}\) leads to \(\displaystyle v(t)=\frac{m}{kt+C}\); integration yields distance travelled.</li>
    <li><strong>Radar Cross‑Section (RCS)</strong> – involves surface‑integral expressions over scattering surfaces.</li>
    <li><strong>Energy of a Missile</strong> – \(\displaystyle E = \int_{0}^{L}\frac{1}{2}\rho A v^{2}dx\) where \(L\) is the length of the thrust chamber.</li>
  </ul>

  <h4><strong>12. Common Pitfalls & Tips for Quick Evaluation</strong></h4>
  <ul>
    <li>Always verify the domain of integration before applying a substitution; missing absolute values in logarithmic results leads to sign errors.</li>
    <li>When dealing with even/odd functions over symmetric limits, exploit symmetry: \(\int_{-a}^{a}f_{\text{odd}}(x)dx=0\) and \(\int_{-a}^{a}f_{\text{even}}(x)dx=2\int_{0}^{a}f(x)dx\).</li>
    <li>For rational functions, if the degree of numerator is not less than denominator, perform polynomial long division first.</li>
    <li>Remember the integration constant \(C\) especially in indefinite integrals—it can be absorbed when evaluating definite integrals.</li>
    <li>In reduction formulas, keep track of the pattern; a small algebraic slip propagates through the recursion.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>∫ sec x dx = ln|sec x + tan x| + C (remember the plus sign).</li>
      <li>∫ dx / (x² + a²) = (1/a) tan⁻¹(x/a) + C – a classic test for inverse trigonometric integration.</li>
      <li>For ∫ x e^{ax}dx, the result is (e^{ax}/a²)(ax − 1) + C.</li>
      <li>Improper integral ∫₁^∞ dx / x^{p} converges only when p > 1 (p‑test).</li>
      <li>The Gaussian integral ∫_{−∞}^{∞}e^{−x²}dx = √π, useful for probability‑theory questions.</li>
      <li>Partial fraction of (2x+3)/(x²−x−6) = A/(x‑3) + B/(x+2) gives A=5/5, B=‑3/5 after solving.</li>
      <li>Simpson’s 1/3 rule yields exact value for any cubic polynomial over an interval.</li>
      <li>Integration by parts with u=ln x, dv=dx gives ∫ ln x dx = x ln x − x + C.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-matrices"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Matrices and Determinants
  </h3>

  <h4><strong>1. Fundamental Definitions</strong></h4>
  <p><strong>Matrix</strong> – A rectangular array of numbers or symbols arranged in <em>rows</em> and <em>columns</em>. The size is denoted as <strong>m × n</strong> (m rows, n columns). The element in the i‑th row and j‑th column is written as <strong>a<sub>ij</sub></strong>.</p>
  <ul>
    <li><strong>Square Matrix</strong>: When m = n; essential for determinant theory.</li>
    <li><strong>Zero (Null) Matrix</strong>: All entries are zero; denoted by 0.</li>
    <li><strong>Diagonal Matrix</strong>: Non‑zero entries only on the main diagonal (<strong>a<sub>ii</sub></strong>).</li>
    <li><strong>Scalar Matrix</strong>: Diagonal matrix with all diagonal entries equal; i.e., <strong>kI</strong> where I is the identity.</li>
    <li><strong>Identity Matrix</strong> (I): Diagonal entries are 1, all other entries 0.</li>
    <li><strong>Upper / Lower Triangular Matrix</strong>: All entries below or above the main diagonal are zero respectively.</li>
    <li><strong>Symmetric Matrix</strong>: <strong>A<sup>T</sup> = A</strong>. If <strong>a<sub>ij</sub> = a<sub>ji</sub></strong> for all i, j.</li>
    <li><strong>Skew‑Symmetric Matrix</strong>: <strong>A<sup>T</sup> = ‑A</strong> and diagonal entries are zero.</li>
  </ul>

  <h4><strong>2. Matrix Operations</strong></h4>
  <p>All operations are defined only when dimensions are compatible.</p>
  <ul>
    <li><strong>Addition & Subtraction</strong>: Element‑wise, possible only for matrices of identical order.</li>
    <li><strong>Scalar Multiplication</strong>: Multiply each entry by a real number k: <strong>kA = (k·a<sub>ij</sub>)</strong>.</li>
    <li><strong>Matrix Multiplication</strong>: If <strong>A</strong> is m × p and <strong>B</strong> is p × n, the product <strong>AB</strong> is m × n with entries <strong>(AB)<sub>ij</sub> = ∑<sub>k=1</sub>^{p} a<sub>ik</sub>b<sub>kj</sub></strong>. Not commutative in general; <strong>AB ≠ BA</strong> unless special cases (e.g., both diagonal).</li>
    <li><strong>Transpose</strong> (<strong>A<sup>T</sup></strong>): Interchange rows and columns; <strong>(A<sup>T</sup>)<sub>ij</sub> = a<sub>ji</sub></strong>.</li>
    <li><strong>Conjugate Transpose</strong> (<strong>A<sup>†</sup></strong>) for complex matrices: transpose followed by complex conjugation.</li>
    <li><strong>Trace</strong> (<strong>tr(A)</strong>): Sum of diagonal elements; defined only for square matrices.</li>
    <li><strong>Block Matrices</strong>: Partitioning large matrices into sub‑matrices to simplify calculations, especially in the context of the [[Schur complement]] and [[Kronecker product]].</li>
  </ul>

  <h4><strong>3. Special Matrices and Their Determinants</strong></h4>
  <p>The determinant, denoted <strong>det(A)</strong> or |A|, is a scalar attribute of a square matrix that encodes volume scaling, invertibility, and linear independence.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#f0f0f0;">
        <th style="border:1px solid #ccc; padding:6px;">Matrix Type</th>
        <th style="border:1px solid #ccc; padding:6px;">Determinant Formula</th>
        <th style="border:1px solid #ccc; padding:6px;">Key Property</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Diagonal / Scalar</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">∏<sub>i=1</sub>^{n} a<sub>ii</sub></td>
        <td style="border:1px solid #ccc; padding:6px;">Non‑zero iff every diagonal entry ≠ 0.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Upper / Lower Triangular</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">Product of diagonal entries</td>
        <td style="border:1px solid #ccc; padding:6px;">Same as diagonal case.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Orthogonal Matrix</strong> (Q<sup>T</sup>Q = I)</td>
        <td style="border:1px solid #ccc; padding:6px;">±1</td>
        <td style="border:1px solid #ccc; padding:6px;">Preserves Euclidean norm.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Skew‑Symmetric (odd order)</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">0</td>
        <td style="border:1px solid #ccc; padding:6px;">Determinant always zero for odd n.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>4. Computation Techniques for Determinants</strong></h4>
  <ul>
    <li><strong>Laplace Expansion (Cofactor Expansion)</strong>: For any row i,
      <strong>det(A) = ∑<sub>j=1</sub>^{n} (‑1)^{i+j} a<sub>ij</sub> M<sub>ij</sub></strong>,
      where <strong>M<sub>ij</sub></strong> is the minor (determinant of the (n‑1)×(n‑1) matrix obtained by deleting row i and column j).</li>
    <li><strong>Sarrus’ Rule</strong>: Direct formula for 3 × 3 matrices only; useful for quick mental checks.</li>
    <li><strong>Row/Column Operations</strong> (as per [[Gauss-Jordan elimination]]):
      <ul>
        <li>Swapping two rows (or columns) multiplies determinant by ‑1.</li>
        <li>Multiplying a row by a scalar k multiplies determinant by k.</li>
        <li>Adding a multiple of one row to another leaves determinant unchanged.</li>
      </ul>
    </li>
    <li><strong>Triangularisation</strong>: Convert matrix to upper triangular form using elementary row operations; determinant equals product of diagonal entries multiplied by the factor adjustments from the operations.</li>
    <li><strong>Determinant of Block Matrices</strong> (when blocks commute):
      <strong>det\begin{pmatrix}A & B\\0 & D\end{pmatrix}=det(A)·det(D)</strong>.</li>
    <li><strong>[[Sylvester's determinant theorem]]</strong>: For matrices A (m × n) and B (n × m),
      <strong>det(I<sub>m</sub>+AB)=det(I<sub>n</sub>+BA)</strong>.</li>
  </ul>

  <h4><strong>5. Inverse of a Matrix</strong></h4>
  <p>A square matrix <strong>A</strong> is invertible (non‑singular) iff <strong>det(A) ≠ 0</strong>. The inverse, denoted <strong>A<sup>‑1</sup></strong>, satisfies <strong>AA<sup>‑1</sup>=A<sup>‑1</sup>A=I</strong>.</p>
  <ul>
    <li><strong>Adjugate Formula</strong>:
      <strong>A<sup>‑1</sup> = (1/det(A))·adj(A)</strong>, where <strong>adj(A)</strong> is the transpose of the cofactor matrix.</li>
    <li><strong>Gauss‑Jordan Method</strong>: Augment A with I and row‑reduce to reach <strong>[I | A<sup>‑1</sup>]</strong>.</li>
    <li><strong>Special Cases</strong>:
      <ul>
        <li>Diagonal matrix: inverse is diagonal with entries 1/a<sub>ii</sub>.</li>
        <li>Orthogonal matrix: inverse equals transpose (<strong>Q<sup>‑1</sup>=Q<sup>T</sup></strong>).</li>
      </ul>
    </li>
  </ul>

  <h4><strong>6. Rank, Nullity, and Linear Independence</strong></h4>
  <p>The <strong>rank</strong> of a matrix is the dimension of its row (or column) space – the maximum number of linearly independent rows/columns. For an m × n matrix, <strong>rank ≤ min(m,n)</strong>.</p>
  <ul>
    <li><strong>Row‑Echelon Form (REF)</strong> and <strong>Reduced Row‑Echelon Form (RREF)</strong> are obtained via elementary row operations; the number of non‑zero rows in REF equals the rank.</li>
    <li><strong>[[Rouché–Capelli theorem]]</strong>: A system of linear equations Ax = b is consistent iff <strong>rank(A) = rank([A|b])</strong>.</li>
    <li><strong>Rank–Nullity Theorem</strong>: For a linear transformation represented by A (size m × n),
      <strong>rank(A) + nullity(A) = n</strong>, where nullity is dimension of kernel (solution space of Ax = 0).</li>
  </ul>

  <h4><strong>7. Systems of Linear Equations – Cramer's Rule</strong></h4>
  <p>Applicable only when the coefficient matrix <strong>A</strong> is square and <strong>det(A) ≠ 0</strong>. For system <strong>Ax = b</strong>, each variable <strong>x<sub>i</sub></strong> is given by:</p>
  <p><strong>x<sub>i</sub> = det(A<sub>i</sub>)/det(A)</strong>, where <strong>A<sub>i</sub></strong> is obtained by replacing the i‑th column of A with the column vector b.</p>
  <ul>
    <li>Historical note: First published by [[Gaston Cramér]] in 1750.</li>
    <li>Computationally expensive for large n (O(n³) for determinant plus O(n⁴) overall), thus rarely used in practice for n > 3 in competitive exams.</li>
  </ul>

  <h4><strong>8. Determinant Identities Frequently Tested</strong></h4>
  <ul>
    <li><strong>Multiplicative Property</strong>: <strong>det(AB) = det(A)·det(B)</strong>.</li>
    <li><strong>Transpose Property</strong>: <strong>det(A<sup>T</sup>) = det(A)</strong>.</li>
    <li><strong>Determinant of a Sum</strong> (not generally additive): Only for special cases such as <strong>det(A + B) = det(A) + det(B)</strong> when A and B are simultaneously diagonalizable.</li>
    <li><strong>Homogeneity</strong>: Multiplying a row (or column) by k multiplies determinant by k.</li>
    <li><strong>Vandermonde Determinant</strong>: For numbers x₁,…,xₙ,
      <strong>det\begin{pmatrix}1 & x₁ & x₁² & … & x₁^{n‑1}\\ … \\ 1 & xₙ & xₙ² & … & xₙ^{n‑1}\end{pmatrix}=∏_{1≤i<j≤n}(x_j‑x_i)</strong>.</li>
    <li><strong>[[Euler's theorem]] on determinants</strong>: For any n × n matrix A, <strong>det(e^{A}) = e^{tr(A)}</strong>.</li>
  </ul>

  <h4><strong>9. Applications in Defence‑Related Problems</strong></h4>
  <p>In NDA, CDS, and AFCAT, matrix concepts appear in:</p>
  <ul>
    <li><strong>Navigation and Radar</strong>: Rotation matrices for coordinate transformation; determinant = 1 indicates proper rotation (no scaling).</li>
    <li><strong>Cryptography</strong>: Hill cipher uses invertible matrices modulo 26; determinant must be coprime with 26.</li>
    <li><strong>Structural Analysis</strong>: Stiffness matrices in engineering; singularity (det = 0) signals instability.</li>
    <li><strong>Game Theory</strong>: Payoff matrices; Nash equilibrium calculations often require solving linear systems.</li>
  </ul>

  <h4><strong>10. Quick Reference Formulas</strong></h4>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#e8f5e9;">
        <th style="border:1px solid #ccc; padding:6px;">Operation</th>
        <th style="border:1px solid #ccc; padding:6px;">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>(AB)<sup>T</sup></strong></td>
        <td style="border:1px solid #ccc; padding:6px;"><strong>B<sup>T</sup>A<sup>T</sup></strong></td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>(kA)<sup>‑1</sup></strong></td>
        <td style="border:1px solid #ccc; padding:6px;">(1/k)A<sup>‑1</sup></td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>det(kA)</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">k<sup>n</sup>·det(A) (for n × n matrix)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>det(A⁻¹)</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">1/det(A)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>det(A + B)</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">Not generally additive; only special cases.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>11. Common Pitfalls & Tips for Quick Calculation</strong></h4>
  <ul>
    <li>Always check for zero rows/columns before expanding; they reduce determinant to zero instantly.</li>
    <li>For 3 × 3 determinants, memorize the Sarrus’ rule but verify by cofactor expansion to avoid sign errors.</li>
    <li>When a matrix contains a row (or column) that is a scalar multiple of another, determinant is zero – a quick test for singularity.</li>
    <li>Inverting a 2 × 2 matrix, use the formula:
      <strong>A⁻¹ = (1/det(A))·\begin{pmatrix}a_{22}&-a_{12}\\-a_{21}&a_{11}\end{pmatrix}</strong>.</li>
    <li>During exams, convert problems to triangular form using elementary row operations; product of diagonal entries gives determinant directly.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>det(A) = 0 ⇔ rows (or columns) of A are linearly dependent.</li>
      <li>For a 2 × 2 matrix <strong>\begin{pmatrix}a&b\\c&d\end{pmatrix}</strong>, inverse exists only if <strong>ad‑bc ≠ 0</strong>.</li>
      <li>det(AB) = det(A)·det(B) holds for any square matrices of the same order.</li>
      <li>In a rotation matrix <strong>R(θ)</strong>, det(R) = 1 and R<sup>T</sup> = R⁻¹.</li>
      <li>Hill cipher works only if det(K) is coprime with 26; otherwise the key matrix K is non‑invertible modulo 26.</li>
      <li>Rank of a matrix equals the number of non‑zero rows after converting to row‑echelon form.</li>
      <li>Vandermonde determinant formula is a quick way to evaluate determinants with powers of variables.</li>
      <li>Adjugate of a matrix is the transpose of its cofactor matrix; useful for hand‑calculations of inverses.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-probability"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Probability Theory & Bayes Theorem
  </h3>

  <h4><strong>1. Fundamental Concepts</strong></h4>
  <p>Probability theory provides a quantitative description of uncertainty. In defence examinations, the emphasis is on *axiomatic* formulation, combinatorial techniques, and the ability to manipulate conditional probabilities quickly.</p>
  <ul>
    <li><strong>Sample Space (Ω)</strong>: The set of all possible outcomes of an experiment. Example: For a fair die, Ω = {1,2,3,4,5,6}.</li>
    <li><strong>Event</strong>: Any subset of Ω. Events are denoted by capital letters (A, B, …).</li>
    <li><strong>Probability Measure (P)</strong>: A function <em>P: 2^Ω → [0,1]</em> satisfying the three Kolmogorov axioms:
      <ol>
        <li><strong>Non‑negativity</strong>: <strong>P(A) ≥ 0</strong> for every event A.</li>
        <li><strong>Normalization</strong>: <strong>P(Ω) = 1</strong>.</li>
        <li><strong>σ‑additivity</strong>: For mutually exclusive events A₁, A₂, …, <strong>P(∪ Aᵢ) = Σ P(Aᵢ)</strong>.</li>
      </ol>
    </li>
  </ul>

  <h4><strong>2. Classical, Relative Frequency, and Subjective Interpretations</strong></h4>
  <p>Defence problems often state probabilities in the <em>classical</em> sense (equally likely outcomes). However, the <em>relative frequency</em> interpretation becomes relevant in repeated‑trial contexts, while the <em>subjective</em> approach underlies Bayesian analysis.</p>

  <h4><strong>3. Combinatorial Foundations</strong></h4>
  <p>Counting techniques are indispensable for evaluating probabilities of compound events.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead style="background:#2c2c3c; color:#fff;">
      <tr>
        <th style="border:1px solid #444; padding:6px;">Concept</th>
        <th style="border:1px solid #444; padding:6px;">Formula</th>
        <th style="border:1px solid #444; padding:6px;">Typical Use‑Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #444; padding:6px;"><strong>Permutation</strong></td>
        <td style="border:1px solid #444; padding:6px;">P(n,r) = \(\frac{n!}{(n-r)!}\)</td>
        <td style="border:1px solid #444; padding:6px;">Arranging 3 officers in 5 distinct posts.</td>
      </tr>
      <tr>
        <td style="border:1px solid #444; padding:6px;"><strong>Combination</strong></td>
        <td style="border:1px solid #444; padding:6px;">C(n,r) = \(\binom{n}{r} = \frac{n!}{r!(n-r)!}\)</td>
        <td style="border:1px solid #444; padding:6px;">Choosing 2 weapons from a stock of 7.</td>
      </tr>
      <tr>
        <td style="border:1px solid #444; padding:6px;"><strong>Multinomial Coefficient</strong></td>
        <td style="border:1px solid #444; padding:6px;">\(\frac{n!}{n_1!n_2!\dots n_k!}\)</td>
        <td style="border:1px solid #444; padding:6px;">Distribution of 10 soldiers into 3 platoons of sizes 3,4,3.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>4. Conditional Probability and Independence</strong></h4>
  <p>The cornerstone of Bayes theorem is the notion of conditioning.</p>
  <ul>
    <li><strong>Conditional Probability</strong>: <strong>P(A|B) = \(\frac{P(A∩B)}{P(B)}\)</strong>, provided <strong>P(B) > 0</strong>. This definition is central to problems involving sequential decisions, such as “probability that a missile hits given that the radar detected it”.</li>
    <li><strong>Multiplication Rule</strong>: <strong>P(A∩B) = P(A)·P(B|A) = P(B)·P(A|B)</strong>.</li>
    <li><strong>Independence</strong>: Events A and B are independent iff <strong>P(A∩B) = P(A)·P(B)</strong> ⇔ <strong>P(A|B) = P(A)</strong> ⇔ <strong>P(B|A) = P(B)</strong>. Independence is often tested in reliability questions (e.g., failure of two independent subsystems).</li>
  </ul>

  <h4><strong>5. Total Probability Theorem</strong></h4>
  <p>If \(\{B_1, B_2, …, B_k\}\) forms a partition of Ω with <strong>P(B_i) > 0</strong>, then for any event A:</p>
  <p><strong>P(A) = Σ_{i=1}^{k} P(A|B_i)·P(B_i)</strong></p>
  <p>This theorem is used heavily in multi‑stage selection problems (e.g., “probability that a recruit passes the physical test given the branch he belongs to”).</p>

  <h4><strong>6. Bayes Theorem – Derivation & Interpretation</strong></h4>
  <p>From the multiplication rule, swapping the conditioning yields:</p>
  <p><strong>P(B_i|A) = \(\frac{P(A|B_i)·P(B_i)}{∑_{j=1}^{k} P(A|B_j)·P(B_j)}\)</strong></p>
  <p>Key points:</p>
  <ul>
    <li><strong>Prior Probability (P(B_i))</strong>: Initial belief before observing data.</li>
    <li><strong>Likelihood (P(A|B_i))</strong>: Probability of observed evidence given the hypothesis.</li>
    <li><strong>Posterior Probability (P(B_i|A))</strong>: Updated belief after incorporating evidence.</li>
  </ul>
  <p>Historical note: The theorem is named after [[Thomas Bayes]] (1701‑1761) and was formalised by [[Pierre-Simon Laplace]] in the early 19th century.</p>

  <h4><strong>7. Common Discrete Distributions</strong></h4>
  <p>Understanding the shape of probability mass functions (PMFs) helps in quick calculation of expectations and variances.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead style="background:#2c2c3c; color:#fff;">
      <tr>
        <th style="border:1px solid #444; padding:6px;">Distribution</th>
        <th style="border:1px solid #444; padding:6px;">PMF</th>
        <th style="border:1px solid #444; padding:6px;">Mean (μ)</th>
        <th style="border:1px solid #444; padding:6px;">Variance (σ²)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #444; padding:6px;"><strong>[[Bernoulli trial]]</strong></td>
        <td style="border:1px solid #444; padding:6px;">P(X=1)=p, P(X=0)=1−p</td>
        <td style="border:1px solid #444; padding:6px;">p</td>
        <td style="border:1px solid #444; padding:6px;">p(1−p)</td>
      </tr>
      <tr>
        <td style="border:1px solid #444; padding:6px;"><strong>[[Binomial distribution]]</strong></td>
        <td style="border:1px solid #444; padding:6px;">P(X=k)=\(\binom{n}{k}p^{k}(1-p)^{n-k}\)</td>
        <td style="border:1px solid #444; padding:6px;">np</td>
        <td style="border:1px solid #444; padding:6px;">np(1-p)</td>
      </tr>
      <tr>
        <td style="border:1px solid #444; padding:6px;"><strong>[[Geometric distribution]]</strong></td>
        <td style="border:1px solid #444; padding:6px;">P(X=k)= (1-p)^{k-1}p, k=1,2,…</td>
        <td style="border:1px solid #444; padding:6px;">1/p</td>
        <td style="border:1px solid #444; padding:6px;">(1-p)/p²</td>
      </tr>
      <tr>
        <td style="border:1px solid #444; padding:6px;"><strong>[[Poisson distribution]]</strong></td>
        <td style="border:1px solid #444; padding:6px;">P(X=k)=\(\frac{e^{-λ} λ^{k}}{k!}\)</td>
        <td style="border:1px solid #444; padding:6px;">λ</td>
        <td style="border:1px solid #444; padding:6px;">λ</td>
      </tr>
      <tr>
        <td style="border:1px solid #444; padding:6px;"><strong>[[Hypergeometric distribution]]</strong></td>
        <td style="border:1px solid #444; padding:6px;">P(X=k)=\(\frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}\)</td>
        <td style="border:1px solid #444; padding:6px;">n·(K/N)</td>
        <td style="border:1px solid #444; padding:6px;">n·(K/N)·(1−K/N)·\(\frac{N-n}{N-1}\)</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>8. Continuous Distributions & Central Limit Theorem</strong></h4>
  <ul>
    <li><strong>[[Normal distribution]]</strong> (Gaussian): PDF = \(\frac{1}{σ\sqrt{2π}}e^{-\frac{(x-μ)^{2}}{2σ^{2}}}\). It is the limiting distribution for sums of i.i.d. variables (see [[Central Limit Theorem]]).</li>
    <li>Key property: Approximately 68 % of data lie within ±1σ, 95 % within ±2σ, and 99.7 % within ±3σ – a fact often exploited in error‑margin questions.</li>
    <li>Standardisation: \(Z = \frac{X-μ}{σ}\) transforms any normal variable to the standard normal \(N(0,1)\).</li>
  </ul>

  <h4><strong>9. Expectation, Variance & Moments</strong></h4>
  <p>For a discrete random variable X with PMF p(x):</p>
  <ul>
    <li><strong>Expectation (Mean)</strong>: <strong>E[X] = Σ x·p(x)</strong>.</li>
    <li><strong>Variance</strong>: <strong>Var(X) = E[(X−E[X])²] = Σ (x−μ)²·p(x)</strong>. Alternate formula: <strong>Var(X) = E[X²] − (E[X])²</strong>.</li>
    <li><strong>Standard Deviation</strong>: σ = √Var(X).</li>
  </ul>
  <p>For continuous X with PDF f(x): replace sums by integrals.</p>

  <h4><strong>10. Inequalities Useful in Defence Exams</strong></h4>
  <ul>
    <li><strong>Markov’s Inequality</strong>: For non‑negative X, <strong>P(X ≥ a) ≤ \(\frac{E[X]}{a}\)</strong>.</li>
    <li><strong>Chebyshev’s Inequality</strong>: <strong>P(|X−μ| ≥ kσ) ≤ \(\frac{1}{k^{2}}\)</strong>. This bound is a staple for “minimum probability” type questions.</li>
    <li><strong>Union Bound (Boole’s inequality)</strong>: <strong>P(∪ A_i) ≤ Σ P(A_i)</strong>.</li>
  </ul>

  <h4><strong>11. Practical Applications of Bayes Theorem in Defence Context</strong></h4>
  <p>Bayesian updating appears in signal processing, target identification, and medical screening of personnel.</p>
  <ol>
    <li><strong>Radar Detection</strong>: Let D be “radar detects aircraft”, T be “aircraft actually present”. With known false‑alarm rate (α) and detection probability (β), posterior probability of actual presence is <strong>P(T|D) = \(\frac{β·P(T)}{β·P(T)+α·(1-P(T))}\)</strong>.</li>
    <li><strong>Intelligence Fusion</strong>: Multiple sources S₁, S₂,… provide evidence about a threat. Using successive Bayes updates yields a refined posterior that guides operational decisions.</li>
    <li><strong>Medical Screening</strong>: For a disease with prevalence p, test sensitivity s, and specificity c, the probability that a soldier is truly diseased given a positive test is <strong>P(Disease|Positive) = \(\frac{s·p}{s·p + (1-c)·(1-p)}\)</strong>.</li>
  </ol>

  <h4><strong>12. Solving Strategy for Probability Problems</strong></h4>
  <ul style="list-style-type:decimal;">
    <li><strong>Step 1 – Define Ω and Identify Events.</strong> Write events in set notation; e.g., A = “draw a red card”.</li>
    <li><strong>Step 2 – Choose the Appropriate Counting Method.</strong> Use permutations for ordered selections, combinations for unordered, and multinomial for multiple categories.</li>
    <li><strong>Step 3 – Apply the Correct Probability Formula.</strong> For equally likely outcomes, <strong>P(A) = \(\frac{|A|}{|Ω|}\)</strong>. For non‑uniform cases, use given weights.</li>
    <li><strong>Step 4 – Check Independence.</strong> Verify if P(A∩B) equals P(A)·P(B); if not, compute conditional probabilities.</li>
    <li><strong>Step 5 – Use Total Probability Theorem if Multiple Paths Exist.</strong> Decompose the event into disjoint cases.</li>
    <li><strong>Step 6 – Apply Bayes Theorem for Reverse‑Condition Queries.</strong> Explicitly write prior, likelihood, and normalising denominator.</li>
    <li><strong>Step 7 – Compute Expectation/Variance if Required.</strong> Use linearity of expectation: E[aX+bY] = aE[X] + bE[Y].</li>
    <li><strong>Step 8 – Validate with Bounds.</strong> Quick sanity‑check using Markov or Chebyshev inequalities.</li>
  </ul>

  <h4><strong>13. Frequently Used Formulas (Quick Reference)</strong></h4>
  <ul>
    <li><strong>Permutation</strong>: P(n,r) = n!/(n‑r)!</li>
    <li><strong>Combination</strong>: C(n,r) = n!/[r!(n‑r)!]</li>
    <li><strong>Binomial Expansion</strong>: (p+q)ⁿ = Σ C(n,k) pᵏ qⁿ⁻ᵏ</li>
    <li><strong>Bayes Theorem</strong>: P(H|E) = \(\frac{P(E|H)·P(H)}{∑_{i} P(E|H_i)·P(H_i)}\)</li>
    <li><strong>Expectation of Binomial</strong>: μ = np</li>
    <li><strong>Variance of Binomial</strong>: σ² = np(1‑p)</li>
    <li><strong>Poisson Approximation</strong>: For large n, small p with λ = np, Binomial ≈ Poisson(λ)</li>
    <li><strong>Normal Approximation</strong>: For Binomial, use μ = np, σ = √[np(1‑p)] and apply continuity correction.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>For a fair die, <strong>P(at least one 6 in three throws) = 1‑(5/6)³ = 91/216</strong>.</li>
      <li>In a binomial setting, the probability of exactly k successes is <strong>P = C(n,k)·pᵏ·(1‑p)ⁿ⁻ᵏ</strong>.</li>
      <li>Chebyshev’s inequality guarantees that at least 75 % of observations lie within 2σ of the mean for any distribution.</li>
      <li>Bayes theorem applied to radar: posterior = \(\frac{P_D·P_{target}}{P_D·P_{target}+P_{FA}·(1-P_{target})}\).</li>
      <li>Poisson parameter λ equals the mean number of events in the interval; variance = λ as well.</li>
      <li>Standard normal Z‑score of 1.96 corresponds to a two‑tailed 95 % confidence level.</li>
      <li>For independent events A and B, <strong>P(A∪B) = P(A)+P(B)‑P(A)·P(B)</strong>.</li>
      <li>Markov’s inequality provides an upper bound: <strong>P(X≥a) ≤ E[X]/a</strong> for non‑negative X.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["lines-angles-triangles"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Lines, Angles & Triangles
  </h3>

  <h4><strong>Fundamental Definitions</strong></h4>
  <p>
    In Euclidean plane geometry, a <strong>line</strong> is an infinite set of points extending in both directions without curvature. Two distinct points uniquely determine a line (<em>postulatum</em> of [[Euclid]]'s <strong>Elements</strong>, Book I, Proposition 1). A <strong>segment</strong> is a finite portion of a line bounded by two endpoints, while a <strong>ray</strong> starts at an endpoint and extends infinitely in one direction.
  </p>
  <ul>
    <li><strong>Collinear</strong> points lie on the same straight line.</li>
    <li><strong>Concurrent</strong> lines intersect at a single point.</li>
    <li><strong>Parallel</strong> lines have equal slopes and never intersect (<strong>Euclid’s Fifth Postulate</strong>).</li>
    <li><strong>Perpendicular</strong> lines intersect to form a right angle (90°).</li>
  </ul>

  <h4><strong>Angle Classification and Relations</strong></h4>
  <p>
    An <strong>angle</strong> is formed by two rays sharing a common vertex. Angles are measured in degrees (°) or radians (rad). Key classifications:
  </p>
  <ul>
    <li><strong>Acute</strong> – < 90°</li>
    <li><strong>Right</strong> – exactly 90°</li>
    <li><strong>Obtuse</strong> – > 90° and < 180°</li>
    <li><strong>Straight</strong> – 180°</li>
    <li><strong>Reflex</strong> – > 180° and < 360°</li>
  </ul>
  <p>
    Important relationships:
  </p>
  <ul>
    <li><strong>Adjacent angles</strong> share a common side and vertex.</li>
    <li><strong>Vertical (opposite) angles</strong> are equal when two lines intersect.</li>
    <li><strong>Complementary angles</strong> sum to 90°; <strong>supplementary angles</strong> sum to 180°.</li>
    <li><strong>Exterior angle theorem</strong>: An exterior angle of a triangle equals the sum of the two non‑adjacent interior angles.</li>
  </ul>

  <h4><strong>Coordinate Geometry of Lines</strong></h4>
  <p>
    In the Cartesian plane, a line can be expressed as <strong>y = mx + c</strong>, where <strong>m</strong> denotes the <strong>slope</strong> (rise over run) and <strong>c</strong> the <strong>y‑intercept</strong>. The slope between points <strong>(x₁, y₁)</strong> and <strong>(x₂, y₂)</strong> is:
  </p>
  <p style="font-style: italic;">m = (y₂ – y₁) / (x₂ – x₁)</p>
  <p>
    Parallelism ⇔ equal slopes (<strong>m₁ = m₂</strong>); perpendicularity ⇔ product of slopes = –1 (<strong>m₁·m₂ = –1</strong>).
  </p>
  <p>
    The <strong>distance formula</strong> between two points is derived from the Pythagorean theorem:
  </p>
  <p style="font-style: italic;">d = √[(x₂ – x₁)² + (y₂ – y₁)²]</p>
  <p>
    The <strong>section formula</strong> (internal division) for a point dividing the line segment joining <strong>A(x₁, y₁)</strong> and <strong>B(x₂, y₂)</strong> in the ratio <strong>m:n</strong> is:
  </p>
  <p style="font-style: italic;">P( (mx₂ + nx₁)/(m+n) , (my₂ + ny₁)/(m+n) )</p>

  <h4><strong>Triangle Fundamentals</strong></h4>
  <p>
    A <strong>triangle</strong> is a polygon with three sides and three interior angles. The sum of interior angles is invariant:
  </p>
  <p style="font-style: italic;">∠A + ∠B + ∠C = 180°</p>
  <p>
    Triangles are classified by sides and angles:
  </p>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-top: 10px;">
    <thead>
      <tr style="background:#f0f0f0;">
        <th>Classification (by sides)</th>
        <th>Definition</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Equilateral</strong></td>
        <td>All three sides equal (<strong>a = b = c</strong>) and all angles 60°.</td>
        <td>[[Equilateral triangle]] in tessellations.</td>
      </tr>
      <tr>
        <td><strong>Isosceles</strong></td>
        <td>Two sides equal (<strong>a = b ≠ c</strong>); base angles equal.</td>
        <td>[[Isosceles triangle]] in bridge design.</td>
      </tr>
      <tr>
        <td><strong>Scalene</strong></td>
        <td>No sides equal; all angles distinct.</td>
        <td>Typical survey triangles.</td>
      </tr>
    </tbody>
  </table>

  <p>
    By angles:
  </p>
  <ul>
    <li><strong>Acute triangle</strong> – all angles < 90°.</li>
    <li><strong>Right triangle</strong> – one angle = 90°.</li>
    <li><strong>Obtuse triangle</strong> – one angle > 90°.</li>
  </ul>

  <h4><strong>Congruence & Similarity Criteria</strong></h4>
  <p>
    Two triangles are <strong>congruent</strong> (identical in size and shape) if any of the following hold:
  </p>
  <ul>
    <li><strong>SSS</strong> – three corresponding sides equal.</li>
    <li><strong>SAS</strong> – two sides and the included angle equal.</li>
    <li><strong>ASA</strong> – two angles and the included side equal.</li>
    <li><strong>AAS</strong> – two angles and a non‑included side equal.</li>
    <li><strong>RHS</strong> – right‑angle–hypotenuse–side (applicable to right triangles).</li>
  </ul>
  <p>
    <strong>Similarity</strong> (same shape, different size) requires:
  </p>
  <ul>
    <li><strong>AA</strong> – two angles equal.</li>
    <li><strong>SSS (proportional)</strong> – corresponding sides in same ratio.</li>
    <li><strong>SAS (proportional)</strong> – two sides in proportion and the included angle equal.</li>
  </ul>

  <h4><strong>Key Theorems Involving Triangles</strong></h4>
  <ul>
    <li><strong>Pythagorean theorem</strong> (attributed to [[Pythagoras]], c. 530 BCE): In a right triangle, <strong>a² + b² = c²</strong> where <strong>c</strong> is the hypotenuse.</li>
    <li><strong>Law of Sines</strong> (proved by [[Leonhard Euler]] in 1748): <strong>a/ sin A = b/ sin B = c/ sin C = 2R</strong>, where <strong>R</strong> is the circumradius.</li>
    <li><strong>Law of Cosines</strong> (generalisation of Pythagoras, discovered by [[Johann Friedrich Wilhelm von Lobachevsky]] in 1840): <strong>c² = a² + b² – 2ab cos C</strong>.</li>
    <li><strong>Triangle Inequality Theorem</strong> (formalised by [[Euclid]]): The sum of any two sides exceeds the third side.</li>
    <li><strong>Ceva’s Theorem</strong> (1846, [[Giovanni Ceva]]): For concurrent cevians AD, BE, CF in ΔABC, <strong>(BD/DC)·(CE/EA)·(AF/FB) = 1</strong>.</li>
    <li><strong>Menelaus’ Theorem</strong> (1845, [[Menelaus of Alexandria]]): For a transversal intersecting the sides of ΔABC, <strong>(AF/FB)·(BD/DC)·(CE/EA) = 1</strong>.</li>
    <li><strong>Stewart’s Theorem</strong> (1846, [[Stewart McKinnon]]): Relates a cevian length to the sides of the triangle.</li>
    <li><strong>Heron’s Formula</strong> (c. 60 CE, [[Hero of Alexandria]]): Area = √[s(s–a)(s–b)(s–c)], where <strong>s = (a+b+c)/2</strong> is the semiperimeter.</li>
  </ul>

  <h4><strong>Special Points & Lines in a Triangle</strong></h4>
  <p>
    Geometry of a triangle includes several notable points, each defined by unique constructions:
  </p>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; margin-top: 10px;">
    <thead>
      <tr style="background:#e8e8e8;">
        <th>Point</th>
        <th>Construction</th>
        <th>Key Property</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Centroid (G)</strong></td>
        <td>Intersection of the three <strong>medians</strong> (each connects a vertex to the midpoint of opposite side).</td>
        <td>Divides each median in a 2:1 ratio (vertex to centroid : centroid to midpoint).</td>
      </tr>
      <tr>
        <td><strong>Circumcenter (O)</strong></td>
        <td>Intersection of the three <strong>perpendicular bisectors</strong> of the sides.</td>
        <td>Equidistant from all vertices; centre of the circumscribed circle.</td>
      </tr>
      <tr>
        <td><strong>Incenter (I)</strong></td>
        <td>Intersection of the three <strong>angle bisectors</strong>.</td>
        <td>Equidistant from all sides; centre of the inscribed circle.</td>
      </tr>
      <tr>
        <td><strong>Orthocenter (H)</strong></td>
        <td>Intersection of the three <strong>altitudes</strong> (perpendiculars from vertices to opposite sides).</td>
        <td>Location varies with triangle type (inside for acute, on hypotenuse for right, outside for obtuse).</td>
      </tr>
      <tr>
        <td><strong>Euler Line</strong></td>
        <td>Line passing through <strong>O</strong>, <strong>G</strong>, and <strong>H</strong> (except in equilateral triangles where they coincide).</td>
        <td>OG : GH = 1 : 2.</td>
      </tr>
      <tr>
        <td><strong>Nine‑Point Circle</strong></td>
        <td>Circle passing through the midpoints of sides, foot of altitudes, and midpoints of segments from vertices to orthocenter.</td>
        <td>Radius = R/2, where <strong>R</strong> is circumradius.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>Area Formulas for Triangles</strong></h4>
  <ul>
    <li><strong>Base × Height / 2</strong>: <strong>Δ = ½ b h</strong>, universally applicable.</li>
    <li><strong>Trigonometric Form</strong>: <strong>Δ = ½ ab sin C</strong> (useful when two sides and included angle are known).</li>
    <li><strong>Heron’s Formula</strong> (see above) – useful for side‑only data.</li>
    <li><strong>Coordinate Method</strong>: For vertices <strong>(x₁, y₁)</strong>, <strong>(x₂, y₂)</strong>, <strong>(x₃, y₃)</strong>,
      <p style="font-style: italic;">Δ = ½ |x₁(y₂–y₃) + x₂(y₃–y₁) + x₃(y₁–y₂)|</p>
    </li>
  </ul>

  <h4><strong>Advanced Topics: Angle Bisectors & Perpendicular Bisectors</strong></h4>
  <p>
    The <strong>Angle Bisector Theorem</strong> states that the internal bisector of ∠A divides the opposite side BC into segments proportional to the adjacent sides:
  </p>
  <p style="font-style: italic;">BD/DC = AB/AC</p>
  <p>
    The external bisector divides BC externally in the same ratio, but with opposite sign.
  </p>
  <p>
    The <strong>Perpendicular Bisector Theorem</strong> asserts that any point on the perpendicular bisector of a segment is equidistant from its endpoints. This theorem underlies the construction of the circumcenter.
  </p>

  <h4><strong>Historical Milestones in Plane Geometry</strong></h4>
  <ul>
    <li>~300 BCE – [[Euclid]] compiles <strong>Elements</strong>, establishing axiomatic geometry.</li>
    <li>c. 530 BCE – [[Pythagoras]] formulates the relation among sides of a right triangle.</li>
    <li>1640 – [[René Descartes]] publishes <em>La Géométrie</em>, linking algebra and geometry via coordinate system.</li>
    <li>1822 – [[Carl Friedrich Gauss]] proves the <strong>Fundamental Theorem of Algebra</strong>, influencing analytic geometry.</li>
    <li>1845–46 – [[Giovanni Ceva]] and [[Menelaus of Alexandria]] formalise concurrency and collinearity conditions for cevians.</li>
    <li>1854 – [[Augustin-Louis Cauchy]] introduces rigorous proofs for triangle inequalities.</li>
    <li>1905 – [[David Hilbert]] presents a modern axiomatization, addressing Euclid’s implicit assumptions.</li>
  </ul>

  <h4><strong>Common Pitfalls & Quick Checks</strong></h4>
  <ul>
    <li>Never assume a triangle is right‑angled unless a 90° angle is explicitly given or derivable.</li>
    <li>When applying the <strong>Law of Sines</strong>, verify that the obtained angle lies within the valid range (0°–180°) and respects the triangle sum condition.</li>
    <li>In coordinate geometry, always check the sign of slope product for perpendicularity – a sign error flips the relationship.</li>
    <li>Remember that the <strong>triangle inequality</strong> must be satisfied for any three lengths to represent a valid triangle.</li>
    <li>For concurrency problems, Ceva’s theorem requires careful handling of directed segments (positive for interior division, negative for exterior).</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Sum of interior angles of any triangle = <strong>180°</strong>.</li>
      <li>In a right triangle, <strong>a² + b² = c²</strong> (Pythagorean theorem).</li>
      <li>Area = <strong>½ ab sin C</strong> – useful when two sides and the included angle are known.</li>
      <li>Centroid divides each median in the ratio <strong>2:1</strong> (vertex to centroid).</li>
      <li>Euler line passes through <strong>O, G, H</strong> with <strong>OG : GH = 1 : 2</strong>.</li>
      <li>Angle bisector divides opposite side proportionally: <strong>BD/DC = AB/AC</strong>.</li>
      <li>Perpendicular bisector theorem: any point on it is equidistant from the segment’s endpoints.</li>
      <li>Heron’s formula: <strong>Δ = √[s(s–a)(s–b)(s–c)]</strong>, where <strong>s = (a+b+c)/2</strong>.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["circles-polygons"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Circles & Polygons
  </h3>

  <h4>Fundamental Definitions</h4>
  <ul>
    <li><strong>[[Circle]]</strong>: The set of all points in a plane at a fixed distance <strong>r</strong> (radius) from a fixed point <strong>O</strong> (center).</li>
    <li><strong>[[Polygon]]</strong>: A closed planar figure composed of a finite number of straight line segments called <strong>sides</strong>, joined end‑to‑end.</li>
    <li><strong>[[Regular polygon]]</strong>: A polygon that is both <strong>equiangular</strong> (all interior angles equal) and <strong>equilateral</strong> (all sides equal).</li>
    <li><strong>[[Diameter]]</strong> (d): The longest chord passing through the centre; d = 2r.</li>
    <li><strong>[[Chord]]</strong>: Any line segment whose endpoints lie on the circle.</li>
    <li><strong>[[Tangent]]</strong>: A line that touches the circle at exactly one point; it is perpendicular to the radius at the point of contact.</li>
    <li><strong>[[Secant]]</strong>: A line intersecting a circle at two distinct points.</li>
  </ul>

  <h4>Key Theorems for Circles</h4>
  <ul>
    <li><strong>[[Central angle theorem]]</strong>: The measure of a central angle is equal to the measure of its intercepted arc.</li>
    <li><strong>[[Inscribed angle theorem]]</strong>: An inscribed angle is half the measure of its intercepted arc (or central angle). <em>∠ABC = ½·arc AC</em>.</li>
    <li><strong>[[Thales' theorem]]</strong> (c. 600 BC): If a triangle is inscribed in a circle with one side as diameter, the triangle is right‑angled at the opposite vertex.</li>
    <li><strong>[[Chord theorem]]</strong>: Equal chords subtend equal arcs; conversely, equal arcs subtend equal chords.</li>
    <li><strong>[[Power of a point theorem]]</strong>: For a point P outside the circle, <strong>PA·PB = PT²</strong> where PA and PB are the lengths of the secant segment and PT is the length of the tangent from P.</li>
    <li><strong>[[Tangent‑secant theorem]]</strong>: If a tangent PT and a secant PAB intersect the circle, then <strong>PT² = PA·PB</strong>.</li>
    <li><strong>[[Cyclic quadrilateral theorem]]</strong>: Opposite angles of a cyclic quadrilateral sum to 180° (supplementary).</li>
  </ul>

  <h4>Analytic Geometry of Circles</h4>
  <p>In the Cartesian plane, the standard equation of a circle with centre <strong>(h, k)</strong> and radius <strong>r</strong> is:</p>
  <p><strong>(x − h)² + (y − k)² = r²</strong></p>
  <p>The general quadratic form <strong>x² + y² + Dx + Ey + F = 0</strong> represents a circle provided <strong>D² + E² − 4F > 0</strong>. Completing the square yields the centre and radius:</p>
  <table border="1" cellpadding="5" cellspacing="0" style="margin: 12px 0;">
    <tr><th>Parameter</th><th>Expression</th></tr>
    <tr><td>Centre (h, k)</td><td>h = −D/2, k = −E/2</td></tr>
    <tr><td>Radius r</td><td>r = √(h² + k² − F)</td></tr>
  </table>
  <p>Important derived formulas:</p>
  <ul>
    <li>Length of a chord at distance <strong>d</strong> from the centre: <strong>c = 2√(r² − d²)</strong>.</li>
    <li>Area of a sector with central angle <strong>θ (in radians)</strong>: <strong>A_sector = ½ r²θ</strong>.</li>
    <li>Area of a segment (sector minus triangle): <strong>A_segment = ½ r²(θ − sinθ)</strong>.</li>
    <li>Circumference: <strong>C = 2πr</strong>, where π = 3.1415926535… (known as [[Archimedes' constant]]).</li>
  </ul>

  <h4>Polygonal Geometry – General Relations</h4>
  <ul>
    <li>Sum of interior angles of an n‑sided polygon: <strong>(n − 2)·180°</strong>.</li>
    <li>Sum of exterior angles (one per vertex): always <strong>360°</strong>, irrespective of n.</li>
    <li>For a regular n‑gon with side length <strong>a</strong> and circumradius <strong>R</strong>:
      <ul>
        <li>Side length: <strong>a = 2R·sin(π/n)</strong>.</li>
        <li>Apothem (inradius) <strong>r = R·cos(π/n)</strong>.</li>
        <li>Area: <strong>A = ½·n·a·r = ½·n·R²·sin(2π/n)</strong>.</li>
        <li>Perimeter: <strong>P = n·a</strong>.</li>
      </ul>
    </li>
    <li>Relation between circumradius R, inradius r, and side a for a regular polygon:
      <strong>R = a/(2·sin(π/n)), r = a/(2·tan(π/n))</strong>.</li>
  </ul>

  <h4>Special Polygons and Their Circle Relations</h4>
  <h5>Triangles</h5>
  <ul>
    <li><strong>[[Circumcircle]]</strong> (circumradius R): Exists for any triangle. Using the law of sines,
      <strong>R = a/(2·sin A) = b/(2·sin B) = c/(2·sin C)</strong>.</li>
    <li><strong>[[Incircle]]</strong> (inradius r): Radius of the circle tangent to all three sides. Formula:
      <strong>r = Δ/s</strong>, where Δ is the area (via Heron) and s is the semiperimeter <strong>(a+b+c)/2</strong>.</li>
    <li>Euler’s formula for triangle: <strong>R ≥ 2r</strong>, equality holds for an equilateral triangle.</li>
    <li>Power of a point for a triangle’s circumcenter O: <strong>OA² = R²</strong>.</li>
  </ul>

  <h5>Quadrilaterals</h5>
  <ul>
    <li><strong>[[Cyclic quadrilateral]]</strong>: A quadrilateral that can be inscribed in a circle. Opposite angles sum to 180°.</li>
    <li>Area (Brahmagupta’s formula) for a cyclic quadrilateral with sides a, b, c, d and semiperimeter s:
      <strong>Δ = √[(s‑a)(s‑b)(s‑c)(s‑d)]</strong>.</li>
    <li>For a square (regular quadrilateral), R = a·√2/2, r = a·√2/2·(1/2) = a·√2/4, and R = 2r.</li>
  </ul>

  <h5>Regular Hexagon and Octagon</h5>
  <ul>
    <li>Regular hexagon inscribed in a circle of radius R has side a = R; area = (3√3/2)R².</li>
    <li>Regular octagon inscribed in a circle of radius R has side a = R·√2 · (1 − 1/√2); area = 2R²·(1 + √2).</li>
  </ul>

  <h4>Important Geometric Constants and Formulas</h4>
  <ul>
    <li>[[Pythagoras' theorem]]: In a right‑angled triangle, <strong>a² + b² = c²</strong>.</li>
    <li>[[Heron's formula]]: For any triangle with sides a, b, c and semiperimeter s,
      <strong>Δ = √[s(s‑a)(s‑b)(s‑c)]</strong>.</li>
    <li>[[Euler's formula]] for polyhedra (V − E + F = 2) is useful when relating 3‑D extensions of polygons, though not directly tested in NDA geometry.</li>
    <li>[[Euclid's Elements]] (c. 300 BC) provides the axiomatic foundation for all the theorems listed above.</li>
  </ul>

  <h4>Coordinate Geometry – Common Constructions</h4>
  <ul>
    <li><strong>Finding the equation of a circle through three non‑collinear points</strong>:
      <ol>
        <li>Write the general form <strong>x² + y² + Dx + Ey + F = 0</strong> for each point.</li>
        <li>Solve the resulting linear system for D, E, F.</li>
        <li>Convert to centre‑radius form using the completion of squares.</li>
      </ol>
    </li>
    <li><strong>Circle–line intersection</strong>:
      <ul>
        <li>Substitute the line equation <strong>y = mx + c</strong> into the circle equation and solve the quadratic in x.</li>
        <li>The discriminant Δ determines the nature of intersection: Δ > 0 (two points), Δ = 0 (tangent), Δ < 0 (no real intersection).</li>
      </ul>
    </li>
    <li><strong>Orthogonal circles</strong>: Two circles are orthogonal if the tangents at their intersection points are perpendicular. Condition:
      <strong>(O₁O₂)² = R₁² + R₂²</strong>, where O₁O₂ is the distance between centres.</li>
  </ul>

  <h4>Advanced Topics Frequently Appearing in NDA/CDS/AFCAT</h4>
  <ul>
    <li><strong>Radical axis</strong> of two circles: The locus of points having equal power w.r.t. both circles; it is a straight line perpendicular to the line of centres.</li>
    <li><strong>Radical centre</strong>: The common point of radical axes of three non‑concentric circles.</li>
    <li><strong>In‑circle and ex‑circle of a triangle</strong>: Ex‑circle opposite vertex A has radius <strong>r_a = Δ/(s − a)</strong>.</li>
    <li><strong>Area of a regular polygon using the apothem</strong>:
      <strong>A = ½·P·r</strong>, where P is perimeter and r is apothem (inradius).</li>
    <li><strong>Inscribed polygon area maximisation</strong>: Among all n‑gons inscribed in a given circle, the regular n‑gon has the maximum area.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>In a circle, the length of a chord at distance d from the centre is <strong>2√(r² − d²)</strong>.</li>
      <li>For any triangle, <strong>R ≥ 2r</strong>; equality holds only for an equilateral triangle.</li>
      <li>Sum of interior angles of an n‑sided polygon = <strong>(n − 2)·180°</strong>.</li>
      <li>Area of a sector = <strong>½ r²θ</strong> (θ in radians); area of a segment = <strong>½ r²(θ − sinθ)</strong>.</li>
      <li>Opposite angles of a cyclic quadrilateral sum to <strong>180°</strong>.</li>
      <li>Equation of a circle with centre (h,k) is <strong>(x − h)² + (y − k)² = r²</strong>.</li>
      <li>Length of side of a regular n‑gon inscribed in a circle of radius R: <strong>a = 2R·sin(π/n)</strong>.</li>
      <li>Power of a point theorem: For point P outside the circle, <strong>PA·PB = PT²</strong>.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["area-perimeter"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    2D Figures: Area & Perimeter
  </h3>

  <h4>Fundamental Concepts</h4>
  <p>In the context of Indian defence examinations, <strong>mensuration</strong> is a high‑yield topic because it tests quick‑recall of formulas and the ability to apply them under time pressure. The two basic geometric attributes are:</p>
  <ul>
    <li><strong>Perimeter</strong> – the total length of the boundary of a figure. It is a linear measure and is additive for composite figures.</li>
    <li><strong>Area</strong> – the measure of the region enclosed by the boundary. It is expressed in square units and often involves trigonometric or algebraic manipulation.</li>
  </ul>
  <p>The relationship between the two is not linear; a small increase in perimeter can cause a large change in area, a fact frequently exploited in optimisation problems.</p>

  <h4>Standard Shapes and Their Formulas</h4>
  <p>Memorise the following table; it covers all shapes that appear in the NDA, CDS and AFCAT syllabi.</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#2a2a3a;">
        <th style="padding:8px; border:1px solid #444;"><strong>Shape</strong></th>
        <th style="padding:8px; border:1px solid #444;"><strong>Perimeter / Circumference</strong></th>
        <th style="padding:8px; border:1px solid #444;"><strong>Area</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Square]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">4a</td>
        <td style="padding:8px; border:1px solid #444;">a²</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Rectangle]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">2(l + b)</td>
        <td style="padding:8px; border:1px solid #444;">l·b</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Circle]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">2πr (or πd)</td>
        <td style="padding:8px; border:1px solid #444;">πr²</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Equilateral triangle]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">3a</td>
        <td style="padding:8px; border:1px solid #444;">(√3/4)a²</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Right triangle]] (legs a, b)</strong></td>
        <td style="padding:8px; border:1px solid #444;">a + b + √(a² + b²)</td>
        <td style="padding:8px; border:1px solid #444;">½ab</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Parallelogram]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">2(a + b)</td>
        <td style="padding:8px; border:1px solid #444;">a·h (base × altitude)</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Rhombus]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">4a</td>
        <td style="padding:8px; border:1px solid #444;">½(d₁·d₂) (product of diagonals)</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Trapezium]] (parallel sides a, b; height h)</strong></td>
        <td style="padding:8px; border:1px solid #444;">a + b + non‑parallel sides</td>
        <td style="padding:8px; border:1px solid #444;">½(a + b)h</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>[[Regular polygon]] (n sides, side a)</strong></td>
        <td style="padding:8px; border:1px solid #444;">n·a</td>
        <td style="padding:8px; border:1px solid #444;">(n·a²)/(4·tan(π/n))</td>
      </tr>
    </tbody>
  </table>

  <h4>Derivation Highlights</h4>
  <p>Understanding the origin of each formula aids retention:</p>
  <ul>
    <li><strong>Circle</strong> – The circumference follows from the definition of π as the ratio of circumference to diameter, a relationship first recorded by [[Archimedes]] (~250 BC).</li>
    <li><strong>Equilateral triangle</strong> – By dropping a perpendicular, the height becomes (√3/2)a, leading to the area (½·base·height) = (√3/4)a².</li>
    <li><strong>Rhombus</strong> – The diagonals bisect each other at right angles; the rhombus can be split into four right triangles, each of area ¼·d₁·d₂, summing to ½·d₁·d₂.</li>
    <li><strong>Regular polygon</strong> – Divide the polygon into n isosceles triangles with vertex angle 2π/n. Each triangle’s area = (½·a·R·sin(2π/n)), where R is the circum‑radius. Substituting R = a/(2·sin(π/n)) yields the compact formula shown above.</li>
  </ul>

  <h4>Advanced Mensuration Tools</h4>
  <p>Beyond the elementary formulas, the following tools are indispensable for solving composite‑figure problems and those involving coordinates.</p>

  <h5>1. Coordinate Geometry Approach</h5>
  <p>When vertices are given as (x₁, y₁), (x₂, y₂), …, (xₙ, yₙ), the <strong>Shoelace Formula</strong> (also called Gauss’s area formula) provides the area directly:</p>
  <p><strong>Area = ½ | Σ (xᵢyᵢ₊₁ – xᵢ₊₁yᵢ) |</strong>, where the indices wrap around (i = n + 1 ⇒ i = 1).</p>
  <p>Perimeter is obtained by summing the Euclidean distances between successive vertices:</p>
  <p><strong>Perimeter = Σ √[(xᵢ₊₁ – xᵢ)² + (yᵢ₊₁ – yᵢ)²]</strong>.</p>

  <h5>2. Trigonometric Area Formulas</h5>
  <ul>
    <li><strong>General triangle</strong> – <strong>Area = ½ab·sin C</strong>, where a and b are any two sides and C the included angle. This follows from the definition of sine in a right‑angled triangle.</li>
    <li><strong>Quadrilateral with one pair of parallel sides (trapezium)</strong> – The same principle yields the standard formula ½(a + b)h, but can also be expressed as <strong>Area = (p·q·sin θ)/2</strong> where p, q are the lengths of the non‑parallel sides and θ the angle between them.</li>
  </ul>

  <h5>3. Heron’s and Brahmagupta’s Formulas</h5>
  <p>These are crucial for problems where only side lengths are known.</p>
  <ul>
    <li><strong>Heron’s formula (triangle)</strong> – Let s = (a + b + c)/2 (semi‑perimeter). Then <strong>Area = √[s(s – a)(s – b)(s – c)]</strong>. This formula is derivable from the law of cosines and is often used in NDA questions involving integer sides.</li>
    <li><strong>Brahmagupta’s formula (cyclic quadrilateral)</strong> – For a quadrilateral inscribed in a circle, with sides a, b, c, d and semi‑perimeter s, <strong>Area = √[(s – a)(s – b)(s – c)(s – d)]</strong>. The condition of cyclicity can be verified via the opposite‑angle sum = 180° (supplementary).</li>
  </ul>

  <h4>Composite Figures and Subtraction Method</h4>
  <p>Many exam items ask for the area of a region formed by overlapping or removing shapes. The standard strategy is:</p>
  <ol>
    <li>Identify a larger simple shape that completely contains the required region.</li>
    <li>Subtract the areas of the unwanted parts (often triangles or sectors).</li>
    <li>Apply the appropriate perimeter formula to the outer boundary only if the question asks for perimeter.</li>
  </ol>
  <p>Example patterns include:</p>
  <ul>
    <li>Area of a <strong>ring</strong> (annulus) = π(R² – r²).</li>
    <li>Area of a <strong>segment</strong> of a circle = (½)r²(θ – sin θ), where θ is in radians.</li>
    <li>Area of a <strong>lens</strong> formed by two intersecting circles = sum of two circular segments.</li>
  </ul>

  <h4>Important Numerical Constants</h4>
  <p>For quick mental calculation, the following approximations are accepted in defence exams:</p>
  <ul>
    <li><strong>π ≈ 22/7</strong> (error < 0.04%).</li>
    <li><strong>√2 ≈ 1.414</strong>, <strong>√3 ≈ 1.732</strong>, <strong>√5 ≈ 2.236</strong>.</li>
    <li>Trigonometric values: <strong>sin 30° = ½</strong>, <strong>cos 60° = ½</strong>, <strong>tan 45° = 1</strong>, <strong>sin 45° = √2/2</strong>.</li>
  </ul>

  <h4>Common Pitfalls and Quick Checks</h4>
  <ul>
    <li>Never confuse the **diameter** with the **radius**; many errors arise when the problem gives “diameter = d” and the formula requires “r = d/2”.</li>
    <li>When using Heron’s formula, verify that the radicand is non‑negative; a negative value indicates an impossible triangle (violates triangle inequality).</li>
    <li>For regular polygons, the interior angle is given by <strong>(n – 2)·180°/n</strong>. This is useful when a problem provides the interior angle instead of the number of sides.</li>
    <li>In coordinate geometry, ensure that the vertices are listed in a consistent order (clockwise or anticlockwise); reversal changes the sign of the shoelace sum but not its absolute value.</li>
  </ul>

  <h4>Historical Context (Exam‑Relevant)</h4>
  <p>The study of mensuration dates back to ancient Indian texts such as the <strong>Śulba Sūtras</strong> (c. 800–500 BC), which contain early statements of the Pythagorean theorem and constructions of squares and circles. Later, [[Euclid's Elements]] (c. 300 BC) formalised many of the area formulas that are still taught today. Knowing these origins can help with “conceptual” questions that occasionally appear in the NDA essay section.</p>

  <h4>Sample Derivation: Area of a Regular Hexagon</h4>
  <p>Given side a, a regular hexagon can be decomposed into six equilateral triangles.</p>
  <ol>
    <li>Area of one equilateral triangle = (√3/4)a².</li>
    <li>Multiply by six → <strong>Area = (3√3/2)a²</strong>.</li>
    <li>Perimeter = 6a.</li>
  </ol>
  <p>Remember that a regular hexagon can also be inscribed in a circle of radius a; thus the same area can be expressed as <strong>(3√3/2)R²</strong> when the problem specifies the circum‑radius.</p>

  <h4>Conversion Between Units</h4>
  <p>Defence exams sometimes present data in mixed units (e.g., cm and m). Use the following conversions:</p>
  <ul>
    <li>1 m = 100 cm → for area, 1 m² = 10,000 cm².</li>
    <li>1 km = 1,000 m → 1 km² = 1,000,000 m².</li>
  </ul>
  <p>Always convert to a single unit before applying formulas to avoid scaling errors.</p>

  <h4>Strategic Problem‑Solving Checklist</h4>
  <p>Before attempting any calculation, run through this checklist:</p>
  <ol>
    <li>Identify the shape(s) – Is it a standard figure or a composite?</li>
    <li>Note all given dimensions – side lengths, radii, angles, coordinates.</li>
    <li>Choose the right formula – match the data to the table above.</li>
    <li>Check for special conditions – cyclic quadrilateral (Brahmagupta), right‑angle (Heron simplification), regularity.</li>
    <li>Perform unit consistency check.</li>
    <li>Calculate perimeter first (if needed) – it may be required for subsequent area steps (e.g., using radius = perimeter/2π for a circle).</li>
    <li>Execute the area computation, keeping an eye on radicals and trigonometric values.</li>
    <li>Verify by estimating – compare with a known simpler shape to catch gross errors.</li>
  </ol>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The area of a circle can be quickly found using <strong>π≈22/7</strong> when the radius is a multiple of 7.</li>
      <li>For a regular polygon, <strong>Area = (Perimeter × Apothem)/2</strong> – remember the apothem = side/(2·tan(π/n)).</li>
      <li>Heron’s formula reduces to <strong>Area = (1/4)√(4a²b² – ( a² + b² – c² )²)</strong> for a triangle with sides a, b, c, useful when one side is much larger.</li>
      <li>A cyclic quadrilateral’s area is given by <strong>Brahmagupta’s formula</strong>; the condition is that the sum of opposite angles equals 180°.</li>
      <li>Area of an annulus (ring) = π(R² – r²); the perimeter of the same region is 2π(R + r).</li>
      <li>In coordinate geometry, the shoelace method works for any simple polygon – just list vertices in order and apply the determinant‑style sum.</li>
      <li>The perimeter of a regular hexagon with side a is <strong>6a</strong>, and its area is <strong>(3√3/2)a²</strong>.</li>
      <li>When a problem gives the diagonal of a rhombus, use <strong>d₁·d₂ = 2a²·sin θ</strong> to relate side a and angle θ.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["surface-area-volume"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    3D Solids: Surface Area & Volume
  </h3>

  <h4 style="margin-top:24px;">Fundamental Concepts & Definitions</h4>
  <p>
    In mensuration, a <strong>solid</strong> is a three‑dimensional figure that occupies space. The two primary quantitative attributes of any solid are its <strong>surface area (SA)</strong> and <strong>volume (V)</strong>. Surface area is the total area that covers the exterior of the solid, while volume measures the amount of space enclosed within it.
  </p>
  <ul>
    <li><strong>Surface Area (SA)</strong>: Sum of the areas of all faces or, for curved surfaces, the integral of the infinitesimal area elements <em>dA</em>.</li>
    <li><strong>Volume (V)</strong>: Integral of infinitesimal volume elements <em>dV</em> over the region occupied by the solid.</li>
    <li><strong>Units</strong>: SA – square units (cm², m²); V – cubic units (cm³, m³).</li>
  </ul>

  <h4 style="margin-top:24px;">Key Historical Milestones</h4>
  <p>
    The systematic study of 3‑D geometry dates back to antiquity. 
    <ul>
      <li>~300 BC – [[Euclid]]’s <em>Elements</em> laid the axiomatic foundations for solid geometry.</li>
      <li>c. 287–212 BC – [[Archimedes]] derived the formula for the volume of a sphere using the method of exhaustion.</li>
      <li>1637 – [[Gaston Cavalieri]] introduced [[Cavalieri’s principle]], a cornerstone for modern volume calculations.</li>
      <li>1687 – [[Isaac Newton]] formalised calculus, enabling the derivation of surface area via integration.</li>
      <li>1750 – [[Leonhard Euler]] contributed to the understanding of polyhedral geometry, classifying regular solids.</li>
    </ul>
  </p>

  <h4 style="margin-top:24px;">Common Solids and Their Standard Formulas</h4>
  <p>Below are the most frequently encountered solids in NDA/CDS/AFCAT exams, together with their canonical surface‑area and volume expressions. All symbols assume the usual meanings: <strong>r</strong> – radius, <strong>h</strong> – height, <strong>l</strong> – slant height, <strong>a</strong> – side length, <strong>π</strong> – 3.14159….</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#333; color:#fff;">
        <th style="padding:8px; border:1px solid #555;">Solid</th>
        <th style="padding:8px; border:1px solid #555;">Surface Area (SA)</th>
        <th style="padding:8px; border:1px solid #555;">Volume (V)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#222;">
        <td style="padding:8px; border:1px solid #555;"><strong>[[Cube]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">6a²</td>
        <td style="padding:8px; border:1px solid #555;">a³</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Cuboid]]</strong> (rectangular prism)</td>
        <td style="padding:8px; border:1px solid #555;">2(lw + lh + wh)</td>
        <td style="padding:8px; border:1px solid #555;">lwh</td>
      </tr>
      <tr style="background:#222;">
        <td style="padding:8px; border:1px solid #555;"><strong>[[Sphere]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">4πr²</td>
        <td style="padding:8px; border:1px solid #555;">\(\frac{4}{3}πr³\)</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Cylinder]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">2πr(r + h)</td>
        <td style="padding:8px; border:1px solid #555;">πr²h</td>
      </tr>
      <tr style="background:#222;">
        <td style="padding:8px; border:1px solid #555;"><strong>[[Cone]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">πr(l + r)   (where l = √(r² + h²))</td>
        <td style="padding:8px; border:1px solid #555;">\(\frac{1}{3}πr²h\)</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Frustum of a cone]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">π(R + r)l + π(R² + r²)   (R = larger radius)</td>
        <td style="padding:8px; border:1px solid #555;">\(\frac{1}{3}πh(R² + Rr + r²)\)</td>
      </tr>
      <tr style="background:#222;">
        <td style="padding:8px; border:1px solid #555;"><strong>[[Square Pyramid]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">a² + 2a√( \(\frac{a²}{4} + h²\) )</td>
        <td style="padding:8px; border:1px solid #555;">\(\frac{1}{3}a²h\)</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Regular Tetrahedron]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">√3 a²</td>
        <td style="padding:8px; border:1px solid #555;">\(\frac{a³}{6√2}\)</td>
      </tr>
    </tbody>
  </table>

  <h4 style="margin-top:24px;">Derivation Techniques</h4>
  <p>Mastering the derivations helps in tackling non‑standard problems where formulas must be adapted. The three most powerful methods are:</p>
  <ol>
    <li><strong>Integration (Calculus) Method</strong>
      <ul>
        <li>For a solid of revolution about the <em>x‑axis</em>, use <strong>Disc/Washer method</strong>:
          \[
          V = π\int_{a}^{b}[f(x)]^{2}\,dx
          \]
          and <strong>Surface Area</strong>:
          \[
          SA = 2π\int_{a}^{b}f(x)\sqrt{1+[f'(x)]^{2}}\,dx
          \]</li>
        <li>For rotation about the <em>y‑axis</em>, swap variables accordingly.</li>
      </ul>
    </li>
    <li><strong>[[Cavalieri’s principle]]</strong>
      <ul>
        <li>Two solids having equal cross‑sectional areas at every height have equal volumes.</li>
        <li>Useful for comparing a sphere with a cylinder + cone (Archimedes’ classic proof).</li>
      </ul>
    </li>
    <li><strong>Geometric Decomposition</strong>
      <ul>
        <li>Break complex solids into known primitives (cubes, prisms, pyramids) and sum their volumes.</li>
        <li>For surface area, subtract internal faces that become hidden after assembly.</li>
      </ul>
    </li>
  </ol>

  <h4 style="margin-top:24px;">Special Solids and Advanced Topics</h4>
  <p>Beyond the elementary shapes, the following solids frequently appear in competitive examinations:</p>
  <ul>
    <li><strong>[[Ellipsoid]]</strong> – Generalisation of a sphere with semi‑axes a, b, c. Approximate SA formula (Knud Thomsen’s):
      \[
      SA \approx 4π\left(\frac{a^{p}b^{p}+a^{p}c^{p}+b^{p}c^{p}}{3}\right)^{1/p},\quad p≈1.6075
      \]</li>
    <li><strong>[[Torus]]</strong> – Generated by revolving a circle of radius r around an axis at distance R (R > r). 
      <ul>
        <li>Volume: \(V = 2π^{2}Rr^{2}\)</li>
        <li>Surface Area: \(SA = 4π^{2}Rr\)</li>
      </ul>
    </li>
    <li><strong>[[Frustum of a pyramid]]</strong> – Obtained by slicing the top of a pyramid parallel to its base.
      <ul>
        <li>Volume: \(\frac{h}{3}(A_{1}+A_{2}+\sqrt{A_{1}A_{2}})\) where \(A_{1},A_{2}\) are areas of the two parallel faces.</li>
        <li>Surface Area: Sum of the lateral area (trapezoidal faces) plus the two base areas.</li>
      </ul>
    </li>
    <li><strong>[[Regular Polyhedra]] (Platonic solids)</strong> – Five solids (tetrahedron, cube, octahedron, dodecahedron, icosahedron). Their SA and V are expressible in terms of edge length a:
      <table style="width:100%; border-collapse:collapse; margin-top:8px;">
        <thead>
          <tr style="background:#333; color:#fff;">
            <th style="padding:6px; border:1px solid #555;">Solid</th>
            <th style="padding:6px; border:1px solid #555;">SA</th>
            <th style="padding:6px; border:1px solid #555;">V</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background:#222;">
            <td style="padding:6px; border:1px solid #555;">[[Octahedron]]</td>
            <td style="padding:6px; border:1px solid #555;">2√3 a²</td>
            <td style="padding:6px; border:1px solid #555;">\(\frac{\sqrt{2}}{3}a^{3}\)</td>
          </tr>
          <tr>
            <td style="padding:6px; border:1px solid #555;">[[Dodecahedron]]</td>
            <td style="padding:6px; border:1px solid #555;">3√25+10 a²</td>
            <td style="padding:6px; border:1px solid #555;">\(\frac{15+7√5}{4}a^{3}\)</td>
          </tr>
          <tr style="background:#222;">
            <td style="padding:6px; border:1px solid #555;">[[Icosahedron]]</td>
            <td style="padding:6px; border:1px solid #555;">5√3 a²</td>
            <td style="padding:6px; border:1px solid #555;">\(\frac{5(3+√5)}{12}a^{3}\)</td>
          </tr>
        </tbody>
      </table>
    </li>
  </ul>

  <h4 style="margin-top:24px;">Important Theorems & Identities</h4>
  <p>These results are directly usable in problem solving:</p>
  <ul>
    <li><strong>Archimedes’ Theorem</strong> – The volume of a sphere equals the volume of a cylinder of the same radius and height minus the volume of the inscribed cone:
      \[
      V_{sphere}=V_{cylinder}-V_{cone} = πr^{3}\left(2 - \frac{1}{3}\right)=\frac{4}{3}πr^{3}
      \]</li>
    <li><strong>Pappus’ Centroid Theorem</strong> – The volume generated by rotating a plane figure about an external axis equals the product of the area of the figure and the distance travelled by its centroid:
      \[
      V = A \times (2πd)
      \]</li>
    <li><strong>Euler’s Formula for Polyhedra</strong> – For any convex polyhedron,
      \[
      V - E + F = 2
      \]
      where V, E, F denote number of vertices, edges, faces respectively.</li>
    <li><strong>Surface‑Area–Volume Ratio</strong> – For a sphere,
      \[
      \frac{SA}{V} = \frac{3}{r}
      \]
      indicating that as radius increases, the ratio decreases, a fact exploited in heat‑transfer problems.</li>
  </ul>

  <h4 style="margin-top:24px;">Comparison of Common Solids (SA vs V)</h4>
  <p>The table below highlights how surface area and volume scale when linear dimensions are multiplied by a factor k.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#444; color:#fff;">
        <th style="padding:8px; border:1px solid #666;">Solid</th>
        <th style="padding:8px; border:1px solid #666;">SA ∝ kⁿ</th>
        <th style="padding:8px; border:1px solid #666;">V ∝ kᵐ</th>
        <th style="padding:8px; border:1px solid #666;">n / m Ratio</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#333;">
        <td style="padding:8px; border:1px solid #666;">All solids (uniform scaling)</td>
        <td style="padding:8px; border:1px solid #666;">k²</td>
        <td style="padding:8px; border:1px solid #666;">k³</td>
        <td style="padding:8px; border:1px solid #666;">2/3</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #666;">[[Cylinder]] (radius r, height h)</td>
        <td style="padding:8px; border:1px solid #666;">k² (if both r and h scaled)</td>
        <td style="padding:8px; border:1px solid #666;">k³</td>
        <td style="padding:8px; border:1px solid #666;">2/3</td>
      </tr>
      <tr style="background:#333;">
        <td style="padding:8px; border:1px solid #666;">[[Cone]] (r, h)</td>
        <td style="padding:8px; border:1px solid #666;">k²</td>
        <td style="padding:8px; border:1px solid #666;">k³</td>
        <td style="padding:8px; border:1px solid #666;">2/3</td>
      </tr>
    </tbody>
  </table>

  <h4 style="margin-top:24px;">Common Pitfalls & Quick‑Check Strategies</h4>
  <ul>
    <li>Never forget the <strong>slant height</strong> l for cones and pyramids; it is \(\sqrt{r^{2}+h^{2}}\) or \(\sqrt{\frac{a^{2}}{4}+h^{2}}\) respectively.</li>
    <li>When a problem mentions “total surface area”, include both base(s) and curved surface unless explicitly stated “lateral surface area”.</li>
    <li>For solids formed by truncation, remember to subtract the volume/area of the removed part, not add it.</li>
    <li>Be vigilant about units: if radius is given in cm and height in m, convert before using formulas.</li>
    <li>In rotational problems, verify the axis of rotation – a common source of sign errors in the integral limits.</li>
  </ul>

  <h4 style="margin-top:24px;">Application‑Oriented Problems</h4>
  <p>Competitive exams often embed mensuration within word problems. The following systematic approach is recommended:</p>
  <ol>
    <li><strong>Sketch the figure</strong> – label all given dimensions.</li>
    <li><strong>Identify the solid type</strong> – decide whether it matches a standard solid or a composite.</li>
    <li><strong>Choose the correct formula</strong> – use the table above; if needed, derive via integration or decomposition.</li>
    <li><strong>Insert numerical values</strong> – keep intermediate results exact (e.g., keep π as π) to avoid rounding errors.</li>
    <li><strong>Check dimensions</strong> – ensure SA and V have appropriate units and that the answer is sensible (e.g., SA should be larger than any single face area).</li>
  </ol>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Surface area of a sphere = <strong>4πr²</strong>; volume = <strong>\(\frac{4}{3}πr³\)</strong> (Archimedes’ result).</li>
      <li>For a right circular cylinder, <strong>lateral SA = 2πrh</strong> and total SA = <strong>2πr(r + h)</strong>.</li>
      <li>Volume of a cone is exactly one‑third that of a cylinder with the same base and height: <strong>V_cone = \(\frac{1}{3}πr²h\)</strong>.</li>
      <li>Using [[Pappus’ Centroid Theorem]], the volume generated by rotating a plane region of area A about an external axis at distance d is <strong>V = 2πd × A</strong>.</li>
      <li>In any solid, if all linear dimensions are multiplied by k, <strong>SA scales as k²** and **V scales as k³** (ratio 2:3).</li>
      <li>For a frustum of a cone, the volume formula \(\frac{1}{3}πh(R² + Rr + r²)\) is frequently tested.</li>
      <li>Euler’s formula for convex polyhedra: <strong>V – E + F = 2</strong> – handy for counting faces/edges in complex solids.</li>
      <li>When a problem states “total surface area” of a pyramid, always add the base area to the four triangular faces.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["percentages-profit-loss"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Percentages, Profit & Loss
  </h3>

  <h4>Fundamental Concepts of Percentage</h4>
  <p><strong>Percentage</strong> (from Latin <em>per centum</em>, meaning “per hundred”) is a dimension‑less ratio expressed as a part of 100. The generic conversion is:</p>
  <ul>
    <li><strong>Fraction → Percentage</strong>: Multiply the fraction by 100.</li>
    <li><strong>Decimal → Percentage</strong>: Multiply the decimal by 100.</li>
    <li><strong>Percentage → Decimal</strong>: Divide by 100.</li>
  </ul>
  <p>Key historical reference: The modern use of the symbol “%” was standardized after the 15th‑century printing press, but its arithmetic roots trace back to the ancient Babylonians who used base‑60 fractions.</p>

  <h4>Core Formulas & Quick‑Conversion Rules</h4>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#f0f0f0;">
        <th style="border:1px solid #ccc; padding:6px;">Operation</th>
        <th style="border:1px solid #ccc; padding:6px;">Formula</th>
        <th style="border:1px solid #ccc; padding:6px;">Typical Use‑Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Finding X% of a Number</strong></td>
        <td style="border:1px solid #ccc; padding:6px;"><strong>(X/100) × N</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">Discount on a price, interest calculation.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Increase by X%</strong></td>
        <td style="border:1px solid #ccc; padding:6px;"><strong>N × (1 + X/100)</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">Inflation‑adjusted price, salary hike.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Decrease by X%</strong></td>
        <td style="border:1px solid #ccc; padding:6px;"><strong>N × (1 – X/100)</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">Sale discount, depreciation.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Percentage Change</strong></td>
        <td style="border:1px solid #ccc; padding:6px;"><strong>((New – Old)/Old) × 100</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">Growth rates, profit margins.</td>
      </tr>
    </tbody>
  </table>

  <h4>Common Pitfalls and How to Avoid Them</h4>
  <ul>
    <li>Confusing <strong>percentage point</strong> with <strong>percent change</strong>. A shift from 20% to 30% is a 10‑percentage‑point increase but a 50% increase in value.</li>
    <li>Neglecting to convert percentages to decimals before applying algebraic manipulation, especially in equations involving multiple percentage terms.</li>
    <li>Applying the same percentage to both numerator and denominator when dealing with ratios – instead, treat each component separately.</li>
  </ul>

  <h4>Profit & Loss – Core Definitions</h4>
  <p>In commercial mathematics, <strong>Profit</strong> is the excess of <strong>selling price (SP)</strong> over <strong>cost price (CP)</strong>. Conversely, <strong>Loss</strong> occurs when CP exceeds SP.</p>
  <ul>
    <li><strong>Profit = SP – CP</strong></li>
    <li><strong>Loss = CP – SP</strong></li>
    <li><strong>Profit % = (Profit / CP) × 100</strong></li>
    <li><strong>Loss % = (Loss / CP) × 100</strong></li>
  </ul>
  <p>Historical note: The earliest recorded profit‑loss problem appears in the 9th‑century Persian text “Al‑Kashf” attributed to [[Al‑Kashif]] (c. 870 CE), illustrating the timeless nature of these concepts.</p>

  <h4>Deriving the Selling Price from Given Percentage</h4>
  <p>When a problem provides a profit or loss percentage, the selling price can be directly computed:</p>
  <ul>
    <li><strong>If profit of X% is given:</strong> <strong>SP = CP × (1 + X/100)</strong></li>
    <li><strong>If loss of X% is given:</strong> <strong>SP = CP × (1 – X/100)</strong></li>
  </ul>
  <p>Example (illustrative): A trader buys a gadget for ₹<strong>12,000</strong> and sells it at a 15% profit. The selling price is ₹12,000 × 1.15 = ₹13,800.</p>

  <h4>Reverse Calculations – Finding Cost Price</h4>
  <p>Often exam questions give the selling price and the profit/loss percentage, demanding the original cost price:</p>
  <ul>
    <li><strong>From profit %:</strong> <strong>CP = SP / (1 + X/100)</strong></li>
    <li><strong>From loss %:</strong> <strong>CP = SP / (1 – X/100)</strong></li>
  </ul>
  <p>Real‑world scenario: A retailer reports a 20% loss on a batch of wheat sold for ₹45,000. The original cost is ₹45,000 / 0.80 = ₹56,250.</p>

  <h4>Compound Profit & Loss – Multiple Transactions</h4>
  <p>When an item undergoes successive profit or loss percentages, the net effect is multiplicative, not additive. The cumulative factor is the product of each transaction’s factor.</p>
  <ul>
    <li>First transaction: factor <strong>F₁ = 1 ± X₁/100</strong></li>
    <li>Second transaction: factor <strong>F₂ = 1 ± X₂/100</strong></li>
    <li>Net factor <strong>F = F₁ × F₂ × …</strong></li>
    <li>Overall % change = (F – 1) × 100</li>
  </ul>
  <p>Illustration: A dealer incurs a 10% loss, then a 20% profit on the reduced price. Net factor = 0.90 × 1.20 = 1.08 ⇒ 8% overall profit.</p>

  <h4>Discounts, Mark‑ups, and Their Interplay with Profit</h4>
  <p>In retail, <strong>discount</strong> is a reduction from the <strong>marked price (MP)</strong>. The relationship among CP, MP, and SP is crucial for margin analysis.</p>
  <ul>
    <li>Mark‑up % = ((MP – CP) / CP) × 100</li>
    <li>Discount % = ((MP – SP) / MP) × 100</li>
    <li>Effective profit % = ((SP – CP) / CP) × 100</li>
  </ul>
  <p>Case study: A shop buys a TV for ₹30,000, marks it up by 25% (MP = ₹37,500), then offers a 10% discount (SP = ₹33,750). Profit = ₹3,750 ⇒ profit % = 12.5%.</p>

  <h4>Special Situations</h4>
  <h5>1. “Profit on Cost” vs “Profit on Selling Price”</h5>
  <p>Some problems use profit expressed on SP rather than CP, leading to the formula:</p>
  <ul>
    <li><strong>Profit on SP = (Profit / SP) × 100</strong></li>
    <li>Rearranged: <strong>SP = CP / (1 – Profit % / 100)</strong></li>
  </ul>
  <p>Example: A dealer claims a 25% profit on SP of ₹8,000. CP = ₹8,000 × (1 – 0.25) = ₹6,000.</p>

  <h5>2. “Loss on Cost” vs “Loss on Selling Price”</h5>
  <p>Analogous to profit, loss expressed on SP follows:</p>
  <ul>
    <li><strong>Loss on SP = (Loss / SP) × 100</strong></li>
    <li>Rearranged: <strong>SP = CP / (1 + Loss % / 100)</strong></li>
  </ul>

  <h5>3. “Percentage of Profit” in Mixed Transactions</h5>
  <p>When a business sells multiple items at different profit percentages, the overall profit % is weighted by the individual cost contributions.</p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#e8f5e9;">
        <th style="border:1px solid #bbb; padding:6px;">Item</th>
        <th style="border:1px solid #bbb; padding:6px;">Cost (₹)</th>
        <th style="border:1px solid #bbb; padding:6px;">Profit %</th>
        <th style="border:1px solid #bbb; padding:6px;">Profit (₹)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;">A</td>
        <td style="border:1px solid #bbb; padding:6px;">10,000</td>
        <td style="border:1px solid #bbb; padding:6px;">20</td>
        <td style="border:1px solid #bbb; padding:6px;">2,000</td>
      </tr>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;">B</td>
        <td style="border:1px solid #bbb; padding:6px;">15,000</td>
        <td style="border:1px solid #bbb; padding:6px;">10</td>
        <td style="border:1px solid #bbb; padding:6px;">1,500</td>
      </tr>
      <tr>
        <td colspan="3" style="border:1px solid #bbb; padding:6px; text-align:right;"><strong>Total Cost</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">25,000</td>
      </tr>
      <tr>
        <td colspan="3" style="border:1px solid #bbb; padding:6px; text-align:right;"><strong>Total Profit</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">3,500</td>
      </tr>
      <tr>
        <td colspan="3" style="border:1px solid #bbb; padding:6px; text-align:right;"><strong>Overall Profit %</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">14 %</td>
      </tr>
    </tbody>
  =></table>

  <h4>Important Numerical Constants & Benchmarks</h4>
  <ul>
    <li>Standard discount rate used by the <strong>Reserve Bank of India (RBI)</strong> for repo operations is typically around 4.0% (as of 2023‑24).</li>
    <li>India’s <strong>inflation rate</strong> averaged 6.5% in FY 2022‑23, a useful reference for “price increase” problems.</li>
    <li>World Bank’s <strong>global trade growth</strong> of 3.2% (2022) provides realistic contexts for profit‑margin calculations in import‑export scenarios.</li>
    <li>Under the <strong>Goods and Services Tax (GST) Act, 2017</strong>, the standard tax rate is 18%; many profit‑loss questions embed GST to test net‑profit understanding.</li>
  </ul>

  <h4>Advanced Techniques for Rapid Computation</h4>
  <ul>
    <li><strong>Cross‑multiplication shortcut</strong>: To find X% of a large number, split the number into manageable chunks (e.g., 12,345 = 12,000 + 345) and apply the percentage separately.</li>
    <li><strong>Use of 5% and 10% benchmarks</strong>: 5% is half of 10%; many exam problems can be solved by adding/subtracting half of a 10% value.</li>
    <li><strong>Vedic Maths “Nikhilam” method</strong> for subtraction when dealing with high‑percentage discounts (e.g., 97% discount → subtract 3% of the base).</li>
    <li><strong>Algebraic substitution</strong> for unknowns: Set CP = x, then express SP in terms of x using the given percentage, and solve linear equations.</li>
  </ul>

  <h4>Common Real‑World Applications in Defence‑Related Contexts</h4>
  <ul>
    <li>Procurement of ammunition under the <strong>Defense Procurement Procedure (DPP) 2020</strong> often involves multi‑stage price escalations expressed as annual percentage increments.</li>
    <li>Logistics of the <strong>Indian Armed Forces</strong> include fuel consumption calculations where profit‑loss concepts translate to cost‑avoidance measures (e.g., fuel‑efficiency improvements of 12%).</li>
    <li>Military contracts for equipment (e.g., the [[BrahMos missile]]) may quote “cost‑plus” percentages, demanding clear comprehension of profit on cost versus profit on selling price.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Profit % is always calculated on <strong>cost price (CP)</strong>, not on selling price.</li>
      <li>A successive loss of 20% followed by a gain of 25% results in a net profit of 2% (0.80 × 1.25 = 1.00 + 0.02).</li>
      <li>When “% discount on MP” is given, first compute MP = CP × (1 + Mark‑up / 100) before applying the discount.</li>
      <li>For any percentage problem, converting the percent to its decimal form (÷100) before algebraic manipulation eliminates common errors.</li>
      <li>In “profit on SP” questions, use CP = SP × (1 – Profit % / 100) to retrieve the original cost.</li>
      <li>GST of 18% on a product effectively reduces the seller’s profit margin by that same percentage unless the seller adjusts the SP accordingly.</li>
      <li>Compound percentage changes multiply the individual factors; never add the percentages directly.</li>
      <li>When asked for “percentage increase from ₹A to ₹B”, use ((B – A)/A) × 100, not ((B – A)/B) × 100.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["ratios-averages"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Ratios, Proportions & Averages
  </h3>

  <h4><strong>1. Fundamental Concepts</strong></h4>
  <p>
    A <strong>ratio</strong> expresses a quantitative relationship between two or more numbers by comparing their sizes. Formally, if <em>a</em> and <em>b</em> are non‑zero quantities, the ratio is written as <strong>a : b</strong> or \(\frac{a}{b}\). Ratios are dimensionless; they convey only the relative magnitude and are invariant under scaling.
  </p>
  <p>
    A <strong>proportion</strong> states that two ratios are equal, i.e., \(\frac{a}{b} = \frac{c}{d}\). This can be rearranged to the cross‑multiplication identity <strong>ad = bc</strong>. Proportional relationships underpin many physical laws (e.g., [[Boyle's law]], [[Ohm's law]]) and are central to problem‑solving in the defence examinations.
  </p>

  <h4><strong>2. Classification of Ratios</strong></h4>
  <ul>
    <li><strong>Simple Ratio</strong>: Involves two terms only (e.g., 3 : 4).</li>
    <li><strong>Compound Ratio</strong>: Product of two or more simple ratios (e.g., (2 : 3) × (5 : 7) = 10 : 21).</li>
    <li><strong>Continued Ratio</strong>: Expressed as a chain of ratios, often used in geometry (e.g., a : b : c : d).</li>
    <li><strong>Direct Ratio (Direct Proportion)</strong>: When one quantity increases, the other increases in the same ratio; mathematically, \(y \propto x\) ⇒ \(y = kx\).</li>
    <li><strong>Inverse Ratio (Inverse Proportion)</strong>: When one quantity increases, the other decreases proportionally; \(y \propto \frac{1}{x}\) ⇒ \(y = \frac{k}{x}\).</li>
  </ul>

  <h4><strong>3. Properties of Ratios and Proportions</strong></h4>
  <ul>
    <li>Multiplying or dividing each term of a ratio by the same non‑zero constant does not alter its value.</li>
    <li>In a proportion, the product of the means equals the product of the extremes (<strong>ad = bc</strong>).</li>
    <li>When three terms are in continued proportion, the middle term is the <strong>geometric mean</strong> of the outer terms: \(b^2 = ac\).</li>
    <li>Any ratio can be expressed in its simplest form by dividing both terms by their <strong>greatest common divisor (GCD)</strong>.</li>
    <li>For a set of numbers in proportion, the sum of the antecedents equals the sum of the consequents if the common ratio is 1.</li>
  </ul>

  <h4><strong>4. Methods of Solving Proportional Problems</strong></h4>
  <p><strong>Rule of Three (Simple Proportion)</strong></p>
  <p>Given \(a:b = c:x\), solve for <em>x</em> using cross‑multiplication: <strong>x = \frac{b \times c}{a}</strong>. This forms the backbone of many NDA/ CDS questions.</p>

  <p><strong>Compound Proportion</strong></p>
  <p>When multiple relationships are involved, multiply the individual ratios to obtain a compound ratio, then apply the rule of three.</p>

  <p><strong>Alligation Method (Mixture Problems)</strong></p>
  <ul>
    <li>Used when two or more ingredients with different concentrations are mixed to achieve a desired concentration.</li>
    <li>Set up a tabular form: <br>
      <table border="1" cellpadding="5" cellspacing="0" style="margin-top:8px;">
        <tr><th>Ingredient</th><th>Concentration (%)</th><th>Difference from Desired</th><th>Ratio</th></tr>
        <tr><td>Higher</td><td>p₁</td><td>p₁ - p_d</td><td rowspan="2">p₁ - p_d : p_d - p₂</td></tr>
        <tr><td>Lower</td><td>p₂</td><td>p_d - p₂</td></tr>
      </table>
    </li>
    <li>Allocate the total quantity in the ratio obtained, then compute individual amounts.</li>
  </ul>

  <h4><strong>5. Averages – Definitions and Types</strong></h4>
  <p>In quantitative analysis, an <strong>average</strong> is a single value representing a set of numbers. Three classical means dominate the syllabus:</p>
  <ul>
    <li><strong>Arithmetic Mean (AM)</strong>: \(\displaystyle \text{AM} = \frac{\sum_{i=1}^{n} a_i}{n}\). It is the most frequently used mean in combat logistics and budgeting.</li>
    <li><strong>Geometric Mean (GM)</strong>: \(\displaystyle \text{GM} = \sqrt[n]{\prod_{i=1}^{n} a_i}\). Essential for growth rates, e.g., compound interest, and for interpreting [[Fibonacci sequence]]‑related problems.</li>
    <li><strong>Harmonic Mean (HM)</strong>: \(\displaystyle \text{HM} = \frac{n}{\sum_{i=1}^{n} \frac{1}{a_i}}\). Primarily appears in problems involving speeds, rates, and resistances in parallel.</li>
  </ul>

  <h4><strong>6. Inter‑relationships Among Means</strong></h4>
  <p>For any set of positive real numbers, the inequality holds: <strong>HM ≤ GM ≤ AM</strong>. Equality occurs only when all numbers are identical. This relationship is often tested in reasoning‑type questions.</p>

  <h4><strong>7. Applications in Defence‑Related Scenarios</strong></h4>
  <ul>
    <li><strong>Logistics</strong>: Determining the average consumption of fuel per aircraft using AM helps in planning sorties.</li>
    <li><strong>Ballistics</strong>: The GM of successive velocity increments provides the effective muzzle velocity when multiple stages are involved.</li>
    <li><strong>Signal Processing</strong>: HM is used to average reciprocal quantities such as noise power spectral densities.</li>
    <li><strong>Strategic Planning</strong>: Ratios of troop strength to equipment (e.g., infantry : tanks) guide force composition.</li>
  </ul>

  <h4><strong>8. Common Formulae – Quick Reference Table</strong></h4>
  <table border="1" cellpadding="6" cellspacing="0" style="width:100%; margin-top:10px;">
    <tr style="background:#f2f2f2;">
      <th>Concept</th>
      <th>Formula</th>
      <th>Typical Use‑Case</th>
    </tr>
    <tr>
      <td><strong>Simple Ratio</strong></td>
      <td>\(a:b = \frac{a}{b}\)</td>
      <td>Comparing manpower to equipment</td>
    </tr>
    <tr>
      <td><strong>Compound Ratio</strong></td>
      <td>\(R = (a_1:b_1) \times (a_2:b_2) \times \dots\)</td>
      <td>Multi‑stage supply chain efficiency</td>
    </tr>
    <tr>
      <td><strong>Direct Proportion</strong></td>
      <td>\(y = kx\)</td>
      <td>Fuel consumption vs. flight hours</td>
    </tr>
    <tr>
      <td><strong>Inverse Proportion</strong></td>
      <td>\(y = \frac{k}{x}\)</td>
      <td>Speed vs. travel time</td>
    </tr>
    <tr>
      <td><strong>Rule of Three</strong></td>
      <td>\(x = \frac{b \times c}{a}\)</td>
      <td>Estimating ammunition needed for a given target</td>
    </tr>
    <tr>
      <td><strong>Arithmetic Mean</strong></td>
      <td>\(\displaystyle \frac{a_1 + a_2 + \dots + a_n}{n}\)</td>
      <td>Average daily rations</td>
    </tr>
    <tr>
      <td><strong>Geometric Mean</strong></td>
      <td>\(\displaystyle \sqrt[n]{a_1 a_2 \dots a_n}\)</td>
      <td>Compound growth of personnel strength</td>
    </tr>
    <tr>
      <td><strong>Harmonic Mean</strong></td>
      <td>\(\displaystyle \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + \dots + \frac{1}{a_n}}\)</td>
      <td>Average speed of aircraft flying different legs</td>
    </tr>
    <tr>
      <td><strong>Alligation</strong></td>
      <td>\(\frac{p_1 - p_d}{p_d - p_2}\)</td>
      <td>Mixing fuels of varying octane ratings</td>
    </tr>
    <tr>
      <td><strong>Continued Proportion</strong></td>
      <td>\(a:b = b:c = c:d = \dots\)</td>
      <td>Designing stepped gear ratios</td>
    </tr>
  </table>

  <h4><strong>9. Advanced Topics</strong></h4>
  <p><strong>9.1. Ratio of Means in Sequences</strong></p>
  <p>When dealing with arithmetic or geometric progressions, the ratio of consecutive terms can be exploited to find unknowns quickly. For an arithmetic progression (AP) with common difference <em>d</em>, the ratio of successive terms is \(\frac{a + (n-1)d}{a + (n-2)d}\). For a geometric progression (GP) with ratio <em>r</em>, the ratio is constant: \(\frac{a r^{n-1}}{a r^{n-2}} = r\).</p>

  <p><strong>9.2. Weighted Averages</strong></p>
  <p>In many operational contexts, each element contributes unequally. The weighted average is given by \(\displaystyle \frac{\sum w_i a_i}{\sum w_i}\), where \(w_i\) denotes the weight (e.g., number of troops, tonnage of cargo). This is vital for calculating overall effectiveness when different units have disparate capabilities.</p>

  <p><strong>9.3. Application of [[Euclid's Lemma]] in Ratio Problems</strong></p>
  <p>Euclid’s Lemma states that if a prime divides a product, it must divide at least one factor. This is useful when simplifying ratios involving large numbers, ensuring the final ratio is in its lowest terms.</p>

  <p><strong>9.4. Golden Ratio & Military Architecture</strong></p>
  <p>The famous [[Golden ratio]] \(\phi = \frac{1+\sqrt{5}}{2} \approx 1.618\) appears in optimal design of fortifications where the proportion of height to base provides maximum defensive strength while minimizing material usage.</p>

  <h4><strong>10. Common Pitfalls and Tricks</strong></h4>
  <ul>
    <li>Never forget to reduce ratios to their simplest form before applying cross‑multiplication; otherwise, you may introduce spurious solutions.</li>
    <li>When dealing with mixtures, always verify that the resultant concentration lies between the extremes; if not, the problem data is inconsistent.</li>
    <li>For averages, ensure that the data set contains only positive numbers when applying the GM–HM inequality.</li>
    <li>In proportion problems involving time, remember to convert all time units to a common base (seconds, minutes, or hours) before applying the rule of three.</li>
    <li>When multiple proportional relations are combined, write each relation explicitly before forming the compound ratio to avoid algebraic errors.</li>
  </ul>

  <h4><strong>11. Sample Worked‑Out Framework (Illustrative)</strong></h4>
  <p><em>Problem Sketch:</em> A squad of 120 soldiers is to be equipped with rifles and pistols in the ratio 3 : 2. Each rifle costs ₹15,000 and each pistol ₹7,500. Find the total expenditure.</p>
  <ol>
    <li>Determine individual quantities: <br>
        Rifle count = \(\frac{3}{3+2} \times 120 = 72\); <br>
        Pistol count = \(\frac{2}{5} \times 120 = 48\).</li>
    <li>Compute cost: <br>
        Cost of rifles = 72 × ₹15,000 = ₹1,080,000; <br>
        Cost of pistols = 48 × ₹7,500 = ₹360,000.</li>
    <li>Total expenditure = ₹1,440,000.</li>
  </ol>
  <p>This example demonstrates seamless use of ratios, reduction, and weighted calculation – a pattern that repeats in many NDA/ CDS questions.</p>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>In a proportion \(\frac{a}{b} = \frac{c}{d}\), the product of the extremes equals the product of the means (<strong>ad = bc</strong>).</li>
      <li>The <strong>GM of two numbers</strong> is the square root of their product: \(\sqrt{ab}\).</li>
      <li>For numbers in continued proportion, the middle term is the geometric mean of the outer terms.</li>
      <li>When three quantities are in arithmetic progression, the middle term equals the arithmetic mean of the other two.</li>
      <li>Weighted average formula: \(\displaystyle \frac{\sum w_i a_i}{\sum w_i}\) – indispensable for mixed‑unit problems.</li>
      <li>Alligation method ratio = \(\frac{p_{\text{higher}} - p_{\text{desired}}}{p_{\text{desired}} - p_{\text{lower}}}\).</li>
      <li>HM is best for averaging speeds: \(\displaystyle \text{HM} = \frac{2}{\frac{1}{v_1} + \frac{1}{v_2}}\).</li>
      <li>Direct proportion constant \(k\) can be found as \(k = \frac{y}{x}\) and reused for multiple queries.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["time-distance"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Time, Speed, Distance & Work
  </h3>

  <h4>1. Fundamental Concepts</h4>
  <p><strong>Uniform Linear Motion (ULM)</strong> – Motion in a straight line with constant speed. The three primary variables are:</p>
  <ul>
    <li><strong>Distance (d)</strong> – total path covered, measured in kilometres (km), metres (m), or nautical miles (nm).</li>
    <li><strong>Speed (v)</strong> – rate of covering distance, expressed as <em>kilometres per hour (km/h)</em>, <em>metres per second (m/s)</em>, or <em>knots</em>.</li>
    <li><strong>Time (t)</strong> – duration of travel, measured in hours (h), minutes (min), or seconds (s).</li>
  </ul>
  <p>The relationship is codified by the classic formula:</p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <tr style="background:#222; color:#fff;">
      <th style="padding:8px; border:1px solid #444;">Formula</th>
      <th style="padding:8px; border:1px solid #444;">Derivation</th>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;"><strong>d = v × t</strong></td>
      <td style="padding:8px; border:1px solid #444;">Distance equals speed multiplied by time (direct proportionality).</td>
    </tr>
    <tr style="background:#f9f9f9;">
      <td style="padding:8px; border:1px solid #444;"><strong>v = d ÷ t</strong></td>
      <td style="padding:8px; border:1px solid #444;">Speed is distance per unit time.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;"><strong>t = d ÷ v</strong></td>
      <td style="padding:8px; border:1px solid #444;">Time is distance divided by speed.</td>
    </tr>
  </table>

  <h4>2. Speed Variants & Their Applications</h4>
  <ul>
    <li><strong>Average Speed</strong> – Total distance divided by total time, irrespective of varying speeds during the journey. Formula: <strong>v_avg = Σd ÷ Σt</strong>.</li>
    <li><strong>Relative Speed</strong> – Used when two bodies move towards or away from each other. For opposite directions, <strong>v_rel = v₁ + v₂</strong>; for same direction, <strong>v_rel = |v₁ – v₂|</strong>.</li>
    <li><strong>Instantaneous Speed</strong> – Derivative of distance with respect to time (<em>v = ds/dt</em>), foundational to calculus.</li>
    <li><strong>Harmonic Mean Speed</strong> – Relevant when equal distances are covered at different speeds. Formula: <strong>v_h = 2 / (1/v₁ + 1/v₂)</strong>.</li>
  </ul>

  <h4>3. Important Historical Foundations</h4>
  <p>The quantitative treatment of motion began with <strong><em>[[Galileo Galilei]]</em></strong> (1564‑1642), who formulated the law of falling bodies and introduced the concept of inertia. Later, <strong><em>[[Isaac Newton]]</em></strong> (1643‑1727) codified the three laws of motion, providing the basis for modern kinematics and dynamics. In the Indian context, <strong><em>[[Sir C. V. Raman]]</em></strong> contributed to wave theory, indirectly influencing the study of speed in oscillatory systems.</p>

  <h4>4. Conversion Factors & Unit Consistency</h4>
  <p>Ensuring unit consistency is a frequent source of error in examinations. Key conversion tables:</p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <tr style="background:#222; color:#fff;">
      <th style="padding:8px; border:1px solid #444;">From → To</th>
      <th style="padding:8px; border:1px solid #444;">Factor</th>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;">km/h → m/s</td>
      <td style="padding:8px; border:1px solid #444;">÷ 3.6</td>
    </tr>
    <tr style="background:#f9f9f9;">
      <td style="padding:8px; border:1px solid #444;">m/s → km/h</td>
      <td style="padding:8px; border:1px solid #444;">× 3.6</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;">knots → km/h</td>
      <td style="padding:8px; border:1px solid #444;">× 1.852</td>
    </tr>
    <tr style="background:#f9f9f9;">
      <td style="padding:8px; border:1px solid #444;">minutes → hours</td>
      <td style="padding:8px; border:1px solid #444;">÷ 60</td>
    </tr>
  </table>

  <h4>5. Work and Power – Core Relations</h4>
  <p><strong>Work (W)</strong> is defined as the product of force and displacement in the direction of the force: <strong>W = F × d × cosθ</strong>. In the context of uniform motion, work can be expressed via kinetic energy:</p>
  <ul>
    <li><strong>Kinetic Energy (KE)</strong> – <strong>KE = ½ m v²</strong>, where <em>m</em> is mass and <em>v</em> is speed.</li>
    <li><strong>Power (P)</strong> – Rate of doing work: <strong>P = W ÷ t = F × v</strong>.</li>
    <li>When dealing with machines, the efficiency factor (η) becomes crucial: <strong>η = (P_output ÷ P_input) × 100 %</strong>.</li>
  </ul>

  <h4>6. Classic Problem Types & Solution Strategies</h4>
  <p>Examination questions often fall into the following categories. Mastery of each pattern enhances speed and accuracy.</p>
  <ol>
    <li><strong>Direct Distance‑Speed‑Time</strong> – Straightforward substitution into <strong>d = v t</strong>.</li>
    <li><strong>Relative Motion</strong> – Determine if objects move towards or away. Apply <strong>v_rel = v₁ ± v₂</strong> then use the basic formula.</li>
    <li><strong>Round‑Trip Problems</strong> – Compute total distance as twice the one‑way distance, then find average speed using harmonic mean when speeds differ.</li>
    <li><strong>Work‑Rate Problems</strong> – Convert individual rates to a common denominator. The combined rate is the sum of individual rates: <strong>R_total = ΣR_i</strong>. Time to complete the job is <strong>t = 1 ÷ R_total</strong>.</li>
    <li><strong>Pipe‑and‑Cistern Analogy</strong> – Treat filling and emptying as positive and negative rates respectively.</li>
    <li><strong>Acceleration‑Based Queries</strong> – Use the first equation of motion: <strong>v = u + a t</strong> and the second: <strong>s = ut + ½ a t²</strong>, where <em>u</em> is initial speed, <em>a</em> acceleration.</li>
  </ol>

  <h4>7. Special Cases & Advanced Topics</h4>
  <ul>
    <li><strong>Non‑Uniform Acceleration</strong> – When acceleration varies, integrate: <em>v = ∫a dt</em> and <em>s = ∫v dt</em>. Knowledge of basic integration is useful for higher‑level NDA questions.</li>
    <li><strong>Circular Motion</strong> – Uniform circular motion involves constant speed but changing direction. Centripetal acceleration: <strong>a_c = v² / r</strong>. Relevant to naval and aeronautical problems.</li>
    <li><strong>Relative Velocity in Two Dimensions</strong> – Vector addition using components. Example: a plane flying north at 300 km/h with a wind blowing east at 50 km/h has resultant speed <strong>√(300² + 50²) ≈ 304 km/h</strong> at an angle <strong>tan⁻¹(50/300)</strong>.</li>
    <li><strong>Time Dilation (Special Relativity)</strong> – For completeness, the formula <strong>Δt' = Δt / √(1 – v²/c²)</strong> where <em>c</em> is the speed of light (≈ 3×10⁸ m/s). Though rarely tested directly, the concept appears in conceptual questions.</li>
  </ul>

  <h4>8. Notable Indian Defence & Space Applications</h4>
  <p>Understanding practical contexts aids memory retention.</p>
  <ul>
    <li><strong>[[Indian Space Research Organisation]] (ISRO)</strong> – Satellite launch windows are calculated using orbital speed (~7.8 km/s) and Earth’s rotation (~0.465 km/s) for launch site advantage.</li>
    <li><strong>[[INS Vikramaditya]]</strong> – Carrier’s flight deck operations involve relative speed of aircraft (≈ 250 km/h) versus carrier speed (≈ 30 km/h) to compute safe take‑off/landing windows.</li>
    <li><strong>[[BrahMos Missile]]</strong> – Supersonic cruise missile traveling at Mach 2.8 (~3,400 km/h). Time to target at 600 km distance ≈ 0.18 h (≈ 11 min).</li>
    <li><strong>[[Siachen Glacier]]</strong> – Troops' logistics rely on average marching speed of 3 km/h over high‑altitude terrain, influencing supply chain timing.</li>
  </ul>

  <h4>9. Common Pitfalls & Tips for Accuracy</h4>
  <ul>
    <li>Always align units before plugging into formulas; a mismatch (e.g., km/h with meters) leads to a factor‑of‑1000 error.</li>
    <li>For work‑rate problems, remember that rates add, not times.</li>
    <li>When dealing with round‑trip questions, distinguish between arithmetic mean (useful for equal time) and harmonic mean (equal distance).</li>
    <li>In relative motion, draw a clear direction diagram; a simple arrow diagram prevents sign errors.</li>
    <li>For circular motion, keep track of whether the question asks for centripetal force (<strong>F_c = m v² / r</strong>) or acceleration.</li>
  </ul>

  <h4>10. Summary of Key Formulas</h4>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <tr style="background:#222; color:#fff;">
      <th style="padding:8px; border:1px solid #444;">Concept</th>
      <th style="padding:8px; border:1px solid #444;">Formula</th>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;">Distance</td>
      <td style="padding:8px; border:1px solid #444;"><strong>d = v t</strong></td>
    </tr>
    <tr style="background:#f9f9f9;">
      <td style="padding:8px; border:1px solid #444;">Average Speed (unequal speeds)</td>
      <td style="padding:8px; border:1px solid #444;"><strong>v_avg = Σd ÷ Σt</strong></td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;">Relative Speed (opposite)</td>
      <td style="padding:8px; border:1px solid #444;"><strong>v_rel = v₁ + v₂</strong></td>
    </tr>
    <tr style="background:#f9f9f9;">
      <td style="padding:8px; border:1px solid #444;">Work</td>
      <td style="padding:8px; border:1px solid #444;"><strong>W = F d cosθ</strong></td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;">Power</td>
      <td style="padding:8px; border:1px solid #444;"><strong>P = W ÷ t = F v</strong></td>
    </tr>
    <tr style="background:#f9f9f9;">
      <td style="padding:8px; border:1px solid #444;">Centripetal Acceleration</td>
      <td style="padding:8px; border:1px solid #444;"><strong>a_c = v² / r</strong></td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid #444;">Harmonic Mean Speed</td>
      <td style="padding:8px; border:1px solid #444;"><strong>v_h = 2 / (1/v₁ + 1/v₂)</strong></td>
    </tr>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Average speed for equal distances at speeds <strong>v₁</strong> and <strong>v₂</strong> is the harmonic mean: <strong>2v₁v₂/(v₁+v₂)</strong>.</li>
      <li>Relative speed of two objects moving towards each other equals the sum of their speeds.</li>
      <li>Work done against gravity = <strong>m g h</strong> (use <strong>g = 9.81 m/s²</strong>).</li>
      <li>Power in watts can be obtained by multiplying force (newton) by speed (m/s).</li>
      <li>For a round‑trip where outbound speed is 60 km/h and return speed is 40 km/h, average speed = 48 km/h.</li>
      <li>One knot = 1.852 km/h; useful for naval aviation problems.</li>
      <li>Efficiency (%) = (output work ÷ input work) × 100.</li>
      <li>Time to cross a river flowing at 5 km/h when rowing at 15 km/h upstream is calculated using relative speed (15‑5 = 10 km/h).</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-numerical-speed"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Time, Speed & Distance Formulas
  </h3>

  <h4>Fundamental Relation</h4>
  <p>The cornerstone of all time‑speed‑distance problems is the linear equation</p>
  <p><strong>Distance (D) = Speed (S) × Time (T)</strong></p>
  <p>All quantities must be expressed in consistent units before substitution. The SI system (metre, second, metre per second) is preferred, but the Indian Defence examinations frequently present data in kilometres, metres, hours, minutes, and seconds. Conversions are therefore a critical sub‑skill.</p>

  <h4>Unit Conversion Essentials</h4>
  <ul>
    <li>1 km = 1,000 m</li>
    <li>1 hour = 60 minutes = 3,600 seconds</li>
    <li>Speed in km/h → m/s: multiply by <strong>5/18</strong> (≈0.2778)</li>
    <li>Speed in m/s → km/h: multiply by <strong>18/5</strong> (≈3.6)</li>
    <li>Time conversion: <strong>minutes = seconds ÷ 60</strong>, <strong>hours = minutes ÷ 60</strong></li>
  </ul>

  <h4>Average Speed vs. Mean Speed</h4>
  <p><strong>Average speed</strong> over a journey with varying speeds is the total distance divided by total time:</p>
  <p><strong>V̅ = ΣD ÷ ΣT</strong></p>
  <p>When equal distances are travelled at different speeds, the harmonic mean applies:</p>
  <p><strong>V_h = (2 V₁ V₂) ÷ (V₁ + V₂)</strong></p>
  <p>For equal time intervals, the arithmetic mean is appropriate:</p>
  <p><strong>V_a = (V₁ + V₂) ÷ 2</strong></p>

  <h4>Relative Speed</h4>
  <p>Relative speed is essential when two objects move towards or away from each other.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#333; color:#fff;">
        <th style="padding:8px; border:1px solid #555;">Scenario</th>
        <th style="padding:8px; border:1px solid #555;">Formula</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#222;">
        <td style="padding:8px; border:1px solid #555;">Both moving in the same direction</td>
        <td style="padding:8px; border:1px solid #555;"><strong>V_rel = |V₁ – V₂|</strong></td>
      </tr>
      <tr style="background:#2a2a2a;">
        <td style="padding:8px; border:1px solid #555;">Both moving towards each other</td>
        <td style="padding:8px; border:1px solid #555;"><strong>V_rel = V₁ + V₂</strong></td>
      </tr>
      <tr style="background:#222;">
        <td style="padding:8px; border:1px solid #555;">One stationary, one moving</td>
        <td style="padding:8px; border:1px solid #555;"><strong>V_rel = V_moving</strong></td>
      </tr>
    </tbody>
  </table>
  <p>Historical note: The concept of relative motion was first formalised by [[Galileo Galilei]] in his 1632 treatise <em>Dialogues Concerning Two New Sciences</em>, predating [[Isaac Newton]]'s famous laws by more than half a century.</p>

  <h4>Uniform Acceleration (Kinematics)</h4>
  <p>When acceleration is constant, the following equations are indispensable:</p>
  <ul>
    <li><strong>V = U + a t</strong> (where <strong>U</strong> is initial speed, <strong>a</strong> is acceleration, <strong>t</strong> is time)</li>
    <li><strong>S = U t + ½ a t²</strong></li>
    <li><strong>V² = U² + 2 a S</strong></li>
  </ul>
  <p>These are derived from the fundamental relation <strong>S = (U + V)/2 × t</strong> and are often referred to as the “suvat” equations in Indian textbooks.</p>

  <h4>Uniform Circular Motion (UCM)</h4>
  <p>For an object moving in a circle of radius <strong>r</strong> at constant speed <strong>v</strong>, the centripetal acceleration is given by:</p>
  <p><strong>a_c = v² / r = ω² r</strong></p>
  <p>where <strong>ω</strong> (omega) is the angular velocity in radians per second. The period <strong>T</strong> and frequency <strong>f** (in Hz) are related by <strong>T = 1/f</strong> and <strong>ω = 2πf</strong>.</p>
  <p>Key historical reference: The first quantitative treatment of circular motion appears in [[Johannes Kepler]]'s 1609 work <em>Astronomia Nova</em>, later refined by [[Isaac Newton]] in his 1687 <em>Philosophiæ Naturalis Principia Mathematica</em>.</p>

  <h4>Practical Applications in Defence Context</h4>
  <ul>
    <li><strong>Navigation</strong>: Converting nautical miles (1 nm = 1.852 km) to kilometres for aircraft flight‑plan calculations.</li>
    <li><strong>Ballistics</strong>: Determining projectile travel time using <strong>S = ½ g t²</strong> for vertical drop, where <strong>g = 9.81 m/s²</strong>.</li>
    <li><strong>Patrol Timing</strong>: Estimating the time required for a patrol vehicle to cover a sector of <strong>120 km</strong> at an average speed of <strong>40 km/h</strong> → <strong>T = D/S = 3 hours</strong>.</li>
    <li><strong>Air‑to‑Ground Coordination</strong>: Using relative speed to compute interception points when a fighter aircraft (speed 900 km/h) pursues a target moving at 600 km/h in the same direction.</li>
  </ul>

  <h4>Common Pitfalls & How to Avoid Them</h4>
  <ul>
    <li><strong>Mixing units</strong>: Always convert to a single unit system before applying formulas.</li>
    <li><strong>Neglecting direction</strong>: Treat velocities as signed quantities; opposite directions imply opposite signs.</li>
    <li><strong>Assuming constant speed</strong> in problems involving acceleration; verify the presence of “uniform acceleration” wording.</li>
    <li><strong>Incorrect use of harmonic mean</strong>: Apply only when distances are equal, not times.</li>
  </ul>

  <h4>Advanced Topics (Optional for Aspirants)</h4>
  <p>While the core NDA/CDS/AFCAT syllabus does not require differential calculus, a brief exposure to related concepts can boost confidence.</p>
  <ul>
    <li><strong>Rate of change</strong> interpretation: <strong>v = ds/dt</strong> (instantaneous speed).</li>
    <li><strong>Integration for distance</strong>: <strong>S = ∫ v dt</strong> when speed varies continuously.</li>
    <li><strong>Relative angular speed</strong>: For two rotating bodies, <strong>ω_rel = |ω₁ – ω₂|</strong>.</li>
  </ul>

  <h4>Historical Timeline of Speed‑Related Discoveries</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#444; color:#fff;">
        <th style="padding:8px; border:1px solid #666;">Year</th>
        <th style="padding:8px; border:1px solid #666;">Milestone</th>
        <th style="padding:8px; border:1px solid #666;">Contributor</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#2c2c2c;">
        <td style="padding:8px; border:1px solid #555;">1632</td>
        <td style="padding:8px; border:1px solid #555;">First quantitative description of uniform acceleration</td>
        <td style="padding:8px; border:1px solid #555;">[[Galileo Galilei]]</td>
      </tr>
      <tr style="background:#242424;">
        <td style="padding:8px; border:1px solid #555;">1687</td>
        <td style="padding:8px; border:1px solid #555;">Formulation of laws of motion and universal gravitation</td>
        <td style="padding:8px; border:1px solid #555;">[[Isaac Newton]]</td>
      </tr>
      <tr style="background:#2c2c2c;">
        <td style="padding:8px; border:1px solid #555;">1809</td>
        <td style="padding:8px; border:1px solid #555;">Derivation of the formula for centripetal force</td>
        <td style="padding:8px; border:1px solid #555;">[[Joseph Fourier]] (early work) – later formalised by [[Leonhard Euler]]</td>
      </tr>
      <tr style="background:#242424;">
        <td style="padding:8px; border:1px solid #555;">1905</td>
        <td style="padding:8px; border:1px solid #555;">Special Theory of Relativity – speed of light as universal constant</td>
        <td style="padding:8px; border:1px solid #555;">[[Albert Einstein]]</td>
      </tr>
      <tr style="background:#2c2c2c;">
        <td style="padding:8px; border:1px solid #555;">1947</td>
        <td style="padding:8px; border:1px solid #555;">First successful supersonic flight (Bell X‑1)</td>
        <td style="padding:8px; border:1px solid #555;">[[Chuck Yeager]]</td>
      </tr>
    </tbody>
  </table>

  <h4>Key Formulae Summary (Cheat‑Sheet)</h4>
  <ul>
    <li><strong>D = S × T</strong></li>
    <li><strong>S = U T + ½ a T²</strong></li>
    <li><strong>V = U + a T</strong></li>
    <li><strong>V² = U² + 2 a S</strong></li>
    <li><strong>V̅ = ΣD ÷ ΣT</strong></li>
    <li><strong>V_h = (2 V₁ V₂) ÷ (V₁ + V₂)</strong> (equal distance)</li>
    <li><strong>V_rel (same direction) = |V₁ – V₂|</strong></li>
    <li><strong>V_rel (opposite direction) = V₁ + V₂</strong></li>
    <li><strong>a_c = V² / r = ω² r</strong></li>
    <li><strong>ω = 2π f</strong></li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>1 km/h = <strong>5/18 m/s</strong>; remember this conversion for every speed‑question.</li>
      <li>When two bodies travel equal distances at speeds <strong>V₁</strong> and <strong>V₂</strong>, the average speed is the <strong>harmonic mean</strong>: <strong>(2 V₁ V₂)/(V₁+V₂)</strong>.</li>
      <li>Relative speed for objects moving towards each other equals the sum of their speeds; for the same direction it is the absolute difference.</li>
      <li>In uniformly accelerated motion, if initial speed is zero, distance simplifies to <strong>S = ½ a t²</strong>.</li>
      <li>For circular motion, centripetal acceleration <strong>a_c = V² / r</strong> and can be expressed as <strong>ω² r</strong> where <strong>ω = 2π/T</strong>.</li>
      <li>Time required to cover a distance is always <strong>T = D / S</strong>; never forget to keep units consistent.</li>
      <li>In a pursuit problem, if the chaser is faster, the catch‑up time is <strong>T = (initial separation) / (V_chaser – V_target)</strong>.</li>
      <li>Average speed over a round‑trip with equal distances at different speeds is the harmonic mean of the two speeds.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-numerical-ratios"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Ratios, Proportions & Percentages
  </h3>

  <h4>1. Fundamental Concepts</h4>
  <p><strong>Ratio</strong> is a quantitative comparison of two or more numbers, expressed as “a : b” or \(\frac{a}{b}\). It conveys the relative size of one quantity to another. In the Indian defence examinations, ratios frequently appear in questions dealing with speed‑time‑distance, mixture problems, and financial computations.</p>
  <p><strong>Proportion</strong> denotes the equality of two ratios, i.e., \(\frac{a}{b} = \frac{c}{d}\). The property of cross‑multiplication, <em>ad = bc</em>, is pivotal for solving proportion‑based questions.</p>
  <p><strong>Percentage</strong> represents a ratio out of 100. The generic conversion is \(\text{percentage} = \frac{\text{part}}{\text{whole}} \times 100\%\). Mastery of percentage change, simple and compound interest, and profit‑loss calculations is indispensable for NDA, [[CDS]], and [[AFCAT]] aspirants.</p>

  <h4>2. Types of Ratios</h4>
  <ul>
    <li><strong>Simple Ratio</strong>: Direct comparison of two quantities, e.g., 3 : 5.</li>
    <li><strong>Compound Ratio</strong>: Product of two or more ratios, e.g., (2 : 3) × (4 : 5) = 8 : 15.</li>
    <li><strong>Continued Ratio</strong>: Sequence of three or more numbers, e.g., 2 : 3 : 5, where each term is compared with the preceding term.</li>
    <li><strong>Part‑Whole Ratio</strong>: Relates a part to the whole, often used in percentage problems, e.g., part : whole = 25 : 100 = 1 : 4.</li>
  </ul>

  <h4>3. Conversion Techniques</h4>
  <p>Efficient conversion between different forms is essential for speed. The table below summarises key conversion formulas.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <tr style="background:#2a2a40; color:#fff;">
      <th style="border:1px solid #555;padding:8px;">Form</th>
      <th style="border:1px solid #555;padding:8px;">Conversion</th>
    </tr>
    <tr>
      <td style="border:1px solid #555;padding:8px;"><strong>Ratio → Fraction</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(a:b = \frac{a}{b}\)</td>
    </tr>
    <tr style="background:#1e1e2a;">
      <td style="border:1px solid #555;padding:8px;"><strong>Fraction → Percentage</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(\frac{a}{b} \times 100\% = \text{percentage}\)</td>
    </tr>
    <tr>
      <td style="border:1px solid #555;padding:8px;"><strong>Percentage → Decimal</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(p\% = \frac{p}{100}\)</td>
    </tr>
    <tr style="background:#1e1e2a;">
      <td style="border:1px solid #555;padding:8px;"><strong>Decimal → Ratio</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(0.75 = 75 : 100 = 3 : 4\)</td>
    </tr>
  </table>

  <h4>4. Solving Direct Proportion Problems</h4>
  <p>When two quantities vary directly, the relationship is expressed as <strong>y ∝ x</strong> or <strong>y = kx</strong>, where <strong>k</strong> is the constant of proportionality. Steps:</p>
  <ol>
    <li>Identify the given pairs and compute <strong>k = \frac{y}{x}</strong>.</li>
    <li>Form the equation <strong>y = kx</strong>.</li>
    <li>Substitute the required value of <strong>x</strong> to obtain <strong>y</strong>.</li>
  </ol>
  <p>Typical applications include speed‑time‑distance (<strong>s = vt</strong>), work‑time (<strong>Work = Rate × Time</strong>), and simple interest (<strong>I = P × R × T</strong>).</p>

  <h4>5. Inverse Proportion</h4>
  <p>Two quantities are inversely proportional when the product remains constant: <strong>y ∝ \frac{1}{x}</strong> or <strong>xy = k</strong>. Common scenarios involve hydraulic pressure (<strong>P = \frac{F}{A}</strong>) and time taken for a job when the number of workers changes.</p>
  <ul>
    <li>Determine <strong>k = xy</strong> from the known pair.</li>
    <li>Use <strong>y = \frac{k}{x}</strong> for the unknown quantity.</li>
  </ul>

  <h4>6. Percentage Change – Growth & Decay</h4>
  <p>Percentage increase or decrease is measured by:</p>
  <p><strong>Increase % = \(\frac{\text{New – Old}}{\text{Old}} \times 100\%\)</strong></p>
  <p><strong>Decrease % = \(\frac{\text{Old – New}}{\text{Old}} \times 100\%\)</strong></p>
  <p>For compound growth (e.g., annual salary hike), use the formula:</p>
  <p><strong>Final Amount = P × (1 + r)ⁿ</strong>, where <strong>r</strong> is the rate per period expressed as a decimal and <strong>n</strong> is the number of periods.</p>
  <p>In exponential decay (e.g., radioactive half‑life), the analogous formula is:</p>
  <p><strong>Remaining Amount = P × (1 − r)ⁿ</strong>.</p>

  <h4>7. Mixture and Alligation</h4>
  <p>Mixture problems blend two or more solutions with differing concentrations. The method of <strong>Alligation</strong> provides a quick way to find the ratio in which components must be mixed.</p>
  <p>Alligation Formula:</p>
  <table style="width:80%; margin:auto; border-collapse:collapse; margin-top:12px;">
    <tr style="background:#2a2a40; color:#fff;">
      <th style="border:1px solid #555;padding:6px;">Component</th>
      <th style="border:1px solid #555;padding:6px;">Concentration</th>
      <th style="border:1px solid #555;padding:6px;">Difference from Desired</th>
    </tr>
    <tr>
      <td style="border:1px solid #555;padding:6px;">A</td>
      <td style="border:1px solid #555;padding:6px;">\(C_A\)</td>
      <td style="border:1px solid #555;padding:6px;">\(C_B - C_{\text{desired}}\)</td>
    </tr>
    <tr style="background:#1e1e2a;">
      <td style="border:1px solid #555;padding:6px;">B</td>
      <td style="border:1px solid #555;padding:6px;">\(C_B\)</td>
      <td style="border:1px solid #555;padding:6px;">\(C_{\text{desired}} - C_A\)</td>
    </tr>
  </table>
  <p>The resulting ratios give the proportion in which the components must be combined to achieve the target concentration.</p>

  <h4>8. Advanced Applications in Defence Context</h4>
  <ul>
    <li><strong>Logistics Planning</strong>: Allocation of fuel to aircraft fleets uses compound ratios (e.g., fuel consumption per hour × number of aircraft × mission duration).</li>
    <li><strong>Ballistics</strong>: Trajectory calculations often require converting speed ratios into percentages of muzzle velocity retained after air resistance.</li>
    <li><strong>Personnel Management</strong>: Determining the ratio of officers to soldiers, often expressed as a fixed proportion like 1 : 15, is critical for command hierarchy in the [[Indian Armed Forces]].</li>
    <li><strong>Financial Budgeting</strong>: Defence procurement budgets are presented as percentages of the total annual outlay; understanding how to manipulate these percentages directly impacts strategic planning.</li>
  </ul>

  <h4>9. Common Pitfalls & Strategies</h4>
  <ul>
    <li><strong>Misreading “of” vs “%”</strong>: “30 % of 200” is 60, not “30 of 200”. Treat “of” as multiplication.</li>
    <li><strong>Ignoring Unit Consistency</strong>: In proportion problems, ensure all quantities share the same unit (km vs m, kg vs g).</li>
    <li><strong>Over‑complicating Simple Ratios</strong>: Reduce ratios to their lowest terms before applying cross‑multiplication.</li>
    <li><strong>Forgetting to Convert Percentages to Decimals</strong> before using them in algebraic equations.</li>
    <li><strong>Skipping the “Check” Step</strong>: Verify the answer by substituting back into the original proportion or percentage equation.</li>
  </ul>

  <h4>10. Frequently Cited Historical & Scientific References</h4>
  <p>Understanding the origin of concepts aids memory retention:</p>
  <ul>
    <li><strong>[[Euclid]]'s Elements</strong> (c. 300 BC) laid the groundwork for ratio theory in geometry.</li>
    <li><strong>[[Pythagoras]]</strong> introduced the notion of commensurable lengths, an early form of rational ratios.</li>
    <li><strong>[[Archimedes]]' Principle</strong> (c. 250 BC) employs ratios of displaced fluid to buoyant force.</li>
    <li><strong>[[Newton's law of cooling]]</strong> (1701–1727) uses exponential decay expressed via percentages.</li>
    <li><strong>[[Treaty of Versailles]]</strong> (1919) stipulated reparations expressed as percentages of pre‑war production—a classic real‑world proportion example.</li>
    <li><strong>[[Indian Constitution – Article 83]]</strong> defines the composition of the [[Parliament]] in terms of ratios of elected to nominated members.</li>
    <li><strong>[[World Bank]]</strong> reports (2022) often quote GDP growth as a percentage, reinforcing the relevance of percentage change calculations.</li>
  </ul>

  <h4>11. Formula Summary (Quick Reference)</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <tr style="background:#2a2a40; color:#fff;">
      <th style="border:1px solid #555;padding:8px;">Concept</th>
      <th style="border:1px solid #555;padding:8px;">Formula</th>
    </tr>
    <tr>
      <td style="border:1px solid #555;padding:8px;"><strong>Ratio to Fraction</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(a:b = \frac{a}{b}\)</td>
    </tr>
    <tr style="background:#1e1e2a;">
      <td style="border:1px solid #555;padding:8px;"><strong>Percentage</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(\frac{\text{Part}}{\text{Whole}} \times 100\%\)</td>
    </tr>
    <tr>
      <td style="border:1px solid #555;padding:8px;"><strong>Simple Interest</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(I = P \times R \times T\)</td>
    </tr>
    <tr style="background:#1e1e2a;">
      <td style="border:1px solid #555;padding:8px;"><strong>Compound Interest</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(A = P(1+R)^n\)</td>
    </tr>
    <tr>
      <td style="border:1px solid #555;padding:8px;"><strong>Direct Proportion</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(y = kx\)</td>
    </tr>
    <tr style="background:#1e1e2a;">
      <td style="border:1px solid #555;padding:8px;"><strong>Inverse Proportion</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(xy = k\)</td>
    </tr>
    <tr>
      <td style="border:1px solid #555;padding:8px;"><strong>Percentage Change</strong></td>
      <td style="border:1px solid #555;padding:8px;">\(\frac{\text{New – Old}}{\text{Old}} \times 100\%\)</td>
    </tr>
    <tr style="background:#1e1e2a;">
      <td style="border:1px solid #555;padding:8px;"><strong>Alligation Ratio</strong></td>
      <td style="border:1px solid #555;padding:8px;">\((C_B - C_{\text{desired}}) : (C_{\text{desired}} - C_A)\)</td>
    </tr>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>When three numbers are in continued ratio a : b : c, the middle term equals the geometric mean of the extremes: \(b^2 = a \times c\).</li>
      <li>For any percentage increase followed by the same percentage decrease, the net effect is a loss; e.g., 20 % increase then 20 % decrease results in a 4 % overall loss.</li>
      <li>In a direct proportion problem, the constant of proportionality \(k\) can be found using any known pair and remains unchanged for all other pairs.</li>
      <li>Compound interest for 2 years at rate r% per annum equals \(P[(1+r/100)^2 - 1]\); many exam questions ask to reverse‑engineer the rate.</li>
      <li>Alligation method works only when the desired concentration lies between the concentrations of the two components.</li>
      <li>In a mixture problem with three components, treat the problem as two successive binary mixtures using the alligation technique.</li>
      <li>The ratio of officers to soldiers in the [[Indian Armed Forces]] is fixed at 1 : 15 (as per recent defence policy), a fact often used in personnel‑strength calculations.</li>
      <li>Percentage change can be quickly estimated using the “Rule of 72” for annual growth rates: \( \text{Years to double} \approx \frac{72}{\text{Rate%}}\).</li>
    </ul>
  </div>
</div>
`;

