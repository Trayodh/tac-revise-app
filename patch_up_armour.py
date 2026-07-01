import re

with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Modify the loadMoreBankQuestions card innerHTML to include the button
old_button_html = """            <button class="bank-reveal-btn" onclick="revealBankSolution(this)">Reveal Solution</button>"""
new_button_html = """            <div style="display: flex; gap: 10px; margin-top: auto;">
                <button class="bank-reveal-btn" style="flex: 1;" onclick="revealBankSolution(this)">Reveal Solution</button>
                <button class="bank-reveal-btn" style="flex: 1; background-color: var(--accent); color: white; border-color: var(--accent);" onclick="upArmourQuestion(this, ${i})">Up-Armour It 🛡️</button>
            </div>"""

if "Up-Armour It" not in content:
    content = content.replace(old_button_html, new_button_html)
    print("Injected Up-Armour button into card HTML.")

# 2. Add the AI logic
if "function upArmourQuestion" not in content:
    up_armour_logic = """
async function upArmourQuestion(btn, index) {
    if (typeof SYSTEM_CONFIG === 'undefined' || !SYSTEM_CONFIG.geminiApiKey) {
        alert("Please set your Gemini API Key in the config first!");
        return;
    }
    
    const pool = EXTRA_QUESTION_BANK[currentBankSubject];
    const q = pool[index];
    if (!q) return;

    // Loading State
    const originalText = btn.innerText;
    btn.innerText = "Up-Armouring... ⚙️";
    btn.disabled = true;
    
    const prompt = `You are an expert, sadistic military exam setter. Your job is to take the following multiple-choice question and "Up-Armour" it—meaning you must rephrase the question to significantly increase its difficulty. Use complex vocabulary, add situational distractors, insert double negatives, or frame it as a multi-statement analysis if possible.
    CRITICAL RULES:
    1. The core factual answer MUST remain the exact same.
    2. You are ONLY rephrasing the question text itself. DO NOT output the options.
    3. Return ONLY the new, harder question text. No pleasantries, no markdown blocks.

    Original Question:
    ${q.question}
    `;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${SYSTEM_CONFIG.geminiApiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.9 }
            })
        });
        
        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            const harderQuestion = data.candidates[0].content.parts[0].text.trim();
            
            // Find the question text element and update it with a nice animation
            const card = btn.closest('.bank-card');
            const textElement = card.querySelector('.bank-q-text');
            
            textElement.style.transition = "opacity 0.3s";
            textElement.style.opacity = 0;
            
            setTimeout(() => {
                textElement.innerHTML = `<span style="color: var(--accent); font-weight: bold;">[UP-ARMOURED]</span> ${harderQuestion}`;
                textElement.style.opacity = 1;
            }, 300);
            
            btn.innerText = "Up-Armoured! 💥";
        } else {
            throw new Error("Failed to generate.");
        }
    } catch (e) {
        console.error(e);
        alert("Up-Armour failed. Check your API key or connection.");
        btn.innerText = originalText;
        btn.disabled = false;
    }
}
"""
    content += up_armour_logic
    print("Injected upArmourQuestion function.")

with open("app.js", "w", encoding="utf-8") as f:
    f.write(content)
print("Finished patching app.js")
