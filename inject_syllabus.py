import json
import re

with open("parsed_topics.json", "r", encoding="utf-8") as f:
    topics_by_subject = json.load(f)

# Title and icon mapping
subject_meta = {
    "mathematics": {"title": "Mathematics", "icon": "fa-solid fa-calculator"},
    "english": {"title": "English", "icon": "fa-solid fa-language"},
    "physics": {"title": "Physics", "icon": "fa-solid fa-atom"},
    "chemistry": {"title": "Chemistry", "icon": "fa-solid fa-flask"},
    "biology": {"title": "General Science & Biology", "icon": "fa-solid fa-dna"},
    "history": {"title": "History", "icon": "fa-solid fa-monument"},
    "geography": {"title": "Geography", "icon": "fa-solid fa-earth-americas"},
    "current-affairs": {"title": "Current Affairs", "icon": "fa-solid fa-newspaper"},
    "polity": {"title": "Polity", "icon": "fa-solid fa-gavel"},
    "economics": {"title": "Economics", "icon": "fa-solid fa-chart-line"},
    "reasoning": {"title": "Reasoning", "icon": "fa-solid fa-brain"},
    "military_aptitude": {"title": "Military Aptitude", "icon": "fa-solid fa-crosshairs"},
    "environment": {"title": "Environment & Ecology", "icon": "fa-solid fa-leaf"}
}

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

notes_database = {}

for subj, topics in topics_by_subject.items():
    if not topics and subj not in ["environment"]: # environment has 26 now
        pass 
        
    meta = subject_meta.get(subj, {"title": subj.capitalize(), "icon": "fa-solid fa-book"})
    chapters = []
    
    for topic in topics:
        topic_slug = slugify(topic)
        chapter_id = f"{subj}-{topic_slug}"
        
        chapter_obj = {
            "id": chapter_id,
            "title": topic,
            "icon": meta["icon"],
            "topics": [
                {
                    "id": chapter_id,
                    "title": topic,
                    "notes": f"Detailed notes in notes_extra_{subj}.js",
                    "mindmap": {
                        "root": topic,
                        "branches": []
                    }
                }
            ]
        }
        chapters.append(chapter_obj)
        
    notes_database[subj] = {
        "title": meta["title"],
        "chapters": chapters
    }

# Convert dict to JS
db_js = json.dumps(notes_database, indent=2)
# Need to make sure it looks like the original format
db_js = "const NOTES_DATABASE = " + db_js + ";\n"

# Read original file, split at const NOTES_DATABASE =
with open("public/notes_data_exam_focused.js", "r", encoding="utf-8") as f:
    text = f.read()

split_index = text.find("const NOTES_DATABASE = {")
if split_index == -1:
    print("Could not find const NOTES_DATABASE = {")
    exit(1)

top_half = text[:split_index]
new_file_content = top_half + db_js

with open("public/notes_data_exam_focused.js", "w", encoding="utf-8") as f:
    f.write(new_file_content)

print(f"Successfully generated new NOTES_DATABASE with {sum(len(t) for t in topics_by_subject.values())} chapters!")
