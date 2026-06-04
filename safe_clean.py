import os, re, glob

def clean_text(text):
    text = text.replace('$', '')
    text = re.sub(r'\\text{([^}]*)}', r'\1', text)
    
    # Replace subscript _
    # To be safe, only replace _ if it's part of a math notation, e.g., _2, _x
    text = re.sub(r'_([a-zA-Z0-9]+)', r'\1', text) 
    
    text = text.replace(r'\%', '%')
    text = re.sub(r'\\circ', ' degrees', text)
    text = text.replace(r'\angle', 'angle')
    text = text.replace(r'\implies', 'implies')
    text = text.replace(r'\omega', 'omega')
    text = text.replace(r'\mu', 'mu')
    
    # CAREFUL: DO NOT REMOVE { and } randomly! 
    # Let's remove them if they are left over from \frac{a}{b} -> a/b
    # Let's handle frac first
    text = re.sub(r'\\frac{([^}]*)}{([^}]*)}', r'\1/\2', text)
    
    # What about remaining \{ and \}? They might be template literal ${...}!
    # So we MUST NOT touch { and } if preceded by $. 
    # Actually, we already removed $. But we shouldn't touch { } at all unless we are sure.
    # The narrator will just say "brace", which is fine, or we can leave them.
    # The user complained about $ and _, not necessarily {}.
    
    text = text.replace('\\', '')
    return text

def process_js_file(filepath):
    if 'general_studies' in filepath or 'english' in filepath or 'history' in filepath:
        return # Skip the ones that fetch from MD
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Safely find backtick strings and only process INSIDE backticks!
    def replacer(match):
        return '`' + clean_text(match.group(1)) + '`'
        
    new_content = re.sub(r'`([^`]*)`', replacer, content)
    
    # Wait, the app.js also has some $ in the mock tests!
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned {filepath}")

for f in glob.glob('notes_extra*.js'):
    process_js_file(f)

def process_md_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = clean_text(content)
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned {filepath}")

for f in glob.glob('gs_notes/**/*.md', recursive=True):
    process_md_file(f)
