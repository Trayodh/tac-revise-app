"""
Targeted AI Notes Generator for Defence Exams
Generates comprehensive, exam-focused notes for:
History, Geography, Physics, Chemistry, Biology

Uses Gemini (primary) → Groq → Cerebras as fallback.
Outputs to notes_generated_targeted.js in EXPANDED_NOTES_DATA format.
"""
import os
import json
import time
import sys
import requests
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
GROQ_API_KEY   = os.environ.get("GROQ_API_KEY", "")
CEREBRAS_KEY   = os.environ.get("CEREBRAS_API_KEY", "")

TARGET_SUBJECTS = {"History", "Geography", "Physics", "Chemistry", "Biology"}

OPENROUTER_KEY = os.environ.get("OPENROUTER_API_KEY", "")

# OpenRouter free models to try in sequence
OPENROUTER_FREE_MODELS = [
    "poolside/laguna-s-2.1:free",
    "poolside/laguna-xs-2.1:free",
    "qwen/qwen3.8-27b:free",
    "google/gemma-4-31b-it:free",
    "google/gemma-4-26b-a4b-it:free",
    "nvidia/nemotron-3-super-120b-a12b:free",
    "nvidia/nemotron-3-ultra-550b-a55b:free",
]

# ─── Syllabus topics per subject ─────────────────────────────────────────────
SYLLABUS = {
    "History": [
        ("Ancient India", "Indus Valley Civilization – cities, trade, script, decline"),
        ("Ancient India", "Vedic Period – Early Vedic vs Later Vedic society, polity, religion"),
        ("Ancient India", "Mahajanapadas – 16 kingdoms, Magadha's rise"),
        ("Ancient India", "Buddhism – life of Buddha, 4 Noble Truths, 8-fold Path, councils, sects"),
        ("Ancient India", "Jainism – Mahavira, 5 Mahavratas, sects"),
        ("Ancient India", "Mauryan Empire – Chandragupta, Ashoka, Dhamma, decline"),
        ("Ancient India", "Gupta Empire – golden age, Chandragupta II, Skandagupta, art & science"),
        ("Ancient India", "Sangam Age – Chera, Chola, Pandya kingdoms; Tamil literature"),
        ("Ancient India", "Ancient Culture – art, architecture, science & technology"),
        ("Medieval India", "Early Medieval Kingdoms – Pallavas, Chalukyas, Rashtrakutas"),
        ("Medieval India", "Delhi Sultanate – Slave, Khalji, Tughlaq, Sayyid, Lodi dynasties"),
        ("Medieval India", "Vijayanagara Empire – administration, Krishnadevaraya, decline"),
        ("Medieval India", "Mughal Empire – Babur to Aurangzeb; administration, art, culture"),
        ("Medieval India", "Marathas – Shivaji, Peshwas, decline"),
        ("Medieval India", "Bhakti & Sufi Movements – key saints, philosophy"),
        ("Modern India", "European Arrival – Portuguese, Dutch, French, British"),
        ("Modern India", "Governor-Generals & Viceroys – key policies and events"),
        ("Modern India", "Revolt of 1857 – causes, key figures, consequences"),
        ("Modern India", "Socio-Religious Reform Movements – Raja Ram Mohan Roy, Dayanand, Vivekananda"),
        ("Modern India", "Indian National Congress – formation, early moderates vs extremists"),
        ("Modern India", "Gandhian Era – Non-Cooperation, Civil Disobedience, Quit India"),
        ("Modern India", "Constitutional Development – Acts of 1909, 1919, 1935"),
        ("Modern India", "Independence & Partition – 1947, integration of princely states"),
    ],
    "Geography": [
        ("Physical Geography", "Interior of Earth – layers, discontinuities, seismic waves"),
        ("Physical Geography", "Rocks & Minerals – igneous, sedimentary, metamorphic; rock cycle"),
        ("Physical Geography", "Earthquakes & Volcanoes – causes, types, measurement, distribution"),
        ("Physical Geography", "Plate Tectonics – plates, boundaries, sea-floor spreading"),
        ("Physical Geography", "Geomorphology – mountains, plateaus, plains, erosion landforms"),
        ("Physical Geography", "Hydrosphere – rivers, lakes, ocean currents, tides"),
        ("Physical Geography", "Atmosphere – layers, composition, temperature, pressure, winds"),
        ("Physical Geography", "Monsoon – mechanism, ITCZ, El Niño / La Niña"),
        ("Physical Geography", "Climate & Natural Vegetation – Koppen's classification, biomes"),
        ("Indian Geography", "Physiographic Divisions – Himalayas, Northern Plains, Deccan, Coastal Plains, Islands"),
        ("Indian Geography", "Indian Rivers – Himalayan vs Peninsular rivers; major dams"),
        ("Indian Geography", "Indian Climate – seasons, monsoon, regional variations"),
        ("Indian Geography", "Soils of India – alluvial, black, red, laterite, mountain soils"),
        ("Indian Geography", "Agriculture – crops, seasons (Kharif/Rabi/Zaid), irrigation"),
        ("Indian Geography", "Minerals & Energy Resources – coal, oil, iron ore, renewable energy"),
        ("Indian Geography", "Industries – types, distribution, major industrial regions"),
        ("Indian Geography", "Transport – rail, road, water, air; national highways"),
        ("Indian Geography", "Population & Urbanisation – census, density, urbanisation trends"),
        ("World Geography", "Continents & Oceans – physical features, major rivers, mountains"),
        ("World Geography", "Climate Zones & Biomes – tropical, temperate, polar zones"),
        ("World Geography", "Important Geographic Locations – straits, gulfs, passes, peaks"),
    ],
    "Physics": [
        ("Mechanics", "Units & Measurements – SI units, dimensions, errors"),
        ("Mechanics", "Scalars & Vectors – types, addition, resolution, dot & cross products"),
        ("Mechanics", "Kinematics – equations of motion, projectile, circular motion"),
        ("Mechanics", "Newton's Laws of Motion – applications, friction, apparent weight"),
        ("Mechanics", "Work, Energy & Power – work-energy theorem, conservative forces, power"),
        ("Mechanics", "Centre of Mass & Momentum – conservation of momentum, collisions"),
        ("Mechanics", "Rotational Motion – torque, moment of inertia, angular momentum"),
        ("Mechanics", "Gravitation – Kepler's laws, orbital velocity, escape velocity, satellites"),
        ("Properties of Matter", "Elasticity – Hooke's law, moduli of elasticity, stress-strain"),
        ("Properties of Matter", "Fluid Mechanics – Archimedes' principle, Bernoulli, viscosity, surface tension"),
        ("Heat & Thermodynamics", "Heat & Temperature – thermal expansion, specific heat, latent heat"),
        ("Heat & Thermodynamics", "Thermodynamics – laws, Carnot engine, entropy"),
        ("Waves & Sound", "Waves – types, wave equation, superposition, standing waves"),
        ("Waves & Sound", "Sound – velocity, intensity, Doppler effect, resonance"),
        ("Optics", "Reflection & Refraction – laws, mirrors, lenses, total internal reflection"),
        ("Optics", "Optical Instruments – microscope, telescope, human eye, defects"),
        ("Optics", "Wave Optics – interference, diffraction, polarisation"),
        ("Electricity & Magnetism", "Electrostatics – Coulomb's law, electric field, potential, capacitors"),
        ("Electricity & Magnetism", "Current Electricity – Ohm's law, Kirchhoff's laws, circuits"),
        ("Electricity & Magnetism", "Magnetism & Electromagnetism – magnets, magnetic effects of current, motors, generators"),
        ("Modern Physics", "Dual Nature of Matter – photoelectric effect, de Broglie wavelength"),
        ("Modern Physics", "Atomic & Nuclear Physics – Bohr model, radioactivity, fission, fusion"),
        ("Electronics", "Semiconductors & Basic Electronics – diodes, transistors, logic gates"),
    ],
    "Chemistry": [
        ("Physical Chemistry", "Matter – states, properties, changes, classification"),
        ("Physical Chemistry", "Atomic Structure – Thomson, Rutherford, Bohr models; quantum numbers"),
        ("Physical Chemistry", "Periodic Table – periods, groups, periodic properties"),
        ("Physical Chemistry", "Chemical Bonding – ionic, covalent, coordinate, metallic bonds"),
        ("Physical Chemistry", "States of Matter – kinetic theory, gas laws, van der Waals"),
        ("Physical Chemistry", "Thermochemistry – enthalpy, Hess's law, bond energies"),
        ("Physical Chemistry", "Chemical Equilibrium – Le Chatelier's principle, Kp, Kc"),
        ("Physical Chemistry", "Electrochemistry – electrolysis, electrochemical cells, corrosion"),
        ("Physical Chemistry", "Solutions – types, concentration, colligative properties"),
        ("Physical Chemistry", "Acids, Bases & Salts – definitions, pH, neutralisation, buffer"),
        ("Inorganic Chemistry", "Metals & Non-Metals – properties, reactivity series, extraction"),
        ("Inorganic Chemistry", "Important Compounds – oxides, salts; common chemicals and uses"),
        ("Inorganic Chemistry", "Oxidation & Reduction – redox reactions, oxidising/reducing agents"),
        ("Organic Chemistry", "Carbon Compounds – allotropy, hydrocarbons, functional groups"),
        ("Organic Chemistry", "Organic Reactions – combustion, addition, substitution, polymerisation"),
        ("Applied Chemistry", "Fuels – types, calorific value, fossil fuels, alternative fuels"),
        ("Applied Chemistry", "Environmental Chemistry – air, water, soil pollution; greenhouse effect, ozone"),
        ("Applied Chemistry", "Common Industrial Chemicals – NaOH, H2SO4, fertilisers, cement, soaps"),
        ("Applied Chemistry", "Everyday Chemistry – food preservation, antioxidants, cleaning agents"),
    ],
    "Biology": [
        ("Cell Biology", "Cell – discovery, types (prokaryotic/eukaryotic), organelles and functions"),
        ("Cell Biology", "Cell Division – mitosis vs meiosis, significance"),
        ("Tissues & Anatomy", "Tissues – plant tissues, animal tissues, histology"),
        ("Human Physiology", "Digestive System – organs, enzymes, absorption, nutrition"),
        ("Human Physiology", "Respiratory System – breathing mechanism, gas exchange, disorders"),
        ("Human Physiology", "Circulatory System – heart, blood vessels, blood, cardiac cycle"),
        ("Human Physiology", "Nervous System – neuron, CNS, PNS, reflex arc"),
        ("Human Physiology", "Endocrine System – hormones, glands, disorders"),
        ("Human Physiology", "Excretory System – kidney, nephron, dialysis"),
        ("Human Physiology", "Reproductive System – male, female; fertilisation, pregnancy"),
        ("Genetics & Evolution", "Genetics – Mendel's laws, dominance, sex-linked traits, mutations"),
        ("Genetics & Evolution", "Molecular Biology – DNA structure, replication, transcription, translation"),
        ("Genetics & Evolution", "Evolution – theories (Lamarck, Darwin), evidences, natural selection"),
        ("Plant Biology", "Plant Morphology – root, stem, leaf, flower, fruit"),
        ("Plant Biology", "Photosynthesis – light/dark reactions, factors affecting, C3/C4 plants"),
        ("Plant Biology", "Plant Respiration & Transpiration – mechanisms"),
        ("Ecology", "Ecosystem – components, food chains, food webs, ecological pyramids"),
        ("Ecology", "Biodiversity – types, hotspots, threats, conservation"),
        ("Ecology", "Environment & Pollution – types, effects, remediation"),
        ("Health & Diseases", "Diseases – bacterial, viral, fungal, parasitic; vaccines, immunity"),
        ("Health & Diseases", "Nutrition – macro/micronutrients, vitamins, deficiency diseases"),
        ("Health & Diseases", "Microorganisms – beneficial and harmful; antibiotics"),
    ],
}

