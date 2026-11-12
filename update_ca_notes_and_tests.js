/**
 * update_ca_notes_and_tests.js
 * Synchronizes Current Affairs Syllabus Notes, Monthly Capsules, Official Syllabus Map,
 * AI Generated Notes, and Practice Mock Tests (CBT_EXAMS_DATABASE) through November 2026.
 */
const fs = require('fs');
const path = require('path');

// 1. Define the 4 Master Monthly Capsules (August, September, October, November 2026)
const CAPSULE_AUG_2026 = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:16px;">
    <h3 style="color: #4ade80; margin:0; font-weight: 700; font-size:1.3rem;">Tactical Sitrep: August 2026 Master Current Affairs Capsule</h3>
    <span style="background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid #4ade80; border-radius:4px; padding:3px 8px; font-size:0.75rem; font-weight:600;">HIGH-YIELD CYCLE 2026-27</span>
  </div>

  <h4 style="color:#4ade80; margin-top:20px; margin-bottom:10px; font-size:1.1rem;">1. Defence Production &amp; Force Modernization</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Historic Domestic Defence Production Record:</strong> Crossed <strong>₹1.78 lakh crore</strong> in FY 2025–26, marking a near 4-fold increase since 2014 driven by private &amp; public sector defence corridors.</li>
    <li><strong>Diving Support Vessel (DSV) INS Nipun Commissioned:</strong> Second indigenously designed DSV built by Hindustan Shipyard Limited (HSL), Visakhapatnam. Equipped with Deep Submergence Rescue Vehicle (DSRV) mating capability for submarine rescue. Fifth Diving Support Craft (DSC A24) also launched at Titagarh (Kolkata).</li>
    <li><strong>Xtreme Weather Grade (XWG) Diesel:</strong> Indian Army and IOCL launched winterized diesel engineered to operate effectively down to <strong>-42°C</strong>, ensuring uninterrupted winter mobility across Eastern Ladakh and the Siachen Glacier.</li>
    <li><strong>Javelin ATGM &amp; SAFHAL IMRH Engine:</strong> Tata Advanced Systems (TASL) and Lockheed Martin signed an agreement to explore domestic co-production of the Javelin anti-tank missile. HAL and Safran operationalized the SAFHAL joint venture in Bengaluru for the Aravalli engine (IMRH helicopter).</li>
    <li><strong>Global Combat Air Programme (GCAP) Engagement:</strong> India joined the 6th-generation fighter programme (UK, Japan, Italy) as a Dialogue Partner to study fifth-plus generation avionics while advancing the indigenous AMCA project.</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:20px; margin-bottom:10px; font-size:1.1rem;">2. Joint Exercises &amp; Bilateral Strategic Dialogues</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Exercise Udara Shakti 2026:</strong> Bilateral combat air drill between Indian Air Force (Su-30MKI) and Royal Malaysian Air Force (Su-30MKM) at Kuantan, Malaysia.</li>
    <li><strong>Exercise Mitra Shakti 2026 (10th Edition):</strong> India-Sri Lanka joint military counter-insurgency exercise at Maduru Oya, Sri Lanka.</li>
    <li><strong>India-Japan High-Level Engagements:</strong> Defence Minister Rajnath Singh hosted Japanese Minister Shinjiro Koizumi in New Delhi, reaffirming QUAD coordination and Free and Open Indo-Pacific (FOIP) security.</li>
    <li><strong>Rejection of China's Renaming in Arunachal Pradesh:</strong> India firmly rejected China's 4th list of 30 renamed places in Arunachal Pradesh, reiterating the 1914 McMahon Line boundary framework.</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:20px; margin-bottom:10px; font-size:1.1rem;">3. Space, Environment &amp; Economy</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>National Space Day (August 23):</strong> Celebrated nationwide commemorating the landing of Chandrayaan-3 at 'Shiv Shakti Point' on the Moon's South Pole.</li>
    <li><strong>Arunachal Pradesh's 1st Ramsar Site:</strong> High-altitude glacial lake <em>Sangetsar Tso</em> (Madhuri Lake) in Tawang district designated as a Ramsar Wetland of International Importance.</li>
    <li><strong>Record Forex Reserves:</strong> Surged to an all-time high of <strong>$729.33 billion</strong> in August 2026.</li>
  </ul>
</div>
`.trim();

const CAPSULE_SEP_2026 = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:16px;">
    <h3 style="color: #4ade80; margin:0; font-weight: 700; font-size:1.3rem;">Tactical Sitrep: September 2026 Master Current Affairs Capsule</h3>
    <span style="background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid #4ade80; border-radius:4px; padding:3px 8px; font-size:0.75rem; font-weight:600;">HIGH-YIELD CYCLE 2026-27</span>
  </div>

  <h4 style="color:#4ade80; margin-top:20px; margin-bottom:10px; font-size:1.1rem;">1. Air Power, Missile Procurement &amp; Stand-off Weapons</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Exercise Tarang Shakti 2026:</strong> IAF hosted its largest-ever multinational air exercise at Jodhpur, Rajasthan, featuring nearly 40 air forces. Validated complex composite air operations (COMAO) alongside indigenous LCA Tejas, Prachand LCH, and Netra AEW&amp;C.</li>
    <li><strong>160 SAT-SAAW Precision Glide Bombs:</strong> Ministry of Defence signed ₹810.79 crore contract with Bharat Dynamics Limited (BDL) for 160 Satellite Smart Anti-Airfield Weapons (SAT-SAAW), capable of precision stand-off runway cratering from up to 100 km.</li>
    <li><strong>Exercise Yudh Abhyas 2026 (22nd Edition):</strong> India-US joint military exercise at Mahajan Field Firing Range (Rajasthan); featured field combat demonstrations of indigenously assembled <strong>SkyStriker</strong> loitering munitions.</li>
    <li><strong>Exercise Varuna 2026:</strong> 22nd edition of Indo-French naval exercise in the Arabian Sea and Mediterranean featuring French Carrier Strike Group and Indian stealth destroyers.</li>
    <li><strong>Exercise SLINEX-26:</strong> Bilateral naval exercise between Indian Navy and Sri Lanka Navy conducted at Colombo, validating surface gunnery, VBSS, and maritime domain awareness under SAGAR.</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:20px; margin-bottom:10px; font-size:1.1rem;">2. Strategic Space, Quantum Tech &amp; National Manufacturing</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>ISRO EOS-05 Earth Observation Satellite:</strong> Launched via GSLV Mark II rocket into Geosynchronous Transfer Orbit (GTO) / GEO for real-time 24/7 disaster monitoring and border surveillance.</li>
    <li><strong>Indo-French TRISHNA Mission:</strong> Joint thermal infrared satellite project between ISRO and CNES (France) progressed towards final payload integration for microclimate and water management.</li>
    <li><strong>DRDO TDF Quantum Breakthrough:</strong> DRDO contracted Zero mK India to indigenously develop a <strong>20 mK Dilution Refrigerator</strong>, a vital component for superconducting quantum computing and ultra-cold sensors.</li>
    <li><strong>12th Anniversary of 'Make in India' (Sept 25):</strong> Marked by milestone domestic production numbers across defence, electronics, and automotive sectors under DPIIT.</li>
    <li><strong>BEL Electronic Artillery Fuses:</strong> Ministry of Defence agreement with Bharat Electronics Limited to domestically produce proximity fuses for 155mm Dhanush, K9 Vajra, and ATAGS artillery systems.</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:20px; margin-bottom:10px; font-size:1.1rem;">3. Global Diplomacy, Sports &amp; Economy</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Historic Double Gold at 45th Chess Olympiad (Budapest):</strong> India clinched historic team Gold in both Open and Women's categories (D. Gukesh, Arjun Erigaisi, Praggnanandhaa, Divya Deshmukh).</li>
    <li><strong>20th Asian Games (Aichi-Nagoya, Japan):</strong> Indian Men's and Women's Kabaddi teams both bagged Gold medals.</li>
    <li><strong>COAS General Dhiraj Seth Visits Russia:</strong> High-level review in Moscow on T-90 spares, AK-203 rifle production at Korwa (Amethi), and S-400 Triumf delivery schedules.</li>
    <li><strong>Defence Minister's Sri Lanka Visit:</strong> Signed three key defence MoUs in Colombo regarding maritime security infrastructure and patrol craft spares under the SAGAR doctrine.</li>
    <li><strong>OECD Upgrades India's GDP Forecast to 7.1%:</strong> Upgraded for FY 2026-27 citing strong domestic manufacturing and service exports.</li>
    <li><strong>World Ozone Day (Sept 16):</strong> Themed 'Montreal Protocol: Advancing Climate Action', commemorating the 1987 treaty and Kigali Amendment.</li>
  </ul>
</div>
`.trim();

