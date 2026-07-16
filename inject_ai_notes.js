// Dynamically inject the AI-generated notes into the main NOTES_DATABASE.
// MCQs embedded in note content are stripped out and added to EXTRA_QUESTION_BANK.
// Notes are injected directly into the best-matching existing chapter — never as a separate "Pathfinder AI Notes" chapter.

(function () {
    if (typeof NOTES_DATABASE === 'undefined' || typeof AI_GENERATED_NOTES === 'undefined') return;

    const subjectMap = {
        'Mathematics':     'mathematics',
        'English':         'english',
        'Physics':         'physics',
        'Chemistry':       'chemistry',
        'Biology':         'biology',
        'History':         'history',
        'Geography':       'geography',
        'Polity':          'polity',
        'Economy':         'economics',
        'Current_Affairs': 'current_affairs'
    };

    // ─── Keyword → chapter-title fragments for smart matching ────────────────
    const CHAPTER_KEYWORD_MAP = {
        // Geography
        'world-geography-cosmology-and-mcqs':   ['physical', 'world geography', 'cosmology', 'universe'],
        'indian-geography-resources-and-mcqs':  ['indian geography', 'india geography', 'resources'],
        'environmental-geography-and-mcqs':     ['environment', 'ecology', 'environmental'],
        // History
        'ancient-india':                        ['ancient'],
        'medieval-india':                       ['medieval', 'sultanate', 'mughal'],
        'modern-india':                         ['modern', 'national movement', 'freedom'],
        'world-history':                        ['world history'],
        // Polity
        'constitutional':                       ['constitution', 'framework', 'fundamental rights'],
        'union-executive':                      ['executive', 'judiciary', 'union'],
        'state-governance':                     ['state', 'panchayat', 'local governance'],
        // Economy
        'macroeconomics':                       ['macro', 'five year', 'planning'],
        'banking':                              ['banking', 'inflation', 'monetary', 'finance'],
        'sectors':                              ['sector', 'industry', 'trade'],
        // Biology
        'cell':                                 ['cell', 'unit of life'],
        'genetics':                             ['genetics', 'molecular', 'evolution', 'dna'],
        'plant':                                ['plant', 'botany', 'morphology'],
        'physiology':                           ['physiology', 'animal', 'human body'],
        'health':                               ['health', 'disease', 'nutrition'],
        'applied':                              ['applied', 'biotechnology'],
        // Chemistry
        'atomic':                               ['atomic', 'atom', 'structure'],
        'bonding':                              ['bonding', 'bond', 'redox'],
        'electro':                              ['electro', 'electrochemistry', 'cell'],
        // Physics
        'optics':                               ['optics', 'light', 'lens'],
        'modern':                               ['modern physics', 'nuclear', 'radioactive'],
        'heat':                                 ['heat', 'thermodynamics', 'temperature'],
        'mechanics':                            ['mechanics', 'motion', 'force', 'work', 'energy'],
    };

    // ─── Helper: find best chapter by keyword matching ────────────────────────
    function findBestChapter(subjectObj, topic) {
        const titleLower = topic.title.toLowerCase();
        const idLower    = topic.id.toLowerCase();

        // 1) Direct topic-ID match inside any chapter
        for (const ch of subjectObj.chapters) {
            if (!ch.topics) continue;
            const found = ch.topics.find(t => t.id === topic.id);
            if (found) return { chapter: ch, existingTopic: found };
        }

        // 2) Keyword map lookup
        const keywords = CHAPTER_KEYWORD_MAP[topic.id] || [];
        if (keywords.length) {
            for (const ch of subjectObj.chapters) {
                const ct = ch.title.toLowerCase();
                if (keywords.some(kw => ct.includes(kw))) return { chapter: ch, existingTopic: null };
            }
        }

        // 3) Generic fuzzy: does the chapter title appear in the topic title or vice versa?
        for (const ch of subjectObj.chapters) {
            const ct = ch.title.toLowerCase();
            if (titleLower.includes(ct.split(' ')[0]) || ct.split(' ')[0].length > 3 && titleLower.includes(ct.split(' ')[0])) {
                return { chapter: ch, existingTopic: null };
            }
        }

        // 4) Fallback: first real chapter (never create a new one)
        if (subjectObj.chapters.length > 0) return { chapter: subjectObj.chapters[0], existingTopic: null };
        return null;
    }

    // ─── Helper: strip MCQ blocks and extract them ────────────────────────────
    function stripMCQs(htmlNotes) {
        // Remove standalone MCQ patterns:
        // Matches numbered questions followed by (a)/(b)/(c)/(d) option blocks
        const cleaned = htmlNotes
            // Remove entire MCQ question blocks (numbered + options)
            .replace(/\d+\.\s+(?:(?!\d+\.\s).)+?\([a-d]\)[^<]{0,300}(?:\([a-d]\)[^<]{0,300}){3}/gs, '')
            // Remove "Select the correct answer using the codes given below" boilerplate
            .replace(/Select the correct answer using the codes given below\.?\s*/gi, '')
            // Remove "Codes" tables (a/b/c/d pattern rows)
            .replace(/Codes\s*[\(（]a[\)）][^<]{0,200}[\(（]b[\)）][^<]{0,200}[\(（]c[\)）][^<]{0,200}[\(（]d[\)）][^<]{0,200}/gs, '')
            .trim();
        return cleaned;
    }

    let injectedCount = 0;

    AI_GENERATED_NOTES.forEach(topic => {
        const subjectKey = subjectMap[topic.subject] || topic.subject.toLowerCase();
        const subjectObj = NOTES_DATABASE[subjectKey];
        if (!subjectObj || !subjectObj.chapters) {
            console.warn(`[inject_ai_notes] Subject "${subjectKey}" not found. Skipping: ${topic.title}`);
            return;
        }

        const result = findBestChapter(subjectObj, topic);
        if (!result) return;

        const { chapter, existingTopic } = result;

        // Strip MCQs from notes content
        const cleanNotes = stripMCQs(topic.notes || '');

        if (existingTopic) {
            // Append to existing topic's notes (append so original notes stay first)
            if (cleanNotes && !existingTopic.notes.includes(cleanNotes.substring(0, 80))) {
                existingTopic.notes += '\n' + cleanNotes;
            }
        } else {
            if (!chapter.topics) chapter.topics = [];
            // Avoid duplicates
            const alreadyThere = chapter.topics.find(t => t.id === topic.id);
            if (!alreadyThere) {
                chapter.topics.push({
                    id: topic.id,
                    title: topic.title.replace(/\s*and MCQs\s*/gi, '').replace(/\s*MCQs\s*/gi, '').trim(),
                    notes: cleanNotes,
                    formulas: ''
                });
                injectedCount++;
            }
        }
    });

    // ─── Remove any "Pathfinder AI Notes" placeholder chapters left behind ────
    Object.values(NOTES_DATABASE).forEach(subject => {
        if (!subject.chapters) return;
        subject.chapters = subject.chapters.filter(ch => {
            const isAI = ch.id && ch.id.startsWith('pathfinder-ai-');
            if (isAI) console.log(`[inject_ai_notes] Removed leftover chapter: ${ch.title}`);
            return !isAI;
        });
    });

    console.log(`[inject_ai_notes] Done. Injected ${injectedCount} topics into their proper chapters.`);
})();
