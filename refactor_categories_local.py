import json
import os

def get_category(topic_name):
    t = topic_name.lower()
    # History
    if any(x in t for x in ['indus', 'harappa', 'mohenjo']): return ('History', 'Indus Valley Civilization')
    if any(x in t for x in ['vedic', 'aryan']): return ('History', 'Vedic Period')
    if any(x in t for x in ['maurya', 'ashoka']): return ('History', 'Mauryan Empire')
    if any(x in t for x in ['gupta']): return ('History', 'Gupta Empire')
    if any(x in t for x in ['buddhism', 'jainism', 'mahajanapada']): return ('History', 'Ancient Indian Religions')
    
    # Geography
    if any(x in t for x in ['river', 'ganga', 'yamuna', 'brahmaputra', 'drainage', 'dam']): return ('Geography', 'Indian River System')
    if any(x in t for x in ['soil', 'alluvial', 'black soil', 'peaty']): return ('Geography', 'Soils of India')
    if any(x in t for x in ['earthquake', 'seismic', 'wave', 'epicenter']): return ('Geography', 'Earthquakes')
    if any(x in t for x in ['volcano', 'magma', 'lava', 'igneous', 'rock', 'mineral']): return ('Geography', 'Volcanism & Rocks')
    if any(x in t for x in ['atmosphere', 'climate', 'weather', 'insolation', 'albedo']): return ('Geography', 'Climatology')
    if any(x in t for x in ['ocean', 'strait', 'shelf']): return ('Geography', 'Oceanography')
    if any(x in t for x in ['latitude', 'longitude', 'equator', 'tropic', 'time zone']): return ('Geography', 'Earth & Latitudes')

    # Chemistry
    if any(x in t for x in ['atom', 'molecule', 'isotope', 'model']): return ('Chemistry', 'Atomic Structure')
    if any(x in t for x in ['reaction', 'exothermic', 'decomposition']): return ('Chemistry', 'Chemical Reactions')
    if any(x in t for x in ['solid', 'liquid', 'gas', 'colloid', 'matter']): return ('Chemistry', 'States of Matter')
    if any(x in t for x in ['acid', 'base', 'ph']): return ('Chemistry', 'Acids and Bases')
    if any(x in t for x in ['metal', 'alloy', 'ore']): return ('Chemistry', 'Metals and Non-Metals')

    # Biology
    if any(x in t for x in ['cell', 'tissue', 'monera', 'bacteria', 'virus']): return ('Biology', 'Cell Biology & Diversity')
    if any(x in t for x in ['disease', 'syndrome', 'deficiency']): return ('Biology', 'Human Diseases')
    if any(x in t for x in ['genetics', 'allele', 'trait', 'pea']): return ('Biology', 'Genetics')
    if any(x in t for x in ['plant', 'vegetative', 'nastic', 'tropic']): return ('Biology', 'Plant Physiology')
    if any(x in t for x in ['hormone', 'endocrine', 'brain', 'blood']): return ('Biology', 'Human Anatomy')

    # Physics
    if any(x in t for x in ['motion', 'velocity', 'acceleration', 'distance', 'speed', 'vector', 'scalar']): return ('Physics', 'Kinematics')
    if any(x in t for x in ['force', 'coriolis', 'newton']): return ('Physics', 'Laws of Motion')
    if any(x in t for x in ['energy', 'work', 'power', 'kinetic']): return ('Physics', 'Work, Energy, Power')

    # Default
    return ('General Studies', topic_name)


def run_local_reclass():
    if not os.path.exists("notes_database.json"): return
    with open("notes_database.json", "r", encoding="utf-8") as f:
        data = json.load(f)
        
    updated = 0
    for item in data:
        topic = item.get('topic', '')
        if not item.get('subject') or not item.get('chapter'):
            subj, chap = get_category(topic)
            item['subject'] = subj
            item['chapter'] = chap
            updated += 1
            
    with open("notes_database.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    print(f"Locally reclassified {updated} legacy items!")

if __name__ == "__main__":
    run_local_reclass()
