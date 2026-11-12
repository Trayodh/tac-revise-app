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
    <span style="background:rgba(34,197,94,0.15); color:#4ade80; border:1px solid #4ade80; border-radius:4px; padding:3px 8px; font-size:0.75rem; font-weight:600;">LATEST SITREP — NOV 12, 2026</span>
  </div>

  <p style="color:#e2e8f0; line-height:1.6;">
    November 2026 (updated through November 12, 2026) highlights DRDO's maiden flight-test of the 1,000+ km Long Range Land Attack Cruise Missile (LRLACM), Tri-Service Exercises <em>Poorvi Prahar</em> and <em>Antariksha Abhyas 2026</em>, Special Forces/Bi-Service exercises across the Indo-Pacific and USA, the 3rd MAHASAGAR naval interaction, indigenous weapons ('Asmi' &amp; Guided Pinaka), pioneering space missions (ISRO Hab-1, ESA Proba-3 &amp; LignoSat), UNFCCC COP29 in Baku, landmark Supreme Court verdicts (51st CJI Justice Sanjiv Khanna, Article 39(b), AMU Article 30(1), Bulldozer Justice under Article 142 &amp; LMV Licence), the PM-Vidyalaxmi Scheme, the AFCAT 01/2027 Notification, and global cultural/sporting milestones.
  </p>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">1. Joint Military Exercises, Naval Diplomacy &amp; Indigenous Weapons</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>DRDO Maiden Flight-Test of Long Range Land Attack Cruise Missile — LRLACM (Nov 12):</strong> Successfully flight-tested from a mobile articulated launcher at <strong>ITR Chandipur, Odisha</strong>. Designed by <strong>ADE (Bengaluru)</strong> with <strong>BDL</strong> and <strong>BEL</strong>; features a <strong>1,000+ km range</strong> (subsonic turbofan cruise) and dual launch capability from both ground launchers and Indian Navy warships via <strong>Universal Vertical Launch Modules (UVLM)</strong>.</li>
    <li><strong>Tri-Service Exercise 'POORVI PRAHAR' (Nov 10–18 — Eastern Theatre, Arunachal Pradesh):</strong> Spearheaded by the <strong>Eastern Command</strong> across high-altitude LAC sectors; uniquely integrated <strong>Indian Navy P-8I Poseidon</strong> reconnaissance aircraft with IAF <strong>Rafale, Su-30MKI, Chinook, Prachand LCH</strong>, and Army swarm/FPV drones.</li>
    <li><strong>1st Tri-Service Military Space Exercise 'ANTARIKSHA ABHYAS – 2026' (Nov 11–13 — New Delhi):</strong> Conducted by the <strong>Defence Space Agency (DSA, HQ IDS)</strong> and inaugurated by <strong>CDS General Anil Chauhan</strong> to war-game Space Situational Awareness (SSA), satellite protection, and counter-space resilience with ISRO and DRDO.</li>
    <li><strong>AFCAT 01/2027 Official Notification Released (Nov 12 — DEFCON 2):</strong> Indian Air Force released the AFCAT 1 2027 notification covering Flying Branch and Ground Duty (Technical &amp; Non-Technical, including the <strong>Weapon Systems Branch</strong>); IAF operates <strong>7 Commands</strong> (5 Operational + Training Command at Bengaluru &amp; Maintenance Command at Nagpur).</li>
    <li><strong>Exercise VAJRA PRAHAR 2026 (15th Edition):</strong> Joint Special Forces exercise between the Indian Army (Para SF) and US Army Green Berets at <strong>Orchard Combat Training Center, Idaho, USA</strong> (Nov 2–22). Focuses on desert/mountain special operations, UAS integration, and JTAC close air support.</li>
    <li><strong>Exercise GARUD SHAKTI 2026 (9th Edition):</strong> Bilateral Special Forces exercise between the Indian Army (<strong>Parachute Regiment Special Forces</strong>) and Indonesian Special Forces (<strong>Kopassus</strong>) at <strong>Cijantung, Jakarta, Indonesia</strong> (Nov 1–12).</li>
    <li><strong>Exercise VINBAX 2026 (5th Edition — Ambala &amp; Chandimandir):</strong> India–Vietnam bilateral military exercise (Nov 4–23); expanded for the <strong>first time into a Bi-Service (Army + Air Force)</strong> format featuring India's <strong>Corps of Engineers</strong> and IAF for UN Peacekeeping (Chapter VII) engineering &amp; medical operations.</li>
    <li><strong>Exercise AUSTRAHIND 2026 (3rd Edition — Pune):</strong> India–Australia joint exercise at the <strong>Foreign Training Node, Aundh (Pune), Maharashtra</strong>, involving the Indian Army's <strong>DOGRA Regiment</strong>, IAF, and the Australian Army's 1st Combat Engineer Regiment.</li>
    <li><strong>3rd Edition of Indian Navy's 'MAHASAGAR' Interaction (Nov 5):</strong> Hosted by CNS <strong>Admiral Dinesh K. Tripathi</strong> with Maritime Heads of <strong>10 Indian Ocean Region (IOR) littoral nations</strong> (Bangladesh, Comoros, Kenya, Madagascar, Maldives, Mauritius, Mozambique, Seychelles, Sri Lanka, Tanzania) on the theme <em>'Training Cooperation to Mitigate Common Maritime Security Challenges in the IOR'</em>. (MAHASAGAR = <em>Maritime Heads for Active Security And Growth for All in the Region</em>).</li>
    <li><strong>Indigenous 9&times;19mm 'ASMI' Machine Pistol Inducted:</strong> Indian Army's <strong>Northern Command</strong> inducted <strong>550 units</strong> of India's first indigenous 9&times;19mm submachine gun <strong>'Asmi'</strong> (<em>Pride, Self-Respect &amp; Hard Work</em>), co-developed by <strong>DRDO's ARDE (Pune)</strong> and <strong>Lt Col Prasad Bansod</strong>, and manufactured by <strong>Lokesh Machines Ltd (Hyderabad)</strong>.</li>
    <li><strong>DRDO Guided Pinaka Multi-Barrel Rocket System Flight Tests:</strong> Validated strike range of <strong>over 75 km</strong> (up from 37.5 km Mk-I) with sub-10m CEP accuracy; a 6-launcher battery fires <strong>72 rockets in 44 seconds</strong>. Exported to <strong>Armenia</strong>.</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">2. Aerospace, Planetary Science &amp; Clean Energy / Climate Summits</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>UNFCCC COP29 Climate Summit Opens in Baku, Azerbaijan ('Finance COP', Nov 11–22):</strong> Chaired by <strong>Mukhtar Babayev</strong> on the western shore of the <strong>Caspian Sea</strong> (bordering countries mnemonic: <strong>TARIK</strong> — Turkmenistan, Azerbaijan, Russia, Iran, Kazakhstan). Approved UN global carbon market rules under <strong>Article 6.4</strong> of the Paris Agreement and negotiated the <strong>New Collective Quantified Goal (NCQG)</strong> on climate finance.</li>
    <li><strong>ISRO Launches India's 1st Analog Space Mission in Leh, Ladakh ('Hab-1'):</strong> Spearheaded by ISRO's <strong>Human Spaceflight Centre (HSFC)</strong> with <strong>AAKA Space Studio</strong>, <strong>University of Ladakh</strong>, and <strong>IIT Bombay</strong> to simulate Lunar/Martian base life in Ladakh's cold, high-altitude desert ahead of <strong>Gaganyaan</strong> and the <strong>Bharatiya Antariksha Station (2035)</strong>.</li>
    <li><strong>ESA's 'Proba-3' Twin Solar Mission Arrives at Sriharikota (PSLV-C59):</strong> The European Space Agency's <strong>world's first precision formation-flying mission</strong> (consisting of the <strong>Coronagraph Spacecraft</strong> and <strong>Occulter Spacecraft</strong> flying <strong>150 meters apart</strong> in High Earth Orbit) arrived at SDSC-SHAR to create an artificial solar eclipse and study the Sun's faint <strong>corona</strong>.</li>
    <li><strong>World's 1st Wooden Satellite 'LignoSat' Launched (Nov 5):</strong> Developed by <strong>Kyoto University</strong> and <strong>Sumitomo Forestry (Japan)</strong> using <strong>Honoki magnolia wood</strong> (traditional <em>Nuki</em> joinery without screws or glue) to burn up cleanly on re-entry without releasing ozone-depleting <strong>aluminium oxide</strong> particles.</li>
    <li><strong>7th International Solar Alliance (ISA) Assembly (New Delhi, Nov 3–6):</strong> Hosted at Bharat Mandapam under <strong>India's Presidency</strong> and <strong>France's Co-Presidency</strong>; <strong>Ashish Khanna</strong> elected as the <strong>3rd Director General of ISA</strong> (HQ: Gurugram). Operationalized the <strong>Global Solar Facility (GSF)</strong> and <em>'Towards 1000'</em> strategy ($1,000B investment &amp; 1,000 GW by 2030).</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">3. Supreme Court Verdicts, Constitutional Appointments, Schemes &amp; Diplomacy</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Justice Sanjiv Khanna Sworn in as 51st Chief Justice of India (Nov 11):</strong> Administered the oath of office by President Droupadi Murmu under <strong>Article 124(2)</strong> (succeeding 50th CJI Justice D.Y. Chandrachud); nephew of legendary jurist <strong>Justice H.R. Khanna</strong> (famous for his lone dissent in <em>ADM Jabalpur, 1976</em>).</li>
    <li><strong>7-Judge Constitution Bench Verdict on AMU Minority Status under Article 30(1) (Nov 8):</strong> By a <strong>4:3 majority</strong>, the Supreme Court <strong>overruled <em>S. Azeez Basha v. Union of India (1967)</em></strong>, holding that an educational institution is not barred from claiming minority status merely because it was incorporated by a statute, and laid down the <strong>'Genesis / Brainchild Test'</strong>.</li>
    <li><strong>SC Pan-India Guidelines Against 'Bulldozer Justice' (Nov 12):</strong> Invoking <strong>Article 142</strong>, the **Separation of Powers**, and the **Right to Shelter under Article 21**, the Supreme Court prohibited punitive executive demolitions of properties without a mandatory **15-day prior show-cause notice** and personal hearing.</li>
    <li><strong>9-Judge Constitution Bench Verdict on Article 39(b) (Nov 5):</strong> In <em>Property Owners Association v. State of Maharashtra</em>, the Supreme Court ruled by an <strong>8:1 majority</strong> (headed by CJI D.Y. Chandrachud) that <strong>not every privately owned property</strong> constitutes a <em>"material resource of the community"</em> for acquisition by the State under <strong>Article 39(b) (DPSP)</strong>, overruling Justice Krishna Iyer's sweeping socialist view in <em>Sanjeev Coke (1983)</em> while affirming that unamended <strong>Article 31C</strong> remains operative.</li>
    <li><strong>SC Rulings on UP Madarsa Act &amp; LMV Licence (Nov 5–6):</strong>
      <ul style="color:#cbd5e1; margin-top:4px;">
        <li>Upheld the constitutional validity of the <strong>UP Board of Madarsa Education Act, 2004</strong> for school education, while striking down its <em>Kamil</em> (UG) and <em>Fazil</em> (PG) degree provisions for conflicting with the <strong>UGC Act, 1956 (Entry 66, Union List)</strong>.</li>
        <li>A <strong>5-Judge Constitution Bench</strong> unanimously upheld that a <strong>Light Motor Vehicle (LMV)</strong> licence holder can legally drive a <strong>transport vehicle</strong> with an unladen weight <strong>not exceeding 7,500 kg</strong>.</li>
      </ul>
    </li>
    <li><strong>PM-Vidyalaxmi Scheme Approved by Union Cabinet (Nov 6 — ₹3,600 Crore):</strong> Provides <strong>collateral-free, guarantor-free</strong> education loans for meritorious students admitted to top <strong>860 Quality Higher Educational Institutions (QHEIs)</strong> (via NIRF), with a <strong>75% sovereign credit guarantee</strong> for loans up to <strong>₹7.5 lakh</strong> and a <strong>3% interest subvention</strong> on loans up to <strong>₹10 lakh</strong> (for annual family income &le; <strong>₹8 lakh</strong>).</li>
    <li><strong>25th India–Russia IRIGC-TEC (New Delhi, Nov 12) &amp; 4th Indian Consulate in Brisbane, Australia:</strong> EAM Dr. S. Jaishankar and Russian First Deputy PM Denis Manturov targeted <strong>$100B bilateral trade by 2030</strong> via the <strong>INSTC</strong> and <strong>Chennai–Vladivostok Maritime Corridor</strong>; EAM also inaugurated India's <strong>4th Consulate in Australia at Brisbane</strong> and co-chaired the 15th FMFD.</li>
    <li><strong>47th US Presidential Election (Nov 5–6):</strong> <strong>Donald J. Trump</strong> elected the <strong>47th President of the United States</strong> (with <strong>J.D. Vance</strong> as 50th VP), becoming only the <strong>second President in US history</strong> after <strong>Grover Cleveland</strong> (22nd &amp; 24th) to serve two non-consecutive terms.</li>
  </ul>

  <h4 style="color:#4ade80; margin-top:24px; margin-bottom:12px; font-size:1.1rem;">4. Culture, Sports, Personalities &amp; Important Days (Nov 1–12)</h4>
  <ul style="color:#e2e8f0; line-height:1.7;">
    <li><strong>Booker Prize 2026 Won by Samantha Harvey for <em>'Orbital'</em> (Nov 12):</strong> British writer Samantha Harvey won the Booker Prize for her novel set aboard the <strong>International Space Station (ISS)</strong> over a 24-hour orbit—the first space-set book to win the prize.</li>
    <li><strong>Pankaj Advani Wins 28th World Title &amp; Arjun Erigaisi Crosses 2800 ELO (Nov 8–12):</strong> <strong>Pankaj Advani</strong> won the <strong>IBSF World Billiards Championship in Doha, Qatar</strong> (his 7th consecutive and <strong>28th overall World Title</strong>); GM <strong>Arjun Erigaisi</strong> became only the <strong>2nd Indian after Viswanathan Anand</strong> to cross the <strong>2800 FIDE Classical Rating</strong> barrier as <strong>Aravindh Chithambaram</strong> won the <strong>Chennai Grand Masters 2026</strong>; <strong>Sanju Samson</strong> became the first Indian batter to score back-to-back T20I centuries.</li>
    <li><strong>1st Asian Buddhist Summit (New Delhi, Nov 5–6):</strong> Hosted by the <strong>Ministry of Culture</strong> and <strong>International Buddhist Confederation (IBC)</strong> on the theme <em>"Role of Buddha Dhamma in Strengthening Asia"</em> (inaugurated by President Droupadi Murmu), spotlighting <strong>Pali's Classical Language status</strong>.</li>
    <li><strong>Eminent Personalities Passed Away:</strong>
      <ul style="color:#cbd5e1; margin-top:4px;">
        <li><strong>Dr. Bibek Debroy (Nov 1):</strong> Chairman of <strong>EAC-PM</strong>, architect of the 2015 Railway Restructuring Report (merging Railway &amp; General Budgets, ending the 1924 Acworth separation, and creating IRMS), and translator of the 10-volume unabridged <em>Mahabharata</em>.</li>
        <li><strong>Dr. Sharda Sinha — 'Bihar Kokila' (Nov 5):</strong> Padma Bhushan (2018) and Padma Shri (1991) awardee celebrated for her <strong>Maithili, Bhojpuri, and Magahi</strong> folk music and devotional <strong>Chhath Puja</strong> songs.</li>
      </ul>
    </li>
    <li><strong>2036 Summer Olympics Bid &amp; U-19 World Boxing:</strong> <strong>Indian Olympic Association (IOA)</strong> submitted India's formal <strong>'Letter of Intent'</strong> to the IOC (Lausanne) to host the <strong>2036 Olympics</strong> (proposing Yoga, Kho-Kho, Kabaddi, Chess, T20 Cricket, Squash). At the inaugural <strong>U-19 World Boxing Championships</strong> (Colorado, USA), India won <strong>17 medals (4 Gold, 8 Silver, 5 Bronze)</strong>.</li>
    <li><strong>Important Days (Nov 1–12):</strong> <strong>Nov 1</strong> — State Formation Day (Rajyotsava, States Reorganisation Act 1956); <strong>Nov 3</strong> — International Day for Biosphere Reserves (UNESCO); <strong>Nov 5</strong> — World Tsunami Awareness Day (<em>Inamura-no-Hi</em> / INCOIS Hyderabad); <strong>Nov 7</strong> — <strong>National Cancer Awareness Day</strong> (Marie Curie; India's <strong>'NexCAR19'</strong> CAR-T therapy) &amp; <strong>Sir C.V. Raman's Birth Anniversary</strong>; <strong>Nov 9</strong> — <strong>National Legal Services Day</strong> (NALSA / Article 39A) &amp; <strong>Uttarakhand Foundation Day</strong> (27th State, 2000); <strong>Nov 11</strong> — <strong>National Education Day</strong> (1st Education Minister <strong>Maulana Abul Kalam Azad</strong> — <em>Al-Hilal</em>, <em>India Wins Freedom</em>, IIT Kharagpur &amp; UGC); <strong>Nov 12</strong> — <strong>Public Service Broadcasting Day</strong> (Mahatma Gandhi's 1947 AIR broadcast to Kurukshetra refugees) &amp; <strong>World Pneumonia Day</strong> (SAANS campaign).</li>
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

officialSyl['ca-november-2026-capsule'] = "1. Sub-topics: DRDO LRLACM Maiden Flight-Test (1,000+ km, Chandipur); Tri-Service Exercises Poorvi Prahar (Arunachal LAC) & Antariksha Abhyas 2026 (1st Space Exercise, DSA); AFCAT 1 2027 Notification (DEFCON 2) & IAF 7 Commands; Exercises Vajra Prahar (Idaho), Garud Shakti (Jakarta), VINBAX 2026 Bi-Service (Ambala) & AUSTRAHIND (Pune); 3rd MAHASAGAR Naval Interaction; Indigenous 9x19mm 'Asmi' Machine Pistol & Guided Pinaka (>75 km); ISRO Hab-1 Analog Space Mission (Leh), ESA Proba-3 (Sriharikota) & LignoSat Wooden Satellite; UNFCCC COP29 Baku ('Finance COP' — NCQG & Article 6); 51st CJI Justice Sanjiv Khanna; SC 9-Judge Verdict on Article 39(b), 7-Judge on AMU Article 30(1), Article 142 Bulldozer Justice Guidelines & 5-Judge LMV Licence; PM-Vidyalaxmi Scheme (₹3,600 Cr); 7th ISA Assembly; 25th India-Russia IRIGC-TEC & 4th Indian Consulate in Brisbane; Booker Prize 2026 ('Orbital' by Samantha Harvey); Pankaj Advani (28th World Title) & Arjun Erigaisi (2800 ELO); National Education Day (Nov 11 — Maulana Azad) & Public Service Broadcasting Day (Nov 12). 2. Standard: UPSC CDS/NDA/AFCAT High-Yield Sitrep (Updated Nov 12, 2026). 3. Exams: CDS, NDA, AFCAT, CAPF.";
officialSyl['ca-october-2026-capsule'] = "1. Sub-topics: 4th SSBN S4* launch & Project 77 SSNs, India-China LAC Patrolling Agreement (Depsang & Demchok), Tata-Airbus C-295 FAL Vadodara, 31 MQ-9B Predators, Swavlamban 3.0 & ADITI 3.0, Nobel Prizes 2026, 5 New Classical Languages (11 total), 51st CJI Justice Sanjiv Khanna, 16th Finance Commission, Ayushman Vay Vandana 70+ card, Cyclone Dana, CBD COP16 Cali Fund. 2. Standard: UPSC CDS/NDA/AFCAT High-Yield Sitrep. 3. Exams: CDS, NDA, AFCAT, CAPF.";
officialSyl['ca-september-2026-capsule'] = "1. Sub-topics: Exercise Tarang Shakti 2026, 160 SAT-SAAW Glide Bombs, Exercise Yudh Abhyas & SkyStriker, Exercise Varuna & SLINEX, ISRO EOS-05 & TRISHNA Mission, 45th Chess Olympiad Double Gold (Budapest), 20th Asian Games Kabaddi Gold. 2. Standard: UPSC CDS/NDA/AFCAT High-Yield Sitrep. 3. Exams: CDS, NDA, AFCAT, CAPF.";
officialSyl['ca-august-2026-capsule'] = "1. Sub-topics: Record ₹1.78L Cr Defence Production, INS Nipun DSV, Xtreme Weather Grade (-42°C) Diesel, SAFHAL Aravalli Engine, GCAP Dialogue Partner, Exercise Udara Shakti & Mitra Shakti, National Space Day (Aug 23), Sangetsar Tso Ramsar Site. 2. Standard: UPSC CDS/NDA/AFCAT High-Yield Sitrep. 3. Exams: CDS, NDA, AFCAT, CAPF.";

const sylOut = '// Official UPSC CDS/NDA/AFCAT Detailed Syllabus Context Map\nwindow.OFFICIAL_SYLLABUS_DATA = ' + JSON.stringify(officialSyl, null, 2) + ';\n';
fs.writeFileSync('syllabus_data.js', sylOut, 'utf8');
console.log('Updated syllabus_data.js');

// 4. Update notes_data.js (sync CURRENT_AFFAIRS_DB from current_affairs_db.js & add the 4 monthly capsules)
const caCtx = { window: {} };
vm.createContext(caCtx);
vm.runInContext(fs.readFileSync('current_affairs_db.js', 'utf8'), caCtx);
const caDb = caCtx.window.CURRENT_AFFAIRS_DB;

const notesDataMod = require('./notes_data.js');
const notesDb = notesDataMod.NOTES_DATABASE;

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
console.log('Updated notes_data.js with synced CURRENT_AFFAIRS_DB (20 Nov items) & 4 Monthly Master Capsules');

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

// Update thematic ca-* chapters in AI_GENERATED_NOTES with Nov 7, 2026 sitrep callouts
const THEMATIC_UPDATES = {
  'ca-schemes': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>PM-Vidyalaxmi Scheme (Nov 6, 2026 — ₹3,600 Cr):</strong> Collateral-free, guarantor-free higher education loans for top <strong>860 QHEIs</strong> (NIRF), with <strong>75% credit guarantee</strong> (up to ₹7.5L) and <strong>3% interest subvention</strong> (up to ₹10L loan for family income &le; ₹8L).</li><li><strong>Ayushman Vay Vandana Card (Oct 29, 2026):</strong> Universal ₹5 lakh/year free health cover for all senior citizens aged <strong>70 years and above</strong> under AB PM-JAY regardless of income, alongside the <strong>U-WIN</strong> immunization portal.</li><li><strong>ADITI 3.0 &amp; DISC 13 (Swavlamban 3.0):</strong> Up to ₹25 crore grant-in-aid for indigenous deep-tech defence startups under iDEX.</li></ul></div>`,
  'ca-relations': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>47th US Presidential Election (Nov 6, 2026):</strong> Donald J. Trump elected 47th US President (second leader after Grover Cleveland to win non-consecutive terms); reinforces India-US 4 foundational pacts (GSOMIA, LEMOA, COMCASA, BECA), SOSA, and iCET.</li><li><strong>3rd MAHASAGAR Naval Interaction (Nov 5, 2026):</strong> CNS Admiral Dinesh K. Tripathi hosted Maritime Heads of <strong>10 IOR littoral nations</strong>.</li><li><strong>India-China LAC Patrolling Pact (Oct 2026):</strong> Disengagement and restoration of pre-April 2020 patrolling rights at <strong>Depsang Plains (PP-10 to PP-13)</strong> and <strong>Demchok (CNN Junction)</strong> in Eastern Ladakh.</li><li><strong>7th India-Germany IGC &amp; C-295 FAL Vadodara:</strong> Germany raised Indian skilled visa cap from 20,000 to 90,000/year; PM Modi &amp; Spanish PM Pedro Sánchez inaugurated India's 1st private military aircraft FAL in Vadodara.</li></ul></div>`,
  'ca-summits': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>7th International Solar Alliance (ISA) Assembly (Nov 3–6, New Delhi):</strong> Hosted under India's Presidency and France's Co-Presidency; <strong>Ashish Khanna</strong> elected 3rd Director General of ISA (HQ: Gurugram).</li><li><strong>1st Asian Buddhist Summit (Nov 5–6, New Delhi):</strong> Hosted by Ministry of Culture &amp; IBC on <em>'Role of Buddha Dhamma in Strengthening Asia'</em>, inaugurated by President Droupadi Murmu.</li><li><strong>16th BRICS Summit (Kazan) &amp; UN CBD COP16 (Cali):</strong> Kazan Declaration adopted with new BRICS members; COP16 established the <strong>'Cali Fund'</strong> for Digital Sequence Information (DSI) benefit-sharing.</li></ul></div>`,
  'ca-awards': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>Nobel Prizes 2026:</strong> Peace — <em>Nihon Hidankyo</em> (Hibakusha); Literature — <em>Han Kang</em> (South Korea); Medicine — <em>Victor Ambros &amp; Gary Ruvkun</em> (microRNA); Physics — <em>John Hopfield &amp; Geoffrey Hinton</em>; Chemistry — <em>David Baker, Demis Hassabis &amp; John Jumper</em>; Economics — <em>Acemoglu, Johnson &amp; Robinson</em>.</li><li><strong>54th Dadasaheb Phalke Award &amp; Cultural Legends:</strong> Mithun Chakraborty conferred 54th Dadasaheb Phalke Award; tributes to Padma Bhushan folk singer <strong>Dr. Sharda Sinha ('Bihar Kokila')</strong> and Padma Shri economist <strong>Dr. Bibek Debroy</strong> (Nov 2026).</li><li><strong>IAF World Space Award 2026 &amp; 5 New Classical Languages:</strong> ISRO honoured at Milan for Chandrayaan-3; Marathi, Pali, Prakrit, Assamese, and Bengali added as Classical Languages (11 Total).</li></ul></div>`,
  'ca-science-tech-space': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>ISRO Hab-1 Analog Space Mission (Nov 2026, Leh):</strong> India's 1st analog interplanetary habitat mission launched in Ladakh by HSFC, AAKA Space Studio, University of Ladakh, and IIT Bombay.</li><li><strong>ESA 'Proba-3' at Sriharikota &amp; Japan's 'LignoSat' (Nov 2026):</strong> Proba-3 twin formation-flying solar coronagraph satellites arrived for PSLV-C59 launch; Kyoto University launched the world's 1st wooden satellite (<em>LignoSat</em>, Honoki magnolia wood).</li><li><strong>DRDO Guided Pinaka MBRL (&gt;75 km) &amp; Indigenous 'NexCAR19' CAR-T Therapy:</strong> Guided Pinaka flight trials completed; Nov 7 observed as National Cancer Awareness Day &amp; Sir C.V. Raman's birth anniversary.</li></ul></div>`,
  'ca-defense-acquisitions': `<div class="msc-checkpoint" style="margin-top:16px; margin-bottom:16px; border-left:4px solid #4ade80; background:rgba(74,222,128,0.08); padding:14px 16px; border-radius:0 8px 8px 0;"><strong style="color:#4ade80;">📡 OCT–NOV 2026 TACTICAL UPDATE:</strong><ul style="margin-top:8px; color:var(--text-secondary); padding-left:20px;"><li><strong>550 Indigenous 'ASMI' 9&times;19mm Machine Pistols Inducted (Nov 2026):</strong> Co-developed by DRDO (ARDE Pune) &amp; Lt Col Prasad Bansod and manufactured by Lokesh Machines (Hyderabad) for the Indian Army's Northern Command.</li><li><strong>4th SSBN S4* Launched &amp; Project 77 Cleared:</strong> S4* (with 3,500 km K-4 SLBM tubes) launched at SBC Visakhapatnam; CCS cleared ₹40,000+ Cr for 2 indigenous SSNs under Project 77.</li><li><strong>31 MQ-9B Predator Deal ($3.99B) &amp; Naval Deliveries:</strong> 15/16 SeaGuardians (Navy) + 8 SkyGuardians each (Army/IAF); Survey Vessel <em>Nirdeshak</em> delivered by GRSE; 7th ASW-SWC <em>Abhay</em> &amp; ICG FPVs <em>Adamya &amp; Akshar</em> launched.</li></ul></div>`
};

aiNotes.forEach(item => {
  if (THEMATIC_UPDATES[item.id]) {
    // Strip any old tactical update banner before prepending the refreshed Nov 7 banner
    item.notes = item.notes.replace(/<div class="msc-checkpoint"[\s\S]*?OCT–NOV 2026 TACTICAL UPDATE:[\s\S]*?<\/div>\s*/g, '');
    item.notes = THEMATIC_UPDATES[item.id] + '\n' + item.notes;
  }
});

const aiOut = `// AI_GENERATED_NOTES — Master Synthesized Compendium for Jayastra\n// Canonical Knowledge Base for Defence Examinations Revision\n// Updated through November 7, 2026\n\nconst AI_GENERATED_NOTES = ${JSON.stringify(aiNotes, null, 2)};\n`;
fs.writeFileSync('ai_generated_notes.js', aiOut, 'utf8');
console.log('Updated ai_generated_notes.js with 4 Monthly Capsules & Nov 7, 2026 tactical banners');

// 6. Update questions_data.js with late-October and November 1–7, 2026 MCQs
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
    const baseQs = testObj.questions.slice(0, 20);
    const examTag = testObj.exam;
    testObj.questions = [
      ...baseQs,
      ...LATE_OCT_QUESTIONS.map(q => ({ ...q, exam: examTag }))
    ];
  }
});

