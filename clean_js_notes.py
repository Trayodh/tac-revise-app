import os, re

def clean_latex(text):
    # Remove $ delimiters
    text = text.replace('$', '')
    # Replace \\text{...} with just ...
    text = re.sub(r'\\(?:\\)?text\{([^}]*)\}', r'\1', text)
    # Replace \\% with %
    text = text.replace('\\%', '%')
    # Replace \\circ or ^{\\circ} with degrees
    text = re.sub(r'(?:\^)?\\(?:\\)?circ', ' degrees', text)
    # Replace \\angle with angle 
    text = text.replace('\\angle', 'angle')
    # Replace \\implies with implies
    text = text.replace('\\implies', 'implies')
    # Remove { and }
    text = text.replace('{', '').replace('}', '')
    # Replace _ with empty string for subscripts (so CO_2 becomes CO2, Fe_2O_3 becomes Fe2O3)
    text = text.replace('_', '')
    # Replace \\frac{a}{b} with a/b - wait, { and } are already removed!
    # So \\frac a b... let's do frac before { } removal
    return text

def clean_latex_smart(text):
    # Better regexes to preserve some structure
    t = text
    # Extract \text{stuff}
    t = re.sub(r'\\(?:\\)?text\{([^}]*)\}', r'\1', t)
    # Replace fractions: \frac{a}{b} -> a/b
    t = re.sub(r'\\(?:\\)?frac\{([^}]*)\}\{([^}]*)\}', r'\1/\2', t)
    # Replace degrees
    t = re.sub(r'\^?\\(?:\\)?circ', ' degrees', t)
    # Basic symbols
    replacements = {
        '\\%': '%',
        '\\angle': 'angle ',
        '\\implies': 'implies ',
        '\\omega': 'omega ',
        '\\bar': 'bar',
        '$': '',
        '_': '',
        '\\': '',  # remove any stray backslashes
    }
    for k, v in replacements.items():
        t = t.replace(k, v)
    
    # Remove { and } which were part of math grouping
    t = t.replace('{', '').replace('}', '')
    
    # Clean up double spaces
    t = re.sub(r' +', ' ', t)
    return t

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We only want to clean the actual lecture text. 
    # But doing it globally on the file is risky if it breaks JS code.
    # However, these notes_extra_*.js files are mostly just huge HTML strings assigned to variables.
    # Let's use regex to find HTML tags and text. Or just apply globally and hope no JS keywords are ruined.
    # Since there are no literal $ or _ in JS logic (except maybe variable names).
    # Wait, variable names might have _! e.g. EXPANDED_NOTES_DATA!
    # If I remove _, EXPANDED_NOTES_DATA becomes EXPANDEDNOTESDATA which breaks JS!
    
    # Safer approach: Only replace $..., \text, etc. and only replace _ if it's right after a word/number like CO_2.
    
    # Let's refine the replacement logic on the content
    new_content = content
    
    # 1. Remove \$... \$ or $...$ blocks? No, some might not be closed properly.
    # Actually, the problem is mainly the math formulas.
    # Let's target specific patterns instead of global _ replace.
    
    # Replace \text{...}
    new_content = re.sub(r'\\(?:\\)?text\{([^}]*)\}', r'\1', new_content)
    
    # Replace \% -> %
    new_content = new_content.replace(r'\%', '%').replace(r'\\%', '%')
    
    # Replace \circ -> degrees
    new_content = re.sub(r'\^?\\(?:\\)?circ', ' degrees', new_content)
    
    # Replace Math symbols
    new_content = new_content.replace(r'\angle', 'angle ')
    new_content = new_content.replace(r'\\angle', 'angle ')
    new_content = new_content.replace(r'\implies', 'implies ')
    new_content = new_content.replace(r'\\implies', 'implies ')
    
    # Remove $ signs
    new_content = new_content.replace('$', '')
    
    # Replace subscripts like _2, _3, _1 with just the number/letter, but ONLY in math-like context
    # Regex: replace _([a-zA-Z0-9]+) with \1 ONLY if it's not part of a JS variable (JS variables have letters before and after _)
    # Actually, in the HTML text, words are like CO_2. In JS, variables are like NOTES_DATA.
    # Wait, CO_2 has O before _. NOTES_DATA has S before _.
    # How to distinguish?
    # All JS variables in these files are likely uppercase: EXPANDED_NOTES_DATA, etc.
    # Or just replace `_([0-9a-z])` because JS variables usually have uppercase `_A`?
    # No, let's just do a manual replace for the most common ones: CO_2, Fe_2O_3, etc.
    # Actually, we can use a regex that replaces `_` only if it's preceded by a lowercase or uppercase letter, and followed by a number or lowercase letter, EXCEPT if it's part of an all-caps word.
    
    # Let's replace _ followed by a single digit or letter: _([a-zA-Z0-9]) -> \1
    # But wait, EXPANDED_NOTES_DATA will become EXPANDEDN... wait, _N is a letter!
    # Let's just find all $...$ and clean inside them!
    pass

def clean_all_math_blocks(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all $...$ and replace inside them
    def math_replacer(match):
        math_text = match.group(1)
        # Inside math text, do aggressive cleaning
        m = math_text
        m = re.sub(r'\\(?:\\)?text\{([^}]*)\}', r'\1', m)
        m = re.sub(r'\\(?:\\)?frac\{([^}]*)\}\{([^}]*)\}', r'\1/\2', m)
        m = re.sub(r'\^?\\(?:\\)?circ', ' degrees', m)
        m = m.replace(r'\%', '%').replace(r'\\%', '%')
        m = m.replace(r'\angle', 'angle').replace(r'\\angle', 'angle')
        m = m.replace(r'\implies', 'implies').replace(r'\\implies', 'implies')
        m = m.replace(r'\omega', 'omega').replace(r'\\omega', 'omega')
        m = m.replace(r'\bar', 'bar').replace(r'\\bar', 'bar')
        m = m.replace(r'\mu', 'mu').replace(r'\\mu', 'mu')
        m = m.replace(r'\lambda', 'lambda').replace(r'\\lambda', 'lambda')
        m = m.replace('_', '')
        m = m.replace('^', '')
        m = m.replace('{', '').replace('}', '')
        m = m.replace('\\', '')
        return m

    # Replace $...$
    new_content = re.sub(r'\$([^\$]+)\$', math_replacer, content)
    
    # But wait, what if there are no $ delimiters, just literal \text{ CO}_2$?
    # The screenshot showed ($96\% \text{ CO}_2$). So the $ WAS there!
    # Wait, the screenshot showed ($96\% \text{ CO}_2$). The literal string on screen included the $.
    # If the literal string included the $, then the $ is present in the file!
    # So replacing inside $...$ and then returning without $ will fix it!
    # Wait, my regex `r'\$([^\$]+)\$'` will match `$96\% \text{ CO}_2$` and replace it.
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

js_files = [f for f in os.listdir('.') if f.startswith('notes_extra_') and f.endswith('.js')]
js_files.append('app.js')
js_files.append('append_science_details.js') # just in case

count = 0
for file in js_files:
    if os.path.exists(file):
        if clean_all_math_blocks(file):
            count += 1

print(f"Cleaned {count} JS files.")
