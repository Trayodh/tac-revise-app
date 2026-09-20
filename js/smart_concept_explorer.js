class SmartConceptExplorer {
    static init() {
        // Insert floating modal into DOM if it doesn't exist
        if (!document.getElementById('smart-concept-modal')) {
            const modal = document.createElement('div');
            modal.id = 'smart-concept-modal';
            modal.className = 'smart-modal';
            modal.innerHTML = `
                <div class="smart-modal-content">
                    <span class="smart-modal-close" onclick="document.getElementById('smart-concept-modal').style.display='none'">&times;</span>
                    <h3 id="smart-modal-title">Concept</h3>
                    <div id="smart-modal-body" class="skeleton-loader" style="min-height: 80px;">Fetching insights...</div>
                </div>
            `;
            document.body.appendChild(modal);
        }
    }

    static attachListeners() {
        // Find any existing smart-concept spans that don't have onclick bound and bind them
        // (Handled directly in holistic_learning_engine via HTML injection, but useful for fallback)
    }

    static async explore(conceptName) {
        this.init();
        const modal = document.getElementById('smart-concept-modal');
        const title = document.getElementById('smart-modal-title');
        const body = document.getElementById('smart-modal-body');

        title.textContent = conceptName;
        body.innerHTML = `Fetching holistic insights for ${conceptName}...`;
        body.classList.add('skeleton-loader');
        modal.style.display = 'block';

        const prompt = `You are a military exam knowledge assistant. 
The student clicked on the concept: "${conceptName}".
Provide a very brief 3-4 sentence explanation. Then list 2 highly related topics they should know.
Format:
**Explanation:** <text>
**Related Topics:**
- <topic1>
- <topic2>`;

        try {
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'gemini-1.5-flash',
                    stream: false,
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            if (!response.ok) throw new Error("API Error");
            const data = await response.json();
            const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "No explanation found.";

            body.classList.remove('skeleton-loader');
            body.innerHTML = marked.parse(aiText);
        } catch (error) {
            console.error("Smart Concept Explorer Error:", error);
            body.classList.remove('skeleton-loader');
            body.innerHTML = `<span style="color:var(--error);">Failed to load concept data.</span>`;
        }
    }
}

window.SmartConceptExplorer = SmartConceptExplorer;
