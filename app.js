const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const path = require('path')
const helmet = require('helmet')

require('dotenv').config({})
const app = express()

app.use(express.static('public'))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src', 'views'))

app.use(express.json())
app.use(bodyParser.json())
app.use(helmet())

// body parser for all requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

module.exports = app
