with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Let's find getFilteredTopicsList
idx = content.find('function getFilteredTopicsList()')
before_content = content[:idx]

level = 0
lines = before_content.split('\n')
for line_num, line in enumerate(lines, 1):
    old_level = level
    for char in line:
        if char == '{':
            level += 1
        elif char == '}':
            level -= 1
    # print line when level returns to 0 or becomes negative or we reach end
    if old_level > 0 and level == 0:
        # this is a top-level block close!
        print(f"Top-level block closed at line {line_num}: {line.strip()[:100]}")
    elif level < 0:
        print(f"ERROR: Level became negative at line {line_num}: {line.strip()[:100]}")
        level = 0

print(f"Ending level before getFilteredTopicsList: {level}")
