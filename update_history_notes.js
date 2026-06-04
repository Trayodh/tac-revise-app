const fs = require('fs');

let content = fs.readFileSync('notes_extra_history.js', 'utf8');

const mahajanapadasNew = `
  <h2> Mahajanapadas & Rise of Magadha</h2>
  <p>The 6th century BCE marked the second urbanization in India, characterized by territorial consolidation and new religious movements.</p>

  <h3>1. The 16 Mahajanapadas</h3>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Mahajanapada</th>
      <th style="padding:8px; border:1px solid var(--border);">Capital</th>
      <th style="padding:8px; border:1px solid var(--border);">Present-day</th>
      <th style="padding:8px; border:1px solid var(--border);">Important Ruler</th>
      <th style="padding:8px; border:1px solid var(--border);">River</th>
    </tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Anga</td><td style="padding:8px; border:1px solid var(--border);">Champa</td><td style="padding:8px; border:1px solid var(--border);">Bhagalpur, Bihar</td><td style="padding:8px; border:1px solid var(--border);">Unknown</td><td style="padding:8px; border:1px solid var(--border);">Ganga</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Assaka/Asmaka</td><td style="padding:8px; border:1px solid var(--border);">Potana/Potali</td><td style="padding:8px; border:1px solid var(--border);">Maharashtra & Telangana</td><td style="padding:8px; border:1px solid var(--border);">Unknown</td><td style="padding:8px; border:1px solid var(--border);">Godavari</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Avanti/Malava</td><td style="padding:8px; border:1px solid var(--border);">Ujjayini/Mahishmati</td><td style="padding:8px; border:1px solid var(--border);">Western MP</td><td style="padding:8px; border:1px solid var(--border);">Chanda Pradyota Mahasena</td><td style="padding:8px; border:1px solid var(--border);">Narmada</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Chedi</td><td style="padding:8px; border:1px solid var(--border);">Shuktimati</td><td style="padding:8px; border:1px solid var(--border);">Bundelkhand, UP</td><td style="padding:8px; border:1px solid var(--border);">Shishupala</td><td style="padding:8px; border:1px solid var(--border);">Yamuna</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Gandhara</td><td style="padding:8px; border:1px solid var(--border);">Taxila</td><td style="padding:8px; border:1px solid var(--border);">Pakistan & Afghanistan</td><td style="padding:8px; border:1px solid var(--border);">Ambhi (Porus)</td><td style="padding:8px; border:1px solid var(--border);">Indus</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Kamboja</td><td style="padding:8px; border:1px solid var(--border);">Rajapura</td><td style="padding:8px; border:1px solid var(--border);">Parts of Afghanistan/Pak</td><td style="padding:8px; border:1px solid var(--border);">Unknown</td><td style="padding:8px; border:1px solid var(--border);">Swat</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Kashi</td><td style="padding:8px; border:1px solid var(--border);">Varanasi</td><td style="padding:8px; border:1px solid var(--border);">Uttar Pradesh</td><td style="padding:8px; border:1px solid var(--border);">Prasenajit</td><td style="padding:8px; border:1px solid var(--border);">Ganga</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Kaushambi</td><td style="padding:8px; border:1px solid var(--border);">Kausambi</td><td style="padding:8px; border:1px solid var(--border);">Allahabad, UP</td><td style="padding:8px; border:1px solid var(--border);">Udayana</td><td style="padding:8px; border:1px solid var(--border);">Yamuna</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Kuru</td><td style="padding:8px; border:1px solid var(--border);">Hastinapura</td><td style="padding:8px; border:1px solid var(--border);">Haryana & Delhi</td><td style="padding:8px; border:1px solid var(--border);">Sudas</td><td style="padding:8px; border:1px solid var(--border);">Yamuna</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Magadha</td><td style="padding:8px; border:1px solid var(--border);">Rajagriha/Pataliputra</td><td style="padding:8px; border:1px solid var(--border);">Bihar</td><td style="padding:8px; border:1px solid var(--border);">Bimbisara, Ajatashatru</td><td style="padding:8px; border:1px solid var(--border);">Ganga</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Matsya</td><td style="padding:8px; border:1px solid var(--border);">Virat Nagari</td><td style="padding:8px; border:1px solid var(--border);">Alwar, Rajasthan</td><td style="padding:8px; border:1px solid var(--border);">Unknown</td><td style="padding:8px; border:1px solid var(--border);">Chambal</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Panchala</td><td style="padding:8px; border:1px solid var(--border);">Ahichatra/Kampilya</td><td style="padding:8px; border:1px solid var(--border);">Uttarakhand & UP</td><td style="padding:8px; border:1px solid var(--border);">Chetaka, Drupada</td><td style="padding:8px; border:1px solid var(--border);">Ganga</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Surasena</td><td style="padding:8px; border:1px solid var(--border);">Mathura</td><td style="padding:8px; border:1px solid var(--border);">Uttar Pradesh</td><td style="padding:8px; border:1px solid var(--border);">Kamsa</td><td style="padding:8px; border:1px solid var(--border);">Yamuna</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Vajjis/Vrijji</td><td style="padding:8px; border:1px solid var(--border);">Vaishali</td><td style="padding:8px; border:1px solid var(--border);">Bihar</td><td style="padding:8px; border:1px solid var(--border);">Confederacy</td><td style="padding:8px; border:1px solid var(--border);">Ganga</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Malla</td><td style="padding:8px; border:1px solid var(--border);">Kushinagar/Pava</td><td style="padding:8px; border:1px solid var(--border);">Deoria, UP</td><td style="padding:8px; border:1px solid var(--border);">Republic</td><td style="padding:8px; border:1px solid var(--border);">Ganga</td></tr>
  </table>

  <h3>2. Rise of Magadha</h3>
  <p>Magadha rose to become the supreme power due to: large iron deposits (for weapons/tools), strategic capitals (Rajgir surrounded by hills; Pataliputra at river junctions), and first-time use of elephants in wars.</p>
  <ul>
    <li><strong>Haryanka Dynasty (600 - 413 BCE):</strong> 
      <ul>
        <li>**Bimbisara:** Founder. Expanded via matrimonial alliances. First king to have a standing army.</li>
        <li>**Ajatashatru:** Killed his father Bimbisara. Conquered Vaishali using war engines *Mahasilakantaka* and *Rathamusala*. Patronised the **1st Buddhist Council** at Rajgir.</li>
        <li>**Udayin:** Shifted the capital from Rajgir to **Pataliputra**.</li>
      </ul>
    </li>
    <li><strong>Shishunaga Dynasty (412 - 345 BCE):</strong> Founded by Shishunaga. Shifted capital from Pataliputra to Vaishali. Kalasoka (Kakarvarna) patronised the **2nd Buddhist Council**.</li>
    <li><strong>Nanda Dynasty (345 - 321 BCE):</strong>
      <ul>
        <li>**Mahapadma Nanda:** Took the title of *Ekarat*. First non-Kshatriya dynasty.</li>
        <li>**Dhana Nanda:** Last ruler. Alexander the Great invaded North-West India during his reign. Overthrown by Chandragupta Maurya.</li>
      </ul>
    </li>
  </ul>
`;

