"""
Fix data.js: remove the wrongly injected NOTES_DATABASE subject entries
that were placed inside CURRENT_AFFAIRS_DB.

Structure problem:
  CURRENT_AFFAIRS_DB starts at line 6720
  At line 9004 there is a stray ','
  Lines 9005-9162 contain subject data (general-science, premium-history, etc.)
  Line 9163 is '};' - the actual close of CURRENT_AFFAIRS_DB

Fix: Remove lines 9004-9162 (the stray comma and the bad subject entries).
     Keep line 9163 (};) as the proper close of CURRENT_AFFAIRS_DB.
"""

with open('data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

total_before = len(lines)
print('Total lines before: ' + str(total_before))

# Verify lines at the boundaries
print('Line 9003: ' + lines[9002].rstrip()[:60])  # Last CA entry close
print('Line 9004: ' + lines[9003].rstrip()[:60])  # Stray ","
print('Line 9005: ' + lines[9004].rstrip()[:60])  # Start of bad injection
print('Line 9162: ' + lines[9161].rstrip()[:60])  # End of bad injection
print('Line 9163: ' + lines[9162].rstrip()[:60])  # Should be "};"
print('Line 9164: ' + lines[9163].rstrip()[:60])  # Should be blank
print('Line 9165: ' + lines[9164].rstrip()[:60])  # Should be "const CBT_EXAMS_DATABASE"

# Remove lines 9004-9162 (0-indexed: 9003 to 9161, inclusive)
# i.e. the stray "," and all injected subject blocks
# Keep line 9163 (index 9162) = "};" which closes CURRENT_AFFAIRS_DB
remove_from = 9003  # 0-indexed = line 9004
remove_to = 9162    # 0-indexed = line 9163, EXCLUSIVE (so we keep line 9163)

print('\nRemoving indices ' + str(remove_from) + ' to ' + str(remove_to-1) + ' (lines ' + str(remove_from+1) + ' to ' + str(remove_to) + ')')
removed_count = remove_to - remove_from
print('Removing ' + str(removed_count) + ' lines')
print('First line to remove: ' + lines[remove_from].rstrip()[:60])
print('Last line to remove: ' + lines[remove_to-1].rstrip()[:60])
print('First line kept after removal: ' + lines[remove_to].rstrip()[:60])

new_lines = lines[:remove_from] + lines[remove_to:]

with open('data.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

total_after = len(new_lines)
print('\nTotal lines after: ' + str(total_after))
print('Lines removed: ' + str(total_before - total_after))

# Show the fixed area
print('\nFixed area (lines 9001-9010):')
for i in range(9000, min(9010, len(new_lines))):
    print('L' + str(i+1) + ': ' + new_lines[i].rstrip()[:80])
