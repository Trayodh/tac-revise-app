with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's count matches
import re
matches = re.findall(r"Coaching Replica", content, re.IGNORECASE)
print(f"Found {len(matches)} occurrences of 'Coaching Replica'.")

# Print first few matches with line numbers
lines = content.splitlines()
for idx, line in enumerate(lines):
    if "Coaching Replica" in line:
        print(f"Line {idx+1}: {line.strip()}")
