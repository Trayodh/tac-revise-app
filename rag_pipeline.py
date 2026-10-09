import os
import json
import re
import math
import numpy as np
from google import genai
from google.genai import types

# Load API Key from environment or hardcoded fallback for dev
API_KEY = os.environ.get("GEMINI_API_KEY", "AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM") 

# Configure Gemini Client
client = genai.Client(api_key=API_KEY)

def extract_js_data(filepath, variable_name):
    """
    Extracts JSON data from a JS file that starts with `let VARIABLE_NAME = { ... };`
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Very basic regex to find the object assignment
        pattern = re.compile(rf"let\s+{variable_name}\s*=\s*({{.*?}});", re.DOTALL)
        match = pattern.search(content)
        if match:
            json_str = match.group(1)
            # Fix common JS syntax issues to make it valid JSON
            # This might need adjustment depending on how dirty the JS object is
            return json.loads(json_str)
        else:
            print(f"Could not find {variable_name} in {filepath}")
            return None
    except Exception as e:
        print(f"Error parsing {filepath}: {e}")
        return None

def chunk_text(text, max_length=500):
    """
    Simple chunking by word count. For exam prep, semantic chunking is better, 
    but this is a basic start.
    """
    words = text.split()
    chunks = []
    for i in range(0, len(words), max_length):
        chunk = " ".join(words[i:i+max_length])
        chunks.append(chunk)
    return chunks

def build_index(data_source="notes_data.js"):
    print("Extracting data...")
    current_affairs = extract_js_data(data_source, "CURRENT_AFFAIRS_DB")
    
    if not current_affairs:
        print("Failed to load data. Exiting.")
        return
        
    documents = []
    metadata = []
    
    print("Chunking documents...")
    for month, items in current_affairs.items():
        for item in items:
            topic = item.get("topic", "General")
            text = item.get("text", "")
            
            # Metadata
            meta = {
                "month": month,
                "topic": topic,
                "id": item.get("id", "")
            }
            
            # Add to list
            documents.append(f"Topic: {topic}\nMonth: {month}\nDetails: {text}")
            metadata.append(meta)
            
    print(f"Total documents to embed: {len(documents)}")
    
    # In a real scenario, we batch this to avoid rate limits
    print("Generating embeddings using Gemini text-embedding-004...")
    embeddings = []
    batch_size = 10
    
    for i in range(0, len(documents), batch_size):
        batch = documents[i:i+batch_size]
        try:
            response = client.models.embed_content(
                model='gemini-embedding-2',
                contents=batch,
            )
            for emb in response.embeddings:
                embeddings.append(emb.values)
            print(f"Embedded batch {i//batch_size + 1}")
        except Exception as e:
            print(f"Error embedding batch: {e}")
            
    # Save index
    index_data = {
        "documents": documents,
        "metadata": metadata,
        "embeddings": embeddings
    }
    
    with open("vector_index.json", "w", encoding="utf-8") as f:
        json.dump(index_data, f)
        
    print("Saved vector_index.json!")

def cosine_similarity(a, b):
    dot = np.dot(a, b)
    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)
    return dot / (norm_a * norm_b)

def search(query, top_k=3):
    if not os.path.exists("vector_index.json"):
        print("Index not found. Please run build_index() first.")
        return
        
    with open("vector_index.json", "r", encoding="utf-8") as f:
        index_data = json.load(f)
        
    print(f"\nSearching for: '{query}'")
    # Embed query
    response = client.models.embed_content(
        model='gemini-embedding-2',
        contents=query,
    )
    query_emb = response.embeddings[0].values
    
    # Calculate similarities
    results = []
    for i, emb in enumerate(index_data["embeddings"]):
        sim = cosine_similarity(query_emb, emb)
        results.append((sim, index_data["documents"][i], index_data["metadata"][i]))
        
    # Sort and return top K
    results.sort(key=lambda x: x[0], reverse=True)
    
    print("\n--- Top Results ---")
    for i in range(min(top_k, len(results))):
        sim, doc, meta = results[i]
        print(f"Rank {i+1} (Score: {sim:.3f})")
        print(f"Topic: {meta['topic']}")
        print(f"Preview: {doc[:150]}...\n")

if __name__ == "__main__":
    # To build index:
    build_index()
    
    # To search (make sure you built the index first):
    search("What new missile was tested by DRDO?")
    print("RAG Pipeline Evaluation Script Ready.")
    print("Run build_index() to extract, embed and save your data.")
