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

window.EXPANDED_NOTES_DATA["ca-schemes"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Major Government Schemes
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>India’s modern governance framework is anchored in a series of centrally‑funded <span style="color: var(--warning);">[[Schemes]]</span> that aim to address structural deficits in health, education, infrastructure, and defence. The genesis of such schemes can be traced back to the post‑independence era when the first Five‑Year Plans introduced flagship programmes like the [[National Rural Employment Guarantee Act (NREGA)]] of 2005, later renamed <span style="color: var(--success);">[[Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS)]]</span>. The underlying principle was to provide <span style="color: var(--warning);">[[universal social security]]</span> through a demand‑driven, labour‑intensive model, which later became a template for subsequent schemes.</p>

  <p>Fundamentally, a <span style="color: var(--warning);">[[Government Scheme]]</span> is a time‑bound, budget‑allocated policy instrument that operationalises a specific <span style="color: var(--success);">[[objective]]</span> through defined <span style="color: var(--warning);">[[implementation mechanisms]]</span>. These mechanisms include a <span style="color: var(--success);">[[target beneficiary group]]</span>, a <span style="color: var(--warning);">[[financial outlay]]</span>, and a <span style="color: var(--success);">[[monitoring framework]]</span>. The scheme’s success hinges on the alignment of these three pillars; any deviation leads to leakage, duplication, or policy failure. For instance, the [[Pradhan Mantri Jan Dhan Yojana (PMJDY)]] of <span style="color: var(--warning);">2014</span> combined a clear target (financial inclusion of the unbanked), a robust budget (Rs 1.5 trillion), and a digitised monitoring dashboard, resulting in over 450 million accounts within two years.</p>

  <p>Each subsequent scheme builds on the lessons of its predecessor. The <span style="color: var(--success);">[[Pradhan Mantri Awas Yojana (PMAY)]]</span> (launched in <span style="color: var(--warning);">2015</span>) leveraged the financial inclusion platform of PMJDY to disburse subsidies directly to beneficiaries, thereby reducing corruption. Similarly, the <span style="color: var(--success);">[[Swachh Bharat Mission (SBM)]]</span> of <span style="color: var(--warning);">2014</span> integrated sanitation goals with health outcomes, using a <span style="color: var(--warning);">[[public‑private partnership (PPP)]]</span> model that had been piloted in the <span style="color: var(--success);">[[National Rural Health Mission (NRHM)]]</span>. The iterative nature of these schemes underscores a <span style="color: var(--warning);">[[policy learning cycle]]</span> that is essential for large‑scale governance.</p>

  <p>To illustrate the layered approach, consider the following worked example: <strong>Example 1 – Rural Electrification.</strong> The <span style="color: var(--success);">[[Deendayal Upadhyaya Gram Jyoti Yojana (DDUGJY)]]</span> targeted un‑electrified villages, allocating Rs 30 billion for feeder lines. The scheme’s design incorporated a <span style="color: var(--warning);">[[performance‑based grant]]</span> to state governments, which in turn used the <span style="color: var(--success);">[[Ujjwala Yojana]]</span> platform for last‑mile connectivity. The result was an <span style="color: var(--warning);">[[electrification rate]]</span> rise from 64 % in <span style="color: var(--warning);">2015</span> to 98 % in <span style="color: var(--warning);">2021</span>, showcasing how a cascade of schemes can produce synergistic outcomes.</p>

  <p>Another concrete illustration is the defence‑related <span style="color: var(--success);">[[Make in India Defence Programme]]</span>. Launched in <span style="color: var(--warning);">2015</span>, it set a target of <span style="color: var(--warning);">₹30,000 crore</span> in indigenisation by <span style="color: var(--warning);">2025</span>. The scheme’s architecture mirrors the <span style="color: var(--success);">[[Strategic Partnership Model]]</span> used in civilian manufacturing, with a focus on technology transfer, local R&D, and joint ventures. The success of this scheme is evident in the induction of the <span style="color: var(--success);">[[Arihant‑class submarines]]</span> and the domestic production of the <span style="color: var(--success);">[[LCA‑Tejas]]</span> fighter jet.</p>

  <p>Real‑world applications of these schemes extend beyond immediate outcomes. The <span style="color: var(--success);">[[Digital India]]</span> initiative, begun in <span style="color: var(--warning);">2015</span>, provided the backbone for the <span style="color: var(--success);">[[Aadhaar] ]</span> biometric identity system, which in turn streamlined subsidy delivery for schemes like PMJDY, PMAY, and the <span style="color: var(--success);">[[Pradhan Mantri Kisan Samman Nidhi (PMKSN)]]</span>. The inter‑linkage of these programmes illustrates a <span style="color: var(--warning);">[[systems‑thinking approach]]</span> that is now a hallmark of Indian policy‑making.</p>

  <p>Finally, the sustainability of major schemes rests on three <span style="color: var(--important);">important</span> pillars: fiscal prudence, robust governance, and citizen participation. The <span style="color: var(--success);">[[National Education Policy (NEP) 2020]]</span> emphasises a <span style="color: var(--warning);">[[decentralised implementation model]]</span> where state governments adapt central guidelines, mirroring the federal structure of defence procurement. By understanding the historical evolution, definitional axioms, and inter‑scheme synergies, aspirants can decode the underlying logic that drives Indian governance – a skill that proves decisive in the NDA, CDS, and AFCAT examinations.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Scheme</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Launch Year</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Core Objective</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Beneficiary</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Budget (₹ cr)</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Pradhan Mantri Jan Dhan Yojana]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2014</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Financial Inclusion</td>
      <td style="border:1px solid var(--border);padding:10px;">Unbanked households</td>
      <td style="border:1px solid var(--border);padding:10px;">1,500</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Pradhan Mantri Awas Yojana]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Housing for All</td>
      <td style="border:1px solid var(--border);padding:10px;">Urban & Rural Poor</td>
      <td style="border:1px solid var(--border);padding:10px;">2,000</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Swachh Bharat Mission]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2014</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Open Defecation Free (ODF)</td>
      <td style="border:1px solid var(--border);padding:10px;">All Rural Households</td>
      <td style="border:1px solid var(--border);padding:10px;">2,300</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Pradhan Mantri Ujjwala Yojana]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2016</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Clean Cooking Fuel</td>
      <td style="border:1px solid var(--border);padding:10px;">Women in BPL families</td>
      <td style="border:1px solid var(--border);padding:10px;">1,200</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Deendayal Upadhyaya Gram Jyoti Yojana]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Rural Electrification</td>
      <td style="border:1px solid var(--border);padding:10px;">Un-electrified Villages</td>
      <td style="border:1px solid var(--border);padding:10px;">30,000</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Make in India Defence Programme]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Indigenisation of Defence</td>
      <td style="border:1px solid var(--border);padding:10px;">Domestic Defence Industry</td>
      <td style="border:1px solid var(--border);padding:10px;">30,000</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Education Policy 2020]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2020</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Holistic Education Reform</td>
      <td style="border:1px solid var(--border);padding:10px;">All Students</td>
      <td style="border:1px solid var(--border);padding:10px;">2,500</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Pradhan Mantri Kisan Samman Nidhi]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2018</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Income Support to Small Farmers</td>
      <td style="border:1px solid var(--border);padding:10px;">Farmers with <span style="color:var(--warning);">≤2 ha</span> land</td>
      <td style="border:1px solid var(--border);padding:10px;">1,000</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>JADU</strong> – <span style="color:var(--success);">J</span>an Dhan, <span style="color:var(--success);">A</span>was, <span style="color:var(--success);">U</span>jjwala – remembers the trio launched in <span style="color:var(--warning);">2014‑2016</span>.</li>
    <li><strong>POWER‑S</strong> – <span style="color:var(--success);">P</span>MAY, <span style="color:var(--success);">O</span>ffice of <span style="color:var(--success);">W</span>ater, <span style="color:var(--success);">E</span>ducation (NEP), <span style="color:var(--success);">R</span>ural Electrification (DDUGJY), <span style="color:var(--success);">S</span>wachh Bharat – a quick way to recall the five flagship schemes.</li>
    <li><strong>DEFENCE‑M</strong> – <span style="color:var(--success);">D</span>eendayal Upadhyaya, <span style="color:var(--success);">E</span>ducation (NEP), <span style="color:var(--success);">F</span>inancial Inclusion (PMJDY), <span style="color:var(--success);">N</span>ational Rural Employment (NREGA), <span style="color:var(--success);">C</span>lean Cooking (Ujjwala), <span style="color:var(--success);">E</span>nergy (DDUGJY), <span style="color:var(--success);">M</span>ake‑in‑India – helps link defence‑related schemes with civilian counterparts.</li>
    <li><strong>GAP‑K</strong> – <span style="color:var(--success);">G</span>rassroots (NREGA), <span style="color:var(--success);">A</span>griculture (PMKSN), <span style="color:var(--success);">P</span>overty Alleviation (PMAY) – useful for remembering welfare‑focused schemes.</li>
    <li><strong>DIgital‑A</strong> – <span style="color:var(--success);">D</span>igital India, <span style="color:var(--success);">I</span>nfrastructure (PMAY), <span style="color:var(--success);">g</span>overnance (Aadhaar) – a concise cue for the digital backbone of schemes.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">2014</span> – Launch of <span style="color:var(--success);">[[Swachh Bharat Mission]]</span>; target of <span style="color:var(--warning);">100 million</span> toilets built in 5 years.</li>
    <li><span style="color:var(--warning);">2015</span> – <span style="color:var(--success);">[[Pradhan Mantri Awas Yojana]]</span> aims for <span style="color:var(--warning);">20 million</span> houses by <span style="color:var(--warning);">2022</span>.</li>
    <li><span style="color:var(--warning);">2016</span> – <span style="color:var(--success);">[[Pradhan Mantri Ujjwala Yojana]]</span> provides <span style="color:var(--warning);">5 crore</span> LPG connections to BPL families.</li>
    <li><span style="color:var(--warning);">2020</span> – <span style="color:var(--success);">[[National Education Policy]]</span> replaces 10+2 system with 5+3+3+4 structure.</li>
    <li><span style="color:var(--warning);">2021</span> – <span style="color:var(--success);">[[PMJDY]]</span> crossed <span style="color:var(--warning);">450 million</span> accounts, achieving <span style="color:var(--warning);">99 %</span> financial inclusion.</li>
    <li><span style="color:var(--warning);">2022</span> – <span style="color:var(--success);">[[Make in India Defence Programme]]</span> set a target of <span style="color:var(--warning);">₹30,000 crore</span> indigenisation.</li>
    <li><span style="color:var(--warning);">2015</span> – <span style="color:var(--success);">[[Deendayal Upadhyaya Gram Jyoti Yojana]]</span> achieved <span style="color:var(--warning);">98 %</span> village electrification by <span style="color:var(--warning);">2021</span>.</li>
    <li><span style="color:var(--warning);">2018</span> – <span style="color:var(--success);">[[Pradhan Mantri Kisan Samman Nidhi]]</span> provides <span style="color:var(--warning);">₹6,000</span> per annum to eligible farmers.</li>
    <li><span style="color:var(--warning);">2005</span> – <span style="color:var(--success);">[[NREGA/MGNREGS]]</span> guarantees <span style="color:var(--warning);">100 days</span> of wage employment per household per year.</li>
    <li><span style="color:var(--warning);">2014</span> – <span style="color:var(--success);">[[PMJDY]]</span> introduced zero‑balance accounts with free debit cards.</li>
    <li><span style="color:var(--warning);">2015</span> – <span style="color:var(--success);">[[Digital India]]</span> aimed for <span style="color:var(--warning);">1 billion</span> internet users by <span style="color:var(--warning);">2020</span>.</li>
    <li><span style="color:var(--warning);">2023</span> – <span style="color:var(--success);">[[PMAY (Urban))]]</span> achieved <span style="color:var(--warning);">60 %</span> of its urban housing target.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Since the inception of the NDA exam in <span style="color:var(--warning);">2006</span>, <span style="color:var(--success);">[[Government Schemes]]</span> have featured in every General Knowledge paper, averaging <span style="color:var(--warning);">2‑3</span> questions per year. The most recurrent sub‑topic is the fiscal year‑wise launch date of flagship schemes – a pattern evident in the <span style="color:var(--warning);">2019</span> NDA paper (Q‑45 on PMJDY) and the <span style="color:var(--warning);">2021</span> CDS exam (Q‑12 on Swachh Bharat). </p>
  <p>Examiners favour <span style="color:var(--success);">comparative analysis</span> questions, such as “Which scheme was launched earlier, PMAY or PMU‑GJY?” or “Identify the scheme that targets women specifically.” These require candidates to
`;

window.EXPANDED_NOTES_DATA["ca-relations"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    India's International Relations & Forums
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
  <p>
    The tapestry of [[India]]'s international relations is woven from the twin threads of historical legacy and contemporary strategic necessity. From the era of the [[British Raj]] to the post‑independence period, the sub‑continent transitioned from a colonised entity to a sovereign actor seeking a place in the global order. This shift gave birth to foundational doctrines such as the [[Non‑Alignment Movement (NAM)]] in 1961, which articulated an <span style="color: var(--warning);">important</span> principle: the right of a newly independent nation to chart its own foreign policy without being tethered to either superpower bloc during the Cold War.
  </p>
  <p>
    Core definitions that underpin modern Indian diplomacy include <span style="color: var(--success);">key facts</span> such as “strategic partnership”, “multilateralism”, and “regional connectivity”. A <strong>strategic partnership</strong> is a bilateral framework that goes beyond conventional trade agreements, embedding defence cooperation, technology transfer, and joint research. In contrast, <strong>multilateralism</strong> refers to engagement through platforms like the [[United Nations]], [[BRICS]], [[G20]], and the [[South Asian Association for Regional Cooperation (SAARC)]] where collective decision‑making is paramount. These concepts build sequentially: a nation first secures bilateral ties, then leverages them within multilateral fora to amplify its voice.
  </p>
  <p>
    To illustrate the evolution, consider three worked examples. (1) The [[Indo‑US 2+2 Dialogue]] – initiated in 2018 – exemplifies a strategic partnership where defence chiefs and foreign ministers meet simultaneously, creating a <span style="color: var(--warning);">key fact</span> that defence dialogue is no longer an after‑thought but a core diplomatic pillar. (2) The formation of the [[International Solar Alliance (ISA)]] in 2015 showcases multilateralism: India rallied 121 countries around a common renewable‑energy agenda, turning a bilateral vision into a global movement. (3) The [[India‑Japan Strategic Partnership]] (1998) evolved from a simple trade tie to a comprehensive security cooperation, culminating in joint maritime patrols in the <span style="color: var(--success);">Indo‑Pacific</span> region.
  </p>
  <p>
    Real‑world applications of these diplomatic frameworks are evident in defence procurement, scientific collaboration, and economic integration. For instance, the [[Defense Production]] policy of 2020 leverages strategic partnerships to indigenise weapon systems, pulling in technology from partners like France (via the Dassault Rafale deal) and Russia (via the S-400 missile contract). In science, the [[India‑EU Strategic Partnership]] on research and innovation facilitates joint projects in space technology, leading to shared satellite launch services. Economically, the [[Regional Comprehensive Economic Partnership (RCEP)]] negotiations underscore India’s balancing act between protecting domestic agriculture and engaging with the broader <span style="color: var(--warning);">important</span> supply‑chain of the Asia‑Pacific.
  </p>
  <p>
    The policy architecture also rests on legal instruments such as the [[Foreign Exchange Management Act (FEMA)]], the [[International Arbitration Act]], and the [[UN Convention on the Law of the Sea (UNCLOS)]]. These statutes provide the <span style="color: var(--success);">key facts</span> needed for India to negotiate maritime boundaries, resolve investment disputes, and manage cross‑border capital flows. Understanding how each legal tool interacts with diplomatic initiatives is crucial; for example, the [[Indo‑Pacific Ocean]] strategy relies heavily on UNCLOS provisions to assert freedom of navigation.
  </p>
  <p>
    Over the last two decades, a pattern emerges: India first identifies a strategic need (e.g., securing energy routes), then crafts a bilateral pact (e.g., the [[India‑UAE Energy Partnership]]), and finally institutionalises it within a multilateral forum (e.g., the [[Gulf Cooperation Council (GCC)]] meeting). This sequential logic is the backbone of Indian foreign policy, and mastering it enables aspirants to predict future moves – such as the likely expansion of the [[India‑Africa Forum Summit]] into a full‑fledged trade and defence platform.
  </p>
  <p>
    In summary, the study of India’s schemes, policies, and summits demands a layered approach: start with historical origins, define core diplomatic terminology, trace logical progression through examples, and anchor the discussion in concrete applications. By internalising these <span style="color: var(--warning);">important</span> building blocks, candidates can confidently navigate any question on this topic, be it a factual recall of the [[Brahmaputra Water Dispute]] or an analytical query on the impact of the [[Quad]] on regional security.
  </p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Summit / Forum</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year Initiated / Revamped</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Core Objective</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Member Countries / Partners</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[BRICS]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2009</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Economic cooperation & reform of global financial architecture</td>
      <td style="border:1px solid var(--border);padding:10px;">[[Brazil]], [[Russia]], [[India]], [[China]], [[South Africa]]</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Quad]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2007 (revived 2017)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Maritime security & Indo‑Pacific stability</td>
      <td style="border:1px solid var(--border);padding:10px;">[[United States]], [[Japan]], [[Australia]], [[India]]</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[International Solar Alliance]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Promotion of solar energy in sunny countries</td>
      <td style="border:1px solid var(--border);padding:10px;">121 member nations (mostly tropical)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Indo‑US 2+2 Dialogue]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2018</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Strategic, defence & security coordination</td>
      <td style="border:1px solid var(--border);padding:10px;">[[India]], [[United States]]</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[India‑EU Strategic Partnership]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2005 (updated 2021)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Research, climate, trade, and digital cooperation</td>
      <td style="border:1px solid var(--border);padding:10px;">[[European Union]] (27 members)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[SAARC]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1985</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Regional integration of South Asia</td>
      <td style="border:1px solid var(--border);padding:10px;">[[Afghanistan]], [[Bangladesh]], [[Bhutan]], [[India]], [[Maldives]], [[Nepal]], [[Pakistan]], [[Sri Lanka]]</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[India‑Japan Strategic Partnership]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1998</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Maritime security & economic collaboration</td>
      <td style="border:1px solid var(--border);padding:10px;">[[India]], [[Japan]]</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[India‑Africa Forum Summit]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2011 (bi‑annual)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Trade, investment & capacity building</td>
      <td style="border:1px solid var(--border);padding:10px;">All African Union members + India</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>BRICS</strong> – <em>“Bigger Rich India Can Shine”</em> helps recall the member order (Brazil, Russia, India, China, South Africa).</li>
    <li><strong>QUAD</strong> – <em>“Quick United Allies Defend”</em> reminds that the four nations (US, Japan, Australia, India) focus on rapid maritime security.</li>
    <li><strong>ISA</strong> – <em>“India Sun Always”</em> signals that the International Solar Alliance was an Indian‑driven solar initiative.</li>
    <li><strong>2+2 Dialogue</strong> – <em>“Two Heads, Two Hands”</em> denotes the meeting of foreign ministers (heads) and defence chiefs (hands).</li>
    <li><strong>SAARC</strong> – <em>“South Asian Allies Really Connect”</em> for quick recall of the regional grouping.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">2009</span> – Formation of <span style="color:var(--success);">[[BRICS]]</span> as a counter‑balance to G7 dominance.</li>
    <li><span style="color:var(--warning);">1998</span> – Launch of the <span style="color:var(--success);">[[India‑Japan Strategic Partnership]]</span> focusing on maritime security.</li>
    <li><span style="color:var(--warning);">2015</span> – Inception of the <span style="color:var(--success);">[[International Solar Alliance]]</span> at the UN Climate Change Conference (COP21).</li>
    <li><span style="color:var(--warning);">2018</span> – First <span style="color:var(--success);">[[Indo‑US 2+2 Dialogue]]</span> held in Washington.</li>
    <li><span style="color:var(--warning);">2020</span> – Introduction of the <span style="color:var(--success);">[[Defense Production Policy]]</span> to boost indigenous defence manufacturing.</li>
    <li><span style="color:var(--warning);">2021</span> – Updated <span style="color:var(--success);">[[India‑EU Strategic Partnership]]</span> covering digital and climate cooperation.</li>
    <li><span style="color:var(--warning);">2022</span> – India’s first participation in the <span style="color:var(--success);">[[Quad]]</span> maritime exercises (Exercise Malabar).</li>
    <li><span style="color:var(--warning);">1985</span> – Establishment of <span style="color:var(--success);">[[SAARC]]</span> with eight South Asian nations.</li>
    <li><span style="color:var(--warning);">2005</span> – Signing of the <span style="color:var(--success);">[[India‑EU Strategic Partnership]]</span> framework.</li>
    <li><span style="color:var(--warning);">2023</span> – Launch of the <span style="color:var(--success);">[[India‑Africa Forum Summit]]</span> 4th edition focusing on renewable energy.</li>
    <li><span style="color:var(--warning);">2017</span> – Re‑activation of the <span style="color:var(--success);">[[Quad]]</span> after a decade of dormancy.</li>
    <li><span style="color:var(--warning);">2024</span> – India’s proposal for a new <span style="color:var(--success);">[[Indo‑Pacific Ocean]]</span> security architecture at the G20.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>
    Across the last ten NDA papers (2014‑2024), questions on India’s international forums have appeared in <span style="color: var(--warning);">approximately 12%</span> of the General Knowledge section, with a noticeable surge after 2018. The most recurrent sub‑topic is the [[BRICS]] summit, especially the rotating chair‑manship and its impact on Indian trade. CDS papers, on the other hand, focus more on defence‑oriented platforms such as the <span style="color: var(--success);">[[Indo‑US 2+2 Dialogue]]</span> and the Quad, testing candidates on strategic implications rather than mere dates.
  </p>
  <p>
    Examiners favour conceptual linkage questions: for example, “How does the International Solar Alliance complement India’s energy security strategy?” – a typical <span style="color: var(--warning);">application‑based</span> query that demands synthesis of policy and geopolitics. Direct factual recall (e.g., “Year of SAARC’s first summit”) still accounts for <span style="color: var(--warning);">30%</span> of the items, but the trend is moving towards scenario‑based MCQs that assess analytical ability.
  </p>
  <p>
    In the past five years, a clear shift is observable: the emphasis has moved from static memorisation of summit dates to dynamic understanding of <span style="color: var(--success);">strategic partnerships</span> and their defence ramifications. This aligns with India’s growing role in the Indo‑Pacific and the increasing weightage given to security‑focused questions in AFCAT as well. Aspirants should therefore prioritize the “why” behind each forum, not just the “when”.
  </p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing the member list of [[BRICS]] with that of the [[G20]] – students often merge the two because both are major economies. Remember: BRICS has exactly five members; G20 has twenty‑four.</li>
    <li>Mixing up the year of the first [[Quad]] meeting (2007) with its revival (2017). The revival is the exam‑relevant milestone.</li>
    <li>Assuming the [[International Solar Alliance]] is a UN body. It is a coalition of sunny countries, not a UN subsidiary, leading to wrong answer choices.</li>
    <li>Over‑looking the legal basis of the [[Indo‑Pacific Ocean]] strategy, i.e., reliance on UNCLOS. Many candidates cite only geopolitical rhetoric.</li>
    <li>Neglecting the dual nature of the <span style="color: var(--success);">[[Indo‑US 2+2 Dialogue]]</span> – it is both a diplomatic and defence mechanism. Answer keys often penalise partial knowledge.</li>
    <li>Recollecting the wrong chair‑manship year for SAARC (the first summit was in <span style="color: var(--warning);">1985</span>, not 1995). This error appears in time‑bound questions.</li>
    <li>Treating the [[India‑Africa Forum Summit]] as a trade‑only event, ignoring its security collaborations on maritime piracy.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol>
    <li>
      <p><strong>Question:</strong> Which year did India host the first summit of the International Solar Alliance?</p>
      <p>A) 2014&nbsp;&nbsp; B) 2015&nbsp;&nbsp; C) 2016&nbsp;&nbsp; D) 2017</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> The ISA was launched at the UN Climate Change Conference (COP21) in Paris in 2015, with India as the founding chair. Options A, C, D are off by a year.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The rotating chair‑manship of [[BRICS]] in 2023 was held by which country?</p>
      <p>A) Brazil&nbsp;&nbsp; B) Russia&nbsp;&nbsp; C) India&nbsp;&nbsp; D) South Africa</p>
      <p><strong>Answer:</strong> C</p>
      <p><strong>Explanation:</strong> BRICS follows a yearly rotation. After South Africa (2022), India took over in 2023. The other options correspond to different years.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The primary objective of the [[Indo‑US 2+2 Dialogue]] is to:</p>
      <p>A) Promote cultural exchange&nbsp;&nbsp; B) Coordinate defence and foreign policy&nbsp;&nbsp; C) Negotiate trade tariffs&nbsp;&nbsp; D) Resolve visa issues</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> The 2+2 format brings together defence chiefs and foreign ministers, focusing on strategic coordination, not cultural or trade matters.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which of the following is NOT a member of [[SAARC]]?</p>
      <p>A) Nepal&nbsp;&nbsp; B) Maldives&nbsp;&nbsp; C) Bhutan&nbsp;&nbsp; D) Sri Lanka&nbsp;&nbsp; E) Oman</p>
      <p><strong>Answer:</strong> E</p>
      <p><strong>Explanation:</strong> Oman is a Gulf Cooperation Council (GCC) member, not part of South Asian regional grouping SAARC.</p>
    </li>
    <li>
      <p><strong>
`;

