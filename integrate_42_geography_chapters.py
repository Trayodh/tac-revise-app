"""
integrate_42_geography_chapters.py

Integrates the 42 granular Geography chapters across:
1. notes_database.json (attaches extracted notes & MCQs)
2. ai_generated_notes.js & public/ai_generated_notes.js
3. notes_data.js (replaces 15 geography chapters with 42)
4. syllabus_data.js (registers 42 geography chapters in OFFICIAL_SYLLABUS_DATA)
"""

import json
import re

print("--- Step 1: Loading 42 Masterclasses & Chapter Definitions ---")
from geo_masterclass_part1 import GEO_MASTERCLASS_PART1
from geo_masterclass_part2 import GEO_MASTERCLASS_PART2
from geo_masterclass_part3 import GEO_MASTERCLASS_PART3
from geo_masterclass_part4 import GEO_MASTERCLASS_PART4
from geo_masterclass_part5 import GEO_MASTERCLASS_PART5
from geo_masterclass_part6 import GEO_MASTERCLASS_PART6

all_master = {}
all_master.update(GEO_MASTERCLASS_PART1)
all_master.update(GEO_MASTERCLASS_PART2)
all_master.update(GEO_MASTERCLASS_PART3)
all_master.update(GEO_MASTERCLASS_PART4)
all_master.update(GEO_MASTERCLASS_PART5)
all_master.update(GEO_MASTERCLASS_PART6)

geo_defs = json.load(open('geography_chapters_def.json', encoding='utf-8'))
print(f"Loaded {len(geo_defs)} chapter definitions and {len(all_master)} masterclasses.")

print("--- Step 2: Mapping Extracted Notes from notes_database.json ---")
with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes_db = json.load(f)

print(f"Loaded {len(notes_db)} total notes from notes_database.json.")

# Prepare keyword buckets for each of the 42 chapters
geo_buckets = {d['id']: [] for d in geo_defs}

def clean_words(text):
    words = re.findall(r'[a-zA-Z0-9]+', (text or '').lower())
    stop = {'the', 'and', 'for', 'with', 'from', 'that', 'this', 'into', 'over', 'under', 'between', 'across', 'about', 'chapter', 'topics', 'subtopics', 'standard', 'exams', 'class', 'concepts'}
    return set(w for w in words if len(w) > 2 and w not in stop)

ch_keywords = {}
for d in geo_defs:
    kw = clean_words(d['id'].replace('-', ' ') + ' ' + d['title'] + ' ' + d['desc'])
    ch_keywords[d['id']] = kw

mapped_extracted = 0

for item in notes_db:
    subj = (item.get('subject') or '').lower()
    ch_name = (item.get('chapter') or '').lower()
    top_name = (item.get('topic') or '').lower()
    txt = (item.get('text') or item.get('content') or '').strip()

    # Filter out pure TOC stubs
    if len(txt) < 80:
        continue
    if 'pages ' in txt.lower() and len(txt) < 200 and '<table' not in txt and '###' not in txt:
        continue

    # Only process geography related items or general earth science
    is_geo = any(k in subj or k in ch_name or k in top_name for k in [
        'geograph', 'ocean', 'climat', 'soil', 'river', 'earth', 'monsoon', 
        'volcan', 'rock', 'weather', 'landform', 'atmosphere', 'cyclon', 
        'wind', 'current', 'plateau', 'himalay', 'ghat', 'forest', 'island',
        'mineral', 'industry', 'transport', 'census', 'strait', 'border'
    ])
    if not is_geo:
        continue

    item_kw = clean_words(subj + ' ' + ch_name + ' ' + top_name)
    
    best_ch = None
    max_score = 0

    for ch_id, kws in ch_keywords.items():
        score = 0
        clean_id = ch_id.replace('-', ' ')
        if clean_id in ch_name or clean_id in top_name:
            score += 25
        
        overlap = len(item_kw.intersection(kws))
        score += overlap * 4

        if score > max_score and score >= 8:
            max_score = score
            best_ch = ch_id

    if best_ch:
        geo_buckets[best_ch].append(item)
        mapped_extracted += 1

print(f"Successfully mapped {mapped_extracted} extracted notes across 42 Geography chapters.")

print("--- Step 3: Assembling Complete Geography Chapters ---")
geo_final_chapters = []

