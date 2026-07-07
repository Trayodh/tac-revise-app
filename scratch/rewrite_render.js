const fs = require('fs');

let appJs = fs.readFileSync('./app.js', 'utf8');

const oldRenderTopicView = `function renderTopicView(subjectId, chapterId, topicId) {
    selectedSubjectId = subjectId;
    selectedChapterId = chapterId;
    selectedTopicId = topicId;
    
    const viewerPane = document.getElementById("deck-viewer-pane");
    const subject = NOTES_DATABASE[subjectId];
    const chapter = subject.chapters.find(c => c.id === chapterId);
    const topic = chapter.topics.find(t => t.id === topicId);
    
    if (!topic) return;
    
    const isCompleted = STATE.syllabusProgress[topic.id] === 'completed';
    const isFormulaSaved = STATE.readFormulasList.includes(topic.id);
    
    // Get prev and next topics
    const topicsList = getFilteredTopicsList();
    const currentIdx = topicsList.findIndex(t => t.topicId === topicId);
    const prevTopic = currentIdx > 0 ? topicsList[currentIdx - 1] : null;
    const nextTopic = currentIdx < topicsList.length - 1 ? topicsList[currentIdx + 1] : null;
    
    // Render Breadcrumbs
    const weightageText = getTopicWeightage(topic.id, subjectId);
    const breadcrumbs = \`
      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        <span style="color:var(--text-muted); font-size:0.8rem; font-family:var(--font-mono);">\${subject.title} &gt; \${chapter.title}</span>
        <span style="font-size: 0.7rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent); border: 1px solid rgba(34, 197, 94, 0.3); padding: 1px 6px; border-radius: 4px; background: rgba(34, 197, 94, 0.08); text-transform: uppercase;">
          Weightage: \${weightageText}
        </span>
      </div>
    \`;
    
    // Tab buttons
    const tabsHtml = \`
      <div class="topic-tab-bar">
        <button class="tab-btn \${activeNotesTab === 'notes' ? 'active' : ''}" onclick="setNotesTab('notes')">
          Concept Notes
        </button>
        <button class="tab-btn \${activeNotesTab === 'formulas' ? 'active' : ''}" onclick="setNotesTab('formulas')">
          High-Yield Formulas
        </button>
        \${topic.hasMindmap ? \`
          <button class="tab-btn \${activeNotesTab === 'mindmap' ? 'active' : ''}" onclick="setNotesTab('mindmap')">
            Concept Mindmap
          </button>
        \` : ''}
      </div>
    \`;`;

// Wait, the original `app.js` has `${topic.mindmap ? \``, but we just replaced it. No, `generate_static_files.js` hasn't modified `app.js`.

