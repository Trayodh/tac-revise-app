with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.strip().lstrip('"').rstrip('"')

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(text)
print('Stripped quotes!')
