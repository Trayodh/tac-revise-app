import os, fitz
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))
doc = fitz.open("pathfinder_studies.pdf")
page = doc.load_page(206)
pix = page.get_pixmap(dpi=100)
img_bytes = pix.tobytes("jpeg")
doc.close()

models = ["gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-3.1-flash-lite", "gemini-1.5-flash"]
for m in models:
    print(f"Testing {m}...")
    try:
        res = client.models.generate_content(
            model=m,
            contents=[
                types.Content(parts=[
                    types.Part.from_text(text="Respond with JSON: {\"status\": \"ok\"}"),
                    types.Part.from_bytes(data=img_bytes, mime_type="image/jpeg")
                ])
            ],
            config=types.GenerateContentConfig(response_mime_type="application/json")
        )
        print(f"  {m} SUCCESS: {res.text[:100]}")
    except Exception as e:
        print(f"  {m} FAILED: {str(e)[:150]}")
