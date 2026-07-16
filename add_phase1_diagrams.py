import os

diagrams = {
    'Pathfinder_Elite/modules/Current_Affairs/General_Knowledge_Static_Review.md': '''
## Visual Summary & Diagrams: Defence & Space Science

### Indian Armed Forces Organizational Structure
```mermaid
flowchart TD
    President((President of India<br>Supreme Commander)) --> MoD[Ministry of Defence]
    MoD --> CDS[Chief of Defence Staff]
    
    CDS --> Army[Indian Army<br>Chief of Army Staff]
    CDS --> Navy[Indian Navy<br>Chief of Naval Staff]
    CDS --> AF[Indian Air Force<br>Chief of Air Staff]
    
    Army --> AC[7 Army Commands]
    Navy --> NC[3 Naval Commands]
    AF --> AFC[7 Air Commands]
```

### Defence Commands of India
```mermaid
mindmap
  root((Commands))
    Indian Army (7)
      Northern - Udhampur
      Western - Chandimandir
      Central - Lucknow
      Eastern - Kolkata
      Southern - Pune
      South Western - Jaipur
      Training - Shimla
    Indian Navy (3)
      Western - Mumbai
      Eastern - Visakhapatnam
      Southern (Training) - Kochi
    Indian Air Force (7)
      Western - New Delhi
      Eastern - Shillong
      Central - Prayagraj
      South Western - Gandhinagar
      Southern - Thiruvananthapuram
      Training - Bengaluru
      Maintenance - Nagpur
```

### Rank Insignia Equivalence (Officer Ranks)
```mermaid
flowchart LR
    Army[Army] --> General --> LtGen[Lieutenant General] --> MajGen[Major General] --> Brig[Brigadier] --> Col[Colonel]
    Navy[Navy] --> Admiral --> ViceAdm[Vice Admiral] --> RearAdm[Rear Admiral] --> Commodore --> CaptN[Captain]
    AirForce[Air Force] --> ACM[Air Chief Marshal] --> AM[Air Marshal] --> AVM[Air Vice Marshal] --> AirCmdr[Air Commodore] --> GpCapt[Group Captain]
```

### Classification of Missiles
```mermaid
mindmap
  root((Missiles))
    Cruise Missiles
      Subsonic (BrahMos in testing, Nirbhay)
      Supersonic (BrahMos)
      Hypersonic (BrahMos-II)
    Ballistic Missiles
      Short Range (Prithvi, Agni-I)
      Medium Range (Agni-II)
      Intermediate Range (Agni-III, Agni-IV)
      Intercontinental (Agni-V, Agni-VI)
    Surface-to-Air (SAM)
      Akash
      Barak
    Air-to-Air (AAM)
      Astra
```

### Solar System Order
```mermaid
flowchart LR
    Sun((Sun)) --> Mercury --> Venus --> Earth --> Mars --> AsteroidBelt[Asteroid Belt] --> Jupiter --> Saturn --> Uranus --> Neptune
```

### ISRO Launch Vehicles
```mermaid
flowchart TD
    LV((Launch Vehicles))
    LV --> SLV[SLV / ASLV<br>Historic/Retired]
    LV --> PSLV[PSLV<br>Polar Satellite Launch Vehicle<br>Workhorse of ISRO]
    LV --> GSLV[GSLV<br>Geosynchronous Satellite Launch Vehicle<br>Heavy payloads]
    LV --> LVM3[LVM3<br>Heaviest lifter<br>Used for Chandrayaan-3]
```
''',
    'Pathfinder_Elite/modules/Polity/Union_Executive_Judiciary_and_MCQs.md': '''
## Visual Summary & Diagrams: Polity (Part 1)

### Parliament Structure & Law-Making Process
```mermaid
flowchart TD
    Bill[Draft Bill] --> LokSabha[Lok Sabha (Lower House)]
    Bill --> RajyaSabha[Rajya Sabha (Upper House)]
    
    LokSabha -->|Passed| RajyaSabha
    RajyaSabha -->|Passed| LokSabha
    
    LokSabha -.->|Disagreement| Joint[Joint Sitting]
    RajyaSabha -.->|Disagreement| Joint
    
    LokSabha & RajyaSabha -->|Approved| President
    Joint -->|Approved| President
    
    President -->|Assent| Act((Becomes an Act))
    President -.->|Veto/Return| Bill
```

### Supreme Court & High Court Hierarchy
```mermaid
mindmap
  root((Indian Judiciary))
    Supreme Court of India
      Original Jurisdiction
      Appellate Jurisdiction
      Advisory Jurisdiction
    High Courts (25 in India)
      State level jurisdiction
      Writ Jurisdiction (Art 226)
    Subordinate Courts
      District Courts (Civil)
      Sessions Courts (Criminal)
      Panchayat / Lok Adalats
```
''',
    'Pathfinder_Elite/modules/Polity/Constitutional_Framework_Rights_and_MCQs.md': '''
## Visual Summary & Diagrams: Polity (Part 2)

### Constitutional vs Statutory Bodies
```mermaid
flowchart TD
    Bodies[Government Bodies]
    
    Bodies --> Const[Constitutional Bodies<br>Mentioned in Constitution]
    Const --> ECI[Election Commission (Art 324)]
    Const --> UPSC[UPSC (Art 315)]
    Const --> CAG[CAG (Art 148)]
    Const --> FC[Finance Commission (Art 280)]
    
    Bodies --> Stat[Statutory Bodies<br>Created by Act of Parliament]
    Stat --> NHRC[National Human Rights Commission]
    Stat --> CIC[Central Information Commission]
    Stat --> NGT[National Green Tribunal]
    Stat --> SEBI[SEBI / RBI]
```

### Fundamental Rights Summary
```mermaid
mindmap
  root((Fundamental Rights<br>Part III, Art 12-35))
    Equality (14-18)
    Freedom (19-22)
    Exploitation (23-24)
    Religion (25-28)
    Cultural & Educational (29-30)
    Constitutional Remedies (32)
```
''',
    'Pathfinder_Elite/modules/Geography/World_Geography_Cosmology_and_MCQs.md': '''
## Visual Summary & Diagrams: Geography (Part 1)

### Atmospheric Layers
```mermaid
flowchart BT
    Earth((Earth Surface))
    Earth --> Tropo[Troposphere: Weather events, 0-12km]
    Tropo --> Strato[Stratosphere: Ozone layer, Jet planes, 12-50km]
    Strato --> Meso[Mesosphere: Meteors burn, 50-80km]
    Meso --> Thermo[Thermosphere/Ionosphere: Auroras, Radio waves, 80-400km]
    Thermo --> Exo[Exosphere: Satellites, 400km+]
```

### Rock Cycle
```mermaid
flowchart TD
    Magma((Magma / Lava)) -->|Cooling & Solidification| Igneous[Igneous Rocks]
    Igneous -->|Weathering & Erosion| Sediments[Sediments]
    Sediments -->|Compaction & Cementation| Sedimentary[Sedimentary Rocks]
    
    Igneous -->|Heat & Pressure| Metamorphic[Metamorphic Rocks]
    Sedimentary -->|Heat & Pressure| Metamorphic
    
    Metamorphic -->|Melting| Magma
    Igneous -->|Melting| Magma
    Sedimentary -->|Melting| Magma
```
''',
    'Pathfinder_Elite/modules/Geography/Indian_Geography_Resources_and_MCQs.md': '''
## Visual Summary & Diagrams: Geography (Part 2)

### Mechanism of Indian Monsoon (SW Monsoon)
```mermaid
flowchart TD
    Summer[Summer in N. Hemisphere] --> Heat[Intense heating of Tibetan Plateau]
    Heat --> LowP[Low Pressure area over NW India]
    
    Ocean[High Pressure over Indian Ocean] --> Winds[Winds move from High to Low Pressure]
    Winds --> Equator[Cross Equator, deflect right due to Coriolis]
    
    Equator --> SW[South-West Monsoon Winds]
    
    SW --> Arabian[Arabian Sea Branch<br>Hits Western Ghats]
    SW --> Bay[Bay of Bengal Branch<br>Hits NE India & Meghalaya]
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
