const fs = require('fs');
const path = require('path');

// Detailed additions for notes_extra_polity.js
const additionsPolity = {
  "preamble": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> Sources of the Constitution (Complete Reference)
  </h3>
  <p style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px;">
    The Constituent Assembly analyzed various global constitutions to build a robust, customized democratic framework. Below is the complete list of features borrowed from different countries:
  </p>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; color: var(--text-secondary); font-size: 14px;">
    <thead>
      <tr style="border-bottom: 2px solid var(--border); background: rgba(255,255,255,0.04);">
        <th style="padding: 12px 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); width: 25%;">Source Country</th>
        <th style="padding: 12px 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Borrowed Features & Provisions</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">United Kingdom (UK)</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Parliamentary government, Rule of Law, Legislative procedure, Single Citizenship, Cabinet system, Prerogative writs, Parliamentary privileges, and Bicameralism.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">United States (US)</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Fundamental Rights, Post of Vice-President, Independence of Judiciary, Judicial Review, Impeachment of the President, and Removal of Supreme Court and High Court judges.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">Ireland</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Directive Principles of State Policy (DPSP), Nomination of members to Rajya Sabha, and Method of Presidential Election.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">Canada</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Federation with a strong Centre, Vesting of residuary powers in the Centre, Appointment of State Governors by the Centre, and Advisory jurisdiction of the Supreme Court.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">Australia</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Concurrent List, Freedom of Trade, Commerce and Intercourse, and Joint-sitting of the two Houses of Parliament.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">Germany (Weimar)</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Suspension of Fundamental Rights during Emergency.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">Soviet Union (USSR)</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Fundamental Duties and the ideals of Justice (Social, Economic, and Political) in the Preamble.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">France</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Republic system, and the ideals of Liberty, Equality, and Fraternity in the Preamble.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">South Africa</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Procedure for Amendment of the Constitution, and Election of members of Rajya Sabha.</td>
      </tr>
      <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
        <td style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border); background: rgba(255,255,255,0.01);">Japan</td>
        <td style="padding: 10px; border: 1px solid var(--border); line-height: 1.5;">Procedure Established by Law.</td>
      </tr>
    </tbody>
  </table>
  <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid var(--danger); padding: 12px; border-radius: 4px; margin-top: 15px;">
    <strong style="color: var(--danger); display: block; margin-bottom: 4px;">Important: Common Exam Trap</strong>
    <p style="margin: 0; color: var(--text-secondary); line-height: 1.4;">
      Do not confuse <strong>"Procedure Established by Law"</strong> (borrowed from Japan, Art 21) with <strong>"Due Process of Law"</strong> (originating in US jurisprudence). Also, note that while the <em>suspension</em> of Fundamental Rights during emergency comes from Germany, the <em>provisions</em> of emergency itself are heavily drawn from the Government of India Act, 1935.
    </p>
  </div>
