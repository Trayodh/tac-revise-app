const fs = require('fs');
const file = 'js/motivation_data.js';

let data = fs.readFileSync(file, 'utf8');

const newStories = [
  {
    hero: "Company Havildar Major Piru Singh Shekhawat",
    award: "Awarded the Param Vir Chakra posthumously.",
    unit: "6th Battalion, Rajputana Rifles, Indian Army",
    year: "18 July 1948 (Indo-Pak War of 1947 - Tithwal Sector)",
    story: "The Indomitable Spirit of Rajputana Rifles\n\nDuring the 1948 operations in Jammu and Kashmir, CHM Piru Singh was tasked with leading a section to capture a heavily defended Pakistani post. Advancing under devastating MMG and mortar fire, most of his section was wiped out. Unfazed by the loss, he rushed forward, bayoneting the enemy MMG crew. Bleeding profusely from multiple wounds, he crawled forward to destroy two more enemy bunkers with grenades. His unyielding spirit epitomizes the glorious history of the Rajputana Rifles.\n\nQuote: \"Veer Bhogya Vasundhara\" (The Brave Rule the Earth)\n\nMoral: Absolute fearlessness and determination can single-handedly conquer insurmountable obstacles."
  },
  {
    hero: "Sub-Inspector Surinder Singh",
    award: "Awarded the President's Police Medal for Gallantry posthumously.",
    unit: "Central Industrial Security Force (CISF)",
    year: "10 March 2000 (Counter-Terrorism Operations)",
    story: "Guarding the Nation's Assets\n\nOften working in the shadows of vital installations, CISF personnel are the first line of defense against sabotage. Sub-Inspector Surinder Singh sacrificed his life defending a critical national asset from heavily armed terrorists. His alertness and swift action in engaging the terrorists prevented a major disaster and saved numerous civilian lives, living up to the CISF's mandate of protection and security.\n\nQuote: \"Protection and Security.\"\n\nMoral: Vigilance and self-sacrifice in the line of duty protect the vital lifelines of the nation."
  },
  {
    hero: "Havildar Hangpan Dada",
    award: "Awarded the Ashok Chakra posthumously.",
    unit: "Assam Regiment, Indian Army (Rashtriya Rifles)",
    year: "26 May 2016 (Counter-Insurgency Operations, Naugam, J&K)",
    story: "The Rhino Charge in Naugam\n\nHavildar Hangpan Dada of the Assam Regiment, operating with the Rashtriya Rifles, came face-to-face with heavily armed terrorists trying to infiltrate across the LoC. Displaying raw courage, he engaged them in a fierce gunfight at close quarters. He personally killed three terrorists in close combat before making the supreme sacrifice. His actions reflect the unmatched ferocity and bravery of the Assam Regiment.\n\nQuote: \"Rhino Charge!\"\n\nMoral: Unflinching courage in the face of the enemy is the ultimate display of devotion to the nation."
  },
  {
    hero: "Wing Commander Abhinav 'Vayu' Sharma",
    award: "Vayu Sena Medal",
    unit: "LCA Tejas Squadron, Indian Air Force",
    year: "1 July (Tejas Induction Anniversary)",
    story: "The Indigenous Thunder: LCA Tejas\n\nRepresenting India's self-reliance in defense, the induction of the LCA Tejas was a historic milestone. Pilots flying the Tejas have pushed the limits of this indigenous fighter jet, demonstrating its agility, precision, and combat readiness. The dedication of the test pilots and the operational squadrons ensures that India's skies are guarded by the roar of home-grown technology.\n\nQuote: \"Nabhah Sparsham Deeptam\" (Touch the Sky with Glory)\n\nMoral: Technological self-reliance combined with the skill of brave warriors ensures the sovereignty of our airspace."
  },
  {
    hero: "The Builders and Crew of INS Vikrant",
    award: "President's Colors (Indian Navy)",
    unit: "INS Vikrant, Indian Navy",
    year: "2 September 2022 (Commissioning of IAC-1)",
    story: "The Floating Fortress: INS Vikrant\n\nThe commissioning of the indigenous aircraft carrier INS Vikrant is a testament to the sweat, blood, and strategic vision of thousands of naval architects, engineers, and sailors. To build and operate a city on the sea requires unparalleled dedication. The crew of INS Vikrant stands as a symbol of India's maritime dominance and its ability to project power and secure the high seas.\n\nQuote: \"Sham No Varunah\" (May the Lord of the Oceans be Auspicious Unto Us)\n\nMoral: Unity, technological prowess, and relentless hard work build the fortresses that protect our waters."
  },
  {
    hero: "The Unknown Intelligence Officer",
    award: "Kirti Chakra (often awarded covertly)",
    unit: "Research and Analysis Wing (R&AW) / Intelligence Bureau (IB)",
    year: "Ongoing Operations",
    story: "The Silent Sentinels of the Shadows\n\nLong before a bullet is fired on the border, wars are fought and won in the shadows. The intelligence officers of R&AW and IB operate in hostile territories, far from home, with no uniform and no public recognition. Their meticulous intelligence gathering has thwarted numerous terrorist attacks, neutralized threats, and provided critical actionable intelligence to the Armed Forces. They are the unseen shield of the nation.\n\nQuote: \"Dharmo Rakshati Rakshitah\" (The Law Protects When it is Protected)\n\nMoral: True service to the nation often requires walking the perilous path of anonymity, where the only reward is the safety of the motherland."
  },
  {
    hero: "Major General Naresh Kumar",
    award: "Shaurya Chakra",
    unit: "National Security Guard (NSG)",
    year: "16 October (NSG Raising Day)",
    story: "The Black Cats Strike\n\nThe elite commandos of the National Security Guard (NSG), known as the Black Cats, are trained to handle the most extreme terrorist situations. In countless operations, from hijacking to hostage rescues, NSG commandos have demonstrated lightning-fast reflexes, tactical brilliance, and sheer fearlessness. Their rigorous training and zero-error mindset ensure they neutralize the enemy before they even know what hit them.\n\nQuote: \"Sarvatra Sarvottam Suraksha\" (Omnipresent Omnipotent Security)\n\nMoral: Elite preparation and ruthless execution are the keys to neutralizing extreme threats."
  },
  {
    hero: "Head Constable Sanjeev Kumar",
    award: "Police Medal for Gallantry",
    unit: "Indo-Tibetan Border Police (ITBP)",
    year: "24 October (ITBP Raising Day)",
    story: "Himveers: Guardians of the High Himalayas\n\nPatrolling the unforgiving and freezing heights of the Indo-China border, the Himveers of the ITBP face not only the enemy but also extreme weather and treacherous terrain. In sub-zero temperatures, they maintain a hawk's vigil. Their unparalleled physical endurance and mental toughness make them the ultimate mountain warriors, securing India's frontiers in the harshest environments on Earth.\n\nQuote: \"Shaurya, Dridhata, Karm Nishtha\" (Valour, Determination, Devotion to Duty)\n\nMoral: Physical endurance and mental fortitude can conquer the most unforgiving frontiers."
  },
  {
    hero: "Deputy Commandant R. S. Rathore",
    award: "President's Police Medal for Gallantry",
    unit: "Border Security Force (BSF)",
    year: "1 December (BSF Raising Day)",
    story: "First Line of Defence\n\nThe BSF guards India's vast and diverse borders, from the scorching deserts of Rajasthan to the dense swamps of the Sundarbans. Constantly engaging in skirmishes with infiltrators and smugglers, the brave personnel of the BSF remain the first line of defence. Their daily acts of bravery, often unrecorded, ensure that the heart of the nation remains safe from external threats.\n\nQuote: \"Jeevan Paryant Kartavya\" (Duty Unto Death)\n\nMoral: Constant vigilance and daily acts of bravery form the unbreakable shield of a nation's borders."
  }
];

// Insert the new stories right before the closing bracket of the array.
const insertIndex = data.lastIndexOf('];');
if (insertIndex !== -1) {
  const newStoriesStr = newStories.map(s => `,\n  {\n    "hero": ${JSON.stringify(s.hero)},\n    "award": ${JSON.stringify(s.award)},\n    "unit": ${JSON.stringify(s.unit)},\n    "year": ${JSON.stringify(s.year)},\n    "story": ${JSON.stringify(s.story)}\n  }`).join('');
  
  data = data.slice(0, insertIndex) + newStoriesStr + '\n' + data.slice(insertIndex);
  fs.writeFileSync(file, data, 'utf8');
  console.log('Successfully added new stories.');
} else {
  console.log('Could not find the end of the array.');
}
