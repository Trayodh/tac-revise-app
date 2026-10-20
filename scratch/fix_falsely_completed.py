import json

with open('pipeline_state.json', 'r', encoding='utf-8') as f:
    state = json.load(f)

fixed_count = 0
for name, info in state.items():
    tot = info.get('total_pages', 0)
    done = len(info.get('extracted_pages', []))
    if done < tot and info.get('status') == 'completed':
        info['status'] = 'in_progress'
        fixed_count += 1
        print(f"Reset {name}: {done}/{tot} pages (was falsely 'completed', now 'in_progress')")

with open('pipeline_state.json', 'w', encoding='utf-8') as f:
    json.dump(state, f, indent=2)

print(f"\nFixed {fixed_count} books in pipeline_state.json.")
