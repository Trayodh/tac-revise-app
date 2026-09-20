const fs = require('fs');

let notesJs = fs.readFileSync('notes_extra_9.js', 'utf8');

const highYieldAdditions = `
// ===================== HIGH YIELD ADDITIONS =====================

// 1. Append Everyday Devices to physics-units-everyday
const everydayDevicesHtml = \`
  <h3>3. Everyday Devices & Working Principles</h3>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Device</th>
      <th style="padding:8px; border:1px solid var(--border);">Working Principle</th>
      <th style="padding:8px; border:1px solid var(--border);">Energy Transformation</th>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Dynamo / Generator</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Electromagnetic Induction (Faraday's Law)</td>
      <td style="padding:8px; border:1px solid var(--border);">Mechanical Energy &rarr; Electrical Energy</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Electric Motor</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Magnetic force on a current-carrying conductor in a magnetic field</td>
      <td style="padding:8px; border:1px solid var(--border);">Electrical Energy &rarr; Mechanical Energy</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Transformer</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Mutual Induction (Step-up or Step-down AC voltage)</td>
      <td style="padding:8px; border:1px solid var(--border);">Electrical Energy &rarr; Electrical Energy (Changes V & I, not power/freq)</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Microphone</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Electromagnetic Induction or Capacitance change</td>
      <td style="padding:8px; border:1px solid var(--border);">Sound Energy &rarr; Electrical Energy</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Loudspeaker</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Magnetic force on a moving coil</td>
      <td style="padding:8px; border:1px solid var(--border);">Electrical Energy &rarr; Sound Energy</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Solar Cell</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Photovoltaic Effect (Semiconductor p-n junction)</td>
      <td style="padding:8px; border:1px solid var(--border);">Light Energy &rarr; Electrical Energy</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Electric Bulb (Incandescent)</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Joule's Heating Effect (Tungsten filament has high resistance & melting point)</td>
      <td style="padding:8px; border:1px solid var(--border);">Electrical Energy &rarr; Heat & Light Energy</td>
    </tr>
  </table>
\`;
EXPANDED_NOTES_DATA["physics-units-everyday"] = (EXPANDED_NOTES_DATA["physics-units-everyday"] || "") + everydayDevicesHtml;

// 2. Append Atomic Structure & Matter to syl-numerical
const atomicStructureHtml = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2>️ Atomic Structure & Classification of Matter</h2>
    
    <h3>1. Development of Atomic Models</h3>
    <ul>
      <li><strong>Thomson's Plum Pudding Model (1897):</strong> Atom is a sphere of positive charge with electrons embedded in it like seeds in a watermelon. Discovered the **Electron** (e/m ratio).</li>
      <li><strong>Rutherford's Alpha Scattering Experiment (1911):</strong> Bombarded thin gold foil with alpha particles.
        <ul>
          <li>*Observations:* Most alpha particles passed straight through; a few deflected at small angles; 1 in 20,000 rebounded by 180°.</li>
          <li>*Conclusions:* Most of the atom is empty space. All positive charge and mass are concentrated in a tiny central region called the **Nucleus**. Discovered the **Proton**.</li>
        </ul>
      </li>
      <li><strong>Bohr's Model (1913):</strong> Electrons revolve around the nucleus only in certain discrete, non-radiating orbits called stationary shells (K, L, M, N). Energy is emitted/absorbed only when an electron jumps from one orbit to another.</li>
      <li><strong>Subatomic Particles:</strong>
        <ul>
          <li>*Proton:* Positive charge ($+1.6 \\\\times 10^{-19}$ C), mass ~1 amu. Discovered by Rutherford/Goldstein.</li>
          <li>*Neutron:* Neutral (no charge), mass ~1 amu. Discovered by **James Chadwick (1932)**.</li>
          <li>*Electron:* Negative charge ($-1.6 \\\\times 10^{-19}$ C), mass ~1/1837 amu. Discovered by **J.J. Thomson**.</li>
        </ul>
      </li>
    </ul>

    <h3>2. Atomic Relations (Isotopes, Isobars, Isotones)</h3>
    <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
      <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
        <th style="padding:8px; border:1px solid var(--border);">Relation</th>
        <th style="padding:8px; border:1px solid var(--border);">Definition</th>
        <th style="padding:8px; border:1px solid var(--border);">Examples</th>
        <th style="padding:8px; border:1px solid var(--border);">Properties</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Isotopes</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Same Atomic Number ($Z$), different Mass Number ($A$). (Same protons, different neutrons).</td>
        <td style="padding:8px; border:1px solid var(--border);">\${'{}'}^1_1\\\\text{H} (Protium), \${'{}'}^2_1\\\\text{H} (Deuterium), \${'{}'}^3_1\\\\text{H} (Tritium).<br>\${'{}'}^{12}_6\\\\text{C}, \dots \${'{}'}^{14}_6\\\\text{C}.</td>
        <td style="padding:8px; border:1px solid var(--border);">Same chemical properties (same electron count), different physical properties.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Isobars</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Same Mass Number ($A$), different Atomic Number ($Z$).</td>
        <td style="padding:8px; border:1px solid var(--border);">\${'{}'}^{40}_{18}\\\\text{Ar} and \${'{}'}^{40}_{20}\\\\text{Ca}.</td>
        <td style="padding:8px; border:1px solid var(--border);">Different chemical and physical properties.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>Isotones</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">Same number of neutrons ($A - Z$).</td>
        <td style="padding:8px; border:1px solid var(--border);">\${'{}'}^{30}_{14}\\\\text{Si}, \${'{}'}^{31}_{15}\\\\text{P}, \${'{}'}^{32}_{16}\\\\text{S} (all have 16 neutrons).</td>
        <td style="padding:8px; border:1px solid var(--border);">Different chemical and physical properties.</td>
      </tr>
    </table>

    <h3>3. Elements, Compounds & Mixtures</h3>
    <ul>
      <li><strong>Element:</strong> Pure substance consisting of only one type of atom (e.g., Gold, Oxygen). Cannot be split by chemical means.</li>
      <li><strong>Compound:</strong> Pure substance formed by chemical combination of two or more elements in a fixed ratio (e.g., Water $H_2O$, Carbon Dioxide $CO_2$). Constituents lose their individual properties.</li>
      <li><strong>Mixture:</strong> Impure substance formed by physical mixing of two or more substances in any ratio (e.g., Air, Sand and salt). Constituents retain their properties.
        <ul>
          <li>*Homogeneous:* Uniform composition throughout (e.g., Salt solution, Alloys).</li>
          <li>*Heterogeneous:* Non-uniform composition (e.g., Muddy water, Gunpowder).</li>
        </ul>
      </li>
      <li><strong>Separation Techniques:</strong>
        <ul>
          <li>*Sublimation:* Separates volatile solids (Ammonium chloride, Camphor, Iodine, Naphthalene) from non-volatile solids.</li>
          <li>*Fractional Distillation:* Separates miscible liquids with boiling point difference $< 25^\\\\circ$C (e.g., petroleum fractions, liquid air components).</li>
          <li>*Centrifugation:* Separates insoluble suspended particles based on density (e.g., separating cream from milk).</li>
          <li>*Chromatography:* Separates solutes based on differential adsorption on a stationary phase (e.g., separating pigments from ink).</li>
        </ul>
      </li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["syl-numerical"] = (EXPANDED_NOTES_DATA["syl-numerical"] || "") + atomicStructureHtml;

// 3. Append Corrosion to metals-alloys
const corrosionHtml = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Corrosion & Prevention</h2>
    
    <h3>1. Rusting of Iron</h3>
    <ul>
      <li>Corrosion of iron is an electrochemical process occurring in the presence of **Oxygen (Air)** and **Moisture (Water)**.</li>
      <li>**Chemical Formula of Rust:** Hydrated Ferric Oxide &mdash; $\\\\text{Fe}_2\\\\text{O}_3 \\\\cdot x\\\\text{H}_2\\\\text{O}$ (reddish-brown flakey substance).</li>
      <li>**Mass Change:** During rusting, the weight of the iron piece **increases** because oxygen and water combine with the metal.</li>
      <li>**Factors Accelerating Rusting:** Presence of salts (saline/sea water increases conductivity), acidity, and impurities in iron.</li>
    </ul>

    <h3>2. Corrosion Prevention Methods</h3>
    <ul>
      <li><strong>Galvanization:</strong> Coating iron or steel with a thin protective layer of **Zinc (Zn)**. Even if the zinc coating is scratched, it acts as a sacrificial anode and corrodes instead of the iron.</li>
      <li><strong>Tinning:</strong> Coating copper or brass utensils with Tin (Sn) to prevent food contamination by organic acids.</li>
      <li><strong>Anodizing:</strong> Creating a thick oxide layer on the surface of **Aluminium** via electrolysis, making it highly corrosion-resistant.</li>
      <li><strong>Alloying:</strong> Mixing iron with Chromium and Nickel to make **Stainless Steel**, which does not rust.</li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["metals-alloys"] = (EXPANDED_NOTES_DATA["metals-alloys"] || "") + corrosionHtml;

// 4. Append Polymers & Plastics to chemistry-everyday-fertilisers
const polymersHtml = \`
  <h3>4. Polymers & Plastics</h3>
  <p>Polymers are macromolecular structures formed by joining repeating units called monomers:</p>
  <ul>
    <li><strong>Classification of Plastics:</strong>
      <ul>
        <li><strong>Thermoplastics:</strong> Linear polymers that soften easily on heating and harden on cooling, allowing them to be remolded repeatedly. E.g., **Polyethylene (Polythene)**, **PVC (Polyvinyl Chloride)**, Polystyrene.</li>
        <li><strong>Thermosetting Plastics:</strong> Heavily cross-linked polymers that undergo chemical change on heating to form a permanent, infusible three-dimensional network. Cannot be remolded. E.g., **Bakelite** (used for electrical switches, handles of utensils), **Melamine** (fire-resistant, used for unbreakable dinnerware).</li>
      </ul>
    </li>
    <li><strong>Common High-Yield Polymers:</strong>
      <ul>
        <li>**Teflon (PTFE):** Monomer is tetrafluoroethylene. Used as a non-stick coating for frying pans and gaskets.</li>
        <li>**Nylon-6,6:** A condensation copolymer of adipic acid and hexamethylenediamine. Very strong synthetic fiber, used for ropes, bristles, and parachutes.</li>
        <li>**Terylene (Dacron / Polyester):** Used in clothing and safety belts.</li>
        <li>**Natural Rubber:** A polymer of **Isoprene (2-methyl-1,3-butadiene)**. Vulcanized by heating with **Sulfur** to improve elasticity and strength.</li>
        <li>**Buna-S / Buna-N:** Synthetic rubbers used in vehicle tires.</li>
      </ul>
    </li>
  </ul>
\`;
EXPANDED_NOTES_DATA["chemistry-everyday-fertilisers"] = (EXPANDED_NOTES_DATA["chemistry-everyday-fertilisers"] || "") + polymersHtml;

// 5. Append Blood Groups, Rh & Nutrition to diseases
const bloodGroupsHtml = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Blood Groups, Rh Factor & Nutrition</h2>
    
    <h3>1. ABO Blood Group System</h3>
    <p>Discovered by **Karl Landsteiner (1900)**. Based on the presence or absence of antigens A and B on the surface of Red Blood Cells (RBCs):</p>
    <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
      <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
        <th style="padding:8px; border:1px solid var(--border);">Blood Group</th>
        <th style="padding:8px; border:1px solid var(--border);">Antigen on RBC</th>
        <th style="padding:8px; border:1px solid var(--border);">Antibody in Plasma</th>
        <th style="padding:8px; border:1px solid var(--border);">Can Receive From</th>
        <th style="padding:8px; border:1px solid var(--border);">Can Donate To</th>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>A</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">A</td>
        <td style="padding:8px; border:1px solid var(--border);">Anti-B</td>
        <td style="padding:8px; border:1px solid var(--border);">A, O</td>
        <td style="padding:8px; border:1px solid var(--border);">A, AB</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>B</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">B</td>
        <td style="padding:8px; border:1px solid var(--border);">Anti-A</td>
        <td style="padding:8px; border:1px solid var(--border);">B, O</td>
        <td style="padding:8px; border:1px solid var(--border);">B, AB</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>AB</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">A and B</td>
        <td style="padding:8px; border:1px solid var(--border);">None</td>
        <td style="padding:8px; border:1px solid var(--border);">A, B, AB, O (Universal Recipient)</td>
        <td style="padding:8px; border:1px solid var(--border);">AB only</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid var(--border);"><strong>O</strong></td>
        <td style="padding:8px; border:1px solid var(--border);">None</td>
        <td style="padding:8px; border:1px solid var(--border);">Anti-A and Anti-B</td>
        <td style="padding:8px; border:1px solid var(--border);">O only</td>
        <td style="padding:8px; border:1px solid var(--border);">A, B, AB, O (Universal Donor)</td>
      </tr>
    </table>

    <h3>2. Rh Factor Compatibility</h3>
    <ul>
      <li>**Rh Factor:** An antigen first discovered in the **Rhesus monkey**. Persons having it are Rh positive ($+$), others are Rh negative ($-$).</li>
      <li>**Universal Donor:** **$\\\\text{O}^{-}$** (lacks A, B, and Rh antigens, so it never triggers an immune response in recipients).</li>
      <li>**Universal Recipient:** **$\\\\text{AB}^{+}$** (has all antigens A, B, and Rh, so it has no antibodies to attack incoming blood).</li>
      <li><strong>Erythroblastosis Fetalis:</strong> A fatal hemolytic condition in pregnancy occurring when an **Rh-negative mother** carries an **Rh-positive fetus**. During the first delivery, the mother's blood becomes sensitized to Rh antigens, producing antibodies. In subsequent pregnancies, these antibodies cross the placenta and destroy the fetus's RBCs. Prevented by administering anti-Rh antibodies (Rh0GAM) to the mother post-delivery.</li>
    </ul>

    <h3>3. Human Nutrition (Macro & Micronutrients)</h3>
    <ul>
      <li><strong>Carbohydrates:</strong> Main energy source. Comprise monosaccharides (glucose, fructose), disaccharides (sucrose, lactose), and polysaccharides (starch, glycogen, cellulose).</li>
      <li><strong>Proteins:</strong> Bodybuilding blocks made of amino acids. Essential for growth and repair. Deficiency leads to **Kwashiorkor** (swollen belly) and **Marasmus** (severe wasting of muscle and fat).</li>
      <li><strong>Fats:</strong> Concentrated energy reserves. Saturated fats (animal source, solid at room temp) vs Unsaturated fats (vegetable source, liquid at room temp).</li>
      <li><strong>Micronutrients:</strong>
        <ul>
          <li>*Iron (Fe):* Essential constituent of **Hemoglobin** in RBCs. Deficiency causes **Anemia**.</li>
          <li>*Calcium (Ca) & Phosphorus (P):* Required for healthy bones and teeth. Deficiency causes weak bones.</li>
          <li>*Iodine (I):* Required by the thyroid gland to synthesize **Thyroxine** hormone. Deficiency causes **Goitre** (swelling of neck).</li>
        </ul>
      </li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["diseases"] = (EXPANDED_NOTES_DATA["diseases"] || "") + bloodGroupsHtml;

// 6. Append Plant Tissues to plant-kingdom
const plantTissuesHtml = \`
  <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
    <h2> Plant Tissues & Anatomy</h2>
    <p>Plant tissues are broadly classified based on their capability of cell division:</p>
    
    <h3>1. Meristematic Tissues</h3>
    <p>Composed of actively dividing cells. Located in growing regions:</p>
    <ul>
      <li><strong>Apical Meristem:</strong> Present at the tips of stems and roots. Responsible for primary growth (increase in length).</li>
      <li><strong>Lateral Meristem (Cambium):</strong> Located along the lateral sides of stems and roots. Responsible for secondary growth (increase in girth/thickness).</li>
      <li><strong>Intercalary Meristem:</strong> Located at the base of leaves or internodes (e.g., in grasses). Helps regenerate parts eaten by herbivores.</li>
    </ul>

    <h3>2. Permanent Tissues</h3>
    <p>Cells that have lost the power of division and assumed a definite shape and function:</p>
    <ul>
      <li><strong>Simple Permanent Tissues (Single cell type):</strong>
        <ul>
          <li><em>Parenchyma:</em> Thin-walled, living cells. Store food. If they contain chlorophyll, they are called **Chlorenchyma** (help in photosynthesis); if they have large air cavities in aquatic plants, they are called **Aerenchyma** (provide buoyancy).</li>
          <li><em>Collenchyma:</em> Living cells with localized thickening of pectin at corners. Provide mechanical support and flexibility to young stems (allows bending without breaking).</li>
          <li><em>Sclerenchyma:</em> Dead, long, narrow cells with thick walls reinforced with **Lignin**. Provide mechanical strength. E.g., Coconut husk (coir), hemp, stone cells in pears.</li>
        </ul>
      </li>
      <li><strong>Complex Permanent Tissues (Multiple cell types working as a unit):</strong>
        <ul>
          <li><em>Xylem:</em> Conducts **water and minerals** unidirectionally (upward from roots to leaves). Composed of tracheids, vessels, xylem parenchyma (living), and xylem fibers (dead).</li>
          <li><em>Phloem:</em> Conducts **food / organic solutes** bidirectionally (from leaves to other parts). Composed of sieve tubes, companion cells (regulate sieve tube function), phloem parenchyma, and phloem fibers (dead).</li>
        </ul>
      </li>
    </ul>
  </div>
\`;
EXPANDED_NOTES_DATA["plant-kingdom"] = (EXPANDED_NOTES_DATA["plant-kingdom"] || "") + plantTissuesHtml;
`;

fs.writeFileSync('notes_extra_9.js', notesJs + highYieldAdditions);
console.log('Successfully appended all high-yield science notes to notes_extra_9.js!');
