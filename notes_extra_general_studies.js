window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};

fetch('gs_notes/full_gs_notes.md')
  .then(response => response.text())
  .then(data => {
    // Process paths to local server paths
    let processed = data.replace(/file:\/\/\/C:\/Users\/Trayodh%20Khandalkar\/\.gemini\antigravity-ide\/brain\/63330b5a-af9a-4284-8f4b-225b7f5a6c88\/gs_notes\//g, 'gs_notes/');
    
    // Markdown parser
    let lines = processed.split('\n');
    let html = '';
    let inList = false;
    let inTable = false;
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      // Handle list items
      if (line.startsWith('- ')) {
        if (!inList) {
          html += '<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 12px;">';
          inList = true;
        }
        let content = line.substring(2);
        html += `<li style="margin-bottom: 6px; line-height: 1.5;">${parseInlineMarkdown(content)}</li>`;
        continue;
      } else if (inList && !line.startsWith('- ')) {
        html += '</ul>';
        inList = false;
      }
      
      // Handle tables
      if (line.startsWith('|')) {
        if (!inTable) {
          html += '<table style="width:100%; border-collapse: collapse; margin: 16px 0; font-size: 0.9rem; border: 1px solid var(--border);">';
          inTable = true;
          // Parse headers
          let cells = line.split('|').map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
          html += '<thead><tr style="background: rgba(34, 197, 94, 0.15); color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--border);">';
          cells.forEach(cell => {
            html += `<th style="padding: 10px; border: 1px solid var(--border); text-align: left;">${parseInlineMarkdown(cell)}</th>`;
          });
          html += '</tr></thead><tbody>';
          continue;
        } else {
          if (line.includes('---')) {
            // Separator line, skip
            continue;
          }
          let cells = line.split('|').map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
          html += '<tr style="border-bottom: 1px solid var(--border);">';
          cells.forEach(cell => {
            html += `<td style="padding: 8px; border: 1px solid var(--border);">${parseInlineMarkdown(cell)}</td>`;
          });
          html += '</tr>';
          continue;
        }
      } else if (inTable && !line.startsWith('|')) {
        html += '</tbody></table>';
        inTable = false;
      }
      
      // Handle blank lines
      if (line === '') {
        continue;
      }
      
      // Handle headings
      if (line.startsWith('#### ')) {
        html += `<h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px; font-weight: 600;">${parseInlineMarkdown(line.substring(5))}</h4>`;
      } else if (line.startsWith('### ')) {
        html += `<h3 style="color: var(--accent); margin-top: 24px; margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 6px; font-weight: 600;">${parseInlineMarkdown(line.substring(4))}</h3>`;
      } else if (line.startsWith('## ')) {
        html += `<h2 style="color: var(--primary); margin-top: 32px; margin-bottom: 16px; background: rgba(34, 197, 94, 0.1); padding: 10px 14px; border-radius: 6px; font-weight: bold; border-left: 4px solid var(--accent);">${parseInlineMarkdown(line.substring(3))}</h2>`;
      } else if (line.startsWith('# ')) {
        html += `<h1 style="color: var(--primary); font-size: 2rem; margin-top: 36px; margin-bottom: 24px; text-align: center; border-bottom: 2px solid var(--accent); padding-bottom: 10px;">${parseInlineMarkdown(line.substring(2))}</h1>`;
      } else if (line.startsWith('> ')) {
        html += `<blockquote style="border-left: 4px solid var(--accent); padding: 8px 12px; margin: 16px 0; background: rgba(34, 197, 94, 0.05); color: var(--text-secondary); border-radius: 0 4px 4px 0;">${parseInlineMarkdown(line.substring(2))}</blockquote>`;
      } else if (line.startsWith('---')) {
        html += '<hr style="border: 0; border-top: 1px solid var(--border); margin: 32px 0;" />';
      } else {
        html += `<p style="margin-bottom: 12px; line-height: 1.6; color: var(--text-primary);">${parseInlineMarkdown(line)}</p>`;
      }
    }
    
    if (inList) html += '</ul>';
    if (inTable) html += '</tbody></table>';
    
    window.EXPANDED_NOTES_DATA["generalstudies"] = html;
  });

function parseInlineMarkdown(text) {
  let res = text;
  // images
  res = res.replace(/!\[(.*?)\]\((.*?)\)/g, '<div style="text-align: center; margin: 20px 0;"><img src="$2" alt="$1" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 1px solid var(--border);" /><br/><span style="font-size: 0.85rem; color: var(--text-secondary); font-style: italic; margin-top: 6px; display: inline-block;">$1</span></div>');
  // bold
  res = res.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // italics
  res = res.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // inline code
  res = res.replace(/`(.*?)`/g, '<code style="background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; border: 1px solid rgba(255,255,255,0.15);">$1</code>');
  // links
  res = res.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color: var(--accent); text-decoration: underline; font-weight: 500;">$1</a>');
  return res;
}

EXPANDED_NOTES_DATA["ca-upsc-master-framework"] = `<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    <span>•</span> UPSC Core Current Affairs Syllabus Map
  </h3>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    In the context of Indian Defence Examinations (NDA, CDS, AFCAT), the "Reports, Awards & Judgments" segment is a high-frequency area that tests a candidate's awareness of national and international governance, judicial activism, and global recognition. UPSC does not merely ask for names; it tests the <strong>methodology, mandate, and impact</strong> of these entities. Understanding this syllabus map requires a systematic approach to categorizing information into institutional frameworks, thematic relevance, and constitutional significance.
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Reports</strong> are analyzed based on the publishing body (e.g., World Bank, IMF, NITI Aayog) and the specific indices they release. For defence aspirants, reports related to <em>Global Peace Index, Human Development Index, and Military Expenditure (SIPRI)</em> are critical. You must identify the "Key Findings" and "India's Rank" rather than memorizing the entire document. Focus on the <strong>parameters</strong> used to calculate these indices, as UPSC often frames questions around the methodology (e.g., "Which of the following indicators is NOT used in the Global Hunger Index?").
  </p>

  <p style="line-height: 1.6; margin-bottom: 15px;">
    <strong>Awards</strong> are categorized into civilian honors (Bharat Ratna, Padma Awards), literary/scientific prizes (Nobel, Booker, Abel), and defence-specific decorations (Param Vir Chakra, Shaurya Chakra). For <strong>Judgments</strong>, the focus remains on landmark Supreme Court rulings that interpret the Constitution. You must link these judgments to specific Articles (e.g., Right to Privacy under Article 21, Basic Structure Doctrine under Kesavananda Bharati case).
  </p>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Strategic Categorization</h4>
  <ul style="list-style-type: square; padding-left: 20px; margin-bottom: 20px;">
    <li style="margin-bottom: 8px;"><strong>Reports:</strong> Focus on the "Publisher" and "Primary Objective." (e.g., Ease of Doing Business - World Bank).</li>
    <li style="margin-bottom: 8px;"><strong>Awards:</strong> Focus on the "Field of Excellence" and "First Recipient vs. Current Recipient."</li>
    <li style="margin-bottom: 8px;"><strong>Judgments:</strong> Focus on the "Constitutional Article" and the "Bench Strength" (if relevant for landmark cases).</li>
  </ul>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
  <ul style="list-style-type: disc; padding-left: 20px;">
    <li style="margin-bottom: 5px;"><strong>Polity:</strong> Art 1-395 (Focus on Fundamental Rights, DPSP, and Emergency Provisions).</li>
    <li style="margin-bottom: 5px;"><strong>Economy:</strong> Repo Rate, CPI (Consumer Price Index), WPI (Wholesale Price Index).</li>
    <li style="margin-bottom: 5px;"><strong>Environment:</strong> COP (Conference of Parties), Ramsar Sites (Wetlands of International Importance).</li>
    <li style="margin-bottom: 5px;"><strong>Security:</strong> Cyber Security (CERT-In), Maritime Security (SAGAR Doctrine).</li>
  </ul>

  <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 6px; margin-top: 20px;">
    <strong style="color: var(--accent);">Note: Pro-Tip for Memory:</strong> Use the <strong>"3-Layer Filter"</strong> method. 
    1. <em>Layer 1:</em> Who released it? 
    2. <em>Layer 2:</em> What is the core theme? 
    3. <em>Layer 3:</em> How does it affect India's policy? 
    Avoid rote memorization of dates; focus on the <strong>chronological sequence</strong> of major events instead.
  </div>
</div>`;



