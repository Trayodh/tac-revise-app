const text = "```mermaid\r\ngraph TD\r\nA-->B\r\n```";
const processed = text.replace(/```mermaid\n([\s\S]*?)```/g, function(match, code) {
  return `<div class="mermaid">${code}</div>`;
});
console.log("Processed:", processed);
