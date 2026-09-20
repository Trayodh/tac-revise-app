// 14. MOTIVATION OF THE DAY (ARMED FORCES BRAVERY STORIES)
// ==========================================
const BRAVERY_STORIES = [
  {
    hero: "Major Somnath Sharma, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "4 Kumaon Regiment",
    year: "1947 (Battle of Badgam)",
    story: "During the 1947 Indo-Pakistani War, Major Sharma's company was heavily outnumbered by enemy raiders at Badgam. Despite a fractured arm, he ran across open ground to distribute ammunition and directed mortar fire. His final message to HQ was: 'The enemy are only 50 yards from us. We are heavily outnumbered. I shall not withdraw an inch but will fight to the last man and the last round.'"
  },
  {
    hero: "Captain Vikram Batra, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "13 Jammu & Kashmir Rifles (JAK RIF)",
    year: "1999 (Kargil War)",
    story: "Captain Batra led the capture of Point 5140, famously radioing the success code 'Yeh Dil Maange More!'. He then volunteered to capture Point 4875. Under devastating fire, he charged enemy bunkers, killed five enemy soldiers in close combat, and rescued an injured officer before being fatally shot. His bravery turned the tide of the war."
  },
  {
    hero: "Subedar Major Yogendra Singh Yadav, PVC",
    award: "Param Vir Chakra",
    unit: "18 Grenadiers",
    year: "1999 (Kargil War, Tiger Hill)",
    story: "Part of the commando platoon 'Ghatak', Subedar Yadav crawled up a vertical snow-clad cliff face under heavy enemy machine-gun fire to secure ropes. Despite being hit by 15 bullets and shrapnel, he crawled to the first bunker, lobbed a grenade, and killed four enemy soldiers, enabling his platoon to capture Tiger Hill."
  },
  {
    hero: "Major Sandeep Unnikrishnan, AC",
    award: "Ashoka Chakra (Posthumous)",
    unit: "51 Special Action Group, NSG",
    year: "2008 (Mumbai Attacks)",
    story: "During the rescue operation at the Taj Mahal Palace Hotel, Major Unnikrishnan led his team to clear the hotel of terrorists. When his colleague was injured, he engaged the terrorists, dragged his colleague to safety, and chased the fleeing terrorists alone. His final words to his team were: 'Don't come up, I will handle them.'"
  },
  {
    hero: "Second Lieutenant Arun Khetarpal, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "17 Poona Horse",
    year: "1971 (Battle of Basantar)",
    story: "At just 21 years old, Arun Khetarpal commanded a tank troop during the Battle of Basantar. When his tank was hit and caught fire, his commander ordered him to abandon it. Khetarpal refused, stating, 'My gun is still working and I will get these bastards.' He single-handedly destroyed 10 enemy tanks before his tank received a second, fatal hit."
  },
  {
    hero: "Major Shaitan Singh, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "13 Kumaon",
    year: "1962 (Battle of Rezang La)",
    story: "Major Shaitan Singh commanded a company of 120 men at Rezang La, Ladakh, which was attacked by over 5,000 Chinese soldiers. Despite being mortally wounded, he crawled from section to section, reorganizing his men and encouraging them to fight. His company killed over 1,000 enemy troops, standing their ground until the very last man."
  },
  {
    hero: "Naib Subedar Bana Singh, PVC",
    award: "Param Vir Chakra",
    unit: "8 Jammu & Kashmir Light Infantry (JAK LI)",
    year: "1987 (Siachen Glacier)",
    story: "Naib Subedar Bana Singh volunteered to capture the 'Quaid Post' at 21,153 feet on the Siachen Glacier, which was held by Pakistani forces. Climbing a vertical ice wall of 1,500 feet in a blizzard, Bana Singh and his team surprised the enemy, cleared the bunkers with bayonets and grenades, and captured the strategic post (now renamed 'Bana Post')."
  },
  {
    hero: "Rifleman Jaswant Singh Rawat, MVC",
    award: "Maha Vir Chakra (Posthumous)",
    unit: "4 Garhwal Rifles",
    year: "1962 (Battle of Nuranang)",
    story: "During the Sino-Indian War, Rifleman Rawat refused to retreat. With the help of two local girls, Sela and Nura, he set up firing positions at three different locations to trick the enemy into thinking they were facing a large force. He successfully held off the enemy for 72 hours, single-handedly neutralizing 300 enemy soldiers before being overrun."
  },
  {
    hero: "Captain Mahendra Nath Mulla, MVC",
    award: "Maha Vir Chakra (Posthumous)",
    unit: "INS Khukri, Indian Navy",
    year: "1971 (Indo-Pak War)",
    story: "During the 1971 war, the anti-submarine frigate INS Khukri was struck by torpedoes fired by a Pakistani submarine. As the ship sank rapidly in the Arabian Sea, Captain Mulla calmly supervised rescue operations, helping sailors to safety. When he noticed a junior sailor without a life jacket, he handed over his own. Upholding the highest naval traditions, he refused to abandon his ship, going down with the INS Khukri while ensuring the survival of many crewmen."
  },

  // ── PARAM VIR CHAKRA ADDITIONAL HEROES ────────────────────────────────
  {
    hero: "Lance Naik Albert Ekka, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "14 Guards",
    year: "1971 (Liberation of Bangladesh)",
    story: "During the assault on Gangasagar in East Pakistan, Lance Naik Ekka's platoon came under intense fire from a well-fortified bunker. Ignoring his own wounds, he single-handedly attacked the bunker, bayoneted the machine-gun crew, and silenced the weapon. He then led the charge on a second fortified post, saving his company — but succumbed to multiple bullet wounds before the battle ended. He is the only PVC recipient from Jharkhand."
  },
  {
    hero: "Havildar Abdul Hamid, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "4 Grenadiers",
    year: "1965 (Battle of Asal Uttar)",
    story: "During the 1965 war, Pakistan's feared Patton tank column advanced towards Khem Karan. Havildar Abdul Hamid single-handedly knocked out seven Pakistani Patton tanks using a jeep-mounted recoilless gun, often exposing himself to direct fire to get better angles. While destroying the seventh tank, he was killed by enemy fire. His bravery turned 'Asal Uttar' — meaning 'fitting reply' — into the graveyard of Patton tanks."
  },
  {
    hero: "Company Quartermaster Havildar Piru Singh Shekhawat, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "6 Rajputana Rifles",
    year: "1948 (Tithwal, J&K)",
    story: "During an attack on heavily defended positions at Tithwal, CQMH Piru Singh's company was pinned down by enemy fire. He charged alone at enemy machine-gun positions, throwing grenades and fighting hand-to-hand. Even after being severely wounded in the head, he continued to advance and silence enemy posts. He was found dead atop the third post he single-handedly captured."
  },
  {
    hero: "Naik Jadunath Singh, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "1 Rajput Regiment",
    year: "1948 (Naushera, J&K)",
    story: "At Taindhar near Naushera, Naik Jadunath Singh was guarding an outpost when Pakistani raiders launched a massive assault. He repelled three consecutive waves of attackers on his own after his comrades fell. Charging the enemy on the final wave with grenades and bayonet, he drove them back before being overwhelmed. India observes 6 February as 'Infantry Day' in his honour."
  },
  {
    hero: "Captain Manoj Kumar Pandey, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "1/11 Gorkha Rifles",
    year: "1999 (Kargil War, Jubar Top)",
    story: "Captain Pandey's mission was to capture the key feature 'Khalubar' in Batalik. He led his platoon through three successive assaults on enemy bunkers, each time the first man through. Severely wounded in the last assault, he still charged the final post shouting the Gorkha war cry 'Jai Maa Kali! Ayo Gorkhali!', capturing it before collapsing. His diary found after death read: 'Some goals are so worthy, it is glorious even to fail.'"
  },
  {
    hero: "Naib Subedar Sanjay Kumar, PVC",
    award: "Param Vir Chakra",
    unit: "13 Jammu & Kashmir Rifles",
    year: "1999 (Kargil War, Area Flat Top)",
    story: "Naib Subedar Sanjay Kumar volunteered to lead the assault on 'Area Flat Top' during Kargil. Single-handedly charging enemy positions, he was shot through the forearm and chest. He still overpowered the enemy gunner, snatched his weapon, and continued to fight, clearing a second position. Bleeding heavily, he refused evacuation until the objective was captured. He is one of only three Kargil PVC recipients to survive."
  },
  // ── INDIAN AIR FORCE ─────────────────────────────────────────────────────
  {
    hero: "Flying Officer Nirmal Jit Singh Sekhon, PVC",
    award: "Param Vir Chakra (Posthumous)",
    unit: "18 Squadron, Indian Air Force",
    year: "1971 (Defence of Srinagar Airbase)",
    story: "On 14 December 1971, six Pakistani Sabre jets attacked Srinagar airbase. Flying Officer Sekhon scrambled alone in his Gnat fighter — his wingman's aircraft was unserviceable. Outnumbered 6 to 1, he shot down two Pakistani jets before his own aircraft was hit. He is the only IAF officer to receive the Param Vir Chakra. The Gnat was nicknamed 'Sabre Slayer' after this war."
  },
  {
    hero: "Wing Commander Abhinandan Varthaman, VrC",
    award: "Vir Chakra",
    unit: "No. 51 Squadron, IAF",
    year: "2019 (Post-Balakot Air Engagement)",
    story: "After India's Balakot air strikes, Wing Commander Abhinandan engaged multiple modern Pakistani F-16s in a MiG-21 Bison — a 1960s aircraft. He shot down a Pakistani F-16 before his aircraft was struck by a missile. He ejected over Pakistani territory, was captured, disclosed nothing under interrogation, and was repatriated 60 hours later as a national hero. He proved that warrior spirit defeats technology every time."
  },
  {
    hero: "Flight Lieutenant K. Nachiketa, VrC",
    award: "Vir Chakra",
    unit: "Indian Air Force",
    year: "1999 (Kargil War)",
    story: "Flight Lieutenant Nachiketa's MiG-27 was shot down by a Stinger missile over Pakistan-Occupied Kashmir on 27 May 1999. He ejected safely but was captured by Pakistani forces. Despite eight days of intense interrogation, he disclosed no classified information and made no statements that would embarrass India. He was repatriated after intense diplomatic pressure and is celebrated as a symbol of IAF's indomitable spirit."
  },
  // ── INDIAN NAVY ──────────────────────────────────────────────────────────
  {
    hero: "INS Vinash Crew — Operation Trident",
    award: "Collective Gallantry",
    unit: "INS Vinash (P33), Indian Navy",
    year: "1971 (Karachi Port Attack)",
    story: "On the night of 4-5 December 1971, India executed 'Operation Trident' — the first combat use of anti-ship missiles in the Indian subcontinent. Three Vidyut-class missile boats, led by INS Vinash, fired Styx missiles at Karachi harbour, sinking the destroyer PNS Khyber and multiple fuel tankers. The oil fires lit up Karachi for a week. Operation Trident is celebrated every year as 'Navy Day' on December 4."
  },
  // ── LEGENDARY LEADERSHIP ────────────────────────────────────────────────
  {
    hero: "Field Marshal Sam Manekshaw, MC",
    award: "Field Marshal, PVSM, MC",
    unit: "Chief of Army Staff — 1971 War",
    year: "1971 (Liberation of Bangladesh)",
    story: "Field Marshal Sam Manekshaw's strategic genius delivered a 13-day victory in 1971. When PM Indira Gandhi pressured him to attack in April, he calmly told her: 'If you want me to go to war right now, I guarantee you a catastrophe.' His meticulous 8-month preparation delivered the surrender of 93,000 Pakistani troops — the largest military surrender since World War II. He became India's first Field Marshal in 1973."
  },
  // ── ANTI-TERROR & COUNTER-INSURGENCY ────────────────────────────────────
  {
    hero: "Major Mohit Sharma, AC",
    award: "Ashoka Chakra (Posthumous)",
    unit: "1 Para SF (Special Forces)",
    year: "2009 (Counter-Terror, J&K)",
    story: "Major Mohit Sharma was operating undercover with the alias 'Iftikhar Bhatt' to infiltrate a militant network in J&K. When his cover was blown during a critical operation in Shopian, he drew the militants' fire upon himself to protect his team and was killed in the exchange. His bravery saved his entire covert unit. He was awarded India's highest peacetime gallantry award — the Ashoka Chakra — posthumously."
  },
  {
    hero: "Havildar Hangpan Dada, AC",
    award: "Ashoka Chakra (Posthumous)",
    unit: "35 Rashtriya Rifles",
    year: "2016 (Counter-Terror, Arunachal Pradesh)",
    story: "Havildar Hangpan Dada tracked a group of heavily armed militants in dense Arunachal Pradesh jungle. Mortally wounded in the firefight, he continued to engage the militants, ensuring his team escaped and the threat was neutralized. His last act was to keep firing while bleeding out to protect his patrol. He was the first Indian soldier to receive the Ashoka Chakra for operations in Arunachal Pradesh."
  },
  {
    hero: "Captain Saurabh Kalia",
    award: "Served with Honour",
    unit: "4 Jat Regiment",
    year: "1999 (Kargil — First to Detect Intrusion)",
    story: "Captain Saurabh Kalia and his patrol of five soldiers were the first to detect Pakistani Army regulars occupying Indian posts in Kargil in May 1999. His patrol was captured and subjected to brutal torture for 22 days in captivity. They disclosed no military information. His case remains before the Supreme Court of India. Captain Kalia is a symbol of every soldier's dignity in the face of inhumanity."
  },
  // ── GALWAN 2020 ───────────────────────────────────────────────────────────
  {
    hero: "Lieutenant Colonel Santosh Babu, MVC",
    award: "Maha Vir Chakra (Posthumous)",
    unit: "16 Bihar Regiment",
    year: "2020 (Galwan Valley Clash)",
    story: "On the night of 15-16 June 2020, Colonel Santosh Babu led his patrol to challenge a Chinese PLA build-up in the Galwan River Valley. Outnumbered and ambushed in freezing river waters at 14,000 feet with clubs and barbed-wire-wrapped weapons, he stood his ground in hand-to-hand combat. He was killed defending India's territory. His regiment's battle cry as they fought: 'Jai Bihar! Jai Hind!'"
  },
  {
    hero: "Naib Subedar Nuduram Soren, MVC",
    award: "Maha Vir Chakra (Posthumous)",
    unit: "16 Bihar Regiment",
    year: "2020 (Galwan Valley Clash)",
    story: "Naib Subedar Nuduram Soren was part of Colonel Santosh Babu's patrol at Galwan on 15 June 2020. Fighting hand-to-hand with PLA troops in a frozen river at night, grievously injured, he continued to fight — allowing wounded comrades to be pulled to safety before succumbing to his wounds. He was posthumously awarded the Maha Vir Chakra for his extraordinary courage."
  },
  {
    hero: "Lieutenant Balwan Singh, MVC",
    award: "Maha Vir Chakra",
    unit: "18 Grenadiers",
    year: "1999 (Kargil War, Tiger Hill Summit)",
    story: "On the night of 3-4 July 1999, Lieutenant Balwan Singh led the 'Ghatak' commando platoon that finally captured Tiger Hill after weeks of failed attempts. He personally destroyed three enemy bunkers in hand-to-hand combat and bayonet charges, securing the summit before dawn. The capture of Tiger Hill was the decisive breakthrough that ended Pakistan's grip on Kargil. Lieutenant Singh later rose to Lieutenant General."
  },
  // ── SIACHEN & HIGH-ALTITUDE WARFARE ─────────────────────────────────────
  {
    hero: "Major Siachen Warriors (Collective)",
    award: "Multiple Gallantry Awards",
    unit: "Indian Army — Siachen Brigade",
    year: "1984–Present (Operation Meghdoot)",
    story: "Since 1984, India has held the world's highest battlefield — the Siachen Glacier at 21,000 feet — through Operation Meghdoot. Temperatures drop to -50°C; more soldiers have been lost to avalanches and altitude sickness than to enemy fire. Yet Indian troops hold these positions 24x7x365. Every soldier posted to Siachen is a hero simply for reporting for duty. As Field Marshal Manekshaw said: 'If a man says he is not afraid of dying, he is either lying or he is a Gurkha.'"
  },
  {
    hero: "Squadron Leader Rakesh Sharma, AC",
    award: "Ashoka Chakra",
    unit: "Indian Air Force / Cosmonaut",
    year: "1984 (India's First Space Mission)",
    story: "When Prime Minister Indira Gandhi asked Squadron Leader Rakesh Sharma — India's first man in space — how India looked from orbit, his reply became immortal: 'Saare Jahan Se Accha.' As an IAF test pilot trained in the most demanding conditions, he carried the tricolour into space aboard Soyuz T-11. He proved that the Indian uniform has no ceiling — its reach extends to the stars."
  },
];

