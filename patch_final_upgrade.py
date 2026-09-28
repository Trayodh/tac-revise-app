import re

with open('public/notes_generated_final_upgrade.js', 'r', encoding='utf-8') as f:
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

replace_target = '''        "topics": [
          {
            "id": "geomorphology-rocks",'''

replace_with = f'''        "topics": [
{new_topic}          {{
            "id": "geomorphology-rocks",'''

if replace_target in js_content and new_topic not in js_content:
    js_content = js_content.replace(replace_target, replace_with)
    with open('public/notes_generated_final_upgrade.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    with open('notes_generated_final_upgrade.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Successfully patched notes_generated_final_upgrade.js!")
else:
    print("Already patched or target not found.")
