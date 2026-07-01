import re

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add showQuestionBank to navigation toggle logic
if "function showQuestionBank()" not in content:
    bank_logic = """
// --- EXTRA QUESTION BANK LOGIC ---

function showQuestionBank() {
    // Hide all major sections
    document.getElementById('dashboard-section')?.classList.add('hidden');
    document.getElementById('mock-exam-section')?.classList.add('hidden');
    document.getElementById('cbt-exam-section')?.classList.add('hidden');
    document.getElementById('lecture-mode-section')?.classList.add('hidden');
    
    // Show bank section
    const bankSection = document.getElementById('question-bank-section');
    if (bankSection) {
        bankSection.classList.remove('hidden');
        renderQuestionBank('gs'); // Default load GS
    }
    
    closeSidebar();
}

let currentBankSubject = 'gs';
let currentBankPage = 0;
const BANK_PAGE_SIZE = 50;

function renderQuestionBank(subject) {
    if (typeof EXTRA_QUESTION_BANK === 'undefined') {
        alert("Extra question bank data is not loaded!");
        return;
    }
    
    currentBankSubject = subject;
    currentBankPage = 0;
    
    // Update filters
    document.querySelectorAll('.bank-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(subject)) {
            btn.classList.add('active');
        }
    });
    
    // Update counts
    document.getElementById('count-gs').innerText = EXTRA_QUESTION_BANK.gs.length;
    document.getElementById('count-english').innerText = EXTRA_QUESTION_BANK.english.length;
    document.getElementById('count-maths').innerText = EXTRA_QUESTION_BANK.maths.length;
    
    const container = document.getElementById('bank-container');
    container.innerHTML = ''; // Clear
    
    loadMoreBankQuestions();
}

function loadMoreBankQuestions() {
    const container = document.getElementById('bank-container');
    const pool = EXTRA_QUESTION_BANK[currentBankSubject] || [];
    
    const start = currentBankPage * BANK_PAGE_SIZE;
    const end = Math.min(start + BANK_PAGE_SIZE, pool.length);
    
    for (let i = start; i < end; i++) {
        const q = pool[i];
        if (!q) continue;
        
        const card = document.createElement('div');
        card.className = 'bank-card';
        
        // Options UI
        let optionsHtml = '<div class="bank-options">';
        (q.options || []).forEach((opt, idx) => {
            const isCorrect = idx === q.correct;
            optionsHtml += `<div class="bank-opt" data-correct="${isCorrect}">${String.fromCharCode(65 + idx)}. ${opt}</div>`;
        });
        optionsHtml += '</div>';
        
        card.innerHTML = `
            <div class="bank-q-text">Q${i+1}. ${q.question}</div>
            ${optionsHtml}
            <button class="bank-reveal-btn" onclick="revealBankSolution(this)">Reveal Solution</button>
            <div class="bank-solution" style="display: none;">
                <strong>Correct Answer:</strong> ${String.fromCharCode(65 + q.correct)}<br><br>
                ${q.explanation || 'No detailed explanation provided.'}
            </div>
        `;
        
        container.appendChild(card);
    }
    
    currentBankPage++;
    
    const loadBtn = document.getElementById('load-more-btn');
    if (end < pool.length) {
        loadBtn.style.display = 'inline-block';
    } else {
        loadBtn.style.display = 'none';
    }
}

function revealBankSolution(btn) {
    const card = btn.parentElement;
    const solutionDiv = card.querySelector('.bank-solution');
    const opts = card.querySelectorAll('.bank-opt');
    
    // Highlight correct option
    opts.forEach(opt => {
        if (opt.getAttribute('data-correct') === 'true') {
            opt.classList.add('correct');
        }
    });
    
    // Toggle solution visibility
    if (solutionDiv.style.display === 'none') {
        solutionDiv.style.display = 'block';
        btn.innerText = 'Hide Solution';
    } else {
        solutionDiv.style.display = 'none';
        btn.innerText = 'Reveal Solution';
        opts.forEach(opt => opt.classList.remove('correct'));
    }
}
"""
    
    with open("app.js", "a", encoding="utf-8") as f:
        f.write(bank_logic)
    print("Logic appended to app.js")
else:
    print("Logic already exists in app.js")