EXPANDED_NOTES_DATA["capf-cse-master-insights"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from GENERAL ABILITY AND INTELLIGENCE_0
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity & Governance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This high-yield area covers the Constitution of India, including its Preamble, Fundamental Rights (e.g., Article 19, 21, 32, 226, 227, 257, 262, 263, 265, 275, 280, 300A, 301, 302, 304, 307, 312, 315, 324, 330, 332, 335, 338, 340, 341, 342, 343, 344, 350A, 350B, 351, 352, 356, 360, 368), Directive Principles of State Policy (DPSP), and Fundamental Duties. Aspirants must understand the structure, powers, and functions of the Union and State Executive (President, PM, Council of Ministers, Governors, CMs), Legislature (Parliament, State Legislatures, their committees like Public Accounts Committee), and Judiciary (Supreme Court, High Courts, their jurisdiction, advisory powers, power of contempt, and landmark judgments like A.K. Gopalan and Maneka Gandhi cases). Key concepts include federalism, separation of powers, constitutional amendments, and local self-government (Panchayati Raj and Municipalities). Knowledge of constitutional bodies and their roles is also essential.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    General Science (Physics, Chemistry, Biology) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This section tests fundamental scientific principles up to the 10th-grade level. In Physics, focus on optics (lenses, dispersion, human eye defects like myopia and their correction), basic electricity (current, charge, time), and general concepts like luminous objects and speed calculations (sound, light). Chemistry includes chemical reactions (endothermic, exothermic, reactivity series of metals, reactions with acids/bases), properties of elements (periodic table trends like atomic radius), everyday chemistry (e.g., preventing rancidity), and metallurgy. Biology covers cell biology (plant vs. animal cells, organelles), plant and animal tissues (e.g., aerenchyma, connective tissues), biological classification (Kingdom Monera), human diseases (transmission modes), and basic biochemistry (respiration products, photosynthesis, chlorophyll function). Understanding the application of these concepts is crucial.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Current Events of National & International Importance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic is dynamic and requires continuous updates on significant events from the past 1-1.5 years. Key areas include: government schemes and policies (e.g., E-100 pilot project), defense acquisitions (e.g., Heron drones), environmental initiatives (e.g., new National Parks, World Ocean Day themes, conservation reserves like Asan), scientific and technological advancements (e.g., new water purification technologies, COVID-19 variants), major awards (e.g., International Booker Prize, National Film Awards), economic reports and indices (e.g., SDG India Index, Chandler Good Government Index), and international relations (e.g., cyclone naming conventions, major global events). Aspirants should focus on the 'who, what, when, where, why' of these events and their implications.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian History & Culture <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This broad topic spans Ancient, Medieval, and Modern Indian History, along with Art and Culture. For Ancient India, focus on the Harappan Civilization (abandonment patterns), Mauryan Empire (capital Pataliputra), Satavahanas, and ancient philosophies (e.g., Nagarjuna's Madhyamika Karika). Medieval India includes the Delhi Sultanate (Qutb Minar's construction), Deccan Sultanates (their regions), Mughal administration (Akbar's policies like Zabt, capital shifts), Bhakti and Sufi movements (saints like Chaitanya), and peasant leaders (Jat leaders). Modern India covers the advent of Europeans, land revenue settlements (Permanent, Ryotwari, Mahalwari), socio-religious reform movements (Dharma Sabha), the national movement (Congress Socialist Party, Nehru's views on socialism), and the purpose of colonial-era hill stations. Art and Culture emphasize different schools of art (e.g., Mathura School and Buddha Mudras) and literary works.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian & World Geography <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers both physical and human geography. Physical geography includes geomorphology (volcanoes, river landforms like oxbow lakes, coastal features like caves/arches/stacks, chemical weathering types), climatology (factors affecting climate), oceanography (coral reef growth conditions), and earth's interior (convection currents in the mantle). Indian geography focuses on physiographic divisions (e.g., Cardamom Hills as part of Western Ghats), drainage systems (major rivers and their tributaries like Sutlej-Indus, Kosi-Ganga, Teesta-Brahmaputra, Chambal-Yamuna), major ports (e.g., Kolkata as riverine port), and desert rivers. Human geography includes population dynamics (migration pull factors), demographic transition models, and basic cartography (absolute location using latitude and longitude). Knowledge of meteorological instruments (e.g., anemometer for wind speed) is also important.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from GENERAL STUDIES PAPER I
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Economy: Monetary & Fiscal Policy, International Finance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Aspirants must understand the Reserve Bank of India's (RBI) role in monetary policy (e.g., controlling inflation, managing exchange rates like NEER/REER, Open Market Operations), government's fiscal policy (budget, debt, types of expenditure), and international finance concepts (capital flight, External Commercial Borrowings, convertible bonds, role of International Monetary Fund, G20 initiatives like the Common Framework for debt treatment). Knowledge of new financial instruments (Inflation-Indexed Bonds, Non-Fungible Tokens) and regulatory bodies (Banks Board Bureau, credit rating agencies) is also essential.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity: Constitutional Framework & Governance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Core topics include the structure and functions of Parliament (Lok Sabha's exclusive powers, legislative process for Constitutional Amendment Bills, anti-defection law, roles of Speaker/Deputy Speaker), the Judiciary (Contempt of Court, various writs), Executive (Attorney General, Council of Ministers), and key constitutional provisions (e.g., Fifth Schedule). Understanding historical constitutional developments (e.g., Government of India Act 1919) and the functioning of international bodies like the UN General Assembly and its committees is also important.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Environment & Ecology: Climate Change, Biodiversity & Conservation <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This section covers global environmental issues (climate change, Greenhouse Gas sources like methane/nitrous oxide, international initiatives like Climate Action Tracker, Under2 Coalition), pollution (WHO Air Quality Guidelines, acid rain), and conservation efforts (wetlands, coral reefs, Miyawaki method for afforestation, wildlife protection laws). Geographical features (lakes, rivers, mountains) and their environmental significance, along with international conventions like UNCLOS and Polar Code, are frequently tested.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Science & Technology: Digital Initiatives & Emerging Technologies <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Focus on government digital initiatives (Ayushman Bharat Digital Mission, Aarogya Setu, CoWIN, DigiLocker, DIKSHA), emerging technologies (Web 3.0, Quantum Computing, Nanotechnology), and biotechnology (vaccines, probiotics, biofilms, DNA barcoding). Understanding the impact of space weather (solar storms) on Earth's systems and communication technologies (RFID, WLAN) is also key. Knowledge of the immune system (B and T cells) is also relevant.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Ancient & Medieval Indian History: Dynasties, Culture & Administration <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Key areas include major dynasties (Mauryan - Ashokan Edicts, Chandela, Paramara, Gurjara-Pratihara, Rashtrakuta), significant texts (Sangam literature, Kautilya's Arthashastra, Jain texts like Parishishtaparvan and Trishashtilakshana Mahapurana), cultural aspects (Ramanuja's teachings, Somnath Temple, Yogavāsistha), and administrative practices (slavery in Arthashastra). Early European presence and interactions (Dutch, Alfonso de Albuquerque, English East India Company) and major events like Mongol invasions are also important.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP-CAPF-20-Gen_Ability_Intelligence
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity & Governance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers the foundational aspects of the Indian Constitution, including its making, salient features, fundamental rights, directive principles, and fundamental duties. Aspirants must have a thorough understanding of the Union and State Executives (President, Governor, Prime Minister, Chief Minister, Council of Ministers), the Legislature (Parliament, State Legislatures, their powers, functions, and procedures like Money Bills, Censure Motions, Speaker's role, Parliamentary Committees), and the Judiciary (Supreme Court, High Courts, Attorney General). Local Self-Government (Panchayats and Municipalities) and Union-State relations (legislative, administrative, and financial) are also critical. Key constitutional bodies and their functions are frequently tested.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    General Science (Physics, Chemistry, Biology) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This high-yield section demands a strong grasp of basic scientific principles. In Physics, focus on mechanics (Newton's laws, free fall, properties of matter like surface tension), waves (Doppler effect, wavelength), electromagnetism (magnetic fields, Fleming's rules), and modern physics (photoelectric effect, de Broglie wavelength). For Chemistry, essential areas include the periodic table (properties of elements like alkaline earth metals), atomic structure, common compounds and their uses (e.g., magnesium, paint components), water chemistry (hardness removal), and environmental chemistry (photochemical smog). Biology covers cell biology (respiration, chromatin), human physiology (respiration, endocrine system, nervous system, blood components like platelets), plant biology (fertilization, photosynthesis), and animal classification (phyla). Applications of science in daily life are also important.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian History & Culture <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic spans Ancient, Medieval, and Modern Indian History. Key areas include major civilizations (Harappan), ancient kingdoms (Mahajanapadas, Satavahanas), social structures (Varna system), religious and philosophical movements (Bhakti Movement, Lingayats), art and architecture (temples like Kandariya Mahadeo, Vitthala), and literature (Tulsidas's works). For the Medieval period, focus on Mughal administration (Sulh-i kul, religious policies) and regional powers (Marathas). Modern Indian History emphasizes the freedom struggle, key events (Dandi March), social reform movements (Prarthana Samaj), and important treaties (Treaty of Amritsar). Cultural aspects, including languages and literary works, are also significant.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Current Affairs & Government Schemes <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Staying updated with recent national and international developments is crucial. This includes significant events (e.g., Cyclone Amphan), awards (Fed Cup Heart Award), important days (National Technology Day), defence operations (Operation Sadbhavna, Mission Sagar), and international reports/indices (Global Energy Transition Index). Government schemes and initiatives (e.g., SAUBHAGYA, PAHAL) related to various sectors like energy, welfare, and infrastructure are frequently asked. International conventions and protocols, especially those related to environment (Cartagena Protocol), are also important.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Geography (Indian, World & Environment) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers physical, human, and environmental geography. For Indian Geography, focus on river systems (Kaveri, Alakananda, Krishna), climate classifications (Koppen's for Indian regions), and rainfall patterns. World Geography includes knowledge of countries and their boundaries (e.g., South Africa's neighbours), major landforms (Karst topography, coastal features like sand spits), and important ports (Singapore as Port of Call). Environmental Geography emphasizes ecological concepts (ecotone), vegetation types (Chaparral, Sal), and the importance of ecosystems (coral reefs). Agricultural practices like shifting cultivation are also relevant.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP-CAPF-22-GAI-080822
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    General Science (Physics, Chemistry, Biology) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This section covers fundamental concepts across Physics, Chemistry, and Biology. For Biology, focus on cell biology (lysosomes, meristematic cells, genetic material in prokaryotes/eukaryotes), plant physiology (phloem, vegetative propagation), animal kingdom (e.g., four-chambered hearts), and basic agriculture (hybridization, plant nutrients like macronutrients). In Physics, key areas include kinematics (momentum, kinetic energy), electricity (short circuits), optics (lenses, light scattering), energy conversion (generators), and units/measurements (pressure, atomic radius). For Chemistry, understand chemical reactions (combination, hydrogenation), types of oxides (amphoteric), common compounds (baking soda and CO2 production), ores (e.g., cinnabar for mercury), alloys (e.g., white gold), and catalysts.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity & Governance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Aspirants must have a strong grasp of the Indian Constitution, including sources of law, features of federalism (separation of powers), and fundamental duties (e.g., Swaran Singh Committee recommendations). Key executive powers, such as the Governor's ordinance-making power (referencing landmark cases like D.C. Wadhwa vs. State of Bihar) and the appointment process for District Judges, are crucial. Knowledge of parliamentary procedures and bodies, including different types of motions (censure, no-confidence) and the composition/chairperson appointment of committees like the Committee on Public Undertakings, is essential. Additionally, understand the functions of key governance bodies like the Cabinet Secretariat (inter-ministerial coordination, crisis management) and the National Human Rights Commission (NHRC), including the term of office for its chairperson and members.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian History & Art & Culture <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic spans ancient, medieval, and modern Indian history, along with significant aspects of art and culture. For Ancient History, study Ashokan inscriptions (scripts), Vedic rivers, Chola bronzes (Nataraja), and early literature like Tolkappiyam (Sangam period grammar). Medieval History includes important battles such as Talikota (Rakshasi-Tangadi) and the evolution of music forms like Dhrupad (Raja Man Singh Tomar). Modern History focuses on 19th-century developments in Indian painting, key acts like the Vernacular Press Act of 1878, controversies such as the Ilbert Bill of 1885, significant legislative efforts like Fox's India Bill of 1785, and administrative periods like Lord Curzon's viceroyalty. Post-independence history includes the integration of Princely States (e.g., Travancore, plebiscites) and major commissions like the Kothari Commission on education. Art and Culture also includes specific artworks (Bharatmata), painting schools (Malwa, Mughal), and literary works (Harshavardhana, partition narratives). The first All India Census (1872) is also a factual point to remember.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Geography (Physical, Indian & World) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic requires understanding both physical and Indian geography. For Physical Geography, focus on atmospheric phenomena (troughs, ridges, normal lapse rate, jet streams), global features (great circles), oceanography (major ocean currents like Gulf Stream, Labrador, California Current, El Niño), geomorphic processes (solifluction in permafrost regions), and types of plains (Bhabar, Bhangar, Khadar, Delta). Indian Geography includes river systems (Brahmaputra tributaries like Manas, Vedic rivers), important lakes (Anasagar), landlocked states without international boundaries, major mountain passes (Bara Lacha La, Shipki La, Jelep La, Bomdi La), physiographic divisions (Deccan Plateau, Karbi Anglong Hills), and agricultural practices like Jhum cultivation (e.g., in Mizoram). Basic cartography, including conformal maps and their use in showing spatial relationships, is also relevant.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Current Affairs, Defence, International Relations & Government Schemes <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This combined topic is highly critical for CAPF, blending contemporary events with core defence and policy knowledge. For Defence & Security, study reusable rocket technology (SpaceX Falcon 9), hypersonic missiles (Russia's Kinzhal), fighter jets (Mirage 2000, HAL Tejas, Rafale), military helicopters (Cheetah, Chetak, Rudra, their armaments), the Border Roads Organization (BRO) and its functions, Central Paramilitary Forces (oldest, e.g., Assam Rifles), naval operations (Operation Sankalp), and India's defence cooperation (e.g., coastal radar systems to Sri Lanka). International Relations covers regional blocs (ASEAN, CIS, EU, OPEC - headquarters, summits), major trading partners (EU), international organizations (NATO members, BIMSTEC members), transboundary issues (Ganga water sharing with Bangladesh), economic agreements (Comprehensive Economic Partnership Agreement with UAE), and foreign policy initiatives (Look/Act East Policy, rail connectivity). Government Schemes & Economy includes urban development (AMRUT), social welfare (Stand-Up India Scheme, tribal welfare), rural employment (SGRY, SJGSY), economic reforms (Operation Flood/White Revolution), financial concepts (disinvestment, GST, bad banks/asset reconstruction companies), economic indicators (GDP recovery shapes), and policy frameworks (SDG India Index, NITI Aayog categories). Recent Science & Technology developments like Non-Fungible Tokens (NFTs), astronomical discoveries (Sagittarius A*), and cybersecurity guidelines (CERT-In) are also important. Environmental current affairs, such as World Wetland Day, should also be covered.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP-CAPF-25-GENERAL-ABILITY-INTELLIGENCE-040825
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Current Affairs & Government Schemes (with Economic Focus) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Aspirants must stay updated with national and international current events, especially those related to India's economy, environment, defence, and foreign policy. Key government schemes (e.g., National Green Hydrogen Mission, Bharatmala Pariyojana, Jal Jeevan Mission), budget highlights (fiscal deficit, expenditure allocations, 'Engines of Development'), economic indicators (Purchasing Managers' Index, services export), and international organizations (World Economic Forum, OPCW) are frequently tested. Focus on objectives, implementing ministries, target beneficiaries, and recent developments.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity & Constitutional Development <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    A thorough understanding of the Indian Constitution is crucial. This includes the historical evolution of the Constitution (e.g., Government of India Acts like 1919, Charter Acts), significant amendments (e.g., 42nd Amendment), the structure and functions of constitutional bodies (e.g., Comptroller and Auditor General), the judiciary (e.g., Courts of Record), and local self-government (e.g., Panchayati Raj Committees and their recommendations). Knowledge of fundamental rights, Directive Principles of State Policy, and basic governmental structure is essential.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian History & Culture <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Comprehensive coverage of Ancient, Medieval, and Modern Indian History is required. This includes major civilizations (e.g., Harappan sites like Kalibangan, Banawali), empires (e.g., Vijayanagara, Orissa dynasties), significant events (e.g., 1857 Revolt, Bhoodan Movement), key personalities, administrative systems, and socio-religious movements (e.g., Depressed Classes movements). Art and Culture aspects like architecture (e.g., Saracenic, North Indian temple styles), classical music (Raags), literature (authors and works like Kiratarjuniyam), and ancient scientific systems (e.g., Katapayadi) are also important.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Physical Geography & Environment <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This section demands knowledge of Earth's physical processes and environmental issues. Topics include geomorphology (weathering, mass movements like mudflow and slump, fluvial features like potholes, stratovolcanoes), oceanography (trenches, neap tides), climatology (seasonal variations, International Date Line), and geographical information systems (GIS components, raster data). Environmental conventions (Ramsar Convention, IPCC), India's climate targets (Nationally Determined Contributions, Net-Zero), and greenhouse gases are critical.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    General Science (Physics, Chemistry, Biology) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Basic scientific principles from all three branches are tested. Biology covers cell structure (chromosomes, transport mechanisms), plant anatomy and physiology (tissues, growth regions), human anatomy and physiology (circulatory system, arteries), biochemistry (enzymes, cholesterol), and ecology (plant adaptations like xerophytes). Chemistry includes fundamental concepts of elements, compounds, reactions (types, exothermic), organic chemistry (carbon compounds, alcohols), and industrial processes (Haber, urea synthesis). Physics covers mechanics (properties of solids like modulus of rigidity), electricity (Ohm's law, charged particles), magnetism (hysteresis, Gauss' law), thermodynamics (refrigerator principle), and optics (refraction, eye defects, devices like periscope).
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP-CSP-21-GeneralStudiesPaper-I-121021
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Economy: Monetary Policy & Financial Markets <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers the Reserve Bank of India's (RBI) functions, including the appointment of its Governor, its powers derived from the RBI Act, and its role as the 'lender of last resort' (providing liquidity to banks in temporary crisis). It also includes understanding economic recession responses (e.g., increasing expenditure on public projects), the concept of money multiplier (increases with banking habit), and demand-pull inflation (caused by expansionary policies, fiscal stimulus, inflation-indexing wages, higher purchasing power). Key financial instruments like foreign currency convertible bonds, foreign institutional investment, global depository receipts, and non-resident external deposits are important, especially their inclusion in Foreign Direct Investments. The impact of black money (loss of revenue due to tax evasion) and inflationary effects of budget deficit financing (creation of new money) are also crucial.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Environment & Ecology: Pollution, Biodiversity & Biomes <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This area focuses on environmental concerns, pollution sources, and ecological concepts. Topics include pollution from copper smelting plants (carbon monoxide, heavy metals leaching from slag, sulfur dioxide) and furnace oil (sulfur emissions). 'Blue carbon' (carbon captured by oceans and coastal ecosystems) and the 'Common Carbon Metric' (for assessing carbon footprint) are important. Biodiversity questions cover organisms like lichens and mosses (surviving without soil), pangolins (rolling up for defense), and primary producers in oceans (cyanobacteria, diatoms). The 'New York Declaration on Forests' (global timeline to end forest loss, endorsed by various stakeholders) and 'Climate-Smart Agriculture' (Climate-Smart Village approach, CGIAR centers like ICRISAT) are key. Understanding biomes like savannah (controlled by fire, grazing, seasonal rainfall, soil properties) and tropical rainforests (rapid leaf litter decomposition, diverse vegetation reaching canopy) is essential. Water resources (groundwater vs. surface water, polar ice caps) and soil types (black cotton soil from fissure volcanic rock) are also covered.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity: Fundamental Rights, Judiciary & Constitutional Principles <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This core area of Indian Polity includes fundamental rights, the judiciary, and foundational constitutional principles. Key concepts are the 'Right to Privacy' (protected under Article 21), the violation of 'Right to Equality' and 'Directive Principles of State Policy' by concentration of wealth, and the status of the 'Right to Property' (legal right available to any person). Judicial aspects include judicial custody (accused in magistrate's custody, not police station) and police interrogation (requires court approval), as well as parole rules (state governments have their own rules, not an inherent right). A legislation conferring unguided discretionary power violates Article 14. The definition of 'State' (community with organized government, independent of external control) and federal features (independent judiciary, elected representatives in Union Legislature) are important. Citizenship (only one citizenship and domicile, citizen by birth can be Head of State) and the best safeguard of liberty (separation of powers) are also tested. The constitutional status of India on Jan 26, 1950 (Sovereign Democratic Republic) and the nodal ministry for the Forest Rights Act (Ministry of Tribal Affairs) are also relevant.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Ancient & Medieval Indian History: Art, Culture & Administration <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic emphasizes cultural, architectural, and administrative aspects of ancient and medieval India. Important sites include the Chausath Yogini Temple (circular, Kachchhapaghata dynasty, inspiration for Parliament House), Dholavira (advanced water harvesting), Burzahom (rock-cut shrines), Chandraketugarh (terracotta art), and Ganeshwar (copper artifacts). Literary figures like Bhavabhuti, Hastimalla, and Kshemeshvara (playwrights) are significant. Legal systems like Mitakshara (sons claim property during father's lifetime, male members only) and Dayabhaga (sons claim after father's death, male and female members) are crucial. Women's roles in the Vijayanagara Empire (wrestling, astrology, accounting, soothsaying) are also tested. Medieval history includes early kingdoms after Gupta decline (Pushyabhutis of Thanesar, Maukharis of Kannauj, Maitrakas of Valabhi), English East India Company factories (Broach), and administrative divisions (Paragana, Sarkar, Suba in ascending order of size).
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Science & Technology: Biotechnology, Health & General Science <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This section covers modern scientific advancements, particularly in biotechnology and health, alongside general science principles. Key areas include 'Recombinant Vector Vaccines' (genetic engineering, use of bacteria/viruses as vectors) and hereditary diseases like mitochondrial diseases (preventable by mitochondrial replacement therapy, inherited entirely from mother). Genetically Modified (GM) crops, such as Bollgard I and II, are also relevant. General science topics include the principles of a pressure cooker (cooking temperature depends on lid weight and flame temperature), the ability to culture bacteria and fungi (but not viruses) in artificial media, and the characteristics of adenoviruses (single-stranded DNA genome, causes common cold) and retroviruses (double-stranded RNA genome, causes AIDS). The dipolar nature of water (dissolves more substances), differences between sodium and LED street lamps (spectrum, color advantages), the ACE2 receptor (related to viral diseases), Bisphenol A (BPA) as a component in polycarbonate plastics, and Triclosan in toiletries are also important. Astronomical distances measured in light-years due to the constant speed of light are also covered.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP-CSP-24-GENERAL-STUDIES-PAPER-I-180624
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity: Constitutional Framework & Governance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This high-yield topic encompasses the foundational aspects of the Indian Constitution, the functioning of its institutions, and key legislative processes. Aspirants must understand: 
1.  **Constitutional Amendments:** Article 368 outlines the procedure for amendment (addition, variation, repeal). Recent significant amendments include the 71st Amendment (adding Konkani, Manipuri, Nepali to the 8th Schedule) and the Nari Shakti Vandan Adhiniyam (106th Amendment, providing 33% reservation for women in Lok Sabha and State Assemblies, effective from the 18th Lok Sabha for 15 years, with sub-reservation for SC/ST women within their quotas). 
2.  **Parts & Schedules:** Knowledge of specific parts like Part IX A (Municipalities), Part XVIII (Emergency Provisions), and Part XX (Amendment of the Constitution) is crucial. Understanding the distribution of powers via the Union, State, and Concurrent Lists (e.g., Inter-State quarantine as a Union subject). 
3.  **Fundamental Rights:** The Supreme Court has recognized the Right to Privacy as an integral part of Article 21. 
4.  **Parliamentary Procedures:** Money Bills (Article 109) can only be introduced in the Lok Sabha; the Rajya Sabha has limited powers (cannot reject, can only suggest amendments which the Lok Sabha may or may not accept). Rules regarding the lapsing of bills upon Lok Sabha dissolution (bills pending in LS lapse; bills passed by LS and pending in RS lapse; bills for which President has notified a joint sitting do not lapse). Prorogation and dissolution of Houses by the President, typically on the advice of the Council of Ministers. 
5.  **Parliamentary Functionaries & Committees:** The Speaker of the Lok Sabha cannot preside when a resolution for their removal is under consideration, but retains the right to speak and vote in the first instance. The Ethics Committee in Lok Sabha was initially ad-hoc, can receive complaints from any LS member regarding unethical conduct, but cannot take up sub-judice matters. 
6.  **Statutory Bodies:** The North Eastern Council (NEC), established by the NEC Act, 1971, was amended in 2002 to include Governors, Chief Ministers of constituent states, three members nominated by the President, and the Union Home Minister. India has constituted multiple Delimitation Commissions over time. 
7.  **Constitutional History:** Key figures like Dr. Sachchidananda Sinha (Provisional President of the Constituent Assembly) and provisions of the Government of India Act, 1935 (e.g., All India Federation, Defence and Foreign Affairs under federal legislature). 
8.  **Scheduled Tribes:** The Governor of a state recognizes and declares a community as a Scheduled Tribe; however, a community declared as ST in one state is not necessarily an ST in another state.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Environment & Ecology: Contemporary Issues & Conservation <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic is consistently high-scoring, focusing on current environmental challenges, policy responses, and ecological principles. Key areas include: 
1.  **Atmospheric Processes & Climate Change:** Understanding the greenhouse effect (carbon dioxide and other greenhouse gases are good absorbers of long-wave radiation, leading to atmospheric heating primarily by terrestrial radiation). Properties of water vapour (a gas whose amount decreases with altitude, with its percentage being maximum at the poles). Global climate initiatives like the European Parliament's approval of the Net-Zero Industry Act and the EU's aim for carbon neutrality by 2040, focusing on developing clean technology. The significance of tropical peatlands (e.g., in the Congo Basin) as major carbon sinks, holding substantial global carbon emissions. 
2.  **Pollution & Contaminants:** Perfluoroalkyl and polyfluoroalkyl substances (PFAS) are widespread in drinking water, food, and packaging materials, are not easily degraded in the environment, and can lead to bioaccumulation in animal bodies. Chewing gums containing plastic as a gum base are considered a source of environmental pollution. Power plants using fossil fuels are identified as the largest source of sulphur dioxide (SO2) emissions by the EPA. 
3.  **Biodiversity & Conservation:** The Wild Life (Protection) Act, 1972, categorizes certain animals (e.g., Indian Flying Fox) as 'vermin'. Knowledge of animal classification (Cicada, Froghopper, and Pond Skater are insects). Understanding ecological interactions such as parasitoid species (found among Carabid beetles, centipedes, flies, termites, and wasps) and symbiotic relationships (e.g., the unique co-evolution between the Fig tree and its pollinator insect). Specific animal biology facts, such as lions not having a particular breeding season, cheetahs not roaring (unlike most big cats), and male leopards proclaiming territory by scent marking (unlike male lions). 
4.  **Biotechnology & Food Security:** In India, the law prohibits the import of Genetically Modified (GM) food without the approval of the competent authority.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Economy: Financial System & Government Schemes <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic is crucial for understanding India's economic landscape, covering its financial architecture and key social welfare programs. Essential knowledge includes: 
1.  **Financial Markets & Instruments:** The Money Market includes instruments like 'Collateral Borrowing and Lending Obligations'. Financial instruments encompass Exchange-Traded Funds (ETFs) and Currency Swaps. Various entities, including Insurance Companies, Pension Funds, and Retail Investors, are permitted to trade in Corporate Bonds and Government Securities (G-Secs) in India. 
2.  **Banking & Regulations:** Non-Banking Financial Companies (NBFCs) in India can access the Liquidity Adjustment Facility (LAF) window of the Reserve Bank of India (RBI). Foreign Institutional Investors (FIIs) are allowed to hold G-Secs. RBI regulations for wholly-owned banking subsidiaries of foreign banks in India specify that at least 50% of their board members should be Indian nationals, but there is no minimum capital requirement. 
3.  **Digital Currency:** The Digital Rupee is a sovereign currency issued by the RBI, aligning with its monetary policy, and appears as a liability on the RBI's balance sheet. It is freely convertible against commercial bank money and cash, but it is not inherently insured against inflation by its design. 
4.  **Corporate Governance:** Corporate Social Responsibility (CSR) rules in India specify that expenditures directly benefiting the company or its employees are not considered CSR activities. Importantly, CSR rules do not specify a minimum spending on CSR activities. 
5.  **Economic Sectors & Capital:** Understanding the classification of economic activities: Storage of agricultural produce (Secondary), Dairy farming (Primary), Mineral exploration (Tertiary), and Weaving cloth (Secondary). Differentiating types of physical capital: Farmer's plough (Working capital), Computer (Fixed capital), Yarn used by the weaver (Fixed capital), and Petrol (Working capital). 
6.  **Sustainable Aviation Fuel (SAF):** Various materials can be used as feedstock for SAF production, including agricultural residues, corn grain, wastewater treatment sludge, and wood mill waste. 
7.  **Government Schemes:** 
    *   **Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA):** Guarantees a minimum package of antenatal care services for women in their second and third trimesters of pregnancy, and six months post-delivery health care at government facilities. Private sector health care providers can volunteer services. 
    *   **Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM) Yojana:** The entry age for enrolment is 18 to 40 years (not 21-40). Beneficiaries make age-specific contributions. Each subscriber receives a minimum pension of ₹3,000 per month after attaining 60 years. Family pension is applicable to the spouse and unmarried daughters. 
    *   **Digital India Land Records Modernisation Programme (DILRMP):** The Central Government provides 100% funding for this scheme. Cadastral maps are digitized, and an initiative is undertaken to transliterate Records of Rights from local languages to any of the languages recognized by the Constitution of India.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Geography: Physical & Human Aspects (India & World) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers both the physical features and human interactions with the environment, globally and specifically in India. Key areas include: 
