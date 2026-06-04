window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};

window.EXPANDED_NOTES_DATA["algebra-complex"] = `
  <h3> Complex Numbers</h3>
  <p>Subject: Mathematics (NDA/CDS)</p>
  <p>Chapter: Algebra & Complex Numbers</p>
  <h4>1. Polar Form and Modulus</h4>
  <p>A complex number z = x + iy has a modulus |z| = sqrt{x^2 + y^2}.</p>
  <ul>
    <li>Argument: 	heta = an^{-1}(y/x)</li>
    <li>De Moivre's Theorem: (cos heta + isin heta)^n = cos n	heta + isin n	heta</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li><li><strong>Cube roots of unity:</strong> 1, omega, omega^2 where 1 + omega + omega^2 = 0 and omega^3 = 1</li></li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["2d-geometry"] = `
  <h3> 2D Figures: Area & Perimeter</h3>
  <p>Subject: Mathematics (NDA/CDS)</p>
  <p>Chapter: Mensuration</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>2D Mensuration Formulas</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["statistics-prob"] = `
  <h3> Probability Theory & Bayes Theorem</h3>
  <p>Subject: Mathematics (NDA/CDS)</p>
  <p>Chapter: Probability & Statistics</p>
  <h4>1. Basic Laws of Probability</h4>
  <ul>
    <li>Addition Rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</li>
    <li>If events are mutually exclusive: P(A ∩ B) = 0 ⇒ P(A ∪ B) = P(A) + P(B)</li>
    <li>Conditional Probability: P(A|B) = P(A ∩ B) / P(B) (where P(B) > 0)</li>
    <li>Independent Events: P(A ∩ B) = P(A) · P(B) ⇒ P(A|B) = P(A)</li>
  </ul>
  <h4>2. Bayes' Theorem</h4>
  <p>Used to calculate posterior probability when partition events E₁, E₂...Eₙ are given:</p>
  <ul>
    <li>P(Eᵢ|A) = [ P(Eᵢ) · P(A|Eᵢ) ] / [ Σ[j=1 to n] P(Eⱼ) · P(A|Eⱼ) ]</li>
  </ul>
  <h4>3. Statistics & Measures of Central Tendency</h4>
  <ul>
    <li><strong>Mean (x̄)</strong>: Average value. x̄ = (Σ xᵢ)/n.</li>
    <li><strong>Median</strong>: Middle value. If n is odd: ((n+1)/2)th term. If n is even: Mean of (n/2)th and (n/2 + 1)th terms.</li>
    <li><strong>Mode</strong>: Element with highest frequency.</li>
    <li><strong>Empirical Relation</strong>: Mode = 3 Median - 2 Mean</li>
  </ul>
  <h4>4. Measures of Dispersion</h4>
  <ul>
    <li><strong>Variance (σ²)</strong>: σ² = Σ(xᵢ - x̄)² / n = (Σ xᵢ² / n) - (x̄)²</li>
    <li><strong>Standard Deviation (σ)</strong>: σ = √Variance</li>
    <li><strong>Coefficient of Variation (CV)</strong>: CV = (σ / x̄) * 100 (measures relative consistency).</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>P(A|B) = P(A ∩ B) / P(B)</li>
    <li>Mode = 3Median - 2Mean</li>
    <li>Variance(σ²) = (Σx²/n) - (x̄)²</li>
    <li>SD(σ) = √Variance</li>
    <li>CV = (σ/x̄)·100</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["algebra-matrices"] = `
  <h3> Matrices and Determinants</h3>
  <p>Subject: Mathematics (NDA/CDS)</p>
  <p>Chapter: Algebra & Matrices</p>
  <h4>1. Matrix Classifications</h4>
  <ul>
    <li><strong>Symmetric Matrix</strong>: Aᵀ = A. Diagonal elements can be anything.</li>
    <li><strong>Skew-Symmetric Matrix</strong>: Aᵀ = -A. Diagonal elements must be zero . (aᵢᵢ = -aᵢᵢ ⇒ 2aᵢᵢ = 0 ⇒ aᵢᵢ = 0).</li>
    <li><strong>Orthogonal Matrix</strong>: A · Aᵀ = I. Also, det(A) = ±1.</li>
    <li><strong>Idempotent Matrix</strong>: A² = A.</li>
    <li><strong>Involutory Matrix</strong>: A² = I.</li>
    <li><strong>Nilpotent Matrix</strong>: Aᵏ = O (where k is the index of nilpotency).</li>
  </ul>
  <h4>2. Determinant Laws</h4>
  <ul>
    <li>det(Aᵀ) = det(A)</li>
    <li>det(AB) = det(A) · det(B)</li>
    <li>det(kA) = kⁿ det(A) (for a matrix of order n × n).</li>
    <li>det(A⁻¹) = 1 / det(A)</li>
    <li>If any two rows/columns are interchanged, the sign of the determinant changes.</li>
    <li>If all elements of a row/column are zero, the determinant is zero .</li>
  </ul>
  <h4>3. Adjoint & Inverse Relations</h4>
  <ul>
    <li>A · adj(A) = adj(A) · A = |A| · I</li>
    <li>|adj A| = |A|ⁿ⁻¹ (order n)</li>
    <li>|adj(adj A)| = |A|^( (n-1)² )</li>
    <li>adj(AB) = adj(B) · adj(A) (Reversal law)</li>
    <li>A⁻¹ = adj(A) / |A| (only if |A| ≠ 0; non-singular matrix).</li>
    <li>(Aᵀ)⁻¹ = (A⁻¹)ᵀ</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>|kA| = kⁿ|A|</li>
    <li>|adj A| = |A|ⁿ⁻¹</li>
    <li>|adj(adj A)| = |A|^((n-1)²)</li>
    <li>A⁻¹ = adj(A)/|A|</li>
    <li>(AB)ᵀ = BᵀAᵀ</li>
    <li>(AB)⁻¹ = B⁻¹A⁻¹</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["probability-stats"] = `
  <h3> Probability Theory & Bayes Theorem</h3>
  <p>Subject: Mathematics (NDA/CDS)</p>
  <p>Chapter: Probability & Statistics</p>
  <h4>1. Basic Laws of Probability</h4>
  <ul>
    <li>Addition Rule: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</li>
    <li>If events are mutually exclusive: P(A ∩ B) = 0 ⇒ P(A ∪ B) = P(A) + P(B)</li>
    <li>Conditional Probability: P(A|B) = P(A ∩ B) / P(B) (where P(B) > 0)</li>
    <li>Independent Events: P(A ∩ B) = P(A) · P(B) ⇒ P(A|B) = P(A)</li>
  </ul>
  <h4>2. Bayes' Theorem</h4>
  <p>Used to calculate posterior probability when partition events E₁, E₂...Eₙ are given:</p>
  <ul>
    <li>P(Eᵢ|A) = [ P(Eᵢ) · P(A|Eᵢ) ] / [ Σ[j=1 to n] P(Eⱼ) · P(A|Eⱼ) ]</li>
  </ul>
  <h4>3. Statistics & Measures of Central Tendency</h4>
  <ul>
    <li><strong>Mean (x̄)</strong>: Average value. x̄ = (Σ xᵢ)/n.</li>
    <li><strong>Median</strong>: Middle value. If n is odd: ((n+1)/2)th term. If n is even: Mean of (n/2)th and (n/2 + 1)th terms.</li>
    <li><strong>Mode</strong>: Element with highest frequency.</li>
    <li><strong>Empirical Relation</strong>: Mode = 3 Median - 2 Mean</li>
  </ul>
  <h4>4. Measures of Dispersion</h4>
  <ul>
    <li><strong>Variance (σ²)</strong>: σ² = Σ(xᵢ - x̄)² / n = (Σ xᵢ² / n) - (x̄)²</li>
    <li><strong>Standard Deviation (σ)</strong>: σ = √Variance</li>
    <li><strong>Coefficient of Variation (CV)</strong>: CV = (σ / x̄) * 100 (measures relative consistency).</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>P(A|B) = P(A ∩ B) / P(B)</li>
    <li>Mode = 3Median - 2Mean</li>
    <li>Variance(σ²) = (Σx²/n) - (x̄)²</li>
    <li>SD(σ) = √Variance</li>
    <li>CV = (σ/x̄)·100</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["vocabulary"] = `
  <h3> Reading Comprehension</h3>
  <p>Subject: English (NDA/CDS/AFCAT)</p>
  <p>Chapter: Vocabulary & Comprehension</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Main idea, detail, inference, tone, title finding strategies</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["constitution-basics"] = `
  <h3> Constitutional Amendments, Parts & Schedules</h3>
  <p>Subject: Indian Polity (CDS/NDA)</p>
  <p>Chapter: Advanced Polity Structures & Bodies</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Schedules: TEARS OF OLD PM</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["union-executive"] = `
  <h3> Major Government Schemes</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Schemes, Policies & Summits</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>PM-KISAN: ₹6000/yr</li>
    <li>PM-JAY: ₹5L health cover</li>
    <li>Jan Dhan: Zero balance a/c</li>
    <li>MGNREGA: 100 days wage</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["polity-advanced"] = `
  <h3> Constitutional & Non-Constitutional Bodies</h3>
  <p>Subject: Indian Polity (CDS/NDA)</p>
  <p>Chapter: Advanced Polity Structures & Bodies</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Constitutional: Art 324 (EC), Art 280 (FC), Art 148 (CAG)</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["federal-rpa"] = `
  <h3> Federal Structure & Centre-State Relations</h3>
  <p>Subject: Indian Polity (CDS/NDA)</p>
  <p>Chapter: Federal Structure & Election Law</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>7th Schedule: Union (97), State (66), Concurrent (47)</li>
    <li>Art 263: Inter-State Council</li>
    <li>Art 280: Finance Commission</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["physical-geography"] = `
  <h3> World Geography: Mountains, Forests & Rivers</h3>
  <p>Subject: Geography (CDS/NDA)</p>
  <p>Chapter: Physical & World Geography</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Major Mountains & World Rivers</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["geography-details"] = `
  <h3> Indian Geography (Rivers, Passes & Soils)</h3>
  <p>Subject: Geography (CDS/NDA)</p>
  <p>Chapter: Indian Geography</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Dakshin Ganga: Godavari</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["industrics-geopolitics"] = `
  <h3> Major Industries & Industrial Corridors of India</h3>
  <p>Subject: Geography (CDS/NDA)</p>
  <p>Chapter: Industries & Geopolitics</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>TISCO 1907: First Steel Plant</li>
    <li>DMIC: Delhi-Mumbai Industrial Corridor</li>
    <li>Chennai = Detroit of India</li>
    <li>Bengaluru = Silicon Valley of India</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["monetary-fiscal"] = `
  <h3> Government Budget, GST & Fiscal Policy</h3>
  <p>Subject: Economics (CDS/NDA)</p>
  <p>Chapter: Budgets, Trade & Economic Reforms</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>FD = Total Exp - Total Revenue (excl borrowings)</li>
    <li>GST: 101st Amendment (Jul 2017)</li>
    <li>4 slabs: 5%, 12%, 18%, 28%</li>
    <li>FRBM Act 2003</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["budget-trade-reforms"] = `
  <h3> Economic Measures & Policy Packages</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Reports, Awards & Judgments</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Atmanirbhar: ₹20L Cr (10% of GDP)</li>
    <li>PLI: 14 sectors</li>
    <li>NIP: ₹111L Cr infra</li>
    <li>Gati Shakti: 16 ministries</li>
    <li>ONORC: Aadhaar-linked PDS</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["physics-mechanics"] = `
  <h3> Newton's Laws of Motion</h3>
  <p>Subject: Physics (NDA/CDS)</p>
  <p>Chapter: Mechanics & Motion</p>
  <h4>1. Newton's First Law (Law of Inertia)</h4>
  <ul>
    <li>A body continues in its state of rest or uniform motion in a straight line unless compelled by an external unbalanced force.</li>
    <li>Inertia is the inherent property of a body to resist change. Measured by **mass** (greater mass = greater inertia).</li>
    <li>Types: Inertia of Rest (passengers fall backward when bus starts), Inertia of Motion (passengers fall forward when brakes applied), Inertia of Direction (umbrella protects from rain).</li>
  </ul>
  <h4>2. Newton's Second Law (Law of Force)</h4>
  <ul>
    <li>The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force.</li>
    <li>Momentum: p = mv (vector quantity, unit: kg m/s).</li>
    <li>Mathematical derivation: F = dp/dt = d(mv)/dt = m(dv/dt) = **ma** (Force = mass × acceleration).</li>
    <li>Unit of Force: Newton (N). 1 N = 1 kg m/s² = 10⁵ Dynes.</li>
  </ul>
  <h4>3. Newton's Third Law (Law of Action-Reaction)</h4>
  <ul>
    <li>To every action, there is always an equal and opposite reaction. Action and reaction act on **two different bodies**.</li>
    <li>Examples: Recoil of a gun (backward force on shoulder), swimming (pushing water backward), flight of rockets (exhaust gases push downward, rocket moves up).</li>
  </ul>
  <h4>4. Friction and Momentum Conservation</h4>
  <ul>
    <li><strong>Law of Conservation of Linear Momentum</strong>: If no external force acts on a system, the total linear momentum remains constant. (m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂).</li>
    <li><strong>Friction</strong>: The opposing force that comes into play when a body moves or tries to move over another surface. Formula: f = μN (where μ is coefficient of friction, N is normal reaction).</li>
    <li>Order of friction: **Static Friction > Limiting Friction > Kinetic Friction > Rolling Friction**. Rolling friction is the smallest.</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>F = ma</li>
    <li>Momentum: p = mv</li>
    <li>Friction: f = μN</li>
    <li>Equations of Motion: v = u + at, s = ut + 0.5at², v² - u² = 2as</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["energy-power-mechanics"] = `
  <h3> Work, Power, Energy & Gravitation</h3>
  <p>Subject: Physics (NDA/CDS)</p>
  <p>Chapter: Energy & Gravitation</p>
  <h4>1. Work, Energy and Power</h4>
  <ul>
    <li><strong>Work (W)</strong>: W = F · s · cos θ. (Scalar quantity, unit: Joule). Work is zero if force and displacement are perpendicular (θ = 90°), e.g., circular planetary orbits, porter holding luggage.</li>
    <li><strong>Kinetic Energy (KE)</strong>: Energy due to motion. KE = ½ m v² = p² / 2m (where p is momentum). If momentum is doubled, KE becomes four times.</li>
    <li><strong>Potential Energy (PE)</strong>: Energy due to position. PE = mgh .</li>
    <li><strong>Power (P)</strong>: Rate of doing work. P = W / t = F · v . Unit: Watt. 1 Horsepower (HP) = 746 Watts .</li>
  </ul>
  <h4>2. Gravitation & Acceleration due to gravity (g)</h4>
  <ul>
    <li>Newton's Law: F = G M m / r² (where G = 6.67 × 10⁻¹¹ N m²/kg²; Universal Gravitational Constant).</li>
    <li>Acceleration due to gravity: g = G M / R² (on Earth's surface, g ≈ 9.8 m/s²). g is independent of mass of the falling body.</li>
    <li><strong>Variations in 'g'</strong>: With Altitude (h): Decreases: g' = g(1 - 2h/R) .</li>
    <li>With Depth (d): Decreases: g' = g(1 - d/R) . (At the centre of Earth, d = R ⇒ g = 0).</li>
    <li>Due to shape of Earth: Earth is an oblate spheroid. Requator > Rpole. Since g ∝ 1/R², g is minimum at Equator, maximum at Poles .</li>
    <li>Due to rotation: g decreases as rotation speed increases. (At equator g' = g - ω²R). If rotation stops, g at equator increases, while g at poles remains unchanged.</li>
  </ul>
  <h4>3. Kepler's Laws & Escape Velocity</h4>
  <ul>
    <li><strong>Kepler's 3rd Law (Law of Periods)</strong>: The square of time period of a planet is proportional to the cube of semi-major axis of its orbit: **T² ∝ r³**.</li>
    <li><strong>Escape Velocity (vₑ)</strong>: Minimum velocity required to escape gravitational pull. Formula: vₑ = √(2gR) = √(2GM/R) .</li>
    <li>For Earth, escape velocity is **11.2 km/s**. For Moon, it is **2.38 km/s** (low gravity, hence no atmosphere on Moon).</li>
  </ul>
  <svg viewBox="0 0 400 220" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <text x="200" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Energy Conservation (Pendulum)</text>
    
    <!-- Support -->
    <line x1="150" y1="40" x2="250" y2="40" stroke="var(--text-secondary)" stroke-width="4"/>
    
    <!-- Left Position (Max PE) -->
    <line x1="200" y1="40" x2="100" y2="120" stroke="var(--text-secondary)" stroke-width="1.5" stroke-dasharray="4 4"/>
    <circle cx="100" cy="120" r="15" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" stroke-width="2"/>
    <text x="100" y="150" fill="#ef4444" font-size="11" font-family="var(--font-mono)" text-anchor="middle">Max PE</text>
    <text x="100" y="165" fill="#ef4444" font-size="11" font-family="var(--font-mono)" text-anchor="middle">KE = 0</text>
    
    <!-- Center Position (Max KE) -->
    <line x1="200" y1="40" x2="200" y2="160" stroke="var(--text-primary)" stroke-width="2"/>
    <circle cx="200" cy="160" r="15" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" stroke-width="2"/>
    <text x="200" y="190" fill="#3b82f6" font-size="11" font-family="var(--font-mono)" text-anchor="middle">Max KE</text>
    <text x="200" y="205" fill="#3b82f6" font-size="11" font-family="var(--font-mono)" text-anchor="middle">Min PE</text>

    <!-- Right Position (Max PE) -->
    <line x1="200" y1="40" x2="300" y2="120" stroke="var(--text-secondary)" stroke-width="1.5" stroke-dasharray="4 4"/>
    <circle cx="300" cy="120" r="15" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" stroke-width="2"/>
    <text x="300" y="150" fill="#ef4444" font-size="11" font-family="var(--font-mono)" text-anchor="middle">Max PE</text>
    <text x="300" y="165" fill="#ef4444" font-size="11" font-family="var(--font-mono)" text-anchor="middle">KE = 0</text>
    
    <!-- Motion Arc -->
    <path d="M 100 120 Q 200 190 300 120" fill="none" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 4"/>
  </svg>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Work: W = F·s·cosθ</li>
    <li>KE = 0.5mv² = p²/2m</li>
    <li>Power: P = W/t = F·v</li>
    <li>1 HP = 746 Watts</li>
    <li>g = GM/R²</li>
    <li>Escape Velocity: vₑ = √(2gR) ≈ 11.2 km/s</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["physics-waves"] = `
  <h3> Sound Waves & Acoustics</h3>
  <p>Subject: Physics (NDA/CDS)</p>
  <p>Chapter: Waves & Acoustics</p>
  <svg viewBox="0 0 400 180" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <defs>
      <marker id="arrow-wave" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="var(--text-primary)" />
      </marker>
    </defs>
    <text x="200" y="20" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Transverse Wave</text>
    
    <!-- Equilibrium line -->
    <line x1="20" y1="100" x2="380" y2="100" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 4"/>
    
    <!-- Wave path -->
    <path d="M 40 100 Q 80 20 120 100 T 200 100 T 280 100 T 360 100" fill="none" stroke="#3b82f6" stroke-width="3"/>
    
    <!-- Wavelength -->
    <line x1="80" y1="35" x2="240" y2="35" stroke="var(--text-primary)" stroke-width="1.5" marker-start="url(#arrow-wave)" marker-end="url(#arrow-wave)"/>
    <text x="160" y="30" fill="var(--text-primary)" font-size="12" font-family="var(--font-mono)" text-anchor="middle">Wavelength (λ)</text>
    
    <!-- Amplitude -->
    <line x1="200" y1="100" x2="200" y2="60" stroke="#10b981" stroke-width="1.5" marker-end="url(#arrow-wave)"/>
    <text x="240" y="80" fill="#10b981" font-size="11" font-family="var(--font-mono)" text-anchor="middle">Amplitude</text>
    
    <!-- Crest & Trough -->
    <text x="80" y="45" fill="var(--text-secondary)" font-size="11" font-style="italic" text-anchor="middle">Crest</text>
    <text x="160" y="165" fill="var(--text-secondary)" font-size="11" font-style="italic" text-anchor="middle">Trough</text>
  </svg>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>v = sqrt(E/ρ)</li>
    <li>Speed: Solid > Liquid > Gas</li>
    <li>Decibel: Loudness unit</li>
    <li>Echo distance: 17.2m</li>
    <li>Doppler Effect</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["physics-thermodynamics"] = `
  <h3> Thermodynamics & Heat Transfer</h3>
  <p>Subject: Physics (NDA/CDS)</p>
  <p>Chapter: Heat & Thermodynamics</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Temp: C/5 = (F-32)/9 = (K-273)/5</li>
    <li>Transfer: Conduction (solids), Convection (fluids), Radiation (no medium)</li>
    <li>Laws: Zeroth (thermal equilibrium), 1st (conservation of energy), 2nd (entropy increases)</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["physics-electromagnetism"] = `
  <h3> Electricity, Circuits & Magnetism</h3>
  <p>Subject: Physics (NDA/CDS)</p>
  <p>Chapter: Electricity & Magnetism</p>
  <svg viewBox="0 0 400 200" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <text x="200" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Magnetic Field of a Bar Magnet</text>
    
    <!-- Magnet Body -->
    <rect x="140" y="85" width="60" height="30" fill="#ef4444"/>
    <rect x="200" y="85" width="60" height="30" fill="#3b82f6"/>
    <text x="170" y="105" fill="#fff" font-size="16" font-weight="bold" text-anchor="middle">N</text>
    <text x="230" y="105" fill="#fff" font-size="16" font-weight="bold" text-anchor="middle">S</text>
    
    <!-- Field Lines -->
    <!-- Top inner -->
    <path d="M 170 85 Q 200 40 230 85" fill="none" stroke="var(--text-secondary)" stroke-width="1.5"/>
    <polygon points="205,58 195,54 195,62" fill="var(--text-secondary)"/>
    <!-- Top outer -->
    <path d="M 150 85 Q 200 10 250 85" fill="none" stroke="var(--text-secondary)" stroke-width="1.5"/>
    <polygon points="205,37 195,33 195,41" fill="var(--text-secondary)"/>
    <!-- Bottom inner -->
    <path d="M 170 115 Q 200 160 230 115" fill="none" stroke="var(--text-secondary)" stroke-width="1.5"/>
    <polygon points="195,142 205,146 205,138" fill="var(--text-secondary)"/>
    <!-- Bottom outer -->
    <path d="M 150 115 Q 200 190 250 115" fill="none" stroke="var(--text-secondary)" stroke-width="1.5"/>
    <polygon points="195,163 205,167 205,159" fill="var(--text-secondary)"/>
  </svg>
  <svg viewBox="0 0 400 220" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <text x="200" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Fleming's Left Hand Rule (Motor Effect)</text>
    
    <!-- Origin point -->
    <circle cx="150" cy="150" r="4" fill="var(--text-secondary)"/>
    
    <!-- Thumb (Force) -> UP -->
    <line x1="150" y1="150" x2="150" y2="70" stroke="#ef4444" stroke-width="4"/>
    <polygon points="150,60 145,70 155,70" fill="#ef4444"/>
    <text x="150" y="50" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">Force (Thumb)</text>
    
    <!-- Forefinger (Magnetic Field) -> RIGHT -->
    <line x1="150" y1="150" x2="250" y2="150" stroke="#3b82f6" stroke-width="4"/>
    <polygon points="260,150 250,145 250,155" fill="#3b82f6"/>
    <text x="270" y="154" fill="#3b82f6" font-size="12" font-weight="bold" text-anchor="start">Magnetic Field (Forefinger)</text>
    
    <!-- Middle finger (Current) -> DOWN-LEFT (Z-axis perspective) -->
    <line x1="150" y1="150" x2="90" y2="190" stroke="#10b981" stroke-width="4"/>
    <polygon points="80,197 88,187 95,193" fill="#10b981"/>
    <text x="70" y="210" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">Current (Middle)</text>
    
    <!-- Angles -->
    <path d="M 150 130 A 20 20 0 0 1 170 150" fill="none" stroke="var(--text-secondary)" stroke-width="1.5"/>
    <text x="165" y="145" fill="var(--text-secondary)" font-size="9">90°</text>
    <path d="M 130 150 A 20 20 0 0 0 138 165" fill="none" stroke="var(--text-secondary)" stroke-width="1.5"/>
    <text x="125" y="160" fill="var(--text-secondary)" font-size="9">90°</text>

    <!-- FBI Mnemonic -->
    <rect x="250" y="50" width="130" height="60" rx="5" fill="rgba(255, 215, 0, 0.1)" stroke="#f59e0b" stroke-width="1"/>
    <text x="315" y="70" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Mnemonic: F-B-I</text>
    <text x="315" y="85" fill="var(--text-primary)" font-size="10" text-anchor="middle">F = Force (Thumb)</text>
    <text x="315" y="98" fill="var(--text-primary)" font-size="10" text-anchor="middle">B = Mag. Field (Fore)</text>
  </svg>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Ohm's Law: V = I * R</li>
    <li>Resistance: Series (Rs = R1+R2), Parallel (1/Rp = 1/R1 + 1/R2)</li>
    <li>Power: P = V * I = I^2 * R</li>
    <li>Force: F = q * (v x B)</li>
    <li>Induction: Faraday's & Lenz's Laws</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["physics-modern"] = `
  <h3> SI Units & Everyday Physics</h3>
  <p>Subject: Physics (NDA/CDS)</p>
  <p>Chapter: Modern Physics & Units</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Base Units: m, kg, s, A, K, mol, cd</li>
    <li>Derived: Newton (Force), Joule (Energy), Watt (Power), Pascal (Pressure)</li>
    <li>Everyday: Raindrops (surface tension), Mirages (TIR), Sky blue (Rayleigh scattering)</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["chemistry-substances"] = `
  <h3> Acids, Bases & pH Indicators</h3>
  <p>Subject: Chemistry (NDA/CDS)</p>
  <p>Chapter: Acids, Bases & Salts</p>
  <h4>1. Theories of Acids and Bases</h4>
  <ul>
    <li><strong>Arrhenius Theory</strong>: Acid: Releases hydrogen ions (H⁺) or hydronium ions (H₃O⁺) in aqueous solution (e.g., HCl, HNO₃).</li>
    <li>Base: Releases hydroxyl ions (OH⁻) in aqueous solution (e.g., NaOH, KOH).</li>
    <li><strong>Bronsted-Lowry Theory</strong>: Acid: Proton (H⁺) donor.</li>
    <li>Base: Proton (H⁺) acceptor.</li>
    <li><strong>Lewis Theory</strong>: Acid: Electron-pair acceptor (electron deficient, e.g., BF₃, AlCl₃, H⁺).</li>
    <li>Base: Electron-pair donor (has lone pair, e.g., NH₃, H₂O, F⁻).</li>
  </ul>
  <h4>2. pH Scale & Indicators</h4>
  <ul>
    <li>pH represents potential of Hydrogen. Formula: pH = -log[H⁺] or pH = -log[H₃O⁺] .</li>
    <li>At 298 K: pH 7 is basic/alkaline.</li>
    <li>Indicators Table: Indicator Acidic Color Basic Color Litmus Red Blue Phenolphthalein Colorless Deep Pink Methyl Orange Red/Orange Yellow</li>
  </ul>
  <p>Table Data:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr><td style="padding:8px; border:1px solid var(--border);">Indicator</td><td style="padding:8px; border:1px solid var(--border);">Acidic Color</td><td style="padding:8px; border:1px solid var(--border);">Basic Color</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Litmus</td><td style="padding:8px; border:1px solid var(--border);">Red</td><td style="padding:8px; border:1px solid var(--border);">Blue</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Phenolphthalein</td><td style="padding:8px; border:1px solid var(--border);">Colorless</td><td style="padding:8px; border:1px solid var(--border);">Deep Pink</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Methyl Orange</td><td style="padding:8px; border:1px solid var(--border);">Red/Orange</td><td style="padding:8px; border:1px solid var(--border);">Yellow</td></tr>
  </table>
  <h4>3. Key Chemical Salts and Formulas</h4>
  <ul>
    <li><strong>Baking Soda (Sodium Hydrogen Carbonate - NaHCO₃)</strong>: Prepared by Solvay process. Releases CO₂ on heating. Used in baking and soda-acid fire extinguishers.</li>
    <li><strong>Washing Soda (Sodium Carbonate Decahydrate - Na₂CO₃ · 10H₂O)</strong>: Used in glass, soap paper industries, and for removing permanent hardness of water.</li>
    <li><strong>Plaster of Paris (Calcium Sulphate Hemihydrate - CaSO₄ · ½H₂O)</strong>: Obtained by heating Gypsum (CaSO₄ · 2H₂O) at 373 K. Used for plastering fractured bones and making toys.</li>
    <li><strong>Bleaching Powder (Calcium Oxychloride - CaOCl₂)</strong>: Formed by action of chlorine on dry slaked lime [Ca(OH)₂]. Used as disinfectant for water and bleaching agent in textile industry.</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>pH = -log[H⁺]</li>
    <li>Baking Soda: NaHCO₃</li>
    <li>Washing Soda: Na₂CO₃·10H₂O</li>
    <li>POP: CaSO₄·0.5H₂O</li>
    <li>Gypsum: CaSO₄·2H₂O</li>
    <li>Bleaching Powder: CaOCl₂</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["chemistry-bonding"] = `
  <h3> Chemical Bonding & Periodic Table</h3>
  <p>Subject: Chemistry (NDA/CDS)</p>
  <p>Chapter: Chemical Bonding</p>
  <h4>1. Types of Chemical Bonds</h4>
  <ul>
    <li><strong>Electrovalent/Ionic Bond</strong>: Formed by complete transfer of electrons from electropositive metal to electronegative non-metal (e.g., NaCl, CaCl₂). Properties: High melting/boiling points, soluble in water, conduct electricity in molten/solution state.</li>
    <li><strong>Covalent Bond</strong>: Formed by equal sharing of electrons between non-metals (e.g., H₂, O₂, H₂O). Properties: Low melting/boiling points, insoluble in water (soluble in organic solvents), poor conductors.</li>
    <li><strong>Coordinate/Dative Bond</strong>: Special covalent bond where shared pair is donated by one atom (donor) and accepted by another (acceptor) (e.g., NH₄⁺, H₃O⁺).</li>
    <li><strong>Hydrogen Bond</strong>: Electrostatic force of attraction between hydrogen atom bonded to a highly electronegative atom (F, O, N) and another electronegative atom. Intermolecular H-bonding: Between different molecules (e.g., H₂O, HF). Explains why H₂O is liquid while H₂S is gas.</li>
    <li>Intramolecular H-bonding: Within the same molecule (e.g., o-nitrophenol).</li>
  </ul>
  <svg viewBox="0 0 400 160" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <text x="200" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Covalent Bonding in H₂O</text>
    
    <!-- Oxygen Atom -->
    <circle cx="200" cy="95" r="40" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" stroke-width="2"/>
    <text x="200" y="100" fill="#ef4444" font-size="18" font-family="var(--font-main)" font-weight="bold" text-anchor="middle">O</text>
    
    <!-- Hydrogen Atom 1 -->
    <circle cx="145" cy="55" r="25" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="2"/>
    <text x="140" y="60" fill="#3b82f6" font-size="14" font-family="var(--font-main)" font-weight="bold" text-anchor="middle">H</text>

    <!-- Hydrogen Atom 2 -->
    <circle cx="255" cy="55" r="25" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="2"/>
    <text x="260" y="60" fill="#3b82f6" font-size="14" font-family="var(--font-main)" font-weight="bold" text-anchor="middle">H</text>

    <!-- Shared Electrons -->
    <circle cx="168" cy="73" r="3" fill="#fbbf24"/>
    <circle cx="178" cy="65" r="3" fill="#fbbf24"/>
    <circle cx="232" cy="73" r="3" fill="#fbbf24"/>
    <circle cx="222" cy="65" r="3" fill="#fbbf24"/>
    
    <!-- Lone Pairs on O -->
    <circle cx="190" cy="125" r="3" fill="#ef4444"/>
    <circle cx="210" cy="125" r="3" fill="#ef4444"/>
    <circle cx="180" cy="110" r="3" fill="#ef4444"/>
    <circle cx="220" cy="110" r="3" fill="#ef4444"/>
  </svg>
  <h4>2. Modern Periodic Table & Periodic Trends</h4>
  <p>Developed by Henry Moseley, based on **Atomic Number**. Has 18 groups and 7 periods.</p>
  <ul>
    <li><strong>Atomic Radius</strong>: Across Period (Left to Right): **Decreases** due to increase in effective nuclear charge (pulls electrons closer).</li>
    <li>Down Group (Top to Bottom): **Increases** due to addition of new electron shells.</li>
    <li><strong>Ionization Energy (IE)</strong>: Energy required to remove the outermost electron. Across Period: **Increases** (atomic size decreases, nuclear pull increases).</li>
    <li>Down Group: **Decreases** (atomic size increases, easier to remove outer electron).</li>
    <li><strong>Electronegativity</strong>: Tendency of an atom to attract shared electron pair. Across Period: **Increases** (Fluorine is most electronegative).</li>
    <li>Down Group: **Decreases**.</li>
    <li><strong>Metallic Character (Electropositivity)</strong>: Across Period: **Decreases**.</li>
    <li>Down Group: **Increases** (Francium/Cesium are highly metallic).</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Ionic Bond: Electron transfer</li>
    <li>Covalent Bond: Electron sharing</li>
    <li>H-Bonding: Strongest intermolecular attraction</li>
    <li>Electronegativity: F > O > N > Cl</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["chemistry-metallurgy"] = `
  <h3> Metals, Ores, Alloys & Metallurgy</h3>
  <p>Subject: Chemistry (NDA/CDS)</p>
  <p>Chapter: Metals & Metallurgy</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Al: Bauxite, Cryolite</li>
    <li>Fe: Hematite, Magnetite</li>
    <li>Alloys: Brass (Cu+Zn), Bronze (Cu+Sn), Solder (Pb+Sn)</li>
    <li>Flotation: Sulphides</li>
    <li>Roasting (air) vs Calcination (no air)</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["chemistry-carbon-numericals"] = `
  <h3> Carbon & its Compounds</h3>
  <p>Subject: Chemistry (NDA/CDS)</p>
  <p>Chapter: Carbon Compounds & Numericals</p>
  <svg viewBox="0 0 400 200" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <!-- Diamond -->
    <text x="100" y="20" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Diamond (sp³)</text>
    <text x="100" y="35" fill="var(--text-secondary)" font-size="10" font-style="italic" text-anchor="middle">Tetrahedral 3D Lattice</text>
    
    <g transform="translate(100, 110)">
      <circle cx="0" cy="0" r="8" fill="#a78bfa" stroke="#8b5cf6" stroke-width="1.5"/>
      
      <!-- Top -->
      <line x1="0" y1="-8" x2="0" y2="-40" stroke="#8b5cf6" stroke-width="2"/>
      <circle cx="0" cy="-40" r="8" fill="#a78bfa" stroke="#8b5cf6" stroke-width="1.5"/>
      
      <!-- Bottom Right -->
      <line x1="6" y1="5" x2="30" y2="25" stroke="#8b5cf6" stroke-width="2"/>
      <circle cx="30" cy="25" r="8" fill="#a78bfa" stroke="#8b5cf6" stroke-width="1.5"/>
      
      <!-- Bottom Left -->
      <line x1="-6" y1="5" x2="-30" y2="25" stroke="#8b5cf6" stroke-width="2"/>
      <circle cx="-30" cy="25" r="8" fill="#a78bfa" stroke="#8b5cf6" stroke-width="1.5"/>
      
      <!-- Back -->
      <line x1="3" y1="-5" x2="15" y2="-20" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="2 2"/>
      <circle cx="15" cy="-20" r="6" fill="#c4b5fd" stroke="#8b5cf6" stroke-width="1"/>
    </g>

    <!-- Divider -->
    <line x1="200" y1="20" x2="200" y2="180" stroke="var(--border)" stroke-width="1" stroke-dasharray="4 4"/>

    <!-- Graphite -->
    <text x="300" y="20" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Graphite (sp²)</text>
    <text x="300" y="35" fill="var(--text-secondary)" font-size="10" font-style="italic" text-anchor="middle">Hexagonal Layers</text>
    
    <g transform="translate(300, 70)">
      <!-- Top Layer -->
      <polygon points="0,-15 13,-7 13,8 0,15 -13,8 -13,-7" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="26,-15 39,-7 39,8 26,15 13,8 13,-7" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="-26,-15 -13,-7 -13,8 -26,15 -39,8 -39,-7" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
      <circle cx="0" cy="-15" r="4" fill="#60a5fa"/><circle cx="13" cy="-7" r="4" fill="#60a5fa"/><circle cx="13" cy="8" r="4" fill="#60a5fa"/><circle cx="0" cy="15" r="4" fill="#60a5fa"/><circle cx="-13" cy="8" r="4" fill="#60a5fa"/><circle cx="-13" cy="-7" r="4" fill="#60a5fa"/>
      
      <!-- Bottom Layer -->
      <g transform="translate(0, 50)">
        <polygon points="0,-15 13,-7 13,8 0,15 -13,8 -13,-7" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
        <polygon points="26,-15 39,-7 39,8 26,15 13,8 13,-7" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
        <polygon points="-26,-15 -13,-7 -13,8 -26,15 -39,8 -39,-7" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
        <circle cx="0" cy="-15" r="4" fill="#60a5fa"/><circle cx="13" cy="-7" r="4" fill="#60a5fa"/><circle cx="13" cy="8" r="4" fill="#60a5fa"/><circle cx="0" cy="15" r="4" fill="#60a5fa"/><circle cx="-13" cy="8" r="4" fill="#60a5fa"/><circle cx="-13" cy="-7" r="4" fill="#60a5fa"/>
      </g>
      
      <!-- Van der Waals Forces -->
      <line x1="0" y1="15" x2="0" y2="35" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="-13" y1="8" x2="-13" y2="43" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2"/>
      <line x1="13" y1="8" x2="13" y2="43" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2"/>
    </g>
  </svg>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Alkanes: CnH2n+2</li>
    <li>Alkenes: CnH2n</li>
    <li>Alkynes: CnH2n-2</li>
    <li>Diamond: sp3, Graphite: sp2, Fullerene: C-60</li>
    <li>Esterification: Acid+Alcohol -> Ester</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["chemistry-everyday-env"] = `
  <h3> Everyday Chemistry, Fertilisers & Fuels</h3>
  <p>Subject: Chemistry (NDA/CDS)</p>
  <p>Chapter: Everyday & Environmental Chemistry</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Saponification: fat + NaOH -> soap + glycerol</li>
    <li>NPK: Nitrogen, Phosphorus, Potassium</li>
    <li>Glass: supercooled liquid (silicates)</li>
    <li>Cement: gypsum (delays setting time), silicates & aluminates</li>
    <li>Petroleum: LPG (butane + propane), CNG (methane)</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["biology-cell"] = `
  <h3> Cell Structure & Cell Division</h3>
  <p>Subject: Biology (NDA/CDS)</p>
  <p>Chapter: Cell Biology & Genetics</p>
  <h4>1. Cell Theory & Classification</h4>
  <ul>
    <li>Cell is the structural and functional unit of life, first discovered by Robert Hooke in 1665 (dead cork cell) and Leeuwenhoek in 1674 (living cell).</li>
    <li><strong>Cell Theory</strong>: Proposed by Schleiden and Schwann (1838-1839). Rudolf Virchow added: "Omnis cellula-e-cellula" (all cells arise from pre-existing cells).</li>
    <li><strong>Prokaryotic Cells</strong>: Lack a nuclear membrane and membrane-bound organelles (e.g., Bacteria, Blue-green algae). Possess 70S ribosomes.</li>
    <li><strong>Eukaryotic Cells</strong>: Have a well-defined nuclear envelope and organelles (e.g., Plants, Animals, Fungi). Possess 80S ribosomes.</li>
  </ul>
  <h4>2. Vital Cell Organelles</h4>
  <ul>
    <li><strong>Mitochondria</strong>: Double-membraned powerhouse of the cell. Site of aerobic cellular respiration and ATP generation. Contains its own DNA and 70S ribosomes.</li>
    <li><strong>Plastids (Chloroplasts)</strong>: Found only in plant cells. Kitchen of the cell, contains chlorophyll to perform photosynthesis. Possesses own circular DNA.</li>
    <li><strong>Ribosomes</strong>: Non-membrane bound protein factories. Found free in cytoplasm or attached to Rough Endoplasmic Reticulum (RER).</li>
    <li><strong>Lysosomes</strong>: Formed by Golgi apparatus. Known as Suicide Bags because they contain hydrolytic digestive enzymes that destroy worn-out organelles or the cell itself under stress.</li>
    <li><strong>Endoplasmic Reticulum (ER)</strong>: RER has ribosomes and synthesizes proteins; Smooth ER (SER) synthesizes lipids and detoxifies poisons/drugs.</li>
    <li><strong>Golgi Apparatus</strong>: Performs packaging, modification, and dispatching of materials.</li>
  </ul>
  <h4>3. Cell Division (Mitosis vs Meiosis)</h4>
  <ul>
    <li><strong>Mitosis (Equational Division)</strong>: Occurs in somatic cells for growth and repair. One diploid cell (2n) divides to produce two identical diploid (2n) daughter cells .</li>
    <li><strong>Meiosis (Reductional Division)</strong>: Occurs in germ cells to form gametes. One diploid cell (2n) divides to produce four non-identical haploid (n) daughter cells . Features crossing over in Prophase I (Pachytene stage) which induces variation.</li>
  </ul>
  <svg viewBox="0 0 400 200" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
      </marker>
    </defs>
    <!-- Mitosis side -->
    <text x="100" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Mitosis (2n → 2n)</text>
    <circle cx="100" cy="55" r="20" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
    <text x="100" y="60" fill="var(--text-primary)" font-size="12" font-family="var(--font-mono)" text-anchor="middle">2n</text>
    
    <path d="M 100 85 L 60 135" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M 100 85 L 140 135" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)"/>
    
    <circle cx="60" cy="160" r="18" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
    <text x="60" y="164" fill="var(--text-primary)" font-size="11" font-family="var(--font-mono)" text-anchor="middle">2n</text>
    
    <circle cx="140" cy="160" r="18" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
    <text x="140" y="164" fill="var(--text-primary)" font-size="11" font-family="var(--font-mono)" text-anchor="middle">2n</text>
    
    <!-- Divider -->
    <line x1="200" y1="10" x2="200" y2="190" stroke="var(--border)" stroke-width="2" stroke-dasharray="4 4"/>
    
    <!-- Meiosis side -->
    <text x="300" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Meiosis (2n → n)</text>
    <circle cx="300" cy="55" r="20" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2"/>
    <text x="300" y="60" fill="var(--text-primary)" font-size="12" font-family="var(--font-mono)" text-anchor="middle">2n</text>
    
    <path d="M 300 85 L 260 115" stroke="#10b981" stroke-width="2"/>
    <path d="M 300 85 L 340 115" stroke="#10b981" stroke-width="2"/>
    
    <circle cx="260" cy="135" r="15" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="340" cy="135" r="15" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="1.5"/>
    <text x="260" y="139" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">n</text>
    <text x="340" y="139" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">n</text>

    <!-- Meiosis II -->
    <path d="M 250 155 L 240 170" stroke="#10b981" stroke-width="1.5"/>
    <path d="M 270 155 L 280 170" stroke="#10b981" stroke-width="1.5"/>
    <path d="M 330 155 L 320 170" stroke="#10b981" stroke-width="1.5"/>
    <path d="M 350 155 L 360 170" stroke="#10b981" stroke-width="1.5"/>
    
    <circle cx="235" cy="180" r="12" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="285" cy="180" r="12" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="315" cy="180" r="12" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="1.5"/>
    <circle cx="365" cy="180" r="12" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="1.5"/>
    
    <text x="235" y="184" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">n</text>
    <text x="285" y="184" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">n</text>
    <text x="315" y="184" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">n</text>
    <text x="365" y="184" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">n</text>
  </svg>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Powerhouse: Mitochondria (ATP)</li>
    <li>Suicide Bags: Lysosomes (hydrolytic enzymes)</li>
    <li>Protein Factory: Ribosomes</li>
    <li>Mitosis: Growth & Repair (2n -> 2n)</li>
    <li>Meiosis: Gamete formation & Crossing Over (2n -> 4 cells of n)</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["biology-physiology"] = `
  <h3> Human Diseases & Pathogens</h3>
  <p>Subject: Biology (NDA/CDS)</p>
  <p>Chapter: Health, Diseases & Nutrition</p>
  <h4>1. Infectious Diseases Classification</h4>
  <ul>
    <li><strong>Bacterial Diseases</strong>: Tuberculosis (TB): Caused by Mycobacterium tuberculosis . Prevented by BCG vaccine.</li>
    <li>Typhoid: Caused by Salmonella typhi . Diagnosed by **Widal Test**.</li>
    <li>Cholera: Caused by Vibrio cholerae (water-borne).</li>
    <li><strong>Viral Diseases</strong>: Dengue: Caused by Flavivirus. Spread by Aedes aegypti mosquito. Characterized by severe drop in platelet count.</li>
    <li>Polio: Caused by Poliovirus. Vaccine developed by Jonas Salk (injected) and Albert Sabin (oral).</li>
    <li>AIDS: Caused by HIV (Retrovirus). Diagnosed by ELISA Test .</li>
    <li><strong>Protozoan Diseases</strong>: Malaria: Caused by Plasmodium . Spread by female **Anopheles** mosquito vector. Quinine (from Cinchona bark) is used as treatment.</li>
    <li>Kala-azar (Leishmaniasis): Spread by **Sandfly** vector.</li>
  </ul>
  <h4>2. Nutritional Deficiency Diseases</h4>
  <ul>
    <li><strong>Vitamins & Minerals Deficiency Chart</strong>: Vitamin / Chemical Common Name Deficiency Disease Vitamin A Retinol Night Blindness / Xerophthalmia Vitamin B1 Thiamine Beriberi Vitamin C Ascorbic Acid Scurvy (Bleeding gums) Vitamin D Calciferol Rickets (bow legs in kids)</li>
  </ul>
  <p>Table Data:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin / Chemical</td><td style="padding:8px; border:1px solid var(--border);">Common Name</td><td style="padding:8px; border:1px solid var(--border);">Deficiency Disease</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin A</td><td style="padding:8px; border:1px solid var(--border);">Retinol</td><td style="padding:8px; border:1px solid var(--border);">Night Blindness / Xerophthalmia</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin B1</td><td style="padding:8px; border:1px solid var(--border);">Thiamine</td><td style="padding:8px; border:1px solid var(--border);">Beriberi</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin C</td><td style="padding:8px; border:1px solid var(--border);">Ascorbic Acid</td><td style="padding:8px; border:1px solid var(--border);">Scurvy (Bleeding gums)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin D</td><td style="padding:8px; border:1px solid var(--border);">Calciferol</td><td style="padding:8px; border:1px solid var(--border);">Rickets (bow legs in kids)</td></tr>
  </table>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Typhoid: Widal Test</li>
    <li>Malaria: Female Anopheles vector</li>
    <li>Dengue: Aedes vector</li>
    <li>Vit A (Retinol) -> Night Blindness</li>
    <li>Vit B1 (Thiamine) -> Beriberi</li>
    <li>Vit C (Ascorbic Acid) -> Scurvy</li>
    <li>Vit D (Calciferol) -> Rickets</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["biology-diseases"] = `
  <h3> Human Diseases & Pathogens</h3>
  <p>Subject: Biology (NDA/CDS)</p>
  <p>Chapter: Health, Diseases & Nutrition</p>
  <h4>1. Infectious Diseases Classification</h4>
  <ul>
    <li><strong>Bacterial Diseases</strong>: Tuberculosis (TB): Caused by Mycobacterium tuberculosis . Prevented by BCG vaccine.</li>
    <li>Typhoid: Caused by Salmonella typhi . Diagnosed by **Widal Test**.</li>
    <li>Cholera: Caused by Vibrio cholerae (water-borne).</li>
    <li><strong>Viral Diseases</strong>: Dengue: Caused by Flavivirus. Spread by Aedes aegypti mosquito. Characterized by severe drop in platelet count.</li>
    <li>Polio: Caused by Poliovirus. Vaccine developed by Jonas Salk (injected) and Albert Sabin (oral).</li>
    <li>AIDS: Caused by HIV (Retrovirus). Diagnosed by ELISA Test .</li>
    <li><strong>Protozoan Diseases</strong>: Malaria: Caused by Plasmodium . Spread by female **Anopheles** mosquito vector. Quinine (from Cinchona bark) is used as treatment.</li>
    <li>Kala-azar (Leishmaniasis): Spread by **Sandfly** vector.</li>
  </ul>
  <h4>2. Nutritional Deficiency Diseases</h4>
  <ul>
    <li><strong>Vitamins & Minerals Deficiency Chart</strong>: Vitamin / Chemical Common Name Deficiency Disease Vitamin A Retinol Night Blindness / Xerophthalmia Vitamin B1 Thiamine Beriberi Vitamin C Ascorbic Acid Scurvy (Bleeding gums) Vitamin D Calciferol Rickets (bow legs in kids)</li>
  </ul>
  <p>Table Data:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin / Chemical</td><td style="padding:8px; border:1px solid var(--border);">Common Name</td><td style="padding:8px; border:1px solid var(--border);">Deficiency Disease</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin A</td><td style="padding:8px; border:1px solid var(--border);">Retinol</td><td style="padding:8px; border:1px solid var(--border);">Night Blindness / Xerophthalmia</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin B1</td><td style="padding:8px; border:1px solid var(--border);">Thiamine</td><td style="padding:8px; border:1px solid var(--border);">Beriberi</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin C</td><td style="padding:8px; border:1px solid var(--border);">Ascorbic Acid</td><td style="padding:8px; border:1px solid var(--border);">Scurvy (Bleeding gums)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vitamin D</td><td style="padding:8px; border:1px solid var(--border);">Calciferol</td><td style="padding:8px; border:1px solid var(--border);">Rickets (bow legs in kids)</td></tr>
  </table>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Typhoid: Widal Test</li>
    <li>Malaria: Female Anopheles vector</li>
    <li>Dengue: Aedes vector</li>
    <li>Vit A (Retinol) -> Night Blindness</li>
    <li>Vit B1 (Thiamine) -> Beriberi</li>
    <li>Vit C (Ascorbic Acid) -> Scurvy</li>
    <li>Vit D (Calciferol) -> Rickets</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["biology-kingdoms"] = `
  <h3> Animal Kingdom Classification</h3>
  <p>Subject: Biology (NDA/CDS)</p>
  <p>Chapter: Plant & Animal Kingdoms</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Porifera: Cellular, sponges</li>
    <li>Coelenterata: Cnidoblasts, Polyp/Medusa</li>
    <li>Platyhelminthes: Flatworms</li>
    <li>Aschelminthes: Roundworms</li>
    <li>Annelida: Segmented</li>
    <li>Arthropoda: Jointed, largest</li>
    <li>Mollusca: Soft, shell</li>
    <li>Echinodermata: Water vascular</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["biology-botany"] = `
  <h3> Plant Reproduction & Hormones</h3>
  <p>Subject: Biology (NDA/CDS)</p>
  <p>Chapter: Plant Physiology & Reproduction</p>
  <svg viewBox="0 0 400 210" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <text x="200" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Parts of a Flower</text>
    
    <!-- Receptacle and Stem -->
    <path d="M 190 180 L 210 180 L 210 150 C 210 140, 220 130, 230 130 C 210 130, 190 130, 170 130 C 180 130, 190 140, 190 150 Z" fill="#10b981"/>
    
    <!-- Sepals -->
    <path d="M 170 130 Q 140 100 150 140 Q 160 140 190 140" fill="#059669"/>
    <path d="M 230 130 Q 260 100 250 140 Q 240 140 210 140" fill="#059669"/>
    <text x="120" y="150" fill="#10b981" font-size="11" font-family="var(--font-mono)" text-anchor="middle">Sepal</text>

    <!-- Petals -->
    <path d="M 175 130 C 120 100, 150 40, 195 100" fill="rgba(239, 68, 68, 0.6)"/>
    <path d="M 225 130 C 280 100, 250 40, 205 100" fill="rgba(239, 68, 68, 0.6)"/>
    <path d="M 185 130 C 170 60, 230 60, 215 130" fill="rgba(239, 68, 68, 0.8)"/>
    
    <line x1="140" y1="70" x2="160" y2="70" stroke="var(--text-secondary)" stroke-width="1"/>
    <text x="120" y="75" fill="#ef4444" font-size="11" font-family="var(--font-mono)" text-anchor="middle">Petal</text>

    <!-- Pistil (Carpel) -->
    <path d="M 195 130 L 195 90 C 195 80, 205 80, 205 90 L 205 130 Z" fill="#34d399"/>
    <circle cx="200" cy="85" r="8" fill="#fbbf24"/>
    <circle cx="200" cy="120" r="12" fill="#34d399"/>
    <circle cx="200" cy="120" r="4" fill="#10b981"/> <!-- Ovule -->
    
    <!-- Pistil Labels -->
    <line x1="240" y1="85" x2="210" y2="85" stroke="var(--text-secondary)" stroke-width="1"/>
    <text x="260" y="90" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)">Stigma</text>
    <line x1="240" y1="105" x2="205" y2="105" stroke="var(--text-secondary)" stroke-width="1"/>
    <text x="260" y="110" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)">Style</text>
    <line x1="240" y1="125" x2="212" y2="125" stroke="var(--text-secondary)" stroke-width="1"/>
    <text x="260" y="130" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)">Ovary</text>
    <!-- Group label for Pistil -->
    <text x="320" y="110" fill="#10b981" font-size="12" font-weight="bold" font-family="var(--font-mono)">Pistil (♀)</text>

    <!-- Stamens -->
    <path d="M 185 125 Q 160 100 160 70" fill="none" stroke="#fcd34d" stroke-width="2"/>
    <circle cx="160" cy="65" r="5" fill="#f59e0b"/>
    <path d="M 215 125 Q 240 100 240 70" fill="none" stroke="#fcd34d" stroke-width="2"/>
    <circle cx="240" cy="65" r="5" fill="#f59e0b"/>
    
    <!-- Stamen Labels -->
    <line x1="130" y1="65" x2="155" y2="65" stroke="var(--text-secondary)" stroke-width="1"/>
    <text x="110" y="70" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)">Anther</text>
    <line x1="130" y1="90" x2="165" y2="90" stroke="var(--text-secondary)" stroke-width="1"/>
    <text x="110" y="95" fill="var(--text-primary)" font-size="10" font-family="var(--font-mono)">Filament</text>
    <text x="70" y="85" fill="#f59e0b" font-size="12" font-weight="bold" font-family="var(--font-mono)">Stamen (♂)</text>
  </svg>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Vegetative: Potato (stem), Bryophyllum (leaf)</li>
    <li>Double Fertilization: Syngamy (2n Zygote) + Triple Fusion (3n Endosperm)</li>
    <li>Auxin: Apical dominance, phototropism</li>
    <li>Gibberellins: Stem growth, breaks seed dormancy</li>
    <li>Cytokinin: Cell division, delays aging</li>
    <li>ABA: Stress hormone, closes stomata</li>
    <li>Ethylene: Gaseous hormone, fruit ripening</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["biology-ecology"] = `
  <h3> Ecology Basics & Pyramids</h3>
  <p>Subject: Biology (NDA/CDS)</p>
  <p>Chapter: Ecology & Ecosystems</p>
  <svg viewBox="0 0 400 220" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <text x="200" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Energy Pyramid (10% Law)</text>
    
    <!-- Pyramid Layers -->
    <polygon points="100,200 300,200 260,160 140,160" fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" stroke-width="2"/>
    <text x="200" y="185" fill="var(--text-primary)" font-size="12" font-family="var(--font-main)" text-anchor="middle">Producers (1000 J)</text>
    
    <polygon points="140,160 260,160 220,120 180,120" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" stroke-width="2"/>
    <text x="200" y="145" fill="var(--text-primary)" font-size="12" font-family="var(--font-main)" text-anchor="middle">Primary Cons. (100 J)</text>
    
    <polygon points="180,120 220,120 205,80 195,80" fill="rgba(245, 158, 11, 0.4)" stroke="#f59e0b" stroke-width="2"/>
    <text x="200" y="105" fill="var(--text-primary)" font-size="10" font-family="var(--font-main)" text-anchor="middle">Secondary (10 J)</text>
    
    <polygon points="195,80 205,80 200,60" fill="rgba(239, 68, 68, 0.4)" stroke="#ef4444" stroke-width="2"/>
    <text x="200" y="75" fill="var(--text-primary)" font-size="9" font-family="var(--font-main)" text-anchor="middle">Tertiary (1 J)</text>
    
    <!-- Energy Loss Arrows -->
    <defs>
      <marker id="arrow-loss" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
      </marker>
    </defs>
    <path d="M 280 180 Q 320 160 340 180" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 2" marker-end="url(#arrow-loss)"/>
    <text x="340" y="170" fill="#ef4444" font-size="10" font-style="italic" text-anchor="middle">90% Loss as Heat</text>
    
    <path d="M 240 140 Q 300 120 320 140" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 2" marker-end="url(#arrow-loss)"/>
    <path d="M 210 100 Q 280 80 300 100" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 2" marker-end="url(#arrow-loss)"/>
  </svg>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Lindeman's 10% Law: only 10% energy transferred to next level</li>
    <li>Pyramids: Numbers (inverted in tree), Biomass (inverted in marine), Energy (ALWAYS upright)</li>
    <li>Ecotone: transition zone between two ecosystems (e.g., Mangrove)</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["defence-structures"] = `
  <h3> Equivalent Officer Ranks (Tri-Services)</h3>
  <p>Subject: Military GK & Aptitude</p>
  <p>Chapter: Command Structures & Ranks</p>
  <h4>1. Commissioned Officers Rank Structure</h4>
  <p>Equivalent ranks in the three services are highly tested in CDS and AFCAT. Commissioned ranks from junior to senior levels:</p>
  <p>Table Data:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr><td style="padding:8px; border:1px solid var(--border);">Army</td><td style="padding:8px; border:1px solid var(--border);">Navy</td><td style="padding:8px; border:1px solid var(--border);">Air Force</td><td style="padding:8px; border:1px solid var(--border);">Insignia Star Rating</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Lieutenant</td><td style="padding:8px; border:1px solid var(--border);">Sub-Lieutenant</td><td style="padding:8px; border:1px solid var(--border);">Flying Officer</td><td style="padding:8px; border:1px solid var(--border);">Entry Rank</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Captain</td><td style="padding:8px; border:1px solid var(--border);">Lieutenant</td><td style="padding:8px; border:1px solid var(--border);">Flight Lieutenant</td><td style="padding:8px; border:1px solid var(--border);">Junior Officer</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Major</td><td style="padding:8px; border:1px solid var(--border);">Lieutenant Commander</td><td style="padding:8px; border:1px solid var(--border);">Squadron Leader</td><td style="padding:8px; border:1px solid var(--border);">Mid-Level Officer</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Lieutenant Colonel</td><td style="padding:8px; border:1px solid var(--border);">Commander</td><td style="padding:8px; border:1px solid var(--border);">Wing Commander</td><td style="padding:8px; border:1px solid var(--border);">Selection Grade</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Colonel</td><td style="padding:8px; border:1px solid var(--border);">Captain</td><td style="padding:8px; border:1px solid var(--border);">Group Captain</td><td style="padding:8px; border:1px solid var(--border);">Senior Level</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Brigadier</td><td style="padding:8px; border:1px solid var(--border);">Commodore</td><td style="padding:8px; border:1px solid var(--border);">Air Commodore</td><td style="padding:8px; border:1px solid var(--border);">1 Star</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Major General</td><td style="padding:8px; border:1px solid var(--border);">Rear Admiral</td><td style="padding:8px; border:1px solid var(--border);">Air Vice Marshal</td><td style="padding:8px; border:1px solid var(--border);">2 Star</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Lieutenant General</td><td style="padding:8px; border:1px solid var(--border);">Vice Admiral</td><td style="padding:8px; border:1px solid var(--border);">Air Marshal</td><td style="padding:8px; border:1px solid var(--border);">3 Star</td></tr>
  </table>
  <h4>2. Honorary / Highest Ranks (5-Star Ranks)</h4>
  <ul>
    <li><strong>Field Marshal (Army)</strong>: Ranks held by Sam Manekshaw and K.M. Cariappa.</li>
    <li><strong>Marshal of the Indian Air Force (IAF)</strong>: Rank held by Arjan Singh.</li>
    <li><strong>Admiral of the Fleet (Navy)</strong>: Peacetime equivalent five-star rank (no naval officer has received this yet).</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Lieutenant = Sub-Lieutenant = Flying Officer</li>
    <li>Colonel = Captain = Group Captain</li>
    <li>General = Admiral = Air Chief Marshal</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["tactical-defence-gk"] = `
  <h3> Joint Military Exercises of India</h3>
  <p>Subject: Military GK & Aptitude</p>
  <p>Chapter: Exercises & Missile Systems</p>
  <h4>Bilateral Exercises List (High-Yield)</h4>
  <p>Armed forces carry out exercises to practice tactical joint operations. Memorize the major ones:</p>
  <ul>
    <li><strong>United States</strong>: Yudh Abhyas (Army)</li>
    <li>Vajra Prahar (Special Forces)</li>
    <li>Cope India (Air Force)</li>
    <li>Tarkash (Counter-terrorism joint drills)</li>
    <li><strong>France</strong>: Shakti (Army)</li>
    <li>Varuna (Navy)</li>
    <li>Garuda (Air Force)</li>
    <li><strong>Russia</strong>: Indra (Tri-services joint exercise)</li>
  </ul>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>US: Yudh Abhyas, Vajra Prahar</li>
    <li>Nepal: Surya Kiran</li>
    <li>France: Garuda(Air), Varuna(Navy), Shakti(Army)</li>
    <li>Russia: Indra</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["schemes-policies"] = `
  <h3> National Policies & Missions</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Schemes, Policies & Summits</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>NEP 2020: 5+3+3+4 structure</li>
    <li>Digital India: UPI 10B+ txns/mo</li>
    <li>Make in India: 25 sectors</li>
    <li>Start-Up India: 100+ unicorns</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["reports-awards-judgments"] = `
  <h3> National Awards & Honours</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Reports, Awards & Judgments</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Bharat Ratna > Padma Vibhushan > Padma Bhushan > Padma Shri</li>
    <li>PVC > MVC > VC (wartime)</li>
    <li>Ashoka Chakra > KC > SC (peacetime)</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["biodiversity-conservation"] = `
  <h3> Wildlife Protection & Conservation Projects</h3>
  <p>Subject: Environment & Ecology</p>
  <p>Chapter: Biodiversity & Wildlife Conservation</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Project Tiger: 1973, 53 reserves, ~3000+ tigers</li>
    <li>Project Elephant: 1992, 32 reserves</li>
    <li>Project Cheetah: 2022, Kuno NP</li>
    <li>106 National Parks</li>
    <li>85+ Ramsar Sites</li>
  </ul>

`;

window.EXPANDED_NOTES_DATA["climate-laws-energy"] = `
  <h3> Renewable Energy & Green Initiatives</h3>
  <p>Subject: Environment & Ecology</p>
  <p>Chapter: Climate, Laws & Renewable Energy</p>
  <h4>High-Yield Formulas & Facts</h4>
  <ul>
    <li>Target: 500 GW non-fossil by 2030</li>
    <li>ISA: India + France (Gurugram HQ)</li>
    <li>Green Hydrogen: 5 MMT by 2030</li>
    <li>E20: 20% ethanol blending</li>
    <li>FAME-II: EV subsidies</li>
  </ul>

`;


window.EXPANDED_NOTES_DATA["ca-red-sea-crisis"] = `
  <h3>Red Sea Crisis & Maritime Security Operations</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Global Events & Strategic Updates</p>
  
  <h4>1. Background and Genesis of the Crisis</h4>
  <p>The Red Sea crisis erupted as Yemen-based Houthi rebels initiated drone and missile strikes against commercial vessels transiting the Bab-el-Mandeb Strait. The Houthis, aligned with the regional Axis of Resistance, declared these actions as a blockade to pressure Israel during the Gaza conflict.</p>
  
  <h4>2. Strategic Chokepoint: Bab-el-Mandeb Strait</h4>
  <ul>
    <li><strong>Geographical Location:</strong> A narrow strait located between Yemen on the Arabian Peninsula, and Djibouti and Eritrea in the Horn of Africa.</li>
    <li><strong>Commercial Importance:</strong> Connects the Red Sea to the Gulf of Aden and the Indian Ocean. It is the southern gateway to the Suez Canal, handling approximately 12 percent of global trade and 30 percent of global container traffic.</li>
    <li><strong>Alternative Route:</strong> Due to security threats, shipping companies redirected cargo vessels around the Cape of Good Hope (South Africa). This alternative route adds approximately 3,000 to 3,500 nautical miles (10 to 14 days) to voyages between Asia and Europe, leading to significant increases in freight rates, insurance premiums, and fuel consumption.</li>
  </ul>

  <h4>3. India's Response: Operation Sankalp</h4>
  <p>In response to the threats to maritime commerce, including attacks on Indian-bound vessels like the MV Chem Pluto, the Indian Navy initiated defensive deployments under <strong>Operation Sankalp</strong>.</p>
  <ul>
    <li><strong>Deployments:</strong> The Indian Navy deployed frontline stealth guided-missile destroyers and frigates, including <code>INS Kolkata</code>, <code>INS Kochi</code>, <code>INS Mormugao</code>, <code>INS Chennai</code>, and <code>INS Talwar</code>.</li>
    <li><strong>Objectives:</strong> Carrying out maritime security operations, anti-piracy patrols, merchant vessel escort duties, and search-and-rescue operations in the Gulf of Aden, Arabian Sea, and East of Somalia.</li>
    <li><strong>Key Achievements:</strong> Successful rescue operations, including freeing hijacked crews from pirate capture (e.g., MV Ruen and MV Lila Norfolk) and rendering assistance to vessels hit by drone strikes.</li>
  </ul>

  <h4>4. International Coalitions</h4>
  <ul>
    <li><strong>Operation Prosperity Guardian:</strong> A US-led multinational security initiative launched under the aegis of the Combined Maritime Forces (CMF) to secure the Red Sea shipping corridor. India is not a formal member of this military coalition, choosing to run independent operations to maintain strategic autonomy.</li>
    <li><strong>Operation Aspides:</strong> A European Union naval security mission deployed to protect vessels in the region from attack.</li>
  </ul>
`;

window.EXPANDED_NOTES_DATA["ca-quad-indopacific"] = `
  <h3>Indo-Pacific Security & Quad Dynamics</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Global Events & Strategic Updates</p>

  <h4>1. Concept of the Indo-Pacific</h4>
  <p>The Indo-Pacific represents a unified biogeographic region encompassing the Indian Ocean and the western and central Pacific Ocean. It has emerged as the global geopolitical center of gravity, with major maritime trade routes passing through key chokepoints like the Strait of Malacca, Sunda Strait, and Lombok Strait.</p>

  <h4>2. The First Island Chain and Maritime Conflict</h4>
  <ul>
    <li><strong>First Island Chain:</strong> A strategic defensive perimeter defined by military planners, extending from the Kuril Islands through Japan, the Ryukyu Islands, Taiwan, the northern Philippines, and ending at Borneo. Controlling or contesting access to this chain is central to maritime strategy in East Asia.</li>
    <li><strong>South China Sea Disputes:</strong> China asserts historical claims over nearly the entire South China Sea using the unilateral <strong>Nine-Dash Line</strong>, conflicting with the Exclusive Economic Zones (EEZs) of Vietnam, the Philippines, Malaysia, Brunei, and Taiwan.</li>
    <li><strong>United Nations Convention on the Law of the Sea (UNCLOS):</strong> The international treaty defining maritime zones (territorial waters up to 12 nautical miles; EEZ up to 200 nautical miles). Disputes often arise from non-compliance with UNCLOS rulings.</li>
  </ul>

  <h4>3. Quadrilateral Security Dialogue (Quad)</h4>
  <p>The Quad is an informal strategic forum comprising <strong>India, the United States, Japan, and Australia</strong>. Initiated in 2007 by Japanese PM Shinzo Abe, it was revived in 2017 to counter coercive actions and maintain a free, open, and rules-based Indo-Pacific.</p>
  <ul>
    <li><strong>Core Pillars:</strong> Maritime security, disaster relief coordination, cyber security, vaccine partnerships, quality infrastructure, and critical technologies.</li>
    <li><strong>Indo-Pacific Maritime Domain Awareness (IPMDA):</strong> A Quad initiative providing near-real-time satellite data to regional partners to monitor dark shipping, illegal fishing, and maritime movements.</li>
  </ul>

  <h4>4. Major Maritime Exercises</h4>
  <ul>
    <li><strong>Exercise Malabar:</strong> A high-tempo naval exercise that began as a bilateral India-US drill in 1992, subsequently expanding to include Japan and Australia, forming the military core of the Quad.</li>
    <li><strong>Exercise Milan:</strong> A biennial, multilateral naval exercise hosted by the Indian Navy, bringing together dozens of friendly foreign nations to practice interoperability.</li>
  </ul>
`;

window.EXPANDED_NOTES_DATA["ca-defense-acquisitions"] = `
  <h3>Key Strategic Defense Acquisitions</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Global Events & Strategic Updates</p>

  <h4>1. Naval Modernization: Rafale-M Procurement</h4>
  <p>To meet the immediate operational requirements of the Indian Navy's aircraft carriers, the Ministry of Defence approved the procurement of <strong>26 Rafale-M (Marine)</strong> fighter aircraft from Dassault Aviation, France.</p>
  <ul>
    <li><strong>Integration:</strong> The Rafale-M jets are configured for carrier operations, featuring reinforced landing gear and arrestor hooks to facilitate Short Take-Off But Arrested Recovery (STOBAR) operations on <code>INS Vikrant</code> and <code>INS Vikramaditya</code>.</li>
    <li><strong>Weapons Package:</strong> Accompanied by Meteor beyond-visual-range air-to-air missiles and SCALP cruise missiles.</li>
  </ul>

  <h4>2. Submarine Capabilities: Project-75I and Scorpene Expansion</h4>
  <ul>
    <li><strong>Three Additional Scorpene Submarines:</strong> India signed an agreement to construct three additional Kalvari-class (Scorpene) diesel-electric attack submarines at Mazagon Dock Shipbuilders Limited (MDL) with technology transfer from Naval Group, France. These will be equipped with Air-Independent Propulsion (AIP) systems to increase underwater endurance.</li>
    <li><strong>Project-75I:</strong> A separate strategic partnership program to build six advanced conventional submarines equipped with fuel-cell AIP systems in Indian shipyards.</li>
  </ul>

  <h4>3. Air Defense: S-400 Triumf System</h4>
  <p>India is inducting the <strong>S-400 Triumf</strong> long-range surface-to-air missile system from Russia under a USD 5.43 billion deal. Capable of tracking and neutralizing stealth aircraft, drones, and ballistic missiles at ranges up to 400 km, it forms a critical layer of India's theater air defense.</p>

  <h4>4. Reciprocal Logistics Agreements</h4>
  <p>To expand its global strategic footprint, India has signed several reciprocal military logistics agreements. These pacts allow warships and military aircraft to access partner bases for refueling, replenishment, and repair.</p>
  <ul>
    <li><strong>RELOS (Reciprocal Exchange of Logistics Agreement):</strong> The bilateral pact signed with Russia, granting access to Arctic bases and ports.</li>
    <li><strong>LEMOA (Logistics Exchange Memorandum of Agreement):</strong> Signed with the United States in 2016.</li>
    <li><strong>Similar Agreements:</strong> Signed with France, Japan, Australia, Singapore, South Korea, and Vietnam.</li>
  </ul>
`;

window.EXPANDED_NOTES_DATA["ca-icet-drones"] = `
  <h3>India-US Tech Cooperation & MQ-9B Drones</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Global Events & Strategic Updates</p>

  <h4>1. Initiative on Critical and Emerging Technology (iCET)</h4>
  <p>Launched in 2023, iCET is a strategic mechanism led by the National Security Advisors of India and the US. It aims to build supply chain resilience and co-develop technologies across critical sectors:</p>
  <ul>
    <li><strong>Semiconductors:</strong> Establishing testing, assembly, and fabrication ecosystems.</li>
    <li><strong>Defense Innovation:</strong> Running joint challenges under INDUS-X to connect startups with defense buyers.</li>
    <li><strong>Space & Quantum:</strong> Coordinating training for Indian astronauts at NASA facilities and co-developing space sensors.</li>
  </ul>

  <h4>2. GE F414 Engine Co-production Deal</h4>
  <p>A historic agreement was finalized between General Electric (GE) Aerospace and Hindustan Aeronautics Limited (HAL) for the co-production of <strong>GE F414-INS6 turbofan engines</strong> in India.</p>
  <ul>
    <li><strong>Technology Transfer:</strong> The deal features an unprecedented 80 percent transfer of technology (ToT) to India.</li>
    <li><strong>Application:</strong> The engines will power the indigenous Light Combat Aircraft (LCA) Tejas Mk-2 and the Advanced Medium Combat Aircraft (AMCA) project.</li>
    <li><strong>Strategic Impact:</strong> Addresses a critical technology bottleneck, giving India self-reliance in military jet propulsion systems.</li>
  </ul>

  <h4>3. MQ-9B Predator Drone Procurement</h4>
  <p>India approved the procurement of <strong>31 MQ-9B High-Altitude Long-Endurance (HALE) Unmanned Aerial Vehicles (UAVs)</strong> from General Atomics, USA, under a government-to-government deal.</p>
  <ul>
    <li><strong>Distribution:</strong>
      <ul>
        <li><strong>Navy:</strong> 15 SeaGuardian variants, optimized for maritime surveillance and anti-submarine warfare.</li>
        <li><strong>Army:</strong> 8 SkyGuardian variants for land-border surveillance.</li>
        <li><strong>Air Force:</strong> 8 SkyGuardian variants.</li>
      </ul>
    </li>
    <li><strong>Capabilities:</strong> Over 35 hours of endurance, operational ceiling above 40,000 feet, and capacity to carry precision-guided missiles and laser-guided bombs.</li>
  </ul>
`;

window.EXPANDED_NOTES_DATA["ca-spain-c295"] = `
  <h3>India-Spain Aerospace Cooperation & C-295 Project</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Global Events & Strategic Updates</p>

  <h4>1. The C-295 Aircraft Program</h4>
  <p>The Ministry of Defence signed a contract to acquire <strong>56 C-295 tactical transport aircraft</strong> from Airbus Defence and Space, Spain, to replace the Indian Air Force's aging fleet of <code>HS-748 Avro</code> aircraft.</p>
  <ul>
    <li><strong>Delivery Structure:</strong>
      <ul>
        <li><strong>16 Flyaway Units:</strong> Manufactured at the Airbus facility in Seville, Spain, and delivered directly to India.</li>
        <li><strong>40 Assembled Units:</strong> Manufactured and assembled in India through a industrial partnership.</li>
      </ul>
    </li>
  </ul>

  <h4>2. Vadodara Assembly Facility</h4>
  <p>The C-295 assembly facility in <strong>Vadodara, Gujarat</strong>, established by Tata Advanced Systems Limited (TASL) in partnership with Airbus, represents a major milestone for the domestic defense sector.</p>
  <ul>
    <li><strong>Significance:</strong> The first private sector final assembly line for military aircraft in India. Previously, all military aircraft manufacturing was restricted to state-owned HAL.</li>
    <li><strong>Aviation Ecosystem:</strong> Supports localized manufacturing of over 13,000 detail parts and sub-assemblies, developing a skilled aerospace workforce in the country.</li>
  </ul>

  <h4>3. Aircraft Technical Capabilities</h4>
  <ul>
    <li><strong>Payload Capacity:</strong> Capable of carrying up to 9.2 tonnes of cargo, 71 soldiers, or 50 paratroopers.</li>
    <li><strong>STOL Capabilities:</strong> Features Short Take-Off and Landing (STOL) parameters, enabling operations from unpaved, semi-prepared runways in remote border areas (e.g., Advanced Landing Grounds in Ladakh and Arunachal Pradesh).</li>
    <li><strong>Engine:</strong> Powered by Pratt & Whitney Canada PW127G turboprop engines.</li>
  </ul>
`;

window.EXPANDED_NOTES_DATA["ca-space-nuclear"] = `
  <h3>Strategic Space & Missile Advancements</h3>
  <p>Subject: Current Affairs & GK</p>
  <p>Chapter: Global Events & Strategic Updates</p>

  <h4>1. Mission Divyastra: Agni-V MIRV Test</h4>
  <p>In March 2024, the Defence Research and Development Organisation (DRDO) successfully completed the maiden flight test of the <strong>Agni-V</strong> missile equipped with <strong>Multiple Independently Targetable Re-entry Vehicle (MIRV)</strong> technology under <strong>Mission Divyastra</strong>.</p>
  <ul>
    <li><strong>MIRV Technology:</strong> Enables a single missile to carry multiple nuclear warheads, each capable of being targeted to hit separate locations thousands of kilometers apart. This significantly increases penetration against hostile ballistic missile defense (BMD) shields.</li>
    <li><strong>Strategic Range:</strong> The Agni-V is an Intercontinental Ballistic Missile (ICBM) with a solid-fueled engine, possessing an operational range exceeding 5,000 km, which strengthens India's nuclear triad and deterrence.</li>
  </ul>

  <h4>2. Gaganyaan: Human Spaceflight Program</h4>
  <p>Led by the Indian Space Research Organisation (ISRO), Gaganyaan is India's flagship program to demonstrate human spaceflight capability.</p>
  <ul>
    <li><strong>Parameters:</strong> A crew of 3 members will be launched into a 400 km orbit for a 3-day mission, returning safely via a splashdown in Indian sea waters.</li>
    <li><strong>Launch Vehicle:</strong> Uses the LVM3 (Launch Vehicle Mark 3), re-engineered as a human-rated launcher (HLVM3).</li>
    <li><strong>Vyommitra:</strong> A female-looking humanoid robot developed by ISRO to fly on unmanned test flights to monitor cabin parameters and validate safety systems.</li>
  </ul>

  <h4>3. Space Defense and Anti-Satellite (ASAT) Capabilities</h4>
  <ul>
    <li><strong>Mission Shakti:</strong> Completed in 2019, this test demonstrated India's kinetic intercept capability by destroying a live satellite in Low Earth Orbit (LEO) using an indigenously developed ASAT missile.</li>
    <li><strong>Defense Space Agency (DSA):</strong> A tri-services agency established to integrate space assets, coordinate satellite intelligence, and counter space threats, working in tandem with the Defense Space Research Organisation (DSRO).</li>
  </ul>
`;
