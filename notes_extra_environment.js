window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};

EXPANDED_NOTES_DATA["env-hotspots"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Biodiversity Hotspots & Biosphere Reserves
  </h3>

  <h4>1. Conceptual Foundations</h4>
  <p><strong>Biological diversity</strong> (biodiversity) denotes the variability among living organisms from genes to ecosystems. The two principal conservation tools that have emerged in the last three decades are <strong>Biogeographic Hotspots</strong> and <strong>Biosphere Reserves</strong>. Both aim to safeguard irreplaceable genetic resources while fostering sustainable development.</p>

  <h4>2. Definition of Biodiversity Hotspots</h4>
  <p>A <strong>biodiversity hotspot</strong> is a region that satisfies two quantitative criteria (as defined by <strong>[[Conservation International]]</strong> in 1988):</p>
  <ul>
    <li>It must contain at least <strong>1,500 endemic vascular plant species</strong> (≈ 0.5% of the world’s total).</li>
    <li>It must have lost **≥ 70 %** of its original primary vegetation.</li>
  </ul>
  <p>These criteria were later refined by the <strong>[[World Wildlife Fund]]</strong> (WWF) to include fauna and to consider endemic vertebrates. As of 2023, **36** global hotspots host **≈ 60 %** of all terrestrial species while covering only **≈ 2.4 %** of Earth’s land surface.</p>

  <h4>3. Global Hotspot Inventory (Selected)</h4>
  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead style="background:#f2f2f2;">
      <tr>
        <th style="border:1px solid #ccc; padding:6px;">Hotspot</th>
        <th style="border:1px solid #ccc; padding:6px;">Key Countries</th>
        <th style="border:1px solid #ccc; padding:6px;">Area (km²)</th>
        <th style="border:1px solid #ccc; padding:6px;">Endemic Species (Plants)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>[[Western Ghats]] & [[Sri Lanka]]</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">India, Sri Lanka</td>
        <td style="border:1px solid #ccc; padding:6px;">160,000</td>
        <td style="border:1px solid #ccc; padding:6px;">7,000+</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>[[Indo‑Burma]]</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">Myanmar, India, Thailand, Laos, Vietnam, China</td>
        <td style="border:1px solid #ccc; padding:6px;">2,300,000</td>
        <td style="border:1px solid #ccc; padding:6px;">12,000+</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>[[Himalayan Hotspot]]</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">India, Nepal, Bhutan, Pakistan, China</td>
        <td style="border:1px solid #ccc; padding:6px;">720,000</td>
        <td style="border:1px solid #ccc; padding:6px;">3,200+</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:6px;"><strong>[[Sundaland]]</strong></td>
        <td style="border:1px solid #ccc; padding:6px;">Indonesia, Malaysia, Brunei, Philippines</td>
        <td style="border:1px solid #ccc; padding:6px;">1,800,000</td>
        <td style="border:1px solid #ccc; padding:6px;">9,500+</td>
      </tr>
    </tbody>
  </table>

  <h4>4. Indian Biodiversity Hotspots</h4>
  <p>India contributes **four** of the 36 global hotspots, thereby shouldering a disproportionate share of the world’s endemic flora and fauna. The hotspots and their salient features are:</p>
  <ul>
    <li><strong>[[Western Ghats]]</strong> – Extends over 1,600 km of the western coastline; harbours **≈ 5,000** endemic plant species and **> 150** endemic amphibians.</li>
    <li><strong>[[Indo‑Burma]]</strong> – Overlaps with the Eastern Himalayas and the Indo‑Myanmar border; supports **≈ 12,000** plant endemics and the critically endangered <em>Gaur</em> (<strong>Bos gaurus</strong>).</li>
    <li><strong>[[Himalayan Hotspot]]</strong> – Includes the North‑Eastern states and the trans‑Himalayan region; home to **> 1,000** endemic flowering plants and iconic megafauna such as the <strong>snow leopard</strong> (<em>Panthera uncia</em>).</li>
    <li><strong>[[Sundaland]]</strong> – Though largely outside India, the Andaman & Nicobar Islands are an extension; contains **≈ 800** endemic vascular plants.</li>
  </ul>

  <h4>5. Criteria & Methodology for Hotspot Delineation</h4>
  <p>The delineation process follows a rigorous GIS‑based workflow:</p>
  <ol>
    <li>Compilation of **herbarium** and **faunal** occurrence records from the <strong>Global Biodiversity Information Facility (GBIF)</strong>.</li>
    <li>Application of the <strong>Endemicity Index (EI)</strong> = (Number of endemic species / Total species) × 100.</li>
    <li>Overlay of **land‑cover change** maps derived from <strong>MODIS</strong> satellite data (2000‑2020) to compute vegetation loss.</li>
    <li>Hotspots are retained only if **EI ≥ 0.5 %** and **vegetation loss ≥ 70 %**.</li>
  </ol>

  <h4>6. Threats to Hotspots</h4>
  <p>Key anthropogenic pressures that have precipitated the > 70 % loss threshold include:</p>
  <ul>
    <li><strong>Deforestation</strong> – Annual loss of **≈ 2.5 million ha** in the Western Ghats alone (2000‑2020).</li>
    <li><strong>Infrastructure expansion</strong> – National Highway projects, hydro‑electric dams, and mining concessions.</li>
    <li><strong>Unsustainable agriculture</strong> – Shift to monoculture (e.g., tea, coffee) reducing habitat heterogeneity.</li>
    <li><strong>Climate change</strong> – Altitudinal migration of montane species, leading to “mountain top extinction”.</li>
    <li><strong>Invasive species</strong> – Spread of <em>Lantana camara</em> and <em>Chromolaena odorata</em> outcompeting native flora.</li>
  </ul>

  <h4>7. Conservation Strategies for Hotspots</h4>
  <p>Effective hotspot conservation integrates **in‑situ** and **ex‑situ** measures, backed by legal and policy instruments:</p>
  <ul>
    <li><strong>Protected Area (PA) network</strong> – Expansion of National Parks, Wildlife Sanctuaries, and Tiger Reserves to cover **≥ 30 %** of each hotspot’s remaining natural habitat.</li>
    <li><strong>Community‑Based Conservation</strong> – Empowerment of indigenous peoples under the <strong>[[Biological Diversity Act, 2002]]</strong> and the <strong>[[National Biodiversity Authority]]</strong> (NBA) to manage **Traditional Knowledge (TK)**.</li>
    <li><strong>Ecological Corridors</strong> – Creation of “green bridges” linking fragmented patches, as exemplified by the **Western Ghats Landscape Initiative (WGLI)** launched in 2015.</li>
    <li><strong>Restoration Ecology</strong> – Large‑scale afforestation using native species, guided by the <strong>National Afforestation Programme (NAP)</strong>.</li>
    <li><strong>Climate‑Smart Adaptation</strong> – Assisted migration trials for high‑altitude orchids and the use of **species distribution models (SDM)** to predict future habitats.</li>
  </ul>

  <h4>8. Biosphere Reserves: Definition and International Framework</h4>
  <p>A <strong>biosphere reserve</strong> (BR) is a **UNESCO‑designated** area under the **Man and the Biosphere (MAB) Programme** that seeks a harmonious balance between **conservation**, **development**, and **logistic support** (research, monitoring, education). The guiding document is the <strong>[[UNESCO World Heritage Convention]]</strong> (1972) and the specific **MAB Statute** (1971).</p>

  <h4>9. Zonation Structure of Biosphere Reserves</h4>
  <p>Each BR is subdivided into three inter‑linked zones:</p>
  <ul>
    <li><strong>Core Zone</strong> – Strictly protected area (no human habitation); typically **≤ 15 %** of total reserve area.</li>
    <li><strong>Buffer Zone</strong> – Surrounds the core; permits low‑impact activities such as eco‑tourism, research, and sustainable resource extraction.</li>
    <li><strong>Transition (or Development) Zone</strong> – Outermost ring; supports sustainable livelihoods, agriculture, and settlement.</li>
  </ul>

  <h4>10. Indian Biosphere Reserves – Overview</h4>
  <p>India currently hosts **28** biosphere reserves (as of 2023), covering **≈ 7.5 %** of the national land area. They are administered jointly by the **Ministry of Environment, Forest and Climate Change (MoEFCC)** and the **State Forest Departments**. The table below lists the major reserves, their year of UNESCO inscription, and key statistics.</p>

  <table style="width:100%; border-collapse:collapse; margin:12px 0;">
    <thead style="background:#e6f7ff;">
      <tr>
        <th style="border:1px solid #bbb; padding:6px;">Biosphere Reserve</th>
        <th style="border:1px solid #bbb; padding:6px;">State(s)</th>
        <th style="border:1px solid #bbb; padding:6px;">Year (UNESCO)</th>
        <th style="border:1px solid #bbb; padding:6px;">Total Area (km²)</th>
        <th style="border:1px solid #bbb; padding:6px;">Core Zone (km²)</th>
        <th style="border:1px solid #bbb; padding:6px;">Key Endemic Species</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[Nilgiri]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">Tamil Nadu, Kerala, Karnataka</td>
        <td style="border:1px solid #bbb; padding:6px;">1986</td>
        <td style="border:1px solid #bbb; padding:6px;">5,520</td>
        <td style="border:1px solid #bbb; padding:6px;">1,200</td>
        <td style="border:1px solid #bbb; padding:6px;">Nilgiri tahr (<em>Nilgiritragus hylocrius</em>), Lion-tailed macaque (<em>Macaca silenus</em>)</td>
      </tr>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[Sundarbans]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">West Bengal</td>
        <td style="border:1px solid #bbb; padding:6px;">1989</td>
        <td style="border:1px solid #bbb; padding:6px;">9,700</td>
        <td style="border:1px solid #bbb; padding:6px;">2,500</td>
        <td style="border:1px solid #bbb; padding:6px;">Bengal tiger (<em>Panthera tigris tigris</em>), Ganges river dolphin (<em>Platanista gangetica</em>)</td>
      </tr>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[Nanda Devi]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">Uttarakhand</td>
        <td style="border:1px solid #bbb; padding:6px;">2001</td>
        <td style="border:1px solid #bbb; padding:6px;">5,120</td>
        <td style="border:1px solid #bbb; padding:6px;">1,800</td>
        <td style="border:1px solid #bbb; padding:6px;">Snow leopard, Himalayan musk deer (<em>Moschus leucogaster</em>)</td>
      </tr>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[Great Himalayan]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">Himachal Pradesh, Uttarakhand, Sikkim</td>
        <td style="border:1px solid #bbb; padding:6px;">2014</td>
        <td style="border:1px solid #bbb; padding:6px;">10,800</td>
        <td style="border:1px solid #bbb; padding:6px;">3,200</td>
        <td style="border:1px solid #bbb; padding:6px;">Red panda (<em>Ailurus fulgens</em>), Himalayan griffon vulture (<em>Gyps himalayensis</em>)</td>
      </tr>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[Khangchendzonga]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">Sikkim</td>
        <td style="border:1px solid #bbb; padding:6px;">2013</td>
        <td style="border:1px solid #bbb; padding:6px;">1,800</td>
        <td style="border:1px solid #bbb; padding:6px;">600</td>
        <td style="border:1px solid #bbb; padding:6px;">Snow leopard, Red panda</td>
      </tr>
    </tbody>
  </table>

  <h4>11. Legal and Policy Instruments Governing Biosphere Reserves</h4>
  <ul>
    <li><strong>[[Biological Diversity Act, 2002]]</strong> – Provides the statutory basis for establishing BRs and mandates the formation of <strong>National Biodiversity Authority (NBA)</strong> and **State Biodiversity Boards (SBBs)**.</li>
    <li><strong>[[Forest (Conservation) Act, 1980]]</strong> – Regulates diversion of forest land for non‑forest uses, a crucial safeguard for core zones.</li>
    <li><strong>[[Article 48A]] of the Indian Constitution</strong> – Directs the State to protect and improve the environment, forming the constitutional ethos for biosphere reserve management.</li>
    <li><strong>[[National Environment Policy, 2006]]</strong> – Emphasises ecosystem‑based approaches and promotes the concept of “ecologically sustainable development” within BRs.</li>
  </ul>

  <h4>12. Management Framework and Stakeholder Participation</h4>
  <p>Each BR operates under a **Tripartite Management Committee (TMC)** comprising:</p>
  <ul>
    <li>Government representatives (central & state).</li>
    <li>Local community leaders and **Traditional Knowledge Holders**.</li>
    <li>Scientific experts from universities and research institutes (e.g., <strong>CSIR‑NIO</strong>, <strong>ICAR‑IARI</strong>).</li>
  </ul>
  <p>The TMC is responsible for drafting a **Biosphere Reserve Management Plan (BRMP)** that outlines:</p>
  <ol>
    <li>Conservation objectives (species recovery targets, habitat restoration metrics).</li>
    <li>Socio‑economic development goals (alternative livelihoods, eco‑tourism revenue sharing).</li>
    <li>Monitoring protocols (use of **Remote Sensing**, **Camera Traps**, and **eDNA** for biodiversity assessment).</li>
  </ol>

  <h4>13. Success Stories and Lessons Learned</h4>
  <p><strong>[[Nanda Devi]]</strong> Biosphere Reserve exemplifies successful **community‑driven patrolling**, reducing poaching incidents by **85 %** between 2005‑2015. Similarly, the **[[Sundarbans]]** reserve’s mangrove restoration project (2010‑2020) reclaimed **≈ 1,200 ha** of degraded tidal flats, enhancing carbon sequestration to **≈ 4.2 Mt CO₂ eq/yr**.</p>

  <h4>14. Emerging Challenges and Future Directions</h4>
  <ul>
    <li><strong>Climate‑induced sea‑level rise</strong> threatens low‑lying reserves like Sundarbans; adaptive measures include **managed retreat** and **salinity‑tolerant mangrove species**.</li>
    <li><strong>Data deficiency</strong> in many remote core zones hampers effective monitoring; integration of **Artificial Intelligence (AI)** for image classification is being piloted in the Western Ghats.</li>
    <li><strong>Funding gaps</strong> – Although UNESCO provides advisory support, most BRs rely on **Central Government schemes** (e.g., **National Adaptation Fund for Climate Change**) and **International Grants** (e.g., **Global Environment Facility**).</li>
  </ul>

  <h4>15. Integration with National Programs</h4>
  <p>India’s flagship conservation initiatives intersect with BRs and hotspots:</p>
  <ul>
    <li><strong>Project Tiger</strong> – 53 Tiger Reserves, many of which lie within hotspot cores (e.g., **Bandipur** in the Western Ghats).</li>
    <li><strong>Project Elephant</strong> – Corridors linking **Kaziranga** and **Manas**, both part of the Indo‑Burma hotspot.</li>
    <li><strong>National Biodiversity Action Plan (NBAP)</strong> – Aligns community‑based seed banking with hotspot restoration.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>India has **four** UNESCO‑listed biodiversity hotspots: [[Western Ghats]], [[Indo‑Burma]], [[Himalayan Hotspot]], and the Andaman‑Nicobar extension of [[Sundaland]].</li>
      <li>Hotspots contain **≈ 60 %** of global terrestrial species while occupying only **≈ 2.4 %** of Earth’s land area.</li>
      <li>As per the <strong>[[Biological Diversity Act, 2002]]**, the <strong>National Biodiversity Authority</strong> must approve any **foreign commercial use** of indigenous biological resources.</li>
      <li>The **[[Nanda Devi]]** Biosphere Reserve was the first Indian BR to be inscribed in **2001**, covering **5,120 km²** with a core of **1,800 km²**.</li>
      <li>Core zones permit **no human activity**; buffer zones allow **eco‑tourism**, research, and sustainable resource extraction.</li>
      <li>Hotspot criteria: **≥ 1,500 endemic vascular plants** and **≥ 70 %** loss of original vegetation.</li>
      <li>India’s **28** biosphere reserves collectively protect **≈ 7.5 %** of the country’s land area.</li>
      <li>Key legal provision for wildlife protection within hotspots is **[[Forest (Conservation) Act, 1980]]**, which restricts diversion of forest land.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["env-conservation"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Wildlife Protection & Conservation Projects
  </h3>

  <h4><strong>1. Conceptual Overview</strong></h4>
  <p>India’s <strong>biodiversity hotspot</strong> status, covering 7.6% of the world’s species in <em>less than 2.4% of the land area</em>, mandates a robust framework for <strong>wildlife protection</strong> and <strong>habitat conservation</strong>. The primary objectives are:</p>
  <ul>
    <li>Preventing extinction of flagship and keystone species.</li>
    <li>Restoring degraded ecosystems and ensuring ecological connectivity.</li>
    <li>Integrating community livelihoods with conservation imperatives.</li>
    <li>Complying with international obligations under [[Convention on Biological Diversity]], [[CITES]], and [[Ramsar Convention]].</li>
  </ul>

  <h4><strong>2. Legislative & Policy Backbone</strong></h4>
  <p>India’s wildlife protection architecture rests on a series of statutes, rules, and policy documents:</p>
  <ul>
    <li><strong>[[Wildlife Protection Act, 1972]]</strong> – the cornerstone legislation, classifying species into Schedule I‑VI and establishing Protected Areas.</li>
    <li>Amendments of 2006 and 2013 – introduced provisions for <em>Conservation Reserves</em>, <em>Community Reserves</em>, and stringent penalties for poaching.</li>
    <li>[[National Biodiversity Act, 2002]] – created the National Biodiversity Authority (NBA) and mandated People’s Biodiversity Registers (PBRs).</li>
    <li>[[Forest (Conservation) Act, 1980]] – regulates diversion of forest land for non‑forestry purposes.</li>
    <li>[[Environment (Protection) Act, 1986]] – provides the umbrella for pollution control and habitat protection.</li>
    <li>National Wildlife Action Plan (NWAP) 2017‑2031 – a 15‑year roadmap targeting a 30% increase in tiger numbers and a 20% rise in overall wildlife populations.</li>
  </ul>

  <h4><strong>3. Institutional Framework</strong></h4>
  <p>Effective implementation relies on a multi‑layered institutional set‑up:</p>
  <ul>
    <li><strong>Ministry of Environment, Forest and Climate Change (MoEFCC)</strong> – policy formulation and inter‑state coordination.</li>
    <li><strong>[[National Tiger Conservation Authority (NTCA)]]</strong> – statutory body overseeing <strong>Project Tiger</strong>.</li>
    <li><strong>[[Wildlife Institute of India (WII)]]</strong> – research, training, and scientific support.</li>
    <li><strong>State Forest Departments</strong> – day‑to‑day management of reserves and sanctuaries.</li>
    <li>Non‑governmental organisations (NGOs) such as [[World Wide Fund for Nature (WWF) – India]], [[Wildlife Trust of India]], and community‑based groups (e.g., <em>Van Panchayats</em>).</li>
  </ul>

  <h4><strong>4. Flagship Conservation Projects</strong></h4>
  <p>India has launched several high‑visibility, species‑centric programmes that have shaped global conservation practice.</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead style="background:#f2f2f2;">
      <tr>
        <th style="border:1px solid #ccc; padding:8px;">Project</th>
        <th style="border:1px solid #ccc; padding:8px;">Year Launched</th>
        <th style="border:1px solid #ccc; padding:8px;">Core Species / Habitat</th>
        <th style="border:1px solid #ccc; padding:8px;">Area Covered (km²)</th>
        <th style="border:1px solid #ccc; padding:8px;">Key Achievements (as of 2023)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>[[Project Tiger]]</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">1973</td>
        <td style="border:1px solid #ccc; padding:8px;">Bengal tiger (<em>Panthera tigris tigris</em>)</td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 75,000 (including corridors)</td>
        <td style="border:1px solid #ccc; padding:8px;">Tiger numbers rose from 1,411 (2006) to 2,967 (2022); establishment of 50+ Tiger Reserves.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>[[Project Elephant]]</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">1992</td>
        <td style="border:1px solid #ccc; padding:8px;">Indian elephant (<em>Elephas maximus indicus</em>)</td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 47,000 (core habitats + corridors)</td>
        <td style="border:1px solid #ccc; padding:8px;">Population stabilized at ~27,000; 12 Elephant Reserves created, reduction in human‑elephant conflict by 28% in pilot zones.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>[[Snow Leopard Conservation Programme]]</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">2009</td>
        <td style="border:1px solid #ccc; padding:8px;">Snow leopard (<em>Panthera uncia</em>)</td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 30,000 (trans‑Himalayan range)</td>
        <td style="border:1px solid #ccc; padding:8px;">Population estimate rose from 1,100 (2009) to 1,500 (2022); community‑based monitoring in Ladakh & Sikkim.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>[[Conservation of Marine Turtles (CMT) Programme]]</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">1997</td>
        <td style="border:1px solid #ccc; padding:8px;">Four marine turtle species – Olive Ridley, Green, Hawksbill, Leatherback</td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 1,200 km coastline (nesting beaches)</td>
        <td style="border:1px solid #ccc; padding:8px;">Olive Ridley nesting numbers increased from 2.5 million (1997) to 4.2 million (2021); establishment of 30+ Turtle Conservation Centres.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>[[National Ganga River Basin Authority (NGRBA) – Riverine Biodiversity Initiative]]</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">2009</td>
        <td style="border:1px solid #ccc; padding:8px;">Riverine fauna – Gharial, Gangetic dolphin (<em>Platanista gangetica</em>)</td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 3,860 km (river stretch)</td>
        <td style="border:1px solid #ccc; padding:8px;">Gharial numbers recovered from < 100 (2000) to > 800 (2022); dolphin sightings increased by 45% in the lower Ganga.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>5. Landscape‑Level Initiatives</strong></h4>
  <p>Beyond species‑specific schemes, India pursues ecosystem‑wide programmes:</p>
  <ul>
    <li><strong>[[Biosphere Reserves]]</strong> – 18 reserves covering ~ 124,000 km², integrating core, buffer, and transition zones (e.g., <em>Nilgiri</em>, <em>Sundarbans</em>).</li>
    <li><strong>[[Ecological Corridor Development]]</strong> – the <em>Terai Arc Landscape</em> and <em>Western Ghats</em> corridors aim to link fragmented habitats, reducing genetic isolation.</li>
    <li><strong>[[Integrated Wildlife Management Plans (IWMP)]]</strong> – multi‑stakeholder frameworks for each Tiger Reserve, incorporating anti‑poaching, community outreach, and tourism regulation.</li>
    <li><strong>[[Community Reserves]]</strong> – legal provision (2002 amendment) empowering local communities to manage 13 reserves, fostering stewardship.</li>
  </ul>

  <h4><strong>6. Anti‑Poaching & Enforcement Mechanisms</strong></h4>
  <p>Poaching remains the principal mortality factor for large mammals. The response architecture comprises:</p>
  <ul>
    <li><strong>Specialized Anti‑Poaching Units (APUs)</strong> – equipped with GPS‑enabled patrol vehicles, night‑vision optics, and rapid‑response teams.</li>
    <li><strong>Intelligence‑Based Surveillance</strong> – leveraging satellite imagery (e.g., <em>PlanetScope</em>), drone reconnaissance, and community tip‑lines.</li>
    <li><strong>Legal Deterrence</strong> – penalties escalated to up to 7 years imprisonment and ₹10 lakh fine for Schedule I offences under the 1972 Act.</li>
    <li><strong>International Collaboration</strong> – joint operations with INTERPOL and CITES Secretariat to dismantle trans‑national wildlife trafficking networks.</li>
  </ul>

  <h4><strong>7. Community Participation & Livelihood Integration</strong></h4>
  <p>Recognising that conservation cannot succeed without local buy‑in, several models have been institutionalised:</p>
  <ul>
    <li><strong>[[Van Panchayat]] model – Karnataka</strong>: 1,200 forest‑dependent families receive <em>joint forest management</em> rights, leading to a 30% reduction in illegal grazing.</li>
    <li><strong>Compensation Schemes</strong> – the <em>Crop‑Wildlife Conflict Compensation Fund</em> reimburses farmers for losses caused by elephants and leopards, curbing retaliatory killings.</li>
    <li><strong>Eco‑Tourism Initiatives</strong> – regulated entry fees in <em>Corbett</em> and <em>Bandipur</em> generate revenue for reserve management and provide alternate income to nearby villages.</li>
    <li><strong>Participatory Monitoring</strong> – community volunteers employ <em>camera traps</em> and <em>bio‑acoustic recorders</em> under the <strong>Citizen Science Programme</strong> of the WII.</li>
  </ul>

  <h4><strong>8. Monitoring, Evaluation, & Success Metrics</strong></h4>
  <p>Robust data collection underpins adaptive management:</p>
  <ul>
    <li><strong>National Tiger Estimation (NTE)</strong> – a 4‑yearly statistical exercise using camera traps, genetic sampling, and spatially explicit capture‑recapture (SECR) models.</li>
    <li><strong>Elephant Population Census (EPC)</strong> – aerial surveys combined with ground transects; latest figures (2022) report 27,000 individuals.</li>
    <li><strong>Forest Cover Monitoring</strong> – the <em>India Forest Survey (IFS)</em> utilizes MODIS and Landsat data; forest area rose from 68.5 Mha (2015) to 71.2 Mha (2021).</li>
    <li><strong>Human‑Wildlife Conflict Index (HWCI)</strong> – composite indicator measuring incident frequency, economic loss, and mitigation effectiveness across 12 high‑conflict states.</li>
  </ul>

  <h4><strong>9. Challenges & Future Directions</strong></h4>
  <p>Despite progress, critical bottlenecks persist:</p>
  <ul>
    <li><strong>Habitat Fragmentation</strong> – rapid infrastructure projects (e.g., <em>NH‑44</em> expansion) threaten corridor integrity; mitigation requires wildlife overpasses and underpasses.</li>
    <li><strong>Climate Change</strong> – shifting temperature regimes affect alpine species like the <em>snow leopard</em>, necessitating climate‑adaptive management plans.</li>
    <li><strong>Funding Gaps</strong> – while the central budget allocates ₹2,500 crore (FY 2022‑23) for wildlife, reserve‑level execution often lags; public‑private partnerships (PPPs) are being explored.</li>
    <li><strong>Illegal Trade Networks</strong> – demand in Southeast Asian markets fuels poaching; stronger border surveillance and demand‑reduction campaigns are essential.</li>
  </ul>

  <h4><strong>10. International Conventions & India's Commitments</strong></h4>
  <p>India’s domestic actions are reinforced by its participation in global treaties:</p>
  <ul>
    <li><strong>[[Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES)]]</strong> – India is a Party since 1976; implements Appendices I–III through licensing and export controls.</li>
    <li><strong>[[Convention on Wetlands (Ramsar)]]</strong> – 75 sites designated, covering 1.5 million ha of critical wetlands (e.g., <em>Keoladeo</em>, <em>Vembanad</em>).</li>
    <li><strong>[[UNESCO World Heritage Convention]]</strong> – 42 natural and mixed sites (e.g., <em>Western Ghats</em>, <em>Great Himalayan National Park</em>) receive heightened protection and technical assistance.</li>
    <li><strong>[[UN Sustainable Development Goals (SDGs) – Goal 15]]</strong> – targets 15.5 (protecting ecosystems) and 15.7 (sustainable use) align directly with India's wildlife action plans.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>The <strong>first Tiger Reserve</strong> was <em>Jim Corbett</em> (established in 1936 as a sanctuary, declared a reserve in 1973).</li>
      <li>India’s <strong>Project Elephant</strong> covered 12 states and protected roughly 47,000 km² of core habitat by 2022.</li>
      <li>As per the 2022 <strong>National Tiger Estimation</strong>, the tiger population stood at <strong>2,967</strong>, marking a 57% increase from the 2006 census.</li>
      <li>Under the <strong>Wildlife Protection Act, 1972</strong>, Schedule I species attract a minimum imprisonment of **seven years** and a fine up to **₹10 lakh**.</li>
      <li>India has **18 Biosphere Reserves**, with the <em>Western Ghats</em> and <em>Nilgiri</em> being the first two designated (1977, 1986). </li>
      <li>The <strong>Snow Leopard Conservation Programme</strong> achieved a **~36%** rise in estimated population between 2009 and 2022.</li>
      <li>India is a signatory to **CITES** since **1976**, and currently lists **≈ 1,200** species under its appendices for trade regulation.</li>
      <li>Human‑elephant conflict mitigation via <em>crop‑damage compensation</em> reduced retaliatory killings by **28%** in pilot districts of Karnataka (2019‑2021).</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["env-species"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Species in News & IUCN Red List
  </h3>

  <h4>1. <strong>Why the IUCN Red List Matters for Defence Aspirants</strong></h4>
  <p>The <strong>IUCN Red List of Threatened Species</strong> is the most comprehensive global inventory of the conservation status of biological diversity. For officers of the Armed Forces, understanding the Red List is crucial because:</p>
  <ul>
    <li>Strategic bases often lie in ecologically sensitive zones (e.g., <strong>Western Ghats</strong>, <strong>Sundarbans</strong>).</li>
    <li>Military operations must comply with <em>environmental impact assessments</em> under the <strong>Environmental Impact Assessment (EIA) Notification, 2006</strong>.</li>
    <li>Joint operations with the <strong>Ministry of Environment, Forest and Climate Change (MoEFCC)</strong> require knowledge of species that are <strong>critically endangered</strong> or protected under <strong>CITES</strong>.</li>
  </ul>

  <h4>2. <strong>Structure of the IUCN Red List</strong></h4>
  <p>The Red List categorises species into nine groups based on quantitative criteria (population size, decline rate, geographic range, etc.). The categories are:</p>
  <table border="1" cellpadding="6" cellspacing="0" style="width:100%; border-collapse:collapse;">
    <thead style="background:#333;color:#fff;">
      <tr>
        <th>Category</th>
        <th>Abbreviation</th>
        <th>Criteria Summary</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Extinct</strong></td>
        <td>EX</td>
        <td>No reasonable doubt that the last individual has died.</td>
      </tr>
      <tr>
        <td><strong>Extinct in the Wild</strong></td>
        <td>EW</td>
        <td>Only survives in captivity or outside its historic range.</td>
      </tr>
      <tr>
        <td><strong>Critically Endangered</strong></td>
        <td>CR</td>
        <td>≥90% decline over 10 years or ≤50 mature individuals.</td>
      </tr>
      <tr>
        <td><strong>Endangered</strong></td>
        <td>EN</td>
        <td>≥70% decline over 10 years or ≤250 mature individuals.</td>
      </tr>
      <tr>
        <td><strong>Vulnerable</strong></td>
        <td>VU</td>
        <td>≥50% decline over 10 years or ≤1,000 mature individuals.</td>
      </tr>
      <tr>
        <td><strong>Near Threatened</strong></td>
        <td>NT</td>
        <td>Close to qualifying for Vulnerable but not yet.</td>
      </tr>
      <tr>
        <td><strong>Least Concern</strong></td>
        <td>LC</td>
        <td>Widespread and abundant.</td>
      </tr>
      <tr>
        <td><strong>Data Deficient</strong></td>
        <td>DD</td>
        <td>Insufficient information to assess risk.</td>
      </tr>
      <tr>
        <td><strong>Not Evaluated</strong></td>
        <td>NE</td>
        <td>Species not yet assessed.</td>
      </tr>
    </tbody>
  </table>

  <h4>3. <strong>Key Assessment Criteria (IUCN‑A, B, C, D, E)</strong></h4>
  <p>Each category uses a set of quantitative thresholds. The most frequently cited criteria are:</p>
  <ul>
    <li><strong>Criterion A – Population Reduction</strong>: Measured over the last 10 years or three generations, whichever is longer.</li>
    <li><strong>Criterion B – Geographic Range</strong>: Extent of occurrence (EOO) < 20,000 km² for VU, < 5,000 km² for EN, < 100 km² for CR.</li>
    <li><strong>Criterion C – Small Population Size & Decline</strong>: Fewer than 10,000 mature individuals for VU, 2,500 for EN, 250 for CR.</li>
    <li><strong>Criterion D – Very Small or Restricted Population</strong>: ≤1,000 individuals for VU, ≤50 for CR.</li>
    <li><strong>Criterion E – Quantitative Analysis</strong>: Probability of extinction ≥10% within 100 years (VU), ≥20% within 20 years (EN), ≥50% within 10 years (CR).</li>
  </ul>

  <h4>4. <strong>Species Frequently Featured in Indian News (2020‑2024)</strong></h4>
  <p>These species have made headlines due to conservation successes, poaching incidents, or habitat‑related controversies. Each entry includes the Red List status (as of 2024), recent event, and the primary threat.</p>

  <table border="1" cellpadding="6" cellspacing="0" style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead style="background:#222;color:#fff;">
      <tr>
        <th>Species</th>
        <th>Common Name</th>
        <th>Red List Status (2024)</th>
        <th>Recent News Highlight</th>
        <th>Primary Threat</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Gavialis gangeticus</strong></td>
        <td>[[Gharial]]</td>
        <td>CR</td>
        <td>First successful captive‑breeding of a Gharial in <strong>Rajasthan</strong> (2022) after a decade‑long decline.</td>
        <td>Riverine habitat loss, sand mining, and entanglement in fishing nets.</td>
      </tr>
      <tr>
        <td><strong>Ardeotis nigriceps</strong></td>
        <td>[[Great Indian Bustard]]</td>
        <td>CR</td>
        <td>Two individuals rescued from a power‑line collision in <strong>Rajasthan</strong> (2023).</td>
        <td>Habitat conversion, collision with power lines, hunting.</td>
      </tr>
      <tr>
        <td><strong>Panthera tigris tigris</strong></td>
        <td>[[Bengal Tiger]]</td>
        <td>EN</td>
        <td>India’s tiger count rose to 3,167 (2023) – the highest ever, per <strong>National Tiger Estimation</strong>.</td>
        <td>Poaching, human‑wildlife conflict, habitat fragmentation.</td>
      </tr>
      <tr>
        <td><strong>Panthera uncia</strong></td>
        <td>[[Snow Leopard]]</td>
        <td>VU</td>
        <td>First camera‑trap footage from <strong>Himachal Pradesh</strong> (2021) after 15‑year gap.</td>
        <td>Retaliatory killing, illegal trade, climate‑induced prey decline.</td>
      </tr>
      <tr>
        <td><strong>Elephas maximus</strong></td>
        <td>[[Asian Elephant]]</td>
        <td>EN</td>
        <td>Elephant‑human conflict in <strong>Karnataka</strong> escalated; 12 fatalities reported (2022).</td>
        <td>Habitat encroachment, poaching for ivory, human‑elephant interface.</td>
      </tr>
      <tr>
        <td><strong>Lepidochelys olivacea</strong></td>
        <td>[[Olive Ridley Turtle]]</td>
        <td>VU</td>
        <td>Mass beaching of ~30,000 hatchlings due to plastic debris in <strong>Guruvayur</strong> (2024).</td>
        <td>Coastal development, plastic pollution, egg poaching.</td>
      </tr>
      <tr>
        <td><strong>Ailuropoda melanoleuca</strong></td>
        <td>[[Giant Panda]] (though not Indian, often cited in comparative studies)</td>
        <td>VU</td>
        <td>China’s latest panda census shows 1,864 individuals (2021).</td>
        <td>Habitat loss, bamboo die‑back.</td>
      </tr>
      <tr>
        <td><strong>Ailuropoda melanoleuca</strong></td>
        <td>[[Red Panda]]</td>
        <td>EN</td>
        <td>India recorded its first wild sighting in <strong>Arunachal Pradesh</strong> (2020).</td>
        <td>Deforestation, illegal trade.</td>
      </tr>
      <tr>
        <td><strong>Rhinoceros unicornis</strong></td>
        <td>[[Indian Rhinoceros]]</td>
        <td>VU</td>
        <td>Successful relocation of 12 rhinos from Kaziranga to Manas (2022) to de‑congest the park.</td>
        <td>Poaching, habitat fragmentation.</td>
      </tr>
      <tr>
        <td><strong>Haliaeetus albicilla</strong></td>
        <td>[[White‑tailed Eagle]]</td>
        <td>LC</td>
        <td>First breeding record in <strong>Himachal Pradesh</strong> (2023).</td>
        <td>Disturbance of nesting sites.</td>
      </tr>
    </tbody>
  </table>

  <h4>5. <strong>Legal & Policy Framework Governing Threatened Species</strong></h4>
  <p>India’s domestic statutes align closely with international conventions, ensuring that any breach has both national and diplomatic repercussions.</p>
  <ul>
    <li><strong>Wildlife (Protection) Act, 1972</strong> – Provides for the creation of <strong>Schedule I</strong> (highest protection) and Schedule II categories, mirroring IUCN’s CR and EN listings.</li>
    <li><strong>Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES)</strong> – India is a Party since 1976; all CITES‑listed species fall under stringent export‑import controls.</li>
    <li><strong>National Biodiversity Authority (NBA) Act, 2002</strong> – Regulates access to biological resources and benefit‑sharing.</li>
    <li><strong>National Green Tribunal Act, 2010</strong> – Empowers fast‑track adjudication of environmental violations, including illegal wildlife trade.</li>
    <li><strong>Forest (Conservation) Act, 1980</strong> – Restricts diversion of forest land, vital for species with large home ranges such as tigers and elephants.</li>
  </ul>

  <h4>6. <strong>Conservation Strategies Adopted by the Armed Forces</strong></h4>
  <p>Military establishments have pioneered several habitat‑friendly initiatives, which also serve as case studies for civil‑military collaboration.</p>
  <ul>
    <li><strong>Eco‑Sensitive Zones (ESZ) around bases</strong> – Buffer zones designed to protect adjoining wildlife corridors (e.g., the <strong>Western Ghats ESZ</strong> around the <em>Indian Air Force</em> training centre).</li>
    <li><strong>Wildlife Friendly Infrastructure</strong> – Use of under‑passes and over‑passes for ungulates on army roads; solar‑powered lighting to reduce light pollution.</li>
    <li><strong>Joint Forest Management (JFM) Partnerships</strong> – Army units partner with <strong>Forest Department</strong> to monitor poaching hotspots using UAVs.</li>
    <li><strong>Rapid Response Teams</strong> – Dedicated squads trained in anti‑poaching operations, often deployed in collaboration with the <strong>National Tiger Conservation Authority (NTCA)</strong>.</li>
  </ul>

  <h4>7. <strong>International Treaties Influencing Indian Policy</strong></h4>
  <p>India’s commitments under global conventions shape the national Red List assessments and guide funding priorities.</p>
  <ul>
    <li>[[Convention on Biological Diversity]] (CBD) – India’s <strong>National Biodiversity Action Plan (NBAP)</strong> (2007) aligns with the CBD’s Aichi Targets.</li>
    <li>[[Ramsar Convention]] – Protects wetlands such as <strong>Keoladeo National Park</strong>, critical for migratory birds and the Gharial.</li>
    <li>[[World Heritage Convention]] – Sites like <strong>Kaziranga</strong> and <strong>Sundarbans</strong> receive enhanced protection, influencing species recovery programmes.</li>
    <li>[[UN Convention on the Law of the Sea (UNCLOS)]] – Governs marine species like the Olive Ridley Turtle, especially regarding coastal state responsibilities.</li>
  </ul>

  <h4>8. <strong>Data Sources & Monitoring Mechanisms</strong></h4>
  <p>Accurate, up‑to‑date data underpin Red List assessments and defence‑related wildlife monitoring.</p>
  <ul>
    <li><strong>Global Biodiversity Information Facility (GBIF)</strong> – Open‑access repository for occurrence records.</li>
    <li><strong>India Biodiversity Portal</strong> – Citizen‑science platform contributing to DD (Data Deficient) species assessments.</li>
    <li><strong>Project Tiger Annual Reports</strong> – Provide population trends and habitat loss figures for the tiger.</li>
    <li><strong>Remote Sensing (Landsat, Sentinel‑2)</strong> – Used to map forest cover change, crucial for VU and EN species.</li>
    <li><strong>DNA Barcoding</strong> – Helps in forensic identification of seized wildlife products, aiding CITES enforcement.</li>
  </ul>

  <h4>9. <strong>Case Study: The Gharial Conservation Programme (2020‑2024)</strong></h4>
  <p>The Gharial, a <strong>CR</strong> crocodylian, demonstrates how coordinated multi‑agency action can reverse a negative trend.</p>
  <ul>
    <li><strong>Population Baseline (2010)</strong>: ~1,300 individuals across India.</li>
    <li><strong>Key Interventions</strong>:
      <ul>
        <li>Construction of <em>“Gharial Safe Zones”</em> in the <strong>Mahanadi River</strong> (2019‑2022).</li>
        <li>Community‑led fish‑stock management to ensure adequate prey.</li>
        <li>Installation of <strong>anti‑entanglement devices</strong> on fishing nets.</li>
      </ul>
    </li>
    <li><strong>Outcome (2024)</strong>: Estimated increase to ~1,750 individuals; IUCN reassessed the species as “CR‑A2cd” (still critical, but with a positive trend).</li>
  </ul>

  <h4>10. <strong>Implications for Defence Exams</strong></h4>
  <p>Understanding the Red List and recent species‑related news equips candidates to answer questions on:</p>
  <ul>
    <li>Linkages between biodiversity loss and national security.</li>
    <li>Legal provisions (e.g., Schedule I species) that intersect with defence‑related land acquisition.</li>
    <li>International obligations that affect India’s strategic posture (e.g., CITES restrictions on wildlife trade via naval routes).</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>India’s <strong>tiger population</strong> reached 3,167 in 2023 – the highest ever recorded (National Tiger Estimation).</li>
      <li>The <strong>Gharial</strong> is the only <em>crocodilian</em> listed as <strong>CR‑A2cd</strong> on the IUCN Red List (2024).</li>
      <li>Under the <strong>Wildlife (Protection) Act, 1972</strong>, all <strong>CR</strong> species are automatically placed in <strong>Schedule I</strong>.</li>
      <li>India signed the <strong>CITES</strong> agreement in 1976; all listed species require a <em>Non‑Detriment Finding</em> for export.</li>
      <li>The <strong>Olive Ridley Turtle</strong> mass beaching of ~30,000 hatchlings in 2024 highlighted the impact of marine plastic pollution.</li>
      <li>Project Tiger’s latest revision (2022) added <strong>Kaiga</strong> and <strong>Rangasthalam</strong> as tiger reserves.</li>
      <li>Under the <strong>Ramsar Convention</strong>, India has 75 wetlands, crucial for migratory birds and Gharial nesting grounds.</li>
      <li>India’s <strong>National Biodiversity Authority</strong> implements the <em>Benefit‑Sharing</em> provisions of the CBD, affecting bioprospecting of endemic species.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["env-treaties"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Climate Change Treaties & India's NDCs
  </h3>

  <h4><strong>1. Evolution of Global Climate Regimes</strong></h4>
  <p>The international climate architecture has progressed through three pivotal phases:</p>
  <ul>
    <li><strong>United Nations Framework Convention on Climate Change (UNFCCC)</strong> – Adopted on <strong>15 May 1992</strong> in Rio de Janeiro and entered into force on <strong>21 March 1994</strong>. It established the principle of <em>common but differentiated responsibilities</em> (CBDR) and created the annual Conference of the Parties (COP) mechanism.</li>
    <li><strong>Kyoto Protocol</strong> – Adopted at <strong>COP3 (1997, Kyoto, Japan)</strong> and entered into force on <strong>16 February 2005</strong>. It set legally binding emission reduction targets for Annex I (developed) countries, amounting to an average 5 % reduction below 1990 levels during the first commitment period (2008‑2012). The Protocol introduced three flexible mechanisms: <strong>International Emissions Trading</strong>, <strong>Clean Development Mechanism (CDM)</strong>, and <strong>Joint Implementation (JI)</strong>.</li>
    <li><strong>Paris Agreement</strong> – Adopted at <strong>COP21 (2015, Paris, France)</strong> and entered into force on <strong>4 November 2016</strong>. It shifted the paradigm from top‑down targets to nationally determined contributions (NDCs), aiming to limit global warming to well below <strong>2 °C</strong> and pursue efforts to keep it below <strong>1.5 °C</strong> above pre‑industrial levels.</li>
  </ul>

  <h4><strong>2. Core Provisions of the Paris Agreement</strong></h4>
  <p>The Paris framework rests on four inter‑linked pillars:</p>
  <ul>
    <li><strong>Mitigation</strong> – Each Party submits an NDC outlining its contribution to global emission reductions. NDCs are to be updated every five years, with a “ratchet‑up” mechanism.</li>
    <li><strong>Adaptation</strong> – Parties develop and communicate national adaptation plans, emphasizing vulnerability assessments and resilience building.</li>
    <li><strong>Finance</strong> – Developed countries reaffirm the <strong>$100 billion</strong> annual climate finance goal (to be scaled up beyond 2025). The Green Climate Fund (GCF) serves as the principal conduit.</li>
    <li><strong>Transparency & Global Stocktake</strong> – A robust MRV (Measurement, Reporting, Verification) system ensures accountability. Every five years a global stocktake evaluates collective progress against the temperature goal.</li>
  </ul>

  <h4><strong>3. India’s Climate Commitments: From INDC to NDC</strong></h4>
  <p>India’s journey in the Paris process is marked by a series of strategic declarations:</p>
  <ul>
    <li><strong>Intended Nationally Determined Contribution (INDC) – 30 November 2015</strong>:
      <ul>
        <li>Reduce emissions intensity of GDP by <strong>33 %–35 %</strong> by 2030 from 2005 levels.</li>
        <li>Achieve <strong>40 %–45 %</strong> cumulative electricity generation from non‑fossil fuel sources by 2030.</li>
        <li>Expand forest and tree cover to create an additional <strong>2.5 million hectares</strong> of carbon sink.</li>
        <li>Intensify the <strong>National Action Plan on Climate Change (NAPCC)</strong> to meet the above goals.</li>
      </ul>
    </li>
    <li><strong>Formal Submission of NDC – 12 September 2021 (COP26, Glasgow)</strong>:
      <ul>
        <li>Reaffirm the 2030 intensity and renewable targets.</li>
        <li>Introduce a **conditional** target of **50 %** renewable electricity by 2030, contingent on international financial and technology support.</li>
        <li>Commit to **net‑zero emissions by 2070** (unconditional) and **by 2050** (conditional).</li>
        <li>Announce a **30 %** increase in forest cover, translating to an additional **5 million hectares** of carbon sink by 2030.</li>
      </ul>
    </li>
  </ul>

  <h4><strong>4. Institutional Framework for Implementing India’s NDCs</strong></h4>
  <p>Implementation hinges on a multi‑layered institutional architecture:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead style="background:#f2f2f2;">
      <tr>
        <th style="border:1px solid #ddd; padding:8px;">Institution</th>
        <th style="border:1px solid #ddd; padding:8px;">Mandate</th>
        <th style="border:1px solid #ddd; padding:8px;">Key Initiatives</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;"><strong>[[Ministry of Environment, Forest and Climate Change (MoEFCC)]]</strong></td>
        <td style="border:1px solid #ddd; padding:8px;">Policy formulation, coordination, and monitoring of climate actions.</td>
        <td style="border:1px solid #ddd; padding:8px;">Implementation of the <strong>National Action Plan on Climate Change (NAPCC)</strong>, overseeing the <strong>State Action Plans on Climate Change (SAPCC)</strong>.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;"><strong>[[Ministry of Power (MoP)]]</strong></td>
        <td style="border:1px solid #ddd; padding:8px;">Electrification, renewable energy integration, and grid modernization.</td>
        <td style="border:1px solid #ddd; padding:8px;">Execution of the <strong>Ujjwal Bharat</strong> scheme, <strong>Solar Energy Corporation of India (SECI)</strong> projects, and the <strong>National Solar Mission (JNNSM)</strong>.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;"><strong>[[Ministry of New and Renewable Energy (MNRE)]]</strong></td>
        <td style="border:1px solid #ddd; padding:8px;">Promotion of renewable power, bio‑energy, and clean cooking.</td>
        <td style="border:1px solid #ddd; padding:8px;">Implementation of <strong>Solar Pumping Mission</strong>, <strong>Hybrid Renewable Energy Program</strong>, and <strong>PM‑KUSUM Yojana</strong>.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ddd; padding:8px;"><strong>[[Bureau of Energy Efficiency (BEE)]]</strong></td>
        <td style="border:1px solid #ddd; padding:8px;">Energy conservation standards, labeling, and audits.</td>
        <td style="border:1px solid #ddd; padding:8px;">Implementation of the <strong>Perform, Achieve and Trade (PAT) Scheme</strong> and the <strong>Star Rating Program</strong> for appliances.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>5. Sector‑Wise Pathways to Achieve NDC Targets</strong></h4>
  <p>India’s climate roadmap is anchored on three strategic pillars:</p>

  <h5><strong>5.1 Power Sector – Decarbonisation</strong></h5>
  <ul>
    <li>Target of **50 %** renewable electricity by 2030 (conditional). Current renewable share (FY 2023‑24) stands at **38 %** (≈ 225 GW).</li>
    <li>Key projects: <strong>Solar Parks</strong> (e.g., Gujarat’s 2 GW park), <strong>Wind Corridors</strong> in Tamil Nadu and Gujarat, and **Hybrid Solar‑Wind** schemes.</li>
    <li>Grid flexibility via **Battery Energy Storage Systems (BESS)** – projected capacity of **10 GW** by 2030.</li>
    <li>De‑commissioning of **Coal‑based plants** exceeding 4 GW capacity through the **Coal Phase‑Out Policy** (2023). </li>
  </ul>

  <h5><strong>5.2 Transport – Clean Mobility</strong></h5>
  <ul>
    <li>Accelerated adoption of **Electric Vehicles (EVs)** – target of **30 %** EV penetration in passenger vehicles by 2030.</li>
    <li>Implementation of the **FAME II (Faster Adoption and Manufacturing of Hybrid & Electric Vehicles)** scheme – subsidies of up to **₹1.5 lakh** per EV.</li>
    <li>Promotion of **CNG** and **LPG** for public transport, especially in metro cities.</li>
    <li>Development of charging infrastructure – aim to install **2 million** public chargers by 2030.</li>
  </ul>

  <h5><strong>5.3 Agriculture & Forestry – Carbon Sinks</strong></h5>
  <ul>
    <li>Expansion of **Afforestation** under the **Green India Mission** – goal of **5 million hectares** additional forest cover by 2030.</li>
    <li>Promotion of **Climate‑Smart Agriculture (CSA)** – integrated nutrient management, precision irrigation, and drought‑resilient crop varieties.</li>
    <li>Implementation of **Methane Reduction** in livestock via **Biogas** and **Anaerobic Digestion** units.</li>
    <li>Adoption of **Zero‑Budget Natural Farming (ZBNF)** in select states to reduce synthetic fertilizer use.</li>
  </ul>

  <h5><strong>5.4 Industry – Energy Efficiency & Circular Economy</strong></h5>
  <ul>
    <li>Extension of the **PAT Scheme** to **non‑energy‑intensive sectors** (e.g., cement, steel) – projected CO₂ abatement of **10 MtCO₂e** by 2030.</li>
    <li>Incentivisation of **Carbon Capture, Utilisation and Storage (CCUS)** – pilot projects in Gujarat’s **Gujarat Refinery** and **Coal‑based plants** in Odisha.</li>
    <li>Promotion of **Green Hydrogen** – target of **5 GW** green hydrogen production capacity by 2030 under the **National Hydrogen Mission**.</li>
  </ul>

  <h4><strong>6. Financing Mechanisms for India's Climate Action</strong></h4>
  <p>Meeting the conditional NDC targets hinges on robust climate finance:</p>
  <ul>
    <li><strong>Domestic Sources</strong> – Allocation of **₹2.5 lakh crore** (≈ $34 bn) in the **2023‑24 Union Budget** under the **“National Climate Fund”** for renewable projects, adaptation, and research.</li>
    <li><strong>International Funds</strong> – Mobilisation of **$10 bn** from the **Green Climate Fund (GCF)**, **Adaptation Fund**, and bilateral climate finance (e.g., **Germany’s KfW**, **Japan’s JICA**).</li>
    <li><strong>Innovative Instruments</strong> – Introduction of **Climate Bonds** (issued by SEBI‑registered entities) and **Carbon Credit Trading** under the **National Carbon Market (proposed 2025)**.</li>
  </ul>

  <h4><strong>7. Monitoring, Reporting & Verification (MRV) Architecture</strong></h4>
  <p>Effective MRV is essential for transparency and credibility:</p>
  <ul>
    <li>India’s **National Climate Change Monitoring (NCCM)** platform, operational since **2020**, aggregates sectoral emissions data using **India’s Integrated Reporting Framework (IRF)**.</li>
    <li>Annual **India Climate Action Report (ICAR)** submitted to the UNFCCC – latest edition (2023) details progress against each NDC target.</li>
    <li>Third‑party verification by accredited **International Auditing Firms** (e.g., **KPMG**, **Ernst & Young**) ensures conformity with **IPCC Guidelines for National Greenhouse Gas Inventories**.</li>
  </ul>

  <h4><strong>8. Challenges & Criticisms</strong></h4>
  <p>Despite ambitious pledges, India faces several systemic hurdles:</p>
  <ul>
    <li><strong>Energy Access vs. Decarbonisation</strong> – Over **140 million** people still lack reliable electricity (2022). Balancing universal electrification with renewable scaling is a policy tightrope.</li>
    <li><strong>Financing Gap</strong> – Estimated **$120 bn** required for achieving the conditional 2030 targets, with only **≈ $45 bn** currently pledged.</li>
    <li><strong>Technological Readiness</strong> – Low domestic manufacturing capacity for **Lithium‑Ion batteries** and **Green Hydrogen electrolyzers**, leading to import dependence.</li>
    <li><strong>Policy Coordination</strong> – Overlapping jurisdictions between MoEFCC, MoP, MNRE, and state governments sometimes cause implementation delays.</li>
    <li><strong>International Equity Debate</strong> – Developing nations argue that historic emissions responsibility rests with Annex I countries, urging greater climate finance and technology transfer.</li>
  </ul>

  <h4><strong>9. Comparative Overview of Major Climate Treaties</strong></h4>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead style="background:#e8f5e9;">
      <tr>
        <th style="border:1px solid #bbb; padding:6px;">Treaty</th>
        <th style="border:1px solid #bbb; padding:6px;">Adoption Year</th>
        <th style="border:1px solid #bbb; padding:6px;">Key Target</th>
        <th style="border:1px solid #bbb; padding:6px;">Legal Status</th>
        <th style="border:1px solid #bbb; padding:6px;">India’s Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[UNFCCC]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">1992</td>
        <td style="border:1px solid #bbb; padding:6px;">Stabilise GHG concentrations at a safe level</td>
        <td style="border:1px solid #bbb; padding:6px;">Foundational, non‑binding</td>
        <td style="border:1px solid #bbb; padding:6px;">Signatory; active participant in COPs</td>
      </tr>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[Kyoto Protocol]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">1997</td>
        <td style="border:1px solid #bbb; padding:6px;">5 % reduction for Annex I parties (2008‑2012)</td>
        <td style="border:1px solid #bbb; padding:6px;">Legally binding for Annex I</td>
        <td style="border:1px solid #bbb; padding:6px;">Non‑Annex I; limited participation; CDM projects</td>
      </tr>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[Paris Agreement]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">2015</td>
        <td style="border:1px solid #bbb; padding:6px;">Limit warming to <2 °C (preferably 1.5 °C)</td>
        <td style="border:1px solid #bbb; padding:6px;">Universal, non‑binding targets (NDCs)</td>
        <td style="border:1px solid #bbb; padding:6px;">Submitted INDC (2015) → NDC (2021); leading developing nation voice</td>
      </tr>
      <tr>
        <td style="border:1px solid #bbb; padding:6px;"><strong>[[Glasgow Climate Pact]]</strong></td>
        <td style="border:1px solid #bbb; padding:6px;">2021</td>
        <td style="border:1px solid #bbb; padding:6px;">Strengthen 2030 NDCs; phase‑down coal</td>
        <td style="border:1px solid #bbb; padding:6px;">COP26 outcome, not a treaty</td>
        <td style="border:1px solid #bbb; padding:6px;">Supported higher ambition; pledged coal phase‑down</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>10. Future Outlook (2030‑2050)</strong></h4>
  <p>India’s long‑term climate vision aligns with the **Net‑Zero by 2070** commitment, with a strategic pivot towards:</p>
  <ul>
    <li>**Decarbonising heavy industry** via CCUS and green hydrogen.</li>
    <li>**Scaling offshore wind** – potential capacity of **30 GW** by 2040.</li>
    <li>**Smart cities** integrating **Internet of Things (IoT)** for real‑time energy management.</li>
    <li>**Nature‑based solutions** – mangrove restoration along the **Sundarbans** and **Western Ghats** to enhance carbon sequestration.</li>
  </ul>
  <p>Success will depend on sustained policy continuity, enhanced climate finance, and robust MRV mechanisms that collectively translate India’s NDC aspirations into measurable emissions reductions.</p>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>India’s **INDC** (Nov 2015) pledged a **33 %–35 %** reduction in GDP‑intensity by 2030.</li>
      <li>The **Paris Agreement** entered into force on **4 Nov 2016**, committing all Parties to submit NDCs.</li>
      <li>India’s **conditional** renewable electricity target is **50 %** by 2030, contingent on international support.</li>
      <li>Under the **National Action Plan on Climate Change (NAPCC)**, India identified **8** priority missions (e.g., Solar, Energy Efficiency).</li>
      <li>India aims to increase forest cover by **5 million hectares** by 2030, creating an additional **2.5 MtCO₂** sink.</li>
      <li>The **Green Climate Fund (GCF)** aims to mobilise **$100 bn** annually by 2020; India has secured **≈ $10 bn** so far.</li>
      <li>India’s **net‑zero** commitment is for **2070** (unconditional) and **2050** (conditional with finance).</li>
      <li>Key climate finance avenue: **Climate Bonds** – first Indian green bond issued in **2020** (₹5 bn by SAEL). </li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["env-laws"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Environmental Legislation & EIA
  </h3>

  <h4>1. Evolution of Indian Environmental Law</h4>
  <p>India’s environmental legal framework began in the early 1970s, catalysed by the global <strong>environmental movement</strong> and domestic ecological crises such as the <em>Bhopal Gas Tragedy</em> (1984). The Constitution’s <strong>right to a wholesome environment</strong> was interpreted under the doctrine of “<strong>public trust</strong>” in landmark judgments, establishing a judicially enforceable environmental regime.</p>

  <h4>2. Core Statutes (chronological)</h4>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead style="background:#2c2c3a; color:#fff;">
      <tr>
        <th style="padding:8px; border:1px solid #444;">Act / Rule</th>
        <th style="padding:8px; border:1px solid #444;">Year</th>
        <th style="padding:8px; border:1px solid #444;">Key Provisions</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[Water (Prevention and Control of Pollution) Act]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">1974</td>
        <td style="padding:8px; border:1px solid #444;">Establishes Central and State Pollution Control Boards; mandates effluent standards.</td>
      </tr>
      <tr style="background:#2a2a3b;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[Air (Prevention and Control of Pollution) Act]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">1981</td>
        <td style="padding:8px; border:1px solid #444;">Regulates emission standards; empowers boards to enforce penalties.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[Environment (Protection) Act]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">1986</td>
        <td style="padding:8px; border:1px solid #444;">Umbrella legislation; empowers the central government to set standards, issue directions, and close polluting units.</td>
      </tr>
      <tr style="background:#2a2a3b;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[Forest Conservation Act]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">1980</td>
        <td style="padding:8px; border:1px solid #444;">Restricts diversion of forest land for non‑forestry purposes; requires prior approval from the Ministry of Environment.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[Wildlife Protection Act]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">1972</td>
        <td style="padding:8px; border:1px solid #444;">Creates protected areas, regulates trade in wildlife, and establishes the National Board for Wildlife.</td>
      </tr>
      <tr style="background:#2a2a3b;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[Biodiversity Act]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">2002</td>
        <td style="padding:8px; border:1px solid #444;">Institutes the National Biodiversity Authority (NBA) and mandates benefit‑sharing for bioprospecting.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[National Green Tribunal Act]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">2010</td>
        <td style="padding:8px; border:1px solid #444;">Creates a specialized tribunal for speedy disposal of environmental disputes.</td>
      </tr>
      <tr style="background:#2a2a3b;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[National Clean Air Programme (NCAP)]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">2019</td>
        <td style="padding:8px; border:1px solid #444;">Aims to reduce PM2.5 and PM10 concentrations by 20–30% by 2024, relative to 2017 levels.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #444;"><strong>[[National Solar Mission (JNNSM)]]</strong></td>
        <td style="padding:8px; border:1px solid #444;">2010</td>
        <td style="padding:8px; border:1px solid #444;">Targets 100 GW solar capacity by 2022; provides fiscal incentives and viability gap funding.</td>
      </tr>
    </tbody>
  </table>

  <h4>3. International Commitments Influencing Domestic Law</h4>
  <ul style="margin-top:8px;">
    <li><strong>[[United Nations Framework Convention on Climate Change (UNFCCC)]]</strong> – Ratified in 1992; obliges India to submit National Communications and Biennial Updates.</li>
    <li><strong>[[Kyoto Protocol]]</strong> – India adopted the Clean Development Mechanism (CDM) in 2006, facilitating joint implementation projects.</li>
    <li><strong>[[Paris Agreement]]</strong> – India’s Intended Nationally Determined Contribution (INDC) pledged a reduction in emissions intensity of 33‑35% by 2030 from 2005 levels.</li>
    <li><strong>[[Convention on Biological Diversity (CBD)]]</strong> – Enforced through the Biodiversity Act, 2002, and the creation of the NBA.</li>
    <li><strong>[[Basel Convention]]</strong> – Regulates trans‑boundary movements of hazardous waste; India enacted the Hazardous and Other Wastes (Management & Transboundary Movement) Rules, 2016.</li>
  </ul>

  <h4>4. Environmental Impact Assessment (EIA) – Legal Framework</h4>
  <p>The <strong>EIA Notification, 2006</strong> (amended 2020) operationalises the <em>environmental impact assessment</em> process for “<strong>environmentally sensitive projects</strong>”. It is anchored in the <strong>[[Environment (Protection) Act, 1986]]</strong> and mandates a systematic, tiered appraisal.</p>

  <h5>4.1. Stages of EIA</h5>
  <ol style="margin-top:8px;">
    <li><strong>Screening</strong> – Determination by the Ministry of Environment, Forests & Climate Change (MoEFCC) whether a project falls under Schedule I (mandatory EIA) or Schedule II (exempt).</li>
    <li><strong>Scoping</strong> – Identification of key environmental parameters; public consultation begins; a <strong>Terms of Reference (ToR)</strong> is drafted.</li>
    <li><strong>Baseline Study</strong> – Collection of quantitative data on air, water, soil, biodiversity, socio‑economic conditions, and cultural heritage.</li>
    <li><strong>Impact Prediction & Mitigation</strong> – Use of models (e.g., AERMOD for air dispersion, SWAT for watershed) to forecast changes; formulation of <strong>Environmental Management Plan (EMP)</strong>.</li>
    <li><strong>Public Hearing (PH)</strong> – Conducted by the State Pollution Control Board (SPCB) or the Ministry; mandatory for projects with >100 ha of forest diversion.</li>
    <li><strong>Appraisal</strong> – The Expert Appraisal Committee (EAC) reviews the EIA report, assesses mitigation adequacy, and recommends approval, conditional approval, or rejection.</li>
    <li><strong>Monitoring & Compliance</strong> – Post‑approval, the proponent must submit periodic <strong>Environmental Monitoring Reports (EMR)</strong> and comply with stipulated conditions.</li>
  </ol>

  <h5>4.2. Key Institutional Players</h5>
  <ul style="margin-top:8px;">
    <li><strong>MoEFCC</strong> – Central authority; issues clearances, formulates policy, and chairs the EAC.</li>
    <li><strong>State Pollution Control Boards (SPCBs)</strong> – Conduct field inspections, facilitate public hearings, and enforce compliance at the state level.</li>
    <li><strong>National Environment Appraisal Authority (NEAA)</strong> – Established under the 2020 amendment to streamline fast‑track clearances for renewable energy and infrastructure projects.</li>
    <li><strong>National Green Tribunal (NGT)</strong> – Adjudicates disputes arising from violation of EIA conditions.</li>
  </ul>

  <h5>4.3. Critical Judicial Pronouncements</h5>
  <ul style="margin-top:8px;">
    <li><strong>[[M.C. Mehta v. Union of India (1998)]]</strong> – Introduced the “<em>precautionary principle</em>” and “<em>polluter pays principle</em>” into Indian jurisprudence.</li>
    <li><strong>[[Vellore Citizens Welfare Forum v. Union of India (1996)]]</strong> – Expanded the definition of “environment” to include “overall quality of life”.</li>
    <li><strong>[[T.N. Godavarman Thirumulpad v. Union of India (2015)]]</strong> – Reinforced the need for cumulative impact assessment (CIA) for multiple projects within a river basin.</li>
    <li><strong>[[Indian Council for Forestry Research and Education (ICFRE) v. Union of India (2021)]]</strong> – Clarified that the “forest‑land diversion” clause applies to all non‑forest uses, including solar farms.</li>
  </ul>

  <h4>5. Renewable Energy Policies & Their Interaction with EIA</h4>
  <p>India’s renewable energy drive is governed by a suite of policies that intersect with the EIA regime, often creating a “<strong>policy‑environment nexus</strong>”.</p>

  <h5>5.1. National Solar Mission (JNNSM)</h5>
  <ul style="margin-top:8px;">
    <li>Target: <strong>100 GW solar</strong> by 2022 (re‑targeted to 280 GW by 2030).</li>
    <li>Incentives: Viability Gap Funding (VGF), Accelerated Depreciation (AD), and Generation‑Based Incentives (GBI).</li>
    <li>EIA Implication: Large‑scale solar parks (>5 MW) require EIA under Schedule I; the 2020 amendment introduced a “<strong>fast‑track clearance</strong>” for solar projects with an EMP that meets <strong>National Solar Mission</strong> criteria.</li>
  </ul>

  <h5>5.2. Wind Energy Policy (2015)</h5>
  <ul style="margin-top:8px;">
    <li>Goal: 60 GW onshore wind capacity by 2022.</li>
    <li>Key Provision: Projects > 10 MW need a detailed EIA, but the policy encourages “<strong>land‑use optimisation</strong>” to minimise forest diversion.</li>
  </ul>

  <h5>5.3. National Hydrogen Energy Mission (2021)</h5>
  <ul style="margin-top:8px;">
    <li>Strategic Aim: Position India among the top‑three global hydrogen producers by 2030.</li>
    <li>EIA Aspect: Green hydrogen plants (electrolysis powered by renewables) are mandated to undergo a “<strong>Zero‑Carbon Impact Assessment</strong>” under the 2021 amendment to the EIA Notification.</li>
  </ul>

  <h5>5.4. Integrated Climate‑Resilient Infrastructure</h5>
  <p>Under the <strong>[[National Action Plan on Climate Change (NAPCC)]]</strong>, eight missions—including the <strong>National Mission for Enhanced Energy Efficiency (NMEEE)</strong>—integrate climate considerations into infrastructure projects. The EIA process now incorporates <strong>climate‑risk screening</strong> (e.g., sea‑level rise projections for coastal ports).</p>

  <h4>6. Emerging Trends in EIA Practice</h4>
  <ul style="margin-top:8px;">
    <li><strong>Digital EIA Platforms</strong> – The MoEFCC’s <em>e‑EIA portal</em> (launched 2020) enables online submission, real‑time tracking, and public comment aggregation.</li>
    <li><strong>Cumulative Impact Assessment (CIA)</strong> – Mandated for projects within the same river basin or ecological hotspot; uses GIS‑based overlay analysis.</li>
    <li><strong>Strategic Environmental Assessment (SEA)</strong> – Applied to sectoral policies (e.g., National Energy Policy) to pre‑emptively evaluate environmental implications.</li>
    <li><strong>Social Impact Assessment (SIA)</strong> – Integrated with EIA for projects affecting tribal lands; aligns with the <strong>[[Forest Rights Act, 2006]]</strong> provisions for consent.</li>
    <li><strong>Climate‑Adjusted EIA</strong> – Incorporates climate‑model outputs (CMIP6) to forecast long‑term impacts on biodiversity and human health.</li>
  </ul>

  <h4>7. Enforcement Mechanisms & Penalties</h4>
  <p>Non‑compliance with EIA conditions attracts punitive measures under multiple statutes:</p>
  <ul style="margin-top:8px;">
    <li>Under the <strong>[[Environment (Protection) Act, 1986]]</strong>: imprisonment up to 3 years and/or fine up to ₹1 crore for each day of contravention.</li>
    <li>Under the <strong>[[Air (Prevention and Control of Pollution) Act, 1981]]</strong>: closure of the offending unit and a fine of up to ₹25 lakhs.</li>
    <li>The <strong>National Green Tribunal</strong> can award compensation for ecological damage, as exemplified in the <em>Ganga Pollution</em> case (2018).</li>
  </ul>

  <h4>8. Inter‑linkages with Other Sectors</h4>
  <ul style="margin-top:8px;">
    <li><strong>Urban Planning</strong> – The <strong>Smart Cities Mission</strong> requires an EIA for all major infrastructure, linking urban development with climate resilience.</li>
    <li><strong>Transport</strong> – The <strong>National Electric Mobility Mission Plan (NEMMP‑2020)</strong> stipulates EIA for battery‑manufacturing plants due to hazardous waste concerns.</li>
    <li><strong>Agriculture</strong> – The <strong>Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)</strong> incorporates an environmental clearance for large‑scale irrigation projects to safeguard wetlands.</li>
  </ul>

  <h4>9. Comparative Perspective – Global Best Practices</h4>
  <p>While India’s EIA system is robust, comparative analysis with other jurisdictions reveals areas for improvement:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:10px;">
    <thead style="background:#2c2c3a; color:#fff;">
      <tr>
        <th style="padding:8px; border:1px solid #444;">Country</th>
        <th style="padding:8px; border:1px solid #444;">Key Feature</th>
        <th style="padding:8px; border:1px solid #444;">Relevance to India</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #444;">United States</td>
        <td style="padding:8px; border:1px solid #444;">National Environmental Policy Act (NEPA) – mandatory <strong>cumulative impact statements</strong>.</td>
        <td style="padding:8px; border:1px solid #444;">Adopt a stronger CIA framework for river‑basin planning.</td>
      </tr>
      <tr style="background:#2a2a3b;">
        <td style="padding:8px; border:1px solid #444;">Germany</td>
        <td style="padding:8px; border:1px solid #444;">Public participation through “<strong>Umweltverträglichkeitsprüfung</strong>” with binding citizen referendums.</td>
        <td style="padding:8px; border:1px solid #444;">Enhance the legal weight of public hearings in India.</td>
      </tr>
      <tr style="background:#1e1e2a;">
        <td style="padding:8px; border:1px solid #444;">Australia</td>
        <td style="padding:8px; border:1px solid #444;">Integrated <strong>Strategic Environmental Assessment</strong> for national policies.</td>
        <td style="padding:8px; border:1px solid #444;">Scale up SEA for India’s sectoral missions (e.g., NAPCC).</td>
      </tr>
    </tbody>
  </table>

  <h4>10. Future Outlook & Policy Recommendations</h4>
  <ul style="margin-top:8px;">
    <li>Introduce a statutory <strong>“Climate‑EIA”</strong> clause to assess greenhouse‑gas emissions of all large projects.</li>
    <li>Mandate <strong>post‑project impact audits</strong> at five‑year intervals to verify long‑term compliance.</li>
    <li>Strengthen the role of the <strong>National Biodiversity Authority</strong> in reviewing EIA reports that affect endemic species.</li>
    <li>Expand the use of <strong>remote sensing and AI‑driven monitoring</strong> to detect violations in near real‑time.</li>
    <li>Facilitate greater integration of <strong>community‑based monitoring</strong> by linking NGT orders with local Panchayat oversight.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>India’s <strong>Environment (Protection) Act, 1986</strong> is the umbrella law under which the <strong>EIA Notification, 2006</strong> operates.</li>
      <li>Under the <strong>National Solar Mission</strong>, projects ≥ 5 MW need a mandatory EIA; the 2020 amendment introduced a fast‑track route for solar parks meeting specific EMP criteria.</li>
      <li>The <strong>Precautionary Principle</strong> and <strong>Polluter Pays Principle</strong> were judicially embedded in the <strong>[[M.C. Mehta v. Union of India]]</strong> case (1998).</li>
      <li>India’s <strong>National Clean Air Programme (NCAP)</strong> aims for a 20–30% reduction in particulate matter (PM2.5/PM10) by 2024, measured against 2017 baseline.</li>
      <li>“<strong>Cumulative Impact Assessment</strong>” became mandatory after the <strong>[[T.N. Godavarman Thirumulpad v. Union of India]]</strong> judgment (2015) for projects within the same river basin.</li>
      <li>The <strong>National Green Tribunal (NGT)</strong> can impose penalties up to ₹25 lakhs per day for non‑compliance with EIA conditions.</li>
      <li>Under the <strong>[[Biodiversity Act, 2002]]</strong>, the National Biodiversity Authority must approve any bioprospecting that could affect biodiversity, even if the project has an EIA clearance.</li>
      <li>India’s commitment under the <strong>Paris Agreement</strong> includes an IND‑C (Intended Nationally Determined Contribution) to reduce emissions intensity by 33‑35% by 2030 from 2005 levels.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["env-renewable"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Renewable Energy &amp; Green Initiatives
  </h3>

  <h4><strong>1. Conceptual Foundations</strong></h4>
  <p>Renewable energy refers to <strong>energy derived from naturally replenishing sources</strong> that have minimal environmental impact compared to fossil fuels. The core principle is to <em>de‑carbonise</em> the energy sector while ensuring energy security. In the Indian context, the transition is guided by the twin objectives of <strong>climate mitigation</strong> and <strong>economic inclusivity</strong> under the framework of the <strong>National Action Plan on Climate Change (NAPCC)</strong>.</p>

  <h4><strong>2. Global Commitments Shaping India’s Renewable Agenda</strong></h4>
  <ul>
    <li><strong>Paris Agreement (2015)</strong>: India pledged to reduce <strong>intensity of carbon emissions</strong> by <strong>33‑35% by 2030</strong> from 2005 levels.</li>
    <li><strong>United Nations Framework Convention on Climate Change (UNFCCC)</strong> – <strong>Article 4</strong> emphasises mitigation, adaptation, and technology transfer.</li>
    <li><strong> Sustainable Development Goal (SDG) 7</strong>: Ensure access to <strong>affordable, reliable, sustainable and modern energy</strong> for all by 2030.</li>
    <li><strong>International Renewable Energy Agency (IRENA)</strong> 2022 report projects global renewable capacity to reach **11,000 GW** by 2050.</li>
  </ul>

  <h4><strong>3. Legislative & Policy Milestones in India</strong></h4>
  <ul>
    <li><strong>Energy Conservation Act, 2001</strong> – Established the Bureau of Energy Efficiency (BEE) and mandated <strong>Energy Conservation Certificates (ECCs)</strong>.</li>
    <li><strong>National Solar Mission (2009)</strong> – Targeted **100 GW** of solar capacity by 2022; later revised to **280 GW** by 2030.</li>
    <li><strong>Renewable Purchase Obligation (RPO) – 2010</strong> – Mandates distribution utilities to purchase a certain percentage of power from renewable sources (e.g., 20% for large consumers).</li>
    <li><strong>National Clean Energy Fund (NCEF), 2010</strong> – A fund of **₹10,000 crore** to finance clean energy research and pilot projects.</li>
    <li><strong>International Solar Alliance (ISA), 2015</strong> – Initiated by [[Prime Minister Narendra Modi]] to mobilise **$1 trillion** in solar investments across 121 sunny nations.</li>
    <li><strong>National Electric Mobility Mission Plan (NEMMP) 2020</strong> – Aims for **30 %** electric vehicle (EV) penetration by 2030, reducing oil import dependence.</li>
    <li><strong>Hydro Power Policy, 2021</strong> – Provides incentives for **small hydro projects (≤25 MW)**, focusing on run‑of‑the‑river schemes.</li>
    <li><strong>Biomass Power and Cogeneration Policy, 2013</strong> – Sets a target of **10 GW** of biomass power by 2022.</li>
  </ul>

  <h4><strong>4. Technology Portfolio and Comparative Overview</strong></h4>
  <p>The Indian renewable mix is dominated by solar and wind, but emerging technologies such as offshore wind, tidal, and geothermal are gaining attention.</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead>
      <tr style="background:#f0f0f0;">
        <th style="border:1px solid #ccc; padding:8px;">Technology</th>
        <th style="border:1px solid #ccc; padding:8px;">Installed Capacity (GW) <br> (as of 2023)</th>
        <<th style="border:1px solid #ccc; padding:8px;">Capacity Utilisation Factor (CUF) %</th>
        <th style="border:1px solid #ccc; padding:8px;">Key Advantages</th>
        <th style="border:1px solid #ccc; padding:8px;">Challenges</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>Solar Photovoltaic</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 70</td>
        <td style="border:1px solid #ccc; padding:8px;">18‑22</td>
        <td style="border:1px solid #ccc; padding:8px;">Modular, low water use, rapidly falling LCOE.</td>
        <td style="border:1px solid #ccc; padding:8px;">Intermittency, land acquisition, storage cost.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>On‑shore Wind</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 45</td>
        <td style="border:1px solid #ccc; padding:8px;">25‑30</td>
        <td style="border:1px solid #ccc; padding:8px;">High CUF in coastal & high‑altitude zones, longer lifespan.</td>
        <td style="border:1px solid #ccc; padding:8px;">Site‑specific wind patterns, turbine recycling.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>Hydropower (Large)</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 45</td>
        <td style="border:1px solid #ccc; padding:8px;">45‑55</td>
        <td style="border:1px solid #ccc; padding:8px;">Base‑load capability, long life‑cycle.</td>
        <td style="border:1px solid #ccc; padding:8px;">Displacement of communities, ecological impacts.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>Biomass & Waste‑to‑Energy</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 10</td>
        <td style="border:1px solid #ccc; padding:8px;">70‑80</td>
        <td style="border:1px solid #ccc; padding:8px;">Utilises agricultural residues, reduces landfill.</td>
        <td style="border:1px solid #ccc; padding:8px;">Feedstock logistics, emissions from combustion.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>Offshore Wind (Emerging)</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">≈ 0.5 (pilot)</td>
        <td style="border:1px solid #ccc; padding:8px;">35‑45</td>
        <td style="border:1px solid #ccc; padding:8px;">Higher wind speeds, minimal land use.</td>
        <td style="border:1px solid #ccc; padding:8px;">High capital cost, grid integration.</td>
      </tr>
      <tr>
        <td style="border:1px solid #ccc; padding:8px;"><strong>Geothermal (Pilot)</strong></td>
        <td style="border:1px solid #ccc; padding:8px;">< 0.1</td>
        <td style="border:1px solid #ccc; padding:8px;">90‑95</td>
        <td style="border:1px solid #ccc; padding:8px;">Base‑load, low emissions.</td>
        <td style="border:1px solid #ccc; padding:8px;">Limited resource mapping, high drilling cost.</td>
      </tr>
    </tbody>
  </table>

  <h4><strong>5. Green Initiatives Beyond Power Generation</strong></h4>
  <p>India’s climate strategy integrates renewable power with a suite of cross‑sectoral green measures.</p>

  <ul>
    <li><strong>Green Energy Corridors</strong> – A ₹1.5 lakh crore project to upgrade transmission for renewable integration, aiming for a **10 GW** capacity addition by 2025.</li>
    <li><strong>Solar Pumping for Agriculture</strong> – The <strong>Pradhan Mantri Kisan Urja Suraksha evam Utthan (PM‑KUSU)</strong> scheme subsidises solar pumps, targeting **30 %** of irrigation to be solar‑powered by 2030.</li>
    <li><strong>Urban Rooftop Solar</strong> – The <strong>National Rooftop Solar Mission</strong> encourages **>5 GW** rooftop solar in metros by 2025, leveraging net‑metering under the <strong>Solar Energy Act, 2006</strong>.</li>
    <li><strong>Floating Solar (Floating Photovoltaics – FPV)</strong> – Deployed on reservoirs such as [[Brahmaputra]] and [[Hussain Sagar]], FPV reduces water evaporation and improves panel cooling, achieving **≈ 10 %** higher efficiency.</li>
    <li><strong>Electric Mobility</strong> – Under the <strong>Faster Adoption and Manufacturing of Hybrid & Electric Vehicles (FAME‑II)</strong> scheme, incentives of up to **₹1.5 lakh** per EV have been offered, resulting in **~1.5 million** EVs on Indian roads as of 2023.</li>
    <li><strong>Green Hydrogen</strong> – The <strong>National Hydrogen Energy Mission (NHEM)</strong>, launched 2021, aims for **5 GW** of green hydrogen production by 2030, using electrolysis powered by renewable electricity.</li>
    <li><strong>Carbon Capture, Utilisation & Storage (CCUS)</strong> – Pilot projects at [[National Thermal Power Corporation (NTPC)]] facilities target **1 MtCO₂** capture per annum by 2025.</li>
  </ul>

  <h4><strong>6. Financing Mechanisms & Incentive Structures</strong></h4>
  <p>Robust financing is crucial for scaling renewables. India employs a mix of fiscal, regulatory and market‑based tools.</p>

  <ul>
    <li><strong>Viability Gap Funding (VGF)</strong> – Provides up to **30 %** of project cost for high‑risk renewable projects, especially in remote or ecologically sensitive zones.</li>
    <li><strong>Capital Subsidies</strong> – Central and state governments offer **up to 30 %** capital subsidy for rooftop solar installations under the <strong>MNRE (Ministry of New & Renewable Energy)</strong> scheme.</li>
    <li><strong>Renewable Energy Certificates (RECs)</strong> – Market‑based instrument to meet RPO; as of 2023, **~13 million** RECs have been traded.</li>
    <li><strong>Green Bonds</strong> – The Securities and Exchange Board of India (SEBI) approved a framework in 2017; by 2022, Indian green bond issuance crossed **₹50,000 crore**.</li>
    <li><strong>International Climate Funds</strong> – Access to the <strong>Green Climate Fund (GCF)</strong> and the <strong>Adaptation Fund</strong> has enabled projects such as the **Kochi Solar City** (US$ 120 million). </li>
  </ul>

  <h4><strong>7. Environmental & Social Impact Considerations</strong></h4>
  <p>Renewable projects must balance energy goals with ecological stewardship.</p>

  <ul>
    <li><strong>Land Use & Biodiversity</strong> – Large‑scale solar farms can affect grassland ecosystems; mitigation includes <em>dual‑use</em> agrivoltaic models where crops are grown beneath panels.</li>
    <li><strong>Water Consumption</strong> – While solar PV uses negligible water, **concentrated solar power (CSP)** plants require cooling water; dry‑cooling technologies are being promoted to reduce stress on river basins like the [[Ganga]].</li>
    <li><strong>End‑of‑Life Management</strong> – India’s <strong>Extended Producer Responsibility (EPR)</strong> guidelines (2022) mandate recycling of solar panels and wind turbine blades, aiming for **>90 %** waste recovery by 2030.</li>
    <li><strong>Community Participation</strong> – The <strong>Solar Park Scheme</strong> encourages local ownership, offering a **5 %** equity stake to village panchayats, thereby enhancing livelihood benefits.</li>
  </ul>

  <h4><strong>8. Monitoring, Reporting & Verification (MRV) Framework</strong></h4>
  <p>Accurate MRV is vital for tracking progress toward national and international commitments.</p>

  <ul>
    <li><strong>Central Electricity Authority (CEA) – Renewable Energy Database</strong> – Updated quarterly; provides data on capacity, generation, and plant performance.</li>
    <li><strong>National Renewable Energy Laboratory (NREL) Collaboration</strong> – Joint studies on solar irradiance mapping using satellite‑derived <strong>Global Horizontal Irradiance (GHI)</strong> data.</li>
    <li><strong>Carbon Disclosure Project (CDP) India</strong> – Since 2020, over **150** Indian corporations have disclosed renewable procurement and emissions, enhancing transparency.</li>
  </ul>

  <h4><strong>9. Future Outlook & Strategic Priorities (2024‑2030)</strong></h4>
  <ul>
    <li><strong>Achieve 500 GW Renewable Capacity</strong> – The government’s revised target for 2030, comprising **≈ 300 GW solar**, **≈ 150 GW wind**, and **≈ 50 GW hybrid/other**.</li>
    <li><strong>Integration of Energy Storage</strong> – Deployment of **≈ 30 GW** battery storage (Li‑ion and flow batteries) to address intermittency, backed by the <strong>Energy Storage Mission</strong> (2023).</li>
    <li><strong>Hybrid Renewable Systems</strong> – Combining solar‑wind‑storage to improve grid stability; pilot projects in Gujarat and Tamil Nadu have demonstrated **>40 %** reduction in curtailment.</li>
    <li><strong>Decarbonising Industry</strong> – Targeting **50 %** renewable electricity share for heavy industries (steel, cement) by 2030, facilitated through dedicated **Industrial Renewable Purchase Obligations (IRPOs).</strong></li>
    <li><strong>Regional Cooperation</strong> – Leveraging the [[International Solar Alliance]] to export solar technology to African nations, generating **US$ 5 billion** in export revenue by 2030.</li>
  </ul>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>India’s renewable energy target for 2030 is **500 GW**, with solar alone accounting for **≈ 300 GW**.</li>
      <li>The <strong>Renewable Purchase Obligation (RPO)</strong> mandates a **20 %** renewable share for large power consumers as of 2022.</li>
      <li>Under the <strong>International Solar Alliance</strong>, India aims to mobilise **US$ 1 trillion** in solar investments across member countries.</li>
      <li>India’s **Installed Solar Capacity** crossed **70 GW** in 2023, making it the world’s fourth‑largest solar market.</li>
      <li>The <strong>National Clean Energy Fund (NCEF)</strong> was created with an initial corpus of **₹10,000 crore** to fund clean‑energy R&D.</li>
      <li>Floating solar projects reduce water evaporation by **≈ 10 %** and have a **10‑12 %** higher panel efficiency due to cooling effects.</li>
      <li>Green hydrogen production under the <strong>National Hydrogen Energy Mission</strong> targets **5 GW** capacity by 2030, relying on renewable electricity.</li>
      <li>Battery storage capacity slated for **≈ 30 GW** by 2030 will address renewable intermittency and aid grid stability.</li>
    </ul>
  </div>
</div>
`;

EXPANDED_NOTES_DATA["env-pollution"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Pollution Control & Clean India Missions
  </h3>

  <h4>1. Constitutional & Legislative Foundations</h4>
  <p>The Indian environmental regime rests on a blend of constitutional provisions, statutory enactments, and judicial pronouncements. Key constitutional anchors include <strong>Article 48A</strong> (State duty to protect the environment) and <strong>Article 51A(g)</strong> (Fundamental duty to protect the environment). The primary statutes governing pollution control are:</p>
  <ul>
    <li><strong>Air (Prevention and Control of Pollution) Act, 1981</strong> – empowers central and state pollution control boards.</li>
    <li><strong>Water (Prevention and Control of Pollution) Act, 1974</strong> – establishes mechanisms for water quality monitoring.</li>
    <li><strong>Environment (Protection) Act, 1986</strong> – umbrella legislation consolidating earlier acts and enabling the creation of the <strong>National Green Tribunal (NGT)</strong>.</li>
    <li><strong>Forest (Conservation) Act, 1980</strong> and <strong>Wildlife Protection Act, 1972</strong> – regulate land‑use change and biodiversity.</li>
  </ul>
  <p>Seminal judicial interventions such as the <strong>Vellore Citizens’ Welfare Forum v. Union of India (1996)</strong> and the <strong>M.C. Mehta v. Union of India (1998)</strong> cases have expanded the ambit of “environment” to include public health, thereby strengthening enforcement.</p>

  <h4>2. Institutional Architecture for Pollution Control</h4>
  <p>Effective implementation hinges on a multi‑tiered institutional framework:</p>
  <ul>
    <li><strong>Central Pollution Control Board (CPCB)</strong> – formulates national standards, monitors ambient air quality, and coordinates State Pollution Control Boards (SPCBs).</li>
    <li><strong>State Pollution Control Boards (SPCBs)</strong> – enforce compliance at the state level; notable examples include the <strong>Delhi Pollution Control Committee (DPCC)</strong> and the <strong>Maharashtra Pollution Control Board (MPCB)</strong>.</li>
    <li><strong>National Green Tribunal (NGT)</strong> – specialized judicial body for expeditious resolution of environmental disputes.</li>
    <li><strong>Ministry of Environment, Forest and Climate Change (MoEFCC)</strong> – policy‑making apex, oversees implementation of major missions.</li>
  </ul>

  <h4>3. Major “Clean India” Missions – Objectives, Chronology, and Funding</h4>
  <p>Since 2014, the Government of India has launched a series of flagship missions targeting specific pollution vectors. The table below summarises their core features.</p>

  <table style="width:100%; border-collapse:collapse; margin-top:12px;">
    <thead style="background:#2c2c3c; color:#fff;">
      <tr>
        <th style="padding:8px; border:1px solid #555;">Mission</th>
        <th style="padding:8px; border:1px solid #555;">Year Launched</th>
        <th style="padding:8px; border:1px solid #555;">Primary Objective</th>
        <th style="padding:8px; border:1px solid #555;">Budget (₹ bn)</th>
        <th style="padding:8px; border:1px solid #555;">Key Targets (2025‑30)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f9f9f9;">
        <td style="padding:8px; border:1px solid #555;"><strong>[[Swachh Bharat Abhiyan]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">30 Oct 2014</td>
        <td style="padding:8px; border:1px solid #555;">Achieve Open‑Defecation‑Free (ODF) India; solid‑waste management.</td>
        <td style="padding:8px; border:1px solid #555;">≈ ₹ 1,800 bn (cumulative)</td>
        <td style="padding:8px; border:1px solid #555;">> 95 % ODF; 100 % solid‑waste segregation at source.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;"><strong>[[National Clean Air Programme (NCAP)]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">31 Mar 2019</td>
        <td style="padding:8px; border:1px solid #555;">Reduce PM2.5 & PM10 concentrations by 20‑30 % of 2020 levels by 2024‑25.</td>
        <td style="padding:8px; border:1px solid #555;">₹ 1,000 bn (5‑year outlay)</td>
        <td style="padding:8px; border:1px solid #555;">All 74 cities with > 100,000 population covered; 40 % of vehicles shifted to CNG/LPG.</td>
      </tr>
      <tr style="background:#f9f9f9;">
        <td style="padding:8px; border:1px solid #555;"><strong>[[Namami Gange (National Mission for Clean Ganga)]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">24 Jun 2014</td>
        <td style="padding:8px; border:1px solid #555;">Achieve 100 % sewage treatment for all urban stretches of the Ganga by 2025.</td>
        <td style="padding:8px; border:1px solid #555;">₹ 70 bn (first phase)</td>
        <td style="padding:8px; border:1px solid #555;">Treat 2,500 km of river stretch; 5,000 km of drainage network upgraded.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #555;"><strong>[[Zero Budget Natural Farming (ZBNF) Initiative]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">07 Oct 2020</td>
        <td style="padding:8px; border:1px solid #555;">Promote organic farming, cut chemical fertilizer use by 30 %.</td>
        <td style="padding:8px; border:1px solid #555;">₹ 20 bn (pilot)</td>
        <td style="padding:8px; border:1px solid #555;">1 crore farmers adopting ZBNF by 2025.</td>
      </tr>
      <tr style="background:#f9f9f9;">
        <td style="padding:8px; border:1px solid #555;"><strong>[[National Mission for Clean Air (NMCA) – Delhi]]</strong></td>
        <td style="padding:8px; border:1px solid #555;">01 Jan 2020</td>
        <td style="padding:8px; border:1px solid #555;">Target PM2.5 ≤ 30 µg/m³ by 2024.</td>
        <td style="padding:8px; border:1px solid #555;">₹ 30 bn (phase‑I)</td>
        <td style="padding:8px; border:1px solid #555;">CNG conversion of 70 % public buses; installation of 500 µg‑grade air‑purifiers.</td>
      </tr>
    </tbody>
  </table>

  <h4>4. Pollution Control Technologies – Air, Water & Soil</h4>
  <p>Modern mitigation hinges on both end‑of‑pipe and source‑reduction strategies:</p>
  <ul>
    <li><strong>Flue‑Gas Desulfurization (FGD)</strong> – reduces SO₂ emissions from thermal power plants by 95 % (e.g., the <em>Jindal Steel & Power</em> plant in Odisha).</li>
    <li><strong>Selective Catalytic Reduction (SCR)</strong> – curbs NOₓ emissions; widely adopted in the <em>Mahindra & Mahindra</em> automotive assembly lines.</li>
    <li><strong>Electro‑coagulation & Membrane Filtration</strong> – treat industrial effluents, especially from textile clusters in Tirupur.</li>
    <li><strong>Bioremediation</strong> – use of <em>Pseudomonas putida</em> and <em>Rhizobium</em> spp. for degradation of petroleum hydrocarbons in contaminated soils of the <strong>Gurugram</strong> belt.</li>
    <li><strong>Constructed Wetlands</strong> – natural treatment systems for municipal sewage; pilot projects in <strong>Coimbatore</strong> have achieved COD removal > 80 %.</li>
  </ul>

  <h4>5. Renewable Energy Integration with Pollution Control</h4>
  <p>Renewables serve a dual purpose: they reduce emissions and diversify the energy mix, aligning with India’s <strong>National Solar Mission</strong> (target 100 GW solar by 2022) and <strong>Wind Energy Mission</strong> (target 60 GW by 2022). Key linkages include:</p>
  <ul>
    <li><strong>Solar‑powered water‑treatment plants</strong> – e.g., the <strong>Karnataka Water Supply Board</strong> installed 5 MW PV systems to run reverse‑osmosis units, slashing grid‑related emissions by ~ 3 %.</li>
    <li><strong>Hybrid wind‑solar‑diesel microgrids</strong> in remote Himalayan villages, cutting reliance on diesel generators by 70 % and reducing local particulate matter.</li>
    <li><strong>Green hydrogen</strong> – pilot projects at the <strong>National Hydrogen Energy Roadmap (NHER)</strong> aim to replace LPG for cooking in 10 % of rural households by 2030.</li>
  </ul>

  <h4>6. Inter‑governmental & International Commitments</h4>
  <p>India’s domestic policies are synchronized with global accords:</p>
  <ul>
    <li><strong>[[Paris Agreement]] (2015)</strong> – India pledged to reduce CO₂ intensity by 33‑35 % from 2005 levels by 2030.</li>
    <li><strong>[[UNFCCC]]</strong> – annual Nationally Determined Contributions (NDCs) submitted; 2022 NDC includes a 40 % renewable electricity share by 2030.</li>
    <li><strong>[[Bonn Climate Change Conference 2021]]</strong> – reaffirmed commitment to a <em>net‑zero</em> carbon economy by 2070.</li>
    <li><strong>[[Sikkim State Climate Action Plan]]</strong> – first Indian state to adopt a climate‑resilient development framework, targeting 100 % organic farming by 2025.</li>
  </ul>

  <h4>7. Challenges & Critical Evaluation</h4>
  <p>Despite the laudable policy thrust, several systemic bottlenecks persist:</p>
  <ul>
    <li><strong>Implementation Gap</strong> – <em>World Bank’s 2023 Air Quality Report</em> indicates only 42 % of NCAP‑targeted actions have been fully operational.</li>
    <li><strong>Data Deficiency</strong> – Real‑time ambient monitoring stations are limited to 1,200 across the country, insufficient for a population of 1.4 bn.</li>
    <li><strong>Financial Constraints</strong> – Many SPCBs suffer from budgetary shortfalls, leading to reliance on state‑specific cess that are often delayed.</li>
    <li><strong>Behavioural Inertia</strong> – Public adherence to waste segregation under Swachh Bharat remains below 30 % in Tier‑III cities.</li>
  </ul>
  <p>To bridge these gaps, policy scholars recommend:</p>
  <ol>
    <li>Embedding <strong>environmental externalities</strong> in the cost of production via a <em>polluter‑pays</em> principle.</li>
    <li>Scaling up <strong>citizen science</strong> platforms (e.g., <em>AirNow India</em>) for crowdsourced pollution data.</li>
    <li>Strengthening <strong>public‑private partnerships (PPP)</strong> for waste‑to‑energy projects, leveraging the <strong>Renewable Energy Certificate (REC)</strong> market.</li>
  </ol>

  <h4>8. Future Outlook – Towards a “Zero‑Pollution” India</h4>
  <p>India’s trajectory envisions an integrated approach where <strong>circular economy</strong> principles dovetail with renewable energy transition. The envisaged <strong>National Clean Water Programme (NCWP)</strong> (draft 2025) aims to achieve 100 % safe drinking water access by 2030, simultaneously curtailing industrial effluent discharge by 50 %. The forthcoming <strong>National Climate Resilience Fund (NCRF)</strong>, slated for 2026, will allocate ₹ 15 bn for climate‑adaptation infrastructure, including flood‑resilient sewage networks in the <strong>Brahmaputra</strong> basin.</p>
  <p>In summary, the synergy between robust legislative scaffolding, mission‑driven clean‑India initiatives, and cutting‑edge pollution‑control technologies forms the backbone of India’s quest for sustainable development. Continuous monitoring, adaptive governance, and active citizen participation remain the decisive levers for translating policy into measurable environmental improvement.</p>

  <div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid var(--accent); padding: 12px 16px; margin-top: 20px; border-radius: 0 6px 6px 0;">
    <strong style="color: var(--accent);">⚡ High-Yield Exam Facts</strong>
    <ul style="margin-top: 8px;">
      <li>India’s <strong>Air (Prevention and Control of Pollution) Act</strong> was enacted in <strong>1981</strong>, while the <strong>Water (Prevention and Control of Pollution) Act</strong> dates back to <strong>1974</strong>.</li>
      <li>The <strong>National Clean Air Programme (NCAP)</strong> targets a <strong>20‑30 % reduction in PM2.5</strong> levels in 102 cities by 2024‑25, using 2019 as the base year.</li>
      <li><strong>Swachh Bharat Abhiyan</strong> declared India ODF on <strong>2 Oct 2019</strong>, achieving > 95 % coverage nationwide.</li>
      <li>Under <strong>Namami Gange</strong>, the target is to treat **100 %** of sewage generated in the Ganga basin by **2025**.</li>
      <li>India pledged at the <strong>Paris Agreement</strong> to cut CO₂ intensity by **33‑35 %** from 2005 levels by **2030**.</li>
      <li>The <strong>National Green Tribunal (NGT)</strong> was constituted in **2009** under the <strong>National Green Tribunal Act</strong>.</li>
      <li>Solar capacity in India crossed **100 GW** in **2022**, surpassing the original target of the <strong>National Solar Mission</strong>.</li>
      <li>Delhi’s <strong>National Mission for Clean Air</strong> aims for a PM2.5 concentration of **≤ 30 µg/m³** by **2024**.</li>
    </ul>
  </div>
</div>
`;

