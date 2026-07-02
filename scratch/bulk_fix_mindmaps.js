/**
 * bulk_fix_mindmaps.js
 * Bulk-patches 27 thin mindmaps (< 2 branches) in data.js
 */
const fs = require('fs');

const MINDMAPS = {
  'data-interpretation': {
    root: 'Data Interpretation',
    branches: [
      {title: 'Chart Types', subnodes: ['Bar Chart', 'Pie Chart (1%=3.6°)', 'Line Graph', 'Mixed DI']},
      {title: 'Calculations', subnodes: ['Averages', 'Percentage Change', 'Ratio & Proportions']},
      {title: 'Tables', subnodes: ['Row/Column totals', 'Missing data', 'Two-way tables']},
      {title: 'Speed Tricks', subnodes: ['Approximate', 'Check options first', 'Skip slow steps']},
    ],
  },
  'differentiation': {
    root: 'Differentiation',
    branches: [
      {title: 'Basic Rules', subnodes: ['Power: nx^(n-1)', 'd(e^x)/dx = e^x', 'd(ln x)/dx = 1/x', 'Constant = 0']},
      {title: 'Trig Derivatives', subnodes: ['d(sinx)=cosx', 'd(cosx)=-sinx', 'd(tanx)=sec²x', 'd(secx)=secx·tanx']},
      {title: 'Rules', subnodes: ['Product Rule: u\'v+uv\'', 'Quotient Rule: (u\'v-uv\')/v²', 'Chain Rule: f\'(g)·g\'']},
      {title: 'Applications', subnodes: ['Maxima: f\'=0, f\'\'<0', 'Minima: f\'=0, f\'\'>0', 'Increasing: f\'>0']},
    ],
  },
  'integration': {
    root: 'Integration',
    branches: [
      {title: 'Standard Forms', subnodes: ['∫x^n = x^(n+1)/(n+1)', '∫e^x = e^x+C', '∫sinx = -cosx+C', '∫1/x = ln|x|+C']},
      {title: 'Techniques', subnodes: ['Substitution (u-sub)', 'By Parts (ILATE)', 'Partial Fractions']},
      {title: 'Definite Integral', subnodes: ['∫ₐᵇ f(a+b-x) property', 'Even: 2×half, Odd: 0', 'Area = |∫f(x)dx|']},
      {title: 'Inverse Trig', subnodes: ['∫1/√(a²-x²) → sin⁻¹', '∫1/(a²+x²) → tan⁻¹']},
    ],
  },
  'lines-angles-triangles': {
    root: 'Lines, Angles & Triangles',
    branches: [
      {title: 'Angles', subnodes: ['Supplementary = 180°', 'Complementary = 90°', 'Vertically opposite = equal']},
      {title: 'Parallel Lines', subnodes: ['Alternate angles equal', 'Co-interior = 180°', 'Corresponding equal']},
      {title: 'Triangles', subnodes: ['Angle sum = 180°', 'Pythagoras: a²+b²=c²', 'Exterior angle theorem']},
      {title: 'Congruence', subnodes: ['SSS, SAS, ASA, AAS', 'RHS for right triangles', 'CPCT after congruence']},
    ],
  },
  'circles-polygons': {
    root: 'Circles & Polygons',
    branches: [
      {title: 'Circle Theorems', subnodes: ['Angle at centre = 2× circumference', 'Same segment angles equal', 'Semicircle = 90°']},
      {title: 'Tangent Properties', subnodes: ['Tangent ⊥ radius', 'Equal tangents from ext. point', 'Alternate segment theorem']},
      {title: 'Arc & Sector', subnodes: ['Arc = θ/360 × 2πr', 'Sector area = θ/360 × πr²', 'Segment = Sector - Triangle']},
      {title: 'Polygons', subnodes: ['Int. angle sum = (n-2)×180°', 'Ext. angle sum = 360°', 'Regular polygon formulae']},
    ],
  },
  'area-perimeter': {
    root: 'Area & Perimeter',
    branches: [
      {title: 'Quadrilaterals', subnodes: ['Rectangle: A=l×b, P=2(l+b)', 'Square: A=a², P=4a', 'Parallelogram: A=b×h', 'Rhombus: A=½d₁d₂']},
      {title: 'Triangles', subnodes: ['A=½×b×h', 'Equilateral: A=√3/4×a²', 'Heron: A=√[s(s-a)(s-b)(s-c)]']},
      {title: 'Circles', subnodes: ['Area = πr²', 'Circumference = 2πr', 'Semicircle area = πr²/2', 'Sector area = θ/360×πr²']},
      {title: 'Trapezoid', subnodes: ['Area = ½(a+b)×h', 'Midsegment = ½(sum of parallel sides)']},
    ],
  },
  'surface-area-volume': {
    root: 'Surface Area & Volume',
    branches: [
      {title: 'Cube & Cuboid', subnodes: ['Cube V=a³, TSA=6a²', 'Cuboid V=lbh, TSA=2(lb+bh+hl)', 'Lateral SA = Perimeter×h']},
      {title: 'Sphere & Hemisphere', subnodes: ['Sphere V=4/3πr³, SA=4πr²', 'Hemisphere V=2/3πr³, TSA=3πr²']},
      {title: 'Cylinder & Cone', subnodes: ['Cylinder V=πr²h, TSA=2πr(r+h)', 'Cone V=⅓πr²h, TSA=πr(r+l)', 'l=slant=√(r²+h²)']},
      {title: 'Frustum', subnodes: ['V=⅓πh(R²+Rr+r²)', 'l=√[h²+(R-r)²]', 'TSA=π[R²+r²+l(R+r)]']},
    ],
  },
  'percentages-profit-loss': {
    root: 'Percentages & Profit/Loss',
    branches: [
      {title: 'Percentages', subnodes: ['x% of y = xy/100', '% increase = Increase/Original×100', 'Successive %: A then B = A+B+AB/100']},
      {title: 'Profit & Loss', subnodes: ['P% = Profit/CP×100', 'SP = CP×(100+P%)/100', 'Discount = MP - SP']},
      {title: 'Interest', subnodes: ['SI = PRT/100', 'CI = P(1+R/100)^n - P', 'Half-yearly: R/2, double n']},
      {title: 'Shortcuts', subnodes: ['False weight trick', 'Dishonest dealer', '2 items at same SP']},
    ],
  },
  'ratios-averages': {
    root: 'Ratios & Averages',
    branches: [
      {title: 'Ratios', subnodes: ['a:b::c:d → ad=bc', 'Fourth proportional', 'Compound ratio: ac:bd', 'Duplicate ratio = a²:b²']},
      {title: 'Averages', subnodes: ['Sum/Count', 'Combined avg formula', 'Effect of adding value', 'Weighted average']},
      {title: 'Alligation', subnodes: ['Cheaper:Dearer ratio', 'Rule: (dearer-mean):(mean-cheaper)', 'Mix milk/water type']},
      {title: 'Sequences', subnodes: ['Sum 1..n = n(n+1)/2', 'Sum squares: n(n+1)(2n+1)/6', 'Sum cubes: [n(n+1)/2]²']},
    ],
  },
  'time-distance': {
    root: 'Time, Speed & Distance',
    branches: [
      {title: 'Basic', subnodes: ['S = D/T', 'km/hr × 5/18 = m/s', 'Avg speed = 2s₁s₂/(s₁+s₂)']},
      {title: 'Relative Speed', subnodes: ['Same dir: |s₁-s₂|', 'Opp dir: s₁+s₂', 'Train problems']},
      {title: 'Boats & Streams', subnodes: ['Downstream = B+S', 'Upstream = B-S', 'Still water = ½(D+U)']},
      {title: 'Work & Time', subnodes: ['Together = ab/(a+b)', 'Efficiency ∝ 1/time', 'Pipes and cisterns']},
    ],
  },
  'tenses-complete': {
    root: 'Tenses',
    branches: [
      {title: 'Present Tenses', subnodes: ['Simple: V1+s/es', 'Continuous: is/am/are+V1+ing', 'Perfect: has/have+V3', 'Perf. Continuous: have+been+ing']},
      {title: 'Past Tenses', subnodes: ['Simple: V2', 'Continuous: was/were+ing', 'Perfect: had+V3', 'Perf. Continuous: had+been+ing']},
      {title: 'Future Tenses', subnodes: ['Simple: will+V1', 'Continuous: will+be+ing', 'Perfect: will+have+V3', 'Going to (planned)']},
      {title: 'Signal Words', subnodes: ['Since/For → Perfect', 'Yesterday/Ago → Past', 'Tomorrow/Next → Future', 'Always/Often → Present']},
    ],
  },
  'panchayati-raj': {
    root: 'Panchayati Raj',
    branches: [
      {title: '73rd Amendment (Rural)', subnodes: ['3-tier: Gram/Block/District', '5-year term', '11th Schedule (29 subjects)', 'State Finance Commission']},
      {title: '74th Amendment (Urban)', subnodes: ['Municipal Corporation/Council', '12th Schedule (18 subjects)', 'Ward Committees', 'Mayor as head']},
      {title: 'Key Bodies', subnodes: ['State Election Commission', 'State Finance Commission', 'District Planning Committee']},
      {title: 'Reservations', subnodes: ['1/3 seats for women', 'SC/ST proportional', '50% in some states']},
    ],
  },
  'important-articles': {
    root: 'Important Articles',
    branches: [
      {title: 'Emergency (352/356/360)', subnodes: ['352: National Emergency', '356: Presidents Rule', '360: Financial Emergency', '352 needs 2/3 majority']},
      {title: 'Fundamental Rights', subnodes: ['Art 14: Equality', 'Art 19: 6 Freedoms', 'Art 21: Right to Life', 'Art 32: Constitutional Remedies']},
      {title: 'Parliament & President', subnodes: ['Art 108: Joint Sitting', 'Art 110: Money Bill', 'Art 123: Ordinance Power', 'Art 72: Pardoning Power']},
      {title: 'DPSP & Duties', subnodes: ['Art 44: Uniform Civil Code', 'Art 45: Child Education', 'Art 51A: 11 Duties', 'Art 21A: Right to Education']},
    ],
  },
  'positions-tenures': {
    root: 'Positions & Tenures',
    branches: [
      {title: 'Minimum Age', subnodes: ['President/VP/Governor: 35', 'Lok Sabha MP: 25', 'Rajya Sabha: 30', 'Judges: No minimum']},
      {title: 'Terms of Office', subnodes: ['President/VP: 5 years', 'SC Judge: till 65', 'HC Judge: till 62', 'CAG: 6 yrs or 65']},
      {title: 'Removal Processes', subnodes: ['President: Impeachment', 'CJI: Parliamentary address', 'CEC: Like SC judge', 'Governor: Pleasure of Pres']},
      {title: 'Key Numbers', subnodes: ['Pres/VP/Gov = 35', 'LS=25, RS=30', 'SC retire 65, HC retire 62']},
    ],
  },
  'universe-solar-system': {
    root: 'Universe & Solar System',
    branches: [
      {title: 'Solar System Order', subnodes: ['My Very Educated Mother Just Served Us Nachos', 'Largest: Jupiter', 'Smallest: Mercury', 'Hottest: Venus']},
      {title: 'Earth Basics', subnodes: ['Rotation: 24 hrs (day/night)', 'Revolution: 365.25 days', 'Axial tilt: 23.5°', 'Perihelion: Jan, Aphelion: Jul']},
      {title: 'Moon', subnodes: ['Distance: 384400 km', 'Synodic month: 29.5 days', 'Spring tide: New/Full moon', 'Neap tide: Quarter moon']},
      {title: 'Space Agencies', subnodes: ['ISRO: India (Bengaluru)', 'NASA: USA', 'ESA: Europe', 'Roscosmos: Russia']},
    ],
  },
  'earth-atmosphere': {
    root: 'Earth & Atmosphere',
    branches: [
      {title: 'Earth Layers', subnodes: ['Crust (5-70 km)', 'Mantle (silicate)', 'Outer Core (liquid Fe)', 'Inner Core (solid Fe)']},
      {title: 'Atmosphere', subnodes: ['Troposphere (0-12 km)', 'Stratosphere (12-50 km)', 'Mesosphere (50-80 km)', 'Thermosphere (80-700 km)']},
      {title: 'Composition', subnodes: ['N2: 78%', 'O2: 21%', 'Ar: 0.9%', 'CO2: 0.04%']},
      {title: 'Key Facts', subnodes: ['Lapse rate 6.5°C/km', 'Ozone at 20-35 km', 'Equator 0°, Tropics 23.5°']},
    ],
  },
  'climatology-clouds': {
    root: 'Climatology & Clouds',
    branches: [
      {title: 'Cloud Types', subnodes: ['High: Cirrus, Cirrostratus', 'Middle: Alto-cumulus/stratus', 'Low: Stratus, Nimbostratus', 'Vertical: Cumulonimbus']},
      {title: 'Rainfall Types', subnodes: ['Conventional (Equatorial)', 'Orographic (Mountain)', 'Cyclonic/Frontal (Temperate)']},
      {title: 'Koppen Zones', subnodes: ['A: Tropical', 'B: Arid (Desert)', 'C: Temperate', 'D: Continental, E: Polar']},
      {title: 'India Seasons', subnodes: ['SW Monsoon: Jun-Sep', 'NE Monsoon: Oct-Dec', 'Western Disturbances: Dec-Feb']},
    ],
  },
  'geomorphology-rocks': {
    root: 'Geomorphology & Rocks',
    branches: [
      {title: 'Seismic Waves', subnodes: ['P-waves (fastest, all media)', 'S-waves (solid only)', 'L-waves (surface, most damage)', 'Shadow zones']},
      {title: 'Rock Types', subnodes: ['Igneous: Granite, Basalt', 'Sedimentary: Sandstone, Coal', 'Metamorphic: Marble, Quartzite']},
      {title: 'Plate Tectonics', subnodes: ['Convergent: mountains', 'Divergent: ridges', 'Transform: earthquakes']},
      {title: 'Landforms', subnodes: ['Fluvial: V-valley, delta', 'Glacial: U-valley, fjord', 'Karst: caves, stalagmites', 'Aeolian: dunes']},
    ],
  },
  'world-geography-mountains': {
    root: 'World Mountains',
    branches: [
      {title: 'Major Ranges', subnodes: ['Himalayas (Asia)', 'Andes (S. America)', 'Rockies (N. America)', 'Alps (Europe)']},
      {title: 'Highest Peaks', subnodes: ['Everest (8849m)', 'Aconcagua (6961m)', 'Kilimanjaro (5895m)', 'Denali (6190m)']},
      {title: 'India - Himalayas', subnodes: ['Himadri (Great)', 'Himachal (Middle)', 'Shiwalik (Outer)', 'Karakoram & Ladakh']},
      {title: 'Peninsular India', subnodes: ['Aravalli (Oldest)', 'Western Ghats', 'Eastern Ghats', 'Vindhya & Satpura']},
    ],
  },
  'world-geography-straits-deserts': {
    root: 'Straits & Deserts',
    branches: [
      {title: 'Important Straits', subnodes: ['Gibraltar: Europe-Africa', 'Palk Strait: India-Lanka', 'Hormuz: Gulf entry', 'Malacca: SE Asia trade']},
      {title: 'Hot Deserts', subnodes: ['Sahara (Africa, largest)', 'Arabian (W. Asia)', 'Thar (India, Rajasthan)', 'Atacama (driest)']},
      {title: 'Cold Deserts', subnodes: ['Gobi (Mongolia/China)', 'Ladakh (India)', 'Antarctic (overall largest)']},
      {title: 'Mountain Passes (India)', subnodes: ['Karakoram (J&K)', 'Rohtang (Himachal)', 'Nathu La (Sikkim)', 'Bom Di La (Arunachal)']},
    ],
  },
  'india-forests-wetlands': {
    root: 'Forests & Wetlands',
    branches: [
      {title: 'Forest Types', subnodes: ['Evergreen: >200cm rain', 'Deciduous: Teak, Sal', 'Thorn/Scrub: <75cm', 'Mangrove: coastal/delta']},
      {title: 'Ramsar Sites', subnodes: ['Chilika (Odisha, 1st)', 'Keoladeo (Rajasthan)', 'Loktak (Manipur)', 'Wular (J&K)']},
      {title: 'Mangroves', subnodes: ['Sundarbans (largest)', 'Sundari tree namesake', 'Bengal/Andaman/Gujarat']},
      {title: 'Wildlife Projects', subnodes: ['Project Tiger (1973)', '54 Tiger Reserves', 'Project Elephant', 'Crocodile Project']},
    ],
  },
  'india-resources-farming': {
    root: 'Resources & Farming',
    branches: [
      {title: 'Minerals', subnodes: ['Iron: Jharkhand/Odisha', 'Coal: Jharia (largest)', 'Petroleum: Mumbai High', 'Mica: Jharkhand']},
      {title: 'Crops', subnodes: ['Kharif: Rice, Cotton (Jun-Nov)', 'Rabi: Wheat, Mustard (Nov-Apr)', 'Zaid: Summer crops']},
      {title: 'Revolutions', subnodes: ['Green: Wheat', 'White: Milk (Amul)', 'Blue: Fish', 'Yellow: Oilseeds']},
      {title: 'Leading States', subnodes: ['Rice: WB, UP', 'Wheat: UP, Punjab', 'Cotton: Gujarat', 'Jute: West Bengal']},
    ],
  },
  'india-transport-routes': {
    root: 'Transport Routes',
    branches: [
      {title: 'Highways', subnodes: ['NH-44: Srinagar-Kanyakumari (longest)', 'Golden Quadrilateral (5846km)', 'N-S, E-W Corridor', 'Bharatmala Project']},
      {title: 'Waterways', subnodes: ['NW-1: Ganga (longest)', 'NW-2: Brahmaputra', 'NW-3: West Coast Canal', 'Sagarmala Project']},
      {title: 'Ports', subnodes: ['Mumbai (largest)', 'JNPT (busiest containers)', 'Kandla (largest by cargo)', 'Vizag (deepest)']},
      {title: 'Railways', subnodes: ['~67000 route km', 'Broad gauge standard', 'Dedicated Freight Corridors', 'Bullet train planned']},
    ],
  },
  'india-national-parks': {
    root: 'National Parks',
    branches: [
      {title: 'UNESCO World Heritage', subnodes: ['Kaziranga (Rhino)', 'Sundarbans (Tiger)', 'Keoladeo (Birds)', 'Valley of Flowers', 'Manas (Assam)']},
      {title: 'Big Cats', subnodes: ['Jim Corbett (1st NP)', 'Ranthambore (Tigers)', 'Gir (Asiatic Lions)', 'Sariska (Tigers)']},
      {title: 'Unique Wildlife', subnodes: ['Kaziranga: Rhinos', 'Periyar: Elephants', 'Namdapha: Snow Leopard']},
      {title: 'Projects', subnodes: ['Project Tiger (1973)', 'Project Elephant (1992)', '54 Tiger Reserves']},
    ],
  },
  'physics-heat': {
    root: 'Thermodynamics & Heat',
    branches: [
      {title: 'Laws of Thermo', subnodes: ['Zeroth: Thermal equilibrium', 'First: Q = ΔU + W', 'Second: Entropy increases', 'Third: S to 0 at T=0']},
      {title: 'Heat Transfer', subnodes: ['Conduction (solid)', 'Convection (fluid)', 'Radiation (no medium)', 'Stefan-Boltzmann: σAεT⁴']},
      {title: 'Temperature Scales', subnodes: ['K = °C + 273', '°F = °C×9/5 + 32', 'Absolute zero: 0 K = -273.15°C']},
      {title: 'Specific Heat', subnodes: ['Q = mcΔT', 'Latent heat Q = mL', 'Water: 4200 J/kg·K']},
    ],
  },
  'physics-electricity-magnetism': {
    root: 'Electricity & Magnetism',
    branches: [
      {title: 'Electrostatics', subnodes: ["Coulomb's Law", 'Electric Field (E=F/q)', 'Electric Potential (V=W/q)']},
      {title: 'Current Electricity', subnodes: ["Ohm's Law (V=IR)", 'Series/Parallel Resistors', 'Electric Power (P=VI)']},
      {title: 'Magnetism', subnodes: ['Magnetic field (B)', 'Lorentz Force', 'Force on current wire']},
      {title: 'Electromagnetism', subnodes: ["Faraday's Law of Induction", "Lenz's Law", 'AC Generators/Transformers']},
    ],
  },
  'plant-reproduction': {
    root: 'Plant Reproduction',
    branches: [
      {title: 'Asexual Methods', subnodes: ['Vegetative propagation', 'Budding, Fragmentation', 'Spore formation', 'Apomixis']},
      {title: 'Sexual Reproduction', subnodes: ['Pollination: Self vs Cross', 'Wind, Water, Insect pollination', 'Fertilisation in flowers']},
      {title: 'Flower Parts', subnodes: ['Stamen (anther+filament)', 'Pistil (stigma+style+ovary)', 'Sepals & Petals']},
      {title: 'Seed & Fruit', subnodes: ['Ovule → Seed', 'Ovary → Fruit', 'Dispersal: Wind, Water, Animal']},
    ],
  },
};

