const serverless = require('serverless-http');
const requestHandler = require('../../server'); // Imports the raw handler from server.js

// By wrapping the raw http listener, Netlify can process Lambda events and pass them to our Node logic
module.exports.handler = serverless(requestHandler);
