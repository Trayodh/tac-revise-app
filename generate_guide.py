import os, json

topics_dir = r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\manim_lectures\topics'
output_file = r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\NotebookLM_Study_Guide.txt'

with open(output_file, 'w', encoding='utf-8') as out:
    out.write('DEFENCE EXAMS REVISION - COMPREHENSIVE STUDY GUIDE\n')
    out.write('===================================================\n\n')
    
    for f in sorted(os.listdir(topics_dir)):
        if f.endswith('.json'):
            path = os.path.join(topics_dir, f)
            with open(path, 'r', encoding='utf-8') as file:
                try:
                    data = json.load(file)
                except Exception:
                    continue
            
            out.write(f'--- {data.get("title", "Topic")} ---\n')
            out.write(f'Subject: {data.get("subject", "")}\n')
            out.write(f'Chapter: {data.get("chapter", "")}\n\n')
            
            for block in data.get('blocks', []):
                out.write(f'## {block.get("heading", "Content")}\n')
                if block.get('intro'):
                    out.write(f'{block.get("intro")}\n')
                for bullet in block.get('bullets', []):
                    out.write(f'- {bullet}\n')
                
                if block.get('tableRows'):
                    out.write('\nTable Data:\n')
                    for row in block['tableRows']:
                        out.write(' | '.join(row) + '\n')
                out.write('\n')
                
            if data.get('formulas'):
                out.write('## High-Yield Formulas & Facts\n')
                for formula in data.get('formulas', []):
                    out.write(f'- {formula}\n')
            
            out.write('\n\n')

print(f'Created {output_file}')
