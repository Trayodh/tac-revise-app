"""
build_canonical_notes.py

Synthesizes all 15,788 extracted raw notes and existing high-yield compendiums
into structured, master-level revision notes mapped cleanly into the canonical
202 syllabus chapters across the 12 canonical subjects.
"""

import json
import os
import re
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding='utf-8')

from smart_taxonomy_matcher import smart_match_note
from test_table_converter import convert_markdown_tables_to_html

def clean_html_content(raw_text):
    if not raw_text:
        return ""
    # Convert markdown tables to HTML tables first
    text = convert_markdown_tables_to_html(raw_text)
    
    # If the text is plain markdown without HTML tags, convert basic markdown to HTML
    if '<p>' not in text and '<div>' not in text:
        lines = text.split('\n')
        html_lines = []
        in_list = False
        for l in lines:
            l_strip = l.strip()
            if not l_strip:
                if in_list:
                    html_lines.append("</ul>")
                    in_list = False
                continue
            if l_strip.startswith('- ') or l_strip.startswith('* '):
                if not in_list:
                    html_lines.append('<ul style="margin: 8px 0; padding-left: 20px;">')
                    in_list = True
                item_text = l_strip[2:]
                item_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', item_text)
                item_text = re.sub(r'`(.*?)`', r'<code>\1</code>', item_text)
                html_lines.append(f'<li style="margin-bottom: 6px; line-height: 1.6;">{item_text}</li>')
            elif l_strip.startswith('#### '):
                if in_list:
                    html_lines.append("</ul>")
                    in_list = False
                h = l_strip[5:]
                html_lines.append(f'<h5 style="color: var(--accent); margin-top: 14px; margin-bottom: 6px; font-weight: 600;">{h}</h5>')
            elif l_strip.startswith('### '):
                if in_list:
                    html_lines.append("</ul>")
                    in_list = False
                h = l_strip[4:]
                html_lines.append(f'<h4 style="color: var(--text-primary); margin-top: 18px; margin-bottom: 8px; font-weight: 600; border-left: 3px solid var(--accent); padding-left: 8px;">{h}</h4>')
            elif l_strip.startswith('## '):
                if in_list:
                    html_lines.append("</ul>")
                    in_list = False
                h = l_strip[3:]
                html_lines.append(f'<h3 style="color: var(--accent); margin-top: 22px; margin-bottom: 10px; font-weight: 700;">{h}</h3>')
            elif l_strip.startswith('<table') or l_strip.startswith('<div'):
                if in_list:
                    html_lines.append("</ul>")
                    in_list = False
                html_lines.append(l)
            else:
                if in_list:
                    html_lines.append("</ul>")
                    in_list = False
                p = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', l_strip)
                p = re.sub(r'`(.*?)`', r'<code>\1</code>', p)
                html_lines.append(f'<p style="margin-bottom: 10px; line-height: 1.6;">{p}</p>')
        if in_list:
            html_lines.append("</ul>")
        text = '\n'.join(html_lines)

    return text

def extract_special_boxes(content_blocks):
    traps = []
    mnemonics = []
    tips = []
    regular_blocks = []

    for block in content_blocks:
        text_lower = block.lower()
        if 'trap alert' in text_lower or 'common trap' in text_lower or 'distractor' in text_lower:
            traps.append(block)
        elif 'mnemonic' in text_lower or 'memory hack' in text_lower or 'shortcut' in text_lower:
            mnemonics.append(block)
        elif 'pyq' in text_lower or 'upsc highlight' in text_lower or 'exam relevance' in text_lower:
            tips.append(block)
        else:
            regular_blocks.append(block)

    return traps, mnemonics, tips, regular_blocks

