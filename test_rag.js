const { searchRAG } = require('./rag_retriever');
require('dotenv').config();
(async () => {
  const GEMINI_KEY = process.env.GEMINI_API_KEY || 'AIzaSyA0g3U1Nro31TC8ow-oaaaEwZ5mpRQ7MJM';
  const results = await searchRAG("What new missile was tested by DRDO?", GEMINI_KEY, 3);
  console.log(JSON.stringify(results, null, 2));
})();
