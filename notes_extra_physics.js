window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};
EXPANDED_NOTES_DATA["reflection-refraction"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Reflection, Refraction & Lenses
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Reflection</strong> is the phenomenon where light rays bounce back upon striking a polished surface. The Law of Reflection states that the angle of incidence equals the angle of reflection (i = r), and the incident ray, reflected ray, and normal all lie in the same plane. In spherical mirrors, concave mirrors converge light, while convex mirrors diverge it. Remember: Concave mirrors are used in torches and shaving mirrors, while convex mirrors are used as rear-view mirrors in vehicles because they provide a wider field of view and always form diminished, virtual images.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Refraction</strong> occurs when light travels from one medium to another, causing a change in speed and direction. This is governed by Snell’s Law: <em>n₁ sin(i) = n₂ sin(r)</em>. When light moves from a rarer medium (like air) to a denser medium (like glass), it bends <em>towards</em> the normal. Conversely, moving from denser to rarer, it bends <em>away</em> from the normal. This phenomenon is responsible for the twinkling of stars, the apparent depth of a swimming pool, and the bending of a pencil in a glass of water.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Lenses</strong> are transparent media bounded by two surfaces. A convex lens (converging) is thicker at the center and is used to correct Hypermetropia (farsightedness). A concave lens (diverging) is thinner at the center and is used to correct Myopia (nearsightedness). The power of a lens is a measure of its ability to converge or diverge light; a positive power indicates a convex lens, while a negative power indicates a concave lens.
  </p>
  <svg viewBox="0 0 400 150" width="100%" height="auto" style="max-width: 400px; margin: 20px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#fbbf24" />
      </marker>
    </defs>
    <!-- Principal Axis -->
    <line x1="20" y1="75" x2="380" y2="75" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4 4"/>
    
    <!-- Convex Lens -->
    <path d="M 100 25 Q 130 75 100 125 Q 70 75 100 25" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" stroke-width="2"/>
    <text x="100" y="145" fill="var(--text-primary)" font-size="12" font-family="var(--font-main)" text-anchor="middle">Convex (Converging)</text>
    
    <!-- Ray tracing Convex -->
    <line x1="30" y1="45" x2="100" y2="45" stroke="#fbbf24" stroke-width="1.5"/>
    <line x1="100" y1="45" x2="170" y2="75" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)"/>
    <line x1="30" y1="105" x2="100" y2="105" stroke="#fbbf24" stroke-width="1.5"/>
    <line x1="100" y1="105" x2="170" y2="75" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)"/>

    <!-- Concave Lens -->
    <path d="M 290 25 Q 310 75 290 125 L 310 125 Q 290 75 310 25 Z" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" stroke-width="2"/>
    <text x="300" y="145" fill="var(--text-primary)" font-size="12" font-family="var(--font-main)" text-anchor="middle">Concave (Diverging)</text>

    <!-- Ray tracing Concave -->
    <line x1="230" y1="45" x2="295" y2="45" stroke="#fbbf24" stroke-width="1.5"/>
    <line x1="295" y1="45" x2="360" y2="15" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)"/>
    <line x1="230" y1="105" x2="295" y2="105" stroke="#fbbf24" stroke-width="1.5"/>
    <line x1="295" y1="105" x2="360" y2="135" stroke="#fbbf24" stroke-width="1.5" marker-end="url(#arrow)"/>
  </svg>

  <div style="margin: 20px 0; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 6px;">
    <h4 style="margin-top: 0;">Key Optical Phenomena</h4>
    <ul style="padding-left: 20px; line-height: 1.8;">
      <li><strong>Total Internal Reflection (TIR):</strong> Occurs when light travels from a denser to a rarer medium at an angle greater than the critical angle. Applications: Optical fibers, mirages, and sparkling diamonds.</li>
      <li><strong>Dispersion:</strong> The splitting of white light into its constituent colors (VIBGYOR) by a prism. Violet deviates the most; Red deviates the least.</li>
      <li><strong>Scattering:</strong> The Tyndall effect explains why the sky appears blue (shorter wavelengths scatter more) and why the sun appears red at sunrise/sunset.</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="margin-bottom: 8px;"><strong>Mirror Formula:</strong> 1/f = 1/v + 1/u</li>
    <li style="margin-bottom: 8px;"><strong>Lens Formula:</strong> 1/f = 1/v - 1/u</li>
    <li style="margin-bottom: 8px;"><strong>Lens Power:</strong> P = 1/f (in metres, unit: Dioptre)</li>
    <li style="margin-bottom: 8px;"><strong>Refractive Index:</strong> n = c/v (where c is speed of light in vacuum, v is speed in medium)</li>
    <li style="margin-bottom: 8px;"><strong>Magnification (m):</strong> m = h'/h = -v/u (for mirrors), m = v/u (for lenses)</li>
  </ul>

  <div style="margin-top: 20px; padding: 10px; border: 1px dashed var(--accent); border-radius: 4px;">
    <strong>Note: Exam Strategy:</strong> Always check the sign convention! For mirrors and lenses, the direction of incident light is positive. Distances measured against the direction of light are negative. <strong>Trap:</strong> Don't confuse the mirror formula (+) with the lens formula (-).
  </div>
