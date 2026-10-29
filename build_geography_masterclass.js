/**
 * build_geography_masterclass.js
 * 
 * Expands Geography from 15 broad chapters into 42 granular, high-yield chapters
 * covering the complete NCERT Class XI & XII, Majid Husain, and GC Leong defence curriculum.
 * Ingests all 1,584 extracted geography notes and MCQs from notes_database.json.
 */

const fs = require('fs');

console.log('--- Step 1: Defining the 42 Granular Geography Chapters ---');

const GEOGRAPHY_CHAPTERS_DEF = [
  // Section A: Geomorphology & Earth Systems
  {
    id: "universe-solar-system",
    title: "The Universe, Solar System & Earth Motions",
    icon: "fa-solid fa-sun",
    desc: "Cosmology, Big Bang Theory, Solar System, Planets, Asteroid Belt, Kuiper Belt, Earth Rotation, Revolution, Seasons, Solstices, Equinoxes, Solar & Lunar Eclipses."
  },
  {
    id: "geo-latitudes-longitudes-time",
    title: "Latitudes, Longitudes, Time Zones & Map Projections",
    icon: "fa-solid fa-globe",
    desc: "Parallels of Latitude, Meridians of Longitude, Great Circles, Prime Meridian, Greenwich Mean Time, Indian Standard Time 82.5°E, International Date Line calculation rules, Antipodes, Map Projections."
  },
  {
    id: "geo-earth-interior",
    title: "Interior Structure of the Earth & Discontinuities",
    icon: "fa-solid fa-layer-group",
    desc: "Direct and indirect sources, Seismic waves P and S, Crust SIAL and SIMA, Mantle, Asthenosphere, Core NIFE, Discontinuities: Conrad, Mohorovicic, Repetti, Gutenberg, Lehmann, Earth's Magnetic Field & Geodynamo."
  },
  {
    id: "geo-plate-tectonics-drift",
    title: "Continental Drift, Sea-Floor Spreading & Plate Tectonics",
    icon: "fa-solid fa-arrows-split-up-and-left",
    desc: "Alfred Wegener Continental Drift Theory, Pangaea, Panthalassa, Paleomagnetism, Harry Hess Sea-floor Spreading, Plate Tectonic Theory, Divergent, Convergent, Transform boundaries, Major and Minor tectonic plates, Pacific Ring of Fire."
  },
  {
    id: "geo-earthquakes-tsunamis",
    title: "Earthquakes, Seismic Waves & Tsunamis",
    icon: "fa-solid fa-house-crack",
    desc: "Elastic Rebound Theory, Focus, Epicentre, Body waves P and S, Surface waves Love and Rayleigh, P-wave and S-wave shadow zones, Seismographs, Richter vs Mercalli intensity scales, Tsunami generation physics and early warning systems."
  },
  {
    id: "geo-volcanoes-intrusive-forms",
    title: "Volcanism, Volcanic Landforms & Deccan Traps",
    icon: "fa-solid fa-volcano",
    desc: "Volcano classification: Shield, Composite/Stratovolcano, Caldera, Flood Basalt, Mid-Ocean Ridge; Intrusive igneous landforms: Batholith, Laccolith, Lopolith, Phacolith, Sill, Sheet, Dyke; Hotspot volcanism, Reunion hotspot, Deccan Traps."
  },
  {
    id: "geo-rocks-minerals-cycle",
    title: "Rocks, Major Minerals & The Rock Cycle",
    icon: "fa-solid fa-gem",
    desc: "Major rock-forming minerals: Feldspar, Quartz, Pyroxene, Amphibole, Mica, Olivine; Igneous rocks: Plutonic granite vs Volcanic basalt; Sedimentary rocks: Mechanically, organically, chemically formed; Metamorphic rocks: Foliated vs non-foliated, Thermal and dynamic metamorphism; The Rock Cycle."
  },
  {
    id: "geo-weathering-mass-wasting",
    title: "Weathering, Mass Wasting & Soil Pedogenesis",
    icon: "fa-solid fa-mountain",
    desc: "Physical weathering: Exfoliation, frost shattering, thermal expansion; Chemical weathering: Oxidation, carbonation, hydration, solution; Biological weathering; Mass wasting: Soil creep, mudflow, landslide, debris avalanche, slump, solifluction; Pedogenesis factors."
  },
  {
    id: "geo-fluvial-landforms",
    title: "Fluvial Geomorphology & River Valley Landforms",
    icon: "fa-solid fa-water",
    desc: "River profile, Upper youth stage: V-shaped valleys, gorges, canyons, waterfalls, potholes, river piracy; Middle mature stage: Meanders, oxbow lakes, alluvial fans; Lower old stage: Floodplains, natural levees, braided channels, deltas: arcuate, bird's foot, estuarine."
  },
  {
    id: "geo-aeolian-glacial-karst-coastal",
    title: "Aeolian, Glacial, Karst & Coastal Landforms",
    icon: "fa-solid fa-wind",
    desc: "Wind erosion and deposition: Barchans, Seifs, Loess, Yardangs, Mushroom rocks, Zeugen; Glacial landforms: Cirques, Aretes, Horns, U-shaped valleys, Hanging valleys, Moraines, Drumlins, Eskers, Fjords; Karst topography: Sinkholes, Doline, Polje, Stalactites, Stalagmites; Coastal: Sea cliffs, Caves, Arches, Stacks, Spits, Tombolos, Barrier islands."
  },

  // Section B: Climatology & Atmospheric Dynamics
  {
    id: "earth-atmosphere",
    title: "Atmospheric Structure, Composition & Heat Budget",
    icon: "fa-solid fa-cloud",
    desc: "Atmospheric composition: Nitrogen, Oxygen, Argon, Carbon dioxide, Water vapor, Ozone; Layers: Troposphere, Tropopause, Stratosphere, Mesosphere, Ionosphere/Thermosphere, Exosphere; Solar insolation, Albedo of Earth, Heat budget balance, Normal lapse rate, Temperature inversion."
  },
  {
    id: "geo-atmospheric-pressure-planetary-winds",
    title: "Atmospheric Pressure Belts & Global Wind Systems",
    icon: "fa-solid fa-compass",
    desc: "Pressure gradient force, Coriolis force, Ferrel's law; Global pressure belts: Equatorial Low ITCZ Doldrums, Subtropical High Horse Latitudes, Subpolar Low, Polar High; Planetary winds: NE and SE Trade Winds, Westerlies, Polar Easterlies; Geostrophic wind."
  },
  {
    id: "geo-local-winds-jet-streams",
    title: "Local Winds of the World & Jet Streams",
    icon: "fa-solid fa-wind",
    desc: "Warm local winds: Loo (India), Chinook (Rockies snow-eater), Foehn (Alps), Sirocco (Sahara to Mediterranean blood rain), Harmattan (Doctor wind West Africa), Khamsin; Cold local winds: Mistral (France), Bora (Adriatic), Blizzard, Pampero; Land and sea breezes, Mountain and valley winds; Jet streams: Polar front and subtropical westerly jet streams, Rossby waves."
  },
  {
    id: "geo-humidity-clouds-precipitation",
    title: "Atmospheric Humidity, Cloud Types & Rainfall",
    icon: "fa-solid fa-cloud-showers-heavy",
    desc: "Absolute, specific and relative humidity, Dew point; Forms of condensation: Dew, frost, fog, mist, smog (photochemical vs classical); Cloud classification: High cirrus, Middle alto, Low stratus, Vertical cumulus and cumulonimbus; Rainfall types: Convectional, Orographic relief, Cyclonic frontal."
  },
  {
    id: "geo-cyclones-anticyclones-fronts",
    title: "Air Masses, Fronts, Tropical & Temperate Cyclones",
    icon: "fa-solid fa-tornado",
    desc: "Air masses classification: cP, mP, cT, mT; Fronts: Cold front, warm front, stationary front, occluded front; Temperate extra-tropical cyclones: Polar front theory, lifecycle; Tropical cyclones: Necessary conditions (27°C sea temperature, Coriolis force), Eye, Eye wall, Spiral bands, Storm surges, Regional names: Typhoon, Hurricane, Willy-Willy, Cyclone; Anticyclones."
  },
  {
    id: "geo-world-climatic-regions-koppen",
    title: "World Climatic Regions & Köppen Classification",
    icon: "fa-solid fa-temperature-half",
    desc: "Köppen climate classification scheme: Group A Tropical (Af Equatorial, Am Monsoon, Aw Savanna), Group B Dry (BWh Hot desert, BWk Cold desert, BSh/BSk Steppe), Group C Warm temperate (Cs Mediterranean winter rain, Cw China type, Cf Marine West coast), Group D Continental (Df/Dw Taiga Boreal), Group E Polar (ET Tundra, EF Ice cap); Biomes and natural vegetation."
  },
  {
    id: "geo-climate-change-global-warming",
    title: "Climate Change, Global Warming & Ozone Depletion",
    icon: "fa-solid fa-smog",
    desc: "Natural vs anthropogenic greenhouse effect, Carbon dioxide, Methane, Nitrous oxide, Chlorofluorocarbons, Global Warming Potential, Ozone layer depletion, Polar stratospheric clouds, Montreal Protocol, Kigali Amendment, IPCC reports, Urban heat island effect."
  },
  {
    id: "geo-el-nino-la-nina-iod",
    title: "El Niño, La Niña, ENSO & Indian Ocean Dipole",
    icon: "fa-solid fa-water",
    desc: "Walker circulation, Normal conditions in tropical Pacific, El Niño warm phase, Suppression of Peruvian upwelling, Southern Oscillation Index SOI, La Niña cold phase, ENSO cycle, Indian Ocean Dipole positive and negative phases, Madden-Julian Oscillation MJO, Direct impacts on Indian monsoon."
  },

  // Section C: Oceanography
  {
    id: "geo-ocean-floor-relief",
    title: "Ocean Floor Topography & Major Oceanic Relief",
    icon: "fa-solid fa-water",
    desc: "Divisions of ocean floor: Continental Shelf (fishing banks, petroleum reserves), Continental Slope, Continental Rise, Abyssal Deep Sea Plains, Oceanic Deeps and Trenches (Mariana, Puerto Rico, Java/Sunda), Mid-Oceanic Ridges (Mid-Atlantic Ridge, Carlsberg Ridge), Guyots and Seamounts, Submarine Canyons."
  },
  {
    id: "geo-ocean-temperature-salinity",
    title: "Ocean Water Temperature, Salinity & Density",
    icon: "fa-solid fa-flask-vial",
    desc: "Horizontal and vertical distribution of ocean temperature, Thermocline; Salinity factors: Evaporation, precipitation, river runoff, freezing; Halocline; Highest salinity water bodies: Lake Van, Dead Sea, Great Salt Lake, Red Sea, Mediterranean; Pycnocline density stratification, Ocean water masses."
  },
  {
    id: "geo-ocean-currents-gyres",
    title: "Ocean Currents of Atlantic, Pacific & Indian Oceans",
    icon: "fa-solid fa-sailboat",
    desc: "Forces driving currents: Wind, density, temperature, Coriolis, land configuration; Atlantic Ocean: Gulf Stream, North Atlantic Drift, Canaries, Labrador, Benguela, Brazil, Falkland; Pacific Ocean: Kuroshio, Oyashio, California, Humboldt/Peru, East Australian; Indian Ocean: Somali current, Agulhas, West Australian, seasonal monsoon reversal; Gyres, Sargasso Sea, Upwelling marine productivity."
  },
  {
    id: "geo-ocean-tides-waves-coral-reefs",
    title: "Tides, Oceanic Waves & Coral Reef Ecosystems",
    icon: "fa-solid fa-fish",
    desc: "Tidal theory: Gravitational pull of Moon and Sun, Spring tides (Syzygy conjunction and opposition), Neap tides (Quadrature), Semi-diurnal, diurnal and mixed tides, Tidal bores; Ocean wave anatomy; Coral Reefs: Ecology, Zooxanthellae symbiosis, Types: Fringing reef, Barrier reef (Great Barrier Reef), Atoll (Lakshadweep), Coral Bleaching triggers."
  },

  // Section D: Indian Physical Geography & Drainage
  {
    id: "geo-india-physiography-himalayas",
    title: "Geology of India & The Northern Himalayas",
    icon: "fa-solid fa-mountain",
    desc: "Geological divisions: Peninsular Shield, Himalayas Extra-Peninsula, Indo-Gangetic Alluvial Plain; Longitudinal zones: Trans-Himalayas (Karakoram, Ladakh, Zaskar), Greater Himalayas (Himadri - Everest, Kanchenjunga, Makalu), Lesser Himalayas (Himachal - Pir Panjal, Dhauladhar, Mussoorie), Shiwaliks (Outer Himalayas, Duns and Duars), Purvanchal (Patkai Bum, Naga, Mizo hills)."
  },
  {
    id: "geo-india-mountain-passes-peaks",
    title: "Strategic Mountain Passes, Peaks & Glaciers of India",
    icon: "fa-solid fa-location-dot",
    desc: "J&K and Ladakh passes: Karakoram, Zoji La, Khardung La, Banihal, Chang La, Photu La; Himachal Pradesh: Rohtang, Shipki La, Baralacha La; Uttarakhand: Lipulekh, Mana, Niti; Sikkim: Nathu La, Jelep La; Arunachal Pradesh: Bomdi La, Dihang, Diphu; Highest peaks: K2, Kanchenjunga, Nanda Devi; Major Glaciers: Siachen (Nubra valley), Baltoro, Biafo, Gangotri, Zemu."
  },
  {
    id: "geo-india-northern-plains-desert",
    title: "The Great Northern Plains & The Thar Desert",
    icon: "fa-solid fa-wheat-awn",
    desc: "Origin and extent of Indo-Gangetic-Brahmaputra plain; Morphological divisions: Bhabar (porous pebble zone, sinking streams), Terai (marshy belt, dense vegetation), Bhangar (older alluvium, calcareous Kankar nodules), Khadar (newer fertile alluvium, annual floods); Deltaic plains, The Great Indian Desert (Thar, Marusthali, Dhrians, Barkhans, Luni river basin, Sambhar salt lake)."
  },
  {
    id: "geo-india-peninsular-plateau",
    title: "The Peninsular Plateau of India (Deccan & Central)",
    icon: "fa-solid fa-volcano",
    desc: "Ancient Gondwanaland shield; Central Highlands: Malwa Plateau, Bundelkhand, Baghelkhand, Chota Nagpur Plateau (Pataliputra mineral heartland, Damodar rift valley), Vindhyas, Satpura Range (Dhupgarh highest peak); Deccan Plateau: Maharashtra plateau (Deccan trap basalt), Karnataka plateau (Malnad and Maidan), Telangana plateau; Meghalaya Karbi Anglong plateau (Shillong peak)."
  },
  {
    id: "geo-india-ghats-coastal-plains",
    title: "Western Ghats, Eastern Ghats & Coastal Plains",
    icon: "fa-solid fa-route",
    desc: "Western Ghats (Sahyadri): Continuous escarpment, UNESCO World Heritage biodiversity hotspot, Anamudi (highest peak in South India), Doddabetta (Nilgiris), Thal Ghat, Bhor Ghat, Pal Ghat gap; Eastern Ghats: Discontinuous, eroded by rivers, Mahendragiri, Jindhagada peak; Coastal Plains: Western coast (Kathiawar, Konkan, Kannad, Malabar - Kayals backwaters), Eastern coast (Utkal, Northern Circars, Coromandel - fertile deltas)."
  },
  {
    id: "geo-india-islands-boundaries",
    title: "Indian Islands, Maritime Zones & Strategic Borders",
    icon: "fa-solid fa-anchor",
    desc: "Andaman and Nicobar Islands: Submerged Arakan Yoma mountain chain, Volcanic Barren Island and Narcondam, Duncan Passage, 10 Degree Channel, Great Nicobar biosphere reserve, Indira Point (6°45'N); Lakshadweep Islands: Atoll coral origin, 9 Degree Channel, 8 Degree Channel (separates Minicoy and Maldives); Land borders: Bangladesh, China, Pakistan, Nepal, Myanmar, Bhutan; Radcliffe, McMahon, Durand lines, Sir Creek."
  },
  {
    id: "geo-india-drainage-himalayan",
    title: "Himalayan Rivers: Indus, Ganga & Brahmaputra Systems",
    icon: "fa-solid fa-water",
    desc: "Antecedent and perennial drainage; Indus System: Origin Bokhar Chu, Jhelum (Verinag, Wular lake), Chenab (Chandra-Bhaga), Ravi, Beas, Satluj (Rakas lake, Bhakra dam), Indus Water Treaty 1960; Ganga System: Bhagirathi and Alaknanda confluence at Devprayag, Panch Prayags, Tributaries: Yamuna, Son, Ramganga, Gomti, Ghaghara, Gandak, Kosi; Brahmaputra System: Tsangpo, Dihang, Majuli river island, Subansiri, Manas, Teesta, Lohit."
  },
  {
    id: "geo-india-drainage-peninsular",
    title: "Peninsular Rivers: East-Flowing & West-Flowing Systems",
    icon: "fa-solid fa-droplet",
    desc: "Superposed and rain-fed drainage; East-flowing rivers: Godavari (Dakshin Ganga, Trimbak, Manjra, Pranhita), Krishna (Mahabaleshwar, Koyna, Tungabhadra, Bhima), Cauvery (Brahmagiri, Sivasamudram falls, Kabini, Bhavani), Mahanadi (Hirakud dam); West-flowing rift valley rivers: Narmada (Amarkantak, Dhuandhar Marble rocks, Sardar Sarovar), Tapi (Betul), Sabarmati, Mahi (crosses Tropic of Cancer twice), Periyar, Mandovi."
  },

  // Section E: Climate, Soils & Biogeography of India
  {
    id: "geo-india-monsoon-system",
    title: "The Indian Monsoon: Mechanism, Seasons & Distribution",
    icon: "fa-solid fa-cloud-bolt",
    desc: "Thermal and dynamic theories of monsoon, Differential heating of land and sea, Tibetan plateau heating, Tropical Easterly Jet, Mascarene High pressure cell; South-West Monsoon: Arabian Sea branch and Bay of Bengal branch, Burst of monsoon, Break in monsoon; Retreating Monsoon (North-East Monsoon): October Heat, Cyclone activity, Tamil Nadu coastal rainfall; Western disturbances."
  },
  {
    id: "geo-india-soils-classification",
    title: "Soils of India: Classification, Characteristics & Erosion",
    icon: "fa-solid fa-seedling",
    desc: "ICAR 8-fold classification: Alluvial soils (40% area, Khadar vs Bhangar, rich in potash, poor in nitrogen/phosphorus), Black Regur soils (Deccan trap, self-ploughing, montmorillonite clay, cotton soil), Red and Yellow soils (crystalline metamorphic rocks, ferric oxide), Laterite soils (leached, bauxite/iron rich, plantation crops), Arid Desert soils, Saline Alkaline soils (Kallar/Reh), Peaty organic soils, Mountain forest soils; Soil erosion and conservation."
  },
  {
    id: "geo-india-natural-vegetation-forests",
    title: "Natural Vegetation of India & Forest Report (ISFR)",
    icon: "fa-solid fa-tree",
    desc: "Champion & Seth forest types: Tropical Wet Evergreen (Western Ghats, NE, Ebony, Mahogany, Rosewood), Tropical Moist Deciduous (Teak, Sal, Sandalwood), Tropical Dry Deciduous (most widespread, Tendu, Palas, Bel), Tropical Thorn & Scrub, Montane Subtropical and Temperate forests (Chir Pine, Deodar, Oak), Mangrove Tidal forests (Sundarbans, Heritiera fomes); India State of Forest Report ISFR forest cover statistics."
  },
  {
    id: "geo-india-biosphere-wildlife",
    title: "Biosphere Reserves, National Parks & Ramsar Sites",
    icon: "fa-solid fa-shield-cat",
    desc: "Wildlife Protection Act 1972, Project Tiger 1973, Project Elephant 1992; 18 Biosphere Reserves of India (Nilgiri, Gulf of Mannar, Sundarbans, Nanda Devi, Nokrek, Simlipal, Pachmarhi, Great Nicobar under UNESCO MAB); Famous National Parks (Jim Corbett, Kaziranga, Keoladeo, Gir, Ranthambore, Bandipur, Periyar); Ramsar Wetland Sites (Chilika, Vembanad, Loktak, Sambhar lake, Renuka wetland)."
  },
  {
    id: "geo-india-lakes-water-resources",
    title: "Lakes, Waterfalls & Multipurpose River Valley Projects",
    icon: "fa-solid fa-faucet-drip",
    desc: "Freshwater lakes: Wular (tectonic), Dal, Loktak (Keibul Lamjao floating national park, Phumdis), Nainital, Kolleru; Saltwater and lagoon lakes: Chilika (largest brackish lagoon), Pulicat, Sambhar (largest inland saline lake), Lonar (meteor impact crater lake); Major Waterfalls: Kunchikal, Jog/Gersoppa, Shivanasamudra, Dudhsagar; Multipurpose projects: Bhakra-Nangal, Tehri (highest), Hirakud (longest), Sardar Sarovar, DVC, Ken-Betwa river interlink."
  },

  // Section F: Economic & Human Geography of India
  {
    id: "geo-india-agriculture-crops",
    title: "Indian Agriculture: Seasons, Cropping Patterns & Green Revolution",
    icon: "fa-solid fa-wheat-awn",
    desc: "Cropping seasons: Kharif (monsoon crops: Rice, Maize, Jowar, Bajra, Cotton, Jute, Groundnut), Rabi (winter crops: Wheat, Barley, Gram, Mustard, Peas), Zaid (summer crops: Watermelon, Cucumber, Fodder); Major food crops: Rice (West Bengal, UP, Punjab), Wheat (UP, Punjab, MP), Millets (Nutri-cereals: Jowar, Bajra, Ragi); Cash crops: Sugarcane, Cotton, Jute, Tea (Assam), Coffee (Karnataka); Green Revolution, Operation Flood, Blue Revolution."
  },
  {
    id: "geo-india-minerals-energy-resources",
    title: "Mineral Belts & Energy Resources of India",
    icon: "fa-solid fa-bolt",
    desc: "Major mineral belts: North-Eastern Peninsular (Chota Nagpur: Coal, Iron, Manganese, Mica), Central Belt, Southern Belt, North-Western Belt; Metallic minerals: Iron ore (Haematite, Magnetite: Odisha, Chhattisgarh, Kudremukh Karnataka), Bauxite, Manganese, Copper (Khetri); Non-metallic: Mica (Koderma), Limestone; Energy resources: Coal (Gondwana 98% vs Tertiary, Jharia, Raniganj), Petroleum (Digboi oldest, Mumbai High, KG Basin), Natural Gas, Nuclear Uranium (Jaduguda) & Thorium (Monazite sands)."
  },
  {
    id: "geo-india-industries-corridors",
    title: "Major Industries, Industrial Clusters & Corridors of India",
    icon: "fa-solid fa-industry",
    desc: "Factors of industrial location; Iron and Steel Industry: TISCO Jamshedpur, IISCO Burnpur, SAIL plants: Bhilai (Russian collaboration), Rourkela (German), Durgapur (British), Bokaro, Visakhapatnam shore-based; Cotton textile industry: Mumbai, Ahmedabad (Manchester of India), Coimbatore; Sugar industry shift from North to South; Major Industrial Regions of India, Delhi-Mumbai Industrial Corridor DMIC, Bharatmala and Sagarmala."
  },
  {
    id: "geo-india-transport-infrastructure",
    title: "Transport Infrastructure: Highways, Railways, Ports & Waterways",
    icon: "fa-solid fa-train",
    desc: "Road network: NHAI, NH-44 (longest Srinagar to Kanyakumari), Golden Quadrilateral (Delhi-Mumbai-Chennai-Kolkata), Expressways, Bharatmala Pariyojana; Indian Railways: 18 Zones and HQs, Dedicated Freight Corridors WDFC and EDFC, Vande Bharat; Inland Waterways Authority IWAI: National Waterway 1 (Ganga: Prayagraj to Haldia), NW-2 (Brahmaputra), NW-3; Major Sea Ports: Kandla Deendayal, Mumbai, JNPT Nhava Sheva, Mormugao, Cochin, Chennai, Paradip, Kolkata-Haldia."
  },
  {
    id: "geo-india-census-demography-tribes",
    title: "Census 2011, Demography, Urbanisation & Tribes of India",
    icon: "fa-solid fa-users",
    desc: "Census 2011 demographic indicators: Population 1.21 billion, Decadal growth rate 17.7%, Density 382/sq km (Bihar highest, Arunachal lowest), Sex ratio 943 (Kerala highest, Haryana lowest), Child sex ratio 919, Literacy rate 73% (Male 80.9%, Female 64.6%, Kerala highest, Bihar lowest); Urbanisation trends; Major Scheduled Tribes: Bhil (largest), Gond, Santhal, Munda, Toda (Nilgiris pastoralists), Gujjar and Bakarwal (transhumance J&K), Jarawa and Sentinelese (Andaman), Lepcha (Sikkim)."
  },

  // Section G: World Geography, Chokepoints & Geopolitics
  {
    id: "world-geography-straits-deserts",
    title: "World Strategic Chokepoints, Canals, Deserts & Seas",
    icon: "fa-solid fa-earth-americas",
    desc: "Strategic maritime chokepoints: Strait of Malacca (Indo-Pacific lifeline), Strait of Hormuz (Persian Gulf oil gateway), Bab-el-Mandeb (Gate of Tears, Red Sea entry), Bosphorus & Dardanelles (Turkish straits, Black Sea access), Strait of Gibraltar (Mediterranean gateway), Dover Strait, Bering Strait, Palk Strait; Canals: Suez Canal (Mediterranean to Red Sea), Panama Canal (Atlantic to Pacific); Major Deserts: Sahara, Kalahari, Atacama (driest non-polar desert), Gobi, Great Victoria, Thar; Major Seas: South China Sea, Red Sea, Black Sea, Caspian Sea (largest inland lake), Mediterranean Sea; Major Rivers of World: Nile (longest), Amazon (largest volume), Yangtze, Mississippi-Missouri, Danube, Volga, Congo (crosses Equator twice), Mekong."
  },
  {
    id: "geog-geopolitics",
    title: "Geopolitical Flashpoints, Cartographic Lines & Boundary Treaties",
    icon: "fa-solid fa-flag",
    desc: "Strategic Geopolitical Flashpoints: South China Sea (Nine-dash line, Spratly, Paracel islands), Taiwan Strait, Red Sea and Houthi shipping crisis, Arctic Northern Sea Route, Central Asia & INSTC, Indo-Pacific Quad; International Boundary Lines: 49th Parallel (USA-Canada), 38th Parallel (North-South Korea), 17th Parallel (North-South Vietnam), 24th Parallel (Pakistan claim on Rann of Kutch), Durand Line (Pakistan-Afghanistan), McMahon Line (India-China), Radcliffe Line (India-Pakistan & Bangladesh), Line of Control LoC, Line of Actual Control LAC, Sir Creek dispute, Kalapani territorial dispute."
  }
];

console.log(`Total Geography chapters defined: ${GEOGRAPHY_CHAPTERS_DEF.length}`);

// Save definition to a temporary file for the builder
fs.writeFileSync('geography_chapters_def.json', JSON.stringify(GEOGRAPHY_CHAPTERS_DEF, null, 2), 'utf8');
console.log('Saved geography_chapters_def.json successfully.');
