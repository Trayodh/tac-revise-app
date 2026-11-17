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

    // Prevent clicking the tooltip from clearing the text selection
    tooltip.addEventListener('mousedown', (e) => {
      e.preventDefault();
    });
    tooltip.addEventListener('touchstart', (e) => {
      // Don't prevent default on touchstart for now as it might block clicks,
      // but if we do, we need to handle touchend.
    });

    document.body.appendChild(tooltip);
    return tooltip;
  }

  function hideTooltip() {
    const tip = document.getElementById('tell-me-more-tooltip');
    if (tip) tip.style.display = 'none';
  }

  // ----- Show tooltip at (x, y) with selectedText + context -----
  function showTooltip(x, y, selectedText, contextData) {
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
      if (typeof window.initiateTellMeMore === 'function') {
        window.initiateTellMeMore(contextData);
      } else if (typeof window.showDronacharyaQuickDoubt === 'function') {
        window.showDronacharyaQuickDoubt(selectedText.trim(), true, contextData.contextText);
      }
    };
  }

  // ----- Core selection handler -----
  function handleSelectionChange(event) {
    clearTimeout(hideTimer);

    const sel = window.getSelection();
    const text = sel ? sel.toString().trim() : '';

    console.log('[TellMeMore] Selection detected. Length:', text.length, text.substring(0, 20));

    // Ignore very short or very long selections
    if (!text || text.length < 3 || text.length > 400) {
      hideTimer = setTimeout(hideTooltip, 300);
      return;
    }

    // Only activate inside the notes/topic viewer area
    let target = event.target || document.activeElement;
    if (target && target.nodeType === Node.TEXT_NODE) {
      target = target.parentElement;
    }
    
    let inNotesArea = false;
    if (target && typeof target.closest === 'function') {
      inNotesArea = (
        target.closest('.notes-text') || 
        target.closest('.tab-pane-content') || 
        target.closest('.topic-tab-body') || 
        target.closest('.topic-viewer-card') || 
        target.closest('#screen-notes') || 
        target.closest('.concept-formula-box')
      );
    }
    
    console.log('[TellMeMore] inNotesArea:', !!inNotesArea, 'target:', target);

    if (!inNotesArea) {
      hideTimer = setTimeout(hideTooltip, 300);
      return;
    }

    // Get surrounding paragraph context for disambiguation
    let contextText = '';
    let chapter = '', topic = '', subtopic = '', sectionHeading = '', previousHeading = '', nextHeading = '';
    try {
      const range = sel.getRangeAt(0);
      let container = range.commonAncestorContainer;
      if (container && container.nodeType === Node.TEXT_NODE) {
          container = container.parentElement;
      }
      const node = (container && typeof container.closest === 'function') 
        ? container.closest('p, li, div, td, h3, h4') || container 
        : container;
        
      if (node) {
        contextText = node.innerText || node.textContent || '';
      }

      // Find headings by traversing up and previous
      let current = node;
      while (current && current !== document.body) {
          let sibling = current.previousElementSibling;
          while (sibling) {
              if (!sectionHeading && sibling.matches && sibling.matches('h1, h2, h3, h4, h5, .topic-title, .chapter-title, .section-title')) {
                  sectionHeading = sibling.innerText || sibling.textContent;
              } else if (!previousHeading && sectionHeading && sibling.matches && sibling.matches('h1, h2, h3, h4, h5, .topic-title')) {
                  previousHeading = sibling.innerText || sibling.textContent;
              }
              sibling = sibling.previousElementSibling;
          }
          current = current.parentElement;
      }
      
      // Find next heading
      current = node;
      while (current && current !== document.body) {
          let sibling = current.nextElementSibling;
          while (sibling) {
              if (!nextHeading && sibling.matches && sibling.matches('h1, h2, h3, h4, h5, .topic-title, .section-title')) {
                  nextHeading = sibling.innerText || sibling.textContent;
                  break;
              }
              sibling = sibling.nextElementSibling;
          }
          if (nextHeading) break;
          current = current.parentElement;
      }

      const chEl = node ? node.closest('[data-chapter]') : null;
      if (chEl) chapter = chEl.getAttribute('data-chapter');
      else {
          const h1 = document.querySelector('h1');
          if (h1) chapter = h1.innerText || h1.textContent;
      }
    } catch (_) {}

    const contextData = {
        selectedText: text,
        contextText: contextText,
        pageName: document.title,
        chapter: chapter || 'Current Subject',
        topic: window.currentActiveTopic || '',
        subtopic: subtopic || '',
        sectionHeading: sectionHeading || '',
        previousHeading: previousHeading || '',
        nextHeading: nextHeading || '',
        sourceURL: window.location.href,
        userLanguage: navigator.language || 'en-US',
        timestamp: new Date().toISOString()
    };

    // Position based on selection bounding rect instead of mouse event
    // This is much more robust for double clicks, long presses, and keyboard selection.
    let x = 0, y = 0;
    try {
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      x = rect.left + (rect.width / 2);
      y = rect.top; // Above the selection
    } catch(e) {
      if (event && event.clientX) {
        x = event.clientX;
        y = event.clientY;
      }
    }

    if (x === 0 && y === 0) {
      hideTimer = setTimeout(hideTooltip, 300);
      return;
    }

    showTooltip(x, y, text, contextData);
  }

  // ----- Use selectionchange for primary trigger -----
  // It is the most reliable event across all platforms (iOS, Android, Desktop)
  document.addEventListener('selectionchange', (e) => {
    // Debounce slightly to allow selection to finish
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      const sel = window.getSelection();
      if (!sel || !sel.toString().trim()) {
        hideTooltip();
      } else {
        handleSelectionChange(e);
      }
    }, 300);
  });

  // Keep mouseup/touchend as backups for quick taps that might not trigger selectionchange again
  document.addEventListener('mouseup', (e) => {
    if (window.getSelection().toString().trim()) handleSelectionChange(e);
  });
  
  document.addEventListener('touchend', (e) => {
    if (window.getSelection().toString().trim()) handleSelectionChange(e);
  });

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

  console.log('[TellMeMore] Text-selection AI explainer initialized. (Using robust selectionchange)');
})();