</div>`;

EXPANDED_NOTES_DATA["newtons-laws"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Newton's Laws of Motion
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Newton’s Laws of Motion form the bedrock of Classical Mechanics. In the context of NDA and CDS examinations, these laws are not just theoretical definitions but are tested through their application in real-world scenarios—ranging from the recoil of a gun to the motion of satellites. Understanding these laws requires grasping the concept of <strong>Inertia</strong>, which is the inherent property of a body to resist any change in its state of rest or uniform motion.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The <strong>First Law (Law of Inertia)</strong> defines force as that which changes the state of rest or motion. It establishes that if the net external force is zero, an object will maintain its velocity (magnitude and direction). The <strong>Second Law</strong> provides the quantitative measure of force, linking it to the rate of change of momentum. This is where the famous equation <em>F = ma</em> originates, valid for constant mass systems.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The <strong>Third Law (Action-Reaction)</strong> is often misunderstood. It states that for every action, there is an equal and opposite reaction. Crucially, these forces act on <em>different bodies</em>, which is why they do not cancel each other out. This law is the fundamental principle behind rocket propulsion and the swimming of a fish.
  </p>
  <svg viewBox="0 0 400 130" width="100%" height="auto" style="max-width: 400px; margin: 20px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <defs>
      <marker id="arrow-f" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#fbbf24" />
      </marker>
      <marker id="arrow-a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
      </marker>
      <marker id="arrow-fr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
      </marker>
    </defs>
    <rect x="150" y="40" width="100" height="60" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2" rx="4"/>
    <text x="200" y="75" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Mass (m)</text>
    
    <!-- Applied Force -->
    <line x1="50" y1="70" x2="140" y2="70" stroke="#fbbf24" stroke-width="3" marker-end="url(#arrow-f)"/>
    <text x="95" y="60" fill="#fbbf24" font-size="12" font-family="var(--font-mono)" text-anchor="middle">F (Applied)</text>

    <!-- Friction -->
    <line x1="150" y1="95" x2="80" y2="95" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-fr)"/>
    <text x="115" y="115" fill="#ef4444" font-size="11" font-family="var(--font-mono)" text-anchor="middle">Friction (f)</text>

    <!-- Acceleration -->
    <line x1="260" y1="70" x2="350" y2="70" stroke="#10b981" stroke-width="2" stroke-dasharray="4 2" marker-end="url(#arrow-a)"/>
    <text x="305" y="60" fill="#10b981" font-size="12" font-family="var(--font-mono)" text-anchor="middle">a = F_net / m</text>
    
    <!-- Floor -->
    <line x1="20" y1="100" x2="380" y2="100" stroke="var(--text-secondary)" stroke-width="2"/>
  </svg>


  <div style="margin: 20px 0;">
    <h4 style="color: var(--text-primary); font-weight: 600; margin-bottom: 10px;">Core Principles Breakdown</h4>
    <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
      <li><strong>Inertia of Rest:</strong> A passenger falls backward when a bus starts suddenly because the lower body moves with the bus while the upper body tends to remain at rest.</li>
      <li><strong>Inertia of Motion:</strong> A passenger falls forward when a bus stops suddenly because the body continues to move due to inertia.</li>
      <li><strong>Impulse:</strong> Defined as the change in momentum (F × Δt). In cricket, a fielder pulls his hands back while catching a ball to increase the time (Δt), thereby reducing the force (F) exerted on his hands.</li>
      <li><strong>Conservation of Momentum:</strong> In the absence of an external force, the total momentum of a system remains constant. This is the principle behind the recoil of a gun (m<sub>g</sub>v<sub>g</sub> = -m<sub>b</sub>v<sub>b</sub>).</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Force:</strong> F = ma</li>
    <li style="padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Momentum:</strong> p = mv</li>
    <li style="padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Friction:</strong> f = μN (where μ is the coefficient of friction)</li>
    <li style="padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Equations of Motion:</strong> v = u + at, s = ut + 0.5at², v² - u² = 2as</li>
    <li style="padding: 5px 0;"><strong>Impulse:</strong> J = F × Δt = Δp</li>
  </ul>

  <div style="background: rgba(255, 215, 0, 0.1); padding: 15px; border-radius: 5px; margin-top: 20px; border: 1px solid rgba(255, 215, 0, 0.3);">
    <strong style="color: #ffd700;">Note: Exam Strategy Tip:</strong> 
    Always check the units! In NDA/CDS, questions often involve converting km/h to m/s (multiply by 5/18). Remember: <strong>Action and Reaction forces never act on the same body</strong>; if they did, the body would never accelerate.
  </div>
</div>`;