</div>`
};

// Detailed additions for notes_extra_4.js
const additions4 = {
  "amendments-parts": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> Evolution of States & Reorganization Timeline (1953–2014)
  </h3>
  <p style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px;">
    At independence, India was divided into British Provinces and Princely States. Under public demand, the government appointed multiple committees to study states reorganization on a linguistic basis:
  </p>
  <div style="background: rgba(14, 165, 233, 0.08); border-left: 4px solid var(--info); padding: 14px; border-radius: 4px; margin-bottom: 20px; line-height: 1.5; color: var(--text-secondary);">
    <strong style="color: var(--info); display: block; margin-bottom: 6px;"> Core Reorganization Committees</strong>
    • <strong>Dhar Commission (1948):</strong> Recommended reorganization based on administrative convenience rather than language.<br>
    • <strong>JVP Committee (1948):</strong> Comprising Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya. Also rejected language as the primary factor.<br>
    • <strong>Fazal Ali Commission (1953):</strong> Comprising Fazal Ali, K.M. Panikkar, and H.N. Kunzru. Broadly accepted language as a basis (led to the States Reorganisation Act, 1956).
  </div>
  
  <div style="position: relative; border-left: 2px solid rgba(249, 115, 22, 0.3); padding-left: 20px; margin-left: 10px;">
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1953: Andhra Pradesh</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">First linguistic state created in India, carved out of the Telugu-speaking areas of Madras State after the 56-day fast and death of Potti Sreeramulu.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1956: Tamil Nadu, Kerala, Karnataka & MP</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">The States Reorganisation Act created 14 states and 6 UTs. Kerala was formed by merging Travancore-Cochin with Malabar district. Mysore state (renamed Karnataka in 1973) and Madhya Pradesh were established.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1960: Maharashtra & Gujarat</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Bilingual Bombay State was split into Maharashtra (Marathi-speaking) and Gujarat (Gujarati-speaking) after the Mahagujarat and Samyukta Maharashtra movements.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1961: Dadra and Nagar Haveli</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Converted into a Union Territory (liberated from Portuguese rule in 1954).</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1962: Goa, Daman & Diu, Puducherry</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Goa, Daman and Diu acquired via military action (Operation Vijay) from the Portuguese and made a UT. Puducherry was formally ceded by the French and made a UT.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1963: Nagaland</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Created as a separate state to satisfy Naga nationalist sentiments, carved out of Assam.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1966: Punjab & Haryana</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">On the recommendation of the Shah Commission, bilingual Punjab State was divided into Punjab (Punjabi-speaking) and Haryana (Hindi-speaking), with Chandigarh made a UT and common capital.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1971: Himachal Pradesh</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Elevated from Union Territory to a full State.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1972: Meghalaya, Manipur & Tripura</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">North-Eastern reorganization elevated UTs Manipur and Tripura to statehood, and carved Meghalaya out of Assam.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1975: Sikkim</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Became an associate state (35th Amendment) and then a full 22nd state of India (36th Amendment, 1975) following a referendum.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">1987: Mizoram, Arunachal Pradesh & Goa</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Mizoram and Arunachal Pradesh granted statehood. Goa was separated from Daman and Diu and made the 25th state.</span>
    </div>
    <div style="margin-bottom: 16px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">2000: Chhattisgarh, Uttarakhand & Jharkhand</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Three new states created: Chhattisgarh (from Madhya Pradesh), Uttarakhand (from Uttar Pradesh), and Jharkhand (from Bihar).</span>
    </div>
    <div style="margin-bottom: 6px; position: relative;">
      <div style="position: absolute; left: -26px; top: 2px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent);"></div>
      <strong style="color: var(--text-primary); font-size: 15px;">2014: Telangana</strong>
      <span style="display: block; color: var(--text-secondary); font-size: 13.5px; margin-top: 2px;">Separated from Andhra Pradesh as the 29th State of India (under the Andhra Pradesh Reorganisation Act, 2014).</span>
    </div>
  </div>
</div>`,

  "positions-tenures": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> Polity High Offices Revision Matrix (Quick Reference)
  </h3>
  <p style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px;">
    A comparison of the constitutional terms, articles, appointments, and removal protocols for key Indian offices:
  </p>
  <div style="overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; color: var(--text-secondary); font-size: 13.5px; text-align: left;">
      <thead>
        <tr style="border-bottom: 2px solid var(--border); background: rgba(255,255,255,0.04);">
          <th style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Office</th>
          <th style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Oath Admin By</th>
          <th style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Resign To</th>
          <th style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Article</th>
          <th style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Tenure</th>
          <th style="padding: 10px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Removal Method</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Chief Justice of India (CJI)</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Vice President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Art 52</td>
          <td style="padding: 8px; border: 1px solid var(--border);">5 Years</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Impeachment by Parliament (Art 61) with 2/3rd majority of total membership.</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Vice President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Art 63</td>
          <td style="padding: 8px; border: 1px solid var(--border);">5 Years</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Resolution of Rajya Sabha (effective majority) agreed to by Lok Sabha.</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Prime Minister</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Art 75</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Pleasure of President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Dismissed by President if majority support is lost in Lok Sabha.</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">SC / HC Judge</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Art 124 (SC)</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Until age 65 (SC) / 62 (HC)</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Removal by Presidential order following Parliamentary address (special majority).</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">CAG</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Art 148</td>
          <td style="padding: 8px; border: 1px solid var(--border);">6 Years or age 65</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Removed in same manner and on same grounds as a Supreme Court Judge.</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; font-weight: 600; color: var(--text-primary); border: 1px solid var(--border);">Attorney General</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Art 76</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Pleasure of President</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Removed by the President at any time (no constitutional procedure).</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="background: rgba(245, 158, 11, 0.08); border-left: 4px solid var(--warning); padding: 12px; border-radius: 4px; margin-top: 15px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.4;">
    <strong>Note: Strategist Tip:</strong> Notice that the Attorney General holds office during the <em>pleasure of the President</em>, meaning they have no fixed tenure and no formal impeachment procedure. In contrast, the CAG, although appointed by the President, enjoys security of tenure and can only be removed in the same manner as an SC Judge (proven misbehavior or incapacity).
  </div>
