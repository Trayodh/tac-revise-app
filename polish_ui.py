"""
Phase 2: Professional polish after emoji removal.
- Fix leading spaces in panel titles
- Replace metric icon divs with inline SVG equivalents  
- Fix tab/button labels that lost their icons (add text alternatives)
- Fix lecture mode controls
"""
import re

def fix_file(path, replacements):
    with open(path, encoding='utf-8') as f:
        content = f.read()
    original = content
    for old, new in replacements:
        content = content.replace(old, new)
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  Polished: {path}')
    else:
        print(f'  No changes: {path}')

# ── index.html fixes ─────────────────────────────────────────────
HTML_FIXES = [
    # Leading space in panel titles after emoji removal
    ('"panel-title"> Concept &amp; Formula Hub', '"panel-title">Concept &amp; Formula Hub'),
    ('"panel-title"> Recent CBT Exercises',       '"panel-title">Recent CBT Exercises'),
    ('"panel-title"> Current Affairs',             '"panel-title">Current Affairs'),
    ('"panel-title"> International Visits',        '"panel-title">International Visits'),
    ('"panel-title"> Enter Concept',               '"panel-title">Enter Concept'),
    ('"panel-title"> Upload Exam Paper',           '"panel-title">Upload Exam Paper'),
    ('"panel-title"> Evaluate Answer Sheet',       '"panel-title">Evaluate Answer Sheet'),

    # Style panel titles with "margin-bottom: 0" (AI Tactical + Motivation)
    ('style="margin-bottom: 0;"> AI Tactical',     'style="margin-bottom: 0;">AI Tactical'),
    ('style="margin-bottom: 0;"> Motivation',      'style="margin-bottom: 0;">Motivation'),
    ('style="margin-bottom: 0;"> Motivation Of The Day: Tales of Bravery', 
     'style="margin-bottom: 0;">Motivation Of The Day'),

    # Metric icon divs — replace with professional SVG icons
    (
        '<div class="metric-icon green"></div>',
        '<div class="metric-icon green"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>'
    ),
    (
        '<div class="metric-icon blue"></div>',
        '<div class="metric-icon blue"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>'
    ),
    (
        '<div class="metric-icon red"></div>',
        '<div class="metric-icon red"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>'
    ),
    (
        '<div class="metric-icon amber"></div>',
        '<div class="metric-icon amber"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>'
    ),
    # metric-icon-placeholder from regex pass — remove
    ('<div class="metric-icon-placeholder"></div>', ''),

    # Launcher chat bubble icon
    ('<span class="launcher-icon"></span>', '<span class="launcher-icon"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>'),

    # Clear response button text
    (' Clear Respo', 'Clear Responses'),

    # Toggle buttons in top bar - remove leading space
    ('> Light/Dark', '>Theme'),
    ('> Colors', '>Accent'),

    # Save/Next arrow button
    ('→ Save &amp; Next', 'Save &amp; Next →'),
]

# ── app.js fixes ─────────────────────────────────────────────────
APP_FIXES = [
    # Tab buttons — leading space cleanup
    (' High-Yield Formulas', 'High-Yield Formulas'),
    (' Concept Notes',       'Concept Notes'),
    (' Concept Mindmap',     'Concept Mindmap'),
    (' Detailed Notes',      'Detailed Notes'),
    (' Lecture',             'Lecture'),
    (' Duration:',           'Duration:'),
    (' Questions:',          'Questions:'),
    (' Correct:',            'Correct:'),
    (' Incorrect:',          'Incorrect:'),
    (' Focus Mode',          'Focus Mode'),
    (' Standard View',       'Standard View'),
    (' AI Unavailable',      'AI Unavailable'),

    # Completed toggle text — cleanup
    ("' Completed'", "'Completed'"),
    ("> Completed<", ">Completed<"),

    # CBT exam title - cleanup
    (' AI Detailed Notes:', 'AI Detailed Notes:'),

    # Lightbulb hint — strip leading space  
    ('> <p style=', '><p style='),

    # Checkmark in completed topic badge
    ('" >  ✔', '" >'),
    ('>  <span', '><span'),

    # Section headers in exam solver/evaluator (cleaning double spaces from emoji removal)
    ('> OMR EVALUATION', '>OMR EVALUATION'),
    ('> STEP-BY-STEP EXAM', '>STEP-BY-STEP EXAM'),
    ('>  STEP', '>STEP'),
    ('>  OMR', '>OMR'),
]

# ── lecture_mode.js fixes ─────────────────────────────────────────
LM_FIXES = [
    # Prev/next buttons - use proper Unicode arrows or text
    ('▶▶', '&#9654;&#9654;'),   # forward
    ('◀◀', '&#9664;&#9664;'),   # backward
    # play/pause — use HTML entities
    ("btn.innerHTML = isPlaying ? '⏸' : '▶'", "btn.innerHTML = isPlaying ? '&#9646;&#9646;' : '&#9654;'"),
    # Close button
    ('>×<', '>&#215;<'),
    # Lecture title
    (' Lecture Mode', 'Lecture Mode'),
    # End screen
    (' Back', 'Back'),
    # Hint bar — keyboard shortcut hint
    (' Space = Play/Pause', 'Space = Play/Pause'),
    # IN button for voice  
    ('IN ', 'IN '),
    # lm-bullet-main — em dash bullet
    ('"lm-bullet-main">— <span>', '"lm-bullet-main"><span class="lm-bullet-dash">—</span><span>'),
]

print('Polishing UI files...')
fix_file('index.html',     HTML_FIXES)
fix_file('app.js',         APP_FIXES)
fix_file('lecture_mode.js', LM_FIXES)
print('Done.')
