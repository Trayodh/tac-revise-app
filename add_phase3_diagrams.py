import os

diagrams = {
    'Pathfinder_Elite/modules/History/Ancient_India_Core_and_MCQs.md': '''
## Visual Summary & Diagrams: Ancient India

### Chronology of Ancient Indian Empires
```mermaid
timeline
    title Ancient India Timeline
    2500 BCE : Indus Valley Civilization
    1500 BCE : Early Vedic Period
    1000 BCE : Later Vedic Period
    600 BCE : Mahajanapadas
    322 BCE : Mauryan Empire (Chandragupta, Ashoka)
    320 CE : Gupta Empire (Golden Age)
```

### Buddhism vs Jainism
```mermaid
flowchart TD
    subgraph Buddhism
    B[Gautama Buddha] --> B1[Four Noble Truths]
    B --> B2[Eightfold Path]
    B --> B3[Nirvana]
    end

    subgraph Jainism
    J[Mahavira] --> J1[Three Jewels: Triratna]
    J --> J2[Five Vows: Ahimsa, Satya, Asteya, Aparigraha, Brahmacharya]
    J --> J3[Kaivalya]
    end
```
''',

    'Pathfinder_Elite/modules/History/Medieval_India_Sultanate_and_MCQs.md': '''
## Visual Summary & Diagrams: Medieval India

### Delhi Sultanate Dynasties (1206 - 1526)
```mermaid
flowchart LR
    Slave[Slave Dynasty: 1206-1290] --> Khilji[Khilji Dynasty: 1290-1320]
    Khilji --> Tughlaq[Tughlaq Dynasty: 1320-1414]
    Tughlaq --> Sayyid[Sayyid Dynasty: 1414-1451]
    Sayyid --> Lodi[Lodi Dynasty: 1451-1526]
```

### The Great Mughals
```mermaid
timeline
    title The Mughal Empire (1526 - 1707)
    1526 : Babur (First Battle of Panipat)
    1530 : Humayun
    1556 : Akbar
    1605 : Jahangir
    1628 : Shah Jahan
    1658 : Aurangzeb
```
''',

    'Pathfinder_Elite/modules/History/Modern_India_National_Movement_and_MCQs.md': '''
## Visual Summary & Diagrams: Modern India

### Phases of the Indian National Movement
```mermaid
timeline
    title Indian Freedom Struggle
    1885 : Formation of INC
    1885 - 1905 : Moderate Phase
    1905 - 1919 : Extremist Phase (Swadeshi Movement)
    1919 - 1947 : Gandhian Era (Non-Cooperation, Civil Disobedience, Quit India)
    1947 : Independence
```

### British Land Revenue Systems
```mermaid
mindmap
  root((Land Revenue Systems))
    Zamindari (Permanent Settlement)
      Introduced by Cornwallis (1793)
      Bengal, Bihar, Orissa
      Zamindar owns land, pays fixed rent
    Ryotwari
      Introduced by Munro & Read (1820)
      Madras, Bombay
      Direct settlement with the peasant (Ryot)
    Mahalwari
      Introduced by Holt Mackenzie (1822)
      North-West Frontier, Punjab
      Settlement with the village community (Mahal)
```
''',

    'Pathfinder_Elite/modules/Economy/Macroeconomics_Five_Year_Plans_and_MCQs.md': '''
## Visual Summary & Diagrams: Macroeconomics & Planning

### History of Economic Planning in India
```mermaid
timeline
    title Economic Planning
    1950 : Planning Commission Established
    1951 : First Five-Year Plan (Agriculture focus)
    1956 : Second Five-Year Plan (Heavy Industries - Mahalanobis Model)
    1991 : Economic Reforms (LPG)
    2015 : NITI Aayog replaces Planning Commission
```
''',

    'Pathfinder_Elite/modules/Economy/Banking_Inflation_Public_Finance_and_MCQs.md': '''
## Visual Summary & Diagrams: Banking & Inflation

### RBI Monetary Policy Instruments
```mermaid
flowchart TD
    RBI[Reserve Bank of India] --> Quant[Quantitative Tools]
    RBI --> Qual[Qualitative Tools]
    
    Quant --> CRR[CRR: Cash Reserve Ratio]
    Quant --> SLR[SLR: Statutory Liquidity Ratio]
    Quant --> Repo[Repo Rate & Reverse Repo Rate]
    Quant --> OMO[Open Market Operations]
    
    Qual --> Margin[Margin Requirements]
    Qual --> Moral[Moral Suasion]
    Qual --> Direct[Direct Action]
```

### Types of Inflation
```mermaid
mindmap
  root((Inflation))
    Demand-Pull
      Caused by excess demand
      "Too much money chasing too few goods"
    Cost-Push
      Caused by increase in cost of production
      e.g., Raw material cost, Wages
```

### Indian Banking Structure
```mermaid
flowchart TD
    RBI[RBI: Central Bank] --> SCB[Scheduled Commercial Banks]
    RBI --> Coop[Cooperative Banks]
    
    SCB --> PSBs[Public Sector Banks: SBI, PNB]
    SCB --> PvtB[Private Sector Banks: HDFC, ICICI]
    SCB --> ForB[Foreign Banks]
    SCB --> RRBs[Regional Rural Banks]
```
''',

    'Pathfinder_Elite/modules/Economy/Economic_Sectors_and_Master_Revision_MCQs.md': '''
## Visual Summary & Diagrams: Economic Sectors

### Sectors of the Indian Economy
```mermaid
mindmap
  root((Economic Sectors))
    Primary Sector
      Agriculture
      Mining
      Fishing
      Forestry
    Secondary Sector
      Manufacturing
      Construction
      Electricity
      Water supply
    Tertiary Sector
      Services
      Banking
      IT & Software
      Tourism
      Healthcare
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
