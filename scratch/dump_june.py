import json
import subprocess

js_temp_path = 'scratch/temp_run.js'
with open(js_temp_path, 'w', encoding='utf-8') as f:
    f.write('const fs = require("fs");\n')
    f.write(open('data.js', encoding='utf-8').read())
    f.write('\nconsole.log(JSON.stringify(CURRENT_AFFAIRS_DB["June 2026"], null, 2));\n')

proc = subprocess.run(['node', js_temp_path], capture_output=True, text=True)
print(proc.stdout)