// Create comprehensive 30-Question November 2026 & Strategic Sitrep Mock Tests for CDS, NDA, and AFCAT
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
    question: "The 5th edition of the Vietnam–India Bilateral Military Exercise 'VINBAX 2026', which was expanded for the first time into a bi-service (Army and Air Force) format in November 2026, was held at:",
    options: ["Da Nang, Vietnam", "Ambala and Chandimandir, Haryana", "Jabalpur, Madhya Pradesh", "Binnaguri, West Bengal"],
    correct: 1,
    explanation: "The 5th edition of Exercise VINBAX 2026 was held at Ambala and Chandimandir (Nov 4–23, 2026), featuring Army (Corps of Engineers) and Air Force personnel from both nations for UN Peacekeeping tasks.",
    topicId: "bilateral-exercises"
  },
  {
    question: "Where was the 3rd edition of the India–Australia Joint Military Exercise 'AUSTRAHIND' conducted in November 2026?",
    options: ["Mahajan Field Firing Ranges, Rajasthan", "Foreign Training Node, Aundh (Pune), Maharashtra", "Perth, Western Australia", "Chaubattia, Uttarakhand"],
    correct: 1,
    explanation: "The 3rd edition of Exercise AUSTRAHIND was conducted at the Foreign Training Node in Aundh (Pune), Maharashtra, involving the Indian Army's DOGRA Regiment, IAF, and the Australian Army.",
    topicId: "bilateral-exercises"
  },
  {
    question: "In November 2026, Chief of the Naval Staff Admiral Dinesh K. Tripathi hosted the 3rd edition of 'MAHASAGAR' with 10 Indian Ocean Region (IOR) littoral nations. What does the acronym 'MAHASAGAR' stand for?",
    options: ["Maritime Alliance for Humanitarian Assistance, Security And Growth Across Regions", "Maritime Heads for Active Security And Growth for All in the Region", "Multilateral Architecture for High-Seas Anti-Submarine Governance And Readiness", "Mission for Atmanirbhar Hydrography And Security Across Global Arterial Routes"],
    correct: 1,
    explanation: "MAHASAGAR stands for 'Maritime Heads for Active Security And Growth for All in the Region', connecting the Indian Navy with 10 IOR littoral states (Bangladesh, Comoros, Kenya, Madagascar, Maldives, Mauritius, Mozambique, Seychelles, Sri Lanka, Tanzania).",
    topicId: "ca-relations"
  },
  {
    question: "The Indian Army's Northern Command recently inducted 550 units of 'ASMI', India's first indigenously designed and manufactured 9×19mm machine pistol. It was developed and manufactured by:",
    options: ["HAL Bengaluru and Bharat Forge", "DRDO's ARDE (Pune) with Lt Col Prasad Bansod, and manufactured by Lokesh Machines (Hyderabad)", "Ordnance Factory Tiruchirappalli and Adani Defence", "DRDO's DRDL (Hyderabad) and Tata Advanced Systems"],
    correct: 1,
    explanation: "The 9×19mm 'Asmi' (meaning Pride, Self-Respect & Hard Work) submachine gun was co-developed by DRDO's ARDE (Pune) and Lt Col Prasad Bansod, and manufactured by Lokesh Machines Ltd in Hyderabad.",
    topicId: "ca-defense-acquisitions"
  },
  {
    question: "In November 2026, ISRO's Human Spaceflight Centre (HSFC) inaugurated India's first Analog Space Mission featuring an inflatable habitat pod named 'Hab-1' at which location?",
    options: ["Rann of Kutch, Gujarat", "Leh, Ladakh", "Spiti Valley, Himachal Pradesh", "Pokhran, Rajasthan"],
    correct: 1,
    explanation: "India's first Analog Space Mission ('Hab-1') was launched in Leh, Ladakh in collaboration with AAKA Space Studio, University of Ladakh, and IIT Bombay to simulate Lunar and Martian surface conditions.",
    topicId: "ca-science-tech-space"
  },
  {
    question: "The 'Proba-3' mission, which arrived at Sriharikota in November 2026 for launch aboard ISRO's PSLV-XL (PSLV-C59), is the world's first precision formation-flying twin-satellite mission developed by which agency to study the Sun's faint corona?",
    options: ["NASA (USA)", "European Space Agency (ESA)", "JAXA (Japan)", "CNES (France)"],
    correct: 1,
    explanation: "Proba-3 (Project for On-Board Autonomy-3) is an ESA mission featuring two spacecraft (Coronagraph and Occulter) flying 150 meters apart to cast an artificial solar eclipse in High Earth Orbit.",
    topicId: "ca-science-tech-space"
  },
  {
    question: "'LignoSat', the world's first wooden artificial satellite launched to the International Space Station in November 2026 to eliminate aluminium oxide re-entry pollution, was developed by researchers from which country?",
    options: ["Sweden", "Finland", "Japan (Kyoto University & Sumitomo Forestry)", "Canada"],
    correct: 2,
    explanation: "LignoSat was built in Japan by Kyoto University and Sumitomo Forestry using Honoki magnolia wood and traditional Japanese joinery without screws or glue.",
    topicId: "ca-science-tech-space"
  },
  {
    question: "In November 2026, a 9-Judge Constitution Bench of the Supreme Court delivered a landmark 8:1 judgment in 'Property Owners Association v. State of Maharashtra' holding that NOT every privately owned property automatically constitutes a 'material resource of the community'. This ruling interpreted which Article of the Constitution?",
    options: ["Article 38(2)", "Article 39(b)", "Article 43A", "Article 300A"],
    correct: 1,
    explanation: "The 9-Judge Bench interpreted Article 39(b) (DPSP) alongside Article 31C, overruling Justice Krishna Iyer's sweeping socialist view in Sanjeev Coke (1983) and holding that private property qualifies only if it meets the Public Trust & Scarcity criteria.",
    topicId: "polity-dpsp"
  },
  {
    question: "Under the 'PM-Vidyalaxmi' Scheme (outlay ₹3,600 crore) approved by the Union Cabinet in November 2026 for meritorious students admitted to the top 860 Quality Higher Educational Institutions (QHEIs), what is the sovereign credit guarantee provided for collateral-free loans up to ₹7.5 lakh?",
    options: ["50% credit guarantee", "75% credit guarantee", "80% credit guarantee", "100% credit guarantee"],
    correct: 1,
    explanation: "PM-Vidyalaxmi provides a 75% sovereign credit guarantee for loans up to ₹7.5 lakh (irrespective of income) and a 3% interest subvention on loans up to ₹10 lakh for students with annual family income up to ₹8 lakh.",
    topicId: "ca-schemes"
  },
  {
    question: "Where was the 7th Session of the International Solar Alliance (ISA) Assembly held in November 2026 under India's Presidency and France's Co-Presidency, where Ashish Khanna was elected as the 3rd Director General?",
    options: ["Gurugram, Haryana", "Bharat Mandapam, New Delhi", "Gandhinagar, Gujarat", "Paris, France"],
    correct: 1,
    explanation: "While the ISA Headquarters is in Gurugram, the 7th ISA Assembly was held at Bharat Mandapam in New Delhi from November 3–6, 2026, where Ashish Khanna was elected the 3rd Director General.",
    topicId: "ca-summits"
  },
  {
    question: "By winning election as the 47th President of the United States in November 2026, Donald J. Trump became only the second President in US history to serve two non-consecutive terms. Who was the first US President to do so?",
    options: ["Theodore Roosevelt", "Grover Cleveland (22nd and 24th President)", "Woodrow Wilson", "William Howard Taft"],
    correct: 1,
    explanation: "Grover Cleveland served as the 22nd (1885–1889) and 24th (1893–1897) President of the United States before Donald Trump (45th and 47th President).",
    topicId: "ca-relations"
  },
  {
    question: "Padma Shri Dr. Bibek Debroy, Chairman of the Economic Advisory Council to the Prime Minister (EAC-PM) who passed away in November 2026, chaired the landmark 2015 committee that recommended:",
    options: ["Introduction of the Goods and Services Tax (GST)", "Merger of the separate Railway Budget with the Union General Budget", "Establishment of the Monetary Policy Committee (MPC)", "Privatization of nationalized commercial banks"],
    correct: 1,
    explanation: "The Bibek Debroy Committee (2015) on Indian Railways restructuring recommended merging the 92-year-old separate Railway Budget with the General Budget (implemented in 2017–18) and creating the IRMS.",
    topicId: "ca-economic-measures"
  },
  {
    question: "Padma Bhushan awardee Dr. Sharda Sinha, who passed away on November 5, 2026 and was affectionately known as 'Bihar Kokila', was celebrated for her iconic contributions to:",
    options: ["Mithila (Madhubani) folk painting", "Maithili, Bhojpuri, and Magahi folk music and Chhath Puja devotional songs", "Odissi classical dance", "Hindustani classical violin"],
    correct: 1,
    explanation: "Dr. Sharda Sinha ('Bihar Kokila') was an iconic Maithili, Bhojpuri, and Magahi folk singer renowned for her Chhath Puja devotional songs.",
    topicId: "ca-awards"
  },
  {
    question: "The 1st Asian Buddhist Summit was hosted in New Delhi on November 5–6, 2026 by the Ministry of Culture in collaboration with the International Buddhist Confederation (IBC) under which theme?",
    options: ["Dhamma Setu: Connecting Indo-Pacific Heritage", "Role of Buddha Dhamma in Strengthening Asia", "Buddha's Middle Path for Global Peace and Climate Action", "Shared Sangha Heritage of the Global South"],
    correct: 1,
    explanation: "Inaugurated by President Droupadi Murmu in New Delhi, the 1st Asian Buddhist Summit was held on the theme 'Role of Buddha Dhamma in Strengthening Asia'.",
    topicId: "ca-summits"
  },
  {
    question: "While upholding the UP Board of Madarsa Education Act, 2004 in November 2026, the Supreme Court struck down its provisions regulating 'Kamil' (UG) and 'Fazil' (PG) higher degrees because they conflict with the UGC Act, 1956 enacted under which Entry of the Seventh Schedule?",
    options: ["Entry 66 of List I (Union List)", "Entry 25 of List III (Concurrent List)", "Entry 11 of List II (State List)", "Entry 97 of List I (Residuary Powers)"],
    correct: 0,
    explanation: "Entry 66 of the Union List vests exclusive power in Parliament for coordination and determination of standards in institutions for higher education, under which Section 22 of the UGC Act, 1956 regulates the grant of degrees.",
    topicId: "polity-federalism"
  },
  {
    question: "A 5-Judge Constitution Bench of the Supreme Court ruled unanimously in November 2026 that a person holding a Light Motor Vehicle (LMV) driving licence is legally entitled to drive a transport vehicle whose unladen weight does not exceed:",
    options: ["3,500 kg", "5,000 kg", "7,500 kg", "12,000 kg"],
    correct: 2,
    explanation: "Upholding the 2017 Mukund Dewangan judgment, the 5-Judge Bench ruled that under Section 2(21) of the Motor Vehicles Act, 1988, an LMV licence covers transport vehicles with an unladen weight up to 7,500 kg.",
    topicId: "ca-schemes"
  },
  {
    question: "DRDO successfully completed flight trials of the Guided Pinaka Multi-Barrel Rocket System in November 2026. What is the approximate extended strike range of the Guided Pinaka variant, and which country was its first export buyer?",
    options: ["37.5 km; Philippines", "Over 75 km; Armenia", "150 km; Vietnam", "290 km; Indonesia"],
    correct: 1,
    explanation: "The Guided Pinaka extends strike range from 37.5 km (Mk-I) to over 75 km with sub-10m CEP accuracy, and Armenia became the first international export buyer of the Pinaka MBRL system.",
    topicId: "missiles-systems"
  },
  {
    question: "National Cancer Awareness Day is observed in India on November 7 (coinciding with the birth anniversaries of Nobel Laureate Marie Curie and Bharat Ratna Sir C.V. Raman). What is the name of India's first indigenously developed CAR-T cell cancer therapy?",
    options: ["Cervavac", "NexCAR19", "iNCOVACC", "ZyCoV-D"],
    correct: 1,
    explanation: "NexCAR19 (Actalycabtagene autoleucel), developed jointly by IIT Bombay, Tata Memorial Centre, and ImmunoAct, is India's first indigenous CAR-T cell therapy for B-cell blood cancers (whereas Cervavac is India's indigenous qHPV vaccine against cervical cancer).",
    topicId: "ca-science-tech-space"
  },
  {
    question: "On November 12, 2026, DRDO conducted the maiden flight-test of the Long Range Land Attack Cruise Missile (LRLACM) from ITR Chandipur. Designed by ADE Bengaluru with BDL and BEL, what is its approximate operational strike range?",
    options: ["290 km", "500 km", "Over 1,000 km", "3,500 km"],
    correct: 2,
    explanation: "The Long Range Land Attack Cruise Missile (LRLACM) is a 1,000+ km range subsonic cruise missile capable of being launched from both mobile ground launchers and naval warships (via UVLM).",
    topicId: "missiles-systems"
  },
  {
    question: "India's first-ever dedicated Tri-Service military space exercise, conducted by the Defence Space Agency (DSA) under HQ Integrated Defence Staff in New Delhi from November 11 to 13, 2026, is named:",
    options: ["Exercise IndSpaceEx-II", "Exercise Antariksha Abhyas – 2026", "Exercise Gaganyaan Kavach", "Exercise Akash Shakti"],
    correct: 1,
    explanation: "Inaugurated by CDS General Anil Chauhan on November 11, 2026, 'Antariksha Abhyas – 2026' is India's maiden Tri-Service military space exercise hosted by the Defence Space Agency (DSA).",
    topicId: "bilateral-exercises"
  },
  {
    question: "Which Tri-Service integrated combat exercise was conducted by the Indian Armed Forces across the high-altitude mountainous terrain of the Eastern Theatre (Arunachal Pradesh) from November 10 to 18, 2026, featuring Navy P-8I and IAF Prachand LCH?",
    options: ["Exercise Poorvi Prahar", "Exercise Him Vijay", "Exercise Gaganshakti", "Exercise Trishul"],
    correct: 0,
    explanation: "Exercise 'Poorvi Prahar' (Nov 10–18, 2026) was spearheaded by the Eastern Command in Arunachal Pradesh, integrating Army, IAF, and Indian Navy (P-8I) assets.",
    topicId: "bilateral-exercises"
  },
  {
    question: "In November 2026, a 7-Judge Constitution Bench of the Supreme Court overruled which 1967 judgment by a 4:3 majority, holding that an educational institution is NOT barred from claiming Minority Status under Article 30(1) merely because it was incorporated by a statute?",
    options: ["T.M.A. Pai Foundation v. State of Karnataka", "S. Azeez Basha v. Union of India (Aligarh Muslim University Case)", "St. Stephen's College v. University of Delhi", "In Re: Kerala Education Bill"],
    correct: 1,
    explanation: "On November 8, 2026, a 7-Judge Constitution Bench overruled the 1967 5-Judge ruling in 'S. Azeez Basha v. Union of India' by a 4:3 majority and laid down the 'Genesis / Brainchild Test' under Article 30(1).",
    topicId: "polity-fr"
  },
  {
    question: "Where was the 29th Conference of the Parties to the UN Framework Convention on Climate Change (UNFCCC COP29 — 'Finance COP') held from November 11 to 22, 2026?",
    options: ["Cali, Colombia", "Baku, Azerbaijan", "Riyadh, Saudi Arabia", "Belém, Brazil"],
    correct: 1,
    explanation: "UNFCCC COP29 was hosted in Baku, Azerbaijan (on the Caspian Sea). Note that CBD COP16 was held in Cali (Colombia), UNCCD COP16 in Riyadh (Saudi Arabia), and UNFCCC COP30 is scheduled for Belém (Brazil).",
    topicId: "ca-summits"
  },
  {
    question: "Who won the 2026 Booker Prize (announced in November 2026) for the novel 'Orbital', which follows six astronauts aboard the International Space Station over a single 24-hour period?",
    options: ["Paul Lynch", "Samantha Harvey", "Shehan Karunatilaka", "Jenny Erpenbeck"],
    correct: 1,
    explanation: "British author Samantha Harvey won the Booker Prize for 'Orbital'—the first book set in outer space to win the prestigious literary prize.",
    topicId: "ca-awards"
  },
  {
    question: "In November 2026, which Indian chess Grandmaster became only the second Indian in history (after Viswanathan Anand) and the 16th player worldwide to breach the elite 2800 FIDE Classical ELO rating barrier?",
    options: ["D. Gukesh", "R. Praggnanandhaa", "Arjun Erigaisi", "Vidit Gujrathi"],
    correct: 2,
    explanation: "Grandmaster Arjun Erigaisi crossed the 2800 FIDE Classical Rating mark in November 2026, becoming only the second Indian after 5-time World Champion Viswanathan Anand to achieve this feat.",
    topicId: "ca-sports"
  },
  {
    question: "Padma Bhushan cueist Pankaj Advani clinched his 28th career World Title in November 2026 by winning the IBSF World Billiards Championship held in which city?",
    options: ["Kuala Lumpur, Malaysia", "Doha, Qatar", "Sheffield, United Kingdom", "Manama, Bahrain"],
    correct: 1,
    explanation: "Pankaj Advani defeated England's Robert Hall (4–2) in Doha, Qatar on November 12, 2026 to claim his 7th consecutive IBSF World Billiards crown and 28th career World Title.",
    topicId: "ca-sports"
  },
  {
    question: "National Education Day is celebrated across India on November 11 to commemorate the birth anniversary of Independent India's first Minister of Education, Maulana Abul Kalam Azad. Which of the following Urdu weekly journals was founded by him in 1912?",
    options: ["Comrade", "Al-Hilal", "Tahzib-ul-Akhlaq", "Zamindar"],
    correct: 1,
    explanation: "Maulana Abul Kalam Azad launched the Urdu weekly 'Al-Hilal' in 1912 (and 'Al-Balagh' in 1915) and authored 'India Wins Freedom'. ('Comrade' was started by Mohammad Ali Jauhar and 'Tahzib-ul-Akhlaq' by Sir Syed Ahmad Khan).",
    topicId: "ca-awards"
  },
  {
    question: "Public Service Broadcasting Day (Jan Prasaran Diwas) is observed in India every year on November 12 to commemorate which historic event of 1947?",
    options: ["Establishment of Prasar Bharati as an autonomous statutory corporation", "Mahatma Gandhi's first and only live visit and broadcast from All India Radio (New Delhi) to Partition refugees at Kurukshetra", "Launch of India's first television transmission by Doordarshan", "Renaming of the Indian State Broadcasting Service as Akashvani"],
    correct: 1,
    explanation: "November 12 marks Mahatma Gandhi's only visit to Broadcasting House, All India Radio (New Delhi) on 12 November 1947 to address displaced refugees stationed at Kurukshetra camp in Haryana.",
    topicId: "ca-awards"
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
    duration: 30,
    rules: { correctMarks: 0.83, incorrectMarks: -0.27 },
    questions: NOV_SITREP_QUESTIONS.map(q => ({ ...q, exam: 'CDS' }))
  },
  {
    id: 'nda-ca-nov2026',
    exam: 'NDA',
    subject: 'Current Affairs',
    title: 'NDA High-Yield Current Affairs (Nov 2026 & Strategic Sitrep)',
    duration: 30,
    rules: { correctMarks: 4.0, incorrectMarks: -1.33 },
    questions: NOV_SITREP_QUESTIONS.map(q => ({ ...q, exam: 'NDA' }))
  },
  {
    id: 'afcat-ca-nov2026',
    exam: 'AFCAT',
    subject: 'Current Affairs',
    title: 'AFCAT High-Yield Current Affairs (Nov 2026 & Strategic Sitrep)',
    duration: 30,
    rules: { correctMarks: 3.0, incorrectMarks: -1.0 },
    questions: NOV_SITREP_QUESTIONS.map(q => ({ ...q, exam: 'AFCAT' }))
  }
);

