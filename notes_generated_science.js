window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};

// PHYSICS
window.EXPANDED_NOTES_DATA["reflection-refraction"] = String.raw`
<h1>Light: Reflection & Refraction</h1>
<hr />
<h2>Reflection of Light</h2>
<p>Bouncing back of light in the same medium. Follows the laws of reflection (Angle of Incidence $i$ = Angle of Reflection $r$).</p>
<ul>
  <li><strong>Plane Mirror:</strong> Virtual, erect, laterally inverted, same size, formed at the same distance behind the mirror.</li>
  <li><strong>Concave Mirror (Converging):</strong> Forms real and inverted images mostly. Used by dentists, in vehicle headlights, and shaving mirrors.</li>
  <li><strong>Convex Mirror (Diverging):</strong> Always forms virtual, erect, and diminished images. Used as rear-view mirrors in vehicles.</li>
</ul>

<h2>Refraction of Light</h2>
<p>Bending of light when it passes from one medium to another due to a change in speed.</p>
<ul>
  <li>When travelling from a <em>rarer</em> to a <em>denser</em> medium (e.g., air to water), light bends <strong>towards</strong> the normal.</li>
  <li>When travelling from a <em>denser</em> to a <em>rarer</em> medium, light bends <strong>away from</strong> the normal.</li>
</ul>
<div style="background-color:rgba(255, 193, 7, 0.15); padding:15px; border-left:5px solid #ffc107; margin:15px 0;">
  <strong>🔥 High-Yield Fact:</strong> The twinkling of stars, the apparent shift in the position of the sun at sunrise/sunset, and a pencil looking bent in water are all examples of <strong>Atmospheric Refraction</strong>.
</div>

<h2>Total Internal Reflection (TIR)</h2>
<p>Occurs when light travels from a denser to a rarer medium and the angle of incidence is greater than the critical angle. Examples: Mirage, optical fibres, and the brilliance of diamonds.</p>
`;

window.EXPANDED_NOTES_DATA["newtons-laws"] = String.raw`
<h1>Newton's Laws of Motion & Gravitation</h1>
<hr />
<h2>Newton's Three Laws</h2>
<ol>
  <li><strong>First Law (Law of Inertia):</strong> An object remains at rest or in uniform motion unless acted upon by a net external force. (e.g., Passengers falling forward when a bus suddenly stops).</li>
  <li><strong>Second Law:</strong> The rate of change of momentum is directly proportional to the applied force. $F = ma$.</li>
  <li><strong>Third Law:</strong> For every action, there is an equal and opposite reaction. (e.g., recoil of a gun, rocket propulsion).</li>
</ol>

<div style="background-color:#e2e3e5; padding:15px; border-left:5px solid #6c757d; margin:15px 0;">
  <strong>⚡ PYQ Insight:</strong> (NDA 2019) "Which conservation principle explains rocket propulsion?" Answer: <strong>Conservation of Linear Momentum</strong> (derived from the Third Law).
</div>

<h2>Universal Law of Gravitation</h2>
<p>Every mass attracts every other mass with a force: $F = G \frac{m_1 m_2}{r^2}$</p>
<p><strong>Acceleration due to gravity ($g$):</strong> Maximum at the poles and minimum at the equator. It decreases as we go up (altitude) or down (depth) from the Earth's surface. At the center of the Earth, $g = 0$.</p>
`;

window.EXPANDED_NOTES_DATA["syl-exercises"] = String.raw`
<h1>General Physics Exercises</h1>
<hr />
<p>This module focuses on solving numericals related to equations of motion and work-energy theorem.</p>
<ul>
  <li>$v = u + at$</li>
  <li>$s = ut + \frac{1}{2}at^2$</li>
  <li>$v^2 = u^2 + 2as$</li>
</ul>
<p><strong>Work done</strong> $W = F \cdot s \cos(\theta)$. Work is zero if force and displacement are perpendicular (e.g., a porter carrying a load on his head and walking horizontally).</p>
`;

