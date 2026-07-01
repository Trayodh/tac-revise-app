// 12. CURRENT AFFAIRS REFRESHER & COUNTDOWN TIMER
// ==========================================

function refreshCurrentAffairs(isNdaOrCds = false) {
  console.log(" Tactical Intelligence Update: Shuffling and resetting current affairs...");
  
  if (isNdaOrCds) {
    console.log(" Post-Exam Prep Cycle: Erasing current affairs prior to the exam month (September 2026) and noting new ones...");
    const oldMonths = ["January 2026", "February 2026", "March 2026", "April 2026", "May 2026", "June 2026", "July 2026", "August 2026"];
    let erasedCount = 0;
    oldMonths.forEach(m => {
      if (CURRENT_AFFAIRS_DB[m]) {
        delete CURRENT_AFFAIRS_DB[m];
        erasedCount++;
      }
    });
    
    // Show a visual alert of the cleanup
    setTimeout(() => {
      alert(" Post-Exam Cycle Initiated!\n\nOutdated current affairs (prior to September 2026) have been erased.\nYour study path is now updated with the next cycle's current affairs.");
    }, 500);
  }
  
  // 1. Fisher-Yates Shuffle current affairs items inside each month
  for (const month in CURRENT_AFFAIRS_DB) {
    const list = CURRENT_AFFAIRS_DB[month];
    if (Array.isArray(list)) {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
  }
  
  // 2. Clear any answered styled buttons or correct states if rendered in the DOM
  const pane = document.getElementById("ca-content-pane");
  if (pane) {
    pane.querySelectorAll(".solution-explanation").forEach(div => {
      div.style.display = "none";
    });
    pane.querySelectorAll("button").forEach(btn => {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.borderColor = "";
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });
  }

  // 3. Re-render Current Affairs Hub if currently viewed
  const caScreen = document.getElementById("screen-current-affairs");
  if (caScreen && caScreen.classList.contains("active")) {
    renderCurrentAffairsHub();
  }
  
  // 4. Show a visual feedback toast or system alert
  const toast = document.createElement("div");
  toast.className = "glow panel";
  toast.style.position = "fixed";
  toast.style.bottom = "24px";
  toast.style.right = "24px";
  toast.style.zIndex = "1000";
  toast.style.borderLeft = "4px solid var(--accent)";
  toast.style.padding = "16px 24px";
  toast.style.background = "var(--bg-secondary)";
  toast.style.boxShadow = "var(--shadow-lg)";
  toast.style.borderRadius = "8px";
  toast.style.fontSize = "0.9rem";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "10px";
  toast.style.animation = "fadeIn 0.3s ease-out";
  toast.innerHTML = `
    <span style="font-size:1.2rem;"></span>
    <div>
      <div style="font-weight:600; color:var(--text-primary);">Tactical Intelligence Refreshed</div>
      <div style="font-size:0.75rem; color:var(--text-secondary); margin-top:2px;">Current affairs facts & test questions scrambled.</div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "fadeIn 0.3s ease-in reverse";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function initCountdownTimer() {
  const selector = document.getElementById("countdown-exam-selector");
  const display = document.getElementById("sidebar-countdown-timer");
  if (!selector || !display) return;

  const exams = {
    afcat: { name: "AFCAT 2 2026", date: new Date("August 8, 2026 10:00:00").getTime() },
    nda: { name: "NDA 2 2026", date: new Date("September 13, 2026 10:00:00").getTime() },
    cds: { name: "CDS 2 2026", date: new Date("September 13, 2026 09:00:00").getTime() }
  };

  // Hide native select dropdown
  selector.style.display = "none";

  // Build custom dropdown container
  const customContainer = document.createElement("div");
  customContainer.id = "custom-exam-dropdown-container";
  customContainer.style.cssText = "position: relative; width: 100%; margin-bottom: 10px;";

  const customBtn = document.createElement("div");
  customBtn.id = "custom-exam-dropdown-btn";
  customBtn.style.cssText = `
    width: 100%;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: var(--bg-primary);
    border: 1px solid var(--border);
    color: var(--text-primary);
    font-size: 0.82rem;
    font-family: var(--font-main);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    transition: all 0.2s ease;
  `;

  const customList = document.createElement("div");
  customList.id = "custom-exam-dropdown-list";
  customList.style.cssText = `
    display: none;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background-color: #111827;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);
    z-index: 100;
    overflow: hidden;
    box-sizing: border-box;
  `;

  customContainer.appendChild(customBtn);
  customContainer.appendChild(customList);
  selector.parentNode.insertBefore(customContainer, selector);

  // Helper to resolve colors and labels dynamically
  const getExamData = (val) => {
    let color = "#ffffff";
    let name = "Nearest Exam (Auto)";
    if (val === "afcat") {
      color = "#38bdf8"; // sky blue
      name = "AFCAT 2 2026";
    } else if (val === "cds") {
      color = "#87a96b"; // olive green
      name = "CDS 2 2026";
    } else if (val === "nda") {
      color = "#ffffff";
      name = "NDA 2 2026";
    } else if (val === "auto") {
      const nowVal = Date.now();
      let nearestKeyVal = "afcat";
      let minDiffVal = Infinity;
      for (const [key, info] of Object.entries(exams)) {
        const diff = info.date - nowVal;
        if (diff > 0 && diff < minDiffVal) {
          minDiffVal = diff;
          nearestKeyVal = key;
        }
      }
      color = nearestKeyVal === "afcat" ? "#38bdf8" : (nearestKeyVal === "cds" ? "#87a96b" : "#ffffff");
      name = exams[nearestKeyVal].name + " (Nearest)";
    }
    return { color, name };
  };

  // Re-render custom dropdown state
  const renderCustomDropdown = () => {
    const currentVal = selector.value;
    const currentData = getExamData(currentVal);

    customBtn.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="width: 10px; height: 10px; border-radius: 50%; background-color: ${currentData.color}; display: inline-block; box-shadow: 0 0 6px ${currentData.color};"></span>
        <span>${currentData.name}</span>
      </div>
      <span style="font-size: 0.6rem; color: var(--text-muted);">▼</span>
    `;

    // Populate option panel items
    const options = ["auto", "afcat", "nda", "cds"];
    customList.innerHTML = options.map(opt => {
      const data = getExamData(opt);
      return `
        <div class="custom-dropdown-opt" data-val="${opt}" style="
          padding: 8px 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          font-size: 0.8rem;
          transition: background 0.2s ease;
        ">
          <span style="width: 10px; height: 10px; border-radius: 50%; background-color: ${data.color}; display: inline-block;"></span>
          <span>${data.name}</span>
        </div>
      `;
    }).join('');

    // Add option click events
    customList.querySelectorAll(".custom-dropdown-opt").forEach(optEl => {
      optEl.addEventListener("mouseenter", () => {
        optEl.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        optEl.style.color = "var(--text-primary)";
      });
      optEl.addEventListener("mouseleave", () => {
        optEl.style.backgroundColor = "transparent";
        optEl.style.color = "var(--text-secondary)";
      });
      optEl.addEventListener("click", () => {
        const val = optEl.getAttribute("data-val");
        selector.value = val;
        localStorage.setItem("tac_countdown_selection", val);
        renderCustomDropdown();
        customList.style.display = "none";
        selector.dispatchEvent(new Event("change"));
      });
    });
  };

  // Toggle dropdown visibility
  customBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = customList.style.display === "block";
    customList.style.display = isVisible ? "none" : "block";
  });

  document.addEventListener("click", () => {
    customList.style.display = "none";
  });

  // Load target exam selection from localStorage if saved
  const savedSelection = localStorage.getItem("tac_countdown_selection") || "auto";
  selector.value = savedSelection;
  renderCustomDropdown();

  selector.addEventListener("change", (e) => {
    localStorage.setItem("tac_countdown_selection", e.target.value);
    renderCustomDropdown();
    updateTimer();
  });

  function updateTimer() {
    const now = Date.now();
    let targetKey = selector.value;

    if (targetKey === "auto") {
      // Find the nearest future exam
      let nearestKey = "afcat";
      let minDiff = Infinity;
      for (const [key, info] of Object.entries(exams)) {
        const diff = info.date - now;
        if (diff > 0 && diff < minDiff) {
          minDiff = diff;
          nearestKey = key;
        }
      }
      targetKey = nearestKey;
    }

    const targetExam = exams[targetKey] || exams.afcat;
    const distance = targetExam.date - now;

    if (distance < 0) {
      display.innerText = "MISSION ACTIVE";
      display.style.color = "var(--danger)";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const dStr = days.toString().padStart(2, '0');
    const hStr = hours.toString().padStart(2, '0');
    const mStr = minutes.toString().padStart(2, '0');
    const sStr = seconds.toString().padStart(2, '0');

    display.innerText = `${dStr}d : ${hStr}h : ${mStr}m : ${sStr}s`;
    display.style.color = "var(--danger)";
  }

  // Update immediately and then run interval
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ==========================================