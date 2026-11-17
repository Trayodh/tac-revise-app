const fs = require('fs');
const notes = fs.readFileSync('extracted_clean_history_notes.html', 'utf8');
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pathfinder Comprehensive History</title>
    <link rel="stylesheet" href="index.css">
    <style>
        body { font-family: sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; background: #1e293b; color: #f8fafc; }
        table { border-collapse: collapse; width: 100%; margin-bottom: 20px; font-size: 0.9em; }
        th, td { border: 1px solid #475569; padding: 8px; text-align: left; }
        th { background-color: #334155; }
        h2 { color: #38bdf8; border-bottom: 1px solid #475569; padding-bottom: 5px; margin-top: 2em; }
        h3 { color: #34d399; margin-top: 1.5em; }
        .back-btn { display: inline-block; padding: 10px 20px; background: #2563eb; color: white; text-decoration: none; border-radius: 5px; margin-bottom: 20px; }
        .back-btn:hover { background: #1d4ed8; }
    </style>
</head>
<body>
    <a href="index.html" class="back-btn">&larr; Back to Dashboard</a>
    <h1>Pathfinder Comprehensive History Notes</h1>
    <hr/>
    ${notes}
</body>
</html>`;
fs.writeFileSync('pathfinder.html', html);
console.log('Created pathfinder.html');
