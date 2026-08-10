from pypdf import PdfReader
r = PdfReader('pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf')
for t in r.outline:
    if hasattr(t, 'title'):
        print(f"{t.title}: Page {r.get_destination_page_number(t)}")
