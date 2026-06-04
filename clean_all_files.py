import os
import re

# Comprehensive list of emoji characters and their professional replacements
REPLACEMENTS = {
    # Star/Sparkle/Accents
    '⭐': '',
    '🌟': '',
    '✨': '',
    '⚡': '',
    
    # Book / document / pencil / list emojis
    '📚': '',
    '📖': '',
    '📄': '',
    '📝': '',
    '📜': '',
    '📋': '',
    '📓': '',
    '📔': '',
    '📕': '',
    '📗': '',
    '📘': '',
    '📙': '',
    '📒': '',
    
    # Arrow emojis -> Typographic representations or empty
    '⬅️': '←',
    '⬅': '←',
    '➡️': '→',
    '⬇️': '↓',
    '⬇': '↓',
    '⬆️': '↑',
    '⬆': '↑',
    '➔': '→',
    '➜': '→',
    '➨': '→',
    '➔': '→',
    
    # Checkmarks -> Bullet points or indicators
    '✅': '•',
    '✔️': '•',
    '✔': '•',
    '☑️': '•',
    '☑': '•',
    '✔': '•',
    
    # Caution / Warning / Info / Bullets
    '⚠️': 'Important:',
    '⚠': 'Important:',
    '💡': 'Note:',
    '🔔': '',
    '🔹': '•',
    '🔸': '•',
    '▪️': '•',
    '▫️': '•',
    '▪': '•',
    '▫': '•',
    '🔹': '•',
    '🔸': '•',
    
    # Icons / Badges
    '⏱️': '',
    '⏱': '',
    '⏳': '',
    '🎯': '',
    '🎖️': '',
    '🎖': '',
    '🏆': '',
    '🧠': '',
    '⚔️': '',
    '⚔': '',
    '🛡️': '',
    '🛡': '',
    '⚙️': '',
    '⚙': '',
    '⚖️': '',
    '⚖': '',
    '🔬': '',
    '🔭': '',
    '📐': '',
    '📏': '',
    '🎨': '',
    '🎬': '',
    
    # Earth / Map / Pins
    '🌍': '',
    '🌎': '',
    '🌏': '',
    '🌐': '',
    '🗺️': '',
    '🗺': '',
    '📌': '',
    '📍': '',
    
    # Finance / Gems / Trends
    '💰': '',
    '💎': '',
    '📈': '',
    '📉': '',
    '📊': '',
    
    # Natural elements
    '🌊': '',
    '🌿': '',
    '🌱': '',
    '🍀': '',
    '🌋': '',
    '🏔️': '',
    '🏔': '',
    '🌲': '',
    '🌳': '',
    '🌴': '',
    '🎋': '',
    '🌾': '',
    
    # Moon phases & Astro (frequent in Geography/Astronomy notes)
    '🌞': '',
    '🌑': 'New Moon',
    '🌒': 'Waxing Crescent',
    '🌓': 'First Quarter',
    '🌔': 'Waxing Gibbous',
    '🌕': 'Full Moon',
    '🌖': 'Waning Gibbous',
    '🌗': 'Third Quarter',
    '🌘': 'Waning Crescent',
    
    # Flags & Misc
    '🇮🇳': 'IN',
    '👑': '',
    '🩸': '',
    '🔥': '',
    '💀': '',
    '👾': '',
    '👽': '',
    '🤖': '',
}

# Regex compilation for remaining stray emojis in range U+2600-U+27BF, U+1F000-U+1F9FF, U+2B00-U+2BFF, U+2300-U+23FF
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

# Standard symbols to exclude from removal (pause, play, back arrow, typical math symbols)
exclude_chars = {
    '\u23f8',  # ⏸ (pause)
    '\u25b6',  # ▶ (play)
    '\u25c0',  # ◀ (back)
    '\u2192',  # →
    '\u2014',  # — (em dash)
    '\u2022',  # • (bullet)
    '\u00b7',  # · (middle dot)
    '\u00d7',  # × (multiply)
    '\u2212',  # − (minus)
    '\u221A',  # √ (square root)
    '\u221E',  # ∞ (infinity)
    '\u2248',  # ≈
    '\u2260',  # ≠
    '\u2264',  # ≤
    '\u2265',  # ≥
    '\u25B2',  # ▲
    '\u25BC',  # ▼
    '\u25C4',  # ◄
    '\u25BA',  # ►
}

def clean_text(content):
    # 1. Apply explicit replacements first
    for emoji, replacement in REPLACEMENTS.items():
        content = content.replace(emoji, replacement)
    
    # 2. Sweep for any remaining emoji ranges
    def replace_stray_emoji(match):
        char = match.group(0)
        if char in exclude_chars:
            return char
        return ''
        
    content = emoji_pattern.sub(replace_stray_emoji, content)
    return content

# Files to scan and modify
print("Starting systematic cleanup of project files...")

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or '.gemini' in root:
        continue
    for f in files:
        if f.endswith(('.js', '.html', '.css', '.json')):
            if '.bak' in f or 'backup' in f or 'broken' in f or 'temp_db' in f or 'clean_all_files.py' in f or 'check_emojis.py' in f:
                continue
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8') as file_obj:
                    original = file_obj.read()
                
                # Perform emoji cleaning
                cleaned = clean_text(original)
                
                # Specific file tweaks: font unification in index.css
                if f == 'index.css':
                    # Unify --font-logo to use Outfit for clean professional SaaS typography
                    cleaned = cleaned.replace(
                        "--font-logo: 'Orbitron', sans-serif;",
                        "--font-logo: 'Outfit', sans-serif;"
                    )
                
                if cleaned != original:
                    with open(path, 'w', encoding='utf-8') as file_obj:
                        file_obj.write(cleaned)
                    print(f"  Cleaned: {path}")
            except Exception as e:
                print(f"  Error processing {path}: {e}")

print("Systematic cleanup complete.")
