with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Remove the premium mock suffix
new_content = content.replace(" (TAC-REVISE Premium Mock)", "")

with open("data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Replacement complete!")
