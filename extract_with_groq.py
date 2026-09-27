import fitz
import base64
import requests
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.environ.get('GROQ_API_KEY')

print("Rendering PDF pages to images...")
doc = fitz.open("July_CA_Class.pdf")
images = []
# Only taking the first 10 pages for topic extraction to fit limits
for i in range(min(10, len(doc))):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=50) # lower DPI for faster transfer
    img_data = pix.tobytes("jpeg")
    b64 = base64.b64encode(img_data).decode('utf-8')
    images.append(b64)

print("Calling Groq Llama 3.2 Vision API...")
content = [{"type": "text", "text": "Extract and list all the major Current Affairs topics covered in these slides. Just list the main topics in bullet points."}]
for b64 in images:
    content.append({
        "type": "image_url",
        "image_url": {
            "url": f"data:image/jpeg;base64,{b64}"
        }
    })

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "model": "llama-3.2-90b-vision-preview",
    "messages": [
        {
            "role": "user",
            "content": content
        }
    ],
    "max_tokens": 1024
}

response = requests.post("https://api.groq.com/openai/v1/chat/completions", headers=headers, json=data)
if response.status_code == 200:
    print("\n--- TOPICS ---")
    print(response.json()['choices'][0]['message']['content'])
else:
    print("Error:", response.status_code, response.text)
