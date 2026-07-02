const fs = require('fs');
let src = fs.readFileSync('data.js', 'utf8');

const PATCHES = {
  "data-interpretation": {
    formulas: `# Bar Charts & Histograms
Used to compare discrete quantities or continuous ranges.
# Pie Charts
Total Angle = 360° | 1% = 3.6°
Value = (Central Angle / 360°) × Total Value
# Line Graphs
Used to track changes over periods of time.
Slope indicates rate of change.
# Tables & Missing Data
Focus on row/column totals. 
Use given percentages/ratios to fill in blanks.
# Core Calculations
Percentage Increase = (Final - Initial) / Initial × 100
Average = Sum / Total Count
Ratio A:B = A/B`,
    mindmap: {
      root: "Data Interpretation",
      branches: [
        { title: "Charts", subnodes: ["Bar Charts", "Pie Charts (1% = 3.6°)", "Line Graphs"] },
        { title: "Calculations", subnodes: ["Averages", "Ratios & Proportions", "Percentage Changes"] },
        { title: "Tables", subnodes: ["Cross-checking totals", "Finding missing data", "Mixed DI (Table + Pie)"] },
        { title: "Strategies", subnodes: ["Approximation for speed", "Read axes & units carefully", "Skip lengthy calculations"] }
      ]
    }
  },
  "physics-electricity-magnetism": {
    formulas: `# Electricity
Coulomb's Law: F = k|q₁q₂|/r²
Electric Field: E = F/q
Potential Difference: V = W/q
Ohm's Law: V = IR
Resistance: R = ρL/A
Resistors in Series: R_eq = R₁ + R₂ + ...
Resistors in Parallel: 1/R_eq = 1/R₁ + 1/R₂ + ...
Power: P = VI = I²R = V²/R
# Magnetism
Magnetic field of straight wire: B = (μ₀I)/(2πr)
Lorentz Force: F = q(E + v×B)
Force on current-carrying wire: F = ILB sinθ
Faraday's Law of Induction: ε = -N(ΔΦ/Δt)
Lenz's Law: Induced current opposes change in flux.`,
    mindmap: {
      root: "Electricity & Magnetism",
      branches: [
        { title: "Electrostatics", subnodes: ["Coulomb's Law", "Electric Field (E=F/q)", "Electric Potential (V=W/q)"] },
        { title: "Current Electricity", subnodes: ["Ohm's Law (V=IR)", "Series/Parallel Resistors", "Electric Power (P=VI)"] },
        { title: "Magnetism", subnodes: ["Magnetic field (B)", "Lorentz Force", "Force on current wire"] },
        { title: "Electromagnetism", subnodes: ["Faraday's Law of Induction", "Lenz's Law", "AC Generators/Transformers"] }
      ]
    }
  },
  "earth-atmosphere": {
    formulas: `# Earth's Structure
Radius: ~6,371 km | Circumference: ~40,075 km
Layers: Crust → Mantle → Outer Core → Inner Core
# Atmosphere Layers
Troposphere: 0-12 km (weather occurs, lapse rate 6.5°C/km)
Stratosphere: 12-50 km (ozone layer 20-35 km)
Mesosphere: 50-80 km (meteors burn up)
Thermosphere: 80-700 km (Aurora, ISS orbits)
Exosphere: 700 km+
# Composition
Nitrogen 78%, Oxygen 21%, Argon 0.9%, Carbon Dioxide 0.04%`,
    mindmap: {
      root: "Earth & Atmosphere",
      branches: [
        { title: "Earth Layers", subnodes: ["Crust", "Mantle", "Outer Core (liquid)", "Inner Core (solid)"] },
        { title: "Atmosphere", subnodes: ["Troposphere (weather)", "Stratosphere (ozone)", "Mesosphere (meteors)", "Thermosphere (auroras)"] },
        { title: "Key Facts", subnodes: ["Lapse rate 6.5°C/km", "Nitrogen 78%, Oxygen 21%", "Ozone layer protects from UV"] },
        { title: "Latitudes", subnodes: ["Equator 0°", "Tropics ±23.5°", "Arctic/Antarctic ±66.5°"] }
      ]
    }
  },
  "world-geography-mountains": {
    formulas: `# Highest Peaks
Everest (Himalayas): 8,849m (Highest in Asia/World)
Aconcagua (Andes): 6,961m (Highest in S. America)
Denali (Alaska): 6,190m (Highest in N. America)
Kilimanjaro: 5,895m (Highest in Africa)
Mont Blanc: 4,808m (Highest in Alps)
# Major Ranges
Andes (longest continental)
Himalayas (highest)
Rockies (N. America)
Alps (Europe)
# Indian Peaks
K2 (Karakoram): 8,611m
Kangchenjunga: 8,586m
Anamudi: 2,695m (Highest in Peninsular India)`,
    mindmap: {
      root: "World Mountains",
      branches: [
        { title: "Major Ranges", subnodes: ["Himalayas (Asia)", "Andes (S. America)", "Rockies (N. America)", "Alps (Europe)"] },
        { title: "Highest Peaks", subnodes: ["Everest (8849m)", "Aconcagua (6961m)", "Kilimanjaro (5895m)", "Denali (6190m)"] },
        { title: "Indian Himalayas", subnodes: ["Karakoram & Ladakh", "Himadri (Great)", "Himachal (Middle)", "Shiwalik (Outer)"] },
        { title: "Peninsular India", subnodes: ["Aravalli (Oldest)", "Western Ghats (Sahyadri)", "Eastern Ghats", "Vindhya & Satpura"] }
      ]
    }
  },
  "quadratic-eq": {
    formulas: `# Standard Form
ax² + bx + c = 0 (a ≠ 0)
# Roots & Discriminant
Roots: x = [-b ± √(b² - 4ac)] / 2a
Discriminant (Δ) = b² - 4ac
If Δ > 0: Real & distinct roots
If Δ = 0: Real & equal roots
If Δ < 0: Complex conjugate roots
# Sum & Product of Roots
If roots are α, β:
Sum (α + β) = -b/a
Product (αβ) = c/a
Equation from roots: x² - (α+β)x + αβ = 0
# Max/Min Value
Occurs at x = -b/2a
Min value (if a > 0) = -Δ/4a
Max value (if a < 0) = -Δ/4a`,
    mindmap: {
      root: "Quadratic Equations",
      branches: [
        { title: "General Form", subnodes: ["ax² + bx + c = 0", "Discriminant (Δ) = b² - 4ac", "Roots formula (Sridharacharya)"] },
        { title: "Nature of Roots", subnodes: ["Δ > 0: Real, distinct", "Δ = 0: Real, equal", "Δ < 0: Complex conjugates"] },
        { title: "Roots Relations", subnodes: ["Sum = -b/a", "Product = c/a", "Eqn: x² - (Sum)x + (Prod) = 0"] },
        { title: "Graphs & Extrema", subnodes: ["Parabola opens up if a>0", "Vertex at x = -b/2a", "Max/Min value = -Δ/4a"] }
      ]
    }
  },
  "complex-numbers": {
    formulas: `# Representation
Algebraic: z = a + ib (where i² = -1)
Polar: z = r(cosθ + isinθ) = r cisθ
Euler: z = re^(iθ)
# Modulus & Argument
Modulus |z| = √(a² + b²)
Argument θ = tan⁻¹(b/a)
# Conjugate
If z = a + ib, then z̄ = a - ib
z·z̄ = |z|²
# De Moivre's Theorem
(cosθ + isinθ)ⁿ = cos(nθ) + isin(nθ)
# Cube Roots of Unity
1, ω, ω² where ω = (-1 + i√3)/2
1 + ω + ω² = 0
ω³ = 1`,
    mindmap: {
      root: "Complex Numbers",
      branches: [
        { title: "Basic Forms", subnodes: ["z = a + ib", "Polar: r(cosθ + isinθ)", "Euler: re^(iθ)", "i² = -1, i⁴ = 1"] },
        { title: "Properties", subnodes: ["Modulus |z| = √(a²+b²)", "Argument θ = tan⁻¹(b/a)", "Conjugate z̄ = a - ib", "z·z̄ = |z|²"] },
        { title: "Theorems", subnodes: ["De Moivre's Theorem", "Triangle Inequality: |z₁+z₂| ≤ |z₁|+|z₂|"] },
        { title: "Roots of Unity", subnodes: ["1, ω, ω²", "Sum = 0: 1 + ω + ω² = 0", "Product = 1: ω³ = 1"] }
      ]
    }
  },
  "straight-lines": {
    formulas: `# Equation of Line
Slope-Intercept: y = mx + c
Point-Slope: y - y₁ = m(x - x₁)
Two-Point: y - y₁ = [(y₂-y₁)/(x₂-x₁)](x - x₁)
Intercept: x/a + y/b = 1
Normal: x·cosα + y·sinα = p
# Angles & Distance
Angle between lines: tanθ = |(m₁ - m₂)/(1 + m₁m₂)|
Distance from (x₁, y₁) to ax+by+c=0 is d = |ax₁+by₁+c|/√(a²+b²)
Distance between parallel lines: d = |c₁ - c₂|/√(a²+b²)
# Conditions
Parallel lines: m₁ = m₂
Perpendicular lines: m₁m₂ = -1
Concurrent lines: Det of coefficients = 0`,
    mindmap: {
      root: "Straight Lines",
      branches: [
        { title: "Forms of Eqn", subnodes: ["Slope-intercept: y=mx+c", "Point-slope form", "Intercept form: x/a+y/b=1", "Normal form"] },
        { title: "Slope & Angles", subnodes: ["Slope m = tanθ = Δy/Δx", "Angle tanθ = |(m₁-m₂)/(1+m₁m₂)|", "Parallel: m₁=m₂, Perp: m₁m₂=-1"] },
        { title: "Distances", subnodes: ["Point to Line ⊥ distance", "Distance between parallel lines"] },
        { title: "Triangle Centers", subnodes: ["Centroid (Medians)", "Orthocenter (Altitudes)", "Circumcenter (Perp. Bisectors)", "Incenter (Angle Bisectors)"] }
      ]
    }
  },
  "central-tendency": {
    formulas: `# Mean
Arithmetic Mean (AM) = Σx/n
For grouped data: AM = Σfx / Σf
Combined Mean = (n₁x̄₁ + n₂x̄₂) / (n₁ + n₂)
# Median
Middle value when sorted.
For grouped data: Median = L + [(N/2 - CF)/f] × c
# Mode
Most frequent value.
For grouped data: Mode = L + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × c
# Empirical Relation
Mode = 3(Median) - 2(Mean)
# Geometric & Harmonic Mean
GM = (x₁·x₂...xₙ)^(1/n)
HM = n / (1/x₁ + 1/x₂ + ... + 1/xₙ)
AM ≥ GM ≥ HM`,
    mindmap: {
      root: "Central Tendency",
      branches: [
        { title: "Mean (AM)", subnodes: ["Sum/Count (Σx/n)", "Combined Mean formula", "Affected by extreme values"] },
        { title: "Median", subnodes: ["Middle value of sorted data", "Divides data into 50-50", "Formula for grouped data"] },
        { title: "Mode", subnodes: ["Most frequent value", "Empirical: Mode = 3Med - 2Mean", "Grouped data formula"] },
        { title: "Other Means", subnodes: ["Geometric Mean (GM)", "Harmonic Mean (HM)", "Relation: AM ≥ GM ≥ HM"] }
      ]
    }
  }
};

