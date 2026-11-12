// =============================================================================
// CURRENT AFFAIRS DATA — SINGLE SOURCE OF TRUTH
// =============================================================================
// EXAM CYCLE STRUCTURE:
//   Cycle 1: April → September  (covers NDA I, CDS I, AFCAT I exams)
//   Cycle 2: October → March    (covers NDA II, CDS II, AFCAT II exams)
//
// The Monthly Feed in the app automatically shows only months within the
// current cycle — no manual filtering needed.
// =============================================================================

window.CA_META = {
  examCycle: "CDS 1/NDA 1 2027 & AFCAT 1 2027",
  lastRefreshed: "November 2, 2026",
  coverageFrom: "August 2026",
  coverageTo: "April 2027",
  cycleNote: "CDS/NDA Cycle: Sep 2026 — Apr 2027 | AFCAT Cycle: Aug 2026 — Jan 2027",
};

// =============================================================================
// SECTION A: PM VISITS & BILATERAL AGREEMENTS / DEFENCE SUMMITS
// =============================================================================
window.CA_VISITS_DATA = [
  {
    visit: "Exercise VAJRA PRAHAR (15th Edition — India-USA Special Forces) & Exercise GARUD SHAKTI (9th Edition — India-Indonesia)",
    period: "November 2026",
    purpose: "Simultaneous deployment of Indian Army Parachute Regiment (Special Forces) contingents to Orchard Combat Training Centre (Idaho, USA) and Cijantung (Jakarta, Indonesia) on November 1–2.",
    deals: "Vajra Prahar (with US Green Berets) focuses on semi-desert joint special operations, UAS integration, and JTAC air support; Garud Shakti (with Indonesian Kopassus) focuses on jungle warfare and sub-conventional counter-terrorism."
  },
  {
    visit: "ISRO Launches India's First Analog Space Mission ('Hab-1') at Leh, Ladakh",
    period: "November 2026",
    purpose: "Simulating life in an interplanetary Lunar/Martian base using an inflatable habitat (Hab-1) in the cold, arid, high-altitude terrain of Leh (kicked off November 1).",
    deals: "Jointly developed by ISRO's Human Spaceflight Centre (HSFC), AAKA Space Studio, University of Ladakh, and IIT Bombay to validate life-support, psychological resilience, and robotics ahead of Gaganyaan and the Bharatiya Antariksha Station (2035)."
  },
  {
    visit: "PM Modi & Spanish PM Pedro Sánchez Inaugurate Tata-Airbus C-295 Aircraft Complex in Vadodara",
    period: "October 2026",
    purpose: "Joint inauguration of India's first private-sector military aircraft Final Assembly Line (FAL) at the Tata Advanced Systems Limited (TASL) campus in Vadodara, Gujarat (28 October).",
    deals: "Under the ₹21,935 crore contract for 56 C-295 tactical transport aircraft (replacing IAF's legacy Avro HS-748 fleet), 16 aircraft are delivered in fly-away condition from Seville, Spain, while 40 are manufactured in India by TASL in Vadodara. The first Made-in-India C-295 will roll out by September 2026/2028."
  },
  {
    visit: "German Chancellor Olaf Scholz's Official Visit to India & 7th India-Germany IGC",
    period: "October 2026",
    purpose: "Co-chairing the 7th Intergovernmental Consultations (IGC) in New Delhi under the theme 'Growing Together with Innovation, Mobility and Sustainability' and visiting German naval ships in Goa (24–26 October).",
    deals: "Signed the Agreement on Exchange and Mutual Protection of Classified Information, a Mutual Legal Assistance Treaty (MLAT) in Criminal Matters, the Indo-German Green Hydrogen Roadmap, and expanded skilled Indian workforce visas from 20,000 to 90,000 annually. German Navy frigate FGS Baden-Württemberg and combat support ship FGS Frankfurt am Main made a historic port call at Mormugao Port, Goa."
  },
  {
    visit: "India–China LAC Patrolling & Disengagement Agreement (Depsang & Demchok)",
    period: "October 2026",
    purpose: "Historic diplomatic and military breakthrough restoring pre-April 2020 patrolling and grazing rights along the Line of Actual Control (LAC) in Eastern Ladakh (21 October).",
    deals: "Finalized through the 31st WMCC (Working Mechanism for Consultation and Coordination) and 21 rounds of Corps Commander-level talks. Resolved the last two remaining friction points at Depsang Plains (Y-Junction, Patrol Points 10 to 13) and Demchok (Charding Ninglung Nallah), paving the way for the first formal bilateral summit between PM Modi and President Xi Jinping in 5 years on the sidelines of the Kazan BRICS Summit."
  },
  {
    visit: "Prime Minister Modi's Visit to Kazan, Russia (16th BRICS Summit)",
    period: "October 2026",
    purpose: "Participating in the 16th BRICS Summit under the theme 'Strengthening Multilateralism for Just Global Development and Security' (22–24 October).",
    deals: "Adopted the landmark 'Kazan Declaration'. First summit featuring newly inducted full members (Egypt, Ethiopia, Iran, UAE) and agreement on the 'BRICS Partner Country' category (13 nations). Covered local currency trade settlements, BRICS Clear cross-border depository, BRICS Grain Exchange, and the formal Modi-Xi bilateral dialogue."
  },
  {
    visit: "EAM Dr. S. Jaishankar's Historic Visit to Islamabad (23rd SCO CHG Meeting)",
    period: "October 2026",
    purpose: "Representing India at the 23rd Council of Heads of Government (CHG) of the Shanghai Cooperation Organisation (SCO) in Islamabad, Pakistan (15–16 October).",
    deals: "First visit by an Indian External Affairs Minister to Pakistan in nearly nine years. Emphasized the 'Three Evils' (terrorism, separatism, extremism) under SCO-RATS (Regional Anti-Terrorist Structure, HQ Tashkent) and opposed unilateral connectivity projects (CPEC) violating territorial sovereignty."
  },
  {
    visit: "Admiral Samuel Paparo's (Commander US INDOPACOM) Visit to India",
    period: "October 2026",
    purpose: "Expanding Indo-US bilateral defence cooperation, operational interoperability, and maritime domain awareness across the Indo-Pacific.",
    deals: "Followed the signing of the $3.99 billion Letter of Offer and Acceptance (LoA) for 31 MQ-9B Predator drones (15 SeaGuardians for Navy, 8 SkyGuardians each for Army & IAF) and establishment of a Global MRO facility in India under iCET."
  },
  {
    visit: "CDS General Anil Chauhan's Strategic Visit to Algeria",
    period: "October 2026",
    purpose: "Following up on President Droupadi Murmu's first-ever Indian Presidential State Visit to Algeria to elevate bilateral defence and aerospace ties.",
    deals: "Signed a historic Bilateral Defence Cooperation MoU covering military training exchanges, maritime security in the Mediterranean/North Africa, and potential defence exports including Pinaka MBRL, BrahMos, and Dornier aircraft."
  },
  {
    visit: "Polish Prime Minister Donald Tusk's Strategic Engagement with India",
    period: "October 2026",
    purpose: "Elevating India-Poland relations to a Strategic Partnership with a focus on a 5-year Action Plan (2024–2028) and defence modernisation.",
    deals: "Exploration of joint ventures for T-72/BMP armored vehicle overhaul, air defence sensors, and cybersecurity. Poland serves as India's largest trade and logistics partner in Central Europe."
  },
  {
    visit: "Japanese Ground Self-Defense Force (JGSDF) Delegation to India",
    period: "October 2026",
    purpose: "Engaging with the Indian Army and DRDO to explore joint technological development and ground combat interoperability.",
    deals: "Strengthening the Special Strategic and Global Partnership, focusing on unmanned ground vehicles (UGVs), AI-driven electronic warfare, and joint winter warfare training ahead of Exercise Dharma Guardian."
  },
  {
    visit: "CDS General Anil Chauhan's Strategic Visit to the United Kingdom",
    period: "October 2026",
    purpose: "Deepening the India-UK defence partnership, focusing on carrier battle group interoperability and electric propulsion for naval vessels.",
    deals: "Advancing cooperation on the Complex Weapons Framework, jet engine technology cooperation (Rolls-Royce & DRDO for AMCA Mk-II), and Integrated Full Electric Propulsion (IFEP) for next-generation Indian Navy warships."
  },
  {
    visit: "Defence Minister Rajnath Singh's Visit to Sri Lanka",
    period: "September 2026",
    purpose: "Signing milestone bilateral defence MoUs and reinforcing maritime domain awareness in the Palk Strait and Gulf of Mannar.",
    deals: "Signed MoUs on maritime security infrastructure, grant of spare parts for Sri Lankan Navy patrol craft, and technical assistance for hydrographic surveys aligned with India's SAGAR doctrine."
  },
  {
    visit: "COAS General Dhiraj Seth's Official Visit to Russia",
    period: "September 2026",
    purpose: "Reviewing ongoing defence contracts, spare parts supply chains for T-90 Bhishma tanks, and joint military exercise frameworks.",
    deals: "Ensured uninterrupted delivery schedules for remaining S-400 Triumf air defence regiments, INS Tushil stealth frigate commissioning preparations, and licensed domestic production of AK-203 assault rifles at Korwa (Amethi)."
  },
  {
    visit: "Prime Minister Modi's Visit to Jakarta, Indonesia",
    period: "August 2026",
    purpose: "Deepening the Comprehensive Strategic Partnership under India's 'Act East' policy and the Indo-Pacific Oceans Initiative (IPOI).",
    deals: "Explored coastal surveillance integration, potential export of BrahMos supersonic cruise missiles to the Indonesian Navy, and joint maritime patrols across the Malacca and Sunda Straits."
  },
  {
    visit: "Inaugural India-Kuwait Joint Defence Committee (JDC) Meeting",
    period: "August 2026",
    purpose: "Establishing an institutionalized bilateral mechanism for regular defence dialogue and joint training exchanges.",
    deals: "Formalized defence medical cooperation, maritime intelligence sharing, and reciprocal logistical support agreements between the Indian Navy and Kuwait Naval Force."
  },
  {
    visit: "BEL Artillery Electronic Fuses Contract",
    period: "June 2026",
    purpose: "Ministry of Defence ₹5,336 crore contract with Bharat Electronics Limited (BEL).",
    deals: "Complete domestic manufacture of modern proximity and electronic fuses for medium-to-heavy artillery (155mm Dhanush, K9 Vajra, ATAGS), ending foreign import dependency under Make in India."
  },
  {
    visit: "Indo-French Naval Exercise 'Varuna' (22nd Edition)",
    period: "June 2026",
    purpose: "High-tempo bilateral naval exercise in the Mediterranean and Arabian Sea.",
    deals: "Joint drills between French aircraft carrier battle groups and Indian Navy stealth frigate INS Tabar, focusing on advanced anti-submarine warfare (ASW) and air combat simulations."
  }
];

