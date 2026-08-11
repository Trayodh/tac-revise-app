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