window.EXPANDED_NOTES_DATA["physics-sound"] = String.raw`
<h1>Sound Waves</h1>
<hr />
<h2>Nature of Sound</h2>
<p>Sound is a <strong>longitudinal mechanical wave</strong>. It requires a material medium to propagate (cannot travel in a vacuum). Sound travels fastest in solids, then liquids, and slowest in gases.</p>

<div style="background-color:rgba(220, 53, 69, 0.15); padding:15px; border-left:5px solid #dc3545; margin:15px 0;">
  <strong>⚠️ Trap Alert:</strong> The speed of sound is <em>independent</em> of the pressure of the gas. However, it increases with an increase in temperature and humidity.
</div>

<h2>Characteristics</h2>
<ul>
  <li><strong>Pitch:</strong> Depends on <em>Frequency</em>. High frequency = High pitch (shrill sound).</li>
  <li><strong>Loudness:</strong> Depends on <em>Amplitude</em>. Measured in Decibels (dB).</li>
  <li><strong>Quality (Timbre):</strong> Allows us to distinguish between two sounds of the same pitch and loudness.</li>
</ul>

<h2>Echo & Reverberation</h2>
<p>For a distinct echo to be heard, the time interval between the original sound and the reflected one must be at least <strong>0.1 seconds</strong>. Hence, the minimum distance from the obstacle must be ~17.2 meters (at room temp).</p>
`;

window.EXPANDED_NOTES_DATA["physics-em-waves"] = String.raw`
<h1>Electromagnetic (EM) Waves</h1>
<hr />
<h2>The EM Spectrum</h2>
<p>EM waves do not require a medium to travel. They are transverse waves and travel at the speed of light ($3 \times 10^8$ m/s) in a vacuum.</p>

<div style="background-color:#e3f2fd; padding:15px; border-left:5px solid #2196f3; margin:15px 0;">
  <strong>🧠 Mnemonic for EM Spectrum (Increasing Frequency / Decreasing Wavelength):</strong><br>
  <strong>R</strong>adio <strong>M</strong>ice <strong>I</strong>nvestigate <strong>V</strong>enus <strong>U</strong>sing <strong>X</strong>-ray <strong>G</strong>lasses.<br>
  (Radio, Microwave, Infrared, Visible, Ultraviolet, X-ray, Gamma ray)
</div>

<ul>
  <li><strong>Radio Waves:</strong> Used in TV, radio broadcasting.</li>
  <li><strong>Microwaves:</strong> Used in RADAR, satellite communication, and microwave ovens.</li>
  <li><strong>Infrared (IR):</strong> Used in night vision goggles, TV remotes, thermal imaging.</li>
  <li><strong>Ultraviolet (UV):</strong> Used in water purifiers, forged document detection. Causes tanning/sunburn.</li>
  <li><strong>X-rays:</strong> Used in medical imaging, studying crystal structures.</li>
  <li><strong>Gamma Rays:</strong> Highest frequency and energy. Used in cancer treatment (radiotherapy).</li>
</ul>
`;

window.EXPANDED_NOTES_DATA["physics-heat"] = String.raw`
<h1>Heat and Thermodynamics</h1>
<hr />
<h2>Modes of Heat Transfer</h2>
<ul>
  <li><strong>Conduction:</strong> Transfer in solids through molecular collisions without actual movement of matter.</li>
  <li><strong>Convection:</strong> Transfer in fluids (liquids/gases) via the actual bulk movement of heated molecules. Causes land and sea breezes.</li>
  <li><strong>Radiation:</strong> Transfer of heat in the form of EM waves (infrared). Does not require any medium. Heat from the sun reaches Earth via radiation.</li>
</ul>

<h2>Specific Heat & Latent Heat</h2>
<p><strong>Specific Heat Capacity ($c$):</strong> Amount of heat required to raise the temperature of 1 kg of a substance by 1°C. Water has a very high specific heat, making it an excellent coolant.</p>
<p><strong>Latent Heat:</strong> Heat required to change the state of a substance at a constant temperature. Latent heat of vaporization of water (steam) is very high, which is why steam causes more severe burns than boiling water.</p>

<div style="background-color:rgba(255, 193, 7, 0.15); padding:15px; border-left:5px solid #ffc107; margin:15px 0;">
  <strong>🔥 High-Yield Fact:</strong> The normal temperature of the human body is <strong>37°C</strong> or <strong>98.6°F</strong> or <strong>310 K</strong>.
</div>
`;

