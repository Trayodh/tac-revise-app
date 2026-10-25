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
        subject = (item.get('subject') or 'General Studies').strip().title()
        chapter = (item.get('chapter') or item.get('topic') or 'Miscellaneous').strip().title()
        
        # We group by subject + chapter
        group_key = f"{subject} - {chapter}"
        
        if group_key not in grouped_notes:
            grouped_notes[group_key] = {
                "id": chapter.replace(" ", "-").lower(),
                "title": chapter,
                "subject": subject,
                "content_blocks": []
            }
        
        raw_text = item.get('text') or item.get('content') or ''
        if not raw_text:
            continue
            
        topic = (item.get('topic') or '').strip().title()
        subchapter = (item.get('subchapter') or '').strip().title()
        
        # Format markdown to clean HTML if not already HTML
        if '<p>' not in raw_text and '<div>' not in raw_text:
            import re
            lines = raw_text.splitlines()
            html_lines = []
            in_list = False
            for line in lines:
                l_strip = line.strip()
                if not l_strip:
                    if in_list:
                        html_lines.append("</ul>")
                        in_list = False
                    continue
                # bullet points
                if l_strip.startswith('- ') or l_strip.startswith('* '):
                    if not in_list:
                        html_lines.append('<ul style="margin: 8px 0; padding-left: 20px;">')
                        in_list = True
                    item_text = l_strip[2:]
                    item_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', item_text)
                    html_lines.append(f'<li>{item_text}</li>')
                elif l_strip.startswith('### '):
                    if in_list:
                        html_lines.append("</ul>")
                        in_list = False
                    h_text = l_strip[4:]
                    html_lines.append(f'<h5 style="color: var(--accent); margin-top: 14px; margin-bottom: 6px;">{h_text}</h5>')
                else:
                    if in_list:
                        html_lines.append("</ul>")
                        in_list = False
                    p_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', l_strip)
                    html_lines.append(f'<p style="margin-bottom: 8px; line-height: 1.6;">{p_text}</p>')
            if in_list:
                html_lines.append("</ul>")
            content_html = "\n".join(html_lines)
        else:
            content_html = raw_text

        # Add topic / subchapter header
        header_parts = [p for p in [subchapter, topic] if p and p != chapter]
        if header_parts:
            sub_title = " &bull; ".join(dict.fromkeys(header_parts))
            content_html = f'<h5 style="color: var(--text-primary); margin-bottom: 8px; border-bottom: 1px dashed var(--border); padding-bottom: 4px; font-weight: 600;">{sub_title}</h5>\n' + content_html
            
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

    content = "// This file is auto-generated from notes_database.json\nconst AI_GENERATED_NOTES = " + json.dumps(ai_notes, indent=2) + ";\n"
    def safe_write_file(filepath, text, chunk_size=2*1024*1024):
        with open(filepath, "w", encoding="utf-8") as f:
            for i in range(0, len(text), chunk_size):
                f.write(text[i:i+chunk_size])

    safe_write_file("public/ai_generated_notes.js", content)
    safe_write_file("ai_generated_notes.js", content)
    print("Done!")
        
if __name__ == "__main__":
    run()
