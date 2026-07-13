import fitz

doc = fitz.open("616861773-Pathfinder-CDS-Combined-Defence-2022-23-Arihant-Experts.pdf")
print("Page 0:", doc.load_page(0).get_text("text")[:100])
print("Page 1:", doc.load_page(1).get_text("text")[:100])
print("Page 2:", doc.load_page(2).get_text("text")[:100])
print("Page 3:", doc.load_page(3).get_text("text")[:100])
print("Page 4:", doc.load_page(4).get_text("text")[:100])
print("Page 285:", doc.load_page(285).get_text("text")[:100])
print("Page 286:", doc.load_page(286).get_text("text")[:100])
print("Page 287:", doc.load_page(287).get_text("text")[:100])
print("Page 288:", doc.load_page(288).get_text("text")[:100])
print("Page 289:", doc.load_page(289).get_text("text")[:100])