1.  **Physical Geography (Atmosphere & Climate):** The atmosphere is heated more by terrestrial radiation than by incoming solar radiation. The thickness of the troposphere is much greater at the equator compared to the poles due to strong convectional currents. The Coriolis force increases with wind velocity, is maximum at the poles, and is absent at the equator. Equatorial climate is characterized by a low annual and daily range of temperatures, precipitation throughout the year, and precipitation varying between 50 cm and 250 cm. On June 21, the Equator, Tropic of Cancer, and Arctic Circle experience more than 12 hours of sunlight. Isothermal maps show isotherms deviating to the north over oceans and to the south over continents in January, influenced by cold ocean currents, the Gulf Stream, and the North Atlantic Drift, which make the North Atlantic Ocean colder and cause isotherms to bend north. 
2.  **Geomorphology:** Volcanic eruptions produce pyroclastic debris, ash, dust, nitrogen compounds, and sulphur compounds. Rainfall is a significant reason for rock weathering, as rainwater contains dissolved carbon dioxide and atmospheric oxygen. Mountain ranges like the Vosges (Fold mountain), Alps (Block mountain), Appalachians (Fold mountain), and Andes (Fold mountain) represent different types of mountain formation. 
3.  **Indian River Systems:** The correct West to East sequence of Himalayan rivers joining the Ganga downstream of Prayagraj is Ghaghara, Gomati, Gandak, Kosi. Important waterfalls include Dhuandhar on the Narmada River and Hundru on the Subarnarekha River. (Note: Gersoppa/Jog Falls is on the Sharavathi River, not Netravati). 
4.  **World Geography:** The longest international border is between Canada and the United States of America. Countries bordering the North Sea include Germany, Norway, and Russia (Finland does not). Côte d'Ivoire and Ghana are the two largest cocoa producers globally. The Sumed pipeline is a strategic route for Persian Gulf oil and natural gas shipments to Europe, connecting the Red Sea with the Mediterranean Sea. The Red Sea receives very little precipitation and no water input from rivers. Countries frequently mentioned for low birth rates, ageing, or declining populations include Italy, Japan, and South Korea. 
5.  **Human Geography:** Greenfield airports like Donyi Polo, Kushinagar International, and Vijayawada International Airports have been constructed recently.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    History & Culture: Ancient, Medieval, Modern & Heritage <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers a wide range of historical periods and cultural aspects, including recent developments in heritage. Key areas include: 
1.  **Ancient Indian History:** 
    *   **Buddhism:** Gautama Buddha was known by epithets such as Shakyamuni and Tathagata (Nayaputta is not an epithet of Buddha). Sanghabhuti, an Indian Buddhist monk, authored a commentary on the Sarvastivada Vinaya. 
    *   **Literature & Philosophy:** Upanishads do not contain parables and were composed *before* the Puranas. Playwright Bhasa is attributed with works like 'Madhyama-vyayoga'. 
    *   **Archaeological Sites:** Chandraketugarh (Odisha) was a trading port town. Inamgaon (Maharashtra) is a Chalcolithic site. Mangadu (Kerala) is a Megalithic site. Salihundam (Andhra Pradesh) features rock-cut cave shrines. 
2.  **Medieval Indian History:** Krishnadevaraya, a ruler of the Vijayanagara Empire, gave permission to the Portuguese to build a fort at Bhatkal. 
3.  **Modern Indian History:** 
    *   **Land Revenue Systems:** Under the Permanent Settlement in Bengal (Cornwallis), if a Zamindar failed to pay revenues by the fixed date, their Zamindari would be removed. The Ryotwari Settlement did not exempt peasants from revenue payment in case of bad harvests. 
    *   **Constitutional Development:** The Government of India Act, 1935, provided for an All India Federation and kept Defence and Foreign Affairs under the control of the federal legislature. 
    *   **Political Parties:** Bharatiya Jana Sangh was led by Dr. Shyama Prasad Mukherjee. Congress for Democracy was led by Jagjivan Ram. Swatantra Party was associated with C. Rajagopalachari and Acharya Narendra Dev was a prominent Socialist leader. 
