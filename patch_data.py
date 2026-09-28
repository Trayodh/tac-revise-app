import re

with open('data.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

new_topic = '''          {
            "id": "geomorphology-seismic-waves",
            "title": "Geomorphology: Seismic Waves",
            "notes": "Detailed notes in notes_extra_geography.js",
            "mindmap": {
              "root": "Seismic Waves",
              "branches": [
                {
                  "title": "Body Waves",
                  "subnodes": [
                    "P-Waves",
                    "S-Waves"
                  ]
                },
                {
                  "title": "Surface Waves",
                  "subnodes": [
                    "L-Waves"
                  ]
                }
              ]
            }
          },
'''

pattern = r'("id": "geomorphology-rocks",\s*"title": "Geomorphology:[^"]*",\s*"notes": "[^"]*",\s*"formulas": "[^"]*",\s*"mindmap": \{.*?\})'

# Find the end of the mindmap for geomorphology-rocks
# Let's do a simpler replace. Let's just find the first "id": "geomorphology-rocks" inside the topics array and prepend our new topic.
# We'll just look for:
#         "topics": [
#           {
#             "id": "geomorphology-rocks",

replace_target = '''        "topics": [
          {
            "id": "geomorphology-rocks",'''

replace_with = f'''        "topics": [
{new_topic}          {{
            "id": "geomorphology-rocks",'''

if replace_target in js_content and new_topic not in js_content:
    js_content = js_content.replace(replace_target, replace_with)
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Successfully patched data.js!")
else:
    print("Already patched or target not found.")
