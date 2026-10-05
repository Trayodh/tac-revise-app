import re

with open('notes_generated_targeted.js', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'window\.EXPANDED_NOTES_DATA\["(.*?)"\] = `\n(.*?)\n`;', text, re.DOTALL)
truncated = [t for t, c in matches if not c.strip().endswith('</div>')]
print(f'Truncated notes: {len(truncated)}')

short_notes = [t for t, c in matches if len(c.split()) < 1000]
print(f'Short notes (<1000 words): {len(short_notes)}')