</div>`,

  "universe-solar-system": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span>New Moon</span> Astronomical Phenomena: Solar & Lunar Eclipses
  </h3>
  <p style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px;">
    An eclipse is an astronomical event that occurs when an astronomical object or spacecraft is temporarily obscured, either by passing into the shadow of another body or by having another body pass between it and the viewer.
  </p>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 16px; border-radius: 8px; border-top: 3px solid var(--accent);">
      <h4 style="color: var(--accent); margin-bottom: 8px; font-size: 15px; font-weight: 600;">New Moon Lunar Eclipse (Moon Obscured)</h4>
      <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 10px;">
        Occurs when the <strong>Earth comes directly between the Sun and the Moon</strong>. The Earth blocks the Sun's light from reaching the Moon and casts its shadow on the lunar surface.
      </p>
      <div style="font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); border-left: 2px solid var(--border); padding-left: 10px;">
        Align: SUN → EARTH → MOON<br>
        Condition: Full Moon Day (Syzygy-Opposition)
      </div>
    </div>
    
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 16px; border-radius: 8px; border-top: 3px solid var(--info);">
      <h4 style="color: var(--info); margin-bottom: 8px; font-size: 15px; font-weight: 600;"> Solar Eclipse (Sun Obscured)</h4>
      <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 10px;">
        Occurs when the <strong>Moon comes directly between the Sun and the Earth</strong>. The Moon blocks the Sun's light from reaching the Earth's surface and casts a shadow on it.
      </p>
      <div style="font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); border-left: 2px solid var(--border); padding-left: 10px;">
        Align: SUN → MOON → EARTH<br>
        Condition: New Moon Day (Syzygy-Conjunction)
      </div>
    </div>
  </div>

  <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border); padding: 14px; border-radius: 6px; font-size: 13.5px; color: var(--text-secondary);">
    <strong style="color: var(--text-primary); display: block; margin-bottom: 6px;">Third Quarter Shadows: Umbra vs. Penumbra</strong>
    • <strong>Umbra (Inner Shadow):</strong> The fully dark, central region of a shadow where the light source is completely blocked.<br>
    • <strong>Penumbra (Outer Shadow):</strong> The partially shaded outer region where only a portion of the light source is blocked. Observers in this zone see a partial eclipse.
  </div>
</div>`,

  "geomorphology-rocks": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> Formation of Continents: Wegener vs. Plate Tectonics
  </h3>
  <p style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px;">
    The geological understanding of continental movement and ocean formation evolved through two major theories:
  </p>
  
  <div style="margin-bottom: 20px;">
    <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 15px; font-weight: 600;">1. Continental Drift Theory (Alfred Wegener, 1912)</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 8px;">
      Wegener proposed that all continents were once merged into a single supercontinent called <strong>Pangaea</strong> (surrounded by a massive ocean called <strong>Panthalassa</strong>).
    </p>
    <ul style="list-style-type: disc; padding-left: 20px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">
      <li>Pangaea began splitting in the Mesozoic era into <strong>Laurasia</strong> (northern landmass) and <strong>Gondwanaland</strong> (southern landmass), with the Tethys Sea in between.</li>
      <li><strong>Evidences:</strong> Matching of continental shorelines (Jigsaw-fit), Fossil distribution (Mesosaurus, Glossopteris), Tillite deposits (glacial sedimentary rocks), and Placer deposits of gold.</li>
      <li><strong>Limitation:</strong> Wegener failed to explain the driving force behind the drift (he attributed it to tidal and polar-fleeing forces, which were mathematically too weak).</li>
    </ul>
  </div>

  <div style="margin-bottom: 20px;">
    <h4 style="color: var(--info); margin-bottom: 6px; font-size: 15px; font-weight: 600;">2. Plate Tectonic Theory (McKenzie, Parker & Morgan, 1967)</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 8px;">
      This theory states that the Earth's rigid outer shell (<strong>lithosphere</strong>) is broken into a series of massive and minor plates. These plates float and glide over a semi-fluid layer of the upper mantle called the <strong>asthenosphere</strong>.
    </p>
    <ul style="list-style-type: disc; padding-left: 20px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">
      <li><strong>Driving Force:</strong> Convection currents generated by radioactive decay in the Earth's mantle move these plates.</li>
      <li><strong>Major Plates (7):</strong> Eurasian, Indo-Australian, Antarctic, North American, South American, Pacific, and African plates.</li>
      <li><strong>Minor Plates (Examples):</strong> Juan de Fuca (between Pacific and N. American), Cocos (between Pacific and Central American), Nazca (between Pacific and S. American), Caribbean, and Arabian plates.</li>
      <li><strong>Plate Boundaries:</strong> Divergent (plates move apart, e.g. Mid-Atlantic Ridge), Convergent (plates collide, e.g. Himalayas), and Transform (plates slide past each other, e.g. San Andreas Fault).</li>
    </ul>
  </div>
