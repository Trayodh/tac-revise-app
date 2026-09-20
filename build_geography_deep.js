const fs = require('fs');

const premiumCard = (title, content, upscHighlights, detailedAnalysis) => `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">${title}</h3>
  
  ${content}

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #fbbf24;">🎯 UPSC Highlights (CDS/NDA Focus):</strong>
    <p style="color: #e2e8f0; margin-top: 8px;">${upscHighlights}</p>
  </div>

  <div style="background: rgba(56,189,248,0.08); border-left: 4px solid #38bdf8; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color: #38bdf8;">🧠 Detailed Analysis & Assertion-Reasoning:</strong>
    <p style="color: #e2e8f0; margin-top: 8px;">${detailedAnalysis}</p>
  </div>
</div>
`;

let output = `window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n`;

// 1. Earth Atmosphere & Oceanography (earth-atmosphere)
const atmosphereContent = `
  <h4 style="color:#4ade80;">1. Composition of Atmosphere</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Nitrogen (78%) & Oxygen (21%):</strong> Primary gases. Oxygen is negligible at 120 km height. Carbon dioxide and water vapour are found only up to 90 km from the surface.</li>
    <li><strong>Argon (0.93%), CO2 (0.03%), Neon (0.0018%).</strong></li>
  </ul>
  
  <h4 style="color:#4ade80;">2. Layers of Atmosphere</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Troposphere (0-8 km at poles, 18 km at equator):</strong> All weather phenomena occur here. Temperature decreases with height (Normal Lapse Rate: 1°C per 165m or 6.5°C per km).</li>
    <li><strong>Stratosphere (up to 50 km):</strong> Contains the Ozone layer. Ideal for jet planes due to lack of clouds and constant temperature in lower parts. Temperature increases with height (due to UV absorption by ozone).</li>
    <li><strong>Mesosphere (50-80 km):</strong> Coldest layer. Meteorites burn up here upon entering.</li>
    <li><strong>Thermosphere/Ionosphere (80-400 km):</strong> Contains electrically charged particles (ions) that reflect radio waves back to Earth. Temperature rises rapidly. ISS orbits here. Auroras occur in lower parts.</li>
  </ul>

  <h4 style="color:#4ade80;">3. Ocean Currents & Tides</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Tides:</strong> Caused primarily by the gravitational pull of the Moon and Sun, and centrifugal force. 
      <ul>
        <li><em>Spring Tides:</em> Occur on Full and New Moon when Earth, Sun, Moon are aligned (Syzygy). Highest tides.</li>
        <li><em>Neap Tides:</em> Occur at 1st and 3rd quarter moons when Sun and Moon are at right angles. Lowest tides.</li>
        <li><em>Bay of Fundy (Canada):</em> Highest tidal range in the world.</li>
      </ul>
    </li>
    <li><strong>Ocean Currents:</strong> Influenced by Coriolis force (shifts to right in NH, left in SH), gravity, wind, and solar heating.
      <ul>
        <li><em>Warm Currents:</em> Move from Equator to Poles. Examples: Gulf Stream, Kuroshio, Agulhas, East Australian.</li>
        <li><em>Cold Currents:</em> Move from Poles to Equator. Form coastal deserts (e.g., Atacama due to Humboldt/Peru current). Examples: Labrador, Canary, Benguela, Oyashio, West Australian.</li>
        <li>Meeting of warm and cold currents (e.g., Gulf Stream & Labrador near Newfoundland) creates heavy fog but excellent fishing grounds (plankton rich).</li>
      </ul>
    </li>
  </ul>
`;
const earthAtmosphereHtml = premiumCard("Atmosphere & Oceanography", atmosphereContent, 
"Questions frequently target the exact height limits of atmospheric gases (O2 ends at 120km, CO2/H2O ends at 90km) and the sequence of layers. Also, match-the-following questions on Cold/Warm currents are a staple in CDS. Know that cold currents always create deserts on the western margins of continents.", 
"Assertion-Reasoning often tests the Temperature Inversion phenomenon: usually, temp decreases with height, but during long winter nights with clear skies, the surface cools faster than the air above it, leading to a layer of warm air over cold air (inversion). This traps pollutants and causes smog. Also, the Coriolis force is zero at the equator, which is why Cyclones never form at the equator.");
output += `window.EXPANDED_NOTES_DATA["earth-atmosphere"] = \`\n${earthAtmosphereHtml.replace(/`/g, '\\`')}\n\`;\n\n`;

