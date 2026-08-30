import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

new_notes = """
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    Comprehensive Armed Forces Equipment Database
  </h3>

  <p>For NDA, CDS, AFCAT, and CAPF exams, maintaining a strong grasp of the inventory of the Indian Armed Forces is critical. Questions frequently target the origin of the equipment, its class (e.g., frigate vs. destroyer, attack helicopter vs. transport), and recent indigenous developments.</p>

  <h4 style="color: #60a5fa; margin-top: 24px;">1. Indian Army Equipment Inventory</h4>
  <p>The Indian Army operates a mix of Russian-origin platforms and modern indigenous/Western equipment.</p>
  
  <h5>A. Main Battle Tanks (MBTs)</h5>
  <ul style="margin-left: 20px;">
    <li><strong>T-90S Bhishma:</strong> Third-generation Russian MBT. The backbone of India's armored corps. Known for its 125mm smoothbore gun and Kontakt-5 ERA (Explosive Reactive Armor).</li>
    <li><strong>T-72M1 Ajeya:</strong> Older Soviet-era MBT, progressively upgraded with new engines and fire control systems.</li>
    <li><strong>Arjun Mk-1 & Mk-1A:</strong> Indigenous third-generation MBT developed by DRDO. Features a 120mm rifled gun, Kanchan armor, and advanced hydropneumatic suspension. Mk-1A includes 71 major upgrades over the Mk-1.</li>
  </ul>

  <h5>B. Artillery & Missile Systems</h5>
  <ul style="margin-left: 20px;">
    <li><strong>M777 Ultra-Light Howitzer:</strong> 155mm/39-caliber towed gun imported from the USA (BAE Systems). Crucial for mountain warfare due to its light weight (titanium and aluminum construction), allowing it to be airlifted by Chinook helicopters.</li>
    <li><strong>K9 Vajra-T:</strong> 155mm/52-caliber tracked self-propelled howitzer. Developed jointly by L&T and South Korea's Hanwha Defense. Highly mobile and suited for desert warfare.</li>
    <li><strong>Dhanush:</strong> 155mm/45-caliber towed howitzer. Indigenously developed by Ordnance Factory Board (OFB) based on the Bofors design. Known as the "Desi Bofors."</li>
    <li><strong>Pinaka MBRL:</strong> Indigenous Multi-Barrel Rocket Launcher developed by DRDO. Can fire a salvo of 12 HE rockets in 44 seconds. Guided versions (Pinaka Mk-II/Mk-III) have ranges exceeding 75 km.</li>
  </ul>

  <h5>C. Infantry Weapons</h5>
  <ul style="margin-left: 20px;">
    <li><strong>SIG Sauer 716:</strong> 7.62x51mm assault rifle imported from the USA for frontline troops, replacing the INSAS.</li>
    <li><strong>AK-203:</strong> 7.62x39mm assault rifle. A joint venture between India and Russia (IRRPL), being manufactured in Amethi, UP. It will be the standard issue rifle for the Indian Armed Forces.</li>
    <li><strong>Sako TRG-42:</strong> Finnish sniper rifle used by special forces.</li>
    <li><strong>Negev NG-7:</strong> Israeli 7.62x51mm Light Machine Gun (LMG).</li>
  </ul>

  <h4 style="color: #60a5fa; margin-top: 24px;">2. Indian Navy Equipment Inventory</h4>
  <p>The Indian Navy aims to be a potent blue-water force, focusing heavily on indigenization under the "Make in India" initiative.</p>

  <h5>A. Aircraft Carriers</h5>
  <ul style="margin-left: 20px;">
    <li><strong>INS Vikramaditya (R33):</strong> Modified Kiev-class carrier acquired from Russia (formerly Admiral Gorshkov). Uses STOBAR (Short Take-Off But Arrested Recovery) operations with MiG-29K fighters.</li>
    <li><strong>INS Vikrant (R11):</strong> India's first Indigenous Aircraft Carrier (IAC-1), built at Cochin Shipyard. Also utilizes a STOBAR configuration. Commissioned in September 2022.</li>
  </ul>

  <h5>B. Submarines</h5>
  <ul style="margin-left: 20px;">
    <li><strong>Arihant Class (SSBN):</strong> Indigenous nuclear-powered ballistic missile submarines. INS Arihant (S2) and INS Arighaat (S3) complete India's nuclear triad. Armed with K-15 and K-4 SLBMs.</li>
    <li><strong>Kalvari Class (Scorpene):</strong> Diesel-electric attack submarines (SSK) built by Mazagon Dock under Project 75 with French technology transfer. (e.g., INS Kalvari, Khanderi, Karanj, Vela, Vagir, Vagsheer).</li>
    <li><strong>Sindhughosh Class:</strong> Russian Kilo-class diesel-electric submarines.</li>
    <li><strong>Shishumar Class:</strong> German Type 209 diesel-electric submarines.</li>
  </ul>

  <h5>C. Surface Combatants</h5>
  <ul style="margin-left: 20px;">
    <li><strong>Visakhapatnam Class (Project 15B):</strong> State-of-the-art indigenous stealth guided-missile destroyers (INS Visakhapatnam, Mormugao, Imphal, Surat).</li>
    <li><strong>Kolkata Class (Project 15A):</strong> Stealth destroyers (INS Kolkata, Kochi, Chennai).</li>
    <li><strong>Nilgiri Class (Project 17A):</strong> Advanced stealth frigates currently under construction by MDL and GRSE.</li>
    <li><strong>Kamorta Class (Project 28):</strong> Anti-submarine warfare (ASW) corvettes.</li>
  </ul>

  <h4 style="color: #60a5fa; margin-top: 24px;">3. Indian Air Force Inventory</h4>
  <p>The IAF operates a highly diverse fleet spanning generations of aviation technology.</p>

  <h5>A. Fighter Aircraft</h5>
  <ul style="margin-left: 20px;">
    <li><strong>Dassault Rafale:</strong> 4.5-generation twin-engine multirole fighter from France. Equipped with Meteor (BVR) and SCALP (cruise) missiles. Based at Ambala (Golden Arrows) and Hashimara (Falcons).</li>
    <li><strong>Sukhoi Su-30MKI:</strong> Twin-engine air superiority fighter. The backbone of the IAF, license-built by HAL. Capable of carrying the air-launched BrahMos supersonic cruise missile.</li>
    <li><strong>LCA Tejas:</strong> Indigenous delta-wing light combat aircraft developed by ADA/HAL. Replacing aging MiG-21s. Tejas Mk-1A features an AESA radar and mid-air refueling.</li>
    <li><strong>Mirage 2000 (Vajra):</strong> French single-engine multirole fighter. Highly reliable, famously used in the Kargil War and the Balakot airstrikes.</li>
  </ul>

  <h5>B. Transport Fleet</h5>
  <ul style="margin-left: 20px;">
    <li><strong>C-17 Globemaster III:</strong> Heavy-lift strategic transport aircraft (USA). Can carry MBTs and troops over long distances.</li>
    <li><strong>C-130J Super Hercules:</strong> Tactical transport aircraft (USA) optimized for special operations. Capable of landing on unpaved/short runways (e.g., Daulat Beg Oldi).</li>
    <li><strong>Ilyushin Il-76 (Gajraj):</strong> Soviet-era heavy transport.</li>
    <li><strong>C-295MW:</strong> Tactical transport aircraft replacing the Avro-748. Procured from Airbus (Spain); the majority will be manufactured in India by a Tata-Airbus consortium in Vadodara.</li>
  </ul>

  <h5>C. Rotary Wing (Helicopters)</h5>
  <ul style="margin-left: 20px;">
    <li><strong>AH-64E Apache:</strong> The world's most advanced multi-role combat helicopter (USA). Armed with Hellfire missiles.</li>
    <li><strong>CH-47F(I) Chinook:</strong> Heavy-lift twin-rotor helicopter (USA). Crucial for lifting artillery (like M777) and troops to high altitudes.</li>
    <li><strong>LCH Prachand:</strong> Indigenous Light Combat Helicopter developed by HAL. Specifically designed to operate at extreme altitudes (like Siachen) where Apaches cannot operate fully loaded.</li>
    <li><strong>ALH Dhruv:</strong> Indigenous multirole utility helicopter.</li>
  </ul>
</div>

<div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid #4ade80; padding: 16px; margin-top: 32px; border-radius: 0 8px 8px 0;">
  <div style="display: flex; align-items: center; margin-bottom: 12px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <h3 style="color: #4ade80; margin: 0; font-size: 1.1rem;">AI-Generated Summary & Quick Facts</h3>
  </div>
  <ul style="margin-top: 8px; margin-left: 20px; list-style-type: disc;">
    <li style="margin-bottom: 8px;"><strong>Arjun Mk-1A:</strong> Indigenous MBT with Kanchan Armor.</li>
    <li style="margin-bottom: 8px;"><strong>M777 Howitzer:</strong> US-origin ultra-light, air-liftable by Chinook.</li>
    <li style="margin-bottom: 8px;"><strong>K9 Vajra:</strong> South Korean-origin self-propelled howitzer.</li>
    <li style="margin-bottom: 8px;"><strong>Project 75:</strong> Scorpene class submarines (Kalvari, Khanderi, etc.) with French tech.</li>
    <li style="margin-bottom: 8px;"><strong>Project 15B:</strong> Visakhapatnam class stealth destroyers.</li>
    <li style="margin-bottom: 8px;"><strong>LCH Prachand:</strong> HAL-built helicopter tailored for high-altitude warfare.</li>
    <li style="margin-bottom: 8px;"><strong>C-295:</strong> Tata-Airbus joint venture to replace the aging Avro fleet.</li>
  </ul>
</div>
"""

found = False
for c in db['military-aptitude']['chapters']:
    if c['id'] == 'all-equipment':
        for t in c.get('topics', []):
            if t['id'] == 'all-equipment':
                t['notes'] = new_notes.strip()
                found = True

if found:
    new_content = content[:db_match.start(1)] + json.dumps(db, indent=2) + content[db_match.end(1):]
    with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully expanded Comprehensive Equipment Database!")
else:
    print("Could not find the target topic.")
