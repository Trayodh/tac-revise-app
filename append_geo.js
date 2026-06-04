const fs = require('fs');

const addContent = `
<h3 style="margin-top:2em; color:var(--primary);">Important Mountain Ranges and Peaks of India</h3>
<div style="text-align:center; margin: 15px 0;">
  <img src="file:///C:/Users/Trayodh%20Khandalkar/.gemini/antigravity-ide/brain/63330b5a-af9a-4284-8f4b-225b7f5a6c88/india_mountains_map_1779884913226.png" alt="Mountain Ranges of India" style="max-width:100%; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  <p style="font-size:0.9em; color:#666; margin-top:5px;">Map of Major Indian Mountain Ranges and Peaks</p>
</div>
<ul>
  <li><strong>Himalayas (Jammu & Kashmir to Arunachal Pradesh):</strong> Kangchenjunga (8,586m) in Sikkim is the highest peak in India (undisputed). Nanga Parbat (8,126m), Nanda Devi (7,816m).</li>
  <li><strong>Karakoram (Ladakh):</strong> K2 (Godwin Austen) - 8,611m (Highest peak in Indian subcontinent, located in POK).</li>
  <li><strong>Aravalli Range (Gujarat to Delhi):</strong> Oldest fold mountains. Highest peak: Guru Shikhar (1,722m) in Mount Abu, Rajasthan.</li>
  <li><strong>Vindhya & Satpura Ranges (Central India):</strong> Block mountains separating North and South India. Highest peak of Satpura: Dhupgarh (1,350m) in MP.</li>
  <li><strong>Western Ghats (Sahyadris):</strong> Extends from Gujarat to Kerala. Highest peak: Anamudi (2,695m) in Kerala (highest peak in Peninsular India).</li>
  <li><strong>Eastern Ghats:</strong> Discontinuous range parallel to the east coast. Highest peak: Jindhagada Peak (1,690m) or Arma Konda (1,680m) in Andhra Pradesh.</li>
  <li><strong>Nilgiri Hills (Tamil Nadu):</strong> Junction of Eastern and Western Ghats. Highest peak: Doddabetta (2,637m).</li>
  <li><strong>Purvanchal Range (North East):</strong> Extension of Himalayas. Includes Patkai Bum, Naga Hills, Mizo Hills.</li>
</ul>

<h3 style="margin-top:2em; color:var(--primary);">Important Dams of India and their Rivers</h3>
<div style="text-align:center; margin: 15px 0;">
  <img src="file:///C:/Users/Trayodh%20Khandalkar/.gemini/antigravity-ide/brain/63330b5a-af9a-4284-8f4b-225b7f5a6c88/india_dams_map_1779884933962.png" alt="Dams of India" style="max-width:100%; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  <p style="font-size:0.9em; color:#666; margin-top:5px;">Map of Major Indian Dams and Rivers</p>
</div>
<table>
  <tr><th>Dam Name</th><th>River</th><th>State</th><th>Key Fact</th></tr>
  <tr><td>Tehri Dam</td><td>Bhagirathi</td><td>Uttarakhand</td><td>Highest dam in India (260.5m)</td></tr>
  <tr><td>Bhakra Nangal</td><td>Sutlej</td><td>Himachal Pradesh</td><td>Largest dam in India (by volume), creates Gobind Sagar</td></tr>
  <tr><td>Hirakud Dam</td><td>Mahanadi</td><td>Odisha</td><td>Longest earthen dam in the world (25.8 km)</td></tr>
  <tr><td>Sardar Sarovar</td><td>Narmada</td><td>Gujarat</td><td>Largest dam on the Narmada river</td></tr>
  <tr><td>Nagarjuna Sagar</td><td>Krishna</td><td>Telangana/AP</td><td>World's largest masonry dam</td></tr>
  <tr><td>Idukki Arch Dam</td><td>Periyar</td><td>Kerala</td><td>One of the highest arch dams in Asia</td></tr>
  <tr><td>Tungabhadra Dam</td><td>Tungabhadra</td><td>Karnataka</td><td>Largest dam in Karnataka</td></tr>
  <tr><td>Mettur Dam</td><td>Kaveri</td><td>Tamil Nadu</td><td>One of the oldest and largest in India</td></tr>
  <tr><td>Koyna Dam</td><td>Koyna</td><td>Maharashtra</td><td>Known as the 'Lifeline of Maharashtra'</td></tr>
</table>
`;

const appendCode = `
EXPANDED_NOTES_DATA["syl-geog"] = (EXPANDED_NOTES_DATA["syl-geog"] || "") + \`
${addContent}
\`;
`;

fs.appendFileSync('notes_extra_4.js', appendCode);
console.log('Appended successfully');
