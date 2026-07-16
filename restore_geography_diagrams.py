import os

diagrams = {
    'Pathfinder_Elite/modules/Geography/World_Geography_Cosmology.md': '''
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
    'Pathfinder_Elite/modules/Geography/Indian_Geography_Resources.md': '''
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
    full_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\\" + file_path
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            existing_content = f.read()
            
        if "Visual Summary & Diagrams" not in existing_content:
            new_content = existing_content + "\n\n" + content
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Added Geography diagrams to {file_path}")
    else:
        print(f"File not found: {full_path}")
