const fs = require('fs');

const addContent = `
<h3 style="margin-top:2em; color:var(--primary);">Important Plateaus and Passes of India</h3>
<div style="text-align:center; margin: 15px 0;">
  <img src="file:///C:/Users/Trayodh%20Khandalkar/.gemini/antigravity-ide/brain/63330b5a-af9a-4284-8f4b-225b7f5a6c88/india_plateaus_passes_map_1779885332309.png" alt="Plateaus and Passes of India" style="max-width:100%; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  <p style="font-size:0.9em; color:#666; margin-top:5px;">Map of Major Plateaus and Strategic Mountain Passes</p>
</div>
<ul>
  <li><strong>Deccan Plateau:</strong> Largest plateau in India, south of Narmada river, predominantly volcanic basalt rock.</li>
  <li><strong>Malwa Plateau:</strong> Located in Central India, north of Vindhyas, known for black soil.</li>
  <li><strong>Chota Nagpur Plateau:</strong> Rich in minerals (mica, bauxite, copper, limestone, iron ore), covers parts of Jharkhand, Odisha, West Bengal, and Chhattisgarh.</li>
  <li><strong>Important Passes (Himalayan):</strong>
    <ul>
      <li><em>Zoji La</em>: Connects Srinagar and Leh.</li>
      <li><em>Shipki La</em>: Connects Himachal Pradesh and Tibet.</li>
      <li><em>Rohtang Pass</em>: Connects Kullu Valley with Lahaul and Spiti Valleys.</li>
      <li><em>Nathu La</em>: Connects Sikkim and Tibet (crucial trade route).</li>
    </ul>
  </li>
  <li><strong>Important Passes (Peninsular):</strong>
    <ul>
      <li><em>Thal Ghat</em>: Connects Mumbai to Nashik.</li>
      <li><em>Bhor Ghat</em>: Connects Mumbai to Pune.</li>
      <li><em>Palghat (Palakkad Gap)</em>: Connects Kerala to Tamil Nadu.</li>
    </ul>
  </li>
</ul>

<h3 style="margin-top:2em; color:var(--primary);">Soil Types Distribution in India</h3>
<div style="text-align:center; margin: 15px 0;">
  <img src="file:///C:/Users/Trayodh%20Khandalkar/.gemini/antigravity-ide/brain/63330b5a-af9a-4284-8f4b-225b7f5a6c88/india_soils_map_1779885298423.png" alt="Soils of India" style="max-width:100%; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  <p style="font-size:0.9em; color:#666; margin-top:5px;">Map of Soil Distribution across India</p>
</div>
<ul>
  <li><strong>Alluvial Soil:</strong> Most widely spread and important soil. Found in Northern plains and river valleys. Highly fertile (Khadar is new, Bhangar is old).</li>
  <li><strong>Black Soil (Regur):</strong> Found in Deccan trap region (Maharashtra, Saurashtra, Malwa). Ideal for growing cotton. High moisture retention.</li>
  <li><strong>Red and Yellow Soil:</strong> Develops on crystalline igneous rocks in areas of low rainfall (Eastern and southern parts of Deccan plateau).</li>
  <li><strong>Laterite Soil:</strong> Found in areas with high temperature and heavy rainfall (Western Ghats, parts of Odisha, Meghalaya). Prone to leaching.</li>
  <li><strong>Arid Soil:</strong> Found in western Rajasthan. Sandy in texture and saline in nature.</li>
</ul>

<h3 style="margin-top:2em; color:var(--primary);">Important Latitudes and Longitudes</h3>
<div style="text-align:center; margin: 15px 0;">
  <img src="file:///C:/Users/Trayodh%20Khandalkar/.gemini/antigravity-ide/brain/63330b5a-af9a-4284-8f4b-225b7f5a6c88/india_latlong_map_1779885313623.png" alt="Important Latitudes and Longitudes of India" style="max-width:100%; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  <p style="font-size:0.9em; color:#666; margin-top:5px;">Tropic of Cancer and Indian Standard Meridian</p>
</div>
<ul>
  <li><strong>Tropic of Cancer (23.5° N):</strong> Divides India into almost two equal halves. Passes through 8 states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.</li>
  <li><strong>Indian Standard Meridian (82.5° E):</strong> Determines Indian Standard Time (IST), which is GMT +5:30. It passes through Mirzapur in Uttar Pradesh. It crosses 5 states: UP, MP, Chhattisgarh, Odisha, AP.</li>
</ul>

<h3 style="margin-top:2em; color:var(--primary);">Transport Infrastructure: Highways, Ports & Airports</h3>
<div style="text-align:center; margin: 15px 0;">
  <img src="file:///C:/Users/Trayodh%20Khandalkar/.gemini/antigravity-ide/brain/63330b5a-af9a-4284-8f4b-225b7f5a6c88/india_transport_map_1779885284147.png" alt="Transport Map of India" style="max-width:100%; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  <p style="font-size:0.9em; color:#666; margin-top:5px;">Major Highways, Sea Ports, and International Airports</p>
</div>
<ul>
  <li><strong>Golden Quadrilateral:</strong> Connects Delhi, Mumbai, Chennai, and Kolkata.</li>
  <li><strong>North-South Corridor:</strong> Connects Srinagar (J&K) to Kanyakumari (Tamil Nadu).</li>
  <li><strong>East-West Corridor:</strong> Connects Silchar (Assam) to Porbandar (Gujarat).</li>
  <li><strong>Major Western Ports:</strong> Kandla (Deendayal), Mumbai, JNPT (Nhava Sheva - largest container port), Marmagao, New Mangalore, Kochi.</li>
  <li><strong>Major Eastern Ports:</strong> Kolkata/Haldia, Paradip, Visakhapatnam (deepest landlocked), Chennai (oldest artificial), Ennore, Tuticorin.</li>
  <li><strong>Key International Airports:</strong> IGIA (Delhi), CSIA (Mumbai), Kempegowda (Bengaluru), Rajiv Gandhi (Hyderabad), Netaji Subhas Chandra Bose (Kolkata).</li>
</ul>
`;

const appendCode = `
EXPANDED_NOTES_DATA["syl-geog"] = (EXPANDED_NOTES_DATA["syl-geog"] || "") + \`
${addContent}
\`;
`;

fs.appendFileSync('notes_extra_4.js', appendCode);
console.log('Appended successfully');
