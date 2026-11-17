const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.js') || f.endsWith('.json'));

let totalFixed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // 1. Mitosis vs Meiosis (TD)
  content = content.replace(
      /flowchart TD\\r\\n    Cell\(\(Parent Cell 2n\)\).*?Meiosis2\[4 Unique Gametes n\]\\r\\n    end/s,
      `flowchart TD\\r\\n    Cell(("Parent Cell 2n"))\\r\\n    \\r\\n    subgraph Mitosis\\r\\n    Cell -->|Prophase, Metaphase, Anaphase, Telophase| M["2 Identical Somatic Cells 2n"]\\r\\n    end\\r\\n    \\r\\n    subgraph Meiosis\\r\\n    Cell --> Meiosis1["2 Cells n"]\\r\\n    Meiosis1 --> Meiosis2["4 Unique Gametes n"]\\r\\n    end`
  );
  
  content = content.replace(
      /flowchart TD\\n    Cell\(\(Parent Cell 2n\)\).*?Meiosis2\[4 Unique Gametes n\]\\n    end/s,
      `flowchart TD\\n    Cell(("Parent Cell 2n"))\\n    \\n    subgraph Mitosis\\n    Cell -->|Prophase, Metaphase, Anaphase, Telophase| M["2 Identical Somatic Cells 2n"]\\n    end\\n    \\n    subgraph Meiosis\\n    Cell --> Meiosis1["2 Cells n"]\\n    Meiosis1 --> Meiosis2["4 Unique Gametes n"]\\n    end`
  );

  // 2. Mitosis vs Meiosis (LR)
  content = content.replace(
      /flowchart LR\\r\\n    Mitosis\(\(Mitosis\)\) --> Somatic\[Somatic Cells\].*?Meiosis --> CrossingOver\[Crossing Over occurs in Prophase I\]/s,
      `flowchart LR\\r\\n    Mitosis(("Mitosis")) --> Somatic["Somatic Cells"]\\r\\n    Mitosis --> Identical["2 Identical Diploid Cells (2n)"]\\r\\n    Mitosis --> PMAT["Prophase - Metaphase - Anaphase - Telophase"]\\r\\n    \\r\\n    Meiosis(("Meiosis")) --> Gametes["Sex Cells / Gametes"]\\r\\n    Meiosis --> Unique["4 Unique Haploid Cells (n)"]\\r\\n    Meiosis --> CrossingOver["Crossing Over occurs in Prophase I"]`
  );

  content = content.replace(
      /flowchart LR\\n    Mitosis\(\(Mitosis\)\) --> Somatic\[Somatic Cells\].*?Meiosis --> CrossingOver\[Crossing Over occurs in Prophase I\]/s,
      `flowchart LR\\n    Mitosis(("Mitosis")) --> Somatic["Somatic Cells"]\\n    Mitosis --> Identical["2 Identical Diploid Cells (2n)"]\\n    Mitosis --> PMAT["Prophase - Metaphase - Anaphase - Telophase"]\\n    \\n    Meiosis(("Meiosis")) --> Gametes["Sex Cells / Gametes"]\\n    Meiosis --> Unique["4 Unique Haploid Cells (n)"]\\n    Meiosis --> CrossingOver["Crossing Over occurs in Prophase I"]`
  );

  // 3. DNA Structure
  content = content.replace(
      /flowchart LR\\r\\n    DNA\(\(DNA\)\) -->\|Transcription\| RNA\[mRNA\]\\r\\n    RNA -->\|Translation\| Protein\[Protein\]/s,
      `flowchart LR\\r\\n    DNA(("DNA")) -->|Transcription| RNA["mRNA"]\\r\\n    RNA -->|Translation| Protein["Protein"]`
  );
  
  content = content.replace(
      /flowchart LR\\n    DNA\(\(DNA\)\) -->\|Transcription\| RNA\[mRNA\]\\n    RNA -->\|Translation\| Protein\[Protein\]/s,
      `flowchart LR\\n    DNA(("DNA")) -->|Transcription| RNA["mRNA"]\\n    RNA -->|Translation| Protein["Protein"]`
  );
  
  // Wait, let's also fix the Plant vs Animal Cell that I broke in the previous script!
  // My previous script replaced `Cell[\"(Eukaryotic Cell\"])` with `Cell([\"Eukaryotic Cell\"])`
  // Wait, if it was `Cell([\"Eukaryotic Cell\"])`, that is valid.
  // But maybe the `\]` was also escaped in the JSON? `\\"])`?
  // Let's just fix it to be clean.
  content = content.replace(
      /flowchart TD\\r\\n    Cell\(\[\\"Eukaryotic Cell\\"\]\).*?class Animal,CW2,P2,V2,C2 animalFill;/s,
      `flowchart TD\\r\\n    Cell(("Eukaryotic Cell"))\\r\\n    Cell --> Plant["Plant Cell"]\\r\\n    Cell --> Animal["Animal Cell"]\\r\\n    \\r\\n    Plant --> CW["Cell Wall - Present"]\\r\\n    Plant --> P["Plastids/Chloroplasts - Present"]\\r\\n    Plant --> V["Vacuole - Large, Central"]\\r\\n    Plant --> C["Centrioles - Absent"]\\r\\n    \\r\\n    Animal --> CW2["Cell Wall - Absent"]\\r\\n    Animal --> P2["Plastids - Absent"]\\r\\n    Animal --> V2["Vacuole - Small or Absent"]\\r\\n    Animal --> C2["Centrioles - Present"]\\r\\n    \\r\\n    classDef plantFill fill:#166534,stroke:#22c55e,stroke-width:2px,color:#fff;\\r\\n    classDef animalFill fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fff;\\r\\n    class Plant,CW,P,V,C plantFill;\\r\\n    class Animal,CW2,P2,V2,C2 animalFill;`
  );

  content = content.replace(
      /flowchart TD\\n    Cell\(\[\\"Eukaryotic Cell\\"\]\).*?class Animal,CW2,P2,V2,C2 animalFill;/s,
      `flowchart TD\\n    Cell(("Eukaryotic Cell"))\\n    Cell --> Plant["Plant Cell"]\\n    Cell --> Animal["Animal Cell"]\\n    \\n    Plant --> CW["Cell Wall - Present"]\\n    Plant --> P["Plastids/Chloroplasts - Present"]\\n    Plant --> V["Vacuole - Large, Central"]\\n    Plant --> C["Centrioles - Absent"]\\n    \\n    Animal --> CW2["Cell Wall - Absent"]\\n    Animal --> P2["Plastids - Absent"]\\n    Animal --> V2["Vacuole - Small or Absent"]\\n    Animal --> C2["Centrioles - Present"]\\n    \\n    classDef plantFill fill:#166534,stroke:#22c55e,stroke-width:2px,color:#fff;\\n    classDef animalFill fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fff;\\n    class Plant,CW,P,V,C plantFill;\\n    class Animal,CW2,P2,V2,C2 animalFill;`
  );
  
  // Prokaryotic vs Eukaryotic mindmap
  content = content.replace(
      /mindmap\\r\\n  root\(\[\\"Cells\\"\]\).*?Linear DNA/s,
      `mindmap\\r\\n  root(("Cells"))\\r\\n    Prokaryotic\\r\\n      No true nucleus\\r\\n      No membrane-bound organelles\\r\\n      Examples: Bacteria, Archaea\\r\\n      Circular DNA\\r\\n    Eukaryotic\\r\\n      True nucleus\\r\\n      Membrane-bound organelles\\r\\n      Examples: Plants, Animals, Fungi\\r\\n      Linear DNA`
  );

  content = content.replace(
      /mindmap\\n  root\(\[\\"Cells\\"\]\).*?Linear DNA/s,
      `mindmap\\n  root(("Cells"))\\n    Prokaryotic\\n      No true nucleus\\n      No membrane-bound organelles\\n      Examples: Bacteria, Archaea\\n      Circular DNA\\n    Eukaryotic\\n      True nucleus\\n      Membrane-bound organelles\\n      Examples: Plants, Animals, Fungi\\n      Linear DNA`
  );
  
  // Plant vs Animal LR
  content = content.replace(
      /flowchart LR\\r\\n    Plant\(\[\\"Plant Cell\\"\]\).*?Animal --> Centrioles\[Centrioles Present\]/s,
      `flowchart LR\\r\\n    Plant(("Plant Cell")) --> CellWall["Cell Wall Present"]\\r\\n    Plant --> Plastids["Plastids / Chloroplasts Present"]\\r\\n    Plant --> Vacuole["Large Central Vacuole"]\\r\\n    \\r\\n    Animal(("Animal Cell")) --> NoWall["No Cell Wall"]\\r\\n    Animal --> NoPlastids["No Plastids"]\\r\\n    Animal --> SmallVacuole["Small or No Vacuoles"]\\r\\n    Animal --> Centrioles["Centrioles Present"]`
  );

  content = content.replace(
      /flowchart LR\\n    Plant\(\[\\"Plant Cell\\"\]\).*?Animal --> Centrioles\[Centrioles Present\]/s,
      `flowchart LR\\n    Plant(("Plant Cell")) --> CellWall["Cell Wall Present"]\\n    Plant --> Plastids["Plastids / Chloroplasts Present"]\\n    Plant --> Vacuole["Large Central Vacuole"]\\n    \\n    Animal(("Animal Cell")) --> NoWall["No Cell Wall"]\\n    Animal --> NoPlastids["No Plastids"]\\n    Animal --> SmallVacuole["Small or No Vacuoles"]\\n    Animal --> Centrioles["Centrioles Present"]`
  );

  if (content !== original) {
     console.log('Fixed syntax in ' + file);
     fs.writeFileSync(file, content);
     totalFixed++;
  }
}
console.log('Total files fixed: ' + totalFixed);
