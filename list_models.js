const fs = require('fs');

async function listModels() {
  const apiKey = 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
  
  if (!response.ok) {
    const txt = await response.text();
    console.log(`listModels failed with ${response.status}: ${txt}`);
  } else {
    const data = await response.json();
    console.log("Available models:");
    data.models.forEach(m => console.log(m.name));
  }
}

listModels();
