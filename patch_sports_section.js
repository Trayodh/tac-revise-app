const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
const appJsPath = path.join(__dirname, 'app.js');
const caDataJsPath = path.join(__dirname, 'ca_data.js');

// 1. Update ca_data.js
let caData = fs.readFileSync(caDataJsPath, 'utf8');
if (!caData.includes('CA_SPORTS_DATA')) {
    const sportsData = `
// =============================================================================
// SECTION: SPORTS
// =============================================================================
window.CA_SPORTS_DATA = [
  {
    event: "ICC Men's T20 World Cup 2024",
    winner: "India",
    country: "India",
    placeHeld: "West Indies & USA"
  },
  {
    event: "Wimbledon 2025 - Men's Singles",
    winner: "Carlos Alcaraz",
    country: "Spain",
    placeHeld: "London, UK"
  },
  {
    event: "FIFA Women's World Cup 2023",
    winner: "Spain",
    country: "Spain",
    placeHeld: "Australia & New Zealand"
  },
  {
    event: "ICC Men's Cricket World Cup 2023",
    winner: "Australia",
    country: "Australia",
    placeHeld: "India"
  },
  {
    event: "Australian Open 2026 - Men's Singles",
    winner: "Jannik Sinner",
    country: "Italy",
    placeHeld: "Melbourne, Australia"
  }
];
`;
    fs.writeFileSync(caDataJsPath, caData + '\n' + sportsData);
    console.log('Updated ca_data.js');
}

// 2. Update index.html
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
if (!indexHtml.includes('btn-ca-mode-sports')) {
    const sportsBtnHtml = `
          <div class="subject-card" id="btn-ca-mode-sports" onclick="toggleCurrentAffairsMode('sports')" style="background: rgba(255,255,255,0.05); border: 1px solid var(--border); padding: 20px; border-radius: 12px; text-align: center; cursor: pointer; transition: all 0.2s ease;">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">🏆</div>
            <h3 style="margin-bottom: 4px; font-size: 1.1rem;">Sports</h3>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Winners & Events</div>
          </div>
`;
    // Find the end of the subject-card grid (after exercises)
    const exercisesRegex = /(<div class="subject-card" id="btn-ca-mode-exercises"[\s\S]*?<\/div>)/;
    indexHtml = indexHtml.replace(exercisesRegex, '$1' + sportsBtnHtml);

    const sportsContainerHtml = `
        <!-- Standalone Sports Panel -->
        <div id="ca-sports-container" style="display: none;" class="panel">
          <div class="panel-title" id="ca-sports-panel-title">Sports Winners</div>
          <p style="color: var(--text-secondary); margin-bottom: 20px; font-size: 0.9rem;">
            A consolidated tracker of major national and international sports events, winners, and hosting locations.
          </p>
          <div id="ca-sports-table-wrapper" style="overflow-x: auto; background: var(--surface); border: 1px solid var(--border); border-radius: 8px;">
            <!-- Rendered by JS -->
          </div>
        </div>
`;
    const awardsContainerEndRegex = /(<div id="ca-awards-container"[\s\S]*?<\/div>\s*<\/div>)/;
    indexHtml = indexHtml.replace(awardsContainerEndRegex, '$1\n' + sportsContainerHtml);

    fs.writeFileSync(indexHtmlPath, indexHtml);
    console.log('Updated index.html');
}

// 3. Update app.js
let appJs = fs.readFileSync(appJsPath, 'utf8');
if (!appJs.includes('renderCaSportsTable')) {
    
    // Add to toggle logic
    appJs = appJs.replace(
        /const exercisesContainer = document\.getElementById\("ca-exercises-container"\);/,
        'const exercisesContainer = document.getElementById("ca-exercises-container");\n  const sportsContainer  = document.getElementById("ca-sports-container");'
    );
    appJs = appJs.replace(
        /const btnExercises = document\.getElementById\("btn-ca-mode-exercises"\);/,
        'const btnExercises = document.getElementById("btn-ca-mode-exercises");\n  const btnSports  = document.getElementById("btn-ca-mode-sports");'
    );
    appJs = appJs.replace(
        /\[monthlyContainer, visitsContainer, ftaContainer, datesContainer, awardsContainer, exercisesContainer\]\.forEach/,
        '[monthlyContainer, visitsContainer, ftaContainer, datesContainer, awardsContainer, exercisesContainer, sportsContainer].forEach'
    );
    appJs = appJs.replace(
        /\[btnMonthly, btnVisits, btnFta, btnDates, btnAwards, btnExercises\]\.forEach/,
        '[btnMonthly, btnVisits, btnFta, btnDates, btnAwards, btnExercises, btnSports].forEach'
    );

    // Add else if block
    const elseIfSports = `
  } else if (mode === "sports") {
    activateBtn(btnSports);
    if (sportsContainer) sportsContainer.style.display = "block";
    renderCaSportsTable();
`;
    appJs = appJs.replace(
        /\} else if \(mode === "exercises"\) \{/,
        elseIfSports + '} else if (mode === "exercises") {'
    );

    // Add renderCaSportsTable function
    const renderSportsFunction = `
function renderCaSportsTable() {
  const wrapper = document.getElementById("ca-sports-table-wrapper");
  if (!wrapper) return;

  const sports = window.CA_SPORTS_DATA || [];

  if (sports.length === 0) {
    wrapper.innerHTML = \`<p style="color: var(--text-secondary); padding: 20px;">No sports data loaded.</p>\`;
    return;
  }

  const rows = sports.map(s => 
    \`<tr>
      <td style="padding: 12px; border-bottom: 1px solid var(--border); color: var(--text-primary); font-weight: 500;">\${s.event || '-'}</td>
      <td style="padding: 12px; border-bottom: 1px solid var(--border); color: var(--accent);">\${s.winner || '-'}</td>
      <td style="padding: 12px; border-bottom: 1px solid var(--border); color: var(--text-secondary);">\${s.country || '-'}</td>
      <td style="padding: 12px; border-bottom: 1px solid var(--border); color: var(--text-secondary);">\${s.placeHeld || '-'}</td>
    </tr>\`
  ).join('');

  wrapper.innerHTML = \`
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">
      <thead style="background: rgba(255,255,255,0.02);">
        <tr>
          <th style="padding: 15px 12px; border-bottom: 1px solid var(--border); color: var(--text-muted); font-weight: 600;">Event / Sport</th>
          <th style="padding: 15px 12px; border-bottom: 1px solid var(--border); color: var(--text-muted); font-weight: 600;">Winner(s)</th>
          <th style="padding: 15px 12px; border-bottom: 1px solid var(--border); color: var(--text-muted); font-weight: 600;">Country</th>
          <th style="padding: 15px 12px; border-bottom: 1px solid var(--border); color: var(--text-muted); font-weight: 600;">Place Held</th>
        </tr>
      </thead>
      <tbody>\${rows}</tbody>
    </table>
  \`;
}
`;
    appJs += '\n' + renderSportsFunction;

    fs.writeFileSync(appJsPath, appJs);
    console.log('Updated app.js');
}

console.log('All files processed.');