window.EXPANDED_NOTES_DATA["ca-policies"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    National Policies & Missions
  </h3>

  <p>India’s contemporary policy architecture began to crystallise after independence, when the newly sovereign state sought to translate its constitutional vision into actionable programmes. The first systematic attempt was the [[Five-Year Plans]] (1951‑2017) which introduced a planning paradigm based on the [[Command Economy]] model. Over the decades, the shift from industrial‑centric plans to people‑centric missions gave rise to distinct [[National Policies]] such as the [[National Rural Employment Guarantee Act (NREGA)]] of 2005, the [[National Health Policy (NHP) 2017]], and the more recent [[National Education Policy (NEP) 2020]]. Each policy is anchored in a set of <span style="color: var(--warning);">principles</span> that define its scope, funding mechanism, and implementation hierarchy.</p>

  <p>The term <span style="color: var(--success);">“Mission”</span> in the Indian context denotes a time‑bound, outcome‑oriented programme that is coordinated across ministries, states, and sometimes, the armed forces. The flagship example is the [[Swachh Bharat Mission (SBM)]] launched in 2014, which combined civil‑society mobilisation with the logistical expertise of the [[Indian Army]]. The mission’s success metric—<span style="color: var(--warning);">100 % rural sanitation coverage</span>—was achieved through a blend of financial incentives, behavioural nudges, and rigorous monitoring, illustrating how policy design can leverage defence‑grade execution.</p>

  <p>From a theoretical standpoint, every national policy rests on three axioms: (i) <span style="color: var(--success);">Strategic Intent</span>—the macro‑goal articulated by the Union Cabinet; (ii) <span style="color: var(--success);">Resource Allocation</span>—budgetary outlays approved by Parliament; and (iii) <span style="color: var(--success);">Implementation Framework</span>—the institutional machinery that translates intent into action. The [[Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)]] exemplifies this triad: strategic intent to provide 100 days of wage employment, a dedicated fund of ₹1.5 lakh crore, and a decentralized implementation model via Panchayati Raj Institutions.</p>

  <p>Worked Example 1: The [[Digital India Initiative]] (2015) aimed to bridge the digital divide. Its core components—<span style="color: var(--success);">Broadband Highways</span>, <span style="color: var(--success);">Universal Access to Mobile Connectivity</span>, and <span style="color: var(--success);">Public Internet Access Programme</span>—were each assigned a specific financial envelope and a timeline of five years. By the end of 2020, <span style="color: var(--warning);">700 million</span> citizens had gained internet access, a figure used in NDA 2022 paper (Q‑13).</p>

  <p>Worked Example 2: The [[Pradhan Mantri Jan Dhan Yojana (PMJDY)]] (2014) showcases how a financial inclusion mission can be synchronized with defence logistics. The mission leveraged the Indian Post Office’s network—originally a legacy of the British‑Indian Army’s communication system—to open <span style="color: var(--warning);">150 million</span> bank accounts, thereby providing a secure channel for Direct Benefit Transfer (DBT) to soldiers’ families.</p>

  <p>Real‑world application in defence emerges prominently in the [[Make in India]] programme (2014). While primarily an industrial policy, it incorporates a defence‑specific sub‑mission—[[Indigenisation of Defence Production]]—that mandates a minimum of 30 % indigenous content in all defence procurements by 2025. This policy leverages the <span style="color: var(--success);">Defense Production Policy (DPP)</span> and aligns with the broader strategic objective of reducing import dependency, a topic repeatedly asked in CDS 2021 (Q‑7).</p>

  <p>The evolution of national missions also reflects India’s response to global challenges. The [[National Action Plan on Climate Change (NAPCC)]] (2008) introduced eight <span style="color: var(--success);">National Missions</span> ranging from <span style="color: var(--success);">National Solar Mission</span> to <span style="color: var(--success);">National Mission for Sustainable Agriculture</span>. Each mission is quantified with <span style="color: var(--warning);">specific targets</span> (e.g., 20 GW solar capacity by 2022) and monitored through a <span style="color: var(--success);">Mission Management Division</span> that reports to the Prime Minister’s Office, mirroring the command‑control structure of the armed forces.</p>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Policy / Mission</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Launch Year</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Objective</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Primary Agency</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Swachh Bharat Mission]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2014</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Open‑defecation free India</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Housing & Urban Affairs</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Digital India]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Universal digital access</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Electronics & IT</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Pradhan Mantri Jan Dhan Yojana]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2014</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Financial inclusion</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Finance</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Make in India]] – Defence</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2014</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Indigenous defence production</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Defence</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Education Policy]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2020</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Holistic education reform</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Education</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Action Plan on Climate Change]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2008</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Eight climate missions</td>
      <td style="border:1px solid var(--border);padding:10px;">Prime Minister’s Office</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Mahatma Gandhi National Rural Employment Guarantee Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2005</span></td>
      <td style="border:1px solid var(--border);padding:10px;">100 days wage employment</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Rural Development</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Health Policy]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2017</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Universal health coverage</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Health & Family Welfare</td>
    </tr>
  </table>

  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>SBM‑4‑U</strong> – <em>Swachh Bharat Mission = 4 U’s</em>: <span style="color:var(--success);">U</span>rban, <span style="color:var(--success);">U</span>rban‑Rural, <span style="color:var(--success);">U</span>tilities, <span style="color:var(--success);">U</span>niversal coverage. Helps recall the four pillars of SBM.</li>
    <li><strong>DIGI‑3‑C</strong> – <em>Digital India</em>: <span style="color:var(--success);">3 C</span> – <span style="color:var(--success);">C</span>onnectivity, <span style="color:var(--success);">C</span>ompute, <span style="color:var(--success);">C</span>ontent. Quick trigger for the three major thrusts.</li>
    <li><strong>MAKE‑30</strong> – <em>Make in India – Defence</em>: Remember the target <span style="color:var(--warning);">30 %</span> indigenous content by <span style="color:var(--warning);">2025</span>. The phrase “MAKE‑30” locks both the policy name and the numeric goal.</li>
    <li><strong>NAP‑8‑S</strong> – <em>National Action Plan on Climate Change</em>: <span style="color:var(--success);">8</span> missions, each ending with “<span style="color:var(--success);">S</span>” (Solar, Water‑Saving, etc.). Visualise an “8‑shaped” wheel with eight spokes.</li>
    <li><strong>JAD‑150</strong> – <em>Jan Dhan Yojana</em>: <span style="color:var(--warning);">150 million</span> accounts as the milestone. The acronym “JAD” sounds like “joyed”, reminding you of the massive inclusion.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">2014</span> – Launch of <span style="color:var(--success);">Swachh Bharat Mission</span>; target <span style="color:var(--warning);">100 % rural sanitation</span>.</li>
    <li><span style="color:var(--warning);">2015</span> – Inception of <span style="color:var(--success);">Digital India</span> with three flagship programs.</li>
    <li><span style="color:var(--warning);">2005</span> – Enactment of <span style="color:var(--success);">MGNREGA</span> guaranteeing <span style="color:var(--warning);">100 days</span> of wage employment.</li>
    <li><span style="color:var(--warning);">2020</span> – Release of <span style="color:var(--success);">National Education Policy</span> emphasizing multidisciplinary learning.</li>
    <li><span style="color:var(--warning);">2014</span> – <span style="color:var(--success);">PM Jan Dhan Yojana</span> crossed <span style="color:var(--warning);">150 million</span> accounts in five years.</li>
    <li><span style="color:var(--warning);">2022</span> – <span style="color:var(--success);">Make in India – Defence</span> set <span style="color:var(--warning);">30 %</span> indigenisation target for 2025.</li>
    <li><span style="color:var(--warning);">2008</span> – <span style="color:var(--success);">NAPCC</span> introduced eight climate missions.</li>
    <li><span style="color:var(--warning);">2017</span> – <span style="color:var(--success);">National Health Policy</span> aimed for <span style="color:var(--warning);">2 % GDP</span> health spending.</li>
    <li><span style="color:var(--warning);">2016</span> – <span style="color:var(--success);">Skill India</span> launched to train <span style="color:var(--warning);">400 million</span> youth by 2022.</li>
    <li><span style="color:var(--warning);">2019</span> – <span style="color:var(--success);">Pradhan Mantri Kisan Samman Nidhi</span> provides <span style="color:var(--warning);">₹6 000</span> per farmer annually.</li>
    <li><span style="color:var(--warning);">2021</span> – <span style="color:var(--success);">Atmanirbhar Bharat</span> initiative pledged <span style="color:var(--warning);">₹20 lakh crore</span> in fiscal stimulus.</li>
    <li><span style="color:var(--warning);">2023</span> – <span style="color:var(--success);">National Cyber Security Policy</span> updated to address emerging threats.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Across the last ten NDA and CDS examinations, questions on national policies and missions have appeared in <span style="color:var(--warning);">≈ 30 %</span> of the General Knowledge papers. The most frequent citations are the <span style="color:var(--success);">Swachh Bharat Mission</span> (NDA 2019, 2022), <span style="color:var(--success);">Digital India</span> (CDS 2020), and the <span style="color:var(--success);">National Education Policy 2020</span> (AFCAT 2021). Exam setters favour these because they are recent, quantifiable, and have clear numerical targets that can be asked in a straightforward format.</p>
  <p>Sub‑topics that attract the highest marks are: (i) the exact launch year and flagship components of a mission; (ii) the budgetary allocation or target figures (e.g., <span style="color:var(--warning);">₹1.5 lakh crore</span> for MGNREGA); and (iii) the inter‑ministerial coordination mechanism, often tested through scenario‑based questions. For instance, a 2020 CDS paper asked candidates to match the mission with its lead ministry, a classic “link‑the‑column” format.</p>
  <p>Difficulty level has gradually risen. Early papers (pre‑2015) presented factual recall, but recent years (2021‑2024) feature application‑oriented items: a question might present a hypothetical state‑level sanitation shortfall and ask which central mission would fund the remedial action, testing both knowledge and reasoning. Moreover, the rise of “policy‑impact” questions—linking a mission to defence procurement or to a specific Indian Army operation—reflects the integrated nature of modern exam patterns.</p>

  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing launch years: Students often swap <span style="color:var(--warning);">2014</span> (SBM) with <span style="color:var(--warning);">2015</span> (Digital India). Remember the mnemonic “SBM‑4‑U” which embeds the year.</li>
    <li>Mixing up target figures: MGNREGA’s <span style="color:var(--warning);">100 days</span> is sometimes mistaken for the <span style="color:var(--warning);">100 %</span> sanitation goal of SBM. Distinguish by linking the term “employment” vs “sanitation”.</li>
    <li>Attributing the wrong ministry: The <span style="color:var(--success);">National Health Policy</span> is frequently assigned to the Ministry of Finance instead of Health. Associate each mission with its “lead” keyword (e.g., Health → Health Ministry).</li>
    <li>Over‑reliance on outdated data: Many still quote the <span style="color:var(--warning);">₹1 lakh crore</span> budget for Digital India, ignoring the revised figure of <span style="color:var(--warning);">₹1.5 lakh crore</span> in 2022. Update from the latest Economic Survey.</li>
    <li>Ignoring mission timelines: The <span style="color:var(--success);">Make in India – Defence</span> target of <span style="color:var(--warning);">2025</span> is often omitted, leading to incomplete answers. Always note the “by‑year” clause.</li>
    <li>Misreading acronyms: “PMJDY” is sometimes expanded as “Prime Minister Justice Development Yojana”. Reinforce the correct expansion—<span style="color:var(--success);">Jan Dhan Yojana</span>—by visualising the banking context.</li>
    <li>Neglecting cross‑sector linkages: Questions that ask how a civilian mission supports defence (e.g., SBM’s role in army cantonment sanitation) are missed if the student does not think beyond isolated policies. Practice integrated scenarios.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol style="margin-left:20px;">
    <li>
      <p><strong>Question:</strong> Which mission was launched in <span style="color:var(--warning);">2014</span> with the specific aim of achieving <span style="color:var(--warning);">100 % rural sanitation coverage</span> by <span style="color:var(--warning);">2019</span>?</p>
      <p>A) Digital India&nbsp;&nbsp; B) Swachh Bharat Mission&nbsp;&nbsp; C) Skill India&nbsp;&nbsp; D) Atmanirbhar Bharat</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> SBM was launched in 2014 with the sanitation target; Digital India focuses on connectivity, Skill India on vocational training, and Atmanirbhar Bharat is an economic stimulus.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The <span style="color:var(--success);">Make in India – Defence</span> mission aims for what percentage of indigenous content in defence procurement by <span style="color:var(--warning);">2025</span>?</p>
      <p>A) 20 %&nbsp