const buddhismJainismNew = `
  <h2> Buddhism & Jainism</h2>
  <p>Heterodox religious movements that arose in the 6th century BCE as a reaction to Vedic ritualism and caste rigidity.</p>

  <h3>1. Buddhism (Gautama Buddha: 563 - 483 BCE)</h3>
  <ul>
    <li>Born as Siddhartha in Lumbini (Nepal). Renounced home at 29. Attained Enlightenment under Bodhi tree in Bodh Gaya. First sermon at Sarnath (First Turning of the Wheel of Dharma). Died at Kushinagar.</li>
    <li><strong>Core Teachings:</strong> 4 Noble Truths, Eightfold Path, Middle Way. Three Jewels (Buddha, Dharma, Sangha).</li>
    <li><strong>Literature:</strong> Tripitaka (Pali Canon), Mahayana Sutras, Jataka Tales.</li>
  </ul>

  <h3>2. Buddhist Schisms & Sects</h3>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Aspect</th>
      <th style="padding:8px; border:1px solid var(--border);">Mahayana Buddhism (Great Vehicle)</th>
      <th style="padding:8px; border:1px solid var(--border);">Hinayana/Theravada (Lesser Vehicle)</th>
    </tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Goal</td><td style="padding:8px; border:1px solid var(--border);">Buddhahood for all beings</td><td style="padding:8px; border:1px solid var(--border);">Personal enlightenment (Arhatship)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Bodhisattvas</td><td style="padding:8px; border:1px solid var(--border);">Highly revered, active role</td><td style="padding:8px; border:1px solid var(--border);">Less emphasis on their role</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Scriptures</td><td style="padding:8px; border:1px solid var(--border);">Expanded canon (Sanskrit)</td><td style="padding:8px; border:1px solid var(--border);">Pali Canon (Tripitaka)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Idol Worship</td><td style="padding:8px; border:1px solid var(--border);">Yes, Buddha as a deity</td><td style="padding:8px; border:1px solid var(--border);">No, Buddha as a teacher/guide</td></tr>
  </table>

  <h3>3. Jainism (Vardhamana Mahavira: 599 - 527 BCE)</h3>
  <ul>
    <li>24th Tirthankara. Born at Kundagrama (Vaishali). Renunciation at 30. Attained Kevala Jnana (omniscience) after 12 years. Died at Pawapuri.</li>
    <li><strong>Core Teachings:</strong> Tri-ratnas (Right Faith, Right Knowledge, Right Conduct). 5 Vows (Ahimsa, Satya, Asteya, Aparigraha, Brahmacharya). **Anekantavada / Syadvada** (theory of multiple perspectives).</li>
  </ul>

  <h3>4. Jain Sects (Svetambar vs Digambar)</h3>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Aspect</th>
      <th style="padding:8px; border:1px solid var(--border);">Svetambar</th>
      <th style="padding:8px; border:1px solid var(--border);">Digambar</th>
    </tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Clothing</td><td style="padding:8px; border:1px solid var(--border);">White-clad monks/nuns</td><td style="padding:8px; border:1px solid var(--border);">Sky-clad (naked) monks</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Female Monks</td><td style="padding:8px; border:1px solid var(--border);">Allow ordination of women</td><td style="padding:8px; border:1px solid var(--border);">Do not believe women can attain Moksha directly</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Origin</td><td style="padding:8px; border:1px solid var(--border);">Teachings of Sthulabhadra</td><td style="padding:8px; border:1px solid var(--border);">Original teachings, led by Bhadrabahu</td></tr>
  </table>
`;

