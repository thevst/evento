const express = require('express')
const router = express.Router()

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require('../controller/controller')

const invalidRoute = require('./notfound')

router.get('/', getAllEvents)
router.get('/event/:id', getEventById)
router.post('/event', createEvent)
router.put('/event/:id', updateEvent)
router.delete('/event/:id', deleteEvent)
router.use(invalidRoute)

module.exports = router