let currentMotivationIndex = 0;
let lastMotivationDateString = "";
let isMotivationRefreshRegistered = false;

function initMotivationOfTheDay() {
  const dateSpan = document.getElementById("motivation-date");
  if (!dateSpan) return;
  
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  dateSpan.innerText = dateString;
  lastMotivationDateString = today.toDateString();
  
  // Calculate daily index based on day of year
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  currentMotivationIndex = dayOfYear % BRAVERY_STORIES.length;
  renderMotivationStory();

  // Register dynamic daily refresh check if not already done
  if (!isMotivationRefreshRegistered) {
    isMotivationRefreshRegistered = true;
    
    // Check periodically if the calendar day has changed
    setInterval(() => {
      const currentTodayString = new Date().toDateString();
      if (currentTodayString !== lastMotivationDateString) {
        initMotivationOfTheDay();
      }
    }, 60000);

    // Also check when tab becomes visible
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        const currentTodayString = new Date().toDateString();
        if (currentTodayString !== lastMotivationDateString) {
          initMotivationOfTheDay();
        }
      }
    });
  }
}

function renderMotivationStory() {
  const heroEl = document.getElementById("motivation-hero");
  const awardEl = document.getElementById("motivation-award");
  const unitEl = document.getElementById("motivation-unit");
  const yearEl = document.getElementById("motivation-year");
  const storyEl = document.getElementById("motivation-story");
  
  if (!heroEl || !awardEl || !unitEl || !yearEl || !storyEl) return;
  
  const storyObj = BRAVERY_STORIES[currentMotivationIndex];
  heroEl.innerText = storyObj.hero;
  awardEl.innerText = storyObj.award;
  unitEl.innerText = storyObj.unit;
  yearEl.innerText = storyObj.year;
  storyEl.innerText = `"${storyObj.story}"`;
}

