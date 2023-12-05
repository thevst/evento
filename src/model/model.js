const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const eventSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    img: {
      type: String, // string: img URL path
      required: false,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
)

const Event = mongoose.model('Events', eventSchema)
module.exports = Event