SYSTEM_PROMPT = """You are an expert Indian defence exam tutor. 
Generate rich, comprehensive HTML revision notes for the given topic. 
The notes must be:
- Fully self-contained (no "refer to textbook" statements)
- Exam-focused: cover every fact, date, name, formula a student needs for NDA/CDS/AFCAT
- Use clear HTML formatting with headings, tables, bullet points, and highlighted key terms
- Include mnemonics, key comparisons, and exam tips where relevant
- Use <strong> for important terms, <span style='color: var(--warning);'> for dates/numbers
- Wrap the whole output in <div class="revision-card">
- Length: at least 600 words of actual content
- Output ONLY the HTML string, no markdown code blocks"""

def slugify(text):
    import re
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def call_gemini(topic_text, chapter, subject):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    prompt = f"Subject: {subject}\nChapter: {chapter}\nTopic: {topic_text}\n\nGenerate comprehensive revision notes in HTML."
    data = {
        "contents": [{"parts": [{"text": prompt}]}],
        "systemInstruction": {"parts": [{"text": SYSTEM_PROMPT}]},
        "generationConfig": {"temperature": 0.3, "maxOutputTokens": 4096}
    }
    try:
        r = requests.post(url, json=data, timeout=60)
        r.raise_for_status()
        j = r.json()
        return j["candidates"][0]["content"]["parts"][0]["text"]
    except Exception as e:
        print(f"  Gemini error: {e}")
        return None

