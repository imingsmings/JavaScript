import express from 'express'
import fs from 'node:fs/promises'
import { Transform } from 'node:stream'
import { RenderToPipeableStreamOptions } from 'react-dom/server'
import { createServer } from 'vite'
import { PipeableStream } from 'react-dom/server'

type RenderedOptions = Pick<PipeableStream, 'pipe'>
type SSRModule = Record<string, (options: RenderToPipeableStreamOptions) => RenderedOptions>

const port = 5173
const app = express()

const vite = await createServer({
  server: {
    middlewareMode: true
  },
  appType: 'custom'
})

app.use(vite.middlewares)

app.use('*all', async (req, res) => {
  const url = req.originalUrl
  const text = await fs.readFile('./index.html', 'utf-8')
  const template = await vite.transformIndexHtml(url, text)
  let didError = false
  const module: SSRModule = await vite.ssrLoadModule('./src/entry-server.tsx')
  const rendered: RenderedOptions = module.render({
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
    onError(error) {
      didError = true
      console.error(error)
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
