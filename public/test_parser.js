function parseRss(xmlText) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xmlText)) !== null && items.length < 5) {
    const itemContent = match[1];
    const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const descMatch = itemContent.match(/<description>([\s\S]*?)<\/description>/) || itemContent.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/);
    
    let title = titleMatch ? titleMatch[1] : '';
    let link = linkMatch ? linkMatch[1] : '';
    let pubDate = pubDateMatch ? pubDateMatch[1] : '';
    let desc = descMatch ? descMatch[1] : '';
    
    // Clean CDATA tags
    title = title.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
    desc = desc.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
    desc = desc.replace(/<[^>]*>/g, '').substring(0, 300).trim();
    
    if (title) {
      items.push({ title, link, pubDate, description: desc });
    }
  }
  return items;
}

async function test() {
  const res = await fetch('https://nationaldefence.in/feed');
  const xml = await res.text();
  const parsed = parseRss(xml);
  console.log("Parsed", parsed.length, "items:");
  console.log(JSON.stringify(parsed, null, 2));
}

test();
