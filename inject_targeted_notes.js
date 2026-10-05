/**
 * inject_targeted_notes.js
 * Restructures NOTES_DATABASE so chapters are topics (1-to-1 mapping),
 * and forcefully injects the massive AI-generated notes into them.
 */
(function() {
    if (typeof EXPANDED_NOTES_DATA === 'undefined') {
        console.warn('[inject_targeted] EXPANDED_NOTES_DATA not found.');
        return;
    }
    if (typeof NOTES_DATABASE === 'undefined') {
        console.warn('[inject_targeted] NOTES_DATABASE not found.');
        return;
    }

    const TOPIC_MAP = {
        // History - Ancient
        'indus-valley-civilization': ['history', 'indus'],
        'vedic-period': ['history', 'vedic'],
        'mahajanapadas': ['history', 'mahajanapada'],
        'buddhism': ['history', 'buddhism'],
        'jainism': ['history', 'jainism'],
        'mauryan-empire': ['history', 'maurya'],
        'gupta-empire': ['history', 'gupta'],
        'sangam-age': ['history', 'sangam'],
        'ancient-culture': ['history', 'ancient'],
        // History - Medieval
        'early-medieval-kingdoms': ['history', 'medieval'],
        'delhi-sultanate': ['history', 'delhi'],
        'vijayanagara-empire': ['history', 'vijayanagara'],
        'mughal-empire': ['history', 'mughal'],
        'marathas': ['history', 'maratha'],
        'bhakti-sufi': ['history', 'bhakti'],
        // History - Modern
        'european-arrival': ['history', 'european'],
        'governor-generals': ['history', 'governor'],
        'revolt-of-1857': ['history', 'revolt'],
        'socio-religious-reform': ['history', 'reform'],
        'indian-national-congress': ['history', 'congress'],
        'gandhian-era': ['history', 'gandhi'],
        'constitutional-development': ['history', 'constitution'],
        'independence-partition': ['history', 'independence'],

        // Geography - Physical
        'interior-of-earth': ['geography', 'earth'],
        'rocks-minerals': ['geography', 'rock'],
        'earthquakes-volcanoes': ['geography', 'earthquake'],
        'plate-tectonics': ['geography', 'plate'],
        'geomorphology': ['geography', 'geomorph'],
        'hydrosphere': ['geography', 'river'],
        'atmosphere': ['geography', 'atmospher'],
        'monsoon': ['geography', 'monsoon'],
        'climate-natural-vegetation': ['geography', 'vegetation'],
        // Geography - Indian
        'physiographic-divisions': ['geography', 'physiograph'],
        'indian-rivers': ['geography', 'river'],
        'indian-climate': ['geography', 'climate'],
        'soils-of-india': ['geography', 'soil'],
        'agriculture': ['geography', 'agricultur'],
        'minerals-energy-resources': ['geography', 'mineral'],
        'industries': ['geography', 'industr'],
        'transport': ['geography', 'transport'],
        'population-urbanisation': ['geography', 'population'],
        // Geography - World
        'continents-oceans': ['geography', 'continent'],
        'climate-zones-biomes': ['geography', 'climate'],
        'important-geographic-locations': ['geography', 'location'],

        // Physics
        'units-measurements': ['physics', 'unit'],
        'scalars-vectors': ['physics', 'vector'],
        'kinematics': ['physics', 'kinematic'],
        'newtons-laws-of-motion': ['physics', 'motion'],
        'work-energy-power': ['physics', 'energy'],
        'centre-of-mass-momentum': ['physics', 'momentum'],
        'rotational-motion': ['physics', 'rotation'],
        'gravitation': ['physics', 'gravitation'],
        'elasticity': ['physics', 'elastic'],
        'fluid-mechanics': ['physics', 'fluid'],
        'heat-temperature': ['physics', 'heat'],
        'thermodynamics': ['physics', 'thermo'],
        'waves': ['physics', 'wave'],
        'sound': ['physics', 'sound'],
        'reflection-refraction': ['physics', 'optic'],
        'optical-instruments': ['physics', 'optic'],
        'wave-optics': ['physics', 'optic'],
        'electrostatics': ['physics', 'electric'],
        'current-electricity': ['physics', 'electric'],
        'magnetism-electromagnetism': ['physics', 'magnet'],
        'dual-nature-of-matter': ['physics', 'atomic'],
        'atomic-nuclear-physics': ['physics', 'nuclear'],
        'semiconductors-basic-electronics': ['physics', 'electronic'],

        // Chemistry
        'matter': ['chemistry', 'matter'],
        'atomic-structure': ['chemistry', 'atomic'],
        'periodic-table': ['chemistry', 'periodic'],
        'chemical-bonding': ['chemistry', 'bond'],
        'states-of-matter': ['chemistry', 'matter'],
        'thermochemistry': ['chemistry', 'thermo'],
        'chemical-equilibrium': ['chemistry', 'equilibrium'],
        'electrochemistry': ['chemistry', 'electro'],
        'solutions': ['chemistry', 'solution'],
        'acids-bases-salts': ['chemistry', 'acid'],
        'metals-non-metals': ['chemistry', 'metal'],
        'important-compounds': ['chemistry', 'compound'],
        'oxidation-reduction': ['chemistry', 'oxidat'],
        'carbon-compounds': ['chemistry', 'carbon'],
        'organic-reactions': ['chemistry', 'organic'],
        'fuels': ['chemistry', 'fuel'],
        'environmental-chemistry': ['chemistry', 'environment'],
        'common-industrial-chemicals': ['chemistry', 'chemical'],
        'everyday-chemistry': ['chemistry', 'everyday'],

        // Biology
        'cell': ['biology', 'cell'],
        'cell-division': ['biology', 'cell'],
        'tissues-anatomy': ['biology', 'tissue'],
        'digestive-system': ['biology', 'digestive'],
        'respiratory-system': ['biology', 'respirat'],
        'circulatory-system': ['biology', 'circulat'],
        'nervous-system': ['biology', 'nervous'],
        'endocrine-system': ['biology', 'endocrin'],
        'excretory-system': ['biology', 'excret'],
        'reproductive-system': ['biology', 'reproduct'],
        'genetics': ['biology', 'genetic'],
        'molecular-biology': ['biology', 'molecular'],
        'evolution': ['biology', 'evolut'],
        'plant-morphology': ['biology', 'plant'],
        'photosynthesis': ['biology', 'photosyn'],
        'plant-respiration-transpiration': ['biology', 'plant'],
        'ecosystem': ['biology', 'ecosystem'],
        'biodiversity': ['biology', 'biodiversit'],
        'environment-pollution': ['biology', 'environment'],
        'diseases': ['biology', 'disease'],
        'nutrition': ['biology', 'nutrition'],
        'microorganisms': ['biology', 'microorganism'],
    };

    // STEP 1: Restructure NOTES_DATABASE (1 Topic = 1 Chapter)
    Object.keys(NOTES_DATABASE).forEach(subjectKey => {
        const subjectObj = NOTES_DATABASE[subjectKey];
        if (!subjectObj.chapters) return;

        let newChapters = [];
        subjectObj.chapters.forEach(ch => {
            if (ch.topics && ch.topics.length > 0) {
                ch.topics.forEach((t, i) => {
                    newChapters.push({
                        id: t.id || (ch.id + '-' + i),
                        title: t.title,
                        icon: ch.icon || "fa-solid fa-book-open",
                        topics: [ t ] // exactly 1 topic
                    });
                });
            } else {
                newChapters.push(ch);
            }
        });
        subjectObj.chapters = newChapters;
    });

    // STEP 2: Inject AI Notes and OVERWRITE old content
    let injected = 0;
    let newCreated = 0;

    Object.keys(EXPANDED_NOTES_DATA).forEach(topicId => {
        if (!topicId.startsWith('ai-gen-')) return;

        const html = EXPANDED_NOTES_DATA[topicId];
        if (!html || html.length < 200) return;

        const slug = topicId.replace(/^ai-gen-[a-z]+-/, '');

        let subjectKey = null, chapterKw = null;
        for (const [mapKey, [sk, ckw]] of Object.entries(TOPIC_MAP)) {
            if (slug.includes(mapKey) || mapKey.includes(slug.substring(0, 12))) {
                subjectKey = sk;
                chapterKw = ckw;
                break;
            }
        }

        if (!subjectKey) {
            const subjectMatch = topicId.match(/^ai-gen-([a-z]+)-/);
            if (subjectMatch) subjectKey = subjectMatch[1];
        }

        if (!subjectKey || !NOTES_DATABASE[subjectKey]) {
            return;
        }

        const subjectObj = NOTES_DATABASE[subjectKey];
        let foundChapter = null;

        if (chapterKw) {
            foundChapter = subjectObj.chapters.find(ch =>
                ch.title && ch.title.toLowerCase().includes(chapterKw)
            );
        }

        if (!foundChapter) {
            const slugWords = slug.split('-').filter(w => w.length > 3);
            for (const ch of subjectObj.chapters) {
                const ctLower = (ch.title || '').toLowerCase();
                if (slugWords.some(w => ctLower.includes(w))) {
                    foundChapter = ch;
                    break;
                }
            }
        }

        const titleWords = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        if (foundChapter) {
            // Overwrite the existing topic
            foundChapter.topics[0].notes = html;
            foundChapter.topics[0].isAIGenerated = true;
            foundChapter.title = "✨ " + titleWords; // highlight it visually
            injected++;
        } else {
            // Create a new chapter at the top
            subjectObj.chapters.unshift({
                id: topicId,
                title: "✨ " + titleWords,
                icon: "fa-solid fa-robot",
                topics: [{
                    id: topicId,
                    title: titleWords,
                    notes: html,
                    formulas: '',
                    isAIGenerated: true
                }]
            });
            newCreated++;
        }
    });

    console.log(`[inject_targeted] Done! Restructured chapters. Overwrote ${injected} notes and created ${newCreated} new ones.`);
})();