// =============================================================================
// SECTION B: AWARDS & HONOURS (2026 NOBEL PRIZES & NATIONAL CIVIC/GALLANTRY)
// =============================================================================
window.CA_AWARDS_DATA = [
  // --- Nobel Prizes 2026 (Announced October 2026) ---
  {
    awardName: "Nobel Prize in Physiology or Medicine 2026",
    categoryOfWork: "Physiology / Genetics",
    workName: "Discovery of microRNA and its role in post-transcriptional gene regulation",
    recipient: "Victor Ambros & Gary Ruvkun",
    recipientCountry: "United States",
    givingCountry: "Sweden (Nobel Assembly at Karolinska Institute)"
  },
  {
    awardName: "Nobel Prize in Physics 2026",
    categoryOfWork: "Physics / Artificial Intelligence",
    workName: "Foundational discoveries and inventions enabling machine learning with artificial neural networks (Hopfield associative memory & Boltzmann machines)",
    recipient: "John J. Hopfield & Geoffrey E. Hinton",
    recipientCountry: "USA / Canada-UK",
    givingCountry: "Sweden (Royal Swedish Academy of Sciences)"
  },
  {
    awardName: "Nobel Prize in Chemistry 2026",
    categoryOfWork: "Computational Biology & Biochemistry",
    workName: "Computational protein design (David Baker) and protein 3D structure prediction via AlphaFold2 (Demis Hassabis & John Jumper)",
    recipient: "David Baker (1/2), Demis Hassabis (1/4), John M. Jumper (1/4)",
    recipientCountry: "USA & United Kingdom",
    givingCountry: "Sweden (Royal Swedish Academy of Sciences)"
  },
  {
    awardName: "Nobel Prize in Literature 2026",
    categoryOfWork: "Literature",
    workName: "Intense poetic prose that confronts historical traumas and exposes the fragility of human life (Author of 'The Vegetarian', 'Human Acts')",
    recipient: "Han Kang (First South Korean writer and First Asian woman)",
    recipientCountry: "South Korea",
    givingCountry: "Sweden (Swedish Academy)"
  },
  {
    awardName: "Nobel Peace Prize 2026",
    categoryOfWork: "Peace & Nuclear Disarmament",
    workName: "Efforts to achieve a world free of nuclear weapons and demonstrating through witness testimony (Hibakusha) that nuclear weapons must never be used again",
    recipient: "Nihon Hidankyo (Japan Confederation of A- and H-Bomb Sufferers Organizations)",
    recipientCountry: "Japan",
    givingCountry: "Norway (Norwegian Nobel Committee, Oslo)"
  },
  {
    awardName: "Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 2026",
    categoryOfWork: "Economic Sciences / Institutional Economics",
    workName: "Studies of how societal institutions are formed and affect national prosperity (Inclusive vs. Extractive institutions; 'Why Nations Fail')",
    recipient: "Daron Acemoglu, Simon Johnson & James A. Robinson",
    recipientCountry: "United States",
    givingCountry: "Sweden (Royal Swedish Academy of Sciences)"
  },

  // --- International & National Awards (October 2026) ---
  {
    awardName: "54th Dadasaheb Phalke Lifetime Achievement Award",
    categoryOfWork: "Indian Cinema & Cultural Arts",
    workName: "Iconic contribution to Indian Cinema across 350+ films (Debut: 'Mrigayaa' 1976; presented at 70th National Film Awards on Oct 8)",
    recipient: "Mithun Chakraborty",
    recipientCountry: "India",
    givingCountry: "India (Ministry of Information and Broadcasting)"
  },
  {
    awardName: "IAF 'Best Astronaut Award' / International Astronautical Federation World Space Award",
    categoryOfWork: "Space Exploration & Lunar Science",
    workName: "Historic achievement of Chandrayaan-3 soft-landing near the Lunar South Pole ('Shiv Shakti Point'); presented at 75th IAC in Milan, Italy (Oct 14)",
    recipient: "ISRO (Received by Chairman Dr. S. Somanath)",
    recipientCountry: "India",
    givingCountry: "International Astronautical Federation (Paris / Milan)"
  },
  {
    awardName: "Sakharov Prize for Freedom of Thought 2026",
    categoryOfWork: "Human Rights & Democratic Freedom",
    workName: "Brave struggle for free, fair, and democratic restoration in Venezuela (Announced October 24)",
    recipient: "María Corina Machado & Edmundo González Urrutia",
    recipientCountry: "Venezuela",
    givingCountry: "European Parliament (Strasbourg)"
  },
  {
    awardName: "68th Ballon d'Or Awards 2026 (Men's & Women's Football)",
    categoryOfWork: "International Sports (Football)",
    workName: "Best Male and Female Footballers in the World (Ceremony at Théâtre du Châtelet, Paris on Oct 28)",
    recipient: "Rodri (Men's — Manchester City/Spain) & Aitana Bonmatí (Women's — Barcelona/Spain)",
    recipientCountry: "Spain",
    givingCountry: "France Football / UEFA (Paris)"
  },
  {
    awardName: "Major Dhyan Chand Khel Ratna Award (National Sports Awards)",
    categoryOfWork: "Elite Sports Excellence",
    workName: "Outstanding sporting performance in World Chess Championship, Paris Olympics & Paralympics",
    recipient: "D. Gukesh (Chess), Harmanpreet Singh (Hockey), Manu Bhaker (Shooting), Praveen Kumar (Para-Athletics)",
    recipientCountry: "India",
    givingCountry: "India (Ministry of Youth Affairs and Sports)"
  },
  {
    awardName: "Padma Vibhushan 2026",
    categoryOfWork: "Art (Cinema)",
    workName: "Exceptional contribution to Indian Cinema over six decades",
    recipient: "Dharmendra Singh Deol (Posthumous)",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Vibhushan 2026",
    categoryOfWork: "Public Affairs & Law",
    workName: "Distinguished judicial service as former Supreme Court Judge",
    recipient: "Justice K.T. Thomas",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Vibhushan 2026",
    categoryOfWork: "Art (Hindustani Classical Music)",
    workName: "Pioneering contribution to the Hindustani Classical Violin",
    recipient: "Dr. N. Rajam",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Vibhushan 2026",
    categoryOfWork: "Public Affairs",
    workName: "Dedicated public leadership as former Chief Minister of Kerala",
    recipient: "V.S. Achuthanandan (Posthumous)",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Bhushan 2026",
    categoryOfWork: "Art (Playback Singing)",
    workName: "Exceptional contribution to Indian film music and classical vocals",
    recipient: "Alka Yagnik & Udit Narayan",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  }
];