const CAPSULE_OCT_2026 = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:16px;">
    <h3 style="color: #4ade80; margin:0; font-weight: 700; font-size:1.3rem;">Tactical Sitrep: October 2026 Master Current Affairs Capsule</h3>
    <span style="background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid #4ade80; border-radius:4px; padding:3px 8px; font-size:0.75rem; font-weight:600;">HIGH-YIELD CYCLE 2026-27</span>
  </div>

  <p style="color:#e2e8f0; line-height:1.6;">
    October 2026 represents a watershed month in India's defence modernization, border diplomacy, strategic deterrence, and geopolitical posture. This capsule provides structured, exam-calibrated notes designed specifically for <strong>UPSC CDS, NDA, AFCAT, and CAPF</strong> aspirants.
  </p>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">1. Strategic Deterrence, Submarine Nuclear Triad &amp; Shipbuilding</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Launch of SSBN S4* (Visakhapatnam):</strong> India launched its 4th Nuclear-Powered Ballistic Missile Submarine codenamed <em>S4*</em> at the Ship Building Centre (SBC).
      <ul style="color:#cbd5e1; margin-top:4px;">
        <li>Sequence of Indian SSBNs: <strong>INS Arihant (S2) &rarr; INS Arighaat (S3) &rarr; S4 (Aridhaman) &rarr; S4*</strong>.</li>
        <li>Features enlarged vertical launch systems capable of carrying intermediate-range nuclear SLBMs (K-4 with ~3,500 km range, and future K-5 with ~5,000 km range).</li>
        <li>Completes India's continuous at-sea deterrence (CASD) posture, ensuring a credible second-strike capability under India's 'No First Use' (NFU) nuclear doctrine.</li>
      </ul>
    </li>
    <li><strong>Project 77 (SSN Hunter-Killer Submarines):</strong> Cabinet Committee on Security (CCS) sanctioned over <strong>₹40,000 crore</strong> for indigenous design and construction of two Nuclear-Powered Attack Submarines (SSNs) at SBC, Visakhapatnam.</li>
    <li><strong>Naval &amp; Coast Guard Vessel Milestones:</strong>
      <ul style="color:#cbd5e1; margin-top:4px;">
        <li><strong>Nirdeshak (Yard 3026):</strong> 2nd of four Survey Vessels (Large) delivered by GRSE, Kolkata (after <em>INS Sandhayak</em>).</li>
        <li><strong>Abhay:</strong> 7th Anti-Submarine Warfare Shallow Water Craft (ASW-SWC) built by GRSE launched at L&amp;T Kattupalli; <strong>INS Mangrol</strong> built by CSL also inducted.</li>
        <li><strong>Adamya &amp; Akshar:</strong> Fast Patrol Vessels (FPVs) built by Goa Shipyard Limited (GSL) for the Indian Coast Guard featuring indigenous Controllable Pitch Propellers (CPP).</li>
      </ul>
    </li>
  </ul>

  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 16px 0; border-radius: 0 8px 8px 0;">
    <strong style="color:#4ade80;">⚡ Exam Memory Trick (Submarine Sequence):</strong><br>
    Remember the acronym <strong>A-A-A-S</strong>: <strong>A</strong>rihant (S2) &rarr; <strong>A</strong>righaat (S3) &rarr; <strong>A</strong>ridhaman (S4) &rarr; <strong>S</strong>4* (S4 Star).
  </div>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">2. Major Defence Acquisitions, Aviation &amp; Indigenisation</h4>
  <table style="width:100%; border-collapse:collapse; margin:16px 0; font-size:0.85rem;">
    <thead>
      <tr style="background:rgba(74,222,128,0.15); color:#4ade80;">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Platform / Initiative</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Key Specifications &amp; Partners</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Strategic Role</th>
      </tr>
    </thead>
    <tbody style="color:#e2e8f0;">
      <tr style="background:rgba(255,255,255,0.02);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Tata-Airbus C-295 FAL (Vadodara)</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Inaugurated by PM Modi &amp; Spanish PM Pedro Sánchez.<br>56 total aircraft: 16 fly-away from Seville (Spain) + <strong>40 manufactured in Vadodara by TASL</strong>.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">India's 1st private sector military aircraft Final Assembly Line; replaces legacy HS-748 Avro fleet with STOL capability for ALGs.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.04);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>MQ-9B Predator (General Atomics)</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">31 Drones ($3.99B, FMS route)<br>&bull; Navy: 16 SeaGuardians<br>&bull; Army: 8 SkyGuardians &bull; IAF: 8 SkyGuardians</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">High-Altitude Long-Endurance (HALE) armed ISR over LAC and Indian Ocean Region (IOR). Over 35 hours endurance.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.02);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Swavlamban 3.0 &amp; ADITI 3.0</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">NIIO seminar at Bharat Mandapam.<br>Launched <strong>ADITI 3.0</strong> (up to ₹25 Cr grant for deep-tech) &amp; <strong>DISC 13</strong> under iDEX.</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Includes high-power microwave weapons, autonomous underwater swarm drones, and quantum key distribution.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.04);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Pralay Quasi-Ballistic Missile</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">DRDO developed, Range: 350-500 km, Solid-fuel canisterised</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Conventional tactical strike weapon capable of mid-flight maneuver to defeat missile defence shields.</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">3. Border Diplomacy, Summits &amp; Geopolitics</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>India-China LAC Patrolling Agreement (Depsang &amp; Demchok):</strong> Landmark disengagement and patrolling restoration pact along the Line of Actual Control (LAC) in Eastern Ladakh.
      <ul style="color:#cbd5e1; margin-top:4px;">
        <li>Restores coordinated patrolling rights up to traditional Patrolling Points (PP-10 to PP-13 in Depsang Bulge near Daulat Beg Oldie/Sub-Sector North, and Charding Ninglung Nallah junction in Demchok) to pre-April 2020 status.</li>
        <li>Paved the way for the formal bilateral summit between PM Modi and Chinese President Xi Jinping on the sidelines of the <strong>16th BRICS Summit in Kazan, Russia</strong>.</li>
      </ul>
    </li>
    <li><strong>7th India-Germany Intergovernmental Consultations (IGC):</strong> Co-chaired by PM Modi and German Chancellor Olaf Scholz in New Delhi alongside the 18th Asia-Pacific Conference of German Business (APK 2026). Germany released its <em>'Focus on India'</em> strategic policy document and raised the skilled visa quota for Indians from 20,000 to <strong>90,000 per year</strong>.</li>
    <li><strong>23rd SCO Council of Heads of Government (Islamabad):</strong> EAM Dr. S. Jaishankar represented India, emphasizing territorial integrity and the 'Three Evils' counter-terror framework.</li>
    <li><strong>New Global Leadership Transitions:</strong> Former Defence Minister <strong>Prabowo Subianto</strong> sworn in as the 8th President of Indonesia; General <strong>Lương Cường</strong> elected President of Vietnam by the National Assembly.</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">4. Joint Military Exercises Tracker (October 2026)</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Exercise MALABAR 2026:</strong> QUAD multilateral naval drill (India, USA, Japan, Australia) hosted in Visakhapatnam / Bay of Bengal.</li>
    <li><strong>Exercise SIMBEX 2026 (31st Edition):</strong> Singapore-India Maritime Bilateral Exercise (Eastern Fleet, Visakhapatnam). Longest uninterrupted bilateral naval exercise of the Indian Navy.</li>
    <li><strong>Exercise Naseem Al Bahr (14th Edition):</strong> Bilateral naval exercise between Indian Navy (<em>INS Trikand</em>, Dornier MPA) and Royal Navy of Oman (<em>RNOV Al Seeb</em>) off Goa.</li>
    <li><strong>Indo-German Maritime Partnership Exercise:</strong> Indian Navy destroyer <em>INS Delhi</em> conducted joint drills in the Indian Ocean with German Navy frigate <em>FGS Baden-Württemberg</em> and combat support ship <em>FGS Frankfurt am Main</em>.</li>
    <li><strong>Exercise IBSAMAR VIII:</strong> Trilateral exercise between India (<em>INS Talwar</em>), Brazil, and South Africa at Simon's Town, South Africa.</li>
    <li><strong>Exercise KAZIND-2026 (8th Edition):</strong> India-Kazakhstan joint counter-terrorism drill; <strong>Exercise Al Najah V:</strong> India-Oman army exercise at Rabkoot.</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">5. Nobel Prizes 2026 &amp; Major Awards Summary</h4>
  <table style="width:100%; border-collapse:collapse; margin:16px 0; font-size:0.85rem;">
    <thead>
      <tr style="background:rgba(74,222,128,0.15); color:#4ade80;">
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Award / Category</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Laureates &amp; Country</th>
        <th style="padding:10px; border:1px solid rgba(255,255,255,0.1); text-align:left;">Contribution / Breakthrough</th>
      </tr>
    </thead>
    <tbody style="color:#e2e8f0;">
      <tr style="background:rgba(255,255,255,0.02);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Nobel Medicine</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Victor Ambros &amp; Gary Ruvkun (USA)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Discovery of <em>microRNA</em> and its role in post-transcriptional gene regulation.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.04);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Nobel Physics</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">John J. Hopfield &amp; Geoffrey E. Hinton</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Foundational discoveries enabling machine learning with artificial neural networks.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.02);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Nobel Chemistry</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">David Baker (1/2) &amp; Demis Hassabis / John M. Jumper (1/2)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Computational protein design (Baker) and protein structure prediction via <em>AlphaFold2</em> (Hassabis &amp; Jumper).</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.04);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Nobel Literature</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Han Kang (South Korea)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">First South Korean and first Asian female laureate; intense poetic prose confronting historical trauma.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.02);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Nobel Peace</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Nihon Hidankyo (Japan)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Grassroots movement of atomic bomb survivors (<em>Hibakusha</em>) working for a nuclear-free world.</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.04);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>Nobel Economics</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Daron Acemoglu, Simon Johnson &amp; James A. Robinson</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Studies on how societal institutions are formed and affect national prosperity (inclusive vs extractive).</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.02);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>54th Dadasaheb Phalke Award</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Mithun Chakraborty (India)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">India's highest cinema honour conferred at the 70th National Film Awards (Debut: <em>Mrigayaa</em>, 1976).</td>
      </tr>
      <tr style="background:rgba(255,255,255,0.04);">
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);"><strong>IAF World Space Award</strong></td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">ISRO (Chandrayaan-3 Team)</td>
        <td style="padding:10px; border:1px solid rgba(255,255,255,0.1);">Presented at 75th International Astronautical Congress (Milan) for historic lunar south pole landing.</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">6. Polity, Governance, Climate &amp; Welfare Schemes</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>5 New Classical Languages (Total 11):</strong> Union Cabinet approved Classical status for <strong>Marathi, Pali, Prakrit, Assamese, and Bengali</strong> (joining Tamil, Sanskrit, Kannada, Telugu, Malayalam, Odia).</li>
    <li><strong>51st Chief Justice of India:</strong> Justice Sanjiv Khanna appointed under Article 124(2), succeeding Justice D.Y. Chandrachud.</li>
    <li><strong>16th Finance Commission (Article 280):</strong> Chaired by <strong>Dr. Arvind Panagariya</strong> (Secretary: Ritvik Ranjanam Pandey) covering the 5-year award period beginning April 1, 2026.</li>
    <li><strong>Ayushman Vay Vandana Card &amp; U-WIN Portal:</strong> Launched on 9th Ayurveda Day (Oct 29). Provides universal free health coverage of <strong>₹5 lakh per year</strong> to all senior citizens aged <strong>70 years and above</strong> irrespective of income under AB PM-JAY, alongside the nationwide U-WIN digital immunization platform.</li>
    <li><strong>Severe Cyclonic Storm 'Dana':</strong> Made landfall between Bhitarkanika National Park and Dhamra Port (Odisha) on Oct 24–25; name contributed by <strong>Qatar</strong> (meaning 'generosity' or 'most perfectamente sized pearl' in Arabic).</li>
    <li><strong>UN CBD COP16 (Cali, Colombia):</strong> Established the <strong>'Cali Fund'</strong> for fair sharing of benefits from Digital Sequence Information (DSI) on genetic resources. India submitted its updated NBSAP aligned with the Kunming-Montreal Global Biodiversity Framework (30x30 target).</li>
  </ul>
