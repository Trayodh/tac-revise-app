"""
inject_mega_compendiums.py
Injects massive, exhaustive, encyclopedic A+ Golden Compendiums into notes_database.json
and compiles them into ai_generated_notes.js and public/ai_generated_notes.js.
"""

import json
import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

NOTES_DB = 'notes_database.json'

mega_compendiums = [
    # =========================================================================
    # 1. GENERAL SCIENCE: PHYSICS MASTER COMPENDIUM
    # =========================================================================
    {
        "id": "science-golden-physics-laws",
        "subject": "Physics",
        "topic": "Master Reference: Physics Laws, Formulae, Ray Optics & Electromagnetic Waves",
        "chapter": "General Physics & Mechanics",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Master Reference: Physics Laws, Formulae, Ray Optics & Electromagnetic Waves

#### 1. Mechanics & Fundamental Laws
- **Newton's 1st Law (Law of Inertia):** An object remains at rest or in uniform straight-line motion unless acted upon by an external unbalanced force. Defines **Inertia** and the **Qualitative definition of Force**.
  - *Inertia of Rest:* Dust falling off a beaten carpet; passenger falling backward when a bus starts suddenly.
  - *Inertia of Motion:* Passenger falling forward when brakes are applied; athlete running before taking a jump.
  - *Inertia of Direction:* Sparks flying tangentially from a grinding wheel; mud flung tangentially by rotating wheels.
- **Newton's 2nd Law (Law of Momentum):** The rate of change of linear momentum is directly proportional to the applied unbalanced force and takes place in the direction of the force:
  $$\\vec{F} = \\frac{d\\vec{p}}{dt} = m\\vec{a}$$
  - *Quantitative definition of Force.* Gives unit: $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2 = 10^5\\text{ dynes}$.
  - *Impulse ($J$):* Force $\\times$ time interval $= \\Delta p$ (Change in momentum). Cricket player pulling hands backward to increase time $\\Delta t$, thereby reducing the impact force $F$.
- **Newton's 3rd Law (Action-Reaction):** For every action, there is an equal and opposite reaction.
  - Action and reaction act on **two different bodies simultaneously**; hence they NEVER cancel each other.
  - Examples: Recoil of a gun ($v_{recoil} = -\\frac{m}{M}v$), swimming, rocket propulsion (conservation of linear momentum).

#### 2. Universal Gravitation & Planetary Motion
- **Newton's Law of Gravitation:** $F = G \\frac{m_1 m_2}{r^2}$, where Universal Gravitational Constant $G = 6.674 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ (Scalar, constant throughout the universe).
- **Acceleration due to gravity ($g$):** $g = \\frac{GM}{R^2} \\approx 9.8\\text{ m/s}^2$ at Earth's surface.
  - *Variation with Altitude:* $g' = g\\left(1 - \\frac{2h}{R}\\right)$ (decreases with height).
  - *Variation with Depth:* $g' = g\\left(1 - \\frac{d}{R}\\right)$ (decreases with depth; $g = 0$ at the center of the Earth).
  - *Variation with Latitude & Rotation:* $g' = g - R\\omega^2 \\cos^2 \\lambda$. Max at poles ($\lambda = 90^\\circ, g_{poles} = \\text{max}$), Min at equator ($\lambda = 0^\\circ, g_{eq} = \\text{min}$). If Earth stops rotating, $g$ increases most at the equator.
  - *Escape Velocity ($v_e$):* $v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2\\text{ km/s}$ for Earth; $\\approx 2.4\\text{ km/s}$ for the Moon (hence Moon has no atmosphere as root-mean-square gas speed exceeds escape velocity).
  - *Orbital Velocity ($v_o$):* $v_o = \\sqrt{gR} = \\frac{v_e}{\\sqrt{2}} \\approx 7.92\\text{ km/s}$.
  - *Kepler's Laws of Planetary Motion:*
    1. **Law of Orbits:** All planets move in elliptical orbits with the Sun at one focus.
    2. **Law of Areas:** A line joining planet and Sun sweeps out equal areas in equal intervals of time ($dA/dt = L/(2m) = \\text{constant}$ — consequence of conservation of angular momentum).
    3. **Law of Periods:** $T^2 \\propto r^3$ (Square of orbital period is proportional to cube of semi-major axis).

#### 3. Complete Ray Optics & Optical Instruments Matrix
| Optical Phenomenon / Instrument | Underlying Principle / Mirror / Lens Used | Practical Application / Key Exam Facts | High-Yield Distractor Trap |
| :--- | :--- | :--- | :--- |
| **Total Internal Reflection (TIR)** | Light travels from **denser to rarer medium** and angle of incidence $i > \\text{Critical angle } c$ | Optical fibers (telecom & endoscopy), Mirage in deserts, Sparkling of diamond, Looming in cold seas. | **Trap:** TIR CANNOT occur when light travels from rarer to denser medium (e.g., air into water)! |
| **Rainbow Formation** | **Dispersion + Refraction + Internal Reflection** | Primary Rainbow: 2 refractions + 1 internal reflection (Red outside, Violet inside; angular radius $42^\\circ$). Secondary: 2 refractions + 2 internal reflections (Violet outside, Red inside; fainter). | **Trap:** Sun must always be BEHIND the observer. One can never see a rainbow at noon from the ground! |
| **Concave Mirror (Converging)** | Real & inverted images (except when object is between Pole & Focus, then Virtual, Erect & Enlarged). | Dentist mirror, shaving mirror, car headlights/searchlights, solar furnaces. | Shaving/dentist mirror requires object **inside focus** for magnification. |
| **Convex Mirror (Diverging)** | Always forms **Virtual, Erect, and Diminished** images regardless of object position. | Rear-view mirror in automobiles, street light reflectors, shop security mirrors. | Has a wider field of view because it curves outward. |
| **Convex Lens (Converging)** | Real & inverted (except object between Optical center & Focus: Virtual, Erect & Enlarged). | Magnifying glass, objective of astronomical telescope, hypermetropia correction. | Simple microscope uses convex lens with object within focal length. |
| **Concave Lens (Diverging)** | Always forms **Virtual, Erect, and Diminished** images. | Myopia (near-sightedness) correction, peepholes in doors. | Has negative focal length ($f < 0$). |
| **Scattering of Light (Rayleigh)** | Scattering intensity $I \\propto \\frac{1}{\\lambda^4}$ | Blue color of clear sky, reddish appearance of sun at sunrise & sunset, red danger signals. | Blue scatters most among visible wavelengths; red scatters least and travels furthest. |

#### 4. Defects of Vision & Corrective Lenses
1. **Myopia (Short-sightedness):** Can see nearby objects clearly, distant objects blurred.
   - *Cause:* Eyeball elongated or focal length of eye lens too short (image formed **in front of retina**).
   - *Correction:* **Concave Lens (Diverging)** of appropriate negative focal length.
2. **Hypermetropia (Far-sightedness):** Can see distant objects clearly, near objects blurred.
   - *Cause:* Eyeball shortened or focal length too long (image formed **behind retina**).
   - *Correction:* **Convex Lens (Converging)** of appropriate positive power.
3. **Presbyopia (Old-age hypermetropia):** Loss of accommodation due to weakening of ciliary muscles and hardening of eye lens.
   - *Correction:* **Bifocal Lens** (upper part concave for distant vision, lower part convex for reading).
4. **Astigmatism:** Inability to focus horizontal and vertical lines simultaneously due to uneven corneal curvature.
   - *Correction:* **Cylindrical Lens**.

#### 5. Electromagnetic Spectrum (Frequency & Wavelength Order)
- Order of **Increasing Frequency** ($\nu$) / **Decreasing Wavelength** ($\lambda$):
  $$\\text{Radio Waves} < \\text{Microwaves} < \\text{Infrared (IR)} < \\text{Visible Light} < \\text{Ultraviolet (UV)} < \\text{X-Rays} < \\text{Gamma Rays (}\\gamma\\text{)}$$
  - *Radio Waves:* Broadcasting, radar, RFID.
  - *Microwaves:* Satellite communication, radar speed guns, microwave ovens (water molecule resonance).
  - *Infrared (Heat radiation):* TV remote controls, night-vision cameras, greenhouse effect heating.
  - *Visible Light:* $400\\text{ nm (Violet)} - 700\\text{ nm (Red)}$.
  - *Ultraviolet:* Water purification (kills bacteria by breaking DNA), counterfeit note detection, vitamin D synthesis.
  - *X-Rays:* Medical radiography, crystal structure diffraction (Bragg's Law), airport security.
  - *Gamma Rays:* Cancer radiotherapy (Cobalt-60), high-penetration nuclear emission.
"""
    },

    # =========================================================================
    # 2. GENERAL SCIENCE: CHEMISTRY MASTER COMPENDIUM
    # =========================================================================
    {
        "id": "science-golden-chemistry-mastery",
        "subject": "Chemistry",
        "topic": "Master Matrix: Acids, Bases, Salts, Metals, Reactivity Series & Everyday Chemistry",
        "chapter": "General Chemistry",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Master Matrix: Acids, Bases, Salts, Metals, Reactivity Series & Everyday Chemistry

#### 1. Reactivity Series of Metals (Top to Bottom)
Mnemonic: **P**lease **S**top **C**alling **M**e **A** **C**areless **Z**ebra, **I** **T**ruly **L**ike **H**er **C**alling **M**e **S**mart **G**oat
$$\\text{K} > \\text{Na} > \\text{Ca} > \\text{Mg} > \\text{Al} > \\text{Zn} > \\text{Fe} > \\text{Sn} > \\text{Pb} > [\\text{H}] > \\text{Cu} > \\text{Hg} > \\text{Ag} > \\text{Au} > \\text{Pt}$$
- **Potassium (K) & Sodium (Na):** React violently with cold water, release $H_2$ gas which catches fire immediately; stored under **kerosene oil** to prevent contact with air and moisture.
- **Calcium (Ca):** Reacts with cold water less violently; floats because bubbles of $H_2$ gas stick to its surface.
- **Magnesium (Mg):** Does not react with cold water; reacts with **hot water** to form $Mg(OH)_2$ and $H_2$; floats.
- **Aluminium (Al), Zinc (Zn), Iron (Fe):** React **only with steam**:
  $$2\\text{Al} + 3\\text{H}_2\\text{O(steam)} \\rightarrow \\text{Al}_2\\text{O}_3 + 3\\text{H}_2$$
  $$3\\text{Fe} + 4\\text{H}_2\\text{O(steam)} \\rightarrow \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2$$
- **Lead (Pb), Copper (Cu), Silver (Ag), Gold (Au):** Do **NOT** react with water or dilute acids at all.
- **Metals above Hydrogen:** Can displace Hydrogen from dilute acids ($HCl, H_2SO_4$).
- **Metals below Hydrogen ($Cu, Ag, Au$):** CANNOT displace Hydrogen from dilute acids.

#### 2. Master Table of Chemical Compounds in Daily Life
| Common Name | Chemical Name | Chemical Formula | Key Uses & High-Yield Exam Facts |
| :--- | :--- | :--- | :--- |
| **Baking Soda** | Sodium Hydrogen Carbonate | $\\text{NaHCO}_3$ | Mild non-corrosive basic salt; antacid component; fire extinguisher ($CO_2$ release); baking powder ($NaHCO_3 + \\text{tartaric acid}$). |
| **Washing Soda** | Sodium Carbonate Decahydrate | $\\text{Na}_2\\text{CO}_3 \\cdot 10\\text{H}_2\\text{O}$ | Glass, soap, and paper industries; **permanent hardness removal of water**; efflorescent (loses $9H_2O$ on exposure to dry air). |
| **Bleaching Powder** | Calcium Oxychloride | $\\text{CaOCl}_2$ | Prepared by action of Chlorine on dry slaked lime: $Ca(OH)_2 + Cl_2 \\rightarrow CaOCl_2 + H_2O$. Bleaching cotton, disinfectant in water. |
| **Plaster of Paris (POP)** | Calcium Sulphate Hemihydrate | $\\text{CaSO}_4 \\cdot \\frac{1}{2}\\text{H}_2\\text{O}$ | Prepared by heating Gypsum at $373\\text{ K}$ ($100^\\circ\\text{C}$): $CaSO_4\\cdot 2H_2O \\rightarrow CaSO_4\\cdot \\frac{1}{2}H_2O + 1\\frac{1}{2}H_2O$. Setting fractured bones, making casts, statues. |
| **Gypsum** | Calcium Sulphate Dihydrate | $\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$ | Added to cement to **retard the setting time** (prevents quick setting). |
| **Quick Lime** | Calcium Oxide | $\\text{CaO}$ | Reacts vigorously with water to produce slaked lime (exothermic reaction used in whitewashing). |
| **Slaked Lime** | Calcium Hydroxide | $\\text{Ca(OH)}_2$ | Clear solution is Lime Water; turns milky when $CO_2$ is bubbled through ($CaCO_3$ precipitate); milkiness disappears on excess $CO_2$ ($Ca(HCO_3)_2$ formed). |
| **Caustic Soda** | Sodium Hydroxide | $\\text{NaOH}$ | Manufactured by **Chlor-alkali process** (electrolysis of brine: products are $H_2$ at cathode, $Cl_2$ at anode, $NaOH$ in solution). |
| **Heavy Water** | Deuterium Oxide | $\\text{D}_2\\text{O}$ | Used as **moderator and coolant** in nuclear reactors to slow down fast neutrons. |
| **Tear Gas** | Chloroacetophenone / CS | $\\text{C}_8\\text{H}_7\\text{ClO}$ | Riot control agent; stimulates corneal nerves in the eyes. |
| **Laughing Gas** | Nitrous Oxide | $\\text{N}_2\\text{O}$ | Anesthetic and analgesic in dentistry and surgery. |

#### 3. Important Alloys & Their Composition
| Alloy Name | Principal Composition | Key Property / Practical Application |
| :--- | :--- | :--- |
| **Brass** | $\\text{Copper (Cu, 70\\%)} + \\text{Zinc (Zn, 30\\%)}$ | Utensils, musical instruments, ammunition cartridge cases, plumbing. Non-magnetic. |
| **Bronze** | $\\text{Copper (Cu, 88\\%)} + \\text{Tin (Sn, 12\\%)}$ | Statues, medals, coins, ship propellers, bearings. Higher corrosion resistance than brass. |
| **Solder** | $\\text{Lead (Pb, 50\\%)} + \\text{Tin (Sn, 50\\%)}$ | **Low melting point**; used for joining electrical wires. |
| **Stainless Steel**| $\\text{Iron (Fe, 74\\%)} + \\text{Chromium (Cr, 18\\%)} + \\text{Nickel (Ni, 8\\%)} + \\text{Carbon (0.1\\%)}$ | Surgical instruments, cutlery, chemical plant equipment. Chromium forms self-healing passive oxide layer. |
| **Duralumin** | $\\text{Al (95\\%)} + \\text{Cu (4\\%)} + \\text{Mg (0.5\\%)} + \\text{Mn (0.5\\%)}$ | High strength-to-weight ratio; aircraft bodies, pressure cookers. |
| **Invar** | $\\text{Iron (Fe, 64\\%)} + \\text{Nickel (Ni, 36\\%)}$ | **Negligible coefficient of thermal expansion**; pendulum clocks, surveying measuring tapes. |
| **German Silver** | $\\text{Copper (Cu, 60\\%)} + \\text{Zinc (Zn, 20\\%)} + \\text{Nickel (Ni, 20\\%)}$ | **Trap Alert: Contains 0% Silver!** Silver-like luster; decorative utensils, resistance coils. |
| **Gun Metal** | $\\text{Copper (88\\%)} + \\text{Tin (10\\%)} + \\text{Zinc (2\\%)}$ | Heavy gears, bearings, steam valve fittings. |
| **Amalgam** | **Mercury (Hg)** combined with any metal ($Ag, Sn, Zn$) | Dental fillings. **Trap:** Iron (Fe), Platinum (Pt), and Tungsten (W) do NOT form amalgams! |

#### 4. Natural Sources of Organic Acids
- **Citric Acid:** Citrus fruits (lemons, oranges).
- **Tartaric Acid:** Tamarind, grapes, unripened mangoes.
- **Oxalic Acid:** Tomatoes, spinach (excess forms calcium oxalate kidney stones).
- **Lactic Acid:** Curd, sour milk.
- **Methanoic (Formic) Acid ($HCOOH$):** Ant sting, Nettle leaf sting (neutralized by rubbing dock leaf or baking soda).
- **Acetic Acid ($CH_3COOH$):** Vinegar (5–8% solution of acetic acid in water).
- **Malic Acid:** Apples.
"""
    },

    # =========================================================================
    # 3. GENERAL SCIENCE: BIOLOGY MASTER COMPENDIUM
    # =========================================================================
    {
        "id": "science-golden-biology-systems",
        "subject": "Biology",
        "topic": "Master Matrix: Human Physiological Systems, Blood, Vitamins, Hormones & Diseases",
        "chapter": "Human Physiology & Life Sciences",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Master Matrix: Human Physiological Systems, Blood, Vitamins, Hormones & Diseases

#### 1. Circulatory System & Blood Physiology
- **Components of Blood:**
  - **Plasma (55% of blood volume):** 90-92% water, 6-8% proteins (Albumin for osmotic balance, Globulin for defense/antibodies, Fibrinogen for blood clotting).
  - **Formed Elements (45%):**
    - **RBCs (Erythrocytes):** Biconcave, enucleated (no nucleus in mature human RBCs to maximize space for hemoglobin). Lifespan: **120 days**. Destroyed in the **Spleen** ("Graveyard of RBCs"). Count: $5-5.5\\text{ million/mm}^3$.
    - **WBCs (Leukocytes):** Nucleated, defense cells. Lifespan: few days. Count: $6,000-8,000/\\text{mm}^3$.
      - *Granulocytes:* Neutrophils (phagocytic, most abundant 60-65%), Eosinophils (allergic reactions), Basophils (secrete histamine, serotonin, heparin).
      - *Agranulocytes:* Lymphocytes (B & T cells for immune response), Monocytes (phagocytic).
    - **Platelets (Thrombocytes):** Cell fragments from megakaryocytes in bone marrow. Lifespan: 7-10 days. Function: Blood clotting via Prothrombin $\\rightarrow$ Thrombin $\\rightarrow$ Fibrinogen $\\rightarrow$ Fibrin mesh. Require **Calcium ($Ca^{2+}$) and Vitamin K**.
- **Human Blood Groups (ABO System - Karl Landsteiner):**
  - **Type A:** A antigen on RBCs, Anti-B antibody in plasma.
  - **Type B:** B antigen on RBCs, Anti-A antibody in plasma.
  - **Type AB:** Both A and B antigens, **NO antibodies** $\\rightarrow$ **Universal Recipient**.
  - **Type O:** **NO antigens**, both Anti-A and Anti-B antibodies $\\rightarrow$ **Universal Donor**.
  - **Rh Factor:** Rh-positive ($Rh^+$) has D-antigen; Rh-negative ($Rh^-$) lacks it.
    - *Erythroblastosis Foetalis:* Occurs when an $Rh^-$ mother carries an $Rh^+$ fetus during subsequent pregnancies. Prevented by administering anti-Rh antibodies (Rhogam) after first delivery.

#### 2. Endocrine Glands, Hormones & Target Disorders
| Endocrine Gland | Secreted Hormone(s) | Primary Physiological Function | Deficiency / Hyper-secretion Disorder |
| :--- | :--- | :--- | :--- |
| **Pituitary Gland** (Master Gland) | Growth Hormone (GH), TSH, ACTH, FSH, LH, Oxytocin, Vasopressin (ADH) | Regulates body growth and other endocrine glands. Controlled by Hypothalamus. | - Deficiency in childhood: **Dwarfism**.<br>- Hypersecretion: **Gigantism** (children), **Acromegaly** (adults).<br>- **Deficiency of ADH:** **Diabetes Insipidus** (excessive water loss / polyuria without sugar). |
| **Thyroid Gland** | Thyroxine ($T_4$), Triiodothyronine ($T_3$), Calcitonin | Regulates basal metabolic rate (BMR), carbohydrate, protein, and fat metabolism. Requires **Iodine**. Calcitonin lowers blood calcium. | - Iodine deficiency: **Simple Goitre**.<br>- Hypothyroidism in infants: **Cretinism** (mental & physical retardation).<br>- Hypothyroidism in adults: **Myxoedema**.<br>- Hyperthyroidism: **Grave's Disease** (Exophthalmic goitre). |
| **Parathyroid Gland** | Parathyroid Hormone (PTH / Collip's hormone) | **Increases blood calcium levels** ($Ca^{2+}$) by mobilizing calcium from bones (hypercalcemic). Antagonist to Calcitonin. | - Hyposecretion: **Tetany** (painful muscle spasms).<br>- Hypersecretion: **Osteoporosis** (bone demineralization). |
| **Pancreas** (Islets of Langerhans) | - $\\alpha$-cells: **Glucagon** (elevates blood glucose).<br>- $\\beta$-cells: **Insulin** (lowers blood glucose via cellular uptake). | Dual gland (Heterocrine: both endocrine & exocrine). Maintains glucose homeostasis. | - Deficiency of Insulin: **Diabetes Mellitus** (hyperglycemia, glucose in urine, ketone bodies). |
| **Adrenal Gland** | - Cortex: Cortisol, Aldosterone.<br>- Medulla: **Adrenaline (Epinephrine)**, Noradrenaline. | Adrenaline is the **"Emergency / 3F Hormone"** (Fight, Flight, Fright). Increases heart rate, blood pressure, dilates bronchioles and pupils. | - Adrenal cortex hypo-function: **Addison's Disease**.<br>- Hypersecretion of cortisol: **Cushing's Syndrome**. |

#### 3. Vitamins Master Classification
| Vitamin | Chemical Name | Solubility | Primary Dietary Source | Deficiency Disease / Symptom |
| :--- | :--- | :--- | :--- | :--- |
| **Vitamin A** | Retinol | **Fat-soluble** | Carrots, cod liver oil, milk, mangoes | **Night Blindness (Nyctalopia)**, Xerophthalmia (dry cornea). |
| **Vitamin B1** | Thiamine | **Water-soluble**| Unpolished rice, yeast, whole grains | **Beriberi** (cardiovascular & neurological dysfunction). |
| **Vitamin B2** | Riboflavin | **Water-soluble**| Milk, eggs, liver | **Cheilosis** (cracking at corners of mouth), Glossitis (red tongue). |
| **Vitamin B3** | Niacin (Nicotinic acid) | **Water-soluble**| Meat, peanuts, fish | **Pellagra** (4Ds: Dermatitis, Diarrhea, Dementia, Death). |
| **Vitamin B9** | Folic Acid | **Water-soluble**| Green leafy vegetables, legumes | **Megaloblastic Anemia**, neural tube defects in fetus. |
| **Vitamin B12**| Cyanocobalamin | **Water-soluble**| Animal liver, meat, milk (**contains Cobalt**) | **Pernicious Anemia** (lack of intrinsic factor prevents absorption). |
| **Vitamin C** | Ascorbic Acid | **Water-soluble**| Citrus fruits (amla is richest), tomatoes | **Scurvy** (bleeding gums, delayed wound healing). Destroyed by heat/cooking. |
| **Vitamin D** | Calciferol | **Fat-soluble** | Sunlight exposure (synthesized in skin), cod liver oil | **Rickets** (bent bones in children), **Osteomalacia** (soft bones in adults). |
| **Vitamin E** | Tocopherol | **Fat-soluble** | Wheat germ oil, nuts, vegetable oils | Sterility, muscular weakness ("Beauty Vitamin / Anti-sterility"). |
| **Vitamin K** | Phylloquinone | **Fat-soluble** | Spinach, cabbage, synthesized by gut bacteria | **Defective Blood Clotting** (prolonged bleeding time). |

#### 4. Pathogenic Diseases Classification (Bacteria vs. Virus vs. Protozoa)
- **Bacterial Diseases:**
  - Tuberculosis (*Mycobacterium tuberculosis* — BCG vaccine)
  - Typhoid (*Salmonella typhi* — Widal test)
  - Cholera (*Vibrio cholerae*)
  - Tetanus / Lockjaw (*Clostridium tetani*)
  - Pertussis / Whooping Cough (*Bordetella pertussis* — DPT vaccine)
  - Diphtheria (*Corynebacterium diphtheriae* — DPT vaccine)
  - Plague (*Yersinia pestis* — transmitted by rat fleas *Xenopsylla cheopis*)
  - Leprosy / Hansen's Disease (*Mycobacterium leprae*)
- **Viral Diseases:**
  - Dengue (*Flavivirus* — transmitted by female *Aedes aegypti* mosquito, causes severe platelet drop)
  - Rabies (*Rhabdovirus* — hydrophobia, bullet-shaped virus, neurotropic)
  - Polio (*Poliovirus* — attacks motor neurons in spinal cord, Salk injectable / Sabin oral vaccine)
  - Hepatitis A, B, C (*Hepatitis viruses* — Hepatitis B is DNA virus transmitted via blood/sexual contact)
  - Measles, Mumps, Rubella (MMR vaccine)
  - AIDS (*Human Immunodeficiency Virus / HIV* — retrovirus attacking CD4+ helper T-cells, ELISA / Western Blot test)
- **Protozoan Diseases:**
  - Malaria (*Plasmodium vivax / falciparum* — vector: female *Anopheles* mosquito; attacks liver and RBCs; treated with Quinine from Cinchona tree bark)
  - Amoebiasis / Amoebic dysentery (*Entamoeba histolytica*)
  - Kala-Azar / Visceral Leishmaniasis (*Leishmania donovani* — vector: Sandfly *Phlebotomus*)
  - Sleeping Sickness (*Trypanosoma brucei* — vector: Tsetse fly *Glossina*)
"""
    },

    # =========================================================================
    # 4. INDIAN ECONOMY MASTER COMPENDIUM
    # =========================================================================
    {
        "id": "economy-golden-macroeconomics",
        "subject": "Economics",
        "topic": "Master Matrix: Macroeconomic Indicators, Monetary Policy Tools & Five Year Plans",
        "chapter": "Macroeconomics & Public Finance",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Master Matrix: Macroeconomic Indicators, Monetary Policy Tools & Five Year Plans

#### 1. National Income Aggregates & Formulas
- **Gross Domestic Product (GDP):** Total monetary value of all final goods and services produced **within the domestic territory** of a country during a financial year, irrespective of whether produced by citizens or foreign residents.
- **Gross National Product (GNP):**
  $$\\text{GNP} = \\text{GDP} + \\text{Net Factor Income from Abroad (NFIA)}$$
  $$\\text{NFIA} = \\text{Income earned by Indian residents abroad} - \\text{Income earned by foreign residents in India}$$
- **Net Domestic Product (NDP):** $\\text{NDP} = \\text{GDP} - \\text{Depreciation (Consumption of Fixed Capital)}$
- **Net National Product (NNP):** $\\text{NNP} = \\text{GNP} - \\text{Depreciation}$
  - **National Income (NI) in India:** Technically defined as **NNP at Factor Cost ($\text{NNP}_{FC}$)**.
  - $\\text{Market Price (MP)} = \\text{Factor Cost (FC)} + \\text{Net Indirect Taxes (Indirect Taxes} - \\text{Subsidies)}$.
  - **Real GDP vs. Nominal GDP:**
    - Nominal GDP is calculated at **current market prices** (reflects inflation).
    - Real GDP is calculated at **constant base year prices** (reflects actual physical production growth).
    - **GDP Deflator:** $\\frac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100$ (Comprehensive indicator of inflation).

#### 2. RBI Monetary Policy Tools (Quantitative vs. Qualitative)
| Policy Instrument | Mechanism / Definition | Impact on Money Supply & Inflation | High-Yield Exam Nuance |
| :--- | :--- | :--- | :--- |
| **Repo Rate** (Repurchase Option) | Rate at which RBI lends short-term money to commercial banks against government securities. | Increasing Repo Rate $\\rightarrow$ Borrowing becomes expensive $\\rightarrow$ Money supply shrinks $\\rightarrow$ **Curbs Inflation**. | Key policy rate set by Monetary Policy Committee (MPC: 6 members, RBI Governor has casting vote). |
| **Reverse Repo Rate** | Rate at which commercial banks park excess funds with the RBI. | Increasing Reverse Repo $\\rightarrow$ Banks park more money with RBI $\\rightarrow$ Lending to public decreases. | Always lower than the Repo Rate. |
| **Standing Deposit Facility (SDF)** | Introduced in 2022 to absorb liquidity without requiring collateral (securities) from RBI. | Replaced reverse repo as the effective floor of the liquidity adjustment facility (LAF). | Does not require government securities pledge. |
| **Marginal Standing Facility (MSF)** | Window for scheduled banks to borrow overnight funds from RBI in emergency against SLR securities. | MSF Rate is always pegged higher than Repo Rate (usually Repo + 25 bps). | Used for overnight liquidity crunches. |
| **Cash Reserve Ratio (CRR)** | Specified percentage of Net Demand and Time Liabilities (NDTL) that banks **must keep as cash with RBI**. | Increasing CRR $\\rightarrow$ Commercial banks have less funds to lend $\\rightarrow$ Lowers money multiplier. | **RBI pays ZERO interest** to banks on CRR deposits. |
| **Statutory Liquidity Ratio (SLR)** | Percentage of NDTL that banks must maintain **with themselves** in liquid assets (Gold, Cash, approved G-Secs). | Increasing SLR forces banks to invest more in sovereign securities rather than commercial credit. | Mandated under Banking Regulation Act, 1949. |
| **Open Market Operations (OMO)** | Outright sale or purchase of Government Securities (G-Secs) by the RBI in the open market. | **Selling G-Secs absorbs liquidity** (curbs inflation). **Buying G-Secs injects liquidity** (boosts growth). | Direct balance sheet tool of the central bank. |

#### 3. Inflation Classifications
- **Demand-Pull Inflation:** Occurs when aggregate demand for goods exceeds aggregate supply (*"Too much money chasing too few goods"*). Triggered by fiscal stimulus, monetary expansion, or export surges.
- **Cost-Push Inflation:** Occurs when production costs rise (raw material prices, oil price shocks, wage increases), forcing producers to raise prices regardless of demand level.
- **Headline Inflation vs. Core Inflation:**
  - *Headline Inflation:* Total inflation in the economy based on Consumer Price Index (CPI), including volatile food and fuel prices.
  - *Core Inflation:* Headline inflation **minus volatile food and energy sectors**. Reflects long-term sticky price trends.
  - **India's Inflation Targeting Framework:** RBI is legally mandated to target **CPI Inflation at $4\\% \\pm 2\\%$** ($2\\% - 6\\%$ tolerance band) under Section 45ZA of RBI Act, 1934.

#### 4. Landmark Five-Year Plans & Economic Reforms
- **1st Five-Year Plan (1951–56):** Based on **Harrod-Domar Model**. Heavy emphasis on agriculture, irrigation (Bhakra Nangal, Hirakud, Damodar Valley dams). Achieved $3.6\\%$ growth vs $2.1\\%$ target.
- **2nd Five-Year Plan (1956–61):** Based on **Nehru-Mahalanobis Model**. Focused on rapid industrialization and heavy basic industries (steel plants at Bhilai, Durgapur, Rourkela established with Soviet, British, and German collaboration).
- **3rd Five-Year Plan (1961–66):** Aimed at self-reliant agriculture and industry. Disrupted by 1962 Sino-Indian War, 1965 Indo-Pak War, and severe drought. Led to **Plan Holidays (1966–69)** and the launch of the **Green Revolution** (MS Swaminathan, Norman Borlaug, HYV seeds).
- **4th Five-Year Plan (1969–74):** Based on Gadgil formula. Nationalization of 14 major commercial banks (1969) and Operation Smiling Buddha (1974 nuclear test).
- **5th Five-Year Plan (1974–79):** Coined slogan **"Garibi Hatao"** (Poverty Eradication) and Self-Reliance. Terminated early by Janata Party government which launched the **Rolling Plan (1978–80)**.
- **LPG Reforms (1991):** Balance of Payments crisis ($1 billion foreign reserves left, sufficient for only 2 weeks of imports). P.V. Narasimha Rao (PM) and Dr. Manmohan Singh (Finance Minister) rolled out **Liberalization, Privatization, and Globalization (LPG)**: abolition of industrial licensing (License Raj), rupee devaluation, disinvestment, and FDI liberalization.
- **NITI Aayog (National Institution for Transforming India):** Replaced Planning Commission on **1 January 2015**. Think-tank focused on **Cooperative and Competitive Federalism**, bottom-up approach (unlike Planning Commission's top-down allocation). Chaired by Prime Minister.
"""
    },

    # =========================================================================
    # 5. INDIAN DEFENCE FORCES & STRATEGIC SECURITY
    # =========================================================================
    {
        "id": "defence-golden-military-security",
        "subject": "Defence",
        "topic": "Master Matrix: Military Hierarchy, Missiles, Commands, Naval Assets & Major Operations",
        "chapter": "Indian Armed Forces & Security Architecture",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Master Matrix: Military Hierarchy, Missiles, Commands, Naval Assets & Major Operations

#### 1. Equivalent Officer Ranks Across the Three Services
| Rank Hierarchy Tier | Indian Army (Green) | Indian Air Force (Sky Blue) | Indian Navy (Navy Blue) |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Commissioned)** | Lieutenant | Flying Officer | Sub-Lieutenant |
| **Tier 2** | Captain | Flight Lieutenant | Lieutenant |
| **Tier 3** | Major | Squadron Leader | Lieutenant Commander |
| **Tier 4** | Lieutenant Colonel | Wing Commander | Commander |
| **Tier 5** | Colonel | Group Captain | Captain |
| **Tier 6 (Brigadier)** | **Brigadier** (1-star) | **Air Commodore** (1-star) | **Commodore** (1-star) |
| **Tier 7 (Major Gen)** | **Major General** (2-star) | **Air Vice Marshal** (2-star) | **Rear Admiral** (2-star) |
| **Tier 8 (Lt Gen)** | **Lieutenant General** (3-star) | **Air Marshal** (3-star) | **Vice Admiral** (3-star) |
| **Tier 9 (Chief)** | **General** (4-star) | **Air Chief Marshal** (4-star) | **Admiral** (4-star) |
| **Ceremonial / War (5-Star)**| **Field Marshal** (Sam Manekshaw, KM Cariappa) | **Marshal of the IAF** (Arjan Singh) | **Admiral of the Fleet** (Never awarded yet) |

*Chief of Defence Staff (CDS):* 4-star General; permanent Chairman of Chiefs of Staff Committee (COSC); Secretary of Department of Military Affairs (DMA) under Ministry of Defence.

#### 2. Geographical Commands of the Indian Armed Forces
- **Total Commands:** 19 Commands (7 Army, 7 Air Force, 3 Navy, 2 Tri-Service Unified Commands).
- **Tri-Service Unified Commands:**
  1. **Andaman and Nicobar Command (ANC):** Port Blair (India's only operational theatre command).
  2. **Strategic Forces Command (SFC):** Responsible for the management and administration of the country's tactical and strategic nuclear weapons stockpile.
- **Indian Army Commands (7):**
  - Northern Command: **Udhampur**
  - Western Command: **Chandimandir**
  - Eastern Command: **Kolkata**
  - Southern Command: **Pune**
  - Central Command: **Lucknow**
  - South-Western Command: **Jaipur**
  - Army Training Command (ARTRAC): **Shimla**
- **Indian Air Force Commands (7):**
  - Western Air Command: **New Delhi**
  - South-Western Air Command: **Gandhinagar**
  - Central Air Command: **Prayagraj (Allahabad)**
  - Eastern Air Command: **Shillong**
  - Southern Air Command: **Thiruvananthapuram**
  - Training Command: **Bengaluru**
  - Maintenance Command: **Nagpur**
- **Indian Navy Commands (3):**
  - Western Naval Command: **Mumbai**
  - Eastern Naval Command: **Visakhapatnam**
  - Southern Naval Command: **Kochi** (Training command)

#### 3. Missiles of India & The IGMDP Program
Initiated in 1983 under the leadership of **Dr. A.P.J. Abdul Kalam** (Integrated Guided Missile Development Programme):
Mnemonic: **PATNA**
1. **P - Prithvi:** Surface-to-Surface, short-range ballistic missile (SRBM). Liquid-fueled. Range: $150-350\\text{ km}$.
2. **A - Agni:** Surface-to-Surface, medium to intercontinental ballistic missile (ICBM). Solid-fueled.
   - *Agni-I:* $700-1200\\text{ km}$ (Short/Medium Range).
   - *Agni-II:* $2000-2500\\text{ km}$ (Intermediate Range).
   - *Agni-III:* $3000-3500\\text{ km}$.
   - *Agni-IV:* $3500-4000\\text{ km}$.
   - *Agni-V:* $5000-8000\\text{ km}$ (Intercontinental Ballistic Missile / ICBM; equipped with **MIRV** - Multiple Independently Targetable Re-entry Vehicles tested under Mission Divyastra).
   - *Agni-P (Prime):* Canisterized two-stage solid propellant missile ($1000-2000\\text{ km}$).
3. **T - Trishul:** Short-range Surface-to-Air missile (SAM). Low-level quick reaction ($9\\text{ km}$).
4. **N - Nag:** 3rd generation **"Fire and Forget"** Anti-Tank Guided Missile (ATGM). Range: $4\\text{ km}$. Uses Imaging Infrared (IIR) guidance. Air-launched helicopter variant is **Helina** (Dhruvastra).
5. **A - Akash:** Medium-range Surface-to-Air missile (SAM). Range: $25-30\\text{ km}$. Uses **Ramjet propulsion** for supersonic speeds ($2.5-3.5\\text{ Mach}$); guided by indigenous **Rajendra 3D Radar**.
- **BrahMos:** Supersonic cruise missile jointly developed with Russia (NPO Mashinostroyeniya). Name derived from **Brahmaputra and Moskva rivers**. World's fastest operational cruise missile ($2.8-3.0\\text{ Mach}$). Two-stage propulsion (Solid booster + Liquid Ramjet). Universal launch platforms (Ship, Submarine, Land, Su-30MKI fighter).

#### 4. Landmark Indian Military Operations
| Operation Name | Year | Theatre / Context | Strategic Objective & Outcome |
| :--- | :--- | :--- | :--- |
| **Operation Polo** | 1948 | Hyderabad | Police action to integrate Hyderabad State into the Indian Union. |
| **Operation Vijay (I)** | 1961 | Goa, Daman & Diu | Liberation of Portuguese-held territories of Goa, Daman, and Diu. |
| **Operation Trident & Python** | 1971 | Karachi Harbor | Indian Navy missile boats (Osa-class) struck Karachi harbor, sinking PNS Khaibar and destroying oil reserves during Indo-Pak War. Celebrated as **Navy Day (4 December)**. |
| **Operation Meghdoot** | 1984 | Siachen Glacier | Pre-emptive air-landing by Kumaon Regiment onto Bilafond La and Sia La, securing the entire **Siachen Glacier** (world's highest battlefield). |
| **Operation Blue Star** | 1984 | Amritsar | Military operation to remove armed militants from the Golden Temple complex. |
| **Operation Cactus** | 1988 | Maldives | Indian paratroopers thwarted a coup attempt against President Maumoon Abdul Gayoom by mercenaries. |
| **Operation Vijay (II)** | 1999 | Kargil, J&K | Eviction of Pakistani regular troops and irregulars occupying strategic heights in Kargil, Dras, Batalik. Celebrated as **Kargil Vijay Diwas (26 July)**. |
| **Operation Safed Sagar** | 1999 | Kargil | IAF joint air operation deploying MiG-21, MiG-27, and Mirage 2000 using laser-guided bombs in high-altitude warfare. |
| **Operation Bandar** | 2019 | Balakot, Pakistan | IAF precision air strikes by Mirage 2000 fighters on Jaish-e-Mohammed terror training camps following Pulwama attack. |
"""
    },

    # =========================================================================
    # 6. ENVIRONMENT, ECOLOGY & BIODIVERSITY MASTER COMPENDIUM
    # =========================================================================
    {
        "id": "environment-golden-ecology-conventions",
        "subject": "Environment",
        "topic": "Master Matrix: Biosphere Reserves, Tiger Reserves, Ramsar Wetlands & Global Treaties",
        "chapter": "Ecology, Biodiversity & Global Treaties",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Master Matrix: Biosphere Reserves, Tiger Reserves, Ramsar Wetlands & Global Treaties

#### 1. The 18 Biosphere Reserves of India (12 in UNESCO MAB Network)
- **First Biosphere Reserve in India:** **Nilgiri Biosphere Reserve (1986)** — spans 3 states (**Tamil Nadu, Kerala, Karnataka**). Keystone fauna: Lion-tailed Macaque, Nilgiri Tahr.
- **Largest Biosphere Reserve:** **Gulf of Kachchh (Gujarat)** ($12,454\\text{ km}^2$).
- **Smallest Biosphere Reserve:** **Panna (Madhya Pradesh)** or **Dibru-Saikhowa (Assam)** ($765\\text{ km}^2$).
- **UNESCO World Network of Biosphere Reserves (12 in MAB):**
  1. Nilgiri (TN/Kerala/Karnataka - 2000)
  2. Gulf of Mannar (Tamil Nadu - 2001) — Dugong (Sea Cow)
  3. Sundarbans (West Bengal - 2001) — Royal Bengal Tiger, Mangroves
  4. Nanda Devi (Uttarakhand - 2004) — Snow Leopard, Himalayan Musk Deer
  5. Nokrek (Meghalaya - 2009) — Red Panda, Citrus indica (mother gene)
  6. Pachmarhi (Madhya Pradesh - 2009) — Giant Flying Squirrel
  7. Similipal (Odisha - 2009) — Royal Bengal Tiger, Asian Elephant
  8. Achanakmar-Amarkantak (MP/Chhattisgarh - 2012)
  9. Great Nicobar (Andaman & Nicobar - 2013) — Saltwater Crocodile, Nicobar Megapode
  10. Agasthyamala (Kerala/Tamil Nadu - 2016) — Asian Elephant, Kanikkarar tribe
  11. Khangchendzonga (Sikkim - 2018) — Snow Leopard, Musk Deer (Highest mixed UNESCO World Heritage Site)
  12. Panna (Madhya Pradesh - 2020) — Tiger, Sloth Bear, Ken River

#### 2. Key International Environmental Treaties & Conventions
| Treaty / Protocol | Year Signed / Effective | Primary Mandate & Environmental Target | High-Yield Distractor Trap |
| :--- | :--- | :--- | :--- |
| **Ramsar Convention** | 1971 (Iran) | Conservation and wise use of **Wetlands of International Importance**. | **Montreux Record:** Register of wetland sites where ecological changes have occurred, are occurring, or are likely to occur. In India: **Keoladeo National Park (Rajasthan)** and **Loktak Lake (Manipur)** are currently on Montreux Record. (Chilika Lake was on it, but removed after successful restoration). |
| **CITES** (Washington Convention) | 1973 | Ensures international trade in specimens of wild animals and plants does not threaten their survival. | Legally binding on Parties, but does not take the place of national laws. |
| **Montreal Protocol** | 1987 (Entry 1989) | Phasing out **Ozone Depleting Substances (ODS)** like Chlorofluorocarbons (CFCs) and Halons. | **Kigali Amendment (2016):** Legally binding amendment to phase down **Hydrofluorocarbons (HFCs)** (which don't deplete ozone but are potent greenhouse gases). Most successful treaty in UN history! |
| **Basel Convention** | 1989 | Control of Transboundary Movements of **Hazardous Wastes** and their disposal. | Does NOT cover radioactive wastes (which fall under IAEA). |
| **UNFCCC (Rio Earth Summit)** | 1992 | Stabilize greenhouse gas concentrations in the atmosphere to prevent dangerous climate change. | Non-binding treaty that gave birth to binding protocols (Kyoto, Paris). |
| **Convention on Biological Diversity (CBD)**| 1992 | Conservation of biological diversity, sustainable use of components, fair and equitable sharing of genetic benefits. | Supplemented by **Cartagena Protocol** (Biosafety - 2000) and **Nagoya Protocol** (Access and Benefit Sharing / ABS - 2010). |
| **Kyoto Protocol** | 1997 (Entry 2005) | Legally binding greenhouse gas reduction targets on **Annex I (developed) nations**. | Common But Differentiated Responsibilities (CBDR). Expired in 2020. |
| **Stockholm Convention** | 2001 | Elimination or restriction of **Persistent Organic Pollutants (POPs)** (The "Dirty Dozen" like DDT, Dioxins, PCBs). | POPs resist environmental degradation, bioaccumulate in fatty tissues, and biomagnify up the food chain. |
| **Rotterdam Convention** | 1998 | **Prior Informed Consent (PIC)** procedure for certain hazardous chemicals and pesticides in international trade. | Promotes shared responsibility in international chemical trade. |
| **Paris Agreement** | 2015 (COP21) | Limit global warming to **well below $2^\\circ\\text{C}$**, preferably to **$1.5^\\circ\\text{C}$** above pre-industrial levels. | Replaced Kyoto; applies to **ALL countries** via voluntary **Nationally Determined Contributions (NDCs)**. |
| **Minamata Convention** | 2013 | Protecting human health and the environment from adverse effects of **Mercury (Hg)** emissions. | Named after Minamata Bay, Japan (severe methylmercury neurological poisoning). |
"""
    }
]

def main():
    print("=" * 60)
    print("INJECTING MEGA A+ COMPENDIUMS (Physics, Chemistry, Biology, Economy, Defence, Environment)")
    print("=" * 60)

    if not os.path.exists(NOTES_DB):
        print(f"Error: {NOTES_DB} not found!")
        return

    with open(NOTES_DB, 'r', encoding='utf-8') as f:
        notes = json.load(f)

    existing_ids = {n.get('id') for n in notes}
    added = 0
    updated = 0

    for comp in mega_compendiums:
        cid = comp['id']
        if cid not in existing_ids:
            notes.append(comp)
            existing_ids.add(cid)
            added += 1
            print(f"Added Mega Compendium: [{comp['subject']}] {comp['topic']}")
        else:
            for idx, item in enumerate(notes):
                if item.get('id') == cid:
                    notes[idx] = comp
                    updated += 1
                    print(f"Updated existing Compendium: [{comp['subject']}] {comp['topic']}")
                    break

    with open(NOTES_DB, 'w', encoding='utf-8') as f:
        json.dump(notes, f, indent=2, ensure_ascii=False)

    print(f"\nSuccessfully processed {len(mega_compendiums)} Mega Compendiums ({added} newly added, {updated} updated).")
    print(f"Total notes in notes_database.json: {len(notes)}")

    print("\nRunning generate_frontend_notes.run()...")
    import generate_frontend_notes
    generate_frontend_notes.run()
    print("Frontend notes compilation complete!")

if __name__ == "__main__":
    main()
