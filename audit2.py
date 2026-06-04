import re, os

with open('app.js', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Find images/ src references
pattern = r'src="(images/[^"]+)"'
matches = re.findall(pattern, content)
print("images/ refs:", sorted(set(matches)))

# Also check single-quoted
pattern2 = r"src='(images/[^']+)'"
matches2 = re.findall(pattern2, content)
print("images/ refs (sq):", sorted(set(matches2)))

all_refs = set(matches) | set(matches2)
print("\nAll unique image refs:", sorted(all_refs))
for ref in sorted(all_refs):
    exists = os.path.exists(ref)
    print(f"  {'OK' if exists else 'MISSING'}: {ref}")

# Find TODOs
lines = content.split('\n')
for i, line in enumerate(lines):
    up = line.upper()
    if 'TODO' in up or 'FIXME' in up or 'PLACEHOLDER' in up or 'COMING SOON' in up:
        print(f"TODO/PLACEHOLDER L{i+1}: {line[:180]}")
