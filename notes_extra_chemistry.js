window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};
EXPANDED_NOTES_DATA["chemistry-numericals"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Mole Concept & Concentration Terms
  </h3>

  <h4>1. Fundamental Definitions</h4>
  <ul>
    <li><strong>Mole (unit)</strong> – the SI base unit for amount of substance. One mole contains exactly <strong>6.022 140 76 × 10²³</strong> elementary entities (atoms, molecules, ions, electrons etc.). This number is defined by the <strong>International System of Units (SI)</strong> and is known as <strong>Avogadro’s number</strong>.</li>
    <li><strong>Avogadro’s constant (N<sub>A</sub>)</strong> – the numerical value of the mole, i.e., 6.022 140 76 × 10²³ mol⁻¹.</li>
    <li><strong>Molar mass (M)</strong> – mass of one mole of a substance, expressed in <strong>g mol⁻¹</strong>. Numerically equal to the relative atomic/molecular mass (atomic weight) expressed in grams.</li>
    <li><strong>Stoichiometry</strong> – quantitative relationship among reactants and products in a chemical equation, governed by the mole concept.</li>
  </ul>

  <h4>2. Historical Milestones & Determination of N<sub>A</sub></h4>
  <ul>
    <li>1811 – <strong>Amedeo Avogadro</strong> hypothesised that equal volumes of gases, at the same temperature and pressure, contain equal numbers of molecules (<em>hypothesis of equal volumes</em>).</li>
    <li>1865 – <strong>Ludwig Boltzmann</strong> linked the macroscopic gas constant <strong>R</strong> with molecular scale via kinetic theory, paving the way for a numerical determination.</li>
    <li>1909 – <strong>Jean Baptiste Perrin</strong> measured Brownian motion and derived <strong>Avogadro’s number</strong> (≈ 6.5 × 10²³) confirming the atomic theory.</li>
    <li>1960 – Use of X‑ray crystallography on silicon crystals gave N<sub>A</sub> = 6.022 × 10²³ mol⁻¹ (the “silicon sphere” method).</li>
    <li>2019 – Redefinition of the kilogram linked the mole directly to a fixed value of N<sub>A</sub>, eliminating the need for experimental determination.</li>
  </ul>

  <h4>3. Core Relationships</h4>
  <p>The three fundamental equations interlink mass (m), amount (n), and particles (N):</p>
  <ul>
    <li><strong>n = m / M</strong> (where <strong>m</strong> is in grams, <strong>M</strong> in g mol⁻¹)</li>
    <li><strong>n = N / N<sub>A</sub></strong> (where <strong>N</strong> is the absolute number of entities)</li>
    <li><strong>m = n · M = (N · M) / N<sub>A</sub></strong></li>
  </ul>

  <h4>4. Practical Use of the Mole Concept</h4>
  <ul>
    <li><strong>Balancing chemical equations</strong> ensures that the number of moles of each element is conserved on both sides.</li>
    <li><strong>Limiting reagent calculations</strong> rely on converting masses to moles, comparing stoichiometric coefficients, and back‑converting to desired product mass.</li>
    <li><strong>Gas‑phase calculations</strong> often employ the <strong>ideal gas law</strong> (<strong>PV = nRT</strong>) where <strong>R = 0.082057 L·atm·K⁻¹·mol⁻¹</strong> or <strong>8.314 J·K⁻¹·mol⁻¹</strong>. At <strong>standard temperature and pressure (STP)</strong> (0 °C, 1 atm) one mole of an ideal gas occupies 22.414 L.</li>
    <li>Conversions between <strong>mass percent</strong>, <strong>molarity</strong>, and <strong>molality</strong> are routine in solution preparation for laboratory and field experiments.</li>
  </ul>

  <h4>5. Concentration Terms – Definitions & Formulas</h4>

  <h4>5.1 Molarity (M)</h4>
  <ul>
    <li><strong>Molarity (M)</strong> = <strong>moles of solute / liters of solution (mol L⁻¹)</strong>.</li>
    <li>Useful for reactions occurring in solution where volume is the controlling variable.</li>
    <li>Temperature dependence: since volume expands with temperature, molarity changes unless the solution is thermostatted.</li>
  </ul>

  <h4>5.2 Molality (m)</h4>
  <ul>
    <li><strong>Molality (m)</strong> = <strong>moles of solute / kilograms of solvent (mol kg⁻¹)</strong>.</li>
    <li>Independent of temperature because mass does not change with temperature.</li>
    <li>Key in colligative‑property calculations (boiling‑point elevation, freezing‑point depression, osmotic pressure).</li>
  </ul>

  <h4>5.3 Normality (N)</h4>
  <ul>
    <li><strong>Normality (N)</strong> = <strong>equivalents of solute / liters of solution (eq L⁻¹)</strong>.</li>
    <li>One equivalent = amount of substance that furnishes or reacts with one mole of electrons, protons, or other defined species.</li>
    <li>For acid–base reactions, <strong>equivalents = moles × basicity (number of replaceable H⁺)</strong>. For redox, <strong>equivalents = moles × n‑factor (electrons transferred per molecule).</strong></li>
  </ul>

  <h4>5.4 Mass Percent (% w/w)</h4>
  <ul>
    <li><strong>Mass percent</strong> = <strong>(mass of solute / mass of solution) × 100</strong> (expressed as % w/w).</li>
    <li>Common in pharmaceutical formulations and alloy compositions.</li>
  </ul>

  <h4>5.5 Volume Percent (% v/v)</h4>
  <ul>
    <li><strong>Volume percent</strong> = <strong>(volume of solute / volume of solution) × 100</strong> (expressed as % v/v).</li>
    <li>Typical for liquid‑liquid mixtures (e.g., ethanol‑water solutions).</li>
  </ul>

  <h4>5.6 Parts per Million (ppm) and Parts per Billion (ppb)</h4>
  <ul>
    <li>For dilute aqueous solutions, <strong>1 ppm ≈ 1 mg L⁻¹</strong> (assuming density ≈ 1 g mL⁻¹).</li>
    <li><strong>1 ppb ≈ 1 µg L⁻¹</strong>.</li>
    <li>Critical in environmental analysis (e.g., permissible limits of heavy metals in drinking water).</li>
  </ul>

  <h4>6. Comparative Table of Concentration Units</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead style="background:#2a2a3a; color:#fff;">
      <tr>
        <th style="border:1px solid #555; padding:6px;">Term</th>
        <th style="border:1px solid #555; padding:6px;">Symbol</th>
        <th style="border:1px solid #555; padding:6px;">Definition</th>
        <th style="border:1px solid #555; padding:6px;">Units</th>
        <th style="border:1px solid #555; padding:6px;">Temperature Dependence</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ddd; padding:6px;"><strong>Molarity</strong></td>
        <td style="border:1px solid #ddd; padding:6px;">M</td>
        <td style="border:1px solid #ddd; padding:6px;">mol of solute per litre of solution</td>
        <td style="border:1px solid #ddd; padding:6px;">mol L⁻¹</td>
        <td style="border:1px solid #ddd; padding:6px;">Yes (volume varies)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:6px;"><strong>Molality</strong></td>
        <td style="border:1px solid #ddd; padding:6px;">m</td>
        <td style="border:1px solid #ddd; padding:6px;">mol of solute per kilogram of solvent</td>
        <td style="border:1px solid #ddd; padding:6px;">mol kg⁻¹</td>
        <td style="border:1px solid #ddd; padding:6px;">No</td>
      </tr>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ddd; padding:6px;"><strong>Normality</strong></td>
        <td style="border:1px solid #ddd; padding:6px;">N</td>
        <td style="border:1px solid #ddd; padding:6px;">equivalents per litre of solution</td>
        <td style="border:1px solid #ddd; padding:6px;">eq L⁻¹</td>
        <td style="border:1px solid #ddd; padding:6px;">Yes (volume varies)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:6px;"><strong>Mass Percent</strong></td>
        <td style="border:1px solid #ddd; padding:6px;">% w/w</td>
        <td style="border:1px solid #ddd; padding:6px;">mass of solute / mass of solution × 100</td>
        <td style="border:1px solid #ddd; padding:6px;">%</td>
        <td style="border:1px solid #ddd; padding:6px;">Negligible (mass constant)</td>
      </tr>
      <tr style="background:#f9f9f9;">
        <td style="border:1px solid #ddd; padding:6px;"><strong>Volume Percent</strong></td>
        <td style="border:1px solid #ddd; padding:6px;">% v/v</td>
        <td style="border:1px solid #ddd; padding:6px;">volume of solute / volume of solution × 100</td>
        <td style="border:1px solid #ddd; padding:6px;">%</td>
        <td style="border:1px solid #ddd; padding:6px;">Yes (volumes expand)</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:6px;"><strong>ppm / ppb</strong></td>
        <td style="border:1px solid #ddd; padding:6px;">ppm, ppb</td>
        <td style="border:1px solid #ddd; padding:6px;">mass of solute / mass of solution × 10⁶ (or 10⁹)</td>
        <td style="border:1px solid #ddd; padding:6px;">mg L⁻¹ / µg L⁻¹ (approx.)</td>
        <td style="border:1px solid #ddd; padding:6px;">Negligible for dilute aqueous media</td>
      </tr>
    </tbody>
  </table>

  <h4>7. Step‑by‑Step Solution Preparation</h4>
  <ol>
    <li><strong>Identify the required concentration</strong> (e.g., 0.5 M HCl).</li>
    <li><strong>Calculate moles needed:</strong> <strong>n = M × V</strong> where <strong>V</strong> is the final volume in litres.</li>
    <li><strong>Convert moles to mass:</strong> <strong>m = n × M<sub>r</sub></strong> (M<sub>r</sub> = relative molecular mass, e.g., 36.46 g mol⁻¹ for HCl).</li>
    <li><strong>Weigh the calculated mass</strong> using an analytical balance (±0.1 mg accuracy).</li>
    <li><strong>Dissolve in a beaker</strong> containing less than the final volume of distilled water.</li>
    <li><strong>Transfer to a volumetric flask</strong> and make up to the mark with distilled water. Ensure thorough mixing.</li>
    <li><strong>Check temperature</strong> if the solution is to be used at a specific temperature; adjust volume if necessary for high‑precision work.</li>
  </ol>

  <h4>8. Dilution Formula & Example</h4>
  <p>The dilution relationship is expressed as:</p>
  <p><strong>C₁ V₁ = C₂ V₂</strong></p>
  <ul>
    <li><strong>C₁</strong> = initial concentration</li>
    <li><strong>V₁</strong> = volume of stock solution taken</li>
    <li><strong>C₂</strong> = desired concentration</li>
    <li><strong>V₂</strong> = final total volume after dilution</li>
  </ul>
  <p><strong>Example:</strong> Prepare 250 mL of 0.1 M NaCl from a 1.0 M stock.</p>
  <ul>
    <li>V₁ = (C₂ V₂) / C₁ = (0.1 M × 250 mL) / 1.0 M = 25 mL.</li>
    <li>Take 25 mL of the 1.0 M stock and add distilled water to reach 250 mL.</li>
  </ul>

  <h4>9. Inter‑conversion Between Concentration Units</h4>
  <p>Conversion often requires density (ρ) of the solution and molar mass of solute.</p>
  <ul>
    <li>From <strong>Molarity (M)</strong> to <strong>Molality (m)</strong>:
      <p><strong>m = (M × ρ) / [1 − (M × M<sub>r</sub> / 1000)]</strong></p>
      where ρ is in g mL⁻¹ and M<sub>r</sub> in g mol⁻¹.</li>
    <li>From <strong>Mass percent</strong> to <strong>Molarity</strong>:
      <p><strong>M = (% w/w × ρ) / (M<sub>r</sub> × 100)</strong></p></li>
    <li>From <strong>ppm</strong> to <strong>mg L⁻¹</strong> (assuming ρ ≈ 1 g mL⁻¹):
      <p><strong>1 ppm = 1 mg L⁻¹</strong></p></li>
  </ul>

  <h4>10. Common Pitfalls & How to Avoid Them</h4>
  <ul>
    <li><strong>Confusing molarity with molality</strong> – always check whether the problem involves temperature‑dependent volume (use M) or mass of solvent (use m).</li>
    <li><strong>Neglecting solution density</strong> when converting between % w/w, % v/v, and molarity; use tabulated densities for aqueous solutions at given concentrations.</li>
    <li><strong>Using incorrect n‑factor in normality</strong> – for polyprotic acids, n‑factor = number of replaceable H⁺ (e.g., H₂SO₄ = 2); for redox, n‑factor = electrons transferred per molecule.</li>
    <li><strong>Rounding Avogadro’s number</strong> prematurely; keep at least 5 significant figures (6.0221 × 10²³) in intermediate steps for high‑precision calculations.</li>
    <li><strong>Assuming 1 L = 1000 g</strong> for all solutions; this holds only for water at 4 °C. Apply density corrections for other solvents.</li>
  </ul>

  <h4>11. Relevance to Defence‑Related Chemistry</h4>
  <ul>
    <li>Accurate <strong>explosive formulation</strong> relies on precise molar ratios (e.g., RDX synthesis: C₃H₆N₆O₆).</li>
    <li>Fuel‑oxidizer mixtures for rockets require exact <strong>stoichiometric calculations</strong> (e.g., liquid oxygen and RP‑1 kerosene – O₂/H₂ ratio of 2.5 : 1 by mass).</li>
    <li>Water‑purification units in field camps use <strong>ppm‑level chlorine dosing</strong> (0.5 ppm Cl₂) – knowledge of ppm conversion is critical.</li>
    <li>Medical logistics demand rapid preparation of <strong>IV solutions</strong> (e.g., 0.9 % w/v NaCl) where mass‑percent calculations are routine.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>1 mol of any gas at <strong>STP (0 °C, 1 atm)</strong> occupies exactly <strong>22.414 L</strong> (ideal gas law).</li>
      <li>Avogadro’s number is fixed at <strong>6.022 140 76 × 10²³ mol⁻¹</strong> (since 2019 SI redefinition).</li>
      <li>For dilute aqueous solutions, <strong>1 ppm ≈ 1 mg L⁻¹</strong> because density ≈ 1 g mL⁻¹.</li>
      <li><strong>Molarity (M)</strong> changes with temperature; <strong>Molality (m)</strong> does not.</li>
      <li>Normality (N) = <strong>Molarity × basicity (or n‑factor)</strong>; e.g., 0.5 M H₂SO₄ (diprotic) = 1.0 N.</li>
      <li>Mass % = <strong>(mass solute / mass solution) × 100</strong>; volume % uses volumes instead of masses.</li>
      <li>In solution preparation, always add solute to water, not water to concentrated acid, to avoid exothermic splatter.</li>
      <li>The dilution equation <strong>C₁V₁ = C₂V₂</strong> holds irrespective of units as long as they are consistent.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["acids-bases"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Acids, Bases & pH Indicators
  </h3>

  <h4>1. Conceptual Foundations of Acids and Bases</h4>
  <p>The study of <strong>[[Arrhenius theory]]</strong> (<em>Svante Arrhenius, 1884</em>) defines an <strong>acid</strong> as a substance that dissociates in aqueous solution to produce <strong>hydrogen ions (H⁺)</strong> and a <strong>base</strong> as a substance that yields <strong>hydroxide ions (OH⁻)</strong>. This model, while foundational, fails to explain acid‑base behaviour in non‑aqueous media or substances like <strong>[[ammonia]]</strong> that act as bases without containing OH⁻. To overcome these limitations, the <strong>[[Brønsted–Lowry theory]]</strong> (<em>Johannes Nicolaus Brønsted and Thomas Martin Lowry, 1923</em>) introduced the proton‑transfer concept: an acid is a proton donor and a base is a proton acceptor. The conjugate acid‑base pair concept arises naturally from this theory. Further generalisation came with the <strong>[[Lewis acid‑base theory]]</strong> (<em>Gilbert N. Lewis, 1923</em>), which defines an acid as an electron‑pair acceptor and a base as an electron‑pair donor, thereby encompassing reactions such as <strong>[[BF₃]]</strong> + <strong>[[NH₃]]</strong> → <strong>[[BF₃NH₃]]</strong> adduct formation.</p>

  <h4>2. Strength, Ionisation Constants and pH Scale</h4>
  <p>Acids and bases are classified as <strong>strong</strong> or <strong>weak</strong> based on their degree of ionisation. Strong acids (<strong>[[hydrochloric acid]]</strong>, <strong>[[sulphuric acid]]</strong>, <strong>[[nitric acid]]</strong>) dissociate completely in water, giving a high concentration of H⁺. Weak acids (<strong>[[acetic acid]]</strong>, <strong>[[carbonic acid]]</strong>, <strong>[[hydrofluoric acid]]</strong>) only partially ionise; their equilibrium is described by the acid dissociation constant <strong>Kₐ</strong>. Similarly, strong bases (<strong>[[sodium hydroxide]]</strong>, <strong>[[potassium hydroxide]]</strong>, <strong>[[calcium hydroxide]]</strong>) furnish OH⁻ completely, whereas weak bases (<strong>[[ammonia]]</strong>, <strong>[[aniline]]</strong>) have a base dissociation constant <strong>K_b</strong>. The relationship <strong>Kₐ × K_b = K_w</strong> (ionic product of water, 1.0 × 10⁻¹⁴ at 25 °C) links the two.</p>
  <p>The <strong>[[pH scale]]</strong>, introduced by <strong>[[Sørensen]]</strong> in 1909, quantifies acidity as <strong>pH = –log₁₀[H⁺]</strong>. Pure water at 25 °C has pH = 7.0; values < 7 indicate acidity, > 7 indicate alkalinity. The complementary <strong>pOH = –log₁₀[OH⁻]</strong> obeys <strong>pH + pOH = 14</strong> under standard conditions. For weak acids, the <strong>[[Henderson–Hasselbalch equation]]</strong> (<em>pH = pKₐ + log₁₀([A⁻]/[HA])</em>) provides a quick estimate of pH in buffer systems.</p>

  <h4>3. Acid‑Base Indicators: Principle and Common Types</h4>
  <p>An <strong>indicator</strong> is a weak organic acid or base that exhibits a distinct colour change over a narrow pH interval due to alteration in its molecular structure upon protonation/deprotonation. The <strong>transition range</strong> (typically pKₐ ± 1) is where both acid and base forms are present in comparable concentrations, giving the observed colour shift. Indicators are chosen such that their transition range brackets the equivalence point of the titration.</p>
  <ul>
    <li><strong>[[Litmus]]</strong> (natural dye from lichens): red → blue at pH ≈ 4.5–8.3; useful for quick acid‑base tests.</li>
    <li><strong>[[Phenolphthalein]]</strong>: colourless in acidic and neutral media (pH < 8.2); pink/fuchsia in alkaline media (pH > 8.2); ideal for strong‑base titrations.</li>
    <li><strong>[[Methyl orange]]</strong>: red → yellow at pH ≈ 3.1–4.4; suited for strong‑acid titrations.</li>
    <li><strong>[[Bromothymol blue]]</strong>: yellow → blue at pH ≈ 6.0–7.6; employed in neutralisation reactions near pH 7.</li>
    <li><strong>[[Universal indicator]]</strong>: mixture of several indicators giving a gradual colour spectrum across pH 0–14.</li>
    <li><strong>[[Thymol blue]]</strong>: two transition ranges (pH 1.2–2.8 red→yellow; pH 8.0–9.6 yellow→blue).</li>
  </ul>
  <p>The colour change arises from alterations in the <strong>conjugated π‑system</strong> of the indicator molecule, which modifies its absorption spectrum. For instance, phenolphthalein’s lactone form (colourless) opens to the quinonoid form (pink) upon deprotonation.</p>

  <h4>4. Buffer Solutions and the Henderson–Hasselbalch Equation</h4>
  <p>A <strong>[[buffer solution]]</strong> resists changes in pH upon addition of small amounts of acid or base. It consists of a weak acid and its conjugate base (or a weak base and its conjugate acid) in comparable concentrations. The buffering capacity (β) is maximal when <strong>[acid] = [conjugate base]</strong>, i.e., when pH = pKₐ. The <strong>[[Henderson–Hasselbalch equation]]</strong> derives from the acid dissociation expression:</p>
  <p><strong>Kₐ = [H⁺][A⁻]/[HA]</strong> ⟹ <strong>–log₁₀Kₐ = –log₁₀[H⁺] – log₁₀([A⁻]/[HA])</strong> ⟹ <strong>pH = pKₐ + log₁₀([A⁻]/[HA])</strong>.</p>
  <p>Common laboratory buffers include <strong>[[acetate buffer]]</strong> (acetic acid/acetate, pKₐ ≈ 4.76), <strong>[[phosphate buffer]]</strong> (dihydrogen phosphate/hydrogen phosphate, pKₐ₂ ≈ 7.20), and <strong>[[TRIS buffer]]</strong> (tris(hydroxymethyl)aminomethane, pKₐ ≈ 8.1). Biological systems rely heavily on buffers (e.g., blood bicarbonate buffer, pKₐ ≈ 6.1) to maintain physiological pH.</p>

  <h4>5. Salt Hydrolysis and Acid‑Base Properties of Salts</h4>
  <p>When a salt dissolves, its constituent ions may react with water, altering the pH—a phenomenon termed <strong>[[salt hydrolysis]]</strong>. The nature of the aqueous solution depends on the relative strengths of the parent acid and base:</p>
  <ul>
    <li>Salt of strong acid + strong base (e.g., <strong>[[NaCl]]</strong>) → neutral solution (pH ≈ 7).</li>
    <li>Salt of strong acid + weak base (e.g., <strong>[[NH₄Cl]]</strong>) → acidic solution due to hydrolysis of cation: <strong>NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺</strong>.</li>
    <li>Salt of weak acid + strong base (e.g., <strong>[[CH₃COONa]]</strong>) → basic solution due to anion hydrolysis: <strong>CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻</strong>.</li>
    <li>Salt of weak acid + weak base (e.g., <strong>[[NH₄CH₃COO]]</strong>) → pH depends on relative Kₐ and K_b; if Kₐ ≈ K_b, solution is near neutral.</li>
  </ul>
  <p>The hydrolysis constant <strong>K_h</strong> for an anion is related to K_w and Kₐ of its conjugate acid: <strong>K_h = K_w / Kₐ</strong>. Similarly, for a cation: <strong>K_h = K_w / K_b</strong>. These expressions enable calculation of pH for salt solutions.</p>

  <h4>6. Acid‑Base Titrations: Procedure and Indicators Selection</h4>
  <p>Titration involves the gradual addition of a solution of known concentration (titrant) to a solution of unknown concentration (analyte) until the reaction reaches the <strong>equivalence point</strong>, where stoichiometric amounts of acid and base have reacted. The <strong>endpoint</strong> is identified by a perceptible colour change of the indicator, which should lie as close as possible to the equivalence point.</p>
  <p>Typical titration curves:</p>
  <ul>
    <li><strong>Strong acid – strong base</strong>: sharp pH jump near pH 7; phenolphthalein or methyl orange both suitable.</li>
    <li><strong>Strong acid – weak base</strong>: equivalence point acidic (pH < 7); methyl orange or bromocresol green preferred.</li>
    <li><strong>Weak acid – strong base</strong>: equivalence point basic (pH > 7); phenolphthalein ideal.</li>
    <li><strong>Weak acid – weak base</strong>: very gradual pH change; often requires instrumental detection (pH meter) rather than visual indicators.</li>
  </ul>
  <p>Secondary standards like <strong>[[potassium hydrogen phthalate (KHP)]]</strong> are used to standardise NaOH solutions, while <strong>[[sodium carbonate]]</strong> serves for HCl standardisation.</p>

  <h4>7. Applications in Environmental and Biological Systems</h4>
  <p>Acid‑base chemistry underpins numerous real‑world phenomena:</p>
  <ul>
    <li><strong>[[Acid rain]]</strong>: atmospheric oxidation of SO₂ and NOₓ yields <strong>[[sulphuric acid]]</strong> and <strong>[[nitric acid]]</strong>, lowering rainwater pH below 5.6 and affecting soil, aquatic life, and monuments.</li>
    <li>Biological buffers: the <strong>[[bicarbonate buffer system]]</strong> (H₂CO₃/HCO₃⁻) maintains blood pH around 7.4; the <strong>[[phosphate buffer]]</strong> operates intracellularly.</li>
    <li>Industrial processes: <strong>[[sodium hydroxide]]</strong> (caustic soda) in soap manufacture, <strong>[[sulphuric acid]]</strong> in fertiliser production, and <strong>[[acetic acid]]</strong> in food preservation.</li>
    <li>Pharmaceuticals: many drugs are weak acids or bases; their ionisation state influences absorption and distribution (Henderson–Hasselbalch principle).</li>
    <li>Food science: pH controls texture, flavour, and microbial safety; indicators like <strong>[[litmus]]</strong> are used in quick quality checks.</li>
  </ul>

  <h4>8. Summary of Key Relationships</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr>
        <th style="border:1px solid var(--border); padding:6px; background:rgba(255,255,255,0.1);">Concept</th>
        <th style="border:1px solid var(--border); padding:6px; background:rgba(255,255,255,0.1);">Formula / Definition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>[[Ionic product of water]]</strong></td>
        <td style="border:1px solid var(--border); padding:6px;"><strong>K_w = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴</strong> (25 °C)</td>
      </tr>
      <td style="border:1px solid var(--border); padding:6px;"><strong>[[pH]]</strong></td>
        <td style="border:1px solid var(--border); padding:6px;"><strong>pH = –log₁₀[H⁺]</strong></td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>[[pOH]]</strong></td>
        <td style="border:1px solid var(--border); padding:6px;"><strong>pOH = –log₁₀[OH⁻]; pH + pOH = 14</strong></td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>[[Acid dissociation constant]]</strong></td>
        <td style="border:1px solid var(--border); padding:6px;"><strong>Kₐ = [H⁺][A⁻]/[HA]; pKₐ = –log₁₀Kₐ</strong></td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>[[Base dissociation constant]]</strong></td>
        <td style="border:1px solid var(--border); padding:6px;"><strong>K_b = [OH⁻][BH⁺]/[B]; pK_b = –log₁₀K_b</strong></td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>[[Henderson–Hasselbalch equation]]</strong></td>
        <td style="border:1px solid var(--border); padding:6px;"><strong>pH = pKₐ + log₁₀([A⁻]/[HA])</strong></td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>[[Salt hydrolysis constant]] (anion)</strong></td>
        <td style="border:1px solid var(--border); padding:6px;"><strong>K_h = K_w / Kₐ</strong></td>
      </tr>
      <tr>
        <td style="border:1px solid var(--border); padding:6px;"><strong>[[Buffer capacity]] (approx.)</strong></td>
        <td style="border:1px solid var(--border); padding:6px;"><strong>β ≈ 2.303 × C × (Kₐ[H⁺])/(Kₐ+[H⁺])²</strong> (where C = total buffer concentration)</td>
      </tr>
    </tbody>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li><strong>[[Svante Arrhenius]]</strong> proposed the first modern acid‑base theory in 1884.</li>
      <li>The <strong>[[pH]]</strong> of pure water at 25 °C is exactly 7.00.</li>
      <li><strong>[[Phenolphthalein]]</strong> changes colour in the pH range 8.2–10.0 (colourless → pink).</li>
      <li><strong>[[Methyl orange]]</strong> works best in the acidic range pH 3.1–4.4 (red → yellow).</li>
      <li>The <strong>[[Henderson–Hasselbalch equation]]</strong> is derived from the acid dissociation constant expression.</li>
      <li>A buffer resists pH change most effectively when pH = pKₐ (i.e., [acid] = [conjugate base]).</li>
      <li>Salt of a strong acid and weak base yields an acidic solution due to cationic hydrolysis (e.g., <strong>[[NH₄Cl]]</strong>).</li>
      <li><strong>[[Acid rain]]</strong> typically has a pH between 4.2 and 4.8.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["syl-numerical"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Chemical Bonding & Periodic Table
  </h3>

  <h4>1. Foundations of Chemical Bonding</h4>
  <p>All chemical substances are held together by forces that arise from the interaction of <strong>electrons</strong> and <strong>nuclei</strong>. The modern definition of a chemical bond is the net attractive interaction that stabilises a system of atoms relative to the separated atoms at infinite distance.</p>
  <ul>
    <li><strong>Bond energy</strong> – the enthalpy change when one mole of a bond is broken in the gas phase (kJ mol⁻¹).</li>
    <li><strong>Bond length</strong> – the internuclear distance at which the potential energy curve reaches its minimum.</li>
    <li><strong>Bond order</strong> – the difference between the number of bonding and antibonding electrons divided by two (MO theory).</li>
  </ul>

  <h4>2. Types of Chemical Bonds</h4>

  <h5>2.1 <strong>Ionic Bond</strong></h5>
  <p>An ionic bond results from the complete transfer of one or more electrons from a low‑electronegativity metal to a high‑electronegativity non‑metal, producing oppositely charged ions that attract electrostatically.</p>
  <ul>
    <li>Typical <strong>electronegativity difference (Δχ)</strong> > 1.7 on the <strong>Pauling scale</strong>.</li>
    <li>Formation is governed by the <strong>lattice energy (U)</strong>, the energy released when gaseous ions assemble into a crystal lattice.</li>
    <li>The <strong>Born‑Haber cycle</strong> quantitatively relates sublimation, ionisation, dissociation, electron affinity, and lattice energy to the overall enthalpy of formation.</li>
  </ul>
  <p><strong>Key examples</strong>: NaCl, MgO, CaF₂.</p>

  <h5>2.2 <strong>Covalent Bond</strong></h5>
  <p>Covalent bonding involves the sharing of electron pairs between two atoms. The nature of the bond (non‑polar, polar, multiple) is dictated by the electronegativity difference and the number of shared pairs.</p>
  <ul>
    <li><strong>σ (sigma) bond</strong> – end‑to‑end overlap of atomic orbitals; forms the primary bond framework.</li>
    <li><strong>π (pi) bond</strong> – side‑by‑side overlap of unhybridised p‑orbitals; adds to σ bonds in double (σ + π) and triple (σ + 2π) bonds.</li>
    <li>Bond polarity is quantified by the dipole moment (μ = δ × d, Debye).</li>
    <li>Typical Δχ values:
      <ul>
        <li>0 – 0.4 : non‑polar covalent</li>
        <li>0.4 – 1.7 : polar covalent</li>
        <li>> 1.7 : ionic character predominates</li>
      </ul>
    </li>
  </ul>
  <p><strong>Representative molecules</strong>: H₂ (σ), O₂ (σ + π), N₂ (σ + 2π), CO₂ (linear σ bonds), CH₄ (tetrahedral σ bonds).</p>

  <h5>2.3 <strong>Metallic Bond</strong></h5>
  <p>Metallic bonding is characterised by a delocalised “sea of electrons” that move freely over a lattice of positively charged metal cations.</p>
  <ul>
    <li>Explains high electrical conductivity, ductility, malleability, and luster of metals.</li>
    <li>Bond strength is reflected in the <strong>cohesive energy</strong> (average energy required to separate atoms to infinity).</li>
    <li>Transition metals exhibit additional <strong>d‑band</strong> contributions, giving rise to variable oxidation states and complex formation.</li>
  </ul>

  <h4>3. VSEPR Theory and Molecular Geometry</h4>
  <p>The <strong>Valence Shell Electron Pair Repulsion (VSEPR)</strong> model predicts molecular shape by minimising repulsion between electron domains (bonding pairs and lone pairs) around a central atom.</p>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; margin-top: 12px;">
    <thead>
      <tr style="background:#f0f0f0;">
        <th>Electron Domains</th>
        <th>Electron‑Pair Geometry</th>
        <th>Typical Molecular Shape</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>Linear (180°)</td>
        <td>Linear</td>
        <td>BeCl₂</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Trigonal planar (120°)</td>
        <td>Trigonal planar</td>
        <td>BF₃</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Tetrahedral (109.5°)</td>
        <td>Tetrahedral / Trigonal pyramidal (if 1 LP)</td>
        <td>CH₄ / NH₃</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Trigonal bipyramidal (120° & 90°)</td>
        <td>See‑saw / Trigonal pyramidal (if 1 LP)</td>
        <td>PCl₅ / SF₄</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Octahedral (90°)</td>
        <td>Octahedral / Square pyramidal (if 1 LP)</td>
        <td>SF₆ / BrF₅</td>
      </tr>
    </tbody>
  </table>

  <h4>4. Hybridisation</h4>
  <p>Hybridisation describes the mixing of atomic orbitals on a central atom to form equivalent hybrid orbitals that explain observed molecular geometries.</p>
  <ul>
    <li><strong>sp³ hybridisation</strong> – one s + three p → four equivalent sp³ orbitals (tetrahedral, 109.5°). Example: CH₄.</li>
    <li><strong>sp² hybridisation</strong> – one s + two p → three sp² orbitals (trigonal planar, 120°) + one unhybridised p for π bonding. Example: Ethene (C₂H₄).</li>
    <li><strong>sp hybridisation</strong> – one s + one p → two sp orbitals (linear, 180°) + two p for two π bonds. Example: Acetylene (C₂H₂).</li>
    <li>For transition metals, <strong>dsp²</strong> (square planar) and <strong>d²sp³</strong> (octahedral) hybridisations rationalise complex geometry.</li>
  </ul>

  <h4>5. Molecular Orbital (MO) Theory – A Brief Overview</h4>
  <p>MO theory treats atomic orbitals as combining to form molecular orbitals that extend over the entire molecule.</p>
  <ul>
    <li>Bonding MOs are lower in energy; antibonding (σ*, π*) are higher.</li>
    <li>Bond order = (N_bonding – N_antibonding)/2; predicts stability and magnetic properties.</li>
    <li>Example: O₂ has two unpaired electrons in π* orbitals → paramagnetic, a fact that simple valence‑bond theory cannot explain.</li>
  </ul>

  <h4>6. Periodic Table – Historical Evolution</h4>
  <p>The modern periodic table is the product of several landmark contributions:</p>
  <ul>
    <li><strong>[[Dmitri Mendeleev]] (1869)</strong> – first systematic arrangement by atomic weight, leaving gaps for undiscovered elements.</li>
    <li><strong>[[Henry Moseley]] (1913)</strong> – discovery of the X‑ray frequency‑atomic number relationship (Moseley’s law), establishing the <strong>periodic law</strong> based on atomic number (Z) rather than atomic weight.</li>
    <li>Subsequent refinements (e.g., Seaborg’s actinide concept, 1945) placed the <strong>actinide series</strong> below the lanthanides.</li>
  </ul>

  <h4>7. Modern Periodic Classification</h4>
  <p>The table is divided into <strong>blocks</strong> based on the subshell being filled:</p>
  <ul>
    <li><strong>s‑block</strong> – Groups 1 (alkali metals) and 2 (alkaline earth metals) plus He.</li>
    <li><strong>p‑block</strong> – Groups 13 to 18 (including halogens and noble gases).</li>
    <li><strong>d‑block</strong> – Transition metals (Groups 3 to 12).</li>
    <li><strong>f‑block</strong> – Lanthanides (57‑71) and Actinides (89‑103).</li>
  </ul>

  <h4>8. Important Groups & Their Characteristic Properties</h4>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; margin-top: 12px;">
    <thead>
      <tr style="background:#f0f0f0;">
        <th>Group</th>
        <th>Common Name</th>
        <th>Valence Electrons</th>
        <th>Typical Oxidation States</th>
        <th>Key Features</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>[[Alkali metals]]</td>
        <td>ns¹</td>
        <td>+1</td>
        <td>Low ionisation energy, soft, highly reactive with water.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>[[Alkaline earth metals]]</td>
        <td>ns²</td>
        <td>+2</td>
        <td>Higher melting points than alkalis; form oxides M O.</td>
      </tr>
      <tr>
        <td>17</td>
        <td>[[Halogens]]</td>
        <td>ns² np⁵</td>
        <td>–1, +1, +3, +5, +7</td>
        <td>High electronegativity, diatomic (X₂), form salts with metals.</td>
      </tr>
      <tr>
        <td>18</td>
        <td>[[Noble gases]]</td>
        <td>ns² np⁶</td>
        <td>0 (rare +2, +4 for Xe)</td>
        <td>Inert, complete octet, used in lighting (Ne, Ar).</td>
      </tr>
    </tbody>
  </table>

  <h4>9. Periodic Trends – Underlying Principles</h4>
  <p>Trends arise from the interplay of <strong>effective nuclear charge (Z_eff)</strong>, shielding, and principal quantum number (n).</p>

  <h5>9.1 Atomic & Ionic Radii</h5>
  <ul>
    <li>Decrease across a period due to increasing Z_eff pulling electrons closer.</li>
    <li>Increase down a group because of additional electron shells (higher n).</li>
    <li>Typical radii (pm): Li ≈ 152, Na ≈ 186, K ≈ 227; Cl⁻ ≈ 181, O²⁻ ≈ 140.</li>
  </ul>

  <h5>9.2 First Ionisation Energy (IE₁)</h5>
  <ul>
    <li>Highest for noble gases; second‑highest for halogens.</li>
    <li>Sharp drop after a noble gas (e.g., IE₁ of Na = 496 kJ mol⁻¹ vs Mg = 738 kJ mol⁻¹).</li>
    <li>Exceptions: IE₁ of Be (900 kJ mol⁻¹) > B (801 kJ mol⁻¹) due to half‑filled 2p subshell stability.</li>
  </ul>

  <h5>9.3 Electron Affinity (EA)</h5>
  <ul>
    <li>Energy released when an atom gains an electron.</li>
    <li>Most exothermic for halogens (Cl ≈ −349 kJ mol⁻¹).</li>
    <li>Positive EA (endothermic) for noble gases and some alkaline earth metals.</li>
  </ul>

  <h5>9.4 Electronegativity (χ)</h5>
  <ul>
    <li>Measured on the <strong>Pauling scale</strong>; highest for fluorine (χ = 3.98).</li>
    <li>Increases across a period, decreases down a group.</li>
    <li>Useful for predicting bond polarity and type.</li>
  </ul>

  <h5>9.5 Metallic vs. Non‑metallic Character</h5>
  <ul>
    <li>Metallic character increases down a group and left across a period.</li>
    <li>Correlates with low IE₁, low EA, large atomic radius.</li>
  </ul>

  <h4>10. Anomalies & Exceptions</h4>
  <ul>
    <li><strong>First ionisation energy of Group 2 vs Group 13</strong>: Mg (738 kJ mol⁻¹) > Al (578 kJ mol⁻¹) because removal from a filled 3s² is easier than from a half‑filled 3p¹.</li>
    <li><strong>Atomic radius of N vs O</strong>: N (65 pm) < O (60 pm) despite moving right; increased nuclear charge outweighs added electron repulsion.</li>
    <li><strong>Electron affinity of Be</strong> is positive (endothermic) due to a filled 2s² subshell resisting addition of a third electron.</li>
  </ul>

  <h4>11. Special Topics – d‑ and f‑block Chemistry</h4>
  <ul>
    <li><strong>Transition metals</strong> exhibit:
      <ul>
        <li>Variable oxidation states (e.g., Fe²⁺/Fe³⁺, Mn²⁺/Mn⁴⁺/Mn⁷⁺).</li>
        <li>Formation of coloured complexes due to d‑d transitions.</li>
        <li>Catalytic activity (e.g., Pt in catalytic converters).</li>
      </ul>
    </li>
    <li><strong>Lanthanides</strong> (4f) – show +3 oxidation state predominance; exhibit the <strong>lanthanide contraction</strong>, causing similar ionic radii across the series.</li>
    <li><strong>Actinides</strong> (5f) – display a wider range of oxidation states (+3 to +6) and are largely radioactive; important for nuclear fuel cycles.</li>
  </ul>

  <h4>12. Interrelationship of Bonding and Periodic Trends</h4>
  <p>The type of bond formed by an element is strongly linked to its position in the periodic table:</p>
  <ul>
    <li><strong>Metals (left‑hand side)</strong> – low electronegativity → metallic bonding.</li>
    <li><strong>Non‑metals (right‑hand side)</strong> – high electronegativity → covalent or ionic bonding with metals.</li>
    <li>Elements near the centre (e.g., Si, P) often form covalent networks (silicon dioxide, phosphorus pentachloride).</li>
  </ul>

  <h4>13. Quantitative Tools for Bonding</h4>
  <ul>
    <li><strong>Born‑Lande equation</strong> for lattice energy:  
      <p style="margin-left:20px;"><em>U = (N_A·M·z⁺·z⁻·e²) / (4·π·ε₀·r₀)·(1 – 1/n)</em></p>
      where M = Madelung constant, n = Born exponent.</li>
    <li><strong>Pauling’s formula</strong> for percent ionic character:  
      <p style="margin-left:20px;"><em>%IC = (1 – e^{–0.25(Δχ)²})·100</em></p></li>
    <li><strong>Bond dissociation energy (BDE)</strong> trends: C–H ≈ 410 kJ mol⁻¹, C–C ≈ 345 kJ mol⁻¹, C≡C ≈ 839 kJ mol⁻¹.</li>
  </ul>

  <h4>14. Summary of Key Equations & Constants</h4>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; margin-top: 12px;">
    <thead>
      <tr style="background:#f0f0f0;">
        <th>Property</th>
        <th>Equation / Value</th>
        <th>Typical Units</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Effective Nuclear Charge (Z_eff)</td>
        <td><em>Z_eff = Z – S</em></td>
        <td>unitless</td>
      </tr>
      <tr>
        <td>Lattice Energy (U)</td>
        <td>Born‑Lande equation (see above)</td>
        <td>kJ mol⁻¹</td>
      </tr>
      <tr>
        <td>Bond Order (MO)</td>
        <td><em>(n_bonding – n_antibonding)/2</em></td>
        <td>unitless</td>
      </tr>
      <tr>
        <td>Dipole Moment (μ)</td>
        <td><em>μ = δ·d</em></td>
        <td>Debye (D)</td>
      </tr>
      <tr>
        <td>Percent Ionic Character</td>
        <td>Pauling’s formula (see above)</td>
        <td>%</td>
      </tr>
    </tbody>
  </table>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Δχ > 1.7 on the Pauling scale almost always yields an <strong>ionic bond</strong>.</li>
      <li>First ionisation energy of <strong>Mg (738 kJ mol⁻¹)</strong> is higher than that of <strong>Al (578 kJ mol⁻¹)</strong> – a classic periodic‑trend exception.</li>
      <li>The <strong>Born‑Haber cycle</strong> is essential for calculating lattice energy of salts like NaCl.</li>
      <li>All <strong>noble gases</strong> have a complete octet; only <strong>Xe</strong> and <strong>Kr</strong> form stable compounds (e.g., XeF₂).</li>
      <li>Hybridisation: <strong>sp³ → tetrahedral (109.5°)</strong>, <strong>sp² → trigonal planar (120°)</strong>, <strong>sp → linear (180°)</strong>.</li>
      <li>Electronegativity order (highest to lowest): F > O > Cl > N > C > S > P > Si > Al > Mg > Na > K > Ca > Rb > Cs.</li>
      <li>Atomic radius trends: decrease across a period, increase down a group; the <strong>lanthanide contraction</strong> reduces the size difference between 5d and 6s elements.</li>
      <li>Bond order from MO theory predicts: <strong>O₂ (bond order 2, paramagnetic)</strong>, <strong>N₂ (bond order 3, diamagnetic)</strong>.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["metals-alloys"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Metals, Ores, Alloys & Metallurgy
  </h3>

  <h4>Introduction to Metals and Their Importance</h4>
  <p>Metals constitute a vast majority of the elements in the periodic table and are characterised by their <strong>lustre</strong>, <strong>malleability</strong>, <strong>ductility</strong>, <strong>thermal and electrical conductivity</strong>, and tendency to form <strong>cations</strong>. In the context of defence examinations, understanding the occurrence, extraction, and utilisation of metals is essential because they form the backbone of materials used in armaments, aircraft, naval vessels, and communication systems. The study of metals encompasses their natural occurrence as <strong>ores</strong>, the processes involved in converting these ores into usable metals (<strong>metallurgy</strong>), and the deliberate combination of metals or metals with non‑metals to produce <strong>alloys</strong> possessing tailored properties.</p>

  <h4>Classification of Ores</h4>
  <p>An <strong>ore</strong> is a naturally occurring mineral aggregate from which a metal can be profitably extracted. Ores are classified according to the metal they contain and the nature of the compound. The major types include:</p>
  <ul>
    <li><strong>Oxides</strong>: e.g., [[Haematite]] (Fe₂O₃), [[Magnetite]] (Fe₃O₄), [[Bauxite]] (Al₂O₃·2H₂O), [[Cuprite]] (Cu₂O).</li>
    <li><strong>Sulphides</strong>: e.g., [[Galena]] (PbS), [[Sphalerite]] (ZnS), [[Chalcopyrite]] (CuFeS₂).</li>
    <li><strong>Carbonates</strong>: e.g., [[Siderite]] (FeCO₃), [[Malachite]] (Cu₂CO₃(OH)₂).</li>
    <li><strong>Halides</strong>: e.g., [[Fluorite]] (CaF₂), [[Halite]] (NaCl) – though halite is not a metal ore, it illustrates halide occurrence.</li>
    <li><strong>Silicates</strong>: e.g., [[Olivine]] ((Mg,Fe)₂SiO₄) – source of magnesium.</li>
  </ul>
  <p>Each ore type requires a specific preparatory step before reduction. For sulphide ores, <em>roasting</em> (heating in excess air) converts the sulphide to oxide; for carbonate ores, <em>calcination</em> (heating in limited air) drives off CO₂.</p>

  <h4>Steps in Metallurgical Extraction</h4>
  <p>The extraction of a metal from its ore generally involves three consecutive stages:</p>
  <ol>
    <li><strong>Concentration (Beneficiation)</strong>: Removal of gangue (worthless rock) to increase metal content. Techniques include <strong>hydraulic washing</strong>, <strong>magnetic separation</strong>, <strong>froth flotation</strong> (especially for sulphide ores), and <strong>leaching</strong>.</li>
    <li><strong>Conversion to Oxide</strong>: If the ore is not already an oxide, it is converted by <em>roasting</em> (sulphides) or <em>calcination</em> (carbonates). Example: 2 ZnS + 3 O₂ → 2 ZnO + 2 SO₂ (roasting).</li>
    <li><strong>Reduction to Metal</strong>: The oxide is reduced using a suitable reducing agent. Common agents are carbon (in the form of coke), carbon monoxide, hydrogen, or a more reactive metal (e.g., aluminium in the thermite process). The choice depends on the metal’s position in the Ellingham diagram.</li>
  </ol>

  <h4>Important Industrial Processes</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead>
      <tr>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Process</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Metal</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Key Reaction / Principle</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Industrial Significance</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Blast Furnace</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">[[Iron]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Fe₂O₃ + 3CO → 2Fe + 3CO₂ (reduction by CO)</td>
        <td style="border:1px solid #ccc; padding:6px;">Produces pig iron; foundation for steel making.</td>
      </tr>
      <td style="border:1px solid #ccc; padding:6px;"><strong>Bessemer Process</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">[[Iron]] → Steel</td>
        <td style="border:1px solid #ccc; padding:6px;">Air blown through molten pig iron oxidises Si, Mn, C.</td>
        <td style="border:1px solid #ccc; padding:6px;">First cheap mass‑production of steel (mid‑1800s).</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Open Hearth Furnace</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">[[Iron]] → Steel</td>
        <td style="border:1px solid #ccc; padding:6px;">Burns excess carbon and impurities using regenerative heating.</td>
        <td style="border:1px solid #ccc; padding:6px;">Allowed better control of steel composition.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Hall‑Héroult Process</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">[[Aluminium]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Electrolysis of Al₂O₃ dissolved in molten cryolite (Na₃AlF₆) at ~960 °C.</td>
        <td style="border:1px solid #ccc; padding:6px;">Primary industrial route to aluminium; energy‑intensive.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Electrolytic Refining</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">[[Copper]], [[Zinc]], [[Nickel]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Impure metal anode → pure metal cathode in aqueous sulphate electrolyte.</td>
        <td style="border:1px solid #ccc; padding:6px;">Produces high‑purity metal for electrical applications.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>Zone Refining</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">[[Silicon]], [[Germanium]] (semiconductors)</td>
        <td style="border:1px solid #ccc; padding:6px;">Molten zone moves along ingot; impurities segregate to melt.</td>
        <td style="border:1px solid #ccc; padding:6px;">Yields ultra‑pure semiconductors for electronics.</td>
      </tr>
    </tbody>
  </table>

  <h4>Common Ores and Their Metal Content</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead>
      <tr>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Ore</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Metal</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Chemical Formula</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Typical % Metal</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Haematite]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Iron</td>
        <td style="border:1px solid #ccc; padding:6px;">Fe₂O₃</td>
        <td style="border:1px solid #ccc; padding:6px;">≈70 %</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Magnetite]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Iron</td>
        <td style="border:1px solid #ccc; padding:6px;">Fe₃O₄</td>
        <td style="border:1px solid #ccc; padding:6px;">≈72 %</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Bauxite]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Aluminium</td>
        <td style="border:1px solid #ccc; padding:6px;">Al₂O₃·2H₂O (mainly gibbsite)</td>
        <td style="border:1px solid #ccc; padding:6px;">≈50‑55 % Al₂O₃ → ~27‑30 % Al</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Galena]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Lead</td>
        <td style="border:1px solid #ccc; padding:6px;">PbS</td>
        <td style="border:1px solid #ccc; padding:6px;">≈86 %</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Sphalerite]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Zinc</td>
        <td style="border:1px solid #ccc; padding:6px;">ZnS</td>
        <td style="border:1px solid #ccc; padding:6px;">≈67 %</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Chalcopyrite]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Copper</td>
        <td style="border:1px solid #ccc; padding:6px;">CuFeS₂</td>
        <td style="border:1px solid #ccc; padding:6px;">≈34 % Cu</td>
      </tr>
    </tbody>
  </table>

  <h4>Alloys: Definition, Purpose, and Representative Examples</h4>
  <p>An <strong>alloy</strong> is a metallic substance composed of two or more elements, at least one of which is a metal, combined to enhance properties such as strength, hardness, corrosion resistance, melting point, or weight. Alloying can be substitutional (atoms of similar size replace each other in the lattice) or interstitial (smaller atoms fit into gaps). The following table lists important alloys relevant to defence and aerospace applications.</p>

  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead>
      <tr>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Alloy</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Base Metal</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Major Alloying Elements</strong></th>
        <th style="border:1px solid #ccc; padding:6px;"><strong>Key Properties & Uses</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Bronze]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Copper</td>
        <td style="border:1px solid #ccc; padding:6px;">Tin (Sn) 5‑20 %</td>
        <td style="border:1px solid #ccc; padding:6px;">Harder than copper, corrosion‑resistant; used in bearings, gears, ship propellers.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Brass]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Copper</td>
        <td style="border:1px solid #ccc; padding:6px;">Zinc (Zn) 5‑40 %</td>
        <td style="border:1px solid #ccc; padding:6px;">Good machinability, acoustic properties; used in ammunition casings, musical instruments.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Stainless Steel]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Iron (Fe)</td>
        <td style="border:1px solid #ccc; padding:6px;">Chromium (Cr) ≥10.5 %, Nickel (Ni) 8‑12 %, Carbon (C) low</td>
        <td style="border:1px solid #ccc; padding:6px;">Excellent corrosion resistance, high strength; used in cutlery, surgical instruments, aircraft fasteners.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Duralumin]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Aluminium (Al)</td>
        <td style="border:1px solid #ccc; padding:6px;">Copper (Cu) 3.5‑4.5 %, Magnesium (Mg) 0.5‑1.5 %, Manganese (Mn) 0.4‑0.7 %</td>
        <td style="border:1px solid #ccc; padding:6px;">High strength‑to‑weight ratio; used in aircraft skins, fuselage.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Nichrome]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Nickel (Ni)</td>
        <td style="border:1px solid #ccc; padding:6px;">Chromium (Cr) 15‑20 %, Iron (Fe) balance</td>
        <td style="border:1px solid #ccc; padding:6px;">High resistivity, oxidation resistance; heating elements in ovens, toasters.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Invar]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Iron (Fe)</td>
        <td style="border:1px solid #ccc; padding:6px;">Nickel (Ni) 36 %</td>
        <td style="border:1px solid #ccc; padding:6px;">Very low coefficient of thermal expansion; precision instruments, clocks, aerospace structures.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;">[[Nitinol]]</td>
        <td style="border:1px solid #ccc; padding:6px;">Nickel (Ti‑Ni shape memory alloy)</td>
        <td style="border:1px solid #ccc; padding:6px;">Near equiatomic Ni‑Ti</td>
        <td style="border:1px solid #ccc; padding:6px;">Shape memory and superelasticity; used in actuators, eyeglass frames, medical stents.</td>
      </tr>
    </tbody>
  </table>

  <h4>Environmental and Safety Considerations in Metallurgy</h4>
  <p>Modern metallurgical practices must address <strong>energy consumption</strong>, <strong>emission of greenhouse gases</strong> (especially CO₂ from blast furnaces), and <strong>generation of toxic waste</strong> (e.g., sulphur dioxide from roasting sulphide ores, heavy‑metal tailings). Strategies include:</p>
  <ul>
    <li>Use of <strong>direct reduced iron (DRI)</strong> with natural gas or hydrogen to lower CO₂.</li>
    <li>Implementation of <strong>flue‑gas desulphurisation</strong> to capture SO₂.</li>
    <li>Recycling of scrap metal (secondary production) which saves up to 95 % energy for aluminium.</li>
    <li>Adoption of <strong>hydrometallurgical</strong> and <strong>bioleaching</strong> techniques for low‑grade ores.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The <strong>Blast furnace</strong> operates at temperatures around 1500 °C and uses coke, limestone, and iron ore to produce pig iron.</li>
      <li>[[Bauxite]] is the primary ore of aluminium; its purification via the Bayer process yields alumina (Al₂O₃) for the Hall‑Héroult process.</li>
      <li>[[Haematite]] (Fe₂O₃) and [[Magnetite]] (Fe₃O₄) are the two most important iron ores; magnetite is magnetic and can be concentrated by magnetic separation.</li>
      <li>[[Froth flotation]] is the chief method for concentrating sulphide ores such as [[Galena]] and [[Sphalerite]].</li>
      <li>The <strong>Bessemer process</strong> converts pig iron to steel by blowing air through the molten metal to oxidise impurities.</li>
      <li>[[Stainless steel]] owes its corrosion resistance to a passive chromium‑oxide layer that forms when Cr content exceeds ~10.5 %.</li>
      <li>[[Duralumin]] (Al‑Cu‑Mg‑Mn) was the first high‑strength aluminium alloy used extensively in aircraft during the 1930s.</li>
      <li>[[Nitinol]] exhibits shape‑memory effect due to a reversible martensitic‑austenitic phase transition near ambient temperature.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["reactivity-series"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Reactivity Series & Displacement
  </h3>

  <h4><strong>1. Conceptual Foundations</strong></h4>
  <p>The <strong>reactivity series</strong> (also called the <em>activity series</em>) is a hierarchical list of metals (and hydrogen) arranged according to their tendency to lose electrons and form cations. It is a practical manifestation of the thermodynamic parameter <strong>standard electrode potential (E°)</strong>, measured in volts against the standard hydrogen electrode (SHE).</p>
  <ul>
    <li><strong>Standard Electrode Potential (E°):</strong> Determines the direction of spontaneous redox reactions. A more negative E° indicates a stronger reducing agent (higher reactivity).</li>
    <li><strong>Redox Couples:</strong> Each metal M participates in the half‑reaction <code>M → M²⁺ + 2e⁻</code> (oxidation) and its reverse (reduction).</li>
    <li><strong>Hydrogen as Reference:</strong> The half‑reaction <code>2H⁺ + 2e⁻ → H₂(g)</code> is assigned E° = 0.00 V at 25 °C, pH 0, 1 atm.</li>
  </ul>

  <h4><strong>2. The Complete Reactivity Series (as taught for Indian defence exams)</strong></h4>
  <p>Only the most commonly encountered metals are listed, but the trend holds for the entire periodic block.</p>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead>
      <tr style="background:#2a2a3a; color:#fff;">
        <th style="padding:8px; border:1px solid #555;">Position (Top → Bottom)</th>
        <th style="padding:8px; border:1px solid #555;">Metal / Element</th>
        <th style="padding:8px; border:1px solid #555;">Standard Potential E° (V)</th>
        <th style="padding:8px; border:1px solid #555;">Typical Displacement Behaviour</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #555;">1</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Potassium]] (K)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-2.93</td>
        <td style="padding:8px; border:1px solid #555;">Displaces all metals below it, reacts violently with water.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;">2</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Sodium]] (Na)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-2.71</td>
        <td style="padding:8px; border:1px solid #555;">Displaces all metals below it; reacts explosively with cold water.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #555;">3</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Calcium]] (Ca)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-2.87</td>
        <td style="padding:8px; border:1px solid #555;">Displaces most metals; forms Ca(OH)₂ in water.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;">4</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Magnesium]] (Mg)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-2.37</td>
        <td style="padding:8px; border:1px solid #555;">Displaces Zn, Fe, Pb, Cu, Ag, Hg; used in sacrificial anodes.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #555;">5</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Aluminium]] (Al)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-1.66</td>
        <td style="padding:8px; border:1px solid #555;">Displaces Zn, Fe, Pb, Cu, Ag, Hg; forms protective oxide layer.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;">6</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Zinc]] (Zn)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-0.76</td>
        <td style="padding:8px; border:1px solid #555;">Displaces Fe, Pb, Cu, Ag, Hg; common sacrificial anode for steel.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #555;">7</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Iron]] (Fe)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-0.44</td>
        <td style="padding:8px; border:1px solid #555;">Displaces Pb, Cu, Ag, Hg; prone to rust (corrosion).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;">8</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Tin]] (Sn)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-0.14</td>
        <td style="padding:8px; border:1px solid #555;">Displaces Pb, Cu, Ag, Hg; used in tin‑plating.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #555;">9</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Lead]] (Pb)</strong></td>
        <td style="padding:8px; border:1px solid #555;">-0.13</td>
        <td style="padding:8px; border:1px solid #555;">Displaces Cu, Ag, Hg; used in batteries.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;">10</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Copper]] (Cu)</strong></td>
        <td style="padding:8px; border:1px solid #555;">+0.34</td>
        <td style="padding:8px; border:1px solid #555;">Does NOT displace any metal above it; can be displaced by Ag⁺, Hg²⁺.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #555;">11</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Silver]] (Ag)</strong></td>
        <td style="padding:8px; border:1px solid #555;">+0.80</td>
        <td style="padding:8px; border:1px solid #555;">Displaced only by Hg²⁺ and Au³⁺; valuable in jewellery.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;">12</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Gold]] (Au)</strong></td>
        <td style="padding:8px; border:1px solid #555;">+1.50</td>
        <td style="padding:8px; border:1px solid #555;">Least reactive; does not displace any metal; used in corrosion‑resistant plating.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #555;">13</td>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Hydrogen]] (H₂)</strong></td>
        <td style="padding:8px; border:1px solid #555;">0.00 (reference)</td>
        <td style="padding:8px; border:1px solid #555;">Metals above H can displace H from acids; those below cannot.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>3. Thermodynamic Basis – How E° Translates to Displacement</strong></h4>
  <p>For a displacement reaction of the type:</p>
  <pre>Metal A + Salt of Metal B → Metal B + Salt of Metal A</pre>
  <p>the net cell potential (E°_cell) is given by:</p>
  <p><strong>E°_cell = E°(cathode) – E°(anode)</strong></p>
  <ul>
    <li>If <strong>E°_cell > 0</strong>, the reaction is spontaneous under standard conditions.</li>
    <li>The metal with the more negative potential acts as the <em>anode</em> (oxidised); the metal with the more positive potential acts as the <em>cathode</em> (reduced).</li>
  </ul>
  <p>Example: <strong>Zinc</strong> (E° = –0.76 V) displaces <strong>copper</strong> (E° = +0.34 V) from CuSO₄:</p>
  <pre>E°_cell = (+0.34) – (–0.76) = +1.10 V → spontaneous</pre>

  <h4><strong>4. Historical Milestones Shaping the Series</strong></h4>
  <ul>
    <li>1766 – [[Sir Humphrey Davy]] isolates <strong>potassium</strong> and <strong>magnesium</strong> by electrolysis, establishing the link between electrochemical activity and metal reactivity.</li>
    <li>1834 – [[Michael Faraday]] formulates the laws of electrolysis, providing quantitative tools to measure E° values.</li>
    <li>1869 – [[Dmitri Mendeleev]] publishes the first periodic table; the reactivity series later helped rationalise group trends, especially for the <em>alkali</em> and <em>alkaline earth</em> metals.</li>
    <li>1902 – [[Lavoisier]]'s earlier work on combustion is revisited, confirming that metals high in the series oxidise more readily, a principle exploited in naval <strong>cathodic protection</strong>.</li>
  </ul>

  <h4><strong>5. Types of Displacement Reactions</strong></h4>
  <ul>
    <li><strong>Single‑Displacement (Metathesis) Reactions</strong>
      <ul>
        <li>General form: <code>Metal₁ + Salt of Metal₂ → Metal₂ + Salt of Metal₁</code></li>
        <li>Occurs only when <strong>Metal₁</strong> is higher in the series than <strong>Metal₂</strong>.</li>
        <li>Industrial example: <strong>zinc</strong> protecting iron in galvanised steel.</li>
      </ul>
    </li>
    <li><strong>Acid‑Metal Displacement</strong>
      <ul>
        <li>When a metal above hydrogen reacts with dilute acids, H⁺ is reduced to H₂ gas.</li>
        <li>Equation: <code>Metal + 2HCl → MetalCl₂ + H₂↑</code></li>
        <li>Metals below hydrogen (e.g., <strong>Cu</strong>, <strong>Ag</strong>) do not evolve H₂.</li>
      </ul>
    </li>
    <li><strong>Water‑Metal Displacement</strong>
      <ul>
        <li>Very reactive metals (K, Na, Ca) react with cold water, liberating H₂ and forming hydroxides.</li>
        <li>Equation (for Na): <code>2Na + 2H₂O → 2NaOH + H₂↑</code></li>
        <li>Reaction vigor follows the series: K > Na > Ca > Mg.</li>
      </ul>
    </li>
    <li><strong>Displacement in Aqueous Solutions (Complex Ions)</strong>
      <ul>
        <li>Complex ion stability can modify apparent reactivity. For instance, <strong>Cu²⁺</strong> in ammonia forms <code>[Cu(NH₃)₄]²⁺</code>, which is less readily displaced.</li>
        <li>Understanding ligands is crucial for qualitative analysis in the lab.</li>
      </ul>
    </li>
  </ul>

  <h4><strong>6. Practical Applications in Defence & Industry</strong></h4>
  <ul>
    <li><strong>Galvanisation</strong> – Coating steel with <strong>zinc</strong> (higher in series) to protect against corrosion (sacrificial anode).</li>
    <li><strong>Aluminium‑Air Batteries</strong> – Utilise the high reactivity of aluminium; discharge product is Al(OH)₃, delivering high energy density for aircraft.</li>
    <li><strong>Magnesium‑Based Flare and Pyrotechnic Compositions</strong> – Rapid oxidation of Mg yields bright white light, vital for signalling.</li>
    <li><strong>Corrosion Inhibition</strong> – Adding <strong>inhibitors</strong> (e.g., phosphates) shifts the effective potential, reducing the rate of Fe → Fe²⁺.</li>
    <li><strong>Electro‑plating</strong> – Metals lower in the series (e.g., <strong>Ag</strong>, <strong>Au</strong>) are deposited onto substrates by applying a current; the substrate must be more reactive to serve as anode.</li>
    <li><strong>Water‑Splitting Catalysts</strong> – Transition metals like <strong>Ni</strong> and <strong>Co</strong> (not in the basic series) are employed because of moderate potentials that balance H₂ evolution and stability.</li>
  </ul>

  <h4><strong>7. Predictive Rules & Common Pitfalls</strong></h4>
  <ul>
    <li><strong>Rule of Thumb:</strong> If <strong>E°(Metal A) < E°(Metal B)</strong>, then A can displace B from its salts.</li>
    <li><strong>Exception – Passivation:</strong> <strong>Aluminium</strong> and <strong>titanium</strong> form a dense oxide layer that can prevent displacement despite a negative E°.</li>
    <li><strong>Temperature Effect:</strong> E° values shift with temperature (≈ –0.0005 V °C⁻¹ for most metals); high‑temperature processes (e.g., thermite) may reverse expected trends.</li>
    <li><strong>Concentration Effect (Nernst Equation):</strong> Real‑world potentials are given by<br>
      <code>E = E° – (0.0592/n)·log([Red]/[Ox])</code> (at 25 °C). High ion concentration can make a less‑reactive metal appear to displace a more‑reactive one.</li>
  </ul>

  <h4><strong>8. Quantitative Example – Thermite Reaction</strong></h4>
  <p>The classic thermite reaction uses aluminium powder to reduce iron(III) oxide:</p>
  <pre>2Al + Fe₂O₃ → Al₂O₃ + 2Fe   ΔH ≈ –850 kJ mol⁻¹</pre>
  <ul>
    <li>Aluminium (E° = –1.66 V) is more reactive than iron (E° = –0.44 V), providing a large driving force.</li>
    <li>Resulting temperature exceeds 2500 °C, suitable for welding railway tracks and for incendiary devices.</li>
  </ul>

  <h4><strong>9. Laboratory Identification Using Displacement</strong></h4>
  <p>Qualitative analysis schemes (e.g., the <em>classical qualitative inorganic analysis</em>) rely heavily on displacement reactions:</p>
  <ol>
    <li><strong>Group I (Acid‑soluble cations):</strong> Add dilute HCl; metals above hydrogen (Zn, Fe, Mn, etc.) precipitate as chlorides or evolve H₂.</li>
    <li><strong>Group II (Base‑soluble cations):</strong> Treat filtrate with NaOH; metals like Cu²⁺ give blue precipitate <code>Cu(OH)₂</code> which does not further displace.</li>
    <li>Sequential displacement with <strong>NH₄Cl</strong> and <strong>NH₄OH</strong> isolates specific ions based on solubility and redox potentials.</li>
  </ol>

  <h4><strong>10. Summary – Key Take‑aways for Defence Exams</strong></h4>
  <ul>
    <li>The reactivity series is a direct ordering of <strong>standard electrode potentials</strong>.</li>
    <li>Displacement occurs only when the metal in elemental form is **higher** (more negative E°) than the metal ion in solution.</li>
    <li>Hydrogen occupies the pivotal position; metals above H liberate H₂ from acids, those below do not.</li>
    <li>Industrial relevance: galvanisation, sacrificial anodes, thermite, aluminium‑air batteries, and corrosion control.</li>
    <li>Remember the **passivation** exception for Al and Ti, and the temperature‑dependent shift in potentials.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Metals **above hydrogen** (e.g., Zn, Fe, Mg) **displace hydrogen** from dilute acids; those **below** (Cu, Ag, Au) do not.</li>
      <li>In the series, **potassium** is the most reactive metal; it reacts explosively with cold water, producing KOH and H₂.</li>
      <li>**Zinc** is the standard sacrificial anode for steel because its E° (–0.76 V) is sufficiently negative to protect Fe (–0.44 V).</li>
      <li>The **thermite reaction** (Al + Fe₂O₃) exemplifies a high‑temperature displacement driven by a ΔE° of about **+1.22 V**.</li>
      <li>**Aluminium** appears low in the series but is **passivated** by Al₂O₃; in practice it does not readily displace metals unless the oxide layer is removed.</li>
      <li>Standard potential values are measured at **25 °C, 1 atm, 1 M**; use the **Nernst equation** for non‑standard conditions.</li>
      <li>In naval ships, **magnesium** strips are used as **cathodic protection** for hulls made of iron/steel.</li>
      <li>When a metal **higher** in the series is added to a solution of a **lower** metal’s salt, the reaction is **spontaneous** and the cell potential is positive.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["carbon-compounds"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Carbon & its Compounds
  </h3>

  <h4>1. Introduction and Significance of Carbon</h4>
  <p>Carbon (<strong>[[Carbon]]</strong>) is the fourth most abundant element in the universe and the backbone of organic chemistry. Its unique ability to form four covalent bonds (<em>tetravalency</em>) and to <strong>catenate</strong> (self‑link) leads to an almost limitless variety of compounds. This property, combined with <strong>[[hybridization]]</strong> of its orbitals (sp³, sp², sp), gives rise to diverse allotropes and a vast array of organic molecules essential for life, fuels, polymers, and pharmaceuticals.</p>

  <h4>2. Allotropes of Carbon</h4>
  <p>Carbon exists in several structural forms known as allotropes, each with distinct physical and chemical properties:</p>
  <ul>
    <li><strong>[[Diamond]]</strong> – Each carbon atom is sp³ hybridised, forming a rigid three‑dimensional network. It is the hardest known natural substance, has high thermal conductivity, and is an electrical insulator.</li>
    <li><strong>[[Graphite]]</strong> – Layers of sp² hybridised carbon atoms arranged in hexagonal sheets. Weak van der Waals forces between layers give graphite its lubricating property and electrical conductivity along the planes.</li>
    <li><strong>[[Fullerene]]</strong> – Molecular cages such as C₆₀ (buckminsterfullerene) where carbon atoms are sp² hybridised forming closed spheroidal structures. Fullerenes exhibit superconductivity when doped.</li>
    <li><strong>[[Graphene]]</strong> – A single layer of graphite; a two‑dimensional honeycomb lattice of sp² carbon. It possesses extraordinary tensile strength, high electron mobility, and transparency.</li>
    <li><strong>[[Carbon nanotubes]]</strong> – Rolled‑up graphene sheets (single‑ or multi‑walled) exhibiting remarkable mechanical strength and electrical properties depending on chirality.</li>
  </ul>
  <p>These allotropes illustrate how <strong>[[catenation]]</strong> and <strong>[[hybridization]]</strong> dictate macroscopic behaviour.</p>

  <h4>3. Organic Chemistry Fundamentals</h4>
  <p>Organic chemistry studies carbon‑containing compounds, primarily those with C–H bonds. Key concepts include:</p>
  <ul>
    <li><strong>[[Functional group]]</strong> – An atom or group of atoms that imparts characteristic chemical reactivity (e.g., –OH, –COOH, –NH₂).</li>
    <li><strong>[[Homologous series]]</strong> – A family of compounds with the same functional group and similar chemical properties, differing by a –CH₂– unit (e.g., alkanes: CₙH₂ₙ₊₂).</li>
    <li><strong>[[Isomerism]]</strong> – Compounds with the same molecular formula but different structural arrangement. Types include:
      <ul>
        <li>Structural (chain, position, functional group) isomerism.</li>
        <li>Stereoisomerism (geometrical and optical).</li>
      </ul>
    </li>
    <li><strong>[[IUPAC nomenclature]]</strong> – Systematic naming rules ensuring each structure has a unique name.</li>
  </ul>

  <h4>4. Hydrocarbons</h4>
  <p>Hydrocarbons are compounds containing only carbon and hydrogen. They are classified based on the type of carbon–carbon bonds:</p>
  <h5>4.1 Saturated Hydrocarbons – Alkanes</h5>
  <p>General formula CₙH₂ₙ₊₂; all carbon atoms are sp³ hybridised. Examples: <strong>[[Methane]]</strong> (CH₄), <strong>[[Ethane]]</strong> (C₂H₆), <strong>[[Propane]]</strong> (C₃H₈). Key reactions:</p>
  <ul>
    <li><strong>Combustion</strong>: CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O + heat.</li>
    <li><strong>Halogenation</strong> (free radical substitution): RH + X₂ → RX + HX (requires UV light).</li>
    <li><strong>Cracking</strong> (thermal or catalytic): breaking larger alkanes into smaller alkenes and alkanes.</li>
  </ul>

  <h5>4.2 Unsaturated Hydrocarbons – Alkenes and Alkynes</h5>
  <p>Alkenes contain at least one C=C double bond (sp² hybridisation); general formula CₙH₂ₙ. Example: <strong>[[Ethene]]</strong> (C₂H₄). Alkynes contain a C≡C triple bond (sp hybridisation); general formula CₙH₂ₙ₋₂. Example: <strong>[[Ethyne]]</strong> (acetylene, C₂H₂).</p>
  <p>Characteristic reactions:</p>
  <ul>
    <li><strong>Addition reactions</strong> (electrophilic): e.g., hydrogenation (H₂/Ni), halogenation (X₂), hydrohalogenation (HX).</li>
    <li><strong>Markovnikov’s rule</strong>: In addition of HX to an unsymmetrical alkene, the hydrogen attaches to the carbon bearing more hydrogens.</li>
    <li><strong>Oxidation</strong>: Cold dilute KMnO₄ gives vicinal diols; hot concentrated KMnO₄ cleaves the double bond to carbonyl compounds.</li>
    <li><strong>Polymerisation</strong>: Ethene → polyethylene; propene → polypropylene.</li>
  </ul>

  <h5>4.3 Aromatic Hydrocarbons – Benzene and Derivatives</h5>
  <p><strong>[[Benzene]]</strong> (C₆H₆) consists of a planar hexagonal ring with delocalised π‑electrons (resonance). It undergoes electrophilic aromatic substitution rather than addition to preserve aromaticity.</p>
  <p>Important reactions:</p>
  <ul>
    <li><strong>Nitration</strong>: Benzene + HNO₃/H₂SO₄ → Nitrobenzene + H₂O.</li>
    <li><strong>Sulphonation</strong>: Benzene + H₂SO₄ (fuming) → Benzene sulphonic acid.</li>
    <li><strong>Friedel‑Crafts alkylation</strong>: Benzene + R‑Cl + AlCl₃ → Alkylbenzene + HCl.</li>
    <li><strong>Friedel‑Crafts acylation</strong>: Benzene + R‑COCl + AlCl₃ → Aryl ketone + HCl.</li>
  </ul>
  <p>Substituents affect reactivity: activating groups (–OH, –NH₂, –OR) increase electron density; deactivating groups (–NO₂, –COOH, –CHO) decrease it.</li>

  <h4>5. Oxygen‑Containing Functional Groups</h4>
  <p>These groups significantly alter polarity, boiling points, and reactivity.</p>
  <h5>5.1 Alcohols (–OH)</h5>
  <p>General formula CₙH₂ₙ₊₁OH. Classification: primary, secondary, tertiary based on the carbon bearing –OH.</p>
  <p>Reactions:</p>
  <ul>
    <li><strong>Oxidation</strong>: Primary → aldehyde → carboxylic acid (using PCC, KMnO₄); Secondary → ketone; Tertiary resistant.</li>
    <li><strong>Esterification</strong>: Alcohol + carboxylic acid (conc. H₂SO₄) → ester + water (Fischer esterification).</li>
    <li><strong>Dehydration</strong>: Alcohol → alkene (conc. H₂SO₄, heat) – follows Zaitsev’s rule.</li>
  </ul>

  <h5>5.2 Carbonyl Compounds – Aldehydes and Ketones</h5>
  <p>Aldehydes (–CHO) have at least one hydrogen attached to the carbonyl carbon; ketones (–CO–) have two carbon groups.</p>
  <p>Reactions:</p>
  <ul>
    <li><strong>Nucleophilic addition</strong>: e.g., with HCN → cyanohydrin; with NaHSO₃ → bisulphite addition compound.</li>
    <li><strong>Oxidation</strong>: Aldehydes are easily oxidised to carboxylic acids (Tollens’ reagent, Fehling’s solution); Ketones resist oxidation.</li>
    <li><strong>Reduction</strong>: To alcohols using NaBH₄ or LiAlH₄.</li>
    <li><strong>Condensation</strong>: Aldol condensation (base‑catalysed) between two aldehydes/ketones.</li>
  </ul>

  <h5>5.3 Carboxylic Acids (–COOH)</h5>
  <p>General formula CₙH₂ₙ₊₁COOH. They exhibit hydrogen bonding, leading to higher boiling points.</p>
  <p>Reactions:</p>
  <ul>
    <li><strong>Acidity</strong>: Donate proton (pKa ≈ 4–5). React with NaOH → carboxylate salt + water.</li>
    <li><strong>Esterification</strong>: With alcohol (acid catalyst) → ester.</li>
    <li><strong>Decarboxylation</strong>: Loss of CO₂ upon heating (especially β‑keto acids).</li>
    <li><strong>Reduction</strong>: To primary alcohols using LiAlH₄.</li>
  </ul>

  <h5>5.4 Esters (–COO–)</h5>
  <p>Formed from carboxylic acid + alcohol. Undergo hydrolysis (acidic or basic) to give parent acid and alcohol (saponification).</p>

  <h4>6. Nitrogen‑Containing Functional Groups</h4>
  <p>Important for biomolecules and drugs.</p>
  <h5>6.1 Amines (–NH₂, –NHR, –NR₂)</h5>
  <p>Basic in nature due to lone pair on nitrogen. React with acyl chlorides to form amides; with nitrous acid to give diazonium salts (primary aromatic amines).</p>

  <h5>6.2 Amides (–CONH₂)</h5>
  <p>Formed by carboxylic acid + amine (condensation). Resonance gives partial double‑bond character to C–N, making them less basic than amines.</p>

  <h5>6.3 Nitriles (–C≡N)</h5>
  <p>Hydrolysed to carboxylic acids (acidic or basic) or reduced to primary amines (LiAlH₄).</p>

  <h4>7. Polymerisation and Important Polymers</h4>
  <p>Carbon’s ability to form long chains leads to polymers.</p>
  <ul>
    <li><strong>Addition polymerisation</strong>: e.g., polyethylene, polypropylene, PVC.</li>
    <li><strong>Condensation polymerisation</strong>: e.g., nylon‑6,6 (hexamethylenediamine + adipic acid), polyester (ethylene glycol + terephthalic acid).</li>
    <li><strong>Biopolymers</strong>: cellulose (glucose polymer), proteins (amino acid polypeptides), nucleic acids.</li>
  </ul>

  <h4>8. Environmental and Industrial Aspects</h4>
  <p>Carbon compounds play crucial roles in energy, materials, and pollution.</p>
  <ul>
    <li><strong>Fossil fuels</strong>: Coal, petroleum, natural gas – mixtures of alkanes, cycloalkanes, aromatics.</li>
    <li><strong>Combustion emissions</strong>: CO₂ (greenhouse gas), CO (toxic), NOₓ, SOₓ, particulates.</li>
    <li><strong>Green chemistry</strong>: Emphasis on atom economy, renewable feedstocks (e.g., bio‑ethanol), and biodegradable polymers.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Carbon exhibits <strong>catenation</strong> – the ability to form long chains – due to its tetravalency and strong C–C bond.</li>
      <li><strong>Diamond</strong> is an sp³ hybridised insulator with the highest thermal conductivity of any known material.</li>
      <li><strong>Graphite</strong> conducts electricity parallel to its layers because of delocalised π‑electrons in sp² hybridised sheets.</li>
      <li>In <strong>Markovnikov’s rule</strong>, the hydrogen of HX adds to the carbon of an alkene bearing more hydrogens.</li>
      <li>The <strong>IUPAC name</strong> for CH₃CH₂OH is ethanol; for CH₃COOH it is ethanoic acid.</li>
      <li><strong>Benzene</strong> undergoes electrophilic aromatic substitution; nitration uses a mixture of concentrated HNO₃ and H₂SO₄.</li>
      <li>Polythene (polyethylene) is produced by addition polymerisation of ethene under high pressure and temperature.</li>
      <li>The functional group –COOH gives carboxylic acids their acidic nature; typical pKa values range from 4 to 5.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["chemistry-everyday-fertilisers"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Everyday Chemistry, Fertilisers & Fuels
  </h3>

  <h4>1. Everyday Chemistry – Core Concepts</h4>
  <p>Everyday chemistry deals with the chemical substances that we encounter in daily life. Understanding their composition, preparation, and reactions is crucial for both practical applications and for answering objective‑type questions in NDA, CDS and AFCAT.</p>

  <ul>
    <li><strong>Soap and Detergents</strong>
      <ul>
        <li>Soap: Sodium or potassium salts of <strong>fatty acids</strong> obtained by <em>saponification</em> of triglycerides with NaOH/KOH.</li>
        <li>Detergents: Synthetic surfactants (e.g., <strong>Linear Alkylbenzene Sulfonate (LAS)</strong>) that are less hard‑water sensitive.</li>
        <li>Key reaction: <code>Triglyceride + 3 NaOH → Glycerol + 3 RCOONa</code></li>
      </ul>
    </li>
    <li><strong>Bleaching Agents</strong>
      <ul>
        <li><strong>Chlorine</strong> (Cl₂) and <strong>Sodium hypochlorite (NaOCl)</strong> – used in household bleach.</li>
        <li><strong>Hydrogen peroxide (H₂O₂)</strong> – a non‑chlorine bleach, decomposes to H₂O + O₂.</li>
      </ul>
    </li>
    <li><strong>Acids & Bases in Household Products</strong>
      <ul>
        <li>Acids: <strong>Acetic acid</strong> in vinegar, <strong>citric acid</strong> in fruit‑based cleaners.</li>
        <li>Alkalis: <strong>Sodium carbonate (washing soda)</strong>, <strong>Sodium bicarbonate (baking soda)</strong>.</li>
      </ul>
    </li>
    <li><strong>Food Additives & Preservatives</strong>
      <ul>
        <li>Antioxidants – <strong>Butylated hydroxyanisole (BHA)</strong>, <strong>Butylated hydroxytoluene (BHT)</strong>.</li>
        <li>Preservatives – <strong>Sodium benzoate</strong>, <strong>Sulphur dioxide (SO₂)</strong>.</li>
      </ul>
    </li>
    <li><strong>Pharmaceutical Chemistry – Common Analgesics</strong>
      <ul>
        <li><strong>Acetylsalicylic acid (Aspirin)</strong> – synthesized by esterification of salicylic acid with acetic anhydride.</li>
        <li><strong>Paracetamol</strong> – obtained via nitration of phenol followed by reduction.</li>
      </ul>
    </li>
  </ul>

  <h4>2. Fertilisers – Types, Production & Environmental Impact</h4>
  <p>Fertilisers supply essential nutrients – nitrogen (N), phosphorus (P) and potassium (K) – to augment soil fertility. The modern Indian agriculture heavily depends on synthetic fertilisers, a legacy of the <strong>Green Revolution</strong> that began in the 1960s.</p>

  <h5>2.1 Classification of Fertilisers</h5>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%; margin-top:10px;">
    <tr style="background:#f2f2f2;">
      <th>Category</th>
      <th>Primary Nutrient(s)</th>
      <th>Common Commercial Forms</th>
      <th>Key Chemical Formula</th>
    </tr>
    <tr>
      <td><strong>Nitrogenous</strong></td>
      <td>N</td>
      <td>Urea, Ammonium nitrate, Ammonium sulphate</td>
      <td>CO(NH₂)₂, NH₄NO₃, (NH₄)₂SO₄</td>
    </tr>
    <tr>
      <td><strong>Phosphatic</strong></td>
      <td>P₂O₅</td>
      <td>Superphosphate, Triple superphosphate, Diammonium phosphate (DAP)</td>
      <td>Ca(H₂PO₄)₂·H₂O, Ca(H₂PO₄)₂, (NH₄)₂HPO₄</td>
    </tr>
    <tr>
      <td><strong>Potassic</strong></td>
      <td>K₂O</td>
      <td>Muriate of potash (KCl), Sulphate of potash (K₂SO₄)</td>
      <td>KCl, K₂SO₄</td>
    </tr>
    <tr>
      <td><strong>Complex (NPK)</strong></td>
      <td>N, P, K</td>
      <td>15‑15‑15, 20‑20‑0, 10‑30‑20</td>
      <td>Varies – blend of above compounds</td>
    </tr>
  </table>

  <h5>2.2 Production Routes</h5>
  <ul>
    <li><strong>Ammonia (NH₃) – The cornerstone</strong>
      <ul>
        <li>Manufactured via the <a href="https://en.wikipedia.org/wiki/Haber%E2%80%93Bosch_process"><strong>[[Haber‑Bosch process]]</strong></a>:
          <code>N₂ (g) + 3 H₂ (g) → 2 NH₃ (g)</code> at 200–250 atm, 400–500 °C over an iron catalyst.</li>
        <li>Ammonia is the feedstock for urea, ammonium nitrate and ammonium sulphate.</li>
      </ul>
    </li>
    <li><strong>Urea (CO(NH₂)₂)</strong>
      <ul>
        <li>Reaction: <code>2 NH₃ + CO₂ → NH₂CONH₂ + H₂O</code> (high pressure, 150 °C).</li>
        <li>Urea contains 46 % N by mass – highest among solid N‑fertilisers.</li>
      </ul>
    </li>
    <li><strong>Phosphatic Fertilisers</strong>
      <ul>
        <li>Derived from phosphate rock (mainly Ca₅(PO₄)₃F). <a href="https://en.wikipedia.org/wiki/Phosphoric_acid"><strong>[[Phosphoric acid]]</strong></a> is produced by treating the rock with sulphuric acid:
          <code>Ca₅(PO₄)₃F + 5 H₂SO₄ → 3 H₃PO₄ + 5 CaSO₄ + HF</code>.</li>
        <li>Superphosphate: <code>Ca₅(PO₄)₃F + H₂SO₄ → Ca(H₂PO₄)₂ + CaSO₄</code>.</li>
        <li>Triple superphosphate (TSP): Concentrated H₃PO₄ + phosphate rock → Ca(H₂PO₄)₂ (≈46 % P₂O₅).</li>
      </ul>
    </li>
    <li><strong>Potassic Fertilisers</strong>
      <ul>
        <li>Extracted from sylvinite (KCl·NaCl) through flotation and crystallisation.</li>
        <li>Commonly sold as <strong>Muriate of potash (KCl)</strong>.</li>
      </ul>
    </li>
  </ul>

  <h5>2.3 Nitrogen Cycle & Environmental Concerns</h5>
  <p>The excessive use of N‑fertilisers leads to nitrate leaching, eutrophication of water bodies, and release of nitrous oxide (N₂O), a potent greenhouse gas.</p>
  <ul>
    <li><strong>Denitrification</strong> – conversion of NO₃⁻ to N₂/N₂O by anaerobic bacteria.</li>
    <li><strong>Ammonia volatilisation</strong> – loss of NH₃ to the atmosphere, especially from urea applied on alkaline soils.</li>
    <li>Regulatory measures: <strong>National Fertiliser Policy (2002)</strong> and the <strong>Fertiliser (Control) Order, 1985</strong> aim to balance productivity with environmental safety.</li>
  </ul>

  <h5>2.4 Fertiliser Use in India – Statistics (as of 2023)</h5>
  <ul>
    <li>Total consumption: ~ 38 million tonnes per year.</li>
    <li>Urea accounts for ~ 70 % of the total, with an average application rate of 150 kg ha⁻¹.</li>
    <li>Top states by consumption: <strong>Punjab, Haryana, Uttar Pradesh, and Maharashtra.</strong></li>
  </ul>

  <h4>3. Fuels – Classification, Production & Modern Trends</h4>

  <h5>3.1 Primary Energy Sources</h5>
  <ul>
    <li><strong>Fossil Fuels</strong> – Coal, petroleum, natural gas.</li>
    <li><strong>Renewable Fuels</strong> – Bio‑ethanol, biodiesel, biogas (CNG/LPG from biomass).</li>
  </ul>

  <h5>3.2 Coal – Types & Processing</h5>
  <ul>
    <li><strong>Anthracite</strong> – Highest carbon content (≈ 92 %), low volatile matter.</li>
    <li><strong>Bituminous</strong> – Main source for electricity generation; yields coke on heating.</li>
    <li><strong>Coking Coal</strong> – Used in <a href="https://en.wikipedia.org/wiki/Metallurgical_coke"><strong>[[coking]]</strong></a> to produce metallurgical coke for steel.</li>
    <li>Key reaction in coke formation (thermal decomposition):
      <code>C₁₀H₁₄ → 10 C + 7 H₂</code> (approximate).</li>
  </ul>

  <h5>3.3 Petroleum – From Crude to End Products</h5>
  <p>Crude oil is a complex mixture of hydrocarbons (alkanes, cycloalkanes, aromatics). The refining industry separates it into fractions based on boiling points.</p>

  <h6>3.3.1 Fractional Distillation</h6>
  <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%; margin-top:10px;">
    <tr style="background:#e6e6e6;">
      <th>Distillation Range (°C)</th>
      <th>Fraction</th>
      <th>Main Uses</th>
    </tr>
    <tr>
      <td>30‑60</td>
      <td><strong>Petroleum ether</strong></td>
      <td>Solvent, cleaning agents.</td>
    </tr>
    <tr>
      <td>60‑120</td>
      <td><strong>Gasoline (Petrol)</strong></td>
      <td>Automobile fuel.</td>
    </tr>
    <tr>
      <td>120‑180</td>
      <td><strong>Kerosene</strong></td>
      <td>Aviation fuel, domestic lighting.</td>
    </tr>
    <tr>
      <td>180‑350</td>
      <td><strong>Diesel</strong></td>
      <td>Heavy‑duty engines, generators.</td>
    </tr>
    <tr>
      <td>350‑550</td>
      <td><strong>Fuel oil</strong></td>
      <td>Industrial boilers.</td>
    </tr>
  </table>

  <h6>3.3.2 Conversion Processes</h6>
  <ul>
    <li><strong>Catalytic Cracking</strong> – Breaks heavy fractions into lighter alkanes using zeolite catalysts at 450–550 °C. Reaction example:
      <code>C₁₆H₃₄ → C₈H₁₈ + C₈H₁₆</code>.</li>
    <li><strong>Thermal Cracking</strong> – High‑temperature (≥ 700 °C) pyrolysis without catalyst; yields more unsaturated products.</li>
    <li><strong>Hydrocracking</strong> – Combines hydrogen addition with cracking; produces high‑quality diesel and jet fuel.</li>
    <li><strong>Reforming</strong> – Converts n‑alkanes to aromatics (e.g., n‑hexane → benzene) using Pt‑Re catalysts; essential for octane improvement.</li>
  </ul>

  <h5>3.4 Fuel Quality Parameters</h5>
  <ul>
    <li><strong>Octane Rating</strong> – Measure of resistance to knocking in spark‑ignition engines.
      <ul>
        <li>Calculated as <em>RON</em> (Research Octane Number) and <em>MON</em> (Motor Octane Number).</li>
        <li>Typical Indian petrol: 91 RON (premium) and 87 RON (regular).</li>
      </ul>
    </li>
    <li><strong>Cetane Number</strong> – Indicator of ignition quality in diesel engines; higher cetane → smoother start.</li>
    <li><strong>Calorific Value</strong> – Energy released per gram; for gasoline ≈ 44 MJ kg⁻¹, diesel ≈ 45.5 MJ kg⁻¹.</li>
  </ul>

  <h5>3.5 Alternative & Renewable Fuels</h5>
  <ul>
    <li><strong>Ethanol (C₂H₅OH)</strong>
      <ul>
        <li>Produced by fermentation of molasses, sugarcane bagasse or corn starch.</li>
        <li>India’s <strong>Ethanol Blended Petrol (EBP)</strong> program targets 20 % ethanol by 2025 (E20).</li>
      </ul>
    </li>
    <li><strong>Biodiesel (Fatty Acid Methyl Ester – FAME)</strong>
      <ul>
        <li>Synthesised via trans‑esterification:
          <code>Triglyceride + 3 CH₃OH → 3 RCOOCH₃ + Glycerol</code> (catalysed by NaOH/KOH).</li>
        <li>Common feedstocks: Jatropha, mustard, waste cooking oil.</li>
      </ul>
    </li>
    <li><strong>Compressed Natural Gas (CNG) & Liquefied Petroleum Gas (LPG)</strong>
      <ul>
        <li>CNG: Mainly methane (CH₄); stored at 200–250 bar.</li>
        <li>LPG: Propane (C₃H₈) & butane (C₄H₁₀) mixture; stored at 5–9 bar.</li>
        <li>Both offer lower CO₂ emissions per unit energy compared with gasoline.</li>
      </ul>
    </li>
    <li><strong>Hydrogen Fuel</strong> – Emerging clean fuel; produced via electrolysis of water or steam reforming of natural gas.</li>
  </ul>

  <h5>3.6 Combustion Chemistry – Key Reactions</h5>
  <p>Complete combustion of a hydrocarbon yields CO₂ and H₂O, releasing heat according to the enthalpy of formation.</p>
  <ul>
    <li>General equation:
      <code>CₙH₂ₙ₊₂ + (1.5 n + 0.5) O₂ → n CO₂ + (n + 1) H₂O   ΔH° ≈ – (– (– ) )</code></li>
    <li>Incomplete combustion produces CO and soot (C). This is the basis for <strong>catalytic converters</strong> that oxidise CO → CO₂ and reduce NOₓ → N₂.</li>
  </ul>

  <h5>3.7 Safety & Handling of Fuels</h5>
  <ul>
    <li>Flammability limits (LEL/UEL) – e.g., gasoline vapour LEL ≈ 1.4 % vol, UEL ≈ 7.6 % vol.</li>
    <li>Storage requirements – underground tanks for petroleum, pressure‑rated cylinders for CNG/LPG.</li>
    <li>Environmental regulations – <strong>Petroleum Act, 1934</strong> and <strong>Air (Prevention & Control of Pollution) Act, 1981</strong>.</li>
  </ul>

  <h4>4. Inter‑relationship between Fertilisers & Fuels</h4>
  <p>Many modern fuels are derived from by‑products of fertiliser manufacturing, and vice‑versa.</p>
  <ul>
    <li><strong>Ammonia as a Hydrogen Carrier</strong> – Used in fuel‑cell research; can be cracked back to H₂ and N₂.</li>
    <li><strong>Urea‑Based SCR (Selective Catalytic Reduction)</strong> – Urea solution (AdBlue) is injected into diesel exhaust to reduce NOₓ to N₂ and H₂O.</li>
    <li>Coal gasification produces syngas (CO + H₂) which can be converted to methanol – a precursor for both MTBE (fuel additive) and formaldehyde (fertiliser intermediate).</li>
  </ul>

  <h4>5. Summary of High‑Yield Points for Quick Revision</h4>
  <p>These bullet points condense the most frequently examined facts for NDA, CDS and AFCAT.</p>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>Urea contains <strong>46 % nitrogen</strong> by weight – the highest among solid N‑fertilisers.</li>
      <li>The <strong>Haber‑Bosch process</strong> operates at 200–250 atm and 400–500 °C using an iron catalyst.</li>
      <li>India’s petrol octane rating is generally <strong>91 RON (premium) and 87 RON (regular)</strong>.</li>
      <li>Complete combustion of methane releases <strong>55.5 MJ kg⁻¹</strong> of heat.</li>
      <li>Superphosphate is produced by reacting phosphate rock with <strong>sulphuric acid</strong>, yielding a product with ~ 20 % P₂O₅.</li>
      <li>Selective Catalytic Reduction (SCR) uses <strong>urea solution (32.5 % NH₂COONH₂)</strong> to cut diesel NOₓ emissions.</li>
      <li>Biomass‑derived ethanol in India is targeted to reach <strong>E20 (20 % ethanol blend) by 2025</strong>.</li>
      <li>CNG is stored at <strong>200–250 bar</strong> and primarily consists of <strong>methane (CH₄)</strong>.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["environmental-chemistry"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Environmental Chemistry & Pollution
  </h3>

  <h4>Introduction and Scope</h4>
  <p>Environmental chemistry is the branch of chemistry that studies <strong>chemical</strong> and <strong>biochemical</strong> phenomena occurring in natural places. It focuses on the <strong>source, transport, reactions, effects, and fate</strong> of chemical species in the <strong>air, water, and soil</strong> environments, as well as the impact of human activity on these systems. Understanding these processes is essential for assessing <strong>pollution</strong> levels, designing control strategies, and protecting ecosystems and public health. The field integrates principles from <em>analytical chemistry</em>, <em>physical chemistry</em>, <em>organic chemistry</em>, and <em>toxicology</em> to address real‑world environmental challenges.</p>

  <h4>Classification of Pollution</h4>
  <p>Pollution can be broadly classified according to the <strong>medium</strong> affected and the <strong>nature</strong> of the contaminant. The major categories include:</p>
  <ul>
    <li><strong>Air pollution</strong> – contamination of the atmosphere by gases, particulates, and biological molecules.</li>
    <li><strong>Water pollution</strong> – introduction of harmful substances into <strong>surface water</strong> (rivers, lakes) and <strong>groundwater</strong>.</li>
    <li><strong>Soil (land) pollution</strong> – accumulation of xenobiotics, heavy metals, and salts that degrade soil quality.</li>
    <li><strong>Noise pollution</strong> – excessive or harmful levels of sound that affect living organisms.</li>
    <li><strong>Radioactive pollution</strong> – release of unstable isotopes emitting ionising radiation.</li>
  </ul>
  <p>Each type has distinct sources, chemical behaviours, and mitigation approaches, which are discussed in detail below.</p>

  <h4>Air Pollution</h4>
  <p>The atmosphere contains a mixture of gases; pollutants alter this composition and can cause adverse health and climatic effects. Air pollutants are divided into <strong>primary</strong> (emitted directly) and <strong>secondary</strong> (formed in the atmosphere) categories.</p>
  <h5>Primary Pollutants</h5>
  <ul>
    <li><strong>[[Sulfur dioxide]] (SO₂)</strong> – produced from combustion of sulphur‑containing fossil fuels and metal smelting.</li>
    <li><strong>[[Nitrogen oxides]] (NOₓ = NO + NO₂)</strong> – generated in high‑temperature combustion (vehicles, power plants).</li>
    <li><strong>[[Carbon monoxide]] (CO)</strong> – incomplete combustion of carbonaceous fuels.</li>
    <li><strong>[[Particulate matter]] (PM)</strong> – solid or liquid droplets; classified as PM₁₀ (≤10 µm) and PM₂.₅ (≤2.5 µm). Sources include road dust, construction, biomass burning.</li>
    <li><strong>Volatile organic compounds (VOCs)</strong> – e.g., benzene, toluene, xylene; emitted from solvents, petrol refineries.</li>
    <li><strong>Lead (Pb)</strong> – historically from leaded petrol; still present in some industrial emissions.</li>
    <li><strong>[[Mercury]] (Hg)</strong> – released from coal combustion and artisanal gold mining.</li>
  </ul>
  <h5>Secondary Pollutants</h5>
  <ul>
    <li><strong>[[Ozone]] (O₃)</strong> – formed by photochemical reactions of NOₓ and VOCs in the presence of sunlight; main component of photochemical smog.</li>
    <li><strong>[[Peroxyacetyl nitrate]] (PAN)</strong> – another photochemical oxidant harmful to plants.</li>
    <li><strong>[[Acid rain]] precursors</strong> – SO₂ and NOₓ oxidise to H₂SO₄ and HNO₃, which deposit as wet or dry acid deposition.</li>
    <li><strong>Secondary organic aerosols (SOA)</strong> – formed from oxidation of VOCs.</li>
  </ul>
  <h5>Effects and Control Measures</h5>
  <p>Health impacts include respiratory diseases (asthma, bronchitis), cardiovascular disorders, and lung cancer. Environmental effects comprise <strong>acidification of soils and water bodies</strong>, <strong>eutrophication** via nitrogen deposition, damage to vegetation, and reduced visibility. Climate effects involve <strong>radiative forcing</strong> by aerosols and greenhouse gases.</p>
  <p>Control strategies involve:</p>
  <ul>
    <li>Fuel desulphurisation and low‑sulphur fuels.</li>
    <li>Catalytic converters in automobiles to reduce CO, NOₓ, and VOCs.</li>
    <li>Flue‑gas desulphurisation (FGD) and selective catalytic reduction (SCR) in power plants.</li>
    <li>Promotion of renewable energy and electric vehicles.</li>
    <li>Implementation of ambient air quality standards (e.g., National Ambient Air Quality Standards, NAAQS) and real‑time monitoring via the <strong>Air Quality Index (AQI)</strong>.</li>
  </ul>

  <h4>Water Pollution</h4>
  <p>Water bodies become polluted when contaminants exceed their natural assimilative capacity. Pollutants are categorised as <strong>point source</strong> (discrete discharge points) and <strong>non‑point source** (diffuse runoff).</p>
  <h5>Major Pollutants</h5>
  <ul>
    <li><strong>Organic waste** – measured by Biochemical Oxygen Demand (BOD) and Chemical Oxygen Demand (COD); sewage, food‑processing effluents.</li>
    <li><strong>Pathogens** – bacteria (e.g., <em>Escherichia coli</em>), viruses, protozoa causing water‑borne diseases.</li>
    <li><strong>Nutrients** – nitrates (NO₃⁻) and phosphates (PO₄³⁻) from agricultural fertilisers and detergents; cause <strong>eutrophication</strong> and algal blooms.</li>
    <li><strong>Heavy metals** – <strong>[[Lead]]</strong>, <strong>[[Mercury]]</strong>, cadmium, chromium, arsenic; toxic and persistent.</li>
    <li><strong>[[DDT]] and other persistent organic pollutants (POPs)** – pesticides that bioaccumulate in food chains.</li>
    <li><strong>Oil and petroleum hydrocarbons** – from spills, tanker accidents, and urban runoff.</li>
    <li><strong>Plastics and microplastics** – emerging concern due to ingestion by aquatic life.</li>
  </ul>
  <h5>Effects and Remediation</h5>
  <p>Consequences include depletion of dissolved oxygen (leading to fish kills), toxicity to aquatic organisms, contamination of drinking water supplies, and loss of biodiversity. Remediation techniques involve:</p>
  <ul>
    <li>Primary treatment (screening, sedimentation).</li>
    <li>Secondary treatment (activated sludge, trickling filters) for BOD/COD reduction.</li>
    <li>Tertiary treatment (filtration, nutrient removal, disinfection).</li>
    <li>Constructed wetlands and phytoremediation for nutrient and metal uptake.</li>
    <li>Oil spill response using booms, skimmers, dispersants, and bioremediation.</li>
  </ul>
  <p>Legislative frameworks such as the <strong>[[Water (Prevention and Control of Pollution) Act, 1974]]</strong> in India set standards for effluent discharge and establish pollution control boards.</p>

  <h4>Soil Pollution</h4>
  <p>Soil contamination arises from the accumulation of xenobiotic chemicals that alter soil structure, fertility, and biological activity. Key sources include:</p>
  <ul>
    <li>Industrial effluents and sludge containing heavy metals.</li>
    <li>Agricultural inputs – pesticides, herbicides, fertilizers.</li>
    <li>Improper disposal of solid waste (landfills, e‑waste).</li>
    <li>Atmospheric deposition of pollutants (acid rain, particulates).</li>
    <li>Accidental spills (e.g., <strong>[[Bhopal gas tragedy]]</strong> released methyl isocyanate, contaminating soil).</li>
  </ul>
  <p>Effects comprise reduced crop yields, phytotoxicity, leaching of contaminants into groundwater, and entry into the food chain. Assessment uses soil quality indices, heavy‑metal concentration limits, and bioassay tests. Remediation methods encompass:</p>
  <ul>
    <li>Excavation and off‑site disposal.</li>
    <li>Soil washing, solvent extraction.</li>
    <li>Phytoremediation (using hyperaccumulator plants like <em>[[Thlaspi caerulescens]]</em> for nickel).</li>
    <li>Chemical stabilization (adding lime, phosphates).</li>
    <li>Thermal desorption and vitrification for high‑level contamination.</li>
  </ul>

  <h4>Noise Pollution</h4>
  <p>Defined as unwanted or harmful sound, noise pollution is measured in decibels (dB). Prolonged exposure above 85 dB can cause hearing loss, stress, hypertension, and sleep disturbance. Major sources are traffic, industrial machinery, construction activities, and aircraft. Control involves:</p>
  <ul>
    <li>Source modification (quieter engines, mufflers).</li>
    <li>Transmission barriers (sound‑absorbing walls, green belts).</li>
    <li>Receiver protection (earplugs, zoning regulations).</li>
    <li>Legislation such as the <strong>Noise Pollution (Regulation and Control) Rules, 2000</strong> in India.</li>
  </ul>

  <h4>Radioactive Pollution</h4>
  <p>Release of radionuclides (<strong>[[Uranium-235]]</strong>, <strong>[[Cesium-137]]</strong>, <strong>[[Strontium-90]]</strong>) from nuclear reactors, weapons testing, medical isotopes, and mining poses long‑term hazards due to ionising radiation. Effects include radiation sickness, cancer, genetic mutations, and environmental contamination. Notable incidents:</p>
  <ul>
    <li><strong>[[Chernobyl disaster]] (1986)** – massive release of iodine‑131, cesium‑137.</li>
    <li><strong>[[Fukushima Daiichi]] (2011)** – tsunami‑induced core melt.</li>
    <li><strong>[[Three Mile Island]] (1979)** – partial core melt.</li>
  </ul>
  <p>Management relies on containment, shielding, remote handling, and long‑term storage in geological repositories. The <strong>[[Atomic Energy Act, 1962]]</strong> and international safety standards (IAEA) govern radioactive material use.</p>

  <h4>Major Environmental Issues Linked to Chemistry</h4>
  <p>Several global problems stem from chemical perturbations:</p>
  <ul>
    <li><strong>[[Greenhouse effect]] and [[climate change]]** – driven by CO₂, CH₄, N₂O, and fluorinated gases; leads to rising temperatures, sea‑level rise, and extreme weather.</li>
    <li><strong>[[Ozone layer depletion]]** – caused by chlorofluorocarbons (CFCs) and halons; results in increased UV‑B radiation.</li>
    <li><strong>[[Acid rain]]** – SO₂ and NOₓ emissions cause forest damage, corrosion of monuments, and aquatic acidification.</li>
    <li><strong>[[Eutrophication]]** – nutrient overload triggers algal blooms, hypoxia, and dead zones (e.g., Gulf of Mexico).</li>
    <li><strong>[[Plastic pollution]]** – persistence of polyethylene, polypropylene; microplastics infiltrate trophic levels.</li>
    <li><strong>[[Heavy metal contamination]]** – biomagnification of mercury (as methylmercury) in fish.</li>
  </ul>

  <h4>Legislation and International Agreements</h4>
  <p>Effective pollution control requires robust legal frameworks. Key Indian statutes include:</p>
  <ul>
    <li><strong>[[Environment Protection Act, 1986]]</strong> – umbrella act empowering central government to take measures to protect and improve environmental quality.</li>
    <li><strong>[[Air (Prevention and Control of Pollution) Act, 1981]]</strong> – establishes ambient air quality standards and control boards.</li>
    <li><strong>[[Water (Prevention and Control of Pollution) Act, 1974]]</strong> – regulates discharge of effluents into water bodies.</li>
    <li><strong>[[Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016]]</strong> – governs hazardous waste handling.</li>
    <li><strong>[[Plastic Waste Management Rules, 2016]]</strong> – mandates extended producer responsibility.</li>
  </ul>
  <p>Important international accords:</p>
  <ul>
    <li><strong>[[Montreal Protocol]] (1987)** – phase‑out of ODS (CFCs, halons) to protect stratospheric ozone.</li>
    <li><strong>[[Kyoto Protocol]] (1997)** – binding targets for Annex I countries to reduce greenhouse‑gas emissions.</li>
    <li><strong>[[Paris Agreement]] (2015)** – aims to limit global warming to well below 2 °C, pursue efforts for 1.5 °C.</li>
    <li><strong>[[Stockholm Convention]] (2001)** – eliminates or restricts POPs such as DDT, PCBs, dioxins.</li>
    <li><strong>[[Minamata Convention on Mercury]] (2013)** – controls mercury emissions and releases.</li>
    <li><strong>[[Basel Convention]] (1989)** – regulates transboundary movements of hazardous wastes.</li>
  </ul>

  <h4>Monitoring and Assessment Indices</h4>
  <p>Quantitative evaluation relies on standardized indices:</p>
  <ul>
    <li><strong>Air Quality Index (AQI)** – aggregates PM₂.₅, PM₁₀, NO₂, SO₂, CO, O₃ into a single number with health‑based categories.</li>
    <li><strong>Biochemical Oxygen Demand (BOD)** – measures oxygen required by microorganisms to degrade organic matter (mg L⁻¹).</li>
    <li><strong>Chemical Oxygen Demand (COD)** – measures oxygen equivalent of organic matter oxidised by strong chemicals.</li>
    <li><strong>Total Dissolved Solids (TDS)** – inorganic salts and organic matter dissolved in water.</li>
    <li><strong>pH** – indicates acidity/alkalinity; critical for aquatic life.</li>
    <li><strong>Heavy‑metal concentration limits** – e.g., WHO guideline for lead in drinking water: 0.01 mg L⁻¹.</li>
    <li><strong>Soil Pollution Index (SPI)** – integrates contamination factor, geo‑accumulation index, and potential ecological risk.</li>
  </ul>
  <p>Remote sensing, GIS, and real‑time sensor networks enhance spatial and temporal resolution of pollution data.</p>

  <h4>Case Studies</h4>
  <p>Illustrative examples help connect theory to practice:</p>
  <ol>
    <li><strong>[[Ganga Action Plan]] (1986)** – aimed at reducing pollution load in the Ganges through sewage treatment, industrial effluent control, and river‑front development.</li>
    <li><strong>Delhi’s Odd‑Even Scheme (2016)** – traffic‑rationing measure to curb PM₂.₅ and NOₓ levels; demonstrated short‑term AQI improvements.</li>
    <li><strong>[[Exxon Valdez oil spill]] (1989)** – released ~11 million gallons of crude oil in Prince William Sound; highlighted need for rapid response and shoreline cleaning techniques.</li>
    <li><strong>Love Canal (USA, 1970s)** – residential area built over a chemical waste dump; led to the Superfund legislation for hazardous site cleanup.</li>
    <li><strong>Arsenic contamination in Bengal Basin** – geogenic arsenic in groundwater affects millions; mitigation includes arsenic‑removal filters and alternative water sources.</li>
  </ol>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The <strong>[[Montreal Protocol]]</strong> is credited with preventing up to 2 million skin cancer cases annually by 2030.</li>
      <li>Biochemical Oxygen Demand (BOD) of pure water is <em>approximately</em> 0 mg L⁻¹; values > 5 mg L⁻¹ indicate polluted water.</li>
      <li>Particulate matter <strong>PM₂.₅</strong> penetrates deep into lungs and is linked to increased mortality from cardiovascular diseases.</li>
      <li>The <strong>[[Bhopal gas tragedy]]</strong> (December 2‑3, 1984) involved the release of about 40 tonnes of methyl isocyanate (MIC).</li>
      <li>Lead was phased out from petrol in India by <strong>April 2000</strong> under the <strong>[[Auto Fuel Policy]]</strong>.</li>
      <li>The <strong>[[National Clean Air Programme (NCAP)]]</strong> launched in 2019 targets a 20‑30 % reduction in PM₂.₅ and PM₁₀ by 2024.</li>
      <li>Ozone depletion potential (ODP) of CFC‑11 is defined as 1.0; HCFC‑22 has an ODP of 0.055.</li>
      <li>The <strong>[[Stockholm Convention]]</strong> initially listed 12 POPs, later expanded to include chemicals like PFOS.</li>
    </ul>
  </div>
</div>
`;

