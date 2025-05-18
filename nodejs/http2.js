import http2 from 'node:http2'
import fs from 'node:fs'
import path from 'node:path'
import Busboy from 'busboy'
import crypto from 'node:crypto'

const server = http2.createSecureServer({
  key: fs.readFileSync(process.env.SSL_KEY),
  cert: fs.readFileSync(process.env.SSL_CERT),
  allowHTTP1: true
})

const allowHeaders = {
  'Access-Control-Allow-Origin': 'https://localhost:5173',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,Authorization'
}

server.on('stream', (stream, headers) => {
  if (headers[':method'] === 'OPTIONS') {
    handleOptionsRequest(stream)
    return
  }

  if (headers[':method'] === 'POST' && headers[':path'] === '/upload') {
    handleUpload(stream, headers)
  }

  if (headers[':method'] === 'GET' && headers[':path'].startsWith('/uploads')) {
    handleStaticAssets(stream, headers)
  }
})

server.listen(8080, () => {
  console.log(`[Server] is running on port 8080`)
})

function handleOptionsRequest(stream) {
  stream.respond({
    ':status': 200,
    ...allowHeaders
  })
  stream.end(null)
}

function handleUpload(stream, headers) {
  const busboy = Busboy({ headers })
  let fileInfo = null

  busboy.on('file', (fieldname, file, info) => {
    const ext = path.parse(info.filename).ext
    const newFileName = encodedFileName(info.filename)

    info.filename = `${newFileName}${ext}`

    fileInfo = info

    file.pipe(fs.createWriteStream(`./uploads/${fileInfo.filename}`))
  })

  busboy.on('finish', () => {
    stream.respond({
      ':status': 200,
      'Content-Type': 'application/json',
      ...allowHeaders
    })
    stream.end(
      JSON.stringify({
        msg: 'ok',
        code: 200,
        data: {
          filepath: 'https://localhost:8080/uploads/' + fileInfo.filename
        }
      })
    )
  })

  busboy.on('error', (err) => {
    stream.respond({ ':status': 500 })
    stream.end('Upload error')
  })

  stream.pipe(busboy)
}

function handleStaticAssets(stream, headers) {
  const filePath = path.resolve('./uploads', path.basename(headers[':path']))
  const ext = path.extname(filePath).slice(1)
  const mime = ext === 'jpeg' ? 'image/jpeg' : 'application/octet-stream'
  stream.respond({
    ':status': 200,
    'Content-Type': mime,
    ...allowHeaders
  })
  fs.createReadStream(filePath).pipe(stream)
}

function encodedFileName(filename) {
  return crypto.createHash('md5').update(filename).digest('hex')
}
