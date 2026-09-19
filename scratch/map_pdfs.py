import os
import time
import google.generativeai as genai
from dotenv import load_dotenv
import glob

load_dotenv()
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))

for pdf_file in glob.glob('doc*.pdf'):
    print(f"Uploading {pdf_file}...")
    try:
        f = genai.upload_file(pdf_file)
        
        while f.state.name == "PROCESSING":
            print(".", end="", flush=True)
            time.sleep(2)
            f = genai.get_file(f.name)
            
        print("Ready!")
        model = genai.GenerativeModel("gemini-1.5-pro")
        response = model.generate_content([f, "What is the subject of this revision module? Just reply with the subject name (e.g. Physics, Polity, History, Chemistry, Biology, Geography, Economics, Current Affairs etc.)"])
        print(f"{pdf_file}: {response.text.strip()}")
        genai.delete_file(f.name)
    except Exception as e:
        print(f"{pdf_file} Error: {e}")
