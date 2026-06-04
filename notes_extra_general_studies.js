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