// =============================================================================
// SECTION C: TRADE DEALS & FREE TRADE AGREEMENTS (FTAs)
// =============================================================================
window.CA_FTA_DATA = [
  {
    deal: "India–Germany Strategic & Economic Package (7th IGC)",
    status: "Signed October 25, 2026 (New Delhi)",
    scope: "Indo-German Green Hydrogen Roadmap, Mutual Protection of Classified Information, MLAT, and increasing skilled Indian professional visas from 20,000 to 90,000 per year.",
    significance: "Anchors India's defence technology, submarine co-production (Project 75I contender TKMS), and clean energy partnership with Europe's largest economy."
  },
  {
    deal: "India–EFTA TEPA (Trade & Economic Partnership Agreement)",
    status: "Concluded & In Force",
    scope: "Free trade agreement with Iceland, Liechtenstein, Norway, and Switzerland; legally binding commitment of $100 billion FDI into India over 15 years creating 1 million direct jobs.",
    significance: "First modern trade agreement in the world linking market access to a legally binding FDI and job-creation target in Indian manufacturing, pharmaceuticals, and precision engineering."
  },
  {
    deal: "India–UAE CEPA & Bilateral Investment Treaty (BIT)",
    status: "In Force & Expanding",
    scope: "Bilateral trade surpassed $85 billion; enables zero-duty access for 90%+ of Indian exports and operationalizes the INR-AED Local Currency Settlement (LCS) system.",
    significance: "Gateway for Indian defence hardware, electronics, and agricultural products into the GCC and IMEC (India-Middle East-Europe Economic Corridor)."
  },
  {
    deal: "India–Australia ECTA & CECA Negotiations",
    status: "ECTA In Force; CECA Advanced Rounds",
    scope: "Covers 100% tariff lines for Indian exports to Australia; provides duty-free entry for critical minerals (lithium, cobalt, rare earths) for defence and EVs.",
    significance: "Critical raw materials security partner under the Quad; strengthens bilateral supply chain resilience against rare earth monopolies."
  },
  {
    deal: "India–ASEAN Trade in Goods Agreement (AITIGA) Review",
    status: "Active Renegotiation (Vientiane Summit Mandate)",
    scope: "Comprehensive modernization of the 2009 FTA announced at the 21st ASEAN-India Summit in Vientiane, Laos (October 2026) to eliminate non-tariff barriers and trade asymmetry.",
    significance: "Set for completion by 2025/2026 to boost Indian manufacturing exports, digital public infrastructure (UPI), and semiconductor supply chains across Southeast Asia."
  },
  {
    deal: "India–Oman CEPA (Comprehensive Economic Partnership Agreement)",
    status: "Final Negotiations Stage",
    scope: "Duty reductions on fertilizers, petrochemicals, electronics, and engineering products alongside strategic port access at Duqm.",
    significance: "Strengthens Indian strategic footprint in the Western Indian Ocean and Strait of Hormuz; guarantees uninterrupted energy and urea supply chains."
  },
  {
    deal: "India–United Kingdom FTA",
    status: "Advanced Negotiations",
    scope: "Tariff reductions on automotive, textiles, and spirits; business mobility and social security totalization agreement for Indian skilled professionals.",
    significance: "Major milestone linking Indian services, defence co-development (electric propulsion & jet engines), and manufacturing with the UK."
  },
  {
    deal: "India–European Union Broad-based Trade and Investment Agreement (FTA)",
    status: "Active Negotiations (Round 9)",
    scope: "Addresses market access, Carbon Border Adjustment Mechanism (CBAM), Rules of Origin, digital trade, and Geographical Indications (GI).",
    significance: "EU is India's largest trading partner block in goods; critical for integrating Indian industries with European aerospace, green hydrogen, and semiconductors."
  }
];

