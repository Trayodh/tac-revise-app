import re

# Comprehensive signatures for all 202 chapters
CHAPTER_SIGNATURES = {
    # ==========================================
    # MATHEMATICS (21 chapters)
    # ==========================================
    'trig-identities': [r'trigono', r'\bsin\b', r'\bcos\b', r'\btan\b', r'\bsec\b', r'\bcosec\b', r'\bcot\b', r'angle of elevation', r'height.*distance', r'radian', r'degree to radian'],
    'inverse-trig': [r'inverse trig', r'arcsin', r'arccos', r'arctan', r'sin\^?-1', r'cos\^?-1', r'tan\^?-1', r'principal value branch'],
    'quadratic-eq': [r'quadratic', r'discriminant', r'roots of equation', r'nature of roots', r'ax\^2', r'sum of roots', r'product of roots'],
    'complex-numbers': [r'complex number', r'imaginary', r'argand', r'\biota\b', r'modulus.*argument', r'polar form', r'de moivre', r'cube root of unity'],
    'straight-lines': [r'straight line', r'slope of line', r'intercept form', r'parallel lines', r'perpendicular lines', r'collinear', r'distance between parallel', r'gradient'],
    'central-tendency': [r'central tendency', r'\bmean\b', r'\bmedian\b', r'\bmode\b', r'standard deviation', r'\bvariance\b', r'coefficient of variation', r'frequency distribution'],
    'data-interpretation': [r'data interpretation', r'bar chart', r'pie chart', r'line graph', r'histogram', r'tabulation', r'table chart'],
    'limits-continuity': [r'limit', r'continuity', r'l[\'\s]?hopital', r'indeterminate', r'continuous function', r'left hand limit', r'right hand limit'],
    'differentiation': [r'differentiat', r'derivative', r'dy/dx', r'chain rule', r'product rule', r'quotient rule', r'maxima', r'minima', r'rate of change'],
    'integration': [r'integrat', r'integral', r'definite integral', r'by parts', r'substitution', r'partial fraction', r'area under curve'],
    'syl-matrices': [r'matri[xc]', r'determinant', r'cramer', r'adjoint', r'inverse of matrix', r'symmetric matrix', r'orthogonal matrix', r'eigenvalue'],
    'syl-probability': [r'probabilit', r'bayes', r'conditional prob', r'independent events', r'coin', r'\bdice\b', r'pack of cards', r'permutation', r'combination', r'binomial'],
    'lines-angles-triangles': [r'triangle', r'acute', r'obtuse', r'congruen', r'similar triangle', r'pythagor', r'incenter', r'circumcenter', r'orthocenter', r'centroid', r'altitude'],
    'circles-polygons': [r'circle', r'tangent to.*circle', r'chord of circle', r'cyclic quadrilateral', r'secant', r'radius', r'diameter', r'polygon', r'regular polygon', r'diagonal'],
    'area-perimeter': [r'area.*perimeter', r'2d mensuration', r'rectangle', r'square', r'rhombus', r'parallelogram', r'trapezium'],
    'surface-area-volume': [r'surface area', r'volume', r'3d mensuration', r'cylinder', r'cone', r'sphere', r'hemisphere', r'cuboid', r'cube', r'frustum', r'prism', r'pyramid'],
    'percentages-profit-loss': [r'percentage', r'profit.*loss', r'cost price', r'selling price', r'marked price', r'discount', r'simple interest', r'compound interest'],
    'ratios-averages': [r'ratio.*proportion', r'mean proportional', r'third proportional', r'average', r'weighted average', r'alligation', r'mixture', r'partnership', r'age problem'],
    'time-distance': [r'time.*distance', r'time.*speed', r'relative speed', r'train problem', r'boat.*stream', r'upstream', r'downstream', r'time and work', r'pipes.*cistern'],
    'syl-numerical-speed': [r'average speed formula', r'km/h', r'm/s', r'relative velocity'],
    'syl-numerical-ratios': [r'compounded ratio', r'direct proportion', r'inverse proportion', r'variation'],

    # ==========================================
    # ENGLISH (18 chapters)
    # ==========================================
    'parts-of-speech': [r'part[s]? of speech', r'\bnoun\b', r'pronoun', r'adjective', r'adverb', r'\bverb\b', r'preposition', r'conjunction', r'interjection'],
    'tenses-complete': [r'\btense[s]?\b', r'simple present', r'present continuous', r'present perfect', r'past tense', r'future tense', r'sequence of tenses'],
    'subject-verb-agreement': [r'subject[\s\-]verb agreement', r'concord', r'rule of proximity', r'neither.*nor', r'either.*or'],
    'sentence-structure': [r'sentence structure', r'simple sentence', r'compound sentence', r'complex sentence', r'clause', r'parallelism'],
    'voice-conversion': [r'active.*passive', r'passive voice', r'active voice', r'voice change'],
    'narration-speech': [r'direct.*indirect', r'direct speech', r'indirect speech', r'reported speech', r'narration change'],
    'modifiers': [r'misplaced modifier', r'dangling modifier', r'modifier'],
    'punctuation-basics': [r'punctuation', r'comma', r'semicolon', r'apostrophe', r'hyphen'],
    'transformation-sentences': [r'transformation of sentence', r'affirmative to negative', r'degrees of comparison', r'exclamatory'],
    'synonyms-antonyms-detailed': [r'synonym', r'antonym', r'word meaning', r'similar meaning', r'opposite meaning', r'vocabulary'],
    'one-word-substitution': [r'one[\s\-]word substitution', r'phobia', r'mania', r'philanthropist', r'omnipresent'],
    'idioms-phrases': [r'idiom', r'phrase', r'proverb', r'idiomatic'],
    'phrasal-verbs': [r'phrasal verb', r'call off', r'look into', r'put up with', r'give in'],
    'reading-comprehension': [r'reading comprehension', r'unseen passage', r'comprehension passage', r'tone of the author'],
    'error-detection': [r'spotting error', r'spot the error', r'error detection', r'find the error'],
    'sentence-improvement': [r'sentence improvement', r'phrase replacement', r'bracketed portion'],
    'ordering-rearrangement': [r'ordering of words', r'ordering of sentence', r'para[\s\-]?jumble', r'\bpqrs\b', r'rearrangement'],
    'fill-blanks-cloze': [r'fill in the blank', r'cloze test', r'blank with'],

    # ==========================================
    # POLITY (17 chapters)
    # ==========================================
    'preamble': [r'preamble', r'sovereign socialist secular', r'democratic republic', r'justice liberty equality', r'objective resolution', r'kesavananda'],
    'schedules': [r'12 schedules', r'tears of old pm', r'first schedule', r'seventh schedule', r'eighth schedule', r'tenth schedule', r'eleventh schedule', r'twelfth schedule', r'anti[\s\-]defection schedule'],
    'fundamental-rights': [r'fundamental right', r'part iii\b', r'article 1[2-9]\b', r'article 2[0-9]\b', r'article 3[0-2]\b', r'habeas corpus', r'mandamus', r'certiorari', r'quo warranto', r'right to equality', r'right to liberty', r'right to freedom'],
    'dpsp': [r'directive principle', r'\bdpsp\b', r'part iv\b', r'article 3[6-9]\b', r'article 4[0-9]\b', r'article 5[0-1]\b', r'fundamental dut', r'article 51a', r'swaran singh'],
    'citizenship': [r'citizenship', r'part ii\b', r'article [5-9]\b', r'article 1[0-1]\b', r'citizenship amendment', r'\bcaa\b', r'\bnrc\b', r'\boci\b', r'naturalisation'],
    'president': [r'president of india', r'impeachment of president', r'article 52', r'article 61', r'pardoning power', r'article 72', r'ordinance.*article 123', r'vice president', r'article 63', r'electoral college'],
    'parliament': [r'parliament of india', r'lok sabha', r'rajya sabha', r'article 79', r'speaker of lok sabha', r'money bill', r'article 110', r'joint sitting', r'article 108', r'parliamentary committee', r'no confidence', r'zero hour'],
    'goverment-executives': [r'prime minister', r'council of ministers', r'cabinet\b', r'article 74', r'article 75', r'governor\b', r'article 153', r'chief minister'],
    'judiciary': [r'supreme court', r'high court', r'chief justice', r'article 124', r'article 226', r'judicial review', r'collegium', r'public interest litigation', r'\bpil\b'],
    'panchayati-raj': [r'panchayat', r'73rd.*amendment', r'74th.*amendment', r'gram sabha', r'balwant rai', r'ashok mehta', r'municipalit', r'local self'],
    'amendments-parts': [r'constitutional amendment', r'article 368', r'42nd amendment', r'44th amendment', r'86th amendment', r'101st amendment', r'parts of.*constitution'],
    'important-articles': [r'article 370', r'comptroller and auditor general', r'\bcag\b', r'article 148', r'attorney general', r'article 76', r'advocate general'],
    'positions-tenures': [r'tenure[s]?', r'age limit', r'appointment and removal', r'oath and affirmation', r'retirement age'],
    'constitutional-bodies': [r'constitutional bod', r'non[\s\-]constitutional bod', r'finance commission', r'article 280', r'election commission', r'article 324', r'upsc.*article 315', r'niti aayog', r'\bnhrc\b', r'\bcbi\b', r'\bcvc\b', r'lokpal'],
    'governance-emergency': [r'emergency provision', r'national emergency', r'article 352', r'president[\'\s]?s rule', r'article 356', r'financial emergency', r'article 360'],
    'polity-federal-structure': [r'federal structure', r'centre[\s\-]state relation', r'union list', r'state list', r'concurrent list', r'sarkaria commission', r'inter[\s\-]state council'],
    'polity-rpa': [r'representation of the people', r'\brpa\b', r'model code of conduct', r'electoral reform', r'voting age'],

    # ==========================================
    # HISTORY (47 chapters)
    # ==========================================
    'what-is-history': [r'what is history', r'historiography', r'primary source', r'secondary source', r'historical methodology', r'e\.h\. carr'],
    'sources-indian-history': [r'sources of indian history', r'literary sources', r'archaeological sources', r'inscriptions', r'epigraphy', r'numismatics', r'travelogue'],
    'dating-systems': [r'dating system', r'carbon 14', r'stratigraphy', r'\bbce\b', r'\bce\b', r'gregorian calendar', r'shaka era', r'vikrama era'],
    'stone-age': [r'stone age', r'paleolithic', r'mesolithic', r'neolithic', r'microlith', r'bhimbetka', r'burzahom', r'hunting.*gathering'],
    'chalcolithic-age': [r'chalcolithic', r'copper age', r'jorwe', r'malwa culture', r'ahar banas', r'ochre coloured'],
    'rock-art': [r'rock art', r'prehistoric painting', r'cave art', r'petroglyph'],
    'indus-valley-civilization': [r'indus valley', r'harappa', r'mohenjo[\s\-]?daro', r'lothal', r'kalibangan', r'dholavira', r'great bath', r'bronze dancing girl', r'pashupati seal', r'dockyard'],
    'vedic-age': [r'vedic', r'rigveda', r'samaveda', r'yajurveda', r'atharvaveda', r'upanishad', r'varna system', r'sabha.*samiti', r'ashvamedha'],
    'mahajanapadas': [r'16 mahajanapada', r'mahajanapada', r'vajji', r'kosala', r'kashi', r'magadha.*kosala', r'gana sangha'],
    'magadha-expansion': [r'rise of magadha', r'haryanka', r'bimbisara', r'ajatashatru', r'shishunaga', r'nanda dynasty', r'mahapadma nanda', r'alexander invasion'],
    'buddhism-jainism': [r'buddhism', r'gautama buddha', r'four noble truths', r'eightfold path', r'tripitaka', r'buddhist council', r'hinayana', r'mahayana', r'jainism', r'mahavira', r'tirthankara', r'ahimsa', r'digambara', r'svetambara'],
    'mauryan-period': [r'maurya', r'chandragupta maurya', r'chanakya', r'kautilya', r'arthashastra', r'megasthenes', r'ashoka', r'kalinga war', r'dhamma', r'sarnath pillar'],
    'post-mauryan-india': [r'post[\s\-]maurya', r'shunga', r'satavahana', r'indo[\s\-]greek', r'milinda panha', r'shaka[s]?', r'kushana', r'kanishka', r'gandhara art', r'mathura art'],
    'gupta-period': [r'gupta empire', r'gupta period', r'samudragupta', r'prayag prashasti', r'chandragupta ii', r'vikramaditya', r'kalidasa', r'aryabhata', r'fahien', r'iron pillar'],
    'south-indian-kingdoms': [r'sangam age', r'chola', r'rajaraja', r'rajendra chola', r'brihadisvara', r'pandya', r'chera', r'pallava', r'narasimhavarman', r'mamallapuram', r'chalukya', r'pulakeshin', r'rashtrakuta', r'ellora kailash'],
    'ancient-indian-culture': [r'ancient indian literature', r'shad darshana', r'vedanga', r'ayurveda', r'charaka', r'sushruta'],
    'early-medieval-india': [r'tripartite struggle', r'pratihara', r'pala dynasty', r'rajput', r'prithviraj chauhan', r'battle of tarain', r'mahmud of ghazni', r'muhammad ghori'],
    'delhi-sultanate': [r'delhi sultanate', r'slave dynasty', r'mamluk', r'qutb ud din', r'iltutmish', r'razia', r'balban', r'khalji', r'alauddin khalji', r'tughlaq', r'muhammad bin tughlaq', r'firoz shah', r'lodi', r'ibrahim lodi'],
    'vijayanagara-empire': [r'vijayanagara', r'harihara.*bukka', r'krishnadeva raya', r'amuktamalyada', r'hampi', r'battle of talikota'],
    'bahmani-deccan-sultanates': [r'bahmani', r'alauddin bahman', r'mahmud gawan', r'bijapur sultanate', r'golconda', r'ahmadnagar', r'gol gumbaz'],
    'mughal-empire': [r'mughal', r'babur', r'panipat 1526', r'humayun', r'sher shah', r'grand trunk road', r'akbar', r'panipat 1556', r'mansabdari', r'din[\s\-]i ilahi', r'jahangir', r'shah jahan', r'taj mahal', r'aurangzeb'],
    'marathas': [r'maratha', r'shivaji', r'ashtapradhan', r'chauth', r'sardeshmukhi', r'peshwa', r'baji rao', r'third battle of panipat', r'panipat 1761'],
    'bhakti-movement': [r'bhakti', r'ramanuja', r'shankara.*advaita', r'kabir\b', r'guru nanak', r'mirabai', r'chaitanya', r'tulsidas', r'alvar', r'nayanar'],
    'sufi-movement': [r'sufi', r'silsila', r'chishti', r'moinuddin chishti', r'nizamuddin auliya', r'baba farid', r'amir khusrau'],
    'sikh-history': [r'sikh history', r'ten sikh guru', r'guru arjan', r'guru tegh bahadur', r'guru gobind singh', r'khalsa panth', r'ranjit singh', r'sikh empire'],
    'european-arrival': [r'arrival of european', r'vasco da gama', r'portuguese in india', r'blue water policy', r'east india company', r'battle of plassey', r'battle of buxar', r'carnatic war', r'dupleix'],
    'british-expansion': [r'subsidiary alliance', r'lord wellesley', r'doctrine of lapse', r'lord dalhousie', r'anglo[\s\-]mysore', r'tipu sultan', r'anglo[\s\-]maratha', r'anglo[\s\-]sikh'],
    'economic-impact-british': [r'drain of wealth', r'dadabhai naoroji', r'permanent settlement', r'lord cornwallis', r'ryotwari', r'thomas munro', r'mahalwari', r'deindustrialisation'],
    'socio-religious-reform': [r'raja ram mohan', r'brahmo samaj', r'sati 1829', r'ishwar chandra vidyasagar', r'dayanand saraswati', r'arya samaj', r'swami vivekananda', r'ramakrishna mission', r'jyotirao phule', r'satyashodhak', r'sir syed ahmad', r'aligarh movement'],
    'revolt-1857': [r'revolt of 1857', r'sepoy mutiny', r'mangal pandey', r'greased cartridge', r'meerut mutiny', r'bahadur shah zafar', r'rani lakshmibai', r'tatya tope', r'kunwar singh', r'begum hazrat mahal'],
    'governor-generals-viceroys': [r'governor general', r'viceroy', r'warren hastings', r'william bentinck', r'lord canning', r'lord ripon', r'lord curzon', r'lord mountbatten'],
    'constitutional-development': [r'regulating act 1773', r'pitts india act', r'charter act 18[1-5][3-9]', r'government of india act 1858', r'morley[\s\-]minto', r'montagu[\s\-]chelmsford', r'government of india act 1935', r'dyarchy'],
    'freedom-movement': [r'indian national congress', r'moderate phase', r'extremist phase', r'partition of bengal 1905', r'swadeshi', r'surat split', r'home rule', r'lucknow pact', r'rowlatt', r'jallianwala bagh', r'non[\s\-]cooperation', r'chauri chaura', r'simon commission', r'poorna swaraj', r'civil disobedience', r'dandi march', r'round table', r'poona pact', r'quit india', r'subhas chandra bose', r'\bina\b', r'azad hind', r'cabinet mission'],
    'post-independence-consolidation': [r'princely states', r'sardar patel', r'instrument of accession', r'operation polo', r'fazal ali', r'states reorganisation'],
    'revolutions': [r'american revolution', r'boston tea party', r'french revolution', r'bastille', r'napoleon', r'waterloo', r'industrial revolution', r'russian revolution', r'bolshevik'],
    'world-war-i': [r'world war 1', r'world war i\b', r'first world war', r'archduke franz ferdinand', r'triple entente', r'treaty of versailles', r'league of nations'],
    'interwar-period': [r'interwar', r'weimar republic', r'great depression 1929', r'fascism', r'mussolini', r'nazism', r'hitler', r'spanish civil war', r'munich pact'],
    'world-war-ii': [r'world war 2', r'world war ii\b', r'second world war', r'invasion of poland', r'pearl harbor', r'battle of stalingrad', r'battle of midway', r'normandy', r'hiroshima.*nagasaki'],
    'cold-war': [r'cold war', r'iron curtain', r'truman doctrine', r'marshall plan', r'\bnato\b', r'warsaw pact', r'berlin wall', r'cuban missile', r'vietnam war', r'soviet collapse'],
    'international-institutions': [r'united nations', r'un charter', r'un security council', r'\bp5\b', r'international court of justice', r'unesco', r'bretton woods'],
    'architecture': [r'temple architecture', r'nagara style', r'dravidian style', r'shikhara', r'gopuram', r'vesara', r'stupa', r'chaitya.*vihara', r'indo[\s\-]islamic architecture'],
    'paintings': [r'indian painting', r'mural painting', r'ajanta painting', r'miniature painting', r'mughal miniature', r'rajasthani painting', r'madhubani'],
    'dance-music': [r'classical dance', r'bharatanatyam', r'kathak\b', r'kathakali', r'kuchipudi', r'odissi', r'manipuri dance', r'mohiniyattam', r'sattriya', r'carnatic music', r'hindustani music'],
    'literature': [r'indian literature', r'kalidasa', r'sangam literature', r'harshacharita', r'silappadikaram'],
    'religion-festivals': [r'festival', r'diwali', r'holi', r'eid', r'baisakhi', r'onam', r'pongal', r'religious sect'],
    'heritage-sites': [r'world heritage site', r'unesco heritage', r'protected monument', r'\basi\b monument'],
    'history-pyq-trends-topic': [r'history pyq', r'history question trend', r'history previous year'],

    # ==========================================
    # GEOGRAPHY (15 chapters)
    # ==========================================
    'universe-solar-system': [r'solar system', r'planet[s]?', r'mercury\b', r'venus\b', r'\bmars\b', r'jupiter', r'saturn', r'uranus', r'neptune', r'asteroid', r'kuiper', r'comet', r'sun\b', r'photosphere', r'corona', r'big bang', r'light year'],
    'earth-atmosphere': [r'earth interior', r'crust mantle core', r'mohorovicic', r'lithosphere', r'atmosphere', r'troposphere', r'stratosphere', r'ozone layer', r'mesosphere', r'thermosphere', r'ionosphere'],
    'climatology-clouds': [r'climatolog', r'type[s]? of cloud', r'cirrus', r'cumulus', r'stratus', r'cumulonimbus', r'cyclone', r'anticyclone', r'coriolis', r'trade wind', r'westerlies', r'monsoon', r'el nino', r'la nina'],
    'geomorphology-rocks': [r'geomorpholog', r'rock[s]?', r'igneous', r'granite', r'basalt', r'sedimentary', r'sandstone', r'limestone', r'metamorphic', r'marble', r'slate', r'plate tectonic', r'continental drift', r'earthquake', r'seismic wave', r'p[\s\-]wave', r's[\s\-]wave', r'volcano', r'volcanism', r'weathering'],
    'world-geography-mountains': [r'andes', r'rockies', r'alps\b', r'urals', r'atlas mountain', r'amazon river', r'nile river', r'mississippi', r'yangtze', r'danube', r'lake baikal', r'taiga', r'tundra', r'savanna'],
    'world-geography-straits-deserts': [r'strait of malacca', r'strait of gibraltar', r'strait of hormuz', r'bab[\s\-]el[\s\-]mandeb', r'bosporus', r'suez canal', r'panama canal', r'sahara desert', r'kalahari', r'atacama', r'red sea', r'mediterranean sea', r'black sea'],
    'syl-geog': [r'rivers of india', r'himalayan river', r'indus river', r'ganga river', r'brahmaputra', r'godavari', r'krishna river', r'kaveri', r'cauvery', r'narmada', r'tapi river', r'yamuna', r'mountain pass', r'zoji la', r'nathu la', r'rohtang', r'soils of india', r'alluvial soil', r'black soil', r'regur', r'laterite soil'],
    'india-forests-wetlands': [r'forests in india', r'tropical evergreen', r'tropical deciduous', r'mangrove', r'sundarban', r'ramsar wetland', r'chilika lake', r'loktak lake', r'wetland[s]? of india'],
    'india-resources-farming': [r'mineral resources', r'iron ore', r'bauxite', r'coal reserves', r'types of farming', r'shifting cultivation', r'jhum', r'cropping season', r'kharif', r'rabi', r'zaid', r'cash crop'],
    'india-transport-routes': [r'golden quadrilateral', r'nh[\s\-]44', r'national waterway', r'nw[\s\-]1', r'nw[\s\-]2', r'major sea port', r'jnpt', r'kandla', r'freight corridor'],
    'india-national-parks': [r'national park', r'wildlife sanctuar', r'tiger reserve', r'project tiger', r'jim corbett', r'kaziranga', r'kanha', r'gir national', r'periyar', r'hemis'],
    'mapping-borders-capitals': [r'borders of india', r'radcliffe line', r'mcmahon line', r'durand line', r'coastal state', r'standard meridian', r'82\.5', r'tropic of cancer', r'state[s]? and capital'],
    'geog-industries': [r'industries of india', r'iron and steel plant', r'jamshedpur', r'bhilai', r'rourkela', r'cotton textile industry', r'industrial corridor'],
    'geog-geopolitics': [r'geopolitic', r'indo[\s\-]pacific', r'south china sea', r'nine[\s\-]dash line', r'string of pearls', r'exclusive economic zone', r'\beez\b'],
    'geography-pyq-trends-topic': [r'geography pyq', r'geography question trend', r'geography previous year'],

    # ==========================================
    # ECONOMICS (9 chapters)
    # ==========================================
    'econ-concepts': [r'microeconomics', r'macroeconomics', r'sectors of economy', r'primary secondary tertiary', r'\bgdp\b', r'\bgnp\b', r'\bnnp\b', r'national income', r'factor cost', r'market price', r'per capita income'],
    'econ-poverty-employment': [r'poverty line', r'tendulkar committee', r'rangarajan committee', r'unemployment', r'disguised unemployment', r'seasonal unemployment', r'labour force', r'minimum support price', r'\bmsp\b'],
    'rbi-monetary-policy': [r'reserve bank of india', r'\brbi\b', r'monetary policy', r'repo rate', r'reverse repo', r'marginal standing facility', r'\bmsf\b', r'\bcrr\b', r'\bslr\b', r'cash reserve ratio', r'open market operations', r'\bomo\b', r'\bmpc\b'],
    'econ-budget-fiscal': [r'government budget', r'union budget', r'revenue budget', r'capital budget', r'fiscal deficit', r'revenue deficit', r'direct tax', r'indirect tax', r'\bgst\b', r'goods and services tax'],
    'econ-trade-bop': [r'balance of payments', r'\bbop\b', r'current account deficit', r'\bcad\b', r'trade deficit', r'foreign exchange reserves', r'forex\b', r'devaluation', r'convertibility'],
    'econ-reforms': [r'lpg reforms', r'economic reforms 1991', r'liberalisation', r'privatisation', r'globalisation', r'disinvestment', r'niti aayog', r'planning commission', r'\bsebi\b', r'\birdai\b'],
    'five-year-plans': [r'five year plan', r'\bfyp\b', r'harrod[\s\-]domar', r'mahalanobis', r'plan holiday', r'rolling plan', r'garibi hatao'],
    'external-sector-institutions': [r'international monetary fund', r'\bimf\b', r'special drawing rights', r'\bsdr\b', r'world bank', r'\bwto\b', r'foreign direct investment', r'\bfdi\b', r'\bfpi\b'],
    'econ-govt-schemes': [r'jan dhan yojana', r'pm[\s\-]kisan', r'mgnrega', r'ayushman bharat', r'direct benefit transfer', r'\bdbt\b', r'jam trinity', r'welfare scheme'],

    # ==========================================
    # PHYSICS (10 chapters)
    # ==========================================
    'reflection-refraction': [r'reflection', r'refraction', r'concave mirror', r'convex mirror', r'concave lens', r'convex lens', r'snell[\'\s]?s? law', r'refractive index', r'total internal reflection', r'\btir\b', r'dispersion of light', r'prism\b', r'rainbow', r'scattering of light'],
    'newtons-laws': [r'newton[\'\s]?s? law[s]? of motion', r'inertia\b', r'f\s*=\s*ma', r'momentum', r'impulse\b', r'action and reaction', r'friction\b', r'circular motion', r'centripetal', r'centrifugal'],
    'syl-exercises': [r'work.*energy', r'kinetic energy', r'potential energy', r'law of conservation of energy', r'power.*watt', r'gravitation', r'universal law of gravitation', r'acceleration due to gravity', r'escape velocity', r'orbital velocity', r'kepler[\'\s]?s? law'],
    'physics-sound': [r'sound wave', r'speed of sound', r'pitch.*loudness', r'infrasound', r'ultrasound', r'sonar\b', r'echo\b', r'reverberation', r'doppler effect in sound'],
    'physics-em-waves': [r'electromagnetic wave', r'em spectrum', r'radio wave', r'microwave\b', r'infrared\b', r'ultraviolet\b', r'x[\s\-]ray', r'gamma ray'],
    'physics-heat': [r'thermodynamic', r'temperature scale', r'celsius.*fahrenheit', r'thermal expansion', r'specific heat', r'latent heat', r'conduction.*convection.*radiation', r'heat transfer', r'zeroth law', r'first law of thermo'],
    'physics-electricity-magnetism': [r'electric charge', r'coulomb[\'\s]?s? law', r'electric current', r'ohm[\'\s]?s? law', r'resistance.*resistivity', r'series and parallel', r'joule heating', r'magnetic field', r'electromagnetic induction', r'faraday[\'\s]?s? law', r'lenz[\'\s]?s? law', r'electric motor', r'electric generator'],
    'physics-nuclear-basics': [r'nuclear physics', r'radioactiv', r'atomic number', r'mass number', r'isotope', r'isobar', r'alpha particle', r'beta particle', r'half[\s\-]life', r'nuclear fission', r'nuclear fusion', r'uranium'],
    'physics-units-everyday': [r'si unit', r'fundamental unit', r'derived unit', r'dimension of physical', r'scientific instrument', r'ammeter', r'voltmeter', r'barometer', r'galvanometer'],
    'physics-pyq-trends-topic': [r'physics pyq', r'physics question trend', r'physics previous year'],

    # ==========================================
    # CHEMISTRY (8 chapters)
    # ==========================================
    'acids-bases': [r'acid[s]?', r'base[s]?', r'ph scale', r'litmus', r'phenolphthalein', r'methyl orange', r'neutralization', r'washing soda', r'baking soda', r'bleaching powder', r'plaster of paris', r'gypsum'],
    'syl-numerical': [r'chemical bond', r'ionic bond', r'covalent bond', r'periodic table', r'moseley', r'atomic radius', r'ionization energy', r'electronegativity', r'valency'],
    'metals-alloys': [r'metal[s]? and non[\s\-]metal', r'malleab', r'ductil', r'metalloid', r'ore[s]? of metal', r'bauxite', r'haematite', r'cinnabar', r'galena', r'metallurgy', r'alloy[s]?', r'brass\b', r'bronze\b', r'solder\b', r'stainless steel', r'corrosion', r'rusting', r'galvaniz'],
    'reactivity-series': [r'reactivity series', r'displacement reaction', r'redox', r'oxidation and reduction', r'oxidizing agent', r'reducing agent', r'electrolysis', r'cathode.*anode'],
    'carbon-compounds': [r'carbon and its compound', r'catenation', r'allotrope of carbon', r'diamond', r'graphite', r'fullerene', r'hydrocarbon', r'alkane', r'alkene', r'alkyne', r'functional group', r'alcohol.*aldehyde', r'carboxylic', r'soap.*detergent', r'saponification'],
    'chemistry-numericals': [r'mole concept', r'avogadro', r'molar mass', r'stoichiometr', r'molarity', r'molality', r'normality', r'mole fraction'],
    'chemistry-everyday-fertilisers': [r'fertiliser', r'fertilizer', r'urea\b', r'npk\b', r'cement\b', r'glass\b', r'polymer', r'polythene', r'\bpvc\b', r'bakelite', r'nylon\b', r'teflon', r'calorific value', r'\blpg\b', r'\bcng\b', r'biogas'],
    'environmental-chemistry': [r'environmental chemistry', r'greenhouse gas', r'global warming', r'acid rain', r'ozone layer depletion', r'\bcfc\b', r'photochemical smog', r'biochemical oxygen demand', r'\bbod\b', r'\bcod\b', r'eutrophication'],

    # ==========================================
    # BIOLOGY (8 chapters)
    # ==========================================
    'cell-structure': [r'cell biology', r'cell structure', r'cell theory', r'prokaryot', r'eukaryot', r'cell organelle', r'mitochondria', r'endoplasmic reticulum', r'golgi', r'lysosome', r'ribosome', r'cell division', r'mitosis', r'meiosis'],
    'human-systems': [r'digestive system', r'alimentary canal', r'circulatory system', r'heart\b', r'blood group', r'respiratory system', r'lungs\b', r'excretory system', r'kidney', r'nephron', r'nervous system', r'brain\b', r'neuron', r'endocrine system', r'hormone[s]?'],
    'diseases': [r'human disease', r'pathogen', r'infectious disease', r'viral disease', r'bacterial disease', r'protozoan disease', r'malaria', r'tuberculosis', r'\baids\b', r'\bhiv\b', r'deficiency disease', r'vitamin a\b', r'vitamin c\b', r'scurvy', r'rickets', r'beriberi'],
    'immunity-vaccines': [r'immunity', r'vaccine', r'innate immunity', r'acquired immunity', r'antibody', r'antibodies', r'antigen', r'immunoglobulin', r'b[\s\-]cell', r't[\s\-]cell', r'autoimmune'],
    'plant-kingdom': [r'plant kingdom', r'thallophyta', r'algae', r'bryophyta', r'pteridophyta', r'gymnosperm', r'angiosperm', r'monocot', r'dicot', r'xylem', r'phloem'],
    'animal-kingdom': [r'animal kingdom', r'invertebrate', r'vertebrate', r'porifera', r'coelenterata', r'platyhelminthes', r'annelida', r'arthropoda', r'mollusca', r'echinodermata', r'chordata', r'amphibian', r'reptile', r'aves', r'mammal'],
    'plant-reproduction': [r'plant reproduction', r'photosynthesis', r'chlorophyll', r'plant hormone', r'phytohormone', r'auxin', r'gibberellin', r'cytokinin', r'abscisic acid', r'ethylene', r'pollination'],
    'biology-ecology-basics': [r'ecology basics', r'ecosystem', r'food chain', r'food web', r'trophic level', r'10 percent law', r'ecological pyramid', r'pyramid of energy', r'nitrogen cycle', r'nutrient cycle'],

    # ==========================================
    # MILITARY-APTITUDE (26 chapters)
    # ==========================================
    'all-equipment': [r'military equipment', r't[\s\-]90', r'arjun mbt', r'fighter jet', r'su[\s\-]30', r'rafale', r'tejas', r'aircraft carrier', r'ins vikrant', r'ins vikramaditya', r'destroyer', r'frigate', r'submarine', r'scorpene', r'k9 vajra', r'pinaka', r's[\s\-]400', r'insas rifle'],
    'rank-equivalence': [r'rank equivalence', r'officer rank', r'tri[\s\-]services rank', r'field marshal', r'marshal of the air force'],
    'commands': [r'operational command', r'army command', r'naval command', r'air command', r'northern command', r'western command', r'eastern command', r'southern command', r'andaman and nicobar command'],
    'defence-organisations-weapons': [r'defence organisation', r'\bdrdo\b', r'ordnance factory', r'\bhal\b', r'\bbel\b', r'\bmdl\b', r'paramilitary', r'assam rifles', r'\bbsf\b', r'\bitbp\b', r'\bcrpf\b', r'\bcisf\b', r'\bnsg\b', r'coast guard'],
    'bilateral-exercises': [r'military exercise', r'joint exercise', r'yudh abhyas', r'vajra prahar', r'exercise indra', r'varuna', r'garuda', r'malabar exercise', r'surya kiran', r'sampriti', r'mitra shakti', r'dharma guardian'],
    'missiles-systems': [r'missile system', r'\bigmdp\b', r'prithvi missile', r'agni missile', r'trishul', r'nag missile', r'akash missile', r'brahmos', r'astra missile', r'nirbhay', r'ballistic missile defence'],
    'syl-verbal-reasoning': [r'verbal reasoning', r'officer intelligence rating', r'\boir\b', r'logical deduction'],
    'syl-nonverbal-reasoning': [r'non[\s\-]verbal reasoning', r'abstract reasoning'],
    'syl-afcat-spatial': [r'spatial ability', r'spatial reasoning'],
    'afcat-r-analogy': [r'verbal analogy', r'word analogy', r'analogy.*reasoning'],
    'afcat-r-classification': [r'odd one out', r'verbal classification'],
    'afcat-r-series': [r'number series', r'letter series', r'series completion'],
    'afcat-r-coding': [r'coding.*decoding', r'letter coding', r'substitution cipher'],
    'afcat-r-directions': [r'direction sense', r'cardinal direction'],
    'afcat-r-clock-calendar': [r'clock.*calendar', r'angle between clock hands', r'leap year calculation'],
    'afcat-r-venn': [r'logical venn diagram', r'venn diagram'],
    'afcat-r-syllogism': [r'syllogism', r'all a are b', r'some b are c'],
    'afcat-r-conclusions': [r'statements and conclusion'],
    'afcat-r-assumptions': [r'statements and assumption'],
    'afcat-r-fig-analogy': [r'figure analogy'],
    'afcat-r-fig-class-series': [r'figure classification', r'figure series'],
    'afcat-r-fig-completion': [r'figure completion', r'pattern completion'],
    'afcat-r-embedded': [r'embedded figure', r'hidden figure'],
    'afcat-r-dot': [r'dot situation'],
    'afcat-r-cube-dice': [r'cube and dice', r'unfolded dice'],
    'afcat-r-fig-coding': [r'figure coding'],

    # ==========================================
    # CURRENT-AFFAIRS (16 chapters)
    # ==========================================
    'ca-schemes': [r'flagship scheme', r'pradhan mantri.*yojana', r'mission vatsalya', r'pm vishwakarma'],
    'ca-relations': [r'bilateral relation', r'diplomatic visit', r'free trade agreement', r'\bfta\b'],
    'ca-policies': [r'national policy', r'national education policy', r'\bnep\b', r'dpdp act'],
    'ca-summits': [r'g20 summit', r'brics summit', r'sco summit', r'asean summit', r'cop climate summit'],
    'ca-reports': [r'global hunger index', r'human development index', r'innovation index', r'ease of doing business', r'index.*ranking'],
    'ca-judgments': [r'landmark verdict', r'supreme court ruling', r'constitution bench ruling', r'electoral bond'],
    'ca-awards': [r'bharat ratna', r'padma award', r'gallantry award', r'param vir chakra', r'nobel prize'],
    'ca-economic-measures': [r'economic measure', r'fiscal package', r'relief package'],
    'ca-science-tech-space': [r'isro\b', r'chandrayaan', r'pragyan rover', r'vikram lander', r'aditya[\s\-]l1', r'gaganyaan', r'space mission'],
    'ca-upsc-master-framework': [r'current affairs framework', r'syllabus map', r'upsc current affairs'],
    'ca-geopolitical-flashpoints': [r'russia[\s\-]ukraine', r'israel[\s\-]hamas', r'gaza crisis', r'taiwan strait'],
    'ca-defence-cooperation': [r'defence deal', r'ge[\s\-]414', r'c[\s\-]295 transport', r'defence procurement'],
    'ca-red-sea-crisis': [r'red sea crisis', r'houthi', r'operation sankalp', r'maritime security operation'],
    'ca-quad-indopacific': [r'\bquad\b', r'quadrilateral security dialogue', r'indo[\s\-]pacific strategy'],
    'ca-defense-acquisitions': [r'mq[\s\-]9b', r'sea guardian', r'sky guardian', r'defence acquisition council', r'\bdac\b approval'],
    'ca-space-nuclear': [r'mission divyastra', r'mirv technology', r'strategic forces command', r'space defence agency'],

    # ==========================================
    # ENVIRONMENT (7 chapters)
    # ==========================================
    'env-hotspots': [r'biodiversity hotspot', r'norman myers', r'western ghats hotspot', r'indo[\s\-]burma', r'sundaland', r'biosphere reserve', r'man and biosphere', r'\bmab\b'],
    'env-conservation': [r'wildlife conservation', r'project tiger', r'project elephant', r'in[\s\-]situ conservation', r'ex[\s\-]situ conservation'],
    'env-species': [r'iucn red list', r'critically endangered', r'endangered species', r'great indian bustard', r'gharial', r'\bcites\b'],
    'env-treaties': [r'climate change treat', r'\bunfccc\b', r'kyoto protocol', r'paris agreement', r'cop2[0-9]', r'nationally determined contribution', r'\bndc\b', r'montreal protocol'],
    'env-laws': [r'wildlife protection act', r'environment protection act', r'biological diversity act', r'forest conservation act', r'national green tribunal', r'\bngt\b', r'\beia\b'],
    'env-renewable': [r'renewable energy', r'solar energy', r'international solar alliance', r'\bisa\b', r'green hydrogen', r'ethanol blending'],
    'env-pollution': [r'air pollution', r'clean air programme', r'air quality index', r'\baqi\b', r'water pollution', r'namami gange', r'solid waste management', r'single[\s\-]use plastic', r'swachh bharat']
}

