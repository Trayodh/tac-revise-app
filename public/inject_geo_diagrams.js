const fs = require('fs');
let d = fs.readFileSync('diagrams_db.js', 'utf8');

const geoAtmosphere = `
DIAGRAMS_DB["geography__earth-atmosphere"] = \`
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:10px;">
  <div style="background:#60a5fa; color:#ffffff; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Earth Structure & Atmosphere
  </div>
  <div style="text-align:center; margin-bottom: 20px;">
    <img src="images/geo_atmosphere.png" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" alt="Atmosphere">
  </div>
  <div style="text-align:center;">
    <img src="images/geo_earth_interior.png" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" alt="Earth Interior">
  </div>
</div>
\`;
`;

const geoSyl = `
DIAGRAMS_DB["geography__syl-geog"] = \`
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:10px;">
  <div style="background:#60a5fa; color:#ffffff; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Indian Geography (Rivers, Soils & Rainfall)
  </div>
  <div style="text-align:center; margin-bottom: 20px;">
    <img src="images/geo_india_rivers.png" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" alt="Indian Rivers">
  </div>
  <div style="text-align:center; margin-bottom: 20px;">
    <img src="images/geo_india_soils.png" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" alt="Indian Soils">
  </div>
  <div style="text-align:center;">
    <img src="images/geo_india_rainfall.png" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" alt="Indian Rainfall">
  </div>
</div>
\`;
`;

const geoForests = `
DIAGRAMS_DB["geography__india-forests-wetlands"] = \`
<div style="width:100%; overflow-x:auto; font-family:'Segoe UI',sans-serif; background:#0f1117; color:#e2e8f0; padding:10px;">
  <div style="background:#60a5fa; color:#ffffff; padding:12px 20px; font-size:24px; font-weight:bold; text-align:center; border-radius:6px; margin-bottom:20px;">
    Forests, Vegetation & National Parks
  </div>
  <div style="text-align:center; margin-bottom: 20px;">
    <img src="images/geo_india_vegetation.png" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" alt="Indian Vegetation">
  </div>
  <div style="text-align:center;">
    <img src="images/geo_india_national_parks.png" style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);" alt="Indian National Parks">
  </div>
</div>
\`;
`;

d += '\n' + geoAtmosphere + '\n' + geoSyl + '\n' + geoForests + '\n';
fs.writeFileSync('diagrams_db.js', d);
console.log('Added Geography diagrams to diagrams_db.js');
