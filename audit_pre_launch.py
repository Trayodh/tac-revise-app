import os, re

# Read app.js
with open('app.js', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

lines = content.split('\n')
print(f"=== app.js: {len(lines)} lines, {round(len(content)/1024/1024,2)} MB")

# 1. Check image refs
img_refs = re.findall(r'src=["\']([^"\']+\.(png|jpg|gif|svg))["\']', content)
print("\n=== IMAGE REFERENCE AUDIT ===")
missing = []
for ref, ext in sorted(set(img_refs)):
    exists = os.path.exists(ref)
    status = "OK" if exists else "MISSING"
    if not exists:
        missing.append(ref)
    print(f"  {status}: {ref}")

# 2. Check for hardcoded API keys
print("\n=== HARDCODED API KEYS ===")
keys = re.findall(r'AIza[0-9A-Za-z_-]{35}', content)
if keys:
    for k in set(keys):
        print(f"  FOUND: {k}")
else:
    print("  None found in app.js (good)")

# 3. Check server.js for key
with open('server.js', 'r', encoding='utf-8', errors='replace') as f:
    srv = f.read()
srv_keys = re.findall(r'AIza[0-9A-Za-z_-]{35}', srv)
print("\n=== SERVER.JS API KEY (should be server-side only) ===")
for k in set(srv_keys):
    print(f"  server.js has: {k}")

# 4. Check for 'gemini-3.5-flash' (non-existent model name)
if 'gemini-3.5-flash' in content:
    print("\n=== WARNING: 'gemini-3.5-flash' found (not a real model) ===")
else:
    print("\n=== Model names: OK ===")

# 5. Check for dead/placeholder sections
placeholders = re.findall(r'(?:TODO|FIXME|PLACEHOLDER|lorem ipsum|Coming soon)', content, re.IGNORECASE)
print(f"\n=== PLACEHOLDERS/TODOs: {len(placeholders)} found ===")

# Summary
print(f"\n=== SUMMARY ===")
print(f"Missing images: {missing}")
print(f"App.js API key exposed: {'YES - SECURITY ISSUE' if keys else 'NO - OK'}")
