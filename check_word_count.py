import re

with open('notes_generated_targeted.js', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'window\.EXPANDED_NOTES_DATA\["(.*?)"\] = `\n(.*?)\n`;', text, re.DOTALL)
lengths = []
for title, content in matches:
    # basic word count
    words = len(content.split())
    lengths.append((words, title))

if lengths:
    avg = sum(w for w, t in lengths) / len(lengths)
    lengths.sort()
    print(f"Average words per note: {avg:.1f}")
    print(f"Shortest note: {lengths[0][0]} words ({lengths[0][1]})")
    print(f"Longest note: {lengths[-1][0]} words ({lengths[-1][1]})")
else:
    print("No matches found.")
