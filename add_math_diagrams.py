import os

diagrams = {
    'Pathfinder_Elite/modules/Mathematics/Triangles.md': '''
## Visual Summary & Diagrams: Triangles

### Types of Triangles
```mermaid
mindmap
  root((Triangles))
    By Sides
      Equilateral (All sides equal)
      Isosceles (Two sides equal)
      Scalene (No sides equal)
    By Angles
      Acute (All angles < 90°)
      Right (One angle = 90°)
      Obtuse (One angle > 90°)
```

### Congruence Criteria
```mermaid
flowchart TD
    Congruence((Triangle Congruence))
    Congruence --> SSS[SSS: Side-Side-Side]
    Congruence --> SAS[SAS: Side-Angle-Side]
    Congruence --> ASA[ASA: Angle-Side-Angle]
    Congruence --> AAS[AAS: Angle-Angle-Side]
    Congruence --> RHS[RHS: Right-Hypotenuse-Side]
```
''',
    'Pathfinder_Elite/modules/Mathematics/Surface_Area_and_Volume_of_Solids.md': '''
## Visual Summary & Diagrams: 3D Mensuration

### Classification of 3D Solids
```mermaid
mindmap
  root((3D Solids))
    Polyhedrons (Flat Faces)
      Prisms
        Cube
        Cuboid
      Pyramids
        Square Pyramid
        Triangular Pyramid
    Non-Polyhedrons (Curved Surfaces)
      Cylinder
      Cone
      Frustum of a Cone
      Sphere
      Hemisphere
```
''',
    'Pathfinder_Elite/modules/Mathematics/Circle.md': '''
## Visual Summary & Diagrams: Circle Geometry

### Circle Terminology & Theorems
```mermaid
flowchart TD
    Circle((Circle Elements))
    Circle --> Center[Center]
    Circle --> Radius[Radius]
    Circle --> Diameter[Diameter = 2 * Radius]
    Circle --> Chord[Chord]
    Circle --> Secant[Secant Line]
    Circle --> Tangent[Tangent Line]
    
    Chord --> Theorem1[Perpendicular from center bisects chord]
    Tangent --> Theorem2[Radius is perpendicular to tangent at point of contact]
```
''',
    'Pathfinder_Elite/modules/Mathematics/Measurements_of_Angles_and_Trigonometric_Ratios.md': '''
## Visual Summary & Diagrams: Trigonometry

### Trigonometric Ratios (SOH CAH TOA)
```mermaid
flowchart LR
    RightTriangle((Right-Angled Triangle)) --> Hypotenuse[Hypotenuse]
    RightTriangle --> Opposite[Opposite Side]
    RightTriangle --> Adjacent[Adjacent Side]
    
    Opposite & Hypotenuse -->|Ratio| Sine[Sin θ = Opp / Hyp]
    Adjacent & Hypotenuse -->|Ratio| Cosine[Cos θ = Adj / Hyp]
    Opposite & Adjacent -->|Ratio| Tangent[Tan θ = Opp / Adj]
```
'''
}

for file_path, content in diagrams.items():
    full_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\\" + file_path
    if os.path.exists(full_path):
        with open(full_path, 'r', encoding='utf-8') as f:
            existing_content = f.read()
            
        # Append at the end if not already present
        if "Visual Summary & Diagrams" not in existing_content:
            new_content = existing_content + "\n\n" + content
            with open(full_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Added Math diagrams to {file_path}")
        else:
            print(f"Diagrams already exist in {file_path}")
    else:
        print(f"File not found: {full_path}")
