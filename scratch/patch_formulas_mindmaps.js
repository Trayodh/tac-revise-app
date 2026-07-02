const fs = require('fs');

// Comprehensive data patches for all thin topics
// Format: topicId -> { formulas: string, mindmap: { root, branches: [{title, subnodes}] } }
const PATCHES = {

  "2d-geometry": {
    formulas: `# Coordinate Geometry Basics
Distance between (x₁,y₁) and (x₂,y₂) = √[(x₂-x₁)² + (y₂-y₁)²]
Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)
Section formula (m:n internally) = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))
# Slope & Line
Slope m = (y₂-y₁)/(x₂-x₁) = tan θ
Equation: y - y₁ = m(x - x₁) [point-slope]
# Area of Triangle (vertices)
Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|
Collinear if Area = 0
# Circle
(x-h)² + (y-k)² = r² [centre (h,k), radius r]
General: x² + y² + 2gx + 2fy + c = 0 → centre(-g,-f), radius=√(g²+f²-c)`,
    mindmap: {
      root: "2D Coordinate Geometry",
      branches: [
        { title: "Distance & Midpoint", subnodes: ["Distance Formula", "Midpoint Formula", "Section Formula (m:n)"] },
        { title: "Lines", subnodes: ["Slope m = tanθ", "Point-Slope Form", "Parallel: m₁=m₂", "Perpendicular: m₁m₂=-1"] },
        { title: "Triangle Area", subnodes: ["½|determinant| formula", "Collinear if area=0", "Centroid = avg of vertices"] },
        { title: "Circles", subnodes: ["(x-h)²+(y-k)²=r²", "General form → centre", "Tangent ⊥ radius at contact"] }
      ]
    }
  },

  "geometry": {
    formulas: `# Triangle Properties
Angle sum = 180° | Exterior angle = sum of remote interior angles
Pythagoras: a² + b² = c² (right triangle)
Area = ½ × base × height = √[s(s-a)(s-b)(s-c)] [Heron's]
Sine Rule: a/sinA = b/sinB = c/sinC = 2R
Cosine Rule: a² = b² + c² - 2bc·cosA
# Congruence (CPCT)
SSS, SAS, ASA, AAS, RHS
# Similarity
AA, SAS, SSS similarity → ratio of areas = (ratio of sides)²
# Parallel Lines
Alternate angles equal | Co-interior angles supplementary
Basic Proportionality (Thales): DE∥BC → AD/DB = AE/EC`,
    mindmap: {
      root: "Geometry",
      branches: [
        { title: "Triangles", subnodes: ["Angle sum 180°", "Pythagoras a²+b²=c²", "Heron's formula", "Sine & Cosine Rules"] },
        { title: "Congruence", subnodes: ["SSS, SAS, ASA", "AAS, RHS", "CPCT rule"] },
        { title: "Similarity", subnodes: ["AA, SAS, SSS", "Area ratio = side ratio²", "Thales theorem"] },
        { title: "Parallel Lines", subnodes: ["Alternate = equal", "Co-interior = 180°", "Corresponding = equal"] }
      ]
    }
  },

  "circles-polygons": {
    formulas: `# Circle Theorems
Angle at centre = 2 × angle at circumference (same arc)
Angles in same segment are equal
Angle in semicircle = 90° (Thales)
Opposite angles of cyclic quadrilateral = 180°
Tangent ⊥ radius at point of contact
Two tangents from external point are equal in length
# Arc & Sector
Arc length = (θ/360) × 2πr
Sector area = (θ/360) × πr²
# Polygons
Sum of interior angles of n-gon = (n-2) × 180°
Each interior angle (regular) = (n-2)×180°/n
Each exterior angle (regular) = 360°/n
Sum of exterior angles = always 360°`,
    mindmap: {
      root: "Circles & Polygons",
      branches: [
        { title: "Circle Theorems", subnodes: ["Centre angle = 2× circumference", "Same segment angles equal", "Semicircle = 90°", "Cyclic quad: opp angles = 180°"] },
        { title: "Tangent Properties", subnodes: ["Tangent ⊥ radius", "Equal tangents from ext. point", "Chord-tangent angle"] },
        { title: "Arc & Sector", subnodes: ["Arc = θ/360 × 2πr", "Sector area = θ/360 × πr²", "Segment = Sector - Triangle"] },
        { title: "Polygons", subnodes: ["Int. angle sum = (n-2)×180°", "Ext. angle sum = 360°", "Regular polygon formulae"] }
      ]
    }
  },

  "mensuration": {
    formulas: `# 2D Shapes: Area
Triangle = ½bh | Equilateral = (√3/4)a²
Rectangle = l×b | Square = a²
Circle = πr² | Semicircle = πr²/2
Trapezoid = ½(a+b)h | Parallelogram = base × height
Rhombus = ½d₁d₂
# 2D Shapes: Perimeter
Circle (circumference) = 2πr
Rectangle = 2(l+b) | Square = 4a
# 3D Shapes: Volume
Cube = a³ | Cuboid = l×b×h
Sphere = 4/3·πr³ | Hemisphere = 2/3·πr³
Cylinder = πr²h | Cone = 1/3·πr²h
# 3D Shapes: Surface Area (Total)
Cube = 6a² | Cuboid = 2(lb+bh+hl)
Sphere = 4πr² | Cylinder = 2πr(r+h)
Cone = πr(r+l) where l = slant height = √(r²+h²)`,
    mindmap: {
      root: "Mensuration",
      branches: [
        { title: "2D Area", subnodes: ["Triangle = ½bh", "Circle = πr²", "Trapezoid = ½(a+b)h", "Rhombus = ½d₁d₂"] },
        { title: "2D Perimeter", subnodes: ["Circle = 2πr", "Rectangle = 2(l+b)", "Regular n-gon = n×side"] },
        { title: "3D Volume", subnodes: ["Cube = a³", "Sphere = 4/3πr³", "Cone = ⅓πr²h", "Cylinder = πr²h"] },
        { title: "3D Surface Area", subnodes: ["Sphere = 4πr²", "Cylinder = 2πr(r+h)", "Cone = πr(r+l)", "Cube = 6a²"] }
      ]
    }
  },

  "surface-area-volume": {
    formulas: `# Volume Formulas
Cube = a³ | Cuboid = l × b × h
Sphere = 4/3 × π × r³ | Hemisphere = 2/3 × π × r³
Right Circular Cylinder = π × r² × h
Right Circular Cone = 1/3 × π × r² × h
Frustum of Cone = 1/3 × π × h × (R² + Rr + r²)
# Total Surface Area
Cube = 6a² | Cuboid = 2(lb + bh + hl)
Sphere = 4πr² | Hemisphere (total) = 3πr²
Cylinder = 2πr(r + h) | Cone = πr(r + l) [l = slant = √(r²+h²)]
Frustum = π[R² + r² + l(R+r)] where l = √[h²+(R-r)²]
# Lateral/Curved Surface Area
Cylinder = 2πrh | Cone = πrl
Sphere (hemisphere, curved) = 2πr²`,
    mindmap: {
      root: "Surface Area & Volume",
      branches: [
        { title: "Prisms & Cuboids", subnodes: ["Cube: V=a³, SA=6a²", "Cuboid: V=lbh, SA=2(lb+bh+hl)", "Lateral SA = Perimeter × height"] },
        { title: "Sphere & Cone", subnodes: ["Sphere: V=4/3πr³, SA=4πr²", "Hemisphere: V=2/3πr³, TSA=3πr²", "Cone: V=⅓πr²h, TSA=πr(r+l)"] },
        { title: "Cylinder", subnodes: ["Volume = πr²h", "CSA = 2πrh", "TSA = 2πr(r+h)"] },
        { title: "Frustum", subnodes: ["V=⅓πh(R²+Rr+r²)", "TSA=π[R²+r²+l(R+r)]", "l=√[h²+(R-r)²]"] }
      ]
    }
  },

  "arithmetic": {
    formulas: `# Percentages
x% of y = xy/100
% increase = (Increase/Original) × 100
% decrease = (Decrease/Original) × 100
# Profit & Loss
Profit = SP - CP | Loss = CP - SP
Profit% = (Profit/CP) × 100 | Loss% = (Loss/CP) × 100
SP = CP × (100+P%)/100 | CP = SP × 100/(100+P%)
Discount = MP - SP | Discount% = (Discount/MP) × 100
# Simple & Compound Interest
SI = PRT/100 | A = P + SI
CI: A = P(1 + R/100)ⁿ | CI = A - P
Effective rate for half-yearly: R/2, n×2
# Ratio & Proportion
a:b = c:d → ad = bc (cross-multiply)
Fourth proportional: a:b = c:x → x = bc/a
Mean proportional of a and b = √(ab)`,
    mindmap: {
      root: "Arithmetic",
      branches: [
        { title: "Percentages", subnodes: ["x% of y = xy/100", "% change formula", "Successive % change"] },
        { title: "Profit & Loss", subnodes: ["P% = Profit/CP × 100", "SP from CP formula", "Discount = MP - SP", "Marked Price tricks"] },
        { title: "Interest", subnodes: ["SI = PRT/100", "CI = P(1+R/100)ⁿ - P", "Half-yearly: R/2, 2n"] },
        { title: "Ratio", subnodes: ["a:b::c:d → ad=bc", "Mean proportion = √ab", "Componendo-Dividendo"] }
      ]
    }
  },

  "ratios-averages": {
    formulas: `# Ratios & Proportions
If a:b = c:d → ad = bc
Fourth proportional: a:b = c:x → x = bc/a
Mean proportional: a:x = x:b → x = √(ab)
Compound ratio: (a:b) × (c:d) = ac:bd
# Averages
Average = Sum of observations / Number of observations
If average of n numbers = A, and one number x is added: new avg = (nA + x)/(n+1)
Weighted average = Σ(wᵢxᵢ) / Σwᵢ
# Mixture & Alligation
Alligation rule: cheaper:dearer = (dearer price - mean) : (mean - cheaper price)
# Averages Shortcut
If avg of first n natural numbers = (n+1)/2
Sum of first n natural numbers = n(n+1)/2
Sum of squares = n(n+1)(2n+1)/6
Sum of cubes = [n(n+1)/2]²`,
    mindmap: {
      root: "Ratios & Averages",
      branches: [
        { title: "Ratios", subnodes: ["Cross multiplication rule", "Fourth proportional", "Compound ratio", "Duplicate ratio = a²:b²"] },
        { title: "Averages", subnodes: ["Sum / Count", "New avg with addition", "Weighted average", "Alligations shortcut"] },
        { title: "Sequences", subnodes: ["Sum 1..n = n(n+1)/2", "Sum squares = n(n+1)(2n+1)/6", "Sum cubes = [n(n+1)/2]²"] },
        { title: "Mixture", subnodes: ["Alligation rule", "Cheaper:Dearer ratio", "Remove & replace formula"] }
      ]
    }
  },

  "time-distance": {
    formulas: `# Speed, Time & Distance
Speed = Distance / Time | Distance = Speed × Time | Time = Distance / Speed
Average Speed = Total Distance / Total Time (NOT average of speeds)
If two equal distances at s₁ and s₂: Average Speed = 2s₁s₂/(s₁+s₂)
Conversion: km/hr to m/s → multiply by 5/18 | m/s to km/hr → multiply by 18/5
# Relative Speed
Same direction: Relative speed = |s₁ - s₂|
Opposite direction: Relative speed = s₁ + s₂
# Train Problems
Time to cross a pole/person = Length of train / Speed of train
Time to cross a platform = (Length of train + Length of platform) / Speed
# Boats & Streams
Downstream speed = Boat speed + Stream speed
Upstream speed = Boat speed - Stream speed
Speed of Boat in still water = ½(Downstream + Upstream)
# Work
Work = Rate × Time | Combined rate = 1/t₁ + 1/t₂
If A takes 'a' days and B takes 'b' days: Together = ab/(a+b) days`,
    mindmap: {
      root: "Time, Speed & Distance",
      branches: [
        { title: "Basic Formulae", subnodes: ["S = D/T", "Conversion: ×5/18 or ×18/5", "Avg speed = 2s₁s₂/(s₁+s₂)"] },
        { title: "Relative Speed", subnodes: ["Same dir: |s₁-s₂|", "Opp dir: s₁+s₂", "Train crossing pole vs platform"] },
        { title: "Boats & Streams", subnodes: ["Downstream = boat + stream", "Upstream = boat - stream", "Still water = ½(D+U)"] },
        { title: "Work & Pipes", subnodes: ["Together = ab/(a+b)", "Efficiency ∝ 1/time", "Negative work (leak)"] }
      ]
    }
  },

  "earth-atmosphere": {
    formulas: `# Earth's Structure
Radius: ~6,371 km | Circumference: ~40,075 km
Layers: Crust → Mantle → Outer Core → Inner Core
Crust: 5-70 km thick (oceanic vs continental)
# Atmosphere Layers (height approx)
Troposphere: 0-12 km (weather occurs, lapse rate 6.5°C/km)
Stratosphere: 12-50 km (ozone layer 20-35 km)
Mesosphere: 50-80 km (meteors burn up)
Thermosphere: 80-700 km (Aurora, ISS orbits)
Exosphere: 700 km+ (gradually fades to space)
# Latitudes
Equator: 0° | Tropics: 23.5°N/S | Arctic/Antarctic: 66.5°N/S
# Key Atmospheric Facts
Standard lapse rate = 6.5°C per 1000m ascent
Composition: N₂ 78%, O₂ 21%, Ar 0.9%, CO₂ 0.04%
Tropopause: Boundary between troposphere and stratosphere`,
    mindmap: {
      root: "Earth & Atmosphere",
      branches: [
        { title: "Earth Layers", subnodes: ["Crust (5-70 km)", "Mantle (silicate rock)", "Outer Core (liquid iron)", "Inner Core (solid iron)"] },
        { title: "Atmosphere Layers", subnodes: ["Troposphere (0-12km)", "Stratosphere (12-50km)", "Mesosphere (50-80km)", "Thermosphere (80-700km)"] },
        { title: "Key Numbers", subnodes: ["Lapse rate 6.5°C/km", "Ozone at 20-35km", "Equator 0°, Tropics ±23.5°"] },
        { title: "Composition", subnodes: ["N₂ 78%, O₂ 21%", "Ar 0.9%, CO₂ 0.04%", "Variable: H₂O vapor"] }
      ]
    }
  },

  "climatology-clouds": {
    formulas: `# Cloud Classification (Height)
High clouds (>6000m): Cirrus (wispy), Cirrostratus, Cirrocumulus
Middle clouds (2000-6000m): Altocumulus, Altostratus
Low clouds (<2000m): Stratus, Stratocumulus, Nimbostratus
Convective (all heights): Cumulus (fair weather), Cumulonimbus (thunderstorm/anvil)
# Rainfall Types
Conventional: Heated air rises → thunder, lightning (equatorial)
Orographic: Moist air forced over mountains (Windward: heavy, Leeward: rain shadow)
Cyclonic/Frontal: Cold & warm air masses meet (temperate)
# Climate Classification (Köppen Basics)
A (Tropical): Hot, wet year-round (equatorial rainforests)
B (Arid/Semi-arid): Low rainfall, high evaporation (deserts)
C (Temperate): Mild winters (Mediterranean, subtropical)
D (Continental): Cold winters, warm summers (boreal/taiga)
E (Polar): Extremely cold, tundra and ice caps
# India Seasons
SW Monsoon: June-September | NE Monsoon: Oct-Dec (Tamil Nadu)
Retreating Monsoon: Oct-Nov | Western Disturbances: Dec-Feb (NW India)`,
    mindmap: {
      root: "Climatology & Clouds",
      branches: [
        { title: "Cloud Types", subnodes: ["High: Cirrus, Cirrostratus", "Middle: Alto-cumulus/stratus", "Low: Stratus, Nimbostratus", "Vertical: Cumulus, Cumulonimbus"] },
        { title: "Rainfall Types", subnodes: ["Conventional (Equatorial)", "Orographic (Mountain)", "Cyclonic/Frontal (Temperate)"] },
        { title: "Köppen Zones", subnodes: ["A: Tropical/Equatorial", "B: Arid (Desert)", "C: Temperate", "D: Continental, E: Polar"] },
        { title: "India Seasons", subnodes: ["SW Monsoon: Jun-Sep", "NE Monsoon: Oct-Dec", "Retreating: Oct-Nov", "Western Disturbances: Dec-Feb"] }
      ]
    }
  },

  "geomorphology-rocks": {
    formulas: `# Seismic Waves
P-waves (Primary): Travel through solid+liquid, fastest, compressional
S-waves (Secondary): Travel through solid only, transverse
L-waves (Surface): Slowest, cause maximum damage
Shadow Zone: P-wave: 103°-143° | S-wave: >103° (liquid core)
# Rock Classification
Igneous: Formed by cooling of magma (Granite=intrusive, Basalt=extrusive)
Sedimentary: Formed by deposition (Sandstone, Limestone, Coal)
Metamorphic: Transformed by heat/pressure (Marble from Limestone, Quartzite from Sandstone)
# Plate Boundaries
Convergent: Plates collide → mountains/trenches (Himalayas, Mariana)
Divergent: Plates separate → mid-ocean ridges (Mid-Atlantic)
Transform: Plates slide past → earthquakes (San Andreas)
# Landforms
Fluvial: V-shaped valley, ox-bow lake, delta, flood plain
Glacial: U-shaped valley, fjord, moraine, cirque
Karst: Caves, stalagmites, stalactites (limestone dissolution)
Aeolian: Dunes, yardang (wind erosion in deserts)`,
    mindmap: {
      root: "Geomorphology & Rocks",
      branches: [
        { title: "Seismic Waves", subnodes: ["P-waves (fastest, all media)", "S-waves (solid only)", "L-waves (surface, most damage)", "Shadow zones"] },
        { title: "Rock Types", subnodes: ["Igneous: Granite, Basalt", "Sedimentary: Sandstone, Coal", "Metamorphic: Marble, Quartzite", "Rock cycle"] },
        { title: "Plate Tectonics", subnodes: ["Convergent → mountains", "Divergent → ridges", "Transform → earthquakes", "Hotspots"] },
        { title: "Landforms", subnodes: ["Fluvial: V-valley, delta", "Glacial: U-valley, fjord", "Karst: caves, stalagmites", "Aeolian: dunes, yardang"] }
      ]
    }
  },

  "world-geography-mountains": {
    formulas: `# World's Highest Peaks
Mt. Everest (Himalayas): 8,849m - Highest
K2 (Karakoram): 8,611m - 2nd highest
Kangchenjunga (Himalayas): 8,586m - 3rd highest
Aconcagua (Andes): 6,961m - Americas highest
Kilimanjaro (Africa): 5,895m - Tallest in Africa
Mont Blanc (Alps): 4,808m - Europe highest
McKinley/Denali (Alaska): 6,190m - N. America
# Major Mountain Ranges
Himalayas: Asia | Andes: S. America | Alps: Europe
Rockies: N. America | Urals: Russia/Europe border
Great Dividing Range: Australia | Atlas: Africa
# Indian Mountains
Himadri (Great Himalayas): Highest, perennial snow
Himachal (Middle Himalayas): Shimla, Kashmir
Shiwalik (Outer Himalayas): Foothill ranges
Aravalli: Oldest in India | Vindhya/Satpura: Central India
Western Ghats (Sahyadri) | Eastern Ghats
Highest in Deccan: Anai Mudi (2695m, Kerala)`,
    mindmap: {
      root: "World Mountains",
      branches: [
        { title: "Highest Peaks", subnodes: ["Everest 8849m (Asia)", "Aconcagua 6961m (Americas)", "Kilimanjaro 5895m (Africa)", "Mont Blanc 4808m (Europe)"] },
        { title: "Major Ranges", subnodes: ["Himalayas (Asia)", "Andes (South America)", "Alps (Europe)", "Rockies (North America)"] },
        { title: "India - Himalayas", subnodes: ["Himadri (Great Himalayas)", "Himachal (Middle)", "Shiwalik (Outer)", "Karakoram & Ladakh"] },
        { title: "India - Peninsular", subnodes: ["Aravalli (oldest)", "Vindhya & Satpura", "Western Ghats (Sahyadri)", "Eastern Ghats (discontinuous)"] }
      ]
    }
  },

  "world-geography-straits-deserts": {
    formulas: `# Important Straits (Separates → Connects)
Strait of Gibraltar: Europe/Africa → Atlantic/Mediterranean
Palk Strait: India/Sri Lanka | Hormuz: Iran/Oman → Persian Gulf/Arabian Sea
Malacca: Malaysia/Indonesia → Pacific/Indian Ocean
Bering Strait: Russia/Alaska → Arctic/Pacific
Suez Canal: Red Sea ↔ Mediterranean (NOT a strait)
# Important Deserts
Hot Deserts: Sahara (largest, Africa), Arabian, Thar (India), Atacama (driest)
Cold Deserts: Gobi (Mongolia/China), Ladakh (India), Antarctic (largest desert overall)
# Key Facts
Thar Desert: Rajasthan, India | Sambhar Lake (saltwater) within Thar
Cold Desert in India: Ladakh, Spiti (Himachal Pradesh)
# Passes (India)
Karakoram Pass: J&K (highest motorable) | Zoji La: J&K (NH-1)
Rohtang Pass: Himachal | Shipki La: India-China (HP)
Nathu La: Sikkim-China | Bom Di La: Arunachal-China
Lipulekh: Uttarakhand | Diphu: Arunachal`,
    mindmap: {
      root: "Straits & Deserts",
      branches: [
        { title: "Important Straits", subnodes: ["Gibraltar: Europe-Africa", "Palk Strait: India-Lanka", "Hormuz: Gulf entry", "Malacca: SE Asia trade"] },
        { title: "Hot Deserts", subnodes: ["Sahara (Africa, largest)", "Arabian (W. Asia)", "Thar (India, Rajasthan)", "Atacama (driest on Earth)"] },
        { title: "Cold Deserts", subnodes: ["Gobi (Mongolia/China)", "Ladakh (India)", "Antarctic (overall largest)", "Patagonian (Argentina)"] },
        { title: "Mountain Passes (India)", subnodes: ["Karakoram (J&K)", "Rohtang (Himachal)", "Nathu La (Sikkim)", "Bom Di La (Arunachal)"] }
      ]
    }
  },

  "india-forests-wetlands": {
    formulas: `# Forest Types in India
Tropical Evergreen: Annual rainfall >200cm, Western Ghats, NE India (Rosewood, Ebony)
Tropical Deciduous (Monsoon): 100-200cm rainfall, most common (Teak, Sal, Sandalwood)
Thorn & Scrub: <75cm rainfall, Rajasthan, Gujarat (Babool, Khair)
Montane: Himalayan foothills (Oak, Rhododendron, Deodar)
Mangrove: Coastal/deltaic (Sundarbans - largest mangrove; Sundari tree gives name)
# Important Ramsar Wetlands (India)
Chilika Lake (Odisha) - 1st Ramsar site in India
Keoladeo Ghana (Rajasthan) - Bharatpur Bird Sanctuary
Loktak Lake (Manipur) - Floating Islands (Phumdis)
Wular Lake (J&K) - Largest freshwater lake in India
Sambhar Lake (Rajasthan) - Largest saltwater lake in India
Kolleru Lake (Andhra Pradesh)
# Key Protected Areas
Project Tiger (1973): 54 reserves | Project Elephant: 32 reserves
# Forest Cover (approx)
India: ~21.7% of geographical area is forest cover`,
    mindmap: {
      root: "Forests & Wetlands",
      branches: [
        { title: "Forest Types", subnodes: ["Evergreen: >200cm rain", "Deciduous (Teak, Sal)", "Thorn & Scrub: <75cm", "Mangrove: coastal/delta"] },
        { title: "Ramsar Sites", subnodes: ["Chilika (Odisha, 1st)", "Keoladeo (Rajasthan)", "Loktak (Manipur)", "Wular (J&K)"] },
        { title: "Mangroves", subnodes: ["Sundarbans (largest)", "Sundari tree namesake", "Bengal/Andaman/Gujarat", "Breeding ground for fish"] },
        { title: "Wildlife Projects", subnodes: ["Project Tiger (1973)", "54 Tiger Reserves", "Project Elephant", "Crocodile/Snow Leopard"] }
      ]
    }
  },

  "india-resources-farming": {
    formulas: `# Mineral Distribution
Iron Ore: Jharkhand, Odisha (Singhbhum), Chhattisgarh (Bailadila)
Coal: Jharkhand (Jharia - largest), West Bengal (Raniganj), MP, Odisha
Petroleum: Assam (oldest), Mumbai High (largest offshore), Rajasthan
Mica: Jharkhand (leading), Rajasthan, Andhra Pradesh
Copper: Jharkhand (Singhbhum), Rajasthan (Khetri)
Bauxite: Odisha, Jharkhand, MP, Gujarat
# Agriculture - Key Crops
Kharif (June-Nov): Rice, Maize, Cotton, Jute, Bajra, Jowar, Groundnut
Rabi (Nov-April): Wheat, Barley, Mustard, Peas, Gram
Zaid (Summer): Cucumber, Watermelon
# Agricultural Revolutions
Green (Wheat): 1960s, Punjab/Haryana | Blue (Fish): Inland fish
White (Milk): Operation Flood, Amul | Yellow (Oilseeds)
Pink (Shrimp/Meat) | Golden (Fruits/Honey) | Silver (Eggs)
# Leading States
Rice: WB, UP, Andhra | Wheat: UP, Punjab, Haryana
Cotton: Gujarat, Maharashtra | Jute: WB (90%+)`,
    mindmap: {
      root: "Resources & Farming",
      branches: [
        { title: "Minerals", subnodes: ["Iron: Jharkhand/Odisha", "Coal: Jharia (largest)", "Petroleum: Mumbai High", "Mica: Jharkhand"] },
        { title: "Crops", subnodes: ["Kharif: Rice, Cotton", "Rabi: Wheat, Mustard", "Zaid: Summer crops", "Plantation: Tea, Coffee"] },
        { title: "Revolutions", subnodes: ["Green: Wheat", "White: Milk (Amul)", "Blue: Fish", "Yellow: Oilseeds"] },
        { title: "Leading States", subnodes: ["Rice: WB, UP", "Wheat: UP, Punjab", "Cotton: Gujarat", "Jute: West Bengal"] }
      ]
    }
  },

  "india-transport-routes": {
    formulas: `# National Highways
Longest: NH-44 (Srinagar to Kanyakumari, ~4000km, formerly NH-7)
NH-1: Delhi to Amritsar (renamed NH-44 in new system)
Golden Quadrilateral: Delhi-Mumbai-Chennai-Kolkata (5846 km)
# Waterways
NW-1: Ganga (Allahabad to Haldia) - longest
NW-2: Brahmaputra (Dhubri to Sadiya)
NW-3: West Coast Canal (Kerala)
# Ports
Major Ports (12): Mumbai (largest), JNPT (busiest container), Chennai, Kolkata
Ennore (Kamarajar), Kandla (largest by cargo volume), Vishakhapatnam (deepest)
# Railways
Largest employer in India | ~67,000+ route km
Gauge: Broad (1676mm) standard in India
# Airways
IATA codes: DEL (Delhi), BOM (Mumbai), MAA (Chennai), BLR (Bengaluru)
Busiest: Indira Gandhi International (Delhi)`,
    mindmap: {
      root: "Transport Routes",
      branches: [
        { title: "Highways", subnodes: ["NH-44: Srinagar-Kanyakumari", "Golden Quadrilateral (5846km)", "North-South, East-West Corridor", "Bharatmala Project"] },
        { title: "Waterways", subnodes: ["NW-1: Ganga (longest)", "NW-2: Brahmaputra", "NW-3: West Coast Canal", "Sagarmala Project"] },
        { title: "Ports", subnodes: ["Mumbai (largest by traffic)", "JNPT (busiest containers)", "Kandla (largest by cargo)", "Vizag (deepest)"] },
        { title: "Railways", subnodes: ["~67000 route km", "Broad gauge standard", "Bullet train: Ahmedabad-Mumbai", "Dedicated Freight Corridors"] }
      ]
    }
  },

  "india-national-parks": {
    formulas: `# Famous National Parks & Wildlife Sanctuaries
Jim Corbett (Uttarakhand): 1st NP in India (1936), Tigers, Elephants
Kaziranga (Assam): 70%+ world's one-horned rhino, UNESCO
Sundarbans (WB/Bangladesh): Largest mangrove, Royal Bengal Tiger, UNESCO
Gir (Gujarat): Only Asiatic Lions in wild
Ranthambore (Rajasthan): Tiger reserve, historic fort
Sariska (Rajasthan): Tiger reserve
Bandipur (Karnataka): Tigers, Elephants, WHS
Periyar (Kerala): Elephants, in Cardamom Hills
Keoladeo/Bharatpur (Rajasthan): Bird sanctuary, UNESCO, Siberian Cranes
Valley of Flowers (Uttarakhand): UNESCO, alpine flowers
Manas (Assam): UNESCO, Project Tiger & Elephant
Namdapha (Arunachal): Largest NP in Northeast
# Project Tiger
Launched: 1973 | Sites: 54 | High density: Madhya Pradesh
# Conservation Status (IUCN)
EX (Extinct) > EW > CR (Critically Endangered) > EN > VU > NT > LC`,
    mindmap: {
      root: "National Parks",
      branches: [
        { title: "UNESCO World Heritage", subnodes: ["Kaziranga (One-horned Rhino)", "Sundarbans (Mangrove/Tiger)", "Keoladeo (Birds)", "Valley of Flowers", "Manas (Assam)"] },
        { title: "Big Cats", subnodes: ["Corbett (1st NP, Tigers)", "Ranthambore (Tigers)", "Gir (Asiatic Lions)", "Sariska (Tigers)"] },
        { title: "Unique Wildlife", subnodes: ["Kaziranga: Rhinos", "Periyar: Elephants", "Namdapha: Snow Leopard", "Bandipur: Elephant corridor"] },
        { title: "Projects", subnodes: ["Project Tiger (1973)", "Project Elephant (1992)", "Crocodile Project", "Sea Turtle Project"] }
      ]
    }
  },

  "physics-thermodynamics": {
    formulas: `# Laws of Thermodynamics
Zeroth Law: If A=B and B=C thermally → A=C (defines temperature)
First Law (Energy Conservation): Q = ΔU + W | Heat in = Internal energy + Work done
Second Law (Entropy): Heat flows spontaneously from hot to cold; entropy always increases
Third Law: Entropy → 0 as Temperature → 0 K (absolute zero)
# Heat Transfer
Conduction: Q/t = kA(T₁-T₂)/d [Fourier's Law]
Convection: Heat carried by fluid flow
Radiation: Q = σAεT⁴ [Stefan-Boltzmann] (no medium needed)
# Ohm's Law & Electricity
V = IR | P = VI = I²R = V²/R
Series: Rₜ = R₁+R₂+... | Parallel: 1/Rₜ = 1/R₁+1/R₂+...
# Temperature Scales
°C = (°F - 32) × 5/9 | °F = °C × 9/5 + 32
K = °C + 273.15 | Absolute zero = -273.15°C = 0 K
# Specific Heat
Water: 4200 J/kg·K | Ice: 2100 J/kg·K | Steel: ~500 J/kg·K
Q = mcΔT | Latent Heat: Q = mL (no temperature change)`,
    mindmap: {
      root: "Thermodynamics & Heat",
      branches: [
        { title: "Laws of Thermo", subnodes: ["Zeroth: Thermal equilibrium", "First: Q = ΔU + W", "Second: Entropy increases", "Third: S→0 at T→0"] },
        { title: "Heat Transfer", subnodes: ["Conduction (solid)", "Convection (fluid)", "Radiation (no medium)", "Stefan-Boltzmann: σAεT⁴"] },
        { title: "Electricity", subnodes: ["Ohm: V=IR", "Power: P=VI=I²R", "Series: R sum", "Parallel: 1/R sum"] },
        { title: "Temperature", subnodes: ["K = °C + 273", "°F = °C×9/5 + 32", "Q=mcΔT", "Latent heat Q=mL"] }
      ]
    }
  },

  "biology-botany": {
    formulas: `# Photosynthesis
Light Reaction (Thylakoids): Water splits → O₂ released, ATP + NADPH produced
Dark Reaction/Calvin Cycle (Stroma): CO₂ fixed using ATP+NADPH → Glucose
Overall: 6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂
C3 plants: 1st product 3-PGA (wheat, rice, oats, most plants)
C4 plants: 1st product OAA, adapted to hot/dry (maize, sugarcane)
CAM plants: Night CO₂ uptake (cactus, pineapple)
# Transpiration
Loss of water vapour through stomata (leaf pores)
Guard cells control stomatal opening/closing
# Plant Hormones (Phytohormones)
Auxin: Cell elongation, apical dominance, fruit development
Gibberellin: Stem elongation, seed germination, bolting
Cytokinin: Cell division, delays senescence, lateral bud growth
Abscisic Acid (ABA): Stress hormone, stomatal closure, dormancy
Ethylene: Fruit ripening, leaf abscission (gaseous hormone)
# Lindeman's Law (Ecology)
10% Energy Transfer Rule: Only 10% of energy passes from one trophic level to next`,
    mindmap: {
      root: "Plant Biology",
      branches: [
        { title: "Photosynthesis", subnodes: ["Light reaction: O₂ + ATP", "Calvin cycle: Glucose", "C3 plants (rice, wheat)", "C4 plants (maize, sugarcane)"] },
        { title: "Plant Hormones", subnodes: ["Auxin: elongation", "Gibberellin: germination", "Cytokinin: cell division", "Ethylene: fruit ripening", "ABA: stress/dormancy"] },
        { title: "Transpiration", subnodes: ["Stomata open/close", "Guard cells regulate", "Xylem transport water", "Phloem transport food"] },
        { title: "Ecology", subnodes: ["10% energy rule", "Food chains/webs", "Producers → Consumers", "Decomposers cycle nutrients"] }
      ]
    }
  },

  "tenses-complete": {
    formulas: `# Tense Structure Reference
Simple Present: Subject + V₁(+s/es) | Negative: do/does not + V₁
Present Continuous: am/is/are + V₁+ing
Present Perfect: has/have + V₃ (past participle)
Present Perfect Continuous: has/have + been + V₁+ing + since/for
Simple Past: Subject + V₂ | Negative: did not + V₁
Past Continuous: was/were + V₁+ing
Past Perfect: had + V₃ (before another past action)
Past Perfect Continuous: had + been + V₁+ing
Simple Future: will/shall + V₁
Future Continuous: will/shall + be + V₁+ing
Future Perfect: will + have + V₃
Future Perfect Continuous: will + have + been + V₁+ing
# Key Signal Words
Present: always, often, usually, every day
Past: yesterday, ago, last year, in 2020
Perfect: already, just, yet, ever, never, since, for
Future: tomorrow, next week, soon, by 2025`,
    mindmap: {
      root: "Tenses",
      branches: [
        { title: "Present Tenses", subnodes: ["Simple: V₁+s/es", "Continuous: is/am/are+ing", "Perfect: has/have+V₃", "Perf. Continuous: have+been+ing"] },
        { title: "Past Tenses", subnodes: ["Simple: V₂", "Continuous: was/were+ing", "Perfect: had+V₃", "Perf. Continuous: had+been+ing"] },
        { title: "Future Tenses", subnodes: ["Simple: will+V₁", "Continuous: will+be+ing", "Perfect: will+have+V₃", "Going to (planned)"] },
        { title: "Signal Words", subnodes: ["Since/For → Perfect", "Yesterday/Ago → Past", "Tomorrow/Next → Future", "Always/Often → Present"] }
      ]
    }
  },

  "panchayati-raj": {
    formulas: `# 73rd Constitutional Amendment (1992) - Panchayati Raj
Schedules: 11th Schedule - 29 subjects for Panchayats
Duration of PR body: 5 years | Must be reconstituted within 6 months if dissolved early
State Finance Commission: Formed every 5 years to review finances
State Election Commission: Conducts PR elections (independent)
# Three-Tier Structure
Gram Panchayat: Village level | Panchayat Samiti: Block level | Zila Parishad: District level
# 74th Amendment - Urban Local Bodies
Schedules: 12th Schedule - 18 subjects
Municipal Corporation (city) | Municipal Council (town) | Nagar Panchayat (transitional)
Mayor: Head of Municipal Corporation | Ward Committees (>3 lakh pop)
# Reservation
1/3 seats reserved for women (some states 50%)
Reservation for SC/ST proportional to population
# Mnemonic: TEARS of OLD PM (11th Schedule Subjects)
Transport, Education, Animal husbandry, Roads, Sanitation, Old people, Land, Development, Poverty, Markets`,
    mindmap: {
      root: "Panchayati Raj (73rd & 74th Amendments)",
      branches: [
        { title: "73rd Amendment (Rural)", subnodes: ["3-tier: Gram/Block/District", "5-year term", "11th Schedule (29 subjects)", "State Finance Commission"] },
        { title: "74th Amendment (Urban)", subnodes: ["Municipal Corporation/Council", "12th Schedule (18 subjects)", "Ward Committees", "Mayor as head"] },
        { title: "Key Bodies", subnodes: ["State Election Commission", "State Finance Commission", "District Planning Committee", "Metropolitan Planning Comm"] },
        { title: "Reservations", subnodes: ["1/3 seats for women", "SC/ST proportional", "OBC at state discretion", "50% in some states"] }
      ]
    }
  },

  "important-articles": {
    formulas: `# Emergency Provisions
Art 352: National Emergency (Armed rebellion/external aggression) - 2/3 Parliament majority
Art 356: President's Rule in State (failure of constitutional machinery)
Art 360: Financial Emergency (financial stability threatened)
# President
Art 52-62: Office and election | Art 72: Pardoning Powers
Art 123: Ordinance making power (when Parliament not in session)
# Parliament
Art 79-122: Parliament provisions | Art 108: Joint Sitting
Art 110: Money Bill definition (Lok Sabha only)
Art 111: President's assent/return of bill
# Judiciary
Art 124-147: Supreme Court | Art 214-231: High Courts
Art 32: Right to Constitutional Remedies (Ambedkar: Heart & Soul of Constitution)
Art 226: High Court writs | Art 136: SLP - Special Leave Petition
# Fundamental Rights
Art 12-35: Fundamental Rights | Art 14: Equality before law
Art 19: 6 Freedoms | Art 21: Right to Life & Personal Liberty
Art 22: Protection against arrest | Art 25-28: Religious freedom
# DPSP
Art 36-51: Directive Principles | Art 44: Uniform Civil Code
Art 45: Early childhood care & education | Art 51A: Fundamental Duties (10+1)`,
    mindmap: {
      root: "Important Articles",
      branches: [
        { title: "Emergency (352/356/360)", subnodes: ["352: National Emergency", "356: President's Rule", "360: Financial Emergency", "352 needs 2/3 majority"] },
        { title: "Fundamental Rights", subnodes: ["Art 14: Equality", "Art 19: 6 Freedoms", "Art 21: Right to Life", "Art 32: Constitutional Remedies"] },
        { title: "Parliament & President", subnodes: ["Art 108: Joint Sitting", "Art 110: Money Bill", "Art 123: Ordinance Power", "Art 72: Pardoning Power"] },
        { title: "DPSP & Duties", subnodes: ["Art 44: Uniform Civil Code", "Art 45: Child Education", "Art 51A: 11 Duties", "Art 21A: Right to Education"] }
      ]
    }
  },

  "positions-tenures": {
    formulas: `# Minimum Age Requirements
President: 35 years | Vice President: 35 years
Governor: 35 years | Lok Sabha member: 25 years
Rajya Sabha member: 30 years | Supreme Court judge: No minimum age
# Tenure & Terms
President: 5 years (eligible for re-election)
Vice President: 5 years | Governor: 5 years (pleasure of President)
CJI/SC Judges: Till age 65 | HC Judges: Till age 62
CAG: 6 years or till 65 (whichever earlier)
CEC: 6 years or till 65 | Attorney General: Pleasure of President
# Removal Process
President: Impeachment by Parliament (2/3 majority + present & voting)
SC/HC Judge: Address by both Houses (special majority) + President
CEC: Same as SC judge (protected)
Governor: Pleasure of President (no formal removal process needed)
# Key Ages Mnemonic
Pres/VP/Gov = 35 | LS = 25 | RS = 30 | SC/HC No min age
SC retire 65 | HC retire 62 | PM/CM: No age limit`,
    mindmap: {
      root: "Positions & Tenures",
      branches: [
        { title: "Minimum Age", subnodes: ["President/VP/Governor: 35", "Lok Sabha MP: 25", "Rajya Sabha: 30", "Judges: No minimum"] },
        { title: "Terms of Office", subnodes: ["President/VP: 5 years", "SC Judge: till 65", "HC Judge: till 62", "CAG: 6 yrs or 65"] },
        { title: "Removal Processes", subnodes: ["President: Impeachment", "CJI: Parliamentary address", "CEC: Like SC judge", "Governor: Pleasure of Pres"] },
        { title: "Election Bodies", subnodes: ["CEC: 6yr/65", "State EC (73rd Amend)", "Election Commission", "Conduct: Art 324"] }
      ]
    }
  },

  "physical-geography": {
    formulas: `# Universe & Solar System
Age of Universe: ~13.8 billion years | Age of Earth: ~4.6 billion years
Light Year: Distance light travels in 1 year = 9.46 × 10¹² km
Nearest star: Proxima Centauri (4.24 light-years from Sun)
# Solar System Order
Planets (Mercury to Neptune): My Very Educated Mother Just Served Us Nachos
Dwarf Planets: Pluto, Eris, Ceres, Makemake, Haumea
Largest planet: Jupiter | Smallest: Mercury
Hottest: Venus (greenhouse effect, ~465°C) | Coldest: Neptune
Fastest orbit: Mercury (88 days) | Slowest: Neptune (165 years)
# Earth's Motions
Rotation: ~24 hours (causes day/night) | Revolution: ~365.25 days
Axial tilt: 23.5° (causes seasons) | Perihelion (Jan): closest to Sun
Aphelion (July): farthest from Sun
# Moon
Distance from Earth: ~384,400 km | Revolution: ~27.3 days (Sidereal)
Lunar month (synodic): ~29.5 days | Same face always visible (synchronous rotation)`,
    mindmap: {
      root: "Physical Geography & Universe",
      branches: [
        { title: "Solar System", subnodes: ["Order: My Very Educated...", "Largest: Jupiter", "Hottest: Venus", "Mercury: fastest orbit (88 days)"] },
        { title: "Earth Basics", subnodes: ["Rotation: 24 hrs (day/night)", "Revolution: 365.25 days", "Axial tilt: 23.5° (seasons)", "Perihelion: Jan, Aphelion: July"] },
        { title: "Moon & Tides", subnodes: ["Moon: 384,400 km away", "Synodic month: 29.5 days", "Spring tide: New/Full moon", "Neap tide: Quarter moon"] },
        { title: "Latitudes & Zones", subnodes: ["Equator: 0°", "Tropics: ±23.5°", "Arctic/Antarctic: ±66.5°", "Torrid, Temperate, Frigid zones"] }
      ]
    }
  },

  "differentiation": {
    formulas: `# Basic Differentiation Rules
d/dx(c) = 0 | d/dx(xⁿ) = nxⁿ⁻¹ (Power Rule)
d/dx(eˣ) = eˣ | d/dx(aˣ) = aˣ·ln a
d/dx(ln x) = 1/x | d/dx(log_a x) = 1/(x·ln a)
# Product & Quotient Rules
Product: d/dx(uv) = u'v + uv'
Quotient: d/dx(u/v) = (u'v - uv') / v²
Chain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x)
# Trig Derivatives
d/dx(sin x) = cos x | d/dx(cos x) = -sin x
d/dx(tan x) = sec²x | d/dx(cot x) = -cosec²x
d/dx(sec x) = sec x·tan x | d/dx(cosec x) = -cosec x·cot x
# Inverse Trig Derivatives
d/dx(sin⁻¹x) = 1/√(1-x²) | d/dx(cos⁻¹x) = -1/√(1-x²)
d/dx(tan⁻¹x) = 1/(1+x²) | d/dx(cot⁻¹x) = -1/(1+x²)
# Applications
Maxima: f'(x)=0, f''(x)<0 | Minima: f'(x)=0, f''(x)>0
Increasing: f'(x)>0 | Decreasing: f'(x)<0`,
    mindmap: {
      root: "Differentiation",
      branches: [
        { title: "Basic Rules", subnodes: ["Power: nxⁿ⁻¹", "e^x stays e^x", "ln x → 1/x", "Chain, Product, Quotient"] },
        { title: "Trig Derivatives", subnodes: ["d(sinx)/dx = cosx", "d(cosx)/dx = -sinx", "d(tanx)/dx = sec²x", "d(secx)/dx = secx·tanx"] },
        { title: "Inverse Trig", subnodes: ["d(sin⁻¹x)/dx = 1/√(1-x²)", "d(tan⁻¹x)/dx = 1/(1+x²)", "d(cos⁻¹x)/dx = -1/√(1-x²)"] },
        { title: "Applications", subnodes: ["Maxima: f'=0, f''<0", "Minima: f'=0, f''>0", "Increasing: f'>0", "Point of inflection: f''=0"] }
      ]
    }
  },

  "integration": {
    formulas: `# Standard Integrals
∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1) | ∫(1/x) dx = ln|x| + C
∫eˣ dx = eˣ + C | ∫aˣ dx = aˣ/ln a + C
∫sin x dx = -cos x + C | ∫cos x dx = sin x + C
∫tan x dx = -ln|cos x| + C | ∫sec²x dx = tan x + C
∫1/√(a²-x²) dx = sin⁻¹(x/a) + C
∫1/(a²+x²) dx = (1/a)tan⁻¹(x/a) + C
# Integration Techniques
Substitution: u = g(x), du = g'(x)dx
By Parts: ∫u dv = uv - ∫v du [ILATE: Inverse, Log, Algebra, Trig, Exp]
Partial Fractions: For rational functions N(x)/D(x)
# Definite Integral Properties
∫ₐᵇ f(x)dx = ∫ₐᵇ f(a+b-x)dx
∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx
∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx [if f(x) is even] or 0 [if f(x) is odd]
# Applications
Area under curve = |∫ₐᵇ f(x) dx|`,
    mindmap: {
      root: "Integration",
      branches: [
        { title: "Standard Forms", subnodes: ["∫xⁿ = xⁿ⁺¹/(n+1)", "∫eˣ = eˣ + C", "∫sinx = -cosx+C", "∫1/x = ln|x|+C"] },
        { title: "Techniques", subnodes: ["Substitution: u-sub", "By Parts: ILATE order", "Partial Fractions", "Trig substitution"] },
        { title: "Definite Integral", subnodes: ["∫ₐᵇ f(a+b-x)dx property", "Even function: 2×half", "Odd function: 0", "Area = |∫f(x)dx|"] },
        { title: "Special Integrals", subnodes: ["∫1/√(a²-x²) → sin⁻¹", "∫1/(a²+x²) → tan⁻¹", "∫√(a²-x²) → formula", "Reduction formulae"] }
      ]
    }
  }
};