</div>
`.trim();

const CAPSULE_NOV_2026 = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:16px;">
    <h3 style="color: #4ade80; margin:0; font-weight: 700; font-size:1.3rem;">Tactical Sitrep: November 2026 Master Current Affairs Capsule</h3>
    <span style="background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid #4ade80; border-radius:4px; padding:3px 8px; font-size:0.75rem; font-weight:600;">LATEST SITREP — NOV 2026</span>
  </div>

  <p style="color:#e2e8f0; line-height:1.6;">
    Early November 2026 highlights special forces interoperability across the Indo-Pacific and North America, India's first indigenous analog space habitat mission in Ladakh, long-range artillery precision strikes, and constitutional/economic milestones.
  </p>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">1. Special Forces Exercises &amp; Precision Artillery</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Exercise VAJRA PRAHAR 2026 (15th Edition):</strong> Joint Special Forces exercise between the Indian Army (Para SF) and US Army Green Berets commenced at <strong>Orchard Combat Training Center, Idaho, USA</strong> (Nov 2–22). Focuses on joint mission planning, desert/mountain high-altitude special operations, tactical UAV deployment, and precision sniper fires.</li>
    <li><strong>Exercise GARUD SHAKTI 2026 (9th Edition):</strong> Bilateral Special Forces exercise between the Indian Army (<strong>Parachute Regiment Special Forces</strong>) and the Indonesian Special Forces (<strong>Kopassus</strong>) commenced at <strong>Cijantung, Jakarta, Indonesia</strong> (Nov 1–12). Validates jungle warfare, amphibious insertion, heliborne operations, and urban counter-terrorism.</li>
    <li><strong>DRDO Guided Pinaka Multi-Barrel Rocket System Flight Tests:</strong> Successful flight validation trials across multiple ranges completed.
      <ul style="color:#cbd5e1; margin-top:4px;">
        <li>Developed by ARDE (Pune) in collaboration with RCI, DRDL, and HEMRL.</li>
        <li>Increases strike range from 37.5 km (Mark-I) to <strong>over 75 km</strong> with sub-10-meter Circular Error Probable (CEP) accuracy.</li>
        <li>A single Pinaka battery (6 launchers × 12 tubes) can salvo-fire <strong>72 rockets in 44 seconds</strong>. Exported to Armenia and under evaluation by European forces.</li>
      </ul>
    </li>
  </ul>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">2. Aerospace &amp; Planetary Exploration</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>ISRO Launches India's 1st Analog Space Mission in Leh, Ladakh (Hab-1):</strong>
      <ul style="color:#cbd5e1; margin-top:4px;">
        <li>Spearheaded by ISRO's <strong>Human Spaceflight Centre (HSFC)</strong> in collaboration with <strong>AAKA Space Studio</strong>, <strong>University of Ladakh</strong>, and <strong>IIT Bombay</strong>, supported by the Ladakh Autonomous Hill Development Council (LAHDC).</li>
        <li>Simulates interplanetary habitat life in an inflatable habitat pod named <strong>'Hab-1'</strong> equipped with hydroponics, life-support, and circadian lighting.</li>
        <li><strong>Why Ladakh?</strong> High altitude (&gt;3,500 meters), hyper-arid cold desert climate, barren permafrost/rocky geology, low atmospheric pressure, and high UV radiation closely resemble Martian and Lunar surface environments, supporting the <strong>Gaganyaan</strong> programme and <strong>Bharatiya Antariksha Station (BAS)</strong>.</li>
      </ul>
    </li>
  </ul>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">3. Polity, Economic Reforms &amp; National Personalities</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Demise of EAC-PM Chairman Dr. Bibek Debroy (1955–2026):</strong> Padma Shri awardee (2015), Chairman of the Economic Advisory Council to the Prime Minister (EAC-PM), and former Permanent Member of NITI Aayog passed away on November 1.
      <ul style="color:#cbd5e1; margin-top:4px;">
        <li><strong>Bibek Debroy Committee (2015) on Indian Railways Restructuring:</strong> Recommended merging the separate Railway Budget with the Union General Budget (implemented in FY 2017–18, ending a 92-year practice started by the Acworth Committee in 1924) and unifying railway cadres into the Indian Railway Management Service (IRMS).</li>
        <li><strong>Indology &amp; Sanskrit Scholarship:</strong> Celebrated for his 10-volume unabridged English translation of the <em>Mahabharata</em>, the <em>Valmiki Ramayana</em>, the <em>Bhagavad Gita</em>, and the <em>Mahapuranas</em>.</li>
      </ul>
    </li>
    <li><strong>State Formation Days (November 1 — Rajyotsava):</strong> Marked the formation/reorganisation anniversary of <strong>Karnataka, Kerala, Madhya Pradesh, Chhattisgarh (2000), Haryana (1966), Punjab, and Andhra Pradesh</strong>, alongside UT Foundation Days of Lakshadweep and Puducherry under the States Reorganisation Act, 1956 (Fazl Ali Commission).</li>
  </ul>
</div>
`.trim();