const qOut = `const CBT_EXAMS_DATABASE = ${JSON.stringify(cbtDb, null, 2)};\n`;
fs.writeFileSync('questions_data.js', qOut, 'utf8');
console.log('Updated questions_data.js with expanded Oct 2026 tests and 30-Q Nov 2026 tests');

// 7. Also synchronize data.js and ca_db_extracted.json
const meLive = require('./military_exercises_db.js');
const dMod = require('./data.js');
const dataJsOut =
  `let MILITARY_EXERCISES_LIVE = ${JSON.stringify(meLive, null, 2)};\n\n` +
  `let MILITARY_EXERCISES_ARCHIVE = {};\n\n` +
  `let CURRENT_AFFAIRS_LIVE = ${JSON.stringify(caDb, null, 2)};\n\n` +
  `let CURRENT_AFFAIRS_ARCHIVE = ${JSON.stringify(dMod.CURRENT_AFFAIRS_ARCHIVE || {}, null, 2)};\n\n` +
  `const CBT_EXAMS_DATABASE = ${JSON.stringify(cbtDb, null, 2)};\n\n` +
  `const NOTES_DATABASE = ${JSON.stringify(notesDb, null, 2)};\n\n` +
  `let CURRENT_AFFAIRS_DB = {};\n` +
  `if (typeof CURRENT_AFFAIRS_LIVE !== 'undefined') { Object.assign(CURRENT_AFFAIRS_DB, CURRENT_AFFAIRS_LIVE); }\n` +
  `if (typeof CURRENT_AFFAIRS_ARCHIVE !== 'undefined') { Object.assign(CURRENT_AFFAIRS_DB, CURRENT_AFFAIRS_ARCHIVE); }\n` +
  `if (typeof window !== 'undefined') { window.CURRENT_AFFAIRS_DB = CURRENT_AFFAIRS_DB; }\n\n` +
  `if (typeof module !== 'undefined') module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE, CURRENT_AFFAIRS_LIVE, CURRENT_AFFAIRS_ARCHIVE };\n`;
fs.writeFileSync('data.js', dataJsOut, 'utf8');
console.log('Updated data.js with synced MILITARY_EXERCISES_LIVE, CURRENT_AFFAIRS_LIVE, CBT_EXAMS_DATABASE, and NOTES_DATABASE');

fs.writeFileSync('ca_db_extracted.json', JSON.stringify(caDb, null, 2), 'utf8');
console.log('Updated ca_db_extracted.json');

// 8. Sync all modified data files to public/ and www/
const filesToSync = [
  'ca_data.js',
  'military_exercises_db.js',
  'current_affairs_db.js',
  'notes_extra_current-affairs.js',
  'notes_data.js',
  'syllabus_data.js',
  'ai_generated_notes.js',
  'questions_data.js',
  'data.js',
  'ca_db_extracted.json'
];

['public', 'www'].forEach(dir => {
  if (fs.existsSync(dir)) {
    filesToSync.forEach(f => {
      if (fs.existsSync(f)) {
        fs.copyFileSync(f, path.join(dir, f));
      }
    });
    console.log(`Synced all ${filesToSync.length} data files to ${dir}/`);
  }
});
