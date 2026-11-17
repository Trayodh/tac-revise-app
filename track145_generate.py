"""
track145_generate.py

Rate-aware multi-provider AI generator for:
- Track 1 + Track 4: Two-part textbook masterclasses for all 122 under-scaled &
  newly split granular chapters.
- Track 5: High-density UPSC Statement-Trap Matrix (15 rows) +
  NCERT "Do You Know?" & Primary Source Blue-Box Compendium (10 items)
  for all 237 GS, Science, and Current Affairs chapters.

Features per-model cooldown tracking (distinguishing daily quota vs RPM/TPM),
automatic failover across Gemini, Groq (TPM-safe max_tokens=5500), and OpenRouter,
HTML validation/repair, and atomic JSON cache checkpointing.
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

MANIFEST_FILE = "track145_manifest.json"
CACHE_T14 = "track14_cache.json"
CACHE_T5 = "track5_cache.json"

lock = threading.Lock()
state_lock = threading.Lock()

PROVIDERS = [
    {"kind": "gemini", "model": "gemini-3.1-flash-lite-preview", "max_tokens": 32768, "min_gap": 4.0},
    {"kind": "openrouter", "model": "nvidia/nemotron-3-ultra-550b-a55b:free", "max_tokens": 16384, "min_gap": 3.0},
    {"kind": "openrouter", "model": "baidu/ernie-5.5-flash-preview:free", "max_tokens": 16384, "min_gap": 3.0},
    {"kind": "openrouter", "model": "nvidia/nemotron-3.5-super-vl:free", "max_tokens": 16384, "min_gap": 3.0},
    {"kind": "openrouter", "model": "nvidia/nemotron-3.5-lightning:free", "max_tokens": 16384, "min_gap": 3.0},
    {"kind": "groq", "model": "openai/gpt-oss-120b", "max_tokens": 5500, "min_gap": 35.0},
    {"kind": "groq", "model": "qwen/qwen3.8-27b", "max_tokens": 5500, "min_gap": 35.0},
    {"kind": "groq", "model": "openai/gpt-oss-20b", "max_tokens": 5500, "min_gap": 35.0},
    {"kind": "gemini", "model": "gemini-2.5-flash", "max_tokens": 32768, "min_gap": 5.0},
    {"kind": "gemini", "model": "gemini-3-flash-preview", "max_tokens": 32768, "min_gap": 5.0},
    {"kind": "gemini", "model": "gemini-2.5-flash-lite", "max_tokens": 32768, "min_gap": 4.0},
    {"kind": "openrouter", "model": "google/gemma-4-31b-it:free", "max_tokens": 16384, "min_gap": 5.0},
]

# Track per-provider cooldowns and next-allowed timestamp
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
        except Exception as e:
            print(f"[WARN] Could not load {path}: {e}")
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
    open_tables = len(re.findall(r"<table\b", html, re.IGNORECASE))
    close_tables = len(re.findall(r"</table>", html, re.IGNORECASE))
    if open_tables > close_tables:
        html += "\n</tbody></table>" * (open_tables - close_tables)

    open_divs = len(re.findall(r"<div\b", html, re.IGNORECASE))
    close_divs = len(re.findall(r"</div>", html, re.IGNORECASE))
    if open_divs > close_divs and (open_divs - close_divs) <= 4:
        html += "\n</div>" * (open_divs - close_divs)
    return html


def call_provider(p: dict, prompt: str) -> str:
    kind, model, max_tok = p["kind"], p["model"], p["max_tokens"]
    if kind == "gemini":
        if not GEMINI_KEY:
            raise RuntimeError("DEAD: No GEMINI_API_KEY")
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={GEMINI_KEY}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": 0.25, "maxOutputTokens": max_tok},
        }
        r = requests.post(url, headers={"Content-Type": "application/json"}, json=payload, timeout=110)
        if r.status_code == 200:
            cands = r.json().get("candidates", [])
            if cands:
                parts = cands[0].get("content", {}).get("parts", [])
                return "".join(pt.get("text", "") for pt in parts if not pt.get("thought"))
            return ""
        body = r.text
        if r.status_code == 429 and ("PerDay" in body or "85" in body or "FreeTier" in body):
            raise RuntimeError(f"DAILY_LIMIT:{model}")
        if r.status_code in (429, 503):
            raise RuntimeError(f"COOLDOWN:60:{model} HTTP {r.status_code}")
        raise RuntimeError(f"ERR:{model} HTTP {r.status_code}: {body[:120]}")

    elif kind == "groq":
        if not GROQ_KEY:
            raise RuntimeError("DEAD: No GROQ_API_KEY")
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
        if not OPENROUTER_KEY:
            raise RuntimeError("DEAD: No OPENROUTER_API_KEY")
        r = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={"Authorization": f"Bearer {OPENROUTER_KEY}", "Content-Type": "application/json"},
            json={"model": model, "messages": [{"role": "user", "content": prompt}], "temperature": 0.25, "max_tokens": max_tok},
            timeout=110,
        )
        if r.status_code == 200:
            data = r.json()
            choices = data.get("choices", [])
            if choices:
                return choices[0].get("message", {}).get("content") or ""
            return ""
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


def call_with_scheduler(prompt: str, min_chars: int = 4000) -> str:
    last_err = ""
    deadline = time.time() + 420  # Wait up to 7 min across rate-limit windows before giving up
    attempts = 0
    while time.time() < deadline and attempts < 14:
        res = acquire_provider()
        if isinstance(res, float):
            if res == float("inf"):
                raise RuntimeError(f"All providers exhausted permanently: {last_err}")
            wait_s = min(max(0.5, res - time.time()), 25.0)
            time.sleep(wait_s)
            continue

        p = res
        key = f"{p['kind']}:{p['model']}"
        attempts += 1
        try:
            raw = call_provider(p, prompt)
            cleaned = clean_ai_html(raw)
            if len(cleaned) < min_chars:
                last_err = f"{p['model']} too short ({len(cleaned)} chars)"
                continue
            if has_markdown_pipe_table(cleaned):
                last_err = f"{p['model']} returned markdown pipe table"
                continue
            return repair_html_balance(cleaned)
        except Exception as e:
            msg = str(e)
            last_err = msg
            with state_lock:
                if msg.startswith("DAILY_LIMIT:") or msg.startswith("DEAD:"):
                    provider_state[key]["dead"] = True
                    print(f"  [PROVIDER DISABLED] {key} ({msg})")
                elif msg.startswith("COOLDOWN:"):
                    secs = int(msg.split(":")[1])
                    provider_state[key]["ready_at"] = max(provider_state[key]["ready_at"], time.time() + secs)
                else:
                    provider_state[key]["ready_at"] = max(provider_state[key]["ready_at"], time.time() + 15)
    raise RuntimeError(f"Failed after {attempts} attempts: {last_err}")


def build_prompt_t14_part1(item: dict) -> str:
    return f"""You are the Lead Exam Strategist & Chief Textbook Author for Jayastra (UPSC NDA, CDS, AFCAT, CAPF).
