with open("app_test.js", "r", encoding="utf-8") as f:
    test_lines = f.readlines()

# Find getFilteredTopicsList in app_test.js
test_idx = -1
for idx, line in enumerate(test_lines):
    if "function getFilteredTopicsList()" in line:
        test_idx = idx
        break

if test_idx == -1:
    print("Could not find getFilteredTopicsList in app_test.js")
    exit()

# We will take everything from test_idx to the end of app_test.js
replacement_lines = test_lines[test_idx:]
replacement_code = "".join(replacement_lines)

# Now read app.js
with open("app.js", "r", encoding="utf-8") as f:
    app_lines = f.readlines()

# Find getFilteredTopicsList in app.js
app_idx = -1
for idx, line in enumerate(app_lines):
    if "function getFilteredTopicsList()" in line:
        app_idx = idx
        break

if app_idx == -1:
    print("Could not find getFilteredTopicsList in app.js")
    exit()

# We will replace everything from app_idx to the end of app.js
new_app_lines = app_lines[:app_idx] + [replacement_code]
new_app_code = "".join(new_app_lines)

# Write to app.js
with open("app.js", "w", encoding="utf-8") as f:
    f.write(new_app_code)

print("Restored correct JS logic from app_test.js to app.js!")
