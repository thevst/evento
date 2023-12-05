const mongoose = require('mongoose')
const http = require('http')
const app = require('./app')

require('dotenv').config({})

const PORT = process.env.PORT || 3000
const server = http.createServer(app)

const routes = require('./src/router/routes')

app.use('/', routes)

const MONGO_URL = process.env.MONGO_URL

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Successfully connected to Mongo Atlas!')
    server.listen(PORT, () => {
      console.log(`Server is listening on http://localhost:${PORT}/`)
    })
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
    process.exit(-1)
  })
