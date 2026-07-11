with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()
lines = content.split('\n')

# CURRENT_AFFAIRS_DB starts at line 6720 (index 6719)
# Simple brace tracking (ignoring strings for speed)
depth = 0
ca_start = 6719

for i in range(ca_start, min(len(lines), 9200)):
    line = lines[i]
    opens = line.count('{')
    closes = line.count('}')
    depth += opens - closes
    if depth == 0 and i > ca_start:
        print('CURRENT_AFFAIRS_DB closes near line: ' + str(i+1))
        for j in range(max(0, i-3), min(i+5, len(lines))):
            print('L' + str(j+1) + ': ' + lines[j][:80])
        break
