import json
import re

subjects_map = {
    "mathematics": ["a. mathematics", "7. cds elementary mathematics", "11. afcat numerical ability", "mathematics"],
    "english": ["b. english", "a. cds english", "a. afcat english", "english"],
    "physics": ["c. physics", "physics"],
    "chemistry": ["d. chemistry", "chemistry"],
    "biology": ["e. general science / biology", "biology"],
    "history": ["3. nda history", "history"],
    "geography": ["4. nda geography", "geography"],
    "current-affairs": ["5. nda current affairs", "current affairs"],
    "polity": ["polity"],
    "economics": ["economy"],
    "reasoning": ["12. afcat reasoning & military aptitude", "reasoning"],
    "environment": ["environment"],
    "military_aptitude": ["military aptitude", "defence"]
}

# we need to do substring matching for the headers
current_subject = None
topics_by_subject = {k: [] for k in subjects_map.keys()}

with open("raw_syllabus.txt", "r", encoding="utf-8") as f:
    lines = [line.strip() for line in f.readlines() if line.strip()]

for line in lines:
    lower_line = line.lower()
    
    # Check if this line is a subject header
    found = False
    for subj_key, aliases in subjects_map.items():
        if lower_line in aliases:
            current_subject = subj_key
            found = True
            break
            
    if found:
        continue
        
    # skip explanatory lines
    if "NDA has" in line or "The official" in line or "CDS has" in line or "Same broad" in line or "The official IAF" in line or "These categories" in line or "These are specifically" in line:
        continue
    if "1. NDA" == line or "2. NDA GAT" == line or "6. CDS" == line or "9. AFCAT" == line or "8. CDS General Knowledge" == line or "10. AFCAT General Awareness" == line or "Science" == line or "Science & Technology" == line or "Other" == line:
        continue
        
    if current_subject:
        if line not in topics_by_subject[current_subject]:
            topics_by_subject[current_subject].append(line)

for subj, topics in topics_by_subject.items():
    print(f"{subj}: {len(topics)} topics")

with open("parsed_topics.json", "w", encoding="utf-8") as f:
    json.dump(topics_by_subject, f, indent=2)
