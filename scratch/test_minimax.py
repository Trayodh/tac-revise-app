from dotenv import load_dotenv
import fitz, json, os, requests
load_dotenv()
key = os.environ.get('OPENROUTER_API_KEY')
doc = fitz.open('cds_material.pdf')
text = doc[408].get_text()[:1200]
doc.close()

prompt = (
    "Extract educational facts and MCQs from this text. Output strict JSON with double-quoted keys: {\"notes_database\": [{\"subject\": \"...\", \"chapter\": \"...\", \"subchapter\": \"...\", \"topic\": \"...\", \"content\": \"...\"}], \"question_database\": []}\nPAGE CONTENT:\n" + text
)

r = requests.post(
    'https://openrouter.ai/api/v1/chat/completions',
    headers={'Authorization': f'Bearer {key}', 'Content-Type': 'application/json'},
    json={'model': 'minimax/minimax-m3.1-flash:free', 'messages': [{'role': 'user', 'content': prompt}], 'max_tokens': 1500, 'temperature': 0.1}
)
print('Status:', r.status_code)
if r.status_code == 200:
    msg = r.json()['choices'][0]['message']
    content = msg.get('content') or msg.get('reasoning') or ''
    print('Length:', len(content), 'Preview:', repr(content[:250]))
    from extractor_core import robust_json_loads
    try:
        parsed = robust_json_loads(content)
        print('Parsed successfully! Keys:', list(parsed.keys()) if isinstance(parsed, dict) else len(parsed))
    except Exception as e:
        print('Parsing error:', e)
