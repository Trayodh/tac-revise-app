import os
import requests
import base64
import fitz
from dotenv import load_dotenv

load_dotenv()

def test_openrouter():
    doc = fitz.open('doc1.pdf')
    page = doc.load_page(3)
    pix = page.get_pixmap(dpi=150)
    img_data = pix.tobytes('jpeg')
    base64_img = base64.b64encode(img_data).decode('utf-8')
    
    response = requests.post(
        url='https://openrouter.ai/api/v1/chat/completions',
        headers={
            'Authorization': f'Bearer {os.environ.get("OPENROUTER_API_KEY")}',
            'Content-Type': 'application/json'
        },
        json={
            'model': 'meta-llama/llama-3.2-11b-vision-instruct:free',
            'messages': [
                {
                    'role': 'user',
                    'content': [
                        {'type': 'text', 'text': 'Extract all text from this image exactly as written. Just provide the text.'},
                        {'type': 'image_url', 'image_url': {'url': f'data:image/jpeg;base64,{base64_img}'}}
                    ]
                }
            ]
        }
    )
    print('Success:', response.json())

if __name__ == '__main__':
    test_openrouter()
