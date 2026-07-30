// diagram_engine.js
window.DiagramEngine = {
  render: function(topicId) {
    if (typeof window.TOPIC_DIAGRAMS === 'undefined' || !window.TOPIC_DIAGRAMS[topicId]) {
      return ''; // No diagram for this topic
    }

    const data = window.TOPIC_DIAGRAMS[topicId];
    if (!data || !data.items || data.items.length === 0) return '';

    let html = `<div class="ai-diagram-container" style="margin: 24px 0; background: rgba(15,23,42,0.6); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 4px 20px rgba(0,0,0,0.2);">`;
    
    html += `<h3 style="color: #38bdf8; text-align: center; margin-top: 0; margin-bottom: 24px; font-family: var(--font-mono, monospace); letter-spacing: 1px; text-transform: uppercase;">[ DIAGRAM: ${data.title || data.type} ]</h3>`;

    if (data.type === 'timeline') {
      html += this.renderTimeline(data.items);
    } else if (data.type === 'process') {
      html += this.renderProcess(data.items);
    } else if (data.type === 'comparison') {
      html += this.renderComparison(data.items);
    } else if (data.type === 'mindmap' || data.type === 'map') {
      html += this.renderMindmap(data.items);
    } else {
      // Fallback to process
      html += this.renderProcess(data.items);
    }

    html += `</div>`;
    return html;
  },

  renderTimeline: function(items) {
    let html = `<div style="position: relative; margin-left: 20px; padding-left: 20px; border-left: 2px solid #334155;">`;
    items.forEach((item, index) => {
      const color = item.color || '#10b981';
      html += `
        <div style="position: relative; margin-bottom: 24px;">
          <div style="position: absolute; left: -27px; top: 0px; width: 12px; height: 12px; border-radius: 50%; background: ${color}; border: 3px solid #0f172a;"></div>
          <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="color: ${color}; font-weight: bold; margin-bottom: 6px; font-size: 1.1rem;">${item.label}</div>
            <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.5;">${item.content}</div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    return html;
  },

  renderProcess: function(items) {
    let html = `<div style="display: flex; flex-direction: column; gap: 16px;">`;
    items.forEach((item, index) => {
      const color = item.color || '#f59e0b';
      const isLast = index === items.length - 1;
      html += `
        <div style="display: flex; align-items: flex-start; gap: 16px;">
          <div style="flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.1); color: ${color}; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 1px solid ${color}40;">
            ${index + 1}
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); flex: 1;">
            <div style="color: ${color}; font-weight: bold; margin-bottom: 6px; font-size: 1.1rem;">${item.label}</div>
            <div style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.5;">${item.content}</div>
          </div>
        </div>
      `;
      if (!isLast) {
        html += `<div style="margin-left: 17px; width: 2px; height: 16px; background: #334155;"></div>`;
      }
    });
    html += `</div>`;
    return html;
  },

  renderComparison: function(items) {
    let html = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">`;
    items.forEach((item) => {
      const color = item.color || '#a855f7';
      html += `
        <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 8px; border-top: 3px solid ${color};">
          <div style="color: ${color}; font-weight: bold; margin-bottom: 8px; font-size: 1.1rem; text-align: center;">${item.label}</div>
          <div style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5;">${item.content}</div>
        </div>
      `;
    });
    html += `</div>`;
    return html;
  },

  renderMindmap: function(items) {
    // A simple grid of interconnected concept cards
    let html = `<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">`;
    items.forEach((item) => {
      const color = item.color || '#3b82f6';
      html += `
        <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 12px; border: 1px solid ${color}40; width: calc(50% - 16px); min-width: 200px; box-sizing: border-box; text-align: center;">
          <div style="color: ${color}; font-weight: bold; margin-bottom: 8px; font-size: 1.05rem;">${item.label}</div>
          <div style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.4;">${item.content}</div>
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }
};