const mauryanPeriodNew = `
  <h2> The Mauryan Empire & Ashokan Edicts</h2>
  <p>India's first historical empire, establishing central control over most of the subcontinent.</p>

  <h3>1. Rulers & Triumphs</h3>
  <ul>
    <li><strong>Chandragupta Maurya (321 - 185 BCE):</strong> Overthrew Dhana Nanda with Chanakya. Defeated Selcus Nicator and married his daughter Helena. Adopted Jainism and committed Sallekhana.</li>
    <li><strong>Bindusara:</strong> Called *Amitrochates* (slayer of enemies). Joined Ajivika Sect.</li>
    <li><strong>Ashoka the Great:</strong> After Kalinga war, renounced violence. Spread Buddhism via missionaries and built stupas.</li>
  </ul>

  <h3>2. Comprehensive Ashokan Edicts</h3>
  <p>Ashoka's inscriptions on pillars and rocks provided insights into governance, policies, and religious tolerance.</p>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Edict</th>
      <th style="padding:8px; border:1px solid var(--border);">Key Description & Points</th>
    </tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Major Rock Edict I</td><td style="padding:8px; border:1px solid var(--border);">Prohibition of animal sacrifice, especially during festive seasons.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Major Rock Edict II</td><td style="padding:8px; border:1px solid var(--border);">Medical treatment of humans/animals. Mentions Pandyas, Satyapuras, Keralaputras of South India.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Major Rock Edict III</td><td style="padding:8px; border:1px solid var(--border);">Generosity to Brahmins. Yuktas, Pradeshikas, Rajukas ordered to spread Dhamma every 5 years.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Major Rock Edict IV</td><td style="padding:8px; border:1px solid var(--border);">Dhammaghosha (sound of righteousness) over Bherighosha (sound of war).</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Major Rock Edict V</td><td style="padding:8px; border:1px solid var(--border);">About Dhammamahamatras and treating slaves right.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Major Rock Edict XIII</td><td style="padding:8px; border:1px solid var(--border);">Mentions victory over Kalinga, Ashoka's remorse, and interactions with Greek Kings.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Rummindei Inscription</td><td style="padding:8px; border:1px solid var(--border);">Mentions exemption from bali and reduced taxes for Lumbini (Buddha's birthplace).</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Allahabad (Schism) Edict</td><td style="padding:8px; border:1px solid var(--border);">Urges Sangha members to avoid causing divisions. Also contains Samudragupta's inscription.</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Kandahar Inscription</td><td style="padding:8px; border:1px solid var(--border);">Famous bilingual edict in Greek and Aramaic.</td></tr>
  </table>

  <h3>3. Decline of the Mauryan Empire</h3>
  <p>Weak successors, regional revolts, economic drain from military campaigns, and foreign invasions by Greeks, Sakas, and Parthians destabilized the empire.</p>
`;

