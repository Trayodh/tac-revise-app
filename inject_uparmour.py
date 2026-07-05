import re
import sys

try:
    with open('app.js', 'r', encoding='utf-8') as f: 
        content = f.read()

    # Add the Up-Armour button
    old_button_html = '''<button class="bank-reveal-btn" onclick="revealBankSolution(this)">Reveal Solution</button>
            <div class="bank-solution" style="display: none;">'''
    new_button_html = '''<div style="margin-top: 15px;">
                <button class="bank-reveal-btn" onclick="revealBankSolution(this)">Reveal Solution</button>
                <button class="bank-reveal-btn up-armour-btn" onclick="upArmourQuestion(this, ${i})" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); margin-left: 10px; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; transition: all 0.2s;">
                    <span class="material-symbols-outlined" style="font-size: 16px; vertical-align: text-bottom; margin-right: 4px;">military_tech</span>Up-Armour It
                </button>
            </div>
            <div class="bank-solution" style="display: none; margin-top: 15px;">'''
                
    content = content.replace(old_button_html, new_button_html)

    # Add the explanation wrapper and id to q-text
    content = content.replace('<div class="bank-q-text">Q${i+1}. ${q.question}</div>', '<div class="bank-q-text" id="bank-q-text-${i}">Q${i+1}. ${q.question}</div>')
    content = content.replace('${q.explanation || \'No detailed explanation provided.\'}', '<div class="explanation-text">${q.explanation || \'No detailed explanation provided.\'}</div>')

    # Append the upArmourQuestion function
    if 'function upArmourQuestion' not in content:
        content += '''
// --- UP-ARMOUR LOGIC ---
async function upArmourQuestion(btn, index) {
    const pool = EXTRA_QUESTION_BANK[currentBankSubject] || [];
    const q = pool[index];
    if (!q) return;

    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: text-bottom; margin-right: 4px; animation: spin 1s linear infinite;">sync</span> Up-Armouring...';
    btn.disabled = true;

    const prompt = `You are an expert UPSC/NDA/CDS exam setter. I have a simple multiple choice question. Your task is to "Up-Armour" this question, meaning make it significantly more difficult, analytical, and conceptual (e.g., using Statement I and Statement II, or multi-statement format common in UPSC exams).
    
CRUCIAL RULE: You MUST keep the EXACT SAME options, meaning the correct answer must still be Option ${String.fromCharCode(65 + q.correct)}. 

Original Question: ${q.question}
Options:
A. ${q.options[0]}
B. ${q.options[1]}
C. ${q.options[2]}
D. ${q.options[3]}

Return the response in this exact format:
[NEW_QUESTION]
(Write the new, harder question text here)
[NEW_EXPLANATION]
(Write a detailed, advanced explanation justifying the answer here)`;

    try {
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'gemini-3-flash-preview',
                stream: false,
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!response.ok) throw new Error("Failed to generate up-armoured question");
        const data = await response.json();
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

        const questionMatch = aiText.match(/\\[NEW_QUESTION\\]([\\s\\S]*?)\\[NEW_EXPLANATION\\]/);
        const expMatch = aiText.match(/\\[NEW_EXPLANATION\\]([\\s\\S]*)/);

        if (questionMatch && questionMatch[1]) {
            const card = btn.closest('.bank-card');
            const qTextDiv = card.querySelector('.bank-q-text');
            qTextDiv.innerHTML = `<span style="color: #f59e0b; font-weight: bold;">[UP-ARMOURED] Q${index+1}.</span> ${questionMatch[1].trim().replace(/\\n/g, '<br>')}`;
            
            if (expMatch && expMatch[1]) {
                const expDiv = card.querySelector('.explanation-text');
                if (expDiv) {
                    expDiv.innerHTML = `<br><strong style="color: #f59e0b;">Advanced Explanation:</strong><br>${expMatch[1].trim().replace(/\\n/g, '<br>')}`;
                }
            }
            
            btn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: text-bottom; margin-right: 4px;">verified</span> Up-Armoured';
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        } else {
            throw new Error("Invalid format returned by AI");
        }
    } catch (err) {
        console.error("Up-armour failed", err);
        btn.innerHTML = '<span class="material-symbols-outlined" style="font-size: 16px; vertical-align: text-bottom; margin-right: 4px;">error</span> Failed';
        btn.disabled = false;
        setTimeout(() => { btn.innerHTML = originalBtnText; }, 2000);
    }
}
'''

    with open('app.js', 'w', encoding='utf-8') as f: 
        f.write(content)
    print('Done!')
except Exception as e:
    print(e)
