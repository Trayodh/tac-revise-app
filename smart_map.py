import json
import difflib

# Load topics
with open('all_topics_list.json', 'r', encoding='utf-8') as f:
    topics = json.load(f)

# Load missed diagrams from log
with open('.system_generated/tasks/task-183.log', 'r', encoding='utf-8') as f:
    lines = f.readlines()

missed_diagrams = []
for line in lines:
    if 'Missed: ' in line:
        diagram = line.split('Missed: ')[1].strip()
        missed_diagrams.append(diagram)

topic_titles = [t['title'] for t in topics]
title_to_id = {t['title']: t['id'] for t in topics}

mapping = {}
for diagram in missed_diagrams:
    name_no_ext = diagram.rsplit('.', 1)[0]
    # some basic normalization
    clean_name = name_no_ext.lower().replace('-', ' ').replace('_', ' ')
    
    # Try to find a good match in topics
    matches = difflib.get_close_matches(name_no_ext, topic_titles, n=1, cutoff=0.3)
    if not matches:
        # try matching clean names against clean topic titles
        clean_titles = [t.lower().replace('-', ' ').replace('_', ' ') for t in topic_titles]
        clean_matches = difflib.get_close_matches(clean_name, clean_titles, n=1, cutoff=0.3)
        if clean_matches:
            # find original title
            idx = clean_titles.index(clean_matches[0])
            matches = [topic_titles[idx]]
            
    if matches:
        best_title = matches[0]
        mapping[diagram] = {
            'topic_id': title_to_id[best_title],
            'topic_title': best_title
        }
    else:
        mapping[diagram] = None

with open('auto_map_draft.json', 'w', encoding='utf-8') as f:
    json.dump(mapping, f, indent=4)

print(f"Mapped {len([m for m in mapping.values() if m])} out of {len(missed_diagrams)} diagrams.")
