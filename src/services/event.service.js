const Event = require('../model/model')
const { v4: uuidv4 } = require('uuid')

exports.getAllEvents = async () => {
  const allEvents = await Event.find({})
  return allEvents
}

exports.getEventById = async id => {
  const event = await Event.findById(id)
  return event
}

exports.createEvent = async details => {
  const { title, description, location, img } = details

  if (!title || !description || !location || title.length < 3 || description.length < 3 || location.length < 3) {
    throw new Error('Bad input parameters!')
  }

  // new instance of the event model
  const newEvent = new Event({ 
    title, 
    description, 
    location, 
    img 
  })

  await newEvent.save()
}

exports.updateEvent = async (id, details) => {
  const updatedEvent = await Event.findByIdAndUpdate(id, details)
  if (!updatedEvent) {
    throw new Error(`Event with Id: ${id} not found!`)
  }
}

exports.deleteEvent = async id => {
  const deletedEvent = await Event.findByIdAndDelete(id)
  if (!deletedEvent) {
    throw new Error(`Event with Id: ${id} not found!`)
  }
}
