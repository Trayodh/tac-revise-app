import os

phase_a_diagrams = {
    # ---------------- HISTORY ----------------
    'Pathfinder_Elite/modules/History/Ancient_India_Core_and_MCQs.md': '''
## Visual Summary: Ancient History

### Vedic Society Hierarchy (Varnas)
```mermaid
flowchart TD
    Brahmins[Brahmins: Priests, Scholars] --> Kshatriyas[Kshatriyas: Warriors, Kings]
    Kshatriyas --> Vaishyas[Vaishyas: Merchants, Farmers]
    Vaishyas --> Shudras[Shudras: Laborers, Service Providers]
```
''',

    'Pathfinder_Elite/modules/History/Medieval_India_Sultanate_and_MCQs.md': '''
## Visual Summary: Medieval History

### Delhi Sultanate Dynasties
```mermaid
flowchart LR
    Slave[Slave Dynasty: 1206-1290] --> Khilji[Khilji: 1290-1320]
    Khilji --> Tughlaq[Tughlaq: 1320-1414]
    Tughlaq --> Sayyid[Sayyid: 1414-1451]
    Sayyid --> Lodi[Lodi: 1451-1526]
```
''',

    'Pathfinder_Elite/modules/History/World_History_and_Revision_MCQs.md': '''
## Visual Summary: World History

### United Nations Structure
```mermaid
mindmap
  root((United Nations))
    General Assembly
    Security Council
      5 Permanent (Veto)
      10 Non-Permanent
    Secretariat
    International Court of Justice (ICJ)
    Economic and Social Council (ECOSOC)
    Trusteeship Council
```
''',

    # ---------------- POLITY ----------------
    'Pathfinder_Elite/modules/Polity/Union_Executive_Judiciary_and_MCQs.md': '''
## Visual Summary: Union Government

### Parliament Structure
```mermaid
flowchart TD
    Parliament((Parliament of India))
    Parliament --> President[President of India]
    Parliament --> RajyaSabha[Rajya Sabha: Council of States]
    Parliament --> LokSabha[Lok Sabha: House of the People]
```

### Judiciary Hierarchy
```mermaid
flowchart TD
    SC[Supreme Court of India] --> HC[High Courts: States]
    HC --> Dist[District Courts]
    Dist --> Sub[Subordinate Courts]
```
''',

    'Pathfinder_Elite/modules/Polity/State_Local_Governance_and_Master_MCQs.md': '''
## Visual Summary: Local Governance

### Panchayati Raj System (3-Tier)
```mermaid
flowchart BT
    Village[Gram Panchayat: Village Level] --> Block[Panchayat Samiti: Block Level]
    Block --> District[Zila Parishad: District Level]
```
''',

    # ---------------- DEFENCE & SPACE ----------------
    'Pathfinder_Elite/modules/Current_Affairs/General_Knowledge_Static_Review.md': '''
## Visual Summary: Defence & Space

### Indian Armed Forces Structure
```mermaid
flowchart TD
    Commander[Supreme Commander: President] --> MoD[Ministry of Defence]
    MoD --> CDS[Chief of Defence Staff]
    CDS --> Army[Indian Army]
    CDS --> Navy[Indian Navy]
    CDS --> AirForce[Indian Air Force]
```

### ISRO Launch Vehicles
```mermaid
flowchart LR
    SLV[SLV] --> ASLV[ASLV]
    ASLV --> PSLV[PSLV: Workhorse]
    PSLV --> GSLV[GSLV: Heavy Payloads]
    GSLV --> LVM3[LVM3: Chandrayaan/Gaganyaan]
```
'''
}

for file_path, content in phase_a_diagrams.items():
    full_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\\" + file_path
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            existing_content = f.read()
            
        if "Visual Summary:" not in existing_content:
            new_content = existing_content + "\n\n" + content
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Added Phase A diagrams to {file_path}")
        else:
            print(f"Diagrams already exist in {file_path}, skipping.")
    else:
        print(f"File not found: {full_path}")