// 2. Write clean notes_extra_current-affairs.js
const notesExtraContent = `// =============================================================================
// EXPANDED_NOTES_DATA — STRATEGIC CURRENT AFFAIRS CAPSULES (AUG–NOV 2026)
// =============================================================================
window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};
var EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA;

window.EXPANDED_NOTES_DATA["ca-november-2026-capsule"] = \`${CAPSULE_NOV_2026.replace(/`/g, '\\`')}\`;

window.EXPANDED_NOTES_DATA["ca-october-2026-capsule"] = \`${CAPSULE_OCT_2026.replace(/`/g, '\\`')}\`;

window.EXPANDED_NOTES_DATA["ca-september-2026-capsule"] = \`${CAPSULE_SEP_2026.replace(/`/g, '\\`')}\`;

window.EXPANDED_NOTES_DATA["ca-august-2026-capsule"] = \`${CAPSULE_AUG_2026.replace(/`/g, '\\`')}\`;
`;

fs.writeFileSync('notes_extra_current-affairs.js', notesExtraContent, 'utf8');
console.log('Updated notes_extra_current-affairs.js');

// 3. Update syllabus_data.js
const sylCtx = { window: {} };
const vm = require('vm');
vm.createContext(sylCtx);
vm.runInContext(fs.readFileSync('syllabus_data.js', 'utf8'), sylCtx);
const officialSyl = sylCtx.window.OFFICIAL_SYLLABUS_DATA;

