// 9. CURRENT AFFAIRS (CA) SCREEN MODULE
// ==========================================

const CA_CYCLES_CONFIG = {
  AFCAT: {
    label: "AFCAT",
    months: ["February", "March", "April", "May", "June", "July", "August"],
    shortLabel: "FEB '26\n-\nAUG '26",
    examDate: new Date("2026-08-08T00:00:00")
  },
  NDA_CDS: {
    label: "NDA / CDS",
    months: ["April", "May", "June", "July", "August", "September"],
    shortLabel: "APR '26\n-\nSEP '26",
    examDate: new Date("2026-09-12T00:00:00")
  }
};

let activeCaCycle = localStorage.getItem('activeCaCycle');
if (!activeCaCycle || !CA_CYCLES_CONFIG[activeCaCycle]) {
  const now = new Date();
  if (now <= CA_CYCLES_CONFIG.AFCAT.examDate && now <= CA_CYCLES_CONFIG.NDA_CDS.examDate) {
    activeCaCycle = CA_CYCLES_CONFIG.AFCAT.examDate < CA_CYCLES_CONFIG.NDA_CDS.examDate ? 'AFCAT' : 'NDA_CDS';
  } else if (now <= CA_CYCLES_CONFIG.AFCAT.examDate) {
    activeCaCycle = 'AFCAT';
  } else if (now <= CA_CYCLES_CONFIG.NDA_CDS.examDate) {
    activeCaCycle = 'NDA_CDS';
  } else {
    activeCaCycle = 'AFCAT'; // Default fallback
  }
  localStorage.setItem('activeCaCycle', activeCaCycle);
}

/**
 * Returns the current exam cycle bounds based on CA_CYCLES_CONFIG and activeCaCycle.
 */
function getExamCycleBounds() {
  const config = CA_CYCLES_CONFIG[activeCaCycle];
  const year = config.examDate.getFullYear();
  const months = config.months.map(m => `${m} ${year}`);
  
  return { 
    cycleLabel: config.shortLabel.replace(/\n/g, ' '), 
    months 
  };
}
window.getExamCycleBounds = getExamCycleBounds;

let activeCaMonth = ""; // Will be auto-selected based on active cycle


let isFetchingDailyNews = false;
let hasFetchedDailyNews = false;
let lastFetchedNewsDate = '';
let fetchStartTime = 0;

function fetchDailyCurrentAffairs() {
  // Reset daily so we re-fetch new news each day
  const todayStr = new Date().toISOString().split('T')[0];
  if (lastFetchedNewsDate !== todayStr) {
    hasFetchedDailyNews = false;
    lastFetchedNewsDate = todayStr;
  }
  
  // Auto-reset if a previous fetch got stuck for more than 90 seconds
  if (isFetchingDailyNews && Date.now() - fetchStartTime > 90000) {
    console.warn('[CA] Fetch timeout — resetting flags and retrying...');
    isFetchingDailyNews = false;
  }
  if (isFetchingDailyNews || hasFetchedDailyNews) return;
  isFetchingDailyNews = true;
  fetchStartTime = Date.now();
  
  const pane = document.getElementById("ca-content-pane");
  if (pane) {
    pane.innerHTML = `<div style="text-align: center; margin-top: 40px; padding: 30px;">
      <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 48px; height: 48px; border-width: 4px; margin: 0 auto 20px;"></div>
      <p style="color: var(--accent); font-family: var(--font-mono); letter-spacing: 1px; font-weight: 700; font-size: 0.95rem;">RETRIEVING INTELLIGENCE BRIEFING</p>
      <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 8px;">Scanning PIB · Google News · 10 UPSC Topic Areas</p>
      <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 6px;">AI enriching with UPSC highlights — this may take 15-30 seconds...</p>
    </div>`;
  }

  fetch('/api/daily-current-affairs')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        const monthStr = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
        
        if (!window.CURRENT_AFFAIRS_DB[monthStr]) {
          const newDb = { [monthStr]: data };
          Object.assign(newDb, window.CURRENT_AFFAIRS_DB);
          const oldKeys = Object.keys(window.CURRENT_AFFAIRS_DB);
          oldKeys.forEach(k => delete window.CURRENT_AFFAIRS_DB[k]);
          Object.assign(window.CURRENT_AFFAIRS_DB, newDb);
        } else {
          // Avoid duplicating identical entries if fetching happens again during dev
          const existingSummaries = window.CURRENT_AFFAIRS_DB[monthStr].map(i => i.summary);
          const newData = data.filter(item => !existingSummaries.includes(item.summary));
          window.CURRENT_AFFAIRS_DB[monthStr] = [...newData, ...window.CURRENT_AFFAIRS_DB[monthStr]];
        }
        
        activeCaMonth = monthStr;
      }
      isFetchingDailyNews = false;
      hasFetchedDailyNews = true;
      renderCurrentAffairsHub();
    })
    .catch(err => {
      console.error("Failed to fetch daily news:", err);
      isFetchingDailyNews = false;
      hasFetchedDailyNews = true;
      if (pane) pane.innerHTML = `<p style="color: var(--danger); padding: 20px;">Secure uplink failed. Could not retrieve today's intelligence.</p>`;
      setTimeout(() => renderCurrentAffairsHub(), 3000);
    });
}

