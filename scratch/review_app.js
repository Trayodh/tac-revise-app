const http = require('http');
const fs = require('fs');

const BANK_PATH = 'question_banks/cds_pyq_bank.json';
const STATE_PATH = 'scratch/review_app_state.json';
const PORT = 3000;

let bank = { gs: [] };
try {
    bank = JSON.parse(fs.readFileSync(BANK_PATH, 'utf8'));
} catch(e) {
    console.error("Failed to load bank:", e);
    process.exit(1);
}

let state = { currentIndex: 0 };
if (fs.existsSync(STATE_PATH)) {
    state = JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Manual Review App</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 40px 20px; background: #0f172a; color: #f8fafc; }
        .container { max-width: 800px; margin: 0 auto; background: #1e293b; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; }
        h1 { margin-top: 0; color: #38bdf8; font-size: 2rem; border-bottom: 1px solid #334155; padding-bottom: 20px; }
        .progress { color: #94a3b8; font-size: 1rem; margin-bottom: 20px; font-weight: 600; letter-spacing: 0.5px; }
        .question-box { font-size: 1.3rem; line-height: 1.6; margin-bottom: 25px; padding: 25px; background: #0f172a; border-left: 5px solid #38bdf8; border-radius: 8px; color: #f1f5f9; }
        .options { list-style: none; padding: 0; }
        .options li { padding: 15px 20px; margin-bottom: 12px; background: #334155; border-radius: 8px; font-size: 1.1rem; color: #e2e8f0; transition: transform 0.1s; }
        .actions { display: flex; gap: 20px; margin-top: 40px; }
        button { flex: 1; padding: 18px; font-size: 1.2rem; font-weight: bold; border: none; border-radius: 10px; cursor: pointer; color: white; transition: all 0.2s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.2); }
        button:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.3); }
        button:active { transform: translateY(0); }
        .btn-keep { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
        .btn-delete { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); }
        .shortcuts { text-align: center; margin-top: 25px; color: #64748b; font-size: 0.95rem; }
        kbd { background: #0f172a; padding: 4px 8px; border-radius: 4px; border: 1px solid #334155; font-family: monospace; color: #94a3b8; }
        #done-msg { display: none; text-align: center; color: #10b981; font-size: 1.5rem; padding: 60px 0; }
        #done-msg h2 { font-size: 2.5rem; margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Exam Question Reviewer</h1>
        <div class="progress">Question <span id="idx"></span> of <span id="total"></span></div>
        <div id="content">
            <div class="question-box" id="q-text">Loading question...</div>
            <ul class="options" id="options"></ul>
            <div class="actions">
                <button class="btn-keep" onclick="submit('keep')">Keep Question</button>
                <button class="btn-delete" onclick="submit('delete')">Delete Question</button>
            </div>
            <div class="shortcuts">
                Keyboard Shortcuts: Press <kbd>K</kbd> to Keep or <kbd>D</kbd> to Delete
            </div>
        </div>
        <div id="done-msg">
            <h2>🎉 Review Complete!</h2>
            <p>You have reviewed all the questions in the bank.</p>
        </div>
    </div>
    <script>
        let isProcessing = false;

        async function load() {
            const res = await fetch('/api/state');
            const data = await res.json();
            if (data.done) {
                document.getElementById('content').style.display = 'none';
                document.getElementById('done-msg').style.display = 'block';
                return;
            }
            document.getElementById('idx').innerText = data.currentIndex + 1;
            document.getElementById('total').innerText = data.total;
            document.getElementById('q-text').innerText = data.question.question;
            const opts = document.getElementById('options');
            opts.innerHTML = '';
            if (data.question.options) {
                data.question.options.forEach((opt, i) => {
                    const li = document.createElement('li');
                    li.innerText = String.fromCharCode(65 + i) + '. ' + opt;
                    opts.appendChild(li);
                });
            }
            isProcessing = false;
        }
        
        async function submit(action) {
            if (isProcessing) return;
            isProcessing = true;
            await fetch('/api/' + action, { method: 'POST' });
            load();
        }

        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'k') submit('keep');
            if (e.key.toLowerCase() === 'd') submit('delete');
        });

        load();
    </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
    } 
    else if (req.method === 'GET' && req.url === '/api/state') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        if (state.currentIndex >= bank.gs.length) {
            res.end(JSON.stringify({ done: true }));
        } else {
            res.end(JSON.stringify({
                currentIndex: state.currentIndex,
                total: bank.gs.length,
                question: bank.gs[state.currentIndex]
            }));
        }
    }
    else if (req.method === 'POST' && req.url === '/api/keep') {
        state.currentIndex++;
        fs.writeFileSync(STATE_PATH, JSON.stringify(state));
        res.writeHead(200);
        res.end();
    }
    else if (req.method === 'POST' && req.url === '/api/delete') {
        bank.gs.splice(state.currentIndex, 1);
        fs.writeFileSync(BANK_PATH, JSON.stringify(bank, null, 2));
        fs.writeFileSync(STATE_PATH, JSON.stringify(state));
        res.writeHead(200);
        res.end();
    }
    else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`🚀 Web Review App is running!`);
    console.log(`👉 Open http://localhost:${PORT} in your browser.`);
    console.log(`   Press Ctrl+C here to stop the server when done.`);
    console.log(`=================================================\n`);
});