def call_groq(topic_text, chapter, subject):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {GROQ_API_KEY}", "Content-Type": "application/json"}
    user_msg = f"Subject: {subject}\nChapter: {chapter}\nTopic: {topic_text}\n\nGenerate comprehensive revision notes in HTML."
    data = {
        "model": "openai/gpt-oss-120b",
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_msg}
        ],
        "temperature": 0.3,
        "max_tokens": 4096
    }
    try:
        r = requests.post(url, headers=headers, json=data, timeout=60)
        r.raise_for_status()
        return r.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"  Groq error: {e}")
        return None

def call_cerebras(topic_text, chapter, subject):
    url = "https://api.cerebras.ai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {CEREBRAS_KEY}", "Content-Type": "application/json"}
    user_msg = f"Subject: {subject}\nChapter: {chapter}\nTopic: {topic_text}\n\nGenerate comprehensive revision notes in HTML."
    data = {
        "model": "gpt-oss-120b",
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_msg}
        ],
        "temperature": 0.3,
        "max_tokens": 4096
    }
    try:
        r = requests.post(url, headers=headers, json=data, timeout=60)
        r.raise_for_status()
        return r.json()["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"  Cerebras error: {e}")
        return None

def call_openrouter(topic_text, chapter, subject):
    if not OPENROUTER_KEY:
        return None
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {"Authorization": f"Bearer {OPENROUTER_KEY}", "Content-Type": "application/json"}
    user_msg = f"Subject: {subject}\nChapter: {chapter}\nTopic: {topic_text}\n\nGenerate comprehensive revision notes in HTML."
    for model in OPENROUTER_FREE_MODELS:
        data = {
            "model": model,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_msg}
            ],
            "max_tokens": 3000
        }
        try:
            r = requests.post(url, headers=headers, json=data, timeout=90)
            if r.ok:
                j = r.json()
                if "choices" in j and j["choices"]:
                    text = j["choices"][0]["message"]["content"]
                    if text and len(text) > 200:
                        print(f"  OK OpenRouter/{model.split('/')[1]} ({len(text)} chars)")
                        return text
                elif "error" in j:
                    print(f"  OpenRouter/{model}: upstream error - {j['error'].get('message','?')[:80]}")
            else:
                print(f"  OpenRouter/{model}: {r.status_code}")
        except Exception as e:
            print(f"  OpenRouter/{model} exception: {e}")
        time.sleep(2)
    return None


