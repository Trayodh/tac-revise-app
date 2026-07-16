import os

phase_b_diagrams = {
    # ---------------- PHYSICS ----------------
    'Pathfinder_Elite/modules/Physics/Measurement_Motion_Work_Energy_and_Power.md': '''
## Visual Summary: Mechanics

### Classes of Levers
```mermaid
flowchart TD
    Class1[Class 1: Fulcrum in Middle] --> Ex1(Seesaw, Scissors)
    Class2[Class 2: Load in Middle] --> Ex2(Wheelbarrow, Nutcracker)
    Class3[Class 3: Effort in Middle] --> Ex3(Tweezers, Human Forearm)
```

### Free Body Diagram (FBD) Logic
```mermaid
flowchart TD
    Object((Object on a Surface))
    Object -->|Downwards| W[Weight = mg]
    Object -->|Perpendicular Up| N[Normal Force N]
    Object -->|Forward| F[Applied Force F]
    Object -->|Opposite to Motion| f[Friction f]
```
''',

    'Pathfinder_Elite/modules/Physics/Heat_and_Thermodynamics.md': '''
## Visual Summary: Heat

### Modes of Heat Transfer
```mermaid
flowchart LR
    Source((Heat Source))
    Source -->|Direct Contact| Conduction[Conduction: Solids]
    Source -->|Fluid Movement| Convection[Convection: Liquids/Gases]
    Source -->|Electromagnetic Waves| Radiation[Radiation: Vacuum/Space]
```
''',

    'Pathfinder_Elite/modules/Physics/Optics.md': '''
## Visual Summary: Light & Optics

### Human Eye Defects
```mermaid
mindmap
  root((Eye Defects))
    Myopia (Short-sighted)
      Image forms in front of retina
      Correction: Concave Lens
    Hypermetropia (Long-sighted)
      Image forms behind retina
      Correction: Convex Lens
    Presbyopia (Old age)
      Loss of accommodation
      Correction: Bifocal Lens
    Astigmatism
      Distorted cornea
      Correction: Cylindrical Lens
```

### Lenses & Mirrors
```mermaid
flowchart TD
    Optics[Optics] --> Mirrors
    Optics --> Lenses
    Mirrors --> ConcaveMirror[Concave: Converging]
    Mirrors --> ConvexMirror[Convex: Diverging]
    Lenses --> ConvexLens[Convex: Converging]
    Lenses --> ConcaveLens[Concave: Diverging]
```
''',

    'Pathfinder_Elite/modules/Physics/Electric_Current.md': '''
## Visual Summary: Electricity & Magnetism

### Series vs Parallel Circuits
```mermaid
flowchart LR
    Series((Series Circuit)) --> CurrentSame[Current (I) is Same]
    Series --> VoltageDiv[Voltage (V) Divides]
    Series --> Req[Req = R1 + R2 + R3]
    
    Parallel((Parallel Circuit)) --> VoltageSame[Voltage (V) is Same]
    Parallel --> CurrentDiv[Current (I) Divides]
    Parallel --> ReqP[1/Req = 1/R1 + 1/R2 + 1/R3]
```

### Transformers
```mermaid
flowchart TD
    Transformer((Transformer))
    Transformer --> StepUp[Step-Up: Increases Voltage]
    StepUp --> SecTurnsHigh[Secondary Turns > Primary]
    Transformer --> StepDown[Step-Down: Decreases Voltage]
    StepDown --> SecTurnsLow[Secondary Turns < Primary]
```
''',

    'Pathfinder_Elite/modules/Physics/Modern_Physics.md': '''
## Visual Summary: Modern Physics

### Nuclear Fission vs Fusion
```mermaid
flowchart LR
    Fission((Fission)) --> Break[Heavy Nucleus splits (U-235)]
    Fission --> Ex[Atomic Bomb, Nuclear Reactors]
    
    Fusion((Fusion)) --> Join[Light Nuclei combine (H + H)]
    Fusion --> Ex2[Sun's Energy, Hydrogen Bomb]
```
''',

    # ---------------- CHEMISTRY ----------------
    'Pathfinder_Elite/modules/Chemistry/Atomic_Structure.md': '''
## Visual Summary: Atomic Structure

### Bohr Model Concept
```mermaid
flowchart TD
    Nucleus((Nucleus: Protons + Neutrons))
    Nucleus --> KShell[K Shell: n=1, 2e-]
    KShell --> LShell[L Shell: n=2, 8e-]
    LShell --> MShell[M Shell: n=3, 18e-]
    MShell --> NShell[N Shell: n=4, 32e-]
```
''',

    'Pathfinder_Elite/modules/Chemistry/Chemical_Bonding_and_Redox_Reactions.md': '''
## Visual Summary: Chemical Bonding

### Types of Chemical Bonds
```mermaid
mindmap
  root((Chemical Bonds))
    Ionic
      Complete transfer of electrons
      Between Metal and Non-Metal (e.g., NaCl)
    Covalent
      Sharing of electrons
      Between Non-Metals (e.g., H2O)
    Metallic
      Sea of delocalized electrons
      Between Metals (e.g., Fe, Cu)
```
''',

    'Pathfinder_Elite/modules/Chemistry/Electrochemistry.md': '''
## Visual Summary: Electrochemistry

### Galvanic vs Electrolytic Cell
```mermaid
flowchart LR
    Galvanic((Galvanic / Voltaic Cell)) --> ChemToElec[Chemical Energy -> Electrical Energy]
    Galvanic --> Spontaneous[Spontaneous Reaction]
    Galvanic --> AnodeG[Anode is Negative]
    
    Electrolytic((Electrolytic Cell)) --> ElecToChem[Electrical Energy -> Chemical Energy]
    Electrolytic --> NonSpontaneous[Non-Spontaneous Reaction]
    Electrolytic --> AnodeE[Anode is Positive]
```
''',

    # ---------------- ECONOMICS ----------------
    'Pathfinder_Elite/modules/Economy/Macroeconomics_Five_Year_Plans_and_MCQs.md': '''
## Visual Summary: Macroeconomics

### Circular Flow of Income
```mermaid
flowchart LR
    Households((Households)) -- "Factor Services (Land, Labor)" --> Firms((Firms))
    Firms -- "Goods & Services" --> Households
    Households -- "Consumption Expenditure" --> Firms
    Firms -- "Factor Payments (Wages, Rent)" --> Households
```
''',

    'Pathfinder_Elite/modules/Economy/Banking_Inflation_Public_Finance_and_MCQs.md': '''
## Visual Summary: Banking & Finance

### Structure of Indian Banking
```mermaid
mindmap
  root((Indian Banking System))
    RBI (Central Bank)
      Scheduled Commercial Banks
        Public Sector (SBI, PNB)
        Private Sector (HDFC, ICICI)
        Foreign Banks
      Cooperative Banks
      Regional Rural Banks (RRBs)
```

### Inflation Types
```mermaid
flowchart TD
    Inflation((Inflation))
    Inflation --> Demand[Demand-Pull: "Too much money chasing too few goods"]
    Inflation --> Cost[Cost-Push: "Increase in production costs (raw materials/wages)"]
```
'''
}

for file_path, content in phase_b_diagrams.items():
    full_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\\" + file_path
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            existing_content = f.read()
            
        if "Visual Summary:" not in existing_content:
            new_content = existing_content + "\n\n" + content
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Added Phase B diagrams to {file_path}")
        else:
            print(f"Diagrams already exist in {file_path}, skipping to prevent duplication.")
    else:
        print(f"File not found: {full_path}")
