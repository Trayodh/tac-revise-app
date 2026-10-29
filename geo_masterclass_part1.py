# geo_masterclass_part1.py - Deep Textbook Masterclasses for Chapters 1-14

GEO_MASTERCLASS_PART1 = {
    "universe-solar-system": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Foundational Principles & Astronomical Framework</h3>
  <p>The study of the universe (<strong>Cosmology</strong>) and celestial mechanics forms the bedrock of physical geography and navigation. The observable universe spans an estimated diameter of <strong>93 billion light-years</strong>, containing upwards of 2 trillion galaxies.</p>
  
  <h4>Origin of the Universe: Cosmological Models</h4>
  <ul>
    <li><strong>The Big Bang Theory (Standard Model):</strong> Formulated primarily by Georges Lemaître (1927) and Edwin Hubble (1929). Postulates that approximately <strong>13.77 ± 0.04 billion years ago</strong>, all matter, spacetime, and fundamental forces were condensed into an infinitely dense, hot gravitational singularity. Rapid cosmic inflation occurred within $10^{-36}$ seconds, expanding space faster than the speed of light.
      <ul>
        <li><em>Primary Evidences:</em>
          <ol>
            <li><strong>Hubble's Law of Cosmic Expansion ($v = H_0 \cdot d$):</strong> Recession velocity of distant galaxies is directly proportional to their distance, proving space itself is stretching (Doppler redshift of spectral absorption lines).</li>
            <li><strong>Cosmic Microwave Background Radiation (CMBR):</strong> Discovered in 1965 by Arno Penzias and Robert Wilson. A nearly isotropic 2.725 K thermal blackbody radiation permeating all directions, representing the relic radiation from photon decoupling ~380,000 years after the Big Bang (the Recombination Era).</li>
            <li><strong>Primordial Nucleosynthesis:</strong> The universal mass abundance ratio of Hydrogen (~74%), Helium (~24%), and trace Lithium/Deuterium exactly matches theoretical thermodynamic predictions of early cosmic nucleosynthesis.</li>
          </ol>
        </li>
      </ul>
    </li>
    <li><strong>Alternative Cosmological Theories:</strong>
      <ul>
        <li><strong>Steady State Theory:</strong> Proposed by Hermann Bondi, Thomas Gold, and Fred Hoyle (1948). Suggested the universe has no beginning or end, with continuous creation of matter to maintain constant average density as space expands. Disproven by CMBR discovery and quasar distribution.</li>
        <li><strong>Pulsating / Oscillating Universe Theory:</strong> Postulates alternating cycles of expansion (Big Bang) and gravitational collapse (Big Crunch).</li>
      </ul>
    </li>
  </ul>

  <h4>Stellar Evolution & Galactic Hierarchy</h4>
  <p>Stars are self-luminous spheres of high-temperature plasma held together by hydrostatic equilibrium—a balance between inward gravitational collapse and outward thermonuclear fusion radiation pressure ($4\,^1\text{H} \rightarrow \,^4\text{He} + 2e^+ + 2\nu_e + 26.7\,\text{MeV}$ via the proton-proton chain or CNO cycle).</p>
  <ul>
    <li><strong>Chandrasekhar Limit ($1.44\,M_\odot$):</strong> Discovered by Indian-American Nobel laureate Subrahmanyan Chandrasekhar. Defines the maximum non-rotating mass supported against gravitational collapse by electron degeneracy pressure.
      <ul>
        <li><em>Initial Stellar Mass $< 8\,M_\odot$:</em> Sheds outer envelopes as Planetary Nebula; core collapses into a <strong>White Dwarf</strong> (supported by electron degeneracy; radius $\approx$ Earth, density $\sim 10^9\,\text{kg/m}^3$).</li>
        <li><em>Initial Stellar Mass $8 - 25\,M_\odot$:</em> Undergoes Core-Collapse Supernova (Type II); core collapses beyond electron degeneracy into a <strong>Neutron Star / Pulsar</strong> (supported by neutron degeneracy pressure; radius $\sim 10-15\,\text{km}$, density $\sim 10^{17}\,\text{kg/m}^3$).</li>
        <li><em>Initial Stellar Mass $> 25\,M_\odot$:</em> Overcomes Tolman-Oppenheimer-Volkoff limit ($\sim 2.1-3\,M_\odot$); collapses past event horizon into a <strong>Stellar-mass Black Hole</strong> with a gravitational singularity.</li>
      </ul>
    </li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Planetary Architecture & Comparative Metrics</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Planet</th>
          <th>Classification</th>
          <th>Orbital Period</th>
          <th>Rotation Period & Sense</th>
          <th>Atmospheric Composition</th>
          <th>Natural Moons</th>
          <th>Key Defence Exam Markers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mercury</strong></td>
          <td>Terrestrial (Inner)</td>
          <td>87.97 days</td>
          <td>58.65 days (Direct)</td>
          <td>Negligible (Exosphere: Na, He)</td>
          <td>0</td>
          <td>Smallest planet; highest diurnal temp range (430°C day to -180°C night); no atmosphere/greenhouse effect.</td>
        </tr>
        <tr>
          <td><strong>Venus</strong></td>
          <td>Terrestrial (Inner)</td>
          <td>224.7 days</td>
          <td><strong>243.0 days (Retrograde - Clockwise)</strong></td>
          <td>96.5% CO₂, 3.5% N₂</td>
          <td>0</td>
          <td>Hottest planet (~465°C) due to runaway greenhouse effect; thick H₂SO₄ clouds; Morning & Evening Star; Earth's Twin in size/mass. Day longer than year!</td>
        </tr>
        <tr>
          <td><strong>Earth</strong></td>
          <td>Terrestrial (Inner)</td>
          <td>365.25 days</td>
          <td>23h 56m 04s (Sidereal)</td>
          <td>78.08% N₂, 20.95% O₂, 0.93% Ar, 0.04% CO₂</td>
          <td>1 (Moon / Luna)</td>
          <td>Only planet with water in triple point; protective magnetosphere; densest planet in Solar System ($5.515\,\text{g/cm}^3$).</td>
        </tr>
        <tr>
          <td><strong>Mars</strong></td>
          <td>Terrestrial (Inner)</td>
          <td>686.98 days</td>
          <td>24h 37m 22s (Direct)</td>
          <td>95% CO₂, 2.6% N₂, 1.9% Ar</td>
          <td>2 (Phobos, Deimos)</td>
          <td>Red Planet (Fe₂O₃ in regolith); Olympus Mons (largest shield volcano, 22 km high); Valles Marineris canyon; polar dry-ice caps.</td>
        </tr>
        <tr>
          <td><strong>Jupiter</strong></td>
          <td>Jovian (Gas Giant)</td>
          <td>11.86 years</td>
          <td><strong>9h 55m (Fastest rotation)</strong></td>
          <td>89% H₂, 10% He, traces CH₄, NH₃</td>
          <td>95 (Ganymede, Callisto, Io, Europa)</td>
          <td>Largest planet (mass = 2.5x all other planets combined); Great Red Spot (anticyclone); Ganymede is larger than Mercury; Io has active sulfur volcanism.</td>
        </tr>
        <tr>
          <td><strong>Saturn</strong></td>
          <td>Jovian (Gas Giant)</td>
          <td>29.45 years</td>
          <td>10h 33m (Direct)</td>
          <td>96% H₂, 3% He</td>
          <td>146 (Titan, Enceladus, Mimas)</td>
          <td>Lowest density ($0.687\,\text{g/cm}^3$, would float on water!); Spectacular ring system of water ice; Titan has thick N₂ atmosphere and methane lakes.</td>
        </tr>
        <tr>
          <td><strong>Uranus</strong></td>
          <td>Jovian (Ice Giant)</td>
          <td>84.02 years</td>
          <td><strong>17h 14m (Retrograde - Axial tilt 97.8°)</strong></td>
          <td>83% H₂, 15% He, 2.3% CH₄</td>
          <td>28 (Titania, Oberon, Miranda)</td>
          <td>Rolling planet (rotates on its side); Pale cyan hue from methane absorbing red light; Coldest planetary atmosphere (-224°C).</td>
        </tr>
        <tr>
          <td><strong>Neptune</strong></td>
          <td>Jovian (Ice Giant)</td>
          <td>164.8 years</td>
          <td>16h 06m (Direct)</td>
          <td>80% H₂, 19% He, 1.5% CH₄</td>
          <td>16 (Triton, Proteus, Nereid)</td>
          <td>Deep azure blue; Highest wind speeds in solar system (>2,100 km/h); Great Dark Spot; Triton has retrograde orbit and nitrogen geysers.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-lightbulb" style="color: var(--accent);"></i> 3. Strategic Speed Mnemonics</h3>
  <div class="mnemonic-box">
    <h4><i class="fa-solid fa-bolt"></i> Mnemonic 1: Retrograde Rotators (Clockwise Spin)</h4>
    <p><strong>"U-V Rays spin backwards"</strong></p>
    <ul>
      <li><strong>U</strong>: <strong>U</strong>ranus (Axial tilt 97.8°, rotates east-to-west)</li>
      <li><strong>V</strong>: <strong>V</strong>enus (Axial tilt 177.3°, rotates east-to-west; Sun rises in the West and sets in the East!)</li>
      <li><em>All other 6 planets rotate Prograde (Counter-clockwise / West-to-East).</em></li>
    </ul>
  </div>

  <div class="mnemonic-box" style="margin-top: 14px;">
    <h4><i class="fa-solid fa-bolt"></i> Mnemonic 2: Planetary Size Ordering (Largest to Smallest)</h4>
    <p><strong>"Just Sit Under Nature, Eat More Morning Vitamins"</strong></p>
    <p><strong>J</strong>upiter &gt; <strong>S</strong>aturn &gt; <strong>U</strong>ranus &gt; <strong>N</strong>eptune &gt; <strong>E</strong>arth &gt; <strong>V</strong>enus &gt; <strong>M</strong>ars &gt; <strong>M</strong>ercury</p>
  </div>

  <h3><i class="fa-solid fa-triangle-exclamation" style="color: var(--warning);"></i> 4. UPSC & Defence Examiner Traps</h3>
  <div class="trap-box">
    <h4><i class="fa-solid fa-skull-crossbones"></i> Critical Trap Alert: Mercury vs Venus Temperature</h4>
    <p><strong>The Trap:</strong> Candidates instinctively choose Mercury as the hottest planet because it is closest to the Sun (57.9 million km).</p>
    <p><strong>The Reality:</strong> <strong>Venus is the hottest planet in the Solar System (~465°C / 738 K)</strong>. Mercury has virtually no atmosphere to trap heat, resulting in rapid cooling of its dark side (-180°C). Venus possesses an ultra-dense atmosphere of 96.5% CO₂ at 92 atmospheres of surface pressure, causing a runaway greenhouse effect that traps infrared radiation continuously across both day and night sides.</p>
  </div>

  <div class="trap-box" style="margin-top: 14px;">
    <h4><i class="fa-solid fa-skull-crossbones"></i> Critical Trap Alert: Light Year & Astronomical Units</h4>
    <p><strong>The Trap:</strong> Questions asking whether a "Light Year" is a unit of time.</p>
    <p><strong>The Truth:</strong> Light Year is strictly a <strong>unit of astronomical distance</strong> ($9.461 \times 10^{12}\,\text{km} \approx 9.46 \times 10^{15}\,\text{m}$). Parsec (Parallactic Second) is even larger ($1\,\text{parsec} = 3.26\,\text{light years} = 3.0857 \times 10^{16}\,\text{m}$). 1 Astronomical Unit (AU) is the mean Earth-Sun distance ($\approx 149.6 \times 10^6\,\text{km}$).</p>
  </div>

  <h3><i class="fa-solid fa-clipboard-check" style="color: var(--accent);"></i> 5. Solved Past-Year Walkthroughs (NDA/CDS 2021–2025)</h3>
  <div class="pyq-box">
    <h4><i class="fa-solid fa-file-lines"></i> Question 1 (CDS 2023 - I)</h4>
    <p><em>Which one of the following statements regarding the Solar System is NOT correct?</em></p>
    <ul>
      <li>(A) Venus has a retrograde rotation.</li>
      <li>(B) Saturn's density is less than that of water.</li>
      <li>(C) Ganymede is the largest satellite in the Solar System.</li>
      <li>(D) Mercury is the hottest planet in the Solar System.</li>
    </ul>
    <p><strong>Answer: (D)</strong></p>
    <p><strong>Step-by-Step Rationale:</strong> Statement (D) is incorrect because Venus is the hottest planet due to runaway greenhouse effect ($465^\circ\text{C}$). Statement (A) is correct (Venus rotates clockwise). Statement (B) is correct (density of Saturn is $0.687\,\text{g/cm}^3 < 1.0\,\text{g/cm}^3$). Statement (C) is correct (Ganymede diameter is 5,268 km, larger than Mercury's 4,879 km).</p>
  </div>

  <div class="pyq-box" style="margin-top: 14px;">
    <h4><i class="fa-solid fa-file-lines"></i> Question 2 (NDA 2022 - II)</h4>
    <p><em>The Chandrasekhar Limit is related to:</em></p>
    <ul>
      <li>(A) Black hole event horizon radius</li>
      <li>(B) Maximum mass of a stable white dwarf star</li>
      <li>(C) Maximum rotational speed of a neutron star</li>
      <li>(D) Nuclear fusion threshold in brown dwarfs</li>
    </ul>
    <p><strong>Answer: (B)</strong></p>
    <p><strong>Step-by-Step Rationale:</strong> The Chandrasekhar limit of $1.44\,M_\odot$ represents the maximum mass a white dwarf can possess while supported by electron degeneracy pressure. Exceeding this limit leads to supernova collapse into a neutron star or black hole.</p>
  </div>
</div>
""",

    "geo-latitudes-longitudes-time": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Mathematical Geography: Coordinate Grids & Chronometry</h3>
  <p>Earth's oblate spheroidal shape (<strong>Geoid</strong>, equatorial radius $a = 6,378.137\,\text{km}$, polar radius $b = 6,356.752\,\text{km}$, flattening $f \approx 1/298.257$) requires an angular coordinate system to reference spatial locations and determine civil time.</p>

  <h4>Parallels of Latitude ($\phi$)</h4>
  <ul>
    <li>Angular distance of a point north or south of the Equator ($0^\circ$), measured from the center of the Earth.</li>
    <li>Latitudes are parallel circles that decrease in circumference from the Equator ($2\pi R \approx 40,075\,\text{km}$) to the poles ($0\,\text{km}$).</li>
    <li>$1^\circ$ of latitude corresponds to an average linear distance of approximately <strong>111 km</strong> ($110.56\,\text{km}$ at the equator to $111.69\,\text{km}$ at the poles due to polar flattening).</li>
    <li><strong>Critical Latitudes:</strong>
      <ul>
        <li><strong>Equator ($0^\circ$):</strong> The only great circle among parallels; day and night are perpetually 12 hours throughout the year.</li>
        <li><strong>Tropic of Cancer ($23^\circ 26' 11.4''\,\text{N} \approx 23.5^\circ\,\text{N}$):</strong> Northernmost parallel where Sun is directly overhead at noon on Summer Solstice (June 21). Crosses 8 Indian states.</li>
        <li><strong>Tropic of Capricorn ($23.5^\circ\,\text{S}$):</strong> Southernmost overhead sun position on Winter Solstice (December 22).</li>
        <li><strong>Arctic Circle ($66.5^\circ\,\text{N}$) & Antarctic Circle ($66.5^\circ\,\text{S}$):</strong> Boundary of 24-hour midnight sun / polar night during respective solstices.</li>
      </ul>
    </li>
  </ul>

  <h4>Meridians of Longitude ($\lambda$)</h4>
  <ul>
    <li>Angular distance east or west of the Prime Meridian ($0^\circ$), which passes through the Royal Astronomical Observatory at Greenwich, London (established by international agreement in 1884).</li>
    <li>All meridians are semi-great circles that converge at the North and South Poles. Distance between meridians is maximum at the Equator (~111.32 km) and converges to <strong>0 km at the poles</strong> ($\text{Distance} = 111.32 \times \cos \phi\,\text{km}$).</li>
    <li><strong>Time Arithmetic & Rotation Mechanics:</strong>
      <ul>
        <li>Earth rotates $360^\circ$ on its axis in 24 hours (mean solar day).</li>
        <li>$360^\circ / 24\,\text{hours} = 15^\circ\,\text{per hour}$.</li>
        <li>$1^\circ\,\text{of longitude} = 4\,\text{minutes of time}$ ($60\,\text{min} / 15^\circ$).</li>
        <li>$1'\,\text{(arcminute)} = 4\,\text{seconds of time}$.</li>
        <li><strong>Direction Rule:</strong> Places East of a meridian are <strong>ahead in time (Gain Time)</strong>; places West are <strong>behind in time (Lose Time)</strong>. Mnemonic: <em>"E.G.A. - East Gain Add; W.L.S. - West Lose Subtract."</em></li>
      </ul>
    </li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Chronometric Systems & Indian Standard Time</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Standard Measure</th>
          <th>Reference Meridian</th>
          <th>Offset from UTC/GMT</th>
          <th>Geographical Trajectory / Passage</th>
          <th>Key Examination Relevance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Prime Meridian</strong></td>
          <td>$0^\circ$ Longitude</td>
          <td>UTC +0:00</td>
          <td>Passes through UK, France, Spain, Algeria, Mali, Burkina Faso, Togo, Ghana, Antarctica.</td>
          <td>Intersection with Equator ($0^\circ, 0^\circ$) is in the <strong>Gulf of Guinea (Atlantic Ocean)</strong>.</td>
        </tr>
        <tr>
          <td><strong>International Date Line (IDL)</strong></td>
          <td>$\approx 180^\circ$ Longitude</td>
          <td>UTC ±12:00</td>
          <td>Deviates through Bering Strait, Aleutian Islands, Fiji, Tonga, Kiribati to avoid splitting island nations into two dates.</td>
          <td>Crossing from <strong>West to East (Asia to Americas) = GAIN A DAY</strong> (repeat date). Crossing East to West = LOSE A DAY.</td>
        </tr>
        <tr>
          <td><strong>Indian Standard Time (IST)</strong></td>
          <td><strong>$82^\circ 30'\,\text{E}$ ($82.5^\circ\,\text{E}$)</strong></td>
          <td><strong>UTC +5:30</strong> ($82.5 \times 4\,\text{min} = 330\,\text{min}$)</td>
          <td>Passes through Mirzapur / Naini near Prayagraj (UP), MP, Chhattisgarh, Odisha, Andhra Pradesh (5 states).</td>
          <td>India does NOT observe Daylight Saving Time (DST). Longitudinal span of India is ~30° (68°7'E to 97°25'E), causing a ~2-hour local time lag between Kibithu (Arunachal) and Guhar Moti (Gujarat).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-lightbulb" style="color: var(--accent);"></i> 3. Strategic Speed Mnemonics</h3>
  <div class="mnemonic-box">
    <h4><i class="fa-solid fa-bolt"></i> Mnemonic: 5 Indian States traversed by IST ($82.5^\circ\,\text{E}$)</h4>
    <p><strong>"MOUCA" or "CHOU-MA"</strong></p>
    <ul>
      <li><strong>M</strong>: <strong>M</strong>adhya Pradesh</li>
      <li><strong>O</strong>: <strong>O</strong>disha</li>
      <li><strong>U</strong>: <strong>U</strong>ttar Pradesh (Mirzapur/Prayagraj origin)</li>
      <li><strong>C</strong>: <strong>C</strong>hhattisgarh (Where Tropic of Cancer and IST intersect at Koriya district!)</li>
      <li><strong>A</strong>: <strong>A</strong>ndhra Pradesh</li>
    </ul>
  </div>

  <h3><i class="fa-solid fa-triangle-exclamation" style="color: var(--warning);"></i> 4. UPSC & Defence Examiner Traps</h3>
  <div class="trap-box">
    <h4><i class="fa-solid fa-skull-crossbones"></i> Critical Trap Alert: International Date Line Day Gain vs Loss</h4>
    <p><strong>The Trap:</strong> Crossing the IDL from Japan/Asia (Eastern Hemisphere) to California/USA (Western Hemisphere).</p>
    <p><strong>The Confusion:</strong> Because travel is eastward, candidates think you add hours and advance date.</p>
    <p><strong>The Mathematical Reality:</strong> The Americas are chronologically behind Asia. When you fly across the IDL eastward, you enter yesterday's date—meaning you <strong>GAIN A DAY</strong> (you get to live the same calendar date twice). Conversely, traveling West from Americas to Asia causes you to <strong>LOSE A DAY</strong> (jump forward 24 hours instantly).</p>
  </div>

  <h3><i class="fa-solid fa-clipboard-check" style="color: var(--accent);"></i> 5. Solved Past-Year Walkthroughs</h3>
  <div class="pyq-box">
    <h4><i class="fa-solid fa-file-lines"></i> Question (CDS 2024 - I)</h4>
    <p><em>If it is 12:00 Noon at Greenwich ($0^\circ$), what will be the local time at a place situated at $45^\circ\,\text{E}$ longitude and another at $75^\circ\,\text{W}$ longitude respectively?</em></p>
    <ul>
      <li>(A) 3:00 PM and 7:00 AM</li>
      <li>(B) 9:00 AM and 5:00 PM</li>
      <li>(C) 3:00 PM and 5:00 AM</li>
      <li>(D) 1:00 PM and 9:00 AM</li>
    </ul>
    <p><strong>Answer: (A)</strong></p>
    <p><strong>Step-by-Step Rationale:</strong><br>
    1. For $45^\circ\,\text{E}$: East of Greenwich $\rightarrow$ Ahead in time. Difference $= 45 \times 4\,\text{min} = 180\,\text{min} = 3\,\text{hours}$. Local time $= 12:00 + 3\,\text{hrs} = 15:00 = \mathbf{3:00\,\text{PM}}$.<br>
    2. For $75^\circ\,\text{W}$: West of Greenwich $\rightarrow$ Behind in time. Difference $= 75 \times 4\,\text{min} = 300\,\text{min} = 5\,\text{hours}$. Local time $= 12:00 - 5\,\text{hrs} = \mathbf{7:00\,\text{AM}}$.</p>
  </div>
</div>
""",

    "geo-earth-interior": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Deep Geophysics: Seismology & Earth's Internal Shells</h3>
  <p>Earth's interior cannot be directly probed; the deepest borehole (Kola Superdeep Borehole, Russia) reaches only <strong>12,262 meters (12.26 km)</strong>, barely 0.2% of Earth's mean radius ($R = 6,371\,\text{km}$). Our model of Earth's stratified layers relies on <strong>indirect geophysical methods</strong>, primarily seismology (body wave propagation, reflection, and refraction).</p>

  <h4>Direct vs Indirect Geophysical Sources</h4>
  <ul>
    <li><strong>Direct Sources:</strong> Surface rock samples, deep gold/diamond mines (e.g. Mponeng gold mine, South Africa ~4 km deep), deep drilling projects, and volcanic ejecta (xenoliths brought from mantle depths ~100–200 km).</li>
    <li><strong>Indirect Sources:</strong>
      <ul>
        <li><strong>Seismic Wave Analysis:</strong> Velocity ($v$) is proportional to elasticity and density: $v_P = \sqrt{\frac{K + \frac{4}{3}\mu}{\rho}}$ and $v_S = \sqrt{\frac{\mu}{\rho}}$, where $K$ is bulk modulus, $\mu$ is shear modulus, and $\rho$ is density.</li>
        <li><strong>Meteorite Composition:</strong> Iron-nickel and chondritic stony meteorites represent remnants of differentiated planetesimals formed contemporaneously with Earth.</li>
        <li><strong>Gravimetry & Isostasy:</strong> Gravity anomalies reveal crustal density variations ($g$ increases from equator $9.78\,\text{m/s}^2$ to poles $9.83\,\text{m/s}^2$ due to polar flattening and rotational centrifugal force).</li>
        <li><strong>Geomagnetism:</strong> Convection of liquid iron-nickel in the outer core generating the geomagnetic field via the self-exciting geodynamo effect.</li>
      </ul>
    </li>
  </ul>

  <h4>Seismic Wave Behavior & Shadow Zones</h4>
  <ul>
    <li><strong>P-Waves (Primary / Compressional):</strong> Longitudinal waves where particle motion is parallel to wave propagation direction. Travel through <strong>Solids, Liquids, and Gases</strong>. Highest velocity ($6-13\,\text{km/s}$).</li>
    <li><strong>S-Waves (Secondary / Shear / Transverse):</strong> Particle motion is perpendicular to wave propagation. <strong>CANNOT travel through liquids or gases</strong> because fluids have zero shear modulus ($\mu = 0 \implies v_S = 0$). Velocity $\approx 0.6 \times v_P$.</li>
    <li><strong>P-Wave Shadow Zone ($105^\circ - 145^\circ$):</strong> Refraction of P-waves entering the liquid outer core creates a band around the globe ($105^\circ$ to $145^\circ$ from the earthquake epicentre) where direct P-waves are not recorded.</li>
    <li><strong>S-Wave Shadow Zone ($105^\circ - 180^\circ$):</strong> Because the liquid outer core blocks S-waves entirely, direct S-waves are completely absent everywhere beyond $105^\circ$ from the epicentre (spanning over 40% of Earth's surface!). This proved conclusively that the outer core is in a liquid state.</li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Concentric Shells & Seismic Discontinuities</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Concentric Layer</th>
          <th>Depth Range</th>
          <th>Mean Density</th>
          <th>Dominant Mineralogy</th>
          <th>Physical State & Dynamics</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Continental Crust</strong></td>
          <td>0 – 35 km (up to 70 km under Himalayas)</td>
          <td>$2.7\,\text{g/cm}^3$</td>
          <td><strong>SIAL</strong> (Silica + Aluminium), Granitic</td>
          <td>Brittle solid; lighter; floats higher due to isostatic compensation.</td>
        </tr>
        <tr>
          <td><strong>Oceanic Crust</strong></td>
          <td>5 – 10 km</td>
          <td>$3.0\,\text{g/cm}^3$</td>
          <td><strong>SIMA</strong> (Silica + Magnesium), Basaltic</td>
          <td>Denser solid; younger (&lt;200 million years due to subduction recycling).</td>
        </tr>
        <tr>
          <td><strong>Upper Mantle (Asthenosphere)</strong></td>
          <td>35 – 700 km (Asthenosphere: 100–400 km)</td>
          <td>$3.4 - 4.4\,\text{g/cm}^3$</td>
          <td>Peridotite (Olivine + Pyroxene)</td>
          <td>Semi-molten, plastic, ductile; thermal convection currents drive lithospheric plate motions.</td>
        </tr>
        <tr>
          <td><strong>Lower Mantle (Mesosphere)</strong></td>
          <td>700 – 2,900 km</td>
          <td>$4.4 - 5.5\,\text{g/cm}^3$</td>
          <td>Bridgmanite + Ferropericlase (dense silicates)</td>
          <td>Solid due to immense confining lithostatic pressure despite temperatures &gt;3,000°C.</td>
        </tr>
        <tr>
          <td><strong>Outer Core</strong></td>
          <td>2,900 – 5,150 km</td>
          <td>$9.9 - 12.2\,\text{g/cm}^3$</td>
          <td><strong>NIFE</strong> (85% Fe + 5% Ni + 10% S, O, Si)</td>
          <td><strong>Liquid</strong>; convective churning drives geodynamo generating Earth's magnetic dipole.</td>
        </tr>
        <tr>
          <td><strong>Inner Core</strong></td>
          <td>5,150 – 6,371 km</td>
          <td>$12.8 - 13.1\,\text{g/cm}^3$</td>
          <td>Solid metallic Iron-Nickel alloy crystalline</td>
          <td><strong>Solid</strong>; temperature ~5,500°C (as hot as solar surface), solid due to pressure ~3.6 million atmospheres.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-lightbulb" style="color: var(--accent);"></i> 3. Strategic Speed Mnemonics: The 5 Discontinuities</h3>
  <div class="mnemonic-box">
    <h4><i class="fa-solid fa-bolt"></i> Mnemonic: "Can Men Really Get Ladies?" (Top to Bottom)</h4>
    <p><strong>C - M - R - G - L</strong></p>
    <ul>
      <li><strong>C</strong>: <strong>Conrad</strong> Discontinuity (Between Upper Continental SIAL & Lower Oceanic SIMA Crust)</li>
      <li><strong>M</strong>: <strong>Mohorovicic (Moho)</strong> Discontinuity (Between Crust and Mantle - sharp jump in P-velocity from 6 to 8 km/s)</li>
      <li><strong>R</strong>: <strong>Repetti</strong> Discontinuity (Between Upper Mantle and Lower Mantle)</li>
      <li><strong>G</strong>: <strong>Gutenberg</strong> Discontinuity (Between Lower Mantle and Liquid Outer Core at 2,900 km - S-waves disappear!)</li>
      <li><strong>L</strong>: <strong>Lehmann</strong> Discontinuity (Between Liquid Outer Core and Solid Inner Core at 5,150 km)</li>
    </ul>
  </div>

  <h3><i class="fa-solid fa-triangle-exclamation" style="color: var(--warning);"></i> 4. UPSC & Defence Examiner Traps</h3>
  <div class="trap-box">
    <h4><i class="fa-solid fa-skull-crossbones"></i> Critical Trap Alert: Volumetric vs Mass Dominance</h4>
    <p><strong>The Trap:</strong> Which layer constitutes the maximum volume and mass of the Earth?</p>
    <p><strong>The Reality:</strong>
      <ul>
        <li><strong>Mantle</strong> constitutes <strong>84% of Earth's volume</strong> and <strong>67% of total mass</strong>.</li>
        <li><strong>Core</strong> constitutes <strong>15% of Earth's volume</strong> and <strong>32.5% of total mass</strong> (due to high metallic density).</li>
        <li><strong>Crust</strong> constitutes barely <strong>1% of Earth's volume</strong> and <strong>0.5% of mass</strong>!</li>
      </ul>
    </p>
  </div>

  <h3><i class="fa-solid fa-clipboard-check" style="color: var(--accent);"></i> 5. Solved Past-Year Walkthroughs</h3>
  <div class="pyq-box">
    <h4><i class="fa-solid fa-file-lines"></i> Question (CDS 2022 - II)</h4>
    <p><em>Which one of the following seismic discontinuities separates the Earth's mantle from the outer core?</em></p>
    <ul>
      <li>(A) Mohorovicic discontinuity</li>
      <li>(B) Gutenberg discontinuity</li>
      <li>(C) Conrad discontinuity</li>
      <li>(D) Lehmann discontinuity</li>
    </ul>
    <p><strong>Answer: (B)</strong></p>
    <p><strong>Step-by-Step Rationale:</strong> Using the C-M-R-G-L sequence: Conrad (crustal), Moho (crust-mantle), Repetti (upper-lower mantle), Gutenberg (mantle-core at 2,900 km), Lehmann (outer-inner core at 5,150 km). Hence, Gutenberg discontinuity separates mantle from outer core.</p>
  </div>
</div>
""",

    "geo-plate-tectonics-drift": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Geotectonics: Continental Drift to Plate Tectonic Synthesis</h3>
  <p>The paradigm shift in modern geosciences progressed from <strong>Alfred Wegener's Continental Drift Theory (1912)</strong> to <strong>Harry Hess's Sea-Floor Spreading (1960)</strong>, culminating in the comprehensive <strong>Plate Tectonics Theory (McKenzie, Parker, Morgan, 1967–1968)</strong>.</p>

  <h4>Wegener's Continental Drift Theory (1912)</h4>
  <ul>
    <li>Postulated that during the Carboniferous period, all landmasses formed a supercontinent called <strong>Pangaea</strong> ("All Earth"), surrounded by a super-ocean called <strong>Panthalassa</strong> ("All Sea").</li>
    <li>During the Mesozoic era (~200 million years ago), Pangaea split into:
      <ul>
        <li><strong>Laurasia (Angaraland):</strong> North America, Greenland, Europe, Asia (excluding Indian peninsula).</li>
        <li><strong>Gondwanaland:</strong> South America, Africa, Madagascar, Peninsular India, Australia, Antarctica.</li>
        <li>Separated by a longitudinal geosynclinal seaway called the <strong>Tethys Sea</strong>.</li>
      </ul>
    </li>
    <li><strong>Wegener's Supporting Evidences:</strong>
      <ol>
        <li><em>Jigsaw Fit:</em> Perfect coastline matching between South America (Atlantic coast of Brazil) and West Africa (Gulf of Guinea) at the 500-fathom / 1,000-m isobath.</li>
        <li><em>Paleontological Fossils:</em> Identical fossils of <strong>Mesosaurus</strong> (small freshwater reptile) found only in eastern South America and southern Africa; <strong>Glossopteris flora</strong> (fern) found across India, Madagascar, Africa, Antarctica, and Australia.</li>
        <li><em>Stratigraphic Rocks:</em> 2-billion-year-old metamorphic rock belts from Brazil align with West African belts.</li>
        <li><em>Glacial Tillites:</em> Carboniferous glacial striations and tillite beds found in tropical Peninsular India (Talchir boulder beds), Africa, Madagascar, Australia, and Antarctica.</li>
        <li><em>Placer Gold Deposits:</em> Gold placers in Ghana coast without any local source rock, matching quartz vein lodes across the ocean in Brazil!</li>
      </ol>
    </li>
    <li><strong>The Failure of Wegener's Driving Mechanism:</strong> Wegener proposed <em>Tidal Force</em> and <em>Pole-fleeing Force (differential gravity/centrifugal force)</em>. Physicist Harold Jeffreys proved mathematically that tidal forces strong enough to drift continents would halt Earth's rotation within a year.</li>
  </ul>

  <h4>Arthur Holmes' Mantle Convection (1930s) & Sea-Floor Spreading (1960)</h4>
  <ul>
    <li>Arthur Holmes proposed that radioactive decay inside the mantle drives <strong>thermal convection currents</strong>. Upwelling limbs create rifting; downwelling limbs cause crustal subsidence.</li>
    <li><strong>Harry Hess (1960):</strong> Mapped the Mid-Atlantic Ridge and proposed <strong>Sea-Floor Spreading</strong>. Upwelling magma at mid-ocean ridges forms new basaltic oceanic crust, which spreads laterally and is consumed at oceanic trenches (subduction zones). Hence, ocean basins are dynamically recycled and geologically young (&lt;200 Ma).</li>
    <li><strong>Vine-Matthews-Morley Hypothesis (1963):</strong> Discovered symmetric, alternating normal and reversed magnetic stripes (paleomagnetism) on either side of mid-ocean ridge axes, matching Earth's episodic magnetic field reversals and proving continuous spreading.</li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. The Three Plate Boundary Archetypes</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Boundary Type</th>
          <th>Relative Motion</th>
          <th>Geological Stress</th>
          <th>Volcanism & Seismicity</th>
          <th>Topographic Landforms & World Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Divergent (Constructive)</strong></td>
          <td>Plates pull apart / separate</td>
          <td>Tension / Extension</td>
          <td>Effusive basaltic volcanism; Shallow-focus earthquakes only.</td>
          <td>Mid-Ocean Ridges (Mid-Atlantic Ridge, East Pacific Rise), Continental Rift Valleys (East African Great Rift Valley, Red Sea).</td>
        </tr>
        <tr>
          <td><strong>Convergent (Destructive)</strong></td>
          <td>Plates collide / one subducts</td>
          <td>Compression</td>
          <td>Explosive andesitic volcanism (except in C-C); Deep, intermediate, and shallow earthquakes (Wadati-Benioff zone).</td>
          <td>
            1. <strong>Oceanic-Oceanic (O-O):</strong> Island Arcs & Trenches (Japan, Philippines, Aleutians, Mariana Trench).<br>
            2. <strong>Oceanic-Continental (O-C):</strong> Volcanic Cordilleras & Deep Trenches (Andes, Cascades, Peru-Chile Trench).<br>
            3. <strong>Continental-Continental (C-C):</strong> Fold Mountains, thickened crust, <em>NO volcanism</em> (Himalayas, Alps, Zagros).
          </td>
        </tr>
        <tr>
          <td><strong>Transform (Conservative)</strong></td>
          <td>Plates slide past each other horizontally</td>
          <td>Shear stress</td>
          <td><strong>NO volcanism</strong>; Intense shallow-focus earthquakes.</td>
          <td>Transform faults, offset ridges (San Andreas Fault California, Alpine Fault New Zealand, North Anatolian Fault Turkey).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-lightbulb" style="color: var(--accent);"></i> 3. Strategic Speed Mnemonics</h3>
  <div class="mnemonic-box">
    <h4><i class="fa-solid fa-bolt"></i> Mnemonic: 7 Major Lithospheric Plates</h4>
    <p><strong>"PA-PA-NA-SA-Eurasia-Antarctica-IndoAust"</strong></p>
    <ul>
      <li>1. <strong>Pacific Plate</strong> (Largest, purely oceanic)</li>
      <li>2. <strong>North American Plate</strong></li>
      <li>3. <strong>South American Plate</strong></li>
      <li>4. <strong>Eurasian Plate</strong></li>
      <li>5. <strong>African Plate</strong></li>
      <li>6. <strong>Indo-Australian-New Zealand Plate</strong></li>
      <li>7. <strong>Antarctic Plate</strong></li>
      <li><em>Key Minor Plates:</em> <strong>Nazca</strong> (between Pacific & S. America), <strong>Cocos</strong> (between Central America & Pacific), <strong>Juan de Fuca</strong> (Pacific NW USA), <strong>Arabian</strong>, <strong>Philippine</strong>, <strong>Caribbean</strong>, <strong>Scotia</strong>.</li>
    </ul>
  </div>

  <h3><i class="fa-solid fa-triangle-exclamation" style="color: var(--warning);"></i> 4. UPSC & Defence Examiner Traps</h3>
  <div class="trap-box">
    <h4><i class="fa-solid fa-skull-crossbones"></i> Critical Trap Alert: Volcanism in the Himalayas</h4>
    <p><strong>The Trap:</strong> "Are the Himalayas prone to both volcanic eruptions and earthquakes?"</p>
    <p><strong>The Reality:</strong> The Himalayas experience severe earthquakes (up to M8+), but have <strong>ZERO active volcanism</strong>! Because the collision is Continental-Continental (Indian Plate colliding with Eurasian Plate), both continental crusts are low-density SIAL ($2.7\,\text{g/cm}^3$) and too buoyant to subduct deeply into the asthenosphere to melt into magma. In contrast, the Andes (Oceanic Nazca Plate subducting under Continental South America) are dotted with massive active volcanoes (Cotopaxi, Chimborazo, Ojos del Salado).</p>
  </div>
</div>
""",

    "geo-earthquakes-tsunamis": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Seismology: Rupture Dynamics, Waves & Energy Dissipation</h3>
  <p>An earthquake is the sudden release of accumulated strain energy along a geological fault plane, propagating as elastic seismic waves. Reid's <strong>Elastic Rebound Theory (1906)</strong> explains how tectonic forces deform rocks until shear strain exceeds their frictional yield strength, triggering brittle shear fracture.</p>

  <h4>Focal Geometry & Terminology</h4>
  <ul>
    <li><strong>Focus (Hypocentre):</strong> The exact point within the Earth's lithosphere where seismic rupture initiates and elastic energy is released.</li>
    <li><strong>Epicentre:</strong> The point on the Earth's surface vertically directly above the hypocentre ($d_{\text{epicentral}} = 0$). Receives seismic waves first; experiences maximum surface damage.</li>
    <li><strong>Focal Depth Classification:</strong>
      <ul>
        <li><em>Shallow-focus earthquakes:</em> 0 – 70 km depth (constitute ~85% of all seismic energy; most destructive).</li>
        <li><em>Intermediate-focus earthquakes:</em> 70 – 300 km depth.</li>
        <li><em>Deep-focus earthquakes:</em> 300 – 700 km depth (occur exclusively in Wadati-Benioff subduction zones).</li>
      </ul>
    </li>
  </ul>

  <h4>Seismic Wave Taxonomy: Body vs Surface Waves</h4>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Wave Type</th>
          <th>Propagation Medium</th>
          <th>Particle Oscillation</th>
          <th>Velocity Range</th>
          <th>Destructive Potential</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Primary (P) Waves</strong></td>
          <td>Solids, Liquids, Gases</td>
          <td>Longitudinal / Compression-Rarefaction (parallel to ray path)</td>
          <td>$6.0 - 13.0\,\text{km/s}$ (Fastest, arrives 1st)</td>
          <td>Low; causes sudden vertical jolt.</td>
        </tr>
        <tr>
          <td><strong>Secondary (S) Waves</strong></td>
          <td><strong>Solids ONLY</strong></td>
          <td>Transverse / Shear (perpendicular to ray path)</td>
          <td>$3.5 - 7.5\,\text{km/s}$ (Arrives 2nd)</td>
          <td>Moderate; causes side-to-side shearing.</td>
        </tr>
        <tr>
          <td><strong>Love (L) Waves</strong></td>
          <td>Earth's surface only</td>
          <td>Horizontal transverse shearing (snake-like ground motion)</td>
          <td>$2.0 - 4.5\,\text{km/s}$ (Slower than S-waves)</td>
          <td><strong>High</strong>; tears building foundations horizontally.</td>
        </tr>
        <tr>
          <td><strong>Rayleigh (R) Waves</strong></td>
          <td>Earth's surface only</td>
          <td>Retrograde elliptical rolling motion (like ocean swells)</td>
          <td>$2.0 - 4.0\,\text{km/s}$ (Slowest body wave)</td>
          <td><strong>Maximum destructive impact</strong>; causes visible ground rolling waves.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Magnitude vs Intensity & Measurement Scales</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Richter Magnitude Scale ($M_L$)</th>
          <th>Moment Magnitude Scale ($M_w$)</th>
          <th>Mercalli Intensity Scale ($MMI$)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Parameter Measured</strong></td>
          <td>Quantitative: Amplitude of seismic waves recorded on Wood-Anderson seismograph.</td>
          <td>Quantitative: Physical energy released ($M_0 = \mu \cdot A \cdot D$, fault area $\times$ slip).</td>
          <td>Qualitative: Observed physical destruction to structures, ground, and human impact.</td>
        </tr>
        <tr>
          <td><strong>Scale Range</strong></td>
          <td>Logarithmic, open-ended ($0 - 9.5+$)</td>
          <td>Logarithmic, open-ended (replaces Richter for $M > 7$)</td>
          <td>Linear Roman numerals: <strong>I (imperceptible) to XII (total catastrophe)</strong>.</td>
        </tr>
        <tr>
          <td><strong>Energy Multiplier</strong></td>
          <td>Each +1.0 unit = <strong>10x amplitude</strong> increase and $\approx \mathbf{31.62\times}$ ($10^{1.5}$) <strong>energy release</strong>! (+2 units = 1000x energy).</td>
          <td>Consistent with thermodynamic work done across fault rupture plane.</td>
          <td>Depends on distance from epicentre, soil type (liquefaction), and engineering quality.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-lightbulb" style="color: var(--accent);"></i> 3. Seismic Zoning of India (BIS 1893: 2002)</h3>
  <div class="mnemonic-box">
    <h4><i class="fa-solid fa-bolt"></i> Bureau of Indian Standards (BIS) 4 Seismic Zones</h4>
    <p><em>Note: Zone I was merged into Zone II. There are now only 4 active zones: II, III, IV, V.</em></p>
    <ul>
      <li><strong>Zone V (Very High Damage Risk - Zone Factor 0.36):</strong> Entire NE India, Jammu & Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Rann of Kutch (Gujarat), North Bihar, Andaman & Nicobar Islands.</li>
      <li><strong>Zone IV (High Damage Risk - Zone Factor 0.24):</strong> Delhi-NCR, Northern UP, Bihar foothills, parts of Gujarat, Maharashtra (Koyna region), Sikkim.</li>
      <li><strong>Zone III (Moderate Damage Risk - Zone Factor 0.16):</strong> Kerala, Goa, Lakshadweep, remaining parts of UP, MP, Gujarat, West Bengal, Western Ghats.</li>
      <li><strong>Zone II (Low Damage Risk - Zone Factor 0.10):</strong> Stable Peninsular Shield, parts of Rajasthan, MP, Odisha, Andhra, Telangana, Karnataka, Tamil Nadu.</li>
    </ul>
  </div>

  <h3><i class="fa-solid fa-triangle-exclamation" style="color: var(--warning);"></i> 4. Tsunamis: Physics & Generation Mechanics</h3>
  <div class="trap-box">
    <h4><i class="fa-solid fa-skull-crossbones"></i> Critical Trap Alert: Tsunami Wavelength vs Amplitude in Open Ocean vs Coast</h4>
    <p><strong>The Trap:</strong> Why can ships in the deep open ocean completely miss a passing deadly tsunami?</p>
    <p><strong>The Scientific Reality:</strong>
      <ul>
        <li>In the <strong>Deep Ocean</strong> ($d \approx 4,000\,\text{m}$), tsunamis travel at jetliner speeds ($v = \sqrt{g \cdot d} \approx 700 - 800\,\text{km/h}$) with vast wavelengths ($\lambda \approx 100 - 200\,\text{km}$), but an amplitude (wave height) of <strong>less than 1 meter</strong>! Ships simply experience a gentle, imperceptible swell over 15–20 minutes.</li>
        <li>Near the <strong>Shallow Coast</strong> ($d \rightarrow 10\,\text{m}$), the wave speed drops rapidly ($v \downarrow$). To conserve energy flux, the wavelength compresses drastically ($\lambda \downarrow$) while wave height explodes vertically into towering walls of water 10–30 meters high (<strong>Shoaling Effect</strong>).</li>
      </ul>
    </p>
  </div>
</div>
"""
}

print(f"Loaded masterclass Part 1 with {len(GEO_MASTERCLASS_PART1)} chapters.")