// 2. Climatology & Clouds (climatology-clouds)
const climatologyContent = `
  <h4 style="color:#4ade80;">1. Winds & Coriolis Force</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Coriolis Force:</strong> Result of Earth's rotation. Deflects winds to the right in the Northern Hemisphere and left in the Southern Hemisphere (Ferrel's Law). Zero at the equator, maximum at the poles.</li>
    <li><strong>Planetary Winds:</strong> 
      <ul>
        <li><em>Trade Winds:</em> Blow from Sub-Tropical High (30°) to Equatorial Low (Doldrums).</li>
        <li><em>Westerlies:</em> Blow from Sub-Tropical High to Sub-Polar Low (60°). Known as Roaring Forties, Furious Fifties, Screaming Sixties in the SH due to lack of landmass.</li>
      </ul>
    </li>
    <li><strong>Local Winds:</strong>
      <ul>
        <li><em>Warm:</em> Chinook (Snow-eater, Rockies USA), Foehn (Alps), Loo (India), Sirocco (Blood rain in Italy from Sahara).</li>
        <li><em>Cold:</em> Mistral (France), Bora (Adriatic coast), Pampero (Argentina).</li>
      </ul>
    </li>
  </ul>

  <h4 style="color:#4ade80;">2. Clouds & Precipitation</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>High Clouds (8-12 km):</strong> Cirrus (feathery, white, ice crystals), Cirrostratus (causes halos around Sun/Moon), Cirrocumulus.</li>
    <li><strong>Middle Clouds (4-7 km):</strong> Altostratus, Altocumulus.</li>
    <li><strong>Low Clouds (< 2 km):</strong> Stratus (layered, gray), Stratocumulus, Nimbostratus (continuous rain, dark, shapeless).</li>
    <li><strong>Vertical Clouds:</strong> Cumulus (cotton wool, flat base), Cumulonimbus (thunderstorms, anvil shape, massive vertical extent).</li>
  </ul>

  <h4 style="color:#4ade80;">3. Cyclones vs Anticyclones</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Cyclone:</strong> Low pressure at center. Winds converge. Northern Hemisphere: Anti-clockwise. Southern Hemisphere: Clockwise. Eye of the cyclone has calm, clear skies with descending air.</li>
    <li><strong>Anticyclone:</strong> High pressure at center. Winds diverge. Northern Hemisphere: Clockwise. Southern Hemisphere: Anti-clockwise. Associated with fair weather.</li>
  </ul>
`;
const climatologyHtml = premiumCard("Climatology & Winds", climatologyContent, 
"The Roaring Forties (40°S), Furious Fifties (50°S), and Screaming Sixties (60°S) are favorite CDS/NDA questions. They exist only in the Southern Hemisphere due to the unbroken oceanic expanse. Also memorize the Local Winds (Chinook = Warm, Mistral = Cold).", 
"Why do tropical cyclones not form at the equator? Because the Coriolis force is zero at the equator, which is required to create the spinning vortex. Also, the 'Eye' of the cyclone is a region of subsiding air, creating an incredibly calm and clear core amidst violent storms.");
output += `window.EXPANDED_NOTES_DATA["climatology-clouds"] = \`\n${climatologyHtml.replace(/`/g, '\\`')}\n\`;\n\n`;