for d in geo_defs:
    ch_id = d['id']
    ch_title = d['title']
    master_html = all_master.get(ch_id, "")
    extracted_items = geo_buckets[ch_id]

    # Deduplicate extracted items by topic
    seen_topics = set()
    unique_extracted = []
    for it in extracted_items:
        t_key = (it.get('topic') or it.get('title') or '').strip().lower()
        if t_key and t_key not in seen_topics:
            seen_topics.add(t_key)
            unique_extracted.append(it)

    # Build Extracted Concept Library if items exist
    library_html = ""
    if unique_extracted:
        library_html += f'\n\n<!-- EXTRACTED CONCEPT LIBRARY: {ch_title} -->\n'
        library_html += f'<div class="extracted-concept-library" style="margin-top: 48px; padding-top: 36px; border-top: 3px double var(--border);">\n'
        library_html += f'  <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(34, 197, 94, 0.08)); border: 1px solid var(--border); border-left: 5px solid var(--accent); padding: 20px 24px; border-radius: 10px; margin-bottom: 28px;">\n'
        library_html += f'    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">\n'
        library_html += f'      <div>\n'
        library_html += f'        <h3 style="margin: 0 0 6px 0; color: var(--accent); font-size: 1.35rem; display: flex; align-items: center; gap: 10px;">\n'
        library_html += f'          <i class="fa-solid fa-layer-group"></i> Comprehensive Extracted Concept Library\n'
        library_html += f'        </h3>\n'
        library_html += f'        <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;">\n'
        library_html += f'          Specialized high-yield topic modules, comparative data matrices, and question archives extracted directly from defense syllabus references for <strong>{ch_title}</strong>.\n'
        library_html += f'        </p>\n'
        library_html += f'      </div>\n'
        library_html += f'      <div style="background: var(--bg-tertiary); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; color: var(--accent); border: 1px solid var(--border);">\n'
        library_html += f'        📚 {len(unique_extracted)} Extracted Sub-Modules\n'
        library_html += f'      </div>\n'
        library_html += f'    </div>\n'
        library_html += f'  </div>\n\n'

        for idx, it in enumerate(unique_extracted):
            top_title = it.get('topic') or it.get('title') or f"Concept Module {idx+1}"
            body_txt = it.get('text') or it.get('content') or ""

            # Convert markdown to basic HTML if needed
            if not body_txt.strip().startswith('<') and not re.search(r'<(p|div|table|h[1-6]|ul|ol)', body_txt, re.I):
                body_txt = re.sub(r'^### (.*$)', r'<h5 style="color: var(--accent); margin: 16px 0 8px;">\1</h5>', body_txt, flags=re.M)
                body_txt = re.sub(r'^## (.*$)', r'<h4 style="color: var(--accent); margin: 20px 0 10px;">\1</h4>', body_txt, flags=re.M)
                body_txt = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', body_txt)
                body_txt = re.sub(r'\*(.*?)\*', r'<em>\1</em>', body_txt)
                body_txt = re.sub(r'^- (.*$)', r'<li style="margin-bottom: 6px;">\1</li>', body_txt, flags=re.M)

            library_html += f'  <div class="extracted-topic-module" style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 10px; padding: 22px 26px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">\n'
            library_html += f'    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 16px;">\n'
            library_html += f'      <h4 style="margin: 0; color: var(--text-primary); font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">\n'
            library_html += f'        <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); color: var(--accent); font-size: 0.8rem; font-weight: bold;">{idx + 1}</span>\n'
            library_html += f'        {top_title}\n'
            library_html += f'      </h4>\n'
            if it.get('chapter') and it.get('chapter') != top_title:
                library_html += f'      <span style="font-size: 0.8rem; color: var(--text-muted); background: var(--bg-tertiary); padding: 3px 10px; border-radius: 12px;">{it.get("chapter")}</span>\n'
            library_html += f'    </div>\n'
            library_html += f'    <div class="extracted-topic-body" style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">\n'
            library_html += f'      {body_txt}\n'
            library_html += f'    </div>\n'

            # MCQ attachment
            mcq = it.get('mcq')
            if mcq and isinstance(mcq, dict):
                q = mcq.get('question') or mcq.get('q')
                opts = mcq.get('options') or mcq.get('choices') or []
                ans = mcq.get('answer') or mcq.get('ans') or mcq.get('correct')
                exp = mcq.get('explanation') or mcq.get('sol')
                if q:
                    library_html += f'    <div class="msc-checkpoint" style="margin-top: 18px; background: rgba(34, 197, 94, 0.05); border: 1px solid rgba(34, 197, 94, 0.2); border-left: 4px solid var(--success); padding: 14px 18px; border-radius: 8px;">\n'
                    library_html += f'      <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 8px;"><i class="fa-solid fa-circle-question" style="color: var(--success);"></i> Practice Question</div>\n'
                    library_html += f'      <div style="color: var(--text-secondary); margin-bottom: 10px;">{q}</div>\n'
                    if isinstance(opts, list) and opts:
                        library_html += f'      <ul style="list-style-type: none; padding-left: 0; margin-bottom: 10px;">\n'
                        for o_idx, opt in enumerate(opts):
                            letter = chr(65 + o_idx)
                            library_html += f'        <li style="margin-bottom: 4px; padding: 4px 8px; border-radius: 4px; background: var(--bg-tertiary); font-size: 0.9rem;"><strong>({letter})</strong> {opt}</li>\n'
                        library_html += f'      </ul>\n'
                    if ans:
                        library_html += f'      <div style="font-size: 0.88rem; color: var(--success); font-weight: bold; margin-top: 6px;">✓ Correct Answer: {ans}</div>\n'
                    if exp:
                        library_html += f'      <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;"><strong>Explanation:</strong> {exp}</div>\n'
                    library_html += f'    </div>\n'

            library_html += f'  </div>\n\n'

        library_html += f'</div>\n'

    full_notes = master_html + library_html

    geo_final_chapters.append({
        "id": ch_id,
        "title": ch_title,
        "subject": "geography",
        "notes": full_notes
    })