window.EXPANDED_NOTES_DATA["physics-electricity-magnetism"] = String.raw`
<h1>Electricity & Magnetism</h1>
<hr />
<h2>Ohm's Law & Resistance</h2>
<p>At a constant temperature, current ($I$) flowing through a conductor is directly proportional to the potential difference ($V$). $V = IR$.</p>
<p>Resistance ($R = \rho \frac{l}{A}$): Depends on length (direct), area of cross-section (inverse), and nature of material. Temperature increase raises resistance in conductors but lowers it in semiconductors.</p>

<h2>Electric Power & Energy</h2>
<p>$P = VI = I^2 R = \frac{V^2}{R}$. Commercial unit of electrical energy is 1 kWh (1 Unit) = $3.6 \times 10^6$ Joules.</p>

<h2>Magnetism</h2>
<ul>
  <li><strong>Right-Hand Thumb Rule:</strong> Gives the direction of magnetic field around a current-carrying conductor.</li>
  <li><strong>Fleming's Left-Hand Rule:</strong> Used for Electric Motors (Force direction).</li>
  <li><strong>Fleming's Right-Hand Rule:</strong> Used for Electric Generators (Induced current direction).</li>
</ul>
`;

window.EXPANDED_NOTES_DATA["physics-nuclear-basics"] = String.raw`
<h1>Nuclear Physics & Radioactivity</h1>
<hr />
<h2>Radioactivity</h2>
<p>Discovered by Henri Becquerel. It is the spontaneous emission of radiation from an unstable nucleus.</p>
<ul>
  <li><strong>Alpha ($\alpha$) Particles:</strong> Helium nuclei ($^4_2\text{He}$). Low penetration, high ionization.</li>
  <li><strong>Beta ($\beta$) Particles:</strong> Fast-moving electrons. Medium penetration.</li>
  <li><strong>Gamma ($\gamma$) Rays:</strong> High-energy EM photons. Extremely high penetration power, low ionization.</li>
</ul>

<h2>Nuclear Reactions</h2>
<ul>
  <li><strong>Nuclear Fission:</strong> Splitting of a heavy nucleus (U-235) into smaller nuclei. Principle behind Nuclear Reactors (controlled) and Atom Bombs (uncontrolled).</li>
  <li><strong>Nuclear Fusion:</strong> Combining of lighter nuclei (Hydrogen) to form a heavier nucleus (Helium). Powers the Sun and stars. Principle behind the Hydrogen Bomb. Requires extremely high temperature and pressure.</li>
</ul>
<div style="background-color:#e2e3e5; padding:15px; border-left:5px solid #6c757d; margin:15px 0;">
  <strong>⚡ PYQ Insight:</strong> (AFCAT 2021) "Which is cleaner and produces more energy per unit mass: Fission or Fusion?" Answer: <strong>Nuclear Fusion</strong>.
</div>
`;

window.EXPANDED_NOTES_DATA["physics-pyq-trends-topic"] = String.raw`
<h1>Physics PYQ Micro-Trends</h1>
<hr />
<ul>
  <li><strong>Myopia vs. Hypermetropia:</strong> Myopia (Nearsightedness, fixed by Concave lens). Hypermetropia (Farsightedness, fixed by Convex lens).</li>
  <li><strong>Doppler Effect:</strong> The apparent change in frequency of sound/light due to relative motion between source and observer. (e.g., siren pitch dropping as an ambulance passes).</li>
  <li><strong>Archimedes' Principle & Buoyancy:</strong> A body immersed in a fluid experiences an upward thrust equal to the weight of the fluid displaced. Used in designing ships and submarines.</li>
</ul>
`;

