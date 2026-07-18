import re

def patch_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for old, new in replacements:
        content = content.replace(old, new)
        
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Patched {filepath}")
    else:
        print(f"No changes made to {filepath}")


html_replacements = [
    # Dashboard -> Command Center
    ('Dashboard\n        </a>', 'Command Center\n        </a>'),
    ('<h1>Command Centre</h1>', '<h1>COMMAND CENTER</h1>'),
    ('Operational readiness and revision stats', 'OPERATIONAL READINESS & SITREP'),
    
    # Study Room -> Study Modules
    ('Study Room\n        </a>', 'Study Modules\n        </a>'),
    ('<h1>Study Room</h1>', '<h1>STUDY MODULES</h1>'),
    
    # Current Affairs
    ('Daily Intel Briefing\n        </a>', 'Intelligence & ISR Reports\n        </a>'),
    ('<h1>Daily Intel Briefing Hub</h1>', '<h1>INTELLIGENCE & ISR REPORTS</h1>'),
    
    # Mock Hub -> Mission Planner / Simulator
    ('Training Simulations\n          <span', 'Mission Simulator\n          <span'),
    ('<h1>Training Simulations Hub', '<h1>MISSION SIMULATOR'),
    
    # Ask Dronacharya -> Ask Dronacharya AI
    ('Ask Dronacharya\n        </a>', 'Ask Dronacharya AI\n        </a>'),
    
    # Add DEFCON and Time
    ('<!-- Motivation Of The Day Panel -->', '''<!-- DEFCON & Time Status -->
        <div class="grid-cols-4" style="margin-bottom: 24px;">
          <div class="metric-card" style="border-left: 4px solid var(--danger);">
            <div class="metric-data">
              <span class="metric-value" style="color: var(--danger);">DEFCON 3</span>
              <span class="metric-label">Force Readiness</span>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-data">
              <span class="metric-value" id="clock-utc">00:00:00 Z</span>
              <span class="metric-label">ZULU TIME (UTC)</span>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-data">
              <span class="metric-value" id="clock-ist">00:00:00 IST</span>
              <span class="metric-label">LOCAL TIME (IST)</span>
            </div>
          </div>
          <div class="metric-card">
            <div class="metric-data">
              <span class="metric-value">CLEAR</span>
              <span class="metric-label">COMMS STATUS</span>
            </div>
          </div>
        </div>
        
        <!-- Motivation Of The Day Panel -->'''),
        
    # Subjects renaming
    ('>Mathematics</h3>', '>Ballistics & Applied Mathematics</h3>'),
    ('>Physics</h3>', '>Defence Physics</h3>'),
    ('>Chemistry</h3>', '>Military Chemistry</h3>'),
    ('>History</h3>', '>Military History</h3>'),
    ('>Geography</h3>', '>Strategic Geography</h3>'),
    ('>Polity</h3>', '>Constitution & National Security</h3>'),
    ('>Economics</h3>', '>Defence Economics</h3>'),
    ('>English</h3>', '>Officer Communication</h3>'),
    ('>Biology</h3>', '>Battlefield Science</h3>'),
    
    ('Syllabus Covered', 'COMBAT EFFECTIVE'),
    ('Daily Streak', 'MISSION STREAK'),
    ('Formulas Revised', 'TACTICAL PROTOCOLS'),
    ('Avg CBT Score', 'SIMULATOR ACCURACY')
]

patch_file('index.html', html_replacements)

# For app.js, we don't strictly have to change logic for these static labels, 
# but let's add the clock timer logic.
app_js_addition = """
// Military C2 Clocks
setInterval(() => {
    const utcEl = document.getElementById('clock-utc');
    const istEl = document.getElementById('clock-ist');
    const now = new Date();
    
    if (utcEl) {
        utcEl.innerText = now.toISOString().substring(11, 19) + ' Z';
    }
    if (istEl) {
        istEl.innerText = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST';
    }
}, 1000);
"""

with open('app.js', 'r', encoding='utf-8') as f:
    app_js_content = f.read()

if '// Military C2 Clocks' not in app_js_content:
    with open('app.js', 'a', encoding='utf-8') as f:
        f.write('\\n' + app_js_addition)
    print("Patched app.js with clock logic")
