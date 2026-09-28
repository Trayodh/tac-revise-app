import re

with open('public/notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# The topic block for seismic waves currently looks like this (indented 10 spaces)
seismic_topic = '''          {
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

# Remove it from where it is now
if seismic_topic in js_content:
    js_content = js_content.replace(seismic_topic, '')
    
    # Now we need to create it as a full Chapter block and insert it after the rocks chapter.
    # The geomorphology-rocks chapter ends with its topics array and a closing brace.
    # Let's just find the start of geomorphology-rocks chapter to insert BEFORE it, or after it.
    
    # A chapter block looks like:
    #      {
    #        "id": "geomorphology-seismic-waves",
    #        "title": "Geomorphology: Seismic Waves",
    #        "icon": "fa-solid fa-earth-americas",
    #        "topics": [
    #          {
    #             "id": "geomorphology-seismic-waves",
    #             "title": "Geomorphology: Seismic Waves",
    #             "notes": "Detailed notes in notes_extra_geography.js",
    #             "mindmap": { ... }
    #          }
    #        ]
    #      },
    
    new_chapter = '''      {
        "id": "geomorphology-seismic-waves",
        "title": "Geomorphology: Seismic Waves",
        "icon": "fa-solid fa-earth-americas",
        "topics": [
          {
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
          }
        ]
      },
'''
    
    # Insert new_chapter right before geomorphology-rocks chapter
    insert_target = '''      {
        "id": "geomorphology-rocks",'''
        
    js_content = js_content.replace(insert_target, new_chapter + insert_target)
    
    with open('public/notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    # Also fix data.js just in case
    try:
        with open('data.js', 'r', encoding='utf-8') as f:
            data_content = f.read()
        if seismic_topic in data_content:
            data_content = data_content.replace(seismic_topic, '')
            data_content = data_content.replace(insert_target, new_chapter + insert_target)
            with open('data.js', 'w', encoding='utf-8') as f:
                f.write(data_content)
            with open('public/data.js', 'w', encoding='utf-8') as f:
                f.write(data_content)
    except:
        pass
        
    print("Successfully converted Seismic Waves into a standalone chapter!")
else:
    print("Could not find the seismic topic block in the file.")
