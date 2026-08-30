import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

mappings = {}
for subj, subj_data in db.items():
    chapters = subj_data.get('chapters', [])
    syl_chapters = [ch for ch in chapters if ch['id'].startswith('syl-')]
    other_chapters = [ch for ch in chapters if not ch['id'].startswith('syl-')]
    
    if syl_chapters:
        mappings[subj] = []
        for s_ch in syl_chapters:
            # find best match based on word overlap in titles
            s_words = set(s_ch['title'].lower().replace(',', '').replace('&', '').split())
            best_match = None
            best_score = 0
            for o_ch in other_chapters:
                o_words = set(o_ch['title'].lower().replace(',', '').replace('&', '').split())
                score = len(s_words.intersection(o_words))
                if score > best_score:
                    best_score = score
                    best_match = o_ch
            mappings[subj].append({
                'short': s_ch,
                'target': best_match
            })

with open('merge_mappings.md', 'w') as f:
    for subj, maps in mappings.items():
        f.write(f"### {subj.capitalize()}\n")
        for m in maps:
            target_title = m['target']['title'] if m['target'] else "NO MATCH FOUND"
            f.write(f"- Merge `{m['short']['title']}` into `{target_title}`\n")
