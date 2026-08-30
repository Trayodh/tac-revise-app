import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

# Mathematics merges
math = db.get('mathematics', {})
if 'chapters' in math:
    chapters = math['chapters']
    
    # 1. syl-numerical-speed -> time-distance
    speed_syl = next((c for c in chapters if c['id'] == 'syl-numerical-speed'), None)
    time_dist = next((c for c in chapters if c['id'] == 'time-distance'), None)
    
    if speed_syl and time_dist:
        time_dist['topics'][0]['notes'] += "\n\n<hr>\n\n<h2>Important Formulas & Short Notes</h2>\n\n" + speed_syl['topics'][0]['notes']
        time_dist['topics'][0]['formulas'] += "\n" + speed_syl['topics'][0]['formulas']
        chapters.remove(speed_syl)

    # 2. syl-numerical-ratios -> ratios-averages
    ratio_syl = next((c for c in chapters if c['id'] == 'syl-numerical-ratios'), None)
    ratio_avg = next((c for c in chapters if c['id'] == 'ratios-averages'), None)
    
    if ratio_syl and ratio_avg:
        ratio_avg['topics'][0]['notes'] += "\n\n<hr>\n\n<h2>Important Formulas & Short Notes</h2>\n\n" + ratio_syl['topics'][0]['notes']
        ratio_avg['topics'][0]['formulas'] += "\n" + ratio_syl['topics'][0]['formulas']
        chapters.remove(ratio_syl)

# Write back
new_content = content[:db_match.start(1)] + json.dumps(db, indent=2) + content[db_match.end(1):]
with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Mathematics duplicate chapters merged successfully.")