</div>`
};

// Detailed additions for notes_extra_8.js
const additions8 = {
  "plant-kingdom": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> High-Yield Plant Kingdom Taxonomy & Micro-Details
  </h3>
  <p style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px;">
    Important classification features and examples from the latest exam papers:
  </p>
  <div style="margin-bottom: 16px;">
    <strong style="color: var(--text-primary); font-size: 14.5px; display: block; margin-bottom: 6px;">Algae (Thallophyta) Structural Variations:</strong>
    <ul style="list-style-type: square; padding-left: 20px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
      <li><strong>Non-motile Unicellular Algae:</strong> <em>Chlorella</em> (highly rich in proteins, used in space research).</li>
      <li><strong>Motile Unicellular Algae:</strong> <em>Chlamydomonas</em> (has flagella for locomotion).</li>
      <li><strong>Multicellular/Filamentous Algae:</strong> <em>Chara</em> (stonewort, showing complex branching), <em>Spirogyra</em> (pond silk, spiral chloroplasts).</li>
      <li><strong>Macroscopic Marine Algae:</strong> <em>Sargassum</em> (forms massive floating mats in the Sargasso Sea).</li>
    </ul>
  </div>
  
  <div style="margin-bottom: 16px;">
    <strong style="color: var(--text-primary); font-size: 14.5px; display: block; margin-bottom: 6px;">Bryophyta Reproduction Details:</strong>
    <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">
      In Bryophytes, the plant body is gametophytic. The male sex organ is the <strong>Antheridium</strong> (produces biflagellate antherozoids), and the female sex organ is the flask-shaped <strong>Archegonium</strong> (produces a single egg). Fertilization takes place exclusively in water.
    </p>
  </div>

  <div>
    <strong style="color: var(--text-primary); font-size: 14.5px; display: block; margin-bottom: 6px;">Gymnosperm Pollination:</strong>
    <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">
      Gymnosperms have naked ovules exposed directly on micro/megasporophylls. Pollination is exclusively <strong>Anemophilous</strong> (carried out by wind). They have taproot systems, and some show symbiotic associations (e.g. mycorrhiza in <em>Pinus</em>, coralloid roots in <em>Cycas</em>).
    </p>
  </div>
</div>`
};

