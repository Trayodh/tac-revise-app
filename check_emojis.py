import os
import re
import sys

# Output helper to handle Windows console encoding issues safely
def safe_print(msg):
    try:
        print(msg)
    except UnicodeEncodeError:
        print(msg.encode('ascii', errors='backslashreplace').decode('ascii'))

# Define pattern for common emoji and symbol ranges
# Ranges:
# U+2600 - U+27BF: Misc Symbols & Dingbats
# U+2B00 - U+2BFF: Misc Symbols and Arrows
# U+1F000 - U+1FFFF: Emoticons, Pictographs, transport, etc.
# We also want to check for U+2300 - U+23FF (Misc Technical) and other symbol blocks
emoji_pattern = re.compile(
    '['
    '\u2600-\u27BF'
    '\u2B00-\u2BFF'
    '\u2300-\u23FF'
    '\u2400-\u243F'
    '\u25A0-\u25FF'
    '\U0001F000-\U0001FFFF'
    ']'
)

# Technical or standard UI punctuation to exclude
exclude_chars = {
    '\u23f8',  # ⏸ (pause)
    '\u25b6',  # ▶ (play)
    '\u25c0',  # ◀ (back)
    '\u2192',  # → (arrow)
    '\u2014',  # — (em dash)
    '\u2022',  # • (bullet)
    '\u00b7',  # · (middle dot)
    '\u00d7',  # × (multiply)
    '\u2212',  # − (minus)
    '\u221A',  # √ (square root)
    '\u221E',  # ∞ (infinity)
    '\u2248',  # ≈ (approx)
    '\u2260',  # ≠ (not equal)
    '\u2264',  # ≤ (less or equal)
    '\u2265',  # ≥ (greater or equal)
    '\u25B2',  # ▲
    '\u25BC',  # ▼
    '\u25C4',  # ◄
    '\u25BA',  # ►
}

safe_print("Checking files for remaining emojis...")

for root, dirs, files in os.walk('.'):
    # Skip standard build/dev folders
    if 'node_modules' in root or '.git' in root or '.gemini' in root:
        continue
    for f in files:
        if f.endswith(('.js', '.html', '.css', '.json')):
            # Skip backup files
            if '.bak' in f or 'backup' in f or 'broken' in f or 'temp_db' in f or 'check_emojis.py' in f:
                continue
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as file_obj:
                    content = file_obj.read()
                matches = emoji_pattern.findall(content)
                filtered = [m for m in matches if m not in exclude_chars]
                if filtered:
                    char_reprs = []
                    for c in set(filtered):
                        try:
                            char_reprs.append(f"{c} ({hex(ord(c))})")
                        except Exception:
                            char_reprs.append(f"({hex(ord(c))})")
                    safe_print(f"{path}: found {len(filtered)} emojis: {', '.join(char_reprs)}")
            except Exception as e:
                safe_print(f"Error reading {path}: {e}")

safe_print("Emoji check complete.")
