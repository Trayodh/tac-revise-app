with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

if text.startswith('"') and text.endswith('"'):
    text = text[1:-1]

text = text.encode('utf-8').decode('unicode_escape')

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Unescaped app.js successfully!')
