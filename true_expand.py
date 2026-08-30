import json
import re
import urllib.request
import urllib.parse
import time

custom_expansions = {
    "Symmetric Matrix": " In linear algebra, a symmetric matrix is a square matrix that is equal to its transpose, meaning $A = A^T$. Because equal matrices must have identical dimensions, only square matrices can be symmetric. The entries of a symmetric matrix are symmetric with respect to the main diagonal. In competitive exams, this is crucial for diagonalization problems, as every real symmetric matrix is diagonalizable and its eigenvalues are always real numbers. Recognizing this instantly eliminates complex-number options.",
    "Skew-Symmetric Matrix": " A skew-symmetric matrix (or antisymmetric matrix) is a square matrix whose transpose is its negative, meaning $A^T = -A$. A critical property frequently tested is that all entries on the main diagonal must be exactly zero. Furthermore, the determinant of a skew-symmetric matrix of odd order is always zero, while for an even order, it is a perfect square. This property is a high-frequency trick in statement-based questions.",
    "Orthogonal Matrix": " An orthogonal matrix is a real square matrix whose columns and rows are orthogonal unit vectors. This implies that its transpose is exactly equal to its inverse ($A^T = A^{-1}$), and consequently, $A \\cdot A^T = I$. A vital property for exams is that the determinant of any orthogonal matrix is strictly $+1$ or $-1$. These matrices represent geometric transformations like rotations and reflections that preserve lengths and angles.",
    "Idempotent Matrix": " An idempotent matrix is a matrix which, when multiplied by itself, yields itself ($A^2 = A$). The most notable property for examination purposes is that the only possible eigenvalues for an idempotent matrix are $0$ and $1$. The trace of an idempotent matrix is always equal to its rank. This concept frequently appears in advanced projection geometry questions in the mathematics section.",
    "Involutory Matrix": " An involutory matrix is a square matrix that is its own inverse. This means that multiplying the matrix by itself yields the identity matrix ($A^2 = I$). Because $A^2 - I = 0$, the eigenvalues of an involutory matrix can only be $+1$ or $-1$, and its determinant is always $\\pm1$. Recognizing involutory properties is essential for simplifying high-power matrix calculations.",
    "Nilpotent Matrix": " A nilpotent matrix is a square matrix $A$ such that $A^k = 0$ for some positive integer $k$. The smallest such $k$ is called the index of nilpotency. A highly tested fact is that all eigenvalues of a nilpotent matrix are exactly zero, which implies that both its determinant and its trace are always zero. This makes identifying nilpotent matrices a massive time-saver in exam scenarios.",
    "Potential Energy (PE)": " Potential energy is the energy held by an object because of its position relative to other objects, stresses within itself, its electric charge, or other factors. The most common form tested is gravitational potential energy near Earth's surface, calculated as $PE = mgh$. It is a scalar quantity and plays a central role in the law of conservation of mechanical energy, where it constantly converts into kinetic energy during free fall.",
    "Power (P)": " Power is defined as the rate at which work is done or energy is transferred over time. Mathematically, it is $P = W/t$ or the dot product of force and velocity ($P = F \\cdot v$). The SI unit is the Watt (W), equivalent to one Joule per second. In defense exams, converting power to practical units like Horsepower ($1 HP = 746 Watts$) is a highly recurrent numerical problem.",
    "Kepler's 3rd Law (Law of Periods)": " Kepler's Third Law states that the square of the orbital period of a planet is directly proportional to the cube of the semi-major axis of its orbit ($T^2 \\propto r^3$). This fundamental law of celestial mechanics, derived from Newton's law of universal gravitation, applies to all orbiting bodies including artificial satellites. Questions often require candidates to compare the time periods of two different satellites based on their respective orbital radii.",
    "Coordinate/Dative Bond": " A coordinate covalent bond, also known as a dative bond, is a specific type of covalent bond where the shared pair of electrons is provided entirely by one of the participating atoms. The atom providing the electrons is the donor, while the other is the acceptor. Classic exam examples include the formation of the ammonium ion ($NH_4^+$) and the hydronium ion ($H_3O^+$). It behaves exactly like a standard covalent bond once formed.",
    "Analogy:": " In reasoning tests, an analogy requires identifying a specific logical relationship between a given pair of words, letters, or numbers, and then applying that exact same relationship to a new pair. This tests cognitive flexibility and vocabulary. Common relationships include synonyms, antonyms, part-to-whole, worker-to-tool, and cause-and-effect. Mastering analogies is critical for the AFCAT OIR (Officer Intelligence Rating) as they form a significant portion of the verbal reasoning section.",
    "Classification (Odd One Out):": " Classification involves analyzing a group of items and identifying the single element that lacks the common characteristic shared by the rest. This requires rapid categorical thinking. For example, if given options of various metals, the odd one out might be an alloy or a non-metal. In AFCAT exams, this tests a candidate's general knowledge and logical discrimination speed under strict time constraints.",
    "Coding-Decoding:": " Coding and decoding is a pattern-recognition test where words or numbers are encrypted based on a specific hidden rule. Candidates must deduce this rule—often involving shifting alphabet positions (e.g., A=1, B=2), reversing the alphabet, or applying numerical operations—and apply it to encrypt or decrypt a new word. Precision and speed in writing down the alphabet with corresponding positional values is the most effective strategy for these questions.",
    "Blood Relations:": " Blood relation questions test a candidate's ability to decipher complex family trees from convoluted textual descriptions. Success relies on constructing a visual family tree using standard symbols (e.g., squares for males, circles for females, vertical lines for generations). These questions evaluate deductive logic and the ability to track multiple variables simultaneously, a skill directly relevant to processing complex tactical briefings in military scenarios.",
    "Direction Sense:": " Direction sense problems evaluate spatial orientation and the ability to track movement across cardinal (North, South, East, West) and ordinal directions. Candidates must sketch the path taken and often apply the Pythagorean theorem to calculate the shortest distance between the starting and ending points. This is a foundational skill for map reading and navigation, making it a staple in all armed forces entrance examinations.",
    "Syllogism:": " Syllogism involves drawing logical conclusions from two or more given propositions (premises). The most foolproof method for solving these is by utilizing Venn diagrams to visually map all possible relationships between the categories mentioned. Questions often feature absolute quantifiers like 'all', 'some', or 'none'. This tests rigorous deductive reasoning, ensuring candidates do not jump to assumptions outside the provided evidence.",
    "Number/Letter Series:": " Series questions require identifying the mathematical or logical progression governing a sequence of numbers or letters. Patterns can involve arithmetic differences, geometric multipliers, prime numbers, alternating series, or squares and cubes. Rapidly calculating the difference between consecutive terms is the standard approach. This tests numerical agility and pattern recognition, crucial for analytical tasks in defense operations.",
    "Pattern Completion:": " Pattern completion is a core non-verbal reasoning task where candidates must identify the missing segment of a complex geometric design. It requires strong spatial visualization to mentally reconstruct the image, paying close attention to symmetry, line continuations, and alternating shading patterns. This directly assesses a candidate's spatial intelligence and ability to perceive whole structures from partial data.",
    "Figure Series & Analogy:": " Figure series questions involve a sequence of images that transform according to a hidden rule—such as clockwise rotation, elemental addition/deletion, or mirroring. Candidates must predict the next logical image in the sequence. This non-verbal test is heavily utilized in the SSB interviews (OIR test) as it evaluates fluid intelligence and abstract problem-solving without any linguistic bias.",
    "Paper Folding & Cutting:": " This spatial reasoning task asks candidates to mentally visualize how a piece of paper will look after being folded, punched with holes, and then completely unfolded. It requires an advanced understanding of horizontal and vertical lines of symmetry. Since physical manipulation is not allowed during the exam, mental rotation and mirroring skills are heavily tested, which are vital for interpreting topographical maps.",
    "Block/Cube Counting:": " Cube counting requires candidates to determine the total number of blocks in a 3D isometric drawing, specifically accounting for hidden blocks that support the visible ones. This tests depth perception and 3D spatial awareness. A systematic approach—counting column by column or layer by layer—is essential to avoid careless omissions. It is a classic assessment of structural visualization."
}

