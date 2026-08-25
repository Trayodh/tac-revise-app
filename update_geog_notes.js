const fs = require('fs');
const glob = require('glob');

const files = [
  'data.js',
  'notes_data.js',
  'notes_data_exam_focused.js',
  'notes_data_upgraded.js',
  'clean_notes.js'
];

const newNotes = `## Indian Geography – Rivers, Passes & Soils

### Introduction

India’s geography is a tapestry of contrasting landforms – towering mountains, extensive plains, rugged plateaus, and diverse soils. These physical features have shaped the sub-continent’s history, culture, economy, and strategic considerations. This chapter provides a high-yield overview of the major river systems, key mountain passes, and the principal soil types that are essential for UPSC and Defence examinations.

### Major River Systems

#### 1. Himalayan Rivers
The Himalayan rivers originate from glacial melt and snow in the Himalayas. They are perennial, fast-flowing, and drain the northern Indo-Gangetic plains. They often perform intensive erosional activity upstream and form large deltas or flood plains downstream.

*   **Indus River System**: 
    *   **Source**: Bokhar Chu (glacier) in the Kailash range near Mansarovar Lake (Tibet).
    *   **Key Tributaries**: Jhelum, Chenab, Ravi, Beas, and Sutlej. 
    *   **Significance**: The Indus Water Treaty (1960) allocates the waters of the three western rivers (Indus, Jhelum, Chenab) to Pakistan, and the three eastern rivers (Ravi, Beas, Sutlej) to India.
*   **Ganga River System**: 
    *   **Source**: Gangotri Glacier near Gaumukh (Uttarakhand). It is initially known as the Bhagirathi. It joins Alaknanda at Devprayag to form the Ganga.
    *   **Key Tributaries**: Yamuna (longest tributary, source: Yamunotri), Ramganga, Gomti, Ghaghara, Gandak, Kosi (Sorrow of Bihar), and Son.
    *   **Significance**: Forms the largest river basin in India and is a lifeline for millions, offering immense agricultural potential.
*   **Brahmaputra River System**: 
    *   **Source**: Chemayungdung glacier of the Kailash range near Mansarovar Lake.
    *   **Names**: Known as Tsangpo in Tibet, Dihang or Siang in Arunachal Pradesh, and Brahmaputra in Assam. In Bangladesh, it is known as Jamuna.
    *   **Key Tributaries**: Subansiri, Kameng, Dhansiri, Manas, Teesta.
    *   **Significance**: Known for causing widespread floods in Assam but also creates fertile plains and the world's largest riverine island, Majuli.

#### 2. Peninsular Rivers
These rivers are rain-fed, largely seasonal, and older than the Himalayan rivers. They are generally characterized by broad, shallow valleys. They are divided into East-flowing (forming deltas) and West-flowing (forming estuaries).

*   **East-Flowing Rivers (Into Bay of Bengal)**:
    *   **Godavari**: The largest Peninsular river system, also known as the Dakshin Ganga. Source: Trimbakeshwar (Maharashtra). Major tributaries: Penganga, Indravati, Pranhita.
    *   **Krishna**: Second largest east-flowing river. Source: Mahabaleshwar (Maharashtra). Tributaries: Tungabhadra, Bhima, Koyna.
    *   **Kaveri (Cauvery)**: Source: Brahmagiri hills (Karnataka). Receives rainfall from both Southwest and Northeast monsoons.
    *   **Mahanadi**: Rises in the highlands of Chhattisgarh and flows through Odisha. The Hirakud Dam is built on this river.
*   **West-Flowing Rivers (Into Arabian Sea)**:
    *   **Narmada**: Originates at the Amarkantak Plateau (Madhya Pradesh). Flows in a rift valley between the Vindhya and Satpura ranges. Known for the Dhuandhar falls and the Sardar Sarovar Dam.
    *   **Tapi (Tapti)**: Source: Multai in the Betul district (Madhya Pradesh). Also flows in a rift valley parallel to the Narmada.
    *   **Mahi**: Originates in the Vindhyas (Madhya Pradesh) and uniquely crosses the Tropic of Cancer twice.

### Strategic Mountain Passes

Mountain passes are crucial for defense strategy, trade, and logistics, acting as gateways across impenetrable ranges.

#### 1. Passes of the Himalayas and Northern India
*   **Jammu & Kashmir and Ladakh**:
    *   **Zoji La**: Connects Srinagar to Kargil and Leh. A critical supply route for the Indian Army.
    *   **Banihal Pass**: Connects Jammu to Srinagar across the Pir Panjal range. (Jawahar Tunnel).
    *   **Khardung La**: Historically considered the highest motorable pass, near Leh, gateway to the Nubra and Shyok valleys.
    *   **Burzil Pass**: Connects the Kashmir valley to Gilgit.
    *   **Aghil Pass**: Connects Ladakh with the Xinjiang province of China.
*   **Himachal Pradesh**:
    *   **Rohtang Pass**: Connects the Kullu Valley with the Lahaul and Spiti Valleys.
    *   **Shipki La**: Connects Himachal Pradesh to Tibet. The Sutlej river enters India through this pass.
    *   **Bara-Lacha La**: Connects Lahaul district in Himachal Pradesh to Leh in Ladakh.
*   **Uttarakhand**:
    *   **Lipulekh Pass**: Connects Uttarakhand with Tibet. Used by pilgrims for the Kailash Mansarovar Yatra.
    *   **Mana Pass & Niti Pass**: Strategic passes connecting Uttarakhand with Tibet.
*   **Sikkim & Arunachal Pradesh**:
    *   **Nathu La (Sikkim)**: A major trading border post between India and China (Tibet).
    *   **Jelep La (Sikkim)**: Connects Sikkim to Bhutan/Tibet. Creates a route to the Chumbi Valley.
    *   **Bomdi La (Arunachal Pradesh)**: Connects Arunachal Pradesh to Lhasa (Tibet).
    *   **Diphu Pass (Arunachal Pradesh)**: Tri-junction pass at the borders of India, China, and Myanmar.

#### 2. Passes of the Western Ghats
*   **Thal Ghat**: Connects Mumbai to Nashik.
*   **Bhor Ghat**: Connects Mumbai to Pune.
*   **Pal Ghat**: Connects Palakkad (Kerala) to Coimbatore (Tamil Nadu). Located between the Nilgiri Hills and the Anaimalai Hills.
*   **Shencottah Pass**: Connects Kollam (Kerala) to Madurai (Tamil Nadu).

### Principal Soil Types of India

The Indian Council of Agricultural Research (ICAR) classifies Indian soils into several distinct categories based on genesis, color, composition, and location.

#### 1. Alluvial Soil
*   **Formation**: Deposited by surface water (rivers). Predominantly found in river basins and coastal plains.
*   **Coverage**: The most widespread soil in India, covering about 43% of the land area.
*   **Regions**: Indo-Gangetic-Brahmaputra plains, deltas of the eastern coast (Mahanadi, Godavari, Krishna, Kaveri).
*   **Characteristics**: Highly fertile. Divided into **Khadar** (new alluvium, lighter, more fertile, found in flood plains) and **Bhangar** (old alluvium, darker, contains calcareous nodules called kankar, slightly elevated).
*   **Crops**: Wheat, rice, sugarcane, cotton, jute.

#### 2. Black Soil (Regur Soil)
*   **Formation**: Derived from the weathering of basaltic rocks (volcanic origin) of the Deccan Trap.
*   **Coverage**: About 15% of the total area.
*   **Regions**: Maharashtra, Malwa Plateau (Madhya Pradesh), Saurashtra (Gujarat), parts of Karnataka and Telangana.
*   **Characteristics**: Rich in iron, lime, calcium, and magnesium but poor in nitrogen, phosphorus, and organic matter. Highly clayey and moisture-retentive. Develops deep cracks during summer (self-ploughing capacity).
*   **Crops**: Exceptionally well-suited for cotton (hence known as Black Cotton Soil). Also good for wheat, jowar, and tobacco.

#### 3. Red and Yellow Soil
*   **Formation**: Formed by the weathering of ancient crystalline and metamorphic rocks in areas of low rainfall.
*   **Coverage**: Second largest soil group, covering about 18.5% of the area.
*   **Regions**: Eastern and southern parts of the Deccan Plateau (Tamil Nadu, Karnataka, Andhra Pradesh, parts of Odisha and Chhattisgarh).
*   **Characteristics**: The red color is due to a high concentration of iron oxide. It appears yellow when hydrated. Generally poor in nitrogen, phosphorus, and humus.
*   **Crops**: Requires fertilizers for good yields. Supports groundnut, potatoes, pulses, millets, and tobacco.

#### 4. Laterite Soil
*   **Formation**: Develops in areas with high temperature and high rainfall through intense leaching (washing away of siliceous matter).
*   **Regions**: Summits of the Western Ghats, parts of Eastern Ghats, Rajmahal Hills, Meghalaya plateau, and parts of Kerala and Karnataka.
*   **Characteristics**: Rich in iron oxide and aluminum (bauxite) but poor in organic matter, nitrogen, phosphate, and calcium. Acidic in nature. Used extensively for making bricks.
*   **Crops**: Not naturally fertile but responds well to manures. Suitable for plantation crops like cashew nuts, tea, coffee, rubber, and cinchona.

#### 5. Arid (Desert) Soil
*   **Formation**: Wind deposition in arid and semi-arid conditions.
*   **Regions**: Western Rajasthan, parts of Gujarat, and southern Haryana.
*   **Characteristics**: Sandy texture, highly alkaline, low organic matter, and low moisture content due to high evaporation. Often contains a high percentage of soluble salts.
*   **Crops**: Drought-resistant crops like bajra, jowar, and pulses. Can support agriculture if irrigation is provided (e.g., via the Indira Gandhi Canal).

#### 6. Mountain/Forest Soil
*   **Regions**: Forested regions of the Himalayas, Western Ghats, and Eastern Ghats.
*   **Characteristics**: Rich in humus but deficient in potash, phosphorus, and lime. Acidic in nature. Texture varies from loamy in valleys to coarse in upper slopes.
*   **Crops**: Tea, coffee, spices, and temperate fruits (apples, plums).

### High-Yield Exam Facts
*   The **Ganga, Yamuna, Brahmaputra, and Indus** together drain > 70% of India's total land area.
*   **Peninsular rivers** are largely rain-fed; their flow peaks during the Southwest monsoon. The Narmada and Tapi are the major exceptions that flow west into the Arabian Sea.
*   **Shipki La (4,570 m)** and **Bara-Lacha La (4,890 m)** are among the highest Indian passes open for limited trade.
*   **Alluvial soils** support > 50% of India's food grain production.
*   **Black soils** are the primary source of cotton – the "white gold" of India.
*   **Western Ghats** are a UNESCO World Heritage site, a biodiversity hotspot, and act as a major water divide for peninsular rivers.
`;

