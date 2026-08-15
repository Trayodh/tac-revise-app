import re

def check_old():
    with open('notes_data_upgraded.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    m = re.search(r'"id":\s*"what-is-history".*?"notes":\s*`(.*?)`', content, re.DOTALL)
    if m:
        text = m.group(1)
        text = re.sub(r'<[^>]+>', ' ', text)
        print('Old Length:', len(text.split()))
    else:
        print('Not found')

check_old()