// Detailed additions for notes_extra_9.js
const additions9 = {
  "world-geography-straits-deserts": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> Global Geography Key Intersections & Chokepoints
  </h3>
  
  <div style="margin-bottom: 20px;">
    <h4 style="color: var(--accent); margin-bottom: 8px; font-size: 15px; font-weight: 600;">1. Countries passing through the Equator (0° Latitude)</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 8px;">
      The equator intersects 13 countries globally across three continents:
    </p>
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 12px; border-radius: 6px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
      • <strong>South America:</strong> Ecuador, Colombia, Brazil<br>
      • <strong>Africa:</strong> Gabon, Republic of the Congo, Democratic Republic of the Congo, Uganda, Kenya, Somalia, Sao Tome and Principe<br>
      • <strong>Asia:</strong> Maldives, Indonesia, Kiribati
    </div>
  </div>

  <div style="margin-bottom: 20px;">
    <h4 style="color: var(--info); margin-bottom: 8px; font-size: 15px; font-weight: 600;">2. World Grasslands Mapping</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 8px;">
      Grasslands are divided into tropical and temperate zones. UPSC regularly tests their locations:
    </p>
    <table style="width: 100%; border-collapse: collapse; color: var(--text-secondary); font-size: 13px; text-align: left; margin-top: 8px;">
      <thead>
        <tr style="border-bottom: 2px solid var(--border); background: rgba(255,255,255,0.04);">
          <th style="padding: 8px; font-weight: 600; border: 1px solid var(--border); color: var(--text-primary);">Grassland Name</th>
          <th style="padding: 8px; font-weight: 600; border: 1px solid var(--border); color: var(--text-primary);">Region / Location</th>
          <th style="padding: 8px; font-weight: 600; border: 1px solid var(--border); color: var(--text-primary);">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">Prairies</td>
          <td style="padding: 8px; border: 1px solid var(--border);">North America (USA & Canada)</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Temperate</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">Pampas</td>
          <td style="padding: 8px; border: 1px solid var(--border);">South America (Argentina)</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Temperate</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">Savanna</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Central & East Africa</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Tropical</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">Velds</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Southern Africa (South Africa)</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Temperate</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">Steppes</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Eurasia (Eastern Europe & Central Asia)</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Temperate</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
          <td style="padding: 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">Downs</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Australia</td>
          <td style="padding: 8px; border: 1px solid var(--border);">Temperate</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 14px; border-radius: 8px;">
      <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 14.5px; font-weight: 600;"> Aral Sea Boundaries</h4>
      <p style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">
        The <strong>Aral Sea</strong> is actually a landlocked endorheic lake. It lies in Central Asia, directly positioned between <strong>Kazakhstan</strong> to the north and <strong>Uzbekistan</strong> to the south. Once one of the largest lakes in the world, it has severely shrunk due to Soviet irrigation diversions.
      </p>
    </div>
    
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 14px; border-radius: 8px;">
      <h4 style="color: var(--info); margin-bottom: 6px; font-size: 14.5px; font-weight: 600;"> Strait of Gibraltar</h4>
      <p style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">
        A key maritime choke point connecting the <strong>Atlantic Ocean</strong> with the <strong>Mediterranean Sea</strong>. It separates the European continent (<strong>Spain</strong>) from the African continent (<strong>Morocco</strong>). The narrowest gap is only 14.3 kilometers wide.
      </p>
    </div>
  </div>
</div>`
};

// Detailed additions for notes_extra_history.js
const additionsHistory = {
  "british-expansion": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> British Consolidation in Bengal: Treaties & Power Division
  </h3>
  
  <div style="margin-bottom: 20px;">
    <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 15px; font-weight: 600;">1. Shift from Mir Jafar to Mir Qasim</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary);">
      Following Plassey, the EIC made Mir Jafar a puppet. Desiring more revenue, they replaced him with his son-in-law <strong>Mir Qasim</strong> in 1760. Mir Qasim granted the EIC zamindari of Burdwan, Midnapore, and Chittagong. However, to escape EIC control and stop transit abuse (dastaks), he shifted his capital from Murshidabad to Monghyr and declared free trade for local Indian merchants as well. This led directly to conflict and the Battle of Buxar (1764).
    </p>
  </div>

  <div style="margin-bottom: 20px;">
    <h4 style="color: var(--info); margin-bottom: 6px; font-size: 15px; font-weight: 600;">2. Treaty of Allahabad (August 1765)</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 8px;">
      Following Buxar, Robert Clive signed two separate treaties at Allahabad:
    </p>
    <ul style="list-style-type: disc; padding-left: 20px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">
      <li><strong>With Mughal Emperor Shah Alam II:</strong> The Emperor was placed in the Allahabad Fort as a virtual prisoner. He granted the EIC the <strong>Diwani rights</strong> (collection of land revenue) of Bengal, Bihar, and Orissa in exchange for an annual pension of ₹26 lakh.</li>
      <li><strong>With Nawab of Awadh Shuja-ud-daulah:</strong> Surrendered districts of Kara and Allahabad to Shah Alam II. Agreed to pay ₹50 lakh war indemnity to the EIC. Signed an offensive/defensive alliance and granted EIC free trade rights in Awadh.</li>
    </ul>
  </div>

  <div>
    <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 15px; font-weight: 600;">3. The Dual System in Bengal (1765–1772)</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 8px;">
      Robert Clive introduced a system where power and responsibility were completely separated:
    </p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 13px; line-height: 1.5;">
      <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid var(--danger); padding: 12px; border-radius: 4px;">
        <strong style="color: var(--danger);"> Diwani (Revenue Collection)</strong>
        Held directly by the East India Company. They held all the actual financial power but had zero administrative responsibility.
      </div>
      <div style="background: rgba(14, 165, 233, 0.08); border-left: 3px solid var(--info); padding: 12px; border-radius: 4px;">
        <strong style="color: var(--info);">️ Nizamat (Administration & Justice)</strong>
        Held by the Nawab of Bengal. He was given full responsibility for civil/criminal justice and law and order but had zero financial resources.
      </div>
    </div>
    <p style="font-size: 13px; color: var(--text-muted); margin-top: 10px; line-height: 1.4;">
      *Note: Warren Hastings abolished this Dual System in 1772, bringing Bengal under direct EIC administration.
    </p>
  </div>
</div>`,

  "freedom-movement": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> Key Milestones of the Indian Freedom Movement
  </h3>
  
  <div style="margin-bottom: 20px;">
    <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 15px; font-weight: 600;">1. The August Declaration (Montague Declaration, 1917)</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary);">
      On August 20, 1917, the Secretary of State for India, Edwin Montague, made a historic statement in the British House of Commons. Working with Viceroy Lord Chelmsford, he declared that the policy of His Majesty's government was the gradual development of self-governing institutions with a view to the progressive realization of responsible government in India. However, the declaration made it clear that India would remain an integral part of the British Empire. This became the basis of the Montagu-Chelmsford Reforms (Govt of India Act, 1919).
    </p>
  </div>

  <div>
    <h4 style="color: var(--info); margin-bottom: 6px; font-size: 15px; font-weight: 600;">2. Jallianwala Bagh Massacre (April 13, 1919)</h4>
    <p style="font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); margin-bottom: 8px;">
      On Baisakhi day, a peaceful crowd gathered at the Jallianwala Bagh in Amritsar. The meeting was called to protest against the Rowlatt Act and the arbitrary arrest of two prominent local leaders, <strong>Dr. Saifuddin Kitchlew</strong> and <strong>Dr. Satyapal</strong>.
    </p>
    <ul style="list-style-type: disc; padding-left: 20px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.5;">
      <li>Brigadier-General Reginald Dyer blockaded the narrow exit gates and ordered troops to open fire on the unarmed gathering without warning. Firing continued for 10 minutes until ammunition was exhausted, killing hundreds.</li>
      <li>In protest, Rabindranath Tagore renounced his British Knighthood. Mahatma Gandhi returned his Kaiser-i-Hind gold medal.</li>
      <li>Under public outrage, the British government appointed the <strong>Hunter Committee</strong> (1919) to investigate the incident. Indian National Congress also appointed its own parallel inquiry committee (featuring Motilal Nehru and C.R. Das).</li>
    </ul>
  </div>
</div>`,

  "international-institutions": `
<div class="revision-card" style="background: rgba(20,20,30,0.45); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); backdrop-filter: blur(8px);">
  <h3 style="color: var(--accent); margin-bottom: 18px; border-bottom: 2px solid rgba(249, 115, 22, 0.3); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 700; font-family: var(--font-logo);">
    <span></span> International & Regional Strategic Organizations
  </h3>
  <p style="line-height: 1.6; color: var(--text-secondary); margin-bottom: 16px;">
    Important regional alliances and international groups, focusing on India's diplomatic position and membership:
  </p>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 14px; border-radius: 8px;">
      <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 14.5px; font-weight: 600;"> SAARC (Est. 1985)</h4>
      <p style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">
        <strong>South Asian Association for Regional Cooperation</strong>. Founded on Dec 8, 1985 at Dhaka, Bangladesh. Headquarters located in <strong>Kathmandu, Nepal</strong>.
        <br>• <strong>Members (8):</strong> India, Pakistan, Afghanistan, Nepal, Bhutan, Bangladesh, Sri Lanka, and Maldives.
      </p>
    </div>
    
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 14px; border-radius: 8px;">
      <h4 style="color: var(--info); margin-bottom: 6px; font-size: 14.5px; font-weight: 600;"> BIMSTEC (Est. 1997)</h4>
      <p style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">
        <strong>Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation</strong>. Focuses on regional cooperation around Bay of Bengal.
        <br>• <strong>Members (7):</strong> India, Nepal, Bhutan, Bangladesh, Sri Lanka, Myanmar, and Thailand. (Note: Pakistan is NOT a member).
      </p>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 14px; border-radius: 8px;">
      <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 14.5px; font-weight: 600;"> ASEAN (Est. 1967)</h4>
      <p style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">
        <strong>Association of Southeast Asian Nations</strong>. Est. by Bangkok Declaration.
        <br>• <strong>Members (10):</strong> Myanmar, Thailand, Laos, Cambodia, Vietnam, Malaysia, Singapore, Indonesia, Brunei, Philippines.
        <br>• <strong>India's status:</strong> India is a Sectoral Dialogue Partner (since 1992), Full Dialogue Partner (1995), and Summit Partner (2002).
      </p>
    </div>
    
    <div style="background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 14px; border-radius: 8px;">
      <h4 style="color: var(--info); margin-bottom: 6px; font-size: 14.5px; font-weight: 600;"> SCO (Est. 2001)</h4>
      <p style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">
        <strong>Shanghai Cooperation Organisation</strong>. Eurasian political, economic, and security alliance.
        <br>• <strong>Founders:</strong> Russia, China, Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan.
        <br>• <strong>India & Pakistan:</strong> Joined simultaneously as full members in <strong>2017</strong>.
      </p>
    </div>
  </div>

  <div style="margin-bottom: 20px; background: rgba(10,10,15,0.3); border: 1px solid var(--border); padding: 14px; border-radius: 8px;">
    <h4 style="color: var(--accent); margin-bottom: 6px; font-size: 14.5px; font-weight: 600;"> BRICS (Est. 2009)</h4>
    <p style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">
      Originally formed by <strong>Brazil, Russia, India, China, South Africa</strong> (joined in 2010). 
      <br>• <strong>Recent Expansion:</strong> Joined by Saudi Arabia, United United Arab Emirates (UAE), Iran, Egypt, and Ethiopia.
    </p>
  </div>

  <div>
    <h4 style="color: var(--text-primary); margin-bottom: 8px; font-size: 14.5px; font-weight: 600;"> India's Membership Matrix</h4>
    <table style="width: 100%; border-collapse: collapse; color: var(--text-secondary); font-size: 12.5px; text-align: left; margin-top: 8px;">
      <thead>
        <tr style="border-bottom: 2px solid var(--border); background: rgba(255,255,255,0.04);">
          <th style="padding: 8px; font-weight: 600; border: 1px solid var(--border); color: var(--text-primary);">Org</th>
          <th style="padding: 8px; font-weight: 600; border: 1px solid var(--border); color: var(--text-primary);">Status</th>
          <th style="padding: 8px; font-weight: 600; border: 1px solid var(--border); color: var(--text-primary);">Org</th>
          <th style="padding: 8px; font-weight: 600; border: 1px solid var(--border); color: var(--text-primary);">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 6px 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">ADB</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border);">Member</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">G-15</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border);">Member</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
          <td style="padding: 6px 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">AfDB</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border);">Member (Non-regional)</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">FAO</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border);">Member</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border);">
          <td style="padding: 6px 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">Australia Group</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border);">Member</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">CERN</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border);">Associate Member</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.02);">
          <td style="padding: 6px 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">ASEAN</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border);">Dialogue / Summit Partner</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border); font-weight: 600; color: var(--text-primary);">EAS</td>
          <td style="padding: 6px 8px; border: 1px solid var(--border);">Member</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`
};

function integrateFile(filename, additions) {
  const filePath = path.resolve(filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filename}`);
    return false;
  }
  let code = fs.readFileSync(filePath, 'utf8');
  let originalCode = code;
  let modifiedCount = 0;

  for (const [key, value] of Object.entries(additions)) {
    // Regex matches: EXPANDED_NOTES_DATA["key"] = `...` or EXPANDED_NOTES_DATA['key'] = `...`
    // We capture the declaration up to the backtick, the existing HTML content, and the ending backtick and semicolon.
    const pattern = new RegExp(`(EXPANDED_NOTES_DATA\\[["']${key}["']\\]\\s*=\\s*\`)([\\s\\S]*?)(\`;)`, 'g');
    if (pattern.test(code)) {
      code = code.replace(pattern, (match, declaration, existingHtml, closeAndSemicolon) => {
        // Only append if not already appended
        if (existingHtml.includes(value.substring(0, 100))) {
          console.log(`Key "${key}" already integrated in ${filename}.`);
          return match;
        }
        // Append the new card HTML before the closing backtick of the template literal
        // We trim the closing tags of existing HTML if needed, but since it's just appending, we can append directly.
        // Let's ensure there is proper spacing.
        const cleanExisting = existingHtml.trim();
        const cleanValue = value.trim();
        console.log(`Integrating key "${key}" in ${filename}...`);
        modifiedCount++;
        return `${declaration}${cleanExisting}\n\n${cleanValue}${closeAndSemicolon}`;
      });
    } else {
      console.error(`ERROR: Key "${key}" not found in ${filename}`);
    }
  }

  if (modifiedCount > 0) {
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`Saved ${filename}.`);
    return true;
  }
  return false;
}

function main() {
  console.log("Starting integration of Google Drive notes into respective JS files...");

  // 1. notes_extra_polity.js
  integrateFile("notes_extra_polity.js", additionsPolity);

  // 2. notes_extra_4.js
  integrateFile("notes_extra_4.js", additions4);

  // 3. notes_extra_8.js
  integrateFile("notes_extra_8.js", additions8);

  // 4. notes_extra_9.js
  integrateFile("notes_extra_9.js", additions9);

  // 5. notes_extra_history.js
  integrateFile("notes_extra_history.js", additionsHistory);

  console.log("Integration process completed!");
}

main();
