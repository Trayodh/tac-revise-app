// diagram_engine.js
window.DiagramEngine = {
  render: function(topicId) {
    if (typeof window.TOPIC_IMAGES === 'undefined' || !window.TOPIC_IMAGES[topicId]) {
      return ''; 
    }

    const data = window.TOPIC_IMAGES[topicId];
    if (!data || !data.url) return '';

    let html = `<div class="wiki-diagram-container" style="margin: 24px 0; background: rgba(0,0,0,0.2); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.05); text-align: center;">`;
    
    html += `<img src="${data.url}" alt="${data.title}" style="max-width: 100%; height: auto; max-height: 500px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); object-fit: contain; background: #f8fafc;" />`;
    
    html += `<div style="margin-top: 16px; color: #94a3b8; font-size: 0.85rem;">`;
    html += `Source: <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(data.title)}" target="_blank" style="color: #38bdf8; text-decoration: none; border-bottom: 1px dashed #38bdf8;">Wikipedia - ${data.title}</a>`;
    html += `</div>`;
    
    html += `</div>`;
    return html;
  }
};
