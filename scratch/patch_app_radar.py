import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# PATCH 1: submitCbtExam()
# We look for: const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : 0;
p1 = r"""  const accuracy = attemptedCount > 0 \? \(\(correctCount / attemptedCount\) \* 100\)\.toFixed\(1\) : 0;"""
r1 = r"""  const accuracy = attemptedCount > 0 ? ((correctCount / attemptedCount) * 100).toFixed(1) : 0;
  
  // Calculate Topic Accuracy
  const topicStats = {};
  exam.questions.forEach(q => {
    const topic = q.topic || 'General';
    if (!topicStats[topic]) topicStats[topic] = { attempted: 0, correct: 0 };
    if (exam.userAnswers[q.id] !== undefined && exam.userAnswers[q.id] !== null) {
      topicStats[topic].attempted++;
      if (exam.userAnswers[q.id] === q.correct) {
        topicStats[topic].correct++;
      }
    }
  });
  
  const topicAccuracy = {};
  for (const [topic, stats] of Object.entries(topicStats)) {
    if (stats.attempted > 0) {
      topicAccuracy[topic] = parseFloat(((stats.correct / stats.attempted) * 100).toFixed(1));
    }
  }"""

content = re.sub(p1, r1, content)

# Inject into scoreRecord
p2 = r"""    accuracy: parseFloat\(accuracy\),
    isPass: qualified,
    date: new Date\(\)\.toLocaleDateString\(\)
  \};"""
r2 = r"""    accuracy: parseFloat(accuracy),
    isPass: qualified,
    topicAccuracy: topicAccuracy,
    date: new Date().toLocaleDateString()
  };"""

content = re.sub(p2, r2, content)


# PATCH 2: renderAnalytics()
# We inject at the bottom of renderAnalytics() just before the history table rendering, or right at the end of renderAnalytics.
p3 = r"""  // Render Table \(Most recent 15\)"""
r3 = r"""  // Render Radar Chart
  const globalTopicStats = {};
  scores.forEach(s => {
    if (s.topicAccuracy) {
      for (const [topic, acc] of Object.entries(s.topicAccuracy)) {
        if (!globalTopicStats[topic]) globalTopicStats[topic] = { sum: 0, count: 0 };
        globalTopicStats[topic].sum += acc;
        globalTopicStats[topic].count++;
      }
    }
  });
  
  const topTopics = Object.entries(globalTopicStats)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 6);
    
  const canvas = document.getElementById('topicRadarChart');
  const emptyState = document.getElementById('radar-empty-state');
  
  if (canvas && emptyState) {
    if (topTopics.length >= 3) {
      emptyState.style.display = 'none';
      const labels = topTopics.map(t => {
        let name = t[0];
        if (name.length > 20) name = name.substring(0, 17) + '...';
        return name;
      });
      const data = topTopics.map(t => parseFloat((t[1].sum / t[1].count).toFixed(1)));
      
      if (window.radarChartInstance) window.radarChartInstance.destroy();
      const ctx = canvas.getContext('2d');
      
      window.radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Average Accuracy (%)',
            data: data,
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: '#10B981',
            pointBackgroundColor: '#10B981',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#10B981',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              pointLabels: { color: 'rgba(255, 255, 255, 0.7)', font: { size: 12, family: "'Inter', sans-serif" } },
              ticks: { display: false, min: 0, max: 100, stepSize: 20 }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              titleColor: '#fff',
              bodyColor: '#10B981',
              titleFont: { size: 14, family: "'Inter', sans-serif" },
              bodyFont: { size: 16, weight: 'bold' },
              padding: 12,
              displayColors: false,
              callbacks: {
                label: function(context) { return context.parsed.r + '% Accuracy'; }
              }
            }
          }
        }
      });
    } else {
      emptyState.style.display = 'flex';
    }
  }

  // Render Table (Most recent 15)"""

content = re.sub(p3, r3, content)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done patching app.js for Radar Charts.')
