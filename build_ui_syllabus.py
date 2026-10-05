import json
import re

# Load the validated topics database
with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

# Build the UI tree
ui_db = {}
subject_mapping = {
    "Mathematics": "mathematics",
    "English": "english",
    "Physics": "physics",
    "Chemistry": "chemistry",
    "Science": "science",
    "General Science": "science",
    "Biology": "science",
    "General Studies": "general_studies",
    "General Knowledge": "general_studies",
    "History": "history",
    "Modern History": "history",
    "Geography": "geography",
    "Current Affairs": "current_affairs",
    "Defence": "defence",
    "Indian Polity": "polity",
    "Polity": "polity",
    "Economics": "economics"
}

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

for item in notes:
    subj_raw = item.get('subject', 'Miscellaneous')
    
    # Map to canonical subject ID
    subj_id = None
    for k, v in subject_mapping.items():
        if k.lower() in subj_raw.lower():
            subj_id = v
            break
    if not subj_id:
        subj_id = "miscellaneous"

    if subj_id not in ui_db:
        # Initialise subject
        ui_db[subj_id] = {
            "title": subj_id.replace('_', ' ').title(),
            "chapters": []
        }

    # "Chapters should now be topics. Different topic becomes a different chapter."
    topic_title = item.get('topic') or item.get('title', 'Unknown Topic')
    slug = slugify(topic_title)
    
    # Check if this slug already exists in this subject
    existing = [c['id'] for c in ui_db[subj_id]['chapters']]
    if slug in existing:
        slug = f"{slug}-{len(existing)}"

    # Add as a chapter with exactly 1 topic
    ui_db[subj_id]['chapters'].append({
        "id": slug,
        "title": topic_title,
        "icon": "fa-solid fa-book-open",
        "topics": [
            {
                "id": slug,
                "title": topic_title,
                "notes": "<p>Content for " + topic_title + " is being generated...</p>"
            }
        ]
    })

# Read data.js and replace NOTES_DATABASE
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('const NOTES_DATABASE = {')
end_idx = content.find('let CURRENT_AFFAIRS_DB')
if start_idx != -1 and end_idx != -1:
    # the end of the NOTES_DATABASE is the last }; before CURRENT_AFFAIRS_DB
    actual_end = content.rfind('};', start_idx, end_idx) + 1
    
    new_db_str = 'const NOTES_DATABASE = ' + json.dumps(ui_db, indent=2) + ';'
    new_content = content[:start_idx] + new_db_str + '\n\n' + content[end_idx:]
    
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated data.js with all 1164 topics as individual chapters.")
else:
    print("Failed to find boundaries in data.js")
