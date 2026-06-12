import re

content = open('data.js', encoding='utf-8').read()
# Find let CURRENT_AFFAIRS_DB = { ... }
start_idx = content.find('let CURRENT_AFFAIRS_DB = {')
if start_idx != -1:
    # scan for keys inside
    sub = content[start_idx:start_idx+120000] # get a good chunk
    keys = re.findall(r'\"([A-Za-z]+ \d{4})\"\s*:', sub)
    print("Found keys:", keys)
else:
    print("Not found")
