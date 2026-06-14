import json
import subprocess
import os

js_temp_path = 'scratch/temp_run.js'
with open(js_temp_path, 'w', encoding='utf-8') as f:
    f.write('const fs = require("fs");\n')
    f.write(open('data.js', encoding='utf-8').read())
    f.write('\nconsole.log(JSON.stringify(CURRENT_AFFAIRS_DB));\n')

proc = subprocess.run(['node', js_temp_path], capture_output=True, text=True)

db = json.loads(proc.stdout)

for month in ['April 2026', 'May 2026', 'June 2026']:
    print('***', month, '***')
    items = db.get(month, [])
    for item in items:
        fmt = 'NEW' if 'upscHighlights' in item else 'LEGACY'
        print(f"  ID: {item.get('id')} - Topic: {item.get('topic')} - Format: {fmt}")
