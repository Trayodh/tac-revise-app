content = open('data.js', encoding='utf-8').read()
# Let's search from line 7353 downwards
lines = content.splitlines()
print("Lines around end of December 2026:")
for i in range(7350, min(7600, len(lines))):
    if "};" in lines[i] or "const" in lines[i] or "let" in lines[i] or "function" in lines[i]:
        print(f"Line {i+1}: {lines[i]}")
