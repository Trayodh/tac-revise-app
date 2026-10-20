import os, fitz, requests, json, sys
sys.path.insert(0, os.path.abspath('.'))
from dotenv import load_dotenv

load_dotenv()
doc = fitz.open('nda_material.pdf')
txt = doc[1271].get_text()[:1800]
groq_key = os.environ.get('GROQ_API_KEY')

prompt = (
    "Extract all MCQs from this text. Directly output the final JSON without thinking or commentary.\n"
    "Format:\n"
    "{\n"
    "  \"notes_database\": [],\n"
    "  \"question_database\": [\n"
    "    {\n"
    "      \"question_text\": \"...\",\n"
    "      \"options\": {\"A\":\"...\",\"B\":\"...\",\"C\":\"...\",\"D\":\"...\"},\n"
    "      \"correct_answer\": \"\",\n"
    "      \"explanation\": \"\",\n"
    "      \"subject\": \"General Studies\",\n"
    "      \"chapter\": \"Economics\",\n"
    "      \"topic\": \"Government Schemes\"\n"
    "    }\n"
    "  ]\n"
    "}\n\n"
    "PAGE:\n" + txt
)

r = requests.post(
    'https://api.groq.com/openai/v1/chat/completions',
    headers={'Authorization': f'Bearer {groq_key}', 'Content-Type': 'application/json'},
    json={'model': 'openai/gpt-oss-120b', 'messages': [{'role': 'user', 'content': prompt}], 'max_tokens': 3000}
)
print('status:', r.status_code)
if r.status_code == 200:
    msg = r.json()['choices'][0]['message']
    content = msg.get('content') or ''
    reasoning = msg.get('reasoning') or ''
    print('content length:', len(content))
    print('reasoning length:', len(reasoning))
    target = content if content else reasoning
    from extractor_core import robust_json_loads
    try:
        data = robust_json_loads(target)
        print('SUCCESS! Questions parsed:', len(data.get('question_database', [])))
    except Exception as e:
        print('robust_json_loads error:', e)
        print('Tail of response:', repr(target[-200:]))
