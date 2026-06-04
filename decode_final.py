import codecs

with open('app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# text is a string with literal \n (two characters: backslash, n)
# We can decode it using unicode_escape
try:
    decoded = codecs.decode(text, 'unicode_escape')
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(decoded)
    print("Successfully decoded using unicode_escape!")
except Exception as e:
    print("Error:", e)