// 3. Geomorphology & Rocks (geomorphology-rocks)
const geomorphologyContent = `
  <h4 style="color:#4ade80;">1. Interior of the Earth</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Crust:</strong> Outermost solid part. Continental crust (SiAl - Silicon & Aluminium) is thicker (50-70km) but less dense. Oceanic crust (SiMa) is thinner (5-30km) but denser.</li>
    <li><strong>Mantle:</strong> 83% of Earth's volume. Rich in Silicon & Magnesium. The upper portion is the Asthenosphere (up to 400km), which is in a semi-molten/plastic state and is the main source of magma.</li>
    <li><strong>Core:</strong> 16% of Earth's volume. Composed of Nickel & Iron (NiFe). Outer core is liquid, inner core is solid (due to immense pressure).</li>
    <li><strong>Discontinuities:</strong> Conard (Upper/Lower Crust), Moho (Crust/Mantle), Repetti (Upper/Lower Mantle), Gutenberg (Mantle/Outer Core), Lehmann (Outer/Inner Core).</li>
  </ul>

  <h4 style="color:#4ade80;">2. Earthquakes & Seismic Waves</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Focus (Hypocenter):</strong> Point where energy is released inside Earth. <strong>Epicenter:</strong> Point on surface directly above the focus.</li>
    <li><strong>Body Waves:</strong>
      <ul>
        <li><em>P-Waves (Primary):</em> Fastest, arrive first. Longitudinal (like sound waves). Travel through solid, liquid, gas.</li>
        <li><em>S-Waves (Secondary):</em> Transverse. Travel only through solids (they stop at the liquid outer core, creating a large shadow zone beyond 105°).</li>
      </ul>
    </li>
    <li><strong>Surface Waves (L-Waves):</strong> Arrive last, most destructive, travel only on the surface.</li>
  </ul>

  <h4 style="color:#4ade80;">3. Rocks & Volcanism</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>Igneous:</strong> Formed from magma cooling. Primary rocks. Intrusive (Granite, cools slowly deep inside, large crystals) vs Extrusive (Basalt, cools fast on surface, fine crystals).</li>
    <li><strong>Sedimentary:</strong> Formed by lithification of sediments. Layered, contains fossils, holds coal/oil/gas. Examples: Limestone, Sandstone, Shale.</li>
    <li><strong>Metamorphic:</strong> Changed by heat/pressure. Examples: Limestone -> Marble, Sandstone -> Quartzite, Granite -> Gneiss, Shale -> Slate.</li>
    <li><strong>Volcanic Landforms (Intrusive):</strong> Batholith (large dome deep inside), Laccolith (mushroom shaped), Phacolith (lens shaped in anticlines/synclines), Sill (horizontal sheet), Dyke (vertical wall).</li>
  </ul>

  <h4 style="color:#4ade80;">4. Exogenic Landforms (Erosion & Deposition)</h4>
  <ul style="color:#e2e8f0;">
    <li><strong>River (Fluvial):</strong> V-shaped valleys, Gorges, Canyons, Waterfalls, Ox-bow lakes, Deltas.</li>
    <li><strong>Glacier:</strong> U-shaped valleys, Cirques, Horns (Matterhorn), Moraines, Eskers, Drumlins.</li>
    <li><strong>Wind (Aeolian):</strong> Mushroom rocks, Yardangs, Zeugen, Barchans (crescent dunes), Loess.</li>
    <li><strong>Karst (Groundwater):</strong> Sinkholes, Stalactites (ceiling), Stalagmites (floor), Pillars. Found in limestone regions.</li>
  </ul>
`;
const geomorphologyHtml = premiumCard("Geomorphology, Rocks & Earth's Interior", geomorphologyContent, 
"The sequence of Discontinuities (CMRGL) and the nature of Seismic Waves (P-waves travel through all mediums, S-waves only solids) are extremely high-frequency questions. For rocks, matching the parent rock to its metamorphic form (e.g., Limestone -> Marble) is a guaranteed 1-marker.", 
"Assertion-Reasoning on Shadow Zones: The S-wave shadow zone (105° to 105°) is much larger than the P-wave shadow zone (105° to 145°) because S-waves simply cannot pass through the liquid outer core. P-waves are refracted (bent) as they enter and leave the liquid core, creating a smaller annular shadow zone.");
output += `window.EXPANDED_NOTES_DATA["geomorphology-rocks"] = \`\n${geomorphologyHtml.replace(/`/g, '\\`')}\n\`;\n\n`;

fs.writeFileSync('notes_generated_geography_deep.js', output);
console.log('Successfully generated notes_generated_geography_deep.js');
