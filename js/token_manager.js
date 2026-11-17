// 14. TACTICAL AI TOKENS QUOTA MANAGER
// ==========================================
function initTokenManager() {
  const defaultQuota = 50000;
  const today = new Date().toDateString();
  
  let savedTokens = localStorage.getItem("tac_tokens_remaining");
  let savedDate = localStorage.getItem("tac_tokens_date");
  
  if (!savedDate || savedDate !== today) {
    savedTokens = defaultQuota;
    localStorage.setItem("tac_tokens_remaining", defaultQuota);
    localStorage.setItem("tac_tokens_date", today);
  } else {
    savedTokens = parseInt(savedTokens);
    if (isNaN(savedTokens)) savedTokens = defaultQuota;
  }
  
  updateTokenUI(savedTokens, defaultQuota);
}

function updateTokenUI(remaining, total = 50000) {
  const countDisplay = document.getElementById("sidebar-token-count");
  const barDisplay = document.getElementById("sidebar-token-bar");
  if (!countDisplay || !barDisplay) return;
  
  countDisplay.innerText = remaining.toLocaleString() + " / " + total.toLocaleString();
  const percent = (remaining / total) * 100;
  barDisplay.style.width = percent + "%";
  
  if (percent < 20) {
    barDisplay.style.background = "var(--danger)";
  } else if (percent < 50) {
    barDisplay.style.background = "var(--warning)";
  } else {
    barDisplay.style.background = "linear-gradient(90deg, var(--info), var(--accent))";
  }
}

function deductTokens(amount) {
  const defaultQuota = 50000;
  let remaining = parseInt(localStorage.getItem("tac_tokens_remaining"));
  if (isNaN(remaining)) remaining = defaultQuota;
  
  if (remaining < amount) {
    alert(" Insufficient Tactical Tokens!\n\nYour daily AI token quota is exhausted. Your operations quota will automatically reset tomorrow.");
    return false;
  }
  
  remaining -= amount;
  localStorage.setItem("tac_tokens_remaining", remaining);
  updateTokenUI(remaining, defaultQuota);
  return true;
}


// ==========================================