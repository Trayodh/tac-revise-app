const serverless = require('serverless-http');
const requestHandler = require('../server');

const lambdaHandler = serverless(requestHandler);

module.exports = async (reqOrEvent, resOrContext) => {
  // Vercel Node.js serverless functions pass standard Node (req, res) objects
  if (resOrContext && typeof resOrContext.writeHead === 'function' && typeof resOrContext.end === 'function') {
    return requestHandler(reqOrEvent, resOrContext);
  }
  // AWS Lambda / Netlify Functions pass (event, context)
  return lambdaHandler(reqOrEvent, resOrContext);
};
