import re

with open('notes_generated_upgraded.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace all occurrences of '= String.raw' with '='
content = content.replace("= String.raw", "=")

# Restore the correct String.raw usage for window.EXPANDED_NOTES_DATA
# Example: window.EXPANDED_NOTES_DATA["101_Ratio_and_Proportion"] =`
# Should be: window.EXPANDED_NOTES_DATA["101_Ratio_and_Proportion"] = String.raw`
content = re.sub(r'(window\.EXPANDED_NOTES_DATA\["[^"]+"\]\s*)=\s*`', r'\1= String.raw`', content)

with open('notes_generated_upgraded.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed successfully!")
