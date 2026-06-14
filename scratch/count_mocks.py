import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find all mock test definitions in the database
# We can evaluate the database array or extract titles via regex
titles = re.findall(r'"title":\s*"([^"]+)"', content)
subjects = re.findall(r'"subject":\s*"([^"]+)"', content)
exams = re.findall(r'"exam":\s*"([^"]+)"', content)

print(f"Total test titles: {len(titles)}")
for t, s, e in zip(titles, subjects, exams):
    print(f"Exam: {e} | Subject: {s} | Title: {t}")
