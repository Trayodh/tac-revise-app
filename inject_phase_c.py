import os

phase_c_diagrams = {
    # ---------------- BIOLOGY ----------------
    'Pathfinder_Elite/modules/Biology/Cell_The_Unit_of_Life.md': '''
## Visual Summary: Cellular Biology

### Prokaryotic vs Eukaryotic Cell
```mermaid
mindmap
  root((Cells))
    Prokaryotic
      No true nucleus
      No membrane-bound organelles
      Examples: Bacteria, Archaea
      Circular DNA
    Eukaryotic
      True nucleus
      Membrane-bound organelles
      Examples: Plants, Animals, Fungi
      Linear DNA
```

### Plant vs Animal Cell
```mermaid
flowchart LR
    Plant((Plant Cell)) --> CellWall[Cell Wall Present]
    Plant --> Plastids[Plastids / Chloroplasts Present]
    Plant --> Vacuole[Large Central Vacuole]
    
    Animal((Animal Cell)) --> NoWall[No Cell Wall]
    Animal --> NoPlastids[No Plastids]
    Animal --> SmallVacuole[Small or No Vacuoles]
    Animal --> Centrioles[Centrioles Present]
```
''',

    'Pathfinder_Elite/modules/Biology/Animal_Physiology.md': '''
## Visual Summary: Human Systems

### Human Digestive System Flow
```mermaid
flowchart TD
    Mouth[Mouth: Salivary Amylase] --> Pharynx[Pharynx]
    Pharynx --> Oesophagus[Oesophagus: Peristalsis]
    Oesophagus --> Stomach[Stomach: Pepsin, HCl]
    Stomach --> SmallIntestine[Small Intestine: Duodenum, Jejunum, Ileum]
    SmallIntestine --> LargeIntestine[Large Intestine: Caecum, Colon, Rectum]
    LargeIntestine --> Anus[Anus]
    
    Liver[Liver: Bile] -.-> SmallIntestine
    Pancreas[Pancreas: Trypsin, Lipase] -.-> SmallIntestine
```

### Human Respiratory System
```mermaid
flowchart TD
    Nostrils --> NasalCavity[Nasal Cavity]
    NasalCavity --> Pharynx
    Pharynx --> Larynx[Larynx / Voice Box]
    Larynx --> Trachea[Trachea / Windpipe]
    Trachea --> Bronchi[Bronchi]
    Bronchi --> Bronchioles[Bronchioles]
    Bronchioles --> Alveoli[Alveoli: Gas Exchange]
```

### Double Circulation (Heart)
```mermaid
flowchart LR
    Body((Body Tissues)) -->|Deoxygenated| VenaCava[Vena Cava]
    VenaCava --> RA[Right Atrium]
    RA --> RV[Right Ventricle]
    RV -->|Pulmonary Artery| Lungs((Lungs))
    
    Lungs -->|Oxygenated: Pulmonary Vein| LA[Left Atrium]
    LA --> LV[Left Ventricle]
    LV -->|Aorta| Body
```

### Nervous System: Reflex Arc
```mermaid
flowchart LR
    Stimulus[Stimulus] --> Receptor[Receptor / Sense Organ]
    Receptor --> Sensory[Sensory Neuron]
    Sensory --> SpinalCord[Spinal Cord / CNS]
    SpinalCord --> Motor[Motor Neuron]
    Motor --> Effector[Effector / Muscle]
    Effector --> Response[Response]
```

### Excretory System: Nephron Structure
```mermaid
flowchart TD
    RenalArtery[Renal Artery] --> Glomerulus[Glomerulus in Bowman's Capsule]
    Glomerulus --> PCT[Proximal Convoluted Tubule - PCT]
    PCT --> Henle[Loop of Henle]
    Henle --> DCT[Distal Convoluted Tubule - DCT]
    DCT --> CollectingDuct[Collecting Duct]
    CollectingDuct --> Ureter[Ureter]
```

### Endocrine Glands (Major)
```mermaid
mindmap
  root((Endocrine Glands))
    Brain
      Hypothalamus
      Pituitary (Master Gland)
      Pineal (Melatonin)
    Neck
      Thyroid (Thyroxine)
      Parathyroid
    Abdomen
      Adrenal (Adrenaline)
      Pancreas (Insulin, Glucagon)
    Reproductive
      Testes (Testosterone)
      Ovaries (Estrogen, Progesterone)
```
''',

    'Pathfinder_Elite/modules/Biology/Plant_Morphology_and_Physiology.md': '''
## Visual Summary: Plant Biology

### Structure of a Flower
```mermaid
mindmap
  root((Flower Parts))
    Male (Androecium)
      Stamen
        Anther (Pollen)
        Filament
    Female (Gynoecium)
      Carpel / Pistil
        Stigma
        Style
        Ovary (Ovules)
    Accessory
      Petals (Corolla)
      Sepals (Calyx)
```

### Xylem vs Phloem
```mermaid
flowchart LR
    Xylem((Xylem)) --> Water[Transports Water & Minerals]
    Xylem --> Unidirectional[Unidirectional Flow (Up)]
    Xylem --> DeadCells[Mostly Dead Cells]
    
    Phloem((Phloem)) --> Food[Transports Food / Sucrose]
    Phloem --> Bidirectional[Bidirectional Flow]
    Phloem --> LivingCells[Mostly Living Cells]
```

### Photosynthesis Process
```mermaid
flowchart TD
    Light[Sunlight] --> Chloro[Chlorophyll in Leaves]
    CO2[Carbon Dioxide] --> Chloro
    H2O[Water from Roots] --> Chloro
    Chloro --> Glucose[Glucose / Energy]
    Chloro --> O2[Oxygen Release]
```
''',

    'Pathfinder_Elite/modules/Biology/Genetics_and_Molecular_Biology_and_Evolution_of_Life.md': '''
## Visual Summary: Genetics

### Mitosis vs Meiosis
```mermaid
flowchart LR
    Mitosis((Mitosis)) --> Somatic[Somatic Cells]
    Mitosis --> Identical[2 Identical Diploid Cells (2n)]
    Mitosis --> PMAT[Prophase -> Metaphase -> Anaphase -> Telophase]
    
    Meiosis((Meiosis)) --> Gametes[Sex Cells / Gametes]
    Meiosis --> Unique[4 Unique Haploid Cells (n)]
    Meiosis --> CrossingOver[Crossing Over occurs in Prophase I]
```

### DNA Structure (Central Dogma)
```mermaid
flowchart LR
    DNA((DNA)) -->|Transcription| RNA[mRNA]
    RNA -->|Translation| Protein[Protein]
```
''',

    # ---------------- GEOGRAPHY ----------------
    'Pathfinder_Elite/modules/Geography/World_Geography_Cosmology.md': '''
## Visual Summary: Earth & Geology

### Earth's Internal Structure
```mermaid
flowchart TD
    Earth((Earth Layers))
    Earth --> Crust[Crust: Solid, 0-100km]
    Crust --> Litho[Lithosphere]
    Earth --> Mantle[Mantle: Viscous, 2900km]
    Mantle --> Astheno[Asthenosphere: Magma source]
    Earth --> OuterCore[Outer Core: Liquid Iron/Nickel, creates magnetic field]
    Earth --> InnerCore[Inner Core: Solid Iron/Nickel]
```

### Seasons, Solstices & Equinoxes
```mermaid
flowchart LR
    Sun((Sun))
    SummerSol[Summer Solstice: June 21] -.-> Sun
    WinterSol[Winter Solstice: Dec 22] -.-> Sun
    VernalEq[Vernal Equinox: March 21] -.-> Sun
    AutumnEq[Autumnal Equinox: Sept 23] -.-> Sun
```

### Plate Tectonics
```mermaid
mindmap
  root((Plate Boundaries))
    Divergent
      Plates move apart
      Mid-Atlantic Ridge
    Convergent
      Plates collide
      Himalayas, Andes
    Transform
      Plates slide past
      San Andreas Fault
```
''',

    'Pathfinder_Elite/modules/Geography/Environmental_Geography.md': '''
## Visual Summary: Environment & Oceanography

### Atmospheric Pressure Belts
```mermaid
flowchart TD
    Equator[Equatorial Low / Doldrums: 0°-5°]
    SubTrop[Sub-Tropical High / Horse Latitudes: 30°]
    SubPolar[Sub-Polar Low: 60°]
    Polar[Polar High: 90°]
    
    SubTrop -->|Trade Winds| Equator
    SubTrop -->|Westerlies| SubPolar
    Polar -->|Polar Easterlies| SubPolar
```

### Ecology: Food Chain & Energy Flow
```mermaid
flowchart LR
    Sun[Sun] --> Producer[Producers (Plants)]
    Producer -->|10% Energy| Primary[Primary Consumers (Herbivores)]
    Primary -->|10% Energy| Secondary[Secondary Consumers (Carnivores)]
    Secondary -->|10% Energy| Tertiary[Tertiary Consumers (Apex)]
    
    Decomposers[Decomposers] -.-> Producer
    Tertiary -.-> Decomposers
```
''',

    'Pathfinder_Elite/modules/Geography/Indian_Geography_Resources.md': '''
## Visual Summary: India Maps (Conceptual)

### Indian River Systems
```mermaid
mindmap
  root((Indian Rivers))
    Himalayan
      Indus System
        Jhelum, Chenab, Ravi, Beas, Sutlej
      Ganga System
        Yamuna, Gomti, Ghaghara, Kosi, Son
      Brahmaputra System
        Teesta, Lohit
    Peninsular
      West Flowing (Arabian Sea)
        Narmada
        Tapi
      East Flowing (Bay of Bengal)
        Mahanadi
        Godavari
        Krishna
        Cauvery
```

### Climate & Rainfall Zones
```mermaid
mindmap
  root((Rainfall Distribution))
    High (>200cm)
      Western Ghats
      Meghalaya / North-East
    Medium (100-200cm)
      Ganga Plain
      Eastern Ghats
    Low (50-100cm)
      Deccan Plateau
      Western UP
    Scanty (<50cm)
      Thar Desert (Rajasthan)
      Ladakh (Cold Desert)
```
'''
}

for file_path, content in phase_c_diagrams.items():
    full_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\\" + file_path
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            existing_content = f.read()
            
        if "Visual Summary:" not in existing_content:
            new_content = existing_content + "\n\n" + content
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Added Phase C diagrams to {file_path}")
        else:
            print(f"Diagrams already exist in {file_path}, skipping to prevent duplication.")
    else:
        print(f"File not found: {full_path}")
