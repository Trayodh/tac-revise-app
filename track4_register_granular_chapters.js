/**
 * track4_register_granular_chapters.js
 *
 * Registers 69 new granular textbook chapters across 6 subjects:
 * - environment: 7 -> 18 (+11)
 * - physics: 10 -> 24 (+14)
 * - chemistry: 8 -> 20 (+12)
 * - biology: 8 -> 20 (+12)
 * - economics: 9 -> 18 (+9)
 * - polity: 17 -> 28 (+11)
 *
 * Preserves all existing 233 chapter IDs for 100% backwards compatibility.
 * Updates notes_data.js, syllabus_data.js, app.js (TOPIC_WEIGHTAGE_MAP),
 * ai_generated_notes.js, and syncs all of them to public/.
 */

const fs = require('fs');
const vm = require('vm');

const GRANULAR_CHAPTERS = {
  environment: [
    {
      id: 'env-ecology-ecosystems',
      title: 'Ecology Principles, Ecosystems, Food Chains & Trophic Pyramids',
      icon: 'fa-solid fa-seedling',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Levels of ecological organization, abiotic/biotic interactions, Lindeman 10% law, food chains (grazing vs detritus), food webs, ecological pyramids (number, biomass, energy), ecological succession (hydrarch/xerarch), carrying capacity, ecotones and edge effect.'
    },
    {
      id: 'env-biogeochemical-cycles',
      title: 'Biogeochemical Cycles (Carbon, Nitrogen, Phosphorus & Sulphur)',
      icon: 'fa-solid fa-arrows-spin',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Gaseous cycles (Water, Carbon, Nitrogen: fixation, nitrification, denitrification, Rhizobium, Azotobacter, Anabaena) and sedimentary cycles (Phosphorus, Sulphur), eutrophication, algal blooms and biological magnification.'
    },
    {
      id: 'env-terrestrial-aquatic-biomes',
      title: 'Terrestrial & Aquatic Biomes (Tundra, Taiga, Savanna, Estuaries)',
      icon: 'fa-solid fa-earth-asia',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Tundra, Taiga/Boreal, Temperate grasslands (Steppes, Prairies, Pampas, Downs, Velds), Tropical rainforests, Savanna, Desert adaptations; Aquatic ecosystems: Lentic vs Lotic, Limnetic/Profundal zones, Estuaries, Eutrophic vs Oligotrophic lakes.'
    },
    {
      id: 'env-wetlands-ramsar',
      title: 'Wetlands, Ramsar Sites of India & Montreux Record',
      icon: 'fa-solid fa-water',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Ramsar Convention 1971, criteria for Ramsar recognition, Montreux Record (Keoladeo, Loktak; Chilika removed), Wetlands (Conservation and Management) Rules 2017, Amrit Dharohar, MISHTI, complete state-wise high-yield Ramsar sites of India.'
    },
    {
      id: 'env-mangroves-coral-reefs',
      title: 'Mangrove Ecosystems, Coral Reefs & Coastal Regulation (CRZ)',
      icon: 'fa-solid fa-fish-fins',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Mangrove adaptations (pneumatophores, viviparity, salt-secreting glands), Sundarbans, Bhitarkanika, Pichavaram, MISHTI initiative; Coral reefs (zooxanthellae symbiosis, fringing, barrier, atoll), coral bleaching triggers, CRZ I-IV notification norms.'
    },
    {
      id: 'env-forests-isfr',
      title: 'Forest Conservation, Social Forestry & India State of Forest Report (ISFR)',
      icon: 'fa-solid fa-tree',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'National Forest Policy 1988 (33% goal), ISFR metrics (Very Dense, Moderately Dense, Open Forest, Tree Cover), top states by area (MP, Arunachal, Chhattisgarh) vs percentage (Lakshadweep, Mizoram), CAMPA Act, Green India Mission, Nagar Van.'
    },
    {
      id: 'env-climate-science-ghg',
      title: 'Climate Change Science, Greenhouse Gases, GWP & Ozone Depletion',
      icon: 'fa-solid fa-temperature-high',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Radiative forcing, Global Warming Potential (GWP) and atmospheric lifetime of CO2, CH4, N2O, HFCs, PFCs, SF6, NF3; Black carbon, Brown carbon, Permafrost thaw; Ozone depletion chemistry (ClO radicals, Polar Stratospheric Clouds), Dobson units, Montreal Protocol & Kigali Amendment.'
    },
    {
      id: 'env-waste-eia-rules',
      title: 'E-Waste, Plastic, Bio-Medical Waste & Solid Waste Management Rules',
      icon: 'fa-solid fa-recycle',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Extended Producer Responsibility (EPR), Plastic Waste Management Rules (single-use plastic ban, thickness thresholds), E-Waste Rules 2022, Bio-Medical Waste color-coded segregation, Fly Ash utilization, Basel/Rotterdam/Stockholm Conventions.'
    },
    {
      id: 'env-disaster-management',
      title: 'Disaster Management in India, NDMA Framework & Sendai Targets',
      icon: 'fa-solid fa-house-tsunami',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Disaster Management Act 2005, NDMA (PM Chair), SDMA, DDMA, NDRF, NIDM; Seismic Zones II-V of India, INCOIS tsunami warning, Cyclone naming & color-coded IMD alerts, GLOFs, Landslide hazard zonation, Sendai Framework 2015-2030.'
    },
    {
      id: 'env-sustainable-sdgs',
      title: 'Sustainable Development Goals (SDGs), Circular Economy & Carbon Markets',
      icon: 'fa-solid fa-leaf',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Brundtland Report 1987, Agenda 21, 17 UN SDGs (2015-2030), NITI Aayog SDG India Index, Carbon Credit Trading Scheme (CCTS), Green Credit Programme, Mission LiFE, Panchamrit pledges (Net Zero 2070), ESG & Sovereign Green Bonds.'
    },
    {
      id: 'env-movements-organizations',
      title: 'Environmental Movements in India & Global Conservation Bodies (IUCN, UNEP, WWF)',
      icon: 'fa-solid fa-users-rays',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Bishnoi movement, Chipko (Sundarlal Bahuguna, Gaura Devi), Appiko, Silent Valley, Narmada Bachao, Tehri, Jungle Bachao; Global bodies: IUCN, UNEP, WWF, BirdLife International, TRAFFIC, CITES, CMS Bonn Convention, IPCC, GEF, Green Climate Fund.'
    }
  ],

  physics: [
    {
      id: 'physics-kinematics-projectiles',
      title: 'Kinematics, Vectors, Projectile & Uniform Circular Motion',
      icon: 'fa-solid fa-rocket',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Scalar vs vector quantities, dot and cross products, equations of uniformly accelerated motion, motion under gravity, relative velocity, projectile range/height/time of flight, complementary angles (theta and 90-theta), uniform circular motion & centripetal acceleration.'
    },
    {
      id: 'physics-friction-dynamics',
      title: 'Friction, Banking of Roads, Pseudo Forces & Equilibrium',
      icon: 'fa-solid fa-gears',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Static, limiting and kinetic friction, rolling vs sliding friction, angle of friction and angle of repose, banking of curved roads (with/without friction), apparent weight in lifts, inertial vs non-inertial frames, Lami theorem & equilibrium.'
    },
    {
      id: 'physics-rotational-motion',
      title: 'Rotational Motion, Torque, Angular Momentum & Moment of Inertia',
      icon: 'fa-solid fa-circle-notch',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Centre of mass, torque (tau = r x F), angular momentum conservation (ice skater, planetary motion), Moment of Inertia formulas (ring, disc, rod, solid/hollow sphere), parallel & perpendicular axis theorems, rolling without slipping on inclined planes.'
    },
    {
      id: 'physics-gravitation-satellites',
      title: 'Gravitation, Escape Velocity, Kepler\'s Laws & Satellites',
      icon: 'fa-solid fa-earth-americas',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Newton universal law of gravitation, variation of g with altitude, depth, latitude and Earth rotation, gravitational potential & field, Kepler three laws, orbital velocity, escape velocity (11.2 km/s), geostationary vs polar sun-synchronous satellites, weightlessness.'
    },
    {
      id: 'physics-properties-matter',
      title: 'Elasticity, Pascal\'s Law, Archimedes\' Principle, Viscosity & Surface Tension',
      icon: 'fa-solid fa-droplet',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Hooke law, Young/Bulk/Shear moduli, Poisson ratio, hydrostatic pressure, Pascal law, Archimedes buoyancy & floating laws, Bernoulli theorem & Venturimeter/aerofoil, Stokes law & terminal velocity, surface tension, capillarity, angle of contact.'
    },
    {
      id: 'physics-thermodynamics-ktg',
      title: 'Laws of Thermodynamics, Carnot Engine, Entropy & Kinetic Theory of Gases',
      icon: 'fa-solid fa-fire-flame-curved',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Zeroth, First, Second & Third laws of thermodynamics; Isothermal, Adiabatic, Isobaric, Isochoric processes; Cp - Cv = R, Mayer relation, Carnot cycle efficiency (1 - T2/T1), Refrigerator COP, Kinetic Theory of Gases (v_rms, degrees of freedom, equipartition).'
    },
    {
      id: 'physics-shm-waves',
      title: 'Simple Harmonic Motion (SHM), Pendulums, Resonance & Mechanical Waves',
      icon: 'fa-solid fa-wave-square',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'SHM equations, phase, kinetic & potential energy in SHM, simple pendulum (lift, satellite, summer/winter effects), spring combinations (series/parallel), damped & forced oscillations, resonance, transverse vs longitudinal waves, standing waves in strings & organ pipes.'
    },
    {
      id: 'physics-optical-instruments',
      title: 'Optical Instruments, Human Eye Defects, Dispersion & Scattering',
      icon: 'fa-solid fa-eye',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Human eye anatomy & accommodation, Myopia (concave), Hypermetropia (convex), Presbyopia (bifocal), Astigmatism (cylindrical); Simple & Compound Microscopes, Astronomical Telescopes, Prism dispersion, Rainbow formation, Rayleigh scattering (blue sky, red sunset), Tyndall effect.'
    },
    {
      id: 'physics-wave-optics',
      title: 'Wave Optics: Interference, Diffraction, Polarisation & Huygens\' Principle',
      icon: 'fa-solid fa-lightbulb',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Huygens wave theory, coherent sources, Young Double Slit Experiment (YDSE) fringe width & path difference, thin film interference (soap bubble colors), single-slit diffraction, resolving power, Malus law, Brewster angle & polarisation (transverse nature proof).'
    },
    {
      id: 'physics-electrostatics-capacitors',
      title: 'Electrostatics, Coulomb\'s Law, Electric Field, Potential & Capacitors',
      icon: 'fa-solid fa-bolt',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Quantization & conservation of charge, Coulomb law, dielectric constant, electric field lines, electric dipole, Gauss law applications, equipotential surfaces, parallel plate capacitor, dielectrics, series & parallel capacitor combinations, energy stored.'
    },
    {
      id: 'physics-current-circuits',
      title: 'Current Electricity, Ohm\'s Law, Kirchhoff\'s Laws, Potentiometer & Bridges',
      icon: 'fa-solid fa-plug-circle-bolt',
      weightage: '5 Qs (~4.2 Marks)',
      desc: 'Drift velocity, Ohm law, ohmic vs non-ohmic conductors, resistivity & temperature coefficient, color code of resistors, series/parallel combinations, EMF vs terminal potential, Kirchhoff KCL/KVL, Wheatstone bridge, Meter bridge, Potentiometer, Joule heating & kWh.'
    },
    {
      id: 'physics-emi-ac',
      title: 'Electromagnetic Induction (EMI), Faraday\'s & Lenz\'s Laws, Transformers & AC Circuits',
      icon: 'fa-solid fa-magnet',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Magnetic flux, Faraday laws of EMI, Lenz law (energy conservation), motional EMF, eddy currents, self & mutual inductance, AC generator, RMS vs peak values, LCR series circuit impedance & resonance, power factor, step-up/step-down transformers & losses.'
    },
    {
      id: 'physics-modern-photoelectric',
      title: 'Dual Nature of Radiation, Photoelectric Effect & Atomic Spectra (Bohr Model)',
      icon: 'fa-solid fa-atom',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Photon energy (E = h*nu), Einstein photoelectric equation, work function, threshold frequency, stopping potential, de Broglie matter waves (lambda = h/mv), Davisson-Germer experiment, Rutherford & Bohr atomic models, Hydrogen spectral series (Lyman, Balmer, Paschen), X-rays.'
    },
    {
      id: 'physics-semiconductors-logic',
      title: 'Semiconductors, p-n Junction Diodes, Zener, Transistors & Logic Gates',
      icon: 'fa-solid fa-microchip',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Energy bands in conductors, insulators & semiconductors; Intrinsic vs Extrinsic (n-type pentavalent, p-type trivalent), p-n junction diode (forward/reverse bias), half-wave & full-wave rectifiers, Zener diode voltage regulator, LED, photodiode, solar cell, AND/OR/NOT/NAND/NOR/XOR logic gates.'
    }
  ],

  chemistry: [
    {
      id: 'chem-matter-separation',
      title: 'Classification of Matter, Mixtures, Separation Techniques & Colloids',
      icon: 'fa-solid fa-vial',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Pure substances vs mixtures, homogeneous vs heterogeneous, true solutions vs suspensions vs colloids (Tyndall effect, Brownian motion, dialysis, emulsions), separation methods (distillation, fractional distillation, chromatography, centrifugation, sublimation, separating funnel), physical vs chemical changes.'
    },
    {
      id: 'chem-gas-laws-states',
      title: 'States of Matter, Gas Laws (Boyle, Charles, Ideal Gas) & Graham\'s Diffusion',
      icon: 'fa-solid fa-wind',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Intermolecular forces, Boyle law, Charles law, Gay-Lussac law, Avogadro law, Ideal Gas Equation (PV=nRT), Dalton law of partial pressures, Graham law of diffusion/effusion, Real gases & van der Waals equation, Liquefaction of gases & critical temperature, Plasma & BEC.'
    },
    {
      id: 'chem-atomic-quantum',
      title: 'Atomic Structure, Subatomic Particles, Quantum Numbers & Aufbau Principle',
      icon: 'fa-solid fa-atom',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Dalton, Thomson, Rutherford & Bohr models, discovery of electron/proton/neutron, Isotopes, Isobars, Isotones, Isoelectronic species, Quantum numbers (n, l, m, s), shapes of s/p/d orbitals, Aufbau principle, Pauli exclusion principle, Hund rule of maximum multiplicity.'
    },
    {
      id: 'chem-periodic-trends',
      title: 'Modern Periodic Table & Trends (Ionization Enthalpy, Electronegativity, Radius)',
      icon: 'fa-solid fa-table-cells',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Dobereiner triads, Newlands octaves, Mendeleev periodic law, Moseley Modern Periodic Law, s/p/d/f blocks, diagonal relationships (Li-Mg, Be-Al), periodic trends across periods & down groups: atomic/ionic radii, ionization enthalpy, electron gain enthalpy, electronegativity, valency.'
    },
    {
      id: 'chem-thermodynamics-energetics',
      title: 'Chemical Thermodynamics, Enthalpy, Hess\'s Law & Gibbs Free Energy',
      icon: 'fa-solid fa-fire',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Open, closed & isolated systems, state vs path functions, extensive vs intensive properties, First Law (dU = q + w), Enthalpy (dH), Endothermic vs Exothermic, Hess law of constant heat summation, Entropy (dS), Gibbs free energy (dG = dH - TdS) & spontaneity criteria.'
    },
    {
      id: 'chem-equilibrium-kinetics',
      title: 'Chemical & Ionic Equilibrium, Le Chatelier\'s Principle & Reaction Kinetics',
      icon: 'fa-solid fa-scale-balanced',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Law of mass action, Kp vs Kc relation, Le Chatelier principle (Haber & Contact processes), Arrhenius/Bronsted-Lowry/Lewis acids & bases, Ostwald dilution law, buffer solutions, solubility product (Ksp), rate of reaction, order vs molecularity, zero & first order half-life, catalysts & Arrhenius equation.'
    },
    {
      id: 'chem-redox-electrochemistry',
      title: 'Redox Reactions, Oxidation Numbers, Galvanic Cells, Electrolysis & Batteries',
      icon: 'fa-solid fa-car-battery',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Oxidation vs reduction, oxidizing & reducing agents, disproportionation reactions, standard electrode potential, Nernst equation, Galvanic/Daniell cell, Faraday laws of electrolysis, Primary vs Secondary batteries (dry cell, lead-acid, Li-ion), fuel cells & rusting electrochemistry.'
    },
    {
      id: 'chem-solutions-colligative',
      title: 'Solutions, Solubility, Henry\'s & Raoult\'s Law & Colligative Properties',
      icon: 'fa-solid fa-flask',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Molarity, molality, normality, mole fraction, ppm; Henry law (scuba divers bends, carbonated drinks), Raoult law, ideal vs non-ideal solutions & azeotropes, Colligative properties (relative lowering of vapour pressure, boiling point elevation, freezing point depression, osmotic pressure & reverse osmosis), van t Hoff factor.'
    },
    {
      id: 'chem-hydrogen-s-block',
      title: 'Hydrogen, Water Hardness, Heavy Water & s-Block Elements (Alkali & Alkaline Earth)',
      icon: 'fa-solid fa-droplet',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Isotopes of hydrogen (Protium, Deuterium, Tritium), temporary vs permanent hardness of water (Clark, Calgon, Permutit/Zeolite methods), Heavy water (D2O), Hydrogen peroxide (H2O2); Group 1 Alkali metals & Group 2 Alkaline Earth metals, plaster of Paris, gypsum, washing/baking soda, bleaching powder.'
    },
    {
      id: 'chem-p-d-block-coordination',
      title: 'p-Block (Groups 13-18), d-Block Transition Metals & Coordination Compounds',
      icon: 'fa-solid fa-cubes',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Group 13-18 highlights: Borax, Silicones, Allotropes of P/S, Haber ammonia, Ostwald nitric acid, Contact sulphuric acid, Interhalogens, Noble gases (Xe compounds); d & f-block properties (variable valency, colored ions, lanthanoid contraction, KMnO4, K2Cr2O7); Werner theory, ligands & coordination complexes (chlorophyll, haemoglobin, vitamin B12).'
    },
    {
      id: 'chem-hydrocarbons-functional',
      title: 'Hydrocarbons (Alkanes, Alkenes, Alkynes, Benzene), Isomerism & Functional Groups',
      icon: 'fa-solid fa-hexagon',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'IUPAC nomenclature, structural & stereoisomerism, inductive/resonance/hyperconjugation effects, Alkanes (combustion, substitution), Alkenes (Markovnikov rule, Bayer test, ozonolysis), Alkynes (acidic character), Aromaticity (Huckel 4n+2 rule), Alcohols, Aldehydes, Ketones, Carboxylic acids & Esters.'
    },
    {
      id: 'chem-biomolecules-polymers',
      title: 'Biomolecules (Carbohydrates, Proteins, Vitamins, Nucleic Acids) & Polymers',
      icon: 'fa-solid fa-dna',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Monosaccharides, disaccharides, polysaccharides (starch, cellulose, glycogen); Amino acids, peptide bonds, denaturation of proteins; DNA vs RNA; Addition vs Condensation polymers (Polythene, PVC, Teflon, Nylon-6,6, Bakelite, Melamine, Buna-S, Neoprene), biodegradable polymers.'
    }
  ],

  biology: [
    {
      id: 'bio-biomolecules-enzymes',
      title: 'Biomolecules, Enzymes, ATP Bioenergetics & Cellular Respiration',
      icon: 'fa-solid fa-dna',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Carbohydrates, lipids, proteins, nucleic acids, primary vs secondary metabolites; Enzymes (lock-and-key, induced fit, cofactors, coenzymes, optimum pH/temp); Glycolysis, Krebs cycle, Electron Transport Chain, Aerobic (38 ATP) vs Anaerobic respiration & fermentation, Respiratory Quotient (RQ).'
    },
    {
      id: 'bio-biological-classification',
      title: 'Five Kingdom Classification, Bacteria, Fungi, Protista & Viruses',
      icon: 'fa-solid fa-bacteria',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Whittaker Five Kingdom Classification (Monera, Protista, Fungi, Plantae, Animalia), Archaebacteria vs Eubacteria, Cyanobacteria (N2 fixation), Mycoplasma (smallest living cell, no cell wall), Protists (Amoeba, Plasmodium, diatoms), Fungi (chitin cell wall, mycorrhiza, lichens), Viruses, Viroids & Prions.'
    },
    {
      id: 'bio-plant-morphology-anatomy',
      title: 'Plant Morphology (Root, Stem, Leaf, Flower) & Plant Tissues (Xylem/Phloem)',
      icon: 'fa-solid fa-leaf',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Modifications of roots, stems (rhizome, tuber, bulb, corm) & leaves; Inflorescence, placentation, aestivation, fruits (true vs false, parthenocarpic); Meristematic vs Permanent tissues (Parenchyma, Collenchyma, Sclerenchyma), Xylem (tracheids, vessels) vs Phloem (sieve tubes, companion cells), secondary growth & annual rings.'
    },
    {
      id: 'bio-photosynthesis-nutrition',
      title: 'Photosynthesis (Light/Dark Reactions, C3/C4), Mineral Nutrition & Transpiration',
      icon: 'fa-solid fa-sun-plant-wilt',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Chloroplast structure, Chlorophyll a/b & accessory pigments, Light reaction (PSI, PSII, photolysis of water), Calvin cycle (C3) vs Hatch-Slack pathway (C4 Kranz anatomy) & CAM plants; Macro vs Micronutrients (NPK, Mg in chlorophyll), transpiration pull, guttation & stomatal opening mechanism.'
    },
    {
      id: 'bio-animal-tissues-anatomy',
      title: 'Animal Tissues (Epithelial, Connective, Muscular, Neural) & Structural Organisation',
      icon: 'fa-solid fa-microscope',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Epithelial tissue types (squamous, cuboidal, columnar, ciliated, glandular); Connective tissue (areolar, adipose, tendons vs ligaments, cartilage, bone, blood RBC/WBC/platelets, lymph); Muscular tissue (skeletal, smooth, cardiac); Neural tissue (neurons & neuroglia).'
    },
    {
      id: 'bio-digestive-nutrition',
      title: 'Human Digestive System, Enzymes, Balanced Diet & Deficiency Disorders',
      icon: 'fa-solid fa-utensils',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Alimentary canal anatomy, dental formula, salivary amylase, gastric HCl & pepsin, bile salts (emulsification), pancreatic enzymes (trypsin, lipase, amylase), small intestine villi absorption; Essential vitamins (A, B-complex, C, D, E, K), minerals (Fe, I, Ca) & deficiency diseases (Kwashiorkor, Marasmus, Scurvy, Rickets).'
    },
    {
      id: 'bio-respiratory-circulatory',
      title: 'Human Respiratory System, Gas Exchange, Heart, Blood Groups & ECG',
      icon: 'fa-solid fa-heart-pulse',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Mechanism of breathing, lung volumes & capacities (tidal volume, vital capacity), O2-haemoglobin dissociation curve, Bohr effect; Human heart 4 chambers, double circulation, SA/AV nodes, cardiac cycle, ECG waves (P, QRS, T), blood pressure, ABO & Rh blood grouping, erythroblastosis fetalis, clotting cascade.'
    },
    {
      id: 'bio-excretory-locomotion',
      title: 'Human Excretory System (Nephron, Dialysis) & Musculoskeletal Locomotion',
      icon: 'fa-solid fa-bone',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Ammonotelism, Ureotelism, Uricotelism; Kidney & Nephron structure, Glomerular filtration, selective reabsorption, Henle loop, ADH & RAAS regulation, hemodialysis; Human axial & appendicular skeleton (206 bones), types of joints (synovial, ball-and-socket, hinge), sarcomere sliding filament theory.'
    },
    {
      id: 'bio-nervous-sensory',
      title: 'Human Nervous System (Brain, Reflex Arc), Eye & Ear Physiology',
      icon: 'fa-solid fa-brain',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'CNS & PNS, Sympathetic vs Parasympathetic nervous system, neuron action potential & synapse neurotransmitters, Brain regions (Cerebrum, Thalamus, Hypothalamus, Cerebellum, Pons, Medulla oblongata), reflex arc; Human eye (rods vs cones, retina) & ear (cochlea hearing, semicircular canals balance).'
    },
    {
      id: 'bio-endocrine-hormones',
      title: 'Endocrine System, Pituitary, Thyroid, Adrenal, Pancreas & Hormonal Disorders',
      icon: 'fa-solid fa-flask-vial',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Exocrine vs Endocrine glands, Hypothalamus-Pituitary axis (GH, TSH, ACTH, FSH, LH, Oxytocin, Vasopressin), Pineal (melatonin), Thyroid (thyroxine, goitre, cretinism), Parathyroid (calcium), Thymus, Adrenal (adrenaline, cortisol), Pancreas Islets of Langerhans (insulin, glucagon, diabetes mellitus), Gonads.'
    },
    {
      id: 'bio-human-reproduction',
      title: 'Human Reproduction, Gametogenesis, Embryology & Reproductive Health',
      icon: 'fa-solid fa-person-pregnant',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Male & female reproductive anatomy, spermatogenesis vs oogenesis, menstrual cycle phases & hormones (FSH, LH, Estrogen, Progesterone), fertilization, implantation, placenta functions, parturition & lactation, contraception methods, IVF/ART & STIs.'
    },
    {
      id: 'bio-genetics-biotech-evolution',
      title: 'Mendelian Genetics, DNA/RNA Replication, Evolution & Biotechnology (CRISPR, GM Crops)',
      icon: 'fa-solid fa-dna',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Mendel laws of inheritance, incomplete dominance, codominance, sex-linked disorders (haemophilia, colour blindness), Down/Turner/Klinefelter syndromes; DNA double helix, replication, transcription, genetic code, translation; Darwin natural selection, Hardy-Weinberg; rDNA technology, PCR, Bt cotton, Golden rice, CRISPR-Cas9.'
    }
  ],

  economics: [
    {
      id: 'econ-micro-demand-supply',
      title: 'Microeconomics: Utility, Law of Demand & Supply, Elasticity & Indifference Curves',
      icon: 'fa-solid fa-chart-line',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Micro vs Macro, Opportunity cost, Marginal Utility, Law of Diminishing Marginal Utility, Law of Demand & Exceptions (Giffen, Veblen goods), Price/Income/Cross Elasticity of Demand, Substitutes vs Complements, Indifference curves & Budget line, Consumer Surplus.'
    },
    {
      id: 'econ-market-structures',
      title: 'Market Structures (Perfect Competition, Monopoly, Oligopoly) & Production Costs',
      icon: 'fa-solid fa-store',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Fixed, Variable, Marginal & Average Costs; Law of Variable Proportions; Perfect Competition, Monopoly (price discrimination), Monopolistic Competition, Oligopoly (kinked demand curve, cartels) & Monopsony; Lorenz curve & Gini coefficient.'
    },
    {
      id: 'econ-national-income',
      title: 'National Income Accounting: GDP, GNP, NNP, GVA, Real vs Nominal & Deflator',
      icon: 'fa-solid fa-coins',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Circular flow of income, Factor cost vs Basic prices vs Market prices, GDP vs GNP, NDP vs NNP, GVA calculation, Three methods (Product, Income, Expenditure), Nominal vs Real GDP, GDP Deflator, Personal Income & Disposable Income, Green GDP.'
    },
    {
      id: 'econ-inflation-cycles',
      title: 'Inflation (CPI, WPI, Core), Phillips Curve, Stagflation & Business Cycles',
      icon: 'fa-solid fa-arrow-trend-up',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Demand-pull vs Cost-push inflation, Headline vs Core inflation, WPI vs CPI (Combined/Rural/Urban, base years & weights), Deflation, Disinflation, Stagflation, Reflation, Shrinkflation, Phillips Curve, Skewflation, RBI 4% +/- 2% inflation targeting framework.'
    },
    {
      id: 'econ-financial-markets',
      title: 'Indian Money & Capital Markets: SEBI, Stock Exchanges, Bonds, G-Secs & Basel Norms',
      icon: 'fa-solid fa-landmark-dome',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Money market instruments (Call money, T-Bills, Commercial Paper, Certificate of Deposit), Capital market (Primary vs Secondary, IPO, FPO, Mutual Funds, REITs, InvITs), G-Secs, Sovereign Gold Bonds, Masala Bonds, SEBI powers, NPAs, SARFAESI Act, IBC 2016, Basel III norms.'
    },
    {
      id: 'econ-taxation-gst',
      title: 'Direct & Indirect Taxation, GST Council, Finance Commission Devolution & Laffer Curve',
      icon: 'fa-solid fa-file-invoice-dollar',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Progressive, Regressive & Proportional taxes, Direct vs Indirect taxes, Pigouvian tax, Tobin tax, Angel tax, Windfall tax, Laffer curve, GST architecture (CGST, SGST, IGST, Art 279A GST Council), 15th & 16th Finance Commission horizontal & vertical devolution criteria.'
    },
    {
      id: 'econ-agriculture-food-security',
      title: 'Indian Agriculture: MSP, CACP, PDS, FCI, Buffer Stocks & Land Reforms',
      icon: 'fa-solid fa-wheat-awn',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'CACP MSP formula (A2, A2+FL, C2), 22+1 mandated crops, Fair & Remunerative Price (FRP) for sugarcane, FCI & Open-ended procurement, NFSA 2013, Targeted PDS, e-NAM, PM-KISAN, PMFBY, KCC, Land reforms & Cooperative farming.'
    },
    {
      id: 'econ-industry-infrastructure',
      title: 'Industrial Policy, MSME Classification, PLI Schemes, Infrastructure & Disinvestment',
      icon: 'fa-solid fa-industry',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Industrial Policy Resolutions (1948, 1956, 1991), Index of Industrial Production (IIP) & Eight Core Industries weights, MSME investment/turnover definition, Maharatna/Navratna/Miniratna PSEs, Strategic Disinvestment (DIPAM), PLI Schemes, PM Gati Shakti & NIP.'
    },
    {
      id: 'econ-digital-fintech-defence',
      title: 'Digital Public Infrastructure (UPI, ONDC, CBDC), FinTech & Defence Indigenisation Economy',
      icon: 'fa-solid fa-mobile-screen-button',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'India Stack (Aadhaar, UPI, DigiLocker, Account Aggregator, ONDC, OCEN), RBI e-Rupee (CBDC wholesale vs retail), NPCI internationalisation, Defence Production & Export Promotion Policy (DPEPP), Positive Indigenisation Lists, iDEX, Defence Corridors (UP & TN).'
    }
  ],

  polity: [
    {
      id: 'polity-historical-making',
      title: 'Historical Background (1773–1947), Constituent Assembly & Making of the Constitution',
      icon: 'fa-solid fa-scroll',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Regulating Act 1773 to Indian Independence Act 1947; Cabinet Mission Plan 1946, Constituent Assembly composition & elections, Committees (Drafting Committee Dr Ambedkar, Union Powers, Provincial), Objectives Resolution, 2 years 11 months 18 days, adoption (26 Nov 1949) & commencement (26 Jan 1950).'
    },
    {
      id: 'polity-union-territory-states',
      title: 'Union & Its Territory (Art 1–4), Reorganization of States & New States',
      icon: 'fa-solid fa-map-location-dot',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'India that is Bharat (Union of States, Art 1), Art 2 vs Art 3 powers of Parliament, Art 4 simple majority rule, Berubari Union Case (1960) & 100th Amendment, Dhar Commission, JVP Committee, Fazl Ali Commission, States Reorganisation Act 1956, chronology of states formed after 1956.'
    },
    {
      id: 'polity-writs-exceptions',
      title: 'Constitutional Remedies, Five Writs, Martial Law (Art 34) & Basic Structure Doctrine',
      icon: 'fa-solid fa-gavel',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Art 32 vs Art 226 writ jurisdiction, deep comparison of Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto; Art 33 (Armed Forces restrictions), Art 34 (Martial Law vs National Emergency), Art 35, Evolution of Basic Structure (Shankari Prasad to Kesavananda Bharati).'
    },
    {
      id: 'polity-parliament-procedure',
      title: 'Parliamentary Procedure: Motions, Bills, Budget Stages, Guillotine & Committees',
      icon: 'fa-solid fa-building-columns',
      weightage: '4 Qs (~3.3 Marks)',
      desc: 'Summoning, Adjournment, Prorogation, Dissolution & effect on pending bills; Question Hour (Starred, Unstarred, Short Notice), Zero Hour, Motions (Privilege, Calling Attention, Adjournment, No-Confidence, Censure, Cut Motions), Ordinary vs Money vs Financial Bills (Art 110, 117), Joint Sitting (Art 108), Funds (Consolidated, Contingency, Public Account), PAC/Estimates/COPU.'
    },
    {
      id: 'polity-state-legislature',
      title: 'State Legislature (Vidhan Sabha & Vidhan Parishad), Legislative Process & Privileges',
      icon: 'fa-solid fa-landmark',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Unicameral vs Bicameral states (6 states with Legislative Council), Art 169 creation/abolition of Vidhan Parishad, composition & election of MLCs, comparison of Legislative Assembly vs Council powers (no joint sitting in states!), Governor assent & reservation of bills for President (Art 200-201).'
    },
    {
      id: 'polity-high-courts-tribunals',
      title: 'High Courts, Subordinate Courts, Tribunals (Art 323A/323B), Lok Adalats & NALSA',
      icon: 'fa-solid fa-scale-balanced',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'High Court judges appointment, transfer, removal & territorial jurisdiction (shared HCs); District Judges appointment (Art 233), 42nd Amendment Tribunals (CAT under Art 323A vs 323B), NALSA (Art 39A) & Legal Services Authorities Act 1987, Lok Adalats (final/no appeal), Gram Nyayalayas & Family Courts.'
    },
    {
      id: 'polity-uts-scheduled-areas',
      title: 'Union Territories (Art 239–241), Fifth & Sixth Schedules & Tribal Areas',
      icon: 'fa-solid fa-shield-halved',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Administration of UTs, Special provisions for Delhi (Art 239AA, 69th Amendment, LG vs CM powers) & Puducherry, J&K & Ladakh Reorganization; Fifth Schedule (10 states, Tribes Advisory Council, Governor report, PESA Act 1996) vs Sixth Schedule (AMTM: Assam, Meghalaya, Tripura, Mizoram Autonomous District Councils).'
    },
    {
      id: 'polity-non-constitutional-bodies',
      title: 'Non-Constitutional & Statutory Bodies: NITI Aayog, NHRC, CVC, CBI, Lokpal & CIC',
      icon: 'fa-solid fa-sitemap',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'NITI Aayog (Cooperative Federalism), NHRC & SHRC (2019 Amendment), Central Information Commission (RTI Act 2005), Central Vigilance Commission (Santhanam Committee), CBI (DPSE Act 1946), Lokpal & Lokayuktas Act 2013, NIA, NDMA — selection committees, tenure & removal comparisons.'
    },
    {
      id: 'polity-official-language-services',
      title: 'Official Languages (Part XVII), All-India Services (Art 312) & Public Service Commissions',
      icon: 'fa-solid fa-language',
      weightage: '2 Qs (~1.7 Marks)',
      desc: 'Part XVII (Art 343-351), Official Languages Act 1963, 22 Eighth Schedule languages & Classical Languages of India, Language of SC/HC (Art 348); All-India Services (IAS, IPS, IFoS, Art 312 Rajya Sabha resolution), Doctrine of Pleasure (Art 310), Art 311 safeguards, UPSC/SPSC/JPSC (Art 315-323).'
    },
    {
      id: 'polity-special-provisions',
      title: 'Special Provisions for States (Art 370, 371A–371J), Cooperative Societies & Anti-Defection',
      icon: 'fa-solid fa-file-contract',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'Abrogation of Art 370 & Art 35A (2019), Art 371 to 371J state-by-state mapping (Maharashtra/Gujarat, Nagaland, Assam, Manipur, Andhra, Sikkim, Mizoram, Arunachal, Goa, Karnataka); 97th Amendment Cooperative Societies (Part IXB, Art 43B); 10th Schedule Anti-Defection (52nd & 91st Amendments, Speaker judicial review).'
    },
    {
      id: 'polity-landmark-judgments',
      title: 'Landmark Supreme Court Constitutional Judgments (Kesavananda, Maneka, Minerva, Puttaswamy)',
      icon: 'fa-solid fa-book-open-reader',
      weightage: '3 Qs (~2.5 Marks)',
      desc: 'AK Gopalan (1950), Champakam Dorairajan (1951), Berubari (1960), Golaknath (1967), Kesavananda Bharati (1973), Maneka Gandhi (1978), Minerva Mills (1980), Shah Bano (1985), Indra Sawhney (1992), SR Bommai (1994), Vishaka (1997), IR Coelho (2007), NJAC (2015), Puttaswamy Privacy (2017), Navtej Johar (2018), Electoral Bonds (2024).'
    }
  ]
};

