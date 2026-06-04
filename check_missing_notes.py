import re
import glob

# Load all expanded notes keys
js_content = ""
for f in glob.glob("notes_extra*.js"):
    with open(f, "r", encoding="utf-8") as file:
        js_content += file.read()

expanded_keys = re.findall(r'EXPANDED_NOTES_DATA\[["\'](.*?)["\']\]', js_content)
print(f"Total keys in EXPANDED_NOTES_DATA: {len(expanded_keys)}")

# Let's read app.js to find topics and check if they have notes in EXPANDED_NOTES_DATA
with open("app.js", "r", encoding="utf-8") as f:
    app_content = f.read()

# We want to parse NOTES_DATABASE in app.js and find all topics
# Let's write a regex to find all topic ids
# A topic looks like: id: "topic-id", title: "topic-title", notes: `...`
# We can find all id: "..." in app.js
all_topic_defs = re.findall(r'id:\s*["\'](.*?)["\']', app_content)

missing_expanded = []
for t_id in all_topic_defs:
    # ignore common non-topic ids like subject or chapter ids or mindmap
    if t_id in ['mathematics', 'english', 'polity', 'history', 'geography', 'economics', 'physics', 'chemistry', 'biology', 'environment', 'mindmap', 'notes', 'formulas', 'topics', 'chapters', 'id', 'title']:
        continue
    # Let's check if it is in expanded_keys
    if t_id not in expanded_keys:
        # Check if it has a direct note in app.js that is not a placeholder
        # Find the topic chunk
        start_idx = app_content.find(f'id: "{t_id}"')
        if start_idx == -1:
            start_idx = app_content.find(f"id: '{t_id}'")
        if start_idx != -1:
            chunk = app_content[start_idx:start_idx+1500]
            # Check if notes field is a placeholder
            if "Detailed notes expanded in" in chunk or "notes:" not in chunk:
                missing_expanded.append(t_id)

print(f"Total topics: {len(all_topic_defs)}")
print(f"Missing expanded notes (placeholder or missing key): {len(missing_expanded)}")
print("Missing IDs:", missing_expanded)
