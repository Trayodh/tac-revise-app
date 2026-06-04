import json

with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# text is currently a literal JSON string with double quotes at start/end and escaped characters.
# We just need to load it as a JSON string to get the actual decoded string!
try:
    # If there are any stray spaces at the start/end, strip them first.
    text = text.strip()
    decoded = json.loads(text)
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(decoded)
    print("Decoded using json.loads successfully!")
except Exception as e:
    print("Failed json.loads:", e)
