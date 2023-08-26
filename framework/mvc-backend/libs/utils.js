const { readFileSync } = require('fs');
const { resolve } = require('path');

function readFile(path, charset = 'utf-8') {
  return JSON.parse(readFileSync(resolve(__dirname, path), charset));
}

module.exports = {
  readFile,
};
