import os
import re
import glob

# Load existing keys from notes_extra*.js
js_content = ""
for f in glob.glob("notes_extra*.js"):
    with open(f, "r", encoding="utf-8") as file:
        js_content += file.read()

expanded_keys = set(re.findall(r'EXPANDED_NOTES_DATA\[["\'](.*?)["\']\]', js_content))
print(f"Total existing keys in EXPANDED_NOTES_DATA: {len(expanded_keys)}")

# Load NotebookLM Study Guide sections
sections = []
current_sec = None
sec_lines = []
for line in open('NotebookLM_Study_Guide.txt', 'r', encoding='utf-8'):
    if line.startswith('--- '):
        if current_sec:
            sections.append((current_sec, ''.join(sec_lines)))
        current_sec = line.strip().strip('-').strip()
        sec_lines = []
    elif current_sec:
        sec_lines.append(line)
if current_sec:
    sections.append((current_sec, ''.join(sec_lines)))

print(f"Total sections in Study Guide: {len(sections)}")

# Function to parse a guide section into HTML
def format_section_to_html(title, content):
    html = f"  <h3>📘 {title}</h3>\n"
    lines = content.split('\n')
    in_ul = False
    in_table = False
    
    for line in lines:
        line_str = line.strip()
        if not line_str:
            continue
        
        # Check for headings
        if line_str.startswith('## '):
            if in_ul:
                html += "  </ul>\n"
                in_ul = False
            if in_table:
                html += "  </table>\n"
                in_table = False
            html += f"  <h4>{line_str[3:]}</h4>\n"
        
        # Check for bullet points
        elif line_str.startswith('- '):
            if in_table:
                html += "  </table>\n"
                in_table = False
            if not in_ul:
                html += "  <ul>\n"
                in_ul = True
            
            # Simple bold formatting for key terms (e.g. term : definition)
            text = line_str[2:]
            if ' : ' in text:
                parts = text.split(' : ', 1)
                text = f"<strong>{parts[0]}</strong>: {parts[1]}"
            html += f"    <li>{text}</li>\n"
            
        # Check for tables
        elif ' | ' in line_str:
            if in_ul:
                html += "  </ul>\n"
                in_ul = False
            if not in_table:
                html += '  <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.85rem;">\n'
                in_table = True
            
            parts = [p.strip() for p in line_str.split('|')]
            # header vs row
            if '---' in line_str:
                continue
            
            row_html = "    <tr>"
            for p in parts:
                row_html += f'<td style="padding:8px; border:1px solid var(--border);">{p}</td>'
            row_html += "</tr>\n"
            html += row_html
            
        else:
            if in_ul:
                html += "  </ul>\n"
                in_ul = False
            if in_table:
                html += "  </table>\n"
                in_table = False
            html += f"  <p>{line_str}</p>\n"
            
    if in_ul:
        html += "  </ul>\n"
    if in_table:
        html += "  </table>\n"
        
    return html

# Parse app.js to find all topics
with open("app.js", "r", encoding="utf-8") as f:
    app_content = f.read()

# Find all topic declarations in app.js
# Form: id: "id", title: "title"
topic_matches = re.findall(r'id:\s*["\'](.*?)["\'],\s*title:\s*["\'](.*?)["\']', app_content)

new_injections = {}
matched_count = 0

for t_id, t_title in topic_matches:
    if t_id in ['mathematics', 'english', 'polity', 'history', 'geography', 'economics', 'physics', 'chemistry', 'biology', 'environment', 'mindmap', 'notes', 'formulas', 'topics', 'chapters', 'id', 'title']:
        continue
    
    if t_id in expanded_keys:
        continue
        
    # Search for matching section in study guide
    best_sec_title = None
    best_sec_content = None
    max_score = 0
    
    t_words = set(re.findall(r'[a-zA-Z]+', t_title.lower()))
    for s_title, s_content in sections:
        s_words = set(re.findall(r'[a-zA-Z]+', s_title.lower()))
        intersection = t_words.intersection(s_words)
        score = len(intersection)
        if score > max_score:
            max_score = score
            best_sec_title = s_title
            best_sec_content = s_content
            
    # Require at least one significant word overlap, or if title matches exactly
    if max_score >= 1 or t_title.lower() in [s[0].lower() for s in sections]:
        html_notes = format_section_to_html(best_sec_title, best_sec_content)
        new_injections[t_id] = html_notes
        matched_count += 1

print(f"Matched and preparing to inject {matched_count} new topic notes keys!")

if new_injections:
    # We will write these into a new file notes_extra_10.js
    new_js = "window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n"
    for k, v in new_injections.items():
        # Escape backticks and backslashes in HTML to prevent JS syntax error
        escaped_val = v.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
        new_js += f"window.EXPANDED_NOTES_DATA[\"{k}\"] = `\n{escaped_val}\n`;\n\n"
        
    with open("notes_extra_10.js", "w", encoding="utf-8") as out:
        out.write(new_js)
    print("Created notes_extra_10.js successfully!")
    
    # Link it in index.html before app.js
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    
    if "notes_extra_10.js" not in html:
        insert_marker = '<script src="app.js"></script>'
        new_html = html.replace(insert_marker, '<script src="notes_extra_10.js"></script>\n  <script src="app.js"></script>')
        with open("index.html", "w", encoding="utf-8") as f:
            f.write(new_html)
        print("Linked notes_extra_10.js inside index.html!")
else:
    print("No new injections matched.")
