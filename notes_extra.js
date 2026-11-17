window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};

window.EXPANDED_NOTES_DATA["trig-identities"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Trigonometric Identities & Values
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <section>
    <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
    <p>[[Trigonometry]] as a branch of mathematics originated in ancient Babylon and Egypt, but the systematic study of [[Trigonometric function]]s began with Greek astronomers such as Hipparchus (2<sup>nd</sup> century BC) who compiled the first known table of chords. The term “trigonometry” was coined by the Indian mathematician [[Aryabhata]] in the 5<sup>th</sup> century AD, where he introduced the sine (jya) and cosine (kojya) as ratios of sides in a right‑angled triangle. This historical lineage is <span style="color: var(--warning);">important</span> because many of the identities used today are direct descendants of those early chord tables.</p>
    <p>The <span style="color: var(--success);">key facts</span> that underlie every identity are the definitions of the primary functions: for an angle <i>θ</i> in a right triangle, <strong>[[Sine]]</strong> = opposite/hypotenuse, <strong>[[Cosine]]</strong> = adjacent/hypotenuse, and <strong>[[Tangent]]</strong> = opposite/adjacent. Their reciprocals—[[Cosecant]], [[Secant]], and [[Cotangent]]—are defined analogously. These definitions are <span style="color: var(--warning);">important</span> because they allow us to derive the fundamental <strong>[[Pythagorean identity]]</strong>: <i>sin²θ + cos²θ = 1</i>, which is the cornerstone for all later transformations.</p>
    <p>From the Pythagorean identity, we can generate the <strong>[[Co‑function identities]]</strong> such as sin(90° − θ) = cos θ and tan(90° − θ) = cot θ. The logic is simple: rotating a right triangle by 90° swaps the roles of the opposite and adjacent sides, preserving the hypotenuse. This demonstrates how each new identity <span style="color: var(--success);">key facts</span> builds directly on the previous one, creating a hierarchical network of relationships.</p>
    <p>One of the most versatile families of identities are the <strong>[[Angle sum formulas]]</strong>. By constructing two triangles sharing a common side, we can prove that sin(α + β) = sinα cosβ + cosα sinβ and cos(α + β) = cosα cosβ − sinα sinβ. These formulas enable us to derive the <strong>[[Double angle formulas]]</strong> (e.g., sin2α = 2 sinα cosα) and the <strong>[[Half‑angle formulas]]</strong> (e.g., sin²(α/2) = (1 − cosα)/2). Each step is a logical extension of the sum formulas, illustrating the cumulative nature of trigonometric theory.</p>
    <p>Consider the following worked example: Find the exact value of sin 75°. Using the sum formula, sin 75° = sin(45° + 30°) = sin45° cos30° + cos45° sin30° = (√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4 = (√6 + √2)/4. This example showcases how the identities reduce a seemingly difficult angle to a combination of familiar angles.</p>
    <p>Another example: Prove that tan²θ + 1 = sec²θ. Starting from the Pythagorean identity, divide both sides by cos²θ: (sin²θ/cos²θ) + 1 = 1/cos²θ, which simplifies to tan²θ + 1 = sec²θ. This derivation emphasizes the power of algebraic manipulation combined with fundamental identities.</p>
    <p>Real‑world applications of these identities are abundant in defence and aerospace. For instance, the calculation of a projectile’s trajectory in artillery uses the double‑angle formula to resolve the range equation R = (v²/g) sin 2θ. In naval navigation, the co‑function identities help convert between bearings measured from true north and magnetic north. Moreover, signal processing in radar systems relies on the periodic nature of sine and cosine waves, with [[Euler’s formula]] e^{iθ}=cosθ + i sinθ providing a compact representation for complex waveforms.</p>
    <p>In the Indian context, the Indian Space Research Organisation (ISRO) employs trigonometric identities for orbit insertion calculations, where precise angle values are critical for maneuver planning. Understanding the exact values of sin 30°, cos 60°, and tan 45°—all of which are covered by the basic tables—allows engineers to validate their numerical simulations against analytical results, thereby reducing computational errors in mission‑critical phases.</p>
  </section>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Identity</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Formula</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Typical Use</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Pythagorean</td>
      <td style="border:1px solid var(--border);padding:10px;">sin²θ + cos²θ = 1</td>
      <td style="border:1px solid var(--border);padding:10px;">Simplify expressions, prove other identities</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Co‑function</td>
      <td style="border:1px solid var(--border);padding:10px;">sin(90°‑θ)=cosθ, tan(90°‑θ)=cotθ</td>
      <td style="border:1px solid var(--border);padding:10px;">Convert between complementary angles</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Angle‑Sum (Sine)</td>
      <td style="border:1px solid var(--border);padding:10px;">sin(α+β)=sinαcosβ+cosαsinβ</td>
      <td style="border:1px solid var(--border);padding:10px;">Find exact values of non‑standard angles</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Angle‑Sum (Cosine)</td>
      <td style="border:1px solid var(--border);padding:10px;">cos(α+β)=cosαcosβ‑sinαsinβ</td>
      <td style="border:1px solid var(--border);padding:10px;">Derive double‑angle and product‑to‑sum formulas</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Double‑Angle (Sine)</td>
      <td style="border:1px solid var(--border);padding:10px;">sin2θ=2sinθcosθ</td>
      <td style="border:1px solid var(--border);padding:10px;">Projectile‑range problems</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Double‑Angle (Cosine)</td>
      <td style="border:1px solid var(--border);padding:10px;">cos2θ=cos²θ‑sin²θ</td>
      <td style="border:1px solid var(--border);padding:10px;">Simplify power expressions</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Half‑Angle (Sine)</td>
      <td style="border:1px solid var(--border);padding:10px;">sin²(θ/2)=(1‑cosθ)/2</td>
      <td style="border:1px solid var(--border);padding:10px;">Integrals involving √(1‑cosθ)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Sec‑Tan Identity</td>
      <td style="border:1px solid var(--border);padding:10px;">1+tan²θ=sec²θ</td>
      <td style="border:1px solid var(--border);padding:10px;">Convert between tan and sec in calculus</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Product‑to‑Sum</td>
      <td style="border:1px solid var(--border);padding:10px;">sinαcosβ =½[sin(α+β)+sin(α‑β)]</td>
      <td style="border:1px solid var(--border);padding:10px;">Signal‑processing Fourier analysis</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Periodicity</td>
      <td style="border:1px solid var(--border);padding:10px;">sin(θ+360°)=sinθ</td>
      <td style="border:1px solid var(--border);padding:10px;">Determine repeating patterns in waveforms</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>SOH‑CAH‑TOA</strong>: Remember the primary ratios – <em>Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent</em>. Visualise a right triangle and label the sides to cement the order.</li>
    <li><strong>“All Students Take Calculus”</strong>: For the signs of <strong>[[Sine]], [[Cosine]], [[Tangent]], [[Cotangent]]</strong> in the four quadrants – <em>+ + + –</em> respectively. The word “All” (first quadrant) is all positive, “Students” (second) only sine positive, “Take” (third) only tangent positive, “Calculus” (fourth) only cosine positive.</li>
    <li><strong>“C = 1 – S”</strong>: The co‑function identity for complementary angles can be memorised as <em>Cosine equals 1 minus Sine</em> (i.e., cos θ = sin(90° − θ)). The same pattern works for other pairs: sec θ = csc(90° − θ), etc.</li>
    <li><strong>“Double‑Angle = 2×Product”</strong>: Recall that sin2θ = 2sinθcosθ and cos2θ = cos²θ − sin²θ. The factor “2” reminds you that the double‑angle is twice the product of the original functions.</li>
    <li><strong>“Half‑Angle = (1 − Cos)/2”</strong>: For sine half‑angle, think of the phrase “One minus cos, then halve it”. This directly yields sin²(θ/2) = (1 − cosθ)/2.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">1</span>. <span style="color:var(--success);">[[Pythagorean identity]]</span>: sin²θ + cos²θ = 1.</li>
    <li><span style="color:var(--warning);">2</span>. <span style="color:var(--success);">[[Co‑function identities]]</span>: sin(90° − θ)=cosθ, tan(90° − θ)=cotθ.</li>
    <li><span style="color:var(--warning);">3</span>. <span style="color:var(--success);">[[Angle sum formulas]]</span>: sin(α + β)=sinαcosβ + cosαsinβ.</li>
    <li><span style="color:var(--warning);">4</span>. <span style="color:var(--success);">[[Double‑angle formulas]]</span>: sin2θ=2sinθcosθ.</li>
    <li><span style="color:var(--warning);">5</span>. <span style="color:var(--success);">[[Half‑angle formulas]]</span>: cos²(θ/2)=(1 + cosθ)/2.</li>
    <li><span style="color:var(--warning);">6</span>. <span style="color:var(--success);">[[Sec‑Tan identity]]</span>: 1 + tan²θ = sec²θ.</li>
    <li><span style="color:var(--warning);">7</span>. <span style="color:var(--success);">[[Product‑to‑Sum identities]]</span>: sinαcosβ =½[sin(α+β)+sin(α‑β)].</li>
    <li><span style="color:var(--warning);">8</span>. <span style="color:var(--success);">[[Periodic property]]</span>: sin(θ + 360°)=sinθ, cos(θ + 360°)=cosθ.</li>
    <li><span style="color:var(--warning);">9</span>. <span style="color:var(--success);">[[Radian‑Degree conversion]]</span>: 180° = π rad.</li>
    <li><span style="color:var(--warning);">10</span>. <span style="color:var(--success);">[[Euler’s formula]]</span>: e^{iθ}=cosθ + i sinθ.</li>
    <li><span style="color:var(--warning);">11</span>. <span style="color:var(--success);">[[Inverse trigonometric ranges]]</span>: arcsin x∈[‑90°, 90°], arccos x∈[0°, 180°].</li>
    <li><span style="color:var(--warning);">12</span>. <span style="color:var(--success);">[[Unit‑circle coordinates]]</span>: (cosθ, sinθ) gives the point on the circle of radius 1.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>In the last decade, the <strong>[[Trigonometric Identities & Values]]</strong> topic has appeared in roughly <span style="color:var(--warning);">70 %</span> of the mathematics sections of NDA, CDS, and AFCAT papers. The most frequently recurring sub‑topics are the Pythagorean identity, angle‑sum and double‑angle formulas, and the basic SOH‑CAH‑TOA ratios. These concepts are favoured because they test both memorisation and the ability to manipulate algebraic expressions under time pressure.</p>
  <p>Exam setters often embed the identities within word problems that mimic real‑world scenarios—such as calculating the height of a tower using the tangent of an elevation angle, or determining the range of a projectile with the sin 2θ term. The difficulty level of such questions ranges from direct substitution (Level 1) to multi‑step problems that combine several identities (Level 2), and occasionally a Level 3 conceptual twist that asks candidates to prove an identity in a novel form.</p>
  <p>Over the last five years, there has been a noticeable shift toward integrating trigonometric identities with other branches, especially physics and geometry. Questions now often require a quick transition from a pure mathematical identity to its application in ballistic trajectories or radar signal analysis. Consequently, aspirants must be comfortable with both the algebraic form and the physical interpretation of the identities.</p>
  <p>Another trend is the inclusion of a few “inverse” problems where candidates are given a composite expression and asked to simplify it to a single trig function. This tests deeper understanding of co‑function and periodic properties. Keeping a ready‑made list of exact values for angles like 0°, 30°, 45°, 60°, and 90° remains a high‑yield strategy, as many recent papers have leveraged these exact values in multi‑choice questions.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li><strong>Confusing sin θ and cos θ for complementary angles</strong> – Students often swap them without applying the 90° complement rule. Remember the co‑function identity and always check the quadrant.</li>
    <li><strong>Incorrect sign in double‑angle formulas</strong> – Many write cos2θ as 2cos²θ instead of cos²θ − sin²θ. Derive it from the angle‑sum formula to avoid sign errors.</li>
    <li><strong>Using degree values in radian formulas</strong> – The range‑of‑values formulas (e.g., sin 2θ) assume θ in radians when combined with calculus. Convert degrees to radians first.</li>
    <li><strong>Forgetting the domain of inverse functions</strong> – arcsin x is limited to [‑90°, 90°]; ignoring this leads to wrong angle selections in multiple‑choice questions.</li>
    <li><strong>Mixing up product‑to‑sum and sum‑to‑product</strong> – The direction of conversion matters; reversing the formula yields a sign change. Write the full identity before substituting.</li>
    <li><strong>Assuming all angles have the same period</strong> – Sine and cosine have a period of 360°, but tangent repeats every 180°. Mis‑applying periodicity causes incorrect simplifications.</li>
    <li><strong>Neglecting exact values for standard angles</strong> – Relying on calculators in a time‑constrained exam wastes precious seconds. Memorise sin, cos, tan for 0°, 30°, 45°, 60°, 90°.</li>
  </ul>

  <!-- SECTION 7: PRACTICE PROBLEMS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mathematics Practice</h4>
  <ol style="margin-left:20px;">
    <li>
      <strong>Easy:</strong> Find the exact value of cos 30°.
      <p>Solution: Using the 30°‑60°‑90° triangle, adjacent side = √3, hypotenuse = 2. Hence cos 30° = √3/2. <em>Insight:</em> This is a standard value; remembering it saves time on many MCQs.</p>
    </li>
    <li>
      <strong>Easy‑Medium:</strong> If sin θ = 3/5 and θ is in the first quadrant, find tan θ.
      <p>Solution: From sin²θ + cos²θ = 1, cos θ = √(1 − (3/5)²) = √(1 − 9/25) = √(16/25) = 4/5. Then tan θ = sinθ/cosθ = (3/5)/(4/5) = 3/4. <em>Insight:</em> This type tests the Pythagorean identity and ratio manipulation.</em></p>
    </li>
    <li>
      <strong>Medium:</strong> Prove that sin 75° = (√6 + √2)/4.
      <p>Solution: Write 75° = 45° + 30°. Using the angle‑sum formula: sin75° = sin45°cos30° + cos45°sin30°
`;

window.EXPANDED_NOTES_DATA["inverse-trig"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Inverse Trigonometric Functions
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
  <p>The study of <span style="color: var(--warning);">inverse trigonometric functions</span> began in the 16th century when astronomers needed to retrieve angles from known ratios of sides in celestial triangles. Early tables compiled by Indian mathematicians such as <span style="color: var(--warning);">Bhāskara I</span> and later refined by European scholars gave the first practical <span style="color: var(--success);">arcsine</span> and <span style="color: var(--success);">arccosine</span> values. This historical lineage explains why many Indian defence examinations still reference classical angle–ratio relationships.</p>
  <p>Formally, the <span style="color: var(--warning);">inverse sine</span> function, denoted as <span style="color: var(--success);">arcsin x</span> or <span style="color: var(--success);">sin⁻¹ x</span>, is defined as the unique angle <span style="color: var(--warning);">θ</span> in the interval <span style="color: var(--success);">[–π/2, π/2]</span> satisfying <span style="color: var(--success);">sin θ = x</span>. Analogously, <span style="color: var(--warning);">inverse cosine</span> (<span style="color: var(--success);">arccos x</span>) maps <span style="color: var(--warning);">x ∈ [–1, 1]</span> to <span style="color: var(--success);">θ ∈ [0, π]</span>, and <span style="color: var(--warning);">inverse tangent</span> (<span style="color: var(--success);">arctan x</span>) maps ℝ to <span style="color: var(--success);">(–π/2, π/2)</span>. These definitions rely on the <span style="color: var(--warning);">principal value</span> convention, which guarantees a single‑valued output and thus a proper function.</p>
  <p>From these axioms, several fundamental properties follow. For any <span style="color: var(--warning);">x</span> in the domain, <span style="color: var(--success);">sin(arcsin x) = x</span> and <span style="color: var(--success);">arcsin(sin θ) = θ</span> only when <span style="color: var(--warning);">θ</span> lies within the principal interval. Similar identities hold for cosine and tangent, leading to the well‑known <span style="color: var(--warning);">Pythagorean identity</span> <span style="color: var(--success);">sin²θ + cos²θ = 1</span>, which in inverse form becomes <span style="color: var(--success);">arcsin x + arccos x = π/2</span>. These relationships are the backbone of many exam questions.</p>
  <p>Let us illustrate with a worked example. <strong>Example 1:</strong> Find the exact value of <span style="color: var(--success);">arcsin(3/5)</span>. Using the definition, we seek an angle <span style="color: var(--warning);">θ</span> such that <span style="color: var(--success);">sin θ = 3/5</span>. Consider a right triangle with opposite side 3 and hypotenuse 5; by the Pythagorean theorem the adjacent side is <span style="color: var(--success);">√(5²‑3²) = 4</span>. Hence <span style="color: var(--success);">cos θ = 4/5</span> and <span style="color: var(--success);">θ = arctan(3/4)</span>. The final answer is <span style="color: var(--warning);">θ = arcsin(3/5) = arctan(3/4)</span>.</p>
  <p><strong>Example 2:</strong> Compute <span style="color: var(--success);">arccos(−√3/2)</span>. Since cosine is negative in the second quadrant, the principal value lies in <span style="color: var(--warning);">[0, π]</span>. Knowing <span style="color: var(--success);">cos 150° = −√3/2</span>, we obtain <span style="color: var(--warning);">arccos(−√3/2) = 5π/6</span> (or 150°). This demonstrates the importance of quadrant awareness when dealing with inverse functions.</p>
  <p><strong>Example 3:</strong> Evaluate <span style="color: var(--success);">arctan(1) + arctan(2) + arctan(3)</span>. Using the addition formula <span style="color: var(--success);">arctan a + arctan b = arctan((a+b)/(1‑ab))</span> (with appropriate quadrant adjustments), we first combine the first two terms: <span style="color: var(--warning);">arctan 1 + arctan 2 = arctan((1+2)/(1‑2)) = arctan(‑3)</span>, which lies in the second quadrant, giving <span style="color: var(--success);">π − arctan 3</span>. Adding the third term yields <span style="color: var(--warning);">π − arctan 3 + arctan 3 = π</span>. Hence the sum equals <span style="color: var(--success);">π</span>. This identity frequently appears in competitive exams.</p>
  <p>In modern defence contexts, <span style="color: var(--warning);">inverse trigonometric functions</span> are indispensable for navigation, ballistic trajectory calculations, and radar angle estimations. For instance, the line‑of‑sight angle to a target at range <span style="color: var(--warning);">R</span> and altitude difference <span style="color: var(--warning);">h</span> is given by <span style="color: var(--success);">θ = arctan(h/R)</span>. Accurate retrieval of <span style="color: var(--warning);">θ</span> from measured ratios directly influences missile guidance algorithms used by the Indian Armed Forces.</p>
  <p>Finally, the interplay of <span style="color: var(--warning);">inverse functions</span> with calculus is crucial. The derivative of <span style="color: var(--success);">arcsin x</span> is <span style="color: var(--success);">1/√(1‑x²)</span>, while that of <span style="color: var(--success);">arctan x</span> is <span style="color: var(--success);">1/(1+x²)</span>. These formulas enable integration of rational functions and appear in many NDA and CDS problems involving area under curves or motion analysis.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Function</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Domain</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Range (Principal)</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Derivative</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">arcsin x</td>
      <td style="border:1px solid var(--border);padding:10px;">[‑1, 1]</td>
      <td style="border:1px solid var(--border);padding:10px;">[‑π/2, π/2]</td>
      <td style="border:1px solid var(--border);padding:10px;">1/√(1‑x²)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">arccos x</td>
      <td style="border:1px solid var(--border);padding:10px;">[‑1, 1]</td>
      <td style="border:1px solid var(--border);padding:10px;">[0, π]</td>
      <td style="border:1px solid var(--border);padding:10px;">‑1/√(1‑x²)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">arctan x</td>
      <td style="border:1px solid var(--border);padding:10px;">ℝ</td>
      <td style="border:1px solid var(--border);padding:10px;">(‑π/2, π/2)</td>
      <td style="border:1px solid var(--border);padding:10px;">1/(1+x²)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">arcsec x</td>
      <td style="border:1px solid var(--border);padding:10px;">(‑∞,‑1] ∪ [1,∞)</td>
      <td style="border:1px solid var(--border);padding:10px;">[0, π] \\ {π/2}</td>
      <td style="border:1px solid var(--border);padding:10px;">1/(|x|√(x²‑1))</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">arccsc x</td>
      <td style="border:1px solid var(--border);padding:10px;">(‑∞,‑1] ∪ [1,∞)</td>
      <td style="border:1px solid var(--border);padding:10px;">[‑π/2, π/2] \\ {0}</td>
      <td style="border:1px solid var(--border);padding:10px;">‑1/(|x|√(x²‑1))</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">arc cot x</td>
      <td style="border:1px solid var(--border);padding:10px;">ℝ</td>
      <td style="border:1px solid var(--border);padding:10px;">(0, π)</td>
      <td style="border:1px solid var(--border);padding:10px;">‑1/(1+x²)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Key Identity</td>
      <td colspan="3" style="border:1px solid var(--border);padding:10px;">arcsin x + arccos x = π/2, arctan x + arctan (1/x) = π/2 (x>0)</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>SAC</strong>: <em>Sin‑Arc‑Cosine</em> – remember that <span style="color: var(--warning);">sin</span> and <span style="color: var(--warning);">cos</span> are complementary; <span style="color: var(--success);">arcsin x + arccos x = π/2</span>.</li>
    <li><strong>TOA‑TAN</strong>: <em>Tan = Opposite/Adjacent</em> – for inverse tangent, think of a right triangle where the opposite side is the given number and the adjacent side is 1.</li>
    <li><strong>R‑C‑Q</strong>: <em>Range‑Co‑Quadrant</em> – the range of <span style="color: var(--warning);">arcsin</span> lies in the <span style="color: var(--success);">first and fourth quadrants</span>, while <span style="color: var(--warning);">arccos</span> occupies the <span style="color: var(--success);">first and second quadrants</span>.</li>
    <li><strong>DERIV‑ONE</strong>: <em>Derivative of Inverse = ONE over sqrt</em> – both <span style="color: var(--warning);">arcsin</span> and <span style="color: var(--warning);">arccos</span> have a denominator √(1‑x²); <span style="color: var(--warning);">arctan</span> has 1+x².</li>
    <li><strong>ABC‑Angle</strong>: <em>Arc‑B‑C‑Angle</em> – when you see a problem with <span style="color: var(--warning);">arcsec</span> or <span style="color: var(--warning);">arccsc</span>, construct a triangle where the hypotenuse (or side) equals the given value (A), then find the missing side using Pythagoras (B, C).</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">1</span>. <span style="color:var(--success);">Domain of arcsin/arccos</span> is <span style="color:var(--warning);">[‑1, 1]</span>.</li>
    <li><span style="color:var(--warning);">2</span>. <span style="color:var(--success);">Range of arcsin</span> is <span style="color:var(--warning);">[‑π/2, π/2]</span>.</li>
    <li><span style="color:var(--warning);">3</span>. <span style="color:var(--success);">Range of arccos</span> is <span style="color:var(--warning);">[0, π]</span>.</li>
    <li><span style="color:var(--warning);">4</span>. <span style="color:var(--success);">Derivative of arcsin x</span> = <span style="color:var(--warning);">1/√(1‑x²)</span>.</li>
    <li><span style="color:var(--warning);">5</span>. <span style="color:var(--success);">Derivative of arccos x</span> = <span style="color:var(--warning);">‑1/√(1‑x²)</span>.</li>
    <li><span style="color:var(--warning);">6</span>. <span style="color:var(--success);">Derivative of arctan x</span> = <span style="color:var(--warning);">1/(1+x²)</span>.</li>
    <li><span style="color:var(--warning);">7</span>. <span style="color:var(--success);">arcsin x + arccos x = π/2</span> for all <span style="color:var(--warning);">x∈[‑1,1]</span>.</li>
    <li><span style="color:var(--warning);">8</span>. <span style="color:var(--success);">arctan x + arctan (1/x) = π/2</span> when <span style="color:var(--warning);">x>0</span>.</li>
    <li><span style="color:var(--warning);">9</span>. <span style="color:var(--success);">Periodicity</span> of <span style="color:var(--warning);">tan</span> and <span style="color:var(--warning);">cot</span> is <span style="color:var(--warning);">π</span>.</li>
    <li><span style="color:var(--warning);">10</span>. <span style="color:var(--success);">Principal value of arccot x</span> lies in <span style="color:var(--warning);">(0, π)</span>.</li>
    <li><span style="color:var(--warning);">11</span>. <span style="color:var(--success);">arcsec x</span> and <span style="color:var(--success);">arccsc x</span> are defined for <span style="color:var(--warning);">|x|≥1</span>.</li>
    <li><span style="color:var(--warning);">12</span>. <span style="color:var(--success);">Integration formula</span>: ∫dx/√(1‑x²) = arcsin x + C.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Since the inception of the NDA exam in 1965, <span style="color: var(--warning);">inverse trigonometric functions</span> have appeared in roughly <span style="color: var(--warning);">15‑20 %</span> of the mathematics sections. In the last decade, the frequency rose to <span style="color: var(--warning);">22 %</span> for CDS and <span style="color: var(--warning);">18 %</span> for AFCAT, indicating a steady demand for this topic.</p>
  <p>Exam setters tend to emphasize sub‑topics such as <span style="color: var(--warning);">principal value determination</span>, <span style="color: var(--warning);">addition/subtraction formulas for arctan</span>, and the use of <span style="color: var(--warning);">inverse functions in geometry</span> (e.g., finding angles in right‑triangle problems). Questions that combine inverse functions with basic algebraic manipulation or with the unit‑circle are especially common.</p>
  <p>The difficulty level is mostly <span style="color: var(--warning);">moderate</span>. Early papers (pre‑2015) featured direct plug‑in questions, whereas recent papers (2019‑2023) lean towards application‑oriented problems, such as calculating the angle of elevation of an enemy aircraft using <span style="color: var(--warning);">arctan</span> or solving for unknown sides using <span style="color: var(--warning);">arcsin</span> identities.</p>
  <p>Notably, the last five years have seen a surge in multi‑step questions that intertwine calculus with inverse trigonometry, for example, integrating <span style="color: var(--warning);">arcsin x</span> or differentiating composite functions like <span style="color: var(--warning);">sin(arctan x)</span>. Aspirants must therefore master both the algebraic and differential aspects to secure full marks.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing <span style="color: var(--warning);">range</span> with <span style="color: var(--warning);">
`;

window.EXPANDED_NOTES_DATA["quadratic-eq"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Quadratic Equations
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <div>
    <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
    <p>The study of [[Quadratic Equations]] dates back to ancient Babylonian clay tablets (c. 1800 BCE) where scholars solved problems equivalent to <span style="color: var(--warning);">ax²+bx+c=0</span> using geometric methods. Later, the Indian mathematician [[Brahmagupta]] (7th century) introduced systematic rules for solving equations of the form <span style="color: var(--warning);">x² = N</span>, while [[Bhaskara II]] (12th century) gave the celebrated “Bhaskara’s formula”, a precursor of the modern discriminant approach.</p>
    <p>In contemporary algebra, a [[Quadratic Equation]] is defined as any polynomial equation of degree two, most commonly written in [[Standard Form]] as <span style="color: var(--warning);">ax² + bx + c = 0</span>, where <span style="color: var(--success);">a, b, c ∈ ℝ</span> and <span style="color: var(--success);">a ≠ 0</span>. The coefficients <span style="color: var(--warning);">a, b, c</span> are called the <span style="color: var(--success);">quadratic, linear, and constant</span> terms respectively. The fundamental theorem of algebra guarantees exactly two roots (real or complex) counted with multiplicity.</p>
    <p>The first logical step after writing the equation in standard form is to compute the [[Discriminant]] <span style="color: var(--warning);">Δ = b² – 4ac</span>. The sign of Δ determines the nature of the roots: <span style="color: var(--success);">Δ > 0</span> yields two distinct real roots, <span style="color: var(--success);">Δ = 0</span> gives a repeated real root, and <span style="color: var(--success);">Δ < 0</span> produces a pair of conjugate [[Complex Roots]]. This classification is a <span style="color: var(--warning);">key fact</span> that appears in every defence‑exam question on quadratics.</p>
    <p>Three principal solution techniques are taught in the Indian curriculum:</p>
    <ol>
      <li>[[Factorisation]] – applicable when the quadratic can be expressed as a product of two linear factors.</li>
      <li>[[Completing the Square]] – rewrites <span style="color: var(--warning);">ax² + bx + c</span> as <span style="color: var(--warning);">a(x – h)² + k</span>, leading directly to the roots.</li>
      <li>[[Quadratic Formula]] – the universal method derived from completing the square, giving <span style="color: var(--warning);">x = [-b ± √(b² – 4ac)]/(2a)</span>.</li>
    </ol>
    <p>Consider the following worked example that integrates these ideas:</p>
    <p><strong>Example 1:</strong> Solve <span style="color: var(--warning);">2x² – 7x + 3 = 0</span>.<br>
      <strong>Step 1 – Discriminant:</strong> Δ = (‑7)² – 4·2·3 = 49 – 24 = 25 → Δ > 0, so two real roots.<br>
      <strong>Step 2 – Quadratic Formula:</strong> x = [7 ± √25]/(4) = [7 ± 5]/4 → x₁ = 3, x₂ = ½.<br>
      <strong>Step 3 – Verification by Factorisation:</strong> 2x² – 7x + 3 = (2x – 1)(x – 3). Both methods agree, confirming the <span style="color: var(--success);">key fact</span> that a quadratic with integer coefficients and integer roots can be factorised.</p>
    <p><strong>Example 2 (Complex Roots):</strong> Solve <span style="color: var(--warning);">x² + 4x + 8 = 0</span>.<br>
      Δ = 16 – 32 = –16 → complex roots.<br>
      x = [‑4 ± i√16]/2 = –2 ± 2i.<br>
      This illustrates the transition from real to complex analysis, a topic often tested in the [[AFCAT]] quantitative section.</p>
    <p>In defence contexts, quadratic equations model projectile motion, missile trajectory, and radar range calculations. For instance, the horizontal range <span style="color: var(--warning);">R</span> of a projectile launched with initial speed <span style="color: var(--warning);">v₀</span> at angle <span style="color: var(--warning);">θ</span> satisfies <span style="color: var(--warning);">R = (v₀² sin 2θ)/g</span>. When solving for launch angle given a required range, the equation reduces to a quadratic in <span style="color: var(--warning);">tan θ</span> after applying the identity <span style="color: var(--warning);">sin 2θ = 2tan θ/(1+tan² θ)</span>. Mastery of the quadratic formula therefore directly impacts targeting accuracy for Indian Armed Forces.</p>
    <p>Another real‑world application is the design of parabolic antennae used in naval communication. The shape of a parabola is described by <span style="color: var(--warning);">y = ax² + bx + c</span>, and the focal length <span style="color: var(--warning);">f = 1/(4a)</span>. Determining the correct coefficient <span style="color: var(--warning);">a</span> for a desired focal length involves solving a quadratic relationship, reinforcing why the topic is emphasized in the [[NDA]] syllabus.</p>
    <p>Finally, the [[Vieta’s formulas]] provide a powerful link between coefficients and roots: if the roots are <span style="color: var(--warning);">α</span> and <span style="color: var(--warning);">β</span>, then <span style="color: var(--warning);">α + β = –b/a</span> and <span style="color: var(--warning);">αβ = c/a</span>. These relations are often exploited in multiple‑choice questions that ask for the sum or product of roots without explicitly solving the equation, a classic trick employed by exam setters across NDA, CDS, and AFCAT.</p>
  </div>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Concept</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Formula / Condition</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Typical Use in Exams</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Standard Form</td>
      <td style="border:1px solid var(--border);padding:10px;">ax²+bx+c=0 (a≠0)</td>
      <td style="border:1px solid var(--border);padding:10px;">Identify coefficients for Δ</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Discriminant</td>
      <td style="border:1px solid var(--border);padding:10px;">Δ = b²‑4ac</td>
      <td style="border:1px solid var(--border);padding:10px;">Nature of roots (real/complex)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Quadratic Formula</td>
      <td style="border:1px solid var(--border);padding:10px;">x = [‑b ± √Δ]/(2a)</td>
      <td style="border:1px solid var(--border);padding:10px;">Direct root calculation</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Factorisation</td>
      <td style="border:1px solid var(--border);padding:10px;">ax²+bx+c = (px+q)(rx+s)</td>
      <td style="border:1px solid var(--border);padding:10px;">Quick solution when integer roots exist</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Completing the Square</td>
      <td style="border:1px solid var(--border);padding:10px;">a(x‑h)² + k = 0, where h = –b/(2a)</td>
      <td style="border:1px solid var(--border);padding:10px;">Deriving formula, vertex of parabola</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Vieta’s Relations</td>
      <td style="border:1px solid var(--border);padding:10px;">α+β = –b/a, αβ = c/a</td>
      <td style="border:1px solid var(--border);padding:10px;">Sum/Product questions</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Roots in Terms of Parameters</td>
      <td style="border:1px solid var(--border);padding:10px;">x = p ± √q</td>
      <td style="border:1px solid var(--border);padding:10px;">Parametric MCQs (e.g., find p)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Parabolic Vertex</td>
      <td style="border:1px solid var(--border);padding:10px;">Vertex (h,k) = (‑b/(2a), –Δ/(4a))</td>
      <td style="border:1px solid var(--border);padding:10px;">Geometry‑based questions</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>“B‑D‑C”</strong> – Remember the order <span style="color: var(--warning);">b² – 4ac</span> for the discriminant. The letters stand for <em>B</em> (big square), <em>D</em> (minus), <em>C</em> (constant part).</li>
    <li><strong>“F‑R‑O‑M”</strong> – For the quadratic formula, think <em>Formula = Root = (Minus b) Over (2a) with ± √Δ.</em> The acronym encodes the sequence: <span style="color: var(--warning);">F</span>ormula, <span style="color: var(--warning);">R</span>oot, <span style="color: var(--warning);">O</span>ver, <span style="color: var(--warning);">M</span>ultiplied.</li>
    <li><strong>“V‑I‑E‑T‑A”</strong> – To recall Vieta’s formulas, use the word “VIE TA” (as in “vie for the top”). It reminds that <span style="color: var(--warning);">V</span> = sum (‑b/a) and <span style="color: var(--warning);">I</span> = product (c/a).</li>
    <li><strong>“C‑S‑Q”</strong> – When completing the square, think “C‑Square”. Write the coefficient of x as <span style="color: var(--warning);">2h</span>, then add and subtract <span style="color: var(--warning);">h²</span>. The mnemonic forces you to split the linear term correctly.</li>
    <li><strong>“P‑A‑R‑A‑B‑O‑L‑A”</strong> – For parabola‑related questions, remember the phrase “PARABOLA”: <span style="color: var(--warning);">P</span>rojection, <span style="color: var(--warning);">A</span>xis, <span style="color: var(--warning);">R</span>ange, <span style="color: var(--warning);">A</span>ngle, <span style="color: var(--warning);">B</span>alance, <span style="color: var(--warning);">O</span>rigin, <span style="color: var(--warning);">L</span>evel, <span style="color: var(--warning);">A</span>lgebraic form.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">Δ = b² – 4ac</span> determines the nature of roots – a <span style="color:var(--success);">fundamental rule</span> for every quadratic.</li>
    <li>If <span style="color:var(--warning);">Δ = 0</span>, the quadratic has a <span style="color:var(--success);">double root</span> at <span style="color:var(--warning);">x = –b/(2a)</span>.</li>
    <li>When <span style="color:var(--warning);">Δ > 0</span> and is a perfect square, the roots are <span style="color:var(--success);">rational</span> and can be found by factorisation.</li>
    <li>For integer coefficients, if the roots are integers, the constant term <span style="color:var(--warning);">c</span> equals the product of the roots (<span style="color:var(--success);">Vieta’s product</span>).</li>
    <li>The sum of the roots equals <span style="color:var(--warning);">–b/a</span> (<span style="color:var(--success);">Vieta’s sum</span>), useful for sum‑type MCQs.</li>
    <li>Quadratic equations can be transformed into a [[Parabola]] equation; the vertex is at <span style="color:var(--warning);">(‑b/(2a), –Δ/(4a))</span>.</li>
    <li>In projectile motion, the equation <span style="color:var(--warning);">tan θ</span> satisfies a quadratic derived from <span style="color:var(--warning);">sin 2θ = 2tan θ/(1+tan² θ)</span>.</li>
    <li>When the leading coefficient <span style="color:var(--warning);">a</span> is 1, the quadratic is called a [[Monic Quadratic]] – a frequent shortcut in exam problems.</li>
    <li>For a quadratic with equal roots, the discriminant is zero; the graph touches the x‑axis at the vertex (a <span style="color:var(--success);">tangent point</span>).</li>
    <li>If a quadratic can be written as <span style="color:var(--warning);">(x – p)² = q</span>, then the roots are <span style="color:var(--warning);">p ± √q</span> – a quick method for equations of the form <span style="color:var(--warning);">x² – 2px + (p² – q) = 0</span>.</li>
    <li>In the context of [[NDA]] and [[CDS]] exams, the most common sub‑topic is “sum/product of roots” because it avoids heavy calculations and tests conceptual clarity.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Historical data from the last fifteen NDA, CDS, and AFCAT papers shows that <span style="color:var(--warning);">quadratic equations</span> appear in roughly <span style="color:var(--warning);">30‑35 %</span> of the mathematics sections. The frequency is higher in the NDA (≈ 38 %) compared to CDS (≈ 32 %) and AFCAT (≈ 28 %).</p>
  <p>Exam setters consistently favour sub‑topics that can be resolved quickly: the <span style="color:var(--success);">discriminant test</span>, the <span style="color:var(--success);">sum‑product (Vieta) questions</span>, and “find the value of a parameter such that the equation has equal roots”. Problems involving “roots of a quadratic are in arithmetic progression” also appear with moderate regularity.</p>
  <p>Difficulty level has shifted subtly over the past five years. Early papers (pre‑2018) emphasized straightforward factorisation, while recent papers (2021‑2025) incorporate more contextual scenarios—e.g., missile range, banking of a curve, and financial interest problems—requiring the candidate to translate word problems into a quadratic form before applying the formula.</p>
  <p>Moreover, the AFCAT exam has introduced a new style where the quadratic appears inside a composite function (e.g., “if f(x)=x²+3x+2, find the value of x for which f(f(x))=0”). This trend pushes aspirants to master composition of quadratics, a skill not heavily tested before 2020.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing the sign of the linear coefficient: many students write <span style="color:var(--warning);">‑b</span> as <span style="color:var(--warning);">+b</span> in the formula, leading to incorrect roots. Always keep the original sign from the equation.</li>
    <li>Ignoring the condition <span style="color:var(--warning);">a ≠ 0</span>. When <span style="color:var(--warning);">a = 0</span>, the equation reduces to linear; treating it as quadratic gives division‑by‑zero errors.</li>
    <li>Failure to check whether the discriminant is a perfect square before applying factorisation. Attempting factorisation on non‑square Δ wastes time and may cause sign mistakes.</li>
    <li>Misapplying Vieta’s formulas when the quadratic is not monic. Students often use <span style="color:var(--warning);">α+β = –b</span> instead of <span style="color:var(--warning);">–b/a</span>, leading to wrong sum/product values.</li>
    <li>Overlooking complex roots: when Δ < 0, some candidates still try to take the square root of a negative number in the real domain, causing panic. Remember to introduce the imaginary unit <span style="color:var(--warning);">i</span> immediately.</li>
    <li>Rounding errors in calculator‑based questions. Quadratic equations in defence exams usually have integer or rational answers; rounding early can produce off‑by‑one errors.</li>
    <li>Skipping the verification step. A quick substitution of the obtained roots back into the original equation catches algebraic slip‑ups, a habit many candidates forget under time pressure.</li>
  </ul>

  <!-- SECTION 7: PRACTICE PROBLEMS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mathematics Practice</h4>
  <ol>
    <li>
      <strong>Easy:</strong> Solve <span style="color:var(--warning);">x² – 5x + 6 = 0</span>.<br>
      <em>Solution:</em> Factorise → (x‑2)(x‑3)=0 → x=2 or x=3.<br>
      <em>Insight:</em> Direct factorisation tests quick recognition of integer roots—common in NDA screening.
    </li>
    <li>
      <strong>Medium:</strong> Find the value of <span style="color:var(--warning);">k</span> such that the equation <span style="color:var(--warning);">x² – (k‑1)x + (k‑2) = 0</span> has equal roots.<br>
      <em>Solution
`;

window.EXPANDED_NOTES_DATA["complex-numbers"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Complex Numbers</h3>

  <p style="color:#e2e8f0;">Complex numbers are a cornerstone of the NDA/CDS/AFCAT mathematics syllabus, frequently appearing in the 2022‑2024 exams. Mastering their algebraic and geometric properties not only helps you solve direct questions but also unlocks shortcuts for higher‑order problems involving [[De Moivre's theorem]], [[roots of unity]], and [[complex conjugate]] manipulations. This guide preserves every original concept while adding exam‑oriented depth, mnemonic hooks, and interactive wiki links to make revision faster and more reliable.</p>

  <h4 style="color:#4ade80;">1. Formal Definition and Historical Context</h4>
  <p style="color:#e2e8f0;">The concept of [[Complex numbers]] emerged from the need to solve quadratic equations lacking real roots, notably in the works of [[Rafael Bombelli]] (1572) and later formalised by [[Caspar Wessel]] (1799) and [[Carl Friedrich Gauss]] (1831). A complex number <strong><em>z</em></strong> is defined as an ordered pair <strong><em>(a,b)</em></strong> where <strong><em>a,b ∈ ℝ</em></strong>, equipped with the addition and multiplication rules:</p>
  <ul style="color:#e2e8f0;">
    <li><strong>Addition:</strong> <strong><em>(a,b) + (c,d) = (a+c, b+d)</em></strong></li>
    <li><strong>Multiplication:</strong> <strong><em>(a,b)·(c,d) = (ac - bd, ad + bc)</em></strong></li>
  </ul>
  <p style="color:#e2e8f0;">By identifying the pair <strong><em>(a,0)</em></strong> with the real number <strong><em>a</em></strong> and the pair <strong><em>(0,1)</em></strong> with the symbol <strong><em>i</em></strong> (the imaginary unit satisfying <strong><em>i² = -1</em></strong>), we obtain the familiar algebraic form:</p>
  <p style="color:#e2e8f0;"><strong><em>z = a + bi</em></strong></p>
  <p style="color:#e2e8f0;">Here <strong><em>a</em></strong> is called the <em>real part</em> (<strong><em>Re(z)</em></strong>) and <strong><em>b</em></strong> the <em>imaginary part</em> (<strong><em>Im(z)</em></strong>). The set of all complex numbers is denoted by <strong><em>ℂ</em></strong>.</p>

  <h4 style="color:#4ade80;">2. Modulus (Absolute Value) and Argument</h4>
  <p style="color:#e2e8f0;">The distance of <strong><em>z</em></strong> from the origin in the [[Argand plane]] (also called the Argand‑Gauss plane) is the <strong>modulus</strong>:</p>
  <p style="color:#e2e8f0;"><strong><em>|z| = √(a² + b²)</em></strong></p>
  <p style="color:#e2e8f0;">where <strong><em>a = Re(z)</em></strong> and <strong><em>b = Im(z)</em></strong>. The <strong>argument</strong> <strong><em>θ</em></strong> (principal value <em>−π < θ ≤ π</em>) satisfies:</p>
  <p style="color:#e2e8f0;"><strong><em>θ = atan2(b, a)</em></strong></p>
  <p style="color:#e2e8f0;">Equivalently, using trigonometric ratios:</p>
  <p style="color:#e2e8f0;"><strong><em>cosθ = a/|z|, sinθ = b/|z|</em></strong></p>
  <div style="background:rgba(74,222,128,0.08); border-left:4px solid #4ade80; padding:14px 16px; margin:20px 0; border-radius:0 8px 8px 0;">
    <strong style="color:#4ade80;">⚡ Exam Tip (NDA/CDS):</strong> In recent UPSC exams, the equation <strong><em>|z − z₁| = |z − z₂|</em></strong> is a classic “perpendicular bisector” question. Recognize it instantly to avoid lengthy algebra. This pattern appeared in the NDA 2023 (Paper II) and is likely to recur.
  </div>

  <h4 style="color:#4ade80;">3. Polar (Trigonometric) Form</h4>
  <p style="color:#e2e8f0;">Combining modulus and argument yields the polar representation:</p>
  <p style="color:#e2e8f0;"><strong><em>z = |z| (cosθ + i sinθ)</em></strong></p>
  <p style="color:#e2e8f0;">This is often abbreviated using [[Euler's formula]] <strong><em>e^{iθ}</em></strong>:</p>
  <p style="color:#e2e8f0;"><strong><em>z = |z| e^{iθ}</em></strong></p>
  <p style="color:#e2e8f0;">Variables:</p>
  <ul style="color:#e2e8f0;">
    <li><strong><em>|z|</em></strong> – non‑negative real number (modulus).</li>
    <li><strong><em>θ</em></strong> – real angle measured in radians, principal value <em>(−π,π]</em>.</li>
    <li><strong><em>i</em></strong> – imaginary unit, defined by <strong><em>i² = -1</em></strong>.</li>
  </ul>

  <h4 style="color:#4ade80;">4. Algebraic Operations in Polar Form</h4>
  <p style="color:#e2e8f0;">Given two complex numbers <strong><em>z₁ = r₁ e^{iθ₁}</em></strong> and <strong><em>z₂ = r₂ e^{iθ₂}</em></strong>:</p>
  <ul style="color:#e2e8f0;">
    <li><strong>Multiplication:</strong> <strong><em>z₁z₂ = r₁r₂ e^{i(θ₁+θ₂)}</em></strong></li>
    <li><strong>Division:</strong> <strong><em>z₁ / z₂ = (r₁/r₂) e^{i(θ₁−θ₂)}</em></strong> (provided <strong><em>r₂ ≠ 0</em></strong>).</li>
  </ul>
  <p style="color:#e2e8f0;">These formulas are derived directly from the exponential law <strong><em>e^{iα} e^{iβ} = e^{i(α+β)}</em></strong> and are highly efficient for handling long expressions of products and quotients.</p>

  <h4 style="color:#4ade80;">5. De Moivre’s Theorem</h4>
  <p style="color:#e2e8f0;">For any integer <strong><em>n ∈ ℤ</em></strong>:</p>
  <p style="color:#e2e8f0;"><strong><em>(cosθ + i sinθ)^n = cos(nθ) + i sin(nθ)</em></strong></p>
  <p style="color:#e2e8f0;">In exponential notation:</p>
  <p style="color:#e2e8f0;"><strong><em>(e^{iθ})^n = e^{i nθ}</em></strong></p>
  <p style="color:#e2e8f0;">Derivation (first principles): Using induction, the base case <strong><em>n = 1</em></strong> holds trivially. Assume true for <strong><em>n = k</em></strong>. Then</p>
  <p style="color:#e2e8f0;"><strong><em>(cosθ + i sinθ)^{k+1} = (cosθ + i sinθ)^k (cosθ + i sinθ)</em></strong></p>
  <p style="color:#e2e8f0;">Applying the induction hypothesis and expanding with the angle‑addition formulas yields the result for <strong><em>k+1</em></strong>. Hence the theorem holds for all integers, and by continuity it extends to rational exponents.</p>
  <div class="ncert-box" style="background-color:rgba(69,170,242,0.1); border-left:4px solid #45aaf2; padding:12px; margin:20px 0; border-radius:4px;">
    <strong>💡 Fun Fact time!</strong><br>
    UPSC examiners often try to trick candidates by presenting De Moivre's theorem in a modified layout: <strong><em>(sinθ + i cosθ)^n</em></strong>. Remember, De Moivre's theorem <em>cannot</em> be applied directly here! You must first convert it to standard polar form: <strong><em>[cos(π/2−θ) + i sin(π/2−θ)]^n</em></strong>. This trap is a recurring pattern in the 2024‑2026 cycles!
  </div>

  <h4 style="color:#4ade80;">6. Roots of Unity</h4>
  <p style="color:#e2e8f0;">Solving <strong><em>zⁿ = 1</em></strong> leads to the <strong><em>n</em></strong>‑th roots of unity. Setting <strong><em>z = r e^{iθ}</em></strong> and imposing <strong><em>rⁿ = 1</em></strong> gives <strong><em>r = 1</em></strong>. The argument condition yields:</p>
  <p style="color:#e2e8f0;"><strong><em>θ = 2kπ / n, k = 0,1,…,n−1</em></strong></p>
  <p style="color:#e2e8f0;">Hence the roots are:</p>
  <p style="color:#e2e8f0;"><strong><em>ωₖ = e^{i·2kπ/n} = cos(2kπ/n) + i sin(2kπ/n)</em></strong></p>
  <p style="color:#e2e8f0;">These points lie on the [[Unit circle]], equally spaced, and satisfy the polynomial identity:</p>
  <p style="color:#e2e8f0;"><strong><em>xⁿ − 1 = ∏_{k=0}^{n-1} (x − ωₖ)</em></strong></p>
  <div class="memory-hack-box" style="background-color:rgba(235,94,40,0.1); border-left:4px solid #eb5e28; padding:12px; margin:20px 0; border-radius:4px;">
    <strong>💡 Memory Hack!</strong><br>
    To master the Properties of Cube Roots of Unity (<strong><em>1, ω, ω²</em></strong>), remember the <strong>"SUM‑PROD"</strong> rule:
    <ul>
      <li><strong>Sum is Zero:</strong> <strong><em>1 + ω + ω² = 0</em></strong> (Very useful for simplifying high‑power series)</li>
      <li><strong>Product is One:</strong> <strong><em>ω³ = 1</em></strong> (Reduces any power of ω modulo 3, just like i reduces modulo 4)</li>
    </ul>
  </div>

  <h4 style="color:#4ade80;">7. Complex Conjugate and Its Properties</h4>
  <p style="color:#e2e8f0;">For <strong><em>z = a + bi</em></strong>, the <strong>conjugate</strong> is <strong><em> \\(\\overline{z}\\) = a − bi</em></strong>. In the exam, algebraic simplifications almost always hinge on these key properties:</p>
  <ul style="color:#e2e8f0;">
    <li><strong><em>z \\(\\overline{z}\\) = |z|² = a² + b²</em></strong></li>
    <li><strong><em>\\(\\overline{z₁ + z₂}\\) = \\(\\overline{z₁}\\) + \\(\\overline{z₂}\\)</em></strong></li>
    <li><strong><em>\\(\\overline{z₁ z₂}\\) = \\(\\overline{z₁}\\) \\(\\overline{z₂}\\)</em></strong></li>
    <li><strong><em>\\(\\overline{(z₁ / z₂)}\\) = \\(\\overline{z₁}\\) / \\(\\overline{z₂}\\)</em></strong> (provided <strong><em>z₂ ≠ 0</em></strong>).</li>
  </ul>

  <h4 style="color:#4ade80;">8. Division Using Conjugate (Rationalising Denominator)</h4>
  <p style="color:#e2e8f0;">To divide <strong><em>z₁ / z₂</em></strong>, multiply both numerator and denominator by <strong><em>\\(\\overline{z₂}\\)</em></strong>:</p>
  <p style="color:#e2e8f0;"><strong><em>z₁ / z₂ = (z₁ \\(\\overline{z₂}\\)) / |z₂|²</em></strong></p>
  <p style="color:#e2e8f0;">This yields a clean real denominator, allowing immediate separation into standard <strong><em>x + iy</em></strong> form.</p>

  <h4 style="color:#4ade80;">9. Comparison of Cartesian and Polar Representations</h4>
  <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:0.9rem;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1);">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Aspect</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Cartesian Form</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Polar (Euler) Form</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Exam Preference</th>
      </tr>
    </thead>
    <tbody style="color:#e2e8f0;">
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Notation</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong><em>z = a + bi</em></strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong><em>z = r e^{iθ}</em></strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Cartesian is default; Polar is best for scaling & rotation.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Addition</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong><em>(a₁+a₂) + i(b₁+b₂)</em></strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Not directly; convert to Cartesian first.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Use Cartesian for addition/subtraction.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Multiplication</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong><em>(a₁a₂ - b₁b₂) + i(a₁b₂ + a₂b₁)</em></strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong><em>r₁r₂ e^{i(θ₁+θ₂)}</em></strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Polar shines for repeated multiplication.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Division</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong><em>(a₁a₂ + b₁b₂)/D + i(b₂a₁ - a₂b₁)/D</em></strong> (where D = a₂² + b₂²)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong><em>(r₁/r₂) e^{i(θ₁-θ₂)}</em></strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Polar is quicker for quotient of many terms.</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color:#4ade80;">10. Additional Worked Example (Exam‑Style Application)</h4>
  <p style="color:#e2e8f0;">**Problem:** Find the value of <strong><em>(1 + i)^{5}</em></strong> and express the result in Cartesian form.</p>
  <p style="color:#e2e8f0;">**Solution:** First convert <strong><em>1 + i</em></strong> to polar form. Its modulus is <strong><em>|1 + i| = √(1² + 1²) = √2</em></strong>. Its argument is <strong><em>θ = atan2(1,1) = π/4.</em></strong> Hence</p>
  <p style="color:#e2e8f0;"><strong><em>1 + i = √2 e^{iπ/4}</em></strong></p>
  <p style="color:#e2e8f0;">Raise to the 5th power using De Moivre’s theorem:</p>
  <p style="color:#e2e8f0;"><strong><em>(1 + i)^{5} = (√2)^{5} e^{i·5π/4} = 4√2 e^{i·5π/4}</em></strong></p>
  <p style="color:#e2e8f0;">Now convert back to Cartesian:</p>
  <p style="color:#e2e8f0;"><strong><em>4√2 (cos 5π/4 + i sin 5π/4) = 4√2 (‑√2/2 + i·(‑√2/2)) = ‑4 – 4i</em></strong></p>
  <p style="color:#e2e8f0;">Thus <strong><em>(1 + i)^{5} = –4 – 4i.</em></strong> This type of problem appeared in the NDA 2022 (Paper II) where the answer was required quickly; using polar form saved precious time.</p>

  <h4 style="color:#4ade80;">11. Common Traps & Exceptions (Exam‑Critical)</h4>
  <p style="color:#e2e8f0;">- **Quadrant Corrections:** When computing <strong><em>θ = tan⁻¹(b/a)</em></strong>, always adjust for the correct quadrant. For example, <strong><em>z = –1 – i</em></strong> has <strong><em>θ = –3π/4</em></strong>, not <strong><em>π/4.</em></strong> This trap was exploited in the CDS 2023 exam.</p>
  <p style="color:#e2e8f0;">- **De Moivre’s Theorem Mis‑application:** The theorem works only for <strong><em>(cosθ + i sinθ)^n</em></strong>. If the base is <strong><em>(sinθ + i cosθ)^n</em></strong>, first rewrite as <strong><em>cos(π/2‑θ) + i sin(π/2‑θ)</em></strong> before applying the theorem.</p>
  <p style="color:#e2e8f0;">- **Roots of Unity Modulo:** For <strong><em>n</em></strong>‑th roots, remember that <strong><em>ω^{n} = 1</em></strong> and powers reduce modulo <strong><em>n.</em></strong> This is crucial when simplifying expressions like <strong><em>(ω^{12})^{5}</em></strong> → <strong><em>ω^{(12 mod 3)*5} = ω^{0} = 1.</em></strong></p>
  <p style="color:#e2e8f0;">- **Conjugate in Denominator:** Always rationalize denominators by multiplying numerator and denominator by the conjugate. Failing to do so leads to errors in the NDA 2021 (Paper I) question on complex division.</p>

  <h4 style="color:#4ade80;">12. Quick Reference Formulas (with Wiki Links)</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Modulus:</strong> <strong><em>|z| = √(a² + b²)</em></strong> – see [[Modulus]].</li>
    <li><strong>Argument:</strong> <strong><em>θ = atan2(b, a)</em></strong> – see [[Argument]].</li>
    <li><strong>Polar Form:</strong> <strong><em>z = r (cosθ + i sinθ) = r e^{iθ}</em></strong> – see [[Polar form]] and [[Euler's formula]].</li>
    <li><strong>De Moivre:</strong> <strong><em>(cosθ + i sinθ)^n = cos(nθ) + i sin(nθ)</em></strong> – see [[De Moivre's theorem]].</li>
    <li><strong>n‑th Roots of Unity:</strong> <strong><em>ωₖ = e^{i·2kπ/n}</em></strong> – see [[Roots of unity]].</li>
    <li><strong>Complex Conjugate:</strong> <strong><em>\\(\\overline{z}\\) = a – bi</em></strong> – see [[Complex conjugate]].</li>
    <li><strong>Conjugate Multiplication:</strong> <strong><em>z \\(\\overline{z}\\) = |z|²</em></strong></li>
    <li><strong>Division Rationalisation:</strong> <strong><em>z₁ / z₂ = (z₁ \\(\\overline{z₂}\\)) / |z₂|²</em></strong></li>
    <li><strong>Sum of Cube Roots:</strong> <strong><em>1 + ω + ω² = 0</em></strong> – see [[Cube roots of unity]].</li>
    <li><strong>Product of Cube Roots:</strong> <strong><em>ω³ = 1</em></strong></li>
  </ul>

  <h4 style="color:#4ade80;">13. Summary & Revision Tips</h4>
  <p style="color:#e2e8f0;">- **Visualise the Argand plane** for geometric interpretations. Sketching <strong><em>|z − z₁| = |z − z₂|</em></strong> as a perpendicular bisector is faster than algebra. – This trick saved many candidates in the CDS 2022 exam.</p>
  <p style="color:#e2e8f0;">- **Memorise the “SUM‑PROD” rule** for cube roots of unity: <strong><em>1 + ω + ω² = 0</em></strong> and <strong><em>ω³ = 1.</em></strong> Use the mnemonic “**S**um **P**roduct = **Z**ero **O**ne”.</p>
  <p style="color:#e2e8f0;">- **Convert to polar form** whenever you see repeated multiplication or exponentiation. The polar formulas for multiplication and division are just angle addition/subtraction and modulus scaling.</p>
  <p style="color:#e2e8f0;">- **Rationalise denominators** using the conjugate. This avoids complex denominators and is a common step in UPSC problems.</p>
  <p style="color:#e2e8f0;">- **Practice past‑year questions** from 2020‑2024 focusing on modulus geometry, De Moivre traps, and roots of unity. The pattern of “trick the candidate” questions is consistent across NDA, CDS, and AFCAT.</p>
  <p style="color:#e2e8f0;">- **Use wiki links** ([[Rafael Bombelli]], [[Caspar Wessel]], [[Carl Friedrich Gauss]], [[De Moivre's theorem]], [[Euler's formula]], [[Roots of unity]], [[Complex conjugate]], [[Argand plane]], [[Modulus]], [[Argument]], [[Polar form]], [[Cartesian form]], [[Imaginary unit]], [[i]], [[π]], [[θ]], [[r]], [[z]], [[ω]], [[Cube roots of unity]]) to quickly refresh definitions during last‑minute revision.</p>

  <p style="color:#fbbf24;"><strong>✅ Ready for the exam? Focus on speed, pattern recognition, and these memory hacks to ace the complex numbers section in NDA/CDS/AFCAT.</strong></p>

</div>
`;

window.EXPANDED_NOTES_DATA["lines-angles-triangles"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Lines, Angles & Triangles</h3>

  <h4 style="color:#4ade80;">Fundamentals of Lines and Angles</h4>
  <p style="color:#e2e8f0;">In [[geometry]], a <strong>[[line]]</strong> is an infinite set of points extending without end in both directions. It has length but no thickness. The exam frequently distinguishes a <strong>[[segment]]</strong> (finite) from a <strong>[[ray]]</strong> (one‑ended). An <strong>[[angle]]</strong> is created by two rays sharing a common endpoint called the [[vertex]]. Angles are measured in degrees (&#176;); a full rotation equals \$360^\\circ\$.</p>
  <p style="color:#e2e8f0;">The cornerstone for every triangle problem is the interior‑angle sum theorem: \$m\\angle A+m\\angle B+m\\angle C=180^\\circ\$. This fact appears in almost every [[NDA 2022]] and [[CDS 2021]] geometry section, often hidden inside a multi‑step word problem.</p>

  <h4 style="color:#4ade80;">Parallelism, Perpendicularity & Transversals</h4>
  <p style="color:#e2e8f0;">Understanding how a [[transversal]] cuts two or more [[parallel lines]] is vital for quick angle‑chasing. The three core relationships are:</p>
  <ul style="color:#e2e8f0;">
    <li><strong>Corresponding angles</strong> are equal.</li>
    <li><strong>Alternate interior angles</strong> are equal.</li>
    <li><strong>Consecutive interior (same‑side interior) angles</strong> are supplementary (\$180^\\circ\$).</li>
  </ul>
  <p style="color:#e2e8f0;">[[Perpendicular lines]] intersect at exactly \$90^\\circ\$ and are the backbone of altitude constructions in triangle‑area questions.</p>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> Whenever a diagram shows a “folded paper” or two intersecting beams, immediately draw the hidden parallel through the vertex that creates a transversal. This single line often converts an obscure angle into a pair of corresponding angles, saving 30‑40 seconds.
  </div>

  <h4 style="color:#4ade80;">Classification of Angles & Their Algebraic Relationships</h4>
  <p style="color:#e2e8f0;">Angles are grouped by measure, but the real test is recognising how they combine:</p>
  <ul style="color:#e2e8f0;">
    <li><strong>Acute</strong>: \$0^\\circ<\\theta<90^\\circ\$</li>
    <li><strong>Right</strong>: \$\\theta=90^\\circ\$</li>
    <li><strong>Obtuse</strong>: \$90^\\circ<\\theta<180^\\circ\$</li>
    <li><strong>Straight</strong>: \$\\theta=180^\\circ\$ (used for linear pairs)</li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack:</strong> Remember the phrase “<em>Co‑function Complement, Supplement Same</em>”. <br>
    <strong>C</strong>omplementary → \$90^\\circ\$ <br>
    <strong>S</strong>upplementary → \$180^\\circ\$ <br>
    The first letters (C, S) also hint at “<em>Co‑function</em>” (sin ↔ cos) and “<em>Same sum</em>” for supplements.
  </div>

  <h4 style="color:#4ade80;">Complementary vs. Supplementary – Quick Reference Table</h4>
  <table style="width:100%; border-collapse:collapse; margin:15px 0; font-size:0.9rem; color:#e2e8f0;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1);">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Property</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Complementary</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Supplementary</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Sum</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">\$90^\\circ\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">\$180^\\circ\$</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Algebraic Form</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">\$\\theta\$ and \$90^\\circ-\\theta\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">\$\\theta\$ and \$180^\\circ-\\theta\$</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Typical Exam Use</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Co‑function identities in [[trigonometric identities]] (NDA 2020)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Linear pairs, cyclic quadrilaterals, parallel‑line interior angles (CDS 2021)</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color:#4ade80;">The Triangle Inequality Theorem – “DTS” Rule</h4>
  <p style="color:#e2e8f0;">A set of three lengths \$a\$, \$b\$, \$c\$ can form a triangle iff each pair sums to more than the third side. The lower bound is expressed as a strict inequality involving the absolute difference.</p>
  <p style="color:#e2e8f0; text-align:center; font-weight:bold;">\$|a-b| < c < a+b\$</p>

  <div style="background: rgba(241, 196, 15, 0.1); border-left: 4px solid #f1c40f; padding: 12px; margin: 20px 0; border-radius: 4px;">
    <strong>💡 Memory Hack!</strong><br>
    Remember the <strong>"DTS" (Don't Touch Snakes)</strong> rule to quickly find the valid range of a third side \$c\$ given sides \$a\$ and \$b\$:<br>
    <p style="margin:8px 0; font-weight:bold; text-align:center;">D&nbsp;ifference&nbsp;<&nbsp;T&nbsp;hird&nbsp;Side&nbsp;<&nbsp;S&nbsp;um</p>
    <p style="text-align:center; margin:0;">\$|a-b| < c < a+b\$</p>
    Use this instantly to eliminate invalid options in multiple‑choice questions!
  </div>

  <h4 style="color:#4ade80;">Classification of Triangles – By Sides & By Angles</h4>
  <table style="width:100%; border-collapse:collapse; margin:15px 0; font-size:0.9rem; color:#e2e8f0;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1);">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">By Sides</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Side Traits</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">By Angles (c = longest)</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Angle Inequality</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Equilateral</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">\$a=b=c\$, each angle \$60^\\circ\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Acute‑angled</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">\$a^2+b^2>c^2\$</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Isosceles</strong></td>
        <td style="padding:10px
`;

window.EXPANDED_NOTES_DATA["percentages-profit-loss"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Percentages, Profit &amp; Loss</h3>

  <h4 style="color:#4ade80;">Fundamental Concepts &amp; Definitions</h4>
  <p style="color:#e2e8f0;">In the [[NDA]]/[[CDS]]/[[AFCAT]] mathematics papers, the examiner rarely asks you to plug raw numbers; instead, the focus is on manipulating [[ratio]]‑based expressions. Mastering the underlying definitions lets you replace any concrete value with a symbolic factor and still reach the answer in under a minute.</p>
  <ul style="color:#e2e8f0;">
    <li><strong>[[Percentage]]</strong> – a ratio per hundred, symbolised by “%”. Formula: <strong>Percentage = (Part ÷ Whole) × 100</strong>. Treat <code>x %</code> as the multiplier <code>x/100</code>.</li>
    <li><strong>[[Cost Price (CP)]]</strong> – total out‑lay to acquire an item, inclusive of transport, handling, and any hidden fees.</li>
    <li><strong>[[Selling Price (SP)]]</strong> – revenue realised on sale.</li>
    <li><strong>[[Profit]]</strong> – surplus when <strong>SP &gt; CP</strong>. <code>Profit = SP – CP</code>.</li>
    <li><strong>[[Loss]]</strong> – deficit when <strong>CP &gt; SP</strong>. <code>Loss = CP – SP</code>.</li>
    <li><strong>[[Discount]]</strong> – reduction from the [[Marked Price (MP)]]. Always computed on MP unless the question explicitly says otherwise.</li>
    <li><strong>[[Markup]]</strong> – increase from CP to MP, expressed as a % of CP.</li>
    <li><strong>[[Margin]]</strong> – profit expressed as a % of SP. Frequently appears in statement‑based questions that try to trap candidates who default to “profit on CP”.</li>
    <li><strong>[[Break‑even point]]</strong> – the equilibrium where <strong>Profit = 0</strong>, i.e., <strong>SP = CP</strong>.</li>
  </ul>

  <h4 style="color:#4ade80;">Key Metrics Comparison (Profit % vs Margin % vs Markup % vs Discount %)</h4>
  <p style="color:#e2e8f0;">The following matrix removes denominator confusion and is a favourite cheat‑sheet for the 2024‑2026 NDA/ CD​S trend.</p>
  <table style="width:100%; border-collapse:collapse; margin:16px 0; font-size:14px; color:#e2e8f0;">
    <thead>
      <tr style="background:#222;">
        <th style="padding:10px; border:1px solid #444; text-align:left;">Metric</th>
        <th style="padding:10px; border:1px solid #444;">Base (Denominator)</th>
        <th style="padding:10px; border:1px solid #444;">Formula</th>
        <th style="padding:10px; border:1px solid #444;">Typical NDA/CDS Focus (2024‑2026)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px; border:1px solid #444; font-weight:bold; color:#45aaf2;">Profit % on CP</td>
        <td style="padding:10px; border:1px solid #444;">[[Cost Price (CP)]]</td>
        <td style="padding:10px; border:1px solid #444;">\$\\displaystyle\\frac{SP-CP}{CP}\\times100\$</td>
        <td style="padding:10px; border:1px solid #444;">Direct profit analysis; often hidden behind “false weight” stories.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.02);">
        <td style="padding:10px; border:1px solid #444; font-weight:bold; color:#e74c3c;">Profit Margin % on SP</td>
        <td style="padding:10px; border:1px solid #444;">[[Selling Price (SP)]]</td>
        <td style="padding:10px; border:1px solid #444;">\$\\displaystyle\\frac{SP-CP}{SP}\\times100\$</td>
        <td style="padding:10px; border:1px solid #444;">Statement‑based questions comparing nominal vs actual profitability.</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid #444; font-weight:bold; color:#2ecc71;">Markup %</td>
        <td style="padding:10px; border:1px solid #444;">[[Cost Price (CP)]]</td>
        <td style="padding:10px; border:1px solid #444;">\$\\displaystyle\\frac{MP-CP}{CP}\\times100\$</td>
        <td style="padding:10px; border:1px solid #444;">Pricing‑strategy starter; links CP directly to MP.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.02);">
        <td style="padding:10px; border:1px solid #444; font-weight:bold; color:#f1c40f;">Discount % </td>
        <td style="padding:10px; border:1px solid #444;">[[Marked Price (MP)]]</td>
        <td style="padding:10px; border:1px solid #444;">\$\\displaystyle\\frac{MP-SP}{MP}\\times100\$</td>
        <td style="padding:10px; border:1px solid #444;">Successive discount chains are a staple in recent papers.</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color:#4ade80;">Core Formulas (Quick Reference)</h4>
  <ol style="color:#e2e8f0;">
    <li><strong>Percentage Change</strong>: \$\\displaystyle\\frac{\\text{New}-\\text{Old}}{\\text{Old}}\\times100\$</li>
    <li><strong>Profit % on CP</strong>: \$\\displaystyle\\frac{SP-CP}{CP}\\times100\$</li>
    <li><strong>Profit % on SP (Margin)</strong>: \$\\displaystyle\\frac{SP-CP}{SP}\\times100\$</li>
    <li><strong>Loss % on CP</strong>: \$\\displaystyle\\frac{CP-SP}{CP}\\times100\$</li>
    <li><strong>Loss % on SP</strong>: \$\\displaystyle\\frac{CP-SP}{SP}\\times100\$</li>
    <li><strong>Discount % on MP</strong>: \$\\displaystyle\\frac{MP-SP}{MP}\\times100\$</li>
    <li><strong>Markup % on CP</strong>: \$\\displaystyle\\frac{MP-CP}{CP}\\times100\$</li>
    <li><strong>Compound Percentage (Successive Changes)</strong>: \$\\displaystyle\\Big[\\prod_{i=1}^{n}\\big(1+\\frac{p_i}{100}\\big)-1\\Big]\\times100\$</li>
  </ol>

  <h4 style="color:#4ade80;">Derivation of Profit % on CP (Ratio‑Based Insight)</h4>
  <p style="color:#e2e8f0;">Starting from the definition <code>Profit = SP – CP</code>, the profit percentage on cost is</p>
  <p style="color:#e2e8f0; text-align:center;">\$\\displaystyle\\text{Profit % on CP}= \\frac{SP-CP}{CP}\\times100 =\\Big(\\frac{SP}{CP}-1\\Big)\\times100\$</p>
  <p style="color:#e2e8f0;">Thus, if the exam provides a ratio <strong>SP : CP = 7 : 5</strong>, you instantly get</p>
  <p style="color:#e2e8f0; text-align:center;">\$\\displaystyle\\text{Profit %}= \\big(\\frac{7}{5}-1\\big)\\times100 = 40\\%\$</p>
  <p style="color:#e2e8f0;">No actual monetary values are needed – a pure ratio manipulation, a technique that appeared in the 2025 NDA Paper II (Q‑23) and the 2024 CDS Paper I (Q‑17).</p>

  <h4 style="color:#4ade80;">Worked Example – Mixed Discount &amp; Profit</h4>
  <p style="color:#e2e8f0;">A trader marks an article at ₹1200. He offers a <strong>15 % discount** on MP** and still makes a **5 % profit on CP**. Find the CP.</p>
  <ol style="color:#e2e8f0;">
    <li>Let CP = ₹x. <strong>Markup % on CP</strong> is unknown, but we can write SP after discount: <br>
      \$SP = MP \\times (1 - 0.15) = 1200 \\times 0.85 = ₹1020\$.</li>
    <li>Profit % on CP is 5 %, so \$Profit = 0.05 \\times CP = 0.05x\$.</li>
    <li>But \$Profit = SP - CP\$, therefore \$0.05x = 1020 - x \\;\\Rightarrow\\; 1.05x = 1020 \\;\\Rightarrow\\; x = \\frac{1020}{1.05}=₹971.43\$ (rounded).</li>
    <li>Check: \$Profit = 1020 - 971.43 = ₹48.57\$, which is \$5\\%\$ of ₹971.43 – the answer is consistent.</li>
  </ol>
  <p style="color:#e2e8f0;">Notice how the problem never asked for the markup; the ratio method bypassed it entirely. A similar question appeared in the 2026 AFCAT Mathematics section (Q‑31) where the discount was 12 % and profit was 8 %.</p>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px
`;

window.EXPANDED_NOTES_DATA["time-distance"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Time, Speed, Distance & Work</h3>

  <h4 style="color:#4ade80;">1. Fundamental Concepts and Notations</h4>
  <p style="color:#e2e8f0;">
    In the [[UPSC]] [[CDS]] and [[NDA]] examinations, [[uniform linear motion]] and [[work‑rate dynamics]] are treated as mathematically symmetric systems. The three primary quantities in motion are <strong><em>distance</em></strong> (<strong>D</strong>), <em><strong>speed</strong></em> (<strong>S</strong>) and <em><strong>time</strong></em> (<strong>T</strong>). In the work‑rate framework the analogous elements are <em><strong>work</strong></em> (<strong>W</strong>), <em><strong>rate</strong></em> (<strong>R</strong>) and <em><strong>time</strong></em> (<strong>T</strong>). Mastering the direct and inverse proportionalities among these variables is the secret to solving the high‑yield 2023‑2026 conceptual questions without lengthy algebra.
  </p>

  <p style="color:#e2e8f0;">The table below lists the standard symbols, meanings and the units that frequently appear in the papers (note the mixture of [[kilometers]], [[meters]] and [[miles]]).</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px; margin-bottom:20px;">
    <thead>
      <tr style="background:rgba(74,222,128,0.2);">
        <th style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Symbol</th>
        <th style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Meaning</th>
        <th style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Units commonly mixed by UPSC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;"><strong>D</strong></td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Total <em>distance</em> covered</td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">km, m, miles</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;"><strong>S</strong></td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Uniform <em>speed</em> (scalar)</td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">km/h, m/s</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;"><strong>T</strong></td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Elapsed <em>time</em></td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">h, min, s</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;"><strong>R</strong></td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Work <em>rate</em> (efficiency)</td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">unit/T, e.g., pages/day, parts/hour</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;"><strong>W</strong></td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Total <em>work</em> done</td>
        <td style="padding:8px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">units of output, fractions of a complete task (1)</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color:#4ade80;">2. Core Formulas and Proportionality Dynamics</h4>

  <h5 style="color:#4ade80;">2.1 Distance–Speed–Time Relation</h5>
  <p style="color:#e2e8f0;">The classic linear relation is written as:</p>
  <p style="color:#e2e8f0; text-align:center;">\$\$S = \\frac{D}{T}\\quad\\Longleftrightarrow\\quad D = S \\times T\\quad\\Longleftrightarrow\\quad T = \\frac{D}{S}\$\$</p>
  <p style="color:#e2e8f0;">A frequent trap in the 2022‑2024 [[CDS]] papers is to forget unit conversion when the distance is given in [[kilometers]] and time in [[minutes]]. Always convert to a common base before applying the formula.</p>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack:</strong> Remember the phrase “<em>Speed = Distance ÷ Time, Distance = Speed × Time, Time = Distance ÷ Speed</em>” as the “<strong>SDT</strong> Cycle”. The letters S‑D‑T form a clockwise arrow – just rotate the arrow to get the other two formulas instantly.
  </div>

  <h5 style="color:#4ade80;">2.2 Relative Speed (Same vs. Opposite Direction)</h5>
  <p style="color:#e2e8f0;">When two bodies move along the same line, their relative speed decides how fast the separation closes (same direction) or widens (opposite direction). Let the faster speed be <strong>S₁</strong> and the slower <strong>S₂</strong>.</p>

  <table style="width:100%; border-collapse:collapse; margin:16px 0; font-size:14px;">
    <thead>
      <tr style="background:rgba(74,222,128,0.2); color:#e2e8f0;">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Scenario</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Same Direction (Chase/Overtake)</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Opposite Direction (Approach)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0; font-weight:bold;">Formula (<em>S</em><sub>rel</sub>)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">\$\$S_{\\text{rel}} = S_{1} - S_{2}\$\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">\$\$S_{\\text{rel}} = S_{1} + S_{2}\$\$</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0; font-weight:bold;">Typical NDA/CDS Framing</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Thief‑police chase, faster train overtaking slower train, circular track in same direction.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color:#e2e8f0;">Two trains starting from opposite stations, sound‑echo problems, cyclists moving towards each other.</td>
      </tr>
    </tbody>
  </table>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> In “meet‑and‑continue” train problems, compute the meeting time first (using total distance ÷ sum of speeds). Then use the remaining distances to relate the individual speeds; the ratio often simplifies to a square‑root expression as seen in 2024‑2025 papers.
  </div>

  <h5 style="color:#4ade80;">2.3 Work–Rate–Time Relation</h5>
  <p style="color:#e2
`;

window.EXPANDED_NOTES_DATA["straight-lines"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Straight Lines: Comprehensive Guide for NDA/CDS/AFCAT</h3>

  <p style="color: #e2e8f0; margin-bottom: 20px;">
    Mastering [[Straight Lines]] is fundamental for the [[NDA]], [[CDS]], and [[AFCAT]] exams. This chapter forms the bedrock of [[Coordinate Geometry]], frequently appearing in both 2D and 3D contexts. UPSC consistently tests conceptual clarity, problem-solving speed, and the ability to apply formulas in diverse scenarios. Expect 3-5 questions directly from this topic in recent papers (NDA 2023-2024).
  </p>

  <h4 style="color: #4ade80; margin-top: 24px; margin-bottom: 12px;">1. Fundamental Concepts in 2D Coordinate Geometry</h4>
  <p style="color: #e2e8f0;">
    UPSC frequently tests fundamental 2D concepts not just in isolation, but by combining them with geometric properties of triangles and quadrilaterals. In the 2024-2026 papers, tracking coordinates to classify shapes remains a standard pattern.
  </p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>[[Cartesian Plane]]:</strong> Defined by orthogonal axes <em>X</em> and <em>Y</em>. Any point is denoted as \$P(x,\\,y)\$ where \$x\$ and \$y\$ are its <strong>[[coordinates]]</strong>. The point where axes intersect is the [[Origin]] \$(0,0)\$.</li>
    <li style="margin-bottom: 8px;"><strong>[[Distance Formula]] between two points \$A(x_1,\\,y_1)\$ and \$B(x_2,\\,y_2)\$:</strong>
      <p style="color: #e2e8f0; margin-top: 8px;">\$\$d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\$\$</p>
      <ul style="color: #e2e8f0; list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>Analytical Trend (NDA 2022, 2023):</strong> UPSC heavily tests this formula's application to verify if three vertices form an [[equilateral triangle]], [[isosceles triangle]], or [[right-angled triangle]]. Remember, for a right-angled triangle, the square of the longest side must equal the sum of the squares of the other two sides (Pythagoras theorem).</li>
        <li style="margin-bottom: 4px;">All variables are [[real numbers]]; the formula holds for any pair of points in the plane.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Mid-point Formula]] of \$AB\$:</strong>
      <p style="color: #e2e8f0; margin-top: 8px;">\$\$M\\Bigl(\\frac{x_1+x_2}{2},\\;\\frac{y_1+y_2}{2}\\Bigr)\$\$</p>
      <ul style="color: #e2e8f0; list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">Used extensively in constructing [[perpendicular bisectors]] and finding the fourth vertex of a [[parallelogram]] (since diagonals bisect each other).</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Section Formula]] (Internal Division):</strong> For a point \$P(x,y)\$ dividing the line segment joining \$A(x_1,y_1)\$ and \$B(x_2,y_2)\$ in the ratio \$m:n\$ internally:
      <p style="color: #e2e8f0; margin-top: 8px;">\$\$P\\Bigl(\\frac{mx_2+nx_1}{m+n},\\;\\frac{my_2+ny_1}{m+n}\\Bigr)\$\$</p>
      <ul style="color: #e2e8f0; list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>External Division:</strong> If \$P\$ divides \$AB\$ externally in ratio \$m:n\$, simply replace \$n\$ with \$-n\$ in the formula: \$P\\Bigl(\\frac{mx_2-nx_1}{m-n},\\;\\frac{my_2-ny_1}{m-n}\\Bigr)\$.</li>
        <li style="margin-bottom: 4px;"><strong>Special Case: Centroid of a Triangle (NDA 2021):</strong> The [[centroid]] is the point of intersection of the medians and divides each median in the ratio \$2:1\$. For a triangle with vertices \$A(x_1,y_1)\$, \$B(x_2,y_2)\$, \$C(x_3,y_3)\$, the centroid \$G\$ is:
          \$\$G\\Bigl(\\frac{x_1+x_2+x_3}{3},\\;\\frac{y_1+y_2+y_3}{3}\\Bigr)\$\$
        </li>
      </ul>
    </li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> UPSC frequently frames questions where you need to find the coordinates of a point that divides a line segment in a specific ratio, often combined with finding the distance or area of a related figure. Remember the section formula thoroughly! For instance, finding the [[incentre]], [[orthocentre]], or [[circumcentre]] often involves applying these basic coordinate geometry concepts in sequence.
  </div>

  <h4 style="color: #4ade80; margin-top: 24px; margin-bottom: 12px;">2. Slope of a Line (Gradient)</h4>
  <p style="color: #e2e8f0;">
    The [[slope]] (\$m\$) of a line is a measure of its steepness. It represents the tangent of the angle the line makes with the positive direction of the X-axis.
  </p>
  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">2.1 Derivation of the Slope Formula</h5>
  <p style="color: #e2e8f0;">Given two distinct points \$P_1(x_1,\\,y_1)\$ and \$P_2(x_2,\\,y_2)\$, the slope \$m\$ is defined as the ratio of vertical change (\$\\Delta y\$) to horizontal change (\$\\Delta x\$):</p>
  <p style="color: #e2e8f0;">\$\$m = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2-y_1}{x_2-x_1}\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">Condition: \$x_2\\neq x_1\$ (otherwise the line is vertical and slope is undefined, i.e., \$m = \\infty\$). A vertical line has an equation of the form \$x=k\$.</li>
    <li style="margin-bottom: 8px;">If \$\\theta\$ is the angle the line makes with the positive X-axis, then \$m = \\tan\\theta\$. This is crucial for understanding the orientation of the line.</li>
    <li style="margin-bottom: 8px;">A horizontal line has \$m=0\$ (equation \$y=k\$).</li>
  </ul>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">2.2 Conditions for Parallel and Perpendicular Lines (2D)</h5>
  <p style="color: #e2e8f0;">UPSC frequently tests [[parallel lines]] and [[perpendicular lines]] conditions. Refer to this quick-scan table to instantly make the distinction:</p>

  <table style="width:100%; border-collapse:collapse; margin:20px 0; font-family: sans-serif; font-size: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <thead>
      <tr style="background-color: rgba(74,222,128,0.1); color: #4ade80; text-align: left;">
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Property</th>
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Parallel Lines</th>
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Perpendicular Lines</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: rgba(255,255,255,0.02); color: #e2e8f0;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Slope Condition (2D)</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[[Slope]] \$m_1 = m_2\$</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product of slopes \$m_1 \\cdot m_2 = -1\$ (provided neither line is vertical/horizontal)</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.05); color: #e2e8f0;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>General Equation Coefficients</strong><br>(\$L_1: A_1x+B_1y+C_1=0\$, \$L_2: A_2x+B_2y+C_2=0\$)</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">\$\\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2}\$ (for distinct parallel lines). If \$\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}\$, lines are coincident.</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">[[Dot product]] of normal vectors \$A_1A_2 + B_1B_2 = 0\$</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.02); color: #e2e8f0;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Vector Direction (3D)</strong><br>(\$\\mathbf{d_1}, \\mathbf{d_2}\$ are direction vectors)</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">\$\\mathbf{d_1} = k\\mathbf{d_2}\$ (vectors are proportional) or \$\\mathbf{d_1} \\times \\mathbf{d_2} = \\mathbf{0}\$</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">\$\\mathbf{d_1} \\cdot \\mathbf{d_2} = 0\$ (dot product is zero)</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #4ade80; margin-top: 24px; margin-bottom: 12px;">3. Various Algebraic Forms of a Straight Line in 2D</h4>
  <p style="color: #e2e8f0;">Each form of a straight line equation highlights different properties and is useful in specific scenarios. Knowing when to use which form can save significant time in the exam.</p>

  <table style="width:100%;border-collapse:collapse;margin:12px 0; font-size:0.9rem;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1); color: #4ade80;">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Form</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Equation</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Parameters & Typical Use-Case</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: rgba(255,255,255,0.02); color: #e2e8f0;">
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);"><strong>[[Slope-Intercept Form]]</strong></td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">\$y = mx + c\$</td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">[[Slope]] \$m\$, [[Y-intercept]] \$c\$. Quickly read off slope and y-intercept. Useful for comparing slopes.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.05); color: #e2e8f0;">
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);"><strong>[[Point-Slope Form]]</strong></td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">\$y - y_1 = m(x - x_1)\$</td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">Point \$(x_1,y_1)\$ on the line, slope \$m\$. When a point and slope are known.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.02); color: #e2e8f0;">
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);"><strong>[[Two-Point Form]]</strong></td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">\$y - y_1 = \\frac{y_2-y_1}{x_2-x_1}(x - x_1)\$</td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">Two points \$P_1(x_1,y_1)\$ and \$P_2(x_2,y_2)\$ on the line. Directly finds the equation when two points are given.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.05); color: #e2e8f0;">
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);"><strong>[[Intercept Form]]</strong></td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">\$\\displaystyle\\frac{x}{a} + \\frac{y}{b} = 1\$</td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">[[X-intercept]] \$a\$, [[Y-intercept]] \$b\$. Directly gives intercepts. Useful for finding the area of a triangle formed with axes.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.02); color: #e2e8f0;">
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);"><strong>[[Normal Form]] (Perpendicular Form)</strong></td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">\$x\\cos\\alpha + y\\sin\\alpha = p\$</td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">Perpendicular distance \$p\$ from origin to line, \$\\alpha\$ is angle normal makes with X-axis. Useful for shortest distance calculations from origin.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.05); color: #e2e8f0;">
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);"><strong>[[General Form]]</strong></td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">\$Ax + By + C = 0\$</td>
        <td style="padding:6px; border:1px solid rgba(255,255,255,0.1);">Coefficients \$A, B, C\$. Convenient for testing collinearity, parallelism, and perpendicularity via coefficients. Can represent any straight line.</td>
      </tr>
    </tbody>
  </table>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack: "PINTS" for Line Forms!</strong><br>
    Remember the common 2D line forms with the acronym <strong>PINTS</strong>:<br>
    <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px; margin-top: 8px;">
      <li><strong>P</strong>oint-Slope: \$y - y_1 = m(x - x_1)\$</li>
      <li><strong>I</strong>ntercept: \$\\frac{x}{a} + \\frac{y}{b} = 1\$</li>
      <li><strong>N</strong>ormal: \$x\\cos\\alpha + y\\sin\\alpha = p\$</li>
      <li><strong>T</strong>wo-Point: \$y - y_1 = \\frac{y_2-y_1}{x_2-x_1}(x - x_1)\$</li>
      <li><strong>S</strong>lope-Intercept: \$y = mx + c\$</li>
    </ul>
    (General Form \$Ax+By+C=0\$ is the overarching form, not typically part of this mnemonic for specific parameter forms)
  </div>

  <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong>💡 Fun Fact time! (NDA 2023, 2024)</strong><br>
    In recent NDA exams, UPSC has frequently framed questions around the <strong>[[Intercept Form]]</strong> of a line: \$\\frac{x}{a} + \\frac{y}{b} = 1\$. Did you know that the area of the triangle formed by this line with the coordinate axes is simply \$\\frac{1}{2}|ab|\$? This single formula bypasses complex coordinate geometry steps and regularly secures easy marks!
    <br><br>
    <strong>Example:</strong> A line has intercepts \$x=3\$ and \$y=4\$. Find the area of the triangle formed by this line with the axes.
    <br>
    Here, \$a=3, b=4\$. Area = \$\\frac{1}{2}|3 \\times 4| = \\frac{1}{2} \\times 12 = 6\$ square units.
  </div>

  <h4 style="color: #4ade80; margin-top: 24px; margin-bottom: 12px;">4. Collinearity, Concurrency & Angle Between Lines (2D)</h4>
  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">4.1 Collinearity Condition</h5>
  <p style="color: #e2e8f0;">Three points \$A(x_1,\\,y_1)\$, \$B(x_2,\\,y_2)\$, \$C(x_3,\\,y_3)\$ are [[collinear]] (lie on the same straight line) if and only if:</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Using Slopes:</strong> Slope of \$AB\$ = Slope of \$BC\$.
      \$\$\\frac{y_2-y_1}{x_2-x_1} = \\frac{y_3-y_2}{x_3-x_2}\$\$
      This method is intuitive but can be prone to calculation errors with fractions.
    </li>
    <li style="margin-bottom: 8px;"><strong>Using [[Determinants]] (Area of Triangle is Zero):</strong>
      The area of the triangle formed by three collinear points is zero.
      \$\$ \\frac{1}{2} \\begin{vmatrix}
      x_1 & y_1 & 1\\\\
      x_2 & y_2 & 1\\\\
      x_3 & y_3 & 1
      \\end{vmatrix}= 0 \\implies x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2) = 0 \$\$
      <ul style="color: #e2e8f0; list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>CDS/NDA Trend (2023, 2024):</strong> UPSC frequently provides three points with an unknown variable \$k\$ (e.g., \$(k, 2-2k)\$, \$(1-k, 2k)\$, \$(-k, 4-k)\$) and asks you to find the value of \$k\$ for which they are collinear. This determinant method is often faster and less error-prone than comparing slopes, especially with complex expressions.</li>
      </ul>
    </li>
  </ul>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">4.2 Concurrency of Lines</h5>
  <p style="color: #e2e8f0;">Three lines \$L_1: A_1x+B_1y+C_1=0\$, \$L_2: A_2x+B_2y+C_2=0\$, and \$L_3: A_3x+B_3y+C_3=0\$ are [[concurrent]] (intersect at a single point) if the determinant of their coefficients is zero:</p>
  <p style="color: #e2e8f0;">\$\$\\begin{vmatrix}
  A_1 & B_1 & C_1\\\\
  A_2 & B_2 & C_2\\\\
  A_3 & B_3 & C_3
  \\end{vmatrix}= 0\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">This is a powerful shortcut for checking if three lines meet at a single point without having to solve for the intersection of two lines and then checking if the third line passes through it.</li>
  </ul>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">4.3 Angle Between Two Lines (2D)</h5>
  <p style="color: #e2e8f0;">For lines \$L_1: y= m_1x+c_1\$ and \$L_2: y= m_2x+c_2\$, the [[acute angle]] \$\\theta\$ between them satisfies:</p>
  <p style="color: #e2e8f0;">\$\$\\tan\\theta = \\bigg|\\frac{m_2-m_1}{1+m_1m_2}\\bigg|\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">If \$1+m_1m_2=0\$, then \$m_1m_2=-1\$, meaning the lines are perpendicular, and \$\\tan\\theta\$ is undefined (i.e., \$\\theta = 90^\\circ\$).</li>
    <li style="margin-bottom: 8px;">If \$m_1=m_2\$, then \$\\tan\\theta=0\$, meaning the lines are parallel, and \$\\theta = 0^\\circ\$.</li>
    <li style="margin-bottom: 8px;">The formula gives the acute angle. If you need the [[obtuse angle]], it would be \$180^\\circ - \\theta\$.</li>
  </ul>

  <h4 style="color: #4ade80; margin-top: 24px; margin-bottom: 12px;">5. Distances in 2D Coordinate Geometry</h4>
  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">5.1 Distance from a Point to a Line</h5>
  <p style="color: #e2e8f0;">For line \$Ax+By+C= 0\$ and point \$P(x_0,\\,y_0)\$, the perpendicular distance \$d\$ is:</p>
  <p style="color: #e2e8f0;">\$\$d = \\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">Constraints: \$A\$ and \$B\$ cannot both be zero (otherwise, it's not a line).</li>
    <li style="margin-bottom: 8px;"><strong>Distance from Origin:</strong> If \$(x_0, y_0) = (0,0)\$, then \$d = \\frac{|C|}{\\sqrt{A^2+B^2}}\$. This is directly related to the 'p' in the Normal Form.</li>
  </ul>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">5.2 Distance Between Two Parallel Lines</h5>
  <p style="color: #e2e8f0;">For two parallel lines \$L_1: Ax+By+C_1=0\$ and \$L_2: Ax+By+C_2=0\$, the perpendicular distance \$d\$ between them is:</p>
  <p style="color: #e2e8f0;">\$\$d = \\frac{|C_1-C_2|}{\\sqrt{A^2+B^2}}\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Important:</strong> Ensure the coefficients of \$x\$ and \$y\$ (\$A\$ and \$B\$) are identical for both equations before applying this formula. If they are not (e.g., \$2x+4y+6=0\$ and \$x+2y+5=0\$), divide the first equation by 2 to make them consistent (\$x+2y+3=0\$ and \$x+2y+5=0\$). Then \$A=1, B=2, C_1=3, C_2=5\$.</li>
    <li style="margin-bottom: 8px;">This formula is a direct application of the point-to-line distance formula. You can take any point on \$L_1\$ (e.g., if \$A \\neq 0\$, take \$y=0 \\implies x = -C_1/A\$, so point is \$(-C_1/A, 0)\$) and find its distance to \$L_2\$.</li>
  </ul>

  <h4 style="color: #4ade80; margin-top: 24px; margin-bottom: 12px;">6. Family of Lines (NDA 2023)</h4>
  <p style="color: #e2e8f0;">The equation of a line passing through the intersection of two given lines \$L_1: A_1x+B_1y+C_1=0\$ and \$L_2: A_2x+B_2y+C_2=0\$ is given by:</p>
  <p style="color: #e2e8f0;">\$\$L_1 + \\lambda L_2 = 0\$\$</p>
  <p style="color: #e2e8f0;">Or, \$(A_1x+B_1y+C_1) + \\lambda(A_2x+B_2y+C_2) = 0\$, where \$\\lambda\$ is a [[parameter]] (any real number).</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">This form represents a "[[family of lines]]" because for each value of \$\\lambda\$, you get a different line, but all these lines pass through the common intersection point of \$L_1\$ and \$L_2\$.</li>
    <li style="margin-bottom: 8px;"><strong>Application:</strong> If you need to find the equation of a line that passes through the intersection of two lines AND satisfies another condition (e.g., passes through another point, is parallel/perpendicular to another line), this method is extremely efficient. You substitute the additional condition into the family of lines equation to find \$\\lambda\$.</li>
  </ul>

  <h4 style="color: #4ade80; margin-top: 24px; margin-bottom: 12px;">7. 3D Straight Lines – Vector and Cartesian Treatment</h4>
  <p style="color: #e2e8f0;">In 3D space, a line is uniquely determined by a point \$P_0(x_0,\\,y_0,\\,z_0)\$ it passes through and a [[direction vector]] \$\\mathbf{d}= \\langle a,\\,b,\\,c\\rangle\$ (whose components are the [[Direction Ratios]]). Understanding the exact distinction between parameters is vital for 3D coordinate geometry.</p>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">7.1 Direction Ratios (DRs) and Direction Cosines (DCs)</h5>
  <p style="color: #e2e8f0;">Below is the comparative analysis of [[Direction Ratios]] and [[Direction Cosines]]—a concept UPSC loves to test for conceptual clarity (NDA 2023, 2024):</p>

  <table style="width:100%; border-collapse:collapse; margin:20px 0; font-family: sans-serif; font-size: 14px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <thead>
      <tr style="background-color: rgba(74,222,128,0.1); color: #4ade80; text-align: left;">
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature</th>
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Direction Ratios (DRs)</th>
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Direction Cosines (DCs)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: rgba(255,255,255,0.02); color: #e2e8f0;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Definition</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Any set of three numbers \$(a, b, c)\$ proportional to the cosines of the angles the line makes with the axes.</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Cosines of the angles (\$\\alpha, \\beta, \\gamma\$) made by the line with the positive X, Y, Z axes, denoted as \$(l, m, n)\$.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.05); color: #e2e8f0;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Uniqueness</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Infinite sets exist (any proportional values \$ka, kb, kc\$).</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unique set (\$l, m, n\$) representing the actual cosines of the angles.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.02); color: #e2e8f0;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Normalization Condition</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">\$a^2 + b^2 + c^2\$ can be any positive value. No magnitude restriction.</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Strictly satisfies \$l^2 + m^2 + n^2 = 1\$. This is a key property.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.05); color: #e2e8f0;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Relation</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">If \$(a,b,c)\$ are DRs, then \$l = \\frac{a}{\\sqrt{a^2+b^2+c^2}}\$, \$m = \\frac{b}{\\sqrt{a^2+b^2+c^2}}\$, \$n = \\frac{c}{\\sqrt{a^2+b^2+c^2}}\$.</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">If \$(l,m,n)\$ are DCs, then \$(kl, km, kn)\$ are DRs for any \$k \\neq 0\$.</td>
      </tr>
      <tr style="background-color: rgba(255,255,255,0.02); color: #e2e8f0;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>UPSC Exam Focus (2024-2026)</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Given directly in symmetric line equations as denominators. Used in [[vector equations]] as the direction vector components.</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Used for angle calculations; often tested via identity \$\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2\$. Crucial for understanding spatial orientation.</td>
      </tr>
    </tbody>
  </table>

  <div class="memory-hack-box" style="background-color: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 12px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack! (NDA/CDS 2023)</strong><br>
    UPSC loves to toggle between the cosine and sine formats of 3D direction angles. Use this quick identity relation hack:<br>
    <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px; margin-top: 8px;">
      <li><strong>Cosines rule the "1":</strong> \$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1\$</li>
      <li><strong>Sines rule the "2":</strong> \$\\sin^2\\alpha + \\sin^2\\beta + \\sin^2\\gamma = 2\$</li>
    </ul>
    If they give you two angles, immediately find the third using the <strong>"Cos-1, Sin-2"</strong> rule! This saves precious time from deriving one from the other.
  </div>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">7.2 Equations of a Line in 3D</h5>
  <p style="color: #e2e8f0;">A line passing through a point \$P_0(x_0,\\,y_0,\\,z_0)\$ with position vector \$\\mathbf{r_0} = x_0\\hat{i} + y_0\\hat{j} + z_0\\hat{k}\$ and parallel to a direction vector \$\\mathbf{d}= a\\hat{i} + b\\hat{j} + c\\hat{k}\$ can be represented in various forms:</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>[[Vector Equation]] of a Line:</strong>
      <p style="color: #e2e8f0; margin-top: 8px;">\$\$\\mathbf{r} = \\mathbf{r_0} + \\lambda\\mathbf{d}\$\$</p>
      <ul style="color: #e2e8f0; list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">\$\\mathbf{r}= x\\hat{i} + y\\hat{j} + z\\hat{k}\$ is the position vector of a generic point on the line.</li>
        <li style="margin-bottom: 4px;">\$\\lambda\\in\\mathbb{R}\$ is the scalar [[parameter]]. This form is elegant for theoretical problems.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Parametric Form]] (Cartesian):</strong>
      <p style="color: #e2e8f0; margin-top: 8px;">\$\$\\begin{cases}
      x = x_0 + a\\lambda\\\\[4pt]
      y = y_0 + b\\lambda\\\\[4pt]
      z = z_0 + c\\lambda
      \\end{cases}\$\$</p>
      <ul style="color: #e2e8f0; list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">This form is derived directly from the vector equation by equating components. Useful for finding any point on the line by varying \$\\lambda\$.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Symmetric Form]] (Cartesian):</strong>
      <p style="color: #e2e8f0; margin-top: 8px;">\$\$\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}\$\$</p>
      <ul style="color: #e2e8f0; list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">This is the most common form in Cartesian 3D problems. The denominators \$(a,b,c)\$ are the [[Direction Ratios]] and the numerators give the point \$(x_0, y_0, z_0)\$ through which the line passes.</li>
        <li style="margin-bottom: 4px;"><strong>UPSC Catch (NDA 2022):</strong> If any component of [[direction ratios]] is zero (e.g., \$b=0\$), the symmetric form is written as \$\\frac{x-x_0}{a} = \\frac{z-z_0}{c},\\, y = y_0\$. UPSC occasionally tricks students by inserting zero in the denominator to check if they spot this representation issue. For example, a line through \$(1,2,3)\$ parallel to \$x\$-axis has DRs \$(1,0,0)\$, so its equation is \$\\frac{x-1}{1} = \\frac{y-2}{0} = \\frac{z-3}{0}\$, which means \$y-2=0 \\implies y=2\$ and \$z-3=0 \\implies z=3\$. So, \$y=2, z=3\$ with \$x\$ being variable.</li>
      </ul>
    </li>
  </ul>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">7.3 Angle Between Two Lines in 3D</h5>
  <p style="color: #e2e8f0;">Let \$L_1\$ have direction ratios \$(a_1, b_1, c_1)\$ and \$L_2\$ have direction ratios \$(a_2, b_2, c_2)\$. The angle \$\\theta\$ between them is given by:</p>
  <p style="color: #e2e8f0;">\$\$\\cos\\theta = \\bigg|\\frac{a_1a_2+b_1b_2+c_1c_2}{\\sqrt{a_1^2+b_1^2+c_1^2}\\sqrt{a_2^2+b_2^2+c_2^2}}\\bigg|\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">This is essentially the dot product formula for the angle between two vectors. If direction cosines \$(l_1, m_1, n_1)\$ and \$(l_2, m_2, n_2)\$ are given, then \$\\cos\\theta = |l_1l_2+m_1m_2+n_1n_2|\$.</li>
    <li style="margin-bottom: 8px;"><strong>Parallel Lines:</strong> \$\\theta = 0^\\circ \\implies \\cos\\theta = 1 \\implies \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}\$ (DRs are proportional).</li>
    <li style="margin-bottom: 8px;"><strong>Perpendicular Lines:</strong> \$\\theta = 90^\\circ \\implies \\cos\\theta = 0 \\implies a_1a_2+b_1b_2+c_1c_2 = 0\$.</li>
  </ul>

  <h4 style="color: #4ade80; margin-top: 24px; margin-bottom: 12px;">8. Shortest Distance Between Two Lines (3D)</h4>
  <p style="color: #e2e8f0;">This is a high-yield topic for NDA/CDS, especially for [[skew lines]].</p>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">8.1 Shortest Distance Between Two Parallel Lines in 3D</h5>
  <p style="color: #e2e8f0;">Let the two parallel lines be \$\\mathbf{r} = \\mathbf{a_1} + \\lambda\\mathbf{b}\$ and \$\\mathbf{r} = \\mathbf{a_2} + \\mu\\mathbf{b}\$. Note that the direction vector \$\\mathbf{b}\$ is the same for both lines.</p>
  <p style="color: #e2e8f0;">\$\$d = \\bigg|\\frac{(\\mathbf{a_2}-\\mathbf{a_1})\\times\\mathbf{b}}{|\\mathbf{b}|}\\bigg|\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">Here, \$\\mathbf{a_1}\$ and \$\\mathbf{a_2}\$ are position vectors of points on the respective lines.</li>
    <li style="margin-bottom: 8px;">This formula essentially finds the magnitude of the projection of \$(\\mathbf{a_2}-\\mathbf{a_1})\$ onto a vector perpendicular to both \$(\\mathbf{a_2}-\\mathbf{a_1})\$ and \$\\mathbf{b}\$ (which is \$(\\mathbf{a_2}-\\mathbf{a_1})\\times\\mathbf{b}\$).</li>
  </ul>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">8.2 Shortest Distance Between Two Skew Lines (NDA 2023, 2024)</h5>
  <p style="color: #e2e8f0;">[[Skew lines]] are lines in 3D space that are neither parallel nor intersecting. The shortest distance between them is the length of the common perpendicular segment. Let the lines be:</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">\$L_1: \\mathbf{r} = \\mathbf{a_1} + \\lambda\\mathbf{b_1}\$</li>
    <li style="margin-bottom: 8px;">\$L_2: \\mathbf{r} = \\mathbf{a_2} + \\mu\\mathbf{b_2}\$</li>
  </ul>
  <p style="color: #e2e8f0;">The shortest distance \$d\$ is given by:</p>
  <p style="color: #e2e8f0;">\$\$d = \\bigg|\\frac{(\\mathbf{a_2}-\\mathbf{a_1})\\cdot(\\mathbf{b_1}\\times\\mathbf{b_2})}{|\\mathbf{b_1}\\times\\mathbf{b_2}|}\\bigg|\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">The term \$(\\mathbf{a_2}-\\mathbf{a_1})\\cdot(\\mathbf{b_1}\\times\\mathbf{b_2})\$ is the scalar triple product, representing the volume of the parallelepiped formed by these three vectors.</li>
    <li style="margin-bottom: 8px;">\$|\\mathbf{b_1}\\times\\mathbf{b_2}|\$ is the magnitude of the vector perpendicular to both direction vectors, representing the area of the base of the parallelepiped.</li>
    <li style="margin-bottom: 8px;">This formula is frequently tested. Make sure you can correctly identify \$\\mathbf{a_1}, \\mathbf{a_2}, \\mathbf{b_1}, \\mathbf{b_2}\$ from the given line equations.</li>
    <li style="margin-bottom: 8px;"><strong>Cartesian Form for Skew Lines:</strong> If lines are given as \$\\frac{x-x_1}{l_1} = \\frac{y-y_1}{m_1} = \\frac{z-z_1}{n_1}\$ and \$\\frac{x-x_2}{l_2} = \\frac{y-y_2}{m_2} = \\frac{z-z_2}{n_2}\$, then the shortest distance is:
      \$\$d = \\frac{\\begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\\\ l_1 & m_1 & n_1 \\\\ l_2 & m_2 & n_2 \\end{vmatrix}}{\\sqrt{(m_1n_2-m_2n_1)^2 + (n_1l_2-n_2l_1)^2 + (l_1m_2-l_2m_1)^2}}\$\$
      This is the same formula as the vector form, just expanded using components. The numerator is the scalar triple product, and the denominator is the magnitude of the cross product of direction vectors.
    </li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS 2024):</strong> For shortest distance problems, UPSC often provides lines in non-standard forms. Always convert them to the standard vector form (\$\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b}\$) or symmetric Cartesian form before applying the formula. Pay close attention to the signs of the coordinates in the numerator of the Cartesian symmetric form (e.g., \$x+1\$ implies \$x_0=-1\$).
  </div>

  <h5 style="color: #fbbf24; margin-top: 16px; margin-bottom: 8px;">8.3 Condition for Two Lines to be Coplanar (NDA 2023)</h5>
  <p style="color: #e2e8f0;">Two lines are [[coplanar]] if they are either parallel or intersecting. If they are not parallel, they must intersect for them to be coplanar. This means the shortest distance between them is zero. Using the formula for skew lines:</p>
  <p style="color: #e2e8f0;">\$\$(\\mathbf{a_2}-\\mathbf{a_1})\\cdot(\\mathbf{b_1}\\times\\mathbf{b_2}) = 0\$\$</p>
  <p style="color: #e2e8f0;">In Cartesian form, this means the determinant in the numerator of the shortest distance formula must be zero:</p>
  <p style="color: #e2e8f0;">\$\$\\begin{vmatrix}
  x_2-x_1 & y_2-y_1 & z_2-z_1 \\\\
  l_1 & m_1 & n_1 \\\\
  l_2 & m_2 & n_2
  \\end{vmatrix}= 0\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;">This condition is frequently asked to determine if two lines lie on the same plane.</li>
  </ul>

</div>
`;

window.EXPANDED_NOTES_DATA["central-tendency"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Measures of Central Tendency & Probability Theory & Bayes Theorem</h3>

  <p style="color: #e2e8f0;">
    In the realm of [[Statistics]], a primary objective is to condense large datasets into meaningful summaries. [[Measures of Central Tendency]] are statistical values that represent the "center" or "typical" value of a dataset. They provide a single value that attempts to describe a set of data by identifying the central position within that set.
    <br><br>
    <em style="color: #fbbf24;">CDS & NDA Trend Shift:</em> In the 2024-2026 cycles, UPSC has shifted from simple computational questions to conceptual, statement-based questions testing the mathematical properties and constraints of these measures.
  </p>

  <h4 style="color: #4ade80; margin-top: 25px;">1. Measures of Central Tendency: Mean, Median, Mode</h4>

  <p style="color: #e2e8f0;">
    These three measures are the most fundamental in descriptive statistics, each offering a different perspective on the "center" of a dataset. Understanding their individual strengths, weaknesses, and interrelationships is crucial for NDA/CDS exams.
  </p>

  <h5 style="color: #4ade80; margin-top: 15px;">1.1 The Arithmetic Mean (AM)</h5>
  <p style="color: #e2e8f0;">
    The <strong>Arithmetic Mean</strong>, often simply called the "mean" or "average," is the most widely used measure of central tendency. It is calculated by summing all the observations in a dataset and dividing by the total number of observations. The arithmetic mean is sensitive to every value in the dataset and is therefore heavily influenced by extreme values or [[outliers]].
    <br><br>
    <em>Exam Insight: UPSC frequently tests this via combined mean formulas and scaling/shifting properties.</em>
  </p>

  <h6 style="color: #fbbf24; margin-top: 10px;">1.1.1 Calculation for Ungrouped Data</h6>
  <p style="color: #e2e8f0;">
    For a set of \$N\$ observations, \$X_1, X_2, \\dots, X_N\$, the arithmetic mean is given by:
    \$\$ \\bar{X} = \\frac{X_1 + X_2 + \\dots + X_N}{N} = \\frac{\\sum_{i=1}^{N} X_i}{N} \$\$
    Where:
    <ul style="color: #e2e8f0;">
      <li>\$ \\bar{X} \$ (read as "X-bar") is the symbol for the sample arithmetic mean.</li>
      <li>\$ \\sum \$ (sigma) denotes the sum of the observations.</li>
      <li>\$ X_i \$ represents the \$i^{th}\$ observation in the dataset.</li>
      <li>\$ N \$ is the total number of observations.</li>
    </ul>
  </p>

  <h6 style="color: #fbbf24; margin-top: 10px;">1.1.2 Calculation for Grouped Data</h6>
  <p style="color: #e2e8f0;">
    When data is presented in a [[frequency distribution]] (grouped data), the calculation of the mean involves using the frequencies of each class.
  </p>
  <h6 style="color: #fbbf24; margin-top: 10px;">1.1.2.1 Direct Method</h6>
  <p style="color: #e2e8f0;">
    If we have \$k\$ classes with class marks \$X_1, X_2, \\dots, X_k\$ and corresponding frequencies \$f_1, f_2, \\dots, f_k\$, the mean is:
    \$\$ \\bar{X} = \\frac{f_1 X_1 + f_2 X_2 + \\dots + f_k X_k}{f_1 + f_2 + \\dots + f_k} = \\frac{\\sum_{i=1}^{k} f_i X_i}{\\sum_{i=1}^{k} f_i} \$\$
    Where:
    <ul style="color: #e2e8f0;">
      <li>\$ X_i \$ is the <strong>class mark</strong> (midpoint) of the \$i^{th}\$ class interval. It is calculated as \$ \\frac{\\text{Lower Limit} + \\text{Upper Limit}}{2} \$.</li>
      <li>\$ f_i \$ is the frequency of the \$i^{th}\$ class.</li>
      <li>\$ \\sum f_i \$ is the total number of observations, typically denoted as \$N\$.</li>
    </ul>
  </p>
  <h6 style="color: #fbbf24; margin-top: 10px;">1.1.2.2 Assumed Mean Method (Short-Cut Method)</h6>
  <p style="color: #e2e8f0;">
    This method simplifies calculations, especially when class marks are large. We choose an arbitrary value (the "[[assumed mean]]") from the class marks, usually near the center.
    \$\$ \\bar{X} = A + \\frac{\\sum f_i d_i}{\\sum f_i} \$\$
    Where:
    <ul style="color: #e2e8f0;">
      <li>\$ A \$ is the <strong>assumed mean</strong>.</li>
      <li>\$ d_i = X_i - A \$ is the deviation of the \$i^{th}\$ class mark from the assumed mean.</li>
    </ul>
  </p>
  <h6 style="color: #fbbf24; margin-top: 10px;">1.1.2.3 Step-Deviation Method</h6>
  <p style="color: #e2e8f0;">
    This is an extension of the assumed mean method, used when class intervals are of equal width. It further simplifies calculations by dividing deviations by the class width.
    \$\$ \\bar{X} = A + \\left( \\frac{\\sum f_i u_i}{\\sum f_i} \\right) \\times h \$\$
    Where:
    <ul style="color: #e2e8f0;">
      <li>\$ A \$ is the assumed mean.</li>
      <li>\$ u_i = \\frac{X_i - A}{h} \$ is the [[step-deviation]].</li>
      <li>\$ h \$ is the <strong>class width</strong> (or class size) of the class intervals.</li>
    </ul>
  </p>

  <div style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #45aaf2;">💡 Fun Fact time!</strong><br>
    In recent 2024-2026 papers, UPSC has targeted step-deviation conceptual questions. They ask whether changing the class width (\$h\$) affects the computed mean. Mathematically, \$h\$ acts as a scaling factor that gets neutralized in the final step, meaning the final mean remains invariant of the computational method chosen. Use this to bypass tedious calculations!
  </div>

  <h5 style="color: #4ade80; margin-top: 25px;">1.1.3 Properties of Arithmetic Mean (High-Yield for CDS/NDA)</h5>
  <ul style="color: #e2e8f0;">
    <li>The sum of the deviations of all observations from their arithmetic mean is always zero: \$ \\sum (X_i - \\bar{X}) = 0 \$. <em>UPSC loves to frame this in algebraic notations to confuse students.</em></li>
    <li><strong>Linear Transformation (Shifting & Scaling):</strong> If each observation in a series is multiplied by a constant \$a\$ and then increased by a constant \$b\$, the new mean (\$\\bar{X}_{\\text{new}}\$) is related to the old mean (\$\\bar{X}_{\\text{old}}\$) by:
      \$\$ \\bar{X}_{\\text{new}} = a\\bar{X}_{\\text{old}} + b \$\$
      <p style="color: #e2e8f0; margin-top: 8px;">
        <strong style="color: #fbbf24;">Example (NDA 2023):</strong> If the mean marks of 10 students in a test was 65. Later, it was discovered that due to a re-evaluation, each student's marks were increased by 5, and then their marks were doubled. The new mean marks would be \$2 \\times 65 + 5 = 130 + 5 = 135\$. This property is a huge time-saver!
      </p>
    </li>
    <li>The arithmetic mean is a rigidly defined measure, meaning there's only one possible value for a given dataset.</li>
    <li>It is based on all observations, making it a representative measure.</li>
    <li>It is highly affected by extreme values (outliers).</li>
    <li>The mean of a combined series: If two series have means \$ \\bar{X}_1, \\bar{X}_2 \$ and number of observations \$ N_1, N_2 \$ respectively, their [[combined mean]] is:
      \$\$ \\bar{X}_{12} = \\frac{N_1 \\bar{X}_1 + N_2 \\bar{X}_2}{N_1 + N_2} \$\$
      <p style="color: #e2e8f0; margin-top: 8px;">
        <strong style="color: #fbbf24;">Example (CDS 2022):</strong> A class of 40 boys has an average weight of 50 kg, and a class of 20 girls has an average weight of 45 kg. The combined average weight of all 60 students is \$ \\frac{40 \\times 50 + 20 \\times 45}{40 + 20} = \\frac{2000 + 900}{60} = \\frac{2900}{60} \\approx 48.33 \\text{ kg}\$.
      </p>
    </li>
  </ul>

  <div style="background: rgba(255,165,0,0.1); border-left: 3px solid #FFA500; padding: 12px 16px; margin-top: 15px; border-radius: 0 6px 6px 0; color: #e2e8f0;">
    <strong style="color: #FFA500;">Important Distinction:</strong> The arithmetic mean is suitable for data that is symmetrically distributed and does not contain significant outliers. For skewed distributions, the Median is often preferred.
  </div>

  <h5 style="color: #4ade80; margin-top: 25px;">1.1.4 Weighted Arithmetic Mean</h5>
  <p style="color: #e2e8f0;">
    When different observations have different levels of importance or influence, a <strong>weighted arithmetic mean</strong> is used. Each observation is assigned a weight, \$W_i\$.
    \$\$ \\bar{X}_w = \\frac{\\sum W_i X_i}{\\sum W_i} \$\$
    <p style="color: #e2e8f0; margin-top: 8px;">
      <strong style="color: #fbbf24;">Example:</strong> If a student scores 80 in a 3-credit course and 90 in a 4-credit course, their weighted average is \$ \\frac{(80 \\times 3) + (90 \\times 4)}{3+4} = \\frac{240 + 360}{7} = \\frac{600}{7} \\approx 85.71 \$.
    </p>
  </p>

  <h5 style="color: #4ade80; margin-top: 25px;">1.2 The Median</h5>
  <p style="color: #e2e8f0;">
    The <strong>Median</strong> is the middle value in a dataset when the values are arranged in ascending or descending order. It effectively divides the data into two equal halves.
    <br><br>
    <em>Exam Insight: Highly tested for its property of minimizing absolute deviations and its robustness to outliers.</em>
  </p>
  <h6 style="color: #fbbf24; margin-top: 10px;">1.2.1 Calculation for Ungrouped Data</h6>
  <ul style="color: #e2e8f0;">
    <li><strong>Step 1:</strong> Arrange the data in ascending or descending order.</li>
    <li><strong>Step 2:</strong>
      <ul>
        <li>If \$N\$ (number of observations) is odd, the Median is the value at the \$ \\left(\\frac{N+1}{2}\\right)^{th} \$ position.</li>
        <li>If \$N\$ is even, the Median is the average of the values at the \$ \\left(\\frac{N}{2}\\right)^{th} \$ and \$ \\left(\\frac{N}{2} + 1\\right)^{th} \$ positions.</li>
      </ul>
    </li>
  </ul>
  <p style="color: #e2e8f0; margin-top: 8px;">
    <strong style="color: #fbbf24;">Example:</strong> For data {10, 15, 20, 25, 30}, N=5 (odd). Median is at \$(5+1)/2 = 3^{rd}\$ position, which is 20.
    <br>
    For data {10, 15, 20, 25, 30, 35}, N=6 (even). Median is average of \$3^{rd}\$ (20) and \$4^{th}\$ (25) values: \$(20+25)/2 = 22.5\$.
  </p>
  <h6 style="color: #fbbf24; margin-top: 10px;">1.2.2 Calculation for Grouped Data</h6>
  <p style="color: #e2e8f0;">
    For grouped data, the median is calculated using the formula:
    \$\$ \\text{Median} = L + \\left( \\frac{\\frac{N}{2} - cf}{f} \\right) \\times h \$\$
    Where:
    <ul style="color: #e2e8f0;">
      <li>\$ L \$ is the lower limit of the median class (the class containing the \$N/2^{th}\$ observation).</li>
      <li>\$ N \$ is the total number of observations (\$ \\sum f_i \$).</li>
      <li>\$ cf \$ is the cumulative frequency of the class preceding the median class.</li>
      <li>\$ f \$ is the frequency of the median class.</li>
      <li>\$ h \$ is the class width of the median class.</li>
    </ul>
  </p>
  <h5 style="color: #4ade80; margin-top: 25px;">1.2.3 Properties of Median</h5>
  <ul style="color: #e2e8f0;">
    <li>It is not affected by extreme values (outliers), making it suitable for [[skewed distributions]].</li>
    <li>It can be calculated for data with open-ended class intervals.</li>
    <li>The sum of absolute deviations from the median is minimum, i.e., \$ \\sum |X_i - \\text{Median}| \$ is minimum. (NDA/CDS conceptual question favourite).</li>
    <li>It is a positional average, meaning its value depends on the position of items in the series, not their actual magnitudes.</li>
  </ul>

  <h5 style="color: #4ade80; margin-top: 25px;">1.3 The Mode</h5>
  <p style="color: #e2e8f0;">
    The <strong>Mode</strong> is the value that appears most frequently in a dataset. A dataset can have one mode (unimodal), two modes (bimodal), or more than two modes (multimodal). If all values appear with the same frequency, there is no mode.
  </p>
  <h6 style="color: #fbbf24; margin-top: 10px;">1.3.1 Calculation for Ungrouped Data</h6>
  <p style="color: #e2e8f0;">
    Simply identify the observation with the highest frequency.
    <br><br>
    <strong style="color: #fbbf24;">Example:</strong> For data {12, 15, 12, 18, 20, 12, 15}, the mode is 12 (appears 3 times).
    <br>
    For data {5, 7, 8, 7, 5, 9, 10}, the modes are 5 and 7 (bimodal).
  </p>
  <h6 style="color: #fbbf24; margin-top: 10px;">1.3.2 Calculation for Grouped Data</h6>
  <p style="color: #e2e8f0;">
    For grouped data, the mode is calculated using the formula:
    \$\$ \\text{Mode} = L + \\left( \\frac{f_m - f_1}{2f_m - f_1 - f_2} \\right) \\times h \$\$
    Where:
    <ul style="color: #e2e8f0;">
      <li>\$ L \$ is the lower limit of the modal class (the class with the highest frequency).</li>
      <li>\$ f_m \$ is the frequency of the modal class.</li>
      <li>\$ f_1 \$ is the frequency of the class preceding the modal class.</li>
      <li>\$ f_2 \$ is the frequency of the class succeeding the modal class.</li>
      <li>\$ h \$ is the class width of the modal class.</li>
    </ul>
  </p>
  <h5 style="color: #4ade80; margin-top: 25px;">1.3.3 Properties of Mode</h5>
  <ul style="color: #e2e8f0;">
    <li>It is the only measure of central tendency that can be used for [[nominal data]].</li>
    <li>It is not unique; a dataset can have multiple modes or no mode.</li>
    <li>Like the median, it is not affected by extreme values.</li>
  </ul>

  <h5 style="color: #4ade80; margin-top: 25px;">1.4 Empirical Relation between Mean, Median, Mode</h5>
  <p style="color: #e2e8f0;">
    For moderately [[skewed distributions]] (which are common in real-world data), there's an approximate relationship between the mean, median, and mode:
    \$\$ \\text{Mode} = 3 \\times \\text{Median} - 2 \\times \\text{Mean} \$\$
    <em style="color: #fbbf24;">Exam Insight: UPSC frequently rearranges this algebraically to test your speed under pressure. For example, they might ask for Median in terms of Mean and Mode.</em>
  </p>

  <div class="memory-hack-box" style="background-color: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack!</strong><br>
    To never confuse the coefficients in the Empirical Formula, use the <strong>"Word-Length Countdown"</strong>:
    <br><br>
    \$\$\\text{Mode} = 3 \\times \\text{Median} - 2 \\times \\text{Mean}\$\$
    <br>
    <ul style="color: #e2e8f0;">
      <li><strong>3</strong> goes with <strong>Median</strong> (6 letters - longer word)</li>
      <li><strong>2</strong> goes with <strong>Mean</strong> (4 letters - shorter word)</li>
      <li>Just count down: 3 (longer) \$\\rightarrow\$ 2 (shorter).</li>
    </ul>
  </div>

  <h4 style="color: #4ade80; margin-top: 30px;">2. Other Averages: Geometric Mean (GM) & Harmonic Mean (HM)</h4>

  <h5 style="color: #4ade80; margin-top: 25px;">2.1 Geometric Mean (GM)</h5>
  <p style="color: #e2e8f0;">
    The <strong>Geometric Mean</strong> is defined as the \$N^{th}\$ root of the product of \$N\$ observations. It is particularly useful for averaging ratios, rates of change, or growth rates.
  </p>

  <h6 style="color: #fbbf24; margin-top: 10px;">2.1.1 Calculation for Ungrouped Data</h6>
  <p style="color: #e2e8f0;">
    For a set of \$N\$ positive observations, \$X_1, X_2, \\dots, X_N\$:
    \$\$ GM = \\sqrt[N]{X_1 \\times X_2 \\times \\dots \\times X_N} \$\$
    Alternatively, using [[logarithms]]:
    \$\$ \\log GM = \\frac{\\sum \\log X_i}{N} \\implies GM = \\text{antilog}\\left( \\frac{\\sum \\log X_i}{N} \\right) \$\$
    <strong style="color: #fbbf24;">Condition:</strong> The geometric mean is only defined for positive observations. If any observation is zero or negative, the GM cannot be computed.
  </p>

  <h6 style="color: #fbbf24; margin-top: 10px;">2.1.2 Properties of Geometric Mean</h6>
  <ul style="color: #e2e8f0;">
    <li>Less affected by extreme values compared to the arithmetic mean.</li>
    <li>Used for averaging percentage changes, [[index numbers]], and compound interest rates.
      <p style="color: #e2e8f0; margin-top: 8px;">
        <strong style="color: #fbbf24;">Depth Insight (NDA/CDS):</strong> GM is the correct average for calculating [[Compound Annual Growth Rate (CAGR)]]. For instance, if an investment grows by 10% in year 1, 20% in year 2, and 5% in year 3, the average growth rate is not the AM. Instead, we calculate the GM of (1.10, 1.20, 1.05) and subtract 1. This ensures the compounding effect is correctly captured.
      </p>
    </li>
    <li>It is always less than or equal to the arithmetic mean for positive data (\$GM \\le AM\$).</li>
  </ul>

  <h5 style="color: #4ade80; margin-top: 25px;">2.2 Harmonic Mean (HM)</h5>
  <p style="color: #e2e8f0;">
    The <strong>Harmonic Mean</strong> is the reciprocal of the arithmetic mean of the reciprocals of the observations. It gives greater weight to smaller values and is especially useful for averaging rates (like speed, time, or work rates).
  </p>

  <h6 style="color: #fbbf24; margin-top: 10px;">2.2.1 Calculation for Ungrouped Data</h6>
  <p style="color: #e2e8f0;">
    For a set of \$N\$ positive observations, \$X_1, X_2, \\dots, X_N\$:
    \$\$ HM = \\frac{N}{\\frac{1}{X_1} + \\frac{1}{X_2} + \\dots + \\frac{1}{X_N}} = \\frac{N}{\\sum \\frac{1}{X_i}} \$\$
    <strong style="color: #fbbf24;">Condition:</strong> The harmonic mean is only defined for positive observations. If any observation is zero, the HM cannot be computed.
  </p>

  <h6 style="color: #fbbf24; margin-top: 10px;">2.2.2 Properties of Harmonic Mean</h6>
  <ul style="color: #e2e8f0;">
    <li>Gives more weight to smaller values in the dataset.</li>
    <li>Used in situations involving averages of rates, such as average speed when distances are constant, or average price per unit.</li>
    <li>It is always less than or equal to the geometric mean for positive data (\$HM \\le GM\$).</li>
  </ul>

  <div style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #45aaf2;">💡 Fun Fact time!</strong><br>
    UPSC loves speed-distance problems testing the Harmonic Mean. If a vehicle travels from point A to B at speed \$v_1\$ and returns from B to A at speed \$v_2\$, the average speed of the entire journey is the <strong>Harmonic Mean</strong> of the two speeds: \$\\frac{2v_1v_2}{v_1 + v_2}\$. This is derived directly from \$HM = \\frac{2}{\\frac{1}{v_1} + \\frac{1}{v_2}}\$. They often present this as a statistics question disguised as a mechanics/arithmetic problem!
  </div>

  <h5 style="color: #4ade80; margin-top: 25px;">2.3 Relationship between AM, GM, HM</h5>
  <p style="color: #e2e8f0;">
    For any set of positive numbers, the relationship between the three means is:
    \$\$ AM \\ge GM \\ge HM \$\$
    Equality holds only if all observations in the dataset are identical.
    <br><br>
    <strong style="color: #fbbf24;">The Two-Variable Special Case (Extremely High-Yield for NDA/CDS):</strong><br>
    For exactly two positive numbers \$a\$ and \$b\$:
    \$\$ GM^2 = AM \\times HM \$\$
    <em>UPSC Trap Alert:</em> Do not apply \$GM^2 = AM \\times HM\$ for datasets with more than two values; it is only guaranteed to be true for exactly two observations! This is a common trick question in statement-based problems.
  </p>

  <h4 style="margin-top: 30px; color: #4ade80;">Direct Contrast: AM vs. GM vs. HM</h4>
  <div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.95rem; text-align: left; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
      <thead>
        <tr style="background-color: rgba(74,222,128,0.1); border-bottom: 2px solid #4ade80;">
          <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #4ade80;">Parameter</th>
          <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #4ade80;">Arithmetic Mean (AM)</th>
          <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #4ade80;">Geometric Mean (GM)</th>
          <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1); color: #4ade80;">Harmonic Mean (HM)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Definition</strong></td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sum of values / Number of values.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">N-th root of the product of N values.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reciprocal of the AM of the reciprocals.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Formula (Ungrouped)</strong></td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">\$\\bar{X} = \\frac{\\sum X_i}{N}\$</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">\$GM = (X_1 \\cdot X_2 \\cdot \\dots \\cdot X_N)^{1/N}\$</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">\$HM = \\frac{N}{\\sum (1/X_i)}\$</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Condition for Use</strong></td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Any type of data. Most common.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only for positive, non-zero values.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Only for positive, non-zero values.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Suitability</strong></td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Symmetric distributions, general average.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Growth rates, ratios, percentages, financial returns.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Rates (speed, work), when numerator is constant.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Sensitivity to Outliers</strong></td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Highly sensitive.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Less sensitive than AM.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Highly sensitive to small values (gives them more weight).</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mathematical Property</strong></td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sum of deviations from mean is zero.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Product of ratios remains constant.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Reciprocal of AM of reciprocals.</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Relationship</strong></td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always \$\\ge\$ GM and HM.</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always between AM and HM (inclusive).</td>
          <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Always \$\\le\$ AM and GM.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h4 style="color: #4ade80; margin-top: 30px;">3. Probability Theory</h4>
  <p style="color: #e2e8f0;">
    [[Probability Theory]] is the branch of mathematics concerned with analyzing random phenomena. It provides a framework for quantifying uncertainty, which is essential for decision-making in various fields, including defense strategy and risk assessment.
  </p>

  <h5 style="color: #4ade80; margin-top: 25px;">3.1 Basic Concepts in Probability</h5>
  <ul style="color: #e2e8f0;">
    <li><strong>[[Random Experiment]] (or Trial):</strong> An experiment whose outcome cannot be predicted with certainty, but all possible outcomes are known. <br> <em>Example: Tossing a fair coin, rolling a die.</em></li>
    <li><strong>[[Outcome]]:</strong> A single possible result of a random experiment. <br> <em>Example: Getting a 'Head' when tossing a coin, rolling a '3' on a die.</em></li>
    <li><strong>[[Sample Space]] (S):</strong> The set of all possible outcomes of a random experiment. <br> <em>Example: For a coin toss, S = {Head, Tail}; for a die roll, S = {1, 2, 3, 4, 5, 6}.</em></li>
    <li><strong>[[Event]]:</strong> A subset of the sample space. It is a collection of one or more outcomes. <br> <em>Example: Getting an 'even number' when rolling a die, E = {2, 4, 6}.</em></li>
    <li><strong>[[Elementary Event]]:</strong> An event consisting of a single outcome.</li>
    <li><strong>[[Impossible Event]]:</strong> An event with no outcomes, denoted by \$ \\emptyset \$. Its probability is 0.</li>
    <li><strong>[[Sure Event]] (or Certain Event):</strong> An event that includes all outcomes in the sample space. Its probability is 1.</li>
  </ul>

  <h5 style="color: #4ade80; margin-top: 25px;">3.2 Classical Definition of Probability</h5>
  <p style="color: #e2e8f0;">
    If a random experiment has \$N\$ equally likely outcomes, and an event \$E\$ has \$n(E)\$ favorable outcomes, then the probability of event \$E\$ is:
    \$\$ P(E) = \\frac{\\text{Number of favorable outcomes for E}}{\\text{Total number of possible outcomes}} = \\frac{n(E)}{n(S)} \$\$
    <strong style="color: #fbbf24;">Condition:</strong> This definition applies only when outcomes are equally likely.
  </p>

  <h5 style="color: #4ade80; margin-top: 25px;">3.3 Types of Events & Their Relationships</h5>
  <ul style="color: #e2e8f0;">
    <li><strong>[[Mutually Exclusive Events]] (or Disjoint Events):</strong> Two events \$A\$ and \$B\$ are mutually exclusive if they cannot occur simultaneously. \$A \\cap B = \\emptyset\$.
      <br><em>Example: Getting a 'Head' and a 'Tail' on a single coin toss.</em>
      <br>For such events, \$P(A \\cap B) = 0\$.
    </li>
    <li><strong>[[Exhaustive Events]]:</strong> A set of events is exhaustive if at least one of them must occur. Their union forms the entire sample space. \$A \\cup B \\cup \\dots = S\$.
      <br><em>Example: Getting an even or an odd number on a die roll.</em>
    </li>
    <li><strong>[[Complementary Events]]:</strong> If \$A\$ is an event, its complement \$A'\$ (or \$A^c\$) is the event that \$A\$ does not occur. \$A \\cup A' = S\$ and \$A \\cap A' = \\emptyset\$.
      <br>Thus, \$P(A) + P(A') = 1 \\implies P(A') = 1 - P(A)\$.
    </li>
    <li><strong>[[Independent Events]]:</strong> Two events \$A\$ and \$B\$ are independent if the occurrence of one does not affect the probability of the other.
      <br>Mathematically, \$P(A|B) = P(A)\$ and \$P(B|A) = P(B)\$.
      <br>For independent events, the probability of both occurring is \$P(A \\cap B) = P(A) \\times P(B)\$.
      <br><em>Example: Tossing two coins – the outcome of the first doesn't affect the second.</em>
    </li>
    <li><strong>[[Dependent Events]]:</strong> Two events are dependent if the occurrence of one affects the probability of the other.
      <br><em>Example: Drawing two cards without replacement from a deck.</em>
    </li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> Questions involving "at least one" are very common. The trick is to calculate the probability of "none" and subtract it from 1. <br>
    \$P(\\text{at least one}) = 1 - P(\\text{none})\$. <br>
    For example, the probability of getting at least one head in two coin tosses is \$1 - P(\\text{no heads}) = 1 - P(\\text{TT}) = 1 - (1/2 \\times 1/2) = 1 - 1/4 = 3/4\$. This often simplifies complex calculations!
  </div>

  <h5 style="color: #4ade80; margin-top: 25px;">3.4 Key Theorems in Probability</h5>
  <ul style="color: #e2e8f0;">
    <li><strong>[[Addition Theorem of Probability]]:</strong> For any two events \$A\$ and \$B\$:
      \$\$ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \$\$
      If \$A\$ and \$B\$ are mutually exclusive, then \$P(A \\cap B) = 0\$, so \$P(A \\cup B) = P(A) + P(B)\$.
    </li>
    <li><strong>[[Conditional Probability]]:</strong> The probability of event \$A\$ occurring, given that event \$B\$ has already occurred, is denoted by \$P(A|B)\$ and calculated as:
      \$\$ P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad \\text{provided } P(B) > 0 \$\$
      <p style="color: #e2e8f0; margin-top: 8px;">
        <strong style="color: #fbbf24;">Example (NDA 2021):</strong> A card is drawn from a well-shuffled deck of 52 cards. What is the probability that it is a King, given that it is a face card? <br>
        Let \$A\$ = event of drawing a King. \$P(A) = 4/52\$. <br>
        Let \$B\$ = event of drawing a face card (King, Queen, Jack). \$P(B) = 12/52\$. <br>
        \$A \\cap B\$ = event of drawing a King AND a face card (which is just drawing a King). \$P(A \\cap B) = 4/52\$. <br>
        So, \$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{4/52}{12/52} = \\frac{4}{12} = \\frac{1}{3}\$.
      </p>
    </li>
    <li><strong>[[Multiplication Theorem of Probability]]:</strong> For any two events \$A\$ and \$B\$:
      \$\$ P(A \\cap B) = P(A) \\cdot P(B|A) \$\$
      or
      \$\$ P(A \\cap B) = P(B) \\cdot P(A|B) \$\$
      If \$A\$ and \$B\$ are independent, then \$P(B|A) = P(B)\$, so \$P(A \\cap B) = P(A) \\cdot P(B)\$.
    </li>
    <li><strong>[[Total Probability Theorem]]:</strong> If \$E_1, E_2, \\dots, E_n\$ are \$n\$ mutually exclusive and exhaustive events, and \$A\$ is any event, then the probability of \$A\$ is given by:
      \$\$ P(A) = P(A|E_1)P(E_1) + P(A|E_2)P(E_2) + \\dots + P(A|E_n)P(E_n) \$\$
    </li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack: Conditional Probability!</strong><br>
    Think of "P(A given B)" as "A happens *within* B". So, you're looking for the part of A that overlaps with B (\$A \\cap B\$), relative to the size of B (\$P(B)\$).
    <br>
    Formula: \$P(A|B) = \\frac{\\text{Overlap}}{\\text{Given}} = \\frac{P(A \\cap B)}{P(B)}\$
  </div>

  <h4 style="color: #4ade80; margin-top: 30px;">4. Bayes' Theorem</h4>
  <p style="color: #e2e8f0;">
    [[Bayes' Theorem]], named after Reverend Thomas Bayes, is a fundamental concept in probability theory that describes how to update the probability of a hypothesis based on new evidence. It is widely used in fields like medical diagnosis, spam filtering, and machine learning. In essence, it allows us to calculate [[posterior probability]] – the probability of an event after new information has been observed.
  </p>

  <h5 style="color: #4ade80; margin-top: 25px;">4.1 The Bayes' Theorem Formula</h5>
  <p style="color: #e2e8f0;">
    Let \$A\$ and \$B\$ be two events. Bayes' Theorem states:
    \$\$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} \$\$
    Where \$P(B)\$ can often be expanded using the [[Total Probability Theorem]]:
    \$\$ P(B) = P(B|A) \\cdot P(A) + P(B|A') \\cdot P(A') \$\$
    Thus, the full formula, especially useful when dealing with an event and its complement, is:
    \$\$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B|A) \\cdot P(A) + P(B|A') \\cdot P(A')} \$\$
  </p>

  <h5 style="color: #4ade80; margin-top: 25px;">4.2 Terminology in Bayes' Theorem</h5>
  <ul style="color: #e2e8f0;">
    <li>\$P(A|B)\$: The <strong>[[Posterior Probability]]</strong> – the probability of hypothesis \$A\$ being true, given that evidence \$B\$ has occurred. This is what we want to find.</li>
    <li>\$P(B|A)\$: The <strong>[[Likelihood]]</strong> – the probability of observing evidence \$B\$ if hypothesis \$A\$ is true.</li>
    <li>\$P(A)\$: The <strong>[[Prior Probability]]</strong> – the initial probability of hypothesis \$A\$ being true, before observing any evidence.</li>
    <li>\$P(B)\$: The <strong>[[Evidence]]</strong> (or marginal probability of B) – the overall probability of observing evidence \$B\$, regardless of the hypothesis. It acts as a normalizing constant.</li>
    <li>\$P(A')\$: The prior probability of the complement of \$A\$ (i.e., \$A\$ is not true).</li>
    <li>\$P(B|A')\$: The likelihood of observing evidence \$B\$ if hypothesis \$A\$ is false.</li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack: Bayes' Formula Components</strong><br>
    Think of Bayes' Theorem as: <br>
    <span style="color: #4ade80;"><strong>P(Hypothesis | Evidence) = [ P(Evidence | Hypothesis) * P(Hypothesis) ] / P(Evidence)</strong></span> <br>
    Or, simply: <br>
    <span style="color: #4ade80;"><strong>Posterior = (Likelihood * Prior) / Evidence</strong></span> <br>
    This helps you remember what each term represents in a practical problem.
  </div>

  <h5 style="color: #4ade80; margin-top: 25px;">4.3 Worked Example: Medical Diagnosis (CDS/AFCAT Style)</h5>
  <p style="color: #e2e8f0;">
    A rare disease affects 1% of the population (i.e., \$P(D) = 0.01\$). A test for this disease is 95% accurate, meaning it gives a positive result 95% of the time when the person has the disease (\$P(T|D) = 0.95\$). However, it also gives a false positive result 5% of the time for people who do not have the disease (\$P(T|D') = 0.05\$).
    <br><br>
    If a randomly selected person tests positive, what is the probability that they actually have the disease (\$P(D|T)\$)?
  </p>
  <ul style="color: #e2e8f0;">
    <li><strong>Step 1: Identify the known probabilities.</strong>
      <ul>
        <li>Prior probability of having the disease: \$P(D) = 0.01\$.</li>
        <li>Prior probability of not having the disease: \$P(D') = 1 - P(D) = 1 - 0.01 = 0.99\$.</li>
        <li>Likelihood of a positive test given the disease: \$P(T|D) = 0.95\$.</li>
        <li>Likelihood of a positive test given no disease (false positive): \$P(T|D') = 0.05\$.</li>
      </ul>
    </li>
    <li><strong>Step 2: Calculate the evidence \$P(T)\$ using the Total Probability Theorem.</strong>
      \$\$ P(T) = P(T|D)P(D) + P(T|D')P(D') \$\$
      \$\$ P(T) = (0.95 \\times 0.01) + (0.05 \\times 0.99) \$\$
      \$\$ P(T) = 0.0095 + 0.0495 = 0.059 \$\$
      This means there's a 5.9% chance of any random person testing positive.
    </li>
    <li><strong>Step 3: Apply Bayes' Theorem to find \$P(D|T)\$.</strong>
      \$\$ P(D|T) = \\frac{P(T|D) \\cdot P(D)}{P(T)} \$\$
      \$\$ P(D|T) = \\frac{0.95 \\times 0.01}{0.059} \$\$
      \$\$ P(D|T) = \\frac{0.0095}{0.059} \\approx 0.161 \\text{ or } 16.1\\% \$\$
    </li>
  </ul>
  <p style="color: #e2e8f0; margin-top: 15px;">
    <strong style="color: #fbbf24;">Conclusion:</strong> Even with a positive test, the probability of actually having the disease is only about 16.1%. This often surprises people, as intuition might suggest a much higher probability due to the test's "95% accuracy". This illustrates the power of Bayes' Theorem in correctly updating beliefs based on the prevalence of the disease (prior probability).
  </p>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS/AFCAT):</strong> For Bayes' Theorem problems, carefully identify which event is the "hypothesis" (A) and which is the "evidence" (B). A common mistake is to confuse \$P(A|B)\$ with \$P(B|A)\$. Always write down the given probabilities with correct notation (\$P(D)\$, \$P(T|D)\$, etc.) before plugging into the formula. This systematic approach will prevent errors under exam pressure.
  </div>

</div>
`;

window.EXPANDED_NOTES_DATA["data-interpretation"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Data Interpretation: Tables, Bar & Pie Charts</h3>

  <p style="color: #e2e8f0; margin-bottom: 16px;">[[Data Interpretation]] (DI) is a crucial section in competitive exams like [[NDA]], [[CDS]], and [[AFCAT]]. It assesses your ability to quickly and accurately extract, analyze, and interpret information presented in various graphical and tabular formats. [[UPSC]]'s approach to DI has evolved, moving beyond mere calculation to deeper analytical reasoning and conceptual understanding. Mastering the nuances of [[Tables]], [[Bar Charts]], and [[Pie Charts]] is paramount for securing high marks.</p>

  <h4 style="color: #fbbf24; margin-bottom: 12px;">1. Fundamental Concepts & Terminology (UPSC NDA/CDS Perspective)</h4>
  <p style="color: #e2e8f0; margin-bottom: 16px;">In modern [[CDS]] and [[NDA]] papers, [[Data Interpretation]] has shifted from simple calculation drill-downs to analytical evaluation. [[UPSC]] frequently tests your conceptual clarity on how data is structured and represented. Understanding the precise utility of each format is critical:</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px; margin-bottom: 16px;">
    <li style="margin-bottom: 8px;"><strong>[[Table]]</strong>: The rawest and most precise form of systematic data arrangement in rows (observations) and columns (variables). Each column usually represents a distinct attribute such as <strong>[[Population]]</strong>, <strong>[[Frequency]]</strong>, or <strong>[[Percentage]]</strong>. <em>UPSC analytical focus: Tables are the primary source for multi-step percentage change and weighted mean questions. Often, tables are combined with other charts to test integrated analysis, a common pattern in [[NDA 2020]] and [[CDS 2021]] papers.</em></li>
    <li style="margin-bottom: 8px;"><strong>[[Bar Chart]]</strong>: A graphical representation where each category is depicted by a rectangular bar whose length (or height) is proportional to the quantitative value it represents. Bars may be <em>vertical</em> or <em>horizontal</em>. Used when categories are discrete and the order is non‑cyclical. Ideal for comparing magnitudes across different categories or over time (e.g., comparing sales figures of different products or a product's sales over several years).</li>
    <li style="margin-bottom: 8px;"><strong>[[Pie Chart]]</strong>: A circular diagram divided into slices, each slice’s angle (or area) corresponds to a proportion of the whole, expressed as a <strong>[[Percentage]]</strong>. Best suited for showing parts‑of‑a‑whole where the total sum equals 100 % or 360°. Each slice represents a component of a single total, such as budget allocation or market share.</li>
    <li style="margin-bottom: 8px;"><strong>[[Frequency Distribution]]</strong>: The tabulation of how often each value of a variable occurs. Key derived measures include <strong>[[Cumulative Frequency]]</strong>, <strong>[[Relative Frequency]]</strong>, and <strong>[[Percentage Frequency]]</strong>. <em>Crucial for median and mode calculations in grouped tables, especially in [[CDS Mathematics]] where grouped data is common. Understanding class intervals and their boundaries is vital.</em></li>
    <li style="margin-bottom: 8px;"><strong>[[Mean]], [[Median]], [[Mode]]</strong>: Central tendency measures frequently required when a table contains raw numerical data. <strong>Mean</strong> is the arithmetic average, <strong>Median</strong> is the middle value after ordering, and <strong>Mode</strong> is the most frequently occurring value. Understanding when to use which measure is key for conceptual questions (e.g., Median for skewed data, Mean for symmetrical data).</li>
    <li style="margin-bottom: 8px;"><strong>[[Percentage Change]]</strong>: The relative change between two values expressed as a percent, essential for interpreting growth/decline in tables and charts. <em>The single most tested arithmetic tool in UPSC DI, often requiring careful identification of the base value (the 'old' value). This appears in almost every [[NDA]] and [[CDS]] DI set.</em></li>
    <li style="margin-bottom: 8px;"><strong>[[Weighted Mean]]</strong>: Used when different observations carry different weights (e.g., different class sizes, different investment amounts, or marks from different subjects with varying credits). Formula derives from first principles of summation of weighted products. This concept is frequently tested in [[CDS]] papers (e.g., [[CDS 2018]]), especially when combining averages from different groups.</li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> When dealing with [[Tables]] or [[Bar Charts]] showing data over several years, questions often ask for "average annual growth rate" or "percentage increase over a period". Always distinguish between simple arithmetic average of annual changes and compound annual growth rate (CAGR). Unless specified, assume simple percentage change. Also, be wary of questions asking for "percentage points" difference versus "percentage change". For instance, if a value goes from 10% to 12%, it's a 2 percentage point increase, but a (2/10)*100 = 20% percentage change. This distinction is a common trap in [[CDS]] exams.
  </div>

  <div style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;"><strong>💡 Fun Fact time!</strong><br>In recent [[CDS]] papers, [[UPSC]] loves to test your speed by giving a [[Pie Chart]] with angles (degrees) and asking for ratio comparisons between categories. <strong>Pro-Tip:</strong> Never waste time converting angles to absolute values first! The ratio of the angles is identical to the ratio of the actual values (e.g., \$144^\\circ : 90^\\circ = 8:5\$). Saving this step preserves precious seconds under time pressure.</div>

  <h4 style="color: #fbbf24; margin-bottom: 12px;">2. Core Formulas with Variable Definitions</h4>
  <p style="color: #e2e8f0; margin-bottom: 16px;">A strong grasp of these fundamental formulas is critical for accuracy and speed. Practice applying them to various scenarios, as they form the bedrock of most [[Data Interpretation]] problems.</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px; margin-bottom: 16px;">
    <li style="margin-bottom: 8px;"><strong>[[Arithmetic Mean]]</strong>:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$\\bar{x}=\\frac{\\sum_{i=1}^{n} x_i}{n}\$\$</p>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>\$\\bar{x}\$</strong>: Mean of the data set.</li>
        <li style="margin-bottom: 4px;"><strong>\$x_i\$</strong>: Individual observation.</li>
        <li style="margin-bottom: 4px;"><strong>\$n\$</strong>: Total number of observations (must be a positive integer).</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Median]] (for grouped data)</strong>:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$\\text{Median}= L + \\left(\\frac{\\frac{N}{2}-CF_{b}}{f_{b}}\\right) \\times h\$\$</p>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>\$L\$</strong>: Lower boundary of the median class.</li>
        <li style="margin-bottom: 4px;"><strong>\$N\$</strong>: Total frequency (sum of all \$f_i\$).</li>
        <li style="margin-bottom: 4px;"><strong>\$CF_{b}\$</strong>: Cumulative frequency of the class preceding the median class.</li>
        <li style="margin-bottom: 4px;"><strong>\$f_{b}\$</strong>: Frequency of the median class.</li>
        <li style="margin-bottom: 4px;"><strong>\$h\$</strong>: Class width (difference between successive class limits).</li>
      </ul>
    </li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack (Grouped Median Formula):</strong><br>Struggling to remember the Grouped [[Median]] formula components under exam stress? Use this mnemonic phrase: <strong>"<u>L</u>et's <u>N</u>egate <u>C</u>razy <u>F</u>ears, <u>F</u>ind <u>H</u>ome!"</strong><br>
    <ul style="list-style-type: disc; margin-left: 20px; margin-top: 8px;">
      <li style="margin-bottom: 4px;"><strong>L</strong>: <strong>L</strong>ower boundary</li>
      <li style="margin-bottom: 4px;"><strong>N</strong>: <strong>N</strong>/2 (half of total frequency)</li>
      <li style="margin-bottom: 4px;"><strong>CF</strong>: <strong>C</strong>umulative <strong>F</strong>requency (preceding class)</li>
      <li style="margin-bottom: 4px;"><strong>F</strong>: <strong>F</strong>requency of the median class</li>
      <li style="margin-bottom: 4px;"><strong>H</strong>: <strong>H</strong>eight (class width)</li>
    </ul>
  </div>

  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px; margin-bottom: 16px;">
    <li style="margin-bottom: 8px;"><strong>[[Mode]] (for grouped data)</strong>:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$\\text{Mode}= L + \\left(\\frac{f_{m}-f_{m-1}}{(f_{m}-f_{m-1})+(f_{m}-f_{m+1})}\\right) \\times h\$\$</p>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>\$L\$</strong>: Lower boundary of the modal class.</li>
        <li style="margin-bottom: 4px;"><strong>\$f_{m}\$</strong>: Frequency of the modal class (the class with the highest frequency).</li>
        <li style="margin-bottom: 4px;"><strong>\$f_{m-1}\$</strong>: Frequency of the class preceding the modal class.</li>
        <li style="margin-bottom: 4px;"><strong>\$f_{m+1}\$</strong>: Frequency of the class succeeding the modal class.</li>
        <li style="margin-bottom: 4px;"><strong>\$h\$</strong>: Class width.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Percentage Frequency]]</strong>:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$\\%f_i = \\frac{f_i}{N}\\times 100\$\$</p>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>\$f_i\$</strong>: Frequency of the \$i^{th}\$ class.</li>
        <li style="margin-bottom: 4px;"><strong>\$N\$</strong>: Total frequency.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Percentage Change]]</strong>:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$\\%\\Delta = \\frac{V_{\\text{new}}-V_{\\text{old}}}{V_{\\text{old}}}\\times 100\$\$</p>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>\$V_{\\text{new}}\$</strong>: New (later) value.</li>
        <li style="margin-bottom: 4px;"><strong>\$V_{\\text{old}}\$</strong>: Original (earlier) value.</li>
        <li style="margin-bottom: 4px;">Condition: \$V_{\\text{old}}\\neq 0\$; otherwise the percentage change is undefined.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Weighted Mean]]</strong>:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$\\bar{x}_w = \\frac{\\sum_{i=1}^{k} w_i x_i}{\\sum_{i=1}^{k} w_i}\$\$</p>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;"><strong>\$w_i\$</strong>: Weight attached to the \$i^{th}\$ observation (must be non‑negative).</li>
        <li style="margin-bottom: 4px;"><strong>\$x_i\$</strong>: Value of the \$i^{th}\$ observation.</li>
        <li style="margin-bottom: 4px;"><strong>\$k\$</strong>: Number of distinct groups.</li>
      </ul>
    </li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack (Central Tendency Measures):</strong><br>Remember the order and meaning of [[Mean]], [[Median]], [[Mode]] with <strong>"<u>M</u>y <u>M</u>iddle <u>M</u>ost"</strong><br>
    <ul style="list-style-type: disc; margin-left: 20px; margin-top: 8px;">
      <li style="margin-bottom: 4px;"><strong>M</strong>ean: The <u>M</u>athematical average (sum/count).</li>
      <li style="margin-bottom: 4px;"><strong>M</strong>edian: The <u>M</u>iddle value (after ordering).</li>
      <li style="margin-bottom: 4px;"><strong>M</strong>ode: The <u>M</u>ost frequent value.</li>
    </ul>
    This mnemonic helps recall their basic definitions and typical order of presentation in statistics.
  </div>

  <h4 style="color: #fbbf24; margin-bottom: 12px;">3. Derivation of Percentage Change from First Principles</h4>
  <p style="color: #e2e8f0; margin-bottom: 16px;">Understanding the derivation reinforces the concept and prevents common errors, especially when identifying the correct denominator. This is a fundamental concept often tested in [[NDA]] and [[CDS]] exams (e.g., [[NDA 2018]], [[CDS 2019]] papers).</p>
  <p style="color: #e2e8f0; margin-bottom: 16px;">Starting with the definition of relative change:</p>
  <ol style="color: #e2e8f0; list-style-type: decimal; margin-left: 20px; margin-bottom: 16px;">
    <li style="margin-bottom: 8px;">Relative change \$R\$ is the ratio of the absolute change \$\\Delta V\$ to the original value \$V_{\\text{old}}\$:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$R = \\frac{\\Delta V}{V_{\\text{old}}}\$\$</p>
    </li>
    <li style="margin-bottom: 8px;">Absolute change \$\\Delta V\$ equals \$V_{\\text{new}}-V_{\\text{old}}\$.</li>
    <li style="margin-bottom: 8px;">Substituting, we obtain:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$R = \\frac{V_{\\text{new}}-V_{\\text{old}}}{V_{\\text{old}}}\$\$</p>
    </li>
    <li style="margin-bottom: 8px;">To express \$R\$ as a percent, multiply by 100:
      <p style="margin-top: 8px; margin-bottom: 8px;">\$\$\\%\\Delta = R \\times 100 = \\frac{V_{\\text{new}}-V_{\\text{old}}}{V_{\\text{old}}}\\times 100\$\$</p>
    </li>
  </ol>
  <p style="color: #e2e8f0; margin-bottom: 16px;">This derivation emphasizes that the denominator must be the original value; swapping the order leads to an incorrect reciprocal percent value—a classic distractor option in [[CDS]] multiple-choice questions. For instance, if a value increases from 100 to 120, the increase is 20%. If it decreases from 120 to 100, the decrease is (20/120)*100 = 16.67%. The base value is crucial for accurate calculations and a common area for errors in [[AFCAT]] quantitative aptitude.</p>

  <div style="background:#2a2e3b; border-left:4px solid #4ade80; padding:12px; margin:16px 0; color: #e2e8f0;">
    <strong style="color: #4ade80;">Critical Distinction:</strong> Use a <strong>[[Bar Chart]]</strong> when categories are independent and you need to compare absolute magnitudes. Use a <strong>[[Pie Chart]]</strong> only when the total sum is meaningful (e.g., market share, budget allocation) and the number of slices is &le; 6‑8 to avoid visual clutter. For time-series data, [[Line Graphs]] (which show trends over continuous periods) are generally preferred over bar charts, though bar charts can also show trends effectively for discrete time points.
  </div>

  <h4 style="color: #fbbf24; margin-bottom: 12px;">4. Comparative Table of Chart Types</h4>
  <p style="color: #e2e8f0; margin-bottom: 16px;">Understanding the strengths and weaknesses of each chart type helps in choosing the right representation and interpreting given data accurately. This knowledge is often tested conceptually in [[AFCAT]] and [[CDS]] reasoning sections, requiring you to identify the most appropriate chart for a given dataset.</p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0; font-size:0.9rem;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1);">
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; color: #4ade80; text-align: left;"><strong>Aspect</strong></th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; color: #4ade80; text-align: left;"><strong>[[Bar Chart]]</strong></th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; color: #4ade80; text-align: left;"><strong>[[Pie Chart]]</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Best For</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Comparing discrete categories, spotting trends across time, showing change over a period. Ideal for [[Rankings]] or [[Magnitude Comparisons]].</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Showing parts‑of‑a‑whole, proportional contributions, market share, budget allocation. Emphasizes how each part relates to the total.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Number of Categories</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Unlimited (practical limit &asymp; 15‑20 for clarity). Can handle negative values, often represented by bars extending below the axis.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Ideally &le; 6‑8; more slices cause overlapping angles and make comparison difficult. Cannot represent negative values as parts of a whole.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Ease of Calculating Exact Values</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Direct from axis scales; no trigonometry needed. Values are explicitly represented by bar lengths, often with labels.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Requires conversion of percentages to angles or vice-versa: \$ \\theta_i = \\frac{\\%f_i}{100}\\times 360^\\circ \$ or \$ \\%f_i = \\frac{\\theta_i}{360^\\circ}\\times 100 \$. Calculations can be more indirect.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Visual Perception of Small Differences</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">High (length differences are easily distinguished, especially when bars are aligned along a common baseline).</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Low (small angular differences are hard to discriminate, making precise comparison challenging, particularly for adjacent slices).</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Key Limitation</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Can become cluttered with too many categories or if bars are too thin. Not ideal for showing proportions of a whole at a glance.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Cannot compare different totals effectively. Difficult to compare individual slices across multiple pie charts. Only suitable for a single dataset's composition.</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #fbbf24; margin-bottom: 12px;">5. Step‑by‑Step Worked Example 1 – Table to Bar Chart</h4>
  <p style="color: #e2e8f0; margin-bottom: 16px;">This example demonstrates the basic conversion and calculation often seen in [[NDA]] and [[AFCAT]] papers (e.g., [[NDA 2021]] exam). It covers fundamental data extraction and percentage change calculation.</p>
  <p style="color: #e2e8f0; margin-bottom: 16px;"><strong>Problem Statement:</strong> A [[Table]] provides the number of recruits enlisted in the [[Indian Army]] over four consecutive years: 2019 – 1,200, 2020 – 1,350, 2021 – 1,500, 2022 – 1,650. Construct a vertical <strong>[[Bar Chart]]</strong> and compute the <strong>percentage increase</strong> from 2019 to 2022.</p>
  <ol style="color: #e2e8f0; list-style-type: decimal; margin-left: 20px; margin-bottom: 16px;">
    <li style="margin-bottom: 8px;"><strong>Identify the quantitative variable:</strong> Number of recruits (<strong>\$V_i\$</strong>). The categorical variable is the Year.</li>
    <li style="margin-bottom: 8px;"><strong>Determine the scale:</strong> Choose a convenient scale for the vertical axis (Y-axis). For example, 1 unit = 100 recruits. Then the heights become 12, 13.5, 15, 16.5 units respectively. Ensure the scale starts from zero to avoid misleading visuals and accurately represent magnitudes.</li>
    <li style="margin-bottom: 8px;"><strong>Plot the bars:</strong> Along the horizontal axis (X-axis) label years (2019, 2020, 2021, 2022). Draw vertical rectangles (bars) of equal width, with the heights corresponding to the number of recruits for each year. Ensure there is equal spacing between bars to maintain visual clarity.</li>
    <li style="margin-bottom: 8px;"><strong>Calculate percentage increase:</strong>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">Old value \$V_{\\text{old}} = 1,200\$ (recruits in 2019).</li>
        <li style="margin-bottom: 4px;">New value \$V_{\\text{new}} = 1,650\$ (recruits in 2022).</li>
        <li style="margin-bottom: 4px;">Apply the formula:
          <p style="margin-top: 8px; margin-bottom: 8px;">\$\$\\%\\Delta = \\frac{1,650-1,200}{1,200}\\times 100 = \\frac{450}{1,200}\\times 100 = 37.5\\%\$\$</p></li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>Interpretation:</strong> The bar heights increase uniformly, reflecting a steady 37.5 % growth over the four‑year span. This indicates consistent recruitment efforts or increasing demand for joining the [[Armed Forces]].</li>
  </ol>

  <h4 style="color: #fbbf24; margin-bottom: 12px;">6. Step‑by‑Step Worked Example 2 – Pie Chart Analysis</h4>
  <p style="color: #e2e8f0; margin-bottom: 16px;">This example focuses on interpreting [[Pie Charts]], a common feature in [[CDS Mathematics]] and [[AFCAT]] (e.g., [[AFCAT 2022]] exam). It emphasizes using angles and percentages for quick comparisons without needing absolute values unless explicitly asked.</p>
  <p style="color: #e2e8f0; margin-bottom: 16px;"><strong>Problem Statement:</strong> A [[Pie Chart]] shows the distribution of a student's monthly expenses of Rs. 36,000. Food is 108°, Rent is 72°, Education is 90°, and Transport is 54°. The remaining expense is for Entertainment.
  <ol style="color: #e2e8f0; list-style-type: decimal; margin-left: 20px; margin-bottom: 16px;">
    <li style="margin-bottom: 8px;">Calculate the percentage of expense on Entertainment.</li>
    <li style="margin-bottom: 8px;">Find the ratio of expenses on Food to Transport.</li>
    <li style="margin-bottom: 8px;">What is the actual amount spent on Education?</li>
  </ol>
  </p>
  <ol style="color: #e2e8f0; list-style-type: decimal; margin-left: 20px; margin-bottom: 16px;">
    <li style="margin-bottom: 8px;"><strong>Calculate Entertainment Expense Percentage:</strong>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">Total angle in a pie chart is 360°.</li>
        <li style="margin-bottom: 4px;">Sum of given angles = 108° (Food) + 72° (Rent) + 90° (Education) + 54° (Transport) = 324°.</li>
        <li style="margin-bottom: 4px;">Angle for Entertainment = 360° - 324° = 36°.</li>
        <li style="margin-bottom: 4px;">Percentage for Entertainment = \$\\frac{36^\\circ}{360^\\circ} \\times 100\\% = 10\\%\$.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>Find Ratio of Food to Transport Expenses:</strong>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">As per the Pro-Tip, the ratio of expenses is the same as the ratio of their angles.</li>
        <li style="margin-bottom: 4px;">Ratio (Food : Transport) = \$108^\\circ : 54^\\circ\$.</li>
        <li style="margin-bottom: 4px;">Simplifying the ratio: \$108/54 = 2/1\$. So, the ratio is \$2:1\$.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>Calculate Actual Amount Spent on Education:</strong>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">Angle for Education = 90°.</li>
        <li style="margin-bottom: 4px;">Percentage for Education = \$\\frac{90^\\circ}{360^\\circ} \\times 100\\% = 25\\%\$.</li>
        <li style="margin-bottom: 4px;">Total monthly expenses = Rs. 36,000.</li>
        <li style="margin-bottom: 4px;">Amount spent on Education = \$25\\%\$ of Rs. \$36,000 = 0.25 \\times 36,000 = \\text{Rs. } 9,000\$.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>Interpretation:</strong> The student spends a significant portion on basic needs (Food, Rent, Education). The ratio analysis quickly shows that Food expenses are double that of Transport, highlighting spending priorities.</li>
  </ol>

  <h4 style="color: #fbbf24; margin-bottom: 12px;">7. Advanced Concepts & Common Pitfalls</h4>
  <p style="color: #e2e8f0; margin-bottom: 16px;">Beyond basic calculations, [[UPSC]] often tests your ability to handle more complex scenarios and identify common errors. These are areas where aspirants frequently lose marks and differentiate top performers.</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px; margin-bottom: 16px;">
    <li style="margin-bottom: 8px;"><strong>[[Combined Graphs]] / Multiple Charts:</strong> Many [[CDS]] and [[NDA]] questions (e.g., [[CDS 2020]], [[NDA 2023]]) involve interpreting data from two or more charts simultaneously. For instance, a [[Bar Chart]] might show production of different companies over years, and a [[Pie Chart]] might show the percentage of sales from one of those companies for a specific year. The key is to carefully link the data points and ensure you are using the correct base values for calculations. Always read the labels, legends, and any introductory text meticulously.</li>
    <li style="margin-bottom: 8px;"><strong>[[Data Sufficiency]] in DI:</strong> Sometimes, questions ask if the given data is sufficient to answer a specific query. This requires a conceptual understanding of what information is needed for a particular calculation. For example, to find the absolute value from a [[Pie Chart]] showing percentages, you *must* have the total value. If only percentages are given, you can only find ratios or relative proportions. This is a common question type in [[CDS]] General Mental Ability.</li>
    <li style="margin-bottom: 8px;"><strong>Misleading Visuals:</strong> While less common in [[UPSC]] directly, understanding how charts can mislead helps in critical evaluation. For instance, a [[Bar Chart]] not starting from zero on the Y-axis can exaggerate differences, making small changes appear significant. [[Pie Charts]] with too many slices are visually cluttered and hard to interpret accurately, forcing reliance on numerical labels rather than visual comparison.</li>
    <li style="margin-bottom: 8px;"><strong>Care with Averages:</strong> When calculating averages from grouped data, remember to use the mid-point of each class interval for \$x_i\$. For [[Weighted Mean]], ensure each weight corresponds to its correct value. A common mistake is to simply average percentages without considering their respective base values. E.g., if sales increased by 10% in company A (base 1000 units) and 20% in company B (base 100 units), the overall average percentage increase is NOT (10+20)/2. You must calculate the total increase over total base: Total increase = (0.10*1000) + (0.20*100) = 100 + 20 = 120. Total base = 1000 + 100 = 1100. Overall % increase = (120/1100)*100 = 10.91%.</li>
    <li style="margin-bottom: 8px;"><strong>[[Cumulative Frequency Curve]] (Ogive):</strong> While less frequent, in [[CDS]] statistics, you might encounter [[Ogive]] for graphically determining the [[Median]] or quartiles. An Ogive is a smooth curve plotted using cumulative frequencies against the upper class boundaries. The point on the curve corresponding to N/2 (for median) or N/4, 3N/4 (for quartiles) on the y-axis gives the value on the x-axis. This is a more advanced statistical representation that occasionally appears.</li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (CDS/AFCAT):</strong> For questions involving [[Combined Graphs]], always start by understanding what each chart represents individually. Then, identify the common link or variable that connects them. For example, if a [[Bar Chart]] shows total students in different years and a [[Pie Chart]] shows the distribution of students by stream for a *specific year*, ensure you use the total student count for that specific year from the bar chart to calculate absolute values from the pie chart percentages. Misidentifying the base value is a frequent error.
  </div>

</div>
`;

window.EXPANDED_NOTES_DATA["limits-continuity"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Limits & Continuity</h3>

  <div class="visual-summary text-center my-6" style="text-align: center; margin-top: 24px; margin-bottom: 24px;"><img src="images/calculus_limits_derivatives.png" alt="Visual Summary" class="max-w-full h-auto rounded-lg shadow-md border border-slate-700 mx-auto" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 1px solid #475569; margin-left: auto; margin-right: auto;" /></div>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">1. Understanding Limits: The Foundation</h4>
  <p style="color: #e2e8f0;">The concept of a [[limit]] is fundamental to [[calculus]], describing the behavior of a function as its input approaches a certain value. It's about what a function *tends* towards, not necessarily what it *is* at that exact point. This distinction is crucial for understanding [[continuity]] and [[differentiability]].</p>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">1.1. Formal Definition: The Epsilon-Delta Approach</h5>
  <p style="color: #e2e8f0;">For a real-valued function \$f(x)\$ defined on an open interval containing the point \$c\$ (except possibly at \$c\$ itself), we say that \$f(x)\$ has a <strong>limit</strong> \$L\$ as \$x\$ approaches \$c\$ if, for every \$\\varepsilon > 0\$, there exists a \$\\delta > 0\$ such that</p>
  <p style="color: #e2e8f0; text-align: center;">\$\$\\forall \\, \\varepsilon>0,\\;\\exists \\,\\delta>0\\;:\\;0<|x-c|<\\delta \\Longrightarrow |f(x)-L|<\\varepsilon\$\$</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li><strong>\$\\varepsilon\$ (epsilon)</strong> – an arbitrarily small positive number representing the target closeness of \$f(x)\$ to the [[limit]] \$L\$.</li>
    <li><strong>\$\\delta\$ (delta)</strong> – a positive number that depends on \$\\varepsilon\$ and determines the input interval around \$c\$ where the outputs stay within the target.</li>
    <li>Condition <strong>\$0 < |x - c| < \\delta\$</strong> explicitly excludes the point \$x = c\$, guaranteeing that [[limits]] focus purely on the behavior <em>near</em> the point, even if \$f(c)\$ is completely undefined.</li>
  </ul>
  
  <div style="background: #2a2e3d; padding: 10px; border-left: 4px solid #fbbf24; margin: 12px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">Key Insight:</strong> The [[epsilon-delta definition]] is the mathematical machinery behind [[limits]]. [[UPSC]] will rarely ask you to perform an epsilon-delta proof, but they often test the physical interpretation: [[limits]] are about *approaching*, not *reaching*.
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">1.2. Limit Laws (Algebra of Limits)</h5>
  <p style="color: #e2e8f0;">When the individual [[limits]] of functions exist, the [[algebra of limits]] behave predictably (provided all denominators are non-zero). These laws are crucial for simplifying complex limit expressions in [[NDA]]/[[CDS]] exams.</p>
  <ol style="color: #e2e8f0; list-style-type: decimal; margin-left: 20px;">
    <li><strong>Sum Law:</strong> \$\$\\lim_{x\\to c}[f(x)+g(x)]=\\lim_{x\\to c}f(x)+\\lim_{x\\to c}g(x)\$\$</li>
    <li><strong>Product Law:</strong> \$\$\\lim_{x\\to c}[f(x)g(x)]=\\Big(\\lim_{x\\to c}f(x)\\Big)\\Big(\\lim_{x\\to c}g(x)\\Big)\$\$</li>
    <li><strong>Quotient Law:</strong> If \$\\lim_{x\\to c}g(x)\\neq0\$, then \$\$\\lim_{x\\to c}\\frac{f(x)}{g(x)}=\\frac{\\displaystyle\\lim_{x\\to c}f(x)}{\\displaystyle\\lim_{x\\to c}g(x)}\$\$</li>
    <li><strong>Power Law:</strong> For any integer \$n\\ge0\$, \$\$\\lim_{x\\to c}[f(x)]^{\\,n}=\\Big(\\lim_{x\\to c}f(x)\\Big)^{\\,n}\$\$</li>
    <li><strong>Root Law:</strong> If \$n\$ is a positive integer and \$\\lim_{x\\to c}f(x)\\ge0\$ (for even \$n\$), then \$\$\\lim_{x\\to c}\\sqrt[n]{f(x)}=\\sqrt[n]{\\displaystyle\\lim_{x\\to c}f(x)}\$\$</li>
  </ol>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">1.3. One-Sided Limits</h5>
  <p style="color: #e2e8f0;">[[One-sided limits]] are the ultimate tool for evaluating [[piecewise functions]], which are heavily targeted in the [[NDA exam]]. They describe the behavior of a function as \$x\$ approaches a point from only one direction.</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li><strong>Right-hand limit (\$\\lim_{x\\to c^{+}}f(x)\$):</strong> \$x\$ approaches \$c\$ from values strictly greater than \$c\$.</li>
    <li><strong>Left-hand limit (\$\\lim_{x\\to c^{-}}f(x)\$):</strong> \$x\$ approaches \$c\$ from values strictly less than \$c\$.</li>
  </ul>
  <p style="color: #e2e8f0;">For a two-sided [[limit]] to exist, both directional approaches must yield the same real value:</p>
  <p style="color: #e2e8f0; text-align: center;">\$\$\\lim_{x\\to c}f(x)=L\\quad\\Longleftrightarrow\\quad\\lim_{x\\to c^{+}}f(x)=\\lim_{x\\to c^{-}}f(x)=L\$\$</p>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">2. Indeterminate Forms & Standard Limits</h4>
  <p style="color: #e2e8f0;">When direct substitution into a limit expression results in an [[indeterminate form]], it signals that further [[algebraic manipulation]] or advanced techniques are required. These are common traps in [[NDA]]/[[CDS]] papers.</p>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack:</strong><br>
    Remember the 7 [[Indeterminate Forms]] using the <strong>"Double-Ratio, Double-Product, Triple-Power"</strong> rule:<br>
    <ul style="list-style-type: disc; margin-left: 20px;">
      <li><strong>Double Ratio:</strong> \$\\frac{0}{0}\$ and \$\\frac{\\infty}{\\infty}\$</li>
      <li><strong>Double Product & Difference:</strong> \$0 \\times \\infty\$ and \$\\infty - \\infty\$</li>
      <li><strong>Triple Power:</strong> \$1^\\infty\$, \$0^0\$, and \$\\infty^0\$</li>
    </ul>
    <em>[[UPSC]] Trap Alert:</em> Expressions like \$\\infty + \\infty\$ (which is \$\\infty\$) and \$0^\\infty\$ (which is \$0\$) are NOT indeterminate. Do not waste time trying to apply [[L'Hôpital's Rule]] to them!
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">2.1. Standard Limits: Your Exam Shortcuts</h5>
  <p style="color: #e2e8f0;">These [[standard limits]] resolve common [[indeterminate forms]] instantly on the [[NDA]]/[[CDS]] papers. Memorizing these direct results saves valuable seconds during the exam. They are the backbone for solving more complex limit problems, especially those involving [[trigonometric limits]], [[exponential limits]], and [[logarithmic limits]].</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li><strong>\$\$\\lim_{x\\to0} \\frac{\\sin(x)}{x} = 1\$\$</strong></li>
    <li><strong>\$\$\\lim_{x\\to0} \\frac{\\tan(x)}{x} = 1\$\$</strong></li>
    <li><strong>\$\$\\lim_{x\\to0} \\frac{e^x - 1}{x} = 1\$\$</strong></li>
    <li><strong>\$\$\\lim_{x\\to0} \\frac{\\ln(1 + x)}{x} = 1\$\$</strong></li>
    <li><strong>\$\$\\lim_{x\\to a} \\frac{x^n - a^n}{x - a} = n \\cdot a^{n-1}\$\$</strong></li>
    <li><strong>\$\$\\lim_{x\\to0} (1 + x)^{1/x} = e\$\$</strong></li>
    <li><strong>\$\$\\lim_{x\\to\\infty} \\left(1 + \\frac{a}{x}\\right)^x = e^a\$\$</strong> (An absolute favorite of [[UPSC]] in 2024-2026 papers!)</li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack:</strong><br>
    For the limits involving \$x \\to 0\$ and resulting in 1, think of them as "S.T.E.L." - **S**in(x)/x, **T**an(x)/x, **E**xp(x)-1/x, **L**n(1+x)/x. All equal 1 as \$x \\to 0\$. This helps recall the common forms quickly!
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">2.2. Converting Indeterminate Forms</h5>
  <p style="color: #e2e8f0;">While \$\\frac{0}{0}\$ and \$\\frac{\\infty}{\\infty}\$ are directly handled by [[L'Hôpital's Rule]], other [[indeterminate forms]] like \$0 \\times \\infty\$ or \$\\infty - \\infty\$ often appear. The trick is to convert them into the \$\\frac{0}{0}\$ or \$\\frac{\\infty}{\\infty}\$ forms using [[algebraic manipulation]].</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li><strong>\$0 \\times \\infty\$:</strong> Rewrite \$f(x)g(x)\$ as \$\\frac{f(x)}{1/g(x)}\$ (form \$\\frac{0}{0}\$) or \$\\frac{g(x)}{1/f(x)}\$ (form \$\\frac{\\infty}{\\infty}\$). Choose the one that simplifies differentiation.
      <br/><span style="font-style: italic;">Example:</span> \$\\lim_{x\\to0} x \\ln x = \\lim_{x\\to0} \\frac{\\ln x}{1/x}\$ (form \$\\frac{\\infty}{\\infty}\$).</li>
    <li><strong>\$\\infty - \\infty\$:</strong> Combine terms into a single fraction or rationalize.
      <br/><span style="font-style: italic;">Example:</span> \$\\lim_{x\\to0} \\left(\\frac{1}{\\sin x} - \\frac{1}{x}\\right) = \\lim_{x\\to0} \\frac{x - \\sin x}{x \\sin x}\$ (form \$\\frac{0}{0}\$).</li>
    <li><strong>\$1^\\infty, 0^0, \\infty^0\$:</strong> For these exponential forms, take the natural logarithm. If \$\\lim_{x\\to c} [f(x)]^{g(x)} = L\$, then \$\\ln L = \\lim_{x\\to c} g(x) \\ln f(x)\$, which is typically a \$0 \\times \\infty\$ form.
      <br/><span style="font-style: italic;">Example:</span> \$\\lim_{x\\to0} (1+x)^{1/x}\$. Let \$y = (1+x)^{1/x}\$. Then \$\\ln y = \\frac{1}{x} \\ln(1+x) = \\frac{\\ln(1+x)}{x}\$. We know \$\\lim_{x\\to0} \\frac{\\ln(1+x)}{x} = 1\$. So \$\\ln L = 1 \\implies L = e^1 = e\$.</li>
  </ul>
  <p style="color: #e2e8f0;">Mastering these conversions is a high-yield skill for [[NDA]]/[[CDS]] exams, as [[UPSC]] often presents problems that require this initial setup before applying [[L'Hôpital's Rule]] or series expansions.</p>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">3. Techniques for Evaluating Limits</h4>
  <p style="color: #e2e8f0;">Beyond [[standard limits]], several techniques help resolve [[indeterminate forms]] and evaluate [[limits]] efficiently.</p>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">3.1. Direct Substitution, Factoring, and Rationalization</h5>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li><strong>Direct Substitution:</strong> Always try this first! If \$f(x)\$ is a polynomial, rational, trigonometric, exponential, or logarithmic function and \$c\$ is in its domain, then \$\\lim_{x\\to c} f(x) = f(c)\$.</li>
    <li><strong>Factoring:</strong> For rational functions yielding \$\\frac{0}{0}\$, factor the numerator and denominator to cancel common terms.
      <br/><span style="font-style: italic;">Example:</span> \$\\lim_{x\\to1} \\frac{x^2 - 1}{x - 1} = \\lim_{x\\to1} \\frac{(x-1)(x+1)}{x-1} = \\lim_{x\\to1} (x+1) = 2\$.</li>
    <li><strong>Rationalization:</strong> Used when expressions involve square roots (or other roots) and yield \$\\frac{0}{0}\$. Multiply numerator and denominator by the conjugate.
      <br/><span style="font-style: italic;">Example:</span> \$\\lim_{x\\to0} \\frac{\\sqrt{x+1}-1}{x} = \\lim_{x\\to0} \\frac{(\\sqrt{x+1}-1)(\\sqrt{x+1}+1)}{x(\\sqrt{x+1}+1)} = \\lim_{x\\to0} \\frac{x+1-1}{x(\\sqrt{x+1}+1)} = \\lim_{x\\to0} \\frac{x}{x(\\sqrt{x+1}+1)} = \\lim_{x\\to0} \\frac{1}{\\sqrt{x+1}+1} = \\frac{1}{2}\$.</li>
  </ul>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">3.2. L'Hôpital's Rule</h5>
  <p style="color: #e2e8f0;">For evaluating [[limits]] that result in [[indeterminate forms]] like <strong>\$\$\\frac{0}{0}\$\$</strong> or <strong>\$\$\\frac{\\infty}{\\infty}\$\$</strong>:</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li>Differentiate the numerator and the denominator separately: <strong>\$\$\\lim_{x\\to c} \\frac{f(x)}{g(x)} = \\lim_{x\\to c} \\frac{f'(x)}{g'(x)}\$\$</strong>.</li>
    <li>Repeat the process if the resulting expression is still indeterminate, provided the functions remain differentiable.</li>
    <li><strong>Analytical Warning for 2024-2026 Trends:</strong> Do not blindly apply [[L'Hôpital's Rule]] without verifying that the form is indeed indeterminate. [[UPSC]] frequently sets traps with [[algebraic expressions]] that look complex but can be resolved by direct substitution or simple [[factoring]].</li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> When using [[L'Hôpital's Rule]], be careful with repeated differentiation. Sometimes, the expression becomes more complex. Always check if a standard limit or [[Taylor Series expansion]] might be quicker, especially for \$x \\to 0\$ cases. For example, \$\\lim_{x\\to0} \\frac{\\sin x - x}{x^3}\$ can be tedious with L'Hôpital's, but with \$\\sin x \\approx x - x^3/6\$, it becomes \$\\lim_{x\\to0} \\frac{(x - x^3/6) - x}{x^3} = \\lim_{x\\to0} \\frac{-x^3/6}{x^3} = -1/6\$. This is a common pattern in recent [[UPSC]] papers (e.g., [[NDA 2023]]).
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">3.3. Taylor Series Expansions</h5>
  <p style="color: #e2e8f0;">In recent years, [[UPSC]] has shifted toward questions where applying [[L'Hôpital's Rule]] repeatedly becomes algebraically exhausting. Smart candidates bypass this by using [[Taylor Series expansions]] (like \$\\sin x \\approx x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots\$ and \$e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots\$) for quick evaluations when \$x \\to 0\$. This method is particularly powerful for [[limits]] involving combinations of elementary functions.</p>
  <p style="color: #e2e8f0;">Key expansions for \$x \\to 0\$ (memorize these for [[NDA]]/[[CDS]]):</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li>\$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots\$</li>
    <li>\$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots\$</li>
    <li>\$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots\$</li>
    <li>\$\\tan x = x + \\frac{x^3}{3} + \\frac{2x^5}{15} + \\dots\$</li>
    <li>\$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots\$</li>
    <li>\$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\dots\$ (Binomial expansion)</li>
  </ul>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">3.4. Squeeze Theorem (Sandwich Theorem)</h5>
  <p style="color: #e2e8f0;">The [[Squeeze Theorem]] (also known as the [[Sandwich Theorem]]) is invaluable for finding [[limits]] of functions that are "squeezed" between two other functions whose [[limits]] are known and equal. This is particularly useful for oscillatory functions or functions where [[algebraic manipulation]] is difficult.</p>
  <p style="color: #e2e8f0;"><strong>Theorem:</strong> If \$h(x) \\le f(x) \\le g(x)\$ for all \$x\$ in an open interval containing \$c\$ (except possibly at \$c\$ itself), and if \$\\lim_{x\\to c} h(x) = L\$ and \$\\lim_{x\\to c} g(x) = L\$, then \$\\lim_{x\\to c} f(x) = L\$.</p>
  <p style="color: #e2e8f0;">A classic application is proving \$\\lim_{x\\to0} \\frac{\\sin x}{x} = 1\$ using geometric arguments. Another common [[NDA]]/[[CDS]] example involves functions like \$\\lim_{x\\to\\infty} \\frac{\\sin x}{x}\$. Since \$-1 \\le \\sin x \\le 1\$, we have \$-\\frac{1}{x} \\le \\frac{\\sin x}{x} \\le \\frac{1}{x}\$. As \$x \\to \\infty\$, both \$-\\frac{1}{x}\$ and \$\\frac{1}{x}\$ approach 0. Therefore, by the [[Squeeze Theorem]], \$\\lim_{x\\to\\infty} \\frac{\\sin x}{x} = 0\$. This method is powerful for handling bounded functions multiplied by functions tending to zero.</p>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">4. Continuity of a Function</h4>
  <p style="color: #e2e8f0;">A function is [[continuous]] if its graph can be drawn without lifting the pen. Mathematically, this means no breaks, jumps, or holes.</p>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">4.1. Formal Definition of Continuity</h5>
  <p style="color: #e2e8f0;">A function \$f\$ is <strong>continuous</strong> at a point \$c\$ if and only if these three checkpoints are met simultaneously:</p>
  <ol style="color: #e2e8f0; list-style-type: decimal; margin-left: 20px;">
    <li><strong>Existence of Value:</strong> \$f(c)\$ must be defined (no hole in the graph).</li>
    <li><strong>Existence of Limit:</strong> \$\\lim_{x\\to c}f(x)\$ exists (i.e., [[Left Hand Limit]] = [[Right Hand Limit]]).</li>
    <li><strong>Agreement of Value & Limit:</strong> \$\$\\lim_{x\\to c}f(x)=f(c)\$\$</li>
  </ol>
  <p style="color: #e2e8f0;">These three conditions must hold true for a function to be continuous at a specific point. If any one fails, the function is discontinuous at that point.</p>

  <div style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #45aaf2;">💡 Fun Fact time!</strong><br>
    In 2024-2026 [[NDA]] papers, a recurring problem format is finding unknown variables (like \$k\$ or \$a\$ and \$b\$) that make a [[piecewise function]] continuous. The systematic strategy is simple: evaluate [[LHL]], evaluate [[RHL]], set them equal to the [[Function Value]] \$f(c)\$, and solve the algebraic equations! This is a high-frequency question type for [[UPSC]].
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">4.2. Types of Discontinuities – Classification Table</h5>
  <p style="color: #e2e8f0;">Understanding the different types of [[discontinuities]] helps in classifying functions and predicting their behavior, a common question type in [[NDA]]/[[CDS]].</p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0; color:#e2e8f0; font-size:0.9rem;">
    <thead style="background:#1f222b;">
      <tr>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">Type</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">Definition</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">Typical Example</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#2a2e3d;">
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;"><strong>[[Removable Discontinuity]]</strong> (Point)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">The limit exists, but \$f(c)\$ is either undefined or doesn't equal the limit. It's a "hole" that could be filled.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$f(x)=\\frac{x^{2}-1}{x-1}\$ at \$x=1\$. Here, \$\\lim_{x\\to1} f(x) = 2\$, but \$f(1)\$ is undefined.</td>
      </tr>
      <tr style="background:#1f222b;">
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;"><strong>[[Jump Discontinuity]]</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">[[Left-hand limit]] and [[Right-hand limit]] exist as finite values but are not equal. The graph "jumps" from one value to another.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$f(x) = \\begin{cases} x+1 & x < 0 \\\\ x-1 & x \\ge 0 \\end{cases}\$ at \$x=0\$. LHL = 1, RHL = -1.</td>
      </tr>
      <tr style="background:#2a2e3d;">
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;"><strong>[[Infinite Discontinuity]]</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">One or both [[one-sided limits]] approach \$\\pm\\infty\$. This often occurs at vertical asymptotes.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$f(x)=\\frac{1}{x}\$ at \$x=0\$. LHL = \$-\\infty\$, RHL = \$+\\infty\$.</td>
      </tr>
      <tr style="background:#1f222b;">
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;"><strong>[[Oscillatory Discontinuity]]</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">The function oscillates infinitely often as \$x\$ approaches \$c\$, so the limit does not exist. This is a type of [[Essential Discontinuity]].</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$f(x)=\\sin\\left(\\frac{1}{x}\\right)\$ at \$x=0\$. As \$x \\to 0\$, \$1/x \\to \\infty\$, and \$\\sin(1/x)\$ oscillates between -1 and 1.</td>
      </tr>
    </tbody>
  </table>
  <p style="color: #e2e8f0;">The [[Removable Discontinuity]] and [[Jump Discontinuity]] are collectively known as <strong>Discontinuities of the First Kind</strong>. [[Infinite Discontinuity]] and [[Oscillatory Discontinuity]] are known as <strong>Discontinuities of the Second Kind</strong> or [[Essential Discontinuity]]. Recognizing these types is key for theoretical questions in [[CDS]] and [[AFCAT]] exams.</p>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">5. Differentiability of a Function</h4>
  <p style="color: #e2e8f0;">[[Differentiability]] is a stronger condition than [[continuity]]. It implies that a function is not only continuous but also "smooth" at a point, meaning it has a unique tangent line.</p>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">5.1. Definition of Differentiability</h5>
  <p style="color: #e2e8f0;">A function \$f(x)\$ is [[differentiable]] at \$x = c\$ if the derivative \$f'(c)\$ exists. Mathematically, this means the following limit exists and is finite:</p>
  <p style="color: #e2e8f0; text-align: center;">\$\$f'(c) = \\lim_{h\\to0} \\frac{f(c+h) - f(c)}{h}\$\$</p>
  <p style="color: #e2e8f0;">For this limit to exist, the [[Left Hand Derivative]] (LHD) must equal the [[Right Hand Derivative]] (RHD) at \$x = c\$.</p>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li><strong>Left Hand Derivative (LHD):</strong> \$\$\\lim_{h\\to0^-} \\frac{f(c+h) - f(c)}{h}\$\$</li>
    <li><strong>Right Hand Derivative (RHD):</strong> \$\$\\lim_{h\\to0^+} \\frac{f(c+h) - f(c)}{h}\$\$</li>
  </ul>
  <p style="color: #e2e8f0;">If LHD = RHD = finite value, then the function is [[differentiable]] at \$x = c\$.</p>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">5.2. Relationship Between Continuity and Differentiability</h5>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li><strong>Critical [[UPSC]] Concept:</strong> [[Differentiability]] always implies [[Continuity]]. If a function is [[differentiable]] at a point, it must be continuous at that point.</li>
    <li>However, [[Continuity]] does NOT imply [[Differentiability]]. A classic exam staple is \$f(x) = |x - a|\$, which is [[continuous]] everywhere but not [[differentiable]] at the sharp corner \$x = a\$. This is because the LHD and RHD are different at \$x=a\$.</li>
  </ul>

  <div style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #45aaf2;">💡 Fun Fact time!</strong><br>
    Did you know that multiplying a non-[[differentiable]] [[absolute value function]] by an [[algebraic term]] can "smooth out" its sharp corner? While \$f(x) = |x - a|\$ is non-[[differentiable]] at \$x = a\$, the function \$g(x) = (x - a)|x - a|\$ is completely [[differentiable]] at \$x = a\$. This is because the \$(x-a)\$ term forces the derivative to zero at \$x=a\$, effectively removing the "sharpness". [[UPSC]] loves testing these composite properties in [[NDA]]/[[CDS]] (e.g., [[NDA 2022]] questions on differentiability of product functions).
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">5.3. Comparison: Continuity vs. Differentiability</h5>
  <p style="color: #e2e8f0;">This table summarizes the key differences and relationships, a frequent source of conceptual questions in [[NDA]] and [[CDS]] exams.</p>
  <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95rem; text-align: left; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
    <thead>
      <tr style="background-color: rgba(74,222,128,0.1);">
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Feature</th>
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Continuity at \$x = c\$</th>
        <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Differentiability at \$x = c\$</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #0f172a;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Mathematical Condition</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">\$\\lim_{x\\to c^-} f(x) = \\lim_{x\\to c^+} f(x) = f(c)\$</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">LHD = RHD (Both must be finite real numbers)</td>
      </tr>
      <tr style="background-color: #1e293b;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Geometric Interpretation</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The curve has no breaks, jumps, or holes at \$x = c\$.</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The curve is smooth with a unique, well-defined tangent at \$x = c\$ (no sharp corners or vertical tangents).</td>
      </tr>
      <tr style="background-color: #0f172a;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Interdependence</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Necessary but not sufficient for Differentiability.</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sufficient and automatically guarantees Continuity.</td>
      </tr>
      <tr style="background-color: #1e293b;">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Common Discontinuities</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Removable, Jump, Infinite, Oscillatory.</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Sharp corners (e.g., \$|x|\$), vertical tangents (e.g., \$\\sqrt[3]{x}\$ at \$x=0\$), and all points of discontinuity.</td>
      </tr>
    </tbody>
  </table>
</div>
`;

window.EXPANDED_NOTES_DATA["differentiation"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Differentiation Rules</h3>

  <p style="color: #e2e8f0;">To clear the [[NDA]] and [[CDS]] exams, you must master not just the execution, but the structural traps [[UPSC]] builds into options. In recent papers (e.g., NDA 2023, CDS 2022), questions rarely ask for simple derivatives; they test your grasp of operational boundaries and conceptual understanding, often requiring multiple rules in tandem.</p>

  <h4 style="color: #4ade80;">1. Fundamental Definition of Derivative (First Principles)</h4>
  <p style="color: #e2e8f0;">The derivative of a function <strong>f</strong> at a point <strong>x = a</strong> is formally defined as the limit of the [[difference quotient]]. This foundational concept is crucial for understanding why differentiation works and is often tested in "Statement 1 & Statement 2" style questions regarding [[differentiability]] and [[continuity]].</p>
  <p style="color: #e2e8f0;">\$\$\\displaystyle f'(a)= \\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}\$\$</p>
  <ul style="color: #e2e8f0;">
    <li><strong>f</strong> &ndash; the original function (must be defined in a neighborhood of <strong>a</strong>).</li>
    <li><strong>h</strong> &ndash; an infinitesimal increment approaching zero.</li>
    <li>The existence of this limit is equivalent to <strong>f</strong> being <strong>differentiable</strong> at <strong>a</strong>. UPSC frequently pairs this definition with [[piecewise functions]] to test differentiability at boundary points (e.g., NDA 2021, CDS 2023).</li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> A function must be [[continuous]] at a point to be differentiable at that point. However, continuity does not guarantee differentiability (e.g., \$f(x) = |x|\$ at \$x=0\$). Questions often test this distinction, especially for functions like \$|x-a|\$ or \$e^{|x|}\$.
  </div>

  <h4 style="color: #4ade80;">2. Basic Differentiation Rules</h4>
  <p style="color: #e2e8f0;">These are the foundational rules upon which all other differentiation techniques are built. Mastering them is non-negotiable for any defence aspirant.</p>

  <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:0.95rem; color: #e2e8f0;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1);">
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; text-align:left;">Concept</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; text-align:left;">Mathematical Notation</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; text-align:left;">Exam Application & Utility</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px; font-weight:bold;">Derivative (\$f'(x)\$ or \$\\frac{dy}{dx}\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$f'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Gives the exact [[instantaneous rate of change]]. Key for [[maxima and minima]], [[tangents and normals]], and [[velocity/acceleration]] problems.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px; font-weight:bold;">Differential (\$df\$ or \$dy\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$df = f'(x) \\, dx\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Represents the linear approximation of change. Critical for solving [[percentage error]] and [[approximation]] questions (e.g., NDA 2019, AFCAT 2021).</td>
      </tr>
    </tbody>
  </table>

  <ol style="color: #e2e8f0;">
    <li><strong style="color: #fbbf24;">Constant Rule</strong> &ndash; If <strong>c</strong> is a constant, then \$\$(\\frac{d}{dx}c)= 0.\$\$  
        <ul style="color: #e2e8f0;">
          <li>Reason: A constant value does not change with respect to any variable, meaning its rate of change is zero. This is often a trick in multi-step problems where a constant term might appear amidst variables.</li>
        </ul>
    </li>

    <li><strong style="color: #fbbf24;">Power Rule</strong> &ndash; For any real number \$n\$, \$\$\\displaystyle \\frac{d}{dx}\\bigl(x^{\\,n}\\bigr)= n\\,x^{\\,n-1}.\$\$  
        <ul style="color: #e2e8f0;">
          <li>Derivation from first principles (for \$n\\in\\mathbb{N}\$):  
            \$\$\\begin{aligned}
            \\frac{d}{dx}x^{n}&= \\lim_{h\\to0}\\frac{(x+h)^{n}-x^{n}}{h}\\\\
            &= \\lim_{h\\to0}\\frac{\\sum_{k= 0}^{n}\\binom{n}{k}x^{n-k}h^{k}-x^{n}}{h}\\\\
            &= \\lim_{h\\to0}\\frac{n x^{n-1}h+\\binom{n}{2}x^{n-2}h^{2}+\\cdots+h^{n}}{h}\\\\
            &= n x^{n-1}+\\underbrace{\\binom{n}{2}x^{n-2}h+\\cdots}_{\\to0}= n x^{n-1}.
            \\end{aligned}\$\$
          </li>
          <li>Constraints: \$x>0\$ when \$n\$ is a non‑integer real number (e.g., \$n=1/2\$ for \$\\sqrt{x}\$) to keep \$x^{n}\$ real. For negative integer powers (e.g., \$x^{-2}\$), \$x \\neq 0\$. UPSC sometimes tests these [[domain restrictions]].</li>
        </ul>
    </li>

    <li><strong style="color: #fbbf24;">Sum/Difference Rule</strong> &ndash; If \$u(x)\$ and \$v(x)\$ are differentiable functions, then  
      \$\$\\displaystyle \\frac{d}{dx}\\bigl[u(x)\\pm v(x)\\bigr]= u'(x)\\pm v'(x).\$\$  
      <ul style="color: #e2e8f0;">
        <li>Derivation follows directly from the [[linear properties of limits]]. This rule allows us to differentiate complex polynomials term by term.</li>
      </ul>
    </li>
  </ol>

  <h4 style="color: #4ade80;">3. General Differentiation Rules (Product, Quotient, Chain)</h4>
  <p style="color: #e2e8f0;">These rules are the workhorses for differentiating combinations of functions. UPSC often builds questions that require a careful application of these rules, sometimes nested or combined, making them a high-yield topic.</p>
  <ul style="color: #e2e8f0;">
    <li><strong style="color: #fbbf24;">Product Rule (Leibniz Rule)</strong>: \$\\frac{d}{dx}(u \\cdot v) = u'v + uv'\$ <br><span style="color: #4ade80;">*UPSC Angle:* Often paired with [[transcendental functions]] (like \$e^x\$, \$\\sin x\$) where one term vanishes after multiple derivatives (e.g., differentiating \$x^2 e^x\$ twice). Be prepared for multiple applications of this rule.</span>
      <ul style="color: #e2e8f0;">
        <li>Derivation from first principles:  
          \$\$\\begin{aligned}
          \\frac{d}{dx}[uv]&= \\lim_{h\\to0}\\frac{u(x+h)v(x+h)-u(x)v(x)}{h}\\\\
          &= \\lim_{h\\to0}\\frac{u(x+h)v(x+h)-u(x)v(x+h)+u(x)v(x+h)-u(x)v(x)}{h}\\\\
          &= \\lim_{h\\to0}\\Bigl[\\frac{u(x+h)-u(x)}{h}v(x+h)+u(x)\\frac{v(x+h)-v(x)}{h}\\Bigr]\\\\
          &= u'(x)v(x)+u(x)v'(x).
          \\end{aligned}\$\$
        </li>
        <li>Constraints: Both \$u\$ and \$v\$ must be independently differentiable at the point of interest.</li>
      </ul>
    </li>
    <li><strong style="color: #fbbf24;">Quotient Rule</strong>: \$\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}\$ <br><span style="color: #4ade80;">*UPSC Angle:* Watch out for sign-reversal traps in the numerator of the choices. Also, simplifying the expression *before* differentiating can save time and prevent errors (e.g., if \$u/v\$ simplifies to a polynomial or a simpler rational function).</span>
      <ul style="color: #e2e8f0;">
        <li>Derivation using the [[product rule]] with \$v^{-1}(x)\$:  
          \$\$\\frac{d}{dx}\\bigl[u\\cdot v^{-1}\\bigr]= u'v^{-1}+u\\bigl(-v^{-2}v'\\bigr)= \\frac{u'v-u v'}{v^{2}}.\$\$
        </li>
        <li>Constraint: \$v(x)\\neq0\$ to avoid division by zero. This is a critical [[domain consideration]] for the quotient rule.</li>
      </ul>
    </li>
    <li><strong style="color: #fbbf24;">Chain Rule</strong>: \$\\frac{d}{dx}(f(g(x))) = f'(g(x)) \\cdot g'(x)\$ <br><span style="color: #4ade80;">*UPSC Angle:* Standard questions combine 3 levels of nesting (e.g., \$\\ln(\\sin(e^x))\$). Missing the innermost derivative is the most common error. Remember to differentiate from the "outside in", layer by layer.</span>
      <ul style="color: #e2e8f0;">
        <li>Derivation using limits:  
          \$\$\\begin{aligned}
          \\frac{dy}{dx}&= \\lim_{h\\to0}\\frac{f(g(x+h))-f(g(x))}{h}\\\\
          &= \\lim_{h\\to0}\\frac{f(g(x)+\\Delta g)-f(g(x))}{\\Delta g}\\cdot\\frac{\\Delta g}{h}\\\\
          &= f'(g(x))\\cdot g'(x),
          \\end{aligned}\$\$
          where \$\\Delta g= g(x+h)-g(x)\\to0\$ as \$h\\to0\$. This assumes \$\\Delta g \\neq 0\$ for \$h\$ near 0.
        </li>
      </ul>
    </li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack!</strong><br>
    To avoid swapping terms in the [[Quotient Rule]] under exam pressure, memorize this classic rhythm:<br>
    <strong>"Low d-High minus High d-Low, over Low-Low"</strong><br>
    Where:
    <ul style="color: #e2e8f0;">
      <li><strong>Low</strong> = denominator (\$v\$)</li>
      <li><strong>High</strong> = numerator (\$u\$)</li>
      <li><strong>d</strong> = derivative</li>
    </ul>
    Formula: \$\\frac{v \\cdot du - u \\cdot dv}{v^2}\$
  </div>

  <h4 style="color: #4ade80;">4. Derivatives of Algebraic, Exponential & Logarithmic Functions</h4>
  <p style="color: #e2e8f0;">These are the core building blocks. UPSC frequently tests the constraints and domain boundaries of these functions to frame "Statement 1 & Statement 2" style conceptual questions (e.g., AFCAT 2022). Pay close attention to the conditions for validity.</p>

  <table style="width:100%; border-collapse:collapse; margin:12px 0; color: #e2e8f0;">
    <thead style="background:rgba(74,222,128,0.1);">
      <tr>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:left;">Function</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:left;">Derivative</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:left;">Conditions / Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$x^n\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$n \\cdot x^{n-1}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">Valid for all real \$n\$. If \$n\$ is non-integer, \$x>0\$. If \$n\$ is negative, \$x \\neq 0\$.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;"><strong style="color: #fbbf24;">Exponential</strong> \$e^{x}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$e^{x}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">Valid for all real \$x\$. The only function whose derivative is itself, making it unique.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$a^{x}\$, \$a>0\$, \$a\\neq1\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$a^{x}\\ln a\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">Commonly used in [[logarithmic differentiation]] for functions like \$x^x\$.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;"><strong style="color: #fbbf24;">Natural log</strong> \$\\ln x\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$\\displaystyle\\frac{1}{x}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">Strictly \$x>0\$. Watch for domain boundaries in UPSC questions, as \$\\ln x\$ is undefined for \$x \\le 0\$.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$\\log_a x\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$\\frac{1}{x \\ln a}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px;">\$x>0, a>0, a \\neq 1\$. Derived using [[change of base formula]]: \$\\log_a x = \\frac{\\ln x}{\\ln a}\$.</td>
      </tr>
    </tbody>
  </table>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS/AFCAT):</strong> In the 2024-2026 UPSC cycles, examiners have shown a strong preference for testing the derivative of \$|x|\$ and \$\\ln|x|\$. Remember: \$\\frac{d}{dx}(\\ln|x|) = \\frac{1}{x}\$ is valid for all \$x \\neq 0\$, whereas \$\\frac{d}{dx}(\\ln x) = \\frac{1}{x}\$ is only valid for \$x > 0\$. Keeping track of [[absolute values]] prevents falling into domain-restriction traps. For \$|x|\$, the derivative is \$\\frac{x}{|x|}\$ or \$\\text{sgn}(x)\$ for \$x \\neq 0\$. This is a subtle but critical distinction.
  </div>
  <p style="color: #e2e8f0;">
    For functions of the form \$y = [f(x)]^{g(x)}\$ (e.g., \$x^x\$, \$(\\sin x)^{\\cos x}\$), direct differentiation using the power rule or exponential rule is incorrect. Here, [[logarithmic differentiation]] is indispensable. The method involves taking the natural logarithm on both sides: \$\\ln y = g(x) \\ln f(x)\$. Then, differentiate implicitly with respect to \$x\$: \$\\frac{1}{y} \\frac{dy}{dx} = g'(x) \\ln f(x) + g(x) \\frac{f'(x)}{f(x)}\$. Finally, substitute \$y\$ back: \$\\frac{dy}{dx} = [f(x)]^{g(x)} \\left[ g'(x) \\ln f(x) + g(x) \\frac{f'(x)}{f(x)} \\right]\$. A classic example is \$y=x^x\$, where \$\\frac{dy}{dx} = x^x(1+\\ln x)\$. This method is a frequent topic in NDA Part I questions (e.g., NDA 2018, 2020).
  </p>

  <h4 style="color: #4ade80;">5. Trigonometric Derivatives</h4>
  <p style="color: #e2e8f0;">In trigonometric derivatives, sign errors are the primary filter used to eliminate candidates. Memorize these precisely and practice them regularly.</p>
  <ul style="color: #e2e8f0;">
    <li>\$\\frac{d}{dx}(\\sin x) = \\cos x\$</li>
    <li>\$\\frac{d}{dx}(\\cos x) = -\\sin x\$</li>
    <li>\$\\frac{d}{dx}(\\tan x) = \\sec^2 x\$</li>
    <li>\$\\frac{d}{dx}(\\sec x) = \\sec x \\tan x\$</li>
    <li>\$\\frac{d}{dx}(\\csc x) = -\\csc x \\cot x\$</li>
    <li>\$\\frac{d}{dx}(\\cot x) = -\\csc^2 x\$</li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack!</strong><br>
    To never mess up trigonometric derivative signs: <strong>"All CO-functions have CO-ld (negative) derivatives!"</strong><br>
    Any trig function starting with "<strong>co</strong>" (\$\\cos x\$, \$\\cot x\$, \$\\csc x\$) will result in a <strong>negative</strong> (-) derivative. This simple rule works every time and significantly reduces common errors under exam pressure.
  </div>

  <p style="color: #e2e8f0;">
    When dealing with [[composite trigonometric functions]], the [[Chain Rule]] is paramount. For example, if \$y = \\sin(x^2)\$, then \$\\frac{dy}{dx} = \\cos(x^2) \\cdot (2x)\$. If \$y = \\tan(e^x)\$, then \$\\frac{dy}{dx} = \\sec^2(e^x) \\cdot e^x\$. UPSC often combines these derivatives with other rules, such as the product rule, like finding the derivative of \$x \\cdot \\cos(3x)\$. The key is to break down the function into its constituent parts and apply the rules systematically. These types of questions appear frequently in both NDA and CDS exams (e.g., NDA 2020, CDS 2021).
  </p>

  <h4 style="color: #4ade80;">6. Inverse Trigonometric Derivatives</h4>
  <p style="color: #e2e8f0;">These formulas are heavily utilized in [[substitution-based differentiation]] questions in the NDA exam, where algebraic simplification must precede differentiation. Recognizing patterns like \$\\sqrt{1-x^2}\$ or \$1+x^2\$ is key to applying appropriate substitutions (e.g., \$x=\\sin\\theta\$ or \$x=\\tan\\theta\$) to simplify the expression before differentiating.</p>
  <ul style="color: #e2e8f0;">
    <li>\$\\frac{d}{dx}(\\sin^{-1} x) = \\frac{1}{\\sqrt{1 - x^2}}\$ (where \$|x| < 1\$)</li>
    <li>\$\\frac{d}{dx}(\\cos^{-1} x) = -\\frac{1}{\\sqrt{1 - x^2}}\$ (where \$|x| < 1\$)</li>
    <li>\$\\frac{d}{dx}(\\tan^{-1} x) = \\frac{1}{1 + x^2}\$</li>
    <li>\$\\frac{d}{dx}(\\cot^{-1} x) = -\\frac{1}{1 + x^2}\$</li>
    <li>\$\\frac{d}{dx}(\\sec^{-1} x) = \\frac{1}{|x|\\sqrt{x^2 - 1}}\$ (where \$|x| > 1\$)</li>
    <li>\$\\frac{d}{dx}(\\csc^{-1} x) = -\\frac{1}{|x|\\sqrt{x^2 - 1}}\$ (where \$|x| > 1\$)</li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack!</strong><br>
    Similar to direct trigonometric functions, inverse "CO-functions" also have "CO-ld" (negative) derivatives.
    <ul style="color: #e2e8f0;">
      <li>\$\\cos^{-1} x\$ is negative.</li>
      <li>\$\\cot^{-1} x\$ is negative.</li>
      <li>\$\\csc^{-1} x\$ is negative.</li>
    </ul>
    This pattern is consistent and helps reduce sign errors when recalling these formulas.
  </div>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> UPSC loves the identity \$\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}\$. Similarly, \$\\tan^{-1} x + \\cot^{-1} x = \\frac{\\pi}{2}\$ and \$\\sec^{-1} x + \\csc^{-1} x = \\frac{\\pi}{2}\$. If they ask you to differentiate \$f(x) = \\sin^{-1} x + \\cos^{-1} x\$, the answer is simply \$0\$ because it is a constant! Look for these hidden simplifications before diving into messy calculations. This specific trick appeared in NDA 2018 and CDS 2020.
  </div>

  <p style="color: #e2e8f0;">
    Many problems involving inverse trigonometric functions first require algebraic manipulation or [[trigonometric substitutions]] to simplify the expression into a standard inverse trigonometric form. For instance, to differentiate \$y = \\tan^{-1}\\left(\\frac{2x}{1-x^2}\\right)\$, it's far easier to substitute \$x = \\tan\\theta\$, which transforms the expression to \$y = \\tan^{-1}(\\tan(2\\theta)) = 2\\theta = 2\\tan^{-1}x\$. Then, \$\\frac{dy}{dx} = 2 \\cdot \\frac{1}{1+x^2}\$. Attempting to differentiate the original expression directly using the [[Chain Rule]] would be significantly more complex and error-prone. Always look for these simplification opportunities, as they are a hallmark of UPSC's problem-solving approach.
  </p>

  <h4 style="color: #4ade80;">7. Implicit Differentiation</h4>
  <p style="color: #e2e8f0;">When a function is not explicitly defined as \$y=f(x)\$ but rather as an equation involving both \$x\$ and \$y\$ (e.g., \$x^2 + y^2 = r^2\$, \$xy = \\sin y\$), we use [[implicit differentiation]]. The key is to differentiate both sides of the equation with respect to \$x\$, remembering that \$y\$ is a function of \$x\$, so we apply the [[Chain Rule]] to any term involving \$y\$. This means \$\\frac{d}{dx}(y^n) = n y^{n-1} \\frac{dy}{dx}\$ and \$\\frac{d}{dx}(\\sin y) = \\cos y \\frac{dy}{dx}\$.</p>
  <p style="color: #e2e8f0;">
    <strong>Worked Example:</strong> Find \$\\frac{dy}{dx}\$ for the equation \$x^2 + y^2 = 25\$.<br>
    Differentiating both sides with respect to \$x\$:<br>
    \$\\frac{d}{dx}(x^2) + \\frac{d}{dx}(y^2) = \\frac{d}{dx}(25)\$<br>
    Applying the Power Rule to \$x^2\$ and the Chain Rule to \$y^2\$ (since \$y\$ is a function of \$x\$):<br>
    \$2x + 2y \\frac{dy}{dx} = 0\$<br>
    Now, algebraically isolate \$\\frac{dy}{dx}\$:<br>
    \$2y \\frac{dy}{dx} = -2x\$<br>
    \$\\frac{dy}{dx} = -\\frac{2x}{2y} = -\\frac{x}{y}\$.<br>
    This technique is crucial for finding the slope of tangents to curves that are not functions (e.g., circles, ellipses) and is frequently tested in NDA and CDS (e.g., NDA 2022, CDS 2023).
  </p>
  <p style="color: #e2e8f0;">
    Another common scenario involves mixed terms like \$xy\$. Here, the [[Product Rule]] must be applied along with implicit differentiation: \$\\frac{d}{dx}(xy) = (1)y + x(\\frac{dy}{dx}) = y + x\\frac{dy}{dx}\$. Be careful with signs and algebraic manipulation when isolating \$\\frac{dy}{dx}\$. Implicit differentiation is a powerful tool for handling complex relationships between variables.
  </p>

</div>
`;

window.EXPANDED_NOTES_DATA["integration"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Standard Integration Methods</h3>

  <p style="color: #e2e8f0; margin-bottom: 16px;">
    Integration is a fundamental concept in [[calculus]] and a high-scoring topic in the [[NDA]], [[CDS]], and [[AFCAT]] Mathematics papers. It's the inverse process of differentiation, often described as finding the "antiderivative" of a function. Mastering standard integration methods is crucial not just for direct questions but also for solving problems in [[differential equations]], [[area under curves]], and [[volume of solids of revolution]]. UPSC frequently tests the application of these methods, often combining multiple techniques in a single problem.
  </p>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">1. Fundamental Concepts of Integration</h4>
  <ul style="list-style-type: disc; margin-left: 20px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>[[Indefinite Integral]]</strong> &ndash; This represents the entire family of [[antiderivatives]] of a function \$f(x)\$. It is denoted by
      <p style="font-family: 'Times New Roman', serif; font-size: 1.1em; text-align: center; margin: 12px 0; background-color: rgba(74,222,128,0.05); padding: 8px; border-radius: 4px; border: 1px solid rgba(74,222,128,0.2);">
        \$\$\\int f(x)\\,dx = F(x) + C\$\$
      </p>
      where \$F'(x) = f(x)\$ and \$C\$ is the arbitrary [[constant of integration]]. This constant arises because the derivative of any constant is zero, meaning an infinite number of functions can have the same derivative.
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Definite Integral]]</strong> &ndash; This represents the net signed area under the curve of \$f(x)\$ between specified limits \$a\$ and \$b\$. It is calculated using the [[Fundamental Theorem of Calculus (FTC)]]:
      <p style="font-family: 'Times New Roman', serif; font-size: 1.1em; text-align: center; margin: 12px 0; background-color: rgba(74,222,128,0.05); padding: 8px; border-radius: 4px; border: 1px solid rgba(74,222,128,0.2);">
        \$\$\\int_{a}^{b} f(x)\\,dx = F(b)-F(a)\$\$
      </p>
      Here, \$F(x)\$ is an antiderivative of \$f(x)\$. Unlike indefinite integrals, definite integrals yield a specific numerical value and do not include the constant \$C\$.
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Improper Integral]]</strong> &ndash; An integral with [[infinite limits of integration]] (e.g., \$\\int_{a}^{\\infty} f(x) dx\$) or where the integrand becomes unbounded within the integration interval (e.g., \$\\int_{0}^{1} \\frac{1}{\\sqrt{x}} dx\$). Its stability and value must be resolved using [[limits]]. While less frequent, questions involving improper integrals have appeared in advanced sections of [[CDS Mathematics]].</li>
  </ul>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">2. Fundamental Indefinite Integrals: Your Core Arsenal</h4>
  <p style="color: #e2e8f0;">These are the basic formulas you must know by heart. UPSC expects instant recall of these for speed and accuracy.</p>
  <ul style="list-style-type: disc; margin-left: 20px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>Algebraic Power Rule:</strong> \$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C\$ (for \$n \\neq -1\$) &mdash; <em>The algebraic backbone of NDA calculus. Remember: if \$n=-1\$, it's the next rule!</em></li>
    <li style="margin-bottom: 8px;"><strong>Logarithmic Rule:</strong> \$\\int \\frac{1}{x} dx = \\ln|x| + C\$ &mdash; <em>Watch out for domain restrictions (\$x \\neq 0\$). The absolute value is crucial for general solutions.</em></li>
    <li style="margin-bottom: 8px;"><strong>Exponential (e base):</strong> \$\\int e^x dx = e^x + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Exponential (a base):</strong> \$\\int a^x dx = \\frac{a^x}{\\ln a} + C\$ &mdash; <em>UPSC loves to trick candidates by swapping the base with variable bases or combining exponentials.</em></li>
    <li style="margin-bottom: 8px;"><strong>Sine:</strong> \$\\int \\sin x dx = -\\cos x + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Cosine:</strong> \$\\int \\cos x dx = \\sin x + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Secant Squared:</strong> \$\\int \\sec^2 x dx = \\tan x + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Cosecant Squared:</strong> \$\\int \\csc^2 x dx = -\\cot x + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Secant Tangent:</strong> \$\\int \\sec x \\tan x dx = \\sec x + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Cosecant Cotangent:</strong> \$\\int \\csc x \\cot x dx = -\\csc x + C\$</li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA 2024-2026):</strong><br>
    UPSC has repeatedly set traps using basic transcendental integration rules mixed with logarithms, such as evaluating \$\\int a^{x} e^{x} dx\$. By utilizing [[index laws]], this simplifies to \$\\int (ae)^x dx = \\frac{(ae)^x}{\\ln(ae)} + C\$. Recognizing these standard manipulations instantly saves over 90 seconds of calculation time, which is critical in competitive exams. Always simplify the integrand first!
  </div>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">3. Logarithmic Trigonometric Integrals</h4>
  <p style="color: #e2e8f0;">These integrals are derived using the [[substitution method]] and are so common that they are considered standard formulas.</p>
  <ul style="list-style-type: disc; margin-left: 20px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>Tangent:</strong> \$\\int \\tan x dx = \\ln|\\sec x| + C = -\\ln|\\cos x| + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Cotangent:</strong> \$\\int \\cot x dx = \\ln|\\sin x| + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Secant:</strong> \$\\int \\sec x dx = \\ln|\\sec x + \\tan x| + C\$</li>
    <li style="margin-bottom: 8px;"><strong>Cosecant:</strong> \$\\int \\csc x dx = \\ln|\\csc x - \\cot x| + C = \\ln|\\tan(x/2)| + C\$ &mdash; <em>The [[half-angle tangent form]] is highly tested in limit-based boundary questions, especially in [[CDS Mathematics]].</em></li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack (Trigonometric Signs):</strong><br>
    For derivatives, functions starting with 'C' (cos, cot, csc) have negative derivatives. For integrals, the *result* of integrating functions starting with 'C' (cos x, csc x, csc x cot x) is positive, while the *result* of integrating functions that *produce* a 'C' function (sin x, csc^2 x, csc x cot x) is negative. A simpler way: If the integral *starts* with a 'C' in the original function (like \$\\int \\cos x dx\$), the result is positive. If the integral *produces* a 'C' function (like \$\\int \\sin x dx = -\\cos x\$), the result is negative.
  </div>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">4. Special Integrals: Direct Formulas for Common Forms</h4>
  <p style="color: #e2e8f0;">These are crucial for quickly solving integrals involving quadratic expressions or square roots, often appearing after [[algebraic manipulation]] or [[completing the square]].</p>
  <ul style="list-style-type: disc; margin-left: 20px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;">\$\\int \\frac{1}{x^2 + a^2} dx = \\frac{1}{a} \\tan^{-1}\\left(\\frac{x}{a}\\right) + C\$</li>
    <li style="margin-bottom: 8px;">\$\\int \\frac{1}{\\sqrt{a^2 - x^2}} dx = \\sin^{-1}\\left(\\frac{x}{a}\\right) + C\$</li>
    <li style="margin-bottom: 8px;">\$\\int \\frac{1}{\\sqrt{x^2 \\pm a^2}} dx = \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right| + C\$</li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack (Special Integrals Pre-factor):</strong><br>
    To avoid the classic exam mistake of forgetting which special integral has the pre-factor \$\\frac{1}{a}\$, remember this simple rule:<br>
    <strong>"Sine is Single, Tangent takes a Friend."</strong><br>
    In \$\\sin^{-1}(x/a)\$, there is <strong>no</strong> outer \$\\frac{1}{a}\$ factor (it is "Single"). In \$\\tan^{-1}(x/a)\$, you must write the outer \$\\frac{1}{a}\$ (it brings its "Friend"). The logarithmic forms also do not have the \$\\frac{1}{a}\$ factor.
  </div>

  <p style="color: #e2e8f0; margin-top: 16px;">
    <strong>Advanced Application: [[Completing the Square]]</strong><br>
    Many NDA/CDS questions will not present these special integral forms directly. Instead, you'll encounter quadratic expressions in the denominator, like \$\\int \\frac{1}{x^2 + 4x + 5} dx\$. In such cases, the first step is to complete the square in the denominator to transform it into the form \$(x \\pm h)^2 \\pm k^2\$. For example, \$x^2 + 4x + 5 = (x^2 + 4x + 4) + 1 = (x+2)^2 + 1^2\$. Then, by substituting \$u = x+2\$, \$du = dx\$, the integral becomes \$\\int \\frac{1}{u^2 + 1^2} du\$, which is a standard \$\\frac{1}{a} \\tan^{-1}(\\frac{u}{a})\$ form. This technique is frequently tested, especially in [[NDA 2022]] and [[CDS 2023]] papers.
  </p>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">5. Primary Integration Techniques: Mastering the Strategies</h4>
  <p style="color: #e2e8f0;">UPSC questions frequently challenge your speed in choosing the correct technique. Master these triggers:</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px; margin-bottom:20px; font-size: 0.9rem; text-align: left;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1); color: #e2e8f0;">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Method</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Typical Form</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Key Idea</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">NDA Strategic Trigger</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;"><strong>[[Substitution Method]]</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$\\int f(g(x))g'(x)\\,dx\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">Set \$u = g(x) \\implies du = g'(x)dx\$.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">When you spot a function and its derivative multiplied together in the integrand.</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;"><strong>[[Integration by Parts]]</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$\\int u\\,dv\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$\\int u\\,dv = uv - \\int v\\,du\$.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">When integrating a product of distinct families (e.g., polynomial &times; exponential).</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;"><strong>[[Partial Fractions]]</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$\\int\\frac{P(x)}{Q(x)}dx\$ (deg \$P\$ &lt; deg \$Q\$)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">Decompose \$Q(x)\$ into simpler linear or quadratic factors.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">For rational functions where the denominator can be factored easily.</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;"><strong>[[Trigonometric Substitution]]</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$\\int \\sqrt{a^{2}\\pm x^{2}}\\,dx\$ or \$\\int \\frac{1}{(a^2 \\pm x^2)^{3/2}}\\,dx\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">Let \$x = a\\sin\\theta\$, \$a\\tan\\theta\$, or \$a\\sec\\theta\$.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">When radical terms prevent straightforward algebraic simplification, often involving forms like \$\\sqrt{a^2 \\pm x^2}\$ or \$\\sqrt{x^2 - a^2}\$.</td>
      </tr>
    </tbody>
  </table>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">5.1. Understanding Integration by Parts: The [[ILATE Rule]]</h5>
  <p style="color: #e2e8f0;">The formula for integration by parts is: \$\\int u \\cdot v' dx = u \\int v' dx - \\int [ u' \\int v' dx ] dx\$, or more commonly written as \$\\int u\\,dv = uv - \\int v\\,du\$. The key is choosing which part is \$u\$ and which is \$dv\$. The [[ILATE]] rule provides a hierarchy for selecting \$u\$:</p>
  <ul style="list-style-type: disc; margin-left: 20px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>I</strong> - Inverse Trigonometric Functions (\$\\sin^{-1}x, \\cos^{-1}x\$, etc.)</li>
    <li style="margin-bottom: 8px;"><strong>L</strong> - Logarithmic Functions (\$\\ln x, \\log x\$, etc.)</li>
    <li style="margin-bottom: 8px;"><strong>A</strong> - Algebraic Functions (\$x^n, x^2+1\$, etc.)</li>
    <li style="margin-bottom: 8px;"><strong>T</strong> - Trigonometric Functions (\$\\sin x, \\cos x\$, etc.)</li>
    <li style="margin-bottom: 8px;"><strong>E</strong> - Exponential Functions (\$e^x, a^x\$, etc.)</li>
  </ul>
  <p style="color: #e2e8f0;">
    The function that appears earlier in the ILATE sequence should be chosen as \$u\$. The remaining part is \$dv\$. This rule helps simplify the integral \$\\int v\\,du\$, making the integration process manageable. For example, in \$\\int x \\sin x dx\$, \$x\$ is Algebraic (A) and \$\\sin x\$ is Trigonometric (T). Since A comes before T in ILATE, we choose \$u=x\$ and \$dv=\\sin x dx\$. This ensures that \$du=dx\$ and \$v=-\\cos x\$, simplifying the second integral.
  </p>

  <div class="important-box" style="background:#1e1e30; padding:15px; margin:12px 0; border-left:4px solid #4ade80; border-radius: 4px; color: #e2e8f0;">
    <h5 style="color: #4ade80; margin-top: 0; margin-bottom: 10px;">Derivation of the Integration by Parts Formula</h5>
    <p>Derived from the standard [[product rule for differentiation]]:</p>
    <p style="font-family: 'Times New Roman', serif; font-size: 1.1em; text-align: center; margin: 12px 0; background-color: rgba(74,222,128,0.05); padding: 8px; border-radius: 4px; border: 1px solid rgba(74,222,128,0.2);">
      \$\$\\frac{d}{dx}\\bigl(u(x)v(x)\\bigr) = u'(x)v(x) + u(x)v'(x).\$\$
    </p>
    <p>Integrating both sides with respect to \$x\$ yields:</p>
    <p style="font-family: 'Times New Roman', serif; font-size: 1.1em; text-align: center; margin: 12px 0; background-color: rgba(74,222,128,0.05); padding: 8px; border-radius: 4px; border: 1px solid rgba(74,222,128,0.2);">
      \$\$\\int \\frac{d}{dx}\\bigl(u v\\bigr)\\,dx = \\int u'v\\,dx + \\int u v'\\,dx.\$\$
    </p>
    <p>Simplifying the left-hand side leads directly to the core formula:</p>
    <p style="font-family: 'Times New Roman', serif; font-size: 1.2em; text-align: center; margin: 12px 0; background-color: rgba(251,191,36,0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(251,191,36,0.3);">
      \$\$\\boxed{\\int u\\,dv = uv - \\int v\\,du}\$\$
    </p>
    <p>where \$dv = v'(x)dx\$ and \$du = u'(x)dx\$. This derivation highlights the inverse relationship between differentiation and integration.</p>
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; margin-bottom: 10px;">5.2. Trigonometric Substitution Selection Table</h5>
  <p style="color: #e2e8f0;">To eliminate confusion during high-pressure exam situations, study how different algebraic structures determine your substitution strategy:</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px; margin-bottom:20px; font-size: 0.9rem; text-align: left;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1); color: #e2e8f0;">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Radical Structure</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Correct Substitution</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Trigonometric Identity Used</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Resulting Simplified Form</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;"><strong>\$\\sqrt{a^2 - x^2}\$</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$x = a\\sin\\theta\$ (or \$a\\cos\\theta\$)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$1 - \\sin^2\\theta = \\cos^2\\theta\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$a\\cos\\theta\$</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;"><strong>\$\\sqrt{a^2 + x^2}\$</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$x = a\\tan\\theta\$ (or \$a\\sinh\\theta\$)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$1 + \\tan^2\\theta = \\sec^2\\theta\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$a\\sec\\theta\$</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;"><strong>\$\\sqrt{x^2 - a^2}\$</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$x = a\\sec\\theta\$ (or \$a\\cosh\\theta\$)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$\\sec^2\\theta - 1 = \\tan^2\\theta\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$a\\tan\\theta\$</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">6. Definite Integral Properties: The NDA Game Changers</h4>
  <p style="color: #e2e8f0;">These properties are indispensable for simplifying definite integrals, especially those involving trigonometric functions or symmetric limits. Mastering them can turn a lengthy calculation into a few quick steps.</p>
  <ul style="list-style-type: disc; margin-left: 20px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>[[King's Property]] (General Form):</strong> \$\\int_{a}^{b} f(x) dx = \\int_{a}^{b} f(a+b-x) dx\$ &mdash; <em>This is an absolute ultimate weapon for trigonometric fractions, often leading to sums that simplify to \$2I\$ or \$0\$.</em></li>
    <li style="margin-bottom: 8px;"><strong>King's Property (Special Case):</strong> \$\\int_{0}^{a} f(x) dx = \\int_{0}^{a} f(a-x) dx\$ &mdash; <em>Extremely common in NDA, used to solve integrals like \$\\int_{0}^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx\$.</em></li>
    <li style="margin-bottom: 8px;"><strong>[[Even and Odd Functions]] Property:</strong> For an integral from \$-a\$ to \$a\$:
      <ul style="list-style-type: circle; margin-left: 20px; color: #e2e8f0; margin-top: 5px;">
        <li style="margin-bottom: 4px;">\$\\int_{-a}^{a} f(x) dx = 2\\int_{0}^{a} f(x) dx\$ (if \$f(x)\$ is an [[even function]], i.e., \$f(-x) = f(x)\$).</li>
        <li style="margin-bottom: 4px;">\$\\int_{-a}^{a} f(x) dx = 0\$ (if \$f(x)\$ is an [[odd function]], i.e., \$f(-x) = -f(x)\$).</li>
      </ul>
      &mdash; <em>Always check symmetry first to instantly neutralize complex-looking integrands to 0. For example, \$\\int_{-\\pi/2}^{\\pi/2} \\sin^3 x dx = 0\$ because \$\\sin^3 x\$ is an odd function.</em>
    </li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong><br>
    When dealing with definite integrals and performing a [[substitution]], remember to change the limits of integration accordingly. This is a favorite trap in recent NDA exams (e.g., [[NDA 2021]], [[NDA 2023]]). If you substitute \$u = g(x)\$, then the new limits become \$g(a)\$ and \$g(b)\$. Failing to change the limits will lead to incorrect results, even if the integration itself is correct.
  </div>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">7. Advanced Strategies & Shortcuts for NDA Math</h4>
  <p style="color: #e2e8f0;">Speed is paramount in competitive exams. These shortcuts can save valuable time.</p>
  <ol style="list-style-type: decimal; margin-left: 20px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>Pattern Recognition Shortcut:</strong> For any integral of the form \$\\int \\frac{f'(x)}{f(x)}dx\$, write the answer directly as \$\\ln|f(x)|+C\$. This is a direct application of the substitution method where \$u=f(x)\$. Examples include \$\\int \\tan x dx = \\int \\frac{\\sin x}{\\cos x} dx = -\\int \\frac{-\\sin x}{\\cos x} dx = -\\ln|\\cos x| + C\$.</li>
    <li style="margin-bottom: 8px;"><strong>[[Tabular Integration]] (DI Method):</strong> This is an efficient shortcut for repeated integration by parts, particularly useful for integrals of the form \$\\int P(x) e^{ax} dx\$ or \$\\int P(x) \\sin(ax) dx\$, where \$P(x)\$ is a polynomial.
      <p style="color: #e2e8f0; margin-top: 8px;">
        To use the DI method, create two columns: 'D' (differentiate) and 'I' (integrate). Place \$P(x)\$ under 'D' and the remaining part (e.g., \$e^{ax}\$) under 'I'. Differentiate \$P(x)\$ repeatedly until it becomes zero. Integrate the 'I' column repeatedly. Then, multiply diagonally, alternating signs starting with positive.
      </p>
      <p style="color: #e2e8f0; margin-top: 8px;">
        <span style="font-weight: bold; color: #4ade80;">Example:</span> \$\\int x^2 e^x dx\$
      </p>
      <table style="width: auto; border-collapse: collapse; margin: 10px 0; font-size: 0.9em; color: #e2e8f0;">
        <thead>
          <tr style="background: rgba(251,191,36,0.1);">
            <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">Sign</th>
            <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">D (u)</th>
            <th style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">I (dv)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">+</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">\$x^2\$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">\$e^x\$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">-</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">\$2x\$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">\$e^x\$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">+</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">\$2\$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">\$e^x\$</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">-</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">\$0\$</td>
            <td style="padding: 8px; border: 1px solid rgba(255,255,255,0.1); text-align: center;">\$e^x\$</td>
          </tr>
        </tbody>
      </table>
      <p style="color: #e2e8f0; margin-top: 8px;">
        Result: \$+ (x^2)(e^x) - (2x)(e^x) + (2)(e^x) = x^2 e^x - 2x e^x + 2e^x + C\$. This method is significantly faster than applying the integration by parts formula multiple times.
      </p>
    </li>
  </ol>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">8. Common Student Pitfalls & UPSC Traps</h4>
  <p style="color: #e2e8f0;">Avoid these mistakes to secure your marks:</p>
  <ul style="list-style-type: disc; margin-left: 20px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>Omitting the differential (\$dx \\to du\$)</strong> during substitutions. Forgetting to convert \$dx\$ using the derivative leads to incorrect coefficient factors. E.g., if \$u = 2x\$, then \$du = 2dx\$, so \$dx = \\frac{1}{2}du\$.</li>
    <li style="margin-bottom: 8px;"><strong>Sign errors in Integration by Parts</strong>: Students routinely write \$\\int u\\,dv = uv + \\int v\\,du\$. Ensure you use a <strong>minus</strong> sign before the second integral!</li>
    <li style="margin-bottom: 8px;"><strong>Incomplete partial fraction setups</strong> for denominators containing repeated linear factors like \$(x-a)^2\$ (should be \$\\frac{A}{x-a} + \\frac{B}{(x-a)^2}\$) or irreducible quadratics like \$(x^2+px+q)\$ (should be \$\\frac{Ax+B}{x^2+px+q}\$).</li>
    <li style="margin-bottom: 8px;"><strong>Blindly using substitutions without changing boundary limits</strong> in definite integrals. This is a favorite trap in recent NDA exams, as discussed earlier.</li>
    <li style="margin-bottom: 8px;"><strong>Forgetting the [[Constant of Integration]] 'C'</strong> in indefinite integrals. While a small detail, it's mathematically incorrect to omit it and can cost marks in subjective questions or lead to confusion in option-based questions if 'C' is part of the choices.</li>
    <li style="margin-bottom: 8px;"><strong>Misinterpreting [[absolute values]]</strong> in logarithmic integrals (e.g., \$\\ln|x|\$). The absolute value is crucial to ensure the argument of the logarithm is positive, respecting its domain.</li>
  </ul>

  <div style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #45aaf2;">💡 Fun Fact time!</strong><br>
    Did you know that the [[Leibniz notation]] (\$dx\$, \$dy\$) makes substitution intuitive because differentials behave mathematically like fractions? In modern physics and engineering problems, substituting variables under the integral sign is what allows complex multi-dimensional space-time formulas to simplify into solvable expressions! The elegance of calculus lies in these fundamental notations and methods, which are the bedrock of advanced scientific and technological advancements.
  </div>
</div>
`;

window.EXPANDED_NOTES_DATA["circles-polygons"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Circles & Polygons</h3>

  <p style="color: #e2e8f0; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
    <strong>UPSC Trend Analysis (2024-2026):</strong> While the exam maintains a standard pattern, UPSC has shifted heavily toward <em>statement-based questions (Statement I & II)</em> and multi-concept questions combining [[right triangles]], [[cyclic quadrilaterals]], and ratios of [[inradius]] to [[circumradius]]. Rote application of formulas is no longer enough; you must master the [[geometric derivations]] and limiting properties.
  </p>

  <h4 style="color: #4ade80; margin-top: 24px;">1. Fundamental Definitions and Notations of Circles</h4>
  <ul>
    <li style="color: #e2e8f0; margin-bottom: 8px;"><strong>[[Circle]]</strong>: The [[locus]] of all points in a plane at a fixed distance <strong>\$r\$</strong> (the <strong>[[Radius]]</strong>) from a fixed center <strong>\$O\$</strong>. <em>Exam Tip: UPSC often tests loci problems where the locus of a moving point equidistant from a fixed point is defined as a circle. (NDA 2023, CDS 2022)</em></li>
    <li style="color: #e2e8f0; margin-bottom: 8px;"><strong>[[Diameter]]</strong> (<strong>\$d\$</strong>) = <strong>2\$r\$</strong>: The longest [[chord]] of a circle. Any [[angle subtended by a diameter]] at the circumference is always a [[right angle]] (\$90^\\circ\$)—a frequent component in CDS multi-step problems, often combined with [[Pythagorean theorem]].</li>
    <li style="color: #e2e8f0; margin-bottom: 8px;"><strong>[[Chord]]</strong>: A line segment joining any two points on the circle. The perpendicular from the center to a chord bisects the chord—this is the single most tested property in 2024-2026 numerical problems. Understanding this property is crucial for calculating chord lengths, distances from the center, and radii.</li>
    <li style="color: #e2e8f0; margin-bottom: 8px;"><strong>[[Tangent]]</strong>: A line touching the circle at exactly one point <strong>\$T\$</strong>. It is always perpendicular to the [[radius]] at the point of contact (\$OT \\perp\$ tangent). This forms a \$90^\\circ\$ angle, which is often used in conjunction with [[trigonometry]] or [[Pythagoras theorem]] in questions.</li>
    <li style="color: #e2e8f0; margin-bottom: 8px;"><strong>[[Secant]]</strong>: A line intersecting the circle at two distinct points <strong>\$A\$</strong> and <strong>\$B\$</strong>. While less common than tangents, questions involving [[secant-tangent theorem]] or [[intersecting chords theorem]] do appear.</li>
    <li style="color: #e2e8f0; margin-bottom: 8px;"><strong>[[Arc]]</strong> (<strong>\$\\widehat{AB}\$</strong>): A continuous portion of the circle's [[circumference]]. Arcs are fundamental to defining sectors and segments.</li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> Remember the "Perpendicular from Center" rule for chords. If a chord of length \$L\$ is at a distance \$d\$ from the center of a circle with radius \$r\$, then \$r^2 = d^2 + (L/2)^2\$. This [[Pythagorean relation]] is a cornerstone for many geometry problems, especially in NDA 2023 and CDS 2022 papers.
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; font-weight: 600;">Distinction: Sector vs. Segment</h5>
  <table style="width:100%; border-collapse:collapse; margin:12px 0; font-size: 14px;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1); color: #e2e8f0;">
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">Parameter</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">[[Sector]] (Sector \$AOB\$)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">[[Segment]] (Segment \$AB\$)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold; color: #e2e8f0;">Definition</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">Region bounded by two radii (\$OA, OB\$) and an arc (\$\\widehat{AB}\$).</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">Region bounded by a chord (\$AB\$) and its corresponding arc.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold; color: #e2e8f0;">Perimeter</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">\$\\text{Arc length } (\\ell) + 2r\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">\$\\text{Arc length } (\\ell) + \\text{Chord length } (2r\\sin\\frac{\\theta}{2})\$</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold; color: #e2e8f0;">Area Formula</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">\$\\frac{1}{2}r^2\\theta\$ (where \$\\theta\$ is in radians)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">\$\\frac{1}{2}r^2(\\theta - \\sin\\theta)\$ (where \$\\theta\$ is in radians)</td>
      </tr>
    </tbody>
  </table>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack: Sector vs. Segment</strong><br>
    Think of a pizza slice for a [[Sector]] – it has two straight crusts (radii) and one curved crust (arc). For a [[Segment]], imagine cutting off a piece of the pizza with a straight cut (chord) – it has one straight edge and one curved edge. The 'S' in Segment can remind you of the 'S'traight [[chord]].
  </div>

  <h4 style="color: #4ade80; margin-top: 24px;">2. Polygons: Basic Definitions and Properties</h4>
  <ul>
    <li style="color: #e2e8f0; margin-bottom: 8px;"><strong>[[Polygon]]</strong>: A closed planar figure bounded by straight-line segments. The sum of interior angles of an \$n\$-sided polygon is \$(n-2) \\times 180^\\circ\$.</li>
    <li style="color: #e2e8f0; margin-bottom: 8px;"><strong>[[Regular Polygon]]</strong>: A polygon that is both [[equilateral]] (all sides equal) and [[equiangular]] (all interior angles equal).
      <ul>
        <li style="color: #e2e8f0;">Interior angle = \$\\frac{(n-2)\\times 180^\\circ}{n}\$</li>
        <li style="color: #e2e8f0;">Exterior angle = \$\\frac{360^\\circ}{n}\$ (Sum of exterior angles is always \$360^\\circ\$)</li>
      </ul>
    </li>
  </ul>

  <div class="ncert-box" style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong>💡 Fun Fact time!</strong><br>
    In recent 2024-2026 CDS papers, UPSC has repeatedly set traps regarding the <strong>Perimeter of a Sector</strong>. Many candidates incorrectly calculate only the arc length (\$\\ell\$) and forget to add the two boundary radii (\$2r\$). Always remember: \$\\text{Perimeter of Sector} = r\\theta + 2r\$! This is a classic conceptual trap.
  </div>

  <h4 style="color: #4ade80; margin-top: 24px;">3. Core Circle Formulas – Analytical Derivations & Traps</h4>
  <ol style="color: #e2e8f0;">
    <li style="margin-bottom: 12px;"><strong>[[Circumference]]</strong>:
      <ul>
        <li style="color: #e2e8f0;">Formula: \$\$C = 2\\pi r = \\pi d\$\$</li>
        <li style="color: #e2e8f0;">Analytical Core: As the number of sides \$n\$ of an inscribed regular polygon approaches infinity (\$n \\to \\infty\$), the perimeter of the polygon converges to the circumference of the circle. This concept highlights the fundamental relationship between polygons and circles.</li>
      </ul>
    </li>
    <li style="margin-bottom: 12px;"><strong>[[Area]]</strong>:
      <ul>
        <li style="color: #e2e8f0;">Formula: \$\$A = \\pi r^{2}\$\$</li>
        <li style="color: #e2e8f0;">Integration Base: Derived in [[polar coordinates]] via:
          \$\$A = \\int_{0}^{2\\pi}\\int_{0}^{r} \\rho \\, d\\rho \\, d\\theta = \\pi r^{2}\$\$
          Understanding this derivation provides a deeper insight into why \$\\pi r^2\$ is the area.</li>
        <li style="color: #e2e8f0;"><em>UPSC Trap:</em> When circles are scaled, remember that if the radius changes by a factor of \$k\$, the perimeter changes by \$k\$, but the area changes by \$k^2\$. Recent papers (NDA 2021, CDS 2023) love asking ratio-based scaling questions. For example, if radius doubles, circumference doubles, but area quadruples.</li>
      </ul>
    </li>
    <li style="margin-bottom: 12px;"><strong>[[Length of an Arc]]</strong>:
      <ul>
        <li style="color: #e2e8f0;">\$\$\\ell = r\\theta \\quad (\\text{Constraint: } \\theta \\text{ in radians})\$\$</li>
        <li style="color: #e2e8f0;">If \$\\theta\$ is given in degrees: \$\$\\ell = \\frac{\\theta}{360^\\circ} \\times 2\\pi r\$\$
        It's critical to be mindful of the unit of angle (radians vs. degrees) as this is a common source of error. Always convert to radians for \$r\\theta\$ formulas.</li>
      </ul>
    </li>
    <li style="margin-bottom: 12px;"><strong>[[Area of a Sector]]</strong>:
      <ul>
        <li style="color: #e2e8f0;">\$\$A_{\\text{sector}} = \\frac{1}{2}r^{2}\\theta = \\frac{\\ell r}{2}\$\$</li>
        <li style="color: #e2e8f0;">This simple-looking relationship (\$A = \\frac{\\ell r}{2}\$) is highly leveraged by UPSC to bypass multi-step trigonometric calculations. If you know the arc length and radius, you can directly find the area without needing the angle.</li>
      </ul>
    </li>
    <li style="margin-bottom: 12px;"><strong>[[Area of a Segment]]</strong>:
      <ul>
        <li style="color: #e2e8f0;">\$\$A_{\\text{segment}} = \\frac{1}{2}r^{2}(\\theta-\\sin\\theta)\$\$</li>
        <li style="color: #e2e8f0;">This is derived by subtracting the area of the [[central triangle]] (\$\\frac{1}{2}r^2\\sin\\theta\$) from the area of the sector. Remember that \$\\sin\\theta\$ is for the triangle formed by the two radii and the chord, where \$\\theta\$ is the central angle.</li>
      </ul>
    </li>
  </ol>

  <h4 style="color: #4ade80; margin-top: 24px;">4. Properties of Tangents and Secants</h4>
  <p style="color: #e2e8f0; font-size: 14px; line-height: 1.6; margin-bottom: 12px;">
    Tangents and secants introduce crucial geometric relationships that are frequently tested in NDA and CDS exams. Understanding these theorems is vital for solving problems involving lengths and angles.
  </p>
  <ul style="color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>Tangent from an External Point:</strong> If two tangents are drawn to a circle from an external point \$P\$, then:
      <ul>
        <li style="color: #e2e8f0;">The lengths of the tangents from \$P\$ to the circle are equal (\$PA = PB\$).</li>
        <li style="color: #e2e8f0;">The line segment joining the center \$O\$ to \$P\$ bisects the angle between the tangents (\$\\angle APO = \\angle BPO\$).</li>
        <li style="color: #e2e8f0;">The line segment \$OP\$ also bisects the angle between the radii to the points of contact (\$\\angle AOP = \\angle BOP\$).</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>[[Tangent-Secant Theorem]]:</strong> If a tangent segment \$PT\$ and a secant segment \$PAB\$ are drawn to a circle from an external point \$P\$, then \$PT^2 = PA \\times PB\$. This is a high-yield formula for NDA (e.g., NDA 2020, 2023).</li>
    <li style="margin-bottom: 8px;"><strong>[[Intersecting Chords Theorem]]:</strong> If two chords \$AB\$ and \$CD\$ intersect inside a circle at point \$P\$, then \$AP \\times PB = CP \\times PD\$.</li>
    <li style="margin-bottom: 8px;"><strong>[[Alternate Segment Theorem]]:</strong> The angle between a tangent and a chord through the point of contact is equal to the angle in the alternate segment. This theorem is often used in complex angle-finding problems (CDS 2021).</li>
  </ul>

  <h5 style="color: #4ade80; margin-top: 20px; font-weight: 600;">Comparison: Direct vs. Transverse Common Tangents</h5>
  <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:0.9rem;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1);">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left; color: #e2e8f0;">Property</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left; color: #e2e8f0;">[[Direct Common Tangent]] (DCT)</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left; color: #e2e8f0;">[[Transverse Common Tangent]] (TCT)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0; font-weight:bold;">Definition</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">Tangents that do not intersect the line segment joining the centers of the two circles.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">Tangents that intersect the line segment joining the centers of the two circles.</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0; font-weight:bold;">Length Formula</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$L_{DCT} = \\sqrt{D^2 - (R-r)^2}\$</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">\$L_{TCT} = \\sqrt{D^2 - (R+r)^2}\$</td>
      </tr>
      <tr>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0; font-weight:bold;">Condition for existence</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">Always exists if circles are not concentric and \$D \\ge |R-r|\$.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #e2e8f0;">Exists if circles do not intersect or touch internally, i.e., \$D > R+r\$.</td>
      </tr>
    </tbody>
  </table>
  <p style="color: #e2e8f0; font-size: 14px; line-height: 1.6; margin-top: 10px;">
    Here, \$D\$ is the distance between the centers of the two circles, \$R\$ is the radius of the larger circle, and \$r\$ is the radius of the smaller circle. These formulas are frequently tested in NDA/CDS for finding lengths of belts connecting pulleys or distances between centers.
  </p>

  <h4 style="color: #4ade80; margin-top: 24px;">5. Polygonal Relations – Inscribed and Circumscribed Circles</h4>
  <div class="important-box" style="background: rgba(251,191,36,0.1); border-left: 4px solid #fbbf24; padding: 10px; margin: 15px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">UPSC Strategy Note:</strong> Questions comparing the ratio of the area of an [[in-circle]] to a [[circum-circle]] of regular polygons (triangles and hexagons) are highly frequent. Memorize these specific ratios rather than deriving them in the exam hall. (CDS 2020, NDA 2022)
  </div>

  <h5 style="color: #4ade80; margin-top: 20px; font-weight: 600;">Incircle vs. Circumcircle of Polygons</h5>
  <table style="width:100%; border-collapse:collapse; margin:12px 0; font-size: 14px;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1); color: #e2e8f0;">
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">Property</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">[[Inscribed Circle]] (Incircle)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left;">[[Circumscribed Circle]] (Circumcircle)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold; color: #e2e8f0;">Geometric Concept</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">Touches all <strong>sides</strong> of the polygon internally. Its center is the [[incenter]].</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">Passes through all <strong>vertices</strong> of the polygon. Its center is the [[circumcenter]].</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold; color: #e2e8f0;">Radius Formula (General Triangle)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">\$r = \\frac{A}{s}\$ (where \$A\$ is area, \$s\$ is the semiperimeter)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">\$R = \\frac{abc}{4A}\$ (where \$a,b,c\$ are side lengths, \$A\$ is area)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold; color: #e2e8f0;">For Regular \$n\$-gon (side \$s\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">\$r = \\frac{s}{2\\tan(\\frac{\\pi}{n})}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; color: #e2e8f0;">\$R = \\frac{s}{2\\sin(\\frac{\\pi}{n})}\$</td>
      </tr>
    </tbody>
  </table>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack: Inradius vs. Circumradius Formulas for Regular n-gons</strong><br>
    Notice the similarity: \$r = \\frac{s}{2\\tan(\\frac{\\pi}{n})}\$ and \$R = \\frac{s}{2\\sin(\\frac{\\pi}{n})}\$. The 'tan' for inradius (\$r\$) is smaller than 'sin' for circumradius (\$R\$) when \$\\theta\$ is small (or for larger \$n\$). Also, remember that the [[inradius]] is always smaller than the [[circumradius]] for any polygon. Think "<strong>I</strong>nside is <strong>T</strong>ight, <strong>C</strong>ircum is <strong>S</strong>pread" - <strong>I</strong>nradius uses <strong>T</strong>an, <strong>C</strong>ircumradius uses <strong>S</strong>in.
  </div>

  <h4 style="color: #4ade80; margin-top: 24px;">6. Comparative Table – Regular Polygons (High-Yield Ratios)</h4>
  <p style="color: #e2e8f0; font-size: 14px; margin-bottom: 8px;">The table below is critical for solving direct ratio questions (e.g., Area of Hexagon vs. Area of Incircle). These values appear repeatedly in NDA/CDS exams (e.g., CDS 2023, NDA 2021, AFCAT 2024).</p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0; font-size: 14px;">
    <thead>
      <tr style="background:rgba(74,222,128,0.1); color:#e2e8f0;">
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px;">Polygon</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px;">Sides (\$n\$)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px;">[[Circumradius]] (\$R\$)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px;">[[Inradius]] (\$r\$)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px;">Inradius to Circumradius Ratio (\$r:R\$)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:6px;">Area (\$A\$)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;"><strong>[[Equilateral Triangle]]</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:center; color: #e2e8f0;">3</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$\\frac{s}{\\sqrt{3}}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$\\frac{s}{2\\sqrt{3}}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:center; font-weight:bold; color: #4ade80;">\$1:2\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$\\frac{\\sqrt{3}}{4}s^{2}\$</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;"><strong>[[Square]]</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:center; color: #e2e8f0;">4</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$\\frac{s}{\\sqrt{2}}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$\\frac{s}{2}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:center; font-weight:bold; color: #4ade80;">\$1:\\sqrt{2}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$s^{2}\$</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;"><strong>[[Regular Hexagon]]</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:center; color: #e2e8f0;">6</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$s\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$\\frac{\\sqrt{3}}{2}s\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; text-align:center; font-weight:bold; color: #4ade80;">\$\\sqrt{3}:2\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:6px; color: #e2e8f0;">\$\\frac{3\\sqrt{3}}{2}s^{2}\$</td>
      </tr>
    </tbody>
  </table>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack!</strong><br>
    UPSC loves asking inequality questions on "fixed perimeter" polygons. Use the mnemonic:<br>
    <strong>"Clever Hens Sing Treble"</strong><br>
    For a <strong>constant perimeter</strong>, the descending order of area is:<br>
    <strong>C</strong>ircle &gt; <strong>H</strong>exagon &gt; <strong>S</strong>quare &gt; <strong>T</strong>riangle.<br>
    <em>This simple order has solved multiple theoretical statement-based questions instantly in past exams (e.g., NDA 2019, CDS 2022)!</em>
  </div>

  <h4 style="color: #4ade80; margin-top: 24px;">7. Advanced Concepts: Cyclic Quadrilaterals & Angles in a Circle</h4>
  <p style="color: #e2e8f0; font-size: 14px; line-height: 1.6; margin-bottom: 12px;">
    [[Cyclic quadrilaterals]] are a favourite topic for UPSC, often appearing in combination with other geometric properties. A quadrilateral is cyclic if all its four vertices lie on a circle.
  </p>
  <ul style="color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>Key Properties of Cyclic Quadrilaterals:</strong>
      <ul>
        <li style="color: #e2e8f0;">The sum of opposite angles is \$180^\\circ\$ (supplementary). E.g., \$\\angle A + \\angle C = 180^\\circ\$ and \$\\angle B + \\angle D = 180^\\circ\$. This is the most fundamental property.</li>
        <li style="color: #e2e8f0;">The exterior angle of a cyclic quadrilateral is equal to its interior opposite angle. This is a direct consequence of the first property and is often used in angle-finding problems.</li>
        <li style="color: #e2e8f0;">[[Ptolemy's Theorem]]: For a cyclic quadrilateral with vertices \$A, B, C, D\$ in order, \$AC \\cdot BD = AB \\cdot CD + BC \\cdot DA\$. This theorem relates the diagonals and sides and is useful for advanced problems (sometimes seen in NDA Paper II).</li>
        <li style="color: #e2e8f0;">Area of a cyclic quadrilateral (Brahmagupta's formula): \$A = \\sqrt{(s-a)(s-b)(s-c)(s-d)}\$, where \$s\$ is the semi-perimeter \$s = (a+b+c+d)/2\$.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>Angles Subtended by Arcs:</strong>
      <ul>
        <li style="color: #e2e8f0;">The [[angle subtended by an arc at the center]] is double the angle subtended by it at any point on the remaining part of the circle. (e.g., \$\\angle AOB = 2 \\times \\angle ACB\$). This is a very common concept in angle-based questions (AFCAT 2024).</li>
        <li style="color: #e2e8f0;">Angles in the same segment of a circle are equal. If \$A, B, C, D\$ are points on a circle, then \$\\angle CAD = \\angle CBD\$.</li>
        <li style="color: #e2e8f0;">The angle in a [[semicircle]] is a right angle (\$90^\\circ\$). This is a special case of the above, where the arc is a semicircle, and the central angle is \$180^\\circ\$.</li>
      </ul>
    </li>
  </ul>
  <p style="color: #e2e8f0; font-size: 14px; line-height: 1.6; margin-top: 10px;">
    <strong>Example Application (CDS 2022):</strong> A quadrilateral \$ABCD\$ is inscribed in a circle. If \$\\angle DAB = 70^\\circ\$, find \$\\angle BCD\$.
    <br><em>Solution:</em> Since \$ABCD\$ is a cyclic quadrilateral, the sum of opposite angles is \$180^\\circ\$. Therefore, \$\\angle DAB + \\angle BCD = 180^\\circ\$. Given \$\\angle DAB = 70^\\circ\$, we have \$70^\\circ + \\angle BCD = 180^\\circ\$, which means \$\\angle BCD = 110^\\circ\$. Simple application, but often combined with other angle properties in a single problem.
  </p>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (CDS/NDA):</strong> When dealing with [[cyclic quadrilaterals]], always look for opportunities to apply the "opposite angles sum to \$180^\\circ\$" rule. Many problems that seem complex can be simplified by identifying a cyclic quadrilateral and its properties. Also, be ready to use the [[Alternate Segment Theorem]] when tangents are involved.
  </div>

</div>
`;

window.EXPANDED_NOTES_DATA["area-perimeter"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">2D Figures: Area & Perimeter</h3>

  <h4 style="color: #4ade80;">1. Foundational Concepts: Understanding Area & Perimeter</h4>
  <ul style="color: #e2e8f0;">
    <li><strong>Area</strong> represents the two-dimensional space enclosed by a boundary, measured in <strong>sq units</strong>. In [[CDS]], [[UPSC]] frequently tests your ability to find areas of shaded regions by subtracting simpler shapes.</li>
    <li><strong>Perimeter</strong> is the continuous linear boundary path. <em>Crucial [[CDS/NDA Trap]]:</em> When a shape is cut or divided, the perimeter usually increases because new inner boundaries become outer boundaries, while the total area remains conserved! This concept is often tested in [[NDA 2018]] and [[CDS 2021]].</li>
    <li>All standard formulas assume a flat [[Euclidean plane]]. Always convert mixed units (e.g., meters to centimeters) at the very beginning of your calculations to avoid falling into carefully laid trap options. This [[unit conversion]] step is critical for accuracy.</li>
  </ul>

  <div style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #45aaf2;">💡 Fun Fact time!</strong><br>
    In recent [[CDS exams]] (e.g., [[CDS 2022]], [[CDS 2023]]), UPSC has shifted toward "rate-based" application questions. Fencing a field always corresponds to its <strong>perimeter</strong>, whereas turfing, tiling, or ploughing a field corresponds to its <strong>area</strong>. Keep this distinction clear to instantly identify which formula to deploy!
  </div>

  <h4 style="color: #4ade80;">2. Core 2D Polygons & Key Equations</h4>
  <ul style="color: #e2e8f0;">
    <li><strong>Square</strong> (Side \$a\$):
      <ul>
        <li>Area: \$A = a^{2}\$</li>
        <li>Perimeter: \$P = 4a\$</li>
        <li>[[Diagonal]]: \$d = a\\sqrt{2}\$ (UPSC frequently asks for the area of a [[square]] using its diagonal: \$A = \\frac{d^2}{2}\$). This is a common shortcut for [[NDA]] aspirants.</li>
      </ul>
    </li>
    <li><strong>Rectangle</strong> (Length \$l\$, Breadth \$b\$):
      <ul>
        <li>Area: \$A = l \\cdot b\$</li>
        <li>Perimeter: \$P = 2(l+b)\$</li>
        <li>Diagonal: \$d = \\sqrt{l^2 + b^2}\$ (A direct application of the [[Pythagorean theorem]]).</li>
      </ul>
    </li>
    <li><strong>Parallelogram</strong> (Base \$b\$, Height \$h\$):
      <ul>
        <li>Area: \$A = b \\cdot h\$ (where \$h\$ is the perpendicular height, not the slant side).</li>
        <li>Perimeter: \$P = 2(a+b)\$ where \$a\$ and \$b\$ are adjacent sides.</li>
      </ul>
    </li>
    <li><strong>Rhombus</strong> (Side \$s\$, Diagonals \$d_1, d_2\$):
      <ul>
        <li>Area: \$A = \\frac{d_1 \\cdot d_2}{2}\$ or \$A = s \\cdot h\$.</li>
        <li>Perimeter: \$P = 4s\$</li>
        <li><em>Critical Relation:</em> \$4s^2 = d_1^2 + d_2^2\$ (This [[Pythagorean relationship]] is highly tested when one diagonal and side are given, and you need to find the area). This appeared in [[CDS 2017]].</li>
      </ul>
    </li>
    <li><strong>Trapezium (or Trapezoid)</strong> (Parallel sides \$a, b\$, Height \$h\$, Non-parallel sides \$c, d\$):
      <ul>
        <li>Area: \$A = \\frac{1}{2}(a+b)h\$ (where \$h\$ is the perpendicular distance between parallel sides).</li>
        <li>Perimeter: \$P = a+b+c+d\$.</li>
        <li><em>Special Case:</em> For an [[isosceles trapezium]], the non-parallel sides are equal (\$c=d\$).</li>
      </ul>
    </li>
    <li><strong>Triangle</strong> (Sides \$a, b, c\$):
      <ul>
        <li>Base-Height: \$A = \\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height}\$</li>
        <li>[[Heron's Formula]]: \$A = \\sqrt{s(s-a)(s-b)(s-c)}\$ where \$s = \\frac{a+b+c}{2}\$ (the [[semi-perimeter]]). Useful when only side lengths are known.</li>
        <li>[[Equilateral Triangle]]: \$A = \\frac{\\sqrt{3}}{4}a^2\$, Height \$h = \\frac{\\sqrt{3}}{2}a\$. These are direct formulas often asked in [[AFCAT]].</li>
      </ul>
    </li>
    <li><strong>Circle</strong> (Radius \$r\$):
      <ul>
        <li>Area: \$A = \\pi r^2\$</li>
        <li>[[Circumference]]: \$C = 2\\pi r\$</li>
      </ul>
    </li>
    <li><strong>Regular Hexagon</strong> (Side \$a\$):
      <ul>
        <li>A [[regular hexagon]] can be divided into six equilateral triangles.</li>
        <li>Area: \$A = 6 \\cdot \\frac{\\sqrt{3}}{4}a^2 = \\frac{3\\sqrt{3}}{2}a^2\$.</li>
        <li>Perimeter: \$P = 6a\$.</li>
      </ul>
    </li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack: Pythagorean Triplets!</strong><br>
    To save precious seconds in CDS, memorize the core <strong>Pythagorean Triplets</strong>. They form the base of most right-angled triangles, rectangle diagonals, and rhombus problems. Knowing these can often help you bypass complex calculations.
    <ul style="color: #e2e8f0;">
      <li><strong>3 : 4 : 5</strong> (and its multiples: 6-8-10, 9-12-15). This is the most common triplet.</li>
      <li><strong>5 : 12 : 13</strong> (The classic 13-14-15 triangle splits into two right triangles of 5-12-13 and 9-12-15, a clever trick to remember!).</li>
      <li><strong>8 : 15 : 17</strong></li>
      <li><strong>7 : 24 : 25</strong></li>
      <li><strong>20 : 21 : 29</strong> (Less common, but can appear in tougher [[NDA questions]]).</li>
    </ul>
  </div>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack: Quadrilateral Area Formulas (PRTR'S)</strong><br>
    Remember the common quadrilateral area formulas with this simple mnemonic: <strong>P-R-T-R-S</strong>
    <ul style="color: #e2e8f0;">
      <li><strong>P</strong>arallelogram: Base &times; Height (B&times;H)</li>
      <li><strong>R</strong>hombus: &frac12; &times; Diagonal1 &times; Diagonal2 (&frac12; d<sub>1</sub>d<sub>2</sub>)</li>
      <li><strong>T</strong>rapezium: &frac12; &times; (Sum of parallel sides) &times; Height (&frac12; (a+b)h)</li>
      <li><strong>R</strong>ectangle: Length &times; Breadth (L&times;B)</li>
      <li><strong>S</strong>quare: Side &times; Side (a<sup>2</sup>)</li>
    </ul>
    Think of it as "PRTR's great for areas!" This covers the most frequently tested quadrilaterals.
  </div>

  <h4 style="color: #4ade80;">3. Comparative Analysis for CDS/NDA Geometry</h4>
  <p style="color: #e2e8f0;">UPSC frequently tests the relationship between [[inscribed and circumscribed circles]], as well as the unique traits of geometric figures. Use the tables below to quickly master these high-yield distinctions.</p>

  <h5 style="color: #4ade80; margin-top: 15px;">Table 1: Inradius (\$r\$) vs. Circumradius (\$R\$)</h5>
  <table style="width:100%; border-collapse:collapse; margin:12px 0; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0; font-size:0.9rem;">
    <thead style="background:rgba(74,222,128,0.1);">
      <tr>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left; color: #4ade80;">Polygon Type</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left; color: #4ade80;">Inradius (\$r\$) Formula</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left; color: #4ade80;">Circumradius (\$R\$) Formula</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left; color: #4ade80;">Key Ratio (\$r : R\$)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;"><strong>Equilateral Triangle</strong> (side \$a\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$r = \\frac{a}{2\\sqrt{3}}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$R = \\frac{a}{\\sqrt{3}}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold; color:#4ade80;">\$1 : 2\$ (Area ratio is \$1 : 4\$)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;"><strong>Right-Angled Triangle</strong> (legs \$p, b\$, hypotenuse \$h\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$r = \\frac{p + b - h}{2}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$R = \\frac{h}{2}\$ (Midpoint of hypotenuse)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">Variable based on sides</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;"><strong>Regular Hexagon</strong> (side \$a\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$r = \\frac{\\sqrt{3}}{2}a\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$R = a\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold; color:#4ade80;">\$\\sqrt{3} : 2\$</td>
      </tr>
    </tbody>
  </table>

  <h5 style="color: #4ade80; margin-top: 20px;">Table 2: Sector vs. Segment of a Circle</h5>
  <table style="width:100%; border-collapse:collapse; margin:12px 0; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0; font-size:0.9rem;">
    <thead style="background:rgba(74,222,128,0.1);">
      <tr>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left; color: #4ade80;">Feature</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left; color: #4ade80;">Sector (Pie Slice)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:8px; text-align:left; color: #4ade80;">Segment (Region cut by Chord)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold;">Definition</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">Region bounded by two radii and an [[arc]].</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">Region bounded by a [[chord]] and an arc.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold;">Area Formula</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$A = \\frac{\\theta}{360} \\cdot \\pi r^2\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$A = \\text{Area of Sector} - \\text{Area of Triangle} = \\frac{\\theta}{360}\\pi r^2 - \\frac{1}{2}r^2\\sin\\theta\$</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px; font-weight:bold;">Boundary Perimeter</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$P = 2r + \\text{Arc Length} = 2r + \\frac{\\theta}{360}\\cdot 2\\pi r\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:8px;">\$P = \\text{Chord Length} + \\text{Arc Length} = 2r\\sin(\\frac{\\theta}{2}) + \\frac{\\theta}{360}\\cdot 2\\pi r\$</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #4ade80;">4. Derivations & Geometric Intuition</h4>
  <div style="background:rgba(74,222,128,0.08);padding:12px;margin:12px 0;border-left:4px solid #4ade80; color: #e2e8f0;">
    <strong style="color: #4ade80;">Deriving the Area of a Parallelogram from First Principles</strong>
    <p>By placing the [[parallelogram]] on the coordinate plane with vertices \$O(0,0)\$, \$A(b,0)\$, \$B(b+u,h)\$, and \$C(u,h)\$, we can decompose it into a central rectangle of area \$b \\cdot h\$ and two identical right triangles on either side. Translating one triangle to the opposite side yields a perfect rectangle of dimensions \$b \\times h\$, proving that the slanted side has no direct scaling effect on the total area. This visual proof helps solidify the formula \$A = b \\cdot h\$.</p>
  </div>

  <div style="background:rgba(74,222,128,0.08);padding:12px;margin:12px 0;border-left:4px solid #4ade80; color: #e2e8f0;">
    <strong style="color: #4ade80;">Proof of Heron’s Formula</strong>
    <p>Using the [[Law of Cosines]], we express \$\\cos\\gamma = \\frac{a^2 + b^2 - c^2}{2ab}\$. Substituting this into the [[trigonometric area formula]] \$A = \\frac{1}{2}ab\\sin\\gamma\$ via the identity \$\\sin\\gamma = \\sqrt{1 - \\cos^2\\gamma}\$ yields the algebraic expansion of the semiperimeter terms, simplifying directly to \$A = \\sqrt{s(s-a)(s-b)(s-c)}\$. This shows why Heron's formula inherently relies on the [[triangle inequality theorem]] (\$a+b > c\$). While direct derivation isn't tested, understanding its origin provides deeper conceptual clarity for complex problems.</p>
  </div>

  <div style="background-color: rgba(69, 170, 242, 0.1); border-left: 4px solid #45aaf2; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #45aaf2;">💡 Fun Fact time!</strong><br>
    Did you know that UPSC frequently tests the <strong>percentage change in area</strong> when dimensions are scaled? If the radius of a [[circle]] (or side of a square) increases by \$x\\%\$, the new area increases by \$\\left(2x + \\frac{x^2}{100}\\right)\\%\$. For instance, a \$20\\%\$ increase in side length results in a \$2(20) + \\frac{400}{100} = 44\\%\$ increase in area! Keep this shortcut in your toolkit, especially for [[AFCAT]] and [[NDA]] exams where speed is key. This formula is often called the [[Successive Percentage Change]] formula.
  </div>

  <h4 style="color: #4ade80;">5. Composite and Sub-divided Figures</h4>
  <ul style="color: #e2e8f0;">
    <li><strong>Symmetry Rules for Pathways:</strong> When a uniform path or track is constructed around a rectangular park, the total area of the path can be calculated quickly.
      <ul>
        <li>For an <strong>outer path</strong> of width \$w\$ around a rectangle of length \$l\$ and breadth \$b\$: \$A_{\\text{path}} = (l+2w)(b+2w) - l \\cdot b\$.</li>
        <li>For an <strong>inner path</strong> of width \$w\$ inside a rectangle of length \$l\$ and breadth \$b\$: \$A_{\\text{path}} = l \\cdot b - (l-2w)(b-2w)\$.</li>
        <li>For a <strong>cross path</strong> (two paths, one along length, one along breadth, intersecting in the middle) of width \$w\$: \$A_{\\text{path}} = w(l+b-w)\$.</li>
      </ul>
      These [[pathway problems]] are extremely common in [[CDS]] and [[NDA]] papers (e.g., [[NDA 2019]], [[CDS 2020]]).
    </li>
    <li><strong>Shaded Quadrant Regions:</strong> In questions featuring a square of side \$a\$ with [[quarter circles]] drawn from its vertices, the central leaf-shaped overlap area is a recurring favorite. Memorize this exact result: <br>
      <span style="display:block; margin: 8px 0; font-weight:bold; color:#fbbf24;">Area of the Leaf = \$(\\frac{\\pi}{2} - 1)a^2\$</span>. <br>
      This can be approximated as \$\\frac{4}{7}a^2\$ if \$\\pi \\approx \\frac{22}{7}\$ (since \$\\frac{11}{7} - 1 = \\frac{4}{7}\$).
    </li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS): Similar Figures!</strong><br>
    If two [[geometric figures]] are similar (e.g., two squares, two circles, two equilateral triangles, or any two polygons with proportional sides and equal angles), their properties scale predictably:
    <ul style="color: #e2e8f0;">
      <li>If the ratio of their corresponding sides (or radii) is \$k_1 : k_2\$,</li>
      <li>Then the ratio of their perimeters will also be \$k_1 : k_2\$.</li>
      <li>But the ratio of their areas will be \$k_1^2 : k_2^2\$.</li>
    </ul>
    This concept is a guaranteed question type in [[NDA]] and [[CDS]] almost every year (e.g., "If the ratio of the areas of two similar triangles is 9:16, what is the ratio of their altitudes?"). The answer would be 3:4.
  </div>

  <h4 style="color: #4ade80;">6. Common Student Pitfalls (UPSC Traps)</h4>
  <ul style="color: #e2e8f0;">
    <li><strong>Radius vs. Diameter:</strong> UPSC frequently provides the <em>[[diameter]]</em> in word problems. Students in a rush plug this directly into \$\\pi r^2\$ instead of halving it first, leading to an area that is exactly 4 times too large. Always double-check if it's radius or diameter!</li>
    <li><strong>Perimeter of Semicircles:</strong> The perimeter of a [[semicircle]] is NOT just half of a circle's circumference (\$\\pi r\$). It includes the flat diameter base! Thus, \$P_{\\text{semicircle}} = \\pi r + 2r = r(\\pi + 2)\$. This is a very common trap in [[AFCAT]] and [[NDA]] exams.</li>
    <li><strong>Ignoring Height Reference:</strong> In a triangle, if the [[altitude]] is drawn to side \$a\$, the area is \$\\frac{1}{2} a \\cdot h_a\$. Using \$h_a\$ with side \$b\$ or \$c\$ is a guaranteed path to a wrong answer. Always ensure the height corresponds perpendicularly to the chosen base.</li>
    <li><strong>Units Mismatch:</strong> As mentioned, always convert all dimensions to a single unit (e.g., all meters or all centimeters) before calculation. UPSC options often include answers for mixed units, tempting you to pick the wrong one.</li>
  </ul>

  <h4 style="color: #4ade80;">7. Worked Example 1: Composite Paths (CDS Style)</h4>
  <p style="color: #e2e8f0;"><strong>Problem:</strong> A rectangular park is 60 meters long and 40 meters wide. A path 2 meters wide is built inside the park along its boundary. Find the area of the path and the cost of paving it at Rs. 50 per square meter.</p>
  <p style="color: #e2e8f0;"><strong>Solution:</strong></p>
  <ol style="color: #e2e8f0;">
    <li><strong>Identify the given dimensions:</strong>
      <ul>
        <li>Length of park (\$L\$) = 60 m</li>
        <li>Width of park (\$B\$) = 40 m</li>
        <li>Width of path (\$w\$) = 2 m</li>
      </ul>
    </li>
    <li><strong>Calculate the area of the outer rectangle (the park):</strong>
      <ul>
        <li>\$A_{\\text{outer}} = L \\times B = 60 \\times 40 = 2400 \\text{ m}^2\$</li>
      </ul>
    </li>
    <li><strong>Calculate the dimensions of the inner rectangle (park without path):</strong>
      <ul>
        <li>Since the path is *inside* and 2m wide, it reduces the length and width by \$2 \\times 2 = 4\$ meters in total (2m from each side).</li>
        <li>New Length (\$L'\$) = \$L - 2w = 60 - (2 \\times 2) = 60 - 4 = 56 \\text{ m}\$</li>
        <li>New Width (\$B'\$) = \$B - 2w = 40 - (2 \\times 2) = 40 - 4 = 36 \\text{ m}\$</li>
      </ul>
    </li>
    <li><strong>Calculate the area of the inner rectangle:</strong>
      <ul>
        <li>\$A_{\\text{inner}} = L' \\times B' = 56 \\times 36 = 2016 \\text{ m}^2\$</li>
      </ul>
    </li>
    <li><strong>Calculate the area of the path:</strong>
      <ul>
        <li>\$A_{\\text{path}} = A_{\\text{outer}} - A_{\\text{inner}} = 2400 - 2016 = 384 \\text{ m}^2\$</li>
      </ul>
    </li>
    <li><strong>Calculate the cost of paving the path:</strong>
      <ul>
        <li>Cost per square meter = Rs. 50</li>
        <li>Total Cost = \$A_{\\text{path}} \\times \\text{Cost per m}^2 = 384 \\times 50 = \\text{Rs. } 19200\$</li>
      </ul>
    </li>
  </ol>
  <p style="color: #e2e8f0;"><strong>Final Answer:</strong> The area of the path is 384 m<sup>2</sup>, and the cost of paving it is Rs. 19200. This type of problem has been seen in [[CDS 2019]] and [[NDA 2022]].</p>

  <h4 style="color: #4ade80;">8. Advanced Concepts & Applications</h4>
  <p style="color: #e2e8f0;">Beyond basic formulas, UPSC often delves into more conceptual aspects or combinations of figures. Understanding these nuances can give you an edge.</p>
  <h5 style="color: #4ade80; margin-top: 15px;">Area Maximization/Minimization</h5>
  <p style="color: #e2e8f0;">A frequently tested concept involves the relationship between area and perimeter. For a given perimeter, the [[circle]] encloses the maximum possible area among all 2D figures. Conversely, for a given area, the circle has the minimum possible perimeter. This principle extends to regular polygons: among polygons with the same number of sides and same perimeter, the regular polygon has the maximum area. For instance, an equilateral triangle has a larger area than any other triangle with the same perimeter. This conceptual understanding is useful for questions that don't require direct calculation but test your grasp of geometric properties, often appearing in [[AFCAT]] reasoning sections or [[NDA]] conceptual questions.</p>

  <h5 style="color: #4ade80; margin-top: 15px;">Area of a Polygon using Coordinate Geometry (Shoelace Formula)</h5>
  <p style="color: #e2e8f0;">While less common for direct calculation in NDA/CDS, understanding the [[Shoelace Formula]] (also known as Gauss's Area Formula) can be a powerful tool for complex polygons where vertices are given as coordinates. For a polygon with vertices \$(x_1, y_1), (x_2, y_2), \\dots, (x_n, y_n)\$ listed in counterclockwise or clockwise order, the area \$A\$ is given by:</p>
  <p style="color: #e2e8f0;">\$A = \\frac{1}{2} | (x_1y_2 + x_2y_3 + \\dots + x_ny_1) - (y_1x_2 + y_2x_3 + \\dots + y_nx_1) |\$</p>
  <p style="color: #e2e8f0;">This formula highlights the connection between [[geometry]] and [[coordinate systems]]. Although direct application might be rare, questions might implicitly test your understanding of how coordinates define shapes and their properties.</p>

  <h5 style="color: #4ade80; margin-top: 15px;">Area of a Ring (Annulus)</h5>
  <p style="color: #e2e8f0;">A common problem involves finding the area of a circular path or track, which is essentially an [[annulus]] (ring). If you have two concentric circles with outer radius \$R\$ and inner radius \$r\$, the area of the ring is:</p>
  <p style="color: #e2e8f0;">\$A_{\\text{ring}} = \\pi R^2 - \\pi r^2 = \\pi (R^2 - r^2)\$</p>
  <p style="color: #e2e8f0;">This is often seen in questions about running tracks or circular lawns with paths, directly testing your ability to apply basic circle formulas to [[composite figures]]. Questions involving the area of a path around a circular field were observed in [[CDS 2018]] and [[NDA 2021]].</p>

</div>
`;

window.EXPANDED_NOTES_DATA["surface-area-volume"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">3D Solids: Surface Area & Volume</h3>

  <p style="color: #e2e8f0;">In the [[UPSC CDS]] and [[NDA examinations]], [[3D Mensuration]] is a guaranteed scoring area. Rather than testing rote-memorization of basic shapes, the recent 2024-2026 papers reveal a clear trend: UPSC tests <strong>[[dimensional scaling]] (percentage changes)</strong>, <strong>[[melting and recasting]] (conservation of volume)</strong>, and <strong>combinations of nested solids</strong> (e.g., a [[sphere]] inscribed inside a [[cylinder]] or a [[cone]] carved out of a [[cube]]). Mastering these concepts is crucial for securing marks.</p>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">Fundamental Concepts & Exam Angles</h4>
  <ul style="color: #e2e8f0; list-style-type: disc; margin-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>[[Surface Area]] (SA)</strong>: The sum of the areas of all bounding faces. UPSC frequently tests the distinction between <em>[[Lateral Surface Area]] (LSA) / [[Curved Surface Area]] (CSA)</em> and <em>[[Total Surface Area]] (TSA)</em>. For example, if a [[hemisphere]] is carved out of a cylinder, the TSA of the *remaining* solid increases even though volume decreases! This is a classic [[UPSC]] trap (CDS 2023).</li>
    <li style="margin-bottom: 8px;"><strong>[[Volume]] (V)</strong>: The space enclosed by the solid. Crucial exam rule: <strong>During melting and recasting, the total volume remains constant</strong> (\$V_{\\text{initial}} = V_{\\text{final}}\$). This principle is fundamental for problems involving converting one solid into another, like melting a large sphere to form smaller spheres (NDA 2022).</li>
    <li style="margin-bottom: 8px;"><strong>[[Base Area]] (B) & [[Perimeter]] (P)</strong>: The geometric foundation. Right [[prisms]] and [[pyramids]] use the perimeter and area of their polygon bases (triangles, hexagons, squares) to generalize formulas. Always identify the base shape first.</li>
    <li style="margin-bottom: 8px;"><strong>[[Height]] (h) vs. [[Slant Height]] (l)</strong>: The ultimate trap in UPSC papers. Volume calculations <em>always</em> require perpendicular height (\$h\$), while lateral area calculations for cones and pyramids require slant height (\$l\$). Mixing these up is the most common cause of negative marks. Remember the [[Pythagorean theorem]] (\$l^2 = r^2 + h^2\$ for cones, or \$l^2 = h^2 + (\\text{apothem})^2\$ for pyramids) to find the missing dimension.</li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> Always draw a rough sketch if the problem involves complex combinations or carving. Visualizing how surfaces are added or removed is key to correctly calculating the [[Total Surface Area]] of composite solids. For example, when a hemisphere is placed on a cylinder, the base area of both solids is *covered* and thus not part of the final TSA.
  </div>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack: LSA vs. TSA for Cylinders/Cones</strong><br>
    Think of a <strong>C</strong>ylinder as a <strong>C</strong>an. Its <strong>C</strong>urved Surface Area (CSA) is \$2\\pi rh\$ (the label). Its Total Surface Area (TSA) is the label PLUS the two circular ends: \$2\\pi rh + 2(\\pi r^2) = 2\\pi r(h+r)\$.<br>
    For a <strong>C</strong>one, its <strong>C</strong>urved Surface Area (CSA) is \$\\pi rl\$ (the ice cream part). Its Total Surface Area (TSA) is the ice cream part PLUS the circular base: \$\\pi rl + \\pi r^2 = \\pi r(l+r)\$.
  </div>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">Formulas for Common Solids</h4>
  <table style="width:100%; border-collapse:collapse; margin:12px 0; color: #e2e8f0;">
    <thead>
      <tr style="background: rgba(74,222,128,0.1);">
        <th style="border:1px solid rgba(255,255,255,0.1);padding:10px; text-align:left;">Solid</th>
        <th style="border:1px solid rgba(255,255,255,0.1);padding:10px; text-align:left;">Surface Area Formula (TSA)</th>
        <th style="border:1px solid rgba(255,255,255,0.1);padding:10px; text-align:left;">Volume Formula (V)</th>
        <th style="border:1px solid rgba(255,255,255,0.1);padding:10px; text-align:left;">UPSC Exam Focus Area</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Cube]]</strong> (side 'a')</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = 6a^{2}\$ (LSA \$= 4a^2\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = a^{3}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Diagonal length \$d = a\\sqrt{3}\$ is often given to find \$V\$ or \$S\$. (NDA 2021)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Cuboid]]</strong> (l, w, h)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = 2(lw + lh + wh)\$ (LSA \$= 2h(l+w)\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = lwh\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Longest rod length in a room \$= \\sqrt{l^2 + w^2 + h^2}\$. (CDS 2020)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Sphere]]</strong> (radius 'r')</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = 4\\pi r^{2}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = \\dfrac{4}{3}\\pi r^{3}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Commonly melted to form \$n\$ small lead shots (\$V_{\\text{large}} = n \\cdot V_{\\text{small}}\$). (NDA 2023)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Cylinder]]</strong> (r, h)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = 2\\pi r (r + h)\$<br><small style="color: #e2e8f0;">(CSA \$= 2\\pi rh\$)</small></td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = \\pi r^{2} h\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Comparing volumes when a rectangular sheet is rolled along its length vs. breadth. (CDS 2024)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Cone]]</strong> (r, h, l)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = \\pi r (r + l)\$<br><small style="color: #e2e8f0;">where \$l = \\sqrt{r^{2}+h^{2}}\$</small></td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = \\dfrac{1}{3}\\pi r^{2} h\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Sector of a circle folded into a cone. Sector radius \$=\$ slant height (\$l\$). (NDA 2023)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Hemisphere]]</strong> (radius 'r')</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = 3\\pi r^{2}\$ (including base)<br><small style="color: #e2e8f0;">(CSA \$= 2\\pi r^2\$)</small></td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = \\dfrac{2}{3}\\pi r^{3}\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Toy problems: Hemisphere surmounted by a cone or cylinder. (CDS 2022)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Frustum]] of a Cone</strong> (\$r_1, r_2, h, l\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = \\pi (r_{1}+r_{2})l + \\pi r_{1}^{2} + \\pi r_{2}^{2}\$<br><small style="color: #e2e8f0;">where \$l = \\sqrt{(r_1-r_2)^2 + h^2}\$</small></td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = \\dfrac{1}{3}\\pi h (r_{1}^{2}+r_{2}^{2}+r_{1}r_{2})\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Bucket problems. Often tests ratio of the cut cone to the original cone. (NDA 2020)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Pyramid]]</strong> (regular)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = B + \\dfrac{1}{2}Pl\$<br><small style="color: #e2e8f0;">\$B\$ = base area, \$P\$ = perimeter of base, \$l\$ = slant height</small></td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = \\dfrac{1}{3}Bh\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Standard square or equilateral triangle bases in CDS. (CDS 2023)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Prism]]</strong> (regular)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$S = 2B + Ph\$<br><small style="color: #e2e8f0;">\$B\$ = base area, \$P\$ = perimeter of base</small></td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = Bh\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Often involves triangular or hexagonal bases. (NDA 2024)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;"><strong>[[Ellipsoid]]</strong> (a, b, c)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Approx. \$S \\approx 4\\pi \\left(\\dfrac{a^{p}b^{p}+a^{p}c^{p}+b^{p}c^{p}}{3}\\right)^{1/p}\$ (complex for exam)</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">\$V = \\dfrac{4}{3}\\pi abc\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1);padding:8px;">Mainly tested as conceptual or volume-ratio statement questions. (CDS 2019)</td>
      </tr>
    </tbody>
  </table>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">💡 Memory Hack for Frustum Volume!</strong><br>
    Struggling to remember \$r_{1}^{2}+r_{2}^{2}+r_{1}r_{2}\$? Think of it as the expansion of \$(r_1 - r_2)^2\$ but with a <strong>positive sign</strong> and <strong>no coefficient of 2</strong> on the middle term.
    <br>It's simply: <strong>[Square of Base 1] + [Square of Base 2] + [Their Product]</strong>.
  </div>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #4ade80;">💡 Concept Corner: Dimensional Scaling</strong><br>
    Did you know that in recent CDS exams, UPSC asked a question on the percentage change in the volume of a sphere when its radius is increased by \$10\\%\$?
    Using the compounding formula \$(1 + \\text{percentage change})^3 - 1\$ saves you from executing lengthy calculations. For a \$10\\%\$ increase, the factor is \$1.1\$. So, \$(1.1)^3 - 1 = 1.331 - 1 = 0.331\$, which is \$33.1\\%\$. Volume scaling always follows the cubic ratio of the linear scale factor: \$V_2/V_1 = (r_2/r_1)^3\$. Similarly, surface area scales by the square of the linear scale factor: \$SA_2/SA_1 = (r_2/r_1)^2\$. This is a high-yield concept for both NDA and CDS.
  </div>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">Structural Comparisons: Prisms vs. Pyramids & Circular Solids</h4>
  <p style="color: #e2e8f0;">To master general formula patterns, recognize that [[cylinders]] are merely circular [[prisms]], and [[cones]] are circular [[pyramids]]. This structural grouping prevents memorization confusion during exam pressure and helps derive formulas if you forget them.</p>

  <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:0.9rem; text-align:left; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
    <thead>
      <tr style="background: rgba(74,222,128,0.1); color: #4ade80;">
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Feature</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Prism (Polygon Base)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Cylinder (Circular Base)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Pyramid (Polygon Base)</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Cone (Circular Base)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Base Area (\$B\$)</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Area of Triangle, Square, Hexagon, etc.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$\\pi r^2\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">Area of Triangle, Square, etc.</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$\\pi r^2\$</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Volume (\$V\$)</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$B \\times h\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$\\pi r^2 h\$ (\$B \\times h\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$\\frac{1}{3} \\times B \\times h\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$\\frac{1}{3} \\pi r^2 h\$</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Lateral / Curved Area</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$P \\times h\$ (Perimeter of Base \$\\times\$ height)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$2\\pi r h\$ (Perimeter \$\\times\$ height)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$\\frac{1}{2} \\times P \\times l\$ (Perimeter \$\\times\$ slant height)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$\\pi r l\$ (\$\\frac{1}{2} \\times 2\\pi r \\times l\$)</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Total Surface Area</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$2B + P h\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$2\\pi r^2 + 2\\pi r h\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$B + \\frac{1}{2} P l\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$\\pi r^2 + \\pi r l\$</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">Advanced Concepts & Exam Applications</h4>

  <h5 style="color: #4ade80; margin-top: 16px; margin-bottom: 8px;">1. Melting and Recasting (Volume Conservation)</h5>
  <p style="color: #e2e8f0;">One of the most frequently tested concepts in both NDA and CDS is the idea that when a solid is melted and recast into another shape, its volume remains constant. This applies even if multiple smaller solids are formed from a larger one, or vice-versa. For example, if a metallic sphere of radius R is melted and recast into 'n' identical smaller spheres of radius 'r', then the volume of the large sphere must equal the sum of the volumes of the 'n' small spheres. That is, \$\\frac{4}{3}\\pi R^3 = n \\times \\frac{4}{3}\\pi r^3\$, which simplifies to \$R^3 = n r^3\$. This principle is also used when a solid is reshaped, like a cylindrical piece of clay molded into a cone.</p>

  <h5 style="color: #4ade80; margin-top: 16px; margin-bottom: 8px;">2. Combinations of Solids & Carving Problems</h5>
  <p style="color: #e2e8f0;">UPSC often presents problems where two or more solids are combined or one solid is carved out of another. For volume calculations, this is straightforward: simply add or subtract the individual volumes. However, for [[Surface Area]] calculations, it's more nuanced. When solids are joined, the contact surfaces are no longer exposed and thus are not part of the total surface area. When a solid is carved out, new surfaces are often exposed, increasing the total surface area. For instance, carving a conical cavity out of a cylinder will add the CSA of the cone to the remaining surface area of the cylinder, while removing the base area of the cone from the cylinder's top surface. Careful visualization is key here.</p>

  <h5 style="color: #4ade80; margin-top: 16px; margin-bottom: 8px;">3. Derivations & Advanced Visualizations (NDA Calculus Angle)</h5>
  <p style="color: #e2e8f0;">For NDA candidates, volume formulas aren't just memorized—they are derived from coordinate rotation using [[integration]]. UPSC frequently designs conceptual questions based on these foundational structures.</p>

  <ol style="color: #e2e8f0; list-style-type: decimal; margin-left: 20px;">
    <li style="margin-bottom: 8px;"><strong>Sphere Surface Area (Flux Concept)</strong>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">Consider a thin spherical shell of radius \$r\$ and thickness \$dr\$. Its volume is \$dV = 4\\pi r^{2} dr\$.</li>
        <li style="margin-bottom: 4px;">The rate of change of volume with respect to radius gives the surface area: \$\\displaystyle \\lim_{dr\\to0}\\frac{dV}{dr}= 4\\pi r^{2}\$.</li>
        <li style="margin-bottom: 4px;"><strong>Exam take-away:</strong> This direct [[calculus]] connection is why differentiating a sphere's Volume (\$\\frac{4}{3}\\pi r^3\$) with respect to \$r\$ yields its Surface Area (\$4\\pi r^2\$). This is a powerful mnemonic for NDA aspirants.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>Volume of a Cone (Solid of Revolution)</strong>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">In NDA, a cone of height \$h\$ and radius \$r\$ can be imagined by rotating the line \$y = \\frac{r}{h}x\$ around the x-axis from \$x = 0\$ to \$x = h\$.</li>
        <li style="margin-bottom: 4px;">The volume of the resulting [[solid of revolution]] is calculated using [[disk integration]]:</li>
        <p style="color: #e2e8f0; margin-top: 8px; margin-bottom: 8px;">\$\$V = \\int_{0}^{h} \\pi [y(x)]^2 dx = \\int_{0}^{h} \\pi \\left(\\frac{r}{h}x\\right)^{2} dx = \\pi\\frac{r^{2}}{h^{2}}\\left[\\frac{x^{3}}{3}\\right]_{0}^{h} = \\frac{1}{3}\\pi r^{2}h.\$\$</p>
        <li style="margin-bottom: 4px;">Understanding this derivation helps in conceptual questions where a different function might be rotated, or limits of integration are changed.</li>
      </ul>
    </li>
    <li style="margin-bottom: 8px;"><strong>Volume of a Frustum of a Cone (NDA Specific)</strong>
      <ul style="list-style-type: circle; margin-left: 20px;">
        <li style="margin-bottom: 4px;">The frustum can be visualized as a larger cone (radius \$R_1\$, height \$H_1\$) from which a smaller cone (radius \$R_2\$, height \$H_2\$) has been cut off. The height of the frustum is \$h = H_1 - H_2\$.</li>
        <li style="margin-bottom: 4px;">Using similar triangles, we can relate the radii and heights: \$\\frac{R_1}{H_1} = \\frac{R_2}{H_2}\$.</li>
        <li style="margin-bottom: 4px;">\$V_{\\text{frustum}} = V_{\\text{large cone}} - V_{\\text{small cone}} = \\frac{1}{3}\\pi R_1^2 H_1 - \\frac{1}{3}\\pi R_2^2 H_2\$. Substituting \$H_1 = \\frac{R_1}{R_2}H_2\$ and \$H_2 = \\frac{R_2}{R_1}H_1\$ along with \$h = H_1 - H_2\$ leads to the complex formula. While the derivation itself is lengthy, understanding the geometric principle is crucial for NDA.</li>
      </ul>
    </li>
  </ol>

  <h4 style="color: #fbbf24; margin-top: 24px; margin-bottom: 12px;">Common Ratios and Quick Facts (CDS/AFCAT)</h4>
  <p style="color: #e2e8f0;">Memorizing these common ratios can save significant time in the exam, especially for [[CDS]] and [[AFCAT Exam]] where direct application questions are more common.</p>
  <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:0.9rem; border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0;">
    <thead>
      <tr style="background: rgba(74,222,128,0.1); color: #4ade80;">
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; text-align:left;">Scenario</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; text-align:left;">Ratio / Fact</th>
        <th style="border:1px solid rgba(255,255,255,0.1); padding:10px; text-align:left;">Explanation / Exam Context</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Sphere inscribed in a Cube</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$V_{\\text{sphere}} : V_{\\text{cube}} = \\pi : 6\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">If cube side is 'a', then sphere radius \$r = a/2\$. \$V_{\\text{sphere}} = \\frac{4}{3}\\pi (\\frac{a}{2})^3 = \\frac{4}{3}\\pi \\frac{a^3}{8} = \\frac{\\pi a^3}{6}\$. So ratio is \$\\frac{\\pi a^3}{6} : a^3 = \\pi : 6\$.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Cube inscribed in a Sphere</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$V_{\\text{cube}} : V_{\\text{sphere}} = 2\\sqrt{3} : \\pi\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">If sphere radius is 'R', then cube diagonal is \$2R\$. Cube side \$a = 2R/\\sqrt{3}\$. \$V_{\\text{cube}} = (2R/\\sqrt{3})^3 = 8R^3/(3\\sqrt{3})\$. \$V_{\\text{sphere}} = \\frac{4}{3}\\pi R^3\$. Ratio simplifies to \$2\\sqrt{3}:\\pi\$.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Cone, Hemisphere, Cylinder (same r, h)</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$V_{\\text{cone}} : V_{\\text{hemisphere}} : V_{\\text{cylinder}} = 1 : 2 : 3\$ (if \$h=r\$)</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$V_C = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi r^3\$. \$V_H = \\frac{2}{3}\\pi r^3\$. \$V_{Cyl} = \\pi r^2 h = \\pi r^3\$. This is a very common ratio question (CDS 2024).</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Percentage Change in Volume (linear dim. 'x')</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$(1 + x/100)^3 - 1\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">If radius/side increases by \$x\\%\$, volume increases by this factor. E.g., \$10\\%\$ increase \$\\implies (1.1)^3 - 1 = 0.331 = 33.1\\%\$.</td>
      </tr>
      <tr>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;"><strong>Percentage Change in SA (linear dim. 'x')</strong></td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">\$(1 + x/100)^2 - 1\$</td>
        <td style="border:1px solid rgba(255,255,255,0.1); padding:10px;">If radius/side increases by \$x\\%\$, SA increases by this factor. E.g., \$10\\%\$ increase \$\\implies (1.1)^2 - 1 = 0.21 = 21\\%\$.</td>
      </tr>
    </tbody>
  </table>

  <p style="color: #e2e8f0; margin-top: 20px;">Mastering these concepts and formulas with a clear understanding of their application contexts will significantly boost your score in the [[Mathematics (NDA/CDS)]] section. Practice regularly with previous year's questions to identify patterns and common traps.</p>

</div>
`;

window.EXPANDED_NOTES_DATA["ratios-averages"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">Ratios, Proportions & Averages</h3>

  <p style="margin-bottom: 16px; color: #e2e8f0;">
    In the recent [[CDS]] and [[NDA]] papers (2024-2026), questions on [[Ratios]], [[Proportions]], and [[Averages]] have evolved from simple calculations to multi-layered conceptual problems. [[UPSC]] frequently integrates these topics with algebra, mixtures, partnerships, and speed-time-distance scenarios. Mastering these foundational concepts is crucial for securing marks in the quantitative aptitude section.
  </p>

  <h4 style="color: #4ade80; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-weight: 500;">
    Introduction to Ratios
  </h4>

  <p style="color: #e2e8f0;">A <strong>[[ratio]]</strong> is a way of comparing two quantities of the same kind by division, denoted by the symbol \$:\$, which is read as "to". For example, if we have \$a\$ units of one quantity and \$b\$ units of another quantity, then the ratio of the first quantity to the second quantity is \$a:b\$ or \$\\frac{a}{b}\$. The ratio \$\\frac{a}{b}\$ can be expressed as a <strong>[[fraction]]</strong>, which has a <strong>numerator</strong> \$a\$ (also known as the [[antecedent]]) and a <strong>denominator</strong> \$b\$ (also known as the [[consequent]]). The numerator represents the number of parts of the whole, while the denominator represents the total number of parts.</p>

  <p style="color: #e2e8f0;">For a ratio \$\\frac{a}{b}\$, the following conditions must be met:
  <ul style="margin-top: 8px; color: #e2e8f0;">
    <li style="margin-bottom: 4px;">\$a\$ and \$b\$ must be non-zero.</li>
    <li style="margin-bottom: 4px;">\$a\$ and \$b\$ must have the same [[units of measurement]] (UPSC often tests this by mixing units, such as grams and kilograms, to trap students).</li>
  </ul></p>

  <p style="color: #e2e8f0;">The ratio \$\\frac{a}{b}\$ can be <strong>simplified</strong> by dividing both \$a\$ and \$b\$ by their [[greatest common divisor (GCD)]], which is the largest positive integer that divides both \$a\$ and \$b\$ without leaving a remainder. For instance, the ratio \$15:20\$ simplifies to \$3:4\$ by dividing both by their GCD, which is 5.</p>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #4ade80;">⚡ Exam Tip (NDA/CDS):</strong> When combining multiple ratios like \$a:b\$ and \$b:c\$ to find \$a:b:c\$, always make the common term (here, \$b\$) equal. For example, if \$a:b = 2:3\$ and \$b:c = 4:5\$, multiply the first ratio by 4 and the second by 3 to get \$a:b = 8:12\$ and \$b:c = 12:15\$. Thus, \$a:b:c = 8:12:15\$. This technique is fundamental for [[partnership problems]] and [[mixture problems]] (NDA 2023, CDS 2024).
  </div>

  <h5 style="color: #fbbf24; margin-top: 20px; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 4px; font-weight: 500;">Types of Ratios</h5>
  <ul style="margin-top: 8px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>[[Compound Ratio]]</strong>: If two or more ratios are multiplied term by term, the resulting ratio is called a compound ratio. For example, the compound ratio of \$a:b\$ and \$c:d\$ is \$ac:bd\$. This is often tested in problems involving successive changes or combined proportions.</li>
    <li style="margin-bottom: 8px;"><strong>[[Duplicate Ratio]]</strong>: The duplicate ratio of \$a:b\$ is \$a^2:b^2\$.</li>
    <li style="margin-bottom: 8px;"><strong>[[Sub-duplicate Ratio]]</strong>: The sub-duplicate ratio of \$a:b\$ is \$\\sqrt{a}:\\sqrt{b}\$.</li>
    <li style="margin-bottom: 8px;"><strong>[[Triplicate Ratio]]</strong>: The triplicate ratio of \$a:b\$ is \$a^3:b^3\$.</li>
    <li style="margin-bottom: 8px;"><strong>[[Sub-triplicate Ratio]]</strong>: The sub-triplicate ratio of \$a:b\$ is \$\\sqrt[3]{a}:\\sqrt[3]{b}\$.</li>
  </ul>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack:</strong> To remember Duplicate/Sub-duplicate/Triplicate/Sub-triplicate ratios, think of "DUP" as "double power" (\$a^2\$), "SUB-DUP" as "sub-root" (\$\\sqrt{a}\$). Similarly, "TRIP" for "triple power" (\$a^3\$) and "SUB-TRIP" for "sub-cube root" (\$\\sqrt[3]{a}\$). The prefix "Sub-" always implies taking a root!
  </div>

  <div class="ncert-box" style="background-color: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #4ade80;">💡 Fun Fact time!</strong><br>
    In recent 2024 and 2025 CDS papers, UPSC has consistently tested [[coin-based ratio problems]] (e.g., the ratio of the number of 1-rupee, 50-paise, and 25-paise coins). The key trick is to always establish the relation:
    <br/><span style="font-family: 'Times New Roman', serif; font-size: 1.1em; color: #e2e8f0;">\$\$\\text{Total Value} = \\text{Number of Coins} \\times \\text{Denomination Value}\$\$</span>
    Failing to convert denominations into a single unit (e.g., converting all paise to rupees) is the most common reason candidates lose marks! Always convert everything to the smallest unit (paise) or largest unit (rupees) consistently. For example, 1 Rupee = 100 paise, 50 paise = 0.5 Rupee, 25 paise = 0.25 Rupee. This simple conversion is a frequent trap (NDA 2022, CDS 2023).
  </div>

  <h4 style="color: #4ade80; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-weight: 500;">
    Introduction to Proportions
  </h4>

  <p style="color: #e2e8f0;">A <strong>[[proportion]]</strong> is an equation that states that two ratios are equal, denoted by the symbol \$::\$ or \$=\$. For example, if we have \$\\frac{a}{b} = \\frac{c}{d}\$ (or \$a:b :: c:d\$), then we say that the ratios \$\\frac{a}{b}\$ and \$\\frac{c}{d}\$ are in proportion. The proportion \$\\frac{a}{b} = \\frac{c}{d}\$ can be expressed as \$ad = bc\$, which is known as the <strong>[[cross-multiplication]]</strong> property (or Product of Extremes = Product of Means). Here, \$a\$ and \$d\$ are called the <em>extremes</em>, while \$b\$ and \$c\$ are called the <em>means</em>.</p>

  <p style="color: #e2e8f0;">For a proportion \$\\frac{a}{b} = \\frac{c}{d}\$, the following conditions must be met:
  <ul style="margin-top: 8px; color: #e2e8f0;">
    <li style="margin-bottom: 4px;">\$a\$, \$b\$, \$c\$, and \$d\$ must be non-zero.</li>
    <li style="margin-bottom: 4px;">The terms must be in consistent units when comparing the respective ratios.</li>
  </ul></p>

  <p style="color: #e2e8f0;">The proportion \$\\frac{a}{b} = \\frac{c}{d}\$ can be used to solve for an unknown quantity. For example, if we know that \$\\frac{a}{b} = \\frac{c}{d}\$ and we want to solve for \$c\$, then we can use the cross-multiplication property to get \$c = \\frac{ad}{b}\$. This property is fundamental in solving problems involving direct and inverse variation, which are often disguised as ratio and proportion questions.</p>

  <h5 style="color: #fbbf24; margin-top: 20px; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 4px; font-weight: 500;">Types of Proportionality</h5>
  <ul style="margin-top: 8px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>Direct Proportion</strong>: If two quantities \$x\$ and \$y\$ are such that an increase in \$x\$ leads to a proportional increase in \$y\$, and a decrease in \$x\$ leads to a proportional decrease in \$y\$, then \$x\$ and \$y\$ are in [[direct proportion]]. Mathematically, \$x \\propto y\$ or \$x = ky\$, where \$k\$ is a constant. Example: More workers, more work done.</li>
    <li style="margin-bottom: 8px;"><strong>Inverse Proportion</strong>: If two quantities \$x\$ and \$y\$ are such that an increase in \$x\$ leads to a proportional decrease in \$y\$, and vice-versa, then \$x\$ and \$y\$ are in [[inverse proportion]]. Mathematically, \$x \\propto \\frac{1}{y}\$ or \$x = \\frac{k}{y}\$, where \$k\$ is a constant. Example: More speed, less time taken for the same distance.</li>
    <li style="margin-bottom: 8px;"><strong>[[Continued Proportion]]</strong>: Three quantities \$a, b, c\$ are said to be in continued proportion if \$a:b = b:c\$. This implies \$b^2 = ac\$. Here, \$b\$ is the [[mean proportional]] between \$a\$ and \$c\$, and \$c\$ is the [[third proportional]] to \$a\$ and \$b\$.</li>
  </ul>

  <div class="memory-hack-box" style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack!</strong><br>
    To master proportion terms for NDA/CDS:
    <ul>
      <li style="margin-bottom: 4px;"><strong>M</strong>ean Proportional of \$a\$ and \$b\$ is the <strong>M</strong>iddle value: \$\\sqrt{ab}\$ (Geometric Mean)</li>
      <li style="margin-bottom: 4px;"><strong>T</strong>hird Proportional of \$a\$ and \$b\$ is the <strong>T</strong>erminal value \$c\$ in \$a:b :: b:c\$, which simplifies to \$c = \\frac{b^2}{a}\$</li>
      <li style="margin-bottom: 4px;"><strong>F</strong>ourth Proportional of \$a, b, c\$ is the <strong>F</strong>inal term \$d\$ in \$a:b :: c:d\$, which simplifies to \$d = \\frac{bc}{a}\$</li>
    </ul>
    Remember: <strong>M</strong>iddle is Mean, <strong>T</strong>erminal is Third, <strong>F</strong>inal is Fourth! This mnemonic helps quickly recall the formulas (NDA 2021, CDS 2020).
  </div>

  <h4 style="color: #4ade80; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-weight: 500;">
    The Core Tools: Componendo & Dividendo
  </h4>
  <p style="margin-bottom: 16px; color: #e2e8f0;">
    In NDA and CDS algebra-heavy problems (especially when solving trigonometric or complex fraction equations), the properties of proportion are incredibly powerful tools. These often simplify multi-step calculations into a single, elegant step.
  </p>
  <table style="margin: 16px 0; border-collapse: collapse; width: 100%; text-align: left; background: rgba(255,255,255,0.02); color: #e2e8f0;">
    <thead>
      <tr style="background: rgba(74,222,128,0.1); border-bottom: 1px solid rgba(255,255,255,0.1);">
        <th style="padding: 10px; border-right: 1px solid rgba(255,255,255,0.1); color: #4ade80;">Property Name</th>
        <th style="padding: 10px; border-right: 1px solid rgba(255,255,255,0.1); color: #4ade80;">Original Proportion</th>
        <th style="padding: 10px; color: #4ade80;">Transformed Result</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
        <td style="padding: 10px; border-right: 1px solid rgba(255,255,255,0.1);"><strong>[[Componendo]]</strong></td>
        <td style="padding: 10px; border-right: 1px solid rgba(255,255,255,0.1);">\$\\frac{a}{b} = \\frac{c}{d}\$</td>
        <td style="padding: 10px;">\$\\frac{a+b}{b} = \\frac{c+d}{d}\$</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
        <td style="padding: 10px; border-right: 1px solid rgba(255,255,255,0.1);"><strong>[[Dividendo]]</strong></td>
        <td style="padding: 10px; border-right: 1px solid rgba(255,255,255,0.1);">\$\\frac{a}{b} = \\frac{c}{d}\$</td>
        <td style="padding: 10px;">\$\\frac{a-b}{b} = \\frac{c-d}{d}\$</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
        <td style="padding: 10px; border-right: 1px solid rgba(255,255,255,0.1);"><strong>[[Componendo & Dividendo]]</strong></td>
        <td style="padding: 10px; border-right: 1px solid rgba(255,255,255,0.1);">\$\\frac{a}{b} = \\frac{c}{d}\$</td>
        <td style="padding: 10px; font-weight: 600; color: #fbbf24;">\$\\frac{a+b}{a-b} = \\frac{c+d}{c-d}\$</td>
      </tr>
    </tbody>
  </table>
  <p style="color: #e2e8f0;">
    <strong>Worked Example (NDA 2023 Type):</strong> If \$\\frac{x+5}{x-5} = \\frac{y+2}{y-2}\$, find the ratio \$x:y\$.
    <br/>Using Componendo & Dividendo on both sides:
    <br/>\$\\frac{(x+5)+(x-5)}{(x+5)-(x-5)} = \\frac{(y+2)+(y-2)}{(y+2)-(y-2)}\$
    <br/>\$\\frac{2x}{10} = \\frac{2y}{4}\$
    <br/>\$\\frac{x}{5} = \\frac{y}{2}\$
    <br/>\$2x = 5y \\implies \\frac{x}{y} = \\frac{5}{2}\$. So, \$x:y = 5:2\$.
    <br/>This property significantly reduces calculation time compared to cross-multiplication and algebraic manipulation.
  </p>

  <h4 style="color: #4ade80; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-weight: 500;">
    Introduction to Averages
  </h4>

  <p style="color: #e2e8f0;">An <strong>[[average]]</strong> (or central tendency) is a value that represents the middle of a set of numbers, often denoted by the symbol \$\\bar{x}\$. For example, if we have a set of numbers \$\\{x_1, x_2, \\ldots, x_n\\}\$, then the average of the set is \$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n}\$.</p>

  <p style="color: #e2e8f0;">The average \$\\bar{x}\$ can be calculated using the formula:
  <br/><span style="font-family: 'Times New Roman', serif; font-size: 1.1em; color: #e2e8f0;">\$\$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}\$\$</span>
  where \$\\sum_{i=1}^{n} x_i\$ is the sum of the numbers in the set and \$n\$ is the number of numbers in the set.</p>

  <p style="color: #e2e8f0;">For an average \$\\bar{x}\$, the following conditions must be met:
  <ul style="margin-top: 8px; color: #e2e8f0;">
    <li style="margin-bottom: 4px;">The elements being averaged must have the same physical units.</li>
    <li style="margin-bottom: 4px;">The average value always lies strictly between the minimum and maximum values of the dataset.</li>
  </ul></p>

  <h4 style="color: #4ade80; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-weight: 500;">
    Types of Averages & Their Exam Relevance
  </h4>

  <p style="color: #e2e8f0;">There are several types of averages, each suited for distinct mathematical contexts:</p>
  <ul style="margin-top: 8px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>[[Arithmetic Mean (AM)]]</strong>: The most common type of average, calculated using the formula \$\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}\$. Use this when items are independent and additive (e.g., average runs, average age). For example, if a cricketer scores 50, 60, and 70 runs in three matches, his average score is \$(50+60+70)/3 = 60\$.</li>
    <li style="margin-bottom: 8px;"><strong>[[Geometric Mean (GM)]]</strong>: Used to calculate the average of ratios, growth rates, or percentage changes, calculated using the formula \$\\bar{x} = \\sqrt[n]{x_1 \\cdot x_2 \\cdots x_n}\$. In NDA, GM is frequently tested alongside AM in inequalities. For instance, if a population grows by 10% in the first year and 21% in the second year, the average annual growth rate is \$\\sqrt{(1+0.10)(1+0.21)} - 1 = \\sqrt{1.1 \\times 1.21} - 1 = \\sqrt{1.331} - 1 \\approx 1.1537 - 1 = 0.1537\$ or 15.37%.</li>
    <li style="margin-bottom: 8px;"><strong>[[Harmonic Mean (HM)]]</strong>: Calculated using the formula \$\\bar{x} = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}}\$. <strong>Crucial CDS application:</strong> When a journey is divided into equal distances, the [[average speed]] is the Harmonic Mean of the individual speeds. For example, if a car travels from A to B at 60 km/h and returns from B to A at 40 km/h, the average speed is \$\\frac{2}{\\frac{1}{60} + \\frac{1}{40}} = \\frac{2 \\times 60 \\times 40}{60 + 40} = \\frac{4800}{100} = 48\$ km/h.</li>
    <li style="margin-bottom: 8px;"><strong>[[Median]]</strong>: The middle value when the numbers are arranged in ascending or descending order, calculated as \$x_{\\frac{n+1}{2}}\$ for an odd number of observations and \$\\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2} + 1}}{2}\$ for an even number of observations. Median is less affected by extreme values (outliers) than the mean.</li>
  </ul>

  <h5 style="color: #fbbf24; margin-top: 20px; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 4px; font-weight: 500;">Advanced Average Concepts</h5>
  <ul style="margin-top: 8px; color: #e2e8f0;">
    <li style="margin-bottom: 8px;"><strong>[[Weighted Average]]</strong>: When different items contribute differently to the total, a weighted average is used. If \$x_1, x_2, \\ldots, x_n\$ are the values and \$w_1, w_2, \\ldots, w_n\$ are their respective weights, the weighted average is \$\\bar{x}_w = \\frac{\\sum w_i x_i}{\\sum w_i}\$. This is common in calculating average marks where different subjects have different credit points (CDS 2024).</li>
    <li style="margin-bottom: 8px;"><strong>[[Deviation Method]] for Average</strong>: This method simplifies calculation for large numbers. Choose an assumed average (A) close to the actual values. Calculate deviations (\$d_i = x_i - A\$) for each number. The actual average is \$A + \\frac{\\sum d_i}{n}\$. This is a time-saving trick for NDA/CDS.</li>
  </ul>

  <div class="ncert-box" style="background-color: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 12px; margin: 20px 0; border-radius: 4px; color: #e2e8f0;">
    <strong style="color: #4ade80;">💡 Fun Fact time!</strong><br>
    Did you know why the Harmonic Mean is the absolute king of "Average Speed" problems? If a car travels from point A to B at speed \$v_1\$ and returns at speed \$v_2\$, the distance is constant. Because time is inversely proportional to speed (\$t = \\frac{d}{v}\$), we must use the Harmonic Mean:
    <br/><span style="font-family: 'Times New Roman', serif; font-size: 1.1em; color: #e2e8f0;">\$\$\\text{Average Speed} = \\frac{2}{\\frac{1}{v_1} + \\frac{1}{v_2}} = \\frac{2v_1v_2}{v_1 + v_2}\$\$</span>
    UPSC loves testing this concept, and many students incorrectly use the Arithmetic Mean \$\\frac{v_1 + v_2}{2}\$ and fall into the trap! This specific formula for two speeds is a direct application of HM and appears almost annually (NDA 2021, CDS 2023).
  </div>

  <h4 style="color: #4ade80; margin-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-weight: 500;">
    AM vs. GM vs. HM: Comparison and Applications
  </h4>
  <p style="margin-bottom: 12px; color: #e2e8f0;">
    The relationship between these three means is one of the most high-yielding areas in the NDA exam, specifically for finding maximum/minimum values of functions and proving inequalities. For any set of positive numbers, the [[AM-GM-HM inequality]] states that \$AM \\ge GM \\ge HM\$. Equality holds if and only if all the numbers in the set are equal. This inequality is a powerful tool for optimization problems (NDA 2022, 2024).
  </p>

  <table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:0.9rem; color: #e2e8f0;">
    <thead><tr style="background:rgba(74,222,128,0.1);">
      <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left; color: #4ade80;">Mean Type</th>
      <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #4ade80;">Formula (for 2 positive numbers \$a, b\$)</th>
      <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); color: #4ade80;">Key Exam Application Scenarios</th>
    </tr></thead>
    <tbody>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
        <td style="padding: 8px; border-right: 1px solid rgba(255,255,255,0.1); font-weight: 600;">Arithmetic Mean (AM)</td>
        <td style="padding: 8px; border-right: 1px solid rgba(255,255,255,0.1);">\$\\frac{a+b}{2}\$</td>
        <td style="padding: 8px;">Standard averages, age-based changes, weighted class scores, and additive systems. Finding the sum of numbers when average is given.</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
        <td style="padding: 8px; border-right: 1px solid rgba(255,255,255,0.1); font-weight: 600;">Geometric Mean (GM)</td>
        <td style="padding: 8px; border-right: 1px solid rgba(255,255,255,0.1);">\$\\sqrt{ab}\$</td>
        <td style="padding: 8px;">Finding mean proportionals, dealing with compound interest rates, population growth, and optimization inequalities (e.g., finding max value of \$xy\$ when \$x+y\$ is constant).</td>
      </tr>
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
        <td style="padding: 8px; border-right: 1px solid rgba(255,255,255,0.1); font-weight: 600;">Harmonic Mean (HM)</td>
        <td style="padding: 8px; border-right: 1px solid rgba(255,255,255,0.1);">\$\\frac{2ab}{a+b}\$</td>
        <td style="padding: 8px;">Average speed over equal distances, rates of work done over constant workloads, average of reciprocals. (e.g., finding min value of \$x+y\$ when \$xy\$ is constant).</td>
      </tr>
    </tbody>
  </table>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: #e2e8f0;">
    <strong style="color: #fbbf24;">💡 Memory Hack:</strong> To recall the AM-GM-HM inequality, remember the sequence "A Great Hunk" (AM &ge; GM &ge; HM). This simple phrase helps you recall the order of magnitude for these means, which is often tested in conceptual questions. Remember, this holds true for positive numbers, and equality only when all numbers are identical.
  </div>

  <p style="color: #e2e8f0;">
    Understanding the conditions under which each average is most appropriate is key. For instance, when dealing with quantities that are summed up (like ages, scores), the [[Arithmetic Mean]] is the correct choice. When dealing with rates or ratios where the product is relevant (like growth rates), the [[Geometric Mean]] is preferred. And crucially, for rates involving constant distance or work (like average speed or combined work rates), the [[Harmonic Mean]] is the only correct choice. Misapplication of these means is a common trap set by UPSC.
  </p>
</div>
`;
