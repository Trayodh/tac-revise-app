import json
import re
import html
import os

def html_to_md(h):
    if not h:
        return ""
    s = h
    # Headings
    for i in range(1, 7):
        s = re.sub(rf'<h{i}[^>]*>(.*?)</h{i}>', r'\n\n### \1\n\n', s, flags=re.DOTALL|re.IGNORECASE)
    # Bold / Italic
    s = re.sub(r'<(?:strong|b)[^>]*>(.*?)</(?:strong|b)>', r'**\1**', s, flags=re.DOTALL|re.IGNORECASE)
    s = re.sub(r'<(?:em|i)[^>]*>(.*?)</(?:em|i)>', r'*\1*', s, flags=re.DOTALL|re.IGNORECASE)
    # List items
    s = re.sub(r'<li[^>]*>(.*?)</li>', r'\n- \1', s, flags=re.DOTALL|re.IGNORECASE)
    # Breaks and paragraphs
    s = re.sub(r'<br\s*/?>', r'\n', s, flags=re.IGNORECASE)
    s = re.sub(r'<p[^>]*>(.*?)</p>', r'\n\n\1\n\n', s, flags=re.DOTALL|re.IGNORECASE)
    # Strip any remaining tags
    s = re.sub(r'<[^>]+>', '', s)
    # Unescape HTML entities
    s = html.unescape(s)
    # Normalize multiple newlines
    s = re.sub(r'\n{3,}', '\n\n', s)
    return s.strip()

def migrate():
    db_file = "notes_database.json"
    if not os.path.exists(db_file):
        print("notes_database.json not found.")
        return
        
    with open(db_file, "r", encoding="utf-8") as f:
        notes = json.load(f)
        
    converted_count = 0
    unified_notes = []
    
    for item in notes:
        # Check if legacy item needing migration
        raw_text = item.get("content")
        legacy_text = item.get("text")
        
        if not raw_text and legacy_text:
            md_body = html_to_md(legacy_text)
            
            # Append formulas if any
            formulas = item.get("formulas", [])
            if formulas:
                md_body += "\n\n### Key Formulas\n" + "\n".join(f"- {f}" for f in formulas if f)
                
            # Append tables if any
            tables = item.get("tables", [])
            if tables:
                md_body += "\n\n### Reference Tables\n" + "\n\n".join(t for t in tables if t)
                
            # Append image descriptions
            img_descs = item.get("image_descriptions", [])
            if img_descs:
                md_body += "\n\n" + "\n".join(f"> **Visual Analysis:** {desc}" for desc in img_descs if desc)
                
            # Append details summary if any
            details = item.get("details", {})
            if isinstance(details, dict):
                detail_lines = [f"- **{k.replace('_', ' ').title()}:** {v}" for k, v in details.items() if v]
                if detail_lines:
                    md_body += "\n\n### Key Exam Facts\n" + "\n".join(detail_lines)
            elif isinstance(details, str) and details:
                md_body += f"\n\n### Key Exam Facts\n- {details}"
                
            item["content"] = md_body.strip()
            converted_count += 1
            
        unified_notes.append(item)
        
    # Atomic write
    temp_file = f"{db_file}.tmp"
    with open(temp_file, "w", encoding="utf-8") as f:
        json.dump(unified_notes, f, indent=2, ensure_ascii=False)
    os.replace(temp_file, db_file)
    
    print(f"Successfully migrated {converted_count} legacy notes to unified Markdown + LaTeX schema!")
    print(f"Total notes in database: {len(unified_notes)}")

if __name__ == "__main__":
    migrate()
