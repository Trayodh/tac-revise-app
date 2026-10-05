import os

with open('generate_targeted_notes.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Add context parameter to generate_notes
content = content.replace(
    'def generate_notes(topic_text, chapter, subject):',
    'def generate_notes(topic_text, chapter, subject, context=""):')

# Update call_gemini
content = content.replace(
    'def call_gemini(topic_text, chapter, subject):',
    'def call_gemini(topic_text, chapter, subject, context=""):')
content = content.replace(
    'prompt = f"Subject: {subject}\\nChapter: {chapter}\\nTopic: {topic_text}\\n\\nGenerate comprehensive revision notes in HTML."',
    'prompt = f"Subject: {subject}\\nChapter: {chapter}\\nTopic: {topic_text}\\n" + (f"\\nIncorporate these extracted points directly:\\n{context}\\n" if context else "") + "\\nGenerate comprehensive revision notes in HTML."')

# Update call_groq
content = content.replace(
    'def call_groq(topic_text, chapter, subject):',
    'def call_groq(topic_text, chapter, subject, context=""):')
content = content.replace(
    'user_msg = f"Subject: {subject}\\nChapter: {chapter}\\nTopic: {topic_text}\\n\\nGenerate comprehensive revision notes in HTML."',
    'user_msg = f"Subject: {subject}\\nChapter: {chapter}\\nTopic: {topic_text}\\n" + (f"\\nIncorporate these extracted points directly:\\n{context}\\n" if context else "") + "\\nGenerate comprehensive revision notes in HTML."')

# Update call_cerebras
content = content.replace(
    'def call_cerebras(topic_text, chapter, subject):',
    'def call_cerebras(topic_text, chapter, subject, context=""):')
content = content.replace(
    'user_msg = f"Subject: {subject}\\nChapter: {chapter}\\nTopic: {topic_text}\\n\\nGenerate comprehensive revision notes in HTML."',
    'user_msg = f"Subject: {subject}\\nChapter: {chapter}\\nTopic: {topic_text}\\n" + (f"\\nIncorporate these extracted points directly:\\n{context}\\n" if context else "") + "\\nGenerate comprehensive revision notes in HTML."')

# Update call_openrouter
content = content.replace(
    'def call_openrouter(topic_text, chapter, subject):',
    'def call_openrouter(topic_text, chapter, subject, context=""):')
content = content.replace(
    'user_msg = f"Subject: {subject}\\nChapter: {chapter}\\nTopic: {topic_text}\\n\\nGenerate comprehensive revision notes in HTML."',
    'user_msg = f"Subject: {subject}\\nChapter: {chapter}\\nTopic: {topic_text}\\n" + (f"\\nIncorporate these extracted points directly:\\n{context}\\n" if context else "") + "\\nGenerate comprehensive revision notes in HTML."')

# Update calls inside generate_notes
content = content.replace('html = call_gemini(topic_text, chapter, subject)', 'html = call_gemini(topic_text, chapter, subject, context)')
content = content.replace('html = call_groq(topic_text, chapter, subject)', 'html = call_groq(topic_text, chapter, subject, context)')
content = content.replace('html = call_cerebras(topic_text, chapter, subject)', 'html = call_cerebras(topic_text, chapter, subject, context)')
content = content.replace('html = call_openrouter(topic_text, chapter, subject)', 'html = call_openrouter(topic_text, chapter, subject, context)')

# Add DB loading at the top of main()
main_start_idx = content.find('def main():')
main_code = """def main():
    import json, re
    extracted_db = []
    try:
        with open('notes_database.json', 'r', encoding='utf-8') as f:
            extracted_db = json.load(f)
        print(f"Loaded {len(extracted_db)} extracted points.")
    except: pass
    
    def get_context(subject, topic):
        keywords = [w.lower() for w in re.findall(r'\\b[a-zA-Z]{4,}\\b', topic)]
        relevant = []
        for note in extracted_db:
            if note.get('subject') == subject:
                text = note.get('text', '')
                if any(kw in text.lower() or kw in note.get('chapter', '').lower() for kw in keywords):
                    relevant.append(text[:800])
        return '\\n---\\n'.join(relevant[:3]) if relevant else ""
"""
content = content.replace('def main():', main_code)

# Change generate_notes call inside main loop
content = content.replace('html = generate_notes(topic, chapter, subject)', 'context = get_context(subject, topic)\\n            html = generate_notes(topic, chapter, subject, context)')

with open('generate_targeted_notes.py', 'w', encoding='utf-8') as f:
    f.write(content)
print("Patched.")
