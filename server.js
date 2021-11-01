const express = require('express')
const dotenv = require('dotenv') //global variable
const colors = require('colors') //logging with color
const morgan = require('morgan') // HTTP request logger middleware for Node. js.
const connectDB = require('./config/db')

// Accessing the path module
const path = require('path')

dotenv.config({ path: './config/config.env' })

connectDB()

const itemlists = require('./routes/itemlists')

const app = express()

app.use(express.json())

app.use('/api/v1/itemlists', itemlists)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.red.bold
  )
)
