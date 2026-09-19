import os
import re
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

def upgrade_note_with_groq(topic_id, html_content):
    client = Groq(api_key=os.environ.get("GROQ_API_KEY"))
    prompt = f"""You are a subject matter expert for Indian Defence Exams (NDA, CDS, AFCAT).
The user wants to deepen their study notes to match the tough standard of the recent CDS 2 2026 papers.
Please rewrite and expand the following HTML study notes for the topic '{topic_id}'.
Make it much deeper, adding detailed tables, important alerts, missing facts, and high-level analysis that would be covered in premium Last Minute Revision (LMR) modules.
Keep the output entirely as valid HTML (without markdown code blocks, just raw HTML). Keep the formatting clean and engaging.

ORIGINAL HTML:
{html_content}
"""

    try:
        response = client.chat.completions.create(
            model="openai/gpt-oss-120b",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3
        )
        output = response.choices[0].message.content.strip()
        if output.startswith("```html"):
            output = output[7:]
        if output.endswith("```"):
            output = output[:-3]
        return output.strip()
    except Exception as e:
        print(f"Error calling Groq for {topic_id}: {e}")
        return html_content

def process_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    pattern = r'(window\.EXPANDED_NOTES_DATA\["(.*?)"\]\s*=\s*String\.raw`)(.*?)(`;)'
    matches = re.finditer(pattern, content, flags=re.DOTALL)
    new_content = content
    
    count = 0
    for match in matches:
        full_match = match.group(0)
        prefix = match.group(1)
        topic_id = match.group(2)
        html_content = match.group(3)
        suffix = match.group(4)
        
        print(f"  Upgrading topic: {topic_id}")
        new_html = upgrade_note_with_groq(topic_id, html_content)
        
        new_content = new_content.replace(full_match, f"{prefix}{new_html}{suffix}")
        count += 1
        
        if count >= 3: # Just testing first 3 topics per file
            break
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filepath} with {count} deepened topics.")

if __name__ == "__main__":
    files_to_upgrade = [
        'public/notes_generated_polity.js', 
        'public/notes_generated_geography.js', 
        'public/notes_generated_science.js'
    ]
    for file in files_to_upgrade:
        if os.path.exists(file):
            process_file(file)
        else:
            print(f"File {file} not found.")
