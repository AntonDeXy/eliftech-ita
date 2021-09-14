const express = require('express')

const app = express()

const logger = (req, res, next) => {
  console.log('time:', new Date())
  console.log('req url:', req.url)
  console.log('req type:', req.method)

  next()
}

app.use(logger)

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(5000)