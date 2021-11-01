const TodoItem = require('../models/TodoItem')

// @desc Get all items
// @route GET /api/v1/itemactions
// @access Public
exports.getItems = async (req, res, next) => {
  try {
    const todoItems = await TodoItem.find()

    return res.status(200).json({
      success: true,
      count: todoItems.length,
      data: todoItems
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// @desc Add item to to-do-list
// @route POST /api/v1/itemactions
// @access Public
exports.addItem = async (req, res, next) => {
  try {
    const { text, deadline } = req.body
    const item = await TodoItem.create(req.body)

    return res.status(201).json({
      success: true,
      data: item
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message)

      return res.status(400).json({ success: false, error: messages })
    } else {
      return res.status(500).json({ success: false, error: 'Server Error' })
    }
  }
}

// @desc Delete item from to-do-list
// @route DELETE /api/v1/itemactions/:id
// @access Public
exports.deleteItem = async (req, res, next) => {
  try {
    const item = await TodoItem.findById(req.params.id)

    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      })
    }

    await item.remove()

    return res.status(200).json({ success: true, data: {} })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
  res.send('DELETE list item')
}
