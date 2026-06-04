import re
with open('ca_data.js', 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'\"No specific annual theme declared.*?\"', 'null', content)
with open('ca_data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Cleaned up')
