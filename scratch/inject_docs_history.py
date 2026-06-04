import re
import os
import sys

# Reconfigure stdout to use UTF-8
sys.stdout.reconfigure(encoding='utf-8')

# Same parser functions
def parse_doc_content(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    start_line = 0
    for idx, line in enumerate(lines):
        if "---" in line and idx < 10:
            start_line = idx + 1
            break
            
    content_lines = [l.strip("\r\n") for l in lines[start_line:]]
    
    sections = {}
    current_section = None
    current_lines = []
    
    section_header_regex = re.compile(r'^(\d+\.\d+\.\s+.*)')
    
    for line in content_lines:
        match = section_header_regex.match(line.strip())
        if match:
            if current_section:
                sections[current_section] = current_lines
            current_section = match.group(1).strip()
            current_lines = []
        else:
            if current_section is not None:
                current_lines.append(line)
                
    if current_section and current_lines:
        sections[current_section] = current_lines
        
    return sections

TABLE_COLUMNS = {
    "Mahajanapada": 4,
    "Title": 3,
    "Land Type": 4,
    "Rank Category": 2,
    "Company": 4,
    "Literary Work": 4
}

def format_table_to_html(header_cell, cells, cols):
    all_cells = [header_cell] + cells
    rows = []
    for i in range(0, len(all_cells), cols):
        rows.append(all_cells[i:i+cols])
        
    html = []
    html.append('<table style="width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 16px; color: var(--text-secondary); background: rgba(10,10,15,0.3); border: 1px solid var(--border); border-radius: 6px; overflow: hidden; font-size: 0.95em;">')
    
    if rows:
        headers = rows[0]
        html.append('  <thead>')
        html.append('    <tr style="background: rgba(30,41,59,0.5); border-bottom: 1px solid var(--border);">')
        for idx, h in enumerate(headers):
            border_right = ' border-right: 1px solid var(--border);' if idx < len(headers) - 1 else ''
            html.append(f'      <th style="padding: 10px 12px; text-align: left; font-weight: 600; color: var(--text-primary);{border_right}">{h}</th>')
        html.append('    </tr>')
        html.append('  </thead>')
        
        html.append('  <tbody>')
        for r in rows[1:]:
            html.append('    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); transition: background 0.2s;">')
            while len(r) < cols:
                r.append("")
            for idx, c in enumerate(r):
                border_right = ' border-right: 1px solid var(--border);' if idx < len(r) - 1 else ''
                font_style = ' font-weight: 500; color: var(--text-primary);' if idx == 0 else ''
                html.append(f'      <td style="padding: 8px 12px;{border_right}{font_style}">{c}</td>')
            html.append('    </tr>')
        html.append('  </tbody>')
        
    html.append('</table>')
    return "\n".join(html)

def convert_section_to_html(title, lines):
    html = []
    html.append(f'<h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 12px; color: var(--accent); font-weight: 600; font-size: 1.15em;">📖 {title}</h4>')
    
    idx = 0
    in_list = False
    list_items = []
    
    while idx < len(lines):
        line = lines[idx]
        stripped = line.strip()
        
        if not stripped:
            idx += 1
            continue
            
        is_table_start = False
        table_cols = 0
        for start_word, cols in TABLE_COLUMNS.items():
            if stripped.startswith(start_word):
                is_table_start = True
                table_cols = cols
                table_header = stripped
                break
                
        if is_table_start:
            if in_list:
                html.append(format_list(list_items))
                list_items = []
                in_list = False
                
            table_cells = []
            idx += 1
            while idx < len(lines) and lines[idx].startswith("\t"):
                table_cells.append(lines[idx].strip("\t\r\n "))
                idx += 1
                
            html.append(format_table_to_html(table_header, table_cells, table_cols))
            continue
            
        bullet_match = re.match(r'^(\s*)([\*\-])\s*(.*)', line)
        if bullet_match:
            indent = len(bullet_match.group(1))
            text = bullet_match.group(3)
            text_formatted = re.sub(r'^([^:]+):', r'<strong style="color: var(--text-primary);">\1:</strong>', text)
            list_items.append((indent, text_formatted))
            in_list = True
            idx += 1
            continue
            
        if in_list:
            html.append(format_list(list_items))
            list_items = []
            in_list = False
            
        if stripped.startswith("Strategist Tip:"):
            tip_text = stripped[len("Strategist Tip:"):].strip()
            tip_text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', tip_text)
            tip_text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', tip_text)
            html.append(f'''<div class="strategist-tip" style="background: rgba(14,165,233,0.08); border-left: 4px solid var(--info); padding: 12px 16px; border-radius: 4px; margin-top: 14px; margin-bottom: 14px; color: var(--text-secondary); line-height: 1.5;">
  <strong style="color: var(--info);">💡 Strategist Tip:</strong> {tip_text}
</div>''')
            idx += 1
            continue
            
        if stripped.endswith(":") and len(stripped) < 100:
            header_title = stripped[:-1].strip()
            html.append(f'<h5 style="color: var(--text-primary); margin-top: 18px; margin-bottom: 8px; font-weight: 600; font-size: 1.05em; display: flex; align-items: center; gap: 6px;"><span>🔸</span> {header_title}</h5>')
            idx += 1
            continue
            
        p_text = stripped
        p_text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', p_text)
        p_text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', p_text)
        html.append(f'<p style="margin-bottom: 12px; line-height: 1.6; color: var(--text-secondary);">{p_text}</p>')
        idx += 1
        
    if in_list:
        html.append(format_list(list_items))
        
    return "\n".join(html)

def format_list(items):
    html = []
    html.append('<ul style="margin-left: 20px; list-style-type: disc; margin-bottom: 12px; color: var(--text-secondary);">')
    
    in_sublist = False
    
    for idx, (indent, text) in enumerate(items):
        text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
        text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', text)
        
        if indent > 0:
            if not in_sublist:
                html.append('  <ul style="margin-left: 20px; list-style-type: circle; margin-top: 4px; margin-bottom: 4px; color: var(--text-secondary);">')
                in_sublist = True
            html.append(f'    <li style="margin-bottom: 6px; line-height: 1.5;">{text}</li>')
        else:
            if in_sublist:
                html.append('  </ul>')
                in_sublist = False
            html.append(f'  <li style="margin-bottom: 8px; line-height: 1.6;">{text}</li>')
            
    if in_sublist:
        html.append('  </ul>')
        
    html.append('</ul>')
    return "\n".join(html)


# Define Google Doc sub-section to topic_id mapping
SECTION_MAPPING = {
    "1.1.": "chalcolithic-age",
    "1.2.": "mahajanapadas",
    "1.3.": "magadha-expansion",
    "1.4.": "mauryan-period",
    "2.1.": "post-mauryan-india",
    "2.2.": "post-mauryan-india",
    "2.3.": "post-mauryan-india",
    "3.1.": "gupta-period",
    "3.2.": "gupta-period",
    "3.3.": "gupta-period",
    "3.4.": "gupta-period",
    "4.1.": "south-indian-kingdoms",
    "4.2.": "early-medieval-india",
    "4.3.": "south-indian-kingdoms",
    "4.4.": "south-indian-kingdoms",
    "5.1.": "mughal-empire",
    "5.2.": "mughal-empire",
    "5.3.": "mughal-empire",
    "5.4.": "mughal-empire",
    "6.1.": "british-expansion",
    "6.2.": "british-expansion",
    "6.3.": "british-expansion",
    "6.4.": "european-arrival",
    "6.5.": "british-expansion",
    "6.6.": "constitutional-development",
    "7.1.": "architecture",
    "7.2.": "architecture",
    "7.3.": "architecture",
    "7.4.": "literature"
}

def main():
    doc_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\steps\11909\content.md"
    sections = parse_doc_content(doc_path)
    
    # Group HTML snippets by topic_id
    grouped_html = {}
    
    for title, lines in sorted(sections.items()):
        # Find which prefix it matches
        topic_id = None
        for prefix, t_id in SECTION_MAPPING.items():
            if title.startswith(prefix):
                topic_id = t_id
                break
                
        if not topic_id:
            print(f"Skipping section: {title} (no mapping found)")
            continue
            
        html_snippet = convert_section_to_html(title, lines)
        if topic_id not in grouped_html:
            grouped_html[topic_id] = []
        grouped_html[topic_id].append(html_snippet)
        
    # Read history notes file
    notes_file_path = "notes_extra_history.js"
    with open(notes_file_path, "r", encoding="utf-8") as f:
        notes_content = f.read()
        
    print(f"\nInjected topics list:")
    for topic_id, snippets in grouped_html.items():
        combined_html = "\n\n".join(snippets)
        
        # Look for double or single quoted assignment
        pattern_double = f'EXPANDED_NOTES_DATA["{topic_id}"] = `'
        pattern_single = f"EXPANDED_NOTES_DATA['{topic_id}'] = `"
        
        start_idx = notes_content.find(pattern_double)
        if start_idx == -1:
            start_idx = notes_content.find(pattern_single)
            if start_idx == -1:
                print(f" ❌ {topic_id}: NOT FOUND in notes_extra_history.js")
                continue
                
        # Find the closing `;
        end_assignment_idx = notes_content.find('`;', start_idx)
        if end_assignment_idx == -1:
            print(f" ❌ {topic_id}: Could not find end of assignment (`;)")
            continue
            
        # Check if already contains "Comprehensive Study Guide" to avoid double injection
        if "Comprehensive Study Guide" in notes_content[start_idx:end_assignment_idx]:
            print(f" ⚠️ {topic_id}: Already injected, skipping.")
            continue
            
        # Build insertion
        separator = '\n  <hr style="border: 0; border-top: 1px dashed var(--border); margin: 24px 0;">\n  '
        # Wrap in a clean container for layout spacing
        insertion = separator + combined_html + '\n'
        
        # Inject right before the closing backtick
        notes_content = notes_content[:end_assignment_idx] + insertion + notes_content[end_assignment_idx:]
        print(f" ✅ {topic_id}: Injected successfully!")
        
    # Write back the updated file
    with open(notes_file_path, "w", encoding="utf-8") as f:
        f.write(notes_content)
        
    print("\nInjection complete! notes_extra_history.js has been successfully updated.")

if __name__ == "__main__":
    main()
