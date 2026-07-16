import os

diagrams = {
    'Pathfinder_Elite/modules/Physics/Optics.md': '''
## Visual Summary & Diagrams

### Reflection and Refraction Ray Diagrams
```mermaid
graph TD
    subgraph Reflection
    A[Incident Ray] -->|Strikes Mirror| B(Point of Incidence)
    B -->|Bounces Back| C[Reflected Ray]
    B -.-> D(Normal)
    style A stroke:#f59e0b,stroke-width:2px
    style C stroke:#22c55e,stroke-width:2px
    end

    subgraph Refraction
    E[Incident Ray in Air] -->|Enters Glass| F(Interface)
    F -->|Bends Towards Normal| G[Refracted Ray]
    style E stroke:#f59e0b,stroke-width:2px
    style G stroke:#3b82f6,stroke-width:2px
    end
```
''',
    'Pathfinder_Elite/modules/Physics/Measurement_Motion_Work_Energy_and_Power.md': '''
## Visual Summary & Diagrams

### Projectile Motion Trajectory
```mermaid
graph LR
    A[Start: Launch Angle &theta;] --> B(Ascent: v_y decreases)
    B --> C{Maximum Height H: v_y = 0}
    C --> D(Descent: v_y increases downwards)
    D --> E[End: Range R]
    style A fill:#3b82f6,stroke:#1e40af
    style C fill:#f59e0b,stroke:#b45309
    style E fill:#ef4444,stroke:#991b1b
```
''',
    'Pathfinder_Elite/modules/Biology/Cell_The_Unit_of_Life.md': '''
## Visual Summary & Diagrams

### Animal Cell - 3D Scientific Illustration
<img src="/assets/images/biology_cell_3d.png" alt="3D Animal Cell" style="width:100%; max-width:600px; border-radius:12px; margin: 20px 0; border: 1px solid var(--border);" />

### Plant vs Animal Cell Comparison
```mermaid
flowchart TD
    Cell((Eukaryotic Cell))
    Cell --> Plant[Plant Cell]
    Cell --> Animal[Animal Cell]
    
    Plant --> CW(Cell Wall - Present)
    Plant --> P(Plastids/Chloroplasts - Present)
    Plant --> V(Vacuole - Large, Central)
    Plant --> C(Centrioles - Absent)
    
    Animal --> CW2(Cell Wall - Absent)
    Animal --> P2(Plastids - Absent)
    Animal --> V2(Vacuole - Small or Absent)
    Animal --> C2(Centrioles - Present)
    
    classDef plantFill fill:#166534,stroke:#22c55e,stroke-width:2px,color:#fff;
    classDef animalFill fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fff;
    class Plant,CW,P,V,C plantFill;
    class Animal,CW2,P2,V2,C2 animalFill;
```
''',
    'Pathfinder_Elite/modules/Biology/Human_Health_and_Diseases.md': '''
## Visual Summary & Diagrams

### Immune System Response Flowchart
```mermaid
flowchart TD
    Pathogen[Pathogen Enters Body] --> Innate[Innate Immunity <br> Non-specific First Line]
    
    Innate --> Physical(Skin, Mucus)
    Innate --> Physiological(Stomach Acid, Tears)
    Innate --> Cellular(Macrophages, Neutrophils)
    
    Pathogen --> Acquired[Acquired Immunity <br> Specific Response]
    
    Acquired --> BCells(B-Lymphocytes)
    Acquired --> TCells(T-Lymphocytes)
    
    BCells --> Antibodies[Produce Antibodies to neutralize pathogen]
    TCells --> Help(Help B-Cells & destroy infected cells directly)
```
''',
    'Pathfinder_Elite/modules/Geography/World_Geography_Cosmology_and_MCQs.md': '''
## Visual Summary & Diagrams

### Earth's Interior Cross-Section
```mermaid
pie title Earth's Interior Composition (By Volume)
    "Mantle (84%)" : 84
    "Core (15%)" : 15
    "Crust (1%)" : 1
```
```mermaid
flowchart TD
    Surface((Earth Surface)) --> Crust[Crust: Solid, Silicates]
    Crust --> Mantle[Mantle: Viscous, Magma]
    Mantle --> OuterCore[Outer Core: Liquid Iron/Nickel]
    OuterCore --> InnerCore[Inner Core: Solid Iron/Nickel]
    
    style Surface fill:#000,stroke:#3b82f6
    style Crust fill:#451a03,stroke:#78350f
    style Mantle fill:#7f1d1d,stroke:#b91c1c
    style OuterCore fill:#b45309,stroke:#d97706
    style InnerCore fill:#fef08a,stroke:#facc15,color:#000
```
''',
    'Pathfinder_Elite/modules/Geography/Indian_Geography_Resources_and_MCQs.md': '''
## Visual Summary & Diagrams

### Indian River Systems
```mermaid
mindmap
  root((Indian Rivers))
    Himalayan Rivers
      Indus System
        Jhelum
        Chenab
        Ravi
        Beas
        Sutlej
      Ganga System
        Yamuna
        Ghaghara
        Kosi
      Brahmaputra
    Peninsular Rivers
      West Flowing
        Narmada
        Tapi
      East Flowing
        Godavari
        Krishna
        Kaveri
        Mahanadi
```
''',
    'Pathfinder_Elite/modules/History/Modern_India_National_Movement_and_MCQs.md': '''
## Visual Summary & Diagrams

### National Movement Timeline
```mermaid
timeline
    title Key Events of the Indian National Movement
    1857 : Revolt of 1857
    1885 : Formation of INC
    1905 : Partition of Bengal
    1919 : Jallianwala Bagh Massacre
    1920 : Non-Cooperation Movement
    1930 : Civil Disobedience (Dandi March)
    1942 : Quit India Movement
    1947 : Independence
```
''',
    'Pathfinder_Elite/modules/Polity/Union_Executive_Judiciary_and_MCQs.md': '''
## Visual Summary & Diagrams

### Indian Government Structure
```mermaid
flowchart TD
    Gov((Government of India))
    
    Gov --> Leg[Legislature<br>Makes Laws]
    Gov --> Exec[Executive<br>Implements Laws]
    Gov --> Jud[Judiciary<br>Interprets Laws]
    
    Leg --> Parliament
    Parliament --> LS[Lok Sabha]
    Parliament --> RS[Rajya Sabha]
    
    Exec --> Pres[President]
    Pres --> PM[Prime Minister]
    PM --> COM[Council of Ministers]
    
    Jud --> SC[Supreme Court]
    SC --> HC[High Courts]
    HC --> Dist[District Courts]
```
'''
}

for file_path, content in diagrams.items():
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            existing_content = f.read()
        
        if "## Multiple Choice Questions" in existing_content:
            new_content = existing_content.replace("## Multiple Choice Questions", content + "\n\n## Multiple Choice Questions")
        else:
            new_content = existing_content + "\n\n" + content
            
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Added diagrams to {file_path}")
    else:
        print(f"File not found: {file_path}")
