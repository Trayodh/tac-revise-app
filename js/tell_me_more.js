/**
 * TELL ME MORE — AI-powered text selection explainer
 * Double-click OR select any text in the notes pane → floating tooltip appears
 * → Clicking "📖 Tell Me More" sends selected text + paragraph context to Dronacharya
 */

(function initTellMeMore() {
  // ----- Tooltip Element (created once) -----
  let tooltip = null;
  let hideTimer = null;

  function getOrCreateTooltip() {
    if (tooltip && document.body.contains(tooltip)) return tooltip;
    tooltip = document.createElement('div');
    tooltip.id = 'tell-me-more-tooltip';
    tooltip.style.cssText = `
      position: fixed;
      z-index: 9999;
      display: none;
      align-items: center;
      gap: 6px;
      background: linear-gradient(135deg, rgba(17,24,39,0.98) 0%, rgba(30,20,50,0.98) 100%);
      border: 1px solid rgba(168,85,247,0.55);
      border-radius: 8px;
      padding: 6px 12px 6px 10px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.2);
      font-family: var(--font-mono, monospace);
      font-size: 0.82rem;
      font-weight: 700;
      color: #c084fc;
      cursor: pointer;
      user-select: none;
      pointer-events: auto;
      white-space: nowrap;
      animation: tmm-pop 0.15s cubic-bezier(0.34,1.56,0.64,1) both;
      transform-origin: center bottom;
      letter-spacing: 0.04em;
    `;
    tooltip.innerHTML = `<span style="font-size:1rem;">📖</span> Tell Me More`;

    // Inject animation if not already present
    if (!document.getElementById('tmm-style')) {
      const style = document.createElement('style');
      style.id = 'tmm-style';
      style.textContent = `
        @keyframes tmm-pop {
          from { opacity: 0; transform: scale(0.8) translateY(4px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        #tell-me-more-tooltip:hover {
          background: linear-gradient(135deg, rgba(168,85,247,0.25) 0%, rgba(59,130,246,0.25) 100%) !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 28px rgba(168,85,247,0.4) !important;
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(tooltip);
    return tooltip;
  }

  function hideTooltip() {
    const tip = document.getElementById('tell-me-more-tooltip');
    if (tip) tip.style.display = 'none';
  }

  // ----- Show tooltip at (x, y) with selectedText + context -----
  function showTooltip(x, y, selectedText, contextText) {
    const tip = getOrCreateTooltip();
    tip.style.display = 'flex';
    tip.style.animation = 'none';
    void tip.offsetWidth; // reflow to restart animation
    tip.style.animation = 'tmm-pop 0.15s cubic-bezier(0.34,1.56,0.64,1) both';

    // Position above cursor
    const W = window.innerWidth;
    const H = window.innerHeight;
    const TIP_W = 170;
    const TIP_H = 38;
    let left = Math.min(x - TIP_W / 2, W - TIP_W - 12);
    left = Math.max(left, 10);
    let top = y - TIP_H - 12;
    if (top < 10) top = y + 22;

    tip.style.left = left + 'px';
    tip.style.top = top + 'px';

    // Re-bind click every time (captures correct text in closure)
    tip.onclick = (e) => {
      e.stopPropagation();
      hideTooltip();
      if (window.getSelection) {
          window.getSelection().removeAllRanges();
      }
      if (typeof window.showDronacharyaQuickDoubt === 'function') {
        window.showDronacharyaQuickDoubt(selectedText.trim(), true, contextText);
      } else if (typeof window.triggerDoubtExplain === 'function') {
        window.triggerDoubtExplain(selectedText.trim());
      }
    };
  }

  // ----- Core selection handler -----
  function handleSelectionChange(event) {
    clearTimeout(hideTimer);

    const sel = window.getSelection();
    const text = sel ? sel.toString().trim() : '';

    // Ignore very short or very long selections
    if (!text || text.length < 3 || text.length > 400) {
      hideTimer = setTimeout(hideTooltip, 300);
      return;
    }

    // Only activate inside the notes/topic viewer area
    const target = event.target || document.activeElement;
    const inNotesArea = target && (
      target.closest('.notes-text') || 
      target.closest('.tab-pane-content') || 
      target.closest('.topic-tab-body') || 
      target.closest('.topic-viewer-card') || 
      target.closest('#screen-notes') || 
      target.closest('.concept-formula-box')
    );
    
    if (!inNotesArea) {
      hideTimer = setTimeout(hideTooltip, 300);
      return;
    }

    // Get surrounding paragraph context for disambiguation
    let contextText = '';
    try {
      const range = sel.getRangeAt(0);
      const container = range.commonAncestorContainer;
      const paraEl = container.nodeType === Node.TEXT_NODE
        ? container.parentElement && container.parentElement.closest('p, li, div, td, h3, h4')
        : container && container.closest('p, li, div, td, h3, h4');
      if (paraEl) contextText = paraEl.innerText || paraEl.textContent || '';
    } catch (_) {}

    // Position at mouse location
    const x = event.clientX ?? (event.changedTouches?.[0]?.clientX ?? 0);
    const y = event.clientY ?? (event.changedTouches?.[0]?.clientY ?? 0);

    showTooltip(x, y, text, contextText);
  }

  // ----- Listen for mouse up (covers both double-click and drag selection) -----
  document.addEventListener('mouseup', handleSelectionChange);
  
  // also handle touchend for mobile
  document.addEventListener('touchend', handleSelectionChange);

  // ----- Hide on click elsewhere or escape -----
  document.addEventListener('mousedown', (e) => {
    const tip = document.getElementById('tell-me-more-tooltip');
    if (tip && e.target !== tip && !tip.contains(e.target)) {
      hideTooltip();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideTooltip();
  });

  // ----- Hide when selection is cleared -----
  document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    if (!sel || !sel.toString().trim()) {
      hideTimer = setTimeout(hideTooltip, 250);
    }
  });

  console.log('[TellMeMore] Text-selection AI explainer initialized.');
})();
