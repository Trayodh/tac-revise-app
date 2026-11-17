document.addEventListener('DOMContentLoaded', () => {
    // Create the tooltip element
    const tooltip = document.createElement('div');
    tooltip.id = 'tell-me-more-tooltip';
    tooltip.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 16px; height: 16px;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 21l-.813-5.096L3 15l5.187-.813L9 9l.813 5.187L15 15l-5.187.813ZM18.25 5.25 18 8l-.25-2.75L15 5l2.75-.25L18 2l.25 2.75L21 5l-2.75.25ZM14.25 11.25l-.25 2.75-.25-2.75L11 11l2.75-.25.25-2.75.25 2.75L17 11l-2.75.25Z" />
        </svg>
        <span>Tell Me More</span>
    `;
    document.body.appendChild(tooltip);

    let selectedText = '';

    // Function to handle showing the tooltip
    const handleSelection = (e) => {
        // If clicking inside the tooltip, don't do anything here (let the click handler run)
        if (e && e.target && tooltip.contains(e.target)) {
            return;
        }

        const selection = window.getSelection();
        const text = selection.toString().trim();

        if (text.length > 0) {
            selectedText = text;
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();

            // Calculate position (centered above the selection)
            const top = rect.top + window.scrollY - 45; 
            const left = rect.left + window.scrollX + (rect.width / 2);

            // Ensure it doesn't go off screen
            tooltip.style.top = `${Math.max(10, top)}px`;
            tooltip.style.left = `${left}px`;
            tooltip.classList.add('visible');
        } else {
            tooltip.classList.remove('visible');
            selectedText = '';
        }
    };

    // Listen for mouse up (desktop) and touchend (mobile)
    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('keyup', handleSelection); // Also handle keyboard selection
    document.addEventListener('touchend', handleSelection);

    // Hide tooltip when clicking elsewhere, but not when clicking the tooltip itself
    document.addEventListener('mousedown', (e) => {
        if (!tooltip.contains(e.target)) {
            tooltip.classList.remove('visible');
        }
    });
    
    // Handle the button click
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (selectedText) {
            // Hide tooltip
            tooltip.classList.remove('visible');
            window.getSelection().removeAllRanges();
            
            // Switch screen to AI Console
            if (typeof switchScreen === 'function') {
                switchScreen('ai-console');
            }
            
            // Set mode to "solve" (Solve Doubt)
            const solveRadio = document.querySelector('input[name="ai-mode"][value="solve"]');
            if (solveRadio) {
                solveRadio.checked = true;
                // Dispatch change event to toggle UI
                solveRadio.dispatchEvent(new Event('change'));
            }
            
            // Populate the input with context
            const aiInput = document.getElementById('ai-custom-topic-input');
            if (aiInput) {
                aiInput.value = selectedText;
            }
            
            // Use the global function to trigger AI generation with context
            setTimeout(() => {
                if (typeof triggerAiSolveDoubt === 'function') {
                    triggerAiSolveDoubt(null, selectedText, "Explain this concept in detail");
                }
            }, 100);
        }
    });
});