// CHEMISTRY
window.EXPANDED_NOTES_DATA["metals-alloys"] = String.raw`
<h1>Metals, Non-Metals & Alloys</h1>
<hr />
<h2>Properties</h2>
<p><strong>Metals:</strong> Malleable, ductile, good conductors of heat/electricity. (Exceptions: Mercury is liquid; Sodium/Potassium are soft and cut with a knife; Lead/Mercury are poor conductors of heat).</p>
<p><strong>Non-Metals:</strong> Generally insulators. (Exceptions: Graphite is a good conductor; Diamond is the hardest natural substance and a good conductor of heat).</p>

<h2>Important Alloys</h2>
<table border="1" style="width:100%; border-collapse: collapse; text-align: left;">
  <tr>
    <th style="padding: 8px;">Alloy</th>
    <th style="padding: 8px;">Composition</th>
    <th style="padding: 8px;">Uses</th>
  </tr>
  <tr>
    <td style="padding: 8px;">Brass</td>
    <td style="padding: 8px;">Copper (Cu) + Zinc (Zn)</td>
    <td style="padding: 8px;">Utensils, ornaments</td>
  </tr>
  <tr>
    <td style="padding: 8px;">Bronze</td>
    <td style="padding: 8px;">Copper (Cu) + Tin (Sn)</td>
    <td style="padding: 8px;">Statues, medals, coins</td>
  </tr>
  <tr>
    <td style="padding: 8px;">Solder</td>
    <td style="padding: 8px;">Lead (Pb) + Tin (Sn)</td>
    <td style="padding: 8px;">Soldering electrical wires (low melting point)</td>
  </tr>
  <tr>
    <td style="padding: 8px;">Stainless Steel</td>
    <td style="padding: 8px;">Fe + Cr + Ni + C</td>
    <td style="padding: 8px;">Surgical instruments, cutlery</td>
  </tr>
</table>

<div style="background-color:rgba(255, 193, 7, 0.15); padding:15px; border-left:5px solid #ffc107; margin:15px 0;">
  <strong>🔥 High-Yield Fact:</strong> An <strong>Amalgam</strong> is an alloy that essentially contains <strong>Mercury (Hg)</strong> as one of its components. (e.g., Dental amalgam).
</div>
`;

window.EXPANDED_NOTES_DATA["reactivity-series"] = String.raw`
<h1>The Reactivity Series of Metals</h1>
<hr />
<p>A list of metals arranged in the order of their decreasing chemical reactivity.</p>
<ol>
  <li>Potassium (K) - Most reactive</li>
  <li>Sodium (Na)</li>
  <li>Calcium (Ca)</li>
  <li>Magnesium (Mg)</li>
  <li>Aluminium (Al)</li>
  <li>Zinc (Zn)</li>
  <li>Iron (Fe)</li>
  <li>Lead (Pb)</li>
  <li><strong>Hydrogen (H) - Non-metal used as reference</strong></li>
  <li>Copper (Cu)</li>
  <li>Mercury (Hg)</li>
  <li>Silver (Ag)</li>
  <li>Gold (Au) - Least reactive</li>
</ol>

<div style="background-color:rgba(220, 53, 69, 0.15); padding:15px; border-left:5px solid #dc3545; margin:15px 0;">
  <strong>⚠️ Trap Alert:</strong> A more reactive metal can displace a less reactive metal from its salt solution (Displacement Reaction). For example, Iron will displace Copper from Copper Sulphate ($Fe + CuSO_4 \rightarrow FeSO_4 + Cu$), but Copper cannot displace Iron.
</div>
`;

window.EXPANDED_NOTES_DATA["chemistry-numericals"] = String.raw`
<h1>Chemistry: Mole Concept & Numericals</h1>
<hr />
<h2>The Mole Concept</h2>
<p>One mole of any substance contains Avogadro's number ($6.022 \times 10^{23}$) of particles (atoms, molecules, or ions). It is equal to the atomic or molecular mass of the substance in grams.</p>
<ul>
  <li>$\text{Number of Moles} (n) = \frac{\text{Given Mass} (m)}{\text{Molar Mass} (M)}$</li>
  <li>At STP, 1 mole of any ideal gas occupies <strong>22.4 Liters</strong>.</li>
</ul>

<h2>Valency and Chemical Formulas</h2>
<p>Valency is the combining capacity of an element. Cross-multiplying valencies yields the chemical formula (e.g., $Al^{3+}$ and $O^{2-}$ gives $Al_2O_3$).</p>
`;

window.EXPANDED_NOTES_DATA["chemistry-everyday-fertilisers"] = String.raw`
<h1>Chemistry in Everyday Life & Fertilizers</h1>
<hr />
<h2>Common Compounds and their Names</h2>
<ul>
  <li><strong>Baking Soda:</strong> Sodium Bicarbonate ($NaHCO_3$). Used in baking, as an antacid, and in fire extinguishers.</li>
  <li><strong>Washing Soda:</strong> Sodium Carbonate Decahydrate ($Na_2CO_3 \cdot 10H_2O$). Used to remove permanent hardness of water.</li>
  <li><strong>Bleaching Powder:</strong> Calcium Oxychloride ($CaOCl_2$). Used for disinfecting drinking water.</li>
  <li><strong>Plaster of Paris (PoP):</strong> Calcium Sulphate Hemihydrate ($CaSO_4 \cdot \frac{1}{2}H_2O$). Formed by heating Gypsum. Used for setting fractured bones.</li>
</ul>

<h2>Fertilizers</h2>
<p>Essential primary nutrients for plants are <strong>N-P-K</strong> (Nitrogen, Phosphorus, Potassium).</p>
<ul>
  <li><strong>Urea:</strong> The most widely used nitrogenous fertilizer. Contains ~46% Nitrogen. It is highly soluble in water.</li>
</ul>
<div style="background-color:#e2e3e5; padding:15px; border-left:5px solid #6c757d; margin:15px 0;">
  <strong>⚡ PYQ Insight:</strong> (NDA 2018) "Which gas is used in the manufacture of Vanaspati Ghee?" Answer: <strong>Hydrogen</strong> (Process: Hydrogenation of unsaturated oils using Nickel catalyst).
</div>
`;