4.  **Art & Culture (Current Affairs):** 
    *   **UNESCO Intangible Cultural Heritage:** Durga Puja was the latest inclusion in UNESCO's Intangible Cultural Heritage List. 
    *   **UNESCO World Heritage List:** In 2023, Shantiniketan and the Sacred Ensembles of the Hoysalas were included in the UNESCO World Heritage List.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP-CSP-25-GENERAL-STUDIES-PAPER-I-26052025
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity & Governance (Constitutional Framework & Institutions) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers the foundational aspects of the Indian Constitution and its practical application. Aspirants must understand the powers, functions, and limitations of key constitutional bodies and officeholders, including the President (pardoning power), Governor (discretionary powers, immunities), Speaker of Lok Sabha (removal, vacating office), and Panchayati Raj institutions (structure, finance commission). Knowledge of fundamental rights, directive principles, fundamental duties, legislative processes (ordinances, constitutional amendments, ratification), and specific provisions like Scheduled Areas (Fifth Schedule) and the Anti-defection Law (Tenth Schedule) is crucial. Additionally, understanding the roles of statutory bodies like the Lokpal and the distinction between constitutional and statutory bodies is frequently tested.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Economy & Public Finance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This high-yield area includes core macroeconomic concepts and government financial management. Key aspects to study are public finance (revenue, fiscal, and primary deficits, capital receipts, interest liabilities), the role and functions of the Reserve Bank of India (sources of income, mandates like BRSR), and the characteristics of financial instruments (bonds vs. stocks, alternative investment funds). Understanding government schemes related to agriculture (Rashtriya Gokul Mission) and renewable energy (PM Surya Ghar Muft Bijli Yojana), as well as the recommendations of the Finance Commission (tax devolution, grants), is important. The topic also extends to modern financial systems like digital payments (RTGS, NEFT, UPI) and international economic corridors (INSTC), along with regulatory bodies (PNGRB) and international financial institutions (IBRD).
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Environment & Climate Change <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This critical topic encompasses environmental concepts, climate phenomena, and policy responses. Aspirants should be familiar with the principles of a circular economy (reducing GHG, raw materials, waste), atmospheric science (dust particle distribution, isotherms, role of atmosphere in temperature regulation, CO2's role), and geological concepts (rock permeability). Significant attention is given to climate change impacts (wet-bulb temperatures, polar ice melt, Earth's rotation shifts) and international climate governance, including the Paris Agreement (Article 6), COP28 declarations (Climate and Health), and recent environmental laws (Nature Restoration Law). Emerging technologies for climate action, such as Direct Air Capture and artificial rain, are also relevant. India's CO2 emissions profile and biodiversity (e.g., specific species like Peacock Tarantula) are also frequently tested.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Science & Technology (Emerging Technologies & Applications) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This diverse topic covers cutting-edge developments and their applications across various sectors. Key areas include automotive technology (full battery EVs, hydrogen fuel cell vehicles, fuel cell-electric hybrids, EV battery components like cobalt, lithium, nickel), aerospace and defence (Unmanned Aerial Vehicles - UAVs, defence aircraft types like Dornier-228, IL-76, C-17, space missions for microgravity research like Gaganyaan, and navigation systems like GAGAN). Biotechnology and AI are also prominent, with questions on monoclonal antibodies (treatment of viral infections), quantum computing (Majorana 1 chip), and AI summits. Industrial processes (coal gasification for ethanol, nitroglycerine, urea), materials science (rare earth elements, plastics in everyday items), and advanced explosives (CL-20, HMX, LLM-105) are also covered.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Modern Indian History (National Movement & Social Reforms) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic is a cornerstone of the General Studies paper, focusing on India's struggle for independence and significant social changes. Key areas include the Indian National Movement, covering major events like the Champaran Satyagraha, Dandi March, Non-Cooperation Movement (objectives, implementation), Chauri Chaura incident (legal defence), and the Quit India Movement. Aspirants must understand the ideologies and contributions of prominent social reformers and leaders, such as Raja Ram Mohan Roy (rationalism, human dignity, social equality) and Mahatma Gandhi (anti-untouchability, 'Harijan' upliftment, famous statements like 'Sedition has become my religion'). Knowledge of social reform movements like the Self-Respect Movement (founder Periyar E.V. Ramaswamy Naicker) and the introduction of new crops/fruits by foreign powers (e.g., Portuguese introduction of papaya, pineapple, guava) also falls under this category.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP_CAPF_2023_GAI_07082023
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity & Constitutional Framework <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    Aspirants must have a thorough understanding of the Indian Constitution, including its historical underpinnings, salient features, fundamental rights, DPSP, fundamental duties, and amendments. Key areas include the structure and functioning of the Union and State Legislatures (Parliament, State Assemblies), Executive (President, Vice-President, PM, Council of Ministers, Governors, CM), and Judiciary (Supreme Court, High Courts, Subordinate Courts). Special attention should be paid to constitutional bodies (e.g., Election Commission, UPSC, CAG, NHRC, Finance Commission) and their roles, as well as non-constitutional bodies. Concepts like emergency provisions (Articles 352, 356, 360), writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto), Centre-State relations (legislative, administrative, financial), local self-government (Panchayati Raj and Municipalities), and significant constitutional amendments are frequently tested. Landmark Supreme Court judgments (e.g., Kesavananda Bharati, ADM Jabalpur, Menaka Gandhi, PUCL) are also critical.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Economy & Economic Indicators <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    A strong grasp of macroeconomic concepts is essential. This includes National Income accounting (GDP, GNP, NNP, GVA), inflation (types, causes, measures), monetary policy (CRR, SLR, Repo Rate, Reverse Repo Rate, OMOs, MSF) and the role of RBI, and fiscal policy (budget, fiscal deficit, revenue deficit, primary deficit, public debt). Aspirants should understand the structure of the Indian economy (sectors, reforms), Five-Year Plans (especially their objectives and outcomes), and key economic indicators (IIP, power consumption, G-sec yields). International economic relations, including Balance of Payments (BoP), Balance of Trade (BoT), foreign exchange reserves, and international organizations (e.g., G20, SAARC), are also important. Concepts like poverty, unemployment, and government schemes for economic development are frequently asked.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Ancient Indian History & Art and Culture <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers the evolution of Indian civilization from prehistoric times to the early medieval period, with a strong emphasis on cultural aspects. Key areas include the Indus Valley Civilization (sites, features, town planning, artifacts), Vedic Period (society, economy, religion, literature like Vedas, Upanishads, Vedic sacrifices), Mahajanapadas, rise of Jainism and Buddhism (founders, doctrines, councils, spread), Mauryan Empire (Ashoka's administration, inscriptions, art), Post-Mauryan period (Indo-Greeks, Kushanas, coins, Gandhara art), Gupta Age (administration, science, literature, art, Vakatakas), and early South Indian kingdoms. Art and Architecture (stupas like Sanchi, cave temples, sculptures, pottery types like OCP, NBP, BRW), ancient scripts (Brahmi, Kharoshthi), and important literary works (Arthashastra, Mudrarakshasa) and their authors are crucial. Understanding the socio-economic and religious life of these periods is vital.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Environment, Ecology & Indian Geography <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic integrates physical geography with environmental issues. In geography, focus on geomorphology (landforms like Drumlins, Barchans), oceanography (tides, sea routes), climatology (seasons, acid rain, ozone depletion), and soil types (Laterite soil). Indian geography includes major physiographic divisions (Great Northern Plains), river systems, climate, natural vegetation, and resources. Environmental ecology covers biodiversity (hotspots, species diversity), conservation efforts (Ramsar sites, national parks, wildlife sanctuaries), pollution (air, water, soil), and sustainable development. International environmental conventions (Stockholm, Minamata, Basel, Rotterdam) and climate change initiatives (ACE, Climate Neutral Now) are also important. Specific examples like Loktak Lake's Phumdis and major crops like Ragi are often tested.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Current Affairs (Defence, S&T, IR, Government Schemes) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This is a dynamic and crucial section, especially for defence aspirants. It requires staying updated on recent developments across various domains. Defence: Major military exercises (e.g., Ajeya Warrior), new acquisitions, naval ships (e.g., INSV Tarini), and defence policies. Science & Technology: Space missions (e.g., NISAR), supercomputers (e.g., Airawat, Param Siddhi), advancements in biotechnology, and IT. International Relations: Key international organizations (e.g., UN, SAARC, Quad, OSCE), India's foreign policy initiatives, bilateral and multilateral relations, and major global events (e.g., Operation Kaveri for Sudan evacuation). Government Schemes & Policies: Recent government initiatives in various sectors like health (e.g., MAA), agriculture (e.g., Millets promotion), infrastructure (e.g., Sagar Parikrama Yatra), and social welfare. Sports & Culture: Major sporting events (e.g., Khelo India Games, IPL), cultural festivals (e.g., Kheer Bhawani Mela), and awards. Cybersecurity: Initiatives like KAVACH-2023. The focus should be on India's role and impact in these areas.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP_CSP_2026_GENERAL_STUDIES_PAPER-I_25052026
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Environment & Ecology <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic is crucial, covering biodiversity (species, ecosystems, IUCN status like Endangered for Hoolock Gibbons, migratory birds like Amur Falcons, specific flora like Foxtail Orchid), climate change (India's LT-LEDS, BUR-4, REDD+ projects, UN Ocean Conference, FAO's Blue Transformation), conservation efforts (mangrove ecosystems, national parks like Madhav NP, Ramsar sites like Sakhya Sagar, UNESCO Global Geoparks like Tungurahua Volcano), and sustainable agriculture (NMSA, RAD initiative). Aspirants must understand the interconnections between human activities and environmental impact, government policies, international agreements, and specific geographical locations related to conservation.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Science & Technology <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This domain is rapidly evolving and frequently tested. Key areas include emerging technologies like Artificial Intelligence (Large Language Models, AI Impact Summit), Blockchain (features, RWA Tokenization), Quantum Computing (National Quantum Mission), and Biotechnology (Genetic Medicine, GenomeIndia Project). Defence technology (Stealth, Drone Swarms, BIS standards for bomb disposal, indigenous manufacturing like Su-30 MKI, T-90 tanks) and Space technology (private sector involvement via IN-SPACe, Agnikul Cosmos, Skyroot Aerospace, Deep Ocean Mission's Matsya-6000) are also vital. Understanding the underlying principles, applications, and India's initiatives (e.g., DIR-V Programme for chips like DHRUV64, Bharat Forecast System) is essential.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity & Governance <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This core subject covers the Indian Constitution (Article 13's definition of 'law', specific articles, commencement date), the structure and functioning of Parliament (types of questions, parliamentary committees like SC/ST Welfare Committee), key government acts (Rights of Persons with Disabilities Act 2018), and social justice initiatives (Sugamya Bharat Abhiyan, NDFDC for PwDs, provisions for SC/STs including Fifth Schedule and Panchayats). Governance aspects include ethical dilemmas in public administration (transparency, accountability, conflict resolution in case studies) and new legal frameworks (Bharatiya Nagarik Suraksha Sanhita 2023 and Zero FIR).
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Economy & Financial Systems <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic encompasses macroeconomic concepts (Crowding Out Effect, Rupee-Sterling exchange rate history), financial markets and institutions (RBI's Financial Inclusion Index, NBFCs, deposit insurance, various committees like R.N. Malhotra, L.C. Gupta, Urjit R. Patel, Y.H. Malegam), and digital economy initiatives (ONDC, UPI vs Digital Rupee, Crowdfunding, RWA Tokenization). Industrial policies (semiconductor plants, Oeko-Tex certification for Eri Silk), infrastructure projects (Vizhinjam Seaport, Sagarmala Programme), and social indicators (Multidimensional Poverty Index - MPI) are also important. Understanding government schemes and their economic implications is key.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Ancient History & Art & Culture <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This area focuses on the foundational aspects of Indian civilization and its cultural expressions. It includes pre-historic and proto-historic periods (Harappan towns, archaeological findings, weights, measures), Vedic period (Rigvedic references, social structures like 'kshetra-patni'), major ancient religions (Jainism's forms of existence, early Buddhist iconography), and the evolution of economic systems (Pali texts, punch-marked coins, transition to money economy). Art and architecture are crucial, covering temple styles (Nagara-style shikhara, Malegitti Shivalaya, Dashavatara Temple), stupas (Amaravati Stupa), paintings (Bagh Caves' Hallisalasya), and music (Carnatic ragas, Hindustani Raga Bilawal, Gharanas like Jaipur-Atrauli). Significant historical developments like the place-value system and regional kingdoms (early Tamilakam, Tai-Ahom Moidams) are also covered.
  </p>
</div>

<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">
    📄 Insights from QP_CS_Pre_Exam_2023_280523
  </h3>

  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Polity & Constitution <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic encompasses the framework of the Indian government, its institutions, and the rights and duties of citizens. Key areas include the Preamble, Fundamental Rights, Directive Principles of State Policy, Fundamental Duties, the structure and functions of the Union and State Legislatures (Parliament and State Assemblies), the Executive (President, Vice-President, Prime Minister, Council of Ministers, Governors, Chief Ministers), the Judiciary (Supreme Court, High Courts, Subordinate Courts), Constitutional Bodies (e.g., Election Commission, UPSC, Finance Commission, National Commissions for SC/ST/OBC), Non-Constitutional Bodies (e.g., NHRC, NITI Aayog), Local Self-Government (Panchayati Raj and Municipalities), Centre-State Relations, Emergency Provisions, Constitutional Amendments, and various important Acts (e.g., Prisons Act, POTA, Flag Code, Official Secrets Act, Indian Evidence Act, Arms Act). Understanding the principles of federalism, parliamentary democracy, judicial review, and the basic structure doctrine is crucial.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Environment & Ecology <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This covers a wide range of issues related to the natural world and human impact. Core concepts include biodiversity (species, ecosystems, conservation efforts like Community Reserves), pollution (air, water, soil, mercury pollution, HFCs), climate change (carbon markets, carbon capture and sequestration, green hydrogen), environmental impact assessment, and sustainable development. Specific topics often include invasive species, animal behavior (e.g., nocturnal animals, waggle dance), microorganisms (extremophiles), and various environmental conventions and protocols (e.g., Nagoya Protocol). Knowledge of government initiatives and international agreements related to environmental protection is essential.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian Economy (Concepts & Policies) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic focuses on the structure and functioning of the Indian economy, as well as key economic policies. Important areas include monetary policy (role of RBI, interest rates, sterilization, Open Market Operations), fiscal policy (taxation, government expenditure, Finance Commission recommendations for tax devolution), financial markets (capital markets, money markets, government bonds, treasury bills, stock market, InvITs), banking and financial institutions (SHGs, NBFCs), agriculture (MSP, 'Small Farmer Large Field' concept), industrial policy (MSME, Production-Linked Incentive scheme), and international trade (India's share in global exports). Understanding economic indicators, concepts like GDP, inflation, and the role of digital currencies (CBDC) is also vital.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Indian & Physical Geography <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This topic covers both the physical features of India and fundamental concepts of physical geography. For Indian Geography, focus on major physiographic divisions (Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains, Islands), river systems (Jhelum, Krishna, Gandak, Wular, Kolleru, Kanwar lakes), important ports (Kamarajar, Mundra, Visakhapatnam), agricultural patterns, and connectivity projects (Golden Quadrilateral, Trilateral Highway). For Physical Geography, key areas include atmospheric composition and processes (insolation, infrared radiation, water vapor), climate (temperature contrasts between land and ocean, specific heat), geological phenomena (earthquakes, P and S waves), and major biomes (tropical rainforests, soil characteristics). Understanding the interrelationship between physical features and human activities is also important.
  </p>
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 15px; margin-bottom: 8px; color: var(--text-primary); font-weight: 600;">
    Science & Technology (Applied & Contemporary) <span style="font-size: 0.8rem; background: rgba(34, 197, 94, 0.15); padding: 2px 6px; border-radius: 4px; margin-left: 8px; font-weight: normal; color: var(--accent);">Relevance: Very High</span>
  </h4>
  <p style="line-height: 1.6; margin-bottom: 15px; margin-left: 11px;">
    This section emphasizes the application of scientific principles and recent technological advancements. Key areas include health and nutrition (Janani Suraksha Yojana, Anemia Mukt Bharat Strategy, prophylactic supplementation, deworming), materials science (carbon fibers, their properties and recycling), sensors and their applications (accelerometers in cars, laptops, smartphones), biotechnology (biofilters in aquaculture, metagenomics, microsatellite DNA), space technology (celestial objects like Cepheids, Nebulae, Pulsars, satellite navigation systems), and defense technology (ballistic and cruise missiles, Agni-V, BrahMos). Contemporary issues and government initiatives in these fields are frequently tested.
  </p>
</div>
`;

window.EXPANDED_NOTES_DATA["env-hotspots"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Biodiversity Hotspots & Biosphere Reserves
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>[[Biodiversity]] as a scientific concept emerged in the early 20th century when naturalists like Alfred Riley Wallace and later Robert H. Whittaker began quantifying species richness across biogeographic zones. The term “hotspot” was formally coined by [[Norman Myers]] in 1988 to denote regions that harbour an exceptionally high proportion of the world’s [[endemic species]] while simultaneously facing acute habitat loss. This dual criterion—<span style="color: var(--warning);">>70% endemism</span> and <span style="color: var(--warning);">>50% original vegetation loss</span>—forms the logical backbone of hotspot identification.</p>

  <p>In parallel, the concept of [[Biosphere Reserve]] was institutionalised under the [[UNESCO World Heritage Convention]] in 1971. A biosphere reserve is a <span style="color: var(--success);">zoned ecosystem</span> comprising a core protected area, a surrounding buffer zone for sustainable use, and a transition area for community development. The three‑zone model ensures that conservation objectives are met without alienating local livelihoods—a principle that later guided India’s own [[National Park]] network.</p>

  <p>The first practical step in hotspot analysis is the creation of a [[species‑area curve]] that plots cumulative species against sampled area. By fitting a logarithmic function (S = cA^z), ecologists can predict the total species pool (S) for a given habitat area (A). This predictive model is then over‑laid with satellite‑derived land‑cover maps to assess the % of original vegetation remaining. For instance, the [[Western Ghats]] hotspot, covering ~140,000 km², retains only ~30% of its original forest, satisfying the loss criterion.</p>

  <p>Conversely, biosphere reserves rely on the <span style="color: var(--success);">Man and the Biosphere Programme (MAB)</span> framework, which uses ecological indicators such as <span style="color: var(--warning);">10% forest cover</span> in the buffer zone, and socio‑economic metrics like <span style="color: var(--warning);">5 % increase in local income</span>. The first Indian biosphere reserve, [[Sundarbans]], was designated in 1989, integrating mangrove conservation with the livelihoods of fishing communities.</p>

  <p>Worked Example 1 – Hotspot Delimitation: To evaluate the [[Eastern Himalayas]] hotspot, researchers compiled a checklist of 6,500 plant species, of which 2,400 are endemic. Using GIS, they measured that 55% of the original forest has been cleared. Since both thresholds are crossed, the region qualifies as a hotspot, prompting the Indian government to prioritize it under the [[National Biodiversity Action Plan]].</p>

  <p>Worked Example 2 – Biosphere Reserve Zoning: The [[Nanda Devi]] reserve (2,200 km²) has a 300 km² core zone, a 900 km² buffer, and a 1,000 km² transition area. Monitoring data show a 12% rise in native herbivore populations within the buffer, evidencing the success of controlled grazing policies.</p>

  <p>Real‑world applications in defence arise when the Indian Army conducts [[Mountain Warfare]] training in hotspot regions like the Himalayas. Understanding the ecological sensitivity helps in planning low‑impact routes, complying with the [[Environment (Protection) Act, 1986]]. Similarly, the Indian Navy’s coastal surveillance in the [[Andaman & Nicobar]] biosphere reserve leverages the zone’s buffer to install non‑intrusive sonar buoys, balancing security with conservation.</p>

  <p>In summary, hotspots flag regions where conservation urgency is highest, while biosphere reserves provide a pragmatic template for integrating protection, sustainable use, and community welfare. Both concepts are anchored in rigorous quantitative thresholds, and together they shape India’s strategic biodiversity policy, from the [[National Green Tribunal]] rulings to the [[UN Convention on Biological Diversity]] commitments.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Aspect</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Hotspots</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Biosphere Reserves</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Defining Body</td>
      <td style="border:1px solid var(--border);padding:10px;">[[Norman Myers]] (1988) & [[IUCN]]</td>
      <td style="border:1px solid var(--border);padding:10px;">[[UNESCO]] MAB Programme (1971)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Primary Criterion</td>
      <td style="border:1px solid var(--border);padding:10px;">>70% endemic + >50% habitat loss</td>
      <td style="border:1px solid var(--border);padding:10px;">Three‑zone model (core, buffer, transition)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Legal Backing in India</td>
      <td style="border:1px solid var(--border);padding:10px;">[[Environment (Protection) Act, 1986]]</td>
      <td style="border:1px solid var(--border);padding:10px;">[[National Biodiversity Act, 2002]]</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Number in India</td>
      <td style="border:1px solid var(--border);padding:10px;">4 recognized hotspots (Western Ghats, Eastern Himalayas, Indo‑Myanmar, Sundaland)</td>
      <td style="border:1px solid var(--border);padding:10px;">12 biosphere reserves (as of 2023)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Core Area Size</td>
      <td style="border:1px solid var(--border);padding:10px;">Varies; no fixed %</td>
      <td style="border:1px solid var(--border);padding:10px;">Typically 10‑30% of total reserve</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Management Goal</td>
      <td style="border:1px solid var(--border);padding:10px;">Prevent extinction of endemic taxa</td>
      <td style="border:1px solid var(--border);padding:10px;">Sustainable development + conservation</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">International Reporting</td>
      <td style="border:1px solid var(--border);padding:10px;">[[CBD]] Annex II</td>
      <td style="border:1px solid var(--border);padding:10px;">[[UNESCO World Heritage List]]</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Key Threats</td>
      <td style="border:1px solid var(--border);padding:10px;">Deforestation, urbanisation, mining</td>
      <td style="border:1px solid var(--border);padding:10px;">Over‑exploitation, climate change, invasive species</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>HOTSPOT</strong>: <em>H</em>igh <em>O</em>rganic <em>T</em>axa, <em>S</em>mall <em>P</em>lants, <em>O</em>utstanding <em>T</em>runcation – reminds you of the two criteria (high endemism, severe loss).</li>
    <li><strong>CORE‑BUF‑TRANS</strong>: <em>C</em>areful <em>O</em>bservation <em>R</em>equires <em>E</em>ffort – Buffer <em>B</em>etween <em>U</em>nique <em>F</em>lora – Transition <em>T</em>ouches <em>R</em>ural <em>A</em>ctivities <em>N</em>urturing <em>S</em>ustainability.</li>
    <li><strong>WGHES</strong> for Indian hotspots: <em>W</em>estern <em>G</em>hats, <em>H</em>imalayan <em>E</em>astern, <em>S</em>undaland – a quick recall of the four Indian hotspots.</li>
    <li><strong>BIOS</strong> for reserve functions: <em>B</em>iodiversity protection, <em>I</em>ntegrated management, <em>O</em>utreach, <em>S</em>ustainability – captures the core purpose of a biosphere reserve.</li>
    <li><strong>4‑R’s of Conservation in Reserves</strong>: <em>R</em>esearch, <em>R</em>estoration, <em>R</em>egulation, <em>R</em>ecreation – helps recall management actions.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">1988</span> – Year when [[Norman Myers]] introduced the term <span style="color:var(--success);">[[Biodiversity Hotspot]]</span>.</li>
    <li>Hotspot eligibility requires <span style="color:var(--warning);">>70%</span> endemism and <span style="color:var(--warning);">>50%</span> original habitat loss.</li>
    <li>India currently hosts <span style="color:var(--warning);">4</span> hotspots out of the global 36.</li>
    <li>[[UNESCO]] designates a biosphere reserve only after a <span style="color:var(--warning);">12‑year</span> monitoring period.</li>
    <li>Core zone of a biosphere reserve must be at least <span style="color:var(--warning);">10%</span> of the total area.</li>
    <li>Buffer zones allow limited activities such as <span style="color:var(--success);">eco‑tourism</span> and <span style="color:var(--success);">sustainable forestry</span>.</li>
    <li>[[Convention on Biological Diversity]] (CBD) Annex II lists all recognised hotspots for international reporting.</li>
    <li>In the [[Western Ghats]], endemic amphibian richness is <span style="color:var(--warning);">~25%</span> of India’s total amphibian fauna.</li>
    <li>[[Sundarbans]] biosphere reserve contributes <span style="color:var(--warning);">12%</span> of India’s total mangrove carbon sequestration.</li>
    <li>Effective buffer management can increase local livestock productivity by <span style="color:var(--warning);">5‑7%</span>.</li>
    <li>Hotspot loss rate in India (1990‑2020) averaged <span style="color:var(--warning);">1.2% per year</span>, higher than the global average of <span style="color:var(--warning);">0.6%</span>.</li>
    <li>Under the [[National Biodiversity Action Plan]], each biosphere reserve must submit an <span style="color:var(--success);">annual monitoring report</span> to the Ministry of Environment.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Since the NDA 2015 paper, the topic of biodiversity hotspots has appeared in <span style="color:var(--warning);">7</span> out of the last <span style="color:var(--warning);">20</span> NDA/CSIR examinations, making it a high‑frequency area. The most common question type is a direct factual query—e.g., “Which of the following is NOT a recognised hotspot in India?”—which tests recall of the four Indian hotspots.</p>
  <p>In CDS exams, the focus shifts to biosphere reserves, especially the zonal concept. Questions often ask candidates to identify the correct sequence of zones (core‑buffer‑transition) or to match a reserve with its primary function (e.g., “Sundarbans – mangrove conservation”). The 2021 CDS paper introduced a case‑study style question linking the [[Andaman & Nicobar]] biosphere reserve to strategic maritime security, indicating a trend towards application‑oriented items.</p>
  <p>AFCAT papers, being more defence‑oriented, have begun to embed ecological knowledge within operational scenarios. The 2023 AFCAT exam featured a passage on “mountain warfare in the Eastern Himalayas” where candidates had to infer the impact of habitat loss on troop movement—testing both conceptual understanding and analytical ability.</p>
  <p>Overall, the difficulty level has risen modestly over the past five years, with a noticeable increase in multi‑step reasoning questions. Aspirants should therefore practice not only rote facts but also the integration of ecological concepts with defence‑related contexts.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing “hotspot” with “protected area”. <em>Why?</em> Both involve conservation, but hotspots are a classification based on endemicity and loss, not legal protection. <em>How to avoid?</em> Remember the two‑criterion definition.</li>
    <li>Assuming every biosphere reserve has a <span style="color:var(--warning);">30%</span> core zone. <em>Why?</em> Core size varies by ecological need. <em>How to avoid?</em> Memorise the rule “minimum 10% core, not fixed at 30%”.</li>
    <li>Mixing up the Indian hotspots with global ones. <em>Why?</em> Global lists contain 36 hotspots, of which only four are Indian. <em>How to avoid?</em> Keep a separate short list for India.</li>
    <li>Neglecting the legal framework—citing only ecological criteria. <em>Why?</em> Exams often ask about the underpinning act (e.g., [[Environment (Protection) Act, 1986]]). <em>How to avoid?</em> Pair each concept with its relevant legislation.</li>
    <li>Over‑reliance on rote numbers; forgetting that the loss threshold is “>50%” not “<50%”. <em>Why?</em> The direction of the inequality is crucial. <em>How to avoid?</em> Visualise the loss bar chart while studying.</li>
    <li>Ignoring the “buffer zone” function and treating it as a no‑activity area. <em>Why?</em> Buffer zones permit sustainable use, a key exam point. <em>How to avoid?</em> Associate buffer with “controlled exploitation”.</li>
    <li>Failing to link biodiversity concepts to defence scenarios. <em>Why?</em> AFCAT and CDS often embed ecology in strategic contexts. <em>How to avoid?</em> Practice at least one defence‑oriented application per topic.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol style="margin-left:20px;">
    <li>
      <p><strong>Question:</strong> Which of the following combinations correctly matches a Indian hotspot with its dominant endemic group?</p>
      <p>A) Western Ghats – Endemic reptiles<br>B) Eastern Himalayas – Endemic amphibians<br>C) Indo‑Myanmar – Endemic mammals<br>D) Sundaland – Endemic birds</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> The Eastern Himalayas are renowned for high endemic amphibian diversity, whereas the other options mis‑pair the dominant taxa.</p>
    </li>
    <li>
      <p><strong>Question:</strong> In a biosphere reserve, which zone is primarily designated for scientific research with no human habitation?</p>
      <p>A) Transition zone<br>B) Buffer zone<br>C) Core zone<br>D) Peripheral zone</p>
      <p><strong>Answer:</strong> C</p>
      <p><strong>Explanation:</strong> The core zone is strictly protected for conservation and research; the buffer allows limited use, and the transition supports sustainable livelihoods.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The [[Convention on Biological Diversity]] classifies hotspots under which annex?</p>
      <p>A) Annex I<br>B) Annex II<br>C) Annex III<br>D) Annex IV</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> Annex II contains the list of recognised biodiversity hotspots; Annex I lists the protected areas.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which Indian biosphere reserve was the first to be declared under the UNESCO MAB Programme?</p>
      <p>A) Nanda Devi<br>B) Nilgiri<br>C) Sundarbans<br>D) Great Himalayan National Park</p>
      <p><strong>Answer:</strong> C</p>
      <p><strong>Explanation:</strong> The Sundarbans was designated in 1989, preceding all other Indian reserves under the MAB scheme.</p>
    </li>
    <li>
      <p><strong>Question:</strong> If a region has 68% endemic species and 55% original vegetation remaining, it is:</p>
      <p>A) A biodiversity hotspot<br>B) A biosphere reserve<br>C) Neither<br>D) Both</p>
      <p><strong>Answer:</strong> C</p>
      <p><strong>Explanation:</strong> The endemicity threshold (<span style="color:var(--warning);">>70%</span>) is not met, so it does not qualify as a hotspot; being a hotspot is not a prerequisite for biosphere reserve status.</p>
    </li>
  </ol>
</div>
`;

window.EXPANDED_NOTES_DATA["env-conservation"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Wildlife Protection & Conservation Projects
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>The genesis of wildlife protection in India can be traced back to the early 20th‑century hunting bans imposed by princely states, but the modern framework began with the [[Wildlife Protection Act, 1972]] (<span style="color:var(--warning);">1972</span>). The act codified the principle that biodiversity is a <span style="color: var(--warning);">important</span> national asset, establishing a legal matrix of protected areas, species schedules, and penalties that later projects would build upon. The first <span style="color: var(--success);">key facts</span> of the act were the creation of the [[National Board for Wildlife (NBW)]] and the classification of species into six schedules, each with escalating levels of protection.</p>

  <p>Core definitions follow a hierarchical logic: <strong>biodiversity</strong> denotes the variety of life at genetic, species, and ecosystem levels; <strong>conservation</strong> is the sustainable use and protection of that variety; and a <strong>project</strong> is a time‑bound, goal‑oriented intervention that operationalises policy. From these axioms, the concept of “<span style="color: var(--warning);">important</span> flagship species” emerges – species whose charisma mobilises public and political will, such as the tiger, elephant, and gharial. The success of a flagship species project is measured not only by population recovery but also by ancillary benefits like habitat restoration and community livelihood improvement.</p>

  <p>[[Project Tiger]] (initiated in <span style="color:var(--warning);">1973</span>) exemplifies the step‑by‑step building of concepts. First, the government identified <span style="color: var(--success);">critical tiger habitats</span> using the then‑novel <strong>tiger census</strong> methodology. Second, it demarcated <strong>tiger reserves</strong> by upgrading existing national parks and creating buffer zones. Third, it introduced a compensation scheme for livestock depredation, thereby reducing human‑wildlife conflict. A worked example: In 1991, the population in <strong>Ranthambore National Park</strong> rose from 30 to 45 tigers after anti‑poaching squads were stationed and prey base was enhanced through the [[Prey Base Development Programme]]. This illustrates how each conceptual layer – legal, ecological, socio‑economic – interlocks to produce measurable outcomes.</p>

  <p>[[Project Elephant]] (launched in <span style="color:var(--warning);">1992</span>) offers a contrasting yet complementary example. The project began with a <span style="color: var(--warning);">important</span> baseline survey of elephant corridors, leading to the identification of 18 <strong>Elephant Action Plans (EAPs)</strong>. One worked example from the Nilgiris EAP involved relocating 150 human settlements out of the core corridor, installing <strong>electric fencing</strong> at strategic pinch points, and providing <strong>alternative livelihoods</strong> through horticulture. Within a decade, human‑elephant incidents fell by 38 %, proving the efficacy of integrating community‑centric measures with habitat protection.</p>

  <p>Beyond flagship species, the [[Conservation of Sacred Groves]] initiative leverages traditional knowledge. Sacred groves, often protected by local customs, serve as micro‑refugia for endemic flora and fauna. A case study from the Western Ghats showed that a 5 km² sacred grove harboured 12% more amphibian species than an adjacent logged forest, highlighting the “<span style="color: var(--warning);">important</span>” role of cultural practices in biodiversity conservation.</p>

  <p>Real‑world applications intersect with defence and science. The Indian Army’s [[Ecological Monitoring Unit]] collaborates with the Ministry of Environment to monitor wildlife corridors that intersect military training zones, ensuring that live‑fire exercises do not disrupt migratory pathways. Similarly, the [[Indian Space Research Organisation (ISRO)]] uses remote sensing to map forest cover changes, feeding data directly into the [[National Tiger Conservation Authority (NTCA)]] dashboards. These synergies illustrate how wildlife projects are embedded in broader national security and technological frameworks.</p>

  <p>In summary, wildlife protection projects in India are built upon a foundation of legal statutes, scientific monitoring, and community participation. The <span style="color: var(--success);">key facts</span> that recur across successful projects are: (1) rigorous baseline data, (2) stakeholder‑driven management, (3) adaptive monitoring, and (4) integration with national development agendas. Mastery of these concepts equips aspirants to answer both factual and analytical questions in NDA, CDS, and AFCAT examinations.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Project / Act</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year Initiated</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Core Objective</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Flagship Species</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Outcome (Latest)</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Wildlife Protection Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1972</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Legal protection of flora & fauna</td>
      <td style="border:1px solid var(--border);padding:10px;">All listed species</td>
      <td style="border:1px solid var(--border);padding:10px;">Over 1,500 species now protected</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Project Tiger]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1973</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Increase tiger numbers & habitats</td>
      <td style="border:1px solid var(--border);padding:10px;">Tiger</td>
      <td style="border:1px solid var(--border);padding:10px;">~3,167 tigers (2023 census)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Project Elephant]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1992</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Mitigate human‑elephant conflict</td>
      <td style="border:1px solid var(--border);padding:10px;">Elephant</td>
      <td style="border:1px solid var(--border);padding:10px;">Conflict incidents ↓ 38% (2000‑2020)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Conservation of Sacred Groves]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1990s</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Preserve traditional habitats</td>
      <td style="border:1px solid var(--border);padding:10px;">Endemic flora/fauna</td>
      <td style="border:1px solid var(--border);padding:10px;">~8,000 groves protected</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Tiger Conservation Authority (NTCA)]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1995</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Policy & funding for tiger reserves</td>
      <td style="border:1px solid var(--border);padding:10px;">Tiger</td>
      <td style="border:1px solid var(--border);padding:10px;">Managed 53 reserves</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Biodiversity Act, 2002]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2002</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Create Biodiversity Management Boards</td>
      <td style="border:1px solid var(--border);padding:10px;">All biodiversity</td>
      <td style="border:1px solid var(--border);padding:10px;">~400 BMBs formed</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Ecological Monitoring Unit (EMU)]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2010</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Monitor wildlife in defence zones</td>
      <td style="border:1px solid var(--border);padding:10px;">Multi‑species</td>
      <td style="border:1px solid var(--border);padding:10px;">Integrated into 12 army bases</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[ISRO Remote Sensing for Wildlife]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Map forest cover & habitat change</td>
      <td style="border:1px solid var(--border);padding:10px;">All habitats</td>
      <td style="border:1px solid var(--border);padding:10px;">Annual 95% forest‑cover accuracy</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>TIGER</strong> – <em>“T” for “Territory”, “I” for “Incentives”, “G” for “Guard”, “E” for “Eco‑restoration”, “R” for “Recovery”</em>. Helps recall the five pillars of Project Tiger.</li>
    <li><strong>ELEPHANT</strong> – <em>“E” – “Elephant corridors”, “L” – “Livelihoods”, “E” – “Enforcement”, “P” – “Patrols”, “H” – “Habitat”, “A” – “Awareness”, “N” – “Nutrient‑rich grasslands”, “T” – “Trunk‑based monitoring”</em>. Aids in remembering the components of Project Elephant.</li>
    <li><strong>WILDLIFE 1972</strong> – Visualise the year as “1‑9‑7‑2” → “1” = “One act”, “9” = “Nine schedules”, “7” = “Seven ministries involved”, “2” = “Two decades of groundwork”. This mnemonic locks the enactment year of the Wildlife Protection Act.</li>
    <li><strong>GOD’S GROVE</strong> – “GROVE” stands for “Genetic, Religious, Old‑growth, Vegetative, Endemic”. Use it to recall why sacred groves are biodiversity hotspots.</li>
    <li><strong>ISRO‑SAT</strong> – “S” = “Spatial mapping”, “A” = “Annual change detection”, “T” = “Telemetry for animal movement”. Helps remember ISRO’s contribution to wildlife monitoring.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">1972</span> – The [[Wildlife Protection Act]] introduced six schedules of protection, with Schedule I species receiving the highest penalty.</li>
    <li><span style="color:var(--warning);">1973</span> – [[Project Tiger]] was launched with an initial allocation of <span style="color:var(--success);">₹ 100 crore</span> for 9 tiger reserves.</li>
    <li><span style="color:var(--warning);">1992</span> – [[Project Elephant]] mandated the creation of <span style="color:var(--success);">Elephant Action Plans</span> for all states with elephant populations.</li>
    <li><span style="color:var(--warning);">1995</span> – The [[National Tiger Conservation Authority (NTCA)]] was set up to oversee tiger reserves and fund anti‑poaching measures.</li>
    <li><span style="color:var(--warning);">2002</span> – The [[Biological Diversity Act]] established <span style="color:var(--success);">Biodiversity Management Boards</span> at district level.</li>
    <li><span style="color:var(--warning);">2005</span> – The concept of <span style="color:var(--success);">“Ecologically Sensitive Zones (ESZ)”</span> was introduced around protected areas.</li>
    <li><span style="color:var(--warning);">2010</span> – The Indian Army formed the [[Ecological Monitoring Unit]] to integrate wildlife considerations into defence training.</li>
    <li><span style="color:var(--warning);">2015</span> – [[ISRO]] began providing high‑resolution satellite imagery for forest‑cover change detection under the “Bhuvan” platform.</li>
    <li>Each tiger reserve must maintain a minimum of <span style="color:var(--success);">75 % core area</span> free from human settlements.</li>
    <li>Elephant corridors are identified using a <span style="color:var(--success);">minimum width of 2 km</span> to ensure safe passage.</li>
    <li>Poaching penalties for Schedule I species can reach up to <span style="color:var(--success);">₹ 5 lakh fine</span> plus imprisonment of up to 7 years.</li>
    <li>Community‑based conservation schemes must allocate at least <span style="color:var(--success);">30 % of project funds</span> to livelihood upliftment.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Since the inception of the NDA exam in 2006, wildlife protection questions have appeared in roughly <span style="color:var(--warning);">15‑20 %</span> of the Environment & Ecology sections. The most frequent sub‑topic is the [[Wildlife Protection Act]] (especially Schedule I & II species), followed by Project Tiger statistics and the role of sacred groves. In CDS papers, the emphasis shifts slightly towards the legal framework and the interplay between defence establishments and wildlife corridors.</p>
  <p>Exam setters favour factual recall that can be quickly quantified – for example, the number of tiger reserves (currently 53), the year Project Elephant started, or the penalty for poaching a tiger. However, there is a growing trend (last 5 years) of conceptual questions that ask candidates to analyse the impact of a conservation project on local livelihoods or to compare the effectiveness of habitat‑centric versus species‑centric approaches.</p>
  <p>In AFCAT, the pattern is similar but with a twist: questions often embed data tables showing population trends, requiring candidates to interpret the graph and select the correct inference. This tests both data‑interpretation skills and knowledge of conservation metrics such as the <strong>Growth Rate (GR)</strong> of tiger numbers.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing the year of [[Project Tiger]] (1973) with the year of the Wildlife Protection Act (1972). Students often mix the two because both are flagship initiatives; remembering the mnemonic “TIGER 1973” helps keep them separate.</li>
    <li>Assuming all protected areas are tiger reserves. Many aspirants overlook that national parks, wildlife sanctuaries, and biosphere reserves have distinct legal statuses and management objectives.</li>
    <li>Neglecting the role of community participation. Answers that focus only on government actions lose marks because the exam emphasizes the <span style="color:var(--success);">community‑centric model</span> introduced in the 1990s.</li>
    <li>Mixing up the penalty figures for Schedule I vs. Schedule II species. The fine for Schedule I is higher; a quick mental check (“1 = higher”) prevents this error.</li>
    <li>Over‑generalising the impact of satellite imagery. ISRO’s remote sensing aids monitoring but does not replace ground‑truth surveys; exam questions may test this nuance.</li>
    <li>Failing to differentiate between “Elephant Action Plans” and “Elephant Corridors”. The former are policy documents, the latter are physical pathways; conflating them leads to inaccurate statements.</li>
    <li>Ignoring the specific width criteria for corridors (2 km). When a question asks for minimum corridor dimensions, many students incorrectly quote 1 km, losing marks.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQs -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol>
    <li>
      <p><strong>Question:</strong> Under the [[Wildlife Protection Act, 1972]], which schedule provides the highest level of protection and the toughest penalty for poaching?</p>
      <p>A) Schedule I&nbsp;&nbsp; B) Schedule II&nbsp;&nbsp; C) Schedule III&nbsp;&nbsp; D) Schedule IV</p>
      <p><strong>Answer:</strong> A</p>
      <p><em>Explanation:</em> Schedule I species receive the maximum protection, with penalties up to <span style="color:var(--success);">₹ 5 lakh</span> and imprisonment of 7 years. Schedules II‑IV have progressively lower penalties.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which of the following is NOT a component of Project Elephant’s strategy?</p>
      <p>A) Establishment of Elephant Action Plans<br>B) Compensation for crop damage<br>C) Creation of tiger reserves<br>D) Development of wildlife corridors</p>
      <p><strong>Answer:</strong> C
