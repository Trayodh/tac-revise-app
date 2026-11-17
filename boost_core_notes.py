"""
boost_core_notes.py

Generates deep, high-density core textbook expansions (2-part pass) for all
chapters in boost_manifest.json (where core narrative < 2,200 words or total < 5,000 words),
so every chapter in the compendium reaches 4,500+ core words / 6,000+ total words.
"""

import argparse
import json
import os
import re
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
from dotenv import load_dotenv

sys.stdout.reconfigure(encoding="utf-8")
load_dotenv(".env")

GEMINI_KEY = os.environ.get("GEMINI_API_KEY", "")
GROQ_KEY = os.environ.get("GROQ_API_KEY", "")
OPENROUTER_KEY = os.environ.get("OPENROUTER_API_KEY", "")

MANIFEST_FILE = "boost_manifest.json"
CACHE_FILE = "boost_cache.json"

lock = threading.Lock()
state_lock = threading.Lock()

PROVIDERS = [
    {"kind": "gemini", "model": "gemini-3.1-flash-lite-preview", "max_tokens": 32768, "min_gap": 4.0},
    {"kind": "groq", "model": "openai/gpt-oss-120b", "max_tokens": 5500, "min_gap": 32.0},
    {"kind": "groq", "model": "qwen/qwen3.8-27b", "max_tokens": 5500, "min_gap": 32.0},
    {"kind": "groq", "model": "openai/gpt-oss-20b", "max_tokens": 5500, "min_gap": 32.0},
    {"kind": "openrouter", "model": "nvidia/nemotron-3.5-lightning:free", "max_tokens": 16384, "min_gap": 6.0},
    {"kind": "openrouter", "model": "google/gemma-4-31b-it:free", "max_tokens": 16384, "min_gap": 8.0},
]

provider_state = {
    f"{p['kind']}:{p['model']}": {"ready_at": 0.0, "dead": False}
    for p in PROVIDERS
}
_rr_idx = 0


def load_cache(path):
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}


def save_cache(path, data):
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)
    os.replace(tmp, path)


def clean_ai_html(raw: str) -> str:
    if not raw:
        return ""
    txt = re.sub(r"<think>[\s\S]*?</think>", "", raw, flags=re.IGNORECASE).strip()
    txt = re.sub(r"^```(?:html|HTML)?\s*", "", txt)
    txt = re.sub(r"\s*```$", "", txt)
    return txt.strip()


def has_markdown_pipe_table(html: str) -> bool:
    return bool(re.search(r"^\s*\|[^|\n]+\|[^|\n]+\|\s*\n\s*\|[\s:-]+\|", html, re.MULTILINE))


def repair_html_balance(html: str) -> str:
    ot = len(re.findall(r"<table\b", html, re.IGNORECASE))
    ct = len(re.findall(r"</table>", html, re.IGNORECASE))
    if ot > ct:
        html += "\n</tbody></table>" * (ot - ct)
    od = len(re.findall(r"<div\b", html, re.IGNORECASE))
    cd = len(re.findall(r"</div>", html, re.IGNORECASE))
    if od > cd and (od - cd) <= 4:
        html += "\n</div>" * (od - cd)
    return html


def call_provider(p: dict, prompt: str) -> str:
    kind, model, max_tok = p["kind"], p["model"], p["max_tokens"]
    if kind == "gemini":
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_KEY}"
        r = requests.post(
            url,
            headers={"Content-Type": "application/json"},
            json={"contents": [{"parts": [{"text": prompt}]}], "generationConfig": {"temperature": 0.25, "maxOutputTokens": max_tok}},
            timeout=110,
        )
        if r.status_code == 200:
            cands = r.json().get("candidates", [])
            if cands:
                return "".join(pt.get("text", "") for pt in cands[0].get("content", {}).get("parts", []) if not pt.get("thought"))
            return ""
        if r.status_code == 429 and ("PerDay" in r.text or "FreeTier" in r.text):
            raise RuntimeError(f"DAILY_LIMIT:{model}")
        if r.status_code in (429, 503):
            raise RuntimeError(f"COOLDOWN:60:{model} HTTP {r.status_code}")
        raise RuntimeError(f"ERR:{model} HTTP {r.status_code}: {r.text[:120]}")

    elif kind == "groq":
        r = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={"Authorization": f"Bearer {GROQ_KEY}", "Content-Type": "application/json"},
            json={"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.25, "max_tokens": max_tok},
            timeout=110,
        )
        if r.status_code == 200:
            return r.json()["choices"][0]["message"]["content"] or ""
        if r.status_code in (429, 413, 503):
            raise RuntimeError(f"COOLDOWN:62:{model} HTTP {r.status_code}")
        raise RuntimeError(f"ERR:{model} HTTP {r.status_code}: {r.text[:120]}")

    elif kind == "openrouter":
        r = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={"Authorization": f"Bearer {OPENROUTER_KEY}", "Content-Type": "application/json"},
            json={"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.25, "max_tokens": max_tok},
            timeout=110,
        )
        if r.status_code == 200:
            choices = r.json().get("choices", [])
            return (choices[0].get("message", {}).get("content") or "") if choices else ""
        if r.status_code in (429, 502, 503):
            raise RuntimeError(f"COOLDOWN:45:{model} HTTP {r.status_code}")
        if r.status_code == 402:
            raise RuntimeError(f"DAILY_LIMIT:{model}")
        raise RuntimeError(f"ERR:{model} HTTP {r.status_code}: {r.text[:120]}")
    return ""