officialSyl['ca-november-2026-capsule'] = "1. Sub-topics: Exercise Vajra Prahar 15th Ed (Idaho, USA), Exercise Garud Shakti 9th Ed (Jakarta, Indonesia), ISRO Hab-1 Analog Space Mission (Leh, Ladakh), Guided Pinaka MBRL trials (>75 km range), Dr. Bibek Debroy Committee on Railway Budget merger & IRMS, Nov 1 State Reorganisation Days. 2. Standard: UPSC CDS/NDA/AFCAT High-Yield Sitrep. 3. Exams: CDS, NDA, AFCAT, CAPF.";
officialSyl['ca-october-2026-capsule'] = "1. Sub-topics: 4th SSBN S4* launch & Project 77 SSNs, India-China LAC Patrolling Agreement (Depsang & Demchok), Tata-Airbus C-295 FAL Vadodara, 31 MQ-9B Predators, Swavlamban 3.0 & ADITI 3.0, Nobel Prizes 2026, 5 New Classical Languages (11 total), 51st CJI Justice Sanjiv Khanna, 16th Finance Commission, Ayushman Vay Vandana 70+ card, Cyclone Dana, CBD COP16 Cali Fund. 2. Standard: UPSC CDS/NDA/AFCAT High-Yield Sitrep. 3. Exams: CDS, NDA, AFCAT, CAPF.";
officialSyl['ca-september-2026-capsule'] = "1. Sub-topics: Exercise Tarang Shakti 2026, 160 SAT-SAAW Glide Bombs, Exercise Yudh Abhyas & SkyStriker, Exercise Varuna & SLINEX, ISRO EOS-05 & TRISHNA Mission, 45th Chess Olympiad Double Gold (Budapest), 20th Asian Games Kabaddi Gold. 2. Standard: UPSC CDS/NDA/AFCAT High-Yield Sitrep. 3. Exams: CDS, NDA, AFCAT, CAPF.";
officialSyl['ca-august-2026-capsule'] = "1. Sub-topics: Record ₹1.78L Cr Defence Production, INS Nipun DSV, Xtreme Weather Grade (-42°C) Diesel, SAFHAL Aravalli Engine, GCAP Dialogue Partner, Exercise Udara Shakti & Mitra Shakti, National Space Day (Aug 23), Sangetsar Tso Ramsar Site. 2. Standard: UPSC CDS/NDA/AFCAT High-Yield Sitrep. 3. Exams: CDS, NDA, AFCAT, CAPF.";

const sylOut = '// Official UPSC CDS/NDA/AFCAT Detailed Syllabus Context Map\nwindow.OFFICIAL_SYLLABUS_DATA = ' + JSON.stringify(officialSyl, null, 2) + ';\n';
fs.writeFileSync('syllabus_data.js', sylOut, 'utf8');
console.log('Updated syllabus_data.js');

// 4. Update notes_data.js (add the 4 monthly capsules to NOTES_DATABASE['current-affairs'].chapters)
const notesDataMod = require('./notes_data.js');
const notesDb = notesDataMod.NOTES_DATABASE;
const caDb = notesDataMod.CURRENT_AFFAIRS_DB;

const capsuleChapters = [
  {
    id: 'ca-november-2026-capsule',
    title: 'November 2026 Master Current Affairs Capsule',
    icon: 'fa-solid fa-bolt',
    topics: [{ id: 'ca-november-2026-capsule', title: 'November 2026 Master Current Affairs Capsule', notes: CAPSULE_NOV_2026 }]
  },
  {
    id: 'ca-october-2026-capsule',
    title: 'October 2026 Master Current Affairs Capsule',
    icon: 'fa-solid fa-fire',
    topics: [{ id: 'ca-october-2026-capsule', title: 'October 2026 Master Current Affairs Capsule', notes: CAPSULE_OCT_2026 }]
  },
  {
    id: 'ca-september-2026-capsule',
    title: 'September 2026 Master Current Affairs Capsule',
    icon: 'fa-solid fa-calendar-check',
    topics: [{ id: 'ca-september-2026-capsule', title: 'September 2026 Master Current Affairs Capsule', notes: CAPSULE_SEP_2026 }]
  },
  {
    id: 'ca-august-2026-capsule',
    title: 'August 2026 Master Current Affairs Capsule',
    icon: 'fa-solid fa-calendar-days',
    topics: [{ id: 'ca-august-2026-capsule', title: 'August 2026 Master Current Affairs Capsule', notes: CAPSULE_AUG_2026 }]
  }
];

const existingCaChapters = (notesDb['current-affairs'].chapters || []).filter(
  ch => !['ca-november-2026-capsule', 'ca-october-2026-capsule', 'ca-september-2026-capsule', 'ca-august-2026-capsule'].includes(ch.id)
);
notesDb['current-affairs'].chapters = [...capsuleChapters, ...existingCaChapters];

