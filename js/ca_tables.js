// 15. DYNAMIC CURRENT AFFAIRS VISITS VIEW
// ==========================================
function toggleCurrentAffairsMode(mode) {
  const monthlyContainer = document.getElementById("ca-monthly-feed-container");
  const visitsContainer  = document.getElementById("ca-visits-container");
  const ftaContainer     = document.getElementById("ca-fta-container");
  const datesContainer   = document.getElementById("ca-dates-container");
  const btnMonthly = document.getElementById("btn-ca-mode-monthly");
  const btnVisits  = document.getElementById("btn-ca-mode-visits");
  const btnFta     = document.getElementById("btn-ca-mode-fta");
  const btnDates   = document.getElementById("btn-ca-mode-dates");

  [monthlyContainer, visitsContainer, ftaContainer, datesContainer].forEach(el => { if (el) el.style.display = "none"; });
  [btnMonthly, btnVisits, btnFta, btnDates].forEach(btn => { if (btn) btn.classList.remove("active"); });

  if (mode === "monthly") {
    if (monthlyContainer) monthlyContainer.style.display = "flex";
    if (btnMonthly) btnMonthly.classList.add("active");
  } else if (mode === "visits") {
    if (visitsContainer) visitsContainer.style.display = "block";
    if (btnVisits) btnVisits.classList.add("active");
    renderCaVisitsTable();
  } else if (mode === "fta") {
    if (ftaContainer) ftaContainer.style.display = "block";
    if (btnFta) btnFta.classList.add("active");
    renderCaFtaTable();
  } else if (mode === "dates") {
    if (datesContainer) datesContainer.style.display = "block";
    if (btnDates) btnDates.classList.add("active");
    renderCaDatesTable();
  }
}
window.toggleCurrentAffairsMode = toggleCurrentAffairsMode;


function renderCaVisitsTable() {
  const wrapper = document.getElementById("ca-visits-table-wrapper");
  if (!wrapper) return;

  const meta   = window.CA_META   || {};
  const visits = window.CA_VISITS_DATA || [];

  // Update panel header with current exam cycle
  const cycle = getExamCycleBounds();
  const titleEl = document.getElementById("ca-visits-panel-title");
  if (titleEl) titleEl.textContent = `International Visits & Bilateral Deals — Exam Cycle: ${cycle.cycleLabel}`;

  if (visits.length === 0) {
    wrapper.innerHTML = `<p style="color: var(--text-secondary); padding: 20px;">No visit data loaded for this exam cycle. Update CA_VISITS_DATA in ca_data.js.</p>`;
    return;
  }

  const th = (txt) => `<th style="padding:12px; border:1px solid var(--border); text-align: left;">${txt}</th>`;
  const td = (txt) => `<td style="padding:10px; border:1px solid var(--border);">${txt}</td>`;
  const headerRow = `<tr style="background-color: rgba(34,197,94,0.15); color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--border);">` +
    th("Visit &amp; Dignitary") + th("Period / Purpose") + th("Key Deals &amp; Agreements") + `</tr>`;

  const rows = visits.map(v =>
    `<tr style="border-bottom: 1px solid var(--border);">` +
    td(`<strong>${parseWikiLinks(v.visit)}</strong>`) +
    td(`<strong>${v.period}:</strong> ${parseWikiLinks(v.purpose)}`) +
    td(parseWikiLinks(v.deals)) +
    `</tr>`
  ).join("");

  wrapper.innerHTML = `<table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem; border: 1px solid var(--border);">${headerRow}${rows}</table>`;
}

