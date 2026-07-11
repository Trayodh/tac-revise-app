import json
import fitz
import re

PDF_PATH = "pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf"
doc = fitz.open(PDF_PATH)

# We know TOC is roughly on pages 3 to 7 (0-indexed 2 to 6)
text = ""
for i in range(2, 7):
    text += doc.load_page(i).get_text("text") + "\n"

lines = [line.strip() for line in text.split('\n') if line.strip()]

subjects = {
    "Mathematics": {"dir": "math_notes", "hint": "formulas"},
    "General English": {"dir": "extra_subjects_notes", "hint": "grammar vocab"},
    "General Science": {"dir": "extra_subjects_notes", "hint": "science diagrams"},
    "General Studies": {"dir": "gs_notes", "hint": "history geo polity eco maps"},
}

topics = []
current_subject = "Mathematics"

i = 0
while i < len(lines):
    line = lines[i]
    if line == "MATHEMATICS": current_subject = "Mathematics"
    elif line == "GENERAL ENGLISH" or line == "ENGLISH": current_subject = "General English"
    elif line == "CHEMISTRY" or line == "PHYSICS" or line == "BIOLOGY": current_subject = "General Science"
    elif line == "GENERAL STUDIES": current_subject = "General Studies"
    
    # Check if next line is a page range like 3-19
    if i + 1 < len(lines):
        next_line = lines[i+1]
        match = re.match(r'^(\d+)\s*-\s*(\d+)$', next_line)
        if match:
            start_page = int(match.group(1))
            end_page = int(match.group(2))
            
            title = re.sub(r'^\s*\d+\.\s*', '', line).strip()
            
            if title and title != "Practice Exercise":
                topics.append({
                    "subject": current_subject,
                    "id": f"{start_page}_{re.sub(r'[^a-zA-Z0-9]', '_', title)}",
                    "title": title,
                    "start_page": start_page,
                    "end_page": end_page
                })
            i += 1
    i += 1

taxonomy = {"subjects": {}}
for t in topics:
    sub = t["subject"]
    if sub not in taxonomy["subjects"]:
        taxonomy["subjects"][sub] = {"topics": []}
    
    dir_hint = subjects.get(sub, {"dir": "notes", "hint": ""})
    
    taxonomy["subjects"][sub]["topics"].append({
        "id": t["id"],
        "title": t["title"],
        "start_page": t["start_page"],
        "end_page": t["end_page"],
        "enrichment_dir": dir_hint["dir"],
        "enrichment_hint": dir_hint["hint"]
    })

with open('scripts/taxonomy_map.json', 'w') as f:
    json.dump(taxonomy, f, indent=2)

print(f"Extracted {len(topics)} topics!")
