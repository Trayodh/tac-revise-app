const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
const styleStr = `<style>
/* Knowledge Evolution Markdown Styles */
#dynamic-notes-container { font-family: 'Inter', system-ui, sans-serif; line-height: 1.7; font-size: 0.95rem; }
#dynamic-notes-container h1 { font-size: 1.8rem; font-weight: 700; color: var(--accent); border-bottom: 2px solid var(--accent); padding-bottom: 0.3rem; margin-top: 1.5rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; }
#dynamic-notes-container h2 { font-size: 1.4rem; font-weight: 600; color: var(--text-primary); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.2rem; margin-top: 1.5rem; margin-bottom: 0.8rem; }
#dynamic-notes-container h3 { font-size: 1.15rem; font-weight: 600; color: #fff; margin-top: 1.2rem; margin-bottom: 0.5rem; }
#dynamic-notes-container p { margin-bottom: 1rem; color: var(--text-muted); }
#dynamic-notes-container ul, #dynamic-notes-container ol { margin-bottom: 1rem; padding-left: 1.5rem; color: var(--text-muted); }
#dynamic-notes-container li { margin-bottom: 0.4rem; }
#dynamic-notes-container strong { color: var(--text-primary); font-weight: 600; }
#dynamic-notes-container blockquote { background: rgba(255,255,255,0.03); border-left: 4px solid var(--accent); padding: 12px 16px; margin: 1.5rem 0; border-radius: 0 8px 8px 0; }
#dynamic-notes-container table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
#dynamic-notes-container th { background: rgba(255,255,255,0.05); color: var(--text-primary); text-align: left; padding: 10px; border-bottom: 2px solid rgba(255,255,255,0.1); }
#dynamic-notes-container td { padding: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); color: var(--text-muted); }
#dynamic-notes-container .mermaid { background: rgba(255,255,255,0.05); border-radius: 8px; padding: 1rem; margin: 1.5rem 0; text-align: center; overflow-x: auto; }
</style>`;

if (!c.includes('Knowledge Evolution Markdown Styles')) {
    c = c.replace('</head>', styleStr + '\n</head>');
    fs.writeFileSync('index.html', c);
}