EXPANDED_NOTES_DATA["syl-exercises"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Work, Power, Energy & Gravitation
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    In the context of NDA and CDS physics, <strong>Work</strong> is defined not merely as effort, but as the product of the force applied and the displacement in the direction of that force. If you push a wall and it doesn't move, you have done zero work in the scientific sense. Work is a scalar quantity, meaning it has magnitude but no direction, though it can be positive, negative, or zero depending on the angle between force and displacement.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Energy</strong> is the capacity to do work. The two primary forms you must master are <strong>Kinetic Energy (KE)</strong>, the energy of motion, and <strong>Potential Energy (PE)</strong>, the energy of position or configuration. The Work-Energy Theorem is a crucial concept here: the net work done on an object equals its change in kinetic energy. Remember, energy is always conserved in an isolated system—it merely transforms from one form to another.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Gravitation</strong> is the universal force of attraction between any two masses. Newton’s Law of Universal Gravitation states that every particle attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them. This explains why the value of 'g' (acceleration due to gravity) varies with altitude, depth, and latitude on Earth.
  </p>

  <div style="margin: 20px 0;">
    <h4 style="color: var(--text-primary); font-weight: 600; margin-bottom: 10px;">Key Concepts Breakdown</h4>
    <ul style="list-style-type: disc; padding-left: 20px; line-height: 1.8;">
      <li><strong>Work Scenarios:</strong> If θ = 0°, Work is maximum (positive). If θ = 90°, Work is zero (e.g., a coolie carrying a load on his head while walking horizontally). If θ = 180°, Work is negative (e.g., friction acting against motion).</li>
      <li><strong>Power:</strong> It is the rate of doing work. It determines how fast energy is consumed or transferred.</li>
      <li><strong>Gravitational Variations:</strong> 'g' is maximum at the poles and minimum at the equator. 'g' becomes zero at the center of the Earth.</li>
      <li><strong>Escape Velocity:</strong> The minimum speed required for an object to break free from a planet's gravitational pull and never return.</li>
    </ul>
  </div>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding: 0;">
    <li style="margin-bottom: 8px;"><strong>Work:</strong> W = F·s·cosθ</li>
    <li style="margin-bottom: 8px;"><strong>Kinetic Energy:</strong> KE = 0.5mv² = p²/2m</li>
    <li style="margin-bottom: 8px;"><strong>Power:</strong> P = W/t = F·v</li>
    <li style="margin-bottom: 8px;"><strong>Conversion:</strong> 1 HP = 746 Watts</li>
    <li style="margin-bottom: 8px;"><strong>Gravitational Acceleration:</strong> g = GM/R²</li>
    <li style="margin-bottom: 8px;"><strong>Escape Velocity:</strong> vₑ = √(2gR) ≈ 11.2 km/s</li>
  </ul>

  <div style="margin-top: 20px; padding: 10px; background: rgba(255,255,255,0.05); border-radius: 5px;">
    <strong style="color: var(--accent);">Strategic Tip:</strong> In exam questions, always check the angle. If a force is applied perpendicular to the displacement, the work done is <strong>always zero</strong>. Don't get distracted by the magnitude of the force or displacement in such cases!
  </div>
</div>`;

EXPANDED_NOTES_DATA["physics-pyq-trends-topic"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> Physics PYQ Trends (NDA/CDS)
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    Physics in NDA and CDS examinations is not merely about rote memorization of formulas; it is a test of your conceptual clarity and your ability to apply fundamental laws to real-world scenarios. Over the last decade, the UPSC has shifted from asking direct "what is" questions to "why does this happen" and "what if" scenarios. The trend analysis reveals that approximately 60-70% of the physics paper is rooted in Class 9th and 10th NCERT concepts, while the remaining portion tests your analytical reasoning in Optics, Electricity, and Modern Physics.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    To master this section, you must treat Physics as a logical framework. For instance, in Optics, rather than memorizing ray diagrams, understand the behavior of light at interfaces. When light travels from a rarer to a denser medium, it bends towards the normal—think of this like a car moving from a smooth road onto a muddy patch; the side that hits the mud first slows down, causing the car to turn. This intuitive approach is what separates a topper from a candidate who struggles with complex numericals.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    The trend analysis highlights that "Electricity and Magnetism" and "Optics" are the highest-yielding chapters. UPSC frequently tests the relationship between variables (e.g., how resistance changes with length and area, or how focal length relates to power). Furthermore, "Modern Physics" (Radioactivity, Nuclear Fission/Fusion) has seen a surge in frequency. Do not ignore the "General Science" applications—questions often link physics principles to everyday life, such as why the sky is blue or how a transformer works.
  </p>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Strategic Breakdown of Topics</h4>
  <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 20px;">
    <li style="margin-bottom: 8px;"><strong>Optics:</strong> Focus on sign conventions, lens/mirror formulas, and the human eye defects (Myopia/Hypermetropia).</li>
    <li style="margin-bottom: 8px;"><strong>Electricity:</strong> Master Ohm’s Law, series/parallel combinations, and the heating effect of current (Joule's Law).</li>
    <li style="margin-bottom: 8px;"><strong>Mechanics:</strong> Focus on Newton’s Laws, Work-Energy Theorem, and Gravitation (specifically the variation of 'g').</li>
    <li style="margin-bottom: 8px;"><strong>Modern Physics:</strong> Understand the difference between Fission (splitting) and Fusion (combining) and the nature of Alpha, Beta, and Gamma rays.</li>
  </ul>

  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 6px;">• <strong>Refractive Index:</strong> n = c / v</li>
    <li style="margin-bottom: 6px;">• <strong>Rayleigh Scattering:</strong> I ∝ 1 / λ⁴</li>
    <li style="margin-bottom: 6px;">• <strong>Resistance:</strong> R = ρ·L / A</li>
    <li style="margin-bottom: 6px;">• <strong>Energy Conversion:</strong> 1 kWh = 3.6 × 10⁶ J</li>
    <li style="margin-bottom: 6px;">• <strong>Magnetic Dip Angle:</strong> 0° (Equator) | 90° (Poles)</li>
    <li style="margin-bottom: 6px;">• <strong>Power of Lens:</strong> P = 1/f (f in meters, unit is Dioptre)</li>
  </ul>

  <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 6px; margin-top: 20px;">
    <strong style="color: var(--accent);">Exam Trap Alert:</strong> UPSC often swaps "Series" and "Parallel" properties in questions. Remember: In Series, Current is constant; in Parallel, Voltage is constant. Always check the units before calculating—convert cm to meters and minutes to seconds!
  </div>
</div>`;

