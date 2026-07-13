import sys
import fitz
import json
import io
import contextlib

# Suppress warnings
with contextlib.redirect_stderr(io.StringIO()):
    pdf_path = "616861773-Pathfinder-CDS-Combined-Defence-2022-23-Arihant-Experts.pdf"
    
    try:
        start_page = int(sys.argv[1])
        end_page = int(sys.argv[2])
        offset = 284
        
        doc = fitz.open(pdf_path)
        text = ""
        for i in range(start_page + offset, end_page + offset + 1):
            try:
                page = doc.load_page(i)
                text += page.get_text("text") + "\n"
            except Exception:
                pass
                
        # Send text to stdout, strictly UTF-8
        sys.stdout.buffer.write(text.encode('utf-8'))
    except Exception as e:
        sys.stdout.buffer.write(str(e).encode('utf-8'))
