const serverless = require('serverless-http');
const requestHandler = require('../server');

module.exports = serverless(requestHandler);