function findClosingBrace(src, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

let src = fs.readFileSync('data.js', 'utf8');
let count = 0;

for (const [topicId, mm] of Object.entries(MINDMAPS)) {
  const needle1 = '"' + topicId + '"';
  const needle2 = "'" + topicId + "'";
  let topicIdx = src.indexOf('id: ' + needle1);
  if (topicIdx === -1) topicIdx = src.indexOf('id: ' + needle2);
  if (topicIdx === -1) { console.log('NOT FOUND:', topicId); continue; }

  // Search beyond 6000 chars (some topics have very long notes)
  const mmIdx = src.indexOf('mindmap:', topicIdx);
  if (mmIdx === -1) { console.log('No mindmap key:', topicId); continue; }

  let bs = mmIdx + 8;
  while (bs < src.length && src[bs] !== '{') bs++;
  if (src[bs] !== '{') { console.log('No opening brace:', topicId); continue; }

  const be = findClosingBrace(src, bs);
  if (be === -1) { console.log('No closing brace:', topicId); continue; }

  // Check existing branch count
  const existing = src.slice(bs, be + 1);
  const existingBranches = (existing.match(/title:/g) || []).length;
  if (existingBranches >= 2) {
    console.log('SKIP (already has branches):', topicId, '|', existingBranches, 'branches');
    continue;
  }

  const newMm = JSON.stringify(mm, null, 8)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '            ' + line))
    .join('\n');

  src = src.slice(0, bs) + newMm + src.slice(be + 1);
  console.log('Patched:', topicId, '|', mm.branches.length, 'branches');
  count++;
}

fs.writeFileSync('data.js', src, 'utf8');
console.log('\nTotal patches:', count, '/', Object.keys(MINDMAPS).length);