window.EXPANDED_NOTES_DATA["environmental-chemistry"] = String.raw`
<h1>Environmental Chemistry</h1>
<hr />
<h2>Greenhouse Effect & Global Warming</h2>
<p>The trapping of infrared radiation by certain atmospheric gases. Primary greenhouse gases: <strong>Water Vapour (highest contribution), $CO_2$, Methane ($CH_4$), Nitrous Oxide ($N_2O$), CFCs</strong>.</p>

<h2>Acid Rain</h2>
<p>Caused by emissions of <strong>Sulfur Dioxide ($SO_2$)</strong> and <strong>Nitrogen Oxides ($NO_x$)</strong>, which react with water vapor to form Sulfuric Acid ($H_2SO_4$) and Nitric Acid ($HNO_3$). Damages marble (e.g., Taj Mahal) by reacting with calcium carbonate.</p>

<h2>Ozone Layer Depletion</h2>
<p>Ozone ($O_3$) in the stratosphere protects from UV rays. Chlorofluorocarbons (CFCs) release Chlorine atoms, which catalytically destroy ozone molecules. The <strong>Montreal Protocol (1987)</strong> phased out CFCs.</p>
`;

// BIOLOGY
window.EXPANDED_NOTES_DATA["cell-structure"] = String.raw`
<h1>Cell: The Unit of Life</h1>
<hr />
<h2>Key Organelles and Functions</h2>
<ul>
  <li><strong>Mitochondria:</strong> "Powerhouse of the cell". Site of aerobic respiration and ATP synthesis. Has its own circular DNA and ribosomes.</li>
  <li><strong>Chloroplasts:</strong> Found only in plant cells. Site of photosynthesis. Has its own DNA.</li>
  <li><strong>Ribosomes:</strong> "Protein factories". Non-membrane bound. Found in both prokaryotes and eukaryotes.</li>
  <li><strong>Lysosomes:</strong> "Suicide bags". Contain hydrolytic enzymes for intracellular digestion.</li>
  <li><strong>Endoplasmic Reticulum (ER):</strong> RER (has ribosomes, protein synthesis) and SER (lipid synthesis, detoxification).</li>
  <li><strong>Golgi Apparatus:</strong> Packaging and dispatching unit of the cell.</li>
</ul>

<div style="background-color:rgba(255, 193, 7, 0.15); padding:15px; border-left:5px solid #ffc107; margin:15px 0;">
  <strong>🔥 High-Yield Fact:</strong> <strong>Plant cells</strong> have a rigid Cell Wall (made of cellulose) and large central vacuoles, which are absent or very small in animal cells. Animal cells have centrioles (used in cell division) which are absent in higher plants.
</div>
`;