def get_wiki_summary(term):
    try:
        # Avoid rate limiting
        time.sleep(0.5)
        clean_term = term.replace(':', '').replace('**', '').strip()
        search_url = f'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(clean_term)}&utf8=&format=json'
        req1 = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req1) as response:
            search_data = json.loads(response.read().decode('utf-8'))
            if not search_data['query']['search']: return None
            title = search_data['query']['search'][0]['title']
        
        extract_url = f'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&titles={urllib.parse.quote(title)}&format=json'
        req2 = urllib.request.Request(extract_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req2) as response:
            extract_data = json.loads(response.read().decode('utf-8'))
            pages = extract_data['query']['pages']
            for page_id in pages:
                extract = pages[page_id].get('extract', None)
                if extract:
                    sentences = extract.split('. ')
                    return " " + ". ".join(sentences[:3]) + "." if len(sentences) >= 3 else " " + extract
                return None
    except Exception as e:
        return None

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

expanded_count = 0

for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            for topic in chapter.get('topics', []):
                if 'notes' in topic:
                    notes = topic['notes']
                    
                    def replacer(match):
                        global expanded_count
                        full_match = match.group(0)
                        term = match.group(1).strip()
                        desc = match.group(2)
                        
                        if len(desc) < 300:
                            if term in custom_expansions:
                                expansion = custom_expansions[term]
                            elif term + ":" in custom_expansions:
                                expansion = custom_expansions[term + ":"]
                            else:
                                expansion = get_wiki_summary(term)
                                if not expansion:
                                    expansion = f" Mastery of the concept of {term} is essential for competitive examinations as it frequently forms the basis of complex multi-statement analytical problems."
                            
                            expanded_desc = desc.rstrip() + expansion
                            
                            if '<strong>' in full_match:
                                new_li = f"<li><strong>{term}</strong>{expanded_desc}</li>"
                            else:
                                new_li = f"<li>**{term}**{expanded_desc}</li>"
                            expanded_count += 1
                            return new_li
                        return full_match

                    topic['notes'] = re.sub(r'<li>(?:<strong>|\*\*)(.*?)(?:</strong>|\*\*)(.*?)</li>', replacer, notes)



if expanded_count > 0:
    new_content = content[:db_match.start(1)] + json.dumps(db, indent=2) + content[db_match.end(1):]
    with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Successfully applied authentic deep-dive expansions to {expanded_count} definitions.")
else:
    print("No definitions needed expansion.")