let patchesApplied = 0;
// We'll slice the string based on indexOf to avoid regex complexity
for (const [topicId, patch] of Object.entries(PATCHES)) {
  const idStr = 'id: "' + topicId + '"';
  const idStr2 = "id: '" + topicId + "'";
  let idx = src.indexOf(idStr);
  if (idx === -1) idx = src.indexOf(idStr2);
  
  if (idx !== -1) {
    const endBlockIdx = src.indexOf('}', idx + 100);
    // Find formulas
    const formIdx = src.indexOf('formulas:', idx);
    if (formIdx !== -1 && formIdx < idx + 4000) {
      const formEnd = Math.min(src.indexOf('\n', formIdx + 12), src.indexOf(',', formIdx));
      if (formEnd !== -1) {
         // replace just the formulas field
         const origForm = src.substring(formIdx, formEnd);
         const escapedFormulas = patch.formulas.replace(/\`/g, "'");
         src = src.substring(0, formIdx) + 'formulas: `' + escapedFormulas + '`' + src.substring(formEnd);
      }
    }
    
    // Find mindmap
    const mmIdx = src.indexOf('mindmap:', idx);
    if (mmIdx !== -1 && mmIdx < idx + 4000) {
      const mmEnd = src.indexOf('}', mmIdx);
      if (mmEnd !== -1) {
         const newMmStr = 'mindmap: ' + JSON.stringify(patch.mindmap, null, 14).replace(/\n/g, '\n              ');
         // To be safe, let's just find the closing brace of mindmap properly
         let closeIdx = -1;
         let braceCount = 0;
         for (let i = mmIdx + 8; i < src.length; i++) {
           if (src[i] === '{') braceCount++;
           if (src[i] === '}') {
             braceCount--;
             if (braceCount === 0) {
               closeIdx = i;
               break;
             }
           }
         }
         if (closeIdx !== -1) {
           src = src.substring(0, mmIdx) + newMmStr + src.substring(closeIdx + 1);
           patchesApplied++;
         }
      }
    }
  }
}

fs.writeFileSync('data.js', src, 'utf8');
console.log('Patches applied:', patchesApplied);
