import os

os.makedirs("evolved_notes/chemistry", exist_ok=True)

notes_data = {
    "acids-bases.md": """# Acids, Bases & pH Indicators

---

## **1. Theories of Acids and Bases**

*   **Arrhenius Theory:**
    *   **Acid:** A substance that releases Hydrogen ions ($H^+$) or Hydronium ions ($H_3O^+$) in an aqueous solution (e.g., HCl, $H_2SO_4$).
    *   **Base:** A substance that releases Hydroxyl ions ($OH^-$) in an aqueous solution (e.g., NaOH, KOH).
*   **Bronsted-Lowry Theory:**
    *   **Acid:** Proton ($H^+$) donor.
    *   **Base:** Proton ($H^+$) acceptor.
*   **Lewis Theory:**
    *   **Acid:** Electron-pair acceptor (electron deficient, e.g., $BF_3$, $AlCl_3$, $H^+$).
    *   **Base:** Electron-pair donor (has a lone pair, e.g., $NH_3$, $H_2O$, $F^-$).

---

## **2. pH Scale & Indicators**

*   **pH:** Represents the potential (power) of Hydrogen. Formula: **$pH = -\\log_{10}[H^+]$**.
*   **Scale at 298 K ($25^\\circ\\text{C}$):**
    *   $pH < 7$: Acidic (Lower the pH, stronger the acid).
    *   $pH = 7$: Neutral (Pure water).
    *   $pH > 7$: Basic/Alkaline (Higher the pH, stronger the base).
    *   *Note:* The pH of blood is slightly basic (**7.4**).

### **Acid-Base Indicators (Highly Tested)**

| Indicator | Color in Acidic Medium | Color in Basic Medium |
| :--- | :--- | :--- |
| **Blue Litmus** | Red | Remains Blue |
| **Red Litmus** | Remains Red | Blue |
| **Phenolphthalein** | Colorless | **Deep Pink** |
| **Methyl Orange** | **Red / Orange** | **Yellow** |
| **Turmeric (Natural)** | Yellow | Red |

---

## **3. Key Chemical Salts and Formulas**

*   **Baking Soda ($NaHCO_3$):** Sodium Hydrogen Carbonate. Used in baking (releases $CO_2$ making cakes fluffy), as an antacid, and in soda-acid fire extinguishers.
*   **Washing Soda ($Na_2CO_3 \\cdot 10H_2O$):** Sodium Carbonate Decahydrate. Used in glass, soap, paper industries, and for removing the permanent hardness of water.
*   **Plaster of Paris (POP) ($CaSO_4 \\cdot \\frac{1}{2}H_2O$):** Calcium Sulphate Hemihydrate. Obtained by heating Gypsum ($CaSO_4 \\cdot 2H_2O$) at 373 K. Used for plastering fractured bones and making toys/casts.
*   **Bleaching Powder ($CaOCl_2$):** Calcium Oxychloride. Formed by the action of chlorine gas on dry slaked lime [$Ca(OH)_2$]. Used for disinfecting drinking water.

---

## **Visual Summary**

```mermaid
mindmap
  root((Acids & Bases))
    Theories
      Arrhenius: H⁺/OH⁻
      Bronsted: Proton donor/acc
      Lewis: Electron pair acc/donor
    pH Scale
      pH = -log[H⁺]
      Acid < 7, Base > 7
      Blood pH = 7.4
    Indicators
      Phenolphthalein: Pink in Base
      Methyl Orange: Yellow in Base
    Salts
      Baking Soda: NaHCO₃
      Washing Soda: Na₂CO₃·10H₂O
      POP: CaSO₄·½H₂O
```
""",
    "syl-numerical.md": """# Chemical Bonding & Periodic Table

---

## **1. Types of Chemical Bonds**

*   **Ionic (Electrovalent) Bond:** Formed by the **complete transfer** of electrons from a metal to a non-metal (e.g., NaCl, $CaCl_2$).
    *   *Properties:* High melting/boiling points, soluble in water, conduct electricity in molten state or aqueous solution (but insulators in solid state).
*   **Covalent Bond:** Formed by the **equal sharing** of electrons between two non-metals (e.g., $H_2$, $O_2$, $H_2O$, $CH_4$).
    *   *Properties:* Low melting/boiling points, generally insoluble in water, poor conductors of electricity.
*   **Coordinate (Dative) Bond:** A special covalent bond where the shared pair of electrons is donated by only ONE atom, but shared by both (e.g., $NH_4^+$, $H_3O^+$).
*   **Hydrogen Bond:** The electrostatic force of attraction between a covalently bonded hydrogen atom and a highly electronegative atom (**F, O, N only**).
    *   *Intermolecular:* Between different molecules (e.g., $H_2O$, HF). This explains why water is a liquid with a high boiling point while $H_2S$ is a gas.
    *   *Intramolecular:* Within the same molecule.

---

## **2. Modern Periodic Table & Periodic Trends**

Developed by Henry Moseley, it is based on **Atomic Number** (number of protons). It contains **18 Groups** (vertical columns) and **7 Periods** (horizontal rows).

### **Periodic Trends (Highly Tested)**

| Property | Across a Period (Left to Right) | Down a Group (Top to Bottom) | Reason |
| :--- | :--- | :--- | :--- |
| **Atomic Radius** | **Decreases** | **Increases** | L-R: Effective nuclear charge increases. T-B: New shells are added. |
| **Ionization Energy (IE)** | **Increases** | **Decreases** | Energy required to remove the outermost electron. |
| **Electronegativity** | **Increases** | **Decreases** | Tendency to attract shared electrons. Fluorine is the most electronegative. |
| **Metallic Character** | **Decreases** | **Increases** | Tendency to lose electrons (electropositivity). Francium/Cesium are highly metallic. |
| **Non-Metallic Character** | **Increases** | **Decreases** | Tendency to gain electrons. |

> [!TIP]
> **EXAM TRAP:** **Electron Affinity** generally follows the same trend as Electronegativity (increases left to right), BUT Chlorine (Cl) has a higher electron affinity than Fluorine (F) due to Fluorine's extremely small size causing electron-electron repulsion.
""",
    "metals-alloys.md": """# Metals, Ores, Alloys & Metallurgy

---

## **1. Important Ores of Metals**

Ores are minerals from which metals can be extracted profitably.
*   **Aluminum (Al):** Bauxite ($Al_2O_3 \\cdot 2H_2O$), Cryolite ($Na_3AlF_6$).
*   **Iron (Fe):** Hematite ($Fe_2O_3$), Magnetite ($Fe_3O_4$), Siderite ($FeCO_3$).
*   **Copper (Cu):** Copper Pyrite ($CuFeS_2$), Cuprite ($Cu_2O$).
*   **Mercury (Hg):** Cinnabar (HgS).
*   **Lead (Pb):** Galena (PbS).
*   **Zinc (Zn):** Zinc Blende (ZnS), Calamine ($ZnCO_3$).
*   **Uranium (U):** Pitchblende.

---

## **2. Important Alloys & their Composition**

An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal.

| Alloy | Composition | Uses |
| :--- | :--- | :--- |
| **Brass** | Copper (Cu) + Zinc (Zn) | Utensils, decorative items. |
| **Bronze** | Copper (Cu) + Tin (Sn) | Statues, medals, coins. |
| **Solder** | Lead (Pb) + Tin (Sn) | Soldering electrical wires (has a low melting point). |
| **Duralumin** | Al + Cu + Mg + Mn | Aircraft bodies (lightweight and strong). |
| **Stainless Steel** | Fe + C + Cr + Ni | Utensils, surgical instruments (does not rust). |
| **Amalgam** | Mercury (Hg) + any other metal | Dental fillings (e.g., silver amalgam). |

---

## **3. Metallurgy (Extraction of Metals)**

1.  **Concentration of Ore:** Removing gangue (impurities).
    *   *Froth Flotation Process:* Used specifically for **Sulphide Ores** (e.g., ZnS, PbS, CuFeS₂). Based on the wetting properties of the ore (wetted by pine oil) and gangue (wetted by water).
2.  **Conversion to Oxide:**
    *   **Roasting:** Heating the ore in the **presence of excess air**. Used for **Sulphide ores**. ($2ZnS + 3O_2 \\rightarrow 2ZnO + 2SO_2$).
    *   **Calcination:** Heating the ore in the **absence/limited supply of air**. Used for **Carbonate ores**. ($ZnCO_3 \\rightarrow ZnO + CO_2$).
3.  **Reduction:** Converting metal oxide to metal using reducing agents like Carbon (smelting). Highly reactive metals (Na, K, Ca, Al) are extracted by **Electrolytic Reduction**.
""",
    "reactivity-series.md": """# Reactivity Series & Displacement Reactions

---

## **1. The Reactivity Series of Metals**

A list of metals arranged in the order of their decreasing chemical reactivity.

**K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Hg > Ag > Au > Pt**

*   **Most Reactive:** Potassium (K), Sodium (Na). (Kept immersed in kerosene oil because they vigorously react with oxygen and moisture).
*   **Moderately Reactive:** Zinc (Zn), Iron (Fe), Lead (Pb).
*   **Least Reactive (Noble Metals):** Silver (Ag), Gold (Au), Platinum (Pt). (Do not corrode easily, found in free state in nature).

### **Mnemonic to Remember:**
*Please Stop Calling Me A Careless Zebra, Instead Try Learning How Copper Saves Gold.*
(Potassium, Sodium, Calcium, Magnesium, Aluminium, (Carbon), Zinc, Iron, Tin, Lead, (Hydrogen), Copper, Silver, Gold).

---

## **2. Reactions with Water**

*   **Cold Water:** K, Na, Ca react violently with cold water to form hydroxides and $H_2$ gas.
*   **Hot Water:** Mg does not react with cold water, but reacts with hot water.
*   **Steam:** Al, Zn, Fe do not react with cold/hot water, but react with steam to form metal oxides and $H_2$ gas.
*   **No Reaction:** Pb, Cu, Ag, Au do not react with water at all.

---

## **3. Displacement Reactions**

A more reactive metal displaces a less reactive metal from its salt solution.

*   **Example 1:** $Fe + CuSO_4 \\rightarrow FeSO_4 + Cu$
    *   Iron is more reactive than Copper. The blue color of Copper Sulphate fades and a brown coating of copper deposits on the iron nail.
*   **Example 2:** $Cu + FeSO_4 \\rightarrow \\text{No Reaction}$
    *   Copper is less reactive than Iron, so it cannot displace it.
*   **Thermite Reaction:** A highly exothermic displacement reaction used to join railway tracks.
    *   $Fe_2O_3(s) + 2Al(s) \\rightarrow 2Fe(l) + Al_2O_3(s) + \\text{Heat}$
    *   Aluminium displaces Iron because Al > Fe in the series. The heat generated melts the iron.
""",
    "carbon-compounds.md": """# Carbon & its Compounds

---

## **1. Allotropes of Carbon**

Allotropes are different physical forms in which an element can exist.

*   **Diamond:** Each carbon atom is bonded to 4 other carbon atoms forming a rigid 3D tetrahedral structure (**$sp^3$ hybridization**). It is the hardest natural substance. It does not conduct electricity (no free electrons).
*   **Graphite:** Each carbon atom is bonded to 3 other carbon atoms in the same plane, forming hexagonal arrays placed in layers (**$sp^2$ hybridization**). One electron is free, making graphite a **good conductor of electricity**. The layers can slide over each other, making it soft and a good solid lubricant.
*   **Fullerenes:** Contains discrete molecules like **Buckminsterfullerene (C-60)**, which resembles a soccer ball.
*   **Graphene:** A single layer of graphite (2D material). Extremely strong and an excellent conductor.

---

## **2. Hydrocarbons**

Compounds composed exclusively of Carbon and Hydrogen.

### **Aliphatic Hydrocarbons (Open Chain)**
1.  **Alkanes (Saturated):** Contain only single bonds (C-C).
    *   General Formula: **$C_nH_{2n+2}$**
    *   E.g., Methane ($CH_4$), Ethane ($C_2H_6$). Undergo substitution reactions.
2.  **Alkenes (Unsaturated):** Contain at least one double bond (C=C).
    *   General Formula: **$C_nH_{2n}$**
    *   E.g., Ethene ($C_2H_4$). Undergo addition reactions.
3.  **Alkynes (Unsaturated):** Contain at least one triple bond (C≡C).
    *   General Formula: **$C_nH_{2n-2}$**
    *   E.g., Ethyne/Acetylene ($C_2H_2$). Used in oxy-acetylene welding.

---

## **3. Important Chemical Reactions of Organic Compounds**

*   **Combustion:** Saturated hydrocarbons burn with a clean blue flame, while unsaturated hydrocarbons burn with a yellow, sooty flame.
*   **Esterification:** Reaction between a carboxylic acid and an alcohol in the presence of an acid catalyst to form a sweet-smelling substance called an **Ester**.
    *   $CH_3COOH \\text{ (Acetic Acid)} + C_2H_5OH \\text{ (Ethanol)} \\xrightarrow{H^+} CH_3COOC_2H_5 \\text{ (Ethyl Acetate)} + H_2O$
*   **Saponification:** The reverse of esterification. Esters react with alkalis (NaOH/KOH) to form the sodium/potassium salt of a carboxylic acid (**Soap**) and alcohol.
""",
    "chemistry-numericals.md": """# Mole Concept & Concentration Terms

---

## **1. The Mole Concept**

*   **1 Mole:** Contains **$6.022 \\times 10^{23}$** particles (Avogadro's Number, $N_A$).
*   **Molar Mass:** The mass of 1 mole of a substance in grams (numerically equal to atomic/molecular mass in 'u').
*   **Volume at STP:** 1 mole of any ideal gas occupies **22.4 Liters** at Standard Temperature and Pressure (273.15 K and 1 atm).

### **Basic Formulas:**
*   $\\text{Number of Moles (n)} = \\frac{\\text{Given Mass (m)}}{\\text{Molar Mass (M)}}$
*   $\\text{Number of Particles} = n \\times N_A$

---

## **2. Concentration Terms**

Used to express the strength of a solution.

### **A. Temperature Dependent (Involve Volume)**
Volume changes with temperature, hence these change with temperature.
*   **Molarity (M):** Number of moles of solute dissolved per Liter of solution.
    *   $M = \\frac{\\text{Moles of Solute}}{\\text{Volume of Solution (in L)}}$
*   **Normality (N):** Number of gram equivalents of solute dissolved per Liter of solution.
    *   $N = Molarity \\times \\text{n-factor}$
    *   *n-factor:* For acids, it's basicity (number of replaceable $H^+$). For bases, it's acidity (replaceable $OH^-$). E.g., for $H_2SO_4$, n=2.

### **B. Temperature Independent (Involve Mass)**
Mass does not change with temperature.
*   **Molality (m):** Number of moles of solute dissolved per **Kilogram of SOLVENT** (not solution).
    *   $m = \\frac{\\text{Moles of Solute}}{\\text{Mass of Solvent (in kg)}}$
    *   *Note: Molality is preferred over Molarity in physical chemistry because it is temperature independent.*
*   **Mole Fraction ($x$):** Ratio of moles of one component to total moles in solution.
    *   $x_A = \\frac{n_A}{n_A + n_B}$. Note: $x_A + x_B = 1$.
""",
    "chemistry-everyday-fertilisers.md": """# Everyday Chemistry, Fertilisers & Fuels

---

## **1. Cleansing Agents**

*   **Soaps:** Sodium or Potassium salts of long-chain fatty acids (e.g., Sodium stearate).
    *   Prepared by **Saponification** (Fat/Oil + NaOH $\\rightarrow$ Soap + Glycerol).
    *   *Limitation:* Do not work in hard water. They form insoluble precipitates called **Scum** with Calcium and Magnesium ions present in hard water.
*   **Detergents:** Sodium salts of long-chain alkyl benzene sulphonates.
    *   *Advantage:* Work well in both hard and soft water because their calcium and magnesium salts are soluble.
    *   *Disadvantage:* Non-biodegradable, causing water pollution.

---

## **2. Industrial Materials**

*   **Glass:** Not a true solid, but an amorphous solid or a **supercooled liquid**. Chiefly composed of silica ($SiO_2$) and metal silicates. (Adding Cobalt oxide gives blue glass, Chromium gives green).
*   **Cement:** A mixture of calcium silicates and aluminates.
    *   **Gypsum ($CaSO_4 \\cdot 2H_2O$)** is added to cement to **retard the setting time**, giving workers enough time to pour and shape the concrete before it hardens.
*   **Fertilisers:** Used to supply essential nutrients to plants.
    *   Primary nutrients (**NPK**): Nitrogen (for leaf growth), Phosphorus (for root growth), Potassium (for overall health and disease resistance).
    *   *Urea:* $NH_2CONH_2$. The most widely used nitrogenous fertilizer. It is organic but synthesized industrially.

---

## **3. Fuels**

*   **LPG (Liquefied Petroleum Gas):** Mixture mainly of **Butane** and Propane. Ethyl mercaptan is added to it to give a strong smell for detecting gas leaks (since LPG is odorless).
*   **CNG (Compressed Natural Gas) & Biogas:** Chiefly composed of **Methane ($CH_4$)**.
*   **Water Gas:** Mixture of $CO$ and $H_2$.
*   **Producer Gas:** Mixture of $CO$ and $N_2$.
""",
    "environmental-chemistry.md": """# Environmental Chemistry & Pollution

---

## **1. Air Pollution**

*   **Acid Rain:** Normal rain has a pH around 5.6 (due to dissolved $CO_2$). When pH falls below 5.6, it is called acid rain.
    *   *Causes:* Oxides of Sulphur ($SO_2$) and Nitrogen ($NO_2$) from burning fossil fuels.
    *   *Reactions:* $SO_2 + H_2O + O_2 \\rightarrow H_2SO_4$ (Sulphuric Acid) and $NO_2 \\rightarrow HNO_3$ (Nitric Acid).
    *   *Impacts:* Damages monuments (Taj Mahal turning yellow due to "Marble Cancer"), destroys aquatic life, leaches nutrients from soil.
*   **Greenhouse Effect & Global Warming:** Heating of the Earth's atmosphere due to trapping of infrared radiation.
    *   *Major Greenhouse Gases (GHGs):* **Carbon dioxide ($CO_2$ - major contributor)**, Methane ($CH_4$), Nitrous Oxide ($N_2O$), CFCs, and Water Vapor.
*   **Ozone Depletion:** The ozone layer in the Stratosphere protects us from UV rays.
    *   Depleted primarily by **Chlorofluorocarbons (CFCs)**. Chlorine atoms act as catalysts to break down $O_3$ into $O_2$.

### **Types of Smog**
| Classical (London) Smog | Photochemical (Los Angeles) Smog |
| :--- | :--- |
| Occurs in cool, humid climates. | Occurs in warm, dry, and sunny climates. |
| Smoke, fog, and $SO_2$. | Sunlight reacts with Nitrogen Oxides and Hydrocarbons. |
| It is a reducing mixture. | It is an oxidizing mixture. |
| *No ozone present.* | Contains Ozone, **PAN (Peroxyacetyl nitrate)**, Formaldehyde. Causes severe eye irritation. |

---

## **2. Water Pollution**

*   **BOD (Biochemical Oxygen Demand):** The amount of oxygen required by bacteria to break down organic matter present in a certain volume of a sample of water.
    *   **Rule:** The greater the BOD, the more polluting the water is. Clean water has BOD < 5 ppm.
*   **Eutrophication:** Nutrient enrichment (nitrates and phosphates from fertilizers/sewage) of a water body causing dense growth of plant life (algal bloom) and death of animal life from lack of oxygen.
*   **Biological Magnification:** Increase in the concentration of toxic substances (like DDT, Mercury) at successive trophic levels of a food chain.
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/chemistry", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Chemistry notes generated.")
