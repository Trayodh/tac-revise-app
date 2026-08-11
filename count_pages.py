import fitz
import glob

pdfs = glob.glob('*.pdf')
total = 0
for p in pdfs:
    try:
        doc = fitz.open(p)
        total += len(doc)
        print(f"{p}: {len(doc)} pages")
    except Exception as e:
        print(f"{p}: error {e}")
print(f"Total pages: {total}")