function renderCurrentAffairsHub() {
  if (!hasFetchedDailyNews && !isFetchingDailyNews) {
    fetchDailyCurrentAffairs();
    return;
  }

  const cycle = getExamCycleBounds();

  // Filter DB keys to only those within the current exam cycle
  const allKeys  = Object.keys(window.CURRENT_AFFAIRS_DB);
  const cycleKeys = allKeys.filter(k => cycle.months.includes(k));
  // If no data falls in current cycle, fall back to all keys (graceful degradation)
  const keys = cycleKeys.length > 0 ? cycleKeys : allKeys;

  // Auto-select a month: prefer current month → first month in cycle → fallback first key
  if (!keys.includes(activeCaMonth)) {
    const currentMonthStr = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
    if (keys.includes(currentMonthStr)) {
      activeCaMonth = currentMonthStr;
    } else if (keys.length > 0) {
      activeCaMonth = keys[keys.length - 1]; // latest month in cycle
    }
  }

  const monthsList = document.getElementById("ca-month-list");
  monthsList.innerHTML = "";

  // Interactive Cycle Card selector at top of sidebar
  const cycleCard = document.createElement("div");
  cycleCard.className = "panel glow";
  cycleCard.style.cssText = "padding: 12px; margin-bottom: 16px; background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2); border-radius: 8px; text-align: center; cursor: pointer; transition: all 0.2s; user-select: none;";
  
  const config = CA_CYCLES_CONFIG[activeCaCycle];
  cycleCard.innerHTML = `
    <div style="font-size: 0.65rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">CURRENT CYCLE</div>
    <div style="font-size: 1.1rem; color: var(--accent); font-weight: 800; font-family: var(--font-mono); margin-bottom: 6px;">${config.label}</div>
    <div style="font-size: 0.75rem; color: var(--text-secondary); font-family: var(--font-mono); line-height: 1.4;">${config.shortLabel.replace(/\n/g, '<br>')}</div>
  `;
  
  cycleCard.addEventListener('click', () => {
    activeCaCycle = activeCaCycle === 'AFCAT' ? 'NDA_CDS' : 'AFCAT';
    localStorage.setItem('activeCaCycle', activeCaCycle);
    
    // reset active month to force re-evaluation of best month in new cycle
    activeCaMonth = ""; 
    renderCurrentAffairsHub();
  });
  cycleCard.onmouseover = () => cycleCard.style.background = 'rgba(34,197,94,0.15)';
  cycleCard.onmouseout = () => cycleCard.style.background = 'rgba(34,197,94,0.08)';
  
  monthsList.appendChild(cycleCard);

  // Render only cycle-relevant months in sorted order
  cycle.months
    .filter(m => keys.includes(m))
    .forEach(month => {
      const item = document.createElement("div");
      item.className = `month-item ${month === activeCaMonth ? 'active' : ''}`;
      item.innerText = month;
      item.addEventListener("click", () => {
        activeCaMonth = month;
        renderCurrentAffairsHub();
      });
      monthsList.appendChild(item);
    });

  renderCurrentMonthAffairs();
}

