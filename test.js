let text = '<p>[[The Universe &amp; Solar System]]</p>';
let parsed = text.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, topicName, displayLabel) => {
    const label = displayLabel || topicName || '';
    const cleanTopic = (topicName || '').trim().replace(/'/g, '\\\'');
    return `<a class="wiki-link" onclick="triggerDoubtExplain('${cleanTopic}', this)">${label}</a>`;
});
console.log(parsed);