// =============================================================================
// SECTION D: IMPORTANT DATES & THEMES (WITH UPSC/DEFENCE EXAM CONTEXT)
// =============================================================================
window.CA_DATES_DATA = [
  // --- JANUARY ---
  { date: "Jan 9",  name: "Pravasi Bharatiya Divas", theme: "Diaspora's Contribution to a Viksit Bharat", significance: "Marks the return of Mahatma Gandhi from South Africa to Mumbai on 9 January 1915, honoring the overseas Indian community." },
  { date: "Jan 12", name: "National Youth Day", theme: "Arise, Awake, and Realise the Power You Hold", significance: "Birth anniversary of Swami Vivekananda (1863), celebrating youth leadership and nation-building." },
  { date: "Jan 15", name: "Indian Army Day (78th)", theme: "In Service of the Nation", significance: "Honors Field Marshal K.M. Cariappa taking over as the first Indian Commander-in-Chief from General Sir Francis Butcher in 1949." },
  { date: "Jan 23", name: "Parakram Diwas", theme: "Netaji: Architect of India's Freedom Struggle", significance: "Birth anniversary of Netaji Subhas Chandra Bose (1897), founder of the Azad Hind Fauj (INA)." },
  { date: "Jan 25", name: "National Voters' Day", theme: "Nothing Like Voting, I Vote For Sure", significance: "Marks the foundation day of the Election Commission of India (25 January 1950) under Article 324." },
  { date: "Jan 26", name: "Republic Day", theme: "Viksit Bharat & Bharat - Loktantra ki Matruka", significance: "Marks the enforcement of the Constitution of India in 1950." },

  // --- FEBRUARY ---
  { date: "Feb 1",  name: "Indian Coast Guard Raising Day", theme: "Vayam Rakshamah (We Protect)", significance: "Commemorates the establishment of the ICG in 1977 (Rustamji Committee recommendation; Coast Guard Act 1978)." },
  { date: "Feb 2",  name: "World Wetlands Day", theme: "Wetlands and Human Wellbeing", significance: "Marks the signing of the Ramsar Convention on Wetlands in Iran on 2 February 1971." },
  { date: "Feb 28", name: "National Science Day", theme: "Indigenous Technologies for Viksit Bharat", significance: "Marks the discovery of the Raman Effect by Sir C.V. Raman in 1928 (1930 Nobel Prize in Physics)." },

  // --- MARCH ---
  { date: "Mar 3",  name: "World Wildlife Day", theme: "Connecting People and Planet: Exploring Digital Innovation in Wildlife Conservation", significance: "Marks the adoption of the CITES treaty in 1973 protecting endangered flora and fauna." },
  { date: "Mar 8",  name: "International Women's Day", theme: "Invest in Women: Accelerate Progress", significance: "Celebrates social, economic, and defence achievements of women (including permanent commission & NDA entry)." },
  { date: "Mar 22", name: "World Water Day", theme: "Water for Peace", significance: "Advocates for sustainable management of freshwater resources (SDG 6)." },

  // --- APRIL ---
  { date: "Apr 7",  name: "World Health Day", theme: "My Health, My Right", significance: "Marks the founding of the World Health Organization (WHO) in 1948." },
  { date: "Apr 21", name: "National Civil Services Day", theme: "Empowering Citizens, Reaching the Last Mile", significance: "Marks Sardar Vallabhbhai Patel's 1947 address at Metcalfe House calling civil servants the 'Steel Frame of India'." },
  { date: "Apr 22", name: "World Earth Day", theme: "Planet vs. Plastics", significance: "Global campaign demanding a 60% reduction in plastic production by 2040." },

  // --- MAY ---
  { date: "May 11", name: "National Technology Day", theme: "From Schools to Startups: Igniting Young Minds to Innovate", significance: "Marks the 1998 Pokhran-II nuclear tests (Operation Shakti) and maiden flight of Hansa-3 aircraft." },
  { date: "May 29", name: "International Day of UN Peacekeepers", theme: "Fit for the Future, Building Better Together", significance: "Honors UN Blue Helmets; India is one of the largest cumulative troop contributors (~2.9 lakh personnel)." },

  // --- JUNE ---
  { date: "Jun 5",  name: "World Environment Day", theme: "Land Restoration, Desertification and Drought Resilience", significance: "Commemorates the 1972 Stockholm Conference; aligned with UNCCD COP16." },
  { date: "Jun 21", name: "International Day of Yoga (10th)", theme: "Yoga for Self and Society", significance: "Adopted by UNGA Resolution 69/131 in 2014; June 21 is the Summer Solstice in the Northern Hemisphere." },

  // --- JULY ---
  { date: "Jul 11", name: "World Population Day", theme: "Leave No One Behind, Count Everyone", significance: "Raises awareness on global demographic trends and inclusive census data." },
  { date: "Jul 26", name: "Kargil Vijay Diwas (25th Rajat Jayanti)", theme: "Nation First, Always First", significance: "Commemorates India's victory in Operation Vijay (1999); PM Modi carried out first blast of Shinkun La Tunnel (15,800 ft) on this day." },

  // --- AUGUST ---
  { date: "Aug 15", name: "Independence Day", theme: "Viksit Bharat @ 2047", significance: "Celebrates India's independence and the roadmap to become a developed nation by 2047." },
  { date: "Aug 23", name: "National Space Day (1st / Annual)", theme: "Touching Lives while Touching the Moon: India's Space Saga", significance: "Commemorates Chandrayaan-3's Vikram lander soft landing at Shiv Shakti Point on the Lunar South Pole." },
  { date: "Aug 29", name: "National Sports Day", theme: "Sport for the Promotion of Peaceful and Inclusive Societies", significance: "Birth anniversary of hockey legend Major Dhyan Chand (1905)." },

  // --- SEPTEMBER ---
  { date: "Sep 5",  name: "National Teachers' Day", theme: "Empowering Educators for a Sustainable Future", significance: "Birth anniversary of Bharat Ratna Dr. Sarvepalli Radhakrishnan." },
  { date: "Sep 15", name: "Engineers' Day", theme: "Engineering Solutions for a Sustainable World", significance: "Birth anniversary of Bharat Ratna Sir M. Visvesvaraya (Krishnaraja Sagar Dam architect)." },
  { date: "Sep 16", name: "World Ozone Day", theme: "Montreal Protocol: Advancing Climate Action", significance: "Marks the 1987 Montreal Protocol and 2016 Kigali Amendment phasing down HFCs." },
  { date: "Sep 27", name: "World Tourism Day", theme: "Tourism and Peace", significance: "Promotes sustainable cultural and heritage tourism." },

  // --- OCTOBER (CURRENT CYCLE HIGH YIELD) ---
  { date: "Oct 2",  name: "Gandhi Jayanti & Int. Day of Non-Violence", theme: "Swachhata Hi Seva: Swabhav Swachhata, Sanskar Swachhata", significance: "Birth anniversary of Mahatma Gandhi and Lal Bahadur Shastri; marked 10 years of the Swachh Bharat Mission (2014–2024/26)." },
  { date: "Oct 7",  name: "World Cotton Day", theme: "Cotton for Good", significance: "Highlights India's 'Kasturi Cotton Bharat' branding initiative and sustainable textile value chain." },
  { date: "Oct 8",  name: "Indian Air Force Day (92nd Anniversary)", theme: "Bharatiya Vayu Sena: Saksham, Sashakt, Atmanirbhar (Capable, Empowered, Self-Reliant)", significance: "Commemorates the establishment of the IAF on 8 October 1932; marked by mega airshow at Marina Beach, Chennai and parade at Tambaram AFS." },
  { date: "Oct 9",  name: "Territorial Army Raising Day (75th)", theme: "Savdhani Va Shoorta (Vigilance and Valour)", significance: "Raised by first Indian Governor-General C. Rajagopalachari on 9 October 1949 as the Citizens' Army and second line of defence." },
  { date: "Oct 10", name: "World Mental Health Day", theme: "It is Time to Prioritize Mental Health in the Workplace", significance: "Raises awareness on psychological resilience and stress mitigation." },
  { date: "Oct 11", name: "International Day of the Girl Child", theme: "Girls' Vision for the Future", significance: "Advocates for STEM education, equal opportunities, and leadership for girl children globally." },
  { date: "Oct 13", name: "International Day for Disaster Risk Reduction", theme: "Empowering the Next Generation for a Resilient Future", significance: "Aligned with the UN Sendai Framework for Disaster Risk Reduction (2015–2030) and CDRI." },
  { date: "Oct 14", name: "World Standards Day", theme: "Shared Vision for a Better World: Spotlight on SDG 9", significance: "Honors BIS and global standardization bodies building resilient industry and infrastructure." },
  { date: "Oct 15", name: "World Students' Day", theme: "Empowering Youth through Innovation and Education", significance: "Birth anniversary of Bharat Ratna Dr. A.P.J. Abdul Kalam ('Missile Man of India' & architect of IGMDP)." },
  { date: "Oct 16", name: "World Food Day", theme: "Right to Foods for a Better Life and a Better Future", significance: "Marks the founding of the UN Food and Agriculture Organization (FAO, HQ Rome) on 16 October 1945." },
  { date: "Oct 17", name: "International Day for the Eradication of Poverty", theme: "Ending Social and Institutional Maltreatment by Acting Together for Just, Peaceful, and Inclusive Societies", significance: "Highlights multidimensional poverty reduction (SDG 1) and NITI Aayog MPI findings." },
  { date: "Oct 21", name: "Police Commemoration Day", theme: "Honouring the Martyrs of Hot Springs", significance: "Commemorates 10 CRPF jawans led by SI Karam Singh who made the supreme sacrifice at Hot Springs, Ladakh on 21 October 1959 against Chinese PLA forces." },
  { date: "Oct 24", name: "United Nations Day & Indo-Tibetan Border Police (ITBP) Raising Day", theme: "Shaurya – Dridhata – Karma Nishtha (Valour, Determination, Devotion to Duty)", significance: "Marks the 1945 UN Charter enforcement and the raising of ITBP on 24 October 1962 under the CRPF Act / ITBP Act 1992 to guard the 3,488 km India-China LAC." },
  { date: "Oct 26", name: "Jammu & Kashmir Accession Day & Vigilance Awareness Week", theme: "Culture of Integrity for Nation's Prosperity", significance: "Marks the signing of the Instrument of Accession by Maharaja Hari Singh on 26 October 1947; Vigilance Week honors Sardar Patel's birth week (CVC)." },
  { date: "Oct 27", name: "78th Infantry Day (Shaurya Diwas)", theme: "Queen of the Battle — Ultimate in Combat", significance: "Commemorates the historic air-landing of the 1st Battalion of the Sikh Regiment (commanded by Lt Col Dewan Ranjit Rai) at Srinagar airfield on 27 October 1947 to repel Pakistani invaders." },
  { date: "Oct 29", name: "9th Ayurveda Day", theme: "Ayurveda Innovation for Global Health", significance: "Observed on Dhanvantari Jayanti; PM Modi launched Ayushman Vay Vandana health coverage for all senior citizens aged 70+ years." },
  { date: "Oct 31", name: "Rashtriya Ekta Diwas (National Unity Day) & World Cities Day", theme: "Youth Climate Changemakers: Catalysing Local Action for Urban Sustainability", significance: "150th Birth Anniversary year celebration of Bharat Ratna Sardar Vallabhbhai Patel (1875–1950), architect of the integration of 565 princely states." },

  // --- NOVEMBER (CURRENT CYCLE HIGH YIELD) ---
  { date: "Nov 1",  name: "State Formation Day (Rajyotsava Day — 8 States & 5 UTs)", theme: "Linguistic Harmony and Cooperative Federalism", significance: "Marks the enforcement of the States Reorganisation Act, 1956 (7th Constitutional Amendment) based on the Fazl Ali Commission (Karnataka, Kerala, AP, MP, Chhattisgarh, Punjab, Haryana, Tamil Nadu)." },
  { date: "Nov 2",  name: "International Day to End Impunity for Crimes Against Journalists", theme: "Safety of Journalists in Crises and Emergencies", significance: "Adopted by UNGA Resolution 68/163 to protect press freedom and war correspondents globally." },
  { date: "Nov 5",  name: "World Tsunami Awareness Day", theme: "Fighting Inequality for a Resilient Future", significance: "Instituted by the UN in 2015; India's INCOIS (Hyderabad) operates the Indian Tsunami Early Warning Centre (ITEWC)." }
];

