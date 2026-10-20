import fitz

unscanned = {
    'doc1.pdf': list(range(17, 27)),
    'doc2.pdf': list(range(19, 29)),
    'doc5.pdf': list(range(35, 41)),
    'doc7.pdf': list(range(18, 26)),
    'doc8.pdf': list(range(17, 26)),
    'doc9.pdf': list(range(17, 30))
}

for pdf, pages in unscanned.items():
    doc = fitz.open(pdf)
    print(f"=== {pdf}: {len(pages)} unextracted pages ===")
    for p in pages:
        page = doc[p - 1]
        text = page.get_text().strip()
        imgs = page.get_images()
        rect = page.rect
        t_preview = repr(text[:60]) if text else "NO TEXT (HANDWRITTEN/IMAGE)"
        print(f"  Page {p}: {t_preview}, {len(imgs)} imgs, size={rect.width:.0f}x{rect.height:.0f}")
