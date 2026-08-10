import os

os.makedirs("evolved_notes/biology", exist_ok=True)

notes_data = {
    "cell-structure.md": """# Cell Biology, Genetics & Structure

---

## **1. Cell Theory & Classification**

*   The cell is the basic structural and functional unit of life. Discovered by **Robert Hooke** in 1665 (observed dead cork cells). Living cells were first seen by **Antonie van Leeuwenhoek**.
*   **Cell Theory:** Proposed by Schleiden (Botanist) and Schwann (Zoologist). Later expanded by Rudolf Virchow who stated *"Omnis cellula-e-cellula"* (all cells arise from pre-existing cells).

### **Prokaryotes vs Eukaryotes**
| Feature | Prokaryotic Cells | Eukaryotic Cells |
| :--- | :--- | :--- |
| **Nucleus** | Absent (Nucleoid present). No nuclear membrane. | True nucleus enclosed in a nuclear membrane. |
| **Organelles** | Lacks membrane-bound organelles. | Contains membrane-bound organelles (Mitochondria, Golgi, ER). |
| **Ribosomes** | **70S** | **80S** |
| **Examples** | Bacteria, Blue-Green Algae (Cyanobacteria). | Plants, Animals, Fungi. |

---

## **2. Vital Cell Organelles**

*   **Plasma Membrane:** Selectively permeable boundary made of a phospholipid bilayer and proteins (Fluid Mosaic Model). Present in both plant and animal cells.
*   **Cell Wall:** Non-living, rigid structure located outside the plasma membrane. Found in Plants (made of Cellulose), Fungi (made of Chitin), and Bacteria (made of Peptidoglycan). **Absent in animal cells.**
*   **Mitochondria (Powerhouse of the Cell):** Site of aerobic cellular respiration. Produces energy in the form of **ATP**. It is a semi-autonomous organelle as it contains its own circular DNA and 70S ribosomes.
*   **Plastids (Chloroplasts):** Found only in plant cells. The "Kitchen of the cell" containing chlorophyll for photosynthesis. Also semi-autonomous (own DNA).
*   **Ribosomes:** Non-membrane bound. The "Protein Factories" of the cell.
*   **Lysosomes (Suicide Bags):** Contain powerful hydrolytic (digestive) enzymes. They destroy foreign material and, under cellular stress/damage, burst to digest their own cell.
*   **Endoplasmic Reticulum (ER):** 
    *   *Rough ER (RER):* Studded with ribosomes; involved in protein synthesis.
    *   *Smooth ER (SER):* Lacks ribosomes; synthesizes lipids and detoxifies poisons.
*   **Golgi Apparatus:** Packaging, modification, and dispatching of materials. Forms lysosomes.

---

## **3. Cell Division**

1.  **Mitosis (Equational Division):**
    *   Occurs in somatic (body) cells for growth, repair, and replacement.
    *   A diploid parent cell ($2n$) divides into **two identical diploid daughter cells** ($2n$).
2.  **Meiosis (Reductional Division):**
    *   Occurs in reproductive (germ) cells to produce gametes (sperm/egg).
    *   A diploid parent cell ($2n$) divides into **four non-identical haploid daughter cells** ($n$).
    *   *Crossing Over:* Exchange of genetic material during Prophase-I (Pachytene stage), which introduces genetic variation.

---

## **Visual Summary**

```mermaid
mindmap
  root((Cell Biology))
    Cell Types
      Prokaryotes (70S, no envelope)
      Eukaryotes (80S, true nucleus)
    Organelles
      Mitochondria (ATP, own DNA)
      Chloroplasts (Photosynthesis, own DNA)
      Lysosomes (Hydrolytic enzymes)
      Ribosomes (Protein synthesis)
    Division
      Mitosis (Somatic, 2n -> 2n)
      Meiosis (Gametes, 2n -> 4x n)
      Crossing Over (Variation)
```
""",
    "human-systems.md": """# Vital Human Systems & Physiology

---

## **1. Circulatory System & Blood Components**

The human heart is **4-chambered** (two auricles, two ventricles) and exhibits double circulation, preventing mixing of oxygenated and deoxygenated blood.
*   **SA Node (Sino-Atrial Node):** Known as the natural pacemaker of the heart, located in the right auricle.
*   **Arteries:** Carry oxygenated blood away from the heart (Exception: Pulmonary Artery).
*   **Veins:** Carry deoxygenated blood towards the heart (Exception: Pulmonary Vein). Have valves to prevent backflow.

### **Blood Components (pH = 7.4, slightly basic)**
*   **Plasma (55%):** Liquid matrix containing water, proteins, and dissolved nutrients.
*   **Red Blood Cells (RBCs/Erythrocytes):** 
    *   Contain Iron-rich **Hemoglobin** (transports $O_2$).
    *   Lifespan is ~120 days.
    *   Mature mammalian RBCs **lack a nucleus** (except camel/llama) to maximize space for oxygen.
    *   Destroyed in the **Spleen** (known as the graveyard of RBCs).
*   **White Blood Cells (WBCs/Leukocytes):** Immune system cells. (Neutrophils, Lymphocytes, Monocytes, etc.).
*   **Platelets (Thrombocytes):** Responsible for blood clotting (Requires Calcium ions and Vitamin K).

### **Blood Groups**
*   **O Negative ($O^-$):** Universal Donor (Lacks antigens on RBC surface).
*   **AB Positive ($AB^+$):** Universal Recipient (Lacks antibodies in plasma).

---

## **2. Endocrine System (Ductless Glands)**

Secretions from endocrine glands are called **Hormones**.

*   **Pituitary Gland:** The "Master Gland" (controlled by the hypothalamus). Secretes Growth Hormone (GH).
*   **Thyroid Gland:** Secretes Thyroxine (regulates metabolism). Requires Iodine. Deficiency causes Goitre.
*   **Adrenal Gland:** Secretes Adrenaline (Epinephrine) – the "Fight or Flight" emergency hormone that increases heart rate and blood pressure during stress.
*   **Pancreas (Mixed Gland):** Functions as both exocrine and endocrine. The Islets of Langerhans contain:
    *   **Alpha Cells:** Secrete **Glucagon** (Increases blood sugar).
    *   **Beta Cells:** Secrete **Insulin** (Decreases blood sugar). Deficiency causes Diabetes Mellitus.

---

## **3. Digestive System Enzymes**

Digestion involves the breakdown of complex food into simpler forms.
*   **Mouth (Saliva):** Contains **Salivary Amylase** (Ptyalin) which begins the digestion of starch (carbohydrates).
*   **Stomach:** Secretes gastric juice containing HCl (kills bacteria, creates acidic medium) and **Pepsin** (digests proteins).
*   **Liver:** Largest gland. Secretes **Bile** (stored in Gallbladder). Bile has no enzymes but helps in the *emulsification of fats* and makes the medium alkaline.
*   **Pancreas:** Secretes Trypsin (proteins), Lipase (fats), and Amylase (carbohydrates) into the small intestine.
""",
    "diseases.md": """# Human Diseases, Pathogens & Nutrition

---

## **1. Infectious Diseases Classification (UPSC Favorite)**

### **Bacterial Diseases**
*   **Tuberculosis (TB):** Caused by *Mycobacterium tuberculosis*. Affects lungs. Prevented by **BCG Vaccine**.
*   **Typhoid:** Caused by *Salmonella typhi*. Spread through contaminated food/water. Diagnosed by the **Widal Test**.
*   **Cholera:** Caused by *Vibrio cholerae*. Severe dehydration.

### **Viral Diseases**
*   **Dengue:** Caused by Flavivirus. Spread by **Aedes aegypti** mosquito. Causes a severe drop in platelet count (break-bone fever).
*   **AIDS (Acquired Immunodeficiency Syndrome):** Caused by **HIV** (a Retrovirus). Destroys Helper T-cells, crashing the immune system. Diagnosed by **ELISA Test**.
*   **Polio:** Affects the central nervous system. Vaccines: Salk (Injected - killed virus) and Sabin (Oral - live attenuated).

### **Protozoan Diseases**
*   **Malaria:** Caused by *Plasmodium* parasites. Spread by the **Female Anopheles** mosquito. (Male mosquitoes only feed on plant nectars, they do not bite). Treated with Quinine (derived from Cinchona tree bark).
*   **Kala-azar (Visceral Leishmaniasis):** Spread by the **Sandfly**.

---

## **2. Nutritional Deficiency Diseases**

Vitamins are organic compounds required in small amounts. They do not provide energy but regulate metabolism.

| Vitamin / Chemical Name | Solubility | Deficiency Disease |
| :--- | :--- | :--- |
| **Vitamin A (Retinol)** | Fat-Soluble | **Night Blindness**, Xerophthalmia |
| **Vitamin B1 (Thiamine)** | Water-Soluble | **Beriberi** |
| **Vitamin B3 (Niacin)** | Water-Soluble | **Pellagra** |
| **Vitamin B12 (Cyanocobalamin)**| Water-Soluble | **Pernicious Anemia** (Contains Cobalt) |
| **Vitamin C (Ascorbic Acid)** | Water-Soluble | **Scurvy** (Bleeding gums, poor wound healing) |
| **Vitamin D (Calciferol)** | Fat-Soluble | **Rickets** (in children - bowed legs), Osteomalacia (adults) |
| **Vitamin E (Tocopherol)** | Fat-Soluble | Sterility / Muscular weakness |
| **Vitamin K (Phylloquinone)** | Fat-Soluble | **Delayed blood clotting** |

> [!TIP]
> **EXAM TRAP:** Fat-soluble vitamins are **A, D, E, K** (can be stored in liver/fat tissues). Water-soluble vitamins are **B and C** (cannot be stored, excreted in urine).
""",
    "immunity-vaccines.md": """# Immunity & Vaccines

---

## **1. Types of Immunity**

The body's defense mechanism against disease-causing organisms.

### **A. Innate (Natural) Immunity**
Present from birth. It is non-specific (acts the same way against all pathogens).
*   **Physical Barriers:** Skin, mucous membranes in respiratory/gut tracts.
*   **Physiological Barriers:** Acid in the stomach (HCl), saliva in the mouth, tears in eyes (contain lysozyme which destroys bacteria).
*   **Cellular Barriers:** Phagocytic WBCs like Macrophages and Neutrophils that engulf microbes.

### **B. Acquired (Adaptive) Immunity**
Developed during one's lifetime. It is pathogen-specific and characterized by memory.
*   **Humoral Immune Response:** Mediated by **B-Lymphocytes (B-cells)**. They produce proteins called **Antibodies** in the blood to fight pathogens.
*   **Cell-Mediated Immunity (CMI):** Mediated by **T-Lymphocytes (T-cells)**. T-cells help B-cells produce antibodies and directly attack infected cells. (This system is what rejects transplanted organs).

---

## **2. Active vs Passive Immunity**

*   **Active Immunity:** The host's own body produces antibodies when exposed to antigens (living/dead microbes). It is slow but long-lasting.
    *   *Examples:* Getting infected by a disease and recovering; **Vaccination** (injecting attenuated/dead microbes).
*   **Passive Immunity:** Ready-made antibodies are directly given to protect the body against foreign agents. It provides fast, temporary relief.
    *   *Examples:* **Colostrum** (yellowish milk produced by the mother in initial days of lactation contains abundant IgA antibodies); Anti-tetanus serum (ATS); Anti-venom for snake bites.

---

## **3. Types of Vaccines**

Vaccines train the immune system to recognize and combat pathogens without causing the disease.

*   **Live-Attenuated Vaccines:** Use a weakened (attenuated) form of the germ. Provide strong, long-lasting immunity. (e.g., MMR, **OPV - Oral Polio Vaccine**, **BCG**).
*   **Inactivated/Killed Vaccines:** Use the killed version of the germ. Usually require booster shots. (e.g., Rabies, **Salk Polio Vaccine**, Covaxin).
*   **Toxoid Vaccines:** Use a toxin (harmful product) made by the germ that causes a disease, creating immunity to the parts of the germ that cause a disease. (e.g., Tetanus, Diphtheria).
*   **mRNA Vaccines:** Teach cells how to make a protein (or piece of protein) that triggers an immune response. (e.g., Pfizer/Moderna COVID-19 vaccines).
""",
    "plant-kingdom.md": """# Plant Kingdom Classification

---

## **1. Cryptogams (Seedless, Non-flowering Plants)**

Plants that reproduce via spores.

*   **Thallophyta:**
    *   Plant body is not differentiated into roots, stems, or leaves (called a thallus).
    *   Mainly aquatic. No vascular system.
    *   *Examples:* **Algae** (Spirogyra, Ulothrix, Volvox).
*   **Bryophyta:**
    *   Known as the **"Amphibians of the Plant Kingdom"** because they live in soil but require water for sexual reproduction (sperms must swim to eggs).
    *   Plant body has root-like, stem-like, leaf-like structures, but lack true vascular tissue (xylem/phloem).
    *   *Examples:* Mosses (Funaria), Riccia, Marchantia.
*   **Pteridophyta:**
    *   The **first terrestrial plants to possess vascular tissues** (Xylem and Phloem).
    *   Plant body is differentiated into true roots, stem, and leaves.
    *   *Examples:* **Ferns**, Marsilea, Equisetum.

---

## **2. Phanerogams (Seed-bearing Plants)**

Plants with well-differentiated reproductive tissues that ultimately produce seeds.

*   **Gymnosperms:**
    *   Bear **Naked Seeds** (seeds are not enclosed inside a fruit).
    *   Usually perennial, evergreen, and woody.
    *   *Examples:* **Pine (Pinus)**, **Cycas**, Deodar.
*   **Angiosperms:**
    *   Bear **Enclosed Seeds** (seeds develop inside an ovary which modifies to become a fruit). These are **Flowering Plants**.
    *   Divided into two groups based on the number of cotyledons (seed leaves):
        1.  **Monocots:** Seeds with one cotyledon. Leaves have parallel venation. Fibrous root system. (e.g., Wheat, Rice, Maize).
        2.  **Dicots:** Seeds with two cotyledons. Leaves have reticulate (network) venation. Tap root system. (e.g., Pea, Mango, Gram).

---

## **Visual Summary**

```mermaid
graph TD
    A[Plant Kingdom] --> B[Cryptogams (No Seeds)]
    A --> C[Phanerogams (Seeds)]
    
    B --> D[Thallophyta (Algae)]
    B --> E[Bryophyta (Amphibians)]
    B --> F[Pteridophyta (Vascular, Ferns)]
    
    C --> G[Gymnosperms (Naked Seeds)]
    C --> H[Angiosperms (Flowers, Fruits)]
    
    H --> I[Monocots]
    H --> J[Dicots]
```
""",
    "animal-kingdom.md": """# Animal Kingdom Classification

---

## **1. Non-Chordates (Invertebrates)**

Animals without a notochord/backbone.

*   **Porifera (Sponges):** Cellular level of organization. Non-motile animals attached to solid support. Body has pores (ostia) leading to a canal system for water transport. (e.g., Sycon, Spongilla).
*   **Coelenterata / Cnidaria:** Tissue level organization. Aquatic. Have specialized cells called **Cnidoblasts** (stinging cells) for defense/capturing prey. Show polymorphism (Polyp and Medusa forms). (e.g., Hydra, Jellyfish, Corals).
*   **Platyhelminthes (Flatworms):** Bilaterally symmetrical, triploblastic, acoelomate (no true body cavity). Many are parasites. (e.g., Tapeworm, Liver fluke, Planaria).
*   **Aschelminthes (Roundworms):** Pseudocoelomates (false body cavity). Parasitic. (e.g., Ascaris/Roundworm, Wuchereria/Filarial worm).
*   **Annelida:** True coelomates. Metamerically **segmented** body. (e.g., Earthworm, Leech).
*   **Arthropoda (Jointed Legs):** **Largest phylum** in the animal kingdom (includes insects). Have an exoskeleton made of **Chitin**. Open circulatory system. (e.g., Cockroach, Butterfly, Spider, Scorpion).
*   **Mollusca:** Second largest phylum. Soft-bodied, generally covered by a hard calcareous shell. (e.g., Snail, Octopus, Squid).
*   **Echinodermata:** Spiny-skinned animals. Exclusively marine. Possess a unique **Water Vascular System** for locomotion and feeding. Radially symmetrical as adults. (e.g., Starfish, Sea Urchin).

---

## **2. Chordates (Vertebrates)**

Possess a Notochord (dorsal nerve cord) at some stage of life.

*   **Pisces (Fishes):** Aquatic, breathe through gills. Cold-blooded. **2-chambered heart**. (e.g., Sharks, Rohu).
*   **Amphibia:** Can live on land and in water. Breathe through gills (larvae) and lungs/skin (adults). Cold-blooded. **3-chambered heart**. (e.g., Frog, Toad, Salamander).
*   **Reptilia:** Creeping/crawling animals. Dry, cornified skin with scales. Cold-blooded. **3-chambered heart** (Except **Crocodiles which have a 4-chambered heart**). (e.g., Snakes, Lizards, Turtles).
*   **Aves (Birds):** Forelimbs modified into wings. Have feathers. Breathe through lungs. **Warm-blooded**. **4-chambered heart**. Bones are hollow (pneumatic).
*   **Mammalia:** Have **Mammary glands** to produce milk. Skin has hair. Warm-blooded. 4-chambered heart. (e.g., Humans, Whales, Bats, Platypus - note: Platypus is an egg-laying mammal).
""",
    "plant-reproduction.md": """# Plant Reproduction & Hormones

---

## **1. Plant Reproduction**

### **A. Asexual Reproduction (Vegetative Propagation)**
New plants are produced from vegetative parts (roots, stems, leaves) without the involvement of seeds.
*   **Stem:** Potato tubers, Ginger rhizomes, Sugarcane cuttings.
*   **Leaves:** *Bryophyllum* produces buds along leaf margins.
*   **Roots:** Sweet potato, Dahlia.
*   *Advantage:* Plants produced are genetically identical to the parent and can bear flowers/fruits faster.

### **B. Sexual Reproduction (Angiosperms)**
The flower is the reproductive organ.
*   **Male Part (Stamen):** Anther (produces pollen grains) + Filament.
*   **Female Part (Carpel/Pistil):** Stigma (receives pollen) + Style + Ovary (contains ovules/eggs).
*   **Pollination:** Transfer of pollen from anther to stigma (can be self or cross-pollination by wind, water, insects).

### **Double Fertilization (Unique to Angiosperms)**
When a pollen grain lands on the stigma, it grows a pollen tube carrying two male gametes to the embryo sac.
1.  **Syngamy:** One male gamete fuses with the egg cell $\\rightarrow$ forms a **diploid Zygote (2n)** (develops into embryo).
2.  **Triple Fusion:** The second male gamete fuses with two polar nuclei $\\rightarrow$ forms a **triploid Primary Endosperm Nucleus (3n)** (develops into Endosperm which provides nutrition to the embryo).

> After fertilization, the **Ovary develops into a Fruit**, and the **Ovules develop into Seeds**.

---

## **2. Plant Hormones (Phytohormones)**

Chemical messengers that coordinate growth, development, and responses to stimuli.

| Hormone | Primary Functions |
| :--- | :--- |
| **Auxins** | Synthesized at shoot tips. Promotes cell elongation. Responsible for **Phototropism** (bending of shoots towards light) and Apical Dominance (suppresses lateral buds). |
| **Gibberellins** | Promotes stem elongation (internode growth). Helps in **breaking seed dormancy** and germination. |
| **Cytokinins** | Promotes rapid **Cell Division**. Plentiful in fruits and seeds. Delays aging (senescence) in leaves. |
| **Abscisic Acid (ABA)** | **Stress Hormone**. Inhibits growth. Causes wilting of leaves, promotes seed dormancy, and **closes stomata** during water stress/drought. |
| **Ethylene** | The only **gaseous hormone**. Responsible for the **ripening of fruits**. |
""",
    "biology-ecology-basics.md": """# Ecology, Ecosystems & Pyramids

---

## **1. Ecosystem Components & Energy Flow**

An ecosystem consists of biotic (living) components interacting with abiotic (non-living) components.

*   **Producers (Autotrophs):** Green plants, algae, cyanobacteria. Convert solar energy to chemical energy.
*   **Consumers (Heterotrophs):** Herbivores (Primary), Carnivores (Secondary/Tertiary).
*   **Decomposers (Saprotrophs):** Fungi and Bacteria. Break down dead organic matter and recycle nutrients back into the soil.

### **Energy Flow & Lindeman's 10% Law**
*   The flow of energy in an ecosystem is always **Unidirectional** (Sun $\\rightarrow$ Producers $\\rightarrow$ Consumers).
*   **10% Law:** Only about 10% of the energy from one trophic level is transferred to the next higher trophic level. The remaining 90% is lost to the environment as heat (respiration). This is why food chains usually only have 3-4 steps.

---

## **2. Ecological Pyramids**

Graphical representation of ecological parameters at different trophic levels.

1.  **Pyramid of Numbers:** Shows the number of individuals at each level.
    *   *Upright:* Grassland ecosystem.
    *   *Inverted:* Tree ecosystem (One large tree $\\rightarrow$ many birds $\\rightarrow$ many more parasites).
2.  **Pyramid of Biomass:** Shows the total dry weight of living matter.
    *   *Upright:* Terrestrial ecosystems (forest, grassland).
    *   *Inverted:* **Aquatic/Marine ecosystems** (Biomass of phytoplankton is small compared to the large fish that eat them).
3.  **Pyramid of Energy:** Shows the rate of energy flow.
    *   **Always Upright!** Energy can never be inverted because of the 10% law. Energy is always maximum at the producer level.

---

## **3. Key Ecological Concepts**

*   **Ecotone:** A transition zone between two different ecosystems. It has high biodiversity (Edge Effect). E.g., Estuaries, Mangroves, Wetlands.
*   **Ecological Niche:** The functional role and position of a species in its ecosystem (what it eats, where it lives, how it interacts). No two species can occupy exactly the same niche in the same habitat indefinitely.
*   **Biomagnification:** The accumulation and increase in concentration of toxic, non-biodegradable substances (like DDT, heavy metals) at successive higher trophic levels. Apex predators suffer the most.
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/biology", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Biology notes generated.")
