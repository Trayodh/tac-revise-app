import re

file_path = r"c:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\data.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace <strong> with ** and </strong> with **
updated_content = content.replace("<strong>", "**").replace("</strong>", "**")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(updated_content)

print("Successfully replaced all <strong> and </strong> with ** in data.js!")
