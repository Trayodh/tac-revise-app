const fs = require('fs');

const targets = [
  'syl-exercises',
  'physics-heat',
  'reflection-refraction',
  'physics-electricity-magnetism',
  'chemistry-everyday-fertilisers',
  'diseases',
  'cell-structure'
];

const files = [
  'app.js',
  'notes_extra.js',
  'notes_extra_2.js',
  'notes_extra_3.js',
  'notes_extra_4.js',
  'notes_extra_5.js',
  'notes_extra_6.js',
  'notes_extra_7.js',
  'notes_extra_8.js',
  'notes_extra_9.js'
];

targets.forEach(target => {
  console.log(`\nTarget: ${target}`);
  files.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes(`EXPANDED_NOTES_DATA["${target}"]`) || content.includes(`EXPANDED_NOTES_DATA['${target}']`)) {
        console.log(`  - Found in EXPANDED_NOTES_DATA in ${file}`);
      }
      if (file === 'app.js' && content.includes(`id: "${target}"`)) {
        console.log(`  - Found as topic ID in app.js`);
      }
    }
  });
});