COMPILED_SIGNATURES = {
    ch_id: [re.compile(pat, re.IGNORECASE) for pat in patterns]
    for ch_id, patterns in CHAPTER_SIGNATURES.items()
}

def smart_match_note(note, chapter_map, subject_chapters):
    # Combine relevant text
    sub_raw = (note.get('subject') or '').strip().lower()
    ch_raw = (note.get('chapter') or '').strip().lower()
    top_raw = (note.get('topic') or '').strip().lower()
    subch_raw = (note.get('subchapter') or '').strip().lower()
    title_raw = (note.get('title') or '').strip().lower()
    text_raw = (note.get('text') or note.get('content') or '')[:1200].strip().lower()

    # Exact match candidate
    for cand in [ch_raw.replace(' ', '-'), top_raw.replace(' ', '-'), note.get('id', '')]:
        if cand in chapter_map:
            return chapter_map[cand]['subject'], cand

    query = f"{sub_raw} {ch_raw} {top_raw} {subch_raw} {title_raw}"

    # Determine subject domain hint
    from test_engine_scaffolding import normalize_subject_hint
    sub_hint = normalize_subject_hint(sub_raw, top_raw)

    best_ch = None
    best_score = 0

    for ch_id, regex_list in COMPILED_SIGNATURES.items():
        ch_sub = chapter_map[ch_id]['subject']
        score = 0
        # Subject boost
        subject_bonus = 5 if (sub_hint and sub_hint == ch_sub) else 0

        for rx in regex_list:
            if rx.search(query):
                score += 15 + subject_bonus
            elif rx.search(text_raw):
                score += 3 + subject_bonus

        if score > best_score:
            best_score = score
            best_ch = ch_id

    if best_ch and best_score >= 12:
        return chapter_map[best_ch]['subject'], best_ch

    # If we have a subject hint, pick the best candidate in that subject
    if sub_hint and sub_hint in subject_chapters:
        target_chaps = subject_chapters[sub_hint]
        for ch_id in target_chaps:
            rx_list = COMPILED_SIGNATURES.get(ch_id, [])
            for rx in rx_list:
                if rx.search(text_raw):
                    return sub_hint, ch_id
        # Pick the most appropriate general chapter for that subject
        return sub_hint, target_chaps[0]

    if best_ch:
        return chapter_map[best_ch]['subject'], best_ch

    return 'current-affairs', 'ca-upsc-master-framework'