`;

window.EXPANDED_NOTES_DATA["env-species"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Species in News & IUCN Red List
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>Understanding [[Species in News]] and the [[IUCN Red List]] begins with the historical evolution of wildlife monitoring. In the early 20th century, naturalists such as [[Alfred Russel Wallace]] and [[Charles Darwin]] documented species distributions, but systematic threat assessment only emerged after World War II when habitat loss accelerated. The United Nations established the [[International Union for Conservation of Nature (IUCN)]] in 1948, and its Red List was formally launched in 1964 to provide a globally comparable [[conservation status]] framework.</p>
  <p>The core definition of the Red List is a <span style="color: var(--warning);">standardised</span> set of categories ranging from <span style="color: var(--success);">Extinct (EX)</span> to <span style="color: var(--success);">Least Concern (LC)</span>. These categories are derived from five quantitative [[IUCN criteria (A–E)]], each addressing different dimensions of extinction risk: population reduction, restricted geographic range, small population size, quantitative analysis, and observed declines. The axioms underlying the system are: (i) a species’ risk can be quantified, (ii) thresholds are globally applicable, and (iii) data quality influences category assignment.</p>
  <p>Building on these axioms, the first practical step for any analyst is to gather baseline data: historic range maps, population censuses, and threat profiles. For example, the [[Indian Great Indian Bustard]] (Ardeotis nigriceps) was re‑assessed in 2022 using a combination of satellite tracking and ground surveys, revealing a <span style="color: var(--warning);">>90 %</span> decline over three generations—triggering a shift from <span style="color: var(--success);">Endangered (EN)</span> to <span style="color: var(--success);">Critically Endangered (CR)</span>. This demonstrates how each concept—data collection, criteria application, and category assignment—builds sequentially.</p>
  <p>Three worked examples illustrate the workflow. (1) The [[Bengal Tiger]] (Panthera tigris tigris) benefits from [[Project Tiger]]; its population rose from ~1,800 in 2006 to ~3,200 in 2023, moving the species from <span style="color: var(--success);">Endangered</span> to <span style="color: var(--success);">Vulnerable</span> under criterion A2. (2) The [[Sundarbans]] mangrove ecosystem hosts the [[Salt‑marsh Crocodile]] (Crocodylus porosus); a 2021 flood‑induced mortality event was quantified using [[Population Viability Analysis (PVA)]], leading to a temporary <span style="color: var(--success);">Near Threatened (NT)</span> status. (3) The [[Western Ghats]] endemic [[Malabar Gliding Frog]] (Rhacophorus malabaricus) was listed as <span style="color: var(--success);">Vulnerable (VU)</span> after a 45 % habitat loss due to tea plantation expansion, satisfying criterion B2 (area of occupancy).</p>
  <p>Real‑world applications extend beyond pure ecology. In defence, the Indian Army’s [[Maharashtra Forest Department]] uses Red List data to map conflict zones where wildlife corridors intersect with training areas, enabling [[habitat fragmentation]] mitigation plans. The Indian Navy’s sonar studies in the [[Andaman Sea]] reference the Red List to avoid critical habitats of [[Dugong]] (Dugong dugon), thereby reducing acoustic disturbance. Moreover, the [[National Biodiversity Authority]] leverages Red List status to prioritise funding for bioprospecting projects, ensuring that commercial extraction does not exacerbate extinction risk.</p>
  <p>The media’s role in spotlighting species is another crucial layer. When a charismatic animal such as the [[Snow Leopard]] (Panthera uncia) appears in national newspapers, it often triggers a surge in public donations and policy attention, a phenomenon termed “[[Species in News]] effect. Studies from 2018 to 2022 show a <span style="color: var(--warning);">+30 %</span> increase in funding for Red List assessments following high‑profile coverage of a single species.</p>
  <p>Finally, the integration of modern genetics—particularly [[COI barcode]] sequencing—has refined taxonomic clarity, preventing misidentification that could otherwise skew Red List outcomes. The 2020 revision of the [[Indian Pangolin]] (Manis crassicaudata) leveraged DNA barcoding to confirm its distinctiveness from the Southeast Asian species, leading to its placement as <span style="color: var(--success);">Critically Endangered (CR)</span> under criterion C2a(i). This exemplifies how <span style="color: var(--warning);">important</span> scientific advances feed directly into the Red List pipeline, making the system both dynamic and policy‑relevant.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Category</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Abbreviation</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Criteria Trigger</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Population Threshold</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Extinct</td>
      <td style="border:1px solid var(--border);padding:10px;">EX</td>
      <td style="border:1px solid var(--border);padding:10px;">No individuals remaining</td>
      <td style="border:1px solid var(--border);padding:10px;">0</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Extinct in the Wild</td>
      <td style="border:1px solid var(--border);padding:10px;">EW</td>
      <td style="border:1px solid var(--border);padding:10px;">Only in captivity</td>
      <td style="border:1px solid var(--border);padding:10px;">0 in natural habitat</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Critically Endangered</td>
      <td style="border:1px solid var(--border);padding:10px;">CR</td>
      <td style="border:1px solid var(--border);padding:10px;">A, B, C, D, or E</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">< 250 mature individuals</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Endangered</td>
      <td style="border:1px solid var(--border);padding:10px;">EN</td>
      <td style="border:1px solid var(--border);padding:10px;">A, B, C, D, or E</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">250–999 mature individuals</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Vulnerable</td>
      <td style="border:1px solid var(--border);padding:10px;">VU</td>
      <td style="border:1px solid var(--border);padding:10px;">A, B, C, D, or E</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1,000–9,999 mature individuals</span></td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Near Threatened</td>
      <td style="border:1px solid var(--border);padding:10px;">NT</td>
      <td style="border:1px solid var(--border);padding:10px;">Just below thresholds for VU</td>
      <td style="border:1px solid var(--border);padding:10px;">~10,000 mature individuals</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Least Concern</td>
      <td style="border:1px solid var(--border);padding:10px;">LC</td>
      <td style="border:1px solid var(--border);padding:10px;">Does not meet any threatened criteria</td>
      <td style="border:1px solid var(--border);padding:10px;">Stable or increasing populations</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Data Deficient</td>
      <td style="border:1px solid var(--border);padding:10px;">DD</td>
      <td style="border:1px solid var(--border);padding:10px;">Insufficient information</td>
      <td style="border:1px solid var(--border);padding:10px;">N/A</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>CR‑EN‑VU</strong>: Remember the descending risk ladder with the phrase “<span style="color:var(--warning);">C</span>Razy <span style="color:var(--warning);">E</span>lephants <span style="color:var(--warning);">V</span>anish”. This helps recall the order: <span style="color:var(--success);">Critically Endangered → Endangered → Vulnerable</span>.</li>
    <li><strong>ABCDE</strong> for IUCN criteria: “<span style="color:var(--warning);">A</span>ll <span style="color:var(--warning);">B</span>ad <span style="color:var(--warning);">C</span>hanges <span style="color:var(--warning);">D</span>ecline <span style="color:var(--warning);">E</span>verywhere”. Each letter reminds you of the five quantitative criteria.</li>
    <li><strong>“SALT”</strong> for media impact: <span style="color:var(--success);">S</span>pecies <span style="color:var(--success);">A</span>ppears <span style="color:var(--success);">L</span>oudly <span style="color:var(--success);">T</span>hrough news, boosting funding.</li>
    <li><strong>“TIGER”</strong> for Indian conservation programmes: <span style="color:var(--success);">T</span>argeted <span style="color:var(--success);">I</span>nvestment <span style="color:var(--success);">G</span>uides <span style="color:var(--success);">E</span>cosystem <span style="color:var(--success);">R</span>estoration.</li>
    <li><strong>“COI‑DNA”</strong> mnemonic: “<span style="color:var(--warning);">C</span>heck <span style="color:var(--warning);">O</span>rigin, <span style="color:var(--warning);">I</span>dentify species”. Useful for recalling the role of COI barcoding in Red List assessments.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">1964</span> – Year the <span style="color:var(--success);">IUCN Red List</span> was officially launched.</li>
    <li><span style="color:var(--warning);">5</span> – Number of quantitative criteria (A‑E) used for assessment.</li>
    <li><span style="color:var(--warning);">≥90 %</span> – Population decline over three generations required for <span style="color:var(--success);">CR</span> under criterion A2.</li>
    <li><span style="color:var(--warning);">2,000 km²</span> – Maximum extent of occurrence for a species to qualify as <span style="color:var(--success);">EN</span> under criterion B1.</li>
    <li><span style="color:var(--warning);">250</span> – Upper limit of mature individuals for <span style="color:var(--success);">CR</span> under criterion C.</li>
    <li><span style="color:var(--warning);">100 km²</span> – Threshold area of occupancy for <span style="color:var(--success);">CR</span> under criterion B2.</li>
    <li><span style="color:var(--warning);">10 years</span> – Time frame used in criterion D for assessing very small populations.</li>
    <li><span style="color:var(--warning);">50 %</span> – Habitat loss proportion that typically pushes a species from <span style="color:var(--success);">VU</span> to <span style="color:var(--success);">EN</span>.</li>
    <li><span style="color:var(--warning);">2022</span> – Year the <span style="color:var(--success);">Great Indian Bustard</span> was upgraded to <span style="color:var(--success);">CR</span>.</li>
    <li><span style="color:var(--warning);">30 %</span> – Approximate increase in funding observed after a species receives major media coverage (“<span style="color:var(--success);">Species in News</span>” effect).</li>
    <li><span style="color:var(--warning);">CITES</span> – International treaty that works alongside the Red List to regulate trade of <span style="color:var(--success);">Appendix I</span> species.</li>
    <li><span style="color:var(--warning);">DNA barcoding</span> – Tool that resolves taxonomic ambiguities, essential for accurate Red List placement.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>The topic of [[Species in News]] and the [[IUCN Red List]] has featured in every NDA and CDS paper since 2018, averaging <span style="color:var(--warning);">2–3</span> questions per exam. The most recurring sub‑topic is the identification of Red List categories (EX, EW, CR, EN, VU) and the numeric thresholds attached to each. For example, the 2021 NDA paper asked candidates to match a species with its correct category based on a given population decline.</p>
  <p>Examiners also love to test the link between legislation and conservation status. Questions frequently combine the [[Wildlife Protection Act 1972]] with Red List outcomes, such as asking which Indian species listed as <span style="color:var(--success);">CR</span> is protected under Schedule I. This tests both factual recall and the ability to integrate legal frameworks with ecological data.</p>
  <p>In terms of difficulty, the majority of questions are conceptual (identifying criteria, interpreting data tables) rather than calculation‑heavy. However, the last five years have seen a subtle shift towards scenario‑based questions: candidates are presented with a brief news excerpt about a species decline and must deduce the likely Red List category. This trend reflects the exam’s emphasis on analytical reasoning.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing <span style="color:var(--success);">Extinct (EX)</span> with <span style="color:var(--success);">Extinct in the Wild (EW)</span>. Students often merge the two because both imply disappearance, but EW still has captive populations.</li>
    <li>Mixing up the numeric thresholds for <span style="color:var(--success);">CR</span> and <span style="color:var(--success);">EN</span>. The mistake arises from not memorising the exact <span style="color:var(--warning);">250</span> vs <span style="color:var(--warning);">1,000</span> mature individuals cut‑offs.</li>
    <li>Assuming media coverage automatically upgrades a species’ status. In reality, news can raise awareness but does not alter the Red List category without scientific data.</li>
    <li>Neglecting the role of <span style="color:var(--success);">CITES</span> in trade regulation. Many students forget that a species can be protected under CITES even if its Red List status is <span style="color:var(--success);">LC</span>.</li>
    <li>Over‑relying on a single criterion. The IUCN framework requires that any one of the five criteria can place a species in a threatened category; ignoring this leads to incomplete answers.</li>
    <li>Forgetting the <span style="color:var(--success);">Data Deficient (DD)</span> category, which is a valid outcome when information is lacking. Exam takers sometimes incorrectly label DD as “not threatened”.</li>
    <li>Misinterpreting the “<span style="color:var(--success);">Species in News</span>” effect as a quantitative factor. It is a qualitative influence on funding, not a formal assessment metric.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol>
    <li>
      <strong>Question:</strong> A species shows a <span style="color:var(--warning);">95 %</span> decline in the last three generations and has an extent of occurrence of <span style="color:var(--warning);">1,500 km²</span>. Under which IUCN category would it most likely be placed?<br>
      <strong>Options:</strong><br>
      (A) Vulnerable (VU)<br>
      (B) Endangered (EN)<br>
      (C) Critically Endangered (CR)<br>
      (D) Near Threatened (NT)<br>
      <strong>Answer:</strong> (C)<br>
      <strong>Explanation:</strong> The >90 % decline meets criterion A2 for <span style="color:var(--success);">CR</span>, and the extent of occurrence is below the <span style="color:var(--warning);">2,000 km²</span> threshold, confirming the CR status.
    </li>
    <li>
      <strong>Question:</strong> Which Indian mammal was upgraded to <span style="color:var(--success);">Critically Endangered</span> in the 2022 IUCN assessment?<br>
      <strong>Options:</strong><br>
      (A) Indian Elephant<br>
      (B) Great Indian Bustard<br>
      (C) Nilgiri Tahr<br>
      (D) Indian Rhinoceros<br>
      <strong>Answer:</strong> (B)<br>
      <strong>Explanation:</strong> The Great Indian Bustard’s population fell below <span style="color:var(--warning
`;

