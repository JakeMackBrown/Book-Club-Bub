const express = require('express')
const cors = require('cors')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const userController = require('./controllers/userController')
const bookController = require('./controllers/bookController')
const meetingController = require('./controllers/meetingController')
const discussionController = require('./controllers/discussionController')
const { User, Book, Meeting } = require('./models')

const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

console.log('Database connected')

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  })

// User routes
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getUserById)
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

// Book routes
app.get('/books', bookController.getAllBooks)
app.get('/books/:id', bookController.getBookById)
app.post('/books', bookController.createBook)
app.put('/books/:id', bookController.updateBook)
app.delete('/books/:id', bookController.deleteBook)

// Meeting routes
app.get('/meetings', meetingController.getAllMeetings)
app.get('/meetings/:id', meetingController.getMeetingById)
app.post('/meetings', meetingController.createMeeting)
app.put('/meetings/:id', meetingController.updateMeeting)
app.delete('/meetings/:id', meetingController.deleteMeeting)

// Discussion routes
app.get('/discussions', discussionController.getAllDiscussions)
app.get('/discussions/:id', discussionController.getDiscussionById)
app.post('/discussions', discussionController.createDiscussion)
app.put('/discussions/:id', discussionController.updateDiscussion)
app.delete('/discussions/:id', discussionController.deleteDiscussion)

app.get('/clubs', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'books.html'))
})

app.get('/clubs', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'clubs.html'))
})

app.get('/meetings', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'meetings.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'login.html'))
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'register.html'))
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dashboard.html'))
})

app.post('/create-club', async (req, res) => {
  try {
    const { clubName } = req.body
    console.log(`Creating club: ${clubName}`)
    res.redirect('/')
  } catch (error) {
    res.status(500).send('Server Error')
  }
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))