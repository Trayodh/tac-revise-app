window.DIAGRAMS_DB = window.DIAGRAMS_DB || {};
DIAGRAMS_DB["mathematics__trigonometry"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:10px;">
  <div style="background:#60a5fa; color:#ffffff; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Trigonometry
  </div>
  <svg width="1200" height="900" style="background:#0f1117; display:block; margin:auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Definitions -->
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 z" fill="#4ade80"/>
      </marker>
    </defs>

    <!-- Top Node -->
    <rect x="510" y="20" width="180" height="40" rx="6" ry="6"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="45" text-anchor="middle" fill="#e2e8f0" font-size="14" font-family="Segoe UI">Trigonometry</text>

    <!-- Branches -->
    <line x1="600" y1="60" x2="320" y2="120" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="600" y1="60" x2="800" y2="120" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Left Main Box: Identities -->
    <rect x="200" y="120" width="240" height="40" rx="6" ry="6"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="320" y="145" text-anchor="middle" fill="#e2e8f0" font-size="14" font-family="Segoe UI">Trigonometric Identities &amp; Values</text>

    <!-- Right Main Box: Inverse Functions -->
    <rect x="720" y="120" width="240" height="40" rx="6" ry="6"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="840" y="145" text-anchor="middle" fill="#e2e8f0" font-size="14" font-family="Segoe UI">Inverse Trigonometric Functions</text>

    <!-- Sub‑boxes under Identities -->
    <!-- 1. Pythagorean Identities -->
    <rect x="140" y="200" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="220" text-anchor="middle" fill="#e2e8f0" font-size="12">sin²θ + cos²θ = 1</text>

    <!-- 2. Co‑function Identities -->
    <rect x="140" y="250" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="270" text-anchor="middle" fill="#e2e8f0" font-size="12">sin(90°‑θ)=cosθ, cos(90°‑θ)=sinθ</text>

    <!-- 3. Sum/Difference Formulas -->
    <rect x="140" y="300" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="320" text-anchor="middle" fill="#e2e8f0" font-size="12">sin(A±B)=sinAcosB±cosAsinB</text>

    <!-- 4. Double‑Angle Formulas -->
    <rect x="140" y="350" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="370" text-anchor="middle" fill="#e2e8f0" font-size="12">sin2θ=2sinθcosθ, cos2θ=cos²θ‑sin²θ</text>

    <!-- 5. Half‑Angle Formulas -->
    <rect x="140" y="400" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="420" text-anchor="middle" fill="#e2e8f0" font-size="12">sin²(θ/2)=(1‑cosθ)/2, cos²(θ/2)=(1+cosθ)/2</text>

    <!-- 6. Product‑to‑Sum -->
    <rect x="140" y="450" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="470" text-anchor="middle" fill="#e2e8f0" font-size="12">sinA sinB =½[cos(A‑B)‑cos(A+B)]</text>

    <!-- Connecting lines from Identities main box to sub‑boxes -->
    <line x1="320" y1="160" x2="270" y2="200" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="250" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="300" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="350" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="400" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="450" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Sub‑boxes under Inverse Functions -->
    <!-- 1. Definition -->
    <rect x="660" y="200" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="790" y="220" text-anchor="middle" fill="#e2e8f0" font-size="12">sin⁻¹x = θ ⇔ sinθ = x,  θ∈[‑90°,90°]</text>

    <!-- 2. Principal Value Ranges -->
    <rect x="660" y="250" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="790" y="270" text-anchor="middle" fill="#e2e8f0" font-size="12">cos⁻¹x: θ∈[0°,180°]; tan⁻¹x: θ∈[‑90°,90°]</text>

    <!-- 3. Domain & Range -->
    <rect x="660" y="300" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="790" y="320" text-anchor="middle" fill="#e2e8f0" font-size="12">Domain: [‑1,1] for sin⁻¹, cos⁻¹; ℝ for tan⁻¹</text>

    <!-- 4. Example Evaluation -->
    <rect x="660" y="350" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="790" y="370" text-anchor="middle" fill="#e2e8f0" font-size="12">sin⁻¹(½)=30°, tan⁻¹(1)=45°</text>

    <!-- Connecting lines from Inverse main box to sub‑boxes -->
    <line x1="840" y1="160" x2="790" y2="200" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="840" y1="160" x2="790" y2="250" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="840" y1="160" x2="790" y2="300" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="840" y1="160" x2="790" y2="350" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Problem Solving Flow (right side) -->
    <rect x="460" y="520" width="280" height="40" rx="6" ry="6"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="545" text-anchor="middle" fill="#e2e8f0" font-size="14">Problem‑Solving Steps</text>

    <!-- Step 1 -->
    <rect x="380" y="580" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="600" text-anchor="middle" fill="#e2e8f0" font-size="12">1️⃣ Identify given & required trig function</text>

    <!-- Arrow -->
    <line x1="600" y1="560" x2="480" y2="580" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Step 2 -->
    <rect x="380" y="630" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="650" text-anchor="middle" fill="#e2e8f0" font-size="12">2️⃣ Choose appropriate identity</text>

    <line x1="480" y1="610" x2="480" y2="630" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Step 3 -->
    <rect x="380" y="680" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="700" text-anchor="middle" fill="#e2e8f0" font-size="12">3️⃣ Transform & simplify</text>

    <line x1="480" y1="660" x2="480" y2="680" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Step 4 -->
    <rect x="380" y="730" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="750" text-anchor="middle" fill="#e2e8f0" font-size="12">4️⃣ Solve for the unknown</text>

    <line x1="480" y1="710" x2="480" y2="730" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Step 5 -->
    <rect x="380" y="780" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="800" text-anchor="middle" fill="#e2e8f0" font-size="12">5️⃣ Verify with original equation</text>

    <line x1="480" y1="760" x2="480" y2="780" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
  </svg>
</div>
`;

DIAGRAMS_DB["mathematics__algebra-complex"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#4ade80;color:#0f1117;padding:12px 24px;font-size:24px;font-weight:bold;text-align:center;">
    Algebra & Complex Numbers
  </div>
  <div style="position:relative;min-width:2000px;background:#0f1117;padding:80px 0;">
    <!-- Central Node -->
    <div style="position:absolute;left:50%;transform:translateX(-50%);top:0;background:#1a1c23;color:#e2e8f0;padding:16px 24px;border:1px solid rgba(255,255,255,0.12);border-radius:8px;min-width:260px;text-align:center;">
      <strong>Algebra & Complex Numbers</strong>
    </div>
    <!-- Quadratic Equations Block -->
    <div id="quad" style="position:absolute;left:15%;top:180px;background:#1a1c23;color:#e2e8f0;padding:16px 24px;border:1px solid rgba(255,255,255,0.12);border-radius:8px;width:380px;">
      <strong>Quadratic Equations</strong><br>
      <ul style="margin:8px 0;padding-left:20px;font-size:14px;">
        <li>Standard form: <span style="color:#4ade80;">ax²+bx+c=0</span></li>
        <li>Discriminant: <span style="color:#4ade80;">Δ = b²‑4ac</span></li>
        <li>Nature of roots:
          <ul style="margin:4px 0;padding-left:15px;">
            <li>Δ>0 – real & distinct</li>
            <li>Δ=0 – real & equal</li>
            <li>Δ<0 – complex conjugate</li>
          </ul>
        </li>
        <li>Sum & product of roots: <span style="color:#60a5fa;">α+β = -b/a , αβ = c/a</span></li>
        <li>Solution methods:
          <ul style="margin:4px 0;padding-left:15px;">
            <li>Factorisation</li>
            <li>Completing the square</li>
            <li>Quadratic formula</li>
            <li>Vieta’s relations</li>
          </ul>
        </li>
        <li>Typical exam: Find roots of <span style="color:#4ade80;">2x²‑5x+2=0</span></li>
      </ul>
    </div>
    <!-- Complex Numbers Block -->
    <div id="cplx" style="position:absolute;right:15%;top:180px;background:#1a1c23;color:#e2e8f0;padding:16px 24px;border:1px solid rgba(255,255,255,0.12);border-radius:8px;width:380px;">
      <strong>Complex Numbers</strong><br>
      <ul style="margin:8px 0;padding-left:20px;font-size:14px;">
        <li>General form: <span style="color:#4ade80;">z = a + bi</span></li>
        <li>Modulus: <span style="color:#60a5fa;">|z| = √(a²+b²)</span></li>
        <li>Argument: <span style="color:#60a5fa;">arg(z)=θ = tan⁻¹(b/a)</span></li>
        <li>Polar form: <span style="color:#4ade80;">z = r(cosθ + i sinθ)</span></li>
        <li>De Moivre’s theorem: <span style="color:#4ade80;">(cosθ + i sinθ)ⁿ = cos(nθ)+i sin(nθ)</span></li>
        <li>Operations:
          <ul style="margin:4px 0;padding-left:15px;">
            <li>Add/Sub: (a+bi)±(c+di) = (a±c)+(b±d)i</li>
            <li>Mul: (a+bi)(c+di) = (ac‑bd)+(ad+bc)i</li>
            <li>Div: (a+bi)/(c+di) = [(ac+bd)+(bc‑ad)i]/(c²+d²)</li>
          </ul>
        </li>
        <li>Sample problem: Compute (1+i)⁵</li>
      </ul>
    </div>
    <!-- Connecting Arrows (SVG) -->
    <svg width="100%" height="500" style="position:absolute;top:0;left:0;pointer-events:none;">
      <!-- Central → Quadratic -->
      <line x1="1000" y1="60" x2="440" y2="180" stroke="#4ade80" stroke-width="2"/>
      <polygon points="440,180 435,175 435,185" fill="#4ade80"/>
      <!-- Central → Complex -->
      <line x1="1000" y1="60" x2="1560" y2="180" stroke="#4ade80" stroke-width="2"/>
      <polygon points="1560,180 1555,175 1555,185" fill="#4ade80"/>
      <!-- Quadratic internal flow -->
      <line x1="440" y1="310" x2="440" y2="360" stroke="#60a5fa" stroke-width="2"/>
      <polygon points="440,360 435,355 445,355" fill="#60a5fa"/>
      <!-- Complex internal flow -->
      <line x1="1560" y1="310" x2="1560" y2="360" stroke="#60a5fa" stroke-width="2"/>
      <polygon points="1560,360 1555,355 1565,355" fill="#60a5fa"/>
    </svg>
    <!-- Step Labels for Quadratic -->
    <div style="position:absolute;left:38%;top:300px;background:#60a5fa;color:#0f1117;padding:4px 8px;border-radius:4px;font-size:13px;">
      Step 1: Identify a, b, c
    </div>
    <div style="position:absolute;left:38%;top:340px;background:#60a5fa;color:#0f1117;padding:4px 8px;border-radius:4px;font-size:13px;">
      Step 2: Compute Δ and decide nature
    </div>
    <!-- Step Labels for Complex -->
    <div style="position:absolute;right:38%;top:300px;background:#60a5fa;color:#0f1117;padding:4px 8px;border-radius:4px;font-size:13px;">
      Step 1: Write in a+bi form
    </div>
    <div style="position:absolute;right:38%;top:340px;background:#60a5fa;color:#0f1117;padding:4px 8px;border-radius:4px;font-size:13px;">
      Step 2: Find r, θ → use polar/De Moivre
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["mathematics__2d-geometry"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:12px; text-align:center; font-size:24px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.12);">
    Coordinate Geometry (2D & 3D) – Straight Lines
  </div>
  <div style="position:relative; min-height:800px; background:#0f1117;">
    <!-- Central Node -->
    <div id="central" style="position:absolute; left:50%; top:5%; transform:translate(-50%,0); background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); padding:12px 20px; border-radius:8px; color:#e2e8f0;">
      <strong>Straight Lines</strong><br/>2D &amp; 3D
    </div>
    <!-- 2D Branch -->
    <div id="2d" style="position:absolute; left:20%; top:30%; transform:translate(-50%,0); background:#4ade80; border:1px solid rgba(255,255,255,0.12); padding:12px 20px; border-radius:8px; color:#0f1117;">
      <strong>2D Lines</strong>
    </div>
    <div id="2d_formulas" style="position:absolute; left:20%; top:45%; transform:translate(-50%,0); background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); padding:10px 15px; border-radius:6px; color:#e2e8f0; font-size:14px;">
      <ul style="margin:0; padding-left:18px;">
        <li>Slope m = (y₂‑y₁)/(x₂‑x₁)</li>
        <li>Point‑slope: y‑y₁ = m(x‑x₁)</li>
        <li>Slope‑intercept: y = mx + c</li>
        <li>Two‑point form: (y‑y₁) = [(y₂‑y₁)/(x₂‑x₁)](x‑x₁)</li>
        <li>General form: Ax + By + C = 0</li>
        <li>Distance from (x₀,y₀) to Ax+By+C=0 = |Ax₀+By₀+C|/√(A²+B²)</li>
        <li>Angle between lines: tanθ = |(m₁‑m₂)/(1+m₁m₂)|</li>
      </ul>
    </div>
    <div id="2d_steps" style="position:absolute; left:20%; top:70%; transform:translate(-50%,0); background:#60a5fa; border:1px solid rgba(255,255,255,0.12); padding:12px 20px; border-radius:8px; color:#0f1117; font-size:14px;">
      <strong>Problem‑Solving Steps (2D)</strong><br/>
      1. Identify given points / slope.<br/>
      2. Choose appropriate form (point‑slope, general).<br/>
      3. Substitute values → equation.<br/>
      4. For distance/angle, use formulas above.<br/>
      5. Verify by plugging points.
    </div>
    <!-- 3D Branch -->
    <div id="3d" style="position:absolute; left:80%; top:30%; transform:translate(-50%,0); background:#4ade80; border:1px solid rgba(255,255,255,0.12); padding:12px 20px; border-radius:8px; color:#0f1117;">
      <strong>3D Lines</strong>
    </div>
    <div id="3d_formulas" style="position:absolute; left:80%; top:45%; transform:translate(-50%,0); background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); padding:10px 15px; border-radius:6px; color:#e2e8f0; font-size:14px;">
      <ul style="margin:0; padding-left:18px;">
        <li>Vector form: r = a + λb</li>
        <li>Parametric: x = x₁ + λl, y = y₁ + λm, z = z₁ + λn</li>
        <li>Symmetric: (x‑x₁)/l = (y‑y₁)/m = (z‑z₁)/n</li>
        <li>Direction ratios (l,m,n) – proportional to direction cosines.</li>
        <li>Angle between lines: cosθ = (b₁·b₂)/(|b₁||b₂|)</li>
        <li>Shortest distance between skew lines: | (a₂‑a₁)·(b₁×b₂) | / |b₁×b₂|</li>
        <li>Distance from point P(x₀,y₀,z₀) to line: | (AP × b) | / |b|</li>
      </ul>
    </div>
    <div id="3d_steps" style="position:absolute; left:80%; top:70%; transform:translate(-50%,0); background:#60a5fa; border:1px solid rgba(255,255,255,0.12); padding:12px 20px; border-radius:8px; color:#0f1117; font-size:14px;">
      <strong>Problem‑Solving Steps (3D)</strong><br/>
      1. Obtain two points or a point & direction ratios.<br/>
      2. Write vector/parametric/symmetric form.<br/>
      3. Use dot/cross product for angle or distance.<br/>
      4. Simplify & verify with given points.
    </div>
    <!-- Connecting Arrows -->
    <svg style="position:absolute; top:0; left:0; width:100%; height:800px;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 Z" fill="#60a5fa"/>
        </marker>
      </defs>
      <!-- Central to 2D -->
      <line x1="50%" y1="12%" x2="20%" y2="30%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Central to 3D -->
      <line x1="50%" y1="12%" x2="80%" y2="30%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- 2D to Formulas -->
      <line x1="20%" y1="38%" x2="20%" y2="45%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Formulas to Steps (2D) -->
      <line x1="20%" y1="55%" x2="20%" y2="70%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- 3D to Formulas -->
      <line x1="80%" y1="38%" x2="80%" y2="45%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Formulas to Steps (3D) -->
      <line x1="80%" y1="55%" x2="80%" y2="70%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["mathematics__statistics-prob"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px;">
    Statistics &amp; Probability
  </div>
  <!-- Diagram Container -->
  <div style="position:relative; width:2000px; min-height:900px; margin-top:30px;">
    <!-- SVG for connectors -->
    <svg style="position:absolute; top:0; left:0; width:2000px; height:900px;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L0,10 L10,5 Z" fill="#60a5fa"/>
        </marker>
      </defs>
      <!-- Central to Main Branches -->
      <line x1="1000" y1="80" x2="450" y2="170" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="1000" y1="80" x2="1550" y2="170" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Measures of Central Tendency to its sub‑nodes -->
      <line x1="450" y1="210" x2="450" y2="270" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="450" y1="210" x2="450" y2="350" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="450" y1="210" x2="450" y2="430" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="450" y1="210" x2="450" y2="510" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="450" y1="210" x2="450" y2="590" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Data Interpretation to its sub‑nodes -->
      <line x1="1550" y1="210" x2="1550" y2="270" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="1550" y1="210" x2="1550" y2="350" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="1550" y1="210" x2="1550" y2="430" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Problem‑Solving Flow arrows -->
      <line x1="200" y1="750" x2="380" y2="750" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="440" y1="750" x2="620" y2="750" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="680" y1="750" x2="860" y2="750" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="920" y1="750" x2="1100" y2="750" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="1160" y1="750" x2="1340" y2="750" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    </svg>

    <!-- Central Node -->
    <div style="position:absolute; left:50%; transform:translateX(-150px); top:20px; width:300px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; text-align:center;">
      <strong>Statistics &amp; Probability</strong>
    </div>

    <!-- Main Branches -->
    <div style="position:absolute; left:300px; top:150px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:10px; text-align:center;">
      <strong>Measures of Central Tendency</strong>
    </div>
    <div style="position:absolute; left:1400px; top:150px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:10px; text-align:center;">
      <strong>Data Interpretation</strong>
    </div>

    <!-- Sub‑nodes – Measures -->
    <div style="position:absolute; left:300px; top:260px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#4ade80;">Mean (μ)</strong><br>
      <span style="font-size:14px;">μ = Σx<sub>i</sub> / n</span>
    </div>
    <div style="position:absolute; left:300px; top:340px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#4ade80;">Median</strong><br>
      <span style="font-size:14px;">Middle value (odd n) or (M<sub>1</sub>+M<sub>2</sub>)/2 (even n)</span>
    </div>
    <div style="position:absolute; left:300px; top:420px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#4ade80;">Mode</strong><br>
      <span style="font-size:14px;">Value(s) with highest frequency</span>
    </div>
    <div style="position:absolute; left:300px; top:500px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#4ade80;">Variance (σ²)</strong><br>
      <span style="font-size:14px;">σ² = Σ(x<sub>i</sub>–μ)² / n</span>
    </div>
    <div style="position:absolute; left:300px; top:580px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#4ade80;">Std. Deviation (σ)</strong><br>
      <span style="font-size:14px;">σ = √σ²</span>
    </div>

    <!-- Sub‑nodes – Data Interpretation -->
    <div style="position:absolute; left:1400px; top:260px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#60a5fa;">Bar Chart</strong><br>
      <span style="font-size:14px;">Height ∝ frequency</span>
    </div>
    <div style="position:absolute; left:1400px; top:340px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#60a5fa;">Pie Chart</strong><br>
      <span style="font-size:14px;">% = (f / Σf) × 100 = (θ / 360) × 100</span>
    </div>
    <div style="position:absolute; left:1400px; top:420px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#60a5fa;">Frequency Table</strong><br>
      <span style="font-size:14px;">Example: Score 0‑10 → 5, 11‑20 → 8, 21‑30 → 12</span>
    </div>

    <!-- Problem‑Solving Flow (Bottom) -->
    <div style="position:absolute; left:100px; top:700px; width:200px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:8px; text-align:center;">
      <strong style="color:#4ade80;">1. Understand Question</strong>
    </div>
    <div style="position:absolute; left:340px; top:700px; width:200px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:8px; text-align:center;">
      <strong style="color:#4ade80;">2. Identify Data Type</strong>
    </div>
    <div style="position:absolute; left:580px; top:700px; width:200px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:8px; text-align:center;">
      <strong style="color:#4ade80;">3. Choose Measure</strong>
    </div>
    <div style="position:absolute; left:820px; top:700px; width:200px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:8px; text-align:center;">
      <strong style="color:#4ade80;">4. Compute Formula</strong>
    </div>
    <div style="position:absolute; left:1060px; top:700px; width:200px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:8px; text-align:center;">
      <strong style="color:#4ade80;">5. Interpret via Chart</strong>
    </div>
    <div style="position:absolute; left:1300px; top:700px; width:200px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:8px; text-align:center;">
      <strong style="color:#4ade80;">6. Answer</strong>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["mathematics__calculus"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <div style="background:#60a5fa; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center;">
    Calculus
  </div>
  <svg width="1200" height="800" style="display:block; margin:auto; background:#0f1117;">
    <!-- Arrow marker definition -->
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5"
              orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 z" fill="#e2e8f0"/>
      </marker>
    </defs>

    <!-- Central Node -->
    <rect x="500" y="30" width="200" height="60" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="600" y="70" text-anchor="middle" dominant-baseline="middle"
          style="fill:#0f1117; font-size:18px; font-weight:bold;">Calculus</text>

    <!-- Branch: Limits & Continuity -->
    <rect x="150" y="150" width="250" height="120" rx="8"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="275" y="170" text-anchor="middle" style="fill:#e2e8f0; font-size:16px; font-weight:bold;">Limits & Continuity</text>
    <text x="275" y="200" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      lim<sub>x→a</sub> f(x)=L
    </text>
    <text x="275" y="220" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Continuity: lim<sub>x→a</sub>f(x)=f(a)
    </text>
    <text x="275" y="240" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Example: lim<sub>x→0</sub> (sin x)/x = 1
    </text>

    <!-- Arrow from central to Limits -->
    <line x1="600" y1="90" x2="275" y2="150"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>

    <!-- Branch: Differentiation Rules -->
    <rect x="450" y="250" width="300" height="260" rx="8"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="600" y="270" text-anchor="middle" style="fill:#e2e8f0; font-size:16px; font-weight:bold;">Differentiation Rules</text>
    <text x="600" y="300" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Power: d/dx[xⁿ]=n·xⁿ⁻¹
    </text>
    <text x="600" y="320" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Product: (uv)'=u'v+uv'
    </text>
    <text x="600" y="340" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Quotient: (u/v)'=(u'v-u v')/v²
    </text>
    <text x="600" y="360" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Chain: d/dx[f(g(x))]=f'(g(x))·g'(x)
    </text>
    <text x="600" y="380" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Trig: d/dx[sin x]=cos x
    </text>
    <text x="600" y="400" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Exponential: d/dx[eˣ]=eˣ
    </text>
    <text x="600" y="420" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Logarithm: d/dx[ln x]=1/x
    </text>

    <!-- Arrow from central to Differentiation -->
    <line x1="600" y1="90" x2="600" y2="250"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>

    <!-- Branch: Standard Integration Methods -->
    <rect x="850" y="150" width="250" height="200" rx="8"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="975" y="170" text-anchor="middle" style="fill:#e2e8f0; font-size:16px; font-weight:bold;">Integration Methods</text>
    <text x="975" y="200" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      ∫ xⁿ dx = xⁿ⁺¹/(n+1)+C
    </text>
    <text x="975" y="220" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Substitution: u = g(x) → ∫ f(g(x))g'(x)dx = ∫ f(u)du
    </text>
    <text x="975" y="240" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Parts: ∫ u dv = uv – ∫ v du
    </text>
    <text x="975" y="260" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Partial Fractions (e.g., 1/(x²‑1)=½[1/(x‑1) – 1/(x+1)])
    </text>
    <text x="975" y="280" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Trig: ∫ sin x dx = –cos x + C
    </text>

    <!-- Arrow from central to Integration -->
    <line x1="600" y1="90" x2="975" y2="150"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>

    <!-- Problem‑Solving Flow (below) -->
    <rect x="250" y="560" width="700" height="180" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="600" y="580" text-anchor="middle" style="fill:#0f1117; font-size:16px; font-weight:bold;">Step‑by‑Step Problem Solving</text>

    <!-- Steps as small boxes -->
    <!-- 1. Identify type -->
    <rect x="280" y="610" width="180" height="50" rx="6"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:1;"></rect>
    <text x="370" y="640" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">1️⃣ Identify Topic</text>

    <!-- 2. Choose formula -->
    <rect x="520" y="610" width="180" height="50" rx="6"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:1;"></rect>
    <text x="610" y="640" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">2️⃣ Select Formula</text>

    <!-- 3. Apply method -->
    <rect x="760" y="610" width="180" height="50" rx="6"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:1;"></rect>
    <text x="850" y="640" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">3️⃣ Apply Method</text>

    <!-- 4. Simplify & Check -->
    <rect x="500" y="680" width="200" height="50" rx="6"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:1;"></rect>
    <text x="600" y="710" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">4️⃣ Simplify & Verify</text>

    <!-- Arrows between steps -->
    <line x1="460" y1="635" x2="520" y2="635"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>
    <line x1="700" y1="635" x2="760" y2="635"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>
    <line x1="850" y1="660" x2="600" y2="680"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>

    <!-- Example Problem Box -->
    <rect x="950" y="560" width="200" height="180" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="1050" y="580" text-anchor="middle" style="fill:#0f1117; font-size:16px; font-weight:bold;">Example</text>
    <text x="1050" y="610" text-anchor="middle" style="fill:#0f1117; font-size:14px;">
      Find d/dx[ x³·sin x ] 
    </text>
    <text x="1050" y="640" text-anchor="middle" style="fill:#0f1117; font-size:14px;">
      Using Product & Chain Rules:
    </text>
    <text x="1050" y="660" text-anchor="middle" style="fill:#0f1117; font-size:14px;">
      = 3x²·sin x + x³·cos x
    </text>
    <text x="1050" y="690" text-anchor="middle" style="fill:#0f1117; font-size:14px;">
      (Check by substitution at x=0)
    </text>

    <!-- Arrow from steps to example -->
    <line x1="700" y1="710" x2="950" y2="610"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>
  </svg>
</div>
`;

DIAGRAMS_DB["mathematics__algebra-matrices"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <div style="background:#60a5fa; color:#fff; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Algebra &amp; Matrices
  </div>
  <svg width="1200" height="900" style="background:#0f1117;">
    <!-- Definitions for arrows -->
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#e2e8f0"/>
      </marker>
    </defs>

    <!-- Nodes -->
    <!-- Start -->
    <rect x="540" y="20" width="120" height="50" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="52" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Start</text>

    <!-- Types of Matrices -->
    <rect x="540" y="100" width="200" height="80" fill="#60a5fa" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="640" y="120" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Types of Matrices</text>
    <text x="640" y="140" text-anchor="middle" fill="#0f1117" font-size="12">• Square, Row, Column</text>
    <text x="640" y="155" text-anchor="middle" fill="#0f1117" font-size="12">• Diagonal, Identity (Iₙ)</text>
    <text x="640" y="170" text-anchor="middle" fill="#0f1117" font-size="12">• Zero, Symmetric, Skew‑symmetric</text>

    <!-- Matrix Operations -->
    <rect x="540" y="210" width="260" height="140" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="670" y="230" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Matrix Operations</text>
    <text x="670" y="250" text-anchor="middle" fill="#0f1117" font-size="12">Addition:  (A+B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ</text>
    <text x="670" y="265" text-anchor="middle" fill="#0f1117" font-size="12">Multiplication: (AB)ᵢⱼ = Σₖ Aᵢₖ·Bₖⱼ</text>
    <text x="670" y="280" text-anchor="middle" fill="#0f1117" font-size="12">Scalar: kAᵢⱼ</text>
    <text x="670" y="295" text-anchor="middle" fill="#0f1117" font-size="12">Transpose: (Aᵀ)ᵢⱼ = Aⱼᵢ</text>
    <text x="670" y="310" text-anchor="middle" fill="#0f1117" font-size="12">Trace: tr(A) = Σᵢ Aᵢᵢ</text>

    <!-- Determinants -->
    <rect x="540" y="380" width="240" height="140" fill="#60a5fa" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="660" y="400" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Determinants</text>
    <text x="660" y="420" text-anchor="middle" fill="#0f1117" font-size="12">2×2: |a b| = ad‑bc</text>
    <text x="660" y="440" text-anchor="middle" fill="#0f1117" font-size="12">3×3: Sarrus or Laplace expansion</text>
    <text x="660" y="460" text-anchor="middle" fill="#0f1117" font-size="12">Properties: |AB| = |A||B|, |Aᵀ| = |A|</text>
    <text x="660" y="480" text-anchor="middle" fill="#0f1117" font-size="12">Cofactor Cᵢⱼ = (‑1)^{i+j}Mᵢⱼ</text>

    <!-- Inverse & Adjoints -->
    <rect x="540" y="560" width="260" height="120" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="670" y="580" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Inverse of a Matrix</text>
    <text x="670" y="600" text-anchor="middle" fill="#0f1117" font-size="12">A⁻¹ = (1/|A|)·adj(A)</text>
    <text x="670" y="620" text-anchor="middle" fill="#0f1117" font-size="12">Adj(A) = transpose of cofactor matrix</text>

    <!-- Applications -->
    <rect x="540" y="710" width="280" height="150" fill="#60a5fa" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="680" y="730" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Applications in NDA/ CDS</text>
    <text x="680" y="750" text-anchor="middle" fill="#0f1117" font-size="12">Cramer's Rule for 2‑eqn 2‑unk:</text>
    <text x="680" y="765" text-anchor="middle" fill="#0f1117" font-size="12">x = |Dₓ|/|D| , y = |Dᵧ|/|D|</text>
    <text x="680" y="785" text-anchor="middle" fill="#0f1117" font-size="12">System of linear equations (Ax = b)</text>
    <text x="680" y="805" text-anchor="middle" fill="#0f1117" font-size="12">Matrix method for arithmetic‑progression problems</text>

    <!-- End -->
    <rect x="540" y="880" width="120" height="50" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="912" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">End</text>

    <!-- Arrows -->
    <path d="M600 70 V100" fill="none" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M600 180 V210" fill="none" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M600 350 V380" fill="none" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M600 520 V560" fill="none" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M600 680 V710" fill="none" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <path d="M600 860 V880" fill="none" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Side notes (optional) -->
    <text x="820" y="120" fill="#f59e0b" font-size="12">Key Theorem: Binet‑Cauchy</text>
    <text x="820" y="140" fill="#f59e0b" font-size="12">Determinant of triangular matrix = product of diagonal</text>
    <text x="820" y="160" fill="#f59e0b" font-size="12">Rank ≤ min(rows,cols)</text>
  </svg>
</div>
`;

DIAGRAMS_DB["mathematics__probability-stats"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:12px; text-align:center; font-size:24px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.12);">
    Probability &amp; Statistics
  </div>
  <svg width="1200" height="900" style="background:#0f1117;">
    <!-- Definitions -->
    <defs>
      <style type="text/css"><![CDATA[
        .box { fill:#1a1e27; stroke:rgba(255,255,255,0.12); stroke-width:1; rx:8; ry:8; }
        .title { fill:#4ade80; font-weight:bold; font-size:16px; }
        .content { fill:#e2e8f0; font-size:14px; }
        .arrow { fill:none; stroke:#60a5fa; stroke-width:2; marker-end:url(#arrowhead); }
        .small { fill:#e2e8f0; font-size:12px; }
      ]]></style>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0,10 3.5,0 7" fill="#60a5fa"/>
      </marker>
    </defs>

    <!-- Main vertical flow -->
    <!-- Box 1: Sample Space -->
    <rect class="box" x="450" y="40" width="300" height="80"></rect>
    <text class="title" x="600" y="65" text-anchor="middle">1. Sample Space (Ω)</text>
    <text class="content" x="600" y="90" text-anchor="middle">Ω = set of all possible outcomes</text>

    <!-- Arrow 1 -->
    <line class="arrow" x1="600" y1="120" x2="600" y2="150"></line>

    <!-- Box 2: Event Definition -->
    <rect class="box" x="450" y="150" width="300" height="80"></rect>
    <text class="title" x="600" y="175" text-anchor="middle">2. Event Definition (A, B, …)</text>
    <text class="content" x="600" y="200" text-anchor="middle">Subset of Ω</text>

    <!-- Arrow 2 -->
    <line class="arrow" x1="600" y1="230" x2="600" y2="260"></line>

    <!-- Box 3: Basic Probability -->
    <rect class="box" x="450" y="260" width="300" height="80"></rect>
    <text class="title" x="600" y="285" text-anchor="middle">3. Basic Probability</text>
    <text class="content" x="600" y="310" text-anchor="middle">P(A)=|A| / |Ω|</text>

    <!-- Arrow 3 -->
    <line class="arrow" x1="600" y1="340" x2="600" y2="370"></line>

    <!-- Box 4: Conditional Probability -->
    <rect class="box" x="450" y="370" width="300" height="80"></rect>
    <text class="title" x="600" y="395" text-anchor="middle">4. Conditional Probability</text>
    <text class="content" x="600" y="420" text-anchor="middle">P(A|B)=P(A∩B)/P(B)</text>

    <!-- Arrow 4 -->
    <line class="arrow" x1="600" y1="450" x2="600" y2="480"></line>

    <!-- Box 5: Multiplication Rule -->
    <rect class="box" x="450" y="480" width="300" height="80"></rect>
    <text class="title" x="600" y="505" text-anchor="middle">5. Multiplication Rule</text>
    <text class="content" x="600" y="530" text-anchor="middle">P(A∩B)=P(A)·P(B|A)</text>

    <!-- Arrow 5 -->
    <line class="arrow" x1="600" y1="560" x2="600" y2="590"></line>

    <!-- Box 6: Total Probability Theorem -->
    <rect class="box" x="450" y="590" width="300" height="100"></rect>
    <text class="title" x="600" y="615" text-anchor="middle">6. Total Probability Theorem</text>
    <text class="content" x="600" y="640" text-anchor="middle">P(B)=∑ P(B|Ai)·P(Ai)</text>
    <text class="small" x="600" y="660" text-anchor="middle">{Ai} – partition of Ω</text>

    <!-- Arrow 6 -->
    <line class="arrow" x1="600" y1="690" x2="600" y2="720"></line>

    <!-- Box 7: Bayes Theorem -->
    <rect class="box" x="450" y="720" width="300" height="100"></rect>
    <text class="title" x="600" y="745" text-anchor="middle">7. Bayes Theorem</text>
    <text class="content" x="600" y="770" text-anchor="middle">P(A|B)=P(B|A)·P(A) / P(B)</text>
    <text class="small" x="600" y="790" text-anchor="middle">Useful for reverse‑probability problems</text>

    <!-- Arrow 7 -->
    <line class="arrow" x1="600" y1="820" x2="600" y2="850"></line>

    <!-- Box 8: Problem‑Solving Steps -->
    <rect class="box" x="450" y="850" width="300" height="200"></rect>
    <text class="title" x="600" y="875" text-anchor="middle">8. Step‑by‑Step Solution</text>
    <text class="content" x="600" y="900" text-anchor="middle">a) Identify Ω and events</text>
    <text class="content" x="600" y="920" text-anchor="middle">b) Check independence / use</text>
    <text class="content" x="600" y="940" text-anchor="middle">   conditional probability</text>
    <text class="content" x="600" y="960" text-anchor="middle">c) Apply multiplication / total prob.</text>
    <text class="content" x="600" y="980" text-anchor="middle">d) If reverse, use Bayes</text>
    <text class="content" x="600" y="1000" text-anchor="middle">e) Compute numeric answer</text>

    <!-- Side Example: Independent Events -->
    <rect class="box" x="150" y="260" width="260" height="80"></rect>
    <text class="title" x="280" y="285" text-anchor="middle">Independent Events</text>
    <text class="content" x="280" y="310" text-anchor="middle">P(A∩B)=P(A)·P(B)</text>
    <text class="small" x="280" y="330" text-anchor="middle">e.g., draw King then Ace from deck (with replacement)</text>
    <line class="arrow" x1="380" y1="300" x2="440" y2="300"></line>

    <!-- Side Example: Deck of Cards -->
    <rect class="box" x="150" y="380" width="260" height="80"></rect>
    <text class="title" x="280" y="405" text-anchor="middle">Deck of Cards Example</text>
    <text class="content" x="280" y="430" text-anchor="middle">P(King)=4/52=1/13</text>
    <line class="arrow" x1="380" y1="420" x2="440" y2="420"></line>

    <!-- Side Example: Bayes (Medical Test) -->
    <rect class="box" x="150" y="720" width="260" height="120"></rect>
    <text class="title" x="280" y="745" text-anchor="middle">Medical Test (Bayes)</text>
    <text class="content" x="280" y="770" text-anchor="middle">Sensitivity = 0.99</text>
    <text class="content" x="280" y="790" text-anchor="middle">Specificity = 0.95</text>
    <text class="content" x="280" y="810" text-anchor="middle">Prevalence = 0.01</text>
    <text class="content" x="280" y="830" text-anchor="middle">P(Disease|Positive) ≈ 0.17</text>
    <line class="arrow" x1="380" y1="770" x2="440" y2="770"></line>

    <!-- Connecting arrows from side boxes to main flow -->
    <line class="arrow" x1="410" y1="300" x2="440" y2="300"></line>
    <line class="arrow" x1="410" y1="420" x2="440" y2="420"></line>
    <line class="arrow" x1="410" y1="770" x2="440" y2="770"></line>
  </svg>
</div>
`;

DIAGRAMS_DB["mathematics__geometry"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <!-- Title Bar -->
  <div style="background:#0f1117; padding:12px 0; text-align:center; font-size:24px; font-weight:bold; color:#4ade80; border-bottom:1px solid rgba(255,255,255,0.12);">
    Geometry
  </div>
  <!-- Diagram Container -->
  <div id="geomDiagram" style="position:relative; width:1200px; min-height:1000px; margin:auto; padding:40px;">
    <!-- Central Chapter Node -->
    <div style="position:absolute; top:20px; left:50%; transform:translateX(-50%); width:260px; padding:12px; background:linear-gradient(135deg,#4ade80, #60a5fa); border-radius:8px; text-align:center; font-weight:bold; color:#0f1117; box-shadow:0 0 8px rgba(0,0,0,0.6);">
      Geometry Chapter
    </div>
    <!-- Main Sections -->
    <div style="position:absolute; top:140px; left:20%; width:240px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117;">
      Lines, Angles &amp; Triangles
    </div>
    <div style="position:absolute; top:140px; left:70%; width:240px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117;">
      Circles &amp; Polygons
    </div>
    <!-- Sub‑nodes – Lines & Angles -->
    <div style="position:absolute; top:260px; left:12%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Slope</strong><br/>m = (y₂‑y₁)/(x₂‑x₁)
    </div>
    <div style="position:absolute; top:340px; left:12%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Distance</strong><br/>d = √[(x₂‑x₁)²+(y₂‑y₁)²]
    </div>
    <div style="position:absolute; top:420px; left:12%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Angle between lines</strong><br/>tan θ = |(m₁‑m₂)/(1+m₁m₂)|
    </div>
    <!-- Sub‑nodes – Triangles -->
    <div style="position:absolute; top:260px; left:38%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Sum of angles</strong><br/>∠A+∠B+∠C = 180°
    </div>
    <div style="position:absolute; top:340px; left:38%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Area (½ base × height)</strong><br/>Δ = ½·b·h
    </div>
    <div style="position:absolute; top:420px; left:38%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Heron’s formula</strong><br/>s = (a+b+c)/2<br/>Δ = √[s(s‑a)(s‑b)(s‑c)]
    </div>
    <!-- Sub‑nodes – Circles -->
    <div style="position:absolute; top:260px; left:62%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Circumference</strong><br/>C = 2πr
    </div>
    <div style="position:absolute; top:340px; left:62%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Area</strong><br/>A = πr²
    </div>
    <div style="position:absolute; top:420px; left:62%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Chord length</strong><br/>c = 2r sin(θ/2)
    </div>
    <!-- Sub‑nodes – Polygons -->
    <div style="position:absolute; top:260px; left:88%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Interior angle</strong><br/>I = (n‑2)·180°/n
    </div>
    <div style="position:absolute; top:340px; left:88%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Area of regular n‑gon</strong><br/>A = (n s²/4)·cot(π/n)
    </div>
    <div style="position:absolute; top:420px; left:88%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Euler’s formula (polyhedron)</strong><br/>V − E + F = 2
    </div>
    <!-- Problem‑Solving Flowchart -->
    <div style="position:absolute; top:560px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      1️⃣ Understand Question
    </div>
    <div style="position:absolute; top:640px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      2️⃣ Draw Diagram
    </div>
    <div style="position:absolute; top:720px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      3️⃣ Mark Given / Find
    </div>
    <div style="position:absolute; top:800px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      4️⃣ Choose Theorem / Formula
    </div>
    <div style="position:absolute; top:880px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      5️⃣ Substitute &amp; Solve
    </div>
    <div style="position:absolute; top:960px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      6️⃣ Verify &amp; Answer
    </div>
    <!-- SVG Connectors -->
    <svg width="1200" height="1100" style="position:absolute; top:0; left:0;">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,10 L10,5 Z" fill="#e2e8f0"/>
        </marker>
      </defs>
      <!-- Chapter to Sections -->
      <line x1="600" y1="80" x2="300" y2="140" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="600" y1="80" x2="900" y2="140" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Lines & Angles to Sub‑nodes -->
      <line x1="300" y1="170" x2="260" y2="260" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="300" y1="170" x2="260" y2="340" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="300" y1="170" x2="260" y2="420" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Triangles to Sub‑nodes -->
      <line x1="400" y1="170" x2="440" y2="260" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="400" y1="170" x2="440" y2="340" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="400" y1="170" x2="440" y2="420" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Circles to Sub‑nodes -->
      <line x1="800" y1="170" x2="740" y2="260" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="800" y1="170" x2="740" y2="340" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="800" y1="170" x2="740" y2="420" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Polygons to Sub‑nodes -->
      <line x1="900" y1="170" x2="940" y2="260" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="900" y1="170" x2="940" y2="340" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="900" y1="170" x2="940" y2="420" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Flowchart connectors -->
      <line x1="730" y1="620" x2="730" y2="640" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="730" y1="700" x2="730" y2="720" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="730" y1="780" x2="730" y2="800" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="730" y1="860" x2="730" y2="880" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="730" y1="940" x2="730" y2="960" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["mathematics__mensuration"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">
  <!-- Title Bar -->
  <div style="background:#1f2937; color:#4ade80; font-size:28px; font-weight:bold; text-align:center; padding:12px 0; border-radius:6px; margin-bottom:30px;">
    Mensuration
  </div>

  <!-- Central Node -->
  <div style="display:flex; flex-direction:column; align-items:center; position:relative;">
    <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:16px 32px; font-size:20px; margin-bottom:40px;">
      Mensuration
    </div>

    <!-- Branches Container -->
    <div style="display:flex; justify-content:space-between; width:100%; max-width:1200px; position:relative;">
      <!-- 2D Figures Column -->
      <div style="flex:1; margin-right:20px;">
        <div style="background:#60a5fa; color:#0f1117; font-weight:bold; text-align:center; border-radius:6px; padding:8px; margin-bottom:12px;">
          2D Figures: Area &amp; Perimeter
        </div>

        <!-- Square -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Square</strong><br>
          Area = a²<br>
          Perimeter = 4a
        </div>

        <!-- Rectangle -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Rectangle</strong><br>
          Area = l × b<br>
          Perimeter = 2(l + b)
        </div>

        <!-- Circle -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Circle</strong><br>
          Area = πr²<br>
          Circumference = 2πr
        </div>

        <!-- Triangle -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Triangle</strong><br>
          Area = ½ × base × height<br>
          Perimeter = a + b + c
        </div>

        <!-- Parallelogram -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Parallelogram</strong><br>
          Area = base × height<br>
          Perimeter = 2(base + side)
        </div>

        <!-- Trapezium -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px;">
          <strong>Trapezium</strong><br>
          Area = ½ × (a + b) × height<br>
          Perimeter = a + b + c + d
        </div>
      </div>

      <!-- 3D Solids Column -->
      <div style="flex:1; margin-left:20px;">
        <div style="background:#4ade80; color:#0f1117; font-weight:bold; text-align:center; border-radius:6px; padding:8px; margin-bottom:12px;">
          3D Solids: Surface Area &amp; Volume
        </div>

        <!-- Cube -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Cube</strong><br>
          SA = 6a²<br>
          Volume = a³
        </div>

        <!-- Cuboid -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Cuboid</strong><br>
          SA = 2(lw + lh + wh)<br>
          Volume = l w h
        </div>

        <!-- Sphere -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Sphere</strong><br>
          SA = 4πr²<br>
          Volume = 4⁄3 πr³
        </div>

        <!-- Cylinder -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Cylinder</strong><br>
          SA = 2πr(h + r)<br>
          Volume = πr²h
        </div>

        <!-- Cone -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Cone</strong><br>
          SA = πr(l + r) (l = √(r²+h²))<br>
          Volume = 1⁄3 πr²h
        </div>

        <!-- Hemisphere -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px;">
          <strong>Hemisphere</strong><br>
          SA = 3πr²<br>
          Volume = 2⁄3 πr³
        </div>
      </div>
    </div>

    <!-- Connecting Arrows (SVG) -->
    <svg width="100%" height="200" style="position:absolute; top:120px; left:0; pointer-events:none;">
      <!-- Arrow from central node to 2D column -->
      <line x1="50%" y1="0" x2="25%" y2="80" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <polygon points="25% 78, 25% 82, 23% 80" fill="rgba(255,255,255,0.4)"/>
      <!-- Arrow from central node to 3D column -->
      <line x1="50%" y1="0" x2="75%" y2="80" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <polygon points="75% 78, 75% 82, 77% 80" fill="rgba(255,255,255,0.4)"/>
    </svg>

    <!-- Problem‑Solving Flowchart -->
    <div style="margin-top:260px; width:100%; max-width:1100px; background:#1f2937; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:20px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap;">
        <!-- Step 1 -->
        <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          1️⃣ Identify Figure (2D / 3D)
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 2 -->
        <div style="background:#60a5fa; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          2️⃣ List Given Data (sides, radius, height…)
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 3 -->
        <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          3️⃣ Choose Correct Formula
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 4 -->
        <div style="background:#60a5fa; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          4️⃣ Substitute Values
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 5 -->
        <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          5️⃣ Compute &amp; Simplify
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 6 -->
        <div style="background:#60a5fa; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          6️⃣ Verify Units &amp; Answer
        </div>
      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["mathematics__arithmetic"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <!-- Title Bar -->
  <div style="background:#1e293b; padding:12px 20px; text-align:center; font-size:24px; font-weight:bold; color:#4ade80; border-bottom:1px solid rgba(255,255,255,0.12);">
    Arithmetic
  </div>
  <!-- Diagram -->
  <svg width="1200" height="900" style="background:#0f1117; display:block; margin:auto;">
    <!-- Arrow marker definition -->
    <defs>
      <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 Z" fill="#4ade80"/>
      </marker>
      <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 Z" fill="#60a5fa"/>
      </marker>
    </defs>

    <!-- Central Node -->
    <rect x="460" y="60" width="280" height="70" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="100" text-anchor="middle" fill="#e2e8f0" font-size="20" font-weight="bold">Arithmetic</text>

    <!-- Main Branches -->
    <!-- Percentages & Profit/Loss -->
    <line x1="600" y1="130" x2="300" y2="250" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="210" y="250" width="180" height="70" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="300" y="285" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">Percentages & P&amp;L</text>

    <!-- Ratios, Proportions & Averages -->
    <line x1="600" y1="130" x2="600" y2="250" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <rect x="510" y="250" width="180" height="70" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="285" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">Ratios &amp; Averages</text>

    <!-- Time, Speed, Distance & Work -->
    <line x1="600" y1="130" x2="900" y2="250" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="810" y="250" width="180" height="70" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="900" y="285" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">T‑S‑D &amp; Work</text>

    <!-- Sub‑nodes for Percentages & P&L -->
    <line x1="300" y1="320" x2="180" y2="440" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="90" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="180" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Percentages</text>
    <text x="180" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="180" dy="0">% = (Part/Whole)×100</tspan>
      <tspan x="180" dy="16">Increase% = ((New‑Old)/Old)×100</tspan>
      <tspan x="180" dy="16">Decrease% = ((Old‑New)/Old)×100</tspan>
    </text>

    <line x1="300" y1="320" x2="420" y2="440" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="330" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="420" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Profit &amp; Loss</text>
    <text x="420" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="420" dy="0">Profit% = (Profit/CP)×100</tspan>
      <tspan x="420" dy="16">Loss%   = (Loss/SP)×100</tspan>
      <tspan x="420" dy="16">SP = CP × (1 + Profit%/100)</tspan>
      <tspan x="420" dy="16">CP = SP ÷ (1 + Profit%/100)</tspan>
    </text>

    <!-- Sub‑nodes for Ratios & Averages -->
    <line x1="600" y1="320" x2="540" y2="440" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <rect x="450" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="540" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Ratios &amp; Proportions</text>
    <text x="540" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="540" dy="0">a:b = c:d ⇒ ad = bc</tspan>
      <tspan x="540" dy="16">Compound Ratio = (a:b)×(b:c) = a:c</tstack>
      <tspan x="540" dy="16">Division of Number → (Ratio × Total) / ΣRatios</tspan>
    </text>

    <line x1="600" y1="320" x2="660" y2="440" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <rect x="570" y="440" width="180" height="80" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="660" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Averages</text>
    <text x="660" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="660" dy="0">Average = ΣValues / n</tspan>
      <tspan x="660" dy="16">New Avg = (Σ + New)/ (n+1)</tspan>
      <tspan x="660" dy="16">Missing Value = n·Avg – ΣKnown</tspan>
    </text>

    <!-- Sub‑nodes for Time, Speed, Distance & Work -->
    <line x1="900" y1="320" x2="960" y2="440" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="870" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="960" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Speed‑Distance‑Time</text>
    <text x="960" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="960" dy="0">Speed = Distance / Time</tspan>
      <tspan x="960" dy="16">Distance = Speed × Time</tspan>
      <tspan x="960" dy="16">Time = Distance / Speed</tspan>
      <tspan x="960" dy="16">Relative Speed = |S1 – S2| (Opposite) or S1+S2 (Same)</tspan>
    </text>

    <line x1="900" y1="320" x2="840" y2="440" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="750" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="840" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Work &amp; Efficiency</text>
    <text x="840" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="840" dy="0">Work = Rate × Time</tspan>
      <tspan x="840" dy="16">Rate = 1 / (Time to finish one unit)</tspan>
      <tspan x="840" dy="16">Combined Rate = Σ Individual Rates</tspan>
      <tspan x="840" dy="16">Efficiency% = (Actual Rate / Standard Rate)×100</tspan>
    </text>

    <!-- Problem‑Solving Flow (generic) -->
    <rect x="460" y="720" width="280" height="140" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="750" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Problem‑Solving Steps</text>
    <text x="600" y="770" text-anchor="middle" fill="#e2e8f0" font-size="14">
      <tspan x="600" dy="0">1️⃣ Read &amp; Identify data</tspan>
      <tspan x="600" dy="20">2️⃣ Choose appropriate formula</tspan>
      <tspan x="600" dy="20">3️⃣ Convert units (if needed)</tspan>
      <tspan x="600" dy="20">4️⃣ Substitute &amp; solve</tspan>
      <tspan x="600" dy="20">5️⃣ Check reasonableness</tspan>
    </text>

    <!-- Connecting arrows to Problem‑Solving -->
    <line x1="300" y1="540" x2="600" y2="720" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <line x1="600" y1="540" x2="600" y2="720" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <line x1="900" y1="540" x2="600" y2="720" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
  </svg>
</div>
`;

DIAGRAMS_DB["mathematics__quantitative-aptitude"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <div style="background:#4ade80; color:#0f1117; text-align:center; font-size:24px; font-weight:bold; padding:12px 0; border-radius:6px; margin-bottom:20px;">
    Numerical Aptitude
  </div>
  <div style="position:relative; width:1200px; height:800px; margin:auto;">
    <!-- SVG arrows -->
    <svg width="1200" height="800" style="position:absolute; left:0; top:0; pointer-events:none;">
      <!-- Central to Time, Speed & Distance -->
      <line x1="600" y1="120" x2="290" y2="220" stroke="#4ade80" stroke-width="2"/>
      <line x1="600" y1="120" x2="910" y2="220" stroke="#4ade80" stroke-width="2"/>
      <!-- Vertical lines under each topic -->
      <line x1="290" y1="260" x2="290" y2="320" stroke="#4ade80" stroke-width="2"/>
      <line x1="290" y1="360" x2="290" y2="460" stroke="#4ade80" stroke-width="2"/>
      <line x1="910" y1="260" x2="910" y2="320" stroke="#4ade80" stroke-width="2"/>
      <line x1="910" y1="360" x2="910" y2="460" stroke="#4ade80" stroke-width="2"/>
    </svg>

    <!-- Central Node -->
    <div style="position:absolute; left:500px; top:40px; width:200px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:15px; text-align:center;">
      <strong style="font-size:20px; color:#4ade80;">Numerical Aptitude</strong>
    </div>

    <!-- Time, Speed & Distance Topic -->
    <div style="position:absolute; left:180px; top:200px; width:220px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px;">
      <strong style="color:#60a5fa; font-size:18px;">Time, Speed & Distance</strong>
    </div>

    <!-- Formulas for TSD -->
    <div style="position:absolute; left:180px; top:300px; width:220px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px; line-height:1.6;">
      <strong style="color:#4ade80;">Key Formulas</strong><br>
      • Speed (S) = Distance (D) ÷ Time (T)  S = D/T<br>
      • Distance (D) = Speed × Time  D = S × T<br>
      • Time (T) = Distance ÷ Speed  T = D/S<br>
      • Relative Speed (Opposite) = S₁ + S₂<br>
      • Relative Speed (Same) = |S₁ – S₂|
    </div>

    <!-- Problem‑Solving Steps for TSD -->
    <div style="position:absolute; left:180px; top:460px; width:220px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px; line-height:1.6;">
      <strong style="color:#4ade80;">Solution Steps</strong><br>
      1️⃣ Identify known & unknown variables.<br>
      2️⃣ Choose the appropriate formula.<br>
      3️⃣ Convert units (km ↔ m, hr ↔ sec).<br>
      4️⃣ Substitute & solve for the unknown.<br>
      5️⃣ Check the answer’s plausibility.
    </div>

    <!-- Ratios, Proportions & Percentages Topic -->
    <div style="position:absolute; left:780px; top:200px; width:240px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px;">
      <strong style="color:#60a5fa; font-size:18px;">Ratios, Proportions & Percentages</strong>
    </div>

    <!-- Formulas for Ratios -->
    <div style="position:absolute; left:780px; top:300px; width:240px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px; line-height:1.6;">
      <strong style="color:#4ade80;">Key Formulas</strong><br>
      • Ratio: a : b = c : d ⇔ a/b = c/d<br>
      • Proportion (cross‑multiply): a·d = b·c<br>
      • Percentage: P % = (P/100) × Value<br>
      • Simple Interest: SI = (P × R × T)/100<br>
      • Compound Interest: A = P(1 + r/n)^{nt}
    </div>

    <!-- Problem‑Solving Steps for Ratios -->
    <div style="position:absolute; left:780px; top:460px; width:240px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px; line-height:1.6;">
      <strong style="color:#4ade80;">Solution Steps</strong><br>
      1️⃣ Convert % to decimal (÷100).<br>
      2️⃣ Write the given ratio/proportion.<br>
      3️⃣ Cross‑multiply or apply the relevant formula.<br>
      4️⃣ Solve for the required term.<br>
      5️⃣ Verify with original units/conditions.
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["english__grammar-rules"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#4ade80;color:#0f1117;padding:12px 20px;font-size:24px;font-weight:bold;text-align:center;">
    Grammar &amp; Usage
  </div>
  <div style="position:relative;width:1200px;height:1200px;background:#0f1117;margin:auto;">
    <!-- SVG lines -->
    <svg width="1200" height="1200" style="position:absolute;top:0;left:0;pointer-events:none;">
      <!-- Central to outer nodes -->
      <line x1="600" y1="400" x2="210" y2="190" stroke="#60a5fa" stroke-width="2"/>
      <line x1="600" y1="400" x2="550" y2="60" stroke="#60a5fa" stroke-width="2"/>
      <line x1="600" y1="400" x2="890" y2="190" stroke="#60a5fa" stroke-width="2"/>
      <line x1="600" y1="400" x2="1050" y2="340" stroke="#60a5fa" stroke-width="2"/>
      <line x1="600" y1="400" x2="890" y2="500" stroke="#60a5fa" stroke-width="2"/>
      <line x1="600" y1="400" x2="550" y2="660" stroke="#60a5fa" stroke-width="2"/>
      <line x1="600" y1="400" x2="210" y2="500" stroke="#60a5fa" stroke-width="2"/>
      <line x1="600" y1="400" x2="70" y2="340" stroke="#60a5fa" stroke-width="2"/>
      <line x1="600" y1="400" x2="440" y2="770" stroke="#60a5fa" stroke-width="2"/>
      <!-- Outer to sub‑nodes (Parts of Speech) -->
      <line x1="210" y1="190" x2="210" y2="290" stroke="#60a5fa" stroke-width="2"/>
      <line x1="210" y1="190" x2="210" y2="370" stroke="#60a5fa" stroke-width="2"/>
      <line x1="210" y1="190" x2="210" y2="450" stroke="#60a5fa" stroke-width="2"/>
      <!-- Tenses & Consistency -->
      <line x1="550" y1="60" x2="550" y2="140" stroke="#60a5fa" stroke-width="2"/>
      <line x1="550" y1="60" x2="550" y2="220" stroke="#60a5fa" stroke-width="2"/>
      <line x1="550" y1="60" x2="550" y2="300" stroke="#60a5fa" stroke-width="2"/>
      <!-- Subject‑Verb Agreement -->
      <line x1="890" y1="190" x2="890" y2="290" stroke="#60a5fa" stroke-width="2"/>
      <line x1="890" y1="190" x2="890" y2="370" stroke="#60a5fa" stroke-width="2"/>
      <line x1="890" y1="190" x2="890" y2="450" stroke="#60a5fa" stroke-width="2"/>
      <!-- Sentence Structure & Parallelism -->
      <line x1="1050" y1="340" x2="1050" y2="440" stroke="#60a5fa" stroke-width="2"/>
      <line x1="1050" y1="340" x2="1050" y2="520" stroke="#60a5fa" stroke-width="2"/>
      <line x1="1050" y1="340" x2="1050" y2="600" stroke="#60a5fa" stroke-width="2"/>
      <!-- Active & Passive Voice -->
      <line x1="890" y1="500" x2="890" y2="600" stroke="#60a5fa" stroke-width="2"/>
      <line x1="890" y1="500" x2="890" y2="680" stroke="#60a5fa" stroke-width="2"/>
      <line x1="890" y1="500" x2="890" y2="760" stroke="#60a5fa" stroke-width="2"/>
      <!-- Direct & Indirect Speech -->
      <line x1="550" y1="660" x2="550" y2="800" stroke="#60a5fa" stroke-width="2"/>
      <line x1="550" y1="660" x2="550" y2="880" stroke="#60a5fa" stroke-width="2"/>
      <line x1="550" y1="660" x2="550" y2="960" stroke="#60a5fa" stroke-width="2"/>
      <!-- Modifiers -->
      <line x1="210" y1="500" x2="210" y2="640" stroke="#60a5fa" stroke-width="2"/>
      <line x1="210" y1="500" x2="210" y2="720" stroke="#60a5fa" stroke-width="2"/>
      <line x1="210" y1="500" x2="210" y2="800" stroke="#60a5fa" stroke-width="2"/>
      <!-- Punctuation Basics -->
      <line x1="70" y1="340" x2="70" y2="440" stroke="#60a5fa" stroke-width="2"/>
      <line x1="70" y1="340" x2="70" y2="520" stroke="#60a5fa" stroke-width="2"/>
      <line x1="70" y1="340" x2="70" y2="600" stroke="#60a5fa" stroke-width="2"/>
      <!-- Transformation of Sentences -->
      <line x1="440" y1="770" x2="440" y2="870" stroke="#60a5fa" stroke-width="2"/>
      <line x1="440" y1="770" x2="440" y2="950" stroke="#60a5fa" stroke-width="2"/>
      <line x1="440" y1="770" x2="440" y2="1070" stroke="#60a5fa" stroke-width="2"/>
    </svg>

    <!-- Central Node -->
    <div style="position:absolute;left:500px;top:360px;width:200px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Grammar &amp; Usage</strong>
    </div>

    <!-- Parts of Speech -->
    <div style="position:absolute;left:120px;top:150px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Parts of Speech</strong>
    </div>
    <div style="position:absolute;left:120px;top:250px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> 8 parts – N, P, V, Adj, Adv, Prep, Conj, Interj
    </div>
    <div style="position:absolute;left:120px;top:330px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> She (pron.) runs (verb) quickly (adv).
    </div>
    <div style="position:absolute;left:120px;top:410px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> “Fast” can be Adj or Adv.
    </div>

    <!-- Tenses & Consistency -->
    <div style="position:absolute;left:460px;top:20px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Tenses &amp; Consistency</strong>
    </div>
    <div style="position:absolute;left:460px;top:100px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> Simple Present = S + V(s/es); Present Cont = S + am/is/are + V‑ing
    </div>
    <div style="position:absolute;left:460px;top:180px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> He plays cricket.
    </div>
    <div style="position:absolute;left:460px;top:260px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> Irregular verbs – go → went.
    </div>

    <!-- Subject‑Verb Agreement -->
    <div style="position:absolute;left:800px;top:150px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Subject‑Verb Agreement</strong>
    </div>
    <div style="position:absolute;left:800px;top:250px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> Singular → singular verb; Plural → plural verb
    </div>
    <div style="position:absolute;left:800px;top:330px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> The list of items is on the table.
    </div>
    <div style="position:absolute;left:800px;top:410px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> Collective nouns may be singular or plural.
    </div>

    <!-- Sentence Structure & Parallelism -->
    <div style="position:absolute;left:960px;top:300px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Sentence Structure &amp; Parallelism</strong>
    </div>
    <div style="position:absolute;left:960px;top:400px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> Keep items in a series in the same grammatical form.
    </div>
    <div style="position:absolute;left:960px;top:480px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> She likes reading, writing, and traveling.
    </div>
    <div style="position:absolute;left:960px;top:560px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> “She likes to read and writing” is incorrect.
    </div>

    <!-- Active & Passive Voice -->
    <div style="position:absolute;left:800px;top:460px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Active &amp; Passive Voice</strong>
    </div>
    <div style="position:absolute;left:800px;top:560px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> Passive = be + past‑participle.
    </div>
    <div style="position:absolute;left:800px;top:640px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> The letter was sent by John.
    </div>
    <div style="position:absolute;left:800px;top:720px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> Stative verbs are not used in passive.
    </div>

    <!-- Direct & Indirect Speech -->
    <div style="position:absolute;left:460px;top:620px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Direct &amp; Indirect Speech</strong>
    </div>
    <div style="position:absolute;left:460px;top:720px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> Backshift tense by one step.
    </div>
    <div style="position:absolute;left:460px;top:800px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> He said, “I am coming.” → He said that he was coming.
    </div>
    <div style="position:absolute;left:460px;top:880px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> Universal truths stay unchanged.
    </div>

    <!-- Modifiers: Misplaced &amp; Dangling -->
    <div style="position:absolute;left:120px;top:460px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Modifiers: Misplaced &amp; Dangling</strong>
    </div>
    <div style="position:absolute;left:120px;top:560px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> Modifier must be placed next to the word it modifies.
    </div>
    <div style="position:absolute;left:120px;top:640px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> “Running quickly, the finish line was reached.” (misplaced)
    </div>
    <div style="position:absolute;left:120px;top:720px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> “After finishing the work, she went home.” (correct)
    </div>

    <!-- Punctuation Basics -->
    <div
`;

DIAGRAMS_DB["english__vocabulary"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:8px; margin-bottom:20px;">
    Vocabulary &amp; Comprehension
  </div>

  <!-- Concept Map Container -->
  <div style="position:relative; width:1200px; height:800px; margin:0 auto;">

    <!-- Central Node -->
    <div style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:20px 30px; border-radius:8px; font-size:20px; font-weight:bold; text-align:center; box-shadow:0 0 12px rgba(255,255,255,0.2);">
      Vocabulary &amp; Comprehension
    </div>

    <!-- High‑Frequency Synonyms/Antonyms -->
    <div style="position:absolute; left:10%; top:15%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>High‑Frequency Synonyms/Antonyms</strong><br><br>
      <u>Synonyms</u><br>
      • Abundant – Plentiful (GRE 2021)<br>
      • Elicit – Evoke (SAT 2020)<br>
      • Mitigate – Alleviate (UPSC 2019)<br><br>
      <u>Antonyms</u><br>
      • Ardent – Apathetic<br>
      • Concur – Dissent<br>
      • Obscure – Clear<br><br>
      <u>Rule</u>: Prefer 1‑syllable synonym for high‑frequency usage.<br>
      <u>Exception</u>: “Obscure” (verb) vs “Obscure” (adj.) – context matters.
    </div>

    <!-- One Word Substitutions -->
    <div style="position:absolute; left:70%; top:10%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>One‑Word Substitutions</strong><br><br>
      • “A person who loves books” – <b>Bibliophile</b><br>
      • “A person who travels a lot” – <b>Nomad</b><br>
      • “Speaking in a very short manner” – <b>Concise</b><br>
      • “Fear of confined spaces” – <b>Claustrophobia</b><br><br>
      <u>Rule</u>: Use the noun form when the clue contains “person”, “thing”, “state”.<br>
      <u>Exception</u>: “A person who writes poetry” – <b>Poet</b> (not “Poetical”).
    </div>

    <!-- Idioms & Phrases -->
    <div style="position:absolute; left:5%; top:65%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>Idioms &amp; Phrases</strong><br><br>
      • <strong>Break the ice</strong> – initiate conversation (used in UPSC 2022)<br>
      • <strong>Hit the sack</strong> – go to sleep (common in NDA interviews)<br>
      • <strong>Burn the midnight oil</strong> – study late (appears in CDS 2021)<br>
      • <strong>Elephant in the room</strong> – obvious problem ignored<br><br>
      <u>Usage Pattern</u>: Idioms are usually verb‑noun collocations; keep tense consistent with surrounding sentence.
    </div>

    <!-- Phrasal Verbs -->
    <div style="position:absolute; left:75%; top:70%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>Phrasal Verbs</strong><br><br>
      • <strong>Look up</strong> – search for information (e.g., “look up a word”).<br>
      • <strong>Carry out</strong> – execute (e.g., “carry out a mission”).<br>
      • <strong>Turn down</strong> – reject (e.g., “turn down an offer”).<br>
      • <strong>Put off</strong> – postpone (e.g., “put off the meeting”).<br><br>
      <u>Rule</u>: If the particle changes meaning, treat as separate entry (e.g., “take off” vs “take off” (remove)).<br>
      <u>Exception</u>: “Get over” (recover) vs “Get over” (physically pass).
    </div>

    <!-- Reading Comprehension -->
    <div style="position:absolute; left:45%; top:85%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>Reading Comprehension</strong><br><br>
      <u>Key Strategies (NDA 2023)</u>:<br>
      1. Skim for gist – 30 seconds.<br>
      2. Locate “who, what, when, where, why”.<br>
      3. Highlight transition words (however, therefore).<br>
      4. Answer inference questions first.<br>
      5. Watch out for “negative” qualifiers (never, hardly).<br><br>
      <u>Typical Question Types</u>:<br>
      • Main‑idea (1 mark)<br>
      • Detail‑oriented (2 marks)<br>
      • Inference (3 marks)<br>
      • Vocabulary in context (1 mark)
    </div>

    <!-- Connecting Lines (SVG) -->
    <svg width="1200" height="800" style="position:absolute; left:0; top:0; pointer-events:none;">
      <!-- Central to Synonyms -->
      <line x1="600" y1="400" x2="260" y2="140" stroke="#60a5fa" stroke-width="2"/>
      <!-- Central to One‑Word -->
      <line x1="600" y1="400" x2="940" y2="80" stroke="#60a5fa" stroke-width="2"/>
      <!-- Central to Idioms -->
      <line x1="600" y1="400" x2="140" y2="560" stroke="#60a5fa" stroke-width="2"/>
      <!-- Central to Phrasal Verbs -->
      <line x1="600" y1="400" x2="940" y2="560" stroke="#60a5fa" stroke-width="2"/>
      <!-- Central to Reading Comprehension -->
      <line x1="600" y1="400" x2="580" y2="720" stroke="#60a5fa" stroke-width="2"/>
    </svg>

  </div>
</div>
`;

DIAGRAMS_DB["english__exam-patterns"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#1a1c23; color:#4ade80; padding:12px; font-size:24px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.12);">
    UPSC Exam Practice Patterns
  </div>
  <div style="position:relative; width:1800px; height:1200px; background:#0f1117; margin-top:20px;">
    <!-- Central Node -->
    <div style="position:absolute; left:800px; top:500px; width:260px; background:#1a1c23; color:#e2e8f0; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; text-align:center;">
      <strong>English Grammar Practice</strong><br>
      <small>Core concepts for UPSC English</small>
    </div>

    <!-- Spotting Errors Node -->
    <div style="position:absolute; left:460px; top:260px; width:240px; background:#1a1c23; color:#e2e8f0; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <strong>Spotting Errors</strong><br>
      <ul style="margin:8px 0; padding-left:18px; line-height:1.4;">
        <li><strong>Rule:</strong> Identify subject‑verb agreement, tense consistency, idiom misuse, preposition errors.</li>
        <li><strong>Example:</strong> “She go to school.” → “She <span style="color:#4ade80;">goes</span> to school.”</li>
        <li><strong>Exception:</strong> Collective nouns – “The team <span style='color:#4ade80;'>is</span> winning” (singular) vs “The team <span style='color:#4ade80;'>are</span> arguing” (British style).</li>
        <li><strong>Usage Pattern:</strong> In UPSC, 42% of grammar questions (2022 prelims) are error‑spotting.</li>
      </ul>
    </div>

    <!-- Sentence Improvement Node -->
    <div style="position:absolute; left:770px; top:80px; width:260px; background:#1a1c23; color:#e2e8f0; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <strong>Sentence Improvement</strong><br>
      <ul style="margin:8px 0; padding-left:18px; line-height:1.4;">
        <li><strong>Rule:</strong> Use parallelism, avoid redundancy, prefer active voice.</li>
        <li><strong>Example:</strong> “He is not only intelligent but also hardworking.”</li>
        <li><strong>Exception:</strong> Split infinitives are acceptable when they improve clarity – “to boldly go”.</li>
        <li><strong>Usage Pattern:</strong> 28% of UPSC English questions (2023) test sentence improvement.</li>
      </ul>
    </div>

    <!-- Ordering of Words & Sentences Node -->
    <div style="position:absolute; left:1240px; top:260px; width:260px; background:#1a1c23; color:#e2e8f0; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <strong>Ordering of Words &amp; Sentences</strong><br>
      <ul style="margin:8px 0; padding-left:18px; line-height:1.4;">
        <li><strong>Rule:</strong> Maintain logical flow; use transition words (First, Then, Finally).</li>
        <li><strong>Example:</strong> “First, the economy grew. Then, inflation fell. Finally, employment rose.”</li>
        <li><strong>Exception:</strong> Avoid “chronological trap” – don’t force chronological order when logical order differs.</li>
        <li><strong>Usage Pattern:</strong> 15% of UPSC English questions (2021) involve ordering tasks.</li>
      </ul>
    </div>

    <!-- Fill in the Blanks & Cloze Test Node -->
    <div style="position:absolute; left:770px; top:660px; width:260px; background:#1a1c23; color:#e2e8f0; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <strong>Fill in the Blanks &amp; Cloze Test</strong><br>
      <ul style="margin:8px 0; padding-left:18px; line-height:1.4;">
        <li><strong>Rule:</strong> Use correct collocations & prepositions; watch for “a/an” before vowel‑sound vs consonant‑sound.</li>
        <li><strong>Example:</strong> “He is ___ (keen) about music.” → “He is <span style="color:#4ade80;">keen on</span> music.”</li>
        <li><strong>Exception:</strong> “An hour” (vowel sound) vs “A university” (consonant sound).</li>
        <li><strong>Usage Pattern:</strong> 35% of UPSC 2023 prelims cloze items were GRE‑style vocabulary.</li>
      </ul>
    </div>

    <!-- Connecting Lines (SVG) -->
    <svg style="position:absolute; left:0; top:0; width:1800px; height:1200px; pointer-events:none;">
      <!-- Central to Spotting Errors -->
      <line x1="930" y1="560" x2="580" y2="380" stroke="#60a5fa" stroke-width="2"/>
      <!-- Central to Sentence Improvement -->
      <line x1="930" y1="560" x2="900" y2="200" stroke="#60a5fa" stroke-width="2"/>
      <!-- Central to Ordering of Words & Sentences -->
      <line x1="930" y1="560" x2="1370" y2="380" stroke="#60a5fa" stroke-width="2"/>
      <!-- Central to Fill in the Blanks -->
      <line x1="930" y1="560" x2="900" y2="660" stroke="#60a5fa" stroke-width="2"/>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["polity__constitution-basics"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:1.5em; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Constitutional Framework
  </div>

  <!-- Org Chart Container -->
  <div style="display:flex; flex-direction:column; align-items:center; position:relative;">

    <!-- Root Node -->
    <div style="background:#60a5fa; color:#0f1117; padding:12px 24px; border-radius:6px; font-weight:600; margin-bottom:30px; position:relative;">
      Constitution of India (Adopted 26 Jan 1950)
      <div style="position:absolute; left:50%; bottom:-20px; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
    </div>

    <!-- Level 1 -->
    <div style="display:flex; justify-content:center; gap:30px; flex-wrap:wrap; position:relative;">

      <!-- Preamble & Sources -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:180px; position:relative;">
        <strong>Preamble & Sources</strong><br>
        Date: 26 Jan 1950<br>
        Source: Constituent Assembly Debates
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

      <!-- Schedules of the Constitution -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:180px; position:relative;">
        <strong>Schedules</strong><br>
        7 (original 8) schedules<br>
        Key: Union‑State Relations, Powers, etc.
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

      <!-- Fundamental Rights -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:200px; position:relative;">
        <strong>Fundamental Rights</strong><br>
        Articles 12‑35
        <div style="margin-top:6px; font-size:0.9em; text-align:left;">
          • Equality (Art 14‑18)<br>
          • Freedom (Art 19‑22)<br>
          • Exploitation (Art 23‑24)<br>
          • Religion (Art 25‑28)<br>
          • Cultural/Educational (Art 29‑30)<br>
          • Remedy (Art 32)
        </div>
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

      <!-- DPSP & Fundamental Duties -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:220px; position:relative;">
        <strong>DPSP & Fundamental Duties</strong><br>
        Articles 36‑51A
        <div style="margin-top:6px; font-size:0.9em; text-align:left;">
          • DPSP (Art 36‑44)<br>
          • Duties (Art 51A) – 11 duties
        </div>
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

      <!-- Citizenship -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:180px; position:relative;">
        <strong>Citizenship</strong><br>
        Articles 5‑11
        <div style="margin-top:6px; font-size:0.9em; text-align:left;">
          • By birth, descent, registration, naturalisation
        </div>
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

    </div>

    <!-- Horizontal Connectors -->
    <div style="position:absolute; top:calc(100% + 10px); left:0; right:0; height:2px; background:rgba(255,255,255,0.12);"></div>
  </div>
</div>
`;

DIAGRAMS_DB["polity__union-executive"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <div style="background:#4ade80; color:#0f1117; text-align:center; font-size:24px; font-weight:bold; padding:12px; border-radius:6px; margin-bottom:20px;">
    Union Government
  </div>
  <div style="display:flex; flex-direction:column; align-items:center;">
    <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:180px; text-align:center; font-weight:600; margin:4px 0;">
      Union Government
    </div>
    <div style="height:20px; width:2px; background:#60a5fa; margin:4px 0;"></div>
    <div style="height:2px; width:100%; max-width:900px; background:#60a5fa; margin:4px 0;"></div>
    <div style="display:flex; justify-content:space-around; width:100%; max-width:900px; margin-top:20px;">
      <!-- Executive Branch -->
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="height:2px; width:80px; background:#60a5fa; margin-bottom:4px;"></div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:140px; text-align:center; font-weight:600;">
          Executive
        </div>
        <div style="height:20px; width:2px; background:#60a5fa; margin:8px 0;"></div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:200px; text-align:center; font-weight:600; margin:4px 0;">
          President (Art 52‑62)
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:140px; text-align:center; font-weight:600; margin:4px 0;">
          Prime Minister
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:140px; text-align:center; font-weight:600; margin:4px 0;">
          Governor (Art 153)
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:140px; text-align:center; font-weight:600; margin:4px 0;">
          Chief Minister
        </div>
      </div>
      <!-- Legislature Branch -->
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="height:2px; width:80px; background:#60a5fa; margin-bottom:4px;"></div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:140px; text-align:center; font-weight:600;">
          Legislature
        </div>
        <div style="height:20px; width:2px; background:#60a5fa; margin:8px 0;"></div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:200px; text-align:center; font-weight:600; margin:4px 0;">
          Parliament (Art 79‑122)
        </div>
        <div style="display:flex; justify-content:space-between; width:260px; margin-top:6px;">
          <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:110px; text-align:center; font-weight:600;">
            Lok Sabha (Art 79)
          </div>
          <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:110px; text-align:center; font-weight:600;">
            Rajya Sabha (Art 80)
          </div>
        </div>
      </div>
      <!-- Judiciary Branch -->
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="height:2px; width:80px; background:#60a5fa; margin-bottom:4px;"></div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:140px; text-align:center; font-weight:600;">
          Judiciary
        </div>
        <div style="height:20px; width:2px; background:#60a5fa; margin:8px 0;"></div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:200px; text-align:center; font-weight:600; margin:4px 0;">
          Supreme Court (Art 124)
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:180px; text-align:center; font-weight:600; margin:4px 0;">
          High Courts (Art 214)
        </div>
      </div>
      <!-- Local Governance Branch -->
      <div style="display:flex; flex-direction:column; align-items:center;">
        <div style="height:2px; width:80px; background:#60a5fa; margin-bottom:4px;"></div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:180px; text-align:center; font-weight:600;">
          Local Governance
        </div>
        <div style="height:20px; width:2px; background:#60a5fa; margin:8px 0;"></div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:260px; text-align:center; font-weight:600; margin:4px 0;">
          Panchayati Raj (73rd Amendment, 1992)
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:260px; text-align:center; font-weight:600; margin:4px 0;">
          Urban Local Bodies (74th Amendment, 1992)
        </div>
      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["polity__polity-advanced"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:20px;">
    <div style="background:#4ade80; color:#0f1117; padding:12px; font-size:24px; font-weight:bold; text-align:center; border-radius:8px; margin-bottom:20px;">
      Advanced Polity Structures &amp; Bodies
    </div>
    <table style="width:100%; border-collapse:collapse; table-layout:fixed;">
      <colgroup>
        <col style="width:2%;">
        <col style="width:24%;">
        <col style="width:24%;">
        <col style="width:24%;">
        <col style="width:24%;">
      </colgroup>
      <!-- Root -->
      <tr>
        <td colspan="5" style="background:#60a5fa; color:#0f1117; font-weight:bold; text-align:center; padding:12px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Indian Constitution (Adopted 26 Jan 1950, Effective 26 Jan 1950)
        </td>
      </tr>
      <!-- Level 1 -->
      <tr>
        <td></td>
        <td colspan="4" style="background:#4ade80; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Constitutional Bodies (Articles 52‑78, 324, 280, 315‑321)
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="4" style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Non‑Constitutional Bodies (Statutory/Advisory)
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="4" style="background:#f59e0b; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Emergency Provisions
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="4" style="background:#4ade80; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Constitutional Amendments (Articles 368, 42nd, 44th, 73rd, 74th)
        </td>
      </tr>
      <!-- Constitutional Bodies – Level 2 -->
      <tr>
        <td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:6px; border:1px solid rgba(255,255,255,0.12); border-radius:4px;">
            President of India
          </div>
        </td>
        <td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:6px; border:1px solid rgba(255,255,255,0.12); border-radius:4px;">
            Vice‑President of India
          </div>
        </td>
        <td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:6px; border:1px solid rgba(255,255,255,0.12); border-radius:4px;">
            Parliament (Lok Sabha &amp; Rajya Sabha)
          </div>
        </td>
        <td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:6px; border:1px solid rgba(255,255,255,0.12); border-radius:4px;">
            Supreme Court
          </div>
        </td>
        <td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:6px; border:1px solid rgba(255,255,255,0.12); border-radius:4px;">
            High Courts (State)
          </div>
        </td>
        <td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:6px; border:1px solid rgba(255,255,255,0.12); border-radius:4px;">
            Election Commission of India (ECI)
          </div>
        </td>
        <td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:6px; border:1px solid rgba(255,255,255,0.12); border-radius:4px;">
            Finance Commission
          </div>
        </td>
        <td></td><td></td><td></td>
      </tr>
      <tr>
        <td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:6px; border:1px solid rgba(255,255,255,0.12); border-radius:4px;">
            Union Public Service Commission (UPSC)
          </div>
        </td>
        <td></td><td></td><td></td>
      </tr>
      <!-- Constitutional Bodies – Details (Level 3) -->
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            President – Article 52, 53, 61; Powers: Executive, Commander‑in‑Chief, Appoints PM, Governors, Judges, etc.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Vice‑President – Article 62, 63; Ex‑officio Chairperson of Rajya Sabha.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Parliament – Articles 79‑122; Lok Sabha (max 545 members, 5‑yr term), Rajya Sabha (max 250, 6‑yr term, 1/3 retire every 2 yr).
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Supreme Court – Article 124‑147; Highest judicial authority, Judicial Review, Original jurisdiction in disputes between Centre & States.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            High Courts – Article 214; State‑level apex courts, jurisdiction over state matters.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Election Commission – Article 324; Conducts elections to Parliament, State Legislatures, and Presidential elections.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Finance Commission – Article 280; Recommends distribution of tax revenue between Centre & States (first appointed 1957).
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            UPSC – Article 315‑322; Conducts Civil Services Examination, recruitment for All‑India Services.
          </div>
        </td><td></td><td></td>
      </tr>
      <!-- Non‑Constitutional Bodies – Level 2 -->
      <tr>
        <td></td><td></td>
        <td colspan="3" style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Non‑Constitutional / Statutory Bodies
        </td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #60a5fa; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            NITI Aayog (2015) – Replaced Planning Commission; Policy think‑tank.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #60a5fa; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Comptroller and Auditor General (CAG) – Article 149; Audits government accounts.
          </div>
        </td><td></td><td></td>
      </tr>
      <!-- Emergency Provisions – Level 2 -->
      <tr>
        <td></td><td></td>
        <td colspan="3" style="background:#f59e0b; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Emergency Provisions
        </td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #f59e0b; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            National Emergency – Article 352; President may proclaim on war/armed rebellion; 0‑6 months (extendable up to 3 years).
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #f59e0b; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            President's Rule (State Emergency) – Article 356; President may assume powers of the State if constitutional machinery fails.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #f59e0b; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Financial Emergency – Article 360; President may proclaim if financial stability threatened; never used.
          </div>
        </td><td></td><td></td>
      </tr>
      <!-- Constitutional Amendments – Level 2 -->
      <tr>
        <td></td><td></td>
        <td colspan="3" style="background:#4ade80; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Constitutional Amendments (Article 368)
        </td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            42nd Amendment (1976) – “Mini‑Constitution”; added words “Secular” and “Socialist” to Preamble; strengthened Parliament.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            44th Amendment (1978) – Restored Fundamental Rights; removed “Judicial Review” limits; added Right to Equality (Article 15).
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            73rd Amendment (1992) – Articles 243‑243‑243‑245; Panchayati Raj Institutions; 25 % reservation for women.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            74th Amendment (1992) – Articles 243‑243‑243‑243‑244; Municipalities; 25 % reservation for women.
          </div>
        </td><td></td><td></td>
      </tr>
    </table>
  </div>
</div>
`;

DIAGRAMS_DB["polity__federal-rpa"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:1.8rem; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:30px;">
    Federal Structure &amp; Election Law
  </div>

  <!-- Org Chart Container -->
  <div style="display:flex; flex-direction:column; align-items:center; position:relative;">

    <!-- Root Node: Constitution of India -->
    <div style="background:linear-gradient(135deg,#1a1c23,#0f1117); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:20px 30px; text-align:center; min-width:260px;">
      <div style="font-size:1.4rem; font-weight:bold; margin-bottom:6px;">Constitution of India</div>
      <div style="font-size:0.9rem;">Adopted: 26 January 1950</div>
      <div style="font-size:0.9rem;">Articles 1‑395</div>
    </div>

    <!-- Connectors from Root to Level‑1 -->
    <div style="width:2px; height:30px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

    <!-- Level‑1 Container -->
    <div style="display:flex; gap:40px; flex-wrap:wrap; justify-content:center;">

      <!-- Federal Structure Branch -->
      <div style="display:flex; flex-direction:column; align-items:center;">

        <!-- Federal Structure Node -->
        <div style="background:linear-gradient(135deg,#1a1c23,#0f1117); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:16px 24px; text-align:center; min-width:240px;">
          <div style="font-size:1.3rem; font-weight:bold; color:#60a5fa;">Federal Structure</div>
        </div>

        <!-- Connector -->
        <div style="width:2px; height:20px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

        <!-- Level‑2: Centre‑State Relations -->
        <div style="background:linear-gradient(135deg,#1a1c23,#0f1117); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px 20px; text-align:center; min-width:220px;">
          <div style="font-size:1.2rem; font-weight:bold;">Centre‑State Relations</div>
        </div>

        <!-- Connector -->
        <div style="width:2px; height:20px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

        <!-- Level‑3: Distribution of Powers -->
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">

          <!-- Legislative List (List I) -->
          <div style="background:#60a5fa33; border:1px solid #60a5fa; border-radius:6px; padding:8px 12px; min-width:200px;">
            <div style="font-weight:bold;">Legislative List (List I)</div>
            <div style="font-size:0.85rem;">Articles 245‑249</div>
            <div style="font-size:0.75rem;">Subjects: Defence, Foreign Affairs, Currency, etc.</div>
          </div>

          <!-- State List (List II) -->
          <div style="background:#60a5fa33; border:1px solid #60a5fa; border-radius:6px; padding:8px 12px; min-width:200px;">
            <div style="font-weight:bold;">State List (List II)</div>
            <div style="font-size:0.85rem;">Articles 250‑252</div>
            <div style="font-size:0.75rem;">Subjects: Police, Public Health, Agriculture, etc.</div>
          </div>

          <!-- Concurrent List (List III) -->
          <div style="background:#60a5fa33; border:1px solid #60a5fa; border-radius:6px; padding:8px 12px; min-width:200px;">
            <div style="font-weight:bold;">Concurrent List (List III)</div>
            <div style="font-size:0.85rem;">Articles 253‑255</div>
            <div style="font-size:0.75rem;">Subjects: Criminal Law, Education, Marriage, etc.</div>
          </div>

        </div>

        <!-- Additional Federal Nodes -->
        <div style="margin-top:20px; display:flex; flex-direction:column; align-items:center; gap:10px;">

          <!-- Inter‑State Relations -->
          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:240px;">
            <div style="font-weight:bold;">Inter‑State Relations</div>
            <div style="font-size:0.85rem;">Article 263</div>
            <div style="font-size:0.75rem;">Dispute settlement by Supreme Court</div>
          </div>

          <!-- Finance Commission -->
          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:240px;">
            <div style="font-weight:bold;">Finance Commission</div>
            <div style="font-size:0.85rem;">Article 280</div>
            <div style="font-size:0.75rem;">Distribution of taxes between Centre &amp; States</div>
          </div>

          <!-- Emergency Provisions -->
          <div style="background:#f59e0b33; border:1px solid #f59e0b; border-radius:6px; padding:8px 12px; min-width:240px;">
            <div style="font-weight:bold;">Emergency Provisions</div>
            <div style="font-size:0.85rem;">Articles 352, 360, 363</div>
            <div style="font-size:0.75rem;">National, Financial, and Constitutional Emergencies</div>
          </div>

        </div>
      </div>

      <!-- Election Law Branch -->
      <div style="display:flex; flex-direction:column; align-items:center;">

        <!-- Election Law Node -->
        <div style="background:linear-gradient(135deg,#1a1c23,#0f1117); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:16px 24px; text-align:center; min-width:240px;">
          <div style="font-size:1.3rem; font-weight:bold; color:#4ade80;">Election Law</div>
        </div>

        <!-- Connector -->
        <div style="width:2px; height:20px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

        <!-- Level‑2: Election Commission of India -->
        <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:12px 20px; text-align:center; min-width:260px;">
          <div style="font-weight:bold;">Election Commission of India (ECI)</div>
          <div style="font-size:0.85rem;">Article 324</div>
          <div style="font-size:0.75rem;">Chief Election Commissioner + 2 Members (appointed by President)</div>
        </div>

        <!-- Connector -->
        <div style="width:2px; height:20px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

        <!-- Level‑3: Powers & Functions -->
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">

          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:280px;">
            <div style="font-weight:bold;">Powers</div>
            <ul style="margin:4px 0 0 18px; padding:0; list-style-type:disc; font-size:0.78rem;">
              <li>Supervise & conduct elections (Art 324)</li>
              <li>Prepare & revise electoral rolls</li>
              <li>Enforce Model Code of Conduct</li>
              <li>Allocate election symbols</li>
            </ul>
          </div>

          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:280px;">
            <div style="font-weight:bold;">Representation of the People Act, 1951 (RPA)</div>
            <ul style="margin:4px 0 0 18px; padding:0; list-style-type:disc; font-size:0.78rem;">
              <li>Section 7 – Voter eligibility (age 18+)</li>
              <li>Section 70 – Election schedule</li>
              <li>Section 96 – Disqualification of MPs/MLAs</li>
              <li>Amended by 73rd & 74th Amendments (1992)</li>
            </ul>
          </div>

          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:280px;">
            <div style="font-weight:bold;">Election Cycle</div>
            <div style="font-size:0.85rem;">General Elections – every 5 years (last: 2019, next: 2024)</div>
            <div style="font-size:0.85rem;">State Assembly Elections – 5‑year term, staggered</div>
            <div style="font-size:0.85rem;">Lok Sabha Seats – 543 constituencies</div>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["history__historiography"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:1.4rem; font-weight:bold;">
    1. Historiography &amp; Historical Foundations
  </div>
  <!-- Timeline Container -->
  <div style="position:relative; height:500px; min-width:2000px; padding-top:80px; background:#0f1117;">
    <!-- Horizontal line -->
    <div style="position:absolute; top:250px; left:0; right:0; height:3px; background:#60a5fa;"></div>
    
    <!-- Event 1: 3000 BCE – Early historiography (Sumerian King List) -->
    <div style="position:absolute; left:5%; top:150px; width:220px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>3000 BCE</strong><br>
        <em>Sumerian King List</em><br>
        Earliest known “chronicle” of rulers.
      </div>
    </div>
    
    <!-- Event 2: 500 BCE – Herodotus writes “Histories” -->
    <div style="position:absolute; left:15%; top:340px; width:240px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>500 BCE</strong><br>
        <em>Herodotus – “Histories”</em><br>
        First systematic inquiry into causes of events.
      </div>
    </div>
    
    <!-- Event 3: 1000 CE – Ibn Khaldun’s Muqaddimah -->
    <div style="position:absolute; left:27%; top:150px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1000 CE</strong><br>
        <em>Ibn Khaldun – “Muqaddimah”</em><br>
        Theory of historiography &amp; sociology of history.
      </div>
    </div>
    
    <!-- Event 4: 1857 – First War of Independence -->
    <div style="position:absolute; left:38%; top:340px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1857</strong><br>
        <em>First War of Independence</em><br>
        Shift from colonial to nationalist narratives.
      </div>
    </div>
    
    <!-- Event 5: 1919 – Jallianwala Bagh Massacre -->
    <div style="position:absolute; left:50%; top:150px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1919</strong><br>
        <em>Jallianwala Bagh</em><br>
        Catalyst for modern Indian historiography.
      </div>
    </div>
    
    <!-- Event 6: 1946 – “The Discovery of India” by Jawaharlal Nehru -->
    <div style="position:absolute; left:62%; top:340px; width:300px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1946</strong><br>
        <em>Jawaharlal Nehru – “The Discovery of India”</em><br>
        First major synthesis of Indian history by a political leader.
      </div>
    </div>
    
    <!-- Event 7: 1950 – Constitution of India (Art. 21) -->
    <div style="position:absolute; left:73%; top:150px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1950</strong><br>
        <em>Constitution – Art. 21</em><br>
        “Right to life &amp; personal liberty” – later a focal point for human‑rights history.
      </div>
    </div>
    
    <!-- Event 8: 1958 – Archaeological Survey of India (ASI) Act -->
    <div style="position:absolute; left:82%; top:340px; width:280px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1958</strong><br>
        <em>ASI Act</em><br>
        Legal framework for protection of archaeological sources.
      </div>
    </div>
    
    <!-- Event 9: 1975 – Bipan Chandra’s “History of Indian Freedom Movement” -->
    <div style="position:absolute; left:92%; top:150px; width:300px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1975</strong><br>
        <em>Bipan Chandra – “History of Indian Freedom Movement”</em><br>
        Standard reference for modern Indian historiography.
      </div>
    </div>
    
    <!-- Event 10: 1990 – Romila Thapar’s “Early India” -->
    <div style="position:absolute; left:105%; top:340px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1990</strong><br>
        <em>Romila Thapar – “Early India”</em><br>
        Critical analysis of ancient sources &amp; dating.
      </div>
    </div>
    
    <!-- Dating Systems Sidebar -->
    <div style="position:absolute; left:115%; top:100px; width:340px; background:#0f1117; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <h3 style="margin:0 0 8px 0; color:#4ade80; font-size:1.2rem;">Dating Systems</h3>
      <ul style="margin:0; padding-left:20px; line-height:1.5;">
        <li><strong>Gregorian Calendar</strong> – AD/BC (e.g., 2023 AD)</li>
        <li><strong>Saka Era</strong> – Year S = Gregorian Y − 78<br><span style="color:#60a5fa;">Formula: Y = S + 78</span></li>
        <li><strong>Vikram Samvat</strong> – Year VS = Gregorian Y + 57 (VS 2078 ≈ 2021 AD)</li>
        <li><strong>Hijri (Islamic) Calendar</strong> – Lunar, 622 AD = 1 AH</li>
        <li><strong>Indian Epigraphic Dates</strong> – Regnal years, e.g., “12th year of Ashoka”</li>
      </ul>
    </div>
    
  </div>
</div>
`;

DIAGRAMS_DB["history__prehistoric-india"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:1.5em; font-weight:bold; border-radius:6px; text-align:center; margin-bottom:30px;">
    2. Prehistoric India
  </div>

  <!-- Timeline Container -->
  <div style="position:relative; padding-top:60px; padding-bottom:40px;">
    <!-- Central Horizontal Line -->
    <div style="position:absolute; top:50px; left:0; right:0; height:2px; background:rgba(255,255,255,0.2);"></div>

    <!-- Timeline Nodes -->
    <div style="display:flex; align-items:flex-start; gap:80px;">

      <!-- Lower Paleolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c. 2.5 Myr – 10 k BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Lower Paleolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Hand‑axes, choppers, &amp; bifaces (Oldowan &amp; Acheulean).<br>
          First stone tool use by Homo erectus.
        </div>
      </div>

      <!-- Middle Paleolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c. 1.5 Myr – 300 k BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Middle Paleolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Mousterian tool kit – Levallois technique.<br>
          Evidence of hunting large fauna.
        </div>
      </div>

      <!-- Upper Paleolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c. 300 k – 10 k BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Upper Paleolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Blade &amp; microlithic technology.<br>
          Cave paintings – Bhimbetka (≈ 100 k years).<br>
          First use of bone &amp; antler tools.
        </div>
      </div>

      <!-- Mesolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c. 10 k – 4 k BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Mesolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Microlithic bladelets (Geometric &amp; Non‑geometric).<br>
          Semi‑nomadic hunter‑gatherers.<br>
          Sites: Bagor (Rajasthan), Langhnaj (Gujarat).
        </div>
      </div>

      <!-- Neolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c. 4 k – 2.5 k BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Neolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Agriculture &amp; domestication of cattle, sheep, goat.<br>
          Pottery (hand‑made &amp; wheel‑turned).<br>
          Settlements: Mehrgarh (≈ 7 k BCE), Burzahom, Koldihawa.
        </div>
      </div>

      <!-- Chalcolithic (Copper Age) -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c. 3 k – 1.5 k BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Chalcolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          First use of copper implements (awls, knives).<br>
          Distinct pottery styles – Black‑and‑red ware, Ochre‑filled.<br>
          Burial mounds (Barabar, Jorwe) &amp; early urban centres.
        </div>
      </div>

      <!-- Rock Art (Bhimbetka) -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">≈ 100 k years BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Rock Art</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Bhimbetka rock shelters – > 750 panels.<br>
          Motifs: hunting scenes, animal tracks, dancing figures.<br>
          UNESCO World Heritage (2003).
        </div>
      </div>

    </div>
  </div>

  <!-- Footer Note -->
  <div style="margin-top:30px; font-size:0.85em; color:#60a5fa; text-align:center;">
    Source: NCERT Class IX – History, Chapter 2; Archaeological Survey of India (ASI) reports.
  </div>
</div>
`;

DIAGRAMS_DB["history__ancient-india-tree"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <div style="background:#4ade80; color:#0f1117; padding:12px; font-size:24px; font-weight:bold; text-align:center;">
    3. Ancient India
  </div>
  <div style="position:relative; min-width:2600px; padding:80px 20px;">
    <!-- Horizontal timeline line -->
    <div style="position:absolute; top:180px; left:0; right:0; height:2px; background:rgba(255,255,255,0.2);"></div>

    <!-- Indus Valley Civilization -->
    <div style="position:absolute; left:5%; top:0; width:220px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        3300–1300 BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Indus Valley Civilization</strong><br>
        • Major sites: Harappa, Mohenjo‑daro, Dholavira<br>
        • Urban planning: grid streets, brick houses, drainage<br>
        • Script undeciphered (≈400 symbols)<br>
        • Trade with Mesopotamia (c. 2500 BCE)
      </div>
    </div>

    <!-- Vedic Age -->
    <div style="position:absolute; left:18%; top:0; width:220px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        1500–500 BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Vedic Age</strong><br>
        • Texts: Rig‑Veda, Samaveda, Yajur‑Veda, Atharva‑Veda<br>
        • Society: Ṛṣi‑guru‑śiṣya system, varna emergence<br>
        • Economy: pastoralism → early agriculture<br>
        • Early iron use (c. 1200 BCE)
      </div>
    </div>

    <!-- Mahajanapadas -->
    <div style="position:absolute; left:31%; top:0; width:220px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        600–300 BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Mahajanapadas</strong><br>
        • 16 major kingdoms (e.g., Kuru, Kosala, Vatsa)<br>
        • Rise of republican states (e.g., Vrijji)<br>
        • Arthashastra‑precursor: Kautilya’s early ideas<br>
        • Urban centres: Taxila, Pataliputra
      </div>
    </div>

    <!-- Magadha Expansion -->
    <div style="position:absolute; left:44%; top:0; width:240px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        500–300 BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Magadha Expansion</strong><br>
        • Kings: Bimbisāra (c. 492–460 BCE), Ajātasattu (c. 491–460 BCE)<br>
        • Capital: Pataliputra (modern Patna)<br>
        • Conquest of Anga, Vatsa, and parts of Kosala<br>
        • Introduction of iron‑working & large army (≈10 000 infantry)
      </div>
    </div>

    <!-- Buddhism & Jainism -->
    <div style="position:absolute; left:57%; top:0; width:260px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        6th century BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Buddhism & Jainism</strong><br>
        • Siddhārtha Gautama (563–483 BCE) – Four Noble Truths, Eightfold Path<br>
        • Mahāvīra (599–527 BCE) – 12 vows, kevala‑jnana<br>
        • First Buddhist council (c. 400 BCE) – Compilation of Sutta‑Pitaka<br>
        • Spread via Ashoka’s missions (260 BCE)
      </div>
    </div>

    <!-- Mauryan Period -->
    <div style="position:absolute; left:70%; top:0; width:240px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        322–185 BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Mauryan Empire</strong><br>
        • Founder: Chandragupta Maurya (322–298 BCE)<br>
        • Prime Minister: Kautilya (author of Arthashastra)<br>
        • Ashoka (268–232 BCE) – 12 Edicts, Dhamma policy<br>
        • Capital: Pataliputra; army ≈600 000<br>
        • Administration: provinces (Mahāsabhā), tax‑free zones
      </div>
    </div>

    <!-- Post‑Mauryan India -->
    <div style="position:absolute; left:83%; top:0; width:260px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        185 BCE–320 CE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Post‑Mauryan India</strong><br>
        • Shunga dynasty (185–73 BCE) – Pushyamukha, patron of art<br>
        • Satavahana (c. 1st century BCE–3rd century CE) – Trade with Rome, Buddhism patronage<br>
        • Indo‑Greek & Kushan contacts (c. 1st century CE)<br>
        • Development of Sanskrit drama (Kalidasa, 4th century CE)
      </div>
    </div>

    <!-- Gupta Period -->
    <div style="position:absolute; left:96%; top:0; width:240px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        320–550 CE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Gupta Empire</strong><br>
        • Chandragupta I (c. 320–335 CE) – Marriage alliance with Lichchhavis<br>
        • Samudragupta (c. 335–380 CE) – 8 golden‑plate inscriptions<br>
        • Golden Age: literature (Kalidasa), science (Āryabhaṭa, 476 CE), art (Ajanta caves)<br>
        • Decimal system, concept of zero (Brahmagupta, 628 CE – post‑Gupta)
      </div>
    </div>

    <!-- South Indian Kingdoms -->
    <div style="position:absolute; left:109%; top:0; width:260px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        3rd c. BCE–1300 CE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>South Indian Kingdoms</strong><br>
        • Early Cholas, Cheras, Pandyas (Sangam period)<br>
        • Pallava dynasty (c. 275–897 CE) – rock‑cut temples at Mahabalipuram<br>
        • Later Cholas (985–1192 CE) – Rajaraja I, temple of Brihadeeswarar<br>
        • Maritime trade: Southeast Asia, Arab world
      </div>
    </div>

    <!-- Ancient Indian Culture -->
    <div style="position:absolute; left:122%; top:0; width:260px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        Continuous
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Ancient Indian Culture</strong><br>
        • Literature: Vedas, Upanishads, Mahabharata (c. 400 BCE), Ramayana (c. 200 BCE)<br>
        • Mathematics: Sulbasūtras (≈800 BCE) – geometry, Pythagorean triples<br>
        • Architecture: Stupa (Sanchi, 3rd c. BCE), temples (Kailasa, 8th c. CE)<br>
        • Music & Dance: Natya‑Shastra (2nd c. CE)<br>
        • Science: Ayurveda (Charaka, Sushruta), astronomy (Āryabhaṭa)
      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["history__medieval-india-tree"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 24px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:30px;">
    4. Medieval India
  </div>

  <!-- Timeline Container -->
  <div style="position:relative; padding:20px 0;">
    <!-- Central vertical line -->
    <div style="position:absolute; left:50%; top:0; bottom:0; width:2px; background:rgba(255,255,255,0.3);"></div>

    <!-- Early Medieval India -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#60a5fa; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Early Medieval India (c. 6th‑12th CE)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #60a5fa; border-radius:4px;">
        <strong>Harsha (c. 606‑647)</strong> – Consolidated north‑central India; patron of Buddhism.<br>
        <strong>Chola Revival (850‑1279)</strong> – Rajaraja I (985‑1014) and Rajendra I (1014‑1044) expanded south‑east maritime trade.<br>
        <strong>Rise of Regional Kingdoms</strong> – Pala (8th‑12th CE) in Bengal, Rashtrakuta (8th‑10th CE) in Deccan.
      </div>
    </div>

    <!-- Delhi Sultanate -->
    <div style="position:relative; width:45%; margin:20px 0; right:0;">
      <div style="background:#60a5fa; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold; text-align:right;">
        Delhi Sultanate (1206‑1526)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-right:4px solid #60a5fa; border-radius:4px; text-align:right;">
        <strong>Qutb al‑Din Aibak (1206‑1210)</strong> – Founder of the Mamluk (Slave) dynasty.<br>
        <strong>Iltutmish (1211‑1236)</strong> – Consolidated Delhi, introduced the silver <em>Taka</em> coin.<br>
        <strong>Balban (1266‑1287)</strong> – Strengthened central authority; introduced <em>Iqta’</em> system.<br>
        <strong>Tughlaq Dynasty (1320‑1398)</strong> – Muhammad bin Tughlaq (1325‑1351) – Introduced token currency (<em>Firoz</em>), attempted relocation of capital to Daulatabad.<br>
        <strong>Sayyid & Lodi Dynasties (1414‑1526)</strong> – Ibrahim Lodi defeated at <strong>Battle of Panipat (1526)</strong>.
      </div>
    </div>

    <!-- Vijayanagara Empire -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#4ade80; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Vijayanagara Empire (1336‑1646)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #4ade80; border-radius:4px;">
        <strong>Founders</strong> – Harihara I & Bukka Raya I (c. 1336‑1377).<br>
        <strong>Krishna Deva Raya (1509‑1529)</strong> – Golden age; patron of literature (e.g., <em>Mahabharata</em> translation).<br>
        <strong>Battle of Talikota (1565)</strong> – Defeat by Deccan Sultanates; marked decline.<br>
        <strong>Architectural legacy</strong> – Hampi ruins; stone chariot, Vittala Temple.
      </div>
    </div>

    <!-- Bahmani Kingdom & Deccan Sultanates -->
    <div style="position:relative; width:45%; margin:20px 0; right:0;">
      <div style="background:#4ade80; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold; text-align:right;">
        Bahmani Kingdom (1347‑1527) & Deccan Sultanates (1527‑1687)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-right:4px solid #4ade80; border-radius:4px; text-align:right;">
        <strong>Ala‑ud‑Din Bahman Shah (1347‑1358)</strong> – Founder; capital at Gulbarga.<br>
        <strong>Division (1527)</strong> – Ahmadnagar, Bijapur, Golconda, Berar, Bidar.<br>
        <strong>Key figures</strong> – Ibrahim Adil Shah II of Bijapur (1580‑1627) – patron of music.<br>
        <strong>Architectural highlights</strong> – Golconda Fort, Charminar (1591).
      </div>
    </div>

    <!-- Mughal Empire -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#60a5fa; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Mughal Empire (1526‑1857)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #60a5fa; border-radius:4px;">
        <strong>Babur (1526‑1530)</strong> – Victory at <em>Panipat I</em> (1526); introduced <em>Timurid</em> art.<br>
        <strong>Akbar (1556‑1605)</strong> – Policy of <em>Sulh‑e‑Kul</em>, establishment of <em>Din-i‑Ilahi</em>, built Fatehpur Sikri (1586).<br>
        <strong>Shah Jahan (1628‑1658)</strong> – Built Taj Mahal (1632‑1653).<br>
        <strong>Aurangzeb (1658‑1707)</strong> – Expansion to Deccan; imposed stricter Sharia; death of <em>Guru Gobind Singh</em> (1699).<br>
        <strong>Decline</strong> – Battle of <em>Plassey</em> (1757) marks beginning of British dominance.
      </div>
    </div>

    <!-- Maratha Empire -->
    <div style="position:relative; width:45%; margin:20px 0; right:0;">
      <div style="background:#4ade80; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold; text-align:right;">
        Maratha Empire (1674‑1818)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-right:4px solid #4ade80; border-radius:4px; text-align:right;">
        <strong>Shivaji (1674‑1680)</strong> – Founder; coronated at Raigad (1674); introduced <em>Ashta Pradhan</em> council.<br>
        <strong>Peshwa Era (1713‑1818)</strong> – Balaji Vishwanath (1713‑1720), Bajirao I (1720‑1740) – expanded north‑west.<br>
        <strong>Third Battle of Panipat (1761)</strong> – Defeat by Ahmad Shah Durrani; heavy losses.<br>
        <strong>Treaty of Bassein (1802)</strong> – Marked British suzerainty.
      </div>
    </div>

    <!-- Bhakti Movement -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#f59e0b; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Bhakti Movement (8th‑17th CE)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #f59e0b; border-radius:4px;">
        <strong>Early Saints</strong> – Ramanuja (1017‑1137) – Vishishtadvaita; Nimbarka (c. 12th CE).<br>
        <strong>North Indian Saints</strong> – Kabir (1440‑1518), Guru Nanak (1469‑1539) – foundation of Sikhism.<br>
        <strong>South Indian Saints</strong> – Purandara Dasa (1484‑1564), Tyagaraja (1767‑1847) – Carnatic music.<br>
        <strong>Key Texts</strong> – <em>Guru Granth Sahib</em> (compiled 1604), <em>Bhaktamal</em> (16th CE).
      </div>
    </div>

    <!-- Sufi Movement -->
    <div style="position:relative; width:45%; margin:20px 0; right:0;">
      <div style="background:#f59e0b; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold; text-align:right;">
        Sufi Movement (12th‑17th CE)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-right:4px solid #f59e0b; border-radius:4px; text-align:right;">
        <strong>Khwaja Moinuddin Chishti (1141‑1230)</strong> – Established the Chishti order in Ajmer; shrine a major pilgrimage site.<br>
        <strong>Nizamuddin Auliya (1238‑1325)</strong> – Promoted tolerance; composed <em>Qawwali</em>.<br>
        <strong>Shah Nizamuddin (14th‑15th CE)</strong> – Spread of Suhrawardi order in Bengal.<br>
        <strong>Impact</strong> – Syncretic culture; influence on Bhakti saints.
      </div>
    </div>

    <!-- Sikh History -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#4ade80; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Sikh History (1469‑1708)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #4ade80; border-radius:4px;">
        <strong>Guru Nanak (1469‑1539)</strong> – Founded Sikhism; composed <em>Japji Sahib</em>.<br>
        <strong>Guru Gobind Singh (1666‑1708)</strong> – Established the Khalsa (1699); introduced Five Ks.<br>
        <strong>Key Events</strong> – Battle of Amritsar (1634), martyrdom of Guru Tegh Bahadur (1675).<br>
        <strong>Texts</strong> – <em>Guru Granth Sahib</em> (finalized 1604); <em>Dasam Granth</em>.
      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["history__modern-india-tree"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; border-radius:6px; margin-bottom:20px;">
    5. Modern India (Highest Priority)
  </div>
  <div style="position:relative; height:380px; min-width:1500px;">
    <!-- Horizontal line -->
    <div style="position:absolute; top:180px; left:0; right:0; height:2px; background:rgba(255,255,255,0.12);"></div>

    <!-- Event blocks -->
    <div style="position:absolute; left:0%; top:0; width:180px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1498</div>
      <div style="font-size:14px;">Vasco da Gama lands at Calicut – First European contact</div>
    </div>

    <div style="position:absolute; left:8%; top:200px; width:200px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1600</div>
      <div style="font-size:14px;">East India Company chartered – Begins trade & foothold</div>
    </div>

    <div style="position:absolute; left:15%; top:0; width:220px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1757</div>
      <div style="font-size:14px;">Battle of Plassey – Robert Clive establishes British political power</div>
    </div>

    <div style="position:absolute; left:22%; top:200px; width:240px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1765</div>
      <div style="font-size:14px;">Diwani of Bengal granted – Revenue collection rights</div>
    </div>

    <div style="position:absolute; left:30%; top:0; width:260px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1773</div>
      <div style="font-size:14px;">Regulating Act – First Parliament‑like council (Governor‑General)</div>
    </div>

    <div style="position:absolute; left:38%; top:200px; width:260px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1784</div>
      <div style="font-size:14px;">Pitt’s India Act – Dual control (Parliament + East India Company)</div>
    </div>

    <div style="position:absolute; left:46%; top:0; width:260px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1833</div>
      <div style="font-size:14px;">Charter Act – Centralised administration; ‘No Indian can hold office…’</div>
    </div>

    <div style="position:absolute; left:54%; top:200px; width:280px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1857</div>
      <div style="font-size:14px;">The Revolt (Sepoy Mutiny) – First large‑scale Indian uprising</div>
    </div>

    <div style="position:absolute; left:62%; top:0; width:300px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1858‑1947</div>
      <div style="font-size:14px;">British Crown rule – Viceroys (e.g., Lord Canning 1858‑1862, Viceroy‑Lord Curzon 1899‑1905)</div>
    </div>

    <div style="position:absolute; left:71%; top:200px; width:320px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1905‑1915</div>
      <div style="font-size:14px;">Socio‑Religious Reform – Brahmo Samaj (Raja Ram Mohan Roy), Arya Samaj (Swami Dayananda Saraswati, 1875), Aligarh Movement (Sir Syed Ahmad Khan, 1875)</div>
    </div>

    <div style="position:absolute; left:80%; top:0; width:340px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1919‑1942</div>
      <div style="font-size:14px;">Freedom Movement – Jallianwala Bagh (13‑Apr‑1919), Non‑Cooperation (1920‑22), Civil Disobedience (1930‑34), Quit India (1942)</div>
    </div>

    <div style="position:absolute; left:90%; top:200px; width:360px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1947‑1950</div>
      <div style="font-size:14px;">Post‑Independence Consolidation – Partition (Aug‑1947), Republic of India (26‑Jan‑1950, Constitution Art. 1‑395)</div>
    </div>

    <div style="position:absolute; left:100%; top:0; width:380px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1962‑1991</div>
      <div style="font-size:14px;">Key Events – Sino‑Indian War (1962), Indo‑Pak wars (1965, 1971), Economic Liberalisation (1991)</div>
    </div>

    <!-- Arrow connectors -->
    <svg style="position:absolute; left:0; top:0; width:100%; height:380px;" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,8 L8,4 Z" fill="#e2e8f0"/>
        </marker>
      </defs>
      <!-- Connectors from line to each block -->
      <line x1="8%" y1="182" x2="8%" y2="200" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="15%" y1="182" x2="15%" y2="0" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="22%" y1="182" x2="22%" y2="200" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="30%" y1="182" x2="30%" y2="0" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="38%" y1="182" x2="38%" y2="200" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="46%" y1="182" x2="46%" y2="0" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="54%" y1="182" x2="54%" y2="200" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="62%" y1="182" x2="62%" y2="0" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="71%" y1="182" x2="71%" y2="200" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="80%" y1="182" x2="80%" y2="0" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="90%" y1="182" x2="90%" y2="200" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="100%" y1="182" x2="100%" y2="0" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["history__world-history-tree"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#60a5fa; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; border-radius:6px; margin-bottom:30px; text-align:center;">
    6. World History
  </div>
  
  <!-- Timeline Container -->
  <div style="position:relative; height:auto; min-width:2000px; padding-bottom:60px;">
    <!-- Horizontal Line -->
    <div style="position:absolute; top:40px; left:0; right:0; height:4px; background:rgba(255,255,255,0.12);"></div>
    
    <!-- Event 1 -->
    <div style="position:absolute; left:0; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1789‑1799</div>
      <div style="margin-top:4px; font-size:13px;">French Revolution</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>⚔️ Fall of Bastille (14 Jul 1789)</li>
        <li>🗽 Declaration of the Rights of Man (26 Aug 1789)</li>
        <li>👑 Execution of Louis XIV (21 Jan 1793)</li>
      </ul>
    </div>
    
    <!-- Event 2 -->
    <div style="position:absolute; left:300px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1914‑1918</div>
      <div style="margin-top:4px; font-size:13px;">World War I</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>🗓️ Assassination of Archduke Franz Ferdinand (28 Jun 1914)</li>
        <li>⚔️ Trench Warfare on Western Front</li>
        <li>📜 Treaty of Versailles (28 Jun 1919)</li>
        <li>🪙 Reparations: £ 20 billion (≈ US $ 4.5 bn)</li>
      </ul>
    </div>
    
    <!-- Event 3 -->
    <div style="position:absolute; left:600px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1919‑1939</div>
      <div style="margin-top:4px; font-size:13px;">Interwar Period</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>🛠️ League of Nations (est. 1920)</li>
        <li>💹 Great Depression (1929)</li>
        <li>🗳️ Rise of totalitarian regimes: Hitler (1933), Mussolini (1922)</li>
        <li>⚖️ Locarno Treaties (1925)</li>
      </ul>
    </div>
    
    <!-- Event 4 -->
    <div style="position:absolute; left:900px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1939‑1945</div>
      <div style="margin-top:4px; font-size:13px;">World War II</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>⚔️ Invasion of Poland (1 Sep 1939)</li>
        <li>🧨 Pearl Harbor (7 Dec 1941)</li>
        <li>🚀 Manhattan Project (1942‑1945)</li>
        <li>🕊️ UN Charter signed (26 Jun 1945)</li>
        <li>💀 Holocaust: ~6 million Jews</li>
      </ul>
    </div>
    
    <!-- Event 5 -->
    <div style="position:absolute; left:1200px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1945‑1991</div>
      <div style="margin-top:4px; font-size:13px;">Cold War</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>🗓️ Truman Doctrine (12 Mar 1947)</li>
        <li>🛡️ NATO formed (4 Apr 1949)</li>
        <li>🚀 Space Race: Sputnik (4 Oct 1957)</li>
        <li>🧊 Cuban Missile Crisis (Oct 1962)</li>
        <li>🕊️ INF Treaty (8 Dec 1987)</li>
        <li>🪦 USSR dissolution (26 Dec 1991)</li>
      </ul>
    </div>
    
    <!-- Event 6 -->
    <div style="position:absolute; left:1500px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1945‑Present</div>
      <div style="margin-top:4px; font-size:13px;">International Institutions</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>🟦 United Nations (Article 2 (4) – prohibition of force)</li>
        <li>🟦 World Bank (est. 1944)</li>
        <li>🟦 IMF (est. 1945)</li>
        <li>🟦 WTO (1995)</li>
        <li>🟦 Climate Agreement – Paris Accord (2015)</li>
      </ul>
    </div>
    
    <!-- Arrowheads (simple CSS triangles) -->
    <style>
      .arrow { position:absolute; top:38px; width:0; height:0; border-top:6px solid transparent; border-bottom:6px solid transparent; border-left:8px solid #4ade80; }
    </style>
    <!-- Example arrows between major phases -->
    <div class="arrow" style="left:260px;"></div>
    <div class="arrow" style="left:560px;"></div>
    <div class="arrow" style="left:860px;"></div>
    <div class="arrow" style="left:1160px;"></div>
    <div class="arrow" style="left:1460px;"></div>
  </div>
</div>
`;

DIAGRAMS_DB["history__art-culture-heritage"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <!-- Title Bar -->
  <div style="background:#0f1117;color:#e2e8f0;padding:12px 20px;border-bottom:1px solid rgba(255,255,255,0.12);font-size:20px;font-weight:bold;">
    7. Art, Culture & Heritage
  </div>
  <!-- Timeline Container -->
  <div style="position:relative;padding:40px 20px;background:#0f1117;color:#e2e8f0;white-space:nowrap;">
    <!-- Horizontal line -->
    <div style="position:absolute;top:50%;left:0;width:100%;height:2px;background:#60a5fa;transform:translateY(-50%);z-index:1;"></div>

    <!-- Timeline Item: Indus Valley Civilization -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">2600‑1900 BCE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Indus‑Valley Civilization</strong><br>
          <em>Architecture:</em> Grid‑planned cities (Mohenjo‑Daro, Harappa), Great Bath, baked‑brick houses.<br>
          <em>Artifacts:</em> Terracotta figurines, seals with early script.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Mauryan Empire -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">322‑185 BCE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Mauryan Empire (Ashoka)</strong><br>
          <em>Architecture:</em> Ashoka Pillar at Sarnath (c. 250 BCE), stone edicts, stupas (e.g., Sanchi).<br>
          <em>Religion:</em> Promotion of Buddhism – first state‑sponsored religious art.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Gupta Period -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">320‑550 CE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Gupta Golden Age</strong><br>
          <em>Paintings:</em> Ajanta Caves (5th century) – frescoes depicting Jataka tales.<br>
          <em>Literature:</em> Kalidasa’s “Shakuntala”, “Meghadūta”.<br>
          <em>Dance/Music:</em> Early forms of Bharatanatyam & classical ragas.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Chola Dynasty -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">850‑1279 CE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Chola Empire (South India)</strong><br>
          <em>Architecture:</em> Brihadeeswarar Temple, Thanjavur (1010 CE) – towering vimana, intricate stone carvings.<br>
          <em>Bronze:</em> Nataraja statues (c. 10th century).<br>
          <em>Dance:</em> Development of the temple dance tradition (precursor to Bharatanatyam).
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Mughal Empire -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">1526‑1857 CE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Mughal Era</strong><br>
          <em>Architecture:</em> Taj Mahal (1653), Red Fort (1648), Fatehpur Sikri (1571).<br>
          <em>Paintings:</em> Mughal miniature school – works of Bichitr, Basawan (c. 1600‑1700).<br>
          <em>Music:</em> Patronage of Hindustani classical – development of Khayal, tabla.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: British Colonial Period -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">1858‑1947 CE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>British Raj</strong><br>
          <em>Architecture:</em> Indo‑Sarc‑British style – Victoria Memorial (1908), Rashtrapati Bhavan (1919).<br>
          <em>Literature:</em> Rabindranath Tagore – “Gitanjali” (1910), Nobel Prize 1913.<br>
          <em>Festivals:</em> Revival of Durga Puja, Ganesh Chaturthi as public celebrations.<br>
          <em>Heritage:</em> First UNESCO heritage sites in India – Ajanta & Ellora (1983, later).
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Post‑Independence -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">1947‑Present</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Modern India</strong><br>
          <em>Heritage Sites:</em> 40+ UNESCO World Heritage Sites – Khajuraho (1986), Hampi (1986), Rani Ki Vav (2014).<br>
          <em>Dance/Music:</em> Institutionalisation – Sangeet Natak Akademi (1952), Kalakshetra (1936).<br>
          <em>Festivals:</em> National celebration of Diwali, Independence Day parades showcasing cultural tableaux.<br>
          <em>Literature:</em> Contemporary writers – Amitav Chakraborty, Arundhati Roy; Indian English novel surge.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["history__history-pyq-trends"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <!-- Title Bar -->
  <div style="background:#0f1117; padding:12px 20px; border-bottom:1px solid rgba(255,255,255,0.12); font-size:24px; font-weight:600; color:#4ade80;">
    PYQ Trend Analysis
  </div>
  <!-- Timeline SVG -->
  <svg viewBox="0 0 2000 300" style="display:block; width:2000px; height:auto; background:#0f1117;">
    <!-- Main horizontal line -->
    <line x1="100" y1="150" x2="1900" y2="150" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    
    <!-- 2000 -->
    <circle cx="200" cy="150" r="8" fill="#4ade80"/>
    <line x1="200" y1="158" x2="200" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="200" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">
      2000
    </text>
    <text x="200" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      NDA‑I (80 Q) – 50% Modern History
    </text>
    
    <!-- 2004 -->
    <circle cx="400" cy="150" r="8" fill="#4ade80"/>
    <line x1="400" y1="158" x2="400" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="400" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2004</text>
    <text x="400" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      CDS 2004 – 75% questions from 1900‑1947
    </text>
    
    <!-- 2008 -->
    <circle cx="600" cy="150" r="8" fill="#4ade80"/>
    <line x1="600" y1="158" x2="600" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2008</text>
    <text x="600" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      NDA‑II – 30% Ancient India, 40% Modern, 30% Geography
    </text>
    
    <!-- 2012 -->
    <circle cx="800" cy="150" r="8" fill="#4ade80"/>
    <line x1="800" y1="158" x2="800" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="800" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2012</text>
    <text x="800" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      CDS 2012 – 55% questions from 1947‑1975; Formula: Weight = (freq/total)×100
    </text>
    
    <!-- 2016 -->
    <circle cx="1000" cy="150" r="8" fill="#4ade80"/>
    <line x1="1000" y1="158" x2="1000" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="1000" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2016</text>
    <text x="1000" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      NDA‑III – Rise of 1971‑1990 era (≈35%); 70 % of questions from 2‑year “Hot Topics”
    </text>
    
    <!-- 2020 -->
    <circle cx="1200" cy="150" r="8" fill="#4ade80"/>
    <line x1="1200" y1="158" x2="1200" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="1200" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2020</text>
    <text x="1200" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      CDS 2020 – 42 % questions on Post‑1990; Avg. marks per Q = 2.5
    </text>
    
    <!-- 2024 -->
    <circle cx="1400" cy="150" r="8" fill="#4ade80"/>
    <line x1="1400" y1="158" x2="1400" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="1400" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2024</text>
    <text x="1400" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      NDA‑IV – 28 % Ancient, 32 % Modern, 40 % Contemporary; Trend Formula: Δ % = (Year₂‑Year₁)/Year₁×100
    </text>
    
    <!-- Legend -->
    <rect x="1600" y="80" width="360" height="140" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)"/>
    <text x="1620" y="110" fill="#e2e8f0" font-size="16" font-weight="600">Legend</text>
    <circle cx="1625" cy="135" r="6" fill="#4ade80"/>
    <text x="1650" y="140" fill="#e2e8f0" font-size="14">Exam Year Marker</text>
    <line x1="1625" y1="155" x2="1625" y2="185" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="1650" y="180" fill="#e2e8f0" font-size="14">Info Line</text>
    <text x="1620" y="210" fill="#60a5fa" font-size="14">Key Development / Trend</text>
  </svg>
</div>
`;

DIAGRAMS_DB["history__ancient_history"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 0; text-align:center; font-weight:bold; font-size:1.6em; border-radius:6px; margin-bottom:20px;">
    Ancient History
  </div>

  <!-- Timeline Container -->
  <div style="position:relative; height:260px; min-width:2000px;">
    <!-- Horizontal Line -->
    <div style="position:absolute; top:50%; left:0; right:0; height:4px; background:#60a5fa; transform:translateY(-50%);"></div>

    <!-- Event: Indus Valley Civilization -->
    <div style="position:absolute; left:5%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px; margin-bottom:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Indus Valley Civilization</div>
        <div style="font-size:0.9em;">c. 3300–1300 BCE (Mature: 2600–1900 BCE)</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Urban planning – grid layout, drainage</li>
          <li>Script: Indus script (≈400 symbols)</li>
          <li>Major sites: Harappa, Mohenjo‑Daro, Dholavira</li>
        </ul>
      </div>
    </div>

    <!-- Event: Vedic Age -->
    <div style="position:absolute; left:15%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Vedic Age</div>
        <div style="font-size:0.9em;">c. 1500–500 BCE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Rig‑Veda (c. 1500 BCE) – oldest Vedic text</li>
          <li>Society: Brahmins, Kshatriyas, Vaishyas, Shudras</li>
          <li>Early iron use, cattle‑based economy</li>
        </ul>
      </div>
    </div>

    <!-- Event: Mahajanapadas -->
    <div style="position:absolute; left:25%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Mahajanapadas</div>
        <div style="font-size:0.9em;">c. 600–300 BCE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>16 major kingdoms (e.g., Magadha, Kosala)</li>
          <li>Rise of republican states (e.g., Vrijji)</li>
          <li>Legal codes: Arthashastra (later)</li>
        </ul>
      </div>
    </div>

    <!-- Event: Buddhism & Jainism -->
    <div style="position:absolute; left:33%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Buddhism & Jainism</div>
        <div style="font-size:0.9em;">6th century BCE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Siddhartha Gautama (Buddha) – ~563–483 BCE</li>
          <li>Mahavira (Jain) – ~599–527 BCE</li>
          <li>Key teachings: Four Noble Truths, Ahimsa</li>
        </ul>
      </div>
    </div>

    <!-- Event: Mauryan Empire -->
    <div style="position:absolute; left:42%; top:0; width:220px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Mauryan Empire</div>
        <div style="font-size:0.9em;">322–185 BCE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Founders: Chandragupta (322–298 BCE)</li>
          <li>Emperor Ashoka (268–232 BCE) – Kalinga War, Edicts</li>
          <li>Administration: 16 provinces, spy network</li>
        </ul>
      </div>
    </div>

    <!-- Event: Post‑Mauryan Period -->
    <div style="position:absolute; left:55%; top:0; width:220px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Post‑Mauryan Period</div>
        <div style="font-size:0.9em;">185 BCE–320 CE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Shunga dynasty (185–73 BCE)</li>
          <li>Kushan Empire (30–375 CE) – Silk Road trade</li>
          <li>Spread of Buddhism to Central Asia</li>
        </ul>
      </div>
    </div>

    <!-- Event: Gupta Empire -->
    <div style="position:absolute; left:66%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Gupta Empire</div>
        <div style="font-size:0.9em;">c. 320–550 CE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Chandragupta II (380–415 CE) – Golden Age</li>
          <li>Achievements: Aryabhata (astronomy), Kalidasa (literature)</li>
          <li>Standardised coinage, Sanskrit patronage</li>
        </ul>
      </div>
    </div>

    <!-- Event: Harshavardhana Era -->
    <div style="position:absolute; left:80%; top:0; width:210px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Harshavardhana Era</div>
        <div style="font-size:0.9em;">606–647 CE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Harsha (r. 606–647 CE) – unified North India</li>
          <li>Patron of Buddhism; court poet Bana</li>
          <li>Capital: Thanesar & Kannauj</li>
        </ul>
      </div>
    </div>

    <!-- Event: Sangam Age -->
    <div style="position:absolute; left:90%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Sangam Age</div>
        <div style="font-size:0.9em;">c. 300 BCE–300 CE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Literary corpus: 2,000+ poems (Purananuru, Ettuthokai)</li>
          <li>Kingdoms: Chera, Chola, Pandya</li>
          <li>Early Tamil urban centres: Madurai, Kaveripattinam</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["history__medieval_history"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <div style="text-align:center; background:#0f1117; padding:10px 0; font-size:28px; font-weight:bold; color:#4ade80; border-bottom:2px solid rgba(255,255,255,0.12);">
    Medieval History
  </div>
  <div style="position:relative; margin-top:30px; min-width:2000px; padding-left:50px;">
    <!-- Vertical timeline line -->
    <div style="position:absolute; left:20px; top:0; bottom:0; width:4px; background:#60a5fa;"></div>

    <!-- Early Medieval Period -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">c. 500 – 1200 CE – Early Medieval Period</div>
        <div style="margin-top:6px; line-height:1.5;">
          • Regional kingdoms flourish: <b>Palas (750‑1174), Pratiharas (550‑1036), Rashtrakutas (753‑982)</b>.<br>
          • Cultural highlights: <b>Harsha’s patronage (606‑647)</b>, development of <b>Devanagari script</b>.<br>
          • Trade expansion via Indian Ocean; rise of <b>Chola naval power (c. 985‑1070)</b>.<br>
          • Religious movements: <b>Bhakti (e.g., Alvars, Nayanmars)</b> and early <b>Sufi saints (e.g., Khwaja Moinuddin Chishti, 1141‑1230)</b>.<br>
        </div>
      </div>
    </div>

    <!-- Delhi Sultanate -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1206 – 1526 CE – Delhi Sultanate</div>
        <div style="margin-top:6px; line-height:1.5;">
          • Founding: <b>Qutb‑ud‑Din Aibak (1206‑1210)</b> – built Qutub Minar (1192) and Al‑Firoz Shah’s tomb.<br>
          • Key rulers: <b>Iltutmish (1211‑1236)</b>, <b>Balban (1266‑1287)</b>, <b>Ghiyath al‑Din Tughluq (1320‑1325)</b>.<br>
          • Administrative reforms: introduction of <b>Iqta‑system</b>, land revenue (Kharaj).<br>
          • Cultural impact: Persian language & architecture (e.g., Tughlaqabad Fort, 1321).<br>
          • Decline: Battle of Panipat (1526) – defeat by Babur, ending Sultanate.
        </div>
      </div>
    </div>

    <!-- Vijayanagara Empire -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1336 – 1646 CE – Vijayanagara Empire</div>
        <div style="margin-top:6px; line-height:1.5;">
          • Founders: <b>Harihara I & Bukka I</b> (c. 1336).<br>
          • Capital: Hampi – famed for stone temples (e.g., Vittala, 1565).<br>
          • Peak under <b>Krishna Deva Raya (1509‑1529)</b> – military victories (Battle of Raichur 1520) and literary patronage (Mahabharata, Ramayana translations).<br>
          • Administration: <b>Mandala system</b>, revenue from agriculture and trade (spice routes).<br>
          • Decline after <b>Battle of Talikota (1565)</b> – defeat by Deccan Sultanates.
        </div>
      </div>
    </div>

    <!-- Bahmani Kingdom -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1347 – 1527 CE – Bahmani Sultanate</div>
        <div style="margin-top:6px; line-height:1.5;">
          • Founder: <b>Al‑Uday Bin Saif Al‑Dīn (1347‑1358)</b> – capital at Gulbarga.<br>
          • Split into five Deccan “Asaf” states (1527) – e.g., Ahmadnagar, Bijapur.<br>
          • Cultural syncretism: development of <b>Deccani Urdu</b>, Indo‑Persian architecture (Mahbubnagar).<br>
          • Economic base: cotton, pepper, and horse trade with the Ottoman Empire.
        </div>
      </div>
    </div>

    <!-- Mughal Empire -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1526 – 1857 CE – Mughal Empire</div>
        <div style="margin-top:6px; line-height:1.5;">
          • Founder: <b>Babur (1526‑1530)</b> – Battle of Panipat (1526).<br>
          • Apex under <b>Akbar (1556‑1605)</b> – administrative reforms (Mansabdari system), religious tolerance (Din I Ilahi).<br>
          • Architectural marvels: <b>Taj Mahal (1632‑1653)</b>, Red Fort (1648).<br>
          • Aurangzeb (1658‑1707) – expansion to South India, imposition of Jizya (1679).<br>
          • Decline: succession wars, Maratha rise, British East India Company post‑Battle of Plassey (1757).
        </div>
      </div>
    </div>

    <!-- Maratha Empire (Expanded) -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1674 – 1818 CE – Maratha Empire (Expanded)</div>
        <div style="margin-top:6px; line-height:1.5;">
          • Founder: <b>Shivaji Bhonsle (1674‑1680)</b> – coronation at Raigad, establishment of <b>Ashta Pradhan</b> council.<br>
          • Key battles: <b>Battle of Pune (1659)</b>, <b>Battle of Panhala (1660)</b>, <b>Battle of Bhopal (1738)</b>.<br>
          • Peshwa era: <b>Bajirao I (1720‑1740)</b> – conquests of Gujarat, Malwa, and Delhi (1737).<br>
          • Administrative unit: <b>Maratha Confederacy</b> – 23 <i>prants</i> (provinces).<br>
          • Decline after <b>Third Anglo‑Maratha War (1817‑1818)</b> – Treaty of Mhow.
        </div>
      </div>
    </div>

    <!-- Bhakti & Sufi Movements -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">12th – 17th CE – Bhakti & Sufi Movements</div>
        <div style="margin-top:6px; line-height:1.5;">
          • Bhakti saints: <b>Ramanuja (1017‑1137), Kabir (1440‑1518), Guru Nanak (1469‑1539), Mirabai (1498‑1547)</b>.<br>
          • Sufi saints: <b>Khwaja Moinuddin Chishti (1141‑1230), Nizamuddin Auliya (1238‑1325), Shah Waliullah (1703‑1762)</b>.<br>
          • Core ideas: devotion (bhakti), equality, rejection of caste & ritualism; Sufi concepts of <i>tawhid</i>, <i>love‑union</i>.<br>
          • Literary output: <b>Guru Granth Sahib (1604)</b>, <b>Bijak of Kabir</b>, <b>Qawwali poetry</b>.<br>
          • Socio‑political impact: fostered communal harmony, influenced later reform movements (Raja Ram Mohan Roy, 1772‑1833).
        </div>
      </div>
    </div>

  </div>
</div>
`;

DIAGRAMS_DB["history__modern_history"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Modern History
  </div>
  <style>
    .timeline{position:relative; padding:40px 0; display:flex; align-items:center; min-width:1200px;}
    .timeline::before{content:''; position:absolute; top:50%; left:0; width:100%; height:2px; background:rgba(255,255,255,0.2); z-index:1;}
    .event{position:relative; flex:0 0 220px; text-align:center; z-index:2; margin:0 20px;}
    .event .dot{width:16px; height:16px; background:#60a5fa; border:4px solid #0f1117; border-radius:50%; margin:0 auto; position:relative; z-index:3;}
    .event .dot::after{content:''; position:absolute; left:50%; top:100%; width:2px; height:30px; background:#60a5fa; transform:translateX(-50%);}
    .event .date{font-size:14px; margin-top:8px; color:#60a5fa;}
    .event .title{font-size:16px; font-weight:600; margin:6px 0; color:#4ade80;}
    .event .desc{font-size:13px; line-height:1.4; color:#e2e8f0; padding:0 6px;}
    .event:nth-child(odd) .dot::after{top:auto; bottom:100%; height:30px;}
    .event:nth-child(odd) .desc{margin-top:30px;}
  </style>
  <div class="timeline">
    <div class="event">
      <div class="dot"></div>
      <div class="date">1498</div>
      <div class="title">Advent of Europeans</div>
      <div class="desc">Vasco da Gama lands at Calicut – first direct sea link between Europe & India.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1510</div>
      <div class="title">Portuguese Goa</div>
      <div class="desc">Afonso de Albuquerque captures Goa; Portuguese dominate western coast.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1600</div>
      <div class="title">British East India Co.</div>
      <div class="desc">Chartered by Royal Charter; begins trading posts at Surat, Madras, Bombay.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1757</div>
      <div class="title">Battle of Plassey</div>
      <div class="desc">Robert Clive defeats Siraj‑ud‑Daula – start of British political dominance.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1857</div>
      <div class="title">Revolt of 1857</div>
      <div class="desc">Sepoy Mutiny – major uprising against East India Company rule.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1858</div>
      <div class="title">British Raj</div>
      <div class="desc">Government of India Act 1858 – Crown assumes direct control.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1859</div>
      <div class="title">Brahmo Samaj</div>
      <div class="desc">Founded by Raja Rammohan Roy – social‑religious reform.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1875</div>
      <div class="title">Arya Samaj</div>
      <div class="desc">Swami Dayananda Saraswati launches Vedic reform movement.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1885</div>
      <div class="title">Indian National Congress</div>
      <div class="desc">Founded at Bombay; first session – A.O. Hume (President).</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1905</div>
      <div class="title">Partition of Bengal</div>
      <div class="desc">Lord Curzon’s divide – sparks Swadeshi & Boycott movements.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1915</div>
      <div class="title">Home Rule League</div>
      <div class="desc">Bal Gangadhar Tilak & Annie Besant demand self‑government.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1919</div>
      <div class="title">Jallianwala Bagh</div>
      <div class="desc">General Reginald Dyer orders massacre – 379 killed.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1920</div>
      <div class="title">Non‑Cooperation</div>
      <div class="desc">Mahatma Gandhi launches mass civil disobedience.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1930</div>
      <div class="title">Salt March</div>
      <div class="desc">Gandhi’s 240 km Dandi march – breaking Salt Laws.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1942</div>
      <div class="title">Quit India</div>
      <div class="desc">All‑India Congress demands immediate British withdrawal.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">15 Aug 1947</div>
      <div class="title">Independence & Partition</div>
      <div class="desc">India & Pakistan created; Mountbatten Plan – 2 Aug 1947.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">26 Jan 1950</div>
      <div class="title">Constitution Adopted</div>
      <div class="desc">Article 14, 19, 21 become cornerstone of Indian law.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1962</div>
      <div class="title">Sino‑Indian War</div>
      <div class="desc">Border clash in NE Himalaya – tests post‑independence defence.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1971</div>
      <div class="title">Bangladesh Liberation</div>
      <div class="desc">India’s decisive role in Indo‑Pak war; birth of Bangladesh.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1998</div>
      <div class="title">Pokhran‑II Tests</div>
      <div class="desc">India conducts nuclear tests – asserts strategic autonomy.</div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["geography__physical-geography"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:10px;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; text-align:center; font-size:24px; font-weight:bold; padding:12px 0; border-radius:6px; margin-bottom:20px;">
    Physical &amp; World Geography
  </div>

  <!-- Concept Map Container -->
  <div style="position:relative; width:100%; height:900px; background:#0f1117;">
    <!-- SVG for connecting lines -->
    <svg width="100%" height="100%" style="position:absolute; top:0; left:0; pointer-events:none;">
      <!-- Central to Primary Nodes -->
      <line x1="50%" y1="45%" x2="20%" y2="20%" stroke="#4ade80" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="80%" y2="20%" stroke="#4ade80" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="20%" y2="60%" stroke="#4ade80" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="80%" y2="60%" stroke="#4ade80" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="50%" y2="80%" stroke="#4ade80" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="50%" y2="20%" stroke="#4ade80" stroke-width="2"/>
      <!-- Primary to Secondary Nodes -->
      <line x1="20%" y1="20%" x2="10%" y2="5%" stroke="#4ade80" stroke-width="1.5"/>
      <line x1="80%" y1="20%" x2="90%" y2="5%" stroke="#4ade80" stroke-width="1.5"/>
      <line x1="20%" y1="60%" x2="10%" y2="75%" stroke="#4ade80" stroke-width="1.5"/>
      <line x1="80%" y1="60%" x2="90%" y2="75%" stroke="#4ade80" stroke-width="1.5"/>
      <line x1="50%" y1="80%" x2="40%" y2="95%" stroke="#4ade80" stroke-width="1.5"/>
      <line x1="50%" y1="80%" x2="60%" y2="95%" stroke="#4ade80" stroke-width="1.5"/>
      <line x1="50%" y1="20%" x2="45%" y2="5%" stroke="#4ade80" stroke-width="1.5"/>
      <line x1="50%" y1="20%" x2="55%" y2="5%" stroke="#4ade80" stroke-width="1.5"/>
    </svg>

    <!-- Central Node -->
    <div style="position:absolute; left:50%; top:45%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:12px 24px; border-radius:8px; font-weight:bold; text-align:center; box-shadow:0 0 10px rgba(255,255,255,0.2);">
      Physical &amp; World Geography
    </div>

    <!-- Primary Nodes -->
    <div style="position:absolute; left:20%; top:20%; transform:translate(-50%,-50%); background:#4ade80; color:#0f1117; padding:8px 16px; border-radius:6px; font-weight:600;">
      The Universe &amp; Solar System
    </div>
    <div style="position:absolute; left:80%; top:20%; transform:translate(-50%,-50%); background:#4ade80; color:#0f1117; padding:8px 16px; border-radius:6px; font-weight:600;">
      Earth Structure &amp; Atmosphere
    </div>
    <div style="position:absolute; left:20%; top:60%; transform:translate(-50%,-50%); background:#4ade80; color:#0f1117; padding:8px 16px; border-radius:6px; font-weight:600;">
      Climatology
    </div>
    <div style="position:absolute; left:80%; top:60%; transform:translate(-50%,-50%); background:#4ade80; color:#0f1117; padding:8px 16px; border-radius:6px; font-weight:600;">
      Geomorphology
    </div>
    <div style="position:absolute; left:50%; top:80%; transform:translate(-50%,-50%); background:#4ade80; color:#0f1117; padding:8px 16px; border-radius:6px; font-weight:600;">
      World Geography
    </div>
    <div style="position:absolute; left:50%; top:20%; transform:translate(-50%,-50%); background:#4ade80; color:#0f1117; padding:8px 16px; border-radius:6px; font-weight:600;">
      Straits, Canals, Deserts &amp; Seas
    </div>

    <!-- Secondary Nodes (Universe & Solar System) -->
    <div style="position:absolute; left:10%; top:5%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Key Data</strong><br>
      Sun mass = 1.989×10³⁰ kg<br>
      Earth radius = 6,371 km<br>
      Orbital period (Earth) = 365.25 d<br>
      <em>Formula:</em> F = G·(m₁m₂)/r²
    </div>

    <!-- Secondary Nodes (Earth Structure & Atmosphere) -->
    <div style="position:absolute; left:90%; top:5%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Layers</strong><br>
      Crust: 5‑70 km<br>
      Mantle: ~2,900 km<br>
      Outer core: 2,200 km (≈4,000 °C)<br>
      Inner core: 1,220 km (≈5,700 °C)<br>
      <em>Atmosphere:</em> Troposphere‑~12 km, Stratosphere‑~50 km
    </div>

    <!-- Secondary Nodes (Climatology) -->
    <div style="position:absolute; left:10%; top:75%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Climatic Zones</strong><br>
      Tropical: 23.5° N‑S, Avg Temp > 20 °C<br>
      Temperate: 23.5‑66.5° N‑S, 10‑20 °C<br>
      Polar: > 66.5° N‑S, < 0 °C<br>
      <em>Cloud Types:</em> Cumulus, Stratus, Cirrus
    </div>

    <!-- Secondary Nodes (Geomorphology) -->
    <div style="position:absolute; left:90%; top:75%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Key Concepts</strong><br>
      Plate speed ≈ 5 cm/yr<br>
      Rock Cycle: Igneous → Sedimentary → Metamorphic<br>
      Volcanism: 1991 Mt Pinatubo eruption (≈17 km³ tephra)
    </div>

    <!-- Secondary Nodes (World Geography) -->
    <div style="position:absolute; left:40%; top:95%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Mountains</strong><br>
      Himalayas: Highest peak Mt Everest = 8,848 m (formed ~50 Myr)<br>
      Andes: Length ≈ 7,000 km<br>
      <strong>Rivers</strong><br>
      Amazon: 6,650 km (largest discharge)<br>
      Ganges‑Brahmaputra: 3,053 km
    </div>

    <!-- Secondary Nodes (Straits, Canals, Deserts & Seas) -->
    <div style="position:absolute; left:55%; top:5%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Key Features</strong><br>
      Straits: Strait of Hormuz (width ≈ 39 km)<br>
      Canals: Panama Canal (length ≈ 82 km, opened 1914)<br>
      Deserts: Sahara ≈ 9.2 million km²<br>
      Seas: Arabian Sea area ≈ 3.86 million km²
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["geography__geography-details"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:8px; margin-bottom:20px;">
    Indian Geography
  </div>

  <!-- Concept Map Container -->
  <div style="position:relative; width:100%; min-height:900px;">

    <!-- Central Node -->
    <div style="position:absolute; top:20px; left:50%; transform:translateX(-50%); background:#60a5fa; color:#0f1117; padding:16px 24px; border-radius:8px; font-weight:bold; text-align:center; width:260px;">
      Indian Geography
    </div>

    <!-- Branch Nodes -->
    <!-- Row 1 -->
    <div style="position:absolute; top:180px; left:10%; transform:translateX(-50%); background:#4ade80; color:#0f1117; padding:12px 18px; border-radius:6px; width:240px;">
      <strong>Rivers, Passes &amp; Soils</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>Ganga – 2,525 km (source: Gangotri)</li>
        <li>Brahmaputra – 2,900 km (source: Tibet)</li>
        <li>Indus – 3,180 km (source: Tibet)</li>
        <li>Zoji La – 3,528 m (Kashmir)</li>
        <li>Khardung La – 5,359 m (Ladakh)</li>
        <li>Alluvial soils – Indo‑Gangetic Plains</li>
        <li>Black soils – Deccan Plateau</li>
        <li>Red &amp; Laterite soils – Southern India</li>
      </ul>
    </div>

    <div style="position:absolute; top:180px; left:50%; transform:translateX(-50%); background:#4ade80; color:#0f1117; padding:12px 18px; border-radius:6px; width:240px;">
      <strong>Forests, Trees &amp; Wetlands</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>Tropical Evergreen – Western Ghats</li>
        <li>Deciduous – Central India</li>
        <li>Mangroves – Sundarbans (≈10,000 ha)</li>
        <li>Teak, Sal, Bamboo – Major commercial species</li>
        <li>Chilika Lake – 10,000 ha (World’s largest brackish lagoon)</li>
        <li>Keoladeo National Park – 15,000 ha (Ramsar site)</li>
      </ul>
    </div>

    <div style="position:absolute; top:180px; left:90%; transform:translateX(-50%); background:#4ade80; color:#0f1117; padding:12px 18px; border-radius:6px; width:240px;">
      <strong>Mineral Resources &amp; Types of Farming</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>Coal – Jharkhand (≈92 % of India’s reserves)</li>
        <li>Iron ore – Odisha (≈7.5 Cr tonnes)</li>
        <li>Bauxite – Gujarat, Odisha</li>
        <li>Limestone – Rajasthan</li>
        <li>Rabi crops – Wheat, Barley</li>
        <li>Kharif crops – Rice, Millets</li>
        <li>Plantation – Tea (Assam), Coffee (Karnataka)</li>
      </ul>
    </div>

    <!-- Row 2 -->
    <div style="position:absolute; top:460px; left:20%; transform:translateX(-50%); background:#60a5fa; color:#0f1117; padding:12px 18px; border-radius:6px; width:260px;">
      <strong>Transport Routes: Highways &amp; Waterways</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>NH 44 – 4,112 km (longest north‑south highway)</li>
        <li>Golden Quadrilateral – 5,846 km (Delhi‑Mumbai‑Chennai‑Kolkata)</li>
        <li>National Waterway 1 – Ganga (1,620 km)</li>
        <li>National Waterway 2 – Brahmaputra (891 km)</li>
        <li>National Waterway 3 – West Coast (≈430 km)</li>
      </ul>
    </div>

    <div style="position:absolute; top:460px; left:50%; transform:translateX(-50%); background:#60a5fa; color:#0f1117; padding:12px 18px; border-radius:6px; width:260px;">
      <strong>National Parks (Map Guide)</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>Jim Corbett – 1,318 km² (Uttarakhand)</li>
        <li>Kaziranga – 1,441 km² (Assam)</li>
        <li>Sundarbans – 2,585 km² (West Bengal)</li>
        <li>Valley of Flowers – 87.5 km² (Uttarakhand)</li>
        <li>Ranthambore – 1,334 km² (Rajasthan)</li>
        <li>Bandhavgarh – 1,140 km² (Madhya Pradesh)</li>
      </ul>
    </div>

    <div style="position:absolute; top:460px; left:80%; transform:translateX(-50%); background:#60a5fa; color:#0f1117; padding:12px 18px; border-radius:6px; width:260px;">
      <strong>Borders, Capitals &amp; Mapping</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>Land borders – 7 countries, 15,106 km total</li>
        <li>Capital – New Delhi (28.6139° N, 77.2090° E)</li>
        <li>State capitals – e.g., Mumbai (Maharashtra), Chennai (Tamil Nadu)</li>
        <li>Key lat/long – Kolkata (22.5726° N, 88.3639° E)</li>
        <li>Article 370 (abrogated 5 Aug 2019)</li>
        <li>Map projection – Lambert Conformal Conic (Survey of India)</li>
      </ul>
    </div>

    <!-- Connecting Lines (SVG) -->
    <svg style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;" xmlns="http://www.w3.org/2000/svg">
      <!-- Central to Row 1 -->
      <line x1="50%" y1="140" x2="10%" y2="240" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
      <line x1="50%" y1="140" x2="50%" y2="240" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
      <line x1="50%" y1="140" x2="90%" y2="240" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
      <!-- Central to Row 2 -->
      <line x1="50%" y1="140" x2="20%" y2="460" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
      <line x1="50%" y1="140" x2="50%" y2="460" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
      <line x1="50%" y1="140" x2="80%" y2="460" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
    </svg>

  </div>
</div>
`;

DIAGRAMS_DB["geography__industrics-geopolitics"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; padding:20px; box-sizing:border-box;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Industries &amp; Geopolitics
  </div>
  
  <!-- Concept Map Container -->
  <div style="position:relative; width:1200px; height:900px; margin:auto; background:#0f1117;">
    <!-- SVG for connecting lines -->
    <svg width="1200" height="900" style="position:absolute; top:0; left:0; pointer-events:none;">
      <!-- Central to Major Industries -->
      <line x1="600" y1="200" x2="300" y2="400" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <line x1="600" y1="200" x2="900" y2="400" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <!-- Central to Geopolitical Flashpoints -->
      <line x1="600" y1="200" x2="600" y2="500" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <!-- Industries sub‑branches -->
      <line x1="300" y1="400" x2="150" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="300" y1="400" x2="300" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="300" y1="400" x2="450" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <!-- Corridors sub‑branches -->
      <line x1="900" y1="400" x2="800" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="900" y1="400" x2="900" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="900" y1="400" x2="1000" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <!-- Geopolitical sub‑branches -->
      <line x1="600" y1="500" x2="400" y2="660" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="600" y1="500" x2="600" y2="660" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="600" y1="500" x2="800" y2="660" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
    </svg>
    
    <!-- Central Node -->
    <div style="position:absolute; left:calc(50% - 150px); top:120px; width:300px; padding:15px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; text-align:center; color:#e2e8f0; font-size:20px; font-weight:600;">
      <span style="color:#60a5fa;">Industries &amp; Geopolitics</span><br/>
      <small>India – Strategic Overview (2024)</small>
    </div>
    
    <!-- Major Industries Node -->
    <div style="position:absolute; left:80px; top:360px; width:260px; padding:12px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#e2e8f0;">
      <div style="font-size:18px; font-weight:600; color:#4ade80; margin-bottom:6px;">Major Industries</div>
      <ul style="margin:0; padding-left:18px; line-height:1.4;">
        <li><strong>Automobile</strong> – 2023 production: <span style="color:#4ade80;">4.2 million units</span></li>
        <li><strong>Pharmaceuticals</strong> – 2022 export: <span style="color:#4ade80;">US$33 billion</span></li>
        <li><strong>Textiles</strong> – 2022 contribution: <span style="color:#4ade80;">4 % of GDP</span></li>
        <li><strong>IT‑BPM</strong> – 2023 revenue: <span style="color:#4ade80;">US$225 billion</span></li>
        <li><strong>Steel</strong> – 2023 production: <span style="color:#4ade80;">120 million tonnes</span></li>
      </ul>
    </div>
    
    <!-- Industrial Corridors Node -->
    <div style="position:absolute; left:840px; top:360px; width:260px; padding:12px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#e2e8f0;">
      <div style="font-size:18px; font-weight:600; color:#4ade80; margin-bottom:6px;">Industrial Corridors</div>
      <ul style="margin:0; padding-left:18px; line-height:1.4;">
        <li><strong>Delhi‑Mumbai Industrial Corridor (DMIC)</strong> – 1,500 km, investment <span style="color:#4ade80;">US$100 billion</span></li>
        <li><strong>Mumbai‑Bangalore Economic Corridor (MBEC)</strong> – 1,000 km, focus on biotech &amp; AI</li>
        <li><strong>Ahmedabad‑Vadodara Industrial Corridor (AVIC)</strong> – 100 km, textile &amp; pharma hub</li>
        <li><strong>East Coast Economic Corridor (ECEC)</strong> – 2,400 km, ports &amp; logistics</li>
      </ul>
    </div>
    
    <!-- Geopolitical Flashpoints Node -->
    <div style="position:absolute; left:380px; top:620px; width:260px; padding:12px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#e2e8f0;">
      <div style="font-size:18px; font-weight:600; color:#4ade80; margin-bottom:6px;">Geopolitical Flashpoints</div>
      <ul style="margin:0; padding-left:18px; line-height:1.4;">
        <li><strong>South China Sea</strong> – UNCLOS Article 2, freedom of navigation disputes</li>
        <li><strong>Taiwan Strait</strong> – 2022 heightened naval activity, US‑China tension</li>
        <li><strong>Indo‑Pacific Region</strong> – Quad (India, USA, Japan, Australia) – 2023 joint naval exercises</li>
        <li><strong>India‑China Border</strong> – 2020‑2021 Galwan clash, Line of Actual Control (LAC)</li>
      </ul>
    </div>
    
    <!-- Indo‑Pacific Node -->
    <div style="position:absolute; left:620px; top:620px; width:260px; padding:12px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#e2e8f0;">
      <div style="font-size:18px; font-weight:600; color:#4ade80; margin-bottom:6px;">Indo‑Pacific Strategy</div>
      <ul style="margin:0; padding-left:18px; line-height:1.4;">
        <li>2022: “Act East Policy” – 10 % increase in aid to Southeast Asian navies</li>
        <li>2023: “SAGAR” (Security and Growth for All in the Region) – maritime domain awareness</li>
        <li>2024: Indian Navy to commission 2 × Vikramaditya‑class carriers by 2027</li>
        <li>Key Articles: UN Resolution 2625 (Territorial Integrity), ASEAN‑India FTA 2020</li>
      </ul>
    </div>
    
  </div>
</div>
`;

DIAGRAMS_DB["geography__geography-pyq-trends"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <div style="text-align:center; background:#0f1117; color:#4ade80; font-size:24px; font-weight:bold; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.12);">
    PYQ Trend Analysis
  </div>
  <div style="position:relative; margin-top:40px; min-height:800px;">
    <!-- Central Node -->
    <div id="centerNode" style="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:20px; width:260px; text-align:center;">
      <div style="font-size:18px; font-weight:bold; color:#4ade80; margin-bottom:8px;">Geography PYQ Trend Analysis</div>
      <div style="font-size:14px;">NDA / CDS (2019‑2023)</div>
    </div>

    <!-- Branch Nodes -->
    <div id="nodeSources" style="position:absolute; left:10%; top:20%; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:200px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Sources</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Official NDA Syllabus (2023)</li>
        <li>CDS Gazette (2022‑2023)</li>
        <li>Previous Year Papers (2019‑2023)</li>
      </ul>
    </div>

    <div id="nodeData" style="position:absolute; right:10%; top:20%; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:220px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Data Trends</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>2020: 3 Qs (Physical 60%)</li>
        <li>2021: 2 Qs (Human 50%)</li>
        <li>2022: 4 Qs (Physical 55%)</li>
        <li>2023: 3 Qs (Human 45%)</li>
        <li>Avg. Qs/yr = 3.0</li>
      </ul>
    </div>

    <div id="nodeFormula" style="position:absolute; left:10%; bottom:20%; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:220px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Key Formula</div>
      <div style="font-size:13px;">
        <span style="color:#4ade80;">Percent Change = </span>
        <span style="color:#e2e8f0;">((Current – Previous) / Previous) × 100</span>
      </div>
      <div style="margin-top:6px; font-size:13px;">
        Example (2022 vs 2021): ((4‑2)/2)×100 = <span style="color:#4ade80;">200 %</span>
      </div>
    </div>

    <div id="nodeDistribution" style="position:absolute; right:10%; bottom:20%; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:240px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Distribution by Topic</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Physical Geography – 55 %</li>
        <li>Human Geography – 45 %</li>
        <li>Maps & Cartography – 30 % of total Qs</li>
        <li>Climatology – 20 %</li>
        <li>Resources – 15 %</li>
      </ul>
    </div>

    <div id="nodeKeyTopics" style="position:absolute; left:50%; top:5%; transform:translateX(-50%); background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:260px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Key Topics (High Yield)</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Mountains & River Systems (Himalayas, Ganga)</li>
        <li>Monsoon & Climate Zones</li>
        <li>Land Use & Agriculture</li>
        <li>Mineral Resources (Coal, Iron Ore)</li>
        <li>Population Distribution (2011 Census)</li>
      </ul>
    </div>

    <div id="nodeExamWise" style="position:absolute; left:5%; top:50%; transform:translateY(-50%); background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:200px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Exam‑Wise PYQ</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>NDA – 12 Qs (2019‑2023)</li>
        <li>CDS – 9 Qs (2019‑2023)</li>
        <li>Trend: ↑ Physical, ↔ Human</li>
      </ul>
    </div>

    <div id="nodeMapFocus" style="position:absolute; right:5%; top:50%; transform:translateY(-50%); background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:210px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Map Focus Areas</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>India – State Borders (2022)</li>
        <li>World – Physical Features (2021)</li>
        <li>Climatic Zones – Köppen (2023)</li>
        <li>River Basins – Ganga, Brahmaputra</li>
      </ul>
    </div>

    <!-- Connecting Lines (SVG) -->
    <svg style="position:absolute; left:0; top:0; width:100%; height:100%; pointer-events:none;">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
                markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/>
        </marker>
      </defs>
      <!-- Lines from center to each node -->
      <line x1="50%" y1="50%" x2="15%" y2="25%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="50%" y1="50%" x2="15%" y2="75%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="50%" y1="50%" x2="5%" y2="50%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="50%" y1="50%" x2="95%" y2="50%" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["economics__economics-basics"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background-color:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">

    <!-- Title Bar -->
    <div style="background-color:#1a1c24; padding:15px 25px; border-radius:8px; margin-bottom:30px; text-align:center; box-shadow:0 4px 15px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
        <h1 style="color:#4ade80; margin:0; font-size:2.2em; text-shadow:0 0 12px rgba(74,222,128,0.6);">Introduction to Economics</h1>
        <p style="color:#e2e8f0; margin-top:8px; font-size:1.1em; opacity:0.9;">NDA, CDS, AFCAT Exam Overview: Core Concepts, Sectors, Poverty, Employment & Agriculture</p>
    </div>

    <!-- Main Flowchart Container -->
    <div style="display:flex; flex-direction:column; align-items:center; gap:40px; padding:10px;">
`;

DIAGRAMS_DB["economics__monetary-fiscal"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <!-- Title Bar -->
  <div style="background:#0f1117; padding:12px 0; text-align:center; font-size:24px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.12);">
    Monetary &amp; Fiscal System
  </div>
  <!-- Flowchart Container -->
  <div style="position:relative; min-width:1500px; padding:40px; background:#0f1117;">
    <!-- RBI Node -->
    <div style="position:absolute; left:50px; top:40px; width:200px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; text-align:center;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">Reserve Bank of India (RBI)</div>
      <div style="font-size:14px;">Established: 1 April 1935<br>Head: Governor Shaktikanta Das (since Sep 2022)</div>
    </div>
    <!-- MPC Node -->
    <div style="position:absolute; left:300px; top:40px; width:260px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; text-align:center;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">Monetary Policy Committee (MPC)</div>
      <div style="font-size:14px;">6 members (3 RBI, 3 external)<br>Decision‑making: 3‑day meetings (Bi‑monthly)<br>Last meeting: 8 Mar 2024</div>
    </div>
    <!-- Arrow RBI → MPC -->
    <svg style="position:absolute; left:250px; top:80px; overflow:visible;">
      <defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="50" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead)"/>
    </svg>
    <!-- Policy Tools Node -->
    <div style="position:absolute; left:580px; top:20px; width:340px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <div style="color:#4ade80; font-weight:bold; text-align:center; margin-bottom:6px;">Monetary Policy Tools</div>
      <ul style="margin:0; padding-left:18px; font-size:14px; line-height:1.6;">
        <li><b>Repo Rate</b> – 6.50% (as of 8 Mar 2024)</li>
        <li><b>Reverse Repo Rate</b> – 3.15% (as of 8 Mar 2024)</li>
        <li><b>Cash Reserve Ratio (CRR)</b> – 4% (effective 1 Apr 2023)</li>
        <li><b>Statutory Liquidity Ratio (SLR)</b> – 18.5% (as of 2024)</li>
        <li><b>Bank Rate</b> – 7.00% (2024)</li>
        <li><b>Marginal Standing Facility (MSF)</b> – Repo + 100 bps → 7.50%</li>
        <li><b>Open Market Operations (OMO)</b> – Govt. securities buy‑sell</li>
      </ul>
    </div>
    <!-- Arrow MPC → Tools -->
    <svg style="position:absolute; left:560px; top:80px; overflow:visible;">
      <defs><marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="20" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead2)"/>
    </svg>
    <!-- Transmission Mechanism Node -->
    <div style="position:absolute; left:960px; top:40px; width:260px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; text-align:center;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">Transmission Mechanism</div>
      <div style="font-size:14px;">
        <b>Liquidity → Interest Rate → Investment → Aggregate Demand → Inflation &amp; Growth</b>
      </div>
    </div>
    <!-- Arrow Tools → Transmission -->
    <svg style="position:absolute; left:920px; top:80px; overflow:visible;">
      <defs><marker id="arrowhead3" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="40" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead3)"/>
    </svg>
    <!-- Economic Outcomes Node -->
    <div style="position:absolute; left:1240px; top:40px; width:260px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">Economic Outcomes (2023‑24)</div>
      <ul style="margin:0; padding-left:18px; font-size:14px; line-height:1.6;">
        <li>Inflation Target: 4 % ± 2 % (Achieved 3.9 % in FY 2023‑24)</li>
        <li>GDP Growth: 6.8 % (FY 2023‑24)</li>
        <li>Credit‑to‑GDP Ratio: 20.5 % (↑ 0.4 % YoY)</li>
        <li>Money Supply (M3): ₹ 210 Lakh Cr (↑ 9 % YoY)</li>
      </ul>
    </div>
    <!-- Arrow Transmission → Outcomes -->
    <svg style="position:absolute; left:1220px; top:80px; overflow:visible;">
      <defs><marker id="arrowhead4" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="20" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead4)"/>
    </svg>
    <!-- Fiscal Side (Optional) -->
    <div style="position:absolute; left:580px; top:200px; width:340px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <div style="color:#4ade80; font-weight:bold; text-align:center; margin-bottom:6px;">Fiscal Policy Instruments</div>
      <ul style="margin:0; padding-left:18px; font-size:14px; line-height:1.6;">
        <li><b>Government Expenditure</b> – ₹ 30 Lakh Cr (FY 2023‑24)</li>
        <li><b>Tax Revenue</b> – ₹ 25 Lakh Cr (FY 2023‑24)</li>
        <li><b>Fiscal Deficit</b> – 5.5 % of GDP (Target ≤ 4.5 %)</li>
        <li><b>Public Debt</b> – 67 % of GDP (2023‑24)</li>
      </ul>
    </div>
    <!-- Arrow Tools → Fiscal (illustrates coordination) -->
    <svg style="position:absolute; left:720px; top:150px; overflow:visible;">
      <defs><marker id="arrowhead5" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="0" y2="50" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead5)"/>
    </svg>
    <!-- Combined Macro Outcome Node -->
    <div style="position:absolute; left:960px; top:200px; width:260px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; text-align:center;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">Macro‑Economic Stability</div>
      <div style="font-size:14px;">
        <b>Goal:</b> Sustainable growth, price stability, financial sector health
      </div>
    </div>
    <!-- Arrow Fiscal → Macro -->
    <svg style="position:absolute; left:920px; top:260px; overflow:visible;">
      <defs><marker id="arrowhead6" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="40" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead6)"/>
    </svg>
    <!-- Arrow Transmission → Macro -->
    <svg style="position:absolute; left:1220px; top:260px; overflow:visible;">
      <defs><marker id="arrowhead7" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="20" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead7)"/>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["economics__budget-trade-reforms"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background-color:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">

    <!-- Title Bar -->
    <div style="background-color:#4ade80; color:#0f1117; padding:15px; border-radius:8px; margin-bottom:30px; text-align:center; font-size:24px; font-weight:bold; box-shadow:0 4px 15px rgba(0,0,0,0.3); width:fit-content; margin-left:auto; margin-right:auto;">Budgets, Trade & Economic Reforms</div>

    <!-- Flowchart Container (relative for positioning lines) -->
    <div style="position:relative; min-width:1400px; padding:20px; display:flex; flex-direction:column; align-items:center; gap:40px;">

        <!-- Node 1: Economic Goals -->
        <div id="node1" style="background:linear-gradient(135deg, #60a5fa, #4ade80); padding:20px 30px; border-radius:12px; box-shadow:0 6px 20px rgba(0,0,0,0.
`;

DIAGRAMS_DB["economics__govt-schemes"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background-color:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">

    <!-- Title Bar -->
    <div style="background: linear-gradient(90deg, #60a5fa, #4ade80); padding:15px 20px; border-radius:8px; margin-bottom:30px; text-align:center; box-shadow:0 6px 15px rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.2);">
        <h2 style="margin:0; color:#0f1117; font-size:2em; font-weight:700; text-shadow:1px 1px 2px rgba(255,255,255,0.3);">Government Schemes & Welfare Programs</h2>
        <p style="margin:5px 0 0; color:#0f1117; font-size:1em; opacity:0.9;">Key Welfare Schemes & Financial Inclusion - Economics for Indian Defence Exams</p>
    </div>

    <!-- Main Flowchart Container -->
    <div style="display:flex; flex-direction:column; align-items:center; position:relative; padding:20px;">

        <!-- Node 1: Root Cause / Problem Statement -->
        <div style="background:linear-gradient(135deg, #f59e0b, #eab308); padding:18px 30px; border-radius:12px; text-align:center; box-shadow:0 8px 20px rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.15); width:350px; margin-bottom:25px; color:#0f1117;">
            <h3 style="margin:0; font-size:1.4em; font-weight:600;">Socio-Economic Challenges in India</h3>
            <p style="margin:8px 0 0; font-size:0.9em;">Poverty, Inequality, Lack of Financial Access, Social Security Gaps, Unemployment, Health Disparities, Rural Distress.</p>
        </div>

        <!-- Arrow 1-2 -->
        <div style="width:2px; height:40px; background-color:#60a5fa; margin-bottom:25px; position:relative;">
            <div style="width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #60a5fa; position:absolute; bottom:-12px; left:-7px;"></div>
        </div>

        <!-- Node 2: Government Objectives / Policy Response -->
        <div style="background:linear-gradient(135deg, #60a5fa, #3b82f6); padding:20px 35px; border-radius:12px; text-align:center; box-shadow:0 8px 20px rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.15); width:500px; margin-bottom:30px; color:#e2e8f0;">
            <h3 style="margin:0; font-size:1.5em; font-weight:600;">Government Objectives & Policy Response</h3>
            <p style="margin:10px 0 0; font-size:1em; line-height:1.5;">Poverty Alleviation, Financial Inclusion, Social Security, Skill Development, Health & Nutrition, Rural & Urban Development. <br/>**Constitutional Mandate: DPSP (Articles 38, 39, 41, 42, 43)**</p>
        </div>

        <!-- Arrow 2-3 -->
        <div style="width:2px; height:40px; background-color:#4ade80; margin-bottom:30px; position:relative;">
            <div style="width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #4ade80; position:absolute; bottom:-12px; left:-7px;"></div>
        </div>

        <!-- Node 3: Key Policy Pillars / Mechanisms -->
        <div style="display:flex; justify-content:center; gap:40px; margin-bottom:40px;">
            <div style="background:linear-gradient(135deg, #4ade80, #22c55e); padding:15px 25px; border-radius:10px; text-align:center; box-shadow:0 6px 15px rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.12); width:280px; color:#0f1117;">
                <h4 style="margin:0; font-size:1.2em; font-weight:600;">Direct Benefit Transfer (DBT)</h4>
                <p style="margin:8px 0 0; font-size:0.9em;">Reduces leakage, ensures timely delivery. <br/>(e.g., LPG Subsidy, Scholarships)</p>
            </div>
            <div style="background:linear-gradient(135deg, #4ade80, #22c55e); padding:15px 25px; border-radius:10px; text-align:center; box-shadow:0 6px 15px rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.12); width:280px; color:#0f1117;">
                <h4 style="margin:0; font-size:1.2em; font-weight:600;">Social Safety Nets</h4>
                <p style="margin:8px 0 0; font-size:0.9em;">Insurance, Pensions, Employment Guarantees. <br/>(e.g., MGNREGA, APY)</p>
            </div>
            <div style="background:linear-gradient(135deg, #4ade80, #22c55e); padding:15px 25px; border-radius:10px; text-align:center; box-shadow:0 6px 15px rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.12); width:280px; color:#0f1117;">
                <h4 style="margin:0; font-size:1.2em; font-weight:600;">Infrastructure & Services</h4>
                <p style="margin:8px 0 0; font-size:0.9em;">Housing, Sanitation, Roads, Health Facilities. <br/>(e.g., PMAY, Ayushman Bharat)</p>
            </div>
        </div>

        <!-- Horizontal Line connecting to Categories -->
        <div style="width:80%; height:2px; background-color:#60a5fa; margin-bottom:40px;"></div>

        <!-- Vertical lines down from horizontal line to categories -->
        <div style="display:flex; justify-content:space-around; width:90%; position:relative; margin-bottom:40px;">
            <div style="width:2px; height:40px; background-color:#60a5fa; position:absolute; top:-40px; left:15%; transform:translateX(-50%);"></div>
            <div style="width:2px; height:40px; background-color:#60a5fa; position:absolute; top:-40px; left:50%; transform:translateX(-50%);"></div>
            <div style="width:2px; height:40px; background-color:#60a5fa; position:absolute; top:-40px; left:85%; transform:translateX(-50%);"></div>

            <div style="width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #60a5fa; position:absolute; top:-12px; left:15%; transform:translateX(-50%);"></div>
            <div style="width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #60a5fa; position:absolute; top:-12px; left:50%; transform:translateX(-50%);"></div>
            <div style="width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #60a5fa; position:absolute; top:-12px; left:85%; transform:translateX(-50%);"></div>

            <!-- Node 4: Scheme Categories -->
            <div style="background:linear-gradient(135deg, #60a5fa, #3b82f6); padding:15px 25px; border-radius:10px; text-align:center; box-shadow:0 6px 15px rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.12); width:250px; color:#e2e8f0;">
                <h4 style="margin:0; font-size:1.3em; font-weight:600;">Financial Inclusion</h4>
                <p style="margin:5px 0 0; font-size:0.9em;">Access to banking, credit, insurance, pension.</p>
            </div>
            <div style="background:linear-gradient(135deg, #60a5fa, #3b82f6); padding:15px 25px; border-radius:10px; text-align:center; box-shadow:0 6px 15px rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.12); width:250px; color:#e2e8f0;">
                <h4 style="margin:0; font-size:1.3em; font-weight:600;">Poverty Alleviation & Social Security</h4>
                <p style="margin:5px 0 0; font-size:0.9em;">Employment, Housing, Income Support.</p>
            </div>
            <div style="background:linear-gradient(135deg, #60a5fa, #3b82f6); padding:15px 25px; border-radius:10px; text-align:center; box-shadow:0 6px 15px rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.12); width:250px; color:#e2e8f0;">
                <h4 style="margin:0; font-size:1.3em; font-weight:600;">Health, Skill & Rural Development</h4>
                <p style="margin:5px 0 0; font-size:0.9em;">Healthcare access, skill training, basic amenities.</p>
            </div>
        </div>

        <!-- Arrows from Categories to Schemes -->
        <div style="display:flex; justify-content:space-around; width:90%; position:relative; margin-bottom:30px;">
            <!-- Financial Inclusion Arrows -->
            <div style="width:2px; height:40px; background-color:#4ade80; position:absolute; top:-40px; left:15%; transform:translateX(-50%);"></div>
            <div style="width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #4ade80; position:absolute; top:-12px; left:15%; transform:translateX(-50%);"></div>
            <!-- Poverty Alleviation Arrows -->
            <div style="width:2px; height:40px; background-color:#4ade80; position:absolute; top:-40px; left:50%; transform:translateX(-50%);"></div>
            <div style="width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #4ade80; position:absolute; top:-12px; left:50%; transform:translateX(-50%);"></div>
            <!-- Health, Skill & Rural Dev Arrows -->
            <div style="width:2px; height:40px; background-color:#4ade80; position:absolute; top:-40px; left:85%; transform:translateX(-50%);"></div>
            <div style="width:0; height:0; border-left:8px solid transparent; border-right:8px solid transparent; border-top:12px solid #4ade80; position:absolute; top:-12px; left:85%; transform:translateX(-50%);"></div>
        </div>

        <!-- Node 5: Specific Schemes (Detailed) -->
        <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:30px; width:100%;">

            <!-- Financial Inclusion Schemes -->
            <div style="display:flex; flex-direction:column; gap:20px; width:30%;">
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">PM Jan Dhan Yojana (PMJDY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> Aug 2014</li>
                        <li><strong>Objective:</strong> Universal access to banking services.</li>
                        <li><strong>Features:</strong> Zero-balance accounts, RuPay Debit Card, OD facility (₹10,000), Accident insurance (₹2 Lakh).</li>
                        <li><strong>Impact:</strong> 51.5 Cr+ accounts (as of Jan 2024), 55.5% women, 67% rural.</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">PM Jeevan Jyoti Bima Yojana (PMJJBY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> May 2015</li>
                        <li><strong>Objective:</strong> Life insurance cover.</li>
                        <li><strong>Features:</strong> ₹2 Lakh cover for death, annual premium ₹436. Age 18-50.</li>
                        <li><strong>Impact:</strong> 17.1 Cr+ enrollments (as of Apr 2024).</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">PM Suraksha Bima Yojana (PMSBY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> May 2015</li>
                        <li><strong>Objective:</strong> Accident insurance cover.</li>
                        <li><strong>Features:</strong> ₹2 Lakh for accidental death/disability, annual premium ₹20. Age 18-70.</li>
                        <li><strong>Impact:</strong> 36.1 Cr+ enrollments (as of Apr 2024).</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">Atal Pension Yojana (APY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> May 2015</li>
                        <li><strong>Objective:</strong> Pension scheme for unorganized sector.</li>
                        <li><strong>Features:</strong> Fixed pension ₹1000-₹5000/month after 60. Age 18-40.</li>
                        <li><strong>Impact:</strong> 6.2 Cr+ subscribers (as of Apr 2024).</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">PM Mudra Yojana (PMMY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> Apr 2015</li>
                        <li><strong>Objective:</strong> Micro-credit for non-farm, non-corporate small/micro enterprises.</li>
                        <li><strong>Categories:</strong> Shishu (₹50k), Kishor (₹5L), Tarun (₹10L).</li>
                        <li><strong>Impact:</strong> ₹26 Lakh Cr+ sanctioned in 46 Cr+ loans (as of Mar 2023).</li>
                    </ul>
                </div>
            </div>

            <!-- Poverty Alleviation & Social Security Schemes -->
            <div style="display:flex; flex-direction:column; gap:20px; width:30%;">
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#60a5fa; font-size:1.1em; font-weight:600;">MGNREGA</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Act:</strong> 2005, Implemented: 2006</li>
                        <li><strong>Objective:</strong> 100 days guaranteed wage employment in rural households.</li>
                        <li><strong>Features:</strong> Right to work, 1/3 beneficiaries women.</li>
                        <li><strong>Impact:</strong> 14.4 Cr active workers (FY 2023-24), average wage rate ₹238.09.</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#60a5fa; font-size:1.1em; font-weight:600;">PM Awas Yojana (PMAY-G/U)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> 2015</li>
                        <li><strong>Objective:</strong> "Housing for All by 2022" (extended to 2024).</li>
                        <li><strong>Target:</strong> Economically Weaker Section (EWS), Low Income Group (LIG).</li>
                        <li><strong>Impact:</strong> 2.95 Cr (G) + 1.18 Cr (U) houses sanctioned (as of Dec 2023).</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#60a5fa; font-size:1.1em; font-weight:600;">PM SVANidhi</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> June 2020</li>
                        <li><strong>Objective:</strong> Micro-credit for street vendors.</li>
                        <li><strong>Features:</strong> Collateral-free working capital loan up to ₹50,000.</li>
                        <li><strong>Impact:</strong> 79.2 Lakh+ loans sanctioned (as of Mar 2024).</li>
                    </ul>
                </div>
            </div>

            <!-- Health, Skill & Rural Development Schemes -->
            <div style="display:flex; flex-direction:column; gap:20px; width:30%;">
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#f59e0b; font-size:1.1em; font-weight:600;">Ayushman Bharat (PMJAY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> Sep 2018</li>
                        <li><strong>Objective:</strong> Health insurance for poor & vulnerable families.</li>
                        <li><strong>Features:</strong> ₹5 Lakh/family/year for secondary/tertiary care. Covers 10.74 Cr families.</li>
                        <li><strong>Impact:</strong> 6.4 Cr+ hospital admissions (as of May 2024).</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#f59e0b; font-size:1.1em; font-weight:600;">POSHAN Abhiyaan (NNM)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> 2018</li>
                        <li><strong>Objective:</strong> Reduce stunting, undernutrition, anemia, low birth weight.</li>
                        <li><strong>Target:</strong> Children (0-6 yrs), adolescent girls, pregnant women, lactating mothers.</li>
                        <li><strong>Impact:</strong> Significant reduction in stunting & wasting rates.</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#f59e0b; font-size:1.1em; font-weight:600;">PM Kaushal Vikas Yojana (PMKVY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> 2
`;

DIAGRAMS_DB["physics__physics-optics"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <div style="background:#4ade80; color:#0f1117; text-align:center; padding:12px 0; font-size:24px; font-weight:bold;">
    Optics &amp; Light
  </div>
  <svg width="1200" height="900" viewBox="0 0 1200 900" style="display:block; margin:auto; background:#0f1117;">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5"
              orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 z" fill="#60a5fa"/>
      </marker>
      <style>
        .title {font-size:20px; font-weight:bold; fill:#e2e8f0;}
        .subTitle {font-size:16px; font-weight:600; fill:#e2e8f0;}
        .label {font-size:14px; fill:#e2e8f0;}
        .formulaBox {fill:#60a5fa; stroke:#e2e8f0; stroke-width:1;}
        .expBox {fill:#4ade80; stroke:#e2e8f0; stroke-width:1;}
        .line {stroke:#e2e8f0; stroke-width:2; marker-end:url(#arrow);}
      </style>
    </defs>

    <!-- Central Node -->
    <text x="600" y="80" text-anchor="middle" class="title">Optics &amp; Light</text>
    <circle cx="600" cy="100" r="30" fill="rgba(255,255,255,0.12)"/>

    <!-- Reflection Branch -->
    <line x1="600" y1="130" x2="350" y2="300" class="line"/>
    <text x="350" y="280" text-anchor="middle" class="subTitle">Reflection</text>
    <rect x="260" y="320" width="180" height="140" class="formulaBox"/>
    <text x="350" y="350" text-anchor="middle" class="label">Law of Reflection</text>
    <text x="350" y="380" text-anchor="middle" class="label">θᵢ = θᵣ</text>
    <text x="350" y="410" text-anchor="middle" class="label">Mirror Formula</text>
    <text x="350" y="440" text-anchor="middle" class="label">1/f = 1/v + 1/u</text>
    <text x="350" y="470" text-anchor="middle" class="label">Magnification m = v/u</text>

    <rect x="260" y="480" width="180" height="120" class="expBox"/>
    <text x="350" y="500" text-anchor="middle" class="label">Experimental Setup</text>
    <text x="350" y="525" text-anchor="middle" class="label">Ray Box → Plane Mirror</text>
    <text x="350" y="550" text-anchor="middle" class="label">Protractor to measure θᵢ, θᵣ</text>

    <!-- Refraction Branch -->
    <line x1="600" y1="130" x2="600" y2="300" class="line"/>
    <text x="600" y="280" text-anchor="middle" class="subTitle">Refraction</text>
    <rect x="510" y="320" width="180" height="180" class="formulaBox"/>
    <text x="600" y="350" text-anchor="middle" class="label">Snell’s Law</text>
    <text x="600" y="380" text-anchor="middle" class="label">n₁ sinθ₁ = n₂ sinθ₂</text>
    <text x="600" y="410" text-anchor="middle" class="label">Refractive Index (n)</text>
    <text x="600" y="440" text-anchor="middle" class="label">n_air ≈ 1.0003</text>
    <text x="600" y="470" text-anchor="middle" class="label">n_water ≈ 1.33</text>
    <text x="600" y="500" text-anchor="middle" class="label">n_glass ≈ 1.5 (typical)</text>

    <rect x="510" y="520" width="180" height="120" class="expBox"/>
    <text x="600" y="540" text-anchor="middle" class="label">Experimental Setup</text>
    <text x="600" y="565" text-anchor="middle" class="label">Ray Box → Prism (Δ)</text>
    <text x="600" y="590" text-anchor="middle" class="label">Measure deviation to find n</text>

    <!-- Lenses Branch -->
    <line x1="600" y1="130" x2="850" y2="300" class="line"/>
    <text x="850" y="280" text-anchor="middle" class="subTitle">Lenses</text>
    <rect x="760" y="320" width="200" height="200" class="formulaBox"/>
    <text x="860" y="350" text-anchor="middle" class="label">Lens Formula</text>
    <text x="860" y="380" text-anchor="middle" class="label">1/f = 1/v + 1/u</text>
    <text x="860" y="410" text-anchor="middle" class="label">Magnification m = v/u</text>
    <text x="860" y="440" text-anchor="middle" class="label">Power P = 1/f (dioptre)</text>
    <text x="860" y="470" text-anchor="middle" class="label">Typical f (convex) = +10 cm</text>
    <text x="860" y="500" text-anchor="middle" class="label">Typical f (concave) = –15 cm</text>

    <rect x="760" y="520" width="200" height="140" class="expBox"/>
    <text x="860" y="540" text-anchor="middle" class="label">Experimental Set‑ups</text>
    <text x="860" y="570" text-anchor="middle" class="label">1. Convex Lens → Distant Object → Screen</text>
    <text x="860" y="595" text-anchor="middle" class="label">2. Concave Mirror → Object → Screen</text>
    <text x="860" y="620" text-anchor="middle" class="label">3. Lens‑Combination (Convex+Concave) → Find net focal length</text>

    <!-- Footer Note -->
    <text x="600" y="870" text-anchor="middle" class="label" style="font-size:12px;">
      Prepared for NDA/CDS/AFCAT – All formulas are in SI units (m, rad). Use ray diagrams for verification.
    </text>
  </svg>
</div>
`;

DIAGRAMS_DB["physics__physics-mechanics"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Mechanics &amp; Motion
  </div>

  <!-- Labeled Diagram -->
  <svg width="1200" height="800" viewBox="0 0 1200 800" style="background:#0f1117;">
    <!-- Arrow marker definition -->
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5"
              orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 z" fill="#60a5fa"/>
      </marker>
    </defs>

    <!-- Central Node: Newton's Laws -->
    <circle cx="600" cy="100" r="60" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="100" text-anchor="middle" dominant-baseline="middle"
          font-size="18" fill="#0f1117" font-weight="bold">Newton's Laws</text>

    <!-- First Law Box -->
    <rect x="200" y="250" width="260" height="140" fill="#60a5fa" rx="10"
          stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="330" y="280" text-anchor="middle" font-size="16" fill="#0f1117" font-weight="bold">1st Law (Law of Inertia)</text>
    <text x="330" y="310" text-anchor="middle" font-size="14" fill="#0f1117">“A body remains at rest or in uniform motion unless acted upon by a net external force.”</text>
    <text x="330" y="340" text-anchor="middle" font-size="13" fill="#0f1117">Article: Principia (1687) – Book I, Prop. 1</text>
    <text x="330" y="370" text-anchor="middle" font-size="13" fill="#0f1117">Key Concept: Inertia (μ)</text>

    <!-- Second Law Box -->
    <rect x="470" y="500" width="260" height="170" fill="#4ade80" rx="10"
          stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="530" text-anchor="middle" font-size="16" fill="#0f1117" font-weight="bold">2nd Law (F = ma)</text>
    <text x="600" y="560" text-anchor="middle" font-size="14" fill="#0f1117">Force (N) = Mass (kg) × Acceleration (m/s²)</text>
    <text x="600" y="590" text-anchor="middle" font-size="13" fill="#0f1117">Units: N = kg·m·s⁻²</text>
    <text x="600" y="620" text-anchor="middle" font-size="13" fill="#0f1117">Experimental Setup: Atwood’s Machine</text>
    <text x="600" y="650" text-anchor="middle" font-size="13" fill="#0f1117">Δm = m₁ – m₂, a = g·Δm/(m₁+m₂)</text>

    <!-- Third Law Box -->
    <rect x="740" y="250" width="260" height="140" fill="#60a5fa" rx="10"
          stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="870" y="280" text-anchor="middle" font-size="16" fill="#0f1117" font-weight="bold">3rd Law (Action‑Reaction)</text>
    <text x="870" y="310" text-anchor="middle" font-size="14" fill="#0f1117">For every action, there is an equal and opposite reaction.</text>
    <text x="870" y="340" text-anchor="middle" font-size="13" fill="#0f1117">Formula: **F₁₂ = –F₂₁**</text>
    <text x="870" y="370" text-anchor="middle" font-size="13" fill="#0f1117">Experimental Setup: Sled on Frictionless Track</text>

    <!-- Connecting Lines & Arrows -->
    <!-- From central node to 1st law -->
    <line x1="600" y1="160" x2="330" y2="250" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- From central node to 2nd law -->
    <line x1="600" y1="160" x2="600" y2="500" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- From central node to 3rd law -->
    <line x1="600" y1="160" x2="870" y2="250" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Additional Details: Units Box -->
    <rect x="20" y="650" width="300" height="120" fill="#4ade80" rx="8"
          stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="170" y="680" text-anchor="middle" font-size="16" fill="#0f1117" font-weight="bold">Common Units</text>
    <text x="170" y="710" text-anchor="middle" font-size="14" fill="#0f1117">Force – Newton (N)</text>
    <text x="170" y="735" text-anchor="middle" font-size="14" fill="#0f1117">Mass – Kilogram (kg)</text>
    <text x="170" y="760" text-anchor="middle" font-size="14" fill="#0f1117">Acceleration – m/s²</text>

    <!-- Additional Details: Experimental Setups Box -->
    <rect x="880" y="650" width="300" height="120" fill="#60a5fa" rx="8"
          stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="1030" y="680" text-anchor="middle" font-size="16" fill="#0f1117" font-weight="bold">Key Experiments</text>
    <text x="1030" y="710" text-anchor="middle" font-size="14" fill="#0f1117">• Atwood’s Machine – verifies F=ma</text>
    <text x="1030" y="735" text-anchor="middle" font-size="14" fill="#0f1117">• Inclined Plane – demonstrates inertia</text>
    <text x="1030" y="760" text-anchor="middle" font-size="14" fill="#0f1117">• Sled on Track – shows action‑reaction</text>
  </svg>
</div>
`;

DIAGRAMS_DB["physics__energy-power-mechanics"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:12px; text-align:center; font-size:24px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.12);">
    Energy &amp; Gravitation
  </div>
  <svg viewBox="0 0 1200 800" width="1200" height="800" style="background:#0f1117;">
    <!-- Arrow marker definition -->
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#e2e8f0"/>
      </marker>
    </defs>

    <!-- Main Nodes -->
    <!-- Work -->
    <rect x="100" y="80" width="200" height="80" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="200" y="115" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Work</text>
    <text x="200" y="135" text-anchor="middle" fill="#0f1117" font-size="14">W = F·d·cosθ</text>
    <text x="200" y="150" text-anchor="middle" fill="#0f1117" font-size="14">Unit: Joule (J)</text>

    <!-- Power -->
    <rect x="400" y="80" width="200" height="80" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="500" y="115" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Power</text>
    <text x="500" y="135" text-anchor="middle" fill="#0f1117" font-size="14">P = W/t = F·v</text>
    <text x="500" y="150" text-anchor="middle" fill="#0f1117" font-size="14">Unit: Watt (W)</text>

    <!-- Energy -->
    <rect x="250" y="250" width="200" height="80" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="350" y="285" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Energy</text>

    <!-- Kinetic Energy -->
    <rect x="100" y="380" width="200" height="80" rx="10" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="200" y="415" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Kinetic Energy</text>
    <text x="200" y="435" text-anchor="middle" fill="#0f1117" font-size="14">KE = ½mv²</text>
    <text x="200" y="450" text-anchor="middle" fill="#0f1117" font-size="14">Unit: J</text>

    <!-- Potential Energy -->
    <rect x="400" y="380" width="200" height="80" rx="10" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="500" y="415" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Potential Energy</text>
    <text x="500" y="435" text-anchor="middle" fill="#0f1117" font-size="14">PE = mgh</text>
    <text x="500" y="450" text-anchor="middle" fill="#0f1117" font-size="14">Unit: J</text>

    <!-- Gravitation -->
    <rect x="700" y="80" width="260" height="120" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="830" y="115" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Gravitation</text>
    <text x="830" y="135" text-anchor="middle" fill="#0f1117" font-size="14">F = G·(m₁m₂)/r²</text>
    <text x="830" y="155" text-anchor="middle" fill="#0f1117" font-size="14">G = 6.674×10⁻¹¹ N·m²/kg²</text>
    <text x="830" y="175" text-anchor="middle" fill="#0f1117" font-size="14">Unit: N</text>

    <!-- Experimental Setups -->
    <rect x="700" y="250" width="260" height="200" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="830" y="275" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Experimental Setups</text>
    <text x="830" y="300" text-anchor="middle" fill="#0f1117" font-size="14">• Inclined Plane (Work)</text>
    <text x="830" y="320" text-anchor="middle" fill="#0f1117" font-size="14">• Atwood’s Machine (Power)</text>
    <text x="830" y="340" text-anchor="middle" fill="#0f1117" font-size="14">• Simple Pendulum (Gravitation)</text>
    <text x="830" y="360" text-anchor="middle" fill="#0f1117" font-size="14">• Cavendish Experiment (G)</text>

    <!-- Arrows connecting concepts -->
    <line x1="300" y1="160" x2="300" y2="250" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="500" y1="160" x2="500" y2="250" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="350" y1="330" x2="200" y2="380" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="350" y1="330" x2="500" y2="380" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="450" y1="200" x2="730" y2="140" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="550" y1="200" x2="730" y2="200" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="830" y1="230" x2="830" y2="250" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Footer note -->
    <text x="600" y="770" text-anchor="middle" fill="#60a5fa" font-size="14">Prepared for NDA / CDS / AFCAT Physics – Energy &amp; Gravitation</text>
  </svg>
</div>
`;

DIAGRAMS_DB["physics__physics-waves"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <div style="background:#4ade80; padding:12px 20px; font-size:24px; font-weight:bold; color:#0f1117; text-align:center;">
    Waves &amp; Acoustics
  </div>
  <svg viewBox="0 0 1200 800" style="width:100%; height:auto; background:#0f1117;">
    <!-- Central Node -->
    <rect x="500" y="20" width="200" height="60" fill="#4ade80" rx="8" ry="8" />
    <text x="600" y="55" text-anchor="middle" fill="#0f1117" font-size="20" font-weight="bold">Waves &amp; Acoustics</text>

    <!-- Branch Lines -->
    <line x1="600" y1="80" x2="300" y2="150" stroke="#e2e8f0" stroke-opacity="0.6" stroke-width="2"/>
    <line x1="600" y1="80" x2="900" y2="150" stroke="#e2e8f0" stroke-opacity="0.6" stroke-width="2"/>

    <!-- Sound Waves Section -->
    <rect x="200" y="150" width="200" height="50" fill="#60a5fa" rx="6" ry="6"/>
    <text x="300" y="183" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Sound Waves &amp; Acoustics</text>

    <!-- Sound Concepts -->
    <g>
      <rect x="50" y="240" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="125" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">Frequency (f) – Hz</text>
      <rect x="50" y="280" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="125" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">Wavelength (λ) – m</text>
      <rect x="50" y="320" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="125" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">Speed (v) – m/s</text>
      <rect x="50" y="360" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="125" y="382" text-anchor="middle" fill="#e2e8f0" font-size="14">Amplitude (A) – Pa</text>
    </g>

    <!-- Sound Laws -->
    <g>
      <rect x="250" y="240" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">v = f·λ</text>
      <rect x="250" y="280" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">c = 331 + 0.6 T (°C)</text>
      <rect x="250" y="320" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">I = P/A</text>
      <rect x="250" y="360" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="382" text-anchor="middle" fill="#e2e8f0" font-size="14">β = 10 log₁₀(I/I₀) dB</text>
      <rect x="250" y="400" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="422" text-anchor="middle" fill="#e2e8f0" font-size="14">f' = f (v±v₀)/(v±vₛ)</text>
    </g>

    <!-- Sound Experimental Setups -->
    <g>
      <rect x="500" y="240" width="180" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="590" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">Resonance Tube</text>
      <rect x="500" y="280" width="180" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="590" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">Kundt’s Tube</text>
      <rect x="500" y="320" width="180" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="590" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">Microphone + Oscilloscope</text>
    </g>

    <!-- Connectors for Sound Section -->
    <line x1="300" y1="200" x2="125" y2="240" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="300" y1="200" x2="350" y2="240" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="300" y1="200" x2="350" y2="280" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="300" y1="200" x2="350" y2="320" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="300" y1="200" x2="350" y2="360" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="300" y1="200" x2="350" y2="400" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="300" y1="200" x2="590" y2="240" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="300" y1="200" x2="590" y2="280" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="300" y1="200" x2="590" y2="320" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>

    <!-- Electromagnetic Waves Section -->
    <rect x="800" y="150" width="200" height="50" fill="#60a5fa" rx="6" ry="6"/>
    <text x="900" y="183" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Electromagnetic Waves &amp; Spectrum</text>

    <!-- EM Concepts -->
    <g>
      <rect x="650" y="240" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="725" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">Frequency (f) – Hz</text>
      <rect x="650" y="280" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="725" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">Wavelength (λ) – m</text>
      <rect x="650" y="320" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="725" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">Speed (c) = 3×10⁸ m/s</text>
      <rect x="650" y="360" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="725" y="382" text-anchor="middle" fill="#e2e8f0" font-size="14">Polarization</text>
    </g>

    <!-- EM Laws -->
    <g>
      <rect x="850" y="240" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">v = f·λ</text>
      <rect x="850" y="280" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">E = h·f (Planck)</text>
      <rect x="850" y="320" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">Snell’s Law n₁sinθ₁ = n₂sinθ₂</text>
      <rect x="850" y="360" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="382" text-anchor="middle" fill="#e2e8f0" font-size="14">Maxwell’s Eqns (∇×E = -∂B/∂t)</text>
    </g>

    <!-- EM Spectrum -->
    <g>
      <rect x="1050" y="240" width="130" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="1115" y="262" text-anchor="middle" fill="#e2e8f0" font-size="13">Radio</text>
      <rect x="1050" y="280" width="130" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="1115" y="302" text-anchor="middle" fill="#e2e8f0" font-size="13">Microwave</text>
      <rect x="1050" y="320" width="130" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="1115" y="342" text-anchor="middle" fill="#e2e8f0" font-size="13">Infrared</text>
      <rect x="1050" y="360" width="130" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="1115" y="382" text-anchor="middle" fill="#e2e8f0" font-size="13">Visible</text>
      <rect x="1050" y="400" width="130" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="1115" y="422" text-anchor="middle" fill="#e2e8f0" font-size="13">UV</text>
      <rect x="1050" y="440" width="130" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="1115" y="462" text-anchor="middle" fill="#e2e8f0" font-size="13">X‑ray</text>
      <rect x="1050" y="480" width="130" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="1115" y="502" text-anchor="middle" fill="#e2e8f0" font-size="13">Gamma</text>
    </g>

    <!-- EM Experimental Setups -->
    <g>
      <rect x="850" y="420" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="442" text-anchor="middle" fill="#e2e8f0" font-size="14">Double‑slit (Young)</text>
      <rect x="850" y="460" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="482" text-anchor="middle" fill="#e2e8f0" font-size="14">Prism Spectrometer</text>
      <rect x="850" y="500" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="522" text-anchor="middle" fill="#e2e8f0" font-size="14">Antenna &amp; Receiver</text>
    </g>

    <!-- Connectors for EM Section -->
    <line x1="900" y1="200" x2="725" y2="240" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="725" y2="280" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="725" y2="320" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="725" y2="360" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="950" y2="240" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="950" y2="280" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="950" y2="320" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="950" y2="360" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="1115" y2="260" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="1115" y2="300" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="1115" y2="340" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="1115" y2="380" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="1115" y2="420" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="1115" y2="460" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="950" y2="440" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="950" y2="480" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
    <line x1="900" y1="200" x2="950" y2="520" stroke="#e2e8f0" stroke-opacity="0.5" stroke-width="1"/>
  </svg>
</div>
`;

DIAGRAMS_DB["physics__physics-thermodynamics"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:12px; text-align:center; font-size:24px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.12);">
    Heat &amp; Thermodynamics
  </div>
  <svg width="1200" height="900" viewBox="0 0 1200 900" style="background:#0f1117;">
    <!-- Central Chapter Node -->
    <rect x="500" y="40" width="200" height="60" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="80" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Heat &amp; Thermodynamics</text>
    
    <!-- Main Branches -->
    <!-- Thermodynamics -->
    <line x1="600" y1="100" x2="600" y2="150" stroke="#60a5fa" stroke-width="2"/>
    <rect x="460" y="150" width="280" height="70" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="190" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Thermodynamics</text>
    <!-- Laws -->
    <line x1="600" y1="220" x2="600" y2="260" stroke="#60a5fa" stroke-width="2"/>
    <rect x="460" y="260" width="280" height="160" rx="8" fill="#0f1117" stroke="#60a5fa" stroke-width="2"/>
    <text x="600" y="285" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Laws &amp; Principles</text>
    <text x="470" y="315" fill="#e2e8f0" font-size="13">• First Law: ΔU = Q – W</text>
    <text x="470" y="340" fill="#e2e8f0" font-size="13">• Second Law: ΔS ≥ 0</text>
    <text x="470" y="365" fill="#e2e8f0" font-size="13">• Zeroth Law: Thermal equilibrium</text>
    <text x="470" y="390" fill="#e2e8f0" font-size="13">• Carnot Efficiency: η = 1 – Tc/Th</text>
    
    <!-- Heat Transfer -->
    <line x1="600" y1="100" x2="300" y2="150" stroke="#60a5fa" stroke-width="2"/>
    <rect x="200" y="150" width="200" height="70" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="300" y="190" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Heat Transfer</text>
    <!-- Modes -->
    <line x1="300" y1="220" x2="300" y2="260" stroke="#60a5fa" stroke-width="2"/>
    <rect x="180" y="260" width="240" height="180" rx="8" fill="#0f1117" stroke="#60a5fa" stroke-width="2"/>
    <text x="300" y="285" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Modes</text>
    <text x="190" y="315" fill="#e2e8f0" font-size="13">• Conduction: q = –k∇T (Fourier’s law)</text>
    <text x="190" y="340" fill="#e2e8f0" font-size="13">• Convection: Q = hA(Ts – Tf) (Newton’s law)</text>
    <text x="190" y="365" fill="#e2e8f0" font-size="13">• Radiation: P = σAT⁴ (Stefan‑Boltzmann)</text>
    
    <!-- Units -->
    <line x1="600" y1="100" x2="900" y2="150" stroke="#60a5fa" stroke-width="2"/>
    <rect x="800" y="150" width="200" height="70" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="900" y="190" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Units</text>
    <!-- Specific Units -->
    <line x1="900" y1="220" x2="900" y2="260" stroke="#60a5fa" stroke-width="2"/>
    <rect x="780" y="260" width="240" height="150" rx="8" fill="#0f1117" stroke="#60a5fa" stroke-width="2"/>
    <text x="900" y="285" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Standard Units</text>
    <text x="790" y="315" fill="#e2e8f0" font-size="13">• Energy: Joule (J)</text>
    <text x="790" y="340" fill="#e2e8f0" font-size="13">• Heat: calorie (cal) = 4.184 J</text>
    <text x="790" y="365" fill="#e2e8f0" font-size="13">• Power: Watt (W) = J s⁻¹</text>
    <text x="790" y="390" fill="#e2e8f0" font-size="13">• Temperature: Kelvin (K)</text>
    
    <!-- Experimental Setups -->
    <line x1="600" y1="100" x2="600" y2="420" stroke="#60a5fa" stroke-width="2"/>
    <rect x="460" y="420" width="280" height="70" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="460" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Experimental Setups</text>
    <!-- Details -->
    <line x1="600" y1="490" x2="600" y2="530" stroke="#60a5fa" stroke-width="2"/>
    <rect x="460" y="530" width="280" height="200" rx="8" fill="#0f1117" stroke="#60a5fa" stroke-width="2"/>
    <text x="600" y="555" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Key Apparatus</text>
    <text x="470" y="585" fill="#e2e8f0" font-size="13">• Calorimeter (constant‑pressure &amp; constant‑volume)</text>
    <text x="470" y="610" fill="#e2e8f0" font-size="13">• Carnot Engine (ideal reversible cycle)</text>
    <text x="470" y="635" fill="#e2e8f0" font-size="13">• Thermocouple (Seebeck effect)</text>
    <text x="470" y="660" fill="#e2e8f0" font-size="13">• Black‑body cavity (radiation experiments)</text>
    
    <!-- Decorative Footer -->
    <text x="600" y="880" text-anchor="middle" fill="#60a5fa" font-size="12">Prepared for NDA / CDS / AFCAT – 2024 Revision</text>
  </svg>
</div>
`;

DIAGRAMS_DB["physics__physics-electromagnetism"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:10px;">
  <div style="background:#4ade80; color:#0f1117; font-size:24px; font-weight:bold; text-align:center; padding:12px 0; border-radius:6px; margin-bottom:20px;">
    Electricity &amp; Magnetism
  </div>
  <svg width="1200" height="900" viewBox="0 0 1200 900" style="background:#0f1117;">
    <!-- Central Node -->
    <circle cx="600" cy="100" r="60" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="105" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">Electricity &amp; Magnetism</text>

    <!-- Electricity Branch -->
    <line x1="600" y1="160" x2="300" y2="260" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="300" cy="260" r="55" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="300" y="265" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Electricity</text>

    <!-- Concepts under Electricity -->
    <g transform="translate(150,340)">
      <rect x="0" y="0" width="300" height="200" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="150" y="30" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="bold">Fundamental Concepts</text>
      <text x="20" y="60" fill="#e2e8f0" font-size="12">• Charge (q) – unit: Coulomb (C)</text>
      <text x="20" y="80" fill="#e2e8f0" font-size="12">• Coulomb’s Law: F = k·q₁q₂/r²</text>
      <text x="20" y="100" fill="#e2e8f0" font-size="12">• k = 1/4πɛ₀, ɛ₀ = 8.854×10⁻¹² F m⁻¹</text>
      <text x="20" y="120" fill="#e2e8f0" font-size="12">• Electric Field: E = F/q = k·q/r² (N C⁻¹)</text>
      <text x="20" y="140" fill="#e2e8f0" font-size="12">• Potential (V) – unit: Volt (V)</text>
      <text x="20" y="160" fill="#e2e8f0" font-size="12">• V = k·q/r , ΔV = ∫E·dl</text>
      <text x="20" y="180" fill="#e2e8f0" font-size="12">• Capacitance (C) – unit: Farad (F)</text>
    </g>

    <!-- Circuits Branch -->
    <line x1="600" y1="160" x2="600" y2="260" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="600" cy="260" r="55" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="265" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Circuits</text>

    <!-- Concepts under Circuits -->
    <g transform="translate(460,340)">
      <rect x="0" y="0" width="280" height="260" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="140" y="30" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="bold">Circuit Laws &amp; Elements</text>
      <text x="20" y="60" fill="#e2e8f0" font-size="12">• Ohm’s Law: V = I·R</text>
      <text x="20" y="80" fill="#e2e8f0" font-size="12">• Power: P = V·I = I²R = V²/R</text>
      <text x="20" y="100" fill="#e2e8f0" font-size="12">• Resistivity: R = ρ·L/A</text>
      <text x="20" y="120" fill="#e2e8f0" font-size="12">• Kirchhoff’s Voltage Law (KVL)</text>
      <text x="20" y="140" fill="#e2e8f0" font-size="12">• Kirchhoff’s Current Law (KCL)</text>
      <text x="20" y="160" fill="#e2e8f0" font-size="12">• Series: Rₛ = ΣR , I same</text>
      <text x="20" y="180" fill="#e2e8f0" font-size="12">• Parallel: 1/Rₚ = Σ1/R , V same</text>
      <text x="20" y="200" fill="#e2e8f0" font-size="12">• RC Time Constant: τ = R·C</text>
      <text x="20" y="220" fill="#e2e8f0" font-size="12">• RL Time Constant: τ = L/R</text>
      <text x="20" y="240" fill="#e2e8f0" font-size="12">• RLC Resonance: ω₀ = 1/√(LC)</text>
    </g>

    <!-- Magnetism Branch -->
    <line x1="600" y1="160" x2="900" y2="260" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="900" cy="260" r="55" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="900" y="265" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Magnetism</text>

    <!-- Concepts under Magnetism -->
    <g transform="translate(720,340)">
      <rect x="0" y="0" width="360" height="240" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="180" y="30" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="bold">Magnetic Laws &amp; Units</text>
      <text x="20" y="60" fill="#e2e8f0" font-size="12">• Magnetic Field (B) – unit: Tesla (T)</text>
      <text x="20" y="80" fill="#e2e8f0" font-size="12">• Biot‑Savart Law: dB = (μ₀/4π)·(I dl×r̂)/r²</text>
      <text x="20" y="100" fill="#e2e8f0" font-size="12">• μ₀ = 4π×10⁻⁷ H m⁻¹</text>
      <text x="20" y="120" fill="#e2e8f0" font-size="12">• Ampère’s Law (integral): ∮B·dl = μ₀Iₑₙc</text>
      <text x="20" y="140" fill="#e2e8f0" font-size="12">• Lorentz Force: F = q(E + v×B)</text>
      <text x="20" y="160" fill="#e2e8f0" font-size="12">• Force on Current‑Carrying Conductor: F = I L×B</text>
      <text x="20" y="180" fill="#e2e8f0" font-size="12">• Magnetic Flux (Φ) – unit: Weber (Wb)</text>
      <text x="20" y="200" fill="#e2e8f0" font-size="12">• Faraday’s Law: ε = -dΦ/dt</text>
      <text x="20" y="220" fill="#e2e8f0" font-size="12">• Lenz’s Rule (direction of induced emf)</text>
    </g>

    <!-- Experimental Setups Section (bottom) -->
    <line x1="300" y1="460" x2="300" y2="560" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="600" y1="460" x2="600" y2="560" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="900" y1="460" x2="900" y2="560" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Coulomb’s Torsion Balance -->
    <circle cx="300" cy="580" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="300" y="585" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Coulomb’s<br/>Torsion Balance</text>
    <text x="300" y="610" text-anchor="middle" fill="#e2e8f0" font-size="10">F = k·q₁q₂/r² (1791)</text>

    <!-- Millikan Oil‑Drop -->
    <circle cx="600" cy="580" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="585" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Millikan<br/>Oil‑Drop</text>
    <text x="600" y="610" text-anchor="middle" fill="#e2e8f0" font-size="10">e = 1.602×10⁻¹⁹ C (1909)</text>

    <!-- Oersted’s Experiment -->
    <circle cx="900" cy="580" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="900" y="585" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Oersted’s<br/>Experiment</text>
    <text x="900" y="610" text-anchor="middle" fill="#e2e8f0" font-size="10">Current ⇢ Magnetic Field (1820)</text>

    <!-- Hall Effect Setup -->
    <line x1="300" y1="630" x2="300" y2="730" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="300" cy="750" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="300" y="755" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Hall Effect</text>
    <text x="300" y="780" text-anchor="middle" fill="#e2e8f0" font-size="10">V_H = (IB)/(ned)</text>

    <!-- Moving Coil Galvanometer -->
    <line x1="600" y1="630" x2="600" y2="730" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="600" cy="750" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="755" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Moving<br/>Coil Galvanometer</text>
    <text x="600" y="780" text-anchor="middle" fill="#e2e8f0" font-size="10">Torque ∝ I·B·A</text>

    <!-- Faraday’s Disk (Homopolar) -->
    <line x1="900" y1="630" x2="900" y2="730" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="900" cy="750" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="900" y="755" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Faraday’s<br/>Disk</text>
    <text x="900" y="780" text-anchor="middle" fill="#e2e8f0" font-size="10">ε = (B·π·r²·ω)/2π</text>
  </svg>
</div>
`;

DIAGRAMS_DB["physics__physics-modern"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:20px;">
    <div style="background:#60a5fa; color:#0f1117; padding:12px; text-align:center; font-size:1.8rem; font-weight:bold; border-radius:6px; margin-bottom:20px;">
      Modern Physics &amp; Units
    </div>
    <svg viewBox="0 0 1000 720" width="100%" height="auto" style="background:#0f1117;">
      <!-- Central Node -->
      <rect x="400" y="20" width="200" height="50" fill="#4ade80" rx="8" ry="8" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="500" y="52" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="16" font-weight="bold">Modern Physics &amp; Units</text>

      <!-- Main Branches -->
      <line x1="500" y1="70" x2="230" y2="130" stroke="#e2e8f0" stroke-width="2"/>
      <line x1="500" y1="70" x2="770" y2="130" stroke="#e2e8f0" stroke-width="2"/>

      <rect x="100" y="130" width="260" height="40" fill="#60a5fa" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="230" y="158" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="14" font-weight="bold">Nuclear Physics &amp; Radioactivity</text>

      <rect x="640" y="130" width="260" height="40" fill="#60a5fa" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="770" y="158" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="14" font-weight="bold">SI Units &amp; Everyday Physics</text>

      <!-- Sub‑nodes for Nuclear Physics -->
      <line x1="230" y1="170" x2="150" y2="240" stroke="#e2e8f0" stroke-width="2"/>
      <line x1="230" y1="170" x2="250" y2="240" stroke="#e2e8f0" stroke-width="2"/>

      <rect x="50" y="240" width="200" height="50" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="150" y="270" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Radioactive Decay<br/>N = N₀e⁻ˡᵗ</text>

      <rect x="250" y="240" width="200" height="70" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="350" y="260" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Half‑Life<br/>T½ = ln2 / λ</text>
      <text x="350" y="280" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Mass‑Energy<br/>E = mc²</text>

      <line x1="230" y1="170" x2="350" y2="340" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="300" y="340" width="200" height="80" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="400" y="360" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Binding Energy<br/>ΔE = (Z mₚ + N mₙ – M) c²</text>
      <text x="400" y="380" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Experimental Setups</text>
      <text x="400" y="400" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">• Cloud Chamber</text>
      <text x="400" y="420" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">• Geiger‑Müller Counter</text>
      <text x="400" y="440" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">• Scintillation Detector</text>

      <!-- Sub‑nodes for SI Units -->
      <line x1="770" y1="170" x2="660" y2="240" stroke="#e2e8f0" stroke-width="2"/>
      <line x1="770" y1="170" x2="880" y2="240" stroke="#e2e8f0" stroke-width="2"/>

      <rect x="560" y="240" width="200" height="80" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="660" y="260" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">SI Base Units</text>
      <text x="660" y="280" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">kg, m, s, A, K, mol, cd</text>
      <text x="660" y="300" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Derived Units</text>
      <text x="660" y="320" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">N = kg·m·s⁻², J = N·m</text>

      <rect x="860" y="240" width="200" height="70" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="960" y="260" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Prefixes &amp; Everyday</text>
      <text x="960" y="280" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">k = 10³, M = 10⁶, µ = 10⁻⁶</text>
      <text x="960" y="300" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Power (W), Pressure (Pa)</text>

      <line x1="770" y1="170" x2="770" y2="340" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="670" y="340" width="200" height="90" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="770" y="360" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Experimental Setups</text>
      <text x="770" y="380" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">• Millikan Oil‑Drop</text>
      <text x="770" y="400" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">• Cavendish (G)</text>
      <text x="770" y="420" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">• Interferometer (λ)</text>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["physics__physics-pyq-trends"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:12px; text-align:center; font-size:24px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.12);">
    PYQ Trend Analysis
  </div>
  <svg width="1200" height="800" style="background:#0f1117;">
    <!-- Central Node -->
    <circle cx="600" cy="80" r="50" fill="#4ade80"/>
    <text x="600" y="85" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Physics PYQ</text>

    <!-- Connecting Lines -->
    <line x1="600" y1="130" x2="200" y2="200" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="600" y1="130" x2="450" y2="200" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="600" y1="130" x2="700" y2="200" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="600" y1="130" x2="950" y2="200" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Mechanics Box -->
    <g>
      <rect x="100" y="200" width="240" height="340" fill="#0f1117" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <rect x="100" y="200" width="240" height="30" fill="#60a5fa"/>
      <text x="220" y="222" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Mechanics</text>

      <text x="120" y="250" fill="#e2e8f0" font-size="14">
        • Formula: <tspan fill="#4ade80">F = m·a</tspan>
      </text>
      <text x="120" y="280" fill="#e2e8f0" font-size="14">
        • Unit: Force (N), Mass (kg), Acceleration (m/s²)
      </text>
      <text x="120" y="310" fill="#e2e8f0" font-size="14">
        • Experiment: Inclined plane, Atwood's machine
      </text>
      <text x="120" y="340" fill="#e2e8f0" font-size="14">
        • Trend (NDA)
      </text>
      <text x="140" y="370" fill="#e2e8f0" font-size="13">
        2023: 4 Q (33%)
      </text>
      <text x="140" y="390" fill="#e2e8f0" font-size="13">
        2022: 5 Q (38%)
      </text>
      <text x="140" y="410" fill="#e2e8f0" font-size="13">
        2021: 3 Q (25%)
      </text>
    </g>

    <!-- Thermodynamics Box -->
    <g>
      <rect x="350" y="200" width="240" height="340" fill="#0f1117" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <rect x="350" y="200" width="240" height="30" fill="#60a5fa"/>
      <text x="470" y="222" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Thermodynamics</text>

      <text x="370" y="250" fill="#e2e8f0" font-size="14">
        • Formula: <tspan fill="#4ade80">ΔU = Q − W</tspan>
      </text>
      <text x="370" y="280" fill="#e2e8f0" font-size="14">
        • Unit: Energy (J), Heat (J), Work (J)
      </text>
      <text x="370" y="310" fill="#e2e8f0" font-size="14">
        • Experiment: Calorimeter, Gas expansion
      </text>
      <text x="370" y="340" fill="#e2e8f0" font-size="14">
        • Trend (NDA)
      </text>
      <text x="390" y="370" fill="#e2e8f0" font-size="13">
        2023: 2 Q (17%)
      </text>
      <text x="390" y="390" fill="#e2e8f0" font-size="13">
        2022: 2 Q (15%)
      </text>
      <text x="390" y="410" fill="#e2e8f0" font-size="13">
        2021: 3 Q (20%)
      </text>
    </g>

    <!-- Electromagnetism Box -->
    <g>
      <rect x="600" y="200" width="240" height="340" fill="#0f1117" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <rect x="600" y="200" width="240" height="30" fill="#60a5fa"/>
      <text x="720" y="222" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Electromagnetism</text>

      <text x="620" y="250" fill="#e2e8f0" font-size="14">
        • Formula: <tspan fill="#4ade80">V = I·R</tspan>
      </text>
      <text x="620" y="280" fill="#e2e8f0" font-size="14">
        • Unit: Voltage (V), Current (A), Resistance (Ω)
      </text>
      <text x="620" y="310" fill="#e2e8f0" font-size="14">
        • Experiment: Wheatstone bridge, CRT
      </text>
      <text x="620" y="340" fill="#e2e8f0" font-size="14">
        • Trend (NDA)
      </text>
      <text x="640" y="370" fill="#e2e8f0" font-size="13">
        2023: 5 Q (42%)
      </text>
      <text x="640" y="390" fill="#e2e8f0" font-size="13">
        2022: 3 Q (23%)
      </text>
      <text x="640" y="410" fill="#e2e8f0" font-size="13">
        2021: 5 Q (42%)
      </text>
    </g>

    <!-- Modern Physics Box -->
    <g>
      <rect x="850" y="200" width="240" height="340" fill="#0f1117" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <rect x="850" y="200" width="240" height="30" fill="#60a5fa"/>
      <text x="970" y="222" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Modern Physics</text>

      <text x="870" y="250" fill="#e2e8f0" font-size="14">
        • Formula: <tspan fill="#4ade80">E = mc²</tspan>
      </text>
      <text x="870" y="280" fill="#e2e8f0" font-size="14">
        • Unit: Energy (J), Mass (kg), c = 3×10⁸ m/s
      </text>
      <text x="870" y="310" fill="#e2e8f0" font-size="14">
        • Experiment: Photoelectric effect, PET scanner
      </text>
      <text x="870" y="340" fill="#e2e8f0" font-size="14">
        • Trend (NDA)
      </text>
      <text x="890" y="370" fill="#e2e8f0" font-size="13">
        2023: 1 Q (8%)
      </text>
      <text x="890" y="390" fill="#e2e8f0" font-size="13">
        2022: 0 Q (0%)
      </text>
      <text x="890" y="410" fill="#e2e8f0" font-size="13">
        2021: 3 Q (25%)
      </text>
    </g>
  </svg>
</div>
`;

DIAGRAMS_DB["chemistry__chemistry-substances"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; text-align:center; padding:12px 0; font-size:24px; font-weight:bold;">
    Acids, Bases &amp; Salts
  </div>
  <!-- Diagram -->
  <svg width="2000" height="1300" style="display:block; margin:auto; background:#0f1117;">
    <!-- Definitions for arrows -->
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#60a5fa"/>
      </marker>
    </defs>

    <!-- Central Nodes -->
    <!-- Acids -->
    <rect x="100" y="100" width="260" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="230" y="130" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Acids</text>
    <text x="230" y="155" text-anchor="middle" fill="#e2e8f0" font-size="14">Strong: HCl, H₂SO₄, HNO₃, HClO₄, HBr, HI</text>
    <text x="230" y="175" text-anchor="middle" fill="#e2e8f0" font-size="14">Weak: CH₃COOH, H₂CO₃, H₃PO₄</text>

    <!-- Bases -->
    <rect x="100" y="300" width="260" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="230" y="330" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Bases</text>
    <text x="230" y="355" text-anchor="middle" fill="#e2e8f0" font-size="14">Strong: NaOH, KOH, Ca(OH)₂</text>
    <text x="230" y="375" text-anchor="middle" fill="#e2e8f0" font-size="14">Weak: NH₃, Al(OH)₃</text>

    <!-- Salts -->
    <rect x="100" y="500" width="260" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="230" y="530" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Salts</text>
    <text x="230" y="555" text-anchor="middle" fill="#e2e8f0" font-size="14">Neutral: NaCl, K₂SO₄</text>
    <text x="230" y="575" text-anchor="middle" fill="#e2e8f0" font-size="14">Acidic: NH₄Cl, AlCl₃</text>
    <text x="230" y="595" text-anchor="middle" fill="#e2e8f0" font-size="14">Basic: Na₂CO₃, CaCO₃</text>

    <!-- pH Indicators -->
    <rect x="500" y="100" width="300" height="150" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="650" y="130" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">pH Indicators</text>
    <text x="650" y="155" text-anchor="middle" fill="#e2e8f0" font-size="14">Phenolphthalein: Colorless → Pink (pH > 8.2)</text>
    <text x="650" y="175" text-anchor="middle" fill="#e2e8f0" font-size="14">Methyl Orange: Red → Yellow (pH 3.1‑4.4)</text>
    <text x="650" y="195" text-anchor="middle" fill="#e2e8f0" font-size="14">Litmus: Red (acid) ↔ Blue (base) (pH ≈ 7)</text>

    <!-- Neutralization Reaction -->
    <rect x="500" y="300" width="300" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="650" y="330" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Neutralization</text>
    <text x="650" y="355" text-anchor="middle" fill="#e2e8f0" font-size="14">HA + BOH → A⁻ + B⁺ + H₂O</text>
    <text x="650" y="375" text-anchor="middle" fill="#e2e8f0" font-size="14">e.g., HCl + NaOH → NaCl + H₂O</text>

    <!-- Amphoteric Oxides -->
    <rect x="500" y="460" width="300" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="650" y="490" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Amphoteric Oxides</text>
    <text x="650" y="515" text-anchor="middle" fill="#e2e8f0" font-size="14">Al₂O₃ + 2HCl → 2AlCl₃ + H₂O</text>
    <text x="650" y="535" text-anchor="middle" fill="#e2e8f0" font-size="14">Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O</text>

    <!-- pH Scale -->
    <rect x="950" y="100" width="300" height="380" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="1100" y="130" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">pH Scale (0‑14)</text>
    <text x="1100" y="160" text-anchor="middle" fill="#e2e8f0" font-size="14">0 – Strong Acid (e.g., 0.1 M HCl)</text>
    <text x="1100" y="190" text-anchor="middle" fill="#e2e8f0" font-size="14">7 – Neutral (pure water)</text>
    <text x="1100" y="220" text-anchor="middle" fill="#e2e8f0" font-size="14">14 – Strong Base (e.g., 0.1 M NaOH)</text>
    <text x="1100" y="250" text-anchor="middle" fill="#e2e8f0" font-size="14">Acidic (pH < 7) → Basic (pH > 7)</text>

    <!-- Arrows connecting concepts -->
    <!-- Acid → Neutralization -->
    <line x1="230" y1="220" x2="230" y2="300" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Base → Neutralization -->
    <line x1="230" y1="420" x2="230" y2="500" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Neutralization → Salts -->
    <line x1="230" y1="620" x2="230" y2="700" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Salts → Amphoteric Oxides (example) -->
    <line x1="230" y1="620" x2="500" y2="520" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Acid → pH Indicators -->
    <line x1="360" y1="160" x2="500" y2="160" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Base → pH Indicators -->
    <line x1="360" y1="340" x2="500" y2="340" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Indicators → pH Scale -->
    <line x1="800" y1="175" x2="950" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Neutralization → pH Scale -->
    <line x1="650" y1="420" x2="1100" y2="300" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Amphoteric Oxides → pH Scale -->
    <line x1="650" y1="580" x2="1100" y2="470" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Footer note -->
    <text x="1000" y="1250" text-anchor="middle" fill="#60a5fa" font-size="14">
      *Important for NDA, CDS, AFCAT – memorize strong acids/bases, neutralization equations & indicator ranges.
    </text>
  </svg>
</div>
`;

DIAGRAMS_DB["chemistry__chemistry-bonding"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <div style="background:#4ade80; color:#0f1117; padding:12px; font-size:28px; font-weight:bold; text-align:center;">
    Chemical Bonding
  </div>
  <svg width="2200" height="1300" style="background:#0f1117;">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5"
              orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 z" fill="#60a5fa"/>
      </marker>
    </defs>

    <!-- Central Node -->
    <rect x="950" y="20" width="300" height="80" rx="8"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="1100" y="70" text-anchor="middle" fill="#e2e8f0"
          style="font-size:20px; font-weight:bold;">Chemical Bonding</text>

    <!-- Bond Types -->
    <!-- Ionic Bond -->
    <rect x="150" y="150" width="300" height="150" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="300" y="180" fill="#0f1117" style="font-size:18px; font-weight:bold;">Ionic Bond</text>
    <text x="300" y="210" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Na⁺  +  Cl⁻ → NaCl</text>
    <text x="300" y="235" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Lattice Energy ≈ 787 kJ mol⁻¹</text>
    <text x="300" y="260" fill="#0f1117" style="font-size:14px;" text-anchor="middle">High melting point, soluble in water</text>

    <!-- Covalent Bond -->
    <rect x="550" y="150" width="300" height="180" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="700" y="180" fill="#0f1117" style="font-size:18px; font-weight:bold;">Covalent Bond</text>
    <text x="700" y="210" fill="#0f1117" style="font-size:14px;" text-anchor="middle">H₂  +  O₂ → H₂O</text>
    <text x="700" y="235" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Bond Energy (O–H) ≈ 463 kJ mol⁻¹</text>
    <text x="700" y="260" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Polar covalent (ΔEN = 1.4)</text>
    <text x="700" y="285" fill="#0f1117" style="font-size:14px;" text-anchor="middle">VSEPR: Bent (104.5°)</text>

    <!-- Metallic Bond -->
    <rect x="950" y="150" width="300" height="130" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="1100" y="180" fill="#0f1117" style="font-size:18px; font-weight:bold;">Metallic Bond</text>
    <text x="1100" y="210" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Fe (0) → Fe²⁺ + 2e⁻</text>
    <text x="1100" y="235" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Delocalised electron sea</text>
    <text x="1100" y="260" fill="#0f1117" style="font-size:14px;" text-anchor="middle">High conductivity, ductility, malleability</text>

    <!-- Coordinate (Dative) Bond -->
    <rect x="1350" y="150" width="300" height="150" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="1500" y="180" fill="#0f1117" style="font-size:18px; font-weight:bold;">Coordinate Bond</text>
    <text x="1500" y="210" fill="#0f1117" style="font-size:14px;" text-anchor="middle">NH₃ + BF₃ → H₃N⁺–BF₃⁻</text>
    <text x="1500" y="235" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Lewis base donates lone pair</text>
    <text x="1500" y="260" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Often seen in complex ions</text>

    <!-- Periodic Trends -->
    <rect x="950" y="340" width="300" height="200" rx="8"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="1100" y="370" fill="#e2e8f0" style="font-size:18px; font-weight:bold;">Periodic Trends</text>
    <text x="1100" y="400" fill="#e2e8f0" style="font-size:14px;" text-anchor="middle">Electronegativity ↑ across a period</text>
    <text x="1100" y="425" fill="#e2e8f0" style="font-size:14px;" text-anchor="middle">Pauling values: F = 3.98, O = 3.44, N = 3.04</text>
    <text x="1100" y="450" fill="#e2e8f0" style="font-size:14px;" text-anchor="middle">Atomic radius ↓ across a period</text>
    <text x="1100" y="475" fill="#e2e8f0" style="font-size:14px;" text-anchor="middle">Ionisation Energy ↑ across a period</text>

    <!-- Connecting Lines -->
    <line x1="1150" y1="100" x2="300" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="1150" y1="100" x2="700" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="1150" y1="100" x2="1100" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="1150" y1="100" x2="1500" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="1150" y1="230" x2="1100" y2="340" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Additional Details -->
    <text x="1150" y="300" fill="#f59e0b" style="font-size:16px; font-weight:bold;">Bond Types Summary</text>
    <text x="1150" y="330" fill="#e2e8f0" style="font-size:14px;">
      • Ionic – Electrostatic attraction (ΔEN > 1.7)  
      • Covalent – Sharing of electrons (ΔEN ≤ 1.7)  
      • Metallic – Delocalised electrons in lattice  
      • Coordinate – Lone‑pair donation
    </text>
  </svg>
</div>
`;

DIAGRAMS_DB["chemistry__chemistry-metallurgy"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:12px;">
    <h2 style="margin:0; color:#4ade80; text-align:center; font-size:24px;">Metals & Metallurgy</h2>
  </div>
  <div style="position:relative; width:2000px; height:1200px; background:#0f1117;">
    <!-- Metals -->
    <div style="position:absolute; left:50px; top:100px; width:180px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#4ade80;">Metals</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>Good Conductors</li>
        <li>Malleable & Ductile</li>
        <li>High Melting Points</li>
        <li>Examples: Fe, Cu, Al, Zn</li>
      </ul>
    </div>
    <!-- Ores -->
    <div style="position:absolute; left:300px; top:100px; width:200px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#4ade80;">Ores</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>Hematite – Fe₂O₃</li>
        <li>Bauxite – Al₂O₃·H₂O</li>
        <li>Chalcopyrite – CuFeS₂</li>
        <li>Galena – PbS</li>
      </ul>
    </div>
    <!-- Extraction reactions -->
    <div style="position:absolute; left:300px; top:260px; width:260px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#60a5fa;">Extraction</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>Fe₂O₃ + 3CO → 2Fe + 3CO₂ (Blast furnace)</li>
        <li>Al₂O₃ + 3C → 2Al + 3CO (Hall‑Héroult)</li>
        <li>CuFeS₂ + 4O₂ → Cu + Fe₂O₃ + 2SO₂</li>
      </ul>
    </div>
    <!-- Alloys -->
    <div style="position:absolute; left:600px; top:100px; width:180px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#4ade80;">Alloys</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>Brass – Cu + Zn</li>
        <li>Bronze – Cu + Sn</li>
        <li>Steel – Fe + C (≤2%)</li>
        <li>Solder – Sn + Pb</li>
      </ul>
    </div>
    <!-- Metallurgy processes -->
    <div style="position:absolute; left:850px; top:100px; width:260px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#60a5fa;">Metallurgy</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>Roasting → Oxide</li>
        <li>Reduction – Carbon, Hydrogen</li>
        <li>Electro‑refining (Cu, Ag)</li>
        <li>Distillation (Zn)</li>
      </ul>
    </div>
    <!-- Reactivity Series -->
    <div style="position:absolute; left:50px; top:500px; width:200px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#4ade80;">Reactivity Series</h3>
      <ol style="margin:5px 0 0 20px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>K</li>
        <li>Na</li>
        <li>Ca</li>
        <li>Mg</li>
        <li>Al</li>
        <li>Zinc</li>
        <li>Iron</li>
        <li>Nickel</li>
        <li>Copper</li>
        <li>Silver</li>
        <li>Gold</li>
      </ol>
    </div>
    <!-- Displacement reactions -->
    <div style="position:absolute; left:300px; top:500px; width:300px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#60a5fa;">Displacement Reactions</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>Zn + CuSO₄ → ZnSO₄ + Cu (Zn ↑)</li>
        <li>Fe + CuSO₄ → FeSO₄ + Cu (Fe ↑)</li>
        <li>Mg + 2H₂O → Mg(OH)₂ + H₂ (Mg ↑)</li>
        <li>Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂ (Al ↑)</li>
      </ul>
    </div>
    <!-- Connecting arrows -->
    <svg style="position:absolute; left:0; top:0; width:2000px; height:1200px; pointer-events:none;">
      <defs>
        <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L0,10 L10,5 Z" fill="#4ade80"/>
        </marker>
        <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L0,10 L10,5 Z" fill="#60a5fa"/>
        </marker>
      </defs>
      <!-- Metals → Ores -->
      <line x1="140" y1="180" x2="300" y2="130" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <!-- Metals → Alloys -->
      <line x1="140" y1="180" x2="660" y2="130" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <!-- Metals → Metallurgy -->
      <line x1="140" y1="180" x2="880" y2="130" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <!-- Reactivity Series → Displacement -->
      <line x1="150" y1="580" x2="300" y2="560" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["chemistry__chemistry-carbon-numericals"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <div style="background:#4ade80; color:#0f1117; padding:12px; text-align:center; font-size:24px; font-weight:bold; border-radius:4px; margin-bottom:20px;">
    Carbon Compounds &amp; Numericals
  </div>
  <div style="position:relative; width:1200px; height:850px; margin:auto; background:#0f1117; border:1px solid rgba(255,255,255,0.12);">
    <svg width="1200" height="850" style="overflow:visible;">
      <!-- Arrow marker -->
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#e2e8f0"/>
        </marker>
      </defs>

      <!-- Central Carbon Box -->
      <rect x="540" y="30" width="120" height="50" fill="#4ade80" rx="6" ry="6"/>
      <text x="600" y="60" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Carbon (C)</text>

      <!-- Inorganic Carbon Compounds -->
      <rect x="200" y="150" width="200" height="120" fill="#60a5fa" rx="6" ry="6"/>
      <text x="300" y="175" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Inorganic Carbon Compounds</text>
      <text x="300" y="200" text-anchor="middle" fill="#0f1117" font-size="12">CO₂, CO, H₂CO₃</text>
      <text x="300" y="220" text-anchor="middle" fill="#0f1117" font-size="12">Carbonates (CaCO₃)</text>
      <text x="300" y="240" text-anchor="middle" fill="#0f1117" font-size="12">Carbides (CaC₂)</text>

      <!-- Organic Carbon Compounds -->
      <rect x="800" y="150" width="200" height="120" fill="#4ade80" rx="6" ry="6"/>
      <text x="900" y="175" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Organic Carbon Compounds</text>
      <text x="900" y="200" text-anchor="middle" fill="#0f1117" font-size="12">Alkanes, Alkenes, Alkynes</text>
      <text x="900" y="220" text-anchor="middle" fill="#0f1117" font-size="12">Aromatics, Functional Groups</text>

      <!-- Alkanes -->
      <rect x="720" y="300" width="160" height="50" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="330" text-anchor="middle" fill="#0f1117" font-size="12">Alkanes: CₙH₂ₙ₊₂ (e.g., CH₄)</text>

      <!-- Alkenes -->
      <rect x="720" y="370" width="160" height="50" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="400" text-anchor="middle" fill="#0f1117" font-size="12">Alkenes: CₙH₂ₙ (e.g., C₂H₄)</text>

      <!-- Alkynes -->
      <rect x="720" y="440" width="160" height="50" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="470" text-anchor="middle" fill="#0f1117" font-size="12">Alkynes: CₙH₂ₙ₋₂ (e.g., C₂H₂)</text>

      <!-- Aromatics -->
      <rect x="720" y="510" width="160" height="50" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="540" text-anchor="middle" fill="#0f1117" font-size="12">Aromatics: C₆H₆ (Benzene)</text>

      <!-- Functional Groups -->
      <rect x="720" y="580" width="160" height="120" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="610" text-anchor="middle" fill="#0f1117" font-size="12">Functional Groups</text>
      <text x="800" y="630" text-anchor="middle" fill="#0f1117" font-size="12">- Alcohol: R‑OH</text>
      <text x="800" y="650" text-anchor="middle" fill="#0f1117" font-size="12">- Aldehyde: R‑CHO</text>
      <text x="800" y="670" text-anchor="middle" fill="#0f1117" font-size="12">- Ketone: R‑CO‑R'</text>
      <text x="800" y="690" text-anchor="middle" fill="#0f1117" font-size="12">- Carboxylic Acid: R‑COOH</text>
      <text x="800" y="710" text-anchor="middle" fill="#0f1117" font-size="12">- Ester: R‑COO‑R'</text>
      <text x="800" y="730" text-anchor="middle" fill="#0f1117" font-size="12">- Amine: R‑NH₂</text>

      <!-- Mole Concept Box -->
      <rect x="500" y="400" width="200" height="200" fill="#f59e0b" rx="6" ry="6"/>
      <text x="600" y="425" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Mole Concept &amp; Concentration</text>
      <text x="600" y="450" text-anchor="middle" fill="#0f1117" font-size="12">Avogadro No.: 6.022×10²³ mol⁻¹</text>
      <text x="600" y="470" text-anchor="middle" fill="#0f1117" font-size="12">Molarity (M) = n/V (mol/L)</text>
      <text x="600" y="490" text-anchor="middle" fill="#0f1117" font-size="12">Molality (m) = n/kg (mol/kg)</text>
      <text x="600" y="510" text-anchor="middle" fill="#0f1117" font-size="12">Normality (N) = equivalents/L</text>
      <text x="600" y="530" text-anchor="middle" fill="#0f1117" font-size="12">% w/w = (mass solute / mass solution)×100</text>
      <text x="600" y="550" text-anchor="middle" fill="#0f1117" font-size="12">% v/v = (vol solute / vol solution)×100</text>

      <!-- Reaction Examples -->
      <rect x="350" y="630" width="500" height="150" fill="#4ade80" rx="6" ry="6"/>
      <text x="600" y="655" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Key Reaction Examples</text>
      <text x="600" y="680" text-anchor="middle" fill="#0f1117" font-size="12">Combustion of Methane:</text>
      <text x="600" y="700" text-anchor="middle" fill="#0f1117" font-size="12">CH₄ + 2 O₂ → CO₂ + 2 H₂O</text>
      <text x="600" y="720" text-anchor="middle" fill="#0f1117" font-size="12">Esterification (Acetic Acid + Ethanol):</text>
      <text x="600" y="740" text-anchor="middle" fill="#0f1117" font-size="12">CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O</text>
      <text x="600" y="760" text-anchor="middle" fill="#0f1117" font-size="12">Hydrolysis of Ester:</text>
      <text x="600" y="780" text-anchor="middle" fill="#0f1117" font-size="12">CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH</text>

      <!-- Connecting Arrows -->
      <!-- Carbon to Inorganic -->
      <line x1="600" y1="80" x2="300" y2="150" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrowhead)"/>
      <!-- Carbon to Organic -->
      <line x1="600" y1="80" x2="900" y2="150" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrowhead)"/>
      <!-- Organic to Alkanes -->
      <line x1="900" y1="270" x2="800" y2="300" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrowhead)"/>
      <!-- Organic to Alkenes -->
      <line x1="900" y1="270" x2="800" y2="370" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrowhead)"/>
      <!-- Organic to Alkynes -->
      <line x1="900" y1="270" x2="800" y2="440" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrowhead)"/>
      <!-- Organic to Aromatics -->
      <line x1="900" y1="270" x2="800" y2="510" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrowhead)"/>
      <!-- Organic to Functional Groups -->
      <line x1="900" y1="270" x2="800" y2="590" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrowhead)"/>
      <!-- Carbon to Mole Concept -->
      <line x1="600" y1="80" x2="600" y2="400" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrowhead)"/>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["biology__biology-cell"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background-color:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">

    <!-- Title Bar -->
    <div style="background: linear-gradient(90deg, #4ade80, #60a5fa); padding: 15px 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; font-size: 2.2em; font-weight: bold; color: #0f1117; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        CELL BIOLOGY & GENETICS
    </div>

    <div style="display: flex; flex-direction: column; align-items: center; gap: 40px; position: relative;">

        <!-- Central Concept: The Cell -->
        <div style="background-color: #60a5fa; padding: 25px 40px; border-radius: 12px; font-size: 2.5em; font-weight: bold; color: #0f1117; box-shadow: 0 8px 25px rgba(0,0,0,0.4); border: 2px solid #4ade80; text-align: center; position: relative; z-index: 2;">
            THE CELL
            <div style="font-size: 0.5em; font-weight: normal; margin-top: 5px; color: rgba(0,0,0,0.7);">Basic Unit of Life</div>
        </div>

        <!-- Connection from THE CELL to major branches (simulated with absolute positioning and borders) -->
        <div style="position: absolute; top: 180px; width: 2px; height: 100px; background-color: #e2e8f0; z-index: 1;"></div>
        <div style="position: absolute; top: 280px; width: 80%; height: 2px; background-color: #e2e8f0; z-index: 1;"></div>
        <div style="position: absolute; top: 280px; left: 10%; width: 2px; height: 20px; background-color: #e2e8f0; z-index: 1;"></div>
        <div style="position: absolute; top: 280px; right: 10%; width: 2px; height: 20px; background-color: #e2e8f0; z-index: 1;"></div>


        <!-- Major Branches Container -->
        <div style="display: flex; justify-content: space-around; width: 100%; margin-top: 20px; flex-wrap: wrap; gap: 30px;">

            <!-- Branch 1: Cell Structure -->
            <div style="flex: 1; min-width: 400px; max-width: 48%; background-color: #1a1d26; border-radius: 10px; padding: 25px; box-shadow: 0 6px 20px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.12); position: relative;">
                <h3 style="color: #4ade80; text-align: center; font-size: 1.8em; margin-bottom: 20px; border-bottom: 2px solid #4ade80; padding-bottom: 10px;">CELL STRUCTURE</h3>

                <!-- Sub-branch: Classification -->
                <div style="margin-bottom: 25px;">
                    <h4 style="color: #60a5fa; font-size: 1.3em; margin-bottom: 10px;">TYPES OF CELLS</h4>
                    <div style="display: flex; justify-content: space-around; gap: 15px;">
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); flex: 1;">
                            <strong style="color: #f59e0b;">PROKARYOTIC</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 10px; font-size: 0.9em;">
                                <li>• No true nucleus</li>
                                <li>• No membrane-bound organelles</li>
                                <li>• Smaller (0.1-5 µm)</li>
                                <li>• Ex: Bacteria, Archaea</li>
                                <li>• Ribosomes: 70S</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); flex: 1;">
                            <strong style="color: #f59e0b;">EUKARYOTIC</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 10px; font-size: 0.9em;">
                                <li>• True nucleus present</li>
                                <li>• Membrane-bound organelles</li>
                                <li>• Larger (10-100 µm)</li>
                                <li>• Ex: Plants, Animals, Fungi</li>
                                <li>• Ribosomes: 80S</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Sub-branch: Eukaryotic Cell Organelles -->
                <div>
                    <h4 style="color: #60a5fa; font-size: 1.3em; margin-bottom: 10px;">EUKARYOTIC CELL ORGANELLES</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Nucleus</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• Contains genetic material (DNA)</li>
                                <li>• Controls cell activities</li>
                                <li>• Nucleolus: rRNA synthesis</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Mitochondria</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• 'Powerhouse' of the cell</li>
                                <li>• ATP production (Cellular Respiration)</li>
                                <li>• Has own 70S ribosomes & DNA</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Chloroplasts</strong> (Plants)
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• Site of Photosynthesis</li>
                                <li>• Contains Chlorophyll</li>
                                <li>• Has own 70S ribosomes & DNA</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Endoplasmic Reticulum</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• RER: Protein synthesis & folding (ribosomes)</li>
                                <li>• SER: Lipid synthesis, detoxification</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Golgi Apparatus</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• Modifies, sorts, packages proteins & lipids</li>
                                <li>• Forms lysosomes</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Lysosomes</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• 'Suicidal bags'</li>
                                <li>• Contain digestive enzymes</li>
                                <li>• Waste breakdown</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Ribosomes</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• Protein synthesis</li>
                                <li>• Free or attached to RER</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Cell Membrane</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• Phospholipid bilayer</li>
                                <li>• Fluid Mosaic Model (Singer & Nicolson, 1972)</li>
                                <li>• Selective permeability</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Cell Wall</strong> (Plants/Fungi/Bacteria)
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• Structural support & protection</li>
                                <li>• Plant: Cellulose; Fungi: Chitin</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Cytoskeleton</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>• Microtubules, Micro
`;

DIAGRAMS_DB["biology__biology-diseases"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center;">
    Health, Diseases & Nutrition
  </div>
  <!-- Diagram Container -->
  <div style="position:relative; padding:20px;">
    <svg width="1200" height="900" viewBox="0 0 1200 900" style="background:#0f1117;" xmlns="http://www.w3.org/2000/svg">
      <!-- Definitions for arrows -->
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#e2e8f0"/>
        </marker>
      </defs>

      <!-- Human Silhouette (simplified) -->
      <g id="human" transform="translate(600,300)">
        <ellipse cx="0" cy="-80" rx="80" ry="90" fill="none" stroke="#60a5fa" stroke-width="3"/>
        <rect x="-60" y="-80" width="120" height="260" fill="none" stroke="#60a5fa" stroke-width="3"/>
        <line x1="-60" y1="180" x2="-100" y2="260" stroke="#60a5fa" stroke-width="3"/>
        <line x1="60" y1="180" x2="100" y2="260" stroke="#60a5fa" stroke-width="3"/>
        <!-- Labels for major systems -->
        <text x="0" y="-120" text-anchor="middle" fill="#e2e8f0" font-size="16">Skin (Barrier)</text>
        <text x="-80" y="0" text-anchor="middle" fill="#e2e8f0" font-size="14">Lungs</text>
        <text x="80" y="0" text-anchor="middle" fill="#e2e8f0" font-size="14">GIT</text>
        <text x="0" y="220" text-anchor="middle" fill="#e2e8f0" font-size="14">Blood</text>
        <text x="0" y="260" text-anchor="middle" fill="#e2e8f0" font-size="14">Lymph Nodes</text>
      </g>

      <!-- Pathogen Classification Boxes -->
      <!-- Bacteria -->
      <rect x="100" y="100" width="180" height="120" fill="rgba(74,222,128,0.15)" stroke="#4ade80" stroke-width="2"/>
      <text x="190" y="130" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">Bacteria</text>
      <text x="190" y="155" text-anchor="middle" fill="#e2e8f0" font-size="14">Mycobacterium tuberculosis</text>
      <text x="190" y="175" text-anchor="middle" fill="#e2e8f0" font-size="14">Streptococcus pneumoniae</text>
      <!-- Virus -->
      <rect x="920" y="100" width="180" height="120" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" stroke-width="2"/>
      <text x="1010" y="130" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">Virus</text>
      <text x="1010" y="155" text-anchor="middle" fill="#e2e8f0" font-size="14">Influenza A</text>
      <text x="1010" y="175" text-anchor="middle" fill="#e2e8f0" font-size="14">SARS‑CoV‑2</text>
      <!-- Fungi -->
      <rect x="100" y="660" width="180" height="100" fill="rgba(74,222,128,0.15)" stroke="#4ade80" stroke-width="2"/>
      <text x="190" y="690" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">Fungi</text>
      <text x="190" y="715" text-anchor="middle" fill="#e2e8f0" font-size="14">Candida albicans</text>
      <!-- Protozoa -->
      <rect x="920" y="660" width="180" height="100" fill="rgba(96,165,250,0.15)" stroke="#60a5fa" stroke-width="2"/>
      <text x="1010" y="690" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">Protozoa</text>
      <text x="1010" y="715" text-anchor="middle" fill="#e2e8f0" font-size="14">Plasmodium falciparum</text>

      <!-- Arrows from Pathogen Boxes to Entry Points -->
      <line x1="280" y1="160" x2="520" y2="120" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="920" y1="160" x2="680" y2="120" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="280" y1="710" x2="520" y2="560" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="920" y1="710" x2="680" y2="560" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

      <!-- Immunity Cycle (clockwise) -->
      <g id="immunity-cycle" transform="translate(600,540)">
        <!-- Circle -->
        <circle cx="0" cy="0" r="140" fill="none" stroke="#4ade80" stroke-width="2"/>
        <!-- Segments -->
        <path d="M0,-140 A140,140 0 0,1 124,-70 L0,0 Z" fill="rgba(74,222,128,0.2)"/>
        <path d="M124,-70 A140,140 0 0,1 124,70 L0,0 Z" fill="rgba(96,165,250,0.2)"/>
        <path d="M124,70 A140,140 0 0,1 0,140 L0,0 Z" fill="rgba(74,222,128,0.2)"/>
        <path d="M0,140 A140,140 0 0,1 -124,70 L0,0 Z" fill="rgba(96,165,250,0.2)"/>
        <path d="M-124,70 A140,140 0 0,1 -124,-70 L0,0 Z" fill="rgba(74,222,128,0.2)"/>
        <path d="M-124,-70 A140,140 0 0,1 0,-140 L0,0 Z" fill="rgba(96,165,250,0.2)"/>
        <!-- Labels -->
        <text x="0" y="-150" text-anchor="middle" fill="#e2e8f0" font-size="14">Barrier (Skin, Mucosa)</text>
        <text x="135" y="-80" text-anchor="middle" fill="#e2e8f0" font-size="14">Innate Cells (Neutrophils, Macrophages)</text>
        <text x="135" y="80" text-anchor="middle" fill="#e2e8f0" font-size="14">Antigen Presentation</text>
        <text x="0" y="150" text-anchor="middle" fill="#e2e8f0" font-size="14">Adaptive (B‑cells, T‑cells)</text>
        <text x="-135" y="80" text-anchor="middle" fill="#e2e8f0" font-size="14">Clonal Expansion</text>
        <text x="-135" y="-80" text-anchor="middle" fill="#e2e8f0" font-size="14">Memory & Vaccination</text>
        <!-- Arrow showing cycle direction -->
        <path d="M0,-140 A140,140 0 0,1 0,140" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
      </g>

      <!-- Vaccine Types Box -->
      <rect x="380" y="380" width="440" height="200" fill="rgba(96,165,250,0.1)" stroke="#60a5fa" stroke-width="2"/>
      <text x="600" y="410" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Vaccine Types</text>
      <text x="420" y="440" fill="#e2e8f0" font-size="14"><tspan font-weight="bold">Live Attenuated:</tspan> BCG, Measles</text>
      <text x="420" y="470" fill="#e2e8f0" font-size="14"><tspan font-weight="bold">Inactivated (Killed):</tspan> Polio IPV, Hepatitis A</text>
      <text x="420" y="500" fill="#e2e8f0" font-size="14"><tspan font-weight="bold">Subunit/Protein:</tspan> Hepatitis B, HPV</text>
      <text x="420" y="530" fill="#e2e8f0" font-size="14"><tspan font-weight="bold">Toxoid:</tspan> DPT, Tetanus</text>
      <text x="420" y="560" fill="#e2e8f0" font-size="14"><tspan font-weight="bold">Conjugate:</tspan> Hib, Pneumococcal</text>

      <!-- Real Formula -->
      <text x="600" y="720" text-anchor="middle" fill="#e2e8f0" font-size="16">Basic Reproduction Number: R₀ = β × c × D</text>
      <text x="600" y="750" text-anchor="middle" fill="#e2e8f0" font-size="14">β = transmission probability per contact</text>
      <text x="600" y="770" text-anchor="middle" fill="#e2e8f0" font-size="14">c = average contacts per day</text>
      <text x="600" y="790" text-anchor="middle" fill="#e2e8f0" font-size="14">D = infectious period (days)</text>

      <!-- Legal Reference -->
      <text x="600" y="830" text-anchor="middle" fill="#e2e8f0" font-size="14">Epidemic Diseases Act, 1897 – Sec. 2: Power to take special measures</text>
    </svg>
  </div>
</div>
`;

DIAGRAMS_DB["biology__biology-botany"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <div style="background:#4ade80; color:#0f1117; text-align:center; font-size:24px; font-weight:bold; padding:10px 0; margin-bottom:20px; border-radius:6px;">
    Plant Physiology &amp; Reproduction
  </div>
  <svg width="1200" height="800" viewBox="0 0 1200 800" style="background:#0f1117; overflow:visible;">
    <!-- Definitions for arrows -->
    <defs>
      <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 z" fill="#4ade80"/>
      </marker>
      <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,10 L10,5 z" fill="#60a5fa"/>
      </marker>
    </defs>

    <!-- Flower Anatomy -->
    <g id="flower" transform="translate(200,200)">
      <!-- Sepals -->
      <ellipse cx="0" cy="0" rx="140" ry="80" fill="none" stroke="#e2e8f0" stroke-width="2"/>
      <text x="-130" y="-10" font-size="14" fill="#e2e8f0">Sepals</text>
      <!-- Petals -->
      <ellipse cx="0" cy="0" rx="110" ry="60" fill="none" stroke="#4ade80" stroke-width="2"/>
      <text x="-100" y="-5" font-size="14" fill="#4ade80">Petals</text>
      <!-- Stamens -->
      <g id="stamens">
        <circle cx="-40" cy="-30" r="8" fill="#60a5fa"/>
        <line x1="-40" y1="-22" x2="-40" y2="-5" stroke="#60a5fa" stroke-width="2"/>
        <circle cx="40" cy="-30" r="8" fill="#60a5fa"/>
        <line x1="40" y1="-22" x2="40" y2="-5" stroke="#60a5fa" stroke-width="2"/>
        <circle cx="-40" cy="30" r="8" fill="#60a5fa"/>
        <line x1="-40" y1="22" x2="-40" y2="5" stroke="#60a5fa" stroke-width="2"/>
        <circle cx="40" cy="30" r="8" fill="#60a5fa"/>
        <line x1="40" y1="22" x2="40" y2="5" stroke="#60a5fa" stroke-width="2"/>
        <text x="-80" y="-35" font-size="12" fill="#60a5fa">Stamens (Anther)</text>
        <text x="45" y="-35" font-size="12" fill="#60a5fa">Pollen ~30 µm</text>
      </g>
      <!-- Pistil -->
      <g id="pistil">
        <circle cx="0" cy="0" r="12" fill="#4ade80"/>
        <line x1="0" y1="-12" x2="0" y2="-30" stroke="#4ade80" stroke-width="2"/>
        <text x="-10" y="-40" font-size="12" fill="#4ade80">Stigma</text>
        <line x1="0" y1="12" x2="0" y2="30" stroke="#4ade80" stroke-width="2"/>
        <text x="-10" y="45" font-size="12" fill="#4ade80">Ovary</text>
        <text x="-30" y="5" font-size="14" fill="#4ade80">Pistil (Carpel)</text>
      </g>
    </g>

    <!-- Pollination Arrow -->
    <line x1="260" y1="140" x2="260" y2="80" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <text x="265" y="110" font-size="12" fill="#4ade80" transform="rotate(-45 265,110)">Pollination</text>

    <!-- Fertilization Arrow -->
    <line x1="260" y1="260" x2="260" y2="320" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <text x="265" y="290" font-size="12" fill="#4ade80">Fertilization</text>

    <!-- Double Fertilization Note -->
    <text x="280" y="340" font-size="12" fill="#e2e8f0">
      • 1 Zygote (2n) → Embryo<br/>
      • 2 Polar Nuclei + 1 Male Nucleus → Triploid Endosperm (3n)
    </text>

    <!-- Seed Development Box -->
    <rect x="380" y="300" width="200" height="120" fill="none" stroke="#60a5fa" stroke-width="2"/>
    <text x="390" y="320" font-size="14" fill="#60a5fa">Seed Development</text>
    <text x="390" y="340" font-size="12" fill="#e2e8f0">
      • Embryo (2n)<br/>
      • Endosperm (3n)<br/>
      • Seed coat (maternal)
    </text>

    <!-- Arrow to Seed -->
    <line x1="460" y1="420" x2="460" y2="470" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <text x="470" y="445" font-size="12" fill="#60a5fa">Maturation</text>

    <!-- Classification Section -->
    <g id="classification" transform="translate(650,50)">
      <rect x="0" y="0" width="500" height="300" fill="none" stroke="#e2e8f0" stroke-width="2" rx="8"/>
      <text x="250" y="30" font-size="18" fill="#e2e8f0" text-anchor="middle">Reproduction Types</text>
      <!-- Sexual -->
      <rect x="20" y="60" width="220" height="200" fill="none" stroke="#4ade80" stroke-width="2" rx="6"/>
      <text x="130" y="80" font-size="16" fill="#4ade80" text-anchor="middle">Sexual</text>
      <text x="30" y="100" font-size="12" fill="#e2e8f0">• Flowers (Angiosperms)</text>
      <text x="30" y="120" font-size="12" fill="#e2e8f0">• Cones (Gymnosperms)</text>
      <text x="30" y="140" font-size="12" fill="#e2e8f0">• Double fertilization</text>
      <text x="30" y="160" font-size="12" fill="#e2e8f0">• Pollen size ≈30 µm</text>
      <!-- Asexual -->
      <rect x="260" y="60" width="220" height="200" fill="none" stroke="#60a5fa" stroke-width="2" rx="6"/>
      <text x="370" y="80" font-size="16" fill="#60a5fa" text-anchor="middle">Asexual</text>
      <text x="270" y="100" font-size="12" fill="#e2e8f0">• Vegetative propagation</text>
      <text x="270" y="120" font-size="12" fill="#e2e8f0">   – Tubers (e.g., Potato)</text>
      <text x="270" y="140" font-size="12" fill="#e2e8f0">   – Runners (e.g., Strawberry)</text>
      <text x="270" y="160" font-size="12" fill="#e2e8f0">   – Cuttings</text>
      <text x="270" y="180" font-size="12" fill="#e2e8f0">• Hormone: Auxin (IAA) – C16H18NO3</text>
    </g>

    <!-- Hormones Section -->
    <g id="hormones" transform="translate(650,380)">
      <rect x="0" y="0" width="500" height="300" fill="none" stroke="#e2e8f0" stroke-width="2" rx="8"/>
      <text x="250" y="30" font-size="18" fill="#e2e8f0" text-anchor="middle">Key Plant Hormones</text>
      <!-- Auxin -->
      <text x="30" y="70" font-size="14" fill="#4ade80">Auxin (IAA)</text>
      <text x="30" y="90" font-size="12" fill="#e2e8f0">Formula: C16H18NO3</text>
      <text x="30" y="110" font-size="12" fill="#e2e8f0">Functions: Cell elongation, apical dominance, root initiation</text>
      <!-- Gibberellin -->
      <text x="30" y="140" font-size="14" fill="#60a5fa">Gibberellin (GA₃)</text>
      <text x="30" y="160" font-size="12" fill="#e2e8f0">Formula: C19H22O6</text>
      <text x="30" y="180" font-size="12" fill="#e2e8f0">Functions: Stem elongation, seed germination, breaking dormancy</text>
      <!-- Cytokinin -->
      <text x="30" y="210" font-size="14" fill="#4ade80">Cytokinin (Zeatin)</text>
      <text x="30" y="230" font-size="12" fill="#e2e8f0">Formula: C10H13N5O5</text>
      <text x="30" y="250" font-size="12" fill="#e2e8f0">Functions: Cell division, shoot initiation, delay senescence</text>
      <!-- Abscisic Acid -->
      <text x="260" y="70" font-size="14" fill="#60a5fa">Abscisic Acid (ABA)</text>
      <text x="260" y="90" font-size="12" fill="#e2e8f0">Formula: C15H20O4</text>
      <text x="260" y="110" font-size="12" fill="#e2e8f0">Functions: Stomatal closure, seed dormancy, stress response</text>
      <!-- Ethylene -->
      <text x="260" y="140" font-size="14" fill="#4ade80">Ethylene (C₂H₄)</text>
      <text x="260" y="160" font-size="12" fill="#e2e8f0">Functions: Fruit ripening, leaf abscission, flower senescence</text>
    </g>

    <!-- Alternation of Generations Cycle -->
    <g id="cycle" transform="translate(100,550)">
      <circle cx="200" cy="100" r="80" fill="none" stroke="#e2e8f0" stroke-width="2"/>
      <text x="200" y="70" font-size="14" fill="#e2e8f0" text-anchor="middle">Sporophyte (2n)</text>
      <line x1="200" y1="20" x2="200" y2="0" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <text x="210" y="10" font-size="12" fill="#4ade80">Meiosis</text>

      <circle cx="340" cy="200" r="80" fill="none" stroke="#e2e8f0" stroke-width="2"/>
      <text x="340" y="170" font-size="14" fill="#e2e8f0" text-anchor="middle">Spores (n)</text>
      <line x1="280" y1="200" x2="260" y2="200" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <text x="260" y="190" font-size="12" fill="#4ade80">Germination</text>

      <circle cx="200" cy="300" r="80" fill="none" stroke="#e2e8f0" stroke-width="2"/>
      <text x="200" y="270" font-size="14" fill="#e2e8f0" text-anchor="middle">Gametophyte (n)</text>
      <line x1="200" y1="380" x2="200" y2="400" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <text x="210" y="390" font-size="12" fill="#4ade80">Mitosis → Gametes</text>

      <circle cx="60" cy="200" r="80" fill="none" stroke="#e2e8f0" stroke-width="2"/>
      <text x="60" y="170" font-size="14" fill="#e2e8f0" text-anchor="middle">Gametes (n)</text>
      <line x1="120" y1="200" x2="140" y2="200" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <text x="140" y="190" font-size="12" fill="#4ade80">Fertilization</text>

      <line x1="140" y1="200" x2="180" y2="200" stroke="#4ade80" stroke-width="2"/>
      <line x1="180" y1="200" x2="200" y2="180" stroke="#4ade80" stroke-width="2"/>
      <line x1="200" y1="180" x2="200" y2="120" stroke="#4ade80" stroke-width="2"/>
      <line x1="200" y1="120" x2="200" y2="20" stroke="#4ade80" stroke-width="2"/>

      <!-- Labels for cycle -->
      <text x="200" y="420" font-size="12" fill="#e2e8f0" text-anchor="middle">Zygote → Sporophyte (2n)</text>
    </g>

  </svg>
</div>
`;

DIAGRAMS_DB["military-aptitude__defence-structures"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#0f1117; padding:12px 20px; border-bottom:1px solid rgba(255,255,255,0.12); text-align:center; font-size:24px; color:#4ade80; font-weight:bold;">
    Command Structures &amp; Ranks
  </div>

  <!-- Hierarchy Diagram -->
  <div style="position:relative; margin-top:30px; display:flex; justify-content:space-around; flex-wrap:wrap; gap:40px;">
    
    <!-- Equivalent Officer Ranks (Tri‑Services) -->
    <div style="flex:1; min-width:280px; max-width:320px;">
      <div style="background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; text-align:center; font-weight:bold; color:#4ade80;">
        Equivalent Officer Ranks (Tri‑Services)
      </div>
      <div style="margin-left:20px; border-left:2px solid #60a5fa; padding-left:12px; margin-top:10px;">
        <div style="margin-top:8px;">
          <strong>OF‑1:</strong> Army – Lieutenant | Navy – Sub‑Lieutenant | Air Force – Flying Officer
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑2:</strong> Army – Captain | Navy – Lieutenant | Air Force – Flight Lieutenant
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑3:</strong> Army – Major | Navy – Lieutenant Commander | Air Force – Squadron Leader
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑4:</strong> Army – Lieutenant Colonel | Navy – Commander | Air Force – Wing Commander
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑5:</strong> Army – Colonel | Navy – Captain | Air Force – Group Captain
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑6:</strong> Army – Brigadier | Navy – Commodore | Air Force – Air Commodore
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑7:</strong> Army – Major General | Navy – Rear Admiral | Air Force – Air Vice Marshal
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑8:</strong> Army – Lieutenant General | Navy – Vice Admiral | Air Force – Air Marshal
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑9:</strong> Army – General | Navy – Admiral | Air Force – Air Chief Marshal
        </div>
        <div style="margin-top:8px;">
          <strong>OF‑10 (Only Army):</strong> Field Marshal (awarded only 2 times)
        </div>
      </div>
    </div>

    <!-- Operational Commands of Services -->
    <div style="flex:1; min-width:280px; max-width:320px;">
      <div style="background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; text-align:center; font-weight:bold; color:#4ade80;">
        Operational Commands of Services
      </div>
      <div style="margin-left:20px; border-left:2px solid #60a5fa; padding-left:12px; margin-top:10px;">
        <!-- Army Commands -->
        <div style="margin-top:8px; font-weight:bold; color:#60a5fa;">Indian Army</div>
        <div style="margin-left:12px;">
          <div>Northern Command – HQ: Udhampur (Established 1972)</div>
          <div>Western Command – HQ: Chandimandir (1972)</div>
          <div>Eastern Command – HQ: Kolkata (1972)</div>
          <div>Southern Command – HQ: Chennai (1972)</div>
          <div>Central Command – HQ: Lucknow (1987)</div>
          <div>South Western Command – HQ: Jaipur (2005)</div>
          <div>Army Training Command – HQ: Shimla (1990)</div>
        </div>

        <!-- Navy Commands -->
        <div style="margin-top:12px; font-weight:bold; color:#60a5fa;">Indian Navy</div>
        <div style="margin-left:12px;">
          <div>Western Naval Command – HQ: Mumbai (Established 1968)</div>
          <div>Eastern Naval Command – HQ: Visakhapatnam (1968)</div>
          <div>Southern Naval Command – HQ: Kochi (1985)</div>
        </div>

        <!-- Air Force Commands -->
        <div style="margin-top:12px; font-weight:bold; color:#60a5fa;">Indian Air Force</div>
        <div style="margin-left:12px;">
          <div>Western Air Command – HQ: New Delhi (1975)</div>
          <div>Eastern Air Command – HQ: Shillong (1975)</div>
          <div>Central Air Command – HQ: Allahabad (1980)</div>
          <div>South Western Air Command – HQ: Gandhinagar (1995)</div>
          <div>Southern Air Command – HQ: Thiruvananthapuram (1984)</div>
          <div>Training Command – HQ: Bangalore (1990)</div>
        </div>
      </div>
    </div>

    <!-- Defence Organisations, Weapons & Agreements -->
    <div style="flex:1; min-width:280px; max-width:320px;">
      <div style="background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; text-align:center; font-weight:bold; color:#4ade80;">
        Defence Organisations, Weapons &amp; Agreements
      </div>
      <div style="margin-left:20px; border-left:2px solid #60a5fa; padding-left:12px; margin-top:10px;">
        <!-- Organisations -->
        <div style="margin-top:8px; font-weight:bold; color:#60a5fa;">Organisations</div>
        <div style="margin-left:12px;">
          <div>DRDO – Defence Research & Development Organisation (est. 1958)</div>
          <div>HAL – Hindustan Aeronautics Limited (est. 1940)</div>
          <div>ISRO – Indian Space Research Organisation (est. 1969)</div>
          <div>BARC – Bhabha Atomic Research Centre (est. 1954)</div>
          <div>ADE – Armoured Corps Centre & School (est. 1975)</div>
        </div>

        <!-- Weapons -->
        <div style="margin-top:12px; font-weight:bold; color:#60a5fa;">Key Weapons Systems</div>
        <div style="margin-left:12px;">
          <div>Akash SAM – Range: 30 km, Operational since 2009</div>
          <div>BrahMos Cruise Missile – Speed: Mach 2.8, Range: 400 km</div>
          <div>Arjun MBT – Main‑Battle‑Tank, 120 mm gun, Service entry 2004</div>
          <div>INS Vikramaditya – Aircraft Carrier, commissioned 2013</div>
          <div>LCA Tejas – Light Combat Aircraft, first flight 2003, IOC 2015</div>
        </div>

        <!-- Agreements -->
        <div style="margin-top:12px; font-weight:bold; color:#60a5fa;">International Agreements</div>
        <div style="margin-left:12px;">
          <div>2020 – Logistics Exchange Agreement (LEA) with United States (signed 12 Oct 2020)</div>
          <div>2021 – India‑France Strategic Partnership (defence‑tech co‑development, signed 27 Oct 2021)</div>
          <div>2022 – Quad Joint Naval Exercises (Hawaii, 2022) – India, US, Japan, Australia</div>
          <div>2023 – Defence Procurement Procedure (DPP) 2023 – new procurement rules effective 1 Apr 2023</div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["military-aptitude__tactical-defence-gk"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <div style="background:#0f1117; color:#e2e8f0; padding:12px; font-size:24px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.12); text-align:center;">
    Exercises & Missile Systems
  </div>
  <div style="padding:30px;">
    <div style="display:flex; flex-direction:column; align-items:center;">
      <!-- Central Chapter Node -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 24px; border-radius:8px; font-weight:bold; box-shadow:0 0 8px rgba(0,0,0,0.5);">
        Chapter: Exercises & Missile Systems
      </div>
      <div style="width:2px; background:rgba(255,255,255,0.12); height:30px; margin:10px 0;"></div>
      <!-- Branches -->
      <div style="display:flex; justify-content:center; gap:120px; margin-top:20px;">
        <!-- Left Column: Joint Military Exercises -->
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="background:#60a5fa; color:#0f1117; padding:10px 20px; border-radius:6px; font-weight:bold; box-shadow:0 0 6px rgba(0,0,0,0.4);">
            Joint Military Exercises
          </div>
          <div style="width:2px; background:rgba(255,255,255,0.12); height:20px; margin:8px 0;"></div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:14px;">
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>MALABAR 2023</strong><br/>India‑USA<br/>13‑20 Mar 2023<br/>Naval drills, anti‑submarine warfare
            </div>
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>YUDH ABHYAS 2022</strong><br/>India‑USA<br/>Oct 2022<br/>Joint army training, counter‑terrorism
            </div>
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>INDRA 2023</strong><br/>India‑Russia<br/>Oct 2023<br/>Air‑force & navy exercises
            </div>
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>VAJRA SHAKTI 2021</strong><br/>India‑France<br/>Oct 2021<br/>Joint air‑ground drills
            </div>
          </div>
        </div>
        <!-- Right Column: IGMDP -->
        <div style="display:flex; flex-direction:column; align-items:center;">
          <div style="background:#60a5fa; color:#0f1117; padding:10px 20px; border-radius:6px; font-weight:bold; box-shadow:0 0 6px rgba(0,0,0,0.4);">
            Integrated Guided Missile Development Programme (IGMDP)
          </div>
          <div style="width:2px; background:rgba(255,255,255,0.12); height:20px; margin:8px 0;"></div>
          <div style="display:flex; flex-direction:column; align-items:center; gap:14px;">
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>Prithvi (MR)</strong><br/>Range: 150‑350 km<br/>First test: 1988<br/>Tactical battlefield missile
            </div>
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>Agni‑V</strong><br/>Range: >5,000 km<br/>First test: 2012<br/>IRBM, nuclear deterrent
            </div>
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>Akash</strong><br/>Range: 30 km<br/>First test: 2004<br/>Medium‑range SAM
            </div>
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>Nag (ATGM)</strong><br/>Range: 4‑7 km<br/>First test: 1999<br/>Anti‑tank guided missile
            </div>
            <div style="background:#4ade80; color:#0f1117; padding:8px 14px; border-radius:5px; text-align:center; box-shadow:0 0 4px rgba(0,0,0,0.3);">
              <strong>BrahMos (Supersonic Cruise)</strong><br/>Range: 290 km (up to 400 km)<br/>First test: 2001<br/>Indo‑Russian joint project
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["military-aptitude__reasoning-oir"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:20px; position:relative;">
    <!-- Title Bar -->
    <div style="text-align:center; margin-bottom:30px;">
      <div style="display:inline-block; background:#4ade80; color:#0f1117; padding:8px 16px; font-weight:bold; border-radius:4px; font-size:1.2em;">
        Reasoning &amp; OIR (SSB)
      </div>
    </div>
    <!-- Connecting Lines (SVG) -->
    <svg width="100%" height="300" style="position:absolute; top:0; left:0; pointer-events:none;">
      <line x1="50%" y1="80" x2="25%" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <line x1="50%" y1="80" x2="75%" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      <line x1="50%" y1="80" x2="50%" y2="180" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
    </svg>
    <!-- Branch Boxes -->
    <div style="display:flex; justify-content:space-around; margin-top:140px; flex-wrap:wrap; gap:20px;">
      <!-- Verbal Reasoning -->
      <div style="background:#60a5fa; padding:16px; border-radius:8px; width:30%; min-width:260px; box-shadow:0 2px 6px rgba(0,0,0,0.5);">
        <h3 style="margin:0 0 10px; color:#0f1117; font-size:1.1em;">Verbal Reasoning &amp; OIR</h3>
        <ul style="margin:0; padding-left:20px; color:#e2e8f0; line-height:1.5;">
          <li>Syllogism (2 premises → conclusion)</li>
          <li>Analogy (A : B :: C : D)</li>
          <li>Logical Deduction (If P→Q, P true ⇒ Q true)</li>
          <li>Coding‑Decoding (1→A, 2→B, …)</li>
          <li>Data Sufficiency (e.g., “Is X > Y?”)</li>
          <li>OIR pattern: “Apple, Banana, ___, Date” → Cherry</li>
        </ul>
      </div>
      <!-- Non‑Verbal Reasoning -->
      <div style="background:#4ade80; padding:16px; border-radius:8px; width:30%; min-width:260px; box-shadow:0 2px 6px rgba(0,0,0,0.5);">
        <h3 style="margin:0 0 10px; color:#0f1117; font-size:1.1em;">Non‑Verbal Reasoning &amp; OIR</h3>
        <ul style="margin:0; padding-left:20px; color:#e2e8f0; line-height:1.5;">
          <li>Figure Series (2, 6, 12, 20 → n² + n)</li>
          <li>Mirror Image (horizontal/vertical)</li>
          <li>Paper Folding (fold‑unfold)</li>
          <li>Matrix Reasoning (Raven’s Progressive Matrices)</li>
          <li>Odd‑One‑Out (3, 7, 11, 14 → 14)</li>
          <li>OIR: “Select the figure that completes the sequence”</li>
        </ul>
      </div>
      <!-- Spatial & Non‑Verbal (AFCAT) -->
      <div style="background:#60a5fa; padding:16px; border-radius:8px; width:30%; min-width:260px; box-shadow:0 2px 6px rgba(0,0,0,0.5);">
        <h3 style="margin:0 0 10px; color:#0f1117; font-size:1.1em;">Spatial &amp; Non‑Verbal (AFCAT)</h3>
        <ul style="margin:0; padding-left:20px; color:#e2e8f0; line-height:1.5;">
          <li>3D Rotation (Angle = 360° / n)</li>
          <li>Cube Visualization (front‑right‑top orientation)</li>
          <li>Map Reading (scale 1:250 000)</li>
          <li>Pattern Recognition (next shape prediction)</li>
          <li>Formula: Volume of cylinder V = πr²h</li>
          <li>OIR in AFCAT: “Identify the figure after 90° rotation”</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["military-aptitude__afcat-nonverbal-reasoning"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0;">
  <div style="background:#0f1117; padding:12px; text-align:center; font-size:24px; font-weight:bold; color:#4ade80; border-bottom:1px solid rgba(255,255,255,0.12);">
    Non-Verbal Reasoning (AFCAT)
  </div>
  <svg width="1200" height="800" style="background:#0f1117;">
    <!-- Root Node -->
    <rect x="500" y="20" width="200" height="50" fill="#60a5fa" rx="5"/>
    <text x="600" y="50" fill="#0f1117" font-size="16" text-anchor="middle" font-family="'Segoe UI',sans-serif">Chapter Overview</text>

    <!-- Connecting line from root to subtopics -->
    <line x1="600" y1="70" x2="600" y2="100" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Subtopic 1: Figure Analogy -->
    <rect x="50" y="120" width="180" height="120" fill="#4ade80" rx="5"/>
    <text x="140" y="140" fill="#0f1117" font-size="14" text-anchor="middle" font-family="'Segoe UI',sans-serif">Figure Analogy</text>
    <text x="140" y="160" fill="#0f1117" font-size="12" text-anchor="middle" font-family="'Segoe UI',sans-serif">
      <tspan x="140" dy="0">Typical patterns:</tspan>
      <tspan x="140" dy="16">• Rotation (90°,180°,270°)</tspan>
      <tspan x="140" dy="16">• Mirror (vertical/horizontal)</tspan>
      <tspan x="140" dy="16">• Scaling (×2, ÷2)</tspan>
    </text>
    <line x1="600" y1="100" x2="140" y2="120" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Subtopic 2: Figure Classification & Series -->
    <rect x="210" y="120" width="180" height="120" fill="#4ade80" rx="5"/>
    <text x="300" y="140" fill="#0f1117" font-size="14" text-anchor="middle" font-family="'Segoe UI',sans-serif">Classification & Series</text>
    <text x="300" y="160" fill="#0f1117" font-size="12" text-anchor="middle" font-family="'Segoe UI',sans-serif">
      <tspan x="300" dy="0">Key rules:</tspan>
      <tspan x="300" dy="16">• Odd/Even count</tspan>
      <tspan x="300" dy="16">• Increment/Decrement</tspan>
      <tspan x="300" dy="16">• Alternating pattern</tspan>
    </text>
    <line x1="600" y1="100" x2="300" y2="120" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Subtopic 3: Figure/Pattern Completion -->
    <rect x="370" y="120" width="180" height="120" fill="#4ade80" rx="5"/>
    <text x="460" y="140" fill="#0f1117" font-size="14" text-anchor="middle" font-family="'Segoe UI',sans-serif">Pattern Completion</text>
    <text x="460" y="160" fill="#0f1117" font-size="12" text-anchor="middle" font-family="'Segoe UI',sans-serif">
      <tspan x="460" dy="0">Common grids:</tspan>
      <tspan x="460" dy="16">• 2×2, 3×3, 4×4 matrices</tspan>
      <tspan x="460" dy="16">• Missing element logic</tspan>
      <tspan x="460" dy="16">• Sum/Difference rule</tspan>
    </text>
    <line x1="600" y1="100" x2="460" y2="120" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Subtopic 4: Embedded Figures -->
    <rect x="530" y="120" width="180" height="120" fill="#4ade80" rx="5"/>
    <text x="620" y="140" fill="#0f1117" font-size="14" text-anchor="middle" font-family="'Segoe UI',sans-serif">Embedded Figures</text>
    <text x="620" y="160" fill="#0f1117" font-size="12" text-anchor="middle" font-family="'Segoe UI',sans-serif">
      <tspan x="620" dy="0">Approach:</tspan>
      <tspan x="620" dy="16">• Identify hidden shape</tspan>
      <tspan x="620" dy="16">• Use overlay technique</tspan>
      <tspan x="620" dy="16">• Typical count: 6–8 Qs</tspan>
    </text>
    <line x1="600" y1="100" x2="620" y2="120" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Subtopic 5: Dot Situation -->
    <rect x="690" y="120" width="180" height="120" fill="#4ade80" rx="5"/>
    <text x="780" y="140" fill="#0f1117" font-size="14" text-anchor="middle" font-family="'Segoe UI',sans-serif">Dot Situation</text>
    <text x="780" y="160" fill="#0f1117" font-size="12" text-anchor="middle" font-family="'Segoe UI',sans-serif">
      <tspan x="780" dy="0">Patterns:</tspan>
      <tspan x="780" dy="16">• Rotation, Translation</tspan>
      <tspan x="780" dy="16">• Mirror symmetry</tspan>
      <tspan x="780" dy="16">• Incremental steps</tspan>
    </text>
    <line x1="600" y1="100" x2="780" y2="120" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Subtopic 6: Cube and Dice -->
    <rect x="850" y="120" width="180" height="120" fill="#4ade80" rx="5"/>
    <text x="940" y="140" fill="#0f1117" font-size="14" text-anchor="middle" font-family="'Segoe UI',sans-serif">Cube & Dice</text>
    <text x="940" y="160" fill="#0f1117" font-size="12" text-anchor="middle" font-family="'Segoe UI',sans-serif">
      <tspan x="940" dy="0">Key concepts:</tspan>
      <tspan x="940" dy="16">• 3‑D rotation (X/Y/Z axis)</tspan>
      <tspan x="940" dy="16">• Net unfolding</tspan>
      <tspan x="940" dy="16">• Dice number patterns</tspan>
    </text>
    <line x1="600" y1="100" x2="940" y2="120" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Subtopic 7: Figure Coding -->
    <rect x="1010" y="120" width="180" height="120" fill="#4ade80" rx="5"/>
    <text x="1100" y="140" fill="#0f1117" font-size="14" text-anchor="middle" font-family="'Segoe UI',sans-serif">Figure Coding</text>
    <text x="1100" y="160" fill="#0f1117" font-size="12" text-anchor="middle" font-family="'Segoe UI',sans-serif">
      <tspan x="1100" dy="0">Typical codes:</tspan>
      <tspan x="1100" dy="16">• Binary (0/1)</tspan>
      <tspan x="1100" dy="16">• Alphanumeric (A‑Z, 0‑9)</tspan>
      <tspan x="1100" dy="16">• Pattern → Code mapping</tspan>
    </text>
    <line x1="600" y1="100" x2="1100" y2="120" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Footer note -->
    <text x="600" y="260" fill="#e2e8f0" font-size="14" text-anchor="middle" font-family="'Segoe UI',sans-serif">
      AFCAT Non‑Verbal Section: 20 questions • 10 minutes • 30 % of total marks
    </text>
  </svg>
</div>
`;

DIAGRAMS_DB["current-affairs__reports-awards-judgments"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px; box-sizing:border-box;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; text-align:center; font-size:24px; font-weight:bold; padding:12px 0; margin-bottom:20px; border-radius:6px;">
    Reports, Awards & Judgments
  </div>

  <!-- Diagram Container -->
  <div style="position:relative; width:100%; min-height:900px; background:#0f1117;">
    <!-- SVG for connectors -->
    <svg width="100%" height="900" style="position:absolute; top:0; left:0; pointer-events:none;">
      <!-- Central to Topics -->
      <line x1="50%" y1="45%" x2="20%" y2="20%" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="80%" y2="20%" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="20%" y2="80%" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="80%" y2="80%" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="50%" y2="10%" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <line x1="50%" y1="45%" x2="50%" y2="75%" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
    </svg>

    <!-- Central Node -->
    <div style="
        position:absolute;
        top:45%;
        left:50%;
        transform:translate(-50%,-50%);
        width:140px;
        height:140px;
        background:#60a5fa;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        font-weight:bold;
        font-size:16px;
        padding:10px;
        box-shadow:0 0 12px rgba(96,165,250,0.6);
        border:2px solid rgba(255,255,255,0.12);
      ">
      Chapter Overview
    </div>

    <!-- Topic Boxes -->
    <!-- 1. Important Reports & Indices -->
    <div style="
        position:absolute;
        top:20%;
        left:20%;
        transform:translate(-50%,-50%);
        width:260px;
        background:#4ade80;
        border-radius:8px;
        padding:12px;
        box-shadow:0 0 8px rgba(74,222,128,0.6);
        border:1px solid rgba(255,255,255,0.12);
      ">
      <div style="font-weight:bold; margin-bottom:6px;">Important Reports & Indices</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>World Bank – World Development Indicators (2023)</li>
        <li>IMF – World Economic Outlook, Apr 2024</li>
        <li>NITI Aayog – Index of Overall Development (2022‑23)</li>
        <li>UNDP – Human Development Report 2023‑24</li>
        <li>Global Innovation Index 2023 (Switzerland rank 1)</li>
      </ul>
    </div>

    <!-- 2. Landmark SC & HC Judgments -->
    <div style="
        position:absolute;
        top:20%;
        left:80%;
        transform:translate(-50%,-50%);
        width:260px;
        background:#4ade80;
        border-radius:8px;
        padding:12px;
        box-shadow:0 0 8px rgba(74,222,128,0.6);
        border:1px solid rgba(255,255,255,0.12);
      ">
      <div style="font-weight:bold; margin-bottom:6px;">Landmark SC & HC Judgments</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Navtej Singh Johar v. Union of India (2018) – LGBTQ rights</li>
        <li>Justice K.S. Puttaswamy v. Union of India (2017) – Right to Privacy</li>
        <li>Ayodhya Verdict (2019) – 16 Nov 2019</li>
        <li>Vaccine‑Related HC Orders – Tamil Nadu HC (2021) on COVID‑19 vaccine distribution</li>
        <li>Supreme Court – Sabarimala Entry (2018) – Gender Equality</li>
      </ul>
    </div>

    <!-- 3. National Awards & Honours -->
    <div style="
        position:absolute;
        top:80%;
        left:20%;
        transform:translate(-50%,-50%);
        width:260px;
        background:#4ade80;
        border-radius:8px;
        padding:12px;
        box-shadow:0 0 8px rgba(74,222,128,0.6);
        border:1px solid rgba(255,255,255,0.12);
      ">
      <div style="font-weight:bold; margin-bottom:6px;">National Awards & Honours</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Padma Vibhushan – 2023 (e.g., Dr Madhuri Mukherjee)</li>
        <li>Padma Bhushan – 2024 (e.g., Dr Rohini Sanjay)</li>
        <li>Padma Shri – 2023 (44 recipients)</li>
        <li>Arjuna Award – 2023 (71 sportspersons)</li>
        <li>Gallantry – Param Vir Chakra (post‑humous 2022)</li>
      </ul>
    </div>

    <!-- 4. Economic Measures & Policy Packages -->
    <div style="
        position:absolute;
        top:80%;
        left:80%;
        transform:translate(-50%,-50%);
        width:260px;
        background:#4ade80;
        border-radius:8px;
        padding:12px;
        box-shadow:0 0 8px rgba(74,222,128,0.6);
        border:1px solid rgba(255,255,255,0.12);
      ">
      <div style="font-weight:bold; margin-bottom:6px;">Economic Measures & Policy Packages</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Atmanirbhar Bharat Package – ₹20 lakh crore (May 2020)</li>
        <li>PM Gati Shakti National Master‑Plan – launched 15 Oct 2021</li>
        <li>Fiscal Deficit 2023‑24 – 5.5 % of GDP (≈₹30 lakh crore)</li>
        <li>Rural Employment Guarantee – 100 days of work (2022‑23)</li>
        <li>PLI Scheme – 13 sectors, ₹1.97 lakh crore (2022‑27)</li>
      </ul>
    </div>

    <!-- 5. Science, Tech & Space Missions -->
    <div style="
        position:absolute;
        top:55%;
        left:10%;
        transform:translate(-50%,-50%);
        width:260px;
        background:#4ade80;
        border-radius:8px;
        padding:12px;
        box-shadow:0 0 8px rgba(74,222,128,0.6);
        border:1px solid rgba(255,255,255,0.12);
      ">
      <div style="font-weight:bold; margin-bottom:6px;">Science, Tech & Space Missions</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Chandrayaan‑3 – 23 Aug 2023 (soft‑landing)</li>
        <li>Gaganyaan – First crewed flight targeted 2024‑25</li>
        <li>ISRO‑PSLV‑C55 – 22 Sept 2023 (NASA‑LAUNCH‑1)</li>
        <li>National AI Strategy – released 30 Mar 2023</li>
        <li>India‑US Defense Technology Co‑operation Agreement 2022</li>
      </ul>
    </div>

    <!-- 6. UPSC Core Current Affairs Syllabus Map -->
    <div style="
        position:absolute;
        top:55%;
        left:90%;
        transform:translate(-50%,-50%);
        width:260px;
        background:#4ade80;
        border-radius:8px;
        padding:12px;
        box-shadow:0 0 8px rgba(74,222,128,0.6);
        border:1px solid rgba(255,255,255,0.12);
      ">
      <div style="font-weight:bold; margin-bottom:6px;">UPSC Core Current Affairs Syllabus</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>International Relations – UN, SAARC, BIMSTEC</li>
        <li>Economic Development – Fiscal Policy, Monetary Policy</li>
        <li>Science & Technology – Space, AI, Biotechnology</li>
        <li>Social Justice – Welfare Schemes, Gender Issues</li>
        <li>Governance – Reports of CAG, NITI Aayog, RBI</li>
      </ul>
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["environment__biodiversity-conservation"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:10px;">
  <div style="background:#4ade80; color:#0f1117; padding:12px; text-align:center; font-size:22px; font-weight:bold; border-radius:6px; margin-bottom:12px;">
    Biodiversity &amp; Wildlife Conservation
  </div>
  <svg width="1200" height="800" viewBox="0 0 1200 800" style="background:#0f1117;">
    <!-- Arrow marker definition -->
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#e2e8f0"/>
      </marker>
    </defs>

    <!-- Central Ecosystem Node -->
    <rect x="540" y="20" width="120" height="50" rx="8" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="50" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Ecosystem</text>

    <!-- Producers -->
    <rect x="540" y="120" width="120" height="50" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="150" text-anchor="middle" fill="#0f1117" font-size="13">Producers<br/>(Plants)</text>
    <line x1="600" y1="70" x2="600" y2="120" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Primary Consumers -->
    <rect x="340" y="250" width="140" height="60" rx="8" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="410" y="285" text-anchor="middle" fill="#0f1117" font-size="13">Primary Consumers<br/>(Deer, Hare)</text>
    <line x1="600" y1="170" x2="410" y2="250" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Secondary Consumers -->
    <rect x="740" y="250" width="140" height="60" rx="8" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="810" y="285" text-anchor="middle" fill="#0f1117" font-size="13">Secondary Consumers<br/>(Leopard, Jackal)</text>
    <line x1="600" y1="170" x2="810" y2="250" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Tertiary Consumers -->
    <rect x="540" y="380" width="120" height="50" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="410" text-anchor="middle" fill="#0f1117" font-size="13">Tertiary Consumers<br/>(Tiger)</text>
    <line x1="410" y1="310" x2="600" y2="380" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="810" y1="310" x2="600" y2="380" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Decomposers -->
    <rect x="840" y="380" width="140" height="60" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="910" y="415" text-anchor="middle" fill="#0f1117" font-size="13">Decomposers<br/>(Fungi, Bacteria)</text>
    <line x1="600" y1="430" x2="910" y2="380" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Environmental Cycles -->
    <rect x="100" y="500" width="180" height="80" rx="8" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="190" y="525" text-anchor="middle" fill="#0f1117" font-size="13">Water Cycle<br/>(Monsoon, River Flow)</text>
    <line x1="600" y1="430" x2="190" y2="500" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <rect x="380" y="500" width="180" height="80" rx="8" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="470" y="525" text-anchor="middle" fill="#0f1117" font-size="13">Nutrient Cycle<br/>(Nitrogen, Phosphorus)</text>
    <line x1="600" y1="430" x2="470" y2="500" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Biodiversity Hotspots -->
    <rect x="20" y="20" width="200" height="120" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="120" y="45" text-anchor="middle" fill="#0f1117" font-size="13" font-weight="bold">Biodiversity Hotspots</text>
    <text x="120" y="70" text-anchor="middle" fill="#0f1117" font-size="12">• Western Ghats (1500+ endemic plants)</text>
    <text x="120" y="90" text-anchor="middle" fill="#0f1117" font-size="12">• Eastern Himalayas</text>
    <text x="120" y="110" text-anchor="middle" fill="#0f1117" font-size="12">• Indo‑Burma, Sundaland</text>
    <line x1="120" y1="140" x2="600" y2="70" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Biosphere Reserves -->
    <rect x="20" y="170" width="200" height="140" rx="8" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="120" y="195" text-anchor="middle" fill="#0f1117" font-size="13" font-weight="bold">Biosphere Reserves</text>
    <text x="120" y="220" text-anchor="middle" fill="#0f1117" font-size="12">• Nilgiri (1990)</text>
    <text x="120" y="240" text-anchor="middle" fill="#0f1117" font-size="12">• Sundarbans (1989)</text>
    <text x="120" y="260" text-anchor="middle" fill="#0f1117" font-size="12">• Nanda Devi (2000)</text>
    <text x="120" y="280" text-anchor="middle" fill="#0f1117" font-size="12">• Gulf of Mannar (2001)</text>
    <line x1="120" y1="310" x2="600" y2="70" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Wildlife Protection Laws -->
    <rect x="20" y="340" width="200" height="180" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="120" y="365" text-anchor="middle" fill="#0f1117" font-size="13" font-weight="bold">Wildlife Protection Laws</text>
    <text x="120" y="390" text-anchor="middle" fill="#0f1117" font-size="12">• Wildlife Protection Act, 1972 (Act 33)</text>
    <text x="120" y="410" text-anchor="middle" fill="#0f1117" font-size="12">• Amendment 2002 – added Schedule I</text>
    <text x="120" y="430" text-anchor="middle" fill="#0f1117" font-size="12">• CITES (1973) – Appendix I, II</text>
    <text x="120" y="450" text-anchor="middle" fill="#0f1117" font-size="12">• National Biodiversity Act, 2002</text>
    <line x1="120" y1="520" x2="600" y2="70" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Conservation Projects -->
    <rect x="20" y="540" width="200" height="200" rx="8" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="120" y="565" text-anchor="middle" fill="#0f1117" font-size="13" font-weight="bold">Conservation Projects</text>
    <text x="120" y="590" text-anchor="middle" fill="#0f1117" font-size="12">• Project Tiger (1991) – 50+ tigers</text>
    <text x="120" y="610" text-anchor="middle" fill="#0f1117" font-size="12">• Project Elephant (1992) – 27,000 elephants</text>
    <text x="120" y="630" text-anchor="middle" fill="#0f1117" font-size="12">• Project Snow Leopard (2009)</text>
    <text x="120" y="650" text-anchor="middle" fill="#0f1117" font-size="12">• Project Ganga (2009) – river health</text>
    <line x1="120" y1="750" x2="600" y2="70" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- IUCN Red List -->
    <rect x="20" y="760" width="200" height="180" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="120" y="785" text-anchor="middle" fill="#0f1117" font-size="13" font-weight="bold">IUCN Red List (India)</text>
    <text x="120" y="810" text-anchor="middle" fill="#0f1117" font-size="12">• Tiger – Endangered</text>
    <text x="120" y="830" text-anchor="middle" fill="#0f1117" font-size="12">• Indian Elephant – Endangered</text>
    <text x="120" y="850" text-anchor="middle" fill="#0f1117" font-size="12">• Gharial – Critically Endangered</text>
    <text x="120" y="870" text-anchor="middle" fill="#0f1117" font-size="12">• Snow Leopard – Vulnerable</text>
    <line x1="120" y1="950" x2="600" y2="70" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Connecting arrows from laws to projects -->
    <line x1="120" y1="530" x2="120" y2="540" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="120" y1="540" x2="120" y2="560" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Legend (optional) -->
    <rect x="1000" y="20" width="180" height="150" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="1090" y="45" fill="#e2e8f0" font-size="14" font-weight="bold">Legend</text>
    <circle cx="1010" cy="70" r="8" fill="#4ade80"/>
    <text x="1030" y="75" fill="#e2e8f0" font-size="13">Hotspots / Red List</text>
    <circle cx="1010" cy="100" r="8" fill="#60a5fa"/>
    <text x="1030" y="105" fill="#e2e8f0" font-size="13">Reserves / Projects</text>
    <rect x="1005" y="120" width="12" height="12" fill="#4ade80"/>
    <text x="1030" y="132" fill="#e2e8f0" font-size="13">Producer / Tertiary</text>
    <rect x="1005" y="140" width="12" height="12" fill="#60a5fa"/>
    <text x="1030" y="152" fill="#e2e8f0" font-size="13">Consumer / Decomposer</text>
  </svg>
</div>
`;

