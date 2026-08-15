import re

with open('notes_generated.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any String.raw that is NOT followed by a backtick
# We use a negative lookahead assertion
content = re.sub(r'String\.raw(?=[^`])', '', content)

with open('notes_generated.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed notes_generated.js")
