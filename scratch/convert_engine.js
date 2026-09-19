const fs = require('fs');

function convert(enginePath, outPath) {
  let content = fs.readFileSync(enginePath, 'utf8');

  // Remove requires
  content = content.replace(/const fs = require\('fs'\);\n/, '');
  content = content.replace(/const path = require\('path'\);\n/, '');
  content = content.replace(/require\('dotenv'\)\.config\(\);\n/, '');

  // Wrap in onRequestGet
  content = content.replace(/async function runCurrentAffairsEngine\(\) {/g, 'async function runCurrentAffairsEngine(context) {');
  content = content.replace(/async function runMilitaryExercisesEngine\(\) {/g, 'async function runMilitaryExercisesEngine(context) {');

  // Replace GEMINI_API_KEY
  content = content.replace(/const GEMINI_API_KEY = process\.env\.GEMINI_API_KEY;/, 'const GEMINI_API_KEY = context.env.GEMINI_API_KEY;');

  // Replace fs.readFileSync('data.js')
  content = content.replace(/const dataJsPath = path\.join\(__dirname, 'data\.js'\);\n\s*let content = fs\.readFileSync\(dataJsPath, 'utf8'\);/g, 
    `const dataUrl = new URL('/data.js', context.request.url);\n  const dataRes = await fetch(dataUrl);\n  let content = await dataRes.text();`
  );

  // Remove fs.writeFileSync
  content = content.replace(/fs\.writeFileSync\(dataJsPath, newContent, 'utf8'\);/g, '// fs.writeFileSync removed for Cloudflare');

  // Remove module.exports
  content = content.replace(/module\.exports = (.*?);/g, '');

  // Add Cloudflare entrypoint
  const engineFn = enginePath.includes('military') ? 'runMilitaryExercisesEngine' : 'runCurrentAffairsEngine';
  const entrypoint = `
export async function onRequestGet(context) {
  const cacheUrl = new URL(context.request.url);
  const cacheKey = new Request(cacheUrl.toString(), context.request);
  const cache = await caches.open("tac-revise-cache");

  let response = await cache.match(cacheKey);
  if (!response) {
    try {
      const data = await ${engineFn}(context);
      response = new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "s-maxage=86400",
        },
      });
      context.waitUntil(cache.put(cacheKey, response.clone()));
    } catch(e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
  }
  return response;
}
`;

  fs.writeFileSync(outPath, content + '\n' + entrypoint, 'utf8');
  console.log('Converted', enginePath, 'to', outPath);
}

convert('current_affairs_engine.js', 'functions/api/daily-current-affairs.js');
convert('military_exercises_engine.js', 'functions/api/daily-military-exercises.js');
