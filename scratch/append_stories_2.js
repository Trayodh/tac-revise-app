const fs = require('fs');
const file = 'js/motivation_data.js';

let data = fs.readFileSync(file, 'utf8');

const newStories = [
  {
    hero: "Lachit Borphukan",
    award: "Supreme Commander of Ahom Forces",
    unit: "Ahom Army",
    year: "1671 (Battle of Saraighat)",
    story: "The Unyielding Defender of Assam\n\nIn the epic Battle of Saraighat in 1671, the Mughal army, under Ram Singh I, sought to conquer the Ahom kingdom. Lachit Borphukan, the Ahom commander, was severely ill, yet he ordered his men to carry him onto a warboat to lead the defense on the Brahmaputra River. Seeing their commander's indomitable spirit despite his physical condition, the retreating Ahom soldiers rallied with unprecedented ferocity. Utilizing brilliant naval tactics, guerrilla warfare, and a deep understanding of the local terrain, Lachit completely decimated the vastly superior Mughal fleet. His unwavering resolve secured the sovereignty of Assam and remains a legendary testament to patriotic fervor and military genius.\n\nQuote: \"My uncle is not greater than my country.\"\n\nMoral: True leadership and unyielding patriotic zeal can defeat even the mightiest of empires."
  },
  {
    hero: "Emperor Rajendra Chola I",
    award: "Chola Emperor",
    unit: "The Chola Navy",
    year: "1025 CE (Srivijaya Expedition)",
    story: "Masters of the Blue Water\n\nLong before the era of modern navies, Emperor Rajendra Chola I commanded one of the most formidable maritime forces in history. In 1025 CE, he launched a massive and unprecedented overseas naval expedition against the Srivijaya empire (modern-day Indonesia and Malaysia) to secure maritime trade routes. The Chola Navy, utilizing advanced ship-building and navigation techniques, successfully crossed the Indian Ocean, struck with precision, and brought vast territories under Chola influence. This expedition stands as one of the earliest and greatest examples of blue-water naval power projection in Indian history.\n\nQuote: \"The oceans are not barriers, but pathways to glory.\"\n\nMoral: Strategic vision and naval superiority have been cornerstones of Indian power projection since antiquity."
  },
  {
    hero: "Kanhoji Angre",
    award: "Sarkhel (Grand Admiral)",
    unit: "Maratha Navy",
    year: "Late 17th - Early 18th Century",
    story: "The Undisputed Lord of the Konkan\n\nKanhoji Angre, the Sarkhel of the Maratha Navy, is widely regarded as the most skilled and feared maritime commander of his era. Realizing the strategic threat posed by European colonial powers (British, Portuguese, and Dutch), Angre built a formidable naval fleet and a network of coastal forts. For decades, he successfully defended the Konkan coast against European navies, remaining undefeated in battle. His tactical brilliance and mastery of coastal defense laid the foundation for indigenous naval strength, proving that Indian forces could outmaneuver modern European armadas.\n\nQuote: \"To secure the land, one must first control the sea.\"\n\nMoral: Indigenous innovation and tactical brilliance can successfully repel the most advanced foreign adversaries."
  },
  {
    hero: "Maharaja Marthanda Varma",
    award: "King of Travancore",
    unit: "Travancore Army",
    year: "10 August 1741 (Battle of Colachel)",
    story: "The Defeat of the Dutch\n\nThe Battle of Colachel marks a watershed moment in Asian history, as it was the first time an Asian power decisively defeated a major European naval force. When the Dutch East India Company attempted to expand its dominance in Kerala, Maharaja Marthanda Varma of Travancore mobilized his forces. Despite the Dutch possessing superior firearms and artillery, the Travancore army executed a brilliant tactical envelopment. The Dutch were completely routed, their commander surrendered, and the myth of European invincibility was shattered forever.\n\nQuote: \"Our resolve is stronger than their cannons.\"\n\nMoral: Courage, unity, and superior tactics can shatter the myth of invincibility of any foreign power."
  },
  {
    hero: "Subedar Sanjeev Kumar",
    award: "Kirti Chakra (Posthumously)",
    unit: "4 Para (Special Forces), Indian Army",
    year: "April 2020 (Operation Randori Behak, Kupwara)",
    story: "The Snow Warriors of Randori Behak\n\nIn early April 2020, intelligence indicated heavily armed terrorists infiltrating across the LoC in the treacherous, snow-bound Randori Behak sector. The elite 4 Para (SF) was deployed. Subedar Sanjeev Kumar and his squad were heli-dropped near the infiltration route. During the pursuit, the squad triggered a snow cornice and fell into a frozen gorge, landing directly beside the terrorists. In a grueling, point-blank firefight in waist-deep snow, Subedar Sanjeev and his men, displaying superhuman reflexes and raw courage, eliminated the terrorists. Five commandos, including Sanjeev Kumar, made the supreme sacrifice, fighting to their last breath in the frozen wilderness.\n\nQuote: \"Balidaan Param Dharma\" (Sacrifice is the Supreme Duty)\n\nMoral: True warriors fight relentlessly, adapting to extreme environments and offering the ultimate sacrifice to protect the nation."
  },
  {
    hero: "Major Harita Kaur Deol",
    award: "Pioneer in Military Aviation",
    unit: "Indian Air Force",
    year: "1994",
    story: "The First Woman to Fly Solo in the IAF\n\nWhile ancient and modern wars are fought with weapons, the battle for equality and breaking barriers requires its own unique courage. In 1994, Flight Lieutenant (later Major) Harita Kaur Deol became the first woman pilot in the Indian Air Force to fly solo, commanding an Avro HS-748 aircraft at just 22 years of age. Her historic flight shattered the glass ceiling in military aviation, proving that the skies belong to the brave, regardless of gender. She paved the way for future generations of women fighter pilots in India.\n\nQuote: \"The sky is not the limit; it's the starting point.\"\n\nMoral: Breaking barriers and leading by example is the purest form of courage that transforms the future."
  },
  {
    hero: "Corporal Jyoti Prakash Nirala",
    award: "Ashok Chakra (Posthumously)",
    unit: "Garud Commando Force, Indian Air Force (attached to Rashtriya Rifles)",
    year: "18 November 2017 (Operation Rakshak, Bandipora)",
    story: "The Fearless Garud\n\nDuring a fierce counter-insurgency operation in Bandipora, a joint team surrounded a suspected terrorist hideout. Corporal Jyoti Prakash Nirala, armed with an LMG, strategically positioned himself close to the hideout. When the terrorists attempted to break the cordon by firing indiscriminately and throwing grenades, Nirala engaged them in an intense close-quarter gunfight. He single-handedly eliminated two high-profile terrorists and injured two others. Despite being hit by a volley of bullets, he continued firing until he collapsed. His unmatched valor and supreme sacrifice neutralized a massive threat.\n\nQuote: \"Prahar\" (Strike)\n\nMoral: Elite training combined with unflinching courage transforms an individual into an unstoppable force against terror."
  },
  {
    hero: "MARCOS Squad",
    award: "Multiple Gallantry Awards",
    unit: "Marine Commandos (MARCOS), Indian Navy",
    year: "November 2008 (Operation Black Tornado, Mumbai)",
    story: "The Few, The Fearless\n\nWhen Mumbai was struck by unprecedented terror on 26/11, the Navy's elite Marine Commandos (MARCOS) were the first special forces to respond. Entering the Taj Mahal Palace Hotel in total darkness, they navigating booby traps and engaged heavily armed terrorists in a complex, multi-story urban battlefield. Their swift, silent, and lethal intervention successfully rescued hundreds of hostages and contained the terrorists until the NSG arrived, proving why they are known as the 'Dadiwale Fauji' (bearded warriors) and the absolute best in maritime and urban warfare.\n\nQuote: \"The Few, The Fearless.\"\n\nMoral: In the darkest hours, elite readiness and silent courage provide the ultimate shield against chaos."
  }
];

const insertIndex = data.lastIndexOf('];');
if (insertIndex !== -1) {
  const newStoriesStr = newStories.map(s => `,\n  {\n    "hero": ${JSON.stringify(s.hero)},\n    "award": ${JSON.stringify(s.award)},\n    "unit": ${JSON.stringify(s.unit)},\n    "year": ${JSON.stringify(s.year)},\n    "story": ${JSON.stringify(s.story)}\n  }`).join('');
  
  data = data.slice(0, insertIndex) + newStoriesStr + '\n' + data.slice(insertIndex);
  fs.writeFileSync(file, data, 'utf8');
  console.log('Successfully added ancient/medieval and SF stories.');
} else {
  console.log('Could not find the end of the array.');
}