def synthesize_chapter(subject_id, chapter_id, chapter_title, raw_items, existing_base_note):
    # 1. Process all raw items into content blocks
    extracted_blocks = []
    details_list = []
    sources_seen = set()

    for item in raw_items:
        raw_text = item.get('text') or item.get('content') or ''
        if not raw_text.strip():
            continue

        cleaned = clean_html_content(raw_text)
        
        # Topic / Subchapter header if distinct
        topic = (item.get('topic') or '').strip()
        subchapter = (item.get('subchapter') or '').strip()
        headers = [h for h in [subchapter, topic] if h and h.lower() != chapter_title.lower() and h.lower() != chapter_id.lower()]
        if headers:
            header_str = " &bull; ".join(dict.fromkeys(headers))
            cleaned = f'<h5 style="color: var(--accent-light); margin: 14px 0 6px 0; font-size: 0.92rem; font-weight: 600;">{header_str}</h5>\n' + cleaned

        # Details dict
        details = item.get('details')
        if details and isinstance(details, dict):
            detail_lines = []
            for k, v in details.items():
                if v and str(v).strip():
                    k_clean = k.replace('_', ' ').title()
                    detail_lines.append(f'<li><strong>{k_clean}:</strong> {v}</li>')
            if detail_lines:
                cleaned += '<div style="background: rgba(255,255,255,0.02); border-left: 3px solid var(--accent); padding: 8px 12px; margin: 10px 0; border-radius: 4px;"><ul style="margin: 0; padding-left: 18px;">' + "".join(detail_lines) + '</ul></div>'

        # Source citation
        src_pdf = item.get('source_pdf') or item.get('source_book')
        src_page = item.get('source_page') or item.get('page')
        if src_pdf and (src_pdf, src_page) not in sources_seen:
            sources_seen.add((src_pdf, src_page))
            cleaned += f'<div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); margin-top: 4px; text-align: right;">Ref: {src_pdf[:30]} (p. {src_page})</div>'

        extracted_blocks.append(cleaned)

    # 2. Extract special callout sections
    traps, mnemonics, tips, regulars = extract_special_boxes(extracted_blocks)

    # 3. Build HTML components
    html_parts = []
    
    # Header
    html_parts.append(f"""<div class="revision-card">
  <h3><i class="fa-solid fa-graduation-cap" style="color: var(--accent); margin-right: 8px;"></i> {chapter_title.upper()} — MASTER REVISION GUIDE</h3>""")

    # Strategic tip / PYQ trend banner if available
    if tips:
        combined_tips = "<br>".join(tips[:3])
        html_parts.append(f"""  <div class="strategist-tip">
    <strong>🎯 Strategic PYQ Insights & Exam Focus:</strong>
    <div style="margin-top: 6px;">{combined_tips}</div>
  </div>""")

    # Traps & Distractor Nuances if available
    if traps:
        combined_traps = "<br>".join(traps[:3])
        html_parts.append(f"""  <div class="trap-box">
    <strong>⚡ High-Yield Exam Traps & Examiner Distractors:</strong>
    <div style="margin-top: 6px;">{combined_traps}</div>
  </div>""")

    # Mnemonics if available
    if mnemonics:
        combined_mnemonics = "<br>".join(mnemonics[:3])
        html_parts.append(f"""  <div class="mnemonic-box">
    <strong>💡 High-Speed Mnemonics & Memory Triggers:</strong>
    <div style="margin-top: 6px;">{combined_mnemonics}</div>
  </div>""")

    # 4. If existing base notes exist and are substantive (>200 chars), preserve them at the core!
    if existing_base_note and len(existing_base_note.strip()) > 200:
        base_clean = convert_markdown_tables_to_html(existing_base_note)
        # Strip outer revision-card if present to prevent nesting
        base_clean = re.sub(r'^\s*<div class="revision-card"[^>]*>', '', base_clean)
        base_clean = re.sub(r'<\/div>\s*$', '', base_clean)
        
        html_parts.append(f"""  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 20px; margin-bottom: 12px; color: var(--text-primary); font-weight: 600;">📌 CORE CONCEPTUAL FOUNDATIONS</h4>
  {base_clean}""")

    # 5. Integrate Extracted Library Insights
    if regulars:
        # Group and deduplicate regular blocks
        unique_regulars = []
        seen_snippets = set()
        for blk in regulars:
            snip = blk[:100].strip()
            if snip not in seen_snippets:
                seen_snippets.add(snip)
                unique_regulars.append(blk)
                
        # Limit to reasonable length to avoid overwhelming DOM while keeping all distinct points
        joined_library = '<hr style="border: 0; border-top: 1px dashed rgba(255,255,255,0.08); margin: 20px 0;">'.join(unique_regulars[:25])
        html_parts.append(f"""  <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 28px; margin-bottom: 12px; color: var(--text-primary); font-weight: 600;">📚 DEEP CONCEPTUAL EXPANSION & LIBRARY FACTS</h4>
  <div style="line-height: 1.6; color: var(--text-secondary);">
    {joined_library}
  </div>""")

    # Close the revision-card container
    html_parts.append("</div>\n")
    return "\n".join(html_parts)

