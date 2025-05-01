import express from 'express'
import fs from 'node:fs/promises'
import { Transform } from 'node:stream'
import { createServer } from 'vite'

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? 4173 : 5173
const app = express()

if (isProduction) {
  const sirv = (await import('sirv')).default
  app.use('/', sirv('./dist/client', { extensions: [] }))
}

const vite = await createServer({
  server: {
    middlewareMode: true
  },
  appType: 'custom'
})

app.use(vite.middlewares)

app.use('*all', async (req, res) => {
  let didError = false
  const template = await fs.readFile('./dist/client/index.html', 'utf-8')
  const module = await import('./dist/server/entry-server.js')
  const rendered = module.render({
    onShellReady() {
      res.status(didError ? 500 : 200)
      res.set('Content-Type', 'text/html')

      const stream = new Transform({
        transform(chunk, encoding, callback) {
          res.write(chunk, encoding)
          callback()
        }
      })

      const [htmlStart, htmlEnd] = template.split('<!--ssr-view-->')
      res.write(htmlStart)
      rendered.pipe(stream)

      stream.on('finish', () => {
        res.end(htmlEnd)
      })
    },
    onShellError() {
      res.status(500)
      res.set({ 'Content-Type': 'text/html' })
      res.send('<h1>Something went wrong</h1>')
    },
    onError() {
      didError = true
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