`;

window.EXPANDED_NOTES_DATA["ca-summits"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Major International Summits
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>International summits are the highest‑level gatherings where heads of state, ministers, and senior diplomats converge to deliberate on <span style="color: var(--warning);">important</span> global issues. The concept traces back to the [[Congress of Vienna]] (1814‑15), where the great powers redrew the European map after the Napoleonic wars. That early model of collective decision‑making laid the groundwork for modern multilateral forums such as the [[United Nations]] and the [[League of Nations]], establishing a template: a periodic congregation, a predefined agenda, and the expectation of binding or non‑binding outcomes.</p>

  <p>The core definition of a summit can be broken into three axioms: (i) <span style="color: var(--success);">high‑level participation</span> (heads of state or equivalent), (ii) a <span style="color: var(--warning);">specific thematic focus</span> (security, trade, climate, etc.), and (iii) a formal declaration or communiqué that guides subsequent policy. These axioms build sequentially: without senior participation, the political weight diminishes; without a focused theme, the deliberations become diffuse; without a communiqué, the summit’s impact is merely symbolic. This logical hierarchy explains why some meetings, despite star‑studded attendance, are labelled “talk‑shops” when they lack a concrete outcome.</p>

  <p>To illustrate the logical flow, consider the [[G20]] summit. First, the <span style="color: var(--success);">membership</span> (19 major economies + EU) guarantees senior representation. Second, the agenda rotates annually, often highlighting “global financial stability”, “energy transition”, or “digitalization”. Third, the final communiqué sets targets, such as the “<span style="color: var(--warning);">2 °C</span> climate goal” or “inclusive growth”. A worked example: In the 2023 [[G20]] Bali summit, the host Indonesia steered the agenda toward “energy security”. The final declaration pledged a <span style="color: var(--warning);">30 %</span> renewable share by 2030, a figure that later appeared in India’s national energy policy.</p>

  <p>Another classic case is the [[BRICS]] summit. Originating in 2009 as a dialogue among emerging economies, the first formal summit in 2011 in [[Sanya]] formalised the “<span style="color: var(--success);">New Development Bank</span>” (NDB). The logical progression was: (a) shared concern over the dominance of Western financial institutions, (b) consensus on creating an alternative development finance mechanism, (c) signing of the NDB charter. A practical defence‑related outcome was the 2022 [[BRICS]] summit in [[Ulaanbaatar]], where member nations agreed to a joint cybersecurity framework, later influencing India’s own cyber‑policy drafts.</p>

  <p>In the Indian context, the [[SAARC]] summit serves as a regional platform for South Asian cooperation. Since its inception in 1985, the summit’s agenda has oscillated between trade liberalisation, counter‑terrorism, and climate resilience. A concrete example: the 2019 [[SAARC]] summit in [[Maldives]] led to the “<span style="color: var(--warning);">South Asian Maritime Security Initiative</span>”, prompting India to deploy additional coast‑guard assets in the Indian Ocean Region (IOR). This demonstrates how a summit’s communiqué can directly translate into operational deployments, a critical point for NDA and CDS aspirants.</p>

  <p>Summits also act as diplomatic theatres for bilateral engagements. The [[Bilateral Summit]] between India and the United States at the [[White House]] in 2021, though not a multilateral gathering, leveraged the larger [[G20]] framework to secure a “<span style="color: var(--success);">Defence Technology and Innovation Agreement</span>”. This agreement accelerated joint projects like the BrahMos‑Navy missile upgrades, illustrating how summit‑level pledges cascade into specific defence procurement pathways.</p>

  <p>Finally, the rise of thematic summits—[[COP]] (Conference of Parties) for climate, [[UNSC]] for security, [[ASEAN]] for regional integration—shows the adaptability of the summit model. Each of these platforms follows the same logical architecture: senior participation, focused agenda, and binding or aspirational outcomes. For NDA, CDS, and AFCAT candidates, recognising the pattern helps in quick identification of the summit’s purpose, its likely outcomes, and the strategic relevance to India’s defence and foreign policy.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Summit</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year (Host)</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Main Agenda</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">India’s Role</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Outcome</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[G20]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2023 (Bali)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Energy Security & Climate</td>
      <td style="border:1px solid var(--border);padding:10px;">Chairmanship, pushed for renewable target</td>
      <td style="border:1px solid var(--border);padding:10px;">30% renewable share by 2030</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[BRICS]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2022 (Ulaanbaatar)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Cybersecurity Cooperation</td>
      <td style="border:1px solid var(--border);padding:10px;">Co‑signed cyber‑framework</td>
      <td style="border:1px solid var(--border);padding:10px;">Joint cyber‑exercise roadmap</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[SAARC]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2019 (Maldives)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Maritime Security</td>
      <td style="border:1px solid var(--border);padding:10px;">Proposed Indian Ocean patrols</td>
      <td style="border:1px solid var(--border);padding:10px;">South Asian Maritime Security Initiative</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[ASEAN]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2021 (Bangkok)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Economic Integration</td>
      <td style="border:1px solid var(--border);padding:10px;">Negotiated FTA with India</td>
      <td style="border:1px solid var(--border);padding:10px;">Agreement on services trade</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[UNSC]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2022 (New York)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Global Security & Counter‑terrorism</td>
      <td style="border:1px solid var(--border);padding:10px;">Vetoed resolution on Kashmir</td>
      <td style="border:1px solid var(--border);padding:10px;">Maintained status‑quo on disputed territories</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[COP26]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2021 (Glasgow)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Climate Action</td>
      <td style="border:1px solid var(--border);padding:10px;">Committed to net‑zero by 2070</td>
      <td style="border:1px solid var(--border);padding:10px;">India’s enhanced NDC</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[World Trade Organization]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2023 (Abu Dhabi)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Trade Liberalisation</td>
      <td style="border:1px solid var(--border);padding:10px;">Negotiated tariff cuts on ICT</td>
      <td style="border:1px solid var(--border);padding:10px;">Reduced average tariff to 3.5%</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Commonwealth of Nations]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2022 (London)</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Youth & Education</td>
      <td style="border:1px solid var(--border);padding:10px;">Launched India‑Commonwealth scholarship</td>
      <td style="border:1px solid var(--border);padding:10px;">10,000 scholarships annually</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>G20 = “G‑Energy‑20”</strong> – Remember that the G20’s flagship agenda since 2015 has been <span style="color:var(--warning);">Energy</span> (renewables) plus the traditional “20 major economies”.</li>
    <li><strong>BRICS = “Bank‑Rich‑India‑China‑South‑Korea”</strong> – The first four letters hint at the <span style="color:var(--success);">New Development Bank</span> (NDB) which has members India, China, Russia, South Africa, and Brazil.</li>
    <li><strong>SAARC = “South Asian Regional Cooperation”</strong> – The mnemonic itself reinforces the geographic focus, helping you recall that maritime security was a 2019 highlight.</li>
    <li><strong>COP = “Climate‑On‑Point”</strong> – Each COP number (e.g., COP26) aligns with the year of the summit, aiding quick recall of the 2021 Glasgow meeting.</li>
    <li><strong>UNSC = “United Nations Security Council – 5‑Permanent‑Vetoes”</strong> – The “5” reminds candidates of the five permanent members, crucial for remembering India’s non‑permanent seat dynamics.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">2008</span> – The first formal [[G20]] summit was held in [[Washington D.C.]] establishing a new platform for global economic governance.</li>
    <li>The <span style="color:var(--success);">New Development Bank</span> was inaugurated at the inaugural [[BRICS]] summit in [[Sanya]] in <span style="color:var(--warning);">2015</span>.</li>
    <li>[[UNSC]] permanent members each hold a <span style="color:var(--warning);">veto</span> power; India has never been a permanent member but secured a non‑permanent seat for <span style="color:var(--warning);">2021‑2022</span>.</li>
    <li>[[COP26]] was postponed to <span style="color:var(--warning);">2021</span> due to the COVID‑19 pandemic, making it the first climate summit held in a pandemic year.</li>
    <li>[[SAARC]] summits have been held <span style="color:var(--warning);">19</span> times since 1985, with the 2019 summit in [[Maldives]] focusing on maritime security.</li>
    <li>India’s first participation in a [[G20]] summit was as a guest in <span style="color:var(--warning);">2008</span>, later becoming a permanent member in <span style="color:var(--warning);">2023</span>.</li>
    <li>The <span style="color:var(--success);">Paris Agreement</span> was adopted at [[COP21]] in <span style="color:var(--warning);">2015</span>; India pledged to achieve <span style="color:var(--warning);">40 %</span> cumulative renewable capacity by 2030.</li>
    <li>[[ASEAN]] holds its summit annually; the 2021 edition in [[Bangkok]] introduced the “<span style="color:var(--success);">ASEAN‑India Comprehensive Economic Partnership</span>”.</li>
    <li>[[World Trade Organization]]’s 2023 ministerial conference in [[Abu Dhabi]] resulted in a <span style="color:var(--warning);">3.5 % </span> average tariff reduction for member nations.</li>
    <li>[[BRICS]] 2022 summit marked the first joint declaration on <span style="color:var(--success);">cybersecurity cooperation</span>, leading to a trilateral cyber‑exercise in 2023.</li>
    <li>[[UNSC]] resolutions on Kashmir have been tabled but not passed due to the <span style="color:var(--warning);">veto</span> of permanent members, illustrating the power dynamics of the council.</li>
    <li>India’s <span style="color:var(--success);">Strategic Autonomy</span> narrative is reinforced in most major summits, especially in the context of <span style="color:var(--warning);">2022</span> [[BRICS]] discussions on defence cooperation.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Since 2018, the <strong>Major International Summits</strong> topic has featured in every NDA and CDS paper, with an average of <span style="color:var(--warning);">2‑3</span> questions per exam. The most recurrent sub‑topic is the [[G20]] summit, especially its 2023 Bali meeting, which appeared in both NDA 2022 (direct) and CDS 2021 (application‑based). The [[BRICS]] summit also surfaces regularly, notably the 2022 cyber‑security declaration, which was the focus of a “match the column” type question in AFCAT 2023.</p>
  <p>Examiners favour <span style="color:var(--success);">comparative questions</span> that ask candidates to differentiate between bilateral and multilateral summits, or to identify the host country of a particular year. Conceptual questions that link summit outcomes to India’s defence procurement (e.g., the BrahMos‑Navy upgrade after the 2021 India‑US summit) are considered high‑yield because they test both factual recall and analytical ability.</p>
  <p>The difficulty level has gradually shifted from simple factual recall (pre‑2020) to more application‑oriented items (2021‑2025). Recent papers emphasize <span style="color:var(--success);">policy implications</span>—for instance, the 2024 NDA paper asked how the [[COP26]] commitments influence India’s renewable‑energy targets, requiring candidates to connect two separate pieces of information.</p>
  <p>Overall, the trend suggests that future examinations will continue to integrate summit‑related data with broader themes such as climate change, cyber security, and strategic autonomy. Students should therefore study the chronological timeline of summits, their agendas, and the specific Indian contributions to maximise scoring potential.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing the host year with the agenda year – students often write 2022 for the [[G20]] Bali summit, forgetting that the agenda (energy security) was set in 2023. Remember to cross‑check the year with the host city.</li>
    <li>Mixing up [[BRICS]] and [[BRIC]] – the latter excludes South Africa. The mistake arises from overlooking the “S” added in 2010; always verify the membership list.</li>
    <li>Assuming every summit produces a binding treaty – many, like the [[ASEAN]] summit, issue non‑binding declarations. This leads to over‑estimation of legal impact.</li>
    <li>Over‑generalising India’s role – students sometimes claim India chaired the [[UNSC]] in 2021, which is false; India was a non‑permanent member, not the chair.</li>
    <li>Neglecting the thematic focus – a common error is to cite “trade” for the [[SAARC]] 2019 summit, which actually centered on maritime security.</li>
    <li>Ignoring the chronological order – placing the 2022 [[BRICS]] cyber‑security declaration before the 2021 [[G20]] energy pledge leads to logical inconsistency in answers.</li>
    <li>Memorising only the acronym without context – students recite “G20 = 20 countries” but forget the agenda, resulting in incomplete answers. Pair each acronym with its key theme.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol style="margin-left:20px;">
    <li>
      <p><strong>Question:</strong> Which summit first introduced the <span style
`;

window.EXPANDED_NOTES_DATA["ca-reports"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Important Reports & Indices
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>In the realm of competitive examinations like NDA, CDS and AFCAT, the term “reports & indices” is not merely a collection of statistics; it is a structured language that captures the pulse of a nation’s socio‑economic, defence, and scientific health. The genesis of systematic reporting in India can be traced back to the British colonial period when the [[India Census of 1881]] introduced a periodic data‑gathering mechanism. Post‑Independence, the first major effort to codify development metrics was the [[Planning Commission]]’s Five‑Year Plans, which produced the [[National Sample Survey (NSS)]] reports. These early reports laid the axiomatic foundation that every index must be <span style="color: var(--warning);">objective</span>, <span style="color: var(--warning);">reproducible</span>, and <span style="color: var(--warning);">timely</span>.</p>

  <p>The <strong>core definition</strong> of an <span style="color: var(--success);">index</span> is a composite statistic that aggregates multiple variables into a single, comparable figure. For example, the [[Human Development Index (HDI)]] combines life expectancy, education, and per‑capita income. The <span style="color: var(--warning);">axiom of comparability</span> ensures that the same methodology is applied across regions and years, enabling trend analysis. In defence parlance, the [[Global Firepower Index]] follows a similar principle, weighting assets like aircraft, naval vessels, and manpower to produce a rank‑order of military strength.</p>

  <p>Building on these definitions, the next logical step is the <span style="color: var(--success);">report</span>. A report is a narrative companion to an index, providing context, methodology, and policy implications. Consider the [[NITI Aayog’s Sustainable Development Goals (SDG) Index]]: the index numerically ranks states, while the report dissects why Kerala outperforms others, highlighting its health infrastructure and education policies. This two‑tiered structure—index plus report—creates a feedback loop for policymakers.</p>

  <p>Let’s examine three worked examples. (1) The [[Global Hunger Index (GHI)]] calculates a weighted average of under‑nourishment, child stunting, and child mortality. In 2023, India’s GHI score dropped from 30.7 to 28.1, a <span style="color: var(--success);">key fact</span> that reflects the impact of the [[National Food Security Act (NFSA)]] and improved irrigation. (2) The [[World Bank’s Ease of Doing Business Index]] assigns scores based on 10 parameters; Maharashtra’s 2022 ranking of 3rd nationally is directly linked to the state’s implementation of the [[Maharashtra Business Reforms (MBR)]] policy. (3) The defence-centric [[Annual Report of Ministry of Defence (MoD)]] uses the <span style="color: var(--warning);">ratio of defence expenditure to GDP</span> (currently 2.2%) to benchmark readiness against the [[NATO guideline of 2%]].</p>

  <p>Real‑world applications are abundant. In the Indian armed forces, the [[Integrated Defence Staff (IDS)]] uses the “Defence Production Index” to allocate contracts among domestic manufacturers, ensuring self‑reliance under the “Make in India” initiative. Scientists rely on the [[Global Innovation Index (GII)]], where India’s 2022 jump to 48th place underscores the effectiveness of the [[Science, Technology and Innovation Policy (STIP)]]. Moreover, the [[National Family Health Survey (NFHS‑5)]] provides granular data on maternal mortality, directly influencing the Armed Forces Medical Services’ outreach programs.</p>

  <p>Another <span style="color: var(--warning);">important</span> concept is the “benchmark year”. For most indices, a base year (often 2010 or 2015) is selected, and subsequent values are expressed as percentages of that base. This enables a clear visual of growth or decline. The [[UNDP’s Gender Inequality Index (GII)]] uses 2010 as its base, allowing analysts to quantify the <span style="color: var(--success);">key fact</span> that India’s gender gap narrowed by 2.5% over a decade, a statistic frequently cited in NDA essay questions.</p>

  <p>Finally, the interplay between reports and indices drives strategic decision‑making. When the [[Committee on Defence (Kashmir Report, 2015)]] highlighted a <span style="color: var(--warning);">shortfall of 15% in indigenous weapon production</span>, the resulting “Indigenisation Index” prompted a policy shift that accelerated projects like the [[Advanced Light Helicopter (ALH)]]. Understanding these mechanisms equips aspirants with the analytical lens required for high‑scoring answers in the current affairs section.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Report / Index</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Governing Body</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Base Year / Frequency</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Metric</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Latest Value (2023/24)</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Human Development Index (HDI)</td>
      <td style="border:1px solid var(--border);padding:10px;">UNDP</td>
      <td style="border:1px solid var(--border);padding:10px;">2010; Annual</td>
      <td style="border:1px solid var(--border);padding:10px;">Composite of life expectancy, education, GNI per capita</td>
      <td style="border:1px solid var(--border);padding:10px;">0.645 (India)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Global Hunger Index (GHI)</td>
      <td style="border:1px solid var(--border);padding:10px;">ICRISAT & Welthunger</td>
      <td style="border:1px solid var(--border);padding:10px;">2010; Biennial</td>
      <td style="border:1px solid var(--border);padding:10px;">Weighted score (under‑nourishment, stunting, mortality)</td>
      <td style="border:1px solid var(--border);padding:10px;">28.1 (India)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Defence Production Index</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Defence</td>
      <td style="border:1px solid var(--border);padding:10px;">2015; Annual</td>
      <td style="border:1px solid var(--border);padding:10px;">% of defence procurement from domestic sources</td>
      <td style="border:1px solid var(--border);padding:10px;">68% (2023‑24)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Global Firepower Index</td>
      <td style="border:1px solid var(--border);padding:10px;">Global Firepower</td>
      <td style="border:1px solid var(--border);padding:10px;">2022; Annual</td>
      <td style="border:1px solid var(--border);padding:10px;">Composite of manpower, equipment, logistics</td>
      <td style="border:1px solid var(--border);padding:10px;">Rank 4 (India)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Ease of Doing Business Index</td>
      <td style="border:1px solid var(--border);padding:10px;">World Bank</td>
      <td style="border:1px solid var(--border);padding:10px;">2020; Annual</td>
      <td style="border:1px solid var(--border);padding:10px;">Score out of 100 (10 parameters)</td>
      <td style="border:1px solid var(--border);padding:10px;">78.6 (Maharashtra)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">National Family Health Survey (NFHS‑5)</td>
      <td style="border:1px solid var(--border);padding:10px;">Ministry of Health & Family Welfare</td>
      <td style="border:1px solid var(--border);padding:10px;">2019‑21; Quadrennial</td>
      <td style="border:1px solid var(--border);padding:10px;">Maternal mortality ratio, child stunting</td>
      <td style="border:1px solid var(--border);padding:10px;">140 per 100,000 live births</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Global Innovation Index (GII)</td>
      <td style="border:1px solid var(--border);padding:10px;">INSEAD & WIPO</td>
      <td style="border:1px solid var(--border);padding:10px;">2015; Annual</td>
      <td style="border:1px solid var(--border);padding:10px;">Innovation input & output sub‑indices</td>
      <td style="border:1px solid var(--border);padding:10px;">48th (India, 2022)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Gender Inequality Index (GII)</td>
      <td style="border:1px solid var(--border);padding:10px;">UNDP</td>
      <td style="border:1px solid var(--border);padding:10px;">2010; Annual</td>
      <td style="border:1px solid var(--border);padding:10px;">Reproductive health, empowerment, labour market</td>
      <td style="border:1px solid var(--border);padding:10px;">0.123 (India, 2022)</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>H‑D‑I</strong> – <em>Health, Education, Income</em> (core components of the Human Development Index).</li>
    <li><strong>G‑H‑I</strong> – <em>Grain, Height, Infant</em> (under‑nourishment, child stunting, child mortality for Global Hunger Index).</li>
    <li><strong>D‑P‑I</strong> – <em>Domestic, Procurement, Index</em> (remembers the Defence Production Index formula: % of domestic procurement).</li>
    <li><strong>S‑A‑F‑E</strong> – <em>Structure, Accessibility, Finance, Ease</em> (key pillars of the Ease of Doing Business Index).</li>
    <li><strong>G‑F‑P</strong> – <em>Ground, Firepower, Position</em> (factors considered in the Global Firepower ranking).</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">2010</span> is the common base year for most UN‑derived indices like HDI, GII, and GII.</li>
    <li>The <span style="color:var(--success);">Human Development Index</span> is calculated as the geometric mean of its three sub‑indices.</li>
    <li>India’s <span style="color:var(--success);">Global Hunger Index</span> score fell by <span style="color:var(--warning);">2.6 points</span> between 2021 and 2023.</li>
    <li>Defence expenditure as a % of GDP in 2023‑24 stood at <span style="color:var(--warning);">2.2%</span>, meeting the NATO benchmark.</li>
    <li>The <span style="color:var(--success);">Ease of Doing Business</span> score for Maharashtra in 2022 was <span style="color:var(--warning);">78.6</span>, highest among Indian states.</li>
    <li>GII ranks countries on a scale of 0‑100; India’s 2022 score was <span style="color:var(--warning);">41.5</span>, placing it at 48th position.</li>
    <li>NFHS‑5 recorded a maternal mortality ratio (MMR) of <span style="color:var(--warning);">140</span> per 100,000 live births.</li>
    <li>The <span style="color:var(--success);">Global Firepower Index</span> uses 5,000+ data points to derive a rank.</li>
    <li>Gender Inequality Index (GII) values range from 0 (perfect equality) to 1 (maximum inequality); India’s 2022 value is <span style="color:var(--warning);">0.123</span>.</li>
    <li>Defence Production Index target for 2025 is <span style="color:var(--warning);">75%</span> domestic content.</li>
    <li>World Bank’s <span style="color:var(--success);">Ease of Doing Business</span> methodology was revised in <span style="color:var(--warning);">2020</span> to eliminate the “Starting a Business” indicator.</li>
    <li>UNDP’s HDI for Kerala (state level) in 2022 was <span style="color:var(--warning);">0.791</span>, the highest among Indian states.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Since 2018, the <strong>Reports & Indices</strong> segment has appeared in roughly <span style="color:var(--warning);">30‑35%</span> of the current affairs sections across NDA, CDS, and AFCAT papers. The most recurrent sub‑topic is the <span style="color:var(--success);">Human Development Index</span>, featuring in 7 out of the last 12 papers. This reflects the examiners’ intent to test a candidate’s grasp of global development metrics alongside Indian performance.</p>
  <p>Exam setters also love to probe the <span style="color:var(--success);">Global Hunger Index</span> and the <span style="color:var(--success);">Defence Production Index</span>. Typical questions ask candidates to compare the latest Indian score with the previous year, or to compute a simple percentage change. For instance, a 2022 NDA question asked for the <span style="color:var(--warning);">percentage drop</span> in GHI from 2021 to 2023, requiring a straightforward arithmetic operation.</p>
  <p>The difficulty level has gradually shifted from pure recall (pre‑2020) to application‑oriented problems (2021‑2024). Recent papers feature “data‑interpretation” items where a small excerpt from the NFHS‑5 report is provided, and candidates must infer the correct policy implication. This trend underscores the need for analytical practice rather than rote memorisation.</p>
  <p>Another notable shift is the inclusion of state‑wise rankings, especially for the <span style="color:var(--success);">SDG Index</span> released by NITI Aayog. In the 2023 CDS, a question linked the top‑ranking state’s performance to specific welfare schemes, signalling that future exams may demand a deeper contextual understanding of indices rather than isolated figures.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing the <span style="color:var(--success);">HDI</span> with the <span style="color:var(--success);">GII</span>. Students often mix the two because both are UN‑derived; remember HDI measures development while GII measures gender disparity.</li>
    <li>Using the raw GHI score instead of the <span style="color:var(--warning);">percentage change</span>. Exams frequently ask for the change, so always compute the difference relative to the base year.</li>
    <li>Assuming the Defence Production Index is a monetary figure. It is a <span style="color:var(--success);">percentage of domestic procurement</span>, not a rupee amount.</li>
    <li>Over‑looking the revision of the World Bank’s Doing Business methodology in <span style="color:var(--warning);">2020</span>. Many candidates still quote the old “starting a business” metric, leading to wrong answers.</li>
    <li>Neglecting the distinction between national and state rankings. For the SDG Index, states are ranked separately; mixing them with national data causes mismatch.</li>
    <li>Misreading the base year. A common error is treating 2015 as the base for the GII when it is actually 2010; this skews percentage calculations.</li>
    <li>Relying on outdated figures from 2019. The rapid update cycles (annual for most indices) mean that older numbers are often replaced, and exams expect the latest data.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol>
    <li>
      <p><strong>Question:</strong> According to the 2023 Global Hunger Index, India’s score improved to 28.1. What is the percentage reduction in the score from the 2021 value of 30.7?</p>
      <p>A) 8.44% B) 9.50% C) 12.00% D) 15.00%</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> Percentage reduction = ((30.7‑28.1)/30.7)×100 = 8.46% ≈ 9.50% (rounded to nearest option). Option B is the closest.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The Human Development Index (HDI) is computed as the geometric mean of three sub‑indices. If the life‑expectancy index is 0.85, education index is 0.78, and income index is 0.70, what is the HDI?</p>
      <p>A) 0.78 B) 0.80 C) 0.84 D) 0.90</p>
      <p><strong>Answer:</strong> A</p>
      <p><strong>Explanation:</strong> HDI = (0.85 × 0.78 × 0.70)^(1/3) ≈ 0.78. Options B‑D are higher than the calculated value.</p>
    </li>
    <li>
      <p><strong>Question:</strong> In the Defence Production Index, the target for domestic procurement by 2025 is 75%. If India achieved 68% in 2023‑24, what additional percentage points are needed to meet the target?</p>
      <p>A) 5% B) 7% C) 10% D) 12%</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> Required increase = 75% ‑ 68% = 7%. Hence option B.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which Indian state topped the NITI Aayog’s Sustainable Development Goals (SDG) Index for 2022?</p>
      <p>A) Maharashtra B) Kerala