// 1. Load notes_data.js
const ndRaw = fs.readFileSync('notes_data.js', 'utf8');
const ndSandbox = { window: {} };
vm.createContext(ndSandbox);
vm.runInContext(ndRaw, ndSandbox);
const NOTES_DATABASE = ndSandbox.window.NOTES_DATABASE || ndSandbox.NOTES_DATABASE;
const CURRENT_AFFAIRS_DB = ndSandbox.CURRENT_AFFAIRS_DB || ndSandbox.window.CURRENT_AFFAIRS_DB;

// Check for ID collisions across entire NOTES_DATABASE
const existingIds = new Set();
for (const subj of Object.values(NOTES_DATABASE)) {
  for (const ch of (subj.chapters || [])) {
    existingIds.add(ch.id);
  }
}

let addedToNotesData = 0;
for (const [subjId, newChapters] of Object.entries(GRANULAR_CHAPTERS)) {
  if (!NOTES_DATABASE[subjId]) throw new Error(`Missing subject ${subjId} in notes_data.js`);
  for (const ch of newChapters) {
    if (existingIds.has(ch.id)) {
      console.log(`[SKIP] ${ch.id} already exists in notes_data.js`);
      continue;
    }
    NOTES_DATABASE[subjId].chapters.push({
      id: ch.id,
      title: ch.title,
      icon: ch.icon,
      topics: [
        {
          id: ch.id,
          title: ch.title,
          notes: `<p>Comprehensive masterclass for ${ch.title}...</p>`
        }
      ]
    });
    existingIds.add(ch.id);
    addedToNotesData++;
  }
  // Update subject title count hint if applicable
  const count = NOTES_DATABASE[subjId].chapters.length;
  NOTES_DATABASE[subjId].title = NOTES_DATABASE[subjId].title.replace(/\s*\(\d+\s*Modules\)/i, '') + ` (${count} Modules)`;
}

