const express = require('express')
const cors = require('cors')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const userController = require('./controllers/userController')
const bookController = require('./controllers/bookController')
const meetingController = require('./controllers/meetingController')
const discussionController = require('./controllers/discussionController')
const { User, Book, Meeting } = require('./models')
const auth = require('./middleware/auth') // Importing auth middleware
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

console.log('Database connected')

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

// User routes
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getUserById)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)
app.post('/register', userController.registerUser)
app.post('/login', userController.loginUser)
app.put('/profile', auth, userController.updateUserProfile)

// Book routes
app.get('/books', bookController.getAllBooks)
app.get('/books/:id', bookController.getBookById)
app.post('/books', auth, bookController.createBook) // Protected route
app.put('/books/:id', auth, bookController.updateBook) // Protected route
app.delete('/books/:id', auth, bookController.deleteBook) // Protected route

// Meeting routes
app.get('/meetings', meetingController.getAllMeetings)
app.get('/meetings/:id', meetingController.getMeetingById)
app.post('/meetings', auth, meetingController.createMeeting) // Protected route
app.put('/meetings/:id', auth, meetingController.updateMeeting) // Protected route
app.delete('/meetings/:id', auth, meetingController.deleteMeeting) // Protected route

// Discussion routes
app.get('/discussions', discussionController.getAllDiscussions)
app.get('/discussions/:id', discussionController.getDiscussionById)
app.post('/discussions', auth, discussionController.createDiscussion) // Protected route
app.put('/discussions/:id', auth, discussionController.updateDiscussion) // Protected route
app.delete('/discussions/:id', auth, discussionController.deleteDiscussion) // Protected route

app.post('/create-club', async (req, res) => {
  try {
    const { clubName } = req.body
    console.log(`Creating club: ${clubName}`)
    res.redirect('/')
  } catch (error) {
    res.status(500).send('Server Error')
  }
})

// Protected route example
app.get('/protected-route', auth, (req, res) => {
  res.send('This is a protected route')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
