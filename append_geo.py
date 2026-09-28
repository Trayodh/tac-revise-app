import json
import os

with open('pilot_output.json', 'r', encoding='utf-8') as f:
    data = json.load(f)[0]

html = f"""<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: #4ade80; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; font-weight: 600;">{data['chapter']}: {data['topic']}</h3>

  <h4 style="color:#4ade80; margin-top:24px;">Master Notes</h4>
  <p style="color:#e2e8f0;">{data['master_notes']}</p>

  <h4 style="color:#4ade80; margin-top:24px;">Revision Notes</h4>
  <p style="color:#e2e8f0;">{data['revision_notes']}</p>

  <h4 style="color:#4ade80; margin-top:24px;">Key Facts</h4>
  <ul style="color:#e2e8f0;">
"""
for fact in data.get('key_facts', []):
    html += f"    <li>{fact}</li>\n"
html += "  </ul>\n"

html += """
  <h4 style="color:#4ade80; margin-top:24px;">Definitions</h4>
  <ul style="color:#e2e8f0;">
"""
for defn in data.get('definitions', []):
    html += f"    <li><strong>{defn['term']}:</strong> {defn['exact_meaning']} <br><em>Simplified: {defn['simplified_explanation']}</em></li>\n"
html += "  </ul>\n"

if data.get('comparison_tables'):
    html += """  <h4 style="color:#4ade80; margin-top:24px;">Comparison Tables</h4>\n"""
    for table in data['comparison_tables']:
        html += f"  <h5 style=\"color:#fbbf24;\">{table['title']}</h5>\n"
        html += f"  <pre style=\"color:#e2e8f0; background:rgba(0,0,0,0.2); padding:10px;\">{table['content']}</pre>\n"

html += f"""
  <div style="background: rgba(74,222,128,0.08); border-left: 4px solid #4ade80; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color:#4ade80;">Beginner Explanation:</strong> {data['beginner_explanation']}
  </div>

  <div style="background: rgba(251,191,36,0.08); border-left: 4px solid #fbbf24; padding: 14px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
    <strong style="color:#fbbf24;">Advanced Details:</strong> {data['advanced_explanation']}
  </div>
</div>
"""

with open('notes_extra_geography.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

append_str = f'\nwindow.EXPANDED_NOTES_DATA["geomorphology-seismic-waves"] = `{html}`;\n'
if append_str not in js_content:
    js_content += append_str
    with open('notes_extra_geography.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Successfully appended pilot data to notes_extra_geography.js!")
else:
    print("Already appended.")
