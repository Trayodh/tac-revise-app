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

    <!-- SubΓÇæboxes under Identities -->
    <!-- 1. Pythagorean Identities -->
    <rect x="140" y="200" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="220" text-anchor="middle" fill="#e2e8f0" font-size="12">sin┬▓╬╕ + cos┬▓╬╕ = 1</text>

    <!-- 2. CoΓÇæfunction Identities -->
    <rect x="140" y="250" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="270" text-anchor="middle" fill="#e2e8f0" font-size="12">sin(90┬░ΓÇæ╬╕)=cos╬╕, cos(90┬░ΓÇæ╬╕)=sin╬╕</text>

    <!-- 3. Sum/Difference Formulas -->
    <rect x="140" y="300" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="320" text-anchor="middle" fill="#e2e8f0" font-size="12">sin(A┬▒B)=sinAcosB┬▒cosAsinB</text>

    <!-- 4. DoubleΓÇæAngle Formulas -->
    <rect x="140" y="350" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="370" text-anchor="middle" fill="#e2e8f0" font-size="12">sin2╬╕=2sin╬╕cos╬╕, cos2╬╕=cos┬▓╬╕ΓÇæsin┬▓╬╕</text>

    <!-- 5. HalfΓÇæAngle Formulas -->
    <rect x="140" y="400" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="420" text-anchor="middle" fill="#e2e8f0" font-size="12">sin┬▓(╬╕/2)=(1ΓÇæcos╬╕)/2, cos┬▓(╬╕/2)=(1+cos╬╕)/2</text>

    <!-- 6. ProductΓÇætoΓÇæSum -->
    <rect x="140" y="450" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="270" y="470" text-anchor="middle" fill="#e2e8f0" font-size="12">sinA sinB =┬╜[cos(AΓÇæB)ΓÇæcos(A+B)]</text>

    <!-- Connecting lines from Identities main box to subΓÇæboxes -->
    <line x1="320" y1="160" x2="270" y2="200" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="250" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="300" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="350" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="400" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="320" y1="160" x2="270" y2="450" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- SubΓÇæboxes under Inverse Functions -->
    <!-- 1. Definition -->
    <rect x="660" y="200" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="790" y="220" text-anchor="middle" fill="#e2e8f0" font-size="12">sinΓü╗┬╣x = ╬╕ Γçö sin╬╕ = x,  ╬╕Γêê[ΓÇæ90┬░,90┬░]</text>

    <!-- 2. Principal Value Ranges -->
    <rect x="660" y="250" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="790" y="270" text-anchor="middle" fill="#e2e8f0" font-size="12">cosΓü╗┬╣x: ╬╕Γêê[0┬░,180┬░]; tanΓü╗┬╣x: ╬╕Γêê[ΓÇæ90┬░,90┬░]</text>

    <!-- 3. Domain & Range -->
    <rect x="660" y="300" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="790" y="320" text-anchor="middle" fill="#e2e8f0" font-size="12">Domain: [ΓÇæ1,1] for sinΓü╗┬╣, cosΓü╗┬╣; Γä¥ for tanΓü╗┬╣</text>

    <!-- 4. Example Evaluation -->
    <rect x="660" y="350" width="260" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="790" y="370" text-anchor="middle" fill="#e2e8f0" font-size="12">sinΓü╗┬╣(┬╜)=30┬░, tanΓü╗┬╣(1)=45┬░</text>

    <!-- Connecting lines from Inverse main box to subΓÇæboxes -->
    <line x1="840" y1="160" x2="790" y2="200" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="840" y1="160" x2="790" y2="250" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="840" y1="160" x2="790" y2="300" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="840" y1="160" x2="790" y2="350" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Problem Solving Flow (right side) -->
    <rect x="460" y="520" width="280" height="40" rx="6" ry="6"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="545" text-anchor="middle" fill="#e2e8f0" font-size="14">ProblemΓÇæSolving Steps</text>

    <!-- Step 1 -->
    <rect x="380" y="580" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="600" text-anchor="middle" fill="#e2e8f0" font-size="12">1∩╕ÅΓâú Identify given & required trig function</text>

    <!-- Arrow -->
    <line x1="600" y1="560" x2="480" y2="580" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Step 2 -->
    <rect x="380" y="630" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="650" text-anchor="middle" fill="#e2e8f0" font-size="12">2∩╕ÅΓâú Choose appropriate identity</text>

    <line x1="480" y1="610" x2="480" y2="630" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Step 3 -->
    <rect x="380" y="680" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="700" text-anchor="middle" fill="#e2e8f0" font-size="12">3∩╕ÅΓâú Transform & simplify</text>

    <line x1="480" y1="660" x2="480" y2="680" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Step 4 -->
    <rect x="380" y="730" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="750" text-anchor="middle" fill="#e2e8f0" font-size="12">4∩╕ÅΓâú Solve for the unknown</text>

    <line x1="480" y1="710" x2="480" y2="730" stroke="#4ade80" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Step 5 -->
    <rect x="380" y="780" width="200" height="30" rx="4" ry="4"
          fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="480" y="800" text-anchor="middle" fill="#e2e8f0" font-size="12">5∩╕ÅΓâú Verify with original equation</text>

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
        <li>Standard form: <span style="color:#4ade80;">ax┬▓+bx+c=0</span></li>
        <li>Discriminant: <span style="color:#4ade80;">╬ö = b┬▓ΓÇæ4ac</span></li>
        <li>Nature of roots:
          <ul style="margin:4px 0;padding-left:15px;">
            <li>╬ö>0 ΓÇô real & distinct</li>
            <li>╬ö=0 ΓÇô real & equal</li>
            <li>╬ö<0 ΓÇô complex conjugate</li>
          </ul>
        </li>
        <li>Sum & product of roots: <span style="color:#60a5fa;">╬▒+╬▓ = -b/a ,ΓÇâ╬▒╬▓ = c/a</span></li>
        <li>Solution methods:
          <ul style="margin:4px 0;padding-left:15px;">
            <li>Factorisation</li>
            <li>Completing the square</li>
            <li>Quadratic formula</li>
            <li>VietaΓÇÖs relations</li>
          </ul>
        </li>
        <li>Typical exam: Find roots of <span style="color:#4ade80;">2x┬▓ΓÇæ5x+2=0</span></li>
      </ul>
    </div>
    <!-- Complex Numbers Block -->
    <div id="cplx" style="position:absolute;right:15%;top:180px;background:#1a1c23;color:#e2e8f0;padding:16px 24px;border:1px solid rgba(255,255,255,0.12);border-radius:8px;width:380px;">
      <strong>Complex Numbers</strong><br>
      <ul style="margin:8px 0;padding-left:20px;font-size:14px;">
        <li>General form: <span style="color:#4ade80;">z = a + bi</span></li>
        <li>Modulus: <span style="color:#60a5fa;">|z| = ΓêÜ(a┬▓+b┬▓)</span></li>
        <li>Argument: <span style="color:#60a5fa;">arg(z)=╬╕ = tanΓü╗┬╣(b/a)</span></li>
        <li>Polar form: <span style="color:#4ade80;">z = r(cos╬╕ + i sin╬╕)</span></li>
        <li>DeΓÇ»MoivreΓÇÖs theorem: <span style="color:#4ade80;">(cos╬╕ + i sin╬╕)Γü┐ = cos(n╬╕)+i sin(n╬╕)</span></li>
        <li>Operations:
          <ul style="margin:4px 0;padding-left:15px;">
            <li>Add/Sub: (a+bi)┬▒(c+di) = (a┬▒c)+(b┬▒d)i</li>
            <li>Mul: (a+bi)(c+di) = (acΓÇæbd)+(ad+bc)i</li>
            <li>Div: (a+bi)/(c+di) = [(ac+bd)+(bcΓÇæad)i]/(c┬▓+d┬▓)</li>
          </ul>
        </li>
        <li>Sample problem: Compute (1+i)Γü╡</li>
      </ul>
    </div>
    <!-- Connecting Arrows (SVG) -->
    <svg width="100%" height="500" style="position:absolute;top:0;left:0;pointer-events:none;">
      <!-- Central ΓåÆ Quadratic -->
      <line x1="1000" y1="60" x2="440" y2="180" stroke="#4ade80" stroke-width="2"/>
      <polygon points="440,180 435,175 435,185" fill="#4ade80"/>
      <!-- Central ΓåÆ Complex -->
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
      StepΓÇ»1: Identify a, b, c
    </div>
    <div style="position:absolute;left:38%;top:340px;background:#60a5fa;color:#0f1117;padding:4px 8px;border-radius:4px;font-size:13px;">
      StepΓÇ»2: Compute ╬ö and decide nature
    </div>
    <!-- Step Labels for Complex -->
    <div style="position:absolute;right:38%;top:300px;background:#60a5fa;color:#0f1117;padding:4px 8px;border-radius:4px;font-size:13px;">
      StepΓÇ»1: Write in a+bi form
    </div>
    <div style="position:absolute;right:38%;top:340px;background:#60a5fa;color:#0f1117;padding:4px 8px;border-radius:4px;font-size:13px;">
      StepΓÇ»2: Find r,ΓÇ»╬╕ ΓåÆ use polar/DeΓÇ»Moivre
    </div>
  </div>