def run():
    print("=== STARTING CANONICAL NOTES SYNTHESIS PIPELINE ===")
    
    # 1. Load canonical syllabus (202 chapters)
    with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
        syllabus = json.load(f)

    chapter_map = {}
    subject_chapters = defaultdict(list)
    for sub_id, sub_data in syllabus.items():
        for c in sub_data['chapters']:
            ch_id = c['id']
            chapter_map[ch_id] = {
                'subject': sub_id,
                'title': c['title'],
                'id': ch_id
            }
            subject_chapters[sub_id].append(ch_id)

    print(f"Loaded {len(chapter_map)} canonical chapters across {len(syllabus)} subjects.")

    # 2. Load existing base notes from notes_data.js
    print("Loading base notes from notes_data.js...")
    existing_notes = {}
    try:
        with open('notes_data.js', 'r', encoding='utf-8') as f:
            js_code = f.read()
        import subprocess
        # Extract existing notes via node script
        node_script = """
        const { NOTES_DATABASE } = require('./notes_data.js');
        const map = {};
        for (const sub of Object.values(NOTES_DATABASE)) {
            for (const ch of sub.chapters || []) {
                const t = (ch.topics || [])[0];
                if (t && t.notes) {
                    map[ch.id] = t.notes;
                }
            }
        }
        process.stdout.write(JSON.stringify(map));
        """
        proc = subprocess.run(['node', '-e', node_script], capture_output=True, text=True, encoding='utf-8')
        if proc.returncode == 0:
            existing_notes = json.loads(proc.stdout)
            print(f"Extracted {len(existing_notes)} existing chapter notes from notes_data.js.")
    except Exception as e:
        print(f"Warning loading base notes: {e}")

    # 3. Load notes_database.json (15,788 items)
    print("Loading notes_database.json...")
    with open('notes_database.json', 'r', encoding='utf-8') as f:
        raw_notes = json.load(f)
    print(f"Loaded {len(raw_notes)} raw notes.")

    # 4. Map each raw note into its canonical chapter
    print("Classifying notes into 202 canonical chapters...")
    notes_by_chapter = defaultdict(list)
    for n in raw_notes:
        sub, ch_id = smart_match_note(n, chapter_map, subject_chapters)
        notes_by_chapter[ch_id].append(n)

    # 5. Synthesize every single one of the 202 canonical chapters
    print(f"Synthesizing all 202 canonical chapters...")
    ai_notes = []
    
    for sub_id, sub_data in syllabus.items():
        for ch in sub_data['chapters']:
            ch_id = ch['id']
            ch_title = ch['title']
            ch_items = notes_by_chapter.get(ch_id, [])
            base_note = existing_notes.get(ch_id, "")

            synthesized_html = synthesize_chapter(sub_id, ch_id, ch_title, ch_items, base_note)

            ai_notes.append({
                "id": ch_id,
                "title": ch_title,
                "subject": sub_id,
                "notes": synthesized_html
            })

    print(f"Generated {len(ai_notes)} master synthesized revision chapters.")

    # 6. Write out ai_generated_notes.js
    content = "// Generated by build_canonical_notes.py - Structured into 202 Canonical Syllabus Chapters\n"
    content += "const AI_GENERATED_NOTES = " + json.dumps(ai_notes, indent=2, ensure_ascii=False) + ";\n"
    content += "if (typeof window !== 'undefined') { window.AI_GENERATED_NOTES = AI_GENERATED_NOTES; }\n"
    content += "if (typeof module !== 'undefined') { module.exports = { AI_GENERATED_NOTES }; }\n"

    def safe_write_file(filepath, text, chunk_size=2*1024*1024):
        with open(filepath, "w", encoding="utf-8") as f:
            for i in range(0, len(text), chunk_size):
                f.write(text[i:i+chunk_size])

    safe_write_file("ai_generated_notes.js", content)
    if os.path.exists("public"):
        safe_write_file("public/ai_generated_notes.js", content)

    print("Saved ai_generated_notes.js and public/ai_generated_notes.js successfully!")

if __name__ == "__main__":
    run()