const newRenderTopicView = `async function renderTopicView(subjectId, chapterId, topicId) {
    selectedSubjectId = subjectId;
    selectedChapterId = chapterId;
    selectedTopicId = topicId;
    
    const viewerPane = document.getElementById("deck-viewer-pane");
    const subject = NOTES_DATABASE[subjectId];
    const chapter = subject.chapters.find(c => c.id === chapterId);
    const topic = chapter.topics.find(t => t.id === topicId);
    
    if (!topic) return;

    // Show loading state
    viewerPane.innerHTML = \`<div style="padding: 40px; text-align: center;"><div class="loader" style="margin:0 auto; width:30px; height:30px; border:3px solid var(--border); border-top-color:var(--accent); border-radius:50%; animation:spin 1s linear infinite;"></div><p style="margin-top:16px; color:var(--text-muted); font-family:var(--font-mono);">Fetching payload from Databank...</p></div>\`;
    
    const isCompleted = STATE.syllabusProgress[topic.id] === 'completed';
    const isFormulaSaved = STATE.readFormulasList.includes(topic.id);
    
    // FETCH DATA
    window.TOPIC_DATA_CACHE = window.TOPIC_DATA_CACHE || {};
    const cacheKey = \`\${subjectId}/\${chapterId}/\${topicId}\`;
    if (!window.TOPIC_DATA_CACHE[cacheKey]) window.TOPIC_DATA_CACHE[cacheKey] = {};
    const cache = window.TOPIC_DATA_CACHE[cacheKey];

    if (activeNotesTab === 'notes') {
        if (!cache.notes && topic.hasNotes) {
            try {
                const res = await fetch(\`/notes-data/\${cacheKey}/notes.html\`);
                cache.notes = await res.text();
            } catch(e) { cache.notes = "Failed to load short notes."; }
        }
        if (!cache.detailedNotes && topic.hasDetailedNotes) {
            try {
                const res = await fetch(\`/notes-data/\${cacheKey}/detailed_notes.html\`);
                cache.detailedNotes = await res.text();
            } catch(e) {}
        }
    } else if (activeNotesTab === 'formulas') {
        if (!cache.formulas && topic.hasFormulas) {
            try {
                const res = await fetch(\`/notes-data/\${cacheKey}/formulas.html\`);
                cache.formulas = await res.text();
            } catch(e) { cache.formulas = "Failed to load formulas."; }
        }
    } else if (activeNotesTab === 'mindmap') {
        if (!cache.mindmap && topic.hasMindmap) {
            try {
                const res = await fetch(\`/notes-data/\${cacheKey}/mindmap.json\`);
                cache.mindmap = await res.json();
            } catch(e) {}
        }
    }

    // Get prev and next topics
    const topicsList = getFilteredTopicsList();
    const currentIdx = topicsList.findIndex(t => t.topicId === topicId);
    const prevTopic = currentIdx > 0 ? topicsList[currentIdx - 1] : null;
    const nextTopic = currentIdx < topicsList.length - 1 ? topicsList[currentIdx + 1] : null;
    
    // Render Breadcrumbs
    const weightageText = getTopicWeightage(topic.id, subjectId);
    const breadcrumbs = \`
      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        <span style="color:var(--text-muted); font-size:0.8rem; font-family:var(--font-mono);">\${subject.title} &gt; \${chapter.title}</span>
        <span style="font-size: 0.7rem; font-family: var(--font-mono); font-weight: 700; color: var(--accent); border: 1px solid rgba(34, 197, 94, 0.3); padding: 1px 6px; border-radius: 4px; background: rgba(34, 197, 94, 0.08); text-transform: uppercase;">
          Weightage: \${weightageText}
        </span>
      </div>
    \`;
    
    // Tab buttons
    const tabsHtml = \`
      <div class="topic-tab-bar">
        \${topic.hasNotes ? \`<button class="tab-btn \${activeNotesTab === 'notes' ? 'active' : ''}" onclick="setNotesTab('notes')">
          Concept Notes
        </button>\` : ''}
        \${topic.hasFormulas ? \`<button class="tab-btn \${activeNotesTab === 'formulas' ? 'active' : ''}" onclick="setNotesTab('formulas')">
          High-Yield Formulas
        </button>\` : ''}
        \${topic.hasMindmap ? \`
          <button class="tab-btn \${activeNotesTab === 'mindmap' ? 'active' : ''}" onclick="setNotesTab('mindmap')">
            Concept Mindmap
          </button>
        \` : ''}
      </div>
    \`;
    
    // Tab content selection
    let tabContentHtml = '';
    if (activeNotesTab === 'notes') {
      let mainNotesContent = cache.notes || '<div style="color:var(--text-muted)">No notes available.</div>';
      
      tabContentHtml = \`
        <div class="tab-pane-content fade-in" style="height: 100%;">
          <div class="notes-text scroll-y" style="height: 100%; padding-bottom: 30px; box-sizing: border-box; overflow-y: auto;">
            \${parseWikiLinks(mainNotesContent)}
            \${cache.detailedNotes ? \`
              <div class="expanded-notes" style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);">
                <div style="color: var(--accent); font-size: 0.8rem; font-family: var(--font-mono); margin-bottom: 12px; letter-spacing: 1px; text-transform: uppercase;">
                  [ Advanced Revision Data ]
                </div>
                \${parseWikiLinks(cache.detailedNotes)}
              </div>
            \` : ''}
          </div>
        </div>
      \`;
    } else if (activeNotesTab === 'formulas') {
      tabContentHtml = \`
        <div class="tab-pane-content fade-in" style="display: flex; flex-direction: column; height: 100%;">
          <div class="concept-formula-box scroll-y" style="flex: 1; white-space: pre-line; margin: 0 0 16px 0; overflow-y: auto;">
            \${cache.formulas || ''}
          </div>
          <div style="display:flex; justify-content:flex-end;">
            <button class="action-btn \${isFormulaSaved ? 'active-green' : ''}" onclick="toggleFormulaReadStatus('\${topic.id}', this)" style="padding: 10px 20px;">
               \${isFormulaSaved ? 'Formula Memorized' : 'Mark Formula as Memorized'}
            </button>
          </div>
        </div>
      \`;
    } else if (activeNotesTab === 'mindmap' && cache.mindmap) {
      let branchesHtml = '';
      cache.mindmap.branches.forEach(branch => {
        let subnodesHtml = '';
        branch.subnodes.forEach(sub => {
          const cleanSub = sub.replace(/'/g, "\\\\'");
          subnodesHtml += \`<div class="mindmap-subnode" onclick="triggerDoubtExplain('\${cleanSub}')" style="cursor: pointer; padding: 8px 16px; margin: 4px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 6px; transition: all 0.2s ease; display: inline-block; color: var(--text-primary); font-size: 0.82rem; font-weight: 500;" onmouseover="this.style.background='rgba(34, 197, 94, 0.1)'; this.style.borderColor='var(--accent)'; this.style.transform='scale(1.02)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'; this.style.borderColor='var(--border)'; this.style.transform='scale(1)'">\${sub}</div>\`;
        });
        const cleanBranch = branch.title.replace(/'/g, "\\\\'");
        branchesHtml += \`
          <div class="mindmap-branch" style="display: flex; flex-direction: column; align-items: center; border: 1px dashed rgba(255,255,255,0.08); border-radius: 12px; padding: 12px; background: rgba(0,0,0,0.15); min-width: 180px;">
            <div class="mindmap-node" onclick="triggerDoubtExplain('\${cleanBranch}')" style="cursor: pointer; padding: 10px 20px; background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%); border: 1px solid rgba(37, 99, 235, 0.4); border-radius: 8px; font-weight: 700; font-family: var(--font-logo); font-size: 0.9rem; text-align: center; color: #fff; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.2s ease;" onmouseover="this.style.boxShadow='0 0 15px rgba(37,99,235,0.3)'; this.style.transform='scale(1.03)';" onmouseout="this.style.boxShadow='none'; this.style.transform='scale(1)';">\${branch.title}</div>
            <div class="mindmap-subnodes" style="display: flex; flex-direction: column; gap: 6px; width: 100%; margin-top: 10px;">
              \${subnodesHtml}
            </div>
          </div>
        \`;
      });
      
      const cleanRoot = cache.mindmap.root.replace(/'/g, "\\\\'");
      tabContentHtml = \`
        <div class="tab-pane-content fade-in" style="height: 100%; display: flex; flex-direction: column;">
          <div class="mindmap-tree scroll-x" style="padding: 24px; height: 100%; overflow-y: auto; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; gap: 24px;">
            <div class="mindmap-root" onclick="triggerDoubtExplain('\${cleanRoot}')" style="cursor: pointer; padding: 14px 28px; background: linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%); border-radius: 12px; font-weight: 800; font-family: var(--font-logo); font-size: 1.15rem; color: var(--bg-primary); text-shadow: 0 1px 2px rgba(0,0,0,0.2); box-shadow: 0 0 20px rgba(34, 197, 94, 0.35); text-align: center; transition: all 0.3s ease; letter-spacing: 0.5px;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 0 28px rgba(34, 197, 94, 0.55)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 0 20px rgba(34, 197, 94, 0.35)';">\${cache.mindmap.root}</div>
            <div style="width: 2px; height: 20px; background: linear-gradient(to bottom, var(--accent), rgba(255,255,255,0.1));"></div>
            <div class="mindmap-branches" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; width: 100%;">
              \${branchesHtml}
            </div>
          </div>
          <div style="font-size: 0.72rem; color: var(--text-muted); text-align: center; font-family: var(--font-mono); margin-top: 8px; letter-spacing: 0.5px;">* CLICK ANY NODE IN THE GRAPH TO ASK GURU DRONACHARYA DIRECTLY *</div>
        </div>
      \`;
    } else {
      tabContentHtml = \`<p style="color:var(--text-secondary)">Content not available.</p>\`;
    }
`;

const startIndex = appJs.indexOf("function renderTopicView(");
const endIndex = appJs.indexOf("  // Complete action toggle button", startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    appJs = appJs.substring(0, startIndex) + newRenderTopicView + appJs.substring(endIndex);
    fs.writeFileSync('./app.js', appJs, 'utf8');
    console.log("Successfully replaced renderTopicView");
} else {
    console.log("Could not find boundaries.");
}
