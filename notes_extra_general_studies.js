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

EXPANDED_NOTES_DATA["ca-upsc-master-framework"] = `
  <h3>UPSC Core Current Affairs Syllabus Map & Reference Guide</h3>
  <p>This master guide covers the 10 highest-priority, conceptual current affairs domains required for UPSC Civil Services and Defence Exams (NDA/CDS). For each domain, we outline the core syllabus focus, key recent events, and their structural significance.</p>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">1. Indian Polity & Governance (Highest Priority)</h4>
  <ul>
    <li><strong>Constitutional Amendments:</strong> Key legislative shifts such as the <strong>106th Amendment Act (Nari Shakti Vandan Adhiniyam)</strong> reserving 33% seats for women in Lok Sabha and Assemblies, and the <strong>103rd Amendment Act</strong> upholding EWS reservation.</li>
    <li><strong>Federalism Issues:</strong> Disputes over the Office of the Governor (Article 155/200 discretion), devolution of tax revenues (Finance Commission Art 280), and the reconstitution of the Inter-State Council (Article 263).</li>
    <li><strong>Landmark SC Judgments:</strong> <em>Kesavananda Bharati (1973)</em> - Basic Structure; <em>K.S. Puttaswamy (2017)</em> - Right to Privacy (Art 21); <em>SR Bommai (1994)</em> - Guidelines on President's Rule (Art 356); <em>Navtej Johar (2018)</em> - Section 377.</li>
    <li><strong>Parliamentary Bills & Election Reforms:</strong> Delimitation Commission rules (Article 82), Chief Election Commissioner appointment procedures (CEC Act 2023), and the "One Nation One Election" debate.</li>
    <li><strong>Constitutional & Statutory Bodies:</strong> Election Commission (ECI), National Human Rights Commission (NHRC), and NITI Aayog (cooperative federalism).</li>
    <li><strong>Digital Governance:</strong> Implementation of the <strong>Digital Personal Data Protection (DPDP) Act</strong> and the establishment of the Data Protection Board.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">2. Economy</h4>
  <ul>
    <li><strong>Inflation & Monetary Policy:</strong> Consumer Price Index (CPI) vs. Wholesale Price Index (WPI), Core Inflation, and the RBI's Monetary Policy Committee (MPC) repo rate operations.</li>
    <li><strong>Fiscal Health:</strong> Fiscal Deficit vs. Revenue Deficit, capital expenditure (CapEx) push, and FRBM Act compliance.</li>
    <li><strong>Digital Economy:</strong> Central Bank Digital Currency (CBDC / e-Rupee) design, Unified Payments Interface (UPI) infrastructure, and UPI internationalization (France, Mauritius, Sri Lanka).</li>
    <li><strong>Agriculture Economics:</strong> Minimum Support Price (MSP) calculations (A2+FL vs. C2 formulations), buffer stock policies, and green finance/sovereign green bonds.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">3. Environment & Ecology (Extremely Important)</h4>
  <ul>
    <li><strong>Climate Agreements & COPs:</strong> COP28 Dubai outcomes (Loss and Damage Fund, first Global Stocktake), and India's updated NDCs (500 GW non-fossil capacity by 2030, Net-Zero by 2070).</li>
    <li><strong>Conservation Sites:</strong> Designation of new <strong>Ramsar Wetlands</strong> (taking the total to 85+), Biosphere Reserves under UNESCO's MAB Programme, and National Parks.</li>
    <li><strong>Species in News & Conventions:</strong> IUCN Red List categories (e.g., Great Indian Bustard - Critically Endangered, Gharial - Critically Endangered), and conventions like the UNFCCC and Convention on Biological Diversity (CBD) 30x30 Target.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">4. International Relations (High Priority)</h4>
  <ul>
    <li><strong>Bilateral Strategic Relations:</strong> India-US iCET (Initiative on Critical and Emerging Technology), India-France Rafale and naval project acquisitions, and India-Russia energy diplomacy.</li>
    <li><strong>Strategic Corridors & Borders:</strong> India-China LAC border management protocols, Chabahar Port (Iran) operationalization, and the India-Middle East-Europe Economic Corridor (IMEC).</li>
    <li><strong>International Organisations:</strong> BRICS expansion, Shanghai Cooperation Organisation (SCO), ASEAN-India summits, and the Quadrilateral Security Dialogue (Quad).</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">5. Science & Technology</h4>
  <ul>
    <li><strong>Applied Frontiers:</strong> Generative AI, India Semiconductor Mission (establishing commercial fabs in Gujarat), National Quantum Mission, and Zero-Trust Cybersecurity.</li>
    <li><strong>Space Programs (ISRO):</strong> Chandrayaan-3 (South Pole landing, Shiv Shakti Point), Aditya-L1 (solar Lagrangian point L1 study), Gaganyaan (crewed orbital flight), and NISAR (radar imaging).</li>
    <li><strong>Biotech & Energy:</strong> CRISPR-Cas9 gene editing applications, National Green Hydrogen Mission (hubs), and India's 3-stage nuclear power program.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">6. Security & Internal Security</h4>
  <ul>
    <li><strong>Border Management:</strong> Smart fencing along the Indo-Myanmar border, suspension of the Free Movement Regime (FMR), and the Vibrant Villages Programme (VVP) along the LAC.</li>
    <li><strong>Cyber & Maritime Security:</strong> Combatting ransomware, Defence Cyber Command (DCyC) setup, Indian Ocean Region (IOR) security, anti-piracy patrols, and FATF monitoring.</li>
    <li><strong>Defence Reforms & Indigenisation:</strong> Chief of Defence Staff (CDS) role, Positive Indigenisation Lists, and the roadmap for Tri-Services Unified Theater Commands.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">7. Social Issues & Society</h4>
  <ul>
    <li><strong>Women, Health & Nutrition:</strong> Maternal Mortality Ratio (MMR) trends, POSHAN Abhiyaan 2.0, and gender parity in higher education.</li>
    <li><strong>Demographics & Education:</strong> India's demographic dividend window (peak working-age ratio), National Education Policy (NEP 2020) implementation, and Multi-dimensional Poverty Index (MPI).</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">8. Agriculture</h4>
  <ul>
    <li><strong>Infrastructure & Technology:</strong> PM Fasal Bima Yojana (crop insurance), PM Krishi Sinchayee Yojana (micro-irrigation), Kisan Drones for fertilizer spraying, and Soil Health Cards.</li>
    <li><strong>Food Security:</strong> Global Millets (Shree Anna) promotion, National Food Security Act (NFSA) provisions, and post-harvest supply chain development.</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">9. Geography-linked Current Affairs</h4>
  <ul>
    <li><strong>Strategic Chokepoints & Seas:</strong> Red Sea Bab-el-Mandeb conflict zones, Strait of Malacca transit security, and Persian Gulf tension lines.</li>
    <li><strong>Climate Phenomena:</strong> El Niño-Southern Oscillation (ENSO) and Indian Ocean Dipole (IOD) impacts on Indian monsoons.</li>
    <li><strong>Polar Studies:</strong> India's research stations in the Antarctic (Maitri, Bharati) and Arctic (Himadri).</li>
  </ul>

  <h4 style="color: var(--accent); margin-top: 18px; margin-bottom: 8px;">10. Reports, Indices, Organisations</h4>
  <ul>
    <li><strong>Global Institutions:</strong> IMF World Economic Outlook, World Bank Business Ready (B-READY), UNDP Human Development Index (HDI), and the Global Hunger Index.</li>
  </ul>
`;

