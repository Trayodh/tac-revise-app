import glob

files = glob.glob('notes_extra_*.js')
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    target_pattern = 'window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};'
    replacement = 'window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\nvar EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA;'
    
    if target_pattern in content and 'var EXPANDED_NOTES_DATA =' not in content:
        content = content.replace(target_pattern, replacement, 1)
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(content)
        print(f"Patched {f}")
    else:
        print(f"Skipped {f} (already has declaration or no target)")