window.EXPANDED_NOTES_DATA["human-systems"] = String.raw`
<h1>Human Physiology: Major Systems</h1>
<hr />
<h2>Digestive System</h2>
<ul>
  <li><strong>Stomach:</strong> Secretes HCl (kills bacteria, provides acidic medium) and Pepsin (protein digestion).</li>
  <li><strong>Liver:</strong> Largest gland. Secretes Bile (stored in Gall Bladder) which helps in emulsification of fats.</li>
  <li><strong>Small Intestine:</strong> Site of complete digestion and absorption. Has finger-like projections called villi to increase surface area.</li>
</ul>

<h2>Circulatory System</h2>
<p>The human heart is 4-chambered. Arteries carry oxygenated blood away from the heart (Exception: Pulmonary Artery). Veins carry deoxygenated blood to the heart (Exception: Pulmonary Vein). Red Blood Cells (RBCs) contain hemoglobin (carries oxygen).</p>

<h2>Endocrine System (Hormones)</h2>
<ul>
  <li><strong>Pituitary Gland:</strong> Master gland (Growth hormone).</li>
  <li><strong>Thyroid Gland:</strong> Secretes Thyroxine (regulates metabolism). Requires Iodine.</li>
  <li><strong>Pancreas:</strong> Mixed gland. Secretes <strong>Insulin</strong> (lowers blood sugar) and Glucagon (raises blood sugar).</li>
  <li><strong>Adrenal Gland:</strong> Secretes Adrenaline (fight or flight hormone).</li>
</ul>
<div style="background-color:rgba(220, 53, 69, 0.15); padding:15px; border-left:5px solid #dc3545; margin:15px 0;">
  <strong>⚠️ Trap Alert:</strong> <strong>Insulin</strong> is produced by the Beta cells of the Islets of Langerhans in the pancreas, NOT the liver. The liver stores glucose as glycogen.
</div>
`;

window.EXPANDED_NOTES_DATA["diseases"] = String.raw`
<h1>Diseases and Pathogens</h1>
<hr />
<h2>Bacterial Diseases</h2>
<p>Tuberculosis (TB), Typhoid, Cholera, Tetanus, Diphtheria, Syphilis.</p>
<h2>Viral Diseases</h2>
<p>AIDS (HIV), Rabies, Polio, Dengue, Chikungunya, Measles, Common Cold.</p>
<h2>Protozoan Diseases</h2>
<ul>
  <li><strong>Malaria:</strong> Caused by <em>Plasmodium</em>. Vector: Female Anopheles mosquito.</li>
  <li><strong>Kala-azar:</strong> Caused by <em>Leishmania</em>. Vector: Sandfly.</li>
  <li><strong>Sleeping Sickness:</strong> Caused by <em>Trypanosoma</em>. Vector: Tsetse fly.</li>
</ul>

<div style="background-color:#e3f2fd; padding:15px; border-left:5px solid #2196f3; margin:15px 0;">
  <strong>🧠 Mnemonic for Water-Borne Bacterial Diseases:</strong><br>
  <strong>T.C.</strong> stands for <strong>T</strong>yphoid and <strong>C</strong>holera. Both transmit via contaminated water/food.
</div>
`;

window.EXPANDED_NOTES_DATA["immunity-vaccines"] = String.raw`
<h1>Immunity, Blood & Vaccines</h1>
<hr />
<h2>Blood Groups</h2>
<p>Discovered by Karl Landsteiner. Based on antigens present on RBCs.</p>
<ul>
  <li><strong>Universal Donor:</strong> O Negative (O-)</li>
  <li><strong>Universal Recipient:</strong> AB Positive (AB+)</li>
</ul>

<h2>Vaccination</h2>
<p>Introduced by Edward Jenner (Smallpox vaccine). Vaccines contain weakened or killed pathogens. They stimulate the immune system to produce antibodies and generate memory B/T cells for long-term immunity (Active Artificial Immunity).</p>

<div style="background-color:#e2e3e5; padding:15px; border-left:5px solid #6c757d; margin:15px 0;">
  <strong>⚡ PYQ Insight:</strong> (CDS 2019) "White Blood Cells (WBCs) act as the police force of the body." The two main types involved in adaptive immunity are T-lymphocytes (cell-mediated) and B-lymphocytes (antibody-mediated).
</div>
`;

window.EXPANDED_NOTES_DATA["plant-kingdom"] = String.raw`
<h1>Plant Kingdom Classification</h1>
<hr />
<h2>Classification based on structure and vascular tissue</h2>
<ol>
  <li><strong>Thallophyta (Algae):</strong> No differentiated body parts (roots, stems, leaves). Predominantly aquatic.</li>
  <li><strong>Bryophyta:</strong> "Amphibians of the Plant Kingdom". Have stem/leaf-like structures but lack true vascular tissue (xylem/phloem). Require water for fertilization (e.g., Mosses).</li>
  <li><strong>Pteridophyta:</strong> First terrestrial plants to possess vascular tissues. Do not produce seeds (e.g., Ferns).</li>
  <li><strong>Gymnosperms:</strong> Produce <em>naked seeds</em> (not enclosed in fruits). Example: Pine, Cycas.</li>
  <li><strong>Angiosperms:</strong> Flowering plants. Seeds are enclosed within fruits. Divided into Monocots (parallel venation, 1 cotyledon) and Dicots (reticulate venation, 2 cotyledons).</li>
</ol>
`;