`;

window.EXPANDED_NOTES_DATA["ca-judgments"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Landmark SC & HC Judgments
  </h3>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
  <p>Understanding [[Landmark SC & HC Judgments]] begins with the evolution of the Indian judicial system during the British Raj. The [[Supreme Court of India]] was constituted in 1950 under [[Article 124]] of the [[Constitution of India]], inheriting a legacy of common‑law principles and the doctrine of [[Judicial Review]]. The early post‑independence era saw courts interpreting fundamental rights, which laid the groundwork for the <span style="color: var(--warning);">important</span> jurisprudential milestones that shape today’s defence, security, and administrative policies.</p>
  <p>At the core of these judgments are precise definitions: a <span style="color: var(--success);">key fact</span> is that “[[Fundamental Rights]]” are not merely aspirational clauses but enforceable guarantees. The [[Basic Structure Doctrine]], articulated in the [[Kesavananda Bharati case]] (1973), established that Parliament cannot amend the Constitution’s essential framework, a principle repeatedly invoked in later cases involving [[National Security]] and defence procurement.</p>
  <p>Each subsequent judgment builds on this doctrinal base. For example, [[Maneka Gandhi v. Union of India]] (1978) expanded [[Article 21]] to include the right to a fair procedure, influencing later cases on the rights of service personnel. Similarly, [[Indira Gandhi vs. Raj Narain]] (1975) reinforced the concept of “procedure established by law” as a benchmark for evaluating executive actions, a standard still applied when assessing the legality of defence contracts.</p>
  <p>Consider a worked example: In the [[S.P. Gupta vs. Union of India]] (1981) case, the Court held that the appointment of a Chief Justice could not be dictated by political considerations, establishing the principle of judicial independence. This precedent was later cited in the [[Supreme Court’s 2020 judgment on the 2020–21 Defence Procurement Procedure]], where the Court scrutinised the transparency of the “Make in India” policy for defence equipment.</p>
  <p>Another illustration is the [[Vishaka v. State of Rajasthan]] (1997) judgment, which introduced the [[Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act]] framework. Its reasoning on procedural fairness has been adapted in the defence sector to protect women officers from harassment, thereby directly influencing personnel policies in the Indian Army and Air Force.</p>
  <p>Real‑world applications of these judgments are evident in the defence arena. The [[Right to Information Act]] (2005), upheld by the Supreme Court in several cases, obliges the Ministry of Defence to disclose procurement details, thereby fostering accountability. Moreover, the [[Public Interest Litigation]] (PIL) mechanism, popularised by the [[Supreme Court]] in the 1980s, enables civil society to challenge unlawful defence decisions, as seen in the 2022 [[AFCAT]‑related case on eligibility criteria.</p>
  <p>In summary, the tapestry of [[Landmark SC & HC Judgments]] intertwines constitutional theory, procedural safeguards, and practical outcomes. Mastery of these cases equips aspirants for the NDA, CDS, and AFCAT exams, where questions often test the ability to link a judgment’s principle to contemporary defence policy, security strategy, or administrative reform.</p>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Judgment</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Court</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Significance for Defence/GK</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Kesavananda Bharati v. State of Kerala]]</td>
      <td style="border:1px solid var(--border);padding:10px;">1973</td>
      <td style="border:1px solid var(--border);padding:10px;">Supreme Court</td>
      <td style="border:1px solid var(--border);padding:10px;">Introduced Basic Structure Doctrine; limits on defence‑related constitutional amendments.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Maneka Gandhi v. Union of India]]</td>
      <td style="border:1px solid var(--border);padding:10px;">1978</td>
      <td style="border:1px solid var(--border);padding:10px;">Supreme Court</td>
      <td style="border:1px solid var(--border);padding:10px;">Expanded Article 21; impacts due‑process in military tribunals.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[S.P. Gupta v. Union of India]]</td>
      <td style="border:1px solid var(--border);padding:10px;">1981</td>
      <td style="border:1px solid var(--border);padding:10px;">Supreme Court</td>
      <td style="border:1px solid var(--border);padding:10px;">Judicial independence; precedent for defence procurement transparency.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Vishaka v. State of Rajasthan]]</td>
      <td style="border:1px solid var(--border);padding:10px;">1997</td>
      <td style="border:1px solid var(--border);padding:10px;">Supreme Court</td>
      <td style="border:1px solid var(--border);padding:10px;">Workplace safety norms; applied to women officers in armed forces.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Right to Information Act – Supreme Court Clarifications]]</td>
      <td style="border:1px solid var(--border);padding:10px;">2005‑2020</td>
      <td style="border:1px solid var(--border);padding:10px;">Supreme Court</td>
      <td style="border:1px solid var(--border);padding:10px;">Mandates disclosure of defence procurement data; enhances accountability.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Indira Gandhi v. Raj Narain]]</td>
      <td style="border:1px solid var(--border);padding:10px;">1975</td>
      <td style="border:1px solid var(--border);padding:10px;">Supreme Court</td>
      <td style="border:1px solid var(--border);padding:10px;">Procedure established by law; used in evaluating military court orders.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[AFCAT Eligibility Case (2022)]]</td>
      <td style="border:1px solid var(--border);padding:10px;">2022</td>
      <td style="border:1px solid var(--border);padding:10px;">Supreme Court</td>
      <td style="border:1px solid var(--border);padding:10px;">Clarified age‑relaxation and educational criteria for candidate selection.</td>
    </tr>
  </table>

  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>KAB</strong> – <em>Kesavananda, Article 14, Basic structure</em>: Remember the three pillars of the Basic Structure Doctrine.</li>
    <li><strong>MAN</strong> – <em>Maneka, Article 21, No ‘procedure established by law’ loophole</em>: Links the case to procedural fairness.</li>
    <li><strong>SPG</strong> – <em>S.P. Gupta, Protection of Judicial Independence</em>: Helps recall the 1981 judgment on appointment interference.</li>
    <li><strong>VISH</strong> – <em>Vishaka, Implementation of Safe Workplace</em>: Connects the 1997 judgment to gender‑safety rules.</li>
    <li><strong>R‑T‑I‑D</strong> – <em>Right‑to‑Information, Defence Transparency</em>: Aids in remembering the RTI impact on defence procurement.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">1973</span> – <span style="color:var(--success);">[[Kesavananda Bharati]]</span> established the <span style="color:var(--success);">Basic Structure Doctrine</span>.</li>
    <li><span style="color:var(--warning);">1978</span> – <span style="color:var(--success);">[[Maneka Gandhi]]</span> expanded <span style="color:var(--success);">Article 21</span> to include procedural fairness.</li>
    <li><span style="color:var(--warning);">1981</span> – <span style="color:var(--success);">[[S.P. Gupta]]</span> affirmed judicial independence from executive pressure.</li>
    <li><span style="color:var(--warning);">1997</span> – <span style="color:var(--success);">[[Vishaka]]</span> laid down the framework for workplace harassment prevention.</li>
    <li><span style="color:var(--warning);">2005</span> – <span style="color:var(--success);">[[Right to Information Act]]</span> became a tool for defence procurement scrutiny.</li>
    <li><span style="color:var(--warning);">2015</span> – <span style="color:var(--success);">[[Nirbhaya (2012) Supreme Court Guidelines]]</span> influenced security protocols in defence establishments.</li>
    <li><span style="color:var(--warning);">2020</span> – <span style="color:var(--success);">[[Supreme Court’s Defence Procurement Procedure judgment]]</span> upheld transparency under the “Make‑in‑India” policy.</li>
    <li><span style="color:var(--warning);">2022</span> – <span style="color:var(--success);">[[AFCAT Eligibility Case]]</span> clarified age‑relaxation for candidates.</li>
    <li><span style="color:var(--warning);">1975</span> – <span style="color:var(--success);">[[Indira Gandhi v. Raj Narain]]</span> reinforced “procedure established by law” standard.</li>
    <li><span style="color:var(--warning);">1987</span> – <span style="color:var(--success);">[[M.C. Mehta v. Union of India]]</span> extended environmental jurisprudence to defence training grounds.</li>
    <li><span style="color:var(--warning);">1993</span> – <span style="color:var(--success);">[[Writ of Certiorari]]</span> became a frequent remedy against illegal military orders.</li>
    <li><span style="color:var(--warning);">2009</span> – <span style="color:var(--success);">[[Public Interest Litigation (PIL) Guidelines]]</span> empowered NGOs to challenge defence procurement irregularities.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Across the last decade, the NDA, CDS, and AFCAT papers have featured at least one question on a landmark judgment in 78% of the exams. The most common source is the [[Kesavananda Bharati]] case, often asked to test the candidate’s grasp of the Basic Structure Doctrine, especially in relation to defence‑related constitutional amendments.</p>
  <p>Exam setters favour sub‑topics that intersect with security and governance, such as the impact of the [[Right to Information Act]] on defence procurement, or the procedural safeguards stemming from [[Maneka Gandhi]] that affect military tribunals. Questions are typically scenario‑based, asking candidates to identify the correct legal principle that would apply to a given defence‑policy dilemma.</p>
  <p>The difficulty level has gradually shifted from rote recall (pre‑2018) to application‑oriented items. In the most recent NDA 2023 paper, a two‑mark question presented a hypothetical amendment to Article 21 concerning cyber‑warfare, requiring examinees to cite the relevant judgment and its reasoning.</p>
  <p>Overall, the trend indicates a growing emphasis on the “law‑in‑defence‑policy” nexus, urging aspirants to not only memorise case names but also understand their practical implications for national security and armed forces administration.</p>

  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing the year of the <span style="color:var(--success);">Kesavananda</span> case with the <span style="color:var(--success);">Indira Gandhi</span> case – students often mix up 1973 and 1975. Remember the mnemonic KAB (Kesavananda, Article 14, Basic structure) for the correct year.</li>
    <li>Assuming that [[Maneka Gandhi]] only deals with personal liberty, ignoring its procedural due‑process impact on military courts. The remedy is to link Maneka directly to Article 21’s expanded scope.</li>
    <li>Over‑generalising the <span style="color:var(--success);">Vishaka</span> guidelines as only applicable to civilian workplaces; they equally govern armed‑force training academies. Reinforce the mnemonic VISH for this nuance.</li>
    <li>Neglecting the role of the [[Right to Information Act]] in defence procurement questions, leading to incomplete answers. Always cite the 2005 RTI Act when discussing transparency.</li>
    <li>Mixing up the jurisdiction of the Supreme Court with that of the High Courts in PIL matters; many students attribute a High Court decision to the Supreme Court. Clarify jurisdictional hierarchy before answering.</li>
    <li>Ignoring the evolution of the <span style="color:var(--success);">Basic Structure Doctrine</span> post‑Kesavananda, especially the 1994 <span style="color:var(--success);">Second Kesavananda</span> clarification. Review subsequent cases to avoid this gap.</li>
    <li>Answering MCQs with verbatim case facts without connecting them to the asked concept, resulting in loss of marks. Practice linking facts to principles for each case.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol style="margin-left:20px;">
    <li>
      <p><strong>Question:</strong> Which judgment introduced the doctrine that Parliament cannot alter the “basic structure” of the Constitution, thereby affecting any future amendment related to defence procurement?</p>
      <p>A) [[Maneka Gandhi v. Union of India]]<br>
      B) [[S.P. Gupta v. Union of India]]<br>
      C) [[Kesavananda Bharati v. State of Kerala]]<br>
      D) [[Indira Gandhi v. Raj Narain]]</p>
      <p><strong>Answer:</strong> C</p>
      <p><strong>Explanation:</strong> The 1973 Kesavananda case set the Basic Structure Doctrine. Options A, B, and D deal with procedural fairness and judicial independence, not the basic structure.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Under the [[Right to Information Act]], which of the following defence‑related documents is exempt from disclosure?</p>
      <p>A) Procurement tender details<br>
      B) Final contract amounts above ₹500 crore<br>
      C) Strategic defence plans<br>
      D) Annual budget allocation to the Ministry of Defence</p>
      <p><strong>Answer:</strong> C</p>
      <p><strong>Explanation:</strong> Strategic defence plans are exempt under Section 8(1)(c) of the RTI Act. Tender details and contract amounts are discloseable; budget allocations are public domain.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The principle that “procedure established by law” must be just, fair, and reasonable was reinforced by which Supreme Court decision?</p>
      <p>A) [[Vishaka v. State of Rajasthan]]<br>
      B) [[Indira Gandhi v. Raj Narain]]<br>
      C) [[Maneka Gandhi v. Union of India]]<br>
      D) [[M.C. Mehta v. Union of India]]</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> The 1975 Indira Gandhi case emphasized that “procedure established by law” cannot be arbitrary. Vishaka deals with harassment, Maneka expands Article 21, and Mehta concerns environmental law.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which case is directly cited when a defence court’s order is challenged on the ground of violation of due‑process rights?</p>
      <p>A) [[S.P. Gupta v. Union of India]]<br>
      B) [[Maneka Gandhi v. Union of India]]<br>
      C) [[Kesavananda Bharati v. State of Kerala]]<br>
      D) [[AFCAT Eligibility Case (2022)]]</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> Maneka Gandhi expanded due‑process under Article 21, making it the cornerstone for challenging military tribunal orders. S.P. Gupta relates to judicial independence, not procedural due‑process.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The Supreme Court’s 2020 judgment on the Defence Procurement Procedure primarily reinforced which of the following?</p>
      <p>A) The need for foreign direct investment in defence<br>
      B) Transparency and competition in “Make‑in‑India” contracts<br>
      C) The exemption of strategic assets from public scrutiny<br>
      D) The authority of the Ministry of Defence to bypass parliamentary approval</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> The 2020 judgment emphasized transparency and fair competition under the Make‑in‑India policy. Options A, C, and D misrepresent the Court’s stance.</p>
    </li>
  </ol>
</div>
`;

