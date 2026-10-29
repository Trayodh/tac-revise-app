# geo_masterclass_part3.py - Climatology & Oceanography Chapters (11-22)

GEO_MASTERCLASS_PART3 = {
    "earth-atmosphere": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Atmospheric Physics: Stratification, Composition & Heat Budget</h3>
  <p>The atmosphere is a mechanically stratified, gaseous envelope held to the Earth by gravity, extending over 10,000 km into interplanetary space. Over <strong>99% of atmospheric mass</strong> is concentrated within the lowest <strong>32 km</strong> due to gravitational compression.</p>

  <h4>Atmospheric Chemical Composition</h4>
  <ul>
    <li><strong>Permanent Gases (Homosphere, up to 80 km):</strong>
      <ul>
        <li><strong>Nitrogen ($N_2$):</strong> $78.08\%$ by volume. Chemically inert; regulates combustion; vital nutrient via biological nitrogen fixation.</li>
        <li><strong>Oxygen ($O_2$):</strong> $20.95\%$ by volume. Essential for cellular respiration and oxidation combustion.</li>
        <li><strong>Argon ($Ar$):</strong> $0.93\%$ by volume. Noble inert gas.</li>
      </ul>
    </li>
    <li><strong>Variable & Greenhouse Gases:</strong>
      <ul>
        <li><strong>Carbon Dioxide ($CO_2$):</strong> $0.0415\%$ (~418 ppm). Transparent to incoming shortwave solar radiation ($0.15 - 4\,\mu\text{m}$) but opaque to outgoing longwave terrestrial infrared radiation ($4 - 100\,\mu\text{m}$)—the fundamental thermodynamic driver of the greenhouse effect.</li>
        <li><strong>Water Vapor ($H_2O$):</strong> $0$ to $4\%$ by volume. Decreases rapidly with altitude and latitude (maximum in humid equatorial doldrums, minimum in cold polar deserts). Absorbs both solar insolation and terrestrial radiation; primary medium of latent heat transport.</li>
        <li><strong>Ozone ($O_3$):</strong> Concentrated in the stratosphere ($15 - 35\,\text{km}$, peak at $20 - 25\,\text{km}$). Formed by Chapman photochemical cycle ($O_2 + h\nu \rightarrow 2O$; $O + O_2 \rightarrow O_3$). Absorbs lethal solar ultraviolet-B ($280 - 315\,\text{nm}$) and UV-C radiation. Measured in <strong>Dobson Units (DU)</strong>; 1 DU = 0.01 mm pure ozone thickness at STP. Standard thickness ~300 DU; &lt;220 DU defines an "Ozone Hole".</li>
      </ul>
    </li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Atmospheric Thermal Layers</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Atmospheric Layer</th>
          <th>Altitude Range</th>
          <th>Temperature Gradient ($dT/dz$)</th>
          <th>Physical Characteristics</th>
          <th>Key Defence Exam Markers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Troposphere</strong></td>
          <td>0 – 8 km (Poles), 0 – 18 km (Equator); Mean ~13 km.</td>
          <td><strong>Negative:</strong> Drops by <strong>$6.5^\circ\text{C}$ per 1,000 meters ($1\,\text{km}$)</strong> (Normal Lapse Rate).</td>
          <td>Contains 75–80% of atmospheric mass and 99% of atmospheric water vapor. Site of all clouds, weather, convective storms, and precipitation. Tropopause thickness is maximum at equator due to intense convective heating.</td>
          <td>Troposphere is <strong>thickest at Equator (18 km)</strong> and thinnest at Poles (8 km). Temperature at tropopause is colder over Equator (-80°C) than over Poles (-45°C)!</td>
        </tr>
        <tr>
          <td><strong>Stratosphere</strong></td>
          <td>13 – 50 km</td>
          <td><strong>Positive (Inversion):</strong> Rises from -60°C to ~0°C at Stratopause.</td>
          <td>Extremely dry, stable, devoid of vertical convective turbulence; ideal cruise altitude for commercial and supersonic military jet aircraft. Contains the <strong>Ozonosphere</strong>. Rare nacreous / mother-of-pearl clouds form in polar winter.</td>
          <td>Temperature increases due to UV absorption by Ozone. Supersonic military jets fly here to avoid weather turbulence.</td>
        </tr>
        <tr>
          <td><strong>Mesosphere</strong></td>
          <td>50 – 80 km</td>
          <td><strong>Negative:</strong> Plummets to <strong>$-90^\circ\text{C}$ to $-100^\circ\text{C}$</strong> at Mesopause.</td>
          <td><strong>Coldest layer of the atmosphere</strong>. Gas density is sufficient to cause friction on incoming space debris; meteors ignite and burn up here as shooting stars. Noctilucent (night-shining) ice clouds form at polar mesopause.</td>
          <td>Coldest temperature in Earth's atmosphere (-100°C). Meteors burn up here.</td>
        </tr>
        <tr>
          <td><strong>Thermosphere (Ionosphere)</strong></td>
          <td>80 – 640 km</td>
          <td><strong>Positive:</strong> Rises sharply with altitude (&gt;1,500°C) due to solar X-ray & EUV absorption.</td>
          <td>Extremely low density (free molecular flow). Gases exist as ionized plasma ($O^+, NO^+$). Ionospheric sub-layers (D, E, F1, F2/Appleton layer) reflect terrestrial High-Frequency (HF) radio waves back to Earth, enabling global over-the-horizon wireless communication. Site of <strong>Auroras (Aurora Borealis / Australis)</strong>.</td>
          <td>Enables HF radio propagation. Site of International Space Station (ISS ~400 km) and Northern/Southern lights.</td>
        </tr>
        <tr>
          <td><strong>Exosphere</strong></td>
          <td>&gt;640 km to ~10,000 km</td>
          <td>Isothermal, gradually merges into interplanetary space.</td>
          <td>Extremely rarefied monatomic hydrogen, helium. Gas particles follow ballistic trajectories; light atoms exceed escape velocity ($11.2\,\text{km/s}$) and bleed into space (planetary atmospheric escape).</td>
          <td>Geostationary satellites orbit here at 35,786 km.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-fire" style="color: var(--accent);"></i> 3. Terrestrial Heat Budget</h3>
  <p>The solar constant ($S_0 \approx 1,361\,\text{W/m}^2$ or $1.968\,\text{cal/cm}^2/\text{min}$) represents the incoming solar electromagnetic flux at the top of Earth's atmosphere on a plane normal to the beam. Assuming <strong>100 units of incoming solar shortwave radiation</strong>:</p>
  <ul>
    <li><strong>Earth's Albedo (Reflected back to space without heating): 35 units</strong>
      <ul>
        <li>27 units reflected from cloud tops</li>
        <li>6 units scattered back by atmospheric gas molecules & dust</li>
        <li>2 units reflected directly from snow, ice, and ocean surfaces</li>
        <li><em>Planetary Albedo of Earth = 35%</em> (Fresh snow has highest albedo 80–90%; asphalt/calm ocean lowest 5–10%).</li>
      </ul>
    </li>
    <li><strong>Radiation Absorbed by Earth & Atmosphere: 65 units</strong>
      <ul>
        <li>14 units absorbed directly by the atmosphere (water vapor, ozone, dust)</li>
        <li>51 units absorbed by Earth's land and ocean surface (34 direct sunlight + 17 diffuse sky radiation)</li>
      </ul>
    </li>
    <li><strong>Longwave Terrestrial Reradiation (Cooling back to space): 65 units</strong>
      <ul>
        <li>17 units radiated directly from Earth's surface into space through the "atmospheric infrared window" (8–13 $\mu$m)</li>
        <li>34 units absorbed by atmosphere and radiated to space: 6 units direct radiation, 9 units convection/turbulence, 19 units latent heat of condensation</li>
        <li>14 units absorbed from solar radiation released back to space</li>
        <li><em>Total radiation balance = 100 in, 100 out $\rightarrow$ Steady-state global temperature!</em></li>
      </ul>
    </li>
  </ul>
</div>
""",

    "geo-atmospheric-pressure-planetary-winds": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Dynamic Meteorology: Pressure Belts & Atmospheric Circulation</h3>
  <p>Atmospheric pressure is the weight of a vertical column of air above a unit surface area ($1\,\text{atm} = 1013.25\,\text{hPa/mb} = 760\,\text{mm of Hg}$). Unequal latitudinal solar heating creates a tripartite meridional circulation cell system in each hemisphere: the <strong>Hadley Cell</strong> ($0^\circ - 30^\circ$), <strong>Ferrel Cell</strong> ($30^\circ - 60^\circ$), and <strong>Polar Cell</strong> ($60^\circ - 90^\circ$).</p>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. The Seven Global Pressure Belts</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Pressure Belt</th>
          <th>Latitudinal Location</th>
          <th>Origin / Dynamic Driver</th>
          <th>Wind Regimes & Physical Characteristics</th>
          <th>Maritime & Aviation Markers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Equatorial Low Pressure Belt (ITCZ)</strong></td>
          <td>$5^\circ\,\text{N} - 5^\circ\,\text{S}$</td>
          <td><strong>Thermally Induced:</strong> Intense solar insolation causes intense thermal heating, expansion, and convectional rising of air.</td>
          <td>Zone of convergence of NE and SE Trade Winds. Warm, highly humid air rises continuously, causing daily afternoon heavy convectional thunderstorms (4 o'clock rain).</td>
          <td>Called the <strong>Doldrums</strong> ("zone of calm"); sailing ships were historically stranded for weeks due to absence of horizontal winds. Zero Coriolis force at equator!</td>
        </tr>
        <tr>
          <td><strong>Subtropical High Pressure Belts (STHP)</strong></td>
          <td>$30^\circ - 35^\circ\,\text{N}$ and $\text{S}$</td>
          <td><strong>Dynamically Induced:</strong> Poleward-moving upper-tropospheric air from the Hadley cell cools and converges with Ferrel cell air, forcefully subsiding at $30^\circ-35^\circ$.</td>
          <td>Subsiding air compresses and warms adiabatically, suppressing cloud formation. Creates perpetually cloudless, arid skies.</td>
          <td>Known as the <strong>Horse Latitudes</strong> (Spanish ships jettisoned horses to lighten vessels in calm waters). Most major hot trade-wind deserts of the world (Sahara, Arabian, Thar, Atacama, Australian) lie on western margins along this belt!</td>
        </tr>
        <tr>
          <td><strong>Subpolar Low Pressure Belts</strong></td>
          <td>$60^\circ - 65^\circ\,\text{N}$ and $\text{S}$</td>
          <td><strong>Dynamically Induced:</strong> Centrifugal effect of Earth's rapid rotation and convergence of warm Westerlies with freezing Polar Easterlies creates the <strong>Polar Front</strong>, forcing air to ascend.</td>
          <td>Intense cyclogenesis; zone of violent temperate extra-tropical frontal depressions and stormy gales. Manifests as the Aleutian Low and Icelandic Low.</td>
          <td>Roaring Forties, Furious Fifties, and Screaming Sixties winds blow violently across the uninterrupted Southern Ocean.</td>
        </tr>
        <tr>
          <td><strong>Polar High Pressure Belts</strong></td>
          <td>$85^\circ - 90^\circ\,\text{N}$ and $\text{S}$</td>
          <td><strong>Thermally Induced:</strong> Extreme freezing polar cold causes severe air contraction, increased density, and persistent thermal subsidence.</td>
          <td>Extremely cold, dry, dense anticyclonic air descending over the ice sheets of Antarctica and Greenland.</td>
          <td>Very low absolute humidity; Antarctica is technically the world's driest desert (&lt;50 mm precipitation/year).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-wind" style="color: var(--accent);"></i> 3. Planetary Winds & Coriolis Physics</h3>
  <ul>
    <li><strong>Coriolis Force:</strong> Apparent inertial deflecting force caused by Earth's west-to-east rotation ($F_c = 2m\Omega v \sin\phi$, where $\Omega$ is angular velocity and $\phi$ is latitude).
      <ul>
        <li>$F_c = 0$ at the <strong>Equator</strong> ($\sin 0^\circ = 0$).</li>
        <li>$F_c$ is maximum at the <strong>Poles</strong> ($\sin 90^\circ = 1$).</li>
        <li><strong>Ferrel's Law:</strong> All moving fluids (winds, ocean currents) are deflected to their <strong>RIGHT in the Northern Hemisphere</strong> and to their <strong>LEFT in the Southern Hemisphere</strong>.</li>
      </ul>
    </li>
    <li><strong>Trade Winds (Tropical Easterlies):</strong> Blow from Subtropical Highs towards the Equatorial Low. Deflected by Coriolis into <strong>North-East Trades</strong> in Northern Hemisphere and <strong>South-East Trades</strong> in Southern Hemisphere. Highly steady, reliable maritime trade winds.</li>
    <li><strong>Westerlies:</strong> Blow from Subtropical Highs towards Subpolar Lows. Deflected into <strong>South-Westerlies</strong> in Northern Hemisphere and <strong>North-Westerlies</strong> in Southern Hemisphere. Unimpeded by continental landmasses in the Southern Hemisphere, they blow with ferocious strength:
      <ul>
        <li>$40^\circ\,\text{S}$: <strong>Roaring Forties</strong></li>
        <li>$50^\circ\,\text{S}$: <strong>Furious Fifties</strong></li>
        <li>$60^\circ\,\text{S}$: <strong>Screaming Sixties</strong></li>
      </ul>
    </li>
  </ul>
</div>
""",

    "geo-local-winds-jet-streams": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Mesoscale Meteorology: Local Winds & Upper Tropospheric Jet Streams</h3>
  <p>While planetary winds operate on global scales, mesoscale pressure gradients caused by localized differential thermal regimes, orographic barriers, and katabatic drainage generate distinctive <strong>Local Winds</strong> with profound microclimatic, agricultural, and military significance.</p>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Master Register of World Local Winds</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Local Wind</th>
          <th>Thermal Nature</th>
          <th>Geographic Region of Occurrence</th>
          <th>Physical Mechanism & Meteorology</th>
          <th>Key Defence Exam Markers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Loo</strong></td>
          <td>Hot & Extremely Dry</td>
          <td>Northern Plains of India & Pakistan (May–June)</td>
          <td>Intense thermal low over Thar desert drives scorching westerly winds (45°C–50°C). Causes heatstrokes.</td>
          <td>Local heatwave wind of Indo-Gangetic Plains.</td>
        </tr>
        <tr>
          <td><strong>Chinook ("Snow Eater")</strong></td>
          <td>Warm & Very Dry</td>
          <td>Rocky Mountains (USA & Canada), blowing onto Great Plains</td>
          <td>Moist Pacific air ascends western windward Rockies, loses moisture via adiabatic expansion ($0.6^\circ\text{C}/100\,\text{m}$), then descends leeward eastern slopes warming rapidly by dry adiabatic lapse rate ($1.0^\circ\text{C}/100\,\text{m}$).</td>
          <td>Can raise winter temperatures by 20°C in an hour, melting snow instantly ("Snow Eater"), opening winter pastures for livestock.</td>
        </tr>
        <tr>
          <td><strong>Foehn</strong></td>
          <td>Warm & Dry</td>
          <td>Alps Mountains (Northern leeward valleys in Switzerland, Austria, Germany)</td>
          <td>Identical adiabatic föhn mechanism to Chinook. Melts alpine snow, causes early spring blooming, assists grape ripening.</td>
          <td>Alpine counterpart of the North American Chinook.</td>
        </tr>
        <tr>
          <td><strong>Harmattan ("The Doctor")</strong></td>
          <td>Warm, Dry & Dusty</td>
          <td>Sahara Desert blowing south-west to the Gulf of Guinea (West Africa)</td>
          <td>Blowing from arid desert during winter, its low humidity dries up the muggy, humid equatorial Guinea coast, bringing relief from malaria/fevers.</td>
          <td>Known as <strong>"The Doctor"</strong> wind of West Africa.</td>
        </tr>
        <tr>
          <td><strong>Sirocco</strong></td>
          <td>Hot, Dry (origin) $\rightarrow$ Humid (arrival)</td>
          <td>Sahara Desert across Mediterranean Sea into Southern Europe (Italy, Spain, Greece)</td>
          <td>Carries fine red Saharan desert dust; picks up moisture over Mediterranean, causing reddish precipitation in Italy called <strong>"Blood Rain"</strong>!</td>
          <td>Causes <strong>Blood Rain</strong> in Southern Italy. Known locally as <em>Khamsin</em> (Egypt), <em>Gibli</em> (Libya), <em>Leveche</em> (Spain).</td>
        </tr>
        <tr>
          <td><strong>Mistral</strong></td>
          <td><strong>Cold, Dry & Violent</strong></td>
          <td>Alps descending down the Rhône River valley into the Gulf of Lion (Mediterranean coast of France)</td>
          <td>Katabatic gravity-driven canalized flow of dense sub-polar air accelerated through narrow river chasms. Reaches speeds &gt;100 km/h in winter.</td>
          <td>Cold northerly wind of Rhône Valley, France. Threat to aviation and coastal shipping.</td>
        </tr>
        <tr>
          <td><strong>Bora</strong></td>
          <td><strong>Cold, Dry & Gusty</strong></td>
          <td>Dinaric Alps descending westward onto the Adriatic Sea coast (Croatia, Italy)</td>
          <td>Cold continental katabatic wind blowing off winter Balkan plateau down steep coastal scarps. Speeds up to 150 km/h.</td>
          <td>Cold north-easterly wind of Adriatic Coast.</td>
        </tr>
        <tr>
          <td><strong>Blizzard</strong></td>
          <td><strong>Freezing & Violent</strong></td>
          <td>Siberia, Canada, Northern USA, Polar regions</td>
          <td>Violent gale-force winds (&gt;56 km/h) carrying blinding blowing powdery snow, reducing visibility to zero (&lt;400 m) with wind chill &lt;-30°C.</td>
          <td>Severe polar snowstorm hazard. Known as <em>Purga</em> in Siberian tundra, <em>Buran</em> in Central Asia.</td>
        </tr>
        <tr>
          <td><strong>Pampero</strong></td>
          <td>Cold & Violent</td>
          <td>Pampas of Argentina & Uruguay</td>
          <td>Cold polar air mass surging northwards behind a cold front, bringing sharp temperature drops and squalls.</td>
          <td>Cold squall wind of the Argentine Pampas.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-plane" style="color: var(--accent);"></i> 3. Jet Streams: High-Altitude Atmospheric Geostrophic Rivers</h3>
  <p>Jet streams are narrow, sinuous bands of high-velocity <strong>geostrophic westerly winds</strong> flowing in the upper troposphere / lower stratosphere ($9 - 14\,\text{km}$ altitude), with velocities ranging from $150\,\text{km/h}$ in summer to upwards of $450\,\text{km/h}$ in winter.</p>
  <ul>
    <li><strong>Polar Front Jet Stream (PFJ):</strong> Located around $50^\circ - 60^\circ$ latitude at the boundary of cold polar air and warm subtropical air. Highly discontinuous, associated with Rossby waves and severe mid-latitude cyclogenesis.</li>
    <li><strong>Subtropical Westerly Jet Stream (STWJ):</strong> Located around $30^\circ$ latitude at 12–14 km altitude. Stronger in winter; branches around the Tibetan Plateau, with its southern branch sitting over Northern India (steers Western Disturbances into Punjab, Haryana, J&K).</li>
    <li><strong>Tropical Easterly Jet (TEJ):</strong> Unique seasonal summer jet stream flowing <strong>East to West</strong> over Peninsular India and the Arabian Sea at 14–16 km, triggered by intense thermal heating of the elevated Tibetan Plateau. Crucial driver of the South-West Indian Monsoon burst!</li>
  </ul>
</div>
""",

    "geo-humidity-clouds-precipitation": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Atmospheric Moisture: Thermodynamics & Cloud Microphysics</h3>
  <p>Water exists in the atmosphere across all three physical phases (vapor, liquid droplets, ice crystals). The transitions involve substantial transfers of <strong>Latent Heat</strong>: evaporation absorbs $2.5 \times 10^6\,\text{J/kg}$ (cooling the surface), while condensation releases the same latent heat into the surrounding air column, powering tropical storms and thunderstorms.</p>

  <h4>Measures of Atmospheric Moisture</h4>
  <ul>
    <li><strong>Absolute Humidity:</strong> Total mass of water vapor present in a given unit volume of air ($\text{grams of } H_2O / \text{m}^3 \text{ of air}$). Varies with volumetric expansion/compression when air temperature changes.</li>
    <li><strong>Specific Humidity:</strong> Mass of water vapor per unit mass of total air ($\text{g/kg}$). Remains constant during temperature and pressure changes unless moisture is added or removed.</li>
    <li><strong>Relative Humidity (RH):</strong> Ratio of actual water vapor pressure to the saturation water vapor pressure at that temperature, expressed as a percentage:
      $$RH = \frac{\text{Actual Vapor Pressure } (e)}{\text{Saturation Vapor Pressure } (e_s)} \times 100\%$$
      When $RH = 100\%$, air is <strong>saturated</strong>, and its temperature equals the <strong>Dew Point</strong>. $RH$ increases when air cools (since warm air can hold exponentially more moisture than cold air via the Clausius-Clapeyron equation).
    </li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. World Meteorological Organization (WMO) Cloud Classification</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Cloud Family</th>
          <th>Altitude Base</th>
          <th>Principal Cloud Genera</th>
          <th>Composition & Physical Appearance</th>
          <th>Weather Association & Exam Markers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>High Clouds</strong></td>
          <td>6,000 to 12,000 meters</td>
          <td>
            1. <strong>Cirrus (Ci):</strong> Detached, feather-like, fibrous white tufts ("Mares' Tails").<br>
            2. <strong>Cirrocumulus (Cc):</strong> Small white patches forming rippled "Mackerel Sky".<br>
            3. <strong>Cirrostratus (Cs):</strong> Transparent thin veil producing <strong>Halo phenomenon</strong> around Sun/Moon.
          </td>
          <td>Composed entirely of <strong>ice crystals</strong> due to sub-zero temperatures (&lt;-35°C).</td>
          <td>Cirrostratus causes a luminous optical <strong>Halo</strong> around Sun/Moon by refraction through hexagonal ice prisms; indicates approach of a warm front/cyclone.</td>
        </tr>
        <tr>
          <td><strong>Middle Clouds</strong></td>
          <td>2,000 to 6,000 meters</td>
          <td>
            1. <strong>Altocumulus (Ac):</strong> Flattened grayish-white globular rolls or sheets.<br>
            2. <strong>Altostratus (As):</strong> Uniform gray/bluish sheet covering sky; Sun appears watery as through ground glass ("corona" effect).
          </td>
          <td>Mixed supercooled water droplets and ice crystals.</td>
          <td>Altostratus brings steady continuous light drizzle or snow.</td>
        </tr>
        <tr>
          <td><strong>Low Clouds</strong></td>
          <td>Surface to 2,000 meters</td>
          <td>
            1. <strong>Stratus (St):</strong> Uniform low grayish fog-like layer covering sky.<br>
            2. <strong>Stratocumulus (Sc):</strong> Low rolling lumpy masses.<br>
            3. <strong>Nimbostratus (Ns):</strong> Dark, thick, amorphous rain cloud.
          </td>
          <td>Liquid water droplets.</td>
          <td><strong>Nimbostratus</strong> produces persistent, prolonged, heavy continuous rainfall or snow ("nimbo" = rain).</td>
        </tr>
        <tr>
          <td><strong>Clouds with Extreme Vertical Development</strong></td>
          <td>500 m base to &gt;15,000 m top (Troposphere ceiling)</td>
          <td>
            1. <strong>Cumulus (Cu):</strong> Dense, woolpack clouds with flat horizontal base and cauliflower tops ("fair weather clouds").<br>
            2. <strong>Cumulonimbus (Cb):</strong> Colossal towering thunderstorm cloud with flat fibrous <strong>Anvil Top (Incus)</strong> spreading under tropopause.
          </td>
          <td>Liquid water at base, supercooled droplets in middle, pure ice crystals at anvil top.</td>
          <td><strong>Cumulonimbus = Thunderhead</strong>. Accompanied by severe lightning, thunder, torrential downpours, violent downdrafts (microbursts), squalls, and hailstones. Extreme aviation hazard.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-cloud-showers-heavy" style="color: var(--accent);"></i> 3. The Three Types of Precipitation</h3>
  <ul>
    <li><strong>Convectional Rainfall:</strong> Intense thermal heating of ground causes warm, moisture-laden air to expand, become buoyant, and ascend rapidly. Reaches condensation level forming towering Cumulonimbus clouds. Characterized by sudden, heavy afternoon showers with lightning and thunder ("4 o'clock rain" in equatorial doldrums).</li>
    <li><strong>Orographic (Relief) Rainfall:</strong> Moisture-laden winds forced to ascend a mountain barrier. Air expands adiabatically, cools at Dry Adiabatic Lapse Rate ($10^\circ\text{C/km}$), saturates, and deposits heavy rainfall on the <strong>Windward Slope</strong>. Descending the <strong>Leeward Slope</strong>, the air compresses adiabatically and warms at DALR ($10^\circ\text{C/km}$), causing relative humidity to drop drastically, creating a dry <strong>Rain-Shadow Zone</strong> (e.g., Mahabaleshwar receives ~6,000 mm on windward Western Ghats, while Pune just 65 km eastward on leeward receives only ~700 mm!).</li>
    <li><strong>Cyclonic / Frontal Rainfall:</strong> Caused by the convergence and lifting of warm, moist air over dense, cold air along a frontal surface in temperate depressions. Produces widespread, prolonged, gentle continuous rainfall.</li>
  </ul>
</div>
""",

    "geo-cyclones-anticyclones-fronts": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Severe Weather Systems: Frontogenesis & Cyclonic Vortices</h3>
  <p>Cyclones are closed atmospheric low-pressure systems surrounded by circular isobars where winds blow inward in a cyclonic spiral: <strong>Counter-clockwise in Northern Hemisphere</strong> and <strong>Clockwise in Southern Hemisphere</strong>. Anticyclones are high-pressure centers with outward divergence.</p>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Tropical Cyclones vs Temperate (Extra-Tropical) Cyclones</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Diagnostic Feature</th>
          <th>Tropical Cyclones</th>
          <th>Temperate / Extra-Tropical Cyclones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Latitudinal Zone</strong></td>
          <td>Tropical oceans only: $8^\circ - 20^\circ\,\text{N}$ and $\text{S}$ (Do NOT form within $0^\circ-5^\circ$ due to absence of Coriolis force!).</td>
          <td>Mid and high latitudes: $35^\circ - 65^\circ\,\text{N}$ and $\text{S}$.</td>
        </tr>
        <tr>
          <td><strong>Energy Source</strong></td>
          <td><strong>Thermal:</strong> Enormous release of <strong>latent heat of condensation</strong> from water vapor evaporating from warm ocean surface.</td>
          <td><strong>Baroclinic / Dynamic:</strong> Horizontal temperature contrasts and kinetic energy release along frontal zones (Polar Front).</td>
        </tr>
        <tr>
          <td><strong>Necessary Genesis Conditions</strong></td>
          <td>
            1. Sea surface temperature (SST) &gt; <strong>$27^\circ\text{C}$</strong> to a depth of 50 m.<br>
            2. Significant <strong>Coriolis force</strong> to impart vortex spin.<br>
            3. Weak vertical wind shear (&lt;10 m/s between surface and tropopause).<br>
            4. Pre-existing weak low-pressure disturbance.
          </td>
          <td>Convergence of two contrasting air masses: Warm subtropical air (mT) meeting cold polar air (cP).</td>
        </tr>
        <tr>
          <td><strong>Frontal Structure</strong></td>
          <td><strong>NO FRONTS</strong>; thermally symmetric warm-core vortex.</td>
          <td><strong>Clear Frontal System</strong> with Warm Front, Cold Front, and Occluded Front.</td>
        </tr>
        <tr>
          <td><strong>The "Eye" Structure</strong></td>
          <td><strong>Prominent Central Eye (10–50 km diameter)</strong>: Zone of lowest barometric pressure, calm winds, subsiding air, and completely cloudless skies surrounded by violent <strong>Eye Wall</strong> (150–250 km/h winds).</td>
          <td><strong>NO eye</strong>; winds blow across entire center; center is cloudy and wet.</td>
        </tr>
        <tr>
          <td><strong>Trajectory & Movement</strong></td>
          <td>Move from <strong>East to West</strong> steered by easterly trade winds (recurving poleward on hitting continents). Rapidly dissipate over land (loss of moisture heat engine).</td>
          <td>Move from <strong>West to East</strong> steered by upper-tropospheric Westerlies. Can travel across entire continental landmasses.</td>
        </tr>
        <tr>
          <td><strong>Regional Nomenclature</strong></td>
          <td>
            • Indian Ocean & Bay of Bengal: <strong>Cyclones</strong><br>
            • Western North Pacific & South China Sea: <strong>Typhoons</strong><br>
            • Atlantic & Eastern Pacific: <strong>Hurricanes</strong><br>
            • Western Australia: <strong>Willy-Willies</strong><br>
            • Philippines: <strong>Baguio</strong>
          </td>
          <td>Temperate Depressions / Wave Cyclones / Nor'easters.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="trap-box">
    <h4><i class="fa-solid fa-skull-crossbones"></i> Critical Trap Alert: Why do Tropical Cyclones NEVER form at the Equator?</h4>
    <p><strong>The Trap:</strong> Equator has the warmest ocean temperatures (&gt;28°C) and highest humidity. Why are tropical cyclones completely absent between 0° and 5° latitude?</p>
    <p><strong>The Physics:</strong> At the Equator, the Coriolis parameter is exactly zero ($f = 2\Omega \sin 0^\circ = 0$). Without Coriolis force, incoming winds blow straight down the pressure gradient directly into the low-pressure center, instantly filling and destroying the depression before it can organize into a spinning vortex!</p>
  </div>
</div>
""",

    "geo-world-climatic-regions-koppen": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Climatological Taxonomy: Wladimir Köppen's Quantitative System</h3>
  <p>Russian-German climatologist Wladimir Köppen (1900, revised 1918, 1936) devised the most universally accepted climatic classification system, based on monthly and annual values of <strong>temperature and precipitation</strong> closely mapped to vegetation boundaries defined by French botanist De Candolle.</p>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Köppen's Major Climatic Realms & Defense Exam Markers</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Köppen Code</th>
          <th>Climatic Regime</th>
          <th>Geographic Location & Latitudes</th>
          <th>Temperature & Precipitation Metrics</th>
          <th>Diagnostic Biome & Vegetation</th>
          <th>Key Defence Exam Markers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Af</strong></td>
          <td><strong>Tropical Wet (Equatorial Rainforest)</strong></td>
          <td>$5^\circ - 10^\circ\,\text{N}$ and $\text{S}$ (Amazon Basin, Congo Basin, Indonesia, Malaysia).</td>
          <td>Uniformly hot ($26^\circ - 28^\circ\text{C}$); diurnal range &gt; annual range ("Night is the winter of the tropics"); annual precipitation &gt;2,000 mm, daily afternoon convectional thunderstorms.</td>
          <td>Dense, multi-layered evergreen rainforest (<strong>Selvas</strong>); canopy layers, epiphytes, lianas, hardwood timbers (Ebony, Mahogany, Rosewood).</td>
          <td>Diurnal temperature range is greater than the annual temperature range!</td>
        </tr>
        <tr>
          <td><strong>Am</strong></td>
          <td><strong>Tropical Monsoon</strong></td>
          <td>$10^\circ - 25^\circ\,\text{N}$ and $\text{S}$ (Indian subcontinent, SE Asia, northern Australia).</td>
          <td>High temperatures; marked seasonal reversal of winds; heavy summer monsoon rain followed by distinct dry winter.</td>
          <td>Tropical deciduous monsoon forests; trees shed leaves in dry winter season (Teak, Sal, Sandalwood, Bamboo).</td>
          <td>Pronounced seasonal wind and rainfall reversal.</td>
        </tr>
        <tr>
          <td><strong>Aw</strong></td>
          <td><strong>Tropical Wet & Dry (Savanna / Sudan Type)</strong></td>
          <td>$10^\circ - 20^\circ\,\text{N}$ and $\text{S}$ (Llanos of Venezuela, Campos of Brazil, African Sudan, Deccan interior).</td>
          <td>Alternating wet summer and long dry winter; total rainfall 750–1,500 mm; extreme drought periods.</td>
          <td>Tall coarse grasses (elephant grass &gt;3 m high) interspersed with scattered flat-topped umbrella-acacia and baobab trees. <strong>"Big Game Country"</strong>.</td>
          <td>Known as "Big Game Country" due to abundant herbivore and carnivore wildlife.</td>
        </tr>
        <tr>
          <td><strong>BWh</strong></td>
          <td><strong>Subtropical Hot Desert</strong></td>
          <td>$15^\circ - 30^\circ\,\text{N}$ and $\text{S}$ on western continental margins (Sahara, Arabian, Thar, Atacama, Kalahari, Great Australian).</td>
          <td>Extreme heat (summer &gt;40°C); extreme diurnal range (up to 30°C); precipitation &lt;250 mm/year, potential evapotranspiration far exceeds precipitation.</td>
          <td>Xerophytic vegetation: Deep taproots, thick waxy succulent stems (cacti), thorns instead of leaves, dormant seeds.</td>
          <td>Formed by descending dry air of Subtropical Highs and desiccating cold offshore ocean currents.</td>
        </tr>
        <tr>
          <td><strong>Cs</strong></td>
          <td><strong>Mediterranean Climate (Dry Summer Subtropical)</strong></td>
          <td>$30^\circ - 45^\circ\,\text{N}$ and $\text{S}$ on western continental margins (Mediterranean rim, Central California, Central Chile, Cape Town, SW Australia).</td>
          <td><strong>Warm/hot dry cloudless summers</strong> (under Subtropical High shift) and <strong>mild, moist, rainy winters</strong> (under prevailing Westerlies shift). Total rain 400–750 mm.</td>
          <td>Sclerophyllous vegetation: Broadleaved evergreen shrubs, thick bark, leathery leaves (Maquis, Chaparral); famous for <strong>citrus fruits (oranges, lemons), olives, figs, and viticulture (grapes & wine)</strong>.</td>
          <td><strong>ONLY climate with DRY summers and WET winters!</strong> World capital of citrus fruits and winemaking.</td>
        </tr>
        <tr>
          <td><strong>Cfb</strong></td>
          <td><strong>Marine West Coast (British Type)</strong></td>
          <td>$45^\circ - 60^\circ\,\text{N}$ and $\text{S}$ (NW Europe, British Isles, Pacific NW USA, New Zealand).</td>
          <td>Mild cool summers, mild winters (moderated by warm North Atlantic Drift / Westerlies); rain throughout the year with autumn/winter peak.</td>
          <td>Deciduous temperate forests (Oak, Beech, Elm) shedding leaves in winter; lush green pastures (dairying).</td>
          <td>Under permanent influence of Westerlies throughout the year; highly overcast and maritime.</td>
        </tr>
        <tr>
          <td><strong>Df / Dw</strong></td>
          <td><strong>Boreal / Taiga (Subarctic Continental)</strong></td>
          <td>$50^\circ - 70^\circ\,\text{N}$ (Only in Northern Hemisphere across Siberia, Canada, Scandinavia).</td>
          <td>Short cool summers, intensely cold severe winters (&lt;-40°C in Verkhoyansk); enormous annual temperature range (&gt;60°C).</td>
          <td>Vast continuous belt of <strong>evergreen coniferous softwood forests</strong> (Pine, Spruce, Fir, Larch); major source of global commercial pulpwood and lumbering.</td>
          <td>Does NOT exist in the Southern Hemisphere (lack of continental landmass at 55°–70°S).</td>
        </tr>
        <tr>
          <td><strong>ET</strong></td>
          <td><strong>Tundra Climate</strong></td>
          <td>Beyond $70^\circ\,\text{N}$ around Arctic fringe (coastal Siberia, Alaska, Northern Canada).</td>
          <td>Warmest month mean temperature is below $10^\circ\text{C}$ but above $0^\circ\text{C}$; ground permanently frozen (<strong>Permafrost</strong>).</td>
          <td>Treeless arctic plain; dwarf shrubs, mosses, lichens (reindeer moss); active layer thaws briefly in summer creating waterlogged bogs.</td>
          <td>Permafrost subsoil prevents deep tree root penetration.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
""",

    "geo-climate-change-global-warming": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Atmospheric Chemistry: Anthropogenic Climate Forcing & Global Treaties</h3>
  <p>Global climate change is driven by the perturbation of Earth's radiative equilibrium by anthropogenic greenhouse gas emissions, altering radiative forcing ($\Delta F \approx 2.72\,\text{W/m}^2$ above pre-industrial levels). The primary greenhouse gases are <strong>Carbon Dioxide ($CO_2$, ~76% of warming effect)</strong>, <strong>Methane ($CH_4$, GWP 28x over 100 years)</strong>, <strong>Nitrous Oxide ($N_2O$, GWP 273x)</strong>, and <strong>Fluorinated gases (HFCs, PFCs, $SF_6$, $NF_3$)</strong>.</p>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Major International Climate Agreements & Conventions</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Treaty / Agreement</th>
          <th>Year Adopted</th>
          <th>Core Mandate & Legal Architecture</th>
          <th>Key Targets & Defence Exam Markers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>UNFCCC (Earth Summit)</strong></td>
          <td>1992 (Rio de Janeiro)</td>
          <td>Parent treaty establishing the Conference of Parties (COP) framework to stabilize greenhouse gas concentrations.</td>
          <td>Distinguishes Annex I (developed) and Non-Annex I (developing) nations based on Common But Differentiated Responsibilities (CBDR-RC).</td>
        </tr>
        <tr>
          <td><strong>Kyoto Protocol</strong></td>
          <td>1997 (COP 3) / In force 2005</td>
          <td><strong>Legally binding emission reduction targets</strong> for Annex I developed countries (average 5.2% reduction below 1990 levels).</td>
          <td>Introduced 3 Market Mechanisms: <strong>Clean Development Mechanism (CDM)</strong>, <strong>Joint Implementation (JI)</strong>, and <strong>International Emissions Trading (Carbon Credits)</strong>.</td>
        </tr>
        <tr>
          <td><strong>Paris Agreement</strong></td>
          <td>2015 (COP 21)</td>
          <td>Legally binding global treaty replacing Kyoto Protocol; bottom-up architecture via <strong>Nationally Determined Contributions (NDCs)</strong>.</td>
          <td>Goal: Hold global warming to <strong>well below $2.0^\circ\text{C}$</strong> above pre-industrial levels, pursuing efforts to limit rise to <strong>$1.5^\circ\text{C}$</strong>. Net-zero greenhouse gas neutrality in second half of 21st century. India committed to <strong>Net-Zero by 2070</strong> at COP 26 (Panchamrit targets).</td>
        </tr>
        <tr>
          <td><strong>Montreal Protocol</strong></td>
          <td>1987 / In force 1989</td>
          <td>Phase-out of Ozone Depleting Substances (ODS: CFCs, Halons, Carbon Tetrachloride).</td>
          <td><strong>Most universally ratified treaty in UN history!</strong> <strong>Kigali Amendment (2016)</strong> phases down Hydrofluorocarbons (HFCs - potent greenhouse gases).</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
""",
    "geo-el-nino-la-nina-iod": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Ocean-Atmosphere Coupled Dynamics: ENSO & Indian Ocean Dipole</h3>
  <p>The global climate system is governed by massive ocean-atmosphere teleconnections across tropical ocean basins, primarily the <strong>El Niño-Southern Oscillation (ENSO)</strong> in the Pacific and the <strong>Indian Ocean Dipole (IOD)</strong> in the Indian Ocean.</p>

  <h4>Normal (Neutral) Walker Circulation in the Tropical Pacific</h4>
  <ul>
    <li>Strong easterly trade winds push warm equatorial surface waters westward, accumulating a deep pool of warm water (&gt;28°C) in the <strong>Western Pacific Warm Pool</strong> (around Indonesia/Northern Australia), raising sea level ~0.5 m higher than eastern Pacific.</li>
    <li>Deep atmospheric convection, intense cloudiness, and heavy rainfall occur over Indonesia and Northern Australia (the upward limb of the Walker Cell).</li>
    <li>Along the coast of Peru and Ecuador (Eastern Pacific), cold, nutrient-rich deep ocean water wells up (<strong>Peruvian / Humboldt Current Upwelling</strong>), lowering SST to ~20°C, sustaining world's richest anchovy fisheries and creating arid desert coastal conditions (Atacama Desert). The descending limb of the Walker cell ensures bone-dry stability.</li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. El Niño vs La Niña: The Extremes</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Diagnostic Feature</th>
          <th>El Niño (Warm Phase / "The Christ Child")</th>
          <th>La Niña (Cold Phase / "The Little Girl")</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Trade Wind Strength</strong></td>
          <td><strong>Weakens drastically or reverses</strong> into westerlies.</td>
          <td><strong>Strengthens abnormally</strong> (vigorous easterly trades).</td>
        </tr>
        <tr>
          <td><strong>SST in Eastern Pacific (Peru Coast)</strong></td>
          <td>Abnormally warm (&gt;+0.5°C to +3°C above average); thermocline deepens to 150 m.</td>
          <td>Abnormally cold (&lt;-0.5°C to -2°C below average); thermocline rises close to surface.</td>
        </tr>
        <tr>
          <td><strong>Peruvian Upwelling & Marine Ecology</strong></td>
          <td><strong>Upwelling shuts down</strong>; catastrophic collapse of plankton, anchovy fisheries, and seabird populations.</td>
          <td>Intensified upwelling; explosive boom in phytoplankton and marine fisheries.</td>
        </tr>
        <tr>
          <td><strong>Weather in Peru & South America</strong></td>
          <td>Torrential rains, severe flash flooding, mudslides along arid Peruvian/Ecuadorian coast.</td>
          <td>Extreme drought and cold along the South American coast.</td>
        </tr>
        <tr>
          <td><strong>Weather in Indonesia & Australia</strong></td>
          <td>Descending air $\rightarrow$ Severe drought, brushfires, and forest fires across Indonesia and Australia.</td>
          <td>Torrential rainfall, severe flooding across Queensland and Eastern Australia.</td>
        </tr>
        <tr>
          <td><strong>Impact on Indian South-West Monsoon</strong></td>
          <td><strong>Adverse / Drought:</strong> Shifts atmospheric convective rising limb away from India; historically associated with <strong>weak monsoons, delayed onset, and severe agricultural droughts</strong> in India (e.g. 1972, 1987, 2002, 2009, 2015).</td>
          <td><strong>Favorable / Excess Rain:</strong> Enhances monsoon convective circulation; associated with <strong>normal to surplus/heavy monsoon rainfall</strong> and localized flood events in India.</td>
        </tr>
        <tr>
          <td><strong>Southern Oscillation Index (SOI)</strong></td>
          <td><strong>Negative</strong> (Tahiti pressure is lower than Darwin, Australia).</td>
          <td><strong>Positive</strong> (Tahiti pressure is substantially higher than Darwin).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-water" style="color: var(--accent);"></i> 3. The Indian Ocean Dipole (IOD)</h3>
  <p>The Indian Ocean Dipole (IOD), discovered by Saji et al. in 1999, is the difference in sea surface temperatures between the western tropical Indian Ocean (Arabian Sea) and the eastern tropical Indian Ocean (south of Indonesia):</p>
  <ul>
    <li><strong>Positive IOD (+IOD):</strong>
      <ul>
        <li>Western Indian Ocean (Arabian Sea near Somalia) becomes <strong>abnormally warm</strong>.</li>
        <li>Eastern Indian Ocean (near Sumatra/Java) becomes <strong>abnormally cold</strong>.</li>
        <li><em>Impact:</em> Generates heavy convection over the Arabian Sea, pumping massive moisture into the Indian subcontinent. <strong>A positive IOD acts as a buffer and can neutralize the drought-inducing effects of El Niño!</strong> (e.g., 1997 witnessed one of the strongest El Niños in history, but India had normal monsoon rainfall due to a co-occurring record Positive IOD!).</li>
      </ul>
    </li>
    <li><strong>Negative IOD (-IOD):</strong>
      <ul>
        <li>Western Indian Ocean becomes cold; Eastern Indian Ocean near Indonesia becomes abnormally warm.</li>
        <li><em>Impact:</em> Deprives the Indian monsoon of moisture, exacerbating rainfall deficits and causing heavy rain/floods in Indonesia/Australia.</li>
      </ul>
    </li>
  </ul>
</div>
""",

    "geo-ocean-floor-relief": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Bathymetric Topography: Hypsographic Profile of the Oceans</h3>
  <p>The oceans cover <strong>361 million square kilometers (~70.8%)</strong> of Earth's surface with an average depth of <strong>3,700 meters</strong> (compared to mean continental elevation of only 840 meters). Ocean floors are divided into four primary physiographic provinces.</p>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. The Four Primary Bathymetric Zones</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Oceanic Province</th>
          <th>Depth Range</th>
          <th>Average Gradient</th>
          <th>Area (% of Oceans)</th>
          <th>Geological Nature & Economic Significance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Continental Shelf</strong></td>
          <td>0 to 130–200 meters</td>
          <td>Extremely gentle: <strong>$1^\circ$ (or 1:500)</strong>.</td>
          <td><strong>7.5%</strong></td>
          <td>Submerged extension of the continent underlain by continental granitic crust (SIAL). Width varies from almost zero (off Chile/Andes) to &gt;1,500 km (Siberian Shelf in Arctic Ocean).<br>
          <em>Economic Significance:</em>
          • <strong>World's Richest Fishing Grounds:</strong> Shallow sunlight penetration (photic zone) promotes plankton proliferation (Dogger Bank North Sea, Grand Banks Newfoundland).<br>
          • <strong>Offshore Petroleum & Natural Gas:</strong> Over 90% of marine oil reserves (Mumbai High India, Persian Gulf, North Sea).<br>
          • Source of placer minerals (monazite sands of Kerala).</td>
        </tr>
        <tr>
          <td><strong>Continental Slope</strong></td>
          <td>200 to 3,000 meters</td>
          <td>Steep: <strong>$2^\circ - 5^\circ$</strong>.</td>
          <td><strong>8.5%</strong></td>
          <td>The true structural boundary between continental sialic crust and oceanic basaltic crust. Deeply furrowed by massive <strong>Submarine Canyons</strong> carved by high-density underwater turbidity currents (e.g. Hudson Canyon, Indus Canyon off Karachi, Ganges Canyon/Swatch of No Ground off Bengal).</td>
        </tr>
        <tr>
          <td><strong>Continental Rise</strong></td>
          <td>3,000 to 4,000 meters</td>
          <td>Very gentle: <strong>$0.5^\circ - 1^\circ$</strong>.</td>
          <td><strong>5.0%</strong></td>
          <td>Thick wedge of terrigenous sediment deposited at the foot of the continental slope by turbidity currents (deep-sea fan deposits). Merges into the abyssal plain.</td>
        </tr>
        <tr>
          <td><strong>Deep Sea Abyssal Plain</strong></td>
          <td>3,000 to 6,000 meters</td>
          <td>Near-zero (&lt;0.1°), flattest regions on Earth.</td>
          <td><strong>75.9% (Largest division!)</strong></td>
          <td>Extensive, horizontally flat ocean floor covered by pelagic sediments (red clay, biogenic oozes: radiolarian, diatom, foraminiferal/globigerina). Rich in <strong>Polymetallic Nodules (PMNs)</strong> containing Manganese, Nickel, Copper, and Cobalt (India has mining rights in Central Indian Ocean Basin allocated by UN-ISA).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-water" style="color: var(--accent);"></i> 3. Minor Oceanic Topographic Features & Deepest Trenches</h3>
  <ul>
    <li><strong>Oceanic Deeps / Trenches:</strong> Narrow, steep-sided V-shaped depressions created by subduction at convergent plate boundaries.
      <ul>
        <li><strong>Mariana Trench (Challenger Deep):</strong> Pacific Ocean near Guam – <strong>10,994 meters deep</strong> (deepest point on Earth; Everest at 8,848m could be dropped inside with &gt;2 km of water above it!).</li>
        <li><strong>Java / Sunda Trench:</strong> Indian Ocean – ~7,450 meters deep (deepest in Indian Ocean).</li>
        <li><strong>Puerto Rico Trench (Milwaukee Deep):</strong> Atlantic Ocean – ~8,605 meters deep (deepest in Atlantic).</li>
        <li><strong>Molley Deep:</strong> Arctic Ocean – ~5,550 meters deep.</li>
      </ul>
    </li>
    <li><strong>Mid-Oceanic Ridge System:</strong> Continuous, 65,000 km interconnected mountain chain traversing world oceans. Formed by basaltic volcanism along divergent boundaries. Features a central rift valley. (e.g., <strong>Mid-Atlantic Ridge</strong>: S-shaped ridge running from Iceland to Bouvet Island; Carlsberg Ridge in Indian Ocean).</li>
    <li><strong>Seamounts & Guyots:</strong> Isolated volcanic peaks rising from abyssal plain. If summit is sharp and &gt;1,000 m high = <strong>Seamount</strong>. If summit has been eroded flat by wave action and subsequently submerged = <strong>Guyot (Tablemount)</strong>.</li>
  </ul>
</div>
""",

    "geo-ocean-temperature-salinity": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Chemical Oceanography: Temperature, Salinity & Density Mechanics</h3>
  <p>The physical properties of ocean water govern global thermohaline circulation (the "Global Ocean Conveyor Belt"), deep water formation, and marine biogeography.</p>

  <h4>Vertical Stratification of Ocean Temperature</h4>
  <ul>
    <li><strong>Surface Layer (Epilimnion):</strong> 0 – 200 m depth. Warm, well-mixed water ($20^\circ - 26^\circ\text{C}$ in tropics) driven by winds and waves.</li>
    <li><strong>Thermocline:</strong> 200 – 1,000 m depth. Boundary zone of <strong>extremely rapid temperature decrease with depth</strong>. Acts as an impenetrable density barrier separating warm surface waters from dense, cold abyssal water.</li>
    <li><strong>Deep Abyssal Layer (Hypolimnion):</strong> 1,000 m to ocean floor. Near-freezing, cold ($1^\circ - 3^\circ\text{C}$) water maintained by sinking polar water masses.</li>
  </ul>

  <h4>Ocean Salinity: Chemistry & Controlling Factors</h4>
  <p>Salinity ($S$) is the total mass of dissolved inorganic solid material in grams contained in 1,000 grams of seawater, expressed in <strong>parts per thousand (‰ or ppt)</strong>. Average ocean salinity is <strong>35‰ (35 g/kg)</strong>.</p>
  <ul>
    <li><strong>Major Dissolved Ions (Dittmar's Principle of Constant Proportions):</strong>
      $$\text{Chloride } (Cl^-) \, 55.0\% > \text{Sodium } (Na^+) \, 30.6\% > \text{Sulfate } (SO_4^{2-}) \, 7.7\% > \text{Magnesium } (Mg^{2+}) \, 3.7\% > \text{Calcium } (Ca^{2+}) \, 1.2\% > \text{Potassium } (K^+) \, 1.1\%$$
    </li>
    <li><strong>Controlling Mechanisms:</strong>
      <ul>
        <li><strong>Evaporation:</strong> Increases salinity (removes fresh water, concentrates salts).</li>
        <li><strong>Precipitation:</strong> Decreases salinity (dilutes salts).</li>
        <li><strong>River Inflow:</strong> Lowers salinity at river mouths (e.g. Bay of Bengal has lower salinity ~30–32‰ than Arabian Sea ~36–37‰ due to huge Ganga-Brahmaputra-Irrawaddy fresh river runoff!).</li>
        <li><strong>Freezing & Thawing:</strong> Sea ice freezing excludes salt (brine rejection), increasing salinity of underlying water; thawing ice dilutes salinity.</li>
      </ul>
    </li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. World Extremes of Salinity</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Water Body</th>
          <th>Salinity Level</th>
          <th>Geographic Location</th>
          <th>Underlying Physical / Climatic Cause</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Lake Van</strong></td>
          <td><strong>330‰</strong></td>
          <td>Turkey</td>
          <td>Enclosed endorheic basin, intense evaporation, zero river outflow. Highest recorded salinity!</td>
        </tr>
        <tr>
          <td><strong>Dead Sea</strong></td>
          <td><strong>238‰</strong></td>
          <td>Jordan / Israel rift valley</td>
          <td>Lowest point on Earth (-430 m); extreme subtropical desert evaporation; high density allows humans to float effortlessly without sinking!</td>
        </tr>
        <tr>
          <td><strong>Great Salt Lake</strong></td>
          <td><strong>220‰</strong></td>
          <td>Utah, USA</td>
          <td>Terminal lake in arid Great Basin with no ocean outlet.</td>
        </tr>
        <tr>
          <td><strong>Red Sea</strong></td>
          <td><strong>40 – 42‰</strong></td>
          <td>Between Africa and Arabia</td>
          <td>Enclosed tropical sea; extreme evaporation, zero major river influx, minimal rainfall. Highest salinity among open seas!</td>
        </tr>
        <tr>
          <td><strong>Baltic Sea</strong></td>
          <td><strong>3 – 7‰ (Extremely Low)</strong></td>
          <td>Northern Europe</td>
          <td>Enclosed shallow sea; low evaporation, massive fresh river discharge and melting snow.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
""",

    "geo-ocean-currents-gyres": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Dynamic Oceanography: Surface Circulation & Thermohaline Conveyor</h3>
  <p>Ocean currents are continuous, directed movements of seawater generated by forces acting upon the water: <strong>Wind stress (Trade winds & Westerlies), Coriolis force, Temperature & Salinity density differentials (Thermohaline), and Continental boundary deflection</strong>.</p>
  <ul>
    <li><strong>Warm Currents:</strong> Flow from equatorial regions toward high polar latitudes. Flow on the <strong>Western margins of ocean basins</strong> in low/mid latitudes (Eastern margins of continents). Bring warm, humid maritime air, enhancing coastal rainfall (e.g. Gulf Stream, Kuroshio).</li>
    <li><strong>Cold Currents:</strong> Flow from polar/subpolar regions toward the equator, or arise via deep coastal upwelling. Flow on the <strong>Eastern margins of ocean basins</strong> in low/mid latitudes (Western margins of continents). Chill the air, causing atmospheric stability and complete suppression of rain $\rightarrow$ directly creates the <strong>coastal hyper-arid trade-wind deserts</strong> (Atacama, Namib, Kalahari, Mojave, Western Australian desert)!</li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Master Current Matrix across Atlantic, Pacific & Indian Oceans</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Ocean Basin</th>
          <th>Warm Ocean Currents</th>
          <th>Cold Ocean Currents</th>
          <th>Crucial Geographical & Defence Exam Markers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Atlantic Ocean</strong></td>
          <td>
            • <strong>North Equatorial Current</strong><br>
            • <strong>Gulf Stream:</strong> World's most powerful current (~100 Sv transport), flows NE off Florida coast.<br>
            • <strong>North Atlantic Drift:</strong> Keeps NW European ports (Murmansk in Arctic Russia, Bergen Norway, UK) <strong>ice-free all winter</strong>!<br>
            • <strong>Brazil Current</strong> (South Atlantic).
          </td>
          <td>
            • <strong>Canary Current:</strong> Desiccates Sahara Desert.<br>
            • <strong>Labrador Current:</strong> Cold Arctic current; brings icebergs (sank Titanic); meets warm Gulf Stream at <strong>Newfoundland / Grand Banks</strong> causing dense maritime fogs and world's richest fishing bank!<br>
            • <strong>Benguela Current:</strong> Desiccates Namib and Kalahari deserts (SW Africa).<br>
            • <strong>Falkland Current</strong> (South Atlantic).
          </td>
          <td>
            <strong>Sargasso Sea:</strong> Only sea in the world with <strong>NO LAND BOUNDARIES</strong>! Enclosed by 4 currents: Gulf Stream, North Atlantic Drift, Canary Current, North Equatorial Current. Filled with golden-brown floating <em>Sargassum</em> seaweed; calm eye of North Atlantic Gyre.
          </td>
        </tr>
        <tr>
          <td><strong>Pacific Ocean</strong></td>
          <td>
            • <strong>Kuroshio (Japan Current):</strong> Warm, dark blue current flowing north along Japan.<br>
            • <strong>North Pacific Drift</strong><br>
            • <strong>East Australian Current (EAC)</strong><br>
            • <strong>Equatorial Counter Current</strong>
          </td>
          <td>
            • <strong>Oyashio (Kuril Current):</strong> Meets warm Kuroshio off Hokkaido/Honshu, creating rich fishing grounds and thick navigational fogs.<br>
            • <strong>California Current:</strong> Cools western USA; creates Mojave desert.<br>
            • <strong>Peru / Humboldt Current:</strong> Cold upwelling along Chile/Peru; creates hyper-arid <strong>Atacama Desert</strong>.
          </td>
          <td>
            Meeting of warm Kuroshio + cold Oyashio mirrors the Gulf Stream + Labrador collision in creating premier global fisheries.
          </td>
        </tr>
        <tr>
          <td><strong>Indian Ocean</strong></td>
          <td>
            • <strong>Mozambique Current & Agulhas Current:</strong> Warm currents hugging East African coast.<br>
            • <strong>South Equatorial Current</strong><br>
            • <strong>South-West Monsoon Drift:</strong> Clockwise flow in summer.
          </td>
          <td>
            • <strong>West Australian Current:</strong> Cold current along Western Australia; creates Great Victoria and Gibson Deserts.<br>
            • <strong>North-East Monsoon Drift:</strong> Counter-clockwise flow in winter.
          </td>
          <td>
            <strong>Only ocean with seasonal reversal of surface currents!</strong> In summer (SW Monsoon), currents flow clockwise; in winter (NE Monsoon), currents reverse completely to counter-clockwise!
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
""",

    "geo-ocean-tides-waves-coral-reefs": """
<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent);"></i> 1. Marine Dynamics: Gravitational Tides & Coral Ecosystems</h3>
  <p>Tides are the rhythmic, periodic vertical rise and fall of ocean sea levels caused by the gravitational differential attractive forces exerted by the Moon and the Sun, combined with Earth's centrifugal rotation force.</p>

  <h4>The Astronomical Physics of Tides</h4>
  <ul>
    <li>The Moon's tide-generating force is <strong>approximately 2.17 times greater than the Sun's</strong>, despite the Sun's immense mass ($333,000\times$ Earth), because gravitational tidal force is inversely proportional to the <strong>cube of distance</strong> ($F_{\text{tide}} \propto \frac{M}{d^3}$).</li>
    <li>Two tidal bulges form simultaneously on Earth:
      <ol>
        <li>Direct tidal bulge on the side facing the Moon (direct gravitational attraction).</li>
        <li>Indirect antipodal tidal bulge on the opposite side away from the Moon (centrifugal reaction force of Earth-Moon barycentre rotation).</li>
      </ol>
    </li>
    <li>Because the Moon revolves around Earth in the same direction Earth rotates, tidal peaks arrive every <strong>12 hours and 26 minutes</strong> (a complete tidal cycle of two high tides and two low tides takes 24 hours and 52 minutes—a Lunar Tidal Day).</li>
  </ul>

  <h3><i class="fa-solid fa-table" style="color: var(--accent);"></i> 2. Spring Tides vs Neap Tides</h3>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Tidal Regime</th>
          <th>Astronomical Alignment</th>
          <th>Moon Phases</th>
          <th>Net Gravitational Force</th>
          <th>Tidal Range (High vs Low)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Spring Tides</strong></td>
          <td><strong>Syzygy (Linear alignment):</strong> Sun, Moon, and Earth align in a straight line ($180^\circ$).</td>
          <td>Occurs twice monthly: on <strong>New Moon (Conjunction)</strong> and <strong>Full Moon (Opposition)</strong>.</td>
          <td>Solar and Lunar gravitational forces reinforce each other (additive vector sum: $F_M + F_S$).</td>
          <td><strong>Maximum Tidal Range:</strong> Highest high tides and lowest low tides (~20% higher than average).</td>
        </tr>
        <tr>
          <td><strong>Neap Tides</strong></td>
          <td><strong>Quadrature (Right-angle alignment):</strong> Moon is at $90^\circ$ right angle to the Sun-Earth line.</td>
          <td>Occurs twice monthly: during <strong>First Quarter</strong> and <strong>Third (Last) Quarter</strong> moons.</td>
          <td>Solar gravitational force partially counteracts lunar pull (subtractive vector: $F_M - F_S$).</td>
          <td><strong>Minimum Tidal Range:</strong> Lowest high tides and highest low tides (~20% lower than average).</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3><i class="fa-solid fa-gem" style="color: var(--accent);"></i> 3. Coral Reef Ecosystems & Geomorphology</h3>
  <p>Corals are marine colonial invertebrates (polyps) of class Anthozoa (phylum Cnidaria) that secrete hard calcium carbonate ($CaCO_3$, aragonite) exoskeletons. They live in an obligate endosymbiotic relationship with microscopic photosynthetic dinoflagellate algae called <strong>Zooxanthellae</strong> (algae provide 90% of coral's metabolic energy via photosynthesis; coral provides sheltered habitat and metabolic $CO_2/N$).</p>
  <ul>
    <li><strong>Optimal Ecological Conditions for Coral Growth:</strong>
      <ul>
        <li>Water temperature between <strong>$20^\circ\text{C}$ and $25^\circ\text{C}$</strong> (cannot survive &lt;18°C or &gt;30°C for prolonged periods).</li>
        <li>Shallow photic zone depth (&lt;50 meters) for sunlight penetration.</li>
        <li>Normal marine salinity ($27‰ - 40‰$). Corals <em>cannot survive</em> near large river mouths with muddy/freshwater silt (e.g. absent along Ganga-Brahmaputra delta).</li>
        <li>Clear, silt-free, well-oxygenated water with moderate wave action.</li>
      </ul>
    </li>
    <li><strong>The Three Morphological Reef Types (Darwin's Subsidence Theory):</strong>
      <ol>
        <li><strong>Fringing Reef:</strong> Directly fringes the coastline of a continent or volcanic island with no lagoon or only a narrow shallow boat channel (e.g., Andaman & Nicobar, Gulf of Mannar, Gulf of Kutch).</li>
        <li><strong>Barrier Reef:</strong> Separated from mainland/island coast by a deep, wide lagoon (up to several kilometers). Largest in the world: <strong>Great Barrier Reef of Australia (NE coast, &gt;2,300 km long)</strong>.</li>
        <li><strong>Atoll:</strong> Ring-shaped circular/horseshoe coral reef surrounding a central deep lagoon with no central island (formed when an underlying volcanic island subsides completely). Classic Example: <strong>Lakshadweep Islands (India)</strong>, Maldives.</li>
      </ol>
    </li>
    <li><strong>Coral Bleaching:</strong> When sea surface temperatures rise &gt;1–2°C above seasonal summer maximums for prolonged weeks (or due to ocean acidification / pollution), heat stress causes coral polyps to expel their intracellular zooxanthellae. The white calcium carbonate skeleton becomes visible ("bleached"). If thermal stress persists, the corals starve and die.</li>
  </ul>
</div>
"""
}

print(f"Loaded masterclass Part 3 with {len(GEO_MASTERCLASS_PART3)} chapters.")
