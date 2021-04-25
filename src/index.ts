import express from 'express'

const app = express()
const port = process.env.DPI_SERVER_PORT ?? 7777

app.get('/up', (_, res) => {
  console.log('up')
  res.json({ status: 'ok' })
})

app.get('/down', (_, res) => {
  console.log('down')
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`dpi-monitor server running at http://localhost:${port}`)
})
