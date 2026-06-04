import re

with open('app.js', 'r', encoding='utf-8') as f:
    app_code = f.read()

fetch_func = """
let isFetchingDailyNews = false;

function fetchDailyCurrentAffairs() {
  if (isFetchingDailyNews) return;
  isFetchingDailyNews = true;
  
  const pane = document.getElementById("ca-content-pane");
  if (pane) {
    pane.innerHTML = `<div style="text-align: center; margin-top: 40px;">
      <div class="cbt-spinner" style="border-color: var(--accent); border-top-color: transparent; width: 40px; height: 40px; border-width: 4px; margin: 0 auto 16px;"></div>
      <p style="color: var(--accent); font-family: var(--font-mono); letter-spacing: 1px; font-weight: 600;">ESTABLISHING SECURE UPLINK...</p>
      <p style="color: var(--text-muted); font-size: 0.85rem;">Retrieving today's operational intelligence briefing via AI...</p>
    </div>`;
  }

  fetch('http://localhost:4000/api/daily-current-affairs')
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        // Build the new category object
        // The data is already an array of items matching our schema!
        const todayStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        const categoryName = `Daily Intel - ${todayStr}`;
        
        // Remove old 'Daily Intel' categories so we only keep today's
        Object.keys(CURRENT_AFFAIRS_DB).forEach(k => {
          if (k.startsWith("Daily Intel")) delete CURRENT_AFFAIRS_DB[k];
        });
        
        // Prepend it
        const newDb = { [categoryName]: data };
        Object.assign(newDb, CURRENT_AFFAIRS_DB);
        
        // Hack to replace global const object keys (or just reassign if it was let, but it's a const in data.js)
        // Actually, we can just delete all keys from CURRENT_AFFAIRS_DB and copy newDb back to preserve reference
        const oldKeys = Object.keys(CURRENT_AFFAIRS_DB);
        oldKeys.forEach(k => delete CURRENT_AFFAIRS_DB[k]);
        Object.assign(CURRENT_AFFAIRS_DB, newDb);
        
        activeCaMonth = categoryName; // Set it as active
      }
      isFetchingDailyNews = false;
      renderCurrentAffairsHub();
    })
    .catch(err => {
      console.error("Failed to fetch daily news:", err);
      isFetchingDailyNews = false;
      if (pane) pane.innerHTML = `<p style="color: var(--danger); padding: 20px;">Secure uplink failed. Could not retrieve today's intelligence.</p>`;
      // Re-render without daily intel if it completely failed
      setTimeout(() => renderCurrentAffairsHub(), 3000);
    });
}
"""

# Replace renderCurrentAffairsHub
old_render = r"function renderCurrentAffairsHub\(\) \{(.*?)\s*const monthsList = document\.getElementById"
new_render = r"""function renderCurrentAffairsHub() {
  const hasDailyIntel = Object.keys(CURRENT_AFFAIRS_DB).some(k => k.startsWith("Daily Intel"));
  if (!hasDailyIntel && !isFetchingDailyNews) {
    fetchDailyCurrentAffairs();
    return;
  }
  
  const monthsList = document.getElementById"""

if "fetchDailyCurrentAffairs" not in app_code:
    # Insert function before renderCurrentAffairsHub
    app_code = re.sub(r'function renderCurrentAffairsHub\(\) \{', f'{fetch_func}\nfunction renderCurrentAffairsHub() {{', app_code)
    
    # Update render function to check for daily intel
    app_code = re.sub(old_render, new_render, app_code, flags=re.DOTALL)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("app.js patched successfully.")
