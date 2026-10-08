import re
with open("index.html", "r", encoding="utf-8") as f:
    text = f.read()
scripts = re.findall(r'<script.*?</script>', text, flags=re.IGNORECASE|re.DOTALL)
for s in scripts:
    m = re.search(r'src\s*=\s*["\'](.*?)["\']', s, re.IGNORECASE)
    if m:
        print(m.group(1))
