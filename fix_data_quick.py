import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# The error is:
#           {
#             id: "ca-spain-c295",
#             title: "India-Spain Aerospace Cooperation & C-295 Project",
#           {
#             id: "ca-space-nuclear",

target = """          {
            id: "ca-spain-c295",
            title: "India-Spain Aerospace Cooperation & C-295 Project",
          {
            id: "ca-space-nuclear","""

replacement = """          {
            id: "ca-spain-c295",
            title: "India-Spain Aerospace Cooperation & C-295 Project"
          },
          {
            id: "ca-space-nuclear","""

if target in content:
    content = content.replace(target, replacement)
    with open('data.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed data.js syntax error.")
else:
    print("Target not found.")
