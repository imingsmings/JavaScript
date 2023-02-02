const { Readable } = require('stream');

async function readBodyStream(bodyStream) {
  if (bodyStream instanceof Readable) {
    return new Promise((resolve, reject) => {
      let result = '';
      bodyStream.on('data', (chunk) => (result += chunk));
      bodyStream.on('end', () => resolve(result));
    });
  }
}

async function rewriteImports(source) {
  return bodyString;
}

module.exports = {
  readBodyStream,
  rewriteImports,
};
