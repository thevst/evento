const eventService = require('../services/event.service.js')

const getAllEvents = async (req, res) => {
  try {
    const events = await eventService.getAllEvents()
    res.render('index', { events })
    // return JSON: res.status(200).json(events)
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    })
  }
}

const getEventById = async (req, res) => {
  try {
    const { id } = req.params
    const event = await eventService.getEventById(id)
    if (!event) {
      return res.status(404).send('Event not found!')
    }
    res.status(200).json(event)
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    })
  }
}

const createEvent = async (req, res) => {
  try {
    const { title, description, location, img } = req.body
    await eventService.createEvent({ title, description, location, img })

    res.status(201).json({
      statusCode: 201,
      message: 'Event created successfully!',
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params
    await eventService.updateEvent(id, req.body)

    res.status(200).json({
      statusCode: 200,
      message: 'Event edited successfully!',
    })
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: error.message,
    })
  }
}

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params
    await eventService.deleteEvent(id)

    res.status(200).json({
      statusCode: 200,
      message: `Event deleted successfully!`,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
}