// Data-driven renderer — reads from window.CA_FTA_DATA in ca_data.js
function renderCaFtaTable() {
  const wrapper = document.getElementById("ca-fta-table-wrapper");
  if (!wrapper) return;

  const meta = window.CA_META   || {};
  const ftas = window.CA_FTA_DATA || [];

  const cycle2 = getExamCycleBounds();
  const titleEl2 = document.getElementById("ca-fta-panel-title");
  if (titleEl2) titleEl2.textContent = `Trade Deals & FTAs — Exam Cycle: ${cycle2.cycleLabel} (Last Refreshed: ${meta.lastRefreshed || ""})`;

  if (ftas.length === 0) {
    wrapper.innerHTML = `<p style="color: var(--text-secondary); padding: 20px;">No FTA data loaded. Update CA_FTA_DATA in ca_data.js.</p>`;
    return;
  }

  const statusColor = (s) => {
    const sl = s.toLowerCase();
    if (sl.includes("in force") || sl.includes("ratified") || sl.includes("concluded")) return "color:#22c55e; font-weight:bold;";
    if (sl.includes("suspended")) return "color:#ef4444; font-weight:bold;";
    return "color:#f59e0b; font-weight:bold;";
  };

  const th = (txt, w) => `<th style="padding:12px; border:1px solid var(--border); text-align: left; width:${w};">${txt}</th>`;
  const headerRow = `<tr style="background-color: rgba(34,197,94,0.15); color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--border);">` +
    th("Deal / Agreement", "30%") + th("Status", "18%") + th("Key Scope", "30%") + th("Strategic Significance", "22%") + `</tr>`;

  const rows = ftas.map(f =>
    `<tr style="border-bottom: 1px solid var(--border);">` +
    `<td style="padding:10px; border:1px solid var(--border);"><strong>${parseWikiLinks(f.deal)}</strong></td>` +
    `<td style="padding:10px; border:1px solid var(--border);"><span style="${statusColor(f.status)}">${parseWikiLinks(f.status)}</span></td>` +
    `<td style="padding:10px; border:1px solid var(--border);">${parseWikiLinks(f.scope)}</td>` +
    `<td style="padding:10px; border:1px solid var(--border); font-style:italic; color: var(--text-secondary);">${parseWikiLinks(f.significance)}</td>` +
    `</tr>`
  ).join("");

  wrapper.innerHTML = `<table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.88rem; border: 1px solid var(--border);">${headerRow}${rows}</table>`;
}

// Data-driven renderer — reads from window.CA_DATES_DATA in ca_data.js
function renderCaDatesTable() {
  const wrapper = document.getElementById("ca-dates-table-wrapper");
  if (!wrapper) return;

  const meta  = window.CA_META || {};
  const dates = window.CA_DATES_DATA || [];

  const titleEl = document.getElementById("ca-dates-panel-title");
  if (titleEl) titleEl.textContent = `Important Dates & Themes — ${meta.examCycle || "2026"}`;

  if (dates.length === 0) {
    wrapper.innerHTML = `<p style="color: var(--text-secondary); padding: 20px;">No dates data loaded. Update CA_DATES_DATA in ca_data.js.</p>`;
    return;
  }

  const year = new Date().getFullYear();
  const th = (txt, w) => `<th style="padding:12px; border:1px solid var(--border); text-align: left; width:${w};">${txt}</th>`;
  const headerRow = `<tr style="background-color: rgba(34,197,94,0.15); color: var(--accent); font-weight: bold; border-bottom: 2px solid var(--border);">` +
    th("Date", "10%") + th("Day / Event", "25%") + th(`${year} Theme`, "25%") + th("Significance & Deep Analysis", "40%") + `</tr>`;

  const rows = dates.map((d, index) => {
    const themeCell = d.theme
      ? `<strong>${parseWikiLinks(d.theme)}</strong>`
      : `<span style="color: var(--text-muted); font-style: italic;">No official theme declared for ${year}</span>`;
      
    const significanceCell = `
      <div>
        <div style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 8px;">
          ${parseWikiLinks(d.significance)}
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <button onclick="window.streamDetailedDateAnalysis('${d.name.replace(/'/g, "\\'")}', '${d.date.replace(/'/g, "\\'")}', 'ca-date-deep-${index}')" class="btn-primary" style="padding: 4px 10px; font-size: 0.72rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px; background: rgba(168, 85, 247, 0.15); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; cursor: pointer;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> Generate Cadet Deep Dive (10-15 Paragraphs)
          </button>
        </div>
        <div id="ca-date-deep-${index}" style="display: none; margin-top: 10px; padding: 12px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; font-size: 0.85rem; line-height: 1.6; color: var(--text-secondary);">
          <!-- Dynamic stream -->
        </div>
      </div>
    `;

    return `<tr style="border-bottom: 1px solid var(--border);">` +
      `<td style="padding:10px; border:1px solid var(--border);">${d.date}</td>` +
      `<td style="padding:10px; border:1px solid var(--border);"><strong>${parseWikiLinks(d.name)}</strong></td>` +
      `<td style="padding:10px; border:1px solid var(--border);">${themeCell}</td>` +
      `<td style="padding:10px; border:1px solid var(--border);">${significanceCell}</td>` +
      `</tr>`;
  }).join("");

  wrapper.innerHTML = `<table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem; border: 1px solid var(--border);">${headerRow}${rows}</table>`;
}