const outNotesData = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(CURRENT_AFFAIRS_DB, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(NOTES_DATABASE, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.NOTES_DATABASE = NOTES_DATABASE;\n}\nif (typeof module !== 'undefined') {\n  module.exports = { NOTES_DATABASE, CURRENT_AFFAIRS_DB };\n}\n`;
fs.writeFileSync('notes_data.js', outNotesData, 'utf8');
fs.writeFileSync('public/notes_data.js', outNotesData, 'utf8');
console.log(`✅ notes_data.js & public/notes_data.js updated (+${addedToNotesData} granular chapters).`);

// 2. Update syllabus_data.js & public/syllabus_data.js
const sylRaw = fs.readFileSync('syllabus_data.js', 'utf8');
const sylSandbox = { window: {} };
vm.createContext(sylSandbox);
vm.runInContext(sylRaw, sylSandbox);
const OFFICIAL_SYLLABUS_DATA = sylSandbox.window.OFFICIAL_SYLLABUS_DATA;

let addedToSyllabus = 0;
for (const [subjId, newChapters] of Object.entries(GRANULAR_CHAPTERS)) {
  for (const ch of newChapters) {
    if (!OFFICIAL_SYLLABUS_DATA[ch.id]) {
      OFFICIAL_SYLLABUS_DATA[ch.id] = `Sub-topics: ${ch.desc}. Standard: Class 11th & 12th NCERT / UPSC Defence Standard. Exams: CDS, NDA, AFCAT, CAPF.`;
      addedToSyllabus++;
    }
  }
}
const outSyllabus = `// Official UPSC CDS/NDA/AFCAT Detailed Syllabus Context Map\nwindow.OFFICIAL_SYLLABUS_DATA = ${JSON.stringify(OFFICIAL_SYLLABUS_DATA, null, 2)};\n`;
fs.writeFileSync('syllabus_data.js', outSyllabus, 'utf8');
fs.writeFileSync('public/syllabus_data.js', outSyllabus, 'utf8');
console.log(`✅ syllabus_data.js & public/syllabus_data.js updated (+${addedToSyllabus} entries).`);

// 3. Update app.js & public/app.js TOPIC_WEIGHTAGE_MAP
let appRaw = fs.readFileSync('app.js', 'utf8');
const anchor = '"env-pollution": "3 Qs (~2.5 Marks)"';
if (!appRaw.includes(anchor)) {
  throw new Error('Could not find TOPIC_WEIGHTAGE_MAP anchor in app.js');
}
const extraEntries = [];
for (const [subjId, newChapters] of Object.entries(GRANULAR_CHAPTERS)) {
  for (const ch of newChapters) {
    if (!appRaw.includes(`"${ch.id}":`)) {
      extraEntries.push(`  "${ch.id}": "${ch.weightage}"`);
    }
  }
}
if (extraEntries.length > 0) {
  appRaw = appRaw.replace(anchor, `${anchor},\n\n  // Granular Track-4 Expansion\n${extraEntries.join(',\n')}`);
  fs.writeFileSync('app.js', appRaw, 'utf8');
  fs.writeFileSync('public/app.js', appRaw, 'utf8');
  console.log(`✅ app.js & public/app.js updated (+${extraEntries.length} weightage entries).`);
} else {
  console.log('ℹ️ app.js weightage map already up to date.');
}

// 4. Register new chapters in ai_generated_notes.js & public/ai_generated_notes.js
const aiRaw = fs.readFileSync('ai_generated_notes.js', 'utf8');
const aiSandbox = { window: {} };
vm.createContext(aiSandbox);
vm.runInContext(aiRaw, aiSandbox);
const AI_GENERATED_NOTES = aiSandbox.window.AI_GENERATED_NOTES;
const existingAiIds = new Set(AI_GENERATED_NOTES.map(n => n.id));

let addedToAi = 0;
for (const [subjId, newChapters] of Object.entries(GRANULAR_CHAPTERS)) {
  for (const ch of newChapters) {
    if (!existingAiIds.has(ch.id)) {
      AI_GENERATED_NOTES.push({
        id: ch.id,
        title: ch.title,
        subject: subjId,
        notes: `<div class="revision-card">\n  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent); margin-right: 8px;"></i> ${ch.title.toUpperCase()} — MASTER REVISION & EXAM GUIDE</h3>\n</div>`
      });
      existingAiIds.add(ch.id);
      addedToAi++;
    }
  }
}

const outAi = `// AI_GENERATED_NOTES — Master Synthesized Compendium for Jayastra\n// Canonical Knowledge Base for Defence Examinations Revision\n\nconst AI_GENERATED_NOTES = ${JSON.stringify(AI_GENERATED_NOTES, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.AI_GENERATED_NOTES = AI_GENERATED_NOTES;\n}\nif (typeof module !== 'undefined') {\n  module.exports = { AI_GENERATED_NOTES };\n}\n`;
fs.writeFileSync('ai_generated_notes.js', outAi, 'utf8');
fs.writeFileSync('public/ai_generated_notes.js', outAi, 'utf8');
console.log(`✅ ai_generated_notes.js & public/ai_generated_notes.js updated (+${addedToAi} chapters, total: ${AI_GENERATED_NOTES.length}).`);
