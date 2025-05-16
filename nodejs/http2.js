import http2 from 'node:http2'
import os from 'node:os'
import fs from 'node:fs'

const homedir = os.homedir()

const server = http2.createSecureServer({
  key: fs.readFileSync(`${homedir}/devhttps/dev-key.pem`),
  cert: fs.readFileSync(`${homedir}/devhttps/dev-cert.pem`),
  allowHTTP1: true
})

server.on('request', (req, res) => {
  let body = ''

  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', () => {
    res.end(body)
  })
})

server.on('stream', (stream, headers) => {
  if (headers[':method'] === 'POST') {
    let body = ''

    stream.on('data', (chunk) => {
      body += chunk
    })

    stream.on('end', () => {
      stream.respond({
        'content-type': 'application/json'
      })
      stream.end(body)
    })
  }
})

server.listen(8080, () => {
  console.log(`[Server] is running on port 8080`)
})
