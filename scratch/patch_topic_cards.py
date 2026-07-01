import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

p = r"""  const topTopics = Object\.entries\(globalTopicStats\)
    \.sort\(\(a, b\) => b\[1\]\.count - a\[1\]\.count\)
    \.slice\(0, 6\);"""

r = r"""  const topTopics = Object.entries(globalTopicStats)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 6);
    
  let strongestTopic = { name: "-", acc: -1 };
  let weakestTopic = { name: "-", acc: 101 };
  
  for (const [top, data] of Object.entries(globalTopicStats)) {
    if (data.count >= 1) {
      const acc = data.sum / data.count;
      if (acc > strongestTopic.acc) {
        strongestTopic = { name: top, acc: acc };
      }
      if (acc < weakestTopic.acc) {
        weakestTopic = { name: top, acc: acc };
      }
    }
  }
  
  const elStrongTop = document.getElementById("analytics-strongest-topic");
  const elWeakTop = document.getElementById("analytics-weakest-topic");
  
  if (elStrongTop) {
    elStrongTop.innerText = strongestTopic.name !== "-" ? `${strongestTopic.name}\n(${strongestTopic.acc.toFixed(1)}%)` : "-";
  }
  if (elWeakTop) {
    elWeakTop.innerText = weakestTopic.name !== "-" ? `${weakestTopic.name}\n(${weakestTopic.acc.toFixed(1)}%)` : "-";
  }"""

# Fallback empty states initialization
p_init = r"""    document\.getElementById\("analytics-weakest-subject"\)\.innerText = "-";
    return;
  \}"""

r_init = r"""    document.getElementById("analytics-weakest-subject").innerText = "-";
    const el1 = document.getElementById("analytics-strongest-topic");
    const el2 = document.getElementById("analytics-weakest-topic");
    if(el1) el1.innerText = "-";
    if(el2) el2.innerText = "-";
    return;
  }"""

content = re.sub(p, r, content)
content = re.sub(p_init, r_init, content)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done patching app.js for Topic Strong/Weak metrics.')
