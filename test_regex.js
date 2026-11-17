const text = "";
const processed = text.replace(//g, function(match, code) {
  return `<div class="mermaid">${code}</div>`;
});
console.log("Processed:", processed);