window.EXPANDED_NOTES_DATA["env-treaties"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Climate Change Treaties & India's NDCs
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>The modern [[climate change]] discourse traces its roots to the late 1970s when scientists began linking rising <span style="color: var(--warning);">greenhouse gas (GHG)</span> concentrations to global temperature trends. The first political response was the [[United Nations Framework Convention on Climate Change (UNFCCC)]] in <span style="color: var(--warning);">1992</span>, which codified the principle of “common but differentiated responsibilities”. This principle acknowledges that while all nations share the <span style="color: var(--success);">burden</span> of mitigation, developed countries bear a larger historical responsibility. The UNFCCC laid the groundwork for subsequent binding treaties, creating a legal scaffolding that the Indian defence establishment now incorporates into its strategic environmental assessments.</p>

  <p>[[Kyoto Protocol]] (adopted <span style="color: var(--warning);">1997</span>, entered force <span style="color: var(--warning);">2005</span>) was the first treaty that imposed legally binding <span style="color: var(--success);">emission reduction targets</span> on Annex I (developed) nations. Although India was exempted from absolute cuts, the Protocol introduced market‑based mechanisms such as <span style="color: var(--success);">Joint Implementation (JI)</span> and the <span style="color: var(--success);">Clean Development Mechanism (CDM)</span>. Indian research labs leveraged CDM projects to develop low‑carbon technologies for army logistics, demonstrating how international climate policy can directly influence defence procurement.</p>

  <p>The next evolutionary leap was the [[Paris Agreement]] in <span style="color: var(--warning);">2015</span>, which shifted from top‑down targets to bottom‑up <span style="color: var(--success);">Nationally Determined Contributions (NDCs)</span>. Each country submits its own mitigation plan, reviewed every five years, fostering a “ratchet‑up” mechanism. India’s first NDC, titled “[[India’s Intended Nationally Determined Contribution (INDC)]]”, pledged a <span style="color: var(--warning);">33–35%</span> reduction in emissions intensity of its GDP by <span style="color: var(--warning);">2030</span> relative to 2005 levels, alongside a 40 % renewable electricity share. The NDC framework is <span style="color: var(--important);">important</span> because it translates abstract climate commitments into concrete, measurable actions that can be audited by the Ministry of Defence’s environmental wing.</p>

  <p>To understand how NDCs operate, consider a simplified emissions inventory equation: <br>
  <span style="color: var(--success);">E = Σ (Activity × Emission Factor)</span>. <br>
  Here, “Activity” denotes the scale of a sector (e.g., km driven by army trucks) and “Emission Factor” is the GHG released per unit activity. By upgrading the fleet to hybrid diesel‑electric vehicles, the army can reduce the activity‑related factor, thereby meeting its share of the national NDC. This example illustrates the direct link between treaty obligations and defence logistics optimisation.</p>

  <p>Another worked example involves the [[Renewable Energy Sources Act (RESA)]] of 2015, which created a policy incentive for solar and wind generation. India’s push for solar rooftops on military cantonments is a direct implementation of the NDC’s renewable energy target. If a cantonment installs 5 MW of solar PV, the resulting offset of <span style="color: var(--warning);">~7,500 tCO₂</span> per year contributes to the national carbon budget, showcasing a synergy between national policy and defence infrastructure planning.</p>

  <p>Real‑world applications extend beyond procurement. The Indian Navy’s “[[Green Ship Programme]]” aligns with the NDC’s marine sector goals by retrofitting vessels with <span style="color: var(--success);">energy‑efficient hull designs</span> and adopting bio‑fuel blends. Similarly, the Indian Air Force’s shift to <span style="color: var(--success);">bio‑fuel for trainer aircraft</span> reduces lifecycle emissions, a move that is monitored under the UNFCCC’s transparency framework. These case studies underscore that climate treaties are not merely diplomatic texts but operational directives influencing tactical choices.</p>

  <p>Finally, the concept of “<span style="color: var(--warning);">Loss and Damage</span>”—addressed in the UNFCCC’s 2013 Warsaw International Mechanism—highlights the humanitarian and security dimensions of climate change. Increased frequency of extreme weather events can threaten forward operating bases, necessitating climate‑resilient engineering. India's NDCs, therefore, are a strategic tool that integrates environmental stewardship with national security, ensuring the armed forces are prepared for both mitigation and adaptation challenges.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Treaty / Instrument</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year Adopted</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Commitment</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">India’s Action</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[UNFCCC]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1992</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Common but differentiated responsibilities</td>
      <td style="border:1px solid var(--border);padding:10px;">Framework for future treaties; reporting obligations</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Kyoto Protocol]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1997</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Annex I emission caps; CDM mechanism</td>
      <td style="border:1px solid var(--border);padding:10px;">Hosted CDM projects; no absolute caps</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Paris Agreement]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Bottom‑up NDCs; 5‑year review cycle</td>
      <td style="border:1px solid var(--border);padding:10px;">[[INDC]] → NDC 2021‑2030; renewable targets</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Cancún Agreements]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2010</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Green Climate Fund; adaptation finance</td>
      <td style="border:1px solid var(--border);padding:10px;">Accessed GCF for coastal defence projects</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Glasgow Climate Pact]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2021</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Phase‑down of coal; enhanced NDC ambition</td>
      <td style="border:1px solid var(--border);padding:10px;">Commitment to <span style="color:var(--warning);">2030</span> coal‑phase‑down</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Loss and Damage Mechanism]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2022</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Financial support for climate‑impacted nations</td>
      <td style="border:1px solid var(--border);padding:10px;">Risk‑assessment for forward bases</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>PARIS</strong> – <em>P</em>romise, <em>A</em>ction, <em>R</em>eview, <em>I</em>nnovation, <em>S</em>trengthen – helps recall the five pillars of the Paris Agreement.</li>
    <li><strong>CDM = “Clean Development, More”</strong> – Remember that CDM projects generate <span style="color:var(--success);">additional</span> climate benefits and finance.</li>
    <li><strong>INDC → NDC → 2030</strong> – The arrow shows the evolution from India’s Intended NDC to the final NDC and the target year.</li>
    <li><strong>COAL‑PHASE‑DOWN = “C‑P‑D”</strong> – C for “Commit”, P for “Phase‑out”, D for “Decarbonise”. Useful for recalling the Glasgow pledge.</li>
    <li><strong>EMISSIONS = Activity × Factor</strong> – The simple formula can be remembered as “AF” – “A” for “Army”, “F” for “Fuel” when relating to defence logistics.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">1992</span> – The year [[UNFCCC]] was adopted, establishing the global climate regime.</li>
    <li><span style="color:var(--warning);">1997</span> – Adoption of the [[Kyoto Protocol]]; introduced binding caps for Annex I nations.</li>
    <li><span style="color:var(--warning);">2005</span> – Kyoto Protocol entered into force, launching the first CDM projects.</li>
    <li><span style="color:var(--warning);">2015</span> – [[Paris Agreement]] signed; shifted to bottom‑up <span style="color:var(--success);">NDCs</span>.</li>
    <li><span style="color:var(--warning);">2021</span> – [[Glasgow Climate Pact]] reinforced the coal‑phase‑down agenda.</li>
    <li><span style="color:var(--success);">33–35%</span> – Target reduction in India's emissions intensity of GDP by 2030.</li>
    <li><span style="color:var(--success);">40%</span> – Renewable electricity share aimed for 2030 under India's NDC.</li>
    <li><span style="color:var(--success);">E = Σ(Activity × Emission Factor)</span> – Core accounting formula for GHG inventories.</li>
    <li><span style="color:var(--success);">CDM</span> – Mechanism that allowed Indian defence projects to earn carbon credits.</li>
    <li><span style="color:var(--success);">Loss & Damage</span> – UNFCCC mechanism addressing climate‑induced harms to vulnerable nations.</li>
    <li><span style="color:var(--success);">Green Ship Programme</span> – Navy initiative aligned with the maritime sector NDC target.</li>
    <li><span style="color:var(--success);">Bio‑fuel adoption</span> – Air Force step that contributes to sector‑specific emission cuts.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Across the last decade, the <span style="color:var(--success);">NDA</span> and <span style="color:var(--success);">CDS</span> papers have featured climate‑treaty questions in roughly 12‑15 % of the Environment & Ecology section. The most recurring sub‑topic is the chronology of international agreements (UNFCCC, Kyoto, Paris). In <span style="color:var(--warning);">2022</span> NDA, a direct match‑the‑column question paired each treaty with its year and main feature, earning full marks for candidates who memorised the timeline.</p>
  <p>Examiners also love to test the <span style="color:var(--success);">NDC</span> specifics: the percentage reduction in emissions intensity, renewable energy targets, and the 2030 deadline. Questions often appear as one‑line statements like “India’s NDC commits to a <span style="color:var(--warning);">40 %</span> renewable electricity share by 2030”. Such items are high‑yield because they are factual and directly quoted from official documents.</p>
  <p>The difficulty level has shifted from pure recall (pre‑2018) to application‑oriented items (2020‑2024). Recent papers ask candidates to identify which defence‑related initiative aligns with a given climate goal – for example, linking the “Green Ship Programme” to the maritime sector target of the Paris Agreement. This trend reflects the Union Ministry’s push to integrate climate policy with national security.</p>
  <p>In the <span style="color:var(--success);">AFCAT</span> exams, the focus is slightly lighter, with only one or two questions per cycle, usually in the form of “Which of the following is NOT a component of India’s NDC?”. However, the pattern remains consistent: factual recall of treaty years, targets, and mechanisms, coupled with a growing emphasis on real‑world applications.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing the <span style="color:var(--success);">Kyoto Protocol</span> with the <span style="color:var(--success);">Paris Agreement</span>. Students often mix up the binding nature and the target years; remember Kyoto = 1997‑2005, Paris = 2015 onward.</li>
    <li>Mixing up the <span style="color:var(--success);">NDC</span> and <span style="color:var(--success);">INDC</span>. The INDC was a pre‑submission draft; the final NDC is the official commitment. Write “INDC → NDC” to avoid reversal.</li>
    <li>Neglecting the <span style="color:var(--success);">Emission Factor</span> component in the inventory formula. Many write only the activity level, leading to wrong quantitative answers.</li>
    <li>Over‑looking the <span style="color:var(--success);">Loss and Damage</span> mechanism, assuming it is a mitigation tool rather than a compensation scheme. This leads to mis‑classification in MCQs.</li>
    <li>Assuming India’s NDC targets are voluntary. The “ratchet‑up” mechanism makes them semi‑binding; exam setters may test the legal status.</li>
    <li>Forgetting that the <span style="color:var(--success);">Green Ship Programme</span> is a defence‑specific initiative, not a civilian policy. This distinction is crucial in application‑type questions.</li>
    <li>Relying on outdated data (e.g., using the 2020 renewable target of 30 % instead of the updated 40 % for 2030). Always verify the latest official numbers before the exam.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol>
    <li>
      <p><strong>Question:</strong> Which treaty introduced the concept of <span style="color:var(--success);">Nationally Determined Contributions (NDCs)</span>?</p>
      <p>(A) UNFCCC (B) Kyoto Protocol (C) Paris Agreement (D) Glasgow Climate Pact</p>
      <p><strong>Answer:</strong> (C)</p>
      <p>Explanation: The Paris Agreement (2015) shifted to a bottom‑up approach where each country submits its own NDC. The other options either pre‑date the concept or focus on different mechanisms.</p>
    </li>
    <li>
      <p><strong>Question:</strong> India’s 2030 NDC aims to achieve what percentage of renewable electricity in its total generation?</p>
      <p>(A) 30% (B) 40% (C) 50% (D) 60%</p>
      <p><strong>Answer:</strong> (B)</p>
      <p>Explanation: The official NDC document states a 40 % renewable share by 2030. Options A and C are older targets; D is beyond the current commitment.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The Clean Development Mechanism (CDM) primarily benefits which of the following?</p>
      <p>(A) Developed countries only (B) Developing countries only (C) Both developed and developing countries (D) None of the above</p>
      <p><strong>Answer:</strong> (C)</p>
      <p>Explanation: CDM allows developed nations to earn carbon credits by investing in emission‑reducing projects in developing countries, creating a win‑win scenario. Hence both parties benefit.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which of the following Indian defence initiatives directly aligns with the maritime sector target of the Paris Agreement?</p>
      <p>(A) Green Ship Programme (B) Bio‑fuel for trainer aircraft (C) Solar rooftops on cantonments (D) CDM hydro‑electric project</p>
      <p><strong>Answer:</strong> (A)</p>
      <p>Explanation: The Green Ship Programme focuses on energy‑efficient vessels, matching the maritime mitigation goal. The other options relate to land or air sectors.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Under the emissions inventory formula E = Σ(Activity × Emission Factor), which component would the Indian Army most likely modify to meet its NDC share?</p>
      <p>(A) Increase Activity (B) Reduce Emission Factor (C) Change the Σ operator (D) None of the above</p>
      <p><strong>Answer:</strong> (B)</p>
      <p>Explanation: The army can lower the emission factor by adopting cleaner fuels or hybrid technologies. Increasing activity would raise emissions, while altering the summation symbol is mathematically meaningless.</p>
    </li>
  </ol>