Write PART 1 (Foundational Textbook Theory & Comparative Matrices) of an EXHAUSTIVE, encyclopedic masterclass for:

Subject: {item['subject'].upper()}
Chapter Title: {item['title']}
Chapter ID: {item['id']}
Syllabus Scope: {item['syllabus_desc']}

REQUIREMENTS (ZERO FLUFF — PURE EXAM-READY TEXTBOOK DENSITY):
1. Target length: 12,000–18,000 characters of dense, authoritative HTML.
2. Output clean HTML fragments ONLY (NO `<html>`, `<body>`, NO outer `<div class="revision-card">`, NO markdown code fences, NO markdown pipe tables).
3. Structure Part 1 using these exact sections:
   - `<h4 style="border-left: 3px solid var(--accent); padding-left: 10px; margin-top: 22px; color: var(--text-primary); font-weight: 700;">📌 1. EXECUTIVE OVERVIEW & CORE THEORETICAL FRAMEWORK</h4>`
     Write rigorous textbook prose covering EVERY sub-topic listed in Syllabus Scope. Define terms accurately, give mathematical/chemical equations using LaTeX `$...$` / `$$...$$` or `<code>...</code>` (for STEM/Maths/Econ), exact Constitutional Articles/Schedules/Amendments (for Polity), exact dates/sites/personalities (for History), exact latitudes/species/laws (for Env/Geog).
   - `<h4 style="border-left: 3px solid var(--info); padding-left: 10px; margin-top: 26px; color: var(--text-primary); font-weight: 700;">🔬 2. DEEP SUB-TOPIC MECHANISMS, CLASSIFICATIONS & DERIVATIONS</h4>`
     Break down every mechanism, classification, reaction pathway, constitutional evolution, or grammatical rule with nested `<ul>`/`<ol>` and `<strong>` key terms.
   - `<h4 style="border-left: 3px solid var(--success); padding-left: 10px; margin-top: 26px; color: var(--text-primary); font-weight: 700;">📊 3. COMPREHENSIVE COMPARISON & CLASSIFICATION MATRICES</h4>`
     Include AT LEAST TWO rich HTML `<table>` matrices (8+ rows each!) comparing concepts, laws, parameters, exceptions, bodies, articles, or formulas. Style tables cleanly with `style="width: 100%; border-collapse: collapse; margin: 16px 0;"` and `<thead>`/`<tbody>` with `<th>` and `<td>`.
   - `<div class="mnemonic-box"><strong>💡 HIGH-SPEED MNEMONICS & MEMORY TRIGGERS:</strong> ... </div>` with 4-6 crisp memory acronyms/pegs.

