const fs = require('fs');
const path = require('path');

const DB_FILES = fs.readdirSync(__dirname).filter(f => f.startsWith('notes_extra_') && f.endsWith('.js'));

for (const file of DB_FILES) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // 1. Remove all old broken SVG image tags entirely
    const brokenSvgRegex = /<img src="[^"]+\.svg"[^>]*>/g;
    content = content.replace(brokenSvgRegex, '');

    // 2. Remove the empty "Visual Summary Diagram" headings that were above the SVGs
    // The structure was: <h3>Visual Summary Diagram</h3>\n<div style="text-align: center; margin: 20px 0;">\n    \n</div>
    const brokenContainerRegex = /<h3>Visual Summary Diagram<\/h3>\s*<div style="text-align: center; margin: 20px 0;">\s*(<!-- DIAGRAM INJECTED -->)?/g;
    content = content.replace(brokenContainerRegex, '$1');

    // 3. Fix the "undefined" issues specifically in Geography
    if (file === 'notes_extra_geography_rich.js') {
        const forestsFixed = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Forests, Trees & Wetlands of India
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <section>
    <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
    <p>India’s rich biodiversity is supported by varied climatic conditions, giving rise to distinct types of forests, from Tropical Evergreen to Alpine. <b>Tropical Deciduous Forests</b> are the most widespread, providing valuable timber like Teak and Sal. The <b>National Forest Policy (1988)</b> mandates 33% forest cover, crucial for ecological balance and climate change mitigation. Forests are classified legally into Reserved, Protected, and Unclassed forests, impacting conservation strategies and indigenous rights.</p>
    <p>Wetlands are transition zones between terrestrial and aquatic systems, acting as 'kidneys of the landscape' by filtering water and regulating floods. India's commitment to wetland conservation is enshrined in the <b>Ramsar Convention</b>, with numerous sites designated for international importance, such as Chilika Lake and Keoladeo National Park. <b>Mangroves</b>, particularly the Sundarbans, are vital coastal wetlands providing protection against cyclones and supporting unique ecosystems.</p>
    <p>Understanding these biomes is essential for grasping India's environmental policies and economic geography. These topics are frequently tested on conservation efforts, geographical distribution, and the socio-economic importance of flora, making them a high-yield area for competitive exams.</p>
  </section>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Key Term / Event</th>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Details / Date</th>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Exam Significance</th>
    </tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Tropical Evergreen</td><td style='border:1px solid var(--border);padding:8px;'>>200cm rainfall, warm & humid. Western Ghats, NE India, Andamans.</td><td style='border:1px solid var(--border);padding:8px;'>High biodiversity; trees like Rosewood, Mahogany.</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Tropical Deciduous</td><td style='border:1px solid var(--border);padding:8px;'>70-200cm rainfall. 'Monsoon Forests'. Most widespread in India.</td><td style='border:1px solid var(--border);padding:8px;'>Economically important (Teak, Sal, Sandalwood).</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Mangroves</td><td style='border:1px solid var(--border);padding:8px;'>Salt-tolerant coastal forests (e.g., Sundarbans, Bhitarkanika).</td><td style='border:1px solid var(--border);padding:8px;'>Protect coasts; Sundarbans is largest deltaic mangrove.</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Ramsar Convention</td><td style='border:1px solid var(--border);padding:8px;'>International treaty for wetland conservation (1971, Iran).</td><td style='border:1px solid var(--border);padding:8px;'>Frequent questions on latest Indian Ramsar sites.</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Montane Forests</td><td style='border:1px solid var(--border);padding:8px;'>Found in Himalayas and Nilgiris; transition from broad-leaved to coniferous.</td><td style='border:1px solid var(--border);padding:8px;'>Vegetation changes with altitude (Oak -> Pine -> Fir).</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Social Forestry</td><td style='border:1px solid var(--border);padding:8px;'>Management of forests for environmental, social, and rural development.</td><td style='border:1px solid var(--border);padding:8px;'>Key government initiative for afforestation.</td></tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics &amp; Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>E-D-T-M</strong>: Forest types from wettest to driest: <b>E</b>vergreen, <b>D</b>eciduous, <b>T</b>horn, <b>M</b>ontane.</li>
    <li><strong>R-M-E</strong>: <b>R</b>amsar sites <b>M</b>anage <b>E</b>cosystems (Wetlands).</li>
    <li><strong>S-S-T</strong>: Major Deciduous trees: <b>S</b>al, <b>S</b>andalwood, <b>T</b>eak.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style='color:var(--warning)'>1</span>. Madhya Pradesh has the largest area under forest cover in India.</li>
    <li><span style='color:var(--warning)'>2</span>. Mizoram has the highest percentage of geographical area under forest cover.</li>
    <li><span style='color:var(--warning)'>3</span>. Tropical Deciduous forests are divided into Moist (100-200cm) and Dry (70-100cm).</li>
    <li><span style='color:var(--warning)'>4</span>. Alpine vegetation is found above 3600 meters in the Himalayas.</li>
    <li><span style='color:var(--warning)'>5</span>. The Montreux Record is a register of Ramsar sites where changes in ecological character have occurred (e.g., Keoladeo, Loktak).</li>
    <li><span style='color:var(--warning)'>6</span>. Mangrove roots (pneumatophores) grow upwards to breathe in waterlogged soils.</li>
    <li><span style='color:var(--warning)'>7</span>. National Forest Policy (1988) aims for 33% forest cover (20% plains, 60% hills).</li>
    <li><span style='color:var(--warning)'>8</span>. Chilika Lake (Odisha) was India's first Ramsar site.</li>
  </ul>
`;

        const resourcesFixed = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Mineral Resources & Types of Farming
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <section>
    <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
    <p>India is endowed with a rich variety of <b>Mineral Resources</b>, primarily concentrated in the peninsular plateau region. Key minerals include <b>Coal</b> (Gondwana and Tertiary types, crucial for thermal power), <b>Iron Ore</b> (Hematite and Magnetite, driving the steel industry), and <b>Bauxite</b> (aluminum ore). The distribution is highly uneven; the Chhotanagpur Plateau is often termed the 'Ruhr of India' due to its mineral wealth. Strategic minerals like Uranium (Jaduguda) and Thorium (Monazite sands of Kerala) are vital for India's nuclear energy program.</p>
    <p>Indian agriculture is characterized by diverse <b>Types of Farming</b> adapted to varying climatic and soil conditions. <b>Subsistence Farming</b> remains prevalent, focusing on producing food for the farmer's family. Conversely, <b>Commercial Farming</b> (e.g., tea plantations in Assam, cotton in Maharashtra) is market-oriented. <b>Mixed Farming</b> integrates crop production with livestock rearing. The cropping seasons are distinct: <b>Kharif</b> (monsoon-sown, e.g., Rice), <b>Rabi</b> (winter-sown, e.g., Wheat), and <b>Zaid</b> (summer crops).</p>
    <p>Mastery of resource distribution and agricultural patterns is critical for NDA/CDS exams, as these form the backbone of India's economic geography. Questions frequently target the location of major mines, leading producer states, and the climatic requirements of major crops.</p>
  </section>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Key Term / Event</th>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Details / Date</th>
      <th style="border:1px solid var(--border);padding:10px;background:rgba(255,255,255,0.05);">Exam Significance</th>
    </tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Iron Ore</td><td style='border:1px solid var(--border);padding:8px;'>Major types: Hematite (Odisha, Jharkhand) & Magnetite (Karnataka).</td><td style='border:1px solid var(--border);padding:8px;'>Backbone of industrial development.</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Coal</td><td style='border:1px solid var(--border);padding:8px;'>Gondwana coal (metallurgical, Jharia/Raniganj) vs Tertiary coal.</td><td style='border:1px solid var(--border);padding:8px;'>Primary energy source in India.</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Bauxite</td><td style='border:1px solid var(--border);padding:8px;'>Ore of Aluminum. Odisha is the largest producer (Panchpatmali deposits).</td><td style='border:1px solid var(--border);padding:8px;'>Used in aviation and electrical industries.</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Kharif Season</td><td style='border:1px solid var(--border);padding:8px;'>June to October (Monsoon). Crops: Rice, Maize, Jowar, Bajra, Cotton.</td><td style='border:1px solid var(--border);padding:8px;'>Heavily dependent on SW Monsoon.</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Rabi Season</td><td style='border:1px solid var(--border);padding:8px;'>October to March (Winter). Crops: Wheat, Barley, Mustard, Gram.</td><td style='border:1px solid var(--border);padding:8px;'>Aided by western temperate cyclones.</td></tr>
    <tr><td style='border:1px solid var(--border);padding:8px;'>Plantation Farming</td><td style='border:1px solid var(--border);padding:8px;'>Single crop grown on a large scale (Tea, Coffee, Rubber).</td><td style='border:1px solid var(--border);padding:8px;'>Capital intensive, export-oriented.</td></tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics &amp; Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>K-R-M</strong>: <b>K</b>harif (Rice/Monsoon), <b>R</b>abi (Wheat/Winter).</li>
    <li><strong>I-C-B</strong>: Major minerals: <b>I</b>ron (Odisha/Jharkhand), <b>C</b>oal (Jharkhand), <b>B</b>auxite (Odisha).</li>
    <li><strong>P-M-S</strong>: Farming types: <b>P</b>lantation, <b>M</b>ixed, <b>S</b>ubsistence.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style='color:var(--warning)'>1</span>. Odisha is the leading producer of Bauxite and Iron ore in India.</li>
    <li><span style='color:var(--warning)'>2</span>. Jharkhand (Jharia) holds the largest coal reserves in India.</li>
    <li><span style='color:var(--warning)'>3</span>. Thorium reserves are found in the Monazite sands of the Kerala coast.</li>
    <li><span style='color:var(--warning)'>4</span>. Shifting Cultivation is known as 'Jhumming' in NE India and 'Milpa' in Central America.</li>
    <li><span style='color:var(--warning)'>5</span>. Wheat requires cool growing weather and bright sunshine at ripening time.</li>
    <li><span style='color:var(--warning)'>6</span>. Rice requires high temperature (above 25°C) and high humidity with annual rainfall above 100 cm.</li>
    <li><span style='color:var(--warning)'>7</span>. Digboi (Assam) is the oldest oil field in India.</li>
    <li><span style='color:var(--warning)'>8</span>. Black soil (Regur) of the Deccan plateau is ideal for growing cotton.</li>
  </ul>
`;

        const regexForests = /<div class="revision-card"[^>]*>\s*<h3[^>]*>\s*Forests, Trees & Wetlands of India\s*<\/h3>[\s\S]*?(?=<!-- DIAGRAM INJECTED -->|<\/div>\s*`)/g;
        content = content.replace(regexForests, forestsFixed);

        const regexResources = /<div class="revision-card"[^>]*>\s*<h3[^>]*>\s*Mineral Resources & Types of Farming\s*<\/h3>[\s\S]*?(?=<!-- DIAGRAM INJECTED -->|<\/div>\s*`)/g;
        content = content.replace(regexResources, resourcesFixed);
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Cleaned up SVGs and fixed issues in ${file}`);
    }
}