// =============================================================================
// SECTION E: SPORTS (2026 MAJOR CHAMPIONSHIPS & ACHIEVEMENTS)
// =============================================================================
window.CA_SPORTS_DATA = [
  {
    event: "45th FIDE Chess Olympiad Budapest 2026",
    winner: "India (Historic Double Gold — Open and Women's Categories)",
    country: "India (Open: D. Gukesh, Praggnanandhaa, Arjun Erigaisi, Vidit, Harikrishna | Women: Harika, Vaishali, Divya Deshmukh, Vantika, Tania)",
    placeHeld: "Budapest, Hungary",
    period: "September-October 2026"
  },
  {
    event: "68th Ballon d'Or Awards 2026 (Football)",
    winner: "Rodri (Men's Ballon d'Or) & Aitana Bonmatí (Women's Ballon d'Or Féminin)",
    country: "Spain (Manchester City & FC Barcelona)",
    placeHeld: "Théâtre du Châtelet, Paris, France",
    period: "October 28, 2026"
  },
  {
    event: "12th Sultan of Johor Cup 2026 (U-21 Men's Hockey)",
    winner: "Great Britain (Gold); Australia (Silver); India (Bronze — defeated New Zealand in penalty shootout)",
    country: "Great Britain (Champions) / India (Bronze Medal)",
    placeHeld: "Johor Bahru, Malaysia",
    period: "October 19–26, 2026"
  },
  {
    event: "ISSF Shooting World Cup Final 2026",
    winner: "India won 4 Medals (2 Silver, 2 Bronze — Sonam Maskar, Akhil Sheoran, Anantjeet Singh Naruka, Ganemat Sekhon)",
    country: "India (Host Nation)",
    placeHeld: "Dr. Karni Singh Shooting Range, New Delhi, India",
    period: "October 13–18, 2026"
  },
  {
    event: "ICC Women's T20 World Cup 2026 (9th Edition)",
    winner: "New Zealand (Maiden Title; defeated South Africa by 32 runs in Final; Player of Tournament: Amelia Kerr)",
    country: "New Zealand",
    placeHeld: "Dubai & Sharjah, United Arab Emirates",
    period: "October 2026"
  },
  {
    event: "27th Asian Table Tennis Championships 2026",
    winner: "India won 3 Bronze Medals (First-ever medal in Women's Team; Ayhika Mukherjee & Sutirtha Mukherjee in Women's Doubles; Men's Team)",
    country: "India (Historic Women's Doubles & Team Medals)",
    placeHeld: "Astana, Kazakhstan",
    period: "October 2026"
  },
  {
    event: "37th America's Cup Sailing 2026",
    winner: "Emirates Team New Zealand (Skippered by Peter Burling; defeated INEOS Britannia 7–2)",
    country: "New Zealand (3rd Consecutive Title)",
    placeHeld: "Barcelona, Spain",
    period: "October 2026"
  },
  {
    event: "Irani Cup 2026 (Domestic First-Class Cricket)",
    winner: "Mumbai (27th Title after 27 years; Captain Ajinkya Rahane; Player of Match: Sarfaraz Khan for 222* vs Rest of India)",
    country: "India",
    placeHeld: "BRSABV Ekana Cricket Stadium, Lucknow",
    period: "October 2026"
  },
  {
    event: "ACC Men's T20 Emerging Teams Asia Cup 2026",
    winner: "Afghanistan A (Maiden Title; defeated Sri Lanka A by 7 wickets in Final)",
    country: "Afghanistan",
    placeHeld: "Al Amerat, Muscat, Oman",
    period: "October 2026"
  },
  {
    event: "Women's Asian Champions Trophy Hockey 2026",
    winner: "India (3rd Title; defeated China 1–0 in Final; Top Scorer: Deepika Sehrawat with 11 goals)",
    country: "India",
    placeHeld: "Rajgir Sports Complex, Bihar, India",
    period: "October-November 2026"
  },
  {
    event: "US Open 2026 (Tennis) — Men's & Women's Singles",
    winner: "Jannik Sinner / Carlos Alcaraz (Men's) & Aryna Sabalenka / Coco Gauff (Women's)",
    country: "Italy / Spain / USA",
    placeHeld: "Flushing Meadows, New York, USA",
    period: "September 2026"
  },
  {
    event: "Duleep Trophy 2026 (Domestic Red-Ball Cricket)",
    winner: "India A (Captain: Mayank Agarwal; Player of the Tournament: Anshul Kamboj)",
    country: "India",
    placeHeld: "Anantapur (AP) & M. Chinnaswamy Stadium, Bengaluru",
    period: "September 2026"
  },
  {
    event: "20th Asian Games / Multi-Sport Championships",
    winner: "Indian Men's and Women's Kabaddi, Shooting & Archery Contingents",
    country: "India",
    placeHeld: "Aichi-Nagoya, Japan",
    period: "September 2026"
  }
];
