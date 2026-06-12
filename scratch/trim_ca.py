# Read data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Locate "July 2026":
start_idx = content.find('\n  "July 2026": [')
if start_idx == -1:
    start_idx = content.find('\n  \'July 2026\': [')

if start_idx == -1:
    print("Error: Could not find 'July 2026' entry in data.js")
    exit(1)

# Find the };;; right before CBT_EXAMS_DATABASE
end_target = '};;;\n\nconst CBT_EXAMS_DATABASE = ['
end_idx = content.find(end_target)
if end_idx == -1:
    print("Error: Could not find end of CURRENT_AFFAIRS_DB block")
    exit(1)

# We want to replace everything from start_idx up to end_idx with just "};;;\n\n"
new_content = content[:start_idx] + "\n" + end_target

# Save data.js
with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully trimmed future months from data.js!")