def acquire_provider():
    global _rr_idx
    with state_lock:
        now = time.time()
        n = len(PROVIDERS)
        soonest = float("inf")
        for offset in range(n):
            p = PROVIDERS[(_rr_idx + offset) % n]
            key = f"{p['kind']}:{p['model']}"
            st = provider_state[key]
            if st["dead"]:
                continue
            if st["ready_at"] <= now:
                _rr_idx = (_rr_idx + offset + 1) % n
                st["ready_at"] = now + p["min_gap"]
                return p
            if st["ready_at"] < soonest:
                soonest = st["ready_at"]
        return soonest


def call_with_scheduler(prompt: str, min_chars: int = 5000) -> str:
    last_err = ""
    deadline = time.time() + 420
    attempts = 0
    while time.time() < deadline and attempts < 14:
        res = acquire_provider()
        if isinstance(res, float):
            if res == float("inf"):
                raise RuntimeError(f"All providers exhausted: {last_err}")
            time.sleep(min(max(0.5, res - time.time()), 25.0))
            continue
        p = res
        key = f"{p['kind']}:{p['model']}"
        attempts += 1
        try:
            raw = call_provider(p, prompt)
            cleaned = clean_ai_html(raw)
            if len(cleaned) < min_chars:
                last_err = f"{p['model']} too short ({len(cleaned)})"
                continue
            if has_markdown_pipe_table(cleaned):
                last_err = f"{p['model']} returned markdown pipe table"
                continue
            return repair_html_balance(cleaned)
        except Exception as e:
            msg = str(e)
            last_err = msg
            with state_lock:
                if msg.startswith("DAILY_LIMIT:"):
                    provider_state[key]["dead"] = True
                    print(f"  [PROVIDER DISABLED] {key}")
                elif msg.startswith("COOLDOWN:"):
                    secs = int(msg.split(":")[1])
                    provider_state[key]["ready_at"] = max(provider_state[key]["ready_at"], time.time() + secs)
                else:
                    provider_state[key]["ready_at"] = max(provider_state[key]["ready_at"], time.time() + 15)
    raise RuntimeError(f"Failed after {attempts} attempts: {last_err}")


def prompt_deep_theory(item: dict) -> str:
    return f"""You are the Chief Textbook Author & Lead Strategist for Jayastra (UPSC NDA, CDS, AFCAT, CAPF).
The current textbook masterclass for this chapter is too brief. Write an EXHAUSTIVE, encyclopedic **Deep Textbook Expansion (Part 1: Theory, Mechanisms & Comprehensive Matrices)** for:

Subject: {item['subject'].upper()}
Chapter: {item['title']} (ID: {item['id']})
Syllabus Scope: {item['syllabus_desc']}

REQUIREMENTS (MAXIMUM SUBSTANTIVE TEXTBOOK DEPTH — ZERO FLUFF):
1. Write 2,000–3,500+ words (14,000–24,000 characters) of crisp, exam-authoritative HTML prose and tables.
2. Output clean HTML fragments ONLY (NO `<html>`, `<body>`, NO markdown fences, NO markdown pipe tables).
3. Include:
   - `<h4 style="border-left: 3px solid var(--accent); padding-left: 10px; margin-top: 24px; color: var(--text-primary); font-weight: 700;">📖 DEEP CONCEPTUAL ENCYCLOPEDIA &amp; MECHANISMS</h4>`
     Write thorough, textbook-grade multi-paragraph explanations for EVERY subtopic in Syllabus Scope, including underlying physical/chemical laws, geological/climatic processes, constitutional articles & judicial doctrines, biological pathways, or mathematical proofs (`$...$` / `$$...$$` for formulas).
   - `<h4 style="border-left: 3px solid var(--info); padding-left: 10px; margin-top: 24px; color: var(--text-primary); font-weight: 700;">📊 EXHAUSTIVE DATA, CLASSIFICATION &amp; COMPARISON MATRICES</h4>`
     Include TWO detailed HTML `<table>` matrices (12+ rows each!) comparing sub-types, locations/sites, values/constants, articles, exceptions, or rules.
   - `<div class="mnemonic-box"><strong>💡 HIGH-SPEED MEMORY TRIGGERS &amp; MNEMONICS:</strong> ... </div>` with 5 crisp mnemonics."""


