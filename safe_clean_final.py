import os, re, glob

def clean_text(text):
    text = re.sub(r'\$(?!\{)', '', text)
    text = re.sub(r'\\text{([^}]*)}', r'\1', text)
    text = re.sub(r'_([a-zA-Z0-9]+)', r'\1', text) 
    text = text.replace(r'\%', '%')
    text = re.sub(r'\\circ', ' degrees', text)
    text = text.replace(r'\angle', 'angle')
    text = text.replace(r'\implies', 'implies')
    text = text.replace(r'\omega', 'omega')
    text = text.replace(r'\mu', 'mu')
    text = re.sub(r'\\frac{([^}]*)}{([^}]*)}', r'\1/\2', text)
    text = text.replace('\\', '')
    return text

def process_js_file(filepath):
    if not os.path.exists(filepath):
        return
    if 'general_studies' in filepath or 'english' in filepath or 'history' in filepath:
        return 
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    def replacer(match):
        return '`' + clean_text(match.group(1)) + '`'
    new_content = re.sub(r'`([^`]*)`', replacer, content)
    
    # Check if there are other occurrences of $ outside backticks in app.js
    # Mock tests in app.js use double quotes or single quotes sometimes!
    # Let's also do a safe replace on the whole file, ONLY matching math contexts.
    # Actually, replacing `\$(?!\{)` on the whole file is safe EXCEPT it might replace $ in jQuery (not using jQuery here)
    # Let's just do it on the whole file for app.js and notes_extra*.js because mock tests have `$6x + 8y$` inside double quotes!
    
    new_content = re.sub(r'\$(?!\{)', '', new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Cleaned {filepath}')

for f in glob.glob('notes_extra*.js'):
    process_js_file(f)

def process_md_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = clean_text(content)
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Cleaned {filepath}')

for f in glob.glob('gs_notes/**/*.md', recursive=True):
    process_md_file(f)

for f in ['app.js', 'update_app.js']:
    process_js_file(f)
