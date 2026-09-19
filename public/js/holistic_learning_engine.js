class HolisticLearningEngine {
    static isEnabled = true;

    static async analyzeTopic(topicId, topicTitle, topicContent, containerElement) {
        if (!this.isEnabled) return;

        // Render skeleton UI
        containerElement.innerHTML = `
            <div class="holistic-dashboard-container fade-in">
                <div class="dashboard-header">
                    <h3 style="font-family: var(--font-logo); font-size: 1.2rem; color: #fff; margin:0;"><i class="fa-solid fa-brain"></i> AI Holistic Learning Insights</h3>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase;">Topic DNA</h4>
                    <div id="holistic-dna-content" class="dna-tags-container skeleton-loader">Analyzing metadata...</div>
                </div>

                <div class="dashboard-grid">
                    <div class="dashboard-card teaching-card">
                        <h4>AI Teaching Mode (Story & Analogy)</h4>
                        <div id="holistic-teaching-content" class="skeleton-loader">Generating story...</div>
                    </div>
                    
                    <div class="dashboard-card defence-card">
                        <h4>Defence Perspective</h4>
                        <div id="holistic-defence-content" class="skeleton-loader">Analyzing military applications...</div>
                    </div>
                </div>

                <div class="dashboard-grid" style="margin-top: 20px;">
                    <div class="dashboard-card">
                        <h4>Knowledge Graph</h4>
                        <div id="holistic-graph-content">
                             <div class="skeleton-loader">Building conceptual relationships...</div>
                        </div>
                    </div>
                    
                    <div class="dashboard-card bridge-card">
                        <h4>Memory Bridge & Recommendations</h4>
                        <div id="holistic-memory-content" class="skeleton-loader">Constructing memory bridges...</div>
                        <h4 style="margin-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">Because You Are Studying This...</h4>
                        <div id="holistic-recommendations-content" class="skeleton-loader">Finding recommendations...</div>
                    </div>
                </div>
            </div>
        `;

        this.trackTopicInteraction(topicId, topicTitle);

        const prompt = `You are an expert AI Education Architect, Knowledge Graph Engineer, and Defence Examination (NDA/CDS/AFCAT) Mentor.
Transform the following topic into a holistic learning experience. 

Topic: ${topicTitle}
Content Snippet: ${topicContent.substring(0, 500)}...

Output your response EXACTLY in the following sections with the exact headers. 

[TOPIC_DNA]
Generate a comma-separated list of badges in this format:
Difficulty: (Easy/Medium/Hard) | Importance: (Low/High/Critical) | Exam Frequency: (Rare/Common/Frequent) | Prerequisites: (1-2 topics) | Successors: (1-2 topics)

[REVISION_GRAPH]
Generate a raw Mermaid.js graph starting with 'graph TD'. 
Make the current topic the central node. Connect it to 2 prerequisites (arrows pointing to center), 2 successors (arrows pointing away), and 2 parallel concepts from different subjects. Use short node names. Do NOT wrap in markdown \`\`\` blocks, just output the raw Mermaid syntax.
CRITICAL RULE FOR MERMAID: You MUST use safe alphanumeric node IDs and strictly enclose all node text in double quotes to prevent syntax errors (e.g., nodeA["Prerequisite"] --> nodeB["Topic"]). Do NOT use double brackets like [[keyword]] or unescaped special characters inside the graph.

[TEACHING_MODE]
Write a 1-2 paragraph engaging story, historical narrative, or military analogy that makes the core concept unforgettable.
CRITICAL: Wrap any important keywords, events, or terms in double brackets (e.g. [[keyword]]) so they become interactive Smart Concepts.

[DEFENCE_PERSPECTIVE]
Explain in 1 concise paragraph how this concept directly applies to the Indian Armed forces, military logistics, geopolitics, strategy, or national security.

[MEMORY_BRIDGE]
Create a simple step-by-step conceptual flow mapping this topic to a completely different subject.
Format: Concept A -> Concept B -> Concept C

[RECOMMENDATIONS]
Provide 3 bullet points starting with "- " recommending what to study next and a 1-sentence reason why.`;

        try {
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'gemini-1.5-flash',
                    stream: false,
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            if (!response.ok) throw new Error("Failed to fetch holistic insights.");

            const resData = await response.json();
            let fullText = "";
            if (resData.candidates && resData.candidates[0] && resData.candidates[0].content && resData.candidates[0].content.parts[0]) {
                fullText = resData.candidates[0].content.parts[0].text;
            }

            // Clear skeletons
            document.getElementById('holistic-dna-content').innerHTML = "";
            document.getElementById('holistic-dna-content').classList.remove('skeleton-loader');
            document.getElementById('holistic-teaching-content').innerHTML = "";
            document.getElementById('holistic-teaching-content').classList.remove('skeleton-loader');
            document.getElementById('holistic-defence-content').innerHTML = "";
            document.getElementById('holistic-defence-content').classList.remove('skeleton-loader');
            document.getElementById('holistic-memory-content').innerHTML = "";
            document.getElementById('holistic-memory-content').classList.remove('skeleton-loader');
            document.getElementById('holistic-recommendations-content').innerHTML = "";
            document.getElementById('holistic-recommendations-content').classList.remove('skeleton-loader');

            this.updateUIStream(fullText);
            this.finalizeUI(fullText);

        } catch (error) {
            console.error(error);
            containerElement.innerHTML += `<div style="color:var(--error); margin-top:10px;">Failed to load AI Holistic Insights.</div>`;
        }
    }

    static updateUIStream(fullText) {
        const sections = this.parseSections(fullText);
        
        if (sections['TOPIC_DNA']) {
            const dnaHtml = sections['TOPIC_DNA'].split('|').map(item => `<span class="dna-badge">${item.trim()}</span>`).join('');
            document.getElementById('holistic-dna-content').innerHTML = dnaHtml;
        }
        if (sections['TEACHING_MODE']) {
            document.getElementById('holistic-teaching-content').innerHTML = this.formatSmartConcepts(marked.parse(sections['TEACHING_MODE']));
        }
        if (sections['DEFENCE_PERSPECTIVE']) {
            document.getElementById('holistic-defence-content').innerHTML = marked.parse(sections['DEFENCE_PERSPECTIVE']);
        }
        if (sections['MEMORY_BRIDGE']) {
            document.getElementById('holistic-memory-content').innerHTML = marked.parse(sections['MEMORY_BRIDGE']);
        }
        if (sections['RECOMMENDATIONS']) {
            document.getElementById('holistic-recommendations-content').innerHTML = marked.parse(sections['RECOMMENDATIONS']);
        }
    }

    static finalizeUI(fullText) {
        const sections = this.parseSections(fullText);
        if (sections['REVISION_GRAPH']) {
            const graphCode = sections['REVISION_GRAPH'].replace(/```mermaid/g, '').replace(/```/g, '').trim();
            const graphContainer = document.getElementById('holistic-graph-content');
            graphContainer.innerHTML = `<div class="mermaid">${graphCode}</div>`;
            graphContainer.classList.remove('skeleton-loader');
            if (window.mermaid) {
                try {
                    mermaid.init(undefined, graphContainer.querySelectorAll('.mermaid'));
                } catch(e) {
                    graphContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 0.85rem;">Graph generation failed or invalid syntax.</div>`;
                }
            }
        }
        
        // Attach event listeners to newly generated smart concepts
        if (window.SmartConceptExplorer) {
            window.SmartConceptExplorer.attachListeners();
        }
    }

    static parseSections(text) {
        const sections = {};
        const regex = /\[([A-Z_]+)\]([\s\S]*?)(?=\[[A-Z_]+\]|$)/g;
        let match;
        while ((match = regex.exec(text)) !== null) {
            sections[match[1]] = match[2].trim();
        }
        return sections;
    }

    static formatSmartConcepts(html) {
        // Replace [[keyword]] with clickable span
        return html.replace(/\[\[(.*?)\]\]/g, `<span class="smart-concept" data-concept="$1" onclick="window.SmartConceptExplorer.explore(this.getAttribute('data-concept'))">$1</span>`);
    }

    static async trackTopicInteraction(topicId, topicTitle) {
        // Sync personalization data via Supabase
        if (!window.supabaseClient) return;
        
        const session = await window.supabaseClient.auth.getSession();
        if (!session || !session.data || !session.data.session) return;
        
        const userId = session.data.session.user.id;

        try {
            // Upsert the topic interaction in a hypothetical 'student_progress' table
            // In a real schema, we'd have a table for this. We'll do a basic RPC or insert.
            const { data, error } = await window.supabaseClient
                .from('student_progress')
                .upsert({ 
                    user_id: userId, 
                    topic_id: topicId, 
                    topic_title: topicTitle,
                    last_reviewed: new Date().toISOString(),
                    review_count: 1 // Ideally incremented
                }, { onConflict: 'user_id, topic_id' });
                
            if (error) console.log("Personalization Sync (Missing Table - Expected if schema not fully created):", error.message);
        } catch (e) {
            console.error("Failed to sync personalization:", e);
        }
    }
}

window.HolisticLearningEngine = HolisticLearningEngine;
