import json
import re
import sys
from collections import defaultdict, Counter

sys.stdout.reconfigure(encoding='utf-8')

with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

# Build canonical index
chapters_by_subject = {}
chapter_info = {}
for sub_id, sub_data in syllabus.items():
    chapters_by_subject[sub_id] = []
    for c in sub_data['chapters']:
        ch_id = c['id']
        title = c['title']
        chapters_by_subject[sub_id].append(ch_id)
        chapter_info[ch_id] = {
            'subject': sub_id,
            'title': title,
            'id': ch_id
        }

print(f"Total canonical subjects: {len(chapters_by_subject)}")
print(f"Total canonical chapters: {len(chapter_info)}")

# Subject normalization rules
def normalize_subject_hint(sub_raw, topic_raw):
    s = (sub_raw or '').lower().strip()
    t = (topic_raw or '').lower().strip()
    
    # Direct checks on subject
    if any(k in s for k in ['math', 'arithmetic', 'algebra', 'geometry', 'mensuration', 'trigonometry', 'calculus', 'statistics', 'number system', 'quantitative']):
        return 'mathematics'
    if any(k in s for k in ['english', 'grammar', 'vocabulary', 'idiom', 'comprehension', 'antonym', 'synonym']):
        return 'english'
    if any(k in s for k in ['polity', 'constitution', 'governance', 'parliament', 'judiciary', 'rights', 'amendment']):
        return 'polity'
    if any(k in s for k in ['history', 'ancient', 'medieval', 'modern', 'national movement', 'revolt', 'dynasty', 'sultanate', 'mughal', 'culture']):
        return 'history'
    if any(k in s for k in ['geography', 'earth', 'climate', 'river', 'monsoon', 'mapping', 'ocean', 'rock']):
        return 'geography'
    if any(k in s for k in ['economy', 'economic', 'banking', 'budget', 'gdp', 'inflation', 'rbi', 'trade', 'fiscal']):
        return 'economics'
    if any(k in s for k in ['physics', 'optics', 'thermodynamics', 'mechanics', 'sound', 'electromagnet', 'waves']):
        return 'physics'
    if any(k in s for k in ['chemistry', 'acid', 'base', 'metal', 'organic', 'periodic', 'reaction']):
        return 'chemistry'
    if any(k in s for k in ['biology', 'botany', 'zoology', 'disease', 'human body', 'cell', 'genetics', 'organ']):
        return 'biology'
    if any(k in s for k in ['defence', 'military', 'exercise', 'weapon', 'missile', 'army', 'navy', 'air force', 'reasoning', 'aptitude', 'afcat']):
        return 'military-aptitude'
    if any(k in s for k in ['environment', 'ecology', 'biodiversity', 'pollution', 'wildlife', 'conservation', 'climate change']):
        return 'environment'
    if any(k in s for k in ['current affairs', 'international relation', 'summit', 'scheme', 'policy', 'award']):
        return 'current-affairs'
    
    # Fallback to topic hints for General Science / General Studies
    if 'sci' in s or 'general studies' in s or 'general knowledge' in s:
        if any(k in t for k in ['cell', 'disease', 'blood', 'plant', 'tissue', 'human', 'organ', 'digest', 'respirat', 'hormone', 'vitamin']):
            return 'biology'
        if any(k in t for k in ['acid', 'base', 'salt', 'metal', 'periodic', 'reaction', 'atom', 'molecule', 'carbon', 'compound']):
            return 'chemistry'
        if any(k in t for k in ['motion', 'force', 'light', 'lens', 'mirror', 'sound', 'wave', 'electric', 'magnetic', 'energy', 'gravity', 'heat', 'thermo']):
            return 'physics'
        if any(k in t for k in ['river', 'mountain', 'soil', 'earth', 'planet', 'atmosphere', 'plateau', 'volcano', 'ocean', 'tide', 'climate']):
            return 'geography'
        if any(k in t for k in ['buddha', 'jain', 'maurya', 'gupta', 'mughal', 'sultan', 'revolt', 'gandhi', 'congress', 'british', 'battle', 'dynasty']):
            return 'history'
        if any(k in t for k in ['article', 'amendment', 'president', 'parliament', 'court', 'writ', 'dpsp', 'fundamental', 'lok sabha', 'rajya sabha']):
            return 'polity'
        if any(k in t for k in ['inflation', 'monetary', 'bank', 'budget', 'gdp', 'rbi', 'poverty', 'unemploy', 'tax', 'deficit']):
            return 'economics'
            
    return None

print("Engine scaffolding created.")
