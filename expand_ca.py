import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

new_notes = """
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    India-US Defence Tech Cooperation & MQ-9B Drone Procurement
  </h3>

  <p>India and the United States have significantly deepened their strategic defence and technology collaboration under frameworks like the <strong>Initiative on Critical and Emerging Technology (iCET)</strong> and <strong>INDUS-X</strong> (India-U.S. Defence Acceleration Ecosystem). These agreements aim to shift the relationship from traditional "buyer-seller" dynamics to co-production and co-development.</p>

  <h4 style="color: #60a5fa; margin-top: 24px;">1. Initiative on Critical and Emerging Technology (iCET)</h4>
  <p>Launched in January 2023, iCET is spearheaded by the National Security Advisors of both nations. It focuses on removing regulatory barriers and fostering collaboration in:</p>
  <ul style="margin-left: 20px;">
    <li><strong>AI and Quantum Computing:</strong> Joint research initiatives and investments.</li>
    <li><strong>Space Operations:</strong> ISRO and NASA cooperation, including the upcoming NISAR (NASA-ISRO Synthetic Aperture Radar) mission and a joint mission to the ISS (International Space Station).</li>
    <li><strong>Semiconductors:</strong> Building a resilient supply chain, including Micron Technology's investment in Gujarat.</li>
    <li><strong>Advanced Telecommunications:</strong> Development of Open RAN and 6G technologies.</li>
  </ul>

  <h4 style="color: #60a5fa; margin-top: 24px;">2. INDUS-X (India-U.S. Defence Acceleration Ecosystem)</h4>
  <p>Launched alongside iCET, INDUS-X focuses specifically on defence innovation. It connects Indian and US defence startups, academic institutions, and established defence contractors. Key objectives include:</p>
  <ul style="margin-left: 20px;">
    <li>Joint challenges for startups to solve military problems (e.g., maritime ISR, undersea communication).</li>
    <li>Facilitating venture capital investment in dual-use technologies.</li>
    <li>Mentorship programs pairing experienced US defence firms with Indian MSMEs.</li>
  </ul>

  <h4 style="color: #60a5fa; margin-top: 24px;">3. GE F414 Engine Technology Transfer</h4>
  <p>One of the most significant breakthroughs under iCET is the agreement for General Electric (GE) to jointly produce the <strong>F414 jet engine</strong> in India with Hindustan Aeronautics Limited (HAL). This involves an unprecedented <strong>80% technology transfer</strong>.</p>
  <ul style="margin-left: 20px;">
    <li><strong>Application:</strong> The engines will power India's indigenous Tejas Mk-2 light combat aircraft and the Advanced Medium Combat Aircraft (AMCA) Mk-1.</li>
    <li><strong>Strategic Impact:</strong> Reduces reliance on Russia, boosts India's domestic aerospace manufacturing, and marks a massive leap in US trust, as such high-end jet engine technology is rarely shared.</li>
  </ul>

  <h4 style="color: #60a5fa; margin-top: 24px;">4. MQ-9B SkyGuardian & SeaGuardian Deal</h4>
  <p>The Defence Acquisition Council (DAC) approved the procurement of 31 MQ-9B High-Altitude Long-Endurance (HALE) Unmanned Aerial Vehicles (UAVs) from General Atomics (USA).</p>
  
  <h5>A. Deal Breakdown</h5>
  <ul style="margin-left: 20px;">
    <li><strong>Total Drones:</strong> 31</li>
    <li><strong>Indian Navy:</strong> 15 SeaGuardian variants (optimized for maritime surveillance).</li>
    <li><strong>Indian Army & IAF:</strong> 8 SkyGuardian variants each.</li>
  </ul>

  <h5>B. Capabilities of MQ-9B</h5>
  <ul style="margin-left: 20px;">
    <li><strong>Endurance:</strong> Can fly for over 40 hours continuously.</li>
    <li><strong>Altitude:</strong> Operates at up to 40,000 feet, providing unblinking ISR (Intelligence, Surveillance, and Reconnaissance) over massive areas.</li>
    <li><strong>Weapons Payload:</strong> Capable of carrying Hellfire air-to-surface missiles and laser-guided bombs, making it a highly lethal hunter-killer platform.</li>
    <li><strong>Interoperability:</strong> Ensures seamless data sharing with US and allied forces, crucial for Indo-Pacific maritime domain awareness.</li>
  </ul>

  <h4 style="color: #60a5fa; margin-top: 24px;">5. Foundational Defence Agreements</h4>
  <p>The MQ-9B deal and iCET are built on the bedrock of four foundational agreements signed between the US and India over the last two decades:</p>
  <ul style="margin-left: 20px;">
    <li><strong>GSOMIA (2002):</strong> General Security of Military Information Agreement (protection of classified information).</li>
    <li><strong>LEMOA (2016):</strong> Logistics Exchange Memorandum of Agreement (access to each other's military facilities for refueling/replenishment).</li>
    <li><strong>COMCASA (2018):</strong> Communications Compatibility and Security Agreement (access to advanced US communication equipment).</li>
    <li><strong>BECA (2020):</strong> Basic Exchange and Cooperation Agreement (sharing of geospatial data for high-accuracy targeting).</li>
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
    <li style="margin-bottom: 8px;"><strong>iCET:</strong> Focuses on critical tech like AI, space, and semiconductors.</li>
    <li style="margin-bottom: 8px;"><strong>INDUS-X:</strong> Connects defence startups and facilitates joint innovation.</li>
    <li style="margin-bottom: 8px;"><strong>GE F414:</strong> 80% tech transfer to HAL; powers Tejas Mk-2.</li>
    <li style="margin-bottom: 8px;"><strong>MQ-9B Drones:</strong> 31 HALE UAVs; 15 for Navy (SeaGuardian), 8 each for Army/IAF (SkyGuardian).</li>
    <li style="margin-bottom: 8px;"><strong>Foundational Agreements:</strong> GSOMIA (2002), LEMOA (2016), COMCASA (2018), BECA (2020).</li>
  </ul>
</div>
"""

found = False
for c in db['current-affairs']['chapters']:
    if c['id'] == 'ca-defense-acquisitions':
        for t in c.get('topics', []):
            if t['id'] == 'ca-defense-acquisitions':
                t['notes'] = new_notes.strip()
                found = True

if found:
    new_content = content[:db_match.start(1)] + json.dumps(db, indent=2) + content[db_match.end(1):]
    with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully expanded Current Affairs Drones chapter!")
else:
    print("Could not find the target topic.")
