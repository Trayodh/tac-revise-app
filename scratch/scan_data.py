import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()
lines = content.split('\n')

print('Scanning lines 9000-12000 for subject entries with chapters:')
i = 9000
while i < min(len(lines), 12000):
    stripped = lines[i].strip()
    if re.match(r'^"[\w-]+":\s*\{$', stripped):
        for j in range(i+1, min(i+5, len(lines))):
            if '"chapters"' in lines[j] or '"title"' in lines[j]:
                print('L' + str(i+1) + ': ' + lines[i].strip()[:80])
                break
    i += 1

print('\nLooking for CA_DB closing brace after line 9000:')
for i in range(9000, len(lines)):
    if lines[i].strip() == '};':
        print('L' + str(i+1) + ': }; found here')
        break
