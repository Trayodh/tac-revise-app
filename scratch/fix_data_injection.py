import sys

with open('data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

total = len(lines)
print('Total lines: ' + str(total))

# Lines to remove: 9004 to 9162 (1-indexed), i.e. indices 9003 to 9161
# Line 9004 is the stray ","
# Lines 9005-9162 are the injected subject blocks
# Line 9163 "}" stays as close of CURRENT_AFFAIRS_DB

remove_start = 9003  # 0-indexed = line 9004
remove_end = 9162    # 0-indexed = line 9162 (inclusive)

removed = lines[remove_start:remove_end+1]
print('Removing lines ' + str(remove_start+1) + ' to ' + str(remove_end+1))
print('First removed line: ' + removed[0].strip()[:60])
print('Last removed line: ' + removed[-1].strip()[:60])

# Write the fixed file
new_lines = lines[:remove_start] + lines[remove_end+1:]
with open('data.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('Fixed! New total lines: ' + str(len(new_lines)))
