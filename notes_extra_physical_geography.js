window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};

// ── Cloud Classification Diagram → climatology-clouds ──
EXPANDED_NOTES_DATA["climatology-clouds"] = (EXPANDED_NOTES_DATA["climatology-clouds"] || "") + `
  <br/>
  <h4 style="border-left: 3px solid #38bdf8; padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Cloud Classification Chart</h4>
  <div class="mermaid">
graph TD
    A["☁️ CLOUDS"] --> H["HIGH CLOUDS above 6km"]
    A --> M["MID CLOUDS 2 to 6km"]
    A --> L["LOW CLOUDS below 2km"]
    A --> V["VERTICAL DEVELOPMENT"]

    H --> H1["Cirrus — Feathery ice crystals"]
    H --> H2["Cirrostratus — Halo around sun/moon"]
    H --> H3["Cirrocumulus — Mackerel sky"]

    M --> M1["Altostratus — Grey sheet, sun dimly visible"]
    M --> M2["Altocumulus — Sheep clouds, wave-like"]

    L --> L1["Stratus — Fog-like uniform layer"]
    L --> L2["Stratocumulus — Lumpy grey patches"]
    L --> L3["Nimbostratus — Continuous rain/snow"]

    V --> V1["Cumulus — Fair weather, flat base"]
    V --> V2["Cumulonimbus — Thunderstorms, hail, lightning"]
  </div>
`;

// ── Planetary Winds & Pressure Belts → earth-atmosphere ──
EXPANDED_NOTES_DATA["earth-atmosphere"] = (EXPANDED_NOTES_DATA["earth-atmosphere"] || "") + `
  <br/>
  <h4 style="border-left: 3px solid #f59e0b; padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Planetary Winds and Pressure Belts</h4>
  <div class="mermaid">
graph TD
    N90["Polar High 90N"] --> N60["Sub-Polar Low 60N — Polar Easterlies blow from N90"]
    N30["Sub-Tropical High 30N — Horse Latitudes"] --> N60
    N30 --> EQ["Equatorial Low 0 deg — ITCZ Doldrums"]
    S30["Sub-Tropical High 30S — Horse Latitudes"] --> EQ
    S30 --> S60["Sub-Polar Low 60S — Polar Easterlies blow from S90"]
    S90["Polar High 90S"] --> S60

    EQ --> |"SE Trade Winds"| S30
    EQ --> |"NE Trade Winds"| N30
    N60 --> |"SW Westerlies"| N30
    S60 --> |"NW Westerlies"| S30
  </div>
`;

// ── Geomorphic Landforms → geomorphology-rocks ──
EXPANDED_NOTES_DATA["geomorphology-rocks"] = (EXPANDED_NOTES_DATA["geomorphology-rocks"] || "") + `
  <br/>
  <h4 style="border-left: 3px solid #22c55e; padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Geomorphic Landforms by Agent</h4>
  <div class="mermaid">
graph LR
    ROOT["Geomorphic Landforms"] --> FL["Fluvial — River"]
    ROOT --> AE["Aeolian — Wind"]
    ROOT --> CO["Coastal — Waves"]
    ROOT --> GL["Glacial — Ice"]
    ROOT --> KA["Karst — Limestone"]

    FL --> FE["Erosional: V-Valley, Gorge, Waterfall, Meander"]
    FL --> FD["Depositional: Delta, Alluvial Fan, Flood Plain, Levee"]

    AE --> AEE["Erosional: Mushroom Rock, Yardang, Inselberg"]
    AE --> AED["Depositional: Barchan Dune, Loess"]

    CO --> COE["Erosional: Sea Cliff, Sea Cave, Sea Arch, Stack"]
    CO --> COD["Depositional: Beach, Spit, Lagoon, Sand Bar"]

    GL --> GLE["Erosional: Cirque, Horn, Arete, U-Valley, Fjord"]
    GL --> GLD["Depositional: Moraine, Esker, Drumlin, Outwash"]

    KA --> KAE["Erosional: Sinkhole, Swallow Hole, Lapies, Cave"]
    KA --> KAD["Depositional: Stalactite, Stalagmite, Pillar"]
  </div>
`;