window.EXPANDED_NOTES_DATA["ca-awards"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    National Awards & Honours
  </h3>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">DEEP CONCEPTUAL EXPLANATION</h4>
  <p>India’s system of [[National Awards & Honours]] traces its roots to the colonial era when the British Crown instituted medals such as the [[Indian Order of Merit]] to recognise bravery. After independence, the newly‑formed Republic sought to create a distinct hierarchy that would celebrate civilian, scientific, and defence achievements in a manner that reflected sovereign values. The first post‑independence civilian honour, the [[Padma Shri]], was instituted in 1954, followed by the higher [[Padma Bhushan]] and [[Padma Vibhushan]]. These awards form the backbone of the contemporary honours architecture, serving as <span style="color: var(--warning);">important</span> markers of national recognition.</p>
  <p>The constitutional foundation for awards lies in Article 15(4) of the Indian Constitution, which empowers the State to make special provisions for the advancement of any section of the people. This legal axiom underpins the creation of awards in fields such as science, sports, and defence. For example, the [[Bharat Ratna]]—the highest civilian award—was introduced in 1954 under the Ministry of Home Affairs, and its conferment is governed by the <span style="color: var(--success);">Bharat Ratna Act, 1954</span>. The award’s selection committee operates independently, ensuring merit‑based outcomes.</p>
  <p>Each award category builds on a logical tiered structure. At the apex sit the [[Bharat Ratna]] and the [[Param Vir Chakra]] (the highest military decoration). Below them are the [[Ashoka Chakra]] for peacetime gallantry and the [[Kirti Chakra]]. The next tier includes service medals such as the [[Sena Medal]] and the [[Vijay Award]] for distinguished service. This hierarchical scaffold ensures that the level of <span style="color: var(--warning);">importance</span> of an award corresponds to the magnitude of the recipient’s contribution, creating a clear pathway for recognition.</p>
  <p>Consider the case of a scientist from the [[Indian Space Research Organisation]] (ISRO) who leads a successful Mars mission. Such a candidate may be considered for the [[National Award for Excellence in Science]] (established 2002) and, if the mission has a strategic defence impact, also for the [[Defense Research and Development Organisation]] (DRDO) “Innovation Award”. This illustrates how awards can intersect across domains, reinforcing the idea that achievements in defence, science, and civil society are not isolated silos but part of an integrated national narrative.</p>
  <p>Another worked example: a soldier displaying extraordinary bravery during a counter‑insurgency operation may be recommended for the [[Kirti Chakra]] (peacetime) or the [[Param Vir Chakra]] (wartime). The recommendation process involves a chain of command, a verification board, and final approval by the President of India. This procedural flow demonstrates the <span style="color: var(--warning);">important</span> role of documentation, eyewitness testimony, and hierarchical endorsement in award conferral.</p>
  <p>Real‑world applications of these honours extend beyond prestige. Recipients of the [[Maharaja Ranjit Singh Award]] (for the Indian Army) receive monetary benefits, priority in government housing, and enhanced career prospects. Similarly, sports personalities awarded the [[Rajiv Gandhi Khel Ratna]] often secure sponsorships that fuel further training. Thus, awards act as both recognition and incentive mechanisms, driving excellence in defence, research, and culture.</p>
  <p>In recent years, the government has introduced niche awards such as the [[Gandhi Peace Prize]] for contributions to peace and non‑violence, and the [[UN Peacekeeping Medal]] for Indian personnel serving under the United Nations flag. These additions reflect India’s evolving diplomatic posture and its commitment to honouring global contributions alongside domestic achievements. Understanding the chronology, legal basis, and tiered logic of these awards equips aspirants to answer any question that tests the depth of their knowledge on the subject.</p>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Award</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year Instituted</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Category</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Eligibility</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Bharat Ratna]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1954</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Civilian – Highest</td>
      <td style="border:1px solid var(--border);padding:10px;">Any Indian citizen (post‑humous allowed)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Param Vir Chakra]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1950</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Military – Wartime</td>
      <td style="border:1px solid var(--border);padding:10px;">Acts of the most conspicuous bravery</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Ashoka Chakra]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1952</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Civilian – Peacetime</td>
      <td style="border:1px solid var(--border);padding:10px;">Valour, courageous action</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Padma Shri]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1954</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Civilian – Third highest</td>
      <td style="border:1px solid var(--border);padding:10px;">Meritorious service in any field</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Kirti Chakra]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1952</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Military – Peacetime</td>
      <td style="border:1px solid var(--border);padding:10px;">Gallantry not in direct combat</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Maharaja Ranjit Singh Award]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1978</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Military – Service</td>
      <td style="border:1px solid var(--border);padding:10px;">Distinguished service in the Indian Army</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Rajiv Gandhi Khel Ratna]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1991</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Sports – Highest</td>
      <td style="border:1px solid var(--border);padding:10px;">Outstanding performance in sports</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Gandhi Peace Prize]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1965</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Civilian – Peace</td>
      <td style="border:1px solid var(--border);padding:10px;">Contributions to peace & non‑violence</td>
    </tr>
  </table>

  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>BRAVO‑PC</strong> – Remember the top three civilian awards: <span style="color:var(--success);">B</span>harat Ratna, <span style="color:var(--success);">R</span>ashtrapati Award (now defunct), <span style="color:var(--success);">A</span>shoka Chakra, <span style="color:var(--success);">V</span>ijay Award, <span style="color:var(--success);">O</span>ther Padma awards. The “PC” reminds you they are “Presidentially Conferred”.</li>
    <li><strong>PEACE‑M</strong> – For peacetime gallantry: <span style="color:var(--success);">P</span>adma Shri, <span style="color:var(--success);">E</span>ashoka Chakra, <span style="color:var(--success);">A</span>shoka Chakra, <span style="color:var(--success);">C</span>hirp‑Award (Kirti Chakra), <span style="color:var(--success);">E</span>mergency Medal, <span style="color:var(--success);">M</span>ission Medal.</li>
    <li><strong>SCI‑R</strong> – Science awards order: <span style="color:var(--success);">S</span>cience Award (ISRO), <span style="color:var(--success);">C</span>handra Award (DRDO), <span style="color:var(--success);">I</span>nnovation Medal, <span style="color:var(--success);">R</span>obotics Prize.</li>
    <li><strong>DE‑FORCE</strong> – Military hierarchy: <span style="color:var(--success);">D</span>eath‑Defying (Param Vir Chakra), <span style="color:var(--success);">E</span>xcellence (Ashoka Chakra), <span style="color:var(--success);">F</span>rontline (Kirti Chakra), <span style="color:var(--success);">O</span>perational (Sena Medal), <span style="color:var(--success);">R</span>egimental (Vijay Award), <span style="color:var(--success);">C</span>ommand (Maharaja Ranjit Singh Award), <span style="color:var(--success);">E</span>lite (Padma Shri).</li>
    <li><strong>5‑STAR</strong> – Five top civilian accolades: <span style="color:var(--success);">S</span>hri Bharat Ratna, <span style="color:var(--success);">T</span>hree Padma awards, <span style="color:var(--success);">A</span>shoka Chakra, <span style="color:var(--success);">R</span>ajiv Gandhi Khel Ratna, <span style="color:var(--success);">R</span>esearch Awards.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">1954</span> – Year the <span style="color:var(--success);">Bharat Ratna</span> and <span style="color:var(--success);">Padma</span> awards were instituted.</li>
    <li>The <span style="color:var(--success);">Param Vir Chakra</span> is the only Indian gallantry award that can be awarded posthumously without restriction.</li>
    <li><span style="color:var(--warning);">1952</span> – Introduction of the <span style="color:var(--success);">Ashoka Chakra</span> for peacetime bravery.</li>
    <li>The <span style="color:var(--success);">Kirti Chakra</span> ranks below the Ashoka Chakra but above the <span style="color:var(--success);">Sena Medal</span>.</li>
    <li>Recipients of the <span style="color:var(--success);">Maharaja Ranjit Singh Award</span> receive a cash prize of <span style="color:var(--warning);">₹5 lakhs</span> and a pension.</li>
    <li>The <span style="color:var(--success);">Rajiv Gandhi Khel Ratna</span> includes a trophy, a citation, and a monetary award of <span style="color:var(--warning);">₹7.5 lakhs</span>.</li>
    <li>Only <span style="color:var(--warning);">12</span> individuals have been awarded the <span style="color:var(--success);">Bharat Ratna</span> for contributions in science and technology.</li>
    <li>The <span style="color:var(--success);">UN Peacekeeping Medal</span> is given to Indian personnel after a minimum of <span style="color:var(--warning);">90</span> days of service under UN command.</li>
    <li>For a civilian to be eligible for the <span style="color:var(--success);">Padma Shri</span>, the nomination must be received at least <span style="color:var(--warning);">30 days</span> before the Republic Day announcement.</li>
    <li>The <span style="color:var(--success);">Gandhi Peace Prize</span> carries a citation, a gold medal, and a cash component of <span style="color:var(--warning);">₹2 lakhs</span>.</li>
    <li>All military awards are conferred by the President of India on <span style="color:var(--warning);">26 January</span> (Republic Day) or <span style="color:var(--warning);">15 August</span> (Independence Day).</li>
    <li>The <span style="color:var(--success);">National Award for Excellence in Science</span> is presented by the Prime Minister on <span style="color:var(--warning);">5 September</span> (World Teachers' Day) to emphasize education‑science synergy.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Between 2018 and 2023, the NDA and CDS papers have featured the “National Awards & Honours” theme in <span style="color:var(--warning);">12</span> out of <span style="color:var(--warning);">30</span> total current‑affairs questions, reflecting a steady <span style="color:var(--warning);">40%</span> occurrence rate. The AFCAT exam, while primarily technical, still incorporates two to three questions on awards, especially those linked to defence and aerospace.</p>
  <p>Examiners consistently favour sub‑topics such as the year of institution, hierarchy (e.g., Param Vir Chakra vs. Ashoka Chakra), and the monetary components of civilian awards. Questions that ask to match the award with its field (science, sports, peace) appear most often, followed by “which award was conferred on X in Y year” type items. The difficulty level ranges from easy recall (award‑year) to moderate application (identifying the correct award for a given scenario).</p>
  <p>In the last five years, there has been a noticeable shift towards newer awards like the <span style="color:var(--success);">Gandhi Peace Prize</span> and the <span style="color:var(--success);">UN Peacekeeping Medal</span>, reflecting India’s growing international profile. Additionally, the trend of framing questions in a “cause‑effect” format—e.g., “Which award was introduced to honour contributions to space research?”—has increased, demanding deeper conceptual linkage rather than rote memorisation.</p>

  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing the <span style="color:var(--success);">Param Vir Chakra</span> with the <span style="color:var(--success);">Ashoka Chakra</span>. <em>Why?</em> Both are top‑tier gallantry awards; <em>How to avoid?</em> Remember PV C is wartime, AC is peacetime.</li>
    <li>Mix‑up between the <span style="color:var(--success);">Padma Shri</span> and <span style="color:var(--success);">Padma Bhushan</span>. <em>Why?</em> Similar naming; <em>How to avoid?</em> Associate “Shri” with “third” (three letters) and “Bhushan” with “second”.</li>
    <li>Assuming the <span style="color:var(--success);">Maharaja Ranjit Singh Award</span> is a civilian honour. <em>Why?</em> Its name sounds cultural; <em>How to avoid?</em> Memorise that it is the highest service award for the Indian Army.</li>
    <li>Neglecting the year of institution for newer awards like the <span style="color:var(--success);">Gandhi Peace Prize</span>. <em>Why?</em> Exam questions often ask “introduced in which year”. <em>How to avoid?</em> Keep a chronological timeline in notes.</li>
    <li>Over‑generalising the eligibility criteria—e.g., believing any Indian can receive the <span style="color:var(--success);">Ashoka Chakra</span>. <em>Why?</em> The award is for “most conspicuous bravery” not generic service; <em>How to avoid?</em> Focus on the specific “gallantry” clause.</li>
    <li>Forgetting that the <span style="color:var(--success);">UN Peacekeeping Medal</span> requires a minimum of <span style="color:var(--warning);">90</span> days service. <em>Why?</em> The duration is a frequent MCQ trap; <em>How to avoid?</em> Anchor the number with “three months = 90 days”.</li>
    <li>Mixing up the monetary amounts of awards—
`;

window.EXPANDED_NOTES_DATA["ca-economic-measures"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Economic Measures & Policy Packages
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>Economic measures and policy packages are systematic tools that governments employ to steer macro‑economic outcomes. Their roots can be traced back to the classical works of [[Adam Smith]] and [[John Maynard Keynes]], where the idea of a state intervening to correct market failures was first articulated. In the Indian context, the first major policy package was the [[Five‑Year Plan]] launched in 1951, which blended industrial policy with agricultural reforms, laying the groundwork for modern fiscal and monetary coordination.</p>

  <p>The <span style="color: var(--warning);">important</span> building blocks are <span style="color: var(--success);">Fiscal Policy</span>, <span style="color: var(--success);">Monetary Policy</span>, and <span style="color: var(--success);">Structural Reforms</span>. Fiscal policy manipulates government spending and taxation to influence aggregate demand. For example, the [[Mahalanobis Model]] of the 1950s emphasized heavy public investment in heavy industry, a <span style="color: var(--warning);">key fact</span> that boosted India's industrial base. Monetary policy, on the other hand, uses interest rates, reserve requirements, and open‑market operations to regulate money supply; the Reserve Bank of India’s (RBI) decision in 2015 to cut repo rate by 25 basis points is a textbook illustration of a demand‑stimulating move.</p>

  <p>These two pillars are reinforced by <span style="color: var(--warning);">important</span> structural reforms such as the [[Goods and Services Tax (GST)]] and the [[Make in India]] initiative. GST, introduced in 2017, unified a fragmented tax regime, thereby improving compliance and widening the tax base—a <span style="color: var(--success);">key fact</span> that increased indirect tax revenue by over ₹2.5 lakh crore in its first year. Make in India, launched in 2014, aimed to attract foreign direct investment (FDI) by simplifying licensing; it succeeded in raising FDI inflows from $30 billion in 2013‑14 to $44 billion in 2019‑20.</p>

  <p>When these measures are packaged together, they form a <span style="color: var(--warning);">important</span> “policy bundle” that can be targeted at specific sectors. A classic worked example is the “Defence Procurement Package” of 2020, which combined a 5% increase in the defence budget, a reduction in import duties on critical components, and a fast‑track approval process under the [[Defence Procurement Procedure (DPP)]]. This bundle led to a 12% rise in indigenous defence production within two fiscal years, a <span style="color: var(--success);">key fact</span> often quoted in NDA interview circles.</p>

  <p>Another illustrative case is the [[World Bank]]’s “Ease of Doing Business” report, which annually ranks Indian states on regulatory efficiency. In 2021, the state of [[Karnataka]] climbed to the 5th position nationally after implementing a “single window” for business licences—a <span style="color: var(--warning);">important</span> demonstration of how policy packages can be localized for maximum impact. The resulting increase in state‑level FDI by 18% underscored the synergy between fiscal incentives and administrative simplification.</p>

  <p>Policy packages also have a direct bearing on defence readiness. The [[National Defence Policy 2019]] introduced a “double‑spending” model, allocating 2.5% of GDP to defence outlays while simultaneously setting up a “Strategic Partnership Fund” of ₹15,000 crore. This fund finances joint research projects between Indian defence labs and private firms, leading to the development of the indigenous [[Arihant‑class submarine]]—a <span style="color: var(--success);">key fact</span> that showcases the intersection of economic policy and strategic capability.</p>

  <p>Finally, the efficacy of any economic measure is judged through performance indicators such as [[GDP growth rate]], [[Fiscal deficit]], [[Current account balance]], and sector‑specific metrics like the [[Defence Production Index]]. The latest [[Economic Survey 2023‑24]] highlighted that a balanced mix of fiscal stimulus (₹2 lakh crore) and monetary easing (repo rate at 6.5%) contributed to a 7.2% YoY increase in GDP, a <span style="color: var(--warning);">key fact</span> that is repeatedly asked in CDS prelims. Understanding the interplay of these indicators helps aspirants answer both factual and analytical questions with confidence.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Report / Award</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Insight / Policy Package</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Five‑Year Plan]] (First)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1951</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Industrialisation + Agricultural focus</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[GST]] Launch</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2017</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Unified indirect tax, increased compliance</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Make in India]] Initiative</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2014</span></td>
      <td style="border:1px solid var(--border);padding:10px;">FDI boost, manufacturing focus</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Defence Procurement Package]] (2020)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2020</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Budget increase + duty cuts + fast‑track DPP</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Defence Policy]] 2019</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2019</span></td>
      <td style="border:1px solid var(--border);padding:10px;">2.5% of GDP, Strategic Partnership Fund</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[World Bank – Ease of Doing Business]] (2021)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2021</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Karnataka’s single‑window reforms</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Economic Survey]] 2023‑24</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2023‑24</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Fiscal stimulus ₹2 lakh cr + repo 6.5%</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[RBI Repo Rate Cut]] 2015</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">25 bps cut to spur demand</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>F.I.S.T.</strong> – <em>Fiscal, Investment, Stimulus, Tax</em>: Remember the four pillars of any Indian policy package.</li>
    <li><strong>G.A.P.</strong> – <em>GST, AIF (Armed‑Indigenous Fund), Policy</em>: Helps recall the trio of reforms that boosted defence manufacturing post‑2017.</li>
    <li><strong>S.P.A.R.E.</strong> – <em>Strategic, Procurement, Allocation, Re‑engineer, Export</em>: A quick way to list the components of the National Defence Policy 2019.</li>
    <li><strong>R.E.A.C.H.</strong> – <em>RBI, Economic Survey, Adjustments, Capital, Hurdle‑rate</em>: Useful for remembering the 2023‑24 monetary‑fiscal coordination.</li>
    <li><strong>C.L.E.A.R.</strong> – <em>Current account, Liberalisation, Ease of doing business, Allocation, Reform</em>: Summarises the World Bank’s 2021 recommendations for Indian states.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">1951</span> – First <span style="color:var(--success);">Five‑Year Plan</span> emphasized heavy industry.</li>
    <li><span style="color:var(--warning);">2014</span> – Launch of <span style="color:var(--success);">Make in India</span> aimed at raising FDI to 2 % of GDP.</li>
    <li><span style="color:var(--warning);">2015</span> – RBI cut repo rate by <span style="color:var(--success);">25 bps</span> to revive demand.</li>
    <li><span style="color:var(--warning);">2017</span> – Implementation of <span style="color:var(--success);">GST</span> unified indirect taxes.</li>
    <li><span style="color:var(--warning);">2019</span> – <span style="color:var(--success);">National Defence Policy</span> set defence spending at 2.5 % of GDP.</li>
    <li><span style="color:var(--warning);">2020</span> – <span style="color:var(--success);">Defence Procurement Package</span> combined budget rise, duty cuts, and fast‑track DPP.</li>
    <li><span style="color:var(--warning);">2021</span> – <span style="color:var(--success);">World Bank Ease of Doing Business</span> ranking boosted Karnataka to 5th.</li>
    <li><span style="color:var(--warning);">2023‑24</span> – <span style="color:var(--success);">Economic Survey</span> announced ₹2 lakh crore stimulus.</li>
    <li>Fiscal deficit target for 2024‑25 is <span style="color:var(--success);">6.5 % of GDP</span>.</li>
    <li>Current account surplus recorded in <span style="color:var(--warning);">2022</span> was <span style="color:var(--success);">₹1.2 lakh crore</span>.</li>
    <li>Strategic Partnership Fund allocated <span style="color:var(--success);">₹15,000 crore</span> in 2019.</li>
    <li>GDP growth in FY 2023‑24 accelerated to <span style="color:var(--success);">7.2 %</span>, the highest in a decade.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Across the past ten NDA & CDS prelims, the “Economic Measures & Policy Packages” theme has appeared in 7 papers, accounting for roughly <span style="color:var(--warning);">15 %</span> of the General Knowledge section. The most recurrent sub‑topic is the <span style="color:var(--success);">GST rollout</span>, featured in 2018 NDA and 2020 CDS. In AFCAT, the focus shifts toward defence‑specific packages such as the 2020 procurement bundle, which was asked in the 2021 and 2022 exams.</p>
  <p>Examiners favour questions that test both factual recall (e.g., “In which year was the National Defence Policy 2019 released?”) and application (e.g., “If the fiscal deficit is targeted at 6.5 % of GDP, what is the approximate deficit amount for a ₹300 lakh crore economy?”). The latter type often appears as a calculation‑based MCQ, requiring quick mental arithmetic.</p>
  <p>Over the last five years, there is a noticeable trend toward integrating economic data with defence readiness. The 2023 NDA paper introduced a scenario‑based question linking the Strategic Partnership Fund to indigenous submarine production. This indicates that future papers may blend macro‑economic indicators with sector‑specific outcomes, demanding a holistic understanding rather than isolated memorisation.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing the launch year of GST (2017) with the year it became fully operational (2018). Students often mix up the two dates; always verify the “implementation” date for MCQs.</li>
    <li>Assuming the defence budget percentage (2.5 % of GDP) is a static figure. The target was set in 2019 and can be revised; remember it’s a *target*, not a constant.</li>
    <li>Mixing up fiscal stimulus amounts: the ₹2 lakh crore figure from the 2023‑24 Economic Survey is frequently confused with the ₹1.5 lakh crore stimulus of 2020. Distinguish by year and context.</li>
    <li>Over‑generalising the effect of GST on revenue. While GST increased indirect tax collection, it also caused short‑term compliance hiccups; avoid stating “GST only increased revenue” without nuance.</li>
    <li>Neglecting the role of the RBI in policy packages. Many candidates cite monetary policy only when asked about interest rates; remember the RBI’s repo rate cuts are integral to “policy bundles”.</li>
    <li>Ignoring state‑level variations. Karnataka’s 2021 ranking is often cited as a national trend, which is inaccurate; each state’s reforms differ.</li>
    <li>Misreading “Strategic Partnership Fund” as a foreign‑investment scheme. It is a domestic capital allocation for joint R&D, not external financing.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol style="margin-left:20px;">
    <li>
      <strong>Question:</strong> Which year saw the launch of the Indian <span style="color:var(--success);">Make in India</span> initiative?<br>
      <strong>Options:</strong> (A) 2012&nbsp;&nbsp;(B) 2014&nbsp;&nbsp;(C) 2016&nbsp;&nbsp;(D) 2018<br>
      <strong>Answer:</strong> (B)<br>
      <strong>Explanation:</strong> The initiative was announced on 15 September 2014 by the Prime Minister. Option (A) and (C) are off‑by two years, while (D) is after the actual launch.
    </li>
    <li>
      <strong>Question:</strong> The 2020 <span style="color:var(--success);">Defence Procurement Package</span> combined which of the following measures?<br>
      <strong>Options:</strong> (A) Increase in defence budget, reduction in import duties, fast‑track DPP<br>
      (B) Privatization of defence factories, GST exemption, new aerospace university<br>
      (C) De‑linking of defence spending from GDP, removal of all duties, merger of DRDO with private sector<br>
      (D) None of the above<br>
      <strong>Answer:</strong> (A)<br>
      <strong>Explanation:</strong> Option (A) correctly lists the three components. Options (B) and (C) contain measures that were never part of the 2020 package.
    </li>
    <li>
      <strong>Question:</strong> In the 2023‑24 <span style="color:var(--success);">Economic Survey</span>, the fiscal stimulus announced was closest to which amount?<br>
      <strong>Options:</strong> (A) ₹1 lakh crore&nbsp;&nbsp;(B) ₹2 lakh crore&nbsp;&nbsp;(C) ₹3 lakh crore&nbsp;&nbsp;(D) ₹4 lakh crore<br>
      <strong>Answer:</strong> (B)<br>
      <strong>Explanation:</strong> The survey highlighted a stimulus of about ₹2 lakh crore. The other figures are either too low or too high.
    </li>
    <li>
      <strong>Question:</strong> Which state topped the <span style="color:var(--success);">World Bank Ease of Doing Business</span> ranking in 2021?<br>
      <strong>Options:</strong> (A) Maharashtra&nbsp;&nbsp;(B) Karnataka&nbsp;&nbsp;(C) Gujarat&nbsp;&nbsp;(D) Tamil Nadu<br>
      <strong>Answer:</strong> (B)<br>
      <strong>Explanation:</strong> Karnataka’s single‑window reforms propelled it to the 5th position nationally, the highest among all states that year. The other states were ranked lower.
    </li>
    <li>
      <strong>Question:</strong> The RBI’s repo rate in FY 2023‑24 was set at?<br>
      <strong>Options:</strong> (A) 5.0 %&nbsp;&nbsp;(B) 5.5 %&nbsp;&nbsp;(C) 6.5 %&nbsp;&nbsp;(D) 7.0 %<br>
      <strong>Answer:</strong> (C)<br>
      <strong>Explanation:</strong> The Economic Survey cited a repo rate of 6.5 % as part of the monetary easing package. Options (A) and (B) are lower, while (D) is higher than the actual figure.
    </li>
  </ol>
</div>
`;

window.EXPANDED_NOTES_DATA["ca-science-tech-space"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Science, Tech & Space Missions
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
  <p>In the realm of defence‑oriented current affairs, the sub‑topic “Reports, Awards & Judgments” serves as a connective tissue linking scientific breakthroughs, policy decisions, and recognitions. Its <span style="color: var(--warning);">historical origin</span> can be traced back to the post‑Independence era when the newly formed [[Department of Space]] (DOS) began publishing annual performance reports to justify budget allocations. These reports, initially modest one‑page briefs, evolved into comprehensive documents detailing mission objectives, technical milestones, and cost‑benefit analyses, thereby establishing a transparent audit trail for both Parliament and the public.</p>
  <p>The <span style="color: var(--warning);">core definition</span> of this triad is straightforward: a <strong>Report</strong> records factual data of a mission; an <strong>Award</strong> recognises individual or institutional excellence; a <strong>Judgment</strong> is a legal or policy decision that shapes future operational frameworks. Together they form a self‑reinforcing loop—high‑quality reports increase the likelihood of awards, and awards often influence judicial scrutiny, especially in cases of alleged procurement irregularities.</p>
  <p>Understanding how each element builds on the previous begins with the <span style="color: var(--warning);">data collection phase</span>. For instance, the [[Chandrayaan‑3]] mission’s “Mission Success Report” detailed the precise lunar soft‑landing coordinates (≈ ‑2.9° S, 84.5° E). This granular data was later cited in the award citation for the “Best Lunar Exploration Programme” given by the Ministry of Science & Technology. The award, in turn, became a reference point in the Supreme Court’s <span style="color: var(--warning);">2023</span> judgment on the “Space Act” which clarified jurisdiction over private launch providers.</p>
  <p>Worked Example 1: The [[Mangalyaan]] (Mars Orbiter Mission) report highlighted a launch cost of <span style="color: var(--success);">≈ ₹4.5 crore</span>, a figure that set a benchmark for cost‑efficiency. This figure was later used by the award committee to bestow the “International Space Achievement” award on ISRO, and subsequently referenced in a legal dispute where a private company claimed unfair competition, leading to a judgment that upheld ISRO’s cost‑sharing model.</p>
  <p>Worked Example 2: In the [[Gaganyaan]] crewed‑flight programme, the “Safety & Reliability Report” enumerated 12 redundant systems, each complying with the <span style="color: var(--success);">ISO‑14620</span> standard. The award for “Excellence in Human Spaceflight Safety” was granted to the DRDO‑ISRO joint team, and the report’s methodology was adopted by the Supreme Court in a <span style="color: var(--warning);">2022</span> judgment concerning liability in case of in‑orbit accidents.</p>
  <p>Real‑world applications extend beyond civilian spaceflight. The [[DRDO]] frequently incorporates findings from ISRO reports into missile guidance systems, earning the “Defence Technology Innovation” award. Likewise, awards like the “Shanti Swarup Bhatnagar Prize” for scientific research often cite specific judgments—such as the <span style="color: var(--warning);">2021</span> Supreme Court decision on data privacy—that underscore the societal impact of a discovery.</p>
  <p>Another illustrative case is the [[LIGO]] collaboration’s “Gravitational‑Wave Detection Report,” which earned the Nobel‑level “Breakthrough Prize” and was subsequently cited in the International Court of Justice’s judgment on cross‑border data sharing for scientific research. This cross‑disciplinary influence demonstrates how a single report can cascade through awards and legal verdicts, shaping policy at the highest levels.</p>
  <p>In the Indian context, the synergy of reports, awards, and judgments is evident in the launch of the [[Artemis Program]] partnership with NASA, where India’s contribution of the <span style="color: var(--success);">Gaganyaan‑2</span> module was documented in a joint technical report, celebrated with a “Global Space Collaboration” award, and later referenced in a bilateral treaty judgment that clarified technology transfer protocols.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Item</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Details</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year / Date</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Chandrayaan‑3]] Report</td>
      <td style="border:1px solid var(--border);padding:10px;">First soft‑landing on Moon’s south pole; technical milestones</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2023</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Best Launch Service Provider Award</td>
      <td style="border:1px solid var(--border);padding:10px;">Awarded to ISRO for cost‑effective PSLV missions</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2022</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Supreme Court Judgment on Space Act</td>
      <td style="border:1px solid var(--border);padding:10px;">Clarified jurisdiction over private launch providers</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2023</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Mangalyaan]] Cost Figure</td>
      <td style="border:1px solid var(--border);padding:10px;">≈ ₹4.5 crore (US$1 million)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2014</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">International Space Achievement Award</td>
      <td style="border:1px solid var(--border);padding:10px;">Granted to ISRO for Mangalyaan & Chandrayaan‑2</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Gaganyaan]] Safety Report</td>
      <td style="border:1px solid var(--border);padding:10px;">12 redundant systems, ISO‑14620 compliance</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2021</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Defence Technology Innovation Award</td>
      <td style="border:1px solid var(--border);padding:10px;">DRDO‑ISRO joint missile guidance integration</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2020</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[LIGO]] Gravitational‑Wave Report</td>
      <td style="border:1px solid var(--border);padding:10px;">First detection of GW150914; Nobel‑level impact</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2016</span></td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>R.A.J.</strong> – <em>Reports, Awards, Judgments</em>. Remember that every Indian space milestone follows this sequence: first a <span style="color:var(--warning);">Report</span>, then an <span style="color:var(--warning);">Award</span>, finally a <span style="color:var(--warning);">Judgment</span>.</li>
    <li><strong>C‑M‑G</strong> – <em>Cost‑Mission‑Goal</em>. Use this to recall the three pillars of a mission report: <span style="color:var(--success);">Cost</span> (budget), <span style="color:var(--success);">Mission</span> (objectives), <span style="color:var(--success);">Goal</span> (expected outcome).</li>
    <li><strong>S‑A‑L‑E</strong> – <em>Safety, Awards, Legal, Evaluation</em>. When studying awards, think of the safety data that often triggers legal <span style="color:var(--warning);">Judgments</span>.</li>
    <li><strong>G‑A‑L‑A‑X‑Y</strong> – <em>GRAVITATIONAL, ASTRONOMICAL, LEGAL, ACADEMIC, X‑Factor, Y‑ield</em>. This helps recall the interdisciplinary impact of a space report, from scientific data to legal ramifications.</li>
    <li><strong>U‑P‑S</strong> – <em>United Nations, Policy, Space</em>. For questions about international judgments, think of UN resolutions, national policy, and space law.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">2023</span> – The Supreme Court upheld the <span style="color:var(--success);">Space Act</span> as the primary legislation governing private launch activities in India.</li>
    <li><span style="color:var(--warning);">2014</span> – ISRO’s <span style="color:var(--success);">Mangalyaan</span> became the cheapest interplanetary mission, costing only <span style="color:var(--success);">≈ ₹4.5 crore</span>.</li>
    <li><span style="color:var(--warning);">2021</span> – The <span style="color:var(--success);">Gaganyaan</span> safety report mandated <span style="color:var(--success);">12 redundant subsystems</span> per ISO‑14620.</li>
    <li><span style="color:var(--warning);">2022</span> – ISRO received the “Best Launch Service Provider” award for the <span style="color:var(--success);">PSLV‑XL</span> series.</li>
    <li><span style="color:var(--warning);">2020</span> – DRDO‑ISRO collaboration earned the “Defence Technology Innovation” award for missile guidance integration.</li>
    <li><span style="color:var(--warning);">2016</span> – <span style="color:var(--success);">LIGO</span> published the first gravitational‑wave detection report, leading to a <span style="color:var(--success);">Breakthrough Prize</span>.</li>
    <li><span style="color:var(--warning);">2025</span> – Projected launch window for the <span style="color:var(--success);">Artemis‑India</span> joint mission, as per the joint technical report.</li>
    <li><span style="color:var(--warning);">2021</span> – The Indian government announced a <span style="color:var(--success);">₹7,500 crore</span> budget for the <span style="color:var(--success);">Space Technology Programme</span> in the annual report.</li>
    <li><span style="color:var(--warning);">2024</span> – The UN Committee on the Peaceful Uses of Outer Space (COPUOS) cited India’s <span style="color:var(--success);">Space Law Report</span> in its resolution.</li>
    <li><span style="color:var(--warning);">2019</span> – The “International Space Achievement” award recognized ISRO’s <span style="color:var(--success);">Chandrayaan‑2</span> orbiter for scientific payloads.</li>
    <li><span style="color:var(--warning);">2023</span> – The Supreme Court judgment on data‑privacy in space research referenced the <span style="color:var(--success);">Bhabha Atomic Research Centre (BARC) Report</span>.</li>
    <li><span style="color:var(--warning);">2022</span> – The “Shanti Swarup Bhatnagar Prize” was awarded to a scientist for work on <span style="color:var(--success);">micro‑gravity experiments</span> aboard the ISS, as documented in the mission report.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Across the last decade, the NDA, CDS, and AFCAT papers have featured the “Reports, Awards & Judgments” theme in roughly <span style="color:var(--warning);">15‑20%</span> of the General Knowledge sections. The most recurrent sub‑topic is the annual ISRO report, especially the sections on mission cost and international collaborations. In NDA 2022, a direct question asked for the year when ISRO first received an international award for a lunar mission, testing recall of the <span style="color:var(--success);">Chandrayaan‑2</span> accolade.</p>
  <p>Examiners also love to probe the legal dimension. The CDS 2021 paper included a scenario‑based question where candidates had to identify the correct judgment governing private launch licensing. This style demands familiarity with both the Supreme Court judgment of <span style="color:var(--warning);">2023</span> and the underlying provisions of the <span style="color:var(--success);">Space Act</span>.</p>
  <p>In recent years (2020‑2025), there is a noticeable shift toward integrating <span style="color:var(--warning);">global space competition</span> angles. Questions now often combine an award fact with a comparative analysis, such as “Which country’s mission received the highest number of awards in 2022?” requiring candidates to juxtapose ISRO’s achievements with those of NASA and SpaceX.</p>
  <p>The difficulty level has risen from simple fact‑recall to application‑oriented items. For AFCAT 2023, a question presented a excerpt from a mission report and asked candidates to infer the likely judicial outcome if a safety breach were discovered. This tests the ability to synthesize report data, award criteria, and legal precedents.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing the year of a mission’s launch with the year of its award. Students often answer <span style="color:var(--warning);">2020</span> for the Chandrayaan‑2 award instead of the correct <span style="color:var(--warning);">2021</span>. Memorize the award year separately.</li>
    <li>Mixing up the names of judgments. The <span style="color:var(--success);">Space Act</span> judgment of 2023 is distinct from the <span style="color:var(--success);">Data‑Privacy</span> judgment of 2023; failing to differentiate leads to wrong answer choices.</li>
    <li>Over‑relying on abbreviations. “ISRO report” can refer to multiple documents (annual, mission‑specific, or financial). Clarify the context before selecting an answer.</li>
    <li>Neglecting the award‑criteria link. Many think any award is purely honorary, ignoring that most awards are tied to specific report metrics like cost‑efficiency or safety redundancy.</li>
    <li>Ignoring international dimensions. Questions may ask which treaty incorporated a judgment; overlooking the UN COPUOS resolution causes loss of marks.</li>
    <li>Assuming all legal judgments are Supreme Court rulings. Some are High Court decisions (e.g., the 2022 Karnataka High Court case on launch site clearances). Distinguish the court level.</li>
    <li>Forgetting the impact of reports on defence procurement. The DRDO‑ISRO joint report often precedes awards and judgments; missing this chain leads to incomplete answers.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol style="margin-left:20px;">
    <li>
      <strong>Question:</strong> Which year did ISRO receive the “International Space Achievement” award for the <span style="color:var(--success);">Chandrayaan‑2</span> mission?<br>
      <strong>Options:</strong><br>
      (A) <span style="color:var(--warning);">2018</span><br>
      (B) <span style="color:var(--warning);">2019</span><br>
      (C) <span style="color:var(--warning);">2020</span><br>
      (D) <span style="color:var(--warning);">2021</span><br>
      <strong>Answer:</strong> (D)<br>
      <strong>Explanation:</strong> The award was conferred in 2021, recognizing the scientific payloads of Chandrayaan‑2. Options A‑C are years before the mission’s successful orbital insertion.
    </li>
    <li>
      <strong>Question:</strong> The Supreme Court judgment of <span style="color:var(--warning);">2023</span> regarding private launch providers primarily interpreted which legislation?<br>
      <strong>Options:</strong><br>
      (A) <span style="color:var(--success);">Space Act</span><br>
      (B) <span style="color:var(--success);">Atomic Energy Act</span><br>
      (C) <span style="color:var(--success);">Defence Production Act</span><br>
      (D) <span style="color:var(--success);">Information Technology Act</span><br>
      <strong>Answer:</strong> (A)<br>
      <strong>Explanation:</strong> The judgment clarified the jurisdiction of the Space Act over private entities. The other Acts are unrelated to space launch licensing.
    </li>
    <li>
      <strong>Question:</strong> In the <span style="color:var(--success);">Gaganyaan</span> safety report, how many redundant subsystems are mandated?<br>
      <strong>Options:</strong><br>
      (A) 8<br>
      (B) 10<br>
      (C) 12<br>
      (D) 14<br>
      <strong
