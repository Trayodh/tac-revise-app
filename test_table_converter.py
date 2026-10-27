import re

def convert_markdown_tables_to_html(text):
    lines = text.split('\n')
    output = []
    i = 0
    while i < len(lines):
        line = lines[i]
        # Check if line looks like a table row: starts and ends with '|'
        stripped = line.strip()
        if stripped.startswith('|') and stripped.endswith('|') and i + 1 < len(lines):
            next_stripped = lines[i+1].strip()
            # Check if next line is a separator row like | :--- | :--- | or |---|---|
            if next_stripped.startswith('|') and re.match(r'^\|[\s\:\-\|]+\|$', next_stripped):
                # We have a markdown table!
                header_cols = [c.strip() for c in stripped[1:-1].split('|')]
                alignments = []
                for align_col in next_stripped[1:-1].split('|'):
                    ac = align_col.strip()
                    if ac.startswith(':') and ac.endswith(':'):
                        alignments.append('center')
                    elif ac.endswith(':'):
                        alignments.append('right')
                    else:
                        alignments.append('left')
                
                table_html = ['<div style="overflow-x: auto; margin: 18px 0;">']
                table_html.append('<table style="width: 100%; border-collapse: collapse; background: rgba(0, 0, 0, 0.25); border-radius: 8px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.08);">')
                table_html.append('<thead><tr style="background: rgba(255, 255, 255, 0.06); border-bottom: 1px solid rgba(255, 255, 255, 0.12);">')
                
                for idx, col in enumerate(header_cols):
                    align = alignments[idx] if idx < len(alignments) else 'left'
                    clean_col = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', col)
                    table_html.append(f'<th style="padding: 10px 14px; text-align: {align}; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-primary); font-weight: 600;">{clean_col}</th>')
                table_html.append('</tr></thead><tbody>')
                
                i += 2
                row_idx = 0
                while i < len(lines):
                    row_line = lines[i].strip()
                    if not (row_line.startswith('|') and row_line.endswith('|')):
                        break
                    row_cols = [c.strip() for c in row_line[1:-1].split('|')]
                    bg_style = 'background: rgba(255, 255, 255, 0.015);' if row_idx % 2 == 1 else ''
                    table_html.append(f'<tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.03); {bg_style}">')
                    for idx, col in enumerate(row_cols):
                        align = alignments[idx] if idx < len(alignments) else 'left'
                        col_html = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', col)
                        col_html = re.sub(r'\*(.*?)\*', r'<em>\1</em>', col_html)
                        col_html = re.sub(r'`(.*?)`', r'<code>\1</code>', col_html)
                        table_html.append(f'<td style="padding: 9px 14px; text-align: {align}; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">{col_html}</td>')
                    table_html.append('</tr>')
                    row_idx += 1
                    i += 1
                    
                table_html.append('</tbody></table></div>')
                output.append('\n'.join(table_html))
                continue
                
        output.append(line)
        i += 1
        
    return '\n'.join(output)

if __name__ == '__main__':
    sample = """
### Sample Topic
| Schedule | Mnemonic | Subject |
| :--- | :---: | :--- |
| **1st** | **T** | Names of States |
| **2nd** | **E** | Emoluments and Salaries |
"""
    print(convert_markdown_tables_to_html(sample))
