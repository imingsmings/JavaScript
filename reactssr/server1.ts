import express from 'express'
import fs from 'node:fs/promises'
import { createServer } from 'vite'

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
  const result = (await vite.ssrLoadModule('./src/entry-server.tsx')).render()
  const html = template.replace('<!--ssr-view-->', result.html)
  res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