function showNextMotivation() {
  currentMotivationIndex = (currentMotivationIndex + 1) % BRAVERY_STORIES.length;
  renderMotivationStory();
}

window.initMotivationOfTheDay = initMotivationOfTheDay;
window.showNextMotivation = showNextMotivation;
window.generateDetailedNotesOnDemand = generateDetailedNotesOnDemand;

async function generateDetailedNotesOnDemand(subjectId, chapterId, topicId) {
  const subject = NOTES_DATABASE[subjectId];
  const chapter = subject.chapters.find(c => c.id === chapterId);
  const topic = chapter.topics.find(t => t.id === topicId);
  if (!topic) return;

  const cacheKey = `tac_ai_notes_${topicId}`;
  
  let modal = document.getElementById('ai-detailed-notes-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ai-detailed-notes-modal';
    modal.className = 'cbt-overlay';
    modal.style.display = 'flex';
    modal.style.flexDirection = 'column';
    modal.style.zIndex = '1000';
    modal.style.backgroundColor = 'var(--bg-primary)';
    document.body.appendChild(modal);
  } else {
    modal.style.display = 'flex';
  }

  modal.innerHTML = `
    <div class="cbt-header">
      <div class="cbt-exam-title"> AIDetailed Notes: ${topic.title}</div>
      <div style="display: flex; gap: 8px;">
        <button id="btn-copy-notes" class="btn-secondary" style="padding: 4px 12px; display: none;"> Copy</button>
        <button id="btn-download-notes" class="btn-primary" style="padding: 4px 12px; display: none;">Save PDF</button>
        <button class="btn-secondary" onclick="document.getElementById('ai-detailed-notes-modal').style.display='none'">Close</button>
      </div>
    </div>
    <div style="padding: 32px; max-width: 900px; margin: 0 auto; width: 100%; overflow-y: auto; height: 100%;">
      <div class="panel" id="ai-notes-content-panel" style="margin-bottom: 50px;">
        <h3 style="color: var(--accent); margin-bottom: 16px;">Generating comprehensive explanation...</h3>
        <p style="color: var(--text-secondary);">Please wait while AI constructs the detailed notes from start to end.</p>
        <div style="margin-top:20px; font-size:2rem;"></div>
      </div>
    </div>
  `;

  const contentArea = modal.querySelector('#ai-notes-content-panel');
  const btnCopy = modal.querySelector('#btn-copy-notes');
  const btnDownload = modal.querySelector('#btn-download-notes');

  // Check cache first
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    console.log("Loading AI notes from cache for", topicId);
    renderAiNotes(cachedData, contentArea, btnCopy, btnDownload, topic.title);
    return;
  }

  let syllabusText = "";
  if (window.OFFICIAL_SYLLABUS_DATA && window.OFFICIAL_SYLLABUS_DATA[topicId]) {
    syllabusText = `\n\nEnsure you exhaustively cover the following official UPSC/AFCAT syllabus requirements: ${window.OFFICIAL_SYLLABUS_DATA[topicId]}`;
  }

  let pyqText = "";
  if (window.PYQ_TRENDS_DATA && window.PYQ_TRENDS_DATA[topicId]) {
    pyqText = `\n\nActual Questions, numerical patterns, and conceptual trends from the last 7 years (2020-2026) of UPSC CDS, NDA, and AFCAT exams for this topic: ${window.PYQ_TRENDS_DATA[topicId]}`;
  }

  const prompt = `You are Dronacharya, the legendary military guru and Academic Intelligence Engine of an AI-powered NDA, CDS, AFCAT, CAPF, and UPSC Examination Preparation Platform.
Your task is to provide an EXHAUSTIVE, deep-dive, UPSC-level explanation of the topic "${topic.title}" from the chapter "${chapter.title}" in ${subject.title}. 

Detailed Notes must not be short summaries. Ensure the output is comprehensive (minimum 1000 words, target 1500-2500 words) so a beginner can understand but an advanced aspirant finds it exam-ready.

**CRITICAL VISUAL REQUIREMENT:**
You MUST heavily integrate rich visual elements throughout your explanation to break up text and improve learning.
1. Use at least two placeholder images representing the topic context. Use this exact HTML format: <img src="https://loremflickr.com/800/400/[insert_topic_keyword]" alt="[topic]" style="width:100%; border-radius:8px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
2. Use at least one inline SVG diagram or graph for statistical data, weapon ranges, or mathematical curves. Output the raw <svg> tag directly. Ensure it has a dark theme compatible styling.
3. Use at least one \`\`\`mermaid\`\`\` code block to draw flowcharts, timelines, mindmaps, state diagrams, or hierarchies that help visualize the core concepts.

MANDATORY STRUCTURE: Organize the output strictly into these 19 numbered sections:
1. INTRODUCTION: What it is, why it exists, basic principles, and exam relevance overview.
2. HISTORICAL BACKGROUND: Complete historical context, origins, evolution, and major milestones.
3. CORE CONCEPTS: Breakdown of the topic into individual core concepts with clear definitions, examples, and significance.
4. TECHNICAL EXPLANATION: Detailed mechanisms, equations, scientific or structural parameters, and technical descriptions.
5. IMPORTANT FACTS: Summary of key facts, comparative tables, data, and statistics.
6. EXAM PERSPECTIVE: Focus areas for NDA/CDS/AFCAT/CAPF/UPSC, potential question patterns, high-yield areas.
7. MILITARY RELEVANCE: Strategic, operational, and tactical relevance to the Indian Armed Forces (weapons, combat record, operators, comparisons, if applicable).
8. CURRENT AFFAIRS RELEVANCE: Recent developments, news occurrences, policy decisions, or modern debates.
9. ADVANTAGES: Detailed benefits, strengths, or pros of the concept/system.
10. CHALLENGES: Weaknesses, issues, obstacles, criticisms, or constraints.
11. FUTURE DEVELOPMENTS: Emerging trends, next-generation upgrades, future outlook.
12. IMPORTANT PERSONALITIES: Names of key figures, scientists, military commanders, leaders, or philosophers associated with this topic.
13. IMPORTANT ORGANISATIONS: Key agencies, ministries, research bodies, or international organizations.
14. PREVIOUS YEAR QUESTION REFERENCES: Actual or representative question references from past NDA/CDS/AFCAT/UPSC papers.
15. KEY TAKEAWAYS: Structured list of the 20 most critical facts and summary points.
16. AI GENERATED REVISION NOTES: 1-Page revision sheet, 5-minute revision version, and last-minute exam notes.
17. FLASHCARDS: At least 5 high-yield question-answer pairs for self-testing.
18. MEMORY TRICKS: Mnemonic devices, memory aids, and common exam traps to avoid.
19. FREQUENTLY ASKED QUESTIONS: At least 5 detailed Q&As addressing common student doubts.

MANDATORY KNOWLEDGE EXPANSION LAYER:
At the very beginning or end of your note, include these structured sections:
- CONCEPT TREE:
  * Prerequisites: [List of 2-3 basic concepts needed beforehand, formatted as links like [[Concept Name]]].
  * Advanced Topics: [List of 2-3 next-level concepts to study next, formatted as links like [[Concept Name]]].
- EXAM MAPPING:
  * NDA: [Very High / High / Medium / Low]
  * CDS: [Very High / High / Medium / Low]
  * AFCAT: [Very High / High / Medium / Low]
  * UPSC: [Very High / High / Medium / Low]

SOURCE INTEGRITY: Prioritize authentic, official, primary information (PIB, Ministry of Defence, Supreme Court, Gazette of India, RBI, NITI Aayog, DRDO, ISRO, United Nations, World Bank, etc.) over secondary coaching summaries.

MILITARY & DEFENCE SPECIFICATION:
If this is a defence or military-related topic (e.g. Rafale, Agni, Submarines), you MUST detail:
- Technical specs, historical combat record, weaknesses, global operators, and comparative systems.
- Automatically link critical related subnodes in double square brackets, e.g. [[Meteor Missile]], [[MICA]], [[AESA Radar]], [[Indian Air Force]], [[Dassault Aviation]], [[BVR Combat]].

INTERACTIVE WIKI LINKING:
Throughout the entire response, wrap any important terms, sub-topics, historical dates, organizations, treaties, laws, equations, or doctrines in double square brackets, e.g. [[Constituent Assembly]] or [[Article 19]], so they function as recursive clickable knowledge graph nodes. Generate at least 15-20 such inline links.

Formatting Guidelines for maximum visual appeal:
- Wrap memory aids or mnemonics in: <div class="mnemonic-box"><strong>Mnemonic:</strong> description</div>
- Wrap common errors or traps in: <div class="trap-box"><strong>Common Exam Trap:</strong> explanation of the trap</div>
- Wrap high-level tips in: <div class="strategist-tip"><strong>Strategist Tip:</strong> tip text</div>
- Wrap formulas, equations, variables, or article numbers in <code> tags.
- Use tables (<table>, <tr>, <th>, <td>) to compare concepts or summarize facts.
- Use lists (<ul>, <li>) for multiple points.`;
  const model = 'gemini-flash-latest';
  
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model,
        stream: true,
        contents: [{ parts: [{ text: prompt }] }]
      })
    });
    
    if (!response.ok || !response.body) {
      throw new Error("Failed to fetch stream");
    }

    contentArea.innerHTML = `
      <h3 style="color: var(--accent); margin-bottom: 20px;">Detailed AI Explanation</h3>
      <div id="ai-stream-text" style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;"></div>
    `;
    const streamContainer = document.getElementById('ai-stream-text');
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = "";
    let finalText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;
      
      const lines = buffer.split('\n');
      // Keep the last line in buffer as it could be incomplete
      buffer = lines.pop(); 
      
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const dataStr = line.replace('data: ', '').trim();
            if (dataStr && dataStr !== '[DONE]') {
              const parsed = JSON.parse(dataStr);
              if (parsed.candidates && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
                finalText += parsed.candidates[0].content.parts[0].text;
                // Render the complete accumulated text formatted so far
                streamContainer.innerHTML = formatTextChunk(finalText);
              }
            }
          } catch(e) {
            console.error("[STREAM] Error parsing line:", e);
          }
        }
      }
    }
    
    // Process any remaining data in the buffer
    if (buffer && buffer.startsWith('data: ')) {
      try {
        const dataStr = buffer.replace('data: ', '').trim();
        if (dataStr && dataStr !== '[DONE]') {
          const parsed = JSON.parse(dataStr);
          if (parsed.candidates && parsed.candidates[0].content && parsed.candidates[0].content.parts[0]) {
            finalText += parsed.candidates[0].content.parts[0].text;
          }
        }
      } catch(e) {}
    }

    // Fallback in case of raw JSON response instead of SSE
    if (!finalText) {
      try {
        const parsed = JSON.parse(buffer);
        if (parsed.candidates) finalText = parsed.candidates[0].content.parts[0].text;
      } catch(e) {}
    }
    
    localStorage.setItem(cacheKey, finalText);
    renderAiNotes(finalText, contentArea, btnCopy, btnDownload, topic.title);

  } catch (err) {
    console.error('Gemini API error:', err);
    contentArea.innerHTML = `
      <h3 style="color: var(--danger);">Failed to generate notes</h3>
      <p style="color: var(--text-secondary);">Could not reach the AI service or stream was interrupted. ${err.message}</p>
    `;
  }
}

