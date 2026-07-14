import os

diagrams = {
    'Pathfinder_Elite/modules/Biology/Animal_Physiology.md': '''
## Visual Summary & Diagrams: Animal Physiology

### Human Digestive System
```mermaid
flowchart TD
    Mouth[Mouth: Salivary Amylase breaks starch] --> Pharynx[Pharynx]
    Pharynx --> Oeso[Oesophagus]
    Oeso --> Stomach[Stomach: HCl + Pepsin break proteins]
    Stomach --> SI[Small Intestine: Duodenum, Jejunum, Ileum]
    
    Liver[Liver: Secretes Bile] -.->|Gall Bladder| SI
    Pancreas[Pancreas: Trypsin, Lipase, Amylase] -.-> SI
    
    SI -->|Absorption of nutrients| LI[Large Intestine: Caecum, Colon, Rectum]
    LI -->|Water absorption| Anus[Anus: Egestion]
```

### Double Circulation (Systemic & Pulmonary)
```mermaid
flowchart LR
    subgraph Pulmonary Circulation
    RV[Right Ventricle] -->|Pulmonary Artery| Lungs[Lungs: Oxygenation]
    Lungs -->|Pulmonary Veins| LA[Left Atrium]
    end

    subgraph Systemic Circulation
    LV[Left Ventricle] -->|Aorta| Body[Body Organs]
    Body -->|Deoxygenated Blood via Vena Cava| RA[Right Atrium]
    end
    
    RA --> RV
    LA --> LV
```

### Human Brain Structure
```mermaid
mindmap
  root((Human Brain))
    Forebrain
      Cerebrum (Thinking, Memory)
      Thalamus (Relay center)
      Hypothalamus (Temperature, Hunger, Thirst)
    Midbrain
      (Vision, Hearing reflexes)
    Hindbrain
      Cerebellum (Balance, Posture)
      Pons (Respiration)
      Medulla Oblongata (Involuntary functions: Heartbeat, Vomiting)
```

### Structure of a Nephron
```mermaid
flowchart TD
    Renal[Renal Artery] --> Aff[Afferent Arteriole]
    Aff --> Glom[Glomerulus]
    Glom --> Bow[Bowman's Capsule]
    
    Bow --> PCT[Proximal Convoluted Tubule: Reabsorption]
    PCT --> Henle[Loop of Henle]
    Henle --> DCT[Distal Convoluted Tubule: Secretion]
    DCT --> Collect[Collecting Duct: To Ureter]
    
    Glom --> Eff[Efferent Arteriole: Exits]
```
''',

    'Pathfinder_Elite/modules/Biology/Plant_Morphology_and_Physiology.md': '''
## Visual Summary & Diagrams: Plant Physiology

### Process of Photosynthesis
```mermaid
flowchart TD
    Light[Sunlight] --> LR[Light Dependent Reaction: Grana]
    H2O[Water] --> LR
    
    LR -->|Releases| O2[Oxygen]
    LR -->|Produces| ATP[ATP & NADPH]
    
    ATP --> DR[Dark Reaction / Calvin Cycle: Stroma]
    CO2[Carbon Dioxide] --> DR
    
    DR -->|Produces| Glucose[Glucose / Sugar]
```

### Plant Vascular System
```mermaid
flowchart LR
    subgraph Xylem
    X[Water & Minerals] -->|Unidirectional Flow| Up[Roots to Leaves]
    end
    
    subgraph Phloem
    P[Glucose / Food] -->|Bidirectional Flow| Down[Leaves to Roots & storage]
    end
```
''',

    'Pathfinder_Elite/modules/Biology/Genetics_and_Molecular_Biology_and_Evolution_of_Life.md': '''
## Visual Summary & Diagrams: Genetics

### Mitosis vs Meiosis
```mermaid
flowchart TD
    Cell((Parent Cell 2n))
    
    subgraph Mitosis
    Cell -->|Prophase, Metaphase, Anaphase, Telophase| M[2 Identical Somatic Cells 2n]
    end
    
    subgraph Meiosis
    Cell --> Meiosis1[2 Cells n]
    Meiosis1 --> Meiosis2[4 Unique Gametes n]
    end
```
''',

    'Pathfinder_Elite/modules/Chemistry/Atomic_Structure.md': '''
## Visual Summary & Diagrams: Atomic Structure

### Periodic Trends
```mermaid
flowchart LR
    subgraph Across a Period (Left to Right)
    PR[Atomic Radius: Decreases]
    PI[Ionization Energy: Increases]
    PE[Electronegativity: Increases]
    end
    
    subgraph Down a Group (Top to Bottom)
    GR[Atomic Radius: Increases]
    GI[Ionization Energy: Decreases]
    GE[Electronegativity: Decreases]
    end
```
''',

    'Pathfinder_Elite/modules/Chemistry/Chemical_Bonding_and_Redox_Reactions.md': '''
## Visual Summary & Diagrams: Chemical Bonding

### Types of Chemical Bonds
```mermaid
mindmap
  root((Chemical Bonds))
    Ionic Bond
      Transfer of electrons
      Between Metal and Non-Metal
      e.g. NaCl, MgO
    Covalent Bond
      Sharing of electrons
      Between Non-Metals
      e.g. H2O, CH4, O2
    Metallic Bond
      Sea of delocalized electrons
      Between Metals
      e.g. Iron, Gold, Copper
```
''',

    'Pathfinder_Elite/modules/Chemistry/Electrochemistry.md': '''
## Visual Summary & Diagrams: Electrochemistry

### Galvanic (Voltaic) Cell
```mermaid
flowchart LR
    subgraph Anode Half-Cell
    A[Zinc Anode: Oxidation] -->|Zn becomes Zn2+| SolA[ZnSO4 Solution]
    end
    
    subgraph Cathode Half-Cell
    C[Copper Cathode: Reduction] -->|Cu2+ becomes Cu| SolC[CuSO4 Solution]
    end
    
    A -->|Electrons flow| C
    SolA -.->|Salt Bridge| SolC
```
''',

    'Pathfinder_Elite/modules/Chemistry/Acids_Bases_and_Salts.md': '''
## Visual Summary & Diagrams: Acids and Bases

### The pH Scale
```mermaid
flowchart LR
    0[0: Strong Acid] --- 3[3: Weak Acid] --- 7[7: Neutral: Pure Water] --- 10[10: Weak Base] --- 14[14: Strong Base]
    
    style 0 fill:#ef4444
    style 3 fill:#f97316
    style 7 fill:#22c55e
    style 10 fill:#3b82f6
    style 14 fill:#1d4ed8
```
''',

    'Pathfinder_Elite/modules/Chemistry/Man_Made_Materials.md': '''
## Visual Summary & Diagrams: Industrial Chemistry

### Haber Process (Ammonia)
```mermaid
flowchart LR
    N2[Nitrogen: from air] --> Reactor
    H2[Hydrogen: from natural gas] --> Reactor
    
    Reactor{Reactor: 450°C, 200atm, Iron Catalyst} --> NH3[Ammonia Gas]
```

### Contact Process (Sulphuric Acid)
```mermaid
flowchart TD
    S[Sulphur] -->|Burns in Air| SO2[Sulphur Dioxide]
    SO2 -->|Reacts with O2 + V2O5 Catalyst| SO3[Sulphur Trioxide]
    SO3 -->|Dissolved in H2SO4| Oleum[Oleum H2S2O7]
    Oleum -->|Diluted with water| Acid[Sulphuric Acid H2SO4]
```
'''
}

for file_path, content in diagrams.items():
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            existing_content = f.read()
        
        if "## Multiple Choice Questions" in existing_content:
            new_content = existing_content.replace("## Multiple Choice Questions", content + "\n\n## Multiple Choice Questions")
        elif "## Master Revision MCQs" in existing_content:
            new_content = existing_content.replace("## Master Revision MCQs", content + "\n\n## Master Revision MCQs")
        else:
            new_content = existing_content + "\n\n" + content
            
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Added diagrams to {file_path}")
    else:
        print(f"File not found: {file_path}")
