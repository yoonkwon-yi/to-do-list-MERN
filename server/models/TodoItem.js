const mongoose = require('mongoose')

const TodoItemSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },

  deadline: {
    type: Date,
    min: '2021-10-27',
    max: '2121-10-27',
    default: Date.now
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('TodoItem', TodoItemSchema)
