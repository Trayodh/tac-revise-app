import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to extract the structure of NOTES_DATABASE
# Let's find subjects
subjects = ['physics', 'chemistry', 'biology', 'geography', 'history']
for sub in subjects:
    print(f"\n================ SUBJECT: {sub} ================")
    start_idx = content.find(f"{sub}: {{")
    if start_idx == -1:
        print("Not found")
        continue
    
    # scan for next subject or end of object
    # We can approximate by matching brace level or just finding the next subject's key
    end_idx = len(content)
    for next_sub in subjects:
        if next_sub != sub:
            next_idx = content.find(f"{next_sub}: {{", start_idx + 10)
            if next_idx != -1 and next_idx < end_idx:
                end_idx = next_idx
    
    chunk = content[start_idx:end_idx]
    
    # Now find chapters
    chapters = re.findall(r'id:\s*["\'](.*?)["\'],\s*title:\s*["\'](.*?)["\']', chunk)
    for ch_id, ch_title in chapters:
        # For each chapter, print its topics
        print(f"  Chapter: {ch_title} ({ch_id})")
        # Let's locate the chapter chunk
        ch_start = chunk.find(f'id: "{ch_id}"')
        if ch_start == -1:
            ch_start = chunk.find(f"id: '{ch_id}'")
        if ch_start != -1:
            # find next chapter start or end of chunk
            ch_end = len(chunk)
            for other_ch_id, _ in chapters:
                if other_ch_id != ch_id:
                    other_idx = chunk.find(f'id: "{other_ch_id}"', ch_start + 10)
                    if other_idx == -1:
                        other_idx = chunk.find(f"id: '{other_ch_id}'", ch_start + 10)
                    if other_idx != -1 and other_idx < ch_end:
                        ch_end = other_idx
            ch_chunk = chunk[ch_start:ch_end]
            # find topics inside chapter chunk
            # Topics have id, title, notes, formulas
            topics = re.findall(r'id:\s*["\'](?!' + ch_id + r')(.*?)["\'],\s*title:\s*["\'](.*?)["\']', ch_chunk)
            for t_id, t_title in topics:
                # filter out 'mindmap' etc. if they match the pattern
                if t_id in ['mindmap', 'notes', 'formulas']:
                    continue
                print(f"    Topic: {t_title} ({t_id})")
