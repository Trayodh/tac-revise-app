const fs = require('fs');

const files = [
  'app.js',
  'notes_data.js',
  'notes_generated.js',
  'ai_generated_notes.js',
  'ca_data.js',
  'current_affairs_db.js',
  'index.html',
  'clean_notes.js',
  'app_before_0edf5a5.js',
  'old_index.html',
  'temp_notes.js'
];

const replacements = {
  "ΓÇö": "—",
  "┬╖": "·",
  "ΓÜí": "⚡",
  "≡ƒÆí": "💡",
  "Γ£ô": "✓",
  "Γ£ù": "✗",
  "≡ƒôÜ": "📚",
  "≡ƒôÉ": "📐",
  "Γ£ì∩╕Å": "✍️",
  "≡ƒîì": "🌍",
  "Γû╝": "▼",
  "┬░": "°",
  "Γü┐": "ⁿ",
  "┬│": "³",
  "ß╡Ç": "ᵀ",
  "┬▒": "±",
  "┬▓": "²",
  "Γü╕": "⁸",
  "╬╝": "μ",
  "Γéä": "₄",
  "Γéé": "₂",
  "Γéâ": "₃",
  "Γëñ": "≤",
  "≡ƒö╡": "🔵",
  "ΓÜ¬": "⚪",
  "≡ƒƒó": "🟢",
  "≡ƒÅ¢∩╕Å": "🏛️",
  "≡ƒô£": "📜",
  "≡ƒôê": "📈",
  "ΓÜ¢∩╕Å": "⚛️",
  "≡ƒº¬": "🧪",
  "≡ƒº¼": "🧬",
  "≡ƒ¬û": "🪖",
  "≡ƒ¢░∩╕Å": "🛰️",
  "≡ƒôà": "📅",
  "≡ƒñ¥": "🤝",
  "≡ƒùô∩╕Å": "🗓️",
  "≡ƒÅà": "🏅",
  "ΓÜö∩╕Å": "⚔️",
  "≡ƒÅå": "🏆",
  "ΓÇô": "–",
  "≡ƒ¢í∩╕Å": "🛡️",
  "Γ£ê∩╕Å": "✈️",
  "≡ƒôû": "📖",
  "≡ƒºá": "🧠",
  "Γé╣": "₹",
  "ΓåÉ": "←",
  "ΓåÆ∩╕Å": "→️",
  "≡ƒñû": "🤖",
  "ΓÜô": "⚓",
  "≡ƒö┤": "🔴",
  "≡ƒƒí": "🟡",
  "Γ£¿": "✨",
  "≡ƒÄ»": "🎯",
  "≡ƒÄ¼": "🎬",
  "ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó": "••••••••",
  "hß╡ó": "hᵢ",
  "hΓéÆ": "hₒ",
  "╬╕": "θ",
  "┬╜": "½",
  "Γü╡": "⁵",
  "├ù": "×",
  "ΓçÆ": "⇒",
  "Γê¥": "∝",
  "╬╗": "λ",
  "Γü┤": "⁴",
  "ΓêÜ": "√",
  "Γëê": "≈",
  "╧ë": "ω",
  "Γéæ": "ₑ",
  "Γéü": "₁"
};

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  for (const [bad, good] of Object.entries(replacements)) {
    content = content.split(bad).join(good);
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
