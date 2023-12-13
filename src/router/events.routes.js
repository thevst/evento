const express = require('express')
const router = express.Router()
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require('../controller/controller')

router.get('/', getAllEvents)
router.get('/event/:id', getEventById)
router.post('/', createEvent)
router.put('/event/:id', updateEvent)
router.delete('/event/:id', deleteEvent)

module.exports = router