with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace Coaching Replica references
new_content = content.replace(" (Coaching Replica)", " (TAC-REVISE Premium Mock)")

with open("data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replacement complete!")
