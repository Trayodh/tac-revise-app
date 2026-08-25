const fs = require('fs');

const filesToClean = [
  'notes_data.js',
  'notes_data_upgraded.js',
  'notes_data_exam_focused.js'
];

const mismatches = {
  "data-interpretation": ["english_vocabulary_chart.png", "english_grammar_chart.png"],
  "area-perimeter": ["afcat_embedded_figures.png"],
  "amendments-parts": ["flower_parts_diagram.png"],
  "world-geography-mountains": ["current_affairs_world.png"],
  "india-forests-wetlands": ["current_affairs_india.png"],
  "mapping-borders-capitals": ["history_mauryan_gupta_map.png", "harappan_civilization_map.png"],
  "newtons-laws": ["environment_laws_treaties.png"],
  "syl-numerical": ["chemical_bonding_reactions.png"],
  "cell-structure": ["indian_constitution_structure.png", "atomic_structure_periodic_table.png"],
  "human-systems": ["human_eye_prism_diagram.png"],
  "immunity-vaccines": ["trigonometry_unit_circle.png"]
};

filesToClean.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;
    
    // We want to match exactly the specific image in the specific topic.
    // To do this safely, we will extract the topic's notes string, remove the image block from it, 
    // and then replace the old topic string with the new topic string in the file content.
    
    // Iterate through all topics in the file
    const topicRegex = /("id":\s*"([^"]+)"[\s\S]*?"notes":\s*")([\s\S]*?)((?<!\\)","formulas":|(?<!\\)","mindmap":|(?<!\\)"\s*})/g;
    
    // Note: The notes string might end with `",` or similar, we have to be careful with the boundary.
    // Instead of complex AST or topic extraction, let's just use the safe short-distance regex globally, 
    // BUT only for the mismatched images! Since they shouldn't be rendered anywhere incorrectly.

    Object.keys(mismatches).forEach(topicId => {
      mismatches[topicId].forEach(imageFile => {
        // Safe global regex that only spans max 400 chars.
        // This prevents the "eating half the file" bug.
        const safeRegex = new RegExp(`<!-- VISUAL INJECTION -->[\\\\\\s\\w"=<>-]{0,200}images\\\\?/${imageFile}[\\\\\\s\\w"=<>/.-]{0,300}</div>(?:\\\\n)*`, 'g');
        content = content.replace(safeRegex, '');
        
        // Also a version with unescaped slash just in case
        const safeRegex2 = new RegExp(`<!-- VISUAL INJECTION -->[\\s\\S]{0,200}images/${imageFile}[\\s\\S]{0,300}</div>(?:\\\\n)*`, 'g');
        content = content.replace(safeRegex2, '');
      });
    });

    if (original !== content) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`Cleaned ${file}`);
    } else {
      console.log(`No changes made to ${file}`);
    }
  }
});
