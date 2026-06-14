import sys
sys.stdout.reconfigure(encoding='utf-8')

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Find CBT_EXAMS_DATABASE start
start_idx = content.find("const CBT_EXAMS_DATABASE =")
if start_idx != -1:
    print(content[start_idx:start_idx+1500])
else:
    print("Could not find CBT_EXAMS_DATABASE")