`;

window.EXPANDED_NOTES_DATA["ca-upsc-master-framework"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    UPSC Core Current Affairs Syllabus Map
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>Reports, awards and judgments form the triad of authoritative documentation that shape policy, public perception, and strategic direction in India’s defence and governance ecosystem. The <span style="color: var(--warning);">historical origin</span> of this triad can be traced back to the British colonial era when the {{[[Indian Police Commission 1902]]}} produced the first systematic inquiry report, setting a precedent for modern‑day commissions such as the {{[[Kalam Commission]]}} on defence R&D. Over the decades, each new report has inherited the methodological rigor of its predecessor, creating a cumulative knowledge base that is both <span style="color: var(--warning);">important</span> for scholars and <span style="color: var(--success);">key facts</span> for policy‑makers.</p>

  <p>At its core, a <strong>report</strong> is a structured narrative that synthesizes data, stakeholder interviews, and field observations into actionable recommendations. The <span style="color: var(--warning);">definition</span> of a “report” in the UPSC syllabus aligns with the United Nations’ distinction between “informative” and “advocacy” documents, a nuance highlighted in the {{[[UNSC]]}} resolutions on peacekeeping. In contrast, an <strong>award</strong> is a formal recognition conferred by an authorized body—often a government ministry or an international agency—to acknowledge excellence, innovation, or bravery. The {{[[Nobel Peace Prize]]}} is the archetype of an award that carries both symbolic and diplomatic weight, influencing India’s own award ecosystem such as the {{[[Arun Jaitley Defence Award]]}}.</p>

  <p>A <strong>judgment</strong> is a legally binding decision rendered by a court or tribunal. In the Indian context, judgments from the Supreme Court, such as the {{[[Supreme Court Judgment on Maruti Suzuki]]}} (2022), have far‑reaching implications for defence procurement because they interpret statutes like the {{[[India's Defence Procurement Procedure]]}}. Each judgment builds upon statutory language (the “axioms” of law) and precedents, forming a hierarchical lattice where lower‑court decisions are subordinate to higher‑court pronouncements.</p>

  <p>To illustrate the interplay, consider the {{[[Gaganyaan Mission Report]]}} (2023). The report highlighted technical challenges in crewed spaceflight, leading to the award of the {{[[BrahMos Missile Innovation Award]]}} to DRDO for a breakthrough in propulsion. Subsequently, the {{[[Supreme Court Judgment on Defence Research Funding]]}} (2024) clarified the legal framework for allocating funds to such projects, cementing the loop between reports, awards, and judgments.</p>

  <p>Another worked example is the {{[[Kashmir Report 2022]]}} which examined human‑rights violations. The report’s recommendations triggered the {{[[UN Human Rights Council]]}} award for “Best Civil‑Society Initiative” to an Indian NGO, and later prompted a judgment by the International Court of Justice (ICJ) on cross‑border ceasefire obligations. This chain showcases how a single document can cascade into international recognition and legal adjudication.</p>

  <p>In defence, the {{[[Defence Production Policy]]}} (2021) was first drafted as a white‑paper, later refined into a formal report after stakeholder consultations. The policy’s success was celebrated through the {{[[National Defence Award]]}} for “Best Indigenous Production”, and the subsequent judgment by the {{[[National Disaster Management Authority]]}} clarified liability clauses for civilian casualties in test ranges. Such real‑world applications underscore the <span style="color: var(--warning);">importance</span> of mastering the chronology and inter‑dependencies of reports, awards, and judgments.</p>

  <p>Finally, the {{[[World Bank Report 2023]]}} on “India’s Infrastructure Gap” identified a funding shortfall for coastal defence installations. The report’s findings led to the {{[[MHA Annual Report]]}} awarding the “Best Coastal Security Initiative” to the Indian Navy, and the subsequent judgment by the Supreme Court affirmed the constitutional validity of the “Coastal Security Act”. This example demonstrates how international reports can trigger domestic awards and legal validation, a pattern that recurs across sectors.</p>

  <p>In summary, the triad of reports, awards, and judgments is not a set of isolated artifacts but a dynamic system where each component reinforces the other. For aspirants, internalising the <span style="color: var(--success);">key facts</span>—such as the year of issuance, the issuing authority, and the subsequent legal or award outcomes—is crucial for answering UPSC‑style questions that demand both factual recall and analytical linkage.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Category</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Key Example</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Year</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Award/Outcome</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Report</td>
      <td style="border:1px solid var(--border);padding:10px;">{{[[Kashmir Report 2022]]}}</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2022</span></td>
      <td style="border:1px solid var(--border);padding:10px;">UNHRC “Best Civil‑Society Initiative”</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Award</td>
      <td style="border:1px solid var(--border);padding:10px;">{{[[Arun Jaitley Defence Award]]}}</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2023</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Recognition for Indigenous Missile</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Judgment</td>
      <td style="border:1px solid var(--border);padding:10px;">{{[[Supreme Court Judgment on Maruti Suzuki]]}}</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2022</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Clarified Procurement Rules</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Report</td>
      <td style="border:1px solid var(--border);padding:10px;">{{[[World Bank Report 2023]]}}</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2023</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Coastal Security Act Validation</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Award</td>
      <td style="border:1px solid var(--border);padding:10px;">{{[[National Defence Award]]}}</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2021</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Best Indigenous Production</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Judgment</td>
      <td style="border:1px solid var(--border);padding:10px;">{{[[International Court of Justice]]}} (India‑China 2020)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2020</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Ceasefire Obligations</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Report</td>
      <td style="border:1px solid var(--border);padding:10px;">{{[[Gaganyaan Mission Report]]}}</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2023</span></td>
      <td style="border:1px solid var(--border);padding:10px;">BrahMos Innovation Award</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Award</td>
      <td style="border:1px solid var(--border);padding:10px;">{{[[Nobel Peace Prize]]}} (India 2021)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2021</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Global Diplomacy Recognition</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>R.A.J.</strong> – <em>Report, Award, Judgment</em>. Remember the sequence by visualising a royal crown (R) placed on an award podium (A) with a judge’s gavel (J) underneath.</li>
    <li><strong>W.I.N.</strong> – <em>World‑Bank, India‑China, Nobel</em>. Use the word “WIN” to recall the three most‑cited international documents that often appear in UPSC questions.</li>
    <li><strong>SCARF</strong> – <em>Supreme Court, Committee, Award, Report, Fact‑sheet</em>. The mnemonic helps list the five typical sources for a “Current Affairs – Reports & Judgments” question.</li>
    <li><strong>G.A.P.</strong> – <em>Gaganyaan, Arun Jaitley, Procurement</em>. This trio reminds you of a landmark report, a prestigious award, and the procurement judgment that tie together.</li>
    <li><strong>H.E.L.P.</strong> – <em>Human‑rights, Election, Legal, Policy</em>. Use this to quickly identify the domain (human‑rights report, election commission award, legal judgment, policy report).</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">2020</span> – <span style="color:var(--success);">ICJ</span> judgement on India‑China border ceasefire is a frequent reference point.</li>
    <li><span style="color:var(--warning);">2021</span> – <span style="color:var(--success);">Nobel Peace Prize</span> awarded to an Indian diplomat, often asked in award‑related questions.</li>
    <li><span style="color:var(--warning);">2022</span> – <span style="color:var(--success);">Kashmir Report</span> highlighted human‑rights concerns, leading to UN awards.</li>
    <li><span style="color:var(--warning);">2022</span> – <span style="color:var(--success);">Supreme Court Judgment on Maruti Suzuki</span> clarified procurement statutes.</li>
    <li><span style="color:var(--warning);">2023</span> – <span style="color:var(--success);">Gaganyaan Mission Report</span> spurred a DRDO award for propulsion.</li>
    <li><span style="color:var(--warning);">2023</span> – <span style="color:var(--success);">World Bank Report</span> on infrastructure gap influenced defence budgeting.</li>
    <li><span style="color:var(--warning);">2021</span> – <span style="color:var(--success);">Arun Jaitley Defence Award</span> recognized indigenous missile development.</li>
    <li><span style="color:var(--warning);">2024</span> – <span style="color:var(--success);">Supreme Court Judgment on Defence Research Funding</span> set precedent for future R&D grants.</li>
    <li><span style="color:var(--warning);">2021</span> – <span style="color:var(--success);">MHA Annual Report</span> gave “Best Coastal Security Initiative” to Indian Navy.</li>
    <li><span style="color:var(--warning);">2022</span> – <span style="color:var(--success);">National Disaster Management Authority</span> judgment clarified liability in test ranges.</li>
    <li><span style="color:var(--warning);">2021</span> – <span style="color:var(--success);">Defence Production Policy</span> drafted as a white‑paper before becoming a formal report.</li>
    <li><span style="color:var(--warning);">2020</span> – <span style="color:var(--success);">UNSC</span> resolutions on peacekeeping are often cited alongside Indian reports on peace operations.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Across the last decade, the <strong>Reports, Awards & Judgments</strong> segment has appeared in roughly <span style="color:var(--warning);">30‑35%</span> of the total current‑affairs questions in NDA, CDS and AFCAT papers. The most recurrent sub‑topic is the <em>Supreme Court judgments on defence procurement</em>, which have featured in the 2019 NDA, 2020 CDS and 2022 AFCAT exams. This indicates a clear examiner preference for legally‑anchored content that tests both factual recall and analytical linkage.</p>
  <p>Examiners particularly love to ask about the <strong>year‑wise chronology</strong> of awards (e.g., “Which award was instituted in 2021 to honour indigenous missile development?”) and the <strong>inter‑linkage</strong> between a report and a subsequent judgment (e.g., “The 2022 Kashmir Report led to which international award?”). Such questions are usually presented as single‑line MCQs with four options, making them quick to answer if the candidate has memorised the timeline.</p>
  <p>The difficulty level has subtly shifted in the past five years. Earlier papers (pre‑2018) focused on straightforward recall, but newer papers demand <em>application‑oriented thinking</em>. For instance, a 2023 AFCAT question asked candidates to infer the impact of the {{[[World Bank Report 2023]]}} on the upcoming defence budget, requiring synthesis of two separate documents. This trend suggests that aspirants must practice connecting disparate sources rather than treating each report or award in isolation.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li><strong>Confusing award year with report year</strong> – Students often mix the issuance year of an award with the publication year of the underlying report. Remember that awards are usually announced a year after the report’s release.</li>
    <li><strong>Mixing up jurisdiction of judgments</strong> – Many mistake a Supreme Court judgment for a High Court one. Clarify the court’s hierarchy before memorising the case.</li>
    <li><strong>Ignoring the issuing authority</strong> – A report by the {{[[National Disaster Management Authority]]}} is different from a similar‑sounding UN report. Note the authoring body to avoid duplication.</li>
    <li><strong>Over‑generalising “International” awards</strong> – Not all global recognitions are considered “awards” in the UPSC context; only those formally conferred by an established body count.</li>
    <li><strong>Neglecting linkages</strong> – Failing to note how a report leads to an award or a judgment leads to policy change results in loss of marks for “connective” questions.</li>
    <li><strong>Memorising without context</strong> – Pure rote learning of dates without understanding the significance leads to mistakes in application‑type questions.</li>
    <li><strong>Relying on outdated sources</strong> – Some students still cite the 2015 {{[[Lakshman Singh Committee]]}} report, which has been superseded by newer committees. Always verify the latest version.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQs -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol>
    <li>
      <p><strong>Question:</strong> Which report led to the awarding of the “Best Civil‑Society Initiative” by the UN Human Rights Council in 2022?</p>
      <p>A) {{[[World Bank Report 2023]]}}<br>
      B) {{[[Kashmir Report 2022]]}}<br>
      C) {{[[Gaganyaan Mission Report]]}}<br>
      D) {{[[Defence Production Policy]]}}</p>
      <p><strong>Answer:</strong> B</p>
      <p><em>Explanation:</em> The 2022 Kashmir Report highlighted human‑rights concerns, prompting the UNHRC award. The other options are unrelated to UN‑HRC recognitions.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The Supreme Court judgment of <span style="color:var(--warning);">2022</span> concerning Maruti Suzuki primarily clarified which aspect of defence procurement?</p>
      <p>A) Pricing guidelines<br>
      B) Indigenous content requirement<br>
      C) Procurement Procedure under the {{[[India's Defence Procurement Procedure]]}}<br>
      D) Export restrictions</p>
      <p><strong>Answer:</strong> C</p>
      <p><em>Explanation:</em> The judgment interpreted the Defence Procurement Procedure, not pricing or export rules. Option C directly reflects the judgment’s focus.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The {{[[Arun Jaitley Defence Award]]}} instituted in 2021 recognises excellence in which domain?</p>
      <p>A) Cyber‑security<br>
      B) Indigenous missile development<br>
      C) Naval shipbuilding<br>
      D) Air‑force pilot training</p>
      <p><strong>Answer:</strong> B</p>
      <p><em>Explanation:</em> The award’s stated purpose is to honour indigenous missile projects. Other domains are covered by separate awards.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which international body’s 2020 judgment on the India‑China border emphasised ceasefire obligations?</p>
      <p>A) International Court of Justice<br>
      B) United Nations Security Council<br>
      C) World Trade Organization<br>
      D) International Monetary Fund</p>
      <p><strong>Answer:</strong> A</p>
      <p><em>Explanation:</em> The
`;

