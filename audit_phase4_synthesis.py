import json
import os

def load_json(filepath):
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def main():
    print("Generating Synthesis Reports...")
    inventory = load_json("document_inventory.json")
    analysis = load_json("Phase3_Analysis_Results.json")
    
    if not analysis:
        print("Warning: No analysis data found. Reports will be empty.")
        
    # --- 2. Document Classification ---
    doc_classes = {}
    for item in analysis:
        dt = item.get("document_type", [])
        if isinstance(dt, str):
            dt = [dt]
        src = item.get("source_file", "Unknown")
        for t in dt:
            if src not in doc_classes:
                doc_classes[src] = set()
            doc_classes[src].add(t)
            
    with open("Document_Classification.md", "w") as f:
        f.write("# 2. Document Classification\\n\\n")
        f.write("| Document | Classifications |\\n|---|---|\\n")
        for src, classes in doc_classes.items():
            f.write(f"| {src} | {', '.join(classes)} |\\n")

    # --- 3. Subject Coverage Map & 4. Topic Coverage & 5. Depth ---
    subjects = {}
    
    for item in analysis:
        sub = item.get("subject", "Unknown")
        ch = item.get("chapter", "Unknown")
        top = item.get("topic", "Unknown")
        subtop = item.get("subtopic", "Unknown")
        depth = item.get("knowledge_depth", "D1")
        k_types = item.get("knowledge_types", [])
        nature = item.get("knowledge_nature", "STATIC")
        src = item.get("source_file", "Unknown")
        
        if sub not in subjects:
            subjects[sub] = {}
        if ch not in subjects[sub]:
            subjects[sub][ch] = {}
        if top not in subjects[sub][ch]:
            subjects[sub][ch][top] = {}
        if subtop not in subjects[sub][ch][top]:
            subjects[sub][ch][top][subtop] = []
            
        subjects[sub][ch][top][subtop].append({
            "depth": depth,
            "types": k_types,
            "nature": nature,
            "source": src
        })

    with open("Subject_Coverage_Map.md", "w") as f:
        f.write("# Subject, Topic & Depth Coverage Map\\n\\n")
        for sub, chapters in subjects.items():
            f.write(f"## {sub}\\n")
            for ch, topics in chapters.items():
                f.write(f"### {ch}\\n")
                for top, subtopics in topics.items():
                    f.write(f"#### {top}\\n")
                    for subtop, occurrences in subtopics.items():
                        f.write(f"- **{subtop}**\\n")
                        for occ in occurrences:
                            t_str = ", ".join(occ["types"]) if isinstance(occ["types"], list) else str(occ["types"])
                            f.write(f"  - Depth: *{occ['depth']}* | Nature: *{occ['nature']}* | Types: [{t_str}] | Source: `{occ['source']}`\\n")
                            
    # --- 6. Static/Dynamic Knowledge Map ---
    with open("Static_Dynamic_Knowledge_Map.md", "w") as f:
        f.write("# Static vs Dynamic Knowledge Map\\n\\n")
        f.write("## Dynamic Topics (Require Internet Verification)\\n")
        for sub, chapters in subjects.items():
            for ch, topics in chapters.items():
                for top, subtopics in topics.items():
                    for subtop, occurrences in subtopics.items():
                        if any("DYNAMIC" in str(o["nature"]).upper() for o in occurrences):
                            f.write(f"- {sub} > {ch} > {top} > {subtop}\\n")

    # --- 7. Source Overlap Map & 8. Conflicts ---
    with open("Source_Overlap_Map.md", "w") as f:
        f.write("# Source Overlap & Conflict Register\\n\\n")
        for sub, chapters in subjects.items():
            for ch, topics in chapters.items():
                for top, subtopics in topics.items():
                    for subtop, occurrences in subtopics.items():
                        sources = set(o["source"] for o in occurrences)
                        if len(sources) > 1:
                            f.write(f"### {sub} > {ch} > {top} > {subtop}\\n")
                            f.write(f"**Overlapping Sources:** {', '.join(sources)}\\n")
                            
                            # Naive conflict checking placeholder (can be expanded via LLM later)
                            depths = set(o["depth"] for o in occurrences)
                            if len(depths) > 1:
                                f.write(f"- **Conflict/Variation Detected:** Sources provide different depth levels ({', '.join(depths)}).\\n")
                            f.write("\\n")

    # --- 9. Missing Areas & 10. Expansion ---
    with open("Missing_Expansion_Areas.md", "w") as f:
        f.write("# Missing Syllabus Areas & Potential Expansion Areas\\n\\n")
        f.write("*Note: This requires cross-referencing with a master syllabus. Below is an algorithmic estimate based on low depth / missing standard topics.*\\n\\n")
        f.write("## Potential Expansion Areas (Found but low depth)\\n")
        for sub, chapters in subjects.items():
            for ch, topics in chapters.items():
                for top, subtopics in topics.items():
                    for subtop, occurrences in subtopics.items():
                        if all("D1" in str(o["depth"]) for o in occurrences):
                            f.write(f"- {sub} > {ch} > {top} > {subtop} (Currently D1)\\n")

    print("Synthesis generation complete! Output files generated.")

if __name__ == "__main__":
    main()
