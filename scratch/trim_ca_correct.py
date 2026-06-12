with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Locate "July 2026"
start_idx = content.find('\n  "July 2026": [')
if start_idx == -1:
    start_idx = content.find('\n  \'July 2026\': [')

if start_idx == -1:
    print("Error: Could not find 'July 2026' entry in data.js")
    exit(1)

# Find the next '};;;' after July 2026
end_idx = content.find('};;;', start_idx)
if end_idx == -1:
    print("Error: Could not find end of CURRENT_AFFAIRS_DB block (};;;)")
    exit(1)

# Trim out the July-December block
new_content = content[:start_idx] + "\n" + content[end_idx:]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Trimmed CURRENT_AFFAIRS_DB successfully!")
