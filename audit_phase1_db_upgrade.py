import sqlite3
import os

def upgrade_schema():
    db_path = 'intelligence_db.sqlite'
    if not os.path.exists(db_path):
        print("DB does not exist yet. It will be created by the classifier.")
        return

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Check if columns exist
    cursor.execute("PRAGMA table_info(pyq_intelligence)")
    columns = [col[1] for col in cursor.fetchall()]
    
    new_columns = {
        'obscurity': 'TEXT',
        'classifier_model': 'TEXT',
        'classifier_version': 'TEXT',
        'prompt_version': 'TEXT',
        'processing_timestamp': 'REAL',
        'review_status': 'TEXT',
        'escalation_level': 'INTEGER',
        'justification': 'TEXT'
    }
    
    for col_name, col_type in new_columns.items():
        if col_name not in columns:
            print(f"Adding column {col_name}...")
            cursor.execute(f"ALTER TABLE pyq_intelligence ADD COLUMN {col_name} {col_type}")
            
    conn.commit()
    conn.close()
    print("Schema upgraded.")

if __name__ == "__main__":
    upgrade_schema()
