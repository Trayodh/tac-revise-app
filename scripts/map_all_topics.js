const fs = require('fs');

const fullMapStr = `{
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
    }`;

let text = fs.readFileSync('inject_ai_notes.js', 'utf8');

const regex = /const CHAPTER_KEYWORD_MAP = \{[\s\S]*?\};/;
if (regex.test(text)) {
    text = text.replace(regex, 'const CHAPTER_KEYWORD_MAP = ' + fullMapStr + ';');
    fs.writeFileSync('inject_ai_notes.js', text, 'utf8');
    console.log('Successfully updated inject_ai_notes.js');
} else {
    console.log('Regex did not match!');
}
