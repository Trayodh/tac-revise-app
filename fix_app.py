filepath = 'app.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix literal \n on its own line
lines = content.split('\n')
new_lines = []
for line in lines:
    if line.strip() == '\\n':
        continue
    new_lines.append(line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Cleaned up literal \\n from app.js")