const notesDataOut = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(caDb, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(notesDb, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.NOTES_DATABASE = NOTES_DATABASE;\n}\nif (typeof module !== 'undefined') {\n  module.exports = { NOTES_DATABASE, CURRENT_AFFAIRS_DB };\n}\n`;
fs.writeFileSync('notes_data.js', notesDataOut, 'utf8');
console.log('Updated notes_data.js with 4 Monthly Master Capsules in NOTES_DATABASE["current-affairs"].chapters');

// 5. Update ai_generated_notes.js
const aiCtx = {};
vm.createContext(aiCtx);
vm.runInContext(fs.readFileSync('ai_generated_notes.js', 'utf8').replace('const AI_GENERATED_NOTES', 'var AI_GENERATED_NOTES'), aiCtx);
let aiNotes = aiCtx.AI_GENERATED_NOTES;

// Remove any existing monthly capsule entries if re-running
aiNotes = aiNotes.filter(x => !['ca-november-2026-capsule', 'ca-october-2026-capsule', 'ca-september-2026-capsule', 'ca-august-2026-capsule'].includes(x.id));

// Add the 4 monthly capsules to AI_GENERATED_NOTES
aiNotes.push(
  { id: 'ca-november-2026-capsule', title: 'November 2026 Master Current Affairs Capsule', subject: 'current-affairs', notes: CAPSULE_NOV_2026 },
  { id: 'ca-october-2026-capsule', title: 'October 2026 Master Current Affairs Capsule', subject: 'current-affairs', notes: CAPSULE_OCT_2026 },
  { id: 'ca-september-2026-capsule', title: 'September 2026 Master Current Affairs Capsule', subject: 'current-affairs', notes: CAPSULE_SEP_2026 },
  { id: 'ca-august-2026-capsule', title: 'August 2026 Master Current Affairs Capsule', subject: 'current-affairs', notes: CAPSULE_AUG_2026 }
);

// Inject late-2026 sitrep callouts into thematic ca-* chapters in AI_GENERATED_NOTES if not already present
const THEMATIC_UPDATES = {
  'ca-schemes': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>Ayushman Vay Vandana Card (Oct 29, 2026):</strong> Universal ₹5 lakh/year free health cover for all senior citizens aged <strong>70 years and above</strong> under AB PM-JAY regardless of income.</li><li><strong>U-WIN Digital Immunization Portal:</strong> Nationwide rollout for tracking vaccination of pregnant women and children (0–16 years) under Universal Immunization Programme.</li><li><strong>ADITI 3.0 &amp; DISC 13 (Swavlamban 3.0):</strong> Up to ₹25 crore grant-in-aid for indigenous deep-tech defence startups under iDEX.</li></ul></div>`,
  'ca-relations': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>India-China LAC Patrolling Pact (Oct 2026):</strong> Disengagement and restoration of pre-April 2020 patrolling rights at <strong>Depsang Plains (PP-10 to PP-13)</strong> and <strong>Demchok (CNN Junction)</strong> in Eastern Ladakh.</li><li><strong>7th India-Germany IGC (New Delhi):</strong> PM Modi &amp; Chancellor Olaf Scholz unveiled Germany's <em>'Focus on India'</em> blueprint, Green Hydrogen roadmap, and 90,000/year skilled visa quota.</li><li><strong>Tata-Airbus C-295 FAL (Vadodara):</strong> Inaugurated by PM Modi &amp; Spanish PM Pedro Sánchez (40 aircraft to be manufactured in India by TASL).</li></ul></div>`,
  'ca-summits': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>16th BRICS Summit (Kazan, Russia):</strong> First summit after expansion to include Egypt, Ethiopia, Iran, and UAE; hosted the formal Modi–Xi bilateral dialogue following the LAC pact.</li><li><strong>23rd SCO CHG Summit (Islamabad):</strong> EAM Dr. S. Jaishankar represented India, spotlighting the 'Three Evils' (terrorism, separatism, extremism).</li><li><strong>UN CBD COP16 (Cali, Colombia):</strong> Created the <strong>'Cali Fund'</strong> for Digital Sequence Information (DSI) benefit-sharing; India submitted its updated NBSAP aligned with the 30x30 target.</li></ul></div>`,
  'ca-awards': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>Nobel Prizes 2026:</strong> Peace — <em>Nihon Hidankyo</em> (Hibakusha); Literature — <em>Han Kang</em> (South Korea); Medicine — <em>Victor Ambros &amp; Gary Ruvkun</em> (microRNA); Physics — <em>John Hopfield &amp; Geoffrey Hinton</em>; Chemistry — <em>David Baker, Demis Hassabis &amp; John Jumper</em>; Economics — <em>Acemoglu, Johnson &amp; Robinson</em>.</li><li><strong>54th Dadasaheb Phalke Award:</strong> Conferred on veteran actor <strong>Mithun Chakraborty</strong> at the 70th National Film Awards.</li><li><strong>IAF World Space Award 2026:</strong> Conferred on <strong>ISRO</strong> at Milan for the Chandrayaan-3 South Pole landing.</li><li><strong>5 New Classical Languages (11 Total):</strong> Marathi, Pali, Prakrit, Assamese, and Bengali added in October 2026.</li></ul></div>`,
  'ca-science-tech-space': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>ISRO Hab-1 Analog Space Mission (Nov 2026, Leh):</strong> India's 1st analog interplanetary habitat mission launched in Ladakh by HSFC, AAKA Space Studio, University of Ladakh, and IIT Bombay.</li><li><strong>DRDO Guided Pinaka MBRL Flight Trials (Nov 2026):</strong> Validated >75 km strike range and sub-10m CEP accuracy across three test phases.</li><li><strong>SpaceX Starship Flight 5 'Mechazilla' Catch:</strong> First-ever mid-air booster capture using launch tower mechanical arms.</li></ul></div>`,
  'ca-defense-acquisitions': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>4th SSBN S4* Launched &amp; Project 77 Cleared:</strong> S4* (with 3,500 km K-4 SLBM tubes) launched at SBC Visakhapatnam; CCS cleared ₹40,000+ Cr for 2 indigenous SSNs under Project 77.</li><li><strong>31 MQ-9B Predator Deal Signed ($3.99B):</strong> 16 SeaGuardians (Navy) + 8 SkyGuardians (Army) + 8 SkyGuardians (IAF).</li><li><strong>Naval Deliveries (Oct 2026):</strong> Survey Vessel (Large) <em>Nirdeshak</em> delivered by GRSE; 7th ASW-SWC <em>Abhay</em> launched; ICG FPVs <em>Adamya &amp; Akshar</em> launched at GSL.</li></ul></div>`
};

aiNotes.forEach(item => {
  if (THEMATIC_UPDATES[item.id] && !item.notes.includes('OCT–NOV 2026 TACTICAL UPDATE')) {
    item.notes = THEMATIC_UPDATES[item.id] + '\n' + item.notes;
  }
});

const aiOut = `// AI_GENERATED_NOTES — Master Synthesized Compendium for Jayastra\n// Canonical Knowledge Base for Defence Examinations Revision\n// Updated through November 2, 2026\n\nconst AI_GENERATED_NOTES = ${JSON.stringify(aiNotes, null, 2)};\n`;
fs.writeFileSync('ai_generated_notes.js', aiOut, 'utf8');
console.log('Updated ai_generated_notes.js with 4 Monthly Capsules & Oct-Nov 2026 tactical banners');

// 6. Update questions_data.js with late-October and November 2026 MCQs
const qCtx = {};
vm.createContext(qCtx);
vm.runInContext(fs.readFileSync('questions_data.js', 'utf8').replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE'), qCtx);
let cbtDb = qCtx.CBT_EXAMS_DATABASE;

const LATE_OCT_QUESTIONS = [
  {
    question: "In October 2026, India and China reached a landmark disengagement and patrolling agreement regarding which two friction points along the Line of Actual Control (LAC) in Eastern Ladakh?",
    options: ["Galwan Valley and Pangong Tso", "Depsang Plains and Demchok", "Gogra-Hot Springs and Rezang La", "Chumar and Daulat Beg Oldie"],
    correct: 1,
    explanation: "India and China reached an agreement in late October 2026 to restore coordinated patrolling to pre-April 2020 positions at the Depsang Plains (PP-10 to PP-13) and Demchok (Charding Ninglung Nallah junction) in Eastern Ladakh.",
    topicId: "ca-relations"
  },
  {
    question: "India's first private sector military aircraft Final Assembly Line (FAL) for the Airbus C-295 transport aircraft was jointly inaugurated by PM Narendra Modi and Spanish PM Pedro Sánchez in which city?",
    options: ["Hyderabad, Telangana", "Bengaluru, Karnataka", "Vadodara, Gujarat", "Nagpur, Maharashtra"],
    correct: 2,
    explanation: "The Tata Advanced Systems Limited (TASL)–Airbus C-295 Final Assembly Line was inaugurated in Vadodara, Gujarat on October 28, 2026. Out of 56 aircraft, 16 come in fly-away condition from Seville (Spain) and 40 are manufactured in Vadodara.",
    topicId: "ca-spain-c295"
  },
  {
    question: "Under the 'ADITI 3.0' scheme launched during the Indian Navy's Swavlamban 3.0 seminar, startups and MSMEs are eligible for a maximum grant-in-aid of up to what amount for developing deep-tech military technologies?",
    options: ["₹10 Crore", "₹15 Crore", "₹25 Crore", "₹50 Crore"],
    correct: 2,
    explanation: "The Acing Development of Innovative Technologies with iDEX (ADITI) scheme provides startups up to ₹25 crore in grant-in-aid for deep-tech military R&D.",
    topicId: "ca-defense-acquisitions"
  },
  {
    question: "Which yard built and delivered 'Nirdeshak' (Yard 3026), the second of four Survey Vessels (Large) inducted by the Indian Navy in October 2026?",
    options: ["Mazagon Dock Shipbuilders Limited (MDL), Mumbai", "Garden Reach Shipbuilders & Engineers (GRSE), Kolkata", "Cochin Shipyard Limited (CSL), Kochi", "Goa Shipyard Limited (GSL), Vasco-da-Gama"],
    correct: 1,
    explanation: "Nirdeshak (succeeding INS Sandhayak) was built and delivered by Garden Reach Shipbuilders & Engineers (GRSE), Kolkata.",
    topicId: "ca-defense-acquisitions"
  },
  {
    question: "Severe Cyclonic Storm 'Dana', which made landfall near Bhitarkanika National Park and Dhamra Port in Odisha in October 2026, was named by which country?",
    options: ["Oman", "Qatar", "UAE", "Saudi Arabia"],
    correct: 1,
    explanation: "The name 'Dana' (meaning generosity or most perfectly sized pearl in Arabic) was contributed by Qatar under the WMO/ESCAP Tropical Cyclone naming panel.",
    topicId: "ca-reports"
  },
  {
    question: "The 'Cali Fund', established during the 16th Conference of the Parties to the UN Convention on Biological Diversity (CBD COP16) in October 2026, is related to:",
    options: ["Loss and Damage compensation for Small Island Developing States", "Equitable sharing of benefits from Digital Sequence Information (DSI) on genetic resources", "Phasing out coal-fired thermal power plants by 2035", "Global plastic treaty enforcement"],
    correct: 1,
    explanation: "Adopted at CBD COP16 in Cali, Colombia, the Cali Fund mandates commercial users of Digital Sequence Information (DSI) on genetic resources to contribute towards global biodiversity conservation.",
    topicId: "env-treaties"
  },
  {
    question: "The 14th edition of the bilateral naval exercise 'Naseem Al Bahr' was conducted in October 2026 off the coast of Goa between the Indian Navy and the navy of which nation?",
    options: ["UAE", "Saudi Arabia", "Oman", "Bahrain"],
    correct: 2,
    explanation: "Exercise Naseem Al Bahr ('Sea Breeze') is the biennial naval exercise between the Indian Navy (INS Trikand) and the Royal Navy of Oman (RNOV Al Seeb).",
    topicId: "bilateral-exercises"
  },
  {
    question: "Under the 'Ayushman Vay Vandana Card' launched on October 29, 2026, universal free health insurance coverage of ₹5 lakh per year is provided to:",
    options: ["All citizens aged 60 years and above below the poverty line", "All senior citizens aged 70 years and above irrespective of their income status", "Retired defence and paramilitary personnel only", "Women senior citizens aged 65 years and above"],
    correct: 1,
    explanation: "The Ayushman Vay Vandana Card under AB PM-JAY provides universal ₹5 lakh annual health cover to all senior citizens aged 70 years and above regardless of socio-economic status.",
    topicId: "ca-schemes"
  },
  {
    question: "Who is the Chairman of the 16th Finance Commission of India, constituted under Article 280 of the Constitution for the five-year award period beginning April 1, 2026?",
    options: ["N.K. Singh", "Dr. Arvind Panagariya", "Dr. Urjit Patel", "Shaktikanta Das"],
    correct: 1,
    explanation: "Former NITI Aayog Vice-Chairman Dr. Arvind Panagariya chairs the 16th Finance Commission.",
    topicId: "ca-economic-measures"
  },
  {
    question: "Who was conferred the prestigious 54th Dadasaheb Phalke Lifetime Achievement Award at the 70th National Film Awards in October 2026?",
    options: ["Waheeda Rehman", "Mithun Chakraborty", "Rajinikanth", "Mohanlal"],
    correct: 1,
    explanation: "Veteran actor and former MP Mithun Chakraborty was awarded the 54th Dadasaheb Phalke Award.",
    topicId: "ca-awards"
  }
];

['cds-ca-oct2026', 'nda-ca-oct2026', 'afcat-ca-oct2026'].forEach(testId => {
  const testObj = cbtDb.find(t => t.id === testId);
  if (testObj) {
    // Keep original 20 questions and append the 10 new late-October questions
    const baseQs = testObj.questions.slice(0, 20);
    const examTag = testObj.exam;
    testObj.questions = [
      ...baseQs,
      ...LATE_OCT_QUESTIONS.map(q => ({ ...q, exam: examTag }))
    ];
  }
});

// Create November 2026 & Strategic Sitrep Mock Tests for CDS, NDA, and AFCAT
const NOV_SITREP_QUESTIONS = [
  {
    question: "The 15th edition of the India–US Joint Special Forces Exercise 'VAJRA PRAHAR' (November 2026) was conducted at which location?",
    options: ["Bakloh, Himachal Pradesh", "Orchard Combat Training Center, Idaho, USA", "Joint Base Lewis-McChord, Washington, USA", "Umroi, Meghalaya"],
    correct: 1,
    explanation: "The 15th edition of Exercise Vajra Prahar between Indian Army Para (SF) and US Army Green Berets commenced on November 2, 2026 at the Orchard Combat Training Center in Idaho, USA.",
    topicId: "bilateral-exercises"
  },
  {
    question: "The 9th edition of Exercise 'GARUD SHAKTI' (November 2026) in Cijantung, Jakarta involved the Indian Army's Parachute Regiment (Special Forces) and which foreign special operations unit?",
    options: ["Kopassus of Indonesia", "GGK of Malaysia", "Commandos of Singapore", "Scout Rangers of the Philippines"],
    correct: 0,
    explanation: "Exercise Garud Shakti is the bilateral Special Forces exercise between India's Para (SF) and Indonesia's Kopassus (Komando Pasukan Khusus).",
    topicId: "bilateral-exercises"
  },
  {
    question: "In November 2026, ISRO's Human Spaceflight Centre (HSFC) inaugurated India's first Analog Space Mission featuring an inflatable habitat pod named 'Hab-1' at which location?",
    options: ["Rann of Kutch, Gujarat", "Leh, Ladakh", "Spiti Valley, Himachal Pradesh", "Pokhran, Rajasthan"],
    correct: 1,
    explanation: "India's first Analog Space Mission ('Hab-1') was launched in Leh, Ladakh in collaboration with AAKA Space Studio, University of Ladakh, and IIT Bombay to simulate Lunar and Martian surface conditions.",
    topicId: "ca-science-tech-space"
  },
  {
    question: "Padma Shri Dr. Bibek Debroy, Chairman of the Economic Advisory Council to the Prime Minister (EAC-PM) who passed away in November 2026, chaired the landmark 2015 committee that recommended:",
    options: ["Introduction of the Goods and Services Tax (GST)", "Merger of the separate Railway Budget with the Union General Budget", "Establishment of the Monetary Policy Committee (MPC)", "Privatization of nationalized commercial banks"],
    correct: 1,
    explanation: "The Bibek Debroy Committee (2015) on Indian Railways restructuring recommended merging the 92-year-old separate Railway Budget with the General Budget (implemented in 2017–18) and creating the IRMS.",
    topicId: "ca-economic-measures"
  },
  {
    question: "DRDO successfully completed flight trials of the Guided Pinaka Multi-Barrel Rocket System in November 2026. What is the approximate extended strike range of the Guided Pinaka variant?",
    options: ["37.5 km", "Over 75 km", "150 km", "290 km"],
    correct: 1,
    explanation: "While the unguided Pinaka Mark-I has a range of ~37.5 km, the Guided Pinaka rocket extends the strike range to over 75 km with sub-10-meter CEP accuracy.",
    topicId: "missiles-systems"
  },
  {
    question: "Which foreign country became the first export customer for India's indigenously developed Pinaka Multi-Barrel Rocket Launcher (MBRL) system?",
    options: ["Philippines", "Armenia", "Vietnam", "Mauritius"],
    correct: 1,
    explanation: "Armenia became the first foreign export customer for the indigenous Pinaka MBRL system, while the Philippines was the first export customer for the BrahMos supersonic cruise missile.",
    topicId: "ca-defense-acquisitions"
  },
  {
    question: "Who was sworn in as the 8th President of Indonesia in October 2026, succeeding Joko Widodo?",
    options: ["Anies Baswedan", "Prabowo Subianto", "Ganjar Pranowo", "Gibran Rakabuming Raka"],
    correct: 1,
    explanation: "Former Defence Minister Prabowo Subianto was sworn in as the 8th President of Indonesia on October 20, 2026.",
    topicId: "ca-relations"
  },
  {
    question: "At the 7th India-Germany Intergovernmental Consultations (IGC) in New Delhi, Germany announced an increase in its annual visa quota for skilled Indian professionals from 20,000 to:",
    options: ["45,000 per year", "60,000 per year", "90,000 per year", "1,20,000 per year"],
    correct: 2,
    explanation: "During the 7th IGC co-chaired by PM Modi and Chancellor Olaf Scholz, Germany raised its annual skilled Indian labour visa cap from 20,000 to 90,000.",
    topicId: "ca-relations"
  },
  {
    question: "Which organization was awarded the 2026 International Astronautical Federation (IAF) World Space Award in Milan, Italy?",
    options: ["NASA for the Artemis-I Mission", "ISRO for the Chandrayaan-3 Mission", "CNSA for the Chang'e-6 Mission", "JAXA for the SLIM Mission"],
    correct: 1,
    explanation: "ISRO received the 2026 IAF World Space Award at the 75th International Astronautical Congress in Milan for the historic Chandrayaan-3 landing near the lunar south pole.",
    topicId: "ca-awards"
  },
  {
    question: "Which of the following pairs of ships represented the German Navy during the Indo-German Maritime Partnership Exercise with INS Delhi in the Indian Ocean in October 2026?",
    options: ["FGS Bayern and FGS Berlin", "FGS Baden-Württemberg and FGS Frankfurt am Main", "FGS Hamburg and FGS Bonn", "FGS Hessen and FGS Sachsen"],
    correct: 1,
    explanation: "German Navy frigate FGS Baden-Württemberg and combat support ship FGS Frankfurt am Main conducted joint naval drills with INS Delhi and made a port call at Mormugao Port, Goa.",
    topicId: "bilateral-exercises"
  },
  ...LATE_OCT_QUESTIONS
];

// Remove any prior nov2026 tests if re-running
cbtDb = cbtDb.filter(t => !['cds-ca-nov2026', 'nda-ca-nov2026', 'afcat-ca-nov2026'].includes(t.id));

cbtDb.push(
  {
    id: 'cds-ca-nov2026',
    exam: 'CDS',
    subject: 'Current Affairs',
    title: 'CDS High-Yield Current Affairs (Nov 2026 & Strategic Sitrep)',
    duration: 20,
    rules: { correctMarks: 0.83, incorrectMarks: -0.27 },
    questions: NOV_SITREP_QUESTIONS.map(q => ({ ...q, exam: 'CDS' }))
  },
  {
    id: 'nda-ca-nov2026',
    exam: 'NDA',
    subject: 'Current Affairs',
    title: 'NDA High-Yield Current Affairs (Nov 2026 & Strategic Sitrep)',
    duration: 20,
    rules: { correctMarks: 4.0, incorrectMarks: -1.33 },
    questions: NOV_SITREP_QUESTIONS.map(q => ({ ...q, exam: 'NDA' }))
  },
  {
    id: 'afcat-ca-nov2026',
    exam: 'AFCAT',
    subject: 'Current Affairs',
    title: 'AFCAT High-Yield Current Affairs (Nov 2026 & Strategic Sitrep)',
    duration: 20,
    rules: { correctMarks: 3.0, incorrectMarks: -1.0 },
    questions: NOV_SITREP_QUESTIONS.map(q => ({ ...q, exam: 'AFCAT' }))
  }
);

const qOut = `const CBT_EXAMS_DATABASE = ${JSON.stringify(cbtDb, null, 2)};\n`;
fs.writeFileSync('questions_data.js', qOut, 'utf8');
console.log('Updated questions_data.js with expanded Oct 2026 tests and new Nov 2026 tests');

// 7. Sync all modified data files to public/
const filesToSync = [
  'ca_data.js',
  'military_exercises_db.js',
  'current_affairs_db.js',
  'notes_extra_current-affairs.js',
  'notes_data.js',
  'syllabus_data.js',
  'ai_generated_notes.js',
  'questions_data.js',
  'data.js'
];

if (fs.existsSync('public')) {
  filesToSync.forEach(f => {
    if (fs.existsSync(f)) {
      fs.copyFileSync(f, path.join('public', f));
    }
  });
  console.log('Synced all 9 data files to public/');
}
