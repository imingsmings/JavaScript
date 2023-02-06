var moduleB = require('./module_b.js');

var c = (function () {
  return moduleB.b.join('-');
})();

module.exports = {
  c,
};
