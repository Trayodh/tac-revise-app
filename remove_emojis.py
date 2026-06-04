"""
Remove emojis from all UI files and replace with professional equivalents.
Replacements use text labels, SVG inline icons, or typographic symbols only.
"""
import re

# ─────────────────────────────────────────────────────────────────
# 1. Simple string-level replacements (emoji → professional text / symbol)
# ─────────────────────────────────────────────────────────────────
REPLACEMENTS = [
    # index.html ─ panel titles and metric icons
    ('⏱️', ''),          # timer icon — remove, rely on text
    ('⏱',  ''),
    ('⚡',  ''),          # lightning in metric icon — remove
    ('✨',  ''),          # sparkle — remove
    ('➡',  '→'),          # arrow — typographic
    ('🌓',  ''),          # moon toggle — remove
    ('🎖️', ''),          # medal — remove
    ('🎖',  ''),
    ('🎨',  ''),          # palette — remove
    ('🎯',  ''),          # target — remove
    ('💬',  ''),          # chat bubble — remove
    ('📄',  ''),          # document — remove
    ('📖',  ''),          # book — remove
    ('📚',  ''),          # books — remove
    ('📝',  ''),          # pencil — remove
    ('🔥',  ''),          # fire — remove
    ('🗑️', ''),          # trash — remove
    ('🗑',  ''),
    ('🗞️', ''),          # newspaper — remove
    ('🗞',  ''),
    ('🤖',  ''),          # robot — remove
    ('🤝',  ''),          # handshake — remove

    # app.js ─ button labels and section headers
    ('⏳',  ''),          # hourglass
    ('⚠️', ''),          # warning
    ('⚠',  ''),
    ('✅',  'Copied'),    # in copy button context
    ('✔️', ''),          # check mark
    ('✔',  ''),
    ('✨',  ''),
    ('🎬',  ''),          # clapperboard
    ('🏆',  ''),          # trophy
    ('💡',  ''),          # lightbulb
    ('📈',  ''),          # chart up
    ('📉',  ''),          # chart down
    ('📊',  ''),          # bar chart
    ('📋',  ''),          # clipboard
    ('📖',  ''),
    ('🔍',  ''),          # magnifier
    ('🔎',  ''),
    ('🖥️',''),           # monitor
    ('🖥',  ''),
    ('🧠',  ''),          # brain
    ('🧹',  ''),          # broom

    # lecture_mode.js
    ('⌨',  ''),           # keyboard
    ('⏭',  '▶▶'),        # next
    ('⏮',  '◀◀'),        # prev
    ('⏸',  '⏸'),         # keep pause (non-emoji symbol)
    ('✕',  '×'),          # close — typographic multiply
    ('🇮🇳', 'IN'),       # flag — text
    ('🇮',  ''),
    ('🇳',  ''),
    ('🎓',  ''),          # graduation cap
    ('🔹',  '—'),         # blue diamond bullet → em dash

    # Sword icon (used in logo/header)
    ('⚔️', 'TAC'),
    ('⚔',  'TAC'),
]

