const fs = require('fs');

function parseMermaid(code) {
  code = code.trim();
  if (code.startsWith('mindmap')) {
    return parseMindmap(code);
  } else if (code.startsWith('flowchart') || code.startsWith('graph')) {
    return parseFlowchart(code);
  } else {
    // Fallback simple node
    return { type: 'flowchart', direction: 'TD', nodes: [{ id: '1', label: code }], edges: [] };
  }
}

function parseMindmap(code) {
  const lines = code.split('\n').map(l => l.replace('\r', '')).filter(l => l.trim().length > 0);
  // Shift off the 'mindmap' declaration
  lines.shift();
  
  let rootLabel = 'Root';
  let rootMatch = lines[0].match(/root\(\((.*?)\)\)/);
  if (rootMatch) rootLabel = rootMatch[1];
  else rootLabel = lines[0].trim();
  
  lines.shift();
  
  const rootNode = { label: rootLabel, children: [] };
  const stack = [{ level: 0, node: rootNode }];
  
  for (let line of lines) {
    const indentMatch = line.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1].length : 0;
    const label = line.trim();
    if (!label) continue;
    
    let parsedLabel = label;
    // strip simple shapes if present, e.g. Node(text)
    const m = label.match(/^[^([]+[\(\[\{](.*)[\)\]\}]$/);
    if (m) parsedLabel = m[1];
    
    const newNode = { label: parsedLabel, children: [] };
    
    while (stack.length > 0 && stack[stack.length - 1].level >= indent) {
      stack.pop();
    }
    
    if (stack.length > 0) {
      stack[stack.length - 1].node.children.push(newNode);
      stack.push({ level: indent, node: newNode });
    }
  }
  
  return { type: 'mindmap', root: rootNode.label, children: rootNode.children };
}

function parseFlowchart(code) {
  const lines = code.split('\n').map(l => l.replace('\r', '').trim()).filter(l => l.length > 0);
  const header = lines.shift();
  const direction = header.includes('LR') ? 'LR' : 'TD';
  
  const nodes = [];
  const edges = [];
  const nodeMap = {};
  
  function addNode(id, label) {
    if (!nodeMap[id]) {
      nodeMap[id] = { id, label: label || id, shape: 'box' };
      nodes.push(nodeMap[id]);
    } else if (label && nodeMap[id].label === id) {
      nodeMap[id].label = label;
    }
    return nodeMap[id];
  }
  
  for (let line of lines) {
    // Check for edge
    const edgeParts = line.split(/-->/);
    if (edgeParts.length > 1) {
      let prevId = null;
      for (let i = 0; i < edgeParts.length; i++) {
        let part = edgeParts[i].trim();
        let labelMatch = part.match(/^\|(.*?)\|/);
        let edgeLabel = null;
        if (labelMatch) {
          edgeLabel = labelMatch[1].trim();
          part = part.substring(labelMatch[0].length).trim();
        }
        
        // Parse node
        let nodeId = part;
        let nodeLabel = part;
        const nMatch = part.match(/^([a-zA-Z0-9_]+)\[(.*?)\]$/) || part.match(/^([a-zA-Z0-9_]+)\(\((.*?)\)\)$/);
        if (nMatch) {
          nodeId = nMatch[1];
          nodeLabel = nMatch[2].replace(/<br>/g, '\n').replace(/<br\/>/g, '\n');
        }
        
        if (nodeId) addNode(nodeId, nodeLabel);
        
        if (prevId && nodeId) {
          edges.push({ from: prevId, to: nodeId, label: edgeLabel });
        }
        prevId = nodeId;
      }
    } else {
      // Just a node declaration
      let part = line;
      let nodeId = part;
      let nodeLabel = part;
      const nMatch = part.match(/^([a-zA-Z0-9_]+)\[(.*?)\]$/) || part.match(/^([a-zA-Z0-9_]+)\(\((.*?)\)\)$/);
      if (nMatch) {
        nodeId = nMatch[1];
        nodeLabel = nMatch[2].replace(/<br>/g, '\n').replace(/<br\/>/g, '\n');
      }
      if (nodeId) addNode(nodeId, nodeLabel);
    }
  }
  
  return { type: 'flowchart', direction, nodes, edges };
}

// Read the file and replace blocks
let text = fs.readFileSync('question_banks/pathfinder_bank.json', 'utf8');

const regex = /```mermaid\r?\n([\s\S]*?)```/g;
let modified = text.replace(regex, (m, code) => {
  try {
    const data = parseMermaid(code);
    return `<div class="custom-diagram" data-diagram='${JSON.stringify(data).replace(/'/g, "&#39;")}'></div>`;
  } catch(e) {
    console.error("Failed to parse", code, e);
    return m; // keep original if fail
  }
});

fs.writeFileSync('question_banks/pathfinder_bank.json', modified);
console.log("Converted pathfinder_bank.json");
