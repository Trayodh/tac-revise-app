import os, requests, fitz, json, sys
from dotenv import load_dotenv

sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, os.path.abspath('.'))

load_dotenv()
doc = fitz.open('nda_material.pdf')
page_text = doc[564].get_text()
or_key = os.environ.get('OPENROUTER_API_KEY')

fallback_prompt = (
    "You are an expert exam content extractor for NDA/CDS/AFCAT.\n"
    "Extract all educational facts and practice questions from the following page text.\n"
    "Output valid JSON format with keys:\n"
    "1. 'notes_database': list of objects with keys: 'subject', 'chapter', 'subchapter', 'topic', 'content' (detailed markdown notes, facts, definitions, formulas).\n"
    "2. 'question_database': list of MCQ objects with keys: 'question_text', 'options' (dict A,B,C,D), 'correct_answer', 'explanation', 'subject', 'chapter', 'topic'.\n"
    "Return valid JSON only.\n\n"
    "PAGE CONTENT:\n" + page_text[:1800]
)

r = requests.post(
    'https://openrouter.ai/api/v1/chat/completions',
    headers={'Authorization': f'Bearer {or_key}', 'Content-Type': 'application/json'},
    json={'model': 'minimax/minimax-m3.1-flash:free', 'messages': [{'role': 'user', 'content': fallback_prompt}], 'temperature': 0.1, 'max_tokens': 2500}
)
print('status:', r.status_code)
res = r.json()
choice = res.get('choices', [{}])[0]
print('finish_reason:', choice.get('finish_reason'))
raw = choice.get('message', {}).get('content') or ''
print('raw length:', len(raw))

from extractor_core import robust_json_loads
try:
    data = robust_json_loads(raw)
    print('SUCCESS! Notes:', len(data.get('notes_database', [])), 'Questions:', len(data.get('question_database', [])))
except Exception as e:
    print('Parse error:', e)
    print('Raw tail:', repr(raw[-200:]))
