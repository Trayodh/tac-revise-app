import json
import os

print("Starting PYQ Metadata Repair...")

try:
    with open('verified_pyqs.json', 'r', encoding='utf-8') as f:
        pyqs = json.load(f)
except FileNotFoundError:
    print("Error: verified_pyqs.json not found.")
    exit(1)

repaired_count = 0
questions = pyqs.get("questions", [])

for q in questions:
    exams = set()
    years = set()
    
    if "occurrences" in q:
        for occ in q["occurrences"]:
            doc = occ.get("source_document", "").lower()
            if "cds" in doc:
                exams.add("CDS")
            if "nda" in doc:
                exams.add("NDA")
            if "afcat" in doc:
                exams.add("AFCAT")
            if "capf" in doc:
                exams.add("CAPF")
                
            # Naive year extraction from document name if exists
            for year in range(2010, 2027):
                if str(year) in doc:
                    years.add(str(year))
                    
    if exams:
        q["inferred_exams"] = list(exams)
        repaired_count += 1
    if years:
        q["inferred_years"] = list(years)

with open('verified_pyqs_repaired.json', 'w', encoding='utf-8') as f:
    json.dump(pyqs, f, indent=2)

print(f"Repaired {repaired_count} out of {len(questions)} questions by inferring metadata from source documents.")
print("Saved to verified_pyqs_repaired.json")