def generate_notes(topic_text, chapter, subject):
    """Try providers in order, return HTML string or None."""
    for fn, name in [(call_gemini, "Gemini"), (call_groq, "Groq"), (call_openrouter, "OpenRouter"), (call_cerebras, "Cerebras")]:
        print(f"  Trying {name}...")
        result = fn(topic_text, chapter, subject)
        if result:
            # Strip markdown code fences if model wraps HTML in them
            result = result.strip()
            if result.startswith("```html"):
                result = result[7:]
            if result.startswith("```"):
                result = result[3:]
            if result.endswith("```"):
                result = result[:-3]
            result = result.strip()
            if len(result) > 200:
                print(f"  OK {name} succeeded ({len(result)} chars)")
                return result
        time.sleep(2)
    return None

def main():
    output_file = "notes_generated_targeted.js"
    progress_file = "targeted_notes_progress.json"

    # Load progress if resuming
    done_ids = set()
    output_entries = []
    if os.path.exists(progress_file):
        try:
            with open(progress_file, encoding="utf-8") as f:
                progress = json.load(f)
                done_ids = set(progress.get("done", []))
                print(f"Resuming from {len(done_ids)} completed topics.")
        except:
            pass

    if os.path.exists(output_file):
        with open(output_file, encoding="utf-8") as f:
            content = f.read()
            # Count already written entries
            existing_count = content.count("EXPANDED_NOTES_DATA[")
            print(f"Output file exists with {existing_count} entries.")
    
    # Open output file in append mode
    out = open(output_file, "a", encoding="utf-8")
    
    # Write header if new file
    if not os.path.exists(output_file) or os.path.getsize(output_file) == 0:
        out.write("// AUTO-GENERATED: Comprehensive AI Notes for History, Geography, Physics, Chemistry, Biology\n")
        out.write("window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n")
        out.flush()

    total = sum(len(v) for v in SYLLABUS.values())
    done_count = 0
    failed_count = 0

    for subject, chapters in SYLLABUS.items():
        for chapter, topic in chapters:
            topic_id = f"ai-gen-{subject.lower()}-{slugify(topic)}"
            
            if topic_id in done_ids:
                print(f"[SKIP] {subject} > {topic[:50]}")
                continue

            done_count += 1
            print(f"\n[{done_count}/{total}] Generating: {subject} > {chapter} > {topic[:60]}")
            
            html = generate_notes(topic, chapter, subject)
            
            if html:
                # Escape backticks for JS template literal
                html_escaped = html.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
                out.write(f'window.EXPANDED_NOTES_DATA["{topic_id}"] = `\n{html_escaped}\n`;\n\n')
                out.flush()
                
                done_ids.add(topic_id)
                
                # Save progress
                with open(progress_file, "w", encoding="utf-8") as pf:
                    json.dump({"done": list(done_ids)}, pf)
                
                print(f"  SAVED: {topic_id}")
                time.sleep(5)  # 5s between notes - all limits fresh
            else:
                failed_count += 1
                print(f"  FAILED: {topic[:60]}")
                print("  Waiting 30s before next attempt...")
                time.sleep(30)

    out.close()
    print(f"\n=== DONE ===")
    print(f"Generated: {len(done_ids)} topics")
    print(f"Failed: {failed_count} topics")
    print(f"Output: {output_file}")

if __name__ == "__main__":
    main()
