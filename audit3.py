import os, re

all_refs = set()
for fname in os.listdir('.'):
    if fname.endswith('.js') and (fname.startswith('notes_') or fname == 'app.js'):
        with open(fname, 'r', encoding='utf-8', errors='replace') as fp:
            c = fp.read()
        refs = re.findall(r'images/([a-zA-Z0-9_]+\.(?:png|jpg|gif|svg))', c)
        for r in refs:
            all_refs.add('images/' + r)

print('Image refs in notes/app files:')
missing = []
for ref in sorted(all_refs):
    exists = os.path.exists(ref)
    status = "OK" if exists else "MISSING"
    print("  " + status + ": " + ref)
    if not exists:
        missing.append(ref)

print("")
print("Missing images: " + str(missing))
print("Total unique refs: " + str(len(all_refs)))
