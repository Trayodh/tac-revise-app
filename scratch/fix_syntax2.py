import re

with open('notes_generated.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix broken operators
content = content.replace("!= =", "!==")
content = content.replace("! = =", "!==")
content = content.replace("= =", "==")
content = content.replace("= = =", "===")
content = content.replace("== =", "===")
content = content.replace("= >", "=>")

with open('notes_generated.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed operators in notes_generated.js")