function isArticleForCycle(article, cycleConfig, monthStr) {
  const text = ((article.text || '') + ' ' + (article.summary || '') + ' ' + (article.details ? JSON.stringify(article.details) : '')).toLowerCase();
  const topic = (article.topic || '').toLowerCase();
  const isAFCAT = cycleConfig === 'AFCAT';
  const isNDACDS = cycleConfig === 'NDA_CDS';

  const isAirForce = topic.includes('air force') || topic.includes('iaf') || topic.includes('aviation');
  const isArmyNaval = topic.includes('army') || topic.includes('navy') || topic.includes('naval') || topic.includes('military');

  let day = -1;
  if (monthStr.includes('April')) {
    const m = text.match(/\b([1-9]|[1-2][0-9]|3[0-1])\s*(?:th|st|nd|rd)?\s+april\b/) || text.match(/\bapril\s+([1-9]|[1-2][0-9]|3[0-1])\b/);
    if (m) day = parseInt(m[1]);
    
    if (day !== -1) {
      if (day <= 12) {
        if (isAFCAT) return true;
        if (isNDACDS && isArmyNaval && !isAirForce) return true;
        return false;
      } else {
        if (isNDACDS) return true;
        if (isAFCAT && isAirForce) return true;
        return false;
      }
    }
  } else if (monthStr.includes('August')) {
    const m = text.match(/\b([1-9]|[1-2][0-9]|3[0-1])\s*(?:th|st|nd|rd)?\s+august\b/) || text.match(/\baugust\s+([1-9]|[1-2][0-9]|3[0-1])\b/);
    if (m) day = parseInt(m[1]);
    
    if (day !== -1) {
      if (day <= 8) {
        return true;
      } else {
        if (isNDACDS) return true;
        if (isAFCAT) return false;
      }
    }
  } else if (monthStr.includes('September')) {
    if (isAFCAT) return false;
  }
  
  return true;
}