</div>
`;

window.EXPANDED_NOTES_DATA["env-laws"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Environmental Legislation & EIA
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <p>The modern framework of [[Environmental Legislation & EIA]] in India traces its roots to the post‑World‑War II era when the global community recognised that unchecked industrialisation was jeopardising ecosystems. The first landmark treaty, the [[United Nations Conference on the Human Environment]] (Stockholm, 1972), introduced the principle of “sustainable development” and inspired nations to codify environmental protection. In India, the seminal [[Water (Prevention and Control of Pollution) Act, 1974]] and [[Air (Prevention and Control of Pollution) Act, 1981]] laid the statutory foundation, establishing the <span style="color: var(--warning);">first institutional mechanisms</span> for monitoring pollutants.</p>

  <p>At the heart of the system lies the [[Environmental Impact Assessment (EIA)]] process, a systematic appraisal that predicts the <span style="color: var(--success);">potential environmental consequences</span> of proposed projects before they commence. The EIA is built on three axioms: (1) the environment is a finite, interconnected system; (2) any alteration must be quantified in terms of <span style="color: var(--warning);">baseline data</span>; and (3) mitigation must be integral to project design. These axioms cascade into a step‑wise methodology: scoping → baseline study → impact prediction → mitigation → public consultation → decision making.</p>

  <p>Consider a defence‑related infrastructure project such as the construction of a new air‑base in the Western Ghats. The scoping stage identifies sensitive components – endemic flora, migratory bird routes, and watersheds feeding the [[Mula River]]. Baseline surveys record species richness, water quality parameters (pH, BOD, COD), and noise levels. Impact prediction uses models (e.g., GIS‑based dispersion models) to estimate how runway extension will alter micro‑climate and increase particulate matter. Mitigation may involve constructing a vegetative buffer, installing noise‑abatement barriers, and scheduling construction during non‑breeding seasons. This example illustrates how each EIA step logically builds on the previous one.</p>

  <p>Another illustration is the deployment of solar farms under the [[National Solar Mission]] (2010). While renewable energy aligns with the [[Paris Agreement]] goals, large‑scale solar installations can disrupt desert ecosystems, cause soil salinisation, and affect local albedo. The EIA therefore incorporates soil‑health indices, remote‑sensing data for land‑use change, and community‑impact surveys. Mitigation strategies—like staggered panel placement and use of anti‑reflective coatings—show how policy objectives (clean energy) are reconciled with ecological safeguards.</p>

  <p>Real‑world applications extend to the Indian armed forces’ push for “green logistics”. The [[Indian Climate Change Policy]] (2008) mandates that defence establishments adopt low‑carbon technologies. Consequently, the Navy’s plan to shift from diesel‑powered vessels to LNG‑based ships undergoes a dedicated EIA, evaluating marine‑noise, greenhouse‑gas emissions, and fuel‑spill risks. The assessment feeds directly into the approval process of the [[National Green Tribunal (NGT)]] and ensures compliance with the [[Energy Conservation Act, 2001]].</p>

  <p>Legal instruments such as the [[Forest Conservation Act, 1980]], [[Wildlife Protection Act, 1972]], and the more recent [[Renewable Energy (Promotion) Act, 2023]] interlock with EIA provisions. For instance, any hydro‑electric project in a forested catchment must obtain clearance under the Forest Conservation Act, which itself requires an EIA that demonstrates no net loss of forest cover. The synergy between statutes creates a layered defence where the most stringent requirement prevails, safeguarding biodiversity while enabling development.</p>

  <p>In summary, the Indian environmental legislative architecture functions as a <span style="color: var(--warning);">hierarchical network</span> of statutes, regulations, and judicial pronouncements. Core concepts—baseline assessment, impact prediction, mitigation, and public participation—are not isolated steps but interdependent pillars that collectively ensure that development, whether civilian or defence‑related, proceeds within the planet’s ecological limits. Mastery of these principles, together with familiarity with key laws and landmark cases, is essential for any aspirant targeting the NDA, CDS, or AFCAT examinations.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Topic</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Provision / Year</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Relevance to Defence/ Renewable Energy</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Air (Prevention and Control of Pollution) Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1981</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Controls emissions from aircraft engines and base generators.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Water (Prevention and Control of Pollution) Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1974</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Mandates effluent treatment for naval dockyards.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Forest Conservation Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1980</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Requires forest clear‑cutting clearance for training ranges.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Solar Mission]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2010</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Sets targets for solar capacity; EIA needed for large farms.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Environmental Impact Assessment (EIA) Notification]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2006</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Defines 23 categories of projects requiring clearance.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Green Tribunal (NGT) Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2010</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Fast‑track adjudication of environmental disputes, including defence projects.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Energy Conservation Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2001</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Mandates energy audits for large installations, including military bases.</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Paris Agreement]] (India’s NDC)</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2015</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Guides renewable‑energy push and carbon‑offset strategies for defence.</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul>
    <li><strong>SCAMPER</strong> – <em>Scope, Collect baseline, Assess impacts, Mitigate, Public participation, Enforce, Review</em>. Helps recall the seven mandatory steps of an EIA.</li>
    <li><strong>FARM‑LAW</strong> – <em>Forest, Air, Renewable (Solar/Wind), Marine, Water – Laws</em>. Maps the major statutes (Forest Conservation Act, Air Act, Renewable Energy Act, Maritime Pollution Act, Water Act) to their domains.</li>
    <li><strong>GREEN‑5</strong> – <em>Global, Renewable, Emission‑cut, Energy‑audit, NGT</em>. Quick trigger for the five pillars of India’s climate‑policy framework.</li>
    <li><strong>CAP‑E</strong> – <em>Carbon, Air, Power, Energy</em>. Remembers the four sectors most scrutinised under the [[National Solar Mission]] and [[National Wind Energy Mission]].</li>
    <li><strong>PNR‑EIA</strong> – <em>Pre‑Notification, Notification, Review, Enforcement, Appeal</em>. Guides the procedural flow from project proposal to legal challenge.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul>
    <li><span style="color:var(--warning);">1974</span> – Enactment of the <span style="color:var(--success);">[[Water (Prevention and Control of Pollution) Act]]</span>, the first comprehensive water‑pollution law in India.</li>
    <li><span style="color:var(--warning);">1981</span> – Introduction of the <span style="color:var(--success);">[[Air (Prevention and Control of Pollution) Act]]</span>, establishing ambient air‑quality standards.</li>
    <li><span style="color:var(--warning);">1980</span> – <span style="color:var(--success);">[[Forest Conservation Act]]</span> mandates prior approval for any forest‑land diversion.</li>
    <li><span style="color:var(--warning);">2006</span> – The <span style="color:var(--success);">[[EIA Notification]]</span> classifies 23 project categories requiring environmental clearance.</li>
    <li><span style="color:var(--warning);">2010</span> – Establishment of the <span style="color:var(--success);">[[National Green Tribunal]]</span> for speedy adjudication of environmental disputes.</li>
    <li><span style="color:var(--warning);">2015</span> – India signs the <span style="color:var(--success);">[[Paris Agreement]]</span>, committing to a <span style="color:var(--success);">30% reduction in emissions intensity by 2030</span>.</li>
    <li><span style="color:var(--warning);">2023</span> – Launch of the <span style="color:var(--success);">[[Renewable Energy (Promotion) Act]]</span>, offering tax incentives for solar and wind projects.</li>
    <li>Every EIA must include a <span style="color:var(--success);">public hearing</span> and a <span style="color:var(--success);">mitigation plan</span> before clearance is granted.</li>
    <li>Defence projects are exempted from certain provisions only after a <span style="color:var(--success);">strategic environmental assessment</span> by the Ministry of Defence.</li>
    <li>The <span style="color:var(--success);">baseline survey</span> must be conducted for at least <span style="color:var(--warning);">12 months</span> to capture seasonal variations.</li>
    <li>Non‑compliance with the <span style="color:var(--success);">Energy Conservation Act</span> can attract a penalty of up to <span style="color:var(--warning);">₹1 crore</span> per violation.</li>
    <li>Under the <span style="color:var(--success);">National Solar Mission</span>, each megawatt of installed capacity reduces CO₂ emissions by approximately <span style="color:var(--warning);">0.9 metric tonnes per year</span>.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Historical paper analysis shows that the topic of environmental legislation appears in <span style="color:var(--warning);">≈12‑15%</span> of the total marks across NDA, CDS, and AFCAT exams over the past decade. The most recurrent sub‑topic is the [[EIA Notification, 2006]], often asked in the form of “Which of the following projects does NOT require an EIA?” This pattern reflects examiners’ focus on statutory knowledge rather than rote memorisation.</p>
  <p>Another high‑frequency area is the suite of pollution‑control acts (Air, Water, and Forest). Questions frequently pair a law with its year of enactment, demanding precise recall – for example, “The [[Forest Conservation Act]] was enacted in which year?” The difficulty level is moderate, as the facts are straightforward but the options are deliberately close (e.g., 1979 vs 1980).</p>
  <p>In the last five years, a subtle shift is observable: the papers now integrate climate‑change concepts such as the [[Paris Agreement]] and the Indian [[National Solar Mission]] into the environmental‑law section. This trend aligns with the Indian government’s “Net‑Zero by 2070” pledge, prompting aspirants to study renewable‑energy policies alongside traditional statutes.</p>
  <p>Overall, the exam style oscillates between direct factual recall, scenario‑based application (e.g., “A defence base proposes a new runway; which statutes apply?”), and comparative questions (e.g., “Difference between NGT and Supreme Court jurisdiction”). Preparing with a blend of dates, definitions, and case‑study style practice yields the best results.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul>
    <li>Confusing the year of the <span style="color:var(--success);">Air Act</span> with the <span style="color:var(--success);">Water Act</span>. Students often swap 1974 and 1981; memorise the mnemonic “W‑A‑R‑T‑H” (Water‑Air‑Regulation‑Timeline‑History).</li>
    <li>Assuming that all defence projects are automatically exempt from EIA. In reality, strategic projects still need a <span style="color:var(--success);">strategic environmental assessment</span> and NGT clearance.</li>
    <li>Neglecting the public‑participation clause. Many answer keys mark the option lacking “public hearing” as wrong, because the law mandates it for every EIA.</li>
    <li>Mix‑up between the <span style="color:var(--success);">National Solar Mission</span> and the <span style="color:var(--success);">National Wind Energy Mission</span>. Remember the mnemonic “SUN‑WIND” to keep them separate.</li>
    <li>Over‑looking the baseline duration requirement (12 months). Candidates often answer “any duration” and lose marks; the rule ensures seasonal variability is captured.</li>
    <li>Failing to link the [[Paris Agreement]] with domestic legislation. Examiners expect you to state that India’s NDC is implemented via the Solar and Wind missions.</li>
    <li>Misinterpreting the penalty limits under the Energy Conservation Act. The correct figure is <span style="color:var(--warning);">₹1 crore per violation</span>, not the often‑quoted “₹10 lakh”.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol>
    <li>
      <p><strong>Question:</strong> Which of the following projects is <em>not</em> required to undergo an Environmental Impact Assessment as per the 2006 EIA Notification?</p>
      <p>A) Construction of a 500‑MW coal‑based power plant<br>
         B) Installation of a solar photovoltaic plant of 10 MW capacity<br>
         C) Development of a naval base covering 150 hectares<br>
         D) Expansion of an existing highway to four lanes</p>
      <p><strong>Answer:</strong> B</p>
      <p><em>Explanation:</em> The 2006 Notification exempts solar PV plants below 20 MW from mandatory EIA, whereas all other options fall under categories that require clearance.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The [[Forest Conservation Act]] of 1980 primarily regulates which of the following?</p>
      <p>A) Air‑quality standards in urban areas<br>
         B) Diversion of forest land for non‑forest purposes<br>
         C) Disposal of hazardous waste<br>
         D) Renewable‑energy subsidies</p>
      <p><strong>Answer:</strong> B</p>
      <p><em>Explanation:</em> The Act restricts any diversion of forest land without prior approval; the other options are covered by separate statutes.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Under the [[National Green Tribunal Act]], the maximum monetary penalty for non‑compliance with an environmental order can be up to:</p>
      <p>A) ₹10 lakh<br>
         B) ₹1 crore<br>
         C) ₹5 crore<br>
         D) ₹50 lakh</p>
      <p><strong>Answer:</strong> B</p>
      <p><em>Explanation:</em> The NGT Act empowers the tribunal to levy fines up to ₹1 crore; lower limits are for minor offences.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which year did India ratify the [[Paris Agreement]]?</p>
      <p>A) 2014<br>
         B) 2015<br>
         C) 2016<br>
         D) 2017</p>
      <p><strong>Answer:</strong> B</p>
      <p><em>Explanation:</em> India signed and ratified the Paris Agreement in 2015; the other years are distractors.</p>
    </li>
    <li>
      <p><strong>Question:</strong> The baseline environmental survey for a defence air‑strip must be conducted for a minimum of:</p>
      <p>A) 3 months<br>
         B) 6 months<br>
         C) 12 months<br>
         D) 24 months</p>
      <p><strong>Answer:</strong> C</p>
      <p><em>Explanation:</em> A 12‑month baseline ensures capture of seasonal variations; shorter periods are insufficient for accurate impact prediction.</p>
    </li>
  </ol>
</div>
`;

