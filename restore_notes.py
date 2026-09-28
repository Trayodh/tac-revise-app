import glob
import re
import json
from difflib import get_close_matches

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

# Load new valid IDs
with open('parsed_topics.json', 'r') as f:
    topics_by_subject = json.load(f)

valid_ids = []
for subj, topics in topics_by_subject.items():
    for topic in topics:
        valid_ids.append(f"{subj}-{slugify(topic)}")

# Now process each file
for file in glob.glob('public/notes_extra_*.js'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    keys = re.findall(r'window\.EXPANDED_NOTES_DATA\[\"(.*?)\"\]', content)
    if not keys:
        continue
        
    replacements = 0
    for old_key in keys:
        if old_key in valid_ids:
            continue
            
        # Try to find a match
        # To make it better, we can match just the slug part
        old_slug_parts = set(old_key.split('-'))
        
        best_match = None
        best_score = 0
        
        for valid_id in valid_ids:
            valid_slug_parts = set(valid_id.split('-'))
            score = len(old_slug_parts.intersection(valid_slug_parts))
            if score > best_score:
                best_score = score
                best_match = valid_id
                
        # Use difflib as fallback
        if best_match is None or best_score < 1:
            matches = get_close_matches(old_key, valid_ids, n=1, cutoff=0.3)
            if matches:
                best_match = matches[0]
                
        if best_match:
            print(f"Mapping {old_key} -> {best_match} in {file}")
            content = content.replace(f'window.EXPANDED_NOTES_DATA["{old_key}"]', f'window.EXPANDED_NOTES_DATA["{best_match}"]')
            replacements += 1
            
    if replacements > 0:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