Return ONLY valid HTML."""


def build_prompt_t14_part2(item: dict) -> str:
    return f"""You are the Lead Exam Strategist & Chief Textbook Author for Jayastra (UPSC NDA, CDS, AFCAT, CAPF).
Write PART 2 (Advanced Applications, Worked Archetypes, Exam Traps & 25-Point Fact Bank) for:

Subject: {item['subject'].upper()}
Chapter Title: {item['title']}
Chapter ID: {item['id']}
Syllabus Scope: {item['syllabus_desc']}

REQUIREMENTS (ZERO FLUFF — HIGHEST EXAM UTILITY):
1. Target length: 12,000–18,000 characters of dense, authoritative HTML.
2. Output clean HTML fragments ONLY (NO `<html>`, `<body>`, NO outer `<div class="revision-card">`, NO markdown code fences, NO markdown pipe tables).
3. Structure Part 2 using these exact sections:
   - `<h4 style="border-left: 3px solid var(--warning); padding-left: 10px; margin-top: 26px; color: var(--text-primary); font-weight: 700;">⚡ 4. WORKED EXAM ARCHETYPES & 10-SECOND SOLVING PLAYBOOKS</h4>`
     Provide 6 realistic UPSC CDS/NDA/AFCAT worked examples (numerical problems with step-by-step + shortcut method OR multi-statement analytical / sentence error diagnostics) inside `<div class="msc-checkpoint">` cards showing both Concept Proof and Fast Elimination Method.
   - `<div class="trap-box"><strong>⚠️ UPSC & DEFENCE EXAM TRAPS (High-Frequency Distractors):</strong> ... </div>`
     List 8 exact traps (unit conversion pitfalls, swapped definitions, statutory vs constitutional confusion, exception cases).
   - `<div class="strategist-tip"><strong>🎯 STRATEGIC PYQ ANALYSIS & DEFENCE FOCUS (2018–2026):</strong> ... </div>`
     Explain exact UPSC/CDS/NDA/AFCAT question styles, recurring sub-topics, and how options are framed.
   - `<h4 style="border-left: 3px solid var(--accent); padding-left: 10px; margin-top: 26px; color: var(--text-primary); font-weight: 700;">📚 5. EXHAUSTIVE RAPID-REVISION FACT BANK (25+ HIGH-YIELD BULLETS)</h4>`
     Provide 25 dense, self-contained `<li>` bullet points packing exact numbers, dates, constants, thresholds, treaties, cases, formulas, or exceptions.

Return ONLY valid HTML."""


def build_prompt_t5(item: dict) -> str:
    return f"""You are an Elite UPSC CDS / NDA / CAPF Examiner & NCERT Curriculum Specialist.
Generate a high-density **Track 5 Exam-Edge Module** for:

Subject: {item['subject'].upper()}
Chapter Title: {item['title']}
Syllabus Scope: {item['syllabus_desc']}

OUTPUT EXACTLY TWO SECTIONS IN PURE HTML (NO `<html>`, NO `<body>`, NO markdown code fences, NO markdown pipe tables):

SECTION A: **UPSC Statement-Trap Matrix**
Wrap in `<div style="margin-top: 28px;">` with heading:
`<h4 style="border-left: 4px solid var(--danger); padding-left: 10px; color: #fca5a5; font-weight: 700; margin-bottom: 12px;">🎯 UPSC STATEMENT-TRAP MATRIX (15 HIGH-FREQUENCY DISTRACTORS)</h4>`
Followed by `<table class="trap-matrix-table">` with `<thead><tr><th>Common UPSC Statement Trap (False/Twisted)</th><th>Exact Authentic Fact</th><th>Verification / Elimination Rule</th></tr></thead>` and `<tbody>` containing **15 rich, chapter-specific rows** (covering swapped quantifiers like "only/all", wrong authority/article/date/unit, reverse cause-effect, or subtle NCERT exceptions).