// Now patch data.js for each topic
let src = fs.readFileSync('data.js', 'utf8');
let patchCount = 0;
let failCount = 0;

for (const [topicId, patch] of Object.entries(PATCHES)) {
  const topicIdStr = `id: "${topicId}"`;
  const topicIdStr2 = `id: '${topicId}'`;
  const idx = src.indexOf(topicIdStr) !== -1 ? src.indexOf(topicIdStr) : src.indexOf(topicIdStr2);
  if (idx === -1) {
    console.log('NOT FOUND topic:', topicId);
    failCount++;
    continue;
  }

  // Find the formulas: field for this topic (within ~4000 chars after id)
  const topicBlock = src.substring(idx, idx + 4000);
  
  // Replace formulas
  if (patch.formulas) {
    const formulasRx = /formulas:\s*[`'"]([^`'"]{0,200})[`'"]/;
    const fMatch = formulasRx.exec(topicBlock);
    if (fMatch) {
      const oldFormulas = fMatch[0];
      const escapedFormulas = patch.formulas.replace(/`/g, "'");
      const newFormulas = `formulas: \`${escapedFormulas}\``;
      src = src.substring(0, idx) + src.substring(idx).replace(oldFormulas, newFormulas);
      patchCount++;
    } else {
      console.log('Could not find formulas field for:', topicId);
      failCount++;
    }
  }
  
  // Replace mindmap
  if (patch.mindmap) {
    const updatedBlock = src.substring(idx, idx + 4000);
    const mindmapRx = /mindmap:\s*\{[\s\S]{0,1000}?\}/;
    const mmMatch = mindmapRx.exec(updatedBlock);
    if (mmMatch) {
      const oldMindmap = mmMatch[0];
      const newMindmap = `mindmap: ${JSON.stringify(patch.mindmap, null, 14).replace(/\n/g, '\n              ')}`;
      src = src.substring(0, idx) + src.substring(idx).replace(oldMindmap, newMindmap);
    } else {
      console.log('Could not find mindmap for:', topicId);
    }
  }
}

fs.writeFileSync('data.js', src, 'utf8');
console.log(`\nDone! Patched ${patchCount} formula fields. Failed: ${failCount}`);
