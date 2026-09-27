import google.generativeai as genai
import os
import time
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ.get('GEMINI_API_KEY'))

print("Uploading file...")
sample_file = genai.upload_file(path="July_CA_Class.pdf", display_name="July CA Class")
print(f"Uploaded file '{sample_file.display_name}' as: {sample_file.uri}")

# Wait for file to process
while sample_file.state.name == "PROCESSING":
    print("Waiting for file to process...")
    time.sleep(5)
    sample_file = genai.get_file(sample_file.name)

model = genai.GenerativeModel('gemini-1.5-pro')

print("Generating content...")
response = model.generate_content([sample_file, "Extract and list all the major Current Affairs topics covered in this PDF. Just list the topics in bullet points."])

print("\n--- TOPICS ---")
print(response.text)
