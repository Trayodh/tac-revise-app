import re

def count_expanded(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f'Cannot read {filename}: {e}')
        return
        
    pattern = r'(window\.EXPANDED_NOTES_DATA\[[^\]]+\]|EXPANDED_NOTES_DATA\[[^\]]+\]|let\s+[a-zA-Z0-9_]+\s*)\s*=\s*(.*?);(?=\n\s*(?:window\.EXPANDED_NOTES_DATA|EXPANDED_NOTES_DATA|let|const|//|export|$))'
    matches = re.finditer(pattern, content, re.DOTALL)
    
    total = 0
    expanded = 0
    short_topics = []
    
    for m in matches:
        key = m.group(1)
        val = m.group(2).strip()
        
        # Remove String.raw prefix
        if val.startswith('String.raw`'):
            val = val[len('String.raw'):]
        
        if val.startswith('`') and val.endswith('`'):
            text = val[1:-1]
        elif val.startswith('"') and val.endswith('"'):
            text = val[1:-1]
        else:
            text = val
        
        text = re.sub(r'<[^>]+>', ' ', text)
        words = len(text.split())
        total += 1
        if words >= 800:
            expanded += 1
        else:
            short_topics.append((key, words))
            
    print(f'{filename}: {expanded}/{total} expanded (>800 words)')
    if short_topics:
        print("Short topics:")
        for k, w in short_topics:
            print(f"  {k}: {w} words")

count_expanded('notes_extra_history.js')
count_expanded('notes_generated.js')
