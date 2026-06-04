import sys

filepath = 'app.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the weird characters that were created due to encoding mismatch
content = content.replace('€”', '—')
content = content.replace('â', '')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print('Fixed artifacts in app.js')