const postMauryanNew = `
  <h2> Post-Mauryan Dynasties & Foreign Invasions</h2>
  <p>After the Mauryan decline, Magadha saw the rise of smaller dynasties, while the North-West faced foreign invasions.</p>

  <h3>1. Indigenous Dynasties (185 BCE - 321 CE)</h3>
  <ul>
    <li><strong>Shunga Dynasty:</strong> Pushyamitra Shunga established the dynasty. Followed Brahminism. Vasumitra defeated Greek king Menander (conversation compiled in "Milindapanha").</li>
    <li><strong>Kanva Dynasty:</strong> Founded by Vasudeva Kanva.</li>
    <li><strong>Satavahanas:</strong> Founded by Simuka. Capital at Pratistanpura (later Amaravati). Gautamiputra Satakarni was a powerful ruler (Nashik inscription). Patrons of the Amaravati school of Art.</li>
  </ul>

  <h3>2. Central Asian Invasions & Impacts</h3>
  <ul>
    <li><strong>Indo-Greeks:</strong> First to introduce **Gold coins** in India. Introduced Hellenistic art in the north-west.</li>
    <li><strong>Sakas / Scythians:</strong> Replaced Indo-Greeks. Ruled via Kshatrapas. **Rudradaman I** repaired the Sudarshan Lake (Junagarh inscription).</li>
    <li><strong>Parthians:</strong> Originally from Iran. Famous ruler: Gondophernes (St. Thomas visited India during his reign).</li>
    <li><strong>Kushans (Yuechis):</strong> Settled in lower Indus basin.
      <ul>
        <li>Kadphises I laid the foundation. Wima Kadphises issued large numbers of gold coins.</li>
        <li>**Kanishka:** Issued highest metallic purity gold coins. Capitals at Peshawar and Mathura. Controlled the Silk Route. Patronised Buddhism.</li>
      </ul>
    </li>
  </ul>

  <h3>3. Cultural Impact of Central Asian Contacts</h3>
  <ul>
    <li>Introduced cavalry techniques: toe stirrups, reins, saddles.</li>
    <li>Introduced turbans, tunics, trousers, and heavy long coats/boots.</li>
    <li>**Satrap System:** Hereditary dual rule (father & son ruling jointly).</li>
    <li>Rise of **Gandhara Art** (Greco-Roman, spiritual Buddha with half-closed eyes) and **Mathura Art** (indigenous, red sandstone).</li>
  </ul>
`;

