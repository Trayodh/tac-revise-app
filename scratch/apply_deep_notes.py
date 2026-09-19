import os
import re

expanded_notes = {
    "schedules": r"""<h1>Schedules of the Indian Constitution (Deep Dive)</h1>
<hr />
<h2>Introduction to Schedules</h2>
<p>The Constitution of India originally comprised 395 Articles divided into 22 Parts and 8 Schedules. Currently, it has 12 Schedules. Schedules are lists in the Constitution that categorize and tabulate bureaucratic activity and policy of the Government.</p>
<div style="background-color:#ffebee; padding:15px; border-left:5px solid #f44336; margin:15px 0;">
  <strong>🔥 CDS/NDA Focus Alert:</strong> Questions often pair Schedules with specific Amendments. Memorize the amendments that added the 9th, 10th, 11th, and 12th schedules.
</div>
<h3>Detailed Breakdown (TEARS OF OLD PM)</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
  <tr style="background-color: #f2f2f2;"><th>Schedule</th><th>Subject Matter</th><th>Key Articles</th><th>Amendments/Notes</th></tr>
  <tr><td>1st (Territories)</td><td>Names of States and UTs and their territorial jurisdiction.</td><td>1 & 4</td><td>69th CAA 1991 (Delhi).</td></tr>
  <tr><td>2nd (Emoluments)</td><td>Salaries of President, Governors, Speakers, Judges, CAG.</td><td>59, 65, 75, 97, 125, 148, 158, 164, 186, 221</td><td><strong>Exception:</strong> Prime Minister and CMs are NOT in this list.</td></tr>
  <tr><td>3rd (Affirmations)</td><td>Forms of Oaths or Affirmations for Union/State Ministers, MPs, MLAs, Judges, CAG.</td><td>75, 84, 99, 124, 146, 173, 188, 219</td><td><strong>Exception:</strong> Oaths of President (Art 60), VP (Art 69), Governor (Art 159) are in articles, not here.</td></tr>
  <tr><td>4th (Rajya Sabha)</td><td>Allocation of seats in the Rajya Sabha to the states and UTs.</td><td>4 & 80</td><td>Based on population (1971 census).</td></tr>
  <tr><td>5th (Scheduled Areas)</td><td>Administration and control of Scheduled Areas and Scheduled Tribes.</td><td>244(1)</td><td>Applies to all states EXCEPT Assam, Meghalaya, Tripura, Mizoram.</td></tr>
  <tr><td>6th (Other Areas)</td><td>Administration of Tribal Areas in Assam, Meghalaya, Tripura, Mizoram (AMTM).</td><td>244(2) & 275(1)</td><td>Provides for Autonomous District Councils (ADCs).</td></tr>
  <tr><td>7th (Federal Lists)</td><td>Division of powers between Union and States (Union, State, Concurrent Lists).</td><td>246</td><td>Residuary powers rest with the Union (Art 248).</td></tr>
  <tr><td>8th (Official Languages)</td><td>Recognized languages (originally 14, now 22).</td><td>344 & 351</td><td>Added by 21st, 71st, 92nd Amendments.</td></tr>
  <tr><td>9th (Land Reforms)</td><td>Acts and Regulations (originally land reforms) protected from judicial review.</td><td>31B</td><td>Added by 1st Amendment (1951). Subject to judicial review post-April 24, 1973 (Kesavananda Bharati case).</td></tr>
  <tr><td>10th (Defection)</td><td>Anti-Defection Law. Disqualification of MPs and MLAs.</td><td>102 & 191</td><td>Added by 52nd Amendment (1985). Amended by 91st Amendment (2003).</td></tr>
  <tr><td>11th (Panchayats)</td><td>Powers, authority, and responsibilities of Panchayats (29 matters).</td><td>243G</td><td>Added by 73rd Amendment (1992).</td></tr>
  <tr><td>12th (Municipalities)</td><td>Powers, authority, and responsibilities of Municipalities (18 matters).</td><td>243W</td><td>Added by 74th Amendment (1992).</td></tr>
</table>""",

    "fundamental-rights": r"""<h1>Fundamental Rights (Part III) - Deep Dive</h1>
<hr />
<h2>Overview</h2>
<p>Enshrined in Part III (Articles 12-35) of the Constitution, these are the Magna Carta of India. They are justiciable and defend against state tyranny.</p>
<div style="background-color:#fff3e0; padding:15px; border-left:5px solid #ff9800; margin:15px 0;">
  <strong>⚠️ Crucial Distinctions for CDS:</strong> Know which rights are available only to citizens vs. both citizens and aliens.
</div>
<h3>Rights Available ONLY to Citizens:</h3>
<ul>
  <li>Art 15: No discrimination on grounds of religion, race, caste, sex, place of birth.</li>
  <li>Art 16: Equality of opportunity in public employment.</li>
  <li>Art 19: Six basic freedoms (Speech, Assembly, Association, Movement, Residence, Profession).</li>
  <li>Art 29 & 30: Cultural and educational rights of minorities.</li>
</ul>
<h3>Key Exceptions & Doctrines (CDS Depth):</h3>
<table border="1" style="border-collapse: collapse; width: 100%;">
  <tr style="background-color: #e0f7fa;"><th>Article</th><th>Provision</th><th>Key Exceptions/Case Laws</th></tr>
  <tr><td>Article 13</td><td>Laws inconsistent with Fundamental Rights are void.</td><td>Doctrine of Severability, Doctrine of Eclipse. (Shankari Prasad to Kesavananda Bharati).</td></tr>
  <tr><td>Article 14</td><td>Equality before law (British) & Equal protection of laws (American).</td><td>Rule of Law (A.V. Dicey). Exceptions: President, Governors, Foreign Diplomats.</td></tr>
  <tr><td>Article 20</td><td>Protection in respect of conviction for offenses.</td><td>No ex-post-facto law, No double jeopardy, No self-incrimination. (Does NOT apply to civil laws).</td></tr>
  <tr><td>Article 21</td><td>Protection of life and personal liberty.</td><td>Maneka Gandhi Case (1978) - Due process of law introduced implicitly. Includes Right to Privacy (Puttaswamy case).</td></tr>
  <tr><td>Article 32</td><td>Right to Constitutional Remedies.</td><td>Heart and Soul of the Constitution (Dr. B.R. Ambedkar). Issuance of 5 Writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto).</td></tr>
</table>
""",
    
    "universe-solar-system": r"""<h1>Universe and Solar System (Advanced Geography)</h1>
<hr />
<h2>The Universe</h2>
<p>The study of the universe is called Cosmology. The Big Bang Theory (Georges Lemaître) is the most widely accepted theory of the origin of the universe, suggesting it expanded from a tiny, dense, and hot singularity around 13.8 billion years ago.</p>

<h3>Key Concepts (CDS/NDA Focus)</h3>
<ul>
  <li><strong>Light Year:</strong> Distance light travels in one year (9.46 x 10^12 km). A unit of DISTANCE, not time.</li>
  <li><strong>Astronomical Unit (AU):</strong> Average distance between Earth and Sun (149.6 million km).</li>
  <li><strong>Parsec:</strong> Largest unit of distance (3.26 light years).</li>
  <li><strong>Chandrasekhar Limit:</strong> Maximum mass of a stable white dwarf star (1.44 times the mass of the Sun).</li>
</ul>

<div style="background-color:#e8f5e9; padding:15px; border-left:5px solid #4caf50; margin:15px 0;">
  <strong>🪐 Solar System Facts Often Asked:</strong><br>
  - Hottest Planet: Venus (due to runaway greenhouse effect).<br>
  - Densest Planet: Earth.<br>
  - Least Dense Planet: Saturn (would float on water).<br>
  - Fastest Rotation: Jupiter.<br>
  - Slowest Rotation: Venus.<br>
  - Retrograde Rotation: Venus and Uranus (East to West).
</div>
"""
}

def process_file(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    for topic, new_html in expanded_notes.items():
        pattern = r'(window\.EXPANDED_NOTES_DATA\["' + topic + r'"\]\s*=\s*String\.raw`)(.*?)(`;)'
        match = re.search(pattern, content, flags=re.DOTALL)
        if match:
            print(f"Upgrading topic: {topic} in {filepath}")
            prefix = match.group(1)
            suffix = match.group(3)
            content = content[:match.start()] + prefix + new_html + suffix + content[match.end():]
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    files = [
        'public/notes_generated_polity.js',
        'public/notes_generated_geography.js',
        'www/notes_generated_polity.js',
        'www/notes_generated_geography.js'
    ]
    for file in files:
        process_file(file)
    print("Done upgrading predefined topics.")