function formatTextChunk(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`/g, '')
    .replace(/\n/g, '<br/>');
}

function renderAiNotes(text, contentArea, btnCopy, btnDownload, title) {
  contentArea.innerHTML = `
    <h3 style="color: var(--accent); margin-bottom: 20px;">Detailed AI Explanation</h3>
    <div id="ai-final-notes" style="line-height: 1.8; color: var(--text-primary); font-size: 0.95rem;">
      ${parseWikiLinks(text)}
    </div>
  `;
  
  if (window.MathJax && typeof window.MathJax.typeset === 'function') {
    window.MathJax.typeset();
  }
  
  // Show Action Buttons
  btnCopy.style.display = 'block';
  btnCopy.onclick = () => {
    navigator.clipboard.writeText(text);
    btnCopy.innerText = "Copied Copied";
    setTimeout(() => btnCopy.innerText = " Copy", 2000);
  };
  
  // Basic mock for PDF download (In real app, would use html2pdf.js)
  btnDownload.style.display = 'block';
  btnDownload.onclick = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_notes.txt`;
    a.click();
  };
}

window.renderDashboardWeaknessHeatmap = function() {
  const container = document.getElementById("dashboard-weakness-heatmap");
  if (!container) return;
  if (!STATE.weaknessStats || Object.keys(STATE.weaknessStats).length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size: 0.9rem;">No weakness data available yet. Take some CBT mocks!</p>`;
    return;
  }
  
  let html = "";
  for (const [topicId, stats] of Object.entries(STATE.weaknessStats)) {
    if (stats.attempts > 0) {
      const errorRate = stats.incorrect / stats.attempts;
      if (errorRate > 0) {
        let color = "var(--warning)";
        if (errorRate > 0.5) color = "var(--danger)";
        
        // Try to find topic title
        let topicTitle = topicId;
        if (typeof AI_TOPIC_TEMPLATES !== 'undefined' && AI_TOPIC_TEMPLATES[topicId]) {
          topicTitle = AI_TOPIC_TEMPLATES[topicId].topic;
        }
        
        html += `<div style="background: rgba(255,255,255,0.05); border-left: 3px solid ${color}; padding: 6px 12px; border-radius: 4px; font-size: 0.85rem; display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 48%; box-sizing: border-box;">
          <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 70%;" title="${topicTitle}">${topicTitle}</span>
          <span style="color: ${color}; font-weight: bold; font-family: var(--font-mono);">${Math.round(errorRate * 100)}% Error</span>
        </div>`;
      }
    }
  }
  
  if (html === "") {
    container.innerHTML = `<p style="color:var(--text-muted); font-size: 0.9rem;">Great job! No major weaknesses detected.</p>`;
  } else {
    container.innerHTML = html;
  }
};

