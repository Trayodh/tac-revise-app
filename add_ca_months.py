import json

filename = "notes_data_upgraded.js"
print(f"Processing {filename}...")
with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

# notes_data_upgraded.js has let CURRENT_AFFAIRS_DB = {...}; and const NOTES_DATABASE = {...};
# We need to extract CURRENT_AFFAIRS_DB, add the new months, and write it back.
split_str = "const NOTES_DATABASE = "
parts = content.split(split_str)

ca_db_str = parts[0]
nd_json_str = parts[1]

# Extract JSON from ca_db_str
prefix = "let CURRENT_AFFAIRS_DB = "
ca_json_str = ca_db_str.replace(prefix, "").strip()
if ca_json_str.endswith(";"):
    ca_json_str = ca_json_str[:-1]

ca_db = json.loads(ca_json_str)

months_to_add = ["August 2026", "September 2026", "October 2026", "November 2026", "December 2026", "January 2027", "February 2027"]
for month in months_to_add:
    if month not in ca_db:
        ca_db[month] = []

new_ca_db_str = prefix + json.dumps(ca_db, indent=2) + ";\n\n"

with open(filename, 'w', encoding='utf-8') as f:
    f.write(new_ca_db_str + split_str + nd_json_str)

print("Added new months to CURRENT_AFFAIRS_DB")
