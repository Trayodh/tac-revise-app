import os
from groq import Groq
import base64
import fitz

def test_groq_vision():
    client = Groq(api_key=os.environ.get("GROQ_API_KEY"))
    
    # Extract page 3 from doc1.pdf
    doc = fitz.open("doc1.pdf")
    page = doc.load_page(3) # 4th page
    pix = page.get_pixmap(dpi=150)
    img_data = pix.tobytes("jpeg")
    base64_img = base64.b64encode(img_data).decode("utf-8")
    
    try:
        response = client.chat.completions.create(
            model="llama-3.2-90b-vision-preview",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "What is the title on this page?"},
                        {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{base64_img}"}}
                    ]
                }
            ]
        )
        print("Success:", response.choices[0].message.content)
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    test_groq_vision()
