const fs = require('fs');

const physicsAdditions = `
// ===================== MORE SCIENCE HIGH YIELD ADDITIONS =====================

// 1. Append Simple Machines, Levers & Kepler's 1st/2nd Laws to syl-exercises
const sylExercisesAdditions = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Simple Machines, Levers & Kepler's Laws</h2>
    
    <h3>1. Simple Machines</h3>
    <p>A simple machine is a mechanical device that changes the direction or magnitude of a force, allowing work to be done more easily. Key parameters include:</p>
    <ul>
      <li><strong>Mechanical Advantage (MA):</strong> The ratio of Load ($L$) to Effort ($E$): $\\\\text{MA} = \\\\frac{\\\\text{Load}}{\\\\text{Effort}}$. If $\\\\text{MA} > 1$, it acts as a force multiplier.</li>
      <li><strong>Velocity Ratio (VR):</strong> The ratio of distance moved by the effort ($d_E$) to the distance moved by the load ($d_L$): $\\\\text{VR} = \\\\frac{d_E}{d_L}$. This is a constant for a given machine structure.</li>
      <li><strong>Efficiency ($\\\\eta$):</strong> The ratio of work output to work input: $\\\\eta = \\\\frac{\\\\text{Work Output}}{\\\\text{Work Input}} = \\\\frac{\\\\text{MA}}{\\\\text{VR}}$. For an ideal machine, $\\\\eta = 1$ ($100\\\\%$); for real machines, $\\\\eta < 1$ due to friction.</li>
    </ul>
    
    <h3>2. Classification of Levers</h3>
    <p>Levers are classified into three classes based on the relative position of the <strong>Fulcrum (F)</strong>, <strong>Load (L)</strong>, and <strong>Effort (E)</strong>:</p>
    <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
      <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
        <th style="padding:8px; border:1px solid var(--border);">Class</th>
        <th style="padding:8px; border:1px solid var(--border);">Middle Element</th>
        <th style="padding:8px; border:1px solid var(--border);">Mechanical Advantage (MA)</th>
        <th style="padding:8px; border:1px solid var(--border);">Everyday Examples</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Class I</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">**Fulcrum (F)** is in the middle (L - F - E)</td>
        <td style="padding:8px; border:1px solid var(--border);">Can be $>1$, $=1$, or $<1$</td>
        <td style="padding:8px; border:1px solid var(--border);">Scissors, crowbar, seesaw, claw hammer, pliers, water pump handle.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Class II</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">**Load (L)** is in the middle (F - L - E)</td>
        <td style="padding:8px; border:1px solid var(--border);">**Always $> 1$** (always acts as a force multiplier)</td>
        <td style="padding:8px; border:1px solid var(--border);">Wheelbarrow, nutcracker, paper cutter, lemon squeezer, bottle opener.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Class III</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">**Effort (E)** is in the middle (F - E - L)</td>
        <td style="padding:8px; border:1px solid var(--border);">**Always $< 1$** (gains speed and distance at the expense of force)</td>
        <td style="padding:8px; border:1px solid var(--border);">Tweezers, fire tongs, fishing rod, sugar tongs, human forearm, broom.</td>
      </tr>
    </table>

    <h3>3. Kepler's Laws of Planetary Motion</h3>
    <ul>
      <li><strong>First Law (Law of Orbits):</strong> All planets move in elliptical orbits with the Sun at one of the two foci.</li>
      <li><strong>Second Law (Law of Equal Areas):</strong> A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time.
        <ul>
          <li>*Implication:* The orbital speed of a planet is not constant; it moves faster when closer to the Sun (perihelion) and slower when farther (aphelion). This is based on the <strong>Conservation of Angular Momentum</strong> ($mvr = \\\\text{constant}$).</li>
        </ul>
      </li>
      <li><strong>Third Law (Law of Periods):</strong> The square of the time period of revolution ($T$) of a planet is directly proportional to the cube of the semi-major axis ($r$) of its orbit: $T^2 \\\\propto r^3$.</li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["syl-exercises"] = (EXPANDED_NOTES_DATA["syl-exercises"] || "") + sylExercisesAdditions;

// 2. Append Anomalous Expansion & Heat Capacities to physics-heat
const physicsHeatAdditions = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2>️ Anomalous Expansion of Water, Latent Heat & Specific Heat</h2>
    
    <h3>1. Anomalous Expansion of Water</h3>
    <ul>
      <li>Generally, liquids expand on heating and contract on cooling. Water is a notable exception between $0^\\\\circ\\\\text{C}$ and $4^\\\\circ\\\\text{C}$:
        <ul>
          <li>When water at $0^\\\\circ\\\\text{C}$ is heated, it **contracts** until it reaches $4^\\\\circ\\\\text{C}$.</li>
          <li>Above $4^\\\\circ\\\\text{C}$, it expands normally.</li>
          <li>Therefore, **water has maximum density and minimum volume at $4^\\\\circ\\\\text{C}$** ($1000\\\\text{ kg/m}^3$ or $1\\\\text{ g/cm}^3$).</li>
        </ul>
      </li>
      <li>**Ecological Significance:** In freezing climates, when the atmospheric temperature drops, surface water cools, becomes denser, and sinks. This convection continues until all water reaches $4^\\\\circ\\\\text{C}$. Further cooling makes surface water less dense ($<4^\\\\circ\\\\text{C}$), which eventually freezes into ice on the surface. The ice acts as a thermal insulator, keeping the bottom water at $4^\\\\circ\\\\text{C}$ and allowing fish and aquatic life to survive.</li>
    </ul>

    <h3>2. Specific Heat Capacity vs Latent Heat</h3>
    <ul>
      <li><strong>Specific Heat Capacity ($c$):</strong> Heat required to raise the temperature of a unit mass of a substance by $1^\\\\circ\\\\text{C}$ (or $1\\\\text{ K}$): $Q = m \\\\cdot c \\\\cdot \\\\Delta T$.
        <ul>
          <li>Water has a very high specific heat capacity ($4184\\\\text{ J/kg}\\\\cdot\\\\text{K}$ or $1\\\\text{ cal/g}^\\\\circ\\\\text{C}$). This makes water excellent for cooling (car radiators) and causes land/sea breezes because land heats/cools faster than water.</li>
        </ul>
      </li>
      <li><strong>Latent Heat ($L$):</strong> Heat absorbed or released during a change of physical state at constant temperature: $Q = m \\\\cdot L$.
        <ul>
          <li>*Latent Heat of Fusion ($L_f$):* Solid &harr; Liquid phase change. For ice, $L_f \\\\approx 80\\\\text{ cal/g}$ ($3.36 \\\\times 10^5\\\\text{ J/kg}$).</li>
          <li>*Latent Heat of Vaporization ($L_v$):* Liquid &harr; Gas phase change. For water, $L_v \\\\approx 540\\\\text{ cal/g}$ ($2.26 \\\\times 10^6\\\\text{ J/kg}$).</li>
          <li>**High-Yield PYQ:** Steam at $100^\\\\circ\\\\text{C}$ causes much more severe burns than boiling water at $100^\\\\circ\\\\text{C}$. This is because steam releases its extra latent heat of vaporization ($540\\\\text{ cal/g}$) when it condenses on the skin.</li>
        </ul>
      </li>
      <li>**Triple Point of Water:** The unique temperature and pressure at which solid, liquid, and gaseous phases of water coexist in thermodynamic equilibrium: $T = 273.16\\\\text{ K}$ ($0.01^\\\\circ\\\\text{C}$) and $P = 611.65\\\\text{ Pa}$ ($0.006\\\\text{ atm}$).</li>
      <li>**Scale Equality:** Celsius and Fahrenheit scales read the same value at **$-40^\\\\circ$** ($-40^\\\\circ\\\\text{C} = -40^\\\\circ\\\\text{F}$).</li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["physics-heat"] = (EXPANDED_NOTES_DATA["physics-heat"] || "") + physicsHeatAdditions;

// 3. Append Mirror/Lens Applications & Eye Defects to reflection-refraction
const reflectionRefractionAdditions = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Practical Applications of Optics & Eye Defects</h2>
    
    <h3>1. Mirror & Lens Applications</h3>
    <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
      <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
        <th style="padding:8px; border:1px solid var(--border);">Device</th>
        <th style="padding:8px; border:1px solid var(--border);">Image Properties</th>
        <th style="padding:8px; border:1px solid var(--border);">Everyday Applications</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Concave Mirror</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Real/inverted (magnified/diminished) or virtual/erect/magnified (when object is inside focus).</td>
        <td style="padding:8px; border:1px solid var(--border);">Shaving and makeup mirrors (close range), dentists' mirrors, searchlights and headlights (bulb at focus produces parallel beam), solar furnaces.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Convex Mirror</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Always virtual, erect, and diminished. Has a very wide field of view.</td>
        <td style="padding:8px; border:1px solid var(--border);">Rear-view / side mirrors in vehicles (allows driver to see a wide traffic area), safety mirrors on sharp road curves.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Convex Lens</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Converging lens. Can form real/inverted and virtual/erect/magnified images.</td>
        <td style="padding:8px; border:1px solid var(--border);">Magnifying glasses, cameras, microscopes, telescopes, projector lenses, reading glasses for hypermetropia.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Concave Lens</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Diverging lens. Always forms virtual, erect, and diminished images.</td>
        <td style="padding:8px; border:1px solid var(--border);">Door peepholes, flashlights, glasses for correcting myopia.</td>
      </tr>
    </table>

    <h3>2. Human Eye Defects and Corrective Measures</h3>
    <ul>
      <li><strong>Myopia (Short-sightedness):</strong> Person can see nearby objects clearly but cannot focus on distant objects.
        <ul>
          <li>*Anatomy:* Eyeball is too long or eye lens curvature is too high. Light focuses **in front of the retina**.</li>
          <li>*Correction:* **Concave (Diverging) Lens** of suitable focal length to push the focus back to the retina.</li>
        </ul>
      </li>
      <li><strong>Hypermetropia (Long-sightedness):</strong> Person can see distant objects clearly but cannot focus on nearby objects.
        <ul>
          <li>*Anatomy:* Eyeball is too short or eye lens focal length is too long. Light focuses **behind the retina**.</li>
          <li>*Correction:* **Convex (Converging) Lens** to pre-converge light rays.</li>
        </ul>
      </li>
      <li><strong>Presbyopia:</strong> Old-age hypermetropia due to loss of accommodation. Ciliary muscles weaken, and the lens loses elasticity.
        <ul>
          <li>*Correction:* **Bifocal Lenses** (upper part is concave for distance, lower part is convex for reading).</li>
        </ul>
      </li>
      <li><strong>Astigmatism:</strong> Cornea has irregular curvature, so horizontal and vertical lines cannot be focused simultaneously.
        <ul>
          <li>*Correction:* **Cylindrical Lenses**.</li>
        </ul>
      </li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["reflection-refraction"] = (EXPANDED_NOTES_DATA["reflection-refraction"] || "") + reflectionRefractionAdditions;

// 4. Append Joule's Heating, Fuse, Power & Magnetism to physics-electricity-magnetism
const electricityMagnetismAdditions = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Heating Effects of Current & Earth's Magnetism</h2>
    
    <h3>1. Joule's Heating & Electrical Power</h3>
    <ul>
      <li><strong>Joule's Law of Heating:</strong> The heat ($H$) generated in a conductor of resistance ($R$) carrying current ($I$) for time ($t$) is: $H = I^2 \\\\cdot R \\\\cdot t$.</li>
      <li><strong>Electric Power ($P$):</strong> $P = V \\\\cdot I = I^2 \\\\cdot R = \\\\frac{V^2}{R}$. Unit: Watt (W).
        <ul>
          <li>*Commercial Unit of Energy:* Kilowatt-hour (kWh), commonly called a 'unit' of electricity.</li>
          <li>**$1\\\\text{ kWh} = 1000\\\\text{ W} \\\\times 3600\\\\text{ s} = 3.6 \\\\times 10^6\\\\text{ Joules}$**.</li>
        </ul>
      </li>
      <li><strong>Electric Fuse:</strong> Safety device placed in series with the live wire to prevent excessive current.
        <ul>
          <li>*Material:* Alloy of **Tin (Sn) and Lead (Pb)**.</li>
          <li>*Key Properties:* **Low melting point** (to melt and break the circuit on overload) and **high resistance**.</li>
        </ul>
      </li>
      <li><strong>Domestic Wiring:</strong> Live wire (Phase, red, $220\\\\text{ V}$), Neutral wire (black, zero potential), and Earth wire (green, safety ground path).</li>
    </ul>

    <h3>2. Earth's Magnetism</h3>
    <ul>
      <li>**Magnetic Declination ($\\\\theta$):** Angle between geographical meridian and magnetic meridian.</li>
      <li>**Magnetic Inclination / Dip ($\\\\delta$):** Angle between total Earth magnetic field and horizontal line.
        <ul>
          <li>**At the Magnetic Equator, Dip $\\\\delta = 0^\\\\circ$** (field is completely horizontal).</li>
          <li>**At the Magnetic Poles, Dip $\\\\delta = 90^\\\\circ$** (field is completely vertical).</li>
        </ul>
      </li>
      <li>**Horizontal Component ($B_H$):** $B_H = B \\\\cos\\\\delta$. This is the component that directs compass needles.</li>
    </ul>

    <h3>3. Classification of Magnetic Substances</h3>
    <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
      <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
        <th style="padding:8px; border:1px solid var(--border);">Property / Class</th>
        <th style="padding:8px; border:1px solid var(--border);">Diamagnetic</th>
        <th style="padding:8px; border:1px solid var(--border);">Paramagnetic</th>
        <th style="padding:8px; border:1px solid var(--border);">Ferromagnetic</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Magnet Behavior</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Weakly repelled by magnetic fields. Moves from stronger to weaker field.</td>
        <td style="padding:8px; border:1px solid var(--border);">Weakly attracted by magnetic fields. Moves from weaker to stronger field.</td>
        <td style="padding:8px; border:1px solid var(--border);">Strongly attracted. Moves rapidly from weaker to stronger field.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Susceptibility ($\\\\chi$)</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Negative and small ($-1 \\\\le \\\\chi < 0$)</td>
        <td style="padding:8px; border:1px solid var(--border);">Positive and small ($0 < \\\\chi < \\\\epsilon$)</td>
        <td style="padding:8px; border:1px solid var(--border);">Positive and extremely large ($\\\\chi \\\\gg 1000$)</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Examples</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Bismuth, Copper, Water, Gold, Mercury, Superconductors (perfect diamagnets).</td>
        <td style="padding:8px; border:1px solid var(--border);">Aluminum, Sodium, Calcium, Oxygen, Platinum, Manganese.</td>
        <td style="padding:8px; border:1px solid var(--border);">Iron, Cobalt, Nickel, Gadolinium, Alnico (alloy).</td>
      </tr>
    </table>
  </div>
\`;
EXPANDED_NOTES_DATA["physics-electricity-magnetism"] = (EXPANDED_NOTES_DATA["physics-electricity-magnetism"] || "") + electricityMagnetismAdditions;

// 5. Append Coal, Gas Fuels, Refining, Soap Micelles, Glass & Cement to chemistry-everyday-fertilisers
const chemistryEverydayAdditions = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Fuel Chemistry, Soap Micelles, Glass & Medicines</h2>
    
    <h3>1. Coal Classification & Fuel Gases</h3>
    <ul>
      <li><strong>Coal Varieties (By Carbon Content):</strong>
        <ul>
          <li>*Peat:* $< 40\\\\%$ carbon. Organic matter partially decayed. Low heat, high smoke.</li>
          <li>*Lignite:* $40 - 55\\\\%$ carbon. Soft brown coal. High moisture, lower heat value.</li>
          <li>*Bituminous:* $55 - 80\\\\%$ carbon. Most abundant household/metallurgical coal.</li>
          <li>*Anthracite:* $> 80\\\\%$ carbon. Hardest and best grade. Burns slowly, no smoke, highest heat output.</li>
        </ul>
      </li>
      <li><strong>High-Yield Gaseous Fuels:</strong>
        <ul>
          <li>**Water Gas:** **$CO + H_2$**. Made by passing steam over white-hot coke. High industrial fuel value.</li>
          <li>**Producer Gas:** **$CO + N_2$**. Made by passing air over red-hot coke. Low calorific value.</li>
          <li>**Biogas (Gobar Gas):** Mainly **Methane ($CH_4$, 50-70%)** and $CO_2$, with trace $H_2S$. Formed by anaerobic bacterial decay.</li>
          <li>**Natural Gas:** Mostly **Methane ($CH_4$, 85-90%)**, with ethane and propane.</li>
        </ul>
      </li>
    </ul>

    <h3>2. Cleansing Action of Soaps (Micelles)</h3>
    <ul>
      <li>**Soap Molecule Structure:** Sodium/potassium salts of fatty acids. Have two parts:
        <ul>
          <li>*Hydrophobic Tail:* Hydrocarbon chain (oil-loving/water-hating).</li>
          <li>*Hydrophilic Head:* Ionic carboxylate group (water-loving/oil-hating, $-COO^-Na^+$).</li>
        </ul>
      </li>
      <li>**Micelle Formation:** In water, soap molecules cluster in a sphere. The hydrophobic tails point inward to trap grease/dirt, while the hydrophilic heads point outward. This spherical structure is a **Micelle**. Rinsing pulls these micelles away, lifting the grease.</li>
      <li>**Scum in Hard Water:** Hard water contains $Ca^{2+}$ and $Mg^{2+}$ ions. These react with soap to form insoluble precipitates (**Scum**), rendering soap ineffective. Detergents (ammonium/sulfonate salts) do not form scum in hard water.</li>
    </ul>

    <h3>3. Industrial Glass, Cement & Medicine Categories</h3>
    <ul>
      <li><strong>Glass Types and Uses:</strong>
        <ul>
          <li>**Flint Glass:** Contains lead oxide ($PbO$). High refractive index. Used for **lenses, prisms, and crystal tableware**.</li>
          <li>**Pyrex / Borosilicate Glass:** Contains boric oxide ($B_2O_3$). Low thermal expansion. Used for **laboratory glassware and baking dishes**.</li>
          <li>**Soda-lime Glass:** Soft glass, made of silicates of sodium and calcium. Used for **windows and bottles**.</li>
          <li>**Crown Glass:** High durability, low refractive index. Used in optical lenses.</li>
        </ul>
      </li>
      <li><strong>Cement & Gypsum Role:</strong> Cement is made of calcium silicates/aluminates. **Gypsum ($CaSO_4 \\\\cdot 2H_2O$)** is added to **retard the setting time** so it does not solidify instantly.</li>
      <li><strong>Medicinal Chemicals:</strong>
        <ul>
          <li>**Antacids:** Neutralize excess stomach acid ($HCl$). E.g., **Milk of Magnesia [$Mg(OH)_2$]**, aluminum hydroxide.</li>
          <li>**Analgesics:** Painkillers. E.g., **Aspirin** (acetylsalicylic acid, also anti-clotting), **Paracetamol** (fever/pain).</li>
          <li>**Antibiotics:** Kill or inhibit bacteria. E.g., **Penicillin** (first antibiotic, discovered by Fleming).</li>
          <li>**Antiseptics vs Disinfectants:** Antiseptics are safe for **living tissue** (e.g., **Dettol**, **Tincture of Iodine** - iodine in alcohol). Disinfectants are toxic and used on **non-living surfaces** (e.g., $1\\\\%$ phenol, chlorine).</li>
        </ul>
      </li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["chemistry-everyday-fertilisers"] = (EXPANDED_NOTES_DATA["chemistry-everyday-fertilisers"] || "") + chemistryEverydayAdditions;

// 6. Append Pathogenic Diseases Table to diseases
const diseasesAdditions = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Comprehensive Pathogenic Diseases Reference</h2>
    
    <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
      <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
        <th style="padding:8px; border:1px solid var(--border);">Type</th>
        <th style="padding:8px; border:1px solid var(--border);">Disease</th>
        <th style="padding:8px; border:1px solid var(--border);">Causative Agent</th>
        <th style="padding:8px; border:1px solid var(--border);">Vector / Mode</th>
        <th style="padding:8px; border:1px solid var(--border);">Target Organ / Main Symptoms</th>
      </tr>
      <tr>
        <td rowspan="4" style="padding:8px; border:1px solid var(--border); font-weight:bold; vertical-align:middle;">Viral</td>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Rabies (Hydrophobia)</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Rabies virus (Lyssavirus)</td>
        <td style="padding:8px; border:1px solid var(--border);">Bite of rabid animal (dog, monkey)</td>
        <td style="padding:8px; border:1px solid var(--border);">Nervous system. Spasms of throat, fear of water, always fatal.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Polio</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Poliovirus</td>
        <td style="padding:8px; border:1px solid var(--border);">Contaminated food/water (fecal-oral)</td>
        <td style="padding:8px; border:1px solid var(--border);">Motor neurons of spinal cord, leading to limbs paralysis.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Dengue</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Dengue virus</td>
        <td style="padding:8px; border:1px solid var(--border);">Bite of female **Aedes aegypti** mosquito</td>
        <td style="padding:8px; border:1px solid var(--border);">Joint and muscle pain ("breakbone fever"), rapid drop in platelets.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>AIDS</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">HIV (Retrovirus)</td>
        <td style="padding:8px; border:1px solid var(--border);">Body fluids, blood, sexual contact</td>
        <td style="padding:8px; border:1px solid var(--border);">Destroys **Helper T-lymphocytes (CD4 cells)**. Diagnosed via **ELISA**.</td>
      </tr>
      <tr>
        <td rowspan="4" style="padding:8px; border:1px solid var(--border); font-weight:bold; vertical-align:middle;">Bacterial</td>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Tuberculosis (TB)</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Mycobacterium tuberculosis</td>
        <td style="padding:8px; border:1px solid var(--border);">Airborne droplets (coughing)</td>
        <td style="padding:8px; border:1px solid var(--border);">Lungs. Bloody sputum, chest pain. Prevented by **BCG Vaccine**.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Typhoid</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Salmonella typhi</td>
        <td style="padding:8px; border:1px solid var(--border);">Contaminated food & water</td>
        <td style="padding:8px; border:1px solid var(--border);">Intestines. Sustained fever, headache. Diagnosed by **Widal Test**.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Cholera</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Vibrio cholerae</td>
        <td style="padding:8px; border:1px solid var(--border);">Contaminated water/food</td>
        <td style="padding:8px; border:1px solid var(--border);">Intestine. Severe vomiting, dehydration, "rice-water stools".</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Tetanus</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Clostridium tetani</td>
        <td style="padding:8px; border:1px solid var(--border);">Rust/dirty cuts (spores in soil)</td>
        <td style="padding:8px; border:1px solid var(--border);">Nervous system. Muscle rigidity, lockjaw. Prevented by **DPT Vaccine**.</td>
      </tr>
      <tr>
        <td rowspan="2" style="padding:8px; border:1px solid var(--border); font-weight:bold; vertical-align:middle;">Protozoan</td>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Malaria</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Plasmodium (falciparum, vivax)</td>
        <td style="padding:8px; border:1px solid var(--border);">Bite of female **Anopheles** mosquito</td>
        <td style="padding:8px; border:1px solid var(--border);">Liver & RBCs. High chills and fever cycles. Treated with Quinine/Chloroquine.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Kala-Azar</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Leishmania donovani</td>
        <td style="padding:8px; border:1px solid var(--border);">Bite of infected **Sandfly**</td>
        <td style="padding:8px; border:1px solid var(--border);">Spleen, liver, bone marrow. Weight loss, anaemia, fever.</td>
      </tr>
    </table>
  </div>
\`;
EXPANDED_NOTES_DATA["diseases"] = (EXPANDED_NOTES_DATA["diseases"] || "") + diseasesAdditions;

// 7. Append Mendel's Laws, DNA/RNA & Genetics Disorders to cell-structure
const cellStructureAdditions = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Genetics Basics, Mendel's Laws & Disorders</h2>
    
    <h3>1. Mendel's Laws of Inheritance</h3>
    <ul>
      <li>**Law of Dominance:** In a cross of parents that are pure for contrasting traits, only one form of the trait (dominant) will appear in the next generation ($F_1$). The other trait (recessive) is masked.</li>
      <li>**Law of Segregation (Purity of Gametes):** When gametes are formed, the two alleles of a gene segregate so that each gamete receives only one allele.</li>
      <li>**Law of Independent Assortment:** Alleles for different traits are distributed to sex cells independently of one another (valid for genes on different chromosomes).</li>
    </ul>

    <h3>2. DNA vs RNA Molecular Differences</h3>
    <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
      <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
        <th style="padding:8px; border:1px solid var(--border);">Property</th>
        <th style="padding:8px; border:1px solid var(--border);">DNA</th>
        <th style="padding:8px; border:1px solid var(--border);">RNA</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Strands</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Double-stranded (double helix)</td>
        <td style="padding:8px; border:1px solid var(--border);">Single-stranded</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Sugar</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Deoxyribose (lacks -OH at 2' position, stable)</td>
        <td style="padding:8px; border:1px solid var(--border);">Ribose (has -OH at 2' position, reactive)</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Bases</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Adenine (A), Guanine (G), Cytosine (C), **Thymine (T)**</td>
        <td style="padding:8px; border:1px solid var(--border);">Adenine (A), Guanine (G), Cytosine (C), **Uracil (U)**</td>
      </tr>
    </table>

    <h3>3. Sex Determination & Genetic Disorders</h3>
    <ul>
      <li>**Sex Determination:** Humans have 46 chromosomes (44 autosomes + 2 sex chromosomes). Females are **XX**, males are **XY**. The father's sperm determines the baby's sex.</li>
      <li>**X-Linked Recessive Disorders:**
        <ul>
          <li>*Hemophilia (Bleeder's Disease):* Blood clotting cascade is defective.</li>
          <li>*Color Blindness:* Inability to distinguish red and green colors.</li>
          <li>*Note:* Males suffer most because they have only one X chromosome; females require homozygous recessive conditions to express the disorder.</li>
        </ul>
      </li>
      <li>**Chromosomal Disorders (Aneuploidy):**
        <ul>
          <li>*Down's Syndrome:* Trisomy of chromosome 21 ($47, XX/XY$). Symptoms: cognitive delays, flat face, short height.</li>
          <li>*Turner's Syndrome:* Monosomy of sex chromosome ($45, XO$). Symptoms: sterile females, webbed neck, lack of puberty.</li>
          <li>*Klinefelter's Syndrome:* Extra X chromosome in males ($47, XXY$). Symptoms: sterile males, feminized features (gynecomastia), long limbs.</li>
        </ul>
      </li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["cell-structure"] = (EXPANDED_NOTES_DATA["cell-structure"] || "") + cellStructureAdditions;
`;

// Read the current contents of notes_extra_9.js
const currentNotes = fs.readFileSync('notes_extra_9.js', 'utf8');

// Append the new additions
fs.writeFileSync('notes_extra_9.js', currentNotes + physicsAdditions, 'utf8');
console.log('Successfully appended GAT science additions to notes_extra_9.js!');