</div>
`;

DIAGRAMS_DB["mathematics__2d-geometry"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif;">
  <div style="background:#0f1117; color:#e2e8f0; padding:12px; text-align:center; font-size:24px; font-weight:bold; border-bottom:1px solid rgba(255,255,255,0.12);">
    Coordinate Geometry (2D & 3D) ΓÇô Straight Lines
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
        <li>SlopeΓÇ»m = (yΓééΓÇæyΓéü)/(xΓééΓÇæxΓéü)</li>
        <li>PointΓÇæslope:ΓÇ»yΓÇæyΓéü = m(xΓÇæxΓéü)</li>
        <li>SlopeΓÇæintercept:ΓÇ»y = mx + c</li>
        <li>TwoΓÇæpoint form:ΓÇ»(yΓÇæyΓéü) = [(yΓééΓÇæyΓéü)/(xΓééΓÇæxΓéü)](xΓÇæxΓéü)</li>
        <li>General form:ΓÇ»Ax + By + C = 0</li>
        <li>Distance from (xΓéÇ,yΓéÇ) toΓÇ»Ax+By+C=0 = |AxΓéÇ+ByΓéÇ+C|/ΓêÜ(A┬▓+B┬▓)</li>
        <li>Angle between lines:ΓÇ»tan╬╕ = |(mΓéüΓÇæmΓéé)/(1+mΓéümΓéé)|</li>
      </ul>
    </div>
    <div id="2d_steps" style="position:absolute; left:20%; top:70%; transform:translate(-50%,0); background:#60a5fa; border:1px solid rgba(255,255,255,0.12); padding:12px 20px; border-radius:8px; color:#0f1117; font-size:14px;">
      <strong>ProblemΓÇæSolving Steps (2D)</strong><br/>
      1. Identify given points / slope.<br/>
      2. Choose appropriate form (pointΓÇæslope, general).<br/>
      3. Substitute values ΓåÆ equation.<br/>
      4. For distance/angle, use formulas above.<br/>
      5. Verify by plugging points.
    </div>
    <!-- 3D Branch -->
    <div id="3d" style="position:absolute; left:80%; top:30%; transform:translate(-50%,0); background:#4ade80; border:1px solid rgba(255,255,255,0.12); padding:12px 20px; border-radius:8px; color:#0f1117;">
      <strong>3D Lines</strong>
    </div>
    <div id="3d_formulas" style="position:absolute; left:80%; top:45%; transform:translate(-50%,0); background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); padding:10px 15px; border-radius:6px; color:#e2e8f0; font-size:14px;">
      <ul style="margin:0; padding-left:18px;">
        <li>Vector form:ΓÇ»r = a + ╬╗b</li>
        <li>Parametric:ΓÇ»x = xΓéü + ╬╗l,ΓÇ»y = yΓéü + ╬╗m,ΓÇ»z = zΓéü + ╬╗n</li>
        <li>Symmetric:ΓÇ»(xΓÇæxΓéü)/l = (yΓÇæyΓéü)/m = (zΓÇæzΓéü)/n</li>
        <li>Direction ratiosΓÇ»(l,m,n)ΓÇ»ΓÇô proportional to direction cosines.</li>
        <li>Angle between lines:ΓÇ»cos╬╕ = (bΓéü┬╖bΓéé)/(|bΓéü||bΓéé|)</li>
        <li>Shortest distance between skew lines:ΓÇ»| (aΓééΓÇæaΓéü)┬╖(bΓéü├ùbΓéé) | / |bΓéü├ùbΓéé|</li>
        <li>Distance from pointΓÇ»P(xΓéÇ,yΓéÇ,zΓéÇ)ΓÇ»to line:ΓÇ»| (AP ├ù b) | / |b|</li>
      </ul>
    </div>
    <div id="3d_steps" style="position:absolute; left:80%; top:70%; transform:translate(-50%,0); background:#60a5fa; border:1px solid rgba(255,255,255,0.12); padding:12px 20px; border-radius:8px; color:#0f1117; font-size:14px;">
      <strong>ProblemΓÇæSolving Steps (3D)</strong><br/>
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
      <!-- Measures of Central Tendency to its subΓÇænodes -->
      <line x1="450" y1="210" x2="450" y2="270" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="450" y1="210" x2="450" y2="350" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="450" y1="210" x2="450" y2="430" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="450" y1="210" x2="450" y2="510" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="450" y1="210" x2="450" y2="590" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Data Interpretation to its subΓÇænodes -->
      <line x1="1550" y1="210" x2="1550" y2="270" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="1550" y1="210" x2="1550" y2="350" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="1550" y1="210" x2="1550" y2="430" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- ProblemΓÇæSolving Flow arrows -->
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

    <!-- SubΓÇænodes ΓÇô Measures -->
    <div style="position:absolute; left:300px; top:260px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#4ade80;">Mean (╬╝)</strong><br>
      <span style="font-size:14px;">╬╝ = ╬úx<sub>i</sub> / n</span>
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
      <strong style="color:#4ade80;">Variance (╧â┬▓)</strong><br>
      <span style="font-size:14px;">╧â┬▓ = ╬ú(x<sub>i</sub>ΓÇô╬╝)┬▓ / n</span>
    </div>
    <div style="position:absolute; left:300px; top:580px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#4ade80;">Std. Deviation (╧â)</strong><br>
      <span style="font-size:14px;">╧â = ΓêÜ╧â┬▓</span>
    </div>

    <!-- SubΓÇænodes ΓÇô Data Interpretation -->
    <div style="position:absolute; left:1400px; top:260px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#60a5fa;">Bar Chart</strong><br>
      <span style="font-size:14px;">Height Γê¥ frequency</span>
    </div>
    <div style="position:absolute; left:1400px; top:340px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#60a5fa;">Pie Chart</strong><br>
      <span style="font-size:14px;">% = (f / ╬úf) ├ù 100 = (╬╕ / 360) ├ù 100</span>
    </div>
    <div style="position:absolute; left:1400px; top:420px; width:260px; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:8px;">
      <strong style="color:#60a5fa;">Frequency Table</strong><br>
      <span style="font-size:14px;">Example: Score 0ΓÇæ10 ΓåÆ 5, 11ΓÇæ20 ΓåÆ 8, 21ΓÇæ30 ΓåÆ 12</span>
    </div>

    <!-- ProblemΓÇæSolving Flow (Bottom) -->
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
      lim<sub>xΓåÆa</sub> f(x)=L
    </text>
    <text x="275" y="220" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Continuity: lim<sub>xΓåÆa</sub>f(x)=f(a)
    </text>
    <text x="275" y="240" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Example: lim<sub>xΓåÆ0</sub> (sin x)/x = 1
    </text>

    <!-- Arrow from central to Limits -->
    <line x1="600" y1="90" x2="275" y2="150"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>

    <!-- Branch: Differentiation Rules -->
    <rect x="450" y="250" width="300" height="260" rx="8"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="600" y="270" text-anchor="middle" style="fill:#e2e8f0; font-size:16px; font-weight:bold;">Differentiation Rules</text>
    <text x="600" y="300" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Power: d/dx[xΓü┐]=n┬╖xΓü┐Γü╗┬╣
    </text>
    <text x="600" y="320" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Product: (uv)'=u'v+uv'
    </text>
    <text x="600" y="340" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Quotient: (u/v)'=(u'v-u v')/v┬▓
    </text>
    <text x="600" y="360" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Chain: d/dx[f(g(x))]=f'(g(x))┬╖g'(x)
    </text>
    <text x="600" y="380" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Trig: d/dx[sin x]=cos x
    </text>
    <text x="600" y="400" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Exponential: d/dx[e╦ú]=e╦ú
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
      Γê½ xΓü┐ dx = xΓü┐Γü║┬╣/(n+1)+C
    </text>
    <text x="975" y="220" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Substitution: u = g(x) ΓåÆ Γê½ f(g(x))g'(x)dx = Γê½ f(u)du
    </text>
    <text x="975" y="240" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Parts: Γê½ u dv = uv ΓÇô Γê½ v du
    </text>
    <text x="975" y="260" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Partial Fractions (e.g., 1/(x┬▓ΓÇæ1)=┬╜[1/(xΓÇæ1) ΓÇô 1/(x+1)])
    </text>
    <text x="975" y="280" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">
      Trig: Γê½ sin x dx = ΓÇôcos x + C
    </text>

    <!-- Arrow from central to Integration -->
    <line x1="600" y1="90" x2="975" y2="150"
          style="stroke:#e2e8f0; stroke-width:2;" marker-end="url(#arrow)"/>

    <!-- ProblemΓÇæSolving Flow (below) -->
    <rect x="250" y="560" width="700" height="180" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="600" y="580" text-anchor="middle" style="fill:#0f1117; font-size:16px; font-weight:bold;">StepΓÇæbyΓÇæStep Problem Solving</text>

    <!-- Steps as small boxes -->
    <!-- 1. Identify type -->
    <rect x="280" y="610" width="180" height="50" rx="6"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:1;"></rect>
    <text x="370" y="640" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">1∩╕ÅΓâú Identify Topic</text>

    <!-- 2. Choose formula -->
    <rect x="520" y="610" width="180" height="50" rx="6"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:1;"></rect>
    <text x="610" y="640" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">2∩╕ÅΓâú Select Formula</text>

    <!-- 3. Apply method -->
    <rect x="760" y="610" width="180" height="50" rx="6"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:1;"></rect>
    <text x="850" y="640" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">3∩╕ÅΓâú Apply Method</text>

    <!-- 4. Simplify & Check -->
    <rect x="500" y="680" width="200" height="50" rx="6"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:1;"></rect>
    <text x="600" y="710" text-anchor="middle" style="fill:#e2e8f0; font-size:14px;">4∩╕ÅΓâú Simplify & Verify</text>

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
      Find d/dx[ x┬│┬╖sin x ] 
    </text>
    <text x="1050" y="640" text-anchor="middle" style="fill:#0f1117; font-size:14px;">
      Using Product & Chain Rules:
    </text>
    <text x="1050" y="660" text-anchor="middle" style="fill:#0f1117; font-size:14px;">
      = 3x┬▓┬╖sin x + x┬│┬╖cos x
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
    <text x="640" y="140" text-anchor="middle" fill="#0f1117" font-size="12">ΓÇó Square, Row, Column</text>
    <text x="640" y="155" text-anchor="middle" fill="#0f1117" font-size="12">ΓÇó Diagonal, Identity (IΓéÖ)</text>
    <text x="640" y="170" text-anchor="middle" fill="#0f1117" font-size="12">ΓÇó Zero, Symmetric, SkewΓÇæsymmetric</text>

    <!-- Matrix Operations -->
    <rect x="540" y="210" width="260" height="140" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="670" y="230" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Matrix Operations</text>
    <text x="670" y="250" text-anchor="middle" fill="#0f1117" font-size="12">Addition:  (A+B)ß╡óΓ▒╝ = Aß╡óΓ▒╝ + Bß╡óΓ▒╝</text>
    <text x="670" y="265" text-anchor="middle" fill="#0f1117" font-size="12">Multiplication: (AB)ß╡óΓ▒╝ = ╬úΓéû Aß╡óΓéû┬╖BΓéûΓ▒╝</text>
    <text x="670" y="280" text-anchor="middle" fill="#0f1117" font-size="12">Scalar: kAß╡óΓ▒╝</text>
    <text x="670" y="295" text-anchor="middle" fill="#0f1117" font-size="12">Transpose: (Aß╡Ç)ß╡óΓ▒╝ = AΓ▒╝ß╡ó</text>
    <text x="670" y="310" text-anchor="middle" fill="#0f1117" font-size="12">Trace: tr(A) = ╬úß╡ó Aß╡óß╡ó</text>

    <!-- Determinants -->
    <rect x="540" y="380" width="240" height="140" fill="#60a5fa" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="660" y="400" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Determinants</text>
    <text x="660" y="420" text-anchor="middle" fill="#0f1117" font-size="12">2├ù2: |a b| = adΓÇæbc</text>
    <text x="660" y="440" text-anchor="middle" fill="#0f1117" font-size="12">3├ù3: Sarrus or Laplace expansion</text>
    <text x="660" y="460" text-anchor="middle" fill="#0f1117" font-size="12">Properties: |AB| = |A||B|, |Aß╡Ç| = |A|</text>
    <text x="660" y="480" text-anchor="middle" fill="#0f1117" font-size="12">Cofactor Cß╡óΓ▒╝ = (ΓÇæ1)^{i+j}Mß╡óΓ▒╝</text>

    <!-- Inverse & Adjoints -->
    <rect x="540" y="560" width="260" height="120" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="670" y="580" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Inverse of a Matrix</text>
    <text x="670" y="600" text-anchor="middle" fill="#0f1117" font-size="12">AΓü╗┬╣ = (1/|A|)┬╖adj(A)</text>
    <text x="670" y="620" text-anchor="middle" fill="#0f1117" font-size="12">Adj(A) = transpose of cofactor matrix</text>

    <!-- Applications -->
    <rect x="540" y="710" width="280" height="150" fill="#60a5fa" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="680" y="730" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Applications in NDA/ CDS</text>
    <text x="680" y="750" text-anchor="middle" fill="#0f1117" font-size="12">Cramer's Rule for 2ΓÇæeqn 2ΓÇæunk:</text>
    <text x="680" y="765" text-anchor="middle" fill="#0f1117" font-size="12">x = |DΓéô|/|D| , y = |Dß╡º|/|D|</text>
    <text x="680" y="785" text-anchor="middle" fill="#0f1117" font-size="12">System of linear equations (Ax = b)</text>
    <text x="680" y="805" text-anchor="middle" fill="#0f1117" font-size="12">Matrix method for arithmeticΓÇæprogression problems</text>

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
    <text x="820" y="120" fill="#f59e0b" font-size="12">Key Theorem: BinetΓÇæCauchy</text>
    <text x="820" y="140" fill="#f59e0b" font-size="12">Determinant of triangular matrix = product of diagonal</text>
    <text x="820" y="160" fill="#f59e0b" font-size="12">Rank Γëñ min(rows,cols)</text>
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
    <text class="title" x="600" y="65" text-anchor="middle">1. Sample Space (╬⌐)</text>
    <text class="content" x="600" y="90" text-anchor="middle">╬⌐ = set of all possible outcomes</text>

    <!-- Arrow 1 -->
    <line class="arrow" x1="600" y1="120" x2="600" y2="150"></line>

    <!-- Box 2: Event Definition -->
    <rect class="box" x="450" y="150" width="300" height="80"></rect>
    <text class="title" x="600" y="175" text-anchor="middle">2. Event Definition (A, B, ΓÇª)</text>
    <text class="content" x="600" y="200" text-anchor="middle">Subset of ╬⌐</text>

    <!-- Arrow 2 -->
    <line class="arrow" x1="600" y1="230" x2="600" y2="260"></line>

    <!-- Box 3: Basic Probability -->
    <rect class="box" x="450" y="260" width="300" height="80"></rect>
    <text class="title" x="600" y="285" text-anchor="middle">3. Basic Probability</text>
    <text class="content" x="600" y="310" text-anchor="middle">P(A)=|A| / |╬⌐|</text>

    <!-- Arrow 3 -->
    <line class="arrow" x1="600" y1="340" x2="600" y2="370"></line>

    <!-- Box 4: Conditional Probability -->
    <rect class="box" x="450" y="370" width="300" height="80"></rect>
    <text class="title" x="600" y="395" text-anchor="middle">4. Conditional Probability</text>
    <text class="content" x="600" y="420" text-anchor="middle">P(A|B)=P(AΓê⌐B)/P(B)</text>

    <!-- Arrow 4 -->
    <line class="arrow" x1="600" y1="450" x2="600" y2="480"></line>

    <!-- Box 5: Multiplication Rule -->
    <rect class="box" x="450" y="480" width="300" height="80"></rect>
    <text class="title" x="600" y="505" text-anchor="middle">5. Multiplication Rule</text>
    <text class="content" x="600" y="530" text-anchor="middle">P(AΓê⌐B)=P(A)┬╖P(B|A)</text>

    <!-- Arrow 5 -->
    <line class="arrow" x1="600" y1="560" x2="600" y2="590"></line>

    <!-- Box 6: Total Probability Theorem -->
    <rect class="box" x="450" y="590" width="300" height="100"></rect>
    <text class="title" x="600" y="615" text-anchor="middle">6. Total Probability Theorem</text>
    <text class="content" x="600" y="640" text-anchor="middle">P(B)=Γêæ P(B|Ai)┬╖P(Ai)</text>
    <text class="small" x="600" y="660" text-anchor="middle">{Ai} ΓÇô partition of ╬⌐</text>

    <!-- Arrow 6 -->
    <line class="arrow" x1="600" y1="690" x2="600" y2="720"></line>

    <!-- Box 7: Bayes Theorem -->
    <rect class="box" x="450" y="720" width="300" height="100"></rect>
    <text class="title" x="600" y="745" text-anchor="middle">7. Bayes Theorem</text>
    <text class="content" x="600" y="770" text-anchor="middle">P(A|B)=P(B|A)┬╖P(A) / P(B)</text>
    <text class="small" x="600" y="790" text-anchor="middle">Useful for reverseΓÇæprobability problems</text>

    <!-- Arrow 7 -->
    <line class="arrow" x1="600" y1="820" x2="600" y2="850"></line>

    <!-- Box 8: ProblemΓÇæSolving Steps -->
    <rect class="box" x="450" y="850" width="300" height="200"></rect>
    <text class="title" x="600" y="875" text-anchor="middle">8. StepΓÇæbyΓÇæStep Solution</text>
    <text class="content" x="600" y="900" text-anchor="middle">a) Identify ╬⌐ and events</text>
    <text class="content" x="600" y="920" text-anchor="middle">b) Check independence / use</text>
    <text class="content" x="600" y="940" text-anchor="middle">   conditional probability</text>
    <text class="content" x="600" y="960" text-anchor="middle">c) Apply multiplication / total prob.</text>
    <text class="content" x="600" y="980" text-anchor="middle">d) If reverse, use Bayes</text>
    <text class="content" x="600" y="1000" text-anchor="middle">e) Compute numeric answer</text>

    <!-- Side Example: Independent Events -->
    <rect class="box" x="150" y="260" width="260" height="80"></rect>
    <text class="title" x="280" y="285" text-anchor="middle">Independent Events</text>
    <text class="content" x="280" y="310" text-anchor="middle">P(AΓê⌐B)=P(A)┬╖P(B)</text>
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
    <text class="content" x="280" y="830" text-anchor="middle">P(Disease|Positive) Γëê 0.17</text>
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
    <!-- SubΓÇænodes ΓÇô Lines & Angles -->
    <div style="position:absolute; top:260px; left:12%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Slope</strong><br/>m = (yΓééΓÇæyΓéü)/(xΓééΓÇæxΓéü)
    </div>
    <div style="position:absolute; top:340px; left:12%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Distance</strong><br/>d = ΓêÜ[(xΓééΓÇæxΓéü)┬▓+(yΓééΓÇæyΓéü)┬▓]
    </div>
    <div style="position:absolute; top:420px; left:12%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Angle between lines</strong><br/>tanΓÇ»╬╕ = |(mΓéüΓÇæmΓéé)/(1+mΓéümΓéé)|
    </div>
    <!-- SubΓÇænodes ΓÇô Triangles -->
    <div style="position:absolute; top:260px; left:38%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Sum of angles</strong><br/>ΓêáA+ΓêáB+ΓêáC = 180┬░
    </div>
    <div style="position:absolute; top:340px; left:38%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Area (┬╜ΓÇ»baseΓÇ»├ùΓÇ»height)</strong><br/>╬ö = ┬╜┬╖b┬╖h
    </div>
    <div style="position:absolute; top:420px; left:38%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>HeronΓÇÖs formula</strong><br/>s = (a+b+c)/2<br/>╬ö = ΓêÜ[s(sΓÇæa)(sΓÇæb)(sΓÇæc)]
    </div>
    <!-- SubΓÇænodes ΓÇô Circles -->
    <div style="position:absolute; top:260px; left:62%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Circumference</strong><br/>C = 2╧Çr
    </div>
    <div style="position:absolute; top:340px; left:62%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Area</strong><br/>A = ╧Çr┬▓
    </div>
    <div style="position:absolute; top:420px; left:62%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Chord length</strong><br/>c = 2rΓÇ»sin(╬╕/2)
    </div>
    <!-- SubΓÇænodes ΓÇô Polygons -->
    <div style="position:absolute; top:260px; left:88%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Interior angle</strong><br/>I = (nΓÇæ2)┬╖180┬░/n
    </div>
    <div style="position:absolute; top:340px; left:88%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>Area of regular nΓÇægon</strong><br/>A = (nΓÇ»s┬▓/4)┬╖cot(╧Ç/n)
    </div>
    <div style="position:absolute; top:420px; left:88%; width:200px; padding:8px; background:#4ade80; border-radius:5px; font-size:14px;">
      <strong>EulerΓÇÖs formula (polyhedron)</strong><br/>VΓÇ»ΓêÆΓÇ»EΓÇ»+ΓÇ»F = 2
    </div>
    <!-- ProblemΓÇæSolving Flowchart -->
    <div style="position:absolute; top:560px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      1∩╕ÅΓâú Understand Question
    </div>
    <div style="position:absolute; top:640px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      2∩╕ÅΓâú Draw Diagram
    </div>
    <div style="position:absolute; top:720px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      3∩╕ÅΓâú Mark Given / Find
    </div>
    <div style="position:absolute; top:800px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      4∩╕ÅΓâú Choose Theorem / Formula
    </div>
    <div style="position:absolute; top:880px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      5∩╕ÅΓâú Substitute &amp; Solve
    </div>
    <div style="position:absolute; top:960px; left:50%; transform:translateX(-50%); width:260px; padding:10px; background:#60a5fa; border-radius:6px; text-align:center; color:#0f1117; font-weight:bold;">
      6∩╕ÅΓâú Verify &amp; Answer
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
      <!-- Lines & Angles to SubΓÇænodes -->
      <line x1="300" y1="170" x2="260" y2="260" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="300" y1="170" x2="260" y2="340" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="300" y1="170" x2="260" y2="420" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Triangles to SubΓÇænodes -->
      <line x1="400" y1="170" x2="440" y2="260" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="400" y1="170" x2="440" y2="340" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="400" y1="170" x2="440" y2="420" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Circles to SubΓÇænodes -->
      <line x1="800" y1="170" x2="740" y2="260" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="800" y1="170" x2="740" y2="340" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="800" y1="170" x2="740" y2="420" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
      <!-- Polygons to SubΓÇænodes -->
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
          Area = a┬▓<br>
          Perimeter = 4a
        </div>

        <!-- Rectangle -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Rectangle</strong><br>
          Area = l ├ù b<br>
          Perimeter = 2(l + b)
        </div>

        <!-- Circle -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Circle</strong><br>
          Area = ╧Çr┬▓<br>
          Circumference = 2╧Çr
        </div>

        <!-- Triangle -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Triangle</strong><br>
          Area = ┬╜ ├ù base ├ù height<br>
          Perimeter = a + b + c
        </div>

        <!-- Parallelogram -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Parallelogram</strong><br>
          Area = base ├ù height<br>
          Perimeter = 2(base + side)
        </div>

        <!-- Trapezium -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px;">
          <strong>Trapezium</strong><br>
          Area = ┬╜ ├ù (a + b) ├ù height<br>
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
          SA = 6a┬▓<br>
          Volume = a┬│
        </div>

        <!-- Cuboid -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Cuboid</strong><br>
          SA = 2(lw + lh + wh)<br>
          Volume = lΓÇ»wΓÇ»h
        </div>

        <!-- Sphere -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Sphere</strong><br>
          SA = 4╧Çr┬▓<br>
          Volume = 4Γüä3ΓÇ»╧Çr┬│
        </div>

        <!-- Cylinder -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Cylinder</strong><br>
          SA = 2╧Çr(h + r)<br>
          Volume = ╧Çr┬▓h
        </div>

        <!-- Cone -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px; margin-bottom:8px;">
          <strong>Cone</strong><br>
          SA = ╧Çr(l + r)ΓÇâ(l = ΓêÜ(r┬▓+h┬▓))<br>
          Volume = 1Γüä3ΓÇ»╧Çr┬▓h
        </div>

        <!-- Hemisphere -->
        <div style="background:#1e293b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:10px;">
          <strong>Hemisphere</strong><br>
          SA = 3╧Çr┬▓<br>
          Volume = 2Γüä3ΓÇ»╧Çr┬│
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

    <!-- ProblemΓÇæSolving Flowchart -->
    <div style="margin-top:260px; width:100%; max-width:1100px; background:#1f2937; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:20px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap;">
        <!-- Step 1 -->
        <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          1∩╕ÅΓâú Identify Figure (2D / 3D)
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 2 -->
        <div style="background:#60a5fa; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          2∩╕ÅΓâú List Given Data (sides, radius, heightΓÇª)
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 3 -->
        <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          3∩╕ÅΓâú Choose Correct Formula
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 4 -->
        <div style="background:#60a5fa; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          4∩╕ÅΓâú Substitute Values
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 5 -->
        <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          5∩╕ÅΓâú Compute &amp; Simplify
        </div>
        <!-- Arrow -->
        <svg width="30" height="30" style="flex:none;">
          <line x1="0" y1="15" x2="30" y2="15" stroke="#e2e8f0" stroke-width="2"/>
          <polygon points="28,13 28,17 30,15" fill="#e2e8f0"/>
        </svg>
        <!-- Step 6 -->
        <div style="background:#60a5fa; color:#0f1117; padding:12px 20px; border-radius:6px; flex:1; min-width:150px; text-align:center; margin:5px;">
          6∩╕ÅΓâú Verify Units &amp; Answer
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
    <text x="900" y="285" text-anchor="middle" fill="#e2e8f0" font-size="16" font-weight="bold">TΓÇæSΓÇæD &amp; Work</text>

    <!-- SubΓÇænodes for Percentages & P&L -->
    <line x1="300" y1="320" x2="180" y2="440" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="90" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="180" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Percentages</text>
    <text x="180" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="180" dy="0">% = (Part/Whole)├ù100</tspan>
      <tspan x="180" dy="16">Increase% = ((NewΓÇæOld)/Old)├ù100</tspan>
      <tspan x="180" dy="16">Decrease% = ((OldΓÇæNew)/Old)├ù100</tspan>
    </text>

    <line x1="300" y1="320" x2="420" y2="440" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="330" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="420" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Profit &amp; Loss</text>
    <text x="420" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="420" dy="0">Profit% = (Profit/CP)├ù100</tspan>
      <tspan x="420" dy="16">Loss%   = (Loss/SP)├ù100</tspan>
      <tspan x="420" dy="16">SP = CP ├ù (1 + Profit%/100)</tspan>
      <tspan x="420" dy="16">CP = SP ├╖ (1 + Profit%/100)</tspan>
    </text>

    <!-- SubΓÇænodes for Ratios & Averages -->
    <line x1="600" y1="320" x2="540" y2="440" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <rect x="450" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="540" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Ratios &amp; Proportions</text>
    <text x="540" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="540" dy="0">a:b = c:d ΓçÆ ad = bc</tspan>
      <tspan x="540" dy="16">Compound Ratio = (a:b)├ù(b:c) = a:c</tstack>
      <tspan x="540" dy="16">Division of Number ΓåÆ (Ratio ├ù Total) / ╬úRatios</tspan>
    </text>

    <line x1="600" y1="320" x2="660" y2="440" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowBlue)"/>
    <rect x="570" y="440" width="180" height="80" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="660" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Averages</text>
    <text x="660" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="660" dy="0">Average = ╬úValues / n</tspan>
      <tspan x="660" dy="16">New Avg = (╬ú + New)/ (n+1)</tspan>
      <tspan x="660" dy="16">Missing Value = n┬╖Avg ΓÇô ╬úKnown</tspan>
    </text>

    <!-- SubΓÇænodes for Time, Speed, Distance & Work -->
    <line x1="900" y1="320" x2="960" y2="440" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="870" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="960" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">SpeedΓÇæDistanceΓÇæTime</text>
    <text x="960" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="960" dy="0">Speed = Distance / Time</tspan>
      <tspan x="960" dy="16">Distance = Speed ├ù Time</tspan>
      <tspan x="960" dy="16">Time = Distance / Speed</tspan>
      <tspan x="960" dy="16">Relative Speed = |S1 ΓÇô S2| (Opposite) or S1+S2 (Same)</tspan>
    </text>

    <line x1="900" y1="320" x2="840" y2="440" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
    <rect x="750" y="440" width="180" height="100" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="840" y="470" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Work &amp; Efficiency</text>
    <text x="840" y="490" text-anchor="middle" fill="#e2e8f0" font-size="12">
      <tspan x="840" dy="0">Work = Rate ├ù Time</tspan>
      <tspan x="840" dy="16">Rate = 1 / (Time to finish one unit)</tspan>
      <tspan x="840" dy="16">Combined Rate = ╬ú Individual Rates</tspan>
      <tspan x="840" dy="16">Efficiency% = (Actual Rate / Standard Rate)├ù100</tspan>
    </text>

    <!-- ProblemΓÇæSolving Flow (generic) -->
    <rect x="460" y="720" width="280" height="140" rx="8" fill="#1e293b" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="750" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">ProblemΓÇæSolving Steps</text>
    <text x="600" y="770" text-anchor="middle" fill="#e2e8f0" font-size="14">
      <tspan x="600" dy="0">1∩╕ÅΓâú Read &amp; Identify data</tspan>
      <tspan x="600" dy="20">2∩╕ÅΓâú Choose appropriate formula</tspan>
      <tspan x="600" dy="20">3∩╕ÅΓâú Convert units (if needed)</tspan>
      <tspan x="600" dy="20">4∩╕ÅΓâú Substitute &amp; solve</tspan>
      <tspan x="600" dy="20">5∩╕ÅΓâú Check reasonableness</tspan>
    </text>

    <!-- Connecting arrows to ProblemΓÇæSolving -->
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
      ΓÇó Speed (S) = Distance (D) ├╖ Time (T)ΓÇâΓÇâS = D/T<br>
      ΓÇó Distance (D) = Speed ├ù TimeΓÇâΓÇâD = S ├ù T<br>
      ΓÇó Time (T) = Distance ├╖ SpeedΓÇâΓÇâT = D/S<br>
      ΓÇó Relative Speed (Opposite) = SΓéü + SΓéé<br>
      ΓÇó Relative Speed (Same) = |SΓéü ΓÇô SΓéé|
    </div>

    <!-- ProblemΓÇæSolving Steps for TSD -->
    <div style="position:absolute; left:180px; top:460px; width:220px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px; line-height:1.6;">
      <strong style="color:#4ade80;">Solution Steps</strong><br>
      1∩╕ÅΓâú Identify known & unknown variables.<br>
      2∩╕ÅΓâú Choose the appropriate formula.<br>
      3∩╕ÅΓâú Convert units (km Γåö m, hr Γåö sec).<br>
      4∩╕ÅΓâú Substitute & solve for the unknown.<br>
      5∩╕ÅΓâú Check the answerΓÇÖs plausibility.
    </div>

    <!-- Ratios, Proportions & Percentages Topic -->
    <div style="position:absolute; left:780px; top:200px; width:240px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px;">
      <strong style="color:#60a5fa; font-size:18px;">Ratios, Proportions & Percentages</strong>
    </div>

    <!-- Formulas for Ratios -->
    <div style="position:absolute; left:780px; top:300px; width:240px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px; line-height:1.6;">
      <strong style="color:#4ade80;">Key Formulas</strong><br>
      ΓÇó Ratio: aΓÇ»:ΓÇ»b = cΓÇ»:ΓÇ»dΓÇâΓçö a/b = c/d<br>
      ΓÇó Proportion (crossΓÇæmultiply): a┬╖d = b┬╖c<br>
      ΓÇó Percentage: PΓÇ»% = (P/100) ├ù Value<br>
      ΓÇó Simple Interest: SI = (PΓÇ»├ùΓÇ»RΓÇ»├ùΓÇ»T)/100<br>
      ΓÇó Compound Interest: A = P(1 + r/n)^{nt}
    </div>

    <!-- ProblemΓÇæSolving Steps for Ratios -->
    <div style="position:absolute; left:780px; top:460px; width:240px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px; padding:12px; line-height:1.6;">
      <strong style="color:#4ade80;">Solution Steps</strong><br>
      1∩╕ÅΓâú Convert % to decimal (├╖100).<br>
      2∩╕ÅΓâú Write the given ratio/proportion.<br>
      3∩╕ÅΓâú CrossΓÇæmultiply or apply the relevant formula.<br>
      4∩╕ÅΓâú Solve for the required term.<br>
      5∩╕ÅΓâú Verify with original units/conditions.
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
      <!-- Outer to subΓÇænodes (Parts of Speech) -->
      <line x1="210" y1="190" x2="210" y2="290" stroke="#60a5fa" stroke-width="2"/>
      <line x1="210" y1="190" x2="210" y2="370" stroke="#60a5fa" stroke-width="2"/>
      <line x1="210" y1="190" x2="210" y2="450" stroke="#60a5fa" stroke-width="2"/>
      <!-- Tenses & Consistency -->
      <line x1="550" y1="60" x2="550" y2="140" stroke="#60a5fa" stroke-width="2"/>
      <line x1="550" y1="60" x2="550" y2="220" stroke="#60a5fa" stroke-width="2"/>
      <line x1="550" y1="60" x2="550" y2="300" stroke="#60a5fa" stroke-width="2"/>
      <!-- SubjectΓÇæVerb Agreement -->
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
      <strong>Rule:</strong> 8 parts ΓÇô N,ΓÇ»P,ΓÇ»V,ΓÇ»Adj,ΓÇ»Adv,ΓÇ»Prep,ΓÇ»Conj,ΓÇ»Interj
    </div>
    <div style="position:absolute;left:120px;top:330px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> She (pron.) runs (verb) quickly (adv).
    </div>
    <div style="position:absolute;left:120px;top:410px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> ΓÇ£FastΓÇ¥ can be Adj or Adv.
    </div>

    <!-- Tenses & Consistency -->
    <div style="position:absolute;left:460px;top:20px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Tenses &amp; Consistency</strong>
    </div>
    <div style="position:absolute;left:460px;top:100px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> Simple PresentΓÇ»=ΓÇ»SΓÇ»+ΓÇ»V(s/es); PresentΓÇ»ContΓÇ»=ΓÇ»SΓÇ»+ΓÇ»am/is/areΓÇ»+ΓÇ»VΓÇæing
    </div>
    <div style="position:absolute;left:460px;top:180px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Example:</strong> He plays cricket.
    </div>
    <div style="position:absolute;left:460px;top:260px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> Irregular verbs ΓÇô goΓÇ»ΓåÆΓÇ»went.
    </div>

    <!-- SubjectΓÇæVerb Agreement -->
    <div style="position:absolute;left:800px;top:150px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>SubjectΓÇæVerb Agreement</strong>
    </div>
    <div style="position:absolute;left:800px;top:250px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> SingularΓÇ»ΓåÆΓÇ»singular verb; PluralΓÇ»ΓåÆΓÇ»plural verb
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
      <strong>Exception:</strong> ΓÇ£She likes to read and writingΓÇ¥ is incorrect.
    </div>

    <!-- Active & Passive Voice -->
    <div style="position:absolute;left:800px;top:460px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;text-align:center;line-height:1.2;">
      <strong>Active &amp; Passive Voice</strong>
    </div>
    <div style="position:absolute;left:800px;top:560px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Rule:</strong> PassiveΓÇ»=ΓÇ»beΓÇ»+ΓÇ»pastΓÇæparticiple.
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
      <strong>Example:</strong> He said, ΓÇ£I am coming.ΓÇ¥ ΓåÆ He said that he was coming.
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
      <strong>Example:</strong> ΓÇ£Running quickly, the finish line was reached.ΓÇ¥ (misplaced)
    </div>
    <div style="position:absolute;left:120px;top:720px;width:180px;height:80px;background:#1a1c25;border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:#e2e8f0;padding:8px;box-sizing:border-box;line-height:1.2;">
      <strong>Exception:</strong> ΓÇ£After finishing the work, she went home.ΓÇ¥ (correct)
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

    <!-- HighΓÇæFrequency Synonyms/Antonyms -->
    <div style="position:absolute; left:10%; top:15%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>HighΓÇæFrequency Synonyms/Antonyms</strong><br><br>
      <u>Synonyms</u><br>
      ΓÇóΓÇ»Abundant ΓÇôΓÇ»Plentiful (GRE 2021)<br>
      ΓÇóΓÇ»Elicit ΓÇôΓÇ»Evoke (SAT 2020)<br>
      ΓÇóΓÇ»Mitigate ΓÇôΓÇ»Alleviate (UPSC 2019)<br><br>
      <u>Antonyms</u><br>
      ΓÇóΓÇ»Ardent ΓÇôΓÇ»Apathetic<br>
      ΓÇóΓÇ»Concur ΓÇôΓÇ»Dissent<br>
      ΓÇóΓÇ»Obscure ΓÇôΓÇ»Clear<br><br>
      <u>Rule</u>: Prefer 1ΓÇæsyllable synonym for highΓÇæfrequency usage.<br>
      <u>Exception</u>: ΓÇ£ObscureΓÇ¥ (verb) vs ΓÇ£ObscureΓÇ¥ (adj.) ΓÇô context matters.
    </div>

    <!-- One Word Substitutions -->
    <div style="position:absolute; left:70%; top:10%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>OneΓÇæWord Substitutions</strong><br><br>
      ΓÇóΓÇ»ΓÇ£A person who loves booksΓÇ¥ ΓÇôΓÇ»<b>Bibliophile</b><br>
      ΓÇóΓÇ»ΓÇ£A person who travels a lotΓÇ¥ ΓÇôΓÇ»<b>Nomad</b><br>
      ΓÇóΓÇ»ΓÇ£Speaking in a very short mannerΓÇ¥ ΓÇôΓÇ»<b>Concise</b><br>
      ΓÇóΓÇ»ΓÇ£Fear of confined spacesΓÇ¥ ΓÇôΓÇ»<b>Claustrophobia</b><br><br>
      <u>Rule</u>: Use the noun form when the clue contains ΓÇ£personΓÇ¥, ΓÇ£thingΓÇ¥, ΓÇ£stateΓÇ¥.<br>
      <u>Exception</u>: ΓÇ£A person who writes poetryΓÇ¥ ΓÇôΓÇ»<b>Poet</b> (not ΓÇ£PoeticalΓÇ¥).
    </div>

    <!-- Idioms & Phrases -->
    <div style="position:absolute; left:5%; top:65%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>Idioms &amp; Phrases</strong><br><br>
      ΓÇóΓÇ»<strong>Break the ice</strong> ΓÇôΓÇ»initiate conversation (used in UPSC 2022)<br>
      ΓÇóΓÇ»<strong>Hit the sack</strong> ΓÇôΓÇ»go to sleep (common in NDA interviews)<br>
      ΓÇóΓÇ»<strong>Burn the midnight oil</strong> ΓÇôΓÇ»study late (appears in CDS 2021)<br>
      ΓÇóΓÇ»<strong>Elephant in the room</strong> ΓÇôΓÇ»obvious problem ignored<br><br>
      <u>Usage Pattern</u>: Idioms are usually verbΓÇænoun collocations; keep tense consistent with surrounding sentence.
    </div>

    <!-- Phrasal Verbs -->
    <div style="position:absolute; left:75%; top:70%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>Phrasal Verbs</strong><br><br>
      ΓÇóΓÇ»<strong>Look up</strong> ΓÇôΓÇ»search for information (e.g., ΓÇ£look up a wordΓÇ¥).<br>
      ΓÇóΓÇ»<strong>Carry out</strong> ΓÇôΓÇ»execute (e.g., ΓÇ£carry out a missionΓÇ¥).<br>
      ΓÇóΓÇ»<strong>Turn down</strong> ΓÇôΓÇ»reject (e.g., ΓÇ£turn down an offerΓÇ¥).<br>
      ΓÇóΓÇ»<strong>Put off</strong> ΓÇôΓÇ»postpone (e.g., ΓÇ£put off the meetingΓÇ¥).<br><br>
      <u>Rule</u>: If the particle changes meaning, treat as separate entry (e.g., ΓÇ£take offΓÇ¥ vs ΓÇ£take offΓÇ¥ (remove)).<br>
      <u>Exception</u>: ΓÇ£Get overΓÇ¥ (recover) vs ΓÇ£Get overΓÇ¥ (physically pass).
    </div>

    <!-- Reading Comprehension -->
    <div style="position:absolute; left:45%; top:85%; width:260px; background:#4ade80; color:#0f1117; padding:15px; border-radius:6px; box-shadow:0 0 8px rgba(255,255,255,0.15);">
      <strong>Reading Comprehension</strong><br><br>
      <u>Key Strategies (NDA 2023)</u>:<br>
      1. Skim for gist ΓÇô 30ΓÇ»seconds.<br>
      2. Locate ΓÇ£who, what, when, where, whyΓÇ¥.<br>
      3. Highlight transition words (however, therefore).<br>
      4. Answer inference questions first.<br>
      5. Watch out for ΓÇ£negativeΓÇ¥ qualifiers (never, hardly).<br><br>
      <u>Typical Question Types</u>:<br>
      ΓÇóΓÇ»MainΓÇæidea (1ΓÇ»mark)<br>
      ΓÇóΓÇ»DetailΓÇæoriented (2ΓÇ»marks)<br>
      ΓÇóΓÇ»Inference (3ΓÇ»marks)<br>
      ΓÇóΓÇ»Vocabulary in context (1ΓÇ»mark)
    </div>

    <!-- Connecting Lines (SVG) -->
    <svg width="1200" height="800" style="position:absolute; left:0; top:0; pointer-events:none;">
      <!-- Central to Synonyms -->
      <line x1="600" y1="400" x2="260" y2="140" stroke="#60a5fa" stroke-width="2"/>
      <!-- Central to OneΓÇæWord -->
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
        <li><strong>Rule:</strong> Identify subjectΓÇæverb agreement, tense consistency, idiom misuse, preposition errors.</li>
        <li><strong>Example:</strong> ΓÇ£She go to school.ΓÇ¥ ΓåÆ ΓÇ£She <span style="color:#4ade80;">goes</span> to school.ΓÇ¥</li>
        <li><strong>Exception:</strong> Collective nouns ΓÇô ΓÇ£The team <span style='color:#4ade80;'>is</span> winningΓÇ¥ (singular) vs ΓÇ£The team <span style='color:#4ade80;'>are</span> arguingΓÇ¥ (British style).</li>
        <li><strong>Usage Pattern:</strong> In UPSC, 42% of grammar questions (2022 prelims) are errorΓÇæspotting.</li>
      </ul>
    </div>

    <!-- Sentence Improvement Node -->
    <div style="position:absolute; left:770px; top:80px; width:260px; background:#1a1c23; color:#e2e8f0; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <strong>Sentence Improvement</strong><br>
      <ul style="margin:8px 0; padding-left:18px; line-height:1.4;">
        <li><strong>Rule:</strong> Use parallelism, avoid redundancy, prefer active voice.</li>
        <li><strong>Example:</strong> ΓÇ£He is not only intelligent but also hardworking.ΓÇ¥</li>
        <li><strong>Exception:</strong> Split infinitives are acceptable when they improve clarity ΓÇô ΓÇ£to boldly goΓÇ¥.</li>
        <li><strong>Usage Pattern:</strong> 28% of UPSC English questions (2023) test sentence improvement.</li>
      </ul>
    </div>

    <!-- Ordering of Words & Sentences Node -->
    <div style="position:absolute; left:1240px; top:260px; width:260px; background:#1a1c23; color:#e2e8f0; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <strong>Ordering of Words &amp; Sentences</strong><br>
      <ul style="margin:8px 0; padding-left:18px; line-height:1.4;">
        <li><strong>Rule:</strong> Maintain logical flow; use transition words (First, Then, Finally).</li>
        <li><strong>Example:</strong> ΓÇ£First, the economy grew. Then, inflation fell. Finally, employment rose.ΓÇ¥</li>
        <li><strong>Exception:</strong> Avoid ΓÇ£chronological trapΓÇ¥ ΓÇô donΓÇÖt force chronological order when logical order differs.</li>
        <li><strong>Usage Pattern:</strong> 15% of UPSC English questions (2021) involve ordering tasks.</li>
      </ul>
    </div>

    <!-- Fill in the Blanks & Cloze Test Node -->
    <div style="position:absolute; left:770px; top:660px; width:260px; background:#1a1c23; color:#e2e8f0; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <strong>Fill in the Blanks &amp; Cloze Test</strong><br>
      <ul style="margin:8px 0; padding-left:18px; line-height:1.4;">
        <li><strong>Rule:</strong> Use correct collocations & prepositions; watch for ΓÇ£a/anΓÇ¥ before vowelΓÇæsound vs consonantΓÇæsound.</li>
        <li><strong>Example:</strong> ΓÇ£He is ___ (keen) about music.ΓÇ¥ ΓåÆ ΓÇ£He is <span style="color:#4ade80;">keen on</span> music.ΓÇ¥</li>
        <li><strong>Exception:</strong> ΓÇ£An hourΓÇ¥ (vowel sound) vs ΓÇ£A universityΓÇ¥ (consonant sound).</li>
        <li><strong>Usage Pattern:</strong> 35% of UPSC 2023 prelims cloze items were GREΓÇæstyle vocabulary.</li>
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
        Date: 26ΓÇ»JanΓÇ»1950<br>
        Source: Constituent Assembly Debates
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

      <!-- Schedules of the Constitution -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:180px; position:relative;">
        <strong>Schedules</strong><br>
        7 (original 8) schedules<br>
        Key: UnionΓÇæState Relations, Powers, etc.
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

      <!-- Fundamental Rights -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:200px; position:relative;">
        <strong>Fundamental Rights</strong><br>
        ArticlesΓÇ»12ΓÇæ35
        <div style="margin-top:6px; font-size:0.9em; text-align:left;">
          ΓÇó Equality (ArtΓÇ»14ΓÇæ18)<br>
          ΓÇó Freedom (ArtΓÇ»19ΓÇæ22)<br>
          ΓÇó Exploitation (ArtΓÇ»23ΓÇæ24)<br>
          ΓÇó Religion (ArtΓÇ»25ΓÇæ28)<br>
          ΓÇó Cultural/Educational (ArtΓÇ»29ΓÇæ30)<br>
          ΓÇó Remedy (ArtΓÇ»32)
        </div>
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

      <!-- DPSP & Fundamental Duties -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:220px; position:relative;">
        <strong>DPSP & Fundamental Duties</strong><br>
        ArticlesΓÇ»36ΓÇæ51A
        <div style="margin-top:6px; font-size:0.9em; text-align:left;">
          ΓÇó DPSP (ArtΓÇ»36ΓÇæ44)<br>
          ΓÇó Duties (ArtΓÇ»51A) ΓÇô 11 duties
        </div>
        <div style="position:absolute; left:50%; top:100%; width:2px; height:20px; background:rgba(255,255,255,0.12); transform:translateX(-50%);"></div>
        <div style="position:absolute; left:100%; top:50%; width:30px; height:2px; background:rgba(255,255,255,0.12);"></div>
      </div>

      <!-- Citizenship -->
      <div style="background:#4ade80; color:#0f1117; padding:12px 20px; border-radius:6px; text-align:center; min-width:180px; position:relative;">
        <strong>Citizenship</strong><br>
        ArticlesΓÇ»5ΓÇæ11
        <div style="margin-top:6px; font-size:0.9em; text-align:left;">
          ΓÇó By birth, descent, registration, naturalisation
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
          President (ArtΓÇ»52ΓÇæ62)
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:140px; text-align:center; font-weight:600; margin:4px 0;">
          Prime Minister
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:140px; text-align:center; font-weight:600; margin:4px 0;">
          Governor (ArtΓÇ»153)
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
          Parliament (ArtΓÇ»79ΓÇæ122)
        </div>
        <div style="display:flex; justify-content:space-between; width:260px; margin-top:6px;">
          <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:110px; text-align:center; font-weight:600;">
            LokΓÇ»Sabha (ArtΓÇ»79)
          </div>
          <div style="background:#4ade80; color:#0f1117; padding:6px 10px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:110px; text-align:center; font-weight:600;">
            RajyaΓÇ»Sabha (ArtΓÇ»80)
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
          Supreme Court (ArtΓÇ»124)
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:180px; text-align:center; font-weight:600; margin:4px 0;">
          High Courts (ArtΓÇ»214)
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
          Panchayati Raj (73rdΓÇ»Amendment, 1992)
        </div>
        <div style="background:#4ade80; color:#0f1117; padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.12); min-width:260px; text-align:center; font-weight:600; margin:4px 0;">
          Urban Local Bodies (74thΓÇ»Amendment, 1992)
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
          Indian Constitution (Adopted 26ΓÇ»JanΓÇ»1950, Effective 26ΓÇ»JanΓÇ»1950)
        </td>
      </tr>
      <!-- Level 1 -->
      <tr>
        <td></td>
        <td colspan="4" style="background:#4ade80; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Constitutional Bodies (ArticlesΓÇ»52ΓÇæ78,ΓÇ»324,ΓÇ»280,ΓÇ»315ΓÇæ321)
        </td>
      </tr>
      <tr>
        <td></td>
        <td colspan="4" style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          NonΓÇæConstitutional Bodies (Statutory/Advisory)
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
          Constitutional Amendments (ArticlesΓÇ»368,ΓÇ»42nd,ΓÇ»44th,ΓÇ»73rd,ΓÇ»74th)
        </td>
      </tr>
      <!-- Constitutional Bodies ΓÇô Level 2 -->
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
            ViceΓÇæPresident of India
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
      <!-- Constitutional Bodies ΓÇô Details (Level 3) -->
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            President ΓÇô ArticleΓÇ»52,ΓÇ»53,ΓÇ»61; Powers: Executive, CommanderΓÇæinΓÇæChief, Appoints PM, Governors, Judges, etc.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            ViceΓÇæPresident ΓÇô ArticleΓÇ»62,ΓÇ»63; ExΓÇæofficio Chairperson of Rajya Sabha.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Parliament ΓÇô ArticlesΓÇ»79ΓÇæ122; Lok Sabha (maxΓÇ»545 members, 5ΓÇæyr term), Rajya Sabha (maxΓÇ»250, 6ΓÇæyr term, 1/3 retire every 2ΓÇ»yr).
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Supreme Court ΓÇô ArticleΓÇ»124ΓÇæ147; Highest judicial authority, Judicial Review, Original jurisdiction in disputes between Centre & States.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            High Courts ΓÇô ArticleΓÇ»214; StateΓÇælevel apex courts, jurisdiction over state matters.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Election Commission ΓÇô ArticleΓÇ»324; Conducts elections to Parliament, State Legislatures, and Presidential elections.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Finance Commission ΓÇô ArticleΓÇ»280; Recommends distribution of tax revenue between Centre & States (first appointed 1957).
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            UPSC ΓÇô ArticleΓÇ»315ΓÇæ322; Conducts Civil Services Examination, recruitment for AllΓÇæIndia Services.
          </div>
        </td><td></td><td></td>
      </tr>
      <!-- NonΓÇæConstitutional Bodies ΓÇô Level 2 -->
      <tr>
        <td></td><td></td>
        <td colspan="3" style="background:#60a5fa; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          NonΓÇæConstitutional / Statutory Bodies
        </td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #60a5fa; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            NITI Aayog (2015) ΓÇô Replaced Planning Commission; Policy thinkΓÇætank.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #60a5fa; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Comptroller and Auditor General (CAG) ΓÇô ArticleΓÇ»149; Audits government accounts.
          </div>
        </td><td></td><td></td>
      </tr>
      <!-- Emergency Provisions ΓÇô Level 2 -->
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
            National Emergency ΓÇô ArticleΓÇ»352; President may proclaim on war/armed rebellion; 0ΓÇæ6ΓÇ»months (extendable up to 3ΓÇ»years).
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #f59e0b; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            President's Rule (State Emergency) ΓÇô ArticleΓÇ»356; President may assume powers of the State if constitutional machinery fails.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #f59e0b; padding-left:12px;">
          <div style="background:#4ade80; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            Financial Emergency ΓÇô ArticleΓÇ»360; President may proclaim if financial stability threatened; never used.
          </div>
        </td><td></td><td></td>
      </tr>
      <!-- Constitutional Amendments ΓÇô Level 2 -->
      <tr>
        <td></td><td></td>
        <td colspan="3" style="background:#4ade80; color:#0f1117; font-weight:bold; padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
          Constitutional Amendments (ArticleΓÇ»368)
        </td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            42nd Amendment (1976) ΓÇô ΓÇ£MiniΓÇæConstitutionΓÇ¥; added words ΓÇ£SecularΓÇ¥ and ΓÇ£SocialistΓÇ¥ to Preamble; strengthened Parliament.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            44th Amendment (1978) ΓÇô Restored Fundamental Rights; removed ΓÇ£Judicial ReviewΓÇ¥ limits; added Right to Equality (ArticleΓÇ»15).
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            73rd Amendment (1992) ΓÇô ArticlesΓÇ»243ΓÇæ243ΓÇæ243ΓÇæ245; Panchayati Raj Institutions; 25ΓÇ»% reservation for women.
          </div>
        </td><td></td><td></td>
      </tr>
      <tr>
        <td></td><td></td>
        <td style="border-left:2px solid #4ade80; padding-left:12px;">
          <div style="background:#60a5fa; color:#0f1117; padding:4px; border:1px solid rgba(255,255,255,0.12); border-radius:3px;">
            74th Amendment (1992) ΓÇô ArticlesΓÇ»243ΓÇæ243ΓÇæ243ΓÇæ243ΓÇæ244; Municipalities; 25ΓÇ»% reservation for women.
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
      <div style="font-size:0.9rem;">Adopted: 26ΓÇ»JanuaryΓÇ»1950</div>
      <div style="font-size:0.9rem;">ArticlesΓÇ»1ΓÇæ395</div>
    </div>

    <!-- Connectors from Root to LevelΓÇæ1 -->
    <div style="width:2px; height:30px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

    <!-- LevelΓÇæ1 Container -->
    <div style="display:flex; gap:40px; flex-wrap:wrap; justify-content:center;">

      <!-- Federal Structure Branch -->
      <div style="display:flex; flex-direction:column; align-items:center;">

        <!-- Federal Structure Node -->
        <div style="background:linear-gradient(135deg,#1a1c23,#0f1117); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:16px 24px; text-align:center; min-width:240px;">
          <div style="font-size:1.3rem; font-weight:bold; color:#60a5fa;">Federal Structure</div>
        </div>

        <!-- Connector -->
        <div style="width:2px; height:20px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

        <!-- LevelΓÇæ2: CentreΓÇæState Relations -->
        <div style="background:linear-gradient(135deg,#1a1c23,#0f1117); border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px 20px; text-align:center; min-width:220px;">
          <div style="font-size:1.2rem; font-weight:bold;">CentreΓÇæState Relations</div>
        </div>

        <!-- Connector -->
        <div style="width:2px; height:20px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

        <!-- LevelΓÇæ3: Distribution of Powers -->
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">

          <!-- Legislative List (List I) -->
          <div style="background:#60a5fa33; border:1px solid #60a5fa; border-radius:6px; padding:8px 12px; min-width:200px;">
            <div style="font-weight:bold;">Legislative List (ListΓÇ»I)</div>
            <div style="font-size:0.85rem;">ArticlesΓÇ»245ΓÇæ249</div>
            <div style="font-size:0.75rem;">Subjects: Defence, Foreign Affairs, Currency, etc.</div>
          </div>

          <!-- State List (List II) -->
          <div style="background:#60a5fa33; border:1px solid #60a5fa; border-radius:6px; padding:8px 12px; min-width:200px;">
            <div style="font-weight:bold;">State List (ListΓÇ»II)</div>
            <div style="font-size:0.85rem;">ArticlesΓÇ»250ΓÇæ252</div>
            <div style="font-size:0.75rem;">Subjects: Police, Public Health, Agriculture, etc.</div>
          </div>

          <!-- Concurrent List (List III) -->
          <div style="background:#60a5fa33; border:1px solid #60a5fa; border-radius:6px; padding:8px 12px; min-width:200px;">
            <div style="font-weight:bold;">Concurrent List (ListΓÇ»III)</div>
            <div style="font-size:0.85rem;">ArticlesΓÇ»253ΓÇæ255</div>
            <div style="font-size:0.75rem;">Subjects: Criminal Law, Education, Marriage, etc.</div>
          </div>

        </div>

        <!-- Additional Federal Nodes -->
        <div style="margin-top:20px; display:flex; flex-direction:column; align-items:center; gap:10px;">

          <!-- InterΓÇæState Relations -->
          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:240px;">
            <div style="font-weight:bold;">InterΓÇæState Relations</div>
            <div style="font-size:0.85rem;">ArticleΓÇ»263</div>
            <div style="font-size:0.75rem;">Dispute settlement by Supreme Court</div>
          </div>

          <!-- Finance Commission -->
          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:240px;">
            <div style="font-weight:bold;">Finance Commission</div>
            <div style="font-size:0.85rem;">ArticleΓÇ»280</div>
            <div style="font-size:0.75rem;">Distribution of taxes between Centre &amp; States</div>
          </div>

          <!-- Emergency Provisions -->
          <div style="background:#f59e0b33; border:1px solid #f59e0b; border-radius:6px; padding:8px 12px; min-width:240px;">
            <div style="font-weight:bold;">Emergency Provisions</div>
            <div style="font-size:0.85rem;">ArticlesΓÇ»352,ΓÇ»360,ΓÇ»363</div>
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

        <!-- LevelΓÇæ2: Election Commission of India -->
        <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:12px 20px; text-align:center; min-width:260px;">
          <div style="font-weight:bold;">Election Commission of India (ECI)</div>
          <div style="font-size:0.85rem;">ArticleΓÇ»324</div>
          <div style="font-size:0.75rem;">Chief Election Commissioner + 2 Members (appointed by President)</div>
        </div>

        <!-- Connector -->
        <div style="width:2px; height:20px; background:rgba(255,255,255,0.12); margin:5px 0;"></div>

        <!-- LevelΓÇæ3: Powers & Functions -->
        <div style="display:flex; flex-direction:column; align-items:center; gap:12px;">

          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:280px;">
            <div style="font-weight:bold;">Powers</div>
            <ul style="margin:4px 0 0 18px; padding:0; list-style-type:disc; font-size:0.78rem;">
              <li>Supervise & conduct elections (ArtΓÇ»324)</li>
              <li>Prepare & revise electoral rolls</li>
              <li>Enforce Model Code of Conduct</li>
              <li>Allocate election symbols</li>
            </ul>
          </div>

          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:280px;">
            <div style="font-weight:bold;">Representation of the People Act,ΓÇ»1951 (RPA)</div>
            <ul style="margin:4px 0 0 18px; padding:0; list-style-type:disc; font-size:0.78rem;">
              <li>SectionΓÇ»7 ΓÇô Voter eligibility (ageΓÇ»18+)</li>
              <li>SectionΓÇ»70 ΓÇô Election schedule</li>
              <li>SectionΓÇ»96 ΓÇô Disqualification of MPs/MLAs</li>
              <li>Amended by 73rd & 74th Amendments (1992)</li>
            </ul>
          </div>

          <div style="background:#4ade8033; border:1px solid #4ade80; border-radius:6px; padding:8px 12px; min-width:280px;">
            <div style="font-weight:bold;">Election Cycle</div>
            <div style="font-size:0.85rem;">General Elections ΓÇô everyΓÇ»5ΓÇ»years (last:ΓÇ»2019, next:ΓÇ»2024)</div>
            <div style="font-size:0.85rem;">State Assembly Elections ΓÇô 5ΓÇæyear term, staggered</div>
            <div style="font-size:0.85rem;">Lok Sabha Seats ΓÇô 543 constituencies</div>
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
    
    <!-- Event 1: 3000ΓÇ»BCE ΓÇô Early historiography (Sumerian King List) -->
    <div style="position:absolute; left:5%; top:150px; width:220px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>3000ΓÇ»BCE</strong><br>
        <em>Sumerian King List</em><br>
        Earliest known ΓÇ£chronicleΓÇ¥ of rulers.
      </div>
    </div>
    
    <!-- Event 2: 500ΓÇ»BCE ΓÇô Herodotus writes ΓÇ£HistoriesΓÇ¥ -->
    <div style="position:absolute; left:15%; top:340px; width:240px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>500ΓÇ»BCE</strong><br>
        <em>Herodotus ΓÇô ΓÇ£HistoriesΓÇ¥</em><br>
        First systematic inquiry into causes of events.
      </div>
    </div>
    
    <!-- Event 3: 1000ΓÇ»CE ΓÇô IbnΓÇ»KhaldunΓÇÖs Muqaddimah -->
    <div style="position:absolute; left:27%; top:150px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1000ΓÇ»CE</strong><br>
        <em>IbnΓÇ»Khaldun ΓÇô ΓÇ£MuqaddimahΓÇ¥</em><br>
        Theory of historiography &amp; sociology of history.
      </div>
    </div>
    
    <!-- Event 4: 1857 ΓÇô First War of Independence -->
    <div style="position:absolute; left:38%; top:340px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1857</strong><br>
        <em>First War of Independence</em><br>
        Shift from colonial to nationalist narratives.
      </div>
    </div>
    
    <!-- Event 5: 1919 ΓÇô Jallianwala Bagh Massacre -->
    <div style="position:absolute; left:50%; top:150px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1919</strong><br>
        <em>Jallianwala Bagh</em><br>
        Catalyst for modern Indian historiography.
      </div>
    </div>
    
    <!-- Event 6: 1946 ΓÇô ΓÇ£The Discovery of IndiaΓÇ¥ by JawaharlalΓÇ»Nehru -->
    <div style="position:absolute; left:62%; top:340px; width:300px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1946</strong><br>
        <em>JawaharlalΓÇ»Nehru ΓÇô ΓÇ£The Discovery of IndiaΓÇ¥</em><br>
        First major synthesis of Indian history by a political leader.
      </div>
    </div>
    
    <!-- Event 7: 1950 ΓÇô Constitution of India (Art.ΓÇ»21) -->
    <div style="position:absolute; left:73%; top:150px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1950</strong><br>
        <em>Constitution ΓÇô Art.ΓÇ»21</em><br>
        ΓÇ£Right to life &amp; personal libertyΓÇ¥ ΓÇô later a focal point for humanΓÇærights history.
      </div>
    </div>
    
    <!-- Event 8: 1958 ΓÇô Archaeological Survey of India (ASI) Act -->
    <div style="position:absolute; left:82%; top:340px; width:280px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1958</strong><br>
        <em>ASI Act</em><br>
        Legal framework for protection of archaeological sources.
      </div>
    </div>
    
    <!-- Event 9: 1975 ΓÇô BipanΓÇ»ChandraΓÇÖs ΓÇ£History of Indian Freedom MovementΓÇ¥ -->
    <div style="position:absolute; left:92%; top:150px; width:300px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1975</strong><br>
        <em>BipanΓÇ»Chandra ΓÇô ΓÇ£History of Indian Freedom MovementΓÇ¥</em><br>
        Standard reference for modern Indian historiography.
      </div>
    </div>
    
    <!-- Event 10: 1990 ΓÇô RomilaΓÇ»ThaparΓÇÖs ΓÇ£Early IndiaΓÇ¥ -->
    <div style="position:absolute; left:105%; top:340px; width:260px;">
      <div style="width:14px; height:14px; background:#4ade80; border-radius:50%; margin:auto;"></div>
      <div style="margin-top:8px; background:rgba(255,255,255,0.08); padding:8px; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
        <strong>1990</strong><br>
        <em>RomilaΓÇ»Thapar ΓÇô ΓÇ£Early IndiaΓÇ¥</em><br>
        Critical analysis of ancient sources &amp; dating.
      </div>
    </div>
    
    <!-- Dating Systems Sidebar -->
    <div style="position:absolute; left:115%; top:100px; width:340px; background:#0f1117; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px;">
      <h3 style="margin:0 0 8px 0; color:#4ade80; font-size:1.2rem;">Dating Systems</h3>
      <ul style="margin:0; padding-left:20px; line-height:1.5;">
        <li><strong>Gregorian Calendar</strong> ΓÇô AD/BC (e.g., 2023ΓÇ»AD)</li>
        <li><strong>Saka Era</strong> ΓÇô YearΓÇ»S = GregorianΓÇ»YΓÇ»ΓêÆΓÇ»78<br><span style="color:#60a5fa;">Formula: Y = S + 78</span></li>
        <li><strong>Vikram Samvat</strong> ΓÇô YearΓÇ»VS = GregorianΓÇ»YΓÇ»+ΓÇ»57 (VSΓÇ»2078 ΓëêΓÇ»2021ΓÇ»AD)</li>
        <li><strong>Hijri (Islamic) Calendar</strong> ΓÇô Lunar, 622ΓÇ»AD = 1ΓÇ»AH</li>
        <li><strong>Indian Epigraphic Dates</strong> ΓÇô Regnal years, e.g., ΓÇ£12th year of AshokaΓÇ¥</li>
      </ul>
    </div>
    
  </div>
</div>
`;