print(f"Assembled all {len(geo_final_chapters)} final Geography chapters.")
total_geo_chars = sum(len(c['notes']) for c in geo_final_chapters)
print(f"Total Geography characters: {total_geo_chars:,} (~{total_geo_chars//6:,} words)")
print(f"Average characters per chapter: {total_geo_chars // len(geo_final_chapters):,}")

print("--- Step 4: Updating ai_generated_notes.js & public/ copy ---")
with open('ai_generated_notes.js', 'r', encoding='utf-8') as f:
    orig_code = f.read()

# Extract existing non-geography chapters
prefix = 'const AI_GENERATED_NOTES = '
start = orig_code.find(prefix)
end = orig_code.find(';\n\nif (typeof window', start)
if start != -1 and end != -1:
    notes_json_str = orig_code[start + len(prefix):end].strip()
    all_notes = json.loads(notes_json_str)
    
    # Filter out old geography chapters
    non_geo = [n for n in all_notes if n.get('subject') != 'geography']
    print(f"Preserving {len(non_geo)} non-geography chapters.")
    
    # Merge with new 42 geography chapters
    updated_all_notes = non_geo + geo_final_chapters
    print(f"Total chapters in new updated compendium: {len(updated_all_notes)}")

    new_file_content = f"""// AI_GENERATED_NOTES — Master Synthesized Compendium for Jayastra
// Canonical Knowledge Base for Defence Examinations Revision
// Combined AI Masterclasses + Extracted Syllabus Concept Libraries (42 Geography Chapters)

const AI_GENERATED_NOTES = {json.dumps(updated_all_notes, indent=2)};

if (typeof window !== 'undefined') {{
  window.AI_GENERATED_NOTES = AI_GENERATED_NOTES;
}}
if (typeof module !== 'undefined') {{
  module.exports = {{ AI_GENERATED_NOTES }};
}}
"""
    with open('ai_generated_notes.js', 'w', encoding='utf-8') as f:
        f.write(new_file_content)
    with open('public/ai_generated_notes.js', 'w', encoding='utf-8') as f:
        f.write(new_file_content)
    print("Successfully updated ai_generated_notes.js and public/ai_generated_notes.js!")

print("--- Step 5: Updating notes_data.js Geography Chapter Navigation ---")
# Build the UI chapters array for notes_data.js
geo_ui_chapters = []
for d in geo_defs:
    geo_ui_chapters.append({
        "id": d['id'],
        "title": d['title'],
        "icon": d.get('icon', 'fa-solid fa-book-open'),
        "topics": [
            {
                "id": d['id'],
                "title": d['title'],
                "notes": f"<p>Loading comprehensive masterclass for {d['title']}...</p>"
            }
        ]
    })

# Read notes_data.js and replace "geography": { "title": "...", "chapters": [...] }
with open('notes_data.js', 'r', encoding='utf-8') as f:
    nd_content = f.read()

# Locate "geography": {
geo_start = nd_content.find('"geography": {')
if geo_start != -1:
    # Find the matching closing bracket for geography
    # In notes_data.js, the next top level subject is "economics": {
    econ_start = nd_content.find('"economics": {', geo_start)
    if econ_start != -1:
        # Find the last closing bracket before econ_start
        geo_end = nd_content.rfind('},', geo_start, econ_start) + 2
        
        geo_replacement = f'"geography": {{\n    "title": "Geography (CDS/NDA/AFCAT - 42 Modules)",\n    "chapters": {json.dumps(geo_ui_chapters, indent=6)}\n  }},'
        
        new_nd_content = nd_content[:geo_start] + geo_replacement + nd_content[geo_end:]
        with open('notes_data.js', 'w', encoding='utf-8') as f:
            f.write(new_nd_content)
        print("Successfully updated notes_data.js with all 42 granular Geography chapters!")
    else:
        print("Could not find economics start in notes_data.js")
else:
    print("Could not find geography start in notes_data.js")

print("--- Step 6: Updating syllabus_data.js ---")
with open('syllabus_data.js', 'r', encoding='utf-8') as f:
    syl_content = f.read()

# Insert the 42 geography definitions into OFFICIAL_SYLLABUS_DATA
for d in geo_defs:
    key_str = f'"{d["id"]}":'
    if key_str not in syl_content:
        # Append before the last closing bracket };
        last_bracket = syl_content.rfind('};')
        if last_bracket != -1:
            desc_val = json.dumps(f"Sub-topics: {d['desc']}. Standard: Class 11th & 12th NCERT / Majid Husain. Exams: CDS, NDA, AFCAT.")
            entry = f'  "{d["id"]}": {desc_val},\n'
            syl_content = syl_content[:last_bracket] + entry + syl_content[last_bracket:]

with open('syllabus_data.js', 'w', encoding='utf-8') as f:
    f.write(syl_content)
print("Successfully registered all 42 Geography chapters in syllabus_data.js!")

print("\n--- ALL STEPS COMPLETED SUCCESSFULLY! ---")
