window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};
EXPANDED_NOTES_DATA["physical-geography-capsule"] = `
  <h2> Physical Geography: Ultimate Revision Capsule</h2>
  <p>Comprehensive structured data extracted from handwritten Physical Geography Notes.</p>

  <h3>1. Interior of the Earth & Discontinuities</h3>
  <svg viewBox="0 0 400 220" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <text x="200" y="25" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Earth's Interior &amp; Discontinuities</text>
    
    <!-- Earth Wedge -->
    <path d="M 200 200 L 120 50 A 150 150 0 0 1 280 50 Z" fill="rgba(16, 185, 129, 0.1)" stroke="var(--text-secondary)" stroke-width="2"/>
    
    <!-- Inner Core -->
    <path d="M 200 200 L 175 160 A 40 40 0 0 1 225 160 Z" fill="#ef4444"/>
    <!-- Outer Core -->
    <path d="M 175 160 L 150 110 A 100 100 0 0 1 250 110 L 225 160 A 40 40 0 0 0 175 160 Z" fill="#f59e0b"/>
    <!-- Mantle -->
    <path d="M 150 110 L 125 60 A 140 140 0 0 1 275 60 L 250 110 A 100 100 0 0 0 150 110 Z" fill="#3b82f6"/>
    <!-- Crust (Thin top layer) -->
    <path d="M 125 60 L 120 50 A 150 150 0 0 1 280 50 L 275 60 A 140 140 0 0 0 125 60 Z" fill="#10b981"/>
    
    <!-- Labels -->
    <text x="100" y="55" fill="#10b981" font-size="10" font-weight="bold" text-anchor="end">Crust (0-35km)</text>
    <text x="100" y="85" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end">Mantle (2900km)</text>
    <text x="110" y="135" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="end">Outer Core (Liquid)</text>
    <text x="150" y="185" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="end">Inner Core (Solid)</text>
    
    <!-- Discontinuities Annotations (Right Side) -->
    <line x1="275" y1="60" x2="300" y2="60" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="305" y="63" fill="var(--text-secondary)" font-size="9" text-anchor="start">Moho (Crust/Mantle)</text>
    
    <line x1="250" y1="110" x2="300" y2="110" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="305" y="113" fill="var(--text-secondary)" font-size="9" text-anchor="start">Gutenberg (Mantle/Core)</text>
    
    <line x1="225" y1="160" x2="300" y2="160" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="305" y="163" fill="var(--text-secondary)" font-size="9" text-anchor="start">Lehmann (Outer/Inner)</text>
  </svg>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Layer / Boundary</th>
      <th style="padding:8px; border:1px solid var(--border);">Characteristics / Location</th>
    </tr>
    <tr><td style="padding:8px; border:1px solid var(--border);"><strong>Crust</strong></td><td style="padding:8px; border:1px solid var(--border);">Continental (SIAL - Silicon & Aluminium) is less dense but thicker. Oceanic (SIMA - Silicon & Magnesium) is denser but thinner.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);"><strong>Lithosphere</strong></td><td style="padding:8px; border:1px solid var(--border);">Crust + Uppermost solid mantle. Broken into tectonic plates.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);"><strong>Asthenosphere</strong></td><td style="padding:8px; border:1px solid var(--border);">Semi-molten upper mantle (source of magma). Lithosphere plates float over it.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);"><em>Conrad Discontinuity</em></td><td style="padding:8px; border:1px solid var(--border);">Between Upper Crust and Lower Crust</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);"><em>Moho Discontinuity</em></td><td style="padding:8px; border:1px solid var(--border);">Between Lower Crust and Upper Mantle</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);"><em>Repetti Discontinuity</em></td><td style="padding:8px; border:1px solid var(--border);">Between Upper Mantle and Lower Mantle</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);"><em>Gutenberg Discontinuity</em></td><td style="padding:8px; border:1px solid var(--border);">Between Lower Mantle and Outer Core</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);"><em>Lehmann Discontinuity</em></td><td style="padding:8px; border:1px solid var(--border);">Between Outer Core (liquid) and Inner Core (solid NiFe)</td></tr>
  </table>

  <h3>2. Earthquakes & Seismic Waves</h3>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Wave Type</th>
      <th style="padding:8px; border:1px solid var(--border);">Nature</th>
      <th style="padding:8px; border:1px solid var(--border);">Medium Travelled</th>
      <th style="padding:8px; border:1px solid var(--border);">Characteristics</th>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>P-Waves (Primary)</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Longitudinal (Sound)</td>
      <td style="padding:8px; border:1px solid var(--border);">Solid, Liquid, Gas</td>
      <td style="padding:8px; border:1px solid var(--border);">Fastest. Vibrate parallel to direction. Shadow zone: 105° to 145°.</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>S-Waves (Secondary)</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Transverse (Light)</td>
      <td style="padding:8px; border:1px solid var(--border);">Solid ONLY</td>
      <td style="padding:8px; border:1px solid var(--border);">Slower than P-waves. Vibrate perpendicular. Shadow zone: > 105° (Cannot pass outer core).</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>L-Waves (Surface)</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Surface</td>
      <td style="padding:8px; border:1px solid var(--border);">Earth's Surface</td>
      <td style="padding:8px; border:1px solid var(--border);">Slowest but <strong>MOST DESTRUCTIVE</strong>. Longest wavelength. Recorded last on seismograph.</td>
    </tr>
  </table>

  <h3>3. Geomorphology: Erosional vs Depositional Landforms</h3>
  <p>Major topography features formed by natural geomorphic agents:</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Agent</th>
      <th style="padding:8px; border:1px solid var(--border);">Erosional Landforms</th>
      <th style="padding:8px; border:1px solid var(--border);">Depositional Landforms</th>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Running Water (Fluvial)</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">V-Shaped Valleys, Gorges, Canyons, Waterfalls, Rapids, Potholes, River Terraces, Meanders</td>
      <td style="padding:8px; border:1px solid var(--border);">Alluvial Fans, Flood Plains, Deltas, Levees, Ox-bow Lakes, Point Bars</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Glaciers</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Cirque (Corrie), Horn, Arete, U-shaped Valleys, Hanging Valleys, Fjords, Roche Moutonnee</td>
      <td style="padding:8px; border:1px solid var(--border);">Moraines (Terminal, Lateral), Eskers, Drumlins, Outwash Plains</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Wind (Aeolian)</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Mushroom Rocks, Yardangs, Zeugen, Deflation Hollows, Inselbergs, Demoiselles</td>
      <td style="padding:8px; border:1px solid var(--border);">Sand Dunes (Barchans, Longitudinal), Loess</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Sea Waves</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Sea Cliffs, Sea Caves, Sea Arches, Sea Stacks, Wave-cut platforms</td>
      <td style="padding:8px; border:1px solid var(--border);">Beaches, Sand Bars, Spits, Lagoons</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Groundwater (Karst)</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Sinkholes, Swallow Holes, Lapies, Caves, Uvalas, Poljes</td>
      <td style="padding:8px; border:1px solid var(--border);">Stalactites (ceiling), Stalagmites (floor), Pillars/Columns</td>
    </tr>
  </table>

  <h3>4. Ocean Currents</h3>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Ocean</th>
      <th style="padding:8px; border:1px solid var(--border);">Warm Currents (Move from Equator to Poles)</th>
      <th style="padding:8px; border:1px solid var(--border);">Cold Currents (Move from Poles to Equator)</th>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Atlantic</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Gulf Stream, North Atlantic Drift, Brazilian</td>
      <td style="padding:8px; border:1px solid var(--border);">Labrador, Canary, Benguela, Falkland</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Pacific</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Kuroshio (Japan), East Australian, Alaskan</td>
      <td style="padding:8px; border:1px solid var(--border);">Oyashio (Kuril), California, Peru (Humboldt)</td>
    </tr>
    <tr>
      <td style="padding:8px; border:1px solid var(--border);"><strong>Indian</strong></td>
      <td style="padding:8px; border:1px solid var(--border);">Agulhas, Mozambique</td>
      <td style="padding:8px; border:1px solid var(--border);">West Australian, Somali</td>
    </tr>
  </table>
  <p><em>Note: Mixing of warm and cold currents (e.g. Gulf Stream + Labrador near Newfoundland) creates heavy fog but forms the world's best fishing grounds due to abundant plankton.</em></p>

  <h3>5. Climatology: Local Winds</h3>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Wind Name</th>
      <th style="padding:8px; border:1px solid var(--border);">Nature</th>
      <th style="padding:8px; border:1px solid var(--border);">Location & Effect</th>
    </tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Chinook</td><td style="padding:8px; border:1px solid var(--border);">Warm & Dry</td><td style="padding:8px; border:1px solid var(--border);">Rockies (USA) - "Snow eater"</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Foehn</td><td style="padding:8px; border:1px solid var(--border);">Warm & Dry</td><td style="padding:8px; border:1px solid var(--border);">Alps (Switzerland)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Sirocco</td><td style="padding:8px; border:1px solid var(--border);">Warm & Dust-laden</td><td style="padding:8px; border:1px solid var(--border);">Sahara to Mediterranean - Causes "Blood Rain" in Italy</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Harmattan</td><td style="padding:8px; border:1px solid var(--border);">Warm & Dry</td><td style="padding:8px; border:1px solid var(--border);">West Africa - Known as "The Doctor"</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Mistral</td><td style="padding:8px; border:1px solid var(--border);">Cold</td><td style="padding:8px; border:1px solid var(--border);">Rhone Valley (France)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Bora</td><td style="padding:8px; border:1px solid var(--border);">Cold</td><td style="padding:8px; border:1px solid var(--border);">Adriatic Coast (Italy)</td></tr>
  </table>

  <h3>6. Climatology: Cloud Types</h3>
  <svg viewBox="0 0 400 200" width="100%" height="auto" style="max-width: 400px; margin: 15px auto; display: block; background: rgba(0,0,0,0.1); border-radius: 8px; border: 1px solid var(--border);">
    <text x="200" y="20" fill="var(--text-primary)" font-size="14" font-weight="bold" font-family="var(--font-main)" text-anchor="middle">Cloud Types by Altitude</text>
    
    <!-- Altitude Axis -->
    <line x1="50" y1="180" x2="50" y2="40" stroke="var(--text-secondary)" stroke-width="2"/>
    <polygon points="50,35 45,45 55,45" fill="var(--text-secondary)"/>
    <text x="40" y="50" fill="var(--text-secondary)" font-size="10" font-weight="bold" transform="rotate(-90 40,50)" text-anchor="end">Altitude (km)</text>
    <text x="35" y="60" fill="var(--text-secondary)" font-size="10" text-anchor="end">High</text>
    <text x="35" y="110" fill="var(--text-secondary)" font-size="10" text-anchor="end">Mid</text>
    <text x="35" y="160" fill="var(--text-secondary)" font-size="10" text-anchor="end">Low</text>
    <line x1="50" y1="180" x2="380" y2="180" stroke="#10b981" stroke-width="3"/>
    
    <!-- High Clouds (Cirrus) -->
    <path d="M 150 60 Q 170 40 190 60 Q 210 50 230 65 Q 210 75 190 70 Q 170 80 150 60" fill="none" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3 3"/>
    <text x="190" y="50" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">Cirrus (Ice, Feathery)</text>

    <!-- Mid Clouds (Cumulus) -->
    <path d="M 280 120 Q 300 90 320 120 Q 340 110 360 125 Q 350 140 320 135 Q 290 140 280 120" fill="#cbd5e1"/>
    <text x="320" y="115" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">Cumulus</text>
    
    <!-- Low Clouds (Stratus) -->
    <rect x="80" y="150" width="120" height="20" rx="10" fill="#94a3b8"/>
    <rect x="110" y="140" width="100" height="20" rx="10" fill="#94a3b8"/>
    <text x="140" y="155" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">Stratus (Layered)</text>

    <!-- Vertical Cloud (Cumulonimbus) -->
    <path d="M 200 170 C 180 150 200 130 200 110 C 180 80 220 50 250 80 C 270 90 260 120 250 140 C 270 160 250 170 200 170" fill="#64748b"/>
    <text x="230" y="130" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">Cumulonimbus</text>
    <text x="230" y="145" fill="#fff" font-size="9" font-style="italic" text-anchor="middle">(Thunderstorm)</text>
    
    <!-- Rain -->
    <line x1="210" y1="170" x2="200" y2="180" stroke="#3b82f6" stroke-width="2"/>
    <line x1="230" y1="170" x2="220" y2="180" stroke="#3b82f6" stroke-width="2"/>
    <line x1="250" y1="170" x2="240" y2="180" stroke="#3b82f6" stroke-width="2"/>
  </svg>
  <ul>
    <li><strong>Cirrus (High):</strong> Feathery, hair-like, made of ice crystals. Do not cause rain.</li>
    <li><strong>Stratus (Low):</strong> Horizontal layered clouds, covering large portions of the sky.</li>
    <li><strong>Cumulus (Medium/Vertical):</strong> Cotton-wool appearance, flat base. Fair weather clouds.</li>
    <li><strong>Nimbus (Low/Medium):</strong> Dark, dense, shapeless, rain-bearing clouds.</li>
    <li><strong>Cumulonimbus:</strong> Towering vertical clouds causing thunderstorms, heavy rain, and hail.</li>
  </ul>
`;