async function streamDetailedDateAnalysis(dateName, dateValue, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.style.display = 'block';
  container.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px; color: var(--accent); font-family: var(--font-mono); font-size: 0.75rem;">
      <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 14px; height: 14px; border-width: 2px;"></div>
      DRONACHARYA IS CONSTRUCTING DEEP DIVE BRIEFING (10-15 PARAGRAPHS)...
    </div>
  `;

  const prompt = `You are Dronacharya, the legendary military guru and expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT, CAPF, UPSC).
Provide a highly comprehensive, deep-dive explanation of the significance of the important date: "${dateName}" (observed on ${dateValue}).

Detailed Notes on this date must not be short summaries. You MUST structure your explanation into 12 detailed sections, writing at least 10 to 15 well-written explanatory paragraphs in total:
1. ORIGIN: Where and how this day originated.
2. HISTORICAL BACKGROUND: The history behind it.
3. PURPOSE: Why it was established.
4. KEY EVENTS: Major milestones associated with it.
5. INTERNATIONAL SIGNIFICANCE: Global impact.
6. NATIONAL SIGNIFICANCE: Relevance to India.
7. MILITARY SIGNIFICANCE: Strategic/operational military importance (if applicable, else general defence significance).
8. ECONOMIC IMPACT: Trade, finance, budget impact of related policies.
9. SOCIAL IMPACT: Societal changes or awareness.
10. CURRENT RELEVANCE: Modern significance.
11. INTERESTING FACTS: 3-5 unique, lesser-known facts.
12. EXAM RELEVANCE: How it is tested in NDA/CDS/AFCAT/UPSC.

Ensure you wrap important terms, sub-topics, agencies, or events in double square brackets, e.g. [[Ramsar Convention]] or [[Mahatma Gandhi]] or [[Operation Shakti]], so they act as interactive smart context links.
Do not use any emojis in your response. Keep the tone professional, scholarly, and authoritative.`;

  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gemini-2.5-flash',
        stream: true,
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok || !response.body) {
      throw new Error("Failed to connect to Dronacharya Intelligence Server.");
    }

    container.innerHTML = `
      <div style="border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: bold; color: var(--accent); font-family: var(--font-mono); font-size: 0.75rem;">CADET BRIEFING: ${dateName}</span>
        <button onclick="this.parentElement.parentElement.style.display='none'" style="background: transparent; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.8rem;">[Hide]</button>
      </div>
      <div class="stream-text-area" style="max-height: 400px; overflow-y: auto; padding-right: 8px;"></div>
    `;
    const streamTextArea = container.querySelector('.stream-text-area');

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = "";
    let finalText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;

      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const dataStr = line.replace('data: ', '').trim();
            if (dataStr && dataStr !== '[DONE]') {
              const parsed = JSON.parse(dataStr);
              if (parsed.candidates && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
                finalText += parsed.candidates[0].content.parts[0].text;
                
                // Format paragraphs nicely
                let formatted = finalText
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/\n\n/g, '<br/><br/>')
                  .replace(/\n/g, '<br/>');

                streamTextArea.innerHTML = parseWikiLinks(formatted);
              }
            }
          } catch(e) {}
        }
      }
    }

    if (window.MathJax && typeof window.MathJax.typeset === 'function') {
      window.MathJax.typeset();
    }
  } catch (err) {
    container.innerHTML = `<span style="color: var(--danger); font-size: 0.8rem;">Guru uplink failed: ${err.message}</span>`;
  }
}

window.toggleCurrentAffairsMode = toggleCurrentAffairsMode;
window.renderCaVisitsTable = renderCaVisitsTable;
window.renderCaFtaTable = renderCaFtaTable;
window.renderCaDatesTable = renderCaDatesTable;


// ==========================================