import re
import glob

# Load all expanded notes
expanded_notes = {}
for f in glob.glob("notes_extra*.js"):
    with open(f, "r", encoding="utf-8") as file:
        content = file.read()
        # Find all keys and values
        matches = re.findall(r'EXPANDED_NOTES_DATA\[["\'](.*?)["\']\]\s*=\s*`([\s\S]*?)`', content)
        for k, v in matches:
            expanded_notes[k] = v
        matches_win = re.findall(r'window\.EXPANDED_NOTES_DATA\[["\'](.*?)["\']\]\s*=\s*`([\s\S]*?)`', content)
        for k, v in matches_win:
            expanded_notes[k] = v

print(f"Total loaded keys: {len(expanded_notes)}")
short_keys = []
for k, v in expanded_notes.items():
    cleaned = re.sub(r'<[^>]*>', '', v).strip()
    if len(cleaned) < 300:
        short_keys.append((k, len(cleaned), cleaned))

with open("audit_results.txt", "w", encoding="utf-8") as out_f:
    out_f.write(f"Total loaded keys: {len(expanded_notes)}\n")
    out_f.write(f"Total short/skeleton keys (under 300 plain text chars): {len(short_keys)}\n")
    for k, l, text in short_keys:
        out_f.write(f"- {k} ({l} chars): {repr(text[:80])}...\n")
print("Wrote results to audit_results.txt")