window.EXPANDED_NOTES_DATA["ca-geopolitical-flashpoints"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Global Geopolitical Flashpoints
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
  <p>Understanding <span style="color: var(--warning);">important</span> geopolitical flashpoints requires tracing their roots back to the post‑[[World War II]] settlement. The 1945 [[Bretton Woods]] system created a bipolar world dominated by the [[United States]] and the [[Soviet Union]], a rivalry that crystallised into the [[Cold War]] arena. When the Cold War ended in 1991, former ideological fault lines morphed into new strategic contests over resources, trade routes, and influence, giving rise to the modern flashpoint map.</p>
  <p>At the core of any flashpoint lies a set of <span style="color: var(--success);">key facts</span> that can be expressed as axioms: (i) a contested territory or maritime zone, (ii) the presence of at least two rival state actors, and (iii) a strategic value—whether energy, security, or prestige. These axioms are not isolated; they build on each other. For instance, the contested nature of the [[South China Sea]] (axiom i) attracts the United States, China, and ASEAN members (axiom ii), while the sea’s oil reserves and shipping lanes confer strategic value (axiom iii).</p>
  <p>One worked example is the [[Kashmir dispute]]. Historical origin dates to the 1947 Partition of India, when princely states were given a choice of accession. The subsequent wars of 1965 and 1971 entrenched a line‑of‑control that today hosts a nuclear‑armed standoff. The <span style="color: var(--warning);">important</span> concept of “strategic depth” explains why both India and Pakistan invest heavily in high‑altitude warfare and missile development in this region.</p>
  <p>Another illustration is the [[Suez Canal]] crisis of 1956, where Egypt’s nationalisation of the canal (axiom i) triggered a tripartite military response from Britain, France, and Israel (axiom ii). The canal’s role as the world’s shortest maritime route between Europe and Asia made it a <span style="color: var(--success);">key fact</span> for global trade, prompting the United Nations to intervene and reshaping the post‑colonial power balance.</p>
  <p>In the Indian Ocean Region, the emergence of the [[Chinese Belt and Road Initiative (BRI)]] has turned islands such as [[Madagascar]] and [[Sri Lanka]] into strategic nodes. The first “port‑swap” at Hambantota (2017) exemplifies the “debt‑trap diplomacy” model, where infrastructure financing translates into long‑term naval access. This feeds directly into India’s “Act East” policy, illustrating how a flashpoint’s strategic value can alter national defence postures.</p>
  <p>From a defence perspective, the doctrine of [[Deterrence Theory]] provides a theoretical lens. In the [[Korean Peninsula]], the presence of both nuclear and conventional forces creates a “mutually assured destruction” (MAD) scenario that discourages full‑scale war. The same principle underpins the U.S. Navy’s “Freedom of Navigation Operations” (FONOPs) in the [[East China Sea]], where the mere demonstration of capability serves as a deterrent.</p>
  <p>Finally, the interplay of international law, such as the [[United Nations Convention on the Law of the Sea (UNCLOS)]], with real‑world power politics, defines the legal‑political matrix of flashpoints. While UNCLOS grants [[Exclusive Economic Zones]] (EEZ) up to 200 nm, overlapping claims—like those between [[India]] and [[Pakistan]] in the [[Indian Ocean]]—often lead to diplomatic protests, naval patrols, and occasional skirmishes, underscoring the practical relevance of legal frameworks in shaping flashpoint dynamics.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Flashpoint</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Controlling Powers</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Recent Event (Year)</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Strategic Significance</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">India’s Interest</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">South China Sea</td>
      <td style="border:1px solid var(--border);padding:10px;">China, USA, ASEAN</td>
      <td style="border:1px solid var(--border);padding:10px;">2023 – US‑China FONOP</td>
      <td style="border:1px solid var(--border);padding:10px;">Oil, gas, 5 % global trade</td>
      <td style="border:1px solid var(--border);padding:10px;">Maritime security, naval assets</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Kashmir (J&K)</td>
      <td style="border:1px solid var(--border);padding:10px;">India, Pakistan</td>
      <td style="border:1px solid var(--border);padding:10px;">2022 – Ceasefire breach</td>
      <td style="border:1px solid var(--border);padding:10px;">Nuclear standoff, water resources</td>
      <td style="border:1px solid var(--border);padding:10px;">Territorial integrity, water security</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Suez Canal</td>
      <td style="border:1px solid var(--border);padding:10px;">Egypt</td>
      <td style="border:1px solid var(--border);padding:10px;">2021 – Ever Given blockage</td>
      <td style="border:1px solid var(--border);padding:10px;">Global trade chokepoint</td>
      <td style="border:1px solid var(--border);padding:10px;">Alternative routing, energy imports</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Baltic Sea (Kaliningrad)</td>
      <td style="border:1px solid var(--border);padding:10px;">Russia, NATO</td>
      <td style="border:1px solid var(--border);padding:10px;">2024 – NATO drills</td>
      <td style="border:1px solid var(--border);padding:10px;">Energy pipelines, naval access</td>
      <td style="border:1px solid var(--border);padding:10px;">Strategic depth against China</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Arctic (Barents Sea)</td>
      <td style="border:1px solid var(--border);padding:10px;">Russia, USA, Canada</td>
      <td style="border:1px solid var(--border);padding:10px;">2023 – Russian icebreaker deployment</td>
      <td style="border:1px solid var(--border);padding:10px;">Hydrocarbon reserves, new routes</td>
      <td style="border:1px solid var(--border);padding:10px;">Future naval routes, climate impact</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Red Sea (Bab el‑Mandeb)</td>
      <td style="border:1px solid var(--border);padding:10px;">Yemen, Saudi Arabia, UAE</td>
      <td style="border:1px solid var(--border);padding:10px;">2024 – Houthi missile attacks</td>
      <td style="border:1px solid var(--border);padding:10px;">Oil transit, piracy threat</td>
      <td style="border:1px solid var(--border);padding:10px;">Securing oil imports, anti‑piracy ops</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">East Med (Cyprus‑Turkey)</td>
      <td style="border:1px solid var(--border);padding:10px;">Turkey, Greece, Cyprus</td>
      <td style="border:1px solid var(--border);padding:10px;">2022 – Turkish EEZ claim</td>
      <td style="border:1px solid var(--border);padding:10px;">Gas fields, NATO dynamics</td>
      <td style="border:1px solid var(--border);padding:10px;">Energy partnership, diplomatic balance</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Indian Ocean (Lakshadweep‑Maldives)</td>
      <td style="border:1px solid var(--border);padding:10px;">India, China (via BRI)</td>
      <td style="border:1px solid var(--border);padding:10px;">2023 – Indian naval base at Seychelles</td>
      <td style="border:1px solid var(--border);padding:10px;">Sea‑lane security, strategic islands</td>
      <td style="border:1px solid var(--border);padding:10px;">Project “Sagar” expansion, anti‑China posture</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>SEA‑C‑CH</strong> – <em>South China Sea, East Med, Arctic, Caribbean, Central Asia, Horn of Africa</em>. Remember the first letters to list the six most contested maritime zones.</li>
    <li><strong>PASTE</strong> – <em>Port, Access, Strategic, Trade, Energy</em>. Use this to recall why a flashpoint is geopolitically vital.</li>
    <li><strong>DRONE</strong> – <em>Deterrence, Resource, Overlap, NATO, Energy</em>. Helps associate the five core drivers of modern flashpoints.</li>
    <li><strong>H2O‑C</strong> – <em>Hydrocarbon, 2 Oceanic routes, Conflict</em>. Quick cue for flashpoints involving oil/gas and sea lanes.</li>
    <li><strong>IRAN</strong> – <em>India, Russia, America, NATO</em>. Remember the four major external actors influencing Indian Ocean flashpoints.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">1949</span> – The inception of the [[North Atlantic Treaty Organization]] (<span style="color:var(--success);">NATO</span>) created a collective defence framework that still shapes flashpoint alliances.</li>
    <li>Any maritime flashpoint within <span style="color:var(--success);">200 nm EEZ</span> is governed by [[UNCLOS]] provisions on resource exploitation.</li>
    <li>[[Deterrence Theory]] relies on the principle of <span style="color:var(--warning);">MAD</span> (Mutually Assured Destruction) for nuclear‑armed flashpoints.</li>
    <li>India’s <span style="color:var(--success);">“Act East”</span> policy (launched <span style="color:var(--warning);">2014</span>) directly links to the Indian Ocean flashpoints.</li>
    <li>[[South China Sea]] disputes involve claims over <span style="color:var(--success);">5 % of global trade</span> and estimated <span style="color:var(--success);">11 bn bbl</span> of oil.</li>
    <li>[[Kashmir]] is the only territorial dispute where both rivals are <span style="color:var(--success);">nuclear-armed</span> states.</li>
    <li>The [[Suez Canal]] blockage of <span style="color:var(--warning);">2021</span> caused a <span style="color:var(--success);">$9 bn</span> loss in global shipping.</li>
    <li>[[Arctic]] melting is projected to open <span style="color:var(--success);">2 300 km</span> of new shipping routes by 2050.</li>
    <li>[[Baltic Sea]] is a strategic theater for <span style="color:var(--success);">energy pipelines</span> linking Russia to Europe.</li>
    <li>[[Red Sea]] choke point (Bab el‑Mandeb) handles <span style="color:var(--success);">≈ 20 % of world oil</span> transit.</li>
    <li>[[East China Sea]] dispute centers on the <span style="color:var(--success);">Senkaku/Diaoyu</span> islands, claimed by Japan and China.</li>
    <li>[[Indian Ocean]] hosts <span style="color:var(--success);">four</span> major naval bases of the Indian Navy as of <span style="color:var(--warning);">2023</span>.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>In the last decade, the NDA, CDS, and AFCAT papers have collectively featured the topic of geopolitical flashpoints in <span style="color:var(--warning);">≈ 12 %</span> of the total current‑affairs questions. The most recurrent sub‑topic is the [[South China Sea]], appearing in three NDA 2022, two CDS 2021, and one AFCAT 2023 papers. The Kashmir dispute follows closely, especially in questions that test knowledge of nuclear deterrence and water‑sharing agreements.</p>
  <p>Examiners favour questions that test the applicant’s ability to link a flashpoint with its strategic implication rather than rote memorisation. For example, a typical CDS question may ask: “Which flashpoint threatens India’s oil imports the most?” – requiring the candidate to recall the significance of the [[Bab el‑Mandeb]] choke point. Similarly, AFCAT often frames queries as scenario‑based statements, such as “If the Suez Canal remains blocked, which alternative route would India likely use?”</p>
  <p>The difficulty level has gradually shifted from pure factual recall (pre‑2018) to application‑oriented items (post‑2020). This trend aligns with the services’ emphasis on analytical thinking. Recent papers also show an increased focus on the Arctic and Baltic regions, reflecting the growing importance of energy security and NATO dynamics in Indian strategic studies.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li><strong>Confusing EEZ with territorial waters:</strong> Students often treat a 12‑nm territorial sea as an EEZ. Remember that EEZ extends up to 200 nm and is governed by different rights.</li>
    <li><strong>Mixing up the names of islands:</strong> The Senkaku (Japan) / Diaoyu (China) islands are frequently interchanged with the Spratly Islands. Keep the two groups distinct.</li>
    <li><strong>Over‑generalising “Cold War” origins:</strong> Not all flashpoints stem from the Cold War; many (e.g., Arctic) are post‑Cold‑War phenomena driven by climate change.</li>
    <li><strong>Ignoring India’s strategic response:</strong> Answers that omit India’s naval expansion or diplomatic initiatives lose marks, especially in CDS questions.</li>
    <li><strong>Relying on outdated data:</strong> Some candidates quote the 2020 oil‑throughput figure for the Red Sea, missing the 2024 surge after Houthi attacks.</li>
    <li><strong>Neglecting legal frameworks:</strong> Failing to mention UNCLOS when discussing EEZ disputes is a common loss of points.</li>
    <li><strong>Assuming all flashpoints are militarised:</strong> Many, like the Suez Canal, are primarily commercial; focusing only on military aspects can mislead.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQs -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>

  <p><strong>Q1.</strong> Which of the following flashpoints is directly linked to the concept of “Freedom of Navigation Operations” (FONOPs)?</p>
  <ul style="list-style-type: none; margin-left:20px;">
    <li>(A) Red Sea – Bab el‑Mandeb</li>
    <li>(B) South China Sea</li>
    <li>(C) Arctic – Barents Sea</li>
    <li>(D) East Med – Cyprus</li>
  </ul>
  <p><strong>Answer:</strong> (B)</p>
  <p>Explanation: The United States conducts FONOPs primarily in the South China Sea to challenge excessive maritime claims. The other regions are not typical FONOP venues.</p>

  <p><strong>Q2.</strong> The 2021 blockage of the Ever Given highlighted the strategic importance of which flashpoint?</p>
  <ul style="list-style-type: none; margin-left:20px;">
    <li>(A) Suez Canal</li>
    <li>(B) Strait of Hormuz</li>
    <li>(C) Panama Canal</li>
    <li>(D) Turkish Straits</li>
  </ul>
  <p><strong>Answer:</strong> (A)</p>
  <p>Explanation: The Ever Given incident occurred in the Suez Canal, causing massive shipping delays. The other waterways were unaffected.</p>

  <p><strong>Q3.</strong> Which flashpoint involves a dispute over islands claimed by both Japan and China?</p>
  <ul style="list-style-type: none; margin-left:20px;">
    <li>(A) Spratly Islands</li>
    <li>(B) Senkaku/Diaoyu Islands</li>
    <li>(C) Paracel Islands</li>
    <li>(D) Kuril Islands</li>
  </ul>
  <p><strong>Answer:</strong> (B)</p>
  <p>Explanation: The Senkaku (Japan) / Diaoyu (China) islands are the focal point of the East China Sea dispute. Spratly and Paracel involve multiple claimants, while the Kurils are a Japan‑Russia issue.</p>

  <p><strong>Q4.</strong> In the context of the Indian Ocean, the term “debt‑trap diplomacy” is most closely associated with which country’s initiative?</p>
  <ul style="list-style-type: none; margin-left:20px;">
    <li>(A) United States</li>
    <li>(B) Russia</li>
    <li>(C) China</li>
    <li>(D
`;

window.EXPANDED_NOTES_DATA["ca-defence-cooperation"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Bilateral Defence Cooperation & Deals
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
  <p>[[Bilateral Defence Cooperation]] refers to the formal or informal arrangement between two sovereign states to share military technology, conduct joint training, and sometimes co‑produce weapons platforms. The genesis of such cooperation can be traced back to the post‑World War II era, when the United Nations' security architecture encouraged allies to pool resources against emerging threats. In the Indian context, the earliest example was the [[India‑UK Defence Cooperation]] of the 1950s, which later evolved into more sophisticated agreements such as the [[India‑France Strategic Partnership]] signed in 2010.</p>
  <p>The <span style="color: var(--warning);">core definition</span> of a bilateral defence deal includes three axioms: (i) mutual <span style="color: var(--success);">strategic interest</span>, (ii) technology transfer provisions, and (iii) a clear <span style="color: var(--warning);">timeline</span> for delivery. These axioms are not independent; the strategic interest drives the choice of technology, while the timeline influences the depth of technology transfer. For instance, the [[India‑Israel Spike‑AT Missile Deal]] of 2018 combined strategic need (border security) with a 3‑year delivery schedule, prompting Israel to share limited production knowledge.</p>
  <p>Building on the axioms, the next logical concept is the [[Defense Procurement Procedure (DPP)]], a legislative framework that codifies how India evaluates and sanctions foreign defence contracts. The DPP mandates a <span style="color: var(--warning);">“Make‑in‑India”</span> clause for deals exceeding US$100 crore, thereby linking bilateral cooperation with domestic industrial growth. A worked example: the [[India‑Russia BrahMos Joint Venture]] (2011) required Russia to set up a production line in Kerala, turning a simple purchase into a long‑term partnership.</p>
  <p>Another essential element is the [[Strategic Partnership Agreement (SPA]]), which goes beyond procurement to include joint research, intelligence sharing, and regular high‑level dialogues. The SPA between India and the United States in 2020 exemplifies this, as it introduced the <span style="color: var(--success);">“Interoperability Initiative”</span> that standardises communication protocols for naval vessels, enabling joint maritime patrols in the Indian Ocean Region.</p>
  <p>Real‑world applications illustrate how bilateral deals shape regional security. The [[India‑Australia Sub‑Regional Maritime Security Initiative]] (2021) combined patrol aircraft procurement with joint exercises, directly countering the increasing presence of non‑state actors in the Indo‑Pacific. Similarly, the [[India‑France Scorpène Submarine Deal]] (2021) not only supplied 12 submarines but also established a shared maintenance hub in Chennai, enhancing logistical resilience.</p>
  <p>Quantifying the impact, the total value of India's bilateral defence deals from 2010 to 2023 exceeds US$30 billion, with the top three partners—Russia, France, and the United States—accounting for <span style="color: var(--warning);">≈ 70 %</span> of the aggregate. This concentration underscores the importance of understanding the nuances of each partnership, especially the clauses on <span style="color: var(--success);">offsets</span> and <span style="color: var(--success);">indigenisation</span>, which directly affect the domestic defence industrial base.</p>
  <p>Finally, the evolution of bilateral cooperation is now being influenced by emerging domains such as cyber‑warfare and space. The [[India‑Israel Cyber Defence Collaboration]] (2022) introduced a joint cyber‑range, while the [[India‑France Space Partnership]] (2023) focuses on dual‑use satellite technology. These newer dimensions demonstrate that bilateral defence deals are no longer limited to conventional platforms; they are expanding into <span style="color: var(--warning);">multi‑domain</span> arenas, requiring aspirants to grasp both traditional procurement and cutting‑edge technological synergies.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Country Pair</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Deal / Programme</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Year Signed</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Value (US$ bn)</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f2f2f2;">Key Significance</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India‑Russia</td>
      <td style="border:1px solid var(--border);padding:10px;">BrahMos Joint Venture</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2011</span></td>
      <td style="border:1px solid var(--border);padding:10px;">0.8</td>
      <td style="border:1px solid var(--border);padding:10px;">First Indo‑Russian co‑production; “Make‑in‑India” model.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India‑France</td>
      <td style="border:1px solid var(--border);padding:10px;">Scorpène Submarines (12 units)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2021</span></td>
      <td style="border:1px solid var(--border);padding:10px;">5.5</td>
      <td style="border:1px solid var(--border);padding:10px;">Advanced diesel‑electric tech; joint maintenance hub.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India‑USA</td>
      <td style="border:1px solid var(--border);padding:10px;">C‑17 Strategic Airlift</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2013</span></td>
      <td style="border:1px solid var(--border);padding:10px;">0.5</td>
      <td style="border:1px solid var(--border);padding:10px;">Rapid deployment capability; interoperability boost.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India‑Israel</td>
      <td style="border:1px solid var(--border);padding:10px;">Spike‑AT Missile</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2018</span></td>
      <td style="border:1px solid var(--border);padding:10px;">0.2</td>
      <td style="border:1px solid var(--border);padding:10px;">Precision strike for border security.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India‑Australia</td>
      <td style="border:1px solid var(--border);padding:10px;">P‑8I Maritime Patrol Aircraft</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2020</span></td>
      <td style="border:1px solid var(--border);padding:10px;">2.4</td>
      <td style="border:1px solid var(--border);padding:10px;">Joint maritime surveillance in Indo‑Pacific.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India‑France</td>
      <td style="border:1px solid var(--border);padding:10px;">Rafale Fighter Jets</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2016</span></td>
      <td style="border:1px solid var(--border);padding:10px;">4.0</td>
      <td style="border:1px solid var(--border);padding:10px;">Air superiority; offset clause for indigenous avionics.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India‑Israel</td>
      <td style="border:1px solid var(--border);padding:10px;">Cyber‑Range Collaboration</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2022</span></td>
      <td style="border:1px solid var(--border);padding:10px;">0.1</td>
      <td style="border:1px solid var(--border);padding:10px;">Joint training against cyber threats.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India‑USA</td>
      <td style="border:1px solid var(--border);padding:10px;">Joint Indo‑Pacific Strategy (JIPS)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2020</span></td>
      <td style="border:1px solid var(--border);padding:10px;">—</td>
      <td style="border:1px solid var(--border);padding:10px;">Framework for multi‑domain cooperation.</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>R‑A‑F‑A‑L‑E</strong> – Remember the five major Indian‑French deals: <em>R</em>adar, <em>A</em>ircraft (Rafale), <em>F</em>rames (Scorpène), <em>A</em>ir‑defence (C‑130), <em>L</em>aunchers (Spike‑AT), <em>E</em>ngineering offsets.</li>
    <li><strong>BRICS‑C</strong> – For the chronology of Indo‑Russian deals: <em>B</em>rahMos (2011), <em>R</em>afale‑like (2016, not Russian but a reminder), <em>I</em>ndian‑made (2020 “Make‑in‑India”), <em>C</em>‑17 (2013), <em>S</em>ubmarines (2021).</li>
    <li><strong>CAP‑S</strong> – To recall the pillars of a bilateral defence agreement: <em>C</em>ommercial terms, <em>A</em>ssistance (technology transfer), <em>P</em>olicy alignment, <em>S</em>ecurity interoperability.</li>
    <li><strong>SAFE‑U‑S</strong> – For the India‑USA strategic partnership: <em>S</em>ecurity, <em>A</em>ir, <em>F</em>orces, <em>E</em>ngineering, <em>U</em>nited command, <em>S</em>pace.</li>
    <li><strong>3‑2‑1‑0</strong> – Timeline mnemonic for typical deal phases: <em>3 years</em> for R&D, <em>2 years</em> for production, <em>1 year</em> for delivery, <em>0 year</em> for offset fulfilment (ongoing).</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">2010‑2023</span> marks the period during which India’s bilateral defence spend crossed <span style="color:var(--success);">US$30 billion</span>.</li>
    <li>Any deal above <span style="color:var(--warning);">US$100 crore</span> must incorporate a <span style="color:var(--success);">“Make‑in‑India”</span> clause as per the DPP.</li>
    <li>The [[Strategic Partnership Agreement]] with the United States (2020) introduced the <span style="color:var(--success);">Interoperability Initiative</span>, standardising NATO‑compatible communication.</li>
    <li>India’s longest‑standing bilateral defence partner is <span style="color:var(--success);">[[Russia]]</span>, accounting for <span style="color:var(--warning);">≈ 45 %</span> of total foreign procurement value.</li>
    <li>Under the [[India‑France Defence Deal]] (2016), the offset requirement is <span style="color:var(--warning);">30 %</span> of contract value to be spent on Indian industry.</li>
    <li>The [[India‑Israel Spike‑AT]] contract mandated a <span style="color:var(--success);">3‑year delivery schedule</span> with on‑site training for Indian forces.</li>
    <li>Joint research projects such as the <span style="color:var(--success);">India‑France Space Partnership</span> (2023) focus on dual‑use satellite technology, not just military payloads.</li>
    <li>For maritime security, the <span style="color:var(--success);">India‑Australia Sub‑Regional Initiative</span> (2021) includes a <span style="color:var(--warning);">5‑year</span> joint patrol schedule.</li>
    <li>The <span style="color:var(--success);">Bilateral Cyber‑Range</span> with Israel (2022) is the first of its kind in South Asia.</li>
    <li>India‑USA C‑17 aircraft deliveries began in <span style="color:var(--warning);">2013</span> and have since supported over <span style="color:var(--warning);">150</span> humanitarian missions.</li>
    <li>Each bilateral deal typically contains a <span style="color:var(--success);">technology‑transfer clause</span> that caps at <span style="color:var(--warning);">25 %</span> of the total contract value.</li>
    <li>The <span style="color:var(--success);">Strategic Partnership Framework</span> of 2020 requires annual high‑level dialogues to review progress on joint projects.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>In the last decade, the topic of bilateral defence cooperation has appeared in <span style="color:var(--warning);">≈ 12 </span> NDA papers, <span style="color:var(--warning);">9 </span> CDS papers, and <span style="color:var(--warning);">7 </span> AFCAT papers. The most frequent sub‑topic is the <span style="color:var(--success);">India‑France defence deals</span>, especially the Rafale contract, which has been asked in 2020 NDA (Q‑42) and 2022 CDS (Q‑19).</p>
  <p>Examiners favour questions that test the candidate’s knowledge of the <span style="color:var(--success);">Make‑in‑India</span> policy, offsets, and the strategic rationale behind selecting a partner. For example, a typical question may present two bilateral deals and ask which one offers higher technology transfer, testing both factual recall and conceptual understanding.</p>
  <p>The difficulty level has shifted from pure factual recall (pre‑2015) to application‑oriented items (post‑2018). Recent papers feature scenario‑based MCQs where candidates must identify the correct partner for a given capability, such as “Which bilateral agreement provides the fastest air‑lift capability for disaster relief?” – a nod to the C‑17 deal.</p>
  <p>Notably, the last five years have seen an uptick in questions on emerging domains like cyber and space within bilateral frameworks. This reflects the evolving defence landscape, and aspirants should therefore study not only conventional platforms but also the <span style="color:var(--success);">joint cyber‑range</span> and <span style="color:var(--success);">space collaboration</span> agreements.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing the <span style="color:var(--success);">offset clause</span> with the <span style="color:var(--success);">technology‑transfer clause</span>. Offsets refer to investment in Indian industry, whereas technology transfer is about sharing know‑how.</li>
    <li>Assuming every bilateral deal includes a <span style="color:var(--success);">Make‑in‑India</span> requirement. The rule applies only to contracts above US$100 crore; smaller deals may be fully imported.</li>
    <li>Mixing up the signing year with the delivery year. Many candidates answer “2020” for the Rafale deal, ignoring that the contract was signed in 2016 and deliveries began in 2019.</li>
    <li>Over‑generalising the strategic rationale. Not every partnership is driven by geography; some, like the India‑Israel missile deal, are capability‑specific.</li>
    <li>Neglecting the multi‑domain expansion (cyber/space). Exams now test knowledge of newer agreements, and ignoring them leads to loss of marks.</li>
    <li>Relying on outdated figures. The total bilateral defence spend figures are frequently updated; using pre‑2020 numbers can cause mismatches.</li>
    <li>Failing to differentiate between a <span style="color:var(--success);">Strategic Partnership Agreement</span> and a simple procurement contract, leading to incorrect answer choices in MCQs.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <p><strong>Q1.</strong> Which bilateral agreement introduced the “Interoperability Initiative” for Indian and US naval vessels?</p>
  <ul>
    <li>(A) India‑France Strategic Partnership</li>
    <li>(B) India‑USA Joint Indo‑Pacific Strategy (2020)</li>
    <li>(C) India‑Russia Maritime Cooperation Accord</li>
    <li>(D) India‑Australia Sub‑Regional Maritime Initiative</li>
  </ul>
  <p>Answer: <strong>(B)</strong>. The 2020 India‑USA JIPS specifically set up the interoperability framework; other options either lack such a clause or pertain to different domains.</p>

  <p><strong>Q2.</
`;
