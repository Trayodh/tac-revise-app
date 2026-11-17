function renderCustomDiagram(data) {
  if (!data) return '<div class="custom-diagram-error">Empty diagram data</div>';
  
  try {
    if (data.type === 'mindmap') {
      return renderMindmap(data);
    } else if (data.type === 'flowchart') {
      return renderFlowchart(data);
    } else {
      return `<div class="custom-diagram-error">Unsupported diagram type: ${data.type}</div>`;
    }
  } catch (e) {
    return `<div class="custom-diagram-error">Error rendering diagram: ${e.message}</div>`;
  }
}

function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br/>");
}

function renderMindmap(data) {
  let html = `<div class="custom-diagram-container"><div class="mindmap-tree">`;
  
  html += `<div class="mindmap-root">${escapeHtml(data.root)}</div>`;
  
  if (data.children && data.children.length > 0) {
    html += renderMindmapChildren(data.children);
  }
  
  html += `</div></div>`;
  return html;
}

function renderMindmapChildren(children) {
  let html = `<div class="mindmap-children">`;
  
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    html += `<div class="mindmap-node-wrapper">`;
    const isLeaf = !child.children || child.children.length === 0;
    const leafClass = isLeaf ? ' leaf' : '';
    html += `<div class="mindmap-node${leafClass}">${escapeHtml(child.label)}</div>`;
    
    if (!isLeaf) {
      html += renderMindmapChildren(child.children);
    }
    
    html += `</div>`;
  }
  
  html += `</div>`;
  return html;
}

function renderFlowchart(data) {
  const dirClass = data.direction === 'LR' ? 'dir-LR' : 'dir-TD';
  let html = `<div class="custom-diagram-container"><div class="flowchart-container ${dirClass}">`;
  
  // For a generic simple linear fallback, just render the nodes in order if edges follow a linear path.
  // We'll construct a simple linear list of nodes based on edges for now.
  // In a robust solution, you'd calculate a DAG. Since most defense exams flowcharts are simple linear or tree,
  // we'll render nodes with arrows between them.
  
  const nodesMap = {};
  if (data.nodes) {
    data.nodes.forEach(n => nodesMap[n.id] = n);
  }

  if (data.edges && data.edges.length > 0) {
    // Collect roots (nodes with no incoming edges)
    const incoming = {};
    data.edges.forEach(e => {
      incoming[e.to] = (incoming[e.to] || 0) + 1;
    });
    
    const roots = Object.keys(nodesMap).filter(id => !incoming[id]);
    
    // For simplicity of this minimal renderer, let's just do a sequential layout based on edges order
    const rendered = new Set();
    
    function renderSubtree(nodeId) {
      if (rendered.has(nodeId)) return '';
      rendered.add(nodeId);
      
      const node = nodesMap[nodeId];
      if (!node) return '';
      
      let out = '';
      const shapeClass = node.shape === 'circle' ? ' flowchart-node-circle' : '';
      out += `<div class="flowchart-node${shapeClass}">${escapeHtml(node.label)}</div>`;
      
      const outgoingEdges = data.edges.filter(e => e.from === nodeId);
      if (outgoingEdges.length > 0) {
        // Just take the first edge for linear rendering
        // Complex graphs with multiple branches would need a real graph layout engine
        outgoingEdges.forEach(edge => {
           if (!rendered.has(edge.to)) {
             out += `<div class="flowchart-edge">`;
             if (edge.label) {
               out += `<span>${escapeHtml(edge.label)}</span>`;
             }
             out += `<div class="flowchart-edge-arrow"></div>`;
             out += `</div>`;
             out += renderSubtree(edge.to);
           }
        });
      }
      return out;
    }
    
    roots.forEach(rootId => {
      html += renderSubtree(rootId);
    });
    
    // Catch disconnected nodes
    Object.keys(nodesMap).forEach(nodeId => {
      if (!rendered.has(nodeId)) {
        html += renderSubtree(nodeId);
      }
    });

  } else if (data.nodes) {
    // Just render nodes
    data.nodes.forEach(n => {
      const shapeClass = n.shape === 'circle' ? ' flowchart-node-circle' : '';
      html += `<div class="flowchart-node${shapeClass}">${escapeHtml(n.label)}</div>`;
    });
  }
  
  html += `</div></div>`;
  return html;
}

// In case this is loaded in a module system or globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderCustomDiagram, renderMindmap, renderFlowchart };
} else {
  window.renderCustomDiagram = renderCustomDiagram;
}

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


if (typeof window !== 'undefined') window.parseMermaid = parseMermaid;
