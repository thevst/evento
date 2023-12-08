const Event = require('../model/model')

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({})
    res.render('index', { events })
    // return in JSON format - res.status(200).json(events)
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
    const event = await Event.findById(id)
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

    if (!title || !description || !location || title.length < 3 || description.length < 3 || location.length < 3) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Bad input parameters!',
      })
    }

    // new instance of the event model
    const newEvent = new Event({ title, description, location, img })
    await newEvent.save()

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
    const _event = await Event.findByIdAndUpdate(id, req.body)

    if (!_event) {
      return res.status(404).json({
        statusCode: 404,
        message: `Err, Event with Id: ${id} not found!`,
      })
    } else {
      res.status(200).json({
        statusCode: 200,
        message: 'Event edited successfully!',
      })
    }
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
    const _event = await Event.findByIdAndDelete(id)
    // ternary operator -> condition ? exprIfTrue : exprIfFalse
    !_event
      ? res.status(404).json({
          statusCode: 404,
          message: `Err, Event with Id: ${id} not found!`,
        })
      : res.status(200).json({
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
