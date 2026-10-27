import json
import os
import glob
import re

# 1. Load public/notes-data HTML for IVC
ivc_path = glob.glob('public/notes-data/**/indus-valley-civilization/*.html', recursive=True)
print("Found IVC files in public/notes-data:", ivc_path)

curated_html = ""
for p in ivc_path:
    with open(p, 'r', encoding='utf-8') as f:
        curated_html += f"\n<!-- FROM {os.path.basename(p)} -->\n" + f.read()

print("Curated HTML length:", len(curated_html), "chars")

# 2. Load AI expansion from test_expanded_ivc.html
ai_expansion = ""
if os.path.exists("test_expanded_ivc.html"):
    with open("test_expanded_ivc.html", "r", encoding="utf-8") as f:
        ai_expansion = f.read()

print("AI Expansion length:", len(ai_expansion), "chars")

# 3. Load library facts from chapter_snippets.json
snippets = []
with open("chapter_snippets.json", "r", encoding="utf-8") as f:
    snips = json.load(f)
    snippets = snips.get("indus-valley-civilization", [])

print("Snippets count:", len(snippets))
