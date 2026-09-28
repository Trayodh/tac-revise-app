window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};
EXPANDED_NOTES_DATA["reflection-refraction"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Reflection, Refraction & Lenses
  </h3>

  <h4>1. Fundamental Principles of Light</h4>
  <p><strong>Wave‑particle duality</strong> of light, although not directly tested in NDA, underpins the geometric optics treated here. The <strong>law of rectilinear propagation</strong> states that light travels in straight lines in a homogeneous medium, a premise for both reflection and refraction.</p>

  <h4>2. Law of Reflection</h4>
  <p>The law, first enunciated by <strong><em>Euclid</em></strong> (c. 300 BC) and later formalised by <strong><em>Al‑Hazen</em></strong> (965‑1040 AD), can be expressed as:</p>
  <ul>
    <li>Incident ray, reflected ray, and the normal to the reflecting surface lie in the same plane.</li>
    <li>The angle of incidence (<strong>i</strong>) equals the angle of reflection (<strong>r</strong>): <strong>i = r</strong>.</li>
  </ul>
  <p>For a <strong>plane mirror</strong>, the image distance equals the object distance (both measured from the mirror surface) and the image is laterally inverted.</p>

  <h4>3. Spherical Mirrors</h4>
  <p>Spherical mirrors are sections of a sphere and are classified as <strong>concave</strong> or <strong>convex</strong>. The key parameters are:</p>
  <ul>
    <li><strong>Radius of curvature (R)</strong> – distance from the pole to the centre of curvature.</li>
    <li><strong>Focal length (f)</strong> – half the radius: <strong>f = R/2</strong> (derived from the paraxial approximation).</li>
    <li>Sign convention (Cartesian):</li>
  </ul>
  <table border="1" cellpadding="5" style="border-collapse:collapse; margin:10px 0;">
    <tr><th>Quantity</th><th>Positive (+)</th><th>Negative (‑)</th></tr>
    <tr><td>Object distance (u)</td><td>Real object (in front of mirror)</td><td>Virtual object (behind mirror)</td></tr>
    <tr><td>Image distance (v)</td><td>Real image (in front of mirror)</td><td>Virtual image (behind mirror)</td></tr>
    <tr><td>Focal length (f)</td><td>Concave mirror</td><td>Convex mirror</td></tr>
    <tr><td>Radius of curvature (R)</td><td>Same sign as f</td><td>Same sign as f</td></tr>
  </table>
  <p>The mirror formula, valid for both types, is:</p>
  <p><strong>1/u + 1/v = 1/f</strong></p>
  <p>Magnification (m) is given by:</p>
  <p><strong>m = -v/u = h'/h</strong> (where <strong>h'</strong> and <strong>h</strong> are image and object heights respectively).</p>

  <h4>4. Refraction and Snell’s Law</h4>
  <p>When light passes from medium 1 (refractive index <strong>n₁</strong>) to medium 2 (<strong>n₂</strong>), the direction changes according to <strong>Snell’s law</strong> (<strong>Willebrord Snellius</strong>, 1621):</p>
  <p><strong>n₁ sin i = n₂ sin r</strong></p>
  <p>Key consequences:</p>
  <ul>
    <li>If <strong>n₂ > n₁</strong>, the ray bends towards the normal (e.g., air → water).</li>
    <li>If <strong>n₂ < n₁</strong>, the ray bends away from the normal (e.g., water → air).</li>
  </ul>
  <p>The <strong>refractive index</strong> of a medium is defined as the ratio of the speed of light in vacuum (<strong>c = 3.00 × 10⁸ m s⁻¹</strong>) to that in the medium (<strong>v</strong>): <strong>n = c/v</strong>. Representative values:</p>
  <table border="1" cellpadding="5" style="border-collapse:collapse; margin:10px 0;">
    <tr><th>Medium</th><th>n (at 589 nm)</th></tr>
    <tr><td>Vacuum</td><td>1.000</td></tr>
    <tr><td>Air (STP)</td><td>1.00029</td></tr>
    <tr><td>Water</td><td>1.333</td></tr>
    <tr><td>Glass (crown)</td><td>1.52</td></tr>
    <tr><td>Glass (flint)</td><td>1.62</td></tr>
  </table>

  <h4>5. Critical Angle and Total Internal Reflection (TIR)</h4>
  <p>When light travels from a denser to a rarer medium (n₁ > n₂), there exists a <strong>critical angle (θ_c)</strong> beyond which refraction is impossible and the ray is reflected back into the denser medium. Setting the angle of refraction to 90°, Snell’s law gives:</p>
  <p><strong>sin θ_c = n₂ / n₁</strong></p>
  <p>For water‑air interface (n₁=1.333, n₂=1.000), θ_c ≈ 48.6°. TIR is the operating principle behind fibre‑optic cables, prisms used in periscopes, and the <strong>rainbow</strong> formation.</p>

  <h4>6. Refraction at Plane and Spherical Surfaces</h4>
  <p>For a **plane refracting surface**, the formula relating object distance (u), image distance (v), and refractive indices is:</p>
  <p><strong>n₂/v – n₁/u = (n₂ – n₁)/R</strong>, where R → ∞ for a plane surface, simplifying to <strong>n₂/v = n₁/u</strong>.</p>
  <p>For a **spherical refracting surface** (convex or concave), the same formula holds with a finite R. The sign of R follows the same Cartesian convention as mirrors.</p>

  <h4>7. Thin Lens Theory</h4>
  <p>A thin lens is approximated as having negligible thickness compared to object and image distances. Two principal categories:</p>
  <ul>
    <li><strong>Convex (converging) lens</strong> – positive focal length.</li>
    <li><strong>Concave (diverging) lens</strong> – negative focal length.</li>
  </ul>
  <p>The **lens maker’s equation**, derived from the refraction at two spherical surfaces, is:</p>
  <p><strong>1/f = (n – 1) (1/R₁ – 1/R₂)</strong></p>
  <p>where <strong>n</strong> is the refractive index of the lens material, <strong>R₁</strong> the radius of the first surface (positive if convex towards the object) and <strong>R₂</strong> the second surface (positive if convex away from the object).</p>
  <p>The **thin‑lens formula** mirrors the mirror equation:</p>
  <p><strong>1/u + 1/v = 1/f</strong></p>
  <p>Magnification:</p>
  <p><strong>m = v/u = h'/h</strong></p>
  <p>Note the sign difference: for a real inverted image, m is negative; for a virtual upright image, m is positive.</p>

  <h4>8. Power of a Lens and Diopters</h4>
  <p>Optical power (P) is the reciprocal of focal length (in metres):</p>
  <p><strong>P = 1/f (dioptre, D)</strong></p>
  <p>Examples:</p>
  <ul>
    <li>f = 0.20 m → P = +5 D (converging).</li>
    <li>f = –0.25 m → P = –4 D (diverging).</li>
  </ul>

  <h4>9. Combination of Lenses</h4>
  <p>When two thin lenses of powers P₁ and P₂ are placed in contact, the resultant power is additive:</p>
  <p><strong>P_total = P₁ + P₂</strong></p>
  <p>If separated by a distance d, the effective focal length becomes:</p>
  <p><strong>1/f_eff = 1/f₁ + 1/f₂ – d/(f₁ f₂)</strong></p>
  <p>This principle is used in compound microscopes and telescopes.</p>

  <h4>10. Optical Instruments</h4>
  <ul>
    <li><strong>Human eye</strong> – approximated as a single converging lens of focal length ≈ 22 mm; accommodation changes f from ~17 mm (far) to ~12 mm (near).</li>
    <li><strong>Microscope</strong> – objective (high power, short f) + eyepiece (low power, long f). Magnification ≈ (‑f_obj/f_eyep).</li>
    <li><strong>Telescope (astronomical)</strong> – objective gathers light, eyepiece magnifies. Angular magnification M = f_obj / f_eyep.</li>
  </ul>

  <h4>11. Vision Defects and Lens Corrections</h4>
  <p>Common refractive errors:</p>
  <ul>
    <li><strong>Myopia (near‑sightedness)</strong> – image of distant objects forms in front of retina. Corrected by a diverging lens (negative power). Typical correction: –2.00 D for a 0.5 m far point.</li>
    <li><strong>Hyperopia (far‑sightedness)</strong> – image forms behind retina. Corrected by a converging lens (positive power). Example: +2.50 D for a near point of 0.4 m.</li>
    <li><strong>Astigmatism</strong> – caused by non‑spherical cornea; corrected with cylindrical lenses having different powers in orthogonal meridians.</li>
    <li><strong>Presbyopia</strong> – age‑related loss of accommodation; corrected with reading glasses (low‑power convex lenses) or multifocal lenses.</li>
  </ul>

  <h4>12. Aberrations in Lenses</h4>
  <p>Real lenses deviate from the ideal paraxial model. Two dominant aberrations in defence optics are:</p>
  <ul>
    <li><strong>Chromatic aberration</strong> – dispersion causes different wavelengths to focus at different points. Mitigated by achromatic doublets (crown + flint glass).</li>
    <li><strong>Spherical aberration</strong> – marginal rays focus nearer the lens than paraxial rays. Reduced by using aspheric surfaces or stopping down the aperture.</li>
  </ul>

  <h4>13. Numerical Aperture (NA) and Resolving Power</h4>
  <p>In fibre optics and microscopes, the numerical aperture quantifies light‑gathering ability:</p>
  <p><strong>NA = n sin θ_max</strong>, where θ_max is the half‑angle of the maximum cone of light that can enter the system.</p>
  <p>The Rayleigh criterion gives the minimum resolvable separation (Δ) for a circular aperture:</p>
  <p><strong>Δ = 1.22 λ / (2 NA)</strong></p>
  <p>For λ = 550 nm and NA = 0.25, Δ ≈ 1.34 µm, a figure often quoted for the human eye’s resolving limit.</p>

  <h4>14. Practical Applications for Defence Personnel</h4>
  <ul>
    <li>Design of periscopes and night‑vision devices relies on precise mirror and lens alignment.</li>
    <li>Laser range‑finders use the principle of **total internal reflection** in glass prisms to direct beams.</li>
    <li>Ballistic optics (sniper scopes) demand correction of spherical and chromatic aberrations to maintain target clarity at >800 m.</li>
    <li>Fiber‑optic communication in command networks exploits TIR and high NA fibres for low‑loss transmission.</li>
  </ul>

  <h4>15. Quick Reference Formulas</h4>
  <table border="1" cellpadding="5" style="border-collapse:collapse; margin:10px 0;">
    <tr><th>Phenomenon</th><th>Formula</th></tr>
    <tr><td>Mirror/Lens Equation</td><td>1/u + 1/v = 1/f</td></tr>
    <tr><td>Magnification</td><td>m = -v/u (mirror) ; m = v/u (lens)</td></tr>
    <tr><td>Snell’s Law</td><td>n₁ sin i = n₂ sin r</td></tr>
    <tr><td>Critical Angle</td><td>sin θ_c = n₂/n₁ (n₁>n₂)</td></tr>
    <tr><td>Lens‑Maker’s Equation</td><td>1/f = (n-1)(1/R₁ – 1/R₂)</td></tr>
    <tr><td>Power (Dioptre)</td><td>P = 1/f (m)</td></tr>
    <tr><td>Combined Power</td><td>P_total = P₁ + P₂</td></tr>
    <tr><td>Numerical Aperture</td><td>NA = n sin θ_max</td></tr>
    <tr><td>Rayleigh Criterion</td><td>Δ = 1.22 λ / (2 NA)</td></tr>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>For a spherical mirror, <strong>f = R/2</strong> (concave +, convex –).</li>
      <li>Snell’s law was first formulated by <strong>Willebrord Snellius in 1621</strong>.</li>
      <li>The critical angle for water‑air interface is ≈ <strong>48.6°</strong>.</li>
      <li>Lens power (in dioptres) is the reciprocal of focal length in metres: <strong>P = 1/f</strong>.</li>
      <li>Myopia is corrected with a <strong>diverging (‑) lens</strong>; hyperopia with a <strong>converging (+) lens</strong>.</li>
      <li>Achromatic doublets combine crown glass (n≈1.52) and flint glass (n≈1.62) to eliminate chromatic aberration.</li>
      <li>Rayleigh’s limit for the human eye (λ≈550 nm, NA≈0.25) gives a resolution of about <strong>1.3 µm</strong>.</li>
      <li>Combined power of two thin lenses in contact is additive: <strong>P_total = P₁ + P₂</strong>.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-exercises"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Work, Power, Energy & Gravitation
  </h3>

  <h4>1. Introduction</h4>
  <p>The concepts of <strong>work</strong>, <strong>power</strong>, <strong>energy</strong> and <strong>gravitation</strong> form the cornerstone of classical mechanics and are heavily tested in NDA, CDS and AFCAT examinations. A thorough grasp of definitions, scalar/vector nature, derivations and applications enables rapid problem‑solving. Below is an exhaustive, exam‑focused revision that meets the depth and structure required for UPSC‑level preparation.</p>

  <h4>2. Work</h4>
  <p><strong>Work</strong> (<em>W</em>) is defined as the scalar product of force <strong>F</strong> and displacement <strong>s</strong>:</p>
  <ul>
    <li>Mathematical expression: <code>W = F·s = F s cosθ</code>, where θ is the angle between <strong>F</strong> and <strong>s</strong>.</li>
    <li>SI unit: <strong>joule (J)</strong>; 1 J = 1 N·m.</li>
    <li>Dimensions: [M L² T⁻²].</li>
    <li>Sign convention: Positive work when force has a component along displacement; negative when opposite; zero when perpendicular (θ = 90°) or no displacement.</li>
  </ul>
  <p>For a <strong>variable force</strong>, work is obtained by integration:</p>
  <p><code>W = ∫ F·ds</code> (path‑dependent in general).</p>
  <p><strong>Work‑Energy Theorem</strong> (also called the <em>vis viva</em> principle): The net work done by all forces equals the change in kinetic energy:</p>
  <p><code>W_net = ΔK = ½ m (v_f² – v_i²)</code>.</p>
  <p>Important special cases:</p>
  <ul>
    <li>Work done by gravity when a body moves vertically: <code>W_g = m g h</code> (positive if downward).</li>
    <li>Work done by a spring (Hooke’s law): <code>W_s = ½ k (x_f² – x_i²)</code>.</li>
    <li>Work done by friction (non‑conservative): always negative, dissipates mechanical energy as heat.</li>
  </ul>

  <h4>3. Power</h4>
  <p><strong>Power</strong> (<em>P</em>) is the rate at which work is done or energy is transferred:</p>
  <ul>
    <li>Instantaneous power: <code>P = dW/dt = F·v</code> (dot product of force and velocity).</li>
    <li>Average power over interval Δt: <code>P_avg = W/Δt</code>.</li>
    <li>SI unit: <strong>watt (W)</strong>; 1 W = 1 J s⁻¹.</li>
    <li>Other units: <strong>horsepower (hp)</strong> (1 hp ≈ 746 W), <strong>kilowatt (kW)</strong>.</li>
  </ul>
  <p>In rotational motion, power is expressed as <code>P = τ ω</code>, where τ is torque and ω angular velocity.</p>

  <h4>4. Energy</h4>
  <p>Energy is the capacity to do work. It exists in various forms; mechanical energy splits into kinetic and potential.</p>

  <h5>4.1 Kinetic Energy (K)</h5>
  <p><code>K = ½ m v²</code>. It depends quadratically on speed; direction of velocity is irrelevant (scalar).</p>

  <h5>4.2 Potential Energy (U)</h5>
  <p>Potential energy arises from position or configuration in a conservative force field.</p>
  <ul>
    <li>Gravitational potential energy near Earth’s surface: <code>U_g = m g h</code> (h measured from reference level).</li>
    <li>Elastic potential energy of a spring: <code>U_s = ½ k x²</code>.</li>
    <li>General definition: <code>U(r) = – ∫ F·dr</code> (zero at infinity for gravitation).</li>
  </ul>

  <h5>4.3 Conservation of Mechanical Energy</h5>
  <p>When only conservative forces act, total mechanical energy <code>E = K + U</code> remains constant:</p>
  <p><code>ΔE = 0 ⇒ K_i + U_i = K_f + U_f</code>.</p>
  <p>If non‑conservative forces (e.g., friction) are present, the work‑energy theorem extends to:</p>
  <p><code>W_nc = ΔK + ΔU</code>.</p>

  <h4>5. Gravitation</h4>
  <p>Gravitation is the universal attractive force between masses. The foundational law is Newton’s <strong>law of universal gravitation</strong>.</p>

  <h5>5.1 Newton’s Law of Universal Gravitation</h5>
  <p>Every point mass attracts every other point mass with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centres:</p>
  <p><code>F = G (m₁ m₂) / r²</code>, where:</p>
  <ul>
    <li><strong>G</strong> = universal gravitational constant = 6.674 × 10⁻¹¹ N·m²·kg⁻² (determined by Cavendish experiment).</li>
    <li>r = separation between centres of mass.</li>
  </ul>
  <p>The force is <strong>central</strong> and <strong>conservative</strong>; hence a gravitational potential energy function exists.</p>

  <h5>5.2 Acceleration due to Gravity (g)</h5>
  <p>On Earth’s surface, the gravitational force on a mass m yields acceleration:</p>
  <p><code>g = G M_E / R_E² ≈ 9.8 m s⁻²</code>, where M_E and R_E are Earth’s mass and radius.</p>
  <p>Variation with altitude (h) and depth (d):</p>
  <ul>
    <li>At height h above surface: <code>g_h = g (R_E / (R_E + h))² ≈ g (1 – 2h/R_E)</code> for h ≪ R_E.</li>
    <li>At depth d below surface (assuming uniform density): <code>g_d = g (1 – d/R_E)</code>.</li>
    <li>Due to Earth’s rotation, effective g is reduced by centrifugal term: <code>g_eff = g – ω² R_E cos²φ</code> (φ = latitude).</li>
  </ul>

  <h5>5.3 Gravitational Potential and Potential Energy</h5>
  <p>Gravitational potential V(r) at distance r from a mass M:</p>
  <p><code>V(r) = – G M / r</code> (zero at infinity).</p>
  <p>Potential energy of mass m in this field:</p>
  <p><code>U(r) = m V(r) = – G M m / r</code>.</p>
  <p>Near Earth’s surface, using binomial expansion, <code>U ≈ m g h</code> (consistent with earlier expression).</p>

  <h5>5.4 Satellite Motion</h5>
  <p>A satellite of mass m orbiting Earth at radius r experiences centripetal force provided by gravity:</p>
  <p><code>G M_E m / r² = m v² / r ⇒ v = √(G M_E / r)</code> (orbital speed).</p>
  <p>Time period:</p>
  <p><code>T = 2π r / v = 2π √(r³ / (G M_E))</code> (Kepler’s third law for circular orbits).</p>
  <p>Important orbits:</p>
  <ul>
    <li><strong>Low Earth Orbit (LEO)</strong>: altitude 200–2000 km, period ≈ 90 min.</li>
    <li><strong>Geostationary Orbit (GEO)</strong>: altitude ≈ 35 786 km, period = 24 h, appears fixed over a point on equator.</li>
    <li><strong>Polar Orbit</strong>: passes over poles, useful for Earth observation.</li>
  </ul>
  <p>Orbital energy (total mechanical energy):</p>
  <p><code>E = K + U = ½ m v² – G M_E m / r = – G M_E m / (2r)</code> (negative, indicating bound system).</p>

  <h5>5.5 Escape Velocity</h5>
  <p>Minimum speed required for a body to escape Earth’s gravitational influence (reach r → ∞ with zero residual speed):</p>
  <p>Set total energy to zero: <code>½ m v_esc² – G M_E m / R_E = 0 ⇒ v_esc = √(2 G M_E / R_E) ≈ 11.2 km s⁻¹</code>.</p>
  <p>Relation to orbital velocity: <code>v_esc = √2 × v_orb</code> for the same radius.</p>

  <h5>5.6 Kepler’s Laws of Planetary Motion</h5>
  <p>Empirical laws derived by Johannes <strong>Kepler</strong>, later explained by Newton’s gravitation:</p>
  <ol>
    <li><strong>Law of Orbits</strong>: Each planet moves in an elliptical orbit with the Sun at one focus.</li>
    <li><strong>Law of Areas</strong>: The line joining a planet to the Sun sweeps out equal areas in equal times (conservation of angular momentum).</li>
    <li><strong>Law of Periods</strong>: The square of the orbital period is proportional to the cube of the semi‑major axis: <code>T² ∝ a³</code>.</li>
  </ol>
  <p>For circular orbits, a = r, giving the same relation as derived above.</p>

  <h5>5.7 Weightlessness</h5>
  <p>Weightlessness occurs when the only force acting on a body is gravity, producing free fall. In orbit, astronauts experience apparent weightlessness because both they and the spacecraft have the same centripetal acceleration.</p>

  <h4>6. Summary of Key Formulae</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead>
      <tr>
        <th style="border:1px solid #ddd; padding:8px;">Concept</th>
        <th style="border:1px solid #ddd; padding:8px;">Formula</th>
        <th style="border:1px solid #ddd; padding:8px;">SI Unit / Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Work (constant force)</td>
        <td style="border:1px solid #ddd; padding:8px;"><code>W = F s cosθ</code></td>
        <td style="border:1px solid #ddd; padding:8px;">Joule (J)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Power</td>
        <td style="border:1px solid #ddd; padding:8px;"><code>P = F·v</code> (instantaneous)</td>
        <td style="border:1px solid #ddd; padding:8px;">Watt (W)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Kinetic Energy</td>
        <td style="border:1px solid #ddd; padding:8px;"><code>K = ½ m v²</code></td>
        <td style="border:1px solid #ddd; padding:8px;">Joule</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Gravitational Potential Energy</td>
        <td style="border:1px solid #ddd; padding:8px;"><code>U = – G M m / r</code></td>
        <td style="border:1px solid #ddd; padding:8px;">Joule</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Orbital Velocity</td>
        <td style="border:1px solid #ddd; padding:8px;"><code>v = √(G M / r)</code></td>
        <td style="border:1px solid #ddd; padding:8px;">m s⁻¹</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Escape Velocity</td>
        <td style="border:1px solid #ddd; padding:8px;"><code>v_esc = √(2 G M / R)</code></td>
        <td style="border:1px solid #ddd; padding:8px;">m s⁻¹</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Period of Satellite</td>
        <td style="border:1px solid #ddd; padding:8px;"><code>T = 2π √(r³ / (G M))</code></td>
        <td style="border:1px solid #ddd; padding:8px;">second (s)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;">Kepler’s Third Law</td>
        <td style="border:1px solid #ddd; padding:8px;"><code>T² ∝ a³</code></td>
        <td style="border:1px solid #ddd; padding:8px;">a = semi‑major axis</td>
      </tr>
    </tbody>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The work done by a conservative force depends only on initial and final positions, not the path.</li>
      <li>1 hp = 746 W; often used in AFCAT numerical problems on power output of engines.</li>
      <li>Gravitational potential is zero at infinity; negative values indicate bound systems.</li>
      <li>For a satellite close to Earth’s surface (<em>r ≈ R_E</em>), orbital velocity ≈ 7.9 km s⁻¹.</li>
      <li>Escape velocity from Earth is ≈ 11.2 km s⁻¹; from Moon ≈ 2.4 km s⁻¹.</li>
      <li>Kepler’s second law is a direct consequence of conservation of angular momentum.</li>
      <li>Weightlessness in orbit does not mean zero gravity; it is free‑fall motion.</li>
      <li>The variation of g with latitude due to Earth’s rotation is maximum at the equator (≈0.034 m s⁻² reduction).</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-sound"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Sound Waves & Acoustics
  </h3>

  <h4>Introduction</h4>
  <p>Sound is a mechanical <strong>longitudinal wave** that propagates through a medium by causing particles to oscillate parallel to the direction of wave travel. Unlike electromagnetic waves, sound cannot travel in a vacuum; it requires a material medium such as air, water, or solids. The study of sound encompasses its generation, transmission, reception, and effects, collectively termed <strong>acoustics</strong>. For defence examinations (NDA/CDS/AFCAT) a firm grasp of wave parameters, speed of sound in various media, reflection/refraction phenomena, Doppler effect, resonance, and practical applications such as SONAR and ultrasound is essential.</p>

  <h4>Wave Parameters and Terminology</h4>
  <ul>
    <li><strong>Frequency (f)</strong>: Number of complete oscillations per second, measured in hertz (Hz). Human audible range ≈ 20 Hz–20 kHz.</li>
    <li><strong>Wavelength (λ)</strong>: Distance between two successive compressions or rarefactions; λ = v/f where v is wave speed.</li>
    <li><strong>Amplitude (A)</strong>: Maximum displacement of particles from equilibrium; determines loudness (perceived intensity).</li>
    <li><strong>Time period (T)</strong>: Reciprocal of frequency, T = 1/f.</li>
    <li><strong>Wave velocity (v)</strong>: Speed at which the disturbance travels; depends on medium properties.</li>
    <li><strong>Intensity (I)</strong>: Power per unit area, measured in watts per square metre (W/m²). Loudness level in decibels (dB) = 10 log₁₀(I/I₀) where I₀ = 10⁻¹² W/m².</li>
    <li><strong>Phase</strong>: Position of a point in time on a waveform cycle; important for interference.</li>
  </ul>

  <h4>Speed of Sound in Different Media</h4>
  <p>The speed of sound (<strong>v</strong>) is given by:</p>
  <ul>
    <li>In gases: v = √(γRT/M) where γ = adiabatic index, R = universal gas constant, T = absolute temperature (K), M = molar mass.</li>
    <li>In liquids: v = √(K/ρ) where K = bulk modulus, ρ = density.</li>
    <li>In solids (longitudinal): v = √(E/ρ) where E = Young’s modulus.</li>
    <li>In solids (shear): v = √(G/ρ) where G = shear modulus.</li>
  </ul>
  <p>Typical values at 0 °C (273 K) and 1 atm:</p>
  <table style="width:100%; border-collapse:collapse;">
    <thead>
      <tr><th style="border:1px solid #ccc; padding:4px;">Medium</th><th style="border:1px solid #ccc; padding:4px;">Speed (m/s)</th></tr>
    </thead>
    <tbody>
      <tr><td style="border:1px solid #ccc; padding:4px;">Air (dry)</td><td style="border:1px solid #ccc; padding:4px;">≈ 331</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Air at 20 °C</td><td style="border:1px solid #ccc; padding:4px;">≈ 343</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Water (20 °C)</td><td style="border:1px solid #ccc; padding:4px;">≈ 1482</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Seawater</td><td style="border:1px solid #ccc; padding:4px;">≈ 1500–1550</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Steel</td><td style="border:1px solid #ccc; padding:4px;">≈ 5960</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Aluminium</td><td style="border:1px solid #ccc; padding:4px;">≈ 6420</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Rubber</td><td style="border:1px solid #ccc; padding:4px;">≈ 60–150</td></tr>
    </tbody>
  </table>

  <h4>Factors Affecting Speed of Sound</h4>
  <ul>
    <li><strong>Temperature</strong>: In gases, v ∝ √T; increase of 1 °C raises speed by ~0.6 m/s in air.</li>
    <li><strong>Humidity</strong>: Water vapour lowers average molar mass, slightly increasing speed.</li>
    <li><strong>Pressure</strong>: At constant temperature, speed in ideal gases is independent of pressure (since ρ ∝ P).</li>
    <li><strong>Medium elasticity and density</strong>: Higher modulus → higher speed; higher density → lower speed.</li>
    <li><strong>Wind</strong>: Adds vectorially to propagation speed (downwind increases, upwind decreases).</li>
  </ul>

  <h4>Reflection, Refraction, and Diffraction</h4>
  <p>When a sound wave encounters a boundary, part of its energy is reflected back into the original medium (<strong>echo</strong>) and part transmitted (<strong>refraction</strong>). The angle of incidence equals angle of reflection (law of reflection). Refraction follows Snell’s law: sinθ₁/sinθ₂ = v₁/v₂. <strong>Diffraction</strong> allows sound to bend around obstacles whose size is comparable to λ; low‑frequency sounds diffract more readily, enabling hearing around corners.</p>

  <h4>Interference and Beats</h4>
  <p>Superposition of two coherent waves yields constructive (amplitude addition) or destructive (cancellation) interference. Path difference Δ = nλ yields maxima; Δ = (n+½)λ yields minima. When frequencies differ slightly (|f₁−f₂| = f_beat), the amplitude modulates at the beat frequency, perceived as periodic waxing and waning of loudness – the <strong>beat phenomenon</strong>. Beat frequency f_beat = |f₁−f₂|.</p>

  <h4>Doppler Effect</h4>
  <p>The apparent change in frequency due to relative motion between source and observer is given by:</p>
  <p>f′ = f (v ± vₒ)/(v ∓ vₛ) where v = sound speed, vₒ = observer speed (positive if moving towards source), vₛ = source speed (positive if moving away from observer).</p>
  <p>Applications: speed traps, asteroid velocity measurement, medical Doppler ultrasound, SONAR target speed estimation.</p>

  <h4>Resonance and Standing Waves</h4>
  <p>When a system is driven at its natural frequency, amplitude builds up – <strong>resonance</strong>. In a pipe closed at one end, resonant frequencies are fₙ = nv/(4L) (n = 1,3,5…). In an open‑open pipe, fₙ = nv/(2L) (n = 1,2,3…). Standing waves consist of nodes (zero displacement) and antinodes (maximum displacement). Resonance principles underlie musical instruments, architectural acoustics, and SONAR transducer design.</p>

  <h4>Acoustics of Enclosures: Reverberation and Sabine’s Formula</h4>
  <p>Reverberation time (RT₆₀) is the time for sound energy to decay by 60 dB after the source stops. Wallace Sabine derived:</p>
  <p>RT₆₀ = 0.161 V / A where V = room volume (m³), A = total absorption (m² sabins) = Σ αᵢSᵢ (αᵢ = absorption coefficient, Sᵢ = surface area).</p>
  <p>Optimal RT₆₀ for speech ≈ 0.5–1.0 s; for music ≈ 1.5–2.5 s. Excessive reverberation reduces intelligibility; insufficient reverberation makes sound “dead”. Acoustic treatment uses absorptive panels, diffusers, and bass traps to achieve desired RT.</p>

  <h4>Ultrasound and Infrasound</h4>
  <p><strong>Ultrasound</strong> (f > 20 kHz) propagates with short λ, enabling fine resolution. Medical imaging uses 2–18 MHz pulses; echo‑time gives depth (d = vt/2). Industrial nondestructive testing detects flaws in metals. SONAR employs 20–500 kHz for underwater range finding.</p>
  <p><strong>Infrasound</strong> (f < 20 Hz) travels long distances with little attenuation, used for monitoring nuclear explosions, volcanic activity, and animal communication (e.g., elephants, whales).</p>

  <h4>Applications in Defence and Technology</h4>
  <ul>
    <li><strong>SONAR (Sound Navigation and Ranging)</strong>: Active SONAR emits pulses and listens for echoes; passive SONAR listens to vessel noise. Range R = (v·t)/2.</li>
    <li><strong>Noise control</strong>: Silencers, acoustic barriers, and hearing protection rely on absorption, reflection, and destructive interference.</li>
    <li><strong>Blast wave analysis</strong>: Shock waves from explosives are treated as nonlinear acoustic phenomena; peak overpressure and impulse inform structural design.</li>
    <li><strong>Acoustic mines and torpedoes</strong>: Detect target via emitted sound or magnetic‑acoustic signatures.</li>
    <li><strong>Communication</strong>: Underwater acoustic links (modulated carriers) enable submarine data exchange.</li>
  </ul>

  <h4>Summary of Key Formulae</h4>
  <table style="width:100%; border-collapse:collapse;">
    <thead>
      <tr><th style="border:1px solid #ccc; padding:4px;">Concept</th><th style="border:1px solid #ccc; padding:4px;">Formula</th><th style="border:1px solid #ccc; padding:4px;">Variables</th></tr>
    </thead>
    <tbody>
      <tr><td style="border:1px solid #ccc; padding:4px;">Wave speed (gas)</td><td style="border:1px solid #ccc; padding:4px;">v = √(γRT/M)</td><td style="border:1px solid #ccc; padding:4px;">γ, R, T, M</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Wave speed (liquid/solid)</td><td style="border:1px solid &quot;#ccc&quot;; padding:4px;">v = √(K/ρ) or √(E/ρ)</td><td style="border:1px solid #ccc; padding:4px;">K/E, ρ</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Frequency‑wavelength relation</td><td style="border:1px solid #ccc; padding:4px;">v = fλ</td><td style="border:1px solid #ccc; padding:4px;">v, f, λ</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Intensity level (dB)</td><td style="border:1px solid #ccc; padding:4px;">L = 10 log₁₀(I/I₀)</td><td style="border:1px solid #ccc; padding:4px;">I, I₀=10⁻¹² W/m²</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Doppler shift</td><td style="border:1px solid #ccc; padding:4px;">f′ = f (v ± vₒ)/(v ∓ vₛ)</td><td style="border:1px solid #ccc; padding:4px;">v, vₒ, vₛ</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Beat frequency</td><td style="border:1px solid #ccc; padding:4px;">f_beat = |f₁−f₂|</td><td style="border:1px solid #ccc; padding:4px;">f₁, f₂</td></tr>
      <tr><td style="border:1px solid #ccc; padding:4px;">Sabine’s RT₆₀</td><td style="border:1px solid #ccc; padding:4px;">RT₆₀ = 0.161 V / A</td><td style="border:1px solid #ccc; padding:4px;">V, A</td></tr>
    </tbody>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The speed of sound in dry air at 0 °C is ≈ 331 m/s and increases by ~0.6 m/s per °C rise.</li>
      <li>Human audible range is 20 Hz–20 kHz; frequencies above this are ultrasound, below are infrasound.</li>
      <li>Decibel scale: 0 dB = threshold of hearing (I₀ = 10⁻¹² W/m²); 60 dB ≈ normal conversation.</li>
      <li>Doppler effect formula for source moving towards stationary observer: f′ = f·v/(v−vₛ).</li>
      <li>Reverberation time RT₆₀ = 0.161 V/A; optimal RT for speech ~0.5–1.0 s, for music ~1.5–2.5 s.</li>
      <li>In a closed pipe, fundamental frequency f₁ = v/(4L); in an open pipe, f₁ = v/(2L).</li>
      <li>Beat frequency equals absolute difference of two interfering frequencies: f_beat = |f₁−f₂|.</li>
      <li>Ultrasound (2–18 MHz) is used in medical imaging; depth d = (v·t)/2 where t is echo‑time.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["newtons-laws"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Newton's Laws of Motion
  </h3>

  <h4>Historical Background</h4>
  <p>The formulation of <strong>Newton's Laws of Motion</strong> appeared in <em>Philosophiæ Naturalis Principia Mathematica</em> (1687) by <strong>[[Isaac Newton]]</strong>. Building on the experimental insights of <strong>[[Galileo Galilei]]</strong> on inertia and the celestial mechanics of <strong>[[Johannes Kepler]]</strong>, Newton unified terrestrial and celestial dynamics under a single theoretical framework. These laws remain the cornerstone of classical mechanics and are extensively tested in NDA, CDS, and AFCAT examinations.</p>

  <h4>Newton's First Law – Law of Inertia</h4>
  <p><strong>[[Newton's First Law]]</strong> states: <em>Every body continues in its state of rest or of uniform motion in a straight line unless compelled to change that state by an external net force.</em> This law introduces the concept of <strong>[[Inertia]]</strong>, the inherent property of matter resisting changes in its motion. Inertia is quantitatively measured by <strong>[[Mass]]</strong>; greater mass implies greater inertia. The law implicitly defines an <strong>[[Inertial frame]]</strong> – a reference frame in which Newton's first law holds true. In non‑inertial frames, fictitious or <strong>[[Pseudo force]]</strong> terms appear (discussed later).</p>
  <p>Everyday examples: a book resting on a table remains at rest until a push is applied; a passenger lurches forward when a moving vehicle stops suddenly because the torso tends to maintain its state of uniform motion.</p>

  <h4>Newton's Second Law – Law of Acceleration</h4>
  <p><strong>[[Newton's Second Law]]</strong> provides the quantitative relation between force, mass, and acceleration: <strong>[[F = ma]]</strong>, where <strong>[[Force]]</strong> is the net external force acting on a body, <strong>[[Mass]]</strong> is its inertial mass, and <strong>[[Acceleration]]</strong> is the resulting rate of change of velocity. The law is vectorial: <vec{F}> = m<vec{a}>. It implies that acceleration is directly proportional to net force and inversely proportional to mass.</p>
  <p>Important derivations:</p>
  <ul>
    <li><strong>Impulse–Momentum Theorem</strong>: Integrating F = ma over time gives <strong>[[Impulse]]</strong> = Δ<strong>[[Momentum]]</strong>, i.e., <vec{J}> = ∫<vec{F}> dt = m<vec{v>_f} – m<vec{v>_i>. This principle is crucial for collision problems.</li>
    <li><strong>Work‑Energy Connection</strong>: Multiplying F = ma by displacement ds and integrating yields the work‑energy theorem: W = ΔK, where K = ½mv².</li>
    <li><strong>Variable Mass Systems</strong>: For rockets, the law extends to F = d(mv)/dt = v_rel dm/dt + ma, accounting for exhaust velocity.</li>
  </ul>
  <p>Applications include calculating tension in strings, normal reaction on inclined planes, and determining acceleration in pulley systems (Atwood machine).</p>

  <h4>Newton's Third Law – Law of Action and Reaction</h4>
  <p><strong>[[Newton's Third Law]]</strong> asserts: <em>For every action, there is an equal and opposite reaction.</em> If body A exerts a force <vec{F}>_{AB} on body B, then body B simultaneously exerts a force <vec{F}>_{BA} = –<vec{F}>_{AB} on body A. The two forces act on different bodies, are equal in magnitude, opposite in direction, and are of the same type (e.g., both gravitational, both contact).</p>
  <p>Common misconceptions: the action and reaction do not cancel each other because they act on distinct objects. Examples: walking (foot pushes ground backward, ground pushes foot forward), rocket propulsion (exhaust gases expelled downward, rocket experiences upward thrust), and tension in a rope (pull on one end equals pull on the other).</p>

  <h4>Free‑Body Diagrams and Problem‑Solving Strategy</h4>
  <p>Effective application of Newton's laws requires isolating the body of interest and representing all forces acting on it via a <strong>[[Free-body diagram]]</strong>. The steps are:</p>
  <ol>
    <li>Identify the system and draw its outline.</li>
    <li>Represent all external forces: weight (<strong>[[Weight]]</strong> = mg), normal reaction (<strong>[[Normal reaction]]</strong>), friction (<strong>[[Friction]]</strong>), tension (<strong>[[Tension]]</strong>), applied pushes/pulls, etc.</li>
    <li>Resolve forces into convenient components (usually along perpendicular axes).</li>
    <li>Apply <strong>[[Newton's Second Law]]</strong> separately for each axis: ΣF_x = ma_x, ΣF_y = ma_y.</li>
    <li>Solve the resulting algebraic equations for unknowns (acceleration, tension, etc.).</li>
    <li>Check consistency with <strong>[[Newton's Third Law]]</strong> (action‑reaction pairs) and constraints (e.g., inextensible strings).</li
`;

EXPANDED_NOTES_DATA["physics-em-waves"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Electromagnetic Waves & Spectrum
  </h3>

  <h4>Introduction to Electromagnetic Waves</h4>
  <p>An <strong>electromagnetic wave</strong> is a self‑propagating disturbance in the electric and magnetic fields that travels through space at the <strong>speed of light</strong> (<em>c</em> ≈ 3.00×10⁸ m s⁻¹) in vacuum. Unlike mechanical waves, EM waves do not require a medium; they can propagate <em>in vacuo</em> as well as through dielectrics, conductors, and plasmas. The theoretical foundation was laid by [[James Clerk Maxwell]] in the 1860s, who unified electricity, magnetism, and optics into a single set of four partial differential equations now known as [[Maxwell’s equations]]. The first experimental confirmation came in 1887 when [[Heinrich Hertz]] generated and detected radio waves, thereby validating Maxwell’s prediction.</p>

  <h4>Maxwell’s Equations and Wave Derivation</h4>
  <p>In differential form, Maxwell’s equations in free space are:</p>
  <ul>
    <li>∇·𝐄 = 0 (Gauss’s law for electricity)</li>
    <li>∇·𝐁 = 0 (Gauss’s law for magnetism)</li>
    <li>∇×𝐄 = –∂𝐁/∂t (Faraday’s law of induction)</li>
    <li>∇×𝐁 = μ₀ε₀ ∂𝐄/∂t (Ampère‑Maxwell law)</li>
  </ul>
  <p>Taking the curl of Faraday’s law and substituting the Ampère‑Maxwell law yields the wave equation for the electric field:</p>
  <p>∇²𝐄 – μ₀ε₀ ∂²𝐄/∂t² = 0</p>
  <p>An identical equation holds for the magnetic field 𝐁. The term μ₀ε₀ is the reciprocal of the square of the speed of light: <strong>c = 1/√(μ₀ε₀)</strong>. The solutions are sinusoidal plane waves of the form 𝐄(𝐫,t) = 𝐄₀ cos(**k**·𝐫 – ωt + φ), where **k** is the wave‑vector (|**k**| = 2π/λ) and ω = 2πf is the angular frequency. The electric and magnetic field vectors are mutually perpendicular, in phase, and both perpendicular to the direction of propagation (**k**).</p>

  <h4>Key Characteristics of EM Waves</h4>
  <ul>
    <li><strong>Transverse nature</strong>: 𝐄 ⟂ 𝐁 ⟂ propagation direction.</li>
    <li><strong>Speed in a medium</strong>: v = c/√(εᵣμᵣ), where εᵣ and μᵣ are relative permittivity and permeability.</li>
    <li><strong>Energy transport</strong>: Described by the <strong>Poynting vector** 𝐒 = (1/μ₀)𝐄×𝐁, whose time‑average gives the intensity I = ⟨S⟩.</li>
    <li><strong>Polarization</strong>: Orientation of the electric field vector; can be linear, circular, or elliptical.</li>
    <li><strong>Superposition and interference</strong>: EM waves obey the principle of linear superposition, leading to phenomena such as diffraction, thin‑film interference, and holography.</li>
    <li><strong>Reflection, refraction, and dispersion</strong>: Governed by Fresnel equations and Snell’s law; dispersion arises because εᵣ depends on frequency.</li>
  </ul>

  <h4>Electromagnetic Spectrum – Classification by Frequency/Wavelength</h4>
  <p>The <strong>electromagnetic spectrum</strong> is the continuous distribution of EM waves ordered by frequency (f) or wavelength (λ). Although the spectrum is continuous, conventional bands are defined for practical applications. The table below summarizes the major bands, their typical frequency ranges, wavelength ranges, and representative sources/detectors.</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Band</th>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Frequency (f)</th>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Wavelength (λ)</th>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Typical Sources / Detectors</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Radio Waves</strong></td>
        <td style="border:1px solid #555; padding:6px;">3 kHz – 300 GHz</td>
        <td style="border:1px solid #555; padding:6px;">100 km – 1 mm</td>
        <td style="border:1px solid #555; padding:6px;">Antennas, AM/FM broadcast, radar, MRI</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Microwaves</strong></td>
        <td style="border:1px solid #555; padding:6px;">300 MHz – 300 GHz</td>
        <td style="border:1px solid #555; padding:6px;">1 m – 1 mm</td>
        <td style="border:1px solid #555; padding:6px;">Microwave ovens, satellite communication, Wi‑Fi, microwave radiometers</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Infrared (IR)</strong></td>
        <td style="border:1px solid #555; padding:6px;">300 GHz – 400 THz</td>
        <td style="border:1px solid #555; padding:6px;">1 mm – 750 nm</td>
        <td style="border:1px solid #555; padding:6px;">Thermal imaging, remote sensing, night‑vision, IR spectroscopy</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Visible Light</strong></td>
        <td style="border:1px solid #555; padding:6px;">400 THz – 790 THz</td>
        <td style="border:1px solid #555; padding:6px;">750 nm – 380 nm</td>
        <td style="border:1px solid #555; padding:6px;">Sun, lasers, LEDs, human eye, photographic film</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Ultraviolet (UV)</strong></td>
        <td style="border:1px solid #555; padding:6px;">790 THz – 30 PHz</td>
        <td style="border:1px solid #555; padding:6px;">380 nm – 10 nm</td>
        <td style="border:1px solid #555; padding:6px;">Sunburn, sterilization, UV lithography, fluorescence</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>X‑rays</strong></td>
        <td style="border:1px solid #555; padding:6px;">30 PHz – 30 EHz</td>
        <td style="border:1px solid #555; padding:6px;">10 nm – 0.01 nm</td>
        <td style="border:1px solid #555; padding:6px;">Medical radiography, CT scans, X‑ray crystallography, airport security</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Gamma Rays</strong></td>
        <td style="border:1px solid #555; padding:6px;">>30 EHz</td>
        <td style="border:1px solid #555; padding:6px;"><0.01 nm</td>
        <td style="border:1px solid #555; padding:6px;">Radioactive decay, nuclear explosions, astrophysical bursts, PET scans</td>
      </tr>
    </tbody>
  </table>

  <h4>Propagation in Different Media</h4>
  <p>When an EM wave enters a material, its speed changes according to the refractive index n = √(εᵣμᵣ). The wave undergoes partial reflection and transmission at interfaces, described by the Fresnel coefficients. In conductive media, the wave experiences attenuation characterized by the skin depth δ = √(2/(μσω)), where σ is electrical conductivity. This principle underlies shielding effectiveness and the operation of waveguides. In plasmas, the dispersion relation ω² = ωₚ² + c²k² (where ωₚ is the plasma frequency) leads to cutoff frequencies below which waves cannot propagate—a key concept in ionospheric radio communication.</p>

  <h4>Production and Detection Techniques</h4>
  <ul>
    <li><strong>Radio/microwave</strong>: Oscillating currents in antennas (dipole, loop, horn) or resonant cavities (klystron, magnetron).</li>
    <li><strong>Infrared</strong>: Thermal blackbody radiation; quantum cascade lasers; photodiodes (InGaAs, HgCdTe).</li>
    <li><strong>Visible</strong>: Electron transitions in atoms/molecules (gas discharge, LEDs), lasers (stimulated emission).</li>
    <li><strong>Ultraviolet</strong>: Gas discharge lamps (mercury vapor), excimer lasers, photoelectric emission.</li>
    <li><strong>X‑rays</strong>: Bremsstrahlung from decelerating electrons (Coolidge tube), characteristic lines from inner‑shell electron transitions, synchrotron radiation.</li>
    <li><strong>Gamma rays</strong>: Nuclear decay (α, β⁺, β⁻), annihilation radiation (e⁺e⁻ → 2γ), nuclear reactions, astrophysical processes (pion decay, bremsstrahlung in relativistic jets).</li>
  </ul>

  <h4>Applications Relevant to Defence Exams</h4>
  <p>Understanding EM waves is essential for radar (radio/microwave), communication systems (HF, VHF, UHF, satellite links), electro‑optical targeting (IR/visible), nuclear detection (gamma‑ray spectroscopy), and electronic warfare (jamming, spoofing). The concept of <strong>skin depth</strong> explains why metals shield low‑frequency magnetic fields poorly but reflect high‑frequency radiation effectively. The <strong>Doppler shift</strong> of EM waves underpins speed guns, radar velocity measurement, and astrophysical redshift/blueshift.</p>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>[[James Clerk Maxwell]] predicted EM waves in 1865; [[Heinrich Hertz]] experimentally confirmed them in 1887.</li>
      <li>Speed of light in vacuum <em>c</em> = 2.99792458×10⁸ m s⁻¹ (exact by definition).</li>
      <li>EM waves are transverse; electric and magnetic fields oscillate in phase and are perpendicular to propagation.</li>
      <li>The Poynting vector **S** = (1/μ₀)**E**×**B** gives instantaneous power flux; its average equals intensity I.</li>
      <li>In a medium, wave speed v = c/√(εᵣμᵣ); refractive index n = √(εᵣμᵣ).</li>
      <li>Skin depth δ = √(2/(μσω)); decreases with increasing frequency and conductivity.</li>
      <li>Radio waves (3 kHz–300 GHz) are used for AM/FM broadcast, radar, and satellite communication.</li>
      <li>Gamma rays (>30 EHz) originate from nuclear decay and have penetrating power used in radiotherapy and PET imaging.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-heat"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Thermodynamics & Heat Transfer
  </h3>

  <h4><strong>1. Fundamental Definitions</strong></h4>
  <ul>
    <li><strong>System</strong>: The portion of the universe under study. Classified as <em>isolated</em>, <em>closed</em>, or <em>open</em>.</li>
    <li><strong>Surroundings</strong>: Everything external to the system.</li>
    <li><strong>State Variables</strong>: Properties that define the equilibrium state (e.g., <strong>pressure (P)</strong>, <strong>volume (V)</strong>, <strong>temperature (T)</strong>, <strong>internal energy (U)</strong>, <strong>enthalpy (H)</strong>, <strong>entropy (S)</strong>).</li>
    <li><strong>Process</strong>: Transformation from one equilibrium state to another. Types include <em>isobaric</em>, <em>isochoric</em>, <em>isothermal</em>, <em>adiabatic</em>, and <em>polytropic</em>.</li>
  </ul>

  <h4><strong>2. The Four Laws of Thermodynamics</strong></h4>

  <h5><strong>2.1 Zeroth Law – Thermal Equilibrium</strong></h5>
  <p>If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other. This law establishes the concept of <strong>temperature</strong> as a measurable scalar.</p>

  <h5><strong>2.2 First Law – Conservation of Energy</strong></h5>
  <p>Mathematically, <strong>ΔU = Q – W</strong>, where:</p>
  <ul>
    <li><strong>ΔU</strong> – Change in internal energy of the system.</li>
    <li><strong>Q</strong> – Net heat supplied to the system (positive when added).</li>
    <li><strong>W</strong> – Work done by the system (positive when done by the system).</li>
  </ul>
  <p>Key historical contributors: [[James Joule]] (1840s), [[Rudolf Clausius]] (1850), and [[Lord Kelvin]] (1851). The first law is a statement of the <em>principle of energy conservation</em> for thermodynamic processes.</p>

  <h5><strong>2.3 Second Law – Directionality & Entropy</strong></h5>
  <p>The second law can be expressed in several equivalent forms:</p>
  <ul>
    <li><strong>Kelvin‑Planck statement</strong>: It is impossible to construct a device that operates in a cycle and produces no effect other than the extraction of heat from a single reservoir and the performance of an equivalent amount of work.</li>
    <li><strong>Clausius statement</strong>: Heat cannot spontaneously flow from a colder body to a hotter body without external work.</li>
    <li><strong>Entropy formulation</strong>: For any real (irreversible) process, <strong>ΔS ≥ Q_rev/T</strong>. For a reversible process, equality holds.</li>
  </ul>
  <p>Key constants:</p>
  <ul>
    <li><strong>Boltzmann constant (k_B)</strong> = 1.380 × 10⁻²³ J K⁻¹.</li>
    <li><strong>Gas constant (R)</strong> = 8.314 J mol⁻¹ K⁻¹.</li>
  </ul>

  <h5><strong>2.4 Third Law – Absolute Zero</strong></h5>
  <p>As <strong>T → 0 K</strong>, the entropy of a perfect crystal approaches a constant (often taken as zero). This provides a reference point for entropy calculations.</p>

  <h4><strong>3. Thermodynamic Potentials & Maxwell Relations</strong></h4>
  <p>Thermodynamic potentials are derived from Legendre transformations and are indispensable for solving problems with constraints.</p>
  <ul>
    <li><strong>Helmholtz free energy (A)</strong> = U – TS (useful for constant‑V, constant‑T systems).</li>
    <li><strong>Gibbs free energy (G)</strong> = H – TS (primary for constant‑P, constant‑T processes, e.g., chemical reactions).</li>
    <li><strong>Enthalpy (H)</strong> = U + PV (convenient for constant‑P processes).</li>
  </ul>
  <p>From the differential forms, the four <strong>Maxwell relations</strong> are obtained:</p>
  <table border="1" cellpadding="5" cellspacing="0" style="border-collapse:collapse; width:100%; margin-top:10px;">
    <tr><th>Potential</th><th>Maxwell Relation</th></tr>
    <tr><td>A(T,V)</td><td>(∂S/∂V)_T = (∂P/∂T)_V</td></tr>
    <tr><td>H(S,P)</td><td>(∂T/∂P)_S = –(∂V/∂S)_P</td></tr>
    <tr><td>G(T,P)</td><td>(∂S/∂P)_T = –(∂V/∂T)_P</td></tr>
    <tr><td>U(S,V)</td><td>(∂T/∂V)_S = –(∂P/∂S)_V</td></tr>
  </table>

  <h4><strong>4. Ideal Gas and Real Gas Behaviour</strong></h4>
  <p>The <strong>ideal gas law</strong> is expressed as <strong>PV = nRT</strong> or, per mole, <strong>PV = RT</strong>. For a monatomic ideal gas, internal energy <strong>U = (3/2)nRT</strong>, and <strong>C_V = (3/2)R</strong>, <strong>C_P = (5/2)R</strong>.</p>
  <p>Real gases deviate due to intermolecular forces. The <strong>van der Waals equation</strong> provides a first correction:</p>
  <p><strong>(P + a n²/V²)(V – nb) = nRT</strong>, where <strong>a</strong> and <strong>b</strong> are substance‑specific constants (e.g., for CO₂, a = 3.59 Pa·m⁶ mol⁻², b = 4.27 × 10⁻⁵ m³ mol⁻¹).</p>

  <h4><strong>5. Carnot Cycle and Efficiency</strong></h4>
  <p>The <em>Carnot cycle</em> is an idealized reversible cycle consisting of two isothermal and two adiabatic processes. Its efficiency is the maximum possible for any heat engine operating between two reservoirs:</p>
  <p><strong>η_Carnot = 1 – (T_C / T_H)</strong>, where temperatures are in Kelvin.</p>
  <p>Key historical figure: [[Sadi Carnot]] (1824). The cycle underpins the concept of <strong>entropy</strong> and sets the benchmark for real engines.</p>

  <h4><strong>6. Heat Transfer Mechanisms</strong></h4>

  <h5><strong>6.1 Conduction</strong></h5>
  <p>Heat transfer through a stationary medium is governed by <strong>Fourier’s law</strong>:</p>
  <p><strong>q = –k ∇T</strong>, where:</p>
  <ul>
    <li><strong>q</strong> – Heat flux (W m⁻²).</li>
    <li><strong>k</strong> – Thermal conductivity (W m⁻¹ K⁻¹).</li>
    <li>∇T – Temperature gradient.</li>
  </ul>
  <p>Typical thermal conductivities (k) at 300 K:</p>
  <table border="1" cellpadding="5" cellspacing="0" style="border-collapse:collapse; width:100%; margin-top:10px;">
    <tr><th>Material</th><th>k (W m⁻¹ K⁻¹)</th></tr>
    <tr><td>[[Copper]]</td><td>401</td></tr>
    <tr><td>[[Aluminium]]</td><td>237</td></tr>
    <tr><td>[[Stainless steel]] (304)</td><td>16</td></tr>
    <tr><td>[[Glass]] (float)</td><td>1.0</td></tr>
    <tr><td>[[Air]] (still, 300 K)</td><td>0.024</td></tr>
  </table>
  <p>For one‑dimensional steady conduction through a slab of thickness <strong>L</strong> and area <strong>A</strong>:</p>
  <p><strong>Q = (k A ΔT) / L</strong>.</p>

  <h5><strong>6.2 Convection</strong></h5>
  <p>Convection involves bulk fluid motion. The heat transfer rate is expressed by <strong>Newton’s law of cooling</strong>:</p>
  <p><strong>Q = h A (T_s – T_∞)</strong>, where:</p>
  <ul>
    <li><strong>h</strong> – Convective heat‑transfer coefficient (W m⁻² K⁻¹). Typical values: natural convection in air ≈ 5–25 W m⁻² K⁻¹; forced convection with fans ≈ 50–250 W m⁻² K⁻¹.</li>
    <li><strong>T_s</strong> – Surface temperature.</li>
    <li><strong>T_∞</strong> – Ambient fluid temperature.</li>
  </ul>
  <p>Dimensionless numbers governing convection:</p>
  <ul>
    <li><strong>Reynolds number (Re) = ρ v L / μ</strong> – characterises flow regime (laminar < 2300, turbulent > 4000).</li>
    <li><strong>Prandtl number (Pr) = ν / α = μ C_p / k</strong> – ratio of momentum diffusivity to thermal diffusivity.</li>
    <li><strong>Nusselt number (Nu) = h L / k</strong> – relates convective to conductive heat transfer.</li>
  </ul>

  <h5><strong>6.3 Radiation</strong></h5>
  <p>All bodies emit electromagnetic radiation depending on temperature. The net radiative exchange between a surface and its surroundings is given by the <strong>Stefan‑Boltzmann law</strong>:</p>
  <p><strong>Q_rad = ε σ A (T⁴ – T_surr⁴)</strong>, where:</p>
  <ul>
    <li><strong>ε</strong> – Emissivity (0 ≤ ε ≤ 1). Polished aluminium ≈ 0.04; blackbody ≈ 1.</li>
    <li><strong>σ</strong> – Stefan‑Boltzmann constant = 5.670 × 10⁻⁸ W m⁻² K⁻⁴.</li>
    <li><strong>T</strong> – Absolute temperature of the emitting surface (K).</li>
    <li><strong>T_surr</strong> – Temperature of surroundings (K).</li>
  </ul>
  <p>Radiative heat transfer is dominant at temperatures > 500 K and in vacuum environments (e.g., spacecraft thermal control).</p>

  <h4><strong>7. Combined Heat Transfer Problems</strong></h4>
  <p>In engineering practice, multiple modes act simultaneously. The overall thermal resistance concept is useful:</p>
  <p><strong>R_total = R_cond + R_conv + R_rad</strong>, where each resistance is defined as:</p>
  <ul>
    <li><strong>R_cond = L / (k A)</strong> (conduction).</li>
    <li><strong>R_conv = 1 / (h A)</strong> (convection).</li>
    <li><strong>R_rad = 1 / (ε σ A (T_avg)³)</strong> (linearised radiation around an average temperature <strong>T_avg</strong>).</li>
  </ul>
  <p>The heat flow is then <strong>Q = ΔT / R_total</strong>. This approach is frequently tested in NDA/CDS quantitative problems.</p>

  <h4><strong>8. Important Constants & Typical Values</strong></h4>
  <table border="1" cellpadding="5" cellspacing="0" style="border-collapse:collapse; width:100%; margin-top:10px;">
    <tr><th>Quantity</th><th>Symbol</th><th>Value</th><th>Units</th></tr>
    <tr><td>Boltzmann constant</td><td>k_B</td><td>1.380 × 10⁻²³</td><td>J K⁻¹</td></tr>
    <tr><td>Stefan‑Boltzmann constant</td><td>σ</td><td>5.670 × 10⁻⁸</td><td>W m⁻² K⁻⁴</td></tr>
    <tr><td>Gas constant</td><td>R</td><td>8.314</td><td>J mol⁻¹ K⁻¹</td></tr>
    <tr><td>Specific heat of water (liquid)</td><td>C_p</td><td>4.186</td><td>kJ kg⁻¹ K⁻¹</td></tr>
    <tr><td>Latent heat of fusion (water)</td><td>L_f</td><td>334</td><td>kJ kg⁻¹</td></tr>
    <tr><td>Latent heat of vaporisation (water)</td><td>L_v</td><td>2260</td><td>kJ kg⁻¹</td></tr>
  </table>

  <h4><strong>9. Frequently Appearing Historical Experiments</strong></h4>
  <ul>
    <li>[[James Prescott Joule]]’s paddle‑wheel experiment (1845) established the mechanical equivalent of heat (~4.186 J cal⁻¹).</li>
    <li>[[Rudolf Clausius]] introduced the concept of entropy (1865) and formulated the second law mathematically.</li>
    <li>[[Lord Kelvin]] (William Thomson) defined the absolute temperature scale (1848) and formulated the Kelvin‑Planck statement.</li>
    <li>[[Maxwell]]’s demon thought‑experiment (1867) sparked discussions on the statistical nature of entropy.</li>
    <li>[[Nikolaus Riecke]] and [[Hermann von Helmholtz]] contributed to the development of the first law in the 1850s.</li>
  </ul>

  <h4><strong>10. Application in Defence Context</strong></h4>
  <p>Understanding thermodynamics is critical for:</p>
  <ul>
    <li><strong>Jet engine performance</strong>: Turbine inlet temperature, compressor pressure ratio, and Brayton cycle efficiency.</li>
    <li><strong>Missile propulsion</strong>: Solid‑propellant burn rates, specific impulse, and heat‑shield design.</li>
    <li><strong>Electronic warfare equipment</strong>: Heat dissipation in high‑power radars, use of forced convection and heat‑pipes.</li>
    <li><strong>Survival training</strong>: Caloric requirements, heat loss in extreme climates (wind chill factor, evaporative cooling).</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>η<sub>Carnot</sub> = 1 – (T<sub>C</sub>/T<sub>H</sub>) (T in Kelvin) – maximum possible efficiency.</li>
      <li>First‑law sign convention: ΔU = Q – W (heat added +, work done by system –).</li>
      <li>Stefan‑Boltzmann constant σ = 5.670 × 10⁻⁸ W m⁻² K⁻⁴.</li>
      <li>Thermal conductivity of copper ≈ 401 W m⁻¹ K⁻¹; of air (still) ≈ 0.024 W m⁻¹ K⁻¹.</li>
      <li>For ideal gas, C<sub>P</sub> – C<sub>V</sub> = R (Mayer’s relation).</li>
      <li>Entropy change for reversible isothermal expansion: ΔS = nR ln(V₂/V₁).</li>
      <li>Heat‑transfer coefficient for natural convection in air ≈ 10 W m⁻² K⁻¹; for forced air ≈ 50–250 W m⁻² K⁻¹.</li>
      <li>Latent heat of vaporisation of water = 2260 kJ kg⁻¹ (critical for cooling systems).</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-em-waves"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Electromagnetic Waves & Spectrum
  </h3>

  <h4>Introduction</h4>
  <p>Electromagnetic (EM) waves are self‑propagating oscillations of electric and magnetic fields that travel through space without requiring a material medium. Their existence was first predicted theoretically by the Scottish physicist <strong>[[James Clerk Maxwell]]</strong> in the 1860s and later confirmed experimentally by the German physicist <strong>[[Heinrich Hertz]]</strong> in 1887. EM waves constitute a fundamental aspect of modern physics, underpinning technologies ranging from radio communication to medical imaging and astrophysics.</p>

  <h4>Maxwell’s Equations and the Wave Equation</h4>
  <p>Maxwell unified electricity and magnetism into four concise differential equations. In a source‑free, linear, isotropic medium (or vacuum) they reduce to the wave equations for the electric field <strong>E</strong> and magnetic field <strong>B</strong>:</p>
  <ul>
    <li>∇²<strong>E</strong> = μ₀ε₀ ∂²<strong>E</strong>/∂t²</li>
    <li>∇²<strong>B</strong> = μ₀ε₀ ∂²<strong>B</strong>/∂t²</li>
  </ul>
  <p>Here μ₀ is the permeability of free space and ε₀ the permittivity of free space. Comparing with the standard wave form ∇²ψ = (1/v²) ∂²ψ/∂t² yields the propagation speed</p>
  <p><strong>c = 1/√(μ₀ε₀) ≈ 3.00×10⁸ m s⁻¹</strong>, the speed of light in vacuum. The solutions are transverse waves: <strong>E</strong>, <strong>B</strong>, and the direction of propagation **k** are mutually perpendicular.</p>
  <p>The ratio of the field amplitudes follows from Faraday’s and Ampère‑Maxwell laws:</p>
  <p><strong>E₀ = c B₀</strong>.</p>
  <p>The energy density stored in the fields is</p>
  <p><strong>u = ½ ε₀E² + ½ B²/μ₀ = ε₀E² = B²/μ₀</strong> (in vacuum the electric and magnetic contributions are equal).</p>
  <p>The intensity (average power per unit area) of a plane wave is</p>
  <p><strong>I = ⟨S⟩ = ½ c ε₀E₀² = (c/2μ₀) B₀²</strong>.</p>

  <h4>Fundamental Properties</h4>
  <ul>
    <li><strong>Transverse nature</strong>: Oscillations of **E** and **B** are perpendicular to propagation.</li>
    <li><strong>Linear superposition</strong>: EM waves obey the principle of superposition, enabling interference and diffraction.</li>
    <li><strong>Polarization</strong>: The orientation of the **E**‑vector defines polarization; it can be linear, circular, or elliptical.</li>
    <li><strong>Wave‑particle duality</strong>: EM radiation also exhibits quantised photon behaviour, with energy <strong>E = hν</strong> (Planck’s constant <strong>h = 6.626×10⁻³⁴ J·s</strong>) and momentum <strong>p = E/c</strong>.</li>
    <li><strong>Refractive index</strong>: In a medium, speed reduces to v = c/n, where n is the refractive index; this leads to Snell’s law <strong>n₁ sinθ₁ = n₂ sinθ₂</strong>.</li>
  </ul>

  <h4>Production and Detection</h4>
  <p>EM waves are generated by accelerating charges. A simple dipole antenna carrying an alternating current radiates waves whose frequency matches that of the current. Other production mechanisms include:</p>
  <ul>
    <li><strong>Thermal radiation</strong> (black‑body emission) – described by Planck’s law; responsible for infrared and visible emission from hot bodies.</li>
    <li><strong>Synchrotron radiation</strong> – emitted by relativistic electrons spiralling in magnetic fields (important in astrophysics).</li>
    <li><strong>Bremsstrahlung</strong> – deceleration of high‑energy electrons in the Coulomb field of nuclei produces continuous X‑ray spectra.</li>
    <li><strong>Nuclear transitions</strong> – gamma‑ray emission following radioactive decay or nuclear reactions.</li>
    <li><strong>Molecular vibrations/rotations</strong> – give rise to infrared and microwave spectra.</li>
  </ul>
  <p>Detection relies on the interaction of EM waves with matter:</p>
  <ul>
    <li>Antennas and resonant circuits for radio/microwaves.</li>
    <li>Bolometers and photodiodes for infrared/visible.</li>
    <li>Photomultiplier tubes, CCDs, and CMOS sensors for UV/visible.</li>
    <li>Ionisation chambers, scintillators, and semiconductor detectors for X‑rays and gamma‑rays.</li>
  </ul>

  <h4>Electromagnetic Spectrum</h4>
  <p>The EM spectrum is a continuous distribution of waves classified by wavelength (λ) or frequency (ν). Although the boundaries are somewhat arbitrary, each region has characteristic sources, interactions, and applications.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Region</th>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Typical λ Range</th>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Typical ν Range</th>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Primary Sources</th>
        <th style="border:1px solid #555; padding:6px; background:#2a2a3a;">Key Applications</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Radio waves</strong></td>
        <td style="border:1px solid #555; padding:6px;">> 1 mm (up to >10⁴ m)</td>
        <td style="border:1px solid #555; padding:6px;">< 300 GHz</td>
        <td style="border:1px solid #555; padding:6px;">Oscillating currents in antennas; <strong>[[Guglielmo Marconi]]</strong>’s early transmitters; astronomical pulsars.</td>
        <td style="border:1px solid #555; padding:6px;">Broadcast (AM/FM), television, mobile phones, Wi‑Fi, radar, satellite communication, radio astronomy.</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Microwaves</strong></td>
        <td style="border:1px solid #555; padding:6px;">1 mm – 1 m</td>
        <td style="border:1px solid #555; padding:6px;">300 MHz – 300 GHz</td>
        <td style="border:1px solid #555; padding:6px;">Magnetrons (microwave ovens), Gunn diodes, stellar masers, cosmic microwave background (CMB) discovered by <strong>[[Arno Penzias]]</strong> and <strong>[[Robert Wilson]]</strong>.</td>
        <td style="border:1px solid #555; padding:6px;">Microwave ovens, satellite links, Wi‑Fi, Bluetooth, radar, remote sensing, plasma heating.</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Infrared (IR)</strong></td>
        <td style="border:1px solid #555; padding:6px;">700 nm – 1 mm</td>
        <td style="border:1px solid #555; padding:6px;">300 GHz – 400 THz</td>
        <td style="border:1px solid #555; padding:6px;">Thermal emission from objects at ~300 K; molecular vibrational transitions; <strong>[[William Herschel]]</strong>’s discovery.</td>
        <td style="border:1px solid #555; padding:6px;">Night‑vision, thermal imaging, spectroscopy, telecommunications (fibre optics), weather satellites, climate monitoring.</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Visible light</strong></td>
        <td style="border:1px solid #555; padding:6px;">380 nm – 750 nm</td>
        <td style="border:1px solid #555; padding:6px;">400 THz – 790 THz</td>
        <td style="border:1px solid #555; padding:6px;">Black‑body radiation (Sun, incandescent lamps), electronic transitions in atoms/molecules, <strong>[[Isaac Newton]]</strong>’s prism experiments.</td>
        <td style="border:1px solid #555; padding:6px;">Human vision, photography, illumination, optical fibres, lasers, displays, photosynthesis.</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Ultraviolet (UV)</strong></td>
        <td style="border:1px solid #555; padding:6px;">10 nm – 380 nm</td>
        <td style="border:1px solid #555; padding:6px;">790 THz – 30 PHz</td>
        <td style="border:1px solid #555; padding:6px;">Solar UV (UVA, UVB, UVC), mercury vapour lamps, <strong>[[Marie Curie]]</strong>’s work on radioactivity (indirect), stellar atmospheres.</td>
        <td style="border:1px solid #555; padding:6px;">Sterilisation, fluorescence, photolithography, vitamin D synthesis, ozone layer monitoring, astronomical UV telescopes.</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>X‑rays</strong></td>
        <td style="border:1px solid #555; padding:6px;">0.01 nm – 10 nm</td>
        <td style="border:1px solid #555; padding:6px;">30 PHz – 30 EHz</td>
        <td style="border:1px solid #555; padding:6px;">Bremsstrahlung from high‑energy electrons, characteristic lines from inner‑shell transitions, <strong>[[Wilhelm Conrad Röntgen]]</strong>’s 1895 discovery.</td>
        <td style="border:1px solid #555; padding:6px;">Medical radiography, CT scans, security screening, X‑ray crystallography (DNA structure by <strong>[[James Watson]]</strong> & <strong>[[Francis Crick]]</strong>), astrophysical X‑ray observatories.</td>
      </tr>
      <tr>
        <td style="border:1px solid #555; padding:6px;"><strong>Gamma rays</strong></td>
        <td style="border:1px solid #555; padding:6px;">< 0.01 nm</td>
        <td style="border:1px solid #555; padding:6px;">> 30 EHz</td>
        <td style="border:1px solid #555; padding:6px;">Nuclear decay, <strong>[[Albert Einstein]]</strong>’s mass‑energy equivalence (E=mc²) in particle‑antiparticle annihilation, pulsars, gamma‑ray bursts.</td>
        <td style="border:1px solid #555; padding:6px;">Cancer radiotherapy, PET scans, sterilisation, astrophysics (Fermi Gamma‑ray Space Telescope), nuclear industry monitoring.</td>
      </tr>
    </tbody>
  </table>

  <h4>Applications Across the Spectrum</h4>
  <p>The vast utility of EM waves stems from their diverse interaction mechanisms with matter:</p>
  <ul>
    <li><strong>Communication</strong>: Radio, microwaves, and infrared enable wireless links; fibre‑optic communication uses near‑infrared (≈1550 nm) for low‑loss data transmission.</li>
    <li><strong>Navigation and Radar</strong>: Microwave radar determines range and velocity of aircraft, ships, and weather systems.</li>
    <li><strong>Medical Imaging</strong>: X‑rays provide structural imaging; gamma‑ray PET scans reveal metabolic activity; MRI uses radio‑frequency pulses in a magnetic field.</li>
    <li><strong>Remote Sensing</strong>: Satellite sensors capture visible, infrared, and microwave emissions to monitor land use, vegetation health, sea surface temperature, and atmospheric gases.</li>
    <li><strong>Industrial Processes</strong>: Microwave heating, UV curing of polymers, infrared drying, and X‑ray non‑destructive testing.</li>
    <li><strong>Scientific Research</strong>: Spectroscopy across the spectrum elucidates atomic/molecular structure; synchrotron radiation sources provide intense X‑rays for material science.</li>
  </ul>

  <h4>Biological Effects and Safety</h4>
  <p>Interaction of EM radiation with biological tissue depends on photon energy:</p>
  <ul>
    <li><strong>Non‑ionising region</strong> (radio, microwave, infrared, visible): Primarily causes thermal effects. Exposure limits are based on Specific Absorption Rate (SAR) – e.g., the FCC limit for mobile phones is 1.6 W/kg averaged over 1 g of tissue.</li>
    <li><strong>Ionising region</strong> (UV‑B/C, X‑rays, gamma): Photons possess sufficient energy to eject electrons, causing DNA damage. Protective measures include lead aprons for X‑rays, sunscreen for UV, and time‑distance‑shielding principles for gamma sources.</li>
    <li><strong>Special considerations</strong>: Laser radiation can cause photochemical retinal injury even at low powers due to coherence; hence laser safety classes (1–4) are enforced.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Maxwell’s prediction of EM waves gave the speed <strong>c = 1/√(μ₀ε₀)</strong>, matching the measured speed of light.</li>
      <li>Heinrich Hertz first generated and detected radio waves in 1887, confirming Maxwell’s theory.</li>
      <li>The electromagnetic spectrum is continuous; boundaries are conventional (e.g., visible 380–750 nm).</li>
      <li>Energy of a photon: <strong>E = hν</strong>; momentum: <strong>p = h/λ = E/c</strong>.</li>
      <li>In vacuum, electric and magnetic field amplitudes relate as <strong>E₀ = c B₀</strong>.</li>
      <li>Microwave ovens operate at ≈2.45 GHz, matching a rotational transition of water molecules.</li>
      <li>X‑ray diffraction led to the discovery of DNA’s double helix by Watson, Crick, Franklin, and Wilkins.</li>
      <li>The cosmic microwave background (CMB) has a black‑body spectrum at 2.73 K, providing evidence for the Big Bang.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-nuclear-basics"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Nuclear Physics & Radioactivity
  </h3>

  <h4>1. Introduction and Historical Milestones</h4>
  <p>The study of <strong>nuclear physics</strong> began with the discovery of radioactivity by <strong><em>Henri Becquerel</em></strong> in 1896, followed by the pioneering work of <strong>[[Marie Curie]]</strong> and <strong>[[Pierre Curie]]</strong> who isolated <em>polonium</em> and <em>radium</em>. <strong>[[Ernest Rutherford]]</strong>’s gold‑foil experiment (1911) revealed the existence of a tiny, dense nucleus, establishing the planetary model of the atom. The discovery of the neutron by <strong>[[James Chadwick]]</strong> in 1932 completed the picture of the nucleus as composed of protons and neutrons, collectively termed <strong>nucleons</strong>. These breakthroughs laid the foundation for understanding nuclear forces, binding energy, and the processes of fission and fusion.</p>

  <h4>2. Nuclear Structure and Properties</h4>
  <ul>
    <li><strong>Atomic number (Z)</strong>: number of protons; determines chemical identity.</li>
    <li><strong>Mass number (A)</strong>: total number of nucleons (protons + neutrons).</li>
    <li><strong>Isotopes</strong>: nuclei with same Z but different A (e.g., <sup>12</sup>C, <sup>13</sup>C, <sup>14</sup>C).</li>
    <li><strong>Isobars</strong>: nuclei with same A but different Z (e.g., <sup>14</sup>C and <sup>14</sup>N).</li>
    <li><strong>Isotones</strong>: nuclei with same neutron number N.</li>
    <li><strong>Nuclear radius</strong>: approximated by <em>R = r₀A<sup>1/3</sup></em>, where <strong>r₀ ≈ 1.2 fm</strong> ( femtometre ).</li>
    <li><strong>Nuclear density</strong>: roughly constant (~2.3×10¹⁷ kg m⁻³) for all nuclei, indicating strong saturation of nuclear forces.</li>
  </ul>

  <h4>3. Nuclear Forces and Binding Energy</h4>
  <p>The <strong>strong nuclear force</strong> is a short‑range (<em>≈1–2 fm</em>) attractive interaction that overcomes the electrostatic repulsion between protons. It is charge‑independent and exhibits saturation, meaning each nucleon interacts only with its nearest neighbours. The <strong>binding energy (B)</strong> of a nucleus is the energy required to separate it into its constituent nucleons:</p>
  <p><em>B = [Zmₚ + (A−Z)mₙ − M(A,Z)]c²</em></p>
  where <em>mₚ</em> and <em>mₙ</em> are the masses of a proton and neutron, <em>M(A,Z)</em> is the atomic mass, and <em>c</em> is the speed of light. The <strong>binding energy per nucleon (B/A)</strong> peaks around iron‑56 (<sup>56</sup>Fe) at ≈8.8 MeV, explaining why nuclei lighter than iron release energy via fusion and heavier nuclei release energy via fission.</p>

  <h4>4. Semi‑Empirical Mass Formula (Weizsäcker)</h4>
  <p>The liquid‑drop model gives an approximate expression for the binding energy:</p>
  <p><em>B = aᵥA − aₛA<sup>2/3</sup> − a_c Z(Z−1)/A<sup>1/3</sup> − aₐ (A−2Z)²/A + δ(A,Z)</em></p>
  where the terms represent volume, surface, Coulomb, asymmetry, and pairing contributions, respectively. Typical constants: <em>aᵥ≈15.8 MeV</em>, <em>aₛ≈18.3 MeV</em>, <em>a_c≈0.714 MeV</em>, <em>aₐ≈23.2 MeV</em>, and <em>δ</em> is +12/√A MeV for even‑even nuclei, 0 for odd‑A, and −12/√A MeV for odd‑odd nuclei.</p>

  <h4>5. Radioactivity: Types and Decay Laws</h4>
  <p><strong>Radioactivity</strong> is the spontaneous emission of particles or radiation from an unstable nucleus. The three principal modes are:</p>
  <ul>
    <li><strong>Alpha (α) decay</strong>: emission of a helium nucleus (<sup>4</sup>He). Governs heavy nuclei (Z>82). Example: <sup>238</sup>U → <sup>234</sup>Th + α.</li>
    <li><strong>Beta (β) decay</strong>: transformation of a neutron into a proton (β⁻) or a proton into a neutron (β⁺) accompanied by emission of an electron/positron and an (anti)neutrino. Example: <sup>14</sup>C → <sup>14</sup>N + e⁻ + ν̄ₑ.</li>
    <li><strong>Gamma (γ) decay</strong>: emission of high‑energy photons following de‑excitation of an excited nucleus; no change in Z or A.</li>
  </ul>
  <p>The decay follows the <strong>radioactive decay law</strong>:</p>
  <p><em>N(t) = N₀e^{−λt}</em></p>
  where <em>N(t)</em> is the number of undecayed nuclei at time <em>t</em>, <em>N₀</em> the initial number, and <em>λ</em> the decay constant. The <strong>half‑life (T₁/₂)</strong> is related by <em>T₁/₂ = ln 2 / λ</em>. Activity (<strong>A</strong>) is defined as <em>A = λN</em> and measured in becquerels (Bq) or curies (Ci).</p>

  <h4>6. Nuclear Reactions</h4>
  <p>A nuclear reaction is represented as:</p>
  <p><em>a + X → Y + b + Q</em></p>
  where <em>a</em> is the projectile, <em>X</em> the target nucleus, <em>Y</em> the product, <em>b</em> the ejected particle, and <em>Q</em> the reaction energy (positive for exothermic). Key concepts:</p>
  <ul>
    <li><strong>Q‑value</strong>: <em>Q = (m_initial − m_final)c²</em>.</li>
    <li><strong>Cross‑section (σ)</strong>: probability of reaction, measured in barns (1 b = 10⁻²⁸ m²).</li>
    <li><strong>Threshold energy</strong>: minimum kinetic energy required for endothermic reactions.</li>
  </ul>
  <p>Important reaction types include:</p>
  <ol>
    <li><strong>Fission</strong>: heavy nucleus splits into two medium‑mass fragments plus neutrons (e.g., <sup>235</sup>U + n → <sup>141</sup>Ba + <sup>92</sup>Kr + 3n + ~200 MeV).</li>
    <li><strong>Fusion</strong>: light nuclei combine to form a heavier nucleus (e.g., D‑T reaction: <sup>2</sup>H + <sup>3</sup>H → <sup>4</sup>He + n + 17.6 MeV).</li>
    <li><strong>Neutron capture</strong>: (n,γ) reactions important in nucleosynthesis and reactor physics.</li>
  </ol>

  <h4>7. Nuclear Models</h4>
  <ul>
    <li><strong>Liquid Drop Model</strong>: treats nucleus as incompressible fluid; explains fission and semi‑empirical mass formula.</li>
    <li><strong>Shell Model (Mayer‑Jensen)</strong>: nucleons occupy quantized energy levels analogous to atomic orbitals; explains magic numbers (2,8,20,28,50,82,126) and enhanced stability.</li>
    <li><strong>Collective Model</strong>: combines aspects of liquid drop and shell models to describe vibrational and rotational spectra.</li>
  </ul>

  <h4>8. Applications and Safety</h4>
  <p>Nuclear physics underpins numerous technologies:</p>
  <ul>
    <li><strong>Power generation</strong>: nuclear fission reactors (Pressurised Water Reactor, Boiling Water Reactor, Fast Breeder Reactor).</li>
    <li><strong>Medical</strong>: diagnostic imaging (PET, SPECT), radiotherapy (Co‑60, Ir‑192), and tracer studies.</li>
    <li><strong>Industrial</strong>: radiography, gauging, sterilisation, and neutron activation analysis.</li>
    <li><strong>Research</strong>: particle accelerators, neutrino experiments, and nuclear astrophysics.</li>
  </ul>
  <p>Radiation protection principles: <strong>time, distance, shielding</strong>. Units of dose: gray (Gy) for absorbed dose, sievert (Sv) for equivalent dose (incorporating quality factor). International bodies such as the <strong>[[IAEA]]</strong> and treaties like the <strong>[[NPT]]</strong> (Non‑Proliferation Treaty) govern safe use.</p>

  <h4>9. Notable Experiments and Discoveries</h4>
  <table>
    <thead>
      <tr><th>Experiment / Discovery</th><th>Year</th><th>Key Contributor(s)</th><th>Significance</th></tr>
    </thead>
    <tbody>
      <tr><td>Gold‑foil scattering</td><td>1911</td><td>[[Ernest Rutherford]]</td><td>Revealed nucleus</td></tr>
      <tr><td>Discovery of the neutron</td><td>1932</td><td>[[James Chadwick]]</td><td>Completed nuclear composition</td></tr>
      <tr><td>Artificial radioactivity</td><td>1934</td><td>[[Irène Joliot‑Curie]] & [[Frédéric Joliot‑Curie]]</td><td>First induced radioactive isotopes</td></tr>
      <tr><td>Fission of uranium</td><td>1938</td><td>[[Otto Hahn]] & [[Fritz Strassmann]]</td><td>Foundation of nuclear energy</td></tr>
      <tr><td>Bethe‑Peierls formula</td><td>1935</td><td>[[Hans Bethe]] & [[Rudolf Peierls]]</td><td>Theory of nuclear forces</td></tr>
      <tr><td>Discovery of the positron</td><td>1932</td><td>[[Carl Anderson]]</td><td>First antiparticle</td></tr>
      <tr><td>Solar neutrino detection</td><td>1960s‑present</td><td>[[Ray Davis Jr.]] & [[John Bahcall]]</td><td>Confirmed nuclear fusion in Sun</td></tr>
    </tbody>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The binding energy per nucleon is maximum for <sup>56</sup>Fe (~8.8 MeV).</li>
      <li>Half‑life is independent of initial amount; it is a constant for a given nuclide.</li>
      <li>Alpha decay reduces both Z and A by 2; beta decay changes Z by ±1 while A stays same.</li>
      <li>1 curie (Ci) = 3.7×10¹⁰ decays s⁻¹; 1 becquerel (Bq) = 1 decay s⁻¹.</li>
      <li>The liquid‑drop model predicts fission barrier heights; the shell model explains magic numbers.</li>
      <li>In a nuclear reactor, <sup>235</sup>U fission yields ~200 MeV per fission, ~2.5 neutrons on average.</li>
      <li>The Q‑value for the D‑T fusion reaction is 17.6 MeV, the basis for fusion‑reactor research.</li>
      <li>Radiation weighting factor (wᵣ) for α particles is 20, for β/γ is 1, for neutrons varies with energy.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-units-everyday"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    SI Units & Everyday Physics
  </h3>

  <h4>1. Historical Evolution of the SI System</h4>
  <p>The modern <strong>International System of Units</strong> (SI) traces its roots to the <strong>Metre Convention</strong> signed on <strong>20 May 1875</strong> at the <strong>International Bureau of Weights and Measures (BIPM)</strong> in Paris. The convention established the <em>meter</em> and <em>kilogram</em> as universal standards. In <strong>1960</strong>, the 11th <strong>General Conference on Weights and Measures (CGPM)</strong> formally adopted the SI, expanding it to seven base units and a coherent set of derived units. The most recent amendment (2019) redefined four base units—kilogram, ampere, kelvin, and mole—using fixed numerical values of fundamental constants such as <strong>Planck's constant (h)</strong> and the <strong>elementary charge (e)</strong>.</p>

  <h4>2. The Seven Base Units and Their Definitions</h4>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead style="background:#2c2c3a;">
      <tr>
        <th style="padding:8px; border:1px solid #444;">Base Quantity</th>
        <th style="padding:8px; border:1px solid #444;">SI Unit (Symbol)</th>
        <th style="padding:8px; border:1px solid #444;">Current Definition (post‑2019)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Length</strong></td>
        <td style="padding:8px; border:1px solid #444;"><strong>metre (m)</strong></td>
        <td style="padding:8px; border:1px solid #444;">Distance travelled by light in vacuum in <strong>1/299 792 458</strong> seconds.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Mass</strong></td>
        <td style="padding:8px; border:1px solid #444;"><strong>kilogram (kg)</strong></td>
        <td style="padding:8px; border:1px solid #444;">Mass that gives <strong>Planck constant h = 6.626 070 15 × 10⁻³⁴ J·s</strong> when related to frequency.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Time</strong></td>
        <td style="padding:8px; border:1px solid #444;"><strong>second (s)</strong></td>
        <td style="padding:8px; border:1px solid #444;">Duration of <strong>9 192 631 770</strong> periods of radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium‑133 atom.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Electric current</strong></td>
        <td style="padding:8px; border:1px solid #444;"><strong>ampere (A)</strong></td>
        <td style="padding:8px; border:1px solid #444;">Current that, when flowing through two parallel conductors 1 m apart, exerts a force of <strong>2 × 10⁻⁷ N·m⁻¹</strong> on each conductor.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Thermodynamic temperature</strong></td>
        <td style="padding:8px; border:1px solid #444;"><strong>kelvin (K)</strong></td>
        <td style="padding:8px; border:1px solid #444;">Fractional part of the thermodynamic temperature of the triple point of water (273.16 K) defined by fixing the <strong>Boltzmann constant k = 1.380 649 × 10⁻²³ J·K⁻¹</strong>.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Amount of substance</strong></td>
        <td style="padding:8px; border:1px solid #444;"><strong>mole (mol)</strong></td>
        <td style="padding:8px; border:1px solid #444;">Quantity of elementary entities that contains exactly <strong>6.022 140 76 × 10²³</strong> entities (the <strong>Avogadro constant</strong>).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Luminous intensity</strong></td>
        <td style="padding:8px; border:1px solid #444;"><strong>candela (cd)</strong></td>
        <td style="padding:8px; border:1px solid #444;">Luminous intensity in a given direction of a source that emits monochromatic radiation of frequency <strong>540 × 10¹² Hz</strong> and has a radiant intensity of <strong>1/683 W·sr⁻¹</strong>.</td>
      </tr>
    </tbody>
  </table>

  <h4>3. SI Prefixes – Scaling the Units</h4>
  <p>Prefixes allow convenient expression of very large or very small quantities. The table below lists the most frequently used prefixes in defence‑related problems.</p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead style="background:#2c2c3a;">
      <tr>
        <th style="padding:8px; border:1px solid #444;">Factor</th>
        <th style="padding:8px; border:1px solid #444;">Prefix</th>
        <th style="padding:8px; border:1px solid #444;">Symbol</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="padding:8px; border:1px solid #444;">10⁹</td><td style="padding:8px; border:1px solid #444;"><strong>giga</strong></td><td style="padding:8px; border:1px solid #444;">G</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10⁶</td><td style="padding:8px; border:1px solid #444;"><strong>mega</strong></td><td style="padding:8px; border:1px solid #444;">M</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10³</td><td style="padding:8px; border:1px solid #444;"><strong>kilo</strong></td><td style="padding:8px; border:1px solid #444;">k</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10²</td><td style="padding:8px; border:1px solid #444;"><strong>hecto</strong></td><td style="padding:8px; border:1px solid #444;">h</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10¹</td><td style="padding:8px; border:1px solid #444;"><strong>deca</strong></td><td style="padding:8px; border:1px solid #444;">da</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10⁰</td><td style="padding:8px; border:1px solid #444;"><strong>unit</strong></td><td style="padding:8px; border:1px solid #444;">–</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10⁻¹</td><td style="padding:8px; border:1px solid #444;"><strong>deci</strong></td><td style="padding:8px; border:1px solid #444;">d</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10⁻²</td><td style="padding:8px; border:1px solid #444;"><strong>centi</strong></td><td style="padding:8px; border:1px solid #444;">c</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10⁻³</td><td style="padding:8px; border:1px solid #444;"><strong>milli</strong></td><td style="padding:8px; border:1px solid #444;">m</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10⁻⁶</td><td style="padding:8px; border:1px solid #444;"><strong>micro</strong></td><td style="padding:8px; border:1px solid #444;">µ</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10⁻⁹</td><td style="padding:8px; border:1px solid #444;"><strong>nano</strong></td><td style="padding:8px; border:1px solid #444;">n</td></tr>
      <tr><td style="padding:8px; border:1px solid #444;">10⁻¹²</td><td style="padding:8px; border:1px solid #444;"><strong>pico</strong></td><td style="padding:8px; border:1px solid #444;">p</td></tr>
    </tbody>
  </table>

  <h4>4. Derived Units of Direct Relevance to Everyday Physics</h4>
  <p>While base units form the backbone, most problems in the NDA/ CDS/ AFCAT syllabus involve derived units. Below are the most frequently encountered ones, together with their expressions in base units.</p>
  <ul>
    <li><strong>Force</strong> – <strong>newton (N)</strong> = kg·m·s⁻² (derived from <em>Newton's second law</em> [[Newton's second law]])</li>
    <li><strong>Pressure</strong> – <strong>pascal (Pa)</strong> = N·m⁻² = kg·m⁻¹·s⁻² (also 1 Pa = 1 N/m²)</li>
    <li><strong>Energy / Work</strong> – <strong>joule (J)</strong> = N·m = kg·m²·s⁻²</li>
    <li><strong>Power</strong> – <strong>watt (W)</strong> = J·s⁻¹ = kg·m²·s⁻³</li>
    <li><strong>Electric charge</strong> – <strong>coulomb (C)</strong> = A·s (related to [[Coulomb's law]])</li>
    <li><strong>Voltage</strong> – <strong>volt (V)</strong> = W·A⁻¹ = kg·m²·s⁻³·A⁻¹</li>
    <li><strong>Resistance</strong> – <strong>ohm (Ω)</strong> = V·A⁻¹ = kg·m²·s⁻³·A⁻² (see [[Ohm's law]])</li>
    <li><strong>Capacitance</strong> – <strong>farad (F)</strong> = C·V⁻¹ = kg⁻¹·m⁻²·s⁴·A²</li>
    <li><strong>Magnetic flux density</strong> – <strong>tesla (T)</strong> = Wb·m⁻² = kg·s⁻²·A⁻¹</li>
    <li><strong>Frequency</strong> – <strong>hertz (Hz)</strong> = s⁻¹ (used in [[Planck's constant]] and wave phenomena)</li>
    <li><strong>Luminous flux</strong> – <strong>lumen (lm)</strong> = cd·sr (steradian is dimensionless)</li>
    <li><strong>Illuminance</strong> – <strong>lux (lx)</strong> = lm·m⁻²</li>
  </ul>

  <h4>5. Dimensional Analysis – A Powerful Problem‑Solving Tool</h4>
  <p>Dimensional consistency checks whether an equation could be physically plausible. The steps are:</p>
  <ol>
    <li>Write each quantity in terms of base dimensions <strong>[M]</strong> (mass), <strong>[L]</strong> (length), <strong>[T]</strong> (time), <strong>[I]</strong> (current), <strong>[Θ]</strong> (temperature), <strong>[N]</strong> (amount), <strong>[J]</strong> (luminous intensity).</li>
    <li>Equate dimensions on both sides of the equation.</li>
    <li>If mismatch occurs, the expression is either wrong or missing a constant with appropriate dimensions.</li>
  </ol>
  <p>Example: Deriving the period <em>T</em> of a simple pendulum of length <strong>l</strong> under gravity <strong>g</strong>:</p>
  <ul>
    <li>Assume <em>T</em> depends only on <strong>l</strong> and <strong>g</strong>. Let <em>T</em> ∝ l^a·g^b.</li>
    <li>Dimensions: <em>T</em> → [T]; l → [L]; g → [L·T⁻²].</li>
    <li>Equate: [T] = [L]^a·[L·T⁻²]^b = [L]^{a+b}·[T]^{-2b}.</li>
    <li>Hence, a + b = 0 (no net length) and -2b = 1 → b = -½, a = ½.</li>
    <li>Result: <em>T</em> = k·√(l/g). The dimensionless constant <strong>k</strong> = 2π for a simple pendulum (derived from solving the differential equation).</li>
  </ul>

  <h4>6. Everyday Physics Applications – From the Battlefield to the Classroom</h4>
  <p>Understanding SI units is indispensable for interpreting real‑world phenomena that appear in defence exams.</p>

  <h5>6.1. Kinematics and Projectile Motion</h5>
  <ul>
    <li>Displacement, velocity, and acceleration are expressed in <strong>metre (m)</strong>, <strong>metre per second (m·s⁻¹)</strong>, and <strong>metre per second squared (m·s⁻²)</strong> respectively.</li>
    <li>Range of a projectile: <strong>R = (v₀² sin2θ)/g</strong>. Here <strong>g = 9.80665 m·s⁻²</strong> (standard gravity defined by the <strong>International Committee for Weights and Measures</strong>).</li>
  </ul>

  <h5>6.2. Work, Energy, and Power in Military Operations</h5>
  <ul>
    <li>Work done by a soldier pulling a 30 kg load over 10 m at constant speed: <strong>W = F·d = mg·d = 30 kg × 9.81 m·s⁻² × 10 m = 2.94 kJ</strong>.</li>
    <li>Power output of a tank engine: typical rating 1 MW = 1 MJ·s⁻¹.</li>
    <li>Fuel energy density of aviation kerosene ≈ 43 MJ·kg⁻¹ (use <strong>joule</strong> as unit).</li>
  </ul>

  <h5>6.3. Pressure and Fluid Mechanics</h5>
  <ul>
    <li>Atmospheric pressure at sea level: <strong>1 atm = 101 325 Pa</strong> (also defined as 1 bar = 10⁵ Pa). This is essential for calculating blast over‑pressures and pneumatic weapon performance.</li>
    <li>Hydrostatic pressure: <strong>P = ρgh</strong>. For freshwater (ρ ≈ 1000 kg·m⁻³), a depth of 5 m yields P ≈ 49 kPa.</li>
    <li>Bernoulli’s principle [[Bernoulli's principle]] (conservation of energy in fluid flow) uses units of <strong>Pa</strong> for pressure and <strong>J·kg⁻¹</strong> for specific energy.</li>
  </ul>

  <h5>6.4. Electricity and Magnetism – Field‑Based Weapons & Communications</h5>
  <ul>
    <li><strong>Ohm’s law</strong> [[Ohm's law]]: V = IR. Typical rifle‑mounted radio transceiver: V ≈ 12 V, I ≈ 0.5 A → R = 24 Ω.</li>
    <li>Power in a radar transmitter: P = VI = 500 W (≈ 0.5 kW). High‑power pulse radars can reach megawatt levels.</li>
    <li>Magnetic field of a solenoid: B = μ₀nI. With n = 1000 turns m⁻¹, I = 2 A → B ≈ 2.5 mT (millitesla).</li>
    <li>Capacitance of a parallel‑plate capacitor (used in RF filters): C = ε₀A/d. For A = 0.01 m², d = 1 mm, C ≈ 88 pF.</li>
  </ul>

  <h5>6.5. Optics – Night‑Vision and Laser Guidance</h5>
  <ul>
    <li>Wavelength λ of a typical infrared laser: 850 nm = 850 × 10⁻⁹ m.</li>
    <li>Photon energy E = hc/λ. Using h = 6.626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m·s⁻¹ → E ≈ 2.34 × 10⁻¹⁹ J ≈ 1.46 eV.</li>
    <li>Intensity I = P/A. For a laser pointer delivering 5 mW over a 1 mm² spot: I = 5 W·m⁻² (since 1 mm² = 1 × 10⁻⁶ m²).</li>
  </ul>

  <h5>6.6. Thermodynamics – Engine Efficiency and Heat Management</h5>
  <ul>
    <li>Ideal Carnot efficiency η = 1 – T_c/T_h (temperatures in kelvin). For a jet engine with T_h = 1500 K and ambient T_c = 300 K → η ≈ 80 % (theoretical).</li>
    <li>Specific heat capacity of steel ≈ 0.49 kJ·kg⁻¹·K⁻¹; crucial for estimating thermal stress in armour plates.</li>
    <li>Heat transfer by conduction: Q = kAΔT/ℓ. Copper’s thermal conductivity k ≈ 401 W·m⁻¹·K⁻¹.</li>
  </ul>

  <h4>7. Common Sources of Unit‑Related Errors in Exams</h4>
  <ul>
    <li>Mixing CGS (centimetre‑gram‑second) and SI units – always convert to SI before substitution.</li>
    <li>Neglecting the <strong>10⁻³</strong> factor when a problem gives data in millimetres but the formula expects metres.</li>
    <li>For pressure, confusing <strong>Pa</strong> (N·m⁻²) with <strong>bar</strong> or <strong>atm</strong>. Remember: 1 bar = 10⁵ Pa, 1 atm = 101 325 Pa.</li>
    <li>In electrical problems, using <strong>Ω·cm</strong> (CGS) instead of <strong>Ω·m</strong>. Multiply by 100 to convert.</li>
    <li>Overlooking the dimensionless nature of angles (radians) – they do not introduce extra units.</li>
  </ul>

  <h4>8. Quick Reference: Conversion Factors Frequently Needed</h4>
  <ul>
    <li>1 km = 10³ m; 1 cm = 10⁻² m; 1 mm = 10⁻³ m.</li>
    <li>1 g = 10⁻³ kg; 1 mg = 10⁻⁶ kg.</li>
    <li>1 µF = 10⁻⁶ F; 1 nF = 10⁻⁹ F; 1 pF = 10⁻¹² F.</li>
    <li>1 kW = 10³ W; 1 MW = 10⁶ W.</li>
    <li>1 atm = 101 325 Pa; 1 mmHg = 133.322 Pa.</li>
    <li>1 eV = 1.602 × 10⁻¹⁹ J.</li>
    <li>1 cal = 4.184 J (useful for nutrition‑related energy problems).</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Standard gravity <strong>g = 9.80665 m·s⁻²</strong> is the exact value used in all Indian defence calculations.</li>
      <li>1 atm = <strong>101 325 Pa</strong> = <strong>1.01325 bar</strong> = <strong>760 mmHg</strong>.</li>
      <li>SI base unit for amount of substance: <strong>1 mol = 6.022 140 76 × 10²³ entities</strong> (Avogadro constant).</li>
      <li>Energy of a photon: <strong>E (eV) = 1240 / λ (nm)</strong>. Handy for laser‑guidance questions.</li>
      <li>Power rating of a typical infantry radio set: <strong>≈ 2 W</strong> (≈ 2 J·s⁻¹).</li>
      <li>Force required to accelerate a 75 kg soldier to 5 m·s⁻¹ in 2 s: <strong>F = ma = 75 × 2.5 = 187.5 N</strong>.</li>
      <li>Resistance of a 100 m copper wire (cross‑section 1 mm²): <strong>≈ 0.017 Ω·m × 100 / 1 × 10⁻⁶ = 1.7 Ω</strong>.</li>
      <li>Standard temperature for thermodynamic calculations: <strong>0 °C = 273.15 K</strong>.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-pyq-trends-topic"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Physics PYQ Trends (NDA/CDS)
  </h3>

  <h4>1. Introduction to PYQ Trends</h4>
  <p>Analysing <strong>Physics PYQ (Previous Year Questions)</strong> trends for <em>NDA</em>, <em>CDS</em> and <em>AFCAT</em> reveals a consistent emphasis on conceptual clarity, formula‑based problem solving, and the ability to apply principles to real‑world scenarios. Over the last five years (2019‑2023) the distribution of questions across major domains has remained remarkably stable, allowing aspirants to prioritise topics that yield the highest return on investment.</p>

  <h4>2. Topic‑wise Weightage (Approximate)</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:8px;">
    <thead>
      <tr>
        <th style="border:1px solid var(--border); padding:6px; text-align:left;"><strong>Domain</strong></th>
        <th style="border:1px solid var(--border); padding:6px; text-align:center;"><strong>Average % of Questions</strong></th>
        <th style="border:1px solid var(--border); padding:6px; text-align:left;"><strong>Key Sub‑topics Frequently Tested</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>Mechanics</strong></td>
        <td style="border:1px solid var(--border); padding:6px; text-align:center;">28‑32%</td>
        <td style="border:1px solid var(--border); padding:6px;">[[Newton's Laws]], [[Work-Energy Theorem]], [[Conservation of Momentum]], [[Circular Motion]], [[Gravitation]], [[Simple Harmonic Motion]], [[Elasticity]]</td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>Thermodynamics</strong></td>
        <td style="border:1px solid var(--border); padding:6px; text-align:center;">12‑15%</td>
        <td style="border:1px solid var(--border); padding:6px;">[[First Law of Thermodynamics]], [[Second Law]], [[Carnot Engine]], [[Specific Heat]], [[Thermal Expansion]], [[Kinetic Theory of Gases]]</td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>Waves & Optics</strong></td>
        <td style="border:1px solid var(--border); padding:6px; text-align:center;">14‑18%</td>
        <td style="border:1px solid var(--border); padding:6px;">[[Wave Motion]], [[Superposition]], [[Standing Waves]], [[Sound]], [[Doppler Effect]], [[Reflection]], [[Refraction]], [[Lens Formula]], [[Mirror Formula]], [[Total Internal Reflection]], [[Interference]], [[Diffraction]]</td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>Electricity & Magnetism</strong></td>
        <td style="border:1px solid var(--border); padding:6px; text-align:center;">20‑24%</td>
        <td style="border:1px solid var(--border); padding:6px;">[[Coulomb's Law]], [[Electric Field]], [[Electric Potential]], [[Capacitance]], [[Ohm's Law]], [[Kirchhoff's Laws]], [[Magnetic Effect of Current]], [[Biot-Savart Law]], [[Ampere's Law]], [[Electromagnetic Induction]], [[Faraday's Law]], [[Lenz's Law]], [[AC Circuits]], [[Transformers]]</td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>Modern Physics</strong></td>
        <td style="border:1px solid var(--border); padding:6px; text-align:center;">12‑16%</td>
        <td style="border:1px solid var(--border); padding:6px;">[[Photoelectric Effect]], [[Einstein's Photoelectric Equation]], [[De Broglie Wavelength]], [[Heisenberg Uncertainty Principle]], [[Bohr's Model]], [[Atomic Spectrum]], [[Quantum Numbers]], [[Radioactivity]], [[Half-life]], [[Nuclear Fission]], [[Nuclear Fusion]], [[Nuclear Forces]]</td>
      </tr>
    </tbody>
  </table>

  <h4>3. Mechanics – Deep Dive</h4>
  <p><strong>Newton's Laws</strong> remain the cornerstone; PYQs frequently ask for the calculation of net force, tension in strings, and pseudo‑forces in accelerating frames. Typical questions involve blocks on inclined planes, pulley systems, and connected bodies. <em>Example:</em> “Two masses m₁ and m₂ are connected by a light string over a frictionless pulley. Find the acceleration of the system and the tension in the string.”</p>
  <p>The <strong>Work‑Energy Theorem</strong> and <strong>Conservation of Mechanical Energy</strong> appear in problems involving springs, pendulums, and projectile motion. Expect questions that combine work done by non‑conservative forces (friction) with energy changes.</p>
  <p><strong>Gravitation</strong> is tested through orbital velocity, escape velocity, and gravitational potential energy. PYQs often combine gravitation with circular motion (satellite problems). Key formulae: <strong>vₒ = √(GM/R)</strong>, <strong>vₑ = √(2GM/R)</strong>, <strong>U = –GMm/r</strong>.</p>
  <p><strong>Simple Harmonic Motion (SHM)</strong> appears in both spring‑mass systems and simple pendulums. Typical PYQs require derivation of time period, calculation of maximum velocity, and energy distribution. Remember: <strong>T = 2π√(m/k)</strong> for spring, <strong>T = 2π√(L/g)</strong> for pendulum.</p>

  <h4>4. Thermodynamics – Key Points</h4>
  <p>The <strong>First Law</strong> (ΔQ = ΔU + ΔW) is routinely applied to cyclic processes, isothermal, adiabatic, isobaric and iso‑choric transformations. PYQs often give a PV diagram and ask for net work done or heat exchanged.</p>
  <p><strong>Second Law</strong> concepts – efficiency of Carnot engine, coefficient of performance (COP) of refrigerator/heat pump – are favourite. Formula: <strong>η = 1 – T₂/T₁</strong> (T in Kelvin).</p>
  <p><strong>Kinetic Theory of Gases</strong> yields questions on root‑mean‑square speed (<strong>vᵣₘₛ = √(3RT/M)</strong>), pressure (<strong>P = (1/3)ρ⟨v²⟩</strong>), and degrees of freedom (<strong>f = 3 for mono‑atomic, 5 for di‑atomic (rigid), 7 (including vibration)</strong>).</p>
  <p>Thermal expansion (linear, area, volume) and specific heat problems appear occasionally; remember the relation <strong>β = 3α</strong> for isotropic solids.</p>

  <h4>5. Waves & Optics – Trends</h4>
  <p>Wave motion questions focus on relationship <strong>v = fλ</strong>, calculation of frequency/wavelength from given data, and phase difference. <strong>Doppler Effect</strong> for sound is a regular PYQ: <strong>f' = f (v ± vₒ)/(v ∓ vₛ)</strong>.</p>
  <p>In <strong>Optics</strong>, ray optics dominates. Expect problems using <strong>Mirror Formula (1/f = 1/v + 1/u)</strong> and <strong>Lens Formula (1/f = 1/v – 1/u)</strong> with sign conventions. Numerical problems often involve combination of lenses or lens‑mirror systems.</p>
  <p>Wave optics: <strong>Interference</strong> (Young’s double slit) – fringe width <strong>β = λD/d</strong>. <strong>Diffraction</strong> – single slit width <strong>a sinθ = mλ</strong>. <strong>Polarisation** appears rarely but may ask about Malus’s law.</p>
  <p>Speed of light in medium: <strong>v = c/μ</strong>, where μ is refractive index. Total internal reflection condition: <strong>θ > θ_c = sin⁻¹(1/μ)</strong>.</p>

  <h4>6. Electricity & Magnetism – Core Areas</h4>
  <p><strong>Electrostatics</strong>: Coulomb’s law (<strong>F = k q₁q₂/r²</strong>), electric field due to point charge, dipole, and continuous charge distributions. PYQs often ask for force on a charge in a uniform field or potential at a point.</p>
  <p><strong>Capacitance</strong>: Parallel plate (<strong>C = ε₀A/d</strong>), series/parallel combinations, energy stored (<strong>U = ½CV²</strong>). Dielectric constant (K) modifications are common.</p>
  <p><strong>Current Electricity</strong>: Ohm’s law (<strong>V = IR</strong>), resistivity (<strong>ρ = RA/L</strong>), temperature coefficient of resistance. Kirchhoff’s junction and loop rules appear in circuit analysis problems.</p>
  <p><strong>Magnetic Effect of Current</strong>: Biot‑Savart law (<strong>dB = (μ₀/4π) I dl × r̂ / r²</strong>) and Ampere’s circuital law (∮B·dl = μ₀I_enc). PYQs frequently ask for magnetic field at the centre of a circular loop, solenoid, and toroid.</p>
  <p><strong>Electromagnetic Induction</strong>: Faraday’s law (<strong>ε = –dΦ/dt</strong>) and Lenz’s law. Numerical problems involve motional emf (<strong>ε = Blv</strong>) and rotating coils in uniform magnetic fields.</p>
  <p><strong>AC Circuits</strong>: RMS values, impedance of RLC series (<strong>Z = √[R² + (X_L – X_C)²]</strong>), power factor, resonance condition (<strong>X_L = X_C</strong>). Transformers: <strong>V_s/V_p = N_s/N_p</strong>, <strong>I_s/I_p = N_p/N_s</strong>.</p>

  <h4>7. Modern Physics – Frequently Asked Concepts</h4>
  <p><strong>Photoelectric Effect</strong>: Einstein’s equation <strong>K_max = hν – φ</strong>. PYQs give stopping potential or kinetic energy and ask for work function or Planck’s constant.</p>
  <p><strong>De Broglie Wavelength</strong>: <strong>λ = h/p = h/(mv)</strong>. Questions often compare wavelengths of electron, proton, and alpha particle for same kinetic energy.</p>
  <p><strong>Bohr’s Model</strong>: Radius of nth orbit <strong>r_n = n²h²ε₀/(πme²)</strong>, energy <strong>E_n = –13.6 eV / n²</strong>, frequency of emitted photon <strong>ν = R_H (1/n₁² – 1/n₂²)</strong>. PYQs ask for wavelength of spectral lines (Lyman, Balmer, Paschen series).</p>
  <p><strong>Radioactivity</strong>: Decay law <strong>N = N₀e^(–λt)</strong>, half‑life <strong>T₁/₂ = ln2/λ</strong>, mean life <strong>τ = 1/λ</strong>. Problems involve activity, decay constant, and dating techniques.</p>
  <p><strong>Nuclear Fission & Fusion</strong>: Mass defect, binding energy per nucleon, Q‑value calculation (<strong>Q = Δm c²</strong>). Typical PYQ: energy released in fission of U‑235 (~200 MeV) or fusion of deuterium‑tritium (~17.6 MeV).</p>
  <p><strong>Heisenberg Uncertainty Principle</strong>: <strong>Δx·Δp ≥ ħ/2</strong>. Occasionally appears as conceptual question.</p>

  <h4>8. Formula Sheet – Must‑Know Relations</h4>
  <ul>
    <li><strong>Mechanics</strong>: F = ma, W = F·s·cosθ, K = ½mv², U_g = mgh, P = Fv, T = 2π√(m/k) (spring), T = 2π√(L/g) (pendulum)</li>
    <li><strong>Gravitation</strong>: F = Gm₁m₂/r², g = GM/R², vₒ = √(GM/r), vₑ = √(2GM/r)</li>
    <li><strong>Thermodynamics</strong>: ΔQ = ΔU + ΔW, PV = nRT, γ = C_p/C_v, η_carnot = 1 – T₂/T₁, v_rms = √(3RT/M)</li>
    <li><strong>Waves</strong>: v = fλ, y = A sin(kx – ωt), β = λD/d (fringe width)</li>
    <li><strong>Optics</strong>: 1/f = 1/v + 1/u (mirror), 1/f = 1/v – 1/u (lens), m = v/u, μ = sin i / sin r</li>
    <li><strong>Electrostatics</strong>: F = k q₁q₂/r², E = kq/r², V = kq/r, U = kq₁q₂/r</li>
    <li><strong>Capacitance</strong>: C = ε₀A/d, C_series = (∑1/C_i)⁻¹, C_parallel = ΣC_i, U = ½CV²</li>
    <li><strong>Current Electricity</strong>: V = IR, P = VI = I²R = V²/R, ρ = RA/L, α = (R₂–R₁)/(R₁ΔT)</li>
    <li><strong>Magnetism</strong>: B = μ₀I/(2πr) (long wire), B = μ₀NI/L (solenoid), F = qvB sinθ</li>
    <li><strong>EMI</strong>: ε = –dΦ/dt, ε = Blv (motional), ε = NBAω sin(ωt) (rotating coil)</li>
    <li><strong>AC</strong>: X_L = ωL, X_C = 1/(ωC), Z = √[R² + (X_L – X_C)²], PF = cos φ</li>
    <li><strong>Modern Physics</strong>: E = hφ, K_max = hν – φ, λ = h/p, E_n = –13.6/n² eV, λ = h/(√(2mE)), N = N₀e^(–λt)</li>
  </ul>

  <h4>9. Preparation Strategy Based on PYQ Trends</h4>
  <ol>
    <li><strong>Prioritise Mechanics and Electricity & Magnetism</strong> – together they contribute ~50% of questions. Master problem‑solving techniques (free‑body diagrams, nodal analysis).</li>
    <li><strong>Create a formula‑cheat sheet</strong> (as above) and revise it daily; most PYQs are direct substitutions.</li>
    <li><strong>Practice mixed‑topic problems</strong> – e.g., a question may combine gravitation with circular motion or thermodynamics with wave motion.</li>
    <li><strong>Focus on numerical accuracy</strong> – NDA/CDS/AFCAT often test unit conversion (SI to CGS, eV to joule) and significant figures.</li>
    <li><strong>Revise modern physics concepts qualitatively</strong> – many PYQs are conceptual (e.g., “Why does photoelectric current increase with intensity but not with frequency?”).</li>
    <li><strong>Solve previous year papers under timed conditions</strong> – aim for 1.5 minutes per question to simulate exam pressure.</li>
    <li><strong>Use standard reference books</strong> – NCERT (XI‑XII) for fundamentals, followed by <em>Concepts of Physics</em> by H.C. Verma and <em>Fundamentals of Physics</em> by Halliday/Resnick/Walker for deeper problem practice.</li>
  </ol>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The value of <strong>g</strong> taken in NDA/CDS/AFCAT is <strong>9.8 m/s²</strong> unless otherwise specified.</li>
      <li>In <strong>Young’s double slit</strong>, fringe width β = λD/d; doubling slit separation halves the fringe width.</li>
      <li>The <strong>time constant</strong> of an RC circuit is τ = RC; after one τ, charge reaches ~63% of final value.</li>
      <li>For a <strong>solenoid</strong>, magnetic field inside is uniform: B = μ₀ n I, where n = turns per unit length.</li>
      <li>The <strong>work function</sub> of a metal is typically 2–5 eV; photoelectric emission occurs only if photon energy exceeds this value.</li>
      <li>In <strong>radioactive decay</strong>, after 5 half‑lives, activity drops to about 3% of initial value (½⁵ ≈ 0.031).</li>
      <li>The <strong>resonant frequency</strong> of an LC circuit is f₀ = 1/(2π√(LC)).</li>
      <li>For <strong>adiabatic process</strong> of an ideal gas, PV^γ = constant, where γ = C_p/C_v.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-heat"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Thermodynamics & Heat Transfer
  </h3>

  <h4>Introduction and Scope</h4>
  <p>Thermodynamics is the branch of <strong>Physics</strong> that deals with the relationships between <strong>heat</strong>, <strong>work</strong>, <strong>temperature</strong>, and the statistical behaviour of systems with many particles. In defence examinations (NDA/CDS/AFCAT) the focus is on the <strong>laws of thermodynamics</strong>, <strong>thermodynamic processes</strong>, <strong>heat transfer mechanisms</strong>, and their applications in engines, refrigeration, and material science. Heat transfer, a sub‑discipline, examines how thermal energy moves via <strong>conduction</strong>, <strong>convection</strong>, and <strong>radiation</strong>. Mastery of the underlying formulae, constants, and typical numerical values is essential for solving both conceptual and numerical problems.</p>

  <h4>Zeroth, First, Second, and Third Laws of Thermodynamics</h4>
  <ul>
    <li><strong>Zeroth Law of Thermodynamics</strong> – If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other. This law underpins the concept of <strong>temperature</strong> and enables the construction of thermometers. [[Zeroth Law of Thermodynamics]]</li>
    <li><strong>First Law of Thermodynamics</strong> – Energy cannot be created or destroyed; the change in internal energy (<em>ΔU</em>) of a closed system equals the heat added to the system (<em>Q</em>) minus the work done by the system (<em>W</em>): <em>ΔU = Q – W</em>. It is a statement of the conservation of energy. [[First Law of Thermodynamics]]</li>
    <li><strong>Second Law of Thermodynamics</strong> – In any spontaneous process the total entropy of an isolated system always increases (<em>ΔS ≥ 0</em>). It introduces the concept of irreversibility and sets the upper limit on the efficiency of heat engines. Two common formulations are the Kelvin‑Planck statement (no engine can convert heat from a single reservoir completely into work) and the Clausius statement (heat cannot spontaneously flow from a colder to a hotter body). [[Second Law of Thermodynamics]]</li>
    <li><strong>Third Law of Thermodynamics</strong> – As the temperature of a perfect crystal approaches absolute zero (<em>0 K</em>), its entropy approaches a constant minimum (often taken as zero). This law allows the determination of absolute entropies. [[Third Law of Thermodynamics]]</li>
  </ul>

  <h4>Thermodynamic Processes and Their Characteristics</h4>
  <p>A <strong>thermodynamic process</strong> describes how a system moves from one equilibrium state to another. The most important quasi‑static processes are:</p>
  <ul>
    <li><strong>Isothermal process</strong> – Temperature remains constant (<em>ΔT = 0</em>). For an ideal gas, <em>PV = constant</em> and the work done is <em>W = nRT ln(V₂/V₁)</em>. Heat exchanged equals the work done (<em>Q = W</em>).</li>
    <li><strong>Adiabatic process</strong> – No heat exchange (<em>Q = 0</em>). For an ideal gas, <em>PV^γ = constant</em> where <em>γ = Cₚ/Cᵥ</em>. The work done equals the negative change in internal energy (<em>W = –ΔU</em>).</li>
    <li><strong>Isobaric process</strong> – Pressure remains constant (<em>ΔP = 0</em>). Work done is <em>W = PΔV</em> and heat transferred is <em>Q = nCₚΔT</em>.</li>
    <li><strong>Isochoric (isovolumetric) process</strong> – Volume remains constant (<em>ΔV = 0</em>). No work is done (<em>W = 0</em>) and heat change equals the change in internal energy (<em>Q = ΔU = nCᵥΔT</em>).</li>
  </ul>
  <p>Understanding the <strong>work‑area</strong> on a <em>PV</em> diagram is crucial: the area under the curve represents the work done by the system.</p>

  <h4>Thermodynamic Potentials and Important Relations</h4>
  <ul>
    <li><strong>Internal Energy (U)</strong> – Total microscopic kinetic and potential energy of the system.</li>
    <li><strong>Enthalpy (H)</strong> – Defined as <em>H = U + PV</em>; useful for processes at constant pressure.</li>
    <li><strong>Helmholtz Free Energy (F)</strong> – <em>F = U – TS</em>; measures useful work obtainable at constant temperature and volume.</li>
    <li><strong>Gibbs Free Energy (G)</strong> – <em>G = H – TS = U + PV – TS</em>; determines spontaneity at constant temperature and pressure (<em>ΔG < 0</em> spontaneous).</li>
    <li><strong>Maxwell’s Relations</strong> – Derived from the equality of mixed second derivatives of the thermodynamic potentials; e.g., <em>(∂S/∂V)_T = (∂P/∂T)_V</em>.</li>
    <li><strong>Clausius‑Clapeyron Equation</strong> – Relates the pressure and temperature at which two phases coexist: <em>dP/dT = L/(TΔV)</em>, where <em>L</em> is the latent heat and <em>ΔV</em> the volume change. [[Clausius‑Clapeyron equation]]</li>
    <li><strong>Joule‑Thomson Effect</strong> – Describes the temperature change of a real gas when it is forced through a valve or porous plug while kept adiabatic; the Joule‑Thomson coefficient <em>μ<sub>JT</sub> = (∂T/∂P)<sub>H</sub></em> can be positive (cooling) or negative (heating). [[Joule‑Thomson effect]]</li>
  </ul>

  <h4>Heat Transfer Mechanisms</h4>
  <p>Heat transfer occurs when there is a temperature difference. The three fundamental modes are:</p>
  <ul>
    <li><strong>Conduction</strong> – Transfer of thermal energy through a material without bulk motion. Governed by <strong>Fourier’s law</strong>: <em>q = –k A (dT/dx)</em>, where <em>k</em> is the <strong>thermal conductivity</strong>, <em>A</em> the cross‑sectional area, and <em>dT/dx</em> the temperature gradient. [[Fourier’s law]]</li>
    <li><strong>Convection</strong> – Transfer due to the movement of fluid particles. Can be natural (buoyancy‑driven) or forced (by a pump/fan). Newton’s law of cooling expresses the convective heat flux: <em>q = h A (Tₛ – T_∞)</em>, where <em>h</em> is the convective heat transfer coefficient. [[Newton's law of cooling]]</li>
    <li><strong>Radiation</strong> – Energy emitted as electromagnetic waves due to the temperature of a body. The <strong>Stefan‑Boltzmann law** states that the total emissive power of a blackbody is <em>E = σ T⁴</em>, with <em>σ = 5.67×10⁻⁸ W m⁻² K⁻⁴</em>. The <strong>Wien’s displacement law** gives the wavelength at which emission peaks: <em>λ_max = b/T</em>, where <em>b = 2.898×10⁻³ m·K</em>. [[Stefan-Boltzmann law]] [[Wien's displacement law]]</li>
  </ul>

  <h4>Thermal Properties of Matter</h4>
  <ul>
    <li><strong>Specific Heat Capacity (c)</strong> – Amount of heat required to raise the temperature of unit mass by one kelvin: <em>Q = mcΔT</em>. Units: J kg⁻¹ K⁻¹.</li>
    <li><strong>Molar Heat Capacity (C)</strong> – Heat required to raise the temperature of one mole by one kelvin: <em>C = Mc</em> (M = molar mass). For ideal gases, <em>Cᵥ = (f/2)R</em> and <em>Cₚ = Cᵥ + R</em>, where <em>f</em> is the number of degrees of freedom and <em>R = 8.314 J mol⁻¹ K⁻¹</em>.</li>
    <li><strong>Latent Heat</strong> – Heat absorbed or released during a phase change without temperature change. <em>Latent heat of fusion (L_f)</em> for solid‑liquid, <em>Latent heat of vaporization (L_v)</em> for liquid‑gas. [[Latent heat of fusion]] [[Latent heat of vaporization]]</li>
    <li><strong>Thermal Expansion</strong> – Change in dimension with temperature. Linear expansion: <em>ΔL = α L₀ ΔT</em>, where <em>α</em> is the <strong>coefficient of linear expansion</strong>. Volume expansion: <em>ΔV = β V₀ ΔT</em> with <em>β ≈ 3α</em> for isotropic solids. [[Coefficient of linear expansion]] [[Coefficient of volume expansion]]</li>
    <li><strong>Thermal Conductivity (k)</strong> – Measure of a material’s ability to conduct heat. Typical values: copper ≈ 400 W m⁻¹ K⁻¹, aluminium ≈ 237 W m⁻¹ K⁻¹, glass ≈ 1.0 W m⁻¹ K⁻¹, air ≈ 0.025 W m⁻¹ K⁻¹.</li>
    <li><strong>Thermal Diffusivity (α)</strong> – Indicates how quickly a material responds to a change in temperature: <em>α = k/(ρc)</em>, where <em>ρ</em> is density.</li>
  </ul>

  <h4>Phase Diagrams and Critical Points</h4>
  <p>A <strong>phase diagram** plots pressure versus temperature showing the regions where solid, liquid, and gas phases are stable. Key features:</p>
  <ul>
    <li><strong>Triple point</strong> – Unique temperature and pressure where solid, liquid, and gas coexist in equilibrium. For water, the triple point occurs at <em>T = 273.16 K</em> and <em>P = 611.657 Pa</em>.</li>
    <li><strong>Critical point</strong> – End point of the liquid‑gas coexistence curve; beyond this point distinct liquid and gas phases do not exist. For water, <em>T_c = 647.09 K</em>, <em>P_c = 22.064 MPa</em>.</li>
    <li><strong>Clausius‑Clapeyron equation** (see above) describes the slope of the coexistence lines.</li>
  </ul>

  <h4>Thermodynamic Cycles and Engines</h4>
  <p>Defence examinations frequently ask about the efficiency and working of standard cycles:</p>
  <ul>
    <li><strong>Carnot cycle** – Ideal reversible cycle consisting of two isothermal and two adiabatic processes. Its efficiency is <em>η_Carnot = 1 – T_C/T_H</em>, where <em>T_C</em> and <em>T_H</em> are the absolute temperatures of the cold and hot reservoirs. No real engine can exceed this efficiency. [[Carnot engine]]</li>
    <li><strong>Otto cycle** – Model for spark‑ignition internal combustion engines. Comprises two adiabatic (compression and expansion) and two isochoric (heat addition and rejection) processes. Efficiency: <em>η_Otto = 1 – (1/r^{γ‑1})</em>, where <em>r</em> is the compression ratio.</li>
    <li><strong>Diesel cycle** – Model for compression‑ignition engines. Heat addition occurs at constant pressure. Efficiency: <em>η_Diesel = 1 – (1/r^{γ‑1})[(ρ^{γ} – 1)/(γ(ρ – 1))]</em>, where <em>ρ</em> is the cutoff ratio.</li>
    <li><strong>Brayton cycle** – Basis for gas turbine and jet engines. Two adiabatic (compression, expansion) and two isobaric (heat addition, rejection) processes. Efficiency: <em>η_Brayton = 1 – (1/r_p^{(γ‑1)/γ})</em>, where <em>r_p</em> is the pressure ratio.</li>
    <li><strong>Rankine cycle** – Ideal cycle for steam power plants. Involves isentropic compression in a pump, constant‑pressure heat addition in a boiler, isentropic expansion in a turbine, and constant‑pressure heat rejection in a condenser.</li>
  </ul>

  <h4>Applications of Heat Transfer</h4>
  <ul>
    <li><strong>Heat exchangers** – Devices that transfer heat between two or more fluids. Common types: shell‑and‑tube, plate, and finned‑tube. Performance is characterised by the <strong>overall heat transfer coefficient (U)</strong> and the log‑mean temperature difference (LMTD).</li>
    <li><strong>Fins (extended surfaces)** – Increase the surface area for convection, enhancing heat dissipation from hot components (e.g., engine cylinders, electronic devices). Fin effectiveness and efficiency are key design parameters.</li>
    <li><strong>Thermal insulation** – Materials with low thermal conductivity (e.g., aerogel, foam, wool) reduce unwanted heat loss or gain.</li>
    <li><strong>Radiative cooling** – Utilises the infrared emission of surfaces to shed heat to the cold sky, important for spacecraft thermal control.</li>
    <li><strong>Solar thermal collectors** – Absorb solar radiation and convert it to heat for water heating or power generation.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The <strong>Zeroth Law</strong> allows the definition of temperature and the construction of thermometers.</li>
      <li>For an ideal gas, <em>Cₚ – Cᵥ = R</em> (Mayer’s relation).</li>
      <li>In a <strong>Carnot refrigerator</strong>, the coefficient of performance is <em>COP = T_C/(T_H – T_C)</em>.</li>
      <li>The <strong>Stefan‑Boltzmann constant</strong> σ = 5.670×10⁻⁸ W m⁻² K⁻¹ appears in the black‑body radiation law.</li>
      <li>Thermal conductivity of metals decreases with increasing temperature, while that of insulators generally increases.</li>
      <li>The <strong>Wien displacement law** gives λ_max (in meters) = 2.898×10⁻³ /T (K).</li>
      <li>In an adiabatic free expansion of an ideal gas, <em>ΔU = 0</em>, <em>Q = 0</em>, <em>W = 0</em>, but entropy increases.</li>
      <li>The <strong>Clausius inequality** states ∮δQ/T ≤ 0 for any cyclic process, equality holding for reversible cycles.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-electricity-magnetism"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Electricity, Circuits & Magnetism
  </h3>

  <h4>1. Electrostatics</h4>
  <p>Electric charge is a fundamental property of matter; it exists in two types: <strong>positive</strong> and <strong>negative</strong>. The SI unit of charge is the <strong>coulomb (C)</strong>. Like charges repel, unlike charges attract. The principle of <strong>conservation of charge</strong> states that the total charge in an isolated system remains constant.</p>
  <p><strong>Coulomb’s law</strong> ([[Coulomb's law]]) quantifies the electrostatic force between two point charges:</p>
  <blockquote>
    <p>$$F = k \frac{|q_1 q_2|}{r^2}$$</p>
  </blockquote>
  where <strong>k = 8.99×10⁹ N·m²/C²</strong>, <em>q₁, q₂</em> are the charges, and <em>r</em> is their separation. The force is along the line joining the charges and is attractive for opposite signs.</p>
  <p>The <strong>electric field</strong> (<strong>E</strong>) at a point is defined as the force per unit positive test charge:</p>
  <blockquote>
    <p>$$\vec{E} = \frac{\vec{F}}{q_0}$$</p>
  </blockquote>
  Its SI unit is newton per coulomb (N/C) or volt per metre (V/m). For a point charge, $$\vec{E}=k\frac{q}{r^2}\hat{r}$$. Field lines originate on positive charges and terminate on negative charges; their density indicates field strength.</p>
  <p><strong>Electric potential</strong> (V) is the work done per unit charge in bringing a test charge from infinity to a point without acceleration:</p>
  <blockquote>
    <p>$$V = -\int_{\infty}^{r}\vec{E}\cdot d\vec{l}$$</p>
  </blockquote>
  Potential difference between two points A and B is $$V_{AB}=V_A-V_B$$. The unit is the volt (V). Equipotential surfaces are perpendicular to electric field lines.</p>
  <p><strong>Capacitance</strong> (C) measures a system’s ability to store charge per unit potential difference:</p>
  <blockquote>
    <p>$$C = \frac{Q}{V}$$</p>
  </blockquote>
  For a parallel‑plate capacitor with plate area A and separation d (filled with dielectric of relative permittivity εᵣ): $$C = \varepsilon_0 \varepsilon_r \frac{A}{d}$$, where $$\varepsilon_0 = 8.85×10^{-12} F/m$$. Energy stored: $$U = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$.</p>

  <h4>2. Current Electricity</h4>
  <p>Electric current (<strong>I</strong>) is the rate of flow of charge:</p>
  <blockquote>
    <p>$$I = \frac{dQ}{dt}$$</p>
  </blockquote>
  Its SI unit is the ampere (A). Conventional current flows from higher to lower potential; electron flow is opposite.</p>
  <p><strong>Ohm’s law</strong> ([[Ohm's law]]) relates voltage (V), current (I) and resistance (R) for ohmic conductors:</p>
  <blockquote>
    <p>$$V = IR$$</p>
  </blockquote>
  Resistance depends on material resistivity (ρ), length (L) and cross‑sectional area (A): $$R = \rho \frac{L}{A}$$. Resistivity varies with temperature: $$\rho_t = \rho_0[1+\alpha (T-T_0)]$$, where α is the temperature coefficient.</p>
  <p>Power dissipated in a resistor: $$P = VI = I^2R = \frac{V^2}{C}$$.</p>
  <p><strong>Kirchhoff’s laws</strong> are essential for circuit analysis:</p>
  <ul>
    <li><strong>Kirchhoff’s Current Law (KCL)</strong>: The algebraic sum of currents meeting at a junction is zero (∑I_in = ∑I_out).</li>
    <li><strong>Kirchhoff’s Voltage Law (KVL)</strong>: The algebraic sum of potential differences around any closed loop is zero (∑V = 0).</li>
  </ul>
  <p>Series and parallel combinations:</p>
  <table>
    <thead>
      <tr><th>Combination</th><th>Equivalent Resistance</th></tr>
    </thead>
    <tbody>
      <tr><td>Series (n resistors)</td><td>$\${R_{eq}} = R_1+R_2+…+R_n$$</td></tr>
      <tr><td>Parallel (n resistors)</td><td>$\${ \frac{1}{R_{eq}} = \frac{1}{R_1}+\frac{1}{R_2}+…+\frac{1}{R_n} }$$</td></tr>
    </tbody>
  </table>
  <p>Wheatstone bridge: When $$\frac{R_1}{R_2} = \frac{R_3}{R_4}$$, the bridge is balanced and no current flows through the galvanometer.</p>

  <h4>3. Magnetism</h4>
  <p>A moving charge or a current‑carrying conductor produces a magnetic field. The SI unit of magnetic flux density (B) is the tesla (T); 1 T = 1 N/(A·m).</p>
  <p><strong>Biot–Savart law</strong> gives the magnetic field d​B due to a current element Id​l:</p>
  <blockquote>
    <p>$$d\vec{B} = \frac{\mu_0}{4\pi}\frac{I d\vec{l}\times\hat{r}}{r^2}$$</p>
  </blockquote>
  where $$\mu_0 = 4\pi×10^{-7} T·m/A$$ is the permeability of free space.</p>
  <p>For a long straight wire at distance r: $$B = \frac{\mu_0 I}{2\pi r}$$. Direction given by the right‑hand rule.</p>
  <p><strong>Ampere’s circuital law</strong> ([[Ampere's law]]) states:</p>
  <blockquote>
    <p>$$\oint \vec{B}\cdot d\vec{l} = \mu_0 I_{enc}$$</p>
  </blockquote>
  Useful for symmetric situations (solenoid, toroid).</p>
  <p>Inside a long solenoid of n turns per metre carrying current I: $$B = \mu_0 n I$$ (uniform).</p>
  <p><strong>Magnetic flux</strong> (Φ) through a surface S: $$\Phi = \int_S \vec{B}\cdot d\vec{A}$$; unit weber (Wb).</p>
  <p><strong>Force on a moving charge</strong> (Lorentz force): $$\vec{F}=q(\vec{E}+\vec{v}\times\vec{B})$$. For a current element: $$d\vec{F}=I d\vec{l}\times\vec{B}$$.</p>
  <p><strong>Force between two parallel currents</strong> (per unit length): $$\frac{F}{L}= \frac{\mu_0 I_1 I_2}{2\pi d}$$. Attractive if currents are in the same direction, repulsive otherwise.</p>

  <h4>4. Electromagnetic Induction</h4>
  <p><strong>Faraday’s law of induction</strong> ([[Faraday's law]]): The induced emf (​ε) in a closed loop equals the negative rate of change of magnetic flux through the loop:</p>
  <blockquote>
    <p>$$\mathcal{E} = -\frac{d\Phi}{dt}$$</p>
  </blockquote>
  The negative sign reflects <strong>Lenz’s law</strong>: the induced emf opposes the change in flux that produced it.</p>
  <p>For a coil of N turns: $$\mathcal{E} = -N\frac{d\Phi}{dt}$$.</p>
  <p>Motional emf (a rod of length l moving perpendicular to B with speed v): $$\mathcal{E}=Blv$$.</p>
  <p><strong>Self‑inductance</strong> (L): Property of a coil whereby a change in its own current induces an emf: $$\mathcal{E} = -L\frac{dI}{dt}$$. Energy stored: $$U = \frac{1}{2}LI^2$$.</p>
  <p><strong>Mutual inductance</strong> (M): Two coils; emf in secondary due to change in primary current: $$\mathcal{E}_s = -M\frac{dI_p}{dt}$$.</p>

  <h4>5. Alternating Current (AC) Circuits</h4>
  <p>AC voltage varies sinusoidally: $$V(t)=V_0\sin(\omega t+\phi)$$ where $$V_0$$ is peak voltage, $$\omega=2\pi f$$ angular frequency, f frequency (Hz). RMS (root‑mean‑square) values: $$V_{rms}=V_0/\sqrt{2}$$, $$I_{rms}=I_0/\sqrt{2}$$.</p>
  <p>Impedance (Z) generalises resistance for AC:</p>
  <ul>
    <li>Pure resistor: $$Z_R = R$$</li>
    <li>Pure inductor: $$Z_L = j\omega L$$ (reactance $$X_L=\omega L$$)</li>
    <li>Pure capacitor: $$Z_C = \frac{1}{j\omega C}$$ (reactance $$X_C=1/(\omega C)$$)</li>
  </ul>
  For series RLC: $$Z = \sqrt{R^2+(X_L-X_C)^2}$$, phase angle $$\phi = \tan^{-1}\frac{X_L-X_C}{R}$$.</p>
  <p>Power in AC: Real (average) power $$P = V_{rms}I_{rms}\cos\phi$$; apparent power $$S=V_{rms}I_{rms}$$; reactive power $$Q=V_{rms}I_{rms}\sin\phi$$. Power factor = cos φ.</p>
  <p>Resonance in series RLC occurs when $$X_L = X_C$$ → $$\omega_0 = 1/\sqrt{LC}$$; at resonance, impedance is minimum (=R) and current is maximum.</p>
  <p>Transformer: Ratio of voltages equals ratio of turns: $$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$; assuming ideal (no losses), $$P_p = P_s$$ → $$V_pI_p = V_sI_s$$.</p>

  <h4>6. Magnetic Materials</h4>
  <p>Materials are classified by their response to an external magnetic field:</p>
  <ul>
    <li><strong>Diamagnetic</strong>: Weak, negative susceptibility; induced magnetisation opposes applied field (e.g., bismuth, copper).</li>
    <li><strong>Paramagnetic</strong>: Small, positive susceptibility; aligns with field (e.g., aluminium, platinum).</li>
    <li><strong>Ferromagnetic</strong>: Large, positive susceptibility; exhibits hysteresis, retentivity, coercivity (e.g., iron, nickel, cobalt).</li>
  </ul>
  <p>Hysteresis loop: Plot of B vs H; area inside loop represents energy loss per cycle (hysteresis loss).</p>
  <p>Curie temperature (T_C): Temperature above which a ferromagnet becomes paramagnetic.</p>

</div>

<div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
  <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
  <ul style="margin-top: 8px;">
    <li>Coulomb’s constant k = 8.99×10⁹ N·m²/C².</li>
    <li>Ohm’s law: V = IR; resistance R = ρL/A.</li>
    <li>Kirchhoff’s Voltage Law: ΣV = 0 around any closed loop.</li>
    <li>Faraday’s law: emf = –dΦ/dt; Lenz’s law gives direction.</li>
    <li>Self‑inductance of a solenoid: L = μ₀n²Al.</li>
    <li>In a series RLC circuit, resonance occurs at ω₀ = 1/√(LC).</li>
    <li>Transformer turns ratio: Vₛ/Vₚ = Nₛ/Nₚ (ideal, power conserved).</li>
    <li>Curie temperature of iron ≈ 1043 K; above this it loses ferromagnetism.</li>
  </ul>
</div>
`;

EXPANDED_NOTES_DATA["physics-nuclear-basics"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Nuclear Physics & Radioactivity
  </h3>

  <h4>1. Structure of the Atomic Nucleus</h4>
  <p>The nucleus consists of <strong>protons</strong> (p) and <strong>neutrons</strong> (n), collectively called <strong>nucleons</strong>. The number of protons defines the atomic number (Z) and the sum Z + N gives the mass number (A). Key historical milestones:</p>
  <ul>
    <li>[[Ernest Rutherford]]’s gold‑foil experiment (1909) established the existence of a dense, positively charged nucleus.</li>
    <li>Discovery of the neutron by [[James Chadwick]] in 1932 clarified nuclear mass and stability.</li>
    <li>Development of the liquid‑drop model by [[George Gamow]] (1930) and the shell model by [[Maria Goeppert‑Mayer]] (1949).</li>
  </ul>

  <h4>2. Nuclear Forces and Binding Energy</h4>
  <p>The strong nuclear force, mediated by <strong>gluons</strong> (via quantum chromodynamics), overcomes the electrostatic repulsion between protons at distances ≈1 fm. Binding energy (B) quantifies the stability of a nucleus:</p>
  <p><strong>B = (Z m_p + N m_n – M_{nucl})c^2</strong></p>
  <p>where <em>m_p</em> and <em>m_n</em> are the rest masses of proton and neutron respectively, <em>M_{nucl}</em> is the nuclear mass, and <em>c</em> is the speed of light.</p>
  <p>Important concepts:</p>
  <ul>
    <li><strong>Mass defect (Δm)</strong>: the difference between the sum of individual nucleon masses and the actual nuclear mass.</li>
    <li>Maximum binding energy per nucleon occurs near <strong>iron‑56</strong> (~8.8 MeV/nucleon), explaining why both fission of heavy nuclei and fusion of light nuclei release energy.</li>
    <li>Empirical <strong>semi‑empirical mass formula (Bethe‑Weizsäcker)</strong>:
      <pre>
ΔM = a_v A – a_s A^{2/3} – a_c Z(Z‑1)/A^{1/3} – a_a (A‑2Z)^2/A ± δ(A,Z)
      </pre>
      where the coefficients a_v, a_s, a_c, a_a, and the pairing term δ account for volume, surface, Coulomb, asymmetry and pairing effects respectively.</li>
  </ul>

  <h4>3. Radioactive Decay Modes</h4>
  <p>Unstable nuclei attain stability via three primary decay processes, each governed by quantum tunnelling or weak interaction:</p>

  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#2a2a3a;">
        <th style="padding:8px; border:1px solid #444;">Decay Type</th>
        <th style="padding:8px; border:1px solid #444;">Particle Emitted</th>
        <th style="padding:8px; border:1px solid #444;">Typical Energy (MeV)</th>
        <th style="padding:8px; border:1px solid #444;">Change in (Z, A)</th>
        <th style="padding:8px; border:1px solid #444;">Key Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>α‑decay</strong></td>
        <td style="padding:8px; border:1px solid #444;">[[Helium‑4 nucleus]] (α particle)</td>
        <td style="padding:8px; border:1px solid #444;">4–9</td>
        <td style="padding:8px; border:1px solid #444;">(Z‑2, A‑4)</td>
        <td style="padding:8px; border:1px solid #444;">[[Uranium‑238]] → [[Thorium‑234]] + α</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>β⁻‑decay</strong></td>
        <td style="padding:8px; border:1px solid #444;">Electron + antineutrino (β⁻ + \(\barν_e\))</td>
        <td style="padding:8px; border:1px solid #444;">0.1–3</td>
        <td style="padding:8px; border:1px solid #444;">(Z+1, A)</td>
        <td style="padding:8px; border:1px solid #444;">[[Carbon‑14]] → [[Nitrogen‑14]] + β⁻ + \(\barν_e\)</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>β⁺‑decay / Positron emission</strong></td>
        <td style="padding:8px; border:1px solid #444;">Positron + neutrino (β⁺ + ν_e)</td>
        <td style="padding:8px; border:1px solid #444;">0.5–3</td>
        <td style="padding:8px; border:1px solid #444;">(Z‑1, A)</td>
        <td style="padding:8px; border:1px solid #444;">[[Fluorine‑18]] → [[Oxygen‑18]] + β⁺ + ν_e</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>Electron Capture (EC)</strong></td>
        <td style="padding:8px; border:1px solid #444;">Capture of K‑shell electron + ν_e</td>
        <td style="padding:8px; border:1px solid #444;">–</td>
        <td style="padding:8px; border:1px solid #444;">(Z‑1, A)</td>
        <td style="padding:8px; border:1px solid #444;">[[Beryllium‑7]] + e⁻ → [[Lithium‑7]] + ν_e</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #444;"><strong>γ‑decay</strong></td>
        <td style="padding:8px; border:1px solid #444;">High‑energy photon (γ ray)</td>
        <td style="padding:8px; border:1px solid #444;">0.01–10</td>
        <td style="padding:8px; border:1px solid #444;">(Z, A) unchanged</td>
        <td style="padding:8px; border:1px solid #444;">[[Cobalt‑60]] excited → [[Cobalt‑60]] + γ</td>
      </tr>
    </tbody>
  </table>

  <h4>4. Decay Law and Quantitative Measures</h4>
  <p>The number of undecayed nuclei N at time t follows the exponential law:</p>
  <p><strong>N(t) = N_0 e^{-λt}</strong></p>
  <p>where <strong>λ</strong> is the decay constant (s⁻¹) and <strong>N₀</strong> is the initial quantity. The related concepts:</p>
  <ul>
    <li><strong>Half‑life (T_{½})</strong>: time required for N to reduce to N₀/2. <strong>T_{½} = ln2 / λ ≈ 0.693/λ</strong>.</li>
    <li><strong>Mean life (τ)</strong>: reciprocal of λ, τ = 1/λ.</li>
    <li><strong>Activity (A)</strong>: number of decays per second, A = λN, measured in becquerel (Bq, 1 Bq = 1 decay s⁻¹). Curie (Ci) = 3.7 × 10¹⁰ Bq.</li>
  </ul>

  <h4>5. Nuclear Reactions: Fission and Fusion</h4>
  <h5>5.1 Nuclear Fission</h5>
  <p>Fission is the splitting of a heavy nucleus into two (or more) fragments, accompanied by the release of neutrons and ~200 MeV per fission event. Critical historical points:</p>
  <ul>
    <li>First observed by [[Otto Hahn]] and [[Fritz Strassmann]] (1938); theoretical explanation by [[Lise Meitner]] and [[Otto Frisch]] (1939).</li>
    <li>Chain reaction concept by [[Enrico Fermi]] (1942) leading to the first controlled reactor (Chicago Pile‑1, 1942).</li>
    <li>Commercial nuclear power began with the <strong>Magnox</strong> reactors in the UK (1956) and the US <strong>Shippingport</strong> plant (1957).</li>
  </ul>
  <p>Key parameters for a sustainable chain reaction:</p>
  <ul>
    <li><strong>Critical mass</strong>: minimum fissile material quantity needed for a self‑sustaining neutron population.</li>
    <li><strong>Neutron multiplication factor (k_eff)</strong>: k_eff > 1 → super‑critical, k_eff = 1 → critical, k_eff < 1 → sub‑critical.</li>
    <li>Use of moderators (e.g., <strong>graphite</strong>, <strong>heavy water (D₂O)</strong>) to thermalise fast neutrons, increasing the fission cross‑section of <strong>U‑235</strong> and <strong>Pu‑239</strong>.</li>
  </ul>

  <h5>5.2 Nuclear Fusion</h5>
  <p>Fusion merges light nuclei (typically isotopes of hydrogen) to form a heavier nucleus, releasing energy per the binding‑energy curve. The most promising reactions for terrestrial energy:</p>
  <ul>
    <li><strong>D + T → ^4He (3.5 MeV) + n (14.1 MeV)</strong> (deuterium‑tritium).</li>
    <li><strong>D + D → ^3He (0.8 MeV) + n (2.5 MeV)</strong> or <strong>p + T → ^4He + γ</strong>.</li>
  </ul>
  <p>Challenges and milestones:</p>
  <ul>
    <li>Lawson criterion: nτ > 10¹⁴ cm⁻³·s for D‑T fuel at 10 keV.</li>
    <li>First controlled thermonuclear experiment – <strong>tokamak</strong> concept by [[Igor Tamm]] and [[Andrei Sakharov]] (1950s).</li>
    <li>International Thermonuclear Experimental Reactor (<strong>ITER</strong>) construction began 2007; first plasma expected 2025.</li>
  </ul>

  <h4>6. Detection and Measurement of Radioactivity</h4>
  <p>Several detector families are used in defence and civilian contexts:</p>
  <ul>
    <li><strong>Geiger–Müller (GM) tube</strong>: gas‑filled cylinder; counts individual ionising events, limited energy discrimination.</li>
    <li><strong>Scintillation detector</strong> (NaI(Tl), CsI): converts γ‑ray energy into light, read by photomultiplier; good for spectroscopy.</li>
    <li><strong>Semiconductor detector</strong> (HPGe, Si(Li)): high resolution, used for precise γ‑ray line identification.</li>
    <li><strong>Proportional counter</strong>: operates in proportional region; useful for α/β discrimination.</li>
  </ul>
  <p>Key performance metrics:</p>
  <ul>
    <li><strong>Efficiency (ε)</strong>: ratio of recorded counts to incident quanta.</li>
    <li><strong>Energy resolution (ΔE/E)</strong>: typically 7–10 % for NaI(Tl), <1 % for HPGe.</li>
    <li><strong>Dead time</strong>: period after each event when detector cannot record another; important for high‑activity sources.</li>
  </ul>

  <h4>7. Nuclear Safety, Regulations, and International Treaties</h4>
  <p>India’s nuclear framework is governed by the <strong>Atomic Energy Act, 1962</strong> and the <strong>Atomic Energy (Radiation Protection) Rules, 2004</strong>. Internationally:</p>
  <ul>
    <li>[[Treaty on the Non‑Proliferation of Nuclear Weapons (NPT)]] – entered into force 1970; India remains a non‑signatory but adheres to many IAEA safeguards voluntarily.</li>
    <li>[[Comprehensive Nuclear‑Test‑Ban Treaty (CTBT)]] – opened for signature 1996; India signed but has not ratified.</li>
    <li>[[International Atomic Energy Agency (IAEA)]] safeguards and inspection protocols ensure peaceful use of nuclear material.</li>
  </ul>

  <h4>8. Applications of Radioactive Isotopes in Defence and Civil Sectors</h4>
  <ul>
    <li><strong>Radiotracers</strong> – e.g., <strong>^99mTc</strong> in medical imaging; <strong>^14C</strong> in metabolic studies.</li>
    <li><strong>Radioisotope Thermoelectric Generators (RTGs)</strong> – power sources for satellites; use ^238Pu (half‑life 87.7 y).</li>
    <li><strong>Neutron activation analysis (NAA)</strong> – non‑destructive elemental analysis, crucial for forensic detection of illicit nuclear material.</li>
    <li><strong>Radiation weapons</strong> – “dirty bombs” employ conventional explosives to disperse ^137Cs or ^60Co; understanding of source term, dispersion, and decontamination is vital for defence planning.</li>
    <li><strong>Fusion research</strong> – contributes to high‑energy‑density physics relevant to directed‑energy weapons and space propulsion concepts.</li>
  </ul>

  <h4>9. Calculations Frequently Required in NDA/CDS/AFCAT</h4>
  <p>Typical quantitative problems involve:</p>
  <ul>
    <li>Determining <strong>half‑life</strong> from activity decay data using <em>T_{½}=0.693/λ</em>.</li>
    <li>Computing <strong>binding energy per nucleon</strong> for a given isotope using mass‑defect tables.</li>
    <li>Estimating <strong>critical mass</strong> for a fissile sphere, incorporating density and neutron mean free path.</li>
    <li>Applying the <strong>Q‑value formula</strong> for nuclear reactions:
      <pre>Q = (M_{initial} – M_{final})c^2</pre>
    </li>
    <li>Analyzing <strong>γ‑ray spectra</strong> to identify isotopes via characteristic energies (e.g., 0.511 MeV annihilation peak, 1.173 MeV & 1.332 MeV lines of ^60Co).</li>
  </ul>

  <h4>10. Recent Advances & Emerging Topics (2020‑2026)</h4>
  <ul>
    <li><strong>Small Modular Reactors (SMRs)</strong> – India’s <em>Kaiga‑2</em> and <em>AP1000</em> designs aim for <strong>GWe</strong> scale with passive safety.</li>
    <li>Development of <strong>laser‑driven inertial confinement fusion</strong> at the <strong>National Ignition Facility (NIF)</strong>, achieving net‑gain (2022).</li>
    <li>Use of <strong>radioactive waste transmutation</strong> in fast breeder reactors (e.g., <strong>PFBR</strong> at Kalpakkam) to reduce long‑lived actinides.</li>
    <li>Advances in <strong>cryogenic germanium detectors</strong> for dark‑matter searches, which also improve low‑energy γ‑ray detection for security applications.</li>
    <li>Integration of <strong>Artificial Intelligence</strong> in radiation monitoring networks for rapid anomaly detection.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Half‑life of <strong>^238U</strong> is 4.468 billion years; its decay series ends in stable <strong>^206Pb</strong>.</li>
      <li>Binding energy per nucleon peaks at <strong>iron‑56</strong> (~8.8 MeV); nuclei lighter than Fe release energy by <em>fusion</em>, heavier by <em>fission</em>.</li>
      <li>Decay constant λ and half‑life relation: <strong>λ = 0.693/T_{½}</strong>.</li>
      <li>In α‑decay, the emitted α particle carries away ~5 MeV kinetic energy and the daughter nucleus recoils with ~0.1 MeV.</li>
      <li>Critical mass of bare <strong>U‑235</strong> ≈ 52 kg; with a reflector (e.g., beryllium) it reduces to ~15 kg.</li>
      <li>Neutron capture cross‑section of <strong>^238U</strong> for thermal neutrons is ≈2.7 barns, whereas <strong>^235U</strong> is ≈585 barns.</li>
      <li>Lawson criterion for D‑T fusion: nτ ≥ 10¹⁴ cm⁻³·s at T ≈ 10 keV.</li>
      <li>Radioactive waste classification in India: <strong>Class‑A</strong> (short‑lived), <strong>Class‑B</strong> (intermediate), <strong>Class‑C</strong> (long‑lived).</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["physics-units-everyday"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    SI Units & Everyday Physics
  </h3>

  <h4>Introduction to the International System of Units (SI)</h4>
  <p>The <strong>International System of Units</strong> (<em>Système International dʼUnités</em>, abbreviated SI) is the globally accepted metric system for scientific and technical measurements. Established by the <strong>General Conference on Weights and Measures</strong> (CGPM) in 1960, it provides a coherent framework built upon seven <strong>base units</strong> that are defined by invariant <strong>physical constants</strong> or reproducible phenomena. Mastery of SI units is essential for NDA, CDS, and AFCAT aspirants because physics problems in these examinations frequently require unit conversion, dimensional consistency, and the application of derived units to real‑world scenarios such as projectile motion, electrical circuits, and thermodynamic processes.</p>

  <h4>The Seven SI Base Units</h4>
  <ul>
    <li><strong>Metre (m)</strong> – unit of length; defined since 2019 by fixing the numerical value of the <strong>speed of light in vacuum</strong> <em>c</em> = 299 792 458 m s<sup>−1</sup>. [[Metre]]</li>
    <li><strong>Kilogram (kg)</strong> – unit of mass; defined by fixing the <strong>Planck constant</strong> <em>h</em> = 6.626 070 15 × 10<sup>−34</sup> J s. [[Kilogram]]</li>
    <li><strong>Second (s)</strong> – unit of time; defined by the hyperfine transition frequency of the <strong>caesium‑133</strong> atom, Δν<sub>Cs</sub> = 9 192 631 770 Hz. [[Second]]</li>
    <li><strong>Ampere (A)</strong> – unit of electric current; defined by fixing the <strong>elementary charge</strong> <em>e</em> = 1.602 176 634 × 10<sup>−19</sup> C. [[Ampere]]</li>
    <li><strong>Kelvin (K)</strong> – unit of thermodynamic temperature; defined by fixing the <strong>Boltzmann constant</strong> <em>k</em> = 1.380 649 × 10<sup>−23</sup> J K<sup>−1</sup>. [[Kelvin]]</li>
    <li><strong>Mole (mol)</strong> – unit of amount of substance; defined by fixing the <strong>Avogadro constant</strong> <em>N</em><sub>A</sub> = 6.022 140 76 × 10<sup>23</sup> mol<sup>−1</sup>. [[Mole]]</li>
    <li><strong>Candela (cd)</strong> – unit of luminous intensity; defined by fixing the luminous efficacy of monochromatic radiation of frequency 540 THz, K<sub>cd</sub> = 683 lm W<sup>−1</sup>. [[Candela]]</li>
  </ul>

  <h4>Important SI Derived Units with Special Names</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:8px;">
    <thead>
      <tr style="background:rgba(34,197,94,0.08);">
        <th style="border:1px solid var(--border); padding:6px;">Quantity</th>
        <th style="border:1px solid var(--border); padding:6px;">Derived Unit</th>
        <th style="border:1px solid var(--border); padding:6px;">Expression in Base Units</th>
        <th style="border:1px solid var(--border); padding:6px;">Special Name/Symbol</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="border:1px solid var(--border); padding:6px;">Force</td><td style="border:1px solid var(--border); padding:6px;">newton</td><td style="border:1px solid var(--border); padding:6px;">kg m s<sup>−2</sup></td><td style="border:1px solid var(--border); padding:6px;">N [[Newton]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Pressure, Stress</td><td style="border:1px solid var(--border); padding:6px;">pascal</td><td style="border:1px solid var(--border); padding:6px;">N m<sup>−2</sup> = kg m<sup>−1</sup> s<sup>−2</sup></td><td style="border:1px solid var(--border); padding:6px;">Pa [[Pascal]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Energy, Work, Heat</td><td style="border:1px solid var(--border); padding:6px;">joule</td><td style="border:1px solid var(--border); padding:6px;">N m = kg m<sup>2</sup> s<sup>−2</sup></td><td style="border:1px solid var(--border); padding:6px;">J [[Joule]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Power</td><td style="border:1px solid var(--border); padding:6px;">watt</td><td style="border:1px solid var(--border); padding:6px;">J s<sup>−1</sup> = kg m<sup>2</sup> s<sup>−3</sup></td><td style="border:1px solid var(--border); padding:6px;">W [[Watt]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Electric Charge</td><td style="border:1px solid var(--border); padding:6px;">coulomb</td><td style="border:1px solid var(--border); padding:6px;">A s</td><td style="border:1px solid var(--border); padding:6px;">C [[Coulomb]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Electric Potential</td><td style="border:1px solid var(--border); padding:6px;">volt</td><td style="border:1px solid var(--border); padding:6px;">W A<sup>−1</sup> = kg m<sup>2</sup> s<sup>−3</sup> A<sup>−1</sup></td><td style="border:1px solid var(--border); padding:6px;">V [[Volt]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Electrical Resistance</td><td style="border:1px solid var(--border); padding:6px;">ohm</td><td style="border:1px solid var(--border); padding:6px;">V A<sup>−1</sup> = kg m<sup>2</sup> s<sup>−3</sup> A<sup>−2</sup></td><td style="border:1px solid var(--border); padding:6px;">Ω [[Ohm]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Capacitance</td><td style="border:1px solid var(--border); padding:6px;">farad</td><td style="border:1px solid var(--border); padding:6px;">C V<sup>−1</sup> = A<sup>2</sup> s<sup>4</sup> kg<sup>−1</sup> m<sup>−2</sup></td><td style="border:1px solid var(--border); padding:6px;">F [[Farad]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Magnetic Flux</td><td style="border:1px solid var(--border); padding:6px;">weber</td><td style="border:1px solid var(--border); padding:6px;">V s = kg m<sup>2</sup> s<sup>−2</sup> A<sup>−1</sup></td><td style="border:1px solid var(--border); padding:6px;">Wb [[Weber]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Magnetic Flux Density</td><td style="border:1px solid var(--border); padding:6px;">tesla</td><td style="border:1px solid var(--border); padding:6px;">Wb m<sup>−2</sup> = kg s<sup>−2</sup> A<sup>−1</sup></td><td style="border:1px solid var(--border); padding:6px;">T [[Tesla]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Frequency</td><td style="border:1px solid var(--border); padding:6px;">hertz</td><td style="border:1px solid var(--border); padding:6px;">s<sup>−1</sup></td><td style="border:1px solid var(--border); padding:6px;">Hz [[Hertz]]</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Illuminance</td><td style="border:1px solid var(--border); padding:6px;">lux</td><td style="border:1px solid var(--border); padding:6px;">lm m<sup>−2</sup> = cd sr m<sup>−2</sup></td><td style="border:1px solid var(--border); padding:6px;">lx [[Lux]]</td></tr>
    </tbody>
  </table>

  <h4>Everyday Physics Applications of SI Units</h4>
  <p>Understanding how SI units manifest in daily life bridges the gap between abstract theory and practical problem‑solving, a skill heavily tested in defence examinations.</p>
  <ul>
    <li><strong>Mechanics:</strong> A car accelerating from 0 to 100 km h<sup>−1</sup> in 10 s experiences an average acceleration of <em>a</em> = Δv/Δt ≈ (27.8 m s<sup>−1</sup>)/(10 s) = 2.78 m s<sup>−2</sup>. The force required (assuming mass 1500 kg) is <em>F</em> = ma ≈ 4.2 kN, illustrating the use of <strong>newton</strong> and <strong>kilogram</strong>. [[Newton]] [[Kilogram]]</li>
    <li><strong>Thermodynamics:</strong> The specific heat capacity of water is 4.18 kJ kg<sup>−1</sup> K<sup>−1</sup>. Heating 2 L (≈2 kg) of water from 20 °C to 80 °C needs Q = mcΔT = 2 kg × 4.18 kJ kg<sup>−1</sup> K<sup>−1</sup> × 60 K ≈ 502 kJ, demonstrating the <strong>joule</strong> and <strong>kelvin</strong>. [[Joule]] [[Kelvin]]</li>
    <li><strong>Electromagnetism:</strong> A household LED lamp rated at 9 W operating at 220 V draws a current I = P/V ≈ 0.041 A. The charge transferred in one hour is Q = It ≈ 148 C, linking <strong>watt</strong>, <strong>volt</strong>, <strong>ampere</strong>, and <strong>coulomb</strong>. [[Watt]] [[Volt]] [[Ampere]] [[Coulomb]]</li>
    <li><strong>Optics:</strong> Illuminance of a typical office desk is about 500 lx. Using the relation E = Φ/A, a luminous flux Φ of 500 lm spread over 1 m<sup>2</sup> yields this value, invoking the <strong>candela</strong> through lumen (lm = cd·sr). [[Candela]] [[Lux]]</li>
    <li><strong>Fluid Mechanics:</strong> Atmospheric pressure at sea level is ≈101.3 kPa. The force on a circular hatch of radius 0.5 m is F = PA = 101.3 kPa × π(0.5 m)<sup>2</sup> ≈ 79.5 kN, illustrating <strong>pascal</strong> and <strong>newton</strong>. [[Pascal]] [[Newton]]</li>
  </ul>

  <h4>Dimensional Analysis and Its Role in Everyday Problems</h4>
  <p>Dimensional homogeneity is a quick sanity check. For example, the period <em>T</em> of a simple pendulum of length <em>L</em> under gravity <em>g</em> is given by T = 2π√(L/g). The dimensions: [L] = m, [g] = m s<sup>−2</sup> → √(L/g) has dimension √(m / (m s<sup>−2</sup>)) = √(s<sup>2</sup>) = s, thus T is in seconds, confirming correctness. Such checks are invaluable when solving multi‑step numerical questions under exam pressure.</p>

  <h4>Fundamental Physical Constants Frequently Encountered</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:8px;">
    <thead>
      <tr style="background:rgba(34,197,94,0.08);">
        <th style="border:1px solid var(--border); padding:6px;">Constant</th>
        <th style="border:1px solid var(--border); padding:6px;">Symbol</th>
        <th style="border:1px solid var(--border); padding:6px;">Value (SI)</th>
        <th style="border:1px solid var(--border); padding:6px;">Typical Use</th>
      </tr>
    </thead>
    <tbody>
      <tr><td style="border:1px solid var(--border); padding:6px;">Speed of light in vacuum</td><td style="border:1px solid var(--border); padding:6px;"><em>c</em></td><td style="border:1px solid var(--border); padding:6px;">2.997 924 58 × 10<sup>8</sup> m s<sup>−1</sup></td><td style="border:1px solid var(--border); padding:6px;">Relativity, electromagnetic waves</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Planck constant</td><td style="border:1px solid var(--border); padding:6px;"><em>h</em></td><td style="border:1px solid var(--border); padding:6px;">6.626 070 15 × 10<sup>−34</sup> J s</td><td style="border:1px solid var(--border); padding:6px;">Quantum mechanics, photoelectric effect</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Boltzmann constant</td><td style="border:1px solid var(--border); padding:6px;"><em>k</em></td><td style="border:1px solid var(--border); padding:6px;">1.380 649 × 10<sup>−23</sup> J K<sup>−1</sup></td><td style="border:1px solid var(--border); padding:6px;">Statistical mechanics, ideal gas</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Avogadro constant</td><td style="border:1px solid var(--border); padding:6px;"><em>N</em><sub>A</sub></td><td style="border:1px solid var(--border); padding:6px;">6.022 140 76 × 10<sup>23</sup> mol<sup>−1</sup></td><td style="border:1px solid var(--border); padding:6px;">Stoichiometry, molar quantities</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Elementary charge</td><td style="border:1px solid var(--border); padding:6px;"><em>e</em></td><td style="border:1px solid var(--border); padding:6px;">1.602 176 634 × 10<sup>−19</sup> C</td><td style="border:1px solid var(--border); padding:6px;">Electric current, electrochemistry</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Gravitational constant</td><td style="border:1px solid var(--border); padding:6px;"><em>G</em></td><td style="border:1px solid var(--border); padding:6px;">6.674 30 × 10<sup>−11</sup> N m<sup>2</sup> kg<sup>−2</sup></td><td style="border:1px solid var(--border); padding:6px;">Newton’s law of gravitation</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Universal gas constant</td><td style="border:1px solid var(--border); padding:6px;"><em>R</em></td><td style="border:1px solid var(--border); padding:6px;">8.314 462 618 J mol<sup>−1</sup> K<sup>−1</sup></td><td style="border:1px solid var(--border); padding:6px;">Ideal gas law</td></tr>
      <tr><td style="border:1px solid var(--border); padding:6px;">Stefan‑Boltzmann constant</td><td style="border:1px solid var(--border); padding:6px;"><em>σ</em></td><td style="border:1px solid var(--border); padding:6px;">5.670 374 419 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup></td><td style="border:1px solid var(--border); padding:6px;">Black‑body radiation</td></tr>
    </tbody>
  </table>

  <h4>Common Conversion Factors for Everyday Use</h4>
  <ul>
    <li>1 inch = 2.54 cm (exact) → 1 ft = 0.3048 m.</li>
    <li>1 mile = 1.609 km.</li>
    <li>1 pound (lb) = 0.453 592 kg.</li>
    <li>1 atmosphere (atm) = 101.325 kPa.</li>
    <li>1 calorie (cal) = 4.184 J (thermochemical).</li>
    <li>1 horsepower (hp) = 746 W.</li>
    <li>1 bar = 100 kPa.</li>
    <li>1 tesla = 10<sup>4</sup> gauss.</li>
  </ul>

  <h4>Practical Tips for Solving SI‑Based Numerical Problems</h4>
  <ol>
    <li>Write down all given quantities with their units.</li>
    <li>Convert every quantity to the corresponding SI base unit before substituting into formulae.</li>
    <li>Perform the calculation, keeping track of units; they should combine to give the correct derived unit for the answer.</li>
    <li>If the result seems off, re‑check dimensional consistency.</li>
    <li>Express the final answer with an appropriate number of significant figures (usually 2–3 for defence exams).</li>
    <li>Use scientific notation for very large or very small numbers to avoid errors.</li>
  </ol>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The <strong>metre</strong> is defined by the fixed numerical value of the speed of light <em>c</em> = 299 792 458 m s<sup>−1</sup>.</li>
      <li>One <strong>newton</strong> is the force required to accelerate a 1 kg mass at 1 m s<sup>−2</sup>.</li>
      <li>The <strong>joule</strong> equals one newton‑metre (N·m) and also one watt‑second (W·s).</li>
      <li>Standard atmospheric pressure is 101.325 kPa ≈ 1.013 bar.</li>
      <li>A 60 W bulb operating for 1 hour consumes 0.06 kWh = 216 kJ of energy.</li>
      <li>The <strong>coulomb</strong> is the charge transported by a constant current of one ampere in one second.</li>
      <li>Visible light wavelengths range from ≈400 nm (violet) to ≈700 nm (red).</li>
      <li>The <strong>kelvin</strong> and <strong>degree Celsius</strong> have the same magnitude: 0 K = −273.15 °C.</li>
    </ul>
  </div>
</div>
`;

