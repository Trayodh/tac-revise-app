from dotenv import load_dotenv
import fitz, json, os, requests
load_dotenv()
key = os.environ.get('GROQ_API_KEY')

doc = fitz.open('cds_material.pdf')
page_text = doc[406].get_text()[:1800]
doc.close()

prompt = (
    "You are an expert exam content extractor for NDA/CDS/AFCAT.\n"
    "Extract all educational facts and practice questions from the following page text.\n"
    "Directly output valid JSON with keys: 'notes_database' (list of objects with subject, chapter, subchapter, topic, content) and 'question_database' (list of MCQs with question_text, options {A,B,C,D}, correct_answer, explanation, subject, chapter, topic).\n"
    "Return ONLY valid JSON.\n\nPAGE CONTENT:\n" + page_text
)

r = requests.post(
    'https://api.groq.com/openai/v1/chat/completions',
    headers={'Authorization': f'Bearer {key}', 'Content-Type': 'application/json'},
    json={'model': 'openai/gpt-oss-20b', 'messages': [{'role': 'user', 'content': prompt}], 'max_tokens': 2000, 'temperature': 0.1}
)
print('Status:', r.status_code)
if r.status_code == 200:
    content = r.json()['choices'][0]['message'].get('content', '')
    print('Content len:', len(content), 'Preview:', content[:200])
else:
    print('Error:', r.text[:300])
