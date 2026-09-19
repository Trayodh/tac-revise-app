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
        'Current_Affairs': 'current-affairs'
    };

    // ─── Keyword → chapter-title fragments for smart matching ────────────────
    const CHAPTER_KEYWORD_MAP = {
        // History
        'ancient-india-core-and-mcqs':          ['ancient'],
        'medieval-india-sultanate-and-mcqs':    ['medieval', 'sultanate', 'mughal'],
        'modern-india-national-movement-and-mcqs': ['modern', 'national movement', 'freedom'],
        'world-history-and-revision-mcqs':      ['world history'],
        
        // Geography
        'world-geography-cosmology':            ['physical', 'world geography', 'cosmology', 'universe'],
        'indian-geography-resources':           ['indian geography', 'india geography', 'resources'],
        'environmental-geography':              ['physical'],
        
        // Polity
        'constitutional-framework-rights-and-mcqs': ['constitutional'],
        'union-executive-judiciary-and-mcqs':   ['union government'],
        'state-local-governance-and-master-mcqs': ['advanced polity'],
        
        // Economy
        'macroeconomics-five-year-plans-and-mcqs': ['introduction to economics'],
        'banking-inflation-public-finance-and-mcqs': ['monetary'],
        'economic-sectors-and-master-revision-mcqs': ['budgets'],
        
        // Mathematics
        'number-system':                        ['arithmetic'],
        'sequence-and-series':                  ['arithmetic'],
        'hcf-and-lcm-of-numbers':               ['arithmetic'],
        'decimal-fractions':                    ['arithmetic'],
        'square-roots-and-cube-roots':          ['arithmetic'],
        'time-and-distance':                    ['arithmetic'],
        'time-and-work':                        ['arithmetic'],
        'percentage':                           ['arithmetic'],
        'simple-interest':                      ['arithmetic'],
        'compound-interest':                    ['arithmetic'],
        'profit-and-loss':                      ['arithmetic'],
        'ratio-and-proportion':                 ['arithmetic'],
        'logarithm':                            ['algebra & complex', 'algebra & matrices'],
        'hcf-and-lcm-of-polynomials':           ['algebra & complex', 'algebra & matrices'],
        'rational-expressions':                 ['algebra & complex', 'algebra & matrices'],
        'linear-equations':                     ['algebra & complex', 'algebra & matrices'],
        'quadratic-equations-and-inequalities': ['algebra & complex', 'algebra & matrices'],
        'set-theory':                           ['algebra & complex', 'algebra & matrices'],
        'measurements-of-angles-and-trigonometric-ratios': ['trigonometry'],
        'height-and-distance':                  ['trigonometry'],
        'lines-and-angles':                     ['geometry'],
        'triangles':                            ['geometry'],
        'quadrilateral-and-polygon':            ['geometry'],
        'circle':                               ['geometry'],
        'area-and-perimeter-of-plane-figures':  ['mensuration'],
        'surface-area-and-volume-of-solids':    ['mensuration'],
        
        // English
        'spotting-the-errors':                  ['grammar'],
        'sentence-improvement':                 ['grammar'],
        'synonyms':                             ['vocabulary'],
        'antonyms':                             ['vocabulary'],
        'idioms-and-phrases':                   ['vocabulary'],
        'sentence-completion':                  ['vocabulary'],
        'ordering-of-words-and-sentences':      ['vocabulary'],
        'comprehension':                        ['vocabulary'],
        
        // Physics
        'rotational-motion-and-gravitation':    ['mechanics', 'gravitation'],
        'properties-of-matter':                 ['mechanics'],
        'measurement-motion-work-energy-and-power': ['mechanics'],
        'electric-current':                     ['electricity'],
        'heat-and-thermodynamics':              ['heat'],
        'oscillations-and-waves':               ['waves'],
        'optics':                               ['optics'],
        'modern-physics':                       ['modern physics'],
        'master-question-core':                 ['modern physics', 'cell biology'], // Will fuzzy match later if needed, but wait!
        // We have duplicate IDs for "master-question-core" across multiple subjects. 
        // We can just rely on fuzzy matching for those, or map it to the first chapter in fallback.
        
        // Chemistry
        'atomic-structure':                     ['chemical bonding'],
        'radioactivity':                        ['chemical bonding'],
        'electrochemistry':                     ['chemical bonding'],
        'inorganic-chemistry':                  ['metals'],
        'gas-laws-and-solutions':               ['acids'],
        'matter':                               ['acids'],
        'acids-bases-and-salts':                ['acids'],
        'organic-chemistry':                    ['carbon compounds'],
        'man-made-materials':                   ['everyday'],
        'environment-and-its-pollution':        ['everyday'],
        
        // Biology
        'cell-the-unit-of-life':                ['cell biology'],
        'genetics-and-molecular-biology-and-evolution-of-life': ['cell biology'],
        'animal-physiology':                    ['human physiology'],
        'human-health-and-diseases':            ['health'],
        'applied-biology':                      ['ecology'],
        'classification-of-plants-and-animals': ['plant & animal'],
        'plant-morphology-and-physiology':      ['plant physiology'],
        
        // Current Affairs
        'general-knowledge-static-review':      ['global events']
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
        let cleaned = htmlNotes
            // Remove "GENERAL STUDIES N. ..." style question banks
            .replace(/GENERAL\s+STUDIES\s+\d+\.[\s\S]*?(?=<\/|$)/gi, '')
            // Remove numbered MCQ question blocks with (a)(b)(c)(d) options
            .replace(/\d+\.\s+(?:(?!\d+\.\s).)+?(?:\([a-d]\)[^<(]{0,250}){3,}/gs, '')
            // Remove lone option lines: "(a) something (b) something (c) ... (d) ..."
            .replace(/\([a-d]\)\s*[^<(]{5,200}(?:\([a-d]\)\s*[^<(]{5,200}){2,}/g, '')
            // Remove "Consider the following statements" question stems
            .replace(/Consider the following statements?[\s\S]{0,800}?(?:Select|Choose|Which of the above)/gi, '')
            // Remove "Which of the following" style questions with options
            .replace(/Which of the following[\s\S]{0,400}?(?:\([a-d]\)[^<(]{0,200}){2,}/gi, '')
            // Remove "Match the following" table MCQs
            .replace(/Match the following[\s\S]{0,600}?(?:\([a-d]\)[^<(]{0,200}){2,}/gi, '')
            // Remove boilerplate lines
            .replace(/Select the correct answer using (the )?codes? given below\.?\s*/gi, '')
            .replace(/Codes?\s*:?\s*(?:\([a-d]\)[^<\n]{0,100}\n?){2,}/gi, '')
            .replace(/(?:Answer|Ans)[\s:.]+[A-D]\b[^\n]*/gi, '')
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

        // ── Skip History: it has its own clean notes in notes_extra_history.js ──
        if (subjectKey === 'history') return;

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

    // ─── Inject Diagrams into Chapters ────────────────────────────────────────
    if (typeof DIAGRAMS_DB !== 'undefined') {
        let diagramCount = 0;
        Object.keys(DIAGRAMS_DB).forEach(key => {
            const parts = key.split('__');
            if (parts.length < 2) return;
            const subjectKey = parts[0];
            const chapterId = parts[1];

            const subjectObj = NOTES_DATABASE[subjectKey];
            if (!subjectObj || !subjectObj.chapters) return;

            const chapter = subjectObj.chapters.find(ch => ch.id === chapterId || ch.title.toLowerCase().includes(chapterId.replace(/-/g, ' ')));
            if (!chapter || !chapter.topics || chapter.topics.length === 0) return;

            const diagramHtml = DIAGRAMS_DB[key];
            if (!chapter.topics[0].notes.includes('<!-- DIAGRAMS_DB_INJECTED -->')) {
                chapter.topics[0].notes = '<!-- DIAGRAMS_DB_INJECTED -->\n' + diagramHtml + '\n' + chapter.topics[0].notes;
                diagramCount++;
            }
        });
        console.log(`[inject_ai_notes] Injected ${diagramCount} diagrams from DIAGRAMS_DB.`);
    }

    console.log(`[inject_ai_notes] Done. Injected ${injectedCount} topics into their proper chapters.`);
})();
