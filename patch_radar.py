import re

html_filepath = 'index.html'

with open(html_filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's insert the radar panel after the DEFCON grid in the dashboard.
radar_html = """
        <!-- Tactical Radar / Map Panel -->
        <div class="grid-cols-2" style="margin-bottom: 24px;">
          <div class="panel glow">
            <h3 class="panel-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--info)" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
              </svg>
              STRATEGIC AIRSPACE RADAR
            </h3>
            <div class="radar-container">
              <div class="radar">
                <div class="radar-sweep"></div>
                <div class="radar-target target-1"></div>
                <div class="radar-target target-2"></div>
                <div class="radar-target target-3"></div>
              </div>
            </div>
          </div>
          
          <div class="panel">
            <h3 class="panel-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="var(--warning)" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              ACTIVE INTELLIGENCE ALERTS
            </h3>
            <ul style="list-style: none; padding: 0; color: var(--text-secondary); font-family: var(--font-mono); font-size: 0.85rem;">
              <li style="margin-bottom: 12px; border-left: 2px solid var(--danger); padding-left: 10px;">
                <span style="color: var(--danger); font-weight: 600;">[CRITICAL]</span> Hostile cyber activity detected in Northern Sector. Firewalls reinforced.
              </li>
              <li style="margin-bottom: 12px; border-left: 2px solid var(--warning); padding-left: 10px;">
                <span style="color: var(--warning); font-weight: 600;">[ELEVATED]</span> Unidentified aerial phenomena near border zone Alpha.
              </li>
              <li style="margin-bottom: 12px; border-left: 2px solid var(--info); padding-left: 10px;">
                <span style="color: var(--info); font-weight: 600;">[ROUTINE]</span> Naval fleet deployment exercises commencing at 0400 Z.
              </li>
            </ul>
          </div>
        </div>
"""

content = content.replace('<!-- Motivation Of The Day Panel -->', radar_html)

with open(html_filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Patched index.html with Radar Panel")

css_filepath = 'index.css'
with open(css_filepath, 'r', encoding='utf-8') as f:
    css_content = f.read()

radar_css = """
/* Radar CSS Animation */
.radar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: var(--bg-primary);
  border-radius: 4px;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
}

.radar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid rgba(34, 197, 94, 0.3);
  position: relative;
  background: 
    radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%),
    repeating-radial-gradient(rgba(34, 197, 94, 0.1) 0, rgba(34, 197, 94, 0.1) 1px, transparent 1px, transparent 30px);
}

.radar::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(34, 197, 94, 0.3);
}

.radar::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  width: 1px;
  background: rgba(34, 197, 94, 0.3);
}

.radar-sweep {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 50%;
  background: linear-gradient(90deg, rgba(34, 197, 94, 0) 0%, rgba(34, 197, 94, 0.5) 100%);
  transform-origin: 0% 100%;
  animation: radar-spin 4s infinite linear;
  border-right: 2px solid rgba(34, 197, 94, 0.8);
}

@keyframes radar-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.radar-target {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--danger);
  border-radius: 50%;
  box-shadow: 0 0 6px 2px var(--danger);
  animation: target-ping 4s infinite linear;
  opacity: 0;
}

.target-1 { top: 30%; left: 60%; animation-delay: 0.5s; }
.target-2 { top: 70%; left: 30%; animation-delay: 2.2s; }
.target-3 { top: 20%; left: 20%; animation-delay: 3.1s; }

@keyframes target-ping {
  0% { opacity: 0; }
  5% { opacity: 1; transform: scale(1.5); }
  15% { opacity: 0; transform: scale(1); }
  100% { opacity: 0; }
}
"""

if '.radar-sweep' not in css_content:
    with open(css_filepath, 'a', encoding='utf-8') as f:
        f.write('\\n' + radar_css)
    print("Patched index.css with Radar CSS")
