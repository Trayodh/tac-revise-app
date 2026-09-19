import fitz

doc = fitz.open("doc1.pdf")
print("Page 4 text:")
print(doc[3].get_text("text"))

print("Page 5 text:")
print(doc[4].get_text("text"))
