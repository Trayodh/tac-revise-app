import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# First block scripts
scripts1 = """  <script src="questions_data.js?v=1785905424429"></script>
  <script src="current_affairs_db.js?v=1785905424429"></script>
  <script src="military_exercises_db.js?v=1785905424429"></script>"""

# Find the start of the first script block (line 1756 approx)
start_idx = text.find(scripts1)

if start_idx == -1:
    print("Could not find the start block. Let me find equipment_db.js instead.")
    # In my previous tool I deleted the scripts1 from the second block.
    # The first block might still have it.
    
    first_eq = text.find('<script src="equipment_db.js')
    second_eq = text.find('<script src="equipment_db.js', first_eq + 1)
    
    if second_eq != -1:
        # The duplication happens here.
        # Let's find exactly where the cut-off in the first block is.
        # It's right before second_eq
        # In the first block, we have `<script src="equipment_db.js` at first_eq.
        # Then we have the rest of the file... up to the cut-off.
        # Let's just restore the file completely from a clean slice!
        # The clean file should be:
        # 1. Everything up to first_eq
        # 2. the block starting at first_eq from the FIRST block (wait, the FIRST block is cut off)
        # 3. the block starting at second_eq from the SECOND block (which is complete)
        
        # So we can just take text[:first_eq] + text[second_eq:] !!
        # Wait, if we do text[:first_eq] + text[second_eq:], what about questions_data.js?
        # That's before first_eq. So it will be kept!
        
        new_text = text[:first_eq] + text[second_eq:]
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(new_text)
        print("Fixed index.html by merging text[:first_eq] and text[second_eq:]")
    else:
        print("Only one equipment_db.js found. File might be fixed already?")
else:
    # We found scripts1. Let's find the second instance of equipment_db
    first_eq = text.find('<script src="equipment_db.js')
    second_eq = text.find('<script src="equipment_db.js', first_eq + 1)
    
    if second_eq != -1:
        new_text = text[:first_eq] + text[second_eq:]
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(new_text)
        print("Fixed index.html by merging text[:first_eq] and text[second_eq:]")
    else:
        print("No second equipment_db found.")
