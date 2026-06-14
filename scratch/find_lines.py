import re

with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "report-solutions-list" in line or "cbt-report-overlay" in line or "submitExam" in line or "submit-exam" in line:
        print(f"{i+1}: {line.strip()}")
