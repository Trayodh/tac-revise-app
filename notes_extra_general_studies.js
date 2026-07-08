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
