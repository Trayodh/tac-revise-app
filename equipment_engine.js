window.renderEquipmentDB = function() {
  console.log("renderEquipmentDB called!");
  const container = document.getElementById('armed-forces-equipment-container');
  if (!container) {
    console.error("armed-forces-equipment-container not found in DOM.");
    return;
  }
  
  if (typeof ARMED_FORCES_EQUIPMENT === 'undefined' || !ARMED_FORCES_EQUIPMENT.length) {
    console.error("ARMED_FORCES_EQUIPMENT data is not loaded.");
    container.innerHTML = '<div style="color:var(--warning); padding:16px;">Equipment database not loaded. Please try hard refreshing (Ctrl+Shift+R or Cmd+Shift+R).</div>';
    return;
  }
  console.log("Equipment DB Data loaded. Items:", ARMED_FORCES_EQUIPMENT.length);
  
  // Create UI
  let html = `
    <div class="equipment-db-wrapper" style="font-family: var(--font-sans);">
      <div style="display:flex; gap:8px; margin-bottom:16px; overflow-x:auto; padding-bottom:8px;">
        <button class="eq-filter-btn active" data-branch="All" style="padding:6px 12px; border-radius:16px; border:1px solid var(--accent); background:rgba(34, 197, 94, 0.1); color:var(--text-primary); cursor:pointer;">All</button>
        <button class="eq-filter-btn" data-branch="Army" style="padding:6px 12px; border-radius:16px; border:1px solid var(--border); background:rgba(255,255,255,0.05); color:var(--text-primary); cursor:pointer;">Army</button>
        <button class="eq-filter-btn" data-branch="Navy" style="padding:6px 12px; border-radius:16px; border:1px solid var(--border); background:rgba(255,255,255,0.05); color:var(--text-primary); cursor:pointer;">Navy</button>
        <button class="eq-filter-btn" data-branch="Air Force" style="padding:6px 12px; border-radius:16px; border:1px solid var(--border); background:rgba(255,255,255,0.05); color:var(--text-primary); cursor:pointer;">Air Force</button>
        <button class="eq-filter-btn" data-branch="Coast Guard" style="padding:6px 12px; border-radius:16px; border:1px solid var(--border); background:rgba(255,255,255,0.05); color:var(--text-primary); cursor:pointer;">Coast Guard</button>
      </div>
      
      <div style="margin-bottom:16px;">
        <input type="text" id="eq-search-input" placeholder="Search equipment by name or type..." style="width:100%; padding:10px 14px; border-radius:8px; border:1px solid var(--border); background:rgba(0,0,0,0.2); color:white;">
      </div>
      
      <div class="table-responsive" style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; text-align:left;">
          <thead>
            <tr style="background:var(--bg-tertiary); border-bottom:2px solid var(--border);">
              <th style="padding:10px; font-weight:600;">Name</th>
              <th style="padding:10px; font-weight:600;">Branch</th>
              <th style="padding:10px; font-weight:600;">Type</th>
              <th style="padding:10px; font-weight:600;">Origin</th>
              <th style="padding:10px; font-weight:600;">Quantity</th>
            </tr>
          </thead>
          <tbody id="eq-table-body">
            <!-- populated by JS -->
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.innerHTML = html;
  
  const tbody = document.getElementById('eq-table-body');
  const searchInput = document.getElementById('eq-search-input');
  const filterBtns = document.querySelectorAll('.eq-filter-btn');
  
  let currentBranch = 'All';
  let searchQuery = '';
  
  const renderTable = () => {
    let filtered = ARMED_FORCES_EQUIPMENT.filter(item => {
      // Basic filtering to remove bad empty scraped rows
      if (item.name.toLowerCase() === 'tanks' && item.origin === 'Unknown') return false; 
      
      const matchBranch = currentBranch === 'All' || item.branch === currentBranch;
      const matchSearch = item.name.toLowerCase().includes(searchQuery) || item.type.toLowerCase().includes(searchQuery) || item.origin.toLowerCase().includes(searchQuery);
      return matchBranch && matchSearch;
    });
    
    tbody.innerHTML = filtered.map(item => {
      let nameHtml = item.name;
      if (item.wikiLink) {
        nameHtml = \`<a href="\${item.wikiLink}" target="_blank" style="color:var(--accent); text-decoration:none;">\${item.name}</a>\`;
      }
      
      let branchColor = '#94a3b8';
      if(item.branch === 'Army') branchColor = '#87a96b';
      if(item.branch === 'Air Force') branchColor = '#38bdf8';
      if(item.branch === 'Navy') branchColor = '#3b82f6';
      
      return \`
        <tr style="border-bottom:1px solid rgba(255,255,255,0.05); transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.02)'" onmouseout="this.style.background='transparent'">
          <td style="padding:10px;">\${nameHtml}</td>
          <td style="padding:10px;"><span style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px; font-size:0.75rem; color:\${branchColor}; border:1px solid \${branchColor}40;">\${item.branch}</span></td>
          <td style="padding:10px; color:var(--text-secondary);">\${item.type}</td>
          <td style="padding:10px;">\${item.origin}</td>
          <td style="padding:10px; font-family:var(--font-mono); font-size:0.75rem;">\${item.quantity || '-'}</td>
        </tr>
      \`;
    }).join('');
    
    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px; color:var(--text-muted);">No equipment found matching criteria.</td></tr>';
    }
  };
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderTable();
  });
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = 'var(--border)';
        b.style.background = 'rgba(255,255,255,0.05)';
      });
      const target = e.target;
      target.classList.add('active');
      target.style.borderColor = 'var(--accent)';
      target.style.background = 'rgba(34, 197, 94, 0.1)';
      
      currentBranch = target.getAttribute('data-branch');
      renderTable();
    });
  });
  
  renderTable();
};
