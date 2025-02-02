const mongoose = require('mongoose')
const userSchema = require('./user')
const bookSchema = require('./book')
const meetingSchema = require('./meeting')

const User = mongoose.model('User', userSchema)
const Book = mongoose.model('Book', bookSchema)
const Meeting = mongoose.model('Meeting', meetingSchema)

module.exports = {
  User,
  Book,
  Meeting
}
