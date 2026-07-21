import re
with open('rebuild_armoury_engine.js', 'r') as f:
    data = f.read()

data = data.replace('\\`', '`').replace('\\$', '$').replace('\\n', '\n')

with open('rebuild_armoury_engine.js', 'w') as f:
    f.write(data)
