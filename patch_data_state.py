import re

with open("data.js", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

target = """// ==========================================
// 6. GLOBAL STATE MANAGEMENT & LOCALSTORAGE
// ==========================================
let STATE = {
  streak: 0,
  lastActiveDate: null,
  syllabusProgress: {},  
  readFormulasCount: 0,
  readFormulasList: [], 
  cbtScores: [],        
  aiExpandedNotes: {},
  currentScreen: "dashboard"
};"""

replacement = """// ==========================================
// 5.5 RANK SYSTEM DEFINITIONS
// ==========================================
const RANK_SYSTEM = {
  army: [
    { rank: "Cadet", minXP: 0 },
    { rank: "Lieutenant", minXP: 100 },
    { rank: "Captain", minXP: 500 },
    { rank: "Major", minXP: 1500 },
    { rank: "Lt. Colonel", minXP: 3000 },
    { rank: "Colonel", minXP: 5000 },
    { rank: "Brigadier", minXP: 8000 },
    { rank: "Major General", minXP: 12000 }
  ],
  airforce: [
    { rank: "Cadet", minXP: 0 },
    { rank: "Flying Officer", minXP: 100 },
    { rank: "Flight Lieutenant", minXP: 500 },
    { rank: "Squadron Leader", minXP: 1500 },
    { rank: "Wing Commander", minXP: 3000 },
    { rank: "Group Captain", minXP: 5000 },
    { rank: "Air Commodore", minXP: 8000 },
    { rank: "Air Vice Marshal", minXP: 12000 }
  ],
  navy: [
    { rank: "Cadet", minXP: 0 },
    { rank: "Sub-Lieutenant", minXP: 100 },
    { rank: "Lieutenant", minXP: 500 },
    { rank: "Lieutenant Commander", minXP: 1500 },
    { rank: "Commander", minXP: 3000 },
    { rank: "Captain", minXP: 5000 },
    { rank: "Commodore", minXP: 8000 },
    { rank: "Rear Admiral", minXP: 12000 }
  ]
};

// ==========================================
// 6. GLOBAL STATE MANAGEMENT & LOCALSTORAGE
// ==========================================
let STATE = {
  streak: 0,
  lastActiveDate: null,
  syllabusProgress: {},  
  readFormulasCount: 0,
  readFormulasList: [], 
  cbtScores: [],        
  aiExpandedNotes: {},
  currentScreen: "dashboard",
  userEmail: null,
  branch: null,
  xp: 0,
  currentRank: "Cadet"
};"""

new_content = content.replace(target, replacement)

with open("data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated STATE in data.js")