function renderCurrentMonthAffairs() {
  const pane = document.getElementById("ca-content-pane");
  let data = window.CURRENT_AFFAIRS_DB[activeCaMonth] || [];
  
  data = data.filter(item => isArticleForCycle(item, activeCaCycle, activeCaMonth));

  if (data.length === 0) {
    pane.innerHTML = `<p style="color:var(--text-secondary); padding:20px 0;">No current affairs registered for this month.</p>`;
    return;
  }

  // Inline SVG icons (no emojis)
  const SVG_FACTS   = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const SVG_INST    = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V9l9-7 9 7v13"/><path d="M9 22V12h6v10"/></svg>`;
  const SVG_TARGET  = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
  const SVG_QUIZ    = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`;

  // Topic distribution summary
  const topicCounts = {};
  data.forEach(item => { const t = item.topic || 'General'; topicCounts[t] = (topicCounts[t] || 0) + 1; });

  let html = `
    <div style="margin-bottom:20px;">
      <h2 style="margin:0 0 4px; font-size:1.2rem; font-weight:700; letter-spacing:0.3px;">Current Affairs — ${activeCaMonth}</h2>
      <p style="margin:0 0 12px; font-size:0.82rem; color:var(--text-muted); font-family:var(--font-mono); letter-spacing:0.5px;">PIB + NEWS · AI-ENRICHED · ${data.length} ITEMS · CYCLE: ${getExamCycleBounds().cycleLabel}</p>
      <p style="margin:0 0 12px; font-size:0.75rem; color:var(--info); font-style:italic; opacity: 0.9;">Update Schedule: Refreshes daily with new intelligence briefs.</p>
      <div style="display:flex; gap:5px; flex-wrap:wrap;">
        ${Object.entries(topicCounts).map(([t,c]) => {
          const safeTopic = (t || 'General').toUpperCase().replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
          return `<span onclick="document.getElementById('topic-${safeTopic}')?.scrollIntoView({behavior: 'smooth', block: 'start'})" onmouseover="this.style.background='rgba(255,255,255,0.12)'" onmouseout="this.style.background='rgba(255,255,255,0.06)'" style="cursor:pointer; font-family:var(--font-mono); font-size:0.65rem; font-weight:600; padding:2px 7px; border-radius:3px; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); letter-spacing:0.4px; white-space:nowrap; text-transform:uppercase; transition:background 0.2s;">${t}&thinsp;·&thinsp;${c}</span>`;
        }).join('')}
      </div>
    </div>
    <div style="height:1px; background:var(--border); margin-bottom:22px;"></div>
  `;

  function getTopicColor(topicStr, itemTopicColor) {
    if (itemTopicColor && /^#[0-9A-Fa-f]{3,6}$/.test(itemTopicColor)) return itemTopicColor;
    if (!topicStr) return '#64748b';
    const t = topicStr.toLowerCase();
    if (t.includes('polity') || t.includes('govern')) return '#4f46e5';
    if (t.includes('econom') || t.includes('financ')) return '#0891b2';
    if (t.includes('defence') || t.includes('securit') || t.includes('military')) return '#dc2626';
    if (t.includes('appointment')) return '#b45309';
    if (t.includes('international') || t.includes('relation') || t.includes('foreign')) return '#7c3aed';
    if (t.includes('environ') || t.includes('ecolog') || t.includes('climat')) return '#059669';
    if (t.includes('science') || t.includes('technolog') || t.includes('space')) return '#d97706';
    if (t.includes('social') || t.includes('welfare')) return '#db2777';
    if (t.includes('history') || t.includes('cultur') || t.includes('heritage')) return '#92400e';
    if (t.includes('geograph') || t.includes('disaster')) return '#0369a1';
    if (t.includes('sport')) return '#0d9488';   // teal for Sports
    if (t.includes('award')) return '#6d28d9';
    return '#64748b';
  }

  let topicSeen = new Set();
  data.forEach(item => {
    const topicColor = getTopicColor(item.topic, item.topicColor);
    const topicLabel = (item.topic || 'General').toUpperCase();
    const safeTopic = topicLabel.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    
    let idAttr = '';
    if (!topicSeen.has(safeTopic)) {
      topicSeen.add(safeTopic);
      idAttr = ` id="topic-${safeTopic}"`;
    }
    
    const mainText   = item.text || item.summary || '';

    // UPSC Key Facts block
    let upscBox = '';
    if (item.upscHighlights && item.upscHighlights.length > 0) {
      const highlights = item.upscHighlights.filter(h => h && h.length > 5);
      if (highlights.length > 0) {
        upscBox = `
          <div style="margin-top:14px; padding:11px 14px; background:rgba(255,210,0,0.06); border:1px solid rgba(255,210,0,0.2); border-left:3px solid rgba(255,210,0,0.65); border-radius:0 5px 5px 0;">
            <div style="display:flex; align-items:center; gap:5px; font-size:0.67rem; font-weight:700; letter-spacing:1px; color:rgba(255,200,50,0.85); margin-bottom:8px; text-transform:uppercase; font-family:var(--font-mono);">
              <span style="color:rgba(255,200,50,0.85);">${SVG_FACTS}</span> UPSC Key Facts
            </div>
            <ul style="margin:0; padding-left:16px; display:flex; flex-direction:column; gap:5px; list-style:disc;">
              ${highlights.map(h => `<li style="font-size:0.86rem; color:var(--text-primary); line-height:1.55;">${h}</li>`).join('')}
            </ul>
          </div>
        `;
      }
    }

    // Institutional + Strategic block
    let contextBox = '';
    if (item.institutionalContext || item.strategicImportance) {
      contextBox = `
        <div style="margin-top:10px; display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          ${item.institutionalContext ? `
          <div style="padding:9px 11px; background:rgba(${hexToRgb(topicColor)},0.07); border-radius:5px; border:1px solid rgba(${hexToRgb(topicColor)},0.18);">
            <div style="display:flex; align-items:center; gap:4px; font-size:0.65rem; font-weight:700; letter-spacing:0.8px; color:${topicColor}; margin-bottom:4px; text-transform:uppercase; font-family:var(--font-mono);">
              <span>${SVG_INST}</span> Institutional Context
            </div>
            <div style="font-size:0.84rem; color:var(--text-secondary); line-height:1.45;">${item.institutionalContext}</div>
          </div>` : ''}
          ${item.strategicImportance ? `
          <div style="padding:9px 11px; background:rgba(100,116,139,0.08); border-radius:5px; border:1px solid rgba(100,116,139,0.18);">
            <div style="display:flex; align-items:center; gap:4px; font-size:0.65rem; font-weight:700; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:4px; text-transform:uppercase; font-family:var(--font-mono);">
              <span style="color:var(--text-muted);">${SVG_TARGET}</span> UPSC Relevance
            </div>
            <div style="font-size:0.84rem; color:var(--text-secondary); line-height:1.45;">${item.strategicImportance}</div>
          </div>` : ''}
        </div>
      `;
    }

    // Source Transparency block
    let sourceTransparencyBox = '';
    if (item.originalSource) {
      sourceTransparencyBox = `
        <div style="margin-top:10px; padding:10px; background:rgba(34,197,94,0.04); border:1px solid rgba(34,197,94,0.15); border-radius:6px; display:flex; flex-direction:column; gap:6px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
            <div style="display:flex; align-items:center; gap:4px; font-size:0.65rem; font-weight:700; letter-spacing:0.8px; color:#4ade80; text-transform:uppercase; font-family:var(--font-mono);">
              <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#4ade80; box-shadow:0 0 6px #4ade80;"></span> 
              Official Source Verification
            </div>
            <span style="font-size:0.65rem; font-weight:700; padding:1px 6px; border-radius:3px; background:rgba(34,197,94,0.12); color:#4ade80; border:1px solid rgba(34,197,94,0.25); font-family:var(--font-mono); text-transform:uppercase;">${item.verificationStatus || 'VERIFIED'}</span>
          </div>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:6px; font-size:0.75rem; color:var(--text-secondary);">
            <div><strong>Source:</strong> <span style="color:var(--text-primary);">${item.originalSource}</span></div>
            <div><strong>Published:</strong> <span style="color:var(--text-primary); font-family:var(--font-mono);">${item.publicationDate || new Date().toISOString().split('T')[0]}</span></div>
            ${item.relatedOfficialDocuments ? `<div><strong>Document Ref:</strong> <span style="color:var(--text-primary); font-style:italic;">${item.relatedOfficialDocuments}</span></div>` : ''}
          </div>
        </div>
      `;
    }

    // Legacy details fallback
    let legacyDetails = '';
    if (!item.upscHighlights && item.details) {
      legacyDetails = `
        <div style="display:grid; grid-template-columns:130px 1fr; gap:5px 14px; margin-top:12px; padding:11px; background:rgba(0,0,0,0.18); border-radius:5px; border-left:3px solid ${topicColor}; font-size:0.86rem;">
          ${item.details.winner    ? `<div style="color:var(--text-muted);font-weight:600;font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.5px;text-transform:uppercase;">Subject</div><div style="font-weight:600;color:var(--text-primary);">${item.details.winner}</div>` : ''}
          ${item.details.award     ? `<div style="color:var(--text-muted);font-weight:600;font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.5px;text-transform:uppercase;">Event</div><div style="color:${topicColor};font-weight:600;">${item.details.award}</div>` : ''}
          ${item.details.nationality ? `<div style="color:var(--text-muted);font-weight:600;font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.5px;text-transform:uppercase;">Location</div><div style="color:var(--text-secondary);">${item.details.nationality}</div>` : ''}
          ${item.details.summary   ? `<div style="color:var(--text-muted);font-weight:600;font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.5px;text-transform:uppercase;">Details</div><div style="color:var(--text-secondary);">${item.details.summary}</div>` : ''}
        </div>
      `;
    }

    html += `
      <div${idAttr} class="panel" style="margin-bottom:16px; border-left:3px solid ${topicColor}; padding:16px 18px; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; right:0; width:100px; height:100px; background:radial-gradient(circle at top right, rgba(${hexToRgb(topicColor)},0.06), transparent 70%); pointer-events:none;"></div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px; flex-wrap:wrap;">
          <span style="font-family:var(--font-mono); font-size:0.65rem; font-weight:700; letter-spacing:0.8px; padding:3px 8px; border-radius:3px; background:${topicColor}1a; border:1px solid ${topicColor}44; color:${topicColor}; text-transform:uppercase; white-space:nowrap;">${topicLabel}</span>
        </div>
        <div style="font-size:0.92rem; line-height:1.65; color:var(--text-primary); font-family:var(--font-main);">${parseWikiLinks(mainText)}</div>
        ${item.upscHighlights && item.upscHighlights.length > 0 ? `
          <div style="margin-top:14px; padding:11px 14px; background:rgba(255,210,0,0.06); border:1px solid rgba(255,210,0,0.2); border-left:3px solid rgba(255,210,0,0.65); border-radius:0 5px 5px 0;">
            <div style="display:flex; align-items:center; gap:5px; font-size:0.67rem; font-weight:700; letter-spacing:1px; color:rgba(255,200,50,0.85); margin-bottom:8px; text-transform:uppercase; font-family:var(--font-mono);">
              <span style="color:rgba(255,200,50,0.85);">${SVG_FACTS}</span> UPSC Key Facts
            </div>
            <ul style="margin:0; padding-left:16px; display:flex; flex-direction:column; gap:5px; list-style:disc;">
              ${item.upscHighlights.filter(h => h && h.length > 5).map(h => `<li style="font-size:0.86rem; color:var(--text-primary); line-height:1.55;">${parseWikiLinks(h)}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        ${legacyDetails}
        ${contextBox}
        ${sourceTransparencyBox}
        ${item.quickSummary ? `
          <details style="margin-top: 12px; border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 6px; background: rgba(168, 85, 247, 0.02); overflow: hidden;">
            <summary style="padding: 10px 14px; font-weight: 700; font-size: 0.8rem; color: #c084fc; cursor: pointer; user-select: none; display: flex; align-items: center; justify-content: space-between; outline: none; background: rgba(168, 85, 247, 0.05);">
              <span>⚡ COMMAND INTEL: Click to expand UPSC Depth Analysis</span>
            </summary>
            <div style="padding: 16px; border-top: 1px solid rgba(168, 85, 247, 0.15); font-size: 0.88rem; line-height: 1.6; display: flex; flex-direction: column; gap: 14px; color: var(--text-secondary);">
              <div>
                <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Quick Summary (50-100 words)</strong>
                <div style="color: var(--text-primary); font-size: 0.9rem;">${parseWikiLinks(item.quickSummary)}</div>
              </div>
              
              <div>
                <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Detailed Analysis (500-1000 words)</strong>
                <div style="line-height: 1.65; white-space: pre-line;">${parseWikiLinks(item.detailedAnalysis)}</div>
              </div>
              
              <div>
                <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Background Context</strong>
                <div>${parseWikiLinks(item.backgroundContext)}</div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 4px;">
                <div>
                  <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Key Stakeholders</strong>
                  <ul style="padding-left: 16px; margin: 0; list-style: square;">
                    ${item.stakeholders ? item.stakeholders.map(s => `<li>${parseWikiLinks(s)}</li>`).join('') : '<li>General</li>'}
                  </ul>
                </div>
                <div>
                  <strong style="color: var(--accent); display: block; margin-bottom: 4px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Related Topics</strong>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${item.relatedTopics ? item.relatedTopics.map(t => `<span style="font-size: 0.75rem; background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08);">${parseWikiLinks(t)}</span>`).join('') : 'None'}
                  </div>
                </div>
              </div>

              <div style="margin-top: 6px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.08);">
                <strong style="color: var(--accent); display: block; margin-bottom: 6px; font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">Exam Relevance Matrix</strong>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; text-align: center; font-size: 0.72rem;">
                  ${item.examRelevanceMatrix ? Object.entries(item.examRelevanceMatrix).map(([exam, importance]) => `
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 6px; border-radius: 4px;">
                      <div style="font-weight: bold; color: var(--text-muted);">${exam}</div>
                      <div style="color: ${importance.toLowerCase().includes('high') ? 'var(--danger)' : 'var(--text-primary)'}; font-weight: bold; margin-top: 2px;">${importance}</div>
                    </div>
                  `).join('') : ''}
                </div>
              </div>

              ${item.potentialQuestions ? `
                <div style="margin-top: 8px; padding: 12px; background: rgba(0,0,0,0.15); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; gap: 8px; font-size: 0.82rem;">
                  <strong style="color: var(--info); font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase;">💡 Analytical Doubts & SSB Scenarios</strong>
                  ${item.potentialQuestions.shortAnswers ? `<div><strong>Short Answer Qs:</strong><ul style="margin: 2px 0 0; padding-left: 16px;">${item.potentialQuestions.shortAnswers.map(q => `<li>${q}</li>`).join('')}</ul></div>` : ''}
                  ${item.potentialQuestions.interviewQuestions ? `<div><strong>Personal Interview Qs:</strong><ul style="margin: 2px 0 0; padding-left: 16px;">${item.potentialQuestions.interviewQuestions.map(q => `<li>${q}</li>`).join('')}</ul></div>` : ''}
                  ${item.potentialQuestions.ssbDiscussionTopics ? `<div><strong>SSB Group Discussion:</strong><ul style="margin: 2px 0 0; padding-left: 16px;">${item.potentialQuestions.ssbDiscussionTopics.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}
                </div>
              ` : ''}
            </div>
          </details>
        ` : ''}
        ${legacyDetails}
      </div>
    `;
  });

  // MCQ section
  // Support both legacy `item.mcq` (object) and new advanced schema `item.mcqs` (array)
  const itemsWithMcq = [];
  data.forEach(item => {
    if (item.mcqs && Array.isArray(item.mcqs) && item.mcqs.length > 0) {
      itemsWithMcq.push(item);
    } else if (item.mcq && item.mcq.question) {
      itemsWithMcq.push(item);
    }
  });

  if (itemsWithMcq.length > 0) {
    html += `
      <div style="margin-top:32px; border-top:1px solid var(--border); padding-top:26px;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span style="color:var(--accent);">${SVG_QUIZ}</span>
          <h3 style="margin:0; font-size:1rem; font-weight:700; letter-spacing:0.3px;">UPSC Prelims Mock</h3>
        </div>
        <p style="color:var(--text-muted); font-size:0.82rem; margin:0 0 20px; font-family:var(--font-mono); letter-spacing:0.4px; text-transform:uppercase;">Current Affairs MCQs — Analytical, not recall-based</p>
        <div class="panel">
    `;

    itemsWithMcq.forEach((item, index) => {
      const topicColor = getTopicColor(item.topic, item.topicColor);
      
      // Normalize to an array of questions to unify rendering
      const questionsToRender = [];
      if (item.mcqs && Array.isArray(item.mcqs)) {
        questionsToRender.push(...item.mcqs);
      } else if (item.mcq && item.mcq.question) {
        questionsToRender.push(item.mcq);
      }

      questionsToRender.forEach((qObj, qIdx) => {
        const uniqueId = `${item.id}-q${qIdx}`;
        html += `
          <div style="margin-bottom:26px; padding-bottom:22px; ${(index === itemsWithMcq.length - 1 && qIdx === questionsToRender.length - 1) ? '' : 'border-bottom:1px solid var(--border);'}" id="ca-mcq-${uniqueId}">
            <div style="display:flex; align-items:center; gap:6px; margin-bottom:10px;">
              <span style="font-family:var(--font-mono); font-size:0.62rem; font-weight:700; letter-spacing:0.6px; padding:2px 6px; border-radius:3px; background:${topicColor}1a; color:${topicColor}; text-transform:uppercase;">${item.topic || 'General'}</span>
              <span style="font-family:var(--font-mono); font-size:0.65rem; color:var(--text-muted);">Q${index + 1}.${qIdx + 1}</span>
            </div>
            <p style="font-weight:600; font-size:0.94rem; margin:0 0 14px; line-height:1.55; color:var(--text-primary);">${qObj.question}</p>
            <div style="display:flex; flex-direction:column; gap:7px;">
        `;
        
        let correctValue = qObj.correct;
        // Legacy support: if correct is a string like "A", convert to index 0
        if (typeof correctValue === 'string') {
          correctValue = correctValue.charCodeAt(0) - 65;
        }
        
        if (qObj.options && Array.isArray(qObj.options)) {
          qObj.options.forEach((opt, optIdx) => {
            html += `
              <button class="action-btn" onclick="checkCaMcq('${uniqueId}', ${optIdx}, ${correctValue}, this)" style="text-align:left; width:100%; justify-content:flex-start; padding:9px 13px; font-family:var(--font-main);">
                <span style="font-family:var(--font-mono); font-weight:700; font-size:0.8rem; margin-right:10px; color:var(--text-muted); min-width:18px;">${String.fromCharCode(65 + optIdx)}</span>${opt}
              </button>
            `;
          });
        }
        
        html += `
            </div>
            <div class="solution-explanation" id="ca-explain-${uniqueId}" style="display:none; margin-top:12px;">${qObj.explanation}</div>
          </div>
        `;
      });
    });

    html += `
        </div>
      </div>
    `;
  }

  pane.innerHTML = html;
}

// Helper: hex color (#4f46e5) -> "79,70,229"
function hexToRgb(hex) {
  if (!hex || hex.length < 7) return '100,116,139';
  try {
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    return `${r},${g},${b}`;
  } catch(_) { return '100,116,139'; }
}


function checkCaMcq(itemId, selectedIdx, correctIdx, btnElement) {
  const container = document.getElementById(`ca-mcq-${itemId}`);
  const explanationDiv = document.getElementById(`ca-explain-${itemId}`);
  
  container.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0.7";
  });
  
  if (selectedIdx === correctIdx) {
    btnElement.style.borderColor = "var(--accent)";
    btnElement.style.backgroundColor = "rgba(34, 197, 94, 0.1)";
    btnElement.style.color = "var(--accent)";
  } else {
    btnElement.style.borderColor = "var(--danger)";
    btnElement.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
    btnElement.style.color = "var(--danger)";
    
    const correctBtn = container.querySelectorAll("button")[correctIdx];
    if (correctBtn) {
      correctBtn.style.borderColor = "var(--accent)";
      correctBtn.style.color = "var(--accent)";
    }
  }
  
  explanationDiv.style.display = "block";
}

// ==========================================
// 9.5. PYQ SEMANTIC SEARCH MODULE
// ==========================================

function executePyqSearch() {
  const inputEl = document.getElementById("pyq-search-input");
  const query = inputEl.value.trim().toLowerCase();
  const resultsContainer = document.getElementById("pyq-search-results");
  
  if (!query) {
    resultsContainer.style.display = "none";
    return;
  }
  
  // Search through CBT_EXAMS_DATABASE
  let matchedQuestions = [];
  CBT_EXAMS_DATABASE.forEach(exam => {
    exam.questions.forEach((q, idx) => {
      const qText = q.question.toLowerCase();
      const optionsText = q.options.join(" ").toLowerCase();
      if (qText.includes(query) || optionsText.includes(query)) {
        matchedQuestions.push({
          examTitle: exam.title,
          examName: exam.exam,
          questionObj: q,
          qIndex: idx + 1
        });
      }
    });
  });
  
  resultsContainer.style.display = "block";
  resultsContainer.innerHTML = "";
  
  if (matchedQuestions.length === 0) {
    resultsContainer.innerHTML = `<div style="color: var(--text-secondary); text-align: center; padding: 20px;">No Past Year Questions matched "${query}".</div>`;
    return;
  }
  
  const displayLimit = Math.min(matchedQuestions.length, 20);
  const titleHtml = `<div style="font-weight: 600; color: var(--accent); margin-bottom: 12px;">Found ${matchedQuestions.length} matches (showing top ${displayLimit}):</div>`;
  
  let cardsHtml = matchedQuestions.slice(0, displayLimit).map((match, i) => {
    const q = match.questionObj;
    const uid = 'pyq-' + Date.now() + '-' + i;
    
    let optionsHtml = '';
    q.options.forEach((opt, optIdx) => {
      const isCorrect = (optIdx === q.correct);
      optionsHtml += `
        <div style="padding: 8px; border: 1px solid var(--border); border-radius: 4px; margin-bottom: 4px; background: rgba(0,0,0,0.2);">
          <span style="font-weight: 600; margin-right: 8px;">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
          <div class="pyq-ans-indicator ${uid}-ans" style="display: none; font-weight: 600; margin-top: 4px; ${isCorrect ? 'color: var(--accent);' : 'color: var(--danger);'}">
            ${isCorrect ? '✓ CORRECT ANSWER' : '✗ INCORRECT'}
          </div>
        </div>
      `;
    });
    
    return `
      <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 16px; position: relative;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <span style="font-family: var(--font-logo); font-size: 0.75rem; background: var(--accent); color: #000; padding: 2px 8px; border-radius: 4px; font-weight: 700;">${match.examName}</span>
          <span style="font-size: 0.8rem; color: var(--text-secondary);">Source: ${match.examTitle} (Q.${match.qIndex})</span>
        </div>
        <div style="font-size: 1rem; color: var(--text-primary); margin-bottom: 16px; line-height: 1.5;">
          ${q.question}
        </div>
        <div style="margin-bottom: 16px;">
          ${optionsHtml}
        </div>
        <button class="btn-secondary" onclick="togglePyqAnswer('${uid}')" style="width: auto; padding: 6px 12px; font-size: 0.85rem;">Toggle Answer & Solution</button>
        <div id="${uid}-sol" style="display: none; margin-top: 12px; padding: 12px; border-left: 3px solid var(--info); background: rgba(14, 165, 233, 0.05); color: var(--text-secondary); font-size: 0.9rem;">
          <strong>Explanation:</strong><br/>
          ${q.explanation || 'Self-explanatory or factual based on the core syllabus.'}
        </div>
      </div>
    `;
  }).join('');
  
  resultsContainer.innerHTML = titleHtml + cardsHtml;
  
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([resultsContainer]).catch(err => console.warn(err));
  }
}

function togglePyqAnswer(uid) {
  const indicators = document.querySelectorAll('.' + uid + '-ans');
  const solDiv = document.getElementById(uid + '-sol');
  
  if (!solDiv) return;
  const isCurrentlyVisible = solDiv.style.display === 'block';
  
  if (isCurrentlyVisible) {
    indicators.forEach(el => el.style.display = 'none');
    solDiv.style.display = 'none';
  } else {
    indicators.forEach(el => el.style.display = 'block');
    solDiv.style.display = 'block';
  }
}

// ==========================================