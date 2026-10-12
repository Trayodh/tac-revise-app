import json
import os

def get_subject(item, topic_name):
    subject = item.get("subject", "General Studies")
    if not subject or subject == "General Studies":
        topic_lower = topic_name.lower()
        if any(x in topic_lower for x in ["history", "indus", "vedic", "maurya", "gupta", "buddhism", "jainism", "sultanate", "mughal", "gandhi"]):
            subject = "History"
        elif any(x in topic_lower for x in ["geography", "earth", "river", "mountain", "climate", "soil", "ocean", "atmosphere"]):
            subject = "Geography"
        elif any(x in topic_lower for x in ["biology", "cell", "tissue", "disease", "blood", "plant", "animal", "human body"]):
            subject = "Biology"
        elif any(x in topic_lower for x in ["chemistry", "atom", "molecule", "reaction", "acid", "base", "metal", "gas"]):
            subject = "Chemistry"
        elif any(x in topic_lower for x in ["physics", "motion", "force", "energy", "light", "sound", "electricity", "magnetism"]):
            subject = "Physics"
    return subject

def run():
    print("Loading notes_database.json...")
    if not os.path.exists("notes_database.json"):
        print("No notes_database.json found.")
        return

    with open("notes_database.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        
    grouped_notes = {}
    
    for item in data:
        # Default to 'General Studies' and 'Miscellaneous' for legacy entries
        subject = item.get('subject', 'General Studies').strip().title()
        chapter = item.get('chapter', item.get('topic', 'Miscellaneous')).strip().title()
        
        # We group by subject + chapter
        group_key = f"{subject} - {chapter}"
        
        if group_key not in grouped_notes:
            grouped_notes[group_key] = {
                "id": chapter.replace(" ", "-").lower(),
                "title": chapter,
                "subject": subject,
                "content_blocks": []
            }
        
        content_html = item.get('text', '')
        if not content_html:
            continue
            
        topic = item.get('topic', '').strip().title()
        if topic and topic != chapter:
            content_html = f"<h5>{topic}</h5>\n{content_html}"
            
        details = item.get('details', {})
        if details:
            content_html += '<h4 style="border-left: 3px solid var(--warning); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">KEY DETAILS</h4><ul>'
            if isinstance(details, dict):
                for k, v in details.items():
                    content_html += f"<li><strong>{k.replace('_', ' ').title()}:</strong> {v}</li>"
            else:
                content_html += f"<li>{details}</li>"
            content_html += "</ul>"
            
        # Include source metadata if available
        source_pdf = item.get('source_pdf')
        source_page = item.get('source_page')
        if source_pdf:
            source_tag = f'<div style="font-size: 0.8em; color: var(--text-secondary); margin-bottom: 8px; font-style: italic;">Source: {source_pdf} (Page {source_page})</div>'
            content_html = source_tag + content_html
            
        grouped_notes[group_key]["content_blocks"].append(content_html)

    ai_notes = []
    total_groups = len(grouped_notes)
    
    print(f"Fusing {total_groups} chapter topics...")
    for i, (key, group) in enumerate(grouped_notes.items()):
        blocks = group["content_blocks"]
        if len(blocks) == 1:
            combined_content = blocks[0]
        else:
            # Clean programmatic fusion to preserve all facts and save API quota for PDF extraction
            combined_content = '<hr style="border: 0; border-top: 1px dashed var(--border); margin: 24px 0;">'.join(blocks)
        
        # Wrap the unified content in the card structure
        html = f"""<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">{group["title"].upper()}</h3>
  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">DEEP CONCEPTUAL EXPLANATION</h4>
  {combined_content}
</div>
"""
        ai_notes.append({
            "id": group["id"],
            "title": group["title"],
            "subject": group["subject"],
            "notes": html
        })

    print(f"Grouped and fused into {len(ai_notes)} unique chapter notes.")
    content = "// This file is auto-generated from notes_database.json\nconst AI_GENERATED_NOTES = " + json.dumps(ai_notes, indent=2) + ";\n"
    with open("public/ai_generated_notes.js", "w", encoding="utf-8") as f:
        f.write(content)
    with open("ai_generated_notes.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Done!")
        
if __name__ == "__main__":
    run()