def prompt_deep_drills(item: dict) -> str:
    return f"""You are the Chief Textbook Author & Lead Strategist for Jayastra (UPSC NDA, CDS, AFCAT, CAPF).
Write **Deep Textbook Expansion (Part 2: Worked Archetypes, Edge Cases, Defence Context & 30-Point Fact Bank)** for:

Subject: {item['subject'].upper()}
Chapter: {item['title']} (ID: {item['id']})
Syllabus Scope: {item['syllabus_desc']}

REQUIREMENTS (MAXIMUM EXAM UTILITY — ZERO FLUFF):
1. Write 2,000–3,500+ words (14,000–24,000 characters) of crisp HTML.
2. Output clean HTML fragments ONLY (NO `<html>`, `<body>`, NO markdown fences, NO markdown pipe tables).
3. Include:
   - `<h4 style="border-left: 3px solid var(--warning); padding-left: 10px; margin-top: 24px; color: var(--text-primary); font-weight: 700;">⚡ WORKED EXAM ARCHETYPES &amp; 10-SECOND ELIMINATION PLAYBOOKS</h4>`
     Provide 8 detailed worked examples in `<div class="msc-checkpoint">` cards (multi-statement UPSC CDS/NDA problems, numerical problems with step-by-step + shortcut tricks, or grammar/reasoning diagnostics).
   - `<div class="trap-box"><strong>⚠️ CRITICAL EXAM EXCEPTIONS &amp; EDGE CASES:</strong> ... </div>` with 8+ edge cases.
   - `<h4 style="border-left: 3px solid var(--success); padding-left: 10px; margin-top: 24px; color: var(--text-primary); font-weight: 700;">📚 30-POINT MASTER REVISION FACT BANK</h4>`
     Provide 30 dense, high-yield `<li>` bullets packing exact facts, dates, locations, species, constants, articles, or rules."""


def process_item(item: dict, cache: dict) -> tuple[str, int, int]:
    ch_id = item["id"]
    p1 = call_with_scheduler(prompt_deep_theory(item), min_chars=5500)
    p2 = call_with_scheduler(prompt_deep_drills(item), min_chars=5500)
    combined = f"\n<!-- CORE_BOOST_EXPANSION -->\n<div class=\"core-boost-section\" style=\"margin-top: 28px;\">\n{p1}\n\n{p2}\n</div>\n"
    plain_words = len(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", combined)).strip().split())
    with lock:
        cache[ch_id] = {"id": ch_id, "subject": item["subject"], "chars": len(combined), "words": plain_words, "html": combined}
        save_cache(CACHE_FILE, cache)
    return ch_id, len(combined), plain_words


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    manifest = json.load(open(MANIFEST_FILE, "r", encoding="utf-8"))
    cache = load_cache(CACHE_FILE)
    pending = [t for t in manifest["targets"] if t["id"] not in cache]
    if args.limit > 0:
        pending = pending[: args.limit]

    print(f"=== CORE TEXTBOOK BOOST: {len(pending)} pending ({len(cache)} already cached) ===")
    done = 0
    errors = 0
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futs = {pool.submit(process_item, it, cache): it for it in pending}
        for fut in as_completed(futs):
            it = futs[fut]
            try:
                cid, chars, words = fut.result()
                done += 1
                print(f"  [BOOST {done}/{len(pending)}] ✅ {cid} (+{words:,} words / +{chars:,} chars)")
            except Exception as e:
                errors += 1
                print(f"  [BOOST ERR] ❌ {it['id']}: {e}")
    print(f"=== CORE TEXTBOOK BOOST DONE: {done} succeeded, {errors} failed ===")


if __name__ == "__main__":
    main()