DIAGRAMS_DB["history__prehistoric-india"] = `
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:20px;">
  <!-- Title Bar -->
  <div style="background:#4ade80; color:#0f1117; padding:12px 20px; font-size:1.5em; font-weight:bold; border-radius:6px; text-align:center; margin-bottom:30px;">
    2.ΓÇ»PrehistoricΓÇ»India
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
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c.ΓÇ»2.5ΓÇ»MyrΓÇ»ΓÇôΓÇ»10ΓÇ»kΓÇ»BCE</div>
        <div style="margin-top:4px; font-weight:bold;">LowerΓÇ»Paleolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          HandΓÇæaxes, choppers, &amp; bifaces (Oldowan &amp; Acheulean).<br>
          First stone tool use by HomoΓÇ»erectus.
        </div>
      </div>

      <!-- Middle Paleolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c.ΓÇ»1.5ΓÇ»MyrΓÇ»ΓÇôΓÇ»300ΓÇ»kΓÇ»BCE</div>
        <div style="margin-top:4px; font-weight:bold;">MiddleΓÇ»Paleolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Mousterian tool kit ΓÇô Levallois technique.<br>
          Evidence of hunting large fauna.
        </div>
      </div>

      <!-- Upper Paleolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c.ΓÇ»300ΓÇ»kΓÇ»ΓÇôΓÇ»10ΓÇ»kΓÇ»BCE</div>
        <div style="margin-top:4px; font-weight:bold;">UpperΓÇ»Paleolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Blade &amp; microlithic technology.<br>
          Cave paintings ΓÇô Bhimbetka (ΓëêΓÇ»100ΓÇ»kΓÇ»years).<br>
          First use of bone &amp; antler tools.
        </div>
      </div>

      <!-- Mesolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c.ΓÇ»10ΓÇ»kΓÇ»ΓÇôΓÇ»4ΓÇ»kΓÇ»BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Mesolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Microlithic bladelets (Geometric &amp; NonΓÇægeometric).<br>
          SemiΓÇænomadic hunterΓÇægatherers.<br>
          Sites: Bagor (Rajasthan), Langhnaj (Gujarat).
        </div>
      </div>

      <!-- Neolithic -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c.ΓÇ»4ΓÇ»kΓÇ»ΓÇôΓÇ»2.5ΓÇ»kΓÇ»BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Neolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Agriculture &amp; domestication of cattle, sheep, goat.<br>
          Pottery (handΓÇæmade &amp; wheelΓÇæturned).<br>
          Settlements: Mehrgarh (ΓëêΓÇ»7ΓÇ»kΓÇ»BCE), Burzahom, Koldihawa.
        </div>
      </div>

      <!-- Chalcolithic (Copper Age) -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">c.ΓÇ»3ΓÇ»kΓÇ»ΓÇôΓÇ»1.5ΓÇ»kΓÇ»BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Chalcolithic</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          First use of copper implements (awls, knives).<br>
          Distinct pottery styles ΓÇô BlackΓÇæandΓÇæred ware, OchreΓÇæfilled.<br>
          Burial mounds (Barabar, Jorwe) &amp; early urban centres.
        </div>
      </div>

      <!-- Rock Art (Bhimbetka) -->
      <div style="flex:0 0 auto; text-align:center; position:relative;">
        <div style="width:20px; height:20px; border-radius:50%; background:#4ade80; margin:0 auto;"></div>
        <div style="margin-top:8px; font-size:0.9em; color:#60a5fa;">ΓëêΓÇ»100ΓÇ»kΓÇ»yearsΓÇ»BCE</div>
        <div style="margin-top:4px; font-weight:bold;">Rock Art</div>
        <div style="margin-top:6px; font-size:0.85em; line-height:1.4;">
          Bhimbetka rock shelters ΓÇô >ΓÇ»750 panels.<br>
          Motifs: hunting scenes, animal tracks, dancing figures.<br>
          UNESCO World Heritage (2003).
        </div>
      </div>

    </div>
  </div>

  <!-- Footer Note -->
  <div style="margin-top:30px; font-size:0.85em; color:#60a5fa; text-align:center;">
    Source: NCERT ClassΓÇ»IX ΓÇô History, ChapterΓÇ»2; Archaeological Survey of India (ASI) reports.
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
        3300ΓÇô1300ΓÇ»BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Indus Valley Civilization</strong><br>
        ΓÇó Major sites: Harappa, MohenjoΓÇædaro, Dholavira<br>
        ΓÇó Urban planning: grid streets, brick houses, drainage<br>
        ΓÇó Script undeciphered (Γëê400ΓÇ»symbols)<br>
        ΓÇó Trade with Mesopotamia (c. 2500ΓÇ»BCE)
      </div>
    </div>

    <!-- Vedic Age -->
    <div style="position:absolute; left:18%; top:0; width:220px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        1500ΓÇô500ΓÇ»BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Vedic Age</strong><br>
        ΓÇó Texts: RigΓÇæVeda, Samaveda, YajurΓÇæVeda, AtharvaΓÇæVeda<br>
        ΓÇó Society: ß╣Üß╣úiΓÇæguruΓÇæ┼¢iß╣úya system, varna emergence<br>
        ΓÇó Economy: pastoralism ΓåÆ early agriculture<br>
        ΓÇó Early iron use (c. 1200ΓÇ»BCE)
      </div>
    </div>

    <!-- Mahajanapadas -->
    <div style="position:absolute; left:31%; top:0; width:220px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        600ΓÇô300ΓÇ»BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Mahajanapadas</strong><br>
        ΓÇó 16 major kingdoms (e.g., Kuru, Kosala, Vatsa)<br>
        ΓÇó Rise of republican states (e.g., Vrijji)<br>
        ΓÇó ArthashastraΓÇæprecursor: KautilyaΓÇÖs early ideas<br>
        ΓÇó Urban centres: Taxila, Pataliputra
      </div>
    </div>

    <!-- Magadha Expansion -->
    <div style="position:absolute; left:44%; top:0; width:240px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        500ΓÇô300ΓÇ»BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Magadha Expansion</strong><br>
        ΓÇó Kings: Bimbis─üra (c.ΓÇ»492ΓÇô460ΓÇ»BCE), Aj─ütasattu (c.ΓÇ»491ΓÇô460ΓÇ»BCE)<br>
        ΓÇó Capital: Pataliputra (modern Patna)<br>
        ΓÇó Conquest of Anga, Vatsa, and parts of Kosala<br>
        ΓÇó Introduction of ironΓÇæworking & large army (Γëê10ΓÇ»000 infantry)
      </div>
    </div>

    <!-- Buddhism & Jainism -->
    <div style="position:absolute; left:57%; top:0; width:260px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        6thΓÇ»centuryΓÇ»BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Buddhism & Jainism</strong><br>
        ΓÇó Siddh─ürtha Gautama (563ΓÇô483ΓÇ»BCE) ΓÇô Four Noble Truths, Eightfold Path<br>
        ΓÇó Mah─üv─½ra (599ΓÇô527ΓÇ»BCE) ΓÇô 12ΓÇ»vows, kevalaΓÇæjnana<br>
        ΓÇó First Buddhist council (c.ΓÇ»400ΓÇ»BCE) ΓÇô Compilation of SuttaΓÇæPitaka<br>
        ΓÇó Spread via AshokaΓÇÖs missions (260ΓÇ»BCE)
      </div>
    </div>

    <!-- Mauryan Period -->
    <div style="position:absolute; left:70%; top:0; width:240px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        322ΓÇô185ΓÇ»BCE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Mauryan Empire</strong><br>
        ΓÇó Founder: ChandraguptaΓÇ»Maurya (322ΓÇô298ΓÇ»BCE)<br>
        ΓÇó Prime Minister: Kautilya (author of Arthashastra)<br>
        ΓÇó Ashoka (268ΓÇô232ΓÇ»BCE) ΓÇô 12ΓÇ»Edicts, Dhamma policy<br>
        ΓÇó Capital: Pataliputra; army Γëê600ΓÇ»000<br>
        ΓÇó Administration: provinces (Mah─üsabh─ü), taxΓÇæfree zones
      </div>
    </div>

    <!-- PostΓÇæMauryan India -->
    <div style="position:absolute; left:83%; top:0; width:260px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        185ΓÇ»BCEΓÇô320ΓÇ»CE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>PostΓÇæMauryan India</strong><br>
        ΓÇó Shunga dynasty (185ΓÇô73ΓÇ»BCE) ΓÇô Pushyamukha, patron of art<br>
        ΓÇó Satavahana (c.ΓÇ»1stΓÇ»centuryΓÇ»BCEΓÇô3rdΓÇ»centuryΓÇ»CE) ΓÇô Trade with Rome, Buddhism patronage<br>
        ΓÇó IndoΓÇæGreek & Kushan contacts (c.ΓÇ»1stΓÇ»centuryΓÇ»CE)<br>
        ΓÇó Development of Sanskrit drama (Kalidasa, 4thΓÇ»centuryΓÇ»CE)
      </div>
    </div>

    <!-- Gupta Period -->
    <div style="position:absolute; left:96%; top:0; width:240px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        320ΓÇô550ΓÇ»CE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>Gupta Empire</strong><br>
        ΓÇó ChandraguptaΓÇ»I (c.ΓÇ»320ΓÇô335ΓÇ»CE) ΓÇô Marriage alliance with Lichchhavis<br>
        ΓÇó Samudragupta (c.ΓÇ»335ΓÇô380ΓÇ»CE) ΓÇô 8ΓÇ»goldenΓÇæplate inscriptions<br>
        ΓÇó Golden Age: literature (Kalidasa), science (─Çryabhaß╣¡a, 476ΓÇ»CE), art (Ajanta caves)<br>
        ΓÇó Decimal system, concept of zero (Brahmagupta, 628ΓÇ»CE ΓÇô postΓÇæGupta)
      </div>
    </div>

    <!-- South Indian Kingdoms -->
    <div style="position:absolute; left:109%; top:0; width:260px;">
      <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:2px; height:30px; background:#e2e8f0;"></div>
      <div style="background:#60a5fa; color:#0f1117; padding:6px; border-radius:4px; text-align:center; font-weight:600;">
        3rdΓÇ»c.ΓÇ»BCEΓÇô1300ΓÇ»CE
      </div>
      <div style="background:#4ade80; color:#0f1117; margin-top:8px; padding:10px; border-radius:6px;">
        <strong>South Indian Kingdoms</strong><br>
        ΓÇó Early Cholas, Cheras, Pandyas (Sangam period)<br>
        ΓÇó Pallava dynasty (c.ΓÇ»275ΓÇô897ΓÇ»CE) ΓÇô rockΓÇæcut temples at Mahabalipuram<br>
        ΓÇó Later Cholas (985ΓÇô1192ΓÇ»CE) ΓÇô RajarajaΓÇ»I, temple of Brihadeeswarar<br>
        ΓÇó Maritime trade: Southeast Asia, Arab world
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
        ΓÇó Literature: Vedas, Upanishads, Mahabharata (c.ΓÇ»400ΓÇ»BCE), Ramayana (c.ΓÇ»200ΓÇ»BCE)<br>
        ΓÇó Mathematics: Sulbas┼½tras (Γëê800ΓÇ»BCE) ΓÇô geometry, Pythagorean triples<br>
        ΓÇó Architecture: Stupa (Sanchi, 3rdΓÇ»c.ΓÇ»BCE), temples (Kailasa, 8thΓÇ»c.ΓÇ»CE)<br>
        ΓÇó Music & Dance: NatyaΓÇæShastra (2ndΓÇ»c.ΓÇ»CE)<br>
        ΓÇó Science: Ayurveda (Charaka, Sushruta), astronomy (─Çryabhaß╣¡a)
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
        Early Medieval India (c. 6thΓÇæ12thΓÇ»CE)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #60a5fa; border-radius:4px;">
        <strong>Harsha (c.ΓÇ»606ΓÇæ647)</strong> ΓÇô Consolidated northΓÇæcentral India; patron of Buddhism.<br>
        <strong>Chola Revival (850ΓÇæ1279)</strong> ΓÇô RajarajaΓÇ»I (985ΓÇæ1014) and RajendraΓÇ»I (1014ΓÇæ1044) expanded southΓÇæeast maritime trade.<br>
        <strong>Rise of Regional Kingdoms</strong> ΓÇô Pala (8thΓÇæ12thΓÇ»CE) in Bengal, Rashtrakuta (8thΓÇæ10thΓÇ»CE) in Deccan.
      </div>
    </div>

    <!-- Delhi Sultanate -->
    <div style="position:relative; width:45%; margin:20px 0; right:0;">
      <div style="background:#60a5fa; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold; text-align:right;">
        Delhi Sultanate (1206ΓÇæ1526)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-right:4px solid #60a5fa; border-radius:4px; text-align:right;">
        <strong>Qutb alΓÇæDin Aibak (1206ΓÇæ1210)</strong> ΓÇô Founder of the Mamluk (Slave) dynasty.<br>
        <strong>Iltutmish (1211ΓÇæ1236)</strong> ΓÇô Consolidated Delhi, introduced the silver <em>Taka</em> coin.<br>
        <strong>Balban (1266ΓÇæ1287)</strong> ΓÇô Strengthened central authority; introduced <em>IqtaΓÇÖ</em> system.<br>
        <strong>Tughlaq Dynasty (1320ΓÇæ1398)</strong> ΓÇô MuhammadΓÇ»binΓÇ»Tughlaq (1325ΓÇæ1351) ΓÇô Introduced token currency (<em>Firoz</em>), attempted relocation of capital to Daulatabad.<br>
        <strong>Sayyid & Lodi Dynasties (1414ΓÇæ1526)</strong> ΓÇô Ibrahim Lodi defeated at <strong>Battle of Panipat (1526)</strong>.
      </div>
    </div>

    <!-- Vijayanagara Empire -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#4ade80; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Vijayanagara Empire (1336ΓÇæ1646)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #4ade80; border-radius:4px;">
        <strong>Founders</strong> ΓÇô Harihara I & Bukka Raya I (c.ΓÇ»1336ΓÇæ1377).<br>
        <strong>Krishna Deva Raya (1509ΓÇæ1529)</strong> ΓÇô Golden age; patron of literature (e.g., <em>Mahabharata</em> translation).<br>
        <strong>Battle of Talikota (1565)</strong> ΓÇô Defeat by Deccan Sultanates; marked decline.<br>
        <strong>Architectural legacy</strong> ΓÇô Hampi ruins; stone chariot, Vittala Temple.
      </div>
    </div>

    <!-- Bahmani Kingdom & Deccan Sultanates -->
    <div style="position:relative; width:45%; margin:20px 0; right:0;">
      <div style="background:#4ade80; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold; text-align:right;">
        Bahmani Kingdom (1347ΓÇæ1527) & Deccan Sultanates (1527ΓÇæ1687)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-right:4px solid #4ade80; border-radius:4px; text-align:right;">
        <strong>AlaΓÇæudΓÇæDin Bahman Shah (1347ΓÇæ1358)</strong> ΓÇô Founder; capital at Gulbarga.<br>
        <strong>Division (1527)</strong> ΓÇô Ahmadnagar, Bijapur, Golconda, Berar, Bidar.<br>
        <strong>Key figures</strong> ΓÇô Ibrahim Adil Shah II of Bijapur (1580ΓÇæ1627) ΓÇô patron of music.<br>
        <strong>Architectural highlights</strong> ΓÇô Golconda Fort, Charminar (1591).
      </div>
    </div>

    <!-- Mughal Empire -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#60a5fa; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Mughal Empire (1526ΓÇæ1857)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #60a5fa; border-radius:4px;">
        <strong>Babur (1526ΓÇæ1530)</strong> ΓÇô Victory at <em>PanipatΓÇ»I</em> (1526); introduced <em>Timurid</em> art.<br>
        <strong>Akbar (1556ΓÇæ1605)</strong> ΓÇô Policy of <em>SulhΓÇæeΓÇæKul</em>, establishment of <em>Din-iΓÇæIlahi</em>, built Fatehpur Sikri (1586).<br>
        <strong>ShahΓÇ»Jahan (1628ΓÇæ1658)</strong> ΓÇô Built TajΓÇ»Mahal (1632ΓÇæ1653).<br>
        <strong>Aurangzeb (1658ΓÇæ1707)</strong> ΓÇô Expansion to Deccan; imposed stricter Sharia; death of <em>GuruΓÇ»GobindΓÇ»Singh</em> (1699).<br>
        <strong>Decline</strong> ΓÇô Battle of <em>Plassey</em> (1757) marks beginning of British dominance.
      </div>
    </div>

    <!-- Maratha Empire -->
    <div style="position:relative; width:45%; margin:20px 0; right:0;">
      <div style="background:#4ade80; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold; text-align:right;">
        Maratha Empire (1674ΓÇæ1818)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-right:4px solid #4ade80; border-radius:4px; text-align:right;">
        <strong>Shivaji (1674ΓÇæ1680)</strong> ΓÇô Founder; coronated at Raigad (1674); introduced <em>Ashta Pradhan</em> council.<br>
        <strong>Peshwa Era (1713ΓÇæ1818)</strong> ΓÇô Balaji Vishwanath (1713ΓÇæ1720), Bajirao I (1720ΓÇæ1740) ΓÇô expanded northΓÇæwest.<br>
        <strong>Third Battle of Panipat (1761)</strong> ΓÇô Defeat by Ahmad Shah Durrani; heavy losses.<br>
        <strong>Treaty of Bassein (1802)</strong> ΓÇô Marked British suzerainty.
      </div>
    </div>

    <!-- Bhakti Movement -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#f59e0b; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Bhakti Movement (8thΓÇæ17thΓÇ»CE)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #f59e0b; border-radius:4px;">
        <strong>Early Saints</strong> ΓÇô Ramanuja (1017ΓÇæ1137) ΓÇô Vishishtadvaita; Nimbarka (c.ΓÇ»12thΓÇ»CE).<br>
        <strong>North Indian Saints</strong> ΓÇô Kabir (1440ΓÇæ1518), GuruΓÇ»Nanak (1469ΓÇæ1539) ΓÇô foundation of Sikhism.<br>
        <strong>South Indian Saints</strong> ΓÇô PurandaraΓÇ»Dasa (1484ΓÇæ1564), Tyagaraja (1767ΓÇæ1847) ΓÇô Carnatic music.<br>
        <strong>Key Texts</strong> ΓÇô <em>Guru Granth Sahib</em> (compiled 1604), <em>Bhaktamal</em> (16thΓÇ»CE).
      </div>
    </div>

    <!-- Sufi Movement -->
    <div style="position:relative; width:45%; margin:20px 0; right:0;">
      <div style="background:#f59e0b; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold; text-align:right;">
        Sufi Movement (12thΓÇæ17thΓÇ»CE)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-right:4px solid #f59e0b; border-radius:4px; text-align:right;">
        <strong>Khwaja Moinuddin Chishti (1141ΓÇæ1230)</strong> ΓÇô Established the Chishti order in Ajmer; shrine a major pilgrimage site.<br>
        <strong>Nizamuddin Auliya (1238ΓÇæ1325)</strong> ΓÇô Promoted tolerance; composed <em>Qawwali</em>.<br>
        <strong>ShahΓÇ»Nizamuddin (14thΓÇæ15thΓÇ»CE)</strong> ΓÇô Spread of Suhrawardi order in Bengal.<br>
        <strong>Impact</strong> ΓÇô Syncretic culture; influence on Bhakti saints.
      </div>
    </div>

    <!-- Sikh History -->
    <div style="position:relative; width:45%; margin:20px 0; left:0;">
      <div style="background:#4ade80; color:#0f1117; padding:10px 15px; border-radius:4px; font-weight:bold;">
        Sikh History (1469ΓÇæ1708)
      </div>
      <div style="margin-top:8px; background:#1e293b; padding:10px 15px; border-left:4px solid #4ade80; border-radius:4px;">
        <strong>Guru Nanak (1469ΓÇæ1539)</strong> ΓÇô Founded Sikhism; composed <em>Japji Sahib</em>.<br>
        <strong>Guru Gobind Singh (1666ΓÇæ1708)</strong> ΓÇô Established the Khalsa (1699); introduced Five Ks.<br>
        <strong>Key Events</strong> ΓÇô Battle of Amritsar (1634), martyrdom of Guru Tegh Bahadur (1675).<br>
        <strong>Texts</strong> ΓÇô <em>Guru Granth Sahib</em> (finalized 1604); <em>Dasam Granth</em>.
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
      <div style="font-size:14px;">Vasco da Gama lands at Calicut ΓÇô First European contact</div>
    </div>

    <div style="position:absolute; left:8%; top:200px; width:200px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1600</div>
      <div style="font-size:14px;">East India Company chartered ΓÇô Begins trade & foothold</div>
    </div>

    <div style="position:absolute; left:15%; top:0; width:220px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1757</div>
      <div style="font-size:14px;">Battle of Plassey ΓÇô Robert Clive establishes British political power</div>
    </div>

    <div style="position:absolute; left:22%; top:200px; width:240px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1765</div>
      <div style="font-size:14px;">Diwani of Bengal granted ΓÇô Revenue collection rights</div>
    </div>

    <div style="position:absolute; left:30%; top:0; width:260px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1773</div>
      <div style="font-size:14px;">Regulating Act ΓÇô First ParliamentΓÇælike council (GovernorΓÇæGeneral)</div>
    </div>

    <div style="position:absolute; left:38%; top:200px; width:260px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1784</div>
      <div style="font-size:14px;">PittΓÇÖs India Act ΓÇô Dual control (Parliament + East India Company)</div>
    </div>

    <div style="position:absolute; left:46%; top:0; width:260px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1833</div>
      <div style="font-size:14px;">Charter Act ΓÇô Centralised administration; ΓÇÿNo Indian can hold officeΓÇªΓÇÖ</div>
    </div>

    <div style="position:absolute; left:54%; top:200px; width:280px; text-align:center;">
      <div style="background:#60a5fa; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1857</div>
      <div style="font-size:14px;">The Revolt (Sepoy Mutiny) ΓÇô First largeΓÇæscale Indian uprising</div>
    </div>

    <div style="position:absolute; left:62%; top:0; width:300px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1858ΓÇæ1947</div>
      <div style="font-size:14px;">British Crown rule ΓÇô Viceroys (e.g., Lord Canning 1858ΓÇæ1862, ViceroyΓÇæLord Curzon 1899ΓÇæ1905)</div>
    </div>

    <div style="position:absolute; left:71%; top:200px; width:320px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1905ΓÇæ1915</div>
      <div style="font-size:14px;">SocioΓÇæReligious Reform ΓÇô Brahmo Samaj (Raja Ram Mohan Roy), Arya Samaj (Swami Dayananda Saraswati, 1875), Aligarh Movement (Sir Syed Ahmad Khan, 1875)</div>
    </div>

    <div style="position:absolute; left:80%; top:0; width:340px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1919ΓÇæ1942</div>
      <div style="font-size:14px;">Freedom Movement ΓÇô Jallianwala Bagh (13ΓÇæAprΓÇæ1919), NonΓÇæCooperation (1920ΓÇæ22), Civil Disobedience (1930ΓÇæ34), Quit India (1942)</div>
    </div>

    <div style="position:absolute; left:90%; top:200px; width:360px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1947ΓÇæ1950</div>
      <div style="font-size:14px;">PostΓÇæIndependence Consolidation ΓÇô Partition (AugΓÇæ1947), Republic of India (26ΓÇæJanΓÇæ1950, Constitution Art.ΓÇ»1ΓÇæ395)</div>
    </div>

    <div style="position:absolute; left:100%; top:0; width:380px; text-align:center;">
      <div style="background:#4ade80; color:#0f1117; padding:8px; border-radius:4px; margin-bottom:8px;">1962ΓÇæ1991</div>
      <div style="font-size:14px;">Key Events ΓÇô SinoΓÇæIndian War (1962), IndoΓÇæPak wars (1965, 1971), Economic Liberalisation (1991)</div>
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
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1789ΓÇæ1799</div>
      <div style="margin-top:4px; font-size:13px;">French Revolution</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>ΓÜö∩╕Å Fall of Bastille (14ΓÇ»JulΓÇ»1789)</li>
        <li>≡ƒù╜ Declaration of the Rights of Man (26ΓÇ»AugΓÇ»1789)</li>
        <li>≡ƒææ Execution of LouisΓÇ»XIV (21ΓÇ»JanΓÇ»1793)</li>
      </ul>
    </div>
    
    <!-- Event 2 -->
    <div style="position:absolute; left:300px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1914ΓÇæ1918</div>
      <div style="margin-top:4px; font-size:13px;">World WarΓÇ»I</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>≡ƒùô∩╕Å Assassination of Archduke Franz Ferdinand (28ΓÇ»JunΓÇ»1914)</li>
        <li>ΓÜö∩╕Å Trench Warfare on Western Front</li>
        <li>≡ƒô£ Treaty of Versailles (28ΓÇ»JunΓÇ»1919)</li>
        <li>≡ƒ¬Ö Reparations:ΓÇ»┬úΓÇ»20ΓÇ»billion (ΓëêΓÇ»USΓÇ»$ΓÇ»4.5ΓÇ»bn)</li>
      </ul>
    </div>
    
    <!-- Event 3 -->
    <div style="position:absolute; left:600px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1919ΓÇæ1939</div>
      <div style="margin-top:4px; font-size:13px;">Interwar Period</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>≡ƒ¢á∩╕Å League of Nations (est.ΓÇ»1920)</li>
        <li>≡ƒÆ╣ Great Depression (1929)</li>
        <li>≡ƒù│∩╕Å Rise of totalitarian regimes: Hitler (1933), Mussolini (1922)</li>
        <li>ΓÜû∩╕Å Locarno Treaties (1925)</li>
      </ul>
    </div>
    
    <!-- Event 4 -->
    <div style="position:absolute; left:900px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1939ΓÇæ1945</div>
      <div style="margin-top:4px; font-size:13px;">World WarΓÇ»II</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>ΓÜö∩╕Å Invasion of Poland (1ΓÇ»SepΓÇ»1939)</li>
        <li>≡ƒº¿ Pearl Harbor (7ΓÇ»DecΓÇ»1941)</li>
        <li>≡ƒÜÇ Manhattan Project (1942ΓÇæ1945)</li>
        <li>≡ƒòè∩╕Å UN Charter signed (26ΓÇ»JunΓÇ»1945)</li>
        <li>≡ƒÆÇ Holocaust: ~6ΓÇ»million Jews</li>
      </ul>
    </div>
    
    <!-- Event 5 -->
    <div style="position:absolute; left:1200px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1945ΓÇæ1991</div>
      <div style="margin-top:4px; font-size:13px;">Cold War</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>≡ƒùô∩╕Å Truman Doctrine (12ΓÇ»MarΓÇ»1947)</li>
        <li>≡ƒ¢í∩╕Å NATO formed (4ΓÇ»AprΓÇ»1949)</li>
        <li>≡ƒÜÇ Space Race: Sputnik (4ΓÇ»OctΓÇ»1957)</li>
        <li>≡ƒºè Cuban Missile Crisis (OctΓÇ»1962)</li>
        <li>≡ƒòè∩╕Å INF Treaty (8ΓÇ»DecΓÇ»1987)</li>
        <li>≡ƒ¬ª USSR dissolution (26ΓÇ»DecΓÇ»1991)</li>
      </ul>
    </div>
    
    <!-- Event 6 -->
    <div style="position:absolute; left:1500px; width:260px; text-align:center;">
      <div style="width:20px; height:20px; background:#4ade80; border-radius:50%; margin:0 auto; border:4px solid #0f1117;"></div>
      <div style="margin-top:10px; font-size:14px; font-weight:bold; color:#4ade80;">1945ΓÇæPresent</div>
      <div style="margin-top:4px; font-size:13px;">International Institutions</div>
      <ul style="list-style:none; padding:0; margin:6px 0 0 0; font-size:12px; text-align:left;">
        <li>≡ƒƒª United Nations (ArticleΓÇ»2ΓÇ»(4) ΓÇô prohibition of force)</li>
        <li>≡ƒƒª World Bank (est.ΓÇ»1944)</li>
        <li>≡ƒƒª IMF (est.ΓÇ»1945)</li>
        <li>≡ƒƒª WTO (1995)</li>
        <li>≡ƒƒª Climate Agreement ΓÇô Paris Accord (2015)</li>
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
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">2600ΓÇæ1900ΓÇ»BCE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>IndusΓÇæValley Civilization</strong><br>
          <em>Architecture:</em> GridΓÇæplanned cities (MohenjoΓÇæDaro, Harappa), Great Bath, bakedΓÇæbrick houses.<br>
          <em>Artifacts:</em> Terracotta figurines, seals with early script.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Mauryan Empire -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">322ΓÇæ185ΓÇ»BCE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Mauryan Empire (Ashoka)</strong><br>
          <em>Architecture:</em> Ashoka Pillar at Sarnath (c.ΓÇ»250ΓÇ»BCE), stone edicts, stupas (e.g., Sanchi).<br>
          <em>Religion:</em> Promotion of Buddhism ΓÇô first stateΓÇæsponsored religious art.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Gupta Period -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">320ΓÇæ550ΓÇ»CE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Gupta Golden Age</strong><br>
          <em>Paintings:</em> Ajanta Caves (5thΓÇ»century) ΓÇô frescoes depicting Jataka tales.<br>
          <em>Literature:</em> KalidasaΓÇÖs ΓÇ£ShakuntalaΓÇ¥, ΓÇ£Meghad┼½taΓÇ¥.<br>
          <em>Dance/Music:</em> Early forms of Bharatanatyam & classical ragas.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Chola Dynasty -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">850ΓÇæ1279ΓÇ»CE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Chola Empire (South India)</strong><br>
          <em>Architecture:</em> Brihadeeswarar Temple, Thanjavur (1010ΓÇ»CE) ΓÇô towering vimana, intricate stone carvings.<br>
          <em>Bronze:</em> Nataraja statues (c.ΓÇ»10thΓÇ»century).<br>
          <em>Dance:</em> Development of the temple dance tradition (precursor to Bharatanatyam).
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: Mughal Empire -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">1526ΓÇæ1857ΓÇ»CE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Mughal Era</strong><br>
          <em>Architecture:</em> TajΓÇ»Mahal (1653), Red Fort (1648), Fatehpur Sikri (1571).<br>
          <em>Paintings:</em> Mughal miniature school ΓÇô works of Bichitr, Basawan (c.ΓÇ»1600ΓÇæ1700).<br>
          <em>Music:</em> Patronage of Hindustani classical ΓÇô development of Khayal, tabla.
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: British Colonial Period -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">1858ΓÇæ1947ΓÇ»CE</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>British Raj</strong><br>
          <em>Architecture:</em> IndoΓÇæSarcΓÇæBritish style ΓÇô Victoria Memorial (1908), Rashtrapati Bhavan (1919).<br>
          <em>Literature:</em> Rabindranath Tagore ΓÇô ΓÇ£GitanjaliΓÇ¥ (1910), Nobel Prize 1913.<br>
          <em>Festivals:</em> Revival of Durga Puja, Ganesh Chaturthi as public celebrations.<br>
          <em>Heritage:</em> First UNESCO heritage sites in India ΓÇô Ajanta & Ellora (1983, later).
        </div>
      </div>
      <div style="width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:10px solid #1a1c24;margin:8px auto 0;"></div>
    </div>

    <!-- Timeline Item: PostΓÇæIndependence -->
    <div style="display:inline-block;vertical-align:top;margin:0 40px;position:relative;z-index:2;">
      <div style="background:#1a1c24;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:12px 16px;min-width:200px;">
        <div style="color:#4ade80;font-weight:bold;font-size:14px;">1947ΓÇæPresent</div>
        <div style="margin-top:6px;font-size:13px;">
          <strong>Modern India</strong><br>
          <em>Heritage Sites:</em> 40+ UNESCO World Heritage Sites ΓÇô Khajuraho (1986), Hampi (1986), RaniΓÇ»KiΓÇ»Vav (2014).<br>
          <em>Dance/Music:</em> Institutionalisation ΓÇô Sangeet Natak Akademi (1952), Kalakshetra (1936).<br>
          <em>Festivals:</em> National celebration of Diwali, Independence Day parades showcasing cultural tableaux.<br>
          <em>Literature:</em> Contemporary writers ΓÇô AmitavΓÇ»Chakraborty, ArundhatiΓÇ»Roy; Indian English novel surge.
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
      NDAΓÇæI (80 Q) ΓÇô 50% Modern History
    </text>
    
    <!-- 2004 -->
    <circle cx="400" cy="150" r="8" fill="#4ade80"/>
    <line x1="400" y1="158" x2="400" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="400" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2004</text>
    <text x="400" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      CDS 2004 ΓÇô 75% questions from 1900ΓÇæ1947
    </text>
    
    <!-- 2008 -->
    <circle cx="600" cy="150" r="8" fill="#4ade80"/>
    <line x1="600" y1="158" x2="600" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="600" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2008</text>
    <text x="600" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      NDAΓÇæII ΓÇô 30% Ancient India, 40% Modern, 30% Geography
    </text>
    
    <!-- 2012 -->
    <circle cx="800" cy="150" r="8" fill="#4ade80"/>
    <line x1="800" y1="158" x2="800" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="800" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2012</text>
    <text x="800" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      CDS 2012 ΓÇô 55% questions from 1947ΓÇæ1975; Formula:ΓÇ»WeightΓÇ»=ΓÇ»(freq/total)├ù100
    </text>
    
    <!-- 2016 -->
    <circle cx="1000" cy="150" r="8" fill="#4ade80"/>
    <line x1="1000" y1="158" x2="1000" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="1000" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2016</text>
    <text x="1000" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      NDAΓÇæIII ΓÇô Rise of 1971ΓÇæ1990 era (Γëê35%); 70ΓÇ»% of questions from 2ΓÇæyear ΓÇ£Hot TopicsΓÇ¥
    </text>
    
    <!-- 2020 -->
    <circle cx="1200" cy="150" r="8" fill="#4ade80"/>
    <line x1="1200" y1="158" x2="1200" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="1200" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2020</text>
    <text x="1200" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      CDS 2020 ΓÇô 42ΓÇ»% questions on PostΓÇæ1990; Avg. marks per QΓÇ»=ΓÇ»2.5
    </text>
    
    <!-- 2024 -->
    <circle cx="1400" cy="150" r="8" fill="#4ade80"/>
    <line x1="1400" y1="158" x2="1400" y2="210" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <text x="1400" y="230" text-anchor="middle" fill="#e2e8f0" font-size="14">2024</text>
    <text x="1400" y="250" text-anchor="middle" fill="#60a5fa" font-size="12">
      NDAΓÇæIV ΓÇô 28ΓÇ»% Ancient, 32ΓÇ»% Modern, 40ΓÇ»% Contemporary; Trend Formula:ΓÇ»╬öΓÇ»%ΓÇ»=ΓÇ»(YearΓééΓÇæYearΓéü)/YearΓéü├ù100
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
        <div style="font-size:0.9em;">c. 3300ΓÇô1300ΓÇ»BCE (Mature: 2600ΓÇô1900ΓÇ»BCE)</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Urban planning ΓÇô grid layout, drainage</li>
          <li>Script: Indus script (Γëê400 symbols)</li>
          <li>Major sites: Harappa, MohenjoΓÇæDaro, Dholavira</li>
        </ul>
      </div>
    </div>

    <!-- Event: Vedic Age -->
    <div style="position:absolute; left:15%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Vedic Age</div>
        <div style="font-size:0.9em;">c. 1500ΓÇô500ΓÇ»BCE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>RigΓÇæVeda (c. 1500ΓÇ»BCE) ΓÇô oldest Vedic text</li>
          <li>Society: Brahmins, Kshatriyas, Vaishyas, Shudras</li>
          <li>Early iron use, cattleΓÇæbased economy</li>
        </ul>
      </div>
    </div>

    <!-- Event: Mahajanapadas -->
    <div style="position:absolute; left:25%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Mahajanapadas</div>
        <div style="font-size:0.9em;">c. 600ΓÇô300ΓÇ»BCE</div>
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
        <div style="font-size:0.9em;">6thΓÇ»centuryΓÇ»BCE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Siddhartha Gautama (Buddha) ΓÇô ~563ΓÇô483ΓÇ»BCE</li>
          <li>Mahavira (Jain) ΓÇô ~599ΓÇô527ΓÇ»BCE</li>
          <li>Key teachings: Four Noble Truths, Ahimsa</li>
        </ul>
      </div>
    </div>

    <!-- Event: Mauryan Empire -->
    <div style="position:absolute; left:42%; top:0; width:220px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Mauryan Empire</div>
        <div style="font-size:0.9em;">322ΓÇô185ΓÇ»BCE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Founders: Chandragupta (322ΓÇô298ΓÇ»BCE)</li>
          <li>Emperor Ashoka (268ΓÇô232ΓÇ»BCE) ΓÇô Kalinga War, Edicts</li>
          <li>Administration: 16 provinces, spy network</li>
        </ul>
      </div>
    </div>

    <!-- Event: PostΓÇæMauryan Period -->
    <div style="position:absolute; left:55%; top:0; width:220px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">PostΓÇæMauryan Period</div>
        <div style="font-size:0.9em;">185ΓÇ»BCEΓÇô320ΓÇ»CE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Shunga dynasty (185ΓÇô73ΓÇ»BCE)</li>
          <li>Kushan Empire (30ΓÇô375ΓÇ»CE) ΓÇô Silk Road trade</li>
          <li>Spread of Buddhism to Central Asia</li>
        </ul>
      </div>
    </div>

    <!-- Event: Gupta Empire -->
    <div style="position:absolute; left:66%; top:0; width:200px;">
      <div style="position:absolute; left:50%; top:100%; width:2px; height:40px; background:#60a5fa; transform:translateX(-50%);"></div>
      <div style="background:rgba(74,222,128,0.2); border:2px solid #4ade80; border-radius:6px; padding:10px;">
        <div style="font-weight:bold; margin-bottom:4px;">Gupta Empire</div>
        <div style="font-size:0.9em;">c. 320ΓÇô550ΓÇ»CE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>ChandraguptaΓÇ»II (380ΓÇô415ΓÇ»CE) ΓÇô Golden Age</li>
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
        <div style="font-size:0.9em;">606ΓÇô647ΓÇ»CE</div>
        <ul style="margin:6px 0 0 16px; font-size:0.85em;">
          <li>Harsha (r. 606ΓÇô647ΓÇ»CE) ΓÇô unified North India</li>
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
        <div style="font-size:0.9em;">c. 300ΓÇ»BCEΓÇô300ΓÇ»CE</div>
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
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">c. 500ΓÇ»ΓÇôΓÇ»1200ΓÇ»CE ΓÇô Early Medieval Period</div>
        <div style="margin-top:6px; line-height:1.5;">
          ΓÇó Regional kingdoms flourish: <b>Palas (750ΓÇæ1174), Pratiharas (550ΓÇæ1036), Rashtrakutas (753ΓÇæ982)</b>.<br>
          ΓÇó Cultural highlights: <b>HarshaΓÇÖs patronage (606ΓÇæ647)</b>, development of <b>Devanagari script</b>.<br>
          ΓÇó Trade expansion via Indian Ocean; rise of <b>Chola naval power (c. 985ΓÇæ1070)</b>.<br>
          ΓÇó Religious movements: <b>Bhakti (e.g., Alvars, Nayanmars)</b> and early <b>Sufi saints (e.g., Khwaja Moinuddin Chishti, 1141ΓÇæ1230)</b>.<br>
        </div>
      </div>
    </div>

    <!-- Delhi Sultanate -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1206ΓÇ»ΓÇôΓÇ»1526ΓÇ»CE ΓÇô Delhi Sultanate</div>
        <div style="margin-top:6px; line-height:1.5;">
          ΓÇó Founding: <b>QutbΓÇæudΓÇæDin Aibak (1206ΓÇæ1210)</b> ΓÇô built Qutub Minar (1192) and AlΓÇæFiroz ShahΓÇÖs tomb.<br>
          ΓÇó Key rulers: <b>Iltutmish (1211ΓÇæ1236)</b>, <b>Balban (1266ΓÇæ1287)</b>, <b>Ghiyath alΓÇæDin Tughluq (1320ΓÇæ1325)</b>.<br>
          ΓÇó Administrative reforms: introduction of <b>IqtaΓÇæsystem</b>, land revenue (Kharaj).<br>
          ΓÇó Cultural impact: Persian language & architecture (e.g., Tughlaqabad Fort, 1321).<br>
          ΓÇó Decline: Battle ofΓÇ»PanipatΓÇ»(1526) ΓÇô defeat by Babur, ending Sultanate.
        </div>
      </div>
    </div>

    <!-- Vijayanagara Empire -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1336ΓÇ»ΓÇôΓÇ»1646ΓÇ»CE ΓÇô Vijayanagara Empire</div>
        <div style="margin-top:6px; line-height:1.5;">
          ΓÇó Founders: <b>HariharaΓÇ»I &ΓÇ»BukkaΓÇ»I</b> (c.ΓÇ»1336).<br>
          ΓÇó Capital: Hampi ΓÇô famed for stone temples (e.g., Vittala, 1565).<br>
          ΓÇó Peak under <b>Krishna Deva Raya (1509ΓÇæ1529)</b> ΓÇô military victories (Battle ofΓÇ»RaichurΓÇ»1520) and literary patronage (Mahabharata, Ramayana translations).<br>
          ΓÇó Administration: <b>Mandala system</b>, revenue from agriculture and trade (spice routes).<br>
          ΓÇó Decline after <b>Battle ofΓÇ»Talikota (1565)</b> ΓÇô defeat by Deccan Sultanates.
        </div>
      </div>
    </div>

    <!-- Bahmani Kingdom -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1347ΓÇ»ΓÇôΓÇ»1527ΓÇ»CE ΓÇô Bahmani Sultanate</div>
        <div style="margin-top:6px; line-height:1.5;">
          ΓÇó Founder: <b>AlΓÇæUdayΓÇ»BinΓÇ»SaifΓÇ»AlΓÇæD─½n (1347ΓÇæ1358)</b> ΓÇô capital at Gulbarga.<br>
          ΓÇó Split into five Deccan ΓÇ£AsafΓÇ¥ states (1527) ΓÇô e.g., Ahmadnagar, Bijapur.<br>
          ΓÇó Cultural syncretism: development of <b>Deccani Urdu</b>, IndoΓÇæPersian architecture (Mahbubnagar).<br>
          ΓÇó Economic base: cotton, pepper, and horse trade with the Ottoman Empire.
        </div>
      </div>
    </div>

    <!-- Mughal Empire -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1526ΓÇ»ΓÇôΓÇ»1857ΓÇ»CE ΓÇô Mughal Empire</div>
        <div style="margin-top:6px; line-height:1.5;">
          ΓÇó Founder: <b>Babur (1526ΓÇæ1530)</b> ΓÇô Battle ofΓÇ»PanipatΓÇ»(1526).<br>
          ΓÇó Apex under <b>Akbar (1556ΓÇæ1605)</b> ΓÇô administrative reforms (Mansabdari system), religious tolerance (DinΓÇ»IΓÇ»Ilahi).<br>
          ΓÇó Architectural marvels: <b>TajΓÇ»Mahal (1632ΓÇæ1653)</b>, Red Fort (1648).<br>
          ΓÇó Aurangzeb (1658ΓÇæ1707) ΓÇô expansion to South India, imposition of Jizya (1679).<br>
          ΓÇó Decline: succession wars, Maratha rise, British East India Company postΓÇæBattle ofΓÇ»PlasseyΓÇ»(1757).
        </div>
      </div>
    </div>

    <!-- Maratha Empire (Expanded) -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">1674ΓÇ»ΓÇôΓÇ»1818ΓÇ»CE ΓÇô Maratha Empire (Expanded)</div>
        <div style="margin-top:6px; line-height:1.5;">
          ΓÇó Founder: <b>ShivajiΓÇ»Bhonsle (1674ΓÇæ1680)</b> ΓÇô coronation at Raigad, establishment of <b>Ashta Pradhan</b> council.<br>
          ΓÇó Key battles: <b>Battle ofΓÇ»Pune (1659)</b>, <b>Battle ofΓÇ»Panhala (1660)</b>, <b>Battle ofΓÇ»Bhopal (1738)</b>.<br>
          ΓÇó Peshwa era: <b>BajiraoΓÇ»I (1720ΓÇæ1740)</b> ΓÇô conquests of Gujarat, Malwa, and Delhi (1737).<br>
          ΓÇó Administrative unit: <b>Maratha Confederacy</b> ΓÇô 23 <i>prants</i> (provinces).<br>
          ΓÇó Decline after <b>Third AngloΓÇæMaratha War (1817ΓÇæ1818)</b> ΓÇô Treaty ofΓÇ»Mhow.
        </div>
      </div>
    </div>

    <!-- Bhakti & Sufi Movements -->
    <div style="position:relative; margin-bottom:40px;">
      <span style="position:absolute; left:-30px; top:5px; width:14px; height:14px; background:#4ade80; border-radius:50%;"></span>
      <div style="background:#1e293b; border-left:4px solid #4ade80; padding:12px 18px; border-radius:4px;">
        <div style="color:#60a5fa; font-size:18px; font-weight:bold;">12thΓÇ»ΓÇôΓÇ»17thΓÇ»CE ΓÇô Bhakti & Sufi Movements</div>
        <div style="margin-top:6px; line-height:1.5;">
          ΓÇó Bhakti saints: <b>Ramanuja (1017ΓÇæ1137), Kabir (1440ΓÇæ1518), Guru Nanak (1469ΓÇæ1539), Mirabai (1498ΓÇæ1547)</b>.<br>
          ΓÇó Sufi saints: <b>Khwaja Moinuddin Chishti (1141ΓÇæ1230), Nizamuddin Auliya (1238ΓÇæ1325), ShahΓÇ»Waliullah (1703ΓÇæ1762)</b>.<br>
          ΓÇó Core ideas: devotion (bhakti), equality, rejection of caste & ritualism; Sufi concepts of <i>tawhid</i>, <i>loveΓÇæunion</i>.<br>
          ΓÇó Literary output: <b>Guru Granth Sahib (1604)</b>, <b>Bijak of Kabir</b>, <b>Qawwali poetry</b>.<br>
          ΓÇó SocioΓÇæpolitical impact: fostered communal harmony, influenced later reform movements (Raja Ram Mohan Roy, 1772ΓÇæ1833).
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
      <div class="desc">Vasco daΓÇ»Gama lands at Calicut ΓÇô first direct sea link between Europe & India.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1510</div>
      <div class="title">Portuguese Goa</div>
      <div class="desc">AfonsoΓÇ»deΓÇ»Albuquerque captures Goa; Portuguese dominate western coast.</div>
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
      <div class="desc">RobertΓÇ»Clive defeats SirajΓÇæudΓÇæDaula ΓÇô start of British political dominance.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1857</div>
      <div class="title">Revolt of 1857</div>
      <div class="desc">Sepoy Mutiny ΓÇô major uprising against East India Company rule.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1858</div>
      <div class="title">British Raj</div>
      <div class="desc">Government of India ActΓÇ»1858 ΓÇô Crown assumes direct control.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1859</div>
      <div class="title">Brahmo Samaj</div>
      <div class="desc">Founded by RajaΓÇ»RammohanΓÇ»Roy ΓÇô socialΓÇæreligious reform.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1875</div>
      <div class="title">Arya Samaj</div>
      <div class="desc">SwamiΓÇ»DayanandaΓÇ»Saraswati launches Vedic reform movement.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1885</div>
      <div class="title">Indian National Congress</div>
      <div class="desc">Founded at Bombay; first session ΓÇô A.O.ΓÇ»Hume (President).</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1905</div>
      <div class="title">Partition of Bengal</div>
      <div class="desc">LordΓÇ»CurzonΓÇÖs divide ΓÇô sparks Swadeshi & Boycott movements.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1915</div>
      <div class="title">Home Rule League</div>
      <div class="desc">Bal GangadharΓÇ»Tilak & AnnieΓÇ»Besant demand selfΓÇægovernment.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1919</div>
      <div class="title">Jallianwala Bagh</div>
      <div class="desc">GeneralΓÇ»ReginaldΓÇ»Dyer orders massacre ΓÇô 379 killed.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1920</div>
      <div class="title">NonΓÇæCooperation</div>
      <div class="desc">MahatmaΓÇ»Gandhi launches mass civil disobedience.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1930</div>
      <div class="title">Salt March</div>
      <div class="desc">GandhiΓÇÖs 240ΓÇ»km Dandi march ΓÇô breaking Salt Laws.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1942</div>
      <div class="title">Quit India</div>
      <div class="desc">AllΓÇæIndia Congress demands immediate British withdrawal.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">15ΓÇ»AugΓÇ»1947</div>
      <div class="title">Independence & Partition</div>
      <div class="desc">India & Pakistan created; Mountbatten Plan ΓÇô 2ΓÇ»AugΓÇ»1947.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">26ΓÇ»JanΓÇ»1950</div>
      <div class="title">Constitution Adopted</div>
      <div class="desc">ArticleΓÇ»14,ΓÇ»19,ΓÇ»21 become cornerstone of Indian law.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1962</div>
      <div class="title">SinoΓÇæIndian War</div>
      <div class="desc">Border clash in NE Himalaya ΓÇô tests postΓÇæindependence defence.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1971</div>
      <div class="title">Bangladesh Liberation</div>
      <div class="desc">IndiaΓÇÖs decisive role in IndoΓÇæPak war; birth of Bangladesh.</div>
    </div>
    <div class="event">
      <div class="dot"></div>
      <div class="date">1998</div>
      <div class="title">PokhranΓÇæII Tests</div>
      <div class="desc">India conducts nuclear tests ΓÇô asserts strategic autonomy.</div>
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
      Sun mass = 1.989├ù10┬│Γü░ kg<br>
      Earth radius = 6,371 km<br>
      Orbital period (Earth) = 365.25 d<br>
      <em>Formula:</em> F = G┬╖(mΓéümΓéé)/r┬▓
    </div>

    <!-- Secondary Nodes (Earth Structure & Atmosphere) -->
    <div style="position:absolute; left:90%; top:5%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Layers</strong><br>
      Crust: 5ΓÇæ70 km<br>
      Mantle: ~2,900 km<br>
      Outer core: 2,200 km (Γëê4,000ΓÇ»┬░C)<br>
      Inner core: 1,220 km (Γëê5,700ΓÇ»┬░C)<br>
      <em>Atmosphere:</em> TroposphereΓÇæ~12ΓÇ»km, StratosphereΓÇæ~50ΓÇ»km
    </div>

    <!-- Secondary Nodes (Climatology) -->
    <div style="position:absolute; left:10%; top:75%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Climatic Zones</strong><br>
      Tropical: 23.5┬░ΓÇ»NΓÇæS, AvgΓÇ»TempΓÇ»>ΓÇ»20ΓÇ»┬░C<br>
      Temperate: 23.5ΓÇæ66.5┬░ΓÇ»NΓÇæS, 10ΓÇæ20ΓÇ»┬░C<br>
      Polar: >ΓÇ»66.5┬░ΓÇ»NΓÇæS, <ΓÇ»0ΓÇ»┬░C<br>
      <em>Cloud Types:</em> Cumulus, Stratus, Cirrus
    </div>

    <!-- Secondary Nodes (Geomorphology) -->
    <div style="position:absolute; left:90%; top:75%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Key Concepts</strong><br>
      Plate speed ΓëêΓÇ»5ΓÇ»cm/yr<br>
      Rock Cycle: Igneous ΓåÆ Sedimentary ΓåÆ Metamorphic<br>
      Volcanism: 1991 MtΓÇ»Pinatubo eruption (Γëê17ΓÇ»km┬│ tephra)
    </div>

    <!-- Secondary Nodes (World Geography) -->
    <div style="position:absolute; left:40%; top:95%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Mountains</strong><br>
      Himalayas: Highest peak MtΓÇ»EverestΓÇ»=ΓÇ»8,848ΓÇ»m (formed ~50ΓÇ»Myr)<br>
      Andes: LengthΓÇ»ΓëêΓÇ»7,000ΓÇ»km<br>
      <strong>Rivers</strong><br>
      Amazon: 6,650ΓÇ»km (largest discharge)<br>
      GangesΓÇæBrahmaputra: 3,053ΓÇ»km
    </div>

    <!-- Secondary Nodes (Straits, Canals, Deserts & Seas) -->
    <div style="position:absolute; left:55%; top:5%; transform:translate(-50%,-50%); background:#60a5fa; color:#0f1117; padding:6px 12px; border-radius:5px; font-size:13px;">
      <strong>Key Features</strong><br>
      Straits: Strait of Hormuz (widthΓÇ»ΓëêΓÇ»39ΓÇ»km)<br>
      Canals: Panama Canal (lengthΓÇ»ΓëêΓÇ»82ΓÇ»km, openedΓÇ»1914)<br>
      Deserts: SaharaΓÇ»ΓëêΓÇ»9.2ΓÇ»millionΓÇ»km┬▓<br>
      Seas: Arabian Sea areaΓÇ»ΓëêΓÇ»3.86ΓÇ»millionΓÇ»km┬▓
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
        <li>Ganga ΓÇô 2,525ΓÇ»km (source: Gangotri)</li>
        <li>Brahmaputra ΓÇô 2,900ΓÇ»km (source: Tibet)</li>
        <li>Indus ΓÇô 3,180ΓÇ»km (source: Tibet)</li>
        <li>ZojiΓÇ»La ΓÇô 3,528ΓÇ»m (Kashmir)</li>
        <li>KhardungΓÇ»La ΓÇô 5,359ΓÇ»m (Ladakh)</li>
        <li>Alluvial soils ΓÇô IndoΓÇæGangetic Plains</li>
        <li>Black soils ΓÇô Deccan Plateau</li>
        <li>Red &amp; Laterite soils ΓÇô Southern India</li>
      </ul>
    </div>

    <div style="position:absolute; top:180px; left:50%; transform:translateX(-50%); background:#4ade80; color:#0f1117; padding:12px 18px; border-radius:6px; width:240px;">
      <strong>Forests, Trees &amp; Wetlands</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>Tropical Evergreen ΓÇô WesternΓÇ»Ghats</li>
        <li>Deciduous ΓÇô CentralΓÇ»India</li>
        <li>Mangroves ΓÇô Sundarbans (Γëê10,000ΓÇ»ha)</li>
        <li>Teak, Sal, Bamboo ΓÇô Major commercial species</li>
        <li>Chilika Lake ΓÇô 10,000ΓÇ»ha (WorldΓÇÖs largest brackish lagoon)</li>
        <li>KeoladeoΓÇ»NationalΓÇ»Park ΓÇô 15,000ΓÇ»ha (Ramsar site)</li>
      </ul>
    </div>

    <div style="position:absolute; top:180px; left:90%; transform:translateX(-50%); background:#4ade80; color:#0f1117; padding:12px 18px; border-radius:6px; width:240px;">
      <strong>Mineral Resources &amp; Types of Farming</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>Coal ΓÇô Jharkhand (Γëê92ΓÇ»% of IndiaΓÇÖs reserves)</li>
        <li>Iron ore ΓÇô Odisha (Γëê7.5ΓÇ»CrΓÇ»tonnes)</li>
        <li>Bauxite ΓÇô Gujarat, Odisha</li>
        <li>Limestone ΓÇô Rajasthan</li>
        <li>Rabi crops ΓÇô Wheat, Barley</li>
        <li>Kharif crops ΓÇô Rice, Millets</li>
        <li>Plantation ΓÇô Tea (Assam), Coffee (Karnataka)</li>
      </ul>
    </div>

    <!-- Row 2 -->
    <div style="position:absolute; top:460px; left:20%; transform:translateX(-50%); background:#60a5fa; color:#0f1117; padding:12px 18px; border-radius:6px; width:260px;">
      <strong>Transport Routes: Highways &amp; Waterways</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>NHΓÇ»44 ΓÇô 4,112ΓÇ»km (longest northΓÇæsouth highway)</li>
        <li>GoldenΓÇ»Quadrilateral ΓÇô 5,846ΓÇ»km (DelhiΓÇæMumbaiΓÇæChennaiΓÇæKolkata)</li>
        <li>National WaterwayΓÇ»1 ΓÇô Ganga (1,620ΓÇ»km)</li>
        <li>National WaterwayΓÇ»2 ΓÇô Brahmaputra (891ΓÇ»km)</li>
        <li>National WaterwayΓÇ»3 ΓÇô WestΓÇ»Coast (Γëê430ΓÇ»km)</li>
      </ul>
    </div>

    <div style="position:absolute; top:460px; left:50%; transform:translateX(-50%); background:#60a5fa; color:#0f1117; padding:12px 18px; border-radius:6px; width:260px;">
      <strong>National Parks (Map Guide)</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>JimΓÇ»Corbett ΓÇô 1,318ΓÇ»km┬▓ (Uttarakhand)</li>
        <li>Kaziranga ΓÇô 1,441ΓÇ»km┬▓ (Assam)</li>
        <li>Sundarbans ΓÇô 2,585ΓÇ»km┬▓ (WestΓÇ»Bengal)</li>
        <li>ValleyΓÇ»ofΓÇ»Flowers ΓÇô 87.5ΓÇ»km┬▓ (Uttarakhand)</li>
        <li>Ranthambore ΓÇô 1,334ΓÇ»km┬▓ (Rajasthan)</li>
        <li>Bandhavgarh ΓÇô 1,140ΓÇ»km┬▓ (MadhyaΓÇ»Pradesh)</li>
      </ul>
    </div>

    <div style="position:absolute; top:460px; left:80%; transform:translateX(-50%); background:#60a5fa; color:#0f1117; padding:12px 18px; border-radius:6px; width:260px;">
      <strong>Borders, Capitals &amp; Mapping</strong><br>
      <ul style="margin:6px 0 0 16px; padding:0;">
        <li>Land borders ΓÇô 7 countries, 15,106ΓÇ»km total</li>
        <li>Capital ΓÇô NewΓÇ»Delhi (28.6139┬░ΓÇ»N,ΓÇ»77.2090┬░ΓÇ»E)</li>
        <li>State capitals ΓÇô e.g., Mumbai (Maharashtra), Chennai (TamilΓÇ»Nadu)</li>
        <li>Key lat/long ΓÇô Kolkata (22.5726┬░ΓÇ»N,ΓÇ»88.3639┬░ΓÇ»E)</li>
        <li>ArticleΓÇ»370 (abrogatedΓÇ»5ΓÇ»AugΓÇ»2019)</li>
        <li>Map projection ΓÇô Lambert Conformal Conic (Survey of India)</li>
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
      <!-- Industries subΓÇæbranches -->
      <line x1="300" y1="400" x2="150" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="300" y1="400" x2="300" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="300" y1="400" x2="450" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <!-- Corridors subΓÇæbranches -->
      <line x1="900" y1="400" x2="800" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="900" y1="400" x2="900" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="900" y1="400" x2="1000" y2="560" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <!-- Geopolitical subΓÇæbranches -->
      <line x1="600" y1="500" x2="400" y2="660" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="600" y1="500" x2="600" y2="660" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
      <line x1="600" y1="500" x2="800" y2="660" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
    </svg>
    
    <!-- Central Node -->
    <div style="position:absolute; left:calc(50% - 150px); top:120px; width:300px; padding:15px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; text-align:center; color:#e2e8f0; font-size:20px; font-weight:600;">
      <span style="color:#60a5fa;">Industries &amp; Geopolitics</span><br/>
      <small>India ΓÇô Strategic Overview (2024)</small>
    </div>
    
    <!-- Major Industries Node -->
    <div style="position:absolute; left:80px; top:360px; width:260px; padding:12px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#e2e8f0;">
      <div style="font-size:18px; font-weight:600; color:#4ade80; margin-bottom:6px;">Major Industries</div>
      <ul style="margin:0; padding-left:18px; line-height:1.4;">
        <li><strong>Automobile</strong> ΓÇô 2023 production: <span style="color:#4ade80;">4.2ΓÇ»million units</span></li>
        <li><strong>Pharmaceuticals</strong> ΓÇô 2022 export: <span style="color:#4ade80;">US$33ΓÇ»billion</span></li>
        <li><strong>Textiles</strong> ΓÇô 2022 contribution: <span style="color:#4ade80;">4ΓÇ»% of GDP</span></li>
        <li><strong>ITΓÇæBPM</strong> ΓÇô 2023 revenue: <span style="color:#4ade80;">US$225ΓÇ»billion</span></li>
        <li><strong>Steel</strong> ΓÇô 2023 production: <span style="color:#4ade80;">120ΓÇ»millionΓÇ»tonnes</span></li>
      </ul>
    </div>
    
    <!-- Industrial Corridors Node -->
    <div style="position:absolute; left:840px; top:360px; width:260px; padding:12px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#e2e8f0;">
      <div style="font-size:18px; font-weight:600; color:#4ade80; margin-bottom:6px;">Industrial Corridors</div>
      <ul style="margin:0; padding-left:18px; line-height:1.4;">
        <li><strong>DelhiΓÇæMumbai Industrial Corridor (DMIC)</strong> ΓÇô 1,500ΓÇ»km, investment <span style="color:#4ade80;">US$100ΓÇ»billion</span></li>
        <li><strong>MumbaiΓÇæBangalore Economic Corridor (MBEC)</strong> ΓÇô 1,000ΓÇ»km, focus on biotech &amp; AI</li>
        <li><strong>AhmedabadΓÇæVadodara Industrial Corridor (AVIC)</strong> ΓÇô 100ΓÇ»km, textile &amp; pharma hub</li>
        <li><strong>East Coast Economic Corridor (ECEC)</strong> ΓÇô 2,400ΓÇ»km, ports &amp; logistics</li>
      </ul>
    </div>
    
    <!-- Geopolitical Flashpoints Node -->
    <div style="position:absolute; left:380px; top:620px; width:260px; padding:12px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#e2e8f0;">
      <div style="font-size:18px; font-weight:600; color:#4ade80; margin-bottom:6px;">Geopolitical Flashpoints</div>
      <ul style="margin:0; padding-left:18px; line-height:1.4;">
        <li><strong>South China Sea</strong> ΓÇô UNCLOS ArticleΓÇ»2, freedom of navigation disputes</li>
        <li><strong>Taiwan Strait</strong> ΓÇô 2022 heightened naval activity, USΓÇæChina tension</li>
        <li><strong>IndoΓÇæPacific Region</strong> ΓÇô Quad (India, USA, Japan, Australia) ΓÇô 2023 joint naval exercises</li>
        <li><strong>IndiaΓÇæChina Border</strong> ΓÇô 2020ΓÇæ2021 Galwan clash, Line of Actual Control (LAC)</li>
      </ul>
    </div>
    
    <!-- IndoΓÇæPacific Node -->
    <div style="position:absolute; left:620px; top:620px; width:260px; padding:12px; background:#1a202c; border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#e2e8f0;">
      <div style="font-size:18px; font-weight:600; color:#4ade80; margin-bottom:6px;">IndoΓÇæPacific Strategy</div>
      <ul style="margin:0; padding-left:18px; line-height:1.4;">
        <li>2022: ΓÇ£Act East PolicyΓÇ¥ ΓÇô 10ΓÇ»% increase in aid to Southeast Asian navies</li>
        <li>2023: ΓÇ£SAGARΓÇ¥ (Security and Growth for All in the Region) ΓÇô maritime domain awareness</li>
        <li>2024: Indian Navy to commission 2ΓÇ»├ùΓÇ»VikramadityaΓÇæclass carriers by 2027</li>
        <li>Key Articles: UNΓÇ»ResolutionΓÇ»2625 (Territorial Integrity), ASEANΓÇæIndia FTA 2020</li>
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
      <div style="font-size:14px;">NDA / CDS (2019ΓÇæ2023)</div>
    </div>

    <!-- Branch Nodes -->
    <div id="nodeSources" style="position:absolute; left:10%; top:20%; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:200px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Sources</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Official NDA Syllabus (2023)</li>
        <li>CDS Gazette (2022ΓÇæ2023)</li>
        <li>Previous Year Papers (2019ΓÇæ2023)</li>
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
        <span style="color:#e2e8f0;">((CurrentΓÇ»ΓÇôΓÇ»Previous) / Previous)ΓÇ»├ùΓÇ»100</span>
      </div>
      <div style="margin-top:6px; font-size:13px;">
        Example (2022 vs 2021): ((4ΓÇæ2)/2)├ù100 = <span style="color:#4ade80;">200ΓÇ»%</span>
      </div>
    </div>

    <div id="nodeDistribution" style="position:absolute; right:10%; bottom:20%; background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:240px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Distribution by Topic</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>Physical Geography ΓÇô 55ΓÇ»%</li>
        <li>Human Geography ΓÇô 45ΓÇ»%</li>
        <li>Maps & Cartography ΓÇô 30ΓÇ»% of total Qs</li>
        <li>Climatology ΓÇô 20ΓÇ»%</li>
        <li>Resources ΓÇô 15ΓÇ»%</li>
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
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">ExamΓÇæWise PYQ</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>NDA ΓÇô 12 Qs (2019ΓÇæ2023)</li>
        <li>CDS ΓÇô 9 Qs (2019ΓÇæ2023)</li>
        <li>Trend: Γåæ Physical, Γåö Human</li>
      </ul>
    </div>

    <div id="nodeMapFocus" style="position:absolute; right:5%; top:50%; transform:translateY(-50%); background:#1a1c23; border:1px solid rgba(255,255,255,0.12); border-radius:8px; padding:12px; width:210px;">
      <div style="color:#60a5fa; font-weight:bold; margin-bottom:4px;">Map Focus Areas</div>
      <ul style="margin:0; padding-left:18px; font-size:13px;">
        <li>India ΓÇô State Borders (2022)</li>
        <li>World ΓÇô Physical Features (2021)</li>
        <li>Climatic Zones ΓÇô K├╢ppen (2023)</li>
        <li>River Basins ΓÇô Ganga, Brahmaputra</li>
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
      <div style="font-size:14px;">Established: 1 April 1935<br>Head: Governor Shaktikanta Das (since SepΓÇ»2022)</div>
    </div>
    <!-- MPC Node -->
    <div style="position:absolute; left:300px; top:40px; width:260px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; text-align:center;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">Monetary Policy Committee (MPC)</div>
      <div style="font-size:14px;">6 members (3 RBI, 3 external)<br>DecisionΓÇæmaking: 3ΓÇæday meetings (BiΓÇæmonthly)<br>Last meeting: 8ΓÇ»MarΓÇ»2024</div>
    </div>
    <!-- Arrow RBI ΓåÆ MPC -->
    <svg style="position:absolute; left:250px; top:80px; overflow:visible;">
      <defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="50" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead)"/>
    </svg>
    <!-- Policy Tools Node -->
    <div style="position:absolute; left:580px; top:20px; width:340px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <div style="color:#4ade80; font-weight:bold; text-align:center; margin-bottom:6px;">Monetary Policy Tools</div>
      <ul style="margin:0; padding-left:18px; font-size:14px; line-height:1.6;">
        <li><b>Repo Rate</b> ΓÇô 6.50% (as of 8ΓÇ»MarΓÇ»2024)</li>
        <li><b>Reverse Repo Rate</b> ΓÇô 3.15% (as of 8ΓÇ»MarΓÇ»2024)</li>
        <li><b>Cash Reserve Ratio (CRR)</b> ΓÇô 4% (effective 1ΓÇ»AprΓÇ»2023)</li>
        <li><b>Statutory Liquidity Ratio (SLR)</b> ΓÇô 18.5% (as of 2024)</li>
        <li><b>Bank Rate</b> ΓÇô 7.00% (2024)</li>
        <li><b>Marginal Standing Facility (MSF)</b> ΓÇô RepoΓÇ»+ΓÇ»100ΓÇ»bps ΓåÆ 7.50%</li>
        <li><b>Open Market Operations (OMO)</b> ΓÇô Govt. securities buyΓÇæsell</li>
      </ul>
    </div>
    <!-- Arrow MPC ΓåÆ Tools -->
    <svg style="position:absolute; left:560px; top:80px; overflow:visible;">
      <defs><marker id="arrowhead2" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="20" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead2)"/>
    </svg>
    <!-- Transmission Mechanism Node -->
    <div style="position:absolute; left:960px; top:40px; width:260px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; text-align:center;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">Transmission Mechanism</div>
      <div style="font-size:14px;">
        <b>Liquidity ΓåÆ Interest Rate ΓåÆ Investment ΓåÆ Aggregate Demand ΓåÆ Inflation &amp; Growth</b>
      </div>
    </div>
    <!-- Arrow Tools ΓåÆ Transmission -->
    <svg style="position:absolute; left:920px; top:80px; overflow:visible;">
      <defs><marker id="arrowhead3" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="40" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead3)"/>
    </svg>
    <!-- Economic Outcomes Node -->
    <div style="position:absolute; left:1240px; top:40px; width:260px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">Economic Outcomes (2023ΓÇæ24)</div>
      <ul style="margin:0; padding-left:18px; font-size:14px; line-height:1.6;">
        <li>Inflation Target: 4ΓÇ»%ΓÇ»┬▒ΓÇ»2ΓÇ»% (Achieved 3.9ΓÇ»% in FYΓÇ»2023ΓÇæ24)</li>
        <li>GDP Growth: 6.8ΓÇ»% (FYΓÇ»2023ΓÇæ24)</li>
        <li>CreditΓÇætoΓÇæGDP Ratio: 20.5ΓÇ»% (Γåæ 0.4ΓÇ»% YoY)</li>
        <li>Money Supply (M3): Γé╣ 210ΓÇ»LakhΓÇ»Cr (ΓåæΓÇ»9ΓÇ»% YoY)</li>
      </ul>
    </div>
    <!-- Arrow Transmission ΓåÆ Outcomes -->
    <svg style="position:absolute; left:1220px; top:80px; overflow:visible;">
      <defs><marker id="arrowhead4" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="20" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead4)"/>
    </svg>
    <!-- Fiscal Side (Optional) -->
    <div style="position:absolute; left:580px; top:200px; width:340px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <div style="color:#4ade80; font-weight:bold; text-align:center; margin-bottom:6px;">Fiscal Policy Instruments</div>
      <ul style="margin:0; padding-left:18px; font-size:14px; line-height:1.6;">
        <li><b>Government Expenditure</b> ΓÇô Γé╣ΓÇ»30ΓÇ»LakhΓÇ»Cr (FYΓÇ»2023ΓÇæ24)</li>
        <li><b>Tax Revenue</b> ΓÇô Γé╣ΓÇ»25ΓÇ»LakhΓÇ»Cr (FYΓÇ»2023ΓÇæ24)</li>
        <li><b>Fiscal Deficit</b> ΓÇô 5.5ΓÇ»% of GDP (Target ΓëñΓÇ»4.5ΓÇ»%)</li>
        <li><b>Public Debt</b> ΓÇô 67ΓÇ»% of GDP (2023ΓÇæ24)</li>
      </ul>
    </div>
    <!-- Arrow Tools ΓåÆ Fiscal (illustrates coordination) -->
    <svg style="position:absolute; left:720px; top:150px; overflow:visible;">
      <defs><marker id="arrowhead5" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="0" y2="50" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead5)"/>
    </svg>
    <!-- Combined Macro Outcome Node -->
    <div style="position:absolute; left:960px; top:200px; width:260px; padding:12px; background:#1e212b; border:1px solid rgba(255,255,255,0.12); border-radius:6px; text-align:center;">
      <div style="color:#4ade80; font-weight:bold; margin-bottom:6px;">MacroΓÇæEconomic Stability</div>
      <div style="font-size:14px;">
        <b>Goal:</b> Sustainable growth, price stability, financial sector health
      </div>
    </div>
    <!-- Arrow Fiscal ΓåÆ Macro -->
    <svg style="position:absolute; left:920px; top:260px; overflow:visible;">
      <defs><marker id="arrowhead6" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#60a5fa"/></marker></defs>
      <line x1="0" y1="0" x2="40" y2="0" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrowhead6)"/>
    </svg>
    <!-- Arrow Transmission ΓåÆ Macro -->
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
                        <li><strong>Features:</strong> Zero-balance accounts, RuPay Debit Card, OD facility (Γé╣10,000), Accident insurance (Γé╣2 Lakh).</li>
                        <li><strong>Impact:</strong> 51.5 Cr+ accounts (as of Jan 2024), 55.5% women, 67% rural.</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">PM Jeevan Jyoti Bima Yojana (PMJJBY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> May 2015</li>
                        <li><strong>Objective:</strong> Life insurance cover.</li>
                        <li><strong>Features:</strong> Γé╣2 Lakh cover for death, annual premium Γé╣436. Age 18-50.</li>
                        <li><strong>Impact:</strong> 17.1 Cr+ enrollments (as of Apr 2024).</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">PM Suraksha Bima Yojana (PMSBY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> May 2015</li>
                        <li><strong>Objective:</strong> Accident insurance cover.</li>
                        <li><strong>Features:</strong> Γé╣2 Lakh for accidental death/disability, annual premium Γé╣20. Age 18-70.</li>
                        <li><strong>Impact:</strong> 36.1 Cr+ enrollments (as of Apr 2024).</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">Atal Pension Yojana (APY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> May 2015</li>
                        <li><strong>Objective:</strong> Pension scheme for unorganized sector.</li>
                        <li><strong>Features:</strong> Fixed pension Γé╣1000-Γé╣5000/month after 60. Age 18-40.</li>
                        <li><strong>Impact:</strong> 6.2 Cr+ subscribers (as of Apr 2024).</li>
                    </ul>
                </div>
                <div style="background:#1a202c; padding:15px; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.12);">
                    <h5 style="margin:0 0 8px; color:#4ade80; font-size:1.1em; font-weight:600;">PM Mudra Yojana (PMMY)</h5>
                    <ul style="margin:0; padding-left:20px; font-size:0.85em; list-style-type:disc;">
                        <li><strong>Launch:</strong> Apr 2015</li>
                        <li><strong>Objective:</strong> Micro-credit for non-farm, non-corporate small/micro enterprises.</li>
                        <li><strong>Categories:</strong> Shishu (Γé╣50k), Kishor (Γé╣5L), Tarun (Γé╣10L).</li>
                        <li><strong>Impact:</strong> Γé╣26 Lakh Cr+ sanctioned in 46 Cr+ loans (as of Mar 2023).</li>
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
                        <li><strong>Impact:</strong> 14.4 Cr active workers (FY 2023-24), average wage rate Γé╣238.09.</li>
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
                        <li><strong>Features:</strong> Collateral-free working capital loan up to Γé╣50,000.</li>
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
                        <li><strong>Features:</strong> Γé╣5 Lakh/family/year for secondary/tertiary care. Covers 10.74 Cr families.</li>
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
    <text x="350" y="380" text-anchor="middle" class="label">╬╕ß╡ó = ╬╕ß╡ú</text>
    <text x="350" y="410" text-anchor="middle" class="label">Mirror Formula</text>
    <text x="350" y="440" text-anchor="middle" class="label">1/f = 1/v + 1/u</text>
    <text x="350" y="470" text-anchor="middle" class="label">Magnification m = v/u</text>

    <rect x="260" y="480" width="180" height="120" class="expBox"/>
    <text x="350" y="500" text-anchor="middle" class="label">Experimental Setup</text>
    <text x="350" y="525" text-anchor="middle" class="label">Ray Box ΓåÆ Plane Mirror</text>
    <text x="350" y="550" text-anchor="middle" class="label">Protractor to measure ╬╕ß╡ó, ╬╕ß╡ú</text>

    <!-- Refraction Branch -->
    <line x1="600" y1="130" x2="600" y2="300" class="line"/>
    <text x="600" y="280" text-anchor="middle" class="subTitle">Refraction</text>
    <rect x="510" y="320" width="180" height="180" class="formulaBox"/>
    <text x="600" y="350" text-anchor="middle" class="label">SnellΓÇÖs Law</text>
    <text x="600" y="380" text-anchor="middle" class="label">nΓéü sin╬╕Γéü = nΓéé sin╬╕Γéé</text>
    <text x="600" y="410" text-anchor="middle" class="label">Refractive Index (n)</text>
    <text x="600" y="440" text-anchor="middle" class="label">n_air Γëê 1.0003</text>
    <text x="600" y="470" text-anchor="middle" class="label">n_water Γëê 1.33</text>
    <text x="600" y="500" text-anchor="middle" class="label">n_glass Γëê 1.5 (typical)</text>

    <rect x="510" y="520" width="180" height="120" class="expBox"/>
    <text x="600" y="540" text-anchor="middle" class="label">Experimental Setup</text>
    <text x="600" y="565" text-anchor="middle" class="label">Ray Box ΓåÆ Prism (╬ö)</text>
    <text x="600" y="590" text-anchor="middle" class="label">Measure deviation to find n</text>

    <!-- Lenses Branch -->
    <line x1="600" y1="130" x2="850" y2="300" class="line"/>
    <text x="850" y="280" text-anchor="middle" class="subTitle">Lenses</text>
    <rect x="760" y="320" width="200" height="200" class="formulaBox"/>
    <text x="860" y="350" text-anchor="middle" class="label">Lens Formula</text>
    <text x="860" y="380" text-anchor="middle" class="label">1/f = 1/v + 1/u</text>
    <text x="860" y="410" text-anchor="middle" class="label">Magnification m = v/u</text>
    <text x="860" y="440" text-anchor="middle" class="label">Power P = 1/f (dioptre)</text>
    <text x="860" y="470" text-anchor="middle" class="label">Typical f (convex) = +10ΓÇ»cm</text>
    <text x="860" y="500" text-anchor="middle" class="label">Typical f (concave) = ΓÇô15ΓÇ»cm</text>

    <rect x="760" y="520" width="200" height="140" class="expBox"/>
    <text x="860" y="540" text-anchor="middle" class="label">Experimental SetΓÇæups</text>
    <text x="860" y="570" text-anchor="middle" class="label">1. Convex Lens ΓåÆ Distant Object ΓåÆ Screen</text>
    <text x="860" y="595" text-anchor="middle" class="label">2. Concave Mirror ΓåÆ Object ΓåÆ Screen</text>
    <text x="860" y="620" text-anchor="middle" class="label">3. LensΓÇæCombination (Convex+Concave) ΓåÆ Find net focal length</text>

    <!-- Footer Note -->
    <text x="600" y="870" text-anchor="middle" class="label" style="font-size:12px;">
      Prepared for NDA/CDS/AFCAT ΓÇô All formulas are in SI units (m, rad). Use ray diagrams for verification.
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
    <text x="330" y="310" text-anchor="middle" font-size="14" fill="#0f1117">ΓÇ£A body remains at rest or in uniform motion unless acted upon by a net external force.ΓÇ¥</text>
    <text x="330" y="340" text-anchor="middle" font-size="13" fill="#0f1117">Article: Principia (1687) ΓÇô Book I, Prop. 1</text>
    <text x="330" y="370" text-anchor="middle" font-size="13" fill="#0f1117">Key Concept: Inertia (╬╝)</text>

    <!-- Second Law Box -->
    <rect x="470" y="500" width="260" height="170" fill="#4ade80" rx="10"
          stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="530" text-anchor="middle" font-size="16" fill="#0f1117" font-weight="bold">2nd Law (F = ma)</text>
    <text x="600" y="560" text-anchor="middle" font-size="14" fill="#0f1117">Force (N) = Mass (kg) ├ù Acceleration (m/s┬▓)</text>
    <text x="600" y="590" text-anchor="middle" font-size="13" fill="#0f1117">Units: N = kg┬╖m┬╖sΓü╗┬▓</text>
    <text x="600" y="620" text-anchor="middle" font-size="13" fill="#0f1117">Experimental Setup: AtwoodΓÇÖs Machine</text>
    <text x="600" y="650" text-anchor="middle" font-size="13" fill="#0f1117">╬öm = mΓéü ΓÇô mΓéé, a = g┬╖╬öm/(mΓéü+mΓéé)</text>

    <!-- Third Law Box -->
    <rect x="740" y="250" width="260" height="140" fill="#60a5fa" rx="10"
          stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="870" y="280" text-anchor="middle" font-size="16" fill="#0f1117" font-weight="bold">3rd Law (ActionΓÇæReaction)</text>
    <text x="870" y="310" text-anchor="middle" font-size="14" fill="#0f1117">For every action, there is an equal and opposite reaction.</text>
    <text x="870" y="340" text-anchor="middle" font-size="13" fill="#0f1117">Formula: **FΓéüΓéé = ΓÇôFΓééΓéü**</text>
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
    <text x="170" y="710" text-anchor="middle" font-size="14" fill="#0f1117">Force ΓÇô Newton (N)</text>
    <text x="170" y="735" text-anchor="middle" font-size="14" fill="#0f1117">Mass ΓÇô Kilogram (kg)</text>
    <text x="170" y="760" text-anchor="middle" font-size="14" fill="#0f1117">Acceleration ΓÇô m/s┬▓</text>

    <!-- Additional Details: Experimental Setups Box -->
    <rect x="880" y="650" width="300" height="120" fill="#60a5fa" rx="8"
          stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="1030" y="680" text-anchor="middle" font-size="16" fill="#0f1117" font-weight="bold">Key Experiments</text>
    <text x="1030" y="710" text-anchor="middle" font-size="14" fill="#0f1117">ΓÇó AtwoodΓÇÖs Machine ΓÇô verifies F=ma</text>
    <text x="1030" y="735" text-anchor="middle" font-size="14" fill="#0f1117">ΓÇó Inclined Plane ΓÇô demonstrates inertia</text>
    <text x="1030" y="760" text-anchor="middle" font-size="14" fill="#0f1117">ΓÇó Sled on Track ΓÇô shows actionΓÇæreaction</text>
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
    <text x="200" y="135" text-anchor="middle" fill="#0f1117" font-size="14">W = F┬╖d┬╖cos╬╕</text>
    <text x="200" y="150" text-anchor="middle" fill="#0f1117" font-size="14">Unit: Joule (J)</text>

    <!-- Power -->
    <rect x="400" y="80" width="200" height="80" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="500" y="115" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Power</text>
    <text x="500" y="135" text-anchor="middle" fill="#0f1117" font-size="14">P = W/t = F┬╖v</text>
    <text x="500" y="150" text-anchor="middle" fill="#0f1117" font-size="14">Unit: Watt (W)</text>

    <!-- Energy -->
    <rect x="250" y="250" width="200" height="80" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="350" y="285" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Energy</text>

    <!-- Kinetic Energy -->
    <rect x="100" y="380" width="200" height="80" rx="10" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="200" y="415" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Kinetic Energy</text>
    <text x="200" y="435" text-anchor="middle" fill="#0f1117" font-size="14">KE = ┬╜mv┬▓</text>
    <text x="200" y="450" text-anchor="middle" fill="#0f1117" font-size="14">Unit: J</text>

    <!-- Potential Energy -->
    <rect x="400" y="380" width="200" height="80" rx="10" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="500" y="415" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Potential Energy</text>
    <text x="500" y="435" text-anchor="middle" fill="#0f1117" font-size="14">PE = mgh</text>
    <text x="500" y="450" text-anchor="middle" fill="#0f1117" font-size="14">Unit: J</text>

    <!-- Gravitation -->
    <rect x="700" y="80" width="260" height="120" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="830" y="115" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Gravitation</text>
    <text x="830" y="135" text-anchor="middle" fill="#0f1117" font-size="14">F = G┬╖(mΓéümΓéé)/r┬▓</text>
    <text x="830" y="155" text-anchor="middle" fill="#0f1117" font-size="14">G = 6.674├ù10Γü╗┬╣┬╣ N┬╖m┬▓/kg┬▓</text>
    <text x="830" y="175" text-anchor="middle" fill="#0f1117" font-size="14">Unit: N</text>

    <!-- Experimental Setups -->
    <rect x="700" y="250" width="260" height="200" rx="10" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="830" y="275" text-anchor="middle" fill="#0f1117" font-size="18" font-weight="bold">Experimental Setups</text>
    <text x="830" y="300" text-anchor="middle" fill="#0f1117" font-size="14">ΓÇó Inclined Plane (Work)</text>
    <text x="830" y="320" text-anchor="middle" fill="#0f1117" font-size="14">ΓÇó AtwoodΓÇÖs Machine (Power)</text>
    <text x="830" y="340" text-anchor="middle" fill="#0f1117" font-size="14">ΓÇó Simple Pendulum (Gravitation)</text>
    <text x="830" y="360" text-anchor="middle" fill="#0f1117" font-size="14">ΓÇó Cavendish Experiment (G)</text>

    <!-- Arrows connecting concepts -->
    <line x1="300" y1="160" x2="300" y2="250" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="500" y1="160" x2="500" y2="250" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="350" y1="330" x2="200" y2="380" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="350" y1="330" x2="500" y2="380" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="450" y1="200" x2="730" y2="140" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="550" y1="200" x2="730" y2="200" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="830" y1="230" x2="830" y2="250" stroke="#e2e8f0" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Footer note -->
    <text x="600" y="770" text-anchor="middle" fill="#60a5fa" font-size="14">Prepared for NDA / CDS / AFCAT Physics ΓÇô Energy &amp; Gravitation</text>
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
      <text x="125" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">Frequency (f) ΓÇô Hz</text>
      <rect x="50" y="280" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="125" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">Wavelength (╬╗) ΓÇô m</text>
      <rect x="50" y="320" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="125" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">Speed (v) ΓÇô m/s</text>
      <rect x="50" y="360" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="125" y="382" text-anchor="middle" fill="#e2e8f0" font-size="14">Amplitude (A) ΓÇô Pa</text>
    </g>

    <!-- Sound Laws -->
    <g>
      <rect x="250" y="240" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">v = f┬╖╬╗</text>
      <rect x="250" y="280" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">c = 331 + 0.6ΓÇ»T (┬░C)</text>
      <rect x="250" y="320" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">I = P/A</text>
      <rect x="250" y="360" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="382" text-anchor="middle" fill="#e2e8f0" font-size="14">╬▓ = 10ΓÇ»logΓéüΓéÇ(I/IΓéÇ) dB</text>
      <rect x="250" y="400" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="350" y="422" text-anchor="middle" fill="#e2e8f0" font-size="14">f' = fΓÇ»(v┬▒vΓéÇ)/(v┬▒vΓé¢)</text>
    </g>

    <!-- Sound Experimental Setups -->
    <g>
      <rect x="500" y="240" width="180" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="590" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">Resonance Tube</text>
      <rect x="500" y="280" width="180" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="590" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">KundtΓÇÖs Tube</text>
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
      <text x="725" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">Frequency (f) ΓÇô Hz</text>
      <rect x="650" y="280" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="725" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">Wavelength (╬╗) ΓÇô m</text>
      <rect x="650" y="320" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="725" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">Speed (c) = 3├ù10Γü╕ΓÇ»m/s</text>
      <rect x="650" y="360" width="150" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="725" y="382" text-anchor="middle" fill="#e2e8f0" font-size="14">Polarization</text>
    </g>

    <!-- EM Laws -->
    <g>
      <rect x="850" y="240" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="262" text-anchor="middle" fill="#e2e8f0" font-size="14">v = f┬╖╬╗</text>
      <rect x="850" y="280" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="302" text-anchor="middle" fill="#e2e8f0" font-size="14">E = h┬╖f (Planck)</text>
      <rect x="850" y="320" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="342" text-anchor="middle" fill="#e2e8f0" font-size="14">SnellΓÇÖs Law nΓéüsin╬╕Γéü = nΓéésin╬╕Γéé</text>
      <rect x="850" y="360" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="382" text-anchor="middle" fill="#e2e8f0" font-size="14">MaxwellΓÇÖs Eqns (Γêç├ùE = -ΓêéB/Γêét)</text>
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
      <text x="1115" y="462" text-anchor="middle" fill="#e2e8f0" font-size="13">XΓÇæray</text>
      <rect x="1050" y="480" width="130" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="1115" y="502" text-anchor="middle" fill="#e2e8f0" font-size="13">Gamma</text>
    </g>

    <!-- EM Experimental Setups -->
    <g>
      <rect x="850" y="420" width="200" height="30" fill="#60a5fa" rx="4" ry="4"/>
      <text x="950" y="442" text-anchor="middle" fill="#e2e8f0" font-size="14">DoubleΓÇæslit (Young)</text>
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
    <text x="470" y="315" fill="#e2e8f0" font-size="13">ΓÇó First Law: ╬öU = Q ΓÇô W</text>
    <text x="470" y="340" fill="#e2e8f0" font-size="13">ΓÇó Second Law: ╬öS ΓëÑ 0</text>
    <text x="470" y="365" fill="#e2e8f0" font-size="13">ΓÇó Zeroth Law: Thermal equilibrium</text>
    <text x="470" y="390" fill="#e2e8f0" font-size="13">ΓÇó Carnot Efficiency: ╬╖ = 1 ΓÇô Tc/Th</text>
    
    <!-- Heat Transfer -->
    <line x1="600" y1="100" x2="300" y2="150" stroke="#60a5fa" stroke-width="2"/>
    <rect x="200" y="150" width="200" height="70" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="300" y="190" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Heat Transfer</text>
    <!-- Modes -->
    <line x1="300" y1="220" x2="300" y2="260" stroke="#60a5fa" stroke-width="2"/>
    <rect x="180" y="260" width="240" height="180" rx="8" fill="#0f1117" stroke="#60a5fa" stroke-width="2"/>
    <text x="300" y="285" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Modes</text>
    <text x="190" y="315" fill="#e2e8f0" font-size="13">ΓÇó Conduction: q = ΓÇôkΓêçT (FourierΓÇÖs law)</text>
    <text x="190" y="340" fill="#e2e8f0" font-size="13">ΓÇó Convection: Q = hA(Ts ΓÇô Tf) (NewtonΓÇÖs law)</text>
    <text x="190" y="365" fill="#e2e8f0" font-size="13">ΓÇó Radiation: P = ╧âATΓü┤ (StefanΓÇæBoltzmann)</text>
    
    <!-- Units -->
    <line x1="600" y1="100" x2="900" y2="150" stroke="#60a5fa" stroke-width="2"/>
    <rect x="800" y="150" width="200" height="70" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="900" y="190" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Units</text>
    <!-- Specific Units -->
    <line x1="900" y1="220" x2="900" y2="260" stroke="#60a5fa" stroke-width="2"/>
    <rect x="780" y="260" width="240" height="150" rx="8" fill="#0f1117" stroke="#60a5fa" stroke-width="2"/>
    <text x="900" y="285" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Standard Units</text>
    <text x="790" y="315" fill="#e2e8f0" font-size="13">ΓÇó Energy: Joule (J)</text>
    <text x="790" y="340" fill="#e2e8f0" font-size="13">ΓÇó Heat: calorie (cal) = 4.184ΓÇ»J</text>
    <text x="790" y="365" fill="#e2e8f0" font-size="13">ΓÇó Power: Watt (W) = JΓÇ»sΓü╗┬╣</text>
    <text x="790" y="390" fill="#e2e8f0" font-size="13">ΓÇó Temperature: Kelvin (K)</text>
    
    <!-- Experimental Setups -->
    <line x1="600" y1="100" x2="600" y2="420" stroke="#60a5fa" stroke-width="2"/>
    <rect x="460" y="420" width="280" height="70" rx="8" fill="#4ade80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="460" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Experimental Setups</text>
    <!-- Details -->
    <line x1="600" y1="490" x2="600" y2="530" stroke="#60a5fa" stroke-width="2"/>
    <rect x="460" y="530" width="280" height="200" rx="8" fill="#0f1117" stroke="#60a5fa" stroke-width="2"/>
    <text x="600" y="555" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Key Apparatus</text>
    <text x="470" y="585" fill="#e2e8f0" font-size="13">ΓÇó Calorimeter (constantΓÇæpressure &amp; constantΓÇævolume)</text>
    <text x="470" y="610" fill="#e2e8f0" font-size="13">ΓÇó Carnot Engine (ideal reversible cycle)</text>
    <text x="470" y="635" fill="#e2e8f0" font-size="13">ΓÇó Thermocouple (Seebeck effect)</text>
    <text x="470" y="660" fill="#e2e8f0" font-size="13">ΓÇó BlackΓÇæbody cavity (radiation experiments)</text>
    
    <!-- Decorative Footer -->
    <text x="600" y="880" text-anchor="middle" fill="#60a5fa" font-size="12">Prepared for NDA / CDS / AFCAT ΓÇô 2024 Revision</text>
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
      <text x="20" y="60" fill="#e2e8f0" font-size="12">ΓÇó Charge (q) ΓÇô unit: Coulomb (C)</text>
      <text x="20" y="80" fill="#e2e8f0" font-size="12">ΓÇó CoulombΓÇÖs Law: F = k┬╖qΓéüqΓéé/r┬▓</text>
      <text x="20" y="100" fill="#e2e8f0" font-size="12">ΓÇó k = 1/4╧Ç╔¢ΓéÇ, ╔¢ΓéÇ = 8.854├ù10Γü╗┬╣┬▓ΓÇ»FΓÇ»mΓü╗┬╣</text>
      <text x="20" y="120" fill="#e2e8f0" font-size="12">ΓÇó Electric Field: E = F/q = k┬╖q/r┬▓ (NΓÇ»CΓü╗┬╣)</text>
      <text x="20" y="140" fill="#e2e8f0" font-size="12">ΓÇó Potential (V) ΓÇô unit: Volt (V)</text>
      <text x="20" y="160" fill="#e2e8f0" font-size="12">ΓÇó V = k┬╖q/r , ╬öV = Γê½E┬╖dl</text>
      <text x="20" y="180" fill="#e2e8f0" font-size="12">ΓÇó Capacitance (C) ΓÇô unit: Farad (F)</text>
    </g>

    <!-- Circuits Branch -->
    <line x1="600" y1="160" x2="600" y2="260" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="600" cy="260" r="55" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="265" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Circuits</text>

    <!-- Concepts under Circuits -->
    <g transform="translate(460,340)">
      <rect x="0" y="0" width="280" height="260" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="140" y="30" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="bold">Circuit Laws &amp; Elements</text>
      <text x="20" y="60" fill="#e2e8f0" font-size="12">ΓÇó OhmΓÇÖs Law: V = I┬╖R</text>
      <text x="20" y="80" fill="#e2e8f0" font-size="12">ΓÇó Power: P = V┬╖I = I┬▓R = V┬▓/R</text>
      <text x="20" y="100" fill="#e2e8f0" font-size="12">ΓÇó Resistivity: R = ╧ü┬╖L/A</text>
      <text x="20" y="120" fill="#e2e8f0" font-size="12">ΓÇó KirchhoffΓÇÖs Voltage Law (KVL)</text>
      <text x="20" y="140" fill="#e2e8f0" font-size="12">ΓÇó KirchhoffΓÇÖs Current Law (KCL)</text>
      <text x="20" y="160" fill="#e2e8f0" font-size="12">ΓÇó Series: RΓé¢ = ╬úR , I same</text>
      <text x="20" y="180" fill="#e2e8f0" font-size="12">ΓÇó Parallel: 1/RΓéÜ = ╬ú1/R , V same</text>
      <text x="20" y="200" fill="#e2e8f0" font-size="12">ΓÇó RC Time Constant: ╧ä = R┬╖C</text>
      <text x="20" y="220" fill="#e2e8f0" font-size="12">ΓÇó RL Time Constant: ╧ä = L/R</text>
      <text x="20" y="240" fill="#e2e8f0" font-size="12">ΓÇó RLC Resonance: ╧ëΓéÇ = 1/ΓêÜ(LC)</text>
    </g>

    <!-- Magnetism Branch -->
    <line x1="600" y1="160" x2="900" y2="260" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="900" cy="260" r="55" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="900" y="265" text-anchor="middle" fill="#e2e8f0" font-size="14" font-weight="bold">Magnetism</text>

    <!-- Concepts under Magnetism -->
    <g transform="translate(720,340)">
      <rect x="0" y="0" width="360" height="240" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="180" y="30" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="bold">Magnetic Laws &amp; Units</text>
      <text x="20" y="60" fill="#e2e8f0" font-size="12">ΓÇó Magnetic Field (B) ΓÇô unit: Tesla (T)</text>
      <text x="20" y="80" fill="#e2e8f0" font-size="12">ΓÇó BiotΓÇæSavart Law: dB = (╬╝ΓéÇ/4╧Ç)┬╖(IΓÇ»dl├ùr╠é)/r┬▓</text>
      <text x="20" y="100" fill="#e2e8f0" font-size="12">ΓÇó ╬╝ΓéÇ = 4╧Ç├ù10Γü╗Γü╖ΓÇ»HΓÇ»mΓü╗┬╣</text>
      <text x="20" y="120" fill="#e2e8f0" font-size="12">ΓÇó Amp├¿reΓÇÖs Law (integral): Γê«B┬╖dl = ╬╝ΓéÇIΓéæΓéÖc</text>
      <text x="20" y="140" fill="#e2e8f0" font-size="12">ΓÇó Lorentz Force: F = q(E + v├ùB)</text>
      <text x="20" y="160" fill="#e2e8f0" font-size="12">ΓÇó Force on CurrentΓÇæCarrying Conductor: F = IΓÇ»L├ùB</text>
      <text x="20" y="180" fill="#e2e8f0" font-size="12">ΓÇó Magnetic Flux (╬ª) ΓÇô unit: Weber (Wb)</text>
      <text x="20" y="200" fill="#e2e8f0" font-size="12">ΓÇó FaradayΓÇÖs Law: ╬╡ = -d╬ª/dt</text>
      <text x="20" y="220" fill="#e2e8f0" font-size="12">ΓÇó LenzΓÇÖs Rule (direction of induced emf)</text>
    </g>

    <!-- Experimental Setups Section (bottom) -->
    <line x1="300" y1="460" x2="300" y2="560" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="600" y1="460" x2="600" y2="560" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="900" y1="460" x2="900" y2="560" stroke="#e2e8f0" stroke-width="2"/>

    <!-- CoulombΓÇÖs Torsion Balance -->
    <circle cx="300" cy="580" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="300" y="585" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">CoulombΓÇÖs<br/>Torsion Balance</text>
    <text x="300" y="610" text-anchor="middle" fill="#e2e8f0" font-size="10">F = k┬╖qΓéüqΓéé/r┬▓ (1791)</text>

    <!-- Millikan OilΓÇæDrop -->
    <circle cx="600" cy="580" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="585" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Millikan<br/>OilΓÇæDrop</text>
    <text x="600" y="610" text-anchor="middle" fill="#e2e8f0" font-size="10">e = 1.602├ù10Γü╗┬╣Γü╣ΓÇ»C (1909)</text>

    <!-- OerstedΓÇÖs Experiment -->
    <circle cx="900" cy="580" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="900" y="585" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">OerstedΓÇÖs<br/>Experiment</text>
    <text x="900" y="610" text-anchor="middle" fill="#e2e8f0" font-size="10">Current Γçó Magnetic Field (1820)</text>

    <!-- Hall Effect Setup -->
    <line x1="300" y1="630" x2="300" y2="730" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="300" cy="750" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="300" y="755" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Hall Effect</text>
    <text x="300" y="780" text-anchor="middle" fill="#e2e8f0" font-size="10">V_H = (IB)/(ned)</text>

    <!-- Moving Coil Galvanometer -->
    <line x1="600" y1="630" x2="600" y2="730" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="600" cy="750" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="600" y="755" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">Moving<br/>Coil Galvanometer</text>
    <text x="600" y="780" text-anchor="middle" fill="#e2e8f0" font-size="10">Torque Γê¥ I┬╖B┬╖A</text>

    <!-- FaradayΓÇÖs Disk (Homopolar) -->
    <line x1="900" y1="630" x2="900" y2="730" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="900" cy="750" r="45" fill="#60a5fa" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="900" y="755" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="bold">FaradayΓÇÖs<br/>Disk</text>
    <text x="900" y="780" text-anchor="middle" fill="#e2e8f0" font-size="10">╬╡ = (B┬╖╧Ç┬╖r┬▓┬╖╧ë)/2╧Ç</text>
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

      <!-- SubΓÇænodes for Nuclear Physics -->
      <line x1="230" y1="170" x2="150" y2="240" stroke="#e2e8f0" stroke-width="2"/>
      <line x1="230" y1="170" x2="250" y2="240" stroke="#e2e8f0" stroke-width="2"/>

      <rect x="50" y="240" width="200" height="50" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="150" y="270" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Radioactive Decay<br/>N = NΓéÇeΓü╗╦íß╡ù</text>

      <rect x="250" y="240" width="200" height="70" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="350" y="260" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">HalfΓÇæLife<br/>T┬╜ = ln2 / ╬╗</text>
      <text x="350" y="280" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">MassΓÇæEnergy<br/>E = mc┬▓</text>

      <line x1="230" y1="170" x2="350" y2="340" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="300" y="340" width="200" height="80" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="400" y="360" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Binding Energy<br/>╬öE = (Z mΓéÜ + N mΓéÖ ΓÇô M) c┬▓</text>
      <text x="400" y="380" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Experimental Setups</text>
      <text x="400" y="400" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">ΓÇó Cloud Chamber</text>
      <text x="400" y="420" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">ΓÇó GeigerΓÇæM├╝ller Counter</text>
      <text x="400" y="440" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">ΓÇó Scintillation Detector</text>

      <!-- SubΓÇænodes for SI Units -->
      <line x1="770" y1="170" x2="660" y2="240" stroke="#e2e8f0" stroke-width="2"/>
      <line x1="770" y1="170" x2="880" y2="240" stroke="#e2e8f0" stroke-width="2"/>

      <rect x="560" y="240" width="200" height="80" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="660" y="260" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">SI Base Units</text>
      <text x="660" y="280" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">kg, m, s, A, K, mol, cd</text>
      <text x="660" y="300" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Derived Units</text>
      <text x="660" y="320" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">N = kg┬╖m┬╖sΓü╗┬▓, J = N┬╖m</text>

      <rect x="860" y="240" width="200" height="70" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="960" y="260" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Prefixes &amp; Everyday</text>
      <text x="960" y="280" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">k = 10┬│, M = 10Γü╢, ┬╡ = 10Γü╗Γü╢</text>
      <text x="960" y="300" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Power (W), Pressure (Pa)</text>

      <line x1="770" y1="170" x2="770" y2="340" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="670" y="340" width="200" height="90" fill="#4ade80" rx="6" ry="6" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <text x="770" y="360" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">Experimental Setups</text>
      <text x="770" y="380" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">ΓÇó Millikan OilΓÇæDrop</text>
      <text x="770" y="400" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">ΓÇó Cavendish (G)</text>
      <text x="770" y="420" text-anchor="middle" fill="#0f1117" font-family="Segoe UI" font-size="12">ΓÇó Interferometer (╬╗)</text>
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
        ΓÇó Formula: <tspan fill="#4ade80">F = m┬╖a</tspan>
      </text>
      <text x="120" y="280" fill="#e2e8f0" font-size="14">
        ΓÇó Unit: Force (N), Mass (kg), Acceleration (m/s┬▓)
      </text>
      <text x="120" y="310" fill="#e2e8f0" font-size="14">
        ΓÇó Experiment: Inclined plane, Atwood's machine
      </text>
      <text x="120" y="340" fill="#e2e8f0" font-size="14">
        ΓÇó Trend (NDA)
      </text>
      <text x="140" y="370" fill="#e2e8f0" font-size="13">
        2023: 4ΓÇ»Q (33%)
      </text>
      <text x="140" y="390" fill="#e2e8f0" font-size="13">
        2022: 5ΓÇ»Q (38%)
      </text>
      <text x="140" y="410" fill="#e2e8f0" font-size="13">
        2021: 3ΓÇ»Q (25%)
      </text>
    </g>

    <!-- Thermodynamics Box -->
    <g>
      <rect x="350" y="200" width="240" height="340" fill="#0f1117" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <rect x="350" y="200" width="240" height="30" fill="#60a5fa"/>
      <text x="470" y="222" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Thermodynamics</text>

      <text x="370" y="250" fill="#e2e8f0" font-size="14">
        ΓÇó Formula: <tspan fill="#4ade80">╬öU = Q ΓêÆ W</tspan>
      </text>
      <text x="370" y="280" fill="#e2e8f0" font-size="14">
        ΓÇó Unit: Energy (J), Heat (J), Work (J)
      </text>
      <text x="370" y="310" fill="#e2e8f0" font-size="14">
        ΓÇó Experiment: Calorimeter, Gas expansion
      </text>
      <text x="370" y="340" fill="#e2e8f0" font-size="14">
        ΓÇó Trend (NDA)
      </text>
      <text x="390" y="370" fill="#e2e8f0" font-size="13">
        2023: 2ΓÇ»Q (17%)
      </text>
      <text x="390" y="390" fill="#e2e8f0" font-size="13">
        2022: 2ΓÇ»Q (15%)
      </text>
      <text x="390" y="410" fill="#e2e8f0" font-size="13">
        2021: 3ΓÇ»Q (20%)
      </text>
    </g>

    <!-- Electromagnetism Box -->
    <g>
      <rect x="600" y="200" width="240" height="340" fill="#0f1117" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <rect x="600" y="200" width="240" height="30" fill="#60a5fa"/>
      <text x="720" y="222" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Electromagnetism</text>

      <text x="620" y="250" fill="#e2e8f0" font-size="14">
        ΓÇó Formula: <tspan fill="#4ade80">V = I┬╖R</tspan>
      </text>
      <text x="620" y="280" fill="#e2e8f0" font-size="14">
        ΓÇó Unit: Voltage (V), Current (A), Resistance (╬⌐)
      </text>
      <text x="620" y="310" fill="#e2e8f0" font-size="14">
        ΓÇó Experiment: Wheatstone bridge, CRT
      </text>
      <text x="620" y="340" fill="#e2e8f0" font-size="14">
        ΓÇó Trend (NDA)
      </text>
      <text x="640" y="370" fill="#e2e8f0" font-size="13">
        2023: 5ΓÇ»Q (42%)
      </text>
      <text x="640" y="390" fill="#e2e8f0" font-size="13">
        2022: 3ΓÇ»Q (23%)
      </text>
      <text x="640" y="410" fill="#e2e8f0" font-size="13">
        2021: 5ΓÇ»Q (42%)
      </text>
    </g>

    <!-- Modern Physics Box -->
    <g>
      <rect x="850" y="200" width="240" height="340" fill="#0f1117" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <rect x="850" y="200" width="240" height="30" fill="#60a5fa"/>
      <text x="970" y="222" text-anchor="middle" fill="#0f1117" font-size="16" font-weight="bold">Modern Physics</text>

      <text x="870" y="250" fill="#e2e8f0" font-size="14">
        ΓÇó Formula: <tspan fill="#4ade80">E = mc┬▓</tspan>
      </text>
      <text x="870" y="280" fill="#e2e8f0" font-size="14">
        ΓÇó Unit: Energy (J), Mass (kg), c = 3├ù10Γü╕ΓÇ»m/s
      </text>
      <text x="870" y="310" fill="#e2e8f0" font-size="14">
        ΓÇó Experiment: Photoelectric effect, PET scanner
      </text>
      <text x="870" y="340" fill="#e2e8f0" font-size="14">
        ΓÇó Trend (NDA)
      </text>
      <text x="890" y="370" fill="#e2e8f0" font-size="13">
        2023: 1ΓÇ»Q (8%)
      </text>
      <text x="890" y="390" fill="#e2e8f0" font-size="13">
        2022: 0ΓÇ»Q (0%)
      </text>
      <text x="890" y="410" fill="#e2e8f0" font-size="13">
        2021: 3ΓÇ»Q (25%)
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
    <text x="230" y="155" text-anchor="middle" fill="#e2e8f0" font-size="14">Strong: HCl, HΓééSOΓéä, HNOΓéâ, HClOΓéä, HBr, HI</text>
    <text x="230" y="175" text-anchor="middle" fill="#e2e8f0" font-size="14">Weak: CHΓéâCOOH, HΓééCOΓéâ, HΓéâPOΓéä</text>

    <!-- Bases -->
    <rect x="100" y="300" width="260" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="230" y="330" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Bases</text>
    <text x="230" y="355" text-anchor="middle" fill="#e2e8f0" font-size="14">Strong: NaOH, KOH, Ca(OH)Γéé</text>
    <text x="230" y="375" text-anchor="middle" fill="#e2e8f0" font-size="14">Weak: NHΓéâ, Al(OH)Γéâ</text>

    <!-- Salts -->
    <rect x="100" y="500" width="260" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="230" y="530" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Salts</text>
    <text x="230" y="555" text-anchor="middle" fill="#e2e8f0" font-size="14">Neutral: NaCl, KΓééSOΓéä</text>
    <text x="230" y="575" text-anchor="middle" fill="#e2e8f0" font-size="14">Acidic: NHΓéäCl, AlClΓéâ</text>
    <text x="230" y="595" text-anchor="middle" fill="#e2e8f0" font-size="14">Basic: NaΓééCOΓéâ, CaCOΓéâ</text>

    <!-- pH Indicators -->
    <rect x="500" y="100" width="300" height="150" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="650" y="130" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">pH Indicators</text>
    <text x="650" y="155" text-anchor="middle" fill="#e2e8f0" font-size="14">Phenolphthalein: Colorless ΓåÆ Pink (pHΓÇ»>ΓÇ»8.2)</text>
    <text x="650" y="175" text-anchor="middle" fill="#e2e8f0" font-size="14">Methyl Orange: Red ΓåÆ Yellow (pHΓÇ»3.1ΓÇæ4.4)</text>
    <text x="650" y="195" text-anchor="middle" fill="#e2e8f0" font-size="14">Litmus: Red (acid) Γåö Blue (base) (pHΓÇ»ΓëêΓÇ»7)</text>

    <!-- Neutralization Reaction -->
    <rect x="500" y="300" width="300" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="650" y="330" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Neutralization</text>
    <text x="650" y="355" text-anchor="middle" fill="#e2e8f0" font-size="14">HA + BOH ΓåÆ AΓü╗ + BΓü║ + HΓééO</text>
    <text x="650" y="375" text-anchor="middle" fill="#e2e8f0" font-size="14">e.g., HCl + NaOH ΓåÆ NaCl + HΓééO</text>

    <!-- Amphoteric Oxides -->
    <rect x="500" y="460" width="300" height="120" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="650" y="490" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">Amphoteric Oxides</text>
    <text x="650" y="515" text-anchor="middle" fill="#e2e8f0" font-size="14">AlΓééOΓéâ + 2HCl ΓåÆ 2AlClΓéâ + HΓééO</text>
    <text x="650" y="535" text-anchor="middle" fill="#e2e8f0" font-size="14">AlΓééOΓéâ + 2NaOH ΓåÆ 2NaAlOΓéé + HΓééO</text>

    <!-- pH Scale -->
    <rect x="950" y="100" width="300" height="380" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
    <text x="1100" y="130" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="bold">pH Scale (0ΓÇæ14)</text>
    <text x="1100" y="160" text-anchor="middle" fill="#e2e8f0" font-size="14">0ΓÇ»ΓÇôΓÇ»Strong Acid (e.g., 0.1ΓÇ»M HCl)</text>
    <text x="1100" y="190" text-anchor="middle" fill="#e2e8f0" font-size="14">7ΓÇ»ΓÇôΓÇ»Neutral (pure water)</text>
    <text x="1100" y="220" text-anchor="middle" fill="#e2e8f0" font-size="14">14ΓÇ»ΓÇôΓÇ»Strong Base (e.g., 0.1ΓÇ»M NaOH)</text>
    <text x="1100" y="250" text-anchor="middle" fill="#e2e8f0" font-size="14">Acidic (pHΓÇ»<ΓÇ»7) ΓåÆ Basic (pHΓÇ»>ΓÇ»7)</text>

    <!-- Arrows connecting concepts -->
    <!-- Acid ΓåÆ Neutralization -->
    <line x1="230" y1="220" x2="230" y2="300" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Base ΓåÆ Neutralization -->
    <line x1="230" y1="420" x2="230" y2="500" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Neutralization ΓåÆ Salts -->
    <line x1="230" y1="620" x2="230" y2="700" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Salts ΓåÆ Amphoteric Oxides (example) -->
    <line x1="230" y1="620" x2="500" y2="520" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Acid ΓåÆ pH Indicators -->
    <line x1="360" y1="160" x2="500" y2="160" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Base ΓåÆ pH Indicators -->
    <line x1="360" y1="340" x2="500" y2="340" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Indicators ΓåÆ pH Scale -->
    <line x1="800" y1="175" x2="950" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Neutralization ΓåÆ pH Scale -->
    <line x1="650" y1="420" x2="1100" y2="300" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <!-- Amphoteric Oxides ΓåÆ pH Scale -->
    <line x1="650" y1="580" x2="1100" y2="470" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Footer note -->
    <text x="1000" y="1250" text-anchor="middle" fill="#60a5fa" font-size="14">
      *Important for NDA, CDS, AFCAT ΓÇô memorize strong acids/bases, neutralization equations & indicator ranges.
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
    <text x="300" y="210" fill="#0f1117" style="font-size:14px;" text-anchor="middle">NaΓü║  +  ClΓü╗ ΓåÆ NaCl</text>
    <text x="300" y="235" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Lattice Energy Γëê 787ΓÇ»kJΓÇ»molΓü╗┬╣</text>
    <text x="300" y="260" fill="#0f1117" style="font-size:14px;" text-anchor="middle">High melting point, soluble in water</text>

    <!-- Covalent Bond -->
    <rect x="550" y="150" width="300" height="180" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="700" y="180" fill="#0f1117" style="font-size:18px; font-weight:bold;">Covalent Bond</text>
    <text x="700" y="210" fill="#0f1117" style="font-size:14px;" text-anchor="middle">HΓéé  +  OΓéé ΓåÆ HΓééO</text>
    <text x="700" y="235" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Bond Energy (OΓÇôH) Γëê 463ΓÇ»kJΓÇ»molΓü╗┬╣</text>
    <text x="700" y="260" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Polar covalent (╬öEN = 1.4)</text>
    <text x="700" y="285" fill="#0f1117" style="font-size:14px;" text-anchor="middle">VSEPR: Bent (104.5┬░)</text>

    <!-- Metallic Bond -->
    <rect x="950" y="150" width="300" height="130" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="1100" y="180" fill="#0f1117" style="font-size:18px; font-weight:bold;">Metallic Bond</text>
    <text x="1100" y="210" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Fe (0) ΓåÆ Fe┬▓Γü║ + 2eΓü╗</text>
    <text x="1100" y="235" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Delocalised electron sea</text>
    <text x="1100" y="260" fill="#0f1117" style="font-size:14px;" text-anchor="middle">High conductivity, ductility, malleability</text>

    <!-- Coordinate (Dative) Bond -->
    <rect x="1350" y="150" width="300" height="150" rx="8"
          style="fill:#4ade80; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="1500" y="180" fill="#0f1117" style="font-size:18px; font-weight:bold;">Coordinate Bond</text>
    <text x="1500" y="210" fill="#0f1117" style="font-size:14px;" text-anchor="middle">NHΓéâ + BFΓéâ ΓåÆ HΓéâNΓü║ΓÇôBFΓéâΓü╗</text>
    <text x="1500" y="235" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Lewis base donates lone pair</text>
    <text x="1500" y="260" fill="#0f1117" style="font-size:14px;" text-anchor="middle">Often seen in complex ions</text>

    <!-- Periodic Trends -->
    <rect x="950" y="340" width="300" height="200" rx="8"
          style="fill:#60a5fa; stroke:rgba(255,255,255,0.12); stroke-width:2;"></rect>
    <text x="1100" y="370" fill="#e2e8f0" style="font-size:18px; font-weight:bold;">Periodic Trends</text>
    <text x="1100" y="400" fill="#e2e8f0" style="font-size:14px;" text-anchor="middle">Electronegativity Γåæ across a period</text>
    <text x="1100" y="425" fill="#e2e8f0" style="font-size:14px;" text-anchor="middle">Pauling values: FΓÇ»=ΓÇ»3.98, OΓÇ»=ΓÇ»3.44, NΓÇ»=ΓÇ»3.04</text>
    <text x="1100" y="450" fill="#e2e8f0" style="font-size:14px;" text-anchor="middle">Atomic radius Γåô across a period</text>
    <text x="1100" y="475" fill="#e2e8f0" style="font-size:14px;" text-anchor="middle">Ionisation Energy Γåæ across a period</text>

    <!-- Connecting Lines -->
    <line x1="1150" y1="100" x2="300" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="1150" y1="100" x2="700" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="1150" y1="100" x2="1100" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="1150" y1="100" x2="1500" y2="150" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="1150" y1="230" x2="1100" y2="340" stroke="#60a5fa" stroke-width="2" marker-end="url(#arrow)"/>

    <!-- Additional Details -->
    <text x="1150" y="300" fill="#f59e0b" style="font-size:16px; font-weight:bold;">Bond Types Summary</text>
    <text x="1150" y="330" fill="#e2e8f0" style="font-size:14px;">
      ΓÇó Ionic ΓÇô Electrostatic attraction (╬öEN > 1.7)  
      ΓÇó Covalent ΓÇô Sharing of electrons (╬öEN Γëñ 1.7)  
      ΓÇó Metallic ΓÇô Delocalised electrons in lattice  
      ΓÇó Coordinate ΓÇô LoneΓÇæpair donation
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
        <li>Hematite ΓÇô FeΓééOΓéâ</li>
        <li>Bauxite ΓÇô AlΓééOΓéâ┬╖HΓééO</li>
        <li>Chalcopyrite ΓÇô CuFeSΓéé</li>
        <li>Galena ΓÇô PbS</li>
      </ul>
    </div>
    <!-- Extraction reactions -->
    <div style="position:absolute; left:300px; top:260px; width:260px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#60a5fa;">Extraction</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>FeΓééOΓéâ + 3CO ΓåÆ 2Fe + 3COΓéé (Blast furnace)</li>
        <li>AlΓééOΓéâ + 3C ΓåÆ 2Al + 3CO (HallΓÇæH├⌐roult)</li>
        <li>CuFeSΓéé + 4OΓéé ΓåÆ Cu + FeΓééOΓéâ + 2SOΓéé</li>
      </ul>
    </div>
    <!-- Alloys -->
    <div style="position:absolute; left:600px; top:100px; width:180px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#4ade80;">Alloys</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>Brass ΓÇô Cu + Zn</li>
        <li>Bronze ΓÇô Cu + Sn</li>
        <li>Steel ΓÇô Fe + C (Γëñ2%)</li>
        <li>Solder ΓÇô Sn + Pb</li>
      </ul>
    </div>
    <!-- Metallurgy processes -->
    <div style="position:absolute; left:850px; top:100px; width:260px; padding:10px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:6px;">
      <h3 style="margin:0; font-size:16px; color:#60a5fa;">Metallurgy</h3>
      <ul style="margin:5px 0 0 15px; padding:0; font-size:14px; color:#e2e8f0;">
        <li>Roasting ΓåÆ Oxide</li>
        <li>Reduction ΓÇô Carbon, Hydrogen</li>
        <li>ElectroΓÇærefining (Cu, Ag)</li>
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
        <li>Zn + CuSOΓéä ΓåÆ ZnSOΓéä + Cu (Zn Γåæ)</li>
        <li>Fe + CuSOΓéä ΓåÆ FeSOΓéä + Cu (Fe Γåæ)</li>
        <li>Mg + 2HΓééO ΓåÆ Mg(OH)Γéé + HΓéé (Mg Γåæ)</li>
        <li>Al + 3HΓééSOΓéä ΓåÆ AlΓéé(SOΓéä)Γéâ + 3HΓéé (Al Γåæ)</li>
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
      <!-- Metals ΓåÆ Ores -->
      <line x1="140" y1="180" x2="300" y2="130" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <!-- Metals ΓåÆ Alloys -->
      <line x1="140" y1="180" x2="660" y2="130" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <!-- Metals ΓåÆ Metallurgy -->
      <line x1="140" y1="180" x2="880" y2="130" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <!-- Reactivity Series ΓåÆ Displacement -->
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
      <text x="300" y="200" text-anchor="middle" fill="#0f1117" font-size="12">COΓéé, CO, HΓééCOΓéâ</text>
      <text x="300" y="220" text-anchor="middle" fill="#0f1117" font-size="12">Carbonates (CaCOΓéâ)</text>
      <text x="300" y="240" text-anchor="middle" fill="#0f1117" font-size="12">Carbides (CaCΓéé)</text>

      <!-- Organic Carbon Compounds -->
      <rect x="800" y="150" width="200" height="120" fill="#4ade80" rx="6" ry="6"/>
      <text x="900" y="175" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Organic Carbon Compounds</text>
      <text x="900" y="200" text-anchor="middle" fill="#0f1117" font-size="12">Alkanes, Alkenes, Alkynes</text>
      <text x="900" y="220" text-anchor="middle" fill="#0f1117" font-size="12">Aromatics, Functional Groups</text>

      <!-- Alkanes -->
      <rect x="720" y="300" width="160" height="50" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="330" text-anchor="middle" fill="#0f1117" font-size="12">Alkanes: CΓéÖHΓééΓéÖΓéèΓéé (e.g., CHΓéä)</text>

      <!-- Alkenes -->
      <rect x="720" y="370" width="160" height="50" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="400" text-anchor="middle" fill="#0f1117" font-size="12">Alkenes: CΓéÖHΓééΓéÖ (e.g., CΓééHΓéä)</text>

      <!-- Alkynes -->
      <rect x="720" y="440" width="160" height="50" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="470" text-anchor="middle" fill="#0f1117" font-size="12">Alkynes: CΓéÖHΓééΓéÖΓéïΓéé (e.g., CΓééHΓéé)</text>

      <!-- Aromatics -->
      <rect x="720" y="510" width="160" height="50" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="540" text-anchor="middle" fill="#0f1117" font-size="12">Aromatics: CΓéåHΓéå (Benzene)</text>

      <!-- Functional Groups -->
      <rect x="720" y="580" width="160" height="120" fill="#4ade80" rx="4" ry="4"/>
      <text x="800" y="610" text-anchor="middle" fill="#0f1117" font-size="12">Functional Groups</text>
      <text x="800" y="630" text-anchor="middle" fill="#0f1117" font-size="12">- Alcohol: RΓÇæOH</text>
      <text x="800" y="650" text-anchor="middle" fill="#0f1117" font-size="12">- Aldehyde: RΓÇæCHO</text>
      <text x="800" y="670" text-anchor="middle" fill="#0f1117" font-size="12">- Ketone: RΓÇæCOΓÇæR'</text>
      <text x="800" y="690" text-anchor="middle" fill="#0f1117" font-size="12">- Carboxylic Acid: RΓÇæCOOH</text>
      <text x="800" y="710" text-anchor="middle" fill="#0f1117" font-size="12">- Ester: RΓÇæCOOΓÇæR'</text>
      <text x="800" y="730" text-anchor="middle" fill="#0f1117" font-size="12">- Amine: RΓÇæNHΓéé</text>

      <!-- Mole Concept Box -->
      <rect x="500" y="400" width="200" height="200" fill="#f59e0b" rx="6" ry="6"/>
      <text x="600" y="425" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Mole Concept &amp; Concentration</text>
      <text x="600" y="450" text-anchor="middle" fill="#0f1117" font-size="12">Avogadro No.: 6.022├ù10┬▓┬│ molΓü╗┬╣</text>
      <text x="600" y="470" text-anchor="middle" fill="#0f1117" font-size="12">Molarity (M) = n/V (mol/L)</text>
      <text x="600" y="490" text-anchor="middle" fill="#0f1117" font-size="12">Molality (m) = n/kg (mol/kg)</text>
      <text x="600" y="510" text-anchor="middle" fill="#0f1117" font-size="12">Normality (N) = equivalents/L</text>
      <text x="600" y="530" text-anchor="middle" fill="#0f1117" font-size="12">% w/w = (mass solute / mass solution)├ù100</text>
      <text x="600" y="550" text-anchor="middle" fill="#0f1117" font-size="12">% v/v = (vol solute / vol solution)├ù100</text>

      <!-- Reaction Examples -->
      <rect x="350" y="630" width="500" height="150" fill="#4ade80" rx="6" ry="6"/>
      <text x="600" y="655" text-anchor="middle" fill="#0f1117" font-size="14" font-weight="bold">Key Reaction Examples</text>
      <text x="600" y="680" text-anchor="middle" fill="#0f1117" font-size="12">Combustion of Methane:</text>
      <text x="600" y="700" text-anchor="middle" fill="#0f1117" font-size="12">CHΓéä + 2 OΓéé ΓåÆ COΓéé + 2 HΓééO</text>
      <text x="600" y="720" text-anchor="middle" fill="#0f1117" font-size="12">Esterification (Acetic Acid + Ethanol):</text>
      <text x="600" y="740" text-anchor="middle" fill="#0f1117" font-size="12">CHΓéâCOOH + CΓééHΓéàOH Γçî CHΓéâCOOCΓééHΓéà + HΓééO</text>
      <text x="600" y="760" text-anchor="middle" fill="#0f1117" font-size="12">Hydrolysis of Ester:</text>
      <text x="600" y="780" text-anchor="middle" fill="#0f1117" font-size="12">CHΓéâCOOCΓééHΓéà + HΓééO ΓåÆ CHΓéâCOOH + CΓééHΓéàOH</text>

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
                                <li>ΓÇó No true nucleus</li>
                                <li>ΓÇó No membrane-bound organelles</li>
                                <li>ΓÇó Smaller (0.1-5 ┬╡m)</li>
                                <li>ΓÇó Ex: Bacteria, Archaea</li>
                                <li>ΓÇó Ribosomes: 70S</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); flex: 1;">
                            <strong style="color: #f59e0b;">EUKARYOTIC</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 10px; font-size: 0.9em;">
                                <li>ΓÇó True nucleus present</li>
                                <li>ΓÇó Membrane-bound organelles</li>
                                <li>ΓÇó Larger (10-100 ┬╡m)</li>
                                <li>ΓÇó Ex: Plants, Animals, Fungi</li>
                                <li>ΓÇó Ribosomes: 80S</li>
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
                                <li>ΓÇó Contains genetic material (DNA)</li>
                                <li>ΓÇó Controls cell activities</li>
                                <li>ΓÇó Nucleolus: rRNA synthesis</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Mitochondria</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó 'Powerhouse' of the cell</li>
                                <li>ΓÇó ATP production (Cellular Respiration)</li>
                                <li>ΓÇó Has own 70S ribosomes & DNA</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Chloroplasts</strong> (Plants)
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó Site of Photosynthesis</li>
                                <li>ΓÇó Contains Chlorophyll</li>
                                <li>ΓÇó Has own 70S ribosomes & DNA</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Endoplasmic Reticulum</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó RER: Protein synthesis & folding (ribosomes)</li>
                                <li>ΓÇó SER: Lipid synthesis, detoxification</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Golgi Apparatus</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó Modifies, sorts, packages proteins & lipids</li>
                                <li>ΓÇó Forms lysosomes</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Lysosomes</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó 'Suicidal bags'</li>
                                <li>ΓÇó Contain digestive enzymes</li>
                                <li>ΓÇó Waste breakdown</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Ribosomes</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó Protein synthesis</li>
                                <li>ΓÇó Free or attached to RER</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Cell Membrane</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó Phospholipid bilayer</li>
                                <li>ΓÇó Fluid Mosaic Model (Singer & Nicolson, 1972)</li>
                                <li>ΓÇó Selective permeability</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Cell Wall</strong> (Plants/Fungi/Bacteria)
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó Structural support & protection</li>
                                <li>ΓÇó Plant: Cellulose; Fungi: Chitin</li>
                            </ul>
                        </div>
                        <div style="background-color: #2a2e37; padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);">
                            <strong style="color: #4ade80;">Cytoskeleton</strong>
                            <ul style="list-style-type: none; padding: 0; margin-top: 5px; font-size: 0.85em;">
                                <li>ΓÇó Microtubules, Micro
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
      <text x="1010" y="175" text-anchor="middle" fill="#e2e8f0" font-size="14">SARSΓÇæCoVΓÇæ2</text>
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
        <text x="0" y="150" text-anchor="middle" fill="#e2e8f0" font-size="14">Adaptive (BΓÇæcells, TΓÇæcells)</text>
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
      <text x="600" y="720" text-anchor="middle" fill="#e2e8f0" font-size="16">Basic Reproduction Number: RΓéÇ = ╬▓ ├ù c ├ù D</text>
      <text x="600" y="750" text-anchor="middle" fill="#e2e8f0" font-size="14">╬▓ = transmission probability per contact</text>
      <text x="600" y="770" text-anchor="middle" fill="#e2e8f0" font-size="14">c = average contacts per day</text>
      <text x="600" y="790" text-anchor="middle" fill="#e2e8f0" font-size="14">D = infectious period (days)</text>

      <!-- Legal Reference -->
      <text x="600" y="830" text-anchor="middle" fill="#e2e8f0" font-size="14">Epidemic Diseases Act, 1897 ΓÇô Sec.ΓÇ»2: Power to take special measures</text>
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
        <text x="45" y="-35" font-size="12" fill="#60a5fa">Pollen ~30ΓÇ»┬╡m</text>
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
      ΓÇó 1 Zygote (2n) ΓåÆ Embryo<br/>
      ΓÇó 2 Polar Nuclei + 1 Male Nucleus ΓåÆ Triploid Endosperm (3n)
    </text>

    <!-- Seed Development Box -->
    <rect x="380" y="300" width="200" height="120" fill="none" stroke="#60a5fa" stroke-width="2"/>
    <text x="390" y="320" font-size="14" fill="#60a5fa">Seed Development</text>
    <text x="390" y="340" font-size="12" fill="#e2e8f0">
      ΓÇó Embryo (2n)<br/>
      ΓÇó Endosperm (3n)<br/>
      ΓÇó Seed coat (maternal)
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
      <text x="30" y="100" font-size="12" fill="#e2e8f0">ΓÇó Flowers (Angiosperms)</text>
      <text x="30" y="120" font-size="12" fill="#e2e8f0">ΓÇó Cones (Gymnosperms)</text>
      <text x="30" y="140" font-size="12" fill="#e2e8f0">ΓÇó Double fertilization</text>
      <text x="30" y="160" font-size="12" fill="#e2e8f0">ΓÇó Pollen size Γëê30ΓÇ»┬╡m</text>
      <!-- Asexual -->
      <rect x="260" y="60" width="220" height="200" fill="none" stroke="#60a5fa" stroke-width="2" rx="6"/>
      <text x="370" y="80" font-size="16" fill="#60a5fa" text-anchor="middle">Asexual</text>
      <text x="270" y="100" font-size="12" fill="#e2e8f0">ΓÇó Vegetative propagation</text>
      <text x="270" y="120" font-size="12" fill="#e2e8f0">   ΓÇô Tubers (e.g., Potato)</text>
      <text x="270" y="140" font-size="12" fill="#e2e8f0">   ΓÇô Runners (e.g., Strawberry)</text>
      <text x="270" y="160" font-size="12" fill="#e2e8f0">   ΓÇô Cuttings</text>
      <text x="270" y="180" font-size="12" fill="#e2e8f0">ΓÇó Hormone: Auxin (IAA) ΓÇô C16H18NO3</text>
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
      <text x="30" y="140" font-size="14" fill="#60a5fa">Gibberellin (GAΓéâ)</text>
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
      <text x="260" y="140" font-size="14" fill="#4ade80">Ethylene (CΓééHΓéä)</text>
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
      <text x="210" y="390" font-size="12" fill="#4ade80">Mitosis ΓåÆ Gametes</text>

      <circle cx="60" cy="200" r="80" fill="none" stroke="#e2e8f0" stroke-width="2"/>
      <text x="60" y="170" font-size="14" fill="#e2e8f0" text-anchor="middle">Gametes (n)</text>
      <line x1="120" y1="200" x2="140" y2="200" stroke="#4ade80" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <text x="140" y="190" font-size="12" fill="#4ade80">Fertilization</text>

      <line x1="140" y1="200" x2="180" y2="200" stroke="#4ade80" stroke-width="2"/>
      <line x1="180" y1="200" x2="200" y2="180" stroke="#4ade80" stroke-width="2"/>
      <line x1="200" y1="180" x2="200" y2="120" stroke="#4ade80" stroke-width="2"/>
      <line x1="200" y1="120" x2="200" y2="20" stroke="#4ade80" stroke-width="2"/>

      <!-- Labels for cycle -->
      <text x="200" y="420" font-size="12" fill="#e2e8f0" text-anchor="middle">Zygote ΓåÆ Sporophyte (2n)</text>
    </g>

  </svg>
</div>
`;