window.EXPANDED_NOTES_DATA["animal-kingdom"] = String.raw`
<h1>Animal Kingdom (Key Phyla)</h1>
<hr />
<ul>
  <li><strong>Porifera:</strong> Sponges. Pores all over body, non-motile.</li>
  <li><strong>Coelenterata (Cnidaria):</strong> Have stinging cells (nematocysts). Examples: Hydra, Jellyfish, Corals.</li>
  <li><strong>Platyhelminthes:</strong> Flatworms. Mostly parasites (Tapeworm, Planaria).</li>
  <li><strong>Annelida:</strong> Segmented worms (Earthworm, Leech).</li>
  <li><strong>Arthropoda:</strong> Largest phylum. Have jointed appendages and an exoskeleton. Examples: Insects, Spiders, Crabs.</li>
  <li><strong>Mollusca:</strong> Soft-bodied animals, often with a shell (Snail, Octopus).</li>
  <li><strong>Chordata:</strong> Possess a notochord. Includes Pisces (Fishes), Amphibians, Reptiles, Aves (Birds), and Mammals.</li>
</ul>

<div style="background-color:rgba(255, 193, 7, 0.15); padding:15px; border-left:5px solid #ffc107; margin:15px 0;">
  <strong>🔥 High-Yield Fact:</strong> Mammals and Birds are <strong>Warm-blooded</strong> (Endotherms - can regulate body temp). Fishes, Amphibians, and Reptiles are <strong>Cold-blooded</strong> (Ectotherms - body temp changes with environment).
</div>
`;

window.EXPANDED_NOTES_DATA["plant-reproduction"] = String.raw`
<h1>Plant Reproduction & Hormones</h1>
<hr />
<h2>Sexual Reproduction in Angiosperms</h2>
<p>The flower is the reproductive part.</p>
<ul>
  <li><strong>Male Part (Stamen):</strong> Consists of Anther (produces pollen grains) and Filament.</li>
  <li><strong>Female Part (Pistil/Carpel):</strong> Consists of Stigma (receives pollen), Style, and Ovary (contains ovules).</li>
</ul>
<p>After fertilization, the <strong>Ovary develops into a Fruit</strong> and the <strong>Ovule develops into a Seed</strong>.</p>

<h2>Plant Tissue</h2>
<ul>
  <li><strong>Xylem:</strong> Conducts Water and Minerals upward from roots. (Dead tissue mostly).</li>
  <li><strong>Phloem:</strong> Transports Food (sugars) bidirectionally from leaves. (Living tissue).</li>
</ul>

<h2>Plant Hormones (Phytohormones)</h2>
<ul>
  <li><strong>Auxin:</strong> Promotes cell elongation, responsible for phototropism (bending towards light).</li>
  <li><strong>Gibberellins:</strong> Stem elongation, seed germination.</li>
  <li><strong>Cytokinins:</strong> Promotes cell division.</li>
  <li><strong>Abscisic Acid (ABA):</strong> Stress hormone, inhibits growth, causes wilting of leaves.</li>
  <li><strong>Ethylene:</strong> A gaseous hormone that promotes fruit ripening.</li>
</ul>
`;

window.EXPANDED_NOTES_DATA["biology-ecology-basics"] = String.raw`
<h1>Ecology & Environment Basics</h1>
<hr />
<h2>Food Chains and Webs</h2>
<p>The flow of energy in an ecosystem is always <strong>Unidirectional</strong> (Producer -> Primary Consumer -> Secondary Consumer). According to the <strong>10% Law</strong> (Lindeman), only 10% of energy is transferred to the next trophic level; the rest is lost as heat.</p>

<h2>Biomagnification</h2>
<p>The increasing concentration of a toxic substance (like DDT, heavy metals) in the tissues of organisms at successively higher levels in a food chain. Apex predators are the most severely affected.</p>

<h2>Nitrogen Cycle</h2>
<p>Atmospheric nitrogen (N2) cannot be used directly by plants. It must be "fixed" into usable forms (ammonia, nitrates). <em>Rhizobium</em> bacteria in the root nodules of leguminous plants play a key role in biological nitrogen fixation.</p>
`;