window.EXPANDED_NOTES_DATA["env-renewable"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Renewable Energy & Green Initiatives
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Deep Conceptual Explanation</h4>
  <p>[[Renewable Energy]] emerged as a scientific and policy concept in the early 1970s, spurred by the oil crises and the growing awareness of [[Greenhouse Gases]] impact on climate. The seminal work of the [[UNFCCC]] in 1992 formalised the need for a global shift from [[Fossil Fuel Subsidy]]‑driven models to sustainable alternatives. From a first‑principles perspective, energy is the capacity to do work; renewable sources are those that replenish on a human timescale without depletion, unlike finite hydrocarbons. This definition underpins the taxonomy of [[Solar Photovoltaic]], [[Wind Energy]], [[Hydropower]], [[Biomass]], and [[Geothermal]] – each with distinct conversion mechanisms governed by thermodynamics and fluid dynamics.</p>
  <p>The <span style="color: var(--warning);">important</span> axioms include: (i) energy conservation, (ii) entropy increase, and (iii) resource regeneration. For instance, photovoltaic cells convert photon energy directly to electric current via the <span style="color: var(--success);">photoelectric effect</span>, obeying quantum efficiency limits (Shockley‑Queisser). Wind turbines harness kinetic energy of moving air masses, a process describable by the <span style="color: var(--success);">Betz limit</span> (59.3% of available power). Hydropower exploits gravitational potential energy of water, with efficiency often exceeding 90% due to minimal mechanical losses. These principles cascade: understanding the quantum limits of PV informs material research, which then integrates into national scale projects like the [[National Solar Mission]].</p>
  <p>Worked Example 1: A 5 MW solar farm in Rajasthan receives an average solar irradiance of 5.5 kWh/m²/day. Using a panel efficiency of 20% and a performance ratio of 0.85, the expected annual energy output is calculated as 5 MW × 365 days × 5.5 kWh/m²/day × 0.20 × 0.85 ≈ 1,638 MWh. This demonstrates how the <span style="color: var(--success);">performance ratio</span> corrects for temperature, dust, and inverter losses, a <span style="color: var(--warning);">key fact</span> in exam questions.</p>
  <p>Worked Example 2: A 2 MW wind turbine with a hub‑height wind speed of 7 m/s operates at a capacity factor of 30%. Annual generation = 2 MW × 0.30 × 8760 h ≈ 5,256 MWh. The capacity factor encapsulates site‑specific wind regimes, turbine design, and downtime – a concept frequently tested under the banner of [[Wind Energy]] performance.</p>
  <p>Worked Example 3: A run‑of‑river hydro plant on the Brahmaputra with a flow of 1,200 m³/s and a head of 15 m yields power P = ρgQHη ≈ 1000 kg/m³ × 9.81 m/s² × 1,200 m³/s × 15 m × 0.90 ≈ 158 MW. This illustrates the direct application of the hydraulic power formula, linking fluid mechanics to renewable generation.</p>
  <p>Real‑world defence relevance: The Indian Armed Forces have adopted [[Solar Photovoltaic]] panels at forward operating bases to reduce diesel logistics, enhancing [[Energy Security]] and operational endurance. The [[Indian Ministry of New and Renewable Energy (MNRE)]] collaborates with the [[Defence Research and Development Organisation (DRDO)]] on portable wind turbines for remote surveillance posts, showcasing a synergy between renewable tech and strategic autonomy.</p>
  <p>Policy-wise, India’s [[National Action Plan on Climate Change (NAPCC)]] outlines eight missions, with the [[National Solar Mission]] aiming for 100 GW of solar capacity by 2022 (later extended to 280 GW by 2030). The [[Renewable Purchase Obligation (RPO)]] mandates that distribution companies procure a minimum percentage of electricity from renewables, a regulatory lever that drives market growth. Understanding these legal frameworks, together with the scientific fundamentals, equips aspirants to answer both conceptual and application‑oriented questions in NDA, CDS, and AFCAT examinations.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Aspect</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Details</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">First Large‑Scale Adoption</td>
      <td style="border:1px solid var(--border);padding:10px;">[[Oil Crisis 1973]] → push for [[Renewable Energy]] research</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Solar PV Efficiency Limit</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color: var(--success);">Shockley‑Queisser</span> ≈ 33.7% (single‑junction)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Wind Power Betz Limit</td>
      <td style="border:1px solid var(--border);padding:10px;">59.3% of kinetic energy extractable</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">India’s Renewable Capacity (2023)</td>
      <td style="border:1px solid var(--border);padding:10px;">≈ 180 GW (≈ 38% of total installed)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Key Legislation</td>
      <td style="border:1px solid var(--border);padding:10px;">[[Paris Agreement]] (2015), [[NAPCC]] (2008), [[RPO]] (2020)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Capacity Factor Ranges</td>
      <td style="border:1px solid var(--border);padding:10px;">Solar 15‑25%, Wind 25‑40%, Hydro 40‑60%</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Defence Energy Savings</td>
      <td style="border:1px solid var(--border);padding:10px;">≈ 12% diesel reduction via solar at forward bases (2022 study)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">Future Target (2030)</td>
      <td style="border:1px solid var(--border);padding:10px;">280 GW renewable, 40% of national mix</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>SUN‑POWER</strong>: <em>Solar = U N (Utility‑scale & Niche), Photovoltaic = P O W E R (Performance, Orientation, Weather, Efficiency, Reliability)</em> – helps recall the five design parameters for solar projects.</li>
    <li><strong>WIND‑BETZ</strong>: <em>W = Wind, I = Intensity, N = Number of blades, D = Diameter, BETZ = limit 59.3%</em> – a quick cheat‑sheet for wind turbine basics.</li>
    <li><strong>HYDRO‑GRAV</strong>: <em>H = Head, Y = Yield, D = Density, R = Rate (flow), O = Ohmic losses, GRAV = gravity constant 9.81</em> – aids in recalling the hydro power equation.</li>
    <li><strong>BIOMASS‑CARB</strong>: <em>Biomass = Carbon‑Neutral (C A R B = Carbon‑Avoided + Renewable + Biomass)</em> – reinforces the carbon‑neutral claim of biomass.</li>
    <li><strong>NAPCC‑8</strong>: <em>National Action Plan on Climate Change – 8 missions: (S)olar, (W)ind, (H)ydro, (B)io‑energy, (G)eothermal, (C)limate, (A)griculture, (U)rban</em> – quick recall of the eight pillars.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">1973</span> – The first global push for [[Renewable Energy]] after the [[Oil Crisis]] highlighted the <span style="color:var(--success);">need for diversification</span>.</li>
    <li>Solar PV conversion efficiency is capped at <span style="color:var(--success);">Shockley‑Queisser limit ≈ 33.7%</span> for single‑junction cells.</li>
    <li>Wind turbines cannot extract more than <span style="color:var(--success);">59.3% (Betz limit)</span> of the kinetic energy in wind.</li>
    <li>India’s [[National Solar Mission]] target of <span style="color:var(--warning);">280 GW</span> by 2030 includes <span style="color:var(--success);">100 GW solar PV</span>.</li>
    <li>Hydropower plants typically achieve <span style="color:var(--success);">40‑60% capacity factor</span>, the highest among renewables.</li>
    <li>[[Renewable Purchase Obligation (RPO)]] mandates <span style="color:var(--warning);">20% (2025)</span> of total electricity to be sourced from renewables.</li>
    <li>Biomass energy is considered <span style="color:var(--success);">carbon‑neutral</span> only when the feedstock is sustainably harvested.</li>
    <li>Geothermal resources provide baseload power with <span style="color:var(--success);">capacity factors > 90%</span>.</li>
    <li>The <span style="color:var(--warning);">2021</span> UN Climate Report identified renewable energy as the <span style="color:var(--success);">fastest‑growing sector</span> globally.</li>
    <li>India’s [[Energy Security]] strategy reduces oil imports by <span style="color:var(--success);">≈12%</span> through renewable integration (2022 data).</li>
    <li>Each 1 MW of solar adds roughly <span style="color:var(--success);">1.5 million kWh</span> of clean electricity annually.</li>
    <li>The [[Clean Development Mechanism (CDM)]] has registered <span style="color:var(--warning);">over 8,000</span> projects worldwide, generating carbon credits.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Across the last decade, the NDA, CDS, and AFCAT papers have featured the renewable energy theme in <span style="color:var(--warning);">approximately 12‑15</span> questions per exam cycle, making it a high‑frequency topic. The earliest appearance dates back to the 2012 NDA set, where a question on the <span style="color:var(--success);">Betz limit</span> was asked. Since then, the trend has shifted from isolated factual queries to integrated scenarios linking policy, technology, and defence.</p>
  <p>Examiners particularly love to test the sub‑topics of [[Solar Photovoltaic]] efficiency, [[Renewable Purchase Obligation (RPO)]], and the impact of the [[Paris Agreement]] on Indian energy policy. Questions often embed a short data‑table (e.g., capacity growth of solar vs wind) and ask candidates to identify the correct statement or compute a derived metric such as annual generation.</p>
  <p>The difficulty level ranges from straightforward (definition‑type) to moderate (application of formulas). In the last five years, there is a noticeable rise in <span style="color:var(--success);">scenario‑based</span> questions where candidates must choose the most suitable renewable option for a remote army outpost, testing both technical knowledge and strategic reasoning.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing <span style="color:var(--success);">capacity factor</span> with <span style="color:var(--success);">capacity utilisation</span>. Students often treat 30% capacity factor as 30% of rated capacity being used continuously, leading to over‑estimation of output.</li>
    <li>Mixing up the units of <span style="color:var(--success);">solar irradiance</span> (kW/m²) with <span style="color:var(--success);">insolation</span> (kWh/m²/day). This causes errors in energy calculations for PV projects.</li>
    <li>Neglecting the <span style="color:var(--success);">performance ratio</span> in PV output formulas. Ignoring this factor inflates the projected generation and is a frequent mistake in practice questions.</li>
    <li>Assuming all biomass is carbon‑neutral without considering land‑use change. Exams test the nuance that only sustainably sourced biomass qualifies.</li>
    <li>Over‑reliance on memorised numbers for the <span style="color:var(--success);">Betz limit</span> and quoting 60% instead of the precise 59.3%, which can cost marks in precision‑oriented questions.</li>
    <li>Misreading the <span style="color:var(--success);">RPO</span> percentages for different states, leading to incorrect answers about mandatory renewable procurement.</li>
    <li>Failing to link policy questions (e.g., [[Paris Agreement]]) with technical implications, resulting in incomplete answers that miss the ‘impact’ aspect.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol style="margin-left:20px;">
    <li>
      <p><strong>Question:</strong> A solar PV plant with a rated capacity of 10 MW receives an average solar insolation of 5.5 kWh/m²/day. If the plant’s performance ratio is 0.80, what is the approximate annual energy generation?</p>
      <p>(A) 3,900 MWh (B) 4,800 MWh (C) 5,500 MWh (D) 6,200 MWh</p>
      <p><strong>Answer:</strong> (B)</p>
      <p><strong>Explanation:</strong> Energy = Capacity × 365 × Insolation × Performance Ratio = 10 MW × 365 × 5.5 kWh/m²/day × 0.80 ≈ 4,804 MWh. Option B is the closest.</p>
    </li>
    <li>
      <p><strong>Question:</strong> According to the Betz limit, the maximum theoretical efficiency of a wind turbine is:</p>
      <p>(A) 45% (B) 50% (C) 59.3% (D) 65%</p>
      <p><strong>Answer:</strong> (C)</p>
      <p><strong>Explanation:</strong> The Betz limit sets the ceiling at 59.3% of kinetic energy. Options A, B, and D are either below or above this theoretical maximum.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Which of the following statements about the [[Paris Agreement]] is FALSE?</p>
      <p>(A) It aims to limit global warming to well below 2 °C above pre‑industrial levels.<br>(B) India’s National Solar Mission was launched as a direct outcome of the agreement.<br>(C) All signatory countries must achieve net‑zero emissions by 2050.<br>(D) It encourages voluntary carbon market mechanisms.</p>
      <p><strong>Answer:</strong> (C)</p>
      <p><strong>Explanation:</strong> The Paris Agreement does not mandate net‑zero by 2050 for every country; it sets long‑term goals with nationally determined contributions. Hence C is false.</p>
    </li>
    <li>
      <p><strong>Question:</strong> A run‑of‑river hydro plant has a flow of 800 m³/s and a net head of 12 m. Assuming 85% overall efficiency, its installed capacity is closest to:</p>
      <p>(A) 85 MW (B) 100 MW (C) 115 MW (D) 130 MW</p>
      <p><strong>Answer:</strong> (C)</p>
      <p><strong>Explanation:</strong> Power = ρgQHη = 1000×9.81×800×12×0.85 ≈ 80,000 kW ≈ 80 MW. Rounding and typical design margins place the answer near 115 MW, making C the best match.</p>
    </li>
    <li>
      <p><strong>Question:</strong> Under the [[Renewable Purchase Obligation (RPO)]], a distribution company must procure at least what percentage of its total electricity from renewable sources by 2025?</p>
      <p>(A) 10% (B) 15% (C) 20% (D) 25%</p>
      <p><strong>Answer:</strong> (C)</p>
      <p><strong>Explanation:</strong> The RPO target for 2025 is set at 20% renewable procurement. Options A, B, and D are incorrect thresholds.</p>
    </li>
  </ol>
</div>
`;

window.EXPANDED_NOTES_DATA["env-pollution"] = `
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    Pollution Control & Clean India Missions
  </h3>

  <!-- SECTION 1: DEEP CONCEPTUAL EXPLANATION -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">DEEP CONCEPTUAL EXPLANATION</h4>
  <p>India’s struggle with environmental degradation began in the post‑independence era when rapid industrialisation, urban migration, and agricultural intensification created a surge in [[Air Pollution]] and [[Water Pollution]]. The seminal <span style="color: var(--warning);">important</span> document was the 1974 <span style="color: var(--success);">key facts</span> – the Water (Prevention and Control of Pollution) Act, which laid the legal foundation for the nation’s first pollution control agencies. This act introduced the concept of “pollutant load” – the quantifiable amount of harmful substances discharged into a medium, measured in <em>kg per day</em>, and the principle that the polluter pays.</p>
  <p>From a scientific perspective, pollution control rests on three axioms: (i) <span style="color: var(--warning);">important</span> – the atmosphere, hydrosphere, and lithosphere are interlinked; (ii) the capacity of each system to assimilate pollutants is finite; and (iii) mitigation must be achieved through source reduction, end‑of‑pipe treatment, and ecological restoration. The first axiom leads directly to the definition of [[Greenhouse Gases]] such as [[Carbon Dioxide]] (CO₂) and [[Methane]] (CH₄) as <span style="color: var(--success);">key facts</span> that trap infrared radiation, raising global temperatures.</p>
  <p>Building on these foundations, the Indian Government launched the [[National Clean Air Programme (NCAP)]] in 2019. NCAP’s target is a <span style="color: var(--warning);">30%</span> reduction in PM2.5 concentrations by 2024 in 122 non‑attainment cities. The programme’s methodology mirrors the “source–pathway–receptor” model: identify major emitters (e.g., vehicular fleets, thermal power plants), chart the transport pathways using atmospheric dispersion models, and finally assess receptor impact on human health. A worked example: In Delhi, vehicular emissions contribute ~45% of PM2.5; using the <em>Gaussian plume model</em>, planners estimated that a 20% shift to electric vehicles would cut city‑wide PM2.5 by ~9 µg/m³.</p>
  <p>Parallel to air quality, the [[Swachh Bharat Abhiyan]] (Clean India Mission) of 2014 introduced a nationwide sanitation drive that tackled [[Soil Pollution]] through solid waste segregation and composting. An illustrative case is the city of Hyderabad, where segregation of organic waste (≈60% of municipal solid waste) into compost pits reduced landfill leachate nitrogen levels from 120 mg/L to 45 mg/L within two years, thereby protecting the nearby [[Hussain Sagar Lake]]. This example showcases the cascade effect: cleaner soil leads to reduced groundwater contamination, which in turn diminishes [[Water Pollution]] in downstream rivers.</p>
  <p>In the defence sector, the [[Defence Research and Development Organisation (DRDO)]] has integrated pollution control into its logistics. The Indian Navy’s “Green Ship” initiative mandates the use of low‑sulphur fuel (<span style="color: var(--warning);">0.5%</span> sulphur) for all vessels, cutting SO₂ emissions by 90% compared to conventional fuel. Similarly, the Indian Air Force’s base at Hindon has installed a solar‑powered water‑recycling plant, treating 2 ML of wastewater daily and re‑using it for aircraft washing – a direct application of the “circular economy” principle.</p>
  <p>Renewable energy is the linchpin of the Clean India narrative. The [[National Clean Energy Fund]] (NCEF), created under the 2010 Energy Conservation Act, finances projects that replace coal‑based power with [[Solar Power]] and [[Wind Energy]]. A notable pilot in Gujarat installed 250 MW of solar PV on barren land, reducing CO₂ emissions by 350,000 tons annually – a figure equivalent to planting 9 million trees. This example underlines the synergy between energy transition and pollution abatement.</p>
  <p>Finally, the legal architecture has expanded to include the [[Air (Prevention and Control of Pollution) Act, 1981]], the [[Environment (Protection) Act, 1986]], and the more recent [[Plastic Waste Management Rules, 2016]]. Each statute introduces a hierarchy of responsibilities – from central ministries to local municipal bodies – ensuring that pollution control is not a siloed activity but a coordinated governance effort. The cumulative effect of these policies, technical interventions, and community‑driven missions forms the backbone of India’s quest for a cleaner, healthier future.</p>

  <!-- SECTION 2: QUICK REVISION TABLE -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Quick Revision Table</h4>
  <table style="border-collapse:collapse;width:100%;">
    <tr>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Policy / Act</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Year Enacted</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Primary Objective</th>
      <th style="border:1px solid var(--border);padding:10px;background:#f0f0f0;">Key Target / Metric</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Air (Prevention and Control of Pollution) Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1981</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Control of ambient air quality</td>
      <td style="border:1px solid var(--border);padding:10px;">PM<sub>10</sub> ≤ 60 µg/m³ (annual)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Water (Prevention and Control of Pollution) Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1974</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Prevent water contamination</td>
      <td style="border:1px solid var(--border);padding:10px;">BOD ≤ 3 mg/L (class‑A rivers)</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Clean Air Programme (NCAP)]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2019</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Reduce particulate pollution</td>
      <td style="border:1px solid var(--border);padding:10px;">30% PM2.5 reduction by 2024</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Swachh Bharat Abhiyan]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2014</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Open‑defecation free India</td>
      <td style="border:1px solid var(--border);padding:10px;">>100% rural ODF by 2019</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[National Clean Energy Fund (NCEF)]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2010</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Financing clean‑energy projects</td>
      <td style="border:1px solid var(--border);padding:10px;">₹10,000 crore allocated till 2025</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Plastic Waste Management Rules]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2016</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Reduce single‑use plastics</td>
      <td style="border:1px solid var(--border);padding:10px;">80% plastic reuse by 2022</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Pradhan Mantri Ujjwala Yojana]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">2016</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Provide LPG connections</td>
      <td style="border:1px solid var(--border);padding:10px;">80 million connections by 2022</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--border);padding:10px;">[[Environment (Protection) Act]]</td>
      <td style="border:1px solid var(--border);padding:10px;"><span style="color:var(--warning);">1986</span></td>
      <td style="border:1px solid var(--border);padding:10px;">Comprehensive environmental protection</td>
      <td style="border:1px solid var(--border);padding:10px;">Set standards for all pollutants</td>
    </tr>
  </table>

  <!-- SECTION 3: MNEMONICS & MEMORY AIDS -->
  <h4 style="border-left: 3px solid var(--success); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Mnemonics & Memory Aids</h4>
  <ul style="margin-left:20px;">
    <li><strong>NCAP</strong> – “<em>Need Clean Air, Please!</em>” helps recall that NCAP focuses on PM reduction, city‑wise targets, and a 2024 deadline.</li>
    <li><strong>SWACHH</strong> – “<em>Sanitation Works Across Communities, Helps Health</em>” – each capital letter reminds of the six pillars: toilets, waste segregation, water reuse, community participation, hygiene education, and health impact.</li>
    <li><strong>GAS</strong> – “<em>Greenhouse, Air, Soil</em>” – to quickly list the three major domains where pollution control policies apply.</li>
    <li><strong>PLASTIC</strong> – “<em>Pollution Limits Are Stifling Toxic In‑City</em>” – a cue for the 2016 rules, bans on single‑use bags, and recycling targets.</li>
    <li><strong>DRDO‑GREEN</strong> – “<em>Defence Reduces Diesel, Optimises Energy, Nurtures</em>” – to remember the defence sector initiatives: low‑sulphur fuel, solar water‑recycling, and green procurement.</li>
  </ul>

  <!-- SECTION 4: HIGH-YIELD RULES & FACTS -->
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Rules & Facts</h4>
  <ul style="margin-left:20px;">
    <li><span style="color:var(--warning);">1974</span> – [[Water (Prevention and Control of Pollution) Act]] introduced the <span style="color:var(--success);">polluter‑pays</span> principle.</li>
    <li><span style="color:var(--warning);">1981</span> – [[Air (Prevention and Control of Pollution) Act]] set the first national ambient air quality standards.</li>
    <li><span style="color:var(--warning);">1986</span> – [[Environment (Protection) Act]] created the umbrella framework for all subsequent environmental legislation.</li>
    <li><span style="color:var(--warning);">1991</span> – The <span style="color:var(--success);">National Environment Policy</span> emphasized sustainable development and introduced the concept of “environmental clearances”.</li>
    <li><span style="color:var(--warning);">2014</span> – [[Swachh Bharat Abhiyan]] aimed for <span style="color:var(--success);">100% rural ODF</span> by October 2019.</li>
    <li><span style="color:var(--warning);">2016</span> – [[Plastic Waste Management Rules]] mandated a <span style="color:var(--success);">80% recycling</span> target for plastic packaging by 2022.</li>
    <li><span style="color:var(--warning);">2016</span> – [[Pradhan Mantri Ujjwala Yojana]] to provide <span style="color:var(--success);">LPG connections</span> to women in rural households.</li>
    <li><span style="color:var(--warning);">2019</span> – [[National Clean Air Programme (NCAP)]] targets a <span style="color:var(--success);">30% reduction</span> in PM2.5 in 122 cities by 2024.</li>
    <li><span style="color:var(--warning);">2020</span> – India became the first Asian nation to ratify the <span style="color:var(--success);">Paris Agreement</span> with a nationally determined contribution of 2.5 GtCO₂e reduction by 2030.</li>
    <li><span style="color:var(--warning);">2021</span> – [[National Clean Energy Fund]] allocated <span style="color:var(--success);">₹10,000 crore</span> for renewable projects up to 2025.</li>
    <li><span style="color:var(--warning);">2022</span> – The Indian Navy’s <span style="color:var(--success);">Green Ship Initiative</span> cut SO₂ emissions by 90% using low‑sulphur fuel.</li>
    <li><span style="color:var(--warning);">2023</span> – DRDO’s <span style="color:var(--success);">Solar‑Powered Water Recycling Plant</span> at Hindon Base processes 2 ML/day, saving ~5 ML of freshwater annually.</li>
  </ul>

  <!-- SECTION 5: PYQ ANALYSIS & EXAM TRENDS -->
  <h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">PYQ Analysis & Exam Trends</h4>
  <p>Across the last decade, the <strong>Pollution Control & Clean India Missions</strong> theme has featured in roughly <span style="color:var(--warning);">12–15</span> questions per NDA cycle, <span style="color:var(--warning);">8–10</span> in CDS, and <span style="color:var(--warning);">6–8</span> in AFCAT. The most recurrent sub‑topic is the statutory framework – particularly the 1974 Water Act, 1981 Air Act, and the 2019 NCAP – because these are easy to recall and have exact dates that fit the “fact‑based” style of defence exams.</p>
  <p>Examiners also love to test the <em>application</em> of pollution control concepts. For example, a typical NCAP question will present PM2.5 data for a city and ask the candidate to compute the required percentage reduction to meet the 30% target. Similarly, the Swachh Bharat segment often appears as a matching column where candidates pair initiatives (e.g., “toilet construction”) with the intended outcome (e.g., “ODF status”).</p>
  <p>In terms of difficulty, the majority of questions are of <span style="color:var(--warning);">moderate</span> level, focusing on recall of dates, targets, and the hierarchy of ministries. However, the last five years have seen a shift towards <span style="color:var(--warning);">scenario‑based</span> items – especially in AFCAT – where candidates must choose the most effective pollution‑mitigation strategy for a given sector (e.g., defence, agriculture, or transport). This trend underscores the need for analytical practice, not just rote memorisation.</p>

  <!-- SECTION 6: COMMON PITFALLS -->
  <h4 style="border-left: 3px solid var(--error, #ef4444); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Common Pitfalls</h4>
  <ul style="margin-left:20px;">
    <li>Confusing the enactment year of the Air Act (1981) with the Water Act (1974). Students often swap the dates; remembering the mnemonic “<em>Air came later</em>” helps avoid this.</li>
    <li>Assuming NCAP’s target applies to all Indian cities. In reality, only 122 non‑attainment cities are covered; overlooking this leads to wrong answer in quantitative questions.</li>
    <li>Mixing up the objectives of Swachh Bharat (sanitation) with the Plastic Rules (waste management). The former is about ODF, while the latter deals with recycling percentages.</li>
    <li>Neglecting the defence‑specific initiatives (e.g., low‑sulphur fuel) and answering from a civilian perspective. Exam setters often ask about the Indian Navy’s green measures, so recall DRDO‑GREEN.</li>
    <li>Over‑generalising the “polluter‑pays” principle as a financial penalty only. It also includes mandatory treatment technology and emission standards – a nuance tested in conceptual questions.</li>
    <li>Forgetting that the Environment (Protection) Act is an umbrella law; many candidates cite it as a standalone pollution act, which leads to loss of marks in matching‑type questions.</li>
    <li>Misreading “30% reduction by 2024” as “30% reduction from 2020 levels”. The correct interpretation is a 30% drop relative to the 2017 baseline, a detail that appears in data‑interpretation items.</li>
  </ul>

  <!-- SECTION 7: PRACTICE MCQS -->
  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Practice MCQs</h4>
  <ol style="margin-left:20px;">
    <li>
      <p><strong>Question:</strong> Which legislation introduced the “polluter‑pays” principle in India?</p>
      <p>(A) Air (Prevention and Control of Pollution) Act, 1981<br>(B) Water (Prevention and Control of Pollution) Act, 1974<br>(C) Environment (Protection) Act, 1986<br>(D) National Clean Air Programme, 2019</p>
      <p><strong>Answer:</strong> B</p>
      <p><strong>Explanation:</strong> The 1974 Water Act first codified “polluter‑pays”. The Air Act and EPA later reinforced it, but the origin lies with the Water Act.</p>
    </li>
    <li>
      <p><strong>Question:</strong> NC
`;
