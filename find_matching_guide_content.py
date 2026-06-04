import re

missing_ids = [
    'statistics-prob', 'central-tendency', 'geometry', 'mensuration', 'arithmetic', 
    'grammar-rules', 'vocabulary', 'synonyms-antonyms-detailed', 'phrasal-verbs', 
    'reading-comprehension', 'exam-patterns', 'error-detection', 'sentence-improvement', 
    'ordering-rearrangement', 'fill-blanks-cloze', 'polity-advanced', 'federal-rpa', 
    'world-history', 'culture-movements', 'physical-geography', 'geography-details', 
    'industrics-geopolitics', 'budget-trade-reforms', 'physics-waves', 'physics-thermodynamics', 
    'physics-electromagnetism', 'physics-modern', 'chemistry-metallurgy', 'chemistry-carbon-numericals', 
    'chemistry-everyday-env', 'biology-kingdoms', 'biology-botany', 'biology-ecology', 'schemes-policies', 
    'reports-awards-judgments', 'biodiversity-conservation', 'climate-laws-energy', 'syl-trig', 'syl-limits', 
    'syl-integration', 'syl-fr', 'syl-parliament', 'syl-ranks', 'syl-commands', 'matrices', 'optics', 
    'history-movement', 'indian-monsoon', 'rbi-monetary'
]

# Read guide sections
sections = []
current_sec = None
sec_lines = []
for line in open('NotebookLM_Study_Guide.txt', 'r', encoding='utf-8'):
    if line.startswith('--- '):
        if current_sec:
            sections.append((current_sec, ''.join(sec_lines)))
        current_sec = line.strip().strip('-').strip()
        sec_lines = []
    elif current_sec:
        sec_lines.append(line)
if current_sec:
    sections.append((current_sec, ''.join(sec_lines)))

print(f"Total sections: {len(sections)}")
matches = {}
for title, content in sections:
    # Try to find a missing ID that matches this title
    # We can match based on keywords
    title_words = set(re.findall(r'[a-zA-Z]+', title.lower()))
    for m_id in missing_ids:
        id_words = set(re.findall(r'[a-zA-Z]+', m_id.lower()))
        # Check intersection
        intersection = title_words.intersection(id_words)
        if len(intersection) >= 2 or (len(id_words) == 1 and list(id_words)[0] in title_words):
            if m_id not in matches:
                matches[m_id] = []
            matches[m_id].append(title)

for m_id, matched_titles in matches.items():
    print(f"ID: {m_id:<30} -> Matched: {matched_titles}")
