const express = require('express')
const router = express.Router()

const eventsRoutes = require('./events.routes')
const invalidRoute = require('./notfound.routes')

router.use('/', eventsRoutes)
router.use(invalidRoute)

module.exports = router