SECTION B: **NCERT "Do You Know?" & Primary Source Blue-Box Compendium**
Wrap in `<div class="ncert-box">` with title:
`<strong>📘 NCERT "DO YOU KNOW?" &amp; PRIMARY SOURCE BLUE-BOX COMPENDIUM</strong>`
Followed by a `<ul>` of **10 dense items** capturing genuine NCERT Class VI–XII sidebar boxes, named scientific laws/reagents/constants, landmark treaty clauses, or Supreme Court constitutional ratios directly relevant to `{item['title']}`.

Return ONLY valid HTML."""


def process_t14_chapter(item: dict, cache: dict, cache_lock: threading.Lock) -> tuple[str, int]:
    ch_id = item["id"]
    p1 = call_with_scheduler(build_prompt_t14_part1(item), min_chars=3800)
    p2 = call_with_scheduler(build_prompt_t14_part2(item), min_chars=3800)
    combined = f"<!-- TRACK14_MASTERCLASS -->\n<div class=\"track14-masterclass-body\">\n{p1}\n\n{p2}\n</div>\n"
    with cache_lock:
        cache[ch_id] = {
            "id": ch_id,
            "title": item["title"],
            "subject": item["subject"],
            "chars": len(combined),
            "html": combined,
        }
        save_cache(CACHE_T14, cache)
    return ch_id, len(combined)


def process_t5_chapter(item: dict, cache: dict, cache_lock: threading.Lock) -> tuple[str, int]:
    ch_id = item["id"]
    html = call_with_scheduler(build_prompt_t5(item), min_chars=3000)
    block = f"\n<!-- TRACK5_EXAM_EDGE_MATRIX -->\n<div class=\"track5-exam-edge\" style=\"margin-top: 32px; padding-top: 24px; border-top: 2px solid rgba(239, 68, 68, 0.25);\">\n{html}\n</div>\n"
    with cache_lock:
        cache[ch_id] = {
            "id": ch_id,
            "title": item["title"],
            "subject": item["subject"],
            "chars": len(block),
            "html": block,
        }
        save_cache(CACHE_T5, cache)
    return ch_id, len(block)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--mode", choices=["track14", "track5", "all"], default="all")
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--workers", type=int, default=6)
    args = parser.parse_args()

    with open(MANIFEST_FILE, "r", encoding="utf-8") as f:
        manifest = json.load(f)

    if args.mode in ("track14", "all"):
        cache_t14 = load_cache(CACHE_T14)
        pending_t14 = [t for t in manifest["track14_targets"] if t["id"] not in cache_t14]
        if args.limit > 0:
            pending_t14 = pending_t14[: args.limit]
        print(f"\n=== PHASE A (Track 1+4 Masterclasses): {len(pending_t14)} pending ({len(cache_t14)} already cached) ===")
        done = 0
        errors = 0
        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            futs = {pool.submit(process_t14_chapter, item, cache_t14, lock): item for item in pending_t14}
            for fut in as_completed(futs):
                item = futs[fut]
                try:
                    cid, nchars = fut.result()
                    done += 1
                    print(f"  [T14 {done}/{len(pending_t14)}] ✅ {cid} ({nchars:,} chars)")
                except Exception as e:
                    errors += 1
                    print(f"  [T14 ERR] ❌ {item['id']}: {e}")
        print(f"=== PHASE A DONE: {done} succeeded, {errors} failed ===")

    if args.mode in ("track5", "all"):
        cache_t5 = load_cache(CACHE_T5)
        pending_t5 = [t for t in manifest["track5_targets"] if t["id"] not in cache_t5]
        if args.limit > 0:
            pending_t5 = pending_t5[: args.limit]
        print(f"\n=== PHASE B (Track 5 Trap+NCERT Matrices): {len(pending_t5)} pending ({len(cache_t5)} already cached) ===")
        done = 0
        errors = 0
        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            futs = {pool.submit(process_t5_chapter, item, cache_t5, lock): item for item in pending_t5}
            for fut in as_completed(futs):
                item = futs[fut]
                try:
                    cid, nchars = fut.result()
                    done += 1
                    print(f"  [T5 {done}/{len(pending_t5)}] ✅ {cid} ({nchars:,} chars)")
                except Exception as e:
                    errors += 1
                    print(f"  [T5 ERR] ❌ {item['id']}: {e}")
        print(f"=== PHASE B DONE: {done} succeeded, {errors} failed ===")


if __name__ == "__main__":
    main()