const chalcolithicNew = `
  <h2>️ The Chalcolithic & Pottery Cultures</h2>
  <p>The transition period from the Stone Age to the Metal Age, characterized by the joint use of Copper and Stone.</p>

  <h3>1. Prehistoric Pottery Cultures Timeline</h3>
  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">
    <tr style="background-color: rgba(255,255,255,0.15); font-weight: bold;">
      <th style="padding:8px; border:1px solid var(--border);">Culture</th>
      <th style="padding:8px; border:1px solid var(--border);">Period</th>
      <th style="padding:8px; border:1px solid var(--border);">Pottery Types</th>
    </tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Mehrgarh Culture</td><td style="padding:8px; border:1px solid var(--border);">7000-2600 BCE</td><td style="padding:8px; border:1px solid var(--border);">Red Ware, Black-on-Red Ware</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Indus Valley Civilization</td><td style="padding:8px; border:1px solid var(--border);">2600-1900 BCE</td><td style="padding:8px; border:1px solid var(--border);">Painted Grey Ware, Black Polished Ware</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Ochre Coloured Pottery Culture</td><td style="padding:8px; border:1px solid var(--border);">2000-1500 BCE</td><td style="padding:8px; border:1px solid var(--border);">Ochre Coloured Pottery (OCP)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Malwa Culture</td><td style="padding:8px; border:1px solid var(--border);">1500-500 BCE</td><td style="padding:8px; border:1px solid var(--border);">Malwa Ware (Red and black pottery)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Early Iron Age Cultures</td><td style="padding:8px; border:1px solid var(--border);">1200-600 BCE</td><td style="padding:8px; border:1px solid var(--border);">Northern Black Polished Ware, Painted Grey Ware (PGW)</td></tr>
    <tr><td style="padding:8px; border:1px solid var(--border);">Megalithic Cultures</td><td style="padding:8px; border:1px solid var(--border);">1000-300 BCE</td><td style="padding:8px; border:1px solid var(--border);">Black and Red Ware</td></tr>
  </table>

  <h3>2. Major Chalcolithic Cultures</h3>
  <ul>
    <li><strong>Ahar-Banas Culture (Rajasthan: 2500-1500 BCE):</strong> Sites like Ahar and Gilund. Houses made of stone and mud. Copper smelting furnaces found.</li>
    <li><strong>Jorwe Culture (Maharashtra: 1400-700 BCE):</strong> Most extensive. Sites: Inamgaon and Daimabad. Highly settled, fortified villages.</li>
  </ul>
`;

function replaceContent(key, newString) {
  const regex = new RegExp('window\\.EXPANDED_NOTES_DATA\\["' + key + '"\\] = `[\\s\\S]*?`;');
  content = content.replace(regex, 'window.EXPANDED_NOTES_DATA["' + key + '"] = `\\n' + newString + '\\n`;');
}

replaceContent("mahajanapadas", mahajanapadasNew);
replaceContent("buddhism-jainism", buddhismJainismNew);
replaceContent("mauryan-period", mauryanPeriodNew);
replaceContent("post-mauryan-india", postMauryanNew);
replaceContent("chalcolithic-age", chalcolithicNew);

fs.writeFileSync('notes_extra_history.js', content, 'utf8');
console.log("Successfully updated notes_extra_history.js");
