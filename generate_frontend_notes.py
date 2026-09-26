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
            for k, v in details.items():
                content_html += f"<li><strong>{k.replace('_', ' ').title()}:</strong> {v}</li>"
            content_html += "</ul>"
            
        # Include source metadata if available
        source_pdf = item.get('source_pdf')
        source_page = item.get('source_page')
        if source_pdf:
            source_tag = f'<div style="font-size: 0.8em; color: var(--text-secondary); margin-bottom: 8px; font-style: italic;">Source: {source_pdf} (Page {source_page})</div>'
            content_html = source_tag + content_html
            
        grouped_notes[group_key]["content_blocks"].append(content_html)

    from google import genai
    from dotenv import load_dotenv
    load_dotenv()
    client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))
    MERGE_MODEL = "gemini-2.5-flash"

    ai_notes = []
    total_groups = len(grouped_notes)
    
    print(f"Starting AI merge for {total_groups} topics...")
    for i, (key, group) in enumerate(grouped_notes.items()):
        print(f"Processing ({i+1}/{total_groups}): {group['title']}")
        
        blocks = group["content_blocks"]
        if len(blocks) == 1:
            combined_content = blocks[0]
        else:
            # We have multiple sources, fuse them with AI
            prompt = f"""
You are an expert educational content creator. You are given multiple sets of notes extracted from different textbooks on the same topic: {group['title']}.
Your task is to merge them into a single, comprehensive master note.

RULES:
1. Preserve ALL unique facts, dates, names, definitions, and concepts from all sources.
2. Remove any duplicate or overlapping information.
3. Organize the content logically into paragraphs and bullet points.
4. Output MUST be styled with HTML tags like <p>, <ul>, <li>, <strong>, <em>, and inline CSS (e.g. <span style='color: var(--success);'> for important terms).
5. Do NOT include markdown code block formatting (like ```html). Return ONLY the raw HTML string.
6. The output should be a cohesive reading experience, not just a stack of different notes.

SOURCE NOTES:
"""
            for idx, b in enumerate(blocks):
                prompt += f"\n\n--- SOURCE {idx + 1} ---\n{b}"
                
            try:
                response = client.models.generate_content(model=MERGE_MODEL, contents=prompt)
                combined_content = response.text.strip()
                if combined_content.startswith("```html"):
                    combined_content = combined_content[7:]
                if combined_content.startswith("```"):
                    combined_content = combined_content[3:]
                if combined_content.endswith("```"):
                    combined_content = combined_content[:-3]
            except Exception as e:
                print(f"Error merging notes for {group['title']}: {e}")
                # Fallback to concatenation if API fails
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
    with open("ai_generated_notes.js", "w", encoding="utf-8") as f:
        f.write("// This file is auto-generated from notes_database.json\n")
        f.write("const AI_GENERATED_NOTES = ")
        json.dump(ai_notes, f, indent=2)
        f.write(";\n")
    print("Done!")
        
if __name__ == "__main__":
    run()