let modifications = 0;

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Using a regex to carefully replace the old notes content of the object with "title": "Indian Geography (Rivers, Passes & Soils)"
    
    // We want to match the title line, followed by the notes string (which can be very long and contain newlines)
    // and replace only the notes string.
    
    // Since the format in data.js might be slightly different than notes_data.js
    // We'll parse or use a very targeted string replacement.
    
    // Let's write a small script that finds the "syl-geog" or the title, then replaces its 'notes' property.
    
    const titleRegex = /(title\s*:\s*["']Indian Geography \(Rivers, Passes & Soils\)["']\s*,\s*notes\s*:\s*)(["'])(?:(?=(\\?))\3[\s\S])*?\2/i;
    
    // More robust way: find the object
    // Wait, let's just find the exact old notes string in data.js, but since it has many escaped chars, it's safer to use regex.
    
    let newContent = content.replace(/(["']title["']\s*:\s*["']Indian Geography \(Rivers, Passes & Soils\)["']\s*,\s*["']notes["']\s*:\s*)(["'])(?:(?=(\\?))\3[\s\S])*?\2/g, function(match, p1, p2) {
      modifications++;
      return p1 + p2 + newNotes.replace(/\\/g, '\\\\').replace(new RegExp(p2, 'g'), '\\' + p2).replace(/\\n/g, '\\\\n').replace(/\n/g, '\\n') + p2;
    });

    let newContent2 = newContent.replace(/(title\s*:\s*["']Indian Geography \(Rivers, Passes & Soils\)["']\s*,\s*notes\s*:\s*)(["'])(?:(?=(\\?))\3[\s\S])*?\2/g, function(match, p1, p2) {
      modifications++;
      return p1 + p2 + newNotes.replace(/\\/g, '\\\\').replace(new RegExp(p2, 'g'), '\\' + p2).replace(/\\n/g, '\\\\n').replace(/\n/g, '\\n') + p2;
    });

    if (content !== newContent2) {
      fs.writeFileSync(file, newContent2, 'utf8');
      console.log(`Updated notes in ${file}`);
    }
  }
}
console.log('Total modifications:', modifications);
