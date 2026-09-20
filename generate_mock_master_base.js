const fs = require('fs');

const mockData = {
  "history": {
    "status": "PUBLISHED",
    "topics": {
      "ancient_india": {
        "content": "# Ancient India\n\n## Harappan Civilization\n- Discovered in 1921 by Daya Ram Sahni.\n- Major sites: Harappa, Mohenjodaro, Lothal, Dholavira.\n- Known for urban planning and drainage systems.\n\n## Vedic Period\n- Early Vedic (1500-1000 BC) and Later Vedic (1000-600 BC).\n- Key texts: Rig Veda, Sama Veda, Yajur Veda, Atharva Veda."
      },
      "medieval_india": {
        "content": "# Medieval India\n\n## Delhi Sultanate\n- Five dynasties: Slave, Khilji, Tughlaq, Sayyid, Lodi.\n- Key rulers: Iltutmish, Alauddin Khilji, Muhammad bin Tughlaq.\n\n## Mughal Empire\n- Founded by Babur in 1526 after First Battle of Panipat.\n- Key rulers: Akbar, Jahangir, Shah Jahan, Aurangzeb."
      }
    }
  },
  "geography": {
    "status": "PUBLISHED",
    "topics": {
      "physical_geography": {
        "content": "# Physical Geography\n\n## Earth's Structure\n- Crust, Mantle, Core.\n- Lithosphere and Asthenosphere.\n\n## Plate Tectonics\n- Divergent, Convergent, and Transform boundaries.\n- Formation of Himalayas due to Eurasian and Indian plate collision."
      },
      "indian_geography": {
        "content": "# Indian Geography\n\n## Physiographic Divisions\n1. The Himalayas\n2. The Northern Plains\n3. The Peninsular Plateau\n4. The Coastal Plains\n5. The Islands\n\n## River Systems\n- Himalayan rivers: Ganga, Indus, Brahmaputra.\n- Peninsular rivers: Narmada, Tapi, Godavari, Krishna, Cauvery."
      }
    }
  },
  "polity": {
    "status": "PUBLISHED",
    "topics": {
      "constitution_basics": {
        "content": "# Basics of Indian Constitution\n\n## Key Features\n- Longest written constitution.\n- Federal system with unitary bias.\n- Parliamentary form of government.\n\n## Fundamental Rights\n- Articles 12-35 in Part III.\n- Right to Equality, Freedom, against Exploitation, Freedom of Religion, Cultural/Educational rights, Constitutional Remedies."
      }
    }
  }
};

fs.writeFileSync('final_published_master_base.json', JSON.stringify(mockData, null, 2));
console.log("Successfully generated mock final_published_master_base.json");