window.updateDashboardSrsQueue = function() {
  const countEl = document.getElementById("srs-due-count");
  if (!countEl) return;
  
  let dueCount = 0;
  const now = Date.now();
  if (STATE.srsData) {
    for (const [topicId, data] of Object.entries(STATE.srsData)) {
      if (data.nextReview && data.nextReview <= now) {
        dueCount++;
      }
    }
  }
  countEl.innerText = dueCount;
  countEl.style.color = dueCount > 0 ? "var(--warning)" : "var(--info)";
};

let currentSrsQueue = [];
let currentSrsIndex = 0;

window.launchSrsReview = function() {
  if (!STATE.cbtMistakesDeck || STATE.cbtMistakesDeck.length === 0) {
    alert("No mistakes in the vault! Excellent work.");
    return;
  }
  
  // Clone to current queue, up to 20 items per session
  currentSrsQueue = [...STATE.cbtMistakesDeck].sort(() => 0.5 - Math.random()).slice(0, 20);
  currentSrsIndex = 0;
  
  document.getElementById('srs-review-modal').style.display = 'flex';
  renderCurrentSrsItem();
};

function renderCurrentSrsItem() {
  const item = currentSrsQueue[currentSrsIndex];
  
  let topicTitle = item.topicId ? item.topicId.replace(/-/g, ' ') : "MISTAKE VAULT";
  if (topicTitle.length > 25) topicTitle = topicTitle.substring(0, 25) + '...';
  
  document.getElementById('srs-progress').innerText = `${currentSrsIndex + 1} / ${currentSrsQueue.length}`;
  document.getElementById('srs-topic-label').innerText = topicTitle;
  document.getElementById('srs-question-text').innerHTML = item.q;
  document.getElementById('srs-answer-text').innerHTML = item.a;
  
  // Reset UI state
  document.getElementById('srs-answer-container').style.display = 'none';
  document.getElementById('srs-controls-reveal').style.display = 'block';
  document.getElementById('srs-controls-grade').style.display = 'none';
}

window.revealSrsAnswer = function() {
  document.getElementById('srs-answer-container').style.display = 'block';
  document.getElementById('srs-controls-reveal').style.display = 'none';
  document.getElementById('srs-controls-grade').style.display = 'flex';
};

window.gradeSrsItem = function(quality) {
  const item = currentSrsQueue[currentSrsIndex];
  
  if (quality >= 4) {
    // Easy or Good: Mastered this mistake, remove from vault
    STATE.cbtMistakesDeck = STATE.cbtMistakesDeck.filter(m => m.q !== item.q);
    saveState();
  } else {
    // Keep in vault
  }

  // Update stats display instantly
  const srsCountEl = document.getElementById("srs-due-count");
  if (srsCountEl) {
    srsCountEl.innerText = STATE.cbtMistakesDeck.length;
  }
  
  currentSrsIndex++;
  
  if (currentSrsIndex < currentSrsQueue.length) {
    renderCurrentSrsItem();
  } else {
    document.getElementById('srs-review-modal').style.display = 'none';
    alert("SRS Review Complete! Great job strengthening your tactical memory.");
  }
};

// ==========================================