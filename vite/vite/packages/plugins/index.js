const staticServer = require('./staticServer.js');
const moduleRewrite = require('./moduleRewrite.js');

module.exports = [moduleRewrite, staticServer];
