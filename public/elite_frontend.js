document.addEventListener('DOMContentLoaded', () => {
  let eliteData = [];

  window.loadEliteDashboard = async function() {
    const eliteScreen = document.getElementById('pathfinder-elite-screen');
    const eliteContainer = document.getElementById('elite-content');
    const eliteLoading = document.getElementById('elite-loading');
    
    if (eliteData.length > 0) {
      renderEliteDashboard(eliteContainer);
      return;
    }
    try {
      eliteLoading.style.display = 'block';
      eliteContainer.innerHTML = '';
      const res = await fetch('/Pathfinder_Elite/metadata.json');
      if (!res.ok) throw new Error('Could not fetch metadata.json');
      eliteData = await res.json();
      eliteLoading.style.display = 'none';
      renderEliteDashboard(eliteContainer);
    } catch (e) {
      console.error(e);
      eliteLoading.style.display = 'none';
      eliteContainer.innerHTML = '<div class="error-state">Failed to load Elite Engine. Ensure metadata.json is deployed.</div>';
    }
  };

  function renderEliteDashboard(eliteContainer) {
    const subjects = {};
    eliteData.forEach(mod => {
      if (!subjects[mod.subject]) subjects[mod.subject] = [];
      subjects[mod.subject].push(mod);
    });
    
    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">';
    for (const [subj, modules] of Object.entries(subjects)) {
      html += '<div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; padding: 16px;">';
      html += '<h3 style="margin-top: 0; color: var(--accent); border-bottom: 1px solid var(--border); padding-bottom: 8px; margin-bottom: 12px;">' + subj + '</h3>';
      html += '<ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">';
      modules.forEach(mod => {
        const modPath = '/Pathfinder_Elite/modules/' + mod.subject + '/' + mod.filename;
        html += '<li><a href="#" onclick="window.loadEliteModule(\\'' + modPath + '\\'); return false;" style="color: var(--text-primary); text-decoration: none; font-size: 0.9rem;">&#9656; ' + mod.topic_name + '</a></li>';
      });
      html += '</ul></div>';
    }
    html += '</div>';
    html += '<h2 style="margin-top: 32px; color: var(--danger); border-bottom: 1px solid var(--border); padding-bottom: 8px;">Simulated Mocks</h2>';
    html += '<div style="display: flex; gap: 16px; margin-top: 16px; flex-wrap: wrap;">';
    html += '<button onclick="window.loadEliteModule(\\'/Pathfinder_Elite/mocks/UPSC_NDA_Mock_Exam.md\\')" style="padding: 10px 16px; background: rgba(239, 68, 68, 0.1); border: 1px solid var(--danger); color: var(--danger); border-radius: 4px; cursor: pointer;">NDA Mock</button>';
    html += '<button onclick="window.loadEliteModule(\\'/Pathfinder_Elite/mocks/UPSC_CDS_Mock_Exam.md\\')" style="padding: 10px 16px; background: rgba(34, 197, 94, 0.1); border: 1px solid var(--success); color: var(--success); border-radius: 4px; cursor: pointer;">CDS Mock</button>';
    html += '<button onclick="window.loadEliteModule(\\'/Pathfinder_Elite/mocks/IAF_AFCAT_Mock_Exam.md\\')" style="padding: 10px 16px; background: rgba(56, 189, 248, 0.1); border: 1px solid var(--info); color: var(--info); border-radius: 4px; cursor: pointer;">AFCAT Mock</button>';
    html += '</div>';
    eliteContainer.innerHTML = html;
  }

  window.loadEliteModule = async function(path) {
    const eliteContainer = document.getElementById('elite-content');
    eliteContainer.innerHTML = '<div style="margin-bottom: 20px;"><button onclick="window.loadEliteDashboard()" style="padding: 6px 12px; background: var(--bg-secondary); border: 1px solid var(--border); color: var(--text-primary); border-radius: 4px; cursor: pointer;">Back</button></div><div id="elite-loading">Fetching module...</div>';
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error('Could not fetch ' + path);
      const markdownText = await res.text();
      const parsedHtml = marked.parse(markdownText);
      eliteContainer.innerHTML = '<div style="margin-bottom: 20px;"><button onclick="window.loadEliteDashboard()" style="padding: 6px 12px; background: var(--bg-secondary); border: 1px solid var(--border); color: var(--text-primary); border-radius: 4px; cursor: pointer;">Back</button></div><div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; padding: 24px; line-height: 1.6;">' + parsedHtml + '</div>';
      if (window.MathJax) window.MathJax.typesetPromise([eliteContainer]).catch(e => console.log(e));
    } catch (e) {
      console.error(e);
      eliteContainer.innerHTML = '<div style="margin-bottom: 20px;"><button onclick="window.loadEliteDashboard()">Back</button></div><div class="error-state">Failed to load module.</div>';
    }
  };
});
