const fs = require('fs');

const file = 'perfect_map.json';
let map = JSON.parse(fs.readFileSync(file, 'utf8'));

const fixMap = {
    'MutedPeriodicTable.png': 'syl-numerical',
    'PeriodicTableBoilingPoint.png': 'syl-numerical',
    'Types of bonds.png': 'syl-numerical',
    'demand reads.png': 'econ-concepts',
    'Economic Cycle.png': 'econ-concepts',
    'Flow of Income.png': 'econ-concepts',
    'Indian Banking System.png': 'econ-budget-fiscal',
    'Inflation Types.png': 'econ-concepts',
    'Keynesian Multiplier Effect.png': 'econ-concepts',
    'Market Dynamics.png': 'econ-concepts',
    'Parts of Budget.png': 'econ-budget-fiscal',
    'RBI functions.png': 'econ-budget-fiscal',
    'Supply variations.png': 'econ-concepts',
    'Taxes.png': 'econ-budget-fiscal',
    'Dice or cube.png': 'syl-verbal-reasoning',
    'Image patterns 2.png': 'afcat-r-fig-analogy',
    'Image patterns.png': 'afcat-r-fig-analogy'
};

for (const [img, topicId] of Object.entries(fixMap)) {
    if (map[img]) {
        map[img].topicId = topicId;
    } else {
        map[img] = { topicId: topicId, fallback: false };
    }
}

fs.writeFileSync(file, JSON.stringify(map, null, 2));
console.log('perfect_map.json updated with correct topic IDs.');
