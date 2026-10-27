import json
import os
import glob

with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

# Find all HTML files in public/notes-data
html_files = glob.glob('public/notes-data/**/*.html', recursive=True)
print(f"Total HTML files in public/notes-data: {len(html_files)}")

# Map by folder name / chapter id
html_by_chapter = {}
for h in html_files:
    # Path format: public/notes-data/subject/.../chapter_id/detailed_notes.html or notes.html
    parts = os.path.normpath(h).split(os.sep)
    # The chapter folder is typically the parent folder of the html file
    ch_folder = parts[-2]
    filename = parts[-1]
    
    if ch_folder not in html_by_chapter:
        html_by_chapter[ch_folder] = {}
    html_by_chapter[ch_folder][filename] = h

# Check against all 202 canonical chapters
matched = 0
missing = []

for sub_id, sub_data in syllabus.items():
    for ch in sub_data['chapters']:
        ch_id = ch['id']
        if ch_id in html_by_chapter:
            matched += 1
        else:
            missing.append((sub_id, ch_id, ch['title']))

print(f"Direct chapter matches in public/notes-data: {matched} / 202")
print(f"Missing from public/notes-data: {len(missing)}")
if missing:
    print("\nSample 10 missing:")
    for m in missing[:10]:
        print(f"  [{m[0]}] {m[1]} ({m[2]})")