# ─────────────────────────────────────────────────────────────────
# 2. Context-aware replacements (regex, to fix surrounding text)
# ─────────────────────────────────────────────────────────────────
REGEX_REPLACEMENTS = [
    # index.html: metric icons — remove emoji wrapper div, keep value
    (r'<div class="metric-icon\s+\w+">[^<]*</div>', '<div class="metric-icon-placeholder"></div>'),

    # index.html: "📚 Concept & Formula Hub" → "Concept & Formula Hub"
    (r'⏱️?\s*Recent CBT Exercises', 'Recent CBT Exercises'),
    (r'📚\s*Concept &amp; Formula Hub', 'Concept &amp; Formula Hub'),
    (r'📚\s*Concept & Formula Hub', 'Concept & Formula Hub'),
    (r'📝\s*Evaluate Answer Sheet', 'Evaluate Answer Sheet'),
    (r'📄\s*Upload Exam Paper', 'Upload Exam Paper'),
    (r'🗞️?\s*Current Affairs', 'Current Affairs'),
    (r'🤖\s*AI Tact', 'AI Tact'),
    (r'🤝\s*International Visits', 'International Visits'),
    (r'🎖️?\s*Motiva', 'Motiva'),
    (r'✨\s*Enter Concept', 'Enter Concept'),
    (r'🗑️?\s*Clear Respo', 'Clear Respo'),

    # app.js: tab/button labels — strip leading emoji
    (r'⚡\s*High-Yield Formulas', 'High-Yield Formulas'),
    (r'📖\s*Concept Notes', 'Concept Notes'),
    (r'🧠\s*Concept Mindmap', 'Concept Mindmap'),
    (r'✨\s*Detailed Notes', 'Detailed Notes'),
    (r'🎬\s*Lecture', 'Lecture'),
    (r'⏱️?\s*Duration:', 'Duration:'),
    (r'🎯\s*Questions:', 'Questions:'),
    (r'📈\s*Correct:', 'Correct:'),
    (r'📉\s*Incorrect:', 'Incorrect:'),
    (r'🔍\s*Focus\s*Mode', 'Focus Mode'),
    (r'🖥️?\s*Standard\s*View', 'Standard View'),

    # app.js: section headers with emoji prefix
    (r'📊\s*OMR EVALUATION REPORT', 'OMR EVALUATION REPORT'),
    (r'📋\s*STEP-BY-STEP EXAM SOLU', 'STEP-BY-STEP EXAM SOLU'),
    (r'🔎\s*', ''),  # search prefix in headers

    # app.js: alerts with emoji
    (r'⚠️?\s*AI Unavailable', 'AI Unavailable'),
    (r'⏳\s*', ''),  # hourglass prefix

    # lecture_mode.js: title
    (r'🎬\s*Lecture Mode', 'Lecture Mode'),
    (r'📚\s*Back', 'Back'),
    (r'🔹\s*<span>', '— <span>'),  # bullet point

    # lecture_mode.js: IN flag button
    (r'🇮🇳\s*', 'IN '),

    # index.css: content: '⚡'
    (r"content: '⚡'", "content: '·'"),

    # Mark-complete button
    (r'✔️?\s*Completed', 'Completed'),
    (r'Mark Complete', 'Mark Complete'),

    # Copy button
    (r"'✅ Copied'", "'Copied'"),
    (r"'✅ Copy'", "'Copy'"),
    (r"btnCopy\.innerText = \"✅ Copied\"", 'btnCopy.innerText = "Copied"'),
    (r"btnCopy\.innerText = \"✅ Copy\"", 'btnCopy.innerText = "Copy"'),

    # Trophy/broom in console/alert (non-UI but clean anyway)
    (r'"🏆 Post-Exam Cycle Initiated', '"Post-Exam Cycle Initiated'),
    (r'"🧹 Post-Exam Prep Cycle', '"Post-Exam Prep Cycle'),

    # AI Notes header
    (r'AI Detailed Notes:', 'AI Detailed Notes:'),
    (r'💡\s*<p', '<p'),
    (r'💡\s*', ''),
]

def process_file(path):
    with open(path, encoding='utf-8', errors='replace') as f:
        content = f.read()

    original = content

    # Apply simple string replacements first
    for old, new in REPLACEMENTS:
        content = content.replace(old, new)

    # Apply regex replacements
    for pattern, replacement in REGEX_REPLACEMENTS:
        content = re.sub(pattern, replacement, content)

    # Final sweep: remove any remaining emoji codepoints not caught above
    # (catch-all for stray emoji chars)
    def remove_remaining_emoji(text):
        emoji_re = re.compile(
            r'[\U0001F000-\U0001FFFF'   # misc symbols & pictographs, emoticons, etc
            r'\U0001F300-\U0001F9FF'
            r'\U00002600-\U000027BF'    # misc symbols
            r'\U00002300-\U000023FF'    # misc technical (but keep ⏸ ▶ ◀)
            r'\U00002702-\U000027B0'    # dingbats
            r']'
        )
        return emoji_re.sub('', text)

    content = remove_remaining_emoji(content)

    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  Updated: {path}')
    else:
        print(f'  No changes: {path}')

files = [
    'index.html',
    'app.js',
    'index.css',
    'lecture_mode.js',
]

print('Removing emojis from UI files...')
for f in files:
    process_file(f)
print('Done.')